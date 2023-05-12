## uni-ad支持微信小程序广告

3.4.10+ 支持

在微信小程序上，有2种广告类型：
1. DCloud的uni-ad广告（简称uni-ad广告），uni-ad微信小程序广告开通指南[点击这里](https://ask.dcloud.net.cn/article/39928)
2. 微信小程序自带的流量主广告（简称wx广告）

这两者的区别是：
1. 申请门槛

uni-ad的申请门槛较低，对初创者更友好；微信申请流量主需要小程序日活过千

2. 全端支持

uni-ad可以一套代码全端变现，包括app、web、微信小程序；wx广告仅支持微信小程序

3. 广告类型

两者均支持banner/信息流、激励视频、插屏。wx广告多支持一个开屏广告

4. 收益比较

有高有低，不同小程序cpm不同，需要开发者测试比较

4. 结算周期

相比微信自带流量主广告，uni-ad开发者可以申请相对更短的结算周期和垫资服务。具体扫码加企业微信咨询。

![](https://web-assets.dcloud.net.cn/unidoc/zh/eryunweixin.jpg)

5. 安全防护

uni-ad内置了安全防护策略，减少广告被刷风险

3.6.8+ 支持激励视频服务器安全回调，[详情](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html#callback)

服务器回调用于业务系统判断是否提供奖励给观看广告的用户。配置服务器回调后，当用户成功看完广告时，[uniCloud](https://uniapp.dcloud.net.cn/uniCloud/)服务器会访问配置的云函数，通知用户完成观看激励视频。
相对来讲服务器回调将更加安全

6. 开通方式

uni-ad由开发者在DCloud网站[uniad.dcloud.net.cn](https://uniad.dcloud.net.cn)申请，开发者与DCloud开票结算；而wx广告在微信小程序后台申请，开发者与微信开票结算

7. 代码写法

两者在开发时，都使用相同的组件，比如`<ad>`组件、`<ad-rewarded-video>`组件，但uni-ad的组件属性是adpid（广告位id的缩写），微信小程序的组件属性是unit-id。

## uni-ad的开发者使用流程

1. 在[uniad.dcloud.net.cn](https://uniad.dcloud.net.cn)申请开通广告
2. 在[uniad.dcloud.net.cn](https://uniad.dcloud.net.cn)获取广告位id（adpid）
3. 在小程序插件配置中引入uni-ad微信小程序插件和腾讯珊瑚广告插件，参考下面的申请方案
4. 在前端页面的合适位置写上广告组件`<ad adpid=""></ad>`

注意：微信小程序平台暂不提供测试广告位，开发期间也可以预览广告效果，以真机效果运行为准

## 不同广告类型的开发文档
- banner/信息流广告

详细开发文档地址：[https://uniapp.dcloud.io/component/ad](https://uniapp.dcloud.io/component/ad)

- 激励视频广告

详细开发文档地址：[https://uniapp.dcloud.io/component/ad-rewarded-video](https://uniapp.dcloud.io/component/ad-rewarded-video)

- 插屏广告

详细开发文档地址：[https://uniapp.dcloud.io/component/ad-interstitial](https://uniapp.dcloud.io/component/ad-interstitial)

## adpid和unit-id详解

`<ad>`（banner/信息流）、`<ad-rewarded-video>`（激励视频）、`<ad-interstitial>`（插屏）是`uni-app`框架的内置的3个广告组件。

其中`<ad>`组件同时支持`uni-ad`广告和wx广告，而其他2个广告组件仅支持uni-ad广告。开发wx广告的激励视频和插屏需要通过js api而不是组件方式。

在`<ad>`组件上可以同时写adpid和unit-id，区别如下：

- `<ad adpid=""></ad>`，uni-ad广告（uni-app 3.4.10+版）
- `<ad unit-id=""></ad>`，wx广告，unit-id需在微信小程序后台申请

`adpid`和`unit-id`可以同时设置。`adpid`优先级高于`unit-id`，如果没有开通`uni-ad`或网络失败则切换为wx广告，这个过程会有3秒的间隔

**例子：**
如果想在微信上仅使用微信的广告，App 或 Web 使用 uni-ad 可使用条件编译，如下

```html
<!-- #ifdef MP-WEIXIN -->
<ad unit-id=""></ad>
<!-- #endif -->
<!-- #ifndef MP-WEIXIN -->
<ad adpid=""></ad>
<!-- #endif -->
```

## 微信小程序插件申请

通过以下两种方案申请插件

### 方案一

在 HBuilderX 运行到微信开发者工具，在微信的开发者工具调试控制台会输出申请插件的链接，点击后弹出申请确认框，然后点击 `确定` 按钮

### 方案二

登陆微信公众平台 [https://mp.weixin.qq.com/](https://mp.weixin.qq.com/)，点击左侧栏 `设置`，然后找到顶部页签 `第三方设置`，向下滚动屏幕到 `插件管理`,
点击 `添加插件` 按钮，搜索 `uni-ad` 和 `珊瑚运营平台` 并添加
