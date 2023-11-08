### 开通  
### Open
- 登录[新浪微博开放平台](http://open.weibo.com/)，打开 “移动应用 MOBILE” 页面  
- Log in to the [Sina Weibo Open Platform](http://open.weibo.com/) and open the “Mobile Application MOBILE” page
- 在页面中选择 “立即接入”，根据提示填写信息创建应用  
- Select "Access Now" on the page, and fill in the information to create an application according to the prompts
- 创建成功后，在 “我的应用” 中点击应用，可以在应用详情页面   
- After the creation is successful, click the application in "My Application", you can view the application details page
- 在应用详情页面的 “应用信息” -> “基本信息” 中可获取 App Key，点击编辑可设置iOS平台的通用链接（UniversalLink）  
- You can get the App Key in "App Info" -> "Basic Info" on the app details page, click Edit to set the UniversalLink for the iOS platform
- 在应用详情页面的 “应用信息” -> “高级信息” -> “OAuth2.0 授权设置” 中可以设置授权回调页（redirect_url）  
- The authorization callback page (redirect_url) can be set in the "Application Information" -> "Advanced Information" -> "OAuth2.0 Authorization Settings" of the application details page

更多信息详见新浪微博官方文档 [移动应用接入](https://open.weibo.com/wiki/Connect/login)
For more information, please refer to the official Sina Weibo document [Mobile Application Access](https://open.weibo.com/wiki/Connect/login)



### 配置  
### Configuration
打开项目的manifest.json文件，在“App模块配置”项的“OAuth(登录鉴权)”下，勾选“新浪微博登录”：
![](https://native-res.dcloud.net.cn/images/uniapp/oauth/sina-manifest.png)

- appkey  
新浪微博开放平台申请应用的AppKey值  
Sina Weibo open platform to apply for the AppKey value of the application
- redirect_url  
新浪微博开放平台申请应用中设置的授权回调页  
Authorization callback page set in Sina Weibo open platform application application
- UniversalLinks  
iOS平台通用链接，必须与新浪微博开放平台配置的一致，推荐使用[一键生成iOS通用链接](https://uniapp.dcloud.io/api/plugins/universal-links.html)  
The iOS platform universal link must be consistent with the configuration of the Sina Weibo open platform. It is recommended to use [One-click to generate iOS universal links](https://uniapp.dcloud.io/api/plugins/universal-links.html)


**注意**
**Notice**
- HBuilderX中标准真机运行基座使用的是DCloud申请HBuilder应用的AppID等信息，仅用于体验新浪微博登录功能
- The standard real machine running base in HBuilderX uses the AppID and other information that DCloud applies for the HBuilder application, which is only used to experience the Sina Weibo login function
- 配置参数需提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)
- The configuration parameters need to be submitted to the cloud to be packaged to take effect. Please use the [custom debugging base] when the real machine is running (https://ask.dcloud.net.cn/article/35115)


### 使用新浪微博登录  
### Login with Sina Weibo

- uni-app项目  
- uni-app project
调用 [uni.login(OBJECT)](api/plugins/login?id=login) 发起授权登录，调用 [uni.getUserInfo(OBJECT)](https://uniapp.dcloud.io/api/plugins/login?id=getuserinfo) 获取用户信息，OBJECT参数中provider属性值固定为`sinaweibo`
Call [uni.login(OBJECT)](api/plugins/login?id=login) to initiate authorized login, call [uni.getUserInfo(OBJECT)](https://uniapp.dcloud.io/api/plugins/login? id=getuserinfo) to get user information, the value of the provider attribute in the OBJECT parameter is fixed to `sinaweibo`
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
    provider: 'sinaweibo',
    success: function (loginRes) {
        // 登录成功
        // login successful
        uni.getUserInfo({
            provider: 'sinaweibo',
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
var weiboOauth = null;
plus.oauth.getServices(function(services) {
	for (var i in services) {
		var service = services[i];
		// 获取新浪微博登录对象 
		// Get Sina Weibo login object
		if (service.id == 'sinaweibo') {
			weiboOauth = service;
			break;
		}
	}
	weiboOauth.login( function(oauth){
		// 授权成功，weiboOauth.authResult 中保存授权信息  
		// The authorization is successful, and the authorization information is saved in weiboOauth.authResult
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

