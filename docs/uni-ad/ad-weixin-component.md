## uni-ad微信小程序流量主代运营广告

### 简介
开发者可以通过代运营方式授权微信小程序流量主广告给uni-ad，uni-ad通过聚合微信小程序广告、流量主广告、DCloud自有广告进行动态匹配下发广告，提升小程序广告收益。

### 开通条件
1. 已开通uni-ad微信小程序广告，开通指南[点击这里](https://ask.dcloud.net.cn/article/39928)

2. 微信小程序非游戏类目，累计独立访客（UV）达到1000，且无严重违规记录

### 开通流程
1. 登录[uni-ad](https://uniad.dcloud.net.cn/)，点击左侧导航栏 **广告设置->点击应用进入应用详情->点击微信小程序广告->点击授权微信小程序流量主代运营**
<img src="https://web-ext-storage.dcloud.net.cn/doc/ad/wx_component/apply.png">
确认微信appid及名称点击下一步
<img src="https://web-ext-storage.dcloud.net.cn/doc/ad/wx_component/step1.png">
2. 使用微信小程序appid绑定的管理员个人微信号进行扫码授权
<img src="https://web-ext-storage.dcloud.net.cn/doc/ad/wx_component/qrcode_agree.png">
<img src="https://web-ext-storage.dcloud.net.cn/doc/ad/wx_component/mobile.png">
::: warning 微信小程序绑定的管理员在哪查看？
- 登录[微信公众平台](https://mp.weixin.qq.com/)，点击左侧导航栏 **成员管理** 查看管理员账户
- ![](https://web-ext-storage.dcloud.net.cn/doc/ad/wx_component/mp_admin.png)
:::

3. 授权完成后uni-ad系统会自动检测该小程序是否可以开通微信流量主广告，如果检测通过，uni-ad会自动开通微信流量主广告，如果检测不通过，uni-ad会提示错误原因。

4. 开发者通过`HBuilder X 4.37+` 重新发布微信小程序

### 广告位说明
- 开发者开通uni-ad微信小程序广告时，uni-ad会自动创建5个小程序广告位，列表如下:
<img src="https://web-ext-storage.dcloud.net.cn/doc/ad/wx_component/adp_list.png">
开通uni-ad流量主代运营后，uni-ad会针对以上广告位创建流量主广告位，名称为：`uni-ad-[广告位名称]`，开发者如已使用以上广告位adpid，则不需要修改对应代码，重新发布小程序即可。

### 结算相关说明
- 默认分成比例为**1:99** ,即开发者获取流量主收益的99%，uni-ad获取1%。
- uni-ad日收益报表和月度预估收益包含开发者流量主收益，uni-ad月度收益确认时会扣除开发者流量主收益。
- 开发者流量主收益通过 **[微信公众平台](https://mp.weixin.qq.com/) -> 流量主 -> 财务管理 -> 收入结算**，进行结算。开发者流量主收益将在次月1日和次月15日前（如遇法定节假日，将会推迟），分别对上半月和下半月收入进行结算，并发送结算单到开发者的结算单邮箱中。