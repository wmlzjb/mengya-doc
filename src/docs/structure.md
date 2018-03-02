## 目录结构

在进行业务开发的时候，我们主要关注的 ``biz`` 和 ``core`` 文件夹。

| 目录地址 | 说明 | 备注 |
|---------|--------|---------|
| ./gulp | 生成models的gulp任务 | - |
| ./src | 项目站点文件夹 | - |
| ./src/assets | 项目静态文件目录 | - |
| ./src/assets/angular-material-examples | fuse模板的 ``angular-material`` 的例子 | - |
| ./src/swagger | 读取api接口配置文件 | 通过任务自动生成，需要提交到git |
| ./src/environments | 站点环境配置文件目录 | - |
| ./src/app | 站点app目录 | - |
| ./src/app/biz | 站点业务逻辑开发的目录 | 开发工作大部分在此文件夹内 |
| ./src/app/core | app核心库 | - |
| ./src/app/core/components | 公共控件目录 | - |
| ./src/app/core/directives | 公共指令目录 | - |
| ./src/app/core/modules | 定义core的module | - |
| ./src/app/core/pipes | 公共管道目录 | - |
| ./src/app/core/scss | fuse模板的核心样式目录 | - |
| ./src/app/core/scss-skyline | 根据业务逻辑项目自定义样式目录 | - |
| ./src/app/core/services | 公共服务目录 | - |
| ./src/app/core/skyline-components | 根据业务逻辑自定义公共控件目录 | - |
| ./src/app/fuse-fake-db | fuse模板的数据json目录 | - |
| ./src/app/main | 站点登录后页面主体结构目录 | - |
| ./src/app/models | 通过gulp任务访问api自动生成的model文件 | 在后台api有更新之后，我们运行gulp任务，该文件夹会有更新，需要提交到git |
| ./src/app/user | 站点登录页面模块 | - |