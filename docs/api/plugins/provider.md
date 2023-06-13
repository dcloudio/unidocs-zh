### uni.getProvider(OBJECT)
获取服务供应商。

在App平台，可用的服务商，是打包环境中配置的服务商，与手机端是否安装了该服务商的App没有关系。

云打包在manifest中配置相关模块和SDK信息，离线打包在原生工程中配置。某个服务商配置被打包进去，运行时就能得到相应的服务供应商。

**平台差异说明**

|App|H5|微信小程序|企业微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|
|:-|:-|:-|:-|:-|:-|:-|:-|
|√|x|√|x|√|√|√|√|

**OBJECT 参数说明**

|参数名|类型|必填|说明|
|:-|:-|:-|:-|
|service|String|是|服务类型，可取值见下面说明。|
|success|Function|否|接口调用成功的回调|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|

**service 值说明**

|值|说明|
|:-|:-|
|oauth|授权登录|
|share|分享|
|payment|支付|
|push|推送|


**success 返回参数说明**

|参数名|类型|说明|
|:-|:-|:-|
|service|String|服务类型|
|provider|Array|得到的服务供应商|
|providers|Array|得到的服务供应商服务对象。`App 3.5.1+`|


**provider 在不同服务类型下可能的取值说明**

|service|provider|说明|备注|
|:-|:-|:-|:-|
|oauth|weixin|微信登录||
||qq|QQ登录||
||sinaweibo|新浪微博登录||
||xiaomi|小米登录||
||univerify|[一键登录](/univerify)|App 3.0.0+|
||apple|[Apple登录](https://ask.dcloud.net.cn/article/36651)| iOS13+支持，App 2.4.7+|
||google|[谷歌登录](/tutorial/app-oauth-facebook)|App 3.4.0+|
||facebook|[Facebook登录](/tutorial/app-oauth-google)|App 3.4.0+|
|share|sinaweibo|新浪微博分享||
||qq|分享到QQ好友||
||weixin|分享微信消息、朋友圈及微信小程序||
|payment|alipay|支付宝支付||
||wxpay|微信支付||
||baidu|百度收银台||
||appleiap|苹果应用内支付|iOS 应用打包后可获取|
||google-pay|Google Pay支付|App 3.3.7+，Android 应用打包后可获取，Android 设备装有 18.0.0 或更高版本的 Google Play 服务|
||paypal|PayPal支付|App 3.3.7+，iOS11.0+支持，Android 5.0+ (API21+)|
||stripe|Stripe支付|App 3.3.7+，iOS13.0+支持|
|push|unipush|[UniPush](https://ask.dcloud.net.cn/article/35622)|推送服务是三选一，只会获取到一个供应商。|
||igexin|个推|填写配置并打包后可以获取，仅为向下兼容而保留，不再推荐使用|
||mipush|小米推送|填写配置并打包后可以获取，仅为向下兼容而保留，不再推荐使用|

**providers 在不同服务类型下可能的取值说明**

|service|providers|说明|备注|
|:-|:-|:-|:-|
|oauth|id|登录鉴权服务标识||
||description|登录鉴权服务描述||
||isAppExist|授权登录依赖的客户端App是否已安装||
||authResult|登录认证数据||
||userInfo|登录用户信息||
|share|id|分享服务标识||
||description|分享服务描述||
||authenticated|是否授权认证||
||accessToken|授权认证信息||
||isAppExist|分享客户端App是否已安装||
|payment|id|支付通道标识||
||description|支付通道描述||
||isAppExist|支付通道客户端App是否安装||
|push|id|推送通道标识|目前支持以下推送通道： "igexin" - 表示个推推送； "mipush" - 表示小米推送； "unipush" - 表示DCloud UniPush。|
||token|设备令牌（iOS设备唯一标识），用于APNS服务推送中标识设备的身份|Android: 设备的唯一标识号，通常与clientid值一致。iOS: 设备的DeviceToken值，向APNS服务器发送推送消息时使用。|
||clientid|推送服务令牌（设备唯一标识），用于标识推送信息接收者身份|第三方推送服务器管理的设备唯一标识，在iOS平台此值通常与token不同；在其它平台此值通常与token值一致。 此值与设备及应用都相关，即不同的apk/ipa安装到同一台设备上的值都不相同。|
||appid|第三方推送服务的应用标识|第三方推送服务器管理的应用标识，通常需要在第三方推送服务器平台进行注册获取。|
||appkey|第三方推送服务器的应用键值|第三方推送服务器管理的应用键值，通常需要在第三方推送服务器平台进行注册获取。|

**注意事项**

- 自 HBuilderX 1.7.3 起，HBuilder 基座的推送供应商为 UniPush 服务。

**代码**

```javascript
uni.getProvider({
	service: 'oauth',
	success: function (res) {
		console.log(res.provider)
		if (~res.provider.indexOf('qq')) {
			uni.login({
				provider: 'qq',
				success: function (loginRes) {
					console.log(JSON.stringify(loginRes));
				}
			});
		}
	}
});
```
