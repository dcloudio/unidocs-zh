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