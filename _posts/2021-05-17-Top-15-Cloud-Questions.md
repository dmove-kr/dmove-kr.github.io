---
layout: post
title: Atlassian Cloud 에 대한 15가지 질문
subtitle: Atlassian Cloud FAQ
date: 2021-05-17
author : jenna
image : assets/images/blog/cloud-enterprise.png
categories:  [Atlassian Cloud]
tags: [Atlassian Team 21, Atlassian, Jira, Confluence, Cloud Migration, Atlassian Cloud]
---



안녕하세요, 디무브 입니다!  🎈

지난 4월 말 진행했던 Atlassian Team 21에서는 Atlassian Cloud 에 대해 고객들이 가장 많이 궁금해하는 질문과 그에 대한 답변을 공유했습니다. 

본 포스팅에서는 Cloud 제품 및 Cloud Migration 에 대한 FAQ Session을 아주 쉽고 간단하게 정리해 보았습니다. 

---

### 1. 클라우드 데이터도 암호화가 되나요? 
네, 데이터를 전송중이거나 저장중일 때 암호화 됩니다. 

### 2. 아틀라시안 클라우드는 데이터 레지던시(Data Residency)를 제공하나요?
현재는 Enterprise Plan의 경우 Standard 및 Premium 플랜의 경우 호주, 캐나다, 영국 및 일본에 한해서 2021 Q3 적용을 목표로 하고 있습니다. 
아틀라시안 홈페이지의 [Cloud Roadmap](https://www.atlassian.com/roadmap/cloud "https://www.atlassian.com/roadmap/cloud") 페이지에서 자세한 내용을 확인할 수 있습니다.

- 데이터 레지던시(Data Residency): 국내 사용자의 데이터가 국내에서 처리, 수집, 저장 되도록 하는 것

### 3.클라우드는 얼마나 안전한가요?

데이터 암호화, 보안 테스트, 3rd Party 감사(SOC2,ISO) 등을 통해 안전성을 보장하고 있으며 [Atlassian Trust Center](https://www.atlassian.com/trust "https://www.atlassian.com/trust") 에서에서 클라우드 제품의 신뢰성, 프라이버시, 컴플라이언스에 대한 자세한 내용을 확인할 수 있습니다

### 4. 아틀라시안은 GDPR 을 준수하나요?

네, 아틀라시안의 글로벌 팀은 아틀라시안 제품 제공, 운영, 또한 고객 서비스에 GDPR을 준수하고 적용하고 있습니다.

아틀라시안 내부 조직을 운영하는데 있어서 GDPR 을 기반으로 유기적인 프라이버시 프로그램을 적용하고 있습니다.

또한 고객의 GDPR 준수를 위하여 아래와 같은 내용을 제공하고 있습니다.

![GDPR](/assets/images/blog/atlassian_gdpr.png)

보다 자세한 내용은 [Atlassian’s GDPR Commitment](https://www.atlassian.com/trust/privacy/GDPR "https://www.atlassian.com/trust/privacy/GDPR") 에서 확인할 수 있습니다.

### 5. 아틀라시안은 언제 HIPAA, FedRAMP, NIST 인증을 받을 예정인가요?
[Cloud Roadmap](https://www.atlassian.com/roadmap/cloud?category=compliance& "https://www.atlassian.com/roadmap/cloud?category=compliance&") 의 Compliance 파트에서 타임라인을 확인할 수 있습니다.

- HIPAA(Health Insurance Portability and Accountability Act of 1996) : 건강보험정보의 이전 및 책임에 대한 법률
- FedRAMP(Federal Risk and. Authorization Management Program) : 미국의 클라우드 서비스 보안인증제도
- NIST(National Institute of Standards and Technology) : 미국 국립표준기술연구소

### 6. 클라우드의 새로운 기능 릴리즈를 어떻게 관리할 수 있나요?

클라우드 제품은 기본적으로 지속적으로 업데이트 되지만, Release Track 기능을 통해 관리자는 변경 사항 적용 시점과 여부를 관리할 수 있습니다.

### 7. 변경 사항이 적용되기 전에 테스트를 하려면 어떻게 해야하나요?

Cloud Enterprise 또는 Premium Plan 에는 “Sand box”라는 테스트 사이트 기능이 포함되어 있어, 마켓플레이스 앱을 미리 설치해 보거나 새로운 기능을 테스트해 볼 수 있습니다.

### 8. Cloud URL 주소를 설정할 수 있나요?

고객은 최초에 클라우드 사이트를 생성할 때 “ "xxxx.atlassian.net“ URL 형식에서 xxxx 부분을 원하는 내용으로 만들 수 있습니다. 
그러나, 많은 고객들이 회사 또는 브랜드명으로 사이트 주소를 변경하고 싶어하는 요구사항을 반영하여 (예시: jira.dmove.com) 곧 지원 예정입니다.

### 9. Cloud 에서 특정 IP 주소의 접근을 제어할 수 있나요?

네, Cloud Enterprise 또는 Premium Plan 에는 “IP allowlisting” 이라는 기능으로 특정 IP의 접근을 제어할 수 있으므로 회사의 데이터에 접근하기 위해서는 허용된 IP에서만 접속하도록 할 수 있습니다.

### 10. Active Directory/LDAP과 Atlassian 클라우드 제품을 연결할 수 있나요?

네, 물론 가능하지만 Atlassian Access 제품을 별도로 구독해야 합니다. 
Atlassian Access는 모든 Atlassian Cloud 제품과 사용자에 대해 통합 사용자 및 정책 관리를 제공하는 제품입니다. 

여러개의 보안 정책을 한 곳에서 관리함으로써 더욱 강화된 보안과 컴플라이언스 관리가 가능하고 사용자 관리를 간소화 시켜줍니다.

### 11. Atlassian Cloud는 SAML single sign-on (SSO)을 제공하나요?

물론입니다. 
Atlassian Access를 통해 Okta, Azure Active Directory, OneLogin 등과 같은 SSO 또는 ID 공급 업체의 제품과 연결할 수 있습니다.

### 12. 기존의 서버 어플리케이션이 클라우드에서도 사용이 가능한지 어떻게 알 수 있나요?

“[Cloud Migration Assistant](https://www.atlassian.com/ko/migration/cloud/guide/assess/audit-apps#audit-and-assess-apps "https://www.atlassian.com/ko/migration/cloud/guide/assess/audit-apps#audit-and-assess-apps")” 를 다운로드해서 알아볼 수 있습니다. 
App Assessment를 기능을 통해 어떤 앱이 클라우드에서 사용 가능하고, 현재 서버에서 어떻게 앱이 사용되고 있는지 확인합니다. 
이에 대한 데이터를 통해 클라우드로 마이그레이션해야하는 앱이 어떤건지를 제대로 파악하고 결정할 수 있습니다.

![Migration Assistant](/assets/images/blog/migration_assistant.png)

[Jira Cloud Migration Assistant](https://marketplace.atlassian.com/apps/1222010/jira-cloud-migration-assistant?hosting=datacenter&tab=overview "https://marketplace.atlassian.com/apps/1222010/jira-cloud-migration-assistant?hosting=datacenter&tab=overview") 와 [Confluence Cloud Migration Assistant](https://marketplace.atlassian.com/apps/1219672/confluence-cloud-migration-assistant?hosting=datacenter&tab=overview "https://marketplace.atlassian.com/apps/1219672/confluence-cloud-migration-assistant?hosting=datacenter&tab=overview") 두가지가 현재 출시되었으며 아틀라시안 마켓 플레이스를 통해 무료로 설치가 가능합니다.

### 13. 무료 클라우드 마이그레이션 평가판 사용은 어떻게 하나요?

기본적으로 Cloud Migration Trial을 통해 기능과 가격 정책 등에 대해서 알아 볼 수 있습니다. 

10,000유저까지는 기존에 사용하던 서버 유저수에 맞춰서 Trial을 적용할 수 있으며, 서버 유지보수 기간이나 데이터 센터 구독 기간이 남아 있는 만큼 최대 12개월 동안 무상으로 제공합니다.

예를 들어, 현재 1,000명의 서버 라이선스를 보유하고있고 유지보수 기간이 6개월 남아있다면 1,000명에 대한 Cloud Migration Trial을 6개월동안 사용할 수 있습니다.

이러한 지원을 통해 마이그레이션 테스트를 위한 이중 비용을 지불하지 않고 보다 수월하게 마이그레이션을 준비할 수 있습니다.

### 14. 현재 사용 중인 서버나 데이터센터 제품과 클라우드를 연결할 수 있나요?

네, 가능합니다. 몇몇 제품은 그대로 두고 순차적으로 마이그레이션을 할 수 있습니다. 서버와 데이터센터 제품과 클라우드 간의 양방향 연결을 생성하여 활용할 수 있습니다.

### 15. 일반적으로 클라우드 마이그레이션에 걸리는 기간은 얼마나 되나요?

클라우드 제품에 대해 알아 볼 경우 클라우드 마이그레이션에 실제로 얼마나 걸리는지를 가장 궁금해 합니다.

이에 대해 콕 찝어서 얼마가 걸린다 라고 말하기는 매우 어렵지만, 기존의 환경이 복잡할 수록 마이그레이션에 걸리는 시간은 증가합니다.

얼마나 많은 사용자를 클라우드로 이전할 것인지, 마켓플레이스 앱은 어떤걸 옮길 건지, 커스터마이징이 필요한 부분이 어느정도 되는지 등에 대해서 사전에 미리 진단하는 것이 매우 중요합니다.

그러나, 클라우드 마이그레이션을 시작하는 것에 대해서 너무 큰 부담을 갖지 않으셔도 됩니다.

설문조사에 따르면, 40%에 가까운 고객들이 마이그레이션이 예상보다 간편하고 수월했다 라고 대답하였고, 마이그레이션 기간도 예상보다 훨씬 빨랐다고 대답한 고객이 33%에 달했습니다.

또한 89%의 고객이 클라우드로 전환한지 6개월이 채 되기도 전에 클라우드의 장점을 경험하고 있다고 답하였습니다.

- Source: TechValidate survey of 320 Atlassian customers_


---

이처럼, Atlassian 에서는 기존 고객들의 클라우드 마이그레이션을 위한 지원을 아끼지 않고 있습니다. 

또한 Atlassian을 사용하는 대부분의 고객은 클라우드로 전환하거나 시작하고 있습니다. 

Atlassian Cloud와 관련하여 궁금하셨던 부분이 해결이 되셨나요?  

더 궁금하신 점이 있으시면 언제든지 저희에게 [문의](http://www.dmove.kr/contact-us/quote-service-inquiry)해주세요! 

감사합니다. :smiley:



<!--stackedit_data:
eyJoaXN0b3J5IjpbLTQ3MTA0NTQ4OSwxOTA5MzYxMTg1LC0yMD
IzMDYxMzczXX0=
-->
