---

layout: post
title: 2022 Atlassian 주요 제품 릴리즈 노트  ( Jul ~ Sep) - Cloud
Subtitle: Release Note
date: 2022-09-29
author : eddie
featured : false
image: https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20Server-1.png
categories: [Release Note]
tags: [Atlassian, Atlassian Cloud, 아틀라시안, 아틀라시안클라우드, Jira, jira, Jira Cloud, Release, Release Note, Jira Sofrware, Jira Service Management, Confluence,컨플,DevOps, 데브옵스, dev, Dev, 에자일, Agile, Wiki]
---



<!-- ![릴리즈 노트 이미지](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20Server-1.png) -->

안녕하세요. 디무브 입니다 ![:balloon:](https://pf-emoji-service--cdn.us-east-1.prod.public.atl-paas.net/standard/caa27a19-fc09-4452-b2b4-a301552fd69c/32x32/1f388.png) 

이번 시간에는 2022년 3분기 기간 동안 아틀라시안의 주요제품인 Jira Software, Jira Service Management 및 Confluence의 클라우드 제품 릴리즈 노트를 말씀드리려합니다.

각 제품의 Cloud 버전에 어떠한 변화가 있었는지 함께 확인 할 수 있는 시간을 놓치지 마세요!

 

------

## Jira Software

### 1. 스마트 링크 미리보기

기존 Jira 의 링크는 해당 URL을 타고 들어가야만 해당 정보를 얻을 수 있다는 단점이 존재 하였습니다.

하지만 이제 스마트 링크를 사용하여 링크 뒤에 사이트에 대해 다른 탭을 열 필요 없이 다른 이슈 또는 페이지에 대한 링크를 포함하여 미리 볼 수 있게 되었습니다!

<center><img sytle="width:70%;" src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Jira/2022_3Q/1.png"></center> <br/>

 위처럼 커서를 링크에 둘 경우, 해당 링크의 주요 정보를 미리 볼 수 있습니다.

### 2. 시스템 대시 보드 익명 접근 방지

이번 분기 업데이트 내용 중 하나는 Jira  대시보드 엑세스 기능이 추가되었습니다.

관리자 계정의 사용자가 사이트 내 조직에 속해 있지 않다면, 기본 대시보드에 접근이 불가능합니다.

<center><img sytle="width:70%;" src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Jira/2022_3Q/2.png"></center> <br/>

 



### 3. 이슈 생성 간 이슈의 상태 설정

기존 Jira같은 경우는 이슈를 만들고 상태를 변경하여야만 했기 때문에 많은 사용자 분들이 이슈를 생성할 때 해당 이슈의 상태를 지정하기를 원했습니다. 이제 이슈 생성 중 이슈의 상태를 설정할 수 있도록 새롭게 **상태** 필드가 추가 되었습니다.

<center><img sytle="width:70%;" src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Jira/2022_3Q/3.png"></center> <br/>

 

위 이미지 처럼  이슈 생성 간 이슈 전환을 할 필요 없이 필드에서 이슈 상태를 선택 할 수 있도록 구성이 가능합니다.

## Jira Service Management

### 1. 서비스 데스크 이슈 생성 시 요청 등록 기능 추가 (Agent)

기존 JSM에서는 요청을 등록 하려면 서비스 포털에서만 요청을 선택할 수 있고, 이슈 생성 시에는 요청 유형을 선택할 수 없기 때문에, 이슈를 등록하여 서비스 요청을 생성하는 경우 많은 어려움이 있었습니다.

이번 업데이트에서는  이슈를 생성 시 요청 유형을 별도로 선택 할 수 있어 굳이 서비스 포털에서 요청 등록을 하지 않더라도 이슈 생성을 통해 서비스 요청 유형을 지정할 수 있습니다.

 

<center><img sytle="width:70%;" src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Jira Service Management/2022_3Q/1.png"></center> <br/>

 

### 2. 서비스 포털 에서 사용자 멘션 기능 추가

포탈에 서비스 요청을 할 때 기존 서비스 요청을 처리하는 특정 담당자를 언급(멘션)하는 기능은 지원되지 않았습니다. 

이에 기존 담당자와 요청에 대해 이야기 하려면 따로 유선으로 연락을 하거나 문자를 통해 이야기 해야 했기 때문에 서비스 데스크의 순 기능을 발휘할 수 없었습니다.이번 업데이트 에서는 JSM 포털에서 요청 등록 시 사용자 언급이 가능하게 되었습니다.

<center><img sytle="width:70%;" src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Jira Service Management/2022_3Q/2.png"></center> <br/>

위처럼 **'@' 후 맨션** 기능을 사용해 담당자를 호출 할 수도 있어서 정보를 정확하게 공유가 가능합니다.

## Confluence

 

### 1. 관련 페이지 추천 

 

새로운 기능으로 Confluence 관련 페이지가 추가되었습니다.

모든 페이지의 가장 하단에 관련 페이지 추천이 3개 표시가 됩니다. 해당 관련 페이지는 내용을 기반으로 관련된 페이지를 Confluence가 추천해 줍니다. 

<center><img sytle="width:70%;" src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Confluence/2022_3Q/1.png"></center> <br/>

 

### 2. 페이지에 상태 추가

기존에 페이지 작성 시 초안을 작성하거나 미완성 문서를 작성 할 때

제목 앞에 [미완성]을 붙이는 등 불편하고 번거로운 경우가 많았을 것 입니다.

하지만 이제 상태를 나타낼 수 있는 항목이 새로 생겼고

<center><img sytle="width:70%;" src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Confluence/2022_3Q/e1.png"></center> <br/>

위처럼 페이지에 대한 상태를 나타내 해당 페이지의 상태를 공유하는 것이 가능해 졌습니다.

<center><img sytle="width:70%;" src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Confluence/2022_3Q/2.png"></center> <br/>

 

상태는 색과 멘트까지 직접 입력이 가능합니다!

### 3. PPT모드가 추가 되었습니다!

평소 페이지에 대한 발표, 소개를 진행함에 있어서 드래그로 내려서 소개를 하시거나 문서 내보내기를 통해  다운로드 받아서 PPT로 변환 시켜 내용 공유를 진행 하셨을 것 입니다.

하지만 이제 프리젠테이션 모드 기능 추가로 인해 내용을 팀원에게 공유하거나 발표를 진행 할 때 보다 간편하게 공유가 가능해 졌습니다.

<center><img sytle="width:70%;" src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Confluence/2022_3Q/3.png"></center> <br/>

 

<center><img sytle="width:70%;" src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Confluence/2022_3Q/4.png"></center> <br/>

프레젠테이션 모드를 실행하게 되면 페이지를 파트별로 나눠서 보여주고, QR같은 기능과 함께 사용하면 팀원과 모두 손쉽게 페이지 정보 공유가 가능합니다.

------

 

Atlassian은 더 나은 제품을 제공하기 위하여 계속해서 투자하고 개발하고 있습니다.

Atlassian 제품에 대한 궁금증이 있으실 경우 언제든지 Platinum Solution Partner인 디무브에게 문의해주세요!

감사합니다.😃

 
