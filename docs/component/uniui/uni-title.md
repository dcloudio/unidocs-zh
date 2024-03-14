# uni-title 标题

::: tip 组件名：uni-title
> 代码块： `uTitle`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-title)
:::

章节标题，通常用于记录页面标题，使用当前组件，uni-app 如果开启统计，将会自动统计页面标题 。

## 介绍
### 基本用法

```html
<uni-title title="上报统计数据"></uni-title>
<uni-title type="h1" title="h1 一级标题 "></uni-title>
<uni-title type="h1" title="h1 一级标题" color="#027fff"></uni-title>
<uni-title type="h2" title="h2 居中" align="center"></uni-title>
```


### 标题统计
title 组件可以与 uni统计集合使用，只要开启uni统计，即可自动采集标题

- 如果不写 type 属性， 为上报标题。这是标题统计的默认用法，页面会优先上报组件传入的title值为统计上报数据 
- 页面统计上报只会上报一次，如多个组件开启，则只上报最后一个组件的内容，所以如非必要请不要多个组件同时开启统计，避免上报错误标题统计
- 为避免上报错误标题统计， uni.report() API 与章节标题组件请勿一起使用

::: warning 注意事项
- 在使用 align 属性时，在非 nvue 页面下不生效，或者组件宽度不对，请在组件外层设置一个元素的 display为block 即可解决问题。
	
	**示例：**
	
	```html
	<template>
		<view class="box">
			<uni-title type="h1" title="h1 一级标题 "></uni-title>
		</view>
	</template>
	<style>
		.box {
			/* #ifndef APP-NVUE */
			display: block;
			/* #endif */
		}
	</style>
	```
:::

## API
### Title Props

|属性名	|类型	|默认值	|说明																									|
|:-:	|:-:	|:-:	|:-:																									|
|type	|String	|-		|标题类型，可选值 h1、h2、h3、h4、h5 ，章节标题字体会比正常字长字体粗，不指定 type 值，默认为上报统计数据	|
|title	|String	|-		|章节标题内容																								|
|align	|String	|-		|对齐方式，可选值 left:左对齐；center:居中；right:右对齐；												|
|color	|String	|-		|字体颜色																								|
|stat	|Boolean|-		|是否开启统计功能呢，如不填写type值，默认为开启，填写 type 属性，默认为关闭														|

## 示例
::: warning 注意
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-title) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/title/title
> Template
``` html
<template>
	<view class="uni-content">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6"> 章节标题，通常用于记录页面标题，使用当前组件在 uni-app 开启统计的情况下，将会自动统计页面标题.</text>
		</uni-card>
		<uni-section title="不同类型" type="line">
			<view class="example-body">
				<uni-title type="h1" title="h1 一级标题"></uni-title>
				<uni-title type="h2" title="h2 二级标题"></uni-title>
				<uni-title type="h3" title="h3 三级标题"></uni-title>
				<uni-title type="h4" title="h4 四级标题"></uni-title>
				<uni-title type="h5" title="h5 五级标题"></uni-title>
			</view>
		</uni-section>

		<uni-section title="改变颜色" type="line">

			<view class="example-body">
				<uni-title type="h1" title="h1 一级标题" color="#027fff"></uni-title>
				<uni-title type="h2" title="h2 二级标题" color="#2490ff"></uni-title>
				<uni-title type="h3" title="h3 三级标题" color="#439ffc"></uni-title>
				<uni-title type="h4" title="h4 四级标题" color="#60adfb"></uni-title>
				<uni-title type="h5" title="h5 五级标题" color="#7db9f7"></uni-title>
			</view>
		</uni-section>
		<uni-section title="对齐方式" type="line">

			<view class="example-body">
				<uni-title type="h1" title="h1 左对齐" align="left"></uni-title>
				<uni-title type="h2" title="h2 居中" align="center"></uni-title>
				<uni-title type="h3" title="h3 右对齐" align="right"></uni-title>
				<uni-title type="h4" title="h4 居中" align="center"></uni-title>
				<uni-title type="h5" title="h5 左对齐" align="left"></uni-title>
			</view>
		</uni-section>
		<uni-section title="组合示例" type="line">

			<view class="example-body">
				<view class="uni-box-head">
					<uni-title type="h1" align="center" title="uni-app介绍"></uni-title>
				</view>
				<view class="uni-box">
					<uni-title class="h3" type="h3" title="1 框架介绍"></uni-title>
				</view>
				<view class="uni-box">
					<uni-title class="h4" type="h4" title="1.1 什么是uni-app"></uni-title>
				</view>
				<view>
					<text
						class="uni-text">uni-app是一个使用Vue.js开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、H5、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉）等多个平台。即使不跨端，uni-app同时也是更好的小程序开发框架。DCloud公司拥有370万开发者用户，旗下uni-app有5万+案例、900款插件、50+微信/qq群，并且被阿里小程序工具内置，开发者可以放心选择。</text>
				</view>
				<view class="uni-box">
					<uni-title class="h4" type="h4" title="1.2 开发规范"></uni-title>
				</view>
				<view class="">
					<uni-title class="h5" type="h5" color="#666" title="- 页面文件遵循 Vue 单文件组件 (SFC) 规范"></uni-title>
					<uni-title class="h5" type="h5" color="#666" title="- 组件标签靠近小程序规范，详见uni-app 组件规范"></uni-title>
					<uni-title class="h5" type="h5" color="#666"
						title="- 接口能力（JS API）靠近微信小程序规范，但需将前缀 wx 替换为 uni，详见uni-app接口规范"></uni-title>
					<uni-title class="h5" type="h5" color="#666" title="- 数据绑定及事件处理同 Vue.js 规范，同时补充了App及页面的生命周期">
					</uni-title>
					<uni-title class="h5" type="h5" color="#666" title="- 为兼容多端运行，建议使用flex布局进行开发"></uni-title>
				</view>
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
				title: '章节标题通常用于记录页面标题，例如商品标题、新闻标题等，当前组件会自动上报内容统计数据'
			}
		}
	}
</script>
```
> Style
```html
<style lang="scss">
	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 10px;
	}

	.uni-text {
		font-size: 14px;
		line-height: 22px;
		color: #333;
	}
</style>

```
:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/title/title)