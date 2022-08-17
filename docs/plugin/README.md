`uni-app`积极拥抱社区，创建了开放、兼容的插件系统。
`uni-app` actively embraces the community, creating an open, compatible plugin system.

- [uni-app插件市场](https://ext.dcloud.net.cn)，有数千款插件，支持前端组件、js sdk、页面模板、项目模板、原生插件等多种类型。在生态建设上远远领先于竞品。
- [uni-app plugin market](https://ext.dcloud.net.cn), there are thousands of plugins, supporting front-end components, js sdk, page templates, project templates, native plugins and other types. It is far ahead of its competitors in ecological construction.

- 兼容 微信小程序 JS SDK
- Compatible with WeChat Mini Program JS SDK

丰富的小程序生态内容可直接引入```uni-app```，并且在App侧通用。以前的跨平台开发框架普遍缺少三方SDK，由于大量SDK厂商均原厂维护小程序SDK，使得```uni-app```成为跨平台开发框架里生态最丰富的平台[参考](https://ask.dcloud.net.cn/article/35070)
The rich ecological content of mini-programs can be directly introduced into ``uni-app``, and can be used on the App side. The previous cross-platform development frameworks generally lacked third-party SDKs. Since a large number of SDK manufacturers maintain the original mini-program SDK, ``uni-app``` has become the most ecological platform in the cross-platform development framework [Reference](https: //ask.dcloud.net.cn/article/35070)

- 兼容 微信小程序自定义组件
- Compatible with WeChat Mini Program custom components

小程序自定义组件是一种ui组件，uni-app里可以在App、H5、微信小程序、QQ小程序同时兼容微信小程序自定义组件，[参考](https://uniapp.dcloud.io/frame?id=小程序组件支持)
The applet custom component is a ui component. The uni-app can be compatible with the WeChat applet custom component in App, H5, WeChat applet, and QQ applet at the same time. [Reference](https://uniapp.dcloud.io /frame?id=%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E6%94%AF%E6%8C%81)

- 兼容 NPM 包管理系统
- Compatible with NPM package management system

- 兼容 weex 插件生态
- Compatible with weex plugin ecosystem

uni-app内置了`weex`，`weex`的原生插件或ui库均可使用。注意`weex`的生态不如`uni-app`丰富，一般情况建议使用`uni-app`的插件市场。
uni-app has built-in `weex`, and `weex` native plugins or ui libraries can be used. Note that the ecology of `weex` is not as rich as that of `uni-app`. In general, it is recommended to use the plugin market of `uni-app`.

- 兼容 普通 web 库
- Compatible with common web libraries

`uni-app`的H5端支持所有浏览器API。但众所周知，由于小程序的js不运行在浏览器里，所以小程序里不支持 HTML 和 DOM 的 API。
The H5 side of `uni-app` supports all browser APIs. But as we all know, because the js of the applet does not run in the browser, the HTML and DOM APIs are not supported in the applet.

`uni-app`的App端虽然和小程序是相同的架构，逻辑层也运行在独立`jscore`而不是浏览器里，但App端和小程序还是有区别的：
Although the App side of `uni-app` has the same architecture as the applet, and the logic layer also runs in the independent `jscore` instead of the browser, there are still differences between the App side and the applet:
一方面可通过web-view组件加载HTML，引入web相关库；
On the one hand, HTML can be loaded through the web-view component, and web-related libraries can be introduced;
另一方面可通过[renderjs](/tutorial/renderjs.html)实现在渲染层执行js，此时完整`echart`、`threejs`等web库均可使用。
On the other hand, [renderjs](/tutorial/renderjs.html) can be used to execute js in the rendering layer. At this time, complete web libraries such as `echart` and `threejs` can be used.
（但为了全端使用，仍然建议减少对dom库的依赖，在`uni-app`的插件市场可寻找全端兼容的库来替代）
(But for full-end use, it is still recommended to reduce the dependence on the dom library. In the plugin market of `uni-app`, you can find a full-end compatible library instead)

- App端支持各种调用原生能力的方式
- App supports various ways to invoke native capabilities
1. 支持 原生[混合开发](hybrid)
1. Support native [mixed development] (hybrid)
2. 支持 比小程序能力更多的[plus JSAPI](http://www.html5plus.org/doc/h5p.html)
2. Support [plus JSAPI] (http://www.html5plus.org/doc/h5p.html) more capable than applet
3. 支持 [Native.js](https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/88) 直接调用原生api
3. Support [Native.js](https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/88) to directly call native api
4. 支持 [原生插件扩展](https://ask.dcloud.net.cn/article/35428)
4. Support [Native Plugin Extension](https://ask.dcloud.net.cn/article/35428)
5. 支持 [云打包原生插件](https://ask.dcloud.net.cn/article/35412)。
5. Support [Cloud Packaging Native Plugin](https://ask.dcloud.net.cn/article/35412).

- App端支持双渲染引擎
- App supports dual rendering engines
`uni-app`逻辑层在独立jscore，而渲染层可选webview渲染和weex引擎渲染。
The logic layer of `uni-app` is in independent jscore, and the rendering layer is optional for webview rendering and weex engine rendering.
1. 使用webview渲染则整个架构与小程序相同，此时页面后缀为vue文件。
1. Using webview rendering, the entire architecture is the same as the applet, and the page suffix is vue file.
2. 使用weex引擎（经过改造）渲染，则整个架构与快应用相同，此时页面后缀为nvue文件。使用webview渲染时，可以指定由系统webview渲染还是由x5引擎渲染。
2. Use the weex engine (modified) to render, the entire architecture is the same as the quick application, and the page suffix is nvue file. When using webview rendering, you can specify whether to render by the system webview or by the x5 engine.

