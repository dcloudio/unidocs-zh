## 申请开通微信支付
登录[微信开放平台](https://open.weixin.qq.com/)，申请移动应用并开通支付功能，申请应用后可以获取 AppID
应用接入[微信商户平台](https://pay.weixin.qq.com/index.php/core/home/login?return_url=%2F)，选择 App 支付
开通支付功能后可获取支付业务服务器配置数据：PARTNER（财付通商户号）、PARTNER_KEY（财付通密钥）、PAYSIGNKEY（支付签名密钥）
更多信息详见[移动应用开发](https://open.weixin.qq.com/cgi-bin/frame?t=home/app_tmpl&lang=zh_CN)

## 使用微信支付
在manifest.json文件“App模块配置”项的“Payment(支付)”下，勾选“微信支付”项
![](https://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/payment/wxpay_setup_manifest_info.png)

通过服务器生成支付订单,参考:[微信支付示例(PHP)](https://github.com/dcloudio/H5P.Server/tree/master/payment/wxpayv3)

应用中调用支付功能(支付参数如下)

| 参数名称    | 参数说明 | 必须 | 
|-------------|-------|-----|
| appid    | 微信开放平台 - 应用 - AppId，注意和微信小程序、公众号 AppId 可能不一致 | 是  |
| noncestr     | 随机字符串  | 是 | 
| package | 固定值 |是 |
| partnerid  | 微信支付商户号  | 是 |
| prepayid    | 统一下单订单号   | 是 |
| timestamp    | 时间戳（单位：秒）   | 是 |
| sign    | 签名，这里用的 MD5 签名   | 是 |

  * uni-app项目示例  
``` js
uni.getProvider({
   service: 'payment',
   success: function (res) {
     console.log(res.provider)
     if (~res.provider.indexOf('wxpay')) {
       uni.requestPayment({
         "provider": "wxpay", 
         "orderInfo": {
           "appid": "wx499********7c70e",  // 微信开放平台 - 应用 - AppId，注意和微信小程序、公众号 AppId 可能不一致
           "noncestr": "c5sEwbaNPiXAF3iv", // 随机字符串
           "package": "Sign=WXPay",        // 固定值
           "partnerid": "148*****52",      // 微信支付商户号
           "prepayid": "wx202254********************fbe90000", // 统一下单订单号 
           "timestamp": 1597935292,        // 时间戳（单位：秒）
           "sign": "A842B45937F6EFF60DEC7A2EAA52D5A0" // 签名，这里用的 MD5 签名
         }, 
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
var wxpaySev = null;
plus.payment.getChannels(function(channels) {
   for (var i in channels) {
     var channel = channels[i];
     if (channel.id === 'wxpay') {
        wxpaySev = channel;
     }
	}
}, function(e) {
	 console.log("获取支付渠道失败：" + e.message);
});
//发起支付
var statement = {
     "appid": "wx499********7c70e",  // 微信开放平台 - 应用 - AppId，注意和微信小程序、公众号 AppId 可能不一致
     "noncestr": "c5sEwbaNPiXAF3iv", // 随机字符串
     "package": "Sign=WXPay",        // 固定值
     "partnerid": "148*****52",      // 微信支付商户号
     "prepayid": "wx202254********************fbe90000", // 统一下单订单号 
     "timestamp": 1597935292,        // 时间戳（单位：秒）
     "sign": "A842B45937F6EFF60DEC7A2EAA52D5A0" // 签名，这里用的 MD5 签名
};
plus.payment.request(wxpaySev, statement, function(result) {
     var rawdata = JSON.parse(result.rawdata);
     console.log("支付成功");
}, function(e) {
     console.log("支付失败：" + e.message);
});
```

