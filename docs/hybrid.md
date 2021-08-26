**uni-app和原生App混合开发问题：** 

首先务必确认uni-app和原生代码，谁是主谁是从的问题。

- 如果你的应用是uni-app开发的，需要扩展一些原生能力，那么首先去[插件市场](https://ext.dcloud.net.cn/)看看有没有现成的插件，如果没有，就自己开发，开发文档请参考[原生插件开发教程](https://nativesupport.dcloud.net.cn/NativePlugin/README)。
- 如果你的App是原生开发的，部分功能栏目想通过uni-app实现，有2种方式
  * 在原生App里集成uni小程序sdk，[参考](https://nativesupport.dcloud.net.cn/README)
  * 如果不想集成原生sdk，那就把uni-app代码发布成H5方式，在原生App里通过webview打开。

如果应用是uni-app开发为主，只是想离线打包，那么不应该使用uni小程序sdk，而是使用App离线打包SDK，[参考](https://nativesupport.dcloud.net.cn/AppDocs/README)。
另注意离线打包无法享受插件市场的付费原生插件，如有相关需求需自己进行原生插件开发。
