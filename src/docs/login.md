## 登录

启动程序默认跳转到 ``http://localhost:4200/apps/member`` 页面，因为在 main 模块里面设置了路由

```json
{
    path: '',
    redirectTo: 'apps/member',
    pathMatch: 'full'
}
```

:::tip
通过路由守护会判断用户登录状态，如果登录就进入 member 页面，否则回到 login 页面。 <br>
./src/app/core/services/auth-guard.service.ts <br>
./src/app/main/main.module.ts
:::

### 成功登录

成功登陆后，会进行如下操作。

* 在内存中预先加载所有api，通过key-value的形式将数据存放在内存中。
* 将token和tenantId存放在cookie中。
* 通过 ./src/app/core/services/user-info.service.ts 将用户数据存放在内存中，方便程序在任何地方获取用户信息。