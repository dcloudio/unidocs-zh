下载地址：[https://ext.dcloud.net.cn/plugin?id=4048](https://ext.dcloud.net.cn/plugin?id=4048)
Download address: [https://ext.dcloud.net.cn/plugin?id=4048](https://ext.dcloud.net.cn/plugin?id=4048)

GitCode 仓库：[https://gitee.com/dcloud/uni-captcha](https://gitee.com/dcloud/uni-captcha)
GitCode repository: [https://gitee.com/dcloud/uni-captcha](https://gitee.com/dcloud/uni-captcha)

## 用途说明
## Instructions for use
主要起到人机校验或其他限制调用的作用，如：
It mainly plays the role of man-machine verification or other restriction calls, such as:
- 防止机器冒充人类做暴力破解
- Prevent machines from impersonating humans to do brute force cracking
- 防止大规模在线注册滥用服务
- Prevent mass online registration abuse of the service
- 防止滥用在线批量操作
- Prevent abuse of online bulk operations
- 防止信息被大量采集聚合
- Prevent information from being collected and aggregated in large quantities

常见的业务场景有：
Common business scenarios include:
- 注册环节：防止无效垃圾注册，从源头进行管理
- Registration link: prevent invalid spam registration and manage from the source
- 登录环节：防止撞库攻击、暴力破解，保障用户数据
- Login link: prevent credential stuffing attacks, brute force cracking, and protect user data
- 短信防刷：减少短信接口被刷情况，减少企业不必要成本
- SMS anti-swiping: reduce the situation of SMS interface being swiped and reduce unnecessary costs for enterprises
- 互动环节：防止批量垃圾互动信息，破坏用户UGC内容生态
- Interactive link: prevent batch spam interactive information and damage the user's UGC content ecology
- 激励领取：防止被批量褥羊毛
- Incentive collection: prevent quilted wool from bulk

## 组成部分
## component
1. 数据表：[opendb-verify-codes](https://gitee.com/dcloud/opendb/blob/master/collection/opendb-verify-codes/collection.json)，用于存储验证码相关数据
1. Data table: [opendb-verify-codes](https://gitee.com/dcloud/opendb/blob/master/collection/opendb-verify-codes/collection.json), used to store verification code related data
2. 公共模块：`uni-captcha`，集成获取、刷新、校验验证码
2. Public module: `uni-captcha`, which integrates acquisition, refresh and verification of verification codes
3. 云对象：`uni-captcha-co`，集成获取验证码的api
3. Cloud object: `uni-captcha-co`, which integrates the api for obtaining the verification code
4. 云端一体组件：`uni-captcha`和`uni-popup-captcha`，集成创建、刷新、显示验证码
4. Cloud-integrated components: `uni-captcha` and `uni-popup-captcha`, integrated to create, refresh and display verification codes

## 目录结构@catalogue
## Directory structure @catalogue
<pre v-pre="" data-lang="">
    <code class="lang-" style="padding:0">
├─uni_modules                              			存放[uni_module](/uni_modules)规范的插件。
│	└─uni-captcha
│		├─uniCloud
│		│	├─cloudfunctions						云函数目录
│		│	│	├─common							公共模块目录
│		│	│	│	└─uni-captcha					uni-captcha公共模块
│		│	│	└─uni-captcha-co					集成调用uni-captcha方法的云对象
│		│	└─database
│		│	 	├─opendb-verify-codes.schema.json	验证码数据表
│		│		└─db_init.json						初始化数据库文件
│		└─components								组件目录
│			├─uni-captcha					   		 
│			│	└─uni-captcha.vue					普通验证码组件
│			└─uni-popup-captcha				  		
│				└─uni-popup-captcha.vue				弹出式验证码组件
    </code>
</pre>

## 原理时序
## Principle timing
1. 客户端，向服务端请求某一应用场景的验证码。提示：这里用场景值`scene`，表示应用场景，用于防止不同功能的验证码混用，如：`login`、`pay`
1. The client side requests a verification code for a certain application scenario from the server side. Tip: The scene value `scene` is used here to represent the application scene, which is used to prevent the verification codes of different functions from being mixed, such as: `login`, `pay`
2. 服务端，创建验证码，即：向数据表`opendb-verify-codes`中创建状态为待验证的验证码记录（作废同一个设备id和场景值的旧验证码记录），并返回格式为base64的图形验证码资源数据。提示：这里的数据表，状态字段名：`state`用`0`表示待验证，用`2`表示已作废。
2. On the server side, create a verification code, that is, create a verification code record in the data table `opendb-verify-codes` with the status to be verified (void the old verification code record with the same device id and scene value), and return the format It is the graphic captcha resource data of base64. Tip: In the data table here, the state field name: `state` uses `0` to indicate pending verification, and `2` to indicate invalid.
3. 客户端，得到验证码图片，用户识别后输入验证码的值与表单数据一起提交至服务端
3. On the client side, get the verification code picture, and after the user recognizes it, enter the value of the verification code and submit it to the server together with the form data
4. 服务端，云函数或clientDB action中校验验证码，决定是否执行业务逻辑。如果验证码错误则返回错误信息，客户端再重复步骤1-3。提示：验证验证码，可以使用封装好的公共模块的`verify`方法[详情](#校验验证码@verify)，也可以直接查库校验。
4. Verify the verification code in the server, cloud function or clientDB action to decide whether to execute the business logic. If the verification code is incorrect, an error message will be returned, and the client will repeat steps 1-3. Tip: To verify the verification code, you can use the `verify` method of the packaged public module [Details](#%E6%A0%A1%E9%AA%8C%E9%AA%8C%E8%AF%81%E7% A0%81@verify), you can also check the library directly.

以上即完整的流程。
The above is the complete process.
如果在前端表单页面中，使用本插件封装好的云端一体组件，并配置组件的属性场景值`scene`，即等价于如上步骤1-3；
If in the front-end form page, use the cloud-integrated component packaged by this plug-in, and configure the attribute scene value of the component `scene`, which is equivalent to the above steps 1-3;

本插件已集成使用示例，使用HBuilderX导入示例项目体验；另外你也可以参考插件在[uni-starter](https://ext.dcloud.net.cn/plugin?id=5057)中的应用。
This plugin has integrated usage examples, use HBuilderX to import the sample project experience; in addition, you can also refer to the application of the plugin in [uni-starter](https://ext.dcloud.net.cn/plugin?id=5057).

## 云端一体组件介绍
## Cloud-integrated components introduction
内置调用`uni-captcha-co`云对象集成创建/刷新验证码，组件支持双向数据绑定。
The built-in call `uni-captcha-co` cloud object integration creates/refreshes the captcha, and the component supports two-way data binding.

### 验证码配置（可选）：
### Verification code configuration (optional):

参数说明：
Parameter Description:

| 字段			| 类型		| 默认值	| 说明															|
| Field | Type | Default | Description |
| ------------	| -------	| -------	| ------------------------------------------------------------	|
| width			| Number	| 150		| 图片宽度														|
| width | Number | 150 | Image width |
| height		| Number	| 40		| 图片高度														|
| height | Number | 40 | Image height |
| background	| String	| #FFFAE8	| 验证码背景色，设置空字符`''`不使用背景颜色					|
| background | String | #FFFAE8 | The background color of the verification code, set the empty character `''` to not use the background color |
| size			| Number	| 4			| 验证码长度，最多 6 个字符										|
| size | Number | 4 | Length of verification code, up to 6 characters |
| noise			| Number	| 4			| 验证码干扰线条数												|
| noise | Number | 4 | Number of captcha interference lines |
| color			| Boolean	| false		| 字体是否使用随机颜色，当设置`background`后恒为`true`			|
| color | Boolean | false | Whether the font uses random color, when set `background`, it is always `true` |
| fontSize		| Number	| 40		| 字体大小														|
| fontSize | Number | 40 | Font size |
| ignoreChars	| String	| 			| 忽略哪些字符													|
| ignoreChars | String | | Which characters to ignore |
| mathExpr		| Boolean	| false		| 是否使用数学表达式											|
| mathExpr | Boolean | false | whether to use math expressions |
| mathMin		| Number	| 1			| 表达式所使用的最小数字										|
| mathMin | Number | 1 | The smallest number used by the expression |
| mathMax		| Number	| 9			| 表达式所使用的最大数字										|
| mathMax | Number | 9 | maximum number used in expression |
| mathOperator	| String	| 			| 表达式所使用的运算符，支持 `+`、`-`。不传则随机使用				|
| mathOperator | String | | The operator used by the expression, supports `+`, `-`. If not passed, use randomly |
| expiresDate	| Number	| 180		| 验证码过期时间(s)							|
| expiresDate | Number | 180 | Verification code expiration time (s) |
| scene			| Object	| 			| 根据场景值配置（版本号：0.6.0+ 支持）							|
| scene | Object | | Configured according to scene value (version number: 0.6.0+ supported) |

配置路径：[unicloud配置中心](https://ext.dcloud.net.cn/plugin?id=4425)，`uni-config-center`->`uni-captcha`->`config.json`
Configuration path: [unicloud configuration center](https://ext.dcloud.net.cn/plugin?id=4425), `uni-config-center`->`uni-captcha`->`config.json`
示例：
Example:
```
	{
		"width":150,
		"height":40,
		"background":"#FFFAE8",
		"size":"4",
		"noise":"4",
		"color":false,
		"fontSize":40,
		"ignoreChars":"",
		"mathExpr":false,
		"mathMin":1,
		"mathMax":9,
		"mathOperator":"",
		"expiresDate":180,
		"scene":{
			"login":{
				"mathExpr":true	 	//该配置会覆盖根节点的值，表示scene的值为login时，验证码使用数学表达式
			},
			"register":{
				"expiresDate":60,	 //该配置会覆盖根节点的值，表示scene的值为login时，验证码过期时间为60秒
			}
		}
	}
```

注意：`uni-config-center`不支持注释，如果直接复制配置示例代码，要将注释删除
Note: `uni-config-center` does not support comments, if you copy the configuration example code directly, delete the comments

**替换字体：**
**Alternative font:**
路径：`/uni_modules/uni-captcha/uniCloud/cloudfunctions/common/uni-captcha/fonts/font.ttf`。
Path: `/uni_modules/uni-captcha/uniCloud/cloudfunctions/common/uni-captcha/fonts/font.ttf`.
请保证字体格式为 `.ttf` 且包含 `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-` 字符
Please make sure the font format is `.ttf` and contains `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-` characters


**已过期的配置**（版本号：0.6.0+ 已不再支持此方式 ）：
**Expired configuration** (version number: 0.6.0+ no longer supports this method):

在云对象`uni-captcha-co`中配置，路径：`/uni_modules/uni-captcha/uniCloud/cloudfunctions/uni-captcha-co/config.js`->`image-captcha` 云对象`uni-captcha-co`中的配置，优先级大于在`unicloud配置中心`的配置
Configured in cloud object `uni-captcha-co`, path: `/uni_modules/uni-captcha/uniCloud/cloudfunctions/uni-captcha-co/config.js`->`image-captcha` cloud object `uni-captcha` The configuration in -co` takes precedence over the configuration in the `unicloud configuration center`

### 普通验证码组件
### Common verification code component
**组件名：uni-captcha**
**Component name: uni-captcha**

组件遵从[easycom组件规范](https://uniapp.dcloud.io/component/#easycom%E7%BB%84%E4%BB%B6%E8%A7%84%E8%8C%83)
The component follows the [easycom component specification](https://uniapp.dcloud.io/component/#easycom%E7%BB%84%E4%BB%B6%E8%A7%84%E8%8C%83)

使用示例：
Example of use:
```html
<template>
	<uni-captcha scene="场景值" v-model="验证码的值"></uni-captcha>
</template>
```
#### Props:
| 字段         | 类型    | 必填 | 默认值  | 说明                                                         |
| Field | Type | Required | Default | Description |
| ------------ | ------- | ---- | ------- | ------------------------------------------------------------ |
| scene        | String  | 是   | -       | 使用场景值，用于防止不同功能的验证码混用，如：`login`、`pay` |
| scene | String | Yes | - | Use the scene value to prevent the verification codes of different functions from being mixed, such as: `login`, `pay` |
| value/v-model| String  | -    | -       | 验证码的值 |
| value/v-model| String | - | - | Captcha value |


### 弹出式验证码组件
### Pop-up verification code component
**组件名：uni-popup-captcha**
**Component name: uni-popup-captcha**

组件遵从[easycom组件规范](https://uniapp.dcloud.io/component/#easycom%E7%BB%84%E4%BB%B6%E8%A7%84%E8%8C%83)
The component follows the [easycom component specification](https://uniapp.dcloud.io/component/#easycom%E7%BB%84%E4%BB%B6%E8%A7%84%E8%8C%83)

验证码实现人机校验等作用的同时，降低了用户体验。为了提升用户体验：绝大部分情况下，验证码应当是非常态的，当接口被高频调用的情况下才需要。
While the verification code realizes man-machine verification and other functions, it reduces the user experience. In order to improve the user experience: In most cases, the verification code should be abnormal, and it is only required when the interface is frequently called.
另外验证码会使得我们的前端界面设计变得复杂。所以弹出式验证码组件，应需而生。
In addition, the verification code will complicate our front-end interface design. Therefore, the pop-up verification code component was born in response to demand.

#### 使用示例：
#### Usage example:
```html
<template>
	<uni-popup-captcha ref="popup-captcha" @confirm="verifyCaptcha" :scene="formData.scene" v-model="formData.captcha"></uni-popup-captcha>
	<button @click="openPopupCaptcha" >显示弹出式验证码</button>
</template>
<script>
	export default {
		data() {
			return {
				formData:{
					captcha:"",
					scene:"test"
				}
			}
		},
		methods: {
			verifyCaptcha(){
				const uniCaptchaCo = uniCloud.importObject("uni-captcha-co")
				uniCaptchaCo.verifyCaptcha(this.formData).then(e=>{
					uni.showToast({
						title: e.errMsg,
						icon: 'none'
					});
				})
			},
			openPopupCaptcha(){
				this.$refs['popup-captcha'].open()
			}
		}
	}
</script>
```
#### Props:
| 字段         | 类型    | 必填 | 说明                                                         |
| Fields | Type | Required | Description |
| ------------ | ------- | ---- | ------------------------------------------------------------ |
| scene        | String  | 是   | 使用场景值，用于防止不同功能的验证码混用，如：`login`、`pay` |
| scene | String | Yes | Use the scene value to prevent the verification codes of different functions from being mixed, such as: `login`, `pay` |
| value/v-model| String  | -    | 验证码的值 |
| value/v-model| String | - | Captcha value |

#### Events
| 字段			| 类型		|   说明														|
| Field | Type | Description |
| ------------	| -------	|----------------	|
| confirm		| Function	|  点击确定按钮事件	|
| confirm | Function | Click OK button event |


## 公共模块
## public modules
- 云端一体组件`uni-captcha`和`uni-popup-captcha`，已经集成公共模块的获取验证码`create`和刷新验证码`refresh`接口。
- The cloud-integrated components `uni-captcha` and `uni-popup-captcha` have integrated the `create` and refresh `refresh` interfaces of the public module.
- 引入公共模块请参考[云函数公用模块](https://uniapp.dcloud.net.cn/uniCloud/cf-common)
- For the introduction of public modules, please refer to [Cloud Function Public Modules](https://uniapp.dcloud.net.cn/uniCloud/cf-common)

### 获取验证码@create
### Get verification code @create
用于新的验证码记录（使用云端一体组件的用户可以忽略）
Used for new captcha records (users using cloud-integrated components can ignore)

示例：
Example:
```js
//引入公共模块
//Introduce public modules
const uniCaptcha = require('uni-captcha')
module.exports = {
	async createCaptcha({scene}) {
		return await uniCaptcha.create({
			scene,
			width:100,
			height:44
		});
	}
}
```

**参数说明**
**Parameter Description**

| 字段         | 类型    | 必填 | 默认值  | 说明                                                         |
| Field | Type | Required | Default | Description |
| ------------ | ------- | ---- | ------- | ------------------------------------------------------------ |
| scene        | String  | 是   | -       | 使用场景值，用于防止不同功能的验证码混用，如：`login`、`pay` |
| scene | String | Yes | - | Use the scene value to prevent the verification codes of different functions from being mixed, such as: `login`, `pay` |
| deviceId     | String  | -    | -       | 设备 id，如果不传，将自动从 uniCloud 上下文获取              |
| deviceId | String | - | - | The device id, if not passed, it will be automatically obtained from the uniCloud context |
| uniPlatform  | String	 | -	| -		  | uni-app 运行平台 												|
| uniPlatform | String | - | - | uni-app runtime platform |
| width        | Number  | -    | 150     | 图片宽度                                                     |
| width | Number | - | 150 | Image width |
| height       | Number  | -    | 40      | 图片高度                                                     |
| height | Number | - | 40 | Image height |
| background   | String  | -    | #FFFAE8 | 验证码背景色，设置空字符`''`不使用背景颜色                   |
| background | String | - | #FFFAE8 | The background color of the verification code, set the empty character `''` to not use the background color |
| size         | Number  | -    | 4       | 验证码长度，最多 6 个字符                                    |
| size | Number | - | 4 | Length of verification code, up to 6 characters |
| noise        | Number  | -    | 4       | 验证码干扰线条数                                             |
| noise | Number | - | 4 | The number of interference lines of verification code |
| color        | Boolean | -    | false   | 字体是否使用随机颜色，当设置`background`后恒为`true`         |
| color | Boolean | - | false | Whether the font uses random color, it is always `true` after setting `background` |
| fontSize     | Number  | -    | 40      | 字体大小                                                     |
| fontSize | Number | - | 40 | font size |
| ignoreChars  | String  | -    | ''      | 忽略哪些字符                                                 |
| ignoreChars | String | - | '' | Which characters to ignore |
| mathExpr     | Boolean | -    | false   | 是否使用数学表达式                                           |
| mathExpr | Boolean | - | false | whether to use math expressions |
| mathMin      | Number  | -    | 1       | 表达式所使用的最小数字                                       |
| mathMin | Number | - | 1 | minimum number used in expression |
| mathMax      | Number  | -    | 9       | 表达式所使用的最大数字                                       |
| mathMax | Number | - | 9 | maximum number used in expression |
| mathOperator | String  | -    | ''      | 表达式所使用的运算符，支持 `+`、`-`。不传则随机使用            |
| mathOperator | String | - | '' | The operator used by the expression, supports `+`, `-`. If not passed, use randomly |
| expiresDate  | Number  | -    | 180     | 验证码过期时间(s)                                            |
| expiresDate | Number | - | 180 | Verification code expiration time (s) |

**注意：**
**Notice:**
- **自`uni-captcha 0.3.0`起，支持在[unicloud配置中心](https://ext.dcloud.net.cn/plugin?id=4425)`uni-config-center`->`uni-captcha`->`config.json`中配置参数默认值**
- **Since `uni-captcha 0.3.0`, support in [unicloud configuration center](https://ext.dcloud.net.cn/plugin?id=4425)`uni-config-center`->` Default values of configuration parameters in uni-captcha`->`config.json`**
- 如果想替换字体，请保证字体格式为 `.ttf` 且包含 `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-` 字符
- If you want to replace the font, make sure the font format is `.ttf` and contains `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-` characters


**响应参数**
**Response parameters**

| 字段          | 类型   | 说明                |
| Field | Type | Description |
| ------------- | ------ | ------------------- |
| errCode          | Number | 错误码，0 表示成功  |
| errCode | Number | Error code, 0 means success |
| errMsg       | String | 详细信息            |
| errMsg | String | Details |
| captchaBase64 | String | 验证码：base64 格式 |
| captchaBase64 | String | Captcha: base64 format |


### 刷新验证码@refresh
### Refresh verification code @refresh
作废相同设备id和场景值的验证码记录，并创建新的验证码记录（使用云端一体组件的用户可以忽略）
Void the verification code record of the same device id and scene value, and create a new verification code record (users using the cloud-integrated component can ignore it)

示例：
Example:
```js
//引入公共模块
//Introduce public modules
const uniCaptcha = require('uni-captcha')
const db = uniCloud.database();
const verifyCodes = db.collection('opendb-verify-codes')
module.exports = {
	async refreshCaptcha({scene}) {
		let res = await verifyCodes.where({scene,deviceId,state:0}).limit(1).get()
		if(res.data.length){
			return await uniCaptcha.refresh({
				scene,
				width:100,
				height:44
			});
		}else{
			return {
				errCode: "uni-captcha-refresh-fail",
				errMsg: '未找到相同设备id和场景值的有效验证码记录'
			}
		}
	}
}
```

**参数说明**
**Parameter Description**

| 字段     | 类型   | 必填 | 默认值 | 说明                                            |
| Field | Type | Required | Default | Description |
| -------- | ------ | ---- | ------ | ----------------------------------------------- |
| scene    | String | 是   | -      | 类型，用于防止不同功能的验证码混用              |
| scene | String | Yes | - | Type, used to prevent the verification codes of different functions from being mixed |
| deviceId | String | -    | -      | 设备 id，如果不传，将自动从 uniCloud 上下文获取 |
| deviceId | String | - | - | The device id, if not passed, it will be automatically obtained from the uniCloud context |

**响应参数**
**Response parameters**

| 字段          | 类型   | 说明                |
| Field | Type | Description |
| ------------- | ------ | ------------------- |
| errCode          | Number | 错误码，0 表示成功  |
| errCode | Number | Error code, 0 means success |
| errMsg       | String | 详细信息            |
| errMsg | String | Details |
| captchaBase64 | String | 验证码：base64 格式 |
| captchaBase64 | String | Captcha: base64 format |

`注意：`
`Note:`

- 支持传入 create 方法的所有参数，如果不传，则自动按照 deviceId 匹配上次生成时的配置生成新的验证码
- Supports all parameters passed to the create method. If not passed, a new verification code will be automatically generated according to the deviceId matching the configuration of the last generation


### 校验验证码@verify
### Verify verification code @verify
用于验证用户输入的验证码是否正确
Used to verify that the verification code entered by the user is correct

```js
const uniCaptcha = require('uni-captcha')
module.exports = {
	async verify({scene,captcha}) {
		let res = await uniCaptcha.verify({scene,captcha})
		if(res.code == 0){
			//...这里写你的业务逻辑
			//...write your business logic here
		}else{
			return res
		}
	}
}
```

**参数说明**
**Parameter Description**

| 字段     | 类型   | 必填 | 默认值 | 说明                                            |
| Field | Type | Required | Default | Description |
| -------- | ------ | ---- | ------ | ----------------------------------------------- |
| scene    | String | 是   | -      | 类型，用于防止不同功能的验证码混用              |
| scene | String | Yes | - | Type, used to prevent the verification codes of different functions from being mixed |
| captcha  | String | 是   | -      | 验证码                                          |
| captcha | String | Yes | - | Captcha |
| deviceId | String | -    | -      | 设备 id，如果不传，将自动从 uniCloud 上下文获取 |
| deviceId | String | - | - | The device id, if not passed, it will be automatically obtained from the uniCloud context |

**响应参数**
**Response parameters**

| 字段    | 类型   | 说明               |
| Field | Type | Description |
| ------- | ------ | ------------------ |
| errCode    | Number | 错误码，0 表示成功 |
| errCode | Number | Error code, 0 means success |
| errMsg | String | 详细信息           |
| errMsg | String | Details |

`注意：`
`Note:`

- 若提示验证码失效，请重新获取
- If the verification code is invalid, please get it again
- 如果为了更小的代码体积，不想使用本方法，也可以直接查库校验
- If you don't want to use this method for smaller code size, you can also check the library directly


## 错误码
## error code
**已过期，uni-captcha 0.3.0起，返回值均已符合[uniCloud响应体规范](https://uniapp.dcloud.io/uniCloud/cf-functions.html#resformat)**
**Expired, from uni-captcha 0.3.0 onwards, the return values are in compliance with the [uniCloud response body specification](https://uniapp.dcloud.io/uniCloud/cf-functions.html#resformat)**

_详细信息请查看 message 中查看_
_For more information, please check the message_

|  模块	| 模块码| 错误代码	|        错误信息			|
| Module | Module Code | Error Code | Error Message |
| :----:| :----:| :------:	| :---------------------:	|
| 验证码|  100	|    01		| （10001）验证码生成失败	|
| Verification Code | 100 | 01 | (10001) Verification Code Generation Failed |
|		|		|    02		| （10002）验证码校验失败	|
| | | 02 | (10002) Verification code verification failed |
|		|		|    03		| （10003）验证码刷新失败	|
| | | 03 | (10003) Verification code refresh failed |