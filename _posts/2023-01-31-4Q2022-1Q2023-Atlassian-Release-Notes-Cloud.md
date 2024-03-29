---

layout: post
title: 2022-2023 Atlassian 주요 제품 릴리즈 노트 (Oct ~ Jan) - Cloud
Subtitle: Release Note
date: 2023-01-31
author : jackson
image: https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20Server-1.png
categories: [Release Note]
tags: [Atlassian, Atlassian Cloud, 아틀라시안, 아틀라시안클라우드, Jira, jira, Jira Cloud, Release, Release Note, Jira Sofrware, Jira Service Management, Confluence,컨플,DevOps, 데브옵스, dev, Dev, 에자일, Agile, Wiki]
---



<!-- ![릴리즈 노트 이미지](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20Server-1.png) -->

안녕하세요. 디무브 입니다 ![:balloon:](https://pf-emoji-service--cdn.us-east-1.prod.public.atl-paas.net/standard/caa27a19-fc09-4452-b2b4-a301552fd69c/32x32/1f388.png) 

이번 시간에는 2022년 4분기와 2023년 1월까지  아틀라시안의 주요제품인 Jira Software, Jira Service Management 및 Confluence의 클라우드 제품 릴리즈 노트를 말씀드리려합니다.

각 제품의 Cloud 버전에 어떠한 변화가 있었는지 함께 확인 할 수 있는 시간을 놓치지 마세요!

---



## Jira Software

### 1. 백로그 - 에픽 및 이슈 관리 



- 백로그에서 에픽에 대한 이슈 관리 기능이 추가되었습니다. 
  해당 기능에는 **에픽의 이름 변경, 세부 정보 표시, 이슈 생성 및 할당** 등 백로그 화면에서 이슈 관리에 대한 다양한 기능을 수행할 수 있습니다.

<center><img sytle="width:70%;" src="https://blog.dmove.kr/assets/images/Release%20Note%20Cloud/Jira/2022_4Q/1.png"></center> <br/>

### 2. 릴리즈 자동화 관리 

- 릴리즈 화면에서 자동화 기능을 수행할 수 있는 기능이 추가되었습니다. 릴리즈 화면 우측 상단의 “번개 모양 아이콘“ 을 클릭하면 **“수정 버전과 관련외 이슈 관리“, “릴리즈 시 Slack과 연동“**과 같은 자동화 템플릿 리스트가 출력됩니다.

  만약 해당 템플릿 외에 별도의 자동화 기능을 만들고 싶을 경우, 메뉴 하단의 **자동화 관리** 또는 **자동화 만들기**를 클릭하여 자동화 규칙을 커스터마이징 할 수 있습니다.

  <center><img sytle="width:50%;" src="https://blog.dmove.kr/assets/images/Release%20Note%20Cloud/Jira/2022_4Q/2.png"></center> <br/>



### 3. Advanced Roadmap - 감사 로그 기능 추가

해당 기능은 Jira 프리미엄 플랜 이상만 사용이 가능합니다.

- 감사 로그 기능에 Advanced Roadmap의 변경 사항이 기록되도록 추가되었습니다. 기록되는 내용은 다음과 같습니다.

  - -계획 생성 및 삭제
  - -일정 구성 변경 
  - -이슈 구성이 추가 및 삭제 사항
  - -제외 규칙 변경 사항 

  <center><img sytle="width:50%;" src="https://blog.dmove.kr/assets/images/Release%20Note%20Cloud/Jira/2022_4Q/3.png"></center> <br/>



### 4. Advanced Roadmap - 샘플 계획 제공

- Advanced Roadmap 기능 활용이 어려운 사용자 분들을 위해 템플릿화된 샘플 계획을 추가하였습니다. 상단 계획 → 샘플 계획 만들기 버튼을 클릭하여 템플릿화 된 샘플 계획을 생성하여 프로젝트 설계 시 필요한 사항을 샘플을 통해 확인할 수 있습니다.

  <center><img sytle="width:50%;" src="https://blog.dmove.kr/assets/images/Release%20Note%20Cloud/Jira/2022_4Q/4.png"></center> <br/>

  <p style="text-align: center; ">샘플 계획 생성</p>

  <center><img sytle="width:50%;" src="https://blog.dmove.kr/assets/images/Release%20Note%20Cloud/Jira/2022_4Q/5.png"></center> <br/>

<p style="text-align: center;">생성된 샘플 계획</p>



### 5. 로드맵 - 컴포넌트를 사용한 필터 기능 추가



- 로드맵에서 이슈를 분류할 때 컴포넌트를 통해 로드맵을 필터링 하는 기능이 추가되었습니다. 
  <center><img sytle="width:50%;" src="https://blog.dmove.kr/assets/images/Release%20Note%20Cloud/Jira/2022_4Q/6.png"></center> <br/>

---

## Jira Service Management

### 1. 이슈 유형과 요청 유형 구분 (회사 관리 프로젝트) 

- 이번 업데이트에서는 Service Management 프로젝트에서 에이전트가 이슈를 생성 시, 이슈 유형에 따른 요청 유형이 구분되도록 업데이트 되었습니다. 

  이를 통해, 이슈 유형을 클릭 시 요청 유형이 이슈 유형에 따라 자동으로 변경되어 리스트가 표시되기 때문에 요청 유형 관리가 더욱 편리해졌습니다.

<center><img sytle="width:70%;" src="https://blog.dmove.kr/assets/images/Release%20Note%20Cloud/Jira Service Management/2022_4Q/1.png"></center> <br/>

### 2. 고객에게 초대 메일 재 전송

해당 기능은 서비스 데스크 패널이 아닌 프로젝트의 Agent가 관리하는 기능입니다.



- 과거  고객분들에게 서비스 데스크 초대 메일을 전달 후 문제 발생에 따른 재 초대 메일을 보낼 때, 해당 고객의 프로필에 접근하여 메일을 다시 전달해야 하는 번거로움이 있었습니다. 

  이번 업데이트에는 **초대 다시 보내기** 기능을 사용하여 번거롭게 사용자 프로필에 접근할 필요 없이  **“하나의 버튼“**만 클릭하여 초대 메일을 다시 전송할 수 있습니다.

  해당 기능은 프로젝트 좌측 메뉴의 **고객(Customers)** 항목에 있습니다.

  <center><img sytle="width:70%;" src="https://blog.dmove.kr/assets/images/Release%20Note%20Cloud/Jira Service Management/2022_4Q/2.png"></center> <br/>

  

### 3. 인사이트 명칭 변경



- 기존 Jira Service Management 에서 자산 관리로 사용되는 **인사이트(Insight)**가 **자산(Asset)**이라는 명칭으로 변경되었습니다.  명칭 변경에 따른 기능은 크게 바뀌지 않으며, 기존 인사이트의 자산 관리 기능은 정상적으로 사용이 가능합니다. 또한 스키마 검색에 사용되는 **IQL(Insight Query Language)** 명칭이 **AQL(Asset Query Language)**로 변경되었습니다.

  <center><img sytle="width:70%;" src="https://blog.dmove.kr/assets/images/Release%20Note%20Cloud/Jira Service Management/2022_4Q/3.png"></center> <br/>



### 4. 서비스 데스크 - 패스워드 보안 정책 개선



- 이번 서비스 데스크 고객 측면에서 보안적인 사항이 추가되었습니다. 이제 서비스 데스크에 문의를 남기는 사용자 분이 처음 포털에 가입 시 최소 8자 이상의 패스워드를 설정해야 하며, 패스워드는 최대 100자까지 입력할 수 있습니다.
  <center><img sytle="width:70%;" src="https://blog.dmove.kr/assets/images/Release%20Note%20Cloud/Jira Service Management/2022_4Q/4.png"></center> <br/>



### 기타 개선 사항



- 큐 제한 증가 : 각 작업에서 확인가능한 큐의 갯수를 50개에서 300개로 확대되었습니다.

---

## Confluence

### 1. 프레젠테이션 모드 개선



- Confluence 프레젠테이션 모드의 경우, 페이지를 파워포인트 처럼 출력하여 발표할 수 있는 기능입니다. 이번 분기에는 프레젠테이션 모드에 세션 이동 기능이 추가되었습니다. 해당 기능은 Confluence의 머릿글을 기반으로 TOC(Table Of Contents) 기능을 수행할 수 있습니다.

  세션 클릭 시 해당 세션으로 페이지가 이동하고, 나머지 부분은 반투명 처리되어 표시됩니다.

  Confluence 프레젠테이션 모드는 페이지 우측 상단 **●●● → 프레젠테이션 모드**를 클릭하여 활성화 할 수 있습니다.
  <center><img sytle="width:70%;" src="https://blog.dmove.kr/assets/images/Release%20Note%20Cloud/Confluence/2022_4Q/1.png"></center> <br/>



### 2. 사용된 템플릿 확인하기 

- 템플릿을 이용해 만든 페이지의 경우, 페이지 상단에 **템플릿 이용(with a template)** 글씨가 표시됩니다. 해당 텍스트를 클릭하여 보기(View)를 클릭하여 해당 페이지에 사용된 템플릿을 확인할 수 있으며, 필요시 해당 템플릿을 통해 바로 페이지를 생성할 수 있습니다. 
  <center><img sytle="width:70%;" src="https://blog.dmove.kr/assets/images/Release%20Note%20Cloud/Confluence/2022_4Q/2.png"></center> <br/>

  



### 3. 들여쓰기 내어쓰기 툴바 개선



- 기존에 들여쓰기 기능을 수행할 경우, 오로지  **Shfift+Tab** 단축키를 사용해야만 하여, 단축키가 익숙치 않은 사용자분들이 많은 불편함을 겪었습니다.

  이제 페이지 편집창에 들여쓰기와 내어쓰기 화면이 추가되어 버튼 하나만 클릭하면 들여쓰기와 내어쓰기를 수행할 수 있습니다.

  들여쓰기 및 내어쓰기를 지원하는 매크로는 아래와 같습니다.

  - -제목 및 단락

  - -글머리 기호 목록

  - -번호 목록

  - -작업 항목 

    <center><img sytle="width:70%;" src="https://blog.dmove.kr/assets/images/Release%20Note%20Cloud/Confluence/2022_4Q/3.png"></center> <br/>



---

Atlassian은 더 나은 제품을 제공하기 위하여 계속해서 투자하고 개발하고 있습니다.

Atlassian 제품에 대한 궁금증이 있으실 경우 언제든지 Platinum Solution Partner인 디무브에게 문의해주세요!

감사합니다.😃
