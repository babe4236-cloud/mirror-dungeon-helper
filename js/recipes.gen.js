/* 자동 생성 — node scripts/scrape-haneuk.mjs 로 재생성. 직접 수정 금지.
   출처: 단테의 달의기억 (limbus.haneuk.info) — 조합식 */
const RECIPES = [
 {
  "id": 31,
  "title": "검은 악보",
  "result": {
   "name": "검은 악보",
   "img": "assets/gifts/01d969b5-0270-4e1d-8cb4-8dd8b98cba2a.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "한겨울 밤의 악몽",
    "img": "assets/gifts/81bec713-114f-4649-87d5-d53b6c258a36.webp",
    "grade": "노말"
   },
   {
    "name": "뒤엉킨 뼛조각",
    "img": "assets/gifts/ca104f38-90a2-4939-9eb8-13e3229c7ef4.webp",
    "grade": "노말"
   },
   {
    "name": "머리 없는 초상화",
    "img": "assets/gifts/fe8e3d3e-3303-47ca-a687-1a749ac6207f.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 53,
  "title": "고위험 작전용 장비",
  "result": {
   "name": "고위험 작전용 장비",
   "img": "assets/gifts/5237e419-04e8-41fc-bec2-16af3dab0e59.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "통상 작전용 장비",
    "img": "assets/gifts/8ad59b12-7b69-48ac-a593-c1e8fab13fb5.webp",
    "grade": "노말"
   },
   {
    "name": "작전 승인 카드",
    "img": "assets/gifts/d4045032-9df5-4ffb-ac5b-b3c70790460b.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 43,
  "title": "과충전된 배터리",
  "result": {
   "name": "과충전된 배터리",
   "img": "assets/gifts/b3963eb7-50e6-499d-8c34-34c44973bbfe.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "생체 발전형 배터리",
    "img": "assets/gifts/8c205654-2082-470c-801e-4ba77e1f065d.webp",
    "grade": "노말"
   },
   {
    "name": "결정화된 혈액",
    "img": "assets/gifts/82976585-3fa0-480c-8483-3ddf8eb8f0eb.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 20,
  "title": "그림자 괴물",
  "result": {
   "name": "그림자 괴물",
   "img": "assets/gifts/f8677463-2266-43c4-b2c7-9e9e7bb888a0.webp",
   "grade": "하드"
  },
  "ingredients": [
   {
    "name": "불 꺼진 랜턴",
    "img": "assets/gifts/6524b044-ffaf-4bd3-a7ce-9868f3b27963.webp",
    "grade": "하드"
   },
   {
    "name": "불 꺼진 촛대",
    "img": "assets/gifts/346dfce6-a440-4e53-b2c7-cd83d4d27515.webp",
    "grade": "하드"
   }
  ]
 },
 {
  "id": 21,
  "title": "기괴한 석상",
  "result": {
   "name": "기괴한 석상",
   "img": "assets/gifts/c9b2b0cd-665e-48bc-b066-6764843a1614.webp",
   "grade": "하드"
  },
  "ingredients": [
   {
    "name": "뼈 말뚝",
    "img": "assets/gifts/56dcaa88-6c1e-40ef-993a-5bdc3e73e47e.webp",
    "grade": "노말"
   },
   {
    "name": "종말의 파편",
    "img": "assets/gifts/28ba93ef-e84e-46e5-a31a-9b6885c1813c.webp",
    "grade": "하드"
   }
  ]
 },
 {
  "id": 37,
  "title": "기쁜 봉제인형",
  "result": {
   "name": "기쁜 봉제인형",
   "img": "assets/gifts/d0e8cb18-c650-4334-89f7-4dd6902eca32.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "털방울 모자",
    "img": "assets/gifts/e9498f98-d1a6-47d3-a355-16f340b64a82.webp",
    "grade": "노말"
   },
   {
    "name": "거대한 선물 보따리",
    "img": "assets/gifts/7c8a99b8-eec6-4cf8-9ff7-0f0a630d53a3.webp",
    "grade": "노말"
   },
   {
    "name": "슬픈 봉제인형",
    "img": "assets/gifts/02466465-c665-43ae-bdd9-d0862bc2130d.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 29,
  "title": "덮칠 파도 1",
  "result": {
   "name": "덮칠 파도",
   "img": "assets/gifts/f62da041-a7f8-4cc3-90d6-d70b535d3eb7.webp",
   "grade": "하드"
  },
  "ingredients": [
   {
    "name": "가시밭길",
    "img": "assets/gifts/b7348ffa-e90a-4580-8e4b-22196655bc70.webp",
    "grade": "노말"
   },
   {
    "name": "머나먼 별",
    "img": "assets/gifts/8dedb45a-6f2e-4e2a-8ad9-1aa7a027ab10.webp",
    "grade": "노말"
   },
   {
    "name": "서지 글로브",
    "img": "assets/gifts/69c295bd-a6b4-499d-a69a-12773325784e.webp",
    "grade": "하드"
   }
  ]
 },
 {
  "id": 30,
  "title": "덮칠 파도 2",
  "result": {
   "name": "덮칠 파도",
   "img": "assets/gifts/f62da041-a7f8-4cc3-90d6-d70b535d3eb7.webp",
   "grade": "하드"
  },
  "ingredients": [
   {
    "name": "가시밭길",
    "img": "assets/gifts/b7348ffa-e90a-4580-8e4b-22196655bc70.webp",
    "grade": "노말"
   },
   {
    "name": "머나먼 별",
    "img": "assets/gifts/8dedb45a-6f2e-4e2a-8ad9-1aa7a027ab10.webp",
    "grade": "노말"
   },
   {
    "name": "칸타빌레",
    "img": "assets/gifts/aff875d6-5830-4ee5-9897-643c65caf5b0.webp",
    "grade": "하드"
   },
   {
    "name": "빛바랜 외투",
    "img": "assets/gifts/7d56be5b-9d8a-4f1c-a43d-2a4256bc1ff9.webp",
    "grade": "하드"
   }
  ]
 },
 {
  "id": 29,
  "title": "덮칠 파도 1",
  "result": {
   "name": "덮칠 파도",
   "img": "assets/gifts/f62da041-a7f8-4cc3-90d6-d70b535d3eb7.webp",
   "grade": "하드"
  },
  "ingredients": [
   {
    "name": "가시밭길",
    "img": "assets/gifts/b7348ffa-e90a-4580-8e4b-22196655bc70.webp",
    "grade": "노말"
   },
   {
    "name": "머나먼 별",
    "img": "assets/gifts/8dedb45a-6f2e-4e2a-8ad9-1aa7a027ab10.webp",
    "grade": "노말"
   },
   {
    "name": "서지 글로브",
    "img": "assets/gifts/69c295bd-a6b4-499d-a69a-12773325784e.webp",
    "grade": "하드"
   }
  ]
 },
 {
  "id": 61,
  "title": "데스페라도",
  "result": {
   "name": "데스페라도",
   "img": "assets/gifts/91e639ab-c9fe-4aca-aa14-b20ab87d93da.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "노이즈 섞인 무전기",
    "img": "assets/gifts/87f90650-3875-4793-99b2-f6aee1ba7ba9.webp",
    "grade": "노말"
   },
   {
    "name": "부리 모양 목걸이",
    "img": "assets/gifts/95233f40-35f2-47a8-bf11-17b38a47eb88.webp",
    "grade": "노말"
   },
   {
    "name": "찢어진 밴돌리어",
    "img": "assets/gifts/eb5be174-259c-4287-8d83-fd4f12c67014.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 59,
  "title": "모든 악의 끝",
  "result": {
   "name": "모든 악의 끝",
   "img": "assets/gifts/a54db329-7c43-4a4c-a980-8ac4377392b1.webp",
   "grade": "하드"
  },
  "ingredients": [
   {
    "name": "마을을 지킬 작살",
    "img": "assets/gifts/afaf2b52-ba2e-4027-8eee-09db1f535296.webp",
    "grade": "하드"
   },
   {
    "name": "고래의 심장",
    "img": "assets/gifts/f7fcaf67-6a4e-4dd8-a004-e0dda91c14ca.webp",
    "grade": "하드"
   }
  ]
 },
 {
  "id": 12,
  "title": "무진팔방종",
  "result": {
   "name": "무진팔방종",
   "img": "assets/gifts/34d4e41c-e0a9-46f9-8143-a9b38cc73c43.webp",
   "grade": "하드"
  },
  "ingredients": [
   {
    "name": "극독성 외피",
    "img": "assets/gifts/3439ceb6-b370-4ce7-934b-2e359eda8b67.webp",
    "grade": "노말"
   },
   {
    "name": "톱니바퀴 태엽",
    "img": "assets/gifts/9f0f126b-5235-4ed9-ab4e-992bc29aa683.webp",
    "grade": "노말"
   },
   {
    "name": "진원점",
    "img": "assets/gifts/9f9f849d-5539-424a-a47a-5440904e07df.webp",
    "grade": "하드"
   }
  ]
 },
 {
  "id": 18,
  "title": "무진팔방종",
  "result": {
   "name": "무진팔방종",
   "img": "assets/gifts/34d4e41c-e0a9-46f9-8143-a9b38cc73c43.webp",
   "grade": "하드"
  },
  "ingredients": [
   {
    "name": "극독성 외피",
    "img": "assets/gifts/3439ceb6-b370-4ce7-934b-2e359eda8b67.webp",
    "grade": "노말"
   },
   {
    "name": "톱니바퀴 태엽",
    "img": "assets/gifts/9f0f126b-5235-4ed9-ab4e-992bc29aa683.webp",
    "grade": "노말"
   },
   {
    "name": "보석 진동자",
    "img": "assets/gifts/aba369b3-07e2-4a49-9124-1a86a330d7ff.webp",
    "grade": "하드"
   },
   {
    "name": "흔들리는 술통",
    "img": "assets/gifts/ca05e6fc-8fcf-4d39-b9c3-67002ed45447.webp",
    "grade": "하드"
   }
  ]
 },
 {
  "id": 58,
  "title": "미니어처 대관람차",
  "result": {
   "name": "미니어처 대관람차",
   "img": "assets/gifts/8c748732-376c-4512-bab9-82ba15d33d9a.webp",
   "grade": "하드"
  },
  "ingredients": [
   {
    "name": "덧붙인 반창고",
    "img": "assets/gifts/69840a79-d17f-496d-b1a2-3eae2e0a8bf1.webp",
    "grade": "노말"
   },
   {
    "name": "전혈 플라스크",
    "img": "assets/gifts/4a08e279-14e1-4845-8656-9fb471c717ac.webp",
    "grade": "노말"
   },
   {
    "name": "퍼레이드의 가면",
    "img": "assets/gifts/0c0762a5-caac-43dd-bd11-0692232a389f.webp",
    "grade": "하드"
   }
  ]
 },
 {
  "id": 34,
  "title": "복주머니 1",
  "result": {
   "name": "복주머니",
   "img": "assets/gifts/ad213fc3-6186-42ca-aedb-05385e85a45e.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "네잎클로버",
    "img": "assets/gifts/39f1bfd7-e23e-4e7b-ab1e-6245a6bff526.webp",
    "grade": "노말"
   },
   {
    "name": "장식된 편자",
    "img": "assets/gifts/57dc4aaa-6770-42f4-b42d-c0f9c167ae1c.webp",
    "grade": "노말"
   },
   {
    "name": "추억",
    "img": "assets/gifts/afa46b01-b38a-4fc5-b65e-cea11998ae70.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 35,
  "title": "복주머니 2",
  "result": {
   "name": "복주머니",
   "img": "assets/gifts/ad213fc3-6186-42ca-aedb-05385e85a45e.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "네잎클로버",
    "img": "assets/gifts/39f1bfd7-e23e-4e7b-ab1e-6245a6bff526.webp",
    "grade": "노말"
   },
   {
    "name": "장식된 편자",
    "img": "assets/gifts/57dc4aaa-6770-42f4-b42d-c0f9c167ae1c.webp",
    "grade": "노말"
   },
   {
    "name": "어느 날의 기억",
    "img": "assets/gifts/f2298a27-bb5f-49ca-a901-501f13439f4d.webp",
    "grade": "노말"
   },
   {
    "name": "추억의 펜던트",
    "img": "assets/gifts/9baea054-913b-4483-b3fb-6a07bc3268e4.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 34,
  "title": "복주머니 1",
  "result": {
   "name": "복주머니",
   "img": "assets/gifts/ad213fc3-6186-42ca-aedb-05385e85a45e.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "네잎클로버",
    "img": "assets/gifts/39f1bfd7-e23e-4e7b-ab1e-6245a6bff526.webp",
    "grade": "노말"
   },
   {
    "name": "장식된 편자",
    "img": "assets/gifts/57dc4aaa-6770-42f4-b42d-c0f9c167ae1c.webp",
    "grade": "노말"
   },
   {
    "name": "추억",
    "img": "assets/gifts/afa46b01-b38a-4fc5-b65e-cea11998ae70.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 48,
  "title": "부동",
  "result": {
   "name": "부동",
   "img": "assets/gifts/3cdd7b00-ff11-47d9-8f72-72b90aea81bc.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "부서진 칼날",
    "img": "assets/gifts/cf1ee339-260a-43af-bb98-d5cf88555490.webp",
    "grade": "노말"
   },
   {
    "name": "녹슨 칼자루",
    "img": "assets/gifts/d808ddcf-f983-4044-9519-bf88baacc3fe.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 27,
  "title": "부치지 못한 편지",
  "result": {
   "name": "부치지 못한 편지",
   "img": "assets/gifts/4a8718ad-b10d-4d08-a903-ce5bb3760e58.webp",
   "grade": "하드"
  },
  "ingredients": [
   {
    "name": "해진 우산",
    "img": "assets/gifts/64197c6e-6bbe-4c3f-b8b2-527a0e674457.webp",
    "grade": "노말"
   },
   {
    "name": "깨진 안경",
    "img": "assets/gifts/98a2642b-45b5-44ee-84a4-931d422a4697.webp",
    "grade": "하드"
   }
  ]
 },
 {
  "id": 60,
  "title": "분홍빛 꽃잎다발",
  "result": {
   "name": "분홍빛 꽃잎다발",
   "img": "assets/gifts/491fdc26-841f-40f1-8134-3e944165162b.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "축복이었던",
    "img": "assets/gifts/156aa990-6576-470b-a6a2-763cd113eeaf.webp",
    "grade": "노말"
   },
   {
    "name": "잔향",
    "img": "assets/gifts/e53f7dea-586f-43db-868b-8f6efeae1e75.webp",
    "grade": "노말"
   },
   {
    "name": "분홍 꽃잎",
    "img": "assets/gifts/379ce117-0a2f-4b30-8884-7cbe743ca064.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 63,
  "title": "생강꽃, 안경 그리고 전해진 편지",
  "result": {
   "name": "생강꽃, 안경 그리고 전해진 편지",
   "img": "assets/gifts/e16b956a-d72c-4e09-acff-beae054deee9.webp",
   "grade": "하드"
  },
  "ingredients": [
   {
    "name": "생강꽃 가지",
    "img": "assets/gifts/46b65513-7526-4e76-873e-2b79692e6b5b.webp",
    "grade": "노말"
   },
   {
    "name": "부치지 못한 편지",
    "img": "assets/gifts/4a8718ad-b10d-4d08-a903-ce5bb3760e58.webp",
    "grade": "하드"
   }
  ]
 },
 {
  "id": 63,
  "title": "생강꽃, 안경 그리고 전해진 편지",
  "result": {
   "name": "생강꽃, 안경 그리고 전해진 편지",
   "img": "assets/gifts/e16b956a-d72c-4e09-acff-beae054deee9.webp",
   "grade": "하드"
  },
  "ingredients": [
   {
    "name": "생강꽃 가지",
    "img": "assets/gifts/46b65513-7526-4e76-873e-2b79692e6b5b.webp",
    "grade": "노말"
   },
   {
    "name": "부치지 못한 편지",
    "img": "assets/gifts/4a8718ad-b10d-4d08-a903-ce5bb3760e58.webp",
    "grade": "하드"
   }
  ]
 },
 {
  "id": 32,
  "title": "서릿발 발자국",
  "result": {
   "name": "서릿발 발자국",
   "img": "assets/gifts/3326acc4-83e4-43b3-8407-6fc66c2834b1.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "귀신 들린 신발",
    "img": "assets/gifts/511f700f-8446-4df1-a4cd-20d279cdfcc1.webp",
    "grade": "노말"
   },
   {
    "name": "얼어붙은 아우성",
    "img": "assets/gifts/b670cdf2-f332-4dac-a266-230c93be41e8.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 28,
  "title": "서지 글로브",
  "result": {
   "name": "서지 글로브",
   "img": "assets/gifts/69c295bd-a6b4-499d-a69a-12773325784e.webp",
   "grade": "하드"
  },
  "ingredients": [
   {
    "name": "칸타빌레",
    "img": "assets/gifts/aff875d6-5830-4ee5-9897-643c65caf5b0.webp",
    "grade": "하드"
   },
   {
    "name": "빛바랜 외투",
    "img": "assets/gifts/7d56be5b-9d8a-4f1c-a43d-2a4256bc1ff9.webp",
    "grade": "하드"
   }
  ]
 },
 {
  "id": 52,
  "title": "선물",
  "result": {
   "name": "선물",
   "img": "assets/gifts/f956b4e5-b63f-4d23-8432-f9d14f0e14c6.webp",
   "grade": "하드"
  },
  "ingredients": [
   {
    "name": "포장용 끈",
    "img": "assets/gifts/7078e853-e55b-49d3-a99c-9663274885c7.webp",
    "grade": "하드"
   },
   {
    "name": "포장용 상자",
    "img": "assets/gifts/80ce7356-c688-490c-9c24-f8b944d44d2a.webp",
    "grade": "하드"
   }
  ]
 },
 {
  "id": 19,
  "title": "손거울",
  "result": {
   "name": "손거울",
   "img": "assets/gifts/c4db322d-9517-4af4-976b-7d723cfbdc51.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "거울 촉각 공감각",
    "img": "assets/gifts/33957124-ef01-4c86-84ad-605ba06d0871.webp",
    "grade": "노말"
   },
   {
    "name": "치프 버틀러의 비급서",
    "img": "assets/gifts/194e82ba-5193-40df-8862-9c6f9d9c0ae1.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 57,
  "title": "수작",
  "result": {
   "name": "수작",
   "img": "assets/gifts/21f36e6d-73e9-4490-89b4-43ae07030fb0.webp",
   "grade": "하드"
  },
  "ingredients": [
   {
    "name": "귀로",
    "img": "assets/gifts/e5be813f-0f6e-467b-ac80-e8f5c261cc7c.webp",
    "grade": "노말"
   },
   {
    "name": "새하얀 캔버스",
    "img": "assets/gifts/4f40d529-d720-4f27-aedd-51bfa9e84bb9.webp",
    "grade": "하드"
   },
   {
    "name": "범작",
    "img": "assets/gifts/5e2dc81c-0cf5-4e4b-bfb6-6d1ca3cf8212.webp",
    "grade": "하드"
   }
  ]
 },
 {
  "id": 67,
  "title": "수작 : 박제된 야성",
  "result": {
   "name": "수작 : 박제된 야성",
   "img": "assets/gifts/b211ddeb-9e8c-4c24-98b6-b0bc669ab169.png",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "작품 : 야성",
    "img": "assets/gifts/7db1acb4-d9d5-4157-8ca3-9d8f2e612ae8.png",
    "grade": "노말"
   },
   {
    "name": "모든 것의 본능",
    "img": "assets/gifts/ce7f4ae4-739a-4273-aa55-0a608015a823.png",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 68,
  "title": "수작 : 진화하는 약동",
  "result": {
   "name": "수작 : 진화하는 약동",
   "img": "assets/gifts/f0f29386-51df-4c27-a61c-196b8196677b.png",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "작품 : 약동",
    "img": "assets/gifts/5888c326-1950-4a7e-b715-c2b98a5df38f.png",
    "grade": "노말"
   },
   {
    "name": "모든 것의 뼈대",
    "img": "assets/gifts/1e4f96f2-e57e-43ea-9e6c-56f51fe0dfe0.png",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 70,
  "title": "암약",
  "result": {
   "name": "암약",
   "img": "assets/gifts/dd6501d6-9ba5-489d-adff-a1d91c72ff42.webp",
   "grade": "하드"
  },
  "ingredients": [
   {
    "name": "묘각",
    "img": "assets/gifts/252dd79f-26dc-4df1-882c-45d0fbf5acf8.webp",
    "grade": "노말"
   },
   {
    "name": "흑수환 - 묘󠄈󠄆󠄉󠄆󠄀󠄄󠄄󠄀󠄁",
    "img": "assets/gifts/5b1fec89-aa6c-45cc-ad50-0e90439aee87.webp",
    "grade": "하드"
   },
   {
    "name": "그림자 삿갓",
    "img": "assets/gifts/508bbb2d-1a6c-4489-97b0-4649b37ab6cd.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 38,
  "title": "앞을 비추는 가스등",
  "result": {
   "name": "앞을 비추는 가스등",
   "img": "assets/gifts/54dfd21f-b9e6-4b0c-b208-e0f135dbecbd.webp",
   "grade": "하드"
  },
  "ingredients": [
   {
    "name": "네뷸라이저",
    "img": "assets/gifts/5e7fec82-dbf9-4e31-a1f8-ffb48bc9358a.webp",
    "grade": "노말"
   },
   {
    "name": "작살 의족",
    "img": "assets/gifts/fbc5c4e3-8588-432e-98ab-d6a3816ad2c3.webp",
    "grade": "하드"
   }
  ]
 },
 {
  "id": 13,
  "title": "연성진동",
  "result": {
   "name": "연성진동",
   "img": "assets/gifts/a3cda8e6-bea1-441f-ad2a-e422147a3755.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "진실의 종",
    "img": "assets/gifts/313d2017-e7f3-4399-b665-f3acfedb1691.webp",
    "grade": "노말"
   },
   {
    "name": "감합된 톱니바퀴",
    "img": "assets/gifts/797b8bb9-779e-44d7-a0a2-e91070b532fd.webp",
    "grade": "노말"
   },
   {
    "name": "닉시 다이버전스",
    "img": "assets/gifts/725bd966-90fd-451f-b627-55edb8b3aee1.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 44,
  "title": "영구동력 서보모터",
  "result": {
   "name": "영구동력 서보모터",
   "img": "assets/gifts/cd111c54-7148-4d0e-aa32-656c3a62f97d.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "심장 리액트 모듈",
    "img": "assets/gifts/b00a1686-3062-4734-9ac8-adf92a701d8f.webp",
    "grade": "노말"
   },
   {
    "name": "의체관절 서보모터",
    "img": "assets/gifts/88692af5-2698-4de6-8b6c-4849d6d8999f.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 51,
  "title": "영속하는 인연 사슬",
  "result": {
   "name": "영속하는 인연 사슬",
   "img": "assets/gifts/b1daa63d-2f43-40f2-bf05-500bb28aed77.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "강화 문신 - 중지",
    "img": "assets/gifts/ee9d7f4a-6969-4556-ae48-fc03b89a19ba.webp",
    "grade": "노말"
   },
   {
    "name": "의리 사슬",
    "img": "assets/gifts/87a75ea9-23a1-4f11-9e78-c5082382f063.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 9,
  "title": "완전함",
  "result": {
   "name": "완전함",
   "img": "assets/gifts/83b46d79-13be-41f9-9c42-8f028df25786.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "못과 망치의 책",
    "img": "assets/gifts/35540dab-2d02-4086-979b-570e95ce07a1.webp",
    "grade": "노말"
   },
   {
    "name": "불결함",
    "img": "assets/gifts/c66d62db-bd6c-4688-9206-7502c181abfe.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 2,
  "title": "요리 비법 전서",
  "result": {
   "name": "요리 비법 전서",
   "img": "assets/gifts/8c4ac9bc-16d3-4d55-a3df-103adcc20fd6.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "융해된 파라핀",
    "img": "assets/gifts/95bc47bd-990b-4464-b53b-754616806663.webp",
    "grade": "노말"
   },
   {
    "name": "만년 동안 끓는 솥",
    "img": "assets/gifts/42170783-48a1-4a1a-89d9-f07c4400cffa.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 25,
  "title": "이전칠자",
  "result": {
   "name": "이전칠자",
   "img": "assets/gifts/d2f3aa60-5b0d-49d7-9e51-7fef8d40c150.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "괴문자 부적",
    "img": "assets/gifts/0cf5000d-1cf7-4184-9629-307b07af24b6.webp",
    "grade": "노말"
   },
   {
    "name": "새겨넣어진 괴문자",
    "img": "assets/gifts/7820455f-1c57-4818-814b-d31cb9799f67.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 39,
  "title": "인슐레이터",
  "result": {
   "name": "인슐레이터",
   "img": "assets/gifts/24f94e74-d820-46e9-9178-de6aff49baae.webp",
   "grade": "하드"
  },
  "ingredients": [
   {
    "name": "무정전 전원장치",
    "img": "assets/gifts/ca55e89a-5a96-49da-a92b-3219c5aadbce.webp",
    "grade": "노말"
   },
   {
    "name": "미니어처 전봇대",
    "img": "assets/gifts/3a044cbd-d883-4d92-9a88-8eae0d6dbac3.webp",
    "grade": "하드"
   }
  ]
 },
 {
  "id": 45,
  "title": "자율 작동식 관절",
  "result": {
   "name": "자율 작동식 관절",
   "img": "assets/gifts/8ee3094b-0d22-4e91-bb76-6e6f961887f7.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "생체 발전형 배터리",
    "img": "assets/gifts/8c205654-2082-470c-801e-4ba77e1f065d.webp",
    "grade": "노말"
   },
   {
    "name": "의체관절 서보모터",
    "img": "assets/gifts/88692af5-2698-4de6-8b6c-4849d6d8999f.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 69,
  "title": "작. 형. 등장",
  "result": {
   "name": "작. 형. 등장󠄈󠄆󠄉󠄆󠄀󠄄󠄄󠄀󠄁",
   "img": "assets/gifts/e16ee9ca-ee09-4b07-9ff9-acf782743ca3.webp",
   "grade": "하드"
  },
  "ingredients": [
   {
    "name": "안식처",
    "img": "assets/gifts/98d6f654-8a2a-40ec-b57d-bedc0bf12e99.webp",
    "grade": "노말"
   },
   {
    "name": "혈향도래",
    "img": "assets/gifts/ae4dd197-9c9c-4986-b1f8-69decae3c40a.webp",
    "grade": "노말"
   },
   {
    "name": "등장 전용 붐박스",
    "img": "assets/gifts/84a23a02-bcf5-4eea-b785-3ff7c9e39d8d.webp",
    "grade": "하드"
   }
  ]
 },
 {
  "id": 49,
  "title": "장관",
  "result": {
   "name": "장관",
   "img": "assets/gifts/38a74cfa-7078-4de7-a73c-f07834308e8f.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "조각난 칼날",
    "img": "assets/gifts/3b380756-3b25-4825-b8d8-9cab6959715a.webp",
    "grade": "노말"
   },
   {
    "name": "녹슨 칼자루",
    "img": "assets/gifts/d808ddcf-f983-4044-9519-bf88baacc3fe.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 10,
  "title": "절경",
  "result": {
   "name": "절경",
   "img": "assets/gifts/74089b95-838d-4900-aa8b-2101ad941bb9.webp",
   "grade": "하드"
  },
  "ingredients": [
   {
    "name": "조각난 칼날",
    "img": "assets/gifts/3b380756-3b25-4825-b8d8-9cab6959715a.webp",
    "grade": "노말"
   },
   {
    "name": "낡은 칼자루",
    "img": "assets/gifts/ac26b7f5-f3f2-4d47-b9b9-86a4c35db21b.webp",
    "grade": "하드"
   }
  ]
 },
 {
  "id": 26,
  "title": "절차탁마",
  "result": {
   "name": "절차탁마(切磋琢磨)",
   "img": "assets/gifts/d28b6247-9b02-4855-ae00-6a3e6bc60b74.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "덕목 - 지[智]",
    "img": "assets/gifts/a2ef0392-252e-4ee5-9701-9dc86096a66b.webp",
    "grade": "노말"
   },
   {
    "name": "덕목 - 용[勇]",
    "img": "assets/gifts/d50f626f-b840-43b4-918d-e434c6562cd7.webp",
    "grade": "노말"
   },
   {
    "name": "덕목 - 인[仁]",
    "img": "assets/gifts/689d6259-70f4-4e3a-bfd8-f9c274254ef4.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 42,
  "title": "제 1종 영구기관",
  "result": {
   "name": "제 1종 영구기관",
   "img": "assets/gifts/52002ef1-8bcf-44de-aaa5-52987d26cd71.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "물리 간섭 보호장",
    "img": "assets/gifts/feb8ae60-447a-48fc-bdb3-a684c3857a67.webp",
    "grade": "노말"
   },
   {
    "name": "1B 타입 팔각 볼트",
    "img": "assets/gifts/16d4d62a-4cf4-4409-8703-6c017e52b7a3.webp",
    "grade": "노말"
   },
   {
    "name": "손목 보호대",
    "img": "assets/gifts/62b63fca-ca1b-4ac1-98c0-8060e0b1410f.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 40,
  "title": "제 5종 영구기관 1",
  "result": {
   "name": "제 5종 영구기관",
   "img": "assets/gifts/d76191d9-cd09-4528-9d37-c964765ac455.webp",
   "grade": "하드"
  },
  "ingredients": [
   {
    "name": "피뢰침",
    "img": "assets/gifts/4275c5ed-9537-4fa4-985c-b847ae8fc460.webp",
    "grade": "노말"
   },
   {
    "name": "이력서",
    "img": "assets/gifts/c50fa7e7-60f4-4bdf-8394-ddd162de1379.webp",
    "grade": "노말"
   },
   {
    "name": "인슐레이터",
    "img": "assets/gifts/24f94e74-d820-46e9-9178-de6aff49baae.webp",
    "grade": "하드"
   }
  ]
 },
 {
  "id": 40,
  "title": "제 5종 영구기관 1",
  "result": {
   "name": "제 5종 영구기관",
   "img": "assets/gifts/d76191d9-cd09-4528-9d37-c964765ac455.webp",
   "grade": "하드"
  },
  "ingredients": [
   {
    "name": "피뢰침",
    "img": "assets/gifts/4275c5ed-9537-4fa4-985c-b847ae8fc460.webp",
    "grade": "노말"
   },
   {
    "name": "이력서",
    "img": "assets/gifts/c50fa7e7-60f4-4bdf-8394-ddd162de1379.webp",
    "grade": "노말"
   },
   {
    "name": "인슐레이터",
    "img": "assets/gifts/24f94e74-d820-46e9-9178-de6aff49baae.webp",
    "grade": "하드"
   }
  ]
 },
 {
  "id": 41,
  "title": "제 5종 영구기관 2",
  "result": {
   "name": "제 5종 영구기관",
   "img": "assets/gifts/d76191d9-cd09-4528-9d37-c964765ac455.webp",
   "grade": "하드"
  },
  "ingredients": [
   {
    "name": "이력서",
    "img": "assets/gifts/c50fa7e7-60f4-4bdf-8394-ddd162de1379.webp",
    "grade": "노말"
   },
   {
    "name": "피뢰침",
    "img": "assets/gifts/4275c5ed-9537-4fa4-985c-b847ae8fc460.webp",
    "grade": "노말"
   },
   {
    "name": "무정전 전원장치",
    "img": "assets/gifts/ca55e89a-5a96-49da-a92b-3219c5aadbce.webp",
    "grade": "노말"
   },
   {
    "name": "미니어처 전봇대",
    "img": "assets/gifts/3a044cbd-d883-4d92-9a88-8eae0d6dbac3.webp",
    "grade": "하드"
   }
  ]
 },
 {
  "id": 56,
  "title": "제식 복장 - 리우 협회",
  "result": {
   "name": "제식 복장 - 리우 협회",
   "img": "assets/gifts/88180cc1-6868-4135-8397-97697b8a4f99.webp",
   "grade": "하드"
  },
  "ingredients": [
   {
    "name": "편광",
    "img": "assets/gifts/4dbd9b27-9950-4d2d-87e7-7c8bf58c3613.webp",
    "grade": "노말"
   },
   {
    "name": "가장 낮은 별",
    "img": "assets/gifts/0320cd90-ea43-48ce-872b-c398b7eddf0a.webp",
    "grade": "노말"
   },
   {
    "name": "붉은색 넥타이",
    "img": "assets/gifts/c0b298e9-b14d-4037-87b8-91c461d985d4.webp",
    "grade": "하드"
   }
  ]
 },
 {
  "id": 62,
  "title": "조그맣고 근사한 바이올린",
  "result": {
   "name": "조그맣고 근사한 바이올린",
   "img": "assets/gifts/058f476e-ba82-411f-998e-1dbf096cd0ea.webp",
   "grade": "하드"
  },
  "ingredients": [
   {
    "name": "기름때 찌든 스패너",
    "img": "assets/gifts/882e8561-87ff-40fe-8aa6-8b2ddb9b1222.webp",
    "grade": "노말"
   },
   {
    "name": "반짝이는 폐품",
    "img": "assets/gifts/d35c37e3-3c9b-4f5b-98df-290f496ef476.webp",
    "grade": "노말"
   },
   {
    "name": "부서진 바이올린",
    "img": "assets/gifts/988bd299-748e-40e6-94ff-736382b967d9.webp",
    "grade": "하드"
   }
  ]
 },
 {
  "id": 4,
  "title": "진혼 2",
  "result": {
   "name": "진혼",
   "img": "assets/gifts/f42f32d3-3644-4e05-80fc-d89237d9f0d7.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "재에서 재로",
    "img": "assets/gifts/16cdd50e-44f2-4431-990b-96c5e9ee3444.webp",
    "grade": "노말"
   },
   {
    "name": "먼지에서 먼지로",
    "img": "assets/gifts/88cb3333-e8fc-453b-ad0f-f273c4f9a5f3.webp",
    "grade": "노말"
   },
   {
    "name": "요리 비법 전서",
    "img": "assets/gifts/8c4ac9bc-16d3-4d55-a3df-103adcc20fd6.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 3,
  "title": "진혼 1",
  "result": {
   "name": "진혼",
   "img": "assets/gifts/f42f32d3-3644-4e05-80fc-d89237d9f0d7.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "재에서 재로",
    "img": "assets/gifts/16cdd50e-44f2-4431-990b-96c5e9ee3444.webp",
    "grade": "노말"
   },
   {
    "name": "먼지에서 먼지로",
    "img": "assets/gifts/88cb3333-e8fc-453b-ad0f-f273c4f9a5f3.webp",
    "grade": "노말"
   },
   {
    "name": "융해된 파라핀",
    "img": "assets/gifts/95bc47bd-990b-4464-b53b-754616806663.webp",
    "grade": "노말"
   },
   {
    "name": "만년 동안 끓는 솥",
    "img": "assets/gifts/42170783-48a1-4a1a-89d9-f07c4400cffa.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 4,
  "title": "진혼 2",
  "result": {
   "name": "진혼",
   "img": "assets/gifts/f42f32d3-3644-4e05-80fc-d89237d9f0d7.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "재에서 재로",
    "img": "assets/gifts/16cdd50e-44f2-4431-990b-96c5e9ee3444.webp",
    "grade": "노말"
   },
   {
    "name": "먼지에서 먼지로",
    "img": "assets/gifts/88cb3333-e8fc-453b-ad0f-f273c4f9a5f3.webp",
    "grade": "노말"
   },
   {
    "name": "요리 비법 전서",
    "img": "assets/gifts/8c4ac9bc-16d3-4d55-a3df-103adcc20fd6.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 33,
  "title": "추억",
  "result": {
   "name": "추억",
   "img": "assets/gifts/afa46b01-b38a-4fc5-b65e-cea11998ae70.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "어느 날의 기억",
    "img": "assets/gifts/f2298a27-bb5f-49ca-a901-501f13439f4d.webp",
    "grade": "노말"
   },
   {
    "name": "추억의 펜던트",
    "img": "assets/gifts/9baea054-913b-4483-b3fb-6a07bc3268e4.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 8,
  "title": "출혈성 쇼크",
  "result": {
   "name": "출혈성 쇼크",
   "img": "assets/gifts/d84f09dc-3f49-484f-ad09-4023c5e3a948.webp",
   "grade": "하드"
  },
  "ingredients": [
   {
    "name": "늘어붙은 쇠말뚝",
    "img": "assets/gifts/c55e5a79-88db-4b04-bad8-adc176bfea30.webp",
    "grade": "노말"
   },
   {
    "name": "녹슨 커터 나이프",
    "img": "assets/gifts/014eeb45-629e-4821-8932-b4c69b06658e.webp",
    "grade": "노말"
   },
   {
    "name": "찢어진 피주머니",
    "img": "assets/gifts/91fbacb3-0615-4da9-a8e7-c06bbb588546.webp",
    "grade": "하드"
   }
  ]
 },
 {
  "id": 5,
  "title": "치성",
  "result": {
   "name": "치성",
   "img": "assets/gifts/4dd49618-2df6-448c-b2fb-55b8c052eae9.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "억류된 찬송",
    "img": "assets/gifts/9874f3af-a7de-4427-9f31-86cf17997e0e.webp",
    "grade": "노말"
   },
   {
    "name": "밀라르카",
    "img": "assets/gifts/21638bdb-c6f5-4c30-aaea-76efa1477b1d.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 36,
  "title": "캐스크 스피리츠",
  "result": {
   "name": "캐스크 스피리츠",
   "img": "assets/gifts/29af31ce-4ff7-4744-8768-91d6ae12766f.webp",
   "grade": "하드"
  },
  "ingredients": [
   {
    "name": "데블스 셰어",
    "img": "assets/gifts/f6dc229f-79c7-4f37-9f0e-d359a17b8961.webp",
    "grade": "노말"
   },
   {
    "name": "엔젤스 컷",
    "img": "assets/gifts/9b247582-77fc-4850-977d-9e84adb96e19.webp",
    "grade": "하드"
   },
   {
    "name": "엔도르핀 키트",
    "img": "assets/gifts/d50b46b9-1ae4-436d-a83e-9fb8bf6b4834.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 50,
  "title": "탁마",
  "result": {
   "name": "탁마",
   "img": "assets/gifts/1a8dbcbd-7ccb-4451-9fc0-62ae5024a833.webp",
   "grade": "하드"
  },
  "ingredients": [
   {
    "name": "부서진 칼날",
    "img": "assets/gifts/cf1ee339-260a-43af-bb98-d5cf88555490.webp",
    "grade": "노말"
   },
   {
    "name": "낡은 칼자루",
    "img": "assets/gifts/ac26b7f5-f3f2-4d47-b9b9-86a4c35db21b.webp",
    "grade": "하드"
   }
  ]
 },
 {
  "id": 22,
  "title": "파탄 1",
  "result": {
   "name": "파탄",
   "img": "assets/gifts/4bf4ff02-9cd5-4cf5-b015-36ad0f2c02b4.webp",
   "grade": "하드"
  },
  "ingredients": [
   {
    "name": "부서진 리볼버",
    "img": "assets/gifts/de3998f6-8859-456f-befe-9ad30c4b01ff.webp",
    "grade": "노말"
   },
   {
    "name": "벼락가지",
    "img": "assets/gifts/affd42d1-ec41-4065-9322-bcbc7d3f80d3.webp",
    "grade": "노말"
   },
   {
    "name": "기괴한 석상",
    "img": "assets/gifts/c9b2b0cd-665e-48bc-b066-6764843a1614.webp",
    "grade": "하드"
   }
  ]
 },
 {
  "id": 23,
  "title": "파탄 2",
  "result": {
   "name": "파탄",
   "img": "assets/gifts/4bf4ff02-9cd5-4cf5-b015-36ad0f2c02b4.webp",
   "grade": "하드"
  },
  "ingredients": [
   {
    "name": "부서진 리볼버",
    "img": "assets/gifts/de3998f6-8859-456f-befe-9ad30c4b01ff.webp",
    "grade": "노말"
   },
   {
    "name": "벼락가지",
    "img": "assets/gifts/affd42d1-ec41-4065-9322-bcbc7d3f80d3.webp",
    "grade": "노말"
   },
   {
    "name": "뼈 말뚝",
    "img": "assets/gifts/56dcaa88-6c1e-40ef-993a-5bdc3e73e47e.webp",
    "grade": "노말"
   },
   {
    "name": "종말의 파편",
    "img": "assets/gifts/28ba93ef-e84e-46e5-a31a-9b6885c1813c.webp",
    "grade": "하드"
   }
  ]
 },
 {
  "id": 22,
  "title": "파탄 1",
  "result": {
   "name": "파탄",
   "img": "assets/gifts/4bf4ff02-9cd5-4cf5-b015-36ad0f2c02b4.webp",
   "grade": "하드"
  },
  "ingredients": [
   {
    "name": "부서진 리볼버",
    "img": "assets/gifts/de3998f6-8859-456f-befe-9ad30c4b01ff.webp",
    "grade": "노말"
   },
   {
    "name": "벼락가지",
    "img": "assets/gifts/affd42d1-ec41-4065-9322-bcbc7d3f80d3.webp",
    "grade": "노말"
   },
   {
    "name": "기괴한 석상",
    "img": "assets/gifts/c9b2b0cd-665e-48bc-b066-6764843a1614.webp",
    "grade": "하드"
   }
  ]
 },
 {
  "id": 6,
  "title": "피안개 1",
  "result": {
   "name": "피안개",
   "img": "assets/gifts/47de00fa-2a14-4d4f-b343-8e8e0a1a34ae.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "녹슨 입마개",
    "img": "assets/gifts/920bb06c-a354-450a-aca9-ccdca7388b9c.webp",
    "grade": "노말"
   },
   {
    "name": "연기와 철조망",
    "img": "assets/gifts/011b76a4-2523-4479-8f10-4da599358099.webp",
    "grade": "노말"
   },
   {
    "name": "억류된 찬송",
    "img": "assets/gifts/9874f3af-a7de-4427-9f31-86cf17997e0e.webp",
    "grade": "노말"
   },
   {
    "name": "밀라르카",
    "img": "assets/gifts/21638bdb-c6f5-4c30-aaea-76efa1477b1d.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 7,
  "title": "피안개 2",
  "result": {
   "name": "피안개",
   "img": "assets/gifts/47de00fa-2a14-4d4f-b343-8e8e0a1a34ae.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "녹슨 입마개",
    "img": "assets/gifts/920bb06c-a354-450a-aca9-ccdca7388b9c.webp",
    "grade": "노말"
   },
   {
    "name": "연기와 철조망",
    "img": "assets/gifts/011b76a4-2523-4479-8f10-4da599358099.webp",
    "grade": "노말"
   },
   {
    "name": "치성",
    "img": "assets/gifts/4dd49618-2df6-448c-b2fb-55b8c052eae9.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 7,
  "title": "피안개 2",
  "result": {
   "name": "피안개",
   "img": "assets/gifts/47de00fa-2a14-4d4f-b343-8e8e0a1a34ae.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "녹슨 입마개",
    "img": "assets/gifts/920bb06c-a354-450a-aca9-ccdca7388b9c.webp",
    "grade": "노말"
   },
   {
    "name": "연기와 철조망",
    "img": "assets/gifts/011b76a4-2523-4479-8f10-4da599358099.webp",
    "grade": "노말"
   },
   {
    "name": "치성",
    "img": "assets/gifts/4dd49618-2df6-448c-b2fb-55b8c052eae9.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 46,
  "title": "하츠 파워드 쥬얼",
  "result": {
   "name": "하츠 파워드 쥬얼",
   "img": "assets/gifts/d61c4653-8d6e-489a-9062-096933574663.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "심장 리액트 모듈",
    "img": "assets/gifts/b00a1686-3062-4734-9ac8-adf92a701d8f.webp",
    "grade": "노말"
   },
   {
    "name": "결정화된 혈액",
    "img": "assets/gifts/82976585-3fa0-480c-8483-3ddf8eb8f0eb.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 24,
  "title": "황홀경",
  "result": {
   "name": "황홀경",
   "img": "assets/gifts/8441be31-4520-4b29-9fe3-02a6673a66e8.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "근무용 통상 배터리",
    "img": "assets/gifts/a470b32e-cc09-4588-ae8c-589fc8c82bd4.webp",
    "grade": "노말"
   },
   {
    "name": "가시오랏줄",
    "img": "assets/gifts/fa03d2c4-aa81-4984-8667-3d23645df851.webp",
    "grade": "노말"
   },
   {
    "name": "부적 묶음",
    "img": "assets/gifts/c9e25a17-65aa-4453-ac65-04a891d1d24a.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 14,
  "title": "회중시계: 타입 E",
  "result": {
   "name": "회중시계: 타입 E",
   "img": "assets/gifts/3cffbf2a-8677-454d-9969-9ab3a4a3654f.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "은빛 시계 케이스",
    "img": "assets/gifts/c926b5b3-d3b7-465f-b9b8-7e87a6a5dfe5.webp",
    "grade": "노말"
   },
   {
    "name": "녹슨 시계침",
    "img": "assets/gifts/e5e0c9db-c205-4ff2-b9ab-fb23370f07c4.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 15,
  "title": "회중시계: 타입 L",
  "result": {
   "name": "회중시계: 타입 L",
   "img": "assets/gifts/b55411ee-39f9-4f6d-a491-8ec8ed92ede0.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "은빛 시계 케이스",
    "img": "assets/gifts/c926b5b3-d3b7-465f-b9b8-7e87a6a5dfe5.webp",
    "grade": "노말"
   },
   {
    "name": "에칭 시계침",
    "img": "assets/gifts/d8d856e2-bd84-40df-9f73-5bc89905cfac.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 16,
  "title": "회중시계: 타입 P",
  "result": {
   "name": "회중시계: 타입 P",
   "img": "assets/gifts/d9c3673e-89ec-47c6-84f6-2aeee2de8a37.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "빛바랜 시계 케이스",
    "img": "assets/gifts/a32ca788-a968-434a-a40b-539477a2bbbf.webp",
    "grade": "노말"
   },
   {
    "name": "녹슨 시계침",
    "img": "assets/gifts/e5e0c9db-c205-4ff2-b9ab-fb23370f07c4.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 11,
  "title": "회중시계: 타입 Y",
  "result": {
   "name": "회중시계: 타입 Y",
   "img": "assets/gifts/4af094ae-1cb2-4539-99ef-176bbac9ad95.webp",
   "grade": "노말"
  },
  "ingredients": [
   {
    "name": "빛바랜 시계 케이스",
    "img": "assets/gifts/a32ca788-a968-434a-a40b-539477a2bbbf.webp",
    "grade": "노말"
   },
   {
    "name": "에칭 시계침",
    "img": "assets/gifts/d8d856e2-bd84-40df-9f73-5bc89905cfac.webp",
    "grade": "노말"
   }
  ]
 },
 {
  "id": 1,
  "title": "훔쳐온 불꽃",
  "result": {
   "name": "훔쳐온 불꽃",
   "img": "assets/gifts/fbc2d5dd-8404-44e5-9807-cbc9a4436d92.webp",
   "grade": "하드"
  },
  "ingredients": [
   {
    "name": "타오르는 지성",
    "img": "assets/gifts/dff6944d-febf-486c-8a12-e0a353936331.webp",
    "grade": "노말"
   },
   {
    "name": "그을린 원반",
    "img": "assets/gifts/e6b84edb-fe4f-4925-9def-bceadf0b84d2.webp",
    "grade": "노말"
   },
   {
    "name": "만년 화롯불",
    "img": "assets/gifts/9b41fdfb-e194-44b0-8a7d-63df51316162.webp",
    "grade": "하드"
   }
  ]
 },
 {
  "id": 47,
  "title": "C형 정리 요원 장비 세트",
  "result": {
   "name": "C형 정리 요원 장비 세트",
   "img": "assets/gifts/6f318825-c248-4415-b901-2c611ea73925.webp",
   "grade": "하드"
  },
  "ingredients": [
   {
    "name": "W사 보급 모자",
    "img": "assets/gifts/053ae8fa-1f80-4a2b-8d06-56fed0c99dcb.webp",
    "grade": "하드"
   },
   {
    "name": "E식 차원 단검",
    "img": "assets/gifts/e03a6b56-e22b-41f5-9c0f-14dd3fa01a9a.webp",
    "grade": "노말"
   },
   {
    "name": "휴대용 역장 배터리",
    "img": "assets/gifts/ad9c8d5d-faf3-4565-abe3-40c97c9dbbd3.webp",
    "grade": "노말"
   }
  ]
 }
];
