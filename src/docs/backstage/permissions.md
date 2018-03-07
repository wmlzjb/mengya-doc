## 角色和资源

框架中中除了基本的基础设施类之外，还完整实现了“权限模块”，涉及到的概念有角色、资源，和令牌授权一样，开发人员只需要了解基本流程和怎么使用即可。<br>

### 角色、资源、用户间的关系

:::tip
1 一个用户可以属于一个角色（一对一）<br>

2 一个角色可以有多个资源，资源也可以同时属于多个角色（多对多）<br>

3 资源以Code（编码）为关键字段，在具体的API将Code硬编码至指定Action的**Resources**拦截器中，以实现权限控制<br>

:::

### 资源拦截器
资源拦截器基本实现逻辑是在客户端发情Request请求，并进入API Action主体代码块之前，拦截掉请求，优先进入到拦截器的代码中，而代码中将解析客户端请求头中包含的Token，并解析成用户操作对象，然后在数据库中根据对象的角色，查询其对象是否拥有构造方法中传入的资源Code，如果存在，则代表允许继续请求Action，否者抛出异常。<br>

资源Code拦截示例
```csharp
/// <summary>
///  根据Id获取会员
/// </summary>
/// <param name="id"></param>
/// <param name="options"></param>
/// <returns></returns>
[Route("{id}", Name = "GetMember")]
[Resources("View_Member")]//资源拦截器，其中的View_Member就是资源Code
public override IHttpActionResult Get(string id, ODataQueryOptions<MemberViewModel> options)
{
    ......
}
```

:::tip
除了对单个资源Code进行拦截，目前也支持 ‘and’ 和 ‘or’ 语法来拦截，示例：<br>

```csharp
//允许若干个资源Code进行and组合，需要所有资源Code全部命中，就算允许通过
[Resources("View_Member and View_List and View_Info")] 
```

```csharp
//允许若干个资源Code进行or组合，只要其中有一个资源Code命中，就算允许通过
[Resources("View_Member or View_List or View_Info")]
```

```csharp
//注意！暂时不支持下面这种and和or同时组合的情况
[Resources("View_Member or View_List and View_Info")]
```

:::

