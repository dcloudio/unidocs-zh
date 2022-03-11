App端支付模块封装了市场上主流的三方支付平台SDK，提供JS API统一调用移动支付功能。

|项目类型|API|
|:-|:-|
|uni-app|[uni.requestPayment(OBJECT)](api/plugins/payment?id=requestpayment)|
|5+ App/Wap2App|[plus.payment.*](https://www.html5plus.org/doc/zh_cn/payment.html)

如果服务端使用[uniCloud](https://uniapp.dcloud.io/uniCloud/README)，官方提供了[uniPay](https://uniapp.dcloud.io/uniCloud/unipay)云端统一支付服务，极大提升支付业务的开发效率，强烈推荐给开发者使用，参考示例：[https://ext.dcloud.net.cn/plugin?id=1835](https://ext.dcloud.net.cn/plugin?id=1835)

使用支付功能需在项目manifest.json的“App模块配置”中勾选“Payment(支付)”，并根据项目实际情况勾选使用的三方支付平台：
![](https://native-res.dcloud.net.cn/images/uniapp/payment/modules.png)

> 提示：支付模块参数配置需提交云端打包后才能生效，真机运行调试时请使用[自定义基座](http://ask.dcloud.net.cn/article/35115)

使用支付功能基本流程：
- 向三方支付平台申请开通，有些平台（如微信支付）申请成功后会获取appid
- 在服务端生成支付订单，获取支付订单数据
- 在客户端调用API进行支付

支持的三方支付平台：
- [Apple应用内支付](https://uniapp.dcloud.io/app-payment-aip)  
HBuilderX1.0.0+版本支持
- [支付宝支付](https://uniapp.dcloud.io/app-payment-alipay)  
- [微信支付](https://uniapp.dcloud.io/app-payment-weixin)  
- [Paypal支付](https://uniapp.dcloud.io/app-payment-paypal)  
HBuilderX3.3.7+版本支持
- [Stripe支付](https://uniapp.dcloud.io/app-payment-stripe)  
HBuilderX3.3.7+版本支持
- [Google支付](https://uniapp.dcloud.io/app-payment-google)  
HBuilderX3.3.7+版本支持

