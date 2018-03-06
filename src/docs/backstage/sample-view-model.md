## 数据传输对象

数据传输对象(DTO)起着连接应用层和业务服务之间的作用，根据Restful API的特性，传输对象一般分为Post、Put、View几种，少数复杂删除的情况甚至会出现Delete对象，
这种对象与实体(Entity)字段与命名都极其相似，但不可以混为一谈，因为数据传输对象是贫血无行为的，只用于数据从前端到后端业务服务层的传递工作，一般这种数据传输对象称为Model，编写规范如下：

:::tip

1 Model都存放于**Skyline.Businsess**项目的**ViewModels**目录下<br>

2 在**ViewModels**目录下如果Model属于公用Model放置于**Shared**目录中<br>

3 在**ViewModels**目录下如果是独立模块的Model体需要建立一个相应业务的文件夹，相关Model放置其中

4 由于大部分字段相同，Model一般都继承对应实体的基类，省时省力，但是特定需求也可以全部重新定义

5 实体命名和实体字段命名尽量简洁，但是避免使用简称或者首字母缩写，控制在3个单词以内，遵照大驼峰命名规范，如果不是集合，不允许使用复数，根据操作类型以PostModel/PutModel/DeleteModel/ViewModel结尾

:::

下面以会员Model示例：

```csharp
public class MemberViewModel : MemberBase
{
    public List<MemberEducateRecordViewModel> MemberEducateRecords { get; set; }
}
public class MemberPostModel : MemberBase
{
    public List<MemberEducateRecordPostModel> MemberEducateRecords { get; set; }
}
public class MemberPutModel : MemberBase
{
    public List<MemberEducateRecordPutModel> MemberEducateRecords { get; set; }
}
```