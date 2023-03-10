![](./public/favicon_32.png)
## CHAIR COACH
앉은 자세에서도 쉽게 할 수 있는 AI 스트레칭 자세를 제공하는 서비스

배포 주소 ➡️ https://kdt-ai5-team04.elicecoding.com/
<br></br>
<br></br>


## 📜 프로젝트 구성 안내


assets : 프로젝트에서 사용한 이미지, 오디오 파일

components : 공통 컴포넌트 파일 모음

pages : 각 컴포넌트 파일 모음

utils : 중복 기능 함수 모음

styles : 스타일링 파일 모음



<br></br>
## ▶️ 프로젝트 실행

1️⃣ git clone https://kdt-gitlab.elice.io/ai_track/class_05/ai_project/team04/front.git

2️⃣ npm install

3️⃣ npm start

<br></br>
## 🛠 *프로젝트 기술 스택*<br></br>

**React**
- 프론트엔드 팀원 모두 사용 가능한 라이브러리  
- 컴포넌트화를 통해 재사용성이 높음


**Recoil**
- 다른 상태관리 라이브러리에 비해 사용 방법이 쉽고 간단


**styled-component**
- 각자 다른 부분을 개발하기 때문에 class/id가 겹치는 문제를 최소화  
- 상속과 확장을 통해 재사용 용이


**TypeScript**
- 정적 타입을 지원하므로 컴파일 단계에서 오류 포착 가능 
- 명시적인 타입 지정으로 코드의 가독성을 높이고 예측할 수 있게 하며 디버깅이 쉽다.
   
**Chart.js**
- 운동기록, 거북목 진단 결과를 리포트 형식으로 표현 가능.

**Movenet**
- 유저의 실시간 관절 좌표를 인식하기 위한 tensorflow 의 movenet 모델 활용
- 유저의 CPU만 사용하고, 프레임 누락이 발생하기 때문에 RAP(request animation frame) 활용하여 프레임 누락 방지 및 CPU 부담 최소화


<br></br>
## FE 역할 분담
<br></br>
## 박근혁

**1. AI 스트레칭기능**
- Movenet을 활용하여 실시간 유저 관절 좌표 인식
- RAF(request animation frame) 적용
=>setinterval 이용 대비 프레임 누락 방지 및 유저 cpu 부담 최소화
- Socket.io 활용하여 AI 서버와 실시간 소통
=>유저 관절 좌표값을 실시간으로 전송하여, 그에 따른 RES를 받아 UI 적용

**2. 거북목 AI진단기능**
- MoveNet, RAF활용하여 유저의 실시간 관절 좌표 확인
- 알고리즘을 활용한 거북목 각도 계산 구현<br>
=>왼쪽, 오른쪽 인식 스코어 비교 후, 이에 따른 유저 거북목 각도 계산 알고리즘 구현<br>

**3. Push Alarm기능**
- WEB API의 notification 활용하여 진행.<br/>유저별 푸쉬 알람 시간 간격, on off 여부를 서버에 저장 후, 이를 활용하여 푸쉬 알람 서비스 진행하였음.

**4. RefreshToken 활용 Api 통신 세팅**
- Access Token
⇒ 평소 API 통신 시 에는 header에 access token 을 사용하여 통신 진행.
- Access Token 만료 시
⇒ 로컬 스토리지의 Refresh Token 활용하여 서버에 토큰 재발급 요청 (이 때, 리프레쉬 토큰, 엑세스 토큰 두개 다 재발급)
- axios interceptors
⇒ axios 통신 진행할 때, 세팅해 놓은 에러코드로 받을 경우, 서버 토큰 갱신 요청 진행.

**5. 거북목 진단(서베이)**
- Location State 활용하여 프론트파트에서 구현 진행

**6. SNS 로그인(구글,네이버,카카오)기능**
- 각 SNS 로그인 URL 접속 후, 각 사이트에서 URL을 통해 보내는 코드를 searchParams활용하여 서버에 전달 및 로그인 처리 진행.

<br></br>
## 유민지

**1. 전체 디자인 작업**
- Figma 활용

**2. styled-component를 이용한 CSS 스타일 관리**
- Theme, Global 설정
- button, input 스타일 공용화
- 전반적 CSS 작업

**3. 회원관련 작업**
- 이메일 회원가입, 로그인, 회원정보 변경, 회원탈퇴
- 자주사용될 정규식을 utils에 관리
- Recoil, Local Storage를 이용하여 로그인, 로그아웃 관리
- 불필요한 API 통신 방지를 위한 Warnning문구, check아이콘, disabled 사용

**4. 메인페이지 스크롤 애니메이션**
- IntersectionObserver를 활용한 스크롤 애니메이션

<br></br>
## 지수빈

**1. 메인페이지**
- styled-component 이용해 컴포넌트 기반 메인페이지 설계 

**2. 마이페이지**  

1-1) 마이체어 리포트
- Chart.js, styled-components 활용하여 유저의 운동기록 데이터를 년도별, 주차별로 가공하여 Bar 그래프로 출력  

1-2) 거북목 진단 결과  
- 거북목 진단 결과에 따른 점수를 년도별로 가공하여 Line 그래프로 출력
- 해당 년도 거북목 진단 결과 평균 점수에 따른 결과를 3단계로 분류하여 이모지로 출력


**3. 웹캠 기반 웹페이지에서 소켓 통신**
- AI 스트레칭 페이지에서, AI 모델과의 소켓통신이 필요
- nginx reverse proxy로 https가 적용된 환경에서 소켓연결을 위한 wss 설정


