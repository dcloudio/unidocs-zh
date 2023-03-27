## 短视频内容联盟组件
## Short video content alliance components

### 简介
### Introduction

⼀个视频内容频道，支持上下滑动切换视频内容
A video content channel that supports sliding up and down to switch video content

![](https://web-assets.dcloud.net.cn/unidoc/zh/ad-content-page.png)

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Quick application|360 applet|Kuishou applet|JD applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|✓|x|x|x|x|x|x|x|x|x|x|


**`仅nvue支持` (iOS-hx3.4.2支持、Android-hx3.1.17支持)**


**开通配置广告**
**Activate configuration advertisement**

[开通广告步骤详情](https://uniapp.dcloud.net.cn/uni-ad.html#start)
[Details of the steps to activate advertising](https://uniapp.dcloud.net.cn/uni-ad.html#start)

注意：打包时必须选择快手内容联盟。
Note: Kuaishou Content Alliance must be selected when packaging.

**属性说明**
**Property description**

|属性名|类型|默认值|说明|平台差异|
|property name|type|default value|description|platform difference|
|:-|:-|:-|:-|:-|
|adpid|String||uni-AD App广告位id，在[uni-AD官网](https://uniad.dcloud.net.cn/)申请广告位|仅nvue支持|
|adpid|String||uni-AD App ad slot id, apply for an ad slot on [uni-AD official website](https://uniad.dcloud.net.cn/)|Only supported by nvue|
|@load|EventHandle||广告加载成功的回调||
|@load|EventHandle||Callback for successful ad loading||
|@error|EventHandle||广告加载失败的回调||
|@error|EventHandle||Callback for failed ad loading||
|@start|EventHandle|开始播放时触发|3.4.3+|
|@start|EventHandle| Triggered when playback starts |3.4.3+|
|@pause|EventHandle|暂停时触发|3.4.3+|
|@pause|EventHandle|Triggered when paused|3.4.3+|
|@resume|EventHandle|恢复播放时触发|3.4.3+|
|@resume|EventHandle|Triggered when playback resumes|3.4.3+|
|@complete|EventHandle|播放完成时触发|3.4.3+|
|@complete|EventHandle|Triggered when playback is complete|3.4.3+|


**@start @pause @resume @complete回调参数说明**
**@start @pause @resume @complete callback parameter description**

|字段名|说明|
|Field Name|Description|
|:-|:-|
|id|唯一标识|
|id|Unique ID|
|type|0未知类型  1 普通信息流  2 sdk内部广告 3第三方广告 4 直播|
|type|0 unknown type 1 general information flow 2 sdk internal advertisement 3 third party advertisement 4 live broadcast|
|duration|视频总时长|
|duration|Total video duration|


HBuilder 基座的测试广告位 `adpid` 为 `1111111112`
The test ad slot `adpid` of the HBuilder base is `1111111112`


**示例：**
**Example:**

```html
<template>
  <view class="content">
    <ad-content-page class="ad-content-page" ref="adContentPage" adpid="1111111112" @load="onadload" @error="onaderror"></ad-content-page>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'ad-content-page'
    }
  },
  onShow() {
    this.$nextTick(() => {
      // 需要在页面显示时调用广告组件的 show 方法
      // Need to call the show method of the ad component when the page is displayed
      this.$refs.adContentPage.show();
    })
  },
  onHide() {
    // 需要在页面隐藏时调用广告组件的 hide 方法停止广告内容的声音
    // Need to call the hide method of the ad component to stop the sound of the ad content when the page is hidden
    this.$refs.adContentPage.hide();
  },
  methods: {
    onadload(e) {
      console.log("onadload",e);
    },
    onaderror(e) {
      console.log("onaderror",e);
    }
  }
}
</script>

<style>
.content {
  flex: 1
}

.ad-content-page {
  flex: 1
}
</style>
```

**注意**
**Notice**

- 需要在页面隐藏时调用组件的 `hide` 方法以停止广告内容的声音
- The component's `hide` method needs to be called when the page is hidden to stop the sound of the ad content
- 3.4.17+ iOS平台 因广告商限制，调用 `show` 或 `hide` 方法需要申请通过后有效，详情咨询 `uniad@dcloud.io`
- 3.4.17+ iOS platform Due to advertiser restrictions, calling the `show` or `hide` method needs to be valid after the application is approved. For details, please contact `uniad@dcloud.io`
