| Status Code | Status Title | Description | Request Method | Response |
|-------|-------|-------|-------|-------|
| 200 | OK |  GET 요청에 대한 응답으로 리소스 데이터를 반환할 때( 검색목록이 0건인 경우에도 ) | GET | 가져온 리소스 데이터 |
| 201 | Created | POST 요청으로 새로운 리소스를 생성되었을 때 응답으로 데이터 없이 반환할 때 | POST | 생성된 리소스 데이터 | 
| 204 | No Content | 요청이 성공했지만, 반환할 내용이 없음을 나타냅니다. | PUT / PATCH / DELETE | 없음 |
| 400 | Bad Request | 서버가 요청을 이해할 수 없거나, 유효하지 않을 경우( JSON타입을 XML로 바꿔서 보내는 등 잘못된 형식으로 요청한 경우 ) | ALL | 없음 |
| 401 | Unauthorized | 인증 토큰이 없는 상태로 보호된 리소스에 접근하는 경우 | ALL | 없음 |
| 403 | Forbidden | 클라이언트가 리소스에 접근할 권한이 없는 경우 ( 다른 유저나 관리자페이지 등 ) | ALL | 없음 | 
| 404 | Not Found | 요청된 리소스를 찾을 수 없음을 나타냅니다. ( API 엔드포인트가 존재하지 않는데 접근하려 할 때) | ALL | 없음 |
