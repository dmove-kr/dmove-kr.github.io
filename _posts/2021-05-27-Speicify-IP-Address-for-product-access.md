---
layout: post
title: Atlassian Cloud - 제품 액세스를 위한 IP 주소 허용 및 지정
subtitle: Specify IP addresses for product access
date: 2021-05-27
categories: [Atlassian Solutions]
tags: [Product Access, Atlassian, Jira, Confluence, IP, Atlassian Cloud, Whitelist, 아틀라시안, 아틀라시안클라우드, 지라, 컨플루언스]
---

<img style="max-width:100%; max-height: 400px;" src="https://wac-cdn.atlassian.com/dam/jcr:9a041894-cd35-49b4-8998-7b3b7e582236/Jira@2x.png?cdnVersion=1629">

<p> 안녕하세요, 디무브 입니다! :balloon: </p>  


<p><p data-renderer-start-pos="21">이번에는 기술적인 내용을 가지고 왔습니다.  바로<strong> 제품 액세스를 위한
 IP 주소 허용 및 지정</strong> 방법인데요!
<p data-renderer-start-pos="84"><strong>IP 주소 허용 기능</strong>은 현재  Jira와  Confluence Cloud의 Premium 플랜에서 사용하실 수 있습니다. </p>






<h2 id="IP-주소-허용이란?" data-renderer-start-pos="151">IP 주소 허용이란?</h2>

<p data-renderer-start-pos="164">&nbsp;</p>

<p data-renderer-start-pos="166">IP 허용 목록은 통해 사용자가 Jira Software, Jira Service Management, Confluence 용 콘텐츠에 액세스 할 때 허용할 수 있는 IP를 지정하여 <Strong>특정 IP만 접근이 가능하도록 허용</Strong> 하는 것입니다.</p>

<p data-renderer-start-pos="303">Jira Software Premium에 대한 허용 목록을 설정하면 동일한 사이트의 Jira Service Management에 대한 고객 및 에이전트 포털에도 적용 되며, 이는 Confluence에도 동일하게 적용됩니다.</p>

<p data-renderer-start-pos="431">현재 IP 허용목록은 다음과 같은 페이지에 적용됩니다.</p>

<>
<ul style="list-style-type:disc;">
<li><p data-renderer-start-pos="497">   Jira tasks, issues, projects</p></li>
<li><p data-renderer-start-pos="497">   Conlfuence Pages and Spaces</p></li>
<li><p data-renderer-start-pos="528">   Jira Administration</p></li>
<li><p data-renderer-start-pos="551">   Confluence administration</p></li>
</ul>
</p>

<p data-renderer-start-pos="580">&nbsp;</p>


<p data-renderer-start-pos="582">만약 사용자가 허용 목록의 IP 주소에서 페이지에 액세스 하지 않거나 못하는 경우 그 이유를 설명하는 메세지가 표시될 것입니다.</p>

<p data-renderer-start-pos="655">&nbsp;</p>

<p data-renderer-start-pos="657">클라우드 솔루션 관리자 또는 담당자는 허용 목록당 100개의 IP 주소 또는 네트워크 블록을 설정 할 수 있습니다. IPv4 및 CIDR  블록이 지원 되며, 네트워크 블록을 입력 하는 경우 CIDR 표기법 표준을 지원합니다. </p>

<p data-renderer-start-pos="786">&nbsp;</p>

<p style="text-align:center;" data-renderer-start-pos="788">“<a class="sc-jTNJqp kpOsFP" href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation" title="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation" data-renderer-mark="true">여기</a>“를 클릭하여 CIDR 표기법에 대한 자세한 내용을 확인하실 수 있습니다.</p>

<p data-renderer-start-pos="866">&nbsp;</p>


<p data-renderer-start-pos="834">추가 할 수 있는 값의 몇 가지 예는 다음과 같습니다.</p>


<table data-number-column="false"><colgroup><col style="width: 289px;"><col style="width: 289px;"></colgroup><tbody><tr><th rowspan="1" colspan="1" colorname="" class="ak-renderer-tableHeader-sortable-column" data-colwidth="340"><div class="fabric-editor-block-mark sc-MKjYC jMeqlo" data-align="center"><p data-renderer-start-pos="871"><strong data-renderer-mark="true">Type</strong></p></div><figure class="ak-renderer-tableHeader-sorting-icon ak-renderer-tableHeader-sorting-icon__no-order"><div role="presentation"><figure class="sc-erOsFi jZCgBu"><div class="sorting-icon-svg__no_order table-sorting-icon-inactive sc-eGXxtx cVhpMr"></div></figure></div></figure></th><th rowspan="1" colspan="1" colorname="" class="ak-renderer-tableHeader-sortable-column" data-colwidth="340"><div class="fabric-editor-block-mark sc-MKjYC jMeqlo" data-align="center"><p data-renderer-start-pos="879"><strong data-renderer-mark="true">Example</strong></p></div><figure class="ak-renderer-tableHeader-sorting-icon ak-renderer-tableHeader-sorting-icon__no-order"><div role="presentation"><figure class="sc-erOsFi jZCgBu"><div class="sorting-icon-svg__no_order table-sorting-icon-inactive sc-eGXxtx cVhpMr"></div></figure></div></figure></th></tr><tr><td rowspan="1" colspan="1" colorname="" data-colwidth="340"><div class="fabric-editor-block-mark sc-MKjYC jMeqlo" data-align="center"><p data-renderer-start-pos="892">IPv4</p></div></td><td rowspan="1" colspan="1" colorname="" data-colwidth="340"><div class="fabric-editor-block-mark sc-MKjYC jMeqlo" data-align="center"><p data-renderer-start-pos="900">104.192.143.1</p></div></td></tr><tr><td rowspan="1" colspan="1" colorname="" data-colwidth="340"><div class="fabric-editor-block-mark sc-MKjYC jMeqlo" data-align="center"><p data-renderer-start-pos="919">CIDR </p></div></td><td rowspan="1" colspan="1" colorname="" data-colwidth="340"><div class="fabric-editor-block-mark sc-MKjYC jMeqlo" data-align="center"><p data-renderer-start-pos="928">104.192.143.0/28<br>104.192.143.16/29<br>104.192.143.24/32<br>2401 : 1d80 : 1010 :: / 64<br>2401 : 1d80 : 1010 :: 150/128&nbsp;</p></div></td></tr></tbody></table>





<h2 id="Set-up">Set up</h2>

<h3 id="IP-허용-목록-서비스-찾기" data-renderer-start-pos="1055">IP 허용 목록 서비스 찾기</h3>

<img src="/assets/images/banners/Specify-IP-access/ip_allow_list_find.png">


<p data-renderer-start-pos="1075">&nbsp;</p>

<ul class="ak-ul" data-indent-level="1"><li><p data-renderer-start-pos="1079"><a class="sc-jTNJqp kpOsFP" href="http://admin.atlassian.com" title="http://admin.atlassian.com" data-renderer-mark="true">admin.atlassian.com</a> 에 들어가 로그인 후 설정하시려는 사이트에 들어가 보안 → IP 허용 목록을 선택합니다.</p></li></ul>

<h3 id="IP-허용-목록-추가" data-renderer-start-pos="1156">IP 허용 목록 추가</h3>

<img src="/assets/images/banners/Specify-IP-access/ip_allow_list_1.png">

<p data-renderer-start-pos="1174">  1. IP 허용 목록에서 허용 목록 만들기 (Create allowlist)를 클릭</p>

<img src="/assets/images/banners/Specify-IP-access/ip_allow_list_2.png">

<p data-renderer-start-pos="1227">&nbsp;</p>

<p data-renderer-start-pos="1229">  2. 만들기 양식에 <strong>이름, 허용하려는 제품, 허용하려는 IP 주소(단일 또는 다수),사용 설정</strong>을 작성 후 만들기 버튼 클릭을 하시면 허용 목록이 나옵니다.</p>

---


아틀라시안 클라우드 프리미엄대해 더 궁금하신 점이 있으시면 언제든지 디무브에게 문의주세요.

감사합니다. :smiley:

