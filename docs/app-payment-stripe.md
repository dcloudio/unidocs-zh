#### 申请开通Stripe
1. [登录/注册](https://dashboard.stripe.com/login)

2. 进入主页后，点击顶部继续按钮，完善公司信息
![](https://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/payment/stripe_home_page.png)

3. 完善信息
![](https://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/payment/stripe_company_info.png)

4. 完善公司信息后，回到首页即可在右侧查看密钥
![](https://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/payment/stripe_get_publishkey.png)

------

#### 使用Stripe支付
1. 在manifest.json文件“App模块配置”项的“Payment(支付)”下，勾选“stripe支付”项并配置returnURL(只需配置iOS),格式为'your-app://stripe'(示例 hbuilder://stripe)
![](https://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/payment/stripe_setup_manifest_info.png)

   相关参考:[配置一个自定义页面内跳转协议 (URL Scheme)](https://ask.dcloud.net.cn/article/64)
2. 服务器生成支付订单[参考stripeAPI](https://stripe.com/docs/payments/accept-a-payment)
    ``` js
    uni.request({
      url: 'https://stripe-mobile-payment-sheet.glitch.me/checkout',//仅为示例
      method: "POST", 
      success:(res) => {
        console.log("订单信息" + res.data);
        var publishKey = res.data.publishableKey;
        var paymentIntent = res.data.paymentIntent; 
        var customer = res.data.customer;
        var ephemeralKey = res.data.ephemeralKey;
      }
	 })
    ```
3. 应用中调用支付功能(支付参数如下)
    
| 参数名称    | 参数说明 | 必须 | 
|-------------|-------|-----|
| publishKey    | 公钥(获取方式详见stripe开通文档) | 是  |
| paymentIntent     | 订单信息  | 是 | 
| merchantName | 商户名称 |是 |
| customer  | 如果要设置支付方式供以后使用，则必须将它绑定到一个 Customer | 否 |
| ephemeralKey    | EphemeralKey的作用是让 SDK 临时访问 Customer   | 否 |
| isAllowDelay    | 是否支持延迟支付,默认不支持(将 isAllowDelay 设置为 true 后可使用一些较慢的支付方式，例如 SEPA 借记和 Sofort 对于这些支付方式，只有当 PaymentSheet 完成后才能知道最终的付款状态是成功还是失败。如果您允许这样，则通知客户您已确认他们的订单，但收到付款后才能履行（例如，发货）订单。)   | 否 |

注：customer与ephemeralKey必须成对出现，只传其一无效
  * uni-app项目示例
  ``` js
  uni.getProvider({
   service: 'payment',
   success: function(res) {
		console.log(res);
      if (~res.provider.indexOf('stripe')) {
      
        uni.request({
          url: 'https://stripe-mobile-payment-sheet.glitch.me/checkout',
          method: "POST",
          success: (res) => {
            console.log(res.data);
              uni.requestPayment({
                "provider": "stripe",
                "orderInfo": {
                  "publishKey": res.data.publishableKey, //公钥
                  "paymentIntent": res.data.paymentIntent, //订单信息
                  "customer": res.data.customer, //支付方式等信息
                  "ephemeralKey": res.data.ephemeralKey, //信息key
                  "isAllowDelay": true, //是否支持延迟支付  默认false
                  "merchantName": "数字天堂", //商户名
                },
                success(res) {
                  console.log(res);
                },
                fail(e) {
                  console.log(e);
                }
             });
          }
		});
		}
	}
  });
  ```

  * 5+项目示例
    ``` js
    //获取渠道
    var stripeSev = null;
    plus.payment.getChannels(function(channels) {
     for (var i in channels) {
       var channel = channels[i];
       if (channel.id === 'stripe') {
        stripeSev = channel;
       }
	  }
	}, function(e) {
	  console.log("获取支付渠道失败：" + e.message);
	});
	//发起支付
    var statement = {
      "publishKey": publishKey, //公钥
      "paymentIntent": paymentIntent,//订单加密信息
      "merchantName":"数字天堂",//  
      "customer":customer,
      "ephemeralKey":ephemeralKey,//
      "isAllowDelay":true,//
    };
    plus.payment.request(stripeSev, statement, function(result) {
      console.log("支付成功");
    }, function(e) {
      console.log("支付失败：" + e.message);
    });
    ```

