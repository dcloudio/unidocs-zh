### 监听权限申请

uni-app 提供了`uni.createRequestPermissionListener()`监听应用权限的申请，开发者可以在弹出系统权限授权框的同时，同步告知权限申请的目的。

解决华为应用市场审核时要求：`APP在调用终端权限时，应同步告知用户申请该权限的目的。`

### uni.createRequestPermissionListener()

创建一个监听权限申请的 `RequestPermissionListener` 对象。

**平台差异说明**

HBuilderX (4.0+) android 平台支持

**RequestPermissionListener 对象的方法列表**

|方法		|参数		|说明	|
|:-			|:-			|:-		|
|onRequest	|callback	|监听申请系统权限		|
|onConfirm	|callback	|监听弹出系统权限授权框		|
|onComplete	|callback	|监听权限申请完成		|
|stop		|			|取消所有监听		|

**示例**

```javascript
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
				permissionListener: null
			}
		},
		onReady() {
			this.watchPermission()
		},
		onUnload() {
			if (this.permissionListener != null) {
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
**Tips**

+ 如果权限已经申请并且允许之后，`onConfirm`不会触发。
+ 如果同时申请多个权限时，`onComplete`可能会触发多次。
