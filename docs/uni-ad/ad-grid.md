## Grid 广告

### 简介

开发者可以使用 ad 组件创建 Grid 广告组件，Grid 广告组件在创建后会自动拉取广告数据并显示。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√ 3.5.1+|x|x|x|x|x|x|x|x|

**开通配置广告**

[开通广告步骤详情](https://uniapp.dcloud.net.cn/uni-ad.html#start)


**属性说明**

|属性名|类型|默认值|说明|
|:-|:-|:-|:-|
|adpid|String||uni-ad 广告位id，在[uni-ad官网](https://uniad.dcloud.net.cn/)申请广告位|
|@load|EventHandle||广告加载成功的回调|
|@error|EventHandle||广告加载失败的回调，event.detail = {errCode: xxx}|


### 广告事件监听

Grid 广告在创建后会自动拉取广告。开发者可以通过 ad 组件的 load 和 error 事件监听广告拉取成功或失败，可以通过 close 事件监听广告被关闭。

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
