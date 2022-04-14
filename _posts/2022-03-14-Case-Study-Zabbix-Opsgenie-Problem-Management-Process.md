---
layout: post
title: Case Study - Zabbix와 Opsgenie를 활용한 장애 처리
Subtitle: Zabbix와 Opsgenie를 활용한 장애 처리
date: 2022-03-14
categories: [Case Study]
tags: [Atlassian, Cloud, Zabbix, zabbix, 자빅스, Opsgenie, opsgenie, 옵스지니, 장애, 장애관리, 인시던트 ]

---



<img src = "https://blog.dmove.kr/assets/images/banners/Zabbix-Opsgenie/thumbnail.png">



안녕하세요, 디무브 입니다! :balloon: <br/>

이번 시간에는 오픈소스 모니터링 툴인 Zabbix와 경고 및 인시던트 관리 툴인 Opsgenie를 활용한 장애 인지 및 알림, 처리 프로세스에 대해 소개해 드리려고 합니다.


Zabbix는 엔터프라이즈를 위한 오픈소스 기반의 모니터링 솔루션입니다. 현재 많은 기업들이 IT 서비스를 위한 인프라를 운영 중이며 이러한 인프라를 새로 추가하거나, 변경하는 일들은 빈번하게 발생합니다. 이러한 상황에서 인프라와 애플리케이션들의 Up/Down 유무나 어플리케이션의 성능 지표를 측정하는 도구로 Zabbix가 많이 사용되고 있습니다. 



Opsgenie 는 IT 서비스 및 인프라에서 발생하는 Incident를 관리하는 툴로써, 모니터링 시스템들에서 발생하는 Alert 데이터를 통합하여 관리하는 솔루션입니다. Opsgenie 는 200개가 넘는 도구와의 통합 기능이 제공되며, 강력한 API 와 웹훅, 메일 통합 기능을 제공하고 있습니다. 이를 활용해 Opsgenie는 다양한 시스템에서 발생한 Alert 데이터를 중앙 집중화하고, 한곳에서 장애를 빠르게 처리할 수 있도록 도와줄 수 있습니다.




이제 장애가 발생하였을 때 어떻게 Zabbix와 Opsgenie를 사용하여 효율적으로 장애를 처리할 수 있는지 같이 확인해보도록 하겠습니다.

------

## **Zabbix - Opsgenie 장애 처리 프로세스**



<img src = "https://blog.dmove.kr/assets/images/banners/Zabbix-Opsgenie/1.png">



Zabbix 와 Opsgenie 를 연동하게 될 경우 Zabbix내의 Alert 상태 정보와 Opsgenie의 Alert 상태 정보를 서로 동기화할 수 있습니다. 예를 들어 장애를 인지하거나 종료 시 Zabbix의 Alert 정보와 Opsgenie의 Alert 정보는 서로 동기화 하여 자동적으로 인지(ACK) 상태 또는 종료(Closed) 상태로 변경됩니다.


Zabbix 와 Opsgenie의 연계 및 동기화 구성 방법은 아래 그림을 통해 자세히 설명 드리겠습니다.



1.서버 또는 장비에서 장애 발생 시 Zabbix에서는 모니터링된 데이터를 통해 트리거된 데이터를 기반으로 Alert 이벤트를 생성합니다.



<img src = "https://blog.dmove.kr/assets/images/banners/Zabbix-Opsgenie/2.png">



2.Alert이 생성되면 Zabbix에서 구성한 **Opsgenie 웹훅**과 Zabbix 서버의 **OEC(Opsgenie Edge Connector)** 플러그인을 통해 Opsgenie에 Alert 정보가 전달됩니다.

<img src = "https://blog.dmove.kr/assets/images/banners/Zabbix-Opsgenie/3.png">

<center>Zabbix에서 트리거된 액션을 통해 서버단으로 Opsgenie 웹훅 전송</center>

<br/>

<img src = "https://blog.dmove.kr/assets/images/banners/Zabbix-Opsgenie/4.png">

<center>Opsgenie Edge Connector Log</center>



3. Alert 정보를 받은 Opsgenie는 장애에 대한 Alert을 생성합니다.



<img src = "https://blog.dmove.kr/assets/images/banners/Zabbix-Opsgenie/5.png">



생성된 Alert 정보는 다음과 같습니다: <br/>
\- 제목 : 장애 내용 <br/>
\- 담당 팀(Owner Team) : Zabbix와 연동한 팀 <br/>
\- Last Updated, Duplicated : Alert의 업데이트 또는 복제된 시간 <br/>
\- 설명(Dscription) : 장애가 발생한 시간, 장애 이름, 장애가 발생한 호스트에 대한 내용 <br/>
\- 우선순위(Priority) : 장애의 수준 <br/>



4.담당자가 Alert을 확인한 뒤, “**ACK**”를 누르게 될 경우 Zabbix와 Opsgenie는 서로 자동 동기화 되어 Zabbix에서도 동일하게 Alert 정보가 업데이트 됩니다. 



<div style="width:45%; float:left; margin-right : 10%;"><img src = "https://blog.dmove.kr/assets/images/banners/Zabbix-Opsgenie/6.png"><p> 활동 로그(Activity Log)에서 Ack 신호를 Zabbix로 전달하는 것을 확인할 수 있습니다.</p></div><div style="width:45%;float:right;"><img src="https://blog.dmove.kr/assets/images/banners/Zabbix-Opsgenie/7.png"></div><p>Ack 신호를 전달받은 Zabbix에서는 Alert의 인지 상태를 자동으로 변경합니다.</p><div style="clear:both;"></div>



### 인시던트를 활용한 장애 처리


 Zabbix 에서 발생한 Alert이 웹훅을 통해 Opsgenie로 전달되게 되면 Opsgenie에 연동된 팀에 Alert이 할당됩니다. 그 다음 장애를 담당하는 팀 또는 책임자가 해당 Alert을 통해 장애를 분석하고 인시던트로 판단할 경우, Alert을 인시던트로 연계할 수 있습니다. Zabbix에서 발생한 Alert이 웹훅을 통해 Opsgenie로 전달되게 되면 Opsgenie에 연동된 팀에 Alert 이 할당됩니다.


인시던트를 생성하는 방법은 Alert 분석 후 자체적으로 인시던트를 만들거나 **인시던트 룰(Incident rule)**을 사용하여 인시던트를 생성할 수 있습니다. 인시던트를 통해 장애를 관리하고 관리하는 프로세스를 설명드린 뒤, 인시던트 룰에 대해 추가적으로 설명하겠습니다.

 

1.담당자가 Alert 정보를 확인하여 장애의 정도에 따라 인시던트를 생성합니다. 

<img src = "https://blog.dmove.kr/assets/images/banners/Zabbix-Opsgenie/8.png">



인시던트의 세부사항은 다음과 같습니다:

- Description : 인시던트로 연계된 장애에 대한 정보를 보여줍니다.

<center><img src = "https://blog.dmove.kr/assets/images/banners/Zabbix-Opsgenie/9.png"></center>



- Impacted Serviced : 장애가 발생한 서비스의 종류를 보여줍니다. 서비스는 Opsgenie의 서비스 항목에 등록하여 사용할 수 있습니다. Opsgenie에서의 Impacted Service 는 Jira Service Management 와 Statuspage 에서의 Service 개념과 상호 연계 됩니다.

<center><img src = "https://blog.dmove.kr/assets/images/banners/Zabbix-Opsgenie/10.png"></center>



- Associated Alerts : 해당 인시던트와 연관된 Alert 정보들을 보여줍니다.



<img src = "https://blog.dmove.kr/assets/images/banners/Zabbix-Opsgenie/11.png">



- Time Line : 인시던트 및 Alert의 업데이트 사항 등을 시간 별로 표시합니다.



<center><img src = "https://blog.dmove.kr/assets/images/banners/Zabbix-Opsgenie/12.png"></center>



2.팀 또는 부서 별 회의를 통해 인시던트를 처리합니다 : 인시던트를 Slack이나 Mattermost와 같은 채팅 툴과 연동하여 회의 환경을 구성하거나 Opsgenie 자체 커뮤니케이션 기능인 **웹 컨퍼런스 브릿지** 또는 **ICC(Incident Command Center)** 기능을 사용하여 채팅 또는 회의 환경을 구성할 수 있습니다.

\* 웹 컨퍼런스 브릿지와 ICC 기능은 엔터프라이즈 플랜에서 사용이 가능합니다.



<div style="width:45%; float:left; margin-right : 10%;"><img src = "https://blog.dmove.kr/assets/images/banners/Zabbix-Opsgenie/13.png"><center><p>웹 컨퍼런스 브릿지</p></center></div><div style="width:45%;float:right;"><img src="https://blog.dmove.kr/assets/images/banners/Zabbix-Opsgenie/14.png"><center><p>Incident Command Center</p></center></div><div style="clear:both;"></div>

  3. 인시던트 처리가 완료되면 Zabbix의 Alert 상태는 **Closed**로 해결되고 Opsgenie의 Alert 정보 역시 **Closed**상태로 동일하게 변경됩니다.  모든 인시던트 처리가 끝나면 인시던트를 **해결**(**Resolved)** 상태로 변경합니다.



<div style="width:45%; float:left; margin-right : 10%;"><img src = "https://blog.dmove.kr/assets/images/banners/Zabbix-Opsgenie/15.png"></div><div style="width:45%;float:right;"><img src="https://blog.dmove.kr/assets/images/banners/Zabbix-Opsgenie/16.png"></div><div style="clear:both;"></div>

  4.인시던트 처리 후 Opsgenie는 인시던트의 사후 조치 보고서인 **포스트모템(Postmortems)**를 제공합니다. 완성한 **포스트모템(Postmortems)**은 Confluence와 연동하여 페이지로 Export가 가능합니다.



<center><img src = "https://blog.dmove.kr/assets/images/banners/Zabbix-Opsgenie/17.png"></center>



---



### **Tip : 인시던트 관리를 위한 환경 구성**

 

지금까지 Zabbix와 Opsgenie를 활용한 인시던트 및 장애 관리에 대해 알아보았습니다. 인시던트 관리 환경을 구성하기 위해서는 많은 작업이 필요한데요. 크게 3개로 나누어 설명을 드리면 Zabbix의 웹훅, 액션 설정, 서버의 Oec 설정, Opsgenie의 연동 설정이 필요합니다.

우선 Zabbix의 웹훅 설정에서 Opsgenie를 추가합니다. 그 다음 장애가 발생하여 Alert 생성되었을 때 트리거를 작동시켜 Alert 정보를 Opsgenie Edge Connector를 통해 Opsgenie로 전달합니다. 이를 위해서는 Zabbix 웹 상에서 트리거 설정과 Zabbix 서버에서 Opsgenie Edge Connector 서비스를 적용해야 합니다.

마지막으로 Opsgenie에서는 Zabbix의 Alert 정보를 받기 위해 연동 설정이 필요합니다. 그러기 위해서는 우선 팀을 생성해야 하는데요. 이유는 Opsgenie는 팀을 기반으로 인시던트를 관리하고 처리하기 때문입니다. 팀을 구성한 다음, Zabbix와 연동을 구성하여 Alert 정보를 받을 수 있습니다. 


추가적으로 Opsgenie의 인시던트 룰을 사용하여 Alert 생성 시 특정 조건을 만족하도록 설정하여 자동으로 인시던트를 생성하고 팀에 할당할 수 있습니다.  

이제 아래 예시를 통해 환경 구성에 대해 자세히 확인해보도록 하겠습니다.

<br/>

**Opsgenie Integration 설정**



  1. Opsgenie에서 타사 제품과 Integration을 구성하기 위해서는 팀을 생성합니다. 팀을 생성하셨다면 상단의 **Teams → Integrations → Add Integration**을 클릭하여 Zabbix를 선택합니다.

 <center><img src = "https://blog.dmove.kr/assets/images/banners/Zabbix-Opsgenie/18.png"></center>

  2.Integration 이름을 선택한 다음, API Key를 복사하고, 연동 시 실행할 액션을 선택하여 저장합니다.

<center><img src = "https://blog.dmove.kr/assets/images/banners/Zabbix-Opsgenie/19.png"></center>

<br/>

**Opsgenie Webhook 설정 (Zabbix)**

1. Zabbix 관리자 계정으로 로그인 후, 관리 → 미디어 타입 → Opsgenie를 클릭합니다.

<center><img src = "https://blog.dmove.kr/assets/images/banners/Zabbix-Opsgenie/20.png"></center>



  2.Opsgenie와 연동에 필요한 api, team, token, web 주소와 Zabbix의 URL을 입력합니다.

<center><img src = "https://blog.dmove.kr/assets/images/banners/Zabbix-Opsgenie/21.png"></center>



3. **User settings → Profile → 연락 방법**으로 접근하여 **추가**를 클릭하여 Opsgenie 웹훅을 추가합니다.



<center><img src = "https://blog.dmove.kr/assets/images/banners/Zabbix-Opsgenie/22.png"></center>

<br/>

**Opsgenie Action 설정 (Zabbix)**

 

액션은 Zabbix에서 장애 발생 시 트리거 되어 Opsgenie 웹훅을 통해 Opsgenie의 Alert 생성 정보를 전달합니다.

  1.**설정 → 액션 → Trigger actions**로 이동합니다.

<center><img src = "https://blog.dmove.kr/assets/images/banners/Zabbix-Opsgenie/23.png"></center>

<br/>   2. 우측 상단의 액션 작성을 클릭합니다.

<center><img src = "https://blog.dmove.kr/assets/images/banners/Zabbix-Opsgenie/24.png"></center>



   <br/>  3. 오퍼레이션에서 스텝을 추가합니다.



<center><img src = "https://blog.dmove.kr/assets/images/banners/Zabbix-Opsgenie/25.png"></center>



   <br/>  4. 전달 대상과 미디어에서 Opsgenie를 추가합니다.



<center><img src = "https://blog.dmove.kr/assets/images/banners/Zabbix-Opsgenie/26.png"></center>

<br/>

  5.갱신과 복구에 대한 트리거를 4번과 동일하게 추가합니다.



<center><img src = "https://blog.dmove.kr/assets/images/banners/Zabbix-Opsgenie/27.png"></center>





<center><img src = "https://blog.dmove.kr/assets/images/banners/Zabbix-Opsgenie/28.png"></center>



<center>완성된 트리거 액션</center>



<br/>



**OEC Connector 설치 (Zabbix - Server)**



  1.해당 링크에서 서버 OS에 맞는 OEC Connector를 다운로드 받은 후 rpm 또는 dpkg 명령어를 통해 패키지를 설치합니다.


[Release Zabbix-1.1.6_oec-1.1.3 Opsgenie/oec-scripts](https://github.com/opsgenie/oec-scripts/releases/tag/Zabbix-1.1.6_oec-1.1.3)



<center><img src = "https://blog.dmove.kr/assets/images/banners/Zabbix-Opsgenie/29.png"></center>



​    2. OEC 서비스를 시작합니다.





```sh
root@jira-crowd:/home/gongdol# service oec start 
root@jira-crowd:/home/gongdol# service oec status
```





<center><img src = "https://blog.dmove.kr/assets/images/banners/Zabbix-Opsgenie/30.png"></center>

<br/>

  3.OEC config.json 파일을 수정합니다. 기본적으로 config 파일은 /home/opsgenie/oec/conf 폴더에 있습니다. 수정해야 하는 항목은 다음과 같습니다:
apiKey : Opsgenie에서 Integration을 생성하였을 때 발급받은 키
command_url : zabbix url로 수정
user & password : zabbix 계정

 

<center><img src = "https://blog.dmove.kr/assets/images/banners/Zabbix-Opsgenie/31.png"></center>



<br/>

**인시던트 룰(Incident Rule) 설정**

인시던트 룰은 생성된 경고가 특정 조건을 만족할 때 장애와 관련된 인시던트를 생성할 수 있도록 규칙을 생성합니다. 인시던트 룰은 팀 설정에서 생성이 가능합니다. 제가 설정한 인시던트 룰은 설명 내용에 “**Server**“라는 내용이 포함될 시 인시던트를 생성하도록 규칙을 설정하였습니다. 



<div style="width:45%; float:left; margin-right : 10%;"><img src = "https://blog.dmove.kr/assets/images/banners/Zabbix-Opsgenie/32.png"><center><p>인시던트 룰</p></center></div><div style="width:45%;float:right;"><img src="https://blog.dmove.kr/assets/images/banners/Zabbix-Opsgenie/33.png"><center>인시던트 룰로 생성된 인시던트</center></div><div style="clear:both;"></div>

 

------

지금 까지 Zabbix와 Opsgenie를 연동하여 장애 발생 시 어떻게 Alert과 인시던트를 생성하고 효과적으로 처리 하는지 알아보았습니다.  

Zabbix나 Opsgenie에 대해 자세한 내용이 궁금하시다면 저희 [디무브에게 문의](http://dmove.co.kr/contact-us/quote-service-inquiry)해 주시면 감사하겠습니다.

 

감사합니다!

 