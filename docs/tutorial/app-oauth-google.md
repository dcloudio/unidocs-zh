### 开通  
### Open
- 注册[Google](https://accounts.google.com/)账号  
- Register a [Google](https://accounts.google.com/) account
- 登录[Google Cloud Platform](https://console.cloud.google.com/)，打开“选择项目”界面选择已经创建的项目，如果没有创建项目，点击“新建项目”根据页面提示创建项目  
- Log in to [Google Cloud Platform](https://console.cloud.google.com/), open the "Select Project" interface and select a project that has already been created. If no project has been created, click "New Project" to create a project according to the page prompts
- 在左侧导航栏中选择 “API和服务” -> “凭证” 打开管理页面
- Select "APIs and Services" -> "Credentials" in the left navigation bar to open the management page
- 点击 “创建凭证” -> “OAuth客户端ID”，根据提示选择“应用类型”，按需分别输入Android/iOS平台配置信息
- Click "Create Credentials" -> "OAuth Client ID", select "Application Type" according to the prompts, and enter Android/iOS platform configuration information as required
- 创建凭证后iOS平台可以获取客户端ID（Android平台不需要客户端ID）
- The iOS platform can obtain the client ID after the credential is created (the Android platform does not need the client ID)

更多信息详见 [申请开通Google登录操作指南](https://uniapp.dcloud.io/tutorial/app-oauth-google-open)  


### 配置  
### Configuration
打开项目的manifest.json文件，在“App模块配置”项的“OAuth(登录鉴权)”下，勾选“Google登录”：
![](https://native-res.dcloud.net.cn/images/uniapp/oauth/google-manifest.png)

- iOS平台客户端ID  
- iOS platform client ID
Google云平台创建的OAuth2.0凭证的iOS平台客户端ID  
iOS platform client ID for OAuth2.0 credentials created by Google Cloud Platform

**注意**
**Notice**
- HBuilderX中标准真机运行基座使用的是DCloud申请HBuilder应用的AppID等信息，仅用于体验Google登录功能
- The standard real machine running base in HBuilderX uses the AppID and other information that DCloud applies for the HBuilder application, which is only used to experience the Google login function
- 配置参数需提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)
- The configuration parameters need to be submitted to the cloud to be packaged to take effect. Please use the [custom debugging base] when the real machine is running (https://ask.dcloud.net.cn/article/35115)


### 使用Google登录  
### Sign in with Google

- uni-app项目  
- uni-app project
调用 [uni.login(OBJECT)](api/plugins/login?id=login) 发起授权登录，调用 [uni.getUserInfo(OBJECT)](https://uniapp.dcloud.io/api/plugins/login?id=getuserinfo) 获取用户信息，OBJECT参数中provider属性值固定为`google`
Call [uni.login(OBJECT)](api/plugins/login?id=login) to initiate authorized login, call [uni.getUserInfo(OBJECT)](https://uniapp.dcloud.io/api/plugins/login? id=getuserinfo) to get user information, the provider attribute value in the OBJECT parameter is fixed to `google`
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
    provider: 'google',
    success: function (loginRes) {
        // 登录成功
        // login successful
        uni.getUserInfo({
            provider: 'google',
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
var googleOauth = null;
plus.oauth.getServices(function(services) {
	for (var i in services) {
		var service = services[i];
		// 获取微信登录对象 
		// Get the WeChat login object
		if (service.id == 'google') {
			googleOauth = service;
			break;
		}
	}
	googleOauth.login( function(oauth){
		// 授权成功，googleOauth.authResult 中保存授权信息  
		// The authorization is successful, and the authorization information is saved in googleOauth.authResult
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

