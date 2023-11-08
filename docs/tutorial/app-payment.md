App端支付模块封装了市场上主流的三方支付平台SDK，提供JS API统一调用移动支付功能。
The App-side payment module encapsulates the mainstream three-party payment platform SDK in the market, and provides JS API to call the mobile payment function uniformly.

|项目类型|API|
|Project Type|API|
|:-|:-|
|uni-app|[uni.requestPayment(OBJECT)](api/plugins/payment?id=requestpayment)|
|5+ App/Wap2App|[plus.payment.*](https://www.html5plus.org/doc/zh_cn/payment.html)

如果服务端使用[uniCloud](https://uniapp.dcloud.io/uniCloud/README)，官方提供了[uniPay](https://uniapp.dcloud.io/uniCloud/unipay)云端统一支付服务，极大提升支付业务的开发效率，强烈推荐给开发者使用，参考示例：[https://ext.dcloud.net.cn/plugin?id=1835](https://ext.dcloud.net.cn/plugin?id=1835)
If the server uses [uniCloud](https://uniapp.dcloud.io/uniCloud/README), the official provides [uniPay](https://uniapp.dcloud.io/uniCloud/unipay) cloud unified payment service, extremely Greatly improve the development efficiency of payment business, it is strongly recommended for developers to use, reference example: [https://ext.dcloud.net.cn/plugin?id=1835](https://ext.dcloud.net.cn/ plugin?id=1835)

使用支付功能需在项目manifest.json的“App模块配置”中勾选“Payment(支付)”，并根据项目实际情况勾选使用的三方支付平台：
![](https://native-res.dcloud.net.cn/images/uniapp/payment/modules.png)

> 提示：支付模块参数配置需提交云端打包后才能生效，真机运行调试时请使用[自定义基座](http://ask.dcloud.net.cn/article/35115)
> Tip: The parameter configuration of the payment module can only take effect after submitting the cloud package. Please use the [custom base] when running and debugging the real machine (http://ask.dcloud.net.cn/article/35115)

使用支付功能基本流程：
The basic process of using the payment function:
- 向三方支付平台申请开通，有些平台（如微信支付）申请成功后会获取appid
- Apply to the third-party payment platform for activation, some platforms (such as WeChat payment) will obtain the appid after successful application
- 在服务端生成支付订单，获取支付订单数据
- Generate payment orders on the server and obtain payment order data
- 在客户端调用API进行支付
- Call API on the client to pay

支持的三方支付平台：
Supported third-party payment platforms:
- [Apple应用内支付](https://uniapp.dcloud.io/app-payment-aip)  
- [Apple In-App Payments](https://uniapp.dcloud.io/app-payment-aip)
HBuilderX1.0.0+版本支持
HBuilderX1.0.0+ version support
- [支付宝支付](https://uniapp.dcloud.io/app-payment-alipay)  
- [Alipay payment](https://uniapp.dcloud.io/app-payment-alipay)
- [微信支付](https://uniapp.dcloud.io/app-payment-weixin)  
- [WeChat Payment](https://uniapp.dcloud.io/app-payment-weixin)
- [Paypal支付](https://uniapp.dcloud.io/app-payment-paypal)  
- [Paypal payment](https://uniapp.dcloud.io/app-payment-paypal)
HBuilderX3.3.7+版本支持
HBuilderX3.3.7+ version support
- [Stripe支付](https://uniapp.dcloud.io/app-payment-stripe)  
- [Stripe Payment](https://uniapp.dcloud.io/app-payment-stripe)
HBuilderX3.3.7+版本支持
HBuilderX3.3.7+ version support
- [Google支付](https://uniapp.dcloud.io/app-payment-google)  
- [Google Pay](https://uniapp.dcloud.io/app-payment-google)
HBuilderX3.3.7+版本支持
HBuilderX3.3.7+ version support

