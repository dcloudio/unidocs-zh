## 信息流广告
## In-feed ads

### 简介
### Introduction

应用内展示的广告组件，可用于banner或信息流。
In-app display advertising component, which can be used for banner or news feed.

### 适用场景
### Applicable scene

Banner或信息流广告展现场景非常灵活，常见的展现场景为：文章顶部，详情页面顶部，第一屏中部等。建议信息流广告不要放置在底部
Banner or information flow advertisement display scenarios are very flexible. Common display scenarios are: the top of the article, the top of the details page, the middle of the first screen, etc. It is recommended not to place in-feed ads at the bottom

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/ad-feed.png)


- App端的广告源由腾讯优量汇、头条穿山甲、快手广告联盟等主流广告渠道以及部分DCloud直投广告组成，在DCloud的uni-ad后台注册：[https://uniad.dcloud.net.cn/](https://uniad.dcloud.net.cn/)
- H5端、微信小程序端的广告由DCloud直接提供
- The advertisements on the H5 terminal and WeChat applet are directly provided by DCloud
- 其他小程序端由小程序平台提供
- 鸿蒙平台已经集成了鸿鲸广告，不过因鸿蒙填充率较低，线上版本暂不支持。可使用条件编译临时规避，使用 `#ifndef APP-HARMONY` 进行规避。如果需要可以单独对接，可在 [uni-ad](https://uniad.dcloud.net.cn/home) 找到 uni-im 交流群沟通。

**平台差异说明**
**Platform Difference Description**

|App|HarmonyOS Next|Web|微信小程序|支付宝小程序|百度小程序|抖音小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|元服务|小红书小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√（2.5.2+）|x|3.4.8+|√|x|√|√|√|x|x|√|x|x|x|

**开通配置广告**
**Activate configuration advertisement**

[开通广告步骤详情](https://uniapp.dcloud.net.cn/uni-ad/ad-open.html)


文档已迁移至 [信息流(Banner)广告](https://uniapp.dcloud.net.cn/uni-ad/ad-component.html)
