---
layout: post
title:  스펙터 취약점에 대응하기 위한 메모리 보호 솔루션
subtitle:  Jscreambler를 통한 메모리 보호
date:   2021-04-15
categories: [Jscrambler]
tags: [Jscrambler, Spector, Memory Protect, Security, 스펙터공격]
---

![Spector image](https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/208d7955-33b5-4ad5-b739-82f8ce94ecac/8a9982ff7519604f01751c35c4ac0507/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-04-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%202.10.54.png)

## 메모리 보호 - 스펙터 취약점 대응


안녕하세요, 디무브 입니다!  


**"스펙터(Spectre)"** 는 발견 된 지 3년이 지난 취약점이지만 여전히 악용할 수 있는 여지가 남아있어 보안 전문가들에게 많은 우려 사항을 안겨주고 있습니다.

Google은 최근 스펙터 취약점에 대한 PoC 익스플로잇(Exploit)을 [보안 블로그](https://security.googleblog.com/2021/03/a-spectre-proof-of-concept-for-spectre.html)에 게시했습니다. 

이 포스팅에서는 개발 팀이 애플리케이션 수준의 완화 조치를 배포해야하는 이유와 메모리 보호가 Spectre 공격에 대해 어떻게 추가적으로 방어하는지 설명해 줍니다. 

이를 기반으로 스펙터 취약점에 대응하기 위하여 왜 Jscrambler가 필요한지 소개해 드리겠습니다. 

---

### 스펙터 공격(Spectre Attacks)이란?

스펙터 공격은 본질적으로 서로 다른 응용 프로그램 간의 격리를 깨고 에러가 없는 프로그램(error-free program)을 속여 기밀 정보가 누출될 수 있게 합니다. 
CPU의 최적화 기능(브랜치 예측)의 결점을 이용하여 프로그램이 메모리에 접근한 다음 사이드 채널에서 읽도록 강제하는 것입니다.

이러한 특성으로 인해 스펙터 취약점은 웹 앱을 포함한 다양한 유형의 애플리케이션에 대한 공격을 허용합니다. 
공격자는 프로세서와 온칩 메모리가 상호 작용하는 이러한 방식을 악용하여 브라우저의 여러 웹 사이트에서 민감한 정보를 추출할 수 있습니다. 

정부, 의료 및 금융 앱과 같이 매우 민감한 데이터를 처리하는 애플리케이션에서 이러한 공격은 심각한 결과를 초래할 수 있습니다. 

앱의 메모리를 악용하려는 공격자의 동기는 일반적으로 다음과 같습니다. 

 ■ 코드를 리버스 엔지니어링하고 그 매커니즘 이해 

 ■ 앱의 동작을 수정하고 새로운 기능에 접근 

 ■ 민감한 데이터에 접근 및 검색

문제는, 이러한 스펙터 공격과 관련하여 브라우저 공급 업체의 노력([Site Isolation](https://www.chromium.org/Home/chromium-security/site-isolation), [out-of-process iframes](https://www.chromium.org/developers/design-documents/oop-iframes), [Cross-Origin Read Blocking](https://www.chromium.org/Home/chromium-security/corb-for-developers) 등)에도 불구하고 공격을 완화할 수 있는 궁극적인 솔루션이 아직 없다는 것입니다.

이러한 공격을 완전히 완화하기 위해 필요한 변경 사항은 프로세서 아키텍처(하드웨어) 수준이며 몇 년이 걸릴 수 있습니다. 

그러나 애플리케이션 소유자는 지금 당장 조치를 취하여 민감한 데이터를 보호하고 공격자가 읽을 수 있는 메모리의 일부에 데이터가 존재하지 않도록 해야합니다. 

PoC 익스플로잇에서 구글은 웹 개발자가 교차 출처 리소스에 대한 엑세스를 적극적으로 거부하는 새로운 매커니즘을 사용하여, 사이트를 보다 강력하게 격리하는 것을 권장하였습니다.

또한 개발자들을 위한 구체적인 조언과 함께 [포스트 스펙터 웹 개발](https://w3c.github.io/webappsec-post-spectre-webdev/) 및 [사이드 채널 공격 완화](https://blog.chromium.org/2021/03/mitigating-side-channel-attacks.html)에 대한 게시물을 공유했습니다.

---

### 추가 방어선을 통한 메모리 보호

웹 앱에 대한 스펙터 공격의 결과로 수백만개의 민감한 데이터 기록이 유출될 수 있으므로 애플리케이션 소유자는 추가 방어선을 찾아야 하며, 그 중 하나가 바로 메모리 보호입니다. 

웹 앱의 맥락에서 메모리 보호(Memory Protection)는 Jscrambler에서 개발 한 방어 기술로 메모리의 민감한 데이터를 암호화하고 애플리케이션이 엑세스해야 하는 경우에만 해독하는 것을 말합니다. 

이 방어 기술은  최첨단 암호화 알고리즘을 사용하여 객체 및 배열과 같은 복잡한 구조의 문자열과 숫자를 적용할 수 있습니다.

결과적으로 공격자가 일부 데이터를 검색해도 암호화되어있기 때문에 쓸모가 없게 될 가능성이 높습니다.

성능에 큰 영향을 주지 않으려면 지속적으로 엑세스하는 데이터 구조에 메모리 보호를 적용하는 것이 아니라, 자주 엑세스하지 않는 데이터 구조에 메모리 보호를 적용하는 것이 중요합니다.

키, 인증 토큰 등이 있지만 이것만으로는 공격자가 메모리에서 민감한 데이터를 긁어내는 것을 막을 수 없다는 점을 유의해야 합니다. 

그러나 브라우저 방어 및 기타 애플리케이션 수준 완화 조치와 함께 사용하면 잠재적 공격에 대한 위험성을 크게 줄일 수 있습니다. 

---

### 결론

스펙터 공격에 대한 완전한 방어를 위해 하드웨어 변경이 필요한 동안, 웹 앱에 대한 위험을 대비하기 위한 확실한 해결을 기다리기에는 큰 부담으로 다가 올 것입니다.

때문에, 최신의 브라우저 방어와 Jscrambler의 메모리 보호 기능과의 조합은 이러한 공격의 영향을 크게 줄여 줄여주고 애플리케이션 소유자가 안심할 수 있도록 도와줍니다. 

특히 다른 권장 방어 전략과 함께 사용할 때 더욱 큰 시너지 효과를 볼 수 있습니다. 

 > *원글 출처: https://blog.jscrambler.com/memory-protection-an-extra-line-of-defense-against-spectre-attacks/* 
 
---

Jscrambler 에 대해 더 알고 싶으신 가요? 

보다 철저한 방어 전략을 위해 Jscrambler 도입을 고려하신다면, 언제든지 디무브에게 문의해주세요.

감사합니다. 

