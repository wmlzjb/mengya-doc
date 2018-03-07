import MainContent from './components/content.vue';

const routes = [
    {
        path: '/content', component: MainContent,
        children: [
            {
                path: 'installation',
                meta: {
                    title: '安装',
                    description: '',
                    lang: 'zh-CN'
                },
                name: 'component-installation',
                //   component: r => require.ensure([], () => r(require('./docs/installation.md')))
                component: () => import('./docs/installation.md')
            },
            {
                path: 'quickstart',
                meta: {
                    title: '快速上手',
                    description: '',
                    lang: 'zh-CN'
                },
                name: 'component-quickstart',
                component: () => import('./docs/quickstart.md')
            },
            {
                path: 'structure',
                meta: {
                    title: '目录结构',
                    description: '',
                    lang: 'zh-CN'
                },
                name: 'component-structure',
                component: () => import('./docs/structure.md')
            },
            {
                path: 'login',
                meta: {
                    title: '登录',
                    description: '',
                    lang: 'zh-CN'
                },
                name: 'component-login',
                component: () => import('./docs/login.md')
            }
            ,
            {
                path: 'interceptor',
                meta: {
                    title: '拦截',
                    description: '',
                    lang: 'zh-CN'
                },
                name: 'component-interceptor',
                component: () => import('./docs/interceptor.md')
            }
            ,
            {
                path: 'role',
                meta: {
                    title: '权限',
                    description: '',
                    lang: 'zh-CN'
                },
                name: 'component-role',
                component: () => import('./docs/role.md')
            }
            ,
            {
                path: 'project-framework',
                meta: {
                    title: '结构',
                    description: '',
                    lang: 'zh-CN'
                },
                name: 'project-framework',
                component: () => import('./docs/backstage/project-framework.md')
            }
            ,
            {
                path: 'project-config',
                meta: {
                    title: '配置',
                    description: '',
                    lang: 'zh-CN'
                },
                name: 'project-config',
                component: () => import('./docs/backstage/project-config.md')
            }
            ,
            {
                path: 'project-migrations',
                meta: {
                    title: '数据库迁移',
                    description: '',
                    lang: 'zh-CN'
                },
                name: 'project-migrations',
                component: () => import('./docs/backstage/project-migrations.md')
            }
            ,
            {
                path: 'project-startup',
                meta: {
                    title: '启动项',
                    description: '',
                    lang: 'zh-CN'
                },
                name: 'project-startup',
                component: () => import('./docs/backstage/project-startup.md')
            }
            ,
            {
                path: 'sample-entity',
                meta: {
                    title: '实体对象',
                    description: '',
                    lang: 'zh-CN'
                },
                name: 'sample-entity',
                component: () => import('./docs/backstage/sample-entity.md')
            }
            ,
            {
                path: 'sample-view-model',
                meta: {
                    title: '数据传输对象',
                    description: '',
                    lang: 'zh-CN'
                },
                name: 'sample-view-model',
                component: () => import('./docs/backstage/sample-view-model.md')
            }
            ,
            {
                path: 'sample-data-service',
                meta: {
                    title: '业务服务',
                    description: '',
                    lang: 'zh-CN'
                },
                name: 'sample-data-service',
                component: () => import('./docs/backstage/sample-data-service.md')
            }
            ,
            {
                path: 'sample-rest-api',
                meta: {
                    title: 'API',
                    description: '',
                    lang: 'zh-CN'
                },
                name: 'sample-rest-api',
                component: () => import('./docs/backstage/sample-rest-api.md')
            }
            ,
            {
                path: 'waiting',
                meta: {
                    title: 'WAITING',
                    description: '',
                    lang: 'zh-CN'
                },
                name: 'waiting',
                component: () => import('./docs/backstage/waiting.md')
            }
            ,
            {
                path: 'token-auth',
                meta: {
                    title: '令牌授权',
                    description: '',
                    lang: 'zh-CN'
                },
                name: 'token-auth',
                component: () => import('./docs/backstage/token-auth.md')
            }
            ,
            {
                path: 'permissions',
                meta: {
                    title: '角色和资源',
                    description: '',
                    lang: 'zh-CN'
                },
                name: 'permissions',
                component: () => import('./docs/backstage/permissions.md')
            }
            ,
        ]
    },
    { path: '/', redirect: '/content/installation' },
    { path: '*', redirect: '/content/installation' },
]

export default routes;