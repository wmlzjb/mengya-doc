
## 前言

本文档是对Skyline后端框架（文档中简称“框架”）的指导性文档，旨在细致的对框架中的核心技术点、搭建思路和疑难问题做出解释和阐述，并提供一个“会员课程报名”的示例模块以便于阅读者理解。

## 技术
框架基于.NET Framework4.7搭建，

#### 平台

#### 对象关系映射（ORM）


#### 依赖注入（IOC）


## 项目结构

### 01. 基础设施
|名称|说明|依赖|
|----------|---------------------------------------|---------------------------------------|
| Skyline.Infrastructure | 通用设施类，内含异常、拦截器、Linq扩展和各种Helper等类 |-|
| Skyline.Infrastructure.Aliyun | 阿里云相关，与阿里云通信的SDK，内含核心模块和短信模块 |-|
| Skyline.Infrastructure.IdentityServer3 | - |-|
| Skyline.Infrastructure.WebApi | 通用WebApi设施类，内含SwaggerOAuth，Http请求异常处理等类 |-|
