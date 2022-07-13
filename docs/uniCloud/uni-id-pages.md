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


# 目录结构  
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
│        │    │    ├─register.vue                     注册账号页
│        │    │    └─validator.js                     注册账号页的表单验证规则文件
│        │    ├─retrieve                              重置密码
│        │    │    └─retrieve.vue
│        │    └─userinfo
│        │        ├─bind-mobile.vue                   绑定手机号码
│        │        ├─change_pwd.vue                    修改密码
│        │        ├─cropImage.vue                     裁剪图片
│        │        ├─deactivate.vue                    注销账号
│        │        └─userinfo.js                       注册账号页的表单验证规则文件
│        ├─static                                     静态资源目录
│        ├─changelog.md                               更新日志
│        ├─config.js                                  uni-id-pages的配置文件
│        ├─init.js                                    初始化文件
│        ├─package.json                               包管理文件
│        └─readme.md                                  插件自述文件
</code>
</pre>
完整的uni-app目录结构[详情查看](https://uniapp.dcloud.io/frame?id=%e7%9b%ae%e5%bd%95%e7%bb%93%e6%9e%84)

# 前端页面
## 初始化
你需要在App.vue中初始化`uni-id-pages`的`init.js`文件  
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

## 配置@config
路径：`/uni_modules/uni-id-pages/config.js`

|字段	|类型	|描述		|
|--			|--		|--			|
|debug		|Boolean|调试模式	|
|loginTypes	|Array	|登录方式	|
|agreements	|Array	|隐私政策	|

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
	}	
}
```


#### 调试模式@debug
debug模式下，启动应用会自动发起一次网络请求（调用`uni-id-co`的`getSupportedLoginType`），
检查：uni-id-pages客户端配置的登录方式，是否未在uniCloud服务端配置正确，否则抛出异常。

#### 登录方式@loginTypes
|字段		|描述|平台差异|
|--			|--	|--	|
|univerify	|[一键登录](https://uniapp.dcloud.io/univerify.html)	|App 3.0.0+|
|smsCode	|短信验证码登录			||
|weixin		|微信登录	|App，微信小程序 |
|apple		|苹果登录[Apple登录](https://ask.dcloud.net.cn/article/36651)	| iOS13+支持，App 2.4.7+|
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

###### 平台差异性配置
如果你希望在不同的平台有不同的登录方式，直接使用[条件编译](https://uniapp.dcloud.io/platform?id=%e6%9d%a1%e4%bb%b6%e7%bc%96%e8%af%91)即可。
如下配置，即表示仅在APP端启用`短信验证码登录`
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

**注意：** iOS的App Store应用规则：应用若支持三方社交登录服务（如:一键登录、微信登录等），则必须同时向用户提供“以苹果账号登录”的选项。即：如果你的应用不支持三方登录，那么可以不带上苹果登录，如果你的应用支持三方登录，那必须同时把苹果登录也带上。

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

一款规范的小程序或要上架到国内应用商店app必须提供《隐私政策和用户使用协议》，参考模版：[隐私权政策模板.zip](https://ask.dcloud.net.cn/file/download/file_name-6ZqQ56eB5p2D5pS/562W5qih5p2/LnppcA==__url-Ly9pbWctY2RuLXRjLmRjbG91ZC5uZXQuY24vdXBsb2Fkcy9hcnRpY2xlLzIwMjAwMjE0LzUyMDRmMWU2Y2Q3NjcwZWE0YTJjMjBmZGRhMTBhMDdh)

更多合规问题[详情参考](https://uniapp.dcloud.io/tutorial/android-store.html#app%E5%9B%A0%E5%90%88%E8%A7%84%E9%97%AE%E9%A2%98%E6%97%A0%E6%B3%95%E4%B8%8A%E6%9E%B6)

推荐使用：HBuilderX编辑器，以markdown文档格式编辑《隐私政策和用户使用协议》，通过在文档中鼠标右键[一键分享](https://ask.dcloud.net.cn/article/37573)上传到[前端网页托管](https://uniapp.dcloud.io/uniCloud/hosting.html#%E7%AE%80%E4%BB%8B)获得链接

## 页面介绍
`uni-id-pages`包含：账号注册、免密登录、头像更换、修改昵称、绑定手机号码、找回密码、注销账号等页面。[详情查看](https://ext.dcloud.net.cn/plugin?name=uni-id-pages)
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

可以配套使用[uniIdRouter](uniCloud/uni-id.md?id=uni-id-router)；当用户未登录，但访问了需强制登录的页面，或接口提示token无效或过期（响应体以TOKEN_INVALID开头）时均需要打开登录页面。你需要把以上两个路径路径定义为`loginPage`。

# 云对象（uni-id-co）

uni-id-co是uni-id-pages的核心云对象，包含了诸多用户相关的接口。作为uni-id体系的一部分，uni-id-co也使用uni-id的配置文件（`cloudfunctions/common/uni-config-center/uni-id/config.json`）。

前端调用云对象`uni-id-co`内的方法前应先获取云对象的引用，代码如下

```js
const uniIdCo = uniCloud.importObject('uni-id-co')
```

## 目录说明

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

## 公共响应参数@co-public-response

`uni-id-co`所有api返回值均满足[uniCloud响应体规范](uniCloud/cf-functions?id=resformat)

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

## API列表

|API							|描述														|
|--								|--															|
|uniIdCo.registerAdmin()		|注册管理员 [详情](#register-admin)							|
|uniIdCo.addUser()				|新增用户 [详情](#add-user)									|
|uniIdCo.authorizeAppLogin()	|授权用户登录应用 [详情](#authorize-app-login)				|
|uniIdCo.removeAuthorizedApp()	|移除用户登录授权 [详情](#remove-authorized-app)			|
|uniIdCo.setAuthorizedApp()		|设置用户允许登录的应用列表 [详情](#set-authorized-app)		|
|uniIdCo.registerUser()			|注册普通用户 [详情](#register-user)						|
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
|uniIdCo.closeAccount()			|注销账户 [详情](#close-account)							|
|uniIdCo.getAccountInfo()		|获取账户账户简略信息 [详情](#get-account-info)				|
|uniIdCo.createCaptcha()		|创建图形验证码 [详情](#create-captcha)						|
|uniIdCo.refreshCaptcha()		|刷新图形验证码 [详情](#refresh-captcha)					|
|uniIdCo.sendSmsCode()			|发送短信验证码 [详情](#send-sms-code)						|
|uniIdCo.refreshToken()			|刷新token [详情](#refresh-token)							|
|uniIdCo.acceptInvite()			|接受邀请 [详情](#accept-invite)							|
|uniIdCo.getInvitedUser()		|获取受邀用户 [详情](#get-invited-user)						|
|uniIdCo.setPushCid()			|更新device表的push_clien_id [详情](#set-push-cid)			|
|uniIdCo.getSupportedLoginType()|获取支持的登录方式 [详情](#get-supported-login-type)		|

### 注册登录和登出@register-login-logout

#### 注册超级管理员@register-admin

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

#### 密码登录@login

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

#### 一键登录@login-by-univerify

手机号已存在时登录，否则注册

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

#### QQ登录@login-by-qq

QQ账号已存在时登录，否则注册

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

#### 支付宝登录@login-by-alipay

支付宝账号已存在时登录，否则注册

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

**接口形式**

```js
await uniIdCo.getSupportedLoginType({
  appId,
  platform
})
```

**参数说明**

|参数名		|类型	|必填	|说明												|
|--			|--		|--		|--													|
|appId		|string	|否		|要查询登录方式的应用DCloud AppId，不传时为当前应用	|
|platform	|string	|否		|要查询登录方式的应用平台，不传时为当前平台			|

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

使用此接口时务必注意，微信小程序的规则是客户端应先使用checkSession接口检测上次获取的sessionKey是否仍有效。如果有效则直接使用上次存储的sessionKey即可，如果无效应重新调用login接口再次刷新sessionKey。微信小程序登录，绑定小程序微信账号时会自动更新用户表的sessionKey。

**接口形式**

```js
await uniIdCo.bindMobileByMpWeixin({
  encryptedData,
  iv
})
```

**参数说明**

|参数名			|类型	|必填	|说明										|
|--				|--		|--		|--											|
|encryptedData	|string	|是		|微信小程序获取手机号返回的encryptedData参数|
|iv				|string	|是		|微信小程序获取手机号返回的iv参数			|

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

#### 绑定QQ@bind-qq

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

### 用户信息@user-info

#### 修改密码@update-pwd

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

#### 获取账户简略信息@get-account-info


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


### 安全验证@verifier

#### 创建图形验证码@create-captcha

**接口形式**

```js
await uniIdCo.createCaptcha({
  scene
})
```

**参数说明**

|参数名	|类型	|必填	|说明														|
|--		|--		|--		|--															|
|scene	|string	|是		|图形验证码使用场景，参考：[图形验证码场景](#captcha-scene)	|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|

#### 刷新图形验证码@refresh-captcha

**接口形式**

```js
await uniIdCo.refreshCaptcha({
  scene
})
```

**参数说明**

|参数名	|类型	|必填	|说明														|
|--		|--		|--		|--															|
|scene	|string	|是		|图形验证码使用场景，参考：[图形验证码场景](#captcha-scene)	|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|

#### 发送短信@send-sms-code

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
|scene	|string	|是		|短信类型，参考：[短信类型](#sms-scene)	|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|

### 其他用户端接口@utils

#### 刷新token@refresh-token

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

### 管理接口@admin

#### 管理员新增用户@add-user

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

|参数名			|类型				|必填	|说明				|
|--				|--					|--		|--					|
|username		|string				|是		|用户名				|
|password		|string				|是		|密码				|
|authorizedApp	|Array&lt;string&gt;|否		|允许登录的app列表	|
|nickname		|string				|否		|昵称				|
|role			|Array&lt;string&gt;|否		|用户角色			|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息		|


#### 授权用户登录指定客户端@authorize-app-login

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


# 登录服务开通与配置
服务端`uni-id`的密钥信息统一在`uni-config-center`中配置，路径：`uni_modules/uni-config-center/uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json`
以下简称：`uni-id配置文件`，完整的配置信息[详情查看](https://uniapp.dcloud.io/uniCloud/uni-id.html#config)

## 一键登录
一键登录是运营商提供的、比短信验证码更方便、更安全、更便宜的方案。[详见](https://uniapp.dcloud.net.cn/univerify)。
- 使用本功能需要在[DCloud开发者中心 -> ](https://dev.dcloud.net.cn/uniLogin)开通并充值
- 模块配置：`manifest.json`-->`App模块配置` -->`OAuth（登录鉴权）`-->` 一键登录`，点击后面的`开通配置`，在随后打开的web界面中，同意协议，并点击充值按钮充值。如只是测试，可以只充值1元钱。如果你已经确定包名，则可以在web界面点击“添加应用”，提交审核。这个是正式打包必须的。真机运行可以跳过此环节。记住页面上展示的`apiKey`和`apiSecret`，下一步需要用到。
- uni-id配置：`uni-id配置文件` --> `service` --> `univerify`，填写`appid`、`apiKey`和 `apiSecret`。`appid`就是`manifest`里的`appid`。`apiKey`和`apiSecret`则是从上一步的web界面得来的。

## 微信登录
- APP端申请微信登录需要在**微信开放平台**申请移动应用，获得的appid和appsecret，用于微信登录。[微信开放平台](https://open.weixin.qq.com/)
- 微信 appid 申请步骤：[https://ask.dcloud.net.cn/article/208](https://ask.dcloud.net.cn/article/208)。
- iOS平台微信SDK配置通用链接：[https://uniapp.dcloud.io/api/plugins/universal-links.html](https://uniapp.dcloud.io/api/plugins/universal-links.html)。
- 模块配置：`manifest.json` --> `App模块配置` --> `OAuth（登录鉴权）` --> `勾选微信登录` --> 填写`appid`、`appsecret`、`ios平台通用链接`。
- uni-id配置：`uni-id配置文件` --> `app` --> `oauth` --> `weixin`，填写`appid`、`appsecret`
	
## 苹果登录集成指南
- 模块配置：`manifest.json` --> `App模块配置` --> OAuth（登录鉴权）勾选`苹果登录`，[IOS苹果授权登录参考文档](https://ask.dcloud.net.cn/article/36651)。如不发布到Appstore，不需要配置此项
- uni-id配置：`uni-id配置文件` --> `app` --> `oauth` --> `apple` 填写`bundleId`。
- 关联域配置：`manifest.json` --> `App常用其他设置` --> `iOS设置` --> `关联域(Associated Domains)` 填写配置  [参考教程](https://ask.dcloud.net.cn/article/36393)。如不发布到Appstore，不需要配置此项

## 短信验证码
为了方便开发调试，`uni-id-pages`未配置短信登录时，自动启动测试模式；直接使用：123456作为短信验证码即可。
- 使用本功能需要在[DCloud开发者中心 -> 短信验证码](https://dev.dcloud.net.cn/uniSms)开通并充值
- 教程参考[短信服务开通指南](https://ask.dcloud.net.cn/article/37534)
- 密钥配置：`uni-id配置文件` --> `service` --> `sms` 填写相关密钥信息。


# 从老版uni-id公共模块升级到uni-id-pages

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