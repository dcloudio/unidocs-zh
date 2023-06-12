**uni-app和原生App混合开发问题：** 
**Mixed development issues of uni-app and native App:**

首先务必确认uni-app和原生代码，谁是主谁是从的问题。
First of all, please be sure to confirm the question of who is the master and who is the slave between uni-app and native code.

- 如果你的应用是uni-app开发的，需要扩展一些原生能力，那么首先去[插件市场](https://ext.dcloud.net.cn/)看看有没有现成的插件，如果没有，就自己开发，开发文档请参考[原生插件开发教程](https://nativesupport.dcloud.net.cn/NativePlugin/README)。
- If your application is developed by uni-app and needs to expand some native capabilities, then first search for ready-made plugins in the [plugin market](https://ext.dcloud.net.cn/). If not, just develop it yourself. For development documents, please refer to [Native Plug-in Development Tutorial](https://nativesupport.dcloud.net.cn/NativePlugin/README).
- 如果你的App是原生开发的，部分功能栏目想通过uni-app实现，有2种方式
- If your App is native developed, there are two ways to realize some function columns through uni-app
  * 在原生App里集成uni小程序sdk，[参考](https://nativesupport.dcloud.net.cn/README)
  * Integrate the uni applet SDK in the native App, [Refer to](https://nativesupport.dcloud.net.cn/README)
  * 如果不想集成原生sdk，那就把uni-app代码发布成H5方式，在原生App里通过webview打开。
  * If you do not want to integrate the native sdk, publish the uni-app code in H5 mode and open it in the native app via webview.

如果应用是uni-app开发为主，只是想离线打包，那么不应该使用uni小程序sdk，而是使用App离线打包SDK，[参考](https://nativesupport.dcloud.net.cn/AppDocs/README)。
If the application is developed mainly by uni-app and you just want to package it offline, then you should not use the uni applet SDK but the App offline packaging SDK, [refer to](https://nativesupport.dcloud.net.cn/AppDocs/README). Also note that offline packaging cannot enjoy paid native plug-ins in the plug-in market. If you have relevant requirements, you need to develop your own native plug-ins.
另注意离线打包无法享受插件市场的付费原生插件，如有相关需求需自己进行原生插件开发。
Also note that offline packaging cannot enjoy paid native plugins in the plugin market. If you have relevant needs, you need to develop native plugins yourself.

**uni-app和原生小程序混合开发问题：** 
**The problem of mixed development of uni-app and native applet:**

- 方式1：把原生小程序转换为uni-app源码。有各种转换工具，[详见](translate.md)
- Method 1: Convert native MiniApp to uni-app source code. There are various conversion tools, [see](translate.md)
- 方式2：新建一个uni-app项目，把原生小程序的代码变成小程序组件，进而整合到uni-app项目下。uni-app支持使用小程序wxml组件，[参考](/tutorial/miniprogram-subject.md#小程序自定义组件支持)
- Method 2: Create a new uni-app project, convert the code of the native MiniApp into a MiniApp component, and then integrate it into the uni-app project. uni-app supports the use of MiniApp wxml components, [reference](/tutorial/miniprogram-subject.md#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%87%AA%E5% AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E6%94%AF%E6%8C%81)
- 方式3：原生开发的小程序仍保留，部分新功能使用uni-app开发。
- Method 3: The natively developed applet is still retained, and some new functions are developed using uni-app.
  * 使用发行为混合分包的功能
  * Use the feature that releases as a mixed subpackage
    + 在 HBuilderX 3.1.0+ 中点击发行小程序的菜单，勾选发行混合分包，填写分包目录名称，打包后，将对应目录文件拷贝至已有小程序中，需要自己补充原小程序app.json中的页面或分包配置
      ![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/mp-weixin-hybrid.jpg)
    + 在 cli 中，执行命令：`npm run build:mp-weixin -- --subpackage=sub1` 或 `yarn build:mp-weixin --subpackage=sub1`
    + In cli, execute the command: `npm run build:mp-weixin -- --subpackage=sub1` or `yarn build:mp-weixin --subpackage=sub1`
    
    注意：
    Notice:
  
    * 发行混合分包后，App.vue中的onLaunch会在首次进入分包时触发(HBuilderX 3.1.1+)。
    * After the mixed sub-package is released, the onLaunch in App.vue will be triggered when the sub-package is entered for the first time (HBuilderX 3.1.1+).
    * 开发时需要将资源(图片，css，js等)、页面的绝对路径调整为相对路径，否则打包到原生小程序中时，可能出现路径查找错误。
    * During development, it is necessary to adjust the absolute path of resources (images, css, js, etc.) and pages to relative paths, otherwise, when packaged into the native applet, path search errors may occur.
    * 需要自己把页面或分包配置添加到已有小程序的app.json中。
    * You need to add the page or subpackage configuration to the app.json of the existing applet.
    * 目前支持微信小程序、百度小程序、支付宝小程序、字节跳动小程序、飞书小程序、QQ小程序。
    * Currently supports WeChat applet, Baidu applet, Alipay applet, ByteDance applet, Feishu applet, and QQ applet.

  * 三方开发者插件，[参考](https://ext.dcloud.net.cn/plugin?id=1560)
  * Third-party developer plugin, [Reference](https://ext.dcloud.net.cn/plugin?id=1560)

如果想充分发挥uni-app的跨端特性，编译到各种其他小程序平台，建议使用方案1。
If you want to give full play to the cross-end features of uni-app and compile it to various other small program platforms, it is recommended to use scheme 1.

如果不需要其他小程序平台，仅需要h5和app，那方案1和方案2均可。
If you don't need other small program platforms, only need h5 and app, then plan 1 and plan 2 can be used.

如果只需要开发微信小程序，但想使用vue的方式开发、或者想利用uni-app的插件生态、或者部分页面想跨多端复用，那么使用方案3。
If you only need to develop WeChat mini-programs, but want to use Vue to develop, or want to use the plug-in ecology of uni-app, or want to reuse some pages across multiple terminals, then use option 3.
