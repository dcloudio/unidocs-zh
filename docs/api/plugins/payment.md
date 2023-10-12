# uni.requestPayment(OBJECT)
支付

uni.requestPayment是一个统一各平台的客户端支付API，不管是在某家小程序还是在App中，客户端均使用本API调用支付。

本API运行在各端时，会自动转换为各端的原生支付调用API。

注意支付不仅仅需要客户端的开发，还需要服务端开发。虽然客户端API统一了，但各平台的支付申请开通、配置回填仍然需要看各个平台本身的支付文档。

比如微信有App支付、小程序支付、H5支付等不同的申请入口和使用流程，对应到uni-app，在App端要申请微信的App支付，而小程序端则申请微信的小程序支付。

如果服务端使用[uniCloud](https://uniapp.dcloud.io/uniCloud/README)，那么官方提供了[uniPay](https://uniapp.dcloud.io/uniCloud/unipay)云端统一支付服务，把App、微信小程序、支付宝小程序里的服务端支付开发进行了统一的封装。

前端统一的`uni.requestPayment`和云端统一的`uniPay`搭配，可以极大提升支付业务的开发效率，强烈推荐给开发者使用。`uniPay`的文档另见：[https://uniapp.dcloud.io/uniCloud/unipay](https://uniapp.dcloud.io/uniCloud/unipay)

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序|飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|[说明](/api/plugins/payment?id=h5-payment)|√|√|√|√|x|√|√|x|

**OBJECT 参数说明**

|参数名|类型|必填|说明|平台差异说明|
|:-|:-|:-|:-|:-|
|provider|String|是|服务提供商，通过 [uni.getProvider](/api/plugins/provider) 获取。||
|orderInfo|String/Object|是|订单数据，[注意事项](/api/plugins/payment?id=orderinfo)|App、支付宝小程序、百度小程序、抖音小程序|
|timeStamp|String|微信小程序必填|时间戳从1970年1月1日至今的秒数，即当前的时间。|微信小程序|
|nonceStr|String|微信小程序必填|随机字符串，长度为32个字符以下。|微信小程序|
|package|String|微信小程序必填|统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=xx。|微信小程序|
|signType|String|微信小程序必填|签名算法，应与后台下单时的值一致|微信小程序|
|paySign|String|微信小程序必填|签名，具体签名方案参见 [微信小程序支付文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_7&index=3)|微信小程序|
|bannedChannels|Array&lt;String&gt;|否|需要隐藏的支付方式，详见 [百度小程序支付文档](https://smartprogram.baidu.com/docs/develop/api/open_payment/#requestPolymerPayment/)|百度小程序|
|service|Number|抖音小程序必填|固定值：5（拉起小程序收银台）开发者如果不希望使用抖音小程序收银台，service设置为3/4时，可以直接拉起微信/支付宝进行支付：service=3： 微信API支付，不拉起小程序收银台；service=4： 支付宝API支付，不拉起小程序收银台。其中service=3、4，仅在1.35.0.1+基础库(头条743+)支持|抖音小程序|
|_debug|Number|否|仅限调试用，上线前去掉该参数。_debug=1时，微信支付期间可以看到中间报错信息，方便调试|抖音小程序|
|getOrderStatus|Function|抖音小程序必填|商户前端实现的查询支付订单状态方法（该方法需要返回个Promise对象）。 service=3、4时不需要传。|抖音小程序|
|success|Function|否|接口调用成功的回调||
|fail|Function|否|接口调用失败的回调函数||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|

微信小程序 `signType` 说明

|合法值			|说明									|
|:-|:-|
|MD5				|仅在 v2 版本接口适用	|
|HMAC-SHA256|仅在 v2 版本接口适用	|
|RSA				|仅在 v3 版本接口适用	|


### 注意事项
- APP端，如果你的应用在用户完成支付后；立即给支付的用户push消息通知。会与前端支付回调相互冲突，请延迟执行推送。
- 抖音小程序支付接口调整使用时请注意[发起头条支付](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/api/open-interface/pay/tt-pay)

### orderInfo 注意事项@orderInfo
1. 百度小程序的 orderInfo 为 Object 类型，详细的数据结构，参考：[百度收银台支付](https://smartprogram.baidu.com/docs/develop/api/open_payment/#requestPolymerPayment/)。
2. 支付宝小程序的 orderInfo(支付宝的规范为 tradeNO) 为 String 类型，表示支付宝交易号。
3. 抖音小程序的 orderInfo 为 Object 类型，详见：[发起头条支付](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/api/open-interface/pay/tt-pay/)
4. App端，支付宝支付 orderInfo 为 String 类型。
5. App端，微信支付 orderInfo 为 Object 类型。
6. App端，苹果应用内支付 orderInfo 为Object 类型，{productid: 'productid'}。

## H5 平台@h5-payment
- 普通浏览器平台的支付，仍然是常规web做法。uni-app未封装。
- 在普通浏览器里也可以调起微信进行支付，这个在微信叫做H5支付，此功能未开放给普通开发者，需向微信单独申请，[详见](https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=15_1)
- 微信内嵌浏览器运行H5版时，可通过js sdk实现微信支付，需要引入一个单独的js，[详见](https://ask.dcloud.net.cn/article/35380)

**各平台支持的支付情况说明**
- 微信小程序里只支持微信小程序支付，在 [微信商户平台](https://pay.weixin.qq.com) 申请支付时，选择公众号支付。
- App 里支持微信sdk支付、支付宝sdk支付、苹果iap应用内支付，在各平台申请支付时选择 App 支付。
- 其他支付（如银联）请使用web-view组件以H5方式实现。
- 支付宝小程序只支持支付宝支付。
- 百度小程序为百度支付，其二次封装了度小满、支付宝、微信支付。
- Hello uniapp 里演示了各种支付。

## App平台支付流程

流程：支付平台功能申请 -> ``manifest.json`` 里配置支付参数 -> ``uni-app`` 里调用 API 进行支付

### manifest.json里配置相关参数

1. 在`manifest.json - App模块权限选择` 中勾选 payment(支付)
2. 在 `manifest.json - App SDK配置` 中，勾选需要的支付平台，目前有微信支付、支付宝支付、苹果应用内支付(IAP)，其中微信支付需要填写从微信开放平台获取的AppID
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/manifest-config.png)
<!-- ![uniapp](https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/pay1.png) -->
<!-- 临时把老图注掉，替换正式地址时再把老图地址放开 -->
3. 这些配置需要打包生效，真机运行仍然是HBuilder基座的设置，可使用自定义基座调试。离线打包请参考离线打包文档在原生工程中配置。
4. 配置并打包后，通过`uni.getProvider`可以得到配置的结果列表，注意这里返回的是manifest配置的，与手机端是否安装微信、支付宝无关。

## App支付

### 示例

```javascript
uni.requestPayment({
    provider: 'alipay',
    orderInfo: 'orderInfo', //微信、支付宝订单数据 【注意微信的订单信息，键值应该全部是小写，不能采用驼峰命名】
    success: function (res) {
        console.log('success:' + JSON.stringify(res));
    },
    fail: function (err) {
        console.log('fail:' + JSON.stringify(err));
    }
});
```


## 支付宝App支付

### 申请流程

    登录支付宝账号，创建应用接入支付宝App支付能力，包括以下步骤：

    - 创建应用（获取appid） 
    - 开通App支付功能 
    - 配置密钥（获取公钥、私钥） 
    
  具体可参考支付宝官方文档： [App支付快速接入](https://docs.open.alipay.com/204/105297/)


如果手机端未安装支付宝，调用时会启动支付宝的wap页面登录，如果已安装相应客户端，会启动其客户端登录。

## 微信App支付

### 申请流程

  - 到 [微信开放平台](https://open.weixin.qq.com/) 申请移动应用并开通支付功能，申请应用后可以获取 AppID 和 AppSecret 值
  - 应用接入 [微信商户平台](https://pay.weixin.qq.com)，选择 App 支付
  - 开通支付功能后可获取支付业务服务器配置数据：PARTNER（财付通商户号）、PARTNER_KEY（财付通密钥）、PAYSIGNKEY（支付签名密钥）
  - 需要将从微信开放平台申请的appid，填回到 manifest-App SDK配置-支付-微信支付 中。打包后生效。
    
  具体可参考微信官方文档： [移动应用开发](https://open.weixin.qq.com/cgi-bin/frame?t=home/app_tmpl&lang=zh_CN)
  
  注意微信的App支付、小程序支付、H5支付是不同的体系。微信小程序支付在 [微信商户平台](https://pay.weixin.qq.com) 申请支付时，选择公众号支付；普通浏览器里也可以调起微信进行支付，这个在微信叫做H5支付，此功能未开放给普通开发者，需向微信单独申请，[详见](https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=15_1)

### 示例代码

```javascript
uni.requestPayment({
    "provider": "wxpay", 
    "orderInfo": {
        "appid": "wx499********7c70e",  // 微信开放平台 - 应用 - AppId，注意和微信小程序、公众号 AppId 可能不一致
        "nonceStr": "c5sEwbaNPiXAF3iv", // 随机字符串
        "package": "Sign=WXPay",        // 固定值
        "partnerid": "148*****52",      // 微信支付商户号
        "prepayid": "wx202254********************fbe90000", // 统一下单订单号 
        "timestamp": 1597935292,        // 时间戳（单位：秒）
        "sign": "A842B45937F6EFF60DEC7A2EAA52D5A0" // 签名，这里用的 MD5/RSA 签名
    },
    success(res) {},
    fail(e) {}
})
```

## 苹果应用内支付@iap

### 申请流程

    使用苹果开发者账号登录 [App Store Connect](https://appstoreconnect.apple.com)，在应用的功能选项卡页面，添加 App 内购项目。注意：
    - 内购项目的各信息需要填写完整，然后保存，此时内购项目的状态应该是准备提交，当提交应用通过审核后，状态则变为已批准
    - 测试时，建议使用测试证书打一个自定义的 iOS 基座进行测试
    - 在应用 TestFight 的选项卡添加 App Store Connect 用户，测试支付时可以使用此用户帐号进行测试


### 支付流程

1. 获取支付通道 (uni.getProvider)

2. 通过支付通道获取产品列表 (iapChannel.requestProduct)

3. 检查是否存在未关闭的订单 (iapChannel.restoreCompletedTransactions, 可选在合适的时机检查)

4. 请求支付，传递产品信息 (uni.requestPayment)

5. 客户端接收苹果返回的支付票据发送到服务器，在服务器请求苹果服务器验证支付是否有效

6. 服务器验证票据有效后在客户端关闭订单 (iapChannel.finishTransaction)


HBuilder 3.5.1 之前因自动关闭订单导致某些情况下丢单的问题

HBuilder 3.5.1 + 增加了手动关闭订单参数 `manualFinishTransaction`, 在合适的时机调用 `iapChannel.finishTransaction` 关闭订单

HBuilder 3.5.1+ 开始支持通过 `uni.getProvider` 获取IAP支付通道的方法

### 获取IAP支付通道

```js
uni.getProvider({
  service: 'payment',
  success: (res) => {
    const iapChannel = res.providers.find((channel) => {
      return (channel.id === 'appleiap')
    })

    // 如果 iapChannel 为 null，说明当前包没有包含iap支付模块。注意：HBuilder基座不包含 iap 通道
  }
});
```

#### **IAP支付通道相关方法**

#### 向苹果服务器获取产品列表

`iapChannel.requestProduct(<Function> success, <Function> fail)`

`success` 回调值类型 `Array<Product>`

#### 获取苹果服务器已支付且未关闭的交易列表

`iapChannel.restoreCompletedTransactions(<Function> success, <Function> fail)`

`success` 回调值类型 `Array<Transaction>`

#### 关闭苹果服务器订单

`iapChannel.finishTransaction(Transaction, <Function> success, <Function> fail)`


所有 `fail` 回调格式为 `{ errCode: xxx, errMsg: '' }`


### 请求支付 `uni.requestPayment()` 

```js
uni.requestPayment({
    provider: 'appleiap',
    orderInfo: {},
    success: (e) => {
      //  e 类型为 Transaction, 详见下面的描述
    }
})
```

### 参数说明

#### orderInfo

|属性|类型|默认值|说明|
|:-|:-|:-|:-|
|productid|String||产品id，在苹果开发者中心配置|
|username|String||透传参数，一般用于标记订单和用户的关系，向苹果服务器二次验证票据时返回此字段|
|quantity|Number|1|购买数量，至少大于等于 `1`|
|manualFinishTransaction|Boolean|false|3.5.1+ 支持，手动关闭订单，值为 `false` 时支付完成后自动关闭订单，`true`时不关闭订单，需要在合适的时机调用 `finishTransaction` 关闭订单。建议设置为 `true`, 默认值为 `false` 是为了向下兼容|
| paymentDiscount | Object | 否 | 促销优惠(HBuilderX 3.7.0+ 手机系统iOS12.2+支持) |

##### 促销优惠参数说明
| 属性 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| offerIdentifier | String | 是 | 促销id |
| keyIdentifier | String | 是 | 密钥 |
| nonce | String | 是 | 唯一id (必须小写 24小时有效) |
| signature | String | 是 | 签名 |
| timestamp | Number | 是 | 创建证书的时间戳(毫秒 24小时有效) |

#### Product

|属性|类型|说明|
|:-|:-|:-|
|title|String|产品标题|
|description|String|产品描述|
|productid|String|产品id，在苹果开发者中心配置|
|price|Number|价格|
|pricelocal|String|币种，例如: `zh_CN@currency=CNY`|
|discount|Array|折扣信息(HBuilderX 3.7.0+ 手机系统iOS12.2+支持)|

##### Discount
| 属性 | 类型 | 说明 |
| :--- | :--- | :--- |
| price | Number | 促销价格 |
| periodUnit | String | 周期单位(day: 日,week: 周,month: 月,year: 年) |
| discountType | String | 优惠类型(introductory: 推介促销  subscription: 订阅促销) |
| promotionType | String | 促销类型(payAsYouGo: 随用随付,payUpFront: 预先支付,freeTrial:  免费试用) |
| code | String | 促销代码|
| units | Number | 促销期数 |


#### Transaction

|属性|类型|说明|
|:-|:-|:-|
|payment|Object|支付信息，详见下面的说明|
|transactionDate|String|交易日期，示例 `2022-01-01 08:00:00`|
|transactionIdentifier|String|交易唯一标识|
|transactionReceipt|String|支付票据，用于在开发者的服务器向苹果的服务器二次验证交易是否有效|
|transactionState|String|交易状态码|


#### Payment

|属性|类型|说明|
|:-|:-|:-|
|productid|String|产品id|
|quantity|String|购买数量|
|username|String|透传参数|


#### transactionState

值类型：String

|值|说明|
|:-|:-|
|1|交易成功|


注意事项

- 相同订单，重复调用 `restoreCompletedTransactions` 后 `transactionReceipt` 会发生变化，并非唯一值
- 调用 `finishTransaction` 关闭订单可能不会立即生效，取决于苹果的服务器
- 沙盒环境：一个测试账号相同产品仅能购买一次，重复测试需要清除购买记录或重新添加沙盒测试账号
- 沙盒环境：调用 `restoreCompletedTransactions` 长时间无反应，检查设备登陆的沙箱账号是否正常

### 沙箱账号

1. 登陆苹果开发者中心，添加沙箱账号
2. 手机或iPad登陆沙箱账号，在 `系统设置 -> App Store`


### 订单丢失场景

- 用户没有绑定 `AppStore` 支付方式，调用 `uni.requestPayment()` 准备支付，触发失败 `fail` 回调，errCode=2，用户未绑定支付方式，app内支付流程结束。
系统弹出框引导用户绑定支付方式，此过程将跳转到系统应用 `AppStore` 进行绑定支付方式，绑定成功同步支付成功，用户成功付款


### 示例代码

```html
<template>
  <view class="content">
    <view class="uni-list">
      <radio-group @change="applePriceChange">
        <label class="uni-list-cell" v-for="(item, index) in productList" :key="index">
          <radio :value="item.productid" :checked="item.checked" />
          <view class="price">{{item.title}} {{item.price}}</view>
        </label>
      </radio-group>
    </view>
    <view class="uni-padding-wrap">
      <button class="btn-pay" @click="payment" :loading="loading" :disabled="disabled">确认支付</button>
    </view>
  </view>
</template>

<script>
  import {
    Iap,
    IapTransactionState
  } from "./iap.js"

  export default {
    data() {
      return {
        title: "iap",
        loading: false,
        disabled: true,
        productId: "",
        productList: []
      }
    },
    onLoad: function() {
      // 创建示例
      this._iap = new Iap({
        products: [] // 苹果开发者中心创建
      })

      this.init();
    },
    onShow() {
      if (this._iap.ready) {
        this.restore();
      }
    },
    onUnload() {},
    methods: {
      async init() {
        uni.showLoading({
          title: '检测支付环境...'
        });

        try {
          // 初始化，获取iap支付通道
          await this._iap.init();

          // 从苹果服务器获取产品列表
          this.productList = await this._iap.getProduct();
          this.productList[0].checked = true;
          this.productId = this.productList[0].productid;

          // 填充产品列表，启用界面
          this.disabled = false;
        } catch (e) {
          uni.showModal({
            title: "init",
            content: e.message,
            showCancel: false
          });
        } finally {
          uni.hideLoading();
        }

        if (this._iap.ready) {
          this.restore();
        }
      },
      async restore() {
        // 检查上次用户已支付且未关闭的订单，可能出现原因：首次绑卡，网络中断等异常

        // 在此处检查用户是否登陆

        uni.showLoading({
          title: '正在检测已支付且未关闭的订单...'
        });

        try {
          // 从苹果服务器检查未关闭的订单，可选根据 username 过滤，和调用支付时透传的值一致
          const transactions = await this._iap.restoreCompletedTransactions({
            username: ""
          });

          if (!transactions.length) {
            return;
          }

          // 开发者业务逻辑，从服务器获取当前用户未完成的订单列表，和本地的比较
          // 此处省略

          switch (transaction.transactionState) {
            case IapTransactionState.purchased:
              // 用户已付款，在此处请求开发者服务器，在服务器端请求苹果服务器验证票据
              //let result = await this.validatePaymentResult();

              // 验证通过，交易结束，关闭订单
              // if (result) {
              //   await this._iap.finishTransaction(transaction);
              // }
              break;
            case IapTransactionState.failed:
              // 关闭未支付的订单
              await this._iap.finishTransaction(transaction);
              break;
            default:
              break;
          }
        } catch (e) {
          uni.showModal({
            content: e.message,
            showCancel: false
          });
        } finally {
          uni.hideLoading();
        }
      },
      async payment() {
        if (this.loading == true) {
          return;
        }
        this.loading = true;

        uni.showLoading({
          title: '支付处理中...'
        });

        try {
          // 从开发者服务器创建订单
          // const orderId = await this.createOrder({
          //   productId: this.productId
          // });

          // 请求苹果支付
          const transaction = await this._iap.requestPayment({
            productid: this.productId,
            manualFinishTransaction: true,
            // username: username + orderId //根据业务需求透传参数，关联用户和订单关系
          });

          // 在此处请求开发者服务器，在服务器端请求苹果服务器验证票据
          // await this.validatePaymentResult({
          //   orderId: orderId,
          //   username: username,
          //   transactionReceipt: transaction.transactionReceipt, // 不可作为订单唯一标识
          //   transactionIdentifier: transaction.transactionIdentifier
          // });

          // 验证成功后关闭订单
          //await this._iap.finishTransaction(transaction);

          // 支付成功
        } catch (e) {
          uni.showModal({
            content: e.message,
            showCancel: false
          });
        } finally {
          this.loading = false;
          uni.hideLoading();
        }
      },
      createOrder({
        productId
      }) {
        return new Promise((resolve, reject) => {})
      },
      validatePaymentResult(data) {
        return new Promise((resolve, reject) => {});
      },
      applePriceChange(e) {
        this.productId = e.detail.value;
      }
    }
  }
</script>

<style>
  .content {
    padding: 15px;
  }

  button {
    background-color: #007aff;
    color: #ffffff;
  }

  .uni-list-cell {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
  }

  .price {
    margin-left: 10px;
  }

  .btn-pay {
    margin-top: 30px;
  }
</style>
```

```js
// uni iap

const ProviderType = {
  IAP: 'iap'
}

const IapTransactionState = {
  purchasing: "0", // A transaction that is being processed by the App Store.
  purchased: "1", // A successfully processed transaction.
  failed: "2", // A failed transaction.
  restored: "3", // A transaction that restores content previously purchased by the user.
  deferred: "4" // A transaction that is in the queue, but its final status is pending external action such as Ask to Buy.
};

class Iap {

  _channel = null;
  _channelError = null;
  _productIds = [];

  _ready = false;

  constructor({
    products
  }) {
    this._productIds = products;
  }

  init() {
    return new Promise((resolve, reject) => {
      this.getChannels((channel) => {
        this._ready = true;
        resolve(channel);
      }, (err) => {
        reject(err);
      })
    })
  }

  getProduct(productIds) {
    return new Promise((resolve, reject) => {
      this._channel.requestProduct(productIds || this._productIds, (res) => {
        resolve(res);
      }, (err) => {
        reject(err);
      })
    });
  }

  requestPayment(orderInfo) {
    return new Promise((resolve, reject) => {
      uni.requestPayment({
        provider: 'appleiap',
        orderInfo: orderInfo,
        success: (res) => {
          resolve(res);
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  }

  restoreCompletedTransactions(username) {
    return new Promise((resolve, reject) => {
      this._channel.restoreCompletedTransactions({
        manualFinishTransaction: true,
        username
      }, (res) => {
        resolve(res);
      }, (err) => {
        reject(err);
      })
    });
  }

  finishTransaction(transaction) {
    return new Promise((resolve, reject) => {
      this._channel.finishTransaction(transaction, (res) => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  getChannels(success, fail) {
    if (this._channel !== null) {
      success(this._channel)
      return
    }

    if (this._channelError !== null) {
      fail(this._channelError)
      return
    }

    uni.getProvider({
      service: 'payment',
      success: (res) => {
        this._channel = res.providers.find((channel) => {
          return (channel.id === 'appleiap')
        })

        if (this._channel) {
          success(this._channel)
        } else {
          this._channelError = {
            errMsg: 'paymentContext:fail iap service not found'
          }
          fail(this._channelError)
        }
      }
    });
  }

  get channel() {
    return this._channel;
  }
}

export {
  Iap,
  IapTransactionState
}
```

## PayPal支付 [参考](https://uniapp.dcloud.io/app-payment-paypal)

## Stripe支付 [参考](https://uniapp.dcloud.io/app-payment-stripe)

## Google Pay支付 [参考](https://uniapp.dcloud.io/app-payment-google)

## 微信小程序支付

```javascript
// 仅作为示例，非真实参数信息。
uni.requestPayment({
    provider: 'wxpay',
	timeStamp: String(Date.now()),
	nonceStr: 'A1B2C3D4E5',
	package: 'prepay_id=wx20180101abcdefg',
	signType: 'MD5',
	paySign: '',
	success: function (res) {
		console.log('success:' + JSON.stringify(res));
	},
	fail: function (err) {
		console.log('fail:' + JSON.stringify(err));
	}
});
```

## 服务器相关

### uniCloud开发
- 前端：使用`unicloud.callfunction`调用指定的云函数。
- 服务端：使用[uniPay](https://uniapp.dcloud.io/uniCloud/unipay)，该服务对应的演示工程在插件市场：[https://ext.dcloud.net.cn/plugin?id=1835](https://ext.dcloud.net.cn/plugin?id=1835)，此示例为完整的前后端支付演示，使用`uniPay`可极快的完成支付业务开发。

### php开发
- 前端：使用 ``uni.request`` 请求服务端接口，得到订单数据，使用 ``uni.requestPayment`` 向支付平台发起支付请求，拉起支付平台的客户端进行支付。在hello uni-app里详细代码。
- 服务端：PHP可参考 [https://github.com/dcloudio/H5P.Server/tree/master/payment](https://github.com/dcloudio/H5P.Server/tree/master/payment)。


## FAQ

- Q：如何使用ping++等聚合支付
  A：uni-app的js API 已经完成跨端统一，客户端无需使用三方聚合支付。如果服务器选择`uniCloud`，也无需三方聚合支付。如果服务端使用php、java等传统服务器开发，可以在服务端使用三方聚合支付。

- Q：App端如何使用其他支付，比如银联、PayPal。
  A：App 3.4+ 已支持 PayPal，App 3.4 以前的版本使用下面的方案
  	1. 可以在web-view组件里使用它们的wap版支付
  	2. 可以集成原生sdk，插件市场均有，[详见](https://ext.dcloud.net.cn/search?q=%E6%94%AF%E4%BB%98)。也可以自行开发原生插件，开发文档见[https://ask.dcloud.net.cn/article/35428](https://ask.dcloud.net.cn/article/35428)

- Q：Appstore审核报PGPay SDK不允许上架的问题
  A：数字类产品（比如购买会员等不需要配送实物的商品），Apple规定必须使用苹果IAP应用内支付，给Apple分成30%。打包的时候不要勾选微信或支付宝等其他支付方式。如果你提交的包里包含了微信支付宝等支付的sdk，即使没使用，Appstore也会认为你有隐藏方式，以后会绕过IAP，不给Apple分成，因此拒绝你的App上线。云打包时，manifest里选上支付模块，但sdk配置里去掉微信支付和支付宝支付。很多开发者的Android版是包含微信和支付宝支付的，此时注意分开判断。详见[https://ask.dcloud.net.cn/article/36447](https://ask.dcloud.net.cn/article/36447)
