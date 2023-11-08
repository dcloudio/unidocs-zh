#### 申请开通Google支付
#### Apply for Google Pay
1. 注册谷歌账号。  
1. Register a Google account.

2. 打开[Google Pay  | Google Developers](https://developers.google.com/pay)并登录谷歌账号。  
2. Open [Google Pay | Google Developers](https://developers.google.com/pay) and log in to your Google account.

3. 进入控制台[Sign up: Google Pay's Business Console](https://pay.google.com/business/console/?pli=1) 并设置商家名称。如图：  
3. Go to the console [Sign up: Google Pay's Business Console](https://pay.google.com/business/console/?pli=1) and set the business name. As shown in the figure:
![image-20220110010505156](https://native-res.dcloud.net.cn/images/uniapp/payment/googlepay_register_business.png)

4. 设置完成后进入控制台页面，并设置对应的商家资料。  
4. After the setting is complete, go to the console page and set the corresponding business information.
![image-20220110011030589](https://native-res.dcloud.net.cn/images/uniapp/payment/googlepay_merchants_setup.png)

5. 当需要上线正式版的时候，app的签名秘钥指纹需要确保与`Google Play`注册的发布秘钥指纹一致。
5. When the official version needs to be launched, the signature key fingerprint of the app needs to be consistent with the release key fingerprint registered with `Google Play`.


------

#### 使用Google支付  
#### Pay with Google

**环境要求**  
**Environmental requirements**  
1. 海外网络环境。
1. Overseas network environment.
2. 确保您的 Android 设备装有 18.0.0 或更高版本的 Google Play 服务。
2. Make sure your Android device has Google Play services version 18.0.0 or higher.

**支付参数**  
**Payment parameters**
​	谷歌支付分为两种:`CARD`、`PAYPAL`付款方式，且不同付款方式配置并不相同，具体字段请参照[谷歌支付官方字段说明](https://developers.google.com/pay/api/android/reference/request-objects?authuser=1#PaymentMethod)
​ Google Pay is divided into two types: `CARD`, `PAYPAL` payment methods, and the configuration of different payment methods is not the same, please refer to [Google Pay Official Field Description](https://developers.google.com/pay /api/android/reference/request-objects?authuser=1#PaymentMethod)

1. `CARD` 支付  
1. `CARD` payment

| 参数名称    | 参数说明 | 必须 |
| Parameter Name | Parameter Description | Required |
|-------------|-------|-----|
|environment|环境（1：生产 3：测试）|是|
|environment|environment(1:production 3:test)|yes|
|paymentMethodType|付款方式（CARD、PAYPAL）|是|
|paymentMethodType|Payment Method (CARD, PAYPAL)|Yes|
|existingPaymentMethodRequired|如果设置为true，isReadyToPay方法就会返回true。|否|
|existingPaymentMethodRequired|If set to true, the isReadyToPay method will return true. |No|
|currencyCode|货币单位（ ISO 4217）|是|
|currencyCode|Unit of currency (ISO 4217)|Yes|
|countryCode|在欧洲经济区使用的货币单位|在欧洲经济区必填|
|countryCode|Unit of currency used in the EEA|Required in the EEA|
|transactionId|交易id|当想要接收googlepay回调的时候必填|
|transactionId|Transaction id|Required when you want to receive googlepay callback|
|totalPriceStatus|价格状态（NOT_CURRENTLY_KNOWN、ESTIMATED、FINAL）|是|
|totalPriceStatus|Price Status (NOT_CURRENTLY_KNOWN, ESTIMATED, FINAL) |Yes|
|totalPrice|总价|是|
|totalPrice|Total Price|Yes|
|totalPriceLabel|显示的价格|否|
|totalPriceLabel|Price displayed|No|
|checkoutOption|影响支付按钮显示的配置（DEFAULT、COMPLETE_IMMEDIATE_PURCHASE）|否|
|checkoutOption|Configurations that affect payment button display (DEFAULT, COMPLETE_IMMEDIATE_PURCHASE) |No|
|merchantName|商户名称|否|
|merchantName|Merchant Name|No|
|emailRequired|是否需要email|否|
|emailRequired|Email Required|No|
|shippingAddressRequired|是否需要地址|否|
|shippingAddressRequired|Required address|No|
|shippingPhoneNumberRequired|送货地址是否需要电话号码|否|
|shippingPhoneNumberRequired|Does the shipping address require a phone number|No|
|allowedCountryCodes|允许的国家code。|否|
|allowedCountryCodes|Allowed country codes. |No|
|allowedAuthMethods|支持的身份校验|是|
|allowedAuthMethods|Supported Authentication|Yes|
|allowedCardNetworks|支持的卡类型（AMEX、DISCOVER、INTERAC、JCB、MASTERCARD、VISA）|是|
|allowedCardNetworks|Supported Card Types (AMEX, DISCOVER, INTERAC, JCB, MASTERCARD, VISA)|Yes|
|allowPrepaidCards|是否支持预付卡|否|
|allowPrepaidCards|Whether Prepaid Cards Are Supported|No|
|allowCreditCards|是否支持信用卡|否|
|allowCreditCards|Whether credit cards are supported|no|
|assuranceDetailsRequired|是否需要付款凭据|否|
|assuranceDetailsRequired|Required Payment Credentials|No|
|billingAddressRequired|是否需要账单地址|否|
|billingAddressRequired|Required Billing Address|No|
|billingAddressParametersFormat|账单地址格式（MIN、FULL）|否|
|billingAddressParametersFormat|Billing Address Format (MIN, FULL) |No|
|phoneNumberRequired|处理交易是否需要电话号码|否|
|phoneNumberRequired|Phone number is required to process transaction|No|
|tokenizationSpecificationType|支付方式的token type（当支付方式是CARD的时候支持PAYMENT_GATEWAY、DIRECT。当支付方式是PayPal的时候只支持DIRECT）|是|
|tokenizationSpecificationType|The token type of the payment method (PAYMENT_GATEWAY and DIRECT are supported when the payment method is CARD. Only DIRECT is supported when the payment method is PayPal) |Yes|
|gateway|支付网关[详情](https://developers.google.com/pay/api/android/reference/request-objects?authuser=1#PaymentDataRequest)|当`tokenizationSpecificationType`为`PAYMENT_GATEWAY`时必填|
|gateway|Payment Gateway[Details](https://developers.google.com/pay/api/android/reference/request-objects?authuser=1#PaymentDataRequest)|Required when `tokenizationSpecificationType` is `PAYMENT_GATEWAY`|
|gatewayMerchantId|支付网关的商户id|当`tokenizationSpecificationType`为`PAYMENT_GATEWAY`时必填|
|gatewayMerchantId|The merchant id of the payment gateway|Required when `tokenizationSpecificationType` is `PAYMENT_GATEWAY`|
|protocolVersion|加密协议版本|当`tokenizationSpecificationType`为`DIRECT`时必填|
|protocolVersion|Encryption protocol version|Required when `tokenizationSpecificationType` is `DIRECT`|
|publicKey|公钥|当`tokenizationSpecificationType`为`DIRECT`时必填|
|publicKey|Public key|Required when `tokenizationSpecificationType` is `DIRECT`|
|buildTokenizationSpecification|自定义构造tokenizationSpecification参数，设置此字段时，会覆盖掉`tokenizationSpecificationType`、`gateway`、`gatewayMerchantId`、`protocolVersion`、`publicKey`字段。(HBuilderX 3.5.1+支持)|否|
|buildTokenizationSpecification|Customize the constructed tokenizationSpecification parameter. When this field is set, the `tokenizationSpecificationType`, `gateway`, `gatewayMerchantId`, `protocolVersion`, `publicKey` fields will be overwritten. (HBuilderX 3.5.1+ support)|No|


2. `PAYPAL` 支付
2. `PAYPAL` payment

| 参数名称    | 参数说明 | 必须 | 
| Parameter Name | Parameter Description | Required |
|-------------|-------|-----|
|environment|环境（1：生产 3：测试）|是|
|environment|environment(1:production 3:test)|yes|
|paymentMethodType|付款方式（CARD、PAYPAL）|是|
|paymentMethodType|Payment Method (CARD, PAYPAL)|Yes|
|existingPaymentMethodRequired|如果设置为true，isReadyToPay方法就会返回true。|否|
|existingPaymentMethodRequired|If set to true, the isReadyToPay method will return true. |No|
|currencyCode|货币单位（ ISO 4217）|是|
|currencyCode|Unit of currency (ISO 4217)|Yes|
|countryCode|在欧洲经济区使用的货币单位|在欧洲经济区必填|
|countryCode|Unit of currency used in the EEA|Required in the EEA|
|transactionId|交易id|当想要接收googlepay回调的时候必填|
|transactionId|Transaction id|Required when you want to receive googlepay callback|
|totalPriceStatus|价格状态（NOT_CURRENTLY_KNOWN、ESTIMATED、FINAL）|是|
|totalPriceStatus|Price Status (NOT_CURRENTLY_KNOWN, ESTIMATED, FINAL) |Yes|
|totalPrice|总价|是|
|totalPrice|Total Price|Yes|
|totalPriceLabel|显示的价格|否|
|totalPriceLabel|Price displayed|No|
|checkoutOption|影响支付按钮显示的配置（DEFAULT、COMPLETE_IMMEDIATE_PURCHASE）|否|
|checkoutOption|Configurations that affect payment button display (DEFAULT, COMPLETE_IMMEDIATE_PURCHASE) |No|
|merchantName|商户名称|否|
|merchantName|Merchant Name|No|
|emailRequired|是否需要email|否|
|emailRequired|Email Required|No|
|shippingAddressRequired|是否需要地址|否|
|shippingAddressRequired|Required address|No|
|shippingPhoneNumberRequired|送货地址是否需要电话号码|否|
|shippingPhoneNumberRequired|Does the shipping address require a phone number|No|
|allowedCountryCodes|允许的国家code。|否|
|allowedCountryCodes|Allowed country codes. |No|
|merchant|PayPal的商户id|是|
|merchant|PayPal's merchant id|yes|


#### 示例
#### Example

```js

plus.payment.getChannels((providers) => {
					let provider = providers.find(function(e) {
						return e.id === "google-pay";
					});

					let paymentMethodType = "CARD";
					
					let cardPaymentMethodConfig = {
						environment: 3, // 必填 1 是product  3是test
						paymentMethodType: paymentMethodType, //必填 CARD、PAYPAL
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
						allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"], //必填
						allowedCardNetworks: ["AMEX", "DISCOVER", "JCB", "MASTERCARD", "VISA"], //必填
						allowPrepaidCards: false, //可选
						// allowCreditCards:false,//可选  
						// allowCreditCards: false, // optional
						assuranceDetailsRequired: false, //可选
						billingAddressRequired: true, //可选
						billingAddressParametersFormat: "FULL", //可选 MIN
						phoneNumberRequired: false, //可选
						tokenizationSpecificationType: "PAYMENT_GATEWAY", //必填 PAYMENT_GATEWAY、DIRECT
						gateway: "example", //PAYMENT_GATEWAY时必填
						gatewayMerchantId: "exampleGatewayMerchantId", //PAYMENT_GATEWAY时必填
						protocolVersion: "", //DIRECT时必填
						publicKey: "", //DIRECT时必填
            buildTokenizationSpecification:{//可选，此字段是为了方便开发者自定义构造tokenizationSpecification参数,设置此字段时，会覆盖掉`tokenizationSpecificationType`、`gateway`、`gatewayMerchantId`、`protocolVersion`、`publicKey`字段。(HBuilderX 3.5.1+支持)
							"type":"PAYMENT_GATEWAY",
							"parameters":{
								"gateway":"custom-gateway",
								"gatewayMerchantId":"mock-gatewayMerchantId"
							}
						}
					};
					

					let paypalPaymentMethodConfig = {
						environment: 3, // 必填 1 是product  3是test
						paymentMethodType: paymentMethodType, //必填 CARD、PAYPAL
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
						merchantId: "MVHSBANAS6KSE", //必填
					};

					let statement;

					if (paymentMethodType === "CARD") {
						statement = {
							...cardPaymentMethodConfig
						};
					} else {
						statement = {
							...paypalPaymentMethodConfig
						};
					}

					console.log(JSON.stringify(statement));

					plus.payment.request(provider, statement, (result) => {
						console.log("支付成功 :" + JSON.stringify(result));
					}, (e) => {
						console.log("支付失败： " + JSON.stringify(e));
					})
				});
```

