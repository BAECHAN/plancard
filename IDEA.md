
# 고민

## - 페이지 내에서 액션을 실시간으로 저장시켜야 될 거 같은데 '스텝'으로 관리하도록

## - 로그인 & 회원가입 기능 어디까지 할건지 백엔드랑 이야기해야함

## - 플랜에서 '카드 선택' 시 '플랜 선택' 도 가능하게 해야될 거 같은데

### AS-IS
![image](https://github.com/user-attachments/assets/abaa27aa-f6d8-4b66-9b82-2f10e81474e4)

### TO-BE
> toast bar를 화면 상단에 띄워서 '플랜 - 카드 선택' 버튼을 클릭하여 넘어온 화면이라는 것을 인지시킨다.


- 플랜화면에서 카드 선택 화면은 장바구니가 필요함 바로 보여져야돼 ,, 사이드바에서 바로보여주는 등
- 플랜 화면에서 카드 선택 후 플랜 화면으로 돌아갈 때 모달로 띄우는데 카드별로
1. Explore ( o ) / Mine ( x ) 면 그냥 가져옴
2. Explore ( o ) / Mine ( o ) 둘 다 장바구니에 담았을 때 Mine에 가지고 있으니 중복된 카드는 제거됩니다.
3. Explore ( o ) / Mine ( o ) Explore만 담았을 때는 Mine에 있는 카드로 대체됩니다.


- Day1 Day2 이렇게 Day를 옮길수있도록 하는건 어떨까
- 일정 삭제 Day1만 삭제가능한지
- 스크랩의 경우 필터로만 관리하면, 스크랩한게 Mine에 있는건지 어디에있는건지 모를 수 있으며 필터에 스크랩이 있는지를 확인해야만 인지를 하는 단점이 있는 상황임

## - 플랜 탐험 시 Plan 단위로도 담을 수 있어야하고, Day 단위로도 담을 수 있어야함

## - Day를 서로 바꿔치는 (1일차 -> 2일차로 바꾼다던가 ) 하는 기능 필요

## tslib 

## 회원가입 폼

https://chatgpt.com/share/288d47dc-9395-408c-bf84-121bd3a3f533

## 스켈레톤 UI
카드나 플랜을 스켈레톤 UI 처리하는게 어떨까

스켈레톤을 무작정 적용하지 말고, 기준을 적당히 정하고 적용하자.
응답시간이 빠른 경우 그냥 흰 화면으로 보여주는 게 UX 관점에서 나을 수도 있다.

## 캐러셀 슬라이드
https://swiperjs.com/demos

## 클라이언트 비밀번호 암호화 관련

https://velog.io/@mindev/%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8%EC%97%90%EC%84%9C%EC%9D%98-%EB%B9%84%EB%B0%80%EB%B2%88%ED%98%B8-%EC%95%94%ED%98%B8%ED%99%94%EB%8A%94-%EC%86%8C%EC%9A%A9%EC%9D%B4-%EC%97%86%EB%8B%A4.-with-apple

https://yoonho.site/blog/2020-09-08/HTTPS-plain-text-safety/

클라이언트에서 암호화키를 가지고있는게 크게 보안측면에서 유리하게 가져갈수 없기 때문에 어떻게할지 고민중

## requestAPI 함수 네이밍 컨벤션

데이터 가져올때 - fetch
데이터 생성할때 - create
데이터 수정할때 - update
데이터 삭제할때 - delete
로그인 등 특수한 요청 - x

ex) requestFetchUserData, requestUserLogin, requestUpdateUserData

