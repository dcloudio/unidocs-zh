### 开通  
- 登录[微信开放平台](https://open.weixin.qq.com/)，添加移动应用并提交审核，审核通过后可获取应用ID（AppID），AppSecret等信息
- 在应用详情中`申请开通`微信登录功能，根据页面提示填写资料，提交审核
- 申请审核通过后即可打包使用微信授权登录功能

更多信息详见微信官方文档 [移动应用微信登录开放指南](https://developers.weixin.qq.com/doc/oplatform/Mobile_App/WeChat_Login/Development_Guide.html)



### 配置  
打开项目的manifest.json文件，在“App模块配置”项的“OAuth(登录鉴权)”下，勾选“微信登录”：
![](https://native-res.dcloud.net.cn/images/uniapp/oauth/weixin-manifest.png)

- appid  
微信开放平台申请应用的AppID值  
- appSecret  
微信开放平台申请应用的AppSecret值  
- UniversalLinks  
iOS平台通用链接，必须与微信开放平台配置的一致，推荐使用[一键生成iOS通用链接](https://uniapp.dcloud.io/api/plugins/universal-links.html)  


**注意**
- HBuilderX中标准真机运行基座使用的是DCloud申请HBuilder应用的AppID等信息，仅用于体验微信登录功能
- 配置参数需提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)


### 使用微信登录  

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


<a id="secret"/>

#### 配置参数安全性问题  
HBuilderX中配置的appsecret参数云端打包后会保存在apk/ipa中，对于安全性要求高的开发者可能担心存在参数泄露的风险，可以采取以下方式处理。
- 在HBuilderX中仅配置appid，appsecret参数随意输入，调用 [uni.login(OBJECT)](api/plugins/login?id=login) 时设置 `onlyAuthorize` 为 true，成功回调中通过 info.code 获取授权临时票据（code）
- 通过服务器完成授权认证
在客户端获取授权临时票据（code）后提交业务服务器，在业务服务器使用code+appsecret向微信开放平台获取用户信息，这种方式appsecret仅保存在业务服务器，安全性更高

微信开放平台服务器的对接流程参考：[授权后接口调用](https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419317853&token=&lang=zh_CN)

> 注：5+ App项目可以调用weixinOauth对象的 [authorize](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService.authorize)方法请求授权获取临时票据（code）  
