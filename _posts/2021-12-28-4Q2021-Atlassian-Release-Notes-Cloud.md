---
layout: post
title: 2021 Atlassian 주요 제품 릴리즈 노트 (Oct ~ Dec) - Cloud
Subtitle: Release Note
date: 2021-12-28
author : eddie
image : assets/images/banners/Release%20Note%20Server/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20Server-1.png
categories: [Release Note]
tags: [Atlassian, Atlassian Cloud, 아틀라시안, 아틀라시안클라우드, Jira, jira, Jira Cloud, Release, Release Note, Jira Sofrware, Jira Service Management, Confluence,컨플,DevOps, 데브옵스, dev, Dev, 에자일, Agile, Wiki]
---




안녕하세요. 디무브 입니다! 🎈 

이번 시간에는 4분기인 10~12월 동안 아틀라시안의 주요 제품인 Jira, Jira Service Management, Confluence Cloud 버전에 어떠한 변화가 있었는지 정리해 보았습니다.

많은 기능들이 개선되었으니 꼭 확인해보세요!

---

## Jira Software



### 1. Cloud to Cloud Migration 지원 

<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Jira/2021_4Q/1.png"></center>



기존에는 클라우드 사이트 간 마이그레이션 진행 시 백업 후 서버로 데이터를 이동 한 뒤에 서버에서 **Migration Assistant Tool**을 사용하여 마이그레이션을 진행하거나 백업 파일을 바로 새로운 클라우드 사이트에 복원 하여 진행해야만 했습니다. 

하지만 이러한 기존 방법들은 시간이 너무 많이 소요되거나 불완전한 이슈가 많이 생성되는 문제가 있었습니다.이제 Cloud에서도 Migration Assistant Tool을 사용할 수 있어 Cloud to Cloud로 바로 마이그레이션이 가능합니다

- 해당 기능은 관리자 권한을 가진 사람만이 수행이 가능하며 **시스템 → 가져오기 및 내보내기 → Cloud 사이트 마이그레이션**에서 수행이 가능합니다.



<br/>

<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Jira/2021_4Q/2.png"/></center>



### 2**. Cycle Time 보고서 기능 추가**

![](https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Jira/2021_4Q/3.png)

Cycle Time 보고서는 Jira에서 Bitbucket의 파이프라인을 통해 배포할 때 전체적으로 배포가 진행되는 주기와 전체적인 데이터의 이상값을 확인하기 위해 시각적으로 볼 수 있는 보고서 입니다. <br/>   

해당 보고서는 최대 12주 이전 까지의 프로젝트의 주기를 비교하여 1주일 동안의 평균 주기를 보고서에 표시합니다. 
여기서 사용되는 주기는 첫 번째 커밋부터 코드가 배포되는 것 까지의 시간을 의미합니다. 만약 같은 내용이 두 번 이상 배포된 경우 Cycle Time 보고서에는 가장 최근에 배포된 것을 확인합니다.

 

Cycle Time 보고서에 대해 자세히 확인하고 싶으실 경우 [여기](https://support.atlassian.com/jira-software-cloud/docs/view-and-understand-your-cycle-time-report/)를 클릭하여 확인해보세요!

------

<br/>

## Jira Service Management

### 1. 인사이트:  객체에 첨부 파일 삽입 기능 추가



<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Jira%20Service%20Management/2021_4Q/1.png"/></center>

 이제 Insight에서 객체에 접근할 때 필요한 모든 정보를 얻을 수 있도록 자산과 관련된 파일, 사진, 기타 정보에 대한 첨부파일을 객체에 추가할 수 있습니다. 첨부파일을 삽입 하려면 파일을 **드래그 앤 드롭**하여 첨부하거나 **파일 첨부**를 클릭하여 파일을 첨부 할 수 있습니다.

**<주의!>**

1.자산 관리에 필요한 Insight는 Jira Service Management의 프리미엄 플랜 이상의 플랜에서 지원됩니다.

2.첨부 파일을 추가하기 위해서는 객체에 대한 편집 권한이 있어야 합니다. 

<br/>

### 2. 인사이트: 객체 스키마 가져오기 기능 추가



![](https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Jira%20Service%20Management/2021_4Q/2.png)



   이제 인사이트에서 하나 이상의 객체 스키마를 가져올 수 있습니다. 가져오기 형식은 CSV, DSC, EXT, JSON 형식의 파일을 지원합니다. [여기](https://support.atlassian.com/organization-administration/docs/update-a-product-url/)를 클릭하여 객체 스키마를 가져오는 방법에 대해 자세히 확인할 수 있습니다.

---

<br/>

## Confluence

### 1. 템플릿에 첨부파일 삽입 기능 추가



![](https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Confluence/2021_4Q/1.png)

이제 새 템플릿을 만들거나 기존 템플릿을 편집할 때 이미지 및 첨부 파일을 추가하여 템플릿을 더 실용적이고 유용하게 생성할 수 있습니다.

**/image** 또는 **/file** 의 단축키를 입력하여 첨부파일을 삽입하거나 **드래그 앤 드롭**을 통해 첨부파일을 삽입 할 수 있습니다.

 <br/>

### 2. Confluence 안드로이드 앱 개선 사항 - 댓글 UI 개선



<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Confluence/2021_4Q/2.png"></center>

기존 Confluence 앱 버전의 경우 댓글을 확인하기 위해 페이지 전체를 스크롤로 끝까지 내린 후 확인해야 하는 불편함이 있었습니다. 이번 업데이트 된 2.13 버전 이상의 버전 부터는 페이지 우측 하단에 댓글 아이콘을 클릭하여 댓글로 바로 이동이 가능합니다. 

- 예시의 이미지는 안드로이드 2.13.1 버전입니다.





### 3. 보관된 컨텐츠 검색 기능 추가

![](https://blog.dmove.kr/assets/images/banners/Release%20Note%20Cloud/Confluence/2021_4Q/3.png)



기존 Confluence의 검색 기능은 숨겨진 컨텐츠를 찾는 기능이 없어 파일이나 페이지를 찾을 때 찾고자 하는 페이지가 보관되어 있는지, 아니면 특정 스페이스에 있는지 찾기 어려웠습니다. 이번 업데이트에서는 Confluence의 페이지 또는 컨텐츠를 찾을 때 보관된 페이지, 파일 등을 포함한 컨텐츠까지 찾을 수 있습니다. 

Confluence의 고급 검색 기능에서 **보관된 컨텐츠(Archived content)**에서 **검색에 포함(Include in Search)**을 체크하여 보관되어 있는 모든 페이지나 첨부파일 등 컨텐츠를 확인할 수 있습니다.

---



Atlassian은 더 나은 제품을 제공하기 위하여 계속해서 투자하고 개발하고 있습니다.

Atlassian 제품에 대한 궁금증이 있으실 경우 언제든지 Platinum Solution Partner인 디무브에게 문의해주세요!

감사합니다.😃

