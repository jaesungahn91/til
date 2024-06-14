## Circuit Breaker
### Circuit Breaker란?
- 서킷브레이커는 해석 그대로 **누전 차단기**라는 뜻을 지님. 누전 차단기는 **전기 회로에서 과부하가 걸리거나 단락으로 인한 피해를 막기 위해 자동으로 회로를 정지시키는 장치**라고 위키백과에서 표현하고 있다.
- 서버에서 사용하는 서킷브레이커도 **외부 API 통신의 장애 전파를 막기 위해 장애를 탐지하면 외부와의 통신을 차단하는 역할**을 한다.
- 서킷브레이커가 실행(오픈)되면 **Fail Fast 함으로써 외부 서비스가 장애가 나더라도 빠르게 에러를 응답** 받을 수 있는 장점이 있으며 개발자가 지정한 행위를 리턴 받을 수 있다.

## Circuit Breaker 와 Retry의 차이?

## Circuit Breaker Basic Concept

## Spring에서 사용할 수 있는 Circuit Breaker 라이브러리 목록

## Resilience4j
