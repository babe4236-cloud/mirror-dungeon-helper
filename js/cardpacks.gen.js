/* 자동 생성 — node scripts/scrape-haneuk.mjs 로 재생성. 직접 수정 금지.
   출처: 단테의 달의기억 (limbus.haneuk.info) — 카드팩 */
const CARDPACKS = [
 {
  "id": 106,
  "title": "LCB 정기검진 BokGak",
  "theme": "이벤트 테마",
  "desc": "",
  "img": "assets/packs/775aa021-4553-4165-9284-25b24208bf67.png",
  "floors": [
   4,
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "하드",
   "익스트림"
  ],
  "events": [
   {
    "title": "감정과 불꽃",
    "img": "assets/events/d6336ed0-cb51-4882-8e86-229b60cc73ec.webp",
    "choices": [
     {
      "text": "다른 사람과 착각한 것 같다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "우리가 그 표본이다.",
      "info": "분노 · 색욕 유리 판정 진행 시, 재점화 플러그 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떤 수감자가 나설까.",
      "info": "분노/색욕 유리 판정 10 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "글귀",
    "img": "assets/events/5362fe1f-9c9e-47f4-84b6-fa466d1af12d.webp",
    "choices": [
     {
      "text": "무시한다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "주변을 좀 더 둘러본다.",
      "info": "분노 · 우울 유리 판정 진행 시, 작전 승인 카드 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "주변을 찬찬히 살펴본다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "누구에게 수색을 맡길까.",
      "info": "분노/우울 유리 판정 11 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "글귀 이후",
    "img": "assets/events/f86b80b4-7b70-4e9c-a489-d8d4d23c0e64.webp",
    "choices": [
     {
      "text": "작전 승인 카드로 문을 연다.",
      "info": "선택 시, 누군가 놓쳐버린 사원증 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "억지로 문을 연다.",
      "info": "분노 · 질투 유리 판정 진행 시, 누군가 놓쳐버린 사원증 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "지나친다.",
      "info": "별도 효과 없음",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자가 나설까?",
      "info": "분노/질투 유리 판정 14 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "던전 입장 - LCB 정기검진",
    "img": "assets/events/e1764481-af88-4440-bada-5556bf68dfcf.webp",
    "choices": [
     {
      "text": "이글거리는 장갑을 가져간다.",
      "info": "선택 시, 점화 장갑 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "뾰족한 장식이 달린 전투화를 가져간다.",
      "info": "선택 시, 가시 전투화 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "청소용 스프레이를 가져간다.",
      "info": "선택 시, 환상 사냥 획득",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "복도 조사",
    "img": "assets/events/ee9f5d80-fce6-447f-8471-70c520bc6f8b.webp",
    "choices": [
     {
      "text": "조사를 승낙한다.",
      "info": "모든 아군의 체력 회복 오만 · 질투 유리 판정 진행 시, 통상 작전용 장비 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "거절한다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떤 수감자가 받아들일까.",
      "info": "오만/질투 유리 판정 13 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "요정초롱",
    "img": "assets/events/443d9d8f-4bd2-4027-8c1b-99bacfc6d259.webp",
    "choices": [
     {
      "text": "한겨울 밤의 악몽",
      "info": "정답 선택 시, 잔가지 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "오목",
      "info": "",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "요정초롱 탈출",
    "img": "assets/events/6b14f570-c246-4af9-91b2-8c116f95e29c.webp",
    "choices": [
     {
      "text": "제압에 협력한다.",
      "info": "탐식 유리 판정 성공 시, 시험 추출 : 초롱 획득 / 실패 시 전투 발생, 전투 승리 후 시험 추출 : 초롱 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "피한다.",
      "info": "별도 효과 없음",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자가 나설까?",
      "info": "탐식 유리 판정 16 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "임상 시험",
    "img": "assets/events/eaa2e08e-23bc-443c-ac86-32b6ec8cb96a.webp",
    "choices": [
     {
      "text": "먹어본다.",
      "info": "탐식 · 우울 유리 판정 진행 시, 강화제 Mk.4 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "무엇인지도 모르고 먹을 순 없다.",
      "info": "",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "충격지네",
    "img": "assets/events/2aae3047-b57a-4cbd-a1c2-1ae0375f62cd.webp",
    "choices": [
     {
      "text": "제한 풀린 제세동기",
      "info": "정답 선택 시, 변형 추출 : AEDD 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "근무용 비상 배터리",
      "info": "",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "홍염나방",
    "img": "assets/events/2f8494c3-9cdb-457e-a080-5dba7906eea5.webp",
    "choices": [
     {
      "text": "물밑꽃",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "지옥나비의 꿈",
      "info": "정답 선택 시, 잔불 획득",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "홍염나방 탈출",
    "img": "assets/events/f5d4325f-04be-44a5-9bf5-995b9219d31f.webp",
    "choices": [
     {
      "text": "제압에 협력한다.",
      "info": "분노 유리 판정 성공 시, 시험 추출 : 홍염살 획득 / 실패 시 전투 발생, 전투 승리 후 시험 추출 : 홍염살 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "맡긴다.",
      "info": "별도 효과 없음",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자가 나설까?",
      "info": "분노 유리 판정 16 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   }
  ]
 },
 {
  "id": 35,
  "title": "시간살인시간 BokGak",
  "theme": "이벤트 테마",
  "desc": "6.5장",
  "img": "assets/packs/9d3be698-d39a-4777-9b85-4a647bbe631c.webp",
  "floors": [
   4,
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "하드",
   "익스트림"
  ],
  "events": [
   {
    "title": "공장 노동자",
    "img": "assets/events/7dabf0a5-43fe-4684-b1ec-d353f384f3d0.webp",
    "choices": [
     {
      "text": "공장을 전체적으로 살펴본다.",
      "info": "탐식 · 오만 유리 판정 성공 시, 은빛 시계 케이스 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "공장주와 직원을 면밀히 살펴본다.",
      "info": "우울 · 나태 유리 판정 성공 시, 빛바랜 시계 케이스 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "누가 도울까?",
      "info": "탐식/오만 유리 판정 12 이상 시 성공",
      "success": "",
      "fail": ""
     },
     {
      "text": "누가 도울까?",
      "info": "우울/나태 유리 판정 12 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "던전 입장 - 시간살인시간",
    "img": "assets/events/652c3513-0acd-4ba3-85dd-b925cb1f3041.webp",
    "choices": [
     {
      "text": "빛을 따라 걸어간다.",
      "info": "",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "시간 살인 현장",
    "img": "assets/events/8ad61e89-6841-48e2-9f29-1855a241fe59.webp",
    "choices": [
     {
      "text": "돕는다.",
      "info": "나태 · 탐식 · 오만 유리 판정 성공 시, 선불 시간 영수증 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "무시한다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자가 말할까?",
      "info": "나태/탐식/오만 유리 판정 12 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "시간 살인마",
    "img": "assets/events/5611c97c-9d11-4c9a-bdd2-0c660393a4bf.webp",
    "choices": [
     {
      "text": "합류하는 척 한다.",
      "info": "색욕 · 나태 유리 판정 성공 시, 코스트 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "거부한다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떤 수감자가 합류하는 척할까?",
      "info": "색욕/나태 유리 판정 14 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "유로지비 아지트",
    "img": "assets/events/084ea1ed-a33b-4f83-9dd0-dc8de016c48e.webp",
    "choices": [
     {
      "text": "도, 도시의 유로지비여, 단결하라!",
      "info": "분노 · 질투 · 탐식 유리 판정 성공 시, 낙수의 잔 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "좋은 생각이지만, 제대로 실행될 리 없어.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자가 전해줄까?",
      "info": "분노/질투/탐식 유리 판정 15 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "유로지비 포스터",
    "img": "assets/events/f2f8c146-2598-4c40-a0ab-c6f5f4765265.webp",
    "choices": [
     {
      "text": "포스터를 떼어내고 쓰여져 있는 곳으로 향한다.",
      "info": "색욕 · 나태 · 탐식 유리 판정 성공 시, 강제 얽힘 시퀀스 장치 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "포스터를 무시한다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "낙수의 잔을 꺼내든다",
      "info": "선택 시, 강제 얽힘 시퀀스 장치) 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떤 수감자를 지정된 장소로 보낼 것인가?",
      "info": "색욕/나태/탐식 유리 판정 15 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "일상 생활",
    "img": "assets/events/49e546bd-8f2c-41bf-885e-c241b3b57768.webp",
    "choices": [
     {
      "text": "완충이 될 만한 물건을 찾아 가지고 온다.",
      "info": "색욕 · 나태 유리 판정 성공 시, 엇낀 시간 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "두 팔을 뻗어 떨어지는 주민을 받아낼 준비를 한다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떤 수감자가 쿠션을 찾아볼까?",
      "info": "색욕/나태 유리 판정 13 이상 시 성공",
      "success": "",
      "fail": ""
     },
     {
      "text": "결과 1",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "결과 2",
      "info": "",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "청년과 노인",
    "img": "assets/events/f83362e3-6331-4843-bfb3-bd38f2286f96.webp",
    "choices": [
     {
      "text": "청년을 따라가본다.",
      "info": "오만 · 탐식 유리 판정 성공 시, 녹슨 시계침 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "노인을 따라가본다.",
      "info": "나태 · 색욕 유리 판정 성공 시, 에칭 시계침 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "누구도 쫒아가지 않는다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자에게 부탁할까?",
      "info": "오만/탐식 유리 판정 13 이상 시 성공",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자에게 부탁할까?",
      "info": "나태/색욕 유리 판정 13 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "T사 세금 징수",
    "img": "assets/events/d0d76dc1-e1ec-4fef-90c6-4018ae6f0fc6.webp",
    "choices": [
     {
      "text": "말을 건다.",
      "info": "우울 · 나태 유리 판정 성공 시, 경고장 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "지나친다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "누가 말할까?",
      "info": "우울/나태 유리 판정 12 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "T사 징수관",
    "img": "assets/events/b81db137-d609-4df6-b9bd-9409afcf55c6.webp",
    "choices": [
     {
      "text": "허가를 받는다.",
      "info": "색욕 · 나태 유리 판정 성공 시, 긴급 부여형 수사관 배지 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "의뢰를 받는다.",
      "info": "전투 발생. 승리 시 긴급 부여형 수사관 배지 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "경고장을 보인다.",
      "info": "전투 발생. 승리 시 긴급 부여형 수사관 배지 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떤 수감자가 허가를 받으러 다녀올까?",
      "info": "색욕/나태 유리 판정 16 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   }
  ]
 },
 {
  "id": 37,
  "title": "워프특급 살인사건 BokGak",
  "theme": "이벤트 테마",
  "desc": "6.5장",
  "img": "assets/packs/814e2ef5-ff6c-43ad-b4e9-2c60c9acf722.webp",
  "floors": [
   4,
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "하드",
   "익스트림"
  ],
  "events": [
   {
    "title": "경혈식 무기 발견",
    "img": "assets/events/849c4b6c-38aa-421f-a36e-87e25534ab0a.webp",
    "choices": [
     {
      "text": "무기를 줍는다.",
      "info": "선택 시, 경혈식 글레이브 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "무기를 줍지 않는다.",
      "info": "",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "물건 판매하는 승객",
    "img": "assets/events/2e5f7f4a-adb0-4b52-8b68-4ae34547c98e.webp",
    "choices": [
     {
      "text": "알약을 산다",
      "info": "코스트 소모 후 모든 아군 체력과 정신력 회복",
      "success": "",
      "fail": ""
     },
     {
      "text": "구경만 하고 지나간다",
      "info": "",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "생체 인증",
    "img": "assets/events/b19a2494-0d92-4aa3-8b43-532fc9a763b6.webp",
    "choices": [
     {
      "text": "인증을 받는다.",
      "info": "판정에 따라 생체 발전형 배터리 또는 심장 리액트 모듈 획득. 우울 · 오만 유리 판정",
      "success": "",
      "fail": ""
     },
     {
      "text": "인증을 거부한다.",
      "info": "선택 시, 심장 리액트 모듈 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떤 수감자가 나설까?",
      "info": "우울/오만 유리 판정 14 이상 시 성공",
      "success": "생체 발전형 배터리 획득",
      "fail": "심장 리액트 모듈 획득"
     }
    ]
   },
   {
    "title": "워프 열차 승강장",
    "img": "assets/events/2fb83ed3-4a4f-41f7-8d96-ba2f1d9ce30f.webp",
    "choices": [
     {
      "text": "일등석을 추천한다.",
      "info": "선택 시, 다음 선택지의 선택에 따라, 일반석 할인 바우처 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "일반석도 나쁘지 않다고 말한다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "다시 한번 강력하게 추천한다.",
      "info": "질투 · 나태 유리 판정 성공 시, 일반석 할인 바우처 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "그 정도는 아닌 것 같다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자가 말할까?",
      "info": "질투/나태 유리 판정 11 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "의체 해결사와의 만남",
    "img": "assets/events/98aecdd7-9959-4e42-a12a-bb7a156320b2.webp",
    "choices": [
     {
      "text": "\"북부에서 오셨나요?\"",
      "info": "선택 시, 다음 선택지의 선택에 따라 아이스크림 통조림 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "\"팔이 네 개라서 좋은 점은 어떤 게 있나요?\"",
      "info": "선택 시, 다음 선택지의 선택에 따라 아이스크림 통조림 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "\"좋은 여행 되세요.\"",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "무언가 더 물어볼까?",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "무언가 더 물어볼까?",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "\"팔이 네 개라서 좋은 점은 어떤 게 있나요?\"",
      "info": "선택 시, 아이스크림 통조림 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "\"좋은 여행 되세요.\"",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "\"북부에서 오셨나요?\"",
      "info": "선택 시, 아이스크림 통조림 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "\"좋은 여행 되세요.\"",
      "info": "",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "피주머니 의체",
    "img": "assets/events/c3bd5fe1-ff34-4476-80e6-3f666d725bd9.webp",
    "choices": [
     {
      "text": "도와줄 방법이 없을지 살펴본다.",
      "info": "판정에 따라 의체관절 서보모터 또는 결정화된 혈액 획득. 오만 · 질투 · 우울 유리 판정",
      "success": "",
      "fail": ""
     },
     {
      "text": "혈귀의 능력과 관계가 있는지 조사한다.",
      "info": "선택 시, 결정화된 혈액 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자가 살펴볼까?",
      "info": "오만/질투/우울 유리 판정 20 이상 시 성공",
      "success": "의체관절 서보모터 획득",
      "fail": "결정화된 혈액 획득"
     }
    ]
   },
   {
    "title": "피주머니가 된 W사 정리 요원",
    "img": "assets/events/08817e99-5edf-41ec-a4f1-465652afee23.webp",
    "choices": [
     {
      "text": "피와 살점을 떼어낸다.",
      "info": "분노 · 우울 유리 판정 성공 시, 피로 된 살점, 살점으로 된 피 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "가져가지 않는다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자가 나설까?",
      "info": "분노/우울 유리 판정 16 이상 시 성공",
      "success": "",
      "fail": ""
     },
     {
      "text": "다음 선택지",
      "info": "선택에 따라 남겨진 차원 건틀릿 획득.",
      "success": "",
      "fail": ""
     },
     {
      "text": "건틀릿을 수리한다.",
      "info": "진행시, 남겨진 차원 건틀릿 획득. 색욕 · 질투 유리 판정",
      "success": "",
      "fail": ""
     },
     {
      "text": "수리를 그만둔다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자가 나설까?",
      "info": "색욕/질투 유리 판정 16 이상 시 성공",
      "success": "",
      "fail": "전투 발생."
     }
    ]
   },
   {
    "title": "W사 정리 요원 vs 피주머니",
    "img": "assets/events/76e92233-354e-4890-8647-790b15f92eb2.webp",
    "choices": [
     {
      "text": "E식 차원 단검을 빌려준다",
      "info": "선택 시, W사 보급 모자 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "W사 정리 요원을 도울 수감자를 보낸다.",
      "info": "진행 시, W사 보급 모자 획득. 질투 · 분노 유리 판정",
      "success": "",
      "fail": ""
     },
     {
      "text": "수감자를 보내지 않는다.",
      "info": "모든 아군 정신력 피해",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자가 나설까?",
      "info": "질투/분노 유리 판정 14 이상 시 성공",
      "success": "",
      "fail": "전투 발생."
     }
    ]
   },
   {
    "title": "W사 직원들의 장비",
    "img": "assets/events/1420338a-75a8-4912-8421-d775d0265022.webp",
    "choices": [
     {
      "text": "조용히 지나간다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "지나가며 쓸 만한 장비를 챙겨간다.",
      "info": "질투 · 탐식 유리 판정 성공 시 진행에 따라 E식 차원 단검 또는 휴대용 역장 배터리 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "먼저 공격한다.",
      "info": "전투 발생. 승리 시 E식 차원 단검, 휴대용 역장 배터리 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자에게 부탁할까?",
      "info": "질투/탐식 유리 판정 15 이상 시 성공",
      "success": "",
      "fail": ""
     },
     {
      "text": "진행",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "강력해 보이는 무기",
      "info": "선택 시, E식 차원 단검 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "유용해 보이는 장비",
      "info": "선택 시, 휴대용 역장 배터리 획득",
      "success": "",
      "fail": ""
     }
    ]
   }
  ]
 },
 {
  "id": 33,
  "title": "육참골단 BokGak",
  "theme": "이벤트 테마",
  "desc": "5.5장",
  "img": "assets/packs/f290a0b2-a940-4464-991f-3184f122b171.webp",
  "floors": [
   4,
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "하드",
   "익스트림"
  ],
  "events": [
   {
    "title": "그런갑다 싶습니다",
    "img": "assets/events/98de31c2-db35-444c-806a-d4b2998c95f3.webp",
    "choices": [
     {
      "text": "안타깝지만, 검계와 싸워나갈 수밖에 없어 보이네.",
      "info": "색욕 · 오만 유리 판정 성공 시, 원목 술잔 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "싸움터 옆에 있다가 지팡이에 맞은 격이다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자가 전해줄까?",
      "info": "색욕/오만 유리 판정 12 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "두 행인과의 대화",
    "img": "assets/events/279c9de0-a407-48c3-a346-b3e0b719d7d2.webp",
    "choices": [
     {
      "text": "고래 싸움에 새우 등이 터져나가는 건 도시 어디를 가나 같지 않나.",
      "info": "우울 · 오만 유리 판정 성공 시, 붉은 색술 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "무념무상. 안타깝기는 하다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자가 전해줄까?",
      "info": "우울/오만 유리 판정 12 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "뭘 좀 아는군요",
    "img": "assets/events/63c77d62-081e-46cd-a6eb-0809cb2f2da5.webp",
    "choices": [
     {
      "text": "검이야말로 무기의 왕이다.",
      "info": "색욕 · 오만 유리 판정 성공 시, 낡은 칼자루 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "검이 그 정도인지 잘 모르겠다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "누가 자신의 견해를 말해볼까?",
      "info": "색욕/오만 유리 판정 14 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "시시비비",
    "img": "assets/events/d2a35506-ed99-40f2-9898-0534c6b4aae7.webp",
    "choices": [
     {
      "text": "옳고 그름이 가장 중요한 것일까? 중요한 건 다른 것이라고 말한다.",
      "info": "색욕 · 오만 유리 판정 성공 시, 해진 삿갓 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "그래도 옳은 것을 옳다고 말해야 한다.",
      "info": "우울 · 오만 유리 판정 성공 시, 낡은 도포 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자가 말할까?",
      "info": "오만/색욕 유리 판정 20 이상 시 성공",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자가 말할까?",
      "info": "오만/우울 유리 판정 20 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "안개 속에서",
    "img": "assets/events/f7962fdb-6f7d-4954-9a37-6cb6d42b0b8c.webp",
    "choices": [
     {
      "text": "발검 자세를 취해볼까.",
      "info": "색욕 · 우울 유리 판정 성공 시, 조각난 칼날 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "검을 뽑아서 늘어뜨릴까.",
      "info": "오만 · 분노 유리 판정 성공 시, 부서진 칼날 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "검을 버리고 도망치자.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자에게 부탁할까?",
      "info": "색욕/우울 유리 판정 16 이상 시 성공",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자에게 부탁할까?",
      "info": "오만/분노 유리 판정 16 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "주민들 구하기",
    "img": "assets/events/12902965-d7e8-41f3-88ea-6880f5dd8384.webp",
    "choices": [
     {
      "text": "주민들을 구한다.",
      "info": "선택 시, 다음 선택지의 선택에 따라 검은 장부 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "모른척 지나간다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떤 수감자가 나설까?",
      "info": "분노/나태 유리 판정 9 이상 시 성공",
      "success": "",
      "fail": ""
     },
     {
      "text": "성공/실패 후 진행",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "그저 지나가던 사람이라고 말한다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "검계라고 말한다.",
      "info": "오만 유리 판정 성공 시, 검은 장부 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "누가 나서서 말하게 할까?",
      "info": "오만 유리 판정 12 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "참격 vs 관통 vs 타격",
    "img": "assets/events/3fcea1ae-0783-47d7-baed-0e29d369fdca.webp",
    "choices": [
     {
      "text": "맞다. 검술은 참격을 담기에 적합한 무술이다.",
      "info": "색욕 · 오만 유리 판정 성공 시, 녹슨 칼자루 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "그렇지 않다. 참격도, 관통도, 타격도 모두 쓰임새가 있다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "누가 자신의 견해를 말해볼까?",
      "info": "색욕/오만 유리 판정 14 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   }
  ]
 },
 {
  "id": 38,
  "title": "LCB 정기검진",
  "theme": "이벤트 테마",
  "desc": "7.5장",
  "img": "assets/packs/da3e8668-a4b9-4e5e-bbda-a2b0bce5cca4.webp",
  "floors": [
   5,
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "하드",
   "노말",
   "익스트림"
  ],
  "events": [
   {
    "title": "감정과 불꽃",
    "img": "assets/events/d6336ed0-cb51-4882-8e86-229b60cc73ec.webp",
    "choices": [
     {
      "text": "다른 사람과 착각한 것 같다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "우리가 그 표본이다.",
      "info": "분노 · 색욕 유리 판정 진행 시, 재점화 플러그 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떤 수감자가 나설까.",
      "info": "분노/색욕 유리 판정 10 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "글귀",
    "img": "assets/events/5362fe1f-9c9e-47f4-84b6-fa466d1af12d.webp",
    "choices": [
     {
      "text": "무시한다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "주변을 좀 더 둘러본다.",
      "info": "분노 · 우울 유리 판정 진행 시, 작전 승인 카드 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "주변을 찬찬히 살펴본다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "누구에게 수색을 맡길까.",
      "info": "분노/우울 유리 판정 11 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "던전 입장 - LCB 정기검진",
    "img": "assets/events/e1764481-af88-4440-bada-5556bf68dfcf.webp",
    "choices": [
     {
      "text": "이글거리는 장갑을 가져간다.",
      "info": "선택 시, 점화 장갑 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "뾰족한 장식이 달린 전투화를 가져간다.",
      "info": "선택 시, 가시 전투화 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "청소용 스프레이를 가져간다.",
      "info": "선택 시, 환상 사냥 획득",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "복도 조사",
    "img": "assets/events/ee9f5d80-fce6-447f-8471-70c520bc6f8b.webp",
    "choices": [
     {
      "text": "조사를 승낙한다.",
      "info": "모든 아군의 체력 회복 오만 · 질투 유리 판정 진행 시, 통상 작전용 장비 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "거절한다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떤 수감자가 받아들일까.",
      "info": "오만/질투 유리 판정 13 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "요정초롱",
    "img": "assets/events/443d9d8f-4bd2-4027-8c1b-99bacfc6d259.webp",
    "choices": [
     {
      "text": "한겨울 밤의 악몽",
      "info": "정답 선택 시, 잔가지 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "오목",
      "info": "",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "임상 시험",
    "img": "assets/events/eaa2e08e-23bc-443c-ac86-32b6ec8cb96a.webp",
    "choices": [
     {
      "text": "먹어본다.",
      "info": "탐식 · 우울 유리 판정 진행 시, 강화제 Mk.4 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "무엇인지도 모르고 먹을 순 없다.",
      "info": "",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "홍염나방",
    "img": "assets/events/2f8494c3-9cdb-457e-a080-5dba7906eea5.webp",
    "choices": [
     {
      "text": "물밑꽃",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "지옥나비의 꿈",
      "info": "정답 선택 시, 잔불 획득",
      "success": "",
      "fail": ""
     }
    ]
   }
  ]
 },
 {
  "id": 34,
  "title": "시간살인시간",
  "theme": "이벤트 테마",
  "desc": "6.5장",
  "img": "assets/packs/eac91714-62d0-4871-a23a-35d9463ee7a0.webp",
  "floors": [
   4,
   4,
   5,
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "노말",
   "하드",
   "익스트림"
  ],
  "events": [
   {
    "title": "공장 노동자",
    "img": "assets/events/7dabf0a5-43fe-4684-b1ec-d353f384f3d0.webp",
    "choices": [
     {
      "text": "공장을 전체적으로 살펴본다.",
      "info": "탐식 · 오만 유리 판정 성공 시, 은빛 시계 케이스 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "공장주와 직원을 면밀히 살펴본다.",
      "info": "우울 · 나태 유리 판정 성공 시, 빛바랜 시계 케이스 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "누가 도울까?",
      "info": "탐식/오만 유리 판정 12 이상 시 성공",
      "success": "",
      "fail": ""
     },
     {
      "text": "누가 도울까?",
      "info": "우울/나태 유리 판정 12 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "던전 입장 - 시간살인시간",
    "img": "assets/events/652c3513-0acd-4ba3-85dd-b925cb1f3041.webp",
    "choices": [
     {
      "text": "빛을 따라 걸어간다.",
      "info": "",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "시간 살인 현장",
    "img": "assets/events/8ad61e89-6841-48e2-9f29-1855a241fe59.webp",
    "choices": [
     {
      "text": "돕는다.",
      "info": "나태 · 탐식 · 오만 유리 판정 성공 시, 선불 시간 영수증 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "무시한다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자가 말할까?",
      "info": "나태/탐식/오만 유리 판정 12 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "유로지비 아지트",
    "img": "assets/events/084ea1ed-a33b-4f83-9dd0-dc8de016c48e.webp",
    "choices": [
     {
      "text": "도, 도시의 유로지비여, 단결하라!",
      "info": "분노 · 질투 · 탐식 유리 판정 성공 시, 낙수의 잔 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "좋은 생각이지만, 제대로 실행될 리 없어.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자가 전해줄까?",
      "info": "분노/질투/탐식 유리 판정 15 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "청년과 노인",
    "img": "assets/events/f83362e3-6331-4843-bfb3-bd38f2286f96.webp",
    "choices": [
     {
      "text": "청년을 따라가본다.",
      "info": "오만 · 탐식 유리 판정 성공 시, 녹슨 시계침 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "노인을 따라가본다.",
      "info": "나태 · 색욕 유리 판정 성공 시, 에칭 시계침 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "누구도 쫒아가지 않는다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자에게 부탁할까?",
      "info": "오만/탐식 유리 판정 13 이상 시 성공",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자에게 부탁할까?",
      "info": "나태/색욕 유리 판정 13 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "T사 세금 징수",
    "img": "assets/events/d0d76dc1-e1ec-4fef-90c6-4018ae6f0fc6.webp",
    "choices": [
     {
      "text": "말을 건다.",
      "info": "우울 · 나태 유리 판정 성공 시, 경고장 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "지나친다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "누가 말할까?",
      "info": "우울/나태 유리 판정 12 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   }
  ]
 },
 {
  "id": 105,
  "title": "호박색 어스름의 시련",
  "theme": "이벤트 테마",
  "desc": "제8회 발푸르기스의 밤",
  "img": "assets/packs/da7ea633-92bf-4878-a5bf-5196ceed7364.png",
  "floors": [
   4,
   4,
   5,
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "노말",
   "하드",
   "익스트림"
  ],
  "events": [
   {
    "title": "1.76 MHz 격리실",
    "img": "assets/events/0eabb193-601c-4bad-b9b4-341be27c88aa.webp",
    "choices": [
     {
      "text": "트라우마 방지장을 가진 수감자에게 억압 작업을 지시한다.",
      "info": "선택 시, 노이즈 섞인 무전기 획득 (E.G.O GIFT 트라우마 방지장 소지 시 선택 가능)",
      "success": "",
      "fail": ""
     },
     {
      "text": "억압 작업을 수감자에게 지시한다.",
      "info": "색욕 · 우울 유리 판정 성공 시, 노이즈 섞인 무전기 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자가 나설까?",
      "info": "색욕/우울 유리 판정 14 이상 시 성공 , 성공 시 노이즈 섞인 무전기 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "복도를 떠난다.",
      "info": "",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "노래하는 기계 격리실",
    "img": "assets/events/c22b5df6-e7ec-4dfc-9afb-75691b34807a.webp",
    "choices": [
     {
      "text": "도와주고 기타를 가져가기로 한다.",
      "info": "분노 · 색욕 유리 판정 성공 시, 하모닉스 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "도와주고 베이스를 가져가기로 한다.",
      "info": "분노 · 색욕 유리 판정 성공 시, 워킹 베이스 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "도와주지 않는다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떤 수감자가 해볼까?",
      "info": "분노/색욕 유리 판정 14 이상 시 성공, 성공 시 하모닉스 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떤 수감자가 해볼까?",
      "info": "분노/색욕 유리 판정 14 이상 시 성공, 성공 시 워킹 베이스 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "성공/실패 이후 선택지 - 기타",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "제안을 수락한다.",
      "info": "분노 · 색욕 유리 판정 성공 시, 워킹 베이스 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "도와주지 않는다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떤 수감자가 해볼까?",
      "info": "분노/색욕 유리 판정 26 이상 시 성공, 성공 시 워킹 베이스 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "성공/실패 이후 선택지 - 베이스",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "제안을 수락한다.",
      "info": "분노 · 색욕 유리 판정 성공 시, 하모닉스 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "도와주지 않는다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떤 수감자가 해볼까?",
      "info": "분노/색욕 유리 판정 26 이상 시 성공, 성공 시 하모닉스 획득",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "복지팀 휴게실",
    "img": "assets/events/a14679eb-f879-41e3-8585-a57afe34da4c.webp",
    "choices": [
     {
      "text": "상층에서 내려왔다고 말하며, E.G.O 기프트를 보여준다.",
      "info": "선택 시, 아직 따뜻한 커피 획득 (자색 정오의 시련, 증오와 절망 테마팩 전용 E.G.O 기프트 5종 이상 있을 시 선택 가능)",
      "success": "",
      "fail": ""
     },
     {
      "text": "징계팀에서 왔다고 말한다.",
      "info": "",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "알리우네",
    "img": "assets/events/4a8f8777-d2f5-4435-b94a-e5297f132dbe.webp",
    "choices": [
     {
      "text": "직원들을 구하러 간다",
      "info": "다음 선택지의 선택에 따라 분홍 꽃잎 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "직원들을 포기한다",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "패닉에 빠진 직원들도 구한다.",
      "info": "다음 선택지의 선택에 따라 분홍 꽃잎 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "이번에는 포기한다.",
      "info": "선택 시, 분홍 꽃잎 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "괴물을 제압한다.",
      "info": "선택 시, 분홍 꽃잎 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "돌아간다.",
      "info": "선택 시, 분홍 꽃잎 획득",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "여왕벌 격리실",
    "img": "assets/events/ca6ef2dd-462b-40f9-834b-27abb1710e0a.webp",
    "choices": [
     {
      "text": "제안을 받아들인다.",
      "info": "분노 · 나태 유리 판정 성공 시, 로열 젤리 퍼퓸 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "거절한다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떤 수감자가 들어갈까?",
      "info": "분노/나태 유리 판정 16 이상 시 성공, 성공 시 로열 젤리 퍼퓸 획득",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "징벌 새 격리실",
    "img": "assets/events/e4c05bc9-8b7a-40ee-b6c2-75b5952bcf7a.webp",
    "choices": [
     {
      "text": "잿빛 별자리의 가호를 가진 수감자에게 통찰 작업을 지시한다.",
      "info": "선택 시, 부리 모양 목걸이 획득 (E.G.O GIFT 잿빛 별자리의 가호 소지 시 선택 가능)",
      "success": "",
      "fail": ""
     },
     {
      "text": "통찰 작업을 수감자에게 지시한다.",
      "info": "나태 · 분노 유리 판정 성공 시, 부리 모양 목걸이 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "복도를 떠난다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자가 나설까?",
      "info": "나태/분노 유리 판정 14 이상 시 성공, 성공 시, 부리 모양 목걸이 획득",
      "success": "",
      "fail": ""
     }
    ]
   }
  ]
 },
 {
  "id": 108,
  "title": "심야청소 BokGak",
  "theme": "이벤트 테마",
  "desc": "",
  "img": "assets/packs/1d45790e-0cf8-4cf2-87c9-5cf159391737.png",
  "floors": [
   4,
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "하드",
   "익스트림"
  ],
  "events": [
   {
    "title": "기습",
    "img": "assets/events/2af67c2e-55e7-45bf-9d1b-dec6a8e5e533.webp",
    "choices": [
     {
      "text": "도망가는 것을 잡는다.",
      "info": "탐식 · 오만 유리 판정 성공 시, 묘각 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "도망가는 것을 지켜만 본다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떤 수감자가 추격하게 할까?",
      "info": "탐식/오만 유리 판정 12 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "어디선가 본 붐박스",
    "img": "assets/events/1c1dede8-28f4-40bf-9878-a3c0ea76f7a6.png",
    "choices": [
     {
      "text": "붐박스를 가져간다.",
      "info": "탐식 유리 판정 성공 시, 등장 전용 붐박스 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "다른 길을 찾아 우회한다.󠄈󠄆󠄉󠄆󠄀󠄄󠄄󠄀󠄁",
      "info": "별도 효과 없음󠄈󠄆󠄉󠄆󠄀󠄄󠄄󠄀󠄁",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "중지",
    "img": "assets/events/22f51ce6-128b-400d-9cbb-9e81204eafee.webp",
    "choices": [
     {
      "text": "본 적 있는 것 같다고 말한다.",
      "info": "판정에 따라 의리 사슬 또는 강화 문신 - 중지 획득. 탐식 · 오만 · 질투 유리",
      "success": "",
      "fail": ""
     },
     {
      "text": "모르는 얼굴이라고 한다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떻게 할까?",
      "info": "탐식/오만/질투 유리 판정 15 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "청소부",
    "img": "assets/events/a4072bd4-11e8-4d88-8afd-bdfc16ea55c7.webp",
    "choices": [
     {
      "text": "가까운 거처로 숨는다.",
      "info": "탐식 · 오만 유리 판정 진행 시, 찰랑이는 연료통 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "전속력으로 버스로 돌아간다.",
      "info": "50% 확률로 전투 발생. 승리 시 찰랑이는 연료통 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자가 선택한 거처로 들어갈까?",
      "info": "탐식/오만 유리 판정 14 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "흑수",
    "img": "assets/events/87ce0846-df7f-4ee3-a914-1b7828e0fce6.webp",
    "choices": [
     {
      "text": "명령을 기다린다.",
      "info": "탐식 · 오만 유리 판정 결과에 따라 새겨넣어진 괴문자 또는 괴문자 부적 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "임무조를 따라간다.",
      "info": "우울 · 나태 유리 판정 결과에 따라 새겨넣어진 괴문자, 괴문자 부적 또는 괴문자 부적 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떤 수감자가 나설까?",
      "info": "탐식/오만 유리 판정 12 이상 시 성공",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떤 수감자가 나설까?",
      "info": "탐식/오만 유리 판정 14 이상 시 성공. 실패시 전투 발생.",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "흑수 선택지 이후",
    "img": "assets/events/adc4dc60-9734-4b34-9b5d-72491fa68709.webp",
    "choices": [
     {
      "text": "신입이라고 말하며 묘각을 보여준다.",
      "info": "E.G.O 기프트 묘각 보유 시 선택 가능 선택 시, 흑수환 - 묘 획득!",
      "success": "",
      "fail": ""
     },
     {
      "text": "다른 곳에서 임무를 수행한 토끼라고 말한다.󠄈󠄆󠄉󠄆󠄀󠄄󠄄󠄀󠄁",
      "info": "탐식 · 오만 유리 판정 성공 시, 흑수환 - 묘 획득󠄈󠄆󠄉󠄆󠄀󠄄󠄄󠄀󠄁",
      "success": "",
      "fail": ""
     },
     {
      "text": "지나가던 행인이라고 말한다.󠄈󠄆󠄉󠄆󠄀󠄄󠄄󠄀󠄁",
      "info": "별도 효과 없음󠄈󠄆󠄉󠄆󠄀󠄄󠄄󠄀󠄁",
      "success": "",
      "fail": ""
     }
    ]
   }
  ]
 },
 {
  "id": 32,
  "title": "육참골단",
  "theme": "이벤트 테마",
  "desc": "5.5장",
  "img": "assets/packs/7ac25d44-e8be-430b-9c28-f71452f6e210.webp",
  "floors": [
   3,
   4,
   4,
   5
  ],
  "difficulties": [
   "노말",
   "하드"
  ],
  "events": [
   {
    "title": "두 행인과의 대화",
    "img": "assets/events/279c9de0-a407-48c3-a346-b3e0b719d7d2.webp",
    "choices": [
     {
      "text": "고래 싸움에 새우 등이 터져나가는 건 도시 어디를 가나 같지 않나.",
      "info": "우울 · 오만 유리 판정 성공 시, 붉은 색술 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "무념무상. 안타깝기는 하다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자가 전해줄까?",
      "info": "우울/오만 유리 판정 12 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "시시비비",
    "img": "assets/events/d2a35506-ed99-40f2-9898-0534c6b4aae7.webp",
    "choices": [
     {
      "text": "옳고 그름이 가장 중요한 것일까? 중요한 건 다른 것이라고 말한다.",
      "info": "색욕 · 오만 유리 판정 성공 시, 해진 삿갓 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "그래도 옳은 것을 옳다고 말해야 한다.",
      "info": "우울 · 오만 유리 판정 성공 시, 낡은 도포 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자가 말할까?",
      "info": "오만/색욕 유리 판정 20 이상 시 성공",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자가 말할까?",
      "info": "오만/우울 유리 판정 20 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "안개 속에서",
    "img": "assets/events/f7962fdb-6f7d-4954-9a37-6cb6d42b0b8c.webp",
    "choices": [
     {
      "text": "발검 자세를 취해볼까.",
      "info": "색욕 · 우울 유리 판정 성공 시, 조각난 칼날 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "검을 뽑아서 늘어뜨릴까.",
      "info": "오만 · 분노 유리 판정 성공 시, 부서진 칼날 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "검을 버리고 도망치자.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자에게 부탁할까?",
      "info": "색욕/우울 유리 판정 16 이상 시 성공",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자에게 부탁할까?",
      "info": "오만/분노 유리 판정 16 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "주민들 구하기",
    "img": "assets/events/12902965-d7e8-41f3-88ea-6880f5dd8384.webp",
    "choices": [
     {
      "text": "주민들을 구한다.",
      "info": "선택 시, 다음 선택지의 선택에 따라 검은 장부 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "모른척 지나간다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떤 수감자가 나설까?",
      "info": "분노/나태 유리 판정 9 이상 시 성공",
      "success": "",
      "fail": ""
     },
     {
      "text": "성공/실패 후 진행",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "그저 지나가던 사람이라고 말한다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "검계라고 말한다.",
      "info": "오만 유리 판정 성공 시, 검은 장부 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "누가 나서서 말하게 할까?",
      "info": "오만 유리 판정 12 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "참격 vs 관통 vs 타격",
    "img": "assets/events/3fcea1ae-0783-47d7-baed-0e29d369fdca.webp",
    "choices": [
     {
      "text": "맞다. 검술은 참격을 담기에 적합한 무술이다.",
      "info": "색욕 · 오만 유리 판정 성공 시, 녹슨 칼자루 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "그렇지 않다. 참격도, 관통도, 타격도 모두 쓰임새가 있다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "누가 자신의 견해를 말해볼까?",
      "info": "색욕/오만 유리 판정 14 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   }
  ]
 },
 {
  "id": 36,
  "title": "워프특급 살인사건",
  "theme": "이벤트 테마",
  "desc": "6.5장",
  "img": "assets/packs/e78b63eb-34d3-44c9-8eb8-cab707a38306.webp",
  "floors": [
   4,
   4,
   5,
   5
  ],
  "difficulties": [
   "노말",
   "하드"
  ],
  "events": [
   {
    "title": "생체 인증",
    "img": "assets/events/b19a2494-0d92-4aa3-8b43-532fc9a763b6.webp",
    "choices": [
     {
      "text": "인증을 받는다.",
      "info": "판정에 따라 생체 발전형 배터리 또는 심장 리액트 모듈 획득. 우울 · 오만 유리 판정",
      "success": "",
      "fail": ""
     },
     {
      "text": "인증을 거부한다.",
      "info": "선택 시, 심장 리액트 모듈 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떤 수감자가 나설까?",
      "info": "우울/오만 유리 판정 14 이상 시 성공",
      "success": "생체 발전형 배터리 획득",
      "fail": "심장 리액트 모듈 획득"
     }
    ]
   },
   {
    "title": "워프 열차 승강장",
    "img": "assets/events/2fb83ed3-4a4f-41f7-8d96-ba2f1d9ce30f.webp",
    "choices": [
     {
      "text": "일등석을 추천한다.",
      "info": "선택 시, 다음 선택지의 선택에 따라, 일반석 할인 바우처 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "일반석도 나쁘지 않다고 말한다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "다시 한번 강력하게 추천한다.",
      "info": "질투 · 나태 유리 판정 성공 시, 일반석 할인 바우처 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "그 정도는 아닌 것 같다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자가 말할까?",
      "info": "질투/나태 유리 판정 11 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "의체 해결사와의 만남",
    "img": "assets/events/98aecdd7-9959-4e42-a12a-bb7a156320b2.webp",
    "choices": [
     {
      "text": "\"북부에서 오셨나요?\"",
      "info": "선택 시, 다음 선택지의 선택에 따라 아이스크림 통조림 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "\"팔이 네 개라서 좋은 점은 어떤 게 있나요?\"",
      "info": "선택 시, 다음 선택지의 선택에 따라 아이스크림 통조림 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "\"좋은 여행 되세요.\"",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "무언가 더 물어볼까?",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "무언가 더 물어볼까?",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "\"팔이 네 개라서 좋은 점은 어떤 게 있나요?\"",
      "info": "선택 시, 아이스크림 통조림 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "\"좋은 여행 되세요.\"",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "\"북부에서 오셨나요?\"",
      "info": "선택 시, 아이스크림 통조림 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "\"좋은 여행 되세요.\"",
      "info": "",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "피주머니 의체",
    "img": "assets/events/c3bd5fe1-ff34-4476-80e6-3f666d725bd9.webp",
    "choices": [
     {
      "text": "도와줄 방법이 없을지 살펴본다.",
      "info": "판정에 따라 의체관절 서보모터 또는 결정화된 혈액 획득. 오만 · 질투 · 우울 유리 판정",
      "success": "",
      "fail": ""
     },
     {
      "text": "혈귀의 능력과 관계가 있는지 조사한다.",
      "info": "선택 시, 결정화된 혈액 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자가 살펴볼까?",
      "info": "오만/질투/우울 유리 판정 20 이상 시 성공",
      "success": "의체관절 서보모터 획득",
      "fail": "결정화된 혈액 획득"
     }
    ]
   },
   {
    "title": "W사 직원들의 장비",
    "img": "assets/events/1420338a-75a8-4912-8421-d775d0265022.webp",
    "choices": [
     {
      "text": "조용히 지나간다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "지나가며 쓸 만한 장비를 챙겨간다.",
      "info": "질투 · 탐식 유리 판정 성공 시 진행에 따라 E식 차원 단검 또는 휴대용 역장 배터리 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "먼저 공격한다.",
      "info": "전투 발생. 승리 시 E식 차원 단검, 휴대용 역장 배터리 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자에게 부탁할까?",
      "info": "질투/탐식 유리 판정 15 이상 시 성공",
      "success": "",
      "fail": ""
     },
     {
      "text": "진행",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "강력해 보이는 무기",
      "info": "선택 시, E식 차원 단검 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "유용해 보이는 장비",
      "info": "선택 시, 휴대용 역장 배터리 획득",
      "success": "",
      "fail": ""
     }
    ]
   }
  ]
 },
 {
  "id": 39,
  "title": "심야청소",
  "theme": "이벤트 테마",
  "desc": "7.5장",
  "img": "assets/packs/5f0a2734-b85f-466a-9946-0092275f85b3.webp",
  "floors": [
   5,
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "노말",
   "하드",
   "익스트림"
  ],
  "events": [
   {
    "title": "기습",
    "img": "assets/events/2af67c2e-55e7-45bf-9d1b-dec6a8e5e533.webp",
    "choices": [
     {
      "text": "도망가는 것을 잡는다.",
      "info": "탐식 · 오만 유리 판정 성공 시, 묘각 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "도망가는 것을 지켜만 본다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떤 수감자가 추격하게 할까?",
      "info": "탐식/오만 유리 판정 12 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "중지",
    "img": "assets/events/22f51ce6-128b-400d-9cbb-9e81204eafee.webp",
    "choices": [
     {
      "text": "본 적 있는 것 같다고 말한다.",
      "info": "판정에 따라 의리 사슬 또는 강화 문신 - 중지 획득. 탐식 · 오만 · 질투 유리",
      "success": "",
      "fail": ""
     },
     {
      "text": "모르는 얼굴이라고 한다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떻게 할까?",
      "info": "탐식/오만/질투 유리 판정 15 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "청소부",
    "img": "assets/events/a4072bd4-11e8-4d88-8afd-bdfc16ea55c7.webp",
    "choices": [
     {
      "text": "가까운 거처로 숨는다.",
      "info": "탐식 · 오만 유리 판정 진행 시, 찰랑이는 연료통 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "전속력으로 버스로 돌아간다.",
      "info": "50% 확률로 전투 발생. 승리 시 찰랑이는 연료통 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자가 선택한 거처로 들어갈까?",
      "info": "탐식/오만 유리 판정 14 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "흑수",
    "img": "assets/events/87ce0846-df7f-4ee3-a914-1b7828e0fce6.webp",
    "choices": [
     {
      "text": "명령을 기다린다.",
      "info": "탐식 · 오만 유리 판정 결과에 따라 새겨넣어진 괴문자 또는 괴문자 부적 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "임무조를 따라간다.",
      "info": "우울 · 나태 유리 판정 결과에 따라 새겨넣어진 괴문자, 괴문자 부적 또는 괴문자 부적 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떤 수감자가 나설까?",
      "info": "탐식/오만 유리 판정 12 이상 시 성공",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떤 수감자가 나설까?",
      "info": "탐식/오만 유리 판정 14 이상 시 성공. 실패시 전투 발생.",
      "success": "",
      "fail": ""
     }
    ]
   }
  ]
 },
 {
  "id": 40,
  "title": "절차탁춘",
  "theme": "이벤트 테마",
  "desc": "8.5장",
  "img": "assets/packs/876a1432-def9-4270-8b2b-11fcc20e7118.webp",
  "floors": [
   5,
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "노말",
   "하드",
   "익스트림"
  ],
  "events": [
   {
    "title": "가시춘 학생의 수업 복습",
    "img": "assets/events/aacba30e-6b31-4008-88cf-cd6768c72ff0.webp",
    "choices": [
     {
      "text": "지(智)에 대해서 설명한다.",
      "info": "선택 시, 덕목 - 지[智] 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "용(勇)에 대해서 설명한다.",
      "info": "선택 시, 덕목 - 용[勇] 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "인(仁)에 대해서 설명한다.",
      "info": "선택 시, 덕목 - 인[仁] 획득",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "수상한 붉은 천",
    "img": "assets/events/4e4f88dc-33da-4c20-9cb7-64e8fd53cca0.webp",
    "choices": [
     {
      "text": "필요 없다면 가져가겠다고 말한다.",
      "info": "오만 · 탐식 유리 판정 성공 시, 마음을 닫는 붉은 천 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "우리는 필요 없다고 말한다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떤 수감자가 말할까?",
      "info": "오만/탐식 유리 판정 16 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "장물로 나온 흑수 - 오의 장비",
    "img": "assets/events/b7bdb81d-141f-41f1-aae9-9ebc0a3b4323.webp",
    "choices": [
     {
      "text": "장비를 보고 내 것이라고 호통친다.",
      "info": "나태 · 탐식 유리 판정 성공 시, 흑철마갑 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "장비를 돈 주고 구매한다.",
      "info": "선택 시, 흑철마갑 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떤 수감자가 말할까?",
      "info": "나태/탐식 유리 판정 14 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "흑수 - 유에게 벌을 내린다.",
    "img": "assets/events/9e38566e-9dd2-4e73-a5da-8c54da15fae6.webp",
    "choices": [
     {
      "text": "흑수 - 유의 앞발, 혈염도를 압수한다.",
      "info": "분노 · 탐식 유리 판정 성공 시, 혈염도 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "죄를 뉘우치라는 의미에서 결박된 상태로 일주일 간 근신 처분을 내린다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자의 조언을 전할까?",
      "info": "분노/탐식 유리 판정 14 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   }
  ]
 },
 {
  "id": 41,
  "title": "자색 정오의 시련",
  "theme": "이벤트 테마",
  "desc": "제4회 발푸르기스의 밤",
  "img": "assets/packs/d8604ba5-4901-4cbe-ba5a-7eee152aebcf.webp",
  "floors": [
   3,
   4,
   4
  ],
  "difficulties": [
   "노말",
   "하드"
  ],
  "events": [
   {
    "title": "관",
    "img": "assets/events/22f6402e-6e45-4f67-8f78-e8636a52e082.webp",
    "choices": [
     {
      "text": "관을 열지 않고 지나가자고 말한다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "관을 열어보자고 말한다.",
      "info": "선택 시, 안식 획득",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "교육 및 기계장치",
    "img": "assets/events/d49cf0cb-27ac-4d33-87fe-02251bd5bb6b.webp",
    "choices": [
     {
      "text": "거미줄을 응시한다.",
      "info": "선택 시, 치사랑 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "발전기를 확인한다.",
      "info": "선택 시, 어긋난 트랜지스터 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "거미줄을 응시하며, 발전기를 확인한다.",
      "info": "질투 · 색욕 유리 판정 진행 시, 치사랑 · 어긋난 트랜지스터 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "누구에게 발전기를 확인시킬까?",
      "info": "질투/색욕 유리 판정 15 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "단 한번의 악과 수백 가지의 선행",
    "img": "assets/events/efac8c0f-4929-4afa-9b1b-9ef34c6c2ce8.webp",
    "choices": [
     {
      "text": "단 한번의 악과 수백 가지의 선행에게 기도를 올린다.",
      "info": "나태 · 우울 유리 판정 진행 시, 고초 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "단 한번의 악과 수백 가지의 선행에게 말을 건다.",
      "info": "나태 · 우울 유리 판정 진행 시, 가시나무 관 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "기도를 올릴 정직한 수감자는 누구인가?",
      "info": "나태/우울 유리 판정 14 이상 시 성공",
      "success": "",
      "fail": ""
     },
     {
      "text": "자신의 뜻을 입에 담을 수감자는 누구인가?",
      "info": "나태/우울 유리 판정 14 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "안전팀",
    "img": "assets/events/7a9467ef-2c2f-499b-8f98-d12ae59e285a.webp",
    "choices": [
     {
      "text": "흘러내린 엔케팔린을 챙긴다.",
      "info": "선택 시, 흘러내린 엔케팔린 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "가스를 챙긴다.",
      "info": "선택 시, 정신 오염 가속 가스 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "둘 다 챙긴다.",
      "info": "색욕 · 나태 유리 판정 진행 시, 결과에 따라 흘러내린 엔케팔린, 정신 오염 가속 가스 획득 (판정 실패 시, 전투 발생)",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떤 수감자에게 재빠르게 물건들을 챙기라 말할까?",
      "info": "색욕/나태 유리 판정 16 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   }
  ]
 },
 {
  "id": 42,
  "title": "탄환이 찍은 마침표",
  "theme": "이벤트 테마",
  "desc": "제5회 발푸르기스의 밤",
  "img": "assets/packs/3d33ce3a-9f20-4b36-8151-0c779a933d2b.webp",
  "floors": [
   3,
   4,
   4
  ],
  "difficulties": [
   "노말",
   "하드"
  ],
  "events": [
   {
    "title": "공부",
    "img": "assets/events/fe0a9324-9f8c-46c1-93d5-d26ea029c4fe.webp",
    "choices": [
     {
      "text": "CQB를 익힌다.",
      "info": "분노 · 색욕 유리 판정 성공 시, 근접 전술 교본 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "지휘술을 익힌다.",
      "info": "분노 · 질투 유리 판정 실패 시, 신속한 지휘 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "누가 CQB를 익힐까?",
      "info": "분노/색욕 유리 판정 14 이상 시 성공",
      "success": "",
      "fail": ""
     },
     {
      "text": "누가 지휘술을 익힐까?",
      "info": "분노/질투 유리 판정 16 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "마탄의 사수",
    "img": "assets/events/0b85fd6f-ca00-4382-8d8c-700e71dbce18.webp",
    "choices": [
     {
      "text": "믿을 수 없다고 말한다.",
      "info": "오만 · 질투 유리 판정 성공 시, 묵시적 계약 갱신 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "직접 쏘고 싶다고 말한다.",
      "info": "분노 · 오만 유리 판정 성공 시, 흑염 파이프 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "누가 확인할까?",
      "info": "오만/질투 유리 판정 16 이상 시 성공",
      "success": "",
      "fail": ""
     },
     {
      "text": "누가 사용해볼까?",
      "info": "분노/오만 유리 판정 16 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "사무소",
    "img": "assets/events/2d260fcf-76a9-4e84-9803-e954a65140d8.webp",
    "choices": [
     {
      "text": "테이블을 살펴본다.",
      "info": "오만 · 질투 유리 판정 성공 시, 평등 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "사람들을 따라 나간다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "테이블에는 남은 짐이 보인다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떤 수감자가 살펴볼까?",
      "info": "오만/질투 유리 판정 14 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "톱니교단",
    "img": "assets/events/13b3f508-ed78-4ff9-b72b-8553300f95c9.webp",
    "choices": [
     {
      "text": "의자에 앉아본다.",
      "info": "오만 · 질투 유리 판정 진행 시, 톱니 파편 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "지나간다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떤 수감자가 앉을까?",
      "info": "오만/질투 유리 판정 14 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   }
  ]
 },
 {
  "id": 43,
  "title": "증오와 절망",
  "theme": "이벤트 테마",
  "desc": "제6회 발푸르기스의 밤",
  "img": "assets/packs/132dda7c-5fc9-42fc-b5b3-6f0d8f969e94.webp",
  "floors": [
   3,
   3,
   4,
   4
  ],
  "difficulties": [
   "노말",
   "하드"
  ],
  "events": [
   {
    "title": "로보토미 코퍼레이션 중앙본부",
    "img": "assets/events/92083ef2-a436-4b33-af47-b0f15306735a.webp",
    "choices": [
     {
      "text": "가져간다.",
      "info": "선택 시, 트라우마 방지장 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "그냥 둔다.",
      "info": "",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "로보토미 코퍼레이션 창고",
    "img": "assets/events/be61dca7-e164-4c08-afd3-274f9fd35f1d.webp",
    "choices": [
     {
      "text": "우리는 잘 할 거야. 늘 그랬듯이.",
      "info": "선택 시, 가치처분 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "실패할 수도 있지. 늘 그랬듯이.",
      "info": "선택 시, 가치처분 획득",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "절망의 기사 격리실",
    "img": "assets/events/7c2ba450-bd31-4f97-ab4d-a7fa321fa6e6.webp",
    "choices": [
     {
      "text": "모든 것은 변하기 마련이다.",
      "info": "우울 · 오만 · 질투 유리 판정 결과에 따라, 눈물로 벼려낸 검 또는 선택 받지 못한 자 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "나도 지키지 못한 것이 있다.",
      "info": "우울 · 오만 · 질투 유리 판정 결과에 따라, 잿빛 별자리의 가호 또는 선택 받지 못한 자 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "누군가 한 마디를 꺼낼 수 있을까?",
      "info": "우울/오만/질투 유리 판정 16 이상 시 성공",
      "success": "",
      "fail": ""
     },
     {
      "text": "누군가 한 마디를 꺼낼 수 있을까?",
      "info": "우울/오만/질투 유리 판정 12 이상 시 성공",
      "success": "잿빛 별자리의 가호 획득",
      "fail": "선택 받지 못한 자 획득"
     }
    ]
   },
   {
    "title": "증오의 여왕 격리실",
    "img": "assets/events/b5150761-a48e-42d6-9f1f-309fe58103cd.webp",
    "choices": [
     {
      "text": "세상은 선과 악으로만 구분되는 것이 아니다.",
      "info": "분노 · 오만 · 질투 유리 판정 결과에 따라, 마법소녀의 애정 어린 선물 또는 다한 쓸모, 맺힌 증오 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "네가 평화롭지 않게 만들면 되는 것 아닌가?",
      "info": "선택 시, 다한 쓸모, 맺힌 증오 획득.",
      "success": "",
      "fail": ""
     },
     {
      "text": "누가 그 생각을 전달할 수 있을까.",
      "info": "분노/오만/질투 유리 판정 14 이상 시 성공",
      "success": "마법소녀의 애정 어린 선물 획득.",
      "fail": "다한 쓸모, 맺힌 증오 획득."
     }
    ]
   }
  ]
 },
 {
  "id": 49,
  "title": "5호선",
  "theme": "이벤트 테마",
  "desc": "거울굴절철도 5호선",
  "img": "assets/packs/089b2090-a8bd-4244-89e3-0d1e1ff6638b.webp",
  "floors": [
   5,
   6,
   7,
   8,
   9,
   10,
   11,
   12,
   13,
   14,
   15
  ],
  "difficulties": [
   "익스트림",
   "하드"
  ],
  "events": [
   {
    "title": "굴절된 사백송이의 장미",
    "img": "assets/events/2d330dc6-ece5-4985-97fc-e759a9def852.webp",
    "choices": [
     {
      "text": "가시를 부러뜨린다.",
      "info": "색욕 · 질투 유리 판정 성공 시, 탐하는 가시 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "하지 않는다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떤 수감자가 저 가시를 부러뜨릴 수 있을까?",
      "info": "색욕/질투 유리 판정 12 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "굴절된 지난 날의 침낭",
    "img": "assets/events/d7acf7a5-23b8-4ccc-bfae-09bd03b17544.webp",
    "choices": [
     {
      "text": "숨소리를 듣는다.",
      "info": "오만 · 질투 유리 판정. 진행 시, 애달픈 날숨 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "귀를 막는다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떤 수감자가 막아설까?",
      "info": "오만/질투 유리 판정 12 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "회전목마",
    "img": "assets/events/ee2c4457-e102-4dfb-b0cd-e01a8cf63973.webp",
    "choices": [
     {
      "text": "회전목마를 붙잡는다.",
      "info": "색욕 · 나태 유리 판정 성공 시, 깨어질 화포 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "위험하다. 그냥 지나가자.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떤 수감자가 용맹한 모습을 보여줄까?",
      "info": "색욕/나태 유리 판정 12 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   }
  ]
 },
 {
  "id": 107,
  "title": "타래엮기",
  "theme": "이벤트 테마",
  "desc": "",
  "img": "assets/packs/6fd5bf6d-931e-4d6f-8f52-dafff1b47ee3.webp",
  "floors": [
   5,
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "익스트림",
   "하드",
   "노말"
  ],
  "events": [
   {
    "title": "약지 야수파 갤러리",
    "img": "assets/events/259d0711-e8ed-48fd-8d24-99861128814f.webp",
    "choices": [
     {
      "text": "챙긴다.",
      "info": "색욕 유리 판정 성공 시, 모든 것의 뼈대 or 모든 것의 본능 획득 / 실패 시 전투발생",
      "success": "",
      "fail": ""
     },
     {
      "text": "가져가지 않는다.",
      "info": "별도 효과 없음",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자가 나설까?",
      "info": "색욕 유리 판정 16 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "약지 작품 수거",
    "img": "assets/events/3fdcf69a-6ac1-44f8-8b2b-acdbdde459af.webp",
    "choices": [
     {
      "text": "뼈와 근육으로 되어있는 무언가를 집는다.",
      "info": "색욕 · 질투 유리 판정 성공 시, 작품 : 약동 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "살점과 상피로 되어있는 무언가를 집는다.",
      "info": "색욕 · 우울 유리 판정 성공 시, 작품 : 야성 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자가 집어올까?",
      "info": "색욕/질투 유리 판정 16 이상 시 성공",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자가 집어올까?",
      "info": "색욕/우울 유리 판정 16 이상 시 성공",
      "success": "",
      "fail": ""
     },
     {
      "text": "돌아간다.",
      "info": "별도 효과 없음",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "조용한 중지 복도",
    "img": "assets/events/5e72f0c7-25c8-4c38-bf8d-42d26fd287b2.webp",
    "choices": [
     {
      "text": "챙긴다.",
      "info": "질투 유리 판정 성공 시, 중지식 너클 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "챙기지 않는다.",
      "info": "별도 효과 없음",
      "success": "",
      "fail": ""
     },
     {
      "text": "어느 수감자가 나설까?",
      "info": "질투 유리 판정 12 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   }
  ]
 },
 {
  "id": 7,
  "title": "헬스 치킨",
  "theme": "이벤트 테마",
  "desc": "3.5장",
  "img": "assets/packs/a019774c-b136-4715-bbb6-f207bc2e61d7.webp",
  "floors": [
   2,
   2
  ],
  "difficulties": [
   "하드",
   "노말"
  ],
  "events": [
   {
    "title": "가슴살 vs 닭다리살",
    "img": "assets/events/2e279477-c2c7-4f33-9f61-2f235d2baea5.webp",
    "choices": [
     {
      "text": "모두 같은 치킨이다.",
      "info": "선택 시, 뜨거운 육즙 다리살 · 목이 뻑뻑 가슴살 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "육즙의 향연, 다리살이다.",
      "info": "선택 시, 뜨거운 육즙 다리살 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "담백한 그 맛, 가슴살이다.",
      "info": "선택 시, 목이 뻑뻑 가슴살 획득",
      "success": "",
      "fail": ""
     }
    ]
   },
   {
    "title": "탱고",
    "img": "assets/events/c405b5e7-3978-407b-9e3f-6670181fa1a4.webp",
    "choices": [
     {
      "text": "사실대로 이야기해준다.",
      "info": "색욕 유리 판정 성공 시, 오염된 실과 바늘 획득. 색욕 유리 판정 14 이상 시 성공",
      "success": "",
      "fail": ""
     },
     {
      "text": "모른 척 한다.",
      "info": "탱고 닭양념장 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "은근슬쩍 힌트를 준다.",
      "info": "50% 확률로 날카로운 실과 바늘 획득.",
      "success": "",
      "fail": ""
     }
    ]
   }
  ]
 },
 {
  "id": 31,
  "title": "20번구의 기적 BokGak",
  "theme": "이벤트 테마",
  "desc": "5.5장",
  "img": "assets/packs/49ac0a7d-3174-41bf-aded-c33e62e89582.webp",
  "floors": [
   4,
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "하드",
   "익스트림"
  ],
  "events": [
   {
    "title": "노움",
    "img": "assets/events/71002845-e69e-4730-9120-5539eef6e3b4.webp",
    "choices": [
     {
      "text": "조금 더 다가간다.",
      "info": "나태 · 탐식 유리 판정 성공 시, 포장용 상자 or 포장용 끈 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "지나간다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떤 수감자에게 선물을 가져오라 말할까?",
      "info": "나태/탐식 유리 판정 12 이상 시 성공",
      "success": "포장용 상자, 포장용 끈 획득",
      "fail": "포장용 상자 획득"
     }
    ]
   },
   {
    "title": "아늑한 침대",
    "img": "assets/events/6f3f85ab-9c46-4c8b-ba17-aeb73dff537e.webp",
    "choices": [
     {
      "text": "침대에 다가간다.",
      "info": "나태 · 탐식 유리 판정 성공 시, 불 꺼진 랜턴 or 불 꺼진 촛대 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "침대에 다가가지 않는다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떤 수감자가 다가갈 것인가?",
      "info": "나태/탐식 유리 판정 12 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   }
  ]
 },
 {
  "id": 26,
  "title": "꿈이 끝나는",
  "theme": "스토리 테마",
  "desc": "7장",
  "img": "assets/packs/1626904e-e4b1-4aed-b0ea-094ab86895f6.webp",
  "floors": [
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "하드",
   "익스트림"
  ],
  "events": [
   {
    "title": "라만차랜드의 카니발",
    "img": "assets/events/c251f60e-7c7c-4e99-8b9a-36ff69611c27.webp",
    "choices": [
     {
      "text": "말린다.",
      "info": "색욕 · 나태 유리 판정 성공 시, 떨어진 한 방울 획득",
      "success": "",
      "fail": ""
     },
     {
      "text": "무시한다.",
      "info": "",
      "success": "",
      "fail": ""
     },
     {
      "text": "어떤 수감자가 저 소란을 잠재울 수 있을까?",
      "info": "색욕/나태 유리 판정 12 이상 시 성공",
      "success": "",
      "fail": ""
     }
    ]
   }
  ]
 },
 {
  "id": 5,
  "title": "잊혀진 자들",
  "theme": "스토리 테마",
  "desc": "1장",
  "img": "assets/packs/b01a66b0-57e8-4b9d-8484-3f84c55d833e.webp",
  "floors": [
   1,
   1
  ],
  "difficulties": [
   "하드",
   "노말"
  ],
  "events": []
 },
 {
  "id": 6,
  "title": "속하지 못하는",
  "theme": "스토리 테마",
  "desc": "1장",
  "img": "assets/packs/3ddc86aa-6d40-4d27-92c6-125149b46a9d.webp",
  "floors": [
   1,
   1,
   2
  ],
  "difficulties": [
   "하드",
   "노말"
  ],
  "events": []
 },
 {
  "id": 8,
  "title": "카지노 푸어",
  "theme": "스토리 테마",
  "desc": "2장",
  "img": "assets/packs/44f1f198-de07-4d46-a7e7-2773226816c4.webp",
  "floors": [
   1,
   1,
   2
  ],
  "difficulties": [
   "하드",
   "노말"
  ],
  "events": []
 },
 {
  "id": 9,
  "title": "공장 자동화",
  "theme": "스토리 테마",
  "desc": "2장",
  "img": "assets/packs/4fa44ff6-c2d5-43b0-8fdf-af3d81fb62ab.webp",
  "floors": [
   1,
   1,
   2,
   2
  ],
  "difficulties": [
   "하드",
   "노말"
  ],
  "events": []
 },
 {
  "id": 10,
  "title": "사랑할 수 없는",
  "theme": "스토리 테마",
  "desc": "2장",
  "img": "assets/packs/c731339e-91b5-4ab4-8470-c5d0be8691e4.webp",
  "floors": [
   1,
   1,
   2,
   2
  ],
  "difficulties": [
   "하드",
   "노말"
  ],
  "events": []
 },
 {
  "id": 11,
  "title": "못과 망치",
  "theme": "스토리 테마",
  "desc": "3장",
  "img": "assets/packs/af73ee34-01d1-4e34-95b5-c6b7066ce56c.webp",
  "floors": [
   1,
   1
  ],
  "difficulties": [
   "하드",
   "노말"
  ],
  "events": []
 },
 {
  "id": 12,
  "title": "신앙과 침식",
  "theme": "스토리 테마",
  "desc": "3장",
  "img": "assets/packs/0b2870f7-0e44-4b8e-8d80-8c2b15b3f41b.webp",
  "floors": [
   1,
   1,
   2
  ],
  "difficulties": [
   "하드",
   "노말"
  ],
  "events": []
 },
 {
  "id": 13,
  "title": "마주하지 않는",
  "theme": "스토리 테마",
  "desc": "3장",
  "img": "assets/packs/1196e264-0666-4041-8a5c-e0cc6b787d53.webp",
  "floors": [
   2,
   3,
   3
  ],
  "difficulties": [
   "하드",
   "노말"
  ],
  "events": []
 },
 {
  "id": 14,
  "title": "둥지, 공방, 기술",
  "theme": "스토리 테마",
  "desc": "4장",
  "img": "assets/packs/e11d9956-e703-4b56-a373-eb9bd4a237d2.webp",
  "floors": [
   1,
   1,
   2
  ],
  "difficulties": [
   "하드",
   "노말"
  ],
  "events": []
 },
 {
  "id": 15,
  "title": "낙화",
  "theme": "스토리 테마",
  "desc": "4장",
  "img": "assets/packs/a663f7e3-7cf3-4fc7-b430-d5816b10f528.webp",
  "floors": [
   2,
   3,
   3
  ],
  "difficulties": [
   "노말",
   "하드"
  ],
  "events": []
 },
 {
  "id": 16,
  "title": "흘리는 것들",
  "theme": "스토리 테마",
  "desc": "4장",
  "img": "assets/packs/9894242a-1796-4d93-90c5-f1bb9e502ff8.webp",
  "floors": [
   3,
   4,
   4,
   5
  ],
  "difficulties": [
   "노말",
   "하드"
  ],
  "events": []
 },
 {
  "id": 17,
  "title": "변하지 않는",
  "theme": "스토리 테마",
  "desc": "4장",
  "img": "assets/packs/64a7c74a-d9d0-4abf-a743-63b80e8d0f11.webp",
  "floors": [
   4,
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "하드"
  ],
  "events": []
 },
 {
  "id": 18,
  "title": "레이크 월드",
  "theme": "스토리 테마",
  "desc": "5장",
  "img": "assets/packs/fc0abc7e-72df-42bf-b183-85580b272d57.webp",
  "floors": [
   1,
   2
  ],
  "difficulties": [
   "노말",
   "하드"
  ],
  "events": []
 },
 {
  "id": 19,
  "title": "기어오는 심연",
  "theme": "스토리 테마",
  "desc": "5장",
  "img": "assets/packs/f8e36b74-4d2f-49de-9684-09895d509148.webp",
  "floors": [
   3,
   4,
   4,
   5
  ],
  "difficulties": [
   "노말",
   "하드"
  ],
  "events": []
 },
 {
  "id": 20,
  "title": "악으로 규정되는",
  "theme": "스토리 테마",
  "desc": "5장",
  "img": "assets/packs/b0f7ec81-02b7-4978-a3eb-5b5c40be2cb5.webp",
  "floors": [
   4,
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "하드",
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 21,
  "title": "저택의 부산물",
  "theme": "스토리 테마",
  "desc": "6장",
  "img": "assets/packs/fe5459ba-c519-456b-808c-26ecfa2abf5a.webp",
  "floors": [
   1,
   3
  ],
  "difficulties": [
   "노말",
   "하드"
  ],
  "events": []
 },
 {
  "id": 22,
  "title": "어느 세계",
  "theme": "스토리 테마",
  "desc": "6장",
  "img": "assets/packs/a9094c7f-d8b5-45d0-bdbc-5afb9074ead2.webp",
  "floors": [
   3,
   4,
   4,
   5
  ],
  "difficulties": [
   "노말",
   "하드"
  ],
  "events": []
 },
 {
  "id": 23,
  "title": "마음이 어긋나는",
  "theme": "스토리 테마",
  "desc": "6장",
  "img": "assets/packs/56abbb53-6568-45eb-b370-ba559fde84b6.webp",
  "floors": [
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "하드",
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 24,
  "title": "다시 열린 라만차랜드",
  "theme": "스토리 테마",
  "desc": "7장",
  "img": "assets/packs/729f9587-44b7-4839-8de2-e7ec72d3b4c1.webp",
  "floors": [
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "하드",
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 25,
  "title": "끝나지 않는 행렬",
  "theme": "스토리 테마",
  "desc": "7장",
  "img": "assets/packs/b3f9c913-abb1-45dd-80af-950e30ecbc5d.webp",
  "floors": [
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "하드",
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 27,
  "title": "사대 가문과 욕망",
  "theme": "스토리 테마",
  "desc": "8장",
  "img": "assets/packs/f1b27bb4-1b13-4718-949e-05870ec5df36.webp",
  "floors": [
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "하드",
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 28,
  "title": "바라볼 수밖에 없는",
  "theme": "스토리 테마",
  "desc": "8장",
  "img": "assets/packs/32c9b735-9dfb-4542-87d6-2cafe21955af.webp",
  "floors": [
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "하드",
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 29,
  "title": "우.미.다",
  "theme": "이벤트 테마",
  "desc": "4.5장",
  "img": "assets/packs/1dab9033-31a4-468b-a0be-150899be37cb.webp",
  "floors": [
   2,
   2,
   3
  ],
  "difficulties": [
   "하드",
   "노말"
  ],
  "events": []
 },
 {
  "id": 30,
  "title": "20번구의 기적",
  "theme": "이벤트 테마",
  "desc": "5.5장",
  "img": "assets/packs/753d198a-5849-4385-9a5e-677a97e63e32.webp",
  "floors": [
   3,
   4
  ],
  "difficulties": [
   "노말",
   "하드"
  ],
  "events": []
 },
 {
  "id": 44,
  "title": "1호선",
  "theme": "이벤트 테마",
  "desc": "거울굴절철도 1호선",
  "img": "assets/packs/1b063e30-0967-4227-aad1-e6de6c5f6b85.webp",
  "floors": [
   4,
   5,
   6,
   7,
   8,
   9,
   10,
   11,
   12,
   13,
   14,
   15
  ],
  "difficulties": [
   "익스트림",
   "하드"
  ],
  "events": []
 },
 {
  "id": 45,
  "title": "2호선",
  "theme": "이벤트 테마",
  "desc": "거울굴절철도 2호선",
  "img": "assets/packs/af9fc601-74b8-4302-83f1-125e19c72342.webp",
  "floors": [
   4,
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "하드",
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 46,
  "title": "3호선",
  "theme": "이벤트 테마",
  "desc": "거울굴절철도 3호선",
  "img": "assets/packs/7f557f29-60d8-4c9a-9f91-965136d51ac1.webp",
  "floors": [
   5,
   6,
   7,
   8,
   9,
   10,
   11,
   12,
   13,
   14,
   15
  ],
  "difficulties": [
   "익스트림",
   "하드"
  ],
  "events": []
 },
 {
  "id": 47,
  "title": "4호선 - 제 3 구간",
  "theme": "이벤트 테마",
  "desc": "거울굴절철도 4호선",
  "img": "assets/packs/574b406e-9bd8-42be-a1e1-3ab815dce6ff.webp",
  "floors": [
   5,
   6,
   7,
   8,
   9,
   10,
   11,
   12,
   13,
   14,
   15
  ],
  "difficulties": [
   "익스트림",
   "하드"
  ],
  "events": []
 },
 {
  "id": 48,
  "title": "4호선 - 제 4 구간",
  "theme": "이벤트 테마",
  "desc": "거울굴절철도 4호선",
  "img": "assets/packs/8edf5a05-bbe9-41bb-8635-2a9e24a8e7ab.webp",
  "floors": [
   5,
   6,
   7,
   8,
   9,
   10,
   11,
   12,
   13,
   14,
   15
  ],
  "difficulties": [
   "익스트림",
   "하드"
  ],
  "events": []
 },
 {
  "id": 50,
  "title": "가르고 베는 이들",
  "theme": "기본",
  "desc": "참격 사용 개체",
  "img": "assets/packs/7c8a0c3e-b409-46df-992c-faeb4692902c.webp",
  "floors": [
   4,
   5
  ],
  "difficulties": [
   "노말",
   "하드"
  ],
  "events": []
 },
 {
  "id": 51,
  "title": "베어낼 것",
  "theme": "기본",
  "desc": "참격 취약 개체",
  "img": "assets/packs/118453f4-cfd3-442e-b4f5-38709be6de39.webp",
  "floors": [
   1,
   2,
   2,
   3
  ],
  "difficulties": [
   "노말",
   "하드"
  ],
  "events": []
 },
 {
  "id": 52,
  "title": "꿰고 뚫는 이들",
  "theme": "기본",
  "desc": "관통 사용 개체",
  "img": "assets/packs/c3a84c6d-95f9-4648-963b-7d0002886c29.webp",
  "floors": [
   4,
   5
  ],
  "difficulties": [
   "노말",
   "하드"
  ],
  "events": []
 },
 {
  "id": 53,
  "title": "꿰뚫을 것",
  "theme": "기본",
  "desc": "관통 취약 개체",
  "img": "assets/packs/fc2933b9-875b-46cd-964a-677e73742755.webp",
  "floors": [
   1,
   2,
   2,
   3
  ],
  "difficulties": [
   "노말",
   "하드"
  ],
  "events": []
 },
 {
  "id": 54,
  "title": "부수고 깨뜨릴 이들",
  "theme": "기본",
  "desc": "타격 사용 개체",
  "img": "assets/packs/b1ec1a92-6685-4a1a-8db5-a6354ad5ed4a.webp",
  "floors": [
   4,
   5
  ],
  "difficulties": [
   "노말",
   "하드"
  ],
  "events": []
 },
 {
  "id": 55,
  "title": "바스라질 것",
  "theme": "기본",
  "desc": "타격 취약 개체",
  "img": "assets/packs/274009a4-6e68-496d-b816-46dba5c7abb1.webp",
  "floors": [
   1,
   2,
   2,
   3
  ],
  "difficulties": [
   "노말",
   "하드"
  ],
  "events": []
 },
 {
  "id": 56,
  "title": "억눌린 분노",
  "theme": "테마",
  "desc": "분노 속성 사용 개체",
  "img": "assets/packs/44d970b7-1d36-4107-b4f8-d53899e42dbd.webp",
  "floors": [
   3,
   4,
   4,
   5
  ],
  "difficulties": [
   "노말",
   "하드"
  ],
  "events": []
 },
 {
  "id": 57,
  "title": "해방된 분노",
  "theme": "테마",
  "desc": "분노 속성 사용 개체",
  "img": "assets/packs/2147f208-3c26-472d-8fc3-818b727e34fd.webp",
  "floors": [
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "하드",
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 58,
  "title": "감정에 짓눌리는 것",
  "theme": "테마",
  "desc": "분노 속성 취약 개체",
  "img": "assets/packs/1958c511-a5e8-42c6-b2ce-4a5d28ce8330.webp",
  "floors": [
   2,
   3
  ],
  "difficulties": [
   "노말",
   "하드"
  ],
  "events": []
 },
 {
  "id": 59,
  "title": "빠져드는 색욕",
  "theme": "테마",
  "desc": "색욕 속성 사용 개체",
  "img": "assets/packs/31220bd6-5e86-4ac4-a2da-f731fc85c1ae.webp",
  "floors": [
   3,
   4,
   4,
   5
  ],
  "difficulties": [
   "노말",
   "하드"
  ],
  "events": []
 },
 {
  "id": 60,
  "title": "옭아매는 색욕",
  "theme": "테마",
  "desc": "색욕 속성 사용 개체",
  "img": "assets/packs/86925c5a-2e90-49e5-868e-f0ce9b268cd6.webp",
  "floors": [
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "하드",
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 61,
  "title": "감정에 홀리는 것",
  "theme": "테마",
  "desc": "색욕 속성 취약 개체",
  "img": "assets/packs/62b021fe-8f00-48da-aa33-444ade9262fc.webp",
  "floors": [
   2,
   3
  ],
  "difficulties": [
   "노말",
   "하드"
  ],
  "events": []
 },
 {
  "id": 62,
  "title": "헛도는 나태",
  "theme": "테마",
  "desc": "나태 속성 사용 개체",
  "img": "assets/packs/6ae080f3-679f-4a6b-966f-a1d68aac49c6.webp",
  "floors": [
   3,
   4,
   4,
   5
  ],
  "difficulties": [
   "노말",
   "하드"
  ],
  "events": []
 },
 {
  "id": 63,
  "title": "멎어버린 나태",
  "theme": "테마",
  "desc": "나태 속성 사용 개체",
  "img": "assets/packs/239f701a-cdca-4a49-9689-ab9daa053c40.webp",
  "floors": [
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "하드",
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 64,
  "title": "감정 앞에 게으른 것",
  "theme": "테마",
  "desc": "나태 속성 취약 개체",
  "img": "assets/packs/87c40679-02c5-491d-b16d-96056cde51c7.webp",
  "floors": [
   2,
   3
  ],
  "difficulties": [
   "노말",
   "하드"
  ],
  "events": []
 },
 {
  "id": 65,
  "title": "먹어치운 탐식",
  "theme": "테마",
  "desc": "탐식 속성 사용 개체",
  "img": "assets/packs/44c67a21-13d6-427c-a635-826c02a562bd.webp",
  "floors": [
   3,
   4,
   4,
   5
  ],
  "difficulties": [
   "노말",
   "하드"
  ],
  "events": []
 },
 {
  "id": 66,
  "title": "넘쳐흐른 탐식",
  "theme": "테마",
  "desc": "탐식 속성 사용 개체",
  "img": "assets/packs/3d7ce7ea-9c1a-49f0-800d-a6526aa1ae0c.webp",
  "floors": [
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "하드",
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 67,
  "title": "감정에 굶주린 것",
  "theme": "테마",
  "desc": "탐식 속성 취약 개체",
  "img": "assets/packs/393d1411-c9f1-4e73-8b20-68cb862c1953.webp",
  "floors": [
   2,
   3
  ],
  "difficulties": [
   "노말",
   "하드"
  ],
  "events": []
 },
 {
  "id": 68,
  "title": "전락하는 우울",
  "theme": "테마",
  "desc": "우울 속성 사용 개체",
  "img": "assets/packs/a1652c9b-b5fb-4a4c-ab86-228df163cb63.webp",
  "floors": [
   3,
   4,
   4,
   5
  ],
  "difficulties": [
   "노말",
   "하드"
  ],
  "events": []
 },
 {
  "id": 69,
  "title": "가라앉은 우울",
  "theme": "테마",
  "desc": "우울 속성 사용 개체",
  "img": "assets/packs/8fd36b1b-1a04-4366-b536-b455d63d96b7.webp",
  "floors": [
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "하드",
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 70,
  "title": "감정에 침수된 것",
  "theme": "테마",
  "desc": "우울 속성 취약 개체",
  "img": "assets/packs/5878cc5b-c314-4710-b5bc-d4950b3386b0.webp",
  "floors": [
   2,
   3
  ],
  "difficulties": [
   "노말",
   "하드"
  ],
  "events": []
 },
 {
  "id": 71,
  "title": "허세짙은 오만",
  "theme": "테마",
  "desc": "오만 속성 사용 개체",
  "img": "assets/packs/26737667-3773-4176-b20e-0277a366674d.webp",
  "floors": [
   3,
   4,
   4,
   5
  ],
  "difficulties": [
   "노말",
   "하드"
  ],
  "events": []
 },
 {
  "id": 72,
  "title": "독선적인 오만",
  "theme": "테마",
  "desc": "오만 속성 사용 개체",
  "img": "assets/packs/09b2eba0-9dde-4f62-813e-d05a25e6f6df.webp",
  "floors": [
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "하드",
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 73,
  "title": "감정에 복종한 것",
  "theme": "테마",
  "desc": "오만 속성 취약 개체",
  "img": "assets/packs/9515b4d0-008c-473d-8d36-883f8d7d4983.webp",
  "floors": [
   2,
   3
  ],
  "difficulties": [
   "노말",
   "하드"
  ],
  "events": []
 },
 {
  "id": 74,
  "title": "초라한 질투",
  "theme": "테마",
  "desc": "질투 속성 사용 개체",
  "img": "assets/packs/b9af5102-dd1f-4961-8cdc-ab779009245e.webp",
  "floors": [
   3,
   4,
   4,
   5
  ],
  "difficulties": [
   "노말",
   "하드"
  ],
  "events": []
 },
 {
  "id": 75,
  "title": "처량한 질투",
  "theme": "테마",
  "desc": "질투 속성 사용 개체",
  "img": "assets/packs/3dc2b117-3279-4ccc-9771-897ce1008483.webp",
  "floors": [
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "하드",
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 76,
  "title": "감정으로 평가된 것",
  "theme": "테마",
  "desc": "질투 속성 취약 개체",
  "img": "assets/packs/8f508bcb-824d-47b2-8964-d53b4ab6f83e.webp",
  "floors": [
   2,
   3
  ],
  "difficulties": [
   "노말",
   "하드"
  ],
  "events": []
 },
 {
  "id": 77,
  "title": "타오르는 일렁임",
  "theme": "테마",
  "desc": "화상 개체",
  "img": "assets/packs/d7c243cc-b36b-4d93-9680-b667b4a1bb57.webp",
  "floors": [
   3
  ],
  "difficulties": [
   "하드"
  ],
  "events": []
 },
 {
  "id": 78,
  "title": "화왕지절",
  "theme": "테마",
  "desc": "화상 개체",
  "img": "assets/packs/8a27d642-e558-49a7-acc8-77101c0c5069.webp",
  "floors": [
   4,
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "하드",
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 79,
  "title": "새어나온 적혈",
  "theme": "테마",
  "desc": "출혈 개체",
  "img": "assets/packs/25f8f18b-5205-4603-9812-ce688da201a5.webp",
  "floors": [
   3
  ],
  "difficulties": [
   "하드"
  ],
  "events": []
 },
 {
  "id": 80,
  "title": "시산혈해",
  "theme": "테마",
  "desc": "출혈 개체",
  "img": "assets/packs/48848799-3438-4044-9f77-217fa4a7d93d.webp",
  "floors": [
   4,
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "하드",
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 81,
  "title": "어지러운 파동",
  "theme": "테마",
  "desc": "진동 개체",
  "img": "assets/packs/09532cc0-8aef-4ef7-a0f9-213f3a441f46.webp",
  "floors": [
   3
  ],
  "difficulties": [
   "하드"
  ],
  "events": []
 },
 {
  "id": 82,
  "title": "이상진역",
  "theme": "테마",
  "desc": "진동 개체",
  "img": "assets/packs/afc9f9dd-d392-4f3c-aaa9-f387b1565c90.webp",
  "floors": [
   4,
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "하드",
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 83,
  "title": "부서뜨리는 외력",
  "theme": "테마",
  "desc": "파열 개체",
  "img": "assets/packs/44ef48ea-a77f-49a6-8a29-ff7628789d8e.webp",
  "floors": [
   3
  ],
  "difficulties": [
   "하드"
  ],
  "events": []
 },
 {
  "id": 84,
  "title": "파죽지세",
  "theme": "테마",
  "desc": "파열 개체",
  "img": "assets/packs/bb909d98-174e-428c-a609-1310f647e35f.webp",
  "floors": [
   4,
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "하드",
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 85,
  "title": "잠겨드는 아림",
  "theme": "테마",
  "desc": "침잠 개체",
  "img": "assets/packs/b33f156f-ace1-4e3c-bd1c-b25f0e6dd111.webp",
  "floors": [
   3
  ],
  "difficulties": [
   "하드"
  ],
  "events": []
 },
 {
  "id": 86,
  "title": "침잠쇄도",
  "theme": "테마",
  "desc": "침잠 개체",
  "img": "assets/packs/6e88ee45-e33e-41dc-8084-e00d3f65870c.webp",
  "floors": [
   4,
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "하드",
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 87,
  "title": "내쉬어진 한숨",
  "theme": "테마",
  "desc": "호흡 개체",
  "img": "assets/packs/f853c2ce-6ffb-415a-85aa-5a389dd3e122.webp",
  "floors": [
   3
  ],
  "difficulties": [
   "하드"
  ],
  "events": []
 },
 {
  "id": 88,
  "title": "순환호흡",
  "theme": "테마",
  "desc": "호흡 개체",
  "img": "assets/packs/42b29474-818b-4c45-a7d0-378f458b328d.webp",
  "floors": [
   4,
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "하드",
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 89,
  "title": "차오르는 동력",
  "theme": "테마",
  "desc": "충전 개체",
  "img": "assets/packs/fab38c43-4200-463f-ac65-259aecab9282.webp",
  "floors": [
   3
  ],
  "difficulties": [
   "하드"
  ],
  "events": []
 },
 {
  "id": 90,
  "title": "벽력섬전",
  "theme": "테마",
  "desc": "충전 개체",
  "img": "assets/packs/1262d7b1-0018-4903-9157-42da229a1e11.webp",
  "floors": [
   4,
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "하드",
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 91,
  "title": "N사 신 구인회",
  "theme": "테마",
  "desc": "N사 소속 보스",
  "img": "assets/packs/836c978e-cc90-451f-8c37-da93d8f98cfa.webp",
  "floors": [
   11,
   12,
   13,
   14,
   15
  ],
  "difficulties": [
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 92,
  "title": "개화하는 녹림",
  "theme": "테마",
  "desc": "식물 관련 보스",
  "img": "assets/packs/c321a1f0-683f-4346-b370-0d65cc2ce753.webp",
  "floors": [
   11,
   12,
   13,
   14,
   15
  ],
  "difficulties": [
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 93,
  "title": "3호선 - 종착역",
  "theme": "테마",
  "desc": "거울굴절철도 3호선",
  "img": "assets/packs/f15cbfad-ffc4-47ef-8454-67fe71e41490.webp",
  "floors": [
   11,
   12,
   13,
   14,
   15
  ],
  "difficulties": [
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 94,
  "title": "영겁의 굴레",
  "theme": "테마",
  "desc": "불사 관련 보스",
  "img": "assets/packs/dbfdd9e3-c033-4077-903d-56b051f07622.webp",
  "floors": [
   11,
   12,
   13,
   14,
   15
  ],
  "difficulties": [
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 95,
  "title": "우.미.다 게.판",
  "theme": "테마",
  "desc": "4.5장",
  "img": "assets/packs/270a497a-2d99-4125-aaef-3e4b5217ad1e.webp",
  "floors": [
   11,
   12,
   13,
   14,
   15
  ],
  "difficulties": [
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 96,
  "title": "끝도 없이 막힌 길",
  "theme": "테마",
  "desc": "6장",
  "img": "assets/packs/31ca363b-0742-42f9-a969-4c61eb2ab67e.webp",
  "floors": [
   11,
   12,
   13,
   14,
   15
  ],
  "difficulties": [
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 97,
  "title": "혈귀가 되지 못한 자들",
  "theme": "테마",
  "desc": "6.5장, 7장",
  "img": "assets/packs/cc3d71e3-4dc2-441a-9565-3e9a59ec1981.webp",
  "floors": [
   11,
   12,
   13,
   14,
   15
  ],
  "difficulties": [
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 98,
  "title": "아름다운 목소리",
  "theme": "테마",
  "desc": "뒤틀림 보스",
  "img": "assets/packs/12568004-9983-4091-af87-40edb4abeb0e.webp",
  "floors": [
   11,
   12,
   13,
   14,
   15
  ],
  "difficulties": [
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 99,
  "title": "녹빛 여명의 시련",
  "theme": "테마",
  "desc": "제2회 발푸르기스의 밤",
  "img": "assets/packs/cd9ed8ce-50bc-4315-a593-16a8fd462c61.webp",
  "floors": [
   11,
   12,
   13,
   14,
   15
  ],
  "difficulties": [
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 100,
  "title": "어느 도서관의 어느 책 속으로",
  "theme": "테마",
  "desc": "제3회 발푸르기스의 밤",
  "img": "assets/packs/ca22b009-5b02-4a2a-a832-a01c6f54392f.webp",
  "floors": [
   11,
   12,
   13,
   14,
   15
  ],
  "difficulties": [
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 101,
  "title": "현혹, 방황, 불신",
  "theme": "스토리 테마",
  "desc": "",
  "img": "assets/packs/b8db78d2-d7bf-4e0f-9fae-26a0b0ef4034.png",
  "floors": [
   3,
   4,
   4,
   5
  ],
  "difficulties": [
   "노말",
   "하드"
  ],
  "events": []
 },
 {
  "id": 102,
  "title": "교본",
  "theme": "스토리 테마",
  "desc": "",
  "img": "assets/packs/37955472-e82f-4104-9537-65310c3c858b.png",
  "floors": [
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "하드",
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 103,
  "title": "검과 작품",
  "theme": "스토리 테마",
  "desc": "",
  "img": "assets/packs/b183f89c-1eb1-4154-9eeb-f5045eedb9bf.png",
  "floors": [
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "하드",
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 104,
  "title": "끊어지지 않는",
  "theme": "스토리 테마",
  "desc": "",
  "img": "assets/packs/cea42740-4d6b-4c03-b25f-a3888f837679.png",
  "floors": [
   5,
   6,
   7,
   8,
   9,
   10
  ],
  "difficulties": [
   "하드",
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 109,
  "title": "무게를 진 자들",
  "theme": "테마",
  "desc": "",
  "img": "assets/packs/2bf89cf8-df8c-4d97-a6e0-839a839450a1.png",
  "floors": [
   11,
   12,
   13,
   14,
   15
  ],
  "difficulties": [
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 110,
  "title": "삽시호",
  "theme": "테마",
  "desc": "",
  "img": "assets/packs/f76af86c-7475-4b7f-98e4-04898330f10a.png",
  "floors": [
   11,
   12,
   13,
   14,
   15
  ],
  "difficulties": [
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 111,
  "title": "라만차랜드의 주인",
  "theme": "테마",
  "desc": "",
  "img": "assets/packs/5379df8d-320f-49a9-99da-bd74a6537a57.png",
  "floors": [
   11,
   12,
   13,
   14,
   15
  ],
  "difficulties": [
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 112,
  "title": "1호선 : 광기",
  "theme": "테마",
  "desc": "",
  "img": "assets/packs/46a7dac6-3f09-40d4-afaf-3a4cf40c8be5.png",
  "floors": [
   11,
   12,
   13,
   14,
   15
  ],
  "difficulties": [
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 113,
  "title": "축복의 카니발",
  "theme": "테마",
  "desc": "",
  "img": "assets/packs/0839c563-51b9-4591-8847-11e783596c2f.png",
  "floors": [
   11,
   12,
   13,
   14,
   15
  ],
  "difficulties": [
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 114,
  "title": "페어리테일",
  "theme": "테마",
  "desc": "",
  "img": "assets/packs/c8a19eab-6fb4-4f95-a71c-0c9cf7603d30.png",
  "floors": [
   11,
   12,
   13,
   14,
   15
  ],
  "difficulties": [
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 115,
  "title": "한 봄 밤의 꿈 2",
  "theme": "테마",
  "desc": "",
  "img": "assets/packs/e9d50700-74c1-47cb-9735-4159aad79c4d.png",
  "floors": [
   11,
   12,
   13,
   14,
   15
  ],
  "difficulties": [
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 116,
  "title": "코드 퍼플",
  "theme": "테마",
  "desc": "",
  "img": "assets/packs/bda7d88b-297d-4e17-9647-4b2832d37d0b.png",
  "floors": [
   11,
   12,
   13,
   14,
   15
  ],
  "difficulties": [
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 117,
  "title": "핏물진 비린내",
  "theme": "테마",
  "desc": "",
  "img": "assets/packs/66a477ed-ed05-4fe1-b586-22b63328c16d.png",
  "floors": [
   11,
   12,
   13,
   14,
   15
  ],
  "difficulties": [
   "익스트림"
  ],
  "events": []
 },
 {
  "id": 118,
  "title": "즉결처형의 시간",
  "theme": "테마",
  "desc": "",
  "img": "assets/packs/ba01d602-0bd0-4c26-a9da-414d907c09a3.png",
  "floors": [
   11,
   12,
   13,
   14,
   15
  ],
  "difficulties": [
   "익스트림"
  ],
  "events": []
 }
];
