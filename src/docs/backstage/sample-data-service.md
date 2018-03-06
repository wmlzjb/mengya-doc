## 业务服务

业务服务承载着绝大部分的业务相关的代码，根据复杂程度和关联性分为两种服务：数据服务类、领域服务类，数据服务一般用于处理简单的数据交互操作，领域服务并不是DDD中指的标准领域服务，而是应对复杂的，超过两个独立数据数据服务的业务场景下的一种服务，基本编写规范如下：

:::tip

1 数据服务都存放于**Skyline.Businsess**项目的**Services** / **DataServices**目录下<br>

2 领域服务都存放于**Skyline.Businsess**项目的**Services** / **DomainServices**目录下<br>

3 数据服务或领域服务下如果属于公用场景，都放置于相应的**Shared**目录中<br>

4 数据服务或领域服务下如果是独立场景的需要建立一个相应业务的文件夹，相关服务放置其中

5 数据服务一般都需要继承BaseDataService<根实体>基类，基类中实现了绝大部分操作数据需要的方法

6 服务命名和实体字段命名尽量简洁，但是避免使用简称或者首字母缩写，控制在3个单词以内，遵照大驼峰命名规范，不允许使用复数，数据服务以DataService结尾，领域服务以Service结尾

7 更多规范看下面的示例
:::

下面以会员数据服务示例和注释：

```csharp
/// <summary>
/// 会员的数据服务
/// </summary>
public class MemberDataService : BaseDataService<Member>
{
    //继承基类后，构造方法需要实现对SQLDbContent的注入，并指定实体实例
    public MemberDataService(SqlDbContext db) : base(db, () => db.Members)
    {
    }

    //此处是重写了基类方法
    //除了item参数是实体字段外，另外几个参数含义分别为：
    //needConcurrencyCheck=是否启动“乐观并发”检查，开启会检查实体基类中RecordVersion字段，判断当前变更的实体是否是数据库最新的版本，不是的话会抛异常
    //transaction=数据库实物对象，如果本方法的只是一次事务中的一个步骤，那么这个事物则会起到作用，在所有步骤完成之后才会一起提交
    //theOperator=当前操作对象，对应登录的token来进行身份识别
    public override async Task AddAsync(Member item, 
        bool needConcurrencyCheck = true, DbContextTransaction transaction = null, UserOperator theOperator = null)
    {
        if (item.MemberEducateRecords != null && item.MemberEducateRecords.Any())
        {
            foreach (var record in item.MemberEducateRecords)
            {
                //针对嵌套情况，里面的子对象需要单独执行PrepareEntityToSave，这个方法里面会将子对象的ID，版本，创建时间/人，修改时间/人等赋值
                DB.PrepareEntityToSave(record, needConcurrencyCheck, theOperator);
            }
        }
        //如果只是单纯只是一个实体的插入，直接调用基类的AddAsync即可，如果是有嵌套的实体，请看上面的子对象的PrepareEntityToSave操作
        await base.AddAsync(item, needConcurrencyCheck, transaction, theOperator);
    }
```

大部分查询，插入，更新，删除方法基类中都已写好，个别复杂或者特定的需要重写，针对这一块的其他重写示例之后将继续完善……