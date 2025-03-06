::: tip 组件名：uni-notice-bar
> 代码块： `uNoticeBar`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-notice-bar)
:::

通告栏组件 。

## 介绍
### 基本用法
使用 `text` 属性设置通告栏内容

使用 `singlet` 属性设置导是否单行显示
```html
<uni-notice-bar single text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
<uni-notice-bar text="[多行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
```
### 文字滚动
使用 `scrollable` 属性设置通文字是否滚动
```html
<uni-notice-bar scrollable single text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
```
### 显示图标
使用 `showIcon` 属性设置是否显示图标
```html
<uni-notice-bar showIcon text="[多行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
```
### 显示关闭按钮
使用 `showClose` 属性设置是否显示关闭图标
```html
<uni-notice-bar showClose showIcon text="这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
```
### 查看更多
使用 `showGetMore` 属性设置是否显示右侧查看更多图标

使用 `moreText` 属性设置查看更多文本
```html
 <uni-notice-bar @getmore="getMore" showGetMore moreText="查看更多" single text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
```

::: warning 注意
如果需要异步获取内容后展示需要使用`v-if`进行控制，`<uni-notice-bar v-if="text" :text="text"></uni-notice-bar>`
:::

## NoticeBar API

### NoticeBar Props

|属性名|类型	|默认值|说明|
|:-:|:-:|:-:|:-:|
|speed|Number|100|文字滚动的速度，默认100px/秒|
|text|String|-|显示文字|
|background-color|String|#fffbe8|背景颜色|
|color|String|#de8c17|文字颜色|
|moreColor|String|#999999|查看更多文字的颜色|
|moreText|String|-|设置“查看更多”的文本|
|single|Boolean|false|是否单行|
|scrollable|Boolean|false|是否滚动，为true时，NoticeBar为单行|
|showIcon|Boolean|false	|是否显示左侧喇叭图标|
|showClose|Boolean|false|是否显示右侧关闭按钮|
|showGetMore|Boolean|false|是否显示右侧查看更多图标，为true时，NoticeBar为单行|

### NoticeBar Events

|事件名称|说明|返回值	|
|:-:|:-:|:-:|
|@click|点击 NoticeBar 触发事件	|-|
|@close|关闭 NoticeBar 触发事件	|-|
|@getmore|点击”查看更多“时触发事件	|-|



## 示例
::: warning 注意
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-notice-bar) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/notice-bar/notice-bar
> Template
``` html
<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">通告栏组件多用于系统通知，广告通知等场景，可自定义图标，颜色，展现方式等。</text>
		</uni-card>

		<uni-section title="多行显示" type="line">
			<uni-notice-bar text="uni-app 版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。" />
		</uni-section>
		<uni-section title="单行显示" subTitle="使用 single 属性单行显示通知" type="line">
			<uni-notice-bar single text="uni-app 版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。" />
		</uni-section>
		<uni-section title="显示图标" subTitle="使用 show-icon 属性显示左侧小喇叭图标" type="line">
			<uni-notice-bar show-icon text="uni-app发布，开发一次、7端覆盖！" />
		</uni-section>
		<uni-section title="文字滚动" subTitle="使用 scrollable 属性使通告滚动,此时 single 属性将失效,始终单行显示" type="line">
			<uni-notice-bar show-icon scrollable
				text="uni-app 版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。" />
		</uni-section>
		<uni-section title="查看更多" subTitle="使用 show-get-more 显示更多,此时 single 属性将失效,始终单行显示,如不配置 more-text 属性 ,将显示箭头图标"
			type="line">
			<uni-notice-bar show-get-more show-icon text="年末大礼：uni-app1.4 新增百度、支付宝小程序。插件市场重磅上线！" @getmore="getMore" />
			<uni-notice-bar show-get-more show-icon more-text="查看更多" text="年末大礼：uni-app1.4 新增百度、支付宝小程序。插件市场重磅上线！"
				@getmore="getMore" />
		</uni-section>
		<uni-section title="修改颜色" type="line">
			<uni-notice-bar single color="#2979FF" background-color="#EAF2FF"
				text="uni-app 1.6版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。" />
		</uni-section>
		<uni-section title="关闭按钮" subTitle="使用 show-close 属性,可关闭通知" type="line">
			<uni-notice-bar show-close single text="HBuilderX 1.0正式发布！uni-app实现里程碑突破实现里程碑突破！" />
		</uni-section>
	</view>
</template>
```
> Script
```html
<script>
	export default {
		methods: {
			getMore() {
				uni.showToast({
					title: '点击查看更多',
					icon: 'none'
				})
			}
		}
	}
</script>
```
> Style
```html
<style lang="scss">
	.container {
		/* #ifndef APP-NVUE */
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		/* #endif */
	}
</style>

```
:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/notice-bar/notice-bar)
