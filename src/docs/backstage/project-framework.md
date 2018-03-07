## 项目结构

### 01. 基础设施
|名称|说明|
|--------------------|---------------------------------------|
| Skyline.Infrastructure | 通用设施类，内含异常、拦截器、Linq扩展和各种Helper等类 |
| Skyline.Infrastructure.Aliyun | 阿里云相关，与阿里云通信的SDK，内含核心模块和短信模块 |
| Skyline.Infrastructure.IdentityServer3 | Token相关 |
| Skyline.Infrastructure.WebApi | 通用WebApi设施类，内含SwaggerOAuth，Http请求异常处理等类 |

### 02. 业务服务
|名称|说明|
|--------------------|---------------------------------------|
| Skyline.Businsess| 业务逻辑与服务层，内含数据上下文对象(DbContexts)、数据实体(Entity)、数据传输对象(ViewModel)、枚举常量、数据服务、领域服务等类 |

### 03. 应用服务
|名称|说明|
|--------------------|---------------------------------------|
| Skyline.Web.File | 为各客户端提供文件服务 |
| Skyline.Web.CA | 用户登录、注册、令牌授权服务，提供给各应用统一的用户令牌服务 |
| Skyline.Web.Api | 提供各应用业务API，涵盖所有客户端，是整个系统最核心的业务处理模块 |

