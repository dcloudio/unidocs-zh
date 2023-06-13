# 概述

`uni-id-pages`，是`uni-id`体系的一部分。

它基于`uni-id-common`提供了一批现成的、开源的、登录注册账户管理相关的前端页面和云端云对象。

它是一个云端一体页面组的[uni_modules](https://uniapp.dcloud.net.cn/plugin/uni_modules.html)，含前端页面和后端云对象（uni-id-co）。

开发者在项目中引入`uni-id-pages`，账户管理的功能无需自己再开发。由于源码的开放性和层次结构清晰，有二次开发需求也很方便调整。

下载地址：[https://ext.dcloud.net.cn/plugin?name=uni-id-pages](https://ext.dcloud.net.cn/plugin?name=uni-id-pages)

`uni-id-pages`的功能包括：

- 注册账号：
	+ 用户名和密码
- 免密登录（首次登录自动注册）：
	+ [app一键登录](https://uniapp.dcloud.io/univerify.html)
	+ 短信验证码登录
	+ 微信登录（自动获取头像和昵称）
	+ 苹果登录
	+ 支付宝小程序登录（暂未实现）
- 密码登录
	+ 用户名/手机号和密码登录
- 账户管理
	+ 个人中心
	+ 头像更换
	+ 修改昵称
	+ 绑定手机号码
		* App端支持：[一键绑定](https://uniapp.dcloud.io/univerify.html)
		* 微信小程序端支持：[获取微信绑定的手机号](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/getPhoneNumber.html)
		* 全端支持：短信验证码校验
	+ 修改密码（仅账号有设置密码时可见）
	+ 找回密码（仅账号有绑定手机号码可见）
	+ 退出登录
	+ 注销账号（上架国内App应用市场必备）
- 用户服务协议和隐私政策条款授权


## 目录结构
<pre v-pre="" data-lang="">
<code class="lang-" style="padding:0">
├─uni_modules                                         存放[uni_module](/uni_modules)规范的插件。
│    ├─其他module
│    └─uni-id-pages
│        ├─uniCloud
│        │    └─cloudfunctions                        云函数目录
│        │        └─uni-id-co                         集成调用uni-id方法的云对象
│        │            ├─common                        公用逻辑
│        │            ├─config                        配置
│        │            │  └─permission.js              调用接口所需的权限配置
│        │            ├─lang                          国际化目录
│        │            ├─lib                           基础功能，不建议修改此目录下文件
│        │            │  ├─third-party                三方平台接口
│        │            │  └─utils                      基础功能
│        │            ├─middleware                    中间件
│        │            └─module                        分模块存放的云对象方法
│        ├─common
│        │    ├─login-page.scss                       登录页面公共样式
│        │    ├─login-page.mixin.js                   登录页面公共mixin文件
│        │    └─loginSuccess.js                       登录成功后执行的文件
│        ├─components
│        │    ├─cloud-image                           uniCloud云存储图片解析组件
│        │    │    └─cloud-image.vue
│        │    ├─uni-id-pages-agreements               同意用户服务协议&隐私政策条款组件
│        │    │    └─uni-id-pages-agreements.vue
│        │    ├─uni-id-pages-avatar                   用户头像组件
│        │    │    └─uni-id-pages-avatar.vue
│        │    ├─uni-id-pages-bind-mobile              通过微信获取手机号码绑定个人资料
│        │    │    └─uni-id-pages-bind-mobile.vue
│        │    ├─uni-id-pages-email-form               邮箱验证码组件
│        │    │    └─uni-id-pages-email-form.vue
│        │    ├─uni-id-pages-fab-login                悬浮的切换登录方式组件
│        │    │    └─uni-id-pages-fab-login.vue
│        │    ├─uni-id-pages-sms-form                 获取短信验证码组件
│        │    │    └─uni-id-pages-sms-form.vue
│        │    └─uni-id-pages-user-profile             获取用户信息组件
│        │        └─uni-id-pages-user-profile.vue
│        ├─pages
│        │    ├─common
│        │    │    └─webview                          用于实现应用内浏览或打开《用户协议和隐私协议》URL链接页面
│        │    │        └─webview.vue
│        │    ├─login                        
│        │    │    ├─login-smscode.vue                短信验证码登录
│        │    │    ├─login-withoutpwd.vue             免密码登录
│        │    │    └─login-withpwd.vue                密码登录
│        │    ├─register                    
│        │    │    ├─register.vue                     通过用户名密码注册账号
│        │    │    ├─register-admin.vue               创建超级管理员
│        │    │    ├─register-by-email.vue            通过邮箱验证码注册账号
│        │    │    └─validator.js                     注册账号页的表单验证规则文件
│        │    ├─retrieve                              
│        │    │    ├─retrieve-by-email.vue            通过邮箱验证码重置密码
│        │    │    └─retrieve.vue					            通过手机验证码重置密码
│        │    └─userinfo
│        │        ├─bind-mobile.vue                   绑定手机号码
│        │        ├─change_pwd.vue                    修改密码
│        │        ├─cropImage.vue                     裁剪图片
│        │        ├─deactivate.vue                    注销账号
│        │        ├─set-pwd.vue                       设置密码
│        │        └─userinfo.js                       注册账号页的表单验证规则文件
│        ├─static                                     静态资源目录
│        ├─changelog.md                               更新日志
│        ├─config.js                                  uni-id-pages的配置文件
│        ├─init.js                                    初始化文件
│        ├─package.json                               包管理文件
│        └─readme.md                                  插件自述文件
</code>
</pre>
**完整的uni-app目录结构[详情查看](https://uniapp.dcloud.io/frame?id=%e7%9b%ae%e5%bd%95%e7%bb%93%e6%9e%84)

## 前端页面
### 初始化
需要在App.vue中初始化`uni-id-pages`的`init.js`文件

示例代码如下：
```js
<script>
	import uniIdPageInit from '@/uni_modules/uni-id-pages/init.js';
	export default {
	onLaunch: async function() {
	console.log('App Launch')
	await uniIdPageInit()
},
	onShow: function() {
	console.log('App Show')
},
	onHide: function() {
	console.log('App Hide')
}
}
</script>
```

### 配置@config
路径：`/uni_modules/uni-id-pages/config.js`

|字段		|类型	|描述											|
|--			|--		|--												|
|debug		|Boolean|调试模式[详情](#debug)							|
|loginTypes	|Array	|登录方式[详情](#loginTypes)						|
|agreements	|Array	|隐私政策[详情](#agreements)						|
|appid		|Object	|接入各类服务（如微信登录服务）的应用id[详情](#appid)	|
|passwordStrength	|Object	|密码配置	[详情](#strength)	|
|setPasswordAfterLogin|Boolean/Object|登录后设置密码 [详情](#set-pwd-after-login)|

完整示例：
```js
export default {
	//调试模式
	"debug":true,
	/*
		登录类型 未列举到的或运行环境不支持的，将被自动隐藏。
		如果需要在不同平台有不同的配置，直接用条件编译即可
	*/
	"loginTypes": [
		"univerify",
		"weixin",
		"username",
		"apple",
		"smsCode"
	],
	//政策协议
	"agreements": {
		"serviceUrl": "https://xxx", //用户服务协议链接
		"privacyUrl": "https://xxx", //隐私政策条款链接
		// 哪些场景下显示，1.注册（包括注册并登录，如：微信登录、苹果登录、短信验证码登录）、2.登录（如：用户名密码登录）
		"scope": ['register', 'login']
	},
	// 提供各类服务接入（如微信登录服务）的应用id
	"appid":{
		"weixin":{
			// 微信公众号的appid，来源:登录微信公众号（https://mp.weixin.qq.com）-> 设置与开发 -> 基本配置 -> 公众号开发信息 -> AppID
			"h5":"wx111111111111111",
			// 微信开放平台的appid，来源:登录微信开放平台（https://open.weixin.qq.com） -> 管理中心 -> 网站应用 -> 选择对应的应用名称，点击查看 -> AppID
			"web":"wx22222222222222"
		}
	},
	/**
	 * 密码强度
	 * super（超强：密码必须包含大小写字母、数字和特殊符号，长度范围：8-16位之间）
	 * strong（强: 密密码必须包含字母、数字和特殊符号，长度范围：8-16位之间）
	 * medium (中：密码必须为字母、数字和特殊符号任意两种的组合，长度范围：8-16位之间)
	 * weak（弱：密码必须包含字母和数字，长度范围：6-16位之间）
	 * 为空或false则不验证密码强度
	 */
	"passwordStrength":"medium",
	/**
	 * 登录后允许用户设置密码（只针对未设置密码得用户）
	 * 开启此功能将 setPasswordAfterLogin 设置为 true 即可
	 * "setPasswordAfterLogin": false
	 *
	 * 如果允许用户跳过设置密码 将 allowSkip 设置为 true
	 * "setPasswordAfterLogin": {
	 *   "allowSkip": true
	 * }
	 * */
	"setPasswordAfterLogin": false
}
```

#### 调试模式@debug
debug模式下，启动应用会自动发起一次网络请求（调用`uni-id-co`的`getSupportedLoginType`）。

检查：uni-id-pages客户端配置的登录方式，是否未在uniCloud服务端配置正确，否则抛出异常。

#### 登录方式@loginTypes
|字段		|描述|平台差异|
|--			|--	|--	|
|univerify	|[一键登录](https://uniapp.dcloud.io/univerify.html)	|App 3.0.0+|
|smsCode	|短信验证码登录			||
|weixin		|微信登录	|App，微信小程序，Web（uni-id-pages 版本号1.0.8起支持） |
|apple		|苹果登录[Apple登录](https://uniapp.dcloud.io/tutorial/app-oauth-apple)	| iOS13+支持，App 2.4.7+|
|username	|用户名密码登录				||

##### 配置示例
```js
export default {
	"loginTypes": ["username","smsCode"]
}
```
如上示例配置，表示启用：账号密码登录、验证码登录。

同理配置为：
```js
export default {
	"loginTypes": ["weixin","username","smsCode"]
}
```
则表示启用：微信登录、验证码登录、账号密码登录。

平台差异性配置:如果你希望在不同的平台有不同的登录方式，直接使用[条件编译](https://uniapp.dcloud.io/platform?id=%e6%9d%a1%e4%bb%b6%e7%bc%96%e8%af%91)即可。如下配置，即表示仅在APP端启用`短信验证码登录`
```js
export default {
	"loginTypes": [
		"username","univerify","weixin","apple"
		// #ifdef APP-PLUS
		,"smsCode"
		// #endif
	]
}
```

**注意：** iOS 的 AppStore 规则：应用若支持三方社交登录服务（如:一键登录、微信登录等），则必须同时向用户提供“以苹果账号登录”的选项。即：如果你的应用不支持三方登录，那么可以不带上苹果登录，如果你的应用支持三方登录，那必须同时把苹果登录也带上。

以上配置仅开启前端登录入口，实现功能还需：
1. 开通对应登录方式服务，获得服务密钥，并在服务端`uni-id`模块的配置文件中完成配置。详情查看：[登录服务开通与配置](#登录服务开通与配置)
2. 如果是APP端，`一键登录`、`微信登录`、`苹果登录`，需要在`manifest.json`中勾选对应模块（微信登录必须配置：微信开发平台申请应用appID的值），并完成打包后才可用（自定义调试基座包和正式包均可）。

#### 隐私政策@agreements
|字段		|类型	|描述					|
|--			|--		|--						|
|serviceUrl	|String	| 用户服务协议网络链接	|
|privacyUrl	|String	| 隐私政策网络链接		|
|scope		|Object	| 作用于哪些场景		|

**scope 说明：**

|字段		|类型	|描述													|
|--			|--		|--														|
|register	|String	|注册（包括注册并登录，如：微信登录、苹果登录、短信验证码登录）	|
|login		|String	|登录（如：用户名密码登录）									|

一款规范的小程序或App要上架到国内应用商店必须提供《隐私政策和用户使用协议》，参考模版：[隐私权政策模板.zip](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/%E9%9A%90%E7%A7%81%E6%9D%83%E6%94%BF%E7%AD%96%E6%A8%A1%E6%9D%BF.zip)

更多合规问题[详情参考](https://uniapp.dcloud.io/tutorial/android-store.html#app%E5%9B%A0%E5%90%88%E8%A7%84%E9%97%AE%E9%A2%98%E6%97%A0%E6%B3%95%E4%B8%8A%E6%9E%B6)

推荐使用：HBuilderX编辑器，以markdown文档格式编辑《隐私政策和用户使用协议》，通过在文档中鼠标右键[一键分享](https://hx.dcloud.net.cn/Tutorial/extension/markdown_share)上传到[前端网页托管](hosting.md)获得链接

#### 接入各类服务（如微信登录服务）的应用id@appid

|字段	|类型	|描述|
|--		|--		|--	|
|weixin	|Object	|微信|
|&nbsp;&#124;-&nbsp;h5	|String	|微信公众号的appid</br>来源：[微信公众号](https://mp.weixin.qq.com)-> 设置与开发 -> 基本配置 -> 公众号开发信息 -> AppID|
|&nbsp;&#124;-&nbsp;web	|String	|微信开放平台的appid</br>来源：[微信开放平台](https://open.weixin.qq.com) -> 管理中心 -> 网站应用 -> 选择对应的应用名称，点击查看 -> AppID|

#### 密码强度@strength

|字段		|类型	|描述														|
|--			|--		|--															|
|为空或false| -		|不验证密码强度												|
|super		|String	|超强：密码必须包含大小写字母、数字和特殊符号，长度范围：8-16位之间	|
|strong		|String	|强: 密密码必须包含字母、数字和特殊符号，长度范围：8-16位之间		|
|medium		|String	|中：密码必须为字母、数字和特殊符号任意两种的组合，长度范围：8-16位之间|
|weak		|String	|弱：密码必须包含字母和数字，长度范围：6-16位之间					|

#### 登录后设置密码@set-pwd-after-login

用户如果没有设置密码，在登录后会跳转设置密码页面

此功能默认不开启, 开启请将 `setPasswordAfterLogin` 设置为 `true`，如下：
```javascript
{
	setPasswordAfterLogin: true,
	// setPasswordAfterLogin: {
	// 	allowSkip: false
	// }
}
```

如果不需要强制设置密码可以将 `allowSkip` 设置为 `true` 用户可以选择跳过设置密码。

### 页面介绍
`uni-id-pages`包含：账号注册、免密登录、头像更换、修改昵称、绑定手机号码、找回密码、注销账号等页面。[插件地址](https://ext.dcloud.net.cn/plugin?name=uni-id-pages)

项目中常有打开登录页面的需求，这里对登录页面展开介绍；包括两类登录方式：
- 密码登录（账号密码登录），页面路径: `/uni_modules/uni-id-pages/pages/login/login-withpwd`
- 免密登录（一键登录，短信验证码登录，微信登录，苹果登录），页面路径: `/uni_modules/uni-id-pages/pages/login/login-withoutpwd`

执行`uni.navigateTo`打开登录页面，会默认使用配置中`loginTypes`值的第一项为登录方式。

例如`loginTypes`：`["weixin","apple","univerify"]`会以`weixin`，即`微信登录`为默认登录方式

`uni-id-pages`支持通过传递参数`type`，指定登录方式。例如：指定苹果登录，使用如下代码即可
```js
uni.navigateTo({
	"url":"/uni_modules/uni-id-pages/pages/login/login-withoutpwd?type=apple"
})
```

可以配套使用[uniIdRouter](uni-id-summary.md#uni-id-router)；当用户未登录，但访问了需强制登录的页面，或接口提示token无效或过期（响应体以TOKEN_INVALID开头）时均需要打开登录页面。你需要把以上两个路径路径定义为`loginPage`。

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

|参数名		|类型	|必填	|说明					|
|--			|--		|--		|--						|
|mobile		|string	|是		|手机号					|
|code		|string	|是		|短信验证码				|
|captcha	|string	|否		|图形验证码				|
|inviteCode	|string	|否		|邀请码，仅注册时生效	|

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
| username			   | string							       | 是		 | 用户名																										                 |
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
- 使用本功能需要在[DCloud开发者中心 -> 短信验证码](https://dev.dcloud.net.cn/pages/sms/base)开通并充值
- 教程参考[短信服务开通指南](https://ask.dcloud.net.cn/article/37534)
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
