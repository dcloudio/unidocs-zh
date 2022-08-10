### uni.createInnerAudioContext()
创建并返回内部 audio 上下文 `innerAudioContext` 对象。
Create and return the internal audio context `innerAudioContext` object.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|1.23.4+|√|√|√|√|√|

**innerAudioContext 对象的属性列表**
**Attribute list of innerAudioContext object**

|属性|类型|说明|只读|平台差异说明|
| Attribute| Type| Instruction| Read only| Platform difference description|
|:-|:-|:-|:-|:-|
|src|String|音频的数据链接，用于直接播放。|否|微信小程序不支持本地路径|
|startTime|Number|开始播放的位置（单位：s），默认 0|否||
| startTime| Number| The start position of play (in s), 0 as default| No| |
|autoplay|Boolean|是否自动开始播放，默认 false|否|H5端部分浏览器不支持|
| autoplay| Boolean| Whether to start playing automatically, false as default| No| Not supported by some browsers on H5 side|
|loop|Boolean|是否循环播放，默认 false|否||
| loop| Boolean| Whether to play in loop, false as default| No| |
|obeyMuteSwitch|Boolean|是否遵循系统静音开关，当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音，默认值 true|否|微信小程序、百度小程序、字节跳动小程序、飞书小程序、京东小程序、快手小程序（仅在 iOS 上生效）|
|duration|Number|当前音频的长度（单位：s），只有在当前有合法的 src 时返回，需要在onCanplay中获取|是||
| duration| Number| Length of the current audio (in s), being returned when there is a legal src and obtained in onCanplay.| Yes| |
|currentTime|Number|当前音频的播放位置（单位：s），只有在当前有合法的 src 时返回，时间不取整，保留小数点后 6 位|是||
| currentTime| Number| The playback position of current audio (in s). being returned when there is a legal src. The time will not be rounded but keep six decimals| Yes| |
|paused|Boolean|当前是是否暂停或停止状态，true 表示暂停或停止，false 表示正在播放|是||
| paused| Boolean| Whether in pause or stop state, true for pause or stop, and false for playing| Yes| |
|buffered|Number|音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲。|是||
| buffered| Number| Time point of audio buffering. Only ensure that the content from the current point to the target point has been buffered.| Yes| |
|volume|Number|音量。范围 0~1。|否|&nbsp;|
| volume| Number| volume. Range from 0-1.| No|  |
|sessionCategory|String|设置音频播放模式，可取值："ambient" - 不中止其他声音播放，不能后台播放，静音后无声音； "soloAmbient" - 中止其他声音播放，不能后台播放，静音后无声音； "playback" - 中止其他声音，可以后台播放，静音后有声音。 默认值为"playback"。|否|App 3.3.7+|
|playbackRate|Number|播放的倍率。可取值：0.5/0.8/1.0/1.25/1.5/2.0，默认值为1.0|否|App  3.4.5+（Android 需要 6 及以上版本）、微信小程序 2.11.0、支付宝小程序、字节小程序 2.33.0+、快手小程序、百度小程序 3.120.2+|



**innerAudioContext 对象的方法列表**
**Method list of innerAudioContext object**

|方法|参数|说明|平台差异说明|
|:-|:-|:-|:-|
|play||播放（H5端部分浏览器需在用户交互时进行）||
|pause||暂停||
|stop||停止||
|seek|position|跳转到指定位置，单位 s||
|destroy||销毁当前实例||
|onCanplay|callback|音频进入可以播放状态，但不保证后面可以流畅播放||
|onPlay|callback|音频播放事件||
|onPause|callback|音频暂停事件||
|onStop|callback|音频停止事件||
|onEnded|callback|音频自然播放结束事件||
|onTimeUpdate|callback|音频播放进度更新事件||
|onError|callback|音频播放错误事件||
|onWaiting|callback|音频加载中事件，当音频因为数据不足，需要停下来加载时会触发||
|onSeeking|callback|音频进行 seek 操作事件||
|onSeeked|callback|音频完成 seek 操作事件||
|offCanplay|callback|取消监听 onCanplay 事件|微信小程序1.9.0+，支付宝小程序，字节小程序、百度小程序|
|offPlay|callback|取消监听 onPlay 事件|微信小程序1.9.0+，支付宝小程序，字节小程序、百度小程序|
|offPause|callback|取消监听 onPause 事件|微信小程序1.9.0+，支付宝小程序，字节小程序、百度小程序|
|offStop|callback|取消监听 onStop 事件|微信小程序1.9.0+，支付宝小程序，字节小程序、百度小程序|
|offEnded|callback|取消监听 onEnded 事件|微信小程序1.9.0+，支付宝小程序，字节小程序、百度小程序|
|offTimeUpdate|callback|取消监听 onTimeUpdate 事件|微信小程序1.9.0+，支付宝小程序，字节小程序、百度小程序|
|offError|callback|取消监听 onError 事件|微信小程序1.9.0+，支付宝小程序，字节小程序、百度小程序|
|offWaiting|callback|取消监听 onWaiting 事件|微信小程序1.9.0+，支付宝小程序，字节小程序、百度小程序|
|offSeeking|callback|取消监听 onSeeking 事件|微信小程序1.9.0+，支付宝小程序，字节小程序、百度小程序|
|offSeeked|callback|取消监听 onSeeked 事件|微信小程序1.9.0+，支付宝小程序，字节小程序、百度小程序|

errCode 说明
Description of errCode

|errCode|说明|
| errCode| Instruction|
|:-|:-|
|10001|系统错误|
| 10001| System error|
|10002|网络错误|
| 10002| Network error|
|10003|文件错误|
| 10003| File error|
|10004|格式错误|
| 10004| Format error|
|-1|未知错误|
|-1| Unknown error|


**支持格式**
**Supported format**

|格式|iOS|Android|
| Format| iOS| Android|
|:-|:-|:-|
|flac	|x|√|
|m4a	|√|√|
|ogg	|x|√|
|ape	|x|√|
|amr	|x|√|
|wma	|x|√|
|wav	|√|√|
|mp3	|√|√|
|mp4	|x|√|
|aac	|√|√|
|aiff	|√|x|
|caf	|√|x|

**示例**
**Example**

```javascript
const innerAudioContext = uni.createInnerAudioContext();
innerAudioContext.autoplay = true;
innerAudioContext.src = 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3';
innerAudioContext.onPlay(() => {
  console.log('开始播放');
});
innerAudioContext.onError((res) => {
  console.log(res.errMsg);
  console.log(res.errCode);
});
```

**tips**

- 如需音频的倍速播放，可通过video的倍速播放替代实现。插件市场有封装好的插件[音频倍速播放](https://ext.dcloud.net.cn/search?q=%E9%9F%B3%E9%A2%91%E5%80%8D%E9%80%9F%E6%92%AD%E6%94%BE)
- The audio play at double speed can be implemented via video play at double speed instead. There is an encapsulated plug-in [Audio double-speed playback](https://ext.dcloud.net.cn/search?q=%E9%9F%B3%E9%A2%91%E5%80%8D%E9%80%9F%E6%92%AD%E6%94%BE) in the plug-in market
- 如果需要带ui的音频播放器样式，可以在插件市场搜索相关[插件](https://ext.dcloud.net.cn/search?q=audio)
- If you need an audio player style with ui, you can search for related [Plug-ins](https://ext.dcloud.net.cn/search?q=audio) in the plug-in market
- `Android 4.1` 及更高版本对 `PCM/WAVE` 支持范围是 `8` 位和 `16` 位线性 PCM（比特率最高可达到硬件上限）。以 8000、16000 和 44100 Hz 录制原始 PCM 所需的采样率。
- `Android 4.1` and later versions support `PCM/WAVE` in the range of `8`-bit and `16`-bit linear PCM (bit rate up to hardware upper limit). The sampling rates required to record the original PCM include 8000, 16000 and 44100 Hz.
