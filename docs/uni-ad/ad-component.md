## 信息流广告

### 简介

应用内展示的广告组件，可用于banner或信息流。

### 适用场景

Banner或信息流广告展现场景非常灵活，常见的展现场景为：文章顶部，详情页面顶部，第一屏中部等。建议信息流广告不要放置在底部

![](https://web-assets.dcloud.net.cn/unidoc/zh/ad-feed.png)


- App端的广告源由腾讯优量汇、头条穿山甲、快手广告联盟等主流广告渠道以及部分DCloud直投广告组成，在DCloud的uni-ad后台注册：[https://uniad.dcloud.net.cn/](https://uniad.dcloud.net.cn/)
- H5端、微信小程序端的广告由DCloud直接提供
- 其他小程序端由小程序平台提供

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√（2.5.2+）|3.4.8+|√|x|√|√|√|x|x|√|x|

**`vue3 H5暂不支持`**


**开通配置广告**

[开通广告步骤详情](https://uniapp.dcloud.net.cn/uni-ad.html#start)


**属性说明**

|属性名|类型|默认值|说明|平台差异|
|:-|:-|:-|:-|:-|
|adpid|String||uni-ad 广告位id，在[uni-ad官网](https://uniad.dcloud.net.cn/)申请广告位|App，Web，微信小程序3.4.8+|
|unit-id|String||广告单元id，可在小程序管理后台的流量主模块新建|微信小程序、字节跳动小程序(最低版本1.19.0+)、QQ小程序、快手小程序|
|ad-intervals|number||广告自动刷新的间隔时间，单位为秒，参数值必须大于等于30（该参数不传入时 Banner 广告不会自动刷新）|微信小程序(基础库2.3.1+)|
|data|Object|可选|广告数据，通过 plus.ad.getAds (参考示例代码)，优先级高于adpid|App|
|appid|String||小程序应用 ID|百度小程序|
|apid|String||小程序广告位 ID|百度小程序|
|ad-left|Number||type为feeds时广告左边距（px），必须大于0|QQ小程序|
|ad-top|Number||type为feeds时广告上边距（px），必须大于0|QQ小程序|
|ad-width|Number||type为feeds时广告宽度（px），默认100%，最大值为屏幕宽度，最小值为265|QQ小程序|
|ad-height|Number||type为feeds时广告高度（px），最小85，最大160|QQ小程序|
|type|String|feed||QQ小程序、百度小程序、字节跳动小程序、快手小程序|
|@load|EventHandle||广告加载成功的回调||
|@error|EventHandle||广告加载失败的回调，event.detail = {errCode: }||
|@close|EventHandle||广告关闭的回调||


**type属性 百度**

广告类型：banner/feed，需和百青藤平台上的代码位类型相匹配。

**type属性 头条**

广告的类型，默认 banner，具体类型有：banner、video（视频）、large（大图）、lImg（左图右文）、rImg（右图左文），默认值为 banner

**type属性 QQ**

|值|说明|
|:-|:-|
|banner|banner广告 分 1 图和 3 图 1 文。3 图 1 文广告的背景色、文字颜色会根据祖先节点的背景色调整，分三种情况深色背景、浅色背景和白色背景|
|swip|翻页广告，1 图 1 文，会覆盖整个小程序，显示、隐藏逻辑需开发者自行控制|
|card|卡片广告，1 图，可关闭|
|feeds|自定义广告，可灵活控制广告上、左边距和宽高，以适应界面其他内容。可监听size事件获取实际宽高|

App和微信小程序的ad组件没有type属性，可以用于banner，也可以用于信息流。


## 微信小程序@weixin

微信小程序平台支持信息流(Banner)广告组件 `<ad unit-id=""></ad>`，由微信提供

uni-ad 也支持信息流(Banner)广告组件 `<ad adpid=""></ad>`，由uni-ad提供

3.4.10 之前的版本`ad`组件运行到微信小程序使用微信提供的广告组件

3.4.10+ 以后的版本调整如下

1. 组件仅设置 `unit-id`，使用微信提供的ad组件，逻辑不变
2. 组件设置了 `adpid` 属性，被编译为 `uniad`，见下文的介绍
3. 组件设置了 `adpid` 和 `unit-id` 属性，被编译为 `uniad`，见下文的介绍

`uniad`是`uni-app`框架的内置的组件，`uniad`组件同时支持`uni-ad`广告和微信原生广告，先请求`uni-ad`，如果已开通直接使用否则切换为微信的广告，这个过程会有3秒的延时

`uniad`组件依赖uni-ad提供的微信小程序插件和腾讯提供的珊瑚广告插件

如果想在微信上仅使用微信的广告，App 或 Web 使用 uni-ad 可使用条件编译

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
- 无广告时没有高度，关闭广告时释放高度，宽度由父容器决定
- App 平台，因广告组件内部获得广告数据计算后设置组件大小，会出现界面抖动问题，可以提前通过 plus.ad.getAds 获得广告数据，设置 data 后 adpid 将无效
- 微信小程序 `<ad>` 组件不支持触发 tap 等触摸相关事件
- Android 平台 nvue的 `<list>` 组件中使用 `<ad>` 时，必须指定宽度属性`<ad width="750rpx" />`，因为 `<list>` 有自动的内存回收机制，不在屏幕范围的组件不被创建，组件内部无法获取大小
- app-nvue 的 `<recycle-list>` 组件内不支持嵌套 `<ad>`
- 广点通概率出现重复广告，可根据需求请求广告数据，推荐单次大于1条(plus.ad.getAds) 来降低重复率
- HBuilderX2.8+版本Android平台更新穿山甲（今日头条）广告SDK后不再支持x86类型CPU，无法运行到x86类型cpu的模拟器。
- `<ad>` 组件测试广告位是上图下文，uni-ad后台申请的广告位默认左图右文
- HBuilderX标准基座真机运行测试信息流广告位标识（adpid）为：1111111111，微信小程序和H5平台暂不提供测试广告位


**示例：**

```html
<template>
  <view class="content">
    <!-- adpid="1111111111" 此广告位标识仅在HBuilderX标准基座中有效，仅用于测试 -->
    <!-- 广告后台申请的广告位(adpid)需要自定义基座/云打包/本地打包后生效 -->
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
      plus.ad.getAds({
          adpid: '1111111111',  // 替换为自己申请获取的广告位标识，此广告位标识仅在HBuilderX标准基座中有效，仅用于测试
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
    margin-bottom: 10px;
  }
</style>
```


使用 ad/ad-draw 模拟插屏广告效果@Interstitial


```html
<template>
  <view>
    <!-- 使用 ad/ad-draw 模拟插屏广告效果 -->
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
文档地址：[https://uniapp.dcloud.io/uni-ad/ad-rewarded-video](https://uniapp.dcloud.io/uni-ad/ad-rewarded-video)

**全屏视频广告**
文档地址：[https://uniapp.dcloud.io/uni-ad/ad-fullscreen-video](https://uniapp.dcloud.io/uni-ad/ad-fullscreen-video)

**插屏广告**
文档地址：[https://uniapp.dcloud.io/uni-ad/ad-interstitial](https://uniapp.dcloud.io/uni-ad/ad-interstitial)


**注意**
- iOS平台配置应用使用广告标识（IDFA）详见：[https://ask.dcloud.net.cn/article/36107](https://ask.dcloud.net.cn/article/36107)
- App端广告开通指南和收益相关问题：[https://ask.dcloud.net.cn/article/36769](https://ask.dcloud.net.cn/article/36769)
- App端除了ad组件，还支持开屏、激励视频等多种广告形式。详见[uni-ad官网](https://uniad.dcloud.net.cn/)
- App端uni-ad聚合了腾讯广点通、头条穿山甲、360广告联盟等服务，打包时必须勾选相应的sdk，详见：[https://ask.dcloud.net.cn/article/36718](https://ask.dcloud.net.cn/article/36718)
![](https://web-assets.dcloud.net.cn/unidoc/zh/ad.jpg)


**错误码**

[错误码相关问题排查](https://uniapp.dcloud.net.cn/uni-ad/ad-error-code.html)
