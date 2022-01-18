
> **组件名：uni-nav-bar**
> 代码块： `uNavBar`
> 
>  [点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-nav-bar)

导航栏组件，主要用于头部导航。

> **注意事项**
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
> - 组件需要依赖 `sass` 插件 ，请根据提示自行手动安装
> - 组件内部依赖 `'uni-icons'` 组件
> - 请勿在组件内部使用，宽度可能会发生错误
> - 当前组件不支持文字大小的修改 ，如有需要请使用深度选择器覆盖样式

### 基本用法

```html
<uni-nav-bar title="导航栏组件"></uni-nav-bar>
```

### 开启阴影

使用 `shadow` 属性开启导航栏阴影

Tips:
- nvue 下某些机型可能显示不正常 ，建议 nvue 下关闭阴影

```html
<uni-nav-bar shadow title="导航栏组件"></uni-nav-bar>
```

### 开启暗黑模式

使用 `dark` 属性开启导航栏的暗黑模式

Tips:
- 暗黑模式只会改变组件默认的前景色和背景色，如果设置自定义颜色，自定义颜色将优先显示

```html
<uni-nav-bar dark title="导航栏组件"></uni-nav-bar>
```
### 自定义颜色

使用 `color` 属性修改导航栏前景色（文字图标颜色）

使用 `background-color` 属性修改导航栏背景色

```html
<uni-nav-bar dark title="导航栏组件"></uni-nav-bar>
```

### 带左右文字

使用 `left-text` 属性设置导航栏左侧文字

使用 `right-text` 属性设置导航栏右侧文字

Tips:
- 图标依赖 `uni-icons` 组件 ，可用图标类型参考 [uni-icons 示例](https://hellouniapp.dcloud.net.cn/pages/extUI/icons/icons)

```html
<uni-nav-bar left-text="返回" right-text="设置" title="标题" />
```


### 带左右图标

使用 `left-icon` 属性设置导航栏左侧图标

使用 `right-icon` 属性设置导航栏右侧图标

Tips:
- 图标依赖 `uni-icons` 组件 ，可用图标类型参考 [uni-icons 示例](https://hellouniapp.dcloud.net.cn/pages/extUI/icons/icons)
- **right-text 和 right-icon 属性不能同时存在，如需都使用，请使用 right 插槽自定义**

```html
<uni-nav-bar left-icon="left" right-icon="cart" title="标题" />
```

### 自定义高度

使用 `height` 属性设置导航栏高度

Tips:
- 组件默认高度为44px 
- 如使用 Number 类型传值默认单位为 px，使用 String 类型传值则必须带单位，如传值无效 ，则使用默认值

```html
<uni-nav-bar height="120rpx" title="自定义高度" />
```


## API

### NavBar Props

|属性名|类型|默认值	|说明|
|:-:|:-:|:-:|:-:|
|title|String|-|标题文字|
|leftText|String|-|左侧按钮文本|
|rightText|String|-|右侧按钮文本|
|leftIcon|String|-|左侧按钮图标（图标类型参考 [Icon 图标](http://ext.dcloud.net.cn/plugin?id=28) type 属性）	|
|rightIcon|String	|-|右侧按钮图标（图标类型参考 [Icon 图标](http://ext.dcloud.net.cn/plugin?id=28) type 属性）	|
|color|String|#000000|图标和文字颜色|
|backgroundColor|String	|#FFFFFF|导航栏背景颜色|
|fixed|Boolean|false|是否固定顶部|
|statusBar|Boolean|false|是否包含状态栏|
|shadow|Boolean|false|导航栏下是否有阴影|
|border|Boolean|true|导航栏下是否有边框|
|height|Number/String|44|导航栏高度|
|dark|Boolean|false|导航栏开启暗黑模式|

### NavBar Slots

支持向 NavBar 里插入不同内容，以达到自定义的目的。
|slot名	|说明|
|:-:|:-:|
|default|向导航栏中间插入	|
|left|向导航栏左侧插入	|
|right	|向导航栏右侧插入	|

```html
<uni-nav-bar>
    <view>标题栏</view>
    <view slot="left">left</view>
    <view slot="right">right</view>
</uni-nav-bar>
```

### NavBar Events

|事件名|说明|返回值|
|:-:|:-:|:-:|
|@clickLeft	|左侧按钮点击时触发|-|
|@clickRight|右侧按钮点击时触发|-|

## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/nav-bar/nav-bar](https://hellouniapp.dcloud.net.cn/pages/extUI/nav-bar/nav-bar)