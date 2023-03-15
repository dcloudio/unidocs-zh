用户代理（User Agent，简称 UA），是http/https网络请求头中的一个特殊字符串，使服务器能够识别客户端使用的操作系统及版本、浏览器渲染引擎、内核版本等信息。uni-app中的vue页面使用系统Webview渲染，为了保持一致，App端所有http/https网络请求头使用统一的User Agent。  
API包括[uni.request](https://uniapp.dcloud.net.cn/api/request/request.html#request)、[uni.uploadFile](https://uniapp.dcloud.net.cn/api/request/network-file.html#uploadfile)、[uni.downloadFile](https://uniapp.dcloud.net.cn/api/request/network-file.html#downloadfile)等  
组件包括[image](https://uniapp.dcloud.net.cn/component/image.html)、[web-view](https://uniapp.dcloud.net.cn/component/web-view.html)等。

### 默认User Agent  
默认情况使用系统Webview的User Agent，并添加Html5Plus/1.0、uni-app两字段  
- Android平台，在荣耀Play4T手机上默认值为：  
```
Mozilla/5.0 (Linux; Android 10; AKA-AL10 Build/HONORAKA-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.93 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/34.5)
```

使用[Android X5 Webview(腾讯TBS)](https://uniapp.dcloud.net.cn/tutorial/app-android-x5.html)，则在X5的User Agent后添加Html5Plus/1.0、uni-app字段：
```
Mozilla/5.0 (Linux; Android 10; AKA-AL10 Build/HONORAKA-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045738 uni-app Html5Plus/1.0 (Immersed/34.5)
```

- iOS平台，在iPhone 12手机上默认值为：  
```
Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Html5Plus/1.0 (Immersed/20) uni-app
```


### 自定义User Agent  
如需自定义User Agent，在项目的 manifest.json 中 "app-plus" -> "useragent" 进行配置，支持以下属性：
- value  
字符串类型，表示要添加的自定义User Agent值  
- concatenate  
boolean类型， true表示在默认User Agent基础上添加额外字段，false表示替换默认User Agent  

注意：
- 如需单独定义Android平台的User Agent，可设置"useragent_android"，在Android平台存在"useragent_android"时会覆盖"useragent"配置  
- 如需单独定义iOS平台的User Agent，可设置"useragent_ios"，在iOS平台存在"useragent_ios"时会覆盖"useragent"配置  
- 配置自定义User Agent后需提交云端打包才能生效  

#### 在默认User Agent中添加额外字段  
如需在默认User Agent中添加myua字段，可配置如下：  
```json
{
	"app-plus": {
		"useragent": {
			"value": "myua",
			"concatenate": true
		}
	}
}
```

#### 替换默认User Agent  
如需完全自定义User Agent为"CustomUA"，可配置如下：  
```json
{
	"app-plus": {
		"useragent": {
			"value": "CustomUA",
			"concatenate": false
		}
	}
}
```

`注意：此时默认UA信息中的操作系统及版本、浏览器渲染引擎、内核版本等信息将丢失，实际项目中不建议使用替换默认User Agent。`


