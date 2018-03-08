## 路由

路由目前分为 ``main`` 和 ``user`` 两部分，因为这两个模块分别是不同的模板页面，如果以后有更多的模板页可能会分为更多的路由模块。

### Main

``./src/app/main/main.module.ts`` 这一部分是登录之后页面的模块，全部在 ``apps`` 子路由下面，然后内部其它子模块通过路由懒加载完成。

```json
{
    path: 'apps', component: FuseMainComponent, canActivate: [AuthGuard],
    children: [
        {
            path: 'role',
            loadChildren: '..biz/role/role.module#SkylineRoleModule'
        }
    ]
}
```

### User

``./src/app/user/user.module.ts`` 这一部分是登录页面的模块，全部在 ``user`` 子路由下面，该模块结构目前比较简单，所以直接路由对应component即可。

```json
{
    path: 'user', component: UserLayoutComponent,
    children: [
        { path: 'login', component: LoginComponent}
    ]
}
```