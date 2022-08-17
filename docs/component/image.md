#### image

图片。
Image.

|属性名|类型|默认值|说明|平台差异说明|
| Attribute name| Type| Defaults| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|
|src|String||图片资源地址||
| src| String| | Image resource address| |
|mode|String|'scaleToFill'|图片裁剪、缩放的模式|<div style="width:68px;"></div>|
| mode| String| 'scaleToFill'| Modes of image cropping and zooming| <div style="width:68px;"></div>|
|lazy-load|Boolean|false|图片懒加载。只针对page与scroll-view下的image有效|微信小程序、百度小程序、字节跳动小程序、飞书小程序|
|lazy-load|Boolean|false|The image is loaded lazily. Only valid for images under page and scroll-view|WeChat applet, Baidu applet, ByteDance applet, Feishu applet|
|fade-show|Boolean|true|图片显示动画效果|仅App-nvue 2.3.4+ Android有效|
| fade-show| Boolean| true| Animation effect of the image display| Only valid on App-nvue 2.3.4+ Android|
|webp|boolean|false|在系统不支持webp的情况下是否单独启用webp。默认false，只支持网络资源。webp支持详见下面说明|微信小程序2.9.0|
|webp|boolean|false|Whether to enable webp alone if the system does not support webp. The default is false, only network resources are supported. For details on webp support, please refer to the following instructions|WeChat applet 2.9.0|
|show-menu-by-longpress|boolean|false|开启长按图片显示识别小程序码菜单|微信小程序2.7.0|
|show-menu-by-longpress|boolean|false|Enable long-press on the picture to display the identification applet code menu|WeChat applet 2.7.0|
|draggable|boolean|true|是否能拖动图片|H5 3.1.1+、App（iOS15+）|
|draggable|boolean|true|Can drag pictures|H5 3.1.1+, App (iOS15+)|
|@error|HandleEvent||当错误发生时，发布到 AppService 的事件名，事件对象event.detail = {errMsg: 'something wrong'}||
| @error| HandleEvent| | When an error occurs, event name is released to AppService whose event object is event.detail = {errMsg: 'something wrong'}| |
|@load|HandleEvent||当图片载入完毕时，发布到 AppService 的事件名，事件对象event.detail = {height:'图片高度px', width:'图片宽度px'}|&nbsp;|
| @load| HandleEvent| | When image loading completed, event name will be posted to AppService, with the event object event.detail = {height:'image height px', width:'image width px'}|  |

**Tips**

- `<image>` 组件默认宽度 320px、高度 240px；`app-nvue平台，暂时默认为屏幕宽度、高度 240px；`
- `<image>` component default width 320px, height 240px; `app-nvue platform, temporarily default to screen width, height 240px;`
- `src` 仅支持相对路径、绝对路径，支持 base64 码；
- `src` only supports relative path, absolute path, and base64 code;
- 页面结构复杂，css样式太多的情况，使用 image 可能导致样式生效较慢，出现 “闪一下” 的情况，此时设置 `image{will-change: transform}` ,可优化此问题。
- If the page structure is complex and there are too many css styles, the use of image may cause the styles to take effect slowly, causing a "flicker" situation. At this time, setting `image{will-change: transform}` can optimize this problem.
- 自定义组件里面使用 `<image>`时，若 `src` 使用相对路径可能出现路径查找失败的情况，故建议使用绝对路径。
- When using `<image>` in a custom component, if `src` uses a relative path, the path search may fail. Therefore, it is recommended to use an absolute path.
- svg 格式的图片在不同的平台支持情况不同。具体为：app-nvue 不支持 svg 格式的图片，小程序上只支持网络地址。
- Images in svg format are supported differently on different platforms. Specifically: app-nvue does not support images in svg format, and only network addresses are supported on the applet.

- webp图片支持详解
- Detailed explanation of webp image support
  * Android4以上（含）、iOS14以上（含）系统内置支持webp，此时，不管web、小程序、app，也不管vue还是nvue都可以直接使用webp；
  * Android4 or above (inclusive), iOS14 or above (inclusive), the system has built-in support for webp. At this time, no matter web, applet, app, or vue or nvue, you can use webp directly;
  * iOS14以下，app-vue下，iOS不支持；app-nvue下，iOS支持；微信小程序2.9.0起，配置属性webp为true时iOS支持；
  * Below iOS14, under app-vue, iOS is not supported; under app-nvue, iOS is supported; WeChat applet 2.9.0 onwards, iOS supports when the configuration property webp is true;
  * pc浏览器上，webp在不同浏览器的支持详见：[https://caniuse.com/?search=webp](https://caniuse.com/?search=webp)
  * On PC browsers, please refer to the support of webp in different browsers: [https://caniuse.com/?search=webp](https://caniuse.com/?search=webp)


**mode 有效值：**
**mode valid values:**

mode 有 14 种模式，其中 5 种是缩放模式，9 种是裁剪模式。
There are 14 modes, 5 of which are zooming modes and 9 are cropping modes.

|模式|值|说明|
| Mode| Value| Instruction|
|:-|:-|:-|
|缩放|scaleToFill|不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素|
| Zoom| scaleToFill| Zoom the image without keeping aspect ratio to ensure the width and height of the image are fully stretched to fill the image element|
|缩放|aspectFit|保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。|
| Zoom| aspectFit| Zoom the image with constant aspect ratio to ensure the long sides of the image can be fully displayed. That is to say, the image can be displayed completely.|
|缩放|aspectFill|保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。|
| Zoom| aspectFill| Zoom the image with constant aspect ratio to ensure the short sides of the image can be fully displayed only. That is to say, the image is usually complete only in horizontal direction or vertical direction, and in the other directions it will be cropped.|
|缩放|widthFix|宽度不变，高度自动变化，保持原图宽高比不变|
| Zoom| widthFix| The width is unchanged, the height changes automatically, and the aspect ratio of the original image is preserved|
|缩放|heightFix|高度不变，宽度自动变化，保持原图宽高比不变 **App 和 H5 平台 HBuilderX 2.9.3+ 支持、微信小程序需要基础库 2.10.3**|
|Zoom|heightFix|The height does not change, the width changes automatically, and the aspect ratio of the original image remains unchanged **App and H5 platform HBuilderX 2.9.3+ support, WeChat applet requires basic library 2.10.3**|
|裁剪|top|不缩放图片，只显示图片的顶部区域|
| Crop| top| Don't zoom the image, but show the top area of the image only|
|裁剪|bottom|不缩放图片，只显示图片的底部区域|
| Crop| bottom| Don't zoom the image, but show the bottom area of the image only|
|裁剪|center|不缩放图片，只显示图片的中间区域|
| Crop| center| Don't zoom the image, but show the center area of the image only|
|裁剪|left|不缩放图片，只显示图片的左边区域|
| Crop| left| Don't zoom the image, but show the left area of the image only|
|裁剪|right|不缩放图片，只显示图片的右边区域|
| Crop| right| Don't zoom the image, but show the right area of the image only|
|裁剪|top left|不缩放图片，只显示图片的左上边区域|
| Crop| top left| Don't zoom the image, but show the left top area of the image only|
|裁剪|top right|不缩放图片，只显示图片的右上边区域|
| Crop| top right| Don't zoom the image, but show the right top area of the image only|
|裁剪|bottom left|不缩放图片，只显示图片的左下边区域|
| Crop| bottom left| Don't zoom the image, but show the left bottom area of the image only|
|裁剪|bottom right|不缩放图片，只显示图片的右下边区域|
| Crop| bottom right| Don't zoom the image, but show the right bottom area of the image only|

**示例：** [查看示例](https://hellouniapp.dcloud.net.cn/pages/component/image/image)
**Example:** [View the example](https://hellouniapp.dcloud.net.cn/pages/component/image/image)
 
::: preview
> Template
```vue
<template>
    <view class="page">
        <view class="image-list">
            <view class="image-item" v-for="(item,index) in array" :key="index">
                <view class="image-content">
                    <image style="width: 200px; height: 200px; background-color: #eeeeee;" :mode="item.mode" :src="src"
                        @error="imageError"></image>
                </view>
                <view class="image-title">{{item.text}}</view>
            </view>
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
            array: [{
                mode: 'scaleToFill',
                text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
            }, {
                mode: 'aspectFit',
                text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来'
            }, {
                mode: 'aspectFill',
                text: 'aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来'
            }, {
                mode: 'top',
                text: 'top：不缩放图片，只显示图片的顶部区域'
            }, {
                mode: 'bottom',
                text: 'bottom：不缩放图片，只显示图片的底部区域'
            }, {
                mode: 'center',
                text: 'center：不缩放图片，只显示图片的中间区域'
            }, {
                mode: 'left',
                text: 'left：不缩放图片，只显示图片的左边区域'
            }, {
                mode: 'right',
                text: 'right：不缩放图片，只显示图片的右边边区域'
            }, {
                mode: 'top left',
                text: 'top left：不缩放图片，只显示图片的左上边区域'
            }, {
                mode: 'top right',
                text: 'top right：不缩放图片，只显示图片的右上边区域'
            }, {
                mode: 'bottom left',
                text: 'bottom left：不缩放图片，只显示图片的左下边区域'
            }, {
                mode: 'bottom right',
                text: 'bottom right：不缩放图片，只显示图片的右下边区域'
            }],
            src: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg'
        }
    },
    methods: {
        imageError: function(e) {
            console.error('image发生error事件，携带值为' + e.detail.errMsg)
        }
    }
}
</script>
```
:::


原图
Original image

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg)

scaleToFill：不保持纵横比缩放图片，使图片完全适应
scaleToFill: zoom the image with inconstant aspect ratio to make the image fits completely

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6b971f70-4f31-11eb-bd01-97bc1429a9ff.png)

aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来
aspectFit: Zoom the image with constant aspect ratio to ensure the long sides of the image can be fully displayed.

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6c4e3a70-4f31-11eb-8ff1-d5dcf8779628.png)

aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来
aspectFill: Zoom the image with constant aspect ratio to ensure the short sides of the image can be fully displayed only.

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6cfbdf90-4f31-11eb-8ff1-d5dcf8779628.png)

top：不缩放图片，只显示图片的顶部区域
top: Don't zoom the image, but show the top area of the image only

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6dd1f440-4f31-11eb-8ff1-d5dcf8779628.png)

bottom：不缩放图片，只显示图片的底部区域
bottom: Don't zoom the image, but show the bottom area of the image only

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/649ee9a0-4f31-11eb-8a36-ebb87efcf8c0.png)

center：不缩放图片，只显示图片的中间区域
center: Don't zoom the image, but show the center area of the image only

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/65495a70-4f31-11eb-8a36-ebb87efcf8c0.png)

left：不缩放图片，只显示图片的左边区域
left: Don't zoom the image, but show the left area of the image only

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/66211cd0-4f31-11eb-bd01-97bc1429a9ff.png)

right：不缩放图片，只显示图片的右边边区域
right: Don't zoom the image, but show the right area of the image only

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/66e55730-4f31-11eb-8a36-ebb87efcf8c0.png)

top left：不缩放图片，只显示图片的左上边区域
top left: Don't zoom the image, but show the top left area of the image only

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/67b614b0-4f31-11eb-bd01-97bc1429a9ff.png)

top right：不缩放图片，只显示图片的右上边区域
top right: Don't zoom the image, but show the top right area of the image only

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6869fb60-4f31-11eb-a16f-5b3e54966275.png)

bottom left：不缩放图片，只显示图片的左下边区域
bottom left: Don't zoom the image, but show the bottom left area of the image only

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/693ed790-4f31-11eb-8a36-ebb87efcf8c0.png)

bottom right：不缩放图片，只显示图片的右下边区域
bottom right: Don't zoom the image, but show the bottom right area of the image only

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6a042360-4f31-11eb-a16f-5b3e54966275.png)
