### 开通  
- 注册[Google](https://accounts.google.com/)账号  
- 登录[Google Cloud Platform](https://console.cloud.google.com/)，打开“选择项目”界面选择已经创建的项目，如果没有创建项目，点击“新建项目”根据页面提示创建项目  
- 在左侧导航栏中选择 “API和服务” -> “凭证” 打开管理页面
- 点击 “创建凭证” -> “OAuth客户端ID”，根据提示选择“应用类型”，按需分别输入Android/iOS平台配置信息
- 创建凭证后iOS平台可以获取客户端ID（Android平台不需要客户端ID）

更多信息详见 [申请开通Google登录操作指南](https://uniapp.dcloud.io/tutorial/app-oauth-google-open)  


### 配置  
打开项目的manifest.json文件，在“App模块配置”项的“OAuth(登录鉴权)”下，勾选“Google登录”：
![](https://native-res.dcloud.net.cn/images/uniapp/oauth/google-manifest.png)

- iOS平台客户端ID  
Google云平台创建的OAuth2.0凭证的iOS平台客户端ID  

**注意**
- HBuilderX中标准真机运行基座使用的是DCloud申请HBuilder应用的AppID等信息，仅用于体验Google登录功能
- 配置参数需提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)


### 使用Google登录  

- uni-app项目  
调用 [uni.login(OBJECT)](api/plugins/login?id=login) 发起授权登录，调用 [uni.getUserInfo(OBJECT)](https://uniapp.dcloud.io/api/plugins/login?id=getuserinfo) 获取用户信息，OBJECT参数中provider属性值固定为`google`
- 5+ App项目  
调用 [plus.oauth.getServices(successCB,errorCB)](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.getServices) 获取登录服务对象 [plus.oauth.AuthService](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService), 再调用其 [login](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService.login) 方法进行登录认证、[getUserInfo](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService.getUserInfo)方法获取用户信息  


#### 示例代码  
- uni-app项目  
``` js  
uni.login({
    provider: 'google',
    success: function (loginRes) {
        // 登录成功
        uni.getUserInfo({
            provider: 'google',
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
var googleOauth = null;
plus.oauth.getServices(function(services) {
	for (var i in services) {
		var service = services[i];
		// 获取微信登录对象 
		if (service.id == 'google') {
			googleOauth = service;
			break;
		}
	}
	googleOauth.login( function(oauth){
		// 授权成功，googleOauth.authResult 中保存授权信息  
	}, function(err) {
    // 登录授权失败  
    // err.code是错误码
	})
}, function(err) {
	// 获取 services 失败
})
```

