---
layout: post
title: Confluence 활용 Tip.3 - Jira 이슈와 Confluence 페이지 연결
Subtitle: Confluence 페이지와 Jira 이슈 페이지 연결
date: 2021-10-08
categories: [Atlassian Solutions]
tags: [Atlassian, 아틀라시안, Confluence, 컨플루언스, 프로젝트관리, Confluence 활용, KMS, 문서관리, 협업솔루션, 협업도구, 지라, Jira]

---



![](https://blog.dmove.kr/assets/images/banners/Jira-Confluence-Connect/1.png)



안녕하세요, 디무브 입니다!

 

Jira는  버그 추적, 이슈 추적 등 전체적인 프로젝트 관리를 수행할 수 있는 아틀라시안의 대표적인 솔루션 입니다.  

Jira에서 생성한 이슈를 기반으로 수많은 계획과 논의 사항이 발생하지만 모든 내용을 jira에 정리하기는 쉽지 않습니다.

Confluence는 아틀라시안의 문서 관리 솔루션으로 논의 사항, 세부 수정 사항 등 Jira에서 발생한 많은 사항들을 쉽게 정리할 수 있어 Jira와 Confluence를 같이 사용하게 되면 프로젝트의 완성도를 더욱 높일 수 있습니다. 

이번 시간에는 업무를 편하게 진행할 수 있도록 Confluence의 페이지와 Jira의 이슈를 연결하는 방법에 대해 소개하고자 합니다. 



---



## Jira와 Confluence를 연결하는 6가지 방법

 

### 1. Jira 매크로를 활용한 자동화된 연결(Confluence)



<div style="width:45%; float:left; margin-right : 10%;"><img src="https://blog.dmove.kr/assets/images/banners/Jira-Confluence-Connect/2.png"></div><div style="width:45%;float:right;"><img src="https://blog.dmove.kr/assets/images/banners/Jira-Confluence-Connect/3.png"></div><div style="clear:both;"></div>



<br/>

![](https://blog.dmove.kr/assets/images/banners/Jira-Confluence-Connect/4.png)





Confluence 페이지의 Jira 매크로를 사용하면 Confluence 페이지와 Jira 이슈를 자동으로 연결할 수 있습니다. 

Jira 매크로는 페이지에서 “**/Jira**” 커맨드 또는 상단 바의 “+**”** 아이콘 → **jira**를 통해 매크로를 생성 할 수 있으며 자주 사용하는 필터, JQL, 최근 본 이슈 등을 기반으로 이슈를 찾아 Confluence 페이지에 기록할 수 있습니다. 

 



![](https://blog.dmove.kr/assets/images/banners/Jira-Confluence-Connect/5.png)

![](https://blog.dmove.kr/assets/images/banners/Jira-Confluence-Connect/6.png)



Jira 이슈와 연결하게 되면 이슈에 대한 사항, 작업에 대한 프로젝트 개요 등의 내용을 쉽게 파악할 수 있습니다. 

그리고 Jira 이슈에서는 연결된 Confluence 페이지라는 항목과 함께  Jira 이슈를 연결했던 Confluence  페이지가 생성됩니다. 

한 번의 클릭으로 연결된 페이지에 바로 접근 할 수 있어 관련된 페이지를 찾는 번거로움과 시간을 절약할 수 있습니다.



### 2. 애드훅(Ad-hoc) 링크를 활용한 Confluence 연결 (Jira)



![](https://blog.dmove.kr/assets/images/banners/Jira-Confluence-Connect/7.png)



Jira 이슈에서 애드훅 링크를 활용하여 Confluence 페이지와 연결할 수 있습니다.  

이슈 상단의 **체인 아이콘 → Confluence 페이지 연결** 을 클릭하여 연결할 페이지를 찾아 Jira와 Confluence를 연결할 수 있습니다.



### 3. Copy & Paste(복사 및 붙여넣기)를 활용한 연결



<center><img src="https://blog.dmove.kr/assets/images/banners/Jira-Confluence-Connect/8.png" style="max-width:400px;"></center>

<center>URL 표시</center>

<br/>



<center><img src="https://blog.dmove.kr/assets/images/banners/Jira-Confluence-Connect/9.png" style="max-width:400px;"></center>

<center>인라인 표시</center>

<br/>

<center><img src="https://blog.dmove.kr/assets/images/banners/Jira-Confluence-Connect/10.png" style="max-width:500px;"></center>



<center>카드 표시</center>

<br/>

Confluence 및 Jira의 각 페이지와 이슈에 URL을 첨부하면 자동으로 Confluence와 Jira를 연결할 수 있습니다.  

링크는 URL, 인라인, 카드의 3가지 형태로 자유롭게 표시 할 수 있습니다.



### 4. 이슈를 생성하여 연결하기(Confluence)



Confluence는 단순히 복사 및 붙여넣기 기능과 매크로를 활용하여 기존에 생성되어 있던 Jira의 이슈와 연결하는 것 뿐만 아니라 Confluence  페이지에서 Jira 이슈를 만들어 Confluence 페이지와 Jira의 이슈를 연결할 수 있습니다.



<center><img src="https://blog.dmove.kr/assets/images/banners/Jira-Confluence-Connect/11.png" ></center>



![](https://blog.dmove.kr/assets/images/banners/Jira-Confluence-Connect/19.png)

<center>드래그를 활용한 이슈 생성 및 연결하기</center>

<br/>

Jira의 이슈는 2가지 방법으로 만들 수 있습니다. 

첫 번째는 드래그를 사용하는 방법입니다. 

페이지 화면에서 특정 문구를 드래그 하면 이슈 만들기 버튼이 생성되면서 이슈를 생성할 수 있습니다. 

생성된 이슈에서는 연결된 Confluence 페이지가 표시됩니다.



![](https://blog.dmove.kr/assets/images/banners/Jira-Confluence-Connect/20.png)

<center>Jira 매크로를 활용한 이슈 생성 및 연결하기</center>

<br/>

두 번째 방법은 **Jira 이슈/필터** 매크로를 사용 하는 방법입니다.

Jira 매크로는 단순히 Jira 이슈를 연결하는 것 뿐만 아닌 이슈를 생성하는 기능도 포함하고 있습니다.  

**새 이슈 만들기** 버튼을 클릭하여 이슈를 생성하고 Confluence 페이지와 연결이 가능합니다.

### 5. Jira 차트 매크로를 사용하여 보고서로 표시 하기 (Confluence)



![](https://blog.dmove.kr/assets/images/banners/Jira-Confluence-Connect/16.png)



<br/>

Confluence의 **Jira 차트** 매크로는 Jira의 이슈를 연결하여 2차원, 파이 차트 등의 Jira의 이슈를 종합해 보고서를 생성할 수 있습니다. 

1번 방법인 Jira 매크로와 같이 “**/jira 차트**” 슬래시 커맨드 명령이나 상단 “**+**” → **Jira 차트** 버튼을 클릭하여 보고서를 생성할 수 있으며 생성된 보고서는 Jira의 이슈를 추적 및 분석하고 전체적인 진행 상황을 한 눈에 쉽게 파악할 수 있습니다. 

 

### 6. 바로 가기를 추가하여 연결 하기



![](https://blog.dmove.kr/assets/images/banners/Jira-Confluence-Connect/17.png)

<center>Confluence</center>

<br/>

![](https://blog.dmove.kr/assets/images/banners/Jira-Confluence-Connect/18.png)

<center>Jira</center>

<br/>

바로 가기 기능은 Confluence의 스페이스(공간) 또는 Jira의 프로젝트에서 해당 스페이스 또는 프로젝트로 바로 이동할 수 있습니다. 

해당 기능은 프로젝트, 스페이스 별로 바로 가기를 설정할 수 있어 해당 페이지로 바로 이동할 수 있습니다.  

바로 가기 기능은  좌측 메뉴의 **바로 가기 추가 → 웹 주소 입력 → 이름 생성 → 추가(저장)**을 눌러 생성할 수 있습니다.

------

여기 까지 작업을 편하고 신속하게 처리할 수 있도록 Confluence 와 Jira를 연결하는 방법을 설명 드렸습니다.

Confluence 문서에 Jira 이슈를 연결하면  Jira와 Confluence의 페이지나 이슈를 찾기 위해 여러 번 이동할 필요 없이 한 번에 확인할 수 있기 때문에 시간을 절약할 수 있고 작업을 신속하게 처리할 수 있습니다. 

추가적으로 Confluence와 Jira를 포함한 아틀라시안 제품을 자세히 알고 싶으시다면 저희 디무브를 찾아주세요!

감사합니다.
