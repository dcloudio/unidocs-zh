## uni-ad微信小程序流量主代运营广告

### 简介

DCloud是微信官方核准的广告代运营服务商，代运营是微信给开发者和服务商之间搭建的合作方案。

开发者可以通过代运营的方式将微信小程序流量主广告的变现委托给uni-ad。这样uni-ad可以聚合微信流量主及uni-ad的其他广告源，进行综合比价，给予开发者更高的变现收益。

同时uni-ad还会提供模板、激励视频防刷等易用性、安全性方面的增值服务，帮助开发者更好的做变现。

如果您之前未开通微信流量主，通过本流程授权代运营后，uni-ad也会帮您开通微信流量主，然后和uni-ad的其他广告进行整体聚合比价。

### 开通条件
1. 首先需要开通[uni-ad](https://uniad.dcloud.net.cn)，

2. 开通uni-ad的微信小程序广告，开通指南[点击这里](https://ask.dcloud.net.cn/article/39928)

### 开通流程
1. 登录[uni-ad](https://uniad.dcloud.net.cn/)，点击左侧导航栏 **广告设置->点击应用进入应用详情->点击微信小程序广告->点击授权微信小程序流量主代运营**
![](https://web-ext-storage.dcloud.net.cn/doc/ad/wx_component/apply.png)
确认微信appid及名称点击下一步
![](https://web-ext-storage.dcloud.net.cn/doc/ad/wx_component/step1.png)
2. 使用微信小程序appid绑定的管理员个人微信号进行扫码授权
![](https://web-ext-storage.dcloud.net.cn/doc/ad/wx_component/qrcode_agree.png)
然后在手机端按流程提示完成授权：
![](https://web-ext-storage.dcloud.net.cn/doc/ad/wx_component/mobile.png)
::: warning FAQ
- **Q：微信小程序绑定的管理员在哪查看？**
- A：登录[微信公众平台](https://mp.weixin.qq.com/)，点击左侧导航栏 **成员管理** 查看管理员账户
- ![](https://web-ext-storage.dcloud.net.cn/doc/ad/wx_component/mp_admin.png)
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

4. 开发者通过`HBuilder X 4.41+` 重新发布微信小程序

### 广告位说明
- 开发者在开通uni-ad微信小程序广告时，uni-ad已经会自动创建5个小程序广告位，列表如下:
![](https://web-ext-storage.dcloud.net.cn/doc/ad/wx_component/adp_list.png)

然后授权uni-ad流量主代运营后，uni-ad会针对以上广告位创建流量主广告位，名称为：`uni-ad-[广告位名称]`，开发者如已使用以上广告位adpid，则不需要修改对应代码，重新发布小程序即可。
