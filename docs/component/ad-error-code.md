## 广告错误码
## Ad error code

### app平台错误码
### app platform error code

code|message|
:-|:-|
-5001|广告位标识adpid为空，请传入有效的adpid
-5001|The advertising slot identifier adpid is empty, please pass in a valid adpid
-5002|无效的广告位标识adpid，请使用正确的adpid
-5002|Invalid ad slot identifier adpid, please use the correct adpid
-5003|未开通广告，请在广告平台申请并确保已审核通过
-5003|The advertisement has not been activated, please apply on the advertising platform and ensure that it has been approved
-5004|无广告模块，打包时请配置要使用的广告模块
-5004|No advertising module, please configure the advertising module to be used when packaging
-5005|广告加载失败，请过段时间重新加载，否则可能触发系统策略导致流量收益下降
-5005|Ad failed to load, please reload after a while, otherwise system policies may be triggered and traffic revenue may decrease
-5006|广告未加载完成无法播放，请加载完成后再调show播放
-5006|Ads are not loaded and cannot be played. Please adjust show after loading.
-5007|无法获取广告配置数据，请尝试重试
-5007|Could not get ad configuration data, please try again
-5008|广告已过期，请重新加载数据
-5008|Ad has expired, please reload data
-5100|其他错误，聚合广告商内部错误
-5100|Other errors, Aggregate Advertiser Internal Error

### -5005详细说明@-5005

-5005即广告没有填充，尤其是激励视频较为常见。

#### 可能的原因

1. 请求过于频繁，广告主不愿意给同一设备投放太多次广告。可过段时间再试
2. 当天请求次数已达广告商最大上限，明天再试
3. 设备太旧，广告主不投放
4. 终端用户在刷广告，比如使用了云手机或手机墙，广告主不投放
5. 如果配置了 bidding 分层，无法满足条件的也会抛出此错误

#### 正确解决方案

1. 尽可能开通多个广告渠道以增加填充率。激励视频有穿山甲、优量汇、快手、百度、华为、Sigmob等多家渠道，只开通一两家很容易造成填充不足。
2. 配置分层和 bidding 策略以提高填充率（联系广告运营uniad@dcloud.io，且需 HBuilderX 3.6.7+ 并整包更新App）
3. 如果一直无法填充，提示用户当前环境不适合展示广告，尝试更换设备
4. 激励视频因为有奖励，很容易招惹灰黑产，为防止被刷，推荐使用：
  - 1) 开通激励视频的服务器回调 [详情](ad-rewarded-video.md#callback)
  - 2) 不使用短信验证码等不安全登录手段，改为[App一键登陆](../univerify.md)、uni金融级实人认证（含活体检测）等更安全的身份校验
  - 3) 使用uni云端一体安全网络，防止伪造客户端 [详情](../uniCloud/secure-network.md)

#### 不治本的绕过型方案

1. 使用开发测试广告位，仅适用于开发人员调试，没有广告收益
2. 使用视频模拟广告以满足业务流程，没有广告收益。如：每日任务


**使用视频模拟广告示例**

```html
<!-- pages/index/index.nvue -->
<template>
	<view class="content">
		<ad-rewarded-video adpid="1507000689" :loadnext="true" v-slot:default="{loading, error}" @error="onaderror">
			<button :disabled="loading" :loading="loading">显示广告</button>
			<view v-if="error">{{error}}</view>
		</ad-rewarded-video>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		methods: {
			onaderror(e) {
				// 广告加载失败
				console.log("onaderror: ", e.detail);
				if (e.detail.errCode == -5005) {
					uni.navigateTo({
						url: '/pages/adVideo/adVideo',
						events: {
							// 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
							onVideoClosed: function(data) {
								console.log(data);
							}
						}
					})
				}
			}
		}
	}
</script>

```


```html
<!-- pages/adVideo/adVideo.nvue -->
<template>
	<view class="container">
		<video id="myVideo" :src="src" :autoplay="true" :controls="false" @ended="onfinish" @click="toLandVideo"
			@timeupdate="onTimeUpdate" class="video"></video>
		<view class="close-box">
			<text v-if="countdown>0" class="close">{{countdown}}s</text>
			<text v-if="showClose" class="close" @click="closeVideo">X</text>
		</view>
		<text class="ad-tip">广告</text>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				src: "", //视频地址
				showClose: false,
				countdown: '',
			}
		},
		onReady() {
			this.videoContext = uni.createVideoContext('myVideo')
		},
		onLoad() {
			this.isFinish = false
			this.isPalying = false
		},
		onShow() {
			if (!this.isFinish && this.videoContext) this.videoContext.play()
		},
		onBackPress() {
			return !this.isFinish
		},
		methods: {
			onfinish(e) {
				// console.log("onfinish:" + JSON.stringify(e));
				this.showClose = true
				this.isFinish = true
			},
			closeVideo() {
				const eventChannel = this.getOpenerEventChannel();
				eventChannel.emit('onVideoClosed', {
					data: ''
				});
				uni.navigateBack()
			},
			toLandVideo() {
				this.videoContext.pause()
				uni.navigateTo({
					url: "/pages/landVideo/landVideo"
				})
			},
			onTimeUpdate(e) {
				this.countdown = parseInt(e.detail.duration - e.detail.currentTime)
			}
		}
	}
</script>
<style>
	.container {
		flex: 1;
		position: relative;
	}
	.video {
		flex: 1;
	}
	.close-box {
		top: 10rpx;
		right: 50rpx;
		position: absolute;
		flex-direction: row;
	}
	.close {
		color: #808080;
		font-size: 50rpx;
		width: 100rpx;
		text-align: center;
	}
	.ad-tip {
		bottom: 20rpx;
		right: 50rpx;
		position: absolute;
		color: #666;
		font-size: 28rpx;
	}
</style>


```

```html
<!-- pages/landVideo/landVideo.vue -->
<template>
	<view>
		<web-view src="广告落地页url"></web-view>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		methods: {}
	}
</script>
```



提示：-5005 时，包含二级错误码，可在下面广告商错误码中找到具体原因


### **广告商详细错误码**
- App端聚合的穿山甲(iOS)：[错误码详情](https://ad.oceanengine.com/union/media/union/download/detail?id=16&docId=5de8d574b1afac00129330d5&osType=ios)
- App-side aggregated pangolins (iOS): [Error code details](https://ad.oceanengine.com/union/media/union/download/detail?id=16&docId=5de8d574b1afac00129330d5&osType=ios)
- App端聚合的穿山甲(Android)：[错误码详情](https://ad.oceanengine.com/union/media/union/download/detail?id=4&docId=5de8d9b925b16b00113af0ed&osType=android)
- App-side aggregated pangolins (Android): [Error code details](https://ad.oceanengine.com/union/media/union/download/detail?id=4&docId=5de8d9b925b16b00113af0ed&osType=android)
- App端聚合的广点通(iOS)：[错误码详情](https://developers.adnet.qq.com/doc/ios/union/union_debug#%E9%94%99%E8%AF%AF%E7%A0%81)
- App-side aggregated Guangdiantong (iOS): [Error code details](https://developers.adnet.qq.com/doc/ios/union/union_debug#%E9%94%99%E8%AF%AF %E7%A0%81)
- App端聚合的广点通(Android)：[错误码详情](https://developers.adnet.qq.com/doc/android/union/union_debug#sdk%20%E9%94%99%E8%AF%AF%E7%A0%81)
- Adnet (Android) aggregated on the App side: [Error Code Details](https://developers.adnet.qq.com/doc/android/union/union_debug#sdk%20%E9%94%99%E8% AF%AF%E7%A0%81)
- App端聚合的Sigmob(iOS)：[错误码详情](https://doc.sigmob.com/#/Sigmob%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/SDK%E9%9B%86%E6%88%90%E8%AF%B4%E6%98%8E/iOS/%E9%94%99%E8%AF%AF%E7%A0%81/)
- Sigmob (iOS) aggregated on the App side: [error code details](https://doc.sigmob.com/#/Sigmob%E4%BD%BF%E7%94%A8%E6%8C%87%E5% 8D%97/SDK%E9%9B%86%E6%88%90%E8%AF%B4%E6%98%8E/iOS/%E9%94%99%E8%AF%AF%E7%A0%81 /)
- App端聚合的Sigmob(Android)：[错误码详情](https://doc.sigmob.com/#/Sigmob%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/SDK%E9%9B%86%E6%88%90%E8%AF%B4%E6%98%8E/Android/%E9%94%99%E8%AF%AF%E7%A0%81/)
- Sigmob (Android) aggregated on the App side: [Error code details](https://doc.sigmob.com/#/Sigmob%E4%BD%BF%E7%94%A8%E6%8C%87%E5% 8D%97/SDK%E9%9B%86%E6%88%90%E8%AF%B4%E6%98%8E/Android/%E9%94%99%E8%AF%AF%E7%A0%81 /)
- App端聚合的快手错误码
- Kuaishou error codes aggregated on the App side

|code|message|
|:-:|:-:|
|40001|没有网络|
|40001|No Network|
|40002|数据解析失败|
|40002|Data parsing failed|
|40003|广告数据为空|
|40003|The ad data is empty|
|40004|缓存视频资源失|
|40004|The cached video resource is missing|
|100001|参数有误|
|100001|Incorrect parameter|
|100002|服务器错误|
|100002|Server Error|
|100003|不允许的操作|
|100003|Operation not allowed|
|100004|服务不可用|
|100004|Service unavailable|
|310001|appId未注册|
|310001|appId not registered|
|310002|appId无效|
|310002|Invalid appId|
|310003|appId已封禁|
|310003|appId has been banned|
|310004|packageName与注册的packageName不一致|
|310004|packageName is inconsistent with the registered packageName|
|310005|操作系统与注册的不一致|
|310005|The operating system is inconsistent with the registration|
|320002|appId对应账号无效|
|320002|The account corresponding to the appId is invalid|
|320003|appId对应账号已封禁|
|320003|The account corresponding to the appId has been banned|
|330001|posId未注册|
|330001|posId not registered|
|330002|posId无效|
|330002|posId is invalid|
|330003|posId已封禁|
|330003|posId has been banned|
|330004|posid与注册的appId信息不一致|
|330004|posid is inconsistent with the registered appId information|
