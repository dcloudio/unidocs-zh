### cover-image
覆盖在原生组件上的图片视图。可覆盖的原生组件同`cover-view`，支持嵌套在`cover-view`里。
Image view overlaid on native component. Overridable native components are the same as `cover-view`, support nesting in `cover-view`.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Quick app|360 applet|kuaishou applet|JD applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|x|√|√|x|√|√|

**属性说明**
**Property description**

|属性名|类型|默认值|说明|平台差异说明|
|property name|type|default value|description|platform difference description|
|:-|:-|:-|:-|:-|
|src|String||图标路径。支持本地路径、网络路径。不支持 base64 格式。||
|src|String||The icon path. Support local path, network path. The base64 format is not supported. ||
|@load|eventhandle||图片加载成功时触发|微信小程序 2.1.0、京东小程序|
|@load|eventhandle||Triggered when the image is loaded successfully|WeChat applet 2.1.0, Jingdong applet|
|@error|eventhandle||图片加载失败时触发|微信小程序 2.1.0、京东小程序|
|@error|eventhandle||Triggered when the image fails to load|WeChat applet 2.1.0, Jingdong applet|


app-vue上可覆盖的原生组件：`<video>`、`<map>`
Overridable native components on app-vue: `<video> `,`<map> `

支持的事件：`click`
Supported events: `click`

**不支持的 CSS**
**Unsupported CSS**

- position: fixed
- opacity
- overflow
- padding
- linebreak
- white-space

注意：nvue的cover-view不在上述限制中，它仅支持且全部支持nvue的所有css。
Note: nvue's cover-view is not in the above restrictions, it only supports and fully supports all css of nvue.

**Tips**

- App端vue页面 `cover-view`、`cover-image` 中不支持嵌套其它组件，包括再次嵌套`cover-view`，仅可覆盖`video`、`map`。App端nvue页面自2.1.5起没有这些限制。
- Nesting of other components in `cover-view` and `cover-image` on the app-side vue page, including nesting `cover-view` again, can only cover `video`, `map`. App-side nvue pages do not have these restrictions since 2.1.5.
- App端 `cover-image` 使用本地图像的话，打包前需要设置资源为释放模式，在manifest文件内app-plus新增runmode节点，设置值为liberate。
- If `cover-image` on the App side uses a local image, you need to set the resource to release mode before packaging. Add a runmode node to app-plus in the manifest file, and set the value to liberate.
- App端还可以使用plus.nativeObj.view绘制原生内容，参考:[uni-app中使用5+界面控件](https://ask.dcloud.net.cn/article/35036)、[plus.nativeObj.view规范](https://www.html5plus.org/doc/zh_cn/nativeobj.html#plus.nativeObj.View)
- On the App side, you can also use plus.nativeObj.view to draw native content, refer to: [Using 5+ interface controls in uni-app](https://ask.dcloud.net.cn/article/35036), [plus.nativeObj .view specification](https://www.html5plus.org/doc/zh_cn/nativeobj.html#plus.nativeObj.View)
- App端还提供了更灵活和强大的`subNvue`，参考[原生子窗体subNvue](/api/window/subNVues)
- The App side also provides a more flexible and powerful `subNvue`, refer to [Native subform subNvue](/api/window/subNVues)
- 在 video 组件中使用时，若想在全屏模式下使用`cover-view`，只有在微信小程序、App端的nvue页面可实现。
- When used in the video component, if you want to use `cover-view` in full-screen mode, it can only be implemented in the WeChat applet and the nvue page on the App side.
- 在App端，如果重度使用video和map，推荐使用nvue页面。
- On the App side, if video and map are heavily used, nvue page is recommended.
- 百度小程序iOS端暂不支持一个页面有多个video时嵌套cover-view。
- The iOS side of Baidu Mini Program does not support nested cover-views when a page has multiple videos.
- 支付宝小程序中 `cover-view` 不支持嵌套。
- `cover-view` in Alipay applet does not support nesting.

**微信小程序的cover-view使用注意：**
**Notes on the use of cover-view of WeChat applet:**
- cover-view和cover-image的aria-role仅可设置为button，读屏模式下才可以点击，并朗读出“按钮”；为空时可以聚焦，但不可点击
- The aria-role of cover-view and cover-image can only be set to button, it can be clicked in screen reading mode, and the "button" can be read aloud; when it is empty, it can be focused, but not clickable
- 基础库 2.2.4 起支持 touch 相关事件，也可使用 hover-class 设置点击态
- The basic library 2.2.4 supports touch related events, you can also use hover-class to set the click state
- 基础库 2.1.0 起支持设置 scale rotate 的 css 样式，包括 transition 动画
- Since the base library 2.1.0, it supports setting the css style of scale rotate, including transition animation
- 基础库 1.9.90 起 cover-view 支持 overflow: scroll，但不支持动态更新 overflow
- Since base library 1.9.90, cover-view supports overflow: scroll, but does not support dynamic updating of overflow
- 基础库 1.9.90 起最外层 cover-view 支持 position: fixed
- Since base library 1.9.90, the outermost cover-view supports position: fixed
- 基础库 1.9.0 起支持插在 view 等标签下。在此之前只可嵌套在原生组件map、video、canvas、camera内，避免嵌套在其他组件内。
- Since the base library 1.9.0, it supports inserting under tags such as view. Before this, it can only be nested in native components map, video, canvas, camera, avoid nesting in other components.
- 基础库 1.6.0 起支持css transition动画，transition-property只支持transform (translateX, translateY)与opacity。
- Basic library 1.6.0 supports css transition animation, transition-property only supports transform (translateX, translateY) and opacity.
- 基础库 1.6.0 起支持css opacity。
- The base library supports css opacity since 1.6.0.
- 事件模型遵循冒泡模型，但不会冒泡到原生组件。
- The event model follows the bubbling model, but does not bubble to native components.
- 文本建议都套上cover-view标签，避免排版错误。
- Text suggestions are covered with cover-view tags to avoid typographical errors.
- 只支持基本的定位、布局、文本样式。不支持设置单边的border、background-image、shadow、overflow: visible等。
- Only basic positioning, layout, and text styles are supported. Setting unilateral border, background-image, shadow, overflow: visible, etc. is not supported.
- 建议子节点不要溢出父节点
- It is recommended that child nodes not overflow parent nodes
- 支持使用 z-index 控制层级
- Supports using z-index to control hierarchy
- 默认设置的样式有：white-space: nowrap; line-height: 1.2; display: block;
- The default styles are: white-space: nowrap; line-height: 1.2; display: block;
- 自定义组件嵌套 cover-view 时，自定义组件的 slot 及其父节点暂不支持通过 wx:if 控制显隐，否则会导致 cover-view 不显示
- When a custom component nests a cover-view, the slot of the custom component and its parent node do not support wx:if to control the display and hide, otherwise the cover-view will not be displayed

**示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/cover-view/cover-view)
**Example** [View Demo](https://hellouniapp.dcloud.net.cn/pages/component/cover-view/cover-view)

以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。
The following sample code is from [hello uni-app project](https://github.com/dcloudio/hello-uniapp), it is recommended to use HBuilderX, create a new uni-app project, and select the hello uni-app template, you can directly experience the complete Example.

::: preview https://hellouniapp.dcloud.net.cn/pages/component/cover-view/cover-view
> Template
```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<!-- This example does not contain the complete css, please refer to the above to obtain the external chain css, and view it in the hello uni-app project -->
<template>
	<view class="page">
		<video class="video" id="demoVideo" :controls="false" :enable-progress-gesture="false" :show-center-play-btn="true" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126-lite.m4v">
			<cover-view class="controls-title">简单的自定义 controls</cover-view>
			<cover-image class="controls-play img" @click="play" src="/static/play.png"></cover-image>
			<cover-image class="controls-pause img" @click="pause" src="/static/pause.png"></cover-image>
		</video>
	</view>
</template>
```
> Script
```vue
<script>
	export default {
		data() {
			return {}
		},
		mounted() {
			this.videoCtx = uni.createVideoContext('demoVideo')
		},
		methods: {
			play(event) {
				this.videoCtx.play();
				uni.showToast({
					title: '开始播放',
					icon: 'none'
				});
			},
			pause(event) {
				this.videoCtx.pause();
				uni.showToast({
					title: '暂停播放',
					icon: 'none'
				});
			}
		}
	}
</script>
```
> Style
```vue
<style>
	.page {
		display: flex;
		justify-content: center;
	}

	.video {
		position: relative;
	}

	cover-view,
	cover-image {
		display: inline-block;
	}

	.img {
		position: absolute;
		width: 100rpx;
		height: 100rpx;
		top: 50%;
		margin-top: -50rpx;
	}

	.controls-play {
		left: 50rpx;
	}

	.controls-pause {
		right: 50rpx;
	}

	.controls-title {
		width: 100%;
		text-align: center;
		color: #FFFFFF;
	}
</style>
```
:::
