### 开通  
- [登录Stripe](https://dashboard.stripe.com/login)注册账号
* 注册账号后可获取开发测试的API密钥（公钥、私钥），注意：需[激活账户](https://dashboard.stripe.com/account/onboarding)获取正式的API密钥
* 设置[支付方式](https://dashboard.stripe.com/settings/payment_methods)

更多信息详见[申请开通Stripe操作指南](https://uniapp.dcloud.io/app-payment-stripe-open)

**注意**
- iOS系统仅支持iOS13.0及以上版本

### 配置  
在manifest.json文件“App模块配置”项的“Payment(支付)”下，勾选“paypal支付”项并配置相关参数
![](https://native-res.dcloud.net.cn/images/uniapp/payment/stripe_setup_manifest_info.png)

**参数说明**  
- returnURL  
格式为"your-app://stripe"(示例 io.dcloud.test://stripe)，'your-app'为应用的scheme，参考:[配置一个自定义页面内跳转协议 (URL Scheme)](https://ask.dcloud.net.cn/article/64)


### 服务器生成订单
在 App 端调用支付前，需在业务服务器生成[PaymentIntent](https://stripe.com/docs/api/payment_intents)，详情可参考Stripe官方文档：[Add an endpoint](https://stripe.com/docs/payments/accept-a-payment?platform=android&ui=payment-sheet#add-server-endpoint)

激活账户前可通过POST请求Stripe官方沙盒服务器[https://stripe.com/docs/payments/accept-a-payment](https://stripe.com/docs/payments/accept-a-payment)，生成测试PaymentIntent，示例如下：

```  js
uni.request({
    url: 'https://stripe-mobile-payment-sheet.glitch.me/checkout',//仅为示例
    method: "POST", 
    success:(res) => {
        console.log("订单信息" + res.data);
        var publishKey = res.data.publishableKey;
        var paymentIntent = res.data.paymentIntent; 
        var customer = res.data.customer;
        var ephemeralKey = res.data.ephemeralKey;
        var billingDetails = res.data.billingDetails,
    }
});
```


### 应用内发起支付

- uni-app项目  
调用 [uni.requestPayment(OBJECT)](https://uniapp.dcloud.io/api/plugins/payment?id=requestpayment) 发起支付，OBJECT参数中provider属性值固定为`stripe`、orderInfo属性值为订单对象
- 5+ App项目  
调用 [plus.payment.request(channel, orderInfo, successCB, errorCB)](https://www.html5plus.org/doc/zh_cn/payment.html#plus.payment.request) 发起支付, channel参数为stripe支付对象，orderInfo参数为订单对象


#### 订单对象参数说明  
Object对象类型

| 属性 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| customer | String | 否 | Stripe的[Customer](https://stripe.com/docs/api/customers)对象，如为同一用户执行定期重复性收款，并跟踪多笔收款 |
| ephemeralKey | String | 否 | Stripe的Customer Ephemeral Key，用于临时访问Customer |
| isAllowDelay | String | 否 | 是否支持延迟支付,默认不支持(将 isAllowDelay 设置为 true 后可使用一些较慢的支付方式，例如 SEPA 借记和 Sofort 对于这些支付方式，只有当 PaymentSheet 完成后才能知道最终的付款状态是成功还是失败。如果您允许这样，则通知客户您已确认他们的订单，但收到付款后才能履行（例如，发货）订单。) |
| merchantName | String | 是 | 商户名称 |
| paymentIntent | String | 是 | Stripe的[PaymentIntent](https://stripe.com/docs/api/payment_intents)对象，对应服务器生成的支付订单 |
| publishKey | String | 是 | 公钥，在Stripe注册账号后可获取 |
| billingDetails | Object | 否 | 银行卡账单信息(包含姓名、手机号码、邮箱地址、账单地址等)|

> 注意：customer与ephemeralKey必须成对出现，只传其一无效


#### 示例代码  
- uni-app项目  
``` js
//订单对象
var orderInfo = {
    "customer": "Stripe的Customer",                    //Customer
    "ephemeralKey": "Stripe的Customer Ephemeral Key",  //临时访问Customer的Key
    "isAllowDelay": true,                              //是否支持延迟支付  默认false
    "merchantName": "DCloud",                          //商户名
    "paymentIntent": "Stripe的PaymentIntent",          //订单信息
    "publishKey": "Public Key",                        //公钥
    "billingDetails":{         //账单信息(可选)
        "name":"",
        "email":"",
        "phone":"",
        "address":{
            "city":"",
            "country":"CN",//国家代码(ISO 3166-1 alpha-2)
            "line1":"",
            "line2":"",
            "postalCode":"",
            "state":""
        }
    }                      
};
// 从Stripe测试服务器获取订单数据
uni.request({
    url: 'https://stripe-mobile-payment-sheet.glitch.me/checkout',
    method: "POST",
    success: (res) => {
        orderInfo = {
            "customer": res.data.customer,
            "ephemeralKey": res.data.ephemeralKey,
            "isAllowDelay": true,
            "merchantName": "DCloud",
            "paymentIntent": res.data.paymentIntent,
            "publishKey": res.data.publishableKey,
            "billingDetails": res.data.billingDetails
        };
    }
});
//...
//发起支付
uni.getProvider({
    service: 'payment',
    success: function(res) {
        if (~res.provider.indexOf('stripe')) {
            uni.requestPayment({
                "provider": "stripe",
                "orderInfo": orderInfo,
                success(res) {
                    console.log("requestPayment Success: "+JSON.stringify(res));
                },
                fail(e) {
                    console.log("requestPayment failed: "+JSON.stringify(e));
                }
            });
        }
    }
});
```  

- 5+ App项目  
``` js
//订单对象，从服务器获取
var orderInfo = {
    "customer": "Stripe的Customer",                    //Customer
    "ephemeralKey": "Stripe的Customer Ephemeral Key",  //临时访问Customer的Key
    "isAllowDelay": true,                              //是否支持延迟支付  默认false
    "merchantName": "DCloud",                          //商户名
    "paymentIntent": "Stripe的PaymentIntent",          //订单信息
    "publishKey": "Public Key",                        //公钥
    "billingDetails":{         //账单信息(可选)
        "name":"",
        "email":"",
        "phone":"",
        "address":{
            "city":"",
            "country":"CN",//国家代码(ISO 3166-1 alpha-2)
            "line1":"",
            "line2":"",
            "postalCode":"",
            "state":""
        }
    }
};
//获取支付渠道
var stripeSev = null;
plus.payment.getChannels(function(channels){
    for (var i in channels) {
        var channel = channels[i];
        if (channel.id === 'stripe') {
            stripeSev = channel;
        }
    }
    //发起支付
    plus.payment.request(stripeSev, orderInfo, function(result) {
         var rawdata = JSON.parse(result.rawdata);
         console.log("支付成功");
    }, function(e) {
         console.log("支付失败：" + JSON.stringify(e));
    });
  }, function(e){
      console.log("获取支付渠道失败：" + JSON.stringify(e));
});
```

