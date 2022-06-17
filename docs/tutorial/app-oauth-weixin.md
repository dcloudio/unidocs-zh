> 此文档为App端登陆说明，H5和小程序端[详情](https://uniapp.dcloud.io/api/plugins/login.html#login)

### 开通  
- 登录[微信开放平台](https://open.weixin.qq.com/)，添加移动应用并提交审核，审核通过后可获取应用ID（AppID），AppSecret等信息
- 在应用详情中`申请开通`微信登录功能，根据页面提示填写资料，提交审核
- 申请审核通过后即可打包使用微信授权登录功能

> 更多信息详见微信官方文档 [移动应用微信登录开放指南](https://developers.weixin.qq.com/doc/oplatform/Mobile_App/WeChat_Login/Development_Guide.html)

### 配置  
打开项目的manifest.json文件，在“App模块配置”项的“OAuth(登录鉴权)”下，勾选“微信登录”：
![](https://native-res.dcloud.net.cn/images/uniapp/oauth/weixin-manifest.png)

- appid  
微信开放平台申请应用的AppID值  
- appSecret（HBuilderX3.4.18+ 不再提供此参数的可视化配置，详见[配置参数安全性问题](#配置参数安全性问题)）</br>
微信开放平台申请应用的AppSecret值  
- UniversalLinks  
iOS平台通用链接，必须与微信开放平台配置的一致，推荐使用[一键生成iOS通用链接](https://uniapp.dcloud.io/api/plugins/universal-links.html)  

**注意**
- HBuilderX中标准真机运行基座使用的是DCloud申请HBuilder应用的AppID等信息，仅用于体验微信登录功能
- 配置参数需提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)


### 使用微信登录  
1. 客户端调用api向微信请求授权，获取临时票据（code），向开发者业务服务器发起网络请求
2. 业务服务器通过code + 仅保存在服务器的appsecret参数，向：微信开放平台接口发起网络请求[详情](https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419317853&token=&lang=zh_CN)。
3. 业务服务器成功获取用户信息后，再依据unionid或openid查数据库的用户表并生成新token，并返回token给客户端
4. 客户端得到token后，保存到storage完成登陆。

示例代码  
- uni-app项目  
``` js  
uni.login({ 
	"provider": "weixin",
	"onlyAuthorize": true, // 微信登录仅请求授权认证
	success: function(event){
		const {code} = event
		//客户端成功获取授权临时票据（code）,向业务服务器发起登陆请求。
		uni.request({
		    url: 'https://www.example.com/loginByWeixin', //仅为示例，并非真实接口地址。
		    data: {
		        code: event.code
		    },
		    success: (res) => {
		        //获得token完成登陆
				uni.setStorageSync('token',res.token)
		    }
		});
	},
	fail: function (err) {
        // 登录授权失败  
        // err.code是错误码
    }
})
```
> 相关API文档： [uni.login](https://uniapp.dcloud.io/api/plugins/login.html#login)，[uni.request](https://uniapp.dcloud.io/api/request/request.html)

- 5+ App项目  

``` js  
var weixinOauth = null;
plus.oauth.getServices(function(services) {
	for (var i in services) {
		var service = services[i];
		// 获取微信登录对象 
		if (service.id == 'weixin') {
			weixinOauth = service;
			break;
		}
	}
	weixinOauth.authorize( function(event){
		const {code} = event
		//客户端成功获取授权临时票据（code）,向业务服务器发起登陆请求。
		uni.request({
		    url: 'https://www.example.com/loginByWeixin', //仅为示例，并非真实接口地址。
		    data: {
		        code: event.code
		    },
		    success: (res) => {
		        //获得token完成登陆
				uni.setStorageSync('token',res.token)
		    }
		});
	}, function(err) {
    // 登录授权失败  
    // err.code是错误码
	})
}, function(err) {
	// 获取 services 失败
})
```
> 相关API文档： [plus.oauth.getServices](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.getServices)，[plus.oauth.AuthService](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService)

#### 配置参数安全性问题  
HBuilderX中配置的appsecret参数，云端打包后会保存在apk/ipa中，存在参数泄露的风险！HBuilderX3.4.18+ 不再提供此参数的可视化配置。

对于安全性要求较低的开发者，可以通过manifest.json -> 源码视图 -> app-plus -> distribute -> sdkConfigs -> oauth -> weixin -> 添加appsecret 配置。即可不经业务服务器验证完成登陆：

- uni-app项目  
调用 [uni.login(OBJECT)](api/plugins/login?id=login) 发起授权登录，调用 [uni.getUserInfo(OBJECT)](https://uniapp.dcloud.io/api/plugins/login?id=getuserinfo) 获取用户信息，OBJECT参数中provider属性值固定为`weixin`
- 5+ App项目  
调用 [plus.oauth.getServices(successCB,errorCB)](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.getServices) 获取登录服务对象 [plus.oauth.AuthService](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService), 再调用其 [login](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService.login) 方法进行登录认证、[getUserInfo](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService.getUserInfo)方法获取用户信息  


#### 示例代码  
- uni-app项目  
``` js  
uni.login({
    provider: 'weixin',
    success: function (loginRes) {
        // 登录成功
        uni.getUserInfo({
            provider: 'weixin',
            success: function(info) {
                // 获取用户信息成功, info.authResult保存用户信息
            }
        })
    },
    fail: function (err) {
        // 登录授权失败  
        // err.code是错误码
    }
});
```  

- 5+ App项目  
``` js  
var weixinOauth = null;
plus.oauth.getServices(function(services) {
	for (var i in services) {
		var service = services[i];
		// 获取微信登录对象 
		if (service.id == 'weixin') {
			weixinOauth = service;
			break;
		}
	}
	weixinOauth.login( function(oauth){
		// 授权成功，weixinOauth.authResult 中保存授权信息  
	}, function(err) {
    // 登录授权失败  
    // err.code是错误码
	})
}, function(err) {
	// 获取 services 失败
})
```