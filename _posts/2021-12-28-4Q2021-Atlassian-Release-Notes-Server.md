---
layout: post
title: 2021 Atlassian 주요 제품 릴리즈 노트 (Oct ~ Dec) - Server,DC
Subtitle: Release Note
date: 2021-12-28
author : ethan
image : assets/images/banners/Release%20Note%20Server/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20Server-1.png
categories: [Release Note]
tags: [Atlassian, Atlassian Cloud, 아틀라시안, 아틀라시안 클라우드, Jira, jira, Jira Cloud, Release, Release Note, Jira Sofrware, Jira Service Management, Confluence,컨플,DevOps, 데브옵스, dev, Dev, 에자일, Agile, Wiki]
---



안녕하세요. 디무브입니다! 🎈 

이번 시간에는 4분기인 10~12월 동안 아틀라시안의 주요제품인 Jira Software, Jira Service Management 및 Confluence 서버 및 데이터 센터 버전에 어떠한 변화가 있었는지 정리해 보았습니다.

많은 기능들이 개선되었으니 꼭 확인해보세요!

----------

## 1. Jira Software



### ■ Version 8.20.x

#### 1. Jira Data Center 8.20.0 LTS(Long Term Support) 버전의 Advanced Roadmap 기능 지원

Advanced Roadmap 기능은 지난 Jira Software 8.15.x release에서 추가되었습니다. 하지만 대다수의 고객들이 LTS(Long Term Support)버전에서 이용하기를 바랐기에 이번 8.20.x 버전을 LTS버전으로 출시하여 고객들이 이용할 수 있도록 했습니다.
    
Data Center 라이센스를 가진 모든 고객은 Atlassian Marketplace에서 Advanced Roadmap App을 설치하여 해당 기능을 이용할 수 있습니다. 또한 Advanced Roadmap이 자동으로 Data Center의 라이센스를 인식하므로 별도의 앱 라이센스를 필요로 하지 않습니다.


참고 : [**Marketplace를 통한 앱 설치 방법**](https://confluence.atlassian.com/upm/installing-marketplace-apps-273875715.html "https://confluence.atlassian.com/upm/installing-marketplace-apps-273875715.html")

기존의 서버 고객이 이미 Advanced Roadmap(Jira Portfolio)을 사용하고 있는 경우 계속해서 라이센스를 갱신하여 이용하실 수 있으며 라이센스가 없는 경우에는 Data Center로 업그레이드 해야만 Advanced Roadmap을 이용하실 수 있습니다.  

#### 2. API 변경 로그

Jira Software 8.13 LTS 버전 출시 이후의 모든 변경 사항을 확인할 수 있도록 변경 로그에 관한 REST API를 제공합니다. 이에 관해 더 자세한 내용을 확인하고 싶으시면 [**8.13 API 변경 로그**](https://confluence.atlassian.com/jiracore/jira-8-13-rest-api-change-log-1019408011.html) 에서 확인하실 수 있습니다.

### ■ Version 8.21.0

#### 1. Advanced Roadmaps에 대한 추가 언어 지원 [데이터센터]

Jira Data Center에서 이용할 수 있는 Advanced Roadmaps에서 이제 아래의 언어를 지원합니다.
    
| **옵션**                                                  |                           **언어**                            |
| :----------------------------------------------------------- | :----------------------------------------------------------: | 
| zh_CN | 中文 (中国) |
| cs_CZ | čeština (Česko)|
| da_DK | dansk (Danmark) |
| nl_NL | Nederlands (Nederland) |
| en_UK | English (UK) |
| et_EE | eesti (Eesti) |
| fi_FI | suomi (Suomi) |
| fr_FR | français (France) |
| de_DE | Deutsch (Deutschland) |
| hu_HU | magyar (Magyarország) |
| is_IS | íslenska (Ísland) |
| it_IT | italiano (Italia) |
| no_NO | norsk (Norge) |
| ja_JP | 日本語 (日本) |
| **ko_KR** | **한국어 (대한민국)** |
| pl_PL | polski (Polska) |
| pt_BR | português (Brasil) |
| ro_RO | română (România) |
| ru_RU | русский (Россия) |
| sk_SK | slovenčina (Slovensko) |
| es_ES | español (España) |
| sv_SE | svenska (Sverige) |

#### 2. 프로젝트 선택기 검색 개선 사항

8.21 버전에서 프로젝트 선택기에서 검색 성능을 개선했습니다.
이제 프로젝트 선택기에서 사용자가 검색 키워드를 입력할 때 공백을 무시하고 백엔드 쿼리와 일치하는 결과만 반환합니다.
    

![](https://blog.dmove.kr/assets/images/banners/Release%20Note%20Server/Jira/2021_4Q/1228_1.png)


#### 3. 향상된 가젯 구성 환경

이제 2차원 필터 통계, 파이 차트 및 이슈 통계 가젯의 구성에 있는 Statistic type, X축 및 Y축 필드는 자동 완성을 지원하며 선택 항목이 알파벳 순으로 정렬됩니다.
    

![](https://blog.dmove.kr/assets/images/banners/Release%20Note%20Server/Jira/2021_4Q/1228_2.png)


#### 4. Jira 보안 강화

<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Server/Jira/2021_4Q/1228_3.png"></center>


#### 컴포넌트 및 라이브러리 업그레이드

아틀라시안은 항상 최신의 보안 상태를 유지해야 하는 핵심 컴포넌트 요소와 서드 파티(3rd Party) 라이브러리를 선별하여, 이 전 보다 더 많은 취약점과 이슈를 해결하고 Jira를 안전하게 보호할 수 있도록 하였습니다.이번 릴리스에서는 다음 보안 사항을 해결했습니다.


| **해결된 사항** |
|:---------------------------------------|
| Jira 플랫폼의 취약점 32이슈 해결|    
|Jira 서비스 관리의 취약점 53이슈 해결|    
|내부 라이브러리를 쉽게 사용할 수 있도록 해결|


업그레이드 된 라이브러리에 대한 자세한 내용은 [**Jira 8.21 준비 문서**](https://confluence.atlassian.com/jiracore/preparing-for-jira-8-21-1097175398.html "https://confluence.atlassian.com/jiracore/preparing-for-jira-8-21-1097175398.html")를 참고하실 수 있습니다.

#### **LTS 릴리즈로 백포팅**

LTS 릴리즈는 안정성이 최우선이기 때문에 이슈를 신속하게 복구하기 어려울 때가 있습니다. 하지만 아틀라시안에서는 중요한 수정 사항을 완료할 때 이를 백포팅하는 데 주력하고 있으므로 Jira 8.5 및 Jira 8.13 LTS 버전에 대한 버그 해결 또한 이번 릴리즈에 반영되었습니다.

#### 5. 해결된 이슈 사항

#### **Jira 8.20.0에서 해결된 이슈**



| **Summary**                                                  |                           **Key**                            | **Status** |
| :----------------------------------------------------------- | :----------------------------------------------------------: | :--------: |
|2개 이상의 노드에서 Jira Data Center를 사용할 때 Jira 차트 매크로가 Confluence에서 표시되지 않음 | JRASERVER-72881 | Closed |
|익명 사용자로 첨부 파일을 추가하면 화면 페이지가 비어있게 됩니다. | JRASERVER-72788 | Closed |
| 일부 JIRA '@mentions'는 설명 필드에 모든 사용자를 표시하지 않습니다. | JRASERVER-61939 |Closed |
| 유니코드 문자가 악성 코드를 검토자(Jira Server)로부터 숨길 수 있도록 합니다. - CVE-2021-42574 | JRASERVER-72978 | Published |
| GitLab과의 DVCS 동기화는 전체 이름이 동일한 사용자를 잘못 매핑합니다. | JSWSERVER-21108 | Closed |
| 설명이 NULL인 경우 보기 화면 페이지에서 검색에 오류가 표시됩니다. | JRASERVER-72924 | Closed |

#### **Jira 8.21.0에서 해결된 이슈**



| **Summary**                                                  |                           **Key**                            | **Status** |
| :----------------------------------------------------------- | :----------------------------------------------------------: | :--------: |
| 관리자가 아닌 사용자가 파일 복제 설정을 편집할 수 있음 - CVE-2021-41308 | JRASERVER-72940 | Closed |
| Jira는 Tomcat CVE-2021-42340의 영향을 받습니다. OutOfMemoryError를 통한 서비스 거부 | JRASERVER-72914 | Closed |
| 권한 에스컬레이션으로 인해 권한이 없는 사용자가 이메일 배치 구성을 편집할 수 있음 - CVE-2021-41313 | JRASERVER-72898 | Published |
| 'last_name' 형식이 '표시 이름'과 일치하지 않으면 성을 사용하는 담당자 및 @mention 사용자 검색이 작동하지 않습니다. | JRASERVER-72874 | Closed |

----------

## 2. Jira Service Management

### **■ Version 4.20.x**

#### 1. Jira Service Management의 Insight 비활성화 불가능

Insight와 관련하여 Jira Service Management Data Center 및 Server 4.19에 도입된 종속성 때문에 Insight 또는 관련 테이블을 더 이상 제거할 수 없습니다.
    

#### Jira Service Management 4.20.0에서 해결된 이슈



| **Summary**                                                  |                           **Key**                            | **Status** |
| :----------------------------------------------------------- | :----------------------------------------------------------: | :--------: |
| objectSchema에 대한 검색이 계속 로드됩니다. | JSDSERVER-8709 | Closed |
| 언급하는 사용자는 Jira와 JSM 간에 다르게 동작합니다. | JSDSERVER-8681 | Closed |
| Oracle Jira DB에서 대량 인쇄 Insight 레이블 작업 충돌 | JSDSERVER-7375 | Closed |

### **■ Version 4.21.x**

### 1. 요청 목록 사용자 지정

너무 많은 정보는 정보의 명확성을 해칠 수 있습니다. 이러한 이유로 Jira Service Management에서는 이제 요청 목록에서 고객이 볼 수 있는 열을 사용자 별로 지정할 수 있습니다.
    
요청 목록을 구성하는 방법은 [**요청 목록 구성 방법**](https://confluence.atlassian.com/servicemanagementserver/configuring-request-view-1095250690.html "https://confluence.atlassian.com/servicemanagementserver/configuring-request-view-1095250690.html")  에서 확인하실 수 있습니다.
    

![](https://blog.dmove.kr/assets/images/banners/Release%20Note%20Server/Jira/2021_4Q/1228_4.png)

### 2. 코멘트 공감 및 반응을 통한 의사 표현

상담원과 고객 간의 커뮤니케이션 속도를 높이기 위해 Comment reaction을 도입했습니다. 댓글로 표현이 충분하지 않다면 이모티콘으로 요점을 전달할 수 있습니다. Comment reaction에 대해 자세히 알아보려면 [**코멘트 공감 및 반응 살펴보기**](https://confluence.atlassian.com/servicemanagementserver/getting-started-for-service-project-agents-939926229.html "https://confluence.atlassian.com/servicemanagementserver/getting-started-for-service-project-agents-939926229.html")에서 확인하실 수 있습니다.
    

![](https://blog.dmove.kr/assets/images/banners/Release%20Note%20Server/Jira/2021_4Q/1228_5.png)

### 3. 모바일 앱에서 대기열 사용

어디서나 상담 서비스를 편리하게 사용할 수 있도록 대기열에 대한 지원을 추가했습니다. 요청 목록이 길어지면 대기열을 통해 팀이 문제를 해결하는 시기와 방법을 제어할 수 있습니다.
    

### 4. 더 빠른 백그라운드 처리

**새로운 기본 프로세서**  
    보다 탄력적이고 클러스터 효율성이 향상된 프로세서를 지원합니다. 테스트 기능으로는 4.9.0 버전부터 Jira Service Management에서 사용 가능하며 테스트와 안정화 과정을 거쳐 현재 기본 프로세서로 출시하고 있습니다.
    
**더 나은 이벤트 처리**  
    이번 릴리스부터 Jira Service Management의 비동기 프로세서는 이 JSM과 연관이 없는 이슈 이벤트를 더 이상 대기열에 넣지 않습니다. 이를 통해 Jira Service Management/Jira Software/Jira Core 프로젝트가 혼합된 인스턴스에서 이벤트 처리에 대한 부담을 줄여 SLA, 자동화 및 알림 처리 속도를 높일 수 있습니다.
    
#### Jira Service Management 4.21.0에서 해결된 이슈

| **Summary**                                                  |                           **Key**                            | **Status** |
| :----------------------------------------------------------- | :----------------------------------------------------------: | :--------: |
| Jira Service Management Server 4.19+에서 Insight를 비활성화하면 모든 JSM 종속성이 중단되고 비활성화됩니다. | JSDSERVER-10845 | Closed |
| 고객 포털 요청 보기에 열을 추가하는 방법은 무엇입니까? | JSDSERVER-5065 | Closed |

## **3. Confluence**

### **■ Version 7.14.x**

#### 1. 다운 타임 없는 Confluence 버전 업그레이드 [DATA CENTER]

**어떻게 동작하나요?**  
    롤링 업그레이드 프로세스는 기본적으로 Confluence 7.9의 버그 수정 업그레이드와 동일하지만 데이터를 변환하거나 이동하기 위해 일부 업그레이드 작업을 수행해야 할 수도 있습니다.
    부분 업그레이드 작업은 각 노드에서 애플리케이션이 시작되기 직전에 실행되고, 클러스터 전체 업그레이드 작업은 모든 노드에서 새 버전을 실행한 후 업그레이드를 완료를 선택할 수 있습니다. 클러스터 개요에서 클러스터의 전반적인 상태를 확인할 수 있습니다.
    

![](https://blog.dmove.kr/assets/images/banners/Release%20Note%20Server/Jira/2021_4Q/1228_6.png)

**호환 가능한 버전**  
    이 단계에서는 현재 사용하고 있는 Confluence 릴리스에서 업그레이드 하고자 하는 릴리스와의 호환성을 확인할 수 있습니다. 예를 들어 버전 7.14.2를 실행 중인 경우 다운 타임 없이 7.15.1로 업그레이드할 수 있습니다. 어떤 버전이 호환되는지 확인하기 위해 **설정** > **일반 환경 설정** > **업그레이드 계획**으로 이동하십시오.
    

#### 2. Kubernetes 환경에서 Confluence Data Center를 사용할 수 있습니다. [DATA CENTER]

자체 관리 환경에서 인스턴스를 실행 중이고 최신 인프라를 도입하려는 경우 이제 Jira, Confluence 및 Bitbucket Data Center 를 Kubernetes 클러스터에 배포할 수 있습니다. 
Kubernetes를 활용하면 조직의 인프라를 효율적으로 활용할 수 있습니다. 제품을 쉽게 확장하거나 축소하고 워크로드를 관리하고 예약할 수 있습니다. 이를 통해 조직의 규정에 영향을 주지 않으면서 규모에 맞는 간소화된 관리 환경을 경험할 수 있으며 팀 간의 민첩성을 높일 수 있습니다.

Atlassian은 여러분이 선택한 Kubernetes 클러스터에 Atlassian 제품을 설치하고 운영할 수 있도록 [**GitHub에 Helm chart를 제공**](https://github.com/atlassian/data-center-helm-charts "https://github.com/atlassian/data-center-helm-charts")합니다.
Helm은 애플리케이션과 서비스를 Kubernetes 클러스터에서 패키징, 구성 및 배포할 수 있는 Kubernetes 용 패키지 관리자입니다. Helm은 관련 Kubernetes 리소스 집합을 설명하는 파일 모음인 Chart라는 패키지 형식을 사용합니다.
Kubernetes 클러스터는 Amazon EKS , Azure Kubernetes Service , Google Kubernetes Engine 환경이거나 사용자가 직접 설치한 환경일 수 있습니다.
여기 Kubernetes의 아키텍처에 관한 개요가 있습니다.

![](https://blog.dmove.kr/assets/images/banners/Release%20Note%20Server/Jira/2021_4Q/1228_7.png)

#### 3. 데이터 파이프라인 개선 [DATA CENTER]

**정기 내보내기 예약**

데이터 파이프라인 화면에서 정기적인 데이터 파이프라인 내보내기를 예약할 수 있습니다. 사용자가 필요한 만큼 일정을 조절하여 내보내도록 선택할 수 있습니다.

![](https://blog.dmove.kr/assets/images/banners/Release%20Note%20Server/Jira/2021_4Q/1228_8.png)

**내보내기 위치 변경**

REST API를 사용하여 파일을 내보낼 때 데이터 파이프라인에서 사용자 지정 위치로 내보낼 수 있습니다. 이는 Amazon S3 또는 Azure Blob Storage와 같은 데이터 레이크의 관련 스토리지로 직접 파일을 보내려는 경우에 유용하게 사용할 수 있습니다.

데이터 파이프라인에 대해서는 [**데이터 파이프라인에 대해 알아보기**](https://confluence.atlassian.com/doc/data-pipeline-1056670238.html "https://confluence.atlassian.com/doc/data-pipeline-1056670238.html")  문서에서 확인할 수 있습니다.

#### 4. 기존 캘린더로 이벤트 가져오기 [DATA CENTER]

iCalendar(.ics) 파일을 기존 팀 캘린더로 가져와 캘린더에 이벤트를 추가할 수 있습니다. 이는 외부 캘린더의 이벤트를 추가하거나 기존 팀 캘린더를 병합하려는 경우에 유용하게 사용할 수 있습니다. 캘린더를 가져오는 방법에 대해 더 자세히 알아보시려면 [**캘린더 가져오기**](https://confluence.atlassian.com/doc/create-add-and-edit-calendars-1044780370.html "https://confluence.atlassian.com/doc/create-add-and-edit-calendars-1044780370.html")에서 확인하실 수 있습니다.

![](https://blog.dmove.kr/assets/images/banners/Release%20Note%20Server/Jira/2021_4Q/1228_9.png)

#### 5. Confluence 보안 개선 사항 [DATA CENTER, SERVER]

<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Server/Jira/2021_4Q/1228_3.png"></center>

Atlassian의 취약성 관리 프로그램은 보안 문제를 찾고 수정하기 위해 다양한 전략을 사용합니다. 한 가지 접근 방식은 핵심 구성 요소와 타사 라이브러리를 가장 안전한 최신 버전으로 정기적으로 업데이트하는 것입니다. 이것은 지속적인 확인이 필요하며 Confluence를 지속적으로 개선하기 위해 노력하는 방법 중 하나입니다. 또한 이번 릴리스에서 업그레이드 한 라이브러리의 일부에 대해 더 알아 보려면 [Confluence 7.14를 준비하는 방법](https://confluence.atlassian.com/doc/preparing-for-confluence-7-14-1063176415.html "https://confluence.atlassian.com/doc/preparing-for-confluence-7-14-1063176415.html")에서 확인하실 수 있습니다. 이러한 업그레이드의 대부분은 Confluence 7.4 LTS 및 7.13 LTS 릴리스 에도 백포트 됩니다 .

#### **해결된 이슈 사항**

| **Summary**                                                  |                           **Key**                            | **Status** |
| :----------------------------------------------------------- | :----------------------------------------------------------: | :--------: |
| CCMA를 통한 공간 마이그레이션은 Confluence Server 7.14.0 이상에서 NPE로 실패함 | CONSERVER-74537 | Closed |
| Confluence 목차 매크로는 Refined for Confluence 테마와 호환되지 않습니다. | CONSERVER-74563 | Closed |
| 편집기 테이블 크기 조정이 다중 열 페이지 레이아웃에서 작동하지 않음 | CONSERVER-73963 | Closed |

----------


Atlassian은 더 나은 제품을 제공하기 위하여 계속해서 투자하고 개발하고 있습니다.

Atlassian 제품에 대한 궁금증이 있으실 경우 언제든지 Platinum Solution Partner인 디무브에게 문의해주세요!

감사합니다.

