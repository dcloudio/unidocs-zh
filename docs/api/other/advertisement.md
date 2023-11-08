#### 广告
#### advertise

广告API
Advertising API

广告能力在不同小程序端实现不同，使用时需注意用[条件编译](https://uniapp.dcloud.io/platform)调用不同平台的代码。
Advertising capabilities are implemented differently on different applets. When using, you should use [conditional compilation](https://uniapp.dcloud.io/platform) to call the code of different platforms.

- App平台：无需编码，在打包App时可直接勾选广告位，[详见](https://dcloud.io/dad.html)
- App platform: No coding required, you can directly check the advertising space when packaging the App, [see details](https://dcloud.io/dad.html)
- 微信小程序：[规范文档](https://developers.weixin.qq.com/miniprogram/dev/api/wx.createRewardedVideoAd.html)
- WeChat Mini Program: [Specification Document](https://developers.weixin.qq.com/miniprogram/dev/api/wx.createRewardedVideoAd.html)
- 百度小程序：有组件但无API
- Baidu Mini Program: There are components but no API
- 支付宝小程序：不支持此能力
- 抖音小程序：仅小游戏可用，小程序不可用，不适用于uni-app
- QQ小程序：[规范文档](https://q.qq.com/wiki/develop/miniprogram/API/ad/qq.createRewardedVideoAd.html)