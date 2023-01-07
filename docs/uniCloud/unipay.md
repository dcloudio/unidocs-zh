> 本文档为`uni-pay 1.x`版本文档。适用于老项目。
> 新项目请另行查阅 [uni-pay 2.x 版本文档](uniCloud/uni-pay.md)。

## 简介
## Introduction

`unipay`为`uniCloud`开发者提供了简单、易用、统一的支付能力封装。让开发者无需研究支付宝、微信等支付平台的后端开发、无需为它们编写不同代码，拿来即用，屏蔽差异。
`unipay` provides a simple, easy-to-use and unified payment capability package for `uniCloud` developers. So that developers do not need to study the back-end development of Alipay, WeChat and other payment platforms, do not need to write different codes for them, use it immediately, and shield the differences.

`uni-app`前端已经封装的全端支付 api `uni.requestPayment`，现在服务端也封装好了`unipay for uniCloud`，从此开发者可以极快的完成前后一体的支付业务。
The front-end of `uni-app` has encapsulated the full-end payment api `uni.requestPayment`, and now the server side has also encapsulated `unipay for uniCloud`, from now on, developers can complete the front and back payment services extremely quickly.

目前已封装 App 端（微信支付和支付宝支付）、微信小程序、支付宝小程序的支付能力。
At present, the payment capabilities of the App terminal (WeChat payment and Alipay payment), WeChat applet, and Alipay applet have been packaged.

`unipay`是开源 sdk，可放心使用。本插件还包含示例工程，配置自己在微信和支付宝申请的相关配置后即可运行。
`unipay` is an open source sdk and can be used with confidence. This plug-in also includes example projects, which can be run after configuring the relevant configuration applied for by WeChat and Alipay.

为了更好的体验支付流程可以在插件市场导入`unipay`的示例项目快速体验，[插件市场 unipay](https://ext.dcloud.net.cn/plugin?id=1835)。
In order to better experience the payment process, you can quickly experience the example project of `unipay` in the plugin market, [Plugin Market unipay](https://ext.dcloud.net.cn/plugin?id=1835).

插件市场还有基于uniPay再次封装的模板，前端支付、管理端订单管理均已写好，拿去就用，见：[BaseCloud - 统一下单支付业务模块](https://ext.dcloud.net.cn/plugin?id=2668)
There are also templates repackaged based on uniPay in the plug-in market. Front-end payment and management-side order management have been written and used. See: [BaseCloud - Unified Order Payment Service Module](https://ext.dcloud.net. cn/plugin?id=2668)

**须知**
**Notice**

- unipay 对入参和返回值均做了驼峰转化，开发者在对照微信支付或者支付宝支付对应的文档时需要注意。
- unipay has done hump conversion for input parameters and return values. Developers need to pay attention when comparing the documents corresponding to WeChat payment or Alipay payment.
- 特殊参数`appId`、`mchId`需注意大小写
- Special parameters `appId`, `mchId` need to pay attention to case
- 所有金额被统一为以分为单位（避免浮点误差）
- All amounts are unified to cents (to avoid floating point errors)
- 为避免无关参数干扰此文档仅列举必填参数，其余参数请参照[微信支付-小程序](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_1)、[微信支付-App](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_1)、[支付宝支付-小程序](https://opendocs.alipay.com/apis/api_1/alipay.trade.create)、[支付宝支付-App](https://opendocs.alipay.com/apis/api_1/alipay.trade.app.pay)
- In order to avoid the interference of irrelevant parameters, this document only lists the required parameters. For other parameters, please refer to [WeChat Payment - Mini Program](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php? chapter=9_1), [WeChat Payment-App](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_1), [Alipay Payment-Mini Program](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_1) ://opendocs.alipay.com/apis/api_1/alipay.trade.create), [Alipay Payment-App](https://opendocs.alipay.com/apis/api_1/alipay.trade.app.pay)
- 微信支付沙箱环境不支持小程序支付，另外此沙箱环境只可以跑微信提供的测试用例不可以随意测试
- WeChat payment sandbox environment does not support applet payment, in addition, this sandbox environment can only run the test cases provided by WeChat and cannot be tested at will
- 无论是微信还是支付宝，沙箱环境都不确保稳定，如果使用沙箱的过程中遇到疑难问题建议切换成正式环境测试
- Whether it is WeChat or Alipay, the sandbox environment is not guaranteed to be stable. If you encounter difficult problems in the process of using the sandbox, it is recommended to switch to the formal environment test

**问题排查指引**
**Troubleshooting Guidelines**

- [支付宝支付蚂蚁技术支持](https://openclub.alipay.com/club/history/read/7695)
- [Alipay payment ant technical support](https://openclub.alipay.com/club/history/read/7695)

## 引入 unipay
## Introducing unipay

开发者可以自行选择是从插件市场导入还是从 npm 安装，引入方式略有不同，请看下面示例
Developers can choose whether to import from the plugin market or install from npm. The import method is slightly different. Please see the example below

```js
// 插件市场导入
// plugin market import
const unipay = require('uni-pay')

// npm安装
// npm install
const unipay = require('@dcloudio/unipay')
```

**注意**
**Notice**

- 插件市场导入的用法请参考[云函数公用模块](https://uniapp.dcloud.net.cn/uniCloud/cf-common)
- Please refer to [Cloud Function Common Module](https://uniapp.dcloud.net.cn/uniCloud/cf-common) for the usage of plugin market import

## 初始化@init
## Initialize @init

进行初始化操作返回 unipay 实例
### 微信支付V3
> 新增于 ```uni-pay 1.1.0```

**入参说明**

|          参数名	          |  类型		| 必填	 | 默认值												  |        说明											         |
|:----------------------:| :-----:	|:--:|:----------------:|:----------------------------:|
|        appId		         | String	| 是	 |  -													  |    当前应用在对应支付平台的 appId				    |
|        mchId		         | String	| 是	 |  -													  |        商户号										         |
|        v3Key		         | String	| 是	 |  -													  |     API v3 密钥										      |
|     appCertPath		      | String	| 是	  |  -													  |     商户 API 证书文件路径（文件路径与字符串二选一）										      |
|    appCertContent		    | String	| 是	 |  -													  |     商户 API 证书字符串（文件路径与字符串二选一）										      |
|  appPrivateKeyPath		   | String	| 是	 |  -													  |     商户 API 私钥文件路径（文件路径与字符串二选一）										      |
| appPrivateKeyContent		 | String	| 是	 |  -													  |     商户 API 私钥字符串（文件路径与字符串二选一）										      |
|        timeout	        | Number	| 否	 | 5000												 |      请求超时时间，单位：毫秒						      |

```js
const path = require('path'); // 引入内置的path模块

const unipayIns = unipay.initWeixinV3({
  appId: 'your appId',
  mchId: 'your mchId',
  v3Key: 'you parterner key',
  appCertPath: path.resolve(__dirname, 'your appCertPath'),
  // appCertContent: "", 
  appPrivateKeyPath: path.resolve(__dirname, 'your appPrivateKeyPath'),
  // appPrivateKeyContent: "",
})
```
**说明**

证书字符串与私钥字符串格式要求：
- 证书字符串不应包含`-----BEGIN CERTIFICATE-----` 与 `-----END CERTIFICATE-----`，并且证书内容不能换行
- 私钥字符串不应包含`-----BEGIN PRIVATE KEY-----` 与 `-----END PRIVATE KEY-----`，并且私钥内容不能换行

例：
```
// 证书内容
-----BEGIN CERTIFICATE-----
your certificate content...
-----END CERTIFICATE-----

// 证书字符串
appCertContent = 'your certificate content...'
```
### 微信支付v2

**入参说明**
**Introduction to parameters**

|   参数名	    |  类型		|  必填	|  默认值												  |        说明											         |
|:---------:| :-----:	| :----:|:-----------------:|:----------------------------:|
|  appId		  | String	|   是	|  -													   |    当前应用在对应支付平台的 appId				    |
|  mchId		  | String	|   是	|  -													   |        商户号										         |
| subAppId  | String	|   否	|  -													   |       子商户appId								       |
| subMchId  | String	|   否	|  -													   |        子商户号									         |
|   key		   | String	|   是	|  -													   |     支付商户 key （API密钥）				     |
|   pfx		   | String&#124;Buffer|                   使用退款功能必填|    -									     |    微信支付商户 API 证书，主要用于退款	     |
| timeout	  | Number	|   否	| 5000												  |      请求超时时间，单位：毫秒						      |
| signType	 | String	|   否	| MD5													  |        签名类型										        |
| sandbox	  | Boolean	|   否	| false												 |       是否启用沙箱环境								       |

```js
const unipayIns = unipay.initWeixin({
  appId: 'your appId',
  mchId: 'your mchId',
  key: 'you parterner key',
  pfx: fs.readFileSync('/path/to/your/pfxfile'), // 建议以p12文件绝对路径进行读取，使用微信退款时需要
})


// 以证书放在云函数index.js同级的cert目录下为例，index.js内可以按照下面这个写
// Take the certificate placed in the cert directory of the same level as the cloud function index.js as an example, the index.js can be written as follows
const fs  = require('fs');  
const path = require('path');  
const unipayIns = unipay.initWeixin({
  appId: 'your appId',
  mchId: 'your mchId',
  key: 'you parterner key',
  pfx: fs.readFileSync(path.resolve(__dirname, 'cert/xxx.p12'))  
})
```

### 支付宝支付
### pay by AliPay

**入参说明**
**Introduction to parameters**

|     参数名						|  类型		| 必填|                        默认值												|                  说明									|
| Parameter Name | Type | Required | Default Value | Description |
| :-------------:				| :-----:	| :--:| :--------------------------------------------------:| :------------------------------------:|
|   appId								| String	|  是	|                          -													|     当前应用在对应支付平台的 appId		|
| appId | String | Yes | - | The appId of the current application on the corresponding payment platform |
|   mchId								| String	|   是|                          -													|                 商户号								|
| mchId | String | Yes | - | Merchant ID |
|   privateKey					| String	|  是	|                          -													|             应用私钥字符串						|
| privateKey | String | yes | - | application private key string |
| alipayPublicKey				| String	|  否	|                          -													|          支付宝公钥，验签使用					|
| alipayPublicKey | String | No | - | Alipay public key, used for signature verification |
|     keyType						| String	|  否	|                        PKCS8												|           应用私钥字符串类型					|
| keyType | String | No | PKCS8 | Application Private Key String Type |
|     timeout						| Number	|  否	|                         5000												|        请求超时时间，单位：毫秒				|
| timeout | Number | No | 5000 | Request timeout, unit: milliseconds |
|    signType						| String	|  否	|                         RSA2												|                签名类型								|
| signType | String | No | RSA2 | Signature Type |
|     sandbox						| Boolean	|  否	|                        false												|            是否启用沙箱环境						|
|   alipayRootCertPath	| String	|  否	| -																										| `1.0.6+`，支付宝根证书文件路径				|
| alipayRootCertPath | String | No | - | `1.0.6+`, Alipay root certificate file path |
|   appCertPath					| String	|  否	| -																										| `1.0.6+`，应用公钥证书文件路径				|
| appCertPath | String | No | - | `1.0.6+`, path to the application public key certificate file |
|   alipayPublicCertPath| String	|  否	| -																										| `1.0.6+`，支付宝公钥证书文件路径			|
| alipayPublicCertPath| String | No | - | `1.0.6+`, Alipay public key certificate file path |

```js
const unipayIns = unipay.initAlipay({
  appId: 'your appId',
  mchId: 'your mchId',
  privateKey: 'your privateKey',
  // 如果不使用证书（普通公钥模式）需要alipayPublicKey
  // If you don't use a certificate (normal public key mode), you need alipayPublicKey
  alipayPublicKey: 'you alipayPublicKey', // 使用支付时需传递此值做返回结果验签
  // 如果使用证书需要传alipayRootCertPath、appCertPath、alipayPublicCertPath
  // If you use a certificate, you need to pass alipayRootCertPath, appCertPath, alipayPublicCertPath
  alipayRootCertPath: path.join(__dirname,'../fixtures/alipayRootCert.crt'),
  appCertPath: path.join(__dirname,'../fixtures/appCertPublicKey.crt'),
  alipayPublicCertPath: path.join(__dirname,'../fixtures/alipayCertPublicKey_RSA2.crt'),
})
```

**常见问题**
**common problem**

- 支付宝支付时遇到`error:0D0680A8:asn1 encoding routines:ASN1_CHECK_TLEN:wrong tag`类似的错误时请确认一下自己的私钥格式，如果不是PKCS8需要在初始化时传入keyType参数，值为对应的私钥格式
- When you encounter errors like `error:0D0680A8:asn1 encoding routines:ASN1_CHECK_TLEN:wrong tag` when paying with Alipay, please confirm your private key format. If it is not PKCS8, you need to pass in the keyType parameter during initialization, and the value is the corresponding private key. key format


### 苹果内购支付
### Apple in-app purchase payment

**入参说明**
**Introduction to parameters**

|     参数名						|  类型		| 必填|                        默认值												|                  说明									|
| Parameter Name | Type | Required | Default Value | Description |
| :-------------:				| :-----:	| :--:| :--------------------------------------------------:| :------------------------------------:|
|     sandbox			    	| Boolean	|  否 |                       false							|            是否启用沙箱环境 			|
| sandbox | Boolean | no | false | whether to enable sandbox environment |
|     password		| String	|  否	|-				|  App 专用共享密钥，App 专用共享密钥是用于接收此 App 自动续期订阅收据的唯一代码。如果您要将此 App 转让给其他开发者或不想公开主共享密钥，建议使用 App 专用共享密钥。非自动续订场景不需要此参数|
| password | String | No |- | App-specific shared secret, which is the unique code used to receive a receipt for this app's auto-renewing subscription. If you are transferring this app to another developer or do not want to disclose the master shared key, it is recommended to use the app-specific shared key. This parameter is not required for non-auto-renewal scenarios|
|     timeout			    	| Number	|  否 |                       5000							|      请求超时时间，单位：毫秒           |
| timeout | Number | No | 5000 | Request timeout, unit: milliseconds |


```js
const unipayIns = unipay.initAppleIapPayment({
  sandbox: true,
  password: 'your password',
})
```

## Api 列表
## Api list

### 获取支付参数
### Get payment parameters

`unipayIns.getOrderInfo`，此接口仅支持微信小程序、支付宝小程序、App 平台
`unipayIns.getOrderInfo`, this interface only supports WeChat applet, Alipay applet, and App platform

**入参说明**
**Introduction to parameters**

|   参数名			|  类型	|                必填													| 默认值|                                    说明																																						|         支持平台				|
| Parameter Name | Type | Required | Default Value | Description |
| :--------:		| :----:| :--------------------------------:					| :----:| :------------------------------------------------------------------------:																				| :----------------------:|
|   openid			| String|支付宝小程序、微信小程序必填，App端支付不需要|   -		|通过对应 [uni-id](uni-id-summary.md) 接口进行获取，服务商模式应使用子商户获取的openid															| 支付宝小程序、微信小程序|
| openid | String|Required for Alipay applet and WeChat applet, not required for App-side payment | - | Obtained through the corresponding [uni-id](uni-id-summary.md) interface, the service provider model should use sub-merchant Obtained openid | Alipay applet, WeChat applet|
|  subject			| String|支付宝支付必填，微信支付时忽略此项						|   -		|订单标题																																																						|        支付宝支付				|
| subject | String|Alipay payment is required, this item is ignored for WeChat payment | - |Order title | Alipay payment |
|    body				| String|微信支付必填																	|   -		|商品描述																																																						|         微信支付				|
| body | String|Required for WeChat Pay | - |Product Description | WeChat Pay |
| outTradeNo		| String|必填																					|   -		|商户订单号,有长度限制（微信支付为32字符以内，支付宝为64字符以内）、只能包含字母、数字、下划线；需保证在商户端不重复|													|
| outTradeNo | String|Required | - |Merchant order number, there is a length limit (within 32 characters for WeChat payment, and 64 characters for Alipay), can only contain letters, numbers, and underscores; it must be ensured that it is not repeated on the merchant side| |
|  totalFee			| Number|必填																					|   -		|订单金额，单位：分																																																	| 支付宝小程序、微信小程序|
| totalFee | Number|Required | - |Order amount, unit: cents | Alipay applet, WeChat applet|
| notifyUrl			| String|必填																					|   -		|支付结果通知地址，**需要注意支付宝支付时退款也会通知到此地址，务必处理好自己的业务逻辑**														|													|
| spbillCreateIp| String|必填																					|   -		|客户端IP，云函数内可以通过`context.CLIENTIP`获取																																		|-												|
|     tradeType	      | String	| 是	  |  -												   | 交易类型；见下方 tradeType 的说明						 |
| sceneInfo			| Object|微信tradeType为MWEB时必填										|   -		|见下方sceneInfo的说明																																															|-												|
| sceneInfo | Object|Required when WeChat tradeType is MWEB | - |See the description of sceneInfo below |- |

**tradeType的说明**
**tradeType description**

tradeType支持以下选项
tradeType supports the following options

- JSAPI 	适用于：微信公众号支付、微信小程序支付、支付宝小程序支付
- JSAPI is applicable to: WeChat official account payment, WeChat applet payment, Alipay applet payment
- APP		适用于：支付宝、微信APP支付
- APP is applicable to: Alipay, WeChat APP payment
- NATIVE	适用于：支付宝、微信PC网站扫码支付
- NATIVE is applicable to: Alipay, WeChat PC website scan code payment
- MWEB		适用于：微信h5（非公众号）跳转微信页面支付（`新增于uni-pay 1.0.24`）
- MWEB is applicable to: WeChat h5 (non-public account) jump to WeChat page payment (`Added in uni-pay 1.0.24`)

**sceneInfo的说明**
**sceneInfo description**

微信支付tradeType为MWEB时需要传递以下格式的sceneInfo
When WeChat payment tradeType is MWEB, you need to pass sceneInfo in the following format

```js
{
	"h5Info": {
		"type": "Wap",
		"wapUrl": "https://pay.qq.com", // 开发者网站的网址
		"wapName": "腾讯充值" // 开发者网站名称
	}
}
```

**返回值说明**
**Return value description**

|  参数名   |  类型  |  说明  |                                支持平台                                |
| Parameter Name | Type | Description | Supported Platforms |
| :-------: | :----: | :----: | :--------------------------------------------------------------------: |
| orderInfo | Object | String | 客户端支付所需参数，直接返回给客户端即可，下面会介绍如何搭配客户端使用 |
| orderInfo | Object | String | The parameters required by the client for payment can be directly returned to the client. The following will introduce how to use it with the client |


**使用示例**
**Use example**

tradeType为NATIVE时直接将orderInfo.codeUrl转为二维码使用对应的客户端扫码支付即可
When the tradeType is NATIVE, directly convert orderInfo.codeUrl to QR code and use the corresponding client to scan the code to pay.

tradeType为MWEB时直接跳转到orderInfo.mwebUrl进行支付即可
When the tradeType is MWEB, you can directly jump to orderInfo.mwebUrl for payment

```js
// 云函数 - getOrderInfo
// cloud function - getOrderInfo
exports.main = async function (event,context) {
	let	orderInfo = await unipayIns.getOrderInfo({
		openid: 'user openid',
		subject: '订单标题', // 微信支付时不可填写此项
		body: '商品描述',
		outTradeNo: '商户订单号',
		totalFee: 1, // 金额，单位分
		notifyUrl: 'https://xxx.xx' // 支付结果通知地址
	})
	return {
		orderInfo
	}
}

// 客户端
// client
uniCloud.callFunction({
	name: 'getOrderInfo',
	success(res) {
		uni.requestPayment({
			// #ifdef APP-PLUS
			provider: selectedProvider, // App端此参数必填，可以通过uni.getProvider获取
			// #endif
			// #ifdef MP-WEIXIN
			...res.result.orderInfo,
			// #endif
			// #ifdef APP-PLUS || MP-ALIPAY
			orderInfo: res.result.orderInfo,
			// #endif
			...res.result.orderInfo
			success(){},
			fail(){}
		})
	}
})

// 二维码支付
// QR code payment
uniCloud.callFunction({
	name: 'getOrderInfo',
	success(res) {
    // 以二维码形式展示此内容
    // Display this content as a QR code
		console.log(res.result.orderInfo.codeurl)
	}
})
```

### 查询订单
### checking order

`unipayIns.orderQuery`, 根据商户订单号或者平台订单号查询订单信息，主要用于未接收到支付通知时可以使用此接口进行支付结果验证
`unipayIns.orderQuery`, query order information according to the order number of the merchant or the order number of the platform. It is mainly used to verify the payment result when the payment notification is not received.

**入参说明**
**Introduction to parameters**

|    参数名     |  类型  |          必填           | 默认值 |    说明    | 支持平台 |
| Parameter Name | Type | Required | Default Value | Description |
| :-----------: | :----: | :---------------------: | :----: | :--------: | :------: |
|  outTradeNo   | String | 和 transactionId 二选一 |   -    | 商户订单号 |     -     |
| outTradeNo | String | Choose between transactionId and transactionId | - | Merchant order number | - |
| transactionId | String |  和 outTradeNo 二选一   |   -    | 平台订单号 |     -     |
| transactionId | String | Choose one from outTradeNo | - | Platform order number | - |

**返回值说明**
**Return value description**

|       参数名			|  类型	|说明																																				|  支持平台   |
| :----------------:| :----:| :---------------------------------------------:														|:-------:|
|       appId				| String|平台分配的应用 ID																													|  微信支付   |
|       mchId				| String|商户号，（微信支付文档里面叫商户号：mch_id，支付宝支付叫卖家id：seller_id）|  微信支付   |
|     outTradeNo		| String|商户订单号																																	|   -		   |
|   transactionId		| String|平台订单号																																	|   -	    |
|     tradeState		| String| 订单状态，见下方订单状态说明																							|  					  |
|      totalFee			| Number|标价金额 ，单位：分																												|   -		   |
| settlementTotalFee| Number|应结订单金额，单位：分																											| 支付宝支付		 |
|      cashFee			| Number|现金支付金额，单位：分																											|   -		   |


**订单状态**
**Order Status**

微信支付： 
WeChat Pay:
SUCCESS—支付成功
SUCCESS—Successful payment
REFUND—转入退款
REFUND—Transfer to Refund
NOTPAY—未支付
NOTPAY—Not paid
CLOSED—已关闭
CLOSED—closed
REVOKED—已撤销（刷卡支付）
REVOKED—Revoked (card payment)
USERPAYING--用户支付中
USERPAYING--User is paying
PAYERROR--支付失败(其他原因，如银行返回失败)。
PAYERROR--payment failed (other reasons, such as bank return failure).

支付宝支付：
pay by AliPay:
USERPAYING（交易创建，等待买家付款）
USERPAYING (transaction created, waiting for buyer to pay)
CLOSED（未付款交易超时关闭，或支付完成后全额退款）
CLOSED (unpaid transactions are closed over time, or a full refund after payment is completed)
SUCCESS（交易支付成功）
SUCCESS (transaction payment successful)
FINISHED（交易结束，不可退款）
FINISHED (transaction closed, non-refundable)


**使用示例**
**Use example**

```js
exports.main = async function (event) {
  let res = await unipayIns.orderQuery({
    outTradeNo: 'outTradeNo',
  })
  return res
}
```

### 关闭订单
### Close order

`unipayIns.closeOrder`，用于交易创建后，用户在一定时间内未进行支付，可调用该接口直接将未付款的交易进行关闭，避免重复支付。
`unipayIns.closeOrder` is used for the user to make no payment within a certain period of time after the transaction is created. This API can be called to directly close the unpaid transaction to avoid repeated payment.

**注意**
**Notice**

- 微信支付：订单生成后不能马上调用关单接口，最短调用时间间隔为 5 分钟。
- WeChat payment: The order closing interface cannot be called immediately after the order is generated, and the shortest calling time interval is 5 minutes.

**入参说明**
**Introduction to parameters**

|    参数名     |  类型  |                        必填                         | 默认值 |    说明    |  支持平台  |
| Parameter Name | Type | Required | Default Value | Description |
| :-----------: | :----: | :-------------------------------------------------: | :----: | :--------: | :--------: |
|  outTradeNo   | String | 使用微信时必填，使用支付宝时和 transactionId 二选一 |   -    | 商户订单号 |      -      |
| outTradeNo | String | Required when using WeChat, choose either transactionId or transactionId when using Alipay | - | Merchant order number | - |
| transactionId | String |          使用支付宝时和 outTradeNo 二选一           |   -    | 平台订单号 | 支付宝支付 |
| transactionId | String | When using Alipay and outTradeNo choose one | - | Platform order number | Alipay payment |

**返回值说明**
**Return value description**

|    参数名     |  类型  |       说明        |  支持平台  |
| :-----------: | :----: | :---------------: |:------:|
|     appId     | String | 平台分配的应用 ID | 微信支付V2 |
|     mchId     | String |      商户号       | 微信支付V2 |
|  outTradeNo   | String |    商户订单号     | 支付宝支付  |
| transactionId | String |    平台订单号     | 支付宝支付  |

**使用示例**
**Use example**

```js
exports.main = async function (event) {
  let res = await unipayIns.closeOrder({
    outTradeNo: 'outTradeNo',
  })
  return res
}
```

### 撤销订单
### Cancel order

`unipayIns.cancelOrder`，**此接口仅支付宝支持**，支付交易返回失败或支付系统超时，调用该接口撤销交易。如果此订单用户支付失败，支付宝系统会将此订单关闭；如果用户支付成功，支付宝系统会将此订单资金退还给用户。 注意：只有发生支付系统超时或者支付结果未知时可调用撤销，其他正常支付的单如需实现相同功能请调用申请退款 API。提交支付交易后调用【查询订单 API】，没有明确的支付结果再调用【撤销订单 API】。
`unipayIns.cancelOrder`, **this interface is only supported by Alipay**, if the payment transaction fails or the payment system times out, call this interface to cancel the transaction. If the user fails to pay for this order, the Alipay system will close the order; if the user pays successfully, the Alipay system will return the order funds to the user. Note: Cancellation can only be called when the payment system times out or the payment result is unknown. If you need to implement the same function for other normal payment orders, please call the Refund Request API. After submitting the payment transaction, call [Query Order API], and call [Cancel Order API] if there is no clear payment result.

**入参说明**
**Introduction to parameters**

|    参数名     |  类型  |          必填           | 默认值 |    说明    |  支持平台  |
| Parameter Name | Type | Required | Default Value | Description |
| :-----------: | :----: | :---------------------: | :----: | :--------: | :--------: |
|  outTradeNo   | String | 和 transactionId 二选一 |   -    | 商户订单号 | 支付宝支付 |
| outTradeNo | String | Choose one from transactionId | - | Merchant order number | Alipay |
| transactionId | String |  和 outTradeNo 二选一   |   -    | 平台订单号 | 支付宝支付 |
| transactionId | String | Choose one from outTradeNo | - | Platform order number | Alipay |

**返回值说明**
**Return value description**

|    参数名     |  类型  |    说明    |  支持平台  |
| Parameter Name | Type | Description | Supported Platforms |
| :-----------: | :----: | :--------: | :--------: |
|  outTradeNo   | String | 商户订单号 | 支付宝支付 |
| outTradeNo | String | Merchant order number | Alipay payment |
| transactionId | String | 平台订单号 | 支付宝支付 |
| transactionId | String | Platform order number | Alipay payment |

**使用示例**
**Use example**

```js
exports.main = async function (event) {
  let res = await unipayIns.cancelOrder({
    outTradeNo: 'outTradeNo',
  })
  return res
}
```

### 申请退款
### Request a refund

`unipayIns.refund`,当交易发生之后一段时间内，由于买家或者卖家的原因需要退款时，卖家可以通过退款接口将支付款退还给买家。
`unipayIns.refund`, when the transaction needs to be refunded due to the buyer or the seller within a certain period of time, the seller can return the payment to the buyer through the refund interface.

**微信支付注意事项**
**WeChat payment precautions**

1. 交易时间超过一年的订单无法提交退款
1. Refunds cannot be submitted for orders that have been traded for more than one year
2. 微信支付退款支持单笔交易分多次退款，多次退款需要提交原支付订单的商户订单号和设置不同的退款单号。申请退款总金额不能超过订单金额。 一笔退款失败后重新提交，请不要更换退款单号，请使用原商户退款单号
2. WeChat payment refund supports multiple refunds for a single transaction. For multiple refunds, you need to submit the merchant order number of the original payment order and set a different refund order number. The total amount requested for a refund cannot exceed the order amount. Resubmit after a refund fails, please do not change the refund order number, please use the original merchant refund order number
3. 请求频率限制：150qps，即每秒钟正常的申请退款请求次数不超过 150 次，错误或无效请求频率限制：6qps，即每秒钟异常或错误的退款申请请求不超过 6 次
3. Request frequency limit: 150qps, that is, the number of normal refund requests per second is no more than 150, error or invalid request frequency limit: 6qps, that is, the abnormal or wrong refund request is no more than 6 times per second
4. 每个支付订单的部分退款次数不能超过 50 次
4. Partial refunds for each paid order cannot exceed 50 times
5. 如果同一个用户有多笔退款，建议分不同批次进行退款，避免并发退款导致退款失败
5. If there are multiple refunds for the same user, it is recommended to refund in different batches to avoid concurrent refunds and cause refund failures

**入参说明**
**Introduction to parameters**

|    参数名		|  类型	|        必填				         | 默认值|     说明											| 支持平台	  |
| :-----------:	| :----:|:---------------------:| :----:| :----------:										|:------:|
|  outTradeNo	| String| 和 transactionId 二选一		 |   -	|  商户订单号										|  -		   |
| transactionId	| String|  和 outTradeNo 二选一		   |   -	|  平台订单号										|  -		   |
|  outRefundNo	| String|    微信支付必填，支付宝支付选填	    |   -	| 商户退款单号										|   -	   |
|   totalFee	| Number|       微信支付必填			       |   -	|  订单总金额										|  -			  |
|   refundFee	| Number|        必填				         |   -	|  退款总金额										| 微信支付	  |
| refundFeeType	| String|     微信支付V3必填				      |   -	|   货币种类										|   微信支付V3		   |
|  refundDesc	| String|        选填				         |   -	|   退款原因										|  -		   |
|   notifyUrl	| String|    微信支付选填，支付宝不支持	     |   -	| 退款通知 url，支付宝会通知获取支付参数时的通知地址| 微信支付	  |

**返回值说明**
**Return value description**

|    参数名     |  类型  |     说明     | 支持平台 |
| Parameter Name | Type | Description | Supported Platforms |
| :-----------: | :----: | :----------: | :------: |
|  outTradeNo   | String |  商户订单号  |     -     |
| outTradeNo | String | Merchant order number | - |
| transactionId | String |  平台订单号  |     -     |
| transactionId | String | Platform order number | - |
|  outRefundNo  | String | 商户退款单号 | 微信支付 |
| outRefundNo | String | Merchant Refund Number | WeChat Pay |
|   refundId    | String | 平台退款单号 |     -     |
| refundId | String | Platform refund order number | - |
|   refundFee   | Number |  退款总金额  |     -     |
| refundFee | Number | Total refund amount | - |
| cashRefundFee | Number | 现金退款金额 |     -     |
| cashRefundFee | Number | Cash refund amount | - |

**使用示例**
**Use example**

```js
exports.main = async function (event) {
  let res = await unipayIns.refund({
    outTradeNo: '商户订单号',
    outRefundNo: '商户退款单号', // 支付宝可不填此项
    totalFee: 1, // 订单总金额，支付宝可不填此项
    refundFee: 1, // 退款总金额
  })
  return res
}
```

### 查询退款
### Query refund

`unipayIns.refundQuery`，提交退款申请后，通过调用该接口查询退款状态。
`unipayIns.refundQuery`, after submitting a refund application, query the refund status by calling this API.

**入参说明**
**Introduction to parameters**

|    参数名     |  类型  |                    必填                     | 默认值 |                                        说明                                        | 支持平台 |
| :-----------: | :----: |:-----------------------------------------:| :----: | :--------------------------------------------------------------------------------: | :------: |
|  outTradeNo   | String | 微信支付V2四选一，支付宝和 transactionId 二选一 |   -    |                                     商户订单号                                     |     -     |
| transactionId | String |       微信支付V2四选一，支付宝和 outTradeNo 二选一       |   -    |                                     平台订单号                                     |     -     |
|  outRefundNo  | String |              微信支付V3必填，微信支付V2四选一，支付宝必填              |   -    |                                    商户退款单号                                    |     -     |
|   refundId    | String |                 微信支付V2四选一                 |   -    |                                    平台退款单号                                    | 微信支付 |
|    offset     | Number |                 微信支付V2选填                  |   -    | 偏移量，当部分退款次数超过 10 次时可使用，表示返回的查询结果从这个偏移量开始取记录 |      -    |

**注意**
**Notice**

- `outRefundNo`为使用支付宝请求退款接口时，传入的商户退款单号。如果在退款请求时未传入，则该值为创建交易时的商户订单号即`outTradeNo`
- `outRefundNo` is the incoming merchant refund order number when using Alipay to request a refund interface. If not passed in the refund request, the value is the merchant's order number when the transaction was created, i.e. `outTradeNo`

**返回值说明**
**Return value description**

|     参数名     |              类型               |          说明          | 支持平台  |
| :------------: | :-----------------------------: |:--------------------:|:-----:|
|   outTradeNo   |             String              |        商户订单号         |   -   |
| transactionId  |             String              |        平台订单号         |   -   |
|    totalFee    |             Number              |         订单金额         |   -   |
|    refundId    |             String              | 平台退款单号，仅支付宝、微信支付V3返回 |   -   |
|   refundFee    |             Number              |        退款总金额         |   -   |
|   refundDesc   |             String              |         退款理由         |   -   |
|   refundList   |     Array&lt;refundItem&gt;     |   分笔退款信息，仅微信支付V2返回   | 微信支付V2 |
| refundRoyaltys | Array&lt;refundRoyaltysItem&gt; |    退分账明细信息，仅支付宝返回    | 支付宝支付 |

**refundItem 说明**
**refundItem description**

|       参数名        |          类型           |                                                                                                           说明                                                                                                           | 支持平台 |
| Parameter name | Type | Description | Supported platforms |
| :-----------------: | :---------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------: |
|     outRefundNo     |         String          |                                                                                                       商户退款单号                                                                                                       |     -     |
| outRefundNo | String | Merchant refund order number | - |
|      refundId       |         String          |                                                                                                       平台退款单号                                                                                                       |     -     |
| refundId | String | Platform refund order number | - |
|    refundChannel    |         String          |                                           退款渠道，ORIGINAL—原路退款，BALANCE—退回到余额，OTHER_BALANCE—原账户异常退到其他余额账户，OTHER_BANKCARD—原银行卡异常退到其他银行卡                                           |          |
| refundChannel | String | Refund channel, ORIGINAL—refund on the same route, BALANCE—return to the balance, OTHER_BALANCE—return to another account with an abnormal balance from the original account, OTHER_BANKCARD—return to another bank card in an abnormal way from the original bank card | |
|      refundFee      |         Number          |                                                                                                       申请退款金额                                                                                                       |     -     |
| refundFee | Number | Refund amount requested | - |
| settlementRefundFee |         Number          |                                                                      退款金额,退款金额=申请退款金额-非充值代金券退款金额，退款金额&lt;=申请退款金额                                                                      |          |
| settlementRefundFee | Number | Refund amount, Refund amount = Refund amount applied for - Non-recharge voucher refund amount, Refund amount &lt;= Refund amount applied | |
|    refundStatus     |         String          | 退款状态，SUCCESS—退款成功，REFUNDCLOSE—退款关闭，PROCESSING—退款处理中，CHANGE—退款异常，退款到银行发现用户的卡作废或者冻结了，导致原路退款银行卡失败，可前往商户平台（pay.weixin.qq.com）-交易中心，手动处理此笔退款。 |          |
| refundStatus | String | Refund status, SUCCESS—refund is successful, REFUNDCLOSE—refund is closed, PROCESSING—refund processing, CHANGE—refund is abnormal, the bank found that the user’s card is invalid or frozen, leading to the same way If the refund of the bank card fails, you can go to the merchant platform (pay.weixin.qq.com) - transaction center to process the refund manually. | |
|   couponRefundFee   |         Number          |                                                                                                     总代金券退款金额                                                                                                     |     -     |
| couponRefundFee | Number | Total coupon refund amount | - |
|  couponRefundCount  |         Number          |                                                                                                    退款代金券使用数量                                                                                                    |     -     |
| couponRefundCount | Number | Number of refund coupons used | - |
|    refundAccount    |         String          |                                                                                                       退款资金来源                                                                                                       |     -     |
| refundAccount | String | Source of refund funds | - |
|  refundRecvAccout   |         String          |                                                                                                       退款入账账户                                                                                                       |     -     |
| refundRecvAccout | String | Refund credit account | - |
|  refundSuccessTime  |         String          |                                                                                                       退款成功时间                                                                                                       |     -     |
| refundSuccessTime | String | Refund success time | - |
|     couponList      | Array&lt;couponItem&gt; |                                                                                                       分笔退款信息                                                                                                       |     -     |
| couponList | Array&lt;couponItem&gt; | Refund information by tranches | - |

**couponItem 说明**
**couponItem description**

|     参数名      |  类型  |        说明        | 支持平台 |
| Parameter Name | Type | Description | Supported Platforms |
| :-------------: | :----: | :----------------: | :------: |
|   couponType    | String |     代金券类型     |     -     |
| couponType | String | Coupon Type | - |
| couponRefundId  | String |   退款代金券 ID    |     -     |
| couponRefundId | String | Refund coupon ID | - |
| couponRefundFee | String | 单个代金券退款金额 |      -    |
| couponRefundFee | String | Refund amount of a single coupon | - |

**refundRoyaltysItem 说明**
**refundRoyaltysItem Description**

|   参数名    |  类型  |                                                                           说明                                                                            | 支持平台 |
| Parameter Name | Type | Description | Supported Platforms |
| :---------: | :----: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: | :------: |
| fundChannel | String |                                                                    交易使用的资金渠道                                                                     |     -     |
| fundChannel | String | The funding channel used by the transaction | - |
|  bankCode   | String |                                                                  银行卡支付时的银行代码                                                                   |     -     |
| bankCode | String | Bank code when paying by bank card | - |
|   amount    | Number |                                                                该支付工具类型所使用的金额                                                                 |     -     |
| amount | Number | Amount used by this payment instrument type | - |
| realAmount  | Number |                                                                     渠道实际付款金额                                                                      |     -     |
| realAmount | Number | The actual payment amount of the channel | - |
|  fundType   | String | 渠道所使用的资金类型,目前只在资金渠道(fund_channel)是银行卡渠道(BANKCARD)的情况下才返回该信息(DEBIT_CARD:借记卡,CREDIT_CARD:信用卡,MIXED_CARD:借贷合一卡) |     -     |
| fundType | String | The type of funds used by the channel. Currently, this information is only returned when the fund channel (fund_channel) is a bank card channel (BANKCARD) (DEBIT_CARD: debit card, CREDIT_CARD: credit card, MIXED_CARD: debit and credit in one card) | - |

**使用示例**
**Use example**

```js
exports.main = async function (event) {
  let res = await unipayIns.refundQuery({
    outTradeNo: '商户订单号',
    outRefundNo: '商户退款单号', // 支付宝必填
  })
  return res
}
```

### 下载交易账单
### Download transaction bill

`unipayIns.downloadBill`，商户可以通过该接口下载历史交易清单。**仅微信支付支持**
`unipayIns.downloadBill`, merchants can download the historical transaction list through this interface. **Only supported by WeChat Pay**

**注意：**
**Notice:**

1. 微信侧未成功下单的交易不会出现在对账单中。支付成功后撤销的交易会出现在对账单中，跟原支付单订单号一致；
1. Transactions that are not successfully placed on the WeChat side will not appear in the statement. After successful payment, the cancelled transaction will appear in the statement, which is consistent with the order number of the original payment order;
2. 微信在次日 9 点启动生成前一天的对账单，建议商户 10 点后再获取；
2. WeChat starts to generate the statement of the previous day at 9:00 the next day, and it is recommended that merchants obtain it after 10:00;
3. 对账单中涉及金额的字段单位为“元”。
3. The field unit of the amount involved in the statement is "yuan".
4. 对账单接口只能下载三个月以内的账单。
4. The statement interface can only download bills within three months.
5. 对账单是以商户号纬度来生成的，如一个商户号与多个 appid 有绑定关系，则使用其中任何一个 appid 都可以请求下载对账单。对账单中的 appid 取自交易时候提交的 appid，与请求下载对账单时使用的 appid 无关。
5. The statement is generated based on the latitude of the merchant number. If a merchant number is bound to multiple appids, any one of the appids can be used to request to download the statement. The appid in the statement is taken from the appid submitted at the time of the transaction and has nothing to do with the appid used when requesting to download the statement.

**入参说明**
**Introduction to parameters**

|  参数名  |  类型  | 必填 | 默认值 |                                                                                              说明                                                                                              | 支持平台 |
| Parameter Name | Type | Required | Default Value | Description |
| :------: | :----: | :--: | :----: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------: |
| billDate | String | 必填 |   -    |                                                                                下载对账单的日期，格式：2014-06-03                                                                                |     -     |
| billType | String | 选填 |  ALL   | ALL（默认值），返回当日所有订单信息（不含充值退款订单）,SUCCESS，返回当日成功支付的订单（不含充值退款订单）,REFUND，返回当日退款订单（不含充值退款订单）,RECHARGE_REFUND，返回当日充值退款订单 |     -     |
| billType | String | Optional | ALL | ALL (default), returns all order information on the day (excluding recharge and refund orders), SUCCESS, returns orders successfully paid on the day (excluding recharge and refund orders), REFUND, returns Same-day refund order (excluding recharge and refund order), RECHARGE_REFUND, return the same-day recharge and refund order | - |

**返回值说明**
**Return value description**

| 参数名  |  类型  |           说明           | 支持平台 |
| Parameter Name | Type | Description | Supported Platforms |
| :-----: | :----: | :----------------------: | :------: |
| content | String | 文本表格的方式返回的数据 |     -     |
| content | String | The data returned in the form of a text table | - |

`content`示例如下
An example of `content` is as follows

**当日所有订单**
**All orders of the day**
交易时间,公众账号 ID,商户号,子商户号,设备号,微信订单号,商户订单号,用户标识,交易类型,交易状态,付款银行,货币种类,总金额,代金券或立减优惠金额,微信退款单号,商户退款单号,退款金额, 代金券或立减优惠退款金额，退款类型，退款状态,商品名称,商户数据包,手续费,费率
Transaction Time, Public Account ID, Merchant ID, Sub-Merchant ID, Device ID, WeChat Order ID, Merchant Order ID, User ID, Transaction Type, Transaction Status, Payment Bank, Currency Type, Total Amount, Voucher or Instant Discount Amount , WeChat refund order number, merchant refund order number, refund amount, voucher or instant discount refund amount, refund type, refund status, product name, merchant data package, handling fee, rate

**当日成功支付的订单**
**Orders successfully paid on the same day**
交易时间,公众账号 ID,商户号,子商户号,设备号,微信订单号,商户订单号,用户标识,交易类型,交易状态,付款银行,货币种类,总金额, 代金券或立减优惠金额,商品名称,商户数据包,手续费,费率
Transaction Time, Public Account ID, Merchant ID, Sub-Merchant ID, Device ID, WeChat Order ID, Merchant Order ID, User ID, Transaction Type, Transaction Status, Payment Bank, Currency Type, Total Amount, Voucher or Instant Discount Amount , commodity name, merchant data package, handling fee, rate

**当日退款的订单**
**Same-day refund orders**
交易时间,公众账号 ID,商户号,子商户号,设备号,微信订单号,商户订单号,用户标识,交易类型,交易状态,付款银行,货币种类,总金额, 代金券或立减优惠金额,退款申请时间,退款成功时间,微信退款单号,商户退款单号,退款金额, 代金券或立减优惠退款金额,退款类型,退款状态,商品名称,商户数据包,手续费,费率
Transaction Time, Public Account ID, Merchant ID, Sub-Merchant ID, Device ID, WeChat Order ID, Merchant Order ID, User ID, Transaction Type, Transaction Status, Payment Bank, Currency Type, Total Amount, Voucher or Instant Discount Amount ,Refund application time,Refund success time,WeChat refund order number, Merchant refund order number, Refund amount, Voucher or instant discount refund amount, Refund type, Refund status, Product name, Merchant data package, fee, rate

从第二行起，为数据记录，各参数以逗号分隔，参数前增加`符号，为标准键盘 1 左边键的字符，字段顺序与表头一致。
From the second line onwards, it is a data record, each parameter is separated by a comma, and a ` symbol is added before the parameter, which is the character of the left key of standard keyboard 1, and the field order is consistent with the table header.

倒数第二行为订单统计标题，最后一行为统计数据
The penultimate line is the title of the order statistics, and the last line is the statistics

总交易单数，总交易额，总退款金额，总代金券或立减优惠退款金额，手续费总金额
Total number of transactions, total transaction amount, total refund amount, total voucher or instant discount refund amount, total handling fee amount

举例如下：
An example is as follows:

```
交易时间,公众账号ID,商户号,子商户号,设备号,微信订单号,商户订单号,用户标识,交易类型,交易状态,付款银行,货币种类,总金额,代金券或立减优惠金额,微信退款单号,商户退款单号,退款金额,代金券或立减优惠退款金额,退款类型,退款状态,商品名称,商户数据包,手续费,费率
`2014-11-10 16：33：45,`wx2421b1c4370ec43b,`10000100,`0,`1000,`1001690740201411100005734289,`1415640626,`085e9858e3ba5186aafcbaed1,`MICROPAY,`SUCCESS,`OTHERS,`CNY,`0.01,`0.0,`0,`0,`0,`0,`,`,`被扫支付测试,`订单额外描述,`0,`0.60%
`2014-11-10 16：46：14,`wx2421b1c4370ec43b,`10000100,`0,`1000,`1002780740201411100005729794,`1415635270,`085e9858e90ca40c0b5aee463,`MICROPAY,`SUCCESS,`OTHERS,`CNY,`0.01,`0.0,`0,`0,`0,`0,`,`,`被扫支付测试,`订单额外描述,`0,`0.60%
总交易单数,总交易额,总退款金额,总代金券或立减优惠退款金额,手续费总金额
`2,`0.02,`0.0,`0.0,`0
```

**使用示例**
**Use example**

```js
exports.main = async function (event) {
  let res = await unipayIns.downloadBill({
    billDate: '20200202',
  })
  return res
}
```

### 下载资金账单
### Download Funds Statement

`unipayIns.downloadFundflow`,商户可以通过该接口下载自 2017 年 6 月 1 日起的历史资金流水账单。**仅微信支持**
`unipayIns.downloadFundflow`, merchants can download historical fund flow bills from June 1, 2017 through this interface. **WeChat support only**

**说明：**
**illustrate:**

1. 资金账单中的数据反映的是商户微信账户资金变动情况；
1. The data in the capital bill reflects the changes in the funds of the merchant's WeChat account;
2. 当日账单在次日上午 9 点开始生成，建议商户在上午 10 点以后获取；
2. The bill of the day will be generated at 9:00 am the next day, and merchants are advised to obtain it after 10:00 am;
3. 资金账单中涉及金额的字段单位为“元”。
3. The field unit of the amount involved in the fund statement is "yuan".

**入参说明**
**Introduction to parameters**

|   参数名    |  类型  | 必填 | 默认值 |                                  说明                                   | 支持平台 |
| Parameter Name | Type | Required | Default Value | Description |
| :---------: | :----: | :--: | :----: | :---------------------------------------------------------------------: | :------: |
|  billDate   | String | 必填 |   -    |                    下载对账单的日期，格式：2014-06-03                     |    -     |
| accountType | String | 选填 | Basic  | 账单的资金来源账户：Basic 基本账户，Operation 运营账户，Fees 手续费账户 |     -     |
| accountType | String | Optional | Basic | Account for the source of funds for the bill: Basic account, Operation account, Fees fee account | - |

**返回值说明**
**Return value description**

| 参数名  |  类型  |           说明           | 支持平台 |
| Parameter Name | Type | Description | Supported Platforms |
| :-----: | :----: | :----------------------: | :------: |
| content | String | 文本表格的方式返回的数据 |     -    |
| content | String | The data returned in the form of a text table | - |

`content`示例如下
An example of `content` is as follows

- 第一行为表头
- The first line is the header

记账时间,微信支付业务单号,资金流水单号,业务名称,业务类型,收支类型,收支金额（元）,账户结余（元）,资金变更提交申请人,备注,业务凭证号
Accounting time, WeChat payment business order number, capital flow order number, business name, business type, income and expenditure type, income and expenditure amount (yuan), account balance (yuan), fund change submission applicant, remarks, business voucher number

- 从第二行起，为资金流水数据，各参数以逗号分隔，参数前增加`符号，为标准键盘 1 左边键的字符，字段顺序与表头一致
- From the second line onwards, it is the capital flow data, each parameter is separated by a comma, and the ` symbol is added before the parameter, which is the character of the left key of standard keyboard 1, and the field order is consistent with the table header

- 倒数第二行为资金账单统计标题
- The penultimate row is the title of the capital bill statistics

资金流水总笔数,收入笔数,收入金额,支出笔数,支出金额
The total number of capital flows, the number of income, the amount of income, the number of expenditures, the amount of expenditure

- 最后一行为统计数据
- Last row stats

账单示例如下：
An example bill is as follows:

```
记账时间,微信支付业务单号,资金流水单号,业务名称,业务类型,收支类型,收支金额（元）,账户结余（元）,资金变更提交申请人,备注,业务凭证号

`2018-02-01 04:21:23,`50000305742018020103387128253,`1900009231201802015884652186,`退款,`退款,`支出,`0.02,`0.17,`system,`缺货,`REF4200000068201801293084726067

资金流水总笔数,收入笔数,收入金额,支出笔数,支出金额

`20.0,`17.0,`0.35,`3.0,`0.18
```

**使用示例**
**Use example**

```js
exports.main = async function (event) {
  let res = await unipayIns.downloadFundflow({
    billDate: '20200202',
  })
  return res
}
```

### 支付结果通知处理
### Payment result notification processing

**注意：支付宝在非全量退款时也会发送通知到支付时设置的notify_url**
**Note: Alipay will also send a notification to the notify_url set at the time of payment in the event of a partial refund**

`unipayIns.verifyPaymentNotify`，用于在使用云函数 Url 化的云函数内检验并处理支付结果。
`unipayIns.verifyPaymentNotify` for verifying and processing payment results within cloud functions using cloud function URLization.

**入参说明**
**Introduction to parameters**

只接收对应云函数的`event`作为参数
Only receive the `event` corresponding to the cloud function as a parameter

**返回值说明**
**Return value description**

|    参数名     |  类型  |                        说明                         | 支持平台 |
| Parameter Name | Type | Description | Supported Platforms |
| :-----------: | :----: | :-------------------------------------------------: | :------: |
|   totalFee    | Number |                     订单总金额                      |     -     |
| totalFee | Number | Total order amount | - |
|    cashFee    | Number |                    现金支付金额                     |      -    |
| cashFee | Number | Cash payment amount | - |
|    feeType    | String |                      货币类别                       |     -     |
| feeType | String | Currency Type | - |
|  outTradeNo   | String |                     商户订单号                      |     -     |
| outTradeNo | String | Merchant order number | - |
| transactionId | String |                     平台订单号                      |     -     |
| transactionId | String | Platform order number | - |
|    timeEnd    | String |         支付完成时间，格式为 yyyyMMddHHmmss         |      -    |
| timeEnd | String | Payment completion time in the format yyyyMMddHHmmss | - |
|    openid     | String |                       用户 id                       |     -     |
| openid | String | user id | - |
|  returnCode   | String | 值 SUCCESS 时为支付成功，通常需要校验订单金额等参数 |      -    |
| returnCode | String | When the value is SUCCESS, the payment is successful. Usually, parameters such as order amount need to be verified | - |

**使用示例**
**Use example**

```js
exports.main = async function (event) {
  let res = await unipayIns.verifyPaymentNotify(event)
  // 处理完毕其他业务
  // Finish other business
  // 注意如果处理成功需要严格按照下面的格式进行返回，否则厂商会持续通知
  // 微信支付V3处理成功之后 
  return {
    mpserverlessComposedResponse: true,
    statusCode: 200,
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
        code: 'SUCCESS',
        message: '成功'
    })
  }
  // 微信支付V2处理成功之后 
  return {
    mpserverlessComposedResponse: true, 
    statusCode: 200,
    headers: {
      'content-type': 'text/xml;charset=utf-8'
    },
    body: `<xml><return_code><![CDATA[SUCCESS]]></return_code><return_msg><![CDATA[OK]]></return_msg></xml>`
  }
  // 支付宝处理成功后  
  return {
    mpserverlessComposedResponse: true,
    statusCode: 200,
    headers: {  
      'content-type': 'text/plain'  
    },  
    body: "success"
  }
}
```

### 退款结果通知@verify-refund-notify
### Refund result notification @verify-refund-notify

**注意：支付宝在非全量退款时才会发送通知，通知地址为支付时设置的notify_url**
**Note: Alipay will only send a notification when it is not fully refunded, and the notification address is the notify_url set at the time of payment**

> uni-pay 1.0.17版本起新增对支付宝退款结果通知的支持
> uni-pay 1.0.17 version added support for Alipay refund result notification

`unipayIns.verifyRefundNotify`，用于在使用云函数 Url 化的云函数内检验并处理支付结果。
`unipayIns.verifyRefundNotify` for verifying and processing payment results within cloud functions using cloud function URLization.

**入参说明**
**Introduction to parameters**

只接收对应云函数的`event`作为参数
Only receive the `event` corresponding to the cloud function as a parameter

**返回值说明**
**Return value description**

|       参数名				|  类型	|                         说明													| 支持平台|
| Parameter Name | Type | Description | Supported Platforms |
| :-----------------:	| :----:| :---------------------------------------------------:	| :------:|
|      totalFee				| Number|                      订单总金额												|    -		|
| totalFee | Number| Total order amount | - |
|      refundFee			| Number|                     申请退款金额											|    -		|
| refundFee | Number| Refund amount requested | - |
| settlementTotalFee	| Number|                     应结订单金额，支付宝不返回				|    -		|
| settlementTotalFee | Number| The amount of the order to be settled, Alipay does not return it | - |
| settlementRefundFee	| Number|                       退款金额，支付宝不返回					|   -			|
| settlementRefundFee | Number| Refund amount, Alipay will not return | - |
|     outTradeNo			| String|                      商户订单号												|    -		|
| outTradeNo | String| Merchant order number | - |
|    transactionId		| String|                      平台订单号												|    -		|
| transactionId | String| Platform order number | - |
|      refundId				| String|                     平台退款单号，支付宝不返回				|    -		|
| refundId | String| Platform refund order number, Alipay will not return it | - |
|     outRefundNo			| String|                     商户退款单号											|    -		|
| outRefundNo | String| Merchant refund order number | - |
|    refundStatus			| String| SUCCESS-退款成功,CHANGE-退款异常,REFUNDCLOSE—退款关闭|      -	|
| refundStatus | String| SUCCESS - successful refund, CHANGE - abnormal refund, REFUNDCLOSE - refund closed | - |
|    refundAccount		| String|                     退款资金来源，支付宝不返回				|    -		|
| refundAccount | String| Refund source, Alipay does not return | - |
|  refundRecvAccout		| String|                     退款入账账户，支付宝不返回				|    -		|
| refundRecvAccout | String| The refund is credited to the account, and Alipay does not return it | - |

**使用示例**
**Use example**

```js
exports.main = async function (event) {
  let res = await unipayIns.verifyRefundNotify(event)
  // 注意如果处理成功需要严格按照下面的格式进行返回，否则厂商会持续通知
  // Note that if the processing is successful, it needs to be returned in strict accordance with the following format, otherwise the manufacturer will continue to notify
  // 微信处理成功之后 
  return {
    mpserverlessComposedResponse: true,
    statusCode: 200,  
    headers: {  
        'content-type': 'text/xml;charset=utf-8'  
    },  
    body: `<xml><return_code><![CDATA[SUCCESS]]></return_code><return_msg><![CDATA[OK]]></return_msg></xml>`  
  }
  // 支付宝处理成功后  
  return {
    mpserverlessComposedResponse: true,
    statusCode: 200,
    headers: {
      'content-type': 'text/plain'  
    },
    body: "success"
  }
}
```

### 获取通知类型@check-notify-type
### Get notification type @check-notify-type

> 新增于 uni-id 1.0.17
> Added in uni-id 1.0.17

`unipayIns.checkNotifyType`，用于在使用云函数 Url 化的云函数内检验当前通知的类型。由于支付宝支付在非全量退款时会调用支付时设置的notify_url，可以使用此接口在调用校验通知之前判断通知类型
`unipayIns.checkNotifyType`, which is used to check the type of the current notification within the cloud function URLized using the cloud function. Since Alipay payment will call the notify_url set at the time of payment when it is not fully refunded, you can use this interface to determine the notification type before calling the verification notification

**入参说明**
**Introduction to parameters**

只接收对应云函数的`event`作为参数
Only receive the `event` corresponding to the cloud function as a parameter

**返回值说明**
**Return value description**

此接口会返回一个字符串，可能的值如下
This interface will return a string, the possible values are as follows

- `refund`：当前是一个退款通知
- `refund`: is currently a refund notification
- `payment`：当前是一个支付结果通知
- `payment`: is currently a payment result notification

**使用示例**
**Use example**

```js
exports.main = async function (event) {
  let res = await unipayIns.checkNotifyType(event)
  if(res === 'refund') {
    // 退款通知
    // refund notification
  } else if(res === 'payment') {
    // 支付结果通知
    // Payment result notification
  }
}
```


### 苹果内购-校验支付凭证@verifyReceipt
### Apple In-App Purchase - Verify Payment Credential @verifyReceipt

`unipayIns.verifyReceipt`, 校验iap支付凭证返回交易信息。
`unipayIns.verifyReceipt`, verifies the iap payment receipt and returns the transaction information.

**入参说明**
**Introduction to parameters**

|    参数名     |  类型  |          必填           | 默认值 |    说明    | 支持平台 |
| Parameter Name | Type | Required | Default Value | Description |
| :-----------: | :----: | :---------------------: | :----: | :--------: | :------: |
| receiptData   | String |       是                |   -    | 支付凭证 |    苹果内购支付     |
| receiptData | String | Yes | - | Payment receipt | Apple in-app purchase payment |

**返回值说明**
**Return value description**

|       参数名       |  类型  |                                                                                                                                                                          说明                                                                                                                                                                          | 支持平台 |
| Parameter name | Type | Description | Supported platforms |
| :----------------: | :----: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------: |
|   transactionId    | String |                                                                                                                                                                       交易标示                                                                                                                                                                       |      -    |
| transactionId | String | Transaction ID | - |
|     tradeState     | String | 订单状态 ，微信支付： SUCCESS—支付成功，REFUND—转入退款，NOTPAY—未支付，PAYERROR--支付失败(其他原因，如银行返回失败)，SUCCESS（交易支付成功）。 |     -     |
| tradeState | String | Order status, WeChat payment: SUCCESS—successful payment, REFUND—transferred and refunded, NOTPAY—unpaid, PAYERROR—payment failure (other reasons, such as bank return failure), SUCCESS (transaction payment successful). | - |
|      totalFee      | Number |                                                                                                                                                                  标价金额 ，单位：分                                                                                                                                                                   |     -     |
| totalFee | Number | Price amount, unit: cents | - |
| settlementTotalFee | Number |                                                                                                                                                                 应结订单金额，单位：分                                                                                                                                                                 |     -     |
| settlementTotalFee | Number | The amount of the order to be settled, unit: cent | - |
|      receipt       | Object |                                                                                                                                                                 收据信息                                                                                                                                                                               |  -  |
| receipt | Object | Receipt information | - |

**使用示例**
**Use example**

```js
exports.main = async function (event) {
  let res = await unipayIns.verifyReceipt({
    receiptData: 'transactionReceipt',
  })
  return res
}
```
