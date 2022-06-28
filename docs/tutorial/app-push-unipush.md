### 开通  
- 登录[DCloud开发者中心](https://dev.dcloud.net.cn/)，通过实名认证后，可通过以下入口进入UniPush的Web控制台进行配置
  + HBuilderX中打开项目的manifest.json文件，在“App模块配置”项的“Push(消息推送)”->“UniPush”下点击`配置`
  ![](https://native-res.dcloud.net.cn/images/uniapp/push/unipush-hx-config.png)
  + 登录[DCloud开发者中心](https://dev.dcloud.net.cn/)，在“我创建的应用”列表中选择进入应用管理页面，点击左侧导航栏中的“Uni Push”
  ![](https://native-res.dcloud.net.cn/images/uniapp/push/unipush-web-config.png)
- 在UniPush开通界面配置“Android包名”、“Android应用签名”、“iOS Bundle Id”等信息，点击“开通”
- 开通后可进行其它消息推送参数配置
  + Android平台  
    为了提升App离线送达率，建议配置厂商推送设置
  + iOS平台  
    需配置推送证书，在“UniPush”页面的“配置管理”->“应用配置”可上传推送证书
    

更多信息详见 [UniPush开通指南](https://ask.dcloud.net.cn/article/35716)


### 配置  
在manifest.json文件“App模块配置”项的“Push(消息推送)”下，勾选“UniPush”
![](https://native-res.dcloud.net.cn/images/uniapp/push/unipush-manifest.png)

**注意**  
- UniPush模块需要开通后才能提交云端打包，否则会提示错误，如未开通UniPush不要勾选此模块
- UniPush推送功能需要提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)
- 本地离线打包参考[Android平台UniPush模块配置](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/push)、[iOS平台UniPush模块配置](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/push)


## UniPush推送图标配置@unipush-icons


### UniPush自定义推送图标，可自定义push图标和小图标，位置如下图所示：

![](https://native-res.dcloud.net.cn/images/uniapp/push/custom_push_icon/custom_push_icon_small_instructions.png)



### 注意：需要手动在manifest.json配置 ，目前仅支持个推 & UniPush配置。
### 5+应用：
+ plus节点 --> distribute节点 --> plugins节点 --> push节点 --> igexin节点（或者unipush节点） --> icons节点 --> small节点下配置

```
"plugins": { // 第三方sdk配置
	"push": { // 模块名称
		"igexin": { // 个推SDK参数配置
			"appid": "xxxxxxx", // 个推的appid
			"appkey": "xxxxxxx", // 个推的appkey
			"appsecret": "xxxxxxx", // 个推的appsecret
			"icons": { // 推送图片配置
				"push": { // push图标，规格与应用图片一致，不配置则默认使用push图标
					"ldpi": "可选，48x48",
					"mdpi": "可选，48x48",
					"hdpi": "可选，72x72",
					"xhdpi": "可选，96x96",
					"xxhdpi": "可选，144x144",
					"xxxhdpi": "可选，192x192"
				},
				"small": { //  小图标，png格式图片，仅使用alpha图层
					"ldpi": "可选，18*18",
					"mdpi": "可选，24*24",
					"hdpi": "可选，36*36",
					"xhdpi": "可选，48*48",
					"xxhdpi": "可选，72*72"
				},
				"description": "推送图标"
			},
		}
	}
}
```

### uni应用：
+ app-plus节点 --> distribute节点 --> sdkConfigs节点 --> push节点 --> igexin节点（或者unipush节点） --> icons节点 --> small节点下配置

~~~
"sdkConfigs": {
	"push": {
		"unipush": { 
			"icons": { // 推送图片配置
				"push": { // push图标，规格与应用图片一致，不配置则默认使用push图标
					"ldpi": "可选，48x48",
					"mdpi": "可选，48x48",
					"hdpi": "可选，72x72",
					"xhdpi": "可选，96x96",
					"xxhdpi": "可选，144x144",
					"xxxhdpi": "可选，192x192"
				},
				"small": { //  小图标，png格式图片，仅使用alpha图层
					"ldpi": "可选，18*18",
					"mdpi": "可选，24*24",
					"hdpi": "可选，36*36",
					"xhdpi": "可选，48*48",
					"xxhdpi": "可选，72*72"
				},
				"description": "推送图标"
			},
		}
	}
}

~~~





### 具体配置信息说明如下：

### small图片要求
设计规范需要注意：
1. 必须是带 Alpha 透明通道的 PNG 图片。 
2. 背景必须是透明的。 （如果非透明就会显示为白色方块）




![](http://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/push/unipsuh_small_icon_style.png.png)





### 使用UniPush
- **uni-app项目详细使用教程请参考 [统一推送UniPush](https://uniapp.dcloud.io/unipush)**
- **5+ App、Wap2App项目详细使用教程请参考 [UniPush使用指南](https://ask.dcloud.net.cn/article/35622)**

