## 웹 브라우저가 도메인의 IP 주소를 조회
### DNS
- 브라우저 캐시 -> OS 캐시 -> 라우터 캐시 -> ISP 캐시
- thired-level 도메인
- DNS Lookup 이란 DNS 서버에서 인터넷 도메인 이름을 사용해 인터넷 주소 (ip)를 알아내는 과정

## 웹 브라우저가 찾은 IP 주소를 기반으로 서버와의 TCP 연결 시작
### TCP
- 인터넷 프로토콜(IP, Internet Protocol)을 사용하여 이러한 연결을 구축(TCP 라는 전송 제어 프로토콜을 사용)
#### 3 way handshakes
- 

## 웹 브라우저가 HTTP 요청을 서버로 전송
### User-Agent Header
- user agent는 HTTP 요청을 보내는 디바이스와 브라우저 등 사용자 소프트웨어의 식별 정보를 담고 있는 request header의 한 종류
```
User-Agent: <product> / <product-version> <comment>

<product> : product 식별자  
<product-version> : product 버전 번호  
<comment> : 추가적인 product 의 정보
```

```
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36
```

### OAuth 2.0 Bearer Authentication
- [HTTP 인증 프레임워크](https://developer.mozilla.org/ko/docs/Web/HTTP/Authentication)는 [RFC 7235](https://datatracker.ietf.org/doc/html/rfc7235)에 정의되어 있고 아래와 같은 인증 헤더를 요청에 사용
```
Authorization: <type> <credentials>
```
#### Basic 인증
- Basic 인증 방식은 가장 기본적인 HTTP 인증 방식이다. Base64로 인코딩한 “사용자ID:비밀번호” 문자열을 `Basic`과 함께 인증 헤더에 입력하며, [RFC 7617](https://datatracker.ietf.org/doc/html/rfc7617)에 정의
	- Base64는 쉽게 복호화가 가능. 단순 base64 인코딩된 사용자 ID와 비밀번호를 HTTP로 전달하면 요청의 보안이 보장않는다. 따라서 Basic 인증을 사용하는 요청은 꼭 HTTPS, SSL/TLS로 통신해야 안전하다.
#### Bearer 인증
- Bearer 인증 방식은 OAuth 2.0 프레임워크에서 사용하는 토큰 인증 방식. “Bearer”은 소유자라는 뜻인데, “이 토큰의 소유자에게 권한을 부여해줘”라는 의미로 이름을 붙였다. [RFC 6750](https://tools.ietf.org/html/rfc6750)에 표준명세서가 있다.
- OAuth는 제 3자의 클라이언트에게 보호된 리소스를 제한적으로 접근하게 해주는 프레임워크.
- Bearer 토큰은 OAuth 프레임워크에서 액세스 토큰으로 사용하는 토큰의 유형
- Bearer 토큰은 쉽게 복호화 할 수 없고 OAuth는 프레임워크의 인증 및 리소스 서버는 SSL/TLS를 필수로 사용해요. 게다가 서버에서 토큰의 리소스 접근 권한을 쉽게 철회할 수도 있고, 토큰의 유효기간을 설정할 수 있어서 안전하게 리소스를 보호할 수 있어요. OAuth 프레임워크는 또 제한적으로 리소스 접근을 정교하게 설정할 수 있어요.
- Bearer 토큰 자체가 메타데이터를 가지고 있어서 서버는 토큰을 발급만 하고 보관할 필요가 없어요. 사용자가 아무리 많아도 토큰을 검증하는 과정은 같은 시간이 소요돼요. 게다가 여러 서비스 및 서버 간에 토큰을 공유할 수 있어서 사용자에게 편리한 경험을 제공해요.
 - 하지만 Bearer 인증도 보안 측면에서 문제가 있어요.
- 만약 Bearer 토큰이 외부에 노출되면 다른 서비스도 토큰으로 바로 리소스를 접근할 수 있어요. 하지만 서버가 OAuth 프레임워크에 정의된 보안 장치를 잘 구축하면 문제가 없고, 노출이 발견되면 해당 토큰의 권한을 철회할 수 있어요.

## 웹 서버가 요청을 처리하고 응답을 다시 웹 브라우저로 전송
### http 300번대 응답 코드 동작원리(캐시)
- 

## 웹 브라우저가 전송 받은 콘텐츠를 렌더링
- 참고 자료 : 웹페이지를 표시한다는 것: 브라우저는 어떻게 동작하는가
- user agent
- 브라우저 렌더링