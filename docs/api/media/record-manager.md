### uni.getRecorderManager()
获取**全局唯一**的录音管理器 ``recorderManager``。
Get the **globally unique** recording manager ``recorderManager``.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|x|√|√|√|x|√|

**recorderManager 对象的方法列表**
**List of methods of recorderManager object**

|方法|参数|说明|平台差异说明|
|Method|Parameter|Description|Platform Difference Description|
|:-|:-|:-|:-|
|start|options|开始录音||
| start| options|Start recording||
|pause||暂停录音|App 暂不支持|
| pause||pause recording| App not supported at the moment|
|resume||继续录音|App 暂不支持|
| resume||Continue recording| App not supported yet|
|stop||停止录音||
| stop||stop recording||
|onStart|callback|录音开始事件||
| onStart| callback|recording start event||
|onPause|callback|录音暂停事件||
| onPause| callback|recording pause event||
|onStop|callback|录音停止事件，会回调文件地址||
|onResume|callback|监听录音继续事件|微信小程序、百度小程序、QQ小程序、京东小程序、抖音小程序|
|onInterruptionBegin|callback|监听录音因为受到系统占用而被中断开始事件。以下场景会触发此事件：微信语音聊天、微信视频聊天、QQ语音聊天、QQ视频聊天、电话响铃、接听电话。此事件触发后，录音会被暂停。pause 事件在此事件后触发|微信小程序、百度小程序、QQ小程序|
| onInterruptionBegin| callback|Monitor recording is interrupted start event due to system occupation. The following scenarios will trigger this event: WeChat voice chat, WeChat video chat, QQ voice chat, QQ video chat, phone ringing, answering a phone call. When this event fires, recording is paused. The pause event is triggered after this event|WeChat MiniApp, Baidu MiniApp, QQ MiniApp|
|onInterruptionEnd|callback|监听录音中断结束事件。在收到 interruptionBegin 事件之后，小程序内所有录音会暂停，收到此事件之后才可再次录音成功。|微信小程序、百度小程序、QQ小程序|
| onInterruptionEnd| callback|Listen for recording interruption end event. After receiving the interruptionBegin event, all recordings in the MiniApp will be paused, and the recording will be successful again only after receiving this event. |WeChat MiniApp, Baidu MiniApp, QQ MiniApp|
|onFrameRecorded|callback|已录制完指定帧大小的文件，会回调录音分片结果数据。如果设置了 frameSize ，则会回调此事件|App 暂不支持|
| onFrameRecorded| callback|The file with the specified frame size has been recorded, and the recording segment result data will be called back. If frameSize is set, this event will be called back | App does not support it yet |
|onError|callback|录音错误事件, 会回调错误信息|&nbsp;|
| onError| callback|recording error event, the error message will be called back|&nbsp;|

**start(options) 说明**
**start(options) description**

|属性|类型|必填|说明|平台差异说明|
|Attribute|Type|Required|Description|Platform Difference Description|
|:-|:-|:-|:-|:-|
|duration|Number|否|指定录音的时长，单位 ms ，如果传入了合法的 duration ，在到达指定的 duration 后会自动停止录音，最大值 600000（10 分钟）,默认值 60000（1 分钟）|App、小程序支持|
|duration|Number|No|Specify the duration of the recording, the unit is ms. If a valid duration is passed in, the recording will stop automatically after reaching the specified duration. The maximum value is 600000 (10 minutes), and the default value is 60000 (1 minute)| App, MiniApp support|
|sampleRate|Number|否|采样率，有效值 8000/16000/44100|App、小程序支持|
| sampleRate| Number|No|Sampling rate, effective value 8000/16000/44100| App, MiniApp support|
|numberOfChannels|Number|否|录音通道数，有效值 1/2|仅小程序支持|
| numberOfChannels| Number|No|Number of recording channels, valid value 1/2|Only supported by MiniApp|
|encodeBitRate|Number|否|编码码率，有效值见下表格|仅小程序支持|
| encodeBitRate| Number|No|Encode bit rate, see the table below for valid values|Only supported by MiniApp|
|format|String|否|音频格式，有效值 aac/mp3/wav/PCM。App默认值为mp3，小程序默认值aac|App、小程序支持|
| format| String|No| Audio format, valid values are aac/mp3/wav/PCM. The default value of the app is mp3, and the default value of the MiniApp is aac| App, MiniApp support|
|frameSize|String|否|指定帧大小，单位 KB。传入 frameSize 后，每录制指定帧大小的内容后，会回调录制的文件内容，不指定则不会回调。暂仅支持 mp3 格式。|App、百度小程序不支持|
| frameSize| String|No|Specify the frame size in KB. After frameSize is passed in, the recorded file content will be called back every time the content of the specified frame size is recorded, otherwise it will not be called back. Currently only supports mp3 format. | App, Baidu MiniApp not support |

其中，采样率和码率有一定要求，具体有效值如下：
Among them, the sampling rate and code rate have certain requirements, and the specific effective values are as follows:

|采样率|编码码率|
|Sampling rate|Coding rate|
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
**onStop(callback) callback result description**

|属性|类型|说明|
|Attribute|Type|Description|
|:-|:-|:-|
|tempFilePath|String|录音文件的临时路径|
| tempFilePath| String|The temporary path of the recording file|


**onFrameRecorded(callback) 回调结果说明**
**onFrameRecorded(callback) callback result description**

|属性|类型|说明|
|Attribute|Type|Description|
|:-|:-|:-|
|frameBuffer|ArrayBuffer|录音分片结果数据|
| frameBuffer| ArrayBuffer|recording fragmentation result data|
|isLastFrame|Boolean|当前帧是否正常录音结束前的最后一帧|
| isLastFrame| Boolean|Whether the current frame is the last frame before the end of normal recording|

**onError(callback) 回调结果说明**
**onError(callback) callback result description**

|属性|类型|说明|
|Attribute|Type|Description|
|:-|:-|:-|
|errMsg|String|错误信息|
| errMsg| String|error message|

**注意**
**Notice**

- 可以通过用户授权API来判断用户是否给应用授予麦克风的访问权限[https://uniapp.dcloud.io/api/other/authorize](https://uniapp.dcloud.io/api/other/authorize)
- You can use the user authorization API to determine whether the user has granted the application access to the microphone [https://uniapp.dcloud.io/api/other/authorize](https://uniapp.dcloud.io/api/other/authorize )

**示例**
**example**

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
