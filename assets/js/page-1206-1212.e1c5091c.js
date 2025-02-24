(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{704:function(t,a,e){"use strict";e.r(a);var r=e(2),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_1206-1212"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1206-1212"}},[t._v("#")]),t._v(" 1206 - 1212")]),t._v(" "),e("h2",{attrs:{id:"_1206-git-revert-reset"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1206-git-revert-reset"}},[t._v("#")]),t._v(" 1206 - git revert, reset")]),t._v(" "),e("h3",{attrs:{id:"reset"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reset"}},[t._v("#")]),t._v(" reset")]),t._v(" "),e("p",[t._v("reset은 특정 사건으로 되돌아가게 되는데 과거로 되돌아 갔으니 해당 사건 이후의 사건들은 모두 사라진다. 과거의 이력이 커밋에 남지 않고, revert는 특정 사건을 revert했다는 이력이 커밋에 남게 된다.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git reset <옵션> <돌아가고싶은 커밋id>\n\nex)\ngit reset --soft abcdef\ngit reset --mixed abcdef  (옵션 작성안할 시 기본값)\ngit reset --hard abcdef \ngit reset HEAD~10 (현재부터 10개 이전으로 복원)\n")])])]),e("h3",{attrs:{id:"revert"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#revert"}},[t._v("#")]),t._v(" revert")]),t._v(" "),e("p",[t._v("revert는 특정 사건을 골라서 없던일로 만든다. 또한 특정 사건을 취소하지만 revert를 했다는 이력이 남게된다.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git revert <취소할 commit>\n")])])]),e("br"),t._v(" "),e("h2",{attrs:{id:"_1207-transactional"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1207-transactional"}},[t._v("#")]),t._v(" 1207 - @Transactional")]),t._v(" "),e("p",[t._v("스프링에서 지원하는 선언적 트랜잭션. java config를 통해 설정 할 수 있다. Spring boot에서는 별도의 설정이 필요 없으며, 클래스 또는 메소드에 선언할 수 있다.")]),t._v(" "),e("h3",{attrs:{id:"transactional-옵션"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transactional-옵션"}},[t._v("#")]),t._v(" @Transactional 옵션")]),t._v(" "),e("ul",[e("li",[t._v("propagation : 트랜잭션 동작 도중 다른 트랙잭션을 호출할 때, 어떻게 할 것인지 지정하는 옵션.")]),t._v(" "),e("li",[t._v("isolation : 트랜잭션에서 일관성없는 데이터 허용 수준을 설정.")]),t._v(" "),e("li",[t._v("noRollbackFor=Exception.class : 특정 예외 발생 시 rollback하지 않는다.")]),t._v(" "),e("li",[t._v("rollbackFor=Exception.class : 특정 예외 발생시 rollback한다.")]),t._v(" "),e("li",[t._v("timeout : 지정한 시간 내에 메소드 수행이 완료되지 않으면 rollback한다. (-1일 경우 timeout을 사용하지 않는다)")]),t._v(" "),e("li",[t._v("readOnly : 트랜잭션을 읽기 전용으로 설정한다.")])]),t._v(" "),e("h4",{attrs:{id:"_1-propagation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-propagation"}},[t._v("#")]),t._v(" 1. propagation")]),t._v(" "),e("ul",[e("li",[t._v("REQUIRED (Default) : 이미 진행중인 트랜잭션이 있다면 해당 트랜잭션 속성을 따르고, 진행중이 아니라면 새로운 트랜재셕을 생성한다.")]),t._v(" "),e("li",[t._v("REQUIRES_NEW : 항상 새로운 트랜잭션을 생성한다. 이미 진행중인 트랜잭션이 있다면 잠깐 보류하고 해당 트랜잭션 작업을 먼저 진행한다.")]),t._v(" "),e("li",[t._v("SUPPORT : 이미 진행 중인 트랜잭션이 있다면 해당 트랜잭션 속성을 따르고, 없다면 트랜잭션을 설정하지 않는다.")]),t._v(" "),e("li",[t._v("NOT_SUPPORT : 이미 진행중인 트랜잭션이 있따면 보류하고, 트랜잭션 없이 작업을 수행한다.")]),t._v(" "),e("li",[t._v("MANDATORY : 이미 진행중인 트랙잭션이 있어야만, 작업을 수행한다. 없다면 Exception을 발생시킨다.")]),t._v(" "),e("li",[t._v("NEVER : 트랜잭션이 진행중이지 않을 때 작업을 수행한다. 트랜잭션이 있다면 Exception을 발생시킨다.")]),t._v(" "),e("li",[t._v("NESTED : 진행중인 트랜잭션이 있다면 중첩된 트랜잭션이 실행되며, 존재하지 않으면 REQUIRED와 동일하게 실행된다.")])]),t._v(" "),e("h4",{attrs:{id:"_2-isolation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-isolation"}},[t._v("#")]),t._v(" 2. isolation")]),t._v(" "),e("ul",[e("li",[t._v("Default : 사용하는 DB 드라이버의 디폴트 설정을 따른다. 대부분 READ_COMMITED를 기본 격리수준으로 설정한다.")]),t._v(" "),e("li",[t._v("READ_UNCOMMITED : 가장 낮은 격리 수준이다. 트랜잭션이 커밋되기 전에 그 변화가 다른 트랜잭션에 그대로 노출된다. 하지만 속도가 빠르기 때문에 데이터의 일광성이 떨어지더라도, 성능 극대화를 위해 의도적으로 사용하기도 한다.")]),t._v(" "),e("li",[t._v("READ_COMMITED : 트랜잭션이 커밋하지 않은 정보를 읽을 수 없다. 하지만 트랜잭션이 읽은 로우를 다른 트랜잭션에서 수정 할 수 있다. 그래서 트랜잭션이 같은 로우를 읽었어도 시간에 따라서 다른 내용이 발견될 수 있다.")]),t._v(" "),e("li",[t._v("REPEATABLE_READ : 트랜잭션이 읽은 로우를 다른 트랜잭션에서 수정되는 것을 막아준다. 하지만 새로운 로우를 추가하는 것은 제한하지 않는다.")]),t._v(" "),e("li",[t._v("SERIALIZABLE : 가장 강력한 트랜잭션 격리수준이다. 여러 트랜잭션이 동시에 같은 테이블 로우에 액세스하지 못하게 한다. 가장 안전하지만 가장 성능이 떨어진다.")])]),t._v(" "),e("h4",{attrs:{id:"_3-rollbackfor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-rollbackfor"}},[t._v("#")]),t._v(" 3. rollbackFor")]),t._v(" "),e("p",[t._v("트랜잭션 작업 중 런타임 예외가 발생하면 롤백한다. 반면에 예외가 발생하지 않거나 체크 예외가 발생하면 커밋한다."),e("br"),t._v("\n체크 예외를 커밋 대상으로 삼는 이유는 체크 예외가 예외적인 상황에서 사용되기 보다는 리턴 값을 대신해서 비지니스 적인 의미를 담은 결과로 돌려주는 용도로 사용되기 때문이다."),e("br"),t._v("\n스프링에서는 데이터 엑세스 기술의 예외를 런타임 예외로 전환에서 던지므로 런타임 예외만 롤백대상으로 삼는다."),e("br"),t._v("\n하지만 원한다면 체크예외지만 롤백 대상으로 삼을 수 있다. rollbackFor 또는 rollbackForClassName 속성을 이용해서 예외를 지정한다.")]),t._v(" "),e("h4",{attrs:{id:"_4-norollbackfor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-norollbackfor"}},[t._v("#")]),t._v(" 4. noRollbackFor")]),t._v(" "),e("p",[t._v("런타임 예외가 발생해도 지정한 런타임 예외면 커밋을 진행한다.")]),t._v(" "),e("h4",{attrs:{id:"_5-timeout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-timeout"}},[t._v("#")]),t._v(" 5. timeout")]),t._v(" "),e("p",[t._v("트랜잭션에 제한시간을 지정한다. 초 단위로 지정하고, 티폴트 설정으로 트랜잭션 시스템의 제한시간을 따른다. -1 입력 시, 트랜잭션 제한시간을 사용하지 안흔다.")]),t._v(" "),e("h4",{attrs:{id:"_6-readonly"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-readonly"}},[t._v("#")]),t._v(" 6. readOnly")]),t._v(" "),e("p",[t._v("트랜잭션을 읽기 전용으로 설정한다. 특정 트랜잭션 안에서 쓰기 작업이 일어나는 것을 의도적으로 방지하기 위해 사용된다. insert, update, delete 작업이 진행되면 예외가 발생한다.")]),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"_1208-responseentity"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1208-responseentity"}},[t._v("#")]),t._v(" 1208 - ResponseEntity")]),t._v(" "),e("p",[t._v("Spring4 이상부터 @Controller와 @ResponseBody를 합쳐놓은 @RestController를 지원하기에 기본적으로 ResponseBody로 리턴하고 있다.")]),t._v(" "),e("p",[t._v("ResponseEntity는 일반적으로 하는 역할을 동일하나 ResponseEntity로 리턴하는 경우는 본문정보와 헤더 정보, HTTP 상태코드를 좀더 세밀하게 개발자가 처리하기 수월해지며, HATEOAS, builder패턴 등을 활용해서 개발하기 용이하다.")]),t._v(" "),e("h4",{attrs:{id:"responsebody-responseentity"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#responsebody-responseentity"}},[t._v("#")]),t._v(" ResponseBody / ResponseEntity"),e("T")],1),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('@GetMapping(value = "/board/{id}") //@ResponseBody\npublic Board getBoard(@PathVariable int id) {\n    Board board = boardService.selectBoard(id);\n    return board;\n}\n\n@GetMapping(value = "/board/{id}")\nResponseEntity<Board> getBoard(@PathVariable int id) {\n    Board board = boardService.selectBoard(id);\n    return new ResponseEntity<Board>(board, HttpStatus.OK);\n    //return ResponseEntity.ok().body(board);\n}\n')])])]),e("ul",[e("li",[t._v("HATEOAS (Hypermedia As The Engine Of Application State)\nHATEOAS는 독립된 시스템에서 클라이언트서버가 RESTful하게 디자인 된 API서버에 의해 동적으로 상호작용이 가능하다. 쉽게 말하면 클라이언트가 서버에 요청시 서버는 header에 POST, GET, PUT, DELETE 등 URI를 동적으로 설정하고 response를 한다.")])]),t._v(" "),e("p",[t._v("그러면 클라이언트에서 서버에서 받은 URI로 적용해서 호출한다면, API서버에서 URI가 변경되어도 클라이언트는 호출URI를 변경할 필요가 없다. 또한 권한에 따른 URI를 제안을 할 수 있다. 그리고 클라이언트는 본문응답과 URI정보를 통해서 요청한 후에 해당 리소스에 대해 예측가능하게 한다.")]),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"_1209-uri-url"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1209-uri-url"}},[t._v("#")]),t._v(" 1209 - URI & URL")]),t._v(" "),e("blockquote",[e("p",[t._v("자원의 식별자(URI), 위치(URL), 이름(URN)")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://media.vlpt.us/images/jch9537/post/51dcc312-8ecb-4048-80df-cbde40865e7a/image.png",alt:"diagram"}})]),t._v(" "),e("h3",{attrs:{id:"uri-uniform-resource-identifier"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uri-uniform-resource-identifier"}},[t._v("#")]),t._v(" URI(Uniform Resource Identifier)")]),t._v(" "),e("p",[t._v("URI는 인터넷에 있는 자원을 나타내는 유일한 주소. URI의 존재는 인터넷에서 요구되는 기본조건으로서 인터넷 프로토콜에 항상 붙어다닌다. 하위 개념으로 URL, URN이 있다.")]),t._v(" "),e("h3",{attrs:{id:"url-uniform-resource-locator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#url-uniform-resource-locator"}},[t._v("#")]),t._v(" URL(Uniform Resource Locator)")]),t._v(" "),e("p",[t._v("URL은 네트워크상에서 자원이 어디 있는지를 알려주기 위한 규약이다. 즉, 컴퓨터 네트워크와 검색 메커니즘에서의 위치를 지정하는, 웹 리소스에 대한 참조이다. 흔히 웹 사이트 주소로 알고 있지만, URL은 웹 사이트 주소뿐만 아니라 컴퓨터 네트워크상의 자원을 모두 나타낼 수 있다. 그 주소에 접속하려면 해당 URL에 맞는 프로토콜을 알아야 하고, 그와 도일한 프로토콜로 접속해야 한다.")]),t._v(" "),e("h3",{attrs:{id:"urn-uniform-resource-name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#urn-uniform-resource-name"}},[t._v("#")]),t._v(" URN(Uniform Resource Name)")]),t._v(" "),e("p",[t._v("URN은 urn:scheme을 사용하는 URI를 위한 역사적인 이름이다. URN은 영속적이고, 위치에 독립적인 자원을 위한 지시자로 싸용하기 위해 1997년도 RFC 2141 문서에서 정의되었다.")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://media.vlpt.us/images/jch9537/post/88b0c8ac-5870-4cbc-b613-7dd39f510f31/image.png",alt:"url"}})]),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"_1212-database-index"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1212-database-index"}},[t._v("#")]),t._v(" 1212 - Database index")]),t._v(" "),e("h3",{attrs:{id:"인덱스란"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#인덱스란"}},[t._v("#")]),t._v(" 인덱스란?")]),t._v(" "),e("p",[t._v("추가적인 쓰기 작업과 저장 공간을 활용하여 데이터베이스 테이블의 검색 속도를 향상시키기 위한 자료구조이다. 많이 드는 예시로 책의 색인을 이야기 한다. 테이블의 모든 데이터를 검색하면 시간이 오래 걸리기 때문에 데이터와 데이터의 위치를 포함한 자료구조를 생성하여 빠르게 조회할 수 있도록 돕고 있다.")]),t._v(" "),e("p",[t._v("인덱스를 활용하면, 데이터를 조회하는 SELECT 외에도 UPDATE나 DELETE의 성능이 함께 향상된다. 대상을 조회해야 UPDATE, DELETE가 가능하기 때문.")]),t._v(" "),e("p",[t._v("만약 index를 사용하지 않은 컬럼을 조회해야 하는 상황이라면 전체를 탐색하는 Full Scan을 수행해야 한다. Full Scan은 전체를 비교하여 탐색하기 때문에 처리 속도가 떨어진다.")]),t._v(" "),e("h3",{attrs:{id:"인덱스-관리"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#인덱스-관리"}},[t._v("#")]),t._v(" 인덱스 관리")]),t._v(" "),e("p",[t._v("DBMS는 index를 항상 최신의 정렬된 상태로 유지해야 원하는 값을 빠르게 탐색할 수 있다. 그렇기 때문에 인덱스가 적용된 컬럼에 INSERT, UPDATE, DELETE가 수행된다면 각각 다음과 같은 연산을 추가적으로 해주어야 하며 그에 따른 오버헤드가 발생한다.")]),t._v(" "),e("ul",[e("li",[t._v("INSERT: 새로운 데이터에 대한 인덱스를 추가함.")]),t._v(" "),e("li",[t._v("DELETE: 삭제하는 데이터의 인덱스를 사용하지 않는다는 작업을 진행함.")]),t._v(" "),e("li",[t._v("UPDATE: 기존의 인덱스를 사용하지 않음 처리하고, 갱신된 데이터에 대해 인엑스를 추가함.")])]),t._v(" "),e("h3",{attrs:{id:"인덱스의-장점과-단점"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#인덱스의-장점과-단점"}},[t._v("#")]),t._v(" 인덱스의 장점과 단점")]),t._v(" "),e("p",[t._v("장점")]),t._v(" "),e("ul",[e("li",[t._v("테이블을 조회하는 속도와 그에 따른 성능을 향상시킬 수 있다.")]),t._v(" "),e("li",[t._v("전반적인 시스템의 부하를 줄일 수 있다.")])]),t._v(" "),e("p",[t._v("단점")]),t._v(" "),e("ul",[e("li",[t._v("인덱스를 관리하기 위해 DB의 약 10%에 해당하는 저장공간이 필요하다.")]),t._v(" "),e("li",[t._v("인덱스를 관리하기 위해 추가 작업이 필요하다.")]),t._v(" "),e("li",[t._v("인덱스를 잘못 사용할 경우 오히려 성능이 저하되는 역효과가 발생할 수 있다.")])]),t._v(" "),e("p",[t._v("만약 CREATE, DELETE, UPDATE가 빈번한 속성에 인덱스를 걸게 되면 인덱스의 크기가 비대해져서 성능이 오히려 저하되는 역효과가 발생할 수 있다. 그러한 이유 중 하나는 DELETE와 UPDATE 연산 때문이다. UPDATE와 DELETE는 기존의 인덱스를 삭제하지 않고 '사용하지 않음' 처리를 해준다고 했다. 만약 어떤 테이블에 UPDATE와 DELETE가 빈번하게 발생된다면 실제 데이터는 10만건이지만 인덱스는 100만 건이 넘어가게 되어, SQL문 처리 시 비대해진 인덱스에 의해 오히려 성능이 떨어지게 된다.")]),t._v(" "),e("h3",{attrs:{id:"인덱스를-사용하면-좋은-경우"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#인덱스를-사용하면-좋은-경우"}},[t._v("#")]),t._v(" 인덱스를 사용하면 좋은 경우")]),t._v(" "),e("ul",[e("li",[t._v("규모가 작지 않은 테이블")]),t._v(" "),e("li",[t._v("INSERT, UPDATE, DELETE가 자주 발생하지 않는 컬럼")]),t._v(" "),e("li",[t._v("JOIN이나 WHERE 또는 ORDER BY에 자주 사용되는 컬럼")]),t._v(" "),e("li",[t._v("데이터의 중복도가 낮은 컬럼")])]),t._v(" "),e("h3",{attrs:{id:"인덱스의-자료구조"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#인덱스의-자료구조"}},[t._v("#")]),t._v(" 인덱스의 자료구조")]),t._v(" "),e("p",[t._v("인덱스를 구현하기 위해서는 여러가지 자료구조를 사용할 수 있는데, 가장 대표적인 자료구조는 해시 테이블과 B+Tree가 있다.")]),t._v(" "),e("h4",{attrs:{id:"해시테이블-hash-table"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#해시테이블-hash-table"}},[t._v("#")]),t._v(" 해시테이블(Hash Table)")]),t._v(" "),e("p",[t._v("해시 테이블 기반의 DB 인덱스는 컬럼의 값, 데이터의 위치를 Key, Value로 사용하여 컬럼의 값으로 생성된 해시를 통해 인덱스를 구현한다. 해시 테이블의 시간복잡도는 O(1)이며 매우 빠른 검색을 지원한다."),e("br"),t._v("\n하지만 DB인덱스에서 해시 테이블이 사용되는 경우는 제한적이다. 그이유는 해시가 등호(=) 연산에만 특화되었기 때문이다. 해시 함수는 값이 1이라도 달라지면 완전히 다른 해시 값을 생성하는데, 이러한 특성에 의해 부등호 연산이 자주 사용되는 데이터베이스 검색을 위해서는 해시 테이블이 적합하지 않다."),e("br"),t._v('\n즉, 예를 들면 "나는"으로 시작하는 모든 데이터를 검색하기 위한 쿼리문은 인덱스의 혜택을 전혀 받지 못하게 된다.')]),t._v(" "),e("h4",{attrs:{id:"b-tree"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#b-tree"}},[t._v("#")]),t._v(" B+Tree")]),t._v(" "),e("p",[t._v("DB의 인덱스를 위해 자식 노드가 2개 이상인 B-Tree를 개선시킨 자료구조이다. B+Tree는 모든 노드에 데이터를 저장했던 BTree와 다른 특성을 가지고 있다.")]),t._v(" "),e("ul",[e("li",[t._v("리프노드(데이터노드)만 인덱스와 함꼐 데이터(벨류)를 가지고 있고, 나머지 노드(인덱스노드)들은 데이터를 위한 인덱스(키)만을 갖는다.")]),t._v(" "),e("li",[t._v("리프노드들은 LinkedList로 연결되어 있다.")]),t._v(" "),e("li",[t._v("데이터 노드 크기는 인덱스 노드의 크기와 같지 않아도 된다.")])]),t._v(" "),e("p",[t._v("데이터베이스의 인덱스 컬럼은 부등호를 이용한 순차 검색 연산이 자주 발생될 수 있다. 이러한 이유로 BTree의 리프노드들은 LinkedList로 연결하여 순차검색을 용이하게 하는 등 BTree를 인덱스에 맞게 최적화하였다. (물론 Best Case에 대해 리프노드까지 가지 않아도 탐색할 수 있는 BTree에 비해 무조건 리프노드까지 가야한다는 단점도 있다.) 이러한 이유로 비록 B+Tree는 O(𝑙𝑜𝑔2𝑛)의 시간복잡도를 갖지만 해시테이블보다 인덱싱에 더욱 적합한 자료구조가 되었다.")]),t._v(" "),e("ul",[e("li",[t._v("InnoDB에서 사용된 B+Tree의 구조\n"),e("img",{attrs:{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fd78iJ0%2FbtqKRYbLdM9%2FnIvz1M4gffMl4YHS77JSfK%2Fimg.png",alt:"btree"}})])])])}),[],!1,null,null,null);a.default=s.exports}}]);