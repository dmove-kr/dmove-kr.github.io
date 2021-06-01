
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
![enter image description here](https://mattermost.com/wp-content/uploads/2021/05/Access-Control-1.webp)


<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIwNjA5NTU2OTVdfQ==
-->