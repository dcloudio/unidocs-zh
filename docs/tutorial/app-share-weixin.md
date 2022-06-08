### 开通  
- 登录[微信开放平台](https://open.weixin.qq.com/)，添加移动应用并提交审核，审核通过后可获取应用ID（AppID）
- 在应用详情中确认已获取`分享到朋友圈`、`分享给朋友`等接口
- 在HBuilderX中配置appid、iOS通用链接后即可打包使用微信分享功能

更多信息详见微信官方文档 [分享与收藏功能](https://developers.weixin.qq.com/doc/oplatform/Mobile_App/Share_and_Favorites/Share_and_Favorites.html)



### 配置  
打开项目的manifest.json文件，在“App模块配置”项的“Share(分享)”下，勾选“微信分享”：
![](https://native-res.dcloud.net.cn/images/uniapp/share/weixin-manifest.png)

- appid  
微信开放平台申请应用的AppID值  
- UniversalLinks  
iOS平台通用链接，必须与微信开放平台配置的一致，推荐使用[一键生成iOS通用链接](https://uniapp.dcloud.io/api/plugins/universal-links.html)  


**注意**
- HBuilderX中标准真机运行基座使用的是DCloud申请HBuilder应用的AppID等信息，仅用于体验微信分享功能
- 配置参数需提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)


### 使用微信分享  

- uni-app项目  
调用 [uni.share(OBJECT)](api/plugins/share#share) 发起分享操作，OBJECT参数中provider属性值固定为`weixin`
- 5+ App项目  
调用 [plus.share.getServices(successCB,errorCB)](https://www.html5plus.org/doc/zh_cn/share.html#plus.share.getServices) 获取分享服务对象 [ShareService](https://www.html5plus.org/doc/zh_cn/share.html#plus.share.ShareService), 再调用其 [send](https://www.html5plus.org/doc/zh_cn/share.html#plus.share.ShareService.send) 方法发送分享消息  


#### 示例代码  
- uni-app项目  
``` js  
uni.share({
	provider: "weixin",
	scene: "WXSceneSession",
	type: 1,
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
var weixinShare = null;
plus.share.getServices(function(services) {
	for (var i in services) {
		var service = services[i];
		// 获取微信分享对象 
		if (service.id == 'weixin') {
			weixinShare = service;
			break;
		}
	}
	weixinShare.send( {
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

