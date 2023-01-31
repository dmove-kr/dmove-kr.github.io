---

layout: post
title: 2022 Atlassian 주요 제품 릴리즈 노트  ( Jul ~ Sep) - Data Center
Subtitle: Release Note
date: 2022-09-29
author : eddie
featured : false
image: https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20Server-1.png
categories: [Release Note]
tags: [Atlassian, Atlassian Cloud, 아틀라시안, 아틀라시안클라우드, Jira, jira, Jira Cloud, Release, Release Note, Jira Sofrware, Jira Service Management, Confluence,컨플,DevOps, 데브옵스, dev, Dev, 에자일, Agile, Wiki, Bitbuket]
---



<!-- ![릴리즈 노트 이미지](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20Server-1.png) -->

안녕하세요. 디무브 입니다 ![:balloon:](https://pf-emoji-service--cdn.us-east-1.prod.public.atl-paas.net/standard/caa27a19-fc09-4452-b2b4-a301552fd69c/32x32/1f388.png)

이번 시간에는 2022년 3분기 기간 동안 아틀라시안의 주요 제품인 Jira Software, Jira Service Management 및 Confluence, Bitbucket의 Server/DataCenter 제품 릴리즈 노트를 설명드리려 합니다.

각 제품의 버전에 어떠한 변화가 있었는지 함께 확인 할 수 있는 시간을 놓치지 마세요!

------

## Jira Software

### **■ Version 9.1.x ~ Version 9.2x**

### 1. 애자일 보드의 성능이 개선 되었습니다.

이전 버전의 Jira 는 스프린트를 사용하면 스프린트의 수 가 많아질수록 애자일 보드가 느려지는 현상이 있었습니다. 이번 9.1 버전 부터는 보드 지연 이슈가 개선 되어  성능 문제로 작업이 중단 되지 않고 작업에 집중하실 수 있습니다.



아래 링크를 클릭하여 자세히 알아보세요!



<a href= "https://confluence.atlassian.com/jiracore/preparing-for-jira-9-1-1142444576.html">에자일 보드 확인하기</a>





 

### 2. 감사 로그 제외 기능 추가

감사 로그에서 특정 이벤트에 대한 로그를 제외 시킬 수 있는 기능이 추가 되었습니다.

아래 이미지 처럼 Excluded Events 항목에서 이벤트를 선택하여 해당 이벤트에 대한 기록을 제외할 수 있습니다. 로그를 제외시킴으로서 불필요한 로그를 바로 바로 필터링 가능합니다.

<center><img sytle="width:70%;" src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Server/Jira/2022_3Q/1.png"></center> <br/>

### 3. 애자일 뷰 화면 개선

이번 업데이트에서는 Jira 애자일 뷰 화면이 개선되었습니다.

Jira Backlog 및 Board 애자일 뷰에 대해 페이지 로딩 시간을 크게 줄여 앱이 더 빠르고 안정적으로 작업을 수행 할 수 있습니다.

자세한 사항은 아래 링크에서 확인 하실 수 있습니다.



아래 링크를 클릭하여 자세히 알아보세요!



<a href= "https://confluence.atlassian.com/jiracore/preparing-for-jira-9-2-1155149623.html">개선된 에자일 뷰 확인하기</a>







###  4. 이슈 네비게이터 개선

Jira에 필드가 많은 사용자인 경우 이슈 네이게이터에서 원하는 값을 한번에 찾기 힘드셨을 것 입니다.

이번 업데이트에서는 너무 많이 검색되는 이슈를 해결하기 위해 목록에서 이슈 검색의 열 드롭 다운에 대한 결과 우선순위 지정 기능이 추가 되었습니다.

<center><img sytle="width:70%;" src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Server/Jira/2022_3Q/2.png"></center> <br/>

이제 검색어가 여러 필드와 일치하더라도 정확하게 일치하는 항목이 우선으로 표시 됩니다.

 

### **해결된 이슈 사항**

### **■ Version 9.1.x**

| **Summary**                                                  | **Key**                                                      | **Status** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :--------- |
| 스프린트의 캐시로 인해 성능이 저하되는 이슈                  | [JSWSERVER-20618](https://jira.atlassian.com/browse/JSWSERVER-20618?src=confmacro) | **DONE**   |
| JQL 검색 후 뒤로 버튼을 사용해도 검색 결과가 변경 되지 않은 이슈 | [JRASERVER-73925](https://jira.atlassian.com/browse/JRASERVER-73925?src=confmacro) | **DONE**   |
| Jira Agile Wallboard 가젯에 대한 드롭다운 목록에서 다른 보드가 나오는 현상 | [JRASERVER-73826](https://jira.atlassian.com/browse/JRASERVER-73826?src=confmacro) | **DONE**   |
| MYSQL 8.22.1 로 업그레이드 한 후 Jira 서비스 가동 불가 이슈  | [JRASERVER-73725](https://jira.atlassian.com/browse/JRASERVER-73725?src=confmacro) | **DONE**   |
| 백로그 페이지 : “추가 옵션” 엑세스 가능한 이름이 누락 됩니다. | [JRASERVER-73587](https://jira.atlassian.com/browse/JRASERVER-73587?src=confmacro) | **DONE**   |

### **■ Version 9.2x**

| **Summary**                                                  | **Key**                                                      | **Status** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :--------- |
| “에픽 링크” 드롭 다운 제안이 제대로 작동하지 않습니다.       | [JSWSERVER-21280](https://jira.atlassian.com/browse/JSWSERVER-21280?src=confmacro) | **DONE**   |
| server.xml connector 파일에서 SSL 문서가 잘못되는 이슈       | [JRASERVER-74250](https://jira.atlassian.com/browse/JRASERVER-74250?src=confmacro) | **DONE**   |
| **[Critical]** 아파치 톰캣 CVE-2022-34305 보안 이슈 해결     | [JRASERVER-73956](https://jira.atlassian.com/browse/JRASERVER-73956?src=confmacro) | **DONE**   |
| 에픽 링크 검색 시 일부 결과가 누락되는 현상                  | [JRASERVER-73922](https://jira.atlassian.com/browse/JRASERVER-73922?src=confmacro) | **DONE**   |
| 백로그: 버전 및 에픽 필터 페이지에 랜드마크가 누락           | [JRASERVER-73322](https://jira.atlassian.com/browse/JRASERVER-73322?src=confmacro) | **DONE**   |
| 이슈 생성 시 성능 저하로 인해 이슈 생성이 어려워지는 현상    | [JRASERVER-73193](https://jira.atlassian.com/browse/JRASERVER-73193?src=confmacro) | **DONE**   |
| 이슈를 삭제 동안 커스텀 필드 값을 업데이트 하게 될 경우, 삭제 프로세스에 대한 스레드가 멈추는 현상 | [JRASERVER-70522](https://jira.atlassian.com/browse/JRASERVER-70522?src=confmacro) | **DONE**   |

 

## Jira Service Management

 

### **■ Version 5.0.x ~ Version 5.2x**

### **1. 빠르고 정확해진 SLA, 멀티 스레드 기능 개선**

1.1 이슈 성능 SLA 재측정 기능 추가



- 이슈 보기 화면에서 이슈에 대한 SLA(*Service-Level Agreement*)를 재측정이 가능합니다.

  SLA를 설정하는 방법은 아래와 같습니다 :

------

1. 이슈 보기에서 **SLA 패널**로 이동합니다.
2. **SLA 우측 상단** 의 ●●● 을 클릭 후 **Recalculated all SLAs** 를 클릭합니다.

<center><img sytle="width:70%;" src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Server/Jira Service Management/2022_3Q/1.png"></center> <br/>

 

1.2 멀티 스레드 기능 추가

스레드 외 처리 모드를 선택 할 수 있는 SLA(*Service-Level Agreement*)기능이 추가 되었습니다.

### **2.백그라운드 처리 개선**

PSMQ(Pretty Simple Message Queue)가 함께 JSM의 일부 영역을 최적화 하여 인스턴스의 안정성과 크기 조정을 개선하는데 도움이 됩니다. 이를 통해 20~65% 향상된 스레드 메시지 처리 향상시킬 수 있습니다.

 

변경 사항은 다음과 같습니다 :

- 데이터베이스 메시지 큐 속성 테이블 호출 제거
-  API 및 쿼리에서 메시지 우선 순위 제거

### **3. 고객센터 공지 개선**

도움말 센터와 고객 포탈에서 표시되는 배너가 개선 되었습니다.

이제 공지 사항을 수정 할 수 있는 페이지가 추가 됩니다.

<center><img sytle="width:70%;" src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Server/Jira Service Management/2022_3Q/2.png"></center> <br/>

또한 고객 포털에서 배너를 삭제 하는 경우 첨부된 번역이 있을 경우 경고 메시지가 나오게 됩니다.

<center><img sytle="width:70%;" src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Server/Jira Service Management/2022_3Q/3.png"></center> <br/>

이처럼 배너 콘텐츠의 불일치 방지와 삭제가 쉽게 개선이 되었습니다.



이 기능은 해당 플래그와 함께 기본적으로 활성화됩니다.

### **2-1. 해결된 이슈 사항**

### **■ Version 5.0.x~5.1.x**

| **Summary**                                                  | **Key**                                                      | **Status** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :--------- |
| 기술 자료 문서 간격에 오류가 발생                            | [JSDSERVER-11298](https://jira.atlassian.com/browse/JSDSERVER-11298?src=confmacro) | **DONE**   |
| 숫자 사용자 이름을 가진 에이전트는 고객 포털에서 이슈 생성 시 “대신 이 요청 제기” 필드에 오류가 발생 | [JSDSERVER-11256](https://jira.atlassian.com/browse/JSDSERVER-11256?src=confmacro) | **DONE**   |
| 고객 포탈에 여러 단일 사용자 선택기 필드를 추가하면 일부 필드 편집이 불가한 현상 | [JSDSERVER-11136](https://jira.atlassian.com/browse/JSDSERVER-11136?src=confmacro) | **DONE**   |
| 이슈에서 SLA 필드를 가리키면 기한 정보가 표시되지 않는 현상  | [JSDSERVER-11055](https://jira.atlassian.com/browse/JSDSERVER-11055?src=confmacro) | **DONE**   |

### **■ Version 5.2.x**

| **Summary**                                                  | **Key**                                                      | **Status** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :--------- |
| 비즈니스 서비스/개체 생성에 대한 레이블 등 여러 오류         | [JSDSERVER-11796](https://jira.atlassian.com/browse/JSDSERVER-11796?src=confmacro) | **DONE**   |
| JSM 업그레이드 후 인사이트 사용자 정의 필드 값이 비어 있는 현상 | [JSDSERVER-11894](https://jira.atlassian.com/browse/JSDSERVER-11894?src=confmacro) | **DONE**   |
| 내보내기 중 개체 유형의 경우 CSV 파일이 생성되지 않는 현상   | [JSDSERVER-11169](https://jira.atlassian.com/browse/JSDSERVER-11169?src=confmacro) | **DONE**   |
| Insight/Jira 관리자가 아닌 개체 스키마 관리자는 가져오기를 수동으로 실행할 때 권한 오류가 표시되는 현상 | [JSDSERVER-11292](https://jira.atlassian.com/browse/JSDSERVER-11292?src=confmacro) | **DONE**   |

 

## Confluence

### **■ Version 7.18.x ~ 7.19.x**

### 1. 클러스터에서 로깅 수준을 변경하는 것이 더 쉬워졌습니다.

7.18버전 업데이트 이후 클러스터 별로 로그를 확인할 때 클러스터 노드를 선택 하여 로그를 관리할 수 있습니다.

<center><img sytle="width:70%;" src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Server/Confluence/2022_3Q/1.png"></center> <br/>

### 2. 7.19 버전의 LTS 장기 서비스 지원 

 

이번 업데이트에서는 7.19 버전의 Confluence 장기 서비스 지원이 가능한 버전으로 선정되었습니다.

기존 장기 지원 릴리스 버전인 7.13와 7.19x 버전의 차이점은 아래와 같습니다:  

- OAuth 2.0 통합을 위한 향상된 보안
- 데이터베이스 암호 암호화
- SSO에 여러 ID 공급자 사용
- 사이트를 계속 실행하는 새로운 응용 프로그램 메트릭
- 더 빠른 권한 검사
- 가동 중지 시간 없이 다음 Confluence로 업그레이드
- 보존 규칙을 사용하여 기록 데이터를 정리하고 휴지통을 지웁니다.
- 접근성 향상을 위해 업데이트된 VPAT 문서
- PSQL 및 MSQL을 포함한 데이터베이스에 대한 추가 지원
- 쿠버네티스에 Confluence Data Center 설치 가능

### **■ Version 7.18.x에서 해결된 이슈**

| **Summary**                                                  | **Key**                                                      | **Status** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :--------- |
| [취약]CVE-2022-22965에 대한 FAQ에 설명된 문제의 추적 해결    | [CONFSERVER-78586](https://jira.atlassian.com/browse/CONFSERVER-78586?src=confmacro) | **DONE**   |
| [취약]Confluence Server & Data Center의 OGNL 주입을 통한 원격 코드 실행(CVE-2022-26134) | [CONFSERVER-79016](https://jira.atlassian.com/browse/CONFSERVER-79016?src=confmacro) | **DONE**   |
| [취약] Confluence Data Center java 역직렬화 취약점 개선      | [CONFSERVER-78179](https://jira.atlassian.com/browse/CONFSERVER-78179?src=confmacro) | **DONE**   |
| 라틴어가 아닌 문자는 PDF로 사용자 지정 내보내기 페이지에 표시되지 않습니다. | [CONFSERVER-45192](https://jira.atlassian.com/browse/CONFSERVER-45192?src=confmacro) | **DONE**   |

### **■ Version 7.19.x에서 해결된 이슈**

| **Summary**                                                  | **Key**                                                      | **Status** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :--------- |
| Confluence 좋아요 및 의견을 작성해도 주요 인기있는 피드에 나타나지 않습니다. | [CONFSERVER-79588](https://jira.atlassian.com/browse/CONFSERVER-79588?src=confmacro) | **DONE**   |
| 날짜 @currentDate 변수에 대한 잘못된 날짜 형식이 표기 됩니다. | [CONFSERVER-58977](https://jira.atlassian.com/browse/CONFSERVER-58977?src=confmacro) | **DONE**   |
| 엑셀 표 또는 워드의 내용을 붙여 넣으면 페이지에 추가 이미지 첨부 파일이 삽입 됩니다. | [CONFSERVER-78579](https://jira.atlassian.com/browse/CONFSERVER-78579?src=confmacro) | **DONE**   |
| 윈도우 기본 Office 응용 프로그램에서 차트 이미지를 붙여 넣으면 업로드가 트리거 되지 않으며 서버 오류가 발생 됩니다. | [CONFSERVER-78052](https://jira.atlassian.com/browse/CONFSERVER-78052?src=confmacro) | **DONE**   |

 

## Bitbucket

### **■ Version 8.2.x ~ 8.4.x**

### 1. 개발자에게 레포지토리 생성 권한 부여 가능

<center><img sytle="width:70%;" src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Server/Bitbucket/2022_3Q/1.png"></center> <br/>

위 이미지와 같이 개발자에게 레포지토리를 만들기 권한을 부여하고 새 레포지토리를 생성하게 되면 개발자가 자신이 만든 저장소의 관리자가 됩니다.

### 2. 노출된 비밀을 알려주는 검사 기능

 

개발자가 API 개발이나 테스트를 위해 사용한 코드에 토큰, 키, 암호가 레포지토리에 저장이 될 수 있습니다.

이는 곧 큰 보안 취약점으로 엄청난 피해를 가져다 올 수 있습니다. 이번 업데이트 된 “**Secret Scanning**“ 기능은 커밋이 진행되는 동안 보안 상으로 취약점이 될 만할 키나 토큰 정보를 확인하여  즉각적으로 알릴 수 있습니다. 

이를 통해 레포지토리를 즉각적으로 수정하여 보안점을 개선할 수 있습니다.

<center><img sytle="width:70%;" src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Server/Bitbucket/2022_3Q/2.png"></center> <br/>

### **해결된 이슈**

| **Summary**                                                  | **Key**                                                      | **Status** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :--------- |
| 저장소가 미러에서 동기화를 중지하는 현상                     | [BSERV-13477](https://jira.atlassian.com/browse/BSERV-13477?src=confmacro) | **DONE**   |
| Bitbucket 8.3.0의 언어 팩에 대한 잘못된 인코딩               | [BSERV-13424](https://jira.atlassian.com/browse/BSERV-13424?src=confmacro) | **DONE**   |
| **[Critical]** 중요 심각도 명령 주입 취약점 개선[(CVE-2022-36804)](https://jira.atlassian.com/browse/BSERV-13438?src=confmacro) | [CONFSERVER-78179](https://jira.atlassian.com/browse/CONFSERVER-78179?src=confmacro) | **DONE**   |
| 프로세스가 취소되면 명령 입력 처리기가 중단 되는 형상        | [BSERV-13358](https://jira.atlassian.com/browse/BSERV-13358?src=confmacro) | **DONE**   |
| Bitbucket 브라우저의 오류 메시지에 민감한 DB 세부 정보를 표시 하는 현상 | [BSERV-13222](https://jira.atlassian.com/browse/BSERV-13222?src=confmacro) | **DONE**   |



Atlassian은 더 나은 제품을 제공하기 위하여 계속해서 투자하고 개발하고 있습니다.

Atlassian 제품에 대한 궁금증이 있으실 경우 언제든지 Platinum Solution Partner인 디무브에게 문의해주세요!

감사합니다.😃
