
::: tip 组件名：uni-nav-bar
::: tip component name: uni-nav-bar
> 代码块： `uNavBar`
> Code block: `uNavBar`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-nav-bar)
[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-nav-bar)
:::

导航栏组件，主要用于头部导航。
Navigation bar component, mainly used for header navigation.


## 介绍
## introduce
::: warning 注意事项
::: warning Notes
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
> In order to avoid wrong use and bring you a bad development experience, please read the following precautions carefully before using the component, which can help you avoid some mistakes.
- 组件需要依赖 `sass` 插件 ，请根据提示自行手动安装
- The component needs to depend on the `sass` plugin, please install it manually according to the prompts
- 组件内部依赖 `'uni-icons'` 组件
- The component internally depends on the `'uni-icons'` component
- 请勿在组件内部使用，宽度可能会发生错误
- Do not use inside components, width may be wrong
- 当前组件不支持文字大小的修改 ，如有需要请使用深度选择器覆盖样式
- The current component does not support text size modification, if necessary, use the depth selector to override the style
:::

### 基本用法
### Basic usage

```html
<uni-nav-bar title="导航栏组件"></uni-nav-bar>
```

### 开启阴影
### Enable shadows

使用 `shadow` 属性开启导航栏阴影
Use the `shadow` property to enable navigation bar shadows

Tips:
- nvue 下某些机型可能显示不正常 ，建议 nvue 下关闭阴影
- Some models may not display properly under nvue, it is recommended to turn off the shadow under nvue

```html
<uni-nav-bar shadow title="导航栏组件"></uni-nav-bar>
```

### 开启暗黑主题
### Enable dark mode

使用 `dark` 属性开启导航栏的暗黑主题
Use the `dark` property to enable dark mode for the navigation bar

Tips:
- 暗黑主题只会改变组件默认的前景色和背景色，如果设置自定义颜色，自定义颜色将优先显示
- Dark mode will only change the default foreground and background colors of the component. If you set a custom color, the custom color will be displayed first

```html
<uni-nav-bar dark title="导航栏组件"></uni-nav-bar>
```
### 自定义颜色
### custom color

使用 `color` 属性修改导航栏前景色（文字图标颜色）
Use the `color` property to modify the navigation bar foreground color (text icon color)

使用 `background-color` 属性修改导航栏背景色
Use the `background-color` property to modify the background color of the navigation bar

```html
<uni-nav-bar dark title="导航栏组件"></uni-nav-bar>
```

### 带左右文字
### with left and right text

使用 `left-text` 属性设置导航栏左侧文字
Use the `left-text` property to set the text on the left side of the navbar

使用 `right-text` 属性设置导航栏右侧文字
Use the `right-text` property to set the text on the right side of the navbar

Tips:
- 图标依赖 `uni-icons` 组件 ，可用图标类型参考 [uni-icons 示例](https://hellouniapp.dcloud.net.cn/pages/extUI/icons/icons)
- Icons depend on `uni-icons` component, available icon types refer to [uni-icons example](https://hellouniapp.dcloud.net.cn/pages/extUI/icons/icons)

```html
<uni-nav-bar left-text="返回" right-text="设置" title="标题" />
```


### 带左右图标
### with left and right icons

使用 `left-icon` 属性设置导航栏左侧图标
Use the `left-icon` property to set the icon on the left side of the navbar

使用 `right-icon` 属性设置导航栏右侧图标
Use the `right-icon` property to set the right icon of the navbar

Tips:
- 图标依赖 `uni-icons` 组件 ，可用图标类型参考 [uni-icons 示例](https://hellouniapp.dcloud.net.cn/pages/extUI/icons/icons)
- Icons depend on `uni-icons` component, available icon types refer to [uni-icons example](https://hellouniapp.dcloud.net.cn/pages/extUI/icons/icons)
- **right-text 和 right-icon 属性不能同时存在，如需都使用，请使用 right 插槽自定义**
- **right-text and right-icon properties cannot exist at the same time, if you want to use both, please use the right slot to customize**

```html
<uni-nav-bar left-icon="left" right-icon="cart" title="标题" />
```

### 自定义高度
### custom height

使用 `height` 属性设置导航栏高度
Use the `height` property to set the navbar height

Tips:
- 组件默认高度为44px 
- Component default height is 44px
- 如使用 Number 类型传值默认单位为 px，使用 String 类型传值则必须带单位，如传值无效 ，则使用默认值
- If you use Number type to pass the value, the default unit is px, if you use String type to pass the value, you must have the unit. If the passed value is invalid, use the default value

```html
<uni-nav-bar height="120rpx" title="自定义高度" />
```


## API

### NavBar Props

|属性名|类型|默认值	|说明|
|property name|type|default value|description|
|:-:|:-:|:-:|:-:|
|title|String|-|标题文字|
|title|String|-|title text|
|leftText|String|-|左侧按钮文本|
|leftText|String|-|left button text|
|rightText|String|-|右侧按钮文本|
|rightText|String|-|right button text|
|leftIcon|String|-|左侧按钮图标（图标类型参考 [Icon 图标](http://ext.dcloud.net.cn/plugin?id=28) type 属性）	|
|leftIcon|String|-|left button icon (icon type refer to [Icon icon](http://ext.dcloud.net.cn/plugin?id=28) type attribute) |
|rightIcon|String	|-|右侧按钮图标（图标类型参考 [Icon 图标](http://ext.dcloud.net.cn/plugin?id=28) type 属性）	|
|rightIcon|String |-|The right button icon (the icon type refers to the [Icon icon](http://ext.dcloud.net.cn/plugin?id=28) type attribute) |
|color|String|#000000|图标和文字颜色|
|color|String|#000000|Icon and text color|
|backgroundColor|String	|#FFFFFF|导航栏背景颜色|
|backgroundColor|String |#FFFFFF|Navigation bar background color|
|fixed|Boolean|false|是否固定顶部|
|fixed|Boolean|false|Is the top fixed|
|statusBar|Boolean|false|是否包含状态栏|
|statusBar|Boolean|false|Include status bar|
|shadow|Boolean|false|导航栏下是否有阴影|
|shadow|Boolean|false|Is there a shadow under the navigation bar|
|border|Boolean|true|导航栏下是否有边框|
|border|Boolean|true|Is there a border under the navigation bar|
|height|Number/String|44|导航栏高度|
|height|Number/String|44|Navigation bar height|
|dark|Boolean|false|导航栏开启暗黑模式|
|dark|Boolean|false|Enable dark mode for navigation bar|
|leftWidth|Number/String|120rpx|导航栏左侧插槽宽度|
|leftWidth|Number/String|120rpx|The width of the left slot of the navigation bar|
|rightWidth|Number/String|120rpx|导航栏右侧插槽宽度|
|rightWidth|Number/String|120rpx|Slot width on the right side of the navigation bar|
|stat|Boolean/String|120rpx|是否开启统计标题功能。**注意：只有使用title 属性 ，且开启了统计功能才生效**|
|stat|Boolean/String|120rpx|Whether to enable the statistics title function. **Note: It will only take effect if the title attribute is used and the statistics function is turned on**|

**Tips**
- `leftWidth` 和 `rightWidth` 如无必要不需要设置
- `leftWidth` and `rightWidth` do not need to be set if not necessary
- `leftWidth` 和 `rightWidth` 如需设置 ，只有两个值相同，才能保证 `title` 居中 ，如设置值过大，需要注意到 `title` 被覆盖的可能
- If `leftWidth` and `rightWidth` need to be set, only the two values are the same to ensure that `title` is centered. If the set value is too large, you need to pay attention to the possibility of `title` being overwritten


### NavBar Slots
支持向 NavBar 里插入不同内容，以达到自定义的目的。
Supports inserting different content into NavBar for customization purposes.

|slot名	|说明|
|slot name |description|
|:-:|:-:|
|default|向导航栏中间插入	|
|default|Insert into the middle of the navigation bar |
|left|向导航栏左侧插入	|
|left|Insert | to the left of the navigation bar
|right	|向导航栏右侧插入	|
|right |Insert to the right of the navigation bar |

```html
<uni-nav-bar>
    <view>标题栏</view>
    <view v-slot:left>left</view>
    <view v-slot:right>right</view>
</uni-nav-bar>
```

### NavBar Events

|事件名|说明|返回值|
|Event Name|Description|Return Value|
|:-:|:-:|:-:|
|@clickLeft	|左侧按钮点击时触发|-|
|@clickLeft |Fires when the left button is clicked|-|
|@clickRight|右侧按钮点击时触发|-|
|@clickRight|Fires when the right button is clicked|-|



## 示例
## example
::: warning 注意
::: warning attention
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。
The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-nav-bar) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-nav-bar) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/nav-bar/nav-bar
> Template
``` html
<template>
	<view class="container">
		<uni-nav-bar dark :fixed="true" shadow background-color="#007AFF" status-bar left-icon="left" left-text="返回"
			title="自定义导航栏" @clickLeft="back" />
		<uni-card is-full :isShadow="false">
			<text
				class="uni-h6">本导航栏为自定义组件，并非原生导航栏。除非原生导航栏无法满足需求，否则不推荐使用自定义导航栏组件。具体参考https://ask.dcloud.net.cn/article/34921</text>
		</uni-card>
		<uni-section title="基本用法" subTitle="使用 title 属性设置导航栏标题" type="line" style="margin-bottom: 3px;">
			<view class="box-bg">
				<uni-nav-bar title="标题" />
			</view>
		</uni-section>
		<uni-section title="开启阴影" subTitle="使用 shadow 属性启用阴影" type="line" style="margin-bottom: 3px;">
			<view class="box-bg">
				<uni-nav-bar shadow left-icon="left" title="开启阴影" @clickLeft="back" />
			</view>
		</uni-section>
		<uni-section title="开启暗黑模式" subTitle="使用 dark 属性设置暗黑模式" type="line" style="margin-bottom: 3px;">
			<view class="box-bg">
				<uni-nav-bar shadow left-icon="left" dark title="暗黑模式" @clickLeft="back" />
			</view>
		</uni-section>
		<uni-section title="带返回箭头+右侧图标" subTitle="使用 left-icon/right-icon 设置左右图标" type="line"
			style="margin-bottom: 3px;">
			<view class="box-bg">
				<uni-nav-bar shadow left-icon="left" right-icon="cart" title="标题" />
			</view>
		</uni-section>
		<uni-section title="左侧文字+右侧文字" subTitle="使用 left-text/right-text 设置左右文字" type="line"
			style="margin-bottom: 3px;">
			<view class="box-bg">
				<uni-nav-bar shadow left-icon="left" leftText="返回" rightText="设置" title="标题" />
			</view>
		</uni-section>
		<uni-section title="自定义颜色" subTitle="使用 color/background-color 属性设置前景背景色" type="line"
			style="margin-bottom: 3px;">
			<view class="box-bg">
				<view class="box-bg">
					<uni-nav-bar dark color="#999" backgroundColor="#f5f5f5" shadow left-icon="left" leftText="返回"
						rightText="设置" title="自定义颜色" />
				</view>
			</view>
		</uni-section>
		<uni-section title="自定义高度" subTitle="使用 height 修改组件高度" type="line" style="margin-bottom: 3px;">
			<view class="box-bg">
				<view class="box-bg">
					<uni-nav-bar height="65px" dark shadow left-icon="left" leftText="返回" rightText="设置"
						title="自定义高度" />
				</view>
			</view>
		</uni-section>
		<uni-section title="自定义内容" subTitle="使用 left/right/default 插槽自定义内容" type="line" style="margin-bottom: 3px;">
			<view class="box-bg">
				<uni-nav-bar>
					<block slot="left">
						<view class="city">
							<view>
								<text class="uni-nav-bar-text">{{ city }}</text>
							</view>
							<uni-icons type="arrowdown" color="#666" size="18" />
						</view>
					</block>
					<view class="input-view">
						<uni-icons class="input-uni-icon" type="search" size="18" color="#999" />
						<input confirm-type="search" class="nav-bar-input" type="text" placeholder="输入搜索关键词"
							@confirm="confirm" />
					</view>
					<block slot="right">
						<view class="city">
							搜索
						</view>
					</block>
				</uni-nav-bar>
			</view>
		</uni-section>


	</view>
</template>
```
> Script
```html
<script>
	export default {
		components: {},
		data() {
			return {
				city: '北京'
			}
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			showMenu() {
				uni.showToast({
					title: '菜单'
				})
			},
			clickLeft() {
				uni.showToast({
					title: '左侧按钮'
				})
			},
			search() {
				uni.showToast({
					title: '搜索'
				})
			},
			showCity() {
				uni.showToast({
					title: '选择城市'
				})
			},
			scan() {
				uni.showToast({
					title: '扫码'
				})
			},
			confirm() {
				uni.showToast({
					title: '搜索'
				})
			}
		},
		onPullDownRefresh() {
			console.log('onPullDownRefresh')
			setTimeout(function() {
				uni.stopPullDownRefresh()
				console.log('stopPullDownRefresh')
			}, 1000)
		}
	}
</script>
```
> Style
```html
<style lang="scss">
	$nav-height: 30px;

	.box-bg {
		background-color: #F5F5F5;
		padding: 5px 0;
	}

	.city {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		// width: 160rpx;
		margin-left: 4px;
	}

	.input-view {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		// width: 500rpx;
		flex: 1;
		background-color: #f8f8f8;
		height: $nav-height;
		border-radius: 15px;
		padding: 0 15px;
		flex-wrap: nowrap;
		margin: 7px 0;
		line-height: $nav-height;
	}

	.input-uni-icon {
		line-height: $nav-height;
	}

	.nav-bar-input {
		height: $nav-height;
		line-height: $nav-height;
		/* #ifdef APP-PLUS-NVUE */
		width: 370rpx;
		/* #endif */
		padding: 0 5px;
		font-size: 12px;
		background-color: #f8f8f8;
	}
</style>

```
:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/nav-bar/nav-bar)
[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/nav-bar/nav-bar)