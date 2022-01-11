1. 登录支付宝开发者中心，创建应用，开通App支付功能，配置密钥
   详见[支付宝官方文档](https://opendocs.alipay.com/open/204/105297/)

2. 在manifest.json文件“App模块配置”项的“Payment(支付)”下，勾选“支付宝支付”项
![](https://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/payment/alipay_setup_manifest_info.png)

3. 通过服务器生成支付订单,参考:
   [生成支付订单示例(PHP)](https://github.com/dcloudio/H5P.Server/tree/master/payment/alipayrsa2)
   [老版本"移动快捷支付"示例代码(PHP)](https://github.com/dcloudio/H5P.Server/tree/master/payment/alipay)
   [生成支付订单示例(C#)](http://ask.dcloud.net.cn/article/197)

4. 应用中调用支付功能(支付参数如下)

| 参数名称    | 参数说明 | 必须 | 
|-------------|-------|-----|
| orderInfo    | app 支付请求参数字符串，主要包含商户的订单信息，key=value 形式，以&连接。 | 是  |

orderInfo 示例如下，参数说明见[请求参数说明](https://opendocs.alipay.com/open/204/105465/)，orderInfo 的获取必须来源于服务端
```
app_id=2015052600090779&biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22seller_id%22%3A%22%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.02%22%2C%22subject%22%3A%221%22%2C%22body%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E6%95%B0%E6%8D%AE%22%2C%22out_trade_no%22%3A%22314VYGIAGG7ZOYY%22%7D&charset=utf-8&method=alipay.trade.app.pay&sign_type=RSA2&timestamp=2016-08-15%2012%3A12%3A15&version=1.0&sign=MsbylYkCzlfYLy9PeRwUUIg9nZPeN9SfXPNavUCroGKR5Kqvx0nEnd3eRmKxJuthNUx4ERCXe552EV9PfwexqW%2B1wbKOdYtDIb4%2B7PL3Pc94RZL0zKaWcaY3tSL89%2FuAVUsQuFqEJdhIukuKygrXucvejOUgTCfoUdwTi7z%2BZzQ%3D
```

  * uni-app项目示例
``` js
uni.getProvider({
   service: 'payment',
   success: function (res) {
     console.log(res.provider)
     if (~res.provider.indexOf('alipay')) {
       uni.requestPayment({
         "provider": "alipay", 
         "orderInfo": orderInfo, //此处为服务器返回的订单信息字符串
         success: function (res) {
           var rawdata = JSON.parse(res.rawdata);
           console.log("支付成功");
         },
         fail: function (err) {
           console.log('支付失败:' + JSON.stringify(err));
         }
       })
     }
   }
});
```
  * 5+项目示例
``` js
//获取支付渠道
var alipaySev = null;
plus.payment.getChannels(function(channels) {
  for (var i in channels) {
    var channel = channels[i];
    if (channel.id === 'alipay') {
      alipaySev = channel;
    }
	}
}, function(e) {
	console.log("获取支付渠道失败：" + e.message);
});
//发起支付
var statement = orderInfo; //此处为服务器返回的订单信息字符串
plus.payment.request(alipaySev, statement, function(result) {
    var rawdata = JSON.parse(result.rawdata);
    console.log("支付成功");
}, function(e) {
    console.log("支付失败：" + e.message);
});
```

