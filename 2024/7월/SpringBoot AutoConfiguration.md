## SpringBoot AutoConfiguration 이란?
- Spring Boot의 대표적인 기능 중 하나.
- Spring Boot와 연동되는 라이브러리의 디펜던시(대표적으로 \*-starter)를 추가해주면 빈 설정과 생성을 자동으로 해주는 편의 기능
- ex) spring-boot-starter-data-redis
	- redisTemplate 빈 자동 설정
```gradle
dependencies {
	implementation 'org.springframework.boot:spring-boot-starter-data-redis'
}
```

## 작동 원리
- AutoConfiguration은 spring-boot-project 하위 모듈 spring-boot-autoconfigure에서 구현.
- spring-boot-autoconfigure에는 data, jdbc, web, jackson, batch, r2dbc, mongo 등등의 하위 디렉터리가 존재하고 각각의 AutoConfiguration 설정이 포함돼 있다.

- `/data/redis/`의 RedisAutoConfiguration.java
```java
@AutoConfiguration // (1)
@ConditionalOnClass(RedisOperations.class) // (2)
@EnableConfigurationProperties(RedisProperties.class) // (3)
@Import({ LettuceConnectionConfiguration.class, JedisConnectionConfiguration.class }) // (4)
public class RedisAutoConfiguration {
	...
}
```

- @AutoConfiguration(1)은 Spring Boot가 자동으로 적용하는 설정 클래스로 지정하는 어노테이션.
> Indicates that a class provides configuration that can be automatically applied by Spring Boot
> 출처 : https://docs.spring.io/spring-boot/api/java/org/springframework/boot/autoconfigure/AutoConfiguration.html

- @ConditionalOnClass(2)은 OnClassCondition 어노테이션을 확장한 어노테이션으로 RedisAutoConfiguration의 컴포넌트 등록 조건을 명시.
	- @ConditionalOnClass(RedisOperations.class)은 classpath에 RedisOperation.class가 존재해야 하는 조건을 의미
	- RedisOperation.class는 spring-data-redis에 포함
	- spring-data-redis는 spring-autoconfigure에 옵셔널 의존성으로 추가되어 있다.
	- 따라서 spring-data-redis 의존성을 추가하거나 해당 의존성을 포함한 상위 의존성(spring-boot-starter-data-redis)을 추가해야줘 야한다.
```gradle
<spring-boot-autoconfigure/build.gradle>

...
optional("org.springframework:spring-data-redis")
...
```

- @EnableConfigurationProperties(RedisProperties.class)(3)는 @ConfigurationProperties 어노테이션이 붙은 RedisProperties 빈을 활성화한다.(spring.redis prefix 설정을 로드)

- RedisAutoConfiguration은 RedisTemplate과 StringRedisTemplate 두 개의 빈을 생성.
- 두 빈은 redisTemplate 이름의 빈과 StringRedisTemplate 타입의 빈이 없는 경우에만 조건부적으로 생성.
```java
@Bean
@ConditionalOnMissingBean(name = "redisTemplate")
@ConditionalOnSingleCandidate(RedisConnectionFactory.class)
public RedisTemplate<Object, Object> redisTemplate(RedisConnectionFactory redisConnectionFactory) {
	RedisTemplate<Object, Object> template = new RedisTemplate<>();
	template.setConnectionFactory(redisConnectionFactory);
	return template;
}

@Bean
@ConditionalOnMissingBean
@ConditionalOnSingleCandidate(RedisConnectionFactory.class)
public StringRedisTemplate stringRedisTemplate(RedisConnectionFactory redisConnectionFactory) {
	return new StringRedisTemplate(redisConnectionFactory);
}
```

- @Import({ LettuceConnectionConfiguration.class, JedisConnectionConfiguration.class })(4) 는 Lettuce와 Jedis Connection Configuration 컴포넌트를 임포트 한다. 
- 두 개의 Configuration 컴포넌트 역시 조건부로 등록
```java
@Configuration(proxyBeanMethods = false)
@ConditionalOnClass(RedisClient.class)
@ConditionalOnProperty(name = "spring.data.redis.client-type", havingValue = "lettuce", matchIfMissing = true)
class LettuceConnectionConfiguration extends RedisConnectionConfiguration {
	...

	@Bean
	@ConditionalOnMissingBean(RedisConnectionFactory.class)
	LettuceConnectionFactory redisConnectionFactory(
			ObjectProvider<LettuceClientConfigurationBuilderCustomizer> builderCustomizers,
			ClientResources clientResources) {
		LettuceClientConfiguration clientConfig = getLettuceClientConfiguration(builderCustomizers, clientResources,
				getProperties().getLettuce().getPool());
		return createLettuceConnectionFactory(clientConfig);
	}
	
	...
}

---------------------------------------------------------------------

@Configuration(proxyBeanMethods = false)
@ConditionalOnClass({ GenericObjectPool.class, JedisConnection.class, Jedis.class })
@ConditionalOnMissingBean(RedisConnectionFactory.class)
@ConditionalOnProperty(name = "spring.data.redis.client-type", havingValue = "jedis", matchIfMissing = true)
class JedisConnectionConfiguration extends RedisConnectionConfiguration {
	...

	@Bean
	JedisConnectionFactory redisConnectionFactory(
			ObjectProvider<JedisClientConfigurationBuilderCustomizer> builderCustomizers) {
		return createJedisConnectionFactory(builderCustomizers);
	}

	...
}

```
- spring-boot-starter-data-redis는 lettuce-core을 포함하는 의존성이므로 LettuceConnectionConfiguration는 기본 컴포넌트로서 로드.
- 반면 JedisConnectionConfiguration는 옵셔널하게 로드하는 컴포넌트