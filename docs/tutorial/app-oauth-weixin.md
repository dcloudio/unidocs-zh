> 此文档为App端登录说明，H5和小程序端[详情](https://uniapp.dcloud.io/api/plugins/login.html#login)
> This document is for App login instructions, H5 and Mini Program [details](https://uniapp.dcloud.io/api/plugins/login.html#login)

### 开通  
### Open
- 登录[微信开放平台](https://open.weixin.qq.com/)，添加移动应用并提交审核，审核通过后可获取应用ID（AppID），AppSecret等信息
- Log in to the [WeChat Open Platform](https://open.weixin.qq.com/), add a mobile application and submit it for review. After the review, you can get the App ID (AppID), AppSecret and other information
- 在应用详情中`申请开通`微信登录功能，根据页面提示填写资料，提交审核
- `Apply to activate` the WeChat login function in the application details, fill in the information according to the page prompts, and submit for review
- 申请审核通过后即可打包使用微信授权登录功能
- After the application is approved, the WeChat authorized login function can be packaged and used

> 更多信息详见微信官方文档 [移动应用微信登录开放指南](https://developers.weixin.qq.com/doc/oplatform/Mobile_App/WeChat_Login/Development_Guide.html)
> For more information, please refer to the official WeChat document [Mobile Application WeChat Login Open Guide](https://developers.weixin.qq.com/doc/oplatform/Mobile_App/WeChat_Login/Development_Guide.html)

### 配置  
### Configuration
打开项目的manifest.json文件，在“App模块配置”项的“OAuth(登录鉴权)”下，勾选“微信登录”：
![](https://native-res.dcloud.net.cn/images/uniapp/oauth/weixin-manifest.png)

- appid  
微信开放平台申请应用的AppID值  
AppID value of WeChat open platform application application
- appSecret（HBuilderX3.4.18+ 不再提供此参数的可视化配置，详见[配置参数安全性问题](#配置参数安全性问题)）</br>
- appSecret (HBuilderX3.4.18+ no longer provides visual configuration of this parameter, see [Configuration parameter security issues](#%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95% B0%E5%AE%89%E5%85%A8%E6%80%A7%E9%97%AE%E9%A2%98)))</br>
微信开放平台申请应用的AppSecret值  
AppSecret value of WeChat open platform application application
- UniversalLinks  
iOS平台通用链接，必须与微信开放平台配置的一致，推荐使用[一键生成iOS通用链接](https://uniapp.dcloud.io/api/plugins/universal-links.html)  
The iOS platform universal link must be consistent with the configuration of the WeChat open platform. It is recommended to use [Generate iOS Universal Links with One Click](https://uniapp.dcloud.io/api/plugins/universal-links.html)

**注意**
**Notice**
- HBuilderX中标准真机运行基座使用的是DCloud申请HBuilder应用的AppID等信息，仅用于体验微信登录功能
- The standard real machine running base in HBuilderX uses the AppID and other information that DCloud applies for the HBuilder application, which is only used to experience the WeChat login function
- 配置参数需提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)
- The configuration parameters need to be submitted to the cloud to be packaged to take effect. Please use the [custom debugging base] when the real machine is running (https://ask.dcloud.net.cn/article/35115)


### 使用微信登录  
### Login with WeChat
1. 客户端调用api向微信请求授权，获取临时票据（code），向开发者业务服务器发起网络请求
1. The client calls the api to request authorization from WeChat, obtains a temporary ticket (code), and initiates a network request to the developer business server
2. 业务服务器通过code + 仅保存在服务器的appsecret参数，向：微信开放平台接口发起网络请求[详情](https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419317853&token=&lang=zh_CN)。
2. The business server initiates a network request to: WeChat open platform interface through code + appsecret parameters saved only on the server [Details](https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t= resource/res_list&verify=1&id=open1419317853&token=&lang=zh_CN).
3. 业务服务器成功获取用户信息后，再依据unionid或openid查数据库的用户表并生成新token，并返回token给客户端
3. After the business server successfully obtains the user information, it checks the user table of the database according to the unionid or openid, generates a new token, and returns the token to the client
4. 客户端得到token后，保存到storage完成登录。
4. After the client gets the token, save it to storage to complete the login.

示例代码  
sample code
- uni-app项目  
- uni-app project
``` js  
uni.login({ 
	"provider": "weixin",
	"onlyAuthorize": true, // 微信登录仅请求授权认证
	success: function(event){
		const {code} = event
		//客户端成功获取授权临时票据（code）,向业务服务器发起登录请求。
		//The client successfully obtains the authorized temporary ticket (code) and initiates a login request to the business server.
		uni.request({
		    url: 'https://www.example.com/loginByWeixin', //仅为示例，并非真实接口地址。
		    data: {
		        code: event.code
		    },
		    success: (res) => {
		        //获得token完成登录
		        //Get the token to complete the login
				uni.setStorageSync('token',res.token)
		    }
		});
	},
	fail: function (err) {
        // 登录授权失败  
        // Login authorization failed
        // err.code是错误码
        // err.code is the error code
    }
})
```
> 相关API文档： [uni.login](https://uniapp.dcloud.io/api/plugins/login.html#login)，[uni.request](https://uniapp.dcloud.io/api/request/request.html)
> Related API documentation: [uni.login](https://uniapp.dcloud.io/api/plugins/login.html#login), [uni.request](https://uniapp.dcloud.io/api/ request/request.html)

- 5+ App项目  
- 5+ App items

``` js  
var weixinOauth = null;
plus.oauth.getServices(function(services) {
	for (var i in services) {
		var service = services[i];
		// 获取微信登录对象 
		// Get the WeChat login object
		if (service.id == 'weixin') {
			weixinOauth = service;
			break;
		}
	}
	weixinOauth.authorize( function(event){
		const {code} = event
		//客户端成功获取授权临时票据（code）,向业务服务器发起登录请求。
		//The client successfully obtains the authorized temporary ticket (code) and initiates a login request to the business server.
		uni.request({
		    url: 'https://www.example.com/loginByWeixin', //仅为示例，并非真实接口地址。
		    data: {
		        code: event.code
		    },
		    success: (res) => {
		        //获得token完成登录
		        //Get the token to complete the login
				uni.setStorageSync('token',res.token)
		    }
		});
	}, function(err) {
    // 登录授权失败  
    // Login authorization failed
    // err.code是错误码
    // err.code is the error code
	})
}, function(err) {
	// 获取 services 失败
	// Failed to get services
})
```
> 相关API文档： [plus.oauth.getServices](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.getServices)，[plus.oauth.AuthService](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService)
> Related API documentation: [plus.oauth.getServices](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.getServices), [plus.oauth.AuthService](https://www .html5plus.org/doc/en_us/oauth.html#plus.oauth.AuthService)

#### 配置参数安全性问题  
#### Configuration parameter security issues
HBuilderX中配置的appsecret参数，云端打包后会保存在apk/ipa中，存在参数泄露的风险！HBuilderX3.4.18+ 不再提供此参数的可视化配置。
The appsecret parameters configured in HBuilderX will be saved in apk/ipa after being packaged in the cloud, there is a risk of parameter leakage! HBuilderX3.4.18+ no longer provides visual configuration of this parameter.

对于安全性要求较低的开发者，可以通过manifest.json -> 源码视图 -> app-plus -> distribute -> sdkConfigs -> oauth -> weixin -> 添加appsecret 配置。即可不经业务服务器验证完成登录：
For developers with low security requirements, you can add appsecret configuration through manifest.json -> source view -> app-plus -> distribute -> sdkConfigs -> oauth -> weixin -> . You can complete the login without the verification of the business server:

- uni-app项目  
- uni-app project
调用 [uni.login(OBJECT)](api/plugins/login?id=login) 发起授权登录，调用 [uni.getUserInfo(OBJECT)](https://uniapp.dcloud.io/api/plugins/login?id=getuserinfo) 获取用户信息，OBJECT参数中provider属性值固定为`weixin`
Call [uni.login(OBJECT)](api/plugins/login?id=login) to initiate authorized login, call [uni.getUserInfo(OBJECT)](https://uniapp.dcloud.io/api/plugins/login? id=getuserinfo) to get user information, the value of provider attribute in the OBJECT parameter is fixed to `weixin`
- 5+ App项目  
- 5+ App items
调用 [plus.oauth.getServices(successCB,errorCB)](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.getServices) 获取登录服务对象 [plus.oauth.AuthService](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService), 再调用其 [login](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService.login) 方法进行登录认证、[getUserInfo](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService.getUserInfo)方法获取用户信息  
Call [plus.oauth.getServices(successCB,errorCB)](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.getServices) to get the login service object [plus.oauth.AuthService]( https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService), then call its [login](https://www.html5plus.org/doc/zh_cn/oauth.html# plus.oauth.AuthService.login) method for login authentication, [getUserInfo](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService.getUserInfo) method to obtain user information


#### 示例代码  
#### Sample code
- uni-app项目  
- uni-app project
``` js  
uni.login({
    provider: 'weixin',
    success: function (loginRes) {
        // 登录成功
        // login successful
        uni.getUserInfo({
            provider: 'weixin',
            success: function(info) {
                // 获取用户信息成功, info.authResult保存用户信息
                // Obtain user information successfully, info.authResult saves user information
            }
        })
    },
    fail: function (err) {
        // 登录授权失败  
        // Login authorization failed
        // err.code是错误码
        // err.code is the error code
    }
});
```  

- 5+ App项目  
- 5+ App items
``` js  
var weixinOauth = null;
plus.oauth.getServices(function(services) {
	for (var i in services) {
		var service = services[i];
		// 获取微信登录对象 
		// Get the WeChat login object
		if (service.id == 'weixin') {
			weixinOauth = service;
			break;
		}
	}
	weixinOauth.login( function(oauth){
		// 授权成功，weixinOauth.authResult 中保存授权信息  
		// The authorization is successful, and the authorization information is saved in weixinOauth.authResult
	}, function(err) {
    // 登录授权失败  
    // Login authorization failed
    // err.code是错误码
    // err.code is the error code
	})
}, function(err) {
	// 获取 services 失败
	// Failed to get services
})
```