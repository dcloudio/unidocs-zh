#### animation-view
Lottie动画组件，动画资源参考[Lottie官方接](https://airbnb.design/lottie/)。

> animation-view组件是[uts组件](https://uniapp.dcloud.net.cn/plugin/uts-component.html)，需下载插件：[animation-view](https://ext.dcloud.net.cn/?cat1=8&cat2=81)，仅App端nvue页面支持  

> [uts组件](https://uniapp.dcloud.net.cn/plugin/uts-component.html)需 HBuilderX 3.7.0+  

> App端真机运行需要打[自定义基座](https://uniapp.dcloud.net.cn/tutorial/run/run-app.html#customplayground)  


**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|x|x|x|x|x|x|x|x|x|



**属性说明**

|属性名|类型|默认值|说明|
|:-|:-|:-|:-|
| path			| String		|		| 动画资源地址，支持本地路径和网络路径	|
| loop			| Boolean		| false	| 动画是否循环播放 					|
| autoplay		| Boolean		| true	| 动画是否自动播放					|
| action		| String		| play	| 动画操作，可取值 play、pause、stop	|
| hidden		| Boolean		| true	| 是否隐藏动画						|
| @bindended	| EventHandle	|		| 当播放到末尾时触发 ended 事件（自然播放结束会触发回调，循环播放结束及手动停止动画不会触发）	|


**注意**
* animation-view 仅App端nvue页面支持  
* App端实现使用了Lottie三方SDK，开源项目：[Lottie for Android](https://github.com/airbnb/lottie-android)，[Lottie for iOS](https://github.com/airbnb/lottie-ios)  
* App-Android平台要求Android5（API Leavel 21）及以上系统  
* App-iOS平台要求iOS11及以上版本系统  


**代码示例**

```html
<template>
	<div>
		<animation-view class="animation" :path="path" :loop="loop" :autoplay="autoplay" :action="action"
			:hidden="hidden" @bindended="lottieEnd">
		</animation-view>
		<button @click="playLottie" type="primary">{{status}}lottie动画</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				path: 'https://b.bdstatic.com/miniapp/images/lottie_example_one.json',
				loop: false,
				autoplay: false,
				action: 'play',
				hidden: false,
				status: '暂停'
			}
		},
		methods: {
			playLottie() {
				this.action = ('play' !== this.action) ? 'play' : 'pause';
				this.status = ('pause' === this.action) ? '播放' : '暂停';
			},
			lottieEnd() {
				this.status = '播放';
				this.action = 'stop';
				console.log('动画播放结束');
			}
		}
	}
</script>

<style>
	.animation {
		width: 750rpx;
		height: 300rpx;
		background-color: #FF0000;
		margin-bottom: 20px;
	}
</style>
```
