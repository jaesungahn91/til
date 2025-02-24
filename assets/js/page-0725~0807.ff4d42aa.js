(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{728:function(a,t,e){"use strict";e.r(t);var s=e(2),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"_0725-0807"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0725-0807"}},[a._v("#")]),a._v(" 0725 ~ 0807")]),a._v(" "),e("h2",{attrs:{id:"_0727-oom-종류-및-조치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0727-oom-종류-및-조치"}},[a._v("#")]),a._v(" 0727 - OOM 종류 및 조치")]),a._v(" "),e("p",[a._v("OOM(Out Of Memory) : 메모리 부족 현상")]),a._v(" "),e("blockquote",[e("p",[a._v("Heap\n"),e("img",{attrs:{src:"https://user-images.githubusercontent.com/42403023/127438023-0a746f66-b8f2-498f-b8e3-363f1351f1c0.png",alt:"image"}})])]),a._v(" "),e("ul",[e("li",[a._v("Java 7 까지의 Heap 구조, 8부터 PermGen 부분이 Metaspace로 변경되었다.\n"),e("ul",[e("li",[a._v("PermGen 은 class 혹은 method 코드가 저장되는 영역으로 Heap영역에 위치한다.")]),a._v(" "),e("li",[a._v("Metaspace는 Classloader가 로드한 class 들의 metadata를 저장되는 공간으로 Heap이 아닌 Native 영역에 위치시킨다.")]),a._v(" "),e("li",[a._v("가장 큰 차이는 클래스의 metadata를 native 영역으로 옮김으로써 OS가 동적으로 조정할 수 있도록 한 것")])])]),a._v(" "),e("li",[a._v("Runtime Data Area는 JVM이 OS로부터 할당받은 메모리 공간을 말하며 크게 5가지 영역으로 나눌 수 있다.")]),a._v(" "),e("li",[a._v("Heap은 런타임시 동적으로 할당하여 사용하는 영역으로 class를 이용해 instance를 생성하면 Heap에 저장된다.")])]),a._v(" "),e("blockquote",[e("p",[a._v("메모리 누수(Memory Leak)")])]),a._v(" "),e("ul",[e("li",[a._v("메모리 사용량\n"),e("ul",[e("li",[a._v("시스템 작업관리자에서 나오는 메모리 사용량으로는 측정의 정확도가 매우 떨어진다.")]),a._v(" "),e("li",[a._v("Runtime 클래스에 totalMemory() - freeMemory()를 통해 자바 어플리케이션의 메모리 사용량을 로그로 출력\n"),e("ul",[e("li",[a._v("long freeMemory() : Returns the amount of free memory in the jvm.")]),a._v(" "),e("li",[a._v("long totalMemory() : Returns the total amount of memory in the jvm.")])])]),a._v(" "),e("li",[a._v("Jprobe 또는 Optimizeit와 같은 개발도구로 측정")])])]),a._v(" "),e("li",[a._v("메모리 누수 발생 요인\n"),e("ul",[e("li",[a._v("Java에서는 GC에 의해 메모리가 자동 관리 되지만 memory leak가 발생할 수 있다.")]),a._v(" "),e("li",[a._v("루트 참조들로부터 직간접적으로 참조가 되는(reachable) 모든 객체를 현재 사용중인 객체라고 판단하고, 나머지는 쓰레기 객체라고 판단하여 JVM은 이러한 쓰레기 객체를 수거한다.\n"),e("ul",[e("li",[a._v("루트 참조는 다음과 같이 크게 3가지가 존재한다.\n"),e("ul",[e("li",[a._v("static 변수에 의한 객체 참조")]),a._v(" "),e("li",[a._v("현재 자바 스레드 스택내의 지역변수, 매개 변수에 의한 객체 참조")]),a._v(" "),e("li",[a._v("JNI 프로그램에 의해 동적으로 만들어지고 제거되는 JNI global 객체 참조")])])]),a._v(" "),e("li",[a._v("하지만, 실제로 사용되지 않는 객체의 Reference를 프로그램에서 잡고 있으면 GC에 의해 처리되지 않고, 프로그램 내에서도 접근하여 사용될 수 없는 쓰레기 객체로 메모리를 점유하게 된다.\n"),e("ul",[e("li",[a._v("상호참조가 많은 경우 하나의 객체 잠조를 null처리 해주지 않는 실수")])])]),a._v(" "),e("li",[a._v("이로 인해 메모리 누수가 발생하며 OOM이 발생하여 프로그램이 종료되는 심각한 현상이 발생한다.")])])])])])]),a._v(" "),e("blockquote",[e("p",[a._v("OOME(Out Of Memory Error)")])]),a._v(" "),e("ul",[e("li",[a._v("객체를 생성하는 과정에서 힙 공간에 객체를 할당하기 위한 공간이 부족할 경우 발생한다.")]),a._v(" "),e("li",[a._v("해당 경우 GC는 새로운 객체를 생성할 수 있는 공간을 확보할 수 없거나 GC를 수행하는 데 과도한 시간이 소비되어 메모리를 사용하지 못하는 상황에서 발생할 수 있다.")]),a._v(" "),e("li",[a._v("기본 할당조건을 충족하지 못하는 경우 네이티브 라이브러리 코드에 의해 발생할 수 있다.(스왑 공간 부족)")])]),a._v(" "),e("blockquote",[e("p",[a._v("OOME 종류 및 원인")])]),a._v(" "),e("ul",[e("li",[a._v("java.lang.OutOfMemoryError : Java heap space(Java 힙 공간)\n"),e("ul",[e("li",[a._v("원인\n"),e("ul",[e("li",[a._v("자바 힙 공간에 새로운 객체를 생성할 수 없는 경우에 발생한다.")]),a._v(" "),e("li",[a._v("메모리 누수가 아닌 지정한 힙 크기(혹은 기본 크기)가 애플리케이션에 충분하지 않은 경우에도 발생한다.")]),a._v(" "),e("li",[a._v("혹은, 생명주기가 긴 애플리케이션의 경우 finalize를 과도하게 사용할 때 발생하기도 한다. (finalize는 소멸을 명시적으로 할 때 사용하나 GC에 마킹하는 데 오래걸리는 단점이 있다)")])])]),a._v(" "),e("li",[a._v("조치\n"),e("ul",[e("li",[a._v("JVM Option을 통해 Heap size를 늘려 해결할 수 있다.")])])])])]),a._v(" "),e("li",[a._v("java.lang.OutOfMemoryError : GC Overhaed limit exceeded(GC 오버헤드 한도 초과)\n"),e("ul",[e("li",[a._v("원인\n"),e("ul",[e("li",[a._v("메모리가 부족하여 가비지 컬렉션이 이루어졌지만, 새로 확보된 메모리가 전체 메모리의 2% 미만일 때 발생한다.")]),a._v(" "),e("li",[a._v("더 이상 가비지 컬렉션을 할 수 없을 정도로 메모리를 사용한다는 것이다.")])])]),a._v(" "),e("li",[a._v("조치\n"),e("ul",[e("li",[a._v("힙 크기를 늘린다.")]),a._v(" "),e("li",[a._v("XX:-UseGCOverheadLimit 선택사항을 추가하여 에러가 발생하는 초과 오버헤드 GC 제한 명령을 해제할 수 있다.")])])])])]),a._v(" "),e("li",[a._v("java.lang.OutOfMemoryError: Requested array size exceeds VM limit(요청 배열 크기가 VM 제한 초과)\n"),e("ul",[e("li",[a._v("원인\n"),e("ul",[e("li",[a._v("애플리케이션(혹은 애플리케이션을 사용하는 API)이 힙 공간보다 큰 배열을 할당을 시도하는 경우 발생한다.")]),a._v(" "),e("li",[a._v("힙공간 사이즈가 너무 작은경우\n"),e("ul",[e("li",[a._v("배열 요소를 계산하고 더하는 등 배열을 키우는 경우")])])])])])])]),a._v(" "),e("li",[a._v("java.lang.OutOfMemoryError: Metaspace\n"),e("ul",[e("li",[a._v("원인\n"),e("ul",[e("li",[a._v("자바 클래스 메타데이터는 원시 메모리(=메타 공간)에 할당된다.")]),a._v(" "),e("li",[a._v("클래스 메타데이터가 할당될 메타 공간이 모두 소모되면 발생한다.")]),a._v(" "),e("li",[a._v("클래스 메타데이터가 할당될 공간은 MaxMetaSpaceSize 매개변수로 제한된다.")])])]),a._v(" "),e("li",[a._v("조치\n"),e("ul",[e("li",[a._v("MaxMetaSpaceSize 값을 늘려 설정한다. 자바 힙과 동일한 주소 공간에 할당된다.")]),a._v(" "),e("li",[a._v("자바 힙의 크기를 줄이면 더 많은 공간을 확보할 수 있다. 자바 힙공간에 여유가 있는 경우에 고려해 볼 수 있다.")]),a._v(" "),e("li",[a._v("heap영역과 perm 영역을 과하게 설정하면, native 영역과 stack 영역이 적은 공간으로 설정되어 이 두 영역의 공간부족에러가 발생 할 수도 있다.")])])])])]),a._v(" "),e("li",[a._v("java.lang.OutOfMemoryError: request size bytes for reason. Out of swap space?\n"),e("ul",[e("li",[a._v("원인\n"),e("ul",[e("li",[a._v("자바 HotSpot VM 코드가 네이티브 힙 고갈이 되어 네이티브 힙에 할당할 수 없는 경우 발생한다.")]),a._v(" "),e("li",[a._v("이 메시지는 실패한 요청의 바이트 크기와 메모리 요청의 이유를 나타내며 대개의 경우 할당에 실패한 소스 모듈의 이름을 출력한다.")])])]),a._v(" "),e("li",[a._v("조치\n"),e("ul",[e("li",[a._v("네이티브 힙 고갈의 경우는 힙 메모리 로그 및 메모리 맵 정보를 분석하는 것이 유용하다.")]),a._v(" "),e("li",[a._v("이런 유형은 운영체제의 문제 유틸리티를 사용하여 문제를 진단할 수 있다.")])])])])]),a._v(" "),e("li",[a._v("java.lang.OutOfMemoryError: Compressed class space(압축된 클래스 공간)\n"),e("ul",[e("li",[a._v("원인\n"),e("ul",[e("li",[a._v("64비트 플랫폼에서 클래스 메타데이터 포인터는 32비트 오프셋(UseCompressedOops)으로 표현된다.\n이 방식은 UseCompressedClassPointers(기본값 활성화, on)으로 제어할 수 잇으며 활성화되면 클래스 메타데이터가 사용할 수 있는 공간의 크기가 고정된다.")]),a._v(" "),e("li",[a._v("UseCompressedClassPointers에 필요한 CompressedClassSpaceSize를 초과하면 java.lang.OutOfMemoryError: Compressed class space를 던진다.")])])]),a._v(" "),e("li",[a._v("조치\n"),e("ul",[e("li",[a._v("CompressedClassSpaceSize 크기를 키우거나 UseCompressedClassPointers를 비활성화 시킨다.")])])])])]),a._v(" "),e("li",[a._v("java.lang.OutOfMemoryError: Reason stack_trace_with_native method\n"),e("ul",[e("li",[a._v("원인\n"),e("ul",[e("li",[a._v("이 메시지가 출력되는 것은 원시 메서드에서부터 스택 트레이스가 출력되었다는 것을 의미하며, 네이티브 메서드에 할당 오류가 발생했음을 의미한다.")]),a._v(" "),e("li",[a._v("이 메시지가 위의 메시지들과 다른 점은 JVM 코드가 아니라 Java Native Interface(JNI) 또는 원시메서드에서 할당실패가 감지되었다는 것이다.")])])]),a._v(" "),e("li",[a._v("조치\n"),e("ul",[e("li",[a._v("이 예외가 발생하면 운영체제가 제공하는 유틸리티를 이용해서 문제점을 진단해야 한다.")])])])])])]),a._v(" "),e("br"),a._v(" "),e("h2",{attrs:{id:"_0807-flyway"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0807-flyway"}},[a._v("#")]),a._v(" 0807 - Flyway")]),a._v(" "),e("h3",{attrs:{id:"flyway란"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flyway란"}},[a._v("#")]),a._v(" Flyway란?")]),a._v(" "),e("p",[a._v("DB 이력을 형상관리 할 수 있는 오픈소스 도구이다.")]),a._v(" "),e("p",[a._v("로컬, 알파 등 개발 DB에서 변경한 Schema, Index, Key 등을 베타, 운영 DB에 누락되는 것을 Flyway를 사용하여 방지할 수 있다. 또한 단위 테스트에서도 In-Memory DB(H2, derby, Hsqldb 등)에 DB DDL이력을 실행하여 원격과 같은 DB 형상을 유지한 채, 단위 테스트를 할 수 있다.")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fcy0ZU4%2FbtrffQcB4B2%2FY5pX9oNiF30Ma7DEvdL2h0%2Fimg.png",alt:"image"}})]),a._v(" "),e("p",[a._v("flyway는 다양한 방법으로 실행할 수 있다. 공식 사이트에 따르면 gradle, maven, CLI, JAVA API등 으로 사용할 수 있다.")]),a._v(" "),e("h3",{attrs:{id:"flyway-사용법"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flyway-사용법"}},[a._v("#")]),a._v(" Flyway 사용법")]),a._v(" "),e("h4",{attrs:{id:"의존성-및-환경-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#의존성-및-환경-설정"}},[a._v("#")]),a._v(" 의존성 및 환경 설정")]),a._v(" "),e("p",[a._v("flyway의 Java API를 사용하기 위해서는 org.flywaydb:flyway-core 모듈에 대한 의존성이 필요하다")]),a._v(" "),e("div",{staticClass:"language-gradle extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('implementation("org.flywaydb:flyway-core:6.5.7")\n')])])]),e("h4",{attrs:{id:"yaml-파일-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yaml-파일-설정"}},[a._v("#")]),a._v(" yaml 파일 설정")]),a._v(" "),e("p",[a._v("Spring Boot에서는 flyway에 대한 autoconfigure를 지원한다.")]),a._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("spring")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  datasource")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    hikari")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("      jdbc-url")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("jdbc:mariadb://localhost:3306/pika")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("      username")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("pika_app")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("      password")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("pika_password")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("  flyway")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    locations")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("classpath:/db/migration # migration 파일들이 위치하는 directory")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    sql-migration-suffixes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("ddl        # 파일 확장자")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    baseline-on-migrate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("true          # flyway_schema_history 테이블을 자동으로 생성할지 여부 ")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("    baseline-version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("0                # 최초 버전 정보")]),a._v("\n")])])]),e("h4",{attrs:{id:"마이그레이션-파일"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#마이그레이션-파일"}},[a._v("#")]),a._v(" 마이그레이션 파일")]),a._v(" "),e("p",[a._v("flyway에서는 데이터베이스에 일어나는 모든 행위를 메이그레이션(migration)이라고 표현한다. 이러한 마이그레이션은 파일로 관리되어 진다. 파일의 이름은 지정하는 형식이 존재하며 이를 지켜야 한다.")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcqvO9u%2FbtrfgYIhw2u%2FkKyRbZFhXrOt1T1YYuCgS0%2Fimg.png",alt:"image"}})]),a._v(" "),e("ul",[e("li",[a._v("Prefix : V, U, R 중 하나를 입력 V는 Verion, U는 undo, R은 Repeatable이다.")]),a._v(" "),e("li",[a._v("Version : 버전 정보이다. 정수, 소수, 날짜 등이 가능")]),a._v(" "),e("li",[a._v("Seperator : __(underscore 2개를 사용)")]),a._v(" "),e("li",[a._v("Description : 추가되는 설명이다. _가 space를 대신한다.")])]),a._v(" "),e("p",[a._v("예) V0_create_table_user.sql, V1.1_create_table_game.sql, V20210909_create_table_screenshot.sql")]),a._v(" "),e("p",[a._v("Flyway로 관리될 SQL 파일은 "),e("code",[a._v("src/main/resources/db/migration")]),a._v(" 위치에 저장되어야 한다.")]),a._v(" "),e("h4",{attrs:{id:"flyway-schema-history-테이블"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flyway-schema-history-테이블"}},[a._v("#")]),a._v(" flyway_schema_history 테이블")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FpDNJE%2FbtrfjWIKdHQ%2FKdEEAaW34kBzC3o62onmFk%2Fimg.png",alt:"image"}})]),a._v(" "),e("ul",[e("li",[a._v("version은 파일의 V뒤에 붙어있던 숫자로 낮은 순서부터 실행되며 실행 순서대로 테이블에 쌓이는 구조를 가진다.")]),a._v(" "),e("li",[a._v("checksum은 파일의 내용을 hashing한 것이다. 만약 파일의 내용이 달라지면 이 체크섬이 달라진다. 한번 체크섬을 만들어 둔 후 파일을 수정할 경우 형상관리에 문제가 생겻다고 판단하기 때문에 에러가 발생한다. 이럴 경우 해당 파일에 대한 체크섬을 repair 한 후 success를 0으로 돌리는등의 작업이 필요하다. (flyway로 등록된 순간을 기준으로 flyway가 DB버전을 관리하게 되므로 해당 스크립트를 수정, 삭제하면 안된다.)")]),a._v(" "),e("li",[a._v("success는 파일 실행에 성공했는지 여부를 나타내는 값이다.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);