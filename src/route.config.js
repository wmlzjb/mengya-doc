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
                // component: r => require.ensure([], () => r(require('./docs/quickstart.md')))
                component: () => import('./docs/quickstart.md')
            }
        ]
    },
    { path: '/', redirect: '/content/installation' },
    { path: '*', redirect: '/content/installation' },
]

export default routes;