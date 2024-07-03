## 웹 브라우저가 도메인의 IP 주소를 조회
### DNS
- DNS(Domain Name System)란, 도메인 이름을 IP 주소로 변환하여 주는 시스템을 말한다.
- DNS Lookup 이란 DNS 서버에서 인터넷 도메인 이름을 사용해 인터넷 주소 (ip)를 알아내는 과정
#### 캐싱
- DNS 캐싱이란 DNS 서버 안에 이전에 처리한 DNS 쿼리 결과값을 한시적으로 저장하는 것
- 브라우저 캐시 -> OS 캐시 -> 라우터 캐시 -> ISP 캐시
#### 작동 과정
```
1. 사용자가 브라우저 주소창에 URL을 입력
2. 브라우저가 입력된 도메인의 IP 주소를 알아내기 위해 운영체제를 거쳐 DNS Resolver에 요청
3. DNS Resolver는 로컬 DNS 캐시에 이전에 방문한 도메인 정보가 있는지 확인. 만약 캐시에 기록이 있다면, 추가적인 DNS 조회가 필요하지 않다. 이 단계에서 바로 IP 주소를 응답해 줄 수 있다.
4. 캐시에 정보가 없는 경우, DNS Resolver는 루트 DNS 서버에서 최상위 도메인(TLD) DNS 서버의 IP 주소 정보를 알아낸다.
5. DNS Resolver는 최상위 도메인(TLD) DNS 서버에 연결하여 권한 네임 서버(Authoritative Name Server)의 IP 주소를 요청하여 받아낸다.
6. 최종적으로 DNS Resolver는 권한 네임 서버에서 도메인의 최종 IP 주소를 마침내 알아낸다. 이렇게 받아 온 IP 주소는 로컬 DNS 캐시에 저장된다. 이후, 같은 요청이 있다면 DNS Resolver에서 바로 응답이 가능.
7. 받아온 최종 IP 주소를 다시 거꾸로 운영체제를 거쳐 브라우저로 전달한다.
```

## 웹 브라우저가 찾은 IP 주소를 기반으로 서버와의 TCP 연결 시작
### TCP
- TCP(Transmission Control Protocol)는 IP 프로토콜 위에서 동작하는 전송 계층 프로토콜로, 패킷 전송의 신뢰성을 보장하기 위해 설계
#### 3 way handshakes
TCP 3-way handshake는 클라이언트와 서버 간의 연결을 설정하는 과정
1. 클라이언트는 서버에 연결을 요청하기 위해 SYN(Synchronize) 패킷을 보낸다. 이때 클라이언트는 서버의 응답을 기다리는 SYN_SENT 상태로 전환한다.
2. 서버는 LISTEN 상태에서 클라이언트의 SYN 요청을 받으면, 클라이언트에게 요청을 수락하는 ACK(Acknowledgement) 패킷과 함께 자신의 SYN 패킷을 보낸다. 그런 다음 서버는 SYN_RCVD(SYN_RECEIVED) 상태로 변경되며, 클라이언트의 ACK 패킷을 기다린다.
3. 3. 클라이언트는 서버로부터 SYN-ACK 패킷을 받은 후, 서버에게 ACK 패킷을 보내어 연결 설정을 완료한다. 이후 클라이언트와 서버는 모두 ESTABLISHED 상태가 되어 데이터 통신을 시작할 수 있게 된다.

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
- Bearer 토큰은 쉽게 복호화 할 수 없고 OAuth는 프레임워크의 인증 및 리소스 서버는 SSL/TLS를 필수로 사용한다. 게다가 서버에서 토큰의 리소스 접근 권한을 쉽게 철회할 수도 있고, 토큰의 유효기간을 설정할 수 있어서 안전하게 리소스를 보호할 수 있다. OAuth 프레임워크는 또 제한적으로 리소스 접근을 정교하게 설정할 수 있다.
- Bearer 토큰 자체가 메타데이터를 가지고 있어서 서버는 토큰을 발급만 하고 보관할 필요가 없다. 사용자가 아무리 많아도 토큰을 검증하는 과정은 같은 시간이 소요된다. 게다가 여러 서비스 및 서버 간에 토큰을 공유할 수 있어서 사용자에게 편리한 경험을 제공.
- 하지만 Bearer 인증도 보안 측면에서 문제가 있다.
- 만약 Bearer 토큰이 외부에 노출되면 다른 서비스도 토큰으로 바로 리소스를 접근할 수 있다. 하지만 서버가 OAuth 프레임워크에 정의된 보안 장치를 잘 구축하면 문제가 없고, 노출이 발견되면 해당 토큰의 권한을 철회할 수 있다.

## 웹 서버가 요청을 처리하고 응답을 다시 웹 브라우저로 전송
### 304 Not Modified
- 304 not modified란 요청한 자원이 변경되지 않았으므로 클라이언트에서 캐시된 자원을 사용하도록 권하는 상태코드다. 간단히 말하면 서버에서 요청된 자원을 재전송할 필요가 없음을 나타내는 것이다. 클라이언트가 캐시된 자원을 사용하게 하게 되면 연결을 통해 다시 전체 자원을 전송하는 것보다 효율적

## 웹 브라우저가 전송 받은 콘텐츠를 렌더링
### 과정
```
1. 브라우저가 서버로부터 HTML 문서를 모두 전달 받는다. (Loader가 서버로부터 HTML을 불러옴)
2. 렌더링 엔진은 전달 받은 HTML 문서를 파싱하여 DOM 트리를 구축한다.
3. 외부 CSS 파일과 함께 포함된 스타일 요소를 파싱하여 CSSOM 트리를 만든다. (CSS Object Model) CSSOM은 DOM이 어떻게 화면에 표시될 지를 알려주는 역할을 한다.
4. DOM 트리와 CSSOM 트리를 합쳐 렌더 트리(Render Tree)를 구축한다. 렌더 트리는 화면에 표시되어야 할 모든 노드의 컨텐츠, 스타일 정보를 포함하고 있는 트리이다.  
    (DOM 트리의 최상단인 document 객체부터 각 노드를 순회하면서 각각에 맞는 CSSOM을 찾아서 규칙을 적용한다. 그러면서 렌더와 관련된 요소들을 렌더 트리에 포함시킨다. 이 때, meta 태그나 `display: none;` 속성을 가진 요소들은 렌더와 관계가 없기 때문에 렌더 트리에 포함되지 않는다.)
5. 렌더 트리의 요소들의 크기와 위치를 계산한다.
6. 계산된 크기와 위치에 맞게 화면에 출력한다. `Layout` - `Paint` - `Composite`의 세 단계로 이루어진다.
```