# DCloud开放平台DSP对接规范

名词解释：

- DSP：developer service provider，为开发者提供服务的三方厂商


## 开发者服务商（DSP）入驻DCloud开放平台
- DSP在DCloud开放平台[https://open.dcloud.net.cn/](https://open.dcloud.net.cn/)注册账号，需企业实名认证。
- 注册成功后，由DCloud分配账号级`dspId`，`dspSecret`。

## DSP配置开户所需信息

DSP入驻DCloud开放平台后，需配置希望获取开发者哪些信息，以及是否支持个人用户开户：
- 可选信息：`email`，`phone`，`realname`，`nickname`，`identity`（个人为身份证号、企业为营业执照），`bankInfo`（开户行，开户名称，银行账号）
- 是否支持个人用户
- 账号接口地址，用于接受DCloud开放平台同步过来的用户信息（邮箱、手机号、实名信息等）；API接口定义见下文。

## DSP注册SDK
- DSP按照uniapp插件规范开发相关插件，并发布到[插件市场](https://ext.dcloud.net.cn)；
- 注册SDK产品，补充完善以下信息：
	- SDK支持的平台，如app-android, app-ios, mp-weixin等；
	- 各平台开通服务时，需要的应用信息字段（区分必填、选填；如应用名称、包名、证书摘要等）；
	- 插件市场的插件ID（必填）；
	- 是否支持测试包名、测试证书；
	- 各平台的备注信息（在DCloud开放平台向用户展示，可以添加SDK文档链接等）
	- 录入DSP API接口地址。API接口定义见下文。
	- 创建应用、修改应用接口返回参数的字段名称、描述信息、在原生平台需要标识保存在`AndroidManifest`、`plist`的位置
```json
{
	"app-android": { // 平台
		"appid": { // 该平台创建应用时，返回的字段名称
			"title": "appid", // 字段在页面上的展示名称
			"desc": "应用标识", // 字段描述
			"androidManifest": { // 可选，如果需要在打包时将此字段配置到AndroidManifest，需要提供AndroidManifest中字段名称
				"metaDataName": "dcloud_appid"
			}
		},
		"appKey": {
			"title": "",
			"desc": "",
			"androidManifest": { 
				"metaDataName": "dcloud_appkey"
			}
		},
		"appSecret": {
			"title": "",
			"desc": ""
		}
	},
	"app-ios": {
		"appKey": {
			"title": "",
			"desc": "",
			"plist": { // 可选，如果需要在打包时将此字段配置到plist，需要提供plist的参数配置路径
				"keyPath": "sms:config:appKey"
			}
		},
	},
	"server": {
		"masterSecret": {
			"title": "",
			"desc": "",
			"uniConfigCenter": { // 可选。此字段需要配置到uni-config-center
				"pluginId": "", // 此字段是uni-config-center的pluginId。不是插件市场的插件ID。
				"keyPath": "sms:config:masterSecret" // 参数配置路径
			}
		}
	}
}
```


## 开发者向DSP一键开户

开发者可在DCloud系统中，向DSP平台发起账号注册、修改、注销等流程。

具体流程为：
1. 开发者登录DCloud系统
2. 选择需要开户的DSP平台
3. 开发者授权可向DSP同步的个人信息（手机号、邮箱、实名信息等）
4. DCloud系统通过接口方式请求DSP平台，将用户信息发送过去
5. DSP平台返回操作结果（如：注册成功、失败以及失败原因等）


### 注册 

- 接口示例
/auth/register

- 请求参数
```json
{
	"dcloudOpenUid": "",  // DCloud开放平台用户标识
	"email": "mail@dcloud.io", // 账号绑定的邮箱
	"phone": "13012345678", // 账号绑定的手机号
	"userType": 1, // 用户类型：1为个人，2为企业
	"name": "张三", // 用户名称。个人用户为姓名。企业用户为企业名称
	"identity": "110110199001011234", // 个人用户为身份证号，企业用户为营业执照
	"bankInfo": {
		"bank": "招商银行北京支行", // 开户银行
		"name": "张三", // 开户名
		"account": "12345678" // 银行账号
	}
	"timestamp": 1633665031,
}
```

- 返回参数
```json
{
	"errCode": 0,
	"errMsg": "success"
}
```

### 同步用户信息
接口同注册接口。

### 注销账号
开发者通过一键登录，在DSP平台中注销。

## 开发者一键登录DSP平台

开发者登录DCloud系统后，可一键登录DSP平台，避免二次登录，优化体验。

一键登录分为两个步骤：
1. DCloud平台通过接口请求DSP平台，获取authToken
2. DCloud平台通过authToken，跳转DSP平台系统

### 获取authToken
- 接口示例
/auth/token

- 请求参数
```json
{
	"dcloudOpenUid": "",
	"timestamp": 1633665031,
}
```

- 返回参数
```json
{
	"errCode": 0,
	"errMsg": "success",
	"data": {
		"authToken": "",  // 登录凭证，应用相关接口都通过authToken鉴权
		"expire": 3600	 // authToken过期时间，单位为秒
	}
}
```

### 一键登录
- 说明：通过authToken可免登录打开DSP平台。DSP解析dspId,authToken，实现DSP平台自登录。
- 跳转DSP平台地址示例，如：`https://dspdomain.com?dspId=xxx&authToken=xxx`

## 开发者向DSP注册应用

开发者可在DCloud系统中，向DSP平台发起应用注册、修改、删除流程。

### 创建应用
- 接口示例
/app/create

- 请求参数
```json
{
	"pluginId": "",
	"authToken": "",
	"appName": "",
	"appDesc": "",
	"platforms": { // 此字段对应SDK注册时，DSP选择的平台。同时开发者在开通时可选择开通一个或多个平台
		"app-android": {
			"releasePackageName": "",
			"debugPackageName": "",
			"releaseCertSha1": "",
			"debugCertSha1": "",
		},
		"app-ios": {
			"releaseBundleId": "",
			"debugBundleId": "",
		},
		"mp-wexin": {
			"wxAppid": "",
		},
		"web": {
			"domains": ["dcloud.io", "dcloud.net.cn"]
		},
		"webService": {
			"ips": ["1.2.3.4","1.2.3.*"],
			"domains": ["dcloud.io", "dcloud.net.cn"]
		}
	},
	"timestamp": 1633665031,
}
```

- 返回参数
```json
{
	"errCode": 0,
	"errMsg": "success",
	"data": {
		"dspAppid": "",
		"platforms": { // 此处返回的字段与SDK注册时配置的字段一致
			"server": { // 客户端配套的server配置
				"secret": "",
			},
			"app-android": {
				"appid": "",
				"appKey": "",
				"appSecret": "",
			},
			"app-ios": {
				"appid": "",
				"appKey": "",
				"appSecret": "",
			},
			"mp-weixin": {
				
			},
			"web": {
				"appKey": "",
				"jscode": ""
			},
			"webService": {
				
			}
		}
	}
}
```

### 修改应用信息

**注意：** 修改应用信息时，传递的是全量数据。如果某个平台以前开通过，在修改时没有传递，表明开发者需要删除该平台的配置。

- 接口示例
/app/modify

- 请求参数
```json
{
	"pluginId": "",
	"authToken": "",
	"dspAppid": "",
	"appName": "",
	"appDesc": "",
	"platforms": { // 如果没有某个平台的参数，表示删除该平台配置
		"app-android": {
			"releasePackageName": "",
			"debugPackageName": "",
			"releaseCertSha1": "",
			"debugCertSha1": "",
		}
	},
	"timestamp": 1633665031,
}
```

- 返回参数
```json
{
	"errCode": 0,
	"errMsg": "success",
	"data": {
		"dspAppid": "",
		"platforms": { // 此处返回的字段与SDK注册时配置的字段一致
			"server": { // 客户端配套的server配置
				"secret": "",
			},
			"app-android": {
				"appid": "",
				"appKey": "",
				"appSecret": "",
			}
		}
	}

}
```

### 删除应用
- 接口示例
/app/delete

- 请求参数
```json
{
	"pluginId": "",
	"authToken": "",
	"dspAppid": "",
	"timestamp": 1633665031,
}
```

- 返回参数
```json
{
	"errCode": 0,
	"errMsg": "success",
}
```


## DSP使用DCloud账号登录（OAuth协议)
完整文档参考：[https://ask.dcloud.net.cn/article/38005](https://ask.dcloud.net.cn/article/38005)

### HBuilderX插件
![](https://ask.dcloud.net.cn/uploads/article/20201110/2514e1ec371bdebbb9a4111052939720.png)

### Web平台
![](https://ask.dcloud.net.cn/uploads/article/20220914/3bc9cb477832756cc727f3c550b4fcd0.jpg)

## 附录

### 接口数据传输规范
#### 编码方式
- 本API文档所涉及接口均遵循HTTP协议；
- 所有请求的ContentType在不明确指定的情况下均为application/x-www-form-urlencoded；
- 所有返回的ContentType在不明确指定的情况下均为application/json；
- 若无特殊说明或响应头中的Content-Type未指定编码，请求和响应中的字符编码均使用 UTF-8（无 BOM 头）。

#### HTTP请求方式
如无特殊说明，API请求的HTTP Method均为POST 

#### URL定义
URL请求域名由DSP提供，协议：必须使用HTTPS。本文接口详述中使用的请求URL均为示例，实际上线时的URL以DSP提供的为准。

#### 请求参数
接口中描述的请求参数全部加密传输。请求参数只包含以下字段：

|名称	|类型	|必填	|描述												|
|--		|--		|--		|--													|
|dspId	|int	|是		|DSP在DCloud开放平台注册账号后，DCloud返回的dspId	|
|data	|string	|是		|各接口中定义的json string加密后的数据，加密数据见下文描述		|

#### 接口响应
- HTTP状态码

支持HTTP标准状态码，具体如下：

|状态码	|名称				|描述														|
|--		|--					|--															|
|200	|成功				|当 API 请求被正确处理，且能按设计获取结果时，返回该状态码；|
|4xx	|接口调用方端错误	|由接口调用方端原因造成的错误								|
|5xx	|DSP服务器端错误	|DSP API或其下层服务发生内部错误							|

- HTTP Header

接口DSP API响应的Content-Type应为application/json。 

- HTTP Body

响应的JSON数据中包含三部分内容，分别为状态码、返回信息和数据，如下表所示：

|名称	|类型		|必填	|描述										|
|--		|--			|--		|--											|
|errCode|int		|是		|状态码： 0表示成功；其它表示错误			|
|errMsg	|string		|是		|返回信息：若有错误，此字段为详细的错误信息	|
|data	|json object|否		|响应数据。此字段加密传输，加密前为json string。接口无需返回数据时，此字段为空。	|

#### 数据加密算法
所有要求加密的字段均采用AES256加密算法进行加密。在DSP注册账号后，由DCloud开放平台提供加密的密钥`dspSecret`。

加密算法：AES256
加密模式：CBC
填充方式：Pkcs7 | Pkcs5
