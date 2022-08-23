
### 全屏视频广告
### Full Screen Video Ads

[全屏视频广告介绍](https://uniapp.dcloud.net.cn/component/ad-fullscreen-video.html)
[Introduction to Full Screen Video Ads](https://uniapp.dcloud.net.cn/component/ad-fullscreen-video.html)

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√（2.9.5+）|x|x|x|x|x|x|x|x|


**开通配置广告**
**Activate configuration advertisement**

[开通广告步骤详情](https://uniapp.dcloud.net.cn/uni-ad.html#start)
[Details of the steps to activate advertising](https://uniapp.dcloud.net.cn/uni-ad.html#start)

uni.createFullScreenVideoAd(Object)

|属性|类型|必填|说明|
|Attribute|Type|Required|Description|
|:-:|:-:|:-:|:-:|
|adpid|string|是|广告位 id|
|adpid|string|is|adslot id|


#### 方法
#### method

加载全屏视频广告。
Load a full screen video ad.

`Promise FullScreenVideoAd.load()`


显示全屏视频广告。
Display a full screen video ad.

`Promise FullScreenVideoAd.show()`


销毁全屏视频广告实例。
Destroys the fullscreen video ad instance.

`FullScreenVideoAd.destroy()`


监听全屏视频广告加载事件。
Listen to the fullscreen video ad load event.

`FullScreenVideoAd.onLoad(function callback)`


监听全屏视频错误事件。
Listen for fullscreen video error events.

`FullScreenVideoAd.onError(function callback)`


监听全屏视频广告关闭事件。
Listen to the fullscreen video ad close event.

`FullScreenVideoAd.onClose(function callback)`


示例代码
sample code
```html
<template>
  <view>
    <button :loading="loading" :disabled="loading" type="primary" @click="showFullScreenVideoAd">显示广告</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: '全屏视频广告',
        loading: false
      }
    },
    onReady() {
      // HBuilderX标准基座真机运行测试全屏视频广告位标识（adpid）为：1507000611
      // HBuilderX standard base real machine running test full-screen video advertising slot ID (adpid) is: 1507000611
      // adpid: 1507000611 仅用于测试，发布时需要改为广告后台（https://uniad.dcloud.net.cn/）申请的 adpid
      // adpid: 1507000611 is only used for testing, it needs to be changed to the adpid applied for by the advertising background (https://uniad.dcloud.net.cn/) when publishing
      // 广告后台申请的广告位(adpid)需要自定义基座/云打包/本地打包后生效
      // The advertising space (adpid) applied for by the advertising background needs to be customized after the base/cloud packaging/local packaging takes effect
      this.adOption = {
        adpid: '1507000611'
      };

      // 创建广告实例
      // create ad instance
      this.createFullScreenVideoAd();
    },
    methods: {
      createFullScreenVideoAd() {
        var fullScreenVideoAd = this.fullScreenVideoAd = uni.createFullScreenVideoAd(this.adOption);
        fullScreenVideoAd.onLoad(() => {
          // 广告数据加载成功
          // Ad data loaded successfully
          this.loading = false;
          console.log("onLoad");
        });
        fullScreenVideoAd.onClose((e) => {
          // 用户点击了关闭或返回键(仅Android有返回键)
          // User clicked close or back button (only Android has back button)
          console.log("onClose " + e.isEnded);
        });
        fullScreenVideoAd.onError((err) => {
          console.log("onError", JSON.stringify(err));
          // 广告数据加载失败
          // Failed to load ad data
          this.loading = false;
          uni.showToast({
            title: `${err.code} : ${err.errMsg}`
          })
        });
      },
      showFullScreenVideoAd() {
        // 调用 fullScreenVideoAd.show()，如果数据正在加载中不会显示广告，加载成功后才显示
        // Call fullScreenVideoAd.show(), if the data is loading, the ad will not be displayed, it will be displayed after the loading is successful
        // 在数据没有加载成功时，需要防止用户频繁点击显示广告
        // When the data is not loaded successfully, it is necessary to prevent the user from frequently clicking on the display ad
        if (this.loading == true) {
          return
        }
        this.loading = true;
        this.fullScreenVideoAd.show().then(() => {
          this.loading = false;
        }).catch((err) => {
          console.log(err.message);
          this.loading = false;
          uni.showToast({
            title: `${err.code} : ${err.errMsg}`
          })
        });
      }
    },
    onUnload() {
      this.fullScreenVideoAd.destroy()
    }
  }
</script>

```
