
# 页面样式与布局
# Page style and layout

uni-app 有 vue 页面、nvue 页面、uvue页面。
- vue 页面是 webview 渲染的
- app-nvue 页面是原生渲染的，其样式比 web 会限制更多，另见[nvue的css](/tutorial/nvue-css)
- app-uvue 页面是原生渲染的，是 web 的css子集，另见[uvue的css](../uni-app-x/css/readme.md)

uni-app 的 css 与 web 的 css 基本一致。本文没有讲解 css 的用法。在你了解 web 的 css 的基础之上，本文讲述一些样式相关的注意事项。
The css of uni-app is basically the same as the css of web. This article does not explain the usage of css. Based on your understanding of css for the web, this article describes some style-related considerations.

本文重点介绍 vue 页面，也就是webview中的样式注意事项。

## css预处理器支持

uni-app 支持less、sass、scss、stylus等预处理器。

参考： [css预处理器](https://developer.mozilla.org/zh-CN/docs/Glossary/CSS_preprocessor)


## 尺寸单位
## measurement unit

`uni-app` 支持的通用 css 单位包括 px、rpx
Common css units supported by `uni-app` include px, rpx

- px 即屏幕像素
- px, i.e. screen pixels
- rpx 即响应式 px，一种根据屏幕宽度自适应的动态单位。以 750 宽的屏幕为基准，750rpx 恰好为屏幕宽度。屏幕变宽，rpx 实际显示效果会等比放大，但在 App（vue2 不含 nvue） 端和 H5（vue2） 端屏幕宽度达到 960px 时，默认将按照 375px 的屏幕宽度进行计算，具体配置参考：[rpx 计算配置](/collocation/pages?id=globalstyle) 。
- rpx stands for responsive px, a dynamic unit that adapts to the width of the screen. Based on a 750-wide screen, 750rpx is exactly the width of the screen. When the screen becomes wider, the actual display effect of rpx will be proportionally enlarged, but when the screen width of the App (vue2 does not contain nvue) and H5 (vue2) side reaches 960px, the default will be calculated according to the screen width of 375px, specific configuration reference: [ rpx compute configuration](/collocation/pages?id=globalstyle) .

vue 页面支持下面这些普通 H5 单位，但在 nvue 里不支持：
The vue page supports the following common H5 units, but not in nvue:

- rem 根字体大小可以通过 [page-meta](/component/page-meta?id=page-meta) 配置<span style="display:none">抖音小程序和飞书小程序：屏幕宽度/20、百度小程序：16px、支付宝小程序：50px</span>
- vh viewpoint height，视窗高度，1vh 等于视窗高度的 1%
- vh viewpoint height, the height of the viewport, 1vh is equal to 1% of the height of the viewport
- vw viewpoint width，视窗宽度，1vw 等于视窗宽度的 1%
- vw viewpoint width, the width of the viewport, 1vw is equal to 1% of the width of the viewport

nvue 还不支持百分比单位。
nvue doesn't support percent units yet.

App 端，在 pages.json 里的 titleNView 或页面里写的 plus api 中涉及的单位，只支持 px。**注意此时不支持 rpx**
On the App side, the units involved in the titleNView in pages.json or the plus api written in the page only support px. **Note that rpx is not supported at this time**

nvue 中，uni-app 模式（[nvue 不同编译模式介绍](https://ask.dcloud.net.cn/article/36074)）可以使用 px 、rpx，表现与 vue 中基本一致，另外启用 [dynamicRpx](/collocation/pages?id=globalstyle) 后可以适配屏幕大小动态变化。weex 模式目前遵循 weex 的单位，它的单位比较特殊：
In nvue, uni-app mode ([Introduction to different compilation modes of nvue](https://ask.dcloud.net.cn/article/36074)) can use px and rpx, the performance is basically the same as in vue, and [dynamicRpx] is also enabled ](/collocation/pages?id=globalstyle) can adapt to dynamic changes in screen size. The weex mode currently follows the unit of weex, which is special:

- px:，以 750 宽的屏幕为基准动态计算的长度单位，与 vue 页面中的 rpx 理念相同。（一定要注意 weex 模式的 px，和 vue 里的 px 逻辑不一样。）
- px:, a dynamically calculated length unit based on a 750-wide screen, the same concept as rpx in vue pages. (Be sure to pay attention to the px in weex mode, which is different from the px logic in vue.)
- wx：与设备屏幕宽度无关的长度单位，与 vue 页面中的 px 理念相同
- wx: a length unit independent of the screen width of the device, is the same concept as that of px in the vue page

下面对 `rpx` 详细说明：
The following is a detailed description of `rpx`:

设计师在提供设计图时，一般只提供一个分辨率的图。
Designers generally only provide drawing with one resolution while providing design drawing.

严格按设计图标注的 px 做开发，在不同宽度的手机上界面很容易变形。
If you develop strictly according to the px marked by the design icon, the interface is easily deformed on mobile phones of different widths.

而且主要是宽度变形。高度一般因为有滚动条，不容易出问题。由此，引发了较强的动态宽度单位需求。
Width deformation is dominant. Generally, the height is not easy to go wrong on account of the scroll bar. As a result, a strong demand for dynamic width unit is triggered.

微信小程序设计了 rpx 解决这个问题。`uni-app` 在 App 端、H5 端都支持了 `rpx`，并且可以配置不同屏幕宽度的计算方式，具体参考：[rpx 计算配置](https://uniapp.dcloud.io/collocation/pages?id=globalstyle)。
WeChat applet designed rpx to solve this problem. `uni-app` supports `rpx` on both the App side and H5 side, and can configure the calculation method of different screen widths. For details, please refer to: [rpx calculation configuration](https://uniapp.dcloud.io/collocation/pages ?id=globalstyle).

rpx 是相对于基准宽度的单位，可以根据屏幕宽度进行自适应。`uni-app` 规定屏幕基准宽度 750rpx。
rpx is a unit relative to the reference width, which can be adapted to the screen width. `uni-app` The specified screen reference width is 750rpx.

开发者可以通过设计稿基准宽度计算页面元素 rpx 值，设计稿 1px 与框架样式 1rpx 转换公式如下：
Developers can calculate the rpx value of page elements based on the reference width of design draft. The conversion formula between design draft 1px and frame style 1rpx is as follows:

`设计稿 1px / 设计稿基准宽度 = 框架样式 1rpx / 750rpx`
`Design draft 1px / Design draft base width = Frame style 1rpx / 750rpx`

换言之，页面元素宽度在 `uni-app` 中的宽度计算公式：
In other words, the formula for calculating the width of the page element width in `uni-app` is as follows:

`750 * 元素在设计稿中的宽度 / 设计稿基准宽度`
`750 * The width of the element in the design draft / the base width of the design draft`

**举例说明：**
**For example:**

1. 若设计稿宽度为 750px，元素 A 在设计稿上的宽度为 100px，那么元素 A 在 `uni-app` 里面的宽度应该设为：`750 * 100 / 750`，结果为：100rpx。
1. If the width of the design draft is 750px and the width of element A on the design draft is 100px, then the width of element A in `uni-app` should be set to: `750 * 100 / 750`, the result is: 100rpx.
2. 若设计稿宽度为 640px，元素 A 在设计稿上的宽度为 100px，那么元素 A 在 `uni-app` 里面的宽度应该设为：`750 * 100 / 640`，结果为：117rpx。
2. If the width of the design draft is 640px and the width of element A on the design draft is 100px, then the width of element A in `uni-app` should be set to: `750 * 100 / 640`, the result is: 117rpx.
3. 若设计稿宽度为 375px，元素 B 在设计稿上的宽度为 200px，那么元素 B 在 `uni-app` 里面的宽度应该设为：` 750 * 200 / 375`，结果为：400rpx。
3. If the width of the design draft is 375px and the width of element B on the design draft is 200px, then the width of element B in `uni-app` should be set to: ` 750 * 200 / 375`, the result is: 400rpx.

**Tips**

- 注意 rpx 是和宽度相关的单位，屏幕越宽，该值实际像素越大。如不想根据屏幕宽度缩放，则应该使用 px 单位。
- Note that rpx is a unit related to the width. The wider the screen, the larger the actual pixels. If you do not want to zoom according to the screen width, you should use px as the unit.
- 如果开发者在字体或高度中也使用了 rpx ，那么需注意这样的写法意味着随着屏幕变宽，字体会变大、高度会变大。如果你需要固定高度，则应该使用 px 。
- If the developer also uses rpx in font or height, this writing mode means that as the screen becomes wider, the font and height will become larger. If you need a fixed height, you should use px.
- rpx 不支持动态横竖屏切换计算，使用 rpx 建议锁定屏幕方向
- rpx does not support dynamic horizontal and vertical screen switching calculation, it is recommended to use rpx to lock the screen orientation
- 设计师可以用 iPhone6 作为视觉稿的标准。
- Designers can take iPhone6 as the standard of visual drafts.
- 如果设计稿不是 750px，HBuilderX 提供了自动换算的工具，详见：[HBuilderX中自动转换px为upx](https://ask.dcloud.net.cn/article/35445)。
- If the design draft is not 750px, HBuilderX provides an automatic conversion tool, see: [Automatically convert px to upx in HBuilderX](https://ask.dcloud.net.cn/article/35445).
- App 端，在 pages.json 里的 titleNView 或页面里写的 plus api 中涉及的单位，只支持 px，不支持 rpx。
- On the App side, the units involved in the titleNView in pages.json or the plus api written in the page only support px, not rpx.
- 早期 uni-app 提供了 upx ，目前已经推荐统一改为 rpx 了，[详见](http://ask.dcloud.net.cn/article/36130)
- Early uni-app provided upx, and now it is recommended to change to rpx. [See details](http://ask.dcloud.net.cn/article/36130)

## 样式导入
## style import

使用`@import`语句可以导入外联样式表，`@import`后跟需要导入的外联样式表的相对路径，用`;`表示语句结束。
Use the `@import` statement to import the external style sheet, `@import` is followed by the relative path of the external style sheet to be imported, and `;` indicates the end of the statement.

**示例代码：**
**Sample code:**

```html
<style>
    @import "../../common/uni.css";

    .uni-card {
        box-shadow: none;
    }
</style>
```

## 内联样式
## inline styles

框架组件上支持使用 style、class 属性来控制组件的样式。
Frame components support the use of style and class attributes to control the style of components.

- style：静态的样式统一写到 class 中。style 接收动态的样式，在运行时会进行解析，请尽量避免将静态的样式写进 style 中，以免影响渲染速度。
- style: static styles are uniformly written into class. style receives dynamic styles, which will be parsed at runtime. Please try to avoid writing static styles into style so as not to affect the rendering speed.

```html
<view :style="{color:color}" />
```

- class：用于指定样式规则，其属性值是样式规则中类选择器名(样式类名)的集合，样式类名不需要带上.，样式类名之间用空格分隔。
- class: used to specify a style rule. Its attribute value is a collection of class selector names (style class names) in the style rule. Style class names do not need to be marked with. The style class names are separated by spaces.

```html
<view class="normal_view" />
```

## 选择器
## Selector

目前支持的选择器有：
Currently supported selectors are:

| 选择器           | 样例           | 样例描述                                       |
| selector | sample | sample description |
| :--------------- | :------------- | :--------------------------------------------- |
| .class           | .intro         | 选择所有拥有 class="intro" 的组件              |
| .class | .intro | Select all components with class="intro" |
| #id              | #firstname     | 选择拥有 id="firstname" 的组件                 |
| #id | #firstname | Select the component with id="firstname" |
| element          | view           | 选择所有 view 组件                             |
| element | view | Select all view components |
| element, element | view, checkbox | 选择所有文档的 view 组件和所有的 checkbox 组件 |
| element, element | view, checkbox | Selects all document view components and all checkbox components |
| ::after          | view::after    | 在 view 组件后边插入内容，**仅 vue 页面生效**  |
| ::after | view::after | Insert content after the view component, **only valid for vue pages** |
| ::before         | view::before   | 在 view 组件前边插入内容，**仅 vue 页面生效**  |
| ::before | view::before | Insert content before the view component, **only valid for vue pages** |

**注意：**
**Notice:**

- 在 `uni-app` 中不能使用 `*` 选择器。
- The `*` selector cannot be used in `uni-app`.
- 微信小程序自定义组件中仅支持 class 选择器
- Only class selectors are supported in WeChat Mini Program custom components
- `page` 相当于 `body` 节点，例如：
- `page` is equivalent to the `body` node, for example:

  ```css
  <!-- 设置页面背景颜色，使用 scoped 会导致失效 -- > 
	page {
  	background-color: #ccc;
  }
  ```

## 全局样式与局部样式
## Global and local styles

定义在 App.vue 中的样式为全局样式，作用于每一个页面。在 pages 目录下 的 vue 文件中定义的样式为局部样式，只作用在对应的页面，并会覆盖 App.vue 中相同的选择器。
The styles defined in App.vue are global styles, which act on every page. The styles defined in the vue file in the pages directory are local styles, which only act on the corresponding pages and will cover the same selectors in App.vue.

**注意：**
**Notice:**

- App.vue 中通过 `@import` 语句可以导入外联样式，一样作用于每一个页面。
- In App.vue, the external style can be imported through the `@import` statement, which also applies to each page.
- nvue 页面暂不支持全局样式
- nvue pages do not currently support global styles

## CSS 变量
## CSS variables

uni-app 提供内置 CSS 变量
uni-app provides built-in CSS variables

| CSS 变量| 描述| App| 小程序 | H5|
| CSS Variables | Description | App| Mini Programs | H5|
| :- | :- | :- | :- | :- |
| --status-bar-height | 系统状态栏高度| [系统状态栏高度](http://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.getStatusbarHeight)、nvue 注意见下| 25px| 0|
| --status-bar-height | system status bar height | [system status bar height](http://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.getStatusbarHeight), nvue note below | 25px| 0|
| --window-top| 内容区域距离顶部的距离 | 0| 0| NavigationBar 的高度 |
| --window-top| Distance of content area from top | 0| 0| Height of NavigationBar |
| --window-bottom| 内容区域距离底部的距离 | 0| 0| TabBar 的高度|
| --window-bottom| Distance of content area from bottom | 0| 0| Height of TabBar|

**注意：**
**Notice:**

- `var(--status-bar-height)` 此变量在微信小程序环境为固定 `25px`，在 App 里为手机实际状态栏高度。
- `var(--status-bar-height)` This variable is a fixed `25px` in the WeChat applet environment, and the actual status bar height of the mobile phone in the App.
- 当设置 `"navigationStyle":"custom"` 取消原生导航栏后，由于窗体为沉浸式，占据了状态栏位置。此时可以使用一个高度为 `var(--status-bar-height)` 的 view 放在页面顶部，避免页面内容出现在状态栏。
- When setting `"navigationStyle":"custom"` to cancel the native navigation bar, because the form is immersive, it occupies the position of the status bar. At this point, you can use a view with a height of `var(--status-bar-height)` at the top of the page to avoid the page content from appearing in the status bar.
- 由于在 H5 端，不存在原生导航栏和 tabbar，也是前端 div 模拟。如果设置了一个固定位置的居底 view，在小程序和 App 端是在 tabbar 上方，但在 H5 端会与 tabbar 重叠。此时可使用`--window-bottom`，不管在哪个端，都是固定在 tabbar 上方。
- Since there is no native navigation bar and tabbar on the H5 side, it is also a front-end div simulation. If a bottomed view with a fixed position is set, it will be above the tabbar on the applet and app side, but it will overlap the tabbar on the H5 side. At this point, you can use `--window-bottom`, whichever side is fixed above the tabbar.
- 目前 nvue 在 App 端，还不支持 `--status-bar-height`变量，替代方案是在页面 onLoad 时通过 uni.getSystemInfoSync().statusBarHeight 获取状态栏高度，然后通过 style 绑定方式给占位 view 设定高度。下方提供了示例代码
- At present, nvue does not support the `--status-bar-height` variable on the App side. The alternative is to obtain the status bar height through uni.getSystemInfoSync().statusBarHeight when the page is onLoad, and then use style binding to place a placeholder view sets the height. Sample code is provided below

**代码块**
**Code block**

快速书写 css 变量的方法是：在 css 中敲 hei，在候选助手中即可看到 3 个 css 变量。（HBuilderX 1.9.6 以上支持）
The quick way to write css variables is: type hei in css, and you can see 3 css variables in the candidate assistant. (HBuilderX 1.9.6 and above are supported)

示例 1 - 普通页面使用 css 变量：
Example 1 - normal page using css variables:

```html
<template>
	<!-- HBuilderX 2.6.3+ 新增 page-meta, 详情：https://uniapp.dcloud.io/component/page-meta -->
	<!-- HBuilderX 2.6.3+ added page-meta, details: https://uniapp.dcloud.io/component/page-meta -->
	<page-meta>
		<navigation-bar />
	</page-meta>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
			<!-- Here is the status bar -->
		</view>
		<view>状态栏下的文字</view>
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
			<!-- An up arrow can be put here, which shifts up 10px from the bottom tabbar-->
		</view>
	</view>
</template>
<style>
	.toTop {
		bottom: calc(var(--window-bottom) + 10px);
	}
</style>
```

示例 2 - nvue 页面获取状态栏高度
Example 2 - nvue page get status bar height

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
				iStatusBarHeight: 0,
			};
		},
		onLoad() {
			this.iStatusBarHeight = uni.getSystemInfoSync().statusBarHeight;
		},
	};
</script>
```

## 固定值
## Fixed value

`uni-app` 中以下组件的高度是固定的，不可修改：
The height of the following components in `uni-app` is fixed and cannot be modified:

| 组件          | 描述       | App                                                                                    | H5   |
| Components | Description | App | H5 |
| :------------ | :--------- | :------------------------------------------------------------------------------------- | :--- |
| NavigationBar | 导航栏     | 44px                                                                                   | 44px |
| NavigationBar | Navigation Bar | 44px | 44px |
| TabBar        | 底部选项卡 | HBuilderX 2.3.4 之前为 56px，2.3.4 起和 H5 调为一致，统一为 50px。（但可以自主更改高度） | 50px |
| TabBar | Bottom Tab | Before HBuilderX 2.3.4, it was 56px. From 2.3.4 onwards, it is adjusted to be consistent with H5, and unified to 50px. (but the height can be changed independently) | 50px |

各小程序平台，包括同小程序平台的 iOS 和 Android 的高度也不一样。
The heights of various mini-program platforms, including iOS and Android of the same mini-program platform, are also different.

## Flex 布局
##Flex layout

为支持跨平台，框架建议使用 Flex 布局，关于 Flex 布局可以参考外部文档[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)、[阮一峰的 flex 教程](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)等。
In order to support cross-platform, the framework recommends using Flex layout. For Flex layout, please refer to the external document [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/), [Ruanyifeng's flex tutorial](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html) and so on.

## 背景图片
## Background picture

`uni-app` 支持使用在 css 里设置背景图片，使用方式与普通 `web` 项目大体相同，但需要注意以下几点：
`uni-app` supports setting a background image in css. The usage method is basically the same as that of a normal `web` project, but the following points should be noted:

- 支持 base64 格式图片。
- Support base64 format images.
- 支持网络路径图片。
- Support web path images.
- 小程序不支持在 css 中使用本地文件，包括本地的背景图和字体文件。需以 base64 方式方可使用。
- The applet does not support the use of local files in css, including local background images and font files. It needs to be used in base64 mode.
- 使用本地路径背景图片需注意：
- Note when using background images from local path:
  1. 为方便开发者，在背景图片小于 40kb 时，`uni-app` 编译到不支持本地背景图的平台时，会自动将其转化为 base64 格式；
  1. For the convenience of developers, when the background image is less than 40kb, when `uni-app` is compiled to a platform that does not support local background images, it will be automatically converted to base64 format;
  2. 图片大于等于 40kb，会有性能问题，不建议使用太大的背景图，如开发者必须使用，则需自己将其转换为 base64 格式使用，或将其挪到服务器上，从网络地址引用。
  2. If the image is greater than or equal to 40kb, there will be performance problems. It is not recommended to use a background image that is too large. If developers must use it, they need to convert it into base64 format for use, or move it to the server and refer to it from the network address. .
  3. 本地背景图片的引用路径推荐使用以 ~@ 开头的绝对路径。
  3. The reference path of the local background image is recommended to use an absolute path starting with ~@.
  ```css
  .test2 {
  	background-image: url('~@/static/logo.png');
  }
  ```

**注意**
**Notice**

- 微信小程序不支持相对路径（真机不支持，开发工具支持）
- Wechat applet does not support relative paths (not supported by real devices, supported by development tools)

## 字体图标
## font icon

`uni-app` 支持使用字体图标，使用方式与普通 `web` 项目相同，需要注意以下几点：
`uni-app` supports the use of font icons in the same way as normal `web` projects. Note the following:

- 支持 base64 格式字体图标。
- Support base64 format font icons.
- 支持网络路径字体图标。
- Support network path font icons.
- 小程序不支持在 css 中使用本地文件，包括本地的背景图和字体文件。需以 base64 方式方可使用。
- The applet does not support the use of local files in css, including local background images and font files. It needs to be used in base64 mode.
- 网络路径必须加协议头 `https`。
- The network path must add the protocol header `https`.
- 从 [http://www.iconfont.cn](http://www.iconfont.cn) 上拷贝的代码，默认是没加协议头的。
- The code copied from [http://www.iconfont.cn](http://www.iconfont.cn) has no protocol header by default.
- 从 [http://www.iconfont.cn](http://www.iconfont.cn) 上下载的字体文件，都是同名字体（字体名都叫 iconfont，安装字体文件时可以看到），在 nvue 内使用时需要注意，此字体名重复可能会显示不正常，可以使用工具修改。
- The font files downloaded from [http://www.iconfont.cn](http://www.iconfont.cn) are all fonts with the same name (the font names are all called iconfont, which can be seen when installing the font file), When using it in nvue, it should be noted that the repeated font name may display abnormally, which can be modified with tools.
- 使用本地路径图标字体需注意：
- Note when using local path icon font:
  1. 为方便开发者，在字体文件小于 40kb 时，`uni-app` 会自动将其转化为 base64 格式；
  1. For the convenience of developers, when the font file is less than 40kb, `uni-app` will automatically convert it to base64 format;
  2. 字体文件大于等于 40kb，仍转换为 base64 方式使用的话可能有性能问题，如开发者必须使用，则需自己将其转换为 base64 格式使用，或将其挪到服务器上，从网络地址引用；
  2. If the font file is greater than or equal to 40kb, and it is still converted to base64, there may be performance problems. If the developer must use it, he needs to convert it into base64 format for use, or move it to the server and refer to it from the network address;
  3. 字体文件的引用路径推荐使用以 ~@ 开头的绝对路径。
  3. It is recommended to use an absolute path starting with ~@ for the reference path of the font file.
  ```css
  @font-face {
  	font-family: test1-icon;
  	src: url('~@/static/iconfont.ttf');
  }
  ```

`nvue`中不可直接使用 css 的方式引入字体文件，需要使用以下方式在 js 内引入。nvue 内不支持本地路径引入字体，请使用网络链接或者`base64`形式。**`src`字段的`url`的括号内一定要使用单引号。**
In `nvue`, you cannot directly use css to import font files, you need to use the following methods to import font files in js. Importing fonts from local paths is not supported in nvue, please use the network link or `base64` form. **The `url` of the `src` field must be enclosed in single quotes. **

```js
var domModule = weex.requireModule('dom');
domModule.addRule('fontFace', {
	fontFamily: 'fontFamilyName',
	src: "url('https://...')",
});
```

**示例：**
**Example:**

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
