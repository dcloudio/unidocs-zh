
`uni-app` 积极拥抱社区，创建了开放、兼容的生态系统。

- [uni-app插件市场](https://ext.dcloud.net.cn)，有数千款插件，支持前端组件、js sdk、页面模板、项目模板、原生插件等多种类型。在生态建设上远远领先于竞品。

- 兼容 NPM 包管理系统
uni-app完整支持 NPM ，[详见](https://uniapp.dcloud.io/frame?id=npm%E6%94%AF%E6%8C%81)

- 兼容 weex 插件生态
uni-app内置了`weex`，`weex`的原生插件或ui库均可使用。注意`weex`的生态不如`uni-app`丰富，一般情况建议使用`uni-app`的插件市场。

- 兼容 普通 web 库
`uni-app`的H5端支持所有浏览器API。

`uni-app`的App端，一方面可通过web-view组件加载HTML，引入web相关库；另一方面可通过[renderjs](frame?id=renderjs)实现在渲染层执行js，此时完整echart、threejs等web库均可使用。
（但为了全端使用，仍然建议减少对dom库的依赖，在uni-app的插件市场可寻找全端可以的库来替代）

- App端支持各种调用原生能力的方式
1. 支持 原生[混合开发](hybrid)
2. 支持 [原生插件扩展](https://ask.dcloud.net.cn/article/35428)
3. 支持 [云打包原生插件](https://ask.dcloud.net.cn/article/35412)。

- App端支持双渲染引擎
`uni-app`逻辑层在独立jscore，而渲染层可选webview渲染和weex引擎渲染。
1. 使用webview渲染，此时页面后缀为vue文件。
2. 使用weex引擎（经过改造）渲染，此时页面后缀为nvue文件。使用webview渲染时，可以指定由系统webview渲染还是由x5引擎渲染。

