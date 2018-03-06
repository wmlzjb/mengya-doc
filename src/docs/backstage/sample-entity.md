## 实体对象

在开发具体业务功能过程中，根据具体业务会创建很多实体(Entity)，映射对应到数据库中的表，编写规范如下：

:::tip

1 实体都存放于**Skyline.Businsess**项目的**Entities**目录下<br>

2 在**Entities**目录下如果实体属于公用实体放置于**Shared**目录中<br>

3 在**Entities**目录下如果是独立模块的实体需要建立一个相应业务的文件夹，相关实体放置其中

4 实体都需要继承**BaseEntity**基类，在基类中包含主键、创建时间/人、修改时间/人、版本字段，不需要在实体中重复定义

5 实体如果较为复杂，比如包含对其他对象的关联，则需要抽出简单类型字段为Base类，实体继承于Base类，Base类继承于基类

6 实体命名和实体字段命名尽量简洁，但是避免使用简称或者首字母缩写，控制在3个单词以内，遵照大驼峰命名规范，如果不是集合，不允许使用复数

:::

下面以会员实体示例：

```csharp
/// <summary>
/// 会员实体基类
/// </summary>
public class MemberBase : BaseEntity
{
    /// <summary>
    /// 会员序号
    /// </summary>
    [Required]
    public string No { get; set; }
    /// <summary>
    /// 会员姓名
    /// </summary>
    [Required]
    public string Name { get; set; }
    /// <summary>
    /// 会员缴费日期
    /// </summary>
    public DateTime PaymentDate { get; set; }
    ......
}
```

```csharp
/// <summary>
/// 会员实体
/// </summary>
public class Member : MemberBase
{
    /// <summary>
    /// 培训记录
    /// </summary>
    public virtual List<MemberEducateRecord> MemberEducateRecords { get; set; }
}
```

实体创建完成后，需要再数据上下文对象中定义，位置在**Skyline.Businsess**的DbContexts目录下的SqlDbContext.cs文件，示例如下：

```csharp
public IDbSet<Member> Members { get; set; }
```