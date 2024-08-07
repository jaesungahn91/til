## URI Versioning
- URI 경로에 버전을 명시
- major version(v1) 하나만 사용하여 아래와 같이 표시. 현재 가장 흔히 쓰이는 방법
```java
@GetMapping(value = "/v1/hello")

https://www.example.com/api/v1/hello
```

## Query Request Parameter
- Query Request parameter에 버전을 명시하는 방법. 구현 관점에서 API를 버전화하는 간단한 방법

```java
(@RequestParam String version)

http://www.example.com/hello?version=1
```

## Custom header
- 커스텀 헤더를 제공하여 버전화
```java
@GetMapping(value = "/hello", headers="X-API-VERSION=1")

X-API-VERSION: 1
```

## Media Type Versioning
- HTTP Accept header를 적용
```java
@GetMapping(value = "/hello", produces = "application/json; v=1")

Accept: application/json; v=1
```