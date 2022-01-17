#### 开通
* 登录[paypal开发者中心](https://developer.paypal.com/developer/applications)
* 创建应用,获取ClientID
* 添加returnURL等相关配置

更多信息详见[paypal开通文档](https://uniapp.dcloud.io/app-payment-paypal-open)

#### 配置
在manifest.json文件“App模块配置”项的“Payment(支付)”下，勾选“paypal支付”项并配置相关参数
![](https://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/payment/paypal_setup_manifest_info.png)
配置说明:returnURL必须为paypal开发者中心配置的returnURL，否则无法调起支付

#### 服务器生成订单
通过服务器生成支付订单并获取orderId(服务器获取订单信息详见[paypal API](https://developer.paypal.com/docs/api/orders/v2/)) 

#### 应用内发起支付
订单信息参数如下
    
| 参数名称    | 参数说明 | 必须 | 
|-------------|-------|-----|
| clientId    | 客户端id(获取方式详见paypal开通文档) | 是  |
| orderId     | 订单id  | 是 | 
| environment | 运行环境(sandbox/live) |是 |
| userAction  | 按钮样式(paynow/continue)  | 否 |
| currency    | [币种](https://developer.paypal.com/docs/api/reference/currency-codes/) (必须大写)   | 否 |

  * uni-app项目示例(provider填写paypal)
``` js
uni.getProvider({
   service: 'payment',
   success: function (res) {
     console.log(res.provider)
     if (~res.provider.indexOf('paypal')) {
       uni.requestPayment({
         "provider": "paypal", 
         "orderInfo": {
             "clientId": clientId, //客户端id
             "orderId": orderId,//订单id
             "userAction":"continue",//  paynow/continue
             "currency":"USD",//币种  
             "environment":"sandbox",//运行环境 sandbox/live
         },
         success: function (res) {
           var rawdata = JSON.parse(res.rawdata);
           console.log("orderId：" + rawdata.orderId);
         },
         fail: function (err) {
           console.log('fail:' + JSON.stringify(err));
         }
       })
     }
   }
});
```
  * 5+App项目示例
``` js
    //获取支付渠道
    var paypalSev = null;
    plus.payment.getChannels(function(channels) {
      for (var i in channels) {
        var channel = channels[i];
        if (channel.id === 'paypal') {
          paypalSev = channel;
        }
    	}
    }, function(e) {
    	console.log("获取支付渠道失败：" + e.message);
    });
    //发起支付
    var statement = {
        "clientId": clientId, //客户端id
        "orderId": orderId,//订单id
        "userAction":"continue",//  paynow/continue
        "currency":"USD",//币种  
        "environment":"sandbox",//运行环境 sandbox/live
    };
    plus.payment.request(this.paypalSev, statement, function(result) {
        var rawdata = JSON.parse(result.rawdata);
        console.log("orderId：" + rawdata.orderId);
    }, function(e) {
        console.log("支付失败：" + e.message);
    });
```

#### 服务器授权（完成授权后才会扣款）
应用发起支付完成后，返回订单id，服务器捕获或授权订单
[详见paypal API](https://developer.paypal.com/docs/api/orders/v2/)

