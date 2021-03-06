---
layout: post
title: 2021 Atlassian 주요 제품 릴리즈 노트 (Jan ~ Apr) - Cloud
subtitle: Release Note
date: 2021-05-06 16:48:00
author : jackson
image : assets/images/banners/Release%20Note%20Server/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20Server-1.png
categories: [Release Note]
tags: [Jira,Conlfuence,Jira Service Management,Releases, Release Notes,Cloud, Atlassian, 아틀라시안, 아틀라시안클라우드]
---


<!-- ![릴리즈 노트 이미지](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20Server-1.png) -->

안녕하세요, 디무브 입니다! 🎈



지난 1분기 동안 아틀라시안의 주요제품인 Jira Software, Jira Service Management 및 Confluence에도 크고 작은 변화가 있었는데요. 
각 제품의 Cloud 버전에는 어떠한 변화가 있었는지 확인해보는 시간을 가지겠습니다.

<hr>


## 1. Jira Software





### 1월




#### 1. 로드맵(Roadmap)



![Jira Cloud](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Cloud/Jira/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%EB%85%B8%ED%8A%B8%20Cloud-Jira-1.png)



<strong>1-1. 새롭게 생성된 이슈에 담당자와 레이블 필터에 매칭   </strong>



 로드맵에서 생성된 새로운 이슈가 자동으로 할당되고 레이블이 지정되며, 마지막으로 선택한 담당자 및 현재 로드맵의 레이블 필터와 매칭됩니다. → [자세히보기](https://support.atlassian.com/jira-software-cloud/docs/customize-your-view-on-the-roadmap/)



**1-2. 가장 좌측 열을 사용하여 에픽 순서 변경**


색상화된 에픽 바를 수평으로 드래그 하여 시작일 및 마감일을 업데이트 할 수 있습니다.





#### 2. 향상된 릴리즈 노트(Release Notes) 기능 



![Jira Cloud](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Cloud/Jira/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%EB%85%B8%ED%8A%B8%20Cloud-Jira-2.png)

 릴리즈 → 버전 → 릴리즈 노트로 이동하여 향상된 기능을 릴리즈 노트 기능에 확인하실 수 있습니다. 업데이트된 릴리즈 노트 페이지는 다음과 같습니다.



■ Markdown format으로 릴리즈 노트 생성

■ 레이아웃 및 이슈 유형에 따라 릴리즈 노트 재생성

■ 편집기에서 릴리즈 노트 포맷 및 업데이트

■ 릴리즈 노트를 클립보드에 복사







#### 3. Media Picker를 시스템의 파일 업로드로 변경 (JSM 및 Confluence 동일 적용)   




![Jira Cloud](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Cloud/Jira/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%EB%85%B8%ED%8A%B8%20Cloud-Jira-3.png)

<p data-renderer-start-pos="670">&nbsp;</p>

파일 및 이미지(Files and Images)를 업로드 하기 위한 미디어 선택 기능이 제품에 내장된 파일 업로드 기능으로 개선되었습니다. Dropbox나 Google Drive와 같은 파일 서비스와도 연결할 수 있으며, 페이지 또는 이슈에 링크를 붙여넣으면 항상 최신 버전을 사용할 수 있는 Smart Link를 생성할 수 있습니다. 






#### 4. 배포 날짜 범위 지정 필터  




Deployments View로 이동하여 Calendar 아이콘을 클릭하여 배포가 가능한 상태로 변경이 가능하며, 날짜 범위의 필터를 사용하여 배포가 가능한 날짜의 범위를 지정하실 수 있습니다.




<hr>



<h3 id="2월" data-renderer-start-pos="1023">2월</h3>


<p data-renderer-start-pos="1027">&nbsp;</p>

#### 1. 로드맵(RoadMap)



**1-1. Planned Capacity**

새로운 Planned Capacity(역량 계획)도구를 사용하여 스프린트를 계획하고 작업을 보다 효율적으로 할당할 수 있습니다. 이 기능을 사용하면 팀이 반복하여 완료할 수 있는 평균 작업량을 설정하여 작업의 균형을 맞추고 과도한 업무량이 할당 되는 것을 방지할 수 있습니다.   → [자세히 보기](https://confluence.atlassian.com/advancedroadmapscloud/capacity-and-velocity-998651192.html) 



**1-2. Story-level 이슈 드래그 앤 드롭 기능**

이슈의 드래그 앤 드롭 기능을 활용해 현재 에픽에서 이슈의 순위를 조정하거나 새로운 에픽으로 이동하실 수 있습니다. 




#### 2. Jira 사이트 가져오기에 대한 익명 액세스 검사 기능 



 마이그레이션 후 프로젝트, 대시보드, 필터가 익명 액세스에 취약한 경우를 체크합니다. 익명의 액세스는 데이터를 사람들이 사용할 수 있고 온라인으로 검색할 수 있기 때문에 마이그레이션 전에 공용 액세스 권한 부여 여부를 선택할 수 있습니다.  영향을 받는 프로젝트, 대시보드, 필터를 검사하기 위해 CSV 형식의 파일을 다운로드 하실 수 있습니다.





#### 3. Portal Group & Request 유형 관리 및 편집 속도 향상  



 Request 유형 페이지 에서 직접 Request 유형을 Portal Group에 추가하고 Request 유형이 어떤 Portal Group 및 이슈 유형에 있는 지 추가 열을 통해 한 눈에 보실 수 있습니다. 또한 Request 유형 페이지에 새 필터를 추가하여 키워드, 이슈 유형 또는 Portal Group 별로 Request 유형을 필터링 할 수 있습니다.





#### 4. Third-Party 레포지토리 및 마켓플레이스 앱 통합 지원 



코드 레포지토리를 Jira 프로젝트와 연결한 후  다음을 참조하여 Jira 내 코드 특징을 자세히 확인할 수 있습니다.

■ 코드 페이지에서 Third-Party provider의 레포지토리를 참조

■ 코드 설정을 통해 타사 앱 통합을 관리합니다.

■ 연결 흐름을 구성하려면, 프로젝트의 코드 페이지에서 추가 옵션 (•••)을 선택하여 확인할 수 있습니다.




#### 5. 이슈 보기 : 에픽 상태 필드 추가 

에픽 상태 커스텀 필드가  새로운 이슈 보기에 추가 되었습니다. Jira 관리자에게 요청하여 성공 상태 필드를 추가하여 해당 화면을 사용하는 모든 이슈에 표시됩니다.  → [자세히보기](https://support.atlassian.com/jira-cloud-administration/docs/add-a-custom-field-to-a-screen/)

<hr>



<h3 id="3월" data-renderer-start-pos="2262">3월</h3>




#### 1. 로드맵(RoadMap) : 기본적으로 에픽 bar 제거



<p data-renderer-start-pos="2299">로드맵을 정확하게 작성하기 위해 에픽 작성과 일정을 두 파트로 나누었습니다. → <a class="sc-gleUXh dNInRj" href="https://support.atlassian.com/jira-software-cloud/docs/create-epics-on-the-roadmap/" title="https://support.atlassian.com/jira-software-cloud/docs/create-epics-on-the-roadmap/" data-renderer-mark="true">자세히 보기</a> </p>




![Jira Cloud](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Cloud/Jira/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%EB%85%B8%ED%8A%B8%20Cloud-Jira-4.png)



**1-1. 에픽 생성**



   1.로드맵에서 에픽 생성(Create epic) 선택

   2.에픽 이름을 작성하고 엔터 버튼클릭

**1-2. 에픽 일정 조정**

<div class="fabric-editor-block-mark fabric-editor-indentation-mark" data-level="1"><p data-renderer-start-pos="2436">1.커서를 시간 표시 막대 위에 두기</p></div>




![Jira Cloud](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Cloud/Jira/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%EB%85%B8%ED%8A%B8%20Cloud-Jira-5.png)




<div class="fabric-editor-block-mark fabric-editor-indentation-mark" data-level="1"><p data-renderer-start-pos="2463">2.막대 표시로 변경되면 클릭 하여 드래그 앤 드롭을 통해 특정 날짜로 커서를 조절</p></div>




<div class="fabric-editor-block-mark fabric-editor-indentation-mark" data-level="1"><p data-renderer-start-pos="2511">3.색을 선택하고 “Dependencies”을 매핑한 후 종료.</p></div>

<p data-renderer-start-pos="2548">&nbsp;</p>

#### 2. 모든 프로젝트에서 SCM data 배포가 가능




![Jira Cloud](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Cloud/Jira/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%EB%85%B8%ED%8A%B8%20Cloud-Jira-6.png)




<p data-renderer-start-pos="2590">Jira 프로젝트에 SCM (Source Code Management) 도구를 통합하면 배포 기능을 사용하여 Deploy Pipeline을 시간 경과에 따라 생기는 문제에 대해 파악할 수 있습니다. → <a class="sc-gleUXh dNInRj" href="https://support.atlassian.com/jira-software-cloud/docs/enable-deployments/" title="https://support.atlassian.com/jira-software-cloud/docs/enable-deployments/" data-renderer-mark="true">자세히 보기</a></p>



#### 3. 프로젝트 생성 업데이트 사항 (JSM Cloud 에도 동일 적용)    

 Jira에서 프로젝트를 만들 때 새로운 템플릿 라이브러리를 통해 더 간단히 만들 수 있게 되어 팀의 업무 방식에 가장 적합한 템플릿을 찾아 효과적인 프로젝트를 생성할 수 있습니다. 



추가적으로 차세대 및 클래식 프로젝트를 보다 더 명확하고 알기 쉽게 이름을 변경하였습니다.


■ 차세대 프로젝트는 “**팀 관리 프로젝트(Team-managed)**”로 이름이 변경되며 기능 자체는 그대로 유지됩니다.

■ 클래식 프로젝트는 “**회사 관리 프로젝트(Company-managed)**”로 이름이 변경되었습니다. 

<hr>



<h3 id="4월" data-renderer-start-pos="2994">4월</h3>


<p></p>

#### 1. 프로젝트 페이지 개선과 Jira 및 Confluence 연결 



  Jira Software의 페이지(Pages)기능을 프로젝트 페이지(Project Pages)로 이름을 변경하고 사용과 이해하기 쉽도록 개선했습니다.



프로젝트 페이지는 Jira Software 프로젝트를 Confluence 공간에 연결하여 문서를 한 곳에 보관합니다. 아직 사이트에 Confluence가 없는 경우 사이트 관리자는 왼쪽 탐색 패널의 프로젝트 페이지 기능을 통해 무료 평가판 인 제품 사용을 시작할 수 있습니다.



연결된 공간의 페이지는 지라의 프로젝트 페이지 기능에서 구성되며, 모든 페이지 구성 및 Confluence의 사용 권한은 유지 됩니다. 적합한 권한이 있는 사용자는 프로젝트 페이지를 사용하여 Confluence 페이지를 만들고 기존 문서를 볼 수 있습니다.






<p data-renderer-start-pos="3426">&nbsp;</p>

#### 2. 차세대 프로젝트 : 단일 열에 여러개의 상태가 할당 가능 



<p align="center"><img src="/assets/images/banners/Release%20Note%20Cloud/Jira/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%EB%85%B8%ED%8A%B8%20Cloud-Jira-7.png"></p>



<p data-renderer-start-pos="3479">차세대 프로젝트에서 단일 열에 둘 이상의 상태를 추가할 수 있습니다. 보드를 정렬했던 경험을 활용하여 유사한 상태를 그룹화 하고 보드를 자유롭게 만들 수 있습니다. 또한 동일한 열 내에서 작업을 새로운 상태로 삭제가 가능합니다. → <a class="sc-gleUXh dNInRj" href="https://support.atlassian.com/jira-software-cloud/docs/configure-columns-and-statuses-in-your-next-gen-project/" title="https://support.atlassian.com/jira-software-cloud/docs/configure-columns-and-statuses-in-your-next-gen-project/" data-renderer-mark="true">자세히 보기</a></p>





#### 3. Jira 프로젝트 페이지에서 사용자가 Confluence에 가입할 수 있도록 허용  



사이트에 Jira 및 Confluence가 활성화되어 있는 경우, 적합한 사용 권한이 있는 사용자는 Jira의 프로젝트 페이지 기능을 사용하여 Confluence에 액세스하고 관련 문서와 내용을 찾을 수 있습니다.



사용자는 오직 사이트 설정에서 허용하는 경우에만 액세스를 요청하거나 Confluence 에 가입할 수 있습니다.



<p data-renderer-start-pos="3873">→ <a class="sc-gleUXh dNInRj" href="https://support.atlassian.com/user-management/docs/specify-how-users-get-site-access/" title="https://support.atlassian.com/user-management/docs/specify-how-users-get-site-access/" data-renderer-mark="true">사이트 액세스 허용 설정</a></p>



<hr>


## 2. Jira Service Management



<h3 id="1월.1" data-renderer-start-pos="3921">  <em data-renderer-mark="true"><strong data-renderer-mark="true"> </strong></em> 1월</h3>







#### 1. 서비스와 연결된 승인자에게 승인 요청 





새로운 IT Service Management 템플릿에서 워크플로우에 대한 승인을 구성할 때 관리자는 서비스와 관련된 승인자가 변경 사항을 플래그로 지정, 검토, 승인할 수 있도록 허용하여 서비스 품질에 영향을 미칠 위험을 줄일 수 있습니다. → [자세히 보기](https://support.atlassian.com/jira-service-management-cloud/docs/request-approval-from-approvers-associated-with-a-service/)



#### 2. Quick Start 패널 




<p data-renderer-start-pos="4139">Quick Start 패널이 추가되어 요청 및 관리 단계를 단계별로 쉽게 따라 할 수 있고 문서 별 링크를 갖출 수 있어 가능한 신속하고 쉽게 이용하실 수 있습니다.</p>




#### 3. OAuth를 사용하여 사용자 지정 Microsoft 이메일 주소 설정


<p data-renderer-start-pos="4279">Jira 사이트 관리자인 경우 이제 애플리케이션별 암호 대신 OAuth를 사용하여 사용자 지정 Microsoft 이메일 계정을 추가할 수 있습니다. → <a class="sc-gleUXh dNInRj" href="https://support.atlassian.com/jira-service-desk-cloud/docs/add-an-email-account/" title="https://support.atlassian.com/jira-service-desk-cloud/docs/add-an-email-account/" data-renderer-mark="true">자세히 보기</a></p>






#### 4. 한 번에 연결된 여러 공간 변경



연결된 여러 공간을 동시에 변경하여 시간을 절약하고 작업을 보다 효율적으로 수행할 수 있습니다.  여러 개의 공간을 선택하여 링크를 차단하거나 “Project Settings → Knowledge base“ 에서 볼 수 있는 사용자를 변경하실 수 있습니다. → [자세히 보기](https://support.atlassian.com/jira-service-management-cloud/docs/link-confluence-spaces-to-your-service-project/)





### 3월



#### 1. 주요 인시던트(Incident) 대기열에서 Incident Command Center 에 액세스 

 ICC(Incident Command Center)는 고객과 고객의 팀이 주요 인시던트에 허용할 수 있도록 지원하는 비디오 및 음성 통화 도구 입니다.  이를 활용하여 관련된 팀과 쉽고 직접적으로 소통할 수 있습니다. 

Commend Center 열에서 **Join** 또는 **Start** 버튼을 선택하여 Jira Service Management에서 ICC 로 직접 엑세스하여 기존 ICC 세션에 가입하거나 새로운 세션을 생성할 수 있습니다.







#### 2. 인시던트 타임라인을 활용한 주요 인시던트 이력 확인 




![릴리즈노트 클라우드 Jira Service Management](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Cloud/Jira%20Service%20Management/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%EB%85%B8%ED%8A%B8%20Cloud-Jira%20Service%20Management-2.png)

 Jira Service Management의 프로젝트에서 주요 인시던트를 타임라인과 함께 Jira Service Management에서 전체 기록을 확인할 수 있습니다. 실제 인시던트가 발생할 때의 진행 상황을 추적하고, 이를 해결하기 위해 어떤 작업이 수행되었는지, 어떤 작업을 수행해야 하는지 신속하게 확인할 수 있습니다. 



주요 인시던트의 인시던트 타임라인을 보려면 인시던트로 이동하여 주요 인시던트에서 계속 또는 과거 인시던트를 선택합니다. 그런 다음 탐색할 주요 인시던트를 찾아 해당 인시던트의 타임라인 열에서 보기를 선택합니다.



<hr>


## 3. Confluence




<h3 id="1월.2" data-renderer-start-pos="5847"><em data-renderer-mark="true"><strong data-renderer-mark="true"> </strong></em> 1월</h3>






#### 1. 새로운 에디터를 사용하여 링크 추가 시 페이지나 블로그 검색 가능 



 새로운 편집기를 사용하여 링크를 추가할 때 URL을 붙여 넣거나 최근에 본 페이지 또는 블로그를 선택하는 것 이외의 사이트에서 페이지 또는 블로그를 검색하실 수 있습니다.







#### 2. Jira Issue URL의 Smart links로 변환 



 Confluence 페이지에서 Jira issue Link를 붙여넣으면 URL 이 페이지 아이콘과 페이지 제목을 표시하는 Smart Link로 변환됩니다. 이는 Jira & Confluence 사이트가 응용 어플리케이션 연결로 연결되어 있거나 둘 다 Cloud Version 일 경우 작동합니다.








#### 3. 페이지 일괄 보관 



프리미엄 플랜의 공간 관리자는 일괄 보관을 통해  공간을 깔끔하고 최신 상태로 유지할 수 있습니다. 한 번의 작업으로 최대 500개의 페이지를 보관하실 수 있습니다.








#### 4. Confluence 에서 페이지와 블로그 삭제 기능  



삭제되는 페이지의 하위 항목에 대한 자세한 정보를 볼 수 있으며, 자세한 내용을 보기 위해 product 문서에 대한 링크가 추가 되었습니다. 만약 사이트에서 페이지를 보관할 수 있는 기능을 제공할 경우 대신 보관할 수 있는 기회가 제공됩니다.





#### 5. Media Viewer 기능이 탑재된 Office Connector 문서 



 Office Connector 매크로를 활용하여 워드 문서를 추가하고 페이지의 내용을 전체 가로 화면으로 보실 수 있습니다.





#### 6. 보관할 페이지 추천 기능 

 

 일괄 보관 작업에서 제외된 페이지 보관을 추천 또는 권장 하는 알림 메일 기능이 추가되었습니다. 





#### 7. 페이지 작업 재구성 




해당 기능은 추가 작업 ( ••• ) 메뉴에 추가되었고 내용은 다음과 같습니다.

■ 제한 : 공유 버튼 좌측에 잠금 아이콘을 사용합니다.

■ 계층 구조로 보기 : 공간 사이드 바를 활용하여 공간의 모든 페이지를 보고 변경할 수 있습니다. 이것은 Space Settings → Contents Tools → Reorder pages 에서 확인 가능합니다.





#### 8. Team Calendar 의 새로운 변화  


Team Calendar 의 UI, 기능 등 사항이 변경되어 모든 달력 및 이벤트에 엑세스하고, 리스트, 주, 월, 타임라인을 보실 수 있습니다. 또한 인터페이스가 전 보다 더 보기 좋게 변경 되었습니다.






<h3 id="2월.1" data-renderer-start-pos="7532">2월</h3>







#### 1. Smart Link 및 Smart Card를 활용해 하이퍼링크 개선

Smart Link 와 Smart Card를 활용하여 링크를 돋보이게 하는 동시에 독자가 페이지에 계속 게시할 수 있도록 세부 정보를 제공할 수 있습니다. → [자세히 보기](https://support.atlassian.com/confluence-cloud/docs/insert-links-and-anchors/) 






#### 2. 템플릿을 바로 선택하기 전에 쉽게 정렬 



![Confluence Cloud](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Cloud/Confluence/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%EB%85%B8%ED%8A%B8%20Cloud-Confluence-2.png)




 새 페이지를 작성할 때, 작성 중인 내용에 가장 적합한 템플릿을 선택할 수 있습니다. 템플릿 검색 환경을 효율적으로 만들기 위하여 정렬 기준을 만들어 템플릿을 보다 효율적으로 선택할 수 있습니다. 권장하는 템플릿부터 제목 또는 알파벳 별로 템플릿을 정렬하여 확인할 수 있습니다.







<h3 id="3월.2" data-renderer-start-pos="7868">3월</h3>





#### 1. 새로운 아이콘 임의 할당   



![Confluence Cloud](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Cloud/Confluence/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%EB%85%B8%ED%8A%B8%20Cloud-Confluence-3.png)


<p data-renderer-start-pos="7915">&nbsp;</p>

 공간을  다른 공간과 시각적으로 알기 쉽게 구분하도록 하기 위해, 모든 새로운 공간에 동일한 폴더 이미지가 공간에 할당된 기본 아이콘이 무작위로 표시 됩니다. 

공간을 담당하는 사람은 설정된 기본 아이콘을 변경하거나 자신이 원하는 아이콘으로 업로드하여 변경하실 수 있습니다. 기존에 존재하는 공간은 적용되지 않습니다.







#### 2. 앵커(책갈피) 매크로 기능 추가  


![Confluence Cloud](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Cloud/Confluence/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%EB%85%B8%ED%8A%B8%20Cloud-Confluence-4.png)



앵커 매크로는 전체적인 편집에서 사용이 가능합니다. 페이지 또는 블로그에 대상을 추가하여 페이지의 해당 파트로 이동하는 이동하는 링크를 만들 수 있습니다. 이 기능은 페이지를 읽는 사람을 이미지, 표의 행 또는 특정 단락으로 이동시킬 때 유용합니다.






#### 3. 페이지 공간 보기에 다양한 옵션 추가   


![Confluence Cloud](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Cloud/Confluence/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%EB%85%B8%ED%8A%B8%20Cloud-Confluence-5.png)



 페이지 간의 관계가 중요할 때는 공간의 페이지를 트리처럼 보는 것이 좋지만, 이제는 공간의 페이지를 보는 방법에 대한 옵션이 더 많아졌습니다.



공간 사이드바의 페이지 옆에 있는 •••를 선택하여 페이지를 다른 보기로 전환하면 트리 관계가 제거되고 페이지가 마지막으로 업데이트된 날짜 또는 제목별로 정렬된 페이지 목록이 표시됩니다. 공백에서 선택하는 사항은 변경할 때까지 유지됩니다.





#### 4. 목차 매크로에 머리글 요소 포함  



<p align="center"><img src="/assets/images/banners/Release%20Note%20Cloud/Confluence/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%EB%85%B8%ED%8A%B8%20Cloud-Confluence-6.png"></p>



사용하는 편집기에 관계없이 목차 매크로에는 이모지, 주석, 상태 또는 날짜와 같은 제목 텍스트에 추가하는 추가 정보가 표시됩니다.





<h3 id="4월.1" data-renderer-start-pos="8679">4월</h3>






#### 1. 페이지 또는 블로그 출판 예약 기능 추가  



<p align="center"><img src="/assets/images/banners/Release%20Note%20Cloud/Confluence/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%EB%85%B8%ED%8A%B8%20Cloud-Confluence-7.png"/></p>





페이지나 블로그를 출판 하기 전에  “ ••• 클릭” → “Schedule Publish” 를 통해 페이지 또는 블로그의 출판 시간을 설정하실 수 있습니다. 내용이 실제로 게시될 때까지 사용자가 언급한 사용자 또는 페이지, 블로그 또는 공간을 보고 있는 사용자에게 통지가 발송되지 않습니다.



페이지 또는 블로그가 특정 요일 및 시간에 게시되도록 설정되어 있는지 확인하기 위해  [출판] 버튼이 [예약됨]으로 변경됩니다. 페이지 상단과 최근 페이지 목록의 페이지 제목 옆에 [Publish Scheduled] 표시가 표시됩니다.






#### 2. 편리해진 전역 권한  

![Confluence Cloud](https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Cloud/Confluence/2021_1Q/%EC%83%81%EB%B0%98%EA%B8%B0%EB%85%B8%ED%8A%B8%20Cloud-Confluence-9.png)




<p data-renderer-start-pos="9524"> 사이트 및 제품 관리자가 이러한 사이트 수준 사용 권한을 쉽게 읽고 변경할 수 있도록 전역 권한 페이지를 업그레이드했습니다.</p>



<p data-renderer-start-pos="9598">사용자 그룹, JSM 액세스, 익명 액세스 및 앱 등 사용자 유형별로 페이지를 탭으로 재구성하고 각 탭의 모양을 새로 고쳐서 정보를 보다 깨끗하고 쉽게 검색할 수 있도록 했습니다.</p>




<p data-renderer-start-pos="9702">부여된 권한 유형별로 목록을 필터링할 수 있는 기능도 추가되었습니다. 예를 들어 사이트에 공백을 만들 수 있는 권한이 있는 모든 사용자 그룹을 보려면 검색란 옆에 있는 필터 단추를 클릭하고 공간 만들기 상자를 선택할 수 있습니다. → “<a class="sc-gleUXh dNInRj" href="https://support.atlassian.com/confluence-cloud/docs/manage-global-permissions/" title="https://support.atlassian.com/confluence-cloud/docs/manage-global-permissions/" data-renderer-mark="true">여기</a>“ 를 클릭하여 전역 권한 관리에 대해 자세히 알아보세요!</p>






#### 3. 사이드바에서 페이지 상세 정보 확인 가능 



 때로는 페이지 제목만으로는 적절한 페이지를 선택하기에 충분하지 않을 수 있습니다. 공간의 사이드바에서 페이지 이름을 가리키면 공간에 대한 자세한 정보(예: 마지막으로 업데이트된 시간, 페이지를 만든 사람, 페이지에 있는 주석 수 및 좋아요 수)를 볼 수 있습니다. 



페이지 카드를 볼 때 각 사용자가 제어할 수 있으므로, 이 기능이 유용하지 않으면 사용자 설정에서 해제할 수 있습니다.

---



Atlassian은 더 나은 제품을 제공하기 위하여 계속해서 투자하고 개발하고 있습니다.   

Atlassian 제품에 대한 궁금증이 있으실 경우 언제든지 Platinum Solution Partner인 디무브에게 문의해주세요!


감사합니다. :smiley:

