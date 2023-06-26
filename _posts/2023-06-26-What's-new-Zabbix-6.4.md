---
layout: post
title: Zabbix v.6.4 출시!
subtitle: Zabbix6.4
date: 2023-06-26
author : jackson
image : assets/images/banners/Zabbix/6.4/Thumbnails.png
categories: [Release Note]
tags: [Dmove, Zabbix,zabbix6.4,자빅스]
---





  <p></p>

﻿안녕하세요. 디무브 입니다. 🎈

2023년 3월, 오픈소스 모니터링 솔루션 자빅스의 **주요버전인 Zabbix 6.4**가 출시되었습니다.

Zabbix 6.4 버전은 JIP (Just-in-time) LDAP 및 SAML 사용자 프로비저닝 등 많은 부분DL 개선되었는데요.

 

이번 포스팅에서는 Zabbix 6.4의 새롭게 추가되고 개선된 기능들에 대해 함께 살펴보고자 합니다!

﻿

------

 

 

## 1. JIT (Just In Time) 사용자 프로비저닝

 

Zabbix 6.4에서는 LDAP 및 SAML 인증을 위한 JIT 사용자 프로비저닝 지원이 추가되었습니다.

 <center><img src="/assets/images/banners/Zabbix/6.4/1.png"></center><br/>



Zabbix 관리자는 이제 LDAP 그룹 패턴을 선택하여 사용자 프로비저닝을 구성하고 검색된 사용자에게 사용자 그룹 및 사용자 역할을 자동으로 할당할 수 있습니다. 미디어 유형은 LDAP/SAML 속성을 기반으로 매핑도 가능합니다.

 

<center><img src="/assets/images/banners/Zabbix/6.4/2.png"></center><br/>

 

 

## 2. Cause & Symptom 이벤트 표시 기능 추가

 

*Zabbix 6.4에서는 이벤트를 Cause 또는 Symptom*으로 표시하는 기능이 추가되었습니다.

이를 통해  기존 Cause 이벤트만 사용했던 반면 이제는 Cause & Sympotom으로 분류해 근본적인 원인 문제만 필터링 해 볼 수 있게 되었습니다. 또한, Symptom 이벤트에 대한 동작 작업을 일시 중지할 수도 있습니다. 

 

추가적으로 장애 원인에 대한 사항으로 {EVENT.CAUSE} 매크로를 추가하여 트리거를 정의하거나 알림 등을 설정할 수 있으며 이벤트 원인과 관련된 API 정보를 제공받아 원인을 분석할 수 있습니다.

 

<center><img src="/assets/images/banners/Zabbix/6.4/3.png"></center><br/>

 

<center><img src="/assets/images/banners/Zabbix/6.4/4.png"></center><br/>

 

 

## 3. 즉각적인 Configuration 설정 반영

 

Zabbix 6.2에 도입된 변경 사항(Configuration change deltas만 수집)을 계속해서 구축하는 Zabbix 6.4는 패시브 및 액티브 에이전트와 프록시 간에 즉각적인 Configuration 설정 동기화를 도입했습니다.

 

구체적인 동기화 적용 사항은 아래와 같습니다 : 

- 2분마다 전체 구성 사본을 받는 대신 Zabbix 6.4에서는 액티브 에이전트는 변경이 수행된 경우에만 구성 사본을 받습니다.
- Active Agent 상태를 확인하는  *RefreshActiveChecks* 매개변수의 설정 값 범위가 60초~3600초를 설정하는 범위에서 1초 ~ 86400초 까지 폭 넓게 설정이 가능합니다.
-  Zabbix 서버(Passive Mode용) 및 Zabbix 프록시(Active Mode용) 설정  파일 모두에서 ProxyConfigFrequency 매개 변수를 사용할 수 있습니다. *.*
- *Zabbix 프록시 구성의 ConfigFrequency* 매개변수는 이제 더 이상 사용되지 않습니다.
- 기본 *ProxyConfigFrequency* 매개변수 값이 10초(1시간에서 감소)로 설정됩니다.

또한 구성 델타만 동기화되므로 Zabbix 서버 및 프록시의 성능도 향상됩니다.

*액티브 에이전트의 경우 – 액티브 에이전트는 RefreshActiveChecks* 간격 마다 수신하는 대신 구성에서 변경 사항이 감지된 경우에만 전체 구성 사본을 수신합니다.

 

## 4. 새로운 SNMP walk item

 

이에 Zabbix에서는 6.4 버전부터 walk에 대한 OID 항목을 찾을 수 있도록 지원합니다. 

기존 방식의 경우 OID 단일 값에 대한 결과를 하나하나 찾는 방식으로 수집되는 OID에 대한 데이터가 많아질 수록 프로세스와 자원에 영향을 줄 수 있었습니다.

 

새롭게 추가된 WALK 항목은 OID 값을 확인한 뒤,  *GetBulk* 요청을 통해 특정 OID 아래에 있는 모든 값들을 폴링합니다. SNMP GetBulk 요청을 통해 엔터프라이즈 계층 SNMP 장치에서 더 나은 성능과 더 빠른 메트릭 수집 및 검색을 제공할 수 있습니다.

 

<center><img src="/assets/images/banners/Zabbix/6.4/5.png"></center><br/>

 

OID를 통해 수집된 값들은 JSON 형식으로 전처리 과정을 거쳐 데이터를 저장할 수 있습니다.



<center><img src="/assets/images/banners/Zabbix/6.4/6.png"></center><br/>

<center><img src="/assets/images/banners/Zabbix/6.4/7.png"></center><br/>

JSON 형태로 변환된 데이터들은  LLD 디스커버리 개념으로 사용하여 각각의 데이터로 세분화하여  아이템과 트리거 프로토타입을 구성할 수 있습니다.

 

<center><img src="/assets/images/banners/Zabbix/6.4/8.png"></center><br/>

 

## 5. Outdated proxy에 대한 데이터 수집 지원

 

Zabbix 구성 요소 업그레이드 워크플로우(특히 대규모 환경)를 개선하기 위해 Zabbix 서버 버전보다 낮은 버전의 Zabbix Proxy의  데이터 수집이 지원됩니다.

- Zabbix 서버와  Proxy 서버의 Major 버전(ex: 6.4)이 동일한 경우 프록시를 통해 수행할 수 있는 기능이 **완전 지원**됩니다.
- Zabbix 서버보다 오래되었지만 최종 LTS 버전(5,6,7)  버전 내에 포함되어 있는 프록시는 **outdated**로 표시됩니다.
- **Outdated** Proxy의 경우 상위 버전의 Zabbix 서버와 통신하여 데이터를 수집할 수 있습니다.
- 최종 LTS 버전(5<6) 보다 낮은 프록시의 경우 데이터 수집이 **지원되지 않습니다**.

 

<center><img src="/assets/images/banners/Zabbix/6.4/9.png"></center><br/>

| **Server ver.** | **Current Proxy ver.** | **Outdated Proxy ver.** | **Unsupported proxy version**   |
| :-------------- | :--------------------- | :---------------------- | :------------------------------ |
| 6.4             | 6.4                    | 6.0, 6.2                | 6.0 버전 미만6.4 버전 이상      |
| 7.0             | 7.0                    | 6.0, 6.2, 6.4           | 6.0 버전 미만7.0 버전 이후 버전 |
| 7.2             | 7.2                    | 7.0                     | 7.0 버전 미만7.2 버전 이상      |

 

 

## 6. 새로운 메뉴 레이아웃

 

Zabbix 메뉴 레이아웃이 재설계되었습니다. 새로운 메뉴 레이아웃의 목표는 주요 Zabbix 기능에 대한 논리적이고 일관된 액세스를 제공하는 것입니다.

<center><img src="/assets/images/banners/Zabbix/6.4/10.png"></center><br/>

## 7. HTTP를 통한 실시간 metrix & event 스트리밍

 

수집된 메트릭 및 이벤트를 파일로 스트리밍하는 것 외에도 Zabbix 6.4에는 HTTP를 통해 메트릭 및 이벤트를 스트리밍하는 옵션이 추가되었습니다.

Zabbix 관리자는 태그 필터를 사용하여 스트리밍용 데이터를 필터링할 수 있습니다.

*Administration-General* 아래에 새로운 *Connector* 섹션이 추가 되었습니다 . 여기에서 Zabbix 관리자는 항목 값과 이벤트를 푸시해야 하는 외부 시스템을 정의할 수 있습니다.

 

<center><img src="/assets/images/banners/Zabbix/6.4/11.png"></center><br/>

Zabbix 6.4는 HTTP를 통해 메트릭 및 이벤트를 실시간으로 스트리밍하여 다른 애플리케이션에 분석 보고서 및 AI 엔진의 정보 소스로 사용할 수 있습니다. 각 메트릭과 이벤트 정보는 Kafka, RabbitMQ 또는 Amazon Kinesis와 같은 메시지 브로커와 연동하여 외부 서비스에서 스트리밍된 데이터들을  실시간 으로 조정할 수 있습니다 .  

 

 

## 8. 템플릿 버전관리

 

템플릿 관리 및 사용 편의성을 개선하기 위해 템플릿 버전 관리가 도입되었습니다.

템플릿 버전의 경우 템플릿을 생성한 벤더사와 버전의 형태로  Zabbix 프론트엔드 화면에서 확인이 가능합니다. 벤더와 버전 정보는 커스텀 템플릿을 작성할 때 추가할 수 있습니다.

<center><img src="/assets/images/banners/Zabbix/6.4/12.png"></center><br/>

 

 

## 9. Zabbix 위젯 생성을 위한 개발 프레임 워크

 

위젯 생성을 위한 Zabbix의 개발 프레임워크에 많은 변화가 생겼습니다. 개발 프레임워크에 대한 변경 사항은 아래와 같습니다 : 

- Zabbix에서 사용되던 위젯들이 모듈화 되었습니다.
- Zabbix 내부에서 사용되던 위젯(대시보드 시계 등)은 *ui/widgets* 폴더에 있습니다.
- *커스텀 위젯은 ui/modules/<widget>* 폴더에 지정해야 합니다 .
- 새 위젯을 추가 시 기존 위젯 파일을 변경하지 않기 때문에 간단하게 적용할 수 있습니다.

 

이러한 변경 사항 외에도 새로운 Zabbix 공식 홈페이지에 커스텀 위젯을 생성할 수 있는 튜토리얼 가이드가 제공되고 있습니다. 이 섹션에는 커뮤니티에서 프론트엔드 모듈 및 위젯 개발을 안내하는 가이드, 자습서 및 코드 예제와 Zabbix 에이전트 2 사용자 정의 Go 플러그인 개발에 대한 도움말이 포함되어 있습니다.

 

<center><img src="/assets/images/banners/Zabbix/6.4/13.png"></center><br/>

 

 

## 10. 인터페이스를 확인하지 않는 아이템 유형 추가

 

기존에는 ICMP나 Simple Check 등의 데이터 수집 유형의 경우 인터페이스를 사용하지 않음에도 인터페이스를 체크하는 번거로움이 있었습니다.

6.4 버전 업데이트부터는 일부 아이템 유형의 경우 인터페이스를 확인하지 않고 데이터를 수집합니다. 인터페이스를 확인하지 않는 아이템 유형은 아래와 같습니다:

- Simple check

- External check

- SSH agent

- Telnet agent

  

  <center><img src="/assets/images/banners/Zabbix/6.4/14.png"></center><br/>

  

------

위에 설명 드린 내용 외에도 많은 사항들이 개선/변경되었는데요.

새롭게 출시된 Zabbix 6.4 버전의 변경 사항, 버그 수정 및 새로운 기능이 궁금하시다면 [Zabbix 6.4 릴리스 노트](https://www.zabbix.com/rn/rn6.4.0) 에서 자세한 내용 확인할 수 있습니다!

 

자빅스 구축 관련 혹은 사용 중 궁금한 점이 있으시면 국내 유일 자빅스 인증 파트너사 디무브로 문의주세요!

감사합니다.



Multiple options can be selected.

레이블 추가
