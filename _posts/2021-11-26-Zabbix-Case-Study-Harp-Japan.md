---
layout: post
title: Case Study - Zabbix 모니터링 솔루션의 Harp 구축 사례
Subtitle: Zabbix Case Study
date: 2021-11-26
categories: [Case Study]
tags: [Dmove, Zabbix,자빅스, 모니터링솔루션, 모니터링툴, 자빅스 구축, Case Study, Harp, Zabbix]

---

<style type='text/css'>
    th, td {
  vertical-align : top;
}
</style>




![](https://blog.zabbix.com/wp-content/uploads/2020/03/featured_image.png)



안녕하세요, 디무브입니다! 🎈

이번 시간에는 일본의 대표적인 클라우드 서비스 전문 기관인 Harp사의 Zabbix 도입에 대한 Case Study를 설명해드리려고 합니다. <br/>

 

Harp 회사는 이미 2010년 부터 Zabbix 2.0 버전을 도입하여 사용해왔고, 

최근 최신 버전의 Zabbix 버전으로 업그레이드 하였습니다. 

어떻게 그들이 Zabbix를 도입하여 발전하게 되었고, 

오랜 기간동안 Zabbix를 사용할 수 있었던 핵심 적인 이유는 무엇이 있는지 확인해 보겠습니다.

---

## Preview

 

### 1. 서버 구성



| 시스템 구성                                                  | **Zabbix 서버 하드웨어**                                     |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| Zabbix 서버 갯수 : 2대 <br/> Zabbix 프록시 갯수 : 10개 <br/>모니터링 되는 장치 수 : 1,000개 <br />사이트 갯수 : 1개<br />트리거 수 : 7,000개 <br/>이중화 구성 : 액티브 - 액티브 구성<br /> | VM 머신 (4Core CPU, 16GB 메모리, 3.5TB 디스크) <br/>NVPS : 240 |

![](https://blog.dmove.kr/assets/images/banners/Zabbix/Case%20Study/Harp/Infrastructure.png)



### 2. 도입 Simulation

 

<table>
  <thead>
    <tr>
      <th style="text-align: left"><strong>Before</strong></th>
      <th style="text-align: left"><strong>Requirements</strong></th>
      <th style="text-align: left"><strong>Approach</strong></th>
      <th style="text-align: left"><strong>Outcome</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: left">＊ 서비스와 모니터링 인프라를 통합하여 운영적인 부하의 감소와  통합 모니터링 실현</td>
      <td style="text-align: left">＊ 비용 축소 <br>＊ 넓은 범위의 운영 시스템과 네트워크 장치 모니터링 <br>* 고객의 요구, 모니터링 타겟 및 리소스 확장을 충족할 수 잇는 모니터링 솔루션</td>
      <td style="text-align: left">＊ 다양한 플랫폼들이 모니터링이 되어야함. <br>＊ 모든 기능들은 자유롭고 활용이 가능하여 사용자의 요구를 쉽게 반영할 수 있어야함.</td>
      <td style="text-align: left">＊ 각 서비스를 위한 단계별 모니터링 구현 <br>＊ 모니터링 시스템을 선정해 설치작업 생략</td>
    </tr>
  </tbody>
</table>







---



## 구축 사례



### 1. 광범위한 모니터링과 인프라 통합을 위한 오픈소스 솔루션인 Zabbix 도입

초창기의 Harp사는 서비스에 대한 기반을 각각 구축하였고, 이에 따른 모니터링 시스템의 운영 책임자도 매번 달랐습니다. 

제공하는 서비스가 적었기 때문에, 직원들은 매일 아침 모니터링 화면을 육안으로 확인했으며, 

문제 발생 시 그들 스스로 대응하는 방식으로 모니터링을 진행했습니다. 

하지만 점차 제공하는 서비스가 늘어났고, 

이에 따른 인프라를 하나로 통합한 중앙 집중식 모니터링을 구현하여 운영 부하를 줄여야 할 필요성을 느꼈습니다.
 <br /> <br />

또한 담당자의 필요에 따라 MRTG, Cacti 등 오픈소스 소프트웨어 도구를 설치하였기 때문에, 

IaaS에서 SaaS까지, 서비스 프로비전의 여러 계층을 포함한 것과 동시에 

여러 확장 서비스에 대한 교차 기능적이고 포괄적인 모니터링 솔루션을 고려해야 했습니다. 

이에 그들은 오픈 소스 솔루션으로서, 비용을 절감할 수 있을 뿐만 아니라 여러 장치들을 모니터링할 수 있는 Zabbix를 도입하였습니다.

 <br />

Zabbix는 에이전트를 설치하지 않고도 리눅스, 윈도우, 유닉스 등 광범위한 운영체제에서 서버를 모니터링할 수 있었으며 쉽게 사용할 수 있었기 때문에, 

인터넷과 커뮤니티만 이용하여 모니터링을 수행할 수 있었습니다.

 <br />

### 2. 끊임없이 확장되는 서비스의 미래에 초점을 맞춘 최신화된 Zabbix로 마이그레이션

2010년에 Harp사는 여러 서비스의 인프라를 하나로 통합하고 Zabbix 2.0을 도입하여 서비스 모니터링을 중앙 집중화 하였습니다. 

오픈소스 솔루션을 도입함으로서, Harp 사는 라이센스와 같은 비용을 줄이고 특정 벤더에 묶이지 않는 메커니즘을 만들 수 있었으며 

지자체 시스템에 요구되는 공공성을 확보할 수 있었습니다.

 <br />

그 외에 과거 Harp사는 모니터링 서비스 수준에 따라 일부 서비스를 사내 자체적인 도구로 보는 편차도 있었고, 

상업용 모니터링 툴을 한꺼번에 세트로 서비스를 설치하여 여러 문제가 있었으나 

Zabbix를 도입하면서 한 개의 단순한 도구로 모든 것을 쉽게 관리할 수 있었습니다.

 <br />

하지만 시간에 지남에 따라 가상화 기술이 확산되기 시작하고, 고객의 요구에 따른 서비스가 더욱 확장되었습니다. 

관리해야할 서비스와 가상 머신의 수가 증가함에 따라  Harp사는 초기 리소스 설계에서 용량 한계에 도달할 것이라 판단하였습니다.  

서비스별 장애현황을 시각화하고 퍼블릭 클라우드 모니터링 서비스의 구현 등 운영적인 설계에 문제를 해결하기 위해 

모니터링 서비스인 Zabbix를 새로운 버전으로 재구축하기로 결정했습니다.

 <br />

Harp사는 PostgreSQL의 TimeScale DB 기능이 이전 Zabbix에서 사용해왔던 MySQL보다 더 효과적일 것이라 생각했기 때문에, 

2020년 12월에 PostgreSQL의 TimeScale DB와 함께 새로운 Zabbix로 마이그레이션을 진행하여 새로운 모니터링 시스템 운영을 시작했습니다.

 <br />

새롭게 구성된 모니터링 시스템은 2개의 Zabbix 서버와 10개의 Zabbix 프록시로 구성되며 약 1,000개의 장치를 모니터링 합니다. 

모니터링에 구성된 트리거는 7,000개 이며, 구성된 아이템 수는 약 3만개로 구성되었습니다. 

이로 인해 모니터링 규모가 이전보다 약 2/3정도로 축소되었다고 Harp사는 밝혔습니다.

 <br />

또한 적절한 필터를 충분히 적용하지 못하고 원하지 않는 아이템도 자동으로 수집되는 문제 역시 Zabbix를 업데이트 하면서 해결하여 

현재 가동하고 있는 성능의 10배의 규모로 서비스를 확장해도 모니터링 성능을 유지할 수 있을 것이라고 밝혔습니다.

 <br />

### 3. 장기적인 사용의 핵심 포인트 : 작은 디테일 영역을 안정적으로 고정

최신화된 Zabbix 버전으로 마이그레이션 하면서, Harp사는 또한 Zabbix 엔터프라이즈의 지원을 도입하였습니다. 

10년동안 Zabbix를 사용했던 Harp사의 IT 인프라 담당자인 Sotozaki씨는 Zabbix에 대해 다음과 같이 언급하였습니다.  <br />

> *작은 규모로 서비스를 시작하는 동안에는 커뮤니티 정보를 참고하면서 앞으로 나아갈 수 있지만, 규모가 커질수록 세심하게 운영에 집중해도 파악하지 못하는 부분이 있을 것입니다. Zabbix의 장점은 오퍼레이터가 세밀하게 골치 아픈 부분을 안정적으로 고치게 할 수 있었습니다.* 
>
> *업그레이드 된 Zabbix는 태그 기능이 상당히 좋아졌을 뿐만아니라 버전이 업그레이드 될 때마다 더 많은 기능이 추가되고 디테일하게 개선되고 있다고 느끼고 있습니다. 처음에는 사용하기 어려워 보여도 조금만 감수하면 금방 적응할 수 있습니다. 그것이 저희가 Zabbix를 오랫동안 계속 사용하게 된 이유입니다.“* 

Harp사는 자체 플랫폼에서 제공되는 서비스를 모니터링하는데 Zabbix를 활용하는 것 이외에도 

지방 정부에 운영 모니터링 서비스를 제공하는 것을 고려하고 있다고 밝혔습니다. 

<br />

또한 사이버 공격의 심각성에 비춰 총무성(일본의 행정기관)과 지자체에서 요구되는 보안 수준이 높아졌기 때문에 

Zabbix를 활용하여 의심되는 서비스가 있는지, 사이버 공격의 심각성 등을 확인할 수 있었다고 덭붙여 설명했습니다.

<br />

앞으로 Harp사는 신종 코로나 바이러스의 영향과 지자체 운영이 전자화 되는 등 디지털화가 가속되고 있는 만큼, 

지속적으로 Zabbix를 최대한 활용하여 안정적인 서비스를 제공할 계획입니다.

------

위 케이스 스터디와 같이, Zabbix는 여러 복잡한 모니터링을 사용할 필요 없이 인프라에 최적화 되어 

하나의 툴로 인프라를 통합 관리할 수 있으며 타 솔루션에 비해 구성이 쉽고 빠르게 구축할 수 있다는 장점을 갖고 있습니다.

오픈 소스 솔루션이라는 이유로 많은 고객 분들이 일체의 비용 없이 사용할 수 있기를 바라지만, 

효과적인 구축과 활용을 위해서는 전문가의 도움을 통한 진단과 기술 지원이 필수적입니다.

디무브는 Zabbix의 공식 한국 파트너사로, Zabbix 모니터링 솔루션 구축과 관련된 모든 전문 기술 서비스를 제공해 드립니다.

Zabbix 모니터링 솔루션에 대해 궁금하신 사항이 있으시다면, 디무브에게 연락해주세요!

감사합니다. 😃