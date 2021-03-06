---

layout: post
title: 2021 Atlassian 주요 제품 릴리즈 노트 (Jan ~ Apr) -Server, DC
subtitle: Release Note
date: 2021-05-06 15:48:00
author : ethan
image : assets/images/banners/Release%20Note%20Server/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20Server-1.png
categories: [Release Note]
tags: [Jira,Conlfuence,Jira Service Management,Releases, Release Notes,Server,Data Center, Atlassian, 아틀라시안, 아틀라시안데이터센터]
---


안녕하세요, 디무브 입니다! 🎈


지난 1분기 동안 아틀라시안의 주요제품인 Jira Software, Jira Service Management 및 Confluence에도 크고 작은 변화가 있었는데요. 

각 제품의 Server 및 Data Center 버전에는 어떠한 변화가 있었는지 확인해보는 시간을 가지겠습니다.

---

## 1. Jira Software




### ■ Version 8.15




#### 1. Advanced RoadMap 기능 추가[Data Center]




![릴리즈 노트 이미지](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/Jira/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20Server-jira-1.png)



 8.15 DataCenter 버전부터 Advanced RoadMap 기능이 Jira Software 에 번들로 포함되어 사용할 수 있게 되었습니다. 이 기능을 활용해 여러 팀과 프로젝트에서 작업을 계획하고 추적할 수 있으며, 다양한 시나리오를 탐색할 수 있습니다.  

자세한 내용은 [여기](https://confluence.atlassian.com/jirasoftwareserver/view-your-plan-1044784216.html)를 클릭하여 확인하실 수 있습니다.




#### 2. 이메일 알림에 첨부 표시[Data Center]




![릴리즈 노트 이미지](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/Jira/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20Server-jira-2.png)



이전 버전까지는 이미지 첨부가 이메일 알림에 표시되지 않았습니다. 하지만 8.15 이상의 버전부터 이메일 알림에 이미지 첨부 표시 기능이 추가되어 모든 이미지에 보안 토큰을 포함하여 최대 7일동안 알림 이미지를 보실 수 있습니다.




### ■ Version 8.16





#### 1. 사용자 지정 필드 개선 [Data Center] 


![릴리즈 노트 이미지](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/Jira/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20Server-jira-3.png)

사용자 지정 필드가 많아지면 Jira 인스턴스를 복잡하게 만들며 성능에 영향을 미칩니다. 하지만 필드를 삭제할 때 어떠한 필드를 삭제하면 좋을지 파악하기란 쉽지 않았습니다.



이러한 어려움을 지원하기 위해 8.16 버전 에서는 사용자 지정 필드에 이슈와 마지막 업데이트 값, 대량 삭제 항목이 새롭게 추가되어 해당 필드를 사용하는 이슈의 갯수와 마지막으로 언제 업데이트가 되었는지 쉽게 파악할 수 있습니다.



또한 한 개 씩 필드를 삭제해왔던 이전 버전들과 달리 대량 삭제가 가능하여 사용자 지정 필드를 쉽게 관리하고 Jira 인스턴스 성능 유지가 훨씬 수월해 졌습니다.



#### 2. 설명(Description)필드의 기본값 설정

![릴리즈 노트 이미지](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/Jira/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20Server-jira-4.png)

 이전 까지는 설명 필드에 공통적인 내용 작성 시 매번 생성할 때마다 같은 내용을 입력해야 하는 번거로움이 있었습니다. 하지만 이번 업데이트로 설명 필드에 기본값을 생성할 수 있어 Confluence의 템플릿과 같이 활용할 수 있게 되었습니다.




#### 3. DVCS 관리 [SERVER] [DATA CENTER]



![릴리즈 노트 이미지](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/Jira/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20Server-jira-5.png)



DVCS 계정을 더 수월하게 관리할 수 있도록 개선되었습니다. 사용자의 계정과 Repository에 대한 관리, 경험, 성능을 개선시키기 위해 DVCS 계정 페이지를 재설계 하였으며, 통합에 사용되는 화면을 보기 쉽게 정리하고 검색 기능도 추가하였습니다.



#### 4. 사용자가 여러 ID 공급자로 로그인하도록 허용 [Data Center]


![릴리즈 노트 이미지](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/Jira/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20Server-jira-6.png)


SAML 및 OPEN ID 연결 구성에서 여러 IdPs를 구성해 사용자가 로그인 시 적합한 환경에서 로그인 할 수 있게 되었습니다. 새로운 모든 로그인 방법은 Jira Service Management의 고객 포털에 대해 독립적으로 활성화 할 수 있습니다.



#### 5. 데이터 파이프라인 내보내기 상태 확인 기능 [Data Center]



![릴리즈 노트 이미지](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/Jira/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20Server-jira-7.png)




데이터 파이프라인을 통해 Jira에서 현재 상태를 내보내 Tableau나 PowerBI와 같은 비즈니스 인텔리전스 툴에서 데이터를 분석할 수 있습니다. 



### 해결된 이슈 사항


<p data-renderer-start-pos="1637"><strong data-renderer-mark="true">■ Version 8.15</strong></p>



| **Summary**                                                  | **Key**                                                      | **Status** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :--------- |
| Kanban 보드의 Drag and Drog 기능을 통해 전환 시 <br />대기 상태 열의 모든 전환을 표시하지 않은 현상 | [JSWSERVER-20774](https://jira.atlassian.com/browse/JSWSERVER-20774?src=confmacro) | **CLOSED** |
| 인사이트 문서의 링크가 깨지는 현상                           | [JRASERVER-72302](https://jira.atlassian.com/browse/JRASERVER-72302?src=confmacro) | **CLOSED** |
| LDAP 인증에서 Health Check가 실패하는 현상                   | [JRASERVER-71855](https://jira.atlassian.com/browse/JRASERVER-71855?src=confmacro) | **CLOSED** |
| 새 프로젝트로 보드를 생성 시 오류가 표시되는 현상            | [JRASERVER-71839](https://jira.atlassian.com/browse/JRASERVER-71839?src=confmacro) | **CLOSED** |
| 새로운 보드를 생성하는 동안 Project Lead가 선택되지 않는 현상 | [JRASERVER-71811](https://jira.atlassian.com/browse/JRASERVER-71811?src=confmacro) | **CLOSED** |
| Azure DB 서비스를 SQL Server 2014로 표시하지만<br />데이터베이스가 SQL Server 2017인 상태로 확인 | [JRASERVER-71549](https://jira.atlassian.com/browse/JRASERVER-71549?src=confmacro) | **CLOSED** |
| 이슈 편집 권한 없이 에픽 링크를 이용할 수 없는 현상          | [JSWSERVER-20770](https://jira.atlassian.com/browse/JSWSERVER-20770?src=confmacro) | **CLOSED** |
| JQL 검색 박스가 너무 좁은 현상                               | [JRASERVER-71290](https://jira.atlassian.com/browse/JRASERVER-71290?src=confmacro) | **CLOSED** |

 

**■ Version 8.16**



| **Summary**                                                  | **Key**                                                      | **Status** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :--------- |
| 상위 작업에서 하위 작업 완료 시 Active Sprint 에서 Java Script 오류가 발생 | [JSWSERVER-20837](https://jira.atlassian.com/browse/JSWSERVER-20837?src=confmacro) | **CLOSED** |
| 이슈를 편집할 때 “Move to Done“ 버튼이 사라지는 현상         | [JSWSERVER-20788](https://jira.atlassian.com/browse/JSWSERVER-20788?src=confmacro) | **CLOSED** |
| 프로젝트 유형 아이콘의 대비가 충분하지 않은 현상             | [JSWSERVER-20758](https://jira.atlassian.com/browse/JSWSERVER-20758?src=confmacro) | **CLOSED** |
| Sprint picker 필드가 Cpu에 과부하를 발생시키는 현상          | [JSWSERVER-20445](https://jira.atlassian.com/browse/JSWSERVER-20445?src=confmacro) | **CLOSED** |
| DB 연결 실패로 인한 스레드로 인해 사용자 인증이 멈추는 현상  | [JRASERVER-71876](https://jira.atlassian.com/browse/JRASERVER-71876?src=confmacro) | **CLOSED** |

 







<hr>



## 2.  Jira Service Management


### ■ Version 4.15





#### 1. Mindville Insight 어플리케이션이 Jira Service Management에 추가 [Data Center]



![릴리즈 노트 Jira Service Management](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/Jira%20Service%20Management/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20-Server-Jira%20Service%20Management-1.png)



Mindville Insight는 자산 및 구성 관리를 위한 어플리케이션으로 IT 분야를 포함한 비즈니스 자산을 생성 및 관리하고 요청, 사건, 변경 등을 통해 상호작용 할 수 있습니다.  또한 H/W, S/W, 사무 기기 등 소유하고 있는 모든 것을 한 눈에 보고 명확하게 분류 할 수 있습니다.  이 앱이 가진 핵심 기능은 다음과 같습니다:



1. 소유 한 것을 한 눈에 확인 가능합니다.
2. 사건, 변경 등 서비스 요청이 들어올 때마다 자산을 이슈에 연결하여 사람들이 즉각적인 컨텍스트를 얻고 모든 세부 정보를 알 수 있습니다.
3. 다양한 자산 관리에 탁월합니다. 


#### 2. 고객 포털 개선 [Server] [Data Center]




![릴리즈 노트 Jira Service Management](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/Jira%20Service%20Management/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20-Server-Jira%20Service%20Management-2.png)




고객 포털이 개선되어 고객들은 사용 가능한 포털의 개요를 카드로 깔끔하게 표시하고 빠른 요약을 활용하여 잘못된 경로로 빠지지 않고 올바른 포털을 선택하실 수 있습니다.



또한 인기도 또는 알파벳 순으로 포털을 정렬 할 수 있으며, 최근 요청 목록과 같이 이전부터 사용해왔던 익숙한 기능을 지속적으로 유지할 수 있습니다.




![릴리즈 노트 Jira Service Management](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/Jira%20Service%20Management/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20-Server-Jira%20Service%20Management-3.png)




포털에서 새로운 서식이 있는 텍스트 편집기를 사용하시면 요청 및 의견을 보다 더 명확하고 전문적으로 보이도록 만들 수 있습니다. 일반적인 밑줄, 취소 선, 기울임 꼴과 같은 기능을 활용하여 단어를 강조할 수 있고, 제목과 목록은 단어를 구조화 하는데 도움이 되어 가독성이 편리해 졌습니다.



![릴리즈 노트 Jira Service Management](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/Jira%20Service%20Management/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20-Server-Jira%20Service%20Management-4.png)




 이전 버전 까지 사용자 포털에서의  투표 기능은 에이전트나 Jira 인스턴스에 접근할 수 있는 계정에서만 사용 가능했습니다.  하지만 이제 포털과 상호 작용하는 수많은 고객들과 사용자들이 투표 기능을 사용할 수 있어 기능의 포괄성을 확장시켰습니다.





#### 3. 향상된 데이터 인사이트를 Jira Service Management에서 활용


![릴리즈 노트 Jira Service Management](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/Jira%20Service%20Management/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20-Server-Jira%20Service%20Management-5.png)





관리자 및 데이터 분석가에게 Jira Software 및 Jira Core(현, Jira Work Management)에서 현재 상태의 데이터를 내보낼 수 있는 기능을 제공하기 시작했으며 Jira Service Management와 관련된 데이터도 포함됩니다.

 

API를 통해 Jira 및 Jira Service Management 에서 현재 상태의 데이터를 추출하여 Tableau 나 PowerBI와 같은 비즈니스 인텔리전스 툴에 공급하여 “사용자 할동에 대한 보고서 및 시각화 생성“ , “조직의 리더가 팀이 Jira Service Management를 사용하는 방법을 이해하기“ , “Jira Service Management 사용 최적화에 대한 더 나은 결정“ 등을 할 수 있습니다.






#### 4. 이메일 알림에 이미지 첨부 표시 [Server] [Data Center]




![릴리즈 노트 Jira Service Management](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/Jira%20Service%20Management/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20-Server-Jira%20Service%20Management-6.png)




<p data-renderer-start-pos="4080">Jira 8.15와 같이 추가되어  이메일 알림에 이미지 첨부 표시 기능이 추가되어 모든 이미지에 보안 토큰을 포함하여 최대 7일동안 알림 이미지를 보실 수 있습니다.</p>

<p data-renderer-start-pos="4176">&nbsp;</p>



### ■  Version 4.16



Jira Software 8.16 버전과 업데이트 내역이 같습니다. 



### 해결된 이슈 사항




<p data-renderer-start-pos="4248"><strong data-renderer-mark="true">■ Version 4.15</strong></p>



<table data-number-column="false"><colgroup><col style="width: 418px;"><col style="width: 211px;"><col style="width: 128px;"></colgroup><tbody><tr><th rowspan="1" colspan="1" colorname="" class="ak-renderer-tableHeader-sortable-column" data-colwidth="419"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="4267"><strong data-renderer-mark="true">Summary</strong></p></div><figure class="ak-renderer-tableHeader-sorting-icon ak-renderer-tableHeader-sorting-icon__no-order"><div role="presentation"><figure class="sc-erNlkL ggzRUZ"><div class="sorting-icon-svg__no_order table-sorting-icon-inactive sc-FQuPU eaHKqG"></div></figure></div></figure></th><th rowspan="1" colspan="1" colorname="" class="ak-renderer-tableHeader-sortable-column" data-colwidth="212"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="4278"><strong data-renderer-mark="true">Key</strong></p></div><figure class="ak-renderer-tableHeader-sorting-icon ak-renderer-tableHeader-sorting-icon__no-order"><div role="presentation"><figure class="sc-erNlkL ggzRUZ"><div class="sorting-icon-svg__no_order table-sorting-icon-inactive sc-FQuPU eaHKqG"></div></figure></div></figure></th><th rowspan="1" colspan="1" colorname="" class="ak-renderer-tableHeader-sortable-column" data-colwidth="129"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="4285"><strong data-renderer-mark="true">Status</strong></p></div><figure class="ak-renderer-tableHeader-sorting-icon ak-renderer-tableHeader-sorting-icon__no-order"><div role="presentation"><figure class="sc-erNlkL ggzRUZ"><div class="sorting-icon-svg__no_order table-sorting-icon-inactive sc-FQuPU eaHKqG"></div></figure></div></figure></th></tr><tr><td rowspan="1" colspan="1" colorname="" data-colwidth="419"><p data-renderer-start-pos="4297">'onIssueChangedEvent' 이벤트 핸들러가 작동되지 않은 현상. </p></td><td rowspan="1" colspan="1" colorname="" data-colwidth="212"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="4344"><a class="sc-gleUXh dNInRj" href="https://jira.atlassian.com/browse/JSDSERVER-7110?src=confmacro" title="https://jira.atlassian.com/browse/JSDSERVER-7110?src=confmacro" data-renderer-mark="true">JSDSERVER-7110</a></p></div></td><td rowspan="1" colspan="1" colorname="" data-colwidth="129"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="4362"><span class="status-lozenge-span" title="Closed" data-node-type="status" data-color="green"><span class="_bfhkaxbu _2rko1nwa _vchhusvi _syaz1u00 _1e0c1o8l _1wyb1skh _k48p1fw0 _vwz4kb7n _p12f1osq _ca0qyh40 _u5f3idpf _n3td1l7b _19bvidpf _1p1dangw _s7n41q9y" style="--_1ly4823:#E3FCEF; --_fer9fa:3px; --_srel9g:#006644;"><span class="_1e0c1o8l _s7n4jp4b _1reo15vq _18m915vq _1bto1l2s _o5721q9c _vchhusvi _ca0qidpf _u5f370xm _n3tdidpf _19bv70xm _p12fvyns _1bsb1osq" style="--_1xlms2h:4px; --_1w406pq:200px;">Closed</span></span></span> </p></div></td></tr><tr><td rowspan="1" colspan="1" colorname="" data-colwidth="419"><p data-renderer-start-pos="4370">요청을 해결하는 전환에서 "고객 대면"상태가 변경되지 않으면 "요청 해결됨"알림이 고객에게 전송되지 않는 현상</p></td><td rowspan="1" colspan="1" colorname="" data-colwidth="212"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="4435"><a class="sc-gleUXh dNInRj" href="https://jira.atlassian.com/browse/JSDSERVER-7078?src=confmacro" title="https://jira.atlassian.com/browse/JSDSERVER-7078?src=confmacro" data-renderer-mark="true">JSDSERVER-7078</a></p></div></td><td rowspan="1" colspan="1" colorname="" data-colwidth="129"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="4453"><span class="status-lozenge-span" title="Closed" data-node-type="status" data-color="green"><span class="_bfhkaxbu _2rko1nwa _vchhusvi _syaz1u00 _1e0c1o8l _1wyb1skh _k48p1fw0 _vwz4kb7n _p12f1osq _ca0qyh40 _u5f3idpf _n3td1l7b _19bvidpf _1p1dangw _s7n41q9y" style="--_1ly4823:#E3FCEF; --_fer9fa:3px; --_srel9g:#006644;"><span class="_1e0c1o8l _s7n4jp4b _1reo15vq _18m915vq _1bto1l2s _o5721q9c _vchhusvi _ca0qidpf _u5f370xm _n3tdidpf _19bv70xm _p12fvyns _1bsb1osq" style="--_1xlms2h:4px; --_1w406pq:200px;">Closed</span></span></span>  </p></div></td></tr><tr><td rowspan="1" colspan="1" colorname="" data-colwidth="419"><p data-renderer-start-pos="4462">상담원이 지원 문제를 연결하려고 하면 ‘세션 시간 초과’ 발생</p></td><td rowspan="1" colspan="1" colorname="" data-colwidth="212"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="4500"><a class="sc-gleUXh dNInRj" href="https://jira.atlassian.com/browse/JSDSERVER-7010?src=confmacro" title="https://jira.atlassian.com/browse/JSDSERVER-7010?src=confmacro" data-renderer-mark="true">JSDSERVER-7010</a></p></div></td><td rowspan="1" colspan="1" colorname="" data-colwidth="129"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="4518"><span class="status-lozenge-span" title="Closed" data-node-type="status" data-color="green"><span class="_bfhkaxbu _2rko1nwa _vchhusvi _syaz1u00 _1e0c1o8l _1wyb1skh _k48p1fw0 _vwz4kb7n _p12f1osq _ca0qyh40 _u5f3idpf _n3td1l7b _19bvidpf _1p1dangw _s7n41q9y" style="--_1ly4823:#E3FCEF; --_fer9fa:3px; --_srel9g:#006644;"><span class="_1e0c1o8l _s7n4jp4b _1reo15vq _18m915vq _1bto1l2s _o5721q9c _vchhusvi _ca0qidpf _u5f370xm _n3tdidpf _19bv70xm _p12fvyns _1bsb1osq" style="--_1xlms2h:4px; --_1w406pq:200px;">Closed</span></span></span>  </p></div></td></tr><tr><td rowspan="1" colspan="1" colorname="" data-colwidth="419"><p data-renderer-start-pos="4527">메인 포털에 표시 될 포털 로고 오류 현상</p></td><td rowspan="1" colspan="1" colorname="" data-colwidth="212"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="4554"><a class="sc-gleUXh dNInRj" href="https://jira.atlassian.com/browse/JSDSERVER-1836?src=confmacro" title="https://jira.atlassian.com/browse/JSDSERVER-1836?src=confmacro" data-renderer-mark="true">JSDSERVER-1836</a></p></div></td><td rowspan="1" colspan="1" colorname="" data-colwidth="129"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="4572"><span class="status-lozenge-span" title="Closed" data-node-type="status" data-color="green"><span class="_bfhkaxbu _2rko1nwa _vchhusvi _syaz1u00 _1e0c1o8l _1wyb1skh _k48p1fw0 _vwz4kb7n _p12f1osq _ca0qyh40 _u5f3idpf _n3td1l7b _19bvidpf _1p1dangw _s7n41q9y" style="--_1ly4823:#E3FCEF; --_fer9fa:3px; --_srel9g:#006644;"><span class="_1e0c1o8l _s7n4jp4b _1reo15vq _18m915vq _1bto1l2s _o5721q9c _vchhusvi _ca0qidpf _u5f370xm _n3tdidpf _19bv70xm _p12fvyns _1bsb1osq" style="--_1xlms2h:4px; --_1w406pq:200px;">Closed</span></span></span>  </p></div></td></tr><tr><td rowspan="1" colspan="1" colorname="" data-colwidth="419"><p data-renderer-start-pos="4581">여러 개의 custom field가 리퀘스트 유형에 추가되지 않은 문제</p></td><td rowspan="1" colspan="1" colorname="" data-colwidth="212"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="4624"><a class="sc-gleUXh dNInRj" href="https://jira.atlassian.com/browse/JSDSERVER-554?src=confmacro" title="https://jira.atlassian.com/browse/JSDSERVER-554?src=confmacro" data-renderer-mark="true">JSDSERVER-554</a></p></div></td><td rowspan="1" colspan="1" colorname="" data-colwidth="129"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="4641"><span class="status-lozenge-span" title="Closed" data-node-type="status" data-color="green"><span class="_bfhkaxbu _2rko1nwa _vchhusvi _syaz1u00 _1e0c1o8l _1wyb1skh _k48p1fw0 _vwz4kb7n _p12f1osq _ca0qyh40 _u5f3idpf _n3td1l7b _19bvidpf _1p1dangw _s7n41q9y" style="--_1ly4823:#E3FCEF; --_fer9fa:3px; --_srel9g:#006644;"><span class="_1e0c1o8l _s7n4jp4b _1reo15vq _18m915vq _1bto1l2s _o5721q9c _vchhusvi _ca0qidpf _u5f370xm _n3tdidpf _19bv70xm _p12fvyns _1bsb1osq" style="--_1xlms2h:4px; --_1w406pq:200px;">Closed</span></span></span>  </p></div></td></tr><tr><td rowspan="1" colspan="1" colorname="" data-colwidth="419"><p data-renderer-start-pos="4650">insight 문서 링크가 끊어지는 현상</p></td><td rowspan="1" colspan="1" colorname="" data-colwidth="212"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="4676"><a class="sc-gleUXh dNInRj" href="https://jira.atlassian.com/browse/JRASERVER-72302?src=confmacro" title="https://jira.atlassian.com/browse/JRASERVER-72302?src=confmacro" data-renderer-mark="true">JRASERVER-72302</a></p></div></td><td rowspan="1" colspan="1" colorname="" data-colwidth="129"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="4695"><span class="status-lozenge-span" title="Closed" data-node-type="status" data-color="green"><span class="_bfhkaxbu _2rko1nwa _vchhusvi _syaz1u00 _1e0c1o8l _1wyb1skh _k48p1fw0 _vwz4kb7n _p12f1osq _ca0qyh40 _u5f3idpf _n3td1l7b _19bvidpf _1p1dangw _s7n41q9y" style="--_1ly4823:#E3FCEF; --_fer9fa:3px; --_srel9g:#006644;"><span class="_1e0c1o8l _s7n4jp4b _1reo15vq _18m915vq _1bto1l2s _o5721q9c _vchhusvi _ca0qidpf _u5f370xm _n3tdidpf _19bv70xm _p12fvyns _1bsb1osq" style="--_1xlms2h:4px; --_1w406pq:200px;">Closed</span></span></span>  </p></div></td></tr></tbody></table>


<p data-renderer-start-pos="4703">&nbsp;</p>



<p data-renderer-start-pos="4705"><strong data-renderer-mark="true">■ Version 4.16</strong></p>



<table data-number-column="false"><colgroup><col style="width: 418px;"><col style="width: 188px;"><col style="width: 151px;"></colgroup><tbody><tr><th rowspan="1" colspan="1" colorname="" class="ak-renderer-tableHeader-sortable-column" data-colwidth="419"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="4724"><strong data-renderer-mark="true">Summary</strong></p></div><figure class="ak-renderer-tableHeader-sorting-icon ak-renderer-tableHeader-sorting-icon__no-order"><div role="presentation"><figure class="sc-erNlkL ggzRUZ"><div class="sorting-icon-svg__no_order table-sorting-icon-inactive sc-FQuPU eaHKqG"></div></figure></div></figure></th><th rowspan="1" colspan="1" colorname="" class="ak-renderer-tableHeader-sortable-column" data-colwidth="189"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="4735"><strong data-renderer-mark="true">Key</strong></p></div><figure class="ak-renderer-tableHeader-sorting-icon ak-renderer-tableHeader-sorting-icon__no-order"><div role="presentation"><figure class="sc-erNlkL ggzRUZ"><div class="sorting-icon-svg__no_order table-sorting-icon-inactive sc-FQuPU eaHKqG"></div></figure></div></figure></th><th rowspan="1" colspan="1" colorname="" class="ak-renderer-tableHeader-sortable-column" data-colwidth="152"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="4742"><strong data-renderer-mark="true">Status</strong></p></div><figure class="ak-renderer-tableHeader-sorting-icon ak-renderer-tableHeader-sorting-icon__no-order"><div role="presentation"><figure class="sc-erNlkL ggzRUZ"><div class="sorting-icon-svg__no_order table-sorting-icon-inactive sc-FQuPU eaHKqG"></div></figure></div></figure></th></tr><tr><td rowspan="1" colspan="1" colorname="" data-colwidth="419"><p data-renderer-start-pos="4754">4.15에서 4.16 버전으로 업그레이드 시 실패</p></td><td rowspan="1" colspan="1" colorname="" data-colwidth="189"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="4785"><a class="sc-gleUXh dNInRj" href="https://jira.atlassian.com/browse/JSDSERVER-7126?src=confmacro" title="https://jira.atlassian.com/browse/JSDSERVER-7126?src=confmacro" data-renderer-mark="true">JSDSERVER-7126</a></p></div></td><td rowspan="1" colspan="1" colorname="" data-colwidth="152"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="4803"><span class="status-lozenge-span" title="Closed" data-node-type="status" data-color="green"><span class="_bfhkaxbu _2rko1nwa _vchhusvi _syaz1u00 _1e0c1o8l _1wyb1skh _k48p1fw0 _vwz4kb7n _p12f1osq _ca0qyh40 _u5f3idpf _n3td1l7b _19bvidpf _1p1dangw _s7n41q9y" style="--_1ly4823:#E3FCEF; --_fer9fa:3px; --_srel9g:#006644;"><span class="_1e0c1o8l _s7n4jp4b _1reo15vq _18m915vq _1bto1l2s _o5721q9c _vchhusvi _ca0qidpf _u5f370xm _n3tdidpf _19bv70xm _p12fvyns _1bsb1osq" style="--_1xlms2h:4px; --_1w406pq:200px;">Closed</span></span></span> </p></div></td></tr><tr><td rowspan="1" colspan="1" colorname="" data-colwidth="419"><p data-renderer-start-pos="4811">JSM 4.15의 고객포털에 대한 새로운 서식이 이는 텍스트 편집기 기능의 UI 문제</p></td><td rowspan="1" colspan="1" colorname="" data-colwidth="189"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="4862"><a class="sc-gleUXh dNInRj" href="https://jira.atlassian.com/browse/JSDSERVER-7120?src=confmacro" title="https://jira.atlassian.com/browse/JSDSERVER-7120?src=confmacro" data-renderer-mark="true">JSDSERVER-7120</a></p></div></td><td rowspan="1" colspan="1" colorname="" data-colwidth="152"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="4880"><span class="status-lozenge-span" title="Waiting for release" data-node-type="status" data-color="blue"><span class="_bfhkaxbu _2rko1nwa _vchhusvi _syaz1u00 _1e0c1o8l _1wyb1skh _k48p1fw0 _vwz4kb7n _p12f1osq _ca0qyh40 _u5f3idpf _n3td1l7b _19bvidpf _1p1dangw _s7n41q9y" style="--_1ly4823:#DEEBFF; --_fer9fa:3px; --_srel9g:#0747A6;"><span class="_1e0c1o8l _s7n4jp4b _1reo15vq _18m915vq _1bto1l2s _o5721q9c _vchhusvi _ca0qidpf _u5f370xm _n3tdidpf _19bv70xm _p12fvyns _1bsb1osq" style="--_1xlms2h:4px; --_1w406pq:200px;">Waiting for release</span></span></span>  </p></div></td></tr><tr><td rowspan="1" colspan="1" colorname="" data-colwidth="419"><p data-renderer-start-pos="4889">빠른 필터의 탭 순서가 잘못되는 문제</p></td><td rowspan="1" colspan="1" colorname="" data-colwidth="189"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="4913"><a class="sc-gleUXh dNInRj" href="https://jira.atlassian.com/browse/JRASERVER-71793?src=confmacro" title="https://jira.atlassian.com/browse/JRASERVER-71793?src=confmacro" data-renderer-mark="true">JRASERVER-71793</a></p></div></td><td rowspan="1" colspan="1" colorname="" data-colwidth="152"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="4932"><span class="status-lozenge-span" title="Closed" data-node-type="status" data-color="green"><span class="_bfhkaxbu _2rko1nwa _vchhusvi _syaz1u00 _1e0c1o8l _1wyb1skh _k48p1fw0 _vwz4kb7n _p12f1osq _ca0qyh40 _u5f3idpf _n3td1l7b _19bvidpf _1p1dangw _s7n41q9y" style="--_1ly4823:#E3FCEF; --_fer9fa:3px; --_srel9g:#006644;"><span class="_1e0c1o8l _s7n4jp4b _1reo15vq _18m915vq _1bto1l2s _o5721q9c _vchhusvi _ca0qidpf _u5f370xm _n3tdidpf _19bv70xm _p12fvyns _1bsb1osq" style="--_1xlms2h:4px; --_1w406pq:200px;">Closed</span></span></span>  </p></div></td></tr><tr><td rowspan="1" colspan="1" colorname="" data-colwidth="419"><p data-renderer-start-pos="4941">완전한 Sprint 버튼이 키보드로 엑세스 할 수 없는 현상</p></td><td rowspan="1" colspan="1" colorname="" data-colwidth="189"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="4978"><a class="sc-gleUXh dNInRj" href="https://jira.atlassian.com/browse/JRASERVER-71792?src=confmacro" title="https://jira.atlassian.com/browse/JRASERVER-71792?src=confmacro" data-renderer-mark="true">JRASERVER-71792</a></p></div></td><td rowspan="1" colspan="1" colorname="" data-colwidth="152"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="4997"><span class="status-lozenge-span" title="Closed" data-node-type="status" data-color="green"><span class="_bfhkaxbu _2rko1nwa _vchhusvi _syaz1u00 _1e0c1o8l _1wyb1skh _k48p1fw0 _vwz4kb7n _p12f1osq _ca0qyh40 _u5f3idpf _n3td1l7b _19bvidpf _1p1dangw _s7n41q9y" style="--_1ly4823:#E3FCEF; --_fer9fa:3px; --_srel9g:#006644;"><span class="_1e0c1o8l _s7n4jp4b _1reo15vq _18m915vq _1bto1l2s _o5721q9c _vchhusvi _ca0qidpf _u5f370xm _n3tdidpf _19bv70xm _p12fvyns _1bsb1osq" style="--_1xlms2h:4px; --_1w406pq:200px;">Closed</span></span></span>  </p></div></td></tr><tr><td rowspan="1" colspan="1" colorname="" data-colwidth="419"><p data-renderer-start-pos="5006">SLA는 비동기 프로세스에 의해 이슈 이벤트가 생성 될 때 계산되지 않는 문제</p></td><td rowspan="1" colspan="1" colorname="" data-colwidth="189"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="5053"><a class="sc-gleUXh dNInRj" href="https://jira.atlassian.com/browse/JSDSERVER-7107?src=confmacro" title="https://jira.atlassian.com/browse/JSDSERVER-7107?src=confmacro" data-renderer-mark="true">JSDSERVER-7107</a></p></div></td><td rowspan="1" colspan="1" colorname="" data-colwidth="152"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="5071"><span class="status-lozenge-span" title="Waiting for release" data-node-type="status" data-color="blue"><span class="_bfhkaxbu _2rko1nwa _vchhusvi _syaz1u00 _1e0c1o8l _1wyb1skh _k48p1fw0 _vwz4kb7n _p12f1osq _ca0qyh40 _u5f3idpf _n3td1l7b _19bvidpf _1p1dangw _s7n41q9y" style="--_1ly4823:#DEEBFF; --_fer9fa:3px; --_srel9g:#0747A6;"><span class="_1e0c1o8l _s7n4jp4b _1reo15vq _18m915vq _1bto1l2s _o5721q9c _vchhusvi _ca0qidpf _u5f370xm _n3tdidpf _19bv70xm _p12fvyns _1bsb1osq" style="--_1xlms2h:4px; --_1w406pq:200px;">Waiting for release</span></span></span>    </p></div></td></tr><tr><td rowspan="1" colspan="1" colorname="" data-colwidth="419"><p data-renderer-start-pos="5082">Custom Field 삭제 시 DC 라이센스가 필요하다고 에러가 발생</p></td><td rowspan="1" colspan="1" colorname="" data-colwidth="189"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="5125"><a class="sc-gleUXh dNInRj" href="https://jira.atlassian.com/browse/JRASERVER-72278?src=confmacro" title="https://jira.atlassian.com/browse/JRASERVER-72278?src=confmacro" data-renderer-mark="true">JRASERVER-72278</a></p></div></td><td rowspan="1" colspan="1" colorname="" data-colwidth="152"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="5144"><span class="status-lozenge-span" title="Closed" data-node-type="status" data-color="green"><span class="_bfhkaxbu _2rko1nwa _vchhusvi _syaz1u00 _1e0c1o8l _1wyb1skh _k48p1fw0 _vwz4kb7n _p12f1osq _ca0qyh40 _u5f3idpf _n3td1l7b _19bvidpf _1p1dangw _s7n41q9y" style="--_1ly4823:#E3FCEF; --_fer9fa:3px; --_srel9g:#006644;"><span class="_1e0c1o8l _s7n4jp4b _1reo15vq _18m915vq _1bto1l2s _o5721q9c _vchhusvi _ca0qidpf _u5f370xm _n3tdidpf _19bv70xm _p12fvyns _1bsb1osq" style="--_1xlms2h:4px; --_1w406pq:200px;">Closed</span></span></span>  </p></div></td></tr></tbody></table>




<p data-renderer-start-pos="5154">&nbsp;</p>

<hr>

## 3. Confluence




### ■ Version 7.11






#### 1. Analytics 기능이 Confluence에 추가 [Data Center]



7.11 DataCenter 버전에 Analytics 기능이 새롭게 추가되었습니다. Analytics가 가지고 있는 핵심기능은 다음과 같습니다.



 **1-1. 전체적인 Insight 확인**




![릴리즈 노트 Confluence](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/Confluence/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20Server-Confluence-1.png)


날짜 및 콘텐츠 유형별로 보고서를 필터링하고 사이트 전체 보기, 인기있는 공간 식별, 공간 또는 페이지에서 가장 활동적인 사용자를 확인하실 수 있습니다.



<p data-renderer-start-pos="5422">&nbsp;</p>

**1-2. 공간 또는 페이지 분석 시 보기 기능 뿐만 아닌 그 이상의 기능 추가**




![릴리즈 노트 Confluence](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/Confluence/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20Server-Confluence-2.png)



<p data-renderer-start-pos="5475">사이트 분석 보고서를 ‘<span id="eea5ad4f-cd67-4bbe-8366-40d124dd82b3" data-renderer-mark="true" data-mark-type="annotation" data-mark-annotation-type="inlineComment" data-id="eea5ad4f-cd67-4bbe-8366-40d124dd82b3" class="inline-highlight">드릴 다운</span>’ 하여 페이지 또는 페이지에  첨부 된 개별 파일에 대한 데이터를 볼 수 있습니다.  또한 콘텐츠 생성, 업데이트, 댓글 작성 등 작업 기록을 추적할 수 있어 기록 변경 및 오래된 콘텐츠 식별 등 콘텐츠의 변화를 면밀히 확인 하실 수 있습니다.</p>



<p data-renderer-start-pos="5422">&nbsp;</p>



**1-3. 개인 정보 보호를 염두에 두고 구축**




![릴리즈 노트 Confluence](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/Confluence/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20Server-Confluence-3.png)



<p data-renderer-start-pos="5663">Confluence를 사용하시다 보면 여러 팀, 회사로 구성되거나 고객과 공동작업을 수행한 경험이 있으실 것입니다. 이에 개인 정보에 대한 침해 역시 발생할 수 있으나 공간 권한 기능을 통해 개인 정보를 침해 하지 않으면서 세분화 된 데이터 분석의 이점을 얻으실 수 있습니다.</p>



<p data-renderer-start-pos="5821">공간 권한 기능을 사용하여 보기 권한이 있는 공간의 데이터만 볼 수있도록 설정하실 수 있으며, 분석 보고서에 대한 엑세스에 대해 특정 그룹, 개별 공간의 특정 사용자로 제한 하고 필요에 따라 모든 사람이 볼 수 있도록 설정할 수 있습니다. </p>



#### 2. Confluence에 Team Calendar 앱 추가 [Data Center]




![릴리즈 노트 Confluence](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/Confluence/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20Server-Confluence-4.png)




Team Calendar 기능이 Confluence Data Center에 번들로 추가되었습니다. 해당 기능을 통해 이벤트, 릴리즈 휴일 등 팀에 영향을 미치는 이벤트를 생성하여 캘린더를 구성하실 수 있습니다.  

또한 Jira,  Opsgenie, Outlook, Google 등 다양한 제품들과 연동이 가능합니다.





#### 3. 트러블 슈팅 개선 [Server] [DataCenter]



**3-1. 트러블 슈팅 시 로그 표시**




![릴리즈 노트 Confluence](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/Confluence/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20Server-Confluence-5.png)



 트러블 슈팅 시 로그 파일을 표시하여 문제 전과 후의 로그를 쉽게 파악하여 트러블 슈팅 이 훨씬 수월해 졌습니다. 해당 로그는 **General Configuration → Logging and Profiling** 에서 확인하실 수 있습니다.





**3-2. 보다 더 명확하게 하기 위한 전용 로그 파일 제공**



<p align="center"><img src="https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/Confluence/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20Server-Confluence-6.png"></p>



<p data-renderer-start-pos="6420" align="center"><strong data-renderer-mark="true"> atlassian-confluence-security.log</strong></p>



<p data-renderer-start-pos="6456">현재 대부분의 로그 항목은 'atlassian-confluence.log’에 작성되어 구체적인 에러 파악을 하기위한 로그 분석이 쉽지 않았습니다. 하지만 일부 항목을 세분화하여 전용 로그 파일이 생성되 문제가 되는 파트의 로그를 바로 확인하여 트러블슈팅 하기 편리해졌습니다. 추가 된 항목은 다음과 같습니다.</p>



<p data-renderer-start-pos="6640">&nbsp;</p>


<ul style="list-style-type: disc;"><p><li>atlassian-confluence-index.log : 검색 색인과 관련된 항목이 담긴 로그</li></p><p><li>Atlassian-confluence-outgoing-mail.log : 발신 메일과 관련된 항목이 담긴 로그</li></p><p><li>atlassian-confluence-security.log : 사용자 및 사용자 디렉토리에 관련된 항목이 담긴 로그.</li></p></ul>








#### 4. Access logging 기본 설정 [Server] [Data Center]



액세스 로그는 사이트에 대한 모든 요청을 기록하여 감사에 필요한 것은 물론 통합, 앱 또는 기능과 관련된 문제를 해결할 때 특히 유용합니다. 



URL 요청뿐만 아니라 액세스 로그에는 사용자 이름, HTTP 상태, 요청 처리에 걸린 시간, 전송된 바이트와 같은 정보가 포함됩니다. 
이 데이터를 자주 사용하는 로그 분석기와 함께 사용하면 지속적으로 느린 요청과 같은 추세를 식별하고 비정상적인 일이 발생할 때 신속하게 대응할 수 있습니다.

액세스 로그는 30일 동안 보관되고 <install-directory>/logs 디렉토리에 있으며 요구 사항에 맞게 구성 할 수 있습니다. 






### ■ Version 7.12



#### 1. 사이트에 대한 데이터 및 인사이트 확보 가능 [Data Center]



 ![릴리즈 노트 Confluence](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/Confluence/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20Server-Confluence-7.png)



 이제 Confluence에서 현재 상태 데이터를 내보낸 다음 Tableau나 PowerBI와 같은 비즈니스 인텔리전스 툴에 데이터를 제공하실 수 있습니다. 이 데이터를 활용해 ‘보고서 생성 및 사용자 활동에 대한 시각화’, ‘팀이 Confluence를 사용하는 방법을  더 쉽게 제공’ , ‘Confluence 최적화’ 등 활용하실 수 있습니다. 데이터 내보내기는 **General Configuration → Data pipeline**에서 내보내기가 가능합니다.





#### 2. Thread Dump 에 진단 정보 추가 [Server] [Data Center]




  ![릴리즈 노트 Confluence](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/Confluence/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20Server-Confluence-8.png)




 Confluence 에서 문제 발생 시 Atlassian Support 에 문의 티켓을 요청하여 문제 진단에 필요한 Thread Dump를 제공 받을 수 있습니다. 이에 Thread 이름에 사용자 이름과 요청 URL 을 포함하여 문제를 식별하여 트러블 슈팅을 더욱 쉽게 해결 하실 수 있습니다.

 

해당 기능은 Default로 설정되어 있으나 기능을 차단하시려면 <strong data-renderer-mark="true">Genreral Configuration → Troubleshooting and support tools → Thread diagnosics</strong> 에서 확인이 가능합니다.








### 해결된 이슈 사항




 <p data-renderer-start-pos="7866">■ Version 7.11</p>






 <div class="pm-table-wrapper"><table data-number-column="false"><colgroup><col style="width: 418px;"><col style="width: 211px;"><col style="width: 128px;"></colgroup><tbody><tr><th rowspan="1" colspan="1" colorname="" class="ak-renderer-tableHeader-sortable-column" data-colwidth="419"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="7885"><strong data-renderer-mark="true">Summary</strong></p></div><figure class="ak-renderer-tableHeader-sorting-icon "><div role="presentation"><figure class="sc-erNlkL ggzRUZ"><div class="sorting-icon-svg__asc table-sorting-icon-active sc-FQuPU eaHKqG"></div></figure></div></figure></th><th rowspan="1" colspan="1" colorname="" class="ak-renderer-tableHeader-sortable-column" data-colwidth="212"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="7896"><strong data-renderer-mark="true">Key</strong></p></div><figure class="ak-renderer-tableHeader-sorting-icon ak-renderer-tableHeader-sorting-icon__no-order"><div role="presentation"><figure class="sc-erNlkL ggzRUZ"><div class="sorting-icon-svg__no_order table-sorting-icon-inactive sc-FQuPU eaHKqG"></div></figure></div></figure></th><th rowspan="1" colspan="1" colorname="" class="ak-renderer-tableHeader-sortable-column" data-colwidth="129"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="7903"><strong data-renderer-mark="true">Status</strong></p></div><figure class="ak-renderer-tableHeader-sorting-icon ak-renderer-tableHeader-sorting-icon__no-order"><div role="presentation"><figure class="sc-erNlkL ggzRUZ"><div class="sorting-icon-svg__no_order table-sorting-icon-inactive sc-FQuPU eaHKqG"></div></figure></div></figure></th></tr><tr><td rowspan="1" colspan="1" colorname="" data-colwidth="419"><p data-renderer-start-pos="8242">Confluence View File 매크로가 익명 사용자에게로드되지 않음</p></td><td rowspan="1" colspan="1" colorname="" data-colwidth="212"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="8287"><a class="sc-gleUXh dNInRj" href="https://jira.atlassian.com/browse/CONFSERVER-60857?src=confmacro" title="https://jira.atlassian.com/browse/CONFSERVER-60857?src=confmacro" data-renderer-mark="true">CONFSERVER-60857</a></p></div></td><td rowspan="1" colspan="1" colorname="" data-colwidth="129"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="8307"><span class="status-lozenge-span" title="Closed" data-node-type="status" data-color="green"><span class="_bfhkaxbu _2rko1nwa _vchhusvi _syaz1u00 _1e0c1o8l _1wyb1skh _k48p1fw0 _vwz4kb7n _p12f1osq _ca0qyh40 _u5f3idpf _n3td1l7b _19bvidpf _1p1dangw _s7n41q9y" style="--_1ly4823:#E3FCEF; --_fer9fa:3px; --_srel9g:#006644;"><span class="_1e0c1o8l _s7n4jp4b _1reo15vq _18m915vq _1bto1l2s _o5721q9c _vchhusvi _ca0qidpf _u5f370xm _n3tdidpf _19bv70xm _p12fvyns _1bsb1osq" style="--_1xlms2h:4px; --_1w406pq:200px;">Closed</span></span></span>  </p></div></td></tr><tr><td rowspan="1" colspan="1" colorname="" data-colwidth="419"><p data-renderer-start-pos="8481">Custom Field Context가 특정 문제 유형으로 제한된 경우 TC 이벤트를 생성 할 때 Jira의 Custom Date Field가 나타나지 않은 현상.</p></td><td rowspan="1" colspan="1" colorname="" data-colwidth="212"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="8576"><a class="sc-gleUXh dNInRj" href="https://jira.atlassian.com/browse/CONFSERVER-58368?src=confmacro" title="https://jira.atlassian.com/browse/CONFSERVER-58368?src=confmacro" data-renderer-mark="true"><u data-renderer-mark="true">CONFSERVER-58368</u></a></p></div></td><td rowspan="1" colspan="1" colorname="" data-colwidth="129"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="8596"><span class="status-lozenge-span" title="Closed" data-node-type="status" data-color="green"><span class="_bfhkaxbu _2rko1nwa _vchhusvi _syaz1u00 _1e0c1o8l _1wyb1skh _k48p1fw0 _vwz4kb7n _p12f1osq _ca0qyh40 _u5f3idpf _n3td1l7b _19bvidpf _1p1dangw _s7n41q9y" style="--_1ly4823:#E3FCEF; --_fer9fa:3px; --_srel9g:#006644;"><span class="_1e0c1o8l _s7n4jp4b _1reo15vq _18m915vq _1bto1l2s _o5721q9c _vchhusvi _ca0qidpf _u5f370xm _n3tdidpf _19bv70xm _p12fvyns _1bsb1osq" style="--_1xlms2h:4px; --_1w406pq:200px;">Closed</span></span></span>  </p></div></td></tr><tr><td rowspan="1" colspan="1" colorname="" data-colwidth="419"><p data-renderer-start-pos="7986">Office 매크로가 블로그 포스트에서 Word 또는 엑셀 문서를 로드 하지 못하는 현상</p></td><td rowspan="1" colspan="1" colorname="" data-colwidth="212"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="8039"><a class="sc-gleUXh dNInRj" href="https://jira.atlassian.com/browse/CONFSERVER-61076?src=confmacro" title="https://jira.atlassian.com/browse/CONFSERVER-61076?src=confmacro" data-renderer-mark="true"><u data-renderer-mark="true">CONFSERVER-61076</u></a></p></div></td><td rowspan="1" colspan="1" colorname="" data-colwidth="129"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="8059"><span class="status-lozenge-span" title="Closed" data-node-type="status" data-color="green"><span class="_bfhkaxbu _2rko1nwa _vchhusvi _syaz1u00 _1e0c1o8l _1wyb1skh _k48p1fw0 _vwz4kb7n _p12f1osq _ca0qyh40 _u5f3idpf _n3td1l7b _19bvidpf _1p1dangw _s7n41q9y" style="--_1ly4823:#E3FCEF; --_fer9fa:3px; --_srel9g:#006644;"><span class="_1e0c1o8l _s7n4jp4b _1reo15vq _18m915vq _1bto1l2s _o5721q9c _vchhusvi _ca0qidpf _u5f370xm _n3tdidpf _19bv70xm _p12fvyns _1bsb1osq" style="--_1xlms2h:4px; --_1w406pq:200px;">Closed</span></span></span>  </p></div></td></tr><tr><td rowspan="1" colspan="1" colorname="" data-colwidth="419"><p data-renderer-start-pos="8382">Team Calendar가 6.1.4 버전이 설치된 경우 Jira Issue 매크로와 Jira 차트를 넣지 못하는 현상</p></td><td rowspan="1" colspan="1" colorname="" data-colwidth="212"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="8452"><a class="sc-gleUXh dNInRj" href="https://jira.atlassian.com/browse/CONFSERVER-60501?src=confmacro" title="https://jira.atlassian.com/browse/CONFSERVER-60501?src=confmacro" data-renderer-mark="true">CONFSERVER-60501</a></p></div></td><td rowspan="1" colspan="1" colorname="" data-colwidth="129"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="8472"><span class="status-lozenge-span" title="Closed" data-node-type="status" data-color="green"><span class="_bfhkaxbu _2rko1nwa _vchhusvi _syaz1u00 _1e0c1o8l _1wyb1skh _k48p1fw0 _vwz4kb7n _p12f1osq _ca0qyh40 _u5f3idpf _n3td1l7b _19bvidpf _1p1dangw _s7n41q9y" style="--_1ly4823:#E3FCEF; --_fer9fa:3px; --_srel9g:#006644;"><span class="_1e0c1o8l _s7n4jp4b _1reo15vq _18m915vq _1bto1l2s _o5721q9c _vchhusvi _ca0qidpf _u5f370xm _n3tdidpf _19bv70xm _p12fvyns _1bsb1osq" style="--_1xlms2h:4px; --_1w406pq:200px;">Closed</span></span></span>  </p></div></td></tr><tr><td rowspan="1" colspan="1" colorname="" data-colwidth="419"><p data-renderer-start-pos="8316">이벤트를 생성 또는 편집 하는 동안 날짜 분석이 안되는 현상</p></td><td rowspan="1" colspan="1" colorname="" data-colwidth="212"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="8353"><a class="sc-gleUXh dNInRj" href="https://jira.atlassian.com/browse/CONFSERVER-54550?src=confmacro" title="https://jira.atlassian.com/browse/CONFSERVER-54550?src=confmacro" data-renderer-mark="true"><u data-renderer-mark="true">CONFSERVER-54550</u></a></p></div></td><td rowspan="1" colspan="1" colorname="" data-colwidth="129"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="8373"><span class="status-lozenge-span" title="Closed" data-node-type="status" data-color="green"><span class="_bfhkaxbu _2rko1nwa _vchhusvi _syaz1u00 _1e0c1o8l _1wyb1skh _k48p1fw0 _vwz4kb7n _p12f1osq _ca0qyh40 _u5f3idpf _n3td1l7b _19bvidpf _1p1dangw _s7n41q9y" style="--_1ly4823:#E3FCEF; --_fer9fa:3px; --_srel9g:#006644;"><span class="_1e0c1o8l _s7n4jp4b _1reo15vq _18m915vq _1bto1l2s _o5721q9c _vchhusvi _ca0qidpf _u5f370xm _n3tdidpf _19bv70xm _p12fvyns _1bsb1osq" style="--_1xlms2h:4px; --_1w406pq:200px;">Closed</span></span></span>  </p></div></td></tr><tr><td rowspan="1" colspan="1" colorname="" data-colwidth="419"><p data-renderer-start-pos="7915">일부 테이블 헤더가 중첩된 테이블과 함께 페이지가 스크롤되지 않은 현상</p></td><td rowspan="1" colspan="1" colorname="" data-colwidth="212"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="7958"><a class="sc-gleUXh dNInRj" href="https://jira.atlassian.com/browse/CONFSERVER-61517?src=confmacro" title="https://jira.atlassian.com/browse/CONFSERVER-61517?src=confmacro" data-renderer-mark="true"><u data-renderer-mark="true">CONFSERVER-61517</u></a></p></div></td><td rowspan="1" colspan="1" colorname="" data-colwidth="129"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="7978"><span class="status-lozenge-span" title="Closed" data-node-type="status" data-color="green"><span class="_bfhkaxbu _2rko1nwa _vchhusvi _syaz1u00 _1e0c1o8l _1wyb1skh _k48p1fw0 _vwz4kb7n _p12f1osq _ca0qyh40 _u5f3idpf _n3td1l7b _19bvidpf _1p1dangw _s7n41q9y" style="--_1ly4823:#E3FCEF; --_fer9fa:3px; --_srel9g:#006644;"><span class="_1e0c1o8l _s7n4jp4b _1reo15vq _18m915vq _1bto1l2s _o5721q9c _vchhusvi _ca0qidpf _u5f370xm _n3tdidpf _19bv70xm _p12fvyns _1bsb1osq" style="--_1xlms2h:4px; --_1w406pq:200px;">Closed</span></span></span> </p></div></td></tr><tr><td rowspan="1" colspan="1" colorname="" data-colwidth="419"><p data-renderer-start-pos="8068">중간 페이지 버전을 삭제 시 페이지 기록 버전의 순서가 변경되거나 이름이 변경되지 않은 현상</p></td><td rowspan="1" colspan="1" colorname="" data-colwidth="212"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="8123"><a class="sc-gleUXh dNInRj" href="https://jira.atlassian.com/browse/CONFSERVER-61228?src=confmacro" title="https://jira.atlassian.com/browse/CONFSERVER-61228?src=confmacro" data-renderer-mark="true">CONFSERVER-61228</a></p></div></td><td rowspan="1" colspan="1" colorname="" data-colwidth="129"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="8143"><span class="status-lozenge-span" title="Closed" data-node-type="status" data-color="green"><span class="_bfhkaxbu _2rko1nwa _vchhusvi _syaz1u00 _1e0c1o8l _1wyb1skh _k48p1fw0 _vwz4kb7n _p12f1osq _ca0qyh40 _u5f3idpf _n3td1l7b _19bvidpf _1p1dangw _s7n41q9y" style="--_1ly4823:#E3FCEF; --_fer9fa:3px; --_srel9g:#006644;"><span class="_1e0c1o8l _s7n4jp4b _1reo15vq _18m915vq _1bto1l2s _o5721q9c _vchhusvi _ca0qidpf _u5f370xm _n3tdidpf _19bv70xm _p12fvyns _1bsb1osq" style="--_1xlms2h:4px; --_1w406pq:200px;">Closed</span></span></span>  </p></div></td></tr><tr><td rowspan="1" colspan="1" colorname="" data-colwidth="419"><p data-renderer-start-pos="8152">첨부파일을 다른 페이지에 있는 경우 Confluence View File 매크로가 로드하지 못하는 현상</p></td><td rowspan="1" colspan="1" colorname="" data-colwidth="212"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="8213"><a class="sc-gleUXh dNInRj" href="https://jira.atlassian.com/browse/CONFSERVER-60876?src=confmacro" title="https://jira.atlassian.com/browse/CONFSERVER-60876?src=confmacro" data-renderer-mark="true">CONFSERVER-60876</a></p></div></td><td rowspan="1" colspan="1" colorname="" data-colwidth="129"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="8233"><span class="status-lozenge-span" title="Closed" data-node-type="status" data-color="green"><span class="_bfhkaxbu _2rko1nwa _vchhusvi _syaz1u00 _1e0c1o8l _1wyb1skh _k48p1fw0 _vwz4kb7n _p12f1osq _ca0qyh40 _u5f3idpf _n3td1l7b _19bvidpf _1p1dangw _s7n41q9y" style="--_1ly4823:#E3FCEF; --_fer9fa:3px; --_srel9g:#006644;"><span class="_1e0c1o8l _s7n4jp4b _1reo15vq _18m915vq _1bto1l2s _o5721q9c _vchhusvi _ca0qidpf _u5f370xm _n3tdidpf _19bv70xm _p12fvyns _1bsb1osq" style="--_1xlms2h:4px; --_1w406pq:200px;">Closed</span></span></span>  </p></div></td></tr></tbody></table></div>




 <p data-renderer-start-pos="8604">■ Version 7.12</p>



 <div class="pm-table-wrapper"><table data-number-column="false"><colgroup><col style="width: 418px;"><col style="width: 212px;"><col style="width: 127px;"></colgroup><tbody><tr><th rowspan="1" colspan="1" colorname="" class="ak-renderer-tableHeader-sortable-column" data-colwidth="419"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="8623"><strong data-renderer-mark="true">Summary</strong></p></div><figure class="ak-renderer-tableHeader-sorting-icon ak-renderer-tableHeader-sorting-icon__no-order"><div role="presentation"><figure class="sc-erNlkL ggzRUZ"><div class="sorting-icon-svg__no_order table-sorting-icon-inactive sc-FQuPU eaHKqG"></div></figure></div></figure></th><th rowspan="1" colspan="1" colorname="" class="ak-renderer-tableHeader-sortable-column" data-colwidth="213"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="8634"><strong data-renderer-mark="true">Key</strong></p></div><figure class="ak-renderer-tableHeader-sorting-icon ak-renderer-tableHeader-sorting-icon__no-order"><div role="presentation"><figure class="sc-erNlkL ggzRUZ"><div class="sorting-icon-svg__no_order table-sorting-icon-inactive sc-FQuPU eaHKqG"></div></figure></div></figure></th><th rowspan="1" colspan="1" colorname="" class="ak-renderer-tableHeader-sortable-column" data-colwidth="128"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="8641"><strong data-renderer-mark="true">Status</strong></p></div><figure class="ak-renderer-tableHeader-sorting-icon ak-renderer-tableHeader-sorting-icon__no-order"><div role="presentation"><figure class="sc-erNlkL ggzRUZ"><div class="sorting-icon-svg__no_order table-sorting-icon-inactive sc-FQuPU eaHKqG"></div></figure></div></figure></th></tr><tr><td rowspan="1" colspan="1" colorname="" data-colwidth="419"><p data-renderer-start-pos="8653">프로필 사진 매크로의  '사용자 프로필보기'버튼이 손상되는 문제</p></td><td rowspan="1" colspan="1" colorname="" data-colwidth="213"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="8692"><a class="sc-gleUXh dNInRj" href="https://jira.atlassian.com/browse/CONFSERVER-60828?src=confmacro" title="https://jira.atlassian.com/browse/CONFSERVER-60828?src=confmacro" data-renderer-mark="true">CONFSERVER-60828</a></p></div></td><td rowspan="1" colspan="1" colorname="" data-colwidth="128"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="8712"><span class="status-lozenge-span" title="Closed" data-node-type="status" data-color="green"><span class="_bfhkaxbu _2rko1nwa _vchhusvi _syaz1u00 _1e0c1o8l _1wyb1skh _k48p1fw0 _vwz4kb7n _p12f1osq _ca0qyh40 _u5f3idpf _n3td1l7b _19bvidpf _1p1dangw _s7n41q9y" style="--_1ly4823:#E3FCEF; --_fer9fa:3px; --_srel9g:#006644;"><span class="_1e0c1o8l _s7n4jp4b _1reo15vq _18m915vq _1bto1l2s _o5721q9c _vchhusvi _ca0qidpf _u5f370xm _n3tdidpf _19bv70xm _p12fvyns _1bsb1osq" style="--_1xlms2h:4px; --_1w406pq:200px;">Closed</span></span></span> </p></div></td></tr><tr><td rowspan="1" colspan="1" colorname="" data-colwidth="419"><p data-renderer-start-pos="8720">Jira issue 생성 시 Java Script Syntax Error 발생</p><p data-renderer-start-pos="8765"><span class="code" data-renderer-mark="true">`Syntax error, unrecognized expression: option[value=’-1'`</span></p></td><td rowspan="1" colspan="1" colorname="" data-colwidth="213"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="8827"><a class="sc-gleUXh dNInRj" href="https://jira.atlassian.com/browse/CONFSERVER-59691?src=confmacro" title="https://jira.atlassian.com/browse/CONFSERVER-59691?src=confmacro" data-renderer-mark="true">CONFSERVER-59691</a></p></div></td><td rowspan="1" colspan="1" colorname="" data-colwidth="128"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="8847"><span class="status-lozenge-span" title="Closed" data-node-type="status" data-color="green"><span class="_bfhkaxbu _2rko1nwa _vchhusvi _syaz1u00 _1e0c1o8l _1wyb1skh _k48p1fw0 _vwz4kb7n _p12f1osq _ca0qyh40 _u5f3idpf _n3td1l7b _19bvidpf _1p1dangw _s7n41q9y" style="--_1ly4823:#E3FCEF; --_fer9fa:3px; --_srel9g:#006644;"><span class="_1e0c1o8l _s7n4jp4b _1reo15vq _18m915vq _1bto1l2s _o5721q9c _vchhusvi _ca0qidpf _u5f370xm _n3tdidpf _19bv70xm _p12fvyns _1bsb1osq" style="--_1xlms2h:4px; --_1w406pq:200px;">Closed</span></span></span>  </p></div></td></tr><tr><td rowspan="1" colspan="1" colorname="" data-colwidth="419"><p data-renderer-start-pos="8856">언어가 영어 (미국)로 설정된 경우 팀 캘린더에 잘못된 주 번호가 표시됨</p></td><td rowspan="1" colspan="1" colorname="" data-colwidth="213"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="8900"><a class="sc-gleUXh dNInRj" href="https://jira.atlassian.com/browse/CONFSERVER-55419?src=confmacro" title="https://jira.atlassian.com/browse/CONFSERVER-55419?src=confmacro" data-renderer-mark="true"><u data-renderer-mark="true">CONFSERVER-55419</u></a></p></div></td><td rowspan="1" colspan="1" colorname="" data-colwidth="128"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="8920"><span class="status-lozenge-span" title="Closed" data-node-type="status" data-color="green"><span class="_bfhkaxbu _2rko1nwa _vchhusvi _syaz1u00 _1e0c1o8l _1wyb1skh _k48p1fw0 _vwz4kb7n _p12f1osq _ca0qyh40 _u5f3idpf _n3td1l7b _19bvidpf _1p1dangw _s7n41q9y" style="--_1ly4823:#E3FCEF; --_fer9fa:3px; --_srel9g:#006644;"><span class="_1e0c1o8l _s7n4jp4b _1reo15vq _18m915vq _1bto1l2s _o5721q9c _vchhusvi _ca0qidpf _u5f370xm _n3tdidpf _19bv70xm _p12fvyns _1bsb1osq" style="--_1xlms2h:4px; --_1w406pq:200px;">Closed</span></span></span>  </p></div></td></tr><tr><td rowspan="1" colspan="1" colorname="" data-colwidth="419"><p data-renderer-start-pos="8929">Confluence 7.11.0의 Interval을 기반으로 사용자 디렉터리 동기화가 트리거되지 않는 현상</p></td><td rowspan="1" colspan="1" colorname="" data-colwidth="213"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="8992"><a class="sc-gleUXh dNInRj" href="https://jira.atlassian.com/browse/CONFSERVER-61194?src=confmacro" title="https://jira.atlassian.com/browse/CONFSERVER-61194?src=confmacro" data-renderer-mark="true"><u data-renderer-mark="true">CONFSERVER-61194</u></a></p></div></td><td rowspan="1" colspan="1" colorname="" data-colwidth="128"><div class="fabric-editor-block-mark sc-dBaXSw cNSLOA" data-align="center"><p data-renderer-start-pos="9012"><span class="status-lozenge-span" title="Closed" data-node-type="status" data-color="green"><span class="_bfhkaxbu _2rko1nwa _vchhusvi _syaz1u00 _1e0c1o8l _1wyb1skh _k48p1fw0 _vwz4kb7n _p12f1osq _ca0qyh40 _u5f3idpf _n3td1l7b _19bvidpf _1p1dangw _s7n41q9y" style="--_1ly4823:#E3FCEF; --_fer9fa:3px; --_srel9g:#006644;"><span class="_1e0c1o8l _s7n4jp4b _1reo15vq _18m915vq _1bto1l2s _o5721q9c _vchhusvi _ca0qidpf _u5f370xm _n3tdidpf _19bv70xm _p12fvyns _1bsb1osq" style="--_1xlms2h:4px; --_1w406pq:200px;">Closed</span></span></span>  </p></div></td></tr></tbody></table></div>



 <hr>


Atlassian은 더 나은 제품을 제공하기 위하여 계속해서 투자하고 개발하고 있습니다.

Atlassian 제품에 대한 궁금증이 있으실 경우 언제든지 Platinum Solution Partner인 디무브에게 문의해주세요!

감사합니다. 😃



