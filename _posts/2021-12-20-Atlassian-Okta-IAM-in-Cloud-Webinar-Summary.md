---
layout: post
title: 웨비나 생생후기 - 제로 트러스트 보안 기반의 클라우드 계정 관리 및 접근 통제
Subtitle: Identity and Access Management in Cloud with Atlassian and Okta
date: 2021-12-20
author : jenna
image : assets/images/Blog%20Thumbnails/211220-IAM Webinar.png
categories: [Webinars]
tags: [Atlassian, 아틀라시안, 옥타, Okta, IAM, SSO, IDaaS, 클라우드계정관리, 제로트러스트, Zerotrust, 클라우드보안, Cloud, ID Management, TalkIT, 토크아이티]
---



안녕하세요. 디무브 입니다.  🎈

지난 12월14일 화요일 오후4시 진행된 디무브의 “[제로 트러스트 보안 기반의 클라우드 계정 관리 및 접근 통제](https://talkit.tv/Event/2730)” 웨비나가 종료되었습니다.

지난 10월 디무브에서는 IAM 업계의 글로벌 리더인 Okta와 파트너쉽을 체결하며, 클라우드 환경에서의 계정 관리와 보안강화는 물론 아틀라시안 솔루션과의 연동을 통한 확장을 제공하게 되었습니다.

이에 따라 이번 웨비나에서는 아틀라시안의 클라우드 ID 및 보안 환경을 명확하게 이해하고 보안을 강화할 수 있는 방법과 Okta의 IAM 솔루션을 통해 사용자 관리를 위한 프로세스를 개선할 수 있는 핵심 전략을 소개해드렸는데요.

많은 기업들이 클라우드로의 여정을 시작하고 새로운 기술과 플랫폼이 지속적으로 확산됨에 따라, SaaS와 온프레미스 앱 모두에 대한 ID 및 액세스 관리에 대한 관심이 높아진 만큼 정말 많은 분들께서 등록해주시고 라이브 세션에 참석해 주셨습니다.

다시 한번, 참여해주신 모든 분들께 감사의 말씀을 드리며, 진행했던 웨비나에 대해 리뷰하는 시간을 가져보려 합니다.

----------

본 웨비나는 아래 아젠다와 같이 크게 3가지 파트로 구성하여 진행하였습니다.

| 시간 | 주제 |
|---|---|
| 16:00 ~ 16:15 | **Cloud 환경에서의 Identity & Access 관리** <br/> - 조직의 보안을 위해 ID 및 액세스 관리가 중요한 이유 <br/> - Zero Trust 보안 모델 |
| 16:15 ~ 16:35 | **보안 강화를 위한 클라우드 ID 공급자의 역할** <br/> - 아이덴티티의 역할과 중요성 <br/> - Okta 솔루션 데모 |
| 16:35 ~ 16:55 | **Atlassian 클라우드 제품의 연결과 확장** <br/> - Atlassian Access를 통한 ID 관리 <br/> - Access+Okta Integration 데모 |
| 16:55 ~ 17:00 | **Q&A** <br/> - 질의응답 |

---

## Session 1. Cloud 환경에서의 Identity & Access 관리



<center><iframe width="600" height="400" src="https://www.youtube.com/embed/7bB0bYglI0w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </center>

<br>

이제는 많은 기업들이 클라우드로 인프라를 전환하게 되면서 기존의 네트워크 경계를 기반으로 설계된 전통적인 보안 인프라는 더이상 안전하지 않게 되었습니다.

그 배경은 바로 SaaS 기반의 기업용 애플리케이션이 증가하면서 SaaS 앱을 사용하는 사용자도 증가하게 되었고, 원격 근무나 재택 근무와 같은 근무환경은 빠르게 변화였기 때문인데요.

또한 사용자들이 회사 내의 인증된 PC만이 아닌 개인 노트북, 모바일, 태블릿 등 다양한 기기를 통해 서비스에 접근하게 되면서 클라우드 보안에 대한 위험은 증가하게 되었습니다.

더이상 모든 IP 주소와 기기를 파악하고 추적하는 것은 현실적으로 불가능해졌고 신뢰할 수 있는 네트워크를 정의할 수 없기 때문에 우리는 모든 접근을 신뢰하지 않고 항상 검증해야 합니다.

이것이 바로 ‘제로 트러스트 보안 모델’의 핵심 개념입니다.

아이덴티티를 기반으로 하는 제로 트러스트 보안 모델의 3가지 원칙과 특징이 궁금하시다면 세션1의 영상을 확인해주세요!


## Session 2. **보안 강화를 위한 클라우드 ID 공급자의 역할**

<center><iframe width="600" height="400" src="https://www.youtube.com/embed/fsQHhy_5vK8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>

<br>

Okta 자체 발간 보고서에 따르면 기업이 평균적으로 사용하는 앱 숫자는 88개에 이르고 이 숫자는 지속적으로 늘어나고 있는 추세라고 합니다.

이번 웨비나를 준비하면서 진행한 사전 설문조사 결과에서도 60%에 가까운 국내 기업들이 이미 1개 이상의 SaaS앱을 사용하고 있다는 것을 알 수 있었습니다.

그리고 이러한 트렌드는 더욱 빠르게 가속화 될 것으로 전망하고 있는데요.

IDaaS 영역의 선두주자인 Okta는 아이덴티티 및 액세스 통합, MFA등을 통한 인증 방법 강화, 컨텍스트 기반의 액세스 관리와 같은 강력한 기능과 7000개이상의 SaaS앱과의 연동을 지원하며 클라우드 환경은 물론 온프레미스까지 아우르는 ID 관리 솔루션을 제공하고 있습니다.

세션2에서는 Okta 솔루션을 통해 사용하는 SaaS앱을 연동하고 인증 절차를 설정하는 방법을 데모를 통해 소개해 드립니다.


## Session 3. Atlassian 클라우드 제품의 연결과 확장

<center><iframe width="600" height="400" src="https://www.youtube.com/embed/Zh_6xwdfocQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>

<br> 

앞 세션에서 제로 트러스트 보안 모델을 기반으로 하는 Okta 솔루션에 대해 알아보았다면, 세션3에서는 아틀라시안클 라우드의 보안을 강화하는 방안을 이야기했는데요.

아틀라시안의 Single Account 정책과 아틀라시안이 Organization(조직)과 Site(사이트)라는 접근 방식으로 사용자 개인은 물론 조직 모두에게 제공하는 이점 또한 소개해 드렸습니다.

또한 아틀라시안 클라우드는 “[Atlassian Access](http://dmove.co.kr/products/atlassian/atlassian-access)” 제품을 통해 Okta와의 자체 연동을 지원하며 유저 프로비저닝, 관리자 권한 감사, 활동 내역 감사, SSO 등의 기능을 제공하고 있습니다.

Atlassian Access 제품에 대한 기능 소개 및 Okta와의 연동법이 궁금하시다면 세션3의 데모영상을 놓치지 마세요!

----------

1시간동안 제로 트러스트 보안 모델을 기반으로 아틀라시안과 옥타의 클라우드 ID 및 접근관리에 대한 핵심 내용으로 알차게 구성해 보았는데요!

참석해 주신 분들께서 너무 좋은 평가를 많이 남겨주셨답니다.

오히려 웨비나 시간을 더 늘려달라는 분들도 꽤 계셔서 저희가 준비한 시간이 많은 분들께 도움이 된 것 같아 저희에게도 매우 유의미하고 감사했던 시간이었습니다. 🙂

<br>

> “흠결 전무한 최고 웨비나 체제,진행으로 평가되어,더할 평론 없음”
> 
> “데모 중심으로 진행된 방식이다 보니.. 실무적으로 많은 도움이 되었습니다.”
> 
> “Atlassian의 클라우드 ID와 보안 환경을 명확하게 이해하고 보안을 강화할 수 있는 방법에 대한 개념을 파악할 수 있어서 매우 유익하였습니다”
> 
> “다양한 세션에서 실무에 도움이 되는 정보 많이 주시어 감사드립니다.”
> 
> “어려울 수 있는 내용을 이해하기 쉽게 잘 설명해주신것 같습니다.”
> 
> “혼자서 진행하셨는데도 매끄럽게 잘 진행이 된 것 같습니다. 설명 및 데모도 충실하여, 이해에 많은 도움이 되었습니다. ”
> 
> “웨비나를 통해서 클라우드와 관련해서 검토해보고 더나은 방향으로 선택할 수 있는 좋은 시간이 되었습니다.”

<br>

웨비나에 대한 전체 내용이 궁금하신 분들께서는, 디무브 [유튜브 채널](https://www.youtube.com/watch?v=N43fNu1QwXY)에서 확인하실 수 있습니다.


추후에도 웨비나에서 다룬 내용에 대해 궁금하신 점이 있으시면 저희에게 언제든지 알려주세요.

디무브에서는 앞으로도 다양한 주제로 찾아뵐 것을 약속 드리며, 본 포스팅을 마무리하도록 하겠습니다.

감사합니다. 🙂
