## Circuit Breaker
> 장애가 발생한 외부 서비스를 탐지하고, 요청을 보내지 않도록 차단할 필요

### Circuit Breaker란?
- Fault Tolerance(=장애 허용 시스템) 에서 사용되는 대표적인 패턴으로써 서비스에서 타 서비스 호출 시 에러 응답지연, 무응답, 일시적인 네트워크 문제 등을 요청이 무작위로 실패하는 경우에 Circuit를 오픈하여 메세지가 다른 서비스로 전파되지 못하도록 막고 미리 정의해놓은 Fallback Response를 보내어 서비스 장애가 전파되지 않도록 하는 패턴(대표적으로 MSA 환경에서 사용)

### Circuit Breaker Basic Concept
- Circuit Breaker 는 3가지 상태에 대한 FSM(Final State Machine)을 기반으로 동작
#### 상태
- Closed : 모든 것이 정상인 상황
- Open : 외부(Callee)에 장애가 발생한 상황
	- 미리 지정해준 fall back 응답을 수행할 수 있다
	- 또는 event publisher 를 이용해서 이벤트를 발생시킬 수도 있다
- Half Open : Open 상태가 되고 일정 시간이 지난 상황
	- 실패율을 측정해서 CLOSE 또는 OPEN 으로 변경될 수 있는 상태
- Disabled : 항상 접근 허용
- Forced Open : 항상 접근 거부

### Circuit Breaker State Transit
- circuit breaker 는 metric 을 수집하고 분석한다. 수집한 결과는 원형 배열 형태의 sliding window 에 담긴다.
#### Count-based sliding window
- n 개의 원형 배열로 구현된다.
- 각 원소들은 FIFO 방식으로 갱신된다.
```
특정 요청이 3번 연속 실패할 경우 요청을 차단한다.
차단했던 요청이 3번 연속 성공 할 경우 요청을 전송한다.
```
#### Time-based sliding window
- n 개의 원형 배열로 구현된다.
- 단위는 epoch second 를 사용한다.
    - 10 으로 설정할시, 1초씩 10개의 원소가 생겨난다.
- 각 원소들은 시간의 흐름에 따라 FIFO 방식으로 갱신된다.
```
특정 요청이 5번 연속 n초 이상 시간초과 할 경우 요청을 차단한다.
```

### Circuit Breaker 장점
- 장애 감지 및 격리 : 타임아웃으로 인한 장애 전파를 감지 및 격리
- 자동 시스템 복구 : 차단 이후 서비스가 정상인지 주기적으로 검사
- 빠른 실패 및 고객 응답 : 타임아웃 동안 기다리며 자원을 낭비할 필요 없음
- 장애 서비스로의 부하 감소 : 외부 서비스의 상황 악화를 막아 준다.
- 장애 대안 커스터마이징 : 장애가 발생할 경우 다른 소스로부터 값을 얻어오거나 캐싱해둔 값을 불러오는 듯 다른 장애 대안을 커스터마이징이 가능하다.
## Resilience4j
### Resilience4j란?
- [Resilience4J](https://resilience4j.readme.io/docs)는 함수형 프로그래밍으로 설계된 경량(lightweight) 장애 허용(fault tolerance) 라이브러리로, 서킷브레이커 패턴을 위해 사용
- fault-tolerance란 하나 이상의 구성 요소에 문제가 생겨도 시스템이 중단없이 계속 작동할 수 있는 시스템을 의미
- Resilience4J를 적용하면 외부 서비스에 장애가 발생하여도 자신의 시스템은 계속 작동할 수 있는 것