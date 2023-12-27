## uni-ad 原生微信小程序开发接入方式


**app.json**

```json
{
  "plugins": {
    "uni-ad": {
      "version": "1.1.11",
      "provider": "wxf72d316417b6767f"
    },
    "coral-adv": {
      "version": "1.0.18",
      "provider": "wx0e203209e27b1e66"
    }
  }
}
```


**page.json**

```json
{
  "usingComponents": {
    "uni-ad": "plugin://uni-ad/ad"
  }
}
```


**page.wxml**

```html
<!-- 广告位 adpid 见邮件内容 -->
<uni-ad adpid="" class="uni-ad"></uni-ad>
<!-- 插屏和激励视频需要调用组件的 show 方法，banner类型不需要 -->
<!-- 插屏广告需要在适合的时机下调用有效 -->
<button bindtap="showAd">显示 激励视频/插屏广告</button>
```


**page.js**

```js
Page({
  data: {
  },
  showAd: function (e) {
    this._uniAd = this.selectComponent('.uni-ad');
    this._uniAd.show();
  }
})
```
