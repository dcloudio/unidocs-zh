#### video
视频播放组件。
Video playback component.

**属性说明**
**Attribute Description**

|属性名|类型|默认值|说明|平台差异说明|
|Property Name|Type|Default Value|Description|Platform Difference Description|
|:-|:-|:-|:-|:-|
|src|String||要播放视频的资源地址||
| src| String||The resource address of the video to be played||
|autoplay|Boolean|false|是否自动播放||
| autoplay| Boolean| false|whether to play automatically||
|loop|Boolean|false|是否循环播放||
| loop| Boolean| false|Whether to play in a loop||
|muted|Boolean|false|是否静音播放|字节跳动小程序与飞书小程序不支持|
| muted| Boolean| false|Whether to mute playback|ByteDance and Feishu MiniApp MiniApp not support|
|initial-time|Number||指定视频初始播放位置，单位为秒（s）。|字节跳动小程序与飞书小程序不支持|
| initial-time| Number|| specifies the initial playback position of the video, in seconds (s). |ByteDance MiniApp and Feishu MiniApp are not supported|
|duration|Number||指定视频时长，单位为秒（s）。|字节跳动小程序、飞书小程序、快手小程序、京东小程序不支持|
|duration|Number||Specify the video duration in seconds (s). |ByteDance MiniApp Program, Feishu Mini MiniApp, Kuaishou MiniApp, and JD MiniApp are not supported|
|controls|Boolean|true|是否显示默认播放控件（播放/暂停按钮、播放进度、时间）|快手小程序不支持|
| controls| Boolean| true|Whether to display the default playback controls (play/pause button, playback progress, time)|The Kuaishou MiniApp not support|
|danmu-list|Object Array||弹幕列表|字节跳动小程序、飞书小程序、快手小程序、京东小程序不支持|
| _ _ _ _
|danmu-btn|Boolean|false|是否显示弹幕按钮，只在初始化时有效，不能动态变更|字节跳动小程序、飞书小程序、快手小程序、京东小程序不支持|
| danmu-btn| Boolean| false|Whether to display the barrage button, it is only valid during MiniApp and cannot be changed dynamically|Not supported by MiniApp, Feishu, MiniApp and Kuaishou |
|enable-danmu|Boolean|false|是否展示弹幕，只在初始化时有效，不能动态变更|字节跳动小程序、飞书小程序、快手小程序、京东小程序不支持|
| enable-danmu| Boolean| false|Whether to display bullet chatting, it is only valid during MiniApp and cannot be changed dynamically|Not supported by MiniApp, Feishu, MiniApp and Kuaishou |
|page-gesture|Boolean|false|在非全屏模式下，是否开启亮度与音量调节手势|微信小程序、H5|
| page-gesture| Boolean| false|Whether to enable brightness and volume adjustment gestures in non-full-screen mode|WeChat MiniApp, H5|
|direction|Number||设置全屏时视频的方向，不指定则根据宽高比自动判断。有效值为 0（正常竖向）, 90（屏幕逆时针90度）, -90（屏幕顺时针90度）|H5、字节跳动小程序、飞书小程序、快手小程序、京东小程序不支持|
| direction| Number||Set the direction of the video in full screen mode, if not specified, it will be determined automatically according to the aspect ratio. Valid values are 0 (normal vertical orientation), 90 (screen 90 degrees Kuaishou ), MiniApp (screen 90 degrees MiniApp ) | Support|
|show-progress|Boolean|true|若不设置，宽度大于240时才会显示|字节跳动小程序、飞书小程序、快手小程序、京东小程序不支持|
| show-progress| Boolean| true|If not set, it will only be displayed when the width is greater than 240|The ByteDance MiniApp, Feishu MiniApp, Kuaishou MiniApp, and JD MiniApp are not supported|
|show-fullscreen-btn|Boolean|true|是否显示全屏按钮|京东小程序不支持|
| show-fullscreen-btn| Boolean| true|Whether to display the full screen button|JD MiniApp not support|
|show-play-btn|Boolean|true|是否显示视频底部控制栏的播放按钮|京东小程序不支持|
| show-play-btn| Boolean| true|Whether to display the play button in the control bar at the bottom of the video|JD MiniApp not support|
|show-center-play-btn|Boolean|true|是否显示视频中间的播放按钮|字节跳动小程序、京东小程序不支持|
| show-center-play-btn| Boolean| true|Whether to display the play button in the middle of the video|ByteDance MiniApp and Jingdong MiniApp do not support|
|show-loading|Boolean|true|是否显示loading控件|仅app 2.8.12+|
| show-loading| Boolean| true|whether to show the loading control|only app 2.8.12+|
|enable-progress-gesture|Boolean|true|是否开启控制进度的手势|字节跳动小程序、京东小程序不支持|
| enable-progress-gesture| Boolean| true|Whether to enable the gesture to control the progress|ByteDance MiniApp and Jingdong MiniApp do not support|
|object-fit|String|contain|当视频大小与 video 容器大小不一致时，视频的表现形式。contain：包含，fill：填充，cover：覆盖|App、微信小程序、字节跳动小程序、飞书小程序、H5、京东小程序|
| object-fit| String| contain|When the size of the video is different from the size of the video container, the display form of the video. contain: contain, fill: fill, cover: cover | App, WeChat MiniApp, ByteDance MiniApp, Feishu MiniApp, H5, Jingdong MiniApp|
|poster|String||视频封面的图片网络资源地址，如果 controls 属性值为 false 则设置 poster 无效||
| poster| String||The network resource address of the image of the video cover, if the value of the controls attribute is false, setting the poster is invalid||
|show-mute-btn|Boolean|false|是否显示静音按钮|微信小程序、App-nvue|
| show-mute-btn| Boolean| false|Whether to display the mute button|WeChat MiniApp, App-nvue|
|title|String||视频的标题，全屏时在顶部展示|微信小程序、App（3.6.7+）|
| title| String||The title of the video, displayed at the top when it is full screen|WeChat MiniApp, App (3.6.7+)|
|play-btn-position|String|bottom|播放按钮的位置|微信小程序、字节跳动小程序、飞书小程序|
| play-btn-position| String| bottom|The position of the play button|WeChat MiniApp, ByteDance MiniApp, Feishu MiniApp|
|mobilenet-hint-type|number|1|移动网络提醒样式：0是不提醒，1是提醒，默认值为1|京东小程序|
| mobilenet-hint-type| number| 1|Mobile network reminder style: 0 is no reminder, 1 is reminder, the default value is 1|Jingdong MiniApp|
|enable-play-gesture|Boolean|false|是否开启播放手势，即双击切换播放/暂停|微信小程序、快手小程序|
| enable-play-gesture| Boolean| false|Whether to enable the play gesture, that is, double-click to switch play/pause|WeChat MiniApp, Kuaishou MiniApp|
|auto-pause-if-navigate|Boolean|true|当跳转到其它小程序页面时，是否自动暂停本页面的视频|微信小程序|
| auto-pause-if-navigate| Boolean| true|When jumping to other MiniApp pages, whether to automatically pause the video of this page|WeChat MiniApp|
|auto-pause-if-open-native|Boolean|true|当跳转到其它微信原生页面时，是否自动暂停本页面的视频|微信小程序|
| auto-pause-if-open-native| Boolean| true|When jumping to other WeChat native pages, whether to automatically pause the video of this page|WeChat MiniApp|
|vslide-gesture|Boolean|false|在非全屏模式下，是否开启亮度与音量调节手势（同 page-gesture）|微信小程序、App（3.4.0+）、快手小程序|
| vslide-gesture| Boolean| false|Whether to enable brightness and volume adjustment gestures in non-full-screen mode (same as page-gesture)|WeChat MiniApp, App (3.4.0+), Kuaishou MiniApp|
|vslide-gesture-in-fullscreen|Boolean|true|在全屏模式下，是否开启亮度与音量调节手势|微信小程序、App（3.4.0+）、快手小程序|
| vslide-gesture-in-fullscreen| Boolean| true|Whether to enable brightness and volume adjustment gestures in full screen mode|WeChat MiniApp, App (3.4.0+), Kuaishou MiniApp|
|ad-unit-id|String||视频前贴广告单元ID，更多详情可参考开放能力[视频前贴广告](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/ad/video-patch-ad.html)|微信小程序|
| ad-unit-id| String||Video pre-roll ad unit ID, for more details, please refer to Open Capabilities[Video Pre-roll Ad](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/ad/video-patch-ad.html)|WeChat MiniApp|
|poster-for-crawler|String||用于给搜索等场景作为视频封面展示，建议使用无播放 icon 的视频封面图，只支持网络地址|微信小程序|
| poster-for-crawler| String||It is used to display the video cover for scenes such as search. It is recommended to use the video cover image without playback icon, only supports the network address|WeChat MiniApp|
|codec|String|hardware|解码器选择，hardware：硬解码（硬解码可以增加解码算力，提高视频清晰度。少部分老旧硬件可能存在兼容性问题）；software：ffmpeg 软解码；|App-Android 3.1.0+|
| codec| String| hardware|Decoder selection, hardware: hard decoding (hard decoding can increase decoding power and improve video clarity. A small number of old hardware may have compatibility issues); software: ffmpeg soft decoding; | App- Android 3.1.0+|
|http-cache|Boolean|true|是否对 http、https 视频源开启本地缓存。缓存策略:开启了此开关的视频源，在视频播放时会在本地保存缓存文件，如果本地缓存池已超过100M，在进行缓存前会清空之前的缓存（不适用于m3u8等流媒体协议）|App-Android 3.1.0+|
| http-cache| Boolean| true|Whether to enable local cache for http and https video sources. Caching policy: The video source with this switch enabled will save the cache file locally when the video is playing. If the local cache pool exceeds 100M, the previous cache will be cleared before caching (not applicable to streaming media protocols such as m3u8) | App-Android 3.1.0+|
|play-strategy|Number|0| 播放策略，0：普通模式，适合绝大部分视频播放场景；1：平滑播放模式（降级），增加缓冲区大小，采用open sl解码音频，避免音视频脱轨的问题，可能会降低首屏展现速度、视频帧率，出现开屏音频延迟等。 适用于高码率视频的极端场景；2： M3U8优化模式，增加缓冲区大小，提升视频加载速度和流畅度，可能会降低首屏展现速度。 适用于M3U8在线播放的场景 |App-Android 3.1.0+|
| play-strategy| Number| 0| Play strategy, 0: Normal mode, suitable for most video playback scenarios; 1: Smooth playback mode (downgrade), increase buffer size, use open sl to decode audio, avoid audio and video derailment Problems, which may reduce the display speed of the first screen, video frame rate, and audio delay when opening the screen. Applicable to extreme scenes of high-bit-rate video; 2: M3U8 optimization mode, increase the buffer size, improve video loading speed and fluency, and may slow down the display speed of the first screen. Suitable for M3U8 online playback scenarios | App-Android 3.1.0+|
|header|Object||HTTP 请求 Header|App 3.1.19+|
| header| Object|| HTTP Request Header| App 3.1.19+|
|is-live|Boolean|false|是否为直播源|App 3.7.2+、微信小程序（2.28.1+）|
| is-live|Boolean|false|Whether it is a live broadcast source|App 3.7.2+, WeChat MiniApp (2.28.1+)|
|@play|EventHandle||当开始/继续播放时触发play事件|字节跳动小程序与飞书小程序不支持|
|@play| EventHandle||The play event is triggered when the playback starts/continues|The ByteDance and Feishu MiniApp MiniApp not support|
|@pause|EventHandle||当暂停播放时触发 pause 事件|字节跳动小程序与飞书小程序不支持|
|@pause| EventHandle||The pause event is triggered when the playback is paused|The ByteDance and Feishu MiniApp MiniApp not support|
|@ended|EventHandle||当播放到末尾时触发 ended 事件|字节跳动小程序与飞书小程序不支持|
|@ended| EventHandle||The ended event is triggered when the playback reaches the end|ByteDance and Feishu MiniApp MiniApp not support|
|@timeupdate|EventHandle||播放进度变化时触发，event.detail = {currentTime, duration} 。触发频率 250ms 一次|字节跳动小程序与飞书小程序不支持|
|@timeupdate| EventHandle|| Triggered when the playback progress changes, event.detail = {currentTime, duration}. The trigger frequency is 250ms once|The ByteDance MiniApp and the Feishu MiniApp are not supported|
|@fullscreenchange|EventHandle||当视频进入和退出全屏时触发，event.detail = {fullScreen, direction}，direction取为 vertical 或 horizontal|字节跳动小程序与飞书小程序不支持|
|@fullscreenchange| EventHandle||triggered when the video enters and exits full screen, event.detail = {fullScreen, direction}, direction is vertical or horizontal|ByteDance and Feishu MiniApp MiniApp not support|
|@waiting|EventHandle||视频出现缓冲时触发|字节跳动小程序、飞书小程序、快手小程序不支持|
|@waiting| EventHandle||Triggered when the video is buffered|The ByteDance MiniApp, Feishu MiniApp, and Kuaishou MiniApp are not supported|
|@error|EventHandle||视频播放出错时触发|字节跳动小程序与飞书小程序不支持|
|@error| EventHandle||triggered when a video playback error occurs|The ByteDance and Feishu MiniApp MiniApp not support|
|@progress|EventHandle||加载进度变化时触发，只支持一段加载。event.detail = {buffered}，百分比|微信小程序、H5|
|@progress| EventHandle|| Triggered when the loading progress changes, only supports a period of loading. event.detail = {buffered}, percentage|WeChat MiniApp, H5|
|@loadeddata|EventHandle||视频资源开始加载时触发|京东小程序|
|@loadeddata| EventHandle||triggered when the video resource starts to load|Jingdong MiniApp|
|@loadstart|EventHandle||开始加载数据|京东小程序|
|@loadstart| EventHandle||Start loading data|Jingdong MiniApp|
|@seeked|EventHandle||拖动进度条结束|京东小程序|
|@seeked| EventHandle||Drag the progress bar to end|Jingdong MiniApp|
|@seeking|EventHandle||正在拖动进度条|京东小程序|
|@seeking| EventHandle||Drag the progress bar|Jingdong MiniApp|
|@loadedmetadata|EventHandle||视频元数据加载完成时触发。event.detail = {width, height, duration}|微信小程序、H5、京东小程序|
|@loadedmetadata| EventHandle|| Fired when the video metadata is loaded. event.detail = {width, height, duration}|WeChat MiniApp, H5, Jingdong MiniApp|
|@fullscreenclick|EventHandle||视频播放全屏播放时点击事件。event.detail = { screenX:"Number类型，点击点相对于屏幕左侧边缘的 X 轴坐标", screenY:"Number类型，点击点相对于屏幕顶部边缘的 Y 轴坐标", screenWidth:"Number类型，屏幕总宽度", screenHeight:"Number类型，屏幕总高度"}|App 2.6.3+|
|@fullscreenclick| EventHandle||Click event when the video is playing in full screen. event.detail = { screenX: "Number type, the X-axis coordinate of the clicked point relative to the left edge of the screen", screenY: "Number type, the Y-axis coordinate of the clicked point relative to the top edge of the screen", screenWidth: "Number type, Total screen width", screenHeight:"Number type, total screen height"}| App 2.6.3+|
|@controlstoggle|EventHandle||切换 controls 显示隐藏时触发。event.detail = {show}|微信小程序2.9.5|
|@controlstoggle| EventHandle|| Triggered when controls are toggled from display to hide. event.detail = {show}|WeChat MiniApp 2.9.5|

`<video>` 默认宽度 300px、高度 225px，可通过 css 设置宽高。
`<video>` has a default width of 300px and a height of 225px, and the width and height can be set through css.


##### direction 的合法值
##### Legal values for direction

|值|说明|
|value|description|
|:-|:-|
|0|正常竖向|
|0|normal vertical|
|90|屏幕逆时针90度|
| 90|Screen counterclockwise 90 degrees|
|-90|屏幕顺时针90度|
|-90|Screen clockwise 90 degrees|


##### object-fit 的合法值
##### Legal values for object-fit

|值|说明|
|value|description|
|:-|:-|
|contain|包含|
| contain|contains|
|fill|填充|
| fill|fill|
|cover|覆盖|
| cover|cover|


##### play-btn-position 的合法值
##### Legal value of play-btn-position

|值|说明|
|value|description|
|:-|:-|
|bottom|controls bar上|
| bottom| controls bar top|
|center|视频中间|
| center|Video center|


**示例** [查看示例](https://hellouniapp.dcloud.net.cn/pages/component/video/video)
**Example** [View example](https://hellouniapp.dcloud.net.cn/pages/component/video/video)

::: preview https://hellouniapp.dcloud.net.cn/pages/component/video/video
> Template
```vue
<template>
    <view>
        <view class="uni-padding-wrap uni-common-mt">
            <view>
                <video id="myVideo" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4"
                    @error="videoErrorCallback" :danmu-list="danmuList" enable-danmu danmu-btn controls></video>
            </view>
            <!-- #ifndef MP-ALIPAY -->
            <view class="uni-list uni-common-mt">
                <view class="uni-list-cell">
                    <view>
                        <view class="uni-label">弹幕内容</view>
                    </view>
                    <view class="uni-list-cell-db">
                        <input v-model="danmuValue" class="uni-input" type="text" placeholder="在此处输入弹幕内容" />
                    </view>
                </view>
            </view>
            <view class="uni-btn-v">
                <button @click="sendDanmu" class="page-body-button">发送弹幕</button>
            </view>
            <!-- #endif -->
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
            src: '',
            danmuList: [{
                    text: '第 1s 出现的弹幕',
                    color: '#ff0000',
                    time: 1
                },
                {
                    text: '第 3s 出现的弹幕',
                    color: '#ff00ff',
                    time: 3
                }
            ],
            danmuValue: ''
        }
    },
    onReady: function(res) {
        // #ifndef MP-ALIPAY
        this.videoContext = uni.createVideoContext('myVideo')
        // #endif
    },
    methods: {
        sendDanmu: function() {
            this.videoContext.sendDanmu({
                text: this.danmuValue,
                color: this.getRandomColor()
            });
            this.danmuValue = '';
        },
        videoErrorCallback: function(e) {
            uni.showModal({
                content: e.target.errMsg,
                showCancel: false
            })
        },
        getRandomColor: function() {
            const rgb = []
            for (let i = 0; i < 3; ++i) {
                let color = Math.floor(Math.random() * 256).toString(16)
                color = color.length == 1 ? '0' + color : color
                rgb.push(color)
            }
            return '#' + rgb.join('')
        }
    }
}
</script>
```
:::


相关api：[uni.createVideoContext](/api/media/video-context?id=createvideocontext)
Related api: [uni.createVideoContext](/api/media/video-context?id=createvideocontext)

**注意**
**Notice**

- 视频播放格式说明：
- Description of video playback format:
	* H5平台：支持的视频格式视浏览器而定，一般通用的都支持：mp4、webm 和 ogg。（``<video/>`` 组件编译到 H5 时会替换为标准 html 的 video 标签）。H5端也可以自行在条件编译里使用video.js等三方库，这些库可以自动判断环境兼容以决定使用标准video或flash来播放。
	* H5 platform: The supported video formats depend on the browser, and the general ones are supported: mp4, webm and ogg. (``<video/>`` components will be replaced with standard html video tags when compiled to H5). The H5 side can also use three-party libraries such as video.js in conditional compilation. These libraries can automatically judge the compatibility of the environment and decide to use standard video or flash to play.
	* 小程序平台：各小程序平台支持程度不同，详见各家文档：[微信小程序视频组件文档](https://developers.weixin.qq.com/miniprogram/dev/component/video.html)、[支付宝小程序video组件](https://docs.alipay.com/mini/component/video)、[百度小程序视频组件文档](https://smartprogram.baidu.com/docs/develop/component/media/#video/)、[字节跳动小程序视频组件文档](https://developer.toutiao.com/dev/cn/mini-app/develop/component/media-component/video)、[QQ小程序视频组件文档](https://q.qq.com/wiki/develop/miniprogram/component/media/camera.html)、[华为快应用视频组件文档](https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/webview-component-video)
	* MiniApp platform: each MiniApp platform supports different levels, please refer to each company’s documentation for details: [WeChat MiniApp Video Component Documentation]( <a
href="https://developers.weixin.qq.com/miniprogram/dev/component/video.html)、[支付宝小程序video组件](https://docs.alipay.com/mini/component/video)、[百度小程序视频组件文档](https://smartprogram.baidu.com/docs/develop/component/media/#video/)、[字节跳动小程序视频组件文档](https://developer.toutiao.com/dev/cn/mini-app/develop/component/media-component/video)、[QQ小程序视频组件文档](https://q.qq.com/wiki/develop/miniprogram/component/media/camera.html)、[华为快应用视频组件文档](https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/webview-component-video">https://developers.weixin.qq.com/miniprogram/dev/component/video.html) , [Alipay MiniApp video component](https://docs.alipay.com/mini/component/video), [Baidu MiniApp video component document](https://smartprogram.baidu.com/docs/develop/component /media/#video/), [ByteDance MiniApp Video Component Documentation](https://developer.toutiao.com/dev/cn/mini-app/develop/component/media-component/video), [ QQ MiniApp Video Component Documentation](https://q.qq.com/wiki/develop/miniprogram/component/media/camera.html), [Huawei QuickApp Video Component Documentation](https://developer.huawei. com/consumer/en/doc/development/quickApp-References/webview-component-video</a> )
href=" <a
href="https://developers.weixin.qq.com/miniprogram/dev/component/video.html)、[支付宝小程序video组件](https://docs.alipay.com/mini/component/video)、[百度小程序视频组件文档](https://smartprogram.baidu.com/docs/develop/component/media/#video/)、[字节跳动小程序视频组件文档](https://developer.toutiao.com/dev/cn/mini-app/develop/component/media-component/video)、[QQ小程序视频组件文档](https://q.qq.com/wiki/develop/miniprogram/component/media/camera.html)、[华为快应用视频组件文档](https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/webview-component-video">https://developers.weixin.qq.com/miniprogram/dev/component/video.html), [Alipay MiniApp video component](https://docs.alipay.com/mini/component/video) , [Baidu MiniApp Video Component Documentation](https://smartprogram.baidu.com/docs/develop/component/media/#video/), [Baidu Mini MiniApp Video Component Documentation](https://developer. toutiao.com/dev/cn/mini-app/develop/component/media-component/video), [QQ MiniApp video component document](https://q.qq.com/wiki/develop/miniprogram/component /media/camera.html), [Huawei QuickApp Video Component Documentation](https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/webview-component-video</a> "> <a href="https://developers.weixin.qq.com/miniprogram/dev/component/video.html">https:// developers.weixin.qq.com/miniprogram/dev/component/video.html</a> ), [Alipay MiniApp video component](https://docs.alipay.com/mini/component/video), [Baidu MiniApp video component document]( <a href="https://smartprogram.baidu.com/docs/develop/component">https://smartprogram.baidu.com/docs/develop/component</a> /media/#video/), [ByteDance MiniApp Video Component Documentation]( <a
href="https://developer.toutiao.com/dev/cn/mini-app/develop/component/media-component/video">https://developer.toutiao.com/dev/cn/mini-app/ develop/component/media-component/video</a> ), [ QQ MiniApp Video Component Documentation]( <a href="https://q.qq.com/wiki/develop/miniprogram/component/media/camera.html">https://q.qq.com /wiki/develop/miniprogram/component/media/camera.html</a> ), [Huawei QuickApp Video Component Documentation]( <a href="https://developer.huawei">https://developer.huawei.com/consumer/en/doc/development/quickApp-References/webview-component-</a> video</a> )
	* App平台： 支持本地视频(mp4/flv)、网络视频地址（mp4/flv/m3u8）及流媒体（rtmp/hls/rtsp）。
	* App platform: Support local video (mp4/flv), network video address (mp4/flv/m3u8) and streaming media (rtmp/hls/rtsp).

- video**全屏**后，如何自行绘制界面？比如加个标题、加个分享按钮
- After the video **full screen**, how to draw the interface by itself? For example, add a title, add a share button
	* 微信基础库 2.4.0 以上可通过cover-view来绘制界面覆盖元素
	* Wechat base library 2.4.0 or above can draw interface cover elements through cover-view
	* app端 2.1.5 以上nvue页面的video也可以通过cover-view来绘制界面覆盖元素
	* On the app side 2.1.5 or above, videos on nvue pages can also use cover-view to draw interface overlay elements
	* H5端可通过通用h5做法实现
	* The H5 side can be realized through the general h5 method
	* 其他端无法全屏后自行绘制内容
	* Other terminals cannot draw content by themselves after full screen

- 如何实现抖音、映客等全屏视频垂直滑动切换效果？
- How to realize the vertical sliding switching effect of full-screen videos such as Douyin and Inke?
	* 微信基础库 2.4.0 和 app端nvue 2.1.5 以上，可通过在垂直的swiper中内嵌video来实现。原生导航栏设置为custom，视频长宽设为手机屏幕大小，通过cover-view覆盖视频内容。插件市场有相关[示例](https://ext.dcloud.net.cn/search?q=%E6%8A%96%E9%9F%B3)
	* Wechat base library 2.4.0 and app-side nvue 2.1.5 or above can be realized by embedding video in the vertical swiper. The original navigation bar is set to custom, the video length and width are set to the size of the mobile phone screen, and the video content is covered by cover-view. The plug-in market has relevant [examples](https://ext.dcloud.net.cn/search?q=%E6%8A%96%E9%9F%B3)

- `<video/>` 组件在非H5端是原生组件，层级高于普通前端组件，覆盖其需要使用[cover-view](https://uniapp.dcloud.io/component/cover-view?id=cover-view)组件或plus.nativeObj.view、subNVue。微信基础库 2.4.0+和字节跳动小程序 已支持 video 组件的同层渲染，也就是video在非全屏时，可以被前端元素通过调节z-index来遮挡，但video全屏时，仍需要cover-view覆盖。
- The `<video/>` component is a native component on the non-H5 side, and its level is higher than that of ordinary front-end components. To cover it, you need to use [cover-view](https://uniapp.dcloud.io/component/cover-view?id=cover-view) component or plus.nativeObj.view, subNVue. The WeChat basic library2.4.0+ and ByteDance MiniApp already support the same-layer rendering of video components, that is, when the video is not in full screen, it can be blocked by front-end elements by adjusting the z-index, but when the video is in full screen, it still needs cover -view overlay.
- 除微信基础库 2.4.0+ 和 字节跳动小程序 和 app-nvue 2.1.5+，其他情况下非H5的video不能放入scroll-view和swiper。注意参考 [原生组件使用限制](/component/native-component)。
- Except for WeChat base library 2.4.0+, ByteDance MiniApp and app-nvue 2.1.5+, in other cases, non-H5 videos cannot be placed in scroll-view and swiper. Please refer to [Restrictions on Native Component Usage](/component/native-component).
- 你也可以尝试换个设计思路，如：列表中的视频组件是通过图片与icon模拟的，点击后播放全屏播放视频的方案。详情[【video组件会覆盖页面其他非原生组件的设计替代方案示例】](https://ext.dcloud.net.cn/plugin?id=3549)
- You can also try to change the design idea, such as: the video components in the list are simulated by pictures and icons, and click to play the full-screen video playback solution. Details[[Examples of design alternatives where the video component will overwrite other non-native components on the page]](https://ext.dcloud.net.cn/plugin?id=3549)

- App平台：使用 `<video/>` 组件，打包 App 时必须勾选 manifest.json->App 模块权限配置->VideoPlayer 模块。此模块体积较大，非默认内置。
- App platform: use the `<video/>` component, and you must check the manifest.json->App module permission configuration->VideoPlayer module when packaging the App. This module is large in size and not built-in by default.
- App平台：如果使用的视频路径为本地路径，需要配置资源为释放模式：在 manifest.json 文件内 app-plus 节点下新增 runmode 配置，设置值为liberate。
- App platform: If the video path used is a local path, you need to configure the resource to release mode: add a new runmode configuration under the app-plus node in the manifest.json file, and set the value to liberate.
- App平台：如果想使用非原生的video，即原来普通的html5自带video，可使用web-view组件load html页面，在其中使用普通h5 video。
- App platform: If you want to use non-native video, that is, the original ordinary html5 video, you can use the web-view component to load the html page, and use ordinary h5 video in it.
- App平台：app-vue即使选择了使用x5内核，也不会使用x5的video播放，仍然使用uni-app的App引擎自带的原生视频播放。
- App platform: Even if app-vue chooses to use the x5 kernel, it will not use the x5 video playback, and still use the native video playback that comes with the uni-app App engine.
- App平台：3.6.14 以及 手机系统 iOS16 以上video**全屏** 需要配置应用支持横屏： 在 manifest.json 文件内 app-plus 节点下新增 screenOrientation 配置，设置值为["portrait-primary","portrait-secondary","landscape-primary","landscape-secondary"]。
- App platform: 3.6.14 and mobile phone system iOS16 or above video**full screen** Need to configure the app to support horizontal screen: Add a new screenOrientation configuration under the app-plus node in the manifest.json file, and set the value to ["portrait-primary" ,"portrait-secondary","landscape-primary","landscape-secondary"].
- H5平台： 在部分浏览器中会强制调用原生播放器播放（如：微信内置浏览器、UC浏览器等），在 x5 内核的浏览器中支持配置[同层播放器](https://x5.tencent.com/docs/video.html)。
- H5 platform: In some browsers, the native player will be forced to play (such as: WeChat built-in browser, UC browser, etc.), and the x5 kernel browser supports the configuration of [same layer player](https:// x5.tencent.com/docs/video.html).
- HBuilderX内置浏览器，使用video标签暂时存在问题，请先使用其他外部浏览器。
- There is a temporary problem with the built-in browser of HBuilderX when using video tags, please use other external browsers first.
