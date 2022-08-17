
::: tip 组件名：uni-notice-bar
::: tip component name: uni-notice-bar
> 代码块： `uNoticeBar`
> Code block: `uNoticeBar`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-notice-bar)
[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-notice-bar)
:::

通告栏组件 。
Notice Board Component .

## 介绍
## introduce
### 基本用法
### Basic usage
使用 `text` 属性设置通告栏内容
Use the `text` property to set the bulletin board content

使用 `singlet` 属性设置导是否单行显示
Use the `singlet` property to set whether the guide is displayed on a single line
```html
<uni-notice-bar single text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
<uni-notice-bar text="[多行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
```
### 文字滚动
### Text scrolling
使用 `scrollable` 属性设置通文字是否滚动
Use the `scrollable` property to set whether the text is scrollable
```html
<uni-notice-bar scrollable single text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
```
### 显示图标
### show icon
使用 `showIcon` 属性设置是否显示图标
Use the `showIcon` property to set whether to show the icon
```html
<uni-notice-bar showIcon text="[多行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
```
### 显示关闭按钮
### Show close button
使用 `showClose` 属性设置是否显示关闭图标
Use the `showClose` property to set whether to show the close icon
```html
<uni-notice-bar showClose showIcon text="这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
```
### 查看更多
### see more
使用 `showGetMore` 属性设置是否显示右侧查看更多图标
Use the `showGetMore` property to set whether to show the see more icon on the right

使用 `moreText` 属性设置查看更多文本
Use the `moreText` property setting to see more text
```html
 <uni-notice-bar @getmore="getMore" showGetMore moreText="查看更多" single text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
```

::: warning 注意
::: warning attention
如果需要异步获取内容后展示需要使用`v-if`进行控制，`<uni-notice-bar v-if="text" :text="text"></uni-notice-bar>`
If you need to get the content asynchronously and display it, you need to use `v-if` to control it, `<uni-notice-bar v-if="text" :text="text"></uni-notice-bar>`
:::

## NoticeBar API

### NoticeBar Props

|属性名|类型	|默认值|说明|
|property name|type |default value|description|
|:-:|:-:|:-:|:-:|
|speed|Number|100|文字滚动的速度，默认100px/秒|
|speed|Number|100|Text scrolling speed, default 100px/sec|
|text|String|-|显示文字|
|text|String|-|Display text|
|background-color|String|#fffbe8|背景颜色|
|background-color|String|#fffbe8|background-color|
|color|String|#de8c17|文字颜色|
|color|String|#de8c17|Text Color|
|moreColor|String|#999999|查看更多文字的颜色|
|moreColor|String|#999999|View more text colors|
|moreText|String|-|设置“查看更多”的文本|
|moreText|String|-|Sets the text for "see more"|
|single|Boolean|false|是否单行|
|single|Boolean|false|Single line|
|scrollable|Boolean|false|是否滚动，为true时，NoticeBar为单行|
|scrollable|Boolean|false|Whether scrollable, when true, NoticeBar is a single line|
|showIcon|Boolean|false	|是否显示左侧喇叭图标|
|showIcon|Boolean|false |Whether to show the left horn icon|
|showClose|Boolean|false|是否显示左侧关闭按钮|
|showClose|Boolean|false|Whether to show the left close button|
|showGetMore|Boolean|false|是否显示右侧查看更多图标，为true时，NoticeBar为单行|
|showGetMore|Boolean|false|Whether to show the view more icon on the right, when true, the NoticeBar is a single line|

### NoticeBar Events

|事件名称|说明|返回值	|
|Event Name|Description|Return Value|
|:-:|:-:|:-:|
|@click|点击 NoticeBar 触发事件	|-|
|@click|Click the NoticeBar to trigger the event |-|
|@close|关闭 NoticeBar 触发事件	|-|
|@close|Close NoticeBar trigger event |-|
|@getmore|点击”查看更多“时触发事件	|-|
|@getmore|Trigger event when "View more" is clicked |-|



## 示例
## example
::: warning 注意
::: warning attention
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。
The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-notice-bar) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-notice-bar) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.
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
[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/notice-bar/notice-bar)