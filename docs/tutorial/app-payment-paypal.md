### 开通  
### Open
- 登录[paypal开发者中心](https://developer.paypal.com/developer/applications)，创建应用
- Log in to the [paypal Developer Center](https://developer.paypal.com/developer/applications) to create an application
- 在 My Apps 中点击已创建的应用，获取ClientID（支付订单中需要）
- Click the created app in My Apps to get ClientID (required in payment order)
- 添加return URL等相关配置，设置return URL时需注意：
- Add related configurations such as return URL. When setting the return URL, pay attention to:
  + 格式为“包名+://paypalpay”，必需全小写
  + The format is "package name+://paypalpay", which must be all lowercase
  + 可添加多个return URL分别给Android和iOS平台使用
  + Multiple return URLs can be added for Android and iOS platforms respectively

更多信息详见 [申请开通Paypal操作指南](https://uniapp.dcloud.io/app-payment-paypal-open)
For more information, please refer to [Operation Guide for Applying to Open Paypal](https://uniapp.dcloud.io/app-payment-paypal-open)

**注意**
**Notice**
- iOS系统仅支持iOS11.0及以上版本
- iOS system only supports iOS11.0 and above

### 配置  
### Configuration
在manifest.json文件“App模块配置”项的“Payment(支付)”下，勾选“paypal支付”项并配置相关参数
![](https://native-res.dcloud.net.cn/images/uniapp/payment/paypal_setup_manifest_info.png)

**参数说明**  
**Parameter Description**  
- returnURL_android  
Android平台使用的return URL，必须与paypal开发者中心配置的值一致，否则无法调起支付
The return URL used by the Android platform must be the same as the value configured in the paypal developer center, otherwise the payment cannot be invoked
- returnURL_ios  
iOS平台使用的return URL，必须与paypal开发者中心配置的值一致，否则无法调起支付
The return URL used by the iOS platform must be the same as the value configured in the paypal developer center, otherwise the payment cannot be invoked

> 提示：returnURL_android 和 returnURL_ios 可以相同，不相同时需要paypal开发者中心添加多个return URL
> Tip: returnURL_android and returnURL_ios can be the same, if they are different, you need to add multiple return URLs to the paypal developer center


### 服务器生成订单
### Server generates order
在 App 端调用支付前，需在业务服务器生成支付订单并获取`orderId`，详情可参考paypal官方文档：[Create Order](https://developer.paypal.com/api/orders/v2/#orders_create)
Before calling the payment on the App side, you need to generate a payment order on the business server and obtain the `orderId`. For details, please refer to the official paypal documentation: [Create Order](https://developer.paypal.com/api/orders/v2/#orders_create )


### 应用内发起支付
### In-app payment

- uni-app项目  
- uni-app project
调用 [uni.requestPayment(OBJECT)](https://uniapp.dcloud.io/api/plugins/payment?id=requestpayment) 发起支付，OBJECT参数中provider属性值固定为`paypal`、orderInfo属性值为订单对象
Call [uni.requestPayment(OBJECT)](https://uniapp.dcloud.io/api/plugins/payment?id=requestpayment) to initiate payment, the provider attribute value in the OBJECT parameter is fixed to `paypal`, and the orderInfo attribute value is the order object
- 5+ App项目  
- 5+ App items
调用 [plus.payment.request(channel, orderInfo, successCB, errorCB)](https://www.html5plus.org/doc/zh_cn/payment.html#plus.payment.request) 发起支付, channel参数为paypal支付对象，orderInfo参数为订单对象
Call [plus.payment.request(channel, orderInfo, successCB, errorCB)](https://www.html5plus.org/doc/zh_cn/payment.html#plus.payment.request) to initiate payment, the channel parameter is paypal payment object, the orderInfo parameter is the order object

#### 订单对象参数说明  
#### Order object parameter description
Object对象类型
Object object type

| 属性 | 类型 | 必填 | 说明 |
| Attribute | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| clientId | String | 是 | 客户端id，在paypal开发者中心创建应用时可获取 |
| clientId | String | Yes | Client ID, which can be obtained when creating an application in the paypal developer center |
| currency | String | 否 | 币种，必须大写，取值参考paypal官方文档[Currency Codes](https://developer.paypal.com/docs/api/reference/currency-codes/) |
| currency | String | No | The currency must be capitalized. For the value, please refer to the official paypal documentation [Currency Codes](https://developer.paypal.com/docs/api/reference/currency-codes/) |
| environment | String | 是 | 运行环境，可取值sandbox/live，sandbox表示沙盒环境（用于开发测试），live表示线上环境（正式发布） |
| environment | String | Yes | The operating environment, which can be sandbox/live, sandbox represents the sandbox environment (for development and testing), and live represents the online environment (officially released) |
| orderId | String | 是 | 订单id，服务器生成支付订单时可获取 |
| orderId | String | Yes | Order id, which can be obtained when the server generates a payment order |
| userAction | String | 否 | 按钮样式，可取值paynow/continue |
| userAction | String | No | Button style, value paynow/continue |


#### 示例代码  
#### Sample code
- uni-app项目  
- uni-app project
``` js
//订单对象，从服务器获取
//Order object, obtained from the server
var orderInfo = {
  "clientId": "clientId from paypal",     //客户端id
  "orderId": "orderId from server",       //订单id
  "userAction": "continue",  //  paynow/continue
  "currency":"USD",          // 币种  
  "environment":"sandbox",   //运行环境 sandbox/live
};
uni.getProvider({
    service: 'payment',
    success: function (res) {
        console.log(res.provider)
        if (~res.provider.indexOf('paypal')) {
            uni.requestPayment({
                "provider": "paypal", 
                "orderInfo": orderInfo,
                success: function (res) {
                    var rawdata = JSON.parse(res.rawdata);
                    console.log("orderId：" + rawdata.orderId);
                },
                fail: function (err) {
                    console.log('fail:' + JSON.stringify(err));
                }
            });
        }
    }
});
```

- 5+ App项目  
- 5+ App items
``` js    
//订单对象，从服务器获取
//Order object, obtained from the server
var orderInfo = {
  "clientId": "clientId from paypal",     //客户端id
  "orderId": "orderId from server",       //订单id
  "userAction":"continue",  //  paynow/continue
  "currency":"USD",         // 币种  
  "environment":"sandbox",  //运行环境 sandbox/live
};
//获取支付渠道
//get payment channel
var paypalSev = null;
plus.payment.getChannels(function(channels){
    for (var i in channels) {
        var channel = channels[i];
        if (channel.id === 'paypal') {
            paypalSev = channel;
        }
    }
    //发起支付
    //Initiate payment
    plus.payment.request(paypalSev, orderInfo, function(result) {
         var rawdata = JSON.parse(result.rawdata);
         console.log("支付成功");
    }, function(e) {
         console.log("支付失败：" + JSON.stringify(e));
    });
  }, function(e){
      console.log("获取支付渠道失败：" + JSON.stringify(e));
});
```


### 服务器授权  
### Server authorization
在App端发起支付完成后，返回订单id，并没有完成支付操作，需要在服务器授权或捕获订单完成扣款。
After the payment is initiated on the App side, the order id is returned, and the payment operation has not been completed. The server needs to authorize or capture the order to complete the deduction.
- 授权订单付款参考paypal官方文档：[Authorize payment for order](https://developer.paypal.com/api/orders/v2/#orders_authorize)  
- For authorizing order payment, please refer to the official paypal documentation: [Authorize payment for order](https://developer.paypal.com/api/orders/v2/#orders_authorize)
- 捕获订单付款参考paypal官方文档：[Capture payment for order](https://developer.paypal.com/api/orders/v2/#orders_capture)  
- To capture order payment refer to paypal official documentation: [Capture payment for order](https://developer.paypal.com/api/orders/v2/#orders_capture)


