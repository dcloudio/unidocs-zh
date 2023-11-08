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
打开项目的manifest.json文件，在“App模块配置”项的“Share(分享)”下，勾选“QQ分享”：
![](https://native-res.dcloud.net.cn/images/uniapp/share/qq-manifest.png)

- appid  
QQ开放平台申请应用的AppID值  
AppID value of the application applied by the QQ open platform
- UniversalLinks  
iOS平台通用链接，必须与QQ开放平台配置的一致，推荐使用[一键生成iOS通用链接](https://uniapp.dcloud.io/api/plugins/universal-links.html)  
The universal link of the iOS platform must be consistent with the configuration of the QQ open platform. It is recommended to use [Generate iOS universal link with one click](https://uniapp.dcloud.io/api/plugins/universal-links.html)


**注意**
**Notice**
- HBuilderX中标准真机运行基座使用的是DCloud申请HBuilder应用的AppID等信息，仅用于体验QQ分享功能
- The standard real machine running base in HBuilderX uses the AppID and other information that DCloud applies for the HBuilder application, which is only used to experience the QQ sharing function
- 配置参数需提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)
- The configuration parameters need to be submitted to the cloud to be packaged to take effect. Please use the [custom debugging base] when the real machine is running (https://ask.dcloud.net.cn/article/35115)


### 使用QQ分享  
### Share using QQ

- uni-app项目  
- uni-app project
调用 [uni.share(OBJECT)](api/plugins/share#share) 发起分享操作，OBJECT参数中provider属性值固定为`qq`
Call [uni.share(OBJECT)](api/plugins/share#share) to initiate a share operation. The value of the provider attribute in the OBJECT parameter is fixed to `qq`
- 5+ App项目  
- 5+ App items
调用 [plus.share.getServices(successCB,errorCB)](https://www.html5plus.org/doc/zh_cn/share.html#plus.share.getServices) 获取分享服务对象 [ShareService](https://www.html5plus.org/doc/zh_cn/share.html#plus.share.ShareService), 再调用其 [send](https://www.html5plus.org/doc/zh_cn/share.html#plus.share.ShareService.send) 方法发送分享消息  
Call [plus.share.getServices(successCB,errorCB)](https://www.html5plus.org/doc/zh_cn/share.html#plus.share.getServices) to get the sharing service object [ShareService](https:// www.html5plus.org/doc/zh_cn/share.html#plus.share.ShareService), then call its [send](https://www.html5plus.org/doc/zh_cn/share.html#plus.share. ShareService.send) method to send share message


#### 示例代码  
#### Sample code
- uni-app项目  
- uni-app project
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
- 5+ App items
``` js  
var qqShare = null;
plus.share.getServices(function(services) {
	for (var i in services) {
		var service = services[i];
		// 获取QQ分享对象 
		// Get QQ share object
		if (service.id == 'qq') {
			qqShare = service;
			break;
		}
	}
	qqShare.send( {
		content: '我正在使用HBuilderX开发App，赶紧跟我一起来体验！'
	}, function(){
		// 分享成功 
		// share successfully
	}, function(err) {
    // 分享操作失败  
    // share operation failed
    // err.code是错误码
    // err.code is the error code
	})
}, function(err) {
	// 获取 services 失败
	// Failed to get services
})
```

