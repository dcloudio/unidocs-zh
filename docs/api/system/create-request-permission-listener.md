## 监听权限申请

app-android平台，可使用本API监听应用权限申请确认框的弹出和关闭。不管是哪处的业务代码在申请权限，当弹出和关闭权限申请确认框时均会触发本监听事件。

华为应用市场审核时要求：`APP在调用终端权限时，应同步告知用户申请该权限的目的`。此时即可使用本API，在app.uvue里全局监听。

创建监听对象后，返回RequestPermissionListener，然后调起其的onConfirm和onComplete。

- 当权限申请的确认框在手机端弹出时，会触发onConfirm，回调中会以数组方式提供权限名称列表。
- 当权限申请的确认框被用户关闭后，会触发onComplete

## uni.createRequestPermissionListener()

创建一个监听权限申请的 `RequestPermissionListener` 对象。

**平台差异说明**

HBuilderX (4.0+) android 平台支持

<!-- UNIAPPAPIJSON.createRequestPermissionListener.compatibility -->

**注意：HBuilderX 4.01 Vue2项目需要使用自定义基座测试监听权限申请的功能，标准基座暂不支持测试。**

**RequestPermissionListener 对象的方法列表**

|方法		|参数		|说明	|
|:-			|:-			|:-		|
|onRequest	|callback	|监听申请系统权限		|
|onConfirm	|callback	|监听弹出系统权限授权框		|
|onComplete	|callback	|监听权限申请完成		|
|stop		|			|取消所有监听		|

**示例**

```vue
<template>
	<view>
		<view class="permission-alert" id="permission-alert" :style="{'transform':isPermissionAlertShow ? 'translateY(0)':'translateY(-250rpx)'}">
			<text style="font-size: 20px;margin-bottom: 10px;margin-top: 5px; display: block;">手机状态权限申请说明：</text>
			<text style="color: darkgray;">uni-app正在申请手机状态权限，允许或拒绝均不会获取任何隐私信息。</text>
		</view>
		<button @click="requestPermission">点击申请日历权限</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isPermissionAlertShow: false,
				//permissionListener: null
			}
		},
		onReady() {
			this.watchPermission()
		},
		onUnload() {
			if (this.permissionListener) {
				this.permissionListener.stop()
			}
		},
		methods: {
			watchPermission() {
				this.permissionListener = uni.createRequestPermissionListener();
				this.permissionListener.onConfirm((e) => {
					this.isPermissionAlertShow = true
				});
				this.permissionListener.onComplete((e) => {
					this.isPermissionAlertShow = false
				});
			},
			requestPermission() {
				plus.android.requestPermissions(["android.permission.READ_CALENDAR"], (e) => {

				}, (e) => {

				})
			}
		}
	}
</script>

<style>
	.permission-alert {
		width: 650rpx;
		height: 200rpx;
		margin: 20rpx 40rpx;
		position: absolute;
		top: 0px;
		z-index: 3;
		border-radius: 5px;
		transition-property: transform;
		transition-duration: 200ms;
		background-color: white;
		padding: 10rpx;
	}
</style>

```

## 全局监听权限申请并弹窗提示用户权限申请原因
iOS的权限申请原因，是在manifest或info.plist里配置的。

Android没有在系统层面提供这套机制，但一些应用商店（如华为），又要求申请权限时弹框说明原因。

虽然uni.createRequestPermissionListener可以监听权限申请，但前端弹框的层级较低，无法正常显示权限申请原因。

所以DCloud提供了一个插件，可以在原生层面给出文字提示：
- 全局监听权限申请可参考插件[uni-registerRequestPermissionTips](https://ext.dcloud.net.cn/plugin?name=uni-registerRequestPermissionTips)。

## Tips

- 如果权限已经申请并且允许之后，`onConfirm`不会触发。
- 如果同时申请多个权限时，`onComplete`可能会触发多次。
- 权限列表参考：[https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android.html#permissions](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android.html#permissions)

