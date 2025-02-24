(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{756:function(e,t,a){"use strict";a.r(t);var i=a(2),l=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_1204-1217"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1204-1217"}},[e._v("#")]),e._v(" 1204 ~ 1217")]),e._v(" "),a("h2",{attrs:{id:"_1207-gradle-implementation-api-compile-의-차이"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1207-gradle-implementation-api-compile-의-차이"}},[e._v("#")]),e._v(" 1207 - Gradle implementation, api, compile 의 차이")]),e._v(" "),a("ul",[a("li",[e._v("implementation과 api는 모두 라이브러리를 적용시키는 키워드")]),e._v(" "),a("li",[e._v("Gradle 6.x 버전 전에는 compile사용 이후 deprecated 되고 api 키워드 사용")])]),e._v(" "),a("h4",{attrs:{id:"api-compile의-라이브러리-적용-범위"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-compile의-라이브러리-적용-범위"}},[e._v("#")]),e._v(" api, compile의 라이브러리 적용 범위")]),e._v(" "),a("ul",[a("li",[e._v("api, compile을 사용해 라이브러리를 가져오게 되면, 해당 라이브러리가 의존하는 모듈도 함께 가져온다.")]),e._v(" "),a("li",[e._v("즉, 상위 모듈까지 가져온다.")]),e._v(" "),a("li",[e._v("의존 라이브러리 수정시 해당 모듈을 의존하고 있는 모듈들 또한 재빌드")])]),e._v(" "),a("blockquote",[a("p",[e._v("Gradle은 컴파일 클래스 경로 및 빌드 출력에 종속성을 추가한다. 모듈에 api 종속성을 포함하면 다른 모듈에 그 종속성을 과도적으로 내보내기를 원하며 따라서 런타임과 컴파일 시 모두 종속성을 사용할 수 있다는 사실을 Gradle에 알려줄 수 있다.")])]),e._v(" "),a("h4",{attrs:{id:"implementation의-적용-범위"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation의-적용-범위"}},[e._v("#")]),e._v(" implementation의 적용 범위")]),e._v(" "),a("ul",[a("li",[e._v("implementation을 사용해 가져오는 라이브러리는 해당 모듈을 의존하는 모듈에는 가져와지지 않는다.")]),e._v(" "),a("li",[e._v("의존 라이브러리 수정시 본 모듈까지만 재빌드")])]),e._v(" "),a("blockquote",[a("p",[e._v("Gradle은 종속성을 컴파일 클래스 경로에 추가하여 종속성을 빌드 출력에 패키징한다. 다만 모듈이 implementation 종속성을 구성하는 경우, 이것은 Gradle에 개발자가 모듈이 컴파일 시 다른 모듈로 유출되는 것을 원치 않는다는 것을 알려준다. 즉, 종속성은 런타임 시 다른 모듈에서만 이용할 수 있다.")])])])}),[],!1,null,null,null);t.default=l.exports}}]);