### 生物认证说明
### Biometric authentication instructions

生物认证，包含手机的指纹识别、faceid两部分。即通过人体身体特征来进行身份认证识别。

如需要专业的活体检测、人脸识别、金融级实人认证，需另见文档[uni实人认证](/uniCloud/frv/intro.md)

### uni.startSoterAuthentication(OBJECT)

开始 SOTER 生物认证。
Start the SOTER biometric authentication.

**平台差异说明**
**Platform difference description**

|App|H5	|微信小程序	|支付宝小程序	|百度小程序	|抖音小程序、飞书小程序	|QQ小程序	|
|:-	|:-	|:-					|:-						|:-					|:-					|:-				|
|√（2.3.8+）	|x	|√					|x						|x					|x					|x				|


**OBJECT参数说明**
**OBJECT parameter description**

|属性							|类型			|默认值	|必填	|说明																																																																																																		| 平台差异说明	|
|Properties |Type |Default |Required |Description | Platform Difference Description |
|:-								|:-				|:-			|:-		|:-																																																																																																			|:-							|
|requestAuthModes	|Array		|				|是		|请求使用的可接受的生物认证方式																																																																																					|APP、微信小程序|
|requestAuthModes |Array | |Yes |Acceptable biometric authentication methods used by the request |APP, WeChat applet|
|challenge				|String		|				|是		|挑战因子。挑战因子为调用者为此次生物鉴权准备的用于签名的字符串关键识别信息，将作为 resultJSON 的一部分，供调用者识别本次请求。例如：如果场景为请求用户对某订单进行授权确认，则可以将订单号填入此参数。	|微信小程序			|
|challenge |String | |Yes |challenge factor. The challenge factor is the string key identification information for signature prepared by the caller for this biometric authentication, which will be part of the resultJSON for the caller to identify this request. For example, if the scenario is to request the user to authorize and confirm an order, the order number can be filled in this parameter. |WeChat Mini Program |
|authContent			|String		|''			|否		|验证描述，即识别过程中显示在界面上的对话框提示内容																																																																											|APP、微信小程序|
|authContent |String |'' |No |Authentication description, that is, the dialog prompt content displayed on the interface during the recognition process |APP, WeChat applet|
|success					|Function	|				|否		|接口调用成功的回调函数																																																																																									|								|
|success |Function | |No |Callback function for successful interface call | |
|fail							|Function	|				|否		|接口调用失败的回调函数																																																																																									|								|
|fail |Function | |No |Callback function for interface call failure | |
|complete					|Function	|				|否		|接口调用结束的回调函数（调用成功、失败都会执行）																																																																												|								|
|complete |Function | |No |The callback function for the end of the interface call (the call will be executed if the call succeeds or fails) | |

**OBJECT.requestAuthModes说明**
**OBJECT.requestAuthModes description**

|值					|说明			|
| Value| Instruction|
|:-					|:-				|
|fingerPrint|指纹识别	|
| fingerPrint| Fingerprint identification|
|facial			|人脸识别	|
| facial| Face identification|

注意：
Notice:
- App端指纹识别，Android平台从Android6.0起才提供了官方API，uni-app也是从Android6起支持。对于更低版本的安卓，某些rom私有的指纹识别API，uni-app并不支持。
- App端人脸识别，iOS平台使用自带的faceID。Android平台需另行使用uni实人认证，另见[https://uniapp.dcloud.net.cn/uniCloud/frv/intro.html](/uniCloud/frv/intro.md)


**OBJECT.success返回值说明**
**Description of return value of OBJECT.success**

|属性								|类型		|说明																																																																						|平台差异说明		|
|Properties |Type |Description |Platform Difference Description |
|:-									|:-			|:-																																																																							|:-							|
|authMode						|string	|生物认证方式																																																																		|APP、微信小程序|
|authMode |string |Biometric authentication method |APP, WeChat applet|
|resultJSON					|string	|在设备安全区域（TEE）内获得的本机安全信息（如TEE名称版本号等以及防重放参数）以及本次认证信息（仅Android支持，本次认证的指纹ID）。具体说明见下文							|微信小程序			|
|resultJSON |string |The local security information (such as TEE name, version number, etc., and anti-replay parameters) obtained in the device security area (TEE) and this authentication information (only supported by Android, the fingerprint ID of this authentication). See below for specific instructions | WeChat Mini Program |
|resultJSONSignature|string	|用SOTER安全密钥对 resultJSON 的签名(SHA256 with RSA/PSS, saltlen=20)																																						|微信小程序			|
|resultJSONSignature|string |Sign resultJSON with SOTER security key (SHA256 with RSA/PSS, saltlen=20) |WeChat applet |
|errCode						|number	|错误码																																																																					|								|
|errCode |number |Error code | |
|errMsg							|string	|错误信息																																																																				|								|
|errMsg |string |Error message | |

**resultJSON说明**
**resultJSON description**

此数据为设备TEE中，将传入的challenge和TEE内其他安全信息组成的数据进行组装而来的JSON，对下述字段的解释如下表。例子如下：
This data is JSON assembled from the incoming challenge and other security information in the TEE in the device TEE. The following table explains the following fields. Examples are as follows:

|字段名	|说明																																											|
|Field Name |Description |
|:-			|:-																																												|
|raw		|调用者传入的challenge																																		|
|raw |challenge passed in by the caller |
|fid		|（仅Android支持）本次生物识别认证的生物信息编号（如指纹识别则是指纹信息在本设备内部编号）|
|fid |(Only supported by Android) The biometric information number of this biometric authentication (for fingerprint recognition, the fingerprint information is the internal number of the device)|
|counter|防重放特征参数																																						|
|counter|Anti-replay feature parameter|
|tee_n	|TEE名称（如高通或者trustonic等）																													|
|tee_n |TEE name (such as Qualcomm or trustonic, etc.) |
|tee_v	|TEE版本号																																								|
|tee_v |TEE version number |
|fp_n		|指纹以及相关逻辑模块提供商（如FPC等）																										|
|fp_n |Fingerprint and related logic module providers (such as FPC, etc.) |
|fp_v		|指纹以及相关模块版本号																																		|
|fp_v |fingerprint and related module version numbers |
|cpu_id	|机器唯一识别ID																																						|
|cpu_id |Machine Unique ID |
|uid		|概念同Android系统定义uid，即应用程序编号																									|
|uid |The concept is the same as the Android system definition uid, that is, the application number |

**错误码说明**
**Error code description**

|错误码	|错误码说明																				|
| Error code| Error code description|
|:-			|:-																								|
|0			|识别成功																					|
| 0| Identification successful|
|90001	|本设备不支持生物认证														|
| 90001| This device does not support biometric authentication.|
|90002	|用户未授权使用该生物认证接口											|
| 90002| The user is not authorized to use the biometric authentication interface|
|90003	|请求使用的生物认证方式不支持											|
| 90003| The requested biometric authentication method is not supported|
|90004	|未传入challenge或challenge长度过长（最长512字符）|
| 90004| No challenge was passed in or the length of the challenge is too long (the maximum length is 512 characters)|
|90005	|auth_content长度超过限制（最长42个字符）					|
| 90005| auth_content length exceeds the limit (the maximum is 42 characters)|
|90007	|内部错误																					|
| 90007| Internal error|
|90008	|用户取消授权																			|
| 90008| User authorization cancellation|
|90009	|识别失败																					|
| 90009| Identification failed|
|90010	|重试次数过多被冻结																|
| 90010| Blocked due to too many retries|
|90011	|用户未录入所选识别方式														|
| 90011| User has not entered the selected identification method.|

### uni.checkIsSupportSoterAuthentication(OBJECT)

获取本机支持的 SOTER 生物认证方式
Obtain the supported SOTER biometric authentication mode

**OBJECT参数说明**
**OBJECT parameter description**

|属性			|类型			|默认值	|必填	|说明																							|
| Attribute| Type| Defaults| Required| Instruction|
|:-				|:-				|:-			|:-		|:-																								|
|success	|function	|				|否		|接口调用成功的回调函数														|
| success| function| | No| Callback function for successful interface calling|
|fail			|function	|				|否		|接口调用失败的回调函数														|
| fail| function| | No| Callback function for failed interface calling|
|complete	|function	|				|否		|接口调用结束的回调函数（调用成功、失败都会执行）	|
| complete| function| | No| Callback function for closed interface calling (available both for successful and failed calling)|

**OBJECT.success返回值说明**
**Description of return value of OBJECT.success**

|属性				|类型	|说明																		|
| Attribute| Type| Instruction|
|:-					|:-		|:-																			|
|supportMode|Array|该设备支持的可被SOTER识别的生物识别方式|
| supportMode| Array| Biometrics supported by this device that can be recognized by SOTER|

### uni.checkIsSoterEnrolledInDevice(OBJECT)

获取设备内是否录入如指纹等生物信息的接口
Interface for requesting whether biological information such as fingerprints are entered in the device

**OBJECT参数说明**
**OBJECT parameter description**

|属性					|类型			|默认值	|必填	|说明																							|
| Attribute| Type| Defaults| Required| Instruction|
|:-:					|:-:			|:-:		|:-:	|:-:																							|
|checkAuthMode|string		|				|是		|认证方式																					|
| checkAuthMode| string| | Yes| Verification method|
|success			|function	|				|否		|接口调用成功的回调函数														|
| success| function| | No| Callback function for successful interface calling|
|fail					|function	|				|否		|接口调用失败的回调函数														|
| fail| function| | No| Callback function for failed interface calling|
|complete			|function	|				|否		|接口调用结束的回调函数（调用成功、失败都会执行）	|
| complete| function| | No| Callback function for closed interface calling (available both for successful and failed calling)|

**OBJECT.checkAuthMode合法值**
**OBJECT.checkAuthMode legal values**

|值					|说明			|
| Value| Instruction|
|:-					|:-				|
|fingerPrint|指纹识别	|
| fingerPrint| Fingerprint identification|
|facial			|人脸识别	|
| facial| Face identification|

**OBJECT.success返回值说明**
**Description of return value of OBJECT.success**

|属性				|类型		|说明						|
| Attribute| Type| Instruction|
|:-					|:-			|:-							|
|isEnrolled	|boolean|是否已录入信息	|
| isEnrolled| boolean| Whether the information has been entered|
|errMsg			|string	|错误信息				|
| errMsg| string| Error message|

#### 代码示例
#### Code example

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
#### Precautions

- App端打包时，注意需要在manifest的模块中选择指纹、faceID、实人认证等模块，否则打包后无法运行相关功能。
- hello uni-app已经集成相关示例，最新版HBuilderX新建新版hello uni-app示例项目真机运行可见，在API-设备-生物认证里。
- hello uni-app has integrated relevant examples, and the latest version of HBuilderX creates a new version of hello uni-app example project, which can be seen in the mobile App Playground operation, in API- device-biometric authentication.
- 微信小程序如果使用腾讯云的SDK，可参考[网友分享](https://segmentfault.com/a/1190000020102601)
- If WeChat Mini Program uses Tencent Cloud SDK, please refer to [Shared by Netizens](https://segmentfault.com/a/1190000020102601)
- 支付宝小程序只支持人脸识别，[规范详情](https://docs.alipay.com/mini/api/facecapture)
- Alipay applet only supports face recognition, [specification details](https://docs.alipay.com/mini/api/facecapture)
- 百度小程序只支持人脸识别，[规范详情](https://smartprogram.baidu.com/docs/develop/api/ai_face/#swan-ai-faceDetect/)
- Baidu applet only supports face recognition, [specification details](https://smartprogram.baidu.com/docs/develop/api/ai_face/#swan-ai-faceDetect/)
