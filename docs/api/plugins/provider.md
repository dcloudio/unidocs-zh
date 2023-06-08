### uni.getProvider(OBJECT)
获取服务供应商。
Get a service provider.

在App平台，可用的服务商，是打包环境中配置的服务商，与手机端是否安装了该服务商的App没有关系。
On the App platform, the available service provider is the service provider configured in the packaging environment, and it has nothing to do with whether the app of the service provider is installed on the mobile phone.

云打包在manifest中配置相关模块和SDK信息，离线打包在原生工程中配置。某个服务商配置被打包进去，运行时就能得到相应的服务供应商。
Cloud packaging configures related modules and SDK information in the manifest, and offline packaging configures it in the native project. A certain service provider configuration is packaged in, and the corresponding service provider can be obtained at runtime.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|企业微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|
|App|H5|WeChat applet|Enterprise WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|
|:-|:-|:-|:-|:-|:-|:-|:-|
|√|x|√|x|√|√|√|√|

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
|Parameter name|Type|Required|Description|
|:-|:-|:-|:-|
|service|String|是|服务类型，可取值见下面说明。|
|service|String| is the |service type, and the possible values are described below. |
|success|Function|否|接口调用成功的回调|
|success|Function|No|Callback for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
|fail|Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function|No|The callback function of the end of the interface call (the call will be executed if the call succeeds or fails)|

**service 值说明**
**service value description**

|值|说明|
|value|description|
|:-|:-|
|oauth|授权登录|
|oauth|Authorized Login|
|share|分享|
|share|Share|
|payment|支付|
|payment|Payment|
|push|推送|
|push|Push|


**success 返回参数说明**
**success return parameter description**

|参数名|类型|说明|
|parameter name|type|description|
|:-|:-|:-|
|service|String|服务类型|
|service|String|Service Type|
|provider|Array|得到的服务供应商|
|provider|Array|Get Service Providers|
|providers|Array|得到的服务供应商服务对象。`App 3.5.1+`|
|providers|Array|The obtained service provider service object. `App 3.5.1+`|


**provider 在不同服务类型下可能的取值说明**
**provider possible value description under different service types**

|service|provider|说明|备注|
|service|provider|Description|Remarks|
|:-|:-|:-|:-|
|oauth|weixin|微信登录||
|oauth|weixin|WeChat Login||
||qq|QQ登录||
||qq|QQ login||
||sinaweibo|新浪微博登录||
||sinaweibo|Sina Weibo Login||
||xiaomi|小米登录||
||xiaomi|Xiaomi Login||
||univerify|[一键登录](/univerify)|App 3.0.0+|
||univerify|[One-click login](/univerify)|App 3.0.0+|
||apple|[Apple登录](https://ask.dcloud.net.cn/article/36651)| iOS13+支持，App 2.4.7+|
||google|[谷歌登录](/tutorial/app-oauth-facebook)|App 3.4.0+|
||facebook|[Facebook登录](/tutorial/app-oauth-google)|App 3.4.0+|
|share|sinaweibo|新浪微博分享||
|share|sinaweibo|Share on Sina Weibo||
||qq|分享到QQ好友||
||qq|Share to QQ friends||
||weixin|分享微信消息、朋友圈及微信小程序||
||weixin|Share WeChat news, Moments and WeChat Mini Programs||
|payment|alipay|支付宝支付||
|payment|alipay|Alipay payment||
||wxpay|微信支付||
||wxpay|WeChat Pay||
||baidu|百度收银台||
||baidu|Baidu Cashier||
||appleiap|苹果应用内支付|iOS 应用打包后可获取|
||appleiap|Apple in-app payment|Available after the iOS app is packaged|
||google-pay|Google Pay支付|App 3.3.7+，Android 应用打包后可获取，Android 设备装有 18.0.0 或更高版本的 Google Play 服务|
||google-pay|Pay with Google Pay|App 3.3.7+, available as an Android app packaged with Google Play Services 18.0.0 or higher on Android devices|
||paypal|PayPal支付|App 3.3.7+，iOS11.0+支持，Android 5.0+ (API21+)|
||paypal|PayPal payment|App 3.3.7+, iOS11.0+ support, Android 5.0+ (API21+)|
||stripe|Stripe支付|App 3.3.7+，iOS13.0+支持|
||stripe|Stripe payment|App 3.3.7+, iOS13.0+ support|
|push|unipush|[UniPush](https://ask.dcloud.net.cn/article/35622)|推送服务是三选一，只会获取到一个供应商。|
|push|unipush|[UniPush](https://ask.dcloud.net.cn/article/35622)|Push service is one of three, and only one supplier will be obtained. |
||igexin|个推|填写配置并打包后可以获取，仅为向下兼容而保留，不再推荐使用|
||igexin|Personal Tweet|You can get it after filling in the configuration and packaging it. It is reserved for backward compatibility only and is no longer recommended.|
||mipush|小米推送|填写配置并打包后可以获取，仅为向下兼容而保留，不再推荐使用|
||mipush|Xiaomi Push|You can get it after filling in the configuration and packaging it. It is reserved for backward compatibility only and is no longer recommended.|

**providers 在不同服务类型下可能的取值说明**
**providers possible value description under different service types**

|service|providers|说明|备注|
|service|providers|Description|Remarks|
|:-|:-|:-|:-|
|oauth|id|登录鉴权服务标识||
|oauth|id|Login Authentication Service ID||
||description|登录鉴权服务描述||
||description|Login Authentication Service Description||
||isAppExist|授权登录依赖的客户端App是否已安装||
||isAppExist|Whether the client App that authorizes login depends on is installed||
||authResult|登录认证数据||
||authResult|Login authentication data||
||userInfo|登录用户信息||
||userInfo|Login user information||
|share|id|分享服务标识||
|share|id|Share service ID||
||description|分享服务描述||
||description|Share service description||
||authenticated|是否授权认证||
||authenticated|Whether the authentication is authorized||
||accessToken|授权认证信息||
||accessToken|Authorization information||
||isAppExist|分享客户端App是否已安装||
||isAppExist|Whether the share client App is installed||
|payment|id|支付通道标识||
|payment|id|Payment channel ID||
||description|支付通道描述||
||description|Description of payment channel||
||isAppExist|支付通道客户端App是否安装||
||isAppExist|Whether the payment channel client App is installed||
|push|id|推送通道标识|目前支持以下推送通道： "igexin" - 表示个推推送； "mipush" - 表示小米推送； "unipush" - 表示DCloud UniPush。|
|push|id|Push channel ID|Currently supports the following push channels: "igexin" - means push push; "mipush" - means Xiaomi push; "unipush" - means DCloud UniPush. |
||token|设备令牌（iOS设备唯一标识），用于APNS服务推送中标识设备的身份|Android: 设备的唯一标识号，通常与clientid值一致。iOS: 设备的DeviceToken值，向APNS服务器发送推送消息时使用。|
||token|Device token (iOS device unique identifier), used to identify the device's identity in APNS service push |Android: The device's unique identification number, usually the same as the clientid value. iOS: The DeviceToken value of the device, used when sending push messages to the APNS server. |
||clientid|推送服务令牌（设备唯一标识），用于标识推送信息接收者身份|第三方推送服务器管理的设备唯一标识，在iOS平台此值通常与token不同；在其它平台此值通常与token值一致。 此值与设备及应用都相关，即不同的apk/ipa安装到同一台设备上的值都不相同。|
||clientid|Push service token (device unique identifier), used to identify the identity of the recipient of the push information | The unique identifier of the device managed by the third-party push server, this value is usually different from the token on the iOS platform; on other platforms, this value is usually the same as the The token value is the same. This value is related to both the device and the application, that is, different apk/ipa installed on the same device have different values. |
||appid|第三方推送服务的应用标识|第三方推送服务器管理的应用标识，通常需要在第三方推送服务器平台进行注册获取。|
||appid|App ID of the third-party push service|The application ID managed by the third-party push server usually needs to be registered on the third-party push server platform. |
||appkey|第三方推送服务器的应用键值|第三方推送服务器管理的应用键值，通常需要在第三方推送服务器平台进行注册获取。|
||appkey|The application key of the third-party push server|The application key managed by the third-party push server usually needs to be registered on the third-party push server platform. |

**注意事项**
**Precautions**

- 自 HBuilderX 1.7.3 起，HBuilder 基座的推送供应商为 UniPush 服务。
- As of HBuilderX 1.7.3, the push provider for the HBuilder base is the UniPush service.

**代码**
**CODE**

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
