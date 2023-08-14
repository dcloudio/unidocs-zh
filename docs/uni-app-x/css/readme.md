# uvue css使用

uni-app x 在 app平台实现了 web css的子集。

这个子集并不影响开发者开发出所需的界面，仅是写法上没有那么丰富。

App端与web常见的区别是：
1. 仅支持flex布局
2. 选择器只能用class，不能用tag、#id、[attr]等选择器
3. 不支持样式继承，即父元素样式不影响子元素

但以上仅是常见的区别，并非所有，需开发者继续阅读全文。

## 页面布局

uni-app x 推荐使用flex布局。这是一种清晰易用、全平台支持的布局。不管web、Android、iOS、微信skyline、快应用，均支持flex布局。

页面布局有2个注意事项，flex方向和页面级滚动。

### flex方向

在web中，flex默认是横向的，但app默认是纵向的。为了多端兼容，建议开发者显式声明flex方向，不使用默认值。

```html
<view style="flex-direction:row">
	<!-- 这里的组件们都是横排 -->
</view>
<view style="flex-direction:column">
	<!-- 这里的组件们都是竖排 -->
</view>
```

一般在`app.uvue`的style里编写全局样式，在页面里使用class引用更为方便。
```html
<style>
.uni-row{
	flex-direction: row;
}
.uni-column{
	flex-direction: column;
}
</style>
```

```html
<template>
	<scroll-view class="uni-column" style="flex:1">
		<view class="uni-row">
			<text>左</text>
			<text>右</text>
			<!-- 2个text组件横排 -->
		</view>
		<view class="uni-column">
			<text>上</text>
			<text>下</text>
			<!-- 2个text组件竖排 -->
		</view>
	</scroll-view>
</template>
```

其实flex布局概念非常简单清晰。解释下上面的代码。

1. 页面根节点是一个竖排的（class="uni-column"）、全屏的（style="flex:1"）scroll-view，那么它的子view们就是竖排。
2. 二级view里的第一个view，设为横排，里面又放了2个三级组件text，那么这2个三级组件text是横排，即左右2个字。

想清楚页面布局，设好row还是column，界面写起来很快。

### 页面级滚动@pagescroll

web开发中，页面是必然可以滚动的。当然也可以给某些div设局部滚动。

而原生开发中，页面不能滚动。如果你需要某个地方滚动，那么要在相应位置放scroll-view或list-view等可滚动组件，在这些组件内部滚动。

如果你想要整页滚动，那么可以在页面最外层套一个scroll-view，看起来就和web开发的页面滚动一样了。

在老版nvue中，如果开发者顶层不是scroll-view，编译器会自动在外面套一层scroll-view，来变相实现页面滚动。
但在uvue中，废弃了这个策略。因为开发者的页面情况较复杂，而且vue3支持多个一级组件，之前的策略可能会多给页面套一层不必要的scroll-view。
在追求高性能时，多一层scroll-view是不能忍受的。

uvue的策略是，在新建页面时，提供一个选项，让开发者选择是否需要页面级滚动。如需要则自动在页面代码里template的根节点加一个scroll-view。
如果开发者不需要，随时可以自己修改代码。

```html
<template>
	<!-- #ifdef APP -->
	<scroll-view style="flex:1">
	<!-- #endif -->
		
	<!-- #ifdef APP -->
	</scroll-view>
	<!-- #endif -->
</template>
```

考虑到未来web平台和基于webview的小程序的兼容，自动套在页面顶层的scroll-view写在了[条件编译](../../tutorial/platform.md)里。

这样在web浏览器里就无需多套一层scroll-view，自然的使用浏览器的页面滚动就好了。

尤其在Android webview中，scroll-view其实是可区域滚动的div，滚动区变长后，性能远不如页面的自然滚动。

上述代码中给scroll-view的style设为`flex:1`，意思是铺满剩余空间。设在顶层节点上，意味着铺满屏幕。

当然，如果页面的pages.json里配置使用了原生导航栏，那么页面区整体是在导航栏下面。

- 自定义导航栏

如果开发者想要自定义导航栏，首先在pages.json里对应页面的style里设置`"navigationStyle": "custom"`，关闭原生导航栏。
然后编写一个自己的导航栏组件，假设名为`<uni-navigationbar>`，那么推荐的页面代码结构为：

```html
<template>
	<uni-navigationbar title="自定义导航栏标题">
	</uni-navigationbar>
	<!-- #ifdef APP -->
	<scroll-view style="flex:1">
	<!-- #endif -->
		
	<!-- #ifdef APP -->
	</scroll-view>
	<!-- #endif -->
</template>
```

> 注：这里的“原生导航栏”是一个历史沿袭叫法，指配置在pages.json里的导航栏，不属于页面代码区。事实上在uni-app x里所有界面都是原生的。

- 页面滚动相关的生命周期、api

在uni-app的规范中，页面滚动有一批相关的生命周期、api，比如：`onPageScroll`、`onReachBottom`、`uni.pageScrollTo()`

在app端，会判断页面根节点是否为scroll-view（不认list-view等其他滚动容器）。
	* 如果是，页面滚动相关的生命周期和API继续生效，效果如前。
	* 如果不是scroll-view，全部失效。

## 样式不继承@stylenoextends

如下代码，在web浏览器渲染时，父view的style会影响子text，所以123是红色。

但是在uvue中，样式不继承，123的颜色仍然是默认颜色黑色。
```html
<template>
	<view style="color:red">
		<text>123</text>
	</view>
</template>
```

所以在uvue中，如需修改123的样式，需写在text组件中
```html
<template>
	<view>
		<text style="color:red">123</text>
	</view>
</template>
```

uvue中文字都是要使用text组件的。

虽然把文字直接写在view的text区也能运行，其实是因为编译器自动套了一层text组件。
```html
<template>
	<view>123</view>
</template>
```

上述代码，在编译后其实变成了：
```html
<template>
	<view>
		<text>123</text>
	</view>
</template>
```

那么，就意味着直接写在view的text区，虽然可以用，但将无法修改文字的样式。因为被自动套一层的text组件上没有任何样式。

也就是下面的代码是不能改变文字颜色的。
```html
<template>
	<view style="color:red">123</view> <!-- 文字颜色不会变，因为被套了一层text组件后，父view的样式并不能被新套的text组件继承-->
</template>
```



## css模块

|模块				|支持情况	|备注									|
|:-:				|:-:		|:-:									|
|背景与边框			|√			|不支持背景图							|
|盒子模型			|√			|										|
|Flex 布局			|√			|										|
|Inline 布局			|×			|										|
|Inline-Block 布局	|×			|										|
|Block 布局			|√			|										|
|字体				|√			|支持ttf、otf，不支持woff和woff2和可变字体	|
|Positioned 布局		|√			|										|
|CSS Animation		|√			|										|
|CSS Transition		|√			|										|
|CSS Variable		|√			|										|
|媒体查询			|√			|										|

## 选择器
|类别			|示例		|支持情况	|备注												|
|:-:			|:-:		|:-:	|:-:												|
|通配选择器		|* {}		|×		|													|
|类选择器		|.class {}	|√		|													|
|元素选择器		|tag {}		|×		|													|
|ID 选择器		|#id {}		|×		|													|
|属性选择器		|[attr] {}	|×		|													|
|分组选择器		|a, b {}	|√		|													|
|直接子代选择器	|a > b {}	|√		|													|
|后代选择器		|a b {}		|√		|													|
|一般兄弟选择器	|a ~ b {}	|√		|													|
|紧邻兄弟选择器	|a + b {}	|√		|													|
|伪类选择器		|:active {}	|×		|													|
|伪元素选择器	|::before {}|×		|													|

## 长度单位
|类别				|支持情况				|备注							|
|:-:				|:-:				|:-:							|
|px					|√					|								|
|rpx				|√					|								|
|百分比				|√					|								|
|rem				|					|								|
|em					|					|								|
|vw					|					|								|
|vh					|					|								|
|vmin				|					|								|
|vmax				|					|								|
|ratio				|					|								|
|env()				|					|								|
|calc()				|					|								|

## 颜色
|类别				|支持情况				|备注							|
|:-:				|:-:				|:-:							|
|color keywords		|√					|								|
|#RRGGBB / #RGB		|√					|								|
|rgb[a]				|√					|								|
|transparent		|√					|								|
|currentColor		|					|								|
|hsl				|					|								|
|hsla				|					|								|

## At-rules
|类别							|支持情况	|备注	|
|:-:							|:-:		|:-:	|
|@font-face						|√			|		|
|@charset						|×			|		|
|@color-profile					|×			|		|
|@container						|×			|		|
|@counter-style					|×			|		|
|@documentNon-standardDeprecated|×			|		|
|@font-feature-values			|×			|		|
|@font-palette-values			|×			|		|
|@import						|√			|		|
|@keyframes						|×			|		|
|@layer							|×			|		|
|@media							|×			|		|
|@namespace						|×			|		|
|@page							|×			|		|
|@property						|×			|		|
|@supports						|×			|		|

## 样式清单
| uni-app-x CSS 支持列表 |
| :-|
| [width](width.md) |
| [min-width](min-width.md) |
| [max-width](max-width.md) |
| [height](height.md) |
| [min-height](min-height.md) |
| [max-height](max-height.md) |
| [position](position.md) |
| [z-index](z-index.md) |
| [top](top.md) |
| [bottom](bottom.md) |
| [left](left.md) |
| [right](right.md) |
| [flex-direction](flex-direction.md) |
| [justify-content](justify-content.md) |
| [flex-wrap](flex-wrap.md) |
| [align-items](align-items.md) |
| [align-content](align-content.md) |
| [flex](flex.md) |
| [flex-grow](flex-grow.md) |
| [flex-shrink](flex-shrink.md) |
| [flex-basis](flex-basis.md) |
| [flex-flow](flex-flow.md) |
| [display](display.md) |
| [overflow](overflow.md) |
| [visibility](visibility.md) |
| [opacity](opacity.md) |
| [box-sizing](box-sizing.md) |
| [background](background.md) |
| [background-color](background-color.md) |
| [background-image](background-image.md) |
| [background-clip](background-clip.md) |
| [padding](padding.md) |
| [padding-left](padding-left.md) |
| [padding-top](padding-top.md) |
| [padding-right](padding-right.md) |
| [padding-bottom](padding-bottom.md) |
| [margin](margin.md) |
| [margin-left](margin-left.md) |
| [margin-top](margin-top.md) |
| [margin-right](margin-right.md) |
| [margin-bottom](margin-bottom.md) |
| [border](border.md) |
| [border-style](border-style.md) |
| [border-left-style](border-left-style.md) |
| [border-top-style](border-top-style.md) |
| [border-right-style](border-right-style.md) |
| [border-bottom-style](border-bottom-style.md) |
| [border-width](border-width.md) |
| [border-left-width](border-left-width.md) |
| [border-top-width](border-top-width.md) |
| [border-right-width](border-right-width.md) |
| [border-bottom-width](border-bottom-width.md) |
| [border-color](border-color.md) |
| [border-left-color](border-left-color.md) |
| [border-top-color](border-top-color.md) |
| [border-right-color](border-right-color.md) |
| [border-bottom-color](border-bottom-color.md) |
| [border-radius](border-radius.md) |
| [border-top-left-radius](border-top-left-radius.md) |
| [border-top-right-radius](border-top-right-radius.md) |
| [border-bottom-left-radius](border-bottom-left-radius.md) |
| [border-bottom-right-radius](border-bottom-right-radius.md) |
| [color](color.md) |
| [font-size](font-size.md) |
| [font-style](font-style.md) |
| [font-weight](font-weight.md) |
| [text-decoration](text-decoration.md) |
| [text-decoration-line](text-decoration-line.md) |
| [text-decoration-color](text-decoration-color.md) |
| [text-decoration-style](text-decoration-style.md) |
| [text-decoration-thickness](text-decoration-thickness.md) |
| [text-align](text-align.md) |
| [font-family](font-family.md) |
| [text-overflow](text-overflow.md) |
| [line-height](line-height.md) |
| [lines](lines.md) |
| [box-shadow](box-shadow.md) |
| [transition](transition.md) |
| [transition-property](transition-property.md) |
| [transition-duration](transition-duration.md) |
| [transition-timing-function](transition-timing-function.md) |
| [transition-delay](transition-delay.md) |
| [transform](transform.md) |
