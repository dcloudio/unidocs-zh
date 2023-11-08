### 开通  
### Open
- 登录[腾讯开放平台](https://connect.qq.com/index.html)，打开 “应用管理” -> “移动应用” 页面  
- Log in to the [Tencent Open Platform](https://connect.qq.com/index.html), open the "Application Management" -> "Mobile Application" page
- 在页面中选择 “创建应用” -> “创建移动应用”，根据提示填写信息创建应用
- Select "Create App" -> "Create Mobile App" on the page, and fill in the information to create an app according to the prompts
- 创建成功后，在应用详情中页面可以获取 APP ID
- After the creation is successful, the APP ID can be obtained on the page of the application details
- 在应用详情页面的 “基本信息” -> “平台信息” 中，点击“修改”可以设置iOS平台的通用链接（UniversalLink）
- In the "Basic Information" -> "Platform Information" of the application details page, click "Modify" to set the UniversalLink for the iOS platform

更多信息详见QQ官方文档 [移动应用接入概述](https://wiki.connect.qq.com/%e7%a7%bb%e5%8a%a8%e5%ba%94%e7%94%a8%e6%8e%a5%e5%85%a5%e6%a6%82%e8%bf%b0)
For more information, please refer to the official QQ document [Overview of Mobile Application Access](https://wiki.connect.qq.com/%e7%a7%bb%e5%8a%a8%e5%ba%94%e7%94 %a8%e6%8e%a5%e5%85%a5%e6%a6%82%e8%bf%b0)



### 配置  
### Configuration
打开项目的manifest.json文件，在“App模块配置”项的“OAuth(登录鉴权)”下，勾选“QQ登录”：
![](https://native-res.dcloud.net.cn/images/uniapp/oauth/qq-manifest.png)

- appid  
QQ开放平台申请应用的AppID值  
AppID value of the application applied by the QQ open platform
- UniversalLinks  
iOS平台通用链接，必须与QQ开放平台配置的一致，推荐使用[一键生成iOS通用链接](https://uniapp.dcloud.io/api/plugins/universal-links.html)  
The universal link of the iOS platform must be consistent with the configuration of the QQ open platform. It is recommended to use [Generate iOS universal link with one click](https://uniapp.dcloud.io/api/plugins/universal-links.html)


**注意**
**Notice**
- HBuilderX中标准真机运行基座使用的是DCloud申请HBuilder应用的AppID等信息，仅用于体验QQ登录功能
- The standard real machine running base in HBuilderX uses the AppID and other information that DCloud applies for the HBuilder application, which is only used to experience the QQ login function
- 配置参数需提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)
- The configuration parameters need to be submitted to the cloud to be packaged to take effect. Please use the [custom debugging base] when the real machine is running (https://ask.dcloud.net.cn/article/35115)


### 使用QQ登录  
### Login with QQ

- uni-app项目  
- uni-app project
调用 [uni.login(OBJECT)](api/plugins/login?id=login) 发起授权登录，调用 [uni.getUserInfo(OBJECT)](https://uniapp.dcloud.io/api/plugins/login?id=getuserinfo) 获取用户信息，OBJECT参数中provider属性值固定为`qq`
Call [uni.login(OBJECT)](api/plugins/login?id=login) to initiate authorized login, call [uni.getUserInfo(OBJECT)](https://uniapp.dcloud.io/api/plugins/login? id=getuserinfo) to get user information, the value of the provider attribute in the OBJECT parameter is fixed to `qq`
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
    provider: 'qq',
    success: function (loginRes) {
        // 登录成功
        // login successful
        uni.getUserInfo({
            provider: 'qq',
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
var qqOauth = null;
plus.oauth.getServices(function(services) {
	for (var i in services) {
		var service = services[i];
		// 获取QQ登录对象 
		// Get the QQ login object
		if (service.id == 'qq') {
			qqOauth = service;
			break;
		}
	}
	qqOauth.login( function(oauth){
		// 授权成功，qqOauth.authResult 中保存授权信息  
		// The authorization is successful, and the authorization information is saved in qqOauth.authResult
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

