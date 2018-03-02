## 拦截

为了控制数据请求限制，需要在每次请求的时候进行拦截，对请求进行统一处理。

### 拦截器

拦截器所在位置 ./src/app/core/services/rest/http-interceptor.service.ts 在所有请求开始之前添加请求头，为服务端传入``token``和``tenantId``

```json
setHeaders: {
    Authorization: `Bearer ${zeta_token}`,
    TenantId: zeta_tenant_id
}
```

因为所有模块都需要拦截器，所以拦截器添加在 ./src/app/core/modules/shared.module.ts 在sharedModule注入拦截器。

```javascript
providers: [
        [{ provide: MD_DIALOG_DATA }, { provide: HTTP_INTERCEPTORS, useClass: SkyLineInterceptor, multi: true }]
    ]
```