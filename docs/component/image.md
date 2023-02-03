#### image

图片。
picture.

|属性名|类型|默认值|说明|平台差异说明|
|Property Name|Type|Default Value|Description|Platform Difference Description|
|:-|:-|:-|:-|:-|
|src|String||图片资源地址||
| src| String||image resource address||
|mode|String|'scaleToFill'|图片裁剪、缩放的模式|<div style="width:68px;"></div>|
| mode| String|'scaleToFill'|Image cropping and scaling mode|<div style="width:68px;"></div>|
|lazy-load|Boolean|false|图片懒加载。只针对page与scroll-view下的image有效|微信小程序、百度小程序、字节跳动小程序、飞书小程序|
| lazy-load| Boolean| false|Lazy loading of images. Only valid for images under page and scroll-view|WeChat MiniApp, Baidu MiniApp, ByteDance MiniApp, Feishu MiniApp|
|fade-show|Boolean|true|图片显示动画效果|仅App-nvue 2.3.4+ Android有效|
| fade-show| Boolean| true|Image display animation effect|Only valid for App-nvue 2.3.4+ Android|
|webp|boolean|false|在系统不支持webp的情况下是否单独启用webp。默认false，只支持网络资源。webp支持详见下面说明|微信小程序2.9.0|
| webp| boolean| false|Whether to enable webp alone if the system does not support webp. The default is false, only network resources are supported. For webp support, please refer to the description below|WeChat MiniApp 2.9.0|
|show-menu-by-longpress|boolean|false|开启长按图片显示识别小程序码菜单|微信小程序2.7.0|
| show-menu-by-longpress| boolean| false|Enable long press on the picture to display the recognition MiniApp code menu|WeChat MiniApp 2.7.0|
|draggable|boolean|true|是否能拖动图片|H5 3.1.1+、App（iOS15+）|
| draggable| boolean| true|Whether images can be dragged| H5 3.1.1+, App (iOS15+)|
|@error|HandleEvent||当错误发生时，发布到 AppService 的事件名，事件对象event.detail = {errMsg: 'something wrong'}||
|@error| HandleEvent||When an error occurs, the event name published to AppService, event object event.detail = {errMsg: 'something wrong'}||
|@load|HandleEvent||当图片载入完毕时，发布到 AppService 的事件名，事件对象event.detail = {height:'图片高度px', width:'图片宽度px'}|&nbsp;|
|@load| HandleEvent||The name of the event published to the AppService when the image is loaded, the event object event.detail = {height:'image height in px', width:'image width in px'}|&nbsp;|

**Tips**

- `<image>` 组件默认宽度 320px、高度 240px；`app-nvue平台，暂时默认为屏幕宽度、高度 240px；`
- The `<image>` component has a default width of 320px and a height of 240px; `app-nvue platform, temporarily defaults to the screen width and height of 240px;`
- `src` 仅支持相对路径、绝对路径，支持 base64 码；
- `src` only supports relative paths, absolute paths, and supports base64 code;
- 页面结构复杂，css样式太多的情况，使用 image 可能导致样式生效较慢，出现 “闪一下” 的情况，此时设置 `image{will-change: transform}` ,可优化此问题。
- When the page structure is complex and there are too many css styles, using image may cause the style to take effect slowly, and there will be a "flicker" situation. At this time, setting `image{will-change: transform}` can optimize this problem.
- 自定义组件里面使用 `<image>`时，若 `src` 使用相对路径可能出现路径查找失败的情况，故建议使用绝对路径。
- When using `<image>` in a custom component, if `src` uses a relative path, the path search may fail, so it is recommended to use an absolute path.
- svg 格式的图片在不同的平台支持情况不同。具体为：app-nvue 不支持 svg 格式的图片，小程序上只支持网络地址。
- Pictures in svg format are supported differently on different platforms. Specifically: app-nvue does not support pictures in svg format, and the MiniApp only supports network addresses.

- webp图片支持详解
- Detailed explanation of webp image support
  * Android4以上（含）、iOS14以上（含）系统内置支持webp，此时，不管web、小程序、app，也不管vue还是nvue都可以直接使用webp；
  * Android4 or above (inclusive), iOS14 or above (inclusive) systems have built-in support for webp, at this time, no matter web, MiniApp, app, or vue or nvue, you can directly use webp;
  * iOS14以下，app-vue下，iOS不支持；app-nvue下，iOS支持；微信小程序2.9.0起，配置属性webp为true时iOS支持；
  * Below iOS14, under app-vue, iOS does not support; under app-nvue, iOS supports; from WeChat MiniApp 2.9.0, iOS supports when the configuration attribute webp is true;
  * pc浏览器上，webp在不同浏览器的支持详见：[https://caniuse.com/?search=webp](https://caniuse.com/?search=webp)
  * On PC browsers, see webp support in different browsers: [https://caniuse.com/?search=webp](https://caniuse.com/?search=webp)


**mode 有效值：**
**mode Valid values:**

mode 有 14 种模式，其中 5 种是缩放模式，9 种是裁剪模式。
mode There are 14 modes, 5 of which are scaling modes and 9 are cropping modes.

|模式|值|说明|
|mode|value|description|
|:-|:-|:-|
|缩放|scaleToFill|不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素|
|Scale| scaleToFill|Scales the image without maintaining the aspect ratio, so that the width and height of the image are completely stretched to fill the image element|
|缩放|aspectFit|保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。|
|Scale| aspectFit|Scales the image maintaining the aspect ratio so that the long side of the image is fully displayed. That is to say, the picture can be displayed completely. |
|缩放|aspectFill|保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。|
|Zoom| aspectFill|Scale the image while maintaining the aspect ratio, so that only the short side of the image is fully displayed. That is, the picture is usually only complete in the horizontal or vertical direction, and interception will occur in the other direction. |
|缩放|widthFix|宽度不变，高度自动变化，保持原图宽高比不变|
|Zoom| widthFix|Width remains unchanged, height changes automatically, keep original image aspect ratio unchanged|
|缩放|heightFix|高度不变，宽度自动变化，保持原图宽高比不变 **App 和 H5 平台 HBuilderX 2.9.3+ 支持、微信小程序需要基础库 2.10.3**|
|Zoom| heightFix|The height remains unchanged, the width changes automatically, and the aspect ratio of the original image remains unchanged**App and H5 platform HBuilderX 2.9.3+ support, WeChat MiniApp requires basic library 2.10.3**|
|裁剪|top|不缩放图片，只显示图片的顶部区域|
|Crop| top|Does not scale the image, only shows the top area of the image|
|裁剪|bottom|不缩放图片，只显示图片的底部区域|
|Crop| bottom|Does not scale the image, only shows the bottom area of the image|
|裁剪|center|不缩放图片，只显示图片的中间区域|
|cropping| center|does not scale the picture, only shows the middle area of the picture|
|裁剪|left|不缩放图片，只显示图片的左边区域|
|Crop| left|Do not zoom the image, only display the left area of the image|
|裁剪|right|不缩放图片，只显示图片的右边区域|
|Crop| right|Does not scale the picture, only shows the right area of the picture|
|裁剪|top left|不缩放图片，只显示图片的左上边区域|
|Crop| top left|Do not zoom the picture, only display the top left area of the picture|
|裁剪|top right|不缩放图片，只显示图片的右上边区域|
|Crop| top right|Do not zoom the image, only show the upper right area of the image|
|裁剪|bottom left|不缩放图片，只显示图片的左下边区域|
|Crop| bottom left|Do not zoom the image, only display the lower left area of the image|
|裁剪|bottom right|不缩放图片，只显示图片的右下边区域|
|Crop| bottom right|Does not zoom the picture, only shows the bottom right area of the picture|

**示例：** [查看示例](https://hellouniapp.dcloud.net.cn/pages/component/image/image)
**Example:** [View Example](https://hellouniapp.dcloud.net.cn/pages/component/image/image)
 
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
            src: 'https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg'
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
original image

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg)

scaleToFill：不保持纵横比缩放图片，使图片完全适应
scaleToFill: Scale the picture without maintaining the aspect ratio, so that the picture fits perfectly

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/cat-1.png)

aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来
aspectFit: Keep the aspect ratio to scale the picture so that the long side of the picture can be fully displayed

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/cat-2.png)

aspectFill：保持纵横比缩放图片，只保证图片的短边能完全显示出来
aspectFill: Keep the aspect ratio to zoom the picture, only ensure that the short side of the picture can be fully displayed

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/cat-3.png)

top：不缩放图片，只显示图片的顶部区域
top: Do not zoom the image, only display the top area of the image

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/cat-4.png)

bottom：不缩放图片，只显示图片的底部区域
bottom: Do not zoom the image, only display the bottom area of the image

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/cat-5.png)

center：不缩放图片，只显示图片的中间区域
center: Do not zoom the picture, only display the middle area of the picture

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/cat-6.png)

left：不缩放图片，只显示图片的左边区域
left: Do not zoom the image, only display the left area of the image

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/cat-7.png)

right：不缩放图片，只显示图片的右边边区域
right: Do not zoom the image, only display the right area of the image

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/cat-8.png)

top left：不缩放图片，只显示图片的左上边区域
top left: Do not zoom the image, only display the upper left area of the image

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/cat-9.png)

top right：不缩放图片，只显示图片的右上边区域
top right: Do not zoom the image, only display the upper right area of the image

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/cat-10.png)

bottom left：不缩放图片，只显示图片的左下边区域
bottom left: Do not zoom the image, only display the lower left area of the image

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/cat-11.png)

bottom right：不缩放图片，只显示图片的右下边区域
bottom right: Do not zoom the image, only display the lower right area of the image

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/cat-12.png)
