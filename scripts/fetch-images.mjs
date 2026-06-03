/* =============================================================
 *  기프트 이미지 수집·연결기
 *  기프트는 위키/게임 한글에서 오므로(haneuk과 출처가 다름) 이름으로 매칭해
 *  haneuk 썸네일을 로컬 assets/gifts 에 받고 gifts.gen.js 에 img 부착.
 *  (사건·카드팩 이미지는 scripts/scrape-haneuk.mjs 가 직접 처리)
 *  실행:  node scripts/fetch-images.mjs
 *  출처: limbus.haneuk.info (이미지 저작권은 Project Moon)
 * ============================================================= */
import { writeFile, mkdir, access } from "node:fs/promises";
import { createWriteStream, readFileSync } from "node:fs";
import { Readable } from "node:stream";
import { fileURLToPath } from "node:url";
import { dirname, join, basename } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const B = "https://limbus.haneuk.info";
const H = { headers: { "User-Agent": "MD-Helper/1.0 (personal fan project)", Accept: "application/json" } };
const norm = (s) => String(s).toLowerCase().replace(/[‘’'\s]/g, "").replace(/[^0-9a-z가-힣]/g, "");

async function getJson(path) {
  const r = await fetch(B + path, H);
  if (!r.ok) throw new Error(path + " -> " + r.status);
  return r.json();
}
async function exists(p) { try { await access(p); return true; } catch { return false; } }
function loadGen(file) {
  const src = readFileSync(join(ROOT, file), "utf8");
  return JSON.parse(src.slice(src.indexOf("["), src.lastIndexOf("]") + 1));
}

async function downloadAll(jobs, concurrency = 6) {
  const seen = new Set();
  const uniq = jobs.filter((j) => (seen.has(j.dest) ? false : seen.add(j.dest)));
  let i = 0, ok = 0, skip = 0, fail = 0;
  async function worker() {
    while (i < uniq.length) {
      const { url, dest } = uniq[i++];
      if (await exists(dest)) { skip++; continue; }
      try {
        const r = await fetch(url, { headers: H.headers });
        if (!r.ok) throw new Error("HTTP " + r.status);
        await new Promise((res, rej) => {
          const ws = createWriteStream(dest);
          Readable.fromWeb(r.body).pipe(ws);
          ws.on("finish", res); ws.on("error", rej);
        });
        ok++;
        if (ok % 50 === 0) console.log(`    ...${ok} 다운로드`);
      } catch { fail++; }
    }
  }
  await Promise.all(Array.from({ length: concurrency }, worker));
  console.log(`    완료: 신규 ${ok}, 건너뜀 ${skip}, 실패 ${fail}`);
}

(async () => {
  await mkdir(join(ROOT, "assets", "gifts"), { recursive: true });
  await mkdir(join(ROOT, "assets", "keywords"), { recursive: true });

  // 키워드 아이콘(화상/출혈/.../타격) — 파일명을 키워드명으로 저장
  console.log("키워드 아이콘 로딩...");
  const kwApi = (await getJson("/api/user/keyword/all-cached")).content || [];
  const kwJobs = [];
  for (const k of kwApi) {
    const f = (k.files || [])[0];
    if (f && f.path) kwJobs.push({ url: B + f.path, dest: join(ROOT, "assets", "keywords", k.keywordName + ".webp") });
  }
  await downloadAll(kwJobs);

  // 키워드 사전(이름/설명/아이콘) — 효과 텍스트 하이라이트·툴팁용
  const kwInfo = [];
  const seenKw = new Set();
  for (const k of kwApi) {
    const name = (k.keywordName || "").trim();
    if (name.length < 2 || seenKw.has(name)) continue;
    if (!(k.files || []).length) continue;          // 아이콘 있는 키워드만
    if (/[\/\\]/.test(name)) continue;
    seenKw.add(name);
    kwInfo.push({ name, desc: (k.keywordDesc || "").replace(/\s+/g, " ").trim() });
  }
  kwInfo.sort((a, b) => b.name.length - a.name.length);   // 긴 이름 우선(정규식 매칭)
  await writeFile(
    join(ROOT, "js", "keywords.gen.js"),
    `/* 자동 생성 — 키워드 사전(이름/설명). 아이콘=assets/keywords/<이름>.webp. 출처: haneuk */\n` +
    `const KEYWORD_INFO = ` + JSON.stringify(kwInfo) + ";\n",
    "utf8"
  );
  console.log(`키워드 사전 ${kwInfo.length}개`);

  console.log("haneuk 기프트 이미지 인덱스 로딩...");
  const giftsApi = (await getJson("/api/user/egogift?page=0&size=10000")).items || [];
  const giftThumb = new Map(giftsApi.filter((g) => g.thumbnail).map((g) => [norm(g.giftName), g.thumbnail]));

  const GIFTS = loadGen("js/gifts.gen.js");
  const jobs = [];
  let gm = 0;
  for (const g of GIFTS) {
    const t = giftThumb.get(norm(g.name));
    if (t) {
      const f = basename(t);
      g.img = `assets/gifts/${f}`;
      jobs.push({ url: B + t, dest: join(ROOT, "assets", "gifts", f) });
      gm++;
    } else delete g.img;
  }
  console.log(`기프트 이미지 매칭 ${gm}/${GIFTS.length}, 다운로드 중...`);
  await downloadAll(jobs);

  await writeFile(
    join(ROOT, "js", "gifts.gen.js"),
    `/* 자동 생성 — 직접 수정 금지. 위키+게임한글, 이미지=haneuk */\n` +
    `const GIFTS = ` + JSON.stringify(GIFTS, null, 2) + ";\n",
    "utf8"
  );
  console.log("완료 ✓  gifts.gen.js 에 img 부착");
})().catch((e) => { console.error("오류:", e); process.exit(1); });
