# plancard-FE
여행지 카드 수집 애플리케이션 FE

## 개요
여행지 카드 수집 애플리케이션은 여행을 좋아하는 사람들에게 흥미롭고 유용한 기능을 제공할 수 있는 멋진 아이디어입니다. 이 애플리케이션의 주요 기능을 다음과 같이 정리하고 추가적인 세부 사항을 포함해보겠습니다.

### 주요 기능

1. **여행지 카드 컬렉션 관리**
    - **카드 수집**: 사용자는 여행을 통해 다양한 여행지 카드를 수집할 수 있습니다.
    - **카드 정보**: 각 카드에는 해당 여행지의 사진, 설명, 위치 정보 등이 포함됩니다.
    - **카드 관리**: 사용자는 자신이 보유한 카드를 컬렉션 형태로 관리할 수 있습니다.
    - **카드 등급**: 카드의 희귀성이나 획득 난이도에 따라 등급을 부여할 수 있습니다 (예: 일반, 희귀, 전설).

2. **일정 계획 및 공유**
    - **타로카드처럼 일정 짜기**: 사용자는 여행지 카드를 기반으로 일정 계획을 세울 수 있습니다. 카드를 드래그 앤 드롭하여 일정을 구성하고, 각 여행지 방문 시간을 설정할 수 있습니다.
    - **일정 공유**: 계획한 일정을 다른 사용자와 공유할 수 있습니다. 공유된 일정은 다른 사용자가 참고하거나 자신의 일정에 추가할 수 있습니다.
    - **여행지 추천**: 일정을 세울 때, 방문한 적 없는 주변의 인기 여행지를 추천받을 수 있습니다.

3. **위치 기반 여행지 카드 획득**
    - **위치 인증**: 사용자가 특정 위치에 접근하면, 해당 위치의 여행지 카드를 획득할 수 있습니다. 위치 인증은 GPS를 기반으로 하며, 해당 위치에 실제로 방문해야 카드가 지급됩니다.
    - **무료 카드 획득**: 사용자가 여행지 카드를 가지고 있지 않더라도, 특정 위치에 접근하면 무료로 카드를 획득할 수 있습니다.
    - **이벤트 카드**: 특정 이벤트나 기간 동안만 획득할 수 있는 한정판 카드를 제공하여 사용자 참여를 유도할 수 있습니다.

### 추가 기능 및 고려사항

- **사용자 프로필 및 업적 시스템**: 여행을 많이 다닌 사용자에게 보상이나 업적을 제공하여 참여를 유도합니다.
- **커뮤니티 기능**: 사용자가 서로 여행지 정보를 공유하고, 리뷰나 팁을 남길 수 있는 커뮤니티 기능을 추가합니다.
- **알림 기능**: 사용자가 특정 여행지에 가까워졌을 때 카드 획득 알림을 받도록 설정할 수 있습니다.
- **오프라인 모드**: 여행 중 인터넷 연결이 어려운 경우를 대비하여 오프라인에서도 카드 정보를 볼 수 있도록 합니다.

## 기술

### 백엔드

1. **프로그래밍 언어**: Python, JavaScript (Node.js), Java, Kotlin
2. **웹 프레임워크**: 
    - Python: Django, Flask
    - Node.js: Express.js
    - Java: Spring Boot
    - Kotlin: Ktor
3. **API 개발 및 관리**: RESTful API, GraphQL
4. **인증 및 권한 관리**: JWT, OAuth
5. **실시간 데이터 처리**: WebSockets, Socket.io

### 프론트엔드

1. **프로그래밍 언어**: JavaScript, TypeScript
2. **프레임워크 및 라이브러리**:
    - React.js
    - Vue.js
    - Angular
3. **상태 관리**: Redux, Vuex, MobX
4. **UI 라이브러리**: Material-UI, Bootstrap, Ant Design

### 모바일 앱 개발

1. **프로그래밍 언어**:
    - Java, Kotlin (Android)
    - Swift (iOS)
2. **크로스 플랫폼 프레임워크**:
    - React Native
    - Flutter
    - Ionic

### 데이터베이스

1. **관계형 데이터베이스**: PostgreSQL, MySQL, SQLite
2. **NoSQL 데이터베이스**: MongoDB, Firebase Firestore
3. **인메모리 데이터베이스**: Redis

### 위치 기반 서비스

1. **지도 API**: Google Maps API, Mapbox
2. **위치 서비스**: GPS, Geolocation API

### 기타 도구 및 서비스

1. **클라우드 서비스**: AWS, Google Cloud, Microsoft Azure
2. **서버 관리**: Docker, Kubernetes
3. **CI/CD**: Jenkins, GitHub Actions, Travis CI
4. **버전 관리**: Git, GitHub, GitLab, Bitbucket
5. **테스트**:
    - 프론트엔드: Jest, Mocha, Cypress
    - 백엔드: pytest, JUnit, Mocha/Chai
6. **분석 및 모니터링**: Google Analytics, New Relic, Sentry
7. **디자인 도구**: Figma, Adobe XD, Sketch

### 기술 스택 예시

#### 백엔드
- **언어**: Python
- **프레임워크**: Django (REST framework 사용)
- **데이터베이스**: PostgreSQL
- **인증**: JWT
- **실시간 데이터**: Django Channels

#### 프론트엔드
- **언어**: JavaScript, TypeScript
- **프레임워크**: React.js
- **상태 관리**: Redux
- **UI 라이브러리**: Material-UI

#### 모바일 앱
- **프레임워크**: React Native

#### 클라우드 및 기타
- **클라우드 서비스**: AWS (EC2, S3, RDS)
- **버전 관리**: GitHub
- **CI/CD**: GitHub Actions
- **지도 API**: Google Maps API

