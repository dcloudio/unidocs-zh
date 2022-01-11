#### 注意事项  
1.应苹果审核规范要求，应用中虚拟物品交易必须使用Apple应用内支付，实物才可使用第三方支付(支付宝、微信等)
2.使用沙盒环境测试时每次调用支付接口需要换一个新的测试账号或商品，同一个账号多次购买同一个商品可能会没有回调

#### 相关文档  
使用前必读:[App内购买配置流程](https://help.apple.com/app-store-connect/#/devb57be10e7)
调试需要创建自定义基座.参考[自定义调试基座](https://ask.dcloud.net.cn/article/35115)
服务端防刷单参考[IAP支付防止刷单](https://www.jianshu.com/p/5cf686e92924)

#### 参考建议  
1.提前绑定支付方式可以有效避免丢单情况，示例:
`plus.runtime.openURL("https://apps.apple.com/account/billing"); //跳转AppStore绑定支付方式`
2.在每个接口调用前后添加打点日志收集，以便快速定位问题

#### 丢单问题说明  
通过和用户联调我们发现在调用支付接口后，如果用户未绑定支付方式此时会触发支付失败回调方法，实际上用户可以跳转 AppStrore 绑卡然后继续支付，之前的逻辑在回调失败方法中框架会关闭订单，用户付完钱在回到App中也不会触发成功回调，这样就造成了丢单，解决方法就是在调用支付接口时添加optimize: true参数，并标记 restoreFlag = true;，支付成功回调中清除标记 restoreFlag = false; 然后在支付失败回调中框架就不会关闭订单了，并在页面显示的时候通过标记判断是否需要调用 restoreComplateRequest 方法，如果用户跳转App Store绑定支付方式付款成功后回到 App 就可以通过 restoreComplateRequest 方法恢复之前支付的订单信息，解决丢单的问题；

#### 开发流程  
在manifest.json文件“App模块配置”项的“Payment(支付)”下，勾选“Apple应用内支付”项
![](https://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/payment/iap_setup_manifest_info.png)

###### 获取支付渠道
```  js
var iap = null;  
plus.payment.getChannels(function(channels) {  
    for (var i in channels) {  
        var channel = channels[i];  
        // 获取 id 为 'appleiap' 的 channel  
        if (channel.id === 'appleiap') {  
            iap = channel;  
        }  
    }  
}, function(e) {  
    console.log("获取iap支付通道失败：" + e.message);  
});
```

###### 获取订单信息
```  js
// ids 为在苹果开发者后台配置的应用内购项目的标识集合  
var ids = ['商品1', '商品2'];   
// iap 为刚刚获取的`appleiap`支付通道  
iap.requestOrder(ids, function(e) {  
    // 获取订单信息成功回调方法  
    console.log('requestOrder success: ' + JSON.stringify(e));  
}, function(e) {  
    // 获取订单信息失败回调方法  
    console.log('requestOrder failed: ' + JSON.stringify(e));  
});
```

###### 发起支付
  * uni-app项目示例
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
      restoreComplateRequest()
   },
   complete: () => {
     console.log("payment结束")
   }
})
```
  *  5+项目示例
```  js
// restoreFlag 标记，用于判断在页面显示的时候是否需要调用 restoreComplateRequest 方法  
var restoreFlag = true; // 调用支付接口时标记 restoreFlag = true , 实际应用请将标记存储在 storage 中  
plus.payment.request(iap, {  
    productid: "商品id",  
    username: "appusername", // 用户标识  
    optimize: true  // 设置 optimize: true 解决丢单问题  
}, function(result) {  
    restoreFlag = false; // 支付成功清除标记 restoreFlag = false  
    // 支付成功，result 为 IAP商品交易信息对象 IAPTransaction 需将返回的支付凭证传给后端进行二次认证  
}, function(e) {  
    // 支付失败的时候需要调用一下 restoreComplateRequest 方法  
    restoreComplateRequest()  
});
```

###### 恢复购买
```  js
function restoreComplateRequest() {  
    iap.restoreComplateRequest({}, function(results) {  
        // results 格式为数组存放恢复的IAP商品交易信息对象 IAPTransaction，需要将返回的支付凭证传给后端进行二次认证  
    });  
}
```
此方法可获取
  * 已购的非消耗性商品以及订阅商品
  * 丢单的商品（所有类型）
注意事项：**丢单的消耗类型商品**在支付完成后，**首次**调用该接口可返回支付凭证

###### 丢单检测
  * uni-app 在页面 onShow 方法中调用 restoreComplateRequest  
```  js
onShow() {  
    if(restoreFlag) {  
        restoreComplateRequest()   
    }  
}
```
  * 5+app 在 resume 回调中调用 restoreComplateRequest 
```  js
document.addEventListener('resume',function(){  
    if(restoreFlag) {  
        restoreComplateRequest()  
    }  
},false); 
```

