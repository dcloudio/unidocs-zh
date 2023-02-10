
### uni-app项目 苹果应用内支付支付用法
* uni-app项目 用法请转至[苹果应用内支付](https://uniapp.dcloud.io/api/plugins/payment.html#iap)


### 开通  
- 登录[App Store Connect](https://appstoreconnect.apple.com/)签署《付费应用程序协议》
- 在App Store Connect中为 App 配置 App 内购买项目产品，参考[创建App内购买项目](https://help.apple.com/app-store-connect/#/devae49fb316)，设置产品ID（productId）

更多信息详见苹果官方文档 [App 内购买项目配置流程](https://help.apple.com/app-store-connect/#/devb57be10e7)。

**注意**  
- 提交 App Store 的 App 才能开通应用内支付，使用`苹果企业账号`发布的 App 不能开通使用  
- 根据 App Store 审核指南条款 [3.1.1](https://developer.apple.com/cn/app-store/review/guidelines/#in-app-purchase) 要求，虚拟物品交易必须使用应用内支付，实物交易才可使用第三方支付(支付宝、微信等)
- 创建 App内购买项目的各项信息需要填写完整，保存后内购项目的状态是准备提交，当提交应用通过审核后，状态则变为已批准
- 正式上线前可在 Test Flight 平台添加 App Store Connect 用户，测试支付时可以使用此用户帐号


### 配置  
打开项目的manifest.json文件，在“App模块配置”项的“Payment(支付)”下勾选“Apple应用内支付”：
![](https://native-res.dcloud.net.cn/images/uniapp/payment/iap_setup_manifest_info.png)

> 提示：需提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)；本地离线打包参考[Apple应用内支付模块配置](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/pay?id=%e8%8b%b9%e6%9e%9c%e5%ba%94%e7%94%a8%e5%86%85%e8%b4%ad%e6%94%af%e4%bb%98)



### 5+应用 苹果应用内支付 
#### 应用内发起支付


#### 获取应用内支付对象
应用内支付通道标识为`appleiap`，调用[plus.payment.getChannels](https://www.html5plus.org/doc/zh_cn/payment.html#plus.payment.getChannels)获取应用内支付对象：
```  js
var iap = null;  //保存应用内支付对象
plus.payment.getChannels(function(channels){
    for (var i in channels) {
        var channel = channels[i];
        // 获取 id 为 'appleiap' 的 channel  
        if (channel.id === 'appleiap') {
            iap = channel;
        }
    }
  }, function(e){
    console.log("获取iap支付通道失败：" + e.message);
});
```

#### 获取商品信息
发起支付前需调用[requestOrder](https://www.html5plus.org/doc/zh_cn/payment.html#plus.payment.PaymentChannel.requestOrder)传入产品ID（productId）获取订单信息：
```  js
// ids 数组中的项为 App Store Connect 配置的内购买项目产品ID（productId）
var ids = ['商品ID 1', '商品ID 2'];
// iap 为应用内支付对象 
iap.requestOrder(ids, function(e) {  
    // 获取订单信息成功回调方法  
    console.log('requestOrder success: ' + JSON.stringify(e));
  }, function(e) {
    // 获取订单信息失败回调方法  
    console.log('requestOrder failed: ' + JSON.stringify(e));
});
```
##### 商品信息参数说明 
Object对象类型

| 属性 | 类型 | 说明 |
| :--- | :--- | :--- |
| title | String | 产品标题 |
| description | String | 产品描述 |
| productid | String |  产品id |
| price | Number |  价格 |
| pricelocal | String |  币种，例如: zh_CN@currency=CNY |
| discount | Array |  折扣信息(HBuilderX 3.7.0+ 手机系统iOS12.2+支持) |

##### 优惠促销信息参数说明
| 属性 | 类型 | 说明 |
| :--- | :--- | :--- |
| price | Number | 促销价格 |
| periodUnit | String | 周期单位(day: 日,week: 周,month: 月,year: 年) |
| discountType | String | 优惠类型(introductory: 推介促销  subscription: 订阅促销) |
| promotionType | String | 促销类型(payAsYouGo: 随用随付,payUpFront: 预先支付,freeTrial:  免费试用) |
| code | String | 促销代码|
| units | Number | 促销期数 |

#### 发起支付
调用 [plus.payment.request(channel, orderInfo, successCB, errorCB)](https://www.html5plus.org/doc/zh_cn/payment.html#plus.payment.request) 发起支付, channel参数为应用内支付对象，orderInfo参数为订单对象


使用订阅促销优惠参考[服务端生成签名](https://developer.apple.com/documentation/storekit/in-app_purchase/original_api_for_in-app_purchase/subscriptions_and_offers/generating_a_signature_for_promotional_offers)
##### 订单对象参数说明  
Object对象类型

| 属性 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| productid | String | 是 | App Store Connect 配置的内购买项目产品ID（productId） |
| username | String | 否 | 用户标识 |
| manualFinishTransaction | Boolean | 否 |  3.5.1+ 支持，手动关闭订单，值为 false 时支付完成后自动关闭订单，true时不关闭订单，需要在合适的时机调用 finishTransaction 关闭订单。建议设置为 true, 默认值为 false 是为了向下兼容 |
| paymentDiscount | Object | 否 | 促销优惠(HBuilderX 3.7.0+ 手机系统iOS12.2+支持) |

##### 促销优惠参数说明
| 属性 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| offerIdentifier | String | 是 | 促销id(客户端获取) |
| keyIdentifier | String | 是 | 密钥(appstore后台获取) |
| nonce | String | 是 | 服务器生成的UUID(必须小写 24小时有效) |
| signature | String | 是 | 签名(服务器生成) |
| timestamp | Number | 是 | 服务器创建证书的时间戳(毫秒 24小时有效) |



##### 示例代码
```  js
// restoreFlag 标记，用于判断在页面显示的时候是否需要调用 restoreComplateRequest 方法  
var restoreFlag = true; // 调用支付接口时标记 restoreFlag = true , 实际应用请将标记存储在 storage 中  
plus.payment.request(iap, {
    productid: "商品id",
    username: "appusername", // 用户标识  
    manualFinishTransaction: true // 3.5.1+ 支持，设置此参数后需要开发者主动关闭订单，参见下面的关闭订单方法 finishTransaction()
    paymentDiscount: {
        offerIdentifier:"",
        keyIdentifier:"",
        nonce:"",
        signature:"",
        timestamp:0
    } // 3.7.0+ 支持
  }, function(result){
    restoreFlag = false; // 支付成功清除标记 restoreFlag = false  
    // 支付成功，result 为 IAP商品交易信息对象 IAPTransaction 需将返回的支付凭证传给后端进行二次认证  
  }, function(e){
	// 支付失败 返回错误信息
});
```

#### 恢复购买
```  js
function restoreComplateRequest() {
    iap.restoreComplateRequest({
		manualFinishTransaction: true // 3.5.1+ 支持，设置此参数后需要开发者主动关闭订单，参见下面的关闭订单方法 finishTransaction()
	}, function(results){
        // results 格式为数组存放恢复的IAP商品交易信息对象 IAPTransaction，需要将返回的支付凭证传给后端进行二次认证  
    });
}
```

`restoreComplateRequest`作用描述:
- 已购的非消耗性商品以及订阅商品  
- 丢单的商品（所有类型）  
注意事项：**丢单的消耗类型商品**在支付完成后，**首次**调用该接口可返回支付凭证


#### 关闭订单

3.5.1+ 开始支持

```js
function finishTransaction() {
  // IAP商品交易信息对象 IAPTransaction
    iap.finishTransaction(transaction, (success) => {
      console.log('关闭订单成功');
    }, (fail) => {
      console.log('关闭订单失败');
    });
}
```

注意事项：
 1. 之前调用 `restoreComplateRequest` 和 `plus.payment.request` manualFinishTransaction 参数为false时该方法会失效



#### 丢单检测

在监听页面 `resume` 事件回调中调用 `restoreComplateRequest`  
```  js
document.addEventListener('resume',function(){  
    if(需要restore的触发条件) {  
        restoreComplateRequest({
			 manualFinishTransaction: true // 3.5.1+ 支持
		});
    }  
},false); 
```

#### 丢单问题说明  

用户没有绑定 AppStore 支付方式，调用 `plus.payment.request` 准备支付，触发失败 fail 回调，errCode=2，用户未绑定支付方式，app内支付流程结束。 系统弹出框引导用户绑定支付方式，此过程将跳转到系统应用 AppStore 进行绑定支付方式，绑定成功同步支付成功，用户成功付款



3.5.1 +

- 新增手动关闭订单参数 `manualFinishTransaction`, 在合适的时机调用 `iapChannel.finishTransaction` 关闭订单

- 新增关闭订单方法 `iapChannel.finishTransaction(Transaction, <Function> success, <Function> fail)`


```js
// 支付
plus.payment.request(iapChannel, {
  manualFinishTransaction: true
})

// 恢复
iapChannel.restoreComplateRequest({
  manualFinishTransaction: true
})
```

- 调用 `plus.payment.request` 后，可能存在以下原因触发失败回调

1. 网络原因
2. 用户首次绑卡

过段时间调用恢复购买 `restoreComplateRequest` 可以获取到上次异常或未完成的订单

- 正确关闭订单的方法

1. 客户端获取到支付成功的票据传递到服务器
2. 在服务器请求苹果服务器二次确认有效后通知客户端
3. 二次确认后可安全调用 `finishTransaction` 关闭订单

注意：
- 在订单未关闭时，即使卸载应用调用恢复购买 `restoreComplateRequest ` 仍然可以获取到
- A账号下载的应用，切换B账号, 调用 `restoreComplateRequest` 系统弹窗提示恢复购买失败


### 常见问题
- 越狱机器可能存在应用内支付的风险,可能会出现功能异常
- 服务端防刷单参考[IAP支付防止刷单](https://www.jianshu.com/p/5cf686e92924)
- 提前绑定支付方式可以有效避免丢单情况，示例:
`plus.runtime.openURL("https://apps.apple.com/account/billing"); //跳转AppStore绑定支付方式`
- 建议在每个接口调用前后添加打点日志收集，以便快速定位问题
- [推介促销优惠参考](https://developer.apple.com/cn/documentation/storekit/in-app_purchase/subscriptions_and_offers/implementing_introductory_offers_in_your_app/)
- [订阅促销优惠参考](https://developer.apple.com/cn/documentation/storekit/in-app_purchase/subscriptions_and_offers/implementing_subscription_offers_in_your_app/)

