
## 沉浸视频流广告
## Immersive Video Streaming Ads

### 简介
### Introduction

也称为Draw视频信息流广告
Also known as Draw Video Feed Ads

沉浸视频流广告为媒体提供了竖屏视频信息流广告样式，适合在全屏的竖屏视频中使用。支持app-nvue页面使用。
Immersive video streaming ads provide media with a vertical-screen video feed ad style, suitable for use in full-screen vertical-screen videos. Support app-nvue page usage.

### 适用场景
### Applicable scene

类抖音的竖版视频流，来电秀、直播间等全屏观看的视频。
Douyin-like vertical video stream, full-screen video such as call show, live room, etc.

![](https://web-assets.dcloud.net.cn/unidoc/zh/ad-draw.png)


- app端的广告源由腾讯广点通、头条穿山甲、快手广告联盟以及部分DCloud直投广告聚合提供，在DCloud的uni-AD后台注册：[https://uniad.dcloud.net.cn/](https://uniad.dcloud.net.cn/)
- The advertising sources on the app side are provided by Tencent Guangdiantong, Toutiao Pangolin, Kuaishou Advertising Alliance and some DCloud direct investment advertising aggregation. Register in DCloud's uni-AD background: [https://uniad.dcloud.net.cn/]( https://uniad.dcloud.net.cn/)

**平台差异说明**
**Platform Difference Description**

|App-nvue|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
|App-nvue|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Quick application|360 applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√（3.0.0+）|x|x|x|x|x|x|x|x|x|x|


**开通配置广告**
**Activate configuration advertisement**

[开通广告步骤详情](https://uniapp.dcloud.net.cn/uni-ad.html#start)
[Details of the steps to activate advertising](https://uniapp.dcloud.net.cn/uni-ad.html#start)


**属性说明**
**Property description**

|属性名|类型|默认值|说明|平台差异|
|property name|type|default value|description|platform difference|
|:-|:-|:-|:-|:-|
|data|Object|可选|广告数据，通过 plus.ad.getDrawAds (参考示例代码)，设置后adpid将无效|App|
|data|Object|Optional|Ad data, through plus.ad.getDrawAds (refer to the sample code), after setting the adpid will be invalid|App|
|adpid|String||uni-AD App广告位id，在[uni-AD官网](https://uniad.dcloud.net.cn/)申请广告位|App|
|adpid|String||uni-AD App ad slot id, apply for an ad slot on [uni-AD official website](https://uniad.dcloud.net.cn/)|App|
|@load|EventHandle||广告加载成功的回调||
|@load|EventHandle||Callback for successful ad loading||
|@error|EventHandle||广告加载失败的回调，event.detail = {errCode: }||
|@error|EventHandle||Callback for ad loading failure, event.detail = {errCode: }||


**注意**
**Notice**
- HBuilderX2.8+版本Android平台更新穿山甲（今日头条）广告SDK后不再支持x86类型CPU，无法运行到x86类型cpu的模拟器。
- HBuilderX2.8+ version Android platform no longer supports x86 type CPU after updating the Pangolin (Today's Toutiao) advertising SDK, and cannot run the simulator with x86 type CPU.
- HBuilderX标准基座真机运行测试draw信息流广告位标识（adpid）为：1507000690
- HBuilderX standard base real machine running test draw information flow advertisement slot ID (adpid) is: 1507000690


**@error 错误码**
**@error error code**
- App端聚合的穿山甲(iOS)：[错误码](https://ad.oceanengine.com/union/media/union/download/detail?id=16&docId=5de8d574b1afac00129330d5&osType=ios)
- App-side aggregated pangolins (iOS): [error code](https://ad.oceanengine.com/union/media/union/download/detail?id=16&docId=5de8d574b1afac00129330d5&osType=ios)
- App端聚合的穿山甲(Android)：[错误码](https://ad.oceanengine.com/union/media/union/download/detail?id=4&docId=5de8d9b925b16b00113af0ed&osType=android)
- App-side aggregated pangolins (Android): [error code](https://ad.oceanengine.com/union/media/union/download/detail?id=4&docId=5de8d9b925b16b00113af0ed&osType=android)
- App端聚合的广点通(iOS)：[错误码](https://developers.adnet.qq.com/doc/ios/union/union_debug#%E9%94%99%E8%AF%AF%E7%A0%81)
- App-side aggregated Guangdiantong (iOS): [Error code](https://developers.adnet.qq.com/doc/ios/union/union_debug#%E9%94%99%E8%AF%AF% E7%A0%81)
- App端聚合的广点通(Android)：[错误码](https://developers.adnet.qq.com/doc/android/union/union_debug#sdk%20%E9%94%99%E8%AF%AF%E7%A0%81)
- Guangdiantong (Android) aggregated on the App side: [Error code](https://developers.adnet.qq.com/doc/android/union/union_debug#sdk%20%E9%94%99%E8%AF %AF%E7%A0%81)


**示例：**
**Example:**

示例1
Example 1

```html
<template>
  <!-- 仅nvue页面支持 -->
  <!-- nvue page support only -->
  <!-- 必须指定ad-draw的宽度和高度，否则大小全屏 -->
  <!-- You must specify the width and height of ad-draw, otherwise the size will be full screen -->
  <view class="container">
    <ad-draw class="ad-draw" adpid="1507000690"></ad-draw>
  </view>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style>
  .container {
    flex: 1;
  }

  .ad-draw {
    flex: 1;
    width: 750rpx;
  }
</style>

```

示例2
Example 2

```html
<template>
  <!-- 仅nvue页面支持 -->
  <!-- nvue page support only -->
  <view class="content">
    <view class="ad-draw">
      <ad-draw :data="adData" @load="onload" @error="onerror"></ad-draw>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'ad-draw',
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
        plus.ad.getDrawAds({
            adpid: '1507000690',  // 此广告位标识仅在HBuilderX标准基座中有效，仅用于测试
            count: 1,   // 广告数量，默认 1-3
            width: 300,  // 根据宽度获取合适的广告(单位px)
            height: 300  // 根据高度获取合适的广告(单位px)
          },
          (res) => {
            this.adData = res.ads[0];
            console.log(this.adData);
          },
          (err) => {
            console.log(err);
          }
        )
      },
      onload(e) {
        console.log("onload",e);
      },
      onerror(e) {
        console.log("onerror: " + e.detail.errCode + " message:: " + e.detail.errMsg);
      }
    }
  }
</script>
```

沉浸视频流广告不是激励视频广告，激励视频广告另见：[https://uniapp.dcloud.io/api/a-d/rewarded-video](https://uniapp.dcloud.io/api/a-d/rewarded-video)
Immersive video streaming ads are not rewarded video ads, see also rewarded video ads: [https://uniapp.dcloud.io/api/a-d/rewarded-video](https://uniapp.dcloud.io/api/a-d/rewarded -video)

**注意**
**Notice**
- iOS平台配置应用使用广告标识（IDFA）详见：[https://ask.dcloud.net.cn/article/36107](https://ask.dcloud.net.cn/article/36107)
- For details of the iOS platform configuration application using the Advertising Identification (IDFA): [https://ask.dcloud.net.cn/article/36107](https://ask.dcloud.net.cn/article/36107)
- App端广告开通指南和收益相关问题：[https://ask.dcloud.net.cn/article/36769](https://ask.dcloud.net.cn/article/36769)
- App-side advertising activation guidelines and revenue related issues: [https://ask.dcloud.net.cn/article/36769](https://ask.dcloud.net.cn/article/36769)
- App端除了ad组件，ad-draw组件，还支持开屏、激励视频、全屏广告等多种广告形式。详见[uni-AD官网](https://uniad.dcloud.net.cn/)
- In addition to the ad component and ad-draw component, the App side also supports various advertising forms such as screen opening, rewarded video, and full-screen advertising. For details, please refer to [uni-AD official website](https://uniad.dcloud.net.cn/)
- App端uni-AD聚合了腾讯广点通、头条穿山甲、360广告联盟等服务，打包时必须勾选相应的sdk，详见：[https://ask.dcloud.net.cn/article/36718](https://ask.dcloud.net.cn/article/36718)
![](https://web-assets.dcloud.net.cn/unidoc/zh/ad.jpg)
