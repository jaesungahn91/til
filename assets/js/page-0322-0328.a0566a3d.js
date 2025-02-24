(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{670:function(t,a,e){"use strict";e.r(a);var _=e(2),r=Object(_.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_0322-0328"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0322-0328"}},[t._v("#")]),t._v(" 0322 - 0328")]),t._v(" "),e("h2",{attrs:{id:"_0322-git-fetch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0322-git-fetch"}},[t._v("#")]),t._v(" 0322 - git fetch")]),t._v(" "),e("blockquote",[e("p",[t._v("원격 저장소의 내용을 확인만하고 로컬 데이터와 병합은 하고싶지 않은 경우에 fetch 명령어를 사용")])]),t._v(" "),e("ul",[e("li",[t._v("fetch를 실행하면, 커밋이력이 이름 없는 브랜치로 로컬에 가져옴")]),t._v(" "),e("li",[t._v("fetch 후 merge 수행시 pull과 동일"),e("br"),t._v("\n=> pull = fetch + merge")])]),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"_0323-oauth"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0323-oauth"}},[t._v("#")]),t._v(" 0323 - OAuth")]),t._v(" "),e("blockquote",[e("p",[t._v("Open Authentification")])]),t._v(" "),e("p",[t._v("인터넷 사용자들이 비밀번호를 제공하지 않고, 다른 웹사이트 상의 자신들의 정보에 대해 웹사이트나 애플리케이션의 접근 권한을 부여할 수 있는 개방형 표준 방법")]),t._v(" "),e("p",[t._v("이러한 매커니즘은 구글, 페이스북, 트위터 등이 사용하고 있으며 타사 애플리케이션 및 웹사이트의 계정에 대한 정보를 공유할 수 있도록 허용해준다.")]),t._v(" "),e("h4",{attrs:{id:"사용언어"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사용언어"}},[t._v("#")]),t._v(" 사용언어")]),t._v(" "),e("ul",[e("li",[t._v("사용자 : 계정을 가지고있는 개인")]),t._v(" "),e("li",[t._v("소비자 : OAuth를 사용해 서비스 제공자에게 접근하는 웹사이트 or 애플리케이션")]),t._v(" "),e("li",[t._v("서비스 제공자 : OAuth를 통해 접근을 지원하는 웹 애플리케이션")]),t._v(" "),e("li",[t._v("소비자 비밀번호 : 서비스 제공자에서 소비자가 자신임을 인증하기 위한 키")]),t._v(" "),e("li",[t._v("요청 토큰 : 소비자가 사용자에게 접근권한을 인증받기 위해 필요한 정보가 담겨있음")]),t._v(" "),e("li",[t._v("접근 토큰 : 인증 후에 사용자가 서비스 제공자가 아닌 소비자를 통해 보호 자원에 접근하기 위한 키 값")])]),t._v(" "),e("p",[t._v("토큰 종류로는 Access Token과 Refresh Token이 있다."),e("br"),t._v("\nAccess Token은 만료시간이 있고 끝나면 다시 요청해야 한다. Refresh Token은 만료되면 아예 처음부터 진행해야 한다.")]),t._v(" "),e("h4",{attrs:{id:"인증과정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#인증과정"}},[t._v("#")]),t._v(" 인증과정")]),t._v(" "),e("blockquote",[e("p",[t._v("소비자 <-> 서비스 제공자")])]),t._v(" "),e("ol",[e("li",[t._v("소비자가 서비스 제공자에게 요청토큰을 요청한다.")]),t._v(" "),e("li",[t._v("서비스 제공자가 소비자에게 요청토큰을 발급한다.")]),t._v(" "),e("li",[t._v("소비자가 사용자를 서비스제공자로 이동시킨다. 여기서 사용자 인증이 수행된다.")]),t._v(" "),e("li",[t._v("서비스 제공자가 사용자를 소비자로 이동시킨다.")]),t._v(" "),e("li",[t._v("소비자가 접근토큰을 요청한다.")]),t._v(" "),e("li",[t._v("서비스제공자가 접근토큰을 발급한다.")]),t._v(" "),e("li",[t._v("발급된 접근토큰을 이용해서 소비자의 사용자 정보에 접근한다.")])]),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"_0324-vo-dto-entity"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0324-vo-dto-entity"}},[t._v("#")]),t._v(" 0324 - VO, DTO, Entity")]),t._v(" "),e("h4",{attrs:{id:"entity"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#entity"}},[t._v("#")]),t._v(" Entity")]),t._v(" "),e("blockquote",[e("p",[t._v("DB의 테이블내에 존재하는 컬럼만을 속성(필드)으로 가지는 클래스를 말함.")])]),t._v(" "),e("ul",[e("li",[t._v("Id(PK)를 통해 구분, 비즈니스 로직을 가질 수 있다.")])]),t._v(" "),e("h4",{attrs:{id:"dto-data-transfer-object"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dto-data-transfer-object"}},[t._v("#")]),t._v(" DTO(Data Transfer Object)")]),t._v(" "),e("blockquote",[e("p",[t._v("레이어 간에 데이터를 전달하는 객체")])]),t._v(" "),e("ul",[e("li",[t._v("Setter, Getter를 가지며 별도의 비지니스 로직을 가지지는 않음.")]),t._v(" "),e("li",[t._v("비슷한 특성을 가진 값을 하나의 객체로 묶어 레이어간 전달에 유용하도록 만든 자료 구조라고 정리할 수 있다.")])]),t._v(" "),e("h4",{attrs:{id:"vo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vo"}},[t._v("#")]),t._v(" VO")]),t._v(" "),e("blockquote",[e("p",[t._v("DTO와 동일하게 레이어와 레이어간에 데이터를 전달하는 객체")])]),t._v(" "),e("ul",[e("li",[t._v("immutable(불변성)을 가짐.")]),t._v(" "),e("li",[t._v("Object의 equals, hashcode를 오버라이딩 했을때 동일 여보를 확인 할 수 있다.")]),t._v(" "),e("li",[t._v("로직 포함 가능")])]),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"_0325-web-server와-was"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0325-web-server와-was"}},[t._v("#")]),t._v(" 0325 - Web Server와 WAS")]),t._v(" "),e("h4",{attrs:{id:"web-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web-server"}},[t._v("#")]),t._v(" Web Server")]),t._v(" "),e("blockquote",[e("p",[t._v("클라이언트가 요청하는 HTML 문서나 각종 리소스를 전달하는 소프트웨어 위에서 말한 소프트웨어 외에도 해당 소프트웨어를 실행시키는 하드웨어 또한 웹 서버라고 할한다."),e("br"),t._v(" "),e("code",[t._v("아파치 HTTP 서버, Nginx, WebtoB")])])]),t._v(" "),e("h4",{attrs:{id:"was-web-application-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#was-web-application-server"}},[t._v("#")]),t._v(" WAS (Web Application Server)")]),t._v(" "),e("blockquote",[e("p",[t._v("동적 컨텐츠를 제공하기 위해 만들어진 애플리케이션 서버로써 웹 프로그램을 실행할 수 있는 환경을 제공한다."),e("br"),t._v(" "),e("code",[t._v("Tomcat, Jeus, WebLogic, WebSphere")])])]),t._v(" "),e("h4",{attrs:{id:"웹-서버와-was의-차이"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#웹-서버와-was의-차이"}},[t._v("#")]),t._v(" 웹 서버와 WAS의 차이")]),t._v(" "),e("ul",[e("li",[t._v("웹서버는 정적인 컨텐츠를 제공하고, WAS는 동적인 컨텐츠를 제공함")]),t._v(" "),e("li",[t._v("WAS는 동적인 컨텐츠 뿐만 아니라 정적인 컨텐츠도 제공가능")])]),t._v(" "),e("h4",{attrs:{id:"웹서버와-was를-분리하는-이유"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#웹서버와-was를-분리하는-이유"}},[t._v("#")]),t._v(" 웹서버와 WAS를 분리하는 이유")]),t._v(" "),e("ol",[e("li",[t._v("기능을 분리하여 서버 부하를 방지")]),t._v(" "),e("li",[t._v("물리적으로 분리하여 보안을 강화")]),t._v(" "),e("li",[t._v("WEB서버에 여러 대의 WAS 연결 가능")]),t._v(" "),e("li",[t._v("여러 Web Application을 서비스 할 수 있다")])]),t._v(" "),e("p",[t._v("-> 가장 큰 이유는 "),e("code",[t._v("로드밸런싱")])]),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"_0326-express-라우트-객체"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0326-express-라우트-객체"}},[t._v("#")]),t._v(" 0326 - Express 라우트 객체")]),t._v(" "),e("blockquote",[e("p",[t._v("node.js express 라우트 요청, 응답 객체")])]),t._v(" "),e("h4",{attrs:{id:"request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),e("ul",[e("li",[t._v("Methods\n"),e("ul",[e("li",[t._v("req.params")]),t._v(" "),e("li",[t._v("req.query")]),t._v(" "),e("li",[t._v("req.body")]),t._v(" "),e("li",[t._v("req.headers")])])])]),t._v(" "),e("h4",{attrs:{id:"response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("ul",[e("li",[t._v("Methods\n"),e("ul",[e("li",[t._v("res.status(code)")]),t._v(" "),e("li",[t._v("res.send(body), res.send(status,body)")]),t._v(" "),e("li",[t._v("res.json(json)")]),t._v(" "),e("li",[t._v("res.render(vidw, [locals], callback)")])])])]),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"_0327-tibero-관련-정리"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0327-tibero-관련-정리"}},[t._v("#")]),t._v(" 0327 - Tibero 관련 정리")]),t._v(" "),e("h4",{attrs:{id:"세션수-관리"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#세션수-관리"}},[t._v("#")]),t._v(" 세션수 관리")]),t._v(" "),e("p",[e("code",[t._v("$TB_HOM\\config\\$TB_SID")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('#--------------------------------------------------\n# Tibero Initialization Parameters\n#--------------------------------------------------\n#Thu Feb 20 11:31:40 KST 2020\nCONTROL_FILES="C\\:\\\\TmaxData\\\\tibero6\\\\database\\\\tibero\\\\c1.ctl"\nDB_NAME=tibero\nLISTENER_PORT=8629\nMAX_SESSION_COUNT=100\nMEMORY_TARGET=3G\nTOTAL_SHM_SIZE=2G\n')])])]),e("h4",{attrs:{id:"강제-재시작"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#강제-재시작"}},[t._v("#")]),t._v(" 강제 재시작")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# tbdown clean\n# tbboot (or 서비스 재시작)\n")])])]),e("p",[e("code",[t._v("%TB_HOME%/instance/%TB_SID%/proc.list 파일 삭제")])]),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"_0328-os-관련"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0328-os-관련"}},[t._v("#")]),t._v(" 0328 - OS 관련")]),t._v(" "),e("h4",{attrs:{id:"window"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#window"}},[t._v("#")]),t._v(" window")]),t._v(" "),e("ul",[e("li",[t._v("애플리케이션 실행 bat파일"),e("br"),t._v(" "),e("code",[t._v("파일명.bat")])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("title 타이틀\nSET 환경 변수명=C:\\위치\njava -jar 파일명.war -Dfile.encoding=UTF-8\n")])])]),e("ul",[e("li",[e("p",[t._v("부팅시 bat파일 실행")]),t._v(" "),e("ul",[e("li",[t._v("실행 - shell:startup")]),t._v(" "),e("li",[t._v("바로가기 등록")])])]),t._v(" "),e("li",[e("p",[t._v("레지스트리 변경")]),t._v(" "),e("ul",[e("li",[t._v("실행 - regedit")]),t._v(" "),e("li",[t._v("[HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\RunOnce] 해당 값 추가 (파일명+경로)")])])]),t._v(" "),e("li",[e("p",[t._v("명령 프롬프트")]),t._v(" "),e("ul",[e("li",[t._v("PID 확인"),e("br"),t._v(" "),e("code",[t._v("netstat -nao | findstr PORT")])]),t._v(" "),e("li",[t._v("프로세스 종료"),e("br"),t._v(" "),e("code",[t._v("taskkill /pid PID /f")])]),t._v(" "),e("li",[t._v("패킷 경로 확인"),e("br"),t._v(" "),e("code",[t._v("tracert -d IP")])])])])]),t._v(" "),e("h4",{attrs:{id:"linux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[t._v("#")]),t._v(" linux")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Cent OS firewall-cmd"),e("br"),t._v(" "),e("code",[t._v("firewall-cmd --list all")]),e("br"),t._v(" "),e("code",[t._v("firewall-cmd --permanent --add-port=IP/tcp")]),e("br"),t._v(" "),e("code",[t._v("firewall-cmd --reload")]),e("br"),t._v(" "),e("code",[t._v("firewall-cmd systectl start/stop/restart firewalld")])])]),t._v(" "),e("li",[e("p",[t._v("애플리케이션 실행 sh 파일"),e("br"),t._v(" "),e("code",[t._v("파일명.sh")])])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("export 환경변수명=/위치\nnohup java -jar 파일명.war &\n")])])]),e("ul",[e("li",[t._v("명령어")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("netstat -nap | grep {port}\nlsof -i TCP:{port}\nfuser -k -n tcp {pid}\nkill -9 {pid}\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);