### uni.getBackgroundAudioManager()
获取**全局唯一**的背景音频管理器 ``backgroundAudioManager``。
Get the **globally unique** background audio manager `backgroundAudioManager`.

背景音频，不是游戏的背景音乐，而是类似QQ音乐那样，App在后台时，仍然在播放音乐。如果你不需要在App切后台时继续播放，那么不应该使用本API，而应该使用普通音频API[uni.createInnerAudioContext](https://uniapp.dcloud.io/api/media/audio-context)。
Background audio is not the background music of games, but similar to QQ Music which still plays music in the background. If you don’t need to continue playing when the App is switched to the background, you should use the normal audio API [uni.createInnerAudioContext](https://uniapp.dcloud.io/api/media/audio-context) instead of this API.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序|飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|x|√|√|x|√|x|√|

**backgroundAudioManager 对象的属性列表**
**Attribute list for backgroundAudioManager object**

|属性|类型|说明|只读|
| Attribute| Type| Instruction| Read only|
|:-|:-|:-|:-|
|duration|Number|当前音频的长度（单位：s），只有在当前有合法的 src 时返回|是|
| duration| Number| Length of the current audio (in s), being returned when there is a legal src| Yes|
|currentTime|Number|当前音频的播放位置（单位：s），只有在当前有合法的 src 时返回|是|
| currentTime| Number| Playback location of the current audio (in s), being returned when there is a legal src| Yes|
|paused|Boolean|当前是是否暂停或停止状态，true 表示暂停或停止，false 表示正在播放|是|
| paused| Boolean| Whether in pause or stop state, true for pause or stop, and false for playing| Yes|
|src|String|音频的数据源，默认为空字符串，**当设置了新的 src 时，会自动开始播放，**目前支持的格式有 m4a, aac, mp3, wav|否|
| src| String| Audio source, which defaults to an empty string. \*\*The audio will be automatically played after setting a new SRC. \*\*Currently supported formats include m4a, aac, mp3, and wav.| No|
|startTime|Number|音频开始播放的位置（单位：s）|否|
| startTime| Number| The position where the audio starts to play (in s)| No|
|buffered|Number|音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲。|是|
| buffered| Number| Time point of audio buffering. Only ensure that the content from the current point to the target point has been buffered.| Yes|
|title|String|音频标题，用于做原生音频播放器音频标题。原生音频播放器中的分享功能，分享出去的卡片标题，也将使用该值。|否|
| title| String| Audio title, used as the audio title of native audio player. This value is also used as the shared card title under the share feature of the native audio player.| No|
|epname|String|专辑名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。|否|
| epname| String| Album name. This value is also used as the shared card profile under the share feature of the native audio player.| No|
|singer|String|歌手名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。|否|
| singer| String| Singer name. This value is also used as the shared card profile under the share feature of the native audio player.| No|
|coverImgUrl|String|封面图url，用于做原生音频播放器背景图。原生音频播放器中的分享功能，分享出去的卡片配图及背景也将使用该图。|否|
| coverImgUrl| String| Cover url, used as the background image of the native audio player. This image is also used as the shared card image and background under the share feature of the native audio player.| No|
|webUrl|String|页面链接，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。|否|
| webUrl| String| Page linkage. This value is also used as the shared card profile under the share feature of the native audio player.| No|
|protocol|String|音频协议。默认值为 'http'，设置 'hls' 可以支持播放 HLS 协议的直播音频，App平台暂不支持|否|
| protocol| String| Audio protocal. Default is 'http'. The direct broadcast audio with HLS protocol is supported after setting to 'hls'. However, it is temporarily not supported by the App platform.| No|
|playbackRate|Number|播放的倍率。可取值：0.5/0.8/1.0/1.25/1.5/2.0，默认值为1.0。(App 3.4.5+、微信基础库 2.11.0+、支付宝小程序、字节小程序 2.33.0+、快手小程序、百度小程序 3.120.2+)|否|

**backgroundAudioManager 对象的方法列表**
**Method list of backgroundAudioManager object**

|方法|参数|说明|
| Method| Parameter| Instruction|
|:-|:-|:-|
|play||播放|
| play| | Play|
|pause||暂停|
| pause| | Pause|
|stop||停止|
| stop| | Stop|
|seek|position|跳转到指定位置，单位 s|
| seek| position| Jump to the specified position, in s|
|onCanplay|callback|背景音频进入可以播放状态，但不保证后面可以流畅播放|
| onCanplay| callback| Background audio is ready for play, but the smooth play of the rest part cannot be guaranteed|
|onPlay|callback|背景音频播放事件|
| onPlay| callback| Background audio play event|
|onPause|callback|背景音频暂停事件|
| onPause| callback| Background audio pause event|
|onStop|callback|背景音频停止事件|
| onStop| callback| Background audio stop event|
|onEnded|callback|背景音频自然播放结束事件|
| onEnded| callback| Background audio natural play end event|
|onTimeUpdate|callback|背景音频播放进度更新事件|
| onTimeUpdate| callback| Background audio play progress update event|
|onPrev|callback|用户在系统音乐播放面板点击上一曲事件（iOS only）|
| onPrev| callback| The click on last track event on the system music play panel is triggered by the user (iOS only).|
|onNext|callback|用户在系统音乐播放面板点击下一曲事件（iOS only）|
| onNext| callback| The click on next track event on the system music play panel is triggered by the user (iOS only).|
|onError|callback|背景音频播放错误事件|
| onError| callback| Background audio play error event|
|onWaiting|callback|音频加载中事件，当音频因为数据不足，需要停下来加载时会触发|
| onWaiting| callback| Audio loading event, which will be triggered in case of insufficient audio data resulting in pause and loading|

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

**示例**
**Example**

```javascript
const bgAudioManager = uni.getBackgroundAudioManager();
bgAudioManager.title = '致爱丽丝';
bgAudioManager.singer = '暂无';
bgAudioManager.coverImgUrl = 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/7fbf26a0-4f4a-11eb-b680-7980c8a877b8.png';
bgAudioManager.src = 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3';
```


**注意**
**Note**
因为背景音频播放耗费手机电量，所以平台都有管控，需在manifest中填写申请。
As background audio playback consumes mobile phone power, so all platforms are controlled, and application needs to be filled in the manifest.
- ios App平台，背景播放需在manifest.json -> app-plus -> distribute -> ios 节点添加 ``"UIBackgroundModes":["audio"]`` 才能保证音乐可以后台播放（打包成ipa生效）
- On the ios App platform, you need to add `"UIBackgroundModes":["audio"]` to the manifest.json -> app-plus -> distribute -> ios node during background playback to ensure that the music can be played in the background (packaged into ipa to take effect)
- 小程序平台，需在manifest.json 对应的小程序节点下，填写"requiredBackgroundModes": ["audio"]。发布小程序时平台会审核
- Android App端默认不会在通知栏出现音量控制，如需此功能，需要在插件市场单独下载原生插件，[详见](https://ext.dcloud.net.cn/search?q=%E9%80%9A%E7%9F%A5%E6%A0%8F+%E9%9F%B3%E4%B9%90%E6%8E%A7%E5%88%B6)
- By default, the volume control will not appear in the notification bar on the Android App side. If you need this function, you need to download the native plug-in separately in the plug-in market. [See for details](https://ext.dcloud.net.cn/search?q=%E9%80%9A%E7%9F%A5%E6%A0%8F+%E9%9F%B3%E4%B9%90%E6%8E%A7%E5%88%B6)
