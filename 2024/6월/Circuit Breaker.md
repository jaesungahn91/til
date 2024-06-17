## Circuit Breaker
> 장애가 발생한 외부 서비스를 탐지하고, 요청을 보내지 않도록 차단할 필요
### Circuit Breaker란?
- Fault Tolerance(=장애 허용 시스템) 에서 사용되는 대표적인 패턴으로써 서비스에서 타 서비스 호출 시 에러 응답지연, 무응답, 일시적인 네트워크 문제 등을 요청이 무작위로 실패하는 경우에 Circuit를 오픈하여 메세지가 다른 서비스로 전파되지 못하도록 막고 미리 정의해놓은 Fallback Response를 보내어 서비스 장애가 전파되지 않도록 하는 패턴(대표적으로 MSA 환경에서 사용)
- 
### Circuit Breaker Basic Concept
- Circuit Breaker 는 3가지 상태에 대한 FSM(Final State Machine)을 기반으로 동작
#### Closed

#### Open

#### Half Open

## Resilience4j
### Resilience4j란?
- [Resilience4J](https://resilience4j.readme.io/docs)는 함수형 프로그래밍으로 설계된 경량(lightweight) 장애 허용(fault tolerance) 라이브러리로, 서킷브레이커 패턴을 위해 사용
- fault-tolerance란 하나 이상의 구성 요소에 문제가 생겨도 시스템이 중단없이 계속 작동할 수 있는 시스템을 의미
- Resilience4J를 적용하면 외부 서비스에 장애가 발생하여도 자신의 시스템은 계속 작동할 수 있는 것