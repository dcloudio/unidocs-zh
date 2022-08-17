#### progress
进度条。
Progress bar.

**属性说明**
**Attribute description**

|属性名			|类型		|默认值		|说明													|平台差异说明				|
|property name |type |default value |description |platform difference description |
|:-				|:-			|:-			|:-														|:-						|
|percent		|Number		|无			|百分比0~100											|						|
|percent |Number |None |Percent 0~100 | |
|show-info		|Boolean	|false		|在进度条右侧显示百分比									|						|
| show-info| Boolean| false| Display percentage on the right side of the progress bar| |
|border-radius|Number/String|0|圆角大小|app-nvue、微信基础库2.3.1+、QQ小程序、快手小程序、京东小程序|
|border-radius|Number/String|0|Round size|app-nvue, WeChat basic library 2.3.1+, QQ applet, Kuaishou applet, Jingdong applet|
|font-size|Number/String|16|右侧百分比字体大小|app-nvue、微信基础库2.3.1+、QQ小程序、京东小程序|
|font-size|Number/String|16|The right percentage font size|app-nvue, WeChat basic library 2.3.1+, QQ applet, Jingdong applet|
|stroke-width	|Number		|6			|进度条线的宽度，单位px									|						|
| stroke-width| Number| 6| Width of progress bar, in px| |
|activeColor	|Color		|#09BB07（百度为#E6E6E6）	|已选择的进度条的颜色									|						|
|activeColor |Color |#09BB07 (Baidu is #E6E6E6) |Selected progress bar color | |
|backgroundColor|Color		|#EBEBEB	|未选择的进度条的颜色									|						|
| backgroundColor| Color| #EBEBEB| Color of the unselected progress bar| |
|active			|Boolean	|false		|进度条从左往右的动画									|						|
| active| Boolean| false| Animation of progress bar from left to right| |
|active-mode	|String		|backwards	|backwards: 动画从头播；forwards：动画从上次结束点接着播|App、H5、微信小程序、QQ小程序、快手小程序、京东小程序	|
|active-mode |String |backwards |backwards: The animation is broadcast from the beginning; forwards: The animation is broadcast from the last end point|App, H5, WeChat applet, QQ applet, Kuaishou applet, Jingdong applet |
|duration|Number|30|进度增加1%所需毫秒数|App-nvue2.6.1+、微信基础库2.8.2+、H5 3.1.11+、App-Vue 3.1.11+、快手小程序、京东小程序|
|duration|Number|30|The number of milliseconds required to increase the progress by 1%|App-nvue2.6.1+, WeChat basic library 2.8.2+, H5 3.1.11+, App-Vue 3.1.11+, Kuaishou applet, Jingdong applet |
|@activeend		|EventHandle|			|动画完成事件											|微信小程序、京东小程序			|
|@activeend |EventHandle| |Animation completion event |WeChat applet, Jingdong applet |

**示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/progress/progress)
**Example** [View demo](https://hellouniapp.dcloud.net.cn/pages/component/progress/progress)

以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。
The following sample code comes from the [hello uni-app project](https://github.com/dcloudio/hello-uniapp). It is recommended to use HBuilderX to create a new uni-app project and choose the hello uni-app template to directly experience the complete example.

:::preview https://hellouniapp.dcloud.net.cn/pages/component/progress/progress

> Template
```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<!-- This example does not include the complete css, please refer to the above to obtain the external css. View it in the hello uni-app project -->
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

