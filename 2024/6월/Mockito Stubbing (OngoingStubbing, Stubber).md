## 테스트 스텁
테스트 스텁(Test Stub)은 테스트 호출 중 테스트 스텁은 테스트 중에 만들어진 호출에 대해 미리 준비된 답변을 제공하는 것

## When 메소드를 이용해서 스터빙
Mockito의 when은 Test Double 중 Stub를 만들 수 있다. when을 통해 Mock 객체의 메서드를 호출 했을 때 특정한 응답을 주도록 만들 수 있다. (Stub : Mock 객체에 특정한 입력 시 특정한 출력을 주도록 만드는 것)

### OngoingStubbing 메소드
OngoingStubbing 메소드란 when에 넣은 메소드의 리턴 값을 정의해주는 메소드 (OngoingStubbing = "진행 중인 스터빙"이라는 뜻)
```java
when({스터빙할 메소드}).{OngoingStubbing 메소드};
```
#### thenReturn
- thenReturn을 사용하면 특정한 응답을 줄 수 있다

#### thenAnwer
- thenReturn은 특정한 입력에 대해 한가지 응답만이 가능하다. 따라서 여러번 호출해도 매번 응답이 똑같다. 하지만, 하나의 입력에 대해 매번 바뀌는 응답을 받고 싶을 수 있다. 이때 thenAnswer을 사용
- 스터빙한 메소드 호출 후 어떤 작업을 할지 custom하게 정의
- OngoingStubbing 메소드를 메소드 체이닝으로 쓰면 메소드 호출마다 다른 스터빙을 호출
```java
when(A()).thenReturn(a).thenReturn(b);

or 

when(A()).thenReturn(a, b);
```

#### doThrow
- doThrow를 사용하면 메서드가 호출되었을 때 애러를 발생시킬 수 있다

### Stubber 메소드
- Stubber 메소드는 OngoingStubbing과 다르게 when에 스터빙할 클래스를 넣고 그 후에 메소드를 호출
- 스터빙이 반드시 실행되야 하는 경우 사용하는 메소드이기 때문
- 리턴 타입이 void 메소드 테스트가 가능
```java
{Stubber 메소드}.when({스터빙할 클래스}).{스터빙할 메소드}
```

#### doReturn
- 스터빙 메소드 호출 후 어떤 행동을 할 건지 정의

#### doThrow
- 스터빙 메소드 호출 후 어떤 Exception을 throw할  건지 정의

#### doAnswer
- 스터빙 메소드 호출 후 작업을 할지 custom하게 정의

#### doNothing
- 스터빙 메소드 호출 후 어떤 행동도 하지 않게 정의