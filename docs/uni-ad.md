### uni-AD广告变现
### uni-AD ad monetization

`uni-app` 支持接入`uni-AD`广告联盟，开发者可实现**一次开发，多端变现**。
`uni-app` supports access to `uni-AD` advertising alliance, developers can realize **one development, multi-terminal realization**.

`uni-AD`支持开屏、信息流、激励视频、视频流、悬浮红包、推送等丰富的广告形式；
`uni-AD` supports rich advertising forms such as screen opening, information flow, rewarded video, video streaming, floating red envelopes, and push;

`uni-AD` 聚合了全网所有主流广告源，包括腾讯优量汇、字节穿山甲、快手、百度、华为、360、Sigmob等十几家广告源以及自有广告客户，并通过优秀比价算法，提供了更高的广告出价。
`uni-AD` aggregates all mainstream advertising sources on the entire network, including Tencent Youlianghui, Byte Pangolin, Kuaishou, Baidu, Huawei, 360, Sigmob and more than a dozen advertising sources and its own advertisers, and uses excellent price comparison algorithms. , offered a higher ad bid.

`uni-AD`利用现有十几亿活跃用户数据以及多年的技术沉淀来不断升级广告优化策略，通过更有效的匹配、更好的竞价策略、更好的分层算法，让开发者获取更高的广告收益。
`uni-AD` uses the existing data of more than one billion active users and years of technical accumulation to continuously upgrade advertising optimization strategies. Through more effective matching, better bidding strategies, and better layered algorithms, developers can obtain more high advertising revenue.


### uni-AD的广告源
### uni-AD's ad source

- App端的广告源由腾讯优量汇、字节穿山甲、快手、百度、华为、360、Sigmob广告联盟等主流广告渠道以及部分DCloud直投广告聚合组成
- The advertising sources on the App side are composed of mainstream advertising channels such as Tencent Youlianghui, Byte Pangolin, Kuaishou, Baidu, Huawei, 360, and Sigmob Advertising Alliance, as well as some DCloud direct advertising aggregation.
- H5端的广告源由百度、DCloud直投广告聚合组成
- The advertising source on the H5 side is composed of Baidu and DCloud direct advertising aggregation
- 微信小程序端的广告源由DCloud代理腾讯广告和部分DCloud直投广告聚合组成。同时微信小程序端也支持微信自带的广告。uni-AD自营广告有更低的开通门槛
- The advertising source on the WeChat applet is composed of DCloud agency Tencent advertising and some DCloud direct advertising aggregation. At the same time, the WeChat applet also supports the advertisements that come with WeChat. uni-AD self-operated advertising has a lower threshold for opening
- 其他小程序端由小程序平台提供，不在uni-AD后台注册，而在这些小程序自身的平台注册
- Other applet terminals are provided by the applet platform, not registered in the uni-AD background, but registered on the platform of these applet


### 微信小程序广告专题
### WeChat Mini Program Advertising Topics
- `uni-AD`无开通门槛、提前结算、插件丰富。[详见](https://uniapp.dcloud.net.cn/component/ad-weixin.html)

### uniMP激励视频广告@unimp
- uniMP激励视频广告 [详见](https://uniapp.dcloud.net.cn/component/uni-ad-unimp.html)


### uni-AD优势总结
### uni-AD Advantage Summary
1. 更高收益
1. Higher yield
  - 聚合全网广告源，确保填充
  - Aggregate the entire network advertising sources to ensure filling
  - 自动竞价，选择最高收益填充
  - Automatic bidding, choose the highest yield fill
  - 根据用户数据精准分层，不会直接落到最低收益
  -Accurately stratified according to user data, will not directly fall to the lowest income
2. 更全平台
2. More complete platform
  - App、小程序、web，一站全搞定
  - App, applet, web, all in one place
3. 更快结算
3. Faster settlement
  - 默认每月4日、19日两次结算。扫描联系商务申请更短结算周期
  - By default, it is settled twice on the 4th and 19th of each month. Scan contact business application for shorter billing cycle

![](https://web-assets.dcloud.net.cn/unidoc/zh/eryunweixin.jpg)

### 开通配置广告步骤@start
### Activate configuration advertisement steps @start

1. 开通广告
1. Open an advertisement
需在广告平台后台操作：
It needs to be operated in the background of the advertising platform:
* App平台、H5平台及微信小程序平台：[https://uniad.dcloud.net.cn/](https://uniad.dcloud.net.cn/)
* App platform, H5 platform and WeChat applet platform: [https://uniad.dcloud.net.cn/](https://uniad.dcloud.net.cn/)
* 其他小程序平台：在各自的小程序管理后台操作
* Other applet platforms: operate in the background of their respective applet management
2. 在页面合适位置编写代码，放置组件，配上广告位id。
2. Write the code at the appropriate position on the page, place the component, and match the ad slot id.
3. App端打包后生效，打包时必须选择要集成的广告SDK（穿山甲、广点通、360联盟、快手等渠道）。
3. It takes effect after the app is packaged. When packaging, you must select the advertising SDK to be integrated (Pangolin, Guangdiantong, 360 Alliance, Kuaishou, etc.).


<a id="bidding"/>

### 实时竞价 Bidding  
### Real Time Bidding
HBuilderX3.5.0+版本 uni-AD 激励视频广告支持实时竞价功能。  
HBuilderX3.5.0+ version uni-AD rewarded video ads support real-time bidding function.
支持多家广告（腾讯优量汇广告联盟、快手广告联盟、百度百青藤广告联盟）参与实时竞价，展示高价格eCPM广告，可有效提升填充，释放运营人力，最大化流量价值。  
Support multiple advertisements (Tencent Youlianghui Advertising Alliance, Kuaishou Advertising Alliance, Baidu Baiqingteng Advertising Alliance) to participate in real-time bidding and display high-priced eCPM advertisements, which can effectively improve filling, release operational manpower, and maximize traffic value.
目前已开放内测，请邮件联系 uniad@dcloud.io 申请试用。  
The internal test is currently open, please contact uniad@dcloud.io to apply for a trial.

### 广告相关组件
### Advertising related components

- [信息流(Banner)](https://uniapp.dcloud.net.cn/component/ad.html)
- [Banner](https://uniapp.dcloud.net.cn/component/ad.html)
- [激励视频广告](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html)
- [Rewarded Video Ads](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html)
- [全屏视频广告](https://uniapp.dcloud.net.cn/component/ad-fullscreen-video.html)
- [Fullscreen Video Ads](https://uniapp.dcloud.net.cn/component/ad-fullscreen-video.html)
- [插屏广告](https://uniapp.dcloud.net.cn/component/ad-interstitial.html)
- [Interstitial Ad](https://uniapp.dcloud.net.cn/component/ad-interstitial.html)
- [沉浸视频流广告](https://uniapp.dcloud.net.cn/component/ad-draw.html)
- [Immersive Video Streaming Ads](https://uniapp.dcloud.net.cn/component/ad-draw.html)
- [短视频内容联盟组件](https://uniapp.dcloud.net.cn/component/ad-content-page.html)

### 广告相关API

- [激励视频广告](https://uniapp.dcloud.net.cn/api/ad-rewarded-video.html)
- [全屏视频广告](https://uniapp.dcloud.net.cn/api/ad-fullscreen-video.html)
- [插屏广告](https://uniapp.dcloud.net.cn/api/ad-interstitial.html)
- [互动游戏](https://uniapp.dcloud.net.cn/api/a-d/interactive.html)
- [Interactive Game](https://uniapp.dcloud.net.cn/api/a-d/interactive.html)


更多信息参考 [uni-AD 广告联盟](https://uniad.dcloud.net.cn)
For more information, please refer to [uni-AD Advertising Alliance](https://uniad.dcloud.net.cn)
