### 开通  
- 登录[paypal开发者中心](https://developer.paypal.com/developer/applications)，创建应用
- 在 My Apps 中点击已创建的应用，获取ClientID（支付订单中需要）
- 添加return URL等相关配置，设置return URL时需注意：
  + 格式为“包名+://paypalpay”，必需全小写
  + 可添加多个return URL分别给Android和iOS平台使用

更多信息详见 [申请开通Paypal操作指南](https://uniapp.dcloud.io/app-payment-paypal-open)

仅供iOS11.0及以上版本使用

### 配置  
在manifest.json文件“App模块配置”项的“Payment(支付)”下，勾选“paypal支付”项并配置相关参数
![](https://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/payment/paypal_setup_manifest_info.png)

**参数说明**  
- returnURL_android  
Android平台使用的return URL，必须与paypal开发者中心配置的值一致，否则无法调起支付
- returnURL_ios  
iOS平台使用的return URL，必须与paypal开发者中心配置的值一致，否则无法调起支付

> 提示：returnURL_android 和 returnURL_ios 可以相同，不相同时需要paypal开发者中心添加多个return URL


### 服务器生成订单
在 App 端调用支付前，需在业务服务器生成支付订单并获取`orderId`，详情可参考paypal官方文档：[Create Order](https://developer.paypal.com/api/orders/v2/#orders_create)


### 应用内发起支付

- uni-app项目  
调用 [uni.requestPayment(OBJECT)](https://uniapp.dcloud.io/api/plugins/payment?id=requestpayment) 发起支付，OBJECT参数中provider属性值固定为`paypal`、orderInfo属性值为订单对象
- 5+ App项目  
调用 [plus.payment.request(channel, orderInfo, successCB, errorCB)](https://www.html5plus.org/doc/zh_cn/payment.html#plus.payment.request) 发起支付, channel参数为paypal支付对象，orderInfo参数为订单对象

#### 订单对象参数说明  
Object对象类型

| 属性 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| clientId | String | 是 | 客户端id，在paypal开发者中心创建应用时可获取 |
| currency | String | 否 | 币种，必须大写，取值参考paypal官方文档[Currency Codes](https://developer.paypal.com/docs/api/reference/currency-codes/) |
| environment | String | 是 | 运行环境，可取值sandbox/live，sandbox表示沙盒环境（用于开发测试），live表示线上环境（正式发布） |
| orderId | String | 是 | 订单id，服务器生成支付订单时可获取 |
| userAction | String | 否 | 按钮样式，可取值paynow/continue |


#### 示例代码  
- uni-app项目  
``` js
//订单对象，从服务器获取
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
``` js    
//订单对象，从服务器获取
var orderInfo = {
  "clientId": "clientId from paypal",     //客户端id
  "orderId": "orderId from server",       //订单id
  "userAction":"continue",  //  paynow/continue
  "currency":"USD",         // 币种  
  "environment":"sandbox",  //运行环境 sandbox/live
};
//获取支付渠道
var paypalSev = null;
plus.payment.getChannels(function(channels){
    for (var i in channels) {
        var channel = channels[i];
        if (channel.id === 'paypal') {
            paypalSev = channel;
        }
    }
    //发起支付
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
在App端发起支付完成后，返回订单id，并没有完成支付操作，需要在服务器授权或捕获订单完成扣款。
- 授权订单付款参考paypal官方文档：[Authorize payment for order](https://developer.paypal.com/api/orders/v2/#orders_authorize)  
- 捕获订单付款参考paypal官方文档：[Capture payment for order](https://developer.paypal.com/api/orders/v2/#orders_capture)  


