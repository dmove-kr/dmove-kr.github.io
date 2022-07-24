---
layout: post
title: 보안 담당자가 DevSecOps에 주목해야 하는 이유
Subtitle: Shift left on DevSecOps with Atlassian Data Center
date: 2021-12-13
author : ethan
image : https://i1.wp.com/atlassianblog.wpengine.com/wp-content/uploads/2021/10/image-20211001-175838.png
categories: [Inside Atlassian]
tags: [Atlassian, 아틀라시안, DevOps, DevSecOps, 아틀라시안 데이터센터, Data Center, 데브옵스, 데브섹옵스, SecOps, 디무브, Dmove]
---




안녕하세요, 디무브입니다!🎈 

사이버 보안은 현대의 정부 기관이 직면한 가장 중요한 문제 중 하나입니다.

이는 미국 바이든 대통령의 행정 명령에서도 잘 알 수 있는데요.

Solarwinds, Microsoft, Colonial Pipeline에 대한 사이버 공격으로 등장한 이 행정 명령은 정부 기관과 국가 전체의 보안을 강화하기 위해 설계되었지만 효율성과 보안 사이의 복잡성을 높이는 결과를 가져왔습니다.

  
그래서 이번 포스팅에서는 이러한 복잡성을 해결하고 효율성과 보안성을 보다 강화할 수 있는 DevSecOps에 대해 다루고자 합니다.

> **DevSecOps**란?
> 
> 개발(Development), 보안(Security), 운영(Operation)이 합쳐진 말로 기존의 DevOps에서 보안 프로세스가 결합된 개념입니다. 개발, 보안 및 운영 조직 간 협업을 수행하여 보안 프로세스를 준수하며 소프트웨어 제품을 주기적으로 빠르게 제공하는데 초점을 맞춘 문화이자 엔지니어링 기술을 뜻합니다.

----------

## **DevSecOps로 보안 강화**

### **DevOps** - 코드 품질을 높이고 코드를 빠르게 제공합니다.

[**DevOps**](https://www.atlassian.com/devops "https://www.atlassian.com/devops")는 소프트웨어 개발팀과 IT 운영팀간의 프로세스를 자동화하고 통합하여 소프트웨어를 빠르고 안정적으로 빌드하고 테스트하여 실제 제품의 릴리즈로 이어지는 방법을 의미합니다. 전세계적으로 많은 기업과 기관은 효율성을 높이기 위해 DevOps 프레임워크를 사용하고 있습니다.

### **SecOps - 보안을 팀의 문화로 만듭니다.**

SecOps는 IT 보안과 운영팀간의 협업을 통해 소프트웨어 수명주기 전반에 걸쳐 보안 요소를 접목하고 강화하는 방법을 말합니다. 일반적으로 보안을 강화하기 위해 정부기관에서 채택하여 사용하고 있습니다.

### **DevSecOps - 효율적이고 안전하게 코드를 제공합니다.**

기업은 더이상 사이버 보안에 있어서 개발이나 보안 중 어느 한 가지만 선택해서는 안되며, 두 가지 모두를 다루어야 합니다.

DevSecOps는 개발과 운영이 합쳐진 DevOps와 보안과 운영이 합쳐진 SecOps의 장점을 통합한 개념입니다. 협업에 중점을 두고 있는 DevSecOps는 코드를 효율적이고 안전하게 전달하는 것을 목표로 하며 보안을 최우선으로 고려합니다.

좀 더 구체적으로 말하면 DevSecOps는 보안성 검사 및 테스트 과정을 애자일 방법론을 통한 개발 과정 전반에 걸쳐 수행합니다.

즉 제품의 마지막 단계에서 적용하는 것이 아닌 제품이 만들어지는 과정 전체에 적용하여 제품에 영향을 줄 수 있는 취약점을 조기에 발견하여 시간과 비용을 절약하는 것입니다.

또한 이를 통해 목표를 효율적으로 달성할 수 있는 능력을 향상시킬 수 있습니다.

DevSecOps는 단순한 프로세스가 아니라 사고 방식의 변화가 필요한 문화적 변화이기도 하다는 점을 꼭 명심해야 합니다.

제품 과정 전반에서 보안성을 확인하는 것은 번거로운 일이 아니라 개발 수명 주기의 일부로 생각해야 하는 사고적 변화가 DevSecOps를 구현하는데 반드시 필요합니다.


### **기존의 보안 테스트**
![enter image description here](https://i1.wp.com/atlassianblog.wpengine.com/wp-content/uploads/2021/10/image-20211001-180308.png?resize=768,167&ssl=1)

### **DevSecOps 보안 테스트**
![enter image description here](https://i2.wp.com/atlassianblog.wpengine.com/wp-content/uploads/2021/10/image-20211001-180328.png?resize=768,167&ssl=1)

---

## **DevSecOps 구현의 이점**

DevSecOps를 구현하는 모범 사례 중 하나는 모든 구성원이 수행하는 것입니다. 소규모 팀의 레벨에서 구현하는 것이 일반적이지만, 모든 구성원이 DevSecOps를 수행하면 다음과 같은 이점을 얻을 수 있습니다.

-   **업무 달성률 향상** : [**대규모 DevSecOps**](https://www.atlassian.com/blog/enterprise/build-a-strategy-for-scale-in-a-high-security-environment "https://www.atlassian.com/blog/enterprise/build-a-strategy-for-scale-in-a-high-security-environment")를 사용하면 기존의 폭포수 방식과 달리 가치를 신속하게 제공하는 데 집중함으로써 팀이 업무 변화에 빠르게 대처할 수 있습니다.
    
-   **규모에 맞는 효율성 향상** : DevSecOps를 통해 소프트웨어를 빠르고 더 좋게 만들 수 있습니다.
    
-   **보안성 개선** : DevSecOps는 조직 전반에 걸쳐 지속적인 보안을 제공하여 품질을 높이고 리더십 평가를 위한 기준을 제공할 수 있습니다.
    
-   **사일로를 방지** :  조직 전반에 걸쳐 DevOps를 사용하면 숨겨진 보안 위험성 및 사일로를 없앨 수 있습니다.
    

## **Atlassian Data Center가 필요한 이유**

이러한 DevSecOps를 규모에 맞게 구현하려면 보안을 유지하면서 혁신을 가속화할 수 있는 도구가 필요합니다.

일반적으로 DevSecOps를 도입하면 사용량 및 트래픽이 증가합니다.

이는 성능 저하 또는 운영 중단의 사태를 겪을 수 있다는 것을 의미하며 Atlassian의 Data Center와 같은 고가용성 도구가 필요하다는 것을 의미합니다.

Atlassian의 Data Center에는 고가용성 및 확장성 외에도 클러스터링, [**제로 다운타임 업그레이드, 롤링 업그레이드**](https://www.atlassian.com/enterprise/data-center/data-center-video-library "https://www.atlassian.com/enterprise/data-center/data-center-video-library") 등 DevSecOps를 시작하고 개선하는 데 도움이 되는 다양한 기능이 내장되어 있습니다.

사일로를 해체하고 팀을 통합하여 최종 목표를 보다 효과적으로 달성하는 데 도움이 되는 DevSecOps와 같은 최신 프레임워크를 구현하는 방법에 대해 아래의 문서에서 보다 자세히 확인하실 수 있습니다.


[**Data Center 백서 다운로드**](https://www.atlassian.com/enterprise/data-center/bridging-the-gap "https://www.atlassian.com/enterprise/data-center/bridging-the-gap")

---

지금까지 DevSecOps란 무엇이며 왜 주목해야 하는지, 그리고 아틀라시안의 Data Center가 DevSecOps 구현에 왜 필요한지 알아보았습니다.

DevSecOps를 구현하기 위한 Jira, Confluence, Bitbucket, Bamboo와 같은 Atlassian Data Center 및 Cloud 제품들에 관해 보다 자세한 내용이 궁금하시다면 디무브에게 문의해주세요!

감사합니다. 😃
