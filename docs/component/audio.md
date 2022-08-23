#### audio
音频。
Audio.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|x|√|x|x|x|x|

**注意：** 微信小程序平台自基础库 1.6.0 版本开始，不再维护 audio 组件，推荐使用API方式而不是组件方式来播放音频。API见 [uni.createInnerAudioContext](/api/media/audio-context?id=createinneraudiocontext) 替代。
**Note:** The WeChat applet platform has not maintained the audio component since the basic library version 1.6.0. It is recommended to use the API method instead of the component method to play audio. API see [uni.createInnerAudioContext](/api/media/audio-context?id=createinneraudiocontext) instead.

app-nvue也不支持此组件。
app-nvue does not support this component either.

如果需要带ui的样式，可以自己做，也可以在插件市场搜索相关[插件](https://ext.dcloud.net.cn/search?q=audio)
If you need a style with ui, you can make it yourself or search for related [Plug-ins](https://ext.dcloud.net.cn/search?q=audio) in the plug-in market

**属性说明**
**Attribute description**

|属性名|类型|默认值|说明|
| Attribute name| Type| Defaults| Instruction|
|:-|:-|:-|:-|
|id|String||audio 组件的唯一标识符|
| id| String| | Unique identifier of the audio component|
|src|String||要播放音频的资源地址|
| src| String| | Address of the resource to play audio|
|loop|Boolean|false|是否循环播放|
| loop| Boolean| false| Whether to loop?|
|controls|Boolean|false|是否显示默认控件|
| controls| Boolean| false| Whether to display the default control?|
|poster|String||默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效|
| poster| String| | The image resource address of the audio cover on the default control. If the control attribute value is false, the poster will be an invalid setting.|
|name|String|未知音频|默认控件上的音频名字，如果 controls 属性值为 false 则设置 name 无效|
| name| String| Unknown audio| The audio name on the default control. If the control attribute value is false, the name will be an invalid setting.|
|author|String|未知作者|默认控件上的作者名字，如果 controls 属性值为 false 则设置 author 无效|
| author| String| Unknown author| The author name on the default control. If the control attribute value is false, the author will be an invalid setting.|
|@error|EventHandle||当发生错误时触发 error 事件，detail = {errMsg: MediaError.code}|
| @error| EventHandle| | Trigger the error event when an error occurs, detail = {errMsg: MediaError.code}|
|@play|EventHandle||当开始/继续播放时触发play事件|
| @play| EventHandle| | Trigger the play event when starts/continues playing|
|@pause|EventHandle||当暂停播放时触发 pause 事件|
| @pause| EventHandle| | Trigger the pause event when playing is paused|
|@timeupdate|EventHandle||当播放进度改变时触发 timeupdate 事件，detail = {currentTime, duration}|
| @timeupdate| EventHandle| | The timeupdate event is triggered when the playback progress changes, detail = {currentTime, duration}|
|@ended|EventHandle||当播放到末尾时触发 ended 事件|
| @ended| EventHandle| | Trigger the ended event when playing goes to the end|

**MediaError.code**

|返回错误码|描述|
| Return error code| Describe|
|:-|:-|
|1|获取资源被用户禁止|
| 1| Access to resources is forbidden by the user|
|2|网络错误|
| 2| Network error|
|3|解码错误|
| 3| Decoding error|
|4|不合适资源|
| 4| Inappropriate resources|

**示例：** [查看示例](https://hellouniapp.dcloud.net.cn/pages/component/audio/audio)
**Example:** [View the example](https://hellouniapp.dcloud.net.cn/pages/component/audio/audio)
 
```html
<template>
	<view>
		<view class="page-body">
			<view class="page-section page-section-gap" style="text-align: center;">
				<audio style="text-align: left" :src="current.src" :poster="current.poster" :name="current.name" :author="current.author" :action="audioAction" controls></audio>
			</view>
		</view>
	</view>
</template>
```


```javascript
export default {
	data() {
		return {
			current: {
				poster: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/7fbf26a0-4f4a-11eb-b680-7980c8a877b8.png',
				name: '致爱丽丝',
				author: '暂无',
				src: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3',
			},
			audioAction: {
				method: 'pause'
			}
		}
	}
}
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/abc3fd40-4f48-11eb-b680-7980c8a877b8.png)
