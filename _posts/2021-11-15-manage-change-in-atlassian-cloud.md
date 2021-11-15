---
layout: post
title: 아틀라시안 클라우드 제품의 변경 관리를 위한 4가지 방법
Subtitle: CVE-2021-42574
date: 2021-11-15
categories: [Atlassian Solutions]
tags: [Atlassian, 아틀라시안, Jira, Confluence, 변경관리, Change Management, Atlassian Cloud, 디무브, 아틀라시안 릴리즈 노트]
---

![enter image description here](https://i2.wp.com/atlassianblog.wpengine.com/wp-content/uploads/2021/08/download.png?resize=1560,760&ssl=1)

안녕하세요, 디무브입니다! 🎈

IT 인프라는 빠르게 변화하고 있으며, 제품 출시 기간은 점점 짧아지고 있습니다. 이러한 상황에서 모든 변화를 통제하는 것은 불가능 하지만, 잘 대비할 수 있도록 준비하고 계획하는 것이 중요합니다. 

이번 포스팅에서는 제품의 업데이트 및 출시로 인한 워크플로우 중단을 방지하는데 도움이 되는 4가지 변경 관리 방법에 대해 다뤄보고자 합니다.

----------

조직의 관리자는 여러 면에서 선박의 조타수와 같은 역할을 합니다. 조직은 관리자가 가지고 있는 기술적 능력을 기반으로 새로운 기술과 개선 사항들을 제공해 주기를 바랍니다.

성장하는 조직에서는 제품의 작은 변화로도 조직과 사용자에게 큰 영향을 줄 수 있습니다. 만약 사용하고 있는 제품의 업데이트 내용에 대해 준비되지 않은 상태에서 이용할 경우 조직은 운영 지연 또는 중단을 경험할 수 있습니다.

Atlassian은 Atlassian 플랫폼 전반에 걸쳐 제품 경험을 개선하고 제품의 기능을 확장하기 위해 클라우드 기능을 지속적으로 변경하고 있습니다.

Atlassian의 관리자는 여러 대륙에 퍼져있는 수백 개의 팀들과 협업하고 있기 때문에 조직 내에서 변경된 제품을 사용하기 위해 변경 관리를 위한 계획을 준비하는 것이 필요하다는 것을 잘 알고 있습니다.

이러한 이유로 Atlassian은 관리자가 클라우드 플랫폼의 변경 사항을 쉽게 관리하는 것을 돕기 위해 노력하고 있습니다.

---

## **대규모 변경 관리를 위한 Atlassian의 철학**

Atlassian은 관리자의 요구에 따라 제품 변경 사항을 배포하기 위한 프레임워크를 만들었습니다.

이 프레임워크는 변경 사항을 파악하고, 준비하는 데 필요한 도구와 시간을 제공하여 이를 통해 제품의 변경된 내용을 적용하는 방법과 시기를 조절할 수 있습니다.

변경 사항을 관리하는 첫 번째 단계는 다가올 변경 사항을 미리 파악하는 것입니다.

즉 프로젝트, 워크플로우 및 팀에게 영향을 줄 수 있는 잠재적 요소들을 미리 파악하여 변경하는 이유와 , 변경 사항이 영향을 미칠 제품 및 기능, 그리고 변경 예상 시간에 대해서도 자세히 설명하고 있습니다.

두 번째 단계는 다가올 변화에 대비하는 것입니다.

변경 사항을 사전에 테스트하고, 변경 사항이 제품에 어떤 영향을 미치는지 파악하여 새로운 기능과 변경된 내용이 팀의 기존 워크플로우와 어떻게 상호작용하는 지 파악할 수 있습니다.

마지막으로 Atlassian은 제품의 변경이 필요한 경우에도 일정 수준의 제어가 필요한 것을 이해하고 있습니다.

이러한 이유로 Atlassian은 제품에 대한 변경 사항의 릴리즈 빈도를 제어할 수 있는 옵션을 제공하여 사용자가 앞으로의 변화에 대비하고 사용자를 교육하는데 필요한 유연성을 제공합니다.

## **Atlassian Cloud의 변경 사항을 관리하는 데 도움이 되는 4가지 팁**

효과적인 변경 관리를 위한 4가지 핵심 팁을 통해 관리자는 변경 내용에 대해 쉽게 알림을 받고 준비할 수 있으며 Atlassian의 클라우드 제품에 대한 변경 사항들을 지속적으로 제어할 수 있습니다.

### **1. Atlassian의 공식 클라우드 로드맵을 확인하기**

Atlassian은 제품 변경 사항을 고객에게 공개하고 있으며 변경 사항을 사전에 공지하기 위해 노력하고 있습니다.

이와 같이 [**클라우드 로드맵**](https://www.atlassian.com/roadmap/cloud "https://www.atlassian.com/roadmap/cloud")  에는 Atlassian 클라우드 플랫폼과 해당 제품의 계획된 모든 변경 사항이 자세히 나와 있습니다.

분기 별로 업데이트되는 Atlassian 클라우드 로드맵에는 현재 및 미래의 클라우드 기능 및 업데이트에 대해 자세히 설명되어 있으므로 관리자는 다음에 어떠한 기능이 출시될 지 미리 확인할 수 있습니다.

클라우드 로드맵을 탐색하려면 위 링크에 접속하신 후 좌측 필터 메뉴에서 제품, 로드맵 업데이트 또는 카테고리를 클릭하여 필터를 적용하고 확인하실 수 있습니다.

각 업데이트 정보에는 아래의 내용을 비롯한 간단한 설명이 포함되어 있습니다.

-   변경 사항의 영향을 받는 Atlassian Cloud 제품
    
-   연도 및 분기 별로 출시될 변경 사항
    
-   구성 및 기능 동작 방식에 대한 간략한 설명

![enter image description here](https://i1.wp.com/atlassianblog.wpengine.com/wp-content/uploads/2021/08/2atlcloud.png?resize=768,391&ssl=1)

Atlassian 클라우드 플랫폼 전반에 걸쳐 어떤 변화가 올지 궁금하다면 **클라우드 플랫폼(Cloud Platform)**을 클릭하여 확인할 수 있습니다.

클라우드 플랫폼에 제공되는 업데이트는 사용하고 있는 하나 이상의 제품에 영향을 줄 수 있습니다.

근시일 내 또는 앞으로 다가올 변화에 대해 자세히 알고 싶으시다면 페이지 상단의 상태 필터를 전환하여 현재 분기("Coming soon") 내에, 다음 연도("In the works") 내에 또는 이후("Future")를 선택하여 어떤 기능이 출시될 지 확인할 수 있습니다.

### **2. Atlassian 주간 릴리즈 정보 구독**

Atlassian 클라우드 변경 사항에 대한 업데이트를 더 자주 받고 싶은 분들은 [**클라우드 릴리즈 블로그**](https://confluence.atlassian.com/cloud/blog# "https://confluence.atlassian.com/cloud/blog#") 를 구독하시길 추천합니다.

매주 Atlassian팀은 Atlassian 클라우드 플랫폼, Jira Software, Jira Service Management, Jira Work Management, Confluence 및 Bitbucket에 대한 변경 사항을 블로그에 업데이트합니다.

각 블로그 게시물에서는 아래의 내용이 포함되어 있으며 최근 및 향후 변경 사항에 대한 정보를 제품 별로 찾을 수 있습니다.

-   변경 사항에 대한 간략한 설명
    
-   변경 사항이 영향을 미칠 제품 목록
    
-   제품 내에서 변경 사항을 확인할 수 있는 위치
    
![enter image description here](https://i0.wp.com/atlassianblog.wpengine.com/wp-content/uploads/2021/08/4e3a9066-6858-4d48-9b33-c3f177a1c2f6.png?resize=768,557&ssl=1)

[**클라우드 릴리스 블로그**](https://confluence.atlassian.com/cloud/blog# "https://confluence.atlassian.com/cloud/blog#") 의 오른쪽 상단 모서리에 있는 "**보기(Watch)**"를 클릭하면 블로그를 구독하실 수 있습니다.


### **3. 샌드박스를 활용한 사전 테스트**

앞의 두 가지 방법을 통해 Atlassian 클라우드 제품의 변경 사항을 확인하였다면, 변경 사항에 대한 대비를 미리 준비해야 합니다.

클라우드 프리미엄 및 클라우드 엔터프라이즈 플랜을 이용 중인 고객은 샌드박스 및 릴리스 트랙 기능을 이용하여 예정된 변경 사항을 준비할 수 있습니다.

[**Atlassian의 샌드박스**](https://support.atlassian.com/organization-administration/docs/manage-product-sandboxes/ "https://support.atlassian.com/organization-administration/docs/manage-product-sandboxes/")는 클라우드에 변경될 사항이 제품에 출시되기 전 테스트할 수 있도록 지원합니다.

샌드박스는 제품과 동일한 환경과 기능을 제공하며, 보유하고 있는 프리미엄 또는 엔터프라이즈 제품 환경(Jira Software, Jira Service Management 및 Confluence 포함) 당 하나의 샌드박스를 생성할 수 있습니다.

샌드박스를 생성하기 위해서는 조직의 **관리** 개요로 이동하여 **제품 > 샌드박스로** 이동한  다음 **샌드박스 만들기를** 선택 합니다.

여기에서 샌드박스를 만들 제품을 선택하면 준비가 완료되었을때 알림이 오고, 샌드박스 내에서 제품 환경과 동일한 방식으로 변경할 수 있습니다.

샌드박스 환경을 현재 사용하고 있는 제품 환경과 동일하게 구성하려면 Jira Software, Jira Service Management 또는 Confluence 의 데이터를 [샌드 박스로 복사하면 됩니다.](https://support.atlassian.com/organization-administration/docs/manage-product-sandboxes/#Managesandboxes-Copydatatoasandbox "https://support.atlassian.com/organization-administration/docs/manage-product-sandboxes/#Managesandboxes-Copydatatoasandbox")

![enter image description here](https://i0.wp.com/atlassianblog.wpengine.com/wp-content/uploads/2021/08/b6c8f672-d111-406a-9644-dd17613e8139.png?resize=768,217&ssl=1)

기존 제품 환경과 동일한 구성의 샌드박스가 준비가 되었으면 샌드박스 내에서 제품 변경 사항을 테스트할 수 있습니다.

관리 개요 내에서 제품 업데이트가 샌드박스에 릴리스되는 시기와 방법을 제어하는 ​​[릴리즈 트랙 미리보기](https://support.atlassian.com/organization-administration/docs/manage-product-release-tracks/#Managereleasetracks-Usesandboxesandreleasetrackstogether "https://support.atlassian.com/organization-administration/docs/manage-product-release-tracks/#Managereleasetracks-Usesandboxesandreleasetrackstogether")에 샌드박스를 배치하여 업데이트 기능을 확인할 수 있습니다.

시작하려면 **제품 > 릴리즈 트랙 > 트랙 변경**으로 이동합니다. 여기서 샌드박스에 대한 **미리보기** 트랙을 선택합니다 .

미리 보기 트랙을 활성화하면 변경 예정인 사항들이 릴리즈 2주 전에 샌드박스에 릴리즈 되고 업데이트 내용을 체험하고 테스트 해볼 수 있습니다.

이렇게 하면 새로운 변경 사항을 확인하고, 필요에 따라 조정하고, 변경 사항이 워크플로에 어떤 영향을 미칠 수 있는 지를 사용자에게 알리고 교육할 수 있습니다.

사용자를 위한 교육용 비디오를 만들거나 튜토리얼을 작성해야 하는 경우 동일한 변경 사항이 사용자에게 공개되기까지 한 달이 걸립니다.


### **4. 번들 트랙에 제품 사이트 배치**

관리자는 제품 환경의 릴리스 트랙을 설정하여 조직의 변화 속도를 제어할 수도 있습니다.

샌드박스와 동일하게 실제 제품 환경에서도 릴리스 트랙을 설정하여 업데이트 시기를 관리할 수 있습니다.

제품 환경에 대한 릴리스 트랙을 선택할 때 **연속 릴리스 트랙** (제품 변경 사항이 제공되는 즉시 제품 환경에 릴리스됨) 또는 **번들 트랙** (월 단위로 제품 변경 사항이 함께 번들로 제공되고 릴리스됨) 중에서 선택할 수 있습니다.

제품 릴리스에 번들 트랙을 채택하면 변경 사항을 관리하는 데 도움이 됩니다.

이를 통해 사용자가 새로운 기능을 사용할 시기를 제어할 수 있으므로 변경 사항으로 인해 워크플로 또는 프로젝트가 중단될 가능성을 줄일 수 있습니다.

제품 샌드박스의 미리 보기 트랙과 함께 사용하면 제품 변경 사항에 대해 미리 팀을 교육할 수 있으며 언제 어떤 업데이트가 출시될 것인지 팀과 사용자에게 정확히 알릴 수 있습니다.

----------

이처럼 Atlassian은 플랫폼과 제품을 지속적으로 개선하는 데 투자하고 있으며 고객과 협력하기 위해 최선을 다하고 있습니다.

Atlassian이 지원하는 변경 관리를 통해 Atlassian 클라우드 플랫폼을 보다 효과적으로 활용하시기 바랍니다.

추가적으로 아틀라시안 클라우드 제품에 대해 자세히 알고 싶으시다면 저희 디무브를 찾아주세요!

감사합니다. 😃
