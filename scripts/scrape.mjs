/* =============================================================
 *  거울던전 도우미 — 자동 데이터 수집기
 *  실행:  node scripts/scrape.mjs
 *  출력:  js/gifts.gen.js  (const GIFTS = [...])
 *         js/events.gen.js (const EVENTS = [...])
 *
 *  출처: Limbus Company Wiki (limbuscompany.wiki.gg)
 *    - 기프트: Module:EgoGift/data  (Lua 데이터 모듈, 전체 기프트)
 *    - 사건  : Category:Mirror Dungeon Events  (페이지별 위키텍스트)
 *  주의: 위키/게임 패치로 내용이 바뀔 수 있습니다. 정기적으로 재실행하세요.
 * ============================================================= */

import { writeFile, mkdir, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const WIKI = "https://limbuscompany.wiki.gg";
const UA = { "User-Agent": "MD-Helper/1.0 (personal fan project)" };

/* ---------- 매핑 ---------- */
const SIN_MAP = {
  wrath: "분노", lust: "색욕", sloth: "나태", gluttony: "탐식",
  gloom: "우울", pride: "오만", envy: "질투"
};
const SIN_MAP_CAP = {
  Wrath: "분노", Lust: "색욕", Sloth: "나태", Gluttony: "탐식",
  Gloom: "우울", Pride: "오만", Envy: "질투"
};
const KEYWORD_MAP = {
  Bleed: "출혈", Burn: "화상", Tremor: "진동", Rupture: "파열",
  Sinking: "침잠", Poise: "호흡", Charge: "충전",
  Slash: "참격", Pierce: "관통", Penetrate: "관통", Blunt: "타격", Hit: "타격"
};
const TIER_MAP = { I: 1, II: 2, III: 3, IV: 4, V: 5 };

/* ---------- 공용 유틸 ---------- */
async function getRaw(title) {
  const url = `${WIKI}/index.php?action=raw&title=${encodeURIComponent(title)}`;
  const r = await fetch(url, { headers: UA });
  if (!r.ok) throw new Error(`${title} -> HTTP ${r.status}`);
  return r.text();
}

function cleanText(s) {
  if (!s) return "";
  let out = s;
  // {{StatusEffect|Burn|d}} -> Burn  (한글 키워드로 치환)
  out = out.replace(/\{\{StatusEffect\|([^|}]+)[^}]*\}\}/g, (_, k) => KEYWORD_MAP[k.trim()] || k.trim());
  // {{StatCon|giftsloth|Snuffed Lantern}} -> Snuffed Lantern
  out = out.replace(/\{\{StatCon\|[^|}]+\|([^}]+)\}\}/g, "$1");
  // 남은 {{...}} -> 마지막 파라미터
  for (let i = 0; i < 3; i++) {
    out = out.replace(/\{\{([^{}]*)\}\}/g, (_, inner) => {
      const parts = inner.split("|");
      return parts[parts.length - 1] || parts[0] || "";
    });
  }
  out = out
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/\[\[(?:[^\]|]*\|)?([^\]]+)\]\]/g, "$1")
    .replace(/'''?/g, "")
    .replace(/\\"/g, '"')
    .replace(/\[Sinner\]/g, "수감자")
    .replace(/\s+/g, " ")
    .trim();
  return out;
}

/* ---------- 한글 로컬라이제이션 (게임 공식 텍스트) ---------- */
/* 출처: x1bViolet/Limbus-Localization-Files (Korean 브랜치) — 게임 Assets JSON */
const LOC_REPO = "x1bViolet/Limbus-Localization-Files";
const LOC_RAW = (branch, file) =>
  `https://raw.githubusercontent.com/${LOC_REPO}/${branch}/${file}`;

/* [Combustion] 등 인게임 스프라이트 태그 -> 한글 키워드
 * 주의: 게임 내부 태그명은 표시명과 다릅니다.
 *   Bleed=Laceration / Burn=Combustion / Tremor=Vibration /
 *   Rupture=Burst / Poise=Breath  (Sinking/Charge는 동일) */
const TAG_MAP = {
  // 상태이상 내부 태그명
  Laceration: "출혈", Combustion: "화상", Vibration: "진동", Burst: "파열",
  Sinking: "침잠", Breath: "호흡", Charge: "충전",
  // 표시명(혹시 모를 변형 대비)
  Bleed: "출혈", Burn: "화상", Tremor: "진동", Rupture: "파열", Poise: "호흡",
  // 공격 유형
  Slash: "참격", Penetrate: "관통", Hit: "타격", Pierce: "관통", Blunt: "타격",
  // 능력치 / 버프 / 디버프
  Agility: "민첩", AttackUp: "공격 레벨 증가", AttackDown: "공격 레벨 감소",
  DefenseUp: "방어 레벨 증가", DefenseDown: "방어 레벨 감소",
  AttackDmgUp: "공격 피해 증가", HitDamageUp: "타격 피해 증가",
  PenetrateDamageUp: "관통 피해 증가", SlashDamageUp: "참격 피해 증가",
  CriticalDamageUp: "치명타 피해 증가", Vulnerable: "취약", Binding: "속박",
  Bullet: "탄환", Paralysis: "마비", Protection: "보호", Inspire: "고양",
  Enhancement: "강화", ResultEnhancement: "결과값 강화",
  VibrationExplosion: "진동 폭발", ChargeForceField: "충전 보호막",
  WaveSinking: "침잠 해일", PlusCoinValueUp: "코인값 증가",
  HitResultUp: "타격 판정값 증가", SlashResultUp: "참격 판정값 증가",
  PenetrateResultUp: "관통 판정값 증가", ParryingResultUp: "맞전 판정값 증가",
  ResultReduction: "판정값 감소", Endurance: "인내"
};

function cleanKr(s) {
  if (!s) return "";
  return s
    .replace(/\[([A-Za-z]+)\]/g, (_, k) => TAG_MAP[k] || k)
    .replace(/<style="[^"]*">|<\/style>/g, "")
    .replace(/<color=[^>]*>|<\/color>/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/[ \t]+/g, " ")       // 공백/탭만 정리 — 줄바꿈은 보존(문단/하위항목 유지)
    .replace(/ *\r?\n */g, "\n")   // 줄바꿈 주변 공백 제거
    .replace(/\n{3,}/g, "\n\n")    // 과도한 빈 줄 축소
    .trim();
}

/* 이름 매칭용 정규화(대소문자·따옴표·기호 제거) */
function norm(s) {
  return String(s).toLowerCase().replace(/[‘’']/g, "").replace(/[^a-z0-9]+/g, "");
}

/* 모든 EGOgift*.json을 KR/EN 양쪽에서 받아 id로 합쳐
 * { normalizedEnName -> {krName, krDesc} } 맵 생성 */
async function buildGiftLocaleMap() {
  // Korean 브랜치 트리에서 EGOgift*.json 파일 목록 확보
  const treeUrl = `https://api.github.com/repos/${LOC_REPO}/git/trees/Korean?recursive=1`;
  const tree = await (await fetch(treeUrl, { headers: UA })).json();
  const files = (tree.tree || [])
    .map((t) => t.path)
    .filter((p) => /^EGOgift.*\.json$/.test(p));

  async function loadBranch(branch) {
    const byId = new Map();
    for (const f of files) {
      try {
        const r = await fetch(LOC_RAW(branch, f), { headers: UA });
        if (!r.ok) continue;
        const j = JSON.parse(await r.text());
        for (const e of j.dataList || []) {
          if (typeof e.name !== "string") continue;
          if (e.name.endsWith("+")) continue;           // 강화 변형 제외
          if (!byId.has(e.id)) byId.set(e.id, { name: e.name, desc: e.desc || "" });
        }
      } catch { /* 일부 파일 형식 차이는 무시 */ }
    }
    return byId;
  }

  const [kr, en] = await Promise.all([loadBranch("Korean"), loadBranch("English")]);
  const map = new Map();
  const exact = [];           // [enName, krName] (정확 치환용)
  let matched = 0;
  for (const [id, env] of en) {
    const krv = kr.get(id);
    if (!krv) continue;
    map.set(norm(env.name), { krName: krv.name, krDesc: cleanKr(krv.desc) });
    if (env.name && krv.name) exact.push([env.name, krv.name]);
    matched++;
  }
  // 결과 문구 내 따옴표 없는 기프트명 치환용 정규식(긴 이름 우선)
  exact.sort((a, b) => b[0].length - a[0].length);
  GIFT_EXACT = new Map(exact.map(([e, k]) => [e, k]));
  const esc = exact.map(([e]) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
  GIFT_NAME_RE = esc ? new RegExp("(" + esc + ")", "g") : null;
  console.log(`  로컬라이제이션: EGOgift 파일 ${files.length}개, id 매칭 ${matched}개`);
  return map;
}
let GIFT_NAME_RE = null, GIFT_EXACT = null;

/* 역할 추정(휴리스틱): 부여 / 발동 / 증폭 / 유틸 */
function classifyRole(desc, keyword) {
  if (!keyword) return "유틸";
  const d = desc.toLowerCase();
  if (/damage up|final power|coin power|increase[^.]*(damage|power)|[0-9.]+x|bonus damage|deals?\s*\+/.test(d))
    return "증폭";
  if (/burst|detonat|consume|convert[^.]*(count|potency)|lose all|when[^.]*stagger/.test(d))
    return "발동";
  return "부여";
}

/* 균형 잡힌 {{Name ...}} 템플릿들을 통째로 추출(중첩 처리) */
function findTemplates(text, name) {
  const res = [];
  const open = "{{" + name;
  let i = 0;
  while ((i = text.indexOf(open, i)) !== -1) {
    const after = text[i + open.length];
    if (after && !/[|}\s\n]/.test(after)) { i += open.length; continue; }
    let depth = 0, j = i;
    for (; j < text.length; j++) {
      if (text.startsWith("{{", j)) { depth++; j++; }
      else if (text.startsWith("}}", j)) { depth--; j++; if (depth === 0) { j++; break; } }
    }
    res.push({ text: text.slice(i, j), start: i, end: j });
    i = j;
  }
  return res;
}

/* 템플릿 문자열 -> 최상위 파라미터 맵 */
function parseParams(tpl) {
  const inner = tpl.replace(/^\{\{/, "").replace(/\}\}$/, "");
  const parts = [];
  let depth = 0, cur = "";
  for (let k = 0; k < inner.length; k++) {
    const two = inner.substr(k, 2);
    if (two === "{{" || two === "[[") { depth++; cur += two; k++; continue; }
    if (two === "}}" || two === "]]") { depth--; cur += two; k++; continue; }
    if (inner[k] === "|" && depth === 0) { parts.push(cur); cur = ""; continue; }
    cur += inner[k];
  }
  parts.push(cur);
  const params = {};
  parts.slice(1).forEach((p) => {
    const eq = p.indexOf("=");
    if (eq > -1) params[p.slice(0, eq).trim()] = p.slice(eq + 1);
  });
  return params;
}

function slug(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "").slice(0, 40);
}

/* =============================================================
 *  ① 기프트 수집
 * ============================================================= */
async function scrapeGifts(krMap) {
  const raw = await getRaw("Module:EgoGift/data");
  const lines = raw.split(/\r?\n/);
  const gifts = [];
  const seen = new Set();

  const reEntry = /^\s*\[\s*"((?:[^"\\]|\\.)*)"\s*\]\s*=\s*\{(.+)\}\s*,?\s*$/;
  const reField = (f) => new RegExp(f + '\\s*=\\s*"((?:[^"\\\\]|\\\\.)*)"');
  const reNum = (f) => new RegExp(f + "\\s*=\\s*(\\d+)");

  for (const line of lines) {
    const m = line.match(reEntry);
    if (!m) continue;
    const key = m[1];
    if (key.endsWith("+")) continue;           // 강화(+/++) 변형 제외 → 기본 기프트만
    const body = m[2];

    const name = (body.match(reField("name")) || [])[1];
    if (!name || seen.has(name)) continue;
    seen.add(name);

    const descRaw = (body.match(reField("desc")) || [])[1] || "";
    const sinKey = (body.match(reField("sin")) || [])[1];
    const tierKey = (body.match(reField("tier")) || [])[1];
    const catKey = (body.match(reField("category")) || [])[1];
    const cost = parseInt((body.match(reNum("cost")) || [])[1] || "0", 10);

    const keyword = catKey ? (KEYWORD_MAP[catKey] || catKey) : null;
    const enName = cleanText(name);
    const enEffect = cleanText(descRaw);

    // 한글 오버레이 (게임 공식 텍스트)
    const loc = krMap ? krMap.get(norm(enName)) : null;
    const displayName = loc?.krName || enName;
    const effect = loc?.krDesc || enEffect;

    gifts.push({
      id: "g_" + slug(name),
      name: displayName,
      name_en: enName,
      tier: TIER_MAP[tierKey] || 0,
      sin: SIN_MAP[sinKey] || "",
      keywords: keyword ? [keyword] : [],
      role: classifyRole(effect + " " + enEffect, keyword),
      cost,
      localized: !!loc,
      effect
    });
  }
  return gifts;
}

/* =============================================================
 *  ② 사건(이벤트) 수집
 * ============================================================= */
async function listEventTitles() {
  const titles = [];
  let cmcontinue = "";
  do {
    const url = `${WIKI}/api.php?action=query&list=categorymembers` +
      `&cmtitle=${encodeURIComponent("Category:Mirror Dungeon Events")}` +
      `&cmlimit=500&cmtype=page&format=json` +
      (cmcontinue ? `&cmcontinue=${encodeURIComponent(cmcontinue)}` : "");
    const r = await fetch(url, { headers: UA });
    const j = await r.json();
    (j.query?.categorymembers || []).forEach((p) => titles.push(p.title));
    cmcontinue = j.continue?.cmcontinue || "";
  } while (cmcontinue);
  return titles;
}

function checkStatFromSins(p) {
  const sins = [p.sin1, p.sin2, p.sin3].filter(Boolean)
    .map((s) => SIN_MAP_CAP[s.trim()] || s.trim());
  return sins.length ? sins.join("·") + " 우위" : "능력 판정";
}

function extractGifts(text) {
  const out = [];
  const re = /\{\{StatCon\|gift\w*\|([^}|]+)\}\}/g;
  let m;
  while ((m = re.exec(text))) out.push(m[1].trim());
  return [...new Set(out)];
}

function extractPenalty(text) {
  const notes = [];
  let m;
  const sp = /\{\{StatCon\|splose\|(\d+)\}\}/g;
  while ((m = sp.exec(text))) notes.push(`정신력 -${m[1]}`);
  const hp = /\{\{StatCon\|hplose\|(\d+)\}\}/g;
  while ((m = hp.exec(text))) notes.push(`체력 -${m[1]}`);
  return [...new Set(notes)];
}

function krGiftName(enName, krMap) {
  const loc = krMap && krMap.get(norm(enName));
  return loc ? loc.krName : enName;
}

const SINNER_MAP = {
  YiSang: "이상", Faust: "파우스트", DonQuixote: "돈키호테", Ryoshu: "료슈",
  Meursault: "뫼르소", HongLu: "홍루", Heathcliff: "히스클리프", Ishmael: "이스마엘",
  Rodion: "로지온", Sinclair: "싱클레어", Outis: "오티스", Gregor: "그레고르"
};
/* sinwrath, singlut 등 죄악 토큰 유연 매칭 */
function sinKo(token) {
  const t = token.toLowerCase().replace(/^sin/, "");
  for (const [en, ko] of Object.entries(SIN_MAP)) {
    if (en.startsWith(t) || t.startsWith(en)) return ko;
  }
  return token;
}

/* 사건 결과 문구의 흔한 영문 패턴을 한글로 */
function krNote(s, krMap) {
  if (!s) return s;
  let out = s.trim();
  if (/^nothing happen(?:s|ed)\.?$/i.test(out)) return "아무 일도 일어나지 않음";
  out = out
    .replace(/combat\s+\d+\s*/gi, "")
    .replace(/Backups?:\s*[\d ]+/gi, "")                     // 전투 백업 ID 제거
    .replace(/Win the battle to gain E\.G\.O Gifts?\s+/gi, "전투 승리 시 ")
    .replace(/(?:\b\d{3,5}\b[\s,]*)+(?=전투\s*승리)/g, "")   // 잔존 전투 ID 제거
    .replace(/All Allies took (\d+) and (\d+)\s*(?:HP\s*)?Damage!?/gi, "모든 아군 체력 -$1·$2")
    .replace(/All Allies took (\d+)\s*(?:HP\s*)?Damage!?/gi, "모든 아군 체력 -$1")
    .replace(/All [Aa]llies los[et] (\d+)!?/gi, "모든 아군 정신력 -$1")
    .replace(/All Allies healed for (\d+)\.?/gi, "모든 아군 체력 $1 회복")
    .replace(/Cost (\d+) gained/gi, "코스트 $1 획득")
    .replace(/Speed ([\-+]?\d+) at the start of the combat phase\.?/gi, "전투 시작 시 속도 $1")
    .replace(/At the start of the combat phase,?\s*/gi, "전투 시작 시 ")
    .replace(/(?:One random |A random )?Identit(?:y|ies) without (sin\w+) takes? (\d+(?:\s*and\s*\d+)?)\s*damage!?/gi,
      (_, s, d) => `${sinKo(s)} 외 인격 체력 -${d.replace(/\s*and\s*/g, "·")}`)
    .replace(/A random Identity without (sin\w+) loses (\d+)!?/gi,
      (_, s, d) => `${sinKo(s)} 외 무작위 인격 정신력 -${d}`)
    .replace(/(?:All )?Identit(?:y|ies)(?: with(?: the)?)? (sin\w+) heal(?:ed for)? (\d+)\.?/gi,
      (_, s, d) => `${sinKo(s)} 인격 체력 ${d} 회복`)
    .replace(/All Allies with the (sin\w+) healed for (\d+)\.?/gi,
      (_, s, d) => `${sinKo(s)} 인격 체력 ${d} 회복`)
    .replace(/Cost (\d+) lost/gi, "코스트 $1 소모")
    .replace(/Skill Final Power ([\-+]?\d+)/gi, "스킬 최종 위력 $1")
    .replace(/allies without (sin\w+) take (\d+) \w+ damage/gi,
      (_, s, d) => `${sinKo(s)} 외 아군 ${d} 피해`)
    .replace(/All [Aa]llies heal (\d+)\.?/g, "모든 아군 체력 $1 회복")
    .replace(/The Ally with lowest HP heal (\d+)\.?/gi, "체력이 가장 낮은 아군 체력 $1 회복")
    .replace(/The Ally with lowest HP lose (\d+)\.?/gi, "체력이 가장 낮은 아군 체력 -$1")
    .replace(/Speed ([\-+]?\d+) for this battle\.?/gi, "이번 전투 동안 속도 $1")
    .replace(/\[([A-Za-z]+)\] healed for (\d+)!?/gi, (_, n, d) => `${SINNER_MAP[n] || n} 체력 ${d} 회복`)
    .replace(/E\.G\.O Gifts?\s+/gi, "")
    .replace(/\b(obtained|Earned)\b!?/gi, "획득")
    .replace(/\s*&\s*/g, ", ");
  // 기프트명 치환 (따옴표 안/밖 모두)
  if (GIFT_NAME_RE) out = out.replace(GIFT_NAME_RE, (m) => GIFT_EXACT.get(m) || m);
  if (krMap) out = out.replace(/"([^"]+)"/g, (_, n) => krGiftName(n, krMap));
  out = out.replace(/\s{2,}/g, " ").trim();
  return out;
}

function parseEvent(title, raw, krMap, choiceDict) {
  const info = findTemplates(raw, "AbnoInfo")[0];
  let krtitle = "", theme = "";
  if (info) {
    const ip = parseParams(info.text);
    krtitle = cleanText(ip.krtitle || "");
    theme = cleanText(ip.location || "");
  }

  // 최상위 Choice 템플릿만 (다른 Choice 안에 포함된 것은 제외)
  const all = findTemplates(raw, "Choice");
  const top = all.filter((c) => !all.some((o) => o !== c && o.start < c.start && o.end > c.end));

  const choices = [];
  for (const c of top) {
    const p = parseParams(c.text);
    const actionEn = cleanText(p.choice || p.choice1 || "");
    if (!actionEn) continue;
    // 선택지 라벨 한글화: 번역사전 → 기프트명 매핑 → 영문
    const action = (choiceDict && choiceDict[actionEn]) || krGiftName(actionEn, krMap) || actionEn;

    const checks = findTemplates(c.text, "SkillCheck").map((s) => parseParams(s.text));
    let check = null;
    if (checks.length) {
      const sc = checks[0];
      const adv = parseInt(sc.adv || "0", 10);
      if (adv) check = { stat: checkStatFromSins(sc), value: adv };
    }

    // 성공 보상: passresult 영역의 기프트 우선, 없으면 전체에서
    const passArea = checks.map((s) => (s.passresult || "") + (s.passtext || "")).join(" ");
    const giftPass = extractGifts(passArea);
    const giftAll = extractGifts(c.text);
    const reward = (giftPass.length ? giftPass : giftAll)
      .map((g) => krGiftName(g, krMap)).join(", ") || "없음";

    const failArea = checks.map((s) => (s.failresult || "")).join(" ");
    const penalties = extractPenalty(failArea || c.text);
    const result = cleanText(p.result || "");

    let note = krNote(result, krMap) || (giftPass.length ? "판정 성공 시 기프트 획득" : "");
    // 보상이 따로 표시되므로 "기프트 획득" 류 중복 문구는 생략
    if (reward !== "없음" && /획득/.test(note) && note.length < 24) note = "";

    choices.push({
      text: action,
      check,
      success: { reward, note },
      fail: penalties.length ? { note: penalties.join(", ") } : null
    });
  }

  return {
    id: "e_" + slug(title),
    name: krtitle ? `${krtitle} (${title.replace(/_/g, " ")})` : title.replace(/_/g, " "),
    theme: theme || "거울던전",
    desc: "",
    source: `${WIKI}/wiki/${encodeURIComponent(title)}`,
    choices
  };
}

async function scrapeEvents(krMap, choiceDict) {
  const titles = await listEventTitles();
  const events = [];
  let ok = 0, fail = 0;
  for (const t of titles) {
    try {
      const raw = await getRaw(t);
      const ev = parseEvent(t, raw, krMap, choiceDict);
      if (ev.choices.length) { events.push(ev); ok++; }
      else fail++;
    } catch (e) {
      fail++;
      console.error("  ! 실패:", t, e.message);
    }
  }
  console.log(`  사건 파싱: 성공 ${ok}, 선택지 없음/실패 ${fail}`);
  return events;
}

/* =============================================================
 *  실행
 * ============================================================= */
function emit(varName, arr, sourceNote) {
  const header =
    `/* 자동 생성 파일 — 직접 수정하지 마세요. (node scripts/scrape.mjs 로 재생성)\n` +
    `   ${sourceNote}\n` +
    `   생성 항목: ${arr.length}개 */\n`;
  return header + `const ${varName} = ` + JSON.stringify(arr, null, 2) + ";\n";
}

(async () => {
  await mkdir(join(ROOT, "js"), { recursive: true });

  console.log("⓪ 한글 로컬라이제이션 로딩 중...");
  let krMap = null;
  try {
    krMap = await buildGiftLocaleMap();
  } catch (e) {
    console.warn("  ! 로컬라이제이션 로딩 실패, 영문으로 진행:", e.message);
  }

  console.log("① 기프트 수집 중...");
  const gifts = await scrapeGifts(krMap);
  const locCount = gifts.filter((g) => g.localized).length;
  console.log(`  기프트 ${gifts.length}개 (한글화 ${locCount}개)`);
  await writeFile(
    join(ROOT, "js", "gifts.gen.js"),
    emit("GIFTS", gifts, "출처: Limbus Wiki(구조) + x1bViolet/Limbus-Localization-Files(한글)"),
    "utf8"
  );

  // 사건(events.gen.js)은 이제 한글+이미지가 있는 haneuk 데이터를 사용합니다.
  //   → node scripts/scrape-haneuk.mjs
  // (위키 기반 사건 파서 scrapeEvents/parseEvent 등은 폴백용으로 남겨둠)

  console.log("\n완료 ✓  js/gifts.gen.js 생성됨 (사건은 scrape-haneuk.mjs)");
})().catch((e) => {
  console.error("치명적 오류:", e);
  process.exit(1);
});
