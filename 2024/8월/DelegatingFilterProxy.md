##  서블릿 필터(Servlet Filter)가 스프링 빈으로 등록 가능한 이유
- 상식적으로 스프링 컨테이너보다 큰 범위인 서블릿 컨테이너의 필터가 스프링 컨테이너에 의해 관리된다는 것은 이상
- 하지만 테스트를 해보면 필터 역시 스프링 빈으로 등록이 가능하며, 빈을 주입받을 수도 있는 것을 확인
- 과거에 실제로 필터(Filter)가 스프링 컨테이너에 의해 관리되지 않았다
- 하지만 DelegatingFilterProxy가 등장하면서 이제 이러한 설명은 더이상 유효하지 않다.

## DelegatingFilterProxy와 SpringBoot의 등장
### DelegatingFilterProxy의 등장 이전
- 필터(Filter)는 서블릿이 제공하는 기술이므로 서블릿 컨테이너에 의해 생성되며 서블릿 컨테이너에 등록이 된다. 그렇기 때문에 스프링의 빈으로 등록도 불가능했으며, 빈을 주입받을 수 없었다. 
- 하지만 필터에서도 DI와 같은 스프링 기술을 필요로 하는 상황이 발생하면서, 스프링 개발자는 필터도 스프링 빈을 주입받을 수 있도록 대안을 마련하였는데, 그것이 바로 DelegatingFilterProxy이다.

### DelegatingFilterProxy의 등장 이전 이후
- Spring 1.2부터 DelegatingFilterProxy가 나오면서 서블릿 필터(Servlet Filter) 역시 스프링에서 관리가 가능
- DelegatingFilterProxy는 서블릿 컨테이너에서 관리되는 프록시용 필터로써 우리가 만든 필터를 가지고 있다.
- 우리가 만든 필터는 스프링 컨테이너의 빈으로 등록, 요청이 오면 DelegatingFilterProxy가 요청을 받아서 우리가 만든 필터(스프링 빈)에게 요청을 위임
```
[ 동작원리 ]
1. Filter 구현체가 스프링 빈으로 등록됨
2. ServletContext가 Filter 구현체를 갖는 DelegatingFilterProxy를 생성함
3. ServletContext가 DelegatingFilterProxy를 서블릿 컨테이너에 필터로 등록함
4. 요청이 오면 DelegatingFilterProxy가 필터 구현체에게 요청을 위임하여 필터 처리를 진행함
```

### SpringBoot의 등장 이후
- SpringBoot가 아닌 Spring에서는 다음과 같이 서블릿 컨텍스트에 addFilter로 추가
```java
public class MyWebApplicationInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {

   public void onStartup(ServletContext servletContext) throws ServletException {
      super.onStartup(servletContext);
      servletContext.addFilter("myFilter", DelegatingFilterProxy.class);
   }
}
```
-  SpringBoot라면 DelegatingFilterProxy조차 필요가 없다. 왜냐하면 SpringBoot가 내장 웹서버를 지원하면서 톰캣과 같은 서블릿 컨테이너까지 SpringBoot가 제어가능하기 때문
- SpringBoot에서는 ServletContext에 필터(Filter) 빈을 DelegatingFilterProxy로 감싸서 등록하지 않아도 된다.
- SpringBoot가 서블릿 필터의 구현체 빈을 찾으면 DelegatingFilterProxy 없이 바로 필터 체인(Filter Chain)에 필터를 등록해주기 때문

### 정리
- 등장 배경: 필터에서 다른 스프링 빈의 주입이 필요해짐
- DelegatingFilterProxy의 등장 이전: 스프링 빈으로 등록 및 다른 빈 주입이 불가능했음
- DelegatingFilterProxy의 등장 이후: DelegatingFilterProxy를 통해 스프링 빈으로 등록 및 다른 빈 주입이 가능해짐
- SpringBoot의 등장 이후: 웹서버를 직접 관리하면서 DelegatingFilterProxy조차 필요없게됨