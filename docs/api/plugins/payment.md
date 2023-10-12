# uni.requestPayment(OBJECT)
支付
pay

uni.requestPayment是一个统一各平台的客户端支付API，不管是在某家小程序还是在App中，客户端均使用本API调用支付。
uni.requestPayment is a client-side payment API that unifies all platforms. Whether it is in a MiniApp or an App, the client uses this API to call payment.

本API运行在各端时，会自动转换为各端的原生支付调用API。
When this API runs on each terminal, it will be automatically converted to the native payment calling API of each terminal.

注意支付不仅仅需要客户端的开发，还需要服务端开发。虽然客户端API统一了，但各平台的支付申请开通、配置回填仍然需要看各个平台本身的支付文档。
Note that payment requires not only client-side development, but also server-side development. Although the client API is unified, the payment application opening and configuration backfill of each platform still need to look at the payment documents of each platform.

比如微信有App支付、小程序支付、H5支付等不同的申请入口和使用流程，对应到uni-app，在App端要申请微信的App支付，而小程序端则申请微信的小程序支付。
For example, WeChat has different application entrances and usage processes such as App payment, MiniApp payment, H5 payment, etc. Corresponding to uni-app, you need to apply for WeChat App Payment on the App side, while the MiniApp side applies for WeChat MiniApp Payment.

如果服务端使用[uniCloud](https://uniapp.dcloud.io/uniCloud/README)，那么官方提供了[uniPay](https://uniapp.dcloud.io/uniCloud/unipay)云端统一支付服务，把App、微信小程序、支付宝小程序里的服务端支付开发进行了统一的封装。
If the server uses [uniCloud](https://uniapp.dcloud.io/uniCloud/README),then the official provides [uniPay](https://uniapp.dcloud.io/uniCloud/unipay) cloud unified payment service, The server-side payment development in the App, WeChat MiniApp, and Alipay MiniApp has been uniformly packaged.

前端统一的`uni.requestPayment`和云端统一的`uniPay`搭配，可以极大提升支付业务的开发效率，强烈推荐给开发者使用。`uniPay`的文档另见：[https://uniapp.dcloud.io/uniCloud/unipay](https://uniapp.dcloud.io/uniCloud/unipay)
The combination of the unified `uni.requestPayment` on the front end and the unified `uniPay` on the cloud can greatly improve the development efficiency of payment services, and is strongly recommended for developers. See also the documentation for `uniPay`: [https://uniapp.dcloud.io/uniCloud/unipay](https://uniapp.dcloud.io/uniCloud/unipay)

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序|飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|[说明](/api/plugins/payment?id=h5-payment)|√|√|√|√|x|√|√|x|
|√|[Description](/api/plugins/payment?id=h5-payment)|√|√|√|√|x|√|√|x|

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|平台差异说明|
|Parameter Name|Type|Required|Description|Platform Difference Description|
|:-|:-|:-|:-|:-|
|provider|String|是|服务提供商，通过 [uni.getProvider](/api/plugins/provider) 获取。||
|orderInfo|String/Object|是|订单数据，[注意事项](/api/plugins/payment?id=orderinfo)|App、支付宝小程序、百度小程序、抖音小程序|
|timeStamp|String|微信小程序必填|时间戳从1970年1月1日至今的秒数，即当前的时间。|微信小程序|
|timeStamp|String|Required for WeChat MiniApp|Timestamp seconds from January 1, 1970 to the present, that is, the current time. |WeChat MiniApp|
|nonceStr|String|微信小程序必填|随机字符串，长度为32个字符以下。|微信小程序|
|nonceStr|String|Required for WeChat MiniApp|Random string with a length of 32 characters or less. |WeChat MiniApp|
|package|String|微信小程序必填|统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=xx。|微信小程序|
|package|String|Required for WeChat MiniApp|The value of the prepay_id parameter returned by the unified ordering interface. The submission format is: prepay_id=xx. |WeChat MiniApp|
|signType|String|微信小程序必填|签名算法，应与后台下单时的值一致|微信小程序|
|signType|String|Required for WeChat MiniApp|Signature algorithm, which should be the same as the value when placing an order in the background|WeChat MiniApp|
|paySign|String|微信小程序必填|签名，具体签名方案参见 [微信小程序支付文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_7&index=3)|微信小程序|
|paySign|String|Required for WeChat MiniApp|Signature, please refer to [WeChat MiniApp Payment Document](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_7&index=3)|WeChat MiniApp|
|bannedChannels|Array&lt;String&gt;|否|需要隐藏的支付方式，详见 [百度小程序支付文档](https://smartprogram.baidu.com/docs/develop/api/open_payment/#requestPolymerPayment/)|百度小程序|
|service|Number|抖音小程序必填|固定值：5（拉起小程序收银台）开发者如果不希望使用抖音小程序收银台，service设置为3/4时，可以直接拉起微信/支付宝进行支付：service=3： 微信API支付，不拉起小程序收银台；service=4： 支付宝API支付，不拉起小程序收银台。其中service=3、4，仅在1.35.0.1+基础库(头条743+)支持|抖音小程序|
|_debug|Number|否|仅限调试用，上线前去掉该参数。_debug=1时，微信支付期间可以看到中间报错信息，方便调试|抖音小程序|
|getOrderStatus|Function|抖音小程序必填|商户前端实现的查询支付订单状态方法（该方法需要返回个Promise对象）。 service=3、4时不需要传。|抖音小程序|
|success|Function|否|接口调用成功的回调||
|success|Function|No|Callback for successful interface call||
|fail|Function|否|接口调用失败的回调函数||
|fail|Function|No|Callback function for interface call failure||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
|complete|Function|No|The callback function of the end of the interface call (the call will be executed if the call succeeds or fails)|&nbsp;|

微信小程序 `signType` 说明
WeChat MiniApp`signType` description

|合法值			|说明									|
|legal value |description |
|:-|:-|
|MD5				|仅在 v2 版本接口适用	|
|MD5 |Only available in v2 version interface |
|HMAC-SHA256|仅在 v2 版本接口适用	|
|HMAC-SHA256|Only available on v2 interface|
|RSA				|仅在 v3 版本接口适用	|
|RSA |Only available in v3 interface |


### 注意事项
### Precautions
- APP端，如果你的应用在用户完成支付后；立即给支付的用户push消息通知。会与前端支付回调相互冲突，请延迟执行推送。
- 抖音小程序支付接口调整使用时请注意[发起头条支付](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/api/open-interface/pay/tt-pay)

### orderInfo 注意事项@orderInfo
### orderInfo Notes @orderInfo
1. 百度小程序的 orderInfo 为 Object 类型，详细的数据结构，参考：[百度收银台支付](https://smartprogram.baidu.com/docs/develop/api/open_payment/#requestPolymerPayment/)。
1. The orderInfo of Baidu MiniApp is of Object type. For detailed data structure, please refer to: [Baidu Cashier Payment](https://smartprogram.baidu.com/docs/develop/api/open_payment/#requestPolymerPayment/).
2. 支付宝小程序的 orderInfo(支付宝的规范为 tradeNO) 为 String 类型，表示支付宝交易号。
3. 抖音小程序的 orderInfo 为 Object 类型，详见：[发起头条支付](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/api/open-interface/pay/tt-pay/)
4. App端，支付宝支付 orderInfo 为 String 类型。
4. On the App side, Alipay payment orderInfo is of String type.
5. App端，微信支付 orderInfo 为 Object 类型。
5. On the App side, the WeChat payment orderInfo is of type Object.
6. App端，苹果应用内支付 orderInfo 为Object 类型，{productid: 'productid'}。
6. On the App side, Apple in-app payment orderInfo is of type Object, {productid: 'productid'}.

## H5 平台@h5-payment
## H5 Platform @h5-payment
- 普通浏览器平台的支付，仍然是常规web做法。uni-app未封装。
- Payment for common browser platforms, still normal web practice. uni-app is not packaged.
- 在普通浏览器里也可以调起微信进行支付，这个在微信叫做H5支付，此功能未开放给普通开发者，需向微信单独申请，[详见](https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=15_1)
- You can also use WeChat to pay in ordinary browsers. This is called H5 payment in WeChat. This function is not open to ordinary developers. You need to apply for WeChat separately. [For details](https://pay.weixin.qq .com/wiki/doc/api/H5.php?chapter=15_1)
- 微信内嵌浏览器运行H5版时，可通过js sdk实现微信支付，需要引入一个单独的js，[详见](https://ask.dcloud.net.cn/article/35380)
- When WeChat embedded browser runs H5 version, WeChat payment can be realized through js sdk, and a separate js needs to be introduced, [see details](https://ask.dcloud.net.cn/article/35380)

**各平台支持的支付情况说明**
**Description of payment conditions supported by each platform**
- 微信小程序里只支持微信小程序支付，在 [微信商户平台](https://pay.weixin.qq.com) 申请支付时，选择公众号支付。
- Only WeChat MiniApp payment is supported in WeChat MiniApp. When applying for payment on [WeChat Merchant Platform](https://pay.weixin.qq.com), select the official account to pay.
- App 里支持微信sdk支付、支付宝sdk支付、苹果iap应用内支付，在各平台申请支付时选择 App 支付。
- WeChat sdk payment, Alipay sdk payment, and Apple iap in-app payment are supported in the app. Choose App payment when applying for payment on each platform.
- 其他支付（如银联）请使用web-view组件以H5方式实现。
- For other payments (such as UnionPay), please use the web-view component to implement the H5 method.
- 支付宝小程序只支持支付宝支付。
- The Alipay MiniApp only supports Alipay payment.
- 百度小程序为百度支付，其二次封装了度小满、支付宝、微信支付。
- Baidu MiniApp is Baidu Pay, which encapsulates Duxiaoman, Alipay and WeChat Pay.
- Hello uniapp 里演示了各种支付。
- Various payments are demonstrated in Hello uniapp.

## App平台支付流程
## App platform payment process

流程：支付平台功能申请 -> ``manifest.json`` 里配置支付参数 -> ``uni-app`` 里调用 API 进行支付
Process: Payment platform function application -> configure payment parameters in ``manifest.json`` -> call API in ``uni-app`` for payment

### manifest.json里配置相关参数
### Configure related parameters in manifest.json

1. 在`manifest.json - App模块权限选择` 中勾选 payment(支付)
1. Check payment in `manifest.json - App module permission selection`
2. 在 `manifest.json - App SDK配置` 中，勾选需要的支付平台，目前有微信支付、支付宝支付、苹果应用内支付(IAP)，其中微信支付需要填写从微信开放平台获取的AppID
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/manifest-config.png)
<!-- ![uniapp](https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/pay1.png) -->
<!-- 临时把老图注掉，替换正式地址时再把老图地址放开 -->
<!-- Temporarily note out the old picture, and release the old picture address when replacing the official address -->
3. 这些配置需要打包生效，真机运行仍然是HBuilder基座的设置，可使用自定义基座调试。离线打包请参考离线打包文档在原生工程中配置。
3. These configurations need to be packaged to take effect, and the real machine operation is still the setting of the HBuilder base, which can be debugged with a custom base. For offline packaging, please refer to the offline packaging documentation to configure in the native project.
4. 配置并打包后，通过`uni.getProvider`可以得到配置的结果列表，注意这里返回的是manifest配置的，与手机端是否安装微信、支付宝无关。
4. After configuration and packaging, you can get a list of configuration results through `uni.getProvider`. Note that what is returned here is the manifest configuration, which has nothing to do with whether WeChat or Alipay is installed on the mobile phone.

## App支付
## App payment

### 示例
### Example

```javascript
uni.requestPayment({
    provider: 'alipay',
    orderInfo: 'orderInfo', //微信、支付宝订单数据 【注意微信的订单信息，键值应该全部是小写，不能采用驼峰命名】
    success: function (res) {
        console.log('success:' + JSON.stringify(res));
    },
    fail: function (err) {
        console.log('fail:' + JSON.stringify(err));
    }
});
```


## 支付宝App支付
## Alipay App payment

### 申请流程
### application process

    登录支付宝账号，创建应用接入支付宝App支付能力，包括以下步骤：
    Log in to the Alipay account and create an application to access the Alipay App payment capability, including the following steps:

    - 创建应用（获取appid） 
    - Create app (get appid)
    - 开通App支付功能 
    - Activate the App payment function
    - 配置密钥（获取公钥、私钥） 
    - Configure keys (get public key, private key)
    
  具体可参考支付宝官方文档： [App支付快速接入](https://docs.open.alipay.com/204/105297/)
  For details, please refer to the official Alipay documentation: [Quick access to App payment](https://docs.open.alipay.com/204/105297/)


如果手机端未安装支付宝，调用时会启动支付宝的wap页面登录，如果已安装相应客户端，会启动其客户端登录。
If Alipay is not installed on the mobile phone, it will start Alipay's wap page login when it is called. If the corresponding client has been installed, its client login will be started.

## 微信App支付
## WeChat App payment

### 申请流程
### application process

  - 到 [微信开放平台](https://open.weixin.qq.com/) 申请移动应用并开通支付功能，申请应用后可以获取 AppID 和 AppSecret 值
  - Go to the [WeChat Open Platform](https://open.weixin.qq.com/) to apply for a mobile application and enable the payment function. After applying for the application, you can get the AppID and AppSecret value
  - 应用接入 [微信商户平台](https://pay.weixin.qq.com)，选择 App 支付
  - App access [WeChat Merchant Platform](https://pay.weixin.qq.com), select App to pay
  - 开通支付功能后可获取支付业务服务器配置数据：PARTNER（财付通商户号）、PARTNER_KEY（财付通密钥）、PAYSIGNKEY（支付签名密钥）
  - After the payment function is activated, the configuration data of the payment service server can be obtained: PARTNER (Tenpay merchant number), PARTNER_KEY (Tenpay key), PAYSIGNKEY (payment signature key)
  - 需要将从微信开放平台申请的appid，填回到 manifest-App SDK配置-支付-微信支付 中。打包后生效。
  - You need to fill in the appid applied for from the WeChat Open Platform back to manifest-App SDK Configuration-Payment-WeChat Payment. Effective after packaging.
    
  具体可参考微信官方文档： [移动应用开发](https://open.weixin.qq.com/cgi-bin/frame?t=home/app_tmpl&lang=zh_CN)
  For details, please refer to the official WeChat document: [Mobile Application Development](https://open.weixin.qq.com/cgi-bin/frame?t=home/app_tmpl&lang=zh_CN)
  
  注意微信的App支付、小程序支付、H5支付是不同的体系。微信小程序支付在 [微信商户平台](https://pay.weixin.qq.com) 申请支付时，选择公众号支付；普通浏览器里也可以调起微信进行支付，这个在微信叫做H5支付，此功能未开放给普通开发者，需向微信单独申请，[详见](https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=15_1)
  Note that WeChat's App payment, MiniApp payment, and H5 payment are different systems. WeChat MiniApp Payment When applying for payment on the [WeChat Merchant Platform](https://pay.weixin.qq.com), select the official account payment; ordinary browsers can also call up WeChat for payment, which is called H5 payment in WeChat , this function is not open to ordinary developers, you need to apply to WeChat separately, [see details]( <a href="https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=15_1">https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=15_1</a> )

### 示例代码
### Sample code

```javascript
uni.requestPayment({
    "provider": "wxpay", 
    "orderInfo": {
        "appid": "wx499********7c70e",  // 微信开放平台 - 应用 - AppId，注意和微信小程序、公众号 AppId 可能不一致
        "nonceStr": "c5sEwbaNPiXAF3iv", // 随机字符串
        "package": "Sign=WXPay",        // 固定值
        "partnerid": "148*****52",      // 微信支付商户号
        "prepayid": "wx202254********************fbe90000", // 统一下单订单号 
        "timestamp": 1597935292,        // 时间戳（单位：秒）
        "sign": "A842B45937F6EFF60DEC7A2EAA52D5A0" // 签名，这里用的 MD5/RSA 签名
    },
    success(res) {},
    fail(e) {}
})
```

## 苹果应用内支付@iap
## Apple In-App Payments @iap

### 申请流程
### application process

    使用苹果开发者账号登录 [App Store Connect](https://appstoreconnect.apple.com)，在应用的功能选项卡页面，添加 App 内购项目。注意：
    Log in to [App Store Connect](https://appstoreconnect.apple.com) with your Apple developer account, and add in-app purchases on the function tab page of the app. Notice:
    - 内购项目的各信息需要填写完整，然后保存，此时内购项目的状态应该是准备提交，当提交应用通过审核后，状态则变为已批准
    - The information of the in-app purchase item needs to be filled in completely and then saved. At this time, the status of the in-app purchase item should be ready to submit. When the submitted application passes the review, the status will become approved
    - 测试时，建议使用测试证书打一个自定义的 iOS 基座进行测试
    - When testing, it is recommended to use a test certificate to hit a custom iOS dock for testing
    - 在应用 TestFight 的选项卡添加 App Store Connect 用户，测试支付时可以使用此用户帐号进行测试
    - Add an App Store Connect user in the app TestFight tab, you can use this user account for testing when testing payments


### 支付流程
### Payment Process

1. 获取支付通道 (uni.getProvider)
1. Get the payment channel (uni.getProvider)

2. 通过支付通道获取产品列表 (iapChannel.requestProduct)
2. Get the product list through the payment channel (iapChannel.requestProduct)

3. 检查是否存在未关闭的订单 (iapChannel.restoreCompletedTransactions, 可选在合适的时机检查)
3. Check if there are open orders (iapChannel.restoreCompletedTransactions, optional check at the right time)

4. 请求支付，传递产品信息 (uni.requestPayment)
4. Request payment, pass product information (uni.requestPayment)

5. 客户端接收苹果返回的支付票据发送到服务器，在服务器请求苹果服务器验证支付是否有效
5. The client receives the payment receipt returned by Apple and sends it to the server, where the server requests the Apple server to verify whether the payment is valid

6. 服务器验证票据有效后在客户端关闭订单 (iapChannel.finishTransaction)
6. The server closes the order on the client side after verifying that the ticket is valid (iapChannel.finishTransaction)


HBuilder 3.5.1 之前因自动关闭订单导致某些情况下丢单的问题
Before HBuilder 3.5.1, the order was lost in some cases due to the automatic closing of the order

HBuilder 3.5.1 + 增加了手动关闭订单参数 `manualFinishTransaction`, 在合适的时机调用 `iapChannel.finishTransaction` 关闭订单
HBuilder 3.5.1 + added the parameter `manualFinishTransaction` to manually close the order, call `iapChannel.finishTransaction` at the right time to close the order

HBuilder 3.5.1+ 开始支持通过 `uni.getProvider` 获取IAP支付通道的方法
HBuilder 3.5.1+ starts to support the method of getting IAP payment channel through `uni.getProvider`

### 获取IAP支付通道
### Get IAP payment channel

```js
uni.getProvider({
  service: 'payment',
  success: (res) => {
    const iapChannel = res.providers.find((channel) => {
      return (channel.id === 'appleiap')
    })

    // 如果 iapChannel 为 null，说明当前包没有包含iap支付模块。注意：HBuilder基座不包含 iap 通道
    // If iapChannel is null, it means that the current package does not contain the iap payment module. Note: HBuilder base does not contain iap channel
  }
});
```

#### **IAP支付通道相关方法**
#### **IAP payment channel related methods**

#### 向苹果服务器获取产品列表
#### Get product list from Apple server

`iapChannel.requestProduct(<Function> success, <Function> fail)`

`success` 回调值类型 `Array<Product>`
`success` callback value type `Array<Product>`

#### 获取苹果服务器已支付且未关闭的交易列表
#### Get the list of transactions that have been paid by the Apple server and have not been closed

`iapChannel.restoreCompletedTransactions(<Function> success, <Function> fail)`

`success` 回调值类型 `Array<Transaction>`
`success` callback value type `Array<Transaction>`

#### 关闭苹果服务器订单
#### Close Apple Server Order

`iapChannel.finishTransaction(Transaction, <Function> success, <Function> fail)`


所有 `fail` 回调格式为 `{ errCode: xxx, errMsg: '' }`
All `fail` callbacks have the format `{ errCode: xxx, errMsg: '' }`


### 请求支付 `uni.requestPayment()` 
### Request payment `uni.requestPayment()`

```js
uni.requestPayment({
    provider: 'appleiap',
    orderInfo: {},
    success: (e) => {
      //  e 类型为 Transaction, 详见下面的描述
      // e is of type Transaction, see the description below for details
    }
})
```

### 参数说明
### Parameter Description

#### orderInfo

|属性|类型|默认值|说明|
|property|type|default value|description|
|:-|:-|:-|:-|
|productid|String||产品id，在苹果开发者中心配置|
|productid|String||Product id, configured in Apple Developer Center|
|username|String||透传参数，一般用于标记订单和用户的关系，向苹果服务器二次验证票据时返回此字段|
|username|String||Transparent parameter, generally used to mark the relationship between the order and the user, this field is returned when the ticket is verified to the Apple server twice|
|quantity|Number|1|购买数量，至少大于等于 `1`|
|quantity|Number|1|The purchase quantity, at least `1`|
|manualFinishTransaction|Boolean|false|3.5.1+ 支持，手动关闭订单，值为 `false` 时支付完成后自动关闭订单，`true`时不关闭订单，需要在合适的时机调用 `finishTransaction` 关闭订单。建议设置为 `true`, 默认值为 `false` 是为了向下兼容|
| paymentDiscount | Object | 否 | 促销优惠(HBuilderX 3.7.0+ 手机系统iOS12.2+支持) |

##### 促销优惠参数说明
| 属性 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| offerIdentifier | String | 是 | 促销id |
| keyIdentifier | String | 是 | 密钥 |
| nonce | String | 是 | 唯一id (必须小写 24小时有效) |
| signature | String | 是 | 签名 |
| timestamp | Number | 是 | 创建证书的时间戳(毫秒 24小时有效) |

#### Product

|属性|类型|说明|
|property|type|description|
|:-|:-|:-|
|title|String|产品标题|
|title|String|Product title|
|description|String|产品描述|
|description|String|Product description|
|productid|String|产品id，在苹果开发者中心配置|
|productid|String|Product id, configured in Apple Developer Center|
|price|Number|价格|
|price|Number|Price|
|pricelocal|String|币种，例如: `zh_CN@currency=CNY`|
|discount|Array|折扣信息(HBuilderX 3.7.0+ 手机系统iOS12.2+支持)|

##### Discount
| 属性 | 类型 | 说明 |
| :--- | :--- | :--- |
| price | Number | 促销价格 |
| periodUnit | String | 周期单位(day: 日,week: 周,month: 月,year: 年) |
| discountType | String | 优惠类型(introductory: 推介促销  subscription: 订阅促销) |
| promotionType | String | 促销类型(payAsYouGo: 随用随付,payUpFront: 预先支付,freeTrial:  免费试用) |
| code | String | 促销代码|
| units | Number | 促销期数 |


#### Transaction

|属性|类型|说明|
|property|type|description|
|:-|:-|:-|
|payment|Object|支付信息，详见下面的说明|
|payment|Object|Payment information, see description below for details|
|transactionDate|String|交易日期，示例 `2022-01-01 08:00:00`|
|transactionDate|String|Transaction date, example `2022-01-01 08:00:00`|
|transactionIdentifier|String|交易唯一标识|
|transactionIdentifier|String|Transaction Unique Identifier|
|transactionReceipt|String|支付票据，用于在开发者的服务器向苹果的服务器二次验证交易是否有效|
|transactionReceipt|String|The payment receipt is used to verify the validity of the transaction to Apple's server twice on the developer's server|
|transactionState|String|交易状态码|
|transactionState|String|Transaction Status Code|


#### Payment

|属性|类型|说明|
|property|type|description|
|:-|:-|:-|
|productid|String|产品id|
|productid|String|productid|
|quantity|String|购买数量|
|quantity|String|Purchase Quantity|
|username|String|透传参数|
|username|String|Transparent parameter|


#### transactionState

值类型：String
Value type: String

|值|说明|
|value|description|
|:-|:-|
|1|交易成功|
|1|Successful transaction|


注意事项
Precautions

- 相同订单，重复调用 `restoreCompletedTransactions` 后 `transactionReceipt` 会发生变化，并非唯一值
- For the same order, `transactionReceipt` will change after calling `restoreCompletedTransactions` repeatedly, not a unique value
- 调用 `finishTransaction` 关闭订单可能不会立即生效，取决于苹果的服务器
- Calling `finishTransaction` to close the order may not take effect immediately, depending on Apple's servers
- 沙盒环境：一个测试账号相同产品仅能购买一次，重复测试需要清除购买记录或重新添加沙盒测试账号
- Sandbox environment: a test account can only purchase the same product once, repeated tests need to clear the purchase record or re-add the sandbox test account
- 沙盒环境：调用 `restoreCompletedTransactions` 长时间无反应，检查设备登陆的沙箱账号是否正常
- Sandbox environment: calling `restoreCompletedTransactions` has no response for a long time, check whether the sandbox account logged in by the device is normal

### 沙箱账号
### Sandbox account

1. 登陆苹果开发者中心，添加沙箱账号
1. Log in to the Apple Developer Center and add a sandbox account
2. 手机或iPad登陆沙箱账号，在 `系统设置 -> App Store`
2. Log in to the sandbox account on your phone or iPad, go to `System Settings -> App Store`


### 订单丢失场景
### Order Lost Scenario

- 用户没有绑定 `AppStore` 支付方式，调用 `uni.requestPayment()` 准备支付，触发失败 `fail` 回调，errCode=2，用户未绑定支付方式，app内支付流程结束。
- The user does not bind the `AppStore` payment method, call `uni.requestPayment()` to prepare for payment, trigger the failed `fail` callback, errCode=2, the user has not bound the payment method, and the in-app payment process ends.
系统弹出框引导用户绑定支付方式，此过程将跳转到系统应用 `AppStore` 进行绑定支付方式，绑定成功同步支付成功，用户成功付款
The system pop-up box guides the user to bind the payment method. This process will jump to the system application `AppStore` to bind the payment method. If the binding is successful, the synchronization payment is successful, and the user successfully pays.


### 示例代码
### Sample code

```html
<template>
  <view class="content">
    <view class="uni-list">
      <radio-group @change="applePriceChange">
        <label class="uni-list-cell" v-for="(item, index) in productList" :key="index">
          <radio :value="item.productid" :checked="item.checked" />
          <view class="price">{{item.title}} {{item.price}}</view>
        </label>
      </radio-group>
    </view>
    <view class="uni-padding-wrap">
      <button class="btn-pay" @click="payment" :loading="loading" :disabled="disabled">确认支付</button>
    </view>
  </view>
</template>

<script>
  import {
    Iap,
    IapTransactionState
  } from "./iap.js"

  export default {
    data() {
      return {
        title: "iap",
        loading: false,
        disabled: true,
        productId: "",
        productList: []
      }
    },
    onLoad: function() {
      // 创建示例
      // create example
      this._iap = new Iap({
        products: [] // 苹果开发者中心创建
      })

      this.init();
    },
    onShow() {
      if (this._iap.ready) {
        this.restore();
      }
    },
    onUnload() {},
    methods: {
      async init() {
        uni.showLoading({
          title: '检测支付环境...'
        });

        try {
          // 初始化，获取iap支付通道
          // Initialize, get the iap payment channel
          await this._iap.init();

          // 从苹果服务器获取产品列表
          // Get product list from apple server
          this.productList = await this._iap.getProduct();
          this.productList[0].checked = true;
          this.productId = this.productList[0].productid;

          // 填充产品列表，启用界面
          // populate the product list, enable the interface
          this.disabled = false;
        } catch (e) {
          uni.showModal({
            title: "init",
            content: e.message,
            showCancel: false
          });
        } finally {
          uni.hideLoading();
        }

        if (this._iap.ready) {
          this.restore();
        }
      },
      async restore() {
        // 检查上次用户已支付且未关闭的订单，可能出现原因：首次绑卡，网络中断等异常
        // Check the order that the user has paid and has not closed last time, the possible reasons: the first time the card is bound, the network is interrupted, etc.

        // 在此处检查用户是否登陆
        // Check if the user is logged in here

        uni.showLoading({
          title: '正在检测已支付且未关闭的订单...'
        });

        try {
          // 从苹果服务器检查未关闭的订单，可选根据 username 过滤，和调用支付时透传的值一致
          // Check unclosed orders from Apple server, optionally filter according to username, which is consistent with the value passed through when calling payment
          const transactions = await this._iap.restoreCompletedTransactions({
            username: ""
          });

          if (!transactions.length) {
            return;
          }

          // 开发者业务逻辑，从服务器获取当前用户未完成的订单列表，和本地的比较
          // Developer business logic, get the current user's unfinished order list from the server, and compare with the local
          // 此处省略
          // omitted here

          switch (transaction.transactionState) {
            case IapTransactionState.purchased:
              // 用户已付款，在此处请求开发者服务器，在服务器端请求苹果服务器验证票据
              //let result = await this.validatePaymentResult();

              // 验证通过，交易结束，关闭订单
              // if (result) {
              //   await this._iap.finishTransaction(transaction);
              // }
              break;
            case IapTransactionState.failed:
              // 关闭未支付的订单
              // close unpaid orders
              await this._iap.finishTransaction(transaction);
              break;
            default:
              break;
          }
        } catch (e) {
          uni.showModal({
            content: e.message,
            showCancel: false
          });
        } finally {
          uni.hideLoading();
        }
      },
      async payment() {
        if (this.loading == true) {
          return;
        }
        this.loading = true;

        uni.showLoading({
          title: '支付处理中...'
        });

        try {
          // 从开发者服务器创建订单
          // const orderId = await this.createOrder({
          //   productId: this.productId
          // });

          // 请求苹果支付
          // Request Apple Pay
          const transaction = await this._iap.requestPayment({
            productid: this.productId,
            manualFinishTransaction: true,
            // username: username + orderId //根据业务需求透传参数，关联用户和订单关系
            // username: username + orderId //Transparent parameters according to business requirements, associating user and order relationship
          });

          // 在此处请求开发者服务器，在服务器端请求苹果服务器验证票据
          // await this.validatePaymentResult({
          //   orderId: orderId,
          //   username: username,
          //   transactionReceipt: transaction.transactionReceipt, // 不可作为订单唯一标识
          //   transactionIdentifier: transaction.transactionIdentifier
          // });

          // 验证成功后关闭订单
          //await this._iap.finishTransaction(transaction);

          // 支付成功
          // payment successful
        } catch (e) {
          uni.showModal({
            content: e.message,
            showCancel: false
          });
        } finally {
          this.loading = false;
          uni.hideLoading();
        }
      },
      createOrder({
        productId
      }) {
        return new Promise((resolve, reject) => {})
      },
      validatePaymentResult(data) {
        return new Promise((resolve, reject) => {});
      },
      applePriceChange(e) {
        this.productId = e.detail.value;
      }
    }
  }
</script>

<style>
  .content {
    padding: 15px;
  }

  button {
    background-color: #007aff;
    color: #ffffff;
  }

  .uni-list-cell {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
  }

  .price {
    margin-left: 10px;
  }

  .btn-pay {
    margin-top: 30px;
  }
</style>
```

```js
// uni iap

const ProviderType = {
  IAP: 'iap'
}

const IapTransactionState = {
  purchasing: "0", // A transaction that is being processed by the App Store.
  purchased: "1", // A successfully processed transaction.
  failed: "2", // A failed transaction.
  restored: "3", // A transaction that restores content previously purchased by the user.
  deferred: "4" // A transaction that is in the queue, but its final status is pending external action such as Ask to Buy.
};

class Iap {

  _channel = null;
  _channelError = null;
  _productIds = [];

  _ready = false;

  constructor({
    products
  }) {
    this._productIds = products;
  }

  init() {
    return new Promise((resolve, reject) => {
      this.getChannels((channel) => {
        this._ready = true;
        resolve(channel);
      }, (err) => {
        reject(err);
      })
    })
  }

  getProduct(productIds) {
    return new Promise((resolve, reject) => {
      this._channel.requestProduct(productIds || this._productIds, (res) => {
        resolve(res);
      }, (err) => {
        reject(err);
      })
    });
  }

  requestPayment(orderInfo) {
    return new Promise((resolve, reject) => {
      uni.requestPayment({
        provider: 'appleiap',
        orderInfo: orderInfo,
        success: (res) => {
          resolve(res);
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  }

  restoreCompletedTransactions(username) {
    return new Promise((resolve, reject) => {
      this._channel.restoreCompletedTransactions({
        manualFinishTransaction: true,
        username
      }, (res) => {
        resolve(res);
      }, (err) => {
        reject(err);
      })
    });
  }

  finishTransaction(transaction) {
    return new Promise((resolve, reject) => {
      this._channel.finishTransaction(transaction, (res) => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  getChannels(success, fail) {
    if (this._channel !== null) {
      success(this._channel)
      return
    }

    if (this._channelError !== null) {
      fail(this._channelError)
      return
    }

    uni.getProvider({
      service: 'payment',
      success: (res) => {
        this._channel = res.providers.find((channel) => {
          return (channel.id === 'appleiap')
        })

        if (this._channel) {
          success(this._channel)
        } else {
          this._channelError = {
            errMsg: 'paymentContext:fail iap service not found'
          }
          fail(this._channelError)
        }
      }
    });
  }

  get channel() {
    return this._channel;
  }
}

export {
  Iap,
  IapTransactionState
}
```

## PayPal支付 [参考](https://uniapp.dcloud.io/app-payment-paypal)
## PayPal Payment [Reference](https://uniapp.dcloud.io/app-payment-paypal)

## Stripe支付 [参考](https://uniapp.dcloud.io/app-payment-stripe)
## Stripe Payment [Reference](https://uniapp.dcloud.io/app-payment-stripe)

## Google Pay支付 [参考](https://uniapp.dcloud.io/app-payment-google)
## Google Pay [Reference](https://uniapp.dcloud.io/app-payment-google)

## 微信小程序支付
## WeChat MiniApp payment

```javascript
// 仅作为示例，非真实参数信息。
// Just as an example, not real parameter information.
uni.requestPayment({
    provider: 'wxpay',
	timeStamp: String(Date.now()),
	nonceStr: 'A1B2C3D4E5',
	package: 'prepay_id=wx20180101abcdefg',
	signType: 'MD5',
	paySign: '',
	success: function (res) {
		console.log('success:' + JSON.stringify(res));
	},
	fail: function (err) {
		console.log('fail:' + JSON.stringify(err));
	}
});
```

## 服务器相关
## Server related

### uniCloud开发
### uniCloud development
- 前端：使用`unicloud.callfunction`调用指定的云函数。
- Frontend: Use `unicloud.callfunction` to call the specified cloud function.
- 服务端：使用[uniPay](https://uniapp.dcloud.io/uniCloud/unipay)，该服务对应的演示工程在插件市场：[https://ext.dcloud.net.cn/plugin?id=1835](https://ext.dcloud.net.cn/plugin?id=1835)，此示例为完整的前后端支付演示，使用`uniPay`可极快的完成支付业务开发。
- Server: Use [uniPay](https://uniapp.dcloud.io/uniCloud/unipay), the demo project corresponding to this service is in the plugin market: [https://ext.dcloud.net.cn/plugin?id =1835](https://ext.dcloud.net.cn/plugin?id=1835), this example is a complete front-end and back-end payment demonstration. Using `uniPay` can complete payment business development very quickly.

### php开发
### php development
- 前端：使用 ``uni.request`` 请求服务端接口，得到订单数据，使用 ``uni.requestPayment`` 向支付平台发起支付请求，拉起支付平台的客户端进行支付。在hello uni-app里详细代码。
- Front-end: Use ``uni.request`` to request the server interface, get the order data, use ``uni.requestPayment`` to initiate a payment request to the payment platform, and pull up the client of the payment platform to pay. Detailed code in hello uni-app.
- 服务端：PHP可参考 [https://github.com/dcloudio/H5P.Server/tree/master/payment](https://github.com/dcloudio/H5P.Server/tree/master/payment)。
- Server: PHP can refer to [https://github.com/dcloudio/H5P.Server/tree/master/payment](https://github.com/dcloudio/H5P.Server/tree/master/payment).


## FAQ

- Q：如何使用ping++等聚合支付
- Q: How to use aggregate payment such as ping++
  A：uni-app的js API 已经完成跨端统一，客户端无需使用三方聚合支付。如果服务器选择`uniCloud`，也无需三方聚合支付。如果服务端使用php、java等传统服务器开发，可以在服务端使用三方聚合支付。
  A: The js API of uni-app has been unified across terminals, and the client does not need to use three-party aggregation payment. If the server chooses `uniCloud`, there is no need for three-party aggregation payment. If the server is developed using traditional servers such as php and java, you can use three-party aggregation payment on the server.

- Q：App端如何使用其他支付，比如银联、PayPal。
- Q: How to use other payments on the App, such as UnionPay and PayPal.
  A：App 3.4+ 已支持 PayPal，App 3.4 以前的版本使用下面的方案
  A: App 3.4+ already supports PayPal, the previous version of App 3.4 uses the following scheme
  	1. 可以在web-view组件里使用它们的wap版支付
  	1. You can use their wap version to pay in the web-view component
  	2. 可以集成原生sdk，插件市场均有，[详见](https://ext.dcloud.net.cn/search?q=%E6%94%AF%E4%BB%98)。也可以自行开发原生插件，开发文档见[https://ask.dcloud.net.cn/article/35428](https://ask.dcloud.net.cn/article/35428)
  	2. Native sdk can be integrated, available in the plug-in market, [see details](https://ext.dcloud.net.cn/search?q=%E6%94%AF%E4%BB%98). You can also develop native plug-ins by yourself. For development documents, see [https://ask.dcloud.net.cn/article/35428](https://ask.dcloud.net.cn/article/35428)

- Q：Appstore审核报PGPay SDK不允许上架的问题
- Q: Appstore audit reports that PGPay SDK is not allowed to be listed
  A：数字类产品（比如购买会员等不需要配送实物的商品），Apple规定必须使用苹果IAP应用内支付，给Apple分成30%。打包的时候不要勾选微信或支付宝等其他支付方式。如果你提交的包里包含了微信支付宝等支付的sdk，即使没使用，Appstore也会认为你有隐藏方式，以后会绕过IAP，不给Apple分成，因此拒绝你的App上线。云打包时，manifest里选上支付模块，但sdk配置里去掉微信支付和支付宝支付。很多开发者的Android版是包含微信和支付宝支付的，此时注意分开判断。详见[https://ask.dcloud.net.cn/article/36447](https://ask.dcloud.net.cn/article/36447)
  A: For digital products (such as purchasing members and other products that do not require physical delivery), Apple stipulates that Apple IAP in-app payment must be used, and Apple will be divided into 30%. When packing, do not check other payment methods such as WeChat or Alipay. If the package you submit contains sdk for payment such as WeChat, Alipay, etc., even if you do not use it, the Appstore will think that you have a hidden way, and will bypass the IAP in the future and will not give Apple a share, so it will refuse your App to go online. When the cloud is packaged, the payment module is selected in the manifest, but WeChat payment and Alipay payment are removed from the sdk configuration. Many developers' Android versions include WeChat and Alipay payments, so pay attention to separate judgments at this time. For details, see [https://ask.dcloud.net.cn/article/36447](https://ask.dcloud.net.cn/article/36447)
