`uni-app`积极拥抱社区，创建了开放、兼容的插件系统。

- uni-app插件市场，[https://ext.dcloud.net.cn](https://ext.dcloud.net.cn)，是uni-app官方插件生态集中地。有数千款插件，支持前端组件、js sdk、页面模板、项目模板、原生插件等多种类型。在生态建设上远远领先于竞品。请注意尽量在官方市场寻找插件，npm等三方市场没有uni-app兼容性描述，很容易下载到无法跨平台的、仅适配web的插件。

- 兼容 微信小程序 JS SDK

小程序生态内容可直接引入```uni-app```，并且在App侧通用。以前的跨平台开发框架普遍缺少三方SDK，由于大量SDK厂商均原厂维护小程序SDK，使得```uni-app```成为跨平台开发框架里生态最丰富的平台[参考](https://ask.dcloud.net.cn/article/35070)

- 兼容 微信小程序自定义组件

小程序自定义组件是一种ui组件，uni-app里可以在App、H5、微信小程序、QQ小程序同时兼容微信小程序自定义组件，[参考](https://uniapp.dcloud.io/frame?id=小程序组件支持)

- 兼容 NPM 包管理系统

uni-app支持npm包，但注意npm下载的插件很可能不是全端的，大多npm插件仅适配了web。需要全端插件还是要去uni-app插件市场[https://ext.dcloud.net.cn](https://ext.dcloud.net.cn)去找。

- 兼容 weex 插件生态

uni-app内置了`weex`，`weex`的原生插件或ui库均可使用。注意`weex`的生态不如`uni-app`丰富，一般情况建议使用`uni-app`的插件市场。

- 兼容 普通 web 库

`uni-app`的H5端支持所有浏览器API。但众所周知，由于小程序的js不运行在浏览器里，所以小程序里不支持 HTML 和 DOM 的 API。

`uni-app`的App端虽然和小程序是相同的架构，逻辑层也运行在独立`jscore`而不是浏览器里，但App端和小程序还是有区别的：
  * 一方面可通过web-view组件加载本地HTML，引入web相关库；
  * 另一方面可通过[renderjs](/tutorial/renderjs.md)实现在渲染层执行js，此时完整`echart`、`threejs`等web库均可使用。
（但为了全端使用，仍然建议减少对dom库的依赖，在`uni-app`的插件市场可寻找全端兼容的库来替代）

- App端支持各种调用原生能力的方式
1. 支持 原生[混合开发](/hybrid.md)
2. 支持 比小程序能力更多的[plus JSAPI](http://www.html5plus.org/doc/h5p.html)
3. 支持 [Native.js](https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/88) 直接调用原生api
4. 支持 [uts插件](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-plugin.html)
5. 支持 [原生语言插件](native-plugin.md)


- App端支持双渲染引擎
`uni-app`逻辑层在独立jscore，而渲染层可选webview渲染和weex引擎渲染。
1. 使用webview渲染则整个架构与小程序相同，此时页面后缀为vue文件。
2. 使用weex引擎（经过改造）原生渲染，则整个架构与快应用相同，此时页面后缀为nvue文件。使用webview渲染时，还可以指定由系统webview渲染还是由x5引擎渲染。

