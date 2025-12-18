# 🎯 MIMO - 모임 관리 플랫폼

<div align="center">

![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.4.2-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

**MIMO**는 다양한 모임을 생성하고 관리할 수 있는 통합 모임 관리 플랫폼입니다.

[시작하기](#-시작하기) • [주요 기능](#-주요-기능) • [기술 스택](#-기술-스택) • [프로젝트 구조](#-프로젝트-구조)

</div>

---

## 📋 목차

- [프로젝트 소개](#-프로젝트-소개)
- [주요 기능](#-주요-기능)
- [기술 스택](#-기술-스택)
- [프로젝트 구조](#-프로젝트-구조)
- [시작하기](#-시작하기)
- [환경 변수](#-환경-변수)
- [API 문서](#-api-문서)

---

## 🎯 프로젝트 소개

MIMO는 사용자들이 다양한 관심사 기반의 모임을 쉽게 생성하고 참여할 수 있도록 도와주는 플랫폼입니다. 운동, 스터디, 취미 활동 등 다양한 카테고리의 모임을 만들고, 일정 관리, 채팅, 화상 미팅, 마일리지 시스템 등 모임 운영에 필요한 모든 기능을 제공합니다.

### 🌟 핵심 가치

- **간편한 모임 생성**: 몇 번의 클릭으로 모임을 생성하고 멤버를 모집할 수 있습니다.
- **체계적인 일정 관리**: 정기/비정기 일정을 효율적으로 관리할 수 있습니다.
- **실시간 소통**: 채팅으로 멤버 간 원활한 커뮤니케이션을 지원합니다.
- **투명한 회비 관리**: 마일리지 시스템과 QR 결제로 모임 회비를 투명하게 관리할 수 있습니다.

---

## ✨ 주요 기능

### 👥 모임 관리

- 카테고리별 모임 생성 및 관리 (운동, 스터디, 음악, 요리, 게임 등)
- 지역 기반 모임 검색
- 태그 및 키워드 기반 모임 검색
- 모임 멤버 관리 (가입 신청, 승인, 탈퇴)
- 모임 리뷰 및 평점 시스템

### 📅 일정 관리

- 정기 일정 및 비정기 일정 생성
- 일정 참여 신청 및 관리
- 일정별 알림 기능

### 💬 실시간 채팅

- WebSocket 기반 실시간 채팅
- 모임별 채팅방 자동 생성
- 채팅 메시지 Redis 캐싱 및 배치 저장

### 💰 마일리지 & 결제

- 모임별 마일리지 시스템
- QR 코드 기반 간편 결제
- 납부 내역 및 미납 내역 조회
- 회비 분할 납부 (Installment) 기능

### 📋 게시판

- 모임별 게시판 생성 및 관리
- 게시글 작성/수정/삭제
- 댓글 및 좋아요 기능
- 이미지 첨부 기능

### 📸 앨범

- 모임 활동 사진 업로드
- 갤러리 형태의 사진 관리

### 🔔 알림

- 일정 알림
- 모임 활동 알림

---

## 🛠 기술 스택

### Backend

|         기술         |  버전  | 설명              |
| :------------------: | :----: | :---------------- |
|       **Java**       |   17   | 프로그래밍 언어   |
|   **Spring Boot**    | 3.4.2  | 백엔드 프레임워크 |
| **Spring Data JPA**  |   -    | ORM               |
|     **QueryDSL**     | 5.0.0  | 타입 안전 쿼리    |
|   **Spring Batch**   |   -    | 배치 처리         |
| **Spring WebSocket** |   -    | 실시간 통신       |
|      **MySQL**       |   -    | 메인 데이터베이스 |
|      **Redis**       |   -    | 캐싱 & 세션 관리  |
|      **AWS S3**      |   -    | 파일 스토리지     |
|     **OpenVidu**     | 2.31.0 | 화상 채팅         |
|       **JWT**        | 0.11.5 | 인증 토큰         |

### Frontend

|         기술         |  버전  | 설명                 |
| :------------------: | :----: | :------------------- |
|      **React**       | 19.0.0 | UI 라이브러리        |
|    **TypeScript**    |  5.6   | 프로그래밍 언어      |
|       **Vite**       | 6.0.5  | 빌드 도구            |
|   **Tailwind CSS**   | 4.0.0  | CSS 프레임워크       |
|   **React Query**    | 5.66.0 | 서버 상태 관리       |
|     **Zustand**      | 5.0.3  | 클라이언트 상태 관리 |
|   **React Router**   | 7.1.3  | 라우팅               |
| **React Hook Form**  | 7.54.2 | 폼 관리              |
|     **STOMP.js**     | 7.0.0  | WebSocket 클라이언트 |
| **OpenVidu Browser** | 2.31.0 | 화상 채팅 클라이언트 |
|    **Storybook**     | 8.5.2  | UI 컴포넌트 문서화   |

### Infrastructure

|        기술        | 설명                         |
| :----------------: | :--------------------------- |
|     **Docker**     | 컨테이너화                   |
| **Docker Compose** | 멀티 컨테이너 오케스트레이션 |
|     **Nginx**      | 리버스 프록시 & 로드 밸런서  |
| **Let's Encrypt**  | SSL 인증서                   |
|   **SonarCloud**   | 코드 품질 분석               |

### 인증

- **Google OAuth2**: 소셜 로그인

---

## 📁 프로젝트 구조

```
MIMO/
├── 📂 backend/                    # Spring Boot 백엔드
│   ├── 📂 src/main/java/com/bisang/backend/
│   │   ├── 📂 account/           # 계좌 관리
│   │   ├── 📂 alarm/             # 알림 기능
│   │   ├── 📂 auth/              # 인증 (OAuth2, JWT)
│   │   ├── 📂 board/             # 게시판
│   │   ├── 📂 chat/              # 채팅 (WebSocket)
│   │   ├── 📂 common/            # 공통 설정 & 예외 처리
│   │   ├── 📂 installment/       # 분할 납부
│   │   ├── 📂 invite/            # 초대 기능
│   │   ├── 📂 qrcode/            # QR 코드 결제
│   │   ├── 📂 s3/                # 파일 업로드
│   │   ├── 📂 schedule/          # 일정 관리
│   │   ├── 📂 team/              # 모임(팀) 관리
│   │   ├── 📂 transaction/       # 거래 내역
│   │   ├── 📂 user/              # 사용자 관리
│   │   └── 📂 videocall/         # 화상 채팅
│   ├── 📄 build.gradle
│   └── 📄 Dockerfile
│
├── 📂 frontend/                   # React 프론트엔드
│   ├── 📂 src/
│   │   ├── 📂 apis/              # API 호출 함수
│   │   ├── 📂 components/
│   │   │   ├── 📂 atoms/         # 기본 UI 컴포넌트
│   │   │   ├── 📂 molecules/     # 복합 UI 컴포넌트
│   │   │   └── 📂 organisms/     # 페이지 섹션 컴포넌트
│   │   ├── 📂 hooks/             # 커스텀 훅
│   │   ├── 📂 pages/             # 페이지 컴포넌트
│   │   ├── 📂 stores/            # Zustand 스토어
│   │   ├── 📂 types/             # TypeScript 타입 정의
│   │   └── 📂 utils/             # 유틸리티 함수
│   ├── 📄 package.json
│   └── 📄 Dockerfile
│
├── 📄 docker-compose.yml          # Docker Compose 설정
├── 📄 nginx.conf                  # Nginx 설정
└── 📄 README.md
```

---

## 🚀 시작하기

### 사전 요구사항

- **Docker** & **Docker Compose**
- **Java 17** (로컬 개발 시)
- **Node.js 18+** (로컬 개발 시)

### Docker로 실행

```bash
# 저장소 클론
git clone https://github.com/your-username/MIMO.git
cd MIMO

# 환경 변수 설정
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
# .env 파일을 열어 필요한 값 설정

# Docker Compose로 실행
docker-compose up -d
```

### 로컬 개발 환경

#### Backend

```bash
cd backend

# Gradle 빌드
./gradlew build

# 애플리케이션 실행
./gradlew bootRun
```

#### Frontend

```bash
cd frontend

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# Storybook 실행
npm run storybook
```

---
