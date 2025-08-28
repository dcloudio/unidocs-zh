## 视频前贴广告

### 简介

应用内展示的广告组件，可用于banner、信息流或视频前贴。

### 适用场景

视频前贴广告展现场景非常灵活，可以当做普通信息流使用，也可以搭配`video`标签，做贴片广告使用。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/ad-feed.png)


- App端的广告源由腾讯优量汇、头条穿山甲、快手广告联盟等主流广告渠道组成，在DCloud的uni-ad后台注册：[https://uniad.dcloud.net.cn/](https://uniad.dcloud.net.cn/)
- 视频前贴广告需要设置高度，广告根据设置的高度撑开。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√（4.81+）|x|x|x|x|x|x|x|x|x|x|

**`vue3 H5暂不支持`**


**开通配置广告**

[开通广告步骤详情](https://uniapp.dcloud.net.cn/uni-ad/ad-open.html)


**属性说明**

|属性名|类型|默认值|说明|平台差异|
|:-|:-|:-|:-|:-|
|adpid|String||uni-ad 广告位id，在[uni-ad官网](https://uniad.dcloud.net.cn/)申请广告位||
|data|Object|可选|广告数据，通过 plus.ad.getAds (参考示例代码)，优先级高于adpid|App|
|@load|EventHandle||广告加载成功的回调||
|@error|EventHandle||广告加载失败的回调，event.detail = {errCode: }||
|@close|EventHandle||广告关闭的回调||


条件编译示例

```html
<!-- #ifdef MP-WEIXIN -->
<ad unit-id=""></ad>
<!-- #endif -->
<!-- #ifndef MP-WEIXIN -->
<ad adpid=""></ad>
<!-- #endif -->
```


**注意**
- `<ad>` 组件是原生组件，在webview页面会有层级问题，同时无法在`<swiper>` 、`<scroll-view>` 组件中使用。但app-nvue、微信小程序新版和头条小程序新版支持同层渲染，所以没有层级问题。而app-vue、QQ小程序等平台则有层级问题。详见：[原生组件](https://uniapp.dcloud.io/component/native-component)
- Android 平台 nvue的 `<list>` 组件中使用 `<ad>` 时，必须指定宽度属性`<ad width="750rpx" />`，因为 `<list>` 有自动的内存回收机制，不在屏幕范围的组件不被创建，组件内部无法获取大小
- app-nvue 的 `<recycle-list>` 组件内不支持嵌套 `<ad>`
- HBuilderX2.8+版本Android平台更新穿山甲（今日头条）广告SDK后不再支持x86类型CPU，无法运行到x86类型cpu的模拟器。
- HBuilderX标准基座真机运行测试视频前贴广告位标识（adpid）为：1597617406，微信小程序和H5平台暂不提供测试广告位。
- 视频前贴广告需要设置高度，广告会根据设置的高度撑开。

**示例：**

```html
<template>
  <view class="content">
    <!-- adpid="1597617406" 此广告位标识仅在HBuilderX标准基座中有效，仅用于测试 -->
    <!-- 广告后台申请的广告位(adpid)需要自定义基座/云打包/本地打包后生效 -->
    <view class="ad-view">
      <ad adpid="1597617406" @load="onload" @close="onclose" @error="onerror" style="width: 100%;height: 100%;"></ad>
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
	width: 100%;
	height:300px;
    margin-bottom: 10px;
  }
</style>
```


api的方式(仅App平台支持)，不推荐使用这种调用方式，调用比较复杂，且不跨平台，开发者还需要手动处理缓存逻辑

``` html
<template>
  <view class="content">
    <view class="ad-view">
      <ad style="width: 100%;height: 100%;" :data="adData"></ad>
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
      plus.ad.getAds({
          adpid: '1597617406',  // 替换为自己申请获取的广告位标识，此广告位标识仅在HBuilderX标准基座中有效，仅用于测试
          count: 1,   // 广告数量，默认 3
          width: 300  // 根据宽度获取合适的广告(单位px)
        },
        (res) => {
					// 注意: 广告数据只能使用一次
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
	width: 100%;
	height: 300px;
    margin-bottom: 10px;
  }
</style>
```

**激励视频广告**
文档地址：[https://uniapp.dcloud.io/uni-ad/ad-rewarded-video](https://uniapp.dcloud.io/uni-ad/ad-rewarded-video)

**全屏视频广告**
文档地址：[https://uniapp.dcloud.io/uni-ad/ad-fullscreen-video](https://uniapp.dcloud.io/uni-ad/ad-fullscreen-video)

**插屏广告**
文档地址：[https://uniapp.dcloud.io/uni-ad/ad-interstitial](https://uniapp.dcloud.io/uni-ad/ad-interstitial)


**注意**
- iOS平台配置应用使用广告标识（IDFA）详见：[https://ask.dcloud.net.cn/article/36107](https://ask.dcloud.net.cn/article/36107)
- App端除了ad组件，还支持开屏、激励视频等多种广告形式。详见[uni-ad官网](https://uniad.dcloud.net.cn/)
- App端uni-ad聚合了腾讯优量汇、穿山甲、快手、百度等广告渠道，打包时必须勾选相应的sdk，详见：[https://ask.dcloud.net.cn/article/36718](https://ask.dcloud.net.cn/article/36718)
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/ad.jpg)


**错误码**

[错误码相关问题排查](https://uniapp.dcloud.net.cn/uni-ad/ad-error-code.html)
