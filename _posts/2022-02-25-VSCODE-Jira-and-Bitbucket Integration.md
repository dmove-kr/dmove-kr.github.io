---
layout: post
title: VSCODE와 Jira & Bitbucket Integration
Subtitle:VSCODE와 Jira & Bitbucket Integration
date:2022-02-26 01:10
categories:[Atlassian Solutions]
tags:[Atlassian, Cloud, Server/Data Center, VSCODE, IDE]
---

<img src = "https://blog.dmove.kr/assets/images/banners/VScode%20Integration/1.png">

<br>
<p>

안녕하세요, 디무브 입니다! :balloon:

Atlassian 제품을 사용 중인 전 세계의 고객들은 Jira, Confluence, Bitbucket 등 Atlassian 제품을 이용한  Agile 기반의 협업을 통해 업무를 수행하고 업무 생산성을 높이고 있습니다. 이를 통한 업무 프로세스 개선 및 생산성 증대 효과는 Atlassian 각 제품간의 손 쉬운 연동과 Atlassian 제품의 높은 범용성에 기반을 두고 있습니다. 또한 이러한 범용성은 Atlassian 제품 뿐만이 아니라 기존에 고객들이 사용하던 타사 업무 애플리케이션과 연동을 지원하여 고객이 처한 상황에 맞게 사용할 수 있도록 지원합니다. 그리고 Atlassian은 시장에서 주로 사용되는 애플리케이션들의 Plug-in을 제작하여 배포함으로써 고객들이 타사 도구들을 사용하여 Atlassian 제품의 기능을 사용할 수 있도록 지원하고 있습니다.  

이번 시간에는 여러분과 함께 앞의 내용에 대한 예로 소프트웨어 개발팀에서 사용하는 개발환경(IDE)과 Atlassian Jira와 Bitbucket 제품간 연계를 통해 협업을 수행하고 업무(개발) 프로세스를 개선할 수 있는 방법에 대해 알아보겠습니다. 
</p>
<br>

---
<br>

## **세계에서 가장 인기 있는 개발 IDE 3가지**
<p>
일반적으로 개발 시장에서 전 세계의 많은 개발팀들은 그들의 주요 개발환경(IDE)으로 Microsoft사의 VSCODE, JetBrains사의 IntelliJ, Eclipse 재단의 Ecplipse를 주로 사용하고 있습니다. 이 세 가지 개발환경(IDE)의 공통점은 여러 개발 언어를 지원하며 다양한 추가 기능들을 활용할 수 있는 Marketplace(앱 스토어)를 가지고 있다는 점입니다. 
이러한 개발 환경(IDE)의 Marketplace(앱 스토어)에는 다양한 plug-in들이 존재하며 Atlassian에서 공식적으로 제작하여 배포하는 plug-in  또한 존재하고 있습니다. 하지만 IntelliJ와 Eclipse의 경우에는 공식 제작된 Plug-in의 업데이트 이력이 오래되었으므로 이번 포스팅에서는 일반적으로 많이 사용하는 위의 3가지 IDE 중 VSCODE에서 Jira와 Bitbucket의 연계를 통해 업무를 분담하고 처리하는 방법에 대해 살펴보겠습니다.

</p>
 <img src = "https://blog.dmove.kr/assets/images/banners/VScode%20Integration/2.png" width="30%"/>
 <img src = "https://blog.dmove.kr/assets/images/banners/VScode%20Integration/3.png" width="30%"/>
 <img src = "https://blog.dmove.kr/assets/images/banners/VScode%20Integration/4.png" width="30%"/>
    
<br>
<br>

## **VSCODE**

VSCODE는 Microsoft 사에서 제작하여 배포하는 개발환경(IDE)으로 Windows, Mac 등 다양한 운영체제를 지원하면서 Marketplace를 통해 다양한 확장 도구들을 지원하는 전 세계에서 가장 인기있는 개발환경(IDE) 중 하나입니다. 이러한 인기 만큼 VSCODE의 Marketplace에서는 Atlassian이 공식적으로 Jira와 Bitbucket의 기능을 연계하여 활용할 수 있도록 **Jira and Bitbucket(Atlassian Labs)** plug-in을 제작하여 배포하고 있습니다.

VSCODE에서 **Jira and Bitbucket(Atlassian Labs)** plug-in을 사용하기 위해서는 Microsoft 사의 Marketplace나VSCDOE의 확장 탭에서 검색을 통해 설치하실 수 있으며 설치 방법은 아래의 사진 처럼 매우 간단합니다.

<br>

### **VSCODE의 Jira and Bitbucket (Atlassian Labs)**

VSCODE의 왼쪽 메뉴에서 확장 탭을 선택한 후 Jira 또는 Atlassian을 검색하면 검색 결과 최 상단에 Jira and Bitbucket이란 Plug-in을 확인할 수 있습니다. 해당 Plug-in을 선택한 후 **Install** 버튼을 클릭하여 설치할 수 있습니다. 해당 Plug-in의 내용을 확인해 보면 Atlassian에서 제작하여 배포한 것으로 VSCODE에서 사용할 수 있는 Jira와 Bitbucket의 기능에 대한 설명을 제공하고 있습니다.

<img src = "https://blog.dmove.kr/assets/images/banners/VScode%20Integration/5.png">

<br>

**Jira and Bitbucket(Atlassian Labs)** 은 Jira와 Bitbucket Server/Data Center와 같은 On-premise 환경과 Cloud 환경 모두를 지원하고 있으므로 사용하시는 Atlassian 제품 환경에 맞게 구성하여 사용할 수 있습니다.
<img src = "https://blog.dmove.kr/assets/images/banners/VScode%20Integration/6.png">

<br>

각 제품의 설정이 완료되면 Jira와 Bitbucket의 정보를 VSCODE에서 확인할 수 있습니다.    

<img src = "https://blog.dmove.kr/assets/images/banners/VScode%20Integration/7.png">

<br>

### **VSCODE의 Jira and Bitbucket (Atlassian Labs) - Jira Issue 확인**

이제 기본적인 구성이 끝나셨으면 VSCODE에서 사용할 수 있는 Jira의 기능에 대해 살펴보겠습니다. 여러분과 함께 가장 먼저 살펴볼 기능은 사용자에게 할당된 Issue를 확인하는 것입니다.

**Jira and Bitbucket (Atlassian Labs)**의 좌측 탭에서 기본으로 적용된 Jira JQL필터에 의해 사용자에게 할당된 Issue 목록을 확인할 수 있습니다. 해당 Issue를 선택하면 VSCODE의 편집기가 열리며 해당 Issue의 정보를 확인할 수 있습니다. 그리고 사용자가 JQL을 사용하여 필터를 구성할 시 사용자가 찾고자 하는 이슈를 검색하여 업무에 활용할 수 있습니다.

<img src = "https://blog.dmove.kr/assets/images/banners/VScode%20Integration/9.png">

<br>

### **VSCODE의 Jira and Bitbucket (Atlassian Labs) - Jira Issue 생성**

두 번째로 살펴볼 기능은 Jira Issue를 작업 환경에서 바로 생성하는 것입니다. VSCODE에서는 Jira and Bitbucket plug-in의 좌측에 있는 **Create issue**를 클릭하여 Jira Issue를 생성할 수 있습니다. Issue에 수행해야할 업무 내용 또는 요청 사항을 입력하여 생성할 수 있고 Jira and Bitbucket 구성 시 설정한 JQL 필터의 결과 값에 따라 표시가 됩니다. 아래 왼쪽의 사진은 VSCODE에서 Issue 정보를 입력하여 생성한 것이며 오른쪽은 VSCODE에서 생성한 Jira Issue가 Jira의 Web에서 생성된 사진입니다.

<img src = "https://blog.dmove.kr/assets/images/banners/VScode%20Integration/10.png" width="49%"> <img src = "https://blog.dmove.kr/assets/images/banners/VScode%20Integration/11.png" width="49%">

또는 작업 중인 Code 내에서 마우스 우클릭을 통하여 하위 업무 또는 추가적인 업무를 Jira Issue로 생성할 수 있습니다. 이처럼 개발 업무를 진행하면서 바로바로 본인에게 할당된 Issue를 확인하고 업무 목표와 업무 이력을 팀과 공유함으로써 생산성을 높이고 기존보다 더 나은 협업을 수행할 수 있습니다.

![](https://3kllhk1ibq34qk6sp3bhtox1-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/5-create-issue.gif)


### **VSCODE의 Jira and Bitbucket (Atlassian Labs) - Bitbucket branch 생성**

이번에는 Jira와 Bitbucket을 연동하여 사용하는 방법에 대해 살펴보겠습니다. Jira 이슈로 개발 요청 또는 수정 요청을 받은 사용자는 VSCODE의 Jira의 Issue 보기 화면에서 **Start work**를 클릭하여 Source branch로부터 간편하게 작업 branch를 생성할 수 있습니다. 이 기능을 활용하여 Jira Issue의 상태를 변경할 수 있으며 별도의 git 명령어를 사용하지 않고 자동으로 생성된 branch를 사용자의 로컬 환경으로 가져올 수 있습니다. 추후 개발 또는 수정 요청 사항에 대한 작업을 운영환경에 영향을 주지 않고 진행할 수 있습니다.

<br>
<img src = "https://blog.dmove.kr/assets/images/banners/VScode%20Integration/13.png">

<img src = "https://blog.dmove.kr/assets/images/banners/VScode%20Integration/14.png">

<br>

### **VSCODE의 Jira and Bitbucket (Atlassian Labs) - Bitbucket commit message**

이번에는 수행한 작업 내역을 git 명령어를 사용하지 않고 VSCODE에서 수행한 작업 내역에 대한 commit message를 작성해 보겠습니다.

먼저 VSCODE의 편집기에서 Jira Issue에 등록된 요청대로 출력 문구를 “Helloworld”에서 “VSCODE 테스트”로 수정한 후 저장합니다. 파일이 수정되면 왼쪽의 가지 모양의 소스제어 아이콘에 변경된 파일의 수가 표시됩니다. 그 다음 왼쪽의 Branch 모양의 소스 제어 아이콘을 클릭하여 소스 제어화면으로 이동합니다. 이 화면에서는 작업 전 내용과 작업 후 내용을 비교하여 변경된 부분을 사용자가 확인할 수 있습니다. 수행한 작업에 이상이 없으면 변경된 내용을 파일의 이름에 표시되는 **+ 버튼**을 클릭하여 스테이징 환경에 추가합니다.

<img src = "https://blog.dmove.kr/assets/images/banners/VScode%20Integration/15.png">

<br>

그 후 상단의 **V 버튼**을 클릭하여 수행한 작업 내역에 대한 commit message를 작성합니다. 코드의 Commit message에 Jira Issue key를 포함하여 작성하면 Commit message와 Jira Issue간의 연결이 맺어져 Jira의 development panel에에서 작성한 commit 내역활용할 수 있습니다.

<img src = "https://blog.dmove.kr/assets/images/banners/VScode%20Integration/16.png" width = "45%">
<img src = "https://blog.dmove.kr/assets/images/banners/VScode%20Integration/17.png" width = " 45%">

<br>

아래 두 사진은 작성한 commit message가 앞에서 설명한 바와 같이 Bitbucket의 repository와 Jira issue에 반영이 된 결과 화면입니다. 

<img src = "https://blog.dmove.kr/assets/images/banners/VScode%20Integration/18.png" width = "45%">
<img src = "https://blog.dmove.kr/assets/images/banners/VScode%20Integration/19.png" width = "45%">

<br>

### **VSCODE의 Jira and Bitbucket (Atlassian Labs) - Bitbucket Pull request**

마지막으로 살펴볼 기능은 develop branch로부터 생성한 작업 branch의 내용을 다시 develop brach에 반영하는 **Pull request** 입니다. VSCODE에서 Pull request를 생성하는 방법은 좌측 Bitbucket의 메뉴에서 Create pull request 버튼을 클릭하여 merge하고자 하는 branch의 정보를 입력합니다.

<img src = "https://blog.dmove.kr/assets/images/banners/VScode%20Integration/20.png">
<img src = "https://blog.dmove.kr/assets/images/banners/VScode%20Integration/21.png">

<br>

VSCODE에서 Pull request를 생성할 시 Jira의 Issue 상태 또한 Workflow에 맞게 변경할 수 있고 Pull request에 대한 Reviewer를 등록할 수 있습니다. 그리고 Reviewer로부터 Pull request에 승인이 나면 사용자는 아래 사진의 **Merge** 버튼을 클릭하여 Merge를 수행합니다.

<img src = "https://blog.dmove.kr/assets/images/banners/VScode%20Integration/22.png">
<img src = "https://blog.dmove.kr/assets/images/banners/VScode%20Integration/23.png">

<br>

실제로 Merge가 제대로 수행되었는 지 Bitbucket에 접속하여 Pull request를 살펴보겠습니다. 아래 사진을 보면 Reviewer로부터 승인을 받은 Pull request 내역이 develop branch로 성공적으로 Merge된 것을 확인할 수있습니다.

<img src = "https://blog.dmove.kr/assets/images/banners/VScode%20Integration/24.png">

---

이처럼 Atlassian은 개발 환경(IDE)을 비롯하여 다양한 타사 도구들과 호환성을 지원하고 많은 고객들이 그들의 환경에 맞게 Agile 기반의 협업을 수행하기를 바랍니다.  

지금까지 여러분과 함께 Atlassian 제품과 개발 IDE와의 통합에 대해 알아보았습니다.
Jira, Confluence, Bitbucket, Bamboo와 같은 Atlassian 제품들에 관해 보다 자세한 내용이 궁금하시다면 Atlassian 파트너사인 [디무브에게 문의](http://dmove.co.kr/contact-us/quote-service-inquiry)해주세요!

감사합니다. :smiley:
