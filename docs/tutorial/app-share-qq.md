### 开通  
- 登录[腾讯开放平台](https://connect.qq.com/index.html)，打开 “应用管理” -> “移动应用” 页面  
- 在页面中选择 “创建应用” -> “创建移动应用”，根据提示填写信息创建应用
- 创建成功后，在应用详情中页面可以获取 APP ID
- 在应用详情页面的 “基本信息” -> “平台信息” 中，点击“修改”可以设置iOS平台的通用链接（UniversalLink）

更多信息详见QQ官方文档 [移动应用接入概述](https://wiki.connect.qq.com/%e7%a7%bb%e5%8a%a8%e5%ba%94%e7%94%a8%e6%8e%a5%e5%85%a5%e6%a6%82%e8%bf%b0)



### 配置  
打开项目的manifest.json文件，在“App模块配置”项的“Share(分享)”下，勾选“QQ分享”：
![](https://native-res.dcloud.net.cn/images/uniapp/share/qq-manifest.png)

- appid  
QQ开放平台申请应用的AppID值  
- UniversalLinks  
iOS平台通用链接，必须与QQ开放平台配置的一致，推荐使用[一键生成iOS通用链接](https://uniapp.dcloud.io/api/plugins/universal-links.html)  


**注意**
- HBuilderX中标准真机运行基座使用的是DCloud申请HBuilder应用的AppID等信息，仅用于体验QQ分享功能
- 配置参数需提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)


### 使用QQ分享  

- uni-app项目  
调用 [uni.share(OBJECT)](api/plugins/share#share) 发起分享操作，OBJECT参数中provider属性值固定为`qq`
- 5+ App项目  
调用 [plus.share.getServices(successCB,errorCB)](https://www.html5plus.org/doc/zh_cn/share.html#plus.share.getServices) 获取分享服务对象 [ShareService](https://www.html5plus.org/doc/zh_cn/share.html#plus.share.ShareService), 再调用其 [send](https://www.html5plus.org/doc/zh_cn/share.html#plus.share.ShareService.send) 方法发送分享消息  


#### 示例代码  
- uni-app项目  
``` js  
uni.share({
    provider: 'qq',
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
var qqShare = null;
plus.share.getServices(function(services) {
	for (var i in services) {
		var service = services[i];
		// 获取QQ分享对象 
		if (service.id == 'qq') {
			qqShare = service;
			break;
		}
	}
	qqShare.send( {
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

