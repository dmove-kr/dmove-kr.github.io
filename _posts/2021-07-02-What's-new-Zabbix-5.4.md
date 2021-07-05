---
layout: post
title: 새로운 Zabbix 5.4 버전을 만나보세요!
subtitle: Zabbix5.4
date: 2021-07-02
categories: [Zabbix]
Author: Jackson
tags: [Dmove, Zabbix,zabbix5.4,자빅스]
---



![image1](https://blog.dmove.kr//assets/images/banners/Zabbix/5.4/image1.png)

  <p></p>

안녕하세요. 디무브 입니다. 

기존에 비LTS버전으로 사용자들의 많은 관심을 받았던 Zabbix 5.4버전이 2021년 5월 17일 드디어 LTS 버전으로 출시가 되었습니다. 

이번 포스팅에서는 Zabbix 5.4버전에서 새롭게 추가된 PDF보고서 생성 및 더 강력해진 문제 감지, 데이터 통계 등 새로 추가되고 개선된 기능들에 대하여 여러분과 함께 살펴보겠습니다.   

  

---



## 1. Reporting and Visualization 

### 1-1. Unification of Screens 



- 기존의 Zabbix 5.2 에서는 문제에 대한 "사전-정의" 보기를 도입했었습니다. **Monitoring**  →  **Problems** 에서 필터의 옵션 값에 따라 서로 다른 보기를 설정하고 문제의 유형과 매칭하여 한 번의 클릭으로 보기를 전환해 서로 다른 유형의 정보들을 쉽게 확인할 수 있었습니다.  



- 이번 Zabbix 5.4에서는 Zabbix 5.2에서 분리되어 있던 화면 기능을 **Dashboards**로 통합하여 워크 플로우 간단하고 사용자 친화적으로 만들었습니다. 

![](https://blog.dmove.kr/assets/images/banners/Zabbix/5.4/image2.png)

<center>- Zabbix 5.2 - 사전 정의된 보기 -</center>



![](https://blog.dmove.kr/assets/images/banners/Zabbix/5.4/image3.png)

  

<center>- Zabbix 5.4 - 새로운 대시보드 -</center>

  

- 이러한 변화는 로컬 화면을 비롯하여 전역 화면에도 영향을 미쳤으며 Nginx의 성능 모니터링을 위한 Nginx performance와 같이 사용자의 목적에 맞는 다양한 template을 **Configuration** > **Templates** 에서 사용해 보실 수 있습니다. 



- 아래 우측 사진의 Nginx performance 및 시스템 성능과 같이 현재 호스트에 사용할 수 있는 template간에 빠르게 전환하여 CPU로드, 디스크 I / O 및 CPU로드와 같은 일부 Linux OS의 정보를 확인할 수 있습니다.

![](https://blog.dmove.kr/assets/images/banners/Zabbix/5.4/image4.png)

<center>- Template for Dashboards -</center>



![](https://blog.dmove.kr/assets/images/banners/Zabbix/5.4/image5.png)

<center>- 특정 Host에 대한 Dashboards View -</center>



### 1-2 Multi-page dashboards 

- Zabbix 5.4에서는 이전 버전의 slideshow 또는 screen slideshow와 같은 기능들을 **Multi-page dashboards**의 이름으로 통합하였습니다.



-  또한 Multi-page dashboards에는 몇몇 페이지들을 하나의 대시보드에 포함하여 하나의 화면으로 만들어 사용할 수 있습니다. 



- 좌측 하단의 사진은 Server performance dashboard를 이용한 것입니다. 여기서 memory, cpu 등의 정보들을 확인할 수 있고 여러분이 필요하다면 **Add page**를 클릭하여 원하는 페이지를 추가하여 확인할 수 도 있습니다. 또한 우측 하단의 사진처럼 기존의 Slideshow mode를 이용하실 수도 있습니다. 



![](https://blog.dmove.kr/assets/images/banners/Zabbix/5.4/image6.png)

<center>- 멀티 페이지 대시보드 -</center>

![](https://blog.dmove.kr/assets/images/banners/Zabbix/5.4/image7.png)

<center>- 슬라이드 쇼 모드 -</center>



### 1-3 Scheduled PDF reports 

- 가장 많은 사용자들이 기대했던 **Scheduled PDF reports**에 대하여 한번 살펴보겠습니다. 
  Zabbix 5.4버전의 Scheduled PDF reports 기능을 이용하여 보고서를 정의하고 생성하여 상대방의 메일로 직접 report를 보낼 수 있습니다. 



- Scheduled PDF report는 다음의 특성을 가지고 있습니다.

  ＊ 중앙 집중식 관리를 통해 최고 관리자는 Zabbix에서 어떤 보고서가 생성되어 다른 사용자에게 전송되는지 확인할 수 있습니다.

  ＊  모든 대시 보드를 PDF 보고서로 변환하여 이메일로 보낼 수 있습니다.

  ＊  이 기능은 모든 사용자가 액세스 할 수 있지만 새로운 사용자 역할에 의해 제한 될 수 있습니다.

  

- 또한 **Dashboards** 에서 이 기능을 사용할 수 있습니다. **Monitoring** > **Dashboards**에서 **Dashboards**를 클릭 하고 PDF보고 기간을 선택하면 Dashboard에서도 이용하실 수 있습니다.



- 예를 들어 매주 월요일 오전 7시에 이전 주의 데이터가 포함 된 보고서가 필요한지 확인할 수 있습니다. 보고서 기간을 선택하기 만하면 Zabbix가 보고서를 생성하여 귀하 또는 다른 사용자에게 이메일로 보냅니다. 보고서를 매일, 매월 또는 매년 받도록 선택할 수도 있습니다.  





![](https://blog.dmove.kr/assets/images/banners/Zabbix/5.4/image8.png){: .imgcenter}

<center>- PDF 보고 기능은 일,주,월,년 별로 스케줄 하실 수 있습니다 -</center>



![](https://blog.dmove.kr/assets/images/banners/Zabbix/5.4/image9.png){: .imgcenter}

<center>- PDF 보고 기능은 대시 보드로부터 접근 가능합니다 -</center>

 <p></p>

---



## 2. More powerful and simple

### 2-1  Tags for items 

- Zabbix는 이미 트리거, 호스트, 호스트 프로토 타입 및 템플릿과 같은 거의 모든 필수 개체에 대한 태그를 지원하고 있습니다. **Tags for items**의 도입으로 인하여  Zabbix 5.4에서는 Item level의 애플리케이션을 T태그로 대체하였으며 대체된 애플리케이션을 더 이상 지원하지 않습니다.



- Tags for items는 정보와 값을 제공하는 태그 이외에도 원하는 만큼 태그를 가질 수 있습니다. 이는 즉 사용자가 Item에 대하여 원하는 만큼 정보를 표시할 수 있습니다.



- 그리고 업그레이드 하는 중에도 기존 애플리케이션의 이름을 태그로 변환하여 정보를 보존할 수 있으므로 사용자는 정보의 손실에 대하여 걱정할 필요가 없습니다. 

  

![](https://blog.dmove.kr/assets/images/banners/Zabbix/5.4/image10.png){: .imgcenter}

<center>- Zabbix Tags -</center>



## 2-2  Syntax 

- 이전 버전에서는 트리거에 대한 특수 구문, 계산 된 항목에 대한 일부 기능 구문 및 집계 된 항목에 대해 다른 구문을 사용했습니다. 이는 구문이 복잡하고 문서를 참조해야 했습니다. 
- 하지만  Zabbix 5.4에서 새롭게 도입된 **Syntax**는 기능에 초점을 두고 Triggers, Calculated, Aggregate에 대해 정확히 동일한 구문을 사용합니다.

<p></p>

---



__이전 버전__

- TRIGGERS : **{host:key.func(params)}>0**



- CALCULATED : **100\*last(“vfs.fs.size[/,free]/last(“vfs.fs.size[/,total]”)**



- AGGREGATE : **grpsum[“MySQL Servers”,”vfs.fs.size[/,total]”,last]**

<p></p>

---



__Zabbix 5.4__

- TRIGGERS : **func(/host/key, params)>0**



- CALCULATED : **sum(/host/vfs.fs.size[\*,free], 10m)**



- AGGREGATE : **min(avg_foreach(/\*/qps?[group=“PostgreSQL” and tag=“Env:Production”], 5m))**

---

<p></p>



- 새로운 Syntax를 사용함으로써 얻을 수 있는 장점은 다음과 같습니다.

  ＊ Triggers, Calculated, Aggregate 등 모든 항목에 대해 간단합니다.

  ＊어제, 이전 시간 등과 같은 **절대 기간을 지원**합니다. 

  ＊이전 구문의 제한이 없습니다.

  ＊와일드 카드 등을 사용하는 태그로 강력한 Aggregate 및 항목 선택이 가능합니다.

  ＊다른 함수의 결과에 함수를 적용 할 수 있습니다. : **func1 (func2 (item))**;

  ＊함수 인자로 여러 항목을 사용할 수 있습니다. : **min (item1, item2)**;

  ＊오래된 제한을 해결하는 모든 작업에 대해 계산 된 메트릭을 지원합니다.

  

### 2-3 New set of functions 

[6 Support functions [Zabbix Documentation 5.4]](https://www.zabbix.com/documentation/current/manual/appendix/functions)



![](https://blog.dmove.kr/assets/images/banners/Zabbix/5.4/image11.png){: .imgcenter}



### 2-4 API tokens

- 마지막으로 만료 날짜가 있는 사용자 별 **API token** 지원을 추가했습니다. 

- **API token**을 이용하여 할 수 있는 일은 다음과 같습니다.

  ＊ 새로운 사용자 역할 인 API token에 대한 액세스를 도입하였습니다.
          →  사용자가Zabbix에서 비공개 API token 생성할 수 있습니다.

  ＊ 모든 토큰은 적절한 권한이 있는 최고 관리자가 전역 적으로 관리 할 수 있습니다. 

  ＊ API 토큰으로 작업 할 수 있는 권한이 있는 사용자와 그렇지 않은 사용자를 정의할 수 있습니다.

- API token 정보를 확인하는 방법은 다음과 같습니다. 

  ＊ **User settings로 이동**

  ＊ **API tokens 선택**

  ＊ **Token정보 확인 - 이름, 옵션 만기일, 마지막 엑세스 시간 및 상태, 활성화 유무 등**

![](https://blog.dmove.kr/assets/images/banners/Zabbix/5.4/image12.png){: .imgcenter}

<center>API token properties</center>

<p></p>

- API token은 적절한 권한이 있는 모든 사용자가 생성할 수 있으며 최고 관리자는 사용자를 선택할 수 있습니다. 
- Zabbix의 API token은 zabbix 모든 항목에 대하여 사용할 수 있으며 한 번 생성된 후에는 다시 확인할 수 없으므로 클립 보드에 복사하여 사용하여 합니다. 

<p></p>

![](https://blog.dmove.kr/assets/images/banners/Zabbix/5.4/image13.png){: .imgcenter}

<center>- 사용 권한이 있는 모든 사용자가 API 토큰 생성 가능 -</center>



![](https://blog.dmove.kr/assets/images/banners/Zabbix/5.4/image14.png){: .imgcenter}

<center>- 슈퍼 관리자는 전역적으로 API 토큰 관리 가능 - </center>



### 2-5 Easy-to-manage templates 

- Zabbix 5.4에서는 항목, 트리거, 그래프 등과 같은 각 템플릿에 대해 고유 한 **Universal template ID**를 도입하여 안전한 방식으로 템플릿 업데이트를 수행 할 수 있습니다.



- ID는 고유하며 항목(Item), 트리거 등을 일치 시키고 템플릿 작업을 단순화합니다.



- 모든 템플릿을 Git 저장소(예 : JSON 또는 YAML 형식)에 보관 한 다음 Zabbix API를 사용하여 CI / CD 파이프 라인을 통해 Zabbix로 푸시 할 수 있습니다.  그리고 CI / CD 시스템은 최신 버전의 템플릿을 가져와 Zabbix API를 사용하여 Zabbix에 적용시킬 수 있습니다.



![](https://blog.dmove.kr/assets/images/banners/Zabbix/5.4/image15.png){: .imgcenter}

<center>- Universal template IDs -</center>



### 2-6 **Better import**

- **Import**를 눌러 새 템플릿 또는 새 버전의 템플릿을 가져올 때 Zabbix는 기존 템플릿과 비교할 때 차이점과 Zabbix에서 변경 될 변경 사항을 표시하여 검토할 수 있습니다.

![](https://blog.dmove.kr/assets/images/banners/Zabbix/5.4/image16.png){: .imgcenter}



<center>기존 템플릿과 새 템플릿 비교</center>



### 2-7 Scalability improvements 

- Zabbix 서버 및 프록시 폴러 프로세스는 더 이상 데이터베이스 연결이 필요하지 않습니다.



- 트렌드 데이터를 위한 인 메모리 캐시, 트렌드 관련 기능에 대한 상당한 속도 향상이 도입되었습니다.



- 부하가 큰 경우 Zabbix 서버 측에서 더 나은 병렬 데이터 처리를 지원합니다.



### 2-8 Universal global scripts 

- 타 사 경고 및 티켓팅 시스템과의 손쉬운 통합을 위해 글로벌 스크립트 용 JavaScript Webhook을 도입했습니다. 



- Zabbix는 전처리, 통합, 데이터 수집 등 다양한 목적으로 Webhook을 사용 합니다.



- **Universal global scripts**를 Zabbix UI에서 자동 수정, 경고, 통합 및 수동 실행과 같은 모든 작업에 사용할 수 있습니다. 

### 2-9 **Powerful value maps**

- **Value map**은 Zabbix에서 수집 한 숫자 값을 사람이 읽을 수 있는 값으로 변환하는 간단한 방법입니다.



- 범위에 따라 매칭을 지원하며 정확한 값 매칭을 기반으로 Value map을 정의하여 모니터링 할 수 있습니다.



- Zabbix 5.4에서는  value map을 지원하도록 확장하여 범위에 따라서 0에서 127 사이의 상태를 받으면 서비스

   를 ' **Down** '으로 간주하고 다른 값 ( ' **Up** '또는 그 반대)으로 간주하도록 정의 할 수 있습니다.



- 정규 표현식에 사용할 수 있습니다. 



![](https://blog.dmove.kr/assets/images/banners/Zabbix/5.4/image17.png){: .imgcenter}

<center>- 값의 범위를 설정한 매핑 실행 -</center>



### 2-10 Value maps for templates and hosts 

- Zabbix 5.4에서는 **템플릿과 호스트 레벨의 Value map**을 도입하였으며 Global value map을 더 이상 지원하지 않습니다. 



- 템플릿 레벨에서 Value map을 보다 쉽게 관리 할 수 있도록 mass update operation을 도입했습니다.

  ＊ **Add**, **Update**, **Rename**, **Remove**, **Remove all** 과 같은 작업을 수행할 수 있습니다. 



- 템플릿 레벨의 Value map의 장점

  ＊ 전역 개체에 대한 참조 없이 자체 포함 된 템플릿을 제공합니다.

  ＊ 템플릿에는 항목 집합, 트리거 집합, 그래프, 템플릿 수준 대시 보드 및 값 맵 등 모니터링에 필요한 모든 정보를 포함하고 있습니다. 

  ＊ 글로벌 개체에 대한 참조가 없으며 템플릿이 독립적이며  [zabbix.com/integrations](https://zabbix.com/integrations) 에서 템플릿을 다운로드하여 이용할 수 있습니다.

  ＊ Multi-tenant 환경의 지원을 더 강화했습니다.

![](https://blog.dmove.kr/assets/images/banners/Zabbix/5.4/image18.png){: .imgcenter}

<center>- 대규모 업데이트 작업 -</center>



### 2-11 Usability improvements 

- Zabbix 5.4에서 UI의 가시성을 높였습니다. 이전 버전에서는 복잡하게 하위 메뉴를 찾아야 했지만 Zabbix 5.4에서는 **Third-level menu**를 통해 이전 보다 쉽게 하위 항목들을 이용할 수 있습니다.



- Mass update와 import form(양식 가져오기)를 위한 **Modal window**를 도입했습니다. 



- 이전 버전에서는 특정 작업을 수행하기 위해 한 페이지에서 다른 페이지로 넘어가야 했지만 이번 릴리즈를 통해 Modal window를 사용함으로써 다른 페이지를 넘어가지 않고 현재 페이지의 리스트에서 작업할 수 있습니다.

![](https://blog.dmove.kr/assets/images/banners/Zabbix/5.4/image19.png){: .imgcenter}

<center>- Third-level menu -</center>

<img src="https://blog.dmove.kr/assets/images/banners/Zabbix/5.4/image20.png" style="width:100%; text-align=center; ">

<center>- 대량 업데이트 및 가져오기 양식을 위한 모달 윈도우 -</center>

<p></p>

- **Negated filtering for tags(태그 필터링 무효화)**를 통해 **Monitoring** > **Problems** 에서 스테이징 환경이 아닌 모든 문제를 표시할 수 있습니다. Env Does not equal Staging과 같은 조건을 정의하고 저장하여 새로운 보기(화면)을 통해 이용할 수 있습니다. 



![](https://blog.dmove.kr/assets/images/banners/Zabbix/5.4/image21.png){: .imgcenter}



<center>- Negated filtering for tags -</center>



### 2-12 Better support of XML preprocessing

- Zabbix는 4년 동안 **XML XPath**를 지원해 왔으며 이번 Zabbix 5.4에서는 **XML to JSON** 형식을 도입하였습니다. 



- 대부분의 Zabbix 작업은 JSON기반이므로 XML문서를 JSON문서로 변환함으로써 Zabbix에서 XML데이터를 처리하는데 사용할 수 있습니다. 



![](https://blog.dmove.kr/assets/images/banners/Zabbix/5.4/image22.png){: .imgcenter}



<center>- Better XML preprocessing - </center>

### 2-13 More improvements 
<p></p>

보안 관련 변경 사항 및 실시간 내보내기와 관련된 기타 변경 사항은 다음과 같습니다.

- **보안 관련(Security-related)**

  ＊ 모든 SNMPv3 암호화 프로토콜 지원

  ＊ 로그인 실패 시 에러 메세지

  ＊ Zabbix UI에서 암호 필드 자동 완성 기능 비활성화

- **실시간 내보내기(Real-time exprot)**

  ＊ 이벤트(장애와 같은)의 심각도에 대한 정보가 실시간 내보기에 포함됩니다.

  ＊ 실시간으로 추출한 정보의 구성 세분화

- __추가 사항__

  ＊ VMWare 클러스터 모니터링 지원

  ＊ 로우 레벨(Low-level)검색을 위한 LLD매크로 필터링 지원

  ＊ 알림 매크로 (**ITEM.VALUETYPE**) 지원

  ＊ HA설정을 위한 Oracle에 대한 조회 서비스 지원

  ＊ JavaScript Webhook에 대한 NTLM 인증 지원

  ＊ 하나의 호스트에서 동일한 키를 갖는 여러 JMX 메트릭 지원

  ＊ JavaScript Webhook 및 preprocessing에 사용 가능한 메모리 크기 증가

  ＊ Webhook에서 CurlHttpRequest의 이름이 HttpRequest로 변경

  ＊ 사용자 구성의 **Alias**가 **Username으로 변경**



### 2-14 New integrations and tempaltes 

- iTOP, VictorOps, Rocket.Chat, Signal, Express.ms 및 기타 솔루션과의 통합이 함께 제공됩니다.



- APC UPS 하드웨어, Hikvision 카메라 등, Hadoop, Zookeeper, Kafka, AMQ, HashiCorp Vault, MS Sharepoint, MS Exchange, smartclt, Gitlab, Jenkins, Apache Ignite 등을 모니터링을 위한 새로운 공식 템플릿을 제공합니다. 



![](https://blog.dmove.kr/assets/images/banners/Zabbix/5.4/image23.png){: .imgcenter}

<center>- 새로운 통합과 템플릿 - </center>



- Zabbix가 모니터링 할 수 있는 기능과 타사 시스템과의 통합 호환성을 확인하려면 모니터링하려는 솔루션 또는 [zabbix.com/integrations](https://www.zabbix.com/integrations) 를 방문해주세요!



![](https://blog.dmove.kr/assets/images/banners/Zabbix/5.4/image24.png){: .imgcenter}

<center>- 모니터링과 알람을 위한 공식 등록된 솔루션 -</center>

- 통합 페이지에서 Zabbix가 지원되는 **Device-sepcific 템플릿**을 도입했습니다. 
- 이 페이지에서 장치를 검색하고 선택하면 검색한 장치의 템플릿이 있는 페이지로 이동하고 Zabbix에 적용하여 사용할 수 있습니다.



![](https://blog.dmove.kr/assets/images/banners/Zabbix/5.4/image25.png){: .imgcenter}

<center>- 하드웨어 밴더 장치를 위한 템플릿 -</center>

<center></center>

- Zabbix는 무료 오픈 소스 솔루션이며 Linux와 동일한 GPLv2 라이센스를 사용하며 [zabbix.com/download](https://www.zabbix.com/download) 에서 Zabbix를 다운로드 하여 원하는 곳에 배포 할 수 있습니다.
- Zabbix는 사용자들이 많이 사용하고 있는 대부분의 운영체제를 지원합니다. 



![](https://blog.dmove.kr/assets/images/banners/Zabbix/5.4/image27.png){: .imgcenter}

<center>- 온 프레미스 환경에서 Zabbix 배포 - </center>

- MAC OS, Docker 컨테이너, Docker 환경, Cloud AWS, Azure, OpenStack, Digital Ocean, Google Cloud에 Zabbix를 배포할 수 있습니다. 





![](https://blog.dmove.kr/assets/images/banners/Zabbix/5.4/image28.png){: .imgcenter}



<center>- 클라우드 환경에서 Zabbix 배포 - </center>

- Zabbix 인스턴스를 클라우드에서 실행하기 위해 많은 비용을 지출 할 필요가 없습니다. Digital Ocean 또는 Linode를 사용할 수 있으며 한 달에 약 5 달러로 Zabbix 서버를 Zabbix UI와 함께 실행하여 수천 대의 장치를 모니터링 할 수 있습니다.



<p></p>

---



## 3. Breaking Changes



### 3-1 Breaking changes

- 응용 프로그램 및 화면은 지원되지 않으며 많은 관련 API method가 영향을 받습니다.



- 5.4 버전부터는 더 이상 Global value map을 지원하지 않기 때문에 Global value map에서 template-level 또는 host-level value map으로 전환해야 합니다.



- 사용하기 쉬운 Trigger expression 및 Calculated metrics에 대한 새로운 구문

  ＊ Aggregate metric가 Calculated metrics로 병합됩니다.



### 3-2 Integration with Grafana

- Zabbix 5.4가 출시 된 후 사용자들은 앞서 언급 한 API 변경 사항을 도입하면서 Grafana와의 통합이 깨 졌다는 사실을 빠르게 깨달았습니다. 더 이상 응용 프로그램을 지원하지 않기 때문에 모든 API 변경 사항은 Zabbix 5.4의 공식 출시 며칠 전에 문서화 되었습니다.
- Zabbix 용 Grafana 플러그인의 관리자 인 Alexander Zobnin의 신속한 반응 덕분에 통합은 매우 빠르게 수정되었으며 이제 Grafana를 Zabbix 5.4와 함께 쉽고 안전하게 사용할 수 있습니다.



![](https://blog.dmove.kr/assets/images/banners/Zabbix/5.4/image29.png){: .imgcenter}



---



## 4. 업그레이드 노트



### 4-1 업그레이드 노트 

- Zabbix 서버 및 Zabbix 프록시 용 새 바이너리를 설치하고, Zabbix UI를 업그레이드하고, Zabbix 서버를 시작하면 Zabbix 서버가 데이터베이스 구조를 자동으로 업그레이드합니다.



- 모든 Trigger expression, Calculated and Aggregate metrics가 새 구문으로 자동 변환됩니다.



- 모든 애플리케이션이 자동으로 태그로 변환됩니다. 

  EX) CPU Application  →  CPU tag

- Global value map이 template & host level로 이동 됩니다. 

  ＊ 더 이상 Global value map을 사용할 수 없습니다.



- 모든 화면이 대시 보드로 자동으로 변환됩니다.



- **참고** 

  ＊ 다음 LTS 릴리스 인 Zabbix 6.0은 2021 년 말에 출시 될 예정입니다. 

  ＊ 또한 서비스 트리 및 서비스 간의 종속성, 비즈니스 서비스 모니터링 SLA 및 SLA보고와 관련된 Zabbix의    BSM (비즈니스 서비스 모니터링)을 개선하기 위해 많은 시간을 투자합니다.



### 4-2 Zabbix 로드맵

- Zabbix roadmap에 관한 자세한 내용은 [zabbix.com/roadmap](https://www.zabbix.com/roadmap) 에서 관심 있는 버전 (예 : 6.0, 6.2, 6.4 또는 7.0 LTS)을 선택하여 확인할 수 있습니다 . 
- 현재 개선 대시 보드를 유지하고 있으므로 2.5 년 계획의 진행 상황을 즉시 확인할 수 있습니다.



![](https://blog.dmove.kr/assets/images/banners/Zabbix/5.4/image30.png){: .imgcenter}

---



## 5. Q & A



__Question1.  화면에서 대시 보드로의 마이그레이션은 자동으로 수행되나요?__



→  전역 화면 및 템플릿 수준 화면이 전역 대시 보드 및 템플릿 수준 대시 보드로 자동 변환되며 모든 정보는 보전 됩니다.



__Question 2.  이제 대시보드가 보고서로 제공되는데, Zabbix 5.4에서 이러한 대시 보드를 타사와의 제품 통합에 기본적으로 보낼 계획이 있으신가요?__ 

→ 만약 우리가 그러한 계획을 세운다면, 우선 타사의  로드맵에 있어야 합니다. 한 솔루션을 다른 솔루션과 통합하는 것은 일종의 고정 프레임 기술을 사용하여 지금 바로 수행 할 수 있습니다. 

하지만 그것은 깔끔한 방법이 아니기 때문에  앞으로 우리는 타사의 HTML 페이지에 위젯 또는 대시 보드를 포함하는 기능을 추가 할 수 있기를 기대하며 계획을 수립할 것입니다. 조만간 Zabbix에서 구현 될 것이라고 생각합니다.



__Question3. 인벤토리 보고서 또는 가용성 보고서 등과 같은 Zabbix의 다른 섹션을 기반으로 한 보고서를 만들 계획이 있나요?__

→ Zabbix 6.0에 계획된 일부 변경 사항은 비즈니스 서비스 모니터링과 관련이 있으며 이 개발의 일환으로 SLA보고를 위해 특별히 제작 된 새로운 위젯을 포함하고 있습니다. 그래서 우리는 이 방향으로 개발하고 있으며 시각적으로 더 매력적이고 유연성을 가진 위젯을 가질 것으로 생각합니다.



__Question4. 우리가 했던 방식으로 Value map을 구현 한 이유는 무엇입니까? 사용자 매크로 전역 템플릿 호스트처럼 3 단계로 구현하지 않은 이유는 무엇인가요? __



→ 세 가지 수준으로 구현하면 Global value map이 여전히 존재하며 이 경우 Value map을 관리하기가 매우 어렵습니다. 예를 들어 서비스 상태와 같은 Global map이 정의되어 있다고 가정할 때 다음과 같은 질문이 있을 수 있습니다. 

- 다른 수준에서 정의 된 동일한 value map 서비스 상태로 새 템플릿을 가져온 후 Zabbix는 어떻게 해야 합니까? 
- value map 서비스 상태를 템플릿 수준으로 유지해야 합니까? 
- 템플릿 수준에서 서비스 상태를 생성하지 않고 전역 서비스 상태를 업그레이드해야합니까? 



이러한 질문들은 결국 다른 문제와 혼란을 야기 할 것입니다. 따라서 특히 대규모 Zabbix 배포의 경우 Value map과 같은 전역 개체에 대한 숨겨진 종속성을 방지하기 위해 템플릿을 독립적으로 유지하기 위해서 구현하였습니다.



__Question5. 중간 버전의 Zabbix가 많이 릴리즈된 이유는 무엇인가요? 또한  2~3년 동안 버전 5.2 및 5.4를 지원하지 않는 이유는 무엇인가요?__

→ 그 이유는 매우 간단합니다. 하나의 주요 릴리스 내에서 역방향 및 순방향 호환성을 유지하며 데이터베이스 구조가 그대로 유지되도록 보장하기 위해서 입니다. 따라서 5.4.0을 설치하면 5.4 (5.4.10, 5.4.2, 5.4.0) 내의 모든 항목이 이전 버전과 이후 버전과 호환되며 데이터베이스 구조는 동일하게 유지됩니다. 마이너 릴리스에서 새로운 기능을 도입하기 시작하면 데이터베이스 구조를 수정하고 확장해야 하며 메이저 릴리스의 마이너 버전이 더 이상 호환되지 않기 때문입니다.   

<p></p>

또한 지원 팀에 추가 부담을 주지 않기 위해 몇 달 동안 만 5.2 및 5.4를 지원합니다. 두 가지 유형의 릴리스가 있습니다. 5년 지원이 포함 된 LTS 릴리스와 비 LTS 릴리스입니다. 우리가 모든 것을 지원하기 시작했다면 주어진 순간에 우리 팀이 지원하는 10 개의 주요 Zabbix 버전이 있을 것입니다. 고객이 지원 팀에 문제를 보고하면 이 문제를 해결해야 합니다. 예를 들어 패치를 만들고 QA 절차를 따르고 솔루션을 매우 신중하게 테스트해야 합니다. Microsoft조차도 10 개의 주요 버전을 유지하지 않습니다. 따라서 한 번에 몇 개의 LTS 릴리스 만 지원합니다.



__Question 6. 향후 Red Hat 7 , CentOS 7 또는  RHEL 7에 대해 Zabbix 6.0 버전은 지원이 되나요?__


→ CentOS 7 에 대한 지원을 중단했습니다. 필요한 소프트웨어 버전에서 TLS 암호화와 같은 일부 항목이 CentOS 7.0 에서 오래된 버전이기 때문입니다. 그렇기 때문에 고민한 끝에 Zabbix 5.2부터는 Zabbix Server, Zabbix Proxy 및 Zabbix UI에 대한 CentOS 7.0 지원을 중단하기로 결정했습니다. 게다가 Zabbix에 필요한 특정 버전의 소프트웨어 종속성을 얻으려면 타사 repository에 의존해야 하기 때문입니다.

<p></p>

---



