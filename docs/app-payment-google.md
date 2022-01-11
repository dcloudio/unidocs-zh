#### 申请开通Google支付
1. 注册谷歌账号。

2. 打开[Google Pay  | Google Developers](https://developers.google.com/pay)并登录谷歌账号。

3. 进入控制台[Sign up: Google Pay's Business Console](https://pay.google.com/business/console/?pli=1) 并设置商家名称。如图：

   ​	![image-20220110010505156](https://gitee.com/duoguang/md-image/raw/master/image-20220110010505156.png)

4. 设置完成后进入控制台页面，并设置对应的商家资料。

   ![image-20220110011030589](https://gitee.com/duoguang/md-image/raw/master/image-20220110011030589.png)

5. 当需要上线正式版的时候，app的签名秘钥指纹需要确保与`Google Play`注册的发布秘钥指纹一致。


------

#### 使用Google支付

**环境要求**
1. 海外网络环境。
2. 确保您的 Android 设备装有 18.0.0 或更高版本的 Google Play 服务。

**支付参数**
由于谷歌支付参数较多，并且区分付款方式，且不同付款方式配置并不相同，所以需要开发者在`公共配置`的基础上根据不同的支付方式追加对应的配置。具体字段请参照[谷歌支付官方字段说明](https://developers.google.com/pay/api/android/reference/request-objects?authuser=1#PaymentMethod)

###### 公共配置
| 参数名称    | 参数说明 | 必须 |
|-------------|-------|-----|
|environment|环境（1：生产 3：测试）|是|
|paymentMethodType|付款方式（CARD、PAYPAL）|是|
|existingPaymentMethodRequired|如果设置为true，isReadyToPay方法就会返回true。|否|
|currencyCode|货币单位（ ISO 4217）|是|
|countryCode|在欧洲经济区使用的货币单位|在欧洲经济区必填|
|transactionId|交易id|当想要接收googlepay回调的时候必填|
|totalPriceStatus|价格状态（NOT_CURRENTLY_KNOWN、ESTIMATED、FINAL）|是|
|totalPrice|总价|是|
|totalPriceLabel|显示的价格|否|
|checkoutOption|影响支付按钮显示的配置（DEFAULT、COMPLETE_IMMEDIATE_PURCHASE）|否|
|merchantName|商户名称|否|
|emailRequired|是否需要email|否|
|shippingAddressRequired|是否需要地址|否|
|shippingPhoneNumberRequired|送货地址是否需要电话号码|否|
|allowedCountryCodes|允许的国家code。|否|

###### 付款方式配置

​	付款方式分为两种:`CARD`、`PAYPAL`，所以参数列表所以根据`paymentMethodType`参数区分为以下两种。

1. `CARD` 支付
| 参数名称    | 参数说明 | 必须 |
|-------------|-------|-----|
|allowedAuthMethods|支持的身份校验|是|
|allowedCardNetworks|支持的卡类型（AMEX、DISCOVER、INTERAC、JCB、MASTERCARD、VISA）|是|
|allowPrepaidCards|是否支持预付卡|否|
|allowCreditCards|是否支持信用卡|否|
|assuranceDetailsRequired||否|
|billingAddressRequired|是否需要账单地址|否|
|billingAddressParametersFormat|账单地址格式（MIN、FULL）|否|
|phoneNumberRequired|处理交易是否需要电话号码|否|
|tokenizationSpecificationType|支付方式的token type（当支付方式是CARD的时候支持PAYMENT_GATEWAY、DIRECT。当支付方式是PayPal的时候只支持DIRECT）|是|
|gateway|支付网关[详情](https://developers.google.com/pay/api/android/reference/request-objects?authuser=1#PaymentDataRequest)|当`tokenizationSpecificationType`为`PAYMENT_GATEWAY`时必填|
|gatewayMerchantId|支付网关的商户id|当`tokenizationSpecificationType`为`PAYMENT_GATEWAY`时必填|
|protocolVersion|加密协议版本|当`tokenizationSpecificationType`为`DIRECT`时必填|
|publicKey|公钥|当`tokenizationSpecificationType`为`DIRECT`时必填|


2. `PAYPAL` 支付
| 参数名称    | 参数说明 | 必须 | 
|-------------|-------|-----|
|merchant|PayPal的商户id|是|

#### 示例

```js
plus.payment.getChannels((providers) => {
					let provider = providers.find(function(e) {
						return e.id === "google-pay";
					});

					let paymentMethodType = "CARD";
					
					let statement = {
						environment: 3, // 必填 1 是product  3是test
						paymentMethodType: paymentMethodType,//必填 CARD、PAYPAL
						existingPaymentMethodRequired: false, //可选 如果设置为true同时已经准备好了支付allowedPaymentMethods中的付款方式，isReadyToPay就会返回true。
					
						currencyCode: "USD", //必填
						countryCode: "US", //在欧洲经济区必填
						transactionId: "", //当你想要接收googlepay回调的时候必填
						totalPriceStatus: "FINAL", //必填  NOT_CURRENTLY_KNOWN、ESTIMATED、FINAL
						totalPrice: "111.00", //必填 满足正则格式^[0-9]+(\.[0-9][0-9])?$
						totalPriceLabel: "100heelo", //可选
						checkoutOption: "DEFAULT", //可选 DEFAULT、COMPLETE_IMMEDIATE_PURCHASE
					
						merchantName: "Example Merchant", //可选
						emailRequired: true, //可选
						shippingAddressRequired: true, //可选
						shippingPhoneNumberRequired: false, //可选
						allowedCountryCodes: ["US", "GB"], //可选
					};
					
					

					let paymentMethodConfig = {};

					let paypalPaymentMethodConfig = {
						merchantId: "", //必填
					};

					let cardPaymentMethodConfig = {
						allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"], //必填
						allowedCardNetworks: ["AMEX", "DISCOVER", "JCB", "MASTERCARD", "VISA"], //必填
						allowPrepaidCards: false, //可选
						// allowCreditCards:false,//可选  
						assuranceDetailsRequired: false, //可选
						billingAddressRequired: true, //可选
						billingAddressParametersFormat: "FULL", //可选 MIN
						phoneNumberRequired: false, //可选
						tokenizationSpecificationType: "PAYMENT_GATEWAY", //必填 PAYMENT_GATEWAY、DIRECT
						gateway: "example", //PAYMENT_GATEWAY时必填
						gatewayMerchantId: "exampleGatewayMerchantId", //PAYMENT_GATEWAY时必填
						protocolVersion: "", //DIRECT时必填
						publicKey: "", //DIRECT时必填
					};


					if (paymentMethodType === "PAYPAL") {
						paymentMethodConfig = {
							...paypalPaymentMethodConfig
						};
					} else {
						paymentMethodConfig = {
							...cardPaymentMethodConfig
						};
					}

					

					statement = {
						...statement,
						...paymentMethodConfig
					};

					console.log(JSON.stringify(statement));

					plus.payment.request(provider, statement, (result) => {
						console.log("支付成功 :" + JSON.stringify(result));
					}, (e) => {
						console.log("支付失败： " + JSON.stringify(e));
					})
				});
```

