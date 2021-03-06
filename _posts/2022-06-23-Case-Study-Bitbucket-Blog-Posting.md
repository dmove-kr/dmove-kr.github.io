---
layout: post
title: Case Study - Bitbucket을 활용하여 자신만의 블로그 포스팅하기
Subtitle: 블로그 포스팅
date: 2022-06-23
image : https://www.dmove.co.kr/html/_skin/img/sub/products/img_bitbucket_03.png
categories: [Case Study]
tags: [Atlassian, Cloud, Bitbucket, bitbucket, 비트버킷, Blog, blog, 블로그, 블로그 포스팅 ]
author : jackson

---





안녕하세요! 디무브입니다.

이번 시간에는 아틀라시안의 형상 관리 도구인 Bitbucket을 활용하여 자신만의 블로그 웹사이트를 만드는 방법을 공유하려고 합니다.  보통 블로그 웹사이트를 만드는 방법은 웹서버에 배포하거나 깃허브에서 제공하는 정적 웹사이트를 통해 블로그를 생성할 수 있는데요. 

Bitbucket 역시 깃허브 처럼 정적 웹 사이트를 제공한다는 것을 알고 계셨나요? 

정적 웹 사이트는 주로 많이 변경되지 않은 정적인 컨텐츠를 전달하기 때문에 주로 블로그로 포스팅하는 용도로 많이 사용되는데요. Bitbucket을 통해 어떻게 자신만의 블로그를 만들 수 있는지 자세히 알아보겠습니다.

 

------

## 1. Bitbucket Cloud 시작하기

 

### Bitbucket Cloud 가입

 

1.웹 사이트를 만들기 전에 Bitbucket에 가입하는 방법에 대해 알려드리겠습니다. 예시는 구글 계정을 아틀라시안과 연동하여 가입을 진행하는 방법에 대해 소개하도록 하겠습니다.


아래 링크를 통해 Bitbucket 에 접속하여 **Get it free** 버튼을 클릭합니다.

<center><img style="max-width: 70%" src="https://blog.dmove.kr/assets/images/banners/Bitbucket-Blog/1.png"/></center>







<br/>

2.Jira Software를 같이 사용할지 선택한 후 **Next** 버튼을 클릭합니다.



<center><img style="max-width: 70%" src="https://blog.dmove.kr/assets/images/banners/Bitbucket-Blog/2.png"/></center>

 <br/>

3.아틀라시안 계정이 있으신 경우 이메일 주소를 입력하여 로그인합니다. 저는 구글 계정을 아틀라시안과 연동하여 사용할 것이므로 **Continue with Google** 버튼을 클릭하여 진행하겠습니다.

<center><img style="max-width: 50%" src="https://blog.dmove.kr/assets/images/banners/Bitbucket-Blog/3.png"/></center>

 <br/>

4.구글 계정으로 로그인 후 계정 만들기를 통해 아틀라시안과 연동을 진행합니다.



<center><img style="max-width: 50%" src="https://blog.dmove.kr/assets/images/banners/Bitbucket-Blog/4.png"/></center>

<br/>

 5.Bitbucket 사용 경험을 물어보는 화면이 나올 경우 스킵 버튼을 클릭하여 생략할 수 있습니다.

<center><img style="max-width: 70%" src="https://blog.dmove.kr/assets/images/banners/Bitbucket-Blog/5.png"/></center><br/>

- 모든 과정을 완료하면 아래와 같이 Bitbucket을 사용할 수 있습니다. 이제 웹 사이트를 구축해 봅시다!

<center><img style="max-width: 100%" src="https://blog.dmove.kr/assets/images/banners/Bitbucket-Blog/6.png"/></center> <br/>

------

## 2.  레포지토리 생성 부터 블로그 포스팅까지 구축해보기

 

### Bitbucket 설정

 

**워크스페이스 생성** 

 

Bitbucket의 구조는 **워크스페이스 → 프로젝트 →  레포지토리** 구조로 이루어져 있습니다. 그러므로 레포지토리를 생성하기 전에 먼저 워크스페이스와 프로젝트를 생성해야 합니다. 워크 스페이스 생성 시 주의할 점은 사이트 이름이 **워크스페이스 id**를 포함하여 생성되므로 워크스페이스 id를 신중하게 작성해야 합니다. 



워크 스페이스를 생성하는 방법은 아래와 같습니다:

 

- 워크스페이스 화면에서 우측 상단의 **Create workspace** 버튼을 클릭합니다.

<center><img style="max-width: 100%" src="https://blog.dmove.kr/assets/images/banners/Bitbucket-Blog/2-1.png"/></center> <br/>

 

- 워크스페이스 이름과 워크스페이스 ID를 작성합니다. (워크스페이스 ID는 신중하게 작성해주세요.)

<center><img style="max-width: 70%" src="https://blog.dmove.kr/assets/images/banners/Bitbucket-Blog/2-2.png"/></center> <br/>





**프로젝트 생성** 

워크스페이스를 만들었으면 워크스페이스 내 프로젝트를 만들어 봅시다. 프로젝트를 생성하는 이유는 개발에 필요한 프로젝트를 진행할 때 프로젝트 별로 각 기능에 필요한 레포지토리를 구분하여 사용하기 위해 프로젝트를 만들어 사용합니다.

 

- 워크스페이스 에서 **프로젝트 생성** 버튼을 클릭합니다.

  

<center><img style="max-width: 100%" src="https://blog.dmove.kr/assets/images/banners/Bitbucket-Blog/2-3.png"/></center> <br/>

 

- 워크스페이스와 프로젝트 이름, 프로젝트 키를 입력 후 프로젝트를 생성합니다.

<center><img style="max-width: 50%" src="https://blog.dmove.kr/assets/images/banners/Bitbucket-Blog/2-4.png"/></center> <br/>

 

**레포지토리 생성** 



1. Bitbucket 상단의 **create** 버튼을 클릭 후 저장소를 선택합니다.

   <center><img style="max-width: 100%" src="https://blog.dmove.kr/assets/images/banners/Bitbucket-Blog/2-5.png"/></center> <br/>

2. 아래 이미지와 같이 레포지토리를 생성합니다. 이 때 레포지토리 이름은 **{Workspace id}.bitbucket.io**로 생성해야 하며, 접근 레벨을 체크하지 않아야 블로그 화면이 정상적으로 보입니다.

    

   <center><img style="max-width: 70%" src="https://blog.dmove.kr/assets/images/banners/Bitbucket-Blog/2-6.png"/></center> <br/>

    

   <center><img style="max-width: 100%" src="https://blog.dmove.kr/assets/images/banners/Bitbucket-Blog/2-7.png"/></center> <br/>

   <center>워크스페이스 ID 확인</center>

 <br/>

### 레포지토리를 개인 PC로 복사하기

 

레포지토리를 개인 PC로 복사하기 위해 레포지토리 내 **복제 버튼 → 복제 아이콘**을 클릭한 다음, git bash나 터미널 창에서 복사한 명령어를 붙여넣어 레포지토리를 로컬로 복사합니다. 

```
git clone {레포지토리 주소}
```

<center><img style="max-width: 100%" src="https://blog.dmove.kr/assets/images/banners/Bitbucket-Blog/2-8.png"/></center> <br/>

 

<center><img style="max-width: 100%" src="https://blog.dmove.kr/assets/images/banners/Bitbucket-Blog/2-9.png"/></center> <br/>

 

- 레포지토리 우측 상단 ●●● → **Download repository**를 클릭하여 레포지토리를 바로 다운로드 할 수 있습니다.

<center><img style="max-width: 100%" src="https://blog.dmove.kr/assets/images/banners/Bitbucket-Blog/2-10.png"/></center> <br/>

 

### 블로그 내용 추가하기

 

레포지토리를 복사를 마쳤으면 블로그 생성을 위한 웹 설정 파일들을 레포지토리 안에 저장합니다. 이 때 웹 서버 인덱스 파일인 **index.html** 파일이 포함되어야 합니다.

<center><img style="max-width: 100%" src="https://blog.dmove.kr/assets/images/banners/Bitbucket-Blog/2-11.png"/></center> <br/>

 

### Bitbucket에 내용 업데이트

 

레포지토리에 내용을 추가했으면 로컬 레포지토리와 원격 레포지토리를 연결하여 원격 레포지토리에 웹사이트 파일을 업로드합니다. 

<center><img style="max-width: 100%" src="https://blog.dmove.kr/assets/images/banners/Bitbucket-Blog/2-12.png"/></center> <br/>

- 현재 연결된 원격 레포지토리 및 브랜치 상태는 아래 명령어를 통해 확인이 가능합니다.

  
  ​	연결된 레포지토리 주소 확인
  
  
  
  ```
  git remote -v
  ```
  
  
  
   
  
  <center><img style="max-width: 100%" src="https://blog.dmove.kr/assets/images/banners/Bitbucket-Blog/2-13.png"/></center> <br/>
  
   
  
  ​	연결된 브랜치 확인
  
  
  
  ```
  git branch
  ```
  
  
  
   
  
  <center><img style="max-width: 100%" src="https://blog.dmove.kr/assets/images/banners/Bitbucket-Blog/2-14.png"/></center> <br/>
  
   

 

### 홈페이지 확인

 

Bitbucket 정적 웹사이트의 경우 Master 브랜치를 통해 배포합니다. 때문에 다른 브랜치를 통해 업로드 했을 경우 풀리퀘스트를 통해 변경 사항을 확인 후 Merge를 통해 Master 브랜치를 업데이트합니다. 

 

최종적으로 Master 브랜치를 통해 Bitbucket 레포지토리에 업로드를 마쳤으면 자동적으로 반영되어 아래 이미지 처럼 블로그가 정상적으로 포스팅됩니다.

<center><img style="max-width: 100%" src="https://blog.dmove.kr/assets/images/banners/Bitbucket-Blog/2-15.png"/></center> <br/>

 

------

## 파이프라인 빌드

 

Jekyll과 같은 정적 웹사이트 개발 툴을 사용하여 사이트를 만드는 경우 Bitbucket에서 바로 포스팅이 불가능합니다. 그럴 경우 별도로 빌드를 진행하여 그 결과를 Bitbucket에 적용해야 웹 사이트에 반영이 되는데요.

 

Bitbucket은 **“파이프라인”**이라는 빌드 및 배포 기능을 제공하는 툴을 사용하여 블로그를 포스팅 할 수 있습니다. 파이프라인은 단계별로 순차적으로 빌드가 진행되며 bitbucket-pipeline.yml 파일이라는 설정파일을 통해 빌드 설정을 구성할 수 있습니다. 파이프라인에 대한 내용은 아래 링크를 통해 자세히 알 수 있습니다. 


 [파이프라인에 대해 좀 더 알아보기](https://support.atlassian.com/bitbucket-cloud/docs/configure-bitbucket-pipelinesyml/)



<center><img style="max-width: 100%" src="https://blog.dmove.kr/assets/images/banners/Bitbucket-Blog/2-16.png"/></center> <br/>

파이프라인 프로세스

간단한 예시로 블로그 포스팅으로 많이 사용되는 Jekyll 툴의 경우 어떻게 빌드를 진행하여 웹 사이트에 등록이 이루어지는지 자세히 확인해 보겠습니다.

 

1. Bitbucket-Pipeline 활성화

    레포지토리 설정에서 **Enable Pipelines** 를 체크하여 파이프라인을 활성화합니다.

   <center><img style="max-width: 100%" src="https://blog.dmove.kr/assets/images/banners/Bitbucket-Blog/2-17.png"/></center> <br/>

   - 파이프라인 활성화 시 레포지토리에 **bitbucket-pipelines.yml** 파일이 생성됩니다.

     

   <center><img style="max-width: 100%" src="https://blog.dmove.kr/assets/images/banners/Bitbucket-Blog/2-18.png"/></center> <br/>

   

   

2. bitbucket-pipelines.yml 파일 수정
   
   

   아래 작성된 이미지의 스크립트의 프로세스는 다음과 같습니다 : 

   1.Jekyll은 빌드 할 때 _site 폴더에 생성된 페이지를 정적으로 보여주기 때문에 먼저 생성 되어 있는 _site를 삭제하고 git 에서 이미 빌드했었던 _site 파일을 가져온다.

   2.jekyll에 대한 빌드를 수행한다.

   3.새롭게 빌드한 정보를 커밋하여 bitbucket으로 푸쉬하여 웹 사이트에 포스팅한다.

   

   <center><img style="max-width: 100%" src="https://blog.dmove.kr/assets/images/banners/Bitbucket-Blog/2-19.png"/></center> <br/>

   작성해야 할 스크립트의 내용을 정리하면 아래와 같습니다.

   ```
   git config --global user.email "사용자 이메일" 
   git config --global user.name "사용자 이름" // git 사용자 정보 업데이트 
    
   gem install jekyll //gem 라이브러리에 jekyll 추가 
   bundle install //번들 설치 
   rm -rf .git //.git 파일 삭제 (git 정보 초기화) 
   rm -rf _site //블로그를 포스팅할 포스팅 파일삭제 
   git clone https://{Bitbucket 사용자 이름}:{Bitbucket 비밀번호}@bitbucket.org/{workspace id}/{레포지토리 이름}.git _site //깃에서 빌드가 완료되었던 포스팅 파일 가져오기 
   bundle exec jekyll build //jekyll 빌드 수행 
   git add . && git commit -m "New Version - $Bitbucket_Commit" 빌드된 파일을  git에 추가 및 커밋 
   git push origin master //원격 레포지토리의 master 브랜치로 푸쉬
   ```
   
   
   
   
   
   

 <br/>

3. 파이프라인 빌드


파이프라인 빌드는 커밋이나 업데이트 시 바로 적용되거나 Run을 클릭하여 파이프라인을 실행할 수 있습니다. 실행 시 레포지토리에 등록된 bitbucket-pipelines.yml 파일을 토대로 스크립트를 진행하여 빌드를 수행합니다. 정상적으로 빌드 성공 시 아래와 같이 출력됩니다.



<center><img style="max-width: 100%" src="https://blog.dmove.kr/assets/images/banners/Bitbucket-Blog/2-20.png"/></center> <br/>

파이프라인 실행

<center><img style="max-width: 100%" src="https://blog.dmove.kr/assets/images/banners/Bitbucket-Blog/2-21.png"/></center> <br/>

파이프라인 빌드

 

- 빌드 성공 시 아래와 같이 Jekyll 테마로 빌드한 블로그 웹페이지가 정상적으로 출력됩니다.

  <center><img style="max-width: 100%" src="https://blog.dmove.kr/assets/images/banners/Bitbucket-Blog/2-22.png"/></center> <br/>

 

------

 

지금 까지 Bitbucket를 통해 웹페이지를 만들고 블로그를 포스팅 하는 방법에 대해 알아보았습니다.

Bitbucket은 깃허브 처럼 정적 웹사이트를 제공하는 것과 더불어 형상 관리 도구로서 개발에 필요한 히스토리를 분석 및 추적에 용이하고 빌드 부터 배포까지 많은 역할을 수행할 수 있는데요.

Bitbucket에 대해 더 자세히 알아보길 원하시면 저희 디무브에 문의하여 더 자세하게 확인하실 수 있습니다.

 

감사합니다.

  

------

**출처** 



[블로그 포스팅](https://support.atlassian.com/bitbucket-cloud/docs/publishing-a-website-on-bitbucket-cloud/)

[웹 사이트 템플릿](https://themewagon.com/themes/free-bootstrap-5-html-5-business-website-template-arsha/)

[jekyll 블로그 포스팅](https://eottabom.github.io/post/bitbucket-blog/)



 

