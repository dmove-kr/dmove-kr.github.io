
---
layout: post  
title: Mattermost v5.35 릴리즈 안내  
subtitle: 매터모스트 릴리즈 노트  
date: 2021-05-20
categories: [Mattermost]  
tags: [Mattermost, Release note, Messenger, Slack-alternative, Opensource, 매터모스트, 사내메신저, 기업용메신저]
---
안녕하세요, 디무브 입니다!

5월 17일에 Mattermost의 5.35버전이 배포 되었습니다. 이번 배포에서는 어떠한 기능들이 포함되어 있는 지 한 번 살펴 보겠습니다.

---

### 1. Incident Collaboration - 인시던트 협업

 - **애드혹 업무 (Ad-hoc Tasks)**

인시던트 관리에 참여하는 사람들은 플레이 북에 사전 정의된 작업 템플릿을 사용하여 즉시 작업을 추가, 편집 및 제거하여 새로운 시나리오에 빠르게 적응할 수 있습니다.

![enter image description here](https://mattermost.com/wp-content/uploads/2021/05/Ad-hoc-tasks-2.webp)

- **인시던트 개요 (Stakeholder Overview)** 

각각의 인시던트에는 설명, 참가자 및 상태 업데이트와 같은 주요 정보를 한 눈에 볼 수 있는 개요 페이지가 있습니다.
이를 통해 여러 인시던트에 대한 정보를 유지하고 추가 정보가 필요할 때 쉽게 검색할 수 있습니다.

![enter image description here](https://mattermost.com/wp-content/uploads/2021/05/Incident-Overview-1024x722.webp)

- **인시던트 업무의 자동화**

사용자는 자동화를 구성하여 사고가 발생했을 때 자동으로 다른 채널에 알리고 Web hook 발신을 통해 사고에 대해 신속한 대응을 할 수 있습니다.
    
    -   예시 1 : 서비스 중단 플레이 북은 사고가 발생했을 때 사고 채널에 대한 링크와 함께 엔지니어링 채널에 자동으로 알릴 수 있습니다.
        
    -   예시 2 : Webhook 발신은 Jira에서 티켓 생성, Zoom 통화 시작 또는 이메일 목록에 브로드 캐스트와 같은 작업을 자동화하여 시간을 절약 할 수 있습니다.
    
![enter image description here](https://mattermost.com/wp-content/uploads/2021/05/Incident-Overview-1024x722.webp)

### 2. 접근 권환의 세분화 (Granular Access Control) 

시스템 관리자는 특정 팀에 대한 인시던트 협업 접근 권한을 구성할 수 있습니다. 시스템 콘솔에서 누가 플레이북을 만들고 인시던트를 시작하는지 또는 누가 민감한 정보에 접근할 수 있는지 등에 대한 권한을 지정하여 보다 세부적으로 관리할 수 있게 되었습니다. 

*(Cloud 제품과 E20 버전에서만 가능합니다)*

![enter image description here](https://mattermost.com/wp-content/uploads/2021/05/Access-Control-1.webp)

### 3. 공유 채널 (Shared Channel) 

외부 파트너와의 협업 또는 서로 연결되어 있는 아키텍처에 관계가 있는 Mattermost 고객은 이제 공유 채널을 만들어 두 개 이상의 서로 다른 Mattermost 객체의 사람들을 한 채널에 모을 수 있습니다.
    
-   공유 채널의 기능
    
    -   메시지 게시
        
    -   파일 공유
        
    -   메시지 기록을 검색
        
    -   실시간 동기화
        
다른 Mattermost 객체의 공유 채널과 구성원은 연동되는 아이콘을 통해 식별 할 수 있습니다.

*(Cloud 제품과 E20 버전에서만 가능합니다)*

![enter image description here](https://mattermost.com/wp-content/uploads/2021/05/Shared-channels.webp)

공유 채널 생성을 위한 관계 설정 프로세스는 아래와 같습니다. 
    
- 1단계 : Mattermost 객체 관리자는 AES 256 비트 대칭 암호화 초대와 이를 해독하기 위한 강력한 암호를 생성합니다.
- 2단계 : 수신 관리자는 슬래시 명령을 통해 Mattermost 객체에 초대와 암호를 입력하여 두 서버 간에 보안 연결을 생성합니다. 
- 3단계 : 채널 내에서 파트너가 실행하는 추가 슬래시 명령어는 연결된 서버에 새 채널을 만듭니다.  
        **→** 파트너가 입력 한 모든 콘텐츠는 동기화되어 각 객체의 로컬 데이터베이스에 저장
        
파트너는 자신의 채널 공유를 해제 할 수 있으며, 이때 각 채널은 원래 공유 채널에 게시 한 사람들의 모든 게시물, 반응, 공유 파일 및 표시 이름을 유지합니다.

### 4. 파일 및 문서 검색 기능 

Mattermost에서 파일 검색을 통해 팀의 대화 기록에서 관련 메시지와 파일을 모두 찾을 수 있습니다.
검색은 파일 이름과 일치하거나 지원되는 문서 유형 내에서 일치하는 텍스트를 포함하는 첨부 파일을 찾아줍니다. 
또한 최근에 모든 채널에서 공유 한 파일에 쉽게 접근하고 문서, 사진 또는 비디오와 같은 특정 파일 유형으로 필터링 할 수 있습니다.
![enter image description here](https://mattermost.com/wp-content/uploads/2021/05/file-search.webp)

### 5. 앱 프레임워크(Apps Framework) for 개발자

Mattermost 용 앱을 보다 쉽게 ​​만들고 사용자를 위한 대화 형 통합 환경을 구축 할 수 있는 새로운 앱 프레임 워크를 출시하였습니다.
개발자는 Mattermost 데스크톱과 클라이언트에서 동작하는 대화형 및 자동 완성 슬래시 명령어를 사용할 수 있습니다.
    
-   Mattermost 서버에 플러그인으로 배포되며 Marketplace에서 설치할 수 있습니다.
    
-   클라우드 작업 영역에는 이미 기본적으로 활성화 된 App Framework가 있으며 Zendesk 앱을 개발자 미리 보기로 설치할 수 있습니다.
    
-   커뮤니티 서버의 " [Mattermost Apps](https://community.mattermost.com/core/channels/mattermost-apps "https://community.mattermost.com/core/channels/mattermost-apps") "채널에 가입하여 [첫 번째 앱 만들기](http://developers.mattermost.com/integrate/apps "http://developers.mattermost.com/integrate/apps")를 통해 프레임 워크를 경험할 수 있습니다.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE2MjQxMDE0NTNdfQ==
-->