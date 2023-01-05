## uni-ad支持微信小程序广告
## uni-ad supports WeChat applet advertising

3.4.10+ 支持
3.4.10+ support

在微信小程序上，有2种广告类型：
On WeChat MiniApp, there are 2 ad types:
1. DCloud的uni-ad广告（简称uni-ad广告），uni-ad微信小程序广告开通指南[点击这里](https://ask.dcloud.net.cn/article/39928)
1. DCloud's uni-ad advertisements (referred to as uni-ad advertisements), uni-ad WeChat MiniApp advertisement opening guide [click here](https://ask.dcloud.net.cn/article/39928)
2. 微信小程序自带的流量主广告（简称wx广告）
2. The main traffic ad (referred to as wx ad) that comes with the WeChat applet

这两者的区别是：
The difference between the two is:
1. 申请门槛
1. Application threshold

uni-ad的申请门槛较低，对初创者更友好；微信申请流量主需要小程序日活过千
uni-ad has a lower application threshold and is more friendly to start-ups; WeChat application traffic masters need to live more than 1,000 small programs per day

2. 全端支持
2. Full end support

uni-ad可以一套代码全端变现，包括app、web、微信小程序；wx广告仅支持微信小程序
uni-ad can monetize a whole set of codes, including app, web, WeChat applet; wx ads only support WeChat applet

3. 广告类型
3. Types of Ads

两者均支持banner/信息流、激励视频、插屏。wx广告多支持一个开屏广告
Both support banners/feeds, incentive videos, and interstitials. wx ad supports one more open screen ad

4. 收益比较
4. Benefit Comparison

有高有低，不同小程序cpm不同，需要开发者测试比较
There are highs and lows, different small programs have different cpm, and developers need to test and compare

4. 结算周期
4. Billing Cycle

相比微信自带流量主广告，uni-ad开发者可以申请相对更短的结算周期和垫资服务。具体扫码加企业微信咨询。
Compared with WeChat's own traffic main advertisement, uni-ad developers can apply for a relatively shorter settlement cycle and advance payment service. Scan the code and add enterprise WeChat consultation.

![](https://web-assets.dcloud.net.cn/unidoc/zh/eryunweixin.jpg)

5. 安全防护
5. Safety protection

uni-ad内置了安全防护策略，减少广告被刷风险
uni-ad has built-in security protection strategies to reduce the risk of ads being brushed

3.6.8+ 支持激励视频服务器安全回调，[详情](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html#callback)

服务器回调用于业务系统判断是否提供奖励给观看广告的用户。配置服务器回调后，当用户成功看完广告时，[uniCloud](https://uniapp.dcloud.net.cn/uniCloud/)服务器会访问配置的云函数，通知用户完成观看激励视频。
The server callback is used by the business system to determine whether to provide rewards to users who watch advertisements. After the server callback is configured, when the user successfully finishes watching the ad, the [uniCloud](https://uniapp.dcloud.net.cn/uniCloud/) server will access the configured cloud function and notify the user to finish watching the rewarded video.
相对来讲服务器回调将更加安全
Relatively speaking, server callbacks will be more secure

6. 开通方式
6. How to open

uni-ad由开发者在DCloud网站[uniad.dcloud.net.cn](https://uniad.dcloud.net.cn)申请，开发者与DCloud开票结算；而wx广告在微信小程序后台申请，开发者与微信开票结算
uni-ad is applied by the developer on the DCloud website [uniad.dcloud.net.cn](https://uniad.dcloud.net.cn), and the developer bills and settles with DCloud; while the wx ad is applied for in the background of the WeChat applet, Invoicing and settlement between developers and WeChat

7. 代码写法
7. Code writing

两者在开发时，都使用相同的组件，比如`<ad>`组件、`<ad-rewarded-video>`组件，但uni-ad的组件属性是adpid（广告位id的缩写），微信小程序的组件属性是unit-id。
Both use the same components during development, such as the `<ad>` component and the `<ad-rewarded-video>` component, but the component attribute of uni-ad is adpid (abbreviation for ad slot id), WeChat small The component property of a program is unit-id.

## uni-ad的开发者使用流程
## uni-ad developer usage process

1. 在[uniad.dcloud.net.cn](https://uniad.dcloud.net.cn)申请开通广告
1. Apply for advertising at [uniad.dcloud.net.cn](https://uniad.dcloud.net.cn)
2. 在[uniad.dcloud.net.cn](https://uniad.dcloud.net.cn)获取广告位id（adpid）
2. Get the ad slot id (adpid) at [uniad.dcloud.net.cn](https://uniad.dcloud.net.cn)
3. 在小程序插件配置中引入uni-ad微信小程序插件和腾讯珊瑚广告插件，参考下面的申请方案
3. Introduce the uni-ad WeChat applet plugin and Tencent coral ad plugin in the applet plugin configuration, refer to the application plan below
4. 在前端页面的合适位置写上广告组件`<ad adpid=""></ad>`
4. Write the ad component `<ad adpid=""></ad>` in the appropriate position on the front-end page

注意：微信小程序平台暂不提供测试广告位，开发期间也可以预览广告效果，以真机效果运行为准
Note: The WeChat applet platform does not provide test advertising space for the time being. You can also preview the advertising effect during the development period. The effect of the real machine shall prevail.

## 不同广告类型的开发文档
## Development documentation for different ad types
- banner/信息流广告
- banner/feed advertisement

详细开发文档地址：[https://uniapp.dcloud.io/component/ad](https://uniapp.dcloud.io/component/ad)
Detailed development document address: [https://uniapp.dcloud.io/component/ad](https://uniapp.dcloud.io/component/ad)

- 激励视频广告
- Rewarded video ads

详细开发文档地址：[https://uniapp.dcloud.io/component/ad-rewarded-video](https://uniapp.dcloud.io/component/ad-rewarded-video)
Detailed development document address: [https://uniapp.dcloud.io/component/ad-rewarded-video](https://uniapp.dcloud.io/component/ad-rewarded-video)

- 插屏广告
- Interstitial ads

详细开发文档地址：[https://uniapp.dcloud.io/component/ad-interstitial](https://uniapp.dcloud.io/component/ad-interstitial)
Detailed development document address: [https://uniapp.dcloud.io/component/ad-interstitial](https://uniapp.dcloud.io/component/ad-interstitial)

## adpid和unit-id详解
## adpid and unit-id detailed

`<ad>`（banner/信息流）、`<ad-rewarded-video>`（激励视频）、`<ad-interstitial>`（插屏）是`uni-app`框架的内置的3个广告组件。
`<ad>` (banner/feed), `<ad-rewarded-video>` (rewarded video), `<ad-interstitial>` (interstitial) are the built-in 3 ads of the `uni-app` framework components.

其中`<ad>`组件同时支持`uni-ad`广告和wx广告，而其他2个广告组件仅支持uni-ad广告。开发wx广告的激励视频和插屏需要通过js api而不是组件方式。
The `<ad>` component supports both `uni-ad` ads and wx ads, while the other 2 ad components only support uni-ad ads. Developing rewarded videos and interstitials for wx ads needs to go through js api instead of components.

在`<ad>`组件上可以同时写adpid和unit-id，区别如下：
Both adpid and unit-id can be written on the `<ad>` component, the differences are as follows:

- `<ad adpid=""></ad>`，uni-ad广告（uni-app 3.4.10+版）
- `<ad adpid=""></ad>`, uni-ad ads (uni-app version 3.4.10+)
- `<ad unit-id=""></ad>`，wx广告，unit-id需在微信小程序后台申请
- `<ad unit-id=""></ad>`, wx ad, unit-id needs to be applied in the WeChat applet background

`adpid`和`unit-id`可以同时设置。`adpid`优先级高于`unit-id`，如果没有开通`uni-ad`或网络失败则切换为wx广告，这个过程会有3秒的间隔
`adpid` and `unit-id` can be set at the same time. The priority of `adpid` is higher than `unit-id`. If `uni-ad` is not activated or the network fails, it will switch to wx advertisement. There will be a 3-second interval in this process.

**例子：**
**example:**
如果想在微信上仅使用微信的广告，App 或 Web 使用 uni-ad 可使用条件编译，如下
If you want to use only WeChat advertisements on WeChat, you can use conditional compilation to use uni-ad in App or Web, as follows

```html
<!-- #ifdef MP-WEIXIN -->
<ad unit-id=""></ad>
<!-- #endif -->
<!-- #ifndef MP-WEIXIN -->
<ad adpid=""></ad>
<!-- #endif -->
```

## 微信小程序插件申请
## WeChat applet plug-in application

通过以下两种方案申请插件
Apply for plugins through the following two options

### 方案一
### Option One

在 HBuilderX 运行到微信开发者工具，在微信的开发者工具调试控制台会输出申请插件的链接，点击后弹出申请确认框，然后点击 `确定` 按钮
Run HBuilderX to the WeChat developer tool, and the link to apply for the plug-in will be output in the developer tool debugging console of WeChat. After clicking, the application confirmation box will pop up, and then click the `OK` button

### 方案二
### Option II

登陆微信公众平台 [https://mp.weixin.qq.com/](https://mp.weixin.qq.com/)，点击左侧栏 `设置`，然后找到顶部页签 `第三方设置`，向下滚动屏幕到 `插件管理`,
Log in to the WeChat public platform [https://mp.weixin.qq.com/](https://mp.weixin.qq.com/), click `Settings` on the left sidebar, and then find the top tab `Third Party Settings` `, scroll down the screen to `Plugin Management`,
点击 `添加插件` 按钮，搜索 `uniAD` 和 `珊瑚运营平台` 并添加
Click the `Add Plugin` button, search for `uniAD` and `Coral Operation Platform` and add
