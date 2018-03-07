## 令牌授权

项目中绝大部分API都需要对当前的请求进行身份认证，而确认是否认证有效的User（用户）和Token（令牌）都是由**Skyline.Web.CA**进行创建、销毁、校验的，而开发人员其实可以不用过多关心其中使用到的技术，一般只需要了解到大概的流程和具体使用方式即可。


### 创建User的过程
:::tip

1 前端客户端凭借注册相关字段，调用**Skyline.Web.API**的**Register API**<br>

2 **Skyline.Web.API**接收数据后校验，并在服务端代码中请求调用CA的**Skyline.Web.CA**的**Register API**<br>

3 **Skyline.Web.CA**接收数据后校验，插入至**Skyline.CA**数据库，并将注册结果返回至**Skyline.Web.API**<br>

4 **Skyline.Web.API**拿到返回结果后，通知给前端客户端结果<br>

:::

### 创建Token的过程
:::tip

1 前端客户端凭借登录相关字段，调用**Skyline.Web.API**的**Login API**<br>

2 **Skyline.Web.API**接收数据后校验，并在服务端代码中请求调用CA的**Skyline.Web.CA**的**Login API**<br>

3 **Skyline.Web.CA**接收数据后校验，并将登录Token信息返回至**Skyline.Web.API**<br>

4 **Skyline.Web.API**拿到返回Token后，返回至前端客户端，前端客户端通过例如Cookie等手段持久化至本地<br>

:::

### 使用和校验Token
:::tip

1 前端客户端在调用**Skyline.Web.API**的业务API的时候，将本地持久化的Token信息带入到Http头之中（Token），例如：<br>
```csharp
setHeaders: {
   Authorization: `Bearer ${zeta_token}`,
   ......
},
```

2 **Skyline.Web.API**接收到客户端传入的请求后，通过API的Action中使用**GetOperator()**方法来取当前Token，同时也在这个方法中根据Token解析出当前登用的用户操作对象，例如：<br>
```csharp
/// <summary>
/// 获取全部会员
/// </summary>
/// <returns></returns>
[Route("export")]
[HttpGet]
public HttpResponseMessage GetMembers()
{
    var operator = this.GetOperator(_userService);//当前登用的用户操作对象
    ......
}
```
:::

如果Token没有，或者被伪造、遭到篡改、过期等情况，取出来的对象将为空，同时如果该API是必须由令牌才能访问，将会触发权限资源拦截器，抛出“权限不足”等异常，详细的将在“角色和资源”章节进行介绍。