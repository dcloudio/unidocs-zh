#### 运行原理
#### Operation principle

##### 逻辑层和视图层分离，且非H5端通信有折损
##### The logic layer and the view layer are separated, and there will be communication loss on non-H5 sides

``uni-app`` 在非H5端运行时，从架构上分为逻辑层和视图层两个部分。逻辑层负责执行业务逻辑，也就是运行js代码，视图层负责页面渲染。
When `uni-app` runs on the non-H5 side, it is divided into two parts: logic layer and view layer. The logic layer executes business logic, i.e., running js code, while the view layer executes page rendering.

虽然开发者在一个vue页面里写js和css，但其实，编译时就已经将它们拆分了。
Although developers write js and css in a vue page, they actually have been split while being compiled.

###### 逻辑层详解
###### Logic layer details

逻辑层是运行在一个独立的jscore里的，它不依赖于本机的webview，所以一方面它没有浏览器兼容问题，可以在Android4.4上跑es6代码，另一方面，它无法运行window、document、navigator、localstorage等浏览器专用的js API。
The logic layer runs in an independent jscore instead of depending on the webview of the native computer. On the one hand, it does not have the problem of browser compatibility, and can run es6 code on Android4.4; on the other hand, it can't run browser-specific js API in browsers such as window, document, navigator and localstorage.

`jscore`就是一个标准js引擎，标准js是可以正常运行的，比如if、for、各种字符串、日期处理等。js和浏览器的区别要注意区分开来。
`jscore` is a standard js engine, standard js can run normally, such as if, for, various strings, date processing, etc. The difference between js and browser should be distinguished.
- 所谓浏览器的js引擎，就是jscore或v8的基础上新增了一批浏览器专用API，比如dom；
- The so-called js engine of browser means to add a number of browser-specific API, such as dom, on the basis of jscore or v8.
- node.js引擎，则是v8基础上补充一些电脑专用API，比如本地io；
- node.js engine means to supplement some computer-specific API on the basis of v8, such as local io;
- 那么uni-app的App端和小程序端的js引擎，其实是在jscore上补充了一批手机端常用的JS API，比如扫码。
- Then the js engine on the App side and the applet side of uni-app actually supplements jscore with a number of JS APIs commonly used on the mobile phone side, such as scanning code.

<div>
	<img src="https://img.cdn.aliyun.dcloud.net.cn/uni-app/jscore.jpg" style="max-width:500px"></img>
</div>

###### 视图层详解
###### View layer details

h5和小程序平台，以及app-vue，视图层是webview。而app-nvue的视图层是基于weex改造的原生渲染视图。
h5 and applet platforms, as well as app-vue, the view layer is webview. The view layer of app-nvue is a native rendering view based on weex transformation.

关于webview，在iOS上，只能使用iOS提供的Webview（默认是WKWebview）。它有一定的浏览器兼容问题，iOS版本不同，它的表现有细微差异（一般可忽略）。
With regard to webview, you can only use webview provided by iOS on iOS (the default value is WKWebview). It has some browser compatibility problems, and its performance is slightly different (generally negligible) due to different iOS versions.

Android上小程序大多自带了一个几十M的chromium webview，而App端没办法带这么大体积的三方包，所以App端默认使用了Android system webview，这个系统webview跟随手机不同而有差异。当然App端也支持使用腾讯X5引擎，此时可以在Android端统一视图层。
Most small programs on Android come with a chromium webview of dozens of megabytes, and the App side cannot carry such a large three-party package, so the App side uses the Android system webview by default, and the system webview varies with the mobile phone. Of course, the App side also supports the use of the Tencent X5 engine. At this time, the view layer can be unified on the Android side.

所以uni-app的js基本没有不同手机的兼容问题（因为js引擎自带了），而视图层的css，在app-vue上使用系统webview时会有手机浏览器的css兼容问题。此时或者不要用太新的css语法，或者集成腾讯x5引擎。
Therefore, js of uni-app basically has no compatibility problem with different mobile phones (because the js engine comes with it), while the css in the view layer will have compatibility problems with the css of mobile browsers when using system webview on app-vue. At this time, either don not use too new css syntax or integrate Tencent x5 engine.

###### 逻辑层和视图层分离的利与弊
###### Pros and cons of separation of logic layer and view layer

逻辑层和视图层分离，好处是js运算不卡渲染，最简单直接的感受就是：窗体动画稳。
The advantage of separating the logic layer from the view layer is that js operation does not stagnate rendering. The simplest and most direct feeling is that the window animation is stable.

如果开发者使用过App，应该有概念，webview新窗体一边做进入动画，一边自身渲染，很容易卡动画。而uni-app则无需写预载代码，新窗体渲染快且动画稳定。
If developers have used App, they should have the idea that if making the entry animation and rendering itself at the same time, the new webview window is very likely to stagnate animation. uni-app, on the other hand, does not need to write preload code, and the new window is rendered quickly and the animation is stable.

但是两层分离也带来一个坏处，这两层互相通信，其实是有损耗的。
However, the separation of the two layers also brings a disadvantage, that is, it will cause loss while the two layers communicate with each other.

iOS还好，但Android低端机上，每次通信都要耗时几十毫秒。平时看不出来影响，但有几个场景表现明显。
It is not so bad for iOS, but for Android low-end phones, every communication takes tens of milliseconds. The effect is usually not visible, but it is very obvious in some scenarios.

1. 连续高帧率绘制canvas动画，会发现还不如webview内部绘制流畅
1. If you draw canvas animation at high frame rate continuously, you will find that it is not as smooth as drawing inside webview
2. 视图层滚动、跟手操作，不停反馈给逻辑层，js再处理逻辑并通知视图层做对应更新。此时会发现交互不跟手或卡
2. The view layer scrolls, operates with hands, and feeds back to the logic layer continuously, then js processes the logic and informs the view layer to make corresponding updates. At this time, you may find that the interaction does not follow the hands or gets stuck

不管小程序还是app，不管app-vue还是app-nvue，都有这个两层通信损耗的问题。
No matter the applet or the app, whether the app-vue or the app-nvue, there is the problem of this two-layer communication loss.

解决这类问题，在webview渲染和原生渲染引用了不同的做法：
To solve this kind of problem, different methods are referenced in webview rendering and native rendering:

- webview渲染的视图层
- View layer of webview rendering

在app-vue和微信小程序上，提供了一种运行于视图层的专属js，微信叫做[wxs](https://uniapp.dcloud.io/tutorial/miniprogram-subject.html#wxs)。
On app-vue and WeChat applet, a dedicated js running on the view layer is provided, and WeChat is called [wxs](https://uniapp.dcloud.io/tutorial/miniprogram-subject.html#wxs).

wxs中可以监听手势，以uni ui的swiperAction组件为例，手指拖动，侧边的列表菜单项要跟手滑出，此时就需要使用wxs才能实现流畅效果。还有插件市场里一些自定义下拉刷新的插件，通过wxs实现了更高的性能体验。
Gestures can be monitored in wxs. Take the swiperAction component of uni ui as an example. When you drag your finger, the list menu items on the side must slide out with your hand. At this time, you need to use wxs to achieve a smooth effect. There are also some custom pull-to-refresh plug-ins in the plug-in market, which achieve a higher performance experience through wxs.

uni-app支持把wxs编译到微信小程序、App和H5中。
uni-app supports compiling wxs into WeChat applet, App and H5.

微信里对wxs限制较多，只能实现有限的功能。app端提供了更强大的[renderjs](https://uniapp.dcloud.io/tutorial/renderjs.html)，并兼容到H5平台。
There are many restrictions on wxs in WeChat, and only limited functions can be realized. The app side provides a more powerful [renderjs](https://uniapp.dcloud.io/tutorial/renderjs.html), which is compatible with the H5 platform.

比如canvas动画，微信的canvas无法通过wxs操作，js不停绘制canvas动画因通信折损而无法流畅。uni-app的app-vue里的canvas对象设计在webview视图层的，通过renderjs可以在视图层直接操作canvas动画，将不再有通信折损，实现更流畅的效果，详见：[renderjs](https://uniapp.dcloud.io/tutorial/renderjs.html)
For example, canvas animation, WeChat's canvas cannot be operated through wxs, and js keeps drawing canvas animation and cannot be smooth due to communication loss. The canvas object in the app-vue of uni-app is designed in the webview view layer. Through renderjs, you can directly operate the canvas animation in the view layer, there will be no communication loss, and a smoother effect will be achieved. For details, see: [renderjs]( https://uniapp.dcloud.io/tutorial/renderjs.html)

- 原生渲染的视图层
- View layer for native rendering

在app-nvue里，逻辑层和视图层的折损一样存在。包括react native也有这个问题。所以也千万别以为原生渲染就多么高级。
In app-nvue, loss exists in both logic layer and view layer. react native has this problem too. It can be seen that native rendering is not that advanced.

weex提供了一套[bindingx](https://uniapp.dcloud.io/tutorial/nvue-api?id=nvue-%e9%87%8c%e4%bd%bf%e7%94%a8-bindingx)机制，可以在js里一次性传一个表达式给原生层，由原生层解析后根据指令操作原生的视图层，避免反复跨层通信。这个技术在uni-app里也可以使用。
weex provides a set of [bindingx](https://uniapp.dcloud.io/tutorial/nvue-api?id=nvue-%e9%87%8c%e4%bd%bf%e7%94%a8-bindingx) Mechanism, you can pass an expression in js to the native layer at one time, after parsing by the native layer, operate the native view layer according to the instructions, avoiding repeated cross-layer communication. This technique can also be used in uni-app.

bindingx作为一种表达式，它的功能不及js强大，但手势监听、动画还是可以实现的，比如uni ui的swiperAction组件在app-nvue下运行时会自动启用bindingx，以实现流畅跟手。
Bindingx, as a kind of expression, is not as powerful as js, but it can still implement gesture listening to and animation. For example, uni ui's swiperAction component will automatically enable bindingx when running under app-nvue to achieve smooth follow-hand experience.

###### app-vue和小程序的数据更新，分页面级和组件级
###### App-vue and applet data update, page level and component level

对于复杂页面，更新某个区域的数据时，需要把这个区域做成组件，这样更新数据时就只更新这个组件，否则会整个页面的数据更新，造成点击延迟卡顿。
For complex pages, when updating data in a certain area, you need to make this area a component, so that only this component is updated when updating data, otherwise the data of the entire page will be updated, causing click delays to be stuck.

比如微博长列表页面，点击一个点赞图标，赞数要立即+1，此时这个点赞按钮一定要做成组件。否则这个+1会引发页面级所有数据的从js层向视图层的同步。
For example, on the Weibo long list page, if you click a like icon, the number of likes should be +1 immediately. At this time, the like button must be made into a component. Otherwise this +1 will cause synchronization of all data at the page level from the js layer to the view layer.

app-nvue和h5不存在此问题。造成差异的原因是小程序目前只提供了组件差量更新的机制，不能自动计算所有页面差量。
app-nvue and h5 do not have this problem. The reason for the difference is that the applet currently only provides a mechanism for component delta update, and cannot automatically calculate all page deltas.

#### 优化建议
#### Optimization suggestion

##### 避免使用大图
##### Avoid the use of large images

页面中若大量使用大图资源，会造成页面切换的卡顿，导致系统内存升高，甚至白屏崩溃。
If a large number of large image resources are used in the page, the switching of pages will be stagnated, and the system memory will increase, even crash with a white screen.

尤其是不要把多张大图缩小后显示在一个屏幕内，比如上传图片前选了数张几M体积的照片，然后缩小在一个屏幕中展示多张几M的大图，非常容易白屏崩溃。
In particular, do not display multiple large images on one screen after being reduced. For example, if you select a few megabytes of photos before uploading the images, and then zoom them out to display on one screen, it is very easy to crash the white screen.

对大体积的二进制文件进行base64，也非常耗费资源。
Converting large-volume binary files to base64 is of extremely resource-consuming.

##### 优化数据更新
##### Optimize data updates

在 ``uni-app`` 中，定义在 data 里面的数据每次变化时都会通知视图层重新渲染页面。所以如果不是视图所需要的变量，可以不定义在 data 中，可在外部定义变量或直接挂载在vue实例上，以避免造成资源浪费。
In `uni-app`, every time the data defined in data changes, the view layer will be notified to re-render the page. Therefore, if it is not a variable needed by the view, it doesn’t have to be defined in data, it can be defined externally or mounted directly on the vue example to avoid wasting resources.

##### 长列表
##### Long list
- 长列表中如果每个item有一个点赞按钮，点击后点赞数字+1，此时点赞组件必须是一个单独引用的组件，才能做到差量数据更新。否则会造成整个列表数据重载。
- If there is a like button for each item in the long list, click it and the number of like +1, at this time, the like component must be a single referenced component to update the variance data. Otherwise, it will result in the overload of the whole list data.
- 长列表中每个item并不一定需要做成组件，取决于你的业务中是否需要差量更新某一行item的数据，如没有此类需求则不应该引入大量组件。（点击item后背景变色，属于css调整，没有更新data数据和渲染，不涉及这个问题）
- Each item in the long list does not necessarily need to be made into a component, depending on whether you need to update the data of a row of items by variance in your business. If there is no such requirement, it is not recommended to introduce a large number of components. (After clicking item, the background changes color, which belongs to css adjustment. If data and rendering are not updated, this problem will not exist)
- 单个组件中存在大量数据时（比如长列表），在App和小程序端数据更新时会消耗较多时间，建议使用组件对数据进行分页，将变更限制更小范围。可以参考：[长列表优化示例](https://ext.dcloud.net.cn/plugin?id=2863#detail)
- When there is a large amount of data in a single component (such as a long list), it will take a lot of time to update the data on the App and applet side. It is recommended to use the component to paginate the data and limit the changes to a smaller scope. You can refer to: [Long List Optimization Example](https://ext.dcloud.net.cn/plugin?id=2863#detail)
- app端nvue的长列表应该使用list组件，有自动的渲染资源回收机制。vue页面使用页面滚动的性能，好于使用scroll-view的区域滚动。uni ui封装了uList组件，在app-nvue下使用了list组件，在其他环境使用页面滚动，自动适配，强烈推荐开发者使用，避免自己写的不好产生性能问题。
- The long list of nvue on the app side should use the list component, and there is an automatic rendering resource recycling mechanism. For vue pages, page scrolling provides better performance than area scrolling using scroll-view. uni ui encapsulates uList component, uses list component under app-nvue, and uses page scrolling and automatic adaptation in other environments. It is highly recommended for developers to use it to avoid performance problems caused by poor writing.
- 如需要左右滑动的长列表，请在HBuilderX新建uni-app项目选新闻模板，那是一个标杆实现。自己用swiper和scroll-view做很容易引发性能问题。
- If you need a long list that slides left and right, please create a new uni-app project selecting news template in HBuilderX, which is a benchmark implementation. If it is built with swiper and scroll-view, performance problems are easy to cause.

##### 减少一次性渲染的节点数量
##### Reduce the number of nodes for one-time rendering

页面初始化时，逻辑层如果一次性向视图层传递很大的数据，使视图层一次性渲染大量节点，可能造成通讯变慢、页面切换卡顿，所以建议以局部更新页面的方式渲染页面。如：服务端返回100条数据，可进行分批加载，一次加载50条，500ms 后进行下一次加载。
When the page is initialized, if the logic layer transmits a large amount of data to the view layer at one time, and the view layer renders a large number of nodes at one time, it may cause slow communication and page switching stagnation, so it is recommended to render the page by partially updating the page. For example, if the server returns 100 pieces of data, it can be loaded in batches, loading 50 pieces at a time, and loading the next batch after 500ms.

##### **减少组件数量、减少节点嵌套层级**
##### **Reduce the number of components and the nesting level of nodes**

深层嵌套的节点在页面初始化构建时往往需要更多的内存占用，并且在遍历节点时也会更慢些，所以建议减少深层的节点嵌套。
Deep nested nodes often need to occupy more memory when the page is initialized and built, and they will be slower when traversing nodes, so it is recommended to reduce deep nested nodes.

有些nvue页面在Android低端机上初次渲染时，会看到从上到下的渲染过程，这往往都是因为组件过多导致的。每个组件渲染时都会触发一次通信，太多组件就会阻塞通信。
When some nvue pages are first rendered on Android low-end phones, they will see the rendering process from top to bottom, which is often caused by too many components. Communication will be triggered once when each component is rendered, and too many components will block communication.

##### 避免视图层和逻辑层频繁进行通讯
##### Avoid frequent communication between view layer and logic layer

* 减少 scroll-view 组件的 scroll 事件监听，当监听 scroll-view 的滚动事件时，视图层会频繁的向逻辑层发送数据；
* Reduce the listening to of the scroll events of the scroll-view component, when listening to the scroll events of the scroll-view, the view layer will frequently send data to the logic layer;
* 监听 scroll-view 组件的滚动事件时，不要实时的改变 scroll-top/scroll-left 属性，因为监听滚动时，视图层向逻辑层通讯，改变 scroll-top/scroll-left 时，逻辑层又向视图层通讯，这样就可能造成通讯卡顿。
* Don't change scroll-top/scroll-left attribute in real time when listening to scroll-view component, because when listening to the scroll, the view layer communicates with the logic layer, and when changing scroll-top/scroll-left, the logic layer communicates with the view layer, which may cause communication stagnation.
* 注意 onPageScroll 的使用，onPageScroll 进行监听时，视图层会频繁的向逻辑层发送数据；
* Pay attention to the use of onPageScroll, when onPageScroll is listening to, the view layer will frequently send data to the logic layer;
* 多使用css动画，而不是通过js的定时器操作界面做动画
* It is recommended to use css animation instead of animation through the js timer interface
* 如需在canvas里做跟手操作，app端建议使用renderjs，小程序端建议使用web-view组件。web-view里的页面没有逻辑层和视图层分离的概念，自然也不会有通信折损。
* If you need to do follow-up operations in canvas, it is recommended to use renderjs on the app side, and the web-view component on the applet side. The pages in the web-view do not have the concept of separation of the logical layer and the view layer, and naturally there will be no communication loss.

##### 优化页面切换动画
##### Optimize page switching animation

* 页面初始化时若存在大量图片或原生组件渲染和大量数据通讯，会发生新页面渲染和窗体进入动画抢资源，造成页面切换卡顿、掉帧。建议延时100ms~300ms渲染图片或复杂原生组件，分批进行数据通讯，以减少一次性渲染的节点数量。
* During the initialization of the page, if there are a lot of images or native component rendering and a lot of data communication, new page rendering and window entry animation will happen to grab resources, resulting in page switching stagnation and frame dropping. It is suggested to delay rendering images or complex native components for 100ms-300ms, and communicate data in batches to reduce the number of nodes rendered at one time.
* App端动画效果可以自定义。popin/popout的双窗体联动挤压动画效果对资源的消耗更大，如果动画期间页面里在执行耗时的js，可能会造成动画掉帧。此时可以使用消耗资源更小的动画效果，比如slide-in-right/slide-out-right。
* The animation effect on the App side can be customized. Double-window linkage extrusion animation effect of popin/popout consumes more resources. If js is executed in the page during animation, it may cause the animation to drop frames. At this time, you can use animation effects that consume less resources, such as slide-in-right/slide-out-right.
* App-nvue和H5，还支持页面预载，[uni.preloadPage](https://uniapp.dcloud.io/api/preload-page)，可以提供更好的使用体验
* App-nvue and H5 also support page preloading, [uni.preloadPage](https://uniapp.dcloud.io/api/preload-page), which can provide a better user experience

##### 优化背景色闪白
##### Optimize the background color to flash white
> HBuilder X 3.6.9+ 已支持暗黑模式。[详情](https://uniapp.dcloud.net.cn/tutorial/darkmode.html)
> HBuilder X 3.6.9+ supports dark mode. [Details](https://uniapp.dcloud.net.cn/tutorial/darkmode.html)
1. 如果是新页面进入时背景闪白
1. If the background flashes when a new page enters
  * 如果页面背景是深色，在vue页面中可能会发生新窗体刚开始动画时是灰白色背景，动画结束时才变为深色背景，造成闪屏。这是因为webview的背景生效太慢的问题。此时需将样式写在 ``App.vue`` 里，可以加速页面样式渲染速度。``App.vue`` 里面的样式是全局样式，每次新开页面会优先加载 ``App.vue`` 里面的样式，然后加载普通 vue 页面的样式。
  * If the page background is dark in color, the new window might be grayish-white background at the beginning of animation in vue page, and then it becomes dark background at the end of animation, causing flicker. This is because the background of webview takes too long to become valid. At this time, you need to write the style in `App.vue` to speed up the page style rendering speed. `App.vue` The style inside is a global style. Every time a new page is opened, the style in `App.vue` will be loaded first, and then the style of the normal vue page will be loaded.
  * app端还可以在pages.json的页面的style里单独配置页面原生背景色，比如在globalStyle->style->app-plus->background下配置全局背景色
  * app side can also configure the page native background color separately in the style of pages.json page, for example, configure the global background color under globalStyle->style->app-plus->background
```json
"style": {  
    "app-plus": {  
        "background":"#000000"
    }  
}
```
  * 另外nvue页面不存在此问题，也可以更改为nvue页面。
  * In addition, nvue page does not have this problem, and it can also be changed to nvue page.
  * 注意：以上优化方案在 HBuilderX 2.7.7 以上版本时运行在 iOS12 以下系统效果较差，请等待优化。
  * Note: The above optimization scheme runs on HBuilderX 2.7.7 and is not effective on iOS12 or below, please wait for optimization.
2. 如果是老页面消失时背景闪白
2. If the background flashes during the disappearing of old page when popin animation shows up on Android,
Android上popin动画时，老窗体会有一个半透明消失的效果。这个半透明效果的背景色，可以根据需要调节为暗色系。
the old form will have a translucent disappearing effect.
在pages.json里globalStyle下或指定页面下，配置app-plus专属节点，然后配置animationAlphaBGColor属性。
The background color of this translucent effect can be adjusted to dark color as needed. In pages.json, under globalStyle or the specified page, configure the exclusive node of app-plus, and then configure the animationAlphaBGColor attribute.

##### 使用nvue代替vue
##### Use nvue instead of vue

在 App 端 ```uni-app``` 的 nvue 页面可是基于weex升级改造的原生渲染引擎，实现了页面原生渲染能力、提高了页面流畅性。若对页面性能要求较高可以使用此方式开发，详见：[nvue](/tutorial/nvue-outline)。
The nvue page of ``uni-app`` on the App side is a native rendering engine based on weex upgrade and transformation, which realizes the native rendering capability of the page and improves the fluency of the page. If you have high requirements on page performance, you can use this method to develop, see: [nvue](/tutorial/nvue-outline).

##### 优化启动速度
##### Optimize startup speed

* 工程代码越多，包括背景图和本地字体文件越大，对小程序启动速度有影响，应注意控制体积。<image />组件引用的前景图不影响性能。
* The more engineering codes, including the larger background images and local font files, will affect the startup speed of the applet, and you should pay attention to controlling the volume. The foreground image referenced by the <image /> component does not affect performance.
* App端的 splash 关闭有白屏检测机制，如果首页一直白屏或首页本身就是一个空的中转页面，可能会造成 splash 10秒才关闭，可参考此文解决[https://ask.dcloud.net.cn/article/35565](https://ask.dcloud.net.cn/article/35565)
* The splash shutdown on the App side has a white screen detection mechanism. If the homepage is always blank or the homepage itself is an empty transit page, it may cause the splash to be closed for 10 seconds, which can be solved by referring to [https://ask.dcloud.net.cn/article/35565](https://ask.dcloud.net.cn/article/35565)
* App端，首页为nvue页面时，并设置为[fast启动模式](https://ask.dcloud.net.cn/article/36749)，此时App启动速度最快。
* On the App side, when the home page is an nvue page, and set to [fast startup mode](https://ask.dcloud.net.cn/article/36749), the App startup speed is the fastest at this time.
* App设置为纯nvue项目（manifest里设置app-plus下的renderer:"native"），这种项目的启动速度更快，2秒即可完成启动。因为它整个应用都使用原生渲染，不加载基于webview的那套框架。
* App is set as a pure nvue project (set the renderer:"native" of app-plus in manifest), this kind of project starts faster and startup can be finished in 2 seconds. Because it uses native rendering in the entire application, instead of loading the webview-based framework.

##### 优化包体积
##### Optimize package size

* uni-app发行到小程序时，自带引擎只有几十K，主要是一个定制过的vue.js核心库。如果使用了es6转es5、css对齐的功能，可能会增大代码体积，可以配置这些编译功能是否开启。
* When uni-app is released to the applet, the built-in engine is only a few dozen K, mainly a customized vue.js core library. If you use the functions of es6 to es5 and css alignment, the code size may increase. You can configure whether these compilation functions are enabled.
* uni-app的H5端，自带了vue.js、vue-router及部分es6 polyfill库，这部分的体积gzip后只有92k，和web开发使用vue基本一致。而内置组件ui库（如picker、switch等）、小程序的对齐js api等，相当于一个完善的大型ui库。但大多数应用不会用到所有内置组件和API。由此uni-app提供了摇树优化机制，未摇树优化前的uni-app整体包体积约500k，服务器部署gzip后162k。开启摇树优化需在manifest配置，[详情](https://uniapp.dcloud.io/collocation/manifest?id=optimization)。
* The H5 side of uni-app comes with vue.js, vue-router and some es6 polyfill libraries. The volume of this part is only 92k after gzip, which is basically the same as the use of vue for web development. The built-in component ui library (such as picker, switch, etc.), the alignment js api of the applet, etc., is equivalent to a complete large-scale ui library. But most applications won't use all the built-in components and APIs. As a result, uni-app provides a tree-shaking optimization mechanism. The overall package size of uni-app before tree-shaking optimization is about 500k, and after the server is deployed with gzip, it is 162k. To enable tree shaking optimization, you need to configure it in the manifest, [Details](https://uniapp.dcloud.io/collocation/manifest?id=optimization).
* uni-app的App端，因为自带了一个独立v8引擎和小程序框架，所以比HTML5Plus或mui等普通hybrid的App引擎体积要大。Android基础引擎约9M。App还提供了扩展模块，比如地图、蓝牙等，打包时如不需要这些模块，可以裁剪掉，以缩小发行包体积。在 manifest.json-App模块权限 里可以选择。
* The App side of uni-app, because it comes with an independent v8 engine and applet framework, is larger than ordinary hybrid App engines such as HTML5Plus or mui. Android base engine is about 9M. The App also provides extension modules, such as maps, Bluetooth, etc. If these modules are not needed during packaging, they can be cut out to reduce the size of the distribution package. It is optional in manifest.json-App module permissions.
* App端支持如果选择纯nvue项目（manifest里设置app-plus下的renderer:"native"），包体积可以进一步减少2M左右。
* The App side supports that if the pure nvue project is selected (renderer:"native "under setting app-plus in manifest), the package size can be further reduced by about 2M.
* uni-app的App-Android端有so库的概念，支持不同的cpu类型的so库越多，包越大。在HBuilderX 2.7以前，Android app默认包含arm32和x86两个cpu的支持so库。包体积比较大。如果你在意体积控制，可以在manifest里去掉x86 cpu的支持（manifest可视化界面-App其他设置里选择cpu），这可以减少包体积到9M。从HBuilderX 2.7起，默认不再包含x86，如有需求请自行在manifest里勾选后打包。一般手机都是arm的，涉及x86 cpu场景很少，包括：个别少见的Android pad、as的模拟器里选择x86类型。
* App-Android side of uni-app has the concept of so library. The more so libraries that support different cpu types, the larger the package. Before HBuilderX 2.7, Android app included so libraries supported by arm32 and x86 cpu by default. The package is relatively large. If you care about size control, you can remove the support of X86 CPU in manifest (select cpu in manifest Visual Interface - Other Settings of App), which can reduce the package size to 9M. From HBuilderX 2.7+, X86 is no longer included by default. Please check it in manifest and then pack it f you need it. Most phones are generally arm-based and there are few x86 CPU scenarios, including the rare Android pad and x86 type in the as emulator.
