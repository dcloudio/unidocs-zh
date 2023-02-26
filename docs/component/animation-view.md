#### animation-view
Lottie动画组件，动画资源参考[Lottie官方链接](https://airbnb.design/lottie/)。
Lottie animation components, animation resource reference [Lottie official link](https://airbnb.design/lottie/).

> animation-view组件是[uts组件](https://uniapp.dcloud.net.cn/plugin/uts-component.html)，需下载插件：[animation-view](https://ext.dcloud.net.cn/plugin?name=uni-animation-view)，仅App端nvue页面支持  
> The animation-view component is [uts component](https://uniapp.dcloud.net.cn/plugin/uts-component.html), you need to download the plugin: [animation-view](https://ext.dcloud. net.cn/plugin?name=uni-animation-view), only App side nvue page supports

> [uts组件](https://uniapp.dcloud.net.cn/plugin/uts-component.html)需 HBuilderX 3.7.0+  
> [uts component](https://uniapp.dcloud.net.cn/plugin/uts-component.html) requires HBuilderX 3.7.0+

> App端真机运行需要打[自定义基座](https://uniapp.dcloud.net.cn/tutorial/run/run-app.html#customplayground)  
> [Custom Playground](https://uniapp.dcloud.net.cn/tutorial/run/run-app.html#customplayground) is required to run the App on the real machine


**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|Byte Beat MiniApp, Feishu MiniApp|QQ MiniApp| QuickApp|360 MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|x|x|√|x|x|x|x|x|x|


- animation-view 在App端集成的是lottie官方原生sdk，仅nvue页面支持，vue页面不支持。vue页面可使用webview、或renderjs集成lottie的h5版、或使用下方的微信小程序方案。
- App端实现使用了Lottie官方SDK，开源项目：[Lottie for Android](https://github.com/airbnb/lottie-android)，[Lottie for iOS](https://github.com/airbnb/lottie-ios)  
	* App-Android平台要求Android5（API Leavel 21）及以上系统  
	* App-iOS平台要求iOS11及以上版本系统  
- 微信小程序没有内置该组件，需使用开源项目[https://github.com/wechat-miniprogram/lottie-miniprogram](https://github.com/wechat-miniprogram/lottie-miniprogram)
- 百度小程序已经由百度官方内置了animation-view，底层基于lottie sdk实现。
- 微信、百度之外的其他小程序，可考虑webview加载lottie的h5版，或评估上面的lottie-miniprogram是否兼容。


**属性说明**
**Attribute Description**

|属性名|类型|默认值|说明|
|Property Name|Type|Default Value|Description|
|:-|:-|:-|:-|
| path			| String		|		| 动画资源地址，支持本地路径和网络路径	|
| path | String | | animation resource address, support local path and network path |
| loop			| Boolean		| false	| 动画是否循环播放 					|
| loop | Boolean | false | Whether the animation is played in a loop |
| autoplay		| Boolean		| true	| 动画是否自动播放					|
| autoplay | Boolean | true | Whether the animation is played automatically |
| action		| String		| play	| 动画操作，可取值 play、pause、stop	|
| action | String | play | animation operation, possible values are play, pause, stop |
| hidden		| Boolean		| true	| 是否隐藏动画						|
| hidden | Boolean | true | whether to hide the animation |
| @bindended	| EventHandle	|		| 当播放到末尾时触发 ended 事件（自然播放结束会触发回调，循环播放结束及手动停止动画不会触发）	|
| @bindended | EventHandle | | The ended event is triggered when the playback reaches the end (the callback will be triggered when the natural playback ends, and the end of the loop playback and manual stop animation will not be triggered) |

**注意**
* 百度小程序平台path属性目前不支持远程地址，仅支持本地绝对路径，[详情](https://smartprogram.baidu.com/docs/develop/component/animation-view-Lottie/)
* The path attribute of the Baidu MiniApp platform currently does not support remote addresses, only local absolute paths, [Details](https://smartprogram.baidu.com/docs/develop/component/animation-view-Lottie/)

**代码示例**
**code example**

```html
<template>
	<view>
		<animation-view class="animation" :path="path" :loop="loop" :autoplay="autoplay" :action="action"
			:hidden="hidden" @bindended="lottieEnd">
		</animation-view>
		<button @click="playLottie" type="primary">{{status}}lottie动画</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				path: '/uni_modules/uni-animation-view/static/lottie.json',
				loop: false,
				autoplay: true,
				action: 'stop',
				hidden: false,
				status: '播放'
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
