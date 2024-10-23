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
**Notice**
- HBuilderX中标准真机运行基座使用的是DCloud申请HBuilder应用的AppID等信息，仅用于体验Facebook登录功能
- The standard real machine running base in HBuilderX uses the AppID and other information that DCloud applies for the HBuilder application, which is only used to experience the Facebook login function
- 配置参数需提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)
- The configuration parameters need to be submitted to the cloud to be packaged to take effect. Please use the [custom debugging base] when the real machine is running (https://ask.dcloud.net.cn/article/35115)


### 使用Facebook登录

- uni-app项目
调用 [uni.login(OBJECT)](/api/plugins/login.md#login) 发起授权登录，调用 [uni.getUserInfo(OBJECT)](https://uniapp.dcloud.io/api/plugins/login?id=getuserinfo) 获取用户信息，OBJECT参数中provider属性值固定为`facebook`
- 5+ App项目
调用 [plus.oauth.getServices(successCB,errorCB)](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.getServices) 获取登录服务对象 [plus.oauth.AuthService](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService), 再调用其 [login](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService.login) 方法进行登录认证、[getUserInfo](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService.getUserInfo)方法获取用户信息


#### 示例代码
- uni-app项目
``` js
uni.login({
    provider: 'facebook',
    success: function (loginRes) {
        // 登录成功
        // login successful
        uni.getUserInfo({
            provider: 'facebook',
            success: function(info) {
                // 获取用户信息成功, info.authResult保存用户信息
                // Obtain user information successfully, info.authResult saves user information
            }
        })
    },
    fail: function (err) {
        // 登录授权失败
        // err.code是错误码
        // err.code is the error code
    }
});
```

- 5+ App项目
``` js
var facebookOauth = null;
plus.oauth.getServices(function(services) {
	for (var i in services) {
		var service = services[i];
        // 获取facebook登录对象
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
    // err.code is the error code
	})
}, function(err) {
	// 获取 services 失败
	// Failed to get services
})
```
::: warning 注意事项
- Android端在4.31版本后Facebook登录SDK默认携带`com.google.android.gms.permission.AD_ID`权限，如未使用广告相关功能在GooglePlay上架时会遇到审核问题，需要手动删除掉此权限，[删除权限文档](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android.html#removepermissions)。
:::
