## UniPush推送图标配置
## UniPush push icon configuration



### UniPush自定义推送图标，可自定义push图标和小图标，位置如下图所示：
### UniPush custom push icon, you can customize the push icon and small icon, the position is shown in the following figure:

![](https://native-res.dcloud.net.cn/images/uniapp/push/custom_push_icon/custom_push_icon_small_instructions.png)



### 注意：需要手动在manifest.json配置 ，目前仅支持个推 & UniPush配置。
### Note: You need to manually configure in manifest.json, currently only supports UniPush & UniPush configuration.
### 5+应用：
### 5+ Apps:
+ plus节点 --> distribute节点 --> plugins节点 --> push节点 --> igexin节点（或者unipush节点） --> icons节点 --> small节点下配置
+ plus node --> distribute node --> plugins node --> push node --> igexin node (or unipush node) --> icons node --> small node configuration

```json
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
### uni application:
+ app-plus节点 --> distribute节点 --> sdkConfigs节点 --> push节点 --> igexin节点（或者unipush节点） --> icons节点 --> small节点下配置
+ app-plus node --> distribute node --> sdkConfigs node --> push node --> igexin node (or unipush node) --> icons node --> small node configuration

```json
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

```





### 具体配置信息说明如下：
### The specific configuration information is described as follows:

### small图片要求
### small image requirements
设计规范需要注意：
Design specifications need to pay attention to:
1. 必须是带 Alpha 透明通道的 PNG 图片。 
1. Must be a PNG image with an alpha transparency channel.
2. 背景必须是透明的。 （如果非透明就会显示为白色方块）
2. The background must be transparent. (If it is not transparent, it will be displayed as a white square)




![](http://native-res.dcloud.net.cn/images/uniapp/push/unipsuh_small_icon_style.png.png)


