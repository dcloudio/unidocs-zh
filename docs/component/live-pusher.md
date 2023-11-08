#### live-pusher

实时音视频录制，也称直播推流。
Live audio and video recording, also known as live-pusher.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√(nvue)、vue 3.4.1+|x|√|x|x|x|x|x|x|x|x|

app平台的 3.4.1+ vue页面已支持 live-pusher，3.4.1以前的版本
The 3.4.1+ vue page of the app platform already supports live-pusher, versions before 3.4.1
需编写条件编译代码，使用 `plus.video.LivePusher`，[业务指南](https://ask.dcloud.net.cn/article/13416)、[规范文档](http://www.html5plus.org/doc/zh_cn/video.html#plus.video.LivePusher)。还是推荐直接使用nvue里的`live-pusher`组件。
Need to write conditional compilation code, use `plus.video.LivePusher`, [Business Guide](https://ask.dcloud.net.cn/article/13416), [Specification Document](http://www.html5plus. org/doc/en_us/video.html#plus.video.LivePusher). It is still recommended to use the `live-pusher` component in nvue directly.

app开发，推荐使用nvue做直播，比使用vue的优势有：
For app development, it is recommended to use nvue for live streaming. Compared with vue, it has the following advantages:
1. nvue也可一套代码编译多端。
1. nvue can also compile multiple sides with a set of codes.
2. nvue的cover-view比vue的cover-view更强大，在视频上绘制元素更容易。如果只考虑App端的话，不用cover-view，任意组件都可以覆盖live-pusher组件，因为nvue没有层级问题。
2. cover-view of nvue is more powerful than that of vue, making it easier to draw elements on video. If only the App side is considered, any component can override the live-pusher component without using cover-view, for there is no hierarchy problem.
3. 若需要视频内嵌在swiper里上下滑动（类抖音、映客首页模式），App端只有nvue才能实现
3. If you need the video embedded in the swiper to slide up and down (such as the home page modes like Tik Tok and Inke), only nvue can achieve on the app side
当然nvue相比vue的坏处是css写法受限，如果只开发微信小程序，不考虑App，那么使用vue页面也是一样的。
Of course, the disadvantage of nvue compared to vue is that CSS is limited in writing. If you only develop WeChat applets and do not consider App, then the same is true for using vue pages.


**参数说明**
**Parameter Description**

设置live-pusher组件的推流地址，推流视频模式等。
Set the live-pusher address and live-pusher video mode of the live-pusher component.

属性|类型 |默认值|必填|说明|平台差异说明|
Property|Type|Default|Required|Description|Platform Difference Description|
:--|:--|:--|:--|:--|:--|
url|string| |是|推流地址，支持RTMP协议。|
url|string| |yes|The push stream address, which supports RTMP protocol. |
mode |string|SD|否|推流视频模式，可取值：SD（标清）, HD（高清）, FHD（超清）。|
mode |string|SD|No | Push video mode, available values: SD (standard definition), HD (high definition), FHD (ultra-definition). |
aspect |string|3:2|否|视频宽高比例|
aspect |string|3:2|No|Video aspect ratio|
muted|Boolean|false|否|是否静音。|
muted|Boolean|false|no| Whether to mute. |
enable-camera|Boolean|true|否|开启摄像头。|
enable-camera|Boolean|true|no|Enable the camera. |
auto-focus|Boolean|true|否|自动聚集。|
auto-focus|Boolean|true|No|Auto-focus. |
beauty|Number|0|否|美颜，取值范围 0-9（iOS取值范围为1） ，0 表示关闭。|
beauty|Number|0|No|Beauty, the value range is 0-9 (iOS value range is 1), 0 means off. |
whiteness|Number|0|否|美白，取值范围 0-9（iOS取值范围为1） ，0 表示关闭。|
whiteness|Number|0|No|Whitening, the value range is 0-9 (iOS value range is 1), 0 means off. |
orientation|String|"vertical"|否|画面方向|
orientation|String|"vertical"|no|screen orientation|
min-bitrate|Number|200|否|最小码率。|
min-bitrate|Number|200|No|Minimum bitrate. |
max-bitrate|Number|1000|否|最大码率。|
max-bitrate|Number|1000|No|Maximum bitrate. |
audio-quality|string|high|否|高音质(48KHz)或低音质(16KHz)，值为high, low|微信小程序1.7.0
audio-quality|string|high|No|High sound quality (48KHz) or low sound quality (16KHz), the value is high, low|WeChat applet 1.7.0
waiting-image|string||否|进入后台时推流的等待画面|微信小程序1.7.0
waiting-image|string||No|Waiting image for streaming when entering the background|WeChat applet 1.7.0
waiting-image-hash|string||否|等待画面资源的MD5值|微信小程序1.7.0
waiting-image-hash|string||No|Waiting for the MD5 value of the image resource|WeChat applet 1.7.0
zoom|boolean|false|否|调整焦距|微信小程序2.1.0
zoom|boolean|false|No|Adjust focus|WeChat applet 2.1.0
device-position|string|front|否|前置或后置，值为front, back|微信小程序2.3.0
device-position|string|front|No|Front or rear, the value is front, back|WeChat applet 2.3.0
background-mute|boolean|false|否|进入后台时是否静音|微信小程序1.7.0
background-mute|boolean|false|No|Mute when entering the background|WeChat applet 1.7.0
remote-mirror|boolean|false|否|设置推流画面是否镜像，产生的效果在 live-player 反应到|微信小程序2.10.0
remote-mirror|boolean|false|No|Set whether the push screen is mirrored, the effect will be reflected in the live-player|WeChat applet 2.10.0
local-mirror|string|auto|否|控制本地预览画面是否镜像|微信小程序2.10.0
local-mirror|string|auto|No|Control whether the local preview screen is mirrored|WeChat applet 2.10.0
audio-reverb-type|number|0|否|音频混响类型|微信小程序2.10.0
audio-reverb-type|number|0|No|Audio reverb type|WeChat applet 2.10.0
enable-mic|boolean|true|否|开启或关闭麦克风|微信小程序2.10.0
enable-mic|boolean|true|no|Enable or disable the microphone|WeChat applet 2.10.0
enable-agc|boolean|false|否|是否开启音频自动增益|微信小程序2.10.0
enable-agc|boolean|false|No|Whether to enable automatic audio gain|WeChat applet 2.10.0
enable-ans|boolean|false|否|是否开启音频噪声抑制|微信小程序2.10.0
enable-ans|boolean|false|No|Enable audio noise suppression|WeChat applet 2.10.0
audio-volume-type|string|voicecall|否|音量类型|微信小程序2.10.0
audio-volume-type|string|voicecall|No|Volume Type|WeChat Mini Program 2.10.0
@statechange|EventHandle|||状态变化事件，detail = {code}|
@statechange|EventHandle||| state change event, detail = {code}|
@netstatus|EventHandle|||网络状态通知，detail = {info}|
@netstatus|EventHandle|||Network status notification, detail = {info}|
@error|EventHandle|||渲染错误事件，detail = {errMsg, errCode}|
@error|EventHandle|||Render error event, detail = {errMsg, errCode}|
@bgmstart|EventHandle|||背景音开始播放时触发|微信小程序2.4.0
@bgmstart|EventHandle|||Triggered when the background sound starts playing|WeChat applet 2.4.0
@bgmprogress|EventHandle|||背景音进度变化时触发，detail = {progress, duration}|微信小程序2.4.0
@bgmprogress|EventHandle|||Triggered when the background sound progress changes, detail = {progress, duration}|WeChat applet 2.4.0
@bgmcomplete|EventHandle|||背景音播放完成时触发|微信小程序2.4.0
@bgmcomplete|EventHandle|||Triggered when the background sound playback is complete|WeChat applet 2.4.0


#### orientation 的合法值
#### Legal value of orientation

|值|说明|
| Value| Instruction|
|:-|:-|
|vertical|竖直|
| vertical| Vertical|
|horizontal|水平|
| horizontal| Horizontal|


#### local-mirror 的合法值
#### Legal values for local-mirror

|值|说明|
| Value| Instruction|
|:-|:-|
|auto|前置摄像头镜像，后置摄像头不镜像|
|auto|Front camera mirroring, rear camera not mirroring|
|enable|前后置摄像头均镜像|
|enable|Mirroring both front and rear cameras|
|disable|前后置摄像头均不镜像|
|disable|The front and rear cameras are not mirrored|


#### audio-reverb-type 的合法值
#### Legal values for audio-reverb-type

|值|说明|
| Value| Instruction|
|:-|:-|
|0|关闭|
|1|KTV|
|2|小房间|
|2|Small Room|
|3|大会堂|
|3|Great Hall|
|4|低沉|
|4|Deep|
|5|洪亮|
|5|Resonant|
|6|金属声|
|6|Metal Sound|
|7|磁性|
|7|Magnetic|


#### audio-volume-type 的合法值
#### Legal values for audio-volume-type

|值|说明|
| Value| Instruction|
|:-|:-|
|media|媒体音量|
|media|Media Volume|
|voicecall|通话音量|
|voicecall|Call Volume|

#### 网络状态数据（info）安卓
#### Network status data (info) Android

键名|说明
keyname|description
:--|:--|
videoBitrate | 当前视频编/码器输出的比特率，单位 kbps
videoBitrate | The current output bit rate of the video encoder/encoder, in kbps
audioBitrate | 当前音频编/码器输出的比特率，单位 kbps
audioBitrate | The current output bit rate of the audio encoder/encoder, in kbps
videoFPS | 当前视频帧率
videoFPS | current video frame rate
videoGOP | 当前视频 GOP,也就是每两个关键帧(I帧)间隔时长，单位 s
videoGOP | The current video GOP, that is, the interval between every two key frames (I frames), in s
netSpeed | 当前的发送/接收速度
netSpeed | current send/receive speed
netJitter | 网络抖动情况，抖动越大，网络越不稳定
netJitter | Network jitter situation, the greater the jitter, the more unstable the network is
videoWidth | 视频画面的宽度
videoWidth | The width of the video screen
videoHeight | 视频画面的高度
videoHeight | The height of the video screen

#### 网络状态数据（info）iOS
#### Network status data (info) iOS

参数|类型 |说明
parameter | type | description
:--|:--|:--|
code|Number|  code码
code|Number| code
message|string| 具体的网络状态信息
message|string| Specific network status information

#### 事件
#### Event

#### statechange
> 状态变化事件
> State change event

#####  返回参数（detail）的详细说明
##### Detailed description of return parameter (detail)
参数|类型|说明
parameter|type|description
:--|:--|:--|
code|Number|
message|string|


#### netstatus
> 网络状态通知事件
> Network status notification event

#####  安卓 返回参数（detail）的详细说明
##### For Android, the detailed description of return parameter (detail)
键名|说明
keyname|description
:--|:--|
videoBitrate | 当前视频编/码器输出的比特率，单位 kbps
videoBitrate | The current output bit rate of the video encoder/encoder, in kbps
audioBitrate | 当前音频编/码器输出的比特率，单位 kbps
audioBitrate | The current output bit rate of the audio encoder/encoder, in kbps
videoFPS | 当前视频帧率
videoFPS | current video frame rate
videoGOP | 当前视频 GOP,也就是每两个关键帧(I帧)间隔时长，单位 s
videoGOP | The current video GOP, that is, the interval between every two key frames (I frames), in s
netSpeed | 当前的发送/接收速度
netSpeed | current send/receive speed
netJitter | 网络抖动情况，抖动越大，网络越不稳定
netJitter | Network jitter situation, the greater the jitter, the more unstable the network is
videoWidth | 视频画面的宽度
videoWidth | The width of the video screen
videoHeight | 视频画面的高度
videoHeight | The height of the video screen

##### iOS 返回参数（detail）的详细说明
##### For iOS, the detailed description of return parameter (detail)
参数|类型 |说明
parameter | type | description
:--|:--|:--|
code|Number| code码
code|Number| code
message|string| 具体的网络状态信息
message|string| Specific network status information


#### error
> 渲染错误事件
> Render error event

#####  返回参数（detail）的详细说明
##### Detailed description of return parameter (detail)
参数|类型 |说明
parameter | type | description
:--|:--|:--|
errCode|Number|
errMsg|string|



```html
<template>
    <view>
        <live-pusher id='livePusher' ref="livePusher" class="livePusher" url=""
        mode="SD" :muted="true" :enable-camera="true" :auto-focus="true" :beauty="1" whiteness="2"
        aspect="9:16" @statechange="statechange" @netstatus="netstatus" @error = "error"
        ></live-pusher>
        <button class="btn" @click="start">开始推流</button>
        <button class="btn" @click="pause">暂停推流</button>
        <button class="btn" @click="resume">resume</button>
        <button class="btn" @click="stop">停止推流</button>
        <button class="btn" @click="snapshot">快照</button>
        <button class="btn" @click="startPreview">开启摄像头预览</button>
        <button class="btn" @click="stopPreview">关闭摄像头预览</button>
        <button class="btn" @click="switchCamera">切换摄像头</button>
    </view>
</template>
```

```javascript
<script>
    export default {
        data() {
			return {}
        },
        onReady() {
            // 注意：需要在onReady中 或 onLoad 延时
            // Note: Need to delay in onReady or onLoad
            this.context = uni.createLivePusherContext("livePusher", this);
        },
        methods: {
            statechange(e) {
                console.log("statechange:" + JSON.stringify(e));
            },
            netstatus(e) {
                console.log("netstatus:" + JSON.stringify(e));
            },
            error(e) {
                console.log("error:" + JSON.stringify(e));
            },
            start: function() {
                this.context.start({
                    success: (a) => {
                        console.log("livePusher.start:" + JSON.stringify(a));
                    }
                });
            },
            close: function() {
                this.context.close({
                    success: (a) => {
                        console.log("livePusher.close:" + JSON.stringify(a));
                    }
                });
            },
            snapshot: function() {
                this.context.snapshot({
                    success: (e) => {
                        console.log(JSON.stringify(e));
                    }
                });
            },
            resume: function() {
                this.context.resume({
                    success: (a) => {
                        console.log("livePusher.resume:" + JSON.stringify(a));
                    }
                });
            },
            pause: function() {
                this.context.pause({
                    success: (a) => {
                        console.log("livePusher.pause:" + JSON.stringify(a));
                    }
                });
            },
            stop: function() {
                this.context.stop({
                    success: (a) => {
                        console.log(JSON.stringify(a));
                    }
                });
            },
            switchCamera: function() {
                this.context.switchCamera({
                    success: (a) => {
                        console.log("livePusher.switchCamera:" + JSON.stringify(a));
                    }
                });
            },
            startPreview: function() {
                this.context.startPreview({
                    success: (a) => {
                        console.log("livePusher.startPreview:" + JSON.stringify(a));
                    }
                });
            },
            stopPreview: function() {
                this.context.stopPreview({
                    success: (a) => {
                        console.log("livePusher.stopPreview:" + JSON.stringify(a));
                    }
                });
            }
        }
    }
</script>
```

相关api：[uni.createLivePusherContext](/api/media/live-pusher-context?id=createLivePusherContext)
Related api: [uni.createLivePusherContext](/api/media/live-pusher-context?id=createLivePusherContext)



**注意**
**Notice**

* live-pusher 是原生组件，在小程序端层级高于前端组件，需使用cover-view覆盖。在低版本微信中，live-pusher无法内嵌于 scroll-view、swiper、picker-view、movable-view 中。在App端的nvue文件中，live-pusher没有这类限制。
* live-pusher is a native component, which is higher than the front-end component on the applet side and needs to be covered with cover-view. In lower versions of WeChat, live-pusher cannot be embedded in scroll-view, swiper, picker-view, and movable-view. In the nvue file on the App side, live-pusher has no such restrictions.
* App平台：使用 `<live-pusher/>` 组件，打包 App 时必须勾选 manifest.json->App 模块权限配置->LivePusher(直播推流) 模块。
* App platform: When using the `<live-pusher/>` component, you must check manifest.json->App module permission configuration->LivePusher module when packaging the App.
