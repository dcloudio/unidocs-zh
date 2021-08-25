### 生物认证说明

生物认证，又称活体检测。它包含指纹识别、人脸识别这两部分。即通过人体身体特征来进行身份认证识别。

### uni.startSoterAuthentication(OBJECT)

开始 SOTER 生物认证。

**平台差异说明**

|App				|H5|
|:-				|:-|
|√（2.3.8+）	|x	|

App端在2.3.8版以前，可在插件市场获取[指纹相关插件](https://ext.dcloud.net.cn/plugin?id=358)。

**OBJECT参数说明**

|属性					|类型		|默认值	|必填	|说明					| 平台差异说明	|
|:-					|:-		|:-		|:-	|:-				|:-					|
|requestAuthModes	|Array	|			|是	|请求使用的可接受的生物认证方式		|APP		|
|authContent		|String	|''		|否	|验证描述，即识别过程中显示在界面上的对话框提示内容	|APP|
|success				|Function|			|否	|接口调用成功的回调函数	|						|
|fail					|Function|			|否	|接口调用失败的回调函数	|						|
|complete			|Function|			|否	|接口调用结束的回调函数（调用成功、失败都会执行）	|						|


**OBJECT.requestAuthModes说明**

|值					|说明			|
|:-					|:-				|
|fingerPrint|指纹识别	|
|facial			|人脸识别	|

注意：
- App端指纹识别，Android平台从Android6.0起才提供了官方API，uni-app也是从Android6起支持。对于更低版本的安卓，某些rom私有的指纹识别API，uni-app并不支持。
- App端人脸识别，iOS平台使用自带的faceID，而Android平台需要依赖三方SDK方可实现，可在插件市场搜索[人脸识别](https://ext.dcloud.net.cn/search?q=%E4%BA%BA%E8%84%B8%E8%AF%86%E5%88%AB)插件


**OBJECT.success返回值说明**

|属性						|类型		|说明			|平台差异说明	|
|:-						|:-		|:-			|:-				|
|authMode				|string	|生物认证方式|APP				|
|errCode					|number	|错误码		|					|
|errMsg					|string	|错误信息		|					|


**错误码说明**

|错误码	|错误码说明																				|
|:-			|:-																								|
|0			|识别成功																					|
|90001	|本设备不支持生物认证														|
|90002	|用户未授权使用该生物认证接口											|
|90003	|请求使用的生物认证方式不支持											|
|90004	|未传入challenge或challenge长度过长（最长512字符）|
|90005	|auth_content长度超过限制（最长42个字符）					|
|90007	|内部错误																					|
|90008	|用户取消授权																			|
|90009	|识别失败																					|
|90010	|重试次数过多被冻结																|
|90011	|用户未录入所选识别方式														|

### uni.checkIsSupportSoterAuthentication(OBJECT)

获取本机支持的 SOTER 生物认证方式

**OBJECT参数说明**

|属性			|类型			|默认值	|必填	|说明																							|
|:-				|:-				|:-			|:-		|:-																								|
|success	|function	|				|否		|接口调用成功的回调函数														|
|fail			|function	|				|否		|接口调用失败的回调函数														|
|complete	|function	|				|否		|接口调用结束的回调函数（调用成功、失败都会执行）	|

**OBJECT.success返回值说明**

|属性				|类型	|说明																		|
|:-					|:-		|:-																			|
|supportMode|Array|该设备支持的可被SOTER识别的生物识别方式|

### uni.checkIsSoterEnrolledInDevice(OBJECT)

获取设备内是否录入如指纹等生物信息的接口

**OBJECT参数说明**

|属性					|类型			|默认值	|必填	|说明																							|
|:-:					|:-:			|:-:		|:-:	|:-:																							|
|checkAuthMode|string		|				|是		|认证方式																					|
|success			|function	|				|否		|接口调用成功的回调函数														|
|fail					|function	|				|否		|接口调用失败的回调函数														|
|complete			|function	|				|否		|接口调用结束的回调函数（调用成功、失败都会执行）	|

**OBJECT.checkAuthMode合法值**

|值					|说明			|
|:-					|:-				|
|fingerPrint|指纹识别	|
|facial			|人脸识别	|

**OBJECT.success返回值说明**

|属性				|类型		|说明						|
|:-					|:-			|:-							|
|isEnrolled	|boolean|是否已录入信息	|
|errMsg			|string	|错误信息				|

#### 代码示例

```html

<template>
	<view class="content">
		<button type="primary" @click="checkIsSupportSoterAuthentication">检查支持的认证方式</button>
		<button type="primary" @click="checkIsSoterEnrolledInDeviceFingerPrint">检查是否录入指纹</button>
		<button type="primary" @click="checkIsSoterEnrolledInDeviceFaceID">检查是否录入FaceID</button>
		<button type="primary" @click="startSoterAuthenticationFingerPrint">开始指纹认证</button>
		<button type="primary" @click="startSoterAuthenticationFaceID">开始FaceID认证</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onLoad() {

		},
		methods: {
			checkIsSupportSoterAuthentication() {
				uni.checkIsSupportSoterAuthentication({
					success(res) {
						console.log(res);
					},
					fail(err) {
						console.log(err);
					},
					complete(res) {
						console.log(res);
					}
				})
			},
			checkIsSoterEnrolledInDeviceFingerPrint() {
				uni.checkIsSoterEnrolledInDevice({
					checkAuthMode: 'fingerPrint',
					success(res) {
						console.log(res);
					},
					fail(err) {
						console.log(err);
					},
					complete(res) {
						console.log(res);
					}
				})
			},
			checkIsSoterEnrolledInDeviceFaceID() {
				uni.checkIsSoterEnrolledInDevice({
					checkAuthMode: 'facial',
					success(res) {
						console.log(res);
					},
					fail(err) {
						console.log(err);
					},
					complete(res) {
						console.log(res);
					}
				})
			},
			startSoterAuthenticationFingerPrint() {
				uni.startSoterAuthentication({
					requestAuthModes: ['fingerPrint'],
					challenge: '123456',
					authContent: '请用指纹解锁',
					success(res) {
						console.log(res);
					},
					fail(err) {
						console.log(err);
					},
					complete(res) {
						console.log(res);
					}
				})
			},
			startSoterAuthenticationFaceID() {
				uni.startSoterAuthentication({
					requestAuthModes: ['facial'],
					challenge: '123456',
					authContent: '请用FaceID解锁',
					success(res) {
						console.log(res);
					},
					fail(err) {
						console.log(err);
					},
					complete(res) {
						console.log(res);
					}
				})
			}
		}
	}
</script>

<style>
	button {
		width: 200px;
		margin: 20px auto;
	}
</style>


```

#### 注意事项

- App端自2.3.8版本起开始支持生物认证，更低版本或想使用指纹功能，可在插件市场获取[插件](https://ext.dcloud.net.cn/plugin?id=358)
- App端的人脸识别，仅支持iOS端的faceID。Android端需要依赖三方SDK方可实现，可在插件市场搜索[人脸识别](https://ext.dcloud.net.cn/search?q=%E4%BA%BA%E8%84%B8%E8%AF%86%E5%88%AB)插件
- App端打包时，注意需要在manifest的模块中选择指纹和faceID，否则打包后无法运行相关功能。
- hello uni-app已经集成相关示例，最新版HBuilderX新建新版hello uni-app示例项目真机运行可见，在API-设备-生物认证里。
