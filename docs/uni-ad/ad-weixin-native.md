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
<!-- 信息流/视频广告 -->
<uni-ad adpid="" class="uni-banner"></uni-ad>

<!-- 插屏和激励视频需要调用组件的show方法，banner，格子类型广告不需要。只有激励视频有error和close事件。 -->

<!-- 激励视频 -->
<uni-ad adpid="" class="uni-rewarded-video-ad" bind:close="onadclose" bind:error="onaderror"></uni-ad>
<button bindtap="showRewardedVideoAd">显示激励视频</button>

<!-- 
插屏广告需要在适合的时机下调用有效 
插屏广告触发频率限制: 
  1、小程序启动一定时间内不允许展示插屏广告
  2、距离小程序插屏广告或者激励视频广告上次播放时间间隔不足，不允许展示插屏广告
  3、当前正在播放激励视频广告或者插屏广告，不允许再次展示插屏广告
-->
<uni-ad adpid="" class="uni-interstitial-ad"></uni-ad>
<button bindtap="showInterstitialAd">显示插屏</button>

```


**page.js**

```js
Page({
	data: {},
	showRewardedVideoAd: function (e) {
		this.selectComponent('.uni-rewarded-video-ad').show();
	},
	showInterstitialAd: function (e) {
		this.selectComponent('.uni-interstitial-ad').show();
	},
	onadclose: function(e) {
		const detail = e.detail
		// 用户点击了【关闭广告】按钮
		if (detail && detail.isEnded) {
			// 正常播放结束
			console.log("onClose-正常播放结束：" + detail.isEnded);
		} else {
			// 播放中途退出
			console.log("onClose-播放中途退出：" + detail.isEnded);
		}
	},
	onaderror: function(e) {
		// 广告加载失败
		console.log('广告加载失败：', e.detail)
	}
})
```
