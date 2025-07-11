### uni-ad广告变现

`uni-app` 支持接入`uni-ad`广告联盟，开发者可实现**一次开发，多端变现**。

`uni-ad` 支持开屏、信息流、激励视频、视频流、悬浮红包、推送等丰富的广告形式；

`uni-ad` 聚合了全网所有主流广告源，国内包括腾讯优量汇、字节穿山甲、快手、百度、华为、Sigmob、倍孜、章鱼、泛连、聚力、华夏乐游等十几家广告源以及自有广告客户，国外包括Google、海外穿山甲pangle、unity、liftoff、inmobi、ironsource、mintegral等广告源，通过强大的议价能力、精准的数据质量、优秀的比价算法，为开发者提供了更高的广告出价。

`uni-ad` 利用现有十几亿活跃用户数据以及多年的技术沉淀来不断升级广告优化策略，通过更有效的匹配、更好的竞价策略、更好的分层算法，让开发者获取更高的广告收益。


### uni-ad的广告源

- App平台的国内广告源聚合了腾讯优量汇、字节穿山甲、快手、百度、Google、华为、Sigmob、倍孜、章鱼广告联盟等主流广告渠道以及部分DCloud直投广告
- App平台的海外广告源聚合了Google、海外穿山甲pangle、unity、liftoff、inmobi、ironsource、mintegral等。
- H5平台的广告源由腾讯、百度、DCloud直投广告聚合组成
- 微信小程序平台的广告源由DCloud代理腾讯广告和部分DCloud直投广告聚合组成。同时微信小程序端也支持聚合微信自带的流量主广告
- 其他小程序平台由小程序平台提供，不在uni-ad后台注册，而在这些小程序自身的平台注册


### uni-ad支持平台

#### App平台

- [信息流(Banner)](https://uniapp.dcloud.net.cn/uni-ad/ad-component.html)
- [激励视频广告](https://uniapp.dcloud.net.cn/uni-ad/ad-rewarded-video.html)
- [uniMP激励视频广告](https://uniapp.dcloud.net.cn/uni-ad/unimp.html)
- [全屏视频广告](https://uniapp.dcloud.net.cn/uni-ad/ad-fullscreen-video.html)
- [插屏广告](https://uniapp.dcloud.net.cn/uni-ad/ad-interstitial.html)
- [沉浸视频流广告](https://uniapp.dcloud.net.cn/uni-ad/ad-draw.html)
- [短视频内容联盟](https://uniapp.dcloud.net.cn/uni-ad/ad-content-page.html)
- [互动广告](https://uniapp.dcloud.net.cn/uni-ad/ad-interactive.html)

#### 微信小程序

> `uni-ad`无开通门槛、提前结算、插件丰富。[详见](https://uniapp.dcloud.net.cn/uni-ad/ad-weixin.html)

- [信息流(Banner)](https://uniapp.dcloud.net.cn/uni-ad/ad-component.html)
- [激励视频广告](https://uniapp.dcloud.net.cn/uni-ad/ad-rewarded-video.html)
- [插屏广告](https://uniapp.dcloud.net.cn/uni-ad/ad-interstitial.html)
- [视频广告](https://uniapp.dcloud.net.cn/uni-ad/ad-video.html)
- [互动广告](https://uniapp.dcloud.net.cn/uni-ad/ad-interactive.html)

#### Web/H5

- [信息流(Banner)](https://uniapp.dcloud.net.cn/uni-ad/ad-component.html)


### uni-ad优势总结
1. 更高收益
  - 聚合全网广告源，确保填充
  - 自动竞价，选择最高收益填充
  - 根据用户数据精准分层，不会直接落到最低收益
2. 更全平台
  - App、小程序、web，一站全搞定
3. 更快结算
  - 默认每月4日、19日两次结算。扫描联系商务申请更短结算周期

<figure style="margin: 50px 0;">
  <img src="https://web-ext-storage.dcloud.net.cn/doc/ad/wx_qrcode/uni-ad-wx-1.png">
  <img style="margin-left: 100px" src="https://web-ext-storage.dcloud.net.cn/doc/ad/wx_qrcode/uni-ad-wx-2.png">
</figure>

### 开通配置广告步骤@start

1. 开通广告
需在广告平台后台操作：
* App平台、H5平台及微信小程序平台：[https://uniad.dcloud.net.cn/](https://uniad.dcloud.net.cn/)
* 其他小程序平台：在各自的小程序管理后台操作
2. 在页面合适位置编写代码，放置组件，配上广告位id。
3. App端打包后生效，打包时必须选择要集成的广告SDK（穿山甲、优量汇、快手、百度等渠道）。


### 实时竞价 Bidding@bidding

HBuilder 3.6.7+ 或原生广告 SDK 5.0.0+版本 uni-ad 开屏、信息流、激励视频、插屏广告支持实时竞价功能。
支持多家广告（腾讯优量汇广告联盟、快手广告联盟、百度百青藤广告联盟等）参与实时竞价，展示高价格 eCPM 广告，可有效提升填充，释放运营人力，最大化流量价值。
目前系统已自动开启 Bidding 配置，无需开发者配置。

### 瀑布流@waterfall
瀑布流功能，1个广告位id可配置多个渠道广告位，自动切换广告位，提高广告填充率。 如需瀑布流的配置请通过[uni-im](https://im.dcloud.net.cn/#/?joinGroup=65d85fc09847e92db03ff81a&&oauthToken=ffa042cb5287136b8aba3b13a9ce5821)联系uni-ad商务/运营，或发邮件至uniad@dcloud.io

### 广告相关组件/API

- [信息流(Banner)](https://uniapp.dcloud.net.cn/uni-ad/ad-component.html)
- [激励视频广告](https://uniapp.dcloud.net.cn/uni-ad/ad-rewarded-video.html)
- [全屏视频广告](https://uniapp.dcloud.net.cn/uni-ad/ad-fullscreen-video.html)
- [插屏广告](https://uniapp.dcloud.net.cn/uni-ad/ad-interstitial.html)
- [沉浸视频流广告](https://uniapp.dcloud.net.cn/uni-ad/ad-draw.html)
- [短视频内容联盟组件](https://uniapp.dcloud.net.cn/uni-ad/ad-content-page.html)
- [互动广告](https://uniapp.dcloud.net.cn/uni-ad/ad-interactive.html)

**错误码**

[错误码相关问题排查](https://uniapp.dcloud.net.cn/uni-ad/ad-error-code.html)


更多信息参考 [uni-ad 广告联盟](https://uniad.dcloud.net.cn)
