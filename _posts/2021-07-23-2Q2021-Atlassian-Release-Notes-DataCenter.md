---
layout: post
title: 2021 Atlassian 주요 제품 릴리즈 노트 (May ~ July) - Server,DC
Subtitle: Release Note
date: 2021-07-23
categories: [Atlassian Release Note]
tags: [Atlassian, Atlassian Cloud, 아틀라시안, 아틀라시안클라우드, Jira Cloud, Release, Release Note, Jira Sofrware, Jira Service Management, Confluence, Wiki]


---



![릴리즈 노트 이미지](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20Server-1.png)



안녕하세요, 디무브 입니다! :balloon:


5월부터 7월까지 아틀라시안의 주요 제품인 Jira Software, Jira Service Management 및 Confluence의 서버와 데이터 센터 버전에 어떠한 변화가 있었는지 정리해 보았습니다.   

많은 기능들이 개선되었으니 꼭 확인해보세요!

---

## 1. Jira Software

 

### ■ Version 8.17




#### 1. Jira를 위한 용어를 조금 더 매끄럽게 정리했습니다 [Data Center]

 

 이번 8.17 버전에서는 관리자가 일반적인 Jira 용어를 변경할 수 있도록 지원합니다. 이 기능을 통해 SAFe 및 LeSS를 포함하여 Jira와 Agile at Scale Frameworks 간에 스프린트와 에픽의 제목을 일관되게 지을 수 있습니다. 



변경된 용어는 영어를 기반으로 모든 변형에 적용되어 어색했던 용어를 매끄럽게 표현해 줍니다. Advanced Roadmaps 및 Jira Align 관리자는 새로운 Jira 용어를 인스턴스에 쉽게 적용할 수 있습니다.



이 기능을 사용하면 커스텀 필드 이름 및 이슈 유형뿐 아니라 보고서, 이슈 및 검색 결과 등 Jira의 다른 모든 영역에서도 용어가 대체됩니다. 용어에 대해서는 가능한한 대문자화를 유지해줍니다. 



또한 관리자가 새로운 용어를 정의할 수 있도록 새 페이지를 추가했습니다. 이에 따르는 프레임워크나 선택한 용어에 관계없이 인스턴스 전체에서 변경 사항을 신속하게 구현할 수 있습니다. 



![](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/Jira/M-J-Server-Jira-1.png)

다음 규칙에 따라 새 용어의 단수 및 복수 형식을 정의할 수 있습니다:



- 에픽과 스프린트의 이름을 맞바꿀 수 없습니다.
- 용어는 40자로 제한됩니다.
- 용어는 고유해야 하며(예: 에픽과 스프린트를 모두 "감자"라고 부를 수 없음), 문자, 숫자 및 공백만 포함할 수 있습니다.
- 모든 필드에는 값(최소 하나 이상의 문자)이 있어야 합니다.



원래 이름으로 되돌려야 하는 경우 텍스트 필드에 원래 이름을 입력하시기 바랍니다.







#### 2. 코멘트 환경 개선



 아틀라시안은 코멘트에 대한 접근성을 개선하고자 키보드 탐색 기능과 코멘트 관련 보조 기술 지원을 개선했으며, 코멘트 영역의 모양을 변경하였습니다. 

![img](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/Jira/M-J-Server-Jira-2.png)





#### 3.  Jira 보안 강화 (Jira Service Management 4.17 버전과 동일 적용)



 데이터센터 및 서버 제품의 보안은 매우 중요한 문제이기 때문에, 아틀라시안은 취약점 관리 프로그램(Vulnerability Management Program)을 통해 다양한 접근 방식을 사용하여 보안 문제를 찾아 해결합니다. 이제 이러한 접근 방식을 두 배로 확장하여 더 빠르게 많은 부분을 개선하고 있습니다. 더 많은 개선과 더 빠른 개선을 실현하고 있습니다.



![img](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/Jira/M-J-Server-Jira-3.png)

**3-1. 컴포넌트 및 라이브러리 업그레이드**

 아틀라시안은 항상 최신의 보안 상태를 유지해야 하는 핵심 컴포넌트 요소와 서드 파티(3rd Party) 라이브러리를 선별하여, 이 전 보다 더 많은 취약점과 문제를 해결하고 Jira를 안전하게 보호할 수 있도록 하였습니다. 

이번 릴리스에서는 다음 보안 사항을 해결했습니다:



- Jira 플랫폼의 취약점 100문제 해결
- Jira 서비스 관리의 취약점 20문제 해결
- 많은 내부 라이브러리를 쉽게 활동할 수 있도록 해결

업그레이드된 라이브러리에 대한 자세한 내용은 [개발자 문서](https://confluence.atlassian.com/jiracore/preparing-for-jira-8-17-1047551150.html)를 참조해주세요.



 

**3-2. LTS 릴리즈로 백포트**

 LTS 릴리즈의 안정성이 최우선 과제입니다. 하지만 이 때문에 문제를 신속하게 복구하기가 어렵습니다. 하지만 저희는 중요한 수정 사항을 완료할 때 이를 백포팅하는 데 주력하고 있으므로 Jira 8.5 및 Jira 8.13 LTS 버전에 대한 버그 해결 또한 이번 릴리즈에 반영되었습니다. 






#### 4. 새로운 지원 플랫폼 (Jira Service Management 4.17 버전과 동일 적용)

 

지원되는 플랫폼 목록에 새로운 데이터베이스와 브라우저가 추가 되었습니다.

- DataBase :  Microsoft SQL Server 2019
- Browser : Microsoft Edge (Chromium)

이 Jira 버전에서 지원되는 기능에 대한 자세한 내용은 [지원되는 플랫폼](https://confluence.atlassian.com/adminjiraserver/supported-platforms-938846830.html)을 참조하십시오.



---

### ■ Version 8.18





#### 1. 코멘트 리액션 기능 수정

 

 이번 릴리즈에서는 Jira의 코멘트 사용 경험을 개선하고자 이슈에 게시된 의견에 대한 반응을 표현할 수 있도록 하였습니다. 관심 표현, 피드백 또는 승인 프로세스 속도를 높이기 위해 이모티콘을 사용할 수 있습니다. 

![](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/Jira/M-J-Server-Jira-4.png)






#### 2. 시간 경과에 따른 이슈 변경 분석 (Jira Service Management 4.18 버전과 동일 적용) [Data Center] 



아틀라시안은 고객들이 비즈니스 인텔리전스(BI) 툴을 통해 Jira 데이터를 분석할 수 있도록  데이터 파이프라인을 지속적으로 개선하고 있습니다.



**2-1. 이슈 히스토리 내보내기**

 아틀라시안은 고객이 데이터를 보다 심층적으로 분석할 수 있도록 돕기 위해 과거 이슈데이터를 내보냅니다. 새 이슈기록 파일에는 기록 탭에 표시되는 모든 정보가 포함됩니다.



데이터를 보다 심층적으로 분석할 수 있도록 이슈 기록 파일을 내보낼 때 “기록 탭(History Tab)에 모든 과거 정보가 포함되어 나타납니다. 

여기 다음 예시를 참고해주세요:

------

예를 들어 이슈 중 하나인 DEV-123은 내보내기가 수행된 날 '완료' 상태입니다.

이슈 파일에는 각 필드의 현재 값(예: '완료' 상태)과 생성, 업데이트 및 해결 날짜와 함께 이 이슈에 대한 단일 행이 포함됩니다. 이것은 특정 시점의 이슈에 대한 요약입니다.

이슈 기록 파일에는 이슈가 할당된 시기, 전환된 시기, 우선 순위 변경 등을 포함하여 이슈가 변경될 때마다 행이 포함됩니다. 내보내기 기간 동안의 모든 이슈 변경 사항을 나타냅니다.

------

내보내기 범위 이전(시작 날짜 이전 또는 종료 날짜를 설정하지 않은 경우 12개월 이상 전)에 발생한 변경 사항은 포함되지 않습니다. 모든 이슈에 대한 기록을 내보내면 내보내기 기간이 크게 증가하므로 업무에 영향을 주지 않는 시간에 수행하는 것을 추천합니다. 이 데이터가 필요하지 않은 경우 제외할 수도 있습니다. 



**2-2. 내보내기 위치 변경**

 이제 REST API를 사용하여 데이터 파이프라인이 파일을 내보낼 사용자 지정 위치를 설정할 수 있습니다. 이 기능은 Amazon S3 또는 Azure Blob 스토리지와 같은 데이터 레이크 관련 스토리지로 직접 파일을 전송하려는 경우에 특히 유용합니다.







### 해결된 이슈 사항

 

**■ Version 8.17**

| **Summary**                                                  |                           **Key**                            | **Status** |
| :----------------------------------------------------------- | :----------------------------------------------------------: | :--------: |
| Kanban 보드에서 "이 열이 꽉 찼습니다" 팝업이 올바르게 표시되지 않는 현상 | [JSWSERVER-20852](https://jira.atlassian.com/browse/JSWSERVER-20852?src=confmacro) | **CLOSED** |
| 사용자가 누적 보고서에서 모든 QuickFilter 옵션을 볼 수 없음  | [JSWSERVER-20823](https://jira.atlassian.com/browse/JSWSERVER-20823?src=confmacro) | **CLOSED** |
| Sprint Health 가젯이 범위 변경을 안정적으로 기록하지 않음    | [JSWSERVER-15130](https://jira.atlassian.com/browse/JSWSERVER-15130?src=confmacro) | **CLOSED** |
| 구성된 CDN URL을 변경할 수 없습니다.                         | [JRASERVER-70907](https://jira.atlassian.com/browse/JRASERVER-70907?src=confmacro) | **CLOSED** |

 

**■ Version 8.18**

| **Summary**                                                  |                           **Key**                            | **Status** |
| :----------------------------------------------------------- | :----------------------------------------------------------: | :--------: |
| GitLab Repository와 동기화가 수행되는 경우 특정 문제와 관련하여 개발 패널에 커밋 세부 정보가 누락되는 현상 | [JSWSERVER-20976](https://jira.atlassian.com/browse/JSWSERVER-20976?src=confmacro) | **CLOSED** |
| 로컬 Pull Request를 진행하는 동안 DVCSConnector.MessageExecutor에서 적합하지 않은 Request_ID 오류가 발생 | [JSWSERVER-20953](https://jira.atlassian.com/browse/JSWSERVER-20953?src=confmacro) | **CLOSED** |
| DVCS Bitbucket 클라우드 Pull Request 엔드포인트 구문을 분석하지 못함 | [JSWSERVER-20932](https://jira.atlassian.com/browse/JSWSERVER-20932?src=confmacro) | **CLOSED** |
| 크롬 또는 사파리 브라우저에서 비디오 첨부 시 중단되는 현상   | [JRASERVER-72275](https://jira.atlassian.com/browse/JRASERVER-72275?src=confmacro) | **CLOSED** |

 

---



## 2. Jira Service Management



### ■ Version 4.17



#### 1. 데이터 파이프라인 내보내기에 사용자 지정 필드(Custom Field) 포함

  

 이제 데이터 파이프라인 내보내기에 사용자 정의 필드를 포함할 수 있습니다. 시스템 필드, Jira Software 및 Jira Service Management의 표준 사용자 지정 필드, 사용자가 생성한 사용자 지정 필드, 그리고 개발자가 해당 필드를 내보낼 수 있게 만든 경우 Marketplace 앱에서 가져온 필드도 내보낼 수 있습니다 → [자세히 보기](https://confluence.atlassian.com/adminjiraserver/data-pipeline-1027142324.html)



![](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/Jira%20Service%20Management/M-J-Server-JSM-2.png)





### ■ Version 4.18







#### 1. 고객 포털에 SLA 표시 [Data Center]



 좋은 서비스는 고객이 다시 돌아오게 하는 것이며, 이를 위한 핵심 요소인 대응력을 강화하기 위해서는 SLA가 가장 효과적입니다. 이제 고객 포털에 개별 SLA를 표시하여, 고객에게 요청을 처리하고 있다는 확신을 줄 수 있습니다. 



![](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/Jira%20Service%20Management/M-J-Server-JSM-3.png)



 고객은 에이전트와 유사한 방식으로 SLA를 인식하지만 실제 목표(예: 5일 이내)는 파악하지 못합니다. 고객은 SLA에 따라 요청을 처리하기 위해 남은 시간과 상태를 확인할 수 있습니다. SLA를 생성하거나 편집하는 동안에도 SLA를 표시하도록 프로젝트 설정에서 선택할 수 있습니다. → [SLA 설정에 대해 자세히 알아보기](https://confluence.atlassian.com/servicemanagementserver/setting-up-slas-939926373.html) 



 **1-1. SLA가 보다 직관적으로 표현됩니다**



 아틀라시안은 또한 SLA를 보다 일관되고 이해하기 쉽게 만들기 위해 SLA의 모양과 느낌을 변경했습니다. 

다음은 에이전트의 입장에서 표시되는 SLA 의 샘플입니다:



![](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/Jira%20Service%20Management/M-J-Server-JSM-4.png)



더 자세한 설명을 보고 싶으시다면 [여기](https://confluence.atlassian.com/servicemanagementserver/how-teams-see-slas-946617611.html)를 클릭해주세요!







 

#### 2. 고객 포털 개선 [Data Center]



**2-1. 포털 내 검색창 노출 여부 선택 가능**

 서비스 프로젝트와 연결된 기술 자료가 없는 경우 검색창 은 오히려 고객에게 혼란을 줄 수 있습니다. 이제 프로젝트 설정에서 개별 고객 포털에 대한 검색창의 노출을 중지할 수 있습니다. 

[여기](https://confluence.atlassian.com/servicemanagementserver/configuring-the-customer-portal-939926277.html)를 클릭하여 포털 설정에 대해 자세히 알아보세요!







![](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/Jira%20Service%20Management/M-J-Server-JSM-5.png)



**2-2. @Menstions 기능 추가**

멘션 기능은 팀 동료와 협력하는 좋은 방법이지만 고객 포털에서는 제공되지 않았습니다. 이제 "@담당자 "와 같은  Jira에서 언급할 때와 동일한 방식으로 사용자를 언급하고 설명을 남길 수 있습니다. 언급된 사람도 요청 참여자로 추가됩니다.

[여기](https://confluence.atlassian.com/servicemanagementserver/adding-request-participants-939926441.html)를 클릭하여 요청 참가자에 대해 자세히 알아보세요!



![](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/Jira%20Service%20Management/M-J-Server-JSM-6.png)









#### 3. 서로 다른 요청에 대한 다중 수신 이메일 채널 제공 [Beta] [Data Center]

 아틀라시안은 고객이 이메일을 다른 주소로 전송하여 요청 또는 의견으로 전환할 수 있도록 JSM에서 구성할 수 있는 이메일 채널 수를 늘리기 위해 노력하고 있습니다. 이렇게 하면 다양한 요청 유형에 대해 서로 다른 채널을 사용하거나 고객에 맞게 더 개인화된 이메일 주소를 가질 수 있습니다. 



![](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/Jira%20Service%20Management/M-J-Server-JSM-7.png)



위 사진은 아직 개발 단계이지만, 곧 사용 가능 하도록 테스트를 끝내 [피드백](https://docs.google.com/forms/d/e/1FAIpQLScfMIthFa5sRNl7OBnsnT0AGjauf179jYqT7_EmuQ8Z1uVh0g/viewform)을 받아 더 나은 모습으로 만들겠습니다. 

다중 메일 채널 구성을 확인 하시려면 [여기](https://confluence.atlassian.com/jiracore/adding-multiple-email-channels-for-creating-requests-1063178702.html)를 클릭해 주세요!

 



#### 4. 탭할 때마다 모바일 앱 기능 향상

 아틀라시안은 모바일 앱에 서비스 프로젝트 지원을 추가한 이후로 수정 및 개선을 위해 많은 노력을 기울이고 있습니다. 모바일 기기를 통한 보다 유연한 관리 방법은 매우 효율적이며, 이를 개선하기 위해 계속해서 노력할 것입니다. 

다음은 최근 변경 사항 요약입니다:


- 요청 승인 및 거부
- 다중 사용자 선택 사용자 정의 필드(iOS만 해당)
- 전환 시 의견 필드를 통해 고객에게 회신
- JSM 관련 필드 보기: 요청 유형, 요청 참가자 및 조직
- JSM 관련 필드 편집: 조직 또는 단체



이러한 기능을 원하지만 업그레이드할 준비가 되지 않은 경우 Jira 모바일 플러그인을 업그레이드할 수 있습니다. 모바일 앱에 대해 자세히 알고 싶으시다면 [여기](https://confluence.atlassian.com/servicemanagementserver/jira-data-center-and-server-mobile-app-1026523326.html)를 클릭해주세요!




### 해결된 이슈 사항

 

**■ Version 4.17**

| **Summary**                                                  |                           **Key**                            | **Status** |
| :----------------------------------------------------------- | :----------------------------------------------------------: | :--------: |
| 사용자 프로필 페이지 닫힘 아래에서 Avatar를 업데이트하고 Insight 사용자 정보에 액세스할 수 없는 현상 | [JSDSERVER-8349](https://jira.atlassian.com/browse/JSDSERVER-8349?src=confmacro) | **CLOSED** |
| 비동기 프로세스에서 이슈 이벤트가 생성될 때 SLA가 계산되지 않음 | [JSDSERVER-7107](https://jira.atlassian.com/browse/JSDSERVER-7107?src=confmacro) | **CLOSED** |
| 세션이 시간 초과된 고객 포털 새로 고침 시 빈 화면 출력       | [JSDSERVER-6819](https://jira.atlassian.com/browse/JSDSERVER-6819?src=confmacro) | **CLOSED** |
| 비활성화된 옵션 수가 많은 선택 목록 필드를 포함할 경우 Jira 문제 화면이 느리게 로드되는 현상 | [JRASERVER-72280](https://jira.atlassian.com/browse/JRASERVER-72280?src=confmacro) | **CLOSED** |

 

**■ Version 4.18**

| **Summary**                                                  |                           **Key**                            | **Status** |
| :----------------------------------------------------------- | :----------------------------------------------------------: | :--------: |
| 고객 조직 사용자 그룹 아바타 아이콘에 JSM 포털 공유 검색의 이름 패딩이 없는 현상 | [JSDSERVER-8430](https://jira.atlassian.com/browse/JSDSERVER-8430?src=confmacro) | **CLOSED** |
| JSM 삭제 이후 재설치 되지 않은 현상                          | [JSDSERVER-8375](https://jira.atlassian.com/browse/JSDSERVER-8375?src=confmacro) | **CLOSED** |
| 고객 요청 유형을 사용하는 JQL의 경우 기존 문제에 대한 SLA가 표시되지 않은 현상 | [JSDSERVER-7386](https://jira.atlassian.com/browse/JSDSERVER-7386?src=confmacro) | **CLOSED** |
| 서비스 데스크 변환에서 링크가 포맷되지 않는 현상             | [JSDSERVER-7354](https://jira.atlassian.com/browse/JSDSERVER-7354?src=confmacro) | **CLOSED** |
| 개체 스키마 관리자가 역할에 사용자를 추가할 수 없는 현상     | [JSDSERVER-7173](https://jira.atlassian.com/browse/JSDSERVER-7173?src=confmacro) | **CLOSED** |
| 서비스 데스크 프런트 엔드 플러그인이 Jira 데이터 센터용 CDN과 호환되지 않는 현상 | [JSDSERVER-7055](https://jira.atlassian.com/browse/JSDSERVER-7055?src=confmacro) | **CLOSED** |

 

------

## 3. Confluence



5월~7월 동안에서는 Confluence에 대한 새로운 업데이트가 출시 되지 않았습니다. Confluence에 대한 연구와 개발은 계속되고 있으며, 추후 업데이트 시 공유 드리도록 하겠습니다. 

 

---

Atlassian은 더 나은 제품을 제공하기 위하여 계속해서 투자하고 개발하고 있습니다.   

Atlassian 제품에 대한 궁금증이 있으실 경우 언제든지 Platinum Solution Partner인 디무브에게 문의해주세요! 

감사합니다.😃

