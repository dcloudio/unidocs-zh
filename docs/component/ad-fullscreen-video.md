### 全屏视频广告
### Full Screen Video Ads

全屏视频广告是一个原生组件，层级比普通组件高。全屏视频广告每次创建都会返回一个全新的实例，默认是隐藏的，需要调用 FullScreenVideoAd.show() 将其显示。
A full-screen video ad is a native component with a higher level than normal components. A new instance of a full-screen video ad is returned each time it is created. It is hidden by default and needs to be displayed by calling FullScreenVideoAd.show() .

如何开通参考激励视频广告 [https://uniapp.dcloud.net.cn/api/a-d/rewarded-video](https://uniapp.dcloud.net.cn/api/a-d/rewarded-video)
How to activate reference rewarded video ads [https://uniapp.dcloud.net.cn/api/a-d/rewarded-video](https://uniapp.dcloud.net.cn/api/a-d/rewarded-video)


**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet|QQ applet|Quick app|360 applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√（3.4.8+）|x|√（3.4.8+）|x|x|x|x|x|x|x|x|

- app端的广告源由腾讯优量汇、头条穿山甲、快手等广告联盟提供，DCloud负责聚合
- The advertising sources on the app side are provided by Tencent Youlianghui, Toutiao Pangolin, Kuaishou and other advertising alliances, and DCloud is responsible for the aggregation
- 小程序端的广告由小程序平台提供
- The advertisement on the applet is provided by the applet platform

**开通配置广告**
**Activate configuration advertisement**

[开通广告步骤详情](https://uniapp.dcloud.net.cn/uni-ad.html#start)
[Details of the steps to activate advertising](https://uniapp.dcloud.net.cn/uni-ad.html#start)


### 语法
### grammar

`<ad-fullscreen-video adpid=""></ad-fullscreen-video>`


**属性说明**
**Property description**

|属性名														|类型													|默认值		|说明																																									|平台差异	|
|property name |type |default value |description |platform difference |
|:-																|:-														|:-				|:-																																										|:-				|
|adpid														|String&#124;Number&#124;Array|					|广告位id，如果传入的是数组，会从索引0开始请求失败后继续下一个，适用于已配置底价的逻辑|					|
|adpid |String&#124;Number&#124;Array| |Ad slot id, if an array is passed in, it will start from index 0 and continue to the next after the request fails, which applies to the logic of the configured reserve price| |
|preload                          |Boolean                      |true     |页面就绪后加载广告数据                                                                  |          |
|preload |Boolean |true |Load ad data when page is ready | |
|loadnext													|Boolean											|false		|自动加载下一条广告数据																																	|					|
|loadnext |Boolean |false |Automatically load next ad data | |
|v-slot:default="{loading, error}"|															|					|作用域插槽可以获取组件内部广告加载状态和加载错误信息																	|					|
|v-slot:default="{loading, error}"| | |The scope slot can get the loading status and loading error information of the ad inside the component | |
|@load														|EventHandle									|加载事件	|																																											|					|
|@load |EventHandle |Load event | | |
|@close														|EventHandle									|关闭事件	|																																											|					|
|@close |EventHandle |Close event | | |
|@error														|EventHandle									|错误事件	|																																											|					|
|@error |EventHandle |Error event | | |

**方法说明**
**Method Description**

|方法名|说明|
|method name|description|
|:-|:-|
|load|加载广告数据|
|load|Load ad data|
|show|显示广告|
|show|Show Ads|



简单示例
Simple example

```html
<template>
  <view>
    <ad-fullscreen-video adpid="1507000611" :loadnext="true" v-slot:default="{loading, error}">
      <button :disabled="loading" :loading="loading">显示广告</button>
      <view v-if="error">{{error}}</view>
    </ad-fullscreen-video>
  </view>
</template>
```


完整示例
Complete example

```html
<template>
  <view class="content">
    <ad-fullscreen-video adpid="1507000611" :loadnext="true" v-slot:default="{loading, error}" @load="onadload" @close="onadclose" @error="onaderror">
      <button :disabled="loading" :loading="loading">显示广告</button>
      <view v-if="error">{{error}}</view>
    </ad-fullscreen-video>
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
      console.log("onerror: ", e.detail);
    }
  }
}
</script>
```

**错误码**
**error code**

[错误码相关问题排查](https://uniapp.dcloud.net.cn/component/ad-error-code.html)
[Error code related troubleshooting](https://uniapp.dcloud.net.cn/component/ad-error-code.html)
