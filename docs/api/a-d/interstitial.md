<md-translatedByGoogle />

### 插屏广告
### Interstitial ads

[插屏广告介绍](https://uniapp.dcloud.net.cn/component/ad-interstitial.html)
[Introduction to Interstitial Ads](https://uniapp.dcloud.net.cn/component/ad-interstitial.html)

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|App 3.1.10+|x|√|x|x|x|√|x|x|

**开通配置广告**
**Activate configuration advertisement**

[开通广告步骤详情](https://uniapp.dcloud.net.cn/uni-ad.html#start)
[Details of the steps to activate advertising](https://uniapp.dcloud.net.cn/uni-ad.html#start)


### 语法
### grammar

`uni.createInterstitialAd(options)`

### 参数说明
### Parameter Description

`options` 为 object 类型，属性如下：
`options` is of type object with the following attributes:

|属性名		|类型		|必填	|描述			|最低支持版本	|
|Property Name |Type |Required |Description |Minimum Supported Version |
|:-:|:-:|:-:|:-:|:-:|
|adpid	  |string	|	是|广告位 id |App 3.1.10+|
|adpid |string | yes|ad slot id |App 3.1.10+|
|adUnitId	|string	|	是|广告位 id |微信小程序2.6.0+, QQ0.1.26+|
|adUnitId |string | Yes |Ad unit id |WeChat applet 2.6.0+, QQ0.1.26+|


HBuilder 基座的测试广告位 `adpid` 为 `1111111113`
The test ad slot `adpid` of the HBuilder base is `1111111113`


### 广告创建
### Ad Creation

插屏广告组件默认是隐藏的，因此可以提前创建，以提前初始化组件。开发者可以在页面的 onReady 事件回调中创建广告实例，并在该页面的生命周期内重复调用该广告实例。
Interstitial ad components are hidden by default, so they can be created ahead of time to initialize components early. Developers can create an ad instance in the page's onReady event callback, and call the ad instance repeatedly during the page's life cycle.


### 显示/隐藏
### show/hide

插屏广告组件默认是隐藏的，开发者需要调用 InterstitialAd.show() 进行显示。如果广告拉取失败或触发频率限制，InterstitialAd.show() 方法会返回一个rejected Promise，开发者可自行监听错误信息
The interstitial ad component is hidden by default, and the developer needs to call InterstitialAd.show() to display it. If the ad pull fails or the frequency limit is triggered, the InterstitialAd.show() method will return a rejected Promise, and the developer can monitor the error message by himself

```js
interstitialAd.show().catch((err) => {
  console.error(err)
})
```

用户可以主动关闭插屏广告。开发者不可控制插屏广告组件的隐藏。
Users can actively close interstitial ads. The developer has no control over the hiding of interstitial ad components.


### 监听用户关闭广告
### Listen for users to close ads

如果广告被关闭，通过 InterstitialAd.onClose() 注册的回调函数会执行，回调函数没有参数传递。
If the ad is closed, the callback function registered through InterstitialAd.onClose() will be executed, and the callback function has no parameters passed.

```js
interstitialAd.onClose(res => {
    console.log('插屏 广告关闭')
})
```


示例代码
sample code

```html
<template>
  <view>
    <view>
      <button :loading="loading" :disabled="loading" type="primary" @click="showInterstitialAd">显示广告</button>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: '插屏广告',
        loading: false
      }
    },
    onReady() {
      this.adOption = {
        adpid: '1111111113' // HBuilder基座的测试广告位
      };

      // 创建广告实例
      // create ad instance
      this.createInterstitialAd();
    },
    methods: {
      createInterstitialAd() {
        var interstitialAd = this.interstitialAd = uni.createInterstitialAd(this.adOption);
        interstitialAd.onLoad(() => {
          this.loading = false;
          console.log("插屏 广告加载成功");
        });
        interstitialAd.onClose(() => {
          // 用户点击了关闭或返回键(仅Android有返回键)
          // User clicked close or back button (only Android has back button)
          console.log("插屏 广告关闭");
        });
        interstitialAd.onError((err) => {
          this.loading = false;
          console.log("插屏 广告加载失败");
        });

        // 广告实例创建成功后默认会执行一次 load，加载广告数据
        // After the ad instance is created successfully, a load will be executed by default to load the ad data
        // 如果界面有 "显示广告" 按钮，需要先禁用掉，防止用户点击，等待广告数据加载成功后在放开
        // If there is a "Show Ads" button on the interface, you need to disable it first to prevent users from clicking, wait for the ad data to be loaded successfully, and then release it
        this.loading = true;
      },
      showInterstitialAd() {
        // 调用 interstitialAd.show()，如果数据正在加载中不会显示广告，加载成功后才显示
        // Call interstitialAd.show(), if the data is loading, the ad will not be displayed, and it will be displayed after the loading is successful
        // 在数据没有加载成功时，需要防止用户频繁点击显示广告
        // When the data is not loaded successfully, it is necessary to prevent the user from frequently clicking on the display ad
        if (this.loading == true) {
          return
        }
        this.loading = true;
        this.interstitialAd.show().then(() => {
          this.loading = false;
        });
      }
    },
    onUnload() {
      // 页面关闭后销毁实例
      // Destroy the instance after the page is closed
      this.interstitialAd.destroy()
    }
  }
</script>
```


#### 方法
#### method

`Promise InterstitialAd.load()`

加载插屏广告。
Load the interstitial ad.

`Promise InterstitialAd.show()`

显示插屏广告。
Display interstitial ads.

`InterstitialAd.destroy()`

销毁插屏广告实例。
Destroy the interstitial ad instance.

`InterstitialAd.onLoad(function callback)`

监听插屏广告加载事件。
Listen for interstitial ad load events.

`InterstitialAd.offLoad(function callback)`

取消监听插屏广告加载事件
Cancel listening for interstitial ad load event

`InterstitialAd.onError(function callback)`

监听插屏错误事件。
Listen for interstitial error events.

`InterstitialAd.offError(function callback)`

取消监听插屏错误事件
Cancel listening for interstitial error events

`InterstitialAd.onClose(function callback)`

监听插屏广告关闭事件。
Listen for the interstitial ad close event.

`InterstitialAd.offClose(function callback)`

取消监听插屏广告关闭事件
Cancel listening for interstitial ad close event


### 注意事项
### Precautions

在插屏广告展示过程中如果快速切换页面，可能会出现插屏广告展示在非调用页面的情况，如有需要请在页面切换完成后进行插屏广告展示。
If you switch pages quickly during the display of interstitial ads, it may happen that the interstitial ads are displayed on the non-calling page. If necessary, please display the interstitial ads after the page switching is completed.
