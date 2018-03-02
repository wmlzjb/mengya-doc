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
            }
            ,
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
        ]
    },
    { path: '/', redirect: '/content/installation' },
    { path: '*', redirect: '/content/installation' },
]

export default routes;