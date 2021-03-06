---

layout: post
title: 2022 Atlassian 주요 제품 릴리즈 노트 (Jan ~ Mar) - Server & Data Center
Subtitle: Release Note
author: ethan
image: https://dmove-kr.github.io/assets/images/banners/Release%20Note%20Server/%EC%83%81%EB%B0%98%EA%B8%B0%20%EB%85%B8%ED%8A%B8%20Server-1.png
date: 2022-03-28
categories: [Release Note]
tags: [Atlassian, Atlassian Data Center, 아틀라시안, 아틀라시안 서버, 데이터 센터, Jira, jira, Jira Server, Data Center, Release, Release Note, Jira Sofrware, Jira Service Management, Confluence,컨플,DevOps, 데브옵스, dev, Dev, 에자일, Agile, Wiki]
---






안녕하세요. 디무브 입니다! 🎈

2022년 1분기 동안 아틀라시안의 주요제품인 Jira Software, Jira Service Management 및 Confluence에도 크고 작은 변화가 있었습니다.

각 제품의 Server 및 Data Center 버전에 어떠한 변화가 있었는지 여러분과 함께 확인해볼 수 있는 시간을 마련했으니 꼭 확인해보세요!



---

## Jira Software



### ■ Version 8.22.x

### 1-1. OAuth 2.0 지원을 통해 더욱 안전하게 통합할 수 있습니다.

Atlassian은 Jira를 OAuth 2.0 공급자로 설정하여 Jira에서 외부 애플리케이션으로 데이터 요청 또는 외부 애플리케이션이 Jira로 데이터를 요청하는 것과 같은 양방향 통신을 지원합니다.

또한 OAuth 2.0을 사용하여 인기 있는 타사 애플리케이션 개발사가 Jira에 사용할 수 있는 자체 커넥터를 만들 수 있습니다.



<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Server/Jira/2022_1Q/1.png"></center> <br/>



또한 간편하게 Integration(통합)을 유지할 수 있도록 OAuth 2.0의 전체 기능을 애플리케이션 링크로 통합했습니다.

이전에는 Administration > OAuth 2.0에서 확인할 수 있었던 OAuth 2.0 클라이언트 Integration(통합)을 이제 애플리케이션 링크에서 확인할 수 있습니다.

이에 관한 자세한 내용은 [다른 응용 프로그램에 대한 링크](https://confluence.atlassian.com/adminjiraserver/link-to-other-applications-938846918.html)에서 확인하실 수 있습니다.

<br/>



### 1.2 기본 인증을 위한 로그인 성능 개선

또한 이번 Jira 8.22에서 기본 인증을 사용한 로그인 성능이 크게 향상되었습니다.

사용자 로그인 카운터와 타임 스탬프 저장을 지연시키고 캐시에 사용자 세션을 저장하는 시간을 15분으로 개선했습니다. 이러한 성능 향상은 외부 사용자 디렉토리에 대한 리소스 부담을 줄일 수 있는 추가적인 이점을 제공합니다.

또한 사용자의 필요에 따라  `com.atlassian.jira.user.crowd.service.authenticate.cache.minutes` 속성 값을 변경하여 로그인 세션의 값을 더 빠르게 재 사용할 수 있습니다.

이에 관한 자세한 내용은 [시작 시 속성 및 옵션을 설정하는 방법](https://confluence.atlassian.com/adminjiraserver/setting-properties-and-options-on-startup-938847831.html)에서 확인하실 수 있습니다.

<br/>

### 1.3 데이터 파이프 라인에서 프로젝트 제외

데이터 파이프라인을 사용하면 Jira 데이터를 내보내 다양한 비즈니스 도구로 분석할 수 있습니다.

또한 Jira 8.22에서는 데이터 내보내기를 할 때 프로젝트 제외 목록을 추가할 수 있습니다. 이 기능은 보고할 필요가 없는 프로젝트나 중요하고 민감한 정보를 가지고 있는 프로젝트가 있는 경우에 유용하게 사용할 수 있습니다.  

이에 관한 더 자세한 내용은 [데이터 파이프라인 REST API](https://developer.atlassian.com/server/data-pipeline/rest/intro/) 에서 확인하실 수 있습니다.

<br/>



### 1.4 해결된 이슈 사항


| Summary                                                  | Key         | Status |
| :----------------------------------------------------------- | :-------------- | :--------- |
| 대규모 인스턴스에서 에픽 링크 드롭다운 속도 지연             | JSWSERVER-21026 | Closed     |
| 소유자가 그룹에서 제거된 경우 대시보드 페이지에서 대시보드를 편집할 수 없음 | JSWSERVER-20511 | Closed     |
| 이슈를 할당하거나 댓글에서 언급된 검색을 수행하는 동안 서버 오류가 발생 | JRASERVER-73023 | Closed     |
| postgresql 13에 대한 JIRA 지원                               | JRASERVER-72749 | Closed     |
| OAuth 2.0 지원                                               | JRASERVER-43171 | Closed     |






<br/>

------

<br/>

## Jira Service Management



### ■ Version 4.22.x

### 1 멀티 이메일 채널을 통한 커뮤니케이션 개선 [DATA CENTER]



이전에는 Beta 버전으로 출시되었던 멀티 이메일 채널 기능이 이번 4.22 Jira Service Management 에서 완전히 구현되었습니다.

이제 Jira Service Management에서 필요한 수만큼 전용 이메일 채널을 구성하여 고객과의 원활한 커뮤니케이션을 수행할 수 있습니다.

이메일 내용은 요청 티켓이나 댓글로 전환되어 요청 프로세스를 개인화하고 처리 속도를 높일 수 있습니다.

이에 관한 더 자세한 내용은 [이메일 채널에 대해 알아보기](https://confluence.atlassian.com/servicemanagementserver/receiving-requests-by-email-939926303.html) 에서 확인하실 수 있습니다.

<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Server/Jira%20Service%20Management/2022_1Q/1.png"/></center> <br/>





### 2.2 새로운 SLA 구성 인터페이스 [DATA CENTER]



Atlassian은 SLA와 관련된 모든 설정을 동일한 공간에서 관리 및 모니터링할 수 있도록 새로운 SLA 구성 인터페이스를 도입했습니다.

새로운 인터페이스를 사용하여 SLA 이름 권한, 디버깅 로그 세부 정보 및 정리 방법, SLA 시간 형식을 구성할 수 있으며 이에 관한 자세한 내용은 [SLA 구성 방법 알아보기](https://confluence.atlassian.com/servicemanagementserver/setting-up-slas-939926373.html) 에서 확인하실 수 있습니다.



<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Server/Jira%20Service%20Management/2022_1Q/2.png"/></center> <br/>



### 2.3 자동 입력 필드를 사용하여 데이터 재사용 [DATA CENTER]

이제 Jira Service Management 4.22에서는 자동으로 채워진 요청필드로 URL을 생성할 수 있습니다.

외부 컨텍스트 데이터를 사용하여 세부 정보를 Jira Service Management로 가져올 수 있으므로 고객은 각 요청 건에 대해 모든 필드를 입력 할 필요가 없습니다.

이에 관한 자세한 내용은 [자동으로 채워진 요청 필드로 URL을 설정하는 방법](https://confluence.atlassian.com/servicemanagementserver/setting-up-request-types-939926357.html)에서 확인하실 수 있습니다.



<br/>

### 2.4 서비스 팀의 작업에 대한 스냅 샷을 얻을 수 있는 추가적인 데이터 포인트

Jira Service Management를 통해 사용자는 유용한 데이터를 확인하고 보고할 수 있습니다.

이제 데이터 파이프 라인에서 아래의 세 가지를 내보낼 수 있습니다.

- 승인- 승인은 많은 Service Management 워크플로우에서 중요한 부분을 차지하고 있습니다. 승인 파일에는 승인 워크플로우의 시기 및 결과에 대해 보고해야 하는 데이터가 포함됩니다.
- 미리 준비된 답변 - 자주 올라오는 질문에 대해 미리 준비한 답변을 생성하여 사용할 수 있습니다. 미리 준비된 답변 파일에는 답변, 업데이트 및 사용자에게 전달해야 하는 데이터가 포함되어 있습니다.
- 지식 기반 문서 - Confluence에서 기술 자료를 검색할 수 있습니다. 지식 기반 문서에는 요청에 대해 공유해야할 내용 및 도움이 되는 내용 등을 포함하고 있습니다.



<div style="border-radius: 3px; margin: 0.75rem 0px 0px; padding: 8px; display: flex; background-color: rgb(222, 235, 255);"><div style="flex-shrink: 0; height:24px; widht:24px; box-sizing: content-box; padding-right: 8px; text-align: center; user-select: none; color: rgb(0, 82, 204); "><span role="img" style="--icon-primary-color: currentcolor; --icon-secondary-color: var(--ds-surface, #FFFFFF); vertical-align: middle; display: inline-flex; flex-shrink: 0; line-height: 1;"><svg style="width: 24; height: 24; role: presentation;"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C9.34784 22 6.8043 20.9464 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2C14.6522 2 17.1957 3.05357 19.0711 4.92893C20.9464 6.8043 22 9.34784 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22V22ZM12 11.375C11.6685 11.375 11.3505 11.5067 11.1161 11.7411C10.8817 11.9755 10.75 12.2935 10.75 12.625V15.75C10.75 16.0815 10.8817 16.3995 11.1161 16.6339C11.3505 16.8683 11.6685 17 12 17C12.3315 17 12.6495 16.8683 12.8839 16.6339C13.1183 16.3995 13.25 16.0815 13.25 15.75V12.625C13.25 12.2935 13.1183 11.9755 12.8839 11.7411C12.6495 11.5067 12.3315 11.375 12 11.375ZM12 9.96875C12.4558 9.96875 12.893 9.78767 13.2153 9.46534C13.5377 9.14301 13.7188 8.70584 13.7188 8.25C13.7188 7.79416 13.5377 7.35699 13.2153 7.03466C12.893 6.71233 12.4558 6.53125 12 6.53125C11.5442 6.53125 11.107 6.71233 10.7847 7.03466C10.4623 7.35699 10.2812 7.79416 10.2812 8.25C10.2812 8.70584 10.4623 9.14301 10.7847 9.46534C11.107 9.78767 11.5442 9.96875 12 9.96875Z" fill="currentColor"></path></svg></span></div> 아래의 내용은 위 Jira 플랫폼을 사용하는 모든 제품과 공통된 내용이므로 본문의 Jira의 내용을 참고해 주시면 됩니다. </div> <br/>

2.5 OAuth 2.0 지원을 통해 더욱 안전하게 통합할 수 있습니다. (Jira 8.22의 내용과 동일)

2.6 기본 인증을 위한 로그인 성능 개선 (Jira 8.22의 내용과 동일)

2.7 데이터 파이프 라인에서 프로젝트 제외 (Jira 8.22의 내용과 동일)



<br/>

### 2.8 해결된 이슈 사항

| Summary                                                  | Key         | Status |
| :----------------------------------------------------------- | :-------------- | :--------- |
| 브라우저 탭 제목에 대기열 세부 정보 표시                     | JSDSERVER-11134 | Closed     |
| 내 요청 페이지를 처음 방문하면 고객 포털 생성 요청 페이지에서 인사이트 참조 사용자 정의 필드 옵션 필드가 사라집니다. | JSDSERVER-8675  | Closed     |
| Insight 개체 유형에 상속이 사용되면 시스템이 IQL 검색을 실행하는 속도가 느려질 수 있습니다. | JSDSERVER-11008 | Closed     |

---

<br/>

## Confluence

### ■ Version 7.16.x

### 3.1 자동으로 기록 데이터를 정리 [DATA CENTER]

페이지나 파일을 편집할 때 Confluence는 이전 버전의 내용을 저장하여 필요한 경우 이를 활용하여 복원할 수 있습니다.

시간이 지남에 따라 이러한 리비전이 추가되기 시작하면 데이터베이스 및 파일 시스템의 크기가 증가합니다. 일부 페이지에 수백 개의 리비전이 있는 것은 드문 일이 아닙니다.

하지만 이번 Confluence 7.16에서는 리비전 데이터를 보관할 수 있는 기한을 설정하는 기능이 추가되었습니다.

Confluence에 저장하고자 하는 리비전의 수를 설정(버전 별 또는 기간 별)하여 설정된 값을 넘어설 시 예약된 작업이 초과된 분량을 삭제하여 Confluence의 성능에 영향을 미치지 않도록 합니다.



<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Server/Confluence/2022_1Q/1.png"/></center> <br/>



또한 예약된 작업은 기본적으로 10분마다 실행하도록 설정되어 있으며 정리 작업이 실행된 후에는 리비전과 휴지통에 있는 내용이 영구적으로 삭제되므로 규칙을 설정하기 전에 보관 규칙 전략을 세우는 것이 필요합니다.

<br/>

### 3.2 완벽한 유연성

규정 준수를 이유로 모든 이력을 유지해야 하는 조직도 있는 반면, 보다 적극적으로 삭제하여 설치 공간을 최소화해야 하는 조직도 있습니다.

Confluence는 기본적으로 모든 콘텐츠를 보관하도록 설정되어 있지만 앞의 두 가지 상황을 모두 충족하기 위해 Confluence 7.16에서는 특수 요구 사항이 있는 공간에 대한 예외를 정의한 다음 사이트의 나머지 컨텐츠에 적용되는 글로벌 규칙을 설정할 수 있습니다.

그 결과 조직이 처한 상황과 요구에 맞게 유연성을 가지고 문서들을 관리할 수 있습니다.



<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Server/Confluence/2022_1Q/2.png"/></center> <br/>

### 3.3 정리 권한을 위임

공간 관리자가 공간 도구에서 각 공간에 대해 규칙을 구성할 수 있도록 허용하거나 전역 관리를 통해 시스템 관리자에게만 이 역할을 부여할 수 있습니다.

이 설정은 Confluence 사이트 전체에 설정할 수 있으며 예외를 사용하여 공간 단위로 설정할 수 있습니다.

이에 관한 자세한 내용은 [보관 규칙](https://confluence.atlassian.com/doc/set-retention-rules-to-delete-unwanted-data-1108681072.html)에서 확인하실 수 있습니다.





<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Server/Confluence/2022_1Q/3.png"/></center> <br/>



###  3.4 복잡한 사이트에 대한 더 빠른 권한 확인 [SERVER][DATA CENTER]

Confluence가 사용자에게 보여주어야 할 내용을 결정하기 위해 현재 사용자의 권한을 확인해야 하는 많은 상황이 있습니다.

예를 들어 작업 보고서 매크로를 렌더링하려면 사용자에게 작업이 할당된 모든 페이지를 찾은 다음 작업이 나타나는 공간과 페이지를 볼 수 있는 권한이 있는지 확인해야 합니다.

이러한 검사는 많은 메모리를 소모할 수 있고 특히 권한이 복잡한 경우 데이터 로드가 느릴 수 있습니다.

더 빠른 권한 서비스는 권한 정보가 저장되는 방식을 변경하여 많은 페이지에 대한 권한을 더 빠르게 확인할 수 있도록 합니다.

이는 콘텐츠가 많고 권한이 복잡한 사이트에서 상당한 성능 향상을 제공할 수 있습니다.

<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Server/Confluence/2022_1Q/4.png"/></center> <br/>





### 3.5 다양한 ID 공급자(IdP) 사용 [DATA CENTER]

이제 싱글 사인온(SSO)인증을 위해 다양한 SAML 또는 OpenID Connect ID 제공자를 구성할 수 있습니다.
이동  우측 상단 톱니 바퀴 아이콘> 일반 구성 > 인증 방법 (구 SSO 2.0) 에서 확인할 수 있습니다.

<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Server/Confluence/2022_1Q/5.png"/></center> <br/>



SSO 인증 방식이 1개만 설정되어 있는 경우, 사용자는 인증을 위해서 설정된 1개의 방식으로 리다이렉트 됩니다.

복수의 인증 방식을 사용할 경우, 이용 가능한 옵션이 있는 로그인 페이지가 나타나며 사용하려는 인증 방식 버튼의 텍스트를 팀에게 맞게 정의하여 사용할 수 있습니다.

이에 관한 자세한 내용은 [여러 인증 방식을 구성하는 방법](https://confluence.atlassian.com/enterprise/using-multiple-identity-providers-1044779993.html)에서 확인하실 수 있습니다.  

<br/>

### 3.6 기본 인증 차단 [DATA CENTER]

SSO(Single Sign-On) 인증을 사용하도록 Confluence를 구성한 경우 사람들이 기본 인증을 사용하여 사용자 이름과 비밀번호로 인증하는 것을 차단할 수 있습니다.

로그인 화면, API 또는 두가지 모두에 대해 기본 인증을 비활성화 할 수 있습니다.



<center><img src="https://blog.dmove.kr/assets/images/banners/Release%20Note%20Server/Confluence/2022_1Q/6.png"/></center> <br/>



기본 인증을 비활성화할 경우 기존에 기본 인증 방식으로 실행하던 스크립트들은 더 이상 사용할 수 없습니다.

그러므로 [개인 액세스 토큰](https://confluence.atlassian.com/enterprise/using-personal-access-tokens-1026032365.html)을 사용하도록 전환해야 합니다.  

이에관한 자세한 내용은 [기본 인증을 비활성화 하는 방법](https://confluence.atlassian.com/enterprise/disabling-basic-authentication-1044776464.html)에서 확인하실 수 있습니다.

<br/>

### 3.7 데이터 파이프라인에서 공간 제외 [DATA CENTER]

데이터 파이프라인을 사용하면 Confluence 데이터를 내보내 다양한 비즈니스 도구로 분석할 수 있습니다.

또한 Confluence 7.16 에서는 데이터 내보내기를 할 때 공간 제외 목록을 추가할 수 있습니다. 이 기능은 보고할 필요가 없는 공간이나 중요하고 민감한 정보를 가지고 있는 공간이 있는 경우에 유용하게 사용할 수 있습니다.  

이에 관한 더 자세한 내용은 [데이터 파이프라인 REST API](https://developer.atlassian.com/server/data-pipeline/rest/intro/) 에서 확인하실 수 있습니다

<br/>

### 3.8 해결된 이슈 사항



| Summary                                                  | Key         | Status |
| :----------------------------------------------------------- | :-------------- | :--------- |
| AD/LDAP에 중복 사용자가 있는 경우 디렉터리 동기화가 실패합니다. | CONSERVER-77932 | Closed     |
| Confluence 온프레미스 환경에서 Jira Cloud에 문제를 생성할 수 없음 | CONSERVER-75951 | Closed     |
| 대문자 PPTX 확장자가 있는 PowerPoint 파일을 미리 볼 수 없음  | CONSERVER-75954 | Closed     |
| SMTP 지원(465 포트)                                          | CONSERVER-43330 | Closed     |
| 다운로드 첨부 URL에 슬래시 '/'를 추가하면 스택 추적이 생성됩니다. | CONSERVER-63616 | Closed     |



---



Atlassian은 더 나은 제품을 제공하기 위하여 계속해서 투자하고 개발하고 있습니다.

Atlassian 제품에 대한 궁금증이 있으실 경우 언제든지 Platinum Solution Partner인 디무브에게 문의해주세요!

감사합니다.😃
