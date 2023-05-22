---

layout: post
title: 2022-2023 Atlassian 주요 제품 릴리즈 노트  ( Oct ~ Jan) - Data Center
Subtitle: Release Note
date: 2023-01-31
author : eddie
image: https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20Server-1.png
categories: [Release Note]
tags: [Atlassian, Atlassian Cloud, 아틀라시안, 아틀라시안클라우드, Jira, jira, Jira Cloud, Release, Release Note, Jira Sofrware, Jira Service Management, Confluence,컨플,DevOps, 데브옵스, dev, Dev, 에자일, Agile, Wiki, Bitbuket]
---



<!-- ![릴리즈 노트 이미지](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20Server-1.png) -->

안녕하세요. 디무브 입니다 ![:balloon:](https://pf-emoji-service--cdn.us-east-1.prod.public.atl-paas.net/standard/caa27a19-fc09-4452-b2b4-a301552fd69c/32x32/1f388.png)

이번 시간에는 2022년 4분기 기간과 2023년 1월까지 아틀라시안의 주요 제품인 Jira Software, Jira Service Management 및 Confluence, Bitbucket의 Server/DataCenter 제품 릴리즈 노트를 설명드리려 합니다.

각 제품의 버전에 어떠한 변화가 있었는지 함께 확인 할 수 있는 시간을 놓치지 마세요!

------

## **1. Jira Software**

### **■ Version 9.3.x ~ Version 9.5.x**

### 1. 데이터베이스 코어 성능이 개선되었습니다.

- 데이터 베이스 앱 속성에 대한 정확도 향상

Jira Diagnostics 플러그인에 두 가지 새로운 시스템 속성을 추가하여 데이터베이스 사용에 대한 정확성이 높아졌습니다.

- 제품 내 상태 진단을 위한 연결 메트릭 추가

새로운 메트릭을 사용하면 인스턴스를 더 효율적으로 진단하고 성능 문제를 해결할 수 있습니다.

<div style="border-radius: 3px; margin: 0.75rem 0px 0px; padding: 8px; display: flex; background-color: rgb(222, 235, 255);"><div style="flex-shrink: 0; height:24px; widht:24px; box-sizing: content-box; padding-right: 8px; text-align: center; user-select: none; color: rgb(0, 82, 204); "><span role="img" style="--icon-primary-color: currentcolor; --icon-secondary-color: var(--ds-surface, #FFFFFF); vertical-align: middle; display: inline-flex; flex-shrink: 0; line-height: 1;"><svg style="width: 24; height: 24; role: presentation;"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C9.34784 22 6.8043 20.9464 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2C14.6522 2 17.1957 3.05357 19.0711 4.92893C20.9464 6.8043 22 9.34784 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22V22ZM12 11.375C11.6685 11.375 11.3505 11.5067 11.1161 11.7411C10.8817 11.9755 10.75 12.2935 10.75 12.625V15.75C10.75 16.0815 10.8817 16.3995 11.1161 16.6339C11.3505 16.8683 11.6685 17 12 17C12.3315 17 12.6495 16.8683 12.8839 16.6339C13.1183 16.3995 13.25 16.0815 13.25 15.75V12.625C13.25 12.2935 13.1183 11.9755 12.8839 11.7411C12.6495 11.5067 12.3315 11.375 12 11.375ZM12 9.96875C12.4558 9.96875 12.893 9.78767 13.2153 9.46534C13.5377 9.14301 13.7188 8.70584 13.7188 8.25C13.7188 7.79416 13.5377 7.35699 13.2153 7.03466C12.893 6.71233 12.4558 6.53125 12 6.53125C11.5442 6.53125 11.107 6.71233 10.7847 7.03466C10.4623 7.35699 10.2812 7.79416 10.2812 8.25C10.2812 8.70584 10.4623 9.14301 10.7847 9.46534C11.107 9.78767 11.5442 9.96875 12 9.96875Z" fill="currentColor"></path></svg></span></div> <div class="notebox-text">아래 링크를 클릭하여 자세히 알아보세요! <br/> <a href="https://confluence.atlassian.com/jirasoftware/jira-software-9-3-x-release-notes-1168850570.html" target="_blank">Jira 소프트웨어 9.3.X 릴리즈 정보 | 아틀라시안 지원 | 아틀라시안 문서</a></div></div> <br/>



### 2. Jira 9.4 LTS의 프로젝트 찾아보기 속도 개선

이전 버전의 Jira와 대비하여 약 10% 프로젝트 찾아보기 속도가 빨라졌습니다.

### 3. 감사 로그 개선

이전 버전에서는 수백만 개 이상의 이벤트가 포함된 감사 로그 페이지는 로딩 자체로 문제가 생길 수 있었습니다. 하지만 **9.5 버전 이후** 버전에서는 증분 방식으로 데이터베이스를 캐시하여 해결되었습니다. 

###  4. 진단 기능 추가

인스턴스 성능을 모니터링하는 IPD 도구가 업데이트 되었습니다.

- 사용자 인터페이스

사용자 IPD 모니터링을 수동으로 관리가 가능합니다.

- 새로운 REST API 엔드포인트

IPD 모니터링을 관리하기위해 엔드포인트가 추가 되었습니다.

- 새로운 IPD 지표

인스턴스 진단을 위한 HTTP연결 및 메일 대기열 지표를 추가하였습니다.

### **해결된 이슈 사항**

### **■ Version 9.3.x**

| **Summary**                                                | **Key**                                                      | **Status** |
| :--------------------------------------------------------- | :----------------------------------------------------------- | :--------- |
| 공유 대상 검색 드롭다운 누락                               | [JSWSERVER-21467](https://jira.atlassian.com/browse/JSWSERVER-21467?src=confmacro) | **DONE**   |
| GitLab에 연결 시 2시간 후에 만료되는 토큰 현상             | [JSWSERVER-21417](https://jira.atlassian.com/browse/JSWSERVER-21417?src=confmacro) | **DONE**   |
| 페이지가 칸반 보드에서 생성된 이슈로 스크롤 되지 않는 현상 | [JSWSERVER-20594](https://jira.atlassian.com/browse/JSWSERVER-20594?src=confmacro) | **DONE**   |
| 칸반 보드 이슈 : 키보드로 엑세스 할 수 없는 현상           | [JRASERVER-74031](https://jira.atlassian.com/browse/JRASERVER-74031?src=confmacro) | **DONE**   |
| Start Date 타임 스태프가 상대값으로 표시되는 현상          | [JSWSERVER-21433](https://jira.atlassian.com/browse/JSWSERVER-21433?src=confmacro) | **DONE**   |

### **■ Version 9.4.x**

| **Summary**                                                  | **Key**                                                      | **Status** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :--------- |
| 노드가 이슈 보관 작업을 따라가지 않는 현상                   | [JRASERVER-74330](https://jira.atlassian.com/browse/JRASERVER-74330?src=confmacro) | **DONE**   |
| 활동 탭이 초기화 되지 않음                                   | [JRASERVER-74303](https://jira.atlassian.com/browse/JRASERVER-74303?src=confmacro) | **DONE**   |
| 댓글이 게시 후 자동 업데이트가 되지 않는 현상                | [JRASERVER-74165](https://jira.atlassian.com/browse/JRASERVER-74165?src=confmacro) | **DONE**   |
| 보안 PDP/IMAP이 인증서 없이 작동하는 현상                    | [JRASERVER-62180](https://jira.atlassian.com/browse/JRASERVER-62180?src=confmacro) | **DONE**   |
| 전환 권한을 제거하면 기본 View 워크플로도 제거됩니다.        | [JRASERVER-74081](https://jira.atlassian.com/browse/JRASERVER-74081?src=confmacro) | **DONE**   |
| 사용자 관리 메뉴에서 프로젝트 역할을 편집하면 405 오류가 발생 합니다. | [JRASERVER-74452](https://jira.atlassian.com/browse/JRASERVER-74452?src=confmacro) | **DONE**   |
| 우선 순위 선택기가 열리지 않는 이슈                          | [JRASERVER-74416](https://jira.atlassian.com/browse/JRASERVER-74416?src=confmacro) | **DONE**   |

### **■ Version 9.5.x**

| **Summary**                                                  | **Key**                                                      | **Status** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :--------- |
| 시스템 대시보드에서 텍스트가 최소 생상 대비 요구 사항을 충족하지 못하는 현상 | [JRASERVER-74498](https://jira.atlassian.com/browse/JRASERVER-74498?src=confmacro) | **DONE**   |
| 우선 순위 선택기가 열리지 않는 현상                          | [JRASERVER-74416](https://jira.atlassian.com/browse/JRASERVER-74416?src=confmacro) | **DONE**   |
| 머리글에 탐색 링크에 대한 메뉴 모음이 없는 현상              | [JRASERVER-74189](https://jira.atlassian.com/browse/JRASERVER-74189?src=confmacro) | **DONE**   |
| 헤더에 링크 가능한 이름이 누락되는 현상                      | [JRASERVER-74188](https://jira.atlassian.com/browse/JRASERVER-74188?src=confmacro) | **DONE**   |
| 버전 및 에픽 필터에 대화형 요소가 비어있는 현상              | [JRASERVER](https://jira.atlassian.com/browse/JRASERVER-74498?src=confmacro)[-74047](https://jira.atlassian.com/browse/JRASERVER-74047?src=confmacro) | **DONE**   |
| 대시보드에서 더 많은 활동 표시 링크에접근 가능한 이름이 누락되는 현상 | [JRASERVER-74181](https://jira.atlassian.com/browse/JRASERVER-74181?src=confmacro) | **DONE**   |
| 스위치 보고서에서 그룹화가 누락되는 현상                     | [JRASERVER](https://jira.atlassian.com/browse/JRASERVER-74498?src=confmacro)[-74041](https://jira.atlassian.com/browse/JRASERVER-74041?src=confmacro) | **DONE**   |

 

## **2. Jira Service Management**

 

### **■ Version 5.3.x ~ Version 5.5.x**

### **1. 향상된 이메일 필터링**

이전 버전에서 이메일 필터링 기능에 아쉬워 하셨던 분들이 많으셨을 것 입니다.

하지만 **Version 5.3** 버전에서는 관리자에게 기본 설정된 메일 필터 기능을 켜거나 끌 수 있는 옵션을 제공 합니다.

 <center><img sytle="width:50%;" src="https://blog.dmove.kr/assets/images/Release%20Note%20Server/Jira Service Management/2022_4Q/1.png"></center> <br/>



해당 기능은 위와 같이 설정 > 이메일 요청 > 허가목록 에서 설정 가능합니다.

### **2. 향상된 기능**

- Java 17에 대한 기능이 추가되었습니다.
- H2 데이터베이스가 1.4.200에서 2.1.214로 업그레이드 되었습니다.

### **3. 헬프 포털 열 정렬**

이제 내 요청 페이지에서 열을 오름차순과 내림차순으로 정렬이 가능합니다.

 <center><img sytle="width:50%;" src="https://blog.dmove.kr/assets/images/Release%20Note%20Server/Jira Service Management/2022_4Q/2.png"></center> <br/>

<div style="border-radius: 3px; margin: 0.75rem 0px 0px; padding: 8px; display: flex; background-color: rgb(222, 235, 255);"><div style="flex-shrink: 0; height:24px; widht:24px; box-sizing: content-box; padding-right: 8px; text-align: center; user-select: none; color: rgb(0, 82, 204); "><span role="img" style="--icon-primary-color: currentcolor; --icon-secondary-color: var(--ds-surface, #FFFFFF); vertical-align: middle; display: inline-flex; flex-shrink: 0; line-height: 1;"><svg style="width: 24; height: 24; role: presentation;"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C9.34784 22 6.8043 20.9464 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2C14.6522 2 17.1957 3.05357 19.0711 4.92893C20.9464 6.8043 22 9.34784 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22V22ZM12 11.375C11.6685 11.375 11.3505 11.5067 11.1161 11.7411C10.8817 11.9755 10.75 12.2935 10.75 12.625V15.75C10.75 16.0815 10.8817 16.3995 11.1161 16.6339C11.3505 16.8683 11.6685 17 12 17C12.3315 17 12.6495 16.8683 12.8839 16.6339C13.1183 16.3995 13.25 16.0815 13.25 15.75V12.625C13.25 12.2935 13.1183 11.9755 12.8839 11.7411C12.6495 11.5067 12.3315 11.375 12 11.375ZM12 9.96875C12.4558 9.96875 12.893 9.78767 13.2153 9.46534C13.5377 9.14301 13.7188 8.70584 13.7188 8.25C13.7188 7.79416 13.5377 7.35699 13.2153 7.03466C12.893 6.71233 12.4558 6.53125 12 6.53125C11.5442 6.53125 11.107 6.71233 10.7847 7.03466C10.4623 7.35699 10.2812 7.79416 10.2812 8.25C10.2812 8.70584 10.4623 9.14301 10.7847 9.46534C11.107 9.78767 11.5442 9.96875 12 9.96875Z" fill="currentColor"></path></svg></span></div> <div class="notebox-text">헬프 포털 환경은 5.3 버전 이후 로그인을 하지 않아도 접속 가능하게 변경되었습니다.</div></div> <br/>



### **2-1. 해결된 이슈 사항**

### **■ Version 5.3.x~5.4.x**

| **Summary**                                              | **Key**                                                      | **Status** |
| :------------------------------------------------------- | :----------------------------------------------------------- | :--------- |
| 노드가 이슈 보관 작업을 따라잡지 못하는 현상             | [JRASERVER-74330](https://jira.atlassian.com/browse/JRASERVER-74330?src=confmacro) | **DONE**   |
| 활동 탭이 초기화 되지 않는 현상                          | [JRASERVER](https://jira.atlassian.com/browse/JRASERVER-74330?src=confmacro)[-74303](https://jira.atlassian.com/browse/JRASERVER-74303?src=confmacro) | **DONE**   |
| 전환 권한을 제거하면 기본 View 워크플로도 제거되는 현상  | [JRASERVER-74081](https://jira.atlassian.com/browse/JRASERVER-74081?src=confmacro) | **DONE**   |
| 고객 포털의 설명 필드를 읽는데 오랜 시간이 소요되는 현상 | [JSDSERVER-11235](https://jira.atlassian.com/browse/JSDSERVER-11235?src=confmacro) | **DONE**   |

### **■ Version 5.5.x**

| **Summary**                                                  | **Key**                                                      | **Status** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :--------- |
| 이슈에 대한 의견 추가 버튼이 다른 페이지로 리다이렉션 되는 현상 | [JSDSERVER-11937](https://jira.atlassian.com/browse/JSDSERVER-11937?src=confmacro) | **DONE**   |
| 특정 이메일 에이전트의 메시지가 스트립 따옴표가 제거 되지 않는 현상 | [JSDSERVER-11954](https://jira.atlassian.com/browse/JSDSERVER-11954?src=confmacro) | **DONE**   |
| 고객 포털에서 해상도 “완료”를 특정 언어로 번역 불가한 현상   | [JSDSERVER-12109](https://jira.atlassian.com/browse/JSDSERVER-12109?src=confmacro) | **DONE**   |
| 비지니스 서비스/개체 만들기에 레이블 이름이 누락 된 현상     | [JSDSERVER-11375](https://jira.atlassian.com/browse/JSDSERVER-11375?src=confmacro) | **DONE**   |

 

## 3. Confluence

### **■ Version 7.20.x ~ 8.0**

### 1. Jira의 고급 로드맵 기능을 Confluence에 추가

이제 고급 로드맵을 사용하여 Confluence에 더 풍부한 보고서를 작성 가능합니다.

 <center><img sytle="width:50%;" src="https://blog.dmove.kr/assets/images/Release%20Note%20Server/Confluence/2022_4Q/1.png"></center> <br/>

 

### 2. 이모티콘 개선

이모티콘 메뉴를 팀으로 부터 받기 원하는 이모티콘으로 개선하였습니다.

 <center><img sytle="width:50%;" src="https://blog.dmove.kr/assets/images/Release%20Note%20Server/Confluence/2022_4Q/2.png"></center> <br/>

### 3. 라이선스 사용량 관리 페이지 추가

관리자는 이제 미사용 혹은 유휴 계정을 한번에 파악 할 수 있습니다.

 <center><img sytle="width:50%;" src="https://blog.dmove.kr/assets/images/Release%20Note%20Server/Confluence/2022_4Q/3.png"></center> <br/>

 <center><img sytle="width:50%;" src="https://blog.dmove.kr/assets/images/Release%20Note%20Server/Confluence/2022_4Q/4.png"></center> <br/>



<div style="border-radius: 3px; margin: 0.75rem 0px 0px; padding: 8px; display: flex; background-color: rgb(222, 235, 255);"><div style="flex-shrink: 0; height:24px; widht:24px; box-sizing: content-box; padding-right: 8px; text-align: center; user-select: none; color: rgb(0, 82, 204); "><span role="img" style="--icon-primary-color: currentcolor; --icon-secondary-color: var(--ds-surface, #FFFFFF); vertical-align: middle; display: inline-flex; flex-shrink: 0; line-height: 1;"><svg style="width: 24; height: 24; role: presentation;"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C9.34784 22 6.8043 20.9464 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2C14.6522 2 17.1957 3.05357 19.0711 4.92893C20.9464 6.8043 22 9.34784 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22V22ZM12 11.375C11.6685 11.375 11.3505 11.5067 11.1161 11.7411C10.8817 11.9755 10.75 12.2935 10.75 12.625V15.75C10.75 16.0815 10.8817 16.3995 11.1161 16.6339C11.3505 16.8683 11.6685 17 12 17C12.3315 17 12.6495 16.8683 12.8839 16.6339C13.1183 16.3995 13.25 16.0815 13.25 15.75V12.625C13.25 12.2935 13.1183 11.9755 12.8839 11.7411C12.6495 11.5067 12.3315 11.375 12 11.375ZM12 9.96875C12.4558 9.96875 12.893 9.78767 13.2153 9.46534C13.5377 9.14301 13.7188 8.70584 13.7188 8.25C13.7188 7.79416 13.5377 7.35699 13.2153 7.03466C12.893 6.71233 12.4558 6.53125 12 6.53125C11.5442 6.53125 11.107 6.71233 10.7847 7.03466C10.4623 7.35699 10.2812 7.79416 10.2812 8.25C10.2812 8.70584 10.4623 9.14301 10.7847 9.46534C11.107 9.78767 11.5442 9.96875 12 9.96875Z" fill="currentColor"></path></svg></span></div> <div class="notebox-text">해당 설정 페이지는 설정> 일반구성> 라이센스 세부 정보에서 확인 가능합니다.</div></div> <br/>



### **■ Version 7.20.x에서 해결된 이슈**

| **Summary**                                           | **Key**                                                      | **Status** |
| :---------------------------------------------------- | :----------------------------------------------------------- | :--------- |
| C키 바로 가기를 끌 수 없는 현상                       | [CONFSERVER-79855](https://jira.atlassian.com/browse/CONFSERVER-79855?src=confmacro) | **DONE**   |
| xlsx 파일에 대한 검색 결과를 변환 할 수 없는 현상     | [CONFSERVER](https://jira.atlassian.com/browse/CONFSERVER-79855?src=confmacro)[-59160](https://jira.atlassian.com/browse/CONFSERVER-59160?src=confmacro) | **DONE**   |
| 유저 디렉토리에서 큰 페이지를 열면 매우 느려지는 현상 | [CONFSERVER-80119](https://jira.atlassian.com/browse/CONFSERVER-80119?src=confmacro) | **DONE**   |

### **■ Version 8.20.x에서 해결된 이슈**

| **Summary**                                                  | **Key**                                                      | **Status** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :--------- |
| 길이가 4000자 이상인 HTML 스크립트 요소가 매트로내에서 렌더링 될때 손상되는 현상 | [CONFSERVER](https://jira.atlassian.com/browse/CONFSERVER-79855?src=confmacro)[-81454](https://jira.atlassian.com/browse/CONFSERVER-81454?src=confmacro) | **DONE**   |
| 컨플루언스 8.0에서 클라우드로 마이그레이션이 실패하는 현상   | [CONFSERVER](https://jira.atlassian.com/browse/CONFSERVER-79855?src=confmacro)[-81246](https://jira.atlassian.com/browse/CONFSERVER-81246?src=confmacro) | **DONE**   |
| E,M 단축키를 끌 수 없는 현상                                 | [CONFSERVER](https://jira.atlassian.com/browse/CONFSERVER-79855?src=confmacro)[-79863](https://jira.atlassian.com/browse/CONFSERVER-79863?src=confmacro) | **DONE**   |
| Jira 매크로가 간헐적으로 사용자 정의 필드 제목을 표시하는 현상 | [CONFSERVER](https://jira.atlassian.com/browse/CONFSERVER-79855?src=confmacro)[-79938](https://jira.atlassian.com/browse/CONFSERVER-79938?src=confmacro) | **DONE**   |



---

Atlassian은 더 나은 제품을 제공하기 위하여 계속해서 투자하고 개발하고 있습니다.

Atlassian 제품에 대한 궁금증이 있으실 경우 언제든지 Platinum Solution Partner인 디무브에게 문의해주세요!

감사합니다.😃
