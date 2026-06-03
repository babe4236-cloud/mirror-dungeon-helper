# 🪞 거울던전 도우미 (림버스컴퍼니)

기프트 검색 · 사건(?) Q&A · 파티 맞춤 추천 · 딜 최적화 진단을 한 곳에서.
**빌드 도구 없이** 동작하는 정적 웹앱입니다.

## 폴더 구조
```
새 폴더/
├─ index.html          # 화면 + 탭
├─ css/styles.css      # 스타일
├─ js/data.js          # 공용 상수 + 시너지 규칙 (직접 관리)
├─ js/gifts.gen.js     # ★ 자동 생성: 기프트 526개
├─ js/events.gen.js    # ★ 자동 생성: 사건 109개
├─ js/app.js           # 검색/추천/진단 로직
├─ js/cardpacks.gen.js        # ★ 자동 생성: 카드팩 114개 (사건·보상 연결)
├─ js/recipes.gen.js          # ★ 자동 생성: 조합식 71개 (재료→결과)
├─ js/sinners.gen.js          # ★ 자동 생성: 수감자(인격) 171개 (스탯·내성)
├─ js/event_choices_kr.json   # 사건 선택지 한글 번역사전
├─ scripts/scrape.mjs         # 기프트·사건 수집기 (위키+게임 한글)
├─ scripts/scrape-haneuk.mjs  # 카드팩 수집기 (haneuk 공개 API)
├─ scripts/fetch-images.mjs   # 이미지 다운로드·연결 (haneuk)
├─ scripts/translate-choices.mjs  # 선택지 번역사전 빌더
└─ assets/                    # 이미지 (gifts/packs/events, 약 19MB)
```

## 실행 (로컬)
- `index.html`을 **더블클릭**하면 바로 열립니다. (별도 서버 불필요)

## 데이터 자동 수집 (최신화)
게임/위키가 패치되면 아래로 데이터를 다시 긁어옵니다. (Node 18+ 필요)
```bash
node scripts/scrape.mjs           # 기프트 (위키 구조 + 게임 공식 한글 효과)
node scripts/scrape-haneuk.mjs    # 사건 + 카드팩 + 조합식 (한글 + 이미지, haneuk 공개 API)
node scripts/fix-gift-english.mjs # 기프트 영문 잔존 정리 (haneuk 효과로 보정 + 중복 제거)
node scripts/fetch-images.mjs     # 기프트 썸네일 + 키워드 아이콘 (haneuk)
node scripts/scrape-sinners.mjs   # 수감자(인격) 스탯·이미지 (연심 yeon-sim, 게임 데이터)
```
> - **사건·카드팩**: `scrape-haneuk.mjs`가 한글 데이터와 이미지를 함께 받아 `events.gen.js`·`cardpacks.gen.js` 생성.
> - **기프트**: `scrape.mjs`가 효과 텍스트(게임 공식 한글)를, `fetch-images.mjs`가 썸네일을 붙임.
> - 이미지는 로컬 `assets/`로 받습니다(약 19MB). 이미 받은 파일은 건너뛰어 재실행이 가볍습니다. 이미지 저작권은 Project Moon.
- 출처
  - 구조(키워드/등급/가격) → [Limbus Company Wiki](https://limbuscompany.wiki.gg) `Module:EgoGift/data`
  - 사건 → 같은 위키 `Category:Mirror Dungeon Events` (페이지별 파싱)
  - **한글 텍스트** → [x1bViolet/Limbus-Localization-Files](https://github.com/x1bViolet/Limbus-Localization-Files) (게임 공식 KR Assets, `Korean` 브랜치)
  - **카드팩** → [단테의 달의기억](https://limbus.haneuk.info) 공개 API (`/api/user/cardpack`, `/api/user/dungeon/event`)
  - **수감자(인격)** → [연심 yeon-sim](https://yeon-sim.github.io) 게임 StaticData + 한글(`data/personality`, `KR_Personalities`, 스킬·키워드 사전). UI도 연심처럼 가챠 카드(일러스트+등급 프레임+이름판) 그리드 + 클릭 상세 모달
- 한글화 원리: 위키 영문 이름 → 게임 `id` → 한국어 이름·효과를 매핑해 부착 (522/526 기프트)
- 결과를 `js/gifts.gen.js`, `js/events.gen.js`로 덮어씁니다.
- `*.gen.js`는 **직접 수정하지 마세요** (재실행 시 덮어써짐). 손볼 게 있으면 `scripts/scrape.mjs`를 고치세요.

### 데이터 스키마
```js
// 기프트 (위키 구조 + 게임 한글 효과 + haneuk 썸네일)
{ id, name(한글), name_en, tier:1~5, sin:"분노", keywords:["출혈"],
  role:"부여|발동|증폭|유틸", cost, localized:true, effect(한글), img }
// 사건 (haneuk: 네이티브 한글 + 이미지 + 소속 팩)
{ id, name, packs:[팩명...], img, choices:[
  { text, info, success, fail } ] }
// 카드팩
{ id, title, theme, desc, img, floors:[], difficulties:[], events:[ {title, img, choices} ] }
```

> 참고
> - 기프트 이름·효과는 **게임 공식 한국어**(미매칭 4개만 영문), 썸네일 432/526.
> - 기프트 아이콘은 일러스트 위에 **등급(I~V) 배지 + 키워드 아이콘**(화상/출혈/호흡/타격 등)을 CSS로 오버레이 — 게임 표기와 동일. 아이콘은 `assets/keywords/<키워드>.webp`.
> - 사건은 **haneuk 네이티브 한국어 + 이미지**(155개 전부 이미지). 본문에 "E.G.O GIFT"는 게임 정식 표기.
> - `role`(부여/발동/증폭/유틸)은 효과 텍스트로 자동 추정한 값이라 일부 부정확할 수 있습니다.

> 레거시: `scripts/translate-choices.mjs` + `js/event_choices_kr.json`은 위키 기반 사건을 쓰던 시절의
> 선택지 번역사전입니다. 지금은 사건을 haneuk에서 받으므로 사용하지 않습니다(폴백용으로 보존).

## 웹으로 공유/배포 (링크로 공유)
빌드가 필요 없어 **폴더를 그대로 올리면** 됩니다.

- **GitHub Pages**: 깃 저장소에 올리고 Settings → Pages → 브랜치 지정 → 발급된 URL 공유
- **Netlify / Vercel**: 폴더를 드래그&드롭(또는 깃 연동)하면 즉시 URL 발급
- **사내/지인 공유**: 폴더를 zip으로 보내면 받는 사람이 `index.html`만 열어도 됨

## 로드맵
- [x] 1단계: 기프트 검색 + 사건 Q&A
- [x] 2단계: 파티 키워드 → 시너지 점수 추천
- [x] 3단계: 상태이상 역할 균형 진단
- [x] 4단계: 위키에서 실제 데이터 자동 수집 (기프트 526 / 사건 109)
- [x] 5단계: 게임 공식 한국어 매핑 (기프트 이름·효과 한글화 522/526)
- [x] 6단계: 사건을 haneuk 네이티브 한글 데이터로 교체 (100% 한글)
- [x] 7단계: 카드팩 탭 (팩별 사건·보상, haneuk 공개 API)
- [x] 8단계: 전 탭 이미지 (기프트·사건·카드팩 썸네일/일러스트) + 기프트 등급·키워드 오버레이
- [x] 9단계: 조합식 탭 (합성 레시피 71개, 재료→결과 + 난이도)
- [x] 10단계: 조합식 맥락 연결 — 기프트 카드("조합으로 획득 / 조합 재료 →")와 사건 카드("이 사건 기프트로 만드는 조합식")에 인라인 표시
- [x] 11단계: 수감자(인격) 탭 — 171개, 이미지·죄악·키워드·등급·HP·속도·내성
- [x] 12단계: 파티 빌더 — 인격 6명 선택 → 키워드 자동 분석 → 추천 기프트(클릭 이동)·카드팩(루트)·시너지 팁
- [x] 13단계: 인격 스킬 상세 — 스킬1/2/3·수비/반격/회피, 공격타입·코인 위력·자원·효과(키워드 강조·태그 한글화)
