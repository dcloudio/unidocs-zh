
`uni-app` 使用`Vue`的语法。

## 开发规范

为了实现多端兼容，综合考虑编译速度、运行性能等因素，`uni-app` 约定了如下开发规范：

- 页面文件遵循 [Vue 单文件组件 (SFC) 规范](https://vue-loader.vuejs.org/zh/spec.html)
- 组件标签采用自定义规范，详见[uni-app 组件规范](component/README.md)
- 数据绑定及事件处理同 `Vue.js` 规范，同时补充了App及页面的生命周期
- 为兼容多端运行，建议使用flex布局进行开发

## 目录结构

一个uni-app工程，默认包含如下目录及文件：

<pre v-pre="" data-lang="">
	<code class="lang-" style="padding:0">
┌─components            符合vue组件规范的uni-app组件目录
│  └─comp-a.vue         可复用的a组件
├─hybrid                App端存放本地html文件的目录，<a href="/component/web-view">详见</a>
├─platforms             存放各平台专用页面的目录，<a href="/platform?id=%E6%95%B4%E4%BD%93%E7%9B%AE%E5%BD%95%E6%9D%A1%E4%BB%B6%E7%BC%96%E8%AF%91">详见</a>
├─pages                 业务页面文件存放的目录
│  ├─index
│  │  └─index.vue       index页面
│  └─list
│     └─list.vue        list页面
├─static                存放应用引用的本地静态资源（如图片、视频等）的目录，<b>注意：</b>静态资源只能存放于此
├─uni_modules           存放[uni_module](/uni_modules)规范的插件。
├─main.js               Vue初始化入口文件
├─App.vue               应用配置，用来配置App全局样式以及监听 <a href="/collocation/frame/lifecycle?id=应用生命周期">应用生命周期</a>
├─manifest.json         配置应用名称、appid、logo、版本等打包信息，<a href="/collocation/manifest">详见</a>
└─pages.json            配置页面路由、导航条、选项卡等页面类信息，<a href="/collocation/pages">详见</a>
	</code>
</pre>

**Tips**
- 编译到任意平台时，`static` 目录下的文件均会被完整打包进去，且不会编译。非 `static` 目录下的文件（vue、js、css 等）只有被引用到才会被打包编译进去。
- `static` 目录下的 `js` 文件不会被编译，如果里面有 `es6` 的代码，不经过转换直接运行，在手机设备上会报错。
- `css`、`less/scss` 等资源不要放在 `static` 目录下，建议这些公用的资源放在自建的 `common` 目录下。

|有效目录|说明|
|:-:|:-:|
|app-plus|App|
|h5|H5|

## 资源路径说明



### 模板内引入静态资源

> `template`内引入静态资源，如`image`、`video`等标签的`src`属性时，可以使用相对路径或者绝对路径，形式如下

```html
<!-- 绝对路径，/static指根目录下的static目录，在cli项目中/static指src目录下的static目录 -->
<image class="logo" src="/static/logo.png"></image>
<image class="logo" src="@/static/logo.png"></image>
<!-- 相对路径 -->
<image class="logo" src="../../static/logo.png"></image>
```

**注意**

- `@`开头的绝对路径以及相对路径会经过base64转换规则校验
- 引入的静态资源在非h5平台，均不转为base64。
- H5平台，小于4kb的资源会被转换成base64，其余不转。
- 自`HBuilderX 2.6.6`起`template`内支持`@`开头路径引入静态资源，旧版本不支持此方式
- App平台自`HBuilderX 2.6.9`起`template`节点中引用静态资源文件时（如：图片），调整查找策略为【基于当前文件的路径搜索】，与其他平台保持一致

### js文件引入

> `js`文件或`script`标签内（包括renderjs等）引入`js`文件时，可以使用相对路径和绝对路径，形式如下

```js
// 绝对路径，@指向项目根目录，在cli项目中@指向src目录
import add from '@/common/add.js'
// 相对路径
import add from '../../common/add.js'
```

**注意**

- js文件不支持使用`/`开头的方式引入

### css引入静态资源

> `css`文件或`style标签`内引入`css`文件时（scss、less文件同理），可以使用相对路径或绝对路径（`HBuilderX 2.6.6`）

```css
/* 绝对路径 */
@import url('/common/uni.css');
@import url('@/common/uni.css');
/* 相对路径 */
@import url('../../common/uni.css');
```

**注意**

- 自`HBuilderX 2.6.6`起支持绝对路径引入静态资源，旧版本不支持此方式

> `css`文件或`style标签`内引用的图片路径可以使用相对路径也可以使用绝对路径。

```css
/* 绝对路径 */
background-image: url(/static/logo.png);
background-image: url(@/static/logo.png);
/* 相对路径 */
background-image: url(../../static/logo.png);
```

**Tips**

- 引入字体图标请参考，[字体图标](frame?id=字体图标)
- `@`开头的绝对路径以及相对路径会经过base64转换规则校验
- 不支持本地图片的平台，小于40kb，一定会转base64。（共四个平台mp-weixin, mp-qq, mp-toutiao, app v2）
- h5平台，小于4kb会转base64，超出4kb时不转。
- 其余平台不会转base64

## 生命周期


### 应用生命周期

``uni-app`` 支持 onLaunch、onShow、onHide 等应用生命周期函数，详情请参考[应用生命周期](/collocation/frame/lifecycle?id=应用生命周期)

### 页面生命周期

``uni-app`` 支持 onLoad、onShow、onReady 等生命周期函数，详情请参考[页面生命周期](/collocation/frame/lifecycle?id=页面生命周期)

## 路由

``uni-app``页面路由为框架统一管理，开发者需要在[pages.json](/collocation/pages?id=pages)里配置每个路由页面的路径及页面样式。所以 `uni-app` 的路由用法与 ``Vue Router`` 不同，如仍希望采用 `Vue Router` 方式管理路由，可在插件市场搜索 [Vue-Router](https://ext.dcloud.net.cn/search?q=vue-router)。

### 路由跳转

``uni-app`` 有两种页面路由跳转方式：使用[navigator](/component/navigator)组件跳转、调用[API](/api/router)跳转。

### 页面栈

框架以栈的形式管理当前所有页面， 当发生路由切换的时候，页面栈的表现如下：

|路由方式	|页面栈表现							|触发时机																						|
|---		|---								|---																							|
|初始化		|新页面入栈							|uni-app 打开的第一个页面																			|
|打开新页面	|新页面入栈							|调用 API &nbsp; [uni.navigateTo](/api/router?id=navigateto) &nbsp;、使用组件 &nbsp;<a href="/component/navigator?id=navigator">&lt;navigator open-type="navigate"/&gt;</a>							|
|页面重定向	|当前页面出栈，新页面入栈			|调用 API  &nbsp; [uni.redirectTo](/api/router?id=redirectto) &nbsp;、使用组件&nbsp; <a href="/component/navigator?id=navigator">&lt;navigator open-type="redirectTo"/&gt;</a>							|
|页面返回	|页面不断出栈，直到目标返回页		|调用 API &nbsp;[uni.navigateBack](/api/router?id=navigateback) &nbsp; 、使用组件&nbsp;<a href="/component/navigator?id=navigator">&lt;navigator open-type="navigateBack"/&gt;</a>&nbsp;、用户按左上角返回按钮、安卓用户点击物理back按键	|
|Tab 切换	|页面全部出栈，只留下新的 Tab 页面	|调用 API &nbsp;[uni.switchTab](/api/router?id=switchtab)&nbsp;  、使用组件&nbsp; <a href="/component/navigator?id=navigator">&lt;navigator open-type="switchTab"/&gt;</a>&nbsp; 、用户切换 Tab				|
|重加载		|页面全部出栈，只留下新的页面		|调用 API &nbsp;[uni.reLaunch](/api/router?id=relaunch)&nbsp;  、使用组件 &nbsp;<a href="/component/navigator?id=navigator">&lt;navigator open-type="reLaunch"/&gt;</a>						|

## 运行环境判断

### 开发环境和生产环境
``uni-app`` 可通过 ``process.env.NODE_ENV`` 判断当前环境是开发环境还是生产环境。一般用于连接测试服务器或生产服务器的动态切换。
- 在HBuilderX 中，点击“运行”编译出来的代码是开发环境，点击“发行”编译出来的代码是生产环境
- cli模式下，是通行的编译环境处理方式。

```javascript
if(process.env.NODE_ENV === 'development'){
    console.log('开发环境')
}else{
    console.log('生产环境')
}
```

如果你需要自定义更多环境，比如测试环境：
- 假设只需要对单一平台配置，可以 package.json 中配置，在HBuilderX的运行和发行菜单里会多一个出来。[https://uniapp.dcloud.io/collocation/package](https://uniapp.dcloud.io/collocation/package)
- 如果是针对所有平台配置，可以在 vue-config.js 中配置。[https://uniapp.dcloud.io/collocation/vue-config](https://uniapp.dcloud.io/collocation/vue-config)

**快捷代码块**

HBuilderX 中敲入代码块 `uEnvDev`、`uEnvProd` 可以快速生成对应 `development`、`production` 的运行环境判定代码。
```javascript
// uEnvDev
if (process.env.NODE_ENV === 'development') {
    // TODO
}
// uEnvProd
if (process.env.NODE_ENV === 'production') {
    // TODO
}
```

### 判断平台

平台判断有2种场景，一种是在编译期判断，一种是在运行期判断。

- 编译期判断
编译期判断，即条件编译，不同平台在编译出包后已经是不同的代码。详见：[条件编译](/platform)

```javascript
// #ifdef H5
	alert("只有h5平台才有alert方法")
// #endif
```
如上代码只会编译到H5的发行包里，其他平台的包不会包含如上代码。

- 运行期判断
运行期判断是指代码已经打入包中，仍然需要在运行期判断平台，此时可使用 ``uni.getSystemInfoSync().platform`` 判断客户端环境是 Android、iOS。

```javascript
switch(uni.getSystemInfoSync().platform){
    case 'android':
       console.log('运行Android上')
       break;
    case 'ios':
       console.log('运行iOS上')
       break;
    default:
       console.log('运行在开发者工具上')
       break;
}
```

如有必要，也可以在条件编译里自己定义一个变量，赋不同值。在后续运行代码中动态判断环境。


### 其他环境变量

其他环境变量的定义方式参考 [环境变量](/collocation/env)。
## 页面样式与布局

uni-app的css与web的css基本一致。本文没有讲解css的用法。在你了解web的css的基础之上，本文讲述一些样式相关的注意事项。

uni-app有vue页面和nvue页面。vue页面是webview渲染的、app端的nvue页面是原生渲染的。在nvue页面里样式比web会限制更多，另见[nvue样式专项文档](/nvue-css)

本文重点介绍vue页面的样式注意事项。

### 尺寸单位

`uni-app` 支持的通用 css 单位包括 px、rpx

- px 即屏幕像素
- rpx 即响应式px，一种根据屏幕宽度自适应的动态单位。以750宽的屏幕为基准，750rpx恰好为屏幕宽度。屏幕变宽，rpx 实际显示效果会等比放大，但在 App 端和 H5 端屏幕宽度达到 960px 时，默认将按照 375px 的屏幕宽度进行计算，具体配置参考：[rpx计算配置](https://uniapp.dcloud.io/collocation/pages?id=globalstyle) 。

vue页面支持下面这些普通H5单位，但在nvue里不支持：
- rem 根字体大小可以通过 [page-meta](/component/page-meta?id=page-meta) 配置
- vh viewpoint height，视窗高度，1vh等于视窗高度的1%
- vw viewpoint width，视窗宽度，1vw等于视窗宽度的1%

nvue还不支持百分比单位。

App端，在 pages.json 里的 titleNView 或页面里写的 plus api 中涉及的单位，只支持 px。**注意此时不支持 rpx**

nvue中，uni-app 模式（[nvue 不同编译模式介绍](https://ask.dcloud.net.cn/article/36074)）可以使用 px 、rpx，表现与 vue 中一致。weex 模式目前遵循weex的单位，它的单位比较特殊：

- px:，以750宽的屏幕为基准动态计算的长度单位，与 vue 页面中的 rpx 理念相同。（一定要注意 weex 模式的 px，和 vue 里的 px 逻辑不一样。）
- wx：与设备屏幕宽度无关的长度单位，与 vue 页面中的 px 理念相同


下面对 `rpx` 详细说明：

设计师在提供设计图时，一般只提供一个分辨率的图。

严格按设计图标注的 px 做开发，在不同宽度的手机上界面很容易变形。

而且主要是宽度变形。高度一般因为有滚动条，不容易出问题。由此，引发了较强的动态宽度单位需求。

微信小程序设计了 rpx 解决这个问题。`uni-app` 在 App 端、H5 端都支持了 `rpx`，并且可以配置不同屏幕宽度的计算方式，具体参考：[rpx计算配置](https://uniapp.dcloud.io/collocation/pages?id=globalstyle)。

rpx 是相对于基准宽度的单位，可以根据屏幕宽度进行自适应。`uni-app` 规定屏幕基准宽度 750rpx。

开发者可以通过设计稿基准宽度计算页面元素 rpx 值，设计稿 1px 与框架样式 1rpx 转换公式如下：

```设计稿 1px / 设计稿基准宽度 = 框架样式 1rpx / 750rpx```

换言之，页面元素宽度在 `uni-app` 中的宽度计算公式：

``` 750 * 元素在设计稿中的宽度 / 设计稿基准宽度 ```

**举例说明：**

1. 若设计稿宽度为 750px，元素 A 在设计稿上的宽度为 100px，那么元素 A 在 `uni-app` 里面的宽度应该设为：`750 * 100 / 750`，结果为：100rpx。
2. 若设计稿宽度为 640px，元素 A 在设计稿上的宽度为 100px，那么元素 A 在 `uni-app` 里面的宽度应该设为：`750 * 100 / 640`，结果为：117rpx。
2. 若设计稿宽度为 375px，元素 B 在设计稿上的宽度为 200px，那么元素 B 在 `uni-app` 里面的宽度应该设为：` 750 * 200 / 375`，结果为：400rpx。

**Tips**

- 注意 rpx 是和宽度相关的单位，屏幕越宽，该值实际像素越大。如不想根据屏幕宽度缩放，则应该使用 px 单位。
- 如果开发者在字体或高度中也使用了 rpx ，那么需注意这样的写法意味着随着屏幕变宽，字体会变大、高度会变大。如果你需要固定高度，则应该使用 px 。
- rpx不支持动态横竖屏切换计算，使用rpx建议锁定屏幕方向
- 设计师可以用 iPhone6 作为视觉稿的标准。
- 如果设计稿不是750px，HBuilderX提供了自动换算的工具，详见：[https://ask.dcloud.net.cn/article/35445](https://ask.dcloud.net.cn/article/35445)。
- App端，在 pages.json 里的 titleNView 或页面里写的 plus api 中涉及的单位，只支持 px，不支持 rpx。
- 早期 uni-app 提供了 upx ，目前已经推荐统一改为 rpx 了，[详见](http://ask.dcloud.net.cn/article/36130)

### 样式导入

使用```@import```语句可以导入外联样式表，```@import```后跟需要导入的外联样式表的相对路径，用```;```表示语句结束。

**示例代码：**

```
<style>
    @import "../../common/uni.css";

    .uni-card {
        box-shadow: none;
    }
</style>
```

### 内联样式

框架组件上支持使用 style、class 属性来控制组件的样式。

- style：静态的样式统一写到 class 中。style 接收动态的样式，在运行时会进行解析，请尽量避免将静态的样式写进 style 中，以免影响渲染速度。
```
<view :style="{color:color}" />
```
- class：用于指定样式规则，其属性值是样式规则中类选择器名(样式类名)的集合，样式类名不需要带上.，样式类名之间用空格分隔。
```
<view class="normal_view" />
```

### 选择器

目前支持的选择器有：

|选择器|样例|样例描述|
|:-|:-|:-|
|.class|.intro|选择所有拥有 class="intro" 的组件|
|#id|#firstname|选择拥有 id="firstname" 的组件|
|element|view|选择所有 view 组件|
|element, element|view, checkbox|选择所有文档的 view 组件和所有的 checkbox 组件|
|::after|view::after|在 view 组件后边插入内容，**仅 vue 页面生效**|
|::before|view::before|在 view 组件前边插入内容，**仅 vue 页面生效**|

**注意：** 
- 在 `uni-app` 中不能使用 ```*``` 选择器。
- ```page``` 相当于 ```body``` 节点，例如：

  ```css
  <!-- 设置页面背景颜色，使用 scoped 会导致失效 -->
  page {
    background-color:#ccc;
  }
  ```


### 全局样式与局部样式
定义在 App.vue 中的样式为全局样式，作用于每一个页面。在 pages 目录下 的 vue 文件中定义的样式为局部样式，只作用在对应的页面，并会覆盖 App.vue 中相同的选择器。

**注意：** 
- App.vue 中通过 ``@import`` 语句可以导入外联样式，一样作用于每一个页面。
- nvue页面暂不支持全局样式

### CSS变量

uni-app 提供内置 CSS 变量

|CSS变量|描述|App|H5|
|:-|:-|:-|:-|
|--status-bar-height|系统状态栏高度|[系统状态栏高度](http://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.getStatusbarHeight)、nvue注意见下|0|
|--window-top|内容区域距离顶部的距离|0|NavigationBar 的高度|
|--window-bottom|内容区域距离底部的距离|0|TabBar 的高度|


**注意：**
- ``var(--status-bar-height)`` 此变量在 App 里为手机实际状态栏高度。
- 当设置 ``"navigationStyle":"custom"`` 取消原生导航栏后，由于窗体为沉浸式，占据了状态栏位置。此时可以使用一个高度为 ``var(--status-bar-height)`` 的 view 放在页面顶部，避免页面内容出现在状态栏。
- 由于在H5端，不存在原生导航栏和tabbar，也是前端div模拟。如果设置了一个固定位置的居底view，在App端是在tabbar上方，但在H5端会与tabbar重叠。此时可使用`--window-bottom`，不管在哪个端，都是固定在tabbar上方。
- 目前 nvue 在App端，还不支持 `--status-bar-height`变量，替代方案是在页面onLoad时通过uni.getSystemInfoSync().statusBarHeight获取状态栏高度，然后通过style绑定方式给占位view设定高度。下方提供了示例代码

**代码块**

快速书写css变量的方法是：在css中敲hei，在候选助手中即可看到3个css变量。（HBuilderX 1.9.6以上支持）


示例1 - 普通页面使用css变量：

```html
<template>
    <!-- HBuilderX 2.6.3+ 新增 page-meta, 详情：https://uniapp.dcloud.io/component/page-meta -->
    <page-meta>
        <navigation-bar />
    </page-meta>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view> 状态栏下的文字 </view>
	</view>
</template>	
<style>
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
</style>
```

```html
<template>
	<view>
		<view class="toTop">
			<!-- 这里可以放一个向上箭头，它距离底部tabbar上浮10px-->
		</view>
	</view>
</template>	
<style>
	.toTop {
		bottom: calc(var(--window-bottom) + 10px)
	}
</style>
```

示例2 - nvue页面获取状态栏高度
```html
<template>
	<view class="content">
		<view :style="{ height: iStatusBarHeight + 'px'}"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				iStatusBarHeight:0
			}
		},
		onLoad() {
			this.iStatusBarHeight = uni.getSystemInfoSync().statusBarHeight
		}
	}
</script>
```

### 固定值
`uni-app` 中以下组件的高度是固定的，不可修改：

|组件|描述|App|H5|
|:-|:-|:-|:-|
|NavigationBar|导航栏|44px|44px|
|TabBar|底部选项卡|HBuilderX 2.3.4之前为56px，2.3.4起和H5调为一致，统一为 50px。但可以自主更改高度）|50px|

### Flex布局

为支持跨平台，框架建议使用Flex布局，关于Flex布局可以参考外部文档[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)、[阮一峰的flex教程](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)等。

### 背景图片

``uni-app`` 支持使用在 css 里设置背景图片，使用方式与普通 ``web`` 项目大体相同，但需要注意以下几点：

- 支持 base64 格式图片。
- 支持网络路径图片。
- 使用本地路径背景图片需注意：
    1. 为方便开发者，在背景图片小于 40kb 时，``uni-app`` 编译到不支持本地背景图的平台时，会自动将其转化为 base64 格式；
    2. 图片大于等于 40kb，会有性能问题，不建议使用太大的背景图，如开发者必须使用，则需自己将其转换为 base64 格式使用，或将其挪到服务器上，从网络地址引用。
    3. 本地背景图片的引用路径推荐使用以 ~@ 开头的绝对路径。
   ```css
        .test2 {
            background-image: url('~@/static/logo.png');
        }
   ```

### 字体图标

``uni-app`` 支持使用字体图标，使用方式与普通 ``web`` 项目相同，需要注意以下几点：

- 支持 base64 格式字体图标。
- 支持网络路径字体图标。
- 网络路径必须加协议头 ``https``。
- 从 [http://www.iconfont.cn](http://www.iconfont.cn) 上拷贝的代码，默认是没加协议头的。 
- 从 [http://www.iconfont.cn](http://www.iconfont.cn) 上下载的字体文件，都是同名字体（字体名都叫iconfont，安装字体文件时可以看到），在nvue内使用时需要注意，此字体名重复可能会显示不正常，可以使用工具修改。
- 使用本地路径图标字体需注意：
    1. 为方便开发者，在字体文件小于 40kb 时，``uni-app`` 会自动将其转化为 base64 格式；
    2. 字体文件大于等于 40kb，仍转换为 base64 方式使用的话可能有性能问题，如开发者必须使用，则需自己将其转换为 base64 格式使用，或将其挪到服务器上，从网络地址引用；
    3. 字体文件的引用路径推荐使用以 ~@ 开头的绝对路径。
   ```css
        @font-face {
            font-family: test1-icon;
            src: url('~@/static/iconfont.ttf');
        }
   ```

`nvue`中不可直接使用css的方式引入字体文件，需要使用以下方式在js内引入。nvue内不支持本地路径引入字体，请使用网络链接或者`base64`形式。**`src`字段的`url`的括号内一定要使用单引号。**

```js
var domModule = weex.requireModule('dom');
domModule.addRule('fontFace', {
  'fontFamily': "fontFamilyName",
  'src': "url('https://...')"
})
```


**示例：**

```html
<template>
	<view>
		<view>
			<text class="test">&#xe600;</text>
			<text class="test">&#xe687;</text>
			<text class="test">&#xe60b;</text>
		</view>
	</view>
</template>
<style>
	@font-face {
		font-family: 'iconfont';
		src: url('https://at.alicdn.com/t/font_865816_17gjspmmrkti.ttf') format('truetype');
	}
	.test {
		font-family: iconfont;
		margin-left: 20rpx;
	}
</style>
```


## ``<template/>`` 和 ``<block/>`` @template-block

``uni-app`` 支持在 template 模板中嵌套 ``<template/>`` 和 ``<block/>``，用来进行 [列表渲染](/vue-basics?id=列表渲染) 和 [条件渲染](/vue-basics?id=条件渲染)。

 ``<template/>`` 和 ``<block/>`` 并不是一个组件，它们仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性。
 
 ``<block/>`` 在不同的平台表现存在一定差异，推荐统一使用 ``<template/>``。
 
**代码示例**
 
```html
<template>
	<view>
		<template v-if="test">
			<view>test 为 true 时显示</view>
		</template>
        <template v-else>
        	<view>test 为 false 时显示</view>
        </template>
	</view>
</template>
```

```html
<template>
	<view>
		<block v-for="(item,index) in list" :key="index">
			<view>{{item}} - {{index}}</view>
		</block>
    </view>
</template>
```

## ES6 支持
uni-app 在支持绝大部分 ES6 API 的同时，也支持了 ES7 的 await/async。

ES6 API 的支持，详见如下表格部分（`x` 表示不支持，无特殊说明则表示支持）：
- 因为iOS上不允许三方js引擎，所以iOS上不区分App、H5，各端均仅依赖iOS版本。
- 各端Android版本有差异：
* App端的数据见下表；
* H5端数据见caniuse；

|String|iOS8|iOS9|iOS10|Android|
|:-|:-|:-|:-|:-|
|codePointAt|||||
|normalize|x|x||仅支持 NFD/NFC|
|includes|||||
|startsWith|||||
|endsWith|||||
|repeat|||||
|String.fromCodePoint||||&nbsp;|

|Array|iOS8|iOS9|iOS10|Android|
|:-|:-|:-|:-|:-|
|copyWithin|||||
|find|||||
|findIndex|||||
|fill|||||
|entries|||||
|keys|||||
|values|x|||x|
|includes|x||||
|Array.from|||||
|Array.of||||&nbsp;|

|Number|iOS8|iOS9|iOS10|Android|
|:-|:-|:-|:-|:-|
|isFinite|||||
|isNaN|||||
|parseInt|||||
|parseFloat|||||
|isInteger|||||
|EPSILON|||||
|isSafeInteger||||&nbsp;|

|Math|iOS8|iOS9|iOS10|Android|
|:-|:-|:-|:-|:-|
|trunc|||||
|sign|||||
|cbrt|||||
|clz32|||||
|imul|||||
|fround|||||
|hypot|||||
|expm1|||||
|log1p|||||
|log10|||||
|log2|||||
|sinh|||||
|cosh|||||
|tanh|||||
|asinh|||||
|acosh|||||
|atanh||||&nbsp;|

|Object|iOS8|iOS9|iOS10|Android|
|:-|:-|:-|:-|:-|
|is|||||
|assign|||||
|getOwnPropertyDescriptor|||||
|keys|||||
|getOwnPropertyNames|||||
|getOwnPropertySymbols||||&nbsp;|

|Other|iOS8|iOS9|iOS10|Android|
|:-|:-|:-|:-|:-|
|Symbol|||||
|Set|||||
|Map|||||
|Proxy|x|x||x|
|Reflect|||||
|Promise||||&nbsp;|

**注意**
- App端Android支持不依赖Android版本号，即便是Android4.4也是上表数据。因为uni-app的js代码运行在自带的独立jscore中，没有js的浏览器兼容性问题。uni-app的vue页面在Android低端机上只有css浏览器兼容性问题，因为vue页面仍然渲染在webview中，受Android版本影响，太新的css语法在低版本不支持。
- 默认不需要在微信工具里继续开启es6转换。但如果用了微信的wxml自定义组件（wxcomponents目录下），uni-app编译器并不会处理这些文件中的es6代码，需要去微信工具里开启转换。从HBuilderX调起微信工具时，如果发现工程下有wxcomponents目录会自动配置微信工程打开es6转换。


## NPM支持

uni-app支持使用**npm**安装第三方包。

此文档要求开发者们对**npm**有一定的了解，因此不会再去介绍**npm**的基本功能。如若之前未接触过**npm**，请翻阅[NPM官方文档](https://docs.npmjs.com/getting-started/what-is-npm)进行学习。

**初始化npm工程**

若项目之前未使用npm管理依赖（项目根目录下无package.json文件），先在项目根目录执行命令初始化npm工程：
```shell
npm init -y
```

cli项目默认已经有package.json了。HBuilderX创建的项目默认没有，需要通过初始化命令来创建。

**安装依赖**

在项目根目录执行命令安装npm包：
```shell
npm install packageName --save
```

**使用**

安装完即可使用npm包，js中引入npm包：
```js
import package from 'packageName'
const package = require('packageName')
```

**注意**

* 为多端兼容考虑，建议优先从 [uni-app插件市场](https://ext.dcloud.net.cn/) 获取插件。直接从 npm 下载库很容易只兼容H5端。
* 非 H5 端不支持使用含有 dom、window 等操作的 vue 组件和 js 模块，安装的模块及其依赖的模块使用的 API 必须是 uni-app 已有的 [API](./api/README)。类似[jQuery](https://www.npmjs.com/package/jquery) 等库只能用于H5端。
* node_modules 目录必须在项目根目录下。不管是cli项目还是HBuilderX创建的项目。
* 关于ui库的获取，详见[多端UI库](https://ask.dcloud.net.cn/article/35489)

## TypeScript 支持
在 uni-app 中使用 ts 开发，请参考 [Vue.js TypeScript 支持](https://cn.vuejs.org/v2/guide/typescript.html) 说明。


类型定义文件由 @dcloudio/types 模块提供，安装后请注意配置 tsconfig.json 文件中的 compilerOptions > types 部分。对于缺少或者错误的类型定义，可以自行在本地新增或修改并同时报告给官方请求更新。

### 注意事项
在 uni-app 中使用 ts 需要注意以下事项。
#### 在 vue 文件的 script 节点声明 lang="ts"@vue-ts
声明 `lang="ts"` 后，该 vue 文件 import 进来的所有 vue 组件，均需要使用 ts 编写。

**示例代码**

改造 uni-badge.vue 
```javascript
<script lang="ts">
    // 仅展示需要修改的核心代码，完整代码请参考原来的组件。
	import Vue from 'vue';
	export default Vue.extend({
		props: {
			type: {
				type: String,
				default: 'default'
			},
			inverted: {
				type: Boolean,
				default: false
			},
			text: {
				type: [String, Number],
				default: ''
			},
			size: {
				type: String,
				default: 'normal'
			}
		},
		computed: {
			setClass(): string {
				const classList: string[] = ['uni-badge-' + this.type, 'uni-badge-size-' + this.size];
				if (this.inverted === true) {
					classList.push('uni-badge-inverted')
				}
				return classList.join(" ")
			}
		},
		methods: {
			onClick() {
				this.$emit('click')
			}
		}
	})
</script>
```
在 index.vue 中引用 uni-badge 组件
```javascript
<script lang="ts">
    import Vue from 'vue';
	import uniBadge from '../../components/uni-badge.vue';
	export default Vue.extend({
		data() {
			return {
				title: 'Hello'
			}
		},
		components:{
			uniBadge
		}
	});
</script>
```

## renderjs
`renderjs`是一个运行在视图层的js。它只支持app-vue和h5。

`renderjs`的主要作用有2个：
- 大幅降低逻辑层和视图层的通讯损耗，提供高性能视图交互能力
- 在视图层操作dom，运行for web的js库

**平台差异说明**

|App|H5|
|:-:|:-:|
|√(2.5.5+，仅支持vue，并要求v3编译器)|√|

### 使用方式

设置 script 节点的 lang 为 renderjs
```html
<script module="test" lang="renderjs">
	export default {
		mounted() {
			// ...
		},
		methods: {
			// ...
		}
	}
</script>
```

### 示例

* [通过renderjs，在app和h5端使用完整的 `echarts`](https://ext.dcloud.net.cn/plugin?id=1207)

### 功能详解
- 大幅降低逻辑层和视图层的通讯损耗，提供高性能视图交互能力

逻辑层和视图层分离有很多好处，但也有一个副作用是在造成了两层之间通信阻塞。

`renderjs`运行在视图层，可以直接操作视图层的元素，避免通信折损。

在hello uni-app的canvas示例中，App端使用了`renderjs`，由运行在视图层的`renderjs`直接操作视图层的canvas，实现了流畅canvas动画示例。具体在[hello uni-app](https://m3w.cn/uniapp)示例中体验。

- 在视图层操作dom，运行for web的js库
官方不建议在uni-app里操作dom，但如果你想使用一些操作了dom、window的库，其实可以使用`renderjs`来解决。

在app-vue环境下，视图层由webview渲染，而`renderjs`运行在视图层，自然可以操作dom和window。

这是一个基于`renderjs`运行echart完整版的示例：[renderjs版echart](https://ext.dcloud.net.cn/plugin?id=1207)

同理，`f2`、`threejs`等库都可以这么用。


### 注意事项

* 目前仅支持内联使用。
* 不要直接引用大型类库，推荐通过动态创建 script 方式引用。
* 可以使用 vue 组件的生命周期不可以使用 App、Page 的生命周期
* 视图层和逻辑层通讯方式与 [WXS](frame?id=wxs) 一致，另外可以通过 this.$ownerInstance 获取当前组件的 ComponentDescriptor 实例。
* 观测更新的数据在视图层可以直接访问到。
* APP 端视图层的页面引用资源的路径相对于根目录计算，例如：./static/test.js。
* APP 端可以使用 dom、bom API，不可直接访问逻辑层数据，不可以使用 uni 相关接口（如：uni.request）
* H5 端逻辑层和视图层实际运行在同一个环境中，相当于使用 mixin 方式，可以直接访问逻辑层数据。


## 致谢

`uni-app`使用 ```vue``` 语法，开发多端应用，感谢```Vue```团队！！

