## 短视频内容联盟组件

### 简介

⼀个视频内容频道，支持上下滑动切换视频内容

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/ad-content-page.png)

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|✓|x|x|x|x|x|x|x|x|x|x|


**开通配置广告**

[开通广告步骤详情](https://uniapp.dcloud.net.cn/uni-ad.html#start)

注意：打包时必须选择快手内容联盟。

HBuilder 基座的测试广告位 `adpid` 为 `1111111112`

### 组件

**`仅nvue支持` (iOS-hx3.4.2支持、Android-hx3.1.17支持)**

**属性说明**

|属性名|类型|默认值|说明|平台差异|
|:-|:-|:-|:-|:-|
|adpid|String||uni-ad App广告位id，在[uni-ad官网](https://uniad.dcloud.net.cn/)申请广告位|App|
|@load|EventHandle||广告加载成功的回调||
|@error|EventHandle||广告加载失败的回调||
|@start|EventHandle|开始播放时触发|3.4.3+|
|@pause|EventHandle|暂停时触发|3.4.3+|
|@resume|EventHandle|恢复播放时触发|3.4.3+|
|@complete|EventHandle|播放完成时触发|3.4.3+|


**@start @pause @resume @complete回调参数说明**

|字段名|说明|
|:-|:-|
|id|唯一标识|
|type|0未知类型  1 普通信息流  2 sdk内部广告 3第三方广告 4 直播|
|duration|视频总时长|


**示例：**

```html
<template>
  <view class="content">
    <ad-content-page class="ad-content-page" ref="adContentPage" adpid="1111111112" @load="onadload" @error="onaderror"></ad-content-page>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'ad-content-page'
    }
  },
  onShow() {
    this.$nextTick(() => {
      // 需要在页面显示时调用广告组件的 show 方法
      this.$refs.adContentPage.show();
    })
  },
  onHide() {
    // 需要在页面隐藏时调用广告组件的 hide 方法停止广告内容的声音
    this.$refs.adContentPage.hide();
  },
  methods: {
    onadload(e) {
      console.log("onadload",e);
    },
    onaderror(e) {
      console.log("onaderror",e);
    }
  }
}
</script>

<style>
.content {
  flex: 1
}

.ad-content-page {
  flex: 1
}
</style>
```

**注意**

- 需要在页面隐藏时调用组件的 `hide` 方法以停止广告内容的声音
- 3.4.17+ iOS平台 因广告商限制，调用 `show` 或 `hide` 方法需要申请通过后有效，详情咨询 `uniad@dcloud.io`

### API

通过API调用后将打开一个原生全屏组件，大小不可控制


**语法**

`plus.ad.showContentPage(options, success, fail)`

**参数说明**

`options` 为 object 类型，属性如下：

|属性名		|类型		|必填	|描述			|
|:-:|:-:|:-:|:-:|
|adpid	  |string	|	是|广告位 id |
|background	|string	|	否|背景颜色，不支持透明度 |

`success` 为 function 类型，加载成功后的回调

`fail` 为 function 类型，加载失败后的回调

**示例：**

```html
<template>
	<view>
		<button :loading="loading" :disabled="loading" type="primary" class="btn" @click="showAd">显示广告</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: false
			}
		},
		onLoad() {
			// HBuilderX 标准基座真机运行测试内容联盟广告位标识（adpid）为：1111111112
			// adpid: 1111111112 仅用于测试，发布时需要改为广告后台（https://uniad.dcloud.net.cn/）申请的 adpid
			// 广告后台申请的广告位(adpid)需要自定义基座/云打包/本地打包后生效

			this.adOptions = {
				adpid: 1111111112
			}
		},
		methods: {
			showAd() {
				if (this.loading == true) {
					return;
				}

				this.loading = true;
				plus.ad.showContentPage(this.adOptions, (res) => {
					this.loading = false;
				}, (err) => {
					this.loading = false;
					console.log(err);
				});
			}
		}
	}
</script>
```


**错误码**

[错误码相关问题排查](https://uniapp.dcloud.net.cn/uni-ad/ad-error-code.html)

## 短剧

### 穿山甲短剧

由于uni-ad暂未支持穿山甲短剧，接入短剧功能需要按照[uts插件开发文档](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-plugin.html)，开发对应的短剧插件。

#### 开发前准备

- 应用开通uni-ad并且成功托管穿山甲账号。
- 升级HBuilderX到4.34版。

#### 开发时注意事项

1. 短剧插件不能包含穿山甲广告相关API，包括穿山甲广告SDK的初始化API。
2. config.json中不能包含穿山甲广告SDK相关依赖，否则会导致打包失败。
3. 打包时需要勾选`穿山甲GroMore`模块。
4. 插件中不能包含穿山甲广告SDK，否则会因为SDK冲突导致打包失败。
5. 为确保穿山甲短剧的初始化成功，需要在初始化穿山甲短剧之前调用任意一个广告API，触发广告回调之后，再去初始化穿山甲短剧。参考示例：
	```vue
	var interstitialAd = this.interstitialAd = uni.createInterstitialAd({adpid: '自己的真实广告位'});
	interstitialAd.onLoad(() => {
		// 初始化短剧
	});
	interstitialAd.onError((err) => {
		// 初始化短剧
	});
	interstitialAd.load()
	```
6. 由于目前接入穿山甲短剧需要添加穿山甲的私有仓库地址，HBuilderX暂不支持配置。建议开发者先在android studio中将短剧功能封装成一个库并提供一些对外API让uts插件调用。

如果插件开发中遇到问题，可以去[uni-ad广告群](https://im.dcloud.net.cn/#/?joinGroup=65d85fc09847e92db03ff81a)咨询。
