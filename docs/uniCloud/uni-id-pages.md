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
- 免密登录（账号密码登录），页面路径: `/uni_modules/uni-id-pages/pages/login/login-withpwd`
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

uni-id-co是uni-id-pages的核心云对象，包含了诸多用户相关的接口。作为uni-id体系的一部分，uni-id-co也使用uni-id的配置文件（`cloudfunctions/common/uni-config-center/uni-id/config.json`）。详细API列表请参考下方说明

## uni-id-co的API列表@co-api

前端调用云对象`uni-id-co`内的方法前应先获取云对象的引用，代码如下

```js
const uniIdCo = uniCloud.importObject('uni-id-co')
```

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

## uni-id-common公共模块的API列表@api

自`uni-id 4.0.0`起uni-id公共模块内的大部分接口实现移至uni-id-co内，公共模块内仅保留token相关接口

一般开发者无需了解uni-id-common公共模块的API，直接使用[uni-id-pages]()即可（**需要补充链接**）。

如果想了解uni-id-common公共模块内部实现，可以阅读本章节。

### 基础功能@base

#### 创建uni-id实例@create-instance

用法：`uniID.createInstance(Object CreateInstanceParams);`

CreateInstanceParams内可以传入云函数context，也可以传入clientInfo参数，作用和context类似。方便在云对象内获取clientInfo后直接传入，[什么是云对象？](uniCloud/cloud-obj.md)。

```js
// 云函数代码，传入context
const uniID = require('uni-id-common')
exports.main = async function(event,context) {
  context.APPID = '__UNI__xxxxxxx' // 替换为当前客户端的APPID，通过客户端callFunction请求的场景可以使用context.APPID获取
  context.PLATFORM = 'h5' // 替换为当前客户端的平台类型，通过客户端callFunction请求的场景可以使用context.PLATFORM获取
  context.LOCALE = 'zh-Hans' // 替换为当前客户端的语言代码，通过客户端callFunction请求的场景可以使用context.LOCALE获取
  const uniIDIns = uniID.createInstance({ // 创建uni-id实例
    context: context,
    // config: {} // 完整uni-id配置信息，使用config.json进行配置时无需传此参数
  })
  payload = await uniIDIns.checkToken(event.uniIdToken) // 后续使用uniIDIns调用相关接口
  if (payload.code) {
  	return payload
  }
  const res = await uniIDIns.updateUser({
    uid: payload.uid,
    nickname: 'user nickname'
  })
  return res
}

// 云对象代码传入clientInfo
const uniID = require('uni-id-common')
module.exports = {
	_before() {
		const clientInfo = this.getClientInfo()
		this.uniID = uniID.createInstance({ // 创建uni-id实例，其上方法同uniID
			clientInfo
		})
	},
	login() {
		// ...
		// this.uniID.login()
	}
}
```

**为什么需要自行创建uni-id实例**

默认情况下uni-id-common某些接口会自动从全局context内获取客户端的PLATFORM（平台，如：app、h5、mp-weixin）等信息。

在单实例多并发的场景下可能无法正确获取（全局对象会被后面的请求覆盖，可能会导致前面一次请求使用了后面一次请求的PLATFORM信息）。因此推荐在开启云函数单实例多并发后，自行为uni-id传入context。

此外云函数url化时无法获取客户端信息，也需要使用这种方式将客户端信息传入uni-id。

#### token校验@checktoken

一个校验客户端发起请求（uniCloud.callFunction）自带的uniIdToken，获得用户的uid、token、token的过期时间、角色、权限、用户信息(uni-id-users全部字段)的API。

这是非常高频且重要的API通常用于换取操作当前云函数的用户Id。

##### 思考

如果你并没有服务端开发经验，可能会想：为什么需要通过token去换取用户Id，而不是让客户端直接传递用户Id更方便？
这里就涉及到安全问题，有一句话叫做：“前端传递的参数都是不可信任的”。比如：你去银行取款，柜台会要求出示你的身份证来证明你是谁，而不是你直接告诉银行柜台你是谁就管用。否则这是一个极大的安全漏洞。
综上所述：所有服务端操作涉及账户信息相关内容，都需要使用token来获得，而不是使用前端传递的参数。

用法：`uniID.checkToken(String token, Object checkTokenOptions)`

**参数说明**

| 字段							| 类型		| 必填	| 说明								|
| ---							| ---		| ---	| ---								|
| token							| String	| 是	|客户端callFunction带上的token		|
| options						| object	| 否	|checkToken方法的选项				|
| &nbsp;&#124;-&nbsp;autoRefresh| boolean	| 否	|是否需要自动判断刷新token，默认true	|

**说明**

- 角色内包含admin时返回的permission是一个空数组，因此判断一个用户是否有权限时应注意admin角色额外进行判断

请务必阅读一下此文档：[关于缓存角色权限的说明](uniCloud/uni-id.md?id=cache-permission-in-token)

**响应参数**

| 字段			| 类型				| 说明																								|
| ---			| ---				| ---																								|
| errCode		| Number&#124;String|错误码，0表示成功																					|
| message		| String			|详细信息																							|
| uid			| String			|用户Id，校验成功之后会返回																			|
| token			| String			|用户token快要过期时，新生成的token，只有在config内配置了`tokenExpiresThreshold`的值时才会有此行为	|
| tokenExpired	| TimeStamp			|新token的过期时间，单位毫秒																		|
| role			| Array				|-																									|
| permission	| Array				|用户权限列表。																						|

uni-id使用jwt生成token，jwt所生成的token包含三部分，其中存储的信息为明文信息，uni-id只根据tokenSecret来校验客户端token是否合法。


角色权限将被缓存在token中，此举能减少或消除checkToken的查库次数（有效节省费用、减少响应时间）

**注意：**

- 客户端会自动查找storage内的token在callFunction时插入
- HBuilderX 2.9.5+ 客户端允许开发者自行在callFunction时传入uniIdToken，此时不再从storage获取token
- HBuilderX 2.8.0版本起token存储在storage内推荐使用使用蛇形`uni_id_token`，会在一段时间内兼容驼峰形式`uniIdToken`

#### 主动刷新token@refresh-token

> 新增于uni-id 3.3.14

用法：`uniID.refreshToken(Object RefreshTokenParams);`

**参数说明**

| 字段| 类型	| 必填| 说明	|
| ---	| ---		| ---	| ---		|
| token	| String| 是	|用户token|

**示例**

```js
const {
  token,
  tokenExpired
} = await uniID.refreshToken({
  token: 'xxx'
})
```

**注意**

- 刷新token时会自动更新token内uid对应的角色权限

#### 生成token@createtoken

用法：`uniID.createToken(Object CreateTokenParams)`

**参数说明**

| 字段		| 类型	| 必填	| 说明					|
| ---		| ---	| ---	| ---					|
| uid		| String| 是	|用户Id					|
| role		| Array	| 否	|指定缓存在token内的角色|
| permission| Array	| 否	|指定缓存在角色内的权限	|

**响应参数**

| 字段				| 类型	| 必填| 说明										|
| ---					| ---		| ---	| ---											|
| token				| String| 是	|生成的token							|
| tokenExpired| Number| 是	|token过期时间对应的时间戳|

**说明**

- 创建token时如果未传角色权限会自动获取uid对应的角色权限

## uniIdRouter自动路由@uni-id-router

> 新增于 HBuilderX 3.5.0

开发者可以在项目的`pages.json`内配置需要登录的页面，登录页面路径等信息，uniCloud会自动在需要登录且客户端登录状态过期或未登录时跳转到登录页面。

结合以下代码及注释了解如何使用`uniIDRouter`

```json
{
	"pages": [
		{
			"path": "pages/index/index",
			"style": {
				"navigationBarTitleText": "uni-app"
			},
			"needLogin": false // 当前页面是否需要登录才可以访问，此配置优先级高于uniIDRouter下的needLogin
		}, {
			"path": "pages/list/list",
			"style": {
				"navigationBarTitleText": "uni-app"
			},
			"needLogin": false
		}, {
			"path": "pages/detail/detail",
			"style": {
				"navigationBarTitleText": "uni-app"
			}
		}
	],
	"globalStyle": {
		"navigationBarTextStyle": "black",
		"navigationBarTitleText": "uni-app",
		"navigationBarBackgroundColor": "#F8F8F8",
		"backgroundColor": "#F8F8F8"
	},
	"uniIDRouter": {
		"loginPage": "pages/index/index", // 登录页面路径
		"needLogin": [
			"pages/detail/.*" // 需要登录才可访问的页面列表，可以使用正则语法
		],
		"resToLogin": true // 自动解析云对象及clientDB的错误码，如果是客户端token不正确或token过期则自动跳转配置的登录页面，配置为false则关闭此行为，默认true
	}
}

```

与此功能对应的有两个uniCloud客户端api，`uniCloud.onNeedLogin()`和`uniCloud.offNeedLogin()`，开发者在监听onNeedLogin事件后，框架就不再自动跳转到登录页面，而是由开发者在onNeedLogin事件内自行处理。详情参考：[uniCloud.onNeedLogin](uniCloud/client-sdk.md?id=on-need-login)

**注意**

- pages.json内有`uniIDRouter`节点上述逻辑才会生效，自HBuilderX 3.5.0起创建空项目模板会自动配置空的`uniIDRouter`节点

## 错误码@errcode

|错误码									|错误信息								|说明													|
|----									|----									|----													|
|0（数字）								|成功									|-														|
|uni-id-token-expired					|登录状态失效，token已过期				|-														|
|uni-id-check-token-failed				|token校验未通过						|-														|
|uni-id-account-exists					|账户已存在								|-														|
|uni-id-account-not-exists				|账户不存在								|-														|
|uni-id-account-conflict				|用户账号冲突							|可能会由开发者手动更新数据库导致，正常情况下不应出现	|
|uni-id-account-banned					|此账号已封禁							|-														|
|uni-id-account-auditing				|此账号正在审核中						|-														|
|uni-id-account-audit-failed			|此账号审核失败							|-														|
|uni-id-account-closed					|此账号已注销							|-														|
|uni-id-captcha-required				|请输入图形验证码						|-														|
|uni-id-password-error					|用户名或密码错误						|-														|
|uni-id-invalid-username				|用户名不合法							|-														|
|uni-id-invalid-password				|密码不合法								|-														|
|uni-id-invalid-mobile					|手机号码不合法							|-														|
|uni-id-invalid-email					|邮箱不合法								|-														|
|uni-id-invalid-nickname				|昵称不合法								|-														|
|uni-id-invalid-param					|参数错误								|-														|
|uni-id-param-required					|缺少参数								|-														|
|uni-id-get-third-party-account-failed	|获取第三方账号失败						|-														|
|uni-id-get-third-party-user-info-failed|获取第三方用户信息失败					|-														|
|uni-id-mobile-verify-code-error		|手机验证码错误或已过期					|-														|
|uni-id-email-verify-code-error			|邮箱验证码错误或已过期					|-														|
|uni-id-admin-exists					|超级管理员已存在						|-														|
|uni-id-permission-error				|权限错误								|-														|
|uni-id-system-error					|系统错误								|-														|
|uni-id-set-invite-code-failed			|设置邀请码失败							|-														|
|uni-id-invalid-invite-code				|邀请码不可用							|-														|
|uni-id-change-inviter-forbidden		|禁止修改邀请人							|-														|
|uni-id-bind-conflict					|此账号（微信、QQ、手机号等）已被绑定	|-														|

## 多个应用复用相同uni-id-user表

有些系统由多个子应用组成，且没有各自独立服务空间，而是需要共享一个服务空间。此时就涉及一个问题，多个应用注册的账户都在uni-id-user表中，如何有效隔离。

比如一个打车软件，有乘客端、司机端、管理端，都要注册账户。它们也都有自己的DCloud appID（manifest.json里第一个配置）

uni-id-user表中有一个数组型字段`dcloud_appid`，可以存贮这个用户有权登录哪个应用。

比如乘客端的appid是`__uni_111111`，司机端appid是`__uni_222222`，那么2个appid都存入`dcloud_appid`，即表示这个用户有权登录这2个应用。

### 隔离不同应用的用户@isolate-user

uni-id 3.3.0版本起用户注册时会自动在用户表的记录内标记为注册应用对应的用户，如果没有单独授权登录其他应用的话则只能登录这个应用。即在乘客端应用注册的，默认只能在乘客端应用登录。

如何授权登录其他应用请参考：[授权、禁止用户在特定客户端应用登录](uniCloud/uni-id?id=authorize-app)

需要注意的是客户端APPID信息是由端上传上来的，并非完全可信，尽量在入口处进行校验。例：

```js
exports.main = async function(event, context){
  if(context.APPID !== '__UNI__xxx1') {
    throw new Error('应用ID非法')
  }
}
```

**DCloud Appid是一个很重要的配置，如无必要请勿随意更换。**

> 不同端用户数据通过用户表的dcloud_appid字段隔离，同一个手机号、微信号也可以同时注册管理端和用户端，绑定账号同理。

**注意**

- uni-id会自动在用户表每条用户记录插入`dcloud_appid`字段（此字段是一个数组，标识此用户可以在哪些端登录）。
- 为兼容旧版本产生的旧数据，针对没有dcloud_appid字段的用户，允许登录任意端。
- 如果用户数据库记录中`dcloud_appid`字段是一个空数组，表示当前用户不能在任何客户端登录
- 已有dcloud_appid的用户，如果使用相同的用户标识（用户名、邮箱、手机、微信等）+ 不同的DCloud Appid登录会被判定为不同的用户，如果此时数据库没有对应的记录，会报用户不存在的错误

### 隔离不同应用的配置@isolate-config

> `uni-id 3.3.0`及以上版本

uni-id的config.json支持配置为数组，每项都是一个完整的配置，对不同的配置使用`dcloudAppid`字段进行区分（**此字段与项目内的manifest.json里面的DCloud AppId一致**），uni-id会自动根据客户端的appid来判断该使用哪套配置。如果使用云函数url化请参考：[云函数Url化时使用](uniCloud/uni-id?id=url)

需要注意的是客户端APPID信息是由端上传上来的，并非完全可信，尽量在入口处进行校验。例：

```js
exports.main = async function(event, context){
  if(context.APPID !== '__UNI__xxx1') {
    throw new Error('应用ID非法')
  }
}
```

**示例**

> 数组每一项都是一个完整的配置文件，全部选项请参考：[uni-id 配置](uniCloud/uni-id?id=config)

**注意：如果允许同一账号在不同端使用相同的账号+密码登录需要将不同端的passwordSecret设置成一样的**

```js
[{
  "dcloudAppid": "__UNI__xxxx1", // 务必替换为对应项目manifest.json内的DCloud Appid
  "isDefaultConfig": true, // 默认配置标记，未匹配到dcloudAppid的情况下使用默认配置
  "passwordSecret": "passwordSecret-demo",
  "tokenSecret": "tokenSecret-demo",
  "tokenExpiresIn": 7200,
  "tokenExpiresThreshold": 600
}, {
  "dcloudAppid": "__UNI__xxxx2", // 务必替换为对应项目manifest.json内的DCloud Appid
  "passwordSecret": "passwordSecret-demo",
  "tokenSecret": "tokenSecret-demo",
  "tokenExpiresIn": 7200,
  "tokenExpiresThreshold": 600
}]
```


## 其他功能

### 裂变@fission

在`config.json`内配置了`autoSetInviteCode: true`则在用户注册时会自动给设置不重复的6位邀请码

在`config.json`内配置了`forceInviteCode: true`则只有使用邀请码才可以注册。

`uni-id-co`在会产生注册行为的接口均添加了inviteCode参数，用于传递邀请码使注册用户接受邀请

### 修改passwordSecret@modifysecret

**注意：通常情况下设定好passwordSecret之后不需要再进行修改，使用此功能时请务必小心谨慎**

**说明**

在config.json内修改passwordSecret会导致历史用户无法通过密码登录。但是某些情况下有些应用有修改passwordSecret的需求，例如刚开始使用uni-id时没有自定义passwordSecret，后续需要修改，此时可以使用uni-id 2.0.1版本新增的修改passwordSecret功能。（注意：2.0.1版本验证码表名调整为了`opendb-verify-codes`）

**如何使用**

下面以将passwordSecret从`passwordSecret-demo`修改为`qwertyasdfgh`为例介绍如何使用

```json
// 旧config.json
{
  "passwordSecret": "passwordSecret-demo"
}

// 新config.json
{
  "passwordSecret": [{
    "version": 1,
    "value": "passwordSecret-demo"
  },{
    "version": 2,
    "value": "qwertyasdfgh"
  }]
}

```

如果在上面基础上再修改passwordSecret为`1q2w3e4r5t`,config.json调整如下

> !!!注意只有在数据库内完全没有使用某个版本（`password_secret_version`字段表示了用户密钥版本）密钥的用户才可以将此密钥从config.json内去除。没有`password_secret_version`的用户使用的是最旧版本的passwordSecret，如果存在这样的用户对应的passwordSecret也不可去除。

```json
// 新config.json，
{
  "passwordSecret": [{
    "version": 1,
    "value": "passwordSecret-demo"
  },{
    "version": 2,
    "value": "qwertyasdfgh"
  },{
    "version": 3,
    "value": "1q2w3e4r5t"
  }]
}
```

**原理**

uni-id-users表内存储的password字段为使用hmac-sha1生成的hash值，此值不可逆向推出用户真实密码。所以直接修改passwordSecret会导致老用户无法使用密码登录。

上述修改通过密钥版本号区分新旧密钥，用户登录时如果密钥版本小于当前最新版本，会为用户更新数据库内存储的password字段，并记录当前使用的密钥版本。

用户对应的数据库记录内没有密钥版本的话会使用最低版本密钥进行密码校验，校验通过后为用户更新为最新版密钥对应的password并记录版本号。

由于是不可逆加密，理论上passwordSecret泄露不会造成用户的真实密码被泄露，自定义passwordSecret只是进一步加强安全性。

### 缓存角色权限@cache-permission-in-token

使用`uni-id-common`时，token内会缓存用户的角色权限。

为什么要缓存角色权限？要知道云数据库是按照读写次数来收取费用的，并且读写数据库会拖慢接口响应速度。

详细checkToken流程如下：

![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/ed45d350-5a4d-11eb-b997-9918a5dda011.jpg)

可以看出，旧版token（removePermissionAndRoleFromToken为true时生成的）在checkToken时如需返回权限需要进行两次数据库查询。新版token不需要查库即可返回权限信息。

**注意**

- 由于角色权限缓存在token内，可能会存在权限已经更新但是用户token未过期之前依然是旧版角色权限的情况。可以调短一些token过期时间来减少这种情况的影响。
- admin角色token内不包含permission，如需自行判断用户是否有某个权限，要注意admin角色需要额外判断一下，写法如下
  ```js
  const {
    role,
    permission
  } = await uniID.checkToken(event.uniIdToken)
  if(role.includes('admin') || permission.includes('your permission id')) {
    // 当前角色拥有'your permission id'对应的权限
  }
  ```

### 自定义token内容@custom-token

> uni-id 3.0.7及以上版本，且需要使用[uni-config-center](https://ext.dcloud.net.cn/plugin?id=4425)

自`uni-id 3.0.0`起，支持在token内缓存用户的角色权限。但是某些情况下开发者可能还希望缓存一些别的东西，以便在客户端能方便的访问（**注意：不可缓存机密信息到token内**）。

**用法**

在`uni-config-center`模块内的uni-id插件内创建`custom-token.js`内容如下：

```js
module.exports = async (tokenObj) => { 
  // tokenObj为原始token信息结构如下
  // {
  //   uid: 'abc', // 用户id
  //   role: [], // 用户角色列表
  //   permission: [] // 用户权限列表，admin角色的用户权限列表为空数组
  // }
  
  tokenObj.customField = 'hello custom token' // 自定义token字段
  return tokenObj // 注意务必返回修改后的token对象
}
```

uni-id会自动加载custom-token.js进行处理，在所有生成token的操作（包括：登录、注册、token过期自动刷新、开发者自行调用createToken）执行时自动获取新token信息，并生成token。

**注意**

- 使用custom-token时自行调用createToken接口会变为异步操作，需使用`await uniID.createToken(...)`
- 不要删除原始token内的字段

### 自定义国际化语言@custom-i8n

> 新增于uni-id 3.3.10，此功能依赖于[uni-config-center]

完整词句列表参考：[uni-id中文语言包](https://gitee.com/dcloud/uni-id/blob/master/src/lang/zh-Hans.js)

**用法**

在`cloudfunctions/common/uni-config-center/uni-id/lang/`目录下创建`index.js`，内容示例如下：

```js
module.exports = {
	'zh-hant': { // 语言代码
		'alipay': '支付寶'
	}
}
```

uni-id会自动进行语言匹配，无需额外配置


### 云函数Url化时使用@url

云函数url化时uni-id无法自行获取客户端相关信息，需要开发者自行创建uniID实例并传入相关信息，以下为一个简单示例

**注意：实际业务中务必验证一下前端传来的数据的合法性，APPID、PLATFORM等均来自前端**

```js
// 客户端代码示例
uni.request({
  url: 'https://xxx.xxx/xxx?appid=your_appid&platform=your_platform&deviceId=your_deviceId'
})

// 云函数代码示例
const uniID = require('uni-id')
exports.main = async function(event, context) {
  const {
    appid,
    platform
  } = event.queryStringParameters // 不同类型的请求获取参数的方式略有差异，具体如何取参数请参考：https://uniapp.dcloud.net.cn/uniCloud/http
  context.APPID = appid
  context.PLATFORM = platform
  const uniIDIns = uniID.createInstance({
    context
  })
  // uniIDIns.checkToken() 使用uniIDIns来调用uni-id相关接口
}
```


## uni-id公共模块迁移指南@migration

### 自1.x.x版本升级到2.x.x@m1to2

自2.0.0版本起uni-id调整了验证码表名（这个调整导致了与旧版不兼容），如果要使用2.0.0以上版本需要在数据库中创建opendb-verify-code表（建议直接选择opendb内uni-id下的opendb-verify-code表，会自动创建索引以及表结构）

### 自2.x.x版本升级到3.x.x@m2to3

3.0.0版本起uni-id默认将缓存用户角色权限到token内，关于缓存角色权限的说明请参考：[缓存角色权限](uniCloud/uni-id?id=cache-permission-in-token)。从2.x.x版本升级到3.x.x版本需要根据自己需求分别处理。

- 如果不希望缓存角色权限到token内，需要在config.json内配置`"removePermissionAndRoleFromToken": true`。
- 如果希望升级为缓存角色权限到token内的方案，可以按照以下步骤迁移
  + 各登录接口的needPermission参数不再生效，checkToken校验新token时总是返回角色权限
  + 所有注册用户行为均支持传入角色（role）字段，指定创建用户的角色（需要使用3.0.2及以上版本，此前只有uniID.register接口支持）。由于需要初始生成的token内带有角色权限，所以推荐在注册时就给用户设置好角色。

##### uniCloud admin升级uni-id@m2to3-uni-admin

uniCloud admin可以平滑升级到uni-id 3.0.0。如果要缓存角色权限到token内（uni-id 3.0.0的默认行为），那还有几点可以优化。详细调整如下

1. `uniCloud-aliyun\cloudfunctions\uni-admin\middleware\auth.js`

  auth中间件内可以调整为checkToken时不再获取用户信息，这样auth中间件就无需进行数据库查询，可以加速接口响应

2. `uniCloud-aliyun\cloudfunctions\uni-admin\controller\app.js`

  受第一步影响app/init内无法获取用户信息，可以额外调用uniID的getUserInfo获取

可以参考此次提交进行调整：[uniCloud admin](https://github.com/dcloudio/uniCloud-admin/commit/8359d699aacb8f7d074fce9aa82a36474cb6e7df)

##### 使用uni-config-center@uni-config-center

> uni-id 3.0.7及以上版本

从插件市场导入支持uni_modules的uni-id，会自动安装依赖的uni-config-center到uni_modules内。如果此前并没有使用uni-config-center可以直接将uni-id的config.json移至`uni-config-center/uni-id/config.json`即可（可以参照插件市场的uni-id示例项目）

- uni-id会优先使用uni-config-center内添加的配置
- 如果批量上传后报“请在公用模块uni-id的config.json或init方法中内添加配置项”，请重新上传一次`uni-id`

**uni-id配置优先级**

1. `uniID.init`、`uniID.createInstance`传入的配置（此配置不会对clientDB依赖的uni-id生效，不推荐使用）
2. uni-config-center内配置的`uni-id/config.json`（推荐使用的配置方式）
3. uni-id插件下配置的config.json（已不推荐使用的配置方式）

以上三个配置不会进行合并，优先级高的先生效

##### 忽略用户名邮箱大小写@case-sensitive

> uni-id 3.1.0及以上版本

uni-id 3.1.0版本主要有以下两个调整

1. 自此版本起会对所有接口中的用户名、邮箱、密码进行前后去空格。

2. 此版本之前uni-id并未忽略用户名及邮箱的大小写。这样导致了一些问题，比如用户在手机上登录不小心就会使用首字母大写的用户名或邮箱，这样就会登录失败，影响用户体验。很多应用/网站的登录都是忽略大小写的，为此uni-id在3.1.0版本起调整为默认忽略用户名、邮箱的大小写。实现方式为将用户名、邮箱均存储为小写，用户输入用户名邮箱时也转化为小写进行匹配

**注意**

- 此调整兼容旧版本，以登录接口为例，优先匹配用户输入用户名对应的账号，如果不存在则匹配全小写用户名对应的账号（uni-id内部进行处理实际不会增加数据库读写次数）
- 新注册用户会将用户名/邮箱存储为全小写格式，老用户可能还存在包含大写字母的邮箱及用户名

##### 补齐用户dcloud_appid字段@makeup-dcloud-appid

此调整详情见：[隔离不同端用户](uniCloud/uni-id.md?id=isolate-user)

> uni-id3.3.0以下版本升级到3.3.0及以上版本时，需要参照本章节补齐用户数据

uni-id在3.3.0提供了根据客户端appid（项目manifest.json内配置的DCloud Appid）隔离不同用户的功能，旧版本的uni-id在注册用户时并未将当前客户端的appid存储在用户的记录内，更新到新版后这些没有dcloud_appid字段的用户和之前一样可以登录所有端。开发者使用云函数本地运行可以自行对用户数据进行修补，为用户创建dcloud_appid字段

**更新后用户将只允许登录与自己数据库记录内匹配的端**

云函数示例代码如下：

**注意：如果要更新的记录很多可能会超时失败，此时无需重试等待数据库自行完成更新即可**

**如果仅有一端，将所有用户的数据更新为同一个dcloud_appid即可，例：**

```js
exports.main = async function() {
  const db = uniCloud.database()
  const userCollection = db.collection('uni-id-users')
  const res = await userCollection.where({
    dcloud_appid: db.command.exists(false) // 更新所有不存在dcloud_appid字段的用户
  }).update({
    dcloud_appid: ['你项目内manifest.json里面的DCloud Appid，__UNI_xxxx形式'] // 注意这里是个数组，务必正确填写
  })
  return res
}
```

**如果之前就有区分不同端的用户，可以将自己区分用户的条件加上再进行更新，例：**

```js
// 更新教师端用户的云函数
exports.main = async function() {
  const db = uniCloud.database()
  const userCollection = db.collection('uni-id-users')
  const res = await userCollection.where({
    user_type: 'teacher', // 教师端用户
    dcloud_appid: db.command.exists(false)
  }).update({
    dcloud_appid: ['教师端项目内manifest.json里面的DCloud Appid，__UNI_xxxx形式'] // 注意这里是个数组，务必正确填写
  })
  return res
}

// 更新学生端用户的云函数
exports.main = async function() {
  const db = uniCloud.database()
  const userCollection = db.collection('uni-id-users')
  const res = await userCollection.where({
    user_type: 'student', // 学生端用户
    dcloud_appid: db.command.exists(false)
  }).update({
    dcloud_appid: ['学生端项目内manifest.json里面的DCloud Appid，__UNI_xxxx形式'] // 注意这里是个数组，务必正确填写
  })
  return res
}
```

**如果允许用户在多个端登录需要将多端的DCloud Appid都传进来，例：**

```js
exports.main = async function() {
  const db = uniCloud.database()
  const userCollection = db.collection('uni-id-users')
  const res = await userCollection.where({
    dcloud_appid: db.command.exists(false) // 更新所有不存在dcloud_appid字段的用户
  }).update({
    dcloud_appid: ['DCloud Appid1','DCloud Appid1'] // 注意这里是个数组，务必正确填写
  })
  return res
}
```

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
- uni-id配置：`uni-id配置文件` --> `app-plus` --> `oauth` --> `weixin`，填写`appid`、`appsecret`
	
## 苹果登录集成指南
- 模块配置：`manifest.json` --> `App模块配置` --> OAuth（登录鉴权）勾选`苹果登录`，[IOS苹果授权登录参考文档](https://ask.dcloud.net.cn/article/36651)。如不发布到Appstore，不需要配置此项
- uni-id配置：`uni-id配置文件` --> `app-plus` --> `oauth` --> `apple` 填写`bundleId`。
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
- 不再将token存储在用户表内
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