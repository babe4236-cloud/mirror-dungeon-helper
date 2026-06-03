/* =============================================================
 *  거울던전 도우미 — 앱 로직
 * ============================================================= */

/* ---------- 탭 전환 ---------- */
document.getElementById("tabs").addEventListener("click", (e) => {
  const btn = e.target.closest(".tab");
  if (!btn) return;
  document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
  document.querySelectorAll(".panel").forEach((p) => p.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById("tab-" + btn.dataset.tab).classList.add("active");
});

/* ---------- 유틸 ---------- */
const el = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
const thumb = (src, cls = "thumb") =>
  src ? `<img class="${cls}" src="${esc(src)}" alt="" loading="lazy" onerror="this.style.display='none'">` : "";
const activeFilterVal = (id) => { const b = el(id).querySelector(".filter-btn.on"); return b ? b.dataset.val : ""; };
const activeFilterVals = (id) => [...el(id).querySelectorAll(".filter-btn.on")].map((b) => b.dataset.val);

/* 키워드 하이라이트(아이콘+강조) + 툴팁 */
const escAttr = (s) => esc(s).replace(/"/g, "&quot;");
const KW_MAP = new Map();
// 일반어와 겹쳐 오매칭되는 키워드 제외 (예: "소수점 버림"의 '버림')
const KW_BLACKLIST = new Set(["버림", "부하", "화력", "해금", "영감"]);
// 수치 패턴: +10%, -2, 3, 0.5% 등
const NUM_PAT = "[+\\-]?\\d+(?:\\.\\d+)?%?";
let INLINE_RE = new RegExp("()(" + NUM_PAT + ")", "g"); // 키워드 없을 때: 수치만
if (typeof KEYWORD_INFO !== "undefined" && KEYWORD_INFO.length) {
  const list = KEYWORD_INFO.filter((k) => !KW_BLACKLIST.has(k.name));
  for (const k of list) KW_MAP.set(k.name, k);
  const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const KW_ALT = list.map((k) => escRe(k.name)).join("|");
  // 키워드 + 수치를 단일 패스로 처리 (속성값 손상 방지 위해 평문에서만 실행)
  INLINE_RE = new RegExp("(" + KW_ALT + ")|(" + NUM_PAT + ")", "g");
}
/* 키워드(아이콘+강조+툴팁) & 수치(굵게) 동시 하이라이트 — 이스케이프된 평문 입력 */
function highlightKeywords(escaped) {
  return escaped.replace(INLINE_RE, (m, kw, num) => {
    if (kw) {
      const k = KW_MAP.get(kw);
      if (!k) return kw;
      const icon = `<img class="kwt-ic" src="assets/keywords/${encodeURIComponent(k.name)}.webp" alt="" onerror="this.style.display='none'">`;
      const desc = k.desc ? ` data-desc="${escAttr(k.desc)}"` : "";
      return `<span class="kwt"${desc}>${icon}${kw}</span>`;
    }
    if (num) return `<b class="eff-num">${num}</b>`;
    return m;
  });
}

// 조건절 종결 마커(이 단어 + 쉼표 = 「조건, 결과」 경계)
const COND_RE = /^(.{4,}?(?:할 경우|일 경우|인 경우|경우|때|시|다면|라면|으면|하면|되면|이라면|았다면|였다면))[,，]\s*(.+)$/;

/* 한 줄 렌더: 조건→결과 분리(structured) 지원 */
function effLine(t, structured) {
  if (/^[-·•]/.test(t)) return `<div class="eff-line eff-sub">${highlightKeywords(esc(t.replace(/^[-·•]\s*/, "")))}</div>`;
  if (structured) {
    const cm = t.match(COND_RE);
    if (cm && cm[2].length >= 2) {
      return `<div class="eff-line eff-cond-line"><span class="eff-cond">${highlightKeywords(esc(cm[1]))}</span><span class="eff-do"><span class="eff-arrow">→</span>${highlightKeywords(esc(cm[2]))}</span></div>`;
    }
  }
  return `<div class="eff-line">${highlightKeywords(esc(t))}</div>`;
}

/* 효과 설명 렌더 + 키워드/수치 하이라이트.
 * structured=true(기프트/스킬): 문단별 강화·공명 라벨 + 조건→결과 분리.
 * structured=false(사건 본문 등 산문): 기존 줄 단위 렌더. */
function formatEffect(text, structured = false) {
  if (!text) return "";
  if (!structured) {
    return text.split("\n").map((line) => {
      const t = line.trim();
      if (!t) return '<div class="eff-gap"></div>';
      return effLine(t, false);
    }).join("");
  }
  const blocks = text.split(/\n{2,}/).map((s) => s.trim()).filter(Boolean);
  return blocks.map((block) => {
    const tag = /공명/.test(block) ? `<span class="eff-tag res">⚡ 공명</span>`
      : /강화되어|효과가\s*강화/.test(block) ? `<span class="eff-tag enh">⚡ 강화</span>` : "";
    const body = block.split("\n").map((s) => s.trim()).filter(Boolean)
      .map((t) => effLine(t, true)).join("");
    return `<div class="eff-block">${tag}${body}</div>`;
  }).join("");
}

/* 기프트 아이콘: 일러스트 + 등급(I~V) 배지 + 키워드 아이콘 오버레이 (게임 스타일) */
const TIER_ROMAN = ["", "I", "II", "III", "IV", "V"];
function giftThumb(g, cls = "") {
  if (!g.img) return "";
  const tier = TIER_ROMAN[g.tier] || "";
  const kw = (g.keywords || [])[0];
  const kwIcon = kw
    ? `<img class="kw-icon" src="assets/keywords/${encodeURIComponent(kw)}.webp" alt="${esc(kw)}" loading="lazy" onerror="this.style.display='none'">`
    : "";
  return `<div class="gift-icon ${cls}">
    <img class="thumb" src="${esc(g.img)}" alt="" loading="lazy" onerror="this.style.display='none'">
    ${tier ? `<span class="tier-badge">${tier}</span>` : ""}
    ${kwIcon}
  </div>`;
}

/* 조합식 인덱스: 기프트명 → (결과로 만드는 레시피 / 재료로 쓰이는 레시피) */
const normName = (s) => String(s).toLowerCase().replace(/[‘’'\s]/g, "").replace(/[^0-9a-z가-힣]/g, "");
const recipeByResult = new Map();
const recipeByIngredient = new Map();
if (typeof RECIPES !== "undefined") {
  for (const r of RECIPES) {
    const rk = normName(r.result.name);
    (recipeByResult.get(rk) || recipeByResult.set(rk, []).get(rk)).push(r);
    for (const ing of r.ingredients) {
      const ik = normName(ing.name);
      (recipeByIngredient.get(ik) || recipeByIngredient.set(ik, []).get(ik)).push(r);
    }
  }
}
/* 조합식 재료/결과를 우리 기프트 데이터와 이름으로 연결해 등급·키워드 오버레이 */
const giftByName = new Map();
if (typeof GIFTS !== "undefined") for (const g of GIFTS) giftByName.set(normName(g.name), g);
/* 현행 거울던전 E.G.O 기프트(haneuk 라이브 목록 = g.live)만 검색/추천에 노출.
 * 제외 대상: 티어 0 테마팩/사건 전용 특수 아이템(입장권·증표·매듭 등) +
 *           위키에만 남은 구버전 삭제 기프트(잔영 시리즈 등, 이미지·난이도 없음).
 * (giftByName에는 전체를 남겨두어 조합식·사건 링크는 계속 해석됨) */
const MD_GIFTS = (typeof GIFTS !== "undefined" ? GIFTS : []).filter((g) => g.live);
function recipeThumb(it, cls = "") {
  const g = giftByName.get(normName(it.name));
  if (g && g.img) return giftThumb({ img: it.img || g.img, tier: g.tier, keywords: g.keywords }, cls);
  return `<div class="gift-icon ${cls}">${thumb(it.img)}</div>`;
}
const rmini = (it) =>
  `<span class="rmini goto-gift" data-goto="${escAttr(it.name)}">${recipeThumb(it, "xs")}${esc(it.name)}</span>`;

/* 재료 목록을 한 박스로 (줄바꿈이 박스 안에 갇혀 가독성↑) */
const ingBox = (ingredients, no) =>
  `<div class="recipe-box">${no ? `<span class="rbox-no">${no}</span>` : ""}<div class="rbox-items">${ingredients.map(rmini).join('<span class="recipe-op">+</span>')}</div></div>`;

/* 기프트 카드용: 이 기프트와 관련된 조합식 */
function giftRecipeInfo(g) {
  const k = normName(g.name);
  const made = recipeByResult.get(k);
  const usedIn = recipeByIngredient.get(k);
  let html = "";
  if (made) {
    const multi = made.length > 1;
    const boxes = made.map((r, i) => ingBox(r.ingredients, multi ? `조합 ${i + 1}` : "")).join("");
    html += `<div class="recipe-group"><div class="ri-label">🔁 조합으로 획득${multi ? ` · ${made.length}가지` : ""}</div>${boxes}</div>`;
  }
  if (usedIn) {
    const results = [...new Map(usedIn.map((r) => [normName(r.result.name), r.result])).values()];
    html += `<div class="recipe-group"><div class="ri-label">🔁 조합 재료로 쓰임 → 결과</div><div class="recipe-box"><div class="rbox-items">${results.map(rmini).join("")}</div></div></div>`;
  }
  return html;
}

/* 사건 카드용: 이 사건의 보상 기프트가 들어가는 조합식 */
function eventRecipeInfo(ev) {
  if (typeof RECIPES === "undefined") return "";
  const blob = ev.choices.map((c) => `${c.text} ${c.info} ${c.success} ${c.fail}`).join(" ");
  const seen = new Set();
  const matched = [];
  for (const r of RECIPES) {
    if (seen.has(r.id)) continue;
    const hit = r.ingredients.some((i) => i.name && blob.includes(i.name));
    if (hit) { seen.add(r.id); matched.push(r); }
  }
  if (!matched.length) return "";
  const boxes = matched.map((r) =>
    `<div class="recipe-box"><div class="rbox-items">${r.ingredients.map(rmini).join('<span class="recipe-op">+</span>')}<span class="recipe-op">=</span>${rmini(r.result)}</div></div>`
  ).join("");
  return `<div class="recipe-group"><div class="ri-label">🔁 이 사건 기프트로 만드는 조합식</div>${boxes}</div>`;
}

function fillSelect(select, items) {
  items.forEach((v) => {
    const o = document.createElement("option");
    o.value = v; o.textContent = v;
    select.appendChild(o);
  });
}

/* =============================================================
 *  ① 기프트 검색
 * ============================================================= */
// 필터 버튼 (키워드 / 죄악 / 역할 / 등급 / 출현난이도)
el("gift-kw-filters").innerHTML = [...new Set(MD_GIFTS.flatMap((g) => g.keywords))].filter(Boolean).sort()
  .map((k) => `<button class="filter-btn" data-val="${esc(k)}"><img class="fb-ic" src="assets/keywords/${encodeURIComponent(k)}.webp" onerror="this.style.display='none'">${esc(k)}</button>`).join("");
el("gift-sin-filters").innerHTML = SINS.map((s) => `<button class="filter-btn" data-val="${esc(s)}"><img class="fb-ic" src="assets/sin/${encodeURIComponent(s)}.png" onerror="this.style.display='none'">${esc(s)}</button>`).join("");
el("gift-role-filters").innerHTML = ["부여", "발동", "증폭", "유틸"].map((r) => `<button class="filter-btn" data-val="${r}">${r}</button>`).join("");
el("gift-tier-filters").innerHTML = [...new Set(MD_GIFTS.map((g) => g.tier))].filter(Boolean).sort((a, b) => a - b)
  .map((t) => `<button class="filter-btn" data-val="${t}">T${t}</button>`).join("")
  + (MD_GIFTS.some((g) => g.ex) ? `<button class="filter-btn" data-val="EX">EX</button>` : "");
el("gift-diff-filters").innerHTML = `<span class="fr-label">출현</span>`
  + ["노말", "하드", "익스"].map((d) => `<button class="filter-btn diff-btn d-${d}" data-val="${d}">${d}</button>`).join("");

/* 즐겨찾기 (localStorage) */
const GIFT_FAV_KEY = "md_gift_favs";
let giftFavs = new Set();
try { giftFavs = new Set(JSON.parse(localStorage.getItem(GIFT_FAV_KEY) || "[]")); } catch (_) {}
const isFav = (g) => giftFavs.has(normName(g.name));
function toggleFav(key) {
  if (giftFavs.has(key)) giftFavs.delete(key); else giftFavs.add(key);
  try { localStorage.setItem(GIFT_FAV_KEY, JSON.stringify([...giftFavs])); } catch (_) {}
}

const tierBadge = (g) => g.ex ? `<span class="badge tier ex">EX</span>` : `<span class="badge tier">T${g.tier}</span>`;
const diffBadges = (g) => (g.diff || []).map((d) => `<span class="badge diff d-${d}">${d} 출현</span>`).join("");

/* 갤러리 아이콘 */
function giftGridCard(g) {
  const key = normName(g.name);
  return `<div class="gift-grid-item${isFav(g) ? " is-fav" : ""}" data-gname="${esc(key)}" title="${esc(g.name)}">
    <button class="gg-fav${isFav(g) ? " on" : ""}" data-fav="${esc(key)}" title="즐겨찾기" aria-label="즐겨찾기">★</button>
    ${giftThumb(g)}<div class="gg-name">${esc(g.name)}</div>
  </div>`;
}

/* 상세(모달): 큰 아이콘 + 효과 + 조합식 */
function giftDetail(g) {
  const key = normName(g.name);
  const kw = g.keywords.map((k) => `<span class="badge kw">${esc(k)}</span>`).join("");
  const cost = g.cost ? `· 가격 ${g.cost}` : "";
  const en = g.name_en && g.name_en !== g.name ? `<span class="en">${esc(g.name_en)}</span>` : "";
  const extra = `${g.enhance ? `<span class="badge enh2">강화 가능</span>` : ""}`
    + `${g.curse ? `<span class="badge curse">저주</span>` : ""}${g.bless ? `<span class="badge bless">축복</span>` : ""}`;
  const limited = g.limited && g.limited.length
    ? `<div class="gift-limited"><span class="ri-label">🎴 한정 카드팩</span> ${g.limited.map(esc).join(", ")}</div>` : "";
  return `<div class="card-head">
      ${giftThumb(g)}
      <div class="card-head-body">
        <h3>${esc(g.name)} ${en}<button class="gd-fav${isFav(g) ? " on" : ""}" data-fav="${esc(key)}" title="즐겨찾기에 추가">★</button></h3>
        <div class="badges">
          ${tierBadge(g)}
          ${g.sin ? `<span class="badge sin">${esc(g.sin)}</span>` : ""}
          ${kw}
          <span class="badge">${esc(g.role)}</span>
          ${diffBadges(g)}
          ${extra}
        </div>
      </div>
    </div>
    <div class="effect">${formatEffect(g.effect, true)}</div>
    <div class="meta">${esc(g.role)} ${cost}</div>
    ${limited}
    ${giftRecipeInfo(g)}`;
}

function sortGifts(arr) {
  const a = arr.slice();
  switch (el("gift-sort").value) {
    case "cost-desc": a.sort((x, y) => (y.cost || 0) - (x.cost || 0)); break;
    case "cost-asc": a.sort((x, y) => (x.cost || 0) - (y.cost || 0)); break;
    case "name": a.sort((x, y) => x.name.localeCompare(y.name, "ko")); break;
    default: a.sort((x, y) => ((y.ex ? 6 : y.tier || 0) - (x.ex ? 6 : x.tier || 0)) || (y.cost || 0) - (x.cost || 0));
  }
  return a;
}

function renderGifts() {
  const q = el("gift-search").value.trim().toLowerCase();
  const kws = activeFilterVals("gift-kw-filters");
  const kwAnd = el("gift-kw-mode").dataset.mode === "and";
  const sin = activeFilterVal("gift-sin-filters");
  const role = activeFilterVal("gift-role-filters"), tier = activeFilterVal("gift-tier-filters");
  const diff = activeFilterVal("gift-diff-filters");
  const favOnly = el("gift-fav-only").classList.contains("on");
  const list = sortGifts(MD_GIFTS.filter((g) => {
    if (favOnly && !isFav(g)) return false;
    if (sin && g.sin !== sin) return false;
    if (kws.length) {
      const ok = kwAnd ? kws.every((k) => g.keywords.includes(k)) : kws.some((k) => g.keywords.includes(k));
      if (!ok) return false;
    }
    if (role && g.role !== role) return false;
    if (tier === "EX") { if (!g.ex) return false; } else if (tier && String(g.tier) !== tier) return false;
    if (diff && !(g.diff || []).includes(diff)) return false;
    if (q && !(`${g.name} ${g.name_en || ""} ${g.effect}`.toLowerCase().includes(q))) return false;
    return true;
  }));
  el("gift-count").textContent = `${list.length}개 / 전체 ${MD_GIFTS.length}개`;
  el("gift-list").innerHTML = list.length ? list.map(giftGridCard).join("") : `<p class="empty">조건에 맞는 기프트가 없습니다.</p>`;
}
function openGiftModal(g) {
  if (!g) return;
  el("gift-modal").querySelector(".sm-body").innerHTML = giftDetail(g);
  el("gift-modal").classList.add("open");
}
el("gift-search").addEventListener("input", renderGifts);
el("gift-sort").addEventListener("change", renderGifts);
// 키워드는 다중 선택, 나머지는 단일 선택
["gift-kw-filters", "gift-sin-filters", "gift-role-filters", "gift-tier-filters", "gift-diff-filters"].forEach((id) => el(id).addEventListener("click", (e) => {
  const b = e.target.closest(".filter-btn"); if (!b) return;
  const was = b.classList.contains("on");
  if (id !== "gift-kw-filters") el(id).querySelectorAll(".filter-btn").forEach((x) => x.classList.remove("on"));
  b.classList.toggle("on", !was);
  renderGifts();
}));
el("gift-kw-mode").addEventListener("click", () => {
  const btn = el("gift-kw-mode");
  const and = btn.dataset.mode === "and";
  btn.dataset.mode = and ? "or" : "and";
  btn.textContent = and ? "키워드 OR" : "키워드 AND";
  btn.classList.toggle("on", !and);
  renderGifts();
});
el("gift-fav-only").addEventListener("click", () => { el("gift-fav-only").classList.toggle("on"); renderGifts(); });
el("gift-reset").addEventListener("click", () => {
  el("gift-search").value = "";
  el("gift-sort").value = "tier";
  ["gift-kw-filters", "gift-sin-filters", "gift-role-filters", "gift-tier-filters", "gift-diff-filters"]
    .forEach((id) => el(id).querySelectorAll(".filter-btn").forEach((x) => x.classList.remove("on")));
  el("gift-fav-only").classList.remove("on");
  const km = el("gift-kw-mode"); km.dataset.mode = "or"; km.textContent = "키워드 OR"; km.classList.remove("on");
  renderGifts();
});
el("gift-list").addEventListener("click", (e) => {
  const favBtn = e.target.closest(".gg-fav");
  if (favBtn) { e.stopPropagation(); toggleFav(favBtn.dataset.fav); renderGifts(); return; }
  const item = e.target.closest(".gift-grid-item");
  if (item) openGiftModal(giftByName.get(item.dataset.gname));
});
// 모달 내 즐겨찾기 별
el("gift-modal").addEventListener("click", (e) => {
  const favBtn = e.target.closest(".gd-fav");
  if (favBtn) { toggleFav(favBtn.dataset.fav); favBtn.classList.toggle("on"); renderGifts(); return; }
});
el("gift-modal-close").addEventListener("click", () => el("gift-modal").classList.remove("open"));
el("gift-modal").addEventListener("click", (e) => { if (e.target.id === "gift-modal") el("gift-modal").classList.remove("open"); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") el("gift-modal").classList.remove("open"); });
renderGifts();

/* =============================================================
 *  ② 사건 Q&A
 * ============================================================= */
const eventPacks = (ev) => (ev.packs && ev.packs.length ? ev.packs : ["공용 사건"]);
fillSelect(el("event-theme"), [...new Set(EVENTS.flatMap(eventPacks))].sort((a, b) => a.localeCompare(b, "ko")));

/* 갤러리 카드 (그리드): 이미지 + 제목 */
function eventCard(ev) {
  return `<div class="ev-card" data-id="${esc(ev.id)}" title="${esc(ev.name)}">
    <img class="ev-art" src="${esc(ev.img || "")}" alt="" loading="lazy" onerror="this.style.visibility='hidden'">
    <div class="ev-title">${esc(ev.name)}</div>
  </div>`;
}

/* 상세(모달): 이미지 + 스토리 + 획득 기프트 + 선택지 + 조합식 */
function eventDetail(ev) {
  const packs = eventPacks(ev).map((p) => `<span class="badge kw">${esc(p)}</span>`).join("");
  const gifts = (ev.gifts || []).length
    ? `<div class="ev-gifts"><div class="ri-label">획득 가능 기프트</div><div class="rbox-items">${ev.gifts.map((n) => {
        const g = giftByName.get(normName(n));
        return g
          ? `<span class="rmini goto-gift" data-goto="${escAttr(n)}">${recipeThumb({ name: n, img: g.img }, "xs")}${esc(n)}</span>`
          : `<span class="rmini">${esc(n)}</span>`;
      }).join("")}</div></div>` : "";
  const choices = ev.choices.map((c) => {
    const info = c.info ? ` <span class="meta">— ${esc(c.info)}</span>` : "";
    const sf = [
      c.success && `<div class="res good">✔ 성공: ${esc(c.success)}</div>`,
      c.fail && `<div class="res bad">✘ 실패: ${esc(c.fail)}</div>`
    ].filter(Boolean).join("");
    return `<div class="choice"><div class="ctext">▶ ${esc(c.text)}${info}</div>${sf}</div>`;
  }).join("");
  return `<div class="ev-detail-head">
      <img class="ev-detail-art" src="${esc(ev.img || "")}" alt="" onerror="this.style.display='none'">
      <div class="ev-detail-info">
        <h3>${esc(ev.name)}</h3>
        <div class="badges">${packs}</div>
        ${ev.desc ? `<div class="ev-desc">${formatEffect(ev.desc)}</div>` : ""}
      </div>
    </div>
    ${gifts}
    <div class="ev-choices">${choices}</div>
    ${eventRecipeInfo(ev)}`;
}

function renderEvents() {
  const q = el("event-search").value.trim().toLowerCase();
  const theme = el("event-theme").value;
  const list = EVENTS.filter((ev) => {
    if (theme && !eventPacks(ev).includes(theme)) return false;
    if (q) {
      const hay = `${ev.name} ${ev.desc || ""} ${ev.choices.map((c) => `${c.text} ${c.info} ${c.success} ${c.fail}`).join(" ")}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
  el("event-count").textContent = `${list.length}개 / 전체 ${EVENTS.length}개`;
  el("event-list").innerHTML = list.length
    ? list.map(eventCard).join("")
    : `<p class="empty">조건에 맞는 사건이 없습니다.</p>`;
}
function openEventModal(id) {
  const ev = EVENTS.find((x) => x.id === id);
  if (!ev) return;
  el("event-modal").querySelector(".sm-body").innerHTML = eventDetail(ev);
  el("event-modal").classList.add("open");
}
["event-search", "event-theme"].forEach((id) => el(id).addEventListener("input", renderEvents));
el("event-list").addEventListener("click", (e) => {
  const card = e.target.closest(".ev-card");
  if (card) openEventModal(card.dataset.id);
});
el("event-modal-close").addEventListener("click", () => el("event-modal").classList.remove("open"));
el("event-modal").addEventListener("click", (e) => { if (e.target.id === "event-modal") el("event-modal").classList.remove("open"); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") el("event-modal").classList.remove("open"); });
renderEvents();

/* =============================================================
 *  카드팩
 * ============================================================= */
/* 갤러리 카드: 세로 카드팩 아트(이름 포함) */
function packCard(p) {
  return `<div class="pack-card" data-id="${p.id}" title="${esc(p.title)}">
    <img class="pack-art" src="${esc(p.img || "")}" alt="" loading="lazy" onerror="this.style.visibility='hidden'">
    ${p.events.length ? `<span class="pack-evcount">사건 ${p.events.length}</span>` : ""}
  </div>`;
}

/* 상세(모달): 카드팩 아트 + 정보 + 등장 사건(선택지·보상) */
function packDetail(p) {
  const diff = p.difficulties.map((d) => `<span class="badge">${esc(d)}</span>`).join("");
  const floors = p.floors.length ? `<span class="badge">층 ${[...new Set(p.floors)].join("·")}</span>` : "";
  const evs = p.events.length
    ? p.events.map((ev) => {
        const choices = ev.choices.map((c) => {
          const info = c.info ? ` <span class="meta">— ${esc(c.info)}</span>` : "";
          const sf = [
            c.success && `<div class="res good">✔ ${esc(c.success)}</div>`,
            c.fail && `<div class="res bad">✘ ${esc(c.fail)}</div>`
          ].filter(Boolean).join("");
          return `<div class="choice"><div class="ctext">▶ ${esc(c.text)}${info}</div>${sf}</div>`;
        }).join("");
        return `<div class="pack-event"><b><img class="pack-ev-thumb" src="${esc(ev.img || "")}" alt="" loading="lazy" onerror="this.style.display='none'">◆ ${esc(ev.title)}</b>${choices}</div>`;
      }).join("")
    : `<p class="meta">고유 사건이 없는 팩입니다.</p>`;
  return `<div class="ev-detail-head">
      <img class="pack-detail-art" src="${esc(p.img || "")}" alt="" onerror="this.style.display='none'">
      <div class="ev-detail-info">
        <h3>${esc(p.title)}</h3>
        <div class="badges"><span class="badge kw">${esc(p.theme)}</span>${floors}${diff}<span class="badge">사건 ${p.events.length}</span></div>
        ${p.desc ? `<div class="meta">${esc(p.desc)}</div>` : ""}
      </div>
    </div>
    <div class="ev-choices">${evs}</div>`;
}

function renderPacks() {
  const q = el("pack-search").value.trim().toLowerCase();
  const onlyEv = el("pack-only-events").checked;
  const list = (typeof CARDPACKS !== "undefined" ? CARDPACKS : []).filter((p) => {
    if (onlyEv && !p.events.length) return false;
    if (q) {
      const hay = `${p.title} ${p.theme} ${p.events.map((e) => e.title + " " + e.choices.map((c) => c.text + " " + c.info).join(" ")).join(" ")}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
  el("pack-count").textContent = `${list.length}개 / 전체 ${CARDPACKS.length}개`;
  el("pack-list").innerHTML = list.length
    ? list.map(packCard).join("")
    : `<p class="empty">조건에 맞는 카드팩이 없습니다.</p>`;
}
function openPackModal(id) {
  const p = (typeof CARDPACKS !== "undefined" ? CARDPACKS : []).find((x) => x.id === id);
  if (!p) return;
  el("pack-modal").querySelector(".sm-body").innerHTML = packDetail(p);
  el("pack-modal").classList.add("open");
}
if (typeof CARDPACKS !== "undefined") {
  el("pack-search").addEventListener("input", renderPacks);
  el("pack-only-events").addEventListener("change", renderPacks);
  el("pack-list").addEventListener("click", (e) => {
    const card = e.target.closest(".pack-card");
    if (card) openPackModal(+card.dataset.id);
  });
  el("pack-modal-close").addEventListener("click", () => el("pack-modal").classList.remove("open"));
  el("pack-modal").addEventListener("click", (e) => { if (e.target.id === "pack-modal") el("pack-modal").classList.remove("open"); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") el("pack-modal").classList.remove("open"); });
  renderPacks();
}

/* =============================================================
 *  조합식 (합성 레시피)
 * ============================================================= */
const gradeClass = (g) => g.includes("익스트림") ? "ext" : g.includes("하드") ? "hard" : "normal";
function recipeItem(it, isResult) {
  const g = it.grade ? `<span class="grade ${gradeClass(it.grade)}">${esc(it.grade)}</span>` : "";
  return `<div class="recipe-item goto-gift${isResult ? " result" : ""}" data-goto="${escAttr(it.name)}">
    ${recipeThumb(it)}
    <div class="ri-name">${esc(it.name)}</div>${g}
  </div>`;
}
function recipeCard(r) {
  const ings = r.ingredients.map((i) => recipeItem(i)).join('<span class="recipe-op">+</span>');
  return `<div class="card recipe-card">
    <div class="recipe-row">
      ${ings}
      <span class="recipe-op">=</span>
      ${recipeItem(r.result, true)}
    </div>
  </div>`;
}
function renderRecipes() {
  const q = el("recipe-search").value.trim().toLowerCase();
  const data = typeof RECIPES !== "undefined" ? RECIPES : [];
  const list = data.filter((r) => {
    if (!q) return true;
    const hay = `${r.result.name} ${r.ingredients.map((i) => i.name).join(" ")}`.toLowerCase();
    return hay.includes(q);
  });
  el("recipe-count").textContent = `${list.length}개 / 전체 ${data.length}개`;
  el("recipe-list").innerHTML = list.length
    ? list.map(recipeCard).join("")
    : `<p class="empty">조건에 맞는 조합식이 없습니다.</p>`;
}
if (typeof RECIPES !== "undefined") {
  el("recipe-search").addEventListener("input", renderRecipes);
  renderRecipes();
}

/* =============================================================
 *  수감자(인격)
 * ============================================================= */
if (typeof SINNERS !== "undefined") {
  fillSelect(el("sinner-char"), [...new Set(SINNERS.map((s) => s.sinner))]);
  // 연심식 아이콘 토글 버튼 (키워드 / 죄악 / 등급)
  el("kw-filters").innerHTML = KEYWORDS.map((k) => `<button class="filter-btn" data-val="${esc(k)}"><img class="fb-ic" src="assets/keywords/${encodeURIComponent(k)}.webp" onerror="this.style.display='none'">${esc(k)}</button>`).join("");
  el("sin-filters").innerHTML = SINS.map((s) => `<button class="filter-btn" data-val="${esc(s)}"><img class="fb-ic" src="assets/sin/${encodeURIComponent(s)}.png" onerror="this.style.display='none'">${esc(s)}</button>`).join("");
  el("rar-filters").innerHTML = ["0", "00", "000"].map((r) => `<button class="filter-btn" data-val="${r}"><img class="fb-ic" src="assets/ui/rank_0${r.length}.png" onerror="this.style.display='none'">${r}</button>`).join("");
}
const sinIcon = (sin) => sin
  ? `<img class="kwt-ic" src="assets/sin/${encodeURIComponent(sin)}.png" alt="" onerror="this.style.display='none'">` : "";

/* 가챠 카드 (그리드용): 일러스트 + 등급 프레임 + 랭크 배지 + 이름판 */
function sinGachaCard(s) {
  const n = s.rarity.length || 1;
  return `<div class="sin-card" data-id="${s.id}" title="${esc(s.name)} · ${esc(s.title)}">
    <img class="sc-art" src="${esc(s.art || s.img || "")}" alt="" loading="lazy" onerror="this.style.visibility='hidden'">
    <img class="sc-frame" src="assets/ui/frame_0${n}.png" alt="">
    <img class="sc-rank" src="assets/ui/rank_0${n}.png" alt="" onerror="this.style.display='none'">
    <div class="sc-name">${esc(s.title)}</div>
  </div>`;
}

/* 각성(uptie)별 스킬/패시브 단계 선택 */
const hpAtLevel = (s, lv) => Math.round(s.hp + s.hpInc * (lv - 1));
const skillMaxUptie = (s) => Math.max(2, ...(s.skills || []).flatMap((k) => k.levels.map((l) => l.uptie)), ...((s.passives ? [...s.passives.battle, ...s.passives.support] : []).flatMap((p) => p.levels.map((l) => l.uptie))));
function skillAtUptie(k, U) {
  const lv = k.levels.filter((l) => l.uptie <= U).slice(-1)[0] || k.levels[0];
  let { desc, coinDescs } = lv;
  if (!desc) { const wd = [...k.levels].reverse().find((l) => l.desc); if (wd) { desc = wd.desc; if (!coinDescs.length) coinDescs = wd.coinDescs; } }
  return { ...lv, desc, coinDescs };
}

/* 상세(모달용): 큰 일러스트 + 컨트롤 + 스탯 + 패시브 + 스킬 */
function sinnerDetail(s, uptie, level) {
  const kws = s.keywords.map((k) => `<span class="badge kw"><img class="kwt-ic" src="assets/keywords/${encodeURIComponent(k)}.webp" onerror="this.style.display='none'">${esc(k)}</span>`).join("");
  const resist = Object.entries(s.resist || {}).map(([t, v]) => {
    const cls = v.startsWith("취약") ? "bad" : v.startsWith("저항") ? "good" : "";
    return `<span class="res ${cls}">${esc(t)} ${esc(v)}</span>`;
  }).join("");
  const maxU = skillMaxUptie(s);
  let uptieBtns = "";
  for (let u = 1; u <= maxU; u++) uptieBtns += `<button class="uptie-btn${u === uptie ? " on" : ""}" data-u="${u}">${u}</button>`;
  return `<div class="sm-head">
      <img class="sm-art" src="${esc(s.art || s.img || "")}" alt="" onerror="this.style.display='none'">
      <div class="sm-info">
        <h3>${esc(s.name)} <span class="en">${esc(s.title)}</span></h3>
        <div class="badges">
          <img class="rank-badge" src="assets/ui/rank_0${s.rarity.length}.png" alt="${esc(s.rarity)}" title="${esc(s.rarity)} 등급" onerror="this.style.display='none'">
          ${s.sin ? `<span class="badge sin">${sinIcon(s.sin)}${esc(s.sin)}</span>` : ""}
          ${kws}
          <span class="badge">${esc(s.sinner)}</span>
        </div>
        <div class="sinner-ctrl">
          <span class="ctrl-lbl">각성</span><div class="uptie-btns">${uptieBtns}</div>
          <span class="ctrl-lbl">레벨</span><input type="range" id="lv-slider" min="1" max="45" value="${level}">
          <span id="lv-val">Lv.${level}</span>
        </div>
        <div class="sinner-stats">
          <span>❤ HP <b id="hp-val">${hpAtLevel(s, level)}</b> <small>(+${s.hpInc}/Lv)</small></span>
          <span>⚡ 속도 ${s.speedMin}~${s.speedMax}</span>
          <span>🛡 방어보정 ${s.def > 0 ? "+" : ""}${s.def}</span>
        </div>
        <div class="sinner-resist">${resist}</div>
      </div>
    </div>
    ${sinnerPassives(s, uptie)}
    ${sinnerSkills(s, uptie)}`;
}
function sinnerPassives(s, U) {
  if (!s.passives) return "";
  const sec = (label, arr) => arr && arr.length
    ? `<div class="skill"><div class="skill-head"><span class="badge skill-tier">${label}</span></div>
         ${arr.map((p) => {
      const active = p.uptie <= U;
      const lv = p.levels.filter((l) => l.uptie <= U).slice(-1)[0] || p.levels[0];
      return `<div class="passive${active ? "" : " locked"}"><b>${esc(p.name)}</b>${active ? "" : ` <small class="meta">(각성 ${p.uptie} 필요)</small>`}<div class="skill-desc">${formatEffect(lv.desc)}</div></div>`;
    }).join("")}</div>` : "";
  const body = sec("패시브", s.passives.battle) + sec("서포트 패시브", s.passives.support);
  return body ? `<div class="skills" style="border:none;margin-top:6px;padding-top:4px">${body}</div>` : "";
}
function sinnerSkills(s, U) {
  if (!s.skills || !s.skills.length) return "";
  const rows = s.skills.map((k) => {
    const lv = skillAtUptie(k, U);
    const power = `위력 ${lv.base}${lv.coins ? ` ${lv.scaleStr} (최대 ${lv.max})` : ""}`;
    const meta = [k.atk, k.sin, power, k.mp ? `자원 ${k.mp}` : ""].filter(Boolean).join(" · ");
    const coins = (lv.coinDescs || []).map((c) => `<div class="coin-desc">▸ ${highlightKeywords(esc(c))}</div>`).join("");
    return `<div class="skill">
      <div class="skill-head"><span class="badge skill-tier">${esc(k.tier)}</span> <b>${esc(k.name || lv.name || "")}</b> <small class="meta">${esc(meta)}</small></div>
      ${lv.desc ? `<div class="skill-desc">${formatEffect(lv.desc)}</div>` : ""}
      ${coins}
    </div>`;
  }).join("");
  return `<details class="skills" open><summary>스킬 ${s.skills.length}개</summary>${rows}</details>`;
}
const SINNER_ORDER = typeof SINNERS !== "undefined" ? [...new Set(SINNERS.map((s) => s.sinner))] : [];
function renderSinners() {
  const q = el("sinner-search").value.trim().toLowerCase();
  const ch = el("sinner-char").value, sin = activeFilterVal("sin-filters");
  const kw = activeFilterVal("kw-filters"), rar = activeFilterVal("rar-filters");
  const data = typeof SINNERS !== "undefined" ? SINNERS : [];
  const list = data.filter((s) => {
    if (ch && s.sinner !== ch) return false;
    if (sin && s.sin !== sin) return false;
    if (kw && !s.keywords.includes(kw)) return false;
    if (rar && s.rarity !== rar) return false;
    if (q && !(`${s.name} ${s.title}`.toLowerCase().includes(q))) return false;
    return true;
  });
  el("sinner-count").textContent = `${list.length}개 / 전체 ${data.length}개`;
  let html = "";
  for (const sn of SINNER_ORDER) {
    const cards = list.filter((s) => s.sinner === sn);
    if (!cards.length) continue;
    html += `<div class="sin-group">
      <div class="sg-head"><img class="sg-icon" src="assets/cat/${encodeURIComponent(sn)}.png" onerror="this.style.display='none'"><b>${esc(sn)}</b><span class="meta">${cards.length}</span></div>
      <div class="sg-cards">${cards.map(sinGachaCard).join("")}</div>
    </div>`;
  }
  el("sinner-list").innerHTML = html || `<p class="empty">조건에 맞는 인격이 없습니다.</p>`;
}
let modalSinner = null, modalUptie = 4, modalLevel = 45;
function renderSinnerModalBody() {
  el("sinner-modal").querySelector(".sm-body").innerHTML = sinnerDetail(modalSinner, modalUptie, modalLevel);
}
function openSinnerModal(id) {
  const s = (typeof SINNERS !== "undefined" ? SINNERS : []).find((x) => x.id === id);
  if (!s) return;
  modalSinner = s; modalUptie = skillMaxUptie(s); modalLevel = 45;
  renderSinnerModalBody();
  el("sinner-modal").classList.add("open");
}
function closeSinnerModal() { el("sinner-modal").classList.remove("open"); }
if (typeof SINNERS !== "undefined") {
  ["sinner-search", "sinner-char"].forEach((id) => el(id).addEventListener("input", renderSinners));
  // 필터 버튼 그룹: 단일 선택 토글
  ["kw-filters", "sin-filters", "rar-filters"].forEach((id) => el(id).addEventListener("click", (e) => {
    const b = e.target.closest(".filter-btn");
    if (!b) return;
    const was = b.classList.contains("on");
    el(id).querySelectorAll(".filter-btn").forEach((x) => x.classList.remove("on"));
    if (!was) b.classList.add("on");
    renderSinners();
  }));
  // 모달 내 각성 버튼 / 레벨 슬라이더
  el("sinner-modal").addEventListener("click", (e) => {
    const ub = e.target.closest(".uptie-btn");
    if (ub && modalSinner) { modalUptie = +ub.dataset.u; renderSinnerModalBody(); }
  });
  el("sinner-modal").addEventListener("input", (e) => {
    if (e.target.id === "lv-slider" && modalSinner) {
      modalLevel = +e.target.value;
      const hv = el("sinner-modal").querySelector("#hp-val"); if (hv) hv.textContent = hpAtLevel(modalSinner, modalLevel);
      const lv = el("sinner-modal").querySelector("#lv-val"); if (lv) lv.textContent = "Lv." + modalLevel;
    }
  });
  el("sinner-list").addEventListener("click", (e) => {
    const card = e.target.closest(".sin-card");
    if (card) openSinnerModal(+card.dataset.id);
  });
  el("sinner-modal-close").addEventListener("click", closeSinnerModal);
  el("sinner-modal").addEventListener("click", (e) => { if (e.target.id === "sinner-modal") closeSinnerModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeSinnerModal(); });
  renderSinners();
}

/* =============================================================
 *  키워드 칩 (파티 추천 / 딜 최적화 공용)
 * ============================================================= */
const ATK_TYPES = ["참격", "관통", "타격"]; // 물리 공격 타입
function buildChips(containerId, list) {
  const box = el(containerId);
  (list || KEYWORDS).forEach((k) => {
    const chip = document.createElement("div");
    chip.className = "kw-chip";
    chip.innerHTML = `<img class="fb-ic" src="assets/keywords/${encodeURIComponent(k)}.webp" onerror="this.style.display='none'">${k}`;
    chip.dataset.kw = k;
    chip.addEventListener("click", () => chip.classList.toggle("on"));
    box.appendChild(chip);
  });
}
function selectedChips(containerId) {
  return [...el(containerId).querySelectorAll(".kw-chip.on")].map((c) => c.dataset.kw);
}
buildChips("party-keywords", [...KEYWORDS, ...ATK_TYPES]);
buildChips("damage-keywords");

/* 인격의 공격 타입(스킬 atk)·스킬 죄악(공명용) */
const sinnerAtkTypes = (s) => [...new Set((s.skills || []).map((sk) => sk.atk).filter(Boolean))];
const sinnerSkillSins = (s) => (s.skills || []).map((sk) => sk.sin).filter(Boolean);
const idKeywords = (s) => [...new Set([...(s.keywords || []), ...sinnerAtkTypes(s)])];
const SIN_COLOR = { 분노: "#d0552e", 색욕: "#d98a2b", 나태: "#d9c24a", 탐식: "#7bbf4a", 우울: "#4aa3c8", 오만: "#8a7bd8", 질투: "#c264c2" };

/* =============================================================
 *  ③ 파티 빌더 — 인격 선택 → 키워드 분석 → 추천 기프트·카드팩·시너지
 * ============================================================= */
const PARTY_MAX = 7;   // 거울던전 6부터 7인 편성
const party = [];      // 선택된 인격(최대 7, 수감자당 1명)
const sinnerById = new Map();
if (typeof SINNERS !== "undefined") for (const s of SINNERS) sinnerById.set(s.id, s);

/* 분석에 쓸 키워드: 수동 칩이 있으면 그것만(우선), 없으면 파티 인격에서 유도.
 * (수동으로 화상·진동만 골랐는데 파티의 다른 키워드가 섞여 들어가지 않게) */
function currentKeywords() {
  const chips = selectedChips("party-keywords");
  return chips.length ? chips : [...new Set(party.flatMap((s) => s.keywords))];
}
function renderPartySlots() {
  const box = el("party-slots");
  let html = "";
  for (let i = 0; i < PARTY_MAX; i++) {
    const s = party[i];
    if (s) {
      html += `<div class="pslot filled" data-i="${i}" title="클릭하면 제거">
         <img src="${esc(s.art || s.img || "")}" alt="" onerror="this.style.visibility='hidden'">
         <span class="pslot-x">✕</span>
         <div class="pslot-name">${esc(s.name)}<br><small>${esc(s.title)}</small></div>
       </div>`;
    } else {
      html += `<div class="pslot empty">＋</div>`;
    }
  }
  box.innerHTML = html;
}
function partyChanged() { renderPartySlots(); }

if (typeof SINNERS !== "undefined") {
  el("party-isearch").addEventListener("input", () => {
    const q = el("party-isearch").value.trim().toLowerCase();
    const box = el("party-iresults");
    if (!q) { box.innerHTML = ""; return; }
    const inSinners = new Set(party.map((s) => s.sinner)); // 같은 수감자는 1명만
    const m = SINNERS.filter((s) => !inSinners.has(s.sinner) && `${s.name} ${s.title}`.toLowerCase().includes(q)).slice(0, 10);
    box.innerHTML = m.length ? m.map((s) =>
      `<div class="iresult" data-id="${s.id}">
        <img class="ires-art" src="${esc(s.art || s.img || "")}" alt="" loading="lazy" onerror="this.style.visibility='hidden'">
        <b>${esc(s.name)}</b> <small>${esc(s.title)}</small>
        <span class="badge sin">${sinIcon(s.sin)}${esc(s.sin)}</span>${s.keywords.map((k) => `<span class="badge kw"><img class="kwt-ic" src="assets/keywords/${encodeURIComponent(k)}.webp" onerror="this.style.display='none'">${esc(k)}</span>`).join("")}</div>`).join("")
      : `<div class="meta" style="padding:6px">검색 결과 없음</div>`;
  });
  el("party-iresults").addEventListener("click", (e) => {
    const row = e.target.closest(".iresult");
    if (!row) return;
    const s = sinnerById.get(+row.dataset.id);
    if (s && party.length < PARTY_MAX && !party.some((p) => p.sinner === s.sinner)) { party.push(s); partyChanged(); }
    el("party-isearch").value = ""; el("party-iresults").innerHTML = "";
  });
  el("party-slots").addEventListener("click", (e) => {
    const slot = e.target.closest(".pslot.filled");
    if (!slot) return;
    party.splice(+slot.dataset.i, 1); partyChanged();
  });
  renderPartySlots();
}

function packsForKeywords(keywords) {
  if (typeof CARDPACKS === "undefined") return [];
  const giftNames = MD_GIFTS.filter((g) => g.keywords.some((k) => keywords.includes(k))).map((g) => g.name);
  const out = [];
  for (const p of CARDPACKS) {
    if (!p.events.length) continue;
    const blob = p.events.map((ev) => ev.title + " " + ev.choices.map((c) => `${c.text} ${c.info} ${c.success} ${c.fail}`).join(" ")).join(" ");
    const hits = [...new Set(giftNames.filter((n) => blob.includes(n)))];
    if (hits.length) out.push({ p, hits });
  }
  return out.sort((a, b) => b.hits.length - a.hits.length).slice(0, 5);
}

/* 파티 키워드에 맞는 추천 인격 (보유 키워드 겹침 + 희귀도 가중) */
const RARITY_STARS = { "000": "★★★", "00": "★★", "0": "★" };
function recommendSinners(keywords, exclude) {
  if (typeof SINNERS === "undefined") return [];
  const exSin = new Set(exclude.map((s) => s.sinner)); // 같은 수감자는 파티에 1명만
  const rw = { "000": 3, "00": 2, "0": 1 };
  // 파티의 우세 죄악(공명 시너지용): 해당 죄악 스킬 보유 인격이 가장 많은 죄악
  const sinCnt = {};
  exclude.forEach((s) => [...new Set(sinnerSkillSins(s))].forEach((sin) => { sinCnt[sin] = (sinCnt[sin] || 0) + 1; }));
  const domSin = Object.entries(sinCnt).sort((a, b) => b[1] - a[1])[0]?.[0];
  const scored = SINNERS.map((s) => {
    const match = idKeywords(s).filter((k) => keywords.includes(k));
    let score = match.length * 10 + (rw[s.rarity] || 0);
    if (domSin && sinnerSkillSins(s).includes(domSin)) score += 3; // 공명 시너지
    return { s, match, score };
  }).filter((x) => x.match.length && !exSin.has(x.s.sinner))
    .sort((a, b) => b.score - a.score || b.match.length - a.match.length)
    .slice(0, 30); // 매칭 인격을 폭넓게 표시(같은 수감자의 다른 인격도). 추가 시점에 수감자 1명 제한.
  return scored;
}

/* 죄악 공명 잠재력 — 한 턴에 같은 죄악 스킬 2개=공명, 3개=완전 공명.
 * 한 인격은 턴당 스킬 1개 사용 → '해당 죄악 스킬을 가진 인격 수'가 곧 공명 잠재력. */
function resonanceBlock() {
  if (!party.length) return "";
  const cnt = {};
  party.forEach((s) => [...new Set(sinnerSkillSins(s))].forEach((sin) => { cnt[sin] = (cnt[sin] || 0) + 1; }));
  const sorted = Object.entries(cnt).sort((a, b) => b[1] - a[1]);
  if (!sorted.length) return "";
  const max = sorted[0][1];
  const tag = (c) => c >= 3 ? " · 완전 공명 가능" : c >= 2 ? " · 공명 가능" : "";
  const bars = sorted.map(([sin, c]) => `<div class="res-row">
      <span class="badge sin" style="min-width:58px">${sinIcon(sin)}${esc(sin)}</span>
      <div class="res-bar"><div class="res-fill" style="width:${Math.round(c / max * 100)}%;background:${SIN_COLOR[sin] || "#9c6639"}"></div></div>
      <small class="meta">${c}명${tag(c)}</small></div>`).join("");
  const top = sorted[0];
  const tip = top[1] >= 3
    ? `<b>${esc(top[0])}</b> 스킬을 가진 인격이 ${top[1]}명 → 매 턴 같은 죄악 스킬 3개를 골라 <b>완전 공명</b>을 노릴 수 있습니다.`
    : top[1] >= 2
      ? `<b>${esc(top[0])}</b>로 공명(2개)은 가능하지만 완전 공명(3개)엔 인격이 더 필요합니다.`
      : `죄악이 흩어져 있어 공명이 어렵습니다. 한 죄악 인격을 2~3명 이상 모으세요.`;
  return `<div class="result-block"><h3>🌀 죄악 공명 잠재력</h3>
    <p class="hint">한 턴에 같은 죄악 스킬 <b>2개=공명</b>, <b>3개=완전 공명</b> → 스킬 위력↑·EGO 자원 생성. 아래는 죄악별 스킬 보유 인격 수입니다. ${tip}</p>${bars}</div>`;
}

/* 역할 균형 — 선택 키워드에 대응하는 기프트의 역할 분포 */
function roleBalanceBlock(picked) {
  const roles = ["부여", "발동", "증폭", "유틸"];
  const cnt = Object.fromEntries(roles.map((r) => [r, 0]));
  MD_GIFTS.forEach((g) => { if (g.keywords.some((k) => picked.includes(k))) cnt[g.role] = (cnt[g.role] || 0) + 1; });
  const max = Math.max(1, ...roles.map((r) => cnt[r]));
  const bars = roles.map((r) => `<div class="res-row">
      <span class="badge" style="min-width:44px;text-align:center">${r}</span>
      <div class="res-bar"><div class="res-fill" style="width:${Math.round(cnt[r] / max * 100)}%;background:#9c6639"></div></div>
      <small class="meta">${cnt[r]}개</small></div>`).join("");
  const warn = (cnt["부여"] === 0 || cnt["발동"] === 0)
    ? `<p class="hint warn">⚠ 상태이상 딜은 <b>부여</b>(쌓기)와 <b>발동</b>(터뜨리기)이 모두 필요합니다.</p>` : "";
  return `<div class="result-block"><h3>⚖️ 역할 균형 <span class="meta">(사용 가능 기프트)</span></h3>
    <p class="hint">부여로 쌓고 발동으로 터뜨리는 균형이 중요합니다. <small class="meta">(역할은 효과 텍스트 기반 자동 분류라 일부 오차가 있을 수 있습니다.)</small></p>${warn}${bars}</div>`;
}

el("party-run").addEventListener("click", runPartyRec);
function runPartyRec() {
  const picked = currentKeywords();
  const out = el("party-result");
  if (!picked.length) {
    out.innerHTML = `<div class="result-block warn">인격을 추가하거나 파티 키워드를 1개 이상 고르세요.</div>`;
    return;
  }

  // ⓪ 추천 인격
  const recs = recommendSinners(picked, party);
  const precRows = recs.map(({ s, match }) => `
    <div class="rank-item rank-flex prec-item" data-id="${s.id}" title="클릭하면 파티에 추가">
      <img class="prec-art" src="${esc(s.art || s.img || "")}" loading="lazy" onerror="this.style.visibility='hidden'">
      <div>
        <b>${esc(s.name)}</b> <small class="meta">${esc(s.title)}</small>
        <span class="badge sin">${sinIcon(s.sin)}${esc(s.sin)}</span>
        <small class="rar">${RARITY_STARS[s.rarity] || ""}</small>
        <span class="prec-add">＋ 파티에</span><br>
        ${match.map((k) => `<span class="badge kw"><img class="kwt-ic" src="assets/keywords/${encodeURIComponent(k)}.webp" onerror="this.style.display='none'">${esc(k)}</span>`).join("")}
      </div>
    </div>`).join("");
  const precBlock = `<div class="result-block"><h3>① 추천 인격 <span class="meta">(${picked.join(", ")})</span></h3>
    <p class="hint">파티 키워드를 보유한 인격입니다. <b>클릭하면 파티 슬롯에 추가</b>됩니다 (현재 ${party.length}/${PARTY_MAX}).</p>
    ${party.length >= PARTY_MAX ? `<p class="meta">파티가 가득 찼습니다 (${PARTY_MAX}/${PARTY_MAX}). 슬롯의 인격을 눌러 제거할 수 있습니다.</p>`
      : (precRows || `<p class="meta">파티 키워드가 겹치는 인격이 없습니다.</p>`)}</div>`;

  // ② 추천 기프트 — 키워드별 칸으로 분리(각 키워드 매칭 기프트를 티어순)
  const giftCols = picked.map((kw) => {
    const gs = MD_GIFTS.filter((g) => g.keywords.includes(kw))
      .sort((a, b) => giftTierVal(b) - giftTierVal(a) || (b.cost || 0) - (a.cost || 0)).slice(0, 14);
    return `<div class="gift-kw-col">
      <div class="core-h"><img class="kwt-ic" src="assets/keywords/${encodeURIComponent(kw)}.webp" onerror="this.style.display='none'"> ${esc(kw)} <small class="meta">(${gs.length})</small></div>
      <div class="core-chips">${gs.map(coreGiftChip).join("") || '<small class="meta">없음</small>'}</div>
    </div>`;
  }).join("");

  const packs = packsForKeywords(picked);
  const packRows = packs.length ? packs.map(({ p, hits }) =>
    `<div class="rank-item"><b>${esc(p.title)}</b> <span class="badge kw">${esc(p.theme)}</span>
      <small class="meta"> 층 ${[...new Set(p.floors)].join("·")} · ${p.difficulties.join("/")}</small><br/>
      <small>이 팩 사건에서: ${hits.slice(0, 6).map(esc).join(", ")}${hits.length > 6 ? " 외" : ""}</small></div>`).join("")
    : `<p class="meta">키워드 기프트를 주는 고유 사건 팩을 못 찾았습니다. 공용 사건/상점에서 노리세요.</p>`;

  const tips = picked.map((kw) => SYNERGY_RULES[kw]
    ? `<div class="rank-item"><b>${kw}</b> — ${esc(SYNERGY_RULES[kw].tip)} <small class="meta">(필요 역할: ${SYNERGY_RULES[kw].needs.join("·")})</small></div>` : "").join("");

  out.innerHTML = `
    ${precBlock}
    ${resonanceBlock()}
    <div class="result-block"><h3>② 추천 기프트 <span class="meta">(키워드별)</span></h3>
      <p class="hint">키워드별 상위 티어 기프트입니다. 칩을 누르면 상세로 이동.</p>
      <div class="gift-kw-cols">${giftCols}</div></div>
    ${roleBalanceBlock(picked)}
    <div class="result-block"><h3>③ 추천 카드팩 (루트)</h3>
      <p class="hint">파티 키워드 기프트를 주는 사건이 있는 팩입니다. 이 팩을 골라 루트를 짜세요.</p>${packRows}</div>
    <div class="result-block"><h3>④ 딜 시너지 팁</h3>${tips}</div>`;
}
/* 추천 인격 클릭 → 파티에 추가 후 추천 갱신 */
el("party-result").addEventListener("click", (e) => {
  const row = e.target.closest(".prec-item");
  if (!row) return;
  const s = sinnerById.get(+row.dataset.id);
  if (s && party.length < PARTY_MAX && !party.some((p) => p.sinner === s.sinner)) {
    party.push(s); partyChanged(); runPartyRec();
  }
});

/* 파티 액션: 자동 구성 / 저장 / 공유 / 초기화 + 복원 */
const PARTY_KEY = "md_party";
const partyMsg = (t) => { el("party-msg").textContent = t || ""; };
function loadPartyIds(ids) {
  party.length = 0;
  ids.forEach((id) => {
    const s = sinnerById.get(+id);
    if (s && party.length < PARTY_MAX && !party.some((p) => p.sinner === s.sinner)) party.push(s);
  });
  partyChanged();
}
if (typeof SINNERS !== "undefined") {
  el("party-auto").addEventListener("click", () => {
    const picked = currentKeywords();
    if (!picked.length) { partyMsg("키워드를 1개 이상 고른 뒤 자동 구성하세요."); return; }
    for (const { s } of recommendSinners(picked, party)) {
      if (party.length >= PARTY_MAX) break;
      if (party.some((p) => p.sinner === s.sinner)) continue; // 같은 수감자 1명만
      party.push(s);
    }
    partyChanged(); runPartyRec(); partyMsg(`상위 추천으로 파티를 채웠습니다 (${party.length}/${PARTY_MAX}).`);
  });
  el("party-save").addEventListener("click", () => {
    try { localStorage.setItem(PARTY_KEY, JSON.stringify(party.map((s) => s.id))); } catch (_) {}
    partyMsg(`파티 저장됨 (${party.length}명). 다음 방문 때 자동 복원됩니다.`);
  });
  el("party-share").addEventListener("click", async () => {
    if (!party.length) { partyMsg("공유할 인격이 없습니다."); return; }
    const url = location.origin + location.pathname + "#party=" + party.map((s) => s.id).join(",");
    try { await navigator.clipboard.writeText(url); partyMsg("공유 링크를 클립보드에 복사했습니다."); }
    catch (_) { partyMsg(url); }
  });
  el("party-clear").addEventListener("click", () => {
    party.length = 0; partyChanged();
    el("party-keywords").querySelectorAll(".kw-chip.on").forEach((c) => c.classList.remove("on"));
    el("party-result").innerHTML = ""; partyMsg("파티를 초기화했습니다.");
  });
  // 복원: URL 해시 우선, 없으면 저장값
  (function restoreParty() {
    const m = (location.hash || "").match(/party=([\d,]+)/);
    if (m) { loadPartyIds(m[1].split(",")); partyMsg("공유 링크의 파티를 불러왔습니다."); return; }
    try { const saved = JSON.parse(localStorage.getItem(PARTY_KEY) || "[]"); if (saved.length) loadPartyIds(saved); } catch (_) {}
  })();
}

/* =============================================================
 *  ④ 딜 최적화 — 역할 균형 진단
 * ============================================================= */
const giftTierVal = (g) => g.ex ? 6 : (g.tier || 0);
// 작은 클릭형 기프트 칩 (기프트 모달로 이동)
const coreGiftChip = (g) => `<span class="goto-gift core-gift" data-goto="${escAttr(g.name)}">${giftThumb(g, "xs")}<span class="cg-name">${esc(g.name)}</span><small class="cg-t">${g.ex ? "EX" : "T" + g.tier}</small></span>`;

el("damage-run").addEventListener("click", () => {
  const picked = selectedChips("damage-keywords");
  const out = el("damage-result");
  if (!picked.length) {
    out.innerHTML = `<div class="result-block warn">상태이상을 1개 이상 선택하세요.</div>`;
    return;
  }

  // 키워드별: 메커니즘 카드 + 역할별 코어 기프트 + 취약 부여
  const kwBlocks = picked.map((kw) => {
    const m = KEYWORD_MECH[kw];
    const rule = SYNERGY_RULES[kw];
    const pool = MD_GIFTS.filter((g) => g.keywords.includes(kw));
    const roleCols = ["부여", "발동", "증폭"].map((r) => {
      const gs = pool.filter((g) => g.role === r).sort((a, b) => giftTierVal(b) - giftTierVal(a)).slice(0, 4);
      if (!gs.length) return "";
      const need = rule && rule.needs.includes(r);
      return `<div class="core-col"><div class="core-h${need ? " need" : ""}">${r}${need ? " ★" : ""}</div>${gs.map(coreGiftChip).join("")}</div>`;
    }).join("");
    const fragile = pool.filter((g) => /취약/.test(g.effect)).sort((a, b) => giftTierVal(b) - giftTierVal(a)).slice(0, 5);
    const fragileRow = fragile.length
      ? `<div class="core-frag"><div class="core-h">＋ 취약 부여 (범용 증뎀)</div>${fragile.map(coreGiftChip).join("")}</div>` : "";
    return `<div class="result-block">
      <h3><img class="kwt-ic" src="assets/keywords/${encodeURIComponent(kw)}.webp" onerror="this.style.display='none'"> ${esc(kw)} <span class="meta">딜 최적화</span></h3>
      ${m ? `<div class="mech-card">
        <div class="mech-row"><b>딜 방식</b> ${esc(m.how)}</div>
        <div class="mech-row"><b>특징</b> ${esc(m.trait)}</div>
        <div class="mech-row warn"><b>약점</b> ${esc(m.weak)}</div>
        <div class="mech-row tip"><b>최적화</b> ${esc(m.tip)}</div>
      </div>` : ""}
      <div class="core-h2">핵심 코어 기프트 <small class="meta">(역할별 상위 티어 · ★=이 빌드 필수 역할)</small></div>
      <div class="core-roles">${roleCols}</div>
      ${fragileRow}
    </div>`;
  }).join("");

  // 범용 증뎀 레버 (빌드 무관)
  const leverRows = DMG_LEVERS.map((lv) => {
    const re = new RegExp(lv.find);
    const egs = MD_GIFTS.filter((g) => re.test(g.effect)).sort((a, b) => giftTierVal(b) - giftTierVal(a)).slice(0, 5);
    return `<div class="rank-item">
      <b>${esc(lv.name)}</b> <span class="rar">${lv.power}</span>
      <p class="hint" style="margin:3px 0">${esc(lv.desc)}</p>
      <div class="core-chips">${egs.map(coreGiftChip).join("") || '<small class="meta">관련 기프트 없음</small>'}</div>
    </div>`;
  }).join("");

  out.innerHTML = `
    <div class="result-block"><h3>⚡ 범용 증뎀 (빌드 무관)</h3>
      <p class="hint">데미지 = <b>코인값 × (1+정적배율) × (1+동적배율)</b>. 아래는 어떤 상태이상 빌드든 곱연산으로 들어가는 핵심 레버입니다. 칩을 누르면 기프트 상세로 이동.</p>
      ${leverRows}</div>
    ${kwBlocks}
    <div class="result-block"><h3>🔮 조합·내성 팁</h3>
      <ul class="dmg-tips">
        <li><b>합성으로 덱 굳히기</b> — 기프트 3개 합성 시 원하는 키워드가 <b>90%</b>(2개는 60%). 코어 키워드는 합성으로 모으세요.</li>
        <li><b>적 내성 대응</b> — 적이 약한 <b>공격타입(참격/관통/타격)</b>으로 때리고, 그 위에 <b>취약</b>을 깔면 곱연산으로 폭딜. 파티 추천 탭의 공격타입 칩으로 인격을 맞추세요.</li>
        <li><b>교착(스태거) 주의</b> — 출혈·파열은 교착된 적에게 피해가 안 들어갑니다. 폭발 타이밍을 교착 전/후로 조절하세요.</li>
        <li><b>비용 관리</b> — 상점에서 기프트 강화·교체로 코어 기프트의 티어를 올리면 딜이 크게 상승합니다.</li>
      </ul></div>`;
});

/* =============================================================
 *  키워드 툴팁 (마우스 오버 시 설명 표시)
 * ============================================================= */
(function () {
  const tip = document.createElement("div");
  tip.id = "kwtip";
  document.body.appendChild(tip);
  const place = (e) => {
    const pad = 14, w = tip.offsetWidth, h = tip.offsetHeight;
    let x = e.clientX + pad, y = e.clientY + pad;
    if (x + w > window.innerWidth - 8) x = e.clientX - w - pad;
    if (y + h > window.innerHeight - 8) y = e.clientY - h - pad;
    tip.style.left = x + "px";
    tip.style.top = y + "px";
  };
  document.addEventListener("mouseover", (e) => {
    const el = e.target.closest && e.target.closest(".kwt[data-desc]");
    if (!el) return;
    tip.textContent = el.getAttribute("data-desc");
    tip.style.display = "block";
    place(e);
  });
  document.addEventListener("mousemove", (e) => {
    if (tip.style.display === "block") place(e);
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest && e.target.closest(".kwt[data-desc]")) tip.style.display = "none";
  });
})();

/* =============================================================
 *  조합식 아이템 클릭 → 해당 기프트로 이동 + 강조
 * ============================================================= */
function gotoGift(name) {
  const g = giftByName.get(normName(name));
  if (!g) return;
  // 다른 모달은 닫고 해당 기프트 상세 모달 열기
  document.querySelectorAll(".modal-overlay.open").forEach((m) => m.classList.remove("open"));
  openGiftModal(g);
}
document.addEventListener("click", (e) => {
  const t = e.target.closest && e.target.closest(".goto-gift[data-goto]");
  if (!t) return;
  gotoGift(t.getAttribute("data-goto"));
});

/* =============================================================
 *  썸네일 호버 확대 미리보기
 * ============================================================= */
(function () {
  const zoom = document.createElement("div");
  zoom.id = "imgzoom";
  const zimg = document.createElement("img");
  zoom.appendChild(zimg);
  document.body.appendChild(zoom);
  const SEL = "img.pack-ev-thumb, img.zoomable, img.ev-art";
  const place = (e) => {
    const pad = 16, w = zoom.offsetWidth, h = zoom.offsetHeight;
    let x = e.clientX + pad, y = e.clientY + pad;
    if (x + w > window.innerWidth - 8) x = e.clientX - w - pad;
    if (y + h > window.innerHeight - 8) y = e.clientY - h - pad;
    zoom.style.left = Math.max(8, x) + "px";
    zoom.style.top = Math.max(8, y) + "px";
  };
  document.addEventListener("mouseover", (e) => {
    const t = e.target.closest && e.target.closest(SEL);
    if (!t || !t.getAttribute("src")) return;
    zimg.src = t.getAttribute("src");
    zoom.style.display = "block";
    place(e);
  });
  document.addEventListener("mousemove", (e) => { if (zoom.style.display === "block") place(e); });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest && e.target.closest(SEL)) zoom.style.display = "none";
  });
})();

/* =============================================================
 *  림버스 엠블럼 커서 팔로워 (마우스를 부드럽게 따라옴)
 * ============================================================= */
(function () {
  if (matchMedia("(pointer: coarse)").matches) return;   // 터치 기기 제외
  const cur = document.createElement("div");
  cur.id = "limbus-cursor";
  document.body.appendChild(cur);
  let mx = window.innerWidth / 2, my = window.innerHeight / 2, x = mx, y = my, shown = false;
  document.addEventListener("mousemove", (e) => {
    mx = e.clientX; my = e.clientY;
    if (!shown) { shown = true; cur.style.opacity = "1"; }
  });
  document.addEventListener("mouseleave", () => { cur.style.opacity = "0"; shown = false; });
  (function loop() {
    x += (mx - x) * 0.16;
    y += (my - y) * 0.16;
    cur.style.transform = `translate(${x + 14}px, ${y + 8}px)`;
    requestAnimationFrame(loop);
  })();
})();

/* =============================================================
 *  배경 코스믹 별하늘 캔버스 (거울던전 분위기)
 *  · 트윙클 별  · 발광 별  · 은은한 금빛 먼지  · 이따금 별똥별
 * ============================================================= */
(function () {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const canvas = document.getElementById("lc-embers");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let W = 0, H = 0, stars = [], dust = [], shoots = [], last = 0, nextShoot = 2.5;
  const rand = (a, b) => a + Math.random() * (b - a);

  function spawnDust(initial) {
    return {
      x: Math.random() * W,
      y: initial ? Math.random() * H : H + 8,
      r: rand(0.7, 1.8), vy: rand(6, 16),
      sway: rand(6, 18), swayv: rand(0.3, 0.9), ph: Math.random() * Math.PI * 2,
      life: rand(0, 4), max: rand(8, 16), hue: rand(36, 48),
    };
  }
  function spawnShoot() {
    const fromLeft = Math.random() < 0.5;
    const x = fromLeft ? rand(0, W * 0.4) : rand(W * 0.6, W);
    const y = rand(0, H * 0.35);
    const ang = (fromLeft ? rand(0.15, 0.45) : rand(Math.PI - 0.45, Math.PI - 0.15));
    const sp = rand(420, 680);
    return { x, y, vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp, len: rand(80, 160), life: 0, max: rand(0.5, 0.9) };
  }
  function build() {
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.width = W + "px"; canvas.style.height = H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    stars = Array.from({ length: Math.round(W * H / 7000) }, () => {
      const bright = Math.random() < 0.08;
      return {
        x: Math.random() * W, y: Math.random() * H,
        r: bright ? rand(1.1, 1.9) : rand(0.35, 1.1),
        base: rand(0.12, 0.5), tw: rand(0.5, 1.9), ph: Math.random() * Math.PI * 2,
        glow: bright, gold: Math.random() < 0.3,
      };
    });
    dust = Array.from({ length: Math.round(W / 70) }, () => spawnDust(true));
  }
  function frame(t) {
    const dt = last ? Math.min((t - last) / 1000, 0.05) : 0.016;
    last = t;
    ctx.clearRect(0, 0, W, H);

    // 별 (트윙클 + 발광 헤일로)
    for (const s of stars) {
      s.ph += dt * s.tw;
      const a = Math.max(0, s.base + Math.sin(s.ph) * s.base * 0.75);
      const col = s.gold ? "220,190,130" : "215,224,242";
      if (s.glow) {
        const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 4);
        g.addColorStop(0, `rgba(${col},${a * 0.5})`);
        g.addColorStop(1, `rgba(${col},0)`);
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r * 4, 0, Math.PI * 2); ctx.fill();
      }
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${col},${a})`;
      ctx.fill();
    }

    // 금빛 먼지 (천천히 떠오름)
    for (const e of dust) {
      e.life += dt; e.y -= e.vy * dt; e.ph += e.swayv * dt;
      const x = e.x + Math.sin(e.ph) * e.sway;
      const a = Math.sin(Math.min(e.life / e.max, 1) * Math.PI) * 0.5;
      const g = ctx.createRadialGradient(x, e.y, 0, x, e.y, e.r * 3);
      g.addColorStop(0, `hsla(${e.hue},85%,66%,${a})`);
      g.addColorStop(1, `hsla(${e.hue},85%,60%,0)`);
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(x, e.y, e.r * 3, 0, Math.PI * 2); ctx.fill();
      if (e.y < -10 || e.life > e.max) Object.assign(e, spawnDust(false));
    }

    // 별똥별 (이따금)
    nextShoot -= dt;
    if (nextShoot <= 0 && shoots.length < 2) { shoots.push(spawnShoot()); nextShoot = rand(4, 9); }
    for (let i = shoots.length - 1; i >= 0; i--) {
      const sh = shoots[i];
      sh.life += dt; sh.x += sh.vx * dt; sh.y += sh.vy * dt;
      const k = 1 - sh.life / sh.max;
      const a = Math.max(0, Math.sin((sh.life / sh.max) * Math.PI)) * 0.9;
      const tx = sh.x - sh.vx / Math.hypot(sh.vx, sh.vy) * sh.len;
      const ty = sh.y - sh.vy / Math.hypot(sh.vx, sh.vy) * sh.len;
      const g = ctx.createLinearGradient(sh.x, sh.y, tx, ty);
      g.addColorStop(0, `rgba(255,240,200,${a})`);
      g.addColorStop(1, "rgba(255,240,200,0)");
      ctx.strokeStyle = g; ctx.lineWidth = 1.6; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(sh.x, sh.y); ctx.lineTo(tx, ty); ctx.stroke();
      if (sh.life > sh.max || k <= 0 || sh.x < -200 || sh.x > W + 200 || sh.y > H + 200) shoots.splice(i, 1);
    }
    requestAnimationFrame(frame);
  }
  build();
  let rz;
  window.addEventListener("resize", () => { clearTimeout(rz); rz = setTimeout(build, 200); });
  requestAnimationFrame(frame);
})();
