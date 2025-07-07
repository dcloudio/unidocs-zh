### 前言
`uni-ad`支持个人和企业申请广告。  
`uni-ad`支持APP，H5和微信小程序广告。  
`uni-ad`APP端已支持国内主流广告渠道，包括：优量汇，快手，穿山甲，百度，华为，Sigmob，倍孜，章鱼，聚力，泛连，华夏乐游。从HBX3.8.12开始已支持海外广告，包括：谷歌Admob，海外穿山甲，华为。我们利用现有12亿活跃用户数据以及多年的技术沉淀来不断升级广告优化策略，确保开发者广告收益的最大化。  
`uni-ad`的App端支持所有DCloud框架开发的APP，包括uni-app的App端及5+App、wap2app，uniCloud项目，都可以使用里面的各种广告（开屏、信息流、激励视频...）    
`uni-ad`支持原生应用的广告接入，[点击查看](https://ask.dcloud.net.cn/article/39505)。  

> 根据我们的经验：开发者在用原生应用接入广告时通常比uni-app应用接入广告要更费时（uni-app接入广告会比原生节省一半时间），这是由于原生代码相比uni-app的代码繁琐导致部署与调试效率下降。我们建议原生开发者在接入前先咨询uni-im交流群：[点击加入](https://im.dcloud.net.cn/#/?joinGroup=65d85fc09847e92db03ff81a)  

`uni-ad`支持Cocos应用程序的广告接入，具体接入方式请咨询uni-im交流群：[点击加入](https://im.dcloud.net.cn/#/?joinGroup=65d85fc09847e92db03ff81a)  

**以下是uni-ad所有广告形式的开发文档：**  
**APP端**  
开屏广告 - 无需开发，在[uni-ad后台](https://uniad.dcloud.net.cn/)开通即可生效  
[信息流广告/原生广告](https://uniapp.dcloud.net.cn/uni-ad/ad-component.html)  
[插屏广告](https://uniapp.dcloud.net.cn/uni-ad/ad-interstitial.html)  
[全屏视频广告](https://uniapp.dcloud.net.cn/uni-ad/ad-fullscreen-video.html)  
[激励视频广告](https://uniapp.dcloud.net.cn/uni-ad/ad-rewarded-video.html)  
[Draw视频广告](https://uniapp.dcloud.net.cn/uni-ad/ad-draw.html)  
[短视频内容联盟广告](https://uniapp.dcloud.net.cn/uni-ad/ad-content-page)  

**H5端**  
[信息流广告/原生广告](https://uniapp.dcloud.net.cn/uni-ad/ad-component.html)  

**微信小程序端** （[开通指南](https://uniapp.dcloud.net.cn/uni-ad/ad-weixin-dcloud.html)）  
[信息流广告/原生广告](https://uniapp.dcloud.net.cn/uni-ad/ad-component.html)  
[插屏广告](https://uniapp.dcloud.net.cn/uni-ad/ad-interstitial.html)  
[激励视频广告](https://uniapp.dcloud.net.cn/uni-ad/ad-rewarded-video.html)  
[格子广告](https://uniapp.dcloud.net.cn/uni-ad/ad-grid.html)  


### 创建应用
 
应用创建不能在`uni-ad`系统进行，只能在HBuilderX中或[开发者web控制台](https://dev.dcloud.net.cn/)新建应用。

应用创建后可以在manifest.json里查看到Appid。

- 如果你在HBuilder中开发过App，那么一定已经有过Appid。

- 如果你使用uni-app开发过H5或小程序，还没有开发App，那么很可能你的项目缺少Appid，需要把你的项目拖到HBuilderX中，打开项目下的manifest文件，获取AppID。

![](https://mp-7f3d7cc7-8148-4746-9d3c-2463e7ea14ea.cdn.bspapp.com/ad-open/hx_get_appid.png)

- 如果你还没有使用过DCloud的工具开发App，请先[下载HBuilderX](https://www.dcloud.io/hbuilderx.html)，在里面新建一个uni-app/5+/wap2app应用。

### 开通广告

创建应用之后 ，进入 [`uni-ad` 广告联盟后台（https://uniad.dcloud.net.cn）](https://uniad.dcloud.net.cn) ，使用 创建应用的`DCloud` 账号登陆广告联盟管理后台

点击左侧 `广告设置`，在右侧应用列表找到需要开通的应用，点击 `应用详情`，进入广告开通页面。
![](https://mp-7f3d7cc7-8148-4746-9d3c-2463e7ea14ea.cdn.bspapp.com/ad-open/appid_open_ad.png)

注意：
- 如果列表中没有你想要的应用，请注意检查你登录uni-ad后台的账户是否是应用的创建者或所有者。如果仅仅是协作者，是不能操作广告后台的。
- 可以申请转让应用，具体参考[https://uniapp.dcloud.net.cn/dev/app/transfer.html](https://uniapp.dcloud.net.cn/dev/app/transfer.html)


#### 1. 实名认证
如果当前账号没有进行实名认证，需要点击账户管理并进行实名认证，才能继续使用广告联盟。

#### 2. 财务信息审核
如果当前账号没有进行财务信息审核，需要财务信息并进行财务信息审核，才能继续使用广告联盟。

如果没有完成实名认证、财务信息审核，在HBuilderX的打包界面勾上广告也是没效果的。

#### 3. 开通DCloud快捷广告
`uni-ad`分DCloud快捷广告和渠道SDK广告。
DCloud快捷广告的特点是：
- 审核门槛较低；
- 无需集成三方SDK，云端直接控制开关
- 但目前的平均收益不及渠道SDK广告。当有大广告主向DCloud直投广告时，DCloud快捷广告的收益在投放期会非常高，高于渠道SDK广告。但目前这种投放密度还不够，常态下的收益不及渠道SDK广告。
在`广告平台`中选择DCloud快捷广告，广告类型 `开屏`、`悬浮红包`至少勾选一个。
![](https://mp-7f3d7cc7-8148-4746-9d3c-2463e7ea14ea.cdn.bspapp.com/ad-open/dcloud_splash_open.png)



#### 4. 开通渠道SDK广告

渠道SDK广告需要集成三方SDK，如腾讯优量汇、字节跳动穿山甲、快手广告（无上架要求，但需提供软著）、百度、Sigmob广告（无上架要求，无需软著）。审核门槛较高，广告收益更高。

开通渠道SDK广告，需要选择对应的`广告平台`右侧点击`申请开通`按钮。
![](https://mp-7f3d7cc7-8148-4746-9d3c-2463e7ea14ea.cdn.bspapp.com/ad-open/channel_app_open.png)
填写`基础信息`、`设备信息`、`平台资质信息`相关信息后，点击`确认开通`。
![](https://mp-7f3d7cc7-8148-4746-9d3c-2463e7ea14ea.cdn.bspapp.com/ad-open/baidu_open1.png)
![](https://mp-7f3d7cc7-8148-4746-9d3c-2463e7ea14ea.cdn.bspapp.com/ad-open/baidu_open2.png)



**Tips:**
- 可以只开通安卓或只开通iOS
- 优量汇、穿山甲、百度、华为都需要应用上架应用商店后才可进行申请。
- 优量汇、百度申请时都需要上传授权书，不同的平台不同的应用授权书都不一样，请在应用开通页面下载对应的授权书。
- 开通渠道SDK广告需要审核，广告渠道正常审核时间是1-3个工作日，遇节假日顺延，请您及时关注后台变化。如果超过3个工作日还未审核成功，咨询uni-im交流群：[点击加入](https://im.dcloud.net.cn/#/?joinGroup=65d85fc09847e92db03ff81a)
- 三方广告SDK真机运行不生效，打包后生效，并且需要HBuilderX 2.5.11+版本，manifest或打包界面选择渠道SDK广告SDK。


#### 5. 广告管理及新增广告位

开通广告并审核通过后，在`应用列表`点击`应用详情`，进行广告管理

**1. 开屏广告设置**
点击开启开屏广告，可以选择是否在应用中展示开屏广告。开屏广告无需开发，直接云端开启关闭。但注意如需使用渠道SDK开屏广告，如优量汇开屏，需确保App里包含优量汇的sdk。在manifest里或打包界面里，要选择相应的SDK。
![](https://mp-7f3d7cc7-8148-4746-9d3c-2463e7ea14ea.cdn.bspapp.com/ad-open/splash_open.png)


**2. 应用内广告位设置**

应用内广告是需要编程的，它用于[信息流/原生广告](https://uniapp.dcloud.net.cn/component/ad)、[激励视频](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html)、[插屏广告](https://uniapp.dcloud.net.cn/uni-ad/ad-interstitial.html)等广告场景。信息流可以模拟插屏的广告形式具体参考：信息流文档中的“使用 ad/ad-draw 模拟插屏广告效果”部分。

首先点击 `新增广告位`
![](https://mp-7f3d7cc7-8148-4746-9d3c-2463e7ea14ea.cdn.bspapp.com/ad-open/add_adp.png)


填写广告位名称（此名称仅用于开发者自己的识别和报表展现），选择广告类型，点击`新增`
![](https://mp-7f3d7cc7-8148-4746-9d3c-2463e7ea14ea.cdn.bspapp.com/ad-open/add_adp2.png)
**开屏广告** 不需要单独申请，也不需要开发者进行编码。开发者的应用通过审核后，同时uni-ad开启了开屏广告，系统就会自动打开开屏广告。

**[信息流广告又名原生广告](https://uniapp.dcloud.net.cn/component/ad)** 在应用内列表页不影响用户浏览体验时出现，uni-ad支持四种信息流广告形式模板，两种素材类型（图片和视频）的选择。在创建信息流广告后还可以自定义样式。  
**[全屏视频广告](https://uniapp.dcloud.net.cn/component/ad-fullscreen-video.html)** 在应用中可以在游戏闯关结束或者场景切换时让用户进行观看。另外激励视频广告填充不足时也用全屏视频广告来代替。**该广告位类型已下架，使用插屏-全屏广告代替**  
**[激励视频广告](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html)** 用于一些特定的激励场景，该广告类型强制用户观看后（15秒或者30秒）给予一定的奖励，请在创建广告位名称时做好标注，如：激励视频-登录、游戏复活，激励任务。有助于区分场景填充广告  
**[Draw视频广告](https://uniapp.dcloud.net.cn/component/ad-draw.html#%E6%B2%89%E6%B5%B8%E8%A7%86%E9%A2%91%E6%B5%81%E5%B9%BF%E5%91%8A)** 是短视频类应用在滑动若干个视频后出现的一种竖屏全屏式的沉浸式体验广告  
**[短视频内容联盟广告](https://uniapp.dcloud.net.cn/api/a-d/content-page)** 是⼀个视频内容频道，支持上下滑动切换视频内容，在滑动视频后穿插视频广告。这种形式会丰富开发者的应用内容，同时增加了额外的广告收益。如果需要嵌入到页面控制大小请使用[短视频内容联盟组件](https://uniapp.dcloud.net.cn/component/ad-content-page.html)  
**[插屏广告](https://uniapp.dcloud.net.cn/component/ad-interstitial.html)** 是由客户端原生的图片、文本、视频控件组成的弹窗式广告；插屏广告与信息流相比展现尺寸更大，同样能够满足大量曝光和用户转化的需求,可以选择插屏-全屏，插屏-半屏，插屏-优选  

**3. 使用广告位ID（adpid）**
新建广告位后，会生成对应的广告位ID，即`adpid`，需等待广告位审核通过。不同平台广告位的审核速度不一样。
![](https://mp-7f3d7cc7-8148-4746-9d3c-2463e7ea14ea.cdn.bspapp.com/ad-open/adp_list.png)

拿到广告位ID，根据对应广告位类型开发文档，编写代码，将广告放置到合适的界面。

> 注意需确保App里包含优量汇、穿山甲、快手、百度、Sigmob等广告sdk。在manifest里或打包界面进行选择。

