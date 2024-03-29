---

layout: post
author: jackson
image : https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20Server-1.png
title: 2022 Atlassian 주요 제품 릴리즈 노트 (Jan ~ Mar) - Cloud
Subtitle: Release Note
date: 2022-03-28
categories: [Release Note]
tags: [Atlassian, Atlassian Cloud, 아틀라시안, 아틀라시안클라우드, Jira, jira, Jira Cloud, Release, Release Note, Jira Sofrware, Jira Service Management, Confluence,컨플,DevOps, 데브옵스, dev, Dev, 에자일, Agile, Wiki]
---




안녕하세요. 디무브 입니다! 🎈

2022년 1분기 동안 아틀라시안의 주요제품인 Jira Software, Jira Service Management 및 Confluence에도 크고 작은 변화가 있었습니다. 

각 제품의 Cloud 버전에 어떠한 변화가 있었는지 여러분과 함께 확인해볼 수 있는 시간을 마련했으니 꼭 확인해보세요! 

---

## Jira Software



### 1. Jira Incoming Email - DMARC 프로토콜 지원(Jira Service Management도 동일)



<div style="border-radius: 3px; margin: 0.75rem 0px 0px; padding: 8px; display: flex; background-color: rgb(222, 235, 255);"><div style="flex-shrink: 0; height:24px; widht:24px; box-sizing: content-box; padding-right: 8px; text-align: center; user-select: none; color: rgb(0, 82, 204); "><span role="img" style="--icon-primary-color: currentcolor; --icon-secondary-color: var(--ds-surface, #FFFFFF); vertical-align: middle; display: inline-flex; flex-shrink: 0; line-height: 1;"><svg style="width: 24; height: 24; role: presentation;"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C9.34784 22 6.8043 20.9464 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2C14.6522 2 17.1957 3.05357 19.0711 4.92893C20.9464 6.8043 22 9.34784 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22V22ZM12 11.375C11.6685 11.375 11.3505 11.5067 11.1161 11.7411C10.8817 11.9755 10.75 12.2935 10.75 12.625V15.75C10.75 16.0815 10.8817 16.3995 11.1161 16.6339C11.3505 16.8683 11.6685 17 12 17C12.3315 17 12.6495 16.8683 12.8839 16.6339C13.1183 16.3995 13.25 16.0815 13.25 15.75V12.625C13.25 12.2935 13.1183 11.9755 12.8839 11.7411C12.6495 11.5067 12.3315 11.375 12 11.375ZM12 9.96875C12.4558 9.96875 12.893 9.78767 13.2153 9.46534C13.5377 9.14301 13.7188 8.70584 13.7188 8.25C13.7188 7.79416 13.5377 7.35699 13.2153 7.03466C12.893 6.71233 12.4558 6.53125 12 6.53125C11.5442 6.53125 11.107 6.71233 10.7847 7.03466C10.4623 7.35699 10.2812 7.79416 10.2812 8.25C10.2812 8.70584 10.4623 9.14301 10.7847 9.46534C11.107 9.78767 11.5442 9.96875 12 9.96875Z" fill="currentColor"></path></svg></span></div> <div class="notebox-text">DMARC 지원 기능은 스탠다드 플랜에서만 지원됩니다.</div></div> <br/>

Jira의 수신 이메일(Incoming Email)은 이메일을 통해 Jira의 기능을 사용하기 위해 사용됩니다.

하지만 이메일을 통해 Jira의 기능을 사용할 경우 스푸핑 공격이나 피싱 메일 등의 보안 위협을 받을 수 있습니다.

이번 업데이트에서는 Jira에서 이메일 수신 시 DMARC(Domain-based Message Authentication, Reporting and Conformance) 이메일 인증 프로토콜 기능이 추가되었습니다.

<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Jira/2022_1Q/1.png"></center> <br/>



DMARC을 활성화 하면 보낸 사람의 이메일 주소를 서버에 표시되는 이메일 주소와 일치하는 지 확인 후 통과시키며 불일치할 경우 해당 이메일을 차단할 수 있어 보안 위협을 감소시킬 수 있습니다.

[여기](https://support.atlassian.com/jira-cloud-administration/docs/manage-dmarc-authentication-for-incoming-emails/)를 클릭하여 DMARC 설정에 대해 자세히 알아볼 수 있습니다.

<br/>



### 2. 그룹화를 통한 이슈 정렬



이번 분기에는 그룹화 기능이 추가되어 다양한 형태의 이슈를 더 보기 좋게 정렬하는 것이 가능해 졌습니다.

**이슈의 상태, 담당자, 우선순위**로 그룹화가 가능하며, 아래 이미지와 같이 이슈를 그룹화하여 한 눈에 확인할 수 있습니다.

<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Jira/2022_1Q/2.png"/></center>

<center>담당자로 그룹화한 이슈</center>

### 3.  알림 배너 기능 추가



기존 Jira의 서버 또는 데이터 센터 버전에서만 제공되었던 공지 배너 기능이 클라우드에서도 가능하게 되었습니다.

우측 상단 **톱니바퀴 아이콘 → 시스템 → 공지 배너**에 접근하여 회사 내 공지 사항 또는 긴급 사항 등을 작성하여 Jira를 사용하는 사용자에게 공지할 수 있습니다.

추가적인 옵션으로 사용자가 해당 배너를 보고 싶지 않을 경우 자체적으로 닫을 수 있도록 수정할 수 있습니다.

<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Jira/2022_1Q/3.png"/></center>



<center>알림 배너 설정</center> <br/>



<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Jira/2022_1Q/4.png"/></center> <center>알림 배너 설정 시 상단 바에 공지 사항이 출력됩니다.</center> <br/>

### 4.  단일 텍스트 및 장문 텍스트 커스텀 필드 명칭 변경 (Jira Service Management도 동일)


아틀라시안은 프로젝트 유형 간에 용어를 조정하기 위해 회사 관리 프로젝트의 커스텀 필드 이름을 팀 관리 프로젝트의 커스텀 필드 이름과 일치하도록 변경하고 있습니다.

이에 커스텀 필드의 단일 텍스트(Singleline Text)필드는 짧은 텍스트(Short Text)로, 장문 텍스트(Multiline Text)필드는 문단(Paragraph)필드로 명칭이 변경 되었습니다.



<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Jira/2022_1Q/5.png"/></center> <br/>



### 5. 로드맵 기능 추가



**5-1. 추가 완료된 에픽 이슈를 위한 새로운 설정 기능 제공**

이번 분기 로드맵에서는 완료된 에픽 이슈를 확인하기 위한 새로운 설정 기능이 추가 되었습니다.
**1,3,6,9,12개월** 단위로 완료된 이슈를 최신순으로  필터링 하여 확인할 수 있으며, 필요 시 “**완료된 Epic 이슈 모두 숨기기**“ 라디오 버튼을 클릭하여 항목을 숨길 수도 있습니다.

<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Jira/2022_1Q/6.png"/></center> <br/>

**5-2. 로드맵을 이미지로 내보내기**



생성된 로드맵은 png 이미지 파일 형식으로 내보내기가 가능합니다.

로드맵 우측 상단의 내보내기를 클릭 후 **주, 개월 ,분기** 별로 타임 라인을 설정한 다음, **시작일**과 **종료일**을 설정하여 원하는 기간의 로드맵을 Export할 수 있습니다.

<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Jira/2022_1Q/7.png"/></center> <br/>



------

<br/>

## Jira Service Management



### 1. 인사이트 - 객체에 대한 댓글 기능 추가



<div style="border-radius: 3px; margin: 0.75rem 0px 0px; padding: 8px; display: flex; background-color: rgb(222, 235, 255);"><div style="flex-shrink: 0; height:24px; widht:24px; box-sizing: content-box; padding-right: 8px; text-align: center; user-select: none; color: rgb(0, 82, 204); "><span role="img" style="--icon-primary-color: currentcolor; --icon-secondary-color: var(--ds-surface, #FFFFFF); vertical-align: middle; display: inline-flex; flex-shrink: 0; line-height: 1;"><svg style="width: 24; height: 24; role: presentation;"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C9.34784 22 6.8043 20.9464 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2C14.6522 2 17.1957 3.05357 19.0711 4.92893C20.9464 6.8043 22 9.34784 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22V22ZM12 11.375C11.6685 11.375 11.3505 11.5067 11.1161 11.7411C10.8817 11.9755 10.75 12.2935 10.75 12.625V15.75C10.75 16.0815 10.8817 16.3995 11.1161 16.6339C11.3505 16.8683 11.6685 17 12 17C12.3315 17 12.6495 16.8683 12.8839 16.6339C13.1183 16.3995 13.25 16.0815 13.25 15.75V12.625C13.25 12.2935 13.1183 11.9755 12.8839 11.7411C12.6495 11.5067 12.3315 11.375 12 11.375ZM12 9.96875C12.4558 9.96875 12.893 9.78767 13.2153 9.46534C13.5377 9.14301 13.7188 8.70584 13.7188 8.25C13.7188 7.79416 13.5377 7.35699 13.2153 7.03466C12.893 6.71233 12.4558 6.53125 12 6.53125C11.5442 6.53125 11.107 6.71233 10.7847 7.03466C10.4623 7.35699 10.2812 7.79416 10.2812 8.25C10.2812 8.70584 10.4623 9.14301 10.7847 9.46534C11.107 9.78767 11.5442 9.96875 12 9.96875Z" fill="currentColor"></path></svg></span></div> Jira Service Management의 인사이트 기능은 프리미엄 플랜 이상에서 지원합니다.</div> <br/>



이번 1분기에는 객체의 댓글 기능이 추가되었습니다.

객체를 편집할 수 있는 권한이 있는 경우 댓글 기능을 통해 객체를 추가적으로 설명하거나 편집하고, 불필요할 경우 댓글을 삭제할 수 있습니다.
[여기](https://support.atlassian.com/jira-service-management-cloud/docs/add-edit-or-delete-comments/)를 클릭하여 객체의 댓글 기능에 대해 자세히 알아보세요!



<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Jira%20Service%20Management/2022_1Q/1.png"/></center> <br/>

### 2. 서비스 요청을 위한 양식 제공



기존 서비스 데스크에서 포털이나 이슈를 생성하기 위해서는 Jira의 필드를 추가하여 서비스 데스크를 구성하고 요청하는 필드를 작성하여 이슈를 작성해야 했습니다.

하지만 이제 별도로 고객들에게 서비스 요청을 하기 위한 양식을 제공하여 별도의 필드를 설정하지 않고 요청을 생성할 수 있습니다.


서비스 데스크의 관리자일 경우 **프로젝트 설정 → 양식**에서 새로운 양식을 만들어 해당 양식을 사용하고자 하는 요청을 추가하면 별도의 필드로 양식이 추가됩니다.

<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Jira%20Service%20Management/2022_1Q/2.png"/></center> <br/>

---

<br/>

## Confluence

### 1. Main화면 UI 변경



이번 1분기에는 Confluence 메인화면에 많은 변화가 있었습니다.

아래 이미지의 예시와 같이 좌측 메뉴부터 가장 최근에 방문한 페이지, 사이트에서 업데이트 되고 있는 페이지, 가장 최근에 방문한 스페이스, 공지사항으로 구분되어 업데이트 되었습니다.



<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Confluence/2022_1Q/1.png"/></center> <br/>

 <br/>

### 2. 다른 스페이스의 템플릿 사용하기



기존 Confluence의 템플릿은 전체적으로 사용할 수 있는 템플릿이나 개인 스페이스에 작성한 템플릿만 사용이 가능하며, 다른 스페이스의 템플릿은 사용할 수 없어 템플릿 양식을 복사하여 개인 스페이스에 새로운 템플릿을 만들어 사용해야 하는 불편함이 있었습니다.

이러한 단점을 보완하기 위해 이번 업데이트에는 모든 스페이스의 템플릿을 서로 공유하여 사용이 가능합니다.

페이지를 생성한 후 **“이 스페이스에서 템플릿 선택“** 란의 스페이스를 선택하여 다른 스페이스의 템플릿을 사용할 수 있습니다.



<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Confluence/2022_1Q/2.png"/></center> <br/>



### 3. URL을 사용한 빠른 페이지 작성


URL에서 웹 브라우저에서 “**make.page**“를 입력하면 Default로 설정된 사이트 내 개인 스페이스에 바로 페이지를 생성할 수 있습니다. 만약 사이트에 개인 스페이스가 없을 경우 가장 최근에 방문한 페이지의 스페이스에 페이지가 생성됩니다.

 <center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Confluence/2022_1Q/3.gif"/></center> <br/>

웹 URL을 사용한 페이지를 생성하는 방법에 대해 자세히 확인하시려면 [여기](https://community.atlassian.com/t5/Confluence-articles/Productivity-hack-A-new-Confluence-shortcut-to-create-a-page/ba-p/1923079#M3663)를 클릭해주세요!



<br/>



### 4.  사이트 분석 기능 추가   

상단의 **앱 → Analysis**를 클릭하면 페이지 뷰, 생성, 편집 등에 대한 그래프와 함께 어떤 스페이스를 많이 방문했는지, 누가 페이지를 확인했는지, 어떤 내용을 많이 검색했는지 자세히 확인할 수 있습니다.

<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Confluence/2022_1Q/4.png"/></center> <br/>



### 5. 메일 비활성화 기능 제공



기존에는 Confluence에서 발생하는 이메일을 비활성화 하기 위해서는 메일 핸들러를 비활성화 하거나 개인 설정에서 이메일을 받지 않도록 설정해야 했습니다.

하지만 이제 메일 핸들러를 비활성화 하거나 자체적으로 비활성화 할 필요 없이 Confluence 관리자가 Confluence에서 발생하는 활동에 대한 메일 전송을 비활성화 할 수 있습니다.

해당 기능은 **설정 → 추가 환경 설정 → 이메일 알림** 체크 박스를 비활성화 하면 사용할 수 있습니다.

<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Confluence/2022_1Q/5.png"/></center> <br/>

---



Atlassian은 더 나은 제품을 제공하기 위하여 계속해서 투자하고 개발하고 있습니다.

Atlassian 제품에 대한 궁금증이 있으실 경우 언제든지 Platinum Solution Partner인 디무브에게 문의해주세요!

감사합니다.😃
