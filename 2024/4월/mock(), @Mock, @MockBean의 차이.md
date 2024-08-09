## @Mock과 mock(\*.class)
### Static Method
- Mockito.mock()
```java
TestRepository testRepository = mock(TestRepository.class);
```
- Mockito.when()
```java
when(testRepository.test()).thenReturn("test");
```

### Annotation
- Mockito.mock()메서드와 달리 테스트 클래스에서만 사용
- Mockito annotation을 활성화해야만, @Mock 어노테이션을 사용 가능
	- Junit4 - MockitoJunitRunner를 사용해 활성화
	- Junit5 - @ExtendWith(MockitoExtension.class)로 활성화
```java
@Mock
private TestRepository testRepository
```

## @MockBean이란?
- 스프링 애플리케이션 컨텍스트에 Mock 객체를 추가하기 위해 @MockBean 을 사용
- 해당 애노테이션으로 mocking 된 객체는 스프링 애플리케이션 컨텍스트에서 동일한 유형을 가진 기존 빈을 대체
- Junit5에서는 @ExtendWith(SpringExtension.class)을 사용

```java
@MockBean 
TestRepository testRepository;
```

## 결론
### @Mock
- 단위 테스트에서 사용된다.
- Mock 객체를 직접 생성하여 사용하므로, 스프링 컨텍스트와 관련이 없다.

### @MockBean
- 통합 테스트를 수행할 때 사용된다.
- Mock 객체를 생성하고, 스프링 컨텍스트에 등록을 한다.
    - 스프링 컨텍스트에 직접 생성하므로, 관련된 객체와 연결하여 통합 테스트를 수행할 수 있다.