
## 沉浸视频流广告

### 简介

也称为Draw视频信息流广告

沉浸视频流广告为媒体提供了竖屏视频信息流广告样式，适合在全屏的竖屏视频中使用。支持app-nvue页面使用。

### 适用场景

类抖音的竖版视频流，来电秀、直播间等全屏观看的视频。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/ad-draw.png)


- app端的广告源由腾讯优量汇、穿山甲、快手、百度等广告渠道以及部分DCloud直投广告聚合提供，在DCloud的uni-ad后台注册：[https://uniad.dcloud.net.cn/](https://uniad.dcloud.net.cn/)

**平台差异说明**

|App-nvue|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√（3.0.0+）|x|x|x|x|x|x|x|x|x|x|


**开通配置广告**

[开通广告步骤详情](https://uniapp.dcloud.net.cn/uni-ad/ad-open.html)


**属性说明**

|属性名|类型|默认值|说明|平台差异|
|:-|:-|:-|:-|:-|
|data|Object|可选|广告数据，通过 plus.ad.getDrawAds (参考示例代码)，设置后adpid将无效|App|
|adpid|String||uni-ad App广告位id，在[uni-ad官网](https://uniad.dcloud.net.cn/)申请广告位|App|
|@load|EventHandle||广告加载成功的回调||
|@error|EventHandle||广告加载失败的回调，event.detail = {errCode: }||


**注意**
- HBuilderX2.8+版本Android平台更新穿山甲（今日头条）广告SDK后不再支持x86类型CPU，无法运行到x86类型cpu的模拟器。
- HBuilderX标准基座真机运行测试draw信息流广告位标识（adpid）为：1507000690


**@error 错误码**
- App端聚合的穿山甲(iOS)：[错误码](https://ad.oceanengine.com/union/media/union/download/detail?id=16&docId=5de8d574b1afac00129330d5&osType=ios)
- App端聚合的穿山甲(Android)：[错误码](https://ad.oceanengine.com/union/media/union/download/detail?id=4&docId=5de8d9b925b16b00113af0ed&osType=android)
- App端聚合的优量汇(iOS)：[错误码](https://developers.adnet.qq.com/doc/ios/union/union_debug#%E9%94%99%E8%AF%AF%E7%A0%81)
- App端聚合的优量汇(Android)：[错误码](https://developers.adnet.qq.com/doc/android/union/union_debug#sdk%20%E9%94%99%E8%AF%AF%E7%A0%81)


**示例：**

示例1

```html
<template>
  <!-- 仅nvue页面支持 -->
  <!-- 必须指定ad-draw的宽度和高度，否则大小全屏 -->
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

```html
<template>
  <!-- 仅nvue页面支持 -->
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

沉浸视频流广告不是激励视频广告，激励视频广告另见：[https://uniapp.dcloud.io/uni-ad/ad-rewarded-video](https://uniapp.dcloud.io/uni-ad/ad-rewarded-video)

**注意**
- iOS平台配置应用使用广告标识（IDFA）详见：[https://ask.dcloud.net.cn/article/36107](https://ask.dcloud.net.cn/article/36107)
- App端除了ad组件，ad-draw组件，还支持开屏、激励视频、全屏广告等多种广告形式。详见[uni-ad官网](https://uniad.dcloud.net.cn/)
- App端uni-ad聚合了优量汇、穿山甲、快手、百度等广告渠道，打包时必须勾选相应的sdk，详见：[https://ask.dcloud.net.cn/article/36718](https://ask.dcloud.net.cn/article/36718)
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/ad.jpg)


**错误码**

[错误码相关问题排查](https://uniapp.dcloud.net.cn/uni-ad/ad-error-code.html)
