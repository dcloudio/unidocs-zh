### 开通  
### Open
- 登录[微信开放平台](https://open.weixin.qq.com/)，添加移动应用并提交审核，审核通过后可获取应用ID（AppID，支付订单中需要使用）
- Log in to [WeChat Open Platform](https://open.weixin.qq.com/), add a mobile application and submit it for review. After the review, you can get the application ID (AppID, which is required for payment orders)
- 在应用详情中`申请开通`微信支付功能，根据页面提示填写资料，提交审核
- `Apply to activate` WeChat payment function in the application details, fill in the information according to the page prompts, and submit for review
- 支付申请审核通过后将收到邮件，包括`商户号`（PartnerID，支付订单中需要使用）和`登录密码`
- After the payment application is approved, you will receive an email, including the `merchant ID` (PartnerID, required for payment orders) and `login password`
- 使用`商户号`和`登录密码`登录[微信商户平台](https://pay.weixin.qq.com/index.php/core/home/login)，进入 “账户中心” > “API安全” > “设置APIv2密钥” 设置API密钥（用于服务器生成订单），详情参考[API证书及密钥](https://kf.qq.com/faq/180830UVRZR7180830Ij6ZZz.html)
- Log in to [WeChat Merchant Platform](https://pay.weixin.qq.com/index.php/core/home/login) using `merchant ID` and `login password`, go to "Account Center" > "API Security" ” > “Set APIv2 Key” Set the API key (used by the server to generate orders). For details, please refer to [API certificate and key](https://kf.qq.com/faq/180830UVRZR7180830Ij6ZZz.html)

更多信息详见微信官方文档 [APP支付接入申请流程指引](https://developers.weixin.qq.com/doc/oplatform/Mobile_App/WeChat_Pay/Vendor_Service_Center.html)，服务器接入相关信息详见 [APP支付接入前准备](https://pay.weixin.qq.com/wiki/doc/apiv3/open/pay/chapter2_5_1.shtml)
For more information, please refer to the official WeChat document [APP payment access application process guidelines](https://developers.weixin.qq.com/doc/oplatform/Mobile_App/WeChat_Pay/Vendor_Service_Center.html), and the server access related information please refer to [Preparation for APP payment access](https://pay.weixin.qq.com/wiki/doc/apiv3/open/pay/chapter2_5_1.shtml)


### 配置
### Configuration
在manifest.json文件“App模块配置”项的“Payment(支付)”下，勾选“微信支付”项
![](https://native-res.dcloud.net.cn/images/uniapp/payment/wxpay_setup_manifest_info.png)

#### 参数说明  
#### Parameter Description  
- appid  
微信开放平台申请的应用ID（AppID）
The application ID (AppID) applied for by the WeChat Open Platform
- iOS平台通用链接（Universal Link）  
- Universal Link for iOS platform
在iOS平台微信支付使用的通用链接，必须与微信开放平台 “管理中心” > “应用详情” > “开发信息” 中的“Universal Links”项中配置一致，更多详情参考 [一键生成iOS通用链接](https://uniapp.dcloud.io/api/plugins/universal-links)
The universal link used in WeChat payment on the iOS platform must be configured in the same way as the "Universal Links" item in "Administration Center" > "Application Details" > "Development Information" of the WeChat open platform. For more details, please refer to [One-click generation of iOS universal links Links](https://uniapp.dcloud.io/api/plugins/universal-links)

**注意**  
**Notice**  
- 配置后需提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)
- After configuration, the cloud package must be submitted to take effect. Please use the [custom debugging base] when the real machine is running (https://ask.dcloud.net.cn/article/35115)
- 本地离线打包参考[Android平台微信支付模块配置](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/pay?id=%e5%be%ae%e4%bf%a1%e6%94%af%e4%bb%98)、[iOS平台微信支付模块配置](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/pay?id=%e5%be%ae%e4%bf%a1%e6%94%af%e4%bb%98)
- Local offline packaging reference [Android platform WeChat payment module configuration](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/pay?id=%e5%be%ae%e4%bf%a1%e6 %94%af%e4%bb%98), [iOS platform WeChat payment module configuration](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/pay?id=%e5%be%ae% e4%bf%a1%e6%94%af%e4%bb%98)


### 服务器生成订单
### Server generates order
在 App 端调用支付前，需在业务服务器生成支付订单，可参考：
Before invoking payment on the app side, a payment order needs to be generated on the business server, please refer to:
- [微信支付示例(PHP)](https://github.com/dcloudio/H5P.Server/tree/master/payment/wxpayv3)
- [WeChat payment example (PHP)](https://github.com/dcloudio/H5P.Server/tree/master/payment/wxpayv3)

更多信息详见微信支付官方文档 [APP支付统一下单](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_1)
For more information, please refer to WeChat payment official document [APP payment unified order](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_1)


### 应用内发起支付
### In-app payment

- uni-app项目  
- uni-app project
调用 [uni.requestPayment(OBJECT)](https://uniapp.dcloud.io/api/plugins/payment?id=requestpayment) 发起支付，OBJECT参数中provider属性值固定为`wxpay`、orderInfo属性值为订单对象
Call [uni.requestPayment(OBJECT)](https://uniapp.dcloud.io/api/plugins/payment?id=requestpayment) to initiate payment. The value of the provider attribute in the OBJECT parameter is fixed to `wxpay`, and the value of the orderInfo attribute is the order object
- 5+ App项目  
- 5+ App items
调用 [plus.payment.request(channel, orderInfo, successCB, errorCB)](https://www.html5plus.org/doc/zh_cn/payment.html#plus.payment.request) 发起支付, channel参数为微信支付对象，orderInfo参数为订单对象
Call [plus.payment.request(channel, orderInfo, successCB, errorCB)](https://www.html5plus.org/doc/zh_cn/payment.html#plus.payment.request) to initiate payment, the channel parameter is WeChat payment object, the orderInfo parameter is the order object


#### 订单对象参数说明  
#### Order object parameter description
Object对象类型
Object object type

| 属性 | 类型 | 必填 | 说明 |
| Attribute | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| appid | String | 是 | 应用ID（AppID），请登录[微信开放平台](https://open.weixin.qq.com/)查看，注意与公众号的APPID不同 |
| appid | String | Yes | Application ID (AppID), please log in to [WeChat Open Platform](https://open.weixin.qq.com/) to view, note that it is different from the APPID of the official account |
| partnerid | String | 是 | 微信支付分配的商户号（PartnerID）|
| partnerid | String | Yes | The merchant ID (PartnerID) allocated by WeChat Pay |
| prepayid | String | 是 | 预支付交易会话ID |
| prepayid | String | Yes | Prepay transaction session ID |
| package | String | 是 | 扩展字段，固定值"Sign=WXPay" |
| package | String | Yes | Extended field, fixed value "Sign=WXPay" |
| noncestr | String | 是 | 随机字符串，不长于32位 |
| noncestr | String | yes | random string, no longer than 32 bits |
| timestamp | String | 是 | 时间戳，标准北京时间，时区为东八区，自1970年1月1日 0点0分0秒以来的秒数 |
| timestamp | String | Yes | Timestamp, standard Beijing time, the time zone is Dongba District, the number of seconds since 0:00:00 on January 1, 1970 |
| sign | String | 是 | 签名，详见[签名生成算法](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=4_3) |
| sign | String | Yes | Signature, see [Signature Generation Algorithm](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=4_3) |

更多信息详见微信支付官方文档 [APP支付调起支付接口](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_12&index=2)
For more information, please refer to the official WeChat payment document [APP payment calls up payment interface](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_12&index=2)


#### 示例代码  
#### Sample code
- uni-app项目  
- uni-app project
``` js
//订单对象，从服务器获取
//Order object, obtained from the server
var orderInfo = {
  "appid": "wx499********7c70e",  // 应用ID（AppID）
  "partnerid": "148*****52",      // 商户号（PartnerID）
  "prepayid": "wx202254********************fbe90000", // 预支付交易会话ID
  "package": "Sign=WXPay",        // 固定值
  "noncestr": "c5sEwbaNPiXAF3iv", // 随机字符串
  "timestamp": 1597935292,        // 时间戳（单位：秒）
  "sign": "A842B45937F6EFF60DEC7A2EAA52D5A0" // 签名，这里用的 MD5 签名
};
uni.getProvider({
    service: 'payment',
    success: function (res) {
        console.log(res.provider)
        if (~res.provider.indexOf('wxpay')) {
            uni.requestPayment({
                "provider": "wxpay",  //固定值为"wxpay"
                "orderInfo": orderInfo, 
                success: function (res) {
                    var rawdata = JSON.parse(res.rawdata);
                    console.log("支付成功");
                },
                fail: function (err) {
                    console.log('支付失败:' + JSON.stringify(err));
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
  "appid": "wx499********7c70e",  // 应用ID（AppID）
  "partnerid": "148*****52",      // 商户号（PartnerID）
  "prepayid": "wx202254********************fbe90000", // 预支付交易会话ID
  "package": "Sign=WXPay",        // 固定值
  "noncestr": "c5sEwbaNPiXAF3iv", // 随机字符串
  "timestamp": 1597935292,        // 时间戳（单位：秒）
  "sign": "A842B45937F6EFF60DEC7A2EAA52D5A0" // 签名，这里用的 MD5 签名
};
//获取支付渠道
//get payment channel
var wxpaySev = null;
plus.payment.getChannels(function(channels){
    for (var i in channels) {
        var channel = channels[i];
        if (channel.id === 'wxpay') {
            wxpaySev = channel;
        }
    }
    //发起支付
    //Initiate payment
    plus.payment.request(wxpaySev, orderInfo, function(result) {
        var rawdata = JSON.parse(result.rawdata);
        console.log("支付成功");
    }, function(e) {
        console.log("支付失败：" + JSON.stringify(e));
    });
  }, function(e){
      console.log("获取支付渠道失败：" + JSON.stringify(e));
});
```

