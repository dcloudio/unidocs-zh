<md-translatedByGoogle />
#### live-player

实时音视频播放，也称直播拉流。
Live audio and video playback, also known as live-puller.

使用live-player 组件需注意：如果发布到小程序，需要先通过各家小程序的审核。指定类目的小程序才能使用（[微信小程序类目](https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html)、[百度小程序类目](https://smartprogram.baidu.com/docs/develop/component/media/#live-player/)），审核通过后在各家小程序管理后台自助开通该组件权限。
Note when using the live-player component: If you publish to Mini Programs, you need to pass the review of each Mini Program first. Only Mini Programs of the specified category can be used ([WeChat Mini Program Category](https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html), [Baidu Mini Program Category]( https://smartprogram.baidu.com/docs/develop/component/media/#live-player/)), after passing the review, you can automatically activate the component permissions in the management background of each applet.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序|飞书小程序|QQ小程序|快应用|360小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet|Feishu applet|QQ applet|Quick app|360 applet|JD applet|
|:-:		|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x(见下)|x	|√	|x	|√	|√(基础库版本>=1.52.0)|x	|√	|x |x |x |
|x (see below)|x |√ |x |√ |√(base library version>=1.52.0)|x |√ |x |x |x |

- App的实时音视频播放，不是使用 live-player，而是直接使用 video 组件。
- Live audio and video playback of App, not using live-player, but the video component directly.
- H5 下可用 video 播放符合 HTML5 规范的流媒体，rtmp 等非 HTML5 标准的流媒体格式，仅在部分支持 flash 的国内手机浏览器上可播放。在 pc 浏览器上，需要安装 flash 插件才能播放 rtmp 等格式。
- Under H5, streaming media conforming to HTML5 standard can be played by video, and non-HTML5 standard streaming media formats such as rtmp can only be played on some Chinese mobile browsers that support flash. On pc browsers, rtmp and other formats can be played only after installing the flash plug-in.


**属性说明**
**Attribute description**

|属性名|类型|默认值|说明|平台差异说明|
| Attribute name| Type| Defaults| Instruction| Platform difference description|
|:-:|:-:|:-:|:-:|:-:|
|id|String||live-player 属性的唯一标志符||
| id| String| | Unique identifier of the live-player attribute| |
|src|String||音视频地址。百度小程序支持 m3u8 格式；微信小程序支持 flv, rtmp 格式||
|src|String||Audio and video address. Baidu applet supports m3u8 format; WeChat applet supports flv, rtmp format||
|mode|String|live|live（直播），RTC（实时通话，该模式时延更低）|微信小程序|
|mode|String|live|live (live broadcast), RTC (real-time call, this mode has lower latency)|WeChat applet|
|autoplay|Boolean|false|自动播放||
| autoplay| Boolean| false| Autoplay| |
|muted|Boolean|false|是否静音||
| muted| Boolean| false| Mute or not| |
|orientation|String|vertical|画面方向，可选值有 vertical，horizontal||
| orientation| String| vertical| Screen orientation. Options include vertical and horizontal| |
|object-fit|String|contain|填充模式，可选值:contain、fillCrop||
| object-fit| String| contain| Fill mode. Options include contain and fillCrop| |
|background-mute|Boolean|false|进入后台时是否静音||
| background-mute| Boolean| false| Whether to mute when entering the background| |
|sound-mode|string|speaker|声音输出方式;可选值speaker、ear|微信小程序、QQ小程序1.5.0（仅支持speaker）|
|sound-mode|string|speaker|Sound output mode; optional values speaker, ear|WeChat applet, QQ applet 1.5.0 (only support speaker)|
|min-cache|Number|1|最小缓冲区，单位s||
| min-cache| Number| 1| Minimum buffer, in s| |
|max-cache|Number|3|最大缓冲区，单位s||
| max-cache| Number| 3| Maximum buffer, in s| |
|picture-in-picture-mode|string/Array|3|设置小窗模式： push, pop，空字符串或通过数组形式设置多种模式（如： ["push", "pop"]）|微信小程序（2.10.3）|
|picture-in-picture-mode|string/Array|3|Set the small window mode: push, pop, empty string or set multiple modes in the form of an array (eg: ["push", "pop"])|WeChat Mini Program (2.10.3) |
|@statechange|EventHandle||播放状态变化事件，detail = {code}||
| @statechange| EventHandle| | Play status change event, detail = {code}| |
|@netstatus|EventHandle||网络状态通知，detail = {info}|| 
| @netstatus| EventHandle| | Network status notification, detail = {info}| |
|@fullscreenchange|EventHandle||全屏变化事件，detail = {direction, fullScreen}。|&nbsp;|
| @fullscreenchange| EventHandle| | Full screen change event, detail = {direction, fullScreen}.|  |
|@audiovolumenotify|EventHandle||播放音量大小通知，detail = {}|微信小程序（2.10.0）|
|@audiovolumenotify|EventHandle||Play volume notification, detail = {}|WeChat applet (2.10.0)|
|@enterpictureinpicture|EventHandle||播放器进入小窗|微信小程序（2.11.0）|
|@enterpictureinpicture|EventHandle||Player enters the small window|WeChat applet (2.11.0)|
|@leavepictureinpicture|EventHandle||播放器退出小窗|2.11.0|
| @leavepictureinpicture| EventHandle| | Player exits small window| 2.11.0|


mode 的合法值
legal values for mode

|值|说明|
| Value| Instruction|
|:-|:-|
|live|直播|
|live|Live|
|RTC|实时通话，该模式时延更低|
|RTC|Real-time call, this mode has lower latency|


orientation 的合法值
Legal value of orientation

|值|说明|
| Value| Instruction|
|:-|:-|
|vertical|竖直|
| vertical| Vertical|
|horizontal|水平|
| horizontal| Horizontal|


object-fit 的合法值
Legal value of object-fit

|值|说明|
| Value| Instruction|
|:-|:-|
|contain|图像长边填满屏幕，短边区域会被填充⿊⾊|
| contain| The long side of the image fits the screen, and the short side area is filled with black|
|fillCrop|图像铺满屏幕，超出显示区域的部分将被截掉|
| fillCrop| The image overspreads the screen, and the part beyond the display area will be cut off|


sound-mode 的合法值
Legal values for sound-mode

|值|说明|
| Value| Instruction|
|:-|:-|
|speaker|扬声器|
|speaker|Speaker|
|ear|听筒|
|ear|earpiece|


**Tips**

* 百度小程序 iOS 端不支持设置 orientation 属性；
* Baidu applet iOS does not support setting the orientation attribute;
* 微信小程序已废弃 background-mute 属性，默认为进入后台静音；
* WeChat applet has abandoned the background-mute property, the default is to enter the background mute;
* live-player 默认宽度 300px、高度 225px；
* live-player has the default width of 300px and default height of 225px;.
* live-player 是原生组件，层级高于前端组件，请勿在 scroll-view、swiper、picker-view、movable-view 中使用
* Live-player is native component with a higher level than the front-end component. Please do not use it in scroll-view, swiper, picker-view or movable-view
* 小程序下覆盖live-player需要使用cover-view。[详见](/component/native-component)
* Cover-view is required to cover the live-player under the applet. [See details](/component/native-component)
* live-player 组件相关 JS API：[createLivePlayerContext](/api/media/live-player-context)
* JS API related to live-player components: [createLivePlayerContext](/api/media/live-player-context)
* 小程序平台使用live-player有审核限制，请注意参考各家文档。
* There are audit restrictions on the use of live-player on the Mini Program platform, please pay attention to refer to each document.
* App端使用直播，推荐nvue页面下用video组件，可避免复杂的层级问题和全屏覆盖问题。
* App side uses the live streaming. It is recommended to use video component under nvue page to avoid complicated hierarchy problem and full-screen coverage problem.


**状态码**
**Status code**

|代码|说明|
| Code| Instruction|
|---|---|
|2001|已经连接服务器|
| 2001| Already connected to the server|
|2002|已经连接服务器,开始拉流|
| 2002| The server has been connected, and started the live-puller|
|2003|网络接收到首个视频数据包(IDR)|
| 2003| The network receives the first video packet (IDR)|
|2004|视频播放开始|
| 2004| Video playback starts|
|2005|视频播放进度|
| 2005| Video playback progress|
|2006|视频播放结束|
| 2006| Video playback ends|
|2007|视频播放Loading|
| 2007| Play video Loading|
|2008|解码器启动|
| 2008| Decoder start-up|
|2009|视频分辨率改变|
| 2009| Video resolution change|
|-2301|网络断连，且经多次重连抢救无效，更多重试请自行重启播放|
|-2301| Network disconnection, and it is invalid after several reconnection. Please restart playback by yourself for more retries|
|-2302|获取加速拉流地址失败|
|-2302| Failed to get the accelerated live-puller address|
|2101|当前视频帧解码失败|
| 2101| Failed to decode the current video frame|
|2102|当前音频帧解码失败|
| 2102| Failed to decode the current audio frame|
|2103|网络断连, 已启动自动重连|
| 2103| Network disconnection, and automatic reconnection has been switched on|
|2104|网络来包不稳：可能是下行带宽不足，或由于主播端出流不均匀|
| 2104| Unstable incoming packets from the network: it may be due to insufficient downlink bandwidth or uneven outflow from the anchor side|
|2105|当前视频播放出现卡顿|
| 2105| The current video playback lags|
|2106|硬解启动失败，采用软解|
| 2106| Failed to start with hardware decoding, and soft solution is adopted|
|2107|当前视频帧不连续，可能丢帧|
| 2107| The current video frame is discontinuous, and the drop frame may occur|
|2108|当前流硬解第一个I帧失败，SDK自动切软解|
| 2108| Hardware decoding the first I frame of the current stream failed, and SDK automatically switches to software decoding|
|3001|RTMP -DNS解析失败|
| 3001| RTMP - DNS resolution failure|
|3002|RTMP服务器连接失败|
| 3002| RTMP server connection failure|
|3003|RTMP服务器握手失败|
| 3003| RTMP server handshake failure|
|3005|RTMP 读/写失败|
| 3005| RTMP read/write failure|

**网络状态数据**
**Network status data**

|键名|说明|
| Key name| Instruction|
|---|---|
|videoBitrate|当前视频编/码器输出的比特率，单位 kbps|
| videoBitrate| The bit rate of current video encoder output, in kbps|
|audioBitrate|当前音频编/码器输出的比特率，单位 kbps|
| audioBitrate| The bit rate of current audio encoder output, in kbps|
|videoFPS|当前视频帧率|
| videoFPS| Current video frame rate|
|videoGOP|当前视频 GOP,也就是每两个关键帧(I帧)间隔时长，单位 s|
| videoGOP| GOP of current video, namely the interval time of every two key frames (I frames), in s|
|netSpeed|当前的发送/接收速度|
| netSpeed| The current sending/receiving speed|
|netJitter|网络抖动情况，抖动越大，网络越不稳定|
| netJitter| Network jitter, the greater the jitter, the more unstable the network is|
|videoWidth|视频画面的宽度|
| videoWidth| Width of the video screen|
|videoHeight|视频画面的高度|
| videoHeight| Height of the video screen|

**示例**
**Example**

```html
<live-player
  src="https://domain/pull_stream"
  autoplay
  @statechange="statechange"
  @error="error"
  style="width: 300px; height: 225px;"
/>
```

```javascript
export default {
    methods:{
        statechange(e){
            console.log('live-player code:', e.detail.code)
        },
        error(e){
            console.error('live-player error:', e.detail.errMsg)
        }
    }
}
```
