#### live-pusher

实时音视频录制，也称直播推流。

**平台差异说明**

|App|H5|
|:-:|:-:|
|√(仅nvue)|x|

app开发，推荐使用nvue做直播，比使用vue的优势有：
1. nvue也可一套代码编译多端。
2. nvue的cover-view比vue的cover-view更强大，在视频上绘制元素更容易。如果只考虑App端的话，不用cover-view，任意组件都可以覆盖live-pusher组件，因为nvue没有层级问题。
3. 若需要视频内嵌在swiper里上下滑动（类抖音、映客首页模式），App端只有nvue才能实现


**参数说明**

设置live-pusher组件的推流地址，推流视频模式等。

属性|类型 |默认值|必填|说明|平台差异说明|
:--|:--|:--|:--|:--|:--|
url|string| |是|推流地址，支持RTMP协议。|
mode |string|SD|否|推流视频模式，可取值：SD（标清）, HD（高清）, FHD（超清）。|
aspect |string|3:2|否|视频宽高比例|
muted|Boolean|false|否|是否静音。|
enable-camera|Boolean|true|否|开启摄像头。|
auto-focus|Boolean|true|否|自动聚集。|
beauty|Number|0|否|美颜，取值范围 0-9（iOS取值范围为1） ，0 表示关闭。|
whiteness|Number|0|否|美白，取值范围 0-9（iOS取值范围为1） ，0 表示关闭。|
orientation|String|"vertical"|否|画面方向|
min-bitrate|Number|200|否|最小码率。|
max-bitrate|Number|1000|否|最大码率。|
@statechange|EventHandle|||状态变化事件，detail = {code}|
@netstatus|EventHandle|||网络状态通知，detail = {info}|
@error|EventHandle|||渲染错误事件，detail = {errMsg, errCode}|



#### orientation 的合法值

|值|说明|
|:-|:-|
|vertical|竖直|
|horizontal|水平|


#### 网络状态数据（info）安卓

键名|说明
:--|:--|
videoBitrate | 当前视频编/码器输出的比特率，单位 kbps
audioBitrate | 当前音频编/码器输出的比特率，单位 kbps
videoFPS | 当前视频帧率
videoGOP | 当前视频 GOP,也就是每两个关键帧(I帧)间隔时长，单位 s
netSpeed | 当前的发送/接收速度
netJitter | 网络抖动情况，抖动越大，网络越不稳定
videoWidth | 视频画面的宽度
videoHeight | 视频画面的高度

#### 网络状态数据（info）iOS

参数|类型 |说明
:--|:--|:--|
code|Number|  code码
message|string| 具体的网络状态信息

#### 事件

#### statechange
> 状态变化事件

#####  返回参数（detail）的详细说明
参数|类型|说明
:--|:--|:--|
code|Number|
message|string|


#### netstatus
> 网络状态通知事件

#####  安卓 返回参数（detail）的详细说明
键名|说明
:--|:--|
videoBitrate | 当前视频编/码器输出的比特率，单位 kbps
audioBitrate | 当前音频编/码器输出的比特率，单位 kbps
videoFPS | 当前视频帧率
videoGOP | 当前视频 GOP,也就是每两个关键帧(I帧)间隔时长，单位 s
netSpeed | 当前的发送/接收速度
netJitter | 网络抖动情况，抖动越大，网络越不稳定
videoWidth | 视频画面的宽度
videoHeight | 视频画面的高度

##### iOS 返回参数（detail）的详细说明
参数|类型 |说明
:--|:--|:--|
code|Number| code码
message|string| 具体的网络状态信息


#### error
> 渲染错误事件

#####  返回参数（detail）的详细说明
参数|类型 |说明
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



**注意**

* App平台：使用 `<live-pusher/>` 组件，打包 App 时必须勾选 manifest.json->App 模块权限配置->LivePusher(直播推流) 模块。
