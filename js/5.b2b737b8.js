webpackJsonp([5],{MMQu:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("h2",{attrs:{id:"lan-jie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lan-jie","aria-hidden":"true"}},[e._v("¶")]),e._v(" 拦截")]),e._v(" "),a("p",[e._v("为了控制数据请求限制，需要在每次请求的时候进行拦截，对请求进行统一处理。")]),e._v(" "),a("h3",{attrs:{id:"lan-jie-qi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lan-jie-qi","aria-hidden":"true"}},[e._v("¶")]),e._v(" 拦截器")]),e._v(" "),a("p",[e._v("拦截器所在位置 ./src/app/core/services/rest/http-interceptor.service.ts 在所有请求开始之前添加请求头，为服务端传入"),a("code",{pre:!0},[e._v("token")]),e._v("和"),a("code",{pre:!0},[e._v("tenantId")])]),e._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-json"}},[e._v("setHeaders: {\n    Authorization: `Bearer ${zeta_token}`,\n    TenantId: zeta_tenant_id\n}\n")])]),e._v(" "),a("p",[e._v("因为所有模块都需要拦截器，所以拦截器添加在 ./src/app/core/modules/shared.module.ts 在sharedModule注入拦截器。")]),e._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-javascript"}},[e._v("providers: [\n        [{ "),a("span",{attrs:{class:"hljs-attr"}},[e._v("provide")]),e._v(": MD_DIALOG_DATA }, { "),a("span",{attrs:{class:"hljs-attr"}},[e._v("provide")]),e._v(": HTTP_INTERCEPTORS, "),a("span",{attrs:{class:"hljs-attr"}},[e._v("useClass")]),e._v(": SkyLineInterceptor, "),a("span",{attrs:{class:"hljs-attr"}},[e._v("multi")]),e._v(": "),a("span",{attrs:{class:"hljs-literal"}},[e._v("true")]),e._v(" }]\n    ]\n")])])])}],n=a("XyMi"),l=null,_=!1,v=null,c=null,i=null,o=Object(n["a"])(l,s,r,_,v,c,i);t["default"]=o.exports},jUHd:function(e,t,a){e.exports=a("MMQu")}});
//# sourceMappingURL=5.b2b737b8.js.map