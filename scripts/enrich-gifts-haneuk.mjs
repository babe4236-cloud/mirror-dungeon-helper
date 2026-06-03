/* =============================================================
 *  기프트 데이터에 haneuk 메타데이터 병합
 *  실행:  node scripts/enrich-gifts-haneuk.mjs
 *  추가 필드: diff(출현난이도 노말/하드/익스), enhance(강화 가능),
 *            curse/bless(저주/축복), ex(EX 등급), limited(한정 카드팩)
 *  출처: 단테의 달의기억 (limbus.haneuk.info) 공개 API
 * ============================================================= */
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const B = "https://limbus.haneuk.info";
const H = { headers: { "User-Agent": "MD-Helper/1.0 (personal fan project)", Accept: "application/json" } };

const norm = (s) => String(s).toLowerCase().replace(/[‘’'\s]/g, "").replace(/[^0-9a-z가-힣]/g, "");
const GRADE_KO = { N: "노말", H: "하드", E: "익스" };

const giftsPath = join(ROOT, "js", "gifts.gen.js");
const raw = await readFile(giftsPath, "utf8");
const headerMatch = raw.match(/^([\s\S]*?)const GIFTS = /);
const header = headerMatch ? headerMatch[1] : "";
const GIFTS = JSON.parse(raw.replace(/^[\s\S]*?const GIFTS = /, "").replace(/;\s*$/, ""));

const r = await fetch(B + "/api/user/egogift?page=0&size=10000", H);
const items = (await r.json()).items || [];
const byName = new Map(items.map((it) => [norm(it.giftName), it]));

let matched = 0;
for (const g of GIFTS) {
  const h = byName.get(norm(g.name));
  // 기존 보정 필드 제거(재실행 멱등성)
  delete g.diff; delete g.enhance; delete g.curse; delete g.bless; delete g.ex; delete g.limited;
  if (!h) continue;
  matched++;
  const diff = (h.grades || []).map((x) => GRADE_KO[x]).filter(Boolean);
  if (diff.length) g.diff = diff;
  if (h.enhanceYn === "Y") g.enhance = true;
  if (h.curseBlessCd === "CURSE") g.curse = true;
  if (h.curseBlessCd === "BLESS") g.bless = true;
  if (h.giftTier === "EX") g.ex = true;
  const lim = (h.limitedCategoryNames || []).filter(Boolean);
  if (lim.length) g.limited = lim;
}

const out = header + "const GIFTS = " + JSON.stringify(GIFTS, null, 2) + ";\n";
await writeFile(giftsPath, out, "utf8");
console.log(`병합 완료: ${matched}/${GIFTS.length}개 매칭`);
const cnt = (f) => GIFTS.filter(f).length;
console.log(`  난이도 보유: ${cnt((g) => g.diff)} (하드만: ${cnt((g) => g.diff && g.diff.includes("하드") && !g.diff.includes("노말"))}, 익스: ${cnt((g) => g.diff && g.diff.includes("익스"))})`);
console.log(`  강화가능: ${cnt((g) => g.enhance)}, 저주: ${cnt((g) => g.curse)}, 축복: ${cnt((g) => g.bless)}, EX: ${cnt((g) => g.ex)}, 한정팩: ${cnt((g) => g.limited)}`);
