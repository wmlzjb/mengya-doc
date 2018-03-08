webpackJsonp([16],{CUZA:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var v=function(){var s=this,a=s.$createElement;s._self._c;return s._m(0)},n=[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",{attrs:{id:"xiang-mu-pei-zhi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xiang-mu-pei-zhi","aria-hidden":"true"}},[s._v("¶")]),s._v(" 项目配置")]),s._v(" "),t("h3",{attrs:{id:"skyline-web-ca-pei-zhi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#skyline-web-ca-pei-zhi","aria-hidden":"true"}},[s._v("¶")]),s._v(" Skyline.Web.CA 配置")]),s._v(" "),t("p",[s._v("CA项目是专用于登录、注册、令牌授权的应用服务，其配置位于项目根目录的Web.config中，需要关注如下配置项：")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-xml"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("connectionStrings")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!--数据库连接字符串--\x3e")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("add")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"SkylineCA"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("providerName")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"System.Data.SqlClient"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("connectionString")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"Server=.\\SQLEXPRESS;Database=Skyline.CA;Integrated Security=True;"')]),s._v(" />")]),s._v(" \n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("connectionStrings")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("appSettings")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!--CA的网站地址--\x3e")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("add")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("key")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"CA.Address"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"https://localhost:44301/"')]),s._v(" />")]),s._v("\n    ......\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("appSettings")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"tip"},[t("p",[s._v("整段配置中，除了"),t("strong",[s._v("数据库连接字符串")]),s._v("和"),t("strong",[s._v("CA的网站地址")]),s._v("需要开发人员关注或修改，其他的配置是可以不用动的。"),t("br")])]),s._v(" "),t("p",[s._v("CA项目仅仅只做web.config配置还是不够，因为CA项目的安全级别要求较高，所有的请求都需要使用"),t("strong",[s._v("HTTPS")]),s._v("来通信，CA证书的校验是必不可少的，\n所以还需要在本机安装证书，下面以本机系统为Windows 10为例：")]),s._v(" "),t("div",{staticClass:"tip"},[t("p",[s._v("1 在CA项目的IdSvr目录中找到"),t("strong",[s._v("idsrv3test.pfx")]),s._v("文件"),t("br")]),s._v(" "),t("p",[s._v("2 右键选择"),t("strong",[s._v("安装PFX")]),t("br")]),s._v(" "),t("p",[s._v("3 在弹出的界面中选择"),t("strong",[s._v("本地计算机")]),t("br")]),s._v(" "),t("p",[s._v("4 点击下一步"),t("br")]),s._v(" "),t("p",[s._v("5 输入密码:"),t("strong",[s._v("idsrv3test")]),s._v("，点击下一步"),t("br")]),s._v(" "),t("p",[s._v("6 选择"),t("strong",[s._v("将所有的证书都放入下列存储")]),s._v("，点击浏览，选择"),t("strong",[s._v("受信任的根证书颁发机构")]),s._v("，确定，下一步"),t("br")]),s._v(" "),t("p",[s._v("7 证书安装完成")])]),s._v(" "),t("h3",{attrs:{id:"skyline-web-api-pei-zhi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#skyline-web-api-pei-zhi","aria-hidden":"true"}},[s._v("¶")]),s._v(" Skyline.Web.Api 配置")]),s._v(" "),t("p",[s._v("CA项目是提供各客户端业务API，其配置位于项目根目录的Web.config中，需要关注如下配置项：")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-xml"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("connectionStrings")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!--数据库连接字符串--\x3e")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("add")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"SkylineDB"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("providerName")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"System.Data.SqlClient"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("connectionString")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"Server=.\\SQLEXPRESS;Database=Skyline.DB;Integrated Security=True;"')]),s._v(" />")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("connectionStrings")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("appSettings")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!--是否测试环境--\x3e")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("add")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("key")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"IsTest"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(" />")]),s._v("\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!--是否属于增量Migrations--\x3e")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("add")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("key")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"IsIncrementMigrations"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v("/>")]),s._v("\n    ......\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!--Web的网站地址--\x3e")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("add")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("key")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"Web.Address"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"http://localhost:4200/"')]),s._v(" />")]),s._v("\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!--移动Web的网站地址--\x3e")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("add")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("key")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"Mobile.Address"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"http://localhost:4200/"')]),s._v(" />")]),s._v("\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!--File的网站地址--\x3e")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("add")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("key")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"File.Address"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"https://flocalhost:44302/"')]),s._v(" />")]),s._v("\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!--CA的网站地址--\x3e")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("add")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("key")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"CA.Address"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"https://localhost:44301/"')]),s._v(" />")]),s._v("\n    ......\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!--API的网站地址--\x3e")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("add")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("key")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"API.Address"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"http://localhost:9999/"')]),s._v(" />")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("appSettings")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"tip"},[t("p",[s._v("整段配置中，除了"),t("strong",[s._v("数据库连接字符串")]),s._v("、"),t("strong",[s._v("相关各个网站地址")]),s._v("、"),t("strong",[s._v("是否测试环境")]),s._v("、"),t("strong",[s._v("是否属于增量Migrations")]),s._v("需要开发人员关注或修改，其他的配置是可以不用动的。"),t("br")]),s._v(" "),t("p",[t("strong",[s._v("是否测试环境")]),s._v("配置指的是当前运行环境是否是测试环境，在本地进行测试开发时应设为"),t("strong",[s._v("true")]),s._v("；而当运行到live环境应设为"),t("strong",[s._v("false")]),s._v("，当此配置设为"),t("strong",[s._v("true")]),s._v("的时候，会检测数据库中是否已经存在为"),t("strong",[s._v("jack")]),s._v("的用户，如果不存在，将自动创建这个用户以及诊所。"),t("br")]),s._v(" "),t("p",[t("strong",[s._v("是否属于增量Migrations")]),s._v("配置指的是当前开发环境在迁移数据库时是否时增量迁移，在'数据库迁移和初始化'章节会说明此概念。")])]),s._v(" "),t("div",{staticClass:"tip"},[t("p",[s._v("PS. 无论哪种配置，迁移的指令都是一样的。")])]),s._v(" "),t("h3",{attrs:{id:"skyline-web-file-pei-zhi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#skyline-web-file-pei-zhi","aria-hidden":"true"}},[s._v("¶")]),s._v(" Skyline.Web.File 配置")]),s._v(" "),t("p",[s._v("CA项目为各客户端提供文件服务，其配置位于项目根目录的Web.config中，需要关注如下配置项：")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-xml"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("appSettings")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!--CA的网站地址--\x3e")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("add")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("key")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"CA.Address"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"https://localhost:44301/"')]),s._v(" />")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("appSettings")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"tip"},[t("p",[s._v("整段配置中，除了"),t("strong",[s._v("CA的网站地址")]),s._v("需要开发人员关注或修改，其他的配置是可以不用动的。"),t("br")])])])}],_=t("XyMi"),l=null,r=!1,e=null,c=null,p=null,h=Object(_["a"])(l,v,n,r,e,c,p);a["default"]=h.exports},MOsD:function(s,a,t){s.exports=t("CUZA")}});
//# sourceMappingURL=16.bd409d21.js.map