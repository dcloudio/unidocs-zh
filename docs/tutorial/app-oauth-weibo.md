### 开通  
- 登录[新浪微博开放平台](http://open.weibo.com/)，打开 “移动应用 MOBILE” 页面  
- 在页面中选择 “立即接入”，根据提示填写信息创建应用  
- 创建成功后，在 “我的应用” 中点击应用，可以在应用详情页面   
- 在应用详情页面的 “应用信息” -> “基本信息” 中可获取 App Key，点击编辑可设置iOS平台的通用链接（UniversalLink）  
- 在应用详情页面的 “应用信息” -> “高级信息” -> “OAuth2.0 授权设置” 中可以设置授权回调页（redirect_url）  

更多信息详见新浪微博官方文档 [移动应用接入](https://open.weibo.com/wiki/Connect/login)



### 配置  
打开项目的manifest.json文件，在“App模块配置”项的“OAuth(登录鉴权)”下，勾选“新浪微博登录”：
![](https://native-res.dcloud.net.cn/images/uniapp/oauth/sina-manifest.png)

- appkey  
新浪微博开放平台申请应用的AppKey值  
- redirect_url  
新浪微博开放平台申请应用中设置的授权回调页  
- UniversalLinks  
iOS平台通用链接，必须与新浪微博开放平台配置的一致，推荐使用[一键生成iOS通用链接](https://uniapp.dcloud.io/api/plugins/universal-links.html)  


**注意**
- HBuilderX中标准真机运行基座使用的是DCloud申请HBuilder应用的AppID等信息，仅用于体验新浪微博登录功能
- 配置参数需提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)


### 使用新浪微博登录  

- uni-app项目  
调用 [uni.login(OBJECT)](api/plugins/login?id=login) 发起授权登录，调用 [uni.getUserInfo(OBJECT)](https://uniapp.dcloud.io/api/plugins/login?id=getuserinfo) 获取用户信息，OBJECT参数中provider属性值固定为`sinaweibo`
- 5+ App项目  
调用 [plus.oauth.getServices(successCB,errorCB)](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.getServices) 获取登录服务对象 [plus.oauth.AuthService](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService), 再调用其 [login](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService.login) 方法进行登录认证、[getUserInfo](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService.getUserInfo)方法获取用户信息  


#### 示例代码  
- uni-app项目  
``` js  
uni.login({
    provider: 'sinaweibo',
    success: function (loginRes) {
        // 登录成功
        uni.getUserInfo({
            provider: 'sinaweibo',
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
var weiboOauth = null;
plus.oauth.getServices(function(services) {
	for (var i in services) {
		var service = services[i];
		// 获取新浪微博登录对象 
		if (service.id == 'sinaweibo') {
			weiboOauth = service;
			break;
		}
	}
	weiboOauth.login( function(oauth){
		// 授权成功，weiboOauth.authResult 中保存授权信息  
	}, function(err) {
    // 登录授权失败  
    // err.code是错误码
	})
}, function(err) {
	// 获取 services 失败
})
```

