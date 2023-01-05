
### 短视频内容联盟广告
### Short Video Content Network Advertising

简介
Introduction

⼀个视频内容频道，支持上下滑动切换视频内容
A video content channel that supports sliding up and down to switch video content

![](https://web-assets.dcloud.net.cn/unidoc/zh/ad-content-page.png)


内容联盟广告是一个原生全屏组件，大小不可控制
The content network ad is a native fullscreen component with uncontrollable size

如果需要嵌入到页面控制大小请使用 [短视频内容联盟组件\<ad-content-page /\>](https://uniapp.dcloud.net.cn/component/ad-content-page)
If you need to embed into the page to control the size, please use [Short Video Content Alliance Component \<ad-content-page /\>](https://uniapp.dcloud.net.cn/component/ad-content-page)

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√（3.1.5+）|x|x|x|x|x|x|x|x|


**开通配置广告**
**Activate configuration advertisement**

[开通广告步骤详情](https://uniapp.dcloud.net.cn/uni-ad.html#start)
[Details of the steps to activate advertising](https://uniapp.dcloud.net.cn/uni-ad.html#start)


### 语法
### grammar

`plus.ad.showContentPage(options, success, fail)`

### 参数说明
### Parameter Description

`options` 为 object 类型，属性如下：
`options` is of type object with the following attributes:

|属性名		|类型		|必填	|描述			|
|Attribute Name |Type |Required |Description |
|:-:|:-:|:-:|:-:|
|adpid	  |string	|	是|广告位 id |
|adpid |string | is |adslot id |
|background	|string	|	否|背景颜色，不支持透明度 |
|background |string | no |background color, transparency not supported |

`success` 为 function 类型，加载成功后的回调
`success` is function type, the callback after successful loading

`fail` 为 function 类型，加载失败后的回调
`fail` is function type, the callback after the loading fails

HBuilder 基座的测试广告位 `adpid` 为 `1111111112`
The test ad slot `adpid` of the HBuilder base is `1111111112`


示例代码
sample code

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
			// The HBuilderX standard base real machine runs the test content alliance advertising space identifier (adpid): 1111111112
			// adpid: 1111111112 仅用于测试，发布时需要改为广告后台（https://uniad.dcloud.net.cn/）申请的 adpid
			// adpid: 1111111112 is only used for testing, it needs to be changed to the adpid applied for by the advertising background (https://uniad.dcloud.net.cn/) when publishing
			// 广告后台申请的广告位(adpid)需要自定义基座/云打包/本地打包后生效
			// The advertising space (adpid) applied for by the advertising background needs to be customized after the base/cloud packaging/local packaging takes effect

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
