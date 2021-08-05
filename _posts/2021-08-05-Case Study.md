Case Study - Atlassian Jira 와 메신저 연동


안녕하세요, 디무브입니다. 🎈

메신저는 즉각적인 피드백을 주고 받을 수 있다는 장점 때문에 기업의 중요한 커뮤니케이션 채널로 자리 잡았습니다. 그리고 메신저 솔루션을 도입해 사용 중인 대부분의 기업은 중요한 Notification 을 E-Mail 보다는 메신저를 통해 받는 것을 선호하고 계십니다.

메신저 솔루션은 SaaS 형태의 Slack 이나 Teams 부터, 오픈소스 기반의 설치형 솔루션인 Mattermost 나 Rocket Chat, 그리고 그 밖에 다양한 벤더사들의 제품이 존재합니다. 
이러한 다양한 종류의 메신저와의 Notification 연동은 대부분의 기업형 솔루션들이 가지고 있는 숙제가 되고 있습니다.

Atlassian의 Jira는 프로젝트 관리와 소프트웨어 개발에 있어 가장 주목받고 있는 솔루션이며, 많은 개발 조직에서 Jira 를 활용하여 과업 관리와 이슈 트래킹, CICD 연계를 위해 사용하고 계십니다. 
때문에 Jira 역시 다른 기업형 솔루션들처럼 메신저와의 연동에 대한 요구를 상시 받고 있습니다. 

실제로 디무브에서도 Atlassian 관련 프로젝트를 진행하며 메신저 연동과 관련된 요구사항과 이에 대한 구현 작업을 여러 차례 경험하였고, 이를 Case Study로 정리해서 공유해 드리고자 합니다. 

---

> **메신저와 이슈 트래커, 이 둘을 연동하여 함께 사용한다면 훨씬 유용하고 시너지는 배가 되지 않을까?**

Atlassian 에서는 자체적인 Marketplace 에서 다양한 3rd Party Addon 을 제공하고 있으며, Slack 이나 Teams 같은 자주 사용되는 메신저 솔루션과의 연동은 유료나 무료로 판매되는 이러한 3rd Party Addon 을 통해 쉽게 구현 가능합니다.

연동을 하고나면 메신저에서 메신저 채널 별로 Jira 이슈의 생성 또는 업데이트 시 알림을 받게 되죠.

![Jira Issue](/assets/images/blog/Case Study_1.png)

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTA3NTE0Mzk0OF19
-->