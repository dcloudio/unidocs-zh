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
![](https://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/payment/iap_setup_manifest_info.png)

> 提示：需提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)；本地离线打包参考[Apple应用内支付模块配置](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/pay?id=%e8%8b%b9%e6%9e%9c%e5%ba%94%e7%94%a8%e5%86%85%e8%b4%ad%e6%94%af%e4%bb%98)

### 应用内发起支付

苹果应用内支付不需要从服务器生成订单，需在发起支付前调用[requestOrder](https://www.html5plus.org/doc/zh_cn/payment.html#plus.payment.PaymentChannel.requestOrder)获取订单信息。

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

#### 获取订单信息
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

#### 发起支付
- uni-app项目  
调用 [uni.requestPayment(OBJECT)](https://uniapp.dcloud.io/api/plugins/payment?id=requestpayment) 发起支付，OBJECT参数中provider属性值固定为`appleiap`、orderInfo属性值为订单对象
- 5+ App项目  
调用 [plus.payment.request(channel, orderInfo, successCB, errorCB)](https://www.html5plus.org/doc/zh_cn/payment.html#plus.payment.request) 发起支付, channel参数为应用内支付对象，orderInfo参数为订单对象

##### 订单对象参数说明  
Object对象类型

| 属性 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| productid | String | 是 | App Store Connect 配置的内购买项目产品ID（productId） |
| username | String | 否 | 用户标识 |
| optimize | Boolean | 否 | 是否优化解决丢掉问题 |

##### 示例代码
- uni-app项目
```  js
var restoreFlag = true;
uni.requestPayment({
    provider: 'appleiap',
    orderInfo: {
        productid: productId,    
        username: "appusername", // 用户标识
        optimize: true  // 设置 optimize: true 解决丢单问题  
    },
    success: (e) => {
        // 支付成功清除标记 restoreFlag = false  
        // 支付成功，result 为 IAP商品交易信息对象 IAPTransaction 需将返回的支付凭证传给后端进行二次认证 
       restoreFlag = false;
    },
    fail: (e) => {
        // 支付失败的时候需要调用一下 restoreComplateRequest 方法  
        restoreComplateRequest();
    },
    complete: () => {
        console.log("payment结束");
    }
});
```

-  5+ App项目  
```  js
// restoreFlag 标记，用于判断在页面显示的时候是否需要调用 restoreComplateRequest 方法  
var restoreFlag = true; // 调用支付接口时标记 restoreFlag = true , 实际应用请将标记存储在 storage 中  
plus.payment.request(iap, {
    productid: "商品id",
    username: "appusername", // 用户标识  
    optimize: true  // 设置 optimize: true 解决丢单问题  
  }, function(result){
    restoreFlag = false; // 支付成功清除标记 restoreFlag = false  
    // 支付成功，result 为 IAP商品交易信息对象 IAPTransaction 需将返回的支付凭证传给后端进行二次认证  
  }, function(e){
    // 支付失败的时候需要调用一下 restoreComplateRequest 方法  
    restoreComplateRequest();
});
```

#### 恢复购买
```  js
function restoreComplateRequest() {
    iap.restoreComplateRequest({}, function(results){
        // results 格式为数组存放恢复的IAP商品交易信息对象 IAPTransaction，需要将返回的支付凭证传给后端进行二次认证  
    });
}
```

`restoreComplateRequest`作用描述:
- 已购的非消耗性商品以及订阅商品  
- 丢单的商品（所有类型）  
注意事项：**丢单的消耗类型商品**在支付完成后，**首次**调用该接口可返回支付凭证

#### 丢单检测
- uni-app项目  
在[页面生命周期](https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f)函数 `onShow` 中调用 `restoreComplateRequest`  
```  js
onShow() {
    if(restoreFlag) {
        restoreComplateRequest();
    }
}
```
- 5+ App项目  
在监听页面 `resume` 事件回调中调用 `restoreComplateRequest`  
```  js
document.addEventListener('resume',function(){  
    if(restoreFlag) {  
        restoreComplateRequest();
    }  
},false); 
```

#### 丢单问题说明  
通过和用户联调我们发现在调用支付接口后，如果用户未绑定支付方式此时会触发支付失败回调方法，实际上用户可以跳转 AppStrore 绑卡然后继续支付，之前的逻辑在回调失败方法中框架会关闭订单，用户付完钱在回到App中也不会触发成功回调，这样就造成了丢单，解决方法就是在调用支付接口时添加optimize: true参数，并标记 restoreFlag = true;，支付成功回调中清除标记 restoreFlag = false; 然后在支付失败回调中框架就不会关闭订单了，并在页面显示的时候通过标记判断是否需要调用 restoreComplateRequest 方法，如果用户跳转App Store绑定支付方式付款成功后回到 App 就可以通过 restoreComplateRequest 方法恢复之前支付的订单信息，解决丢单的问题；


### 常见问题  
- 使用沙盒环境测试时每次调用支付接口需要换一个新的测试账号或商品，同一个账号多次购买同一个商品可能会没有回调 
- 服务端防刷单参考[IAP支付防止刷单](https://www.jianshu.com/p/5cf686e92924)
- 提前绑定支付方式可以有效避免丢单情况，示例:
`plus.runtime.openURL("https://apps.apple.com/account/billing"); //跳转AppStore绑定支付方式`
- 建议在每个接口调用前后添加打点日志收集，以便快速定位问题

