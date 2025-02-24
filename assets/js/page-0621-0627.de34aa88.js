(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{686:function(t,a,s){"use strict";s.r(a);var e=s(2),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_0621-0627"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0621-0627"}},[t._v("#")]),t._v(" 0621 - 0627")]),t._v(" "),s("h2",{attrs:{id:"_0621-dynamicupdate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0621-dynamicupdate"}},[t._v("#")]),t._v(" 0621 - @DynamicUpdate")]),t._v(" "),s("ul",[s("li",[t._v("JPA Entity에 사용하는 어노테이션으로, 실제 값이 변경된 컬럼으로만 update 쿼리를 만드는 기능.")]),t._v(" "),s("li",[t._v("기본적으로 @DynamicUpdate는 Spring JPA에서 제공하는 기능.")]),t._v(" "),s("li",[t._v("JPA는 서버가 실행될 때 CURD에 관한 SQL문을 캐싱해놓음, UPDATE 대상이 모든 열로선언.")]),t._v(" "),s("li",[t._v("특정 값만 업데이트 되는 빈도가 많은 경우 효율성에 대한 문제가 생김.")]),t._v(" "),s("li",[t._v("JPA는 캐시메모리를 이용하고 있기 때문에 업데이트를 하는 컬럼이 많아질 경우 SQL문을 생성하고 실행하는 것보다 캐시메모리에 존재하는 데이터를 이용하는 것이 더 효율적.")])]),t._v(" "),s("h3",{attrs:{id:"결론"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#결론"}},[t._v("#")]),t._v(" 결론")]),t._v(" "),s("p",[t._v("특정값만 자주 변경되는 상황같은 필요한 경우에만 @DynamicUpdate를 사용하자!")]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"_0622-systemctl과-service-명령어-차이점"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0622-systemctl과-service-명령어-차이점"}},[t._v("#")]),t._v(" 0622 - systemctl과 service 명령어 차이점")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" iptables start\nsystemctl start iptables\n")])])]),s("p",[s("code",[t._v("CentOS 5이전 버전은 service 구문으로,")]),s("br"),t._v(" "),s("code",[t._v("CentOS 6이후 버전은 systemctl 구문으로 제어")])]),t._v(" "),s("p",[t._v("7버전 이후로 서비스 관리 스크립트들은 서비스 유닛(Unit)으로 변경.")]),t._v(" "),s("h2",{attrs:{id:"_0624-hibernate-hbm2ddl-auto-설정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0624-hibernate-hbm2ddl-auto-설정"}},[t._v("#")]),t._v(" 0624 - hibernate.hbm2ddl.auto 설정")]),t._v(" "),s("p",[t._v("hibernate에는 "),s("code",[t._v("hbm2ddl.auto")]),t._v(" 설정 프로퍼티가 있다. SessionFactory가 생성될 때 스키마 DDL을 db로 검증하고 내보내는 기능을 상황에 따라 다르게 설정할 수 있도록 하는 프로퍼티이다.")]),t._v(" "),s("h3",{attrs:{id:"option"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#option"}},[t._v("#")]),t._v(" Option")]),t._v(" "),s("ul",[s("li",[t._v("create : SessionFactory 시작시 스키마를 삭제하고 다시 생성")]),t._v(" "),s("li",[t._v("create-drop : SessionFactory 종료시 스키마를 삭제")]),t._v(" "),s("li",[t._v("update : SessionFactory 시작시 객체 구성과 스키마를 비교하여 컬럼 추가/삭제 작업을 진행. 기존 스키마를 유지")]),t._v(" "),s("li",[t._v("validate : SessionFactory 시작시 객체 구성과 스키마가 다르다면 예외를 발생시킴")])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"_0627-nginx를-통한-로드밸런싱-구성"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0627-nginx를-통한-로드밸런싱-구성"}},[t._v("#")]),t._v(" 0627 - nginx를 통한 로드밸런싱 구성")]),t._v(" "),s("h3",{attrs:{id:"nginx-설치-및-실행"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-설치-및-실행"}},[t._v("#")]),t._v(" nginx 설치 및 실행")]),t._v(" "),s("ul",[s("li",[t._v("설치")])]),t._v(" "),s("div",{staticClass:"language-s extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ sudo yum install nginx\n")])])]),s("ul",[s("li",[t._v("실헹")])]),t._v(" "),s("div",{staticClass:"language-s extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ sudo systemctl start nginx\n")])])]),s("ul",[s("li",[t._v("확인\nhost 80 포트로 확인")])]),t._v(" "),s("h3",{attrs:{id:"nginx-conf-설정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-conf-설정"}},[t._v("#")]),t._v(" nginx.conf 설정")]),t._v(" "),s("div",{staticClass:"language-s extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ sudo vi /etc/nginx/nginx.conf\n")])])]),s("ul",[s("li",[t._v("로드밸런싱 설정 추가")])]),t._v(" "),s("div",{staticClass:"language-s extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("upstream cpu-bound-app {\n  server {instance_1번의_ip}:8080 weight=100 max_fails=3 fail_timeout=3s;\n  server {instance_2번의_ip}:8080 weight=100 max_fails=3 fail_timeout=3s;\n  server {instance_3번의_ip}:8080 weight=100 max_fails=3 fail_timeout=3s;\n}\n\nlocation / {\n  proxy_pass http://cpu-bound-app;\n  proxy_http_version 1.1;\n  proxy_set_header Upgrade $http_upgrade;\n  proxy_set_header Connection 'upgrade';\n  proxy_set_header Host $host;\n  proxy_cache_bypass $http_upgrade;\n}\n")])])]),s("p",[t._v("https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/")]),t._v(" "),s("ul",[s("li",[t._v("reload")])]),t._v(" "),s("div",{staticClass:"language-s extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ sudo systemctl reload nginx\n")])])]),s("ul",[s("li",[t._v("httpd connect 설정 변경")])]),t._v(" "),s("div",{staticClass:"language-s extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ sudo setsebool -P httpd_can_network_connect on\n")])])]),s("h3",{attrs:{id:"nginx-로그-확인"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-로그-확인"}},[t._v("#")]),t._v(" nginx 로그 확인")]),t._v(" "),s("ul",[s("li",[t._v("에러로그")])]),t._v(" "),s("div",{staticClass:"language-s extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ sudo tail -f /var/log/nginx/error.log\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);