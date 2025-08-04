## uni.requestVirtualPayment(OBJECT)

**概述**

微信规定上架**短剧**类目的小程序必须使用微信小程序虚拟支付，不可以使用原先的微信支付

**注意**

1. 微信小程序虚拟支付只有短剧类目的小程序才能开通
2. 微信小程序虚拟支付不支持ios系统
3. 微信小程序虚拟支付有较高的手续费（已知目前为10% ~ 20%），由微信官方收取，非uni-app收取（手续费多少跟使用uni-app无关）

**如何开户?**

- [微信虚拟支付官方文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/virtual-payment.html#_1-%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D)

如果服务端使用[uniCloud](https://uniapp.dcloud.io/uniCloud/README)，那么官方提供了[uniPay](https://doc.dcloud.net.cn/uniCloud/uni-pay/uni-app.html)云端统一支付服务，把App、微信小程序、支付宝小程序里的服务端支付开发进行了统一的封装。

前端统一的 `uni.requestVirtualPayment` 和云端统一的 `uniPay` 搭配，可以极大提升支付业务的开发效率，强烈推荐给开发者使用。`uniPay` 的文档另见：[https://doc.dcloud.net.cn/uniCloud/uni-pay/uni-app.html](https://doc.dcloud.net.cn/uniCloud/uni-pay/uni-app.html)

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序|飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|小红书小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|x|x|x|x|x|x|x|x|x|


**OBJECT 参数说明**

|参数名|类型|必填|说明|平台差异说明|
|:-|:-|:-|:-|:-|
|signData|Object|是|具体支付参数见signData|微信小程序|
|mode|String|是|支付的类型, 不同的支付类型有各自额外要传的附加参数|微信小程序|
|paySig|String|是|支付签名, 详见[《签名详解》](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/virtual-payment.html)|微信小程序|
|signature|String|是|用户态签名, 详见[《签名详解》](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/virtual-payment.html)|微信小程序|
|success|Function|否|接口调用成功的回调||
|fail|Function|否|接口调用失败的回调函数||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）||

`signData` 说明

|结构属性|类型|必填|说明|
|:-|:-|:-|:-|
|offerId|String|是|在米大师侧申请的应用 id, mp-支付基础配置中的offerid|
|buyQuantity|Number|是|购买数量|
|currencyType|String|是|币种 固定为 CNY|
|outTradeNo|String|是|业务订单号, 每个订单号只能使用一次, 重复使用会失败(极端情况不保证唯一, 不建议业务强依赖唯一性). 要求8-32个字符内, 只能是数字、大小写字母、符号 _-*@组成, 不能以下划线 _ 开头|
|attach|String|是|透传数据, 发货通知时会透传给开发者|
|productId|String|否|道具ID, **该字段仅mode=short_series_goods时需要必填**|
|goodsPrice|String|否|道具单价(分), **该字段仅mode=short_series_goods时需要必填**, 用来校验价格与后台道具价格是否一致, 避免用户在业务商城页看到的价格与实际价格不一致导致投诉|
|env|Number|否|环境配置, 0 米大师正式环境, 1 米大师沙箱环境, 默认为 0|

`mode` 说明

|合法值			|说明									|
|:-|:-|
|short_series_goods				|道具直购	|
|short_series_coin| 代币充值 |

### 代码示例

#### 代币充值

```javascript
// 仅作为示例，非真实参数信息。
uni.requestVirtualPayment({
	signData: {
		offerId: "", // 在米大师侧申请的应用 id, mp-支付基础配置中的offerid
		buyQuantity: 1, // 购买数量
		env: 0, // 环境配置, 0 米大师正式环境, 1 米大师沙箱环境, 默认为 0
		currencyType: "CNY", // 固定CNY
		outTradeNo: "test2024030101",
		attach: JSON.stringify({
			user_id: "001"
		})
	},
	mode: "short_series_coin",
	paySig: "支付签名",
	signature: '用户态签名',
	success: (res) => {
		console.log('success:' + JSON.stringify(res));
	},
	fail: (err) => {
		console.log('fail:' + JSON.stringify(err));
	},
	complete: (res) => {
		console.log('complete:' + JSON.stringify(res));
	}
});
```

#### 道具直购

```javascript
// 仅作为示例，非真实参数信息。
uni.requestVirtualPayment({
	signData: {
		offerId: "", // 在米大师侧申请的应用 id, mp-支付基础配置中的offerid
		buyQuantity: 1, // 购买数量
		env: 0, // 环境配置, 0 米大师正式环境, 1 米大师沙箱环境, 默认为 0
		currencyType: "CNY", // 固定CNY
		outTradeNo: "test2024030101",
		attach: JSON.stringify({
			user_id: "001"
		}),
		productId: "", // 道具ID, **该字段仅mode=short_series_goods时需要必填**
		goodsPrice: 1, // 道具单价(分), **该字段仅mode=short_series_goods时需要必填**, 用来校验价格与后台道具价格是否一致, 避免用户在业务商城页看到的价格与实际价格不一致导致投诉
	},
	mode: "short_series_coin",
	paySig: "支付签名",
	signature: '用户态签名',
	success: (res) => {
		console.log('success:' + JSON.stringify(res));
	},
	fail: (err) => {
		console.log('fail:' + JSON.stringify(err));
	},
	complete: (res) => {
		console.log('complete:' + JSON.stringify(res));
	}
});
```

### 服务器相关

#### uniCloud开发
- 前端：使用 `uni-pay` 组件发起支付。
- 服务端：使用[uniPay](https://doc.dcloud.net.cn/uniCloud/uni-pay/uni-app.html)，该服务对应的演示工程在插件市场：[https://ext.dcloud.net.cn/plugin?id=1835](https://ext.dcloud.net.cn/plugin?id=1835)，此示例为完整的前后端支付演示，使用`uniPay`可极快的完成支付业务开发。

#### php、java等后端语言开发
- 前端：使用 `uni.request` 请求服务端接口，得到订单数据，使用 `uni.requestVirtualPayment` 向支付平台发起支付请求，拉起支付平台的客户端进行支付。
- 服务端：[参考文档](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/virtual-payment.html)
