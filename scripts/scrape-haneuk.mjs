/* =============================================================
 *  카드팩 + 사건 수집기 (haneuk) — 한글 + 이미지
 *  출처: 단테의 달의기억 (limbus.haneuk.info) 공개 API
 *    - /api/user/cardpack            카드팩 목록(+썸네일)
 *    - /api/user/dungeon/event       사건(노드=선택지, cardpackIds, 일러스트)
 *  실행:  node scripts/scrape-haneuk.mjs
 *  출력:  js/cardpacks.gen.js (CARDPACKS)  /  js/events.gen.js (EVENTS)
 *         assets/packs, assets/events 에 이미지 다운로드(이미 받은 건 건너뜀)
 *  주의: 팬사이트의 공개 데이터입니다. 동시성 제한·재실행 캐시로 서버를 배려합니다.
 *        이미지 저작권은 Project Moon.
 * ============================================================= */
import { writeFile, mkdir, access } from "node:fs/promises";
import { createWriteStream } from "node:fs";
import { Readable } from "node:stream";
import { fileURLToPath } from "node:url";
import { dirname, join, basename } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const B = "https://limbus.haneuk.info";
const H = { headers: { "User-Agent": "MD-Helper/1.0 (personal fan project)", Accept: "application/json" } };
const THEME = { 1: "스토리 테마", 2: "이벤트 테마", 3: "기본", 4: "테마", 5: "테마", 6: "테마" };
const GRADE = { N: "노말", H: "하드", E: "익스트림" };
const gradeKo = (gs) => (gs || []).map((g) => GRADE[g] || g).join("/");

/* 인게임 마크업·보이지 않는 태그 문자 정리 */
function clean(s) {
  if (!s) return "";
  return s
    .replace(/[\u{E0000}-\u{E007F}]/gu, "")
    .replace(/\{(?:blue|yellow|red|green|gray|grey|purple|orange|cyan):([^}]*)\}/g, "$1")
    .replace(/\[\[([^\]]*)\]\]/g, "$1")
    .replace(/\{([^}]*)\}/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

/* 스토리 설명용 정리 (문단 줄바꿈 보존) */
function cleanScript(s) {
  if (!s) return "";
  return s
    .replace(/[\u{E0000}-\u{E007F}]/gu, "")
    .replace(/\{(?:blue|yellow|red|green|gray|grey|purple|orange|cyan):([^}]*)\}/g, "$1")
    .replace(/\[\[([^\]]*)\]\]/g, "$1")
    .replace(/\{([^}]*)\}/g, "$1")
    .replace(/[ \t]+/g, " ")
    .replace(/ *\r?\n */g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/* 사건 노드(평면 목록)를 선택지 구조로 묶기 */
function parseNodes(nodes) {
  const choices = [];
  let cur = null;
  for (const n of nodes) {
    const title = clean(n.title);
    const sub = clean(n.subtitle);
    if (title === "성공") { if (cur) cur.success = sub; continue; }
    if (title === "실패") { if (cur) cur.fail = sub; continue; }
    cur = { text: title, info: sub, success: "", fail: "" };
    choices.push(cur);
  }
  return choices;
}

async function getJson(path) {
  const r = await fetch(B + path, H);
  if (!r.ok) throw new Error(path + " -> HTTP " + r.status);
  return r.json();
}
async function exists(p) { try { await access(p); return true; } catch { return false; } }

/* 동시성 제한 이미지 다운로드 (이미 있으면 건너뜀) */
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
  console.log(`    이미지: 신규 ${ok}, 건너뜀 ${skip}, 실패 ${fail}`);
}

(async () => {
  await mkdir(join(ROOT, "js"), { recursive: true });
  await mkdir(join(ROOT, "assets", "packs"), { recursive: true });
  await mkdir(join(ROOT, "assets", "events"), { recursive: true });
  await mkdir(join(ROOT, "assets", "gifts"), { recursive: true });
  console.log("카드팩·사건 수집 중...");

  const packsRaw = (await getJson("/api/user/cardpack?page=1&size=1000")).items || [];
  const eventsRaw = (await getJson("/api/user/dungeon/event?page=1&size=10000")).items || [];
  console.log(`  카드팩 ${packsRaw.length}개, 사건 ${eventsRaw.length}개`);

  const packTitle = new Map(packsRaw.map((p) => [p.cardpackId, p.title]));
  const imgJobs = [];
  const localPack = (thumb) => {
    if (!thumb) return undefined;
    const f = basename(thumb);
    imgJobs.push({ url: B + thumb, dest: join(ROOT, "assets", "packs", f) });
    return `assets/packs/${f}`;
  };
  const localEvent = (path) => {
    if (!path) return undefined;
    const f = basename(path);
    imgJobs.push({ url: B + path, dest: join(ROOT, "assets", "events", f) });
    return `assets/events/${f}`;
  };

  // 기프트 id→이름 (사건 획득 기프트 연결용; 조합식에서도 재사용)
  const giftsRaw = (await getJson("/api/user/egogift?page=0&size=10000")).items || [];
  const giftIdToName = new Map(giftsRaw.map((g) => [g.egogiftId, g.giftName]));

  // --- 사건 (Q&A: 한글 + 이미지 + 팩명 + 스토리 + 획득 기프트) ---
  const events = eventsRaw.map((e) => ({
    id: "e_" + e.eventId, eventId: e.eventId,
    name: e.title,
    packs: (e.cardpackIds || []).map((id) => packTitle.get(id)).filter(Boolean),
    img: localEvent(e.attachmentPath),
    desc: "",
    gifts: [],
    choices: parseNodes(e.nodes || [])
  }));
  console.log("사건 상세(스토리·획득 기프트) 수집 중...");
  let ei = 0;
  async function evWorker() {
    while (ei < events.length) {
      const ev = events[ei++];
      try {
        const d = await getJson(`/api/user/dungeon/event/${ev.eventId}`);
        ev.desc = cleanScript(d.script || "");
        const gids = [...new Set((d.nodes || []).flatMap((n) => n.egogiftIds || []))];
        ev.gifts = gids.map((id) => giftIdToName.get(id)).filter(Boolean);
      } catch { /* 무시 */ }
    }
  }
  await Promise.all(Array.from({ length: 6 }, evWorker));
  events.sort((a, b) => a.name.localeCompare(b.name, "ko"));

  // --- 카드팩 (사건 역인덱싱) ---
  const byPack = new Map();
  for (const e of events) {
    for (const id of (eventsRaw.find((r) => "e_" + r.eventId === e.id)?.cardpackIds || [])) {
      if (!byPack.has(id)) byPack.set(id, []);
      byPack.get(id).push({ title: e.name, img: e.img, choices: e.choices });
    }
  }
  const cardpacks = packsRaw.map((p) => ({
    id: p.cardpackId,
    title: p.title,
    theme: THEME[p.themeType] || "테마",
    desc: p.description || "",
    img: localPack(p.thumbnail),
    floors: p.floors || [],
    difficulties: p.difficulties || [],
    events: byPack.get(p.cardpackId) || []
  })).sort((a, b) => b.events.length - a.events.length || a.id - b.id);

  const withEvents = cardpacks.filter((p) => p.events.length).length;
  const evImg = events.filter((e) => e.img).length;
  console.log(`  사건 연결 카드팩 ${withEvents}개 / 사건 이미지 ${evImg}/${events.length}`);

  // --- 조합식(합성 레시피) ---
  const localGift = (thumb) => {
    if (!thumb) return undefined;
    const f = basename(thumb);
    imgJobs.push({ url: B + thumb, dest: join(ROOT, "assets", "gifts", f) });
    return `assets/gifts/${f}`;
  };
  console.log("조합식 수집 중...");
  const synGifts = giftsRaw.filter((g) => g.synthesisYn === "Y");
  const recipes = [];
  // 동시성 6으로 레시피 엔드포인트 호출
  let gi = 0;
  async function recipeWorker() {
    while (gi < synGifts.length) {
      const g = synGifts[gi++];
      try {
        const d = await getJson(`/api/user/egogift/${g.egogiftId}/recipe`);
        for (const rc of d.recipes || []) {
          const ing = rc.items.filter((it) => it.type === "재료");
          const res = rc.items.find((it) => it.type === "결과") || {};
          recipes.push({
            id: rc.recipeId,
            title: clean(rc.title || ""),
            result: { name: clean(res.egogiftName || g.giftName), img: localGift(res.thumbnail), grade: gradeKo(res.grades) },
            ingredients: ing.map((it) => ({ name: clean(it.egogiftName), img: localGift(it.thumbnail), grade: gradeKo(it.grades) }))
          });
        }
      } catch { /* 일부 실패 무시 */ }
    }
  }
  await Promise.all(Array.from({ length: 6 }, recipeWorker));
  recipes.sort((a, b) => a.result.name.localeCompare(b.result.name, "ko"));
  console.log(`  조합식 ${recipes.length}개 (합성 기프트 ${synGifts.length})`);

  console.log(`이미지 다운로드(${new Set(imgJobs.map((j) => j.dest)).size}개)...`);
  await downloadAll(imgJobs);

  const emit = (v, arr, note) =>
    `/* 자동 생성 — node scripts/scrape-haneuk.mjs 로 재생성. 직접 수정 금지.\n   ${note} */\n` +
    `const ${v} = ` + JSON.stringify(arr, null, 1) + ";\n";
  await writeFile(join(ROOT, "js", "events.gen.js"),
    emit("EVENTS", events, "출처: 단테의 달의기억 (limbus.haneuk.info) — 한글 사건+이미지"), "utf8");
  await writeFile(join(ROOT, "js", "cardpacks.gen.js"),
    emit("CARDPACKS", cardpacks, "출처: 단테의 달의기억 (limbus.haneuk.info) — 카드팩"), "utf8");
  await writeFile(join(ROOT, "js", "recipes.gen.js"),
    emit("RECIPES", recipes, "출처: 단테의 달의기억 (limbus.haneuk.info) — 조합식"), "utf8");
  console.log("완료 ✓  js/events.gen.js, js/cardpacks.gen.js, js/recipes.gen.js");
})().catch((e) => { console.error("오류:", e); process.exit(1); });
