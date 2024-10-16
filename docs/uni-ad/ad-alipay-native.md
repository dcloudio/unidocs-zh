## uni-ad支持支付宝小程序广告

1. 开通方式

开发者在DCloud网站[uniad.dcloud.net.cn](https://uniad.dcloud.net.cn)申请，开发者与DCloud开票结算

2. 引入插件

使用小程序所属支付宝主账号登录，在能力中心订购：

[https://business.alipay.com/page/fw-market/home/detail/AM010401000000140190](https://business.alipay.com/page/fw-market/home/detail/AM010401000000140190)


`app.json` 文件中引入广告插件

```json
{
  "usingComponents": {
    "uni-ad": "plugin://uni-ad/ad"
  },
  "plugins": {
    "uni-ad": {
      "version": "*",
      "provider": "2021004169623603"
    }
  }
}
```

提示：`"version": "*"` 表示使用最新版本

3. 接入示例

`adpid` 属性为广告位id，在 [uni-ad web控制台](https://uniad.dcloud.net.cn/) 中可找到

### 信息流广告/Banner

```html
<uni-ad adpid="" onLoad="onAdLoad" onError="onAdError" onClose="onAdClose"></uni-ad>
```

```js
Page({
  onLoad(query) {
  },
  onAdLoad(e) {
    console.log('onAdLoad', e)
  },
  onAdClose(e) {
    console.log('onAdClose', e)
  },
  onAdError(e) {
    console.log('onAdError', e)
  }
});

```


### 激励视频广告

```html
<view class="ad-page">
  <uni-ad adpid="" ref="handleRef" onLoad="onAdLoad" onError="onAdError" onClose="onAdClose"></uni-ad>
  <button onTap="showAd">显示激励视频广告</button>
</view>
```

```js
Page({
  onLoad(query) {
  },
  handleRef(ref) {
    this.adRef = ref;
  },
  onAdLoad(e) {
    console.log('onAdLoad', e)
  },
  onAdClose(e) {
    console.log('onAdClose', JSON.stringify(e))
  },
  onAdError(e) {
    console.log('onAdError', JSON.stringify(e))
  },
  showAd() {
    this.adRef.show();
  }
});
```


### 插屏广告

```html
<view class="ad-page">
  <uni-ad adpid="" ref="handleRef" onLoad="onAdLoad" onError="onAdError" onClose="onAdClose"></uni-ad>
  <button onTap="showAd">显示插屏广告</button>
</view>
```

```js
Page({
  onLoad(query) {
  },
  handleRef(ref) {
    this.adRef = ref;
  },
  onAdLoad(e) {
    console.log('onAdLoad', e)
  },
  onAdClose(e) {
    console.log('onAdClose', JSON.stringify(e))
  },
  onAdError(e) {
    console.log('onAdError', JSON.stringify(e))
  },
  showAd() {
    this.adRef.show();
  }
});
```

### 全屏广告

```html
<view class="ad-page">
  <uni-ad adpid="" ref="handleRef" onLoad="onAdLoad" onError="onAdError" onClose="onAdClose"></uni-ad>
  <button onTap="showAd">显示全屏广告</button>
</view>
```

```js
Page({
  onLoad(query) {
  },
  handleRef(ref) {
    this.adRef = ref;
  },
  onAdLoad(e) {
    console.log('onAdLoad', e)
  },
  onAdClose(e) {
    console.log('onAdClose', JSON.stringify(e))
  },
  onAdError(e) {
    console.log('onAdError', JSON.stringify(e))
  },
  showAd() {
    this.adRef.show();
  }
});
```
