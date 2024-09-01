| Status Code | Status Title | Description | Request Method | Response |
|-------|-------|-------|-------|-------|
| 200 | OK |  GET 요청에 대한 응답으로 리소스 데이터를 반환할 <br /> - 검색목록이 0건인 경우에도 | GET | 가져온 리소스 데이터 |
| 201 | Created | POST 요청으로 새로운 리소스를 생성되었을 때 응답으로 데이터 없이 반환할 때 <br /> - PUT 요청 후 리소스가 없어서 새로 생성한 경우에도  | POST / PUT | 생성된 리소스 데이터 | 
| 204 | No Content | 요청이 성공했지만, 반환할 내용이 없음을 나타냅니다. | PUT / PATCH / DELETE | 없음 |
| 400 | Bad Request | 서버가 요청을 이해할 수 없거나, 유효하지 않을 경우 <br /> - JSON타입을 XML로 바꿔서 보내는 등 잘못된 형식으로 요청한 경우 | ALL | 없음 |
| 401 | Unauthorized | 인증 토큰이 없는 상태로 보호된 리소스에 접근하는 경우 | ALL | 없음 |
| 403 | Forbidden | 클라이언트가 리소스에 접근할 권한이 없는 경우 <br /> - 다른 유저나 관리자페이지 등| ALL | 없음 | 
| 404 | Not Found | 요청된 리소스를 찾을 수 없음을 나타냅니다. <br /> - API 엔드포인트가 존재하지 않는데 접근하려 할 때  <br /> - GET을 제외한 PUT PATCH DELETE 하려는데 리소스를 찾을 수 없어 반영이 안된 경우 | ALL | 없음 |


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

### 200 - GET 검색결과로 가져온 목록이 0 이거나, 가져올 데이터가 없는 경우
```
{
    "status": 200,
    "message": "OK",
    "data": null,
    "details": "일치하는 카드정보가 없어 가져오지 못했습니다."
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
         totalPages: number,
         totalItems: number,
         currentPage: number,
         itemsPerPage: number
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
    "details": "요청하신 형식이 잘못되었습니다. "
}
```

### 401
```
{
    "status": 401,
    "message": "Unauthorized",
    "data": null
    "details": "인증 토큰이 만료되었습니다."
}
```

### 403
```
{
    "status": 403,
    "message": "Forbidden",
    "data": null
    "details": "접근 권한이 없습니다."
}
```

### 404 - GET 말고 나머지 Method에서 일치하는 리소스가 없어 반영을 못한 경우
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
