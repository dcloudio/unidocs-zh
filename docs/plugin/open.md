# DCloud开放平台DSP对接规范
# DCloud open platform DSP docking specification

名词解释：
Glossary:

- DSP：developer service provider，为开发者提供服务的三方厂商
- DSP: developer service provider, a third-party manufacturer that provides services for developers


## 开发者服务商（DSP）入驻DCloud开放平台
## Developer service provider (DSP) enters the DCloud open platform
- DSP在DCloud开放平台[https://open.dcloud.net.cn/](https://open.dcloud.net.cn/)注册账号，需企业实名认证。
- DSP registers an account on the DCloud open platform [https://open.dcloud.net.cn/](https://open.dcloud.net.cn/), which requires enterprise real-name authentication.
- 注册成功后，由DCloud分配账号级`dspId`，`dspSecret`。
- After successful registration, DCloud will assign account-level `dspId`, `dspSecret`.

## DSP配置开户所需信息
## DSP configuration information required for account opening

DSP入驻DCloud开放平台后，需配置希望获取开发者哪些信息，以及是否支持个人用户开户：
After the DSP enters the DCloud open platform, it needs to configure what information it wants to obtain from the developer, and whether it supports individual user account opening:
- 可选信息：`email`，`phone`，`realname`，`nickname`，`identity`（个人为身份证号、企业为营业执照），`bankInfo`（开户行，开户名称，银行账号）
- Optional information: `email`, `phone`, `realname`, `nickname`, `identity` (personal ID number, business license), `bankInfo` (bank, account name, bank account number)
- 是否支持个人用户
- Whether to support individual users
- 账号接口地址，用于接受DCloud开放平台同步过来的用户信息（邮箱、手机号、实名信息等）；API接口定义见下文。
- Account interface address, which is used to accept user information (email, mobile phone number, real name information, etc.) synchronized by the DCloud open platform; see the API interface definition below.

## DSP注册SDK
## DSP Registration SDK
- DSP按照uniapp插件规范开发相关插件，并发布到[插件市场](https://ext.dcloud.net.cn)；
- DSP develops relevant plug-ins according to the uniapp plug-in specification, and releases them to [Plug-in Market](https://ext.dcloud.net.cn);
- 注册SDK产品，补充完善以下信息：
- Register the SDK product and complete the following information:
	- SDK支持的平台，如app-android, app-ios, mp-weixin等；
	- Platforms supported by the SDK, such as app-android, app-ios, mp-weixin, etc.;
	- 各平台开通服务时，需要的应用信息字段（区分必填、选填；如应用名称、包名、证书摘要等）；
	- Application information fields required when opening services on each platform (distinguish between mandatory and optional; such as application name, package name, certificate summary, etc.);
	- 插件市场的插件ID（必填）；
	- Plugin ID of the plugin marketplace (required);
	- 是否支持测试包名、测试证书；
	- Whether to support test package name and test certificate;
	- 各平台的备注信息（在DCloud开放平台向用户展示，可以添加SDK文档链接等）
	- Remarks of each platform (shown to users on the DCloud open platform, you can add links to SDK documents, etc.)
	- 录入DSP API接口地址。API接口定义见下文。
	- Enter the DSP API interface address. API interface definition see below.
	- 创建应用、修改应用接口返回参数的字段名称、描述信息、在原生平台需要标识保存在`AndroidManifest`、`plist`的位置
	- Create an application, modify the field name and description information of the return parameters of the application interface, and save the identification in the location of `AndroidManifest` and `plist` on the native platform
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
## Developers open an account with DSP with one click

开发者可在DCloud系统中，向DSP平台发起账号注册、修改、注销等流程。
Developers can initiate account registration, modification, cancellation and other processes to the DSP platform in the DCloud system.

具体流程为：
The specific process is:
1. 开发者登录DCloud系统
1. The developer logs into the DCloud system
2. 选择需要开户的DSP平台
2. Select the DSP platform that needs to open an account
3. 开发者授权可向DSP同步的个人信息（手机号、邮箱、实名信息等）
3. The developer authorizes the personal information that can be synchronized to the DSP (mobile phone number, email address, real name information, etc.)
4. DCloud系统通过接口方式请求DSP平台，将用户信息发送过去
4. The DCloud system requests the DSP platform through the interface to send the user information to it
5. DSP平台返回操作结果（如：注册成功、失败以及失败原因等）
5. The DSP platform returns the operation result (such as: registration success, failure and failure reason, etc.)


### 注册 
### register 

- 接口示例
- interface example
/auth/register

- 请求参数
- request parameters
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
- return parameters
```json
{
	"errCode": 0,
	"errMsg": "success"
}
```

### 同步用户信息
### Synchronize user information
接口同注册接口。
The interface is the same as the registration interface.

### 注销账号
### Logout
开发者通过一键登录，在DSP平台中注销。
Developers log in with one click and log out in the DSP platform.

## 开发者一键登录DSP平台
## Developers log in to the DSP platform with one click

开发者登录DCloud系统后，可一键登录DSP平台，避免二次登录，优化体验。
After logging in to the DCloud system, developers can log in to the DSP platform with one click, avoiding secondary logins and optimizing the experience.

一键登录分为两个步骤：
One-click login is divided into two steps:
1. DCloud平台通过接口请求DSP平台，获取authToken
1. The DCloud platform requests the DSP platform through the interface to obtain the authToken
2. DCloud平台通过authToken，跳转DSP平台系统
2. The DCloud platform jumps to the DSP platform system through authToken

### 获取authToken
### Get authToken
- 接口示例
- interface example
/auth/token

- 请求参数
- request parameters
```json
{
	"dcloudOpenUid": "",
	"timestamp": 1633665031,
}
```

- 返回参数
- return parameters
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
### One-click login
- 说明：通过authToken可免登录打开DSP平台。DSP解析dspId,authToken，实现DSP平台自登录。
- Description: The DSP platform can be opened without login through authToken. DSP parses dspId and authToken to realize self-login of DSP platform.
- 跳转DSP平台地址示例，如：`https://dspdomain.com?dspId=xxx&authToken=xxx`
- Example of jumping to DSP platform address, such as: `https://dspdomain.com?dspId=xxx&authToken=xxx`

## 开发者向DSP注册应用
## The developer registers the application with the DSP

开发者可在DCloud系统中，向DSP平台发起应用注册、修改、删除流程。
Developers can initiate application registration, modification, and deletion processes to the DSP platform in the DCloud system.

### 创建应用
### Create the application
- 接口示例
- interface example
/app/create

- 请求参数
- request parameters
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
- return parameters
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
### Modify application information

**注意：** 修改应用信息时，传递的是全量数据。如果某个平台以前开通过，在修改时没有传递，表明开发者需要删除该平台的配置。
**Note:** When modifying application information, the full amount of data is transferred. If a certain platform has been approved before, but it is not transmitted when it is modified, it means that the developer needs to delete the configuration of the platform.

- 接口示例
- interface example
/app/modify

- 请求参数
- request parameters
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
- return parameter
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
### Delete application
- 接口示例
- interface example
/app/delete

- 请求参数
- request parameters
```json
{
	"pluginId": "",
	"authToken": "",
	"dspAppid": "",
	"timestamp": 1633665031,
}
```

- 返回参数
- return parameters
```json
{
	"errCode": 0,
	"errMsg": "success",
}
```


## DSP使用DCloud账号登录（OAuth协议)
## DSP uses DCloud account to log in (OAuth protocol)
完整文档参考：[https://ask.dcloud.net.cn/article/38005](https://ask.dcloud.net.cn/article/38005)
Complete document reference: [https://ask.dcloud.net.cn/article/38005](https://ask.dcloud.net.cn/article/38005)

### HBuilderX插件
![](https://ask.dcloud.net.cn/uploads/article/20201110/2514e1ec371bdebbb9a4111052939720.png)

### Web平台
![](https://ask.dcloud.net.cn/uploads/article/20220914/3bc9cb477832756cc727f3c550b4fcd0.jpg)

## 附录
## Appendix

### 接口数据传输规范
### Interface data transmission specification
#### 编码方式
#### Encoding
- 本API文档所涉及接口均遵循HTTP协议；
- The interfaces involved in this API document follow the HTTP protocol;
- 所有请求的ContentType在不明确指定的情况下均为application/x-www-form-urlencoded；
- The ContentType of all requests is application/x-www-form-urlencoded unless explicitly specified;
- 所有返回的ContentType在不明确指定的情况下均为application/json；
- All returned ContentTypes are application/json unless specified explicitly;
- 若无特殊说明或响应头中的Content-Type未指定编码，请求和响应中的字符编码均使用 UTF-8（无 BOM 头）。
- Unless otherwise specified or the Content-Type in the response header does not specify an encoding, the character encoding in both the request and the response uses UTF-8 (without the BOM header).

#### HTTP请求方式
#### HTTP request method
如无特殊说明，API请求的HTTP Method均为POST 
Unless otherwise specified, the HTTP Method of the API request is POST

#### URL定义
#### URL definition
URL请求域名由DSP提供，协议：必须使用HTTPS。本文接口详述中使用的请求URL均为示例，实际上线时的URL以DSP提供的为准。
URL request domain name is provided by DSP, protocol: HTTPS must be used. The request URLs used in the interface details in this article are examples, and the actual URLs when going online are subject to those provided by the DSP.

#### 请求参数
#### Request parameters
接口中描述的请求参数全部加密传输。请求参数只包含以下字段：
All request parameters described in the interface are transmitted encrypted. The request parameters only contain the following fields:

|名称	|类型	|必填	|描述												|
|Name |Type |Required |Description |
|--		|--		|--		|--													|
|dspId	|int	|是		|DSP在DCloud开放平台注册账号后，DCloud返回的dspId	|
| dspId | int | Yes | The dspId returned by DCloud after the DSP registers an account on the DCloud open platform |
|data	|string	|是		|各接口中定义的json string加密后的数据，加密数据见下文描述		|
| data | string | Yes | the data encrypted by the json string defined in each interface, and the encrypted data is described below |

#### 接口响应
#### Interface response
- HTTP状态码
- HTTP status code

支持HTTP标准状态码，具体如下：
Supports HTTP standard status codes, as follows:

|状态码	|名称				|描述														|
|Status Code |Name |Description |
|--		|--					|--															|
|200	|成功				|当 API 请求被正确处理，且能按设计获取结果时，返回该状态码；|
| 200 | Success | When the API request is processed correctly and the result can be obtained as designed, this status code is returned;|
|4xx	|接口调用方端错误	|由接口调用方端原因造成的错误								|
| 4xx | Error on the caller side of the interface | Error caused by a cause on the caller side of the interface |
|5xx	|DSP服务器端错误	|DSP API或其下层服务发生内部错误							|
| 5xx | DSP server-side error | An internal error occurred in the DSP API or its underlying services |

- HTTP Header

接口DSP API响应的Content-Type应为application/json。 
The Content-Type of the interface DSP API response should be application/json.

- HTTP Body

响应的JSON数据中包含三部分内容，分别为状态码、返回信息和数据，如下表所示：
The response JSON data contains three parts, which are status code, return information and data, as shown in the following table:

|名称	|类型		|必填	|描述										|
|Name |Type |Required |Description |
|--		|--			|--		|--											|
|errCode|int		|是		|状态码： 0表示成功；其它表示错误			|
| errCode| int | yes | status code: 0 means success; other means error |
|errMsg	|string		|是		|返回信息：若有错误，此字段为详细的错误信息	|
| errMsg | string |Yes |Return information: If there is an error, this field is the detailed error message |
|data	|json object|否		|响应数据。此字段加密传输，加密前为json string。接口无需返回数据时，此字段为空。	|
| data | json object | no | response data. This field is encrypted for transmission, and it is a json string before encryption. When the interface does not need to return data, this field is empty. |

#### 数据加密算法
#### Data encryption algorithm
所有要求加密的字段均采用AES256加密算法进行加密。在DSP注册账号后，由DCloud开放平台提供加密的密钥`dspSecret`。
All fields that require encryption are encrypted using the AES256 encryption algorithm. After the DSP registers an account, the encrypted key `dspSecret` will be provided by the DCloud open platform.

加密算法：AES256
Encryption algorithm: AES256
加密模式：CBC
Encryption mode: CBC
填充方式：Pkcs7 | Pkcs5
Filling method: Pkcs7 | Pkcs5
