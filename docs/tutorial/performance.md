# 性能优化专题

## 运行原理

### 逻辑层和视图层分离，且非 H5 端通信有折损

`uni-app` 在非 H5 端运行时，从架构上分为逻辑层和视图层两个部分。逻辑层负责执行业务逻辑，也就是运行 js 代码，视图层负责页面渲染。

虽然开发者在一个 vue 页面里写 js 和 css，但其实，编译时就已经将它们拆分了。

### 逻辑层详解

逻辑层是运行在一个独立的 `jscore` 里的，它不依赖于本机的 webview，所以一方面它没有浏览器兼容问题，可以在 Android4.4 上跑 es6 代码，另一方面，它无法运行 `window`、`document`、`navigator`、`localstorage` 等浏览器专用的 js API。

`jscore`就是一个标准 js 引擎，标准 js 是可以正常运行的，比如 if、for、各种字符串、日期处理等。js 和浏览器的区别要注意区分开来。
`

- 所谓浏览器的 js 引擎，就是 `jscore` 或 `v8` 的基础上新增了一批浏览器专用 API，比如 dom；
- node.js 引擎，则是 v8 基础上补充一些电脑专用 API，比如本地 io；
- 那么 uni-app 的 App 端和小程序端的 js 引擎，其实是在 `jscore` 上补充了一批手机端常用的 JS API，比如扫码。

<div>
	<img src="https://img.cdn.aliyun.dcloud.net.cn/uni-app/jscore.jpg" style="max-width:500px"></img>
</div>

### 视图层详解

h5 和小程序平台，以及 app-vue，视图层是 webview。而 app-nvue 的视图层是基于 `weex` 改造的原生渲染视图。

关于 webview，在 iOS 上，只能使用 iOS 提供的 Webview（默认是 `WKWebview`）。它有一定的浏览器兼容问题，iOS 版本不同，它的表现有细微差异（一般可忽略）。

Android 上小程序大多自带了一个几十 M 的 chromium webview，而 App 端没办法带这么大体积的三方包，所以 App 端默认使用了 Android system webview，这个系统 webview 跟随手机不同而有差异。当然 App 端也支持使用腾讯 X5 引擎，此时可以在 Android 端统一视图层。

所以 uni-app 的 js 基本没有不同手机的兼容问题（因为 js 引擎自带了），而视图层的 css，在 app-vue 上使用系统 webview 时会有手机浏览器的 css 兼容问题。此时或者不要用太新的 css 语法，或者集成腾讯 x5 引擎。

### 逻辑层和视图层分离的利与弊

逻辑层和视图层分离，好处是 js 运算不卡渲染，最简单直接的感受就是：窗体动画稳。

如果开发者使用过 App，应该有概念，webview 新窗体一边做进入动画，一边自身渲染，很容易卡动画。而 uni-app 则无需写预载代码，新窗体渲染快且动画稳定。

但是两层分离也带来一个坏处，这两层互相通信，其实是有损耗的。
However, the separation of the two layers also brings a disadvantage, that is, it will cause loss while the two layers communicate with each other.

iOS 还好，但 Android 低端机上，每次通信都要耗时几十毫秒。平时看不出来影响，但有几个场景表现明显。

1. 连续高帧率绘制 canvas 动画，会发现还不如 webview 内部绘制流畅
2. 视图层滚动、跟手操作，不停反馈给逻辑层，js 再处理逻辑并通知视图层做对应更新。此时会发现交互不跟手或卡

不管小程序还是 app，不管 app-vue 还是 app-nvue，都有这个两层通信损耗的问题。

解决这类问题，在 webview 渲染和原生渲染引用了不同的做法：

- webview 渲染的视图层

在 app-vue 和微信小程序上，提供了一种运行于视图层的专属 js，微信叫做[wxs](https://uniapp.dcloud.io/tutorial/miniprogram-subject.html#wxs)。

wxs 中可以监听手势，以 uni ui 的 swiperAction 组件为例，手指拖动，侧边的列表菜单项要跟手滑出，此时就需要使用 wxs 才能实现流畅效果。还有插件市场里一些自定义下拉刷新的插件，通过 wxs 实现了更高的性能体验。

uni-app 支持把 wxs 编译到微信小程序、App 和 H5 中。

微信里对 wxs 限制较多，只能实现有限的功能。app 端提供了更强大的[renderjs](https://uniapp.dcloud.io/tutorial/renderjs.html)，并兼容到 H5 平台。

比如 canvas 动画，微信的 canvas 无法通过 wxs 操作，js 不停绘制 canvas 动画因通信折损而无法流畅。uni-app 的 app-vue 里的 canvas 对象设计在 webview 视图层的，通过 renderjs 可以在视图层直接操作 canvas 动画，将不再有通信折损，实现更流畅的效果，详见：[renderjs](https://uniapp.dcloud.io/tutorial/renderjs.html)

- 原生渲染的视图层
- View layer for native rendering

在 app-nvue 里，逻辑层和视图层的折损一样存在。包括 react native 也有这个问题。所以也千万别以为原生渲染就多么高级。

weex 提供了一套 [bindingx](https://uniapp.dcloud.io/tutorial/nvue-api?id=nvue-%e9%87%8c%e4%bd%bf%e7%94%a8-bindingx) 机制，可以在 js 里一次性传一个表达式给原生层，由原生层解析后根据指令操作原生的视图层，避免反复跨层通信。这个技术在 uni-app 里也可以使用。

bindingx 作为一种表达式，它的功能不及 js 强大，但手势监听、动画还是可以实现的，比如 uni ui 的 swiperAction 组件在 app-nvue 下运行时会自动启用 bindingx，以实现流畅跟手。

### app-vue 和小程序的数据更新，分页面级和组件级

对于复杂页面，更新某个区域的数据时，需要把这个区域做成组件，这样更新数据时就只更新这个组件，否则会整个页面的数据更新，造成点击延迟卡顿。
For complex pages, when updating data in a certain area, you need to make this area a component, so that only this component is updated when updating data, otherwise the data of the entire page will be updated, causing click delays to be stuck.

比如微博长列表页面，点击一个点赞图标，赞数要立即+1，此时这个点赞按钮一定要做成组件。否则这个+1 会引发页面级所有数据的从 js 层向视图层的同步。

app-nvue 和 h5 不存在此问题。造成差异的原因是小程序目前只提供了组件差量更新的机制，不能自动计算所有页面差量。

## 优化建议

### 避免使用大图

页面中若大量使用大图资源，会造成页面切换的卡顿，导致系统内存升高，甚至白屏崩溃。
If a large number of large image resources are used in the page, the switching of pages will be stagnated, and the system memory will increase, even crash with a white screen.

尤其是不要把多张大图缩小后显示在一个屏幕内，比如上传图片前选了数张几 M 体积的照片，然后缩小在一个屏幕中展示多张几 M 的大图，非常容易白屏崩溃。

对大体积的二进制文件进行 base64，也非常耗费资源。

### 优化数据更新

在 `uni-app` 中，定义在 data 里面的数据每次变化时都会通知视图层重新渲染页面。所以如果不是视图所需要的变量，可以不定义在 data 中，可在外部定义变量或直接挂载在 vue 实例上，以避免造成资源浪费。

### 长列表

- 长列表中如果每个 item 有一个点赞按钮，点击后点赞数字+1，此时点赞组件必须是一个单独引用的组件，才能做到差量数据更新。否则会造成整个列表数据重载。
- 长列表中每个 item 并不一定需要做成组件，取决于你的业务中是否需要差量更新某一行 item 的数据，如没有此类需求则不应该引入大量组件。（点击 item 后背景变色，属于 css 调整，没有更新 data 数据和渲染，不涉及这个问题）
- 单个组件中存在大量数据时（比如长列表），在 App 和小程序端数据更新时会消耗较多时间，建议使用组件对数据进行分页，将变更限制更小范围。可以参考：[长列表优化示例](https://ext.dcloud.net.cn/plugin?id=2863#detail)
- app 端 nvue 的长列表应该使用 list 组件，有自动的渲染资源回收机制。vue 页面使用页面滚动的性能，好于使用 scroll-view 的区域滚动。uni ui 封装了 uList 组件，在 app-nvue 下使用了 list 组件，在其他环境使用页面滚动，自动适配，强烈推荐开发者使用，避免自己写的不好产生性能问题。
- 如需要左右滑动的长列表，请在 HBuilderX 新建 uni-app 项目选新闻模板，那是一个标杆实现。自己用 swiper 和 scroll-view 做很容易引发性能问题。

### 减少一次性渲染的节点数量

页面初始化时，逻辑层如果一次性向视图层传递很大的数据，使视图层一次性渲染大量节点，可能造成通讯变慢、页面切换卡顿，所以建议以局部更新页面的方式渲染页面。如：服务端返回 100 条数据，可进行分批加载，一次加载 50 条，500ms 后进行下一次加载。

### 减少组件数量、减少节点嵌套层级

深层嵌套的节点在页面初始化构建时往往需要更多的内存占用，并且在遍历节点时也会更慢些，所以建议减少深层的节点嵌套。
Deep nested nodes often need to occupy more memory when the page is initialized and built, and they will be slower when traversing nodes, so it is recommended to reduce deep nested nodes.

有些 nvue 页面在 Android 低端机上初次渲染时，会看到从上到下的渲染过程，这往往都是因为组件过多导致的。每个组件渲染时都会触发一次通信，太多组件就会阻塞通信。

### 避免视图层和逻辑层频繁进行通讯

- 减少 scroll-view 组件的 scroll 事件监听，当监听 scroll-view 的滚动事件时，视图层会频繁的向逻辑层发送数据；
- 监听 scroll-view 组件的滚动事件时，不要实时的改变 scroll-top/scroll-left 属性，因为监听滚动时，视图层向逻辑层通讯，改变 scroll-top/scroll-left 时，逻辑层又向视图层通讯，这样就可能造成通讯卡顿。
- 注意 onPageScroll 的使用，onPageScroll 进行监听时，视图层会频繁的向逻辑层发送数据；
- 多使用 css 动画，而不是通过 js 的定时器操作界面做动画
- 如需在 canvas 里做跟手操作，app 端建议使用 renderjs，小程序端建议使用 web-view 组件。web-view 里的页面没有逻辑层和视图层分离的概念，自然也不会有通信折损。

### 优化页面切换动画

- 页面初始化时若存在大量图片或原生组件渲染和大量数据通讯，会发生新页面渲染和窗体进入动画抢资源，造成页面切换卡顿、掉帧。建议延时 100ms~300ms 渲染图片或复杂原生组件，分批进行数据通讯，以减少一次性渲染的节点数量。
- App 端动画效果可以自定义。popin/popout 的双窗体联动挤压动画效果对资源的消耗更大，如果动画期间页面里在执行耗时的 js，可能会造成动画掉帧。此时可以使用消耗资源更小的动画效果，比如 slide-in-right/slide-out-right。
- App-nvue 和 H5，还支持页面预载，[uni.preloadPage](https://uniapp.dcloud.io/api/preload-page)，可以提供更好的使用体验

### 优化背景色闪白

> HBuilder X 3.6.9+ 已支持暗黑模式。[详情](https://uniapp.dcloud.net.cn/tutorial/darkmode.html)

1. 如果是新页面进入时背景闪白

- 如果页面背景是深色，在 vue 页面中可能会发生新窗体刚开始动画时是灰白色背景，动画结束时才变为深色背景，造成闪屏。这是因为 webview 的背景生效太慢的问题。此时需将样式写在 `App.vue` 里，可以加速页面样式渲染速度。`App.vue` 里面的样式是全局样式，每次新开页面会优先加载 `App.vue` 里面的样式，然后加载普通 vue 页面的样式。
- app 端还可以在 pages.json 的页面的 style 里单独配置页面原生背景色，比如在 globalStyle->style->app-plus->background 下配置全局背景色

```json
"style": {
    "app-plus": {
        "background":"#000000"
    }
}
```

- 另外 nvue 页面不存在此问题，也可以更改为 nvue 页面。
- 注意：以上优化方案在 HBuilderX 2.7.7 以上版本时运行在 iOS12 以下系统效果较差，请等待优化。

2. 如果是老页面消失时背景闪白
   Android 上 popin 动画时，老窗体会有一个半透明消失的效果。这个半透明效果的背景色，可以根据需要调节为暗色系。
   在 pages.json 里 globalStyle 下或指定页面下，配置 app-plus 专属节点，然后配置 animationAlphaBGColor 属性。

### 使用 nvue 代替 vue

在 App 端 `uni-app` 的 nvue 页面可是基于 weex 升级改造的原生渲染引擎，实现了页面原生渲染能力、提高了页面流畅性。若对页面性能要求较高可以使用此方式开发，详见：[nvue](/tutorial/nvue-outline)。

### 优化启动速度

- 工程代码越多，包括背景图和本地字体文件越大，对小程序启动速度有影响，应注意控制体积。<image />组件引用的前景图不影响性能。
- App 端的 splash 关闭有白屏检测机制，如果首页一直白屏或首页本身就是一个空的中转页面，可能会造成 splash 10 秒才关闭，可参考此文解决 [https://ask.dcloud.net.cn/article/35565](https://ask.dcloud.net.cn/article/35565)
- App 端，首页为 nvue 页面时，并设置为 [fast 启动模式](https://ask.dcloud.net.cn/article/36749)，此时 App 启动速度最快。
- App 设置为纯 nvue 项目（manifest 里设置 app-plus 下的 renderer:"native"），这种项目的启动速度更快，2 秒即可完成启动。因为它整个应用都使用原生渲染，不加载基于 webview 的那套框架。
- 分包。app也支持分包，分包可以让启动时只加载部分js。对于工程下js非常多的情况比较合适。[详见](https://uniapp.dcloud.net.cn/collocation/pages.html#subpackages)

### 优化包体积

- uni-app 发行到小程序时，自带引擎只有几十 K，主要是一个定制过的 vue.js 核心库。如果使用了 es6 转 es5、css 对齐的功能，可能会增大代码体积，可以配置这些编译功能是否开启。
- uni-app 的 H5 端，自带了 vue.js、vue-router 及部分 es6 polyfill 库，这部分的体积 gzip 后只有 92k，和 web 开发使用 vue 基本一致。而内置组件 ui 库（如 picker、switch 等）、小程序的对齐 js api 等，相当于一个完善的大型 ui 库。但大多数应用不会用到所有内置组件和 API。由此 uni-app 提供了摇树优化机制，未摇树优化前的 uni-app 整体包体积约 500k，服务器部署 gzip 后 162k。开启摇树优化需在 manifest 配置，[详情](https://uniapp.dcloud.io/collocation/manifest?id=optimization)。
- uni-app 的 App 端，因为自带了一个独立 v8 引擎和小程序框架，所以比 HTML5Plus 或 mui 等普通 hybrid 的 App 引擎体积要大。Android 基础引擎约 9M。App 还提供了扩展模块，比如地图、蓝牙等，打包时如不需要这些模块，可以裁剪掉，以缩小发行包体积。在 manifest.json-App 模块权限 里可以选择。
- App 端支持如果选择纯 nvue 项目（manifest 里设置 app-plus 下的 renderer:"native"），包体积可以进一步减少 2M 左右。
- uni-app 的 App-Android 端有 so 库的概念，支持不同的 cpu 类型的 so 库越多，包越大。在 HBuilderX 2.7 以前，Android app 默认包含 arm32 和 x86 两个 cpu 的支持 so 库。包体积比较大。如果你在意体积控制，可以在 manifest 里去掉 x86 cpu 的支持（manifest 可视化界面-App 其他设置里选择 cpu），这可以减少包体积到 9M。从 HBuilderX 2.7 起，默认不再包含 x86，如有需求请自行在 manifest 里勾选后打包。一般手机都是 arm 的，涉及 x86 cpu 场景很少，包括：个别少见的 Android pad、AS 的模拟器里选择 x86 类型。
