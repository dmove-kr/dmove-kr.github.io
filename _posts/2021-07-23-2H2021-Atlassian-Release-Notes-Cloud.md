---
layout: post
title: 2021 Atlassian 주요 제품 릴리즈 노트 (May ~ July) - Cloud
Subtitle: Release Note
date: 2021-07-23
categories: [Atlassian Release Note]
tags: [Atlassian, Atlassian Cloud, 아틀라시안, 아틀라시안클라우드, Jira Cloud, Release, Release Note, Jira Sofrware, Jira Service Management, Confluence, Wiki]
---



![릴리즈 노트 이미지](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20Server-1.png)

안녕하세요, 디무브 입니다! :balloon:



이번 시간에는 5월에서 지금까지 아틀라시안의 주요 제품인 Jira Software , JSM, Confluence에서 어떠한 변화가 있었는지 확인해보시는 시간을 가지겠습니다.



# 1. Jira Software

 

## 5월

---

<p></p>

**1. 사용자가 프로젝트 페이지로부터 Confluence 접근이 허용됩니다** **[ROLLING OUT]** **[NEW THIS WEEK]** 

![](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Cloud/Jira/M-J-Cloud-Jira-1.png)

<p></p>

 사이트에서 Jira 및 Conlfuence가 활성화된 경우 적절한 권한이 있는 사용자는 Jira의 프로젝트 페이지 기능을 사용하여 Confluence에 액세스하고 관련 문서와 컨텐츠를 찾을 수 있습니다. 사용자는 사이트 설정에서 허용하는 경우에만 액세스를 요청하거나 Confluence에 가입할 수 있습니다.

 

[여기](https://support.atlassian.com/user-management/docs/specify-how-users-get-site-access/)를 클릭하여 사이트 설정에 대해 자세히 알아보세요!



---



<p></p>

**2. Jira 사이트 가져오기에 대한 익명 액세스 확인** **[ROLLING OUT]**  

 

 이 새로운 보안 검사는 마이그레이션 후 프로젝트, 대시보드 및 필터가 익명 액세스될 가능성이 있는지 미리 알려줍니다. 

 

익명 액세스는 대중이 데이터를 이용할 수 있고 온라인으로 검색할 수 있음을 의미합니다. 마이그레이션 전에 공용 액세스 권한을 부여할지 여부를 선택할 수 있습니다. 영향을 받는 프로젝트, 대시보드 및 필터를 검토하려면 .csv 파일을 다운로드하면 됩니다.



---



 

**3. 차세대 보드 및 백로그에 직접적으로 인사이트 기능을 사용할 수 있습니다**  **[ROLLING OUT]**  



 ![](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Cloud/Jira/M-J-Cloud-Jira-2.png){: .imgcenter}  

 프리미엄 플랜 고객은 보드와 백로그에서 Insights를 확인하시기 바랍니다. 이 새로운 데이터중심 기능은 기존 프로세스를 조정하고, 더 나은 결과를 도출하고, 확신을 가지고 계획을 수립할 수 있도록 지원합니다.

 

이 기능은 정말 새롭고 팀은 피드백을 간절히 원할겁니다. 들어가서 시도해 보고 당신의 경험을 팀원에게 공유하세요! 그것은 팀의 상황을 바꿀 수 있습니다.



차세대 프로젝트에 대해 자세히 알고 싶으시면 [여기](https://support.atlassian.com/jira-software-cloud/docs/view-and-understand-insights-in-next-gen-projects/)를 클릭해주세요!

<p></p>

---





**4. 미래의 스프린트를 생성하고 스케줄 하세요!** **[ROLLING OUT]**  



스프린트 계획은 2주에 한번씩 하는 것이 좋습니다. 

하지만 그 직후에 일어나야 할 일을 줄을 설 수 있다면 얼마나 만족스럽고 도움이 될까요? 시작 날짜와 종료 날짜에 스프린트와 연필을 작성합니다. 여러분은 향후 스스로에게 고마워할 것입니다.

향후 스프린트를 계획하려면 다음과 같은 지침을 따르시기 바랍니다:

------

1. Jira 소프트웨어 프로젝트로 이동하십시오.
2. 왼쪽의 프로젝트 메뉴에서 Backlog(백로그)를 선택합니다.
3. Create sprint를 클릭합니다.
4. 날짜 추가(✏일)를 선택하여 스프린트에 날짜를 추가합니다. 

[팀 관리 프로젝트를 위한 향후 스프린트에 날짜를 추가하는 방법에 대해 자세히 알아보십시오.](https://support.atlassian.com/jira-software-cloud/docs/enable-sprints/)

[회사 관리 프로젝트를 위한 향후 스프린트에 날짜를 추가하는 방법에 대해 자세히 알아보십시오.](https://support.atlassian.com/jira-software-cloud/docs/plan-a-sprint/)

------

 

**4. 강화된 릴리즈 노트 기능**

 

**Release > Version > Release notes**로 이동하여 향상된 릴리스 정보 기능에 액세스합니다. Jira 소프트웨어 프로젝트의 수정된 릴리스 정보 페이지에서는 다음 옵션을 제공합니다.

<p></p>

---



- 릴리즈 노트를 마크다운 형식으로 생성할 수 있습니다.
- 레이아웃 및 이슈 유형에 따라 릴리스 노트 재생성
- 편집기에서 릴리스 정보 포맷 및 업데이트
- 릴리스 노트를 클립보드에 복사할 수 있습니다.  

---

<p></p>



**5. 클라우드 제품과 관련된 마켓플레이스 앱 검색 기능** **[ROLLING OUT]**  

 

틀라시안 제품과 통합되는 마켓플레이스 앱을 검색할 수 있는 새로운 장소를 추가하고 있습니다. 모든 제품에서 빠른 시작, 앱 메뉴 및 "전환" 메뉴와 같은 기본 워크플로우의 권장 사항을 확인할 수 있습니다. 

 

사용 중인 제품에 따라 관련 앱만 추천합니다. 예를 들어, Jira 소프트웨어를 사용 중인 경우 GitHub 또는 GitLab 앱을 사용하여 팀 워크플로를 개선하는 것이 좋습니다.

 

이 업데이트는 시각적인 업데이트일 뿐이므로 모든 권한 및 설정에 영향을 주지 않습니다. Atlassian 제품의 관리 페이지에서 언제든지 앱을 실행, 실행 중지, 설치 및 제거할 수 있습니다.

---



<p></p>

**6. 프로젝트 페이지 개선을 통해 Jira와 Confluence 연결** **[ROLLING OUT]**  

 

Jira Software의 "페이지" 기능을 "프로젝트 페이지"로 변경하고 몇 가지 개선 사항을 적용하여 보다 쉽게 사용하고 이해할 수 있도록 했습니다.

 

프로젝트 페이지는 Jira 소프트웨어 프로젝트를 Confluence 공간과 연결하여 문서를 한 곳에 보관합니다. Confluence가 아직 사이트에 없는 경우 사이트 관리자는 왼쪽 탐색 패널에 있는 프로젝트 페이지 기능을 사용하여 무료 평가판 제품을 시작할 수 있습니다.

 

연결된 공간의 페이지는 Jira의 프로젝트 페이지 기능에 정리됩니다. 모든 페이지 구성과 Confluence의 사용 권한이 유지됩니다. 적절한 권한이 있는 사용자는 프로젝트 페이지를 사용하여 Confluence 페이지를 생성하고 기존 문서를 볼 수 있습니다.



---



## 6월

---



**1. 팀 관리 프로젝트 : 종료된 스프린트를 다시 실행하도록 합니다** **[ROLLING OUT]**  **[NEW THIS WEEK]**  

 

팀 관리 프로젝트에서 실수로 스프린트를 닫은 경우 프로젝트의 보고서 섹션에 있는 보고서를 통해 스프린트를 다시 열 수 있습니다. 많은 분들이 요청하신 사항이라는 말을 듣고 이 문제를 해결해 왔습니다.

[여기](https://support.atlassian.com/jira-software-cloud/docs/reopen-a-sprint/)를 클릭하여 스프린트 재실행에 대해 알아보세요!



---



 <p></p>

**2. 배포 데이터가 있는 모든 프로젝트에 대해 배포 기능 실행** **[ROLLING OUT]**  

 

Jira 프로젝트에 코드 개발 툴을 통합하면 배포 기능을 사용하여 이슈를 일정 기간 동안 파악할 수 있습니다.

[여기](https://support.atlassian.com/jira-software-cloud/docs/enable-deployments/#Understand-your-deployments-view)를 클릭하여 배포에 대해 자세히 알아보고 이 기능을 최대한 활용하세요!

<p></p>

------

## 7월

---

<p></p>

**1. 프로젝트 페이지 : 프로젝트를 페이지 및 개선된 마이너 UI와 연결** **[ROLLING OUT]**  

 

프로젝트 페이지를 업데이트하여 전체 공간이 아닌 단일 Confluence 페이지를 연결할 수 있습니다. Connect to different space or page(다른 공간에 연결) 아이콘(화살표 두 개로 표시됨)을 선택하여 이 작업을 수행할 수 있습니다.  [자세히 알아보기](https://support.atlassian.com/jira-software-cloud/docs/enable-and-disable-pages/)

프로젝트 페이지에 대한 몇 가지 사소한 UI도 변경했습니다:



- 화면 하단에 Powered by Confluence라는 메시지가 표시됩니다. 이 옵션을 선택하면 연결된 Confluence 공간으로 이동합니다.
- 연결된 공간 또는 페이지의 아이콘과 UI가 업데이트되었습니다.
- 페이지 이름, 기여자 및 마지막으로 수정한 페이지에 대한 정보는 유지되었지만 읽기 쉽도록 레이블이 제거되었습니다.

<p></p>

------

 

**2. 배포 데이터가 있는 모든 프로젝트에 대해 배포 기능 실행**   **[NEW THIS WEEK]**  

<p></p>

![](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Cloud/Jira/M-J-Cloud-Jira-3.png){: .imgcenter}



Jira 프로젝트에 코드 개발 툴을 통합하면 배포 기능을 사용하여 이슈를 일정 기간 동안 파악할 수 있습니다.

[여기](https://support.atlassian.com/jira-software-cloud/docs/enable-deployments/#Understand-your-deployments-view)를 클릭하여 배포에 대해 자세히 알아보고 이 기능을 최대한 활용하세요!



------



# 2. Jira Service Management

 

## 5월

 

---



**1. 대기열을 관리하여 팀의 작업 우선 순위 지정** **[ROLLING OUT]**  

 <p></p>

관리자는 비즈니스 크리티컬 대기열을 팀 우선 순위 그룹으로 구성하여 항상 모든 에이전트에 표시할 수 있습니다. 사용하지 않는 대기열을 다른 그룹으로 이동하여 기본적으로 에이전트의 초점을 벗어나도록 하십시오. 프로젝트 사이드바에서 별표 및 팀 우선 순위 큐에 대해서만 문제 수를 새로 고칩니다.

 

[여기](https://support.atlassian.com/jira-service-management-cloud/docs/arrange-queues-into-groups-to-prioritize-work-for-your-team/)를 클릭하여 큐 그룹에 대해 자세히 알아보세요!



---



 <p></p>

**2. 이메일 처리 로그에서 검색 및 필터링**

 <p></p>

이제 Jira Service Management의 수신 이메일 처리 로그에서 검색 및 필터를 사용하여 찾고 있는 정확한 메시지를 찾을 수 있습니다. 이메일 주소, 제목 줄 또는 문제 키로 검색합니다. 상태 및 날짜 범위별로 필터링할 수도 있습니다.

 

[여기](https://support.atlassian.com/jira-service-management-cloud/docs/view-the-email-processing-and-connectivity-logs/)를 클릭하여 로그 프로세싱에 대해 자세히 알아보세요!



---



## 6월

---

<p></p>

**1. 변경된 달력을 사용하여 변경 요청 보기, 스케줄 생성 및 리스케줄을 활용해보세요!** **[ROLLING OUT]**  

 ![](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Cloud/Jira%20Service%20Management/M-J-Cloud-JSM-1.png)

변경된 달력을 사용하여 모든 서비스 프로젝트에서 변경 요청을 보고, 생성하고, 다시 예약할 수 있습니다. 달력에서 시간을 선택하여 새 변경 요청을 만들거나, 기존 요청을 클릭하여 끌어서 다시 예약하거나, 필터를 사용하여 필요한 항목을 신속하게 찾을 수 있습니다.

달력을 보려면 서비스 프로젝트로 이동한 다음 왼쪽 탐색에서 일정 변경을 선택하십시오.

[여기](https://support.atlassian.com/jira-service-management-cloud/docs/what-is-the-change-calendar/)를 클릭하여 변경된 달력에 대하여 자세히 알아보세요!



---



**2. 기술 자료 공간에서 초안 관리** **[ROLLING OUT]**  

초안은 진행 중이거나 게시 되지 않은 기술 자료 문서입니다. 이제 기술 자료 내에서 작성 및 기여하고 있는 초안에 대한 개요를 볼 수 있습니다.

[여기](https://support.atlassian.com/jira-service-management-cloud/docs/view-a-list-of-your-drafts/)를 클릭하여 초안 목록을 보는 방법에 대해 자세히 알아보세요!  



---





  **3. 변경 요청의 영향을 받는 서비스에서 발생한 미해결 인시던트 확인** **[ROLLING OUT]**  

 

Jira Service Management에서 변경 관리를 볼 때 , 여러분은 미해결 인시던트로 인해 영향을 받는 서비스를 확인할 수 있습니다.  이슈 보기에서 이러한 경고는 **영향을 받는 서비스** 필드에 표시됩니다.



---



 

**4. 헬프 데스크에서 사용자 경험이 개선됩니다!** **[ROLLING OUT]**  **[NEW THIS WEEK]**  

![img](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Cloud/Jira%20Service%20Management/M-J-Cloud-JSM-2.png)

 

헬프 데스크에서 Jira 관리자가 새롭고 개선된 사용자 지정 환경을 이용할 수 있습니다. 

관리자는 이제 공지사항 관리, 헬프 센터 모양 및 느낌 관리 외에도 로그인 페이지에 메시지를 추가하여 고객에게 로그인 프로세스를 안내할 수 있습니다.

관리자는 로그인 메시지, 공지 사항, 도움말 센터 이름 및 홈 페이지 제목에 대한 번역을 추가할 수도 있습니다

  

---



<p></p>

**5. 에이전트에 대한 기술 자료 문서 보기 향상**   **[NEW THIS WEEK]**  

 <p></p>

당신의 에이전트는 지식 베이스에 있는 문서를 볼 때 훨씬 더 편하게 보실 수 있습니다. 자료의 이미지를 선택하면 이미지가 확장되고 비디오를 인라인으로 재생할 수 있습니다. 또한 우리는 Confluence의 환경에 걸맞게 스타일과 포맷을 훨씬 더 개선했습니다.

<p></p>



---



## 7월

 

**1. 그룹으로부터 요청 수락** **[ROLLING OUT]**   **[NEW THIS WEEK]**  

 

좋은 소식이에요, 여러분! 이제 승인된 소스를 통해 그룹을 사용할 수 있습니다. 모든 사람으로 부터 요청을 요청을 수행하려면 각 그룹의 최소 인원 또는 최소 인원(어느 그룹의 사람인지에 관계없이)이 필요합니다.

 

[여기](https://support.atlassian.com/jira-service-management-cloud/docs/add-an-approval-to-a-workflow/)를 클릭하여 워크플로우에 승인을 어떻게 추가하는지 알아보세요!

 

---



**2. Confluence 서버 사이트에서 기술 자료로 공간 연결**  **[ROLLING OUT]**   **[NEW THIS WEEK]**  

 

이제 Confluence 서버 사이트의 공간에서 Jira Service Management Cloud의 기술 자료로 문서를 가져와 셀프 서비스 데스크를 생성하실  수 있습니다.



---



 

**3. e-메일의 외부 의견 허용** **[ROLLING OUT]**   **[NEW THIS WEEK]**  

 

이제 유효한 문제 키가 포함된 외부 전자 메일을 문제에 대한 주석으로 추가할 수 있습니다.

[여기](https://support.atlassian.com/jira-service-management-cloud/docs/allow-external-emails-to-be-added-as-comments-on-issues/)를 클릭하여 어떻게 외부 이메일로부터 코멘트가 가능하게 하는지 확인해보세요!



---



 

**4. OAuth를 사용하여 사용자 정의 Google 이메일 주소 설정** **[ROLLING OUT]**  

 

여러분이 Jira 사이트 관리자라면 이제 어플리케이션별 암호 대신 OAuth를 사용하여 사용자 지정 Google 이메일 계정을 추가할 수 있습니다.

[여기](https://support.atlassian.com/jira-service-management-cloud/docs/add-an-email-account/)를 클릭하여 어떻게 커스텀 이메일 계정을 추가하는지 확인해보세요!

 

---



# 3. Confluence

 

## 5월

---



**1. 컨텐츠 편집 속도 향상** **[NEW THIS WEEK]**  

Confluence 탐색 또는 홈 페이지의 최근 메뉴에 페이지와 블로그가 있으면 컨텐츠 편집으로 더 빠르게 이동할 수 있습니다. 페이지 이름 옆에 있는 편집 아이콘을 선택하여 편집 환경을 엽니다.

 

이 작업은 공간 사이드바에서 페이지를 선택하는 경우 표시되는 페이지 카드에서 이미 사용할 수 있습니다.



---



 **2. 당신의 공간을 색다르게 보실 수 있습니다!** **[ROLLING OUT]**   **[NEW THIS WEEK]**  

페이지 간의 관계가 중요할 때는 공간의 페이지를 트리처럼 보는 것이 좋지만, 이제는 공간의 페이지를 보는 방법에 대한 옵션이 더 많아졌습니다.

 

공간 사이드바의 페이지 옆에 있는 •••를 선택하여 페이지를 다르게 봅니다. 다른 보기로 전환하면 트리 관계가 제거되고 페이지가 마지막으로 업데이트된 날짜 또는 제목별로 정렬된 페이지 목록이 표시됩니다. 공백에서 선택하는 사항은 변경할 때까지 유지됩니다.



---



 

**3. 페이지 또는 블로그 게시 시기 제어** **[ROLLING OUT]**  

프로젝트 시작, 제품 릴리스 또는 회사 발표와 동시에 적절한 시점에 페이지 또는 블로그를 게시해야 하는 경우가 있습니다. 일정 미리 알림이나 메모에 의존하지 않고 Confluence에서 예약할 수 있습니다.

 

최초 게시 또는 21번째 게시 전에 Schedule publish(예약 게시)로 이동하여 날짜와 시간을 설정할 수 있습니다. 앞서 언급한 사용자나 해당 페이지, 블로그 또는 해당 공간을 보고 있는 사용자에게는 콘텐츠가 실제로 게시될 때까지 알림이 전송되지 않습니다.

 

페이지 또는 블로그가 특정 요일 및 시간에 게시되도록 설정되어 있는지 확인하기 위해 Publish(게시) 버튼이 Scheduled(예약됨)로 변경됩니다. 페이지 상단과 최근 페이지 목록에 있는 페이지 제목 옆에 [Publish Scheduled] 표시기가 표시됩니다.



---



 

**4. 페이지를 블로그로 변환** **[ROLLING OUT]**  **[NEW THIS WEEK]**  

 

여러분의 훌륭한 아이디어가 준비되었을 때 한 페이지에 시작해서 블로그로 성장하게 되는 데는 여러 가지 이유가 있습니다. 일부 컨텐츠는 다른 컨텐츠보다 시간이 많이 필요하므로 전환할 때 몇 가지 옵션을 사용할 수 있습니다.

 

페이지를 초안으로 유지하고 More actions 메뉴(•••)를 사용하여 블로그로 게시하거나, 필요한 횟수만큼 게시한 다음 More actions 메뉴(•••)를 사용하여 블로그로 변환할 수 있습니다.

 

두 옵션 모두 페이지가 생성된 공간의 블로그 섹션으로 페이지를 이동합니다. 페이지에 추가된 페이지 또는 인라인 주석이 페이지와 함께 이동합니다. 컨텐츠가 블로그가 될 때 이러한 설명이 더 이상 타당하지 않으면 먼저 주석을 삭제하거나 해결할 수 있습니다.



---



 

**5. Jira 플랜 매크로를 위한 고급 로드맵** **[NEW THIS WEEK]**  

 

Jira plan Confluence 매크로의 고급 로드맵을 사용하면 Confluence 페이지에 고급 로드맵 계획을 포함할 수 있습니다. 비즈니스 목표가 수립되고 추적되는 영역에 주요 이해 관계자를 참여시키고 여러 프로젝트와 팀에서 작업이 어떻게 진행되고 있는지 공유합니다.

 

자세히 알고 싶으시다면, 우리의 [로드맵 공유](https://confluence.atlassian.com/advancedroadmapscloud/sharing-roadmaps-998651329.html)에 대한 문서를 읽어 보시기 바랍니다.



---





**6. 전역 권한 관리가 좀 더 쉬워집니다!**  **[ROLLING OUT]** 



![](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Cloud/Confluence/M-J-Cloud-WIKI-1.png)



저희는 사이트 및 제품 관리자가 이러한 사이트 수준의 권한을 쉽게 읽고 변경할 수 있도록 글로벌 권한 페이지를 업그레이드했습니다.

 

이제 더 이상 자세히 살펴볼 수 있는 조밀한 테이블이 없습니다. **사용자 그룹, JSM 액세스, 익명 액세스 및 앱** 등의 사용자 유형별로 페이지를 다시 구성하고 각 탭의 모양을 새로 고쳐 정보를 보다 깨끗하고 쉽게 검색할 수 있도록 했습니다.

 

또한 부여된 권한 유형별로 목록을 필터링하는 기능도 추가되었습니다. 예를 들어 사이트에서 공간을 생성할 수 있는 사용 권한이 있는 모든 사용자 그룹을 보려면 검색란 옆에 있는 **필터** 버튼을 누르고 **공간 생성** 상자를 선택합니다.

마지막으로 그룹을 확장할 수 있도록 지원하여 어떤 개별 사용자가 멤버인지 정확하게 확인할 수 있습니다.

 

[여기](https://support.atlassian.com/confluence-cloud/docs/manage-global-permissions/)를 클릭하여 전역 권한에 대해 자세히 알아보실 수 있습니다.



---





**7. 페이지 요소 찾아보기 또는 검색 기능**  **[ROLLING OUT]**  

 

작성하는 텍스트 외에도 편집 시 페이지에 추가할 수 있는 모든 요소를 찾아볼 수 있습니다.

- 한 번에 더 많은 옵션을 보고 범주 별로도 보려면 도구 모음에서 + > **View More**를 선택하십시오.
- 추가할 항목을 정확히 알고 있는 경우 **/**를 입력하고 요소 이름을 입력하여 입력한 항목과 일치하는 요소로 목록을 좁힙니다.

페이지에 추가할 수 있는 요소는 다음과 같습니다.

- 머리글 및 글머리 기호 목록과 같은 기본 형식 지정
- 상태 로젠지 및 정보 패널과 같은 그래픽 요소
- 매개 변수를 기반으로 하는 목차 또는 목록 페이지와 같은 강력한 Confluence 매크로
- 아틀라시안 마켓플레이스의 서드 파티 매크로

 

---



**8. Confluence Cloud 의 IOS 에서 곧 3.0.1 릴리즈 버전이 출시 됩니다** **[ROLLING OUT]**  **[NEW THIS WEEK]**  

 

고급 편집 기능이 도입되었습니다! 이제 패널, 미디어, 분할기, 확장, 레이아웃 등을 추가 및 편집할 수 있습니다.

 

------

## 6월



---



**1. 지라 이슈 URL이 스마트 링크로 변환됩니다** **[ROLLING OUT]**  

 

Jira 이슈 링크를 Confluence 페이지에 붙여넣으면 URL이 페이지 아이콘과 페이지 제목을 표시하는 스마트 링크로 변환됩니다. 이 기능은 Jira와 Confluence 사이트가 연결되어 있거나 둘 다 클라우드 버전인 경우에 작동합니다.



---



 

**2. 페이지를 보관하는 것을 추천합니다** **[ROLLING OUT]**  

 

이번 업데이트에서 저희는 대량 보관 작업에서 제외된 페이지 보관을 권장하는 알림 이메일을 추가했습니다.

한 페이지와 모든 중첩된 페이지(페이지 트리의 전체 분기)를 아카이브할 수 있는 기능을 사용하면 분기의 일부 페이지를 포함할 수 없습니다. 

 

이 문제는 보관자가 중첩된 페이지를 볼 수 있는 권한이 없거나 중첩된 페이지를 보관할 수 있는 권한이 없는 경우에 발생하며, 이로 인해 이러한 페이지가 페이지 트리에 남아 있게 됩니다.이후 뒷 페이지를 만든 경우 e-메일을 통해 알려드리고 신속하게 아카이브할 수 있는 방법을 알려드리겠습니다.  

---



 

**3. 이미지에 캡션 추가** **[ROLLING OUT]**  

 

캡션은 이미지에 대한 세부사항을 독자와 공유할 수 있는 간단하고 친숙한 방법입니다. 페이지나 블로그에 이미지를 삽입한 후 아래에 캡션을 추가할 수 있습니다.



---



**4. 최대 500개의 페이지를 일괄 보관할 수 있습니다** **[ROLLING OUT]**  

 

저희는 Confluence가 최고 수준에서 수행되도록 대량 아카이브 또는 대량 복원이 가능한 페이지 수를 한 번에 500페이지로 제한했습니다. 곧 이 한도를 늘리기를 바랍니다!



---



 

**5. 매크로 결과를 설정하는 동안 세부 조정 기능** **[ROLLING OUT]**  

페이지에 추가하는 일부 요소는 다른 요소보다 견고하고 설정이 더 필요합니다. 이를 매크로라고 합니다. 매크로를 삽입한 후 설정 중에 페이지 내용을 가리지 않고 특성을 조정하여 결과를 미세 조정할 수 있는 오른쪽 패널이 열립니다.

템플릿 작성자의 경우 이 새로운 매크로 설정 방법을 통해 템플릿을 사용하는 사용자가 필요에 맞게 매크로를 조정할 수 있도록 매크로를 자리 표시자로 추가할 수 있습니다.



---



 

**6. 가장 최근에 방문한 페이지 보기** **[ROLLING OUT]**  **[NEW THIS WEEK]**  



![](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Cloud/Confluence/M-J-Cloud-WIKI-2.png)



이제 페이지를 본 시점을 기준으로 페이지 트리를 볼 수 있으며 가장 최근에 방문한 항목은 목록 맨 위에 출력됩니다!



---



 

**7. 팀 캘린더가 새로운 보기에 추가 됩니다!** **[NEW THIS WEEK]**  



![](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Cloud/Confluence/M-J-Cloud-WIKI-3.png)



팀 캘린더를 새롭게 만들었습니다! 전과 마찬가지로 모든 일정과 이벤트에 액세스하고 목록, 주, 월 및 타임라인 보기에서 새 일정과 이벤트를 생성할 수 있습니다. 하지만 이제 여러분은 예쁘고 빛나는 새로운 인터페이스에서 이 모든 것을 할 수 있습니다!



------

## 7월

 

---



**1. 신뢰된 사용자를 위한 새로운 사용자 초대를 위한 UI 변경** **[ROLLING OUT]**  **[NEW THIS WEEK]**  

 

몇 가지 사소한 UI를 변경했습니다. 관리자에서 Switch to… 메뉴는 더 이상 신뢰할 수 있는 사용자가 사용할 수 없습니다. 대신 상단 탐색의 사용자 메뉴로 이동하여 새 사용자를 초대할 수 있습니다.

 

---



**2. 사이드바에서 블로그 및 최상위 페이지 생성**  **[ROLLING OUT]**  **[NEW THIS WEEK]**  

 

공간 사이드바의 **블로그** 또는 **페이지** 섹션 옆에 있는 + 버튼을 사용하여 블로그 및 최상위 페이지를 빠르게 만들 수 있습니다.

 

---



**3. 사이드바에서 신속하게 조치 취하기** **[ROLLING OUT]**  **[NEW THIS WEEK]**  

 

일반적인 작업을 더 빠르고 쉽게 수행할 수 있도록 공간 사이드바의 페이지 트리에 빠른 작업이 추가되었습니다. 페이지를 선택하지 않고 사이드바를 이동하지 않고도 작업을 수행할 수 있기 때문에 작업을 완료하는 데 걸리는 시간과 노력이 줄어듭니다.

페이지 제목 위로 마우스를 이동하면 **More actions( ••• )** 메뉴가 나타나 다음과 같은 옵션을 제공합니다.

- edit
- rename
- star
- get link
- copy
- move
- archive

 

로그인한 사람이 작업 중 하나를 수행할 수 있는 권한이 없는 경우 해당 작업을 방해하는 제한이 있다는 정보와 함께 작업이 회색으로 표시됩니다.



---



 

**4. 여러분의 페이지나 블로그가 출판되는 것을 제어할 수 있습니다** **[NEW THIS WEEK]**  

 

프로젝트 시작, 제품 릴리스 또는 회사 발표와 동시에 적절한 시점에 페이지 또는 블로그를 게시해야 하는 경우가 있습니다. 이에 일정 미리 알림이나 메모에 의존하지 않고 Confluence에서 예약할 수 있습니다.

 

최초 게시 또는 21번째 게시 전에 ••• →  Schedule publish(예약 게시)로 이동하여 날짜와 시간을 설정할 수 있습니다. 앞서 언급한 사용자나 해당 페이지, 블로그 또는 해당 공간을 보고 있는 사용자에게는 콘텐츠가 실제로 게시될 때까지 알림이 전송되지 않습니다.

 

페이지 또는 블로그가 특정 요일 및 시간에 게시 되도록 설정되어 있는지 확인하기 위해 **Publish(게시)** 버튼이 **Scheduled(예약됨)**로 변경됩니다. 페이지 상단과 최근 페이지 목록에 있는 페이지 제목 옆에 **[Publish Scheduled]** 표시기가 표시됩니다.



---

---

