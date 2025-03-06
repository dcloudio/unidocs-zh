## cover-image
覆盖在原生组件上的图片视图。可覆盖的原生组件同`cover-view`，支持嵌套在`cover-view`里。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|元服务|小红书小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|x|√|√|x|√|√|x|x|

<!-- UNIAPPCOMJSON.cover-image.compatibility -->

**属性说明**

|属性名|类型|默认值|说明|平台差异说明|
|:-|:-|:-|:-|:-|
|src|String||图标路径。支持本地路径、网络路径。不支持 base64 格式。||
|@load|eventhandle||图片加载成功时触发|微信小程序 2.1.0、百度小程序、QQ小程序、快手小程序、京东小程序|
|@error|eventhandle||图片加载失败时触发|微信小程序 2.1.0、百度小程序、QQ小程序、快手小程序、京东小程序|

app-vue上可覆盖的原生组件：`<video>`、`<map>`

支持的事件：`click`

**不支持的 CSS**

- position: fixed
- opacity
- overflow
- padding
- linebreak
- white-space

注意：nvue的cover-view不在上述限制中，它仅支持且全部支持nvue的所有css。

**Tips**

- App端vue页面 `cover-view`、`cover-image` 中不支持嵌套其它组件，包括再次嵌套`cover-view`，仅可覆盖`video`、`map`。App端nvue页面自2.1.5起没有这些限制。
- App端 `cover-image` 使用本地图像的话，打包前需要设置资源为释放模式，在manifest文件内app-plus新增runmode节点，设置值为liberate。




**示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/cover-view/cover-view)

以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。

::: preview https://hellouniapp.dcloud.net.cn/pages/component/cover-view/cover-view
> Template
```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
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
