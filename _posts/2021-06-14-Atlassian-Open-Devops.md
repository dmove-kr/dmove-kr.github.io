---
layout: post
title: Atlassian Open DevOps 를 소개합니다. 
date: 2021-06-15
categories: [Atlassian Solutions]
tags: [Atlassian, Jira, Confluence, Bitbucket, Opsgenie, Atlassian Cloud, OpenDevOps, DevOps, 오픈데브옵스, 데브옵스, 아틀라시안, 아틀라시안클라우드, 지라, 컨플루언스]
---

안녕하세요, 디무브 입니다! :balloon: 

다양한 툴 체인을 올인원으로 활용할 수 있는 Jira 기반 개발 환경인 아틀라시안의 **Open DevOps**가 지난 4월 말 진행된 Team 21에서 정식으로 소개되었습니다.

Open Devops를 통해 소프트웨어팀이 원하는 도구와 방식으로 효율적으로 작업할 수 있도록 지원하는 방법을 살펴 보겠습니다.

### Open DevOps 소개 

2020년 04월28일에 발표한 아틀라시안으 Open DevOps는 Jira Software를 중심으로 Confluence, Bitbucket 및 Opsgenie의 무료 버전의 제품을 기본적으로 제공하여 소프트웨어의 제공 및 운영을 시작하는 데 필요한 것들을 제공할 수 있는 DevOps환경 구축을 위한 솔루션입니다.

---

### Open DevOps의 등장 배경

2020년 DevOps 트렌드 설문 조사에 따르면 응답자들은 아이디어를 제품으로 옮기기 위해 평균 10개의 도구를 사용했다고 합니다. 
    
모든 팀의 업무는 다 다르고 필요한 도구는 빠르게 변화기 때문에 조직들은 업무 수행의 다양성에 대응하기 위해 여러 개발 도구들을 통합하고 싶어 했습니다.
    
또한 업무를 유연하게 지원할 수 있는 도구의 필요성을 느꼈습니다.

---

### Jira를 중심으로 한 모든 DevOps 기능 

Open DevOps의 기본 기능을 사용하면 개발자와 운영 담당자가 Jira를 수동으로 업데이트하거나 지속적으로 컨텍스트를 전환하는 것이 아닌 작업에 집중할 수 있습니다. 

#### 코드 작업 (Code in Jira)

Bitbucket, GitLab 및 GitHub를 포함한 Git 리포지토리를 Jira Software에 직접 통합할 수 있습니다.
    
변경 사항을 푸시 하거나 분기를 병합 할 때 Jira 발급 키를 포함하기 만하면 Jira가 즉시 업데이트를 수행 합니다.
    
Jira는 가장 최근 업데이트 순서대로 코드 탭에 리포지토리를 자동으로 표시하므로 모든 이해 관계자는 팀이 현재 작업 중인 내용 파악할 수 있습니다.


#### 배포 (Deployments in Jira)

개발 작업에 Jira 이슈 키를 포함하면 배포 탭에 배포가 자동으로 채워져 고객에게 어떤 값이 언제 제공되었는지 명확하게 파악할 수 있습니다.
    
Bitbucket Pipelines에서 Gitlab, Jenkins, Azure DevOps, Circle CI 또는 JFrog와 같은 주요 도구에 이르기까지 모든 CI/CD 공급자와 함께 동작합니다.

#### On-call 일정 (On-call schedule in Jira)

서비스가 중단되어 누군가 호출해야 하는 경우 On-call 탭을 사용하면 누가 통화 중인지 묻지 않고도 Opsgenie를 통해 적절한 사람에게 전달합니다.

#### 페이지 (Pages in Jira)

Open DevOps에 포함 된 Confluence를 통해 팀은 변경 관리, 런북 및 사고 후 검토와 같은 모범 사례를 위해 다양한 템플릿을 사용할 수 있습니다.

#### 자동화 (Automation in Jira)

팀은 Jira의 자동화 엔진을 사용하여 모든 개발 도구에서 강력한 워크 플로우를 생성 할 수 있으며, 이는 작업을 개발 활동과 동기화 상태로 유지하고 모든 사람의 시간을 절약할 수 있도록 합니다.
    
"PR이 병합 될 때"와 같은 트리거를 통해 자동화는 Jira 문제를 업데이트하고 Slack / Microsoft Teams 메시지를 보내는 등의 규칙을 실행할 수 있습니다.

#### 추세 예측

Jira는 팀이 가치를 제공하는 빈도와 같은 추세를 자동으로 계산하므로 수동으로 도구를 조정하거나 운영 팀에 버그 이슈를 줄 필요가 없습니다.
        
Ehgks Open DevOps의 각 작업은 Jira 문제와 관련이 있으므로 Jira는 병목 현상에 대한 통찰력을 제공하여 팀 성과를 개선 할 수 있습니다.
        
서비스 운영 및 지원을 위해 Open DevOps를 Jira Service Management와도 통합할 수 있습니다.

---

### Open DevOps의 확장과 커스터마이징

Open DevOps 내에서 GitHub 또는 GitLab과 같은 타사 도구로 교체하거나 다른 파트너 사의 도구로 확장하여 커스터 마이징이 가능합니다.  
→ Jira는 feature flagging, observability, monitoring, security, CI/CD 등 고객이 이미 사용하는 도구를 결합하는 결합 조직 역할을 합니다.
    
- **Security**: Snyk
- **Testing :** Mabl, Smartbear, XRay
- **Feature flagging :** LaunchDarkly, Split
- **Observability :** Datadog, Dynatrace, Sentry, Sumo Logic
- **CI / CD :** CircleCI, JFrog, Codefresh, Harness, Gitlab
        
Open DevOps는 Jira의 코드, 배포, 서비스 운영 및 문서를 위한 원 클릭 설정으로 시작했으며 앞으로 확장성을 더 강화하여 Jira에서 더욱 쉽게 구성할 수 있도록 만들 것입니다.

---

### Open DevOps 시작하기

[Open DevOps 사이트](https://www.atlassian.com/solutions/devops "https://www.atlassian.com/solutions/devops")에서는 무료 버전의 Jira software, Bitbucket, Opsgenie, Confluence를 제공하고 있습니다. 언제든지 이 제품들을 업그레이드 할 수 있으며 원하는 타사(써드 파티)의 제품으로 교체할 수도 있습니다.
    
만약 이미 Atlassian의 제품들을 사용하고 있다면 [http://atlassian.com/solution/devops](http://atlassian.com/solution/devops "http://atlassian.com/solution/devops") 에서 아직 사용하고 있지 않은 제품들의 무료 버전을 여러분이 사용하고 있는 제품에 연결할 수 있습니다.

---
 
지금까지 여러분과 함께 Open DevOps의 기능에 대하여 살펴 보았습니다. 
더 자세한 내용이 궁금하시거나 지원이 필요하시면 디무브로 문의해주세요.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTYyMDU2NjUyMl19
-->