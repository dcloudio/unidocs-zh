#### NFC

仅微信小程序平台、App平台支持，各平台开发方式暂未统一，使用时需注意用[条件编译](https://uniapp.dcloud.io/platform)调用不同平台的代码。
It is only supported by the WeChat applet platform and the App platform. The development methods of each platform are not unified yet. When using it, you should use [conditional compilation] (https://uniapp.dcloud.io/platform) to call the code of different platforms.

- 微信小程序平台实现参考：[规范详情](https://developers.weixin.qq.com/miniprogram/dev/api/wx.startHCE.html)
- WeChat Mini Program Platform Implementation Reference: [Specification Details](https://developers.weixin.qq.com/miniprogram/dev/api/wx.startHCE.html)

- App 平台：
- App platform:
  1. 通过Native.js实现，**安卓：**[NFC数据读取](https://ask.dcloud.net.cn/question/6726)
  1. Implemented by Native.js, **Android:**[NFC data reading](https://ask.dcloud.net.cn/question/6726)
  2. 使用原生插件，详见[插件市场](https://ext.dcloud.net.cn/search?q=nfc)
  2. Use native plugins, see [Plugin Market](https://ext.dcloud.net.cn/search?q=nfc)
