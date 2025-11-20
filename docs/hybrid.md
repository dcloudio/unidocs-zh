## uni-app 和原生 App 混合开发问题

首先务必确认 uni-app 和原生代码，谁是主谁是从的问题。

- 如果你的应用是 uni-app 开发的，需要扩展一些原生能力，那么首先去[插件市场](https://ext.dcloud.net.cn/)看看有没有现成的插件，如果没有，就自己开发，开发文档请参考[原生插件开发教程](https://nativesupport.dcloud.net.cn/NativePlugin/README)。
- 如果你的 App 是原生开发的，部分功能栏目想通过 uni-app 实现，有 2 种方式
  - 在原生 App 里集成 uni 小程序 sdk，[参考](https://nativesupport.dcloud.net.cn/README)
  - 如果不想集成原生 sdk，那就把 uni-app 代码发布成 H5 方式，在原生 App 里通过 webview 打开。

如果应用是 uni-app 开发为主，只是想离线打包，那么不应该使用 uni 小程序 sdk，而是使用 App 离线打包 SDK，[参考](https://nativesupport.dcloud.net.cn/AppDocs/README)。
另注意离线打包无法享受插件市场的付费原生插件，如有相关需求需自己进行原生插件开发。

## uni-app 和原生小程序混合开发问题

- 方式 1：把原生小程序转换为 uni-app 源码。有各种转换工具，[详见](translate.md)
- 方式 2：新建一个 uni-app 项目，把原生小程序的代码变成小程序组件，进而整合到 uni-app 项目下。uni-app 支持使用小程序 wxml 组件，[参考](/tutorial/miniprogram-subject.md#小程序自定义组件支持)
- 方式 3：原生开发的小程序仍保留，部分新功能使用 uni-app 开发。

  - 使用发行为混合分包的功能

    - 在 HBuilderX 3.1.0+ 中点击发行小程序的菜单，勾选发行混合分包，填写分包目录名称，打包后，将对应目录文件拷贝至已有小程序中，需要自己补充原小程序 app.json 中的页面或分包配置
      ![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/mp-weixin-hybrid.jpg)
    - 在 cli 中，执行命令：`npm run build:mp-weixin --subpackage=sub1` 或 `yarn build:mp-weixin --subpackage=sub1`

    注意：

    - 发行混合分包后，App.vue 中的 onLaunch 会在首次进入分包时触发(HBuilderX 3.1.1+)。
    - 开发时需要将资源(图片，css，js 等)、页面的绝对路径调整为相对路径，否则打包到原生小程序中时，可能出现路径查找错误。
    - 需要自己把页面或分包配置添加到已有小程序的 app.json 中。
    - 目前支持微信小程序、百度小程序、支付宝小程序、抖音小程序、飞书小程序、QQ 小程序。

  - 三方开发者插件，[参考](https://ext.dcloud.net.cn/plugin?id=1560)

如果想充分发挥 uni-app 的跨端特性，编译到各种其他小程序平台，建议使用方案 1。

如果不需要其他小程序平台，仅需要 h5 和 app，那方案 1 和方案 2 均可。

如果只需要开发微信小程序，但想使用 vue 的方式开发、或者想利用 uni-app 的插件生态、或者部分页面想跨多端复用，那么使用方案 3。
