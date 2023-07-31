---

layout: post
title: Team '23에서 소개된 Jira Cloud 새로운 기능
Subtitle: Jira Cloud New Feature
date: 2023-05-17
author : ray
featured: true
image : https://blog.dmove.kr/assets/images/Team23/Jira-Cloud-New-Feature/Thumbnail.png
categories: [Inside Atlassian]
tags: [Atlassian, Team23, 아틀라시안, Atlassianteam23, teamanywhere, Jira, Jira Cloud, New Feature, Jira New Feature]

---

안녕하세요! 디무브입니다.

이번에는 Team '23에서 발표된 Jira Cloud의 새롭게 추가될 내용에 대해 공유해 보도록 하겠습니다.

 

이미 여러 번 공지된 것처럼 Atlassian은 2024년 2월 15일 서버 제품에 대한 지원 종료를 선언한 뒤 클라우드 기반 제품에 대해 기능 업데이트를 제공하고 있는데요.

이번에 Jira Cloud에 새롭게 추가된 기능은 무엇인지 함께 확인해보도록 하겠습니다.

 

 

------

## **#1 Jira Dark Theme**

<center><img style="width:100%;" src="/assets/images/Team23/Jira-Cloud-New-Feature/1.png"></center> <br/>

 

사용자들은 눈 피로도, 전력 소모량 등 다양한 이유로 다크모드에서 작업하는 것을 선호하고 있습니다.

이에 맞춰 2022년, 12월 7일 아틀라시안은 웹 페이지에서 다크모드를 적용할 수 있도록 지속적인 업데이트를 진행하고 있는데요.

현재 (2023년 5월) Open Beta 형식으로 다크 모드 테마를 제공하는 중이며, 2023년 중순에는 모든 클라우드 사용자가 다크 모드를 사용할 수 있도록 업데이트를 제공할 계획입니다. 

 

- 다크모드 테마의 경우 Open Beta로 제공 중이기 때문에 아래 순서에 따라 사용자 개인별로 변경한 뒤 적용하여 사용하실 수 있습니다.

  **Jira Cloud 로그인  > 우측 상단의 사용자 프로필 아이콘을 클릭 > Theme (Beta) > Light, Dark, Match System, Original 중 선택**

<center><img style="width:100%;" src="/assets/images/Team23/Jira-Cloud-New-Feature/2.png"></center> <br/>

 

 

------

## **#2 Security In Jira**

 

<center><img style="width:100%;" src="/assets/images/Team23/Jira-Cloud-New-Feature/3.png"></center> <br/>

 

한국 인터넷 진흥원에 따르면 2023년 5월 2일 자로 제공 중인 보안 취약점 레포트(CVE Report)는 총 224,319건으로 수많은 보안 취약점이 존재하고 있습니다.

안전한 DevSecOps 환경 구축에 대한 수요가 점점 늘어남에 따라 Atlassian은 현재 제공 중인 DEVELOPMENT 기능 내부에 Security 기능을 추가하여, DevSecOps 환경을 구축할 수 있도록 기능을 추가할 계획이라 발표했습니다.

 

Security 기능은 Jira 프로젝트와 보안 취약점을 검출할 수 있는 서비스를 연결해 DevSecOps 파이프라인 구동 시 검출할 수 있는 코드의 보안 취약점을 다른 서비스에서 확인하지 않고 Jira 프로젝트 내부에서 바로 확인할 수 있도록 해줍니다.

 

과거에는 **snyk** 서비스와의 연동을 통한 보안 취약점 분석이 가능했지만 향후 **snyk** 뿐만이 아니라 **Mend(구 WhiteSource), StackHawk, Lacework** 등과도 서비스 연계 및 지원을 제공할 예정이라고 발표했습니다.

이러한 Jira Security 기능은 CI/CD에도 도입될 수 있도록 **Jira Release Center, Github Actions, Gitlab Pipeline**과도 연계될 예정입니다.

 

 

------

## **#3 Broader Advanced Roadmap**

 

현재 Jira에서 제공 중인 Advanced Roadmap 기능은 차후에 JSM(Jira Service Management)과 JWM(Jira Work Management)에도 확장할 계획이라 발표했는데요.

관련 내용은 추후 업데이트 되면 다시 한번 전달해 드리겠습니다. 

 

------

## **#4 JSM (Jira Service Management) New templates**

 

<center><img style="width:100%;" src="/assets/images/Team23/Jira-Cloud-New-Feature/4.png"></center> <br/>

 

최근 JSM에 Design Team과 Sales Team을 위한 새로운 템플릿이 추가 되었습니다. 추가된 템플릿은 사용자 필요에 따라 커스터마이징할 수 있습니다. 

 

 

------

## **#5 Virtual Agent- Atlassian Intelligence**



<div style="display: inline-block;">
<div class="left-box">
    <img src="/assets/images/Team23/Jira-Cloud-New-Feature/5.png">
</div>
<div class="right-box">
<img src="/assets/images/Team23/Jira-Cloud-New-Feature/6.png">
</div></div>

 



 

그동안은 아틀라시안에서는 사용자 요청이 있으면 관련 담당자가 요청을 확인하고, 답변을 진행하는 형태로 처리해 왔습니다. 

하지만 최근 들어 ChatGPT와 같은 인공지능 활용이 높아지면서 Atlassian 역시 고객의 요청에 대해 관련 데이터를 학습한 뒤 답변, 처리할 수 있는 Virtual Agent, Atlassian Intelligence를 개발했습니다

 

아틀라시안 AI는 Jira, Confluence 내 작업 내용을 학습한 뒤 사용자가 질문을 했을 때 1차로 답변을 합니다. 이후 사용자의 추가 요청에 따라 2차, 3차 답변을 하거나 요청을 처리할 수 있는 담당자를 배정합니다. 

이 같은 Virtual Agent 기능은 현재 Slack에서만 제공 중이며, 차후 Teams에도 해당 기능을 업데이트할 예정으로 밝혔는데요. 현재 Virtual Agent는 [Early Access](https://www.atlassian.com/ko/software/jira/service-management/features/itsm/virtual-agent)를 신청하여 Slack에서 체험해 보실 수 있습니다.

*AI(Atlassian Intelligence)가 무엇인지, 어떤 기능이 있는지 궁금하시다면 앞선 포스팅에서 확인하실 수 있습니다.* 

 

 

------

## **#6 Slack & Teams Integration**

 

<img src="/assets/images/Team23/Jira-Cloud-New-Feature/7.png"> 

<center>Slack Integration with JSM</center><br/>





<img src="/assets/images/Team23/Jira-Cloud-New-Feature/8.png"> 

<center>Teams Integration with JSM</center><br/>





 

이제 JSM (Jira Service Management)에서도 Slack 연동이 가능하게 되었습니다.

JSM과 Slack을 연동하면 사용자가 JSM에서 요청을 접수했을 때 슬랙에서 관련 알림을 받아볼 수 있게 되어 신속하게 요청을 처리할 수 있기 때문에 더 신속하게 요청을 처리할 수 있다는 장점이 있습니다.

연동 기능은 차후 Teams에도 해당 기능을 제공할 예정이라고 발표했습니다. 

Teams Integration 기능은 사용자가 JSM 관련 앱이 설치되어 있는 채팅방에서 요청을 남겼을 때 JSM에 해당 주제로 요청이 등록되고 이를 JSM 내부에서 확인할 수 있는 기능입니다. 

 

 

------

## **#7 Portal Customization**

 

<img src="/assets/images/Team23/Jira-Cloud-New-Feature/9.png"> 

<center>기존 Portal 화면</center><br/>

<img src="/assets/images/Team23/Jira-Cloud-New-Feature/10.png"> 

<center>업데이트 화면 예시</center> <br/>



이전의 JSM Portal Customize의 경우 설정된 Portal의 Background Color 변경, Header Image 변경, Logo 삽입, 배치 요소 수정 등 커스터마이징할 수 있는 부분이 제한적이라 아쉬운 부분이 많았는데요.

이러한 아쉬움을 해소하기 위해 차후 Customization에 대한 기능을 업데이트해 사용자가 UI 등을 더욱 폭넓게 변경할 수 있도록 지원하겠다고 발표했습니다. 

 

 

------

## **#8 JSM Cloud - Topic**

 

 <center><img src="/assets/images/Team23/Jira-Cloud-New-Feature/11.png"></center>

 

JSM Cloud는 사용자 편의를 위해 사용자가 요청하기 전 주제 별로 해당 내용과 관련된 자료가 있는지 우선적으로 확인 할 수 있는 Topics 기능을 추가했습니다.

해당 기능은 위에 보이는 이미지와 같이 Confluence 내부에 작성되어 있는 Knowledge Base Space, 요청 유형, 외부 리소스별로 추가하여 사용할 수 있습니다. 

 

------

 

여기까지 이번 Team ‘23에서 소개된 Jira Cloud의 새로운 기능에 대해 소개해 드렸는데요.

이 밖에도 Jira에 대해 궁금하신 점 있으시면 언제든 아틀라시안 플래티넘 파트너 디무브에 문의주세요!

감사합니다.

 





