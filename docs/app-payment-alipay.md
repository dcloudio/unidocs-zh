### 开通  
- 登录 [支付宝开放平台](https://open.alipay.com/)，进入控制台页面
- [创建移动应用](https://opendocs.alipay.com/open/200/105310)，填写应用信息并提交审核
- 在应用详情页面的`能力列表`中添加`APP支付`功能，详情参考[添加应用功能](https://opendocs.alipay.com/open/200/105310#%E6%B7%BB%E5%8A%A0%E5%BA%94%E7%94%A8%E5%8A%9F%E8%83%BD)
- 进入开发设置完成加密方式、IP白名单等开发信息设置，详情参考[配置应用环境](https://opendocs.alipay.com/open/200/105310#%E9%85%8D%E7%BD%AE%E5%BA%94%E7%94%A8%E7%8E%AF%E5%A2%83)
- 添加功能和配置密钥后（获取公钥、私钥，用于服务器生成订单），将应用提交审核，详情参考[上线应用](https://opendocs.alipay.com/open/200/golive/)
- 应用上线后，完成签约才能在生产环境使用支付功能，详情参考[签约功能](https://opendocs.alipay.com/open/200/105314/)

更多信息详见支付宝官方文档 [App 支付接入准备](https://opendocs.alipay.com/open/204/105297/)


### 配置  
打开项目的manifest.json文件，在“App模块配置”项的“Payment(支付)”下，勾选“支付宝支付”：
![](https://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/payment/alipay_setup_manifest_info.png)

> 提示：支付宝支付没有绑定应用包名、签名信息，可以使用标准基座开发测试，正式发布前请提交云端打包并使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)；本地离线打包参考[Android平台支付宝模块配置](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/pay?id=%e6%94%af%e4%bb%98%e5%ae%9d)、[iOS平台支付宝模块配置](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/pay?id=%e6%94%af%e4%bb%98%e5%ae%9d)


### 服务器生成订单  
在 App 端调用支付前，需在业务服务器生成支付订单，可参考：
- [生成支付订单示例(PHP)](https://github.com/dcloudio/H5P.Server/tree/master/payment/alipayrsa2)
- [老版本"移动快捷支付"示例代码(PHP)](https://github.com/dcloudio/H5P.Server/tree/master/payment/alipay)
- [生成支付订单示例(C#)](http://ask.dcloud.net.cn/article/197)

更多信息详见支付宝官方文档 [服务端接入流程](https://opendocs.alipay.com/open/204/01dcc0)


### 应用内发起支付  

- uni-app项目  
调用 [uni.requestPayment(OBJECT)](https://uniapp.dcloud.io/api/plugins/payment?id=requestpayment) 发起支付，OBJECT参数中provider属性值固定为`alipay`、orderInfo属性值为订单对象
- 5+ App项目  
调用 [plus.payment.request(channel, orderInfo, successCB, errorCB)](https://www.html5plus.org/doc/zh_cn/payment.html#plus.payment.request) 发起支付, channel参数为支付宝支付对象，orderInfo参数为订单对象


#### 订单对象说明  
支付宝支付订单对象为String类型，字符串数据格式为"application/x-www-form-urlencoded"，即 key=value 形式，使用 & 符号连接。示例如下：
```
app_id=2015052600090779&biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22seller_id%22%3A%22%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.02%22%2C%22subject%22%3A%221%22%2C%22body%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E6%95%B0%E6%8D%AE%22%2C%22out_trade_no%22%3A%22314VYGIAGG7ZOYY%22%7D&charset=utf-8&method=alipay.trade.app.pay&sign_type=RSA2&timestamp=2016-08-15%2012%3A12%3A15&version=1.0&sign=MsbylYkCzlfYLy9PeRwUUIg9nZPeN9SfXPNavUCroGKR5Kqvx0nEnd3eRmKxJuthNUx4ERCXe552EV9PfwexqW%2B1wbKOdYtDIb4%2B7PL3Pc94RZL0zKaWcaY3tSL89%2FuAVUsQuFqEJdhIukuKygrXucvejOUgTCfoUdwTi7z%2BZzQ%3D
```

更多信息详见支付宝官方文档 [APP支付请求参数说明](https://opendocs.alipay.com/open/204/105465/)


#### 示例代码
- uni-app项目  
``` js
var orderInfo = '';  //从服务器获取的订单
uni.getProvider({
    service: 'payment',
    success: function (res) {
        console.log(res.provider)
        if (~res.provider.indexOf('alipay')) {
            uni.requestPayment({
                "provider": "alipay",   //固定值为"alipay"
                "orderInfo": orderInfo, //此处为服务器返回的订单信息字符串
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
``` js
var orderInfo = '';  //从服务器获取的订单
//获取支付宝支付对象
var alipaySev = null;  // 支付宝支付对象
plus.payment.getChannels(function(channels){
    for (var i in channels) {
        var channel = channels[i];
        if (channel.id === 'alipay') {
            alipaySev = channel;
        }
    }
    //发起支付
    plus.payment.request(alipaySev, orderInfo, function(result){
        var rawdata = JSON.parse(result.rawdata);
        console.log("支付成功");
      }, function(e){
        console.log("支付失败：" + e.message);
    });
  }, function(e){
    console.log("获取支付渠道失败：" + e.message);
});
```

