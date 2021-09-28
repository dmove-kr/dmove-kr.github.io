---
layout: post
title: 2021 Atlassian 주요 제품 릴리즈 노트 (Jul ~ Sep) - Server,DC
Subtitle: Release Note
date: 2021-09-28
categories: [Atlassian Release Note]
tags: [Atlassian, Atlassian Cloud, 아틀라시안, 아틀라시안 클라우드, Jira, jira, Jira Cloud, Release, Release Note, Jira Sofrware, Jira Service Management, Confluence,컨플,DevOps, 데브옵스, dev, Dev, 에자일, Agile, Wiki]
---



![릴리즈 노트 이미지](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20Server-1.png)

안녕하세요, 디무브 입니다! :balloon:

이번 시간에는 3분기인 7~9월 동안 아틀라시안의 주요 제품인 Jira, Jira Service Management, Confluence 서버 및 데이터 센터 버전에 어떠한 변화가 있었는지 정리해 보았습니다.

많은 기능들이 개선되었으니 꼭 확인해보세요!

---

## 1. Jira Software



### ■ Version 8.19.x



#### 1. 더 쉬워진 중복된 사용자 계정 찾기

이번 릴리즈에서 Atlassian은 관리자가 Jira 서버 플랫폼의 REST API 기능을 활용하여 어떤 계정이 중복되고 어디에 저장되어 있는지 보다 쉽게 파악할 수 있도록 했습니다. 이에 관한 더 자세한 내용을 확인하시려면 [**중복된 사용자 검색**](https://confluence.atlassian.com/jiracore/finding-duplicate-user-accounts-1079345620.html) 문서에서 확인하실 수 있습니다.

<br/>

#### 2.  더 빨라진 화면 탐색

View Screens 페이지에서 검색 필드와 페이지 나누기 기능을 도입하여 원하는 결과를 더 빠르게 불러와  검색할 수 있습니다.

![](https://blog.dmove.kr/assets/images/banners/Release%20Note%20Server/Jira/2021_3Q/1.png)

<center style="color:rgb(80, 95, 121);">View Screen</center> <br/>



#### 3. 데이터 파이프라인으로 할 수 있는 일 [Data Center]

뛰어난 팀은 성공적인 조직의 기반이 되며, 뛰어난 팀은 더 나은 결과를 제공하기 위해 작업 방식을 지속적으로 개선합니다. 데이터 파이프라인은 조직의 잠재력을 이해하고 최적화하는데 필요한 도구와 기능을 제공합니다.



**3-1. 데이터와 통찰력을 통하여 경쟁 우위로 전환**

데이터 파이프라인은 데이터 그 이상의 가치를 제공하며 Jira 데이터의 트렌드와 이를 활용한 통찰력을 제공합니다.

또한 Atlassian은 팀의 엔지니어링 상태에 대한 통찰력을 제공하는 DevOps 대시보드를 개발했습니다. 대시보드는 Tableau 및 Microsoft PowerBI에서 사용할 수 있으며 사용자의 데이터 소스에 연결하거나 대시보드를 만들기 위한 출발점으로 사용할 수 있습니다.



![](https://blog.dmove.kr/assets/images/banners/Release%20Note%20Server/Jira/2021_3Q/2.png)

​     1. **프로젝트 요약**에는 대시보드에 **포함된 프로젝트가 나열**되고 프로젝트에 **할당된 자원의 비율이 표시**됩니다. 이 목록은 필터 역할을 함으로써 특정 프로젝트에 대한 데이터를 드릴다운하여 확인하고 다른 프로젝트와 비교할 수 있습니다.

​     2. **할당 메트릭**은 보고 기간 동안 매주 각 프로젝트에 **할당된** 자원의 비율을 보여줍니다.(팀 구성원이 close한 이슈로 측정합니다.)

​    3. **품질 메트릭**은 모든 프로젝트 또는 선택한 프로젝트에 대한 **품질, 응답성, 생산성 및 예측 가능성에 대한 메트릭을 차트로 표시**합니다.

​    4. **품질 요약**은 프로젝트별로 4가지 **품질 메트릭 각각에 대한 집계 값을 표시**하여 특이점이나 시스템 문제(또는 성공)를 식별하는 데 활용할 수 있습니다.

또한 대시보드를 구성하여 대시보드를 보고 있는 사용자가 프로젝트 또는 프로젝트 카테고리를 선택하여 데이터를 집계할 수 있으며 날짜 범위, 프로젝트, 사람, 포함할 이슈 유형 등을 제어할 수 있습니다.

대시보드 및 메트릭이 팀에 대해 나타내는 내용에 대해 자세히 알아보려면  [**DevOps 대시보드를 활용한 데이터 파이프라인**](https://confluence.atlassian.com/adminjiraserver/make-the-most-of-the-data-pipeline-with-the-devops-dashboard-1077907480.html) 문서에서 확인하실 수 있습니다.

<br/>

 **3-2. 내보내기 스케쥴 설정**

대시보드를 생성하여 데이터를 수집하고 변환하는 방법을 결정했으면 다음 단계는 정기적으로 데이터를 갱신하는 방법을 결정하는 것입니다.

이를 쉽게 하기 위해 Data Pipeline 관리 화면에서 **내보내기 스케쥴**을 설정할 수 있습니다. 사용자가 필요에 따라 **주기적** 또는 **비 주기적**으로 내보내도록 선택할 수 있습니다.

다음 내보내기 작업이 실행되도록 예약된 시간과 최근 내보내기 작업의 세부 정보도 볼 수 있습니다.

![](https://blog.dmove.kr/assets/images/banners/Release%20Note%20Server/Jira/2021_3Q/3.png)

<center style="color:rgb(80, 95, 121);">Data pipeline 화면의 Schedule regular exports</center> <br/>

**3-3. 팀 작업을 구축하는 데 도움이 되는 추가적인 데이터 요소**

Jira는 데이터의 보고이며 데이터 파이프라인에서 아래의 내용들을 내보낼 수 있습니다.

- **사용자 세부 정보**<br/>
  이제 사용자 세부 정보를 단일 파일로 내보낼 수 있습니다. 이렇게 하면 단일 팀 구성원 이름 및 이메일 주소 집합으로 사용자 ID를 더 쉽게 상호 참조할 수 있습니다. 예를 들어 이슈 파일에 사용자의 이름이 포함되지 않게 함으로써 데이터를 익명으로 처리하는 데 사용할 수 있습니다.
- **이슈 링크**<br/>
  이슈 간의 관계는 매우 중요합니다. 이슈 링크를 자체 파일로 내보내 복제되거나 차단된 이슈를 매핑할 수 있습니다.
- **아카이브된 이슈**<br/>
  이제 내보내기에 보관된 이슈를 포함하도록 선택할 수 있습니다. 이슈 파일에는 아카이브 기준 및 아카이브된  날짜라는 두 개의 새 필드가 포함되며, 아카이브된 이슈들로만 이루어져 있습니다.

<br/>

#### 4. Jira 보안 강화 (**Jira Service Management 4.19 버전과 동일 적용)**



데이터센터 및 서버 제품의 보안은 매우 중요한 문제이기 때문에, 아틀라시안은 취약점 관리 프로그램(Vulnerability Management Program)을 통해 다양한 접근 방식을 사용하여 보안 문제를 찾아 해결합니다. 이제 이러한 접근 방식을 두 배로 확장하여 더 빠르게 많은 부분을 개선하고 있습니다. 



![](https://blog.dmove.kr/assets/images/banners/Release%20Note%20Server/Jira/2021_3Q/4.png)



**4-1. 컴포넌트 및 라이브러리 업그레이드**

아틀라시안은 항상 최신의 보안 상태를 유지해야 하는 핵심 컴포넌트 요소와 서드 파티(3rd Party) 라이브러리를 선별하여, 이 전 보다 더 많은 취약점과 이슈를 해결하고 Jira를 안전하게 보호할 수 있도록 하였습니다.이번 릴리스에서는 다음 보안 사항을 해결했습니다:.

- Jira 플랫폼의 취약점 41이슈 해결
- Jira 서비스 관리의 취약점 44이슈 해결
- 내부 라이브러리를 쉽게 사용할 수 있도록 해결

업그레이드 된 라이브러리에 대한 자세한 내용은 [**개발자 문서**](https://confluence.atlassian.com/jiracore/preparing-for-jira-8-19-1072224384.html)를 참고하실 수 있습니다.



**4-2. LTS 릴리즈로 백포팅**

LTS 릴리즈는 안정성이 최우선이기 때문에 이슈를 신속하게 복구하기 어려울 때가 있습니다.  하지만 아틀라시안에서는 중요한 수정 사항을 완료할 때 이를 백포팅하는 데 주력하고 있으므로 Jira 8.5 및 Jira 8.13 LTS 버전에 대한 버그 해결 또한 이번 릴리즈에 반영되었습니다.

<br/>

#### 5. 해결된 이슈 사항

**[8.19.0에서 해결된 이슈](https://confluence.atlassian.com/jirasoftware/issues-resolved-in-8-19-0-1082526079.html)**

2021년 8월 26일 출시 - 전체 내용은 [8.19.0에서 해결된 이슈](https://confluence.atlassian.com/jirasoftware/issues-resolved-in-8-19-0-1082526079.html) 문서에서 확인하실 수 있습니다.

| **Summary**                                                  |                           **Key**                            | **Status** |
| :----------------------------------------------------------- | :----------------------------------------------------------: | :--------: |
| 화면 및 워크플로우가 많을 때 화면 보기 페이지 로드가 느림    | [JRASERVER-67331](https://jira.atlassian.com/browse/JRASERVER-67331?src=confmacro) |   CLOSED   |
| 8.15로 업그레이드한 후 원형 차트 보고서 데이터가 겹치고 통계를 읽을 수 없음 | [JRASERVER-72169](https://jira.atlassian.com/browse/JRASERVER-72169?src=confmacro) |   CLOSED   |
| 이슈 관찰자는 Jira 계정이 취소된 후에도 계속 업데이트를 수신합니다. - CVE-2021-39119 | [JRASERVER-72737](https://jira.atlassian.com/browse/JRASERVER-72737?src=confmacro) | Published  |

**[8.19.1에서 해결된 이슈](https://confluence.atlassian.com/jirasoftware/issues-resolved-in-8-19-1-1086395933.html)**

2021년 9월 16일 출시 - 전체 내용은 [8.19.1에서 해결된 이슈](https://confluence.atlassian.com/jirasoftware/issues-resolved-in-8-19-1-1086395933.html) 문서에서 확인하실 수 있습니다.

| **Summary**                                                  |                           **Key**                            | **Status** |
| :----------------------------------------------------------- | :----------------------------------------------------------: | :--------: |
| Sprint에서 Sprint로 이동할 때 Sprint 보고서에서 이슈가 보이지 않는 현상 또는 Burndown Chart에서 Sprint에서 이슈가 보이지 않는 현상 | [JSWSERVER-20815](https://jira.atlassian.com/browse/JSWSERVER-20815?src=confmacro) |   CLOSED   |
| 대시보드에서 이슈를 생성하면 설명 필드에 첨부 파일 버튼이 표시되지 않습니다. | [JRASERVER-72144](https://jira.atlassian.com/browse/JRASERVER-72144?src=confmacro) |   CLOSED   |
| WebHook이 구성된 경우 이슈 생성/업데이트 작업이 느림         | [JRASERVER-68174](https://jira.atlassian.com/browse/JRASERVER-68174?src=confmacro) |   CLOSED   |

------



# **2. Jira Service Management**



### ■ Version 4.19.x



#### 1. Insight 자산과 관련된 승인자 [데이터센터]



워크플로우의 승인 설정은 Jira Service Management에서만 가능한 기능입니다. 지금까지는 Jira의 사용자 선택 유형의 사용자 정의 필드를 활용해 승인자를 지정할 수 있었습니다. 이는 지금 그대로도 유용하기는 하지만 승인자를 일부 사용자들로만 한정되게 하는 결과를 만들어냈습니다. 자산 관리 관점에서만 보자면 승인자는 해당 자산에 대해서 잘 알고 있는 사람으로 할당하는 것이 더 좋습니다.

 ![](https://blog.dmove.kr/assets/images/banners/Release%20Note%20Server/Jira%20Service%20Management/2021_3Q/2.png)



자산 관리의 기능성을 향상하는 측면에서 승인자를 자산과 연관이 있는 사람으로 지정할 수 있는 방법을 추가했습니다. 이제 승인자는 해당 자산에 대한 전문가로서 승인 프로세스의 결과와 영향에 대해 더 잘 아는 사람으로 지정할 수 있습니다.이에 관한 자세한 내용을 확인하시려면 [**Insight 승인에 대해 자세히 알아보기**](https://confluence.atlassian.com/servicemanagementserver/adding-approvers-from-insight-to-requests-in-jira-1082527784.html) 문서에서 확인하실 수 있습니다.

<br/>



#### 2. 프로젝트 변경 개선 [데이터 센터]



Atlassian은 최신 기능의 이점들을 기존의 변경 관리에 포함시켜 더 발전된 변경 관리 기능을 만들었습니다.

또한 이를 빠르게 수행하기 위해 새로운 워크플로우, 자산 관리, 자동화 규칙 등을 사용하여 프로젝트를 수동으로 조정하는 데 도움이 되는 가이드를 만들었습니다.



**2-1. 변경 관리 워크플로우**

ITIL 모범 사례를 따르는 새로운 워크플로우를 설계하여 변경 사항이 승인되고 반영되도록 하였습니다.



![](https://blog.dmove.kr/assets/images/banners/Release%20Note%20Server/Jira%20Service%20Management/2021_3Q/3.png)

<br/>



**2-2. 자동화 규칙**



변경 사항에 자동화 규칙을 적용하여 반복적인 일들을 처리함으로써 사용자의 부담을 덜어줄 수 있습니다.

- 자동화 규칙
  - 영향을 받는 자산의 중요도에 따라 적절한 변경 위험을 결정합니다.
  - 변경의 영향과 긴급성에 따라 우선순위를 계산합니다.
  - 긴급 변경 사항에 대하여 즉시 처리하도록 합니다.
  - 기본적인 변경 사항에 관하여 자동으로 승인합니다.



**2-3. 사용자 정의 필드**

중요한 변경 사항을 계획에 따라 처리하기 위하여 상세 정보를 입력하는 사용자 정의 필드를 만들 수 있도록 개선하였습니다. 이는 변경 작업을 수행하는 모든 사람이 자신의 담당 업무를 파악하고 있는지 확인하고 그렇지 않을 경우 신속하게 업무를 재배치할 수 있도록 하기 위한 것입니다.

- 사용자 정의 필드
  - 실행 계획
  - 테스트 계획
  - 최소 계획

![](https://blog.dmove.kr/assets/images/banners/Release%20Note%20Server/Jira%20Service%20Management/2021_3Q/4.png)

<center style="color:rgb(80, 95, 121);">계획에 따른 사용자 정의 필드</center> <br/>

**자산 및 구성 항목 인벤토리**



자산 및 구성 항목 인벤토리 기능을 활용하여 보유하고 있는 모든 자산을 디지털 방식으로 작성할 수 있습니다. 그리고 자산에 대한 변경 사항에 해당 자산의 세부 정보를 포함시킬 수 있습니다. 이를 통하여 사용자는 자산 변경 사항의 위험도와 중요도를 판단할 수 있는 근거로 활용할 수 있습니다.



![](https://blog.dmove.kr/assets/images/banners/Release%20Note%20Server/Jira%20Service%20Management/2021_3Q/5.png)

<center style="color:rgb(80, 95, 121);">자산 구성 항목 인벤토리</center> <br/>

**올바른 이해관계자의 승인**

앞서 언급한 자산의 경우 변경 사항을 워크플로우의 다음 단계로 전환하는데 필요한 승인자로 소유자를 추가할 수 있으며 승인자는 사용자가 원하지 않는 한 고정된 사용자 그룹이 아닌 자산에 대한 전문 지식을 가진 사람이 됩니다. 또한 해결 방법, 사후 기능 및 일정과 같은 기타 세부 정보를 사용하여 변경 사항을 관리할 수 있습니다. 이에 관해 더 자세한 내용을 확인하려면  [**IT 서비스 프로젝트 변경 관리**](https://confluence.atlassian.com/display/SERVICEDESKSERVER/Managing+changes+with+your+IT+service+desk)에서 확인하실 수 있습니다.

<br/>



#### 3. 새로운 지원 플랫폼

이번 릴리즈에서 PostgreSQL 12 데이터베이스 플랫폼에 대한 지원을 추가했습니다. 지원하는 플랫폼의 목록은 [**Supported platforms**](https://confluence.atlassian.com/pages/viewpage.action?pageId=1076825280)에서 확인하실 수 있습니다. 

<br/>



#### 4. 해결된 이슈 사항



**4.19.0 에서 해결된 이슈**

2021년 8월 26일 출시 - 전체 내용은  [4.19.0에서 해결된 이슈](https://confluence.atlassian.com/servicemanagement/issues-resolved-in-4-19-0-1079347974.html) 문서에서 확인하실 수 있습니다.

| **Summary**                                                  |                           **Key**                            | **Status** |
| :----------------------------------------------------------- | :----------------------------------------------------------: | :--------: |
| 구성된 이메일 채널의 이슈 유형을 제거하면 '이메일 요청' 페이지가 깨집니다. | [JSDSERVER-8033](https://jira.atlassian.com/browse/JSDSERVER-8033?src=confmacro) |   CLOSED   |
| "도움말 및 지침" 섹션이 포털의 레이아웃을 깨뜨림             | [JSDSERVER-7221](https://jira.atlassian.com/browse/JSDSERVER-7221?src=confmacro) |   CLOSED   |
| 워크플로우 전환을 통해 승인이 다시 트리거되는 경우 승인 알림이 전송되지 않습니다. | [JSDSERVER-6080](https://jira.atlassian.com/browse/JSDSERVER-6080?src=confmacro) |   CLOSED   |
| "중지" 조건이 과거 이벤트를 참조하는 경우 SLA가 사라집니다.  | [JSDSERVER-3562](https://jira.atlassian.com/browse/JSDSERVER-3562?src=confmacro) |   CLOSED   |



**4.19.1 에서 해결된 이슈**

2021년 9월 16일 출시 - 전체 내용은 [4.19.1에서 해결된 이슈](https://confluence.atlassian.com/servicemanagement/issues-resolved-in-4-19-1-1085185212.html) 문서에서 확인하실 수 있습니다

| **Summary**                                                  |                           **Key**                            | **Status** |
| :----------------------------------------------------------- | :----------------------------------------------------------: | :--------: |
| 대시보드에서 이슈를 생성하면 설명 필드에 첨부 파일 버튼이 표시되지 않습니다. | [JRASERVER-72144](https://jira.atlassian.com/browse/JRASERVER-72144?src=confmacro) |   CLOSED   |
| 이슈 유형 화면 구성표 캐시가 변경된 후 모든 노드에 올바르게 반영되지 않음 | [JRASERVER-71847](https://jira.atlassian.com/browse/JRASERVER-71847?src=confmacro) |   CLOSED   |

------

# **3. Confluence**



### ■ Version 7.13



#### 1. 장기 지원 릴리즈 정리

마지막 장기 지원 릴리스인 Confluence 7.4 이후 12개월이 넘었습니다. 그 동안 Atlassian은 특히 데이터 센터를 통하여 많은 가치를 제공했습니다.



- 최종 사용자 활동 로깅을 포함한 추가 감사 로그 이벤트
- OpenID를 사용한 싱글 사인온
- 기본적으로 활성화된 액세스 로깅
- 더 나은 통합을 위한 Webhook 및 개인 액세스 토큰
- 페이지 조회수, 수정 사항 등을 추적하기 위한 분석



전체적으로 7.4.0 이후로 260개 이상의 이슈를 해결했습니다. 모든 변경 사항을 한눈에 보려면 [**Confluence 7.13 장기 지원 릴리스 변경 로그**](https://confluence.atlassian.com/doc/confluence-7-13-long-term-support-release-change-log-1044114094.html)문서를 확인합시오. 

Atlassian은 품질, 안정성 및 성능에 대해 설정한 기존의 기준점을 높이는데 중점을 두었으며 Confluence 7.13이 최고가 되도록 하기 위해 영향이 큰 몇 가지 버그를 해결했습니다. 

<br/>

#### 2.  보안 점검



새로운 장기 지원 릴리스로 업그레이드하는 것은 사이트 보안을 점검하기 위한 좋은 기회입니다. Confluence를 처음 설치한 이후로 권장 사항이 변경되었을 수 있으므로 이 업그레이드의 일부로 확인해야 할 사항의 목록을 작성했습니다. 

- **권고 알림을 구독하고 기술 연락처 세부 정보를 최신 상태로 유지**
  보안 권고 알림 및 기타 중요한 기술 업데이트를 수신합니다. 
  [Atlassian 이메일 및 개인 정보 기본 설정](https://my.atlassian.com/email) 

 

- **루트가 아닌 전용 사용자 계정으로 Confluence를 실행하십시오.**
  해당 계정을 Confluence가 써야 하는 디렉토리로 제한하십시오. 
  [전용 사용자 계정을 만드는 방법 알아보기](https://confluence.atlassian.com/doc/creating-a-dedicated-user-account-on-the-operating-system-to-run-confluence-255362445.html)
  
- **Confluence 디렉토리에 액세스할 수 있는 계정 제한**
  선택한 사용자 계정만 **Confluence 디렉토리**를 읽고 쓸 수 있도록 합니다. 여기에는 첨부 파일, 백업 또는 데이터 파이프라인 내보내기를 저장할 수 있는 사용자 지정 디렉토리가 포함됩니다.
  [계정이 특정 디렉토리에 쓰도록 허용하는 방법 알아보기](https://confluence.atlassian.com/doc/creating-a-dedicated-user-account-on-the-operating-system-to-run-confluence-255362445.html)
  
- **네트워크 파일 시스템을 마운트할 수 있는 호스트 제한**
  NFS 파일 시스템을 마운트할 수 있는 호스트를 Linux의 /etc/exports 파일과 같은 Confluence 호스트로만 제한하십시오. 자세한 내용은 운영 체제 설명서를 참조하십시오.
  
- **데이터베이스 액세스** 
  데이터베이스 액세스를 Confluence 호스트로만 제한합니다(iptables 또는 내장 데이터베이스 보안 도구 사용). 이 작업을 수행하는 방법을 알아보려면 데이터베이스 설명서를 참조하십시오.
  
- **보안 관리자 세션 사용**
  관리자가 관리자 기능에 액세스하려면 비밀번호를 다시 입력하고 관리자 세션에 대한 짧은 시간 제한을 설정해야 합니다. 
  [보안 관리자 세션을 켜는 방법 알아보기](https://confluence.atlassian.com/doc/configuring-secure-administrator-sessions-218269595.html)
  
- **허용 목록**
  SSRF(서버 측 요청 위조) 공격을 방지하기 위하여 인커밍 (수신)및 아웃커밍(발신) 연결을 제한합니다.
  [허용 목록을 켜는 방법 알아보기](https://confluence.atlassian.com/doc/configuring-the-allowlist-381255821.html)
  
- **통합을 위한 개인 액세스 토큰 사용**
  API 요청 인증을 사용하여 기본 인증(사용자 이름 및 비밀번호)보다 더 안전한 방법을 제공합니다.
  [개인 액세스 토큰 관리 방법 알아보기](https://confluence.atlassian.com/enterprise/using-personal-access-tokens-1026032365.html)
- **confluence-administrators 그룹 멤버십 검토**
  '수퍼 그룹'의 구성원은 모든 관리 기능에 액세스하고 제한된 페이지를 포함한 모든 콘텐츠에 액세스할 수 있습니다. 이 그룹의 구성원을 제한하고 대신 시스템 관리자 전역 권한이 있는 새 그룹을 만드십시오. 
  [confluence-administrators 슈퍼 그룹에 대해 알아보기](https://confluence.atlassian.com/doc/global-permissions-overview-138709.html)
  
- **관리자 계정 관행 검토**
  관리자 계정 공유를 피하고 'admin' 또는 'jdoe'와 같이 쉽게 추측되는 사용자 이름을 피하십시오. 관리자에게 두 개의 계정을 제공하여 일상적인 Confluence 사용과 관리자 작업에 서로 다른 계정을 사용할 수 있도록 하십시오. 
- **액세스 로그 모니터링** 
  액세스 로그는 비정상적인 활동을 식별하는 데 사용할 수 있습니다. 로그는 설치 디렉토리에 기록되며 선호하는 모니터링 도구를 사용하여 이러한 로그를 모니터링할 수 있습니다. 
  [액세스 로깅에 대해 알아보기](https://confluence.atlassian.com/doc/configure-access-logs-1044780567.html)
  
- **요청 제한을 사용하여 불필요한 익명 사용자의 요청을 차단** [**Data Center**] 
  허용할 이유가 없는 경우 익명 사용자의 REST API 요청을 차단하거나 요청 수를 제한하여 DoS 공격의 위험을 줄입 수 있습니다. 
  [요청 제한을 사용하여 요청을 차단하는 방법 알아보기](https://confluence.atlassian.com/doc/improving-instance-stability-with-rate-limiting-992679004.html)
- **감사 로그 설정 검토** [**Data Center**] 
  감사 로그 기능은 마지막 업그레이드 이후 크게 변경되었을 수 있습니다. 모니터링할 수 있는 이벤트를 확인합니다. 
  [감사 로그에 쓸 수 있는 이벤트 알아보기](https://confluence.atlassian.com/doc/audit-log-events-in-confluence-1005333793.html)
- **Single Sign On(SSO) 고려** [**Data Center**] 
  Confluence를 SSO용 ID 공급자와 통합하기 위한 여러 옵션이 있습니다.
  [사용 가능한 다양한 SSO 옵션에 대해 알아보기](https://confluence.atlassian.com/doc/single-sign-on-for-confluence-data-center-879955981.html)

<br/>

#### 3. 해결된 이슈 사항



**7.13.0 에서 해결된 이슈**

2021년 8월 17일 출시 - 전체 내용은  [7.13.0에서 해결된 이슈](https://confluence.atlassian.com/doc/issues-resolved-in-7-13-0-1077784243.html) 문서에서 확인하실 수 있습니다.

| **Summary**                                                  | **Key**                                                      | **Status** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :--------- |
| 페이지를 편집할 때 표시되는 중복 콘텐츠                      | [CONSERVER-59227](https://jira.atlassian.com/browse/CONFSERVER-59227?src=confmacro) | CLOSED     |
| server.xml에 두 번째 커넥터를 추가하면 로그에 잘못된 긍정 누락 maxThreads 경고가 표시됩니다. | [CONSERVER-58097](https://jira.atlassian.com/browse/CONFSERVER-58097?src=confmacro) | CLOSED     |
| 공동 편집이 켜져 있는 페이지 편집기에서 첨부 파일은 '알 수 없는 첨부 파일'이 됩니다. | [CONSERVER-55928](https://jira.atlassian.com/browse/CONFSERVER-55928?src=confmacro) | CLOSED     |

<br/>

#### 4. Confluence 업그레이드 준비



Confluence를 업그레이드하기 전에 하단 링크의 사항을 확인해 주시기 바랍니다. 

[업그레이드 참고 사항](https://confluence.atlassian.com/doc/confluence-7-13-upgrade-notes-1044114088.html)을 확인하여 릴리스의 중요한 변경 사항에 대하여 [업그레이드 지침](https://confluence.atlassian.com/doc/upgrading-confluence-4578.html)에 따라 업그레이드를 진행할 수 있습니다.

---



Atlassian은 더 나은 제품을 제공하기 위하여 계속해서 투자하고 개발하고 있습니다.

Atlassian 제품에 대한 궁금증이 있으실 경우 언제든지 Platinum Solution Partner인 디무브에게 문의해주세요!

감사합니다.😃
