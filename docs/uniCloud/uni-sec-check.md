## uni-sec-check 公共模块

`uni-sec-check`是一个开源公共模块，用于帮助开发者进行内容安全检测，包括图片鉴黄和文字违规检测。在各种需要用户上传图片或录入文字到数据库的场景中，内容安全检测是非常必要的。通过使用该模块，您可以有效降低内容违规风险。”

本模块设计了provider概念，计划集成多家提供内容安全服务的供应商。

目前支持的provider：

1. mp-weixin（免费，微信小程序官方提供）

> 即目前只有微信内容安全检测一个provider

::: warning 注意
uni-sec-check公共模块仅能在云函数/云对象内使用。如果您不了解公共模块，请[参阅](cf-common.md)
本插件依赖uni-open-bridge-common，且版本需≥1.1.2
:::

> 插件市场地址：[https://ext.dcloud.net.cn/plugin?name=uni-sec-check](https://ext.dcloud.net.cn/plugin?name=uni-sec-check)


## 使用前必看

微信内容安全检测，分V1和V2版本。

- V1版本：
1. 微信官方于2021年9月1日停止更新V1，虽然可以使用，但检测范围很窄，只有部分涉政可以，鉴黄能力很弱。
2. V1的好处是可以全端使用，即App、web、非微信的小程序也可以使用。

- V2版本：
1. V2版本必须传递微信小程序用户的openid，且用户需要在近两小时内访问过小程序。因此，V2版本**只适用于微信小程序**，其他端无法正常使用。
2. V2版本新增了一个scene参数，scene的取值不同，最终的检测结果也不同。因此，为了获得更好的检测结果，您需要传递合适的scene值。
3. 与之前的版本不同，V2版本检测图片不会实时返回结果，而是需要等待5-30分钟后异步回调返回结果。如果您需要更多信息，请参考[微信检测结果异步通知示例](#微信检测结果异步通知示例)

不管V1还是V2，都是免费的。

## 配置@config

`uni-sec-check` 自身没有配置文件，Ta依赖 `uni-open-bridge` 的配置 [点击查看uni-open-bridge配置](https://uniapp.dcloud.net.cn/uniCloud/uni-open-bridge.html#uni-open-bridge%E7%9A%84%E4%BD%BF%E7%94%A8%E6%B5%81%E7%A8%8B)

配置如下图所示

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-admin/387.png)

## API@api

### 检测文本@textSecCheck

**用法**

```js
// 引入uni-sec-check公共模块
const UniSecCheck = require('uni-sec-check');
// 初始化实例
const uniSecCheck = new UniSecCheck({
	provider: 'mp-weixin',
	requestId: this.getUniCloudRequestId(), // 云函数内则写 context.requestId 云对象内则写 this.getUniCloudRequestId()
});
const checkRes = await uniSecCheck.textSecCheck({
	content: '', // 文本内容，不可超过500KB
	openid: '', // 用户的小程序openid
	scene: 2, // 场景值
	version: 2, // 接口版本号
});
console.log('checkRes: ', checkRes);
```

**请求参数**

|名称		|类型		|必填	|说明																																|
|--			|--			|--		|--																																	|
|content|String	|是		|文本内容，不可超过500KB																						|
|openid	|String	|否		|用户的小程序openid（用户需在近两小时访问过小程序） version=2时必填	|
|scene	|Number	|否		|场景值（1 资料；2 评论；3 论坛；4 社交日志）												|
|version|Number	|是		|接口版本号，可选1或2，但1的检测能力很弱																									|

**返回参数**

|名称		|类型		|必填	|说明											|
|--			|--			|--		|--												|
|errCode|String	|是		|错误码，见下方错误码说明	|
|errMsg	|String	|是		|错误信息									|
|result	|Object	|是		|检测结果									|

**result说明**

|名称		|类型		|必填	|说明											|
|--			|--			|--		|--												|
|suggest|String	|是		|建议；pass：通过，review：疑似，risky：有风险	|
|label	|String	|是		|分类信息；广告，时政，色情，辱骂，违法犯罪，欺诈，低俗，版权，其他						|

### 检测图片@imgSecCheck

**用法**

```js
// 引入uni-sec-check公共模块
const UniSecCheck = require('uni-sec-check');
// 初始化实例
const uniSecCheck = new UniSecCheck({
	provider: 'mp-weixin',
	requestId: this.getUniCloudRequestId(), // 云函数内则写 context.requestId 云对象内则写 this.getUniCloudRequestId()
});
const checkRes = await uniSecCheck.imgSecCheck({
	image: '', // 图片文件url或图片cloudID
	openid: '', // 用户的openid
	scene: 2, // 场景值
	version: 2 // 接口版本号
});
console.log('checkRes: ', checkRes);
```

**请求参数**

|名称		|类型		|必填	|说明																												|
|--			|--			|--		|--																													|
|image	|String	|是		|图片url或图片对应的cloudID																	|
|openid	|String	|否		|用户的openid（用户需在近两小时访问过小程序）version=2时必填|
|scene	|Number	|否		|场景值（1 资料；2 评论；3 论坛；4 社交日志）								|
|version|Number	|是		|接口版本号，可选1或2，但1的检测能力很弱											|

**返回参数**

|名称		|类型		|必填	|说明																							|
|--			|--			|--		|--																								|
|errCode|String	|是		|错误码，见下方错误码说明													|
|errMsg	|String	|是		|错误信息																					|
|traceId|String	|是		|唯一请求标识，标记单次请求，用于匹配异步推送结果	|

**注意**

- V2的检测结果是异步返回的，需要提前在微信公众平台「开发」-「开发设置」-「消息推送」开启消息服务，检测结果在 30 分钟内会推送到你的消息接收服务器。

### 检测音频@avSecCheck

**用法**

```js
// 引入uni-sec-check公共模块
const UniSecCheck = require('uni-sec-check');
// 初始化实例
const uniSecCheck = new UniSecCheck({
	provider: 'mp-weixin',
	requestId: this.getUniCloudRequestId(), // 云函数内则写 context.requestId 云对象内则写 this.getUniCloudRequestId()
});
const checkRes = await uniSecCheck.avSecCheck({
	mediaUrl: '', // 音频文件url
	openid: '', // 用户的openid
	scene: 2, // 场景值
	version: 2, // 固定为2
});
console.log('checkRes: ', checkRes);
```

**请求参数**

|名称			|类型		|必填	|说明																																|
|--				|--			|--		|--																																	|
|mediaUrl	|String	|是		|音频文件url；格式支持：mp3, aac, ac3, wma, flac, vorbis, opus, wav	|
|openid		|String	|是		|用户的小程序openid（用户需在近两小时访问过小程序）									|
|scene		|Number	|否		|场景值（1 资料；2 评论；3 论坛；4 社交日志）												|
|version	|Number	|是		|接口版本号固定为2																									|

**返回参数**

|名称		|类型		|必填	|说明																							|
|--			|--			|--		|--																								|
|errCode|String	|是		|错误码，见下方错误码说明													|
|errMsg	|String	|是		|错误信息																					|
|traceId|String	|是		|唯一请求标识，标记单次请求，用于匹配异步推送结果	|


## 微信检测结果异步通知示例

在微信公众平台「开发」-「开发设置」-「消息推送」中，启用消息服务，提前保存好`EncodingAESKey`与`token`等信息。（此处不涉及微信验证服务器，请自行参考微信文档）

新建云函数（需开启云函数URL化）用于接收微信服务器通知消息，示例代码如下（代码仅供参考，未处理异常）：

```js
const crypto = require('crypto')

function getSignature (token, timestamp, nonce, msgEncrypt) {
	const str = [token, timestamp, nonce, msgEncrypt].sort().join('')
	return crypto.createHash('sha1').update(str).digest("hex")
}

function PKCS7Decode(buf) {
	let padSize = buf[buf.length - 1]
	return buf.slice(0, buf.length - padSize)
}
function decryptMsg (encodingAESKey, msgEncrypt) {
	const key = Buffer.from(encodingAESKey + '=', 'base64')
	const iv = key.slice(0, 16)
		
	const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv)
	decipher.setAutoPadding(false)

	let deciphered = Buffer.concat([decipher.update(msgEncrypt, 'base64'), decipher.final()])

	deciphered = PKCS7Decode(deciphered)

	const content = deciphered.slice(16)
	const length = content.slice(0, 4).readUInt32BE(0)

	return {
		message: JSON.parse(content.slice(4, length + 4).toString()),
		appId: content.slice(length + 4).toString()
	}
}
module.exports = function (event, context) {
	const {msg_signature: msgSignature} = event.queryStringParameters
	const body = JSON.parse(event.body)
	
	let result = body
	// 消息解密
	if (body.Encrypt) {
		const signature = getSignature('your token', '1666095834', '43829373', body.Encrypt)

		if (signature !== msgSignature) {
				return 'signature error'
		}

		const decrypt = decryptMsg('your encodingAESKey', body.Encrypt)
		
		result = decrypt.message
	}
	
	// 只接收内容安全事件通知
	if (result.Event !== 'wxa_media_check') {
		return 'success'
	}
	
	if (result.result.suggest !== 'pass') {
		// 执行删除操作
	}
}
```

## 1.x升级2.x指南

由于依赖了`uni-open-bridge`，2.0版本不会向下兼容，请按照以下步骤升级：

步骤一：在`uni-config-center`中创建配置文件

为了升级到`uni-sec-check`的V2版本，您需要在`uni-config-center`中创建`uni-id`目录，并创建`config.json`配置文件。如果该文件已经存在，请忽略此步骤。

配置文件的路径为`uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json`。


步骤二：更新内容安全检测模块代码

创建内容安全检测模块实例`UniSecCheck`增加必传参数`requestId`，示例如下

旧

```js
const uniSecCheck = new UniSecCheck({ // 创建内容安全检测模块实例
	provider: 'mp-weixin', // 指定所使用服务的提供商，目前仅支持mp-weixin
	// customGetAccessToken: async function() { // 自定义的获取accessToken方法，见下方关于customGetAccessToken的说明
	//   return {
	//     accessToken: '',
	//     expired: 1624537278552
	//   }
	// },
	// onlyUseCachedAccessToken, // 仅使用缓存在数据库的accessToken，用于在uniCloud内使用其他服务获取accessToken，且缓存在了云数据库的场景，默认false
	// refreshAccessTokenThreshold, // token有效期剩余少于多少毫秒时开始刷新，默认300000毫秒
	// abandonAccessTokenThreshold // token有效期剩余少于多少毫秒时舍弃不用，默认5000毫秒
	}
})
```

新

```js
const uniSecCheck = new UniSecCheck({ // 创建内容安全检测模块实例
	provider: 'mp-weixin', // 指定所使用服务的提供商，目前仅支持mp-weixin
	requestId: this.getUniCloudRequestId(), // 云函数内则写 context.requestId 云对象内则写 this.getUniCloudRequestId()
})
```

## 错误码说明

|错误码																|说明											|
|--																		|--												|
|uni-sec-check-system-error						|系统错误									|
|uni-sec-check-risk-content						|存在风险内容							|
|uni-sec-check-invalid-appid					|appid不正确							|
|uni-sec-check-invalid-appsecret			|appsecret不正确					|
|uni-sec-check-invalid-access-token		|accessToken不正确				|
|uni-sec-check-access-token-expired		|accessToken已过期				|
|uni-sec-check-invalid-file-type			|错误的文件类型						|
|uni-sec-check-invalid-image-size			|图片大小超出限制					|
|uni-sec-check-invalid-request-url		|错误的请求地址						|
|uni-sec-check-invalid-request-param	|错误的请求参数						|
|uni-sec-check-invalid-request-format	|错误的请求格式						|
|uni-sec-check-param-required					|缺少必要参数							|
|uni-sec-check-empty-image						|图片文件内容为空					|
|uni-sec-check-empty-content					|文字内容为空							|
|uni-sec-check-invoke-out-of-limit		|接口调用频率/次数超出限制|

