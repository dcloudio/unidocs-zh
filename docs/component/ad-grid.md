## Grid 广告
## Grid Ads

### 简介
### Introduction

开发者可以使用 ad 组件创建 Grid 广告组件，Grid 广告组件在创建后会自动拉取广告数据并显示。
Developers can use the ad component to create a Grid ad component. After the Grid ad component is created, it will automatically pull the ad data and display it.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Quick app|360 applet|kuaishou applet|JD applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√ 3.5.1+|x|x|x|x|x|x|x|x|

**开通配置广告**
**Activate configuration advertisement**

[开通广告步骤详情](https://uniapp.dcloud.net.cn/uni-ad.html#start)
[Details of the steps to activate advertising](https://uniapp.dcloud.net.cn/uni-ad.html#start)


**属性说明**
**Property description**

|属性名|类型|默认值|说明|
|property name|type|default value|description|
|:-|:-|:-|:-|
|adpid|String||uni-AD 广告位id，在[uni-AD官网](https://uniad.dcloud.net.cn/)申请广告位|
|adpid|String||uni-AD advertising space id, apply for advertising space on [uni-AD official website](https://uniad.dcloud.net.cn/)|
|@load|EventHandle||广告加载成功的回调|
|@load|EventHandle||Callback for successful ad loading|
|@error|EventHandle||广告加载失败的回调，event.detail = {errCode: xxx}|
|@error|EventHandle||Callback for ad loading failure, event.detail = {errCode: xxx}|


### 广告事件监听
### Advertising event listener

Grid 广告在创建后会自动拉取广告。开发者可以通过 ad 组件的 load 和 error 事件监听广告拉取成功或失败，可以通过 close 事件监听广告被关闭。
Grid ads automatically pull ads after they are created. Developers can listen to the success or failure of ad pulling through the load and error events of the ad component, and can listen to the ad being closed through the close event.

```html
<template>
  <view class="adContainer">
    <ad adpid="xxxx" @load="adLoad" @error="adError"></ad>
  </view>
</template>
```

```js
<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      adLoad() {
        console.log("adLoad");
      },
      adError(e) {
        console.log("adError",e);
      }
    }
  }
</script>
```
