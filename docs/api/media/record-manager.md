### uni.getRecorderManager()
获取**全局唯一**的录音管理器 ``recorderManager``。
Get the **globally unique** recording manager `recorderManager`.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|x|√|√|√|x|√|

**recorderManager 对象的方法列表**
**Method list of recorderManager object**

|方法|参数|说明|平台差异说明|
| Method| Parameter| Instruction| Platform difference description|
|:-|:-|:-|:-|
|start|options|开始录音||
| start| options| Start recording| |
|pause||暂停录音|App 暂不支持|
| pause| | Pause recording| Not supported on App temporarily|
|resume||继续录音|App 暂不支持|
| resume| | Resume recording| Not supported on App temporarily|
|stop||停止录音||
| stop| | Stop recording| |
|onStart|callback|录音开始事件||
| onStart| callback| Recording start event| |
|onPause|callback|录音暂停事件||
| onPause| callback| Recording pause event| |
|onStop|callback|录音停止事件，会回调文件地址||
| onStop| callback| In terms of recording stop event, file address will be called back| |
|onFrameRecorded|callback|已录制完指定帧大小的文件，会回调录音分片结果数据。如果设置了 frameSize ，则会回调此事件|App 暂不支持|
| onFrameRecorded| callback| After recording the file with the specified frame size, the recording fragmentation result data will be called back. If frameSize is set, this event will be called back| Not supported on App temporarily|
|onError|callback|录音错误事件, 会回调错误信息|&nbsp;|
| onError| callback| In terms of recording error event, error messages will be called back|  |

**start(options) 说明**
**start(options) description**

|属性|类型|必填|说明|平台差异说明|
| Attribute| Type| Required| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|
|duration|Number|否|指定录音的时长，单位 ms ，如果传入了合法的 duration ，在到达指定的 duration 后会自动停止录音，最大值 600000（10 分钟）,默认值 60000（1 分钟）|App、小程序支持|
|duration|Number|No|Specify the duration of the recording, the unit is ms. If a valid duration is passed in, the recording will automatically stop when the specified duration is reached. The maximum value is 600000 (10 minutes), and the default value is 60000 (1 minute)| App, applet support|
|sampleRate|Number|否|采样率，有效值 8000/16000/44100|App、小程序支持|
|sampleRate|Number|No|Sampling rate, valid value 8000/16000/44100|App, applet support|
|numberOfChannels|Number|否|录音通道数，有效值 1/2|仅小程序支持|
|numberOfChannels|Number|No|Number of recording channels, valid value 1/2|Only supported by Mini Programs|
|encodeBitRate|Number|否|编码码率，有效值见下表格|仅小程序支持|
|encodeBitRate|Number|No|Encode BitRate, see the table below for valid values|Only supported by Mini Programs|
|format|String|否|音频格式，有效值 aac/mp3/wav/PCM。App默认值为mp3，小程序默认值aac|App、小程序支持|
|format|String|No|Audio format, valid values aac/mp3/wav/PCM. The default value of App is mp3, and the default value of applet is aac|App, applet support|
|frameSize|String|否|指定帧大小，单位 KB。传入 frameSize 后，每录制指定帧大小的内容后，会回调录制的文件内容，不指定则不会回调。暂仅支持 mp3 格式。|App、百度小程序不支持|
|frameSize|String|No|Specify the frame size in KB. After the frameSize is passed in, each time the content of the specified frame size is recorded, the recorded file content will be called back. If it is not specified, it will not be called back. Currently only mp3 format is supported. |App, Baidu applet does not support|

其中，采样率和码率有一定要求，具体有效值如下：
Among them, the sampling rate and code rate have certain requirements, and the specific effective values are as follows:

|采样率|编码码率|
|Sampling Rate|Encoding Rate|
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
| Attribute| Type| Instruction|
|:-|:-|:-|
|tempFilePath|String|录音文件的临时路径|
| tempFilePath| String| Temporary path of the recording file|


**onFrameRecorded(callback) 回调结果说明**
**onFrameRecorded(callback) callback result description**

|属性|类型|说明|
| Attribute| Type| Instruction|
|:-|:-|:-|
|frameBuffer|ArrayBuffer|录音分片结果数据|
| frameBuffer| ArrayBuffer| Recording fragmentation result data|
|isLastFrame|Boolean|当前帧是否正常录音结束前的最后一帧|
| isLastFrame| Boolean| Whether the current frame is the last frame before normal record ending|

**onError(callback) 回调结果说明**
**onError(callback) callback result description**

|属性|类型|说明|
| Attribute| Type| Instruction|
|:-|:-|:-|
|errMsg|String|错误信息|
| errMsg| String| Error message|

**注意**
**Notice**

- 可以通过用户授权API来判断用户是否给应用授予麦克风的访问权限[https://uniapp.dcloud.io/api/other/authorize](https://uniapp.dcloud.io/api/other/authorize)
- The user authorization API can be used to determine whether the user authorizes the application the to access to the microphone [https://uniapp.dcloud.io/api/other/authorize](https://uniapp.dcloud.io/api/other/authorize)

**示例**
**Example**

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
