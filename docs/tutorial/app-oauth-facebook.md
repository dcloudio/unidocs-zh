### 开通  
- 注册[Facebook](http://www.facebook.com)账号  
- 登录[Facebook开发者中心](http://developers.facebook.com/)，打开“我的应用”页面  
- 点击“创建应用”，根据提示填写应用信息  
- 创建应用完成后即可获得应用编号(AppID)  
- 进入应用详情页面，为应用添加登录功能，并配置Android/iOS平台信息  

更多信息详见 [申请开通Facebook登录操作指南](https://uniapp.dcloud.io/tutorial/app-oauth-facebook-open)  


### 配置  
打开项目的manifest.json文件，在“App模块配置”项的“OAuth(登录鉴权)”下，勾选“Facebook登录”：
![](https://native-res.dcloud.net.cn/images/uniapp/oauth/facebook-manifest.png)

- appid  
Facebook开发者中心申请的应用编号（AppID）  

**注意**
- HBuilderX中标准真机运行基座使用的是DCloud申请HBuilder应用的AppID等信息，仅用于体验Facebook登录功能
- 配置参数需提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)


### 使用Facebook登录  

- uni-app项目  
调用 [uni.login(OBJECT)](api/plugins/login?id=login) 发起授权登录，调用 [uni.getUserInfo(OBJECT)](https://uniapp.dcloud.io/api/plugins/login?id=getuserinfo) 获取用户信息，OBJECT参数中provider属性值固定为`facebook`
- 5+ App项目  
调用 [plus.oauth.getServices(successCB,errorCB)](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.getServices) 获取登录服务对象 [plus.oauth.AuthService](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService), 再调用其 [login](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService.login) 方法进行登录认证、[getUserInfo](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService.getUserInfo)方法获取用户信息  


#### 示例代码  
- uni-app项目  
``` js  
uni.login({
    provider: 'facebook',
    success: function (loginRes) {
        // 登录成功
        uni.getUserInfo({
            provider: 'facebook',
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
var facebookOauth = null;
plus.oauth.getServices(function(services) {
	for (var i in services) {
		var service = services[i];
		// 获取微信登录对象 
		if (service.id == 'facebook') {
			facebookOauth = service;
			break;
		}
	}
	facebookOauth.login( function(oauth){
		// 授权成功，facebookOauth.authResult 中保存授权信息  
	}, function(err) {
    // 登录授权失败  
    // err.code是错误码
	})
}, function(err) {
	// 获取 services 失败
})
```

