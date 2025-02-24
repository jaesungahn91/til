**Compact Strings**는 Java 9에서 도입된 새로운 문자열 구현 방식으로, 메모리 사용량을 줄이기 위해 설계. Compact Strings의 핵심 개념은 문자열의 내용을 저장하는 방식에서 비롯된다.

### 배경
기존 Java의 문자열(java.lang.String)은 내부적으로 UTF-16 인코딩을 사용하여 문자 배열(char[])에 저장. UTF-16은 한 글자를 2바이트(16비트)로 표현하기 때문에, ASCII 문자처럼 1바이트(8비트)로 충분히 표현 가능한 경우에도 2바이트를 사용하므로 메모리 낭비가 발생 가능.

### Compact Strings의 구현 방식
Compact Strings는 문자열이 **ASCII 문자만 포함된 경우 1바이트 배열**(byte[])을 사용하고, **그 외의 경우 UTF-16 인코딩을 사용**하는 방식
- ASCII 문자로만 구성된 문자열: byte[] 배열에 저장 (1바이트)
- 비-ASCII 문자 포함 문자열: UTF-16을 사용하여 저장 (2바이트)
이로 인해 메모리 사용량이 줄어들고, 일부 경우 성능이 향상

### Compact Strings의 이점
1. **메모리 절약**
ASCII 문자열에 대해 50%의 메모리를 절약.
2. **캐시 효율성 향상**
메모리 사용량이 줄어들어 CPU 캐시 효율성이 향상.
3. **GC(가비지 컬렉션) 부담 감소**
메모리 사용량이 줄어들어 GC의 부담이 감소.

### 동작 방식
Java 9의 java.lang.String 클래스 내부에는 다음과 같은 필드가 추가.
1. byte[] value - 문자열 데이터를 저장하는 필드
2. byte coder - 문자열의 인코딩 방식을 나타내는 필드 (LATIN1 또는 UTF16)

coder 값에 따라 문자열이 ASCII 문자열인지, UTF-16 문자열인지를 결정
```java
String asciiString = "Hello";  // ASCII 문자열, 1바이트 배열 사용
String utf16String = "안녕하세요";  // UTF-16 문자열, 2바이트 배열 사용
```
