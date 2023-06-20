### uni.getRecorderManager()
获取**全局唯一**的录音管理器 ``recorderManager``。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|√|√|√|√|√|

**recorderManager 对象的方法列表**

|方法|参数|说明|平台差异说明|
|:-|:-|:-|:-|
|start|options|开始录音||
|pause||暂停录音|App 暂不支持|
|resume||继续录音|App 暂不支持|
|stop||停止录音||
|offStop|callback|取消监听录音停止事件|仅支付宝小程序支持|
|onStart|callback|录音开始事件||
|offStart|callback|移除录音开始事件|仅支付宝小程序支持|
|onPause|callback|录音暂停事件||
|offPause|callback|移除监听录音暂停事件|仅支付宝小程序支持|
|onStop|callback|录音停止事件，会回调文件地址||
|onResume|callback|监听录音继续事件|仅小程序支持|
|offResume|callback|取消监听录音继续事件|仅支付宝小程序支持|
|onInterruptionBegin|callback|监听录音因为受到系统占用而被中断开始事件。以下场景会触发此事件：微信语音聊天、微信视频聊天、QQ语音聊天、QQ视频聊天、电话响铃、接听电话。此事件触发后，录音会被暂停。pause 事件在此事件后触发|微信小程序、百度小程序、QQ小程序、快手小程序|
|onInterruptionEnd|callback|监听录音中断结束事件。在收到 interruptionBegin 事件之后，小程序内所有录音会暂停，收到此事件之后才可再次录音成功。|微信小程序、百度小程序、QQ小程序、快手小程序|
|onFrameRecorded|callback|已录制完指定帧大小的文件，会回调录音分片结果数据。如果设置了 frameSize ，则会回调此事件|App 暂不支持|
|offFrameRecorded|callback|取消监听已录制完指定帧大小的文件事件，指定 frameSize 大小并且 format 参数设置为 mp3 格式，调用此接口才会有回调|仅支付宝小程序支持|
|onDecibelChange|callback|监听声音分贝变化事件，[详见](https://opendocs.alipay.com/mini/01acgm?pathHash=a25f800a)|仅支付宝小程序支持|
|offDecibelChange|callback|取消监听声音分贝变化事件，[详见](https://opendocs.alipay.com/mini/03hbnp?pathHash=184f8366)|仅支付宝小程序支持|
|onError|callback|录音错误事件, 会回调错误信息|&nbsp;|
|offError|callback|取消监听录音错误事件|仅支付宝小程序支持|

**start(options) 说明**

|属性|类型|必填|说明|平台差异说明|
|:-|:-|:-|:-|:-|
|duration|Number|否|指定录音的时长，单位 ms ，如果传入了合法的 duration ，在到达指定的 duration 后会自动停止录音，最大值 600000（10 分钟）,默认值 60000（1 分钟）|App、小程序支持|
|sampleRate|Number|否|采样率，有效值 8000/16000/44100|App、小程序支持|
|numberOfChannels|Number|否|录音通道数，有效值 1/2|仅小程序支持|
|encodeBitRate|Number|否|编码码率，有效值见下表格|仅小程序支持|
|format|String|否|音频格式，有效值 aac/mp3/wav/PCM。App默认值为mp3，小程序默认值aac|App、小程序支持|
|frameSize|String|否|指定帧大小，单位 KB。传入 frameSize 后，每录制指定帧大小的内容后，会回调录制的文件内容，不指定则不会回调。暂仅支持 mp3 格式。|App、百度小程序不支持|
|hideTips|Boolean|否|隐藏录音图标。|支付宝小程序10.1.85+|
|audioSource|String|否|指定录音的音频输入源。|微信小程序[详见](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.start.html)、支付宝小程序[详见](https://opendocs.alipay.com/mini/api/recordermanager/start?pathHash=4ebf0019)、百度小程序[详见](https://smartprogram.baidu.com/docs/develop/api/media/recorder_RecorderManager-start/)、快手小程序|
|detectDecibel|Boolean|否|检测声音分贝数。[详见](https://opendocs.alipay.com/mini/api/recordermanager/start?pathHash=4ebf0019)|支付宝小程序10.2.0+|


其中，采样率和码率有一定要求，具体有效值如下：

|采样率|编码码率|
|:-|:-|
|8000|16000 ~ 48000|
|11025|16000 ~ 48000|
|12000|24000 ~ 64000|
|16000|24000 ~ 96000|
|22050|32000 ~ 128000|
|24000|32000 ~ 128000|
|32000|48000 ~ 192000|
|44100|64000 ~ 320000|
|48000|64000 ~ 320000|

**onStop(callback) 回调结果说明**

|属性|类型|说明|
|:-|:-|:-|
|tempFilePath|String|录音文件的临时路径|
|duration|Number|录音总时长。单位：s。（仅支付宝10.2.90+支持）|
|fileSize|Number|录音文件大小。单位：Byte。（仅支付宝10.2.90+支持）|


**onFrameRecorded(callback) 回调结果说明**

|属性|类型|说明|
|:-|:-|:-|
|frameBuffer|ArrayBuffer|录音分片结果数据|
|isLastFrame|Boolean|当前帧是否正常录音结束前的最后一帧|

**onError(callback) 回调结果说明**

|属性|类型|说明|
|:-|:-|:-|
|errMsg|String|错误信息|

**注意**

- 可以通过用户授权API来判断用户是否给应用授予麦克风的访问权限[https://uniapp.dcloud.io/api/other/authorize](https://uniapp.dcloud.io/api/other/authorize)

**示例**

```html
<template>
	<view>
		<button @tap="startRecord">开始录音</button>
		<button @tap="endRecord">停止录音</button>
		<button @tap="playVoice">播放录音</button>
	</view>
</template>
```

```javascript
const recorderManager = uni.getRecorderManager();
const innerAudioContext = uni.createInnerAudioContext();

innerAudioContext.autoplay = true;

export default {
	data() {
		return {
			text: 'uni-app',
			voicePath: ''
		}
	},
	onLoad() {
		let self = this;
		recorderManager.onStop(function (res) {
			console.log('recorder stop' + JSON.stringify(res));
			self.voicePath = res.tempFilePath;
		});
	},
	methods: {
		startRecord() {
			console.log('开始录音');

			recorderManager.start();
		},
		endRecord() {
			console.log('录音结束');
			recorderManager.stop();
		},
		playVoice() {
			console.log('播放录音');

			if (this.voicePath) {
				innerAudioContext.src = this.voicePath;
				innerAudioContext.play();
			}
		}
	}
}
```
