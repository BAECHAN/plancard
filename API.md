## 규칙

### 변수명명
- params : kebab-case
- pathVariable : kebab-case
- requestBody내 key : camelCase


### postman 이용

- '메모'에 추가정보 작성해두었으니, 만약 궁금한게있다면 '메모'를 확인해보시고 없으면 문의 부탁드립니다.
- API 수정 하실 부분 있으면 언제든지 말씀부탁드립니다. ( DB를 고려하면서 작성하긴했는데 언제든 편하게 말씀해주세요. )
 
## 주의점
디버깅을 위한 에러 메시지는 개발서버에서만 ( 운영서버에서 표출될 경우 보안위협 )

## HTTP Status Code 관리 목록

| Status Code | Status Title | Description | Request Method | Response |
|-------|-------|-------|-------|-------|
| 200 | OK |  GET 요청에 대한 응답으로 리소스 데이터를 반환할 <br /> - 검색목록이 0건인 경우에도 | GET | 가져온 리소스 데이터 |
| 201 | Created | POST 요청으로 새로운 리소스를 생성되었을 때  <br /> - PUT 요청 후 리소스가 없어서 새로 생성한 경우에도  | POST / PUT | 생성된 리소스 데이터 | 
| 204 | No Content | 요청이 성공했지만, 반환할 내용이 없음을 나타냅니다. | PUT / PATCH / DELETE | 없음 |
| 400 | Bad Request | 서버가 요청을 이해할 수 없거나, 유효하지 않을 경우 <br /> - JSON타입을 XML로 바꿔서 보내는 등 잘못된 형식으로 요청한 경우 | ALL | Null |
| 401 | Unauthorized | 인증 토큰이 없는 상태로 보호된 리소스에 접근하는 경우 | ALL | Null |
| 403 | Forbidden | 클라이언트가 리소스에 접근할 권한이 없는 경우 <br /> - 다른 유저나 관리자페이지 등| ALL | Null | 
| 404 | Not Found | 요청된 리소스를 찾을 수 없음을 나타냅니다. <br /> - API 엔드포인트가 존재하지 않는데 접근하려 할 때  <br /> - 리소스를 찾을 수 없어 반영이 안되거나 가져오지 못하는 경우 | ALL | Null |
| 500 | Internal Server Error | 요청을 처리하는 중 서버에서 예외가 발생했거나 DB 처리 과정에서 오류가 발생한 경우 | GET을 제외한 | Null | 
| 504 | Gateway Timeout | 게이트웨이 또는 프록시 서버 역할을 하는 서버에서 다른 서버로의 요청을 일정 시간 내에 응답하지 못했을 경우 | ALL | Null |

<hr />

### 200 - GET 성공 시
```
{
    "status": 200,
    "message": "OK",
    "data": {
      가져온 검색 결과
    },
    "details": "일치하는 정보를 가져왔습니다."
}
```

### 200 - GET 검색결과로 가져온 목록이 0 
```
{
    "status": 200,
    "message": "OK",
    "data": [],
    "details": "일치하는 카드정보들이 없어 가져오지 못했습니다."
}
```
### 200 - GET 검색결과로 가져온 목록이 0이 아닐 때
```
{
    "status": 200,
    "message": "OK",
    "data": [
      {
        가져온 검색 결과1
      },
      {
        가져온 검색 결과2
      },
    ],
    "details": "일치하는 정보를 가져왔습니다.",
    "pagination" : {
         totalPages: 3,
         totalItems: 30,
         currentPage: 1,
         itemsPerPage: 10
    }
}
```


### 201 - POST로 Created 성공한 경우
```
{
    "status": 201,
    "message": "Created",
    "data": {
        "scrap_id": 1
    },
    "details": "선택하신 카드를 스크랩했습니다."
}
```

### 204

없음

### 400
```
{
    "status": 400,
    "message": "Bad Request",
    "data": null
    "details": "요청하신 데이터 타입이 맞지 않습니다."
}
```

### 401
```
{
    "status": 401,
    "message": "Unauthorized",
    "data": null,
    "details": "인증 토큰이 만료되었습니다."
}
```

### 403
```
{
    "status": 403,
    "message": "Forbidden",
    "data": null,
    "details": "해당 리소스에 대한 접근 권한이 없습니다."
}
```
### 404 - Default

```
{
    "status": 404,
    "message": "Not Found",
    "data": null,
    "details": "요청하신 리소스를 찾을 수 없습니다."
}
```

### 404 - 일치하는 리소스가 없는 경우
```
{
    "status": 404,
    "message": "Not Found",
    "data": null
    "details": "일치하는 카드정보가 없어 스크랩을 취소하지 못했습니다."
}
```

### 404 - API 엔드포인트 경로 자체가 잘못되었을 때
```
{
    "status": 404,
    "message": "Not Found",
    "data": null
    "details": "유효한 URL이 아닙니다."
}
```

### 500 - Default
```
{
    "status": 500,
    "message": "Internal Server Error",
    "data": null,
    "details": "예상치 못한 에러가 발생했습니다."
}
```

### 504 - Default
```
{
    "status": 504,
    "message": "Gateway Timeout",
    "data": null,
    "details": "서버의 연결이 원활하지 않습니다."
}
```

## UI

### Loading

### 임의 취소 AbortController

### 오래걸리는 경우 어떻게 처리할지

### refetch 관련
