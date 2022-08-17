<md-translatedByGoogle />
#### 原生组件说明
#### Native component description

小程序和App的vue页面，主体是webview渲染的。为了提升性能，小程序和App的vue页面下部分ui元素，比如导航栏、tabbar、video、map使用了原生控件。这种方式被称为混合渲染。
The main body of the Vue page of the applet and the app is rendered by the webview. In order to improve performance, some UI elements in the lower part of the Vue page of the applet and App, such as the navigation bar, tabbar, video, and map, use native controls. This approach is called hybrid rendering.

虽然提升了性能，但原生组件带来了其他问题：
Although the performance is improved, native components bring in other problems:
1. 前端组件无法覆盖原生控件的层级问题
1. Layer problem that the front-end components fail to cover the native controls
2. 原生组件不能嵌入特殊前端组件(如scroll-view)
2. Native component fails to be embedded into special front-end components (such as scroll-view).
3. 原生控件ui无法灵活自定义
3. Native control ui fails to be flexibly customized
4. 原生控件在Android上，字体会渲染为rom的主题字体，而webview如果不经过单独改造不会使用rom主题字体
4. On Android, the fonts of native control will be rendered as the theme fonts of rom, while webview will not use the theme fonts of rom without additional modification

H5、App的nvue页面，不存在混合渲染的情况，它们或者全部是前端渲染、或者全部是原生渲染，不涉及层级问题。
There exists no hybrid rendering on nvue pages of H5 and App. They are either all front-end rendering or all native rendering, and no layer problem is involved.

``uni-app`` 中原生组件清单如下：
The list of native components in `uni-app` is as follows:
* [map](/component/map)
* [video](/component/video)
* [camera](/component/camera)（仅微信小程序、百度小程序支持）
* [camera](/component/camera) (only supported by WeChat applet and Baidu applet)
* [canvas](/component/canvas)（仅在微信小程序、百度小程序表现为原生组件）
* [canvas](/component/canvas) (only in WeChat applet and Baidu applet as a native component)
* [input](/component/input)（仅在微信小程序、支付宝小程序、字节跳动小程序、飞书小程序、QQ小程序中且input置焦时表现为原生组件，其中支付宝小程序的input仅为text且置焦时才表现为原生组件）
* [input](/component/input) (Only in WeChat applet, Alipay applet, ByteDance applet, Feishu applet, QQ applet, and the input is in focus, it behaves as a native component, among which the Alipay applet The input is only text and it behaves as a native component when it is focused)
* [textarea](/component/textarea)（仅在微信小程序、百度小程序、字节跳动小程序、飞书小程序表现为原生组件）
* [textarea](/component/textarea) (Only in WeChat applet, Baidu applet, ByteDance applet, Feishu applet as a native component)
* [live-player](/component/live-player)（仅微信小程序、百度小程序支持，App端直接使用video组件可同时实现拉流）
* [live-player](/component/live-player) (only supported by WeChat applet and Baidu applet, and the video component can be used directly on the App side to simultaneously pull streams)
* [live-pusher](/component/live-pusher)（仅微信小程序、百度小程序、app-nvue支持，app-vue使用plus.video.LivePusher可实现推流）
* [cover-view](/component/cover-view)
* [cover-image](/component/cover-view?id=cover-image)
* [ad](/component/ad) (仅app、微信小程序、百度小程序、字节跳动小程序、QQ小程序支持)
* [ad](/component/ad) (only supported by app, WeChat applet, Baidu applet, ByteDance applet, and QQ applet)


#### 混合渲染模式下原生组件的使用限制
#### Restrictions on the use of native components in hybrid rendering mode

由于原生组件脱离在 WebView 渲染流程外，因此在使用时有以下限制：
Since native components are detached from the WebView rendering process, there are the following restrictions when using them:

* 原生组件的层级是**最高**的，所以页面中的其他组件无论设置 z-index 为多少，都无法盖在原生组件上。后插入的原生组件可以覆盖之前的原生组件。
* The level of native components is **highest**, so other components on the page cannot be overlaid on native components no matter how much z-index is set. The inserted subsequent native components can cover the previous native components.
* 原生组件无法在 scroll-view、swiper、picker-view、movable-view 中使用。
* Native components cannot be used in scroll-view, swiper, picker-view, and movable-view.
* 同层渲染支持：微信基础库2.4.4起支持了video的同层渲染、微信基础库2.8.3支持map的同层渲染。支持同层渲染后，相关组件的时候不再有层级问题，无需再使用cover-view覆盖，也可以内嵌入swiper等组件。app-nvue 不涉及层级问题，自然所有组件都是同层渲染。
* Same-layer rendering support: Wechat base library 2.4.4 supports same-layer rendering of video, and WeChat base library 2.8.3 supports same-layer rendering of map. After supporting the same layer rendering, there is no longer a hierarchy problem when related components are used, no need to use cover-view to cover, and components such as swiper can also be embedded. app-nvue does not involve hierarchical issues, and naturally all components are rendered in the same layer.
* 需要注意的是，微信原生组件的「同层渲染」能力可能会在特定情况下失效，一方面你需要在开发时稍加注意，另一方面同层渲染失败会触发 ``bindrendererror`` 事件，可在必要时根据该回调做好 UI 的回退。
* It should be noted that the "same-layer rendering" capability of WeChat native components may fail under certain circumstances. On the one hand, you need to pay a little attention during development. On the other hand, the failure of the same-layer rendering will trigger the ``bindrendererror`` event , the UI can be rolled back according to the callback when necessary.

可在组件中监听同层失败回调 bindrendererror 来判断
Judgement can be made by listening to the same layer failure callback bindrendererror in the component
* 部分CSS样式无法应用于原生组件，例如：
* Some CSS styles cannot be applied to the native components. For example:
    * 无法对原生组件设置 CSS 动画；
    * Unable to set CSS animation for native components;
    * 无法定义原生组件为 position: fixed；
    * Unable to define native assembly as position: fixed;
    * 不能在父级节点使用 overflow: hidden 来裁剪原生组件的显示区域。
    * overflow cannot be used in parent node: hidden for cropping the display area of native components.
* 在小程序端真机上，原生组件会遮挡 vConsole 弹出的调试面板。
* On the real device of the applet, the native component will block the debug panel popped up by vConsole.

#### 其他原生界面元素
#### Other native interface elements
除了原生组件外，uni-app在非H5端还有其他原生界面元素，清单如下：
In addition to native components, uni-app has other native interface elements on the non-H5 side, which are listed as follows:
* 原生navigationBar和tabbar（pages.json里配置的）。
* Native navigationBar and tabbar (configured in pages.json).
* web-view组件虽然不是原生的，但这个组件相当于一个原生webview覆盖在页面上，并且小程序上web-view组件是强制全屏的，无法在上面覆盖前端元素
* Although the web-view component is not native, this component is equivalent to a native webview overlaid on the page, and the web-view component on the applet is forced to be full-screen and cannot overlay front-end elements on it
* 弹出框：picker、showModal、showToast、showLoading、showActionSheet、previewImage、chooseImage、chooseVideo等弹出元素也无法被前端组件覆盖
* Pop-up box: Pop-up elements such as picker, showModal, showToast, showLoading, showActionSheet, previewImage, chooseImage, chooseVideo and so on cannot be covered by front-end components.
* plus下的plus.nativeObj.view、plus.video.LivePusher、plus.nativeUI、plus.webview，层级均高于前端元素
* plus.nativeObj.view, plus.video.LivePusher, plus.nativeUI, plus.webview under plus are all higher than front-end elements

注意：app的nvue页面里的组件虽然不涉及map、video等原生组件的层级遮挡问题，但pages.json中配置的原生tabbar、原生navigationBar，一样是nvue里的组件也无法遮挡的。
Note: Although the components on the nvue page of the app do not involve the layer mask problem of map, video and other native components, the native tabbar and native navigationBar configured in pages.json cannot be covered by the components in nvue either.

#### vue页面层级覆盖解决方案
#### Solution to vue page layer cover

为了解决webview渲染中原生组件层级最高的限制，uni-app提供了 [cover-view](/component/cover-view) 和 [cover-image](/component/cover-view?id=cover-image) 组件，让其覆盖在原生组件上。
In order to solve the limitation of the highest level of native components in webview rendering, uni-app provides [cover-view](/component/cover-view) and [cover-image](/component/cover-view?id=cover-image) components to cover the native components.

除了跨端的cover-view，App端还提供了3种方案：plus.nativeObj.view、subNVue、新开半透明nvue页面。详述如下
In addition to the cross-end cover-view, the App side also provides 3 solutions: plus.nativeObj.view, subNVue, and the newly opened translucent nvue page. Details are as follows

- [cover-view](https://uniapp.dcloud.io/component/cover-view?id=cover-view)

`cover-view`只能覆盖原生组件，不能覆盖其他原生界面元素。比如cover-view可以覆盖video、map，但无法覆盖原生导航栏、tabbar、web-view。
`cover-view` can only cover native components, not other native interface elements. For example, cover-view can cover video and map, but not native navigation bar, tabbar and web-view.

微信小程序在基础库 2.4.0 起已支持 video 组件的同层渲染，2.7.0 起支持 map 组件的同层渲染。可以被前端元素通过调节zindex来遮挡，也支持在scroll-view等组件中内嵌这2个原生组件。但video全屏时，仍需要cover-view覆盖。
The WeChat applet has supported the same-layer rendering of the video component since the base library 2.4.0, and the same-layer rendering of the map component since 2.7.0. It can be occluded by front-end elements by adjusting zindex, and it also supports embedding these two native components in components such as scroll-view. But when the video is full screen, the cover-view overlay is still required.

app-vue的`cover-view`相比小程序端还有一些限制，1) 无法嵌套、 2) 无法内部滚动，即cover-view无法内部出现滚动条、 3) 无法覆盖到视频的全屏界面。
The `cover-view` of app-vue has some limitations compared to the applet, 1) it cannot be nested, 2) it cannot scroll internally, that is, the cover-view cannot have scroll bars inside, 3) it cannot cover the full-screen interface of the video .
app-nvue的`cover-view`无这些限制。
App-nvue's `cover-view` does not have these restrictions.

另外cover-view无论如何都无法解决原生导航栏、tabbar、web-view组件的覆盖，为此App端补充了2个层级覆盖方案plus.nativeObj.view和subNVue
In addition, cover-view cannot solve the coverage of native navigation bar, tabbar, and web-view components anyway. To this end, two levels of coverage schemes plus.nativeObj.view and subNVue are added to the App side.

- [plus.nativeObj.view](https://www.html5plus.org/doc/zh_cn/nativeobj.html#plus.nativeObj.View)

简称nview，它是一个原生的类画布的控件，其实cover-view也是用plus.nativeObj.view封装的。API文档详见：[https://www.html5plus.org/doc/zh_cn/nativeobj.html#plus.nativeObj.View](https://www.html5plus.org/doc/zh_cn/nativeobj.html#plus.nativeObj.View)
Referred to as nview, it is a native canvas-like control. In fact, cover-view is also encapsulated with plus.nativeObj.view. See the API documentation for details: [https://www.html5plus.org/doc/zh_cn/nativeobj.html#plus.nativeObj.View](https://www.html5plus.org/doc/zh_cn/nativeobj.html#plus .nativeObj.View)

plus.nativeObj.view的API比较原生，可以画出任何界面，但plus.nativeObj.view有3个问题：1. api很底层，开发比较复杂；2. 不支持动画；3. 不支持内部滚动。
The API of plus.nativeObj.view is relatively native and can draw any interface, but plus.nativeObj.view has 3 problems: 1. The API is very low-level and the development is more complicated; 2. It does not support animation; 3. It does not support internal scrolling.

- [subNVue](https://ask.dcloud.net.cn/article/35948)

subNVue是原生渲染的nvue子窗体，把一个nvue页面以半屏的方式覆盖在vue页面上。它解决了plus.nativeObj.view的不足，提供了强大的层级问题解决方案。subNVue的详细介绍见：[https://ask.dcloud.net.cn/article/35948](https://ask.dcloud.net.cn/article/35948)
subNVue is a natively rendered nvue sub-form, which overlays an nvue page on the vue page in a half-screen manner. It solves the shortcomings of plus.nativeObj.view and provides a powerful solution to the hierarchical problem. For a detailed introduction of subNVue, see: [https://ask.dcloud.net.cn/article/35948](https://ask.dcloud.net.cn/article/35948)

- [弹出部分区域透明的nvue页面](https://ext.dcloud.net.cn/plugin?id=953)
- [A partially transparent nvue page pops up](https://ext.dcloud.net.cn/plugin?id=953)

uni-app支持在App端弹出半透明的nvue窗体。即看起来是在本窗体弹出一个元素，但实际上是弹出了一个部分区域蒙灰透明的新窗体。这样的窗体比subnvue有个优势就是可以全局复用。具体参考这个[插件](https://ext.dcloud.net.cn/plugin?id=953)
uni-app supports the semi-transparent nvue window popped up at the app side. That is to say, it seems that an element pops up on this window, but actually a new window with partial areas being gray and transparent pops up. Such window has an advantage over subnvue in that it can be reused globally. For details, please refer to this [plug-in](https://ext.dcloud.net.cn/plugin?id=953)

subNVue或弹出部分区域透明的nvue页面，会比plus.nativeObj.view多占用一些内存。所以如果你要覆盖的内容很简单，cover-view或plus.nativeObj.view可以简单实现的话，就没必要用subNVue或nvue。
subNVue or pop-up nvue pages with transparent parts will take up more memory than plus.nativeObj.view. So if the content you want to cover is very simple, and cover-view or plus.nativeObj.view can be easily implemented, there is no need to use subNVue or nvue.

所以如果你的层级覆盖问题比较简单，不用嵌套，且有跨端需求，就使用cover-view。
Therefore, if you have a simple layer cover problem, without requirement for nesting but cross-ending, the cover-view is applicable.

如果App端cover-view无法满足需求，且需要覆盖的原生界面比较简单，可以用plus.nativeObj.view。否则，就使用subnvue或部分区域透明的nvue吧。
If the cover-view on the App side cannot meet the requirements and the native interface to be covered is relatively simple, you can use plus.nativeObj.view. Otherwise, use subnvue or partially transparent nvue.

**关于subNVue和Webview的层级问题**
**On the level of subNVue and Webview**
subNVue的层级高于前端元素，但多个subNVue以及Webview，它们之间的也存在层级关系。
SubNVue has a higher level than the front-end element, but there is also a level relationship between several subNVue and Webview.

默认规则是，先创建的subNVue或webview在底部，后创建的会盖住之前的。
The default rule is that the subNVue or webview created first is at the bottom, and the one created subsequently will cover the previous one.

当然每个subNVue和webview，都支持Style参数配置，其中有一个zindex属性，可以调节它们的层级。
Both subNVue and webview, of course, support Style parameter configuration, which has a zindex attribute to adjust their layers.


#### App的nvue页面层级问题
#### The layer problems of nvue page in App
nvue页面全部都是原生组件，互相之间没有层级问题。
nvue pages are all of native components, and there is no layer problem among them.

但如果在pages.json里注册了原生导航栏和tabbar，nvue里的界面元素默认也无法覆盖这些，也需要plus.nativeObj.view或subNVue。
However, if the native navigation bar and tabbar are registered in pages.json, the interface elements in nvue cannot cover these by default, and plus.nativeObj.view or subNVue is also required.

如果仅开发App，不跨端，不愿涉及层级问题，也可以不使用pages.json里的原生导航栏和tabbar，nvue页面不需要这些来强化性能。
If you develop App only without cross-ending or layer problems, you can skip the native navigation bar and tabbar in pages.json. nvue pages do not need these to enhance performance.

#### Android系统主题字体对原生组件渲染的影响
#### Influence of Android system theme fonts on native components rendering

在Android手机上，调整系统主题字体，所有原生渲染的控件的字体都会变化，而webview渲染的字体则不一定会变化，有的rom的系统webview会跟随变，有的不会变。
On Android phone, if the system theme fonts is adjusted, the fonts of all native rendered controls will change, while those rendered by webview will not necessarily change. The system webview of some roms will change accordingly, while others will not.

对于webview字体不会跟随rom变的情况，如果原生渲染和webview渲染出现在同一页面，就会发现字体不一致。
For the case that the webview fonts will not change with rom, once the native rendering and the webview rendering appear on the same page, you will find the fonts inconsistent.

部分小程序通过修改了自带的webview内核，实现了webview也可以使用rom主题字体，比如微信、qq、支付宝。
Some small programs have modified the built-in webview kernel to realize that the webview can also use rom theme fonts, such as WeChat, QQ, Alipay.

app-nvue因为是原生渲染，没有字体不一致的问题。而app-vue下，在某些rom下，webview字体与系统字体不一致。
app-nvue has no fonts inconsistency because it is native rendering. While under app-vue, the webview fonts is inconsistent with system fonts under some roms.

app端遇到字体不一致，有2种方案：
There are two solutions for inconsistent font on app side:
1. 直接使用nvue。nvue是纯原生渲染，不存在webview渲染和原生字体不一致的问题。
1. Use nvue directly. nvue provides pure native rendering without inconsistency problem between webview rendering and native fonts.
2. app端不使用系统webview，而是使用x5浏览器内核，x5是处理过的，可以跟随系统字体的。详见：[https://ask.dcloud.net.cn/article/36806](https://ask.dcloud.net.cn/article/36806)
2. The app side does not use system webview, but the x5 browser engine, which has been optimized and can change along with the font of the system. For details, please see: [https://ask.dcloud.net.cn/article/36806](https://ask.dcloud.net.cn/article/36806)
