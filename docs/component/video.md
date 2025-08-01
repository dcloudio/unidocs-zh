> 视频需要上传？推荐`uni-cdn`，帮你节省至少30%的 CDN 费用！[详情](https://doc.dcloud.net.cn/uniCloud/uni-cdn/intro.html)。

## video
视频播放组件。

<!-- UNIAPPCOMJSON.video.compatibility -->

**属性说明**

|属性名|类型|默认值|说明|平台差异说明|
|:-|:-|:-|:-|:-|
|src|String||要播放视频的资源地址||
|autoplay|Boolean|false|是否自动播放||
|loop|Boolean|false|是否循环播放||
|muted|Boolean|false|是否静音播放|飞书小程序不支持|
|initial-time|Number||指定视频初始播放位置，单位为秒（s）。|飞书小程序不支持|
|duration|Number||指定视频时长，单位为秒（s）。|抖音小程序、飞书小程序、快手小程序、京东小程序不支持|
|controls|Boolean|true|是否显示默认播放控件（播放/暂停按钮、播放进度、时间）|快手小程序不支持|
|danmu-list|Object Array||弹幕列表|抖音小程序、飞书小程序、快手小程序、京东小程序不支持|
|danmu-btn|Boolean|false|是否显示弹幕按钮，只在初始化时有效，不能动态变更|抖音小程序、飞书小程序、快手小程序、京东小程序不支持|
|enable-danmu|Boolean|false|是否展示弹幕，只在初始化时有效，不能动态变更|抖音小程序、飞书小程序、快手小程序、京东小程序不支持|
|page-gesture|Boolean|false|在非全屏模式下，是否开启亮度与音量调节手势|微信小程序、H5|
|direction|Number||设置全屏时视频的方向，不指定则根据宽高比自动判断。有效值为 0（正常竖向）, 90（屏幕逆时针90度）, -90（屏幕顺时针90度）|H5、飞书小程序、快手小程序、京东小程序不支持|
|show-progress|Boolean|true|若不设置，宽度大于240时才会显示|抖音小程序、飞书小程序、快手小程序、京东小程序不支持|
|show-fullscreen-btn|Boolean|true|是否显示全屏按钮|京东小程序不支持|
|show-play-btn|Boolean|true|是否显示视频底部控制栏的播放按钮|京东小程序不支持|
|show-center-play-btn|Boolean|true|是否显示视频中间的播放按钮|抖音小程序、京东小程序不支持|
|show-loading|Boolean|true|是否显示loading控件|仅app 2.8.12+|
|enable-progress-gesture|Boolean|true|是否开启控制进度的手势|抖音小程序、京东小程序不支持|
|object-fit|String|contain|当视频大小与 video 容器大小不一致时，视频的表现形式。contain：包含，fill：填充，cover：覆盖|App、微信小程序、抖音小程序、飞书小程序、H5、京东小程序|
|poster|String||视频封面的图片网络资源地址，如果 controls 属性值为 false 则设置 poster 无效||
|show-mute-btn|Boolean|false|是否显示静音按钮|微信小程序、抖音小程序、App-nvue|
|title|String||视频的标题，全屏时在顶部展示|微信小程序、App（3.6.7+）|
|play-btn-position|String|bottom|播放按钮的位置|微信小程序、抖音小程序、飞书小程序|
|mobilenet-hint-type|number|1|移动网络提醒样式：0是不提醒，1是提醒，默认值为1|京东小程序|
|enable-play-gesture|Boolean|false|是否开启播放手势，即双击切换播放/暂停|微信小程序、快手小程序|
|auto-pause-if-navigate|Boolean|true|当跳转到其它小程序页面时，是否自动暂停本页面的视频|微信小程序|
|auto-pause-if-open-native|Boolean|true|当跳转到其它微信原生页面时，是否自动暂停本页面的视频|微信小程序|
|vslide-gesture|Boolean|false|在非全屏模式下，是否开启亮度与音量调节手势（同 page-gesture）|微信小程序、App（3.4.0+）、快手小程序|
|vslide-gesture-in-fullscreen|Boolean|true|在全屏模式下，是否开启亮度与音量调节手势|微信小程序、App（3.4.0+）、快手小程序|
|ad-unit-id|String||视频前贴广告单元ID，更多详情可参考开放能力[视频前贴广告](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/ad/video-patch-ad.html)|微信小程序|
|poster-for-crawler|String||用于给搜索等场景作为视频封面展示，建议使用无播放 icon 的视频封面图，只支持网络地址|微信小程序|
|codec|String|hardware|解码器选择，hardware：硬解码（硬解码可以增加解码算力，提高视频清晰度。少部分老旧硬件可能存在兼容性问题）；software：ffmpeg 软解码；|App-Android 3.1.0+|
|http-cache|Boolean|true|是否对 http、https 视频源开启本地缓存。缓存策略:开启了此开关的视频源，在视频播放时会在本地保存缓存文件，如果本地缓存池已超过100M，在进行缓存前会清空之前的缓存（不适用于m3u8等流媒体协议）|App-Android 3.1.0+|
|play-strategy|Number|0| 播放策略，0：普通模式，适合绝大部分视频播放场景；1：平滑播放模式（降级），增加缓冲区大小，采用open sl解码音频，避免音视频脱轨的问题，可能会降低首屏展现速度、视频帧率，出现开屏音频延迟等。 适用于高码率视频的极端场景；2： M3U8优化模式，增加缓冲区大小，提升视频加载速度和流畅度，可能会降低首屏展现速度。 适用于M3U8在线播放的场景 |App-Android 3.1.0+|
|header|Object||HTTP 请求 Header|App 3.1.19+|
|is-live|Boolean|false|是否为直播源|App 3.7.2+、微信小程序（2.28.1+）|
|@play|EventHandle||当开始/继续播放时触发play事件|飞书小程序不支持|
|@pause|EventHandle||当暂停播放时触发 pause 事件|飞书小程序不支持|
|@ended|EventHandle||当播放到末尾时触发 ended 事件|飞书小程序不支持|
|@timeupdate|EventHandle||播放进度变化时触发，event.detail = {currentTime, duration} 。触发频率 250ms 一次|飞书小程序不支持|
|@fullscreenchange|EventHandle||当视频进入和退出全屏时触发，event.detail = {fullScreen, direction}，direction取为 vertical 或 horizontal|飞书小程序不支持|
|@waiting|EventHandle||视频出现缓冲时触发|飞书小程序、快手小程序不支持|
|@error|EventHandle||视频播放出错时触发|飞书小程序不支持|
|@progress|EventHandle||加载进度变化时触发，只支持一段加载。event.detail = {buffered}，百分比|微信小程序、抖音小程序、H5|
|@loadeddata|EventHandle||视频资源开始加载时触发|京东小程序|
|@loadstart|EventHandle||开始加载数据|京东小程序|
|@seeked|EventHandle||拖动进度条结束|京东小程序|
|@seeking|EventHandle||正在拖动进度条|京东小程序|
|@loadedmetadata|EventHandle||视频元数据加载完成时触发。event.detail = {width, height, duration}|微信小程序、H5、抖音小程序、京东小程序|
|@fullscreenclick|EventHandle||视频播放全屏播放时点击事件。event.detail = { screenX:"Number类型，点击点相对于屏幕左侧边缘的 X 轴坐标", screenY:"Number类型，点击点相对于屏幕顶部边缘的 Y 轴坐标", screenWidth:"Number类型，屏幕总宽度", screenHeight:"Number类型，屏幕总高度"}|App 2.6.3+|
|@controlstoggle|EventHandle||切换 controls 显示隐藏时触发。event.detail = {show}|微信小程序2.9.5|

`<video>` 默认宽度 300px、高度 225px，可通过 css 设置宽高。



##### direction 的合法值

|值|说明|
|:-|:-|
|0|正常竖向|
|90|屏幕逆时针90度|
|-90|屏幕顺时针90度|


##### object-fit 的合法值

|值|说明|
|:-|:-|
|contain|包含|
|fill|填充|
|cover|覆盖|


##### play-btn-position 的合法值

|值|说明|
|:-|:-|
|bottom|controls bar上|
|center|视频中间|


**示例** [查看示例](https://hellouniapp.dcloud.net.cn/pages/component/video/video)

::: preview https://hellouniapp.dcloud.net.cn/pages/component/video/video
> Template
```vue
<template>
    <view>
        <view class="uni-padding-wrap uni-common-mt">
            <view>
                <video id="myVideo" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4"
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

**注意**

- 视频播放格式说明：
	* H5平台：支持的视频格式视浏览器而定，一般通用的都支持：mp4、webm 和 ogg。（``<video/>`` 组件编译到 H5 时会替换为标准 html 的 video 标签）。H5端也可以自行在条件编译里使用video.js等三方库，这些库可以自动判断环境兼容以决定使用标准video或flash来播放。
	* 小程序平台：各小程序平台支持程度不同，详见各家文档：[微信小程序视频组件文档](https://developers.weixin.qq.com/miniprogram/dev/component/video.html)、[支付宝小程序video组件](https://docs.alipay.com/mini/component/video)、[百度小程序视频组件文档](https://smartprogram.baidu.com/docs/develop/component/media/#video/)、[抖音小程序视频组件文档](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/component/media-component/video/)、[QQ小程序视频组件文档](https://q.qq.com/wiki/develop/miniprogram/component/media/camera.html)、[华为快应用视频组件文档](https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/webview-component-video?ha_source=Dcloud&ha_sourceId=89000448)
	* App平台： 支持本地视频(mp4/flv)、网络视频地址（mp4/flv/m3u8）及流媒体（rtmp/hls/rtsp）。

App平台video组件使用ijkplayer库实现：[https://github.com/bilibili/ijkplayer](https://github.com/bilibili/ijkplayer)；

ijkplayer作为一个开源库，比腾讯视频等商业sdk仍有差距。如无法在开源库上满足需求，可在插件市场寻找商业sdk插件：[腾讯视频](https://ext.dcloud.net.cn/search?q=%E8%85%BE%E8%AE%AF%E8%A7%86%E9%A2%91&orderBy=Relevance&cat1=5&cat2=51)、[阿里云视频](https://ext.dcloud.net.cn/search?q=%E9%98%BF%E9%87%8C%E4%BA%91%E8%A7%86%E9%A2%91&orderBy=Relevance&cat1=5&cat2=51)

- video**全屏**后，如何自行绘制界面？比如加个标题、加个分享按钮
	* 微信基础库 2.4.0 以上可通过 view 来绘制界面覆盖元素 (之前需要使用 cover-view) [详见](https://developers.weixin.qq.com/miniprogram/dev/component/)
	* app端 2.1.5 以上nvue页面的video也可以通过cover-view来绘制界面覆盖元素
	* H5端可通过通用h5做法实现
	* 其他端无法全屏后自行绘制内容

- 如何实现抖音、映客等全屏视频垂直滑动切换效果？
	* 微信基础库 2.4.0 和 app端nvue 2.1.5 以上，可通过在垂直的swiper中内嵌video来实现。原生导航栏设置为custom，视频长宽设为手机屏幕大小，通过cover-view覆盖视频内容。插件市场有相关[示例](https://ext.dcloud.net.cn/search?q=%E6%8A%96%E9%9F%B3)

- `<video/>` 组件在非H5端是原生组件，层级高于普通前端组件，覆盖其需要使用[cover-view](https://uniapp.dcloud.io/component/cover-view?id=cover-view)组件或plus.nativeObj.view、subNVue。微信基础库 2.4.0+和抖音小程序 已支持 video 组件的同层渲染，也就是video在非全屏时，可以被前端元素通过调节z-index来遮挡，但video全屏时，仍需要cover-view覆盖。
- 除微信基础库 2.4.0+ 和 抖音小程序 和 app-nvue 2.1.5+，其他情况下非H5的video不能放入scroll-view和swiper。注意参考 [原生组件使用限制](/component/native-component)。
- 你也可以尝试换个设计思路，如：列表中的视频组件是通过图片与icon模拟的，点击后播放全屏播放视频的方案。详情[【video组件会覆盖页面其他非原生组件的设计替代方案示例】](https://ext.dcloud.net.cn/plugin?id=3549)

- App平台：使用 `<video/>` 组件，打包 App 时必须勾选 manifest.json->App 模块权限配置->VideoPlayer 模块。此模块体积较大，非默认内置。
- App平台：如果使用的视频路径为本地路径，需要配置资源为释放模式：在 manifest.json 文件内 app-plus 节点下新增 runmode 配置，设置值为liberate。
- App平台：如果想使用非原生的video，即原来普通的html5自带video。有2种方案：
	* 1. 可使用web-view组件load html页面，在其中使用普通h5 video
	* 2. 使用renderjs，在渲染层直接创建video组件。插件市场有这方面的[插件](https://ext.dcloud.net.cn/search?q=%E8%A7%86%E9%A2%91%E5%B1%82%E7%BA%A7&orderBy=Relevance&cat1=2&cat2=21)
	使用webview的video，好处是没有层级覆盖问题，部分video格式的兼容性更好；坏处是受webview版本限制，在低端Android（5、6）上表现逊于原生video。如果不考虑老Android手机，可以使用这种方案。
- App平台：app-vue即使选择了使用x5内核，也不会使用x5的video播放，仍然使用uni-app的App引擎自带的原生视频播放。
- App平台：3.6.14 以及 手机系统 iOS16 以上video**全屏** 需要配置应用支持横屏： 在 manifest.json 文件内 app-plus 节点下新增 screenOrientation 配置，设置值为["portrait-primary","portrait-secondary","landscape-primary","landscape-secondary"]。
- H5平台： 在部分浏览器中会强制调用原生播放器播放（如：微信内置浏览器、UC浏览器等），在 x5 内核的浏览器中支持配置[同层播放器](https://x5.tencent.com/docs/video.html)。
- HBuilderX内置浏览器，使用video标签暂时存在问题，请先使用其他外部浏览器。

<!-- UNIAPPCOMJSON.video.reference -->
