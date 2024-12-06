## uni-ad微信小程序广告
### 简介

uni-ad的微信小程序广告目前支持uni-app，以及原生开发的小程序进行变现。广告形式有：Banner，视频广告，插屏，激励视频，格子广告，互动红包（仅支持企业用户）。
各广告形式的代码开发文档如下：

[信息流广告/原生广告](https://uniapp.dcloud.net.cn/uni-ad/ad-component.html)

[插屏广告](https://uniapp.dcloud.io/uni-ad/ad-interstitial.html)

[视频广告](https://uniapp.dcloud.net.cn/uni-ad/ad-video.html)（HBX3.7.0+版本） **大横幅展示，品牌广告主预算，收益比信息流广告高**

[激励视频广告](https://uniapp.dcloud.io/uni-ad/ad-rewarded-video.html) **激励视频是收益最高的广告形式，建议小程序一定要开启**

[格子广告](https://uniapp.dcloud.io/uni-ad/ad-grid.html)（HBX3.5.1+版本）

[互动红包](https://uniapp.dcloud.net.cn/uni-ad/ad-interactive.html)（HBX3.6.7+版本） **广告创意可自定义，用户打开页面后进入抽奖环节**

注：微信小程序开屏广告uni-ad暂不支持。因为小程序开屏时间短，广告效果没有其他广告形式好。

**uni-ad微信小程序由于升级，目前暂不支持个人微信小程序的申请。升级期间企业和个体工商户类型微信小程序不受影响。**

uni-ad微信小程序广告的优势在于：
1. 无申请门槛。uni-ad的申请无任何门槛，0日活也可以申请开通。微信申请流量主需要小程序UV过千
2. 广告收益高，uni-ad微信小程序广告汇集三方广告主预算
3. 安全防护 uni-ad内置了安全防护策略，减少广告被刷风险
4. uni-ad微信小程序广告支持格子广告，而微信小程序自带的流量主广告不支持
5. 针对优质小程序开发者，可走快速结算通道。结算周期相比微信小程序自带流量主广告要短，解决开发者现金流紧张问题
6. 专业的人工客服，7x12小时为您提供极速响应的服务



### 微信小程序广告开通指南

>整体流程：创建小程序应用 -> 开通广告 -> 资质审核 -> 广告插件审核 -> 广告代码集成 -> 查看报表

#### 创建小程序应用
进入 uni-ad 广告联盟后台（[https://uniad.dcloud.net.cn](https://uniad.dcloud.net.cn)） ，使用DCloud开发者账号登陆广告联盟管理后台，点击左侧菜单栏【广告设置】，点击页面上面的“创建应用”按钮
![](https://web-ext-storage.dcloud.net.cn/doc/ad/wx_dcloud/app_list.png)

如果你的小程序是uni-app开发，请选择“uni-app应用”。如果是原生小程序开发，请选择“原生应用”。输入小程序的实际名称，点击“创建应用”
![](https://web-ext-storage.dcloud.net.cn/doc/ad/wx_dcloud/create_app.png)

### 开通广告
创建好后，在列表中选择一个小程序应用，点击最后的按钮“应用详情”
![](https://web-ext-storage.dcloud.net.cn/doc/ad/wx_dcloud/open_ad.png)


打开页面后，进入到微信小程序广告Tab页面，点击“开通微信小程序广告”
![](https://web-ext-storage.dcloud.net.cn/doc/ad/wx_dcloud/open_wx_ad.png)

**注意：如果微信小程序尚未发布，您无法审核通过。请确认申请广告前微信小程序已经发布，并且页面展示正常无误。**
其他的信息按照实际情况正常填写，最后点击“确认开通”。

![](https://web-ext-storage.dcloud.net.cn/doc/ad/wx_dcloud/open_wx_ad1.png)

::: warning FAQ

- **Q：插件截图如何获取？**
- A：广告插件申请需开发者登录微信微信公众平台 [https://mp.weixin.qq.com/](https://mp.weixin.qq.com/)进行提交（需添加2个插件：uniAD 和 珊瑚运营平台。添加广告插件成功后请严格按照页面提示样式进行截图，具体截图样式如下。上传广告插件截图成功后，点击页面下方的“完成”按钮。
![](https://web-ext-storage.dcloud.net.cn/doc/ad/wx_dcloud/wx-plugin.png)

- **Q：如何添加插件？**
- A：登陆微信公众平台 [https://mp.weixin.qq.com/](https://mp.weixin.qq.com/)，点击左侧栏最底部【你的小程序名称】出现弹框，点击【账号设置】，然后找到顶部页签【第三方设置】，向下滚动屏幕到【插件管理】，点击【添加插件】按钮，搜索【uniAD】和【珊瑚运营平台】插件并添加。

如您无法在微信公众平台搜索到插件，请采用如下方式进行添加：
把含有广告插件的小程序在 HBuilderX 运行到微信开发者工具，在微信的开发者工具调试控制台会输出申请插件的链接，点击后弹出申请确认框，然后点击 `确定` 按钮。

【注意】：安装插件后“珊瑚运营平台”会显示【待确认】状态，属于正常现象，此插件是与广告位一起审核，直接提交广告开通申请，待广告位开通后会显示【已通过】。

- **Q：微信小程序资质审核多久？**
- A：一般1-3个工作日后会有审核结果，请注意查收邮件或站内通知。**注意：在微信小程序资质审核通过后，您会收到相关的代码位信息以及广告代码部署文档，请查看邮件或站内通知。**
:::



### 广告代码集成
当您的微信小程序资质以及广告插件都是审核通过状态，广告才可正常展示。届时您可以开始根据广告的开发文档进行调试。

[信息流广告/原生广告](https://uniapp.dcloud.net.cn/uni-ad/ad-component.html)

[视频广告](https://uniapp.dcloud.net.cn/uni-ad/ad-video.html)

[激励视频广告](https://uniapp.dcloud.io/uni-ad/ad-rewarded-video.html)

[插屏广告](https://uniapp.dcloud.io/uni-ad/ad-interstitial.html)

[激励视频广告](https://uniapp.dcloud.io/uni-ad/ad-rewarded-video.html)

[格子广告](https://uniapp.dcloud.io/uni-ad/ad-grid.html)

### 广告报表查看
微信小程序广告的数据报表请登录uni-ad后台，左侧菜单栏的【数据收益】进行查看，微信小程序广告数据放在小程序广告数据Tab页面，可单独查看。
![](https://web-ext-storage.dcloud.net.cn/doc/ad/wx_dcloud/adp_income.png)
![](https://web-ext-storage.dcloud.net.cn/doc/ad/wx_dcloud/day_income.png)

如遇到任何问题请联系uni-ad运营或邮件<a href="mailto:uniad@dcloud.io">uniad@dcloud.io</a>解决，谢谢。
