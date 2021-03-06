---
layout: post
title: Atlassian Cloud Tip - 제품 액세스를 위한 IP 주소 허용 및 지정
subtitle: Specify IP addresses for product access
date: 2021-05-27
author : jackson
image : https://wac-cdn.atlassian.com/dam/jcr:9a041894-cd35-49b4-8998-7b3b7e582236/Jira@2x.png?cdnVersion=1629
categories: [How To]
tags: [Product Access, Atlassian, Jira, Confluence, IP, Atlassian Cloud, Whitelist, 아틀라시안, 아틀라시안클라우드, 지라, 컨플루언스]
---


안녕하세요, 디무브 입니다! 🎈

이번에는 기술적인 내용을 가지고 왔습니다.  
바로 **제품 액세스를 위한 IP 주소 허용 및 지정** 방법인데요!

IP 주소 허용 기능은 현재  Jira와  Confluence Cloud의 Premium 플랜에서 사용하실 수 있습니다.


## IP 주소 허용(White List)이란? 

IP 허용 목록 통해 사용자가 Jira Software, Jira Service Management, Confluence 용 콘텐츠에 액세스 할 때 허용할 수 있는 IP를 지정하여 **특정 IP만 접근이 가능하도록 허용하는 것**입니다.

Jira Software Cloud Premium에 대한 허용 목록을 설정하면 동일한 사이트의 Jira Service Management에 대한 고객 및 에이전트 포털에도 적용 되며, 이는 Confluence에도 동일하게 적용됩니다.

현재 IP 허용목록은 다음과 같은 페이지에 적용됩니다.

 - Jira tasks, issues, projects
 - Conlfuence Pages and Spaces
 - Jira Administration
 - Confluence administration


<br> 만약 사용자가 허용 목록의 IP 주소에서 페이지에 액세스 하지 않거나 못하는 경우 그 이유를 설명하는 메세지가 표시될 것입니다.

클라우드 솔루션 관리자 또는 담당자는 허용 목록당 100개의 IP 주소 또는 네트워크 블록을 설정 할 수 있습니다. IPv4 및 CIDR  블록이 지원 되며, 네트워크 블록을 입력 하는 경우 CIDR 표기법 표준을 지원합니다. 

"[여기](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation)“를 클릭하여 CIDR 표기법에 대한 자세한 내용을 확인하실 수 있습니다.

추가 할 수 있는 값의 몇 가지 예는 다음과 같습니다.

|Type|Example  |
|--|--|
| IPv4 |104.192.143.1  |
| CIDR |104.192.143.0/28 <br> 104.192.143.16/29 <br> 104.192.143.24/32 <br> 2401 : 1d80 : 1010 :: / 64 <br> 2401 : 1d80 : 1010 :: 150/128  |
  


## Set up

### IP 허용 목록 서비스 찾기

![IP allow list](/assets/images/banners/Specify-IP-access/ip_allow_list_find.png) 


[admin.atlassian.com](http://admin.atlassian.com)에 들어가 로그인 후 설정하시려는 사이트에 들어가 보안 → IP 허용 목록을 선택합니다.

### IP 허용 목록 추가

![IP allow list](/assets/images/banners/Specify-IP-access/ip_allow_list_1.png)

 1. IP 허용 목록에서 허용 목록 만들기 (Create allowlist)를 클릭

![--](/assets/images/banners/Specify-IP-access/ip_allow_list_2.png)

 2. 만들기 양식에 **이름, 허용하려는 제품, 허용하려는 IP 주소(단일 또는 다수),사용 설정**을 작성 후 만들기 버튼 클릭을 하시면 허용 목록이 나옵니다.

---


아틀라시안 클라우드 프리미엄대해 더 궁금하신 점이 있으시면 언제든지 디무브에게 문의주세요.

감사합니다. :smiley:

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTMxNTE1NTc0MCw0NjQ0MDgzMjgsLTgyMD
UzNzQ5M119
-->
