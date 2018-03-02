
## Alert 警告

用于页面中展示重要的提示信息。

### 基本用法

页面中的非浮层元素，不会自动消失。

### 自定义关闭按钮

自定义关闭按钮为文字或其他符号。

### 带有 icon

表示某种状态时提升可读性。

### 文字居中

使用 `center` 属性让文字水平居中。

### 带有辅助性文字介绍

包含标题和内容，解释更详细的警告。

### 带有 icon 和辅助性文字介绍

### Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| **title** | 标题，**必选参数** | string | — | — |
| type | 主题 | string | success/warning/info/error | info |
| description | 辅助性文字。也可通过默认 slot 传入 | string | — | — |
| closable | 是否可关闭 | boolean | — | true |
| center | 文字是否居中 | boolean | — | true |
| close-text | 关闭按钮自定义文本 | string | — | — |
| show-icon | 是否显示图标 | boolean | — | false |

### Events

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| close | 关闭alert时触发的事件 | — |
