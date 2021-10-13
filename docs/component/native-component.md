#### 原生组件说明

App的vue页面，主体是webview渲染的。为了提升性能，App的vue页面下部分ui元素，比如导航栏、tabbar、video、map使用了原生控件。这种方式被称为混合渲染。

虽然提升了性能，但原生组件带来了其他问题：
1. 前端组件无法覆盖原生控件的层级问题
2. 原生组件不能嵌入特殊前端组件(如scroll-view)
3. 原生控件ui无法灵活自定义
4. 原生控件在Android上，字体会渲染为rom的主题字体，而webview如果不经过单独改造不会使用rom主题字体

H5、App的nvue页面，不存在混合渲染的情况，它们或者全部是前端渲染、或者全部是原生渲染，不涉及层级问题。

``uni-app`` 中原生组件清单如下：
* [map](/component/map)
* [video](/component/video)
* [live-player](/component/live-player)（仅App端直接使用video组件可同时实现拉流）
* [live-pusher](/component/live-pusher)（仅app-nvue支持）
* [cover-view](/component/cover-view)
* [cover-image](/component/cover-view?id=cover-image)



#### 混合渲染模式下原生组件的使用限制

由于原生组件脱离在 WebView 渲染流程外，因此在使用时有以下限制：

* 原生组件的层级是**最高**的，所以页面中的其他组件无论设置 z-index 为多少，都无法盖在原生组件上。后插入的原生组件可以覆盖之前的原生组件。
* 原生组件无法在 scroll-view、swiper、picker-view、movable-view 中使用。
* app-nvue 不涉及层级问题，自然所有组件都是同层渲染。


可在组件中监听同层失败回调 bindrendererror 来判断
* 部分CSS样式无法应用于原生组件，例如：
    * 无法对原生组件设置 CSS 动画；
    * 无法定义原生组件为 position: fixed；
    * 不能在父级节点使用 overflow: hidden 来裁剪原生组件的显示区域。

#### 其他原生界面元素
除了原生组件外，uni-app在非H5端还有其他原生界面元素，清单如下：
* 原生navigationBar和tabbar（pages.json里配置的）。
* web-view组件虽然不是原生的，但这个组件相当于一个原生webview覆盖在页面上
* 弹出框：picker、showModal、showToast、showLoading、showActionSheet、previewImage、chooseImage、chooseVideo等弹出元素也无法被前端组件覆盖

注意：app的nvue页面里的组件虽然不涉及map、video等原生组件的层级遮挡问题，但pages.json中配置的原生tabbar、原生navigationBar，一样是nvue里的组件也无法遮挡的。

#### vue页面层级覆盖解决方案

为了解决webview渲染中原生组件层级最高的限制，uni-app提供了 [cover-view](/component/cover-view) 和 [cover-image](/component/cover-view?id=cover-image) 组件，让其覆盖在原生组件上。

除了跨端的cover-view，App端还提供了几种方案：subNVue、新开半透明nvue页面。详述如下

- [cover-view](https://uniapp.dcloud.io/component/cover-view?id=cover-view)

`cover-view`只能覆盖原生组件，不能覆盖其他原生界面元素。比如cover-view可以覆盖video、map，但无法覆盖原生导航栏、tabbar、web-view。


app-vue的`cover-view`还有一些限制，1) 无法嵌套、 2) 无法内部滚动，即cover-view无法内部出现滚动条、 3) 无法覆盖到视频的全屏界面。
app-nvue的`cover-view`无这些限制。

另外cover-view无论如何都无法解决原生导航栏、tabbar、web-view组件的覆盖，为此App端补充了一些层级覆盖方案

- [subNVue](https://ask.dcloud.net.cn/article/35948)

subNVue是原生渲染的nvue子窗体，把一个nvue页面以半屏的方式覆盖在vue页面上。提供了强大的层级问题解决方案。subNVue的详细介绍见：[https://ask.dcloud.net.cn/article/35948](https://ask.dcloud.net.cn/article/35948)

- [弹出部分区域透明的nvue页面](https://ext.dcloud.net.cn/plugin?id=953)

uni-app支持在App端弹出半透明的nvue窗体。即看起来是在本窗体弹出一个元素，但实际上是弹出了一个部分区域蒙灰透明的新窗体。这样的窗体比subnvue有个优势就是可以全局复用。具体参考这个[插件](https://ext.dcloud.net.cn/plugin?id=953)

subNVue或弹出部分区域透明的nvue页面，会多占用一些内存。所以如果你要覆盖的内容很简单，cover-view可以简单实现的话，就没必要用subNVue或nvue。

所以如果你的层级覆盖问题比较简单，不用嵌套，且有跨端需求，就使用cover-view。

**关于subNVue和Webview的层级问题**
subNVue的层级高于前端元素，但多个subNVue以及Webview，它们之间的也存在层级关系。

默认规则是，先创建的subNVue或webview在底部，后创建的会盖住之前的。

当然每个subNVue和webview，都支持Style参数配置，其中有一个zindex属性，可以调节它们的层级。


#### App的nvue页面层级问题
nvue页面全部都是原生组件，互相之间没有层级问题。

但如果在pages.json里注册了原生导航栏和tabbar，nvue里的界面元素默认也无法覆盖这些，也需要subNVue。

如果仅开发App，不跨端，不愿涉及层级问题，也可以不使用pages.json里的原生导航栏和tabbar，nvue页面不需要这些来强化性能。

#### Android系统主题字体对原生组件渲染的影响

在Android手机上，调整系统主题字体，所有原生渲染的控件的字体都会变化，而webview渲染的字体则不一定会变化，有的rom的系统webview会跟随变，有的不会变。

对于webview字体不会跟随rom变的情况，如果原生渲染和webview渲染出现在同一页面，就会发现字体不一致。

app-nvue因为是原生渲染，没有字体不一致的问题。而app-vue下，在某些rom下，webview字体与系统字体不一致。

app端遇到字体不一致，有2种方案：
1. 直接使用nvue。nvue是纯原生渲染，不存在webview渲染和原生字体不一致的问题。
2. app端不使用系统webview，而是使用x5浏览器内核，x5是处理过的，可以跟随系统字体的。详见：[https://ask.dcloud.net.cn/article/36806](https://ask.dcloud.net.cn/article/36806)
