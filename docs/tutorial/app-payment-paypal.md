## 申请开通Paypal
[登录/注册](https://www.paypal.com/c2/signin)

打开[paypal开发者中心](https://developer.paypal.com/developer/applications)

如图，依次选择My Apps & Credentials -> Live(如果创建沙箱环境点击Sandbox) -> Create App
![](https://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/payment/paypal_develop_center.png)

输入App Name,点击Create App
![](https://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/payment/paypal_create_app.png)

创建完成后，点击AppName
![](https://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/payment/paypal_setup_app_info.png)

查看Client ID 以及 Secret
![](https://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/payment/paypal_get_clientid.png)

添加return URL并保存(必须使用小写字母)
![](https://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/payment/paypal_add_returnurl.png)

勾选Accept payments 并点击Advanced options选择详情配置(点击保存后生效)
![](https://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/payment/paypal_accept_payments.png)

勾选Log in with PayPal 并点击Advanced options选择详情配置(点击保存后生效)
![](https://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/payment/paypal_log_in.png)

------

## 使用Paypal支付

在manifest.json文件“App模块配置”项的“Payment(支付)”下，勾选“paypal支付”项并配置相关参数
![](https://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/payment/paypal_setup_manifest_info.png)
配置说明:returnURL必须为paypal开发者中心配置的returnURL，否则无法调起支付


通过服务器生成支付订单并获取orderId(服务器获取订单信息详见[paypal API](https://developer.paypal.com/docs/api/orders/v2/)) 

应用中调用支付功能(支付参数如下)
    
| 参数名称    | 参数说明 | 必须 | 
|-------------|-------|-----|
| clientId    | 客户端id(获取方式详见paypal开通文档) | 是  |
| orderId     | 订单id  | 是 | 
| environment | 运行环境(sandbox/live) |是 |
| userAction  | 按钮样式(paynow/continue)  | 否 |
| currency    | [币种](https://developer.paypal.com/docs/api/reference/currency-codes/) (必须大写)   | 否 |

  * uni-app项目示例
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
  * 5+项目示例
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

应用发起支付完成后，返回订单id，服务器捕获或授权订单[详见paypal API](https://developer.paypal.com/docs/api/orders/v2/)

