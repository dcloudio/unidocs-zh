
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

![](https://web-assets.dcloud.net.cn/unidoc/zh/ad-feed.png)


- App端的广告源由腾讯优量汇、头条穿山甲、快手广告联盟等主流广告渠道以及部分DCloud直投广告组成，在DCloud的uni-AD后台注册：[https://uniad.dcloud.net.cn/](https://uniad.dcloud.net.cn/)
- The advertising sources on the App side are composed of mainstream advertising channels such as Tencent Youlianghui, Toutiao Pangolin and Kuaishou Advertising Alliance, as well as some DCloud direct advertisements. Register in the uni-AD background of DCloud: [https://uniad.dcloud.net.cn /](https://uniad.dcloud.net.cn/)
- H5端、微信小程序端的广告由DCloud直接提供
- The advertisements on the H5 terminal and WeChat applet are directly provided by DCloud
- 其他小程序端由小程序平台提供
- Other applet terminals are provided by the applet platform

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet|QQ applet|Quick app|360 applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√（2.5.2+）|3.4.8+|√|x|√|√|√|x|x|√|x|


**开通配置广告**
**Activate configuration advertisement**

[开通广告步骤详情](https://uniapp.dcloud.net.cn/uni-ad.html#start)
[Details of the steps to activate advertising](https://uniapp.dcloud.net.cn/uni-ad.html#start)


**属性说明**
**Property description**

|属性名|类型|默认值|说明|平台差异|
|property name|type|default value|description|platform difference|
|:-|:-|:-|:-|:-|
|adpid|String||uni-AD App广告位id，在[uni-AD官网](https://uniad.dcloud.net.cn/)申请广告位|App，微信小程序3.4.8+|
|adpid|String||uni-AD App ad slot id, apply for an ad slot on [uni-AD official website](https://uniad.dcloud.net.cn/)|App, WeChat applet 3.4.8+|
|unit-id|String||广告单元id，可在小程序管理后台的流量主模块新建|微信小程序、字节跳动小程序(最低版本1.19.0+)、QQ小程序、快手小程序|
|unit-id|String||Ad unit id, which can be created in the main traffic module of the applet management background|WeChat applet, ByteDance applet (minimum version 1.19.0+), QQ applet, Kuaishou applet|
|ad-intervals|number||广告自动刷新的间隔时间，单位为秒，参数值必须大于等于30（该参数不传入时 Banner 广告不会自动刷新）|微信小程序(基础库2.3.1+)|
|ad-intervals|number||Interval time for automatic advertisement refresh, in seconds, the parameter value must be greater than or equal to 30 (Banner advertisements will not be automatically refreshed if this parameter is not passed in)|WeChat applet (basic library 2.3.1+ )|
|data|Object|可选|广告数据，通过 plus.ad.getAds (参考示例代码)，优先级高于adpid|App|
|data|Object|Optional|Ad data, via plus.ad.getAds (refer to sample code), takes precedence over adpid|App|
|appid|String||小程序应用 ID|百度小程序|
|appid|String||Mini Program Application ID|Baidu Mini Program|
|apid|String||小程序广告位 ID|百度小程序|
|apid|String||Mini Program Ad Slot ID|Baidu Mini Program|
|ad-left|Number||type为feeds时广告左边距（px），必须大于0|QQ小程序|
|ad-left|Number||When type is feeds, the left margin of the ad (px) must be greater than 0|QQ Mini Program|
|ad-top|Number||type为feeds时广告上边距（px），必须大于0|QQ小程序|
|ad-top|Number||When the type is feeds, the ad top margin (px) must be greater than 0|QQ Mini Program|
|ad-width|Number||type为feeds时广告宽度（px），默认100%，最大值为屏幕宽度，最小值为265|QQ小程序|
|ad-width|Number||When type is feeds, the ad width (px), the default is 100%, the maximum value is the screen width, and the minimum value is 265|QQ applet|
|ad-height|Number||type为feeds时广告高度（px），最小85，最大160|QQ小程序|
|ad-height|Number||Ad height (px) when type is feeds, minimum 85, maximum 160|QQ applet|
|type|String|feed||QQ小程序、百度小程序、字节跳动小程序、快手小程序|
|type|String|feed||QQ applet, Baidu applet, ByteDance applet, Kuaishou applet|
|@load|EventHandle||广告加载成功的回调||
|@load|EventHandle||Callback for successful ad loading||
|@error|EventHandle||广告加载失败的回调，event.detail = {errCode: }||
|@error|EventHandle||Callback for ad loading failure, event.detail = {errCode: }||
|@close|EventHandle||广告关闭的回调||
|@close|EventHandle||Ad close callback||


**type属性 百度**
**type attribute Baidu**

广告类型：banner/feed，需和百青藤平台上的代码位类型相匹配。
Advertisement type: banner/feed, which must match the code bit type on the Baiqingteng platform.

**type属性 头条**
**type attribute headlines**

广告的类型，默认 banner，具体类型有：banner、video（视频）、large（大图）、lImg（左图右文）、rImg（右图左文），默认值为 banner
The type of advertisement, the default banner, the specific types are: banner, video (video), large (large image), lImg (left image and right text), rImg (right image and left text), the default value is banner

**type属性 QQ**
**type attribute QQ**

|值|说明|
|value|description|
|:-|:-|
|banner|banner广告 分 1 图和 3 图 1 文。3 图 1 文广告的背景色、文字颜色会根据祖先节点的背景色调整，分三种情况深色背景、浅色背景和白色背景|
|banner|banner advertisement is divided into 1 picture and 3 pictures and 1 text. 3 Figure 1 The background color and text color of the text advertisement will be adjusted according to the background color of the ancestor node. There are three cases: dark background, light background and white background|
|swip|翻页广告，1 图 1 文，会覆盖整个小程序，显示、隐藏逻辑需开发者自行控制|
|swip|Page flip advertisement, 1 picture 1 text, will cover the entire applet, and the display and hiding logic needs to be controlled by the developer|
|card|卡片广告，1 图，可关闭|
|card|Card ad, 1 image, can be closed|
|feeds|自定义广告，可灵活控制广告上、左边距和宽高，以适应界面其他内容。可监听size事件获取实际宽高|
|feeds|Customize ads, you can flexibly control the top, left margin, width and height of the ad to fit the rest of the interface. You can listen to the size event to get the actual width and height|

App和微信小程序的ad组件没有type属性，可以用于banner，也可以用于信息流。
The ad component of App and WeChat applet has no type attribute and can be used for banner or information flow.


## 微信小程序@weixin
## WeChat applet @weixin

微信小程序平台支持信息流(Banner)广告组件 `<ad unit-id=""></ad>`，由微信提供
WeChat applet platform supports information flow (Banner) advertising component `<ad unit-id=""></ad>`, provided by WeChat

uniAD 也支持信息流(Banner)广告组件 `<ad adpid=""></ad>`，由uniAD提供
uniAD also supports the banner ad component `<ad adpid=""></ad>`, provided by uniAD

3.4.10 之前的版本`ad`组件运行到微信小程序使用微信提供的广告组件
The `ad` component of the version before 3.4.10 runs to the WeChat applet and uses the advertising component provided by WeChat

3.4.10+ 以后的版本调整如下
Versions after 3.4.10+ are adjusted as follows

1. 组件仅设置 `unit-id`，使用微信提供的ad组件，逻辑不变
1. The component only sets the `unit-id`, uses the ad component provided by WeChat, and the logic remains unchanged
2. 组件设置了 `adpid` 属性，被编译为 `uniad`，见下文的介绍
2. The component sets the `adpid` attribute and is compiled as `uniad`, see the introduction below
3. 组件设置了 `adpid` 和 `unit-id` 属性，被编译为 `uniad`，见下文的介绍
3. The component sets the `adpid` and `unit-id` attributes and is compiled into `uniad`, see the introduction below

`uniad`是`uni-app`框架的内置的组件，`uniad`组件同时支持`uniAD`广告和微信原生广告，先请求uniAD，如果已开通直接使用否则切换为微信的广告，这个过程会有3秒的延时
`uniad` is a built-in component of the `uni-app` framework. The `uniad` component supports both `uniAD` advertisements and WeChat native advertisements. Please request uniAD first. If it has been activated, use it directly or switch to WeChat advertisements. 3 second delay

`uniad`组件依赖uniAD提供的微信小程序插件和腾讯提供的珊瑚广告插件
The `uniad` component relies on the WeChat applet plug-in provided by uniAD and the coral advertisement plug-in provided by Tencent

如果想在微信上仅使用微信的广告，App 或 Web 使用 uniAD 可使用条件编译
If you want to use only WeChat ads on WeChat, you can use conditional compilation if you use uniAD for App or Web

条件编译示例
Conditional compilation example

```html
<!-- #ifdef MP-WEIXIN -->
<ad unit-id=""></ad>
<!-- #endif -->
<!-- #ifndef MP-WEIXIN -->
<ad adpid=""></ad>
<!-- #endif -->
```


**注意**
**Notice**
- `<ad>` 组件是原生组件，在webview页面会有层级问题，同时无法在`<swiper>` 、`<scroll-view>` 组件中使用。但app-nvue、微信小程序新版和头条小程序新版支持同层渲染，所以没有层级问题。而app-vue、QQ小程序等平台则有层级问题。详见：[原生组件](https://uniapp.dcloud.io/component/native-component)
- The `<ad>` component is a native component, there will be hierarchical problems in the webview page, and it cannot be used in the `<swiper>` and `<scroll-view>` components. But app-nvue, the new version of WeChat applet and the new version of Toutiao applet support the same layer rendering, so there is no level problem. However, platforms such as app-vue and QQ applet have hierarchical problems. See: [Native Components](https://uniapp.dcloud.io/component/native-component)
- 无广告时没有高度，关闭广告时释放高度，宽度由父容器决定
- No height when there is no ad, the height is released when the ad is closed, and the width is determined by the parent container
- App 平台，因广告组件内部获得广告数据计算后设置组件大小，会出现界面抖动问题，可以提前通过 plus.ad.getAds 获得广告数据，设置 data 后 adpid 将无效
- On the App platform, since the ad data is obtained inside the ad component and the component size is set after calculation, there will be a problem of interface jitter. You can obtain the ad data through plus.ad.getAds in advance. After setting the data, the adpid will be invalid.
- 微信小程序 `<ad>` 组件不支持触发 tap 等触摸相关事件
- WeChat applet `<ad>` component does not support triggering touch related events such as tap
- Android 平台 nvue的 `<list>` 组件中使用 `<ad>` 时，必须指定宽度属性`<ad width="750rpx" />`，因为 `<list>` 有自动的内存回收机制，不在屏幕范围的组件不被创建，组件内部无法获取大小
- When using `<ad>` in the `<list>` component of nvue on the Android platform, the width attribute `<ad width="750rpx" />` must be specified, because `<list>` has an automatic memory recovery mechanism, which is not The screen-scoped component is not created, and the size cannot be obtained inside the component
- app-nvue 的 `<recycle-list>` 组件内不支持嵌套 `<ad>`
- Nested `<ad>` is not supported in the `<recycle-list>` component of app-nvue
- 广点通概率出现重复广告，可根据需求请求广告数据，推荐单次大于1条(plus.ad.getAds) 来降低重复率
- There is a probability of repeating advertisements in Guangdiantong. You can request advertisement data according to your needs. It is recommended to have more than 1 advertisement at a time (plus.ad.getAds) to reduce the repetition rate
- HBuilderX2.8+版本Android平台更新穿山甲（今日头条）广告SDK后不再支持x86类型CPU，无法运行到x86类型cpu的模拟器。
- HBuilderX2.8+ version Android platform no longer supports x86 type CPU after updating the Pangolin (Today's Toutiao) advertising SDK, and cannot run to the emulator of x86 type CPU.
- `<ad>` 组件测试广告位是上图下文，uniAD后台申请的广告位默认左图右文
- The `<ad>` component test ad slot is the context of the above image, and the ad slot applied for by the uniAD background defaults to the left image and the right text
- HBuilderX标准基座真机运行测试信息流广告位标识（adpid）为：1111111111，微信小程序和H5平台暂不提供测试广告位
- HBuilderX standard base real machine running test information flow advertising space identifier (adpid) is: 1111111111, WeChat applet and H5 platform do not provide test advertising space temporarily


**示例：**
**Example:**

```html
<template>
  <view class="content">
    <!-- adpid="1111111111" 此广告位标识仅在HBuilderX标准基座中有效，仅用于测试 -->
    <!-- adpid="1111111111" This ad slot ID is only valid in the HBuilderX standard base, for testing purposes only -->
    <!-- 广告后台申请的广告位(adpid)需要自定义基座/云打包/本地打包后生效 -->
    <!-- The advertising space (adpid) applied for by the advertising background needs to be customized after the base/cloud packaging/local packaging takes effect -->
    <view class="ad-view">
      <ad adpid="1111111111" @load="onload" @close="onclose" @error="onerror"></ad>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'ad'
    }
  },
  methods: {
    onload(e) {
      console.log("onload");
    },
    onclose(e) {
      console.log("onclose: " + e.detail);
    },
    onerror(e) {
      console.log("onerror: " + e.detail.errCode + " message:: " + e.detail.errMsg);
    }
  }
}
</script>

<style>
  .content {
    background-color: #DBDBDB;
    padding: 10px;
  }

  .ad-view {
    background-color: #FFFFFF;
    margin-bottom: 10px;
  }
</style>
```


api的方式(仅App平台支持)，不推荐使用这种调用方式，调用比较复杂，且不跨平台，开发者还需要手动处理缓存逻辑
API method (only supported by the App platform), this calling method is not recommended, the call is more complicated, and it is not cross-platform, developers also need to manually handle the cache logic

``` html
<template>
  <view class="content">
    <view class="ad-view">
      <ad :data="adData"></ad>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'ad',
      adData: {}
    }
  },
  onReady: function (e) {
    this.getAdData()
  },
  methods: {
    getAdData: function (e) {
      // 仅APP平台支持
      // only supported by APP platform
      plus.ad.getAds({
          adpid: '1111111111',  // 替换为自己申请获取的广告位标识，此广告位标识仅在HBuilderX标准基座中有效，仅用于测试
          count: 1,   // 广告数量，默认 3
          width: 300  // 根据宽度获取合适的广告(单位px)
        },
        (res) => {
					// 注意: 广告数据只能使用一次
					// Note: Ad data can only be used once
          this.adData = res.ads[0];
          console.log(this.adData);
        },
        (err) => {
          console.log(err);
        }
      )
    }
  }
}
</script>

<style>
  .content {
    background-color: #DBDBDB;
    padding: 10px;
  }

  .ad-view {
    background-color: #FFFFFF;
    margin-bottom: 10px;
  }
</style>
```


使用 ad/ad-draw 模拟插屏广告效果@Interstitial
Using ad/ad-draw to simulate interstitial ad effects @Interstitial


```html
<template>
  <view>
    <!-- 使用 ad/ad-draw 模拟插屏广告效果 -->
    <!-- Use ad/ad-draw to simulate the effect of interstitial ads -->
    <view>
      <button @click="showInterstitialAd">显示插屏广告</button>
    </view>
    <view class="ad-interstitial" v-if="isShowInterstitialAd">
      <view class="ad-view">
        <ad class="ad" adpid="1111111111" @error="onerror"></ad>

        <!-- ad-draw 仅在nvue页面生效 -->
        <!-- <ad-draw class="ad-draw" adpid="1507000690"></ad-draw> -->
      </view>
      <view class="close-area">
        <!-- 根据z自己页面风格设置关闭按钮的样式 -->
        <!-- Set the style of the close button according to your own page style -->
        <button @click="hideInterstitialAd">X</button>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        isShowInterstitialAd: false
      }
    },
    methods: {
      showInterstitialAd() {
        this.isShowInterstitialAd = true
      },
      hideInterstitialAd() {
        this.isShowInterstitialAd = false
      },
      onerror(e) {
        console.log(e);
      }
    }
  }
</script>

<style>
  .ad-interstitial {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 20px;
    /* #ifndef APP-NVUE */
    display: flex;
    z-index: 1000;
    /* #endif */
    flex-direction: column;
    justify-content: center;
  }

  .ad-draw {
    width: 700rpx;
    height: 400px;
  }
</style>

```


**激励视频广告**
**Rewarded Video Ads**
文档地址：[https://uniapp.dcloud.io/component/ad-rewarded-video](https://uniapp.dcloud.io/component/ad-rewarded-video)
Document address: [https://uniapp.dcloud.io/component/ad-rewarded-video](https://uniapp.dcloud.io/component/ad-rewarded-video)

**全屏视频广告**
**Full Screen Video Ads**
文档地址：[https://uniapp.dcloud.io/component/ad-fullscreen-video](https://uniapp.dcloud.io/component/ad-fullscreen-video)
Document address: [https://uniapp.dcloud.io/component/ad-fullscreen-video](https://uniapp.dcloud.io/component/ad-fullscreen-video)

**插屏广告**
**Interstitial Ads**
文档地址：[https://uniapp.dcloud.io/component/ad-interstitial](https://uniapp.dcloud.io/component/ad-interstitial)
Document address: [https://uniapp.dcloud.io/component/ad-interstitial](https://uniapp.dcloud.io/component/ad-interstitial)


**注意**
**Notice**
- iOS平台配置应用使用广告标识（IDFA）详见：[https://ask.dcloud.net.cn/article/36107](https://ask.dcloud.net.cn/article/36107)
- For details of the iOS platform configuration application using the Advertising Identification (IDFA): [https://ask.dcloud.net.cn/article/36107](https://ask.dcloud.net.cn/article/36107)
- App端广告开通指南和收益相关问题：[https://ask.dcloud.net.cn/article/36769](https://ask.dcloud.net.cn/article/36769)
- App-side advertising activation guide and revenue related issues: [https://ask.dcloud.net.cn/article/36769](https://ask.dcloud.net.cn/article/36769)
- App端除了ad组件，还支持开屏、激励视频等多种广告形式。详见[uni-AD官网](https://uniad.dcloud.net.cn/)
- In addition to the ad component, the App side also supports various advertising forms such as screen opening and rewarded video. For details, please refer to [uni-AD official website](https://uniad.dcloud.net.cn/)
- App端uni-AD聚合了腾讯广点通、头条穿山甲、360广告联盟等服务，打包时必须勾选相应的sdk，详见：[https://ask.dcloud.net.cn/article/36718](https://ask.dcloud.net.cn/article/36718)
- uni-AD on the App side aggregates services such as Tencent Guangdiantong, Toutiao Pangolin, and 360 Advertising Alliance. You must check the corresponding SDK when packaging. For details, see: [https://ask.dcloud.net.cn/article/36718 ](https://ask.dcloud.net.cn/article/36718)
![](https://web-assets.dcloud.net.cn/unidoc/zh/ad.jpg)


**错误码**
**error code**

[错误码相关问题排查](https://uniapp.dcloud.net.cn/component/ad-error-code.html)
[Error code related troubleshooting](https://uniapp.dcloud.net.cn/component/ad-error-code.html)
