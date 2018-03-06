## 项目配置

### Skyline.Web.CA 配置

CA项目是专用于登录、注册、令牌授权的应用服务，其配置位于项目根目录的Web.config中，需要关注如下配置项：

```xml
<connectionStrings>
    <!--数据库连接字符串-->
    <add name="SkylineCA" providerName="System.Data.SqlClient" connectionString="Server=.\SQLEXPRESS;Database=Skyline.CA;Integrated Security=True;" /> 
</connectionStrings>
<appSettings>
    <!--CA的网站地址-->
    <add key="CA.Address" value="https://localhost:44301/" />
    ......
</appSettings>
```

:::tip
整段配置中，除了**数据库连接字符串**和**CA的网站地址**需要开发人员关注或修改，其他的配置是可以不用动的。<br>
:::

CA项目仅仅只做web.config配置还是不够，因为CA项目的安全级别要求较高，所有的请求都需要使用**HTTPS**来通信，CA证书的校验是必不可少的，
所以还需要在本机安装证书，下面以本机系统为Windows 10为例：
:::tip
1 在CA项目的IdSvr目录中找到**idsrv3test.pfx**文件<br>

2 右键选择**安装PFX**<br>

3 在弹出的界面中选择**本地计算机**<br>

4 点击下一步<br>

5 输入密码:**idsrv3test**，点击下一步<br>

6 选择**将所有的证书都放入下列存储**，点击浏览，选择**受信任的根证书颁发机构**，确定，下一步<br>

7 证书安装完成
:::


### Skyline.Web.Api 配置
CA项目是提供各客户端业务API，其配置位于项目根目录的Web.config中，需要关注如下配置项：

```xml
<connectionStrings>
    <!--数据库连接字符串-->
    <add name="SkylineDB" providerName="System.Data.SqlClient" connectionString="Server=.\SQLEXPRESS;Database=Skyline.DB;Integrated Security=True;" />
</connectionStrings>
<appSettings>
    <!--是否测试环境-->
    <add key="IsTest" value="true" />
    <!--是否属于增量Migrations-->
    <add key="IsIncrementMigrations" value="true"/>
    ......
    <!--Web的网站地址-->
    <add key="Web.Address" value="http://localhost:4200/" />
    <!--移动Web的网站地址-->
    <add key="Mobile.Address" value="http://localhost:4200/" />
    <!--File的网站地址-->
    <add key="File.Address" value="https://flocalhost:44302/" />
    <!--CA的网站地址-->
    <add key="CA.Address" value="https://localhost:44301/" />
    ......
    <!--API的网站地址-->
    <add key="API.Address" value="http://localhost:9999/" />
</appSettings>
```
:::tip
整段配置中，除了**数据库连接字符串**、**相关各个网站地址**、**是否测试环境**、**是否属于增量Migrations**需要开发人员关注或修改，其他的配置是可以不用动的。<br>

**是否测试环境**配置指的是当前运行环境是否是测试环境，在本地进行测试开发时应设为**true**；而当运行到live环境应设为**false**，当此配置设为**true**的时候，会检测数据库中是否已经存在为**jack**的用户，如果不存在，将自动创建这个用户以及诊所。<br>

**是否属于增量Migrations**配置指的是当前开发环境在迁移数据库时是否时增量迁移，在'数据库迁移和初始化'章节会说明此概念。
:::

:::tip
PS. 无论哪种配置，迁移的指令都是一样的。
:::


### Skyline.Web.File 配置
CA项目为各客户端提供文件服务，其配置位于项目根目录的Web.config中，需要关注如下配置项：

```xml
<appSettings>
    <!--CA的网站地址-->
    <add key="CA.Address" value="https://localhost:44301/" />
</appSettings>
```
:::tip
整段配置中，除了**CA的网站地址**需要开发人员关注或修改，其他的配置是可以不用动的。<br>
:::