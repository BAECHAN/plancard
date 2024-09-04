## 2024-08-25

### 2차 회의 내용 Creatie에 반영하였습니다.
- [플랜] 에서 [카드] 선택 시 장바구니처럼 선택된 카드를 표출하는 UI를 토글 방식으로 구현
- 담겨있는 카드는 기존 카드보다 작은 사이즈로 단순화 처리
- [플랜] 혹은 [담겨있는 카드] 에서 [카드]에 삭제 버튼 추가
- [플랜]에서 가져온 [담겨있는 카드] 중 [탐험] 에서 선택했지만 내가 이미 소유한 [카드]라면 대체되어 가져오도록 문구 출력

### API Mock Server 생성

Postman을 만들던 도중 Response를 Example로 미리 만들 수 없는 상황이라 고심하던 와중에 Postman에서 Mock Server를 제공하고 있어
이를 활용하려고함

먼저 ERD나 클라이언트 객체 타입을 명시해 두어야 API를 만들 수 있지 않을까 생각..하여 ERD처럼까진 아니더라도 type 정의 파일을 작성해두려고함

## 2024-09-01
- Postman Mock Server API 설계 작성 (초안)
- API.md 파일 생성
- common.d.ts파일 생성 ( TS Define )

## 2024-09-03

### 3차 회의 내용
- Postman API에서 DB 쿼리를 연상케하는 path이름은 제거하도록
- Postman API 보완
- TS Define을 Postman과 동기화
- Postman API를 따라 화면 추가 작성
- StoryBook 명세

### 3차 회의 내용 반영
- ~Postman API에서 DB 쿼리를 연상케하는 path이름은 제거하도록~
- Postman API 보완
  - Country 검색결과
  - City 검색결과
  - 플랜 검색결과
  - 데이 검색결과

- TS Define을 Postman과 동기화
- Postman API를 따라 화면 추가 작성
- StoryBook 명세
