## 云对象（uni-id-co）

uni-id-co是uni-id-pages的核心云对象，包含了诸多用户相关的接口。作为uni-id体系的一部分，uni-id-co也使用uni-id的配置文件（`cloudfunctions/common/uni-config-center/uni-id/config.json`）。**目前此云对象依赖了一些客户端信息，不支持被其他云函数/云对象调用。已支持url化调用，参考：[uni-id-co url化](#adapter-http)**

前端调用云对象`uni-id-co`内的方法前应先获取云对象的引用，代码如下

```js
const uniIdCo = uniCloud.importObject('uni-id-co')
```

如调用uni-id-co方法时出现找不到`lodash.merge`模块的错误，请手动在uni-id-co云对象目录执行`npm install`。如果是运行客户端的话uniCloud插件会自动给uni-id-co安装缺失的依赖。

### 目录说明

```text
├─common 					// 公用逻辑
├─config 					// 配置
│  └─permission.js 			// 调用接口所需的权限配置
├─lang 						// 国际化目录
├─lib 						// 基础功能，不建议修改此目录下文件
│  ├─third-party			// 三方平台接口
│  └─utils					// 基础功能
├─middleware				// 中间件
└─module					// 分模块存放的云对象方法
```

### 公共响应参数@co-public-response

`uni-id-co`所有api返回值均满足[uniCloud响应体规范](cf-functions.md#resformat)

返回值示例

```js
{
	errCode: 0, // 错误码，详见错误码列表
			errMsg: '', // 错误信息，uni-id-co会自动根据客户端语言对错误信息进行国际化
			newToken: { // 注册、登录、刷新token等接口会自动返回新token，uniCloud客户端sdk会自动将新token及过期时间存储在storage内（需要HBuilderX 3.4.13及以上版本）
		token,
				tokenExpired
	},
	// ...其余参数
}
```

**注意**

- 需要校验token的接口在token即将过期时也会返回newToken，token即将过期的阈值由开发者自行配置

### 适配URL化@adapter-http
自`uni-id-pages@1.0.29`版本起支持URL化 [什么是URL化](uniCloud/http.html#cloudobject)

调用规范：
1. HTTP 请求头中的`Content-Type`必须为`application/json`，请求方法必须是`POST`, 如不满足条件将会返回 `uni-id-unsupported-request` 错误码
2. 请求体需按照以下格式：
```json
{
	"clientInfo": {},
	"uniIdToken": "",
	"params": {}
}
```
字段说明

|字段|说明|
|--|--|
|clientInfo|客户端信息; [uni.getSystemInfo](/api/system/info.md#getsysteminfo)返回的字段|
|uniIdToken|用户Token; 用户登录后必填|
|params|API接口参数字段|

如果是在 uni-app 之外的应用中调用 URL 化接口，请确保clientInfo中存在以下字段:

| 字段          | 说明                                                               |
|-------------|------------------------------------------------------------------|
| uniPlatform | 应用运行平台，与条件编译平台相同。[详见](/api/system/info.md#uniplatform)           |
| appId       | manifest 中应用appid，即DCloud appid。如没有请手动指定一个，需确保唯一性。               |
| deviceId    | 设备 id；通过[uni.getSystemInfo](/api/system/info.md#getsysteminfo)获取 |

假设已在uniCloud 控制台已设置URL化域名PATH，以PATH为`/http/uni-id-co`为例，演示登录示例：

```javascript
uni.request({
	url: 'https://{云函数Url化域名}/http/uni-id-co/login',
	method: 'POST',
	data: {
		clientInfo: uni.getSystemInfoSync(),
		uniIdToken: '用户Token',
		params: {
			username:"username",
			password:"password"
		}
	},
	header: {
		'Content-Type': 'application/json'
	},
	success: (res) => {
		// 返回值
	}
})
```

**注意**

请不要添加 Query 参数，URL化后将忽略 Query 参数

### API列表

|API							|描述														|
|--								|--															|
|uniIdCo.registerAdmin()		|注册管理员 [详情](#register-admin)							|
|uniIdCo.addUser()				|新增用户 [详情](#add-user)									|
|uniIdCo.authorizeAppLogin()	|授权用户登录应用 [详情](#authorize-app-login)				|
|uniIdCo.removeAuthorizedApp()	|移除用户登录授权 [详情](#remove-authorized-app)			|
|uniIdCo.setAuthorizedApp()		|设置用户允许登录的应用列表 [详情](#set-authorized-app)		|
|uniIdCo.registerUser()			|注册普通用户 [详情](#register-user)						|
|uniIdCo.registerUserByEmail()	|通过邮箱验证码注册普通用户 [详情](#register-user-by-email)	|
|uniIdCo.login()				|用户名密码登录 [详情](#login)								|
|uniIdCo.loginBySms()			|短信验证码登录 [详情](#login-by-sms)						|
|uniIdCo.loginByUniverify()		|App端一键登录 [详情](#login-by-univerify)					|
|uniIdCo.loginByWeixin()		|微信登录 [详情](#login-by-weixin)							|
|uniIdCo.loginByAlipay()		|支付宝登录 [详情](#login-by-alipay)						|
|uniIdCo.loginByQQ()			|QQ登录 [详情](#login-by-qq)								|
|uniIdCo.loginByApple()			|苹果登录 [详情](#login-by-apple)							|
|uniIdCo.logout()				|用户退出登录 [详情](#logout)								|
|uniIdCo.bindMobileBySms()		|通过短信验证码绑定手机号 [详情](#bind-mobile-by-sms)		|
|uniIdCo.bindMobileByUniverify()|通过一键登录绑定手机号 [详情](#bind-mobile-by-univerify)	|
|uniIdCo.bindMobileByMpWeixin()	|通过微信绑定手机号 [详情](#bind-mobile-by-mp-weixin)		|
|uniIdCo.bindWeixin()			|绑定微信 [详情](#bind-weixin)								|
|uniIdCo.bindQQ()				|绑定QQ [详情](#bind-qq)									|
|uniIdCo.bindAlipay()			|绑定支付宝账号 [详情](#bind-alipay)						|
|uniIdCo.bindApple()			|绑定苹果账号 [详情](#bind-apple)							|
|uniIdCo.updatePwd()			|更新密码 [详情](#update-pwd)								|
|uniIdCo.resetPwdBySms()		|通过短信验证码重置密码 [详情](#reset-pwd-by-sms)			|
|uniIdCo.resetPwdByEmail()		|通过邮箱验证码重置密码 [详情](#reset-pwd-by-email)			|
|uniIdCo.closeAccount()			|注销账户 [详情](#close-account)							|
|uniIdCo.getAccountInfo()		|获取账户账户简略信息 [详情](#get-account-info)				|
|uniIdCo.createCaptcha()		|创建图形验证码 [详情](#create-captcha)						|
|uniIdCo.refreshCaptcha()		|刷新图形验证码 [详情](#refresh-captcha)					|
|uniIdCo.sendSmsCode()			|发送短信验证码 [详情](#send-sms-code)						|
|uniIdCo.sendEmailCode()		|发送邮箱验证码 [详情](#send-email-code)					|
|uniIdCo.refreshToken()			|刷新token [详情](#refresh-token)							|
|uniIdCo.acceptInvite()			|接受邀请 [详情](#accept-invite)							|
|uniIdCo.getInvitedUser()		|获取受邀用户 [详情](#get-invited-user)						|
|uniIdCo.setPushCid()			|更新device表的push_clien_id [详情](#set-push-cid)			|
|uniIdCo.getSupportedLoginType()|获取支持的登录方式 [详情](#get-supported-login-type)		|

### 注册登录和登出@register-login-logout

#### 注册超级管理员@register-admin

接口名：registerAdmin

**接口形式**

```js
await uniIdCo.registerAdmin({
	username,
	password,
	nickname
})
```

**参数说明**

|参数名		|类型	|必填	|说明				|
|--			|--		|--		|--					|
|username	|string	|是		|超级管理员用户名	|
|password	|string	|是		|超级管理员密码		|
|nickname	|string	|否		|超级管理员昵称		|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|
|newToken						|object				|token信息		|
|&nbsp;&#124;-&nbsp;token		|string				|token			|
|&nbsp;&#124;-&nbsp;tokenExpired|string				|token过期时间	|

**注意**

- 系统中仅可存在一个超级管理员

#### 用户名密码注册用户@register-user

接口名：registerUser

**接口形式**

```js
await uniIdCo.registerUser({
	username,
	password,
	captcha,
	nickname,
	inviteCode
})
```

**参数说明**

|参数名		|类型	|必填	|说明		|
|--			|--		|--		|--			|
|username	|string	|是		|用户名		|
|password	|string	|是		|密码		|
|captcha	|string	|是		|图形验证码	|
|nickname	|string	|否		|昵称		|
|inviteCode	|string	|否		|邀请码		|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|
|newToken						|object				|token信息		|
|&nbsp;&#124;-&nbsp;token		|string				|token			|
|&nbsp;&#124;-&nbsp;tokenExpired|string				|token过期时间	|

#### 邮箱验证码注册用户@register-user-by-email

接口名：registerUserByEmail

**接口形式**

```js
await uniIdCo.registerUserByEmail({
	email,
	password,
	code,
	nickname,
	inviteCode
})
```

**参数说明**

|参数名		|类型	|必填	|说明		|
|--			|--		|--		|--			|
|email		|string	|是		|邮箱		|
|password	|string	|是		|密码		|
|code		|string	|是		|邮箱验证码	|
|nickname	|string	|否		|昵称		|
|inviteCode	|string	|否		|邀请码		|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|
|newToken						|object				|token信息		|
|&nbsp;&#124;-&nbsp;token		|string				|token			|
|&nbsp;&#124;-&nbsp;tokenExpired|string				|token过期时间	|

#### 密码登录@login

接口名：login

**接口形式**

```js
await uniIdCo.login({
	username,
	password,
	captcha
})
```

**参数说明**

|参数名		|类型	|必填						|说明		|
|--			|--		|--							|--			|
|username	|string	|和mobile、email三选一		|用户名		|
|mobile		|string	|和username、email三选一	|手机号		|
|email		|string	|和username、mobile三选一	|邮箱		|
|password	|string	|是							|密码		|
|captcha	|string	|否							|图形验证码	|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|
|newToken						|object				|token信息		|
|&nbsp;&#124;-&nbsp;token		|string				|token			|
|&nbsp;&#124;-&nbsp;tokenExpired|string				|token过期时间	|

#### 短信验证码登录@login-by-sms

手机号已存在时登录，否则注册

接口名：loginBySms

**接口形式**

```js
await uniIdCo.loginBySms({
	mobile,
	code,
	captcha,
	inviteCode
})
```

**参数说明**

|参数名			|类型		|必填	|说明									|
|--					|--			|--		|--										|
|mobile			|string	|是		|手机号								|
|code				|string	|是		|短信验证码						|
|captcha		|string	|否		|图形验证码						|
|inviteCode	|string	|否		|邀请码，仅注册时生效	|

两小时内登录失败3次的用户必填图形验证码，如果客户端没有使用uni-id-pages，可以参考uni-id-pages验证码登录页面的相关逻辑。

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|
|newToken						|object				|token信息		|
|&nbsp;&#124;-&nbsp;token		|string				|token			|
|&nbsp;&#124;-&nbsp;tokenExpired|string				|token过期时间	|

#### 微信授权手机号登录@login-by-weixin-mobile <Badge text="uni-id-co 1.0.25+" />

接口名：loginByWeixinMobile

**接口形式**

```js
await uniIdCo.loginByWeixinMobile({
	phoneCode,
	inviteCode
})
```

**参数说明**

|参数名			|类型	|必填	|说明								|
|--				|--		|--		|--									|
|phoneCode	|string	|是		|getPhoneNumber 事件回调获取到动态令牌code	|
|inviteCode		|string	|否		|邀请码，仅注册时生效				|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|
|newToken						|object				|token信息		|
|&nbsp;&#124;-&nbsp;token		|string				|token			|
|&nbsp;&#124;-&nbsp;tokenExpired|string				|token过期时间	|

**注意**
- 此接口会调用微信凭证接口获取access_token，uni-id-pages 1.0.8及以上版本会使用 [uni-open-bridge-common](/uniCloud/uni-open-bridge.md) 保存 access_token 信息。
- 如果开发者在其他应用未使用 [uni-open-bridge-common](/uniCloud/uni-open-bridge.md) 管理 access_token 等信息，可能会造成 access_token 冲突。
#### 一键登录@login-by-univerify

手机号已存在时登录，否则注册

接口名：loginByUniverify

**接口形式**

```js
await uniIdCo.loginByUniverify({
	access_token,
	openid,
	inviteCode
})
```

**参数说明**

|参数名			|类型	|必填	|说明								|
|--				|--		|--		|--									|
|access_token	|string	|是		|一键登录客户端返回的access_token	|
|openid			|string	|是		|一键登录客户端返回的openid			|
|inviteCode		|string	|否		|邀请码，仅注册时生效				|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|
|newToken						|object				|token信息		|
|&nbsp;&#124;-&nbsp;token		|string				|token			|
|&nbsp;&#124;-&nbsp;tokenExpired|string				|token过期时间	|

#### 微信登录@login-by-weixin

微信账号已存在时登录，否则注册

接口名：loginByWeixin

**接口形式**

```js
await uniIdCo.loginByWeixin({
	code,
	inviteCode
})
```

**参数说明**

|参数名		|类型	|必填	|说明							|
|--			|--		|--		|--								|
|code		|string	|是		|`uni.login`接口返回的code参数	|
|inviteCode	|string	|否		|邀请码，仅注册时生效			|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|
|newToken						|object				|token信息		|
|&nbsp;&#124;-&nbsp;token		|string				|token			|
|&nbsp;&#124;-&nbsp;tokenExpired|string				|token过期时间	|

**注意**

- 支持的登录方式：微信小程序、微信公众号、App、web站微信扫码登录
- 微信登录会自动保存用户的openid，在`uni-id-pages 1.0.8`及更高版本在存储openid时会同时存储一份以当前应用的Appid（manifest.json内的DCloud AppId）为key的openid，见下方关于openid的说明。
- 如果有多个应用同时使用微信小程序登录，且希望用户身份不隔离请确保这些应用在微信小程序平台为同一主体所有，即保证不同应用可以获取同样的unionid
- `uni-id-pages 1.0.8`及以上版本会使用uni-open-bridge-common保存`session_key`（微信小程序登录）、`access_token`（微信公众号登录、微信App登录）这些信息，但是为了兼容旧版逻辑仍在用户表存储了一份副本。详细说明参考：[自动保存用户sessionKey、accessToken等信息](uni-id-summary.md#save-user-token)
- - 如果开发者在其他应用未使用 [uni-open-bridge-common](/uniCloud/uni-open-bridge.md) 管理 access_token 等信息，可能会造成 access_token 冲突。
	**关于openid的说明**

`uni-id-pages 1.0.7`及之前的版本会将微信的openid存为如下格式

```js
{
	"_id": "xx",
		"wx_openid": {
		"mp": "weixin-openid-demo"
	}
}
```

可以看到如果存在多个微信小程序应用连接一个uniCloud后台且关联同一个账号，此时只能存储一个小程序的openid。

在`uni-id-pages 1.0.8`版本对此进行了调整修正，多个DCloud Appid可以对应不同的微信openid。以Appid`__UNI_123456`为例，openid会在数据库内存储为以下形式：

```js
{
	"_id": "xx",
		"wx_openid": {
		"mp": "weixin-openid-demo",
		"mp___UNI_123456": "weixin-openid-demo",
	}
}
```

#### QQ登录@login-by-qq

QQ账号已存在时登录，否则注册

接口名：loginByQQ

**接口形式**

```js
await uniIdCo.loginByQQ({
	code,
	accessToken,
	inviteCode
})
```

**参数说明**

|参数名				|类型	|必填	|说明													|
|--					|--		|--		|--														|
|code				|string	|否		|QQ小程序`uni.login`返回的code参数						|
|accessToken		|string	|否		|APP端QQ登录返回的accessToken参数						|
|accessTokenExpired	|number	|否		|accessToken过期时间，由APP端QQ登录返回的expires_in参数	|
|inviteCode			|string	|否		|邀请码，仅注册时生效									|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|
|newToken						|object				|token信息		|
|&nbsp;&#124;-&nbsp;token		|string				|token			|
|&nbsp;&#124;-&nbsp;tokenExpired|string				|token过期时间	|

**注意**

- 支持的登录方式：QQ小程序、QQ App
- QQ登录会自动保存用户的openid，在`uni-id-pages 1.0.8`及更高版本在存储openid时会同时存储一份以当前应用的Appid（manifest.json内的DCloud AppId）为key的openid，见下方关于openid的说明。
- 如果有多个应用同时使用QQ小程序登录，且希望用户身份不隔离请确保这些应用在QQ小程序平台为同一主体所有，即保证不同应用可以获取同样的unionid
- `uni-id-pages 1.0.8`及以上版本会使用uni-open-bridge-common保存session_key（QQ小程序登录）、access_token（QQ App登录）这些信息，但是为了兼容旧版逻辑仍在用户表存储了一份副本。详细说明参考：[自动保存用户sessionKey、accessToken等信息](uni-id-summary.md#save-user-token)

**关于openid的说明**

`uni-id-pages 1.0.7`及之前的版本会将QQ的openid以以下形式存储

```js
{
	"_id": "xx",
		"qq_openid": {
		"mp": "weixin-openid-demo"
	}
}
```

可以看到如果存在多个QQ小程序关联同一个账号，这时候只能存储一个小程序的openid，在`uni-id-pages 1.0.8`版本对此进行了调整以Appid`__UNI_123456`为例，openid会在数据库内存储为以下形式

```js
{
	"_id": "xx",
	"qq_openid": {
		"mp": "weixin-openid-demo",
		"mp___UNI_123456": "weixin-openid-demo",
	}
}
```

#### 支付宝登录@login-by-alipay

支付宝账号已存在时登录，否则注册

接口名：loginByAlipay

**接口形式**

```js
await uniIdCo.loginByAlipay({
	code,
	inviteCode
})
```

**参数说明**

|参数名		|类型	|必填	|说明									|
|--			|--		|--		|--										|
|code		|string	|是		|支付宝小程序`uni.login`返回的code参数	|
|inviteCode	|string	|否		|邀请码，仅注册时生效					|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|
|newToken						|object				|token信息		|
|&nbsp;&#124;-&nbsp;token		|string				|token			|
|&nbsp;&#124;-&nbsp;tokenExpired|string				|token过期时间	|

#### 苹果登录@login-by-apple

苹果账号已存在时登录，否则注册

接口名：loginByApple

**接口形式**

```js
await uniIdCo.loginByApple({
	identityToken,
	nickname,
	inviteCode
})
```

**参数说明**

|参数名			|类型	|必填	|说明									|
|--				|--		|--		|--										|
|identityToken	|string	|是		|App端苹果登录返回的identityTokenc参数	|
|nickname		|string	|否		|昵称									|
|inviteCode		|string	|否		|邀请码，仅注册时生效					|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|
|newToken						|object				|token信息		|
|&nbsp;&#124;-&nbsp;token		|string				|token			|
|&nbsp;&#124;-&nbsp;tokenExpired|string				|token过期时间	|

#### 登出@logout

接口名：logout

**接口形式**

```js
await uniIdCo.logout()
```

**参数说明**

无

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|

#### 注销@close-account

调用此接口后用户status将会设置为注销状态，需要注意的是目前token不会自动失效，后续会引入redis解决此问题。如果不需要此功能建议手动修改代码。

接口名：closeAccount

**接口形式**

```js
await uniIdCo.closeAccount()
```

**参数说明**

无

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|


#### 获取支持的登录方式@get-supported-login-type

接口名：getSupportedLoginType

**接口形式**

```js
await uniIdCo.getSupportedLoginType()
```

**参数说明**

无

**返回值**

|参数名				|类型				|说明							|
|--					|--					|--								|
|errCode			|string&#124;number	|错误码							|
|errMsg				|string				|错误信息						|
|supportedLoginType	|array				|支持的登录方式列表，见下方说明	|

**supportedLoginType**

|登录方式			|说明				|
|---				|---				|
|username-password	|用户名密码登录		|
|mobile-password	|手机号密码登录		|
|email-password		|邮箱密码登录		|
|mobile-code		|手机号验证码登录		|
|univerify			|App一键登录			|
|weixin				|微信登录			|
|qq					|QQ登录				|
|apple				|苹果登录			|
|alipay				|支付宝登录			|


### 绑定账号@bind

#### 使用短信验证码绑定手机号@bind-mobile-by-sms

接口名：bindMobileBySms

**接口形式**

```js
await uniIdCo.bindMobileBySms({
	mobile,
	code,
	captcha
})
```

**参数说明**

|参数名	|类型	|必填	|说明		|
|--		|--		|--		|--			|
|mobile	|string	|是		|手机号码	|
|code	|string	|是		|短信验证码	|
|captcha|string	|否		|图形验证码	|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|
|newToken						|object				|token信息		|
|&nbsp;&#124;-&nbsp;token		|string				|token			|
|&nbsp;&#124;-&nbsp;tokenExpired|string				|token过期时间	|

**注意**

- 仅在用户token即将过期时返回新newToken

#### 使用一键登录绑定手机号@bind-mobile-by-univerify

接口名：bindMobileByUniverify

**接口形式**

```js
await uniIdCo.bindMobileByUniverify({
	openid,
	access_token
})
```

**参数说明**

|参数名			|类型	|必填	|说明									|
|--				|--		|--		|--										|
|openid			|string	|是		|客户端一键登录返回的openid参数			|
|access_token	|string	|是		|客户端一键登录返回的access_token参数	|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|
|newToken						|object				|token信息		|
|&nbsp;&#124;-&nbsp;token		|string				|token			|
|&nbsp;&#124;-&nbsp;tokenExpired|string				|token过期时间	|

**注意**

- 仅在用户token即将过期时返回新newToken

#### 通过微信绑定手机号@bind-mobile-by-mp-weixin

::: warning 使用此接口时务必注意
**微信小程序对获取手机号的接口进行了安全升级，自 `uni-id-co@1.0.25` 以上版本开始，支持getPhoneNumber事件回调的动态口令`code`，同时为了向下兼容保留`encryptedData` 与 `iv`参数，建议开发者升级，以增强小程序安全性。**

微信小程序的规则是客户端应先使用checkSession接口检测上次获取的sessionKey是否仍有效。

如果有效则直接使用上次存储的sessionKey即可，如果无效应重新调用login接口再次刷新sessionKey。

微信小程序登录、绑定小程序微信账号时会自动更新用户的sessionKey。

:::

接口名：bindMobileByMpWeixin

**接口形式**

```js
// uni-id-co >= 1.0.25
await uniIdCo.bindMobileByMpWeixin({
	code
})

// uni-id-co < 1.0.25
await uniIdCo.bindMobileByMpWeixin({
	encryptedData,
	iv
})
```

**参数说明**

|参数名			|类型	|必填	|说明										|
|--				|--		|--		|--											|
|encryptedData	|string	|是		|微信小程序获取手机号返回的encryptedData参数 |
|iv				|string	|是		|微信小程序获取手机号返回的iv参数 |
|code				|string	|是		|微信小程序获取手机号返回的code参数； `uni-id-co >= 1.0.25支持`			|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|
|newToken						|object				|token信息		|
|&nbsp;&#124;-&nbsp;token		|string				|token			|
|&nbsp;&#124;-&nbsp;tokenExpired|string				|token过期时间	|

**注意**

- 仅在用户token即将过期时返回新newToken

#### 绑定微信@bind-weixin

接口名：bindWeixin

**接口形式**

```js
await uniIdCo.bindWeixin({
	code
})
```

**参数说明**

|参数名	|类型	|必填	|说明					|
|--		|--		|--		|--						|
|code	|string	|是		|微信登录返回的code参数	|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|
|newToken						|object				|token信息		|
|&nbsp;&#124;-&nbsp;token		|string				|token			|
|&nbsp;&#124;-&nbsp;tokenExpired|string				|token过期时间	|

**注意**

- 仅在用户token即将过期时返回新newToken
- 如果开发者在其他应用未使用 [uni-open-bridge-common](/uniCloud/uni-open-bridge.md) 管理 access_token 等信息，可能会造成 access_token 冲突。
#### 绑定QQ@bind-qq

接口名：bindQQ

**接口形式**

```js
await uniIdCo.bindQQ({
	code,
	accessToken
})
```

**参数说明**

|参数名		|类型	|必填	|说明								|
|--			|--		|--		|--									|
|code		|string	|否		|QQ小程序登录返回的code参数			|
|accessToken|string	|否		|App端QQ登录返回的accessToken参数	|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|
|newToken						|object				|token信息		|
|&nbsp;&#124;-&nbsp;token		|string				|token			|
|&nbsp;&#124;-&nbsp;tokenExpired|string				|token过期时间	|

**注意**

- 仅在用户token即将过期时返回新newToken

#### 绑定支付宝账号@bind-alipay

接口名：bindAlipay

**接口形式**

```js
await uniIdCo.bindAlipay({
	code
})
```

**参数说明**

|参数名	|类型	|必填	|说明							|
|--		|--		|--		|--								|
|code	|string	|是		|支付宝小程序登录返回的code参数	|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|
|newToken						|object				|token信息		|
|&nbsp;&#124;-&nbsp;token		|string				|token			|
|&nbsp;&#124;-&nbsp;tokenExpired|string				|token过期时间	|

**注意**

- 仅在用户token即将过期时返回新newToken

#### 绑定苹果账号@bind-apple

接口名：bindApple

**接口形式**

```js
await uniIdCo.bindApple({
	identityToken
})
```

**参数说明**

|参数名			|类型	|必填	|说明							|
|--				|--		|--		|--								|
|identityToken	|string	|是		|苹果登录返回的identityToken参数|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|
|newToken						|object				|token信息		|
|&nbsp;&#124;-&nbsp;token		|string				|token			|
|&nbsp;&#124;-&nbsp;tokenExpired|string				|token过期时间	|

**注意**

- 仅在用户token即将过期时返回新newToken

### 解绑第三方账号@unbind-third-account <Badge text="uni-id-co 1.0.25+" />

> 如账号只有一个第三方登录方式时，需绑定手机号后在解绑。

#### 解绑微信@unbind-weixin

接口名：unbindWeixin

**接口形式**

```js
await uniIdCo.unbindWeixin()
```

**返回值**
|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|

#### 解绑QQ@unbind-qq
接口名：unbindQQ
**接口形式**
```js
await uniIdCo.unbindQQ()
```
**返回值**
|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|

#### 解绑支付宝@unbind-alipay
接口名：unbindAlipay
**接口形式**
```js
await uniIdCo.unbindAlipay()
```
**返回值**
|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|

#### 解绑苹果账号@unbind-apple
接口名：unbindApple
**接口形式**
```js
await uniIdCo.unbindApple()
```
**返回值**
|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|

### 用户信息@user-info

#### 设置密码@set-pwd

接口名：setPwd

**接口形式**
```js
await uniIdCo.setPwd({
	code,
	captcha,
	password
})
```

**参数说明**

|参数名		|类型	|必填	|说明	|
|--			|--		|--		|--		|
|code|string	|是		|手机验证码	|
|captcha|string	|否		|图形验证码	|
|password|string	|是		|密码	|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|

#### 修改密码@update-pwd

接口名：updatePwd

**接口形式**

```js
await uniIdCo.updatePwd({
	oldPassword,
	newPassword
})
```

**参数说明**

|参数名		|类型	|必填	|说明	|
|--			|--		|--		|--		|
|oldPassword|string	|是		|旧密码	|
|newPassword|string	|是		|新密码	|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|
|newToken						|object				|token信息		|
|&nbsp;&#124;-&nbsp;token		|string				|token			|
|&nbsp;&#124;-&nbsp;tokenExpired|string				|token过期时间	|

**注意**

- 仅在用户token即将过期时返回新newToken

#### 通过短信验证码重置密码@reset-pwd-by-sms

接口名：resetPwdBySms

**接口形式**

```js
await uniIdCo.resetPwdBySms({
	mobile,
	code,
	password,
	captcha
})
```

**参数说明**

|参数名		|类型	|必填	|说明		|
|--			|--		|--		|--			|
|mobile		|string	|是		|手机号		|
|code		|string	|是		|短信验证码	|
|password	|string	|是		|密码		|
|captcha	|string	|否		|图形验证码	|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|

#### 通过邮箱验证码重置密码@reset-pwd-by-email

接口名：resetPwdByEmail

**接口形式**

```js
await uniIdCo.resetPwdByEmail({
	email,
	code,
	password,
	captcha
})
```

**参数说明**

|参数名		|类型	|必填	|说明		|
|--			|--		|--		|--			|
|email		|string	|是		|邮箱		|
|code		|string	|是		|邮箱验证码	|
|password	|string	|是		|密码		|
|captcha	|string	|否		|图形验证码	|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|

#### 获取账户简略信息@get-account-info

接口名：getAccountInfo

**接口形式**

```js
await uniIdCo.getAccountInfo()
```

**参数说明**

无

**返回值**

|参数名			|类型				|说明				|
|--				|--					|--					|
|errCode		|string&#124;number	|错误码				|
|errMsg			|string				|错误信息			|
|isUsernameSet	|boolean			|是否已有用户名		|
|isNicknameSet	|boolean			|是否已有昵称		|
|isPasswordSet	|boolean			|是否已设置密码		|
|isMobileBound	|boolean			|手机号是否已绑定	|
|isEmailBound	|boolean			|邮箱是否已绑定		|
|isWeixinBound	|boolean			|微信是否已绑定		|
|isQQBound		|boolean			|QQ是否已绑定		|
|isAlipayBound	|boolean			|支付宝是否已绑定	|
|isAppleBound	|boolean			|苹果账号是否已绑定	|


#### 接受邀请@accept-invite

接口名：acceptInvite

**接口形式**

```js
await uniIdCo.acceptInvite({
	inviteCode
})
```

**参数说明**

|参数名		|类型	|必填	|说明	|
|--			|--		|--		|--		|
|inviteCode	|string	|是		|邀请码	|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|
|newToken						|object				|token信息		|
|&nbsp;&#124;-&nbsp;token		|string				|token			|
|&nbsp;&#124;-&nbsp;tokenExpired|string				|token过期时间	|

**注意**

- 仅在用户token即将过期时返回新newToken

#### 获取邀请的用户@get-invited-user

接口名：getInvitedUser

**接口形式**

```js
await uniIdCo.getInvitedUser({
	level,
	limit,
	offset,
	needTotal
})
```

**参数说明**

|参数名		|类型	|必填	|说明											|
|--			|--		|--		|--												|
|level		|number	|是		|邀请用户层级，例，值为1时表示自己直接邀请的用户|
|limit		|number	|否		|本次请求返回的数量，默认：20					|
|offset		|number	|否		|列表偏移数值，默认：0，通过和limit结合进行分页	|
|needTotal	|boolean|否		|是否返回总数，默认：false						|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|
|newToken						|object				|token信息		|
|&nbsp;&#124;-&nbsp;token		|string				|token			|
|&nbsp;&#124;-&nbsp;tokenExpired|string				|token过期时间	|

**注意**

- 仅在用户token即将过期时返回新newToken


#### 获取账户实名信息（脱敏）@get-realname-info <Badge text="uni-id-pages 1.1.2+" />

接口名：getRealNameInfo

**接口形式**

```js
await uniIdCo.getRealNameInfo({
	decryptData
})
```

**参数说明**

|参数名		|类型	|必填	|说明											|
|--			|--		|--		|--												|
|decryptData		|boolean	|否		|是否解密数据；默认：true|

**返回值**

| 参数名			      | 类型				              | 说明				                            |
|-------------|---------------------|-----------------------------------|
| errCode		   | string&#124;number	 | 错误码				                           |
| errMsg			   | string				          | 错误信息			                           |
| type	       | number			           | 用户类型：0 个人用户 1 企业用户		              |
| authStatus	 | number			           | 认证状态：0 未认证 1 等待认证 2 认证通过 3 认证失败		 |
| realName	   | string			           | 姓名（脱敏）；用户类型为 0 时返回		              |
| identity	   | string			           | 身份证号码（脱敏）；用户类型为 0 时返回		           |

**注意**

在uni-id-pages中默认启用敏感数据加解密，如果开发者没有使用uni-id提供的[敏感信息加密](uniCloud/uni-id-summary.md#sensitive-info-encrypt)功能，请将`decryptData`参数改为`false`，返回原始信息

### 安全验证@verifier

#### 创建图形验证码@create-captcha

接口名：createCaptcha

**接口形式**

```js
await uniIdCo.createCaptcha({
	scene
})
```

**参数说明**

|参数名	|类型	|必填	|说明														|
|--		|--		|--		|--															|
|scene	|string	|是		|图形验证码使用场景，务必确保使用验证码的场景和生成验证码时传的场景参数相匹配，否则会校验不通过，参考：[图形验证码场景](uni-id-summary.md#captcha-scene)	|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|
|captchaBase64  |string| 验证码：base64 格式|

#### 刷新图形验证码@refresh-captcha

接口名：refreshCaptcha

**接口形式**

```js
await uniIdCo.refreshCaptcha({
	scene
})
```

**参数说明**

|参数名	|类型	|必填	|说明														|
|--		|--		|--		|--															|
|scene	|string	|是		|图形验证码使用场景，参考：[图形验证码场景](uni-id-summary.md#captcha-scene)	|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|
|captchaBase64  |string| 验证码：base64 格式|

#### 发送短信@send-sms-code

发送短信功能需要以下前置工作

1. 在[开发者中心](https://dev.dcloud.net.cn)开通短信服务，并申请短信模板
2. 在uni-id的配置文件里面添加验证码使用场景对应的短信模板信息，参考：[uni-id配置文件](uni-id-summary.md#config)

接口名：sendSmsCode

**接口形式**

```js
await uniIdCo.sendSmsCode({
	mobile,
	captcha,
	scene
})
```

**参数说明**

|参数名	|类型	|必填	|说明									|
|--		|--		|--		|--										|
|mobile	|string	|是		|手机号码								|
|captcha|string	|是		|图形验证码								|
|scene	|string	|是		|短信验证码使用场景，务必确保使用验证码的场景和发送验证码时传的场景参数相匹配，否则会校验不通过，参考：[短信验证码使用场景](uni-id-summary.md#sms-scene)	|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|

#### 发送邮箱验证码@send-email-code

接口名：sendEmailCode

**接口形式**

```js
await uniIdCo.sendEmailCode({
	email,
	captcha,
	scene
})
```

**参数说明**

|参数名	|类型	|必填	|说明									|
|--		|--		|--		|--										|
|email	|string	|是		|邮箱								|
|captcha|string	|是		|图形验证码								|
|scene	|string	|是		|使用场景，参考：[手机、邮箱验证码使用场景](#sms-scene)	|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|

### 其他用户端接口@utils

#### 刷新token@refresh-token

接口名：refreshToken

**接口形式**

```js
await uniIdCo.refreshToken()
```

**参数说明**

无

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|
|newToken						|object				|token信息		|
|&nbsp;&#124;-&nbsp;token		|string				|token			|
|&nbsp;&#124;-&nbsp;tokenExpired|string				|token过期时间	|


#### 更新/设置uni-push clientId@set-push-cid

如未使用`uni-push 2.0`无需关注此接口。此接口用于更新uni-id-device表的unipush_clientid字段，用于按客户端、用户等维度推送消息

接口名：setPushCid

**接口形式**

```js
await uniIdCo.setPushCid({
	pushClientId
})
```

**参数说明**

|参数名			|类型	|必填	|说明								|
|--				|--		|--		|--									|
|pushClientId	|string	|是		|客户端获取的uni-push对应的clientId	|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|
|newToken						|object				|token信息		|
|&nbsp;&#124;-&nbsp;token		|string				|token			|
|&nbsp;&#124;-&nbsp;tokenExpired|string				|token过期时间	|


#### 微信安全网络握手@secure-network-handshake-by-weixin

此接口用于微信小程序端安全网络的握手，安全网络相关文档请参考：[安全网络](secure-network.md)

一般无需通过uniCloud.importObject方式调用，在客户端调用`uniCloud.initSecureNetworkByWeixin()`时会通过此接口获取会话相关信息。

此接口会将会话信息存储在`opendb-open-data`表内，如果在`initSecureNetworkByWeixin`方法内传递了`callLoginByWeixin: true`会在存储会话信息的同时执行一次uni-id-co的`loginByWeixin`方法

### 管理接口@admin

#### 管理员新增用户@add-user

接口名：addUser

**接口形式**

```js
await uniIdCo.addUser({
	username,
	password,
	authorizedApp,
	nickname,
	role
})
```

**参数说明**

|参数名				|类型								|必填	|说明																											|
|--						|--									|--		|--																												|
|username			|string							|是		|用户名																										|
|password			|string							|是		|密码																											|
|authorizedApp|Array&lt;string&gt;|否		|允许登录的app列表																				|
|nickname			|string							|否		|昵称																											|
|role					|Array&lt;string&gt;|否		|用户角色																									|
|mobile				|string							|否		|手机号																										|
|email				|string							|否		|邮箱																											|
|tags					|array							|否		|用户标签																									|
|status				|number							|否		|用户状态，参考：[用户状态](uni-id-summary.md#user-status)|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|


#### 管理员修改用户@update-user

接口名：updateUser

**接口形式**

```js
await uniIdCo.updateUser({
	uid,
	username,
	password,
	nickname,
	authorizedApp,
	role,
	mobile,
	email,
	tags,
	status
})
```

**参数说明**

| 参数名				       | 类型								          | 必填	 | 说明																											                 |
|---------------|---------------------|-----|-----------------------------------------------|
| uid			        | string							       | 是		 | 要更新的用户id																										            |
| username			   | string							       | 是		 | 用户名																										                 |
| password			   | string							       | 否		 | 密码																											                 |
| nickname			   | string							       | 否		 | 昵称																											                 |
| authorizedApp | Array&lt;string&gt; | 否		 | 允许登录的app列表																				                |
| role					     | Array&lt;string&gt; | 否		 | 用户角色																									                 |
| mobile				    | string							       | 否		 | 手机号																										                 |
| email				     | string							       | 否		 | 邮箱																											                 |
| tags					     | array							        | 否		 | 用户标签																									                 |
| status				    | number							       | 否		 | 用户状态，参考：[用户状态](uni-id-summary.md#user-status) |

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|

#### 授权用户登录指定客户端@authorize-app-login

接口名：authorizeAppLogin

**接口形式**

```js
await uniIdCo.authorizeAppLogin({
	uid,
	appId
})
```

**参数说明**

|参数名	|类型	|必填	|说明						|
|--		|--		|--		|--							|
|uid	|string	|是		|用户id						|
|appId	|string	|是		|允许登录应用的DCloud AppId	|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|
|newToken						|object				|token信息		|
|&nbsp;&#124;-&nbsp;token		|string				|token			|
|&nbsp;&#124;-&nbsp;tokenExpired|string				|token过期时间	|

**注意**

- 此接口为管理端接口
- 仅在用户token即将过期时返回新newToken

#### 移除用户登录授权@remove-authorized-app

接口名：removeAuthorizedApp

**接口形式**

```js
await uniIdCo.removeAuthorizedApp({
	uid,
	appId
})
```

**参数说明**

|参数名	|类型	|必填	|说明							|
|--		|--		|--		|--								|
|uid	|string	|是		|用户id							|
|appId	|string	|是		|禁止登录的应用的DCloud AppId	|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|
|newToken						|object				|token信息		|
|&nbsp;&#124;-&nbsp;token		|string				|token			|
|&nbsp;&#124;-&nbsp;tokenExpired|string				|token过期时间	|

**注意**

- 此接口为管理端接口
- 仅在用户token即将过期时返回新newToken

#### 设置允许登录的应用列表@set-authorized-app

接口名：setAuthorizedApp

**接口形式**

```js
await uniIdCo.setAuthorizedApp({
	uid,
	appIdList
})
```

**参数说明**

|参数名		|类型				|必填	|说明									|
|--			|--					|--		|--										|
|uid		|string				|是		|用户id									|
|appIdList	|Array&lt;String&gt;|是		|允许登录的应用对应的DCloud AppId列表	|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|
|newToken						|object				|token信息		|
|&nbsp;&#124;-&nbsp;token		|string				|token			|
|&nbsp;&#124;-&nbsp;tokenExpired|string				|token过期时间	|

**注意**

- 此接口为管理端接口
- 仅在用户token即将过期时返回新newToken

### 外部系统联登@external

适合自己有用户系统，同时需要使用依赖UniId的业务，将自身系统的用户账号导入uniId，为其创建一个对应uniId的账号，使得该账号可以使用依赖uniId的系统及功能。
由于此方案的接口不需要密码验证，开发者务必要保证接口只能在服务端调用，同时要求在请求时计算签名来保证安全。

联登相关接口只支持HTTP方式调用，调用时需要携带鉴权签名值，查看[URL化请求鉴权签名计算](uni-id-pages.md#http-reqeust-auth)

#### 注册用户@external-register

外部用户注册，注册成功后，uni-id 返回 uid 与 用户 token ，请务必在自身系统中维护好 uid 与 token。

**接口地址**

```js
POST /your-uni-id-co-path/externalRegister
```

**HTTP 示例**
```javascript
POST /your-uni-id-co-path/externalRegister HTTP/1.1
Host: xxx.com
uni-id-nonce: xxxxxxx
uni-id-timestamp: 1676882808550
uni-id-signature: 11c965267a4a02c6978949c7135215b0a75aea22b2b84ed491e792365c8269efa
Content-Type: application/json
Cache-Control: no-cache

{"externalUid": "test externalUid", "nickname": "张三", "avatar": "xxxxxxx", "gender": 0}
```

**注意**

- 使用HTTP方式请求时，请按照[适配URL](#adapter-http)化规范进行请求。
- 请求时需要携带鉴权签名值，查看[URL化请求鉴权签名计算](#http-reqeust-auth)

**Request Body 说明**

| 参数名		         | 类型				     | 必填	 | 说明									                |
|---------------|------------|-----|----------------------------|
| externalUid		 | string				 | 是		 | 自身系统的用户id，必须保证唯一性。								 |
| nickname	     | string     | 否		 | 用户昵称	                      |
| avatar	       | string     | 否		 | 用户头像	                      |
| gender	       | number     | 否		 | 用户性别；0 未知 1 男性 2 女性	       |

**Response Body 说明**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|
|newToken						|object				|token信息		|
|&nbsp;&#124;-&nbsp;token		|string				|token			|
|&nbsp;&#124;-&nbsp;tokenExpired|string				|token过期时间	|
|externalUid							|string				|自身系统的用户id		|
|uid							|string				|uni-id体系的用户Id		|
| nickname	                       | string     	        | 用户昵称	                |
| avatar	                         | string     		       | 用户头像	                |
| gender	                         | string   	          | 用户性别；0 未知 1 男性 2 女性	 |

#### 用户登录@external-login

外部用户登录，用于获取用户token

**接口地址**

```js
POST /your-uni-id-co-path/externalLogin
```

**HTTP 示例**
```javascript
POST /your-uni-id-co-path/externalLogin HTTP/1.1
Host: xxx.com
uni-id-nonce: xxxxxxx
uni-id-timestamp: 1676882808550
uni-id-signature: 11c965267a4a02c6978949c7135215b0a75aea22b2b84ed491e792365c8269efa
Content-Type: application/json
Cache-Control: no-cache

{"externalUid": "test externalUid"}
```

**注意**

- 使用HTTP方式请求时，请按照[适配URL](#adapter-http)化规范进行请求。
- 请求时需要携带鉴权签名值，查看[URL化请求鉴权签名计算](#http-reqeust-auth)

**Request Body 说明**

|参数名		|类型				|必填	|说明									|
|--			|--					|--		|--										|
|uid		|string				|否		|uni-id体系的用户Id；与externalUid 二选一									|
|externalUid		|string				|否		|自身系统的用户id；与 uid 二选一									|


**Response Body 说明**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|
|newToken						|object				|token信息		|
|&nbsp;&#124;-&nbsp;token		|string				|token			|
|&nbsp;&#124;-&nbsp;tokenExpired|string				|token过期时间	|
|uid							|string				|uni-id体系的用户Id		|

#### 修改用户信息@external-update-userinfo

外部用户修改账号信息，如用户在自身系统内修改了用户信息后，通过此接口同步修改uni-id中用户信息。

**接口地址**

```js
POST /your-uni-id-co-path/updateUserInfoByExternal
```

**HTTP 示例**
```javascript
POST /your-uni-id-co-path/updateUserInfoByExternal HTTP/1.1
Host: xxx.com
uni-id-nonce: xxxxxxx
uni-id-timestamp: 1676882808550
uni-id-signature: 11c965267a4a02c6978949c7135215b0a75aea22b2b84ed491e792365c8269efa
Content-Type: application/json
Cache-Control: no-cache

{"externalUid": "test externalUid", "nickname": "张三"}
```

**注意**

- 使用HTTP方式请求时，请按照[适配URL](#adapter-http)化规范进行请求。
- 请求时需要携带鉴权签名值，查看[URL化请求鉴权签名计算](#http-reqeust-auth)

**Request Body 说明**

| 参数名		         | 类型				              | 必填	 | 说明									                                   |
|---------------|---------------------|-----|-----------------------------------------------|
| uid		         | string				          | 否		 | uni-id体系的用户Id；与externalUid 二选一									       |
| externalUid		 | string				          | 否		 | 自身系统的用户id；与 uid 二选一									                  |
| username			   | string							       | 否		 | 用户名																										                 |
| password			   | string							       | 否		 | 密码																											                 |
| nickname			   | string							       | 否		 | 昵称																											                 |
| authorizedApp | Array&lt;string&gt; | 否		 | 允许登录的app列表																				                |
| role					     | Array&lt;string&gt; | 否		 | 用户角色																									                 |
| mobile				    | string							       | 否		 | 手机号																										                 |
| email				     | string							       | 否		 | 邮箱																											                 |
| tags					     | array							        | 否		 | 用户标签																									                 |
| status				    | number							       | 否		 | 用户状态，参考：[用户状态](uni-id-summary.md#user-status) |
| avatar	       | string              | 否		 | 用户头像	                                         |
| gender	       | number              | 否		 | 用户性别；0 未知 1 男性 2 女性	                          |

**Response Body 说明**

| 参数名							                      | 类型				              | 说明			                |
|---------------------------------|---------------------|----------------------|
| errCode						                   | string&#124;number	 | 错误码			               |
| errMsg							                   | string				          | 错误信息		               |

### 实名认证 <Badge text="uni-id-pages 1.1.7+" />

> 实人认证相关功能建议或问题，可以加入uni-im交流群进行讨论，[点此加入](https://im.dcloud.net.cn/#/?joinGroup=6445fc67bc1254655dcbf5f7)

基于[实人认证](/uniCloud/frv/intro.md)服务实现，实现用户刷脸核验真实身份，完成实名认证。
`uni-id-pages`已内置实人认证前端页面与云端云对象，[了解](/uniCloud/uni-id-summary.md#frv)如在`uni-id-pages`中使用。

#### 获取认证ID@get-frv-certify-id

接口名：getFrvCertifyId

**接口形式**

```js
await uniIdCo.getFrvCertifyId({
	realName,
	idCard,
	metaInfo
})
```

**参数说明**

| 参数名		      | 类型				     | 必填	 | 说明									         |
|------------|------------|-----|---------------------|
| realName		 | string				 | 是		 | 用户真实姓名									     |
| idCard	    | string     | 是		 | 用户身份证号码	            |
| metaInfo	  | String	    | 是		 | 客户端初始化时返回的metaInfo	 |

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|
|certifyId						|object				|认证Id；用于客户端调用认证接口及云函数获取认证结果		|


#### 获取认证结果@get-frv-auth-result

接口名：getFrvAuthResult

**接口形式**

```js
await uniIdCo.getFrvAuthResult({
	certifyId
})
```

**参数说明**

|参数名		|类型				|必填	|说明									|
|--			|--					|--		|--										|
|certifyId		|string				|是		|认证Id									|

**返回值**

| 参数名							    | 类型				              | 说明			                                                                      |
|---------------|---------------------|----------------------------------------------------------------------------|
| errCode						 | string&#124;number	 | 错误码			                                                                     |
| errMsg							 | string				          | 错误信息		                                                                     |
| authStatus	   | number			           | 认证状态：0 未认证 1 等待认证 2 认证通过 3 认证失败		                                          |
| realName	     | string			           | 姓名（脱敏）；[敏感信息加密参考](/uniCloud/uni-id-summary.md#sensitive-info-encrypt)		    |
| identity	     | string			           | 身份证号码（脱敏）；[敏感信息加密参考](/uniCloud/uni-id-summary.md#sensitive-info-encrypt)		 |

### 其他功能@extra-function

### 覆盖或新增校验规则@custom-validator

uni-id-co将validator实例挂载在云对象的this上，在uni-id-co/index.obj.js获取validator实例后可以使用validator实例的mixin方法覆盖或者新增校验规则。

接口形式：`validator.mixin(String type, Function handler)`。其中type为规则类型（字符串），handler为校验函数

```js
// uni-id-co/index.obj.js
const {
	Validator
} = require('./common/validator.js')
module.exports = {
	_before () {
		this.validator = new Validator()
		/**
		 * 示例：覆盖密码验证规则
		 */
		this.validator.mixin('password', function (password) {
			if (typeof password !== 'string' || password.length < 10) {
				// 调整为密码长度不能小于10
				return {
					errCode: ERROR.INVALID_PASSWORD
				}
			}
		})
		/**
		 * 示例：新增验证规则
		 */
		this.validator.mixin('timestamp', function (timestamp) {
			if (typeof timestamp !== 'number' || timestamp > Date.now()) {
				return {
					errCode: ERROR.INVALID_PARAM
				}
			}
		})
		// // 新增规则同样可以在数组验证规则中使用
		this.validator.valdate({
			timestamp: 123456789
		}, {
			timestamp: 'timestamp'
		})
		this.validator.valdate({
			timestampList: [123456789, 123123123123]
		}, {
			timestampList: 'array<timestamp>'
		})
		// // 甚至更复杂的写法
		this.validator.valdate({
			timestamp: [123456789, 123123123123]
		}, {
			timestamp: 'timestamp|array<timestamp>'
		})
	}
}
```

## 登录服务开通与配置
服务端`uni-id`的密钥信息统一在`uni-config-center`中配置，路径：`uni_modules/uni-config-center/uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json`
以下简称：`uni-id配置文件`，完整的配置信息[详情查看](uni-id-summary.md#config)

### 一键登录
一键登录是运营商提供的、比短信验证码更方便、更安全、更便宜的方案。[详见](https://uniapp.dcloud.net.cn/univerify)。
- 使用本功能需要在[DCloud开发者中心 -> ](https://dev.dcloud.net.cn/pages/uniLogin/index)开通并充值
- 模块配置：`manifest.json`-->`App模块配置` -->`OAuth（登录鉴权）`-->` 一键登录`，点击后面的`开通配置`，在随后打开的web界面中，同意协议，并点击充值按钮充值。如只是测试，可以只充值1元钱。如果你已经确定包名，则可以在web界面点击“添加应用”，提交审核。这个是正式打包必须的。真机运行可以跳过此环节。记住页面上展示的`apiKey`和`apiSecret`，下一步需要用到。
- uni-id配置：`uni-id配置文件` --> `service` --> `univerify`，填写`appid`、`apiKey`和 `apiSecret`。`appid`就是`manifest`里的`appid`。`apiKey`和`apiSecret`则是从上一步的web界面得来的。

### 微信登录@weixinLogin

uni-id-pages已全面支持：app、小程序、web（uni-id-pages 版本号1.0.8起），三端的微信登录。

微信将应用分为4类：
1. 移动应用：指非微信的App，调用微信登陆。属于微信开放平台[微信开放平台账号](https://open.weixin.qq.com/)
2. 网站应用：指微信外的浏览器网页，通过手机微信扫码等方式调用微信登录。属于微信开放平台[微信开放平台账号](https://open.weixin.qq.com/)
3. 公众帐号：指在微信内置浏览器访问公众号H5。属于微信公众号平台[https://mp.weixin.qq.com/](https://mp.weixin.qq.com/)
4. 小程序：指微信内的小程序。属于微信公众号平台[https://mp.weixin.qq.com/](https://mp.weixin.qq.com/)

这里的`网站应用`和`公众帐号`都是给web应用，接入微信登录功能。但有如下区别：

|宿主环境		|所属类型	|登录方式			|
|--			|--		|--				|
|微信APP		|公众帐号	|网页授权登录		|
|普通浏览器	|网站应用	|手机微信扫码登录	|


### 如何选择微信开放平台和微信公众平台

- 如果你的应用只运行在`微信内`，不管是微信小程序还是微信公众号H5，都属于[微信公众平台](https://open.weixin.qq.com/)。
- 如果你的应用运行在`微信外`，不管是其他App还是微信外的其他网页，都属于[微信开放平台](https://open.weixin.qq.com/)。

根据你的需求开通相应平台账户即可。

**注意**

如果你的应用有多端，实现同一个用户在公众号、小程序、APP、官方网站等不同场景里的身份统一识别、信息同步和行为跟踪
（详情参考：[“UnionID关联”功能介绍及运营建议](https://developers.weixin.qq.com/community/business/doc/00024a52cec260f09b69c704e5b00d)）
就需要将`小程序`、`公众帐号`绑定到同一个`微信开放平台账号`下。
* 绑定方式：登录[微信开放平台](https://open.weixin.qq.com/) -> `管理中心` -> 选择`公众号/小程序` -> 点击`绑定公众号/小程序`

### 客户端配置
- APP端：
	* 打开`manifest.json` ->`App模块配置` -> `OAuth（登录鉴权）` -> `勾选微信登录` -> 填写`appid`、`ios平台通用链接`。
	* iOS平台微信登录SDK需要配置通用链接，详情参考：[https://uniapp.dcloud.io/api/plugins/universal-links.html](https://uniapp.dcloud.io/api/plugins/universal-links.html)。
- 小程序端：打开`manifest.json` -> `微信小程序配置` -> 填写微信小程序AppID
- web端：打开`/uni_modules/uni-id-pages/config.js` -> `appid` -> `weixin` 在`h5`节点配置微信公众号的appid，`web`节点配置微信开放平台创建的网站应用appid

### 服务端配置
* 服务端`uni-id`的密钥信息统一在`uni-config-center`中配置，路径：`uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json`，完整的配置信息[详情查看](uni-id-summary.md#config)


### web端微信登录专题
登录的流程为：
1. 应用页面，打开微信登录授权页链接（以get参数的方式传递appid和redirect_uri）
2. 进入授权页面，用户同意授权得到code；以get参数的形式携带code，重定向至步骤1填写的redirect_uri
3. 回到应用页面，拿到code值调用`uni-id-co`云对象的`loginByWeiXin`方法，得到`token`完成登录

- `appid`说明：微信app内打开的网页，为公众号的appid。其他场景则为在`微信开放平台`创建的`网站应用`的appid。
- `redirect_uri`说明：进入授权页面后返回的网站链接，此链接的域名需要先在服务后台配置，详情查看:[回调域名的配置](#redirect_uri)

示例代码已经在uni-id-pages插件中提供。

#### 回调域名的配置@redirect_uri

- 手机微信扫码登录  
  微信开放平台 -> 管理中心 -> 网站应用 -> 选择对应的应用名称，点击查看 -> 开发信息，点击修改 -> 填写授权回调域

- 基于微信公众号auth登录  
  登录微信公众号 -> 设置与开发 -> 公众号设置 -> 设置网页授权域名

#### 本地调试
回调域名，必须接入外网已经备案的URL地址，不然本地没法进行调试，你可以做内网穿透，映射生成一个外网URL地址来进行回调测试。但是那样比较麻烦，这里我们介绍一种基于HBuilderX本地启动一个Web Server进行调试的方法。

1. 启动一个80端口的Web Server服务
- 打开`manifest.json` -> `H5配置` -> `端口` -> 输入`80`
> 注意：mac系统中，非root用户是无法使用小于1024的常用端口的。解决方案打开`终端`，cd 到 HBuilderX安装目录(默认是Applications目录，执行`cd /Applications`)，然后执行 `sudo ./HBuilderX.app/Contents/MacOS/HBuilderX` 输入开机密码，再按回车，此时会以root用户权限重新打开HBuilderX；
- 通过HBuilderX运行项目到浏览器，即可启用一个80端口的Web Server了
> 如果没有启动80端口而是81等，说明你的端口被占用了。你有两个办法1.关闭可疑程序，或直接重启电脑 2.命令行关闭占用的端口[详情查看](https://www.baidu.com/s?&wd=%E5%91%BD%E4%BB%A4%E8%A1%8C%20%E8%A7%A3%E5%86%B3%E7%AB%AF%E5%8F%A3%E8%A2%AB%E5%8D%A0%E7%94%A8)

2. 实现访问域名直接指向你的本地web Server
   可以通过内网穿透实现，但比较麻烦且可能会影响线上用户。这里推荐直接修改hosts，hosts是一个没有扩展名的系统文件，其基本作用就是将一些常用的网址域名与其对应的 IP 地址建立一个关联“ 数据库 ”。当用户在浏览器中输入一个需要登录的网址时，系统会首先自动从hosts文件中寻找对应的 IP 地址，一旦找到，系统就会立即打开对应网页，如果没有找到，系统才会将网址提交 DNS 域名解析服务器进行 IP 地址的解析。  
   host文件路径： Windows系统一般为：`C:\Windows\System32\drivers\etc`。mac系统：`/etc/`  
   用HBuilderX打开hosts文件，在末尾添加一行 `127.0.0.1	你的域名`保存即可。
   此时访问域名，如果就能看到和你的项目运行到浏览器一样的效果，说明已经成功了。

### 苹果登录集成指南
- 模块配置：`manifest.json` --> `App模块配置` --> OAuth（登录鉴权）勾选`苹果登录`，[IOS苹果授权登录参考文档](https://ask.dcloud.net.cn/article/36651)。如不发布到Appstore，不需要配置此项
- uni-id配置：`uni-id配置文件` --> `app` --> `oauth` --> `apple` 填写`bundleId`。
- 关联域配置：`manifest.json` --> `App常用其他设置` --> `iOS设置` --> `关联域(Associated Domains)` 填写配置  [参考教程](https://ask.dcloud.net.cn/article/36393)。如不发布到Appstore，不需要配置此项

### 短信验证码
为了方便开发调试，`uni-id-pages`未配置短信登录时，自动启动测试模式；直接使用：123456作为短信验证码即可。
- 使用本功能需要在[uniCloud控制台](https://unicloud.dcloud.net.cn/pages/uni-sms/sms-account)开通并充值
- 教程参考[短信服务开通指南](https://uniapp.dcloud.net.cn/uniCloud/sms/intro.html)
- 密钥配置：`uni-id配置文件` --> `service` --> `sms` 填写相关密钥信息。

## 从老版uni-id公共模块升级到uni-id-pages

在HBuilderX 3.5之前，DCloud提供了一个公共模块[uni-id](https://ext.dcloud.net.cn/plugin?id=2116)（注意别和uni-id-common混淆）和一个示例性云函数uni-id-cf（集成在uni-starter和uni-admin中）。

老的公共模块[uni-id](https://ext.dcloud.net.cn/plugin?id=2116)是一个大而全的账户管理公共模块，体积太大，不适合被其他云函数引用。比如某个业务云函数需要校验用户token，引用的uni-id公共模块还包含了忘记密码的代码，很浪费资源。

从HBuilder 3.5起，[uni-id](https://ext.dcloud.net.cn/plugin?id=2116)和uni-id-cf都将被淘汰，不再更新。老的公共模块[uni-id](https://ext.dcloud.net.cn/plugin?id=2116)被拆开，变成了uni-id-common公共模块和uni-id-co云对象。

uni-id-common很精简，只包括token和权限，适合被所有云函数引用。

uni-id-co则是一个更加比uni-id-cf更完善和规范的用户管理的云对象。

然后DCloud推出了`uni-id-pages`。

目前uni-starter和uni-admin仍然使用老版[uni-id](https://ext.dcloud.net.cn/plugin?id=2116)和uni-id-cf，官方正在升级中，将其中的用户管理升级为uni-id-pages。


## 自uni-id公共模块升级到uni-id-common + uni-id-co@m-to-co

此次升级做了大幅改动，多数接口自公共模块中移除，改为由uni-id-co实现。仅创建token、刷新token、校验token接口保留在uni-id公共模块内。除接口调整外，uni-id体系（包含uni-id公共模块、uni-id-co）还有以下调整：

- 彻底移除bindTokenToDevice逻辑及配置
- 彻底移除removePermissionAndRoleFromToken逻辑及其配置，token内一定会缓存用户角色权限
- uni-id-common 1.0.9及更低版本未将token存储在用户表内，自uni-id-common 1.0.10起仍将token存储在用户表内（与旧版本uni-id保持一致）
- 为用户添加valid_token_date字段，**修改密码、重置密码、封禁用户场景下更新此值，刷新token时进行验证，如果token创建时间小于此时间戳，将等同于token已过期**
- 为用户添加third_party字段，用于缓存用户在三方平台的token、sessionKey等信息
- 用户名、邮箱入库时会转化为全小写
- `preferedAppPlatform`、`preferedWebPlatform`不再生效，uni-id内部会使用`app`代替`app-plus`、使用`web`代替`h5`
- wx_openid字段下平台名称调整，详见下方`字段名调整`相关说明
- qq_openid字段下平台名称调整，详见下方`字段名调整`相关说明

### 字段名调整

uni-id升级为uni-id-co + uni-id-common需要对个别字段进行重命名，直接运行下面的云函数即可重命名改动的字段。另外还需要修改一下索引，删除旧字段的索引，增加新字段的索引。建议在凌晨或其他低峰段操作，避免数据库操作耗时过久影响线上用户，如果有停服逻辑也可对系统短暂停服再操作。（在实际数据测试中，50000条用户记录重命名字段耗时约5秒钟）

```js
'use strict';
const db = uniCloud.database()
const dbCmd = db.command
exports.main = async (event, context) => {
	await db.collection('uni-id-users').update({
		wx_openid: {
			'app-plus': dbCmd.rename('wx_openid.app'), // app端微信openid
			'mp-weixin': dbCmd.rename('wx_openid.mp'), // 小程序端微信openid
			'h5-weixin': dbCmd.rename('wx_openid.h5'), // 微信公众号端微信openid
			'h5-web': dbCmd.rename('wx_openid.web') // web端微信openid
		},
		qq_openid: {
			'app-plus': dbCmd.rename('qq_openid.app'), // app端QQ openid
			'mp-qq': dbCmd.rename('qq_openid.mp') // 小程序端QQ openid
		}
	})
	return {}
};

```

## URL化请求鉴权签名@http-reqeust-auth

> `uni-id-co@1.1.10`及以上版本支持使用`uni-cloud-s2s`进行请求签名验证，`uni-cloud-s2s`使用方式[详见](/uniCloud/uni-cloud-s2s.md)
> 
> `uni-id-co`请求鉴权签名与`uni-cloud-s2s`不能同时存在，如果存在`uni-cloud-s2s`，则会优先使用`uni-cloud-s2s`进行请求签名验证

uni-id-co 在URL化请求时，会对以下 API 进行调用鉴权验证，
在调用 API 时，开发者需要使用请求鉴权密钥（详见[配置文件](/uniCloud/uni-id-summary.md#config)）`requestAuthSecret`按照 uni-id 的约定方式对请求中的关键数据进行签名值计算，
并将签名值添加到Header请求头的 `uni-id-signature` 参数中传给 uni-id 进行签名验证，uni-id 会对接收到数据进行签名值计算，
并与接收到的请求签名值进行比对，如果签名值不一致，则视为无效签名，将拒绝本次请求。

需要进行签名的API列表
|API|
|---|
|externalRegister|
|externalLogin|

### 请求头公共参数

|参数名称|类型|是否必须|描述|
|---|---|---|---|
|uni-id-nonce|string|是|随机字符串|
|uni-id-timestamp|string|是|当前时间戳; 单位毫秒|
|uni-id-signature|string|是|请求鉴权签名; 签名算法见下|

### 鉴权签名算法

如下为某请求体参数，介绍如何进行签名：
```json
{
	"clientInfo": {
		"appId": "__test__"
	},
	"uniIdToken": "xxxxxx",
	"params": {
		"foo": 1,
		"bar": 2,
		"foo_bar": 3,
		"foobar": 4
	}
}
```

1. 将API请求参数（只包括请求体(body)中的`params`参数，但除去array与object类型的参数），根据参数名称的ASCII码表的顺序排序。如：`foo:1, bar:2, foo_bar:3, foobar:4`排序后的顺序是 `bar:2, foo:1, foo_bar:3, foobar:4`
2. 将排序好的参数名和参数值按照 `key1=value1&key2=value2` 格式拼装在一起，根据上面的示例得到的结果为：`bar=2&foo=1&foo_bar=3&foobar=4`
3. 把拼装好的字符串采用utf-8编码，开发者使用请求鉴权密钥与随机串对时间戳与待签名字符串进行 HmacSHA256 加密处理，计算得出请求签名值,如：`HmacSHA256(timestamp + bar=2&foo=1&foo_bar=3&foobar=4, requestAuthSecret + nonce)`
4. 将加密得到的二进制结果使用十六进制表示，值必须为大写，如：`Hex.stringify(Utf8.parse("helloworld")) = "68656C6C6F776F726C64"`

### 签名值计算示例

#### Nodejs
```javascript
const crypto = require('crypto')

class Sign {
	constructor (requestAuthSecret) {
		this.requestAuthSecret = requestAuthSecret
	}

	getSignature (params, nonce, timestamp) {
		const paramsStr = this.getParamsString(params)
		const signature = crypto.createHmac('sha256', `${requestAuthSecret}${nonce}`).update(`${timestamp}${paramsStr}`).digest('hex')

		return signature.toUpperCase()
	}

	getParamsString (params) {
		return Object.keys(params)
				.sort()
				.filter(item => typeof params[item] !== "object")
				.map(item => `${item}=${params[item]}`)
				.join('&')
	}
}

const requestAuthSecret = "testSecret"
const nonce = Math.random().toString(36).substring(2)
const timestamp = Date.now()

const params = {
	foo: 1,
	bar: 2,
	foo_bar: 3,
	foobar: 4
}

const sign = new Sign(requestAuthSecret)
const signature = sign.getSignature(params, nonce, timestamp)

console.log("nonce: ", nonce)
console.log("timestamp: ", timestamp)
console.log("signature: ", signature)
```
#### PHP
```php
<?php

class Sign {
    private $requestAuthSecret;

    public function __construct ($requestAuthSecret) {
        $this->requestAuthSecret = $requestAuthSecret;
    }

    public function getSignature ($params, $nonce, $timestamp) {
        $paramsStr = $this->getParamsString($params);
        $signature = hash_hmac('sha256', ((string)$timestamp . $paramsStr), ($this->requestAuthSecret . $nonce));

        return strtoupper($signature);
    }
    
    private function getParamsString ($params) {
        ksort($params);

        $paramsStr = [];
        foreach($params as $key=>$value){
            if (gettype($value) == "array" || gettype($value) == "object") {
                continue;
            }

            array_push($paramsStr, $key . '=' . $value);
        }
        
        return join('&', $paramsStr);
    }
}

$requestAuthSecret = "testSecret";
$nonce = sprintf("%d", rand());
$timestamp = time() * 1000;

$params = [
    "foo" => 1,
    "bar" => 2,
    "foobar" => 4,
    "foo_bar" => 3,
];

$sign = new Sign($requestAuthSecret);
$signature = $sign->getSignature($params, $nonce, $timestamp);

print_r("nonce: " . $nonce . PHP_EOL);
print_r("timestamp: " . $timestamp . PHP_EOL);
print_r("signature: " . $signature);

```

#### Python
```python
import hmac
import hashlib
import time

class Sign:
  def __init__(self, requestAuthSecret):
        self.requestAuthSecret = requestAuthSecret

  def get_signature (self, params, nonce, timestamp):
    params_str = self.get_params_string(params)
    signature = hmac.new(bytes("%s%s" % (self.requestAuthSecret, nonce), 'utf-8'), bytes("%s%s" % (timestamp, params_str), 'utf-8'), digestmod = hashlib.sha256).hexdigest().upper()
    
    return signature
  
  def get_params_string(self, params):
    params_str = []
    for k in sorted(params):
      if isinstance(params[k], (list, dict)):
        continue 
      params_str.append("%s=%s" % (k, params[k]))
      
    return "&".join(params_str)

if __name__ == "__main__":   
  requestAuthSecret = "testSecret"
  nonce = "xxxxxxx"
  timestamp = int(round(time.time() * 1000))

  params = {
    "foo": 1,
    "bar": 2,
    "foobar": 4,
    "foo_bar": 3,
  }

  sign = Sign(requestAuthSecret)
  signature = sign.get_signature(params, nonce, timestamp)

  print(nonce, timestamp, signature)
```

#### Go
```go
package main

import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"sort"
	"strconv"
	"strings"
	"time"
)

type Sign struct {
	requestAuthSecret string
}

func (sign Sign) getSignature(params map[string]string, nonce string, timestamp int64) string {
	paramsStr := sign.getParamsString(params)

	mac := hmac.New(sha256.New, []byte(sign.requestAuthSecret+nonce))
	mac.Write([]byte(strconv.Itoa(int(timestamp)) + paramsStr))
	hexSignature := mac.Sum(nil)
	signature := hex.EncodeToString(hexSignature)

	return strings.ToUpper(signature)
}

func (sign Sign) getParamsString(params map[string]string) string {
	keys := make([]string, 0, len(params))
	for k := range params {
		keys = append(keys, k)
	}

	sort.Strings(keys)

	var paramsStr string = ""
	i := 0
	for _, k := range keys {
		v := params[k]
		if i != 0 {
			paramsStr += "&"
		}
		paramsStr += k
		paramsStr += "="
		paramsStr += v
		i++
	}

	return paramsStr
}

func main() {
	requestAuthSecret := "testSecret"
	nonce := "xxxxxxx"
	timestamp := time.Now().UnixMilli()

	params := map[string]string{
		"foo":     "1",
		"bar":     "2",
		"foo_bar": "3",
		"foobar":  "4",
	}

	sign := Sign{
		requestAuthSecret: requestAuthSecret,
	}
	signature := sign.getSignature(params, nonce, timestamp)

	result := fmt.Sprintf("nonce: %s, timestamp: %d, signature: %s", nonce, timestamp, signature)

	fmt.Println(result)
}

```

#### Java
```java
import java.util.HashMap;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.util.Arrays;
import java.util.Map;

public class Sign {
    static String requestAuthSecret = "testSecret";

    public static void main(String[] args) {
        String nonce = "xxxxxx";
        long timestamp = System.currentTimeMillis();

        Map<String, String> params = new HashMap<String, String>();

        params.put("foo", "1");
        params.put("bar", "2");
        params.put("foo_bar", "4");
        params.put("foobar", "3");

        String signature = getSignature(params, nonce, timestamp);

        System.out.println("nonce: " + nonce);
        System.out.println("timestamp: " + timestamp);
        System.out.println("signature: " + signature);
    }

    public static String getSignature (Map<String, String> params, String nonce, long timestamp) {
        String paramsStr = getParamsString(params);
        String algorithm = "HmacSHA256";
        Mac hmacSha256;
        String digestHexString = null;

        try {
            hmacSha256 = Mac.getInstance(algorithm);
           
            String key = new StringBuilder().append(requestAuthSecret).append(nonce).toString();
            String message = new StringBuilder().append(Long.toString(timestamp)).append(paramsStr).toString();

            byte[] keyBytes = key.getBytes("utf-8");
            byte[] messageBytes = message.getBytes("utf-8");
            
            hmacSha256.init(new SecretKeySpec(keyBytes, 0, keyBytes.length, algorithm));
            byte[] digestBytes = hmacSha256.doFinal(messageBytes);

            digestHexString = byteArrayToHexString(digestBytes);
        } catch (Exception e) {
            System.out.println("[ERROR] not supposed to happen: " + e.getMessage());
        }

        return digestHexString.toUpperCase();
    }

    private static String getParamsString (Map<String, String> params) {

        String[] keys = params.keySet().toArray(new String[0]);
        Arrays.sort(keys);

        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < keys.length; i ++) {
            String key = keys[i];

            if (i != 0) {
                sb.append("&");
            }
            
            sb.append(key).append("=").append(params.get(key));
        }

        return sb.toString();
    }

    private static String byteArrayToHexString(byte[] b) {
        StringBuilder hs = new StringBuilder();
        String stmp;
        for (int n = 0; b!=null && n < b.length; n++) {
            stmp = Integer.toHexString(b[n] & 0XFF);
            if (stmp.length() == 1)
                hs.append('0');
            hs.append(stmp);
        }
        return hs.toString();
    }
}
```
