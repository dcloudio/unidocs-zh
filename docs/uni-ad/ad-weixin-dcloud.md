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
4. 针对优质小程序开发者，可走快速结算通道。结算周期相比微信小程序自带流量主广告要短，解决开发者现金流紧张问题
5. 专业的人工客服，7x12小时为您提供极速响应的服务



### 微信小程序广告开通指南

>整体流程：创建小程序应用 -> 开通广告 -> 资质审核 -> 广告插件审核 -> 广告代码集成 -> 查看报表

#### 创建小程序应用
进入 uni-ad 广告联盟后台（[https://uniad.dcloud.net.cn](https://uniad.dcloud.net.cn)） ，使用DCloud开发者账号登陆广告联盟管理后台，点击左侧菜单栏【广告设置】，点击页面上面的“创建应用”按钮，如页面已存在相关应用则不需要重复创建
![](https://web-ext-storage.dcloud.net.cn/doc/ad/wx_dcloud/app_list.png)

如果你的小程序是uni-app开发，请选择“uni-app应用”。如果是原生小程序开发，请选择“原生应用”。输入小程序的实际名称，点击“创建应用”
![](https://web-ext-storage.dcloud.net.cn/doc/ad/wx_dcloud/create_app.png)

### 开通广告
创建好后，在列表中选择一个小程序应用，点击最后的按钮“应用详情”
![](https://web-ext-storage.dcloud.net.cn/doc/ad/wx_dcloud/open_ad.png)


打开页面后，进入到微信小程序广告Tab页面，点击“申请微信小程序广告”
![](https://web-ext-storage.dcloud.net.cn/doc/ad/wx_dcloud/open_wx_ad.png)

输入微信小程序APPID、微信小程序名称，最后点击“确认开通”。

![](https://web-ext-storage.dcloud.net.cn/doc/ad/wx_dcloud/dcloud_wx_open.png)



### 广告代码集成
当您的微信小程序是审核通过状态，广告才可正常展示。届时您可以开始根据广告的开发文档进行调试。

[横幅广告(banner)](https://uniapp.dcloud.net.cn/uni-ad/ad-component.html)

[横版卡片广告](https://uniapp.dcloud.net.cn/uni-ad/ad-video.html)

[插屏广告](https://uniapp.dcloud.io/uni-ad/ad-interstitial.html)

[全屏广告](https://uniapp.dcloud.net.cn/uni-ad/ad-fullscreen-video.html)

[激励视频广告](https://uniapp.dcloud.io/uni-ad/ad-rewarded-video.html)

[格子广告](https://uniapp.dcloud.io/uni-ad/ad-grid.html)

**注意：**  

1. **在使用到广告位的页面路径后缀加上广告位，例如：`pages/test-ad/test-ad_1013000002`，其中`1013000002`是广告位id（实际换成你自己申请下来的广告位），如果一个页面使用到多种类型的广告位，任选一个加上**  

	![](https://web-ext-storage.dcloud.net.cn/doc/ad/wx_dcloud/path_adpid.png)

2. 在微信开发者工具中添加插件adcore，如果已添加过则忽略
	![](https://web-ext-storage.dcloud.net.cn/doc/ad/wx_dcloud/add_plugin.png)
3. 开发者通过`HBuilder X 4.82+ (Alpha版本)` 重新发布微信小程序

### 广告报表查看
微信小程序广告的数据报表请登录uni-ad后台，左侧菜单栏的【数据收益】进行查看，微信小程序广告数据放在小程序广告数据Tab页面，可单独查看。
![](https://web-ext-storage.dcloud.net.cn/doc/ad/wx_dcloud/adp_income.png)
![](https://web-ext-storage.dcloud.net.cn/doc/ad/wx_dcloud/day_income.png)

## uni-ad微信小程序流量主代运营广告

### 简介

DCloud是微信官方核准的广告代运营服务商，代运营是微信给开发者和服务商之间搭建的合作方案。

开发者可以通过代运营的方式将微信小程序流量主广告的变现委托给uni-ad。这样uni-ad可以聚合微信流量主及uni-ad的其他广告源，进行综合比价，给予开发者更高的变现收益。

同时uni-ad还会提供模板、激励视频防刷等易用性、安全性方面的增值服务，帮助开发者更好的做变现。

如果您之前未开通微信流量主，通过本流程授权代运营后，uni-ad也会帮您开通微信流量主，然后和uni-ad的其他广告进行整体聚合比价。


### 开通流程
1. 登录[uni-ad](https://uniad.dcloud.net.cn/)，点击左侧导航栏 **广告设置->点击应用进入应用详情->点击微信小程序广告->点击授权微信小程序流量主代运营**
   ![](https://web-ext-storage.dcloud.net.cn/doc/ad/wx_agency/apply.png)
   确认微信appid及名称并勾选后点击下一步
   ![](https://web-ext-storage.dcloud.net.cn/doc/ad/wx_agency/step.png)
2. 使用微信小程序appid绑定的管理员个人微信号进行扫码授权
   ![](https://web-ext-storage.dcloud.net.cn/doc/ad/wx_agency/qrcode_agree.png)
   然后在手机端按流程提示完成授权：
   ![](https://web-ext-storage.dcloud.net.cn/doc/ad/wx_agency/mobile.png)
::: warning FAQ
- **Q：微信小程序绑定的管理员在哪查看？**
- A：登录[微信公众平台](https://mp.weixin.qq.com/)，点击左侧导航栏 **成员管理** 查看管理员账户
- ![](https://web-ext-storage.dcloud.net.cn/doc/ad/wx_agency/mp_admin.png)
- **Q：授权代运营的管理费**
- A：uni-ad默认收取开发者流量主广告收益的1%作为服务费。同时uni-ad承诺给开发者提供比单纯的流量主广告变现更高的收益提升，如未达到此目标，开发者可以申请退还服务费。
- **Q：结款流程**
- A：授权代运营后，微信流量主的广告收益，仍然由微信直接结算给开发者。开发者可以在自己的微信小程序后台看到账单，根据账单向微信开票。uni-ad聚合的其他广告收益，由DCloud给开发者结算，在uni-ad后台查看。
- **Q：授权后是否可以再取消代运营**
- A：开发者可以随时取消代运营（小程序管理员微信在手机端自助操作，无需DCloud审核）。uni-ad的核心是为开发者创造更高收益、更方便和安全的变现，如果开发者没有达到期待，可以随时取消代运营。但取消前建议和DCloud商务沟通，查验不满意的原因，因为正常情况下uni-ad会更有优势。
- **Q：数据查看**
- A：授权代运营后，微信流量主的广告收益在微信后台仍然可以看到。同时在uni-ad后台可以看到聚合比价后的整体总收益，会大于微信后台的收益。
:::

3. 代运营授权完成后uni-ad系统会自动检测该小程序是否已开通微信流量主广告。如未开通且符合条件，uni-ad会自动开通微信流量主广告，如果检测不通过，uni-ad会提示错误原因。

4. 开发者通过`HBuilder X 4.82+ (Alpha版本)` 重新发布微信小程序

### 广告位说明
- 开发者在开通uni-ad微信小程序广告时，uni-ad已经会自动创建6个小程序广告位，列表如下:
  ![](https://web-ext-storage.dcloud.net.cn/doc/ad/wx_agency/applet_adp_list.png)

然后授权uni-ad流量主代运营后，uni-ad会针对以上广告位创建流量主广告位，名称为：`uni-ad-[广告位名称]`，开发者如已使用以上广告位adpid，则不需要修改对应代码，重新发布小程序即可。

如遇到任何问题请联系uni-ad运营或邮件<a href="mailto:uniad@dcloud.io">uniad@dcloud.io</a>解决，谢谢。

