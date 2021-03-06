---

layout: post
title: 2022 Atlassian 주요 제품 릴리즈 노트  ( Apr ~ Jun) - Cloud
Subtitle: Release Note
date: 2022-06-27
author : jackson
image: https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20Server-1.png
categories: [Release Note]
featured: true
tags: [Atlassian, Atlassian Cloud, 아틀라시안, 아틀라시안클라우드, Jira, jira, Jira Cloud, Release, Release Note, Jira Sofrware, Jira Service Management, Confluence,컨플,DevOps, 데브옵스, dev, Dev, 에자일, Agile, Wiki]
---



<!-- ![릴리즈 노트 이미지](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20Server-1.png) -->

안녕하세요. 디무브 입니다! :balloon:

이번 시간에는 2022년 2분기 기간 동안 아틀라시안의 주요제품인 Jira Software, Jira Service Management 및 Confluence의 클라우드 제품 릴리즈 노트를 말씀드리려합니다.

각 제품의 Cloud 버전에 어떠한 변화가 있었는지 여러분과 함께 확인해볼 수 있는 시간을 마련했으니 꼭 확인해보세요!

---

## Jira Software



### 1. 클라우드 간 마이그레이션 지원



기존 클라우드 간 마이그레이션 방법은 Zip파일로 클라우드 사이트를 백업 후 새로운 사이트에 복원하는 방법 밖에 없어 백업과 복원간 많은 시간이 소요되며 불완전한 복원으로 인해 Jira를 사용하기 어려웠습니다. 

하지만 이제 클라우드 환경에서도 Jira Cloud Migration Assistant 툴이 지원되어 둘 이상의 클라우드 사이트 간의 사용자 정보와 Jira 환경을 마이그레이션 할 수 있습니다. <br/>

<center><img sytle="width:70%;" src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Jira/2022_2Q/1.png"></center> <br/>





<br/>



### 2. 볼 수 있는 이슈의 갯수 개선

 

Jira의 이슈 안에서 연결된 이슈나 하위 이슈로 볼 수 있는 최대 갯수는 100개 정도로 만약 100개 보다 더 많은 갯수의 이슈를 보려면 필터나 이슈 검색을 통해 찾아봐야 하는 불편함이 있었습니다. 하지만 이제 최대 500개 까지의 이슈를 한 이슈 내에서 확인이 가능합니다.  

<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Jira/2022_2Q/2.png"/></center>

<center> <p style="color:rgba(0,0,0,.55);">이슈 보기 화면</p></center> <br/>

또한 로드맵에서 볼 수 있는 이슈의 갯수를 기존 최대 3,000개에서 5,000개 까지 확인할 수 있도록 개선되었습니다.



<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Jira/2022_2Q/3.png"/></center> <br/>

<center> <p style="color:rgba(0,0,0,.55);">Jira 로드맵</p></center> <br/>

### 3. 보드에서 개발 현황 확인

 

기존의 개발 현황을 확인하기 위해서는 이슈를 클릭한 다음, 이슈 필드의 “Development“ 패널을 통해 개발현황을 확인해야 하여 전체적인 이슈의 개발 현황을 확인할 때는 많은 어려움이 있었습니다. 

 

하지만 이제 Jira의 보드에서 개발 현황을 바로 확인할 수 있습니다. 카드의 브랜치 아이콘에 마우스를 대면 풀 리퀘스트나 브랜치, 커밋 등의 정보를 확인할 수 있어 하나하나 이슈를 접근할 필요 없이 개발 현황을 바로 확인이 가능합니다.

<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Jira/2022_2Q/4.png"/></center> <br/>

### 4. 대시 보드 복원 (JSM도 동일하게 적용)

 

기존 Jira는 대시보드 삭제 시 복구가 불가능하기 때문에 다시 일일이 만들어야 하는 번거로움이 있었습니다. 이제 프로젝트 처럼 휴지통에 최대 60일 동안 보관이 가능하기 때문에 삭제한 대시보드를 다시 복구할 수 있습니다.

 

대시보드를 복구하기 위해서는 관리자 계정으로 로그인 후 **시스템 → 좌측 메뉴의 대시보드(Dashboards) →**
**Show dashboards moved to trash 란을 체크 → Restore**를 클릭하여 복구할 수 있습니다.



<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Jira/2022_2Q/5.png"/></center> 





<center><img style="width:50%;" src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Jira/2022_2Q/6.png"/></center> 





### 5. 프로젝트 요약 페이지 추가  

이번에 새롭게 추가된 Jira의 기능 중 하나는 프로젝트 진행상황을 보기 쉽게 한 눈에 볼 수 있는 것입니다.

아래 이미지와 같이 하나의 프로젝트 내 이슈 상태에 따른 프로젝트 진행 상황과 우선 순위, 프로젝트를 진행 중인 사람, 연관된 프로젝트 등을 정리하여 하나의 페이지에 표시됩니다. 



<center><img style="width: 70%;" src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Jira/2022_2Q/7.png"/></center> 

<br/>

**버그 개선점**

- JQL을 통해 스프린트 검색 시 하위 작업 이슈가 검색되지 않은 이슈를 해결하였습니다.

---

## Jira Service Management



### 1. 대기열 큐의 성능 및 확장성 향상

 

1,000개 이상의 이슈가 있는 대기열의 경우 프로젝트 사이드 바에 이슈 수가 999+로 표시됩니다. 이에 큐를 선택하게 되면 정확한 이슈의 갯수가 대기열에 표시되어 모든 대기열에 있는 이슈를 새로 고침 빈도가 줄어들어 성능을 향상 시킬 수 있습니다.



<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Jira%20Service%20Management/2022_2Q/1.png"/></center> <br/>

### 2. 변경 요청에 대한 리스크를 식별하는 새로운 방법 도입

 

이제 변경 요청 사항에 대한 이슈를 볼 때 인사이트 패널을 사용하여 변경 사항을 승인하기 전 변경 사항에 대한 잠재적인 위험 요소를 스캔할 수 있습니다.

스캔 실행 시 다음과 같은 항목이 표시됩니다:

 

- Changes : 변경 사항으로 설정된 동일한 기간에 하나 이상의 변경 사항이 있는 경우 충돌사항으로 인식하여 표시합니다. 또한 변경 사항의 계획된 종료일로부터 최대 일주일 이내에 계획 되어 있는다른 변경 내용도 보여 줍니다.

  

  <center><img style="width:70%;" src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Jira%20Service%20Management/2022_2Q/2.png"/></center> <br/>

  

  

- Incidents : 변경 사항 적용 시 영향을 받는 서비스와 관련된 인시던트를 표시합니다.

 

<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Jira%20Service%20Management/2022_2Q/3.png"/></center> <br/>

 

### 3. 이해관계자 필드 추가

 

인시던트 관리에서 이해관계자는 인시던트 의사결정 등 인시던트 해결을 위해 필요한 존재이며 이해관계자 관리는 인시던트 대응에 있어 중요하면서 어려운 요소입니다. 이에 Jira 이슈에서 발생한 인시던트 내 이해관계자 필드를 추가하여 누가 해당 인시던트의 이해관계자인지 바로 확인할 수 있으며 필요 시 새로운 이해관계자를 추가할 수 있습니다.

<center><img style="width:70%;" src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Jira%20Service%20Management/2022_2Q/4.png"/></center> <br/>

---



## Confluence



### 1. 패널의 커스터마이징

Confluence에서 이용 가능한 기존 패널의 경우 5가지 색상 패널만 제공하여 간단한 정보만 입력해야 했기 때문에 많은 사용자 분들의 아쉬움이 있었습니다. 이제 패널의 커스터마이징을 통해 다양한 색상과 이모지를 추가하여 패널을 구성할 수 있습니다.  커스터 마이징된 패널은 아래와 같이 구성이 가능합니다.



<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Confluence/2022_2Q/1.png"/></center> <br/>

 <br/>

### 2. 저장되지 않은 초안 찾기

 

이번 분기 업데이트 중 하나는 저장하지 않거나 작성 중 취소한 초안들을 찾을 수 있도록 하였습니다. Confluence 상단 메뉴의 **Recent → Drafts** 로 확인하거나 본인의 프로필로 이동한 후 **Drafts**를 클릭하여 본인이 작성한 초안들을 확인할 수 있습니다.

 

<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Confluence/2022_2Q/2.png"/></center> <br/>

<center> <p style="color:rgba(0,0,0,.55);">상단 메뉴 바에서 초안 찾기</p></center> <br/>

 

<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Confluence/2022_2Q/3.png"/></center> <center> <p style="color:rgba(0,0,0,.55);">프로필에서 초안 찾기</p></center> <br/>

 

### 3. 보관할 페이지 추천 (Confluence 프리미엄 플랜에서만 지원합니다)

 



<div style="border-radius: 3px; margin: 0.75rem 0px 0px; padding: 8px; display: flex; background-color: rgb(222, 235, 255);"><div style="flex-shrink: 0; height:24px; widht:24px; box-sizing: content-box; padding-right: 8px; text-align: center; user-select: none; color: rgb(0, 82, 204); "><span role="img" style="--icon-primary-color: currentcolor; --icon-secondary-color: var(--ds-surface, #FFFFFF); vertical-align: middle; display: inline-flex; flex-shrink: 0; line-height: 1;"><svg style="width: 24; height: 24; role: presentation;"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C9.34784 22 6.8043 20.9464 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2C14.6522 2 17.1957 3.05357 19.0711 4.92893C20.9464 6.8043 22 9.34784 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22V22ZM12 11.375C11.6685 11.375 11.3505 11.5067 11.1161 11.7411C10.8817 11.9755 10.75 12.2935 10.75 12.625V15.75C10.75 16.0815 10.8817 16.3995 11.1161 16.6339C11.3505 16.8683 11.6685 17 12 17C12.3315 17 12.6495 16.8683 12.8839 16.6339C13.1183 16.3995 13.25 16.0815 13.25 15.75V12.625C13.25 12.2935 13.1183 11.9755 12.8839 11.7411C12.6495 11.5067 12.3315 11.375 12 11.375ZM12 9.96875C12.4558 9.96875 12.893 9.78767 13.2153 9.46534C13.5377 9.14301 13.7188 8.70584 13.7188 8.25C13.7188 7.79416 13.5377 7.35699 13.2153 7.03466C12.893 6.71233 12.4558 6.53125 12 6.53125C11.5442 6.53125 11.107 6.71233 10.7847 7.03466C10.4623 7.35699 10.2812 7.79416 10.2812 8.25C10.2812 8.70584 10.4623 9.14301 10.7847 9.46534C11.107 9.78767 11.5442 9.96875 12 9.96875Z" fill="currentColor"></path></svg></span></div> <div class="notebox-text">해당 기능은 Confluence 프리미엄 플랜 기능 중 하나인 Bulk Archive 기능에서 발생하는 이벤트 입니다.</div></div>

 

Confluence 의 **일괄 보관(Bulk Archive)** 기능은 페이지를 일괄 보관할 때 사용하는 기능이며 스페이스 내 **관리(admin)** 권한이 있는 사용자만 사용이 가능합니다. 

만약 **일괄 보관(Bulk Archive)** 기능을 사용할 수 있는 사용자가 전체 페이지를 보관할 때 특정 페이지를 볼 수 없거나 보관할 수 있는 권한이 없는 페이지가 있을 경우, 권한이 없는 페이지는 생략하고 나머지 페이지는 보관됩니다.

<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Confluence/2022_2Q/4.png"/></center> <br/>

<center> <p style="color:rgba(0,0,0,.55);">기본 페이지 구조</p></center> <br/>

<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Confluence/2022_2Q/5.png"/></center> <br/>

<center> <p style="color:rgba(0,0,0,.55);">사용자가 페이지를 볼 수 있는 권한이 없는 경우 보관 시 볼 수 없는 페이지는 생략되어 표시됩니다.</p></center> <br/>

 

페이지 일괄 보관 완료 후 메일이나 알림을 통해 보관이 생략된 페이지가 있음을 알림과 함께 보관할 수 있는 방법을 아래의 이미지와 안내합니다. 

<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Confluence/2022_2Q/6.png"/></center> <br/>

 

------

 

Atlassian은 더 나은 제품을 제공하기 위하여 계속해서 투자하고 개발하고 있습니다.

Atlassian 제품에 대한 궁금증이 있으실 경우 언제든지 Platinum Solution Partner인 디무브에게 문의해주세요!

감사합니다.😃
