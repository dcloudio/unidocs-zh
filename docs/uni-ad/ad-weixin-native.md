# uni-ad 原生微信小程序开发接入方式
开发者如果使用非 `uni-app` 发行的项目（即微信小程序原生开发），可以在微信小程序项目中自行配置，从而使用 `uni-ad`功能。

**开通配置广告**
[广告开通步骤](https://uniapp.dcloud.net.cn/uni-ad/ad-weixin-dcloud.html)

## 注册广告插件
在小程序 `app.json`中注册广告插件，需要完全按照下方值配置。

**app.json**

```json
{
  "plugins": {
    "uni-ad": {
      "version": "2.0.0",
      "provider": "wxe6129e9cc9619c07"
    }
  }
}
```

## 注册页面组件
在小程序使用广告的页面中，配置广告插件。 即可在当前页面使用 `uni-ad` 功能。
**page.json**

```json
{
  "usingComponents": {
    "uni-ad": "plugin://uni-ad/ad"
  }
}
```

## 修改页面路径 
在使用广告的页面，需要在页面路径中增加广告位标识，如 `pages/test-ad/test-ad_1013000002`，其中`test-ad` 为实际页面路径， `1013000002` 是广告位 id（即换成你自己申请下来的广告位），如果一个页面使用到多种类型的广告位，任选一个加上。

**页面目录**
```bash
pages
	- test_ad
		- test-ad_1013000002.wxml
		- test-ad_1013000002.js
		- test-ad_1013000002.json
		- test-ad_1013000002.wxss
```
**page.json**
```json
{
  "pages": [
    "pages/test-ad/test-ad_1013000002"
  ],
}
```

## 使用uni-ad 广告组件
在使用插件时，必须传入 `plugins`属性,此属性接受一个字符串类型的值 ，内容为当前插件配置的 `name`、`provider` 、`version`的一维对象数组转换的字符串。

例如 ，当前app.json 中插件配置为：

```json
{
	"plugins": {
	    "uni-ad": {
	      "version": "2.0.0",
	      "provider": "wxe6129e9cc9619c07"
	    }
	}
}
```

则 `plugins` 的值为 `'[{"name":"uni-ad","provider":"wxe6129e9cc9619c07","version":"2.0.0"}]'`,具体用法见下方示例。



**page.wxml**

```html
<!-- 广告位 adpid 见邮件内容 -->
<!-- 信息流/视频广告 -->
<uni-ad adpid="" plugins="{{plugins}}" class="uni-banner"></uni-ad>

<!-- 插屏和激励视频需要调用组件的show方法，banner，视频广告，格子类型广告不需要。 -->

<!-- 激励视频 -->
<uni-ad adpid="" plugins="{{plugins}}" class="uni-rewarded-video-ad" bind:load="onadload" bind:close="onadclose" bind:error="onaderror"></uni-ad>
<button bindtap="showRewardedVideoAd">显示激励视频</button>

<!-- 
插屏广告需要在适合的时机下调用有效 
插屏广告触发频率限制: 
  1、小程序启动一定时间内不允许展示插屏广告
  2、距离小程序插屏广告或者激励视频广告上次播放时间间隔不足，不允许展示插屏广告
  3、当前正在播放激励视频广告或者插屏广告，不允许再次展示插屏广告
-->
<uni-ad adpid="" plugins="{{plugins}}" class="uni-interstitial-ad"></uni-ad>
<button bindtap="showInterstitialAd">显示插屏</button>

```

注意事项：通过 wx:if 销毁组件时会自动销毁广告示例，并关闭广告效果

**page.js**

```js
Page({
	data: {
		plugins:'[{"name":"uni-ad","provider":"wxe6129e9cc9619c07","version":"2.0.0"}]'
	},
	showRewardedVideoAd: function (e) {
		this.selectComponent('.uni-rewarded-video-ad').show();
	},
	showInterstitialAd: function (e) {
		this.selectComponent('.uni-interstitial-ad').show();
	},
	onadload: function(e) {
		console.log('广告加载成功：', e)
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
