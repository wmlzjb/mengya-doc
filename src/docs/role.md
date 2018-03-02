## 权限

程序为权限控制添加了菜单级别的权限和页面元素的权限，在该程序中权限称为 ``role`` 每个权限都有对应的资源 ``resource`` 所有权限控制实际是针对资源的控制。

### 菜单权限

在 ``./src/app/navigation.model.ts`` 中是程序的所有菜单配置，在配置中有一个属性是 ``resource``

```json
{
    'title'   : '会员统计',
    'type'    : 'group',
    'icon'    : 'apps',
    'children': [
        {
            'title': '会员列表',
            'type' : 'item',
            'icon' : 'today',
            'url'  : '/apps/member',
            'resource' : 'View_Member'
        }
    ]
}
```

``resource`` 对应的就是权限的资源。

:::tip
因为菜单控件是fuse模板的控件，所以在做菜单权限控制的时候需要修改原来的控件 <br>
在 ./src/app/core/components/navigation 目录下对菜单控件进行改造来判断当前登录用户的权限资源。<br>
通过对 navigation.service 修改，对用户资源和菜单资源进行比对，进行数据筛选，然后在 nav-collapse、nav-group、nav-item 控件中进行显示隐藏的控制。
:::

### 元素权限

除了菜单权限控制显示隐藏，页面元素也要通过用户权限资源来控制显示隐藏，元素控制是通过 ``directive`` 控制的，./src/app/core/directives/resource/resource-action.directive.ts

```javascript
@Directive({ selector: '[resourceAction]' })
```

在页面中使用时，要传入指定的 ``resource`` directive 会通过用户资源来判断该元素是否显示。

```html
<button md-raised-button class="submit-button" *resourceAction="'View_Member_Add_Button'">
```

:::tip
指令传入的必须是字符串格式。
:::