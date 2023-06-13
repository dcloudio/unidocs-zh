
::: tip 组件名 uni-row、uni-col
::: tip component name uni-row, uni-col
> 代码块： `uRow`、`uCol`
> Code blocks: `uRow`, `uCol`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-row)
[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-row)
:::
流式栅格系统，随着屏幕或视口分为 24 份，可以迅速简便地创建布局。
A fluid grid system that divides the screen or viewport into 24 pieces for quick and easy layout creation.

## 介绍
## introduce
### 平台差异说明
### Platform Difference Description

### `uni-row`
| 属性名 | App(nvue) | App(vue) | H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 抖音小程序 | QQ 小程序 |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| gutter |-|    √|  √  |√ | √  |√ |  √   |√|

### `uni-col`

| 属性名 | App(nvue) | App(vue) | H5  | 微信小程序 | 支付宝小程序 | 百度小程序 | 抖音小程序 | QQ 小程序 |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  span  |√|√|√|√|√|√|√|√|
| offset |√|√|  √  |√ | √  |√ |  √   |√|
|  push  |√|√|  √  |√ | √  |√ |  √   |√|
|  pull  |√|    √|  √  |√ | √  |√ |  √   |√|
|   xs   |-|    √|  √  |√ | √  |√ |  √   |√|
|   sm   |-|    √|  √  |√ | √  |√ |  √   |√|
|   md   |-|    √|  √  |√ | √  |√ |  √   |√|
|   lg   |-|    √|  √  |√ | √  |√ |  √   |√|
|   xl   |-|    √|  √  |√ | √  |√ |  √   |√|



### 基本用法
### Basic usage

```html
<uni-row class="demo-uni-row">
	<uni-col>
		<view class="demo-uni-col dark_deep"></view>
	</uni-col>
</uni-row>

<uni-row class="demo-uni-row">
	<uni-col :span="12">
		<view class="demo-uni-col dark"></view>
	</uni-col>
	<uni-col :span="12">
		<view class="demo-uni-col light"></view>
	</uni-col>
</uni-row>
```

### 分栏偏移
### Column offset

```html
<uni-row class="demo-uni-row">
	<uni-col :span="8">
		<view class="demo-uni-col dark"></view>
	</uni-col>
	<uni-col :span="8" :offset="6">
		<view class="demo-uni-col dark"></view>
	</uni-col>
</uni-row>

<uni-row class="demo-uni-row">
	<uni-col :span="12" :pull="6">
		<view class="demo-uni-col dark"></view>
	</uni-col>
</uni-row>

<uni-row class="demo-uni-row">
	<uni-col :span="12" :push="6">
		<view class="demo-uni-col dark"></view>
	</uni-col>
</uni-row>
```

### 响应式布局
### Responsive layout

```html
<uni-row class="demo-uni-row">
	<uni-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
		<view class="demo-uni-col dark"></view>
	</uni-col>
	<uni-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
		<view class="demo-uni-col light"></view>
	</uni-col>
	<uni-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
		<view class="demo-uni-col dark"></view>
	</uni-col>
	<uni-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
		<view class="demo-uni-col light"></view>
	</uni-col>
</uni-row>
```

### 使用到的 CSS
### CSS used

```css
.demo-uni-row {
	margin-bottom: 10px;
	/* QQ、抖音小程序文档写有 :host，但实测不生效 */
	/* 百度小程序没有 :host，需要设置block */
	/* #ifdef MP-TOUTIAO || MP-QQ || MP-BAIDU */
	display: block;
	/* #endif */
}

/* 支付宝小程序没有 demo-uni-row 层级 */
/* 微信小程序使用了虚拟化节点，没有 demo-uni-row 层级 */
/* #ifdef MP-ALIPAY || MP-WEIXIN */
/deep/ .uni-row {
	margin-bottom: 10px;
}
/* #endif */

.demo-uni-col {
	height: 36px;
	border-radius: 4px;
}

.dark_deep {
	background-color: #99a9bf;
}

.dark {
	background-color: #d3dce6;
}

.light {
	background-color: #e5e9f2;
}
```


## API

### Row Props

`其他平台`
`Other Platforms`

| 属性名 |  类型  | 可选值 | 默认值 | 必填 |   说明   |
| Property Name | Type | Optional Value | Default Value | Required | Description |
| :-: | :-: | :-: | :-: | :-: | :-: |
| gutter | Number |   -    |   0    |  否  | 栅格间隔 |
| gutter | Number | - | 0 | no | grid interval |

`nvue平台`
`nvue-platform`

| 属性名 |类型 | 可选值 |  默认值  | 必填 |    说明    |
| Property Name | Type | Optional Value | Default Value | Required | Description |
| :-: | :-: | :-: | :-: | :-: | :-: |
| width  | Number/String |   -    | `750rpx` |  否  | nvue 中无百分比 width，使用 span 等属性时，需配置此项`rpx值`。此项不会影响其他平台展示效果 |
| width | Number/String | - | `750rpx` | No | There is no percentage width in nvue. When using properties such as span, you need to configure this `rpx value`. This item will not affect the display effect of other platforms |

### Col Props

| 属性名 |类型 | 可选值 | 默认值 | 必填 |   说明    |
| Property Name | Type | Optional Value | Default Value | Required | Description |
| :-: | :-: | :-: | :-: | :-: | :-: |
|  span  |    Number|   -    |   24   |  否  |   栅格占据的列数    |
| span | Number| - | 24 | no | number of columns occupied by the grid |
| offset |    Number|   -    |   -    |  否  |  栅格左侧间隔格数   |
| offset | Number| - | - | No | Number of spaces to the left of the grid |
|  push  |    Number|   -    |   -    |  否  |  栅格向右偏移格数   |
| push | Number| - | - | No | Grid offset to the right by the number of cells |
|  pull  |    Number|   -    |   -    |  否  |  栅格向左偏移格数   |
| pull | Number| - | - | No | Grid offset number to the left |
|   xs   | Number/object |   -    |   -    |  否  | 屏幕宽度`<768px`时，要显示的栅格规则，如：`:xs="8"`或`:xs="{span: 8, pull: 4}"` |
| xs | Number/object | - | - | No | The grid rules to display when the screen width is `<768px`, such as: `:xs="8"` or `:xs="{span: 8, pull : 4}"` |
|   sm   | Number/object |   -    |   -    |  否  |  屏幕宽度`≥768px`时，要显示的栅格规则   |
| sm | Number/object | - | - | No | Grid rules to display when screen width `≥768px` |
|   md   | Number/object |   -    |   -    |  否  |  屏幕宽度`≥992px`时，要显示的栅格规则   |
| md | Number/object | - | - | No | Grid rules to display when screen width `≥992px` |
|   lg   | Number/object |   -    |   -    |  否  |  屏幕宽度`≥1200px`时，要显示的栅格规则  |
| lg | Number/object | - | - | No | Grid rules to display when screen width `≥1200px` |
|   xl   | Number/object |   -    |   -    |  否  |  屏幕宽度`≥1920px`时，要显示的栅格规则  |
| xl | Number/object | - | - | No | Grid rules to display when screen width `≥1920px` |

## 示例
## Example
::: warning 注意
::: warning attention
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。
The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-row) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-row), select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/row/row
> Template
``` html
<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<!-- #ifndef APP-NVUE -->
			<text class="uni-h6"> 流式栅格系统，随着屏幕或视口分为 24 份，可以迅速简便地创建布局</text>
			<!-- #endif -->
			<!-- #ifdef APP-NVUE -->
			<text class="uni-h6"> 流式栅格系统，在nvue不可使用媒体查询</text>
			<!-- #endif -->
		</uni-card>

		<uni-section title="基础布局" subTitle="使用单一分栏创建基础的栅格布局" type="line">
			<view class="example-body">
				<uni-row class="demo-uni-row" :width="nvueWidth">
					<uni-col>
						<view class="demo-uni-col dark_deep"></view>
					</uni-col>
				</uni-row>

				<uni-row class="demo-uni-row" :width="nvueWidth">
					<uni-col :span="12">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="12">
						<view class="demo-uni-col light"></view>
					</uni-col>
				</uni-row>

				<uni-row class="demo-uni-row" :width="nvueWidth">
					<uni-col :span="8">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="8">
						<view class="demo-uni-col light"></view>
					</uni-col>
					<uni-col :span="8">
						<view class="demo-uni-col dark"></view>
					</uni-col>
				</uni-row>

				<uni-row class="demo-uni-row" :width="nvueWidth">
					<uni-col :span="6">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="6">
						<view class="demo-uni-col light"></view>
					</uni-col>
					<uni-col :span="6">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="6">
						<view class="demo-uni-col light"></view>
					</uni-col>
				</uni-row>

				<uni-row class="demo-uni-row" :width="nvueWidth">
					<uni-col :span="4">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="4">
						<view class="demo-uni-col light"></view>
					</uni-col>
					<uni-col :span="4">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="4">
						<view class="demo-uni-col light"></view>
					</uni-col>
					<uni-col :span="4">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="4">
						<view class="demo-uni-col light"></view>
					</uni-col>
				</uni-row>
			</view>
		</uni-section>


		<uni-section title="混合布局" subTitle="通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局" type="line">
			<view class="example-body">
				<uni-row class="demo-uni-row" :gutter="gutter" :width="nvueWidth">
					<uni-col :span="8">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="8">
						<view class="demo-uni-col light"></view>
					</uni-col>
					<uni-col :span="4">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="4">
						<view class="demo-uni-col light"></view>
					</uni-col>
				</uni-row>

				<uni-row class="demo-uni-row" :gutter="gutter" :width="nvueWidth">
					<uni-col :span="4">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="16">
						<view class="demo-uni-col light"></view>
					</uni-col>
					<uni-col :span="4">
						<view class="demo-uni-col dark"></view>
					</uni-col>
				</uni-row>
			</view>
		</uni-section>


		<uni-section title="分栏偏移" subTitle="支持偏移指定的栏数" type="line">
			<view class="example-body">
				<uni-row class="demo-uni-row" :gutter="gutter" :width="nvueWidth">
					<uni-col :span="8">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="8" :offset="6">
						<view class="demo-uni-col light"></view>
					</uni-col>
				</uni-row>

				<uni-row class="demo-uni-row" :gutter="gutter" :width="nvueWidth">
					<uni-col :span="6" :offset="6">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="6" :offset="6">
						<view class="demo-uni-col light"></view>
					</uni-col>
				</uni-row>

				<uni-row class="demo-uni-row" :gutter="gutter" :width="nvueWidth">
					<uni-col :span="12" :pull="6">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="6" :push="6">
						<view class="demo-uni-col light"></view>
					</uni-col>
				</uni-row>

				<uni-row class="demo-uni-row" :gutter="gutter" :width="nvueWidth">
					<uni-col :span="12" :offset="6">
						<view class="demo-uni-col dark"></view>
					</uni-col>
				</uni-row>
			</view>
		</uni-section>


		<!-- #ifndef APP-NVUE -->
		<uni-section title="响应式布局" subTitle="共五个响应尺寸：xs、sm、md、lg 和 xl" type="line">
			<view class="example-body">
				<uni-row class="demo-uni-row" :gutter="gutter">
					<uni-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
						<view class="demo-uni-col light"></view>
					</uni-col>
					<uni-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
						<view class="demo-uni-col light"></view>
					</uni-col>
				</uni-row>
			</view>
		</uni-section>

		<!-- #endif -->
	</view>
</template>
```
> Script
```html
<script>
	export default {
		data() {
			return {
				gutter: 0,
				nvueWidth: 730
			}
		}
	}
</script>

```
> Style
```html
<style lang="scss">
	.demo-uni-row {
		margin-bottom: 10px;

		// 组件在小程序端display为inline
		// QQ、抖音小程序文档写有 :host，但实测不生效
		// 百度小程序没有 :host
		// Baidu applet does not have :host
		/* #ifdef MP-TOUTIAO || MP-QQ || MP-BAIDU */
		display: block;
		/* #endif */
	}

	// 支付宝小程序没有 demo-uni-row 层级
	// Alipay applet has no demo-uni-row level
	// 微信小程序使用了虚拟化节点，没有 demo-uni-row 层级
	// WeChat applet uses virtualized nodes, no demo-uni-row level
	/* #ifdef MP-ALIPAY || MP-WEIXIN */
	::v-deep .uni-row {
		margin-bottom: 10px;
	}

	/* #endif */

	.demo-uni-col {
		height: 36px;
		border-radius: 5px;
	}

	.dark_deep {
		background-color: #99a9bf;
	}

	.dark {
		background-color: #d3dce6;
	}

	.light {
		background-color: #e5e9f2;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 5rpx 10rpx 0;
		overflow: hidden;
	}
</style>

```
:::


[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/row/row)
[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/row/row)