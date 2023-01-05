### 插屏广告
### Interstitial ads

插屏广告组件是由客户端原生的图片、文本、视频控件组成的；插屏广告与信息流或横幅广告相比展现尺寸更大，同样能够满足您对大量曝光和用户转化的需求。
Interstitial ad components are composed of client-side native image, text, and video controls; interstitial ads have a larger display size than information flow or banner ads, and can also meet your needs for a large number of exposures and user conversions.

![](https://web-assets.dcloud.net.cn/unidoc/zh/interstitial-ad.png)


**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet|QQ applet|Quick app|360 applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√（3.4.8+）|x|√（3.4.8+）|x|x|x|x|x|x|x|x|


**开通配置广告**
**Activate configuration advertisement**

[开通广告步骤详情](https://uniapp.dcloud.net.cn/uni-ad.html#start)
[Details of the steps to activate advertising](https://uniapp.dcloud.net.cn/uni-ad.html#start)


### 语法
### grammar

`<ad-interstitial></ad-interstitial>`


**属性说明**
**Property description**

|属性名																			|类型													|默认值		|说明																																									|平台差异	|
|:-																					|:-														|:-				|:-																																										|:-				|
|adpid																			|String&#124;Number&#124;Array|					|广告位id，如果传入的是数组，会从索引0开始请求失败后继续下一个，适用于已配置底价的逻辑|					|
|preload																		|Boolean											|true			|页面就绪后加载广告数据																																|					|
|loadnext																		|Boolean											|false		|自动加载下一条广告数据																																|					|
|options																		|Object												|					|透传到作用域插槽																																			|					|
|v-slot:default="{loading, error, options}"	|															|					|作用域插槽可以获取组件内部广告加载状态和加载错误信息																	|					|
|@load																			|EventHandle									|加载事件	|微信小程序暂不支持																																		|					|
|@close																			|EventHandle									|关闭事件	|微信小程序暂不支持																																		|					|
|@error																			|EventHandle									|错误事件	|微信小程序暂不支持																																		|					|

**方法说明**
**Method Description**

|方法名|说明|
|method name|description|
|:-|:-|
|load|加载广告数据|
|load|Load ad data|
|show|显示广告|
|show|Show Ads|


HBuilder 基座的测试广告位 `adpid` 为 `1111111113`，微信小程序暂不提供测试广告位


简单示例
Simple example

```html
<template>
  <view>
    <ad-interstitial adpid="1111111113" :loadnext="true" v-slot:default="{loading, error}">
      <button :disabled="loading" :loading="loading">显示广告</button>
      <view v-if="error">{{error}}</view>
    </ad-interstitial>
  </view>
</template>
```


完整示例
Complete example

```html
<template>
  <view class="content">
    <ad-interstitial adpid="1111111113" :loadnext="true" v-slot:default="{loading, error}" @load="onadload" @close="onadclose" @error="onaderror">
      <button :disabled="loading" :loading="loading">显示广告</button>
      <view v-if="error">{{error}}</view>
    </ad-interstitial>
  </view>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    onadload(e) {
      console.log('广告数据加载成功');
    },
    onadclose(e) {
		 console.log("onadclose",e);
    },
    onaderror(e) {
      // 广告加载失败
      // ad failed to load
      console.log("onaderror: ", e.detail);
    }
  }
}
</script>
```

**注意**

- 微信小程序插屏广告触发频率限制：
  - 小程序启动一定时间内不允许展示插屏广告
  - 距离小程序插屏广告或者激励视频广告上次播放时间间隔不足，不允许展示插屏广告
  - 当前正在播放激励视频广告或者插屏广告，不允许再次展示插屏广告



**错误码**
**error code**

[错误码相关问题排查](https://uniapp.dcloud.net.cn/component/ad-error-code.html)
[Error code related troubleshooting](https://uniapp.dcloud.net.cn/component/ad-error-code.html)
