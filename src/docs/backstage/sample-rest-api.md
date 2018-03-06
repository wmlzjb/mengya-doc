## API

API直接给客户端提供数据服务，基于Restful规范编写，一般分为Post、Put、Delete、Get几种，基本编写规范如下：

:::tip

1 API都存放于**Skyline.Web.Api**项目的**Controllers**目录下<br>

3 **Controllers**目录下的API如果属于公用场景，都放置于相应的**Shared**目录中<br>

4 **Controllers**目录下如果是独立场景的需要建立一个相应业务的文件夹，相关服务放置其中

5 数据服务一般都需要继承EntityController<数据服务, 实体, ViewModel, PostModel, PutModel>基类，基类中实现了绝大部分的方法: 

6 API命名和实体字段命名尽量简洁，但是避免使用简称或者首字母缩写，控制在3个单词以内，遵照大驼峰命名规范，不允许使用复数，领域服务以Controller结尾

7 更多规范看下面的示例
:::

下面以会员数据服务示例和注释：

```csharp
/// <summary>
/// 
/// </summary>
[RoutePrefix("api/members")]
public class MemberController : EntityController<MemberDataService, Member, MemberViewModel, MemberPostModel, MemberPutModel>
{
    //构造函数注入需要的数据服务
    public MemberController(UserService userService, MemberDataService dataService) : base(dataService, userService, "GetMember")
    {
    }

    /// <summary>
    /// 获取所有会员
    /// </summary>
    /// <param name="options"></param>
    /// <returns></returns>
    [Route("")]//路由
    [ResponseType(typeof(PagedResult<MemberViewModel>))]//返回值类型
    [Resources("View_Member")]//资源Code
    public override IHttpActionResult GetAll(ODataQueryOptions<Member> options)//OData参数
    {
        return base.GetAll(options);//调用基类提供的默认Get方法
    }

    /// <summary>
    ///  根据Id获取会员
    /// </summary>
    /// <param name="id"></param>
    /// <param name="options"></param>
    /// <returns></returns>
    [Route("{id}", Name = "GetMember")]//路由
    [ResponseType(typeof(MemberViewModel))]//返回值类型
    [Resources("View_Member")]//资源Code
    public override IHttpActionResult Get(string id, ODataQueryOptions<MemberViewModel> options)
    {
        return base.Get(id, options);//调用基类提供的默认Get方法
    }

    /// <summary>
    /// 创建会员
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>
    [Route("")]//路由
    [ResponseType(typeof(MemberViewModel))]//返回值类型
    public override async Task<IHttpActionResult> Post(MemberPostModel model)
    {
        return await base.Post(model);//调用基类提供的默认Post方法
    }

    /// <summary>
    /// 修改会员
    /// </summary>
    /// <param name="id"></param>
    /// <param name="model"></param>
    /// <returns></returns>
    [Route("{id}")]//路由
    [ResponseType(typeof(MemberViewModel))]//返回值类型
    public override async Task<IHttpActionResult> Put(string id, MemberPutModel model)
    {
        var item = await _dataService.UpdateAsync(id, model, true, null, null);//调用数据服务进行更新
        var toReturn = Mapper.Map<MemberViewModel>(item);//通过AutoMapper转换成ViewModel
        return Ok(toReturn);
    }
```

其他示例之后将继续完善……