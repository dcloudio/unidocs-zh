
::: tip 组件名：uni-nav-bar
> 代码块： `uNavBar`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-nav-bar)
:::

导航栏组件，主要用于头部导航。


## 介绍
::: warning 注意事项
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
- 组件需要依赖 `sass` 插件 ，请根据提示自行手动安装
- 组件内部依赖 `'uni-icons'` 组件
- 请勿在组件内部使用，宽度可能会发生错误
- 当前组件不支持文字大小的修改 ，如有需要请使用深度选择器覆盖样式
:::

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

### 开启暗黑主题

使用 `dark` 属性开启导航栏的暗黑主题

Tips:
- 暗黑主题只会改变组件默认的前景色和背景色，如果设置自定义颜色，自定义颜色将优先显示

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
|leftWidth|Number/String|120rpx|导航栏左侧插槽宽度|
|rightWidth|Number/String|120rpx|导航栏右侧插槽宽度|
|stat|Boolean/String|120rpx|是否开启统计标题功能。**注意：只有使用title 属性 ，且开启了统计功能才生效**|

**Tips**
- `leftWidth` 和 `rightWidth` 如无必要不需要设置
- `leftWidth` 和 `rightWidth` 如需设置 ，只有两个值相同，才能保证 `title` 居中 ，如设置值过大，需要注意到 `title` 被覆盖的可能


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
    <view v-slot:left>left</view>
    <view v-slot:right>right</view>
</uni-nav-bar>
```

### NavBar Events

|事件名|说明|返回值|
|:-:|:-:|:-:|
|@clickLeft	|左侧按钮点击时触发|-|
|@clickRight|右侧按钮点击时触发|-|



## 示例
::: warning 注意
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-nav-bar) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
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