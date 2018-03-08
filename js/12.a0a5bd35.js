webpackJsonp([12],{"6SFB":function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=function(){var s=this,a=s.$createElement;s._self._c;return s._m(0)},r=[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",{attrs:{id:"ye-wu-fu-wu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ye-wu-fu-wu","aria-hidden":"true"}},[s._v("¶")]),s._v(" 业务服务")]),s._v(" "),t("p",[s._v("业务服务承载着绝大部分的业务相关的代码，根据复杂程度和关联性分为两种服务：数据服务类、领域服务类，数据服务一般用于处理简单的数据交互操作，领域服务并不是DDD中指的标准领域服务，而是应对复杂的，超过两个独立数据数据服务的业务场景下的一种服务，基本编写规范如下：")]),s._v(" "),t("div",{staticClass:"tip"},[t("p",[s._v("1 数据服务都存放于"),t("strong",[s._v("Skyline.Businsess")]),s._v("项目的"),t("strong",[s._v("Services")]),s._v(" / "),t("strong",[s._v("DataServices")]),s._v("目录下"),t("br")]),s._v(" "),t("p",[s._v("2 领域服务都存放于"),t("strong",[s._v("Skyline.Businsess")]),s._v("项目的"),t("strong",[s._v("Services")]),s._v(" / "),t("strong",[s._v("DomainServices")]),s._v("目录下"),t("br")]),s._v(" "),t("p",[s._v("3 数据服务或领域服务下如果属于公用场景，都放置于相应的"),t("strong",[s._v("Shared")]),s._v("目录中"),t("br")]),s._v(" "),t("p",[s._v("4 数据服务或领域服务下如果是独立场景的需要建立一个相应业务的文件夹，相关服务放置其中")]),s._v(" "),t("p",[s._v("5 数据服务一般都需要继承BaseDataService<根实体>基类，基类中实现了绝大部分操作数据需要的方法")]),s._v(" "),t("p",[s._v("6 服务命名和实体字段命名尽量简洁，但是避免使用简称或者首字母缩写，控制在3个单词以内，遵照大驼峰命名规范，不允许使用复数，数据服务以DataService结尾，领域服务以Service结尾")]),s._v(" "),t("p",[s._v("7 更多规范看下面的示例")])]),s._v(" "),t("p",[s._v("下面以会员数据服务示例和注释：")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-csharp"}},[t("span",{attrs:{class:"hljs-comment"}},[t("span",{attrs:{class:"hljs-doctag"}},[s._v("///")]),s._v(" "),t("span",{attrs:{class:"hljs-doctag"}},[s._v("<summary>")])]),s._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[t("span",{attrs:{class:"hljs-doctag"}},[s._v("///")]),s._v(" 会员的数据服务")]),s._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[t("span",{attrs:{class:"hljs-doctag"}},[s._v("///")]),s._v(" "),t("span",{attrs:{class:"hljs-doctag"}},[s._v("</summary>")])]),s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("public")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("MemberDataService")]),s._v(" : "),t("span",{attrs:{class:"hljs-title"}},[s._v("BaseDataService")]),s._v("<"),t("span",{attrs:{class:"hljs-title"}},[s._v("Member")]),s._v(">\n{\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("//继承基类后，构造方法需要实现对SQLDbContent的注入，并指定实体实例")]),s._v("\n    "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("public")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("MemberDataService")]),s._v("("),t("span",{attrs:{class:"hljs-params"}},[s._v("SqlDbContext db")]),s._v(") : "),t("span",{attrs:{class:"hljs-title"}},[s._v("base")]),s._v("("),t("span",{attrs:{class:"hljs-params"}},[s._v("db, (")]),s._v(") ")]),s._v("=> db.Members)\n    {\n    }\n\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("//此处是重写了基类方法")]),s._v("\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("//除了item参数是实体字段外，另外几个参数含义分别为：")]),s._v("\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("//needConcurrencyCheck=是否启动“乐观并发”检查，开启会检查实体基类中RecordVersion字段，判断当前变更的实体是否是数据库最新的版本，不是的话会抛异常")]),s._v("\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("//transaction=数据库实物对象，如果本方法的只是一次事务中的一个步骤，那么这个事物则会起到作用，在所有步骤完成之后才会一起提交")]),s._v("\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("//theOperator=当前操作对象，对应登录的token来进行身份识别")]),s._v("\n    "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("public")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("override")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("async")]),s._v(" Task "),t("span",{attrs:{class:"hljs-title"}},[s._v("AddAsync")]),s._v("("),t("span",{attrs:{class:"hljs-params"}},[s._v("Member item, \n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("bool")]),s._v(" needConcurrencyCheck = "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(", DbContextTransaction transaction = "),t("span",{attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(", UserOperator theOperator = "),t("span",{attrs:{class:"hljs-literal"}},[s._v("null")])]),s._v(")\n    ")]),s._v("{\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (item.MemberEducateRecords != "),t("span",{attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(" && item.MemberEducateRecords.Any())\n        {\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("foreach")]),s._v(" ("),t("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" record "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("in")]),s._v(" item.MemberEducateRecords)\n            {\n                "),t("span",{attrs:{class:"hljs-comment"}},[s._v("//针对嵌套情况，里面的子对象需要单独执行PrepareEntityToSave，这个方法里面会将子对象的ID，版本，创建时间/人，修改时间/人等赋值")]),s._v("\n                DB.PrepareEntityToSave(record, needConcurrencyCheck, theOperator);\n            }\n        }\n        "),t("span",{attrs:{class:"hljs-comment"}},[s._v("//如果只是单纯只是一个实体的插入，直接调用基类的AddAsync即可，如果是有嵌套的实体，请看上面的子对象的PrepareEntityToSave操作")]),s._v("\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("await")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("base")]),s._v(".AddAsync(item, needConcurrencyCheck, transaction, theOperator);\n    }\n")])]),s._v(" "),t("p",[s._v("大部分查询，插入，更新，删除方法基类中都已写好，个别复杂或者特定的需要重写，针对这一块的其他重写示例之后将继续完善……")])])}],n=t("XyMi"),v=null,l=!1,c=null,_=null,o=null,p=Object(n["a"])(v,e,r,l,c,_,o);a["default"]=p.exports},D1az:function(s,a,t){s.exports=t("6SFB")}});
//# sourceMappingURL=12.a0a5bd35.js.map