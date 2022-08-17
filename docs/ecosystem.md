
```uni-app``` 积极拥抱社区，创建了开放、兼容的生态系统。
```uni-app``` actively embraces the community and creates an open and compatible ecosystem.

- [uni-app插件市场](https://ext.dcloud.net.cn)，有数千款插件，支持前端组件、js sdk、页面模板、项目模板、原生插件等多种类型。在生态建设上远远领先于竞品。
- On the [uni-app plug-in market](https://ext.dcloud.net.cn), there are thousands of plug-ins available, supporting front-end components, js sdk, page templates, project templates, native plug-ins and other types. Far ahead of competing products in ecological construction.

- 兼容 微信小程序 JS SDK
- Compatible with WeChat Mini Program JS SDK
丰富的小程序生态内容可直接引入```uni-app```，并且在App侧通用。以前的跨平台开发框架普遍缺少三方SDK，由于大量SDK厂商均原厂维护小程序SDK，使得```uni-app```成为跨平台开发框架里生态最丰富的平台[参考](https://ask.dcloud.net.cn/article/35070)
The rich ecological content of mini-programs can be directly introduced into ``uni-app``, and can be used on the App side. The previous cross-platform development frameworks generally lacked third-party SDKs. Since a large number of SDK manufacturers maintain the original mini-program SDK, ``uni-app``` has become the most ecological platform in the cross-platform development framework [Reference](https: //ask.dcloud.net.cn/article/35070)

- 兼容 微信小程序自定义组件
- Compatible with WeChat Mini Program custom components
小程序自定义组件是一种ui组件，uni-app里可以在App、H5、微信小程序、QQ小程序同时兼容微信小程序自定义组件，[参考](https://uniapp.dcloud.io/frame?id=小程序组件支持)
The applet custom component is a kind of ui component. The uni-app can be compatible with the WeChat applet custom component in App, H5, WeChat applet, and QQ applet at the same time. [Reference](https://uniapp.dcloud.io /frame?id=%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E6%94%AF%E6%8C%81)

- 兼容 NPM 包管理系统
- ...
uni-app完整支持 NPM ，[详见](https://uniapp.dcloud.io/frame?id=npm%E6%94%AF%E6%8C%81)
The uni-app compatible with the NPM package management system fully supports NPM, [See details](https://uniapp.dcloud.io/frame?id=npm%E6%94%AF%E6%8C%81)

- 兼容 mpvue 项目及组件
- Compatible with mpvue projects and components
mpvue同样基于vue语法，但支持完善度不如`uni-app`，是`uni-app`的子集。mpvue的组件可以在uni-app里直接使用并全端通用。项目代码可以快速移植到uni-app，[参考](https://ask.dcloud.net.cn/article/34945)
mpvue is also based on vue syntax, but the support is not as complete as `uni-app`, which is a subset of `uni-app`. The components of mpvue can be used directly in uni-app and are universal to all terminals. The project code can be quickly ported to uni-app, [Reference](https://ask.dcloud.net.cn/article/34945)

- 兼容 weex 插件生态
- ...
uni-app内置了`weex`，`weex`的原生插件或ui库均可使用。注意`weex`的生态不如`uni-app`丰富，一般情况建议使用`uni-app`的插件市场。
The uni-app compatible with the weex plug-in ecology has built-in `weex`, and the native plug-in or ui library of `weex` can be used. Note that the ecology of `weex` is not as rich as `uni-app`. Generally, it is recommended to use the plug-in market of `uni-app`.

- 兼容 普通 web 库
- ...
```uni-app```的H5端支持所有浏览器API。但众所周知，由于小程序的js不运行在浏览器里，所以小程序里不支持 HTML 和 DOM 的 API。
The H5 side of ``uni-app`` supports all browser APIs. But as we all know, since the js of the applet does not run in the browser, the HTML and DOM APIs are not supported in the applet.
The H5 side of ``uni-app`` supports all browser APIs. But as we all know, since the js of the applet does not run in the browser, the HTML and DOM APIs are not supported in the applet.

`uni-app`的App端虽然和小程序是相同的架构，逻辑层也运行在独立jscore而不是浏览器里，但一方面可通过web-view组件加载HTML，引入web相关库；
Although the App side of `uni-app` has the same structure as the applet, and the logic layer also runs in the independent jscore instead of the browser, on the one hand, HTML can be loaded through the web-view component, and web-related libraries can be introduced;
另一方面可通过[renderjs](/tutorial/renderjs.html)实现在渲染层执行js，此时完整echart、threejs等web库均可使用。
On the other hand, [renderjs](/tutorial/renderjs.html) can be used to execute js in the rendering layer. At this time, complete web libraries such as echart and threejs can be used.
（但为了全端使用，仍然建议减少对dom库的依赖，在uni-app的插件市场可寻找全端可以的库来替代）
(However, for all-side use, it is still recommended to reduce the dependence on dom library. A fully available library can be found in the uni-app plug-in market as an alternative)

- App端支持各种调用原生能力的方式
- App side supports various methods of calling native capabilities
1. 支持 原生[混合开发](hybrid)
1. Support native [hybrid development](hybrid)
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
`uni-app` The logic layer is in the independent jscore, and the rendering layer can be rendered by webview and weex engine.
1. 使用webview渲染则整个架构与小程序相同，此时页面后缀为vue文件。
1. Using webview rendering, the entire architecture is the same as the applet, and the page suffix is vue file.
2. 使用weex引擎（经过改造）渲染，则整个架构与快应用相同，此时页面后缀为nvue文件。使用webview渲染时，可以指定由系统webview渲染还是由x5引擎渲染。
2. Use the weex engine (modified) to render, the entire architecture is the same as the quick application, and the page suffix is nvue file. When using webview rendering, you can specify whether to render by the system webview or by the x5 engine.

