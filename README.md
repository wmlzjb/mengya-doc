# mengya-doc

## 开始

```bash
npm run script serve
```

## 菜单配置

在 ./src/components/content.vue 中配置左边菜单栏。

## 路由配置

在 ./src/route.config.js 中配置路由

```javascript
component: () => import('./docs/login.md')
```

路由对应的 ``component`` 是加载的 ``markdown`` 文件
