### 开通  
- 登录[新浪微博开放平台](http://open.weibo.com/)，打开 “移动应用 MOBILE” 页面  
- 在页面中选择 “立即接入”，根据提示填写信息创建应用  
- 创建成功后，在 “我的应用” 中点击应用，可以在应用详情页面   
- 在应用详情页面的 “应用信息” -> “基本信息” 中可获取 App Key，点击编辑可设置iOS平台的通用链接（UniversalLink）  

更多信息详见新浪微博官方文档 [移动应用接入](https://open.weibo.com/wiki/Connect/login)



### 配置  
打开项目的manifest.json文件，在“App模块配置”项的“Share(分享)”下，勾选“新浪微博分享”：
![](https://native-res.dcloud.net.cn/images/uniapp/share/sina-manifest.png)

- appkey  
新浪微博开放平台申请应用的AppKey值  
- redirect_url  
新浪微博开放平台申请应用中设置的回调页  
- UniversalLinks  
iOS平台通用链接，必须与新浪微博开放平台配置的一致，推荐使用[一键生成iOS通用链接](https://uniapp.dcloud.io/api/plugins/universal-links.html)  


**注意**
- HBuilderX中标准真机运行基座使用的是DCloud申请HBuilder应用的AppID等信息，仅用于体验新浪微博分享功能
- 配置参数需提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)


### 使用新浪微博分享  

- uni-app项目  
调用 [uni.share(OBJECT)](api/plugins/share#share) 发起分享操作，OBJECT参数中provider属性值固定为`sinaweibo`
- 5+ App项目  
调用 [plus.share.getServices(successCB,errorCB)](https://www.html5plus.org/doc/zh_cn/share.html#plus.share.getServices) 获取分享服务对象 [ShareService](https://www.html5plus.org/doc/zh_cn/share.html#plus.share.ShareService), 再调用其 [send](https://www.html5plus.org/doc/zh_cn/share.html#plus.share.ShareService.send) 方法发送分享消息  


#### 示例代码  
- uni-app项目  
``` js  
uni.share({
    provider: 'sinaweibo',
	summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
	success: function (res) {
		console.log("success:" + JSON.stringify(res));
	},
	fail: function (err) {
		console.log("fail:" + JSON.stringify(err));
	}
});
```  

- 5+ App项目  
``` js  
var weiboShare = null;
plus.share.getServices(function(services) {
	for (var i in services) {
		var service = services[i];
		// 获取微博分享对象 
		if (service.id == 'sinaweibo') {
			weiboShare = service;
			break;
		}
	}
	weiboShare.send( {
		content: '我正在使用HBuilderX开发App，赶紧跟我一起来体验！'
	}, function(){
		// 分享成功 
	}, function(err) {
    // 分享操作失败  
    // err.code是错误码
	})
}, function(err) {
	// 获取 services 失败
})
```

