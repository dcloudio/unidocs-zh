#### progress
进度条。

**属性说明**

|属性名			|类型		|默认值		|说明													|平台差异说明				|
|:-				|:-			|:-			|:-														|:-						|
|percent		|Number		|无			|百分比0~100											|						|
|show-info		|Boolean	|false		|在进度条右侧显示百分比									|						|
|border-radius|Number/String|0|圆角大小|app-nvue、微信基础库2.3.1+、QQ小程序、快手小程序、京东小程序|
|font-size|Number/String|16|右侧百分比字体大小|app-nvue、微信基础库2.3.1+、QQ小程序、京东小程序|
|stroke-width	|Number		|6			|进度条线的宽度，单位px									|						|
|activeColor	|Color		|#09BB07（百度为#E6E6E6）	|已选择的进度条的颜色									|						|
|backgroundColor|Color		|#EBEBEB	|未选择的进度条的颜色									|						|
|active			|Boolean	|false		|进度条从左往右的动画									|						|
|active-mode	|String		|backwards	|backwards: 动画从头播；forwards：动画从上次结束点接着播|App、H5、微信小程序、QQ小程序、快手小程序、京东小程序	|
|duration|Number|30|进度增加1%所需毫秒数|App-nvue2.6.1+、微信基础库2.8.2+、H5 3.1.11+、App-Vue 3.1.11+、快手小程序、京东小程序|
|@activeend		|EventHandle|			|动画完成事件											|微信小程序、京东小程序			|

**示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/progress/progress)

以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。

:::preview https://hellouniapp.dcloud.net.cn/pages/component/progress/progress

> Template
```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="progress-box">
				<progress :percent="pgList[0]" show-info stroke-width="3" />
			</view>
			<view class="progress-box">
				<progress :percent="pgList[1]" stroke-width="3" />
				<uni-icons type="close" class="progress-cancel" color="#dd524d"></uni-icons>
			</view>
			<view class="progress-box">
				<progress :percent="pgList[2]" stroke-width="3" />
			</view>
			<view class="progress-box">
				<progress :percent="pgList[3]" activeColor="#10AEFF" stroke-width="3" />
			</view>
			<view class="progress-control">
				<button type="primary" @click="setProgress">设置进度</button>
				<button type="warn" @click="clearProgress">清除进度</button>
			</view>
		</view>
	</view>
</template>
```
> Script
```vue
<script>
export default {
		data() {
			return {
				pgList: [0, 0, 0, 0]
			}
		},
		methods: {
			setProgress() {
				this.pgList = [20, 40, 60, 80]
			},
			clearProgress() {
				this.pgList = [0, 0, 0, 0]
			}
		}
	}
</script>
```
> Style
```vue
<style>
	.progress-box {
		display: flex;
		height: 50rpx;
		margin-bottom: 60rpx;
	}

	.uni-icon {
		line-height: 1.5;
	}

	.progress-cancel {
		margin-left: 40rpx;
	}

	.progress-control button {
		margin-top: 20rpx;
	}
</style>
```
:::

