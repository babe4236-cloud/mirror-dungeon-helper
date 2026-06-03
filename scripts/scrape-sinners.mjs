/* =============================================================
 *  수감자(인격) 데이터 수집기
 *  출처: 연심(連心) yeon-sim.github.io (게임 StaticData + 한글)
 *    - data/personality/info/personality-01..12.json  인격 스탯
 *    - data/lang/kr/KR_Personalities.json              한글 이름
 *    - static/images/personality, static/images/sin    이미지
 *  실행:  node scripts/scrape-sinners.mjs
 *  출력:  js/sinners.gen.js (SINNERS)  /  assets/sinners, assets/sin 이미지
 *  주의: 팬사이트 공개 데이터. 동시성 제한·재실행 캐시. 저작권은 Project Moon.
 * ============================================================= */
import { writeFile, mkdir, access } from "node:fs/promises";
import { createWriteStream } from "node:fs";
import { Readable } from "node:stream";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const REPO = "yeon-sim/yeon-sim.github.io";
const RAW = "https://raw.githubusercontent.com/" + REPO + "/master/";
const UA = { headers: { "User-Agent": "MD-Helper/1.0 (personal fan project)" } };

const CHARACTER = { 1: "이상", 2: "파우스트", 3: "돈키호테", 4: "료슈", 5: "뫼르소", 6: "홍루", 7: "히스클리프", 8: "이스마엘", 9: "로지온", 10: "싱클레어", 11: "오티스", 12: "그레고르" };
const COLOR = { CRIMSON: "분노", SCARLET: "색욕", AMBER: "나태", SHAMROCK: "탐식", AZURE: "우울", INDIGO: "오만", VIOLET: "질투" };
const RANK = { 1: "0", 2: "00", 3: "000" };
const KW = {
  Sinking: "침잠", Bleed: "출혈", Laceration: "출혈", Burn: "화상", Combustion: "화상",
  Tremor: "진동", Vibration: "진동", Rupture: "파열", Burst: "파열",
  Poise: "호흡", Breath: "호흡", Charge: "충전", Slash: "참격", Penetrate: "관통", Blunt: "타격", Hit: "타격"
};
const RTYPE = { SLASH: "참격", PENETRATE: "관통", HIT: "타격" };
const ATK = { SLASH: "참격", PENETRATE: "관통", HIT: "타격", NONE: "" };
const resistLabel = (v) => v < 1 ? `저항(${v}x)` : v > 1 ? `취약(${v}x)` : "보통";
/* 스킬 효과의 키워드 내부 태그 → 한글 (SkillTag는 게임 데이터에서 로드) */
const KWTAG = {
  Laceration: "출혈", Combustion: "화상", Vibration: "진동", Burst: "파열",
  Sinking: "침잠", Breath: "호흡", Charge: "충전", Bleed: "출혈", Burn: "화상",
  Tremor: "진동", Rupture: "파열", Poise: "호흡", Slash: "참격", Penetrate: "관통", Hit: "타격"
};
let SKILLTAG = {};   // 게임 데이터: OnSucceedAttack → "[적중시]" 등
let KWCODE = {};     // 게임 데이터: SuperCoin → "파괴 불가 코인" 등 (keywords.json)
function cleanSkill(s) {
  if (!s) return "";
  return s
    .replace(/\[([A-Za-z][A-Za-z0-9_]*)\]/g, (m, t) => SKILLTAG[t] || KWCODE[t] || KWTAG[t] || m)
    .replace(/\{n\}/g, "N")
    .replace(/<[^>]+>/g, "")
    .replace(/[ \t]+/g, " ")
    .replace(/ *\r?\n */g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}
function buildSkill(stat, krEntry) {
  const base0 = stat.skillData[0] || {};
  const DEFLABEL = { GUARD: "수비", COUNTER: "반격", EVADE: "회피" };
  const DEFSORT = { GUARD: 9, COUNTER: 10, EVADE: 11 };
  const tier = DEFLABEL[base0.defType] || "스킬 " + stat.skillTier;
  // 각성(uptie) 단계: 스탯/한글이 바뀌는 지점들
  const statLv = stat.skillData.map((d) => d.gaksungLevel || 1);
  const krLv = (krEntry?.levelList || []).map((l) => l.level);
  const upties = [...new Set([1, ...statLv, ...krLv])].sort((a, b) => a - b);
  const levels = upties.map((U) => {
    const f = Object.assign({}, ...stat.skillData.filter((d) => (d.gaksungLevel || 1) <= U));
    const coins = f.coinList || [];
    const base = f.defaultValue || 0;
    const sum = coins.reduce((a, c) => a + (c.operatorType === "SUB" ? -c.scale : c.scale), 0);
    const scaleStr = coins.length ? coins.map((c) => (c.operatorType === "SUB" ? "-" : "+") + c.scale).join(" ") : "";
    let name = "", desc = "", coinDescs = [];
    if (krEntry?.levelList?.length) {
      const lv = krEntry.levelList.filter((l) => l.level <= U).slice(-1)[0] || krEntry.levelList[0];
      name = lv.name || "";
      desc = cleanSkill(lv.desc || "");
      coinDescs = (lv.coinlist || []).map((c) => (c.coindescs || []).map((d) => cleanSkill(d.desc || "")).filter(Boolean)).flat();
    }
    return { uptie: U, base, coins: coins.length, scaleStr, max: base + sum, name, desc, coinDescs };
  });
  // 연속 동일 단계 축약(uptie만 갱신)
  const dedup = [];
  for (const l of levels) {
    const prev = dedup[dedup.length - 1];
    if (prev && JSON.stringify({ ...prev, uptie: 0 }) === JSON.stringify({ ...l, uptie: 0 })) continue;
    dedup.push(l);
  }
  return {
    tier, name: dedup[dedup.length - 1].name || "",
    atk: ATK[base0.atkType] || "", sin: COLOR[base0.attributeType] || "", mp: base0.mpUsage || 0,
    sortKey: DEFSORT[base0.defType] ?? stat.skillTier, levels: dedup
  };
}

async function getJson(p) { const r = await fetch(RAW + p, UA); if (!r.ok) throw new Error(p + " " + r.status); return r.json(); }
async function exists(p) { try { await access(p); return true; } catch { return false; } }

async function downloadAll(jobs, concurrency = 8) {
  const seen = new Set();
  const uniq = jobs.filter((j) => (seen.has(j.dest) ? false : seen.add(j.dest)));
  let i = 0, ok = 0, skip = 0, fail = 0;
  async function worker() {
    while (i < uniq.length) {
      const { url, dest } = uniq[i++];
      if (await exists(dest)) { skip++; continue; }
      try {
        const r = await fetch(url, UA);
        if (!r.ok) throw 0;
        await new Promise((res, rej) => { const ws = createWriteStream(dest); Readable.fromWeb(r.body).pipe(ws); ws.on("finish", res); ws.on("error", rej); });
        ok++; if (ok % 50 === 0) console.log(`    ...${ok}`);
      } catch { fail++; }
    }
  }
  await Promise.all(Array.from({ length: concurrency }, worker));
  console.log(`    이미지: 신규 ${ok}, 건너뜀 ${skip}, 실패 ${fail}`);
}

/* 인격 id에 맞는 이미지 경로 선택 */
const IMG_PRIO = ["_normal_profile_support_personality", "_gacksung_profile_support_personality", "_normal_profile", "_gacksung_profile", "_normal", "_gacksung"];
const ART_PRIO = ["_normal_info", "_gacksung_info", "_normal", "_gacksung"];   // 가챠 카드 전체 일러스트
function pickBy(images, id, prio) {
  const cand = images.filter((p) => p.split("/").pop().startsWith(id + "_"));
  for (const suf of prio) {
    const hit = cand.find((p) => p.split("/").pop() === id + suf + ".webp");
    if (hit) return hit;
  }
  return cand[0];
}

(async () => {
  await mkdir(join(ROOT, "assets", "sinners"), { recursive: true });
  await mkdir(join(ROOT, "assets", "sinners_art"), { recursive: true });
  await mkdir(join(ROOT, "assets", "sin"), { recursive: true });
  await mkdir(join(ROOT, "assets", "ui"), { recursive: true });
  await mkdir(join(ROOT, "assets", "cat"), { recursive: true });

  console.log("이미지 인덱스·이름 로딩...");
  const tree = await fetch(`https://api.github.com/repos/${REPO}/git/trees/master?recursive=1`, { headers: { ...UA.headers, Accept: "application/vnd.github+json" } }).then((r) => r.json());
  const allPaths = (tree.tree || []).map((t) => t.path);
  const persImgs = allPaths.filter((p) => p.startsWith("static/images/personality/") && p.endsWith(".webp"));

  const krList = (await getJson("data/lang/kr/KR_Personalities.json")).dataList || [];
  const nameMap = new Map(krList.map((k) => [k.id, k]));

  // 스킬 태그 사전 + KR 스킬 텍스트(기본 + 캐릭터별) 병합
  for (const t of (await getJson("data/lang/kr/parsingdata/KR_SkillTag.json")).dataList || []) SKILLTAG[t.id] = t.name;
  const kwJson = await getJson("data/keywords.json");
  for (const k of (kwJson.dataList || kwJson.list || kwJson || [])) if (k && k.id) KWCODE[k.id] = k.name;
  const krSkillMap = new Map();
  const krSkillFiles = ["data/lang/kr/skill/KR_Skills.json",
    ...Array.from({ length: 12 }, (_, i) => `data/lang/kr/skill/KR_Skills_personality-${String(i + 1).padStart(2, "0")}.json`)];
  for (const f of krSkillFiles) {
    try { for (const k of (await getJson(f)).dataList || []) krSkillMap.set(k.id, k); } catch { /* 없으면 무시 */ }
  }
  // 패시브 한글 텍스트
  const passiveText = new Map();
  for (const f of ["data/lang/kr/passive/KR_Passives.json", "data/lang/kr/passive/KR_Passives_check4.json"]) {
    try { for (const p of (await getJson(f)).dataList || []) passiveText.set(p.id, p); } catch { /* 없으면 무시 */ }
  }

  const imgJobs = [];
  const sinners = [];
  for (let c = 1; c <= 12; c++) {
    const file = `data/personality/info/personality-${String(c).padStart(2, "0")}.json`;
    let data;
    try { data = await getJson(file); } catch { continue; }
    // 스킬 스탯 → 인격별 그룹
    const skByIdentity = new Map();
    try {
      const sk = await getJson(`data/personality/skill/personality-skill-${String(c).padStart(2, "0")}.json`);
      for (const s of sk.list || []) {
        const iid = Math.floor(s.id / 100);
        if (!skByIdentity.has(iid)) skByIdentity.set(iid, []);
        skByIdentity.get(iid).push(buildSkill(s, krSkillMap.get(s.id)));
      }
    } catch { /* 스킬 없으면 무시 */ }
    // 패시브 → 인격별 (각성 단계별 / 패시브 / 서포트 패시브)
    const passByIdentity = new Map();
    try {
      const pv = await getJson(`data/personality/passive/personality-passive-${String(c).padStart(2, "0")}.json`);
      for (const e of pv.list || []) {
        passByIdentity.set(e.personalityID, { battle: e.battlePassiveList || [], support: e.supporterPassiveList || [] });
      }
    } catch { /* 패시브 없으면 무시 */ }
    // 패시브를 이름별로 묶고 각성 단계별 효과 보존
    const mkPass = (entries) => {
      const byName = new Map();
      for (const entry of entries) {
        for (const id of entry.passiveIDList || []) {
          const t = passiveText.get(id);
          if (!t) continue;
          const desc = cleanSkill(t.desc || "");
          if (!byName.has(t.name)) byName.set(t.name, { name: t.name, uptie: entry.level || 1, levels: [] });
          const p = byName.get(t.name);
          p.uptie = Math.min(p.uptie, entry.level || 1);
          if (!p.levels.some((l) => l.uptie === entry.level)) p.levels.push({ uptie: entry.level || 1, desc });
        }
      }
      return [...byName.values()].map((p) => ({ ...p, levels: p.levels.sort((a, b) => a.uptie - b.uptie) }));
    };
    for (const e of data.list || []) {
      const kr = nameMap.get(e.id) || {};
      const skills = (skByIdentity.get(e.id) || []).sort((a, b) => a.sortKey - b.sortKey);
      const imgPath = pickBy(persImgs, String(e.id), IMG_PRIO);
      let img;
      if (imgPath) { const dest = `assets/sinners/${e.id}.webp`; imgJobs.push({ url: RAW + imgPath, dest: join(ROOT, dest) }); img = dest; }
      const artPath = pickBy(persImgs, String(e.id), ART_PRIO);
      let art;
      if (artPath) { const dest = `assets/sinners_art/${e.id}.webp`; imgJobs.push({ url: RAW + artPath, dest: join(ROOT, dest) }); art = dest; }
      const resist = {};
      for (const r of e.resistInfo?.atkResistList || []) resist[RTYPE[r.type] || r.type] = resistLabel(r.value);
      sinners.push({
        id: e.id,
        name: kr.name || String(e.id),
        title: (kr.title || "").replace(/\n/g, " "),
        sinner: CHARACTER[e.characterId] || "",
        rarity: RANK[e.rank] || "",
        season: e.season,
        sin: COLOR[e.uniqueAttribute] || "",
        keywords: (e.skillKeywordList || []).map((k) => KW[k] || k),
        hp: e.hp?.defaultStat || 0,
        hpInc: e.hp?.incrementByLevel || 0,
        speedMin: (e.minSpeedList || []).slice(-1)[0] || 0,
        speedMax: (e.maxSpeedList || []).slice(-1)[0] || 0,
        def: e.defCorrection ?? 0,
        resist,
        img,
        art,
        passives: { battle: mkPass((passByIdentity.get(e.id) || {}).battle || []), support: mkPass((passByIdentity.get(e.id) || {}).support || []) },
        skills
      });
    }
  }

  // 죄악 아이콘 (색상 → 한글명 파일)
  const SIN_FILE = { CRIMSON: "Crimson", SCARLET: "Scarlet", AMBER: "Amber", SHAMROCK: "Shamrock", AZURE: "Azure", INDIGO: "Indigo", VIOLET: "Violet" };
  for (const [color, ko] of Object.entries(COLOR)) {
    const f = SIN_FILE[color];
    imgJobs.push({ url: RAW + `static/images/sin/${f}.png`, dest: join(ROOT, "assets", "sin", ko + ".png") });
  }
  // 등급 프레임 + 랭크 배지 (가챠 카드 UI)
  for (let n = 1; n <= 3; n++) {
    imgJobs.push({ url: RAW + `static/images/ui/personality_frame_0${n}.png`, dest: join(ROOT, "assets", "ui", `frame_0${n}.png`) });
    imgJobs.push({ url: RAW + `static/images/ui/personality_rank_0${n}.png`, dest: join(ROOT, "assets", "ui", `rank_0${n}.png`) });
  }
  // 캐릭터 카테고리 아이콘 (그룹 헤더용) — 한글명으로 저장
  const CAT_FILE = ["01_yisang", "02_faust", "03_donquixote", "04_ryoshu", "05_meursault", "06_honglu", "07_heathcliff", "08_ishmael", "09_rodya", "10_sinclair", "11_outis", "12_gregor"];
  for (let i = 0; i < 12; i++) {
    imgJobs.push({ url: RAW + `static/images/category/${CAT_FILE[i]}.png`, dest: join(ROOT, "assets", "cat", CHARACTER[i + 1] + ".png") });
  }

  sinners.sort((a, b) => a.id - b.id);
  console.log(`인격 ${sinners.length}개 / 이미지 다운로드(${new Set(imgJobs.map((j) => j.dest)).size})...`);
  await downloadAll(imgJobs);

  await writeFile(
    join(ROOT, "js", "sinners.gen.js"),
    `/* 자동 생성 — node scripts/scrape-sinners.mjs. 출처: 연심 yeon-sim.github.io (게임 데이터) */\n` +
    `const SINNERS = ` + JSON.stringify(sinners, null, 1) + ";\n",
    "utf8"
  );
  console.log("완료 ✓  js/sinners.gen.js");
})().catch((e) => { console.error("오류:", e); process.exit(1); });
