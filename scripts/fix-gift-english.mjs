/* =============================================================
 *  기프트 영문 잔존 정리
 *  - 영문 이름 중복 제거(한글판이 이미 존재)
 *  - haneuk에 없는 항목은 직접 번역
 *  - 효과에 내부 영문 용어(Muckworm/Zazen 등)가 남은 기프트는
 *    haneuk 한글 효과(desc1)로 교체
 *  실행:  node scripts/fix-gift-english.mjs   (scrape 이후, fetch-images 이전 권장)
 *  출처: limbus.haneuk.info
 * ============================================================= */
import { readFileSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const B = "https://limbus.haneuk.info";
const H = { headers: { "User-Agent": "MD-Helper/1.0 (personal fan project)", Accept: "application/json" } };
const norm = (s) => String(s).toLowerCase().replace(/[‘’'\s]/g, "").replace(/[^0-9a-z가-힣]/g, "");

const REMOVE = new Set(["Melty Eyeball", "Barbed Snare"]);   // 한글판 중복 → 제거
const MANUAL = {                                              // haneuk에 없음 → 직접 번역
  "Entry Ticket": { name: "입장권", effect: "전투 참여 인원 제한 +1" },
  "Golden Entry Ticket": { name: "황금 입장권", effect: "전투 참여 인원 제한 +1" }
};
/* haneuk에 없는 기프트의 내부 영문 태그 → 한글 (확신 가능한 것만) */
const TAG_FIX = {
  TakeHpHealIncrease: "체력 회복량 증가", TakeHpHeal: "체력 회복",
  MinusCoinValueUp: "빼기 코인 값 증가", PlusCoinValueUp: "더하기 코인 값 증가",
  BloodDinner: "피의 만찬", NailPersonality: "못",
  Muckworm: "구더기", Zazen: "참선",
  ShamrockResultUp: "탐식 판정값 증가", ShamrockDamageUp: "탐식 피해량 증가"
};
const TAG_KEYS = Object.keys(TAG_FIX).sort((a, b) => b.length - a.length);
function applyTagFix(s) {
  if (!s) return s;
  let out = s;
  for (const k of TAG_KEYS) out = out.split(k).join(TAG_FIX[k]);
  return out;
}

function cleanHaneuk(s) {
  if (!s) return "";
  return s
    .replace(/\[\[([^\]]+)\]\]/g, "$1")
    .replace(/\{[a-zA-Z]+:([^}]*)\}/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/[ \t]+/g, " ")
    .replace(/ *\r?\n */g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}
const hasEng = (s) => /[A-Za-z]{3,}/.test(String(s).replace(/E\.?G\.?O|HP|SP|AEDD|LCB|MHz|\bW\b/g, ""));

async function getJson(p) { const r = await fetch(B + p, H); if (!r.ok) throw new Error(p + " " + r.status); return r.json(); }

(async () => {
  const src = readFileSync(join(ROOT, "js", "gifts.gen.js"), "utf8");
  let gifts = JSON.parse(src.slice(src.indexOf("["), src.lastIndexOf("]") + 1));

  // 1) 영문 중복 제거
  const before = gifts.length;
  gifts = gifts.filter((g) => !REMOVE.has(g.name));
  console.log(`중복 제거: ${before - gifts.length}개 (${[...REMOVE].join(", ")})`);

  // 2) 수동 번역
  for (const g of gifts) {
    if (MANUAL[g.name]) {
      const m = MANUAL[g.name];
      g.name = m.name; g.effect = m.effect; g.localized = true;
      console.log(`수동 번역: ${m.name}`);
    }
  }

  // 3) haneuk 효과 오버레이 (영문 효과만)
  const haneuk = (await getJson("/api/user/egogift?page=0&size=10000")).items || [];
  const nameToId = new Map(haneuk.map((h) => [norm(h.giftName), h.egogiftId]));

  const targets = gifts.filter((g) => hasEng(g.effect) && nameToId.has(norm(g.name)));
  console.log(`효과 교체 대상: ${targets.length}개 (haneuk 매칭)`);

  let i = 0, fixed = 0;
  async function worker() {
    while (i < targets.length) {
      const g = targets[i++];
      try {
        const d = await getJson(`/api/user/egogift/${nameToId.get(norm(g.name))}`);
        const desc = cleanHaneuk(d.egogift?.desc1 || "");
        if (desc && !hasEng(desc)) { g.effect = desc; fixed++; }
      } catch { /* skip */ }
    }
  }
  await Promise.all(Array.from({ length: 6 }, worker));
  console.log(`효과 한글화 완료: ${fixed}개`);

  // haneuk으로 못 고친 내부 태그를 매핑 (ZAYIN 등 정식 영문 용어는 보존)
  for (const g of gifts) g.effect = applyTagFix(g.effect);

  const remain = gifts.filter((g) => hasEng(g.effect) || /[A-Za-z]{3,}/.test(g.name.replace(/LCCB|LCB|E\.?G\.?O/g, "")));
  console.log(`잔존 영문 기프트: ${remain.length}개`, remain.slice(0, 8).map((g) => g.name));

  await writeFile(
    join(ROOT, "js", "gifts.gen.js"),
    `/* 자동 생성 — 직접 수정 금지. 위키+게임한글, 영문잔존 haneuk 보정, 이미지=haneuk */\n` +
    `const GIFTS = ` + JSON.stringify(gifts, null, 2) + ";\n",
    "utf8"
  );
  console.log(`완료 ✓  기프트 ${gifts.length}개`);
})().catch((e) => { console.error("오류:", e); process.exit(1); });
