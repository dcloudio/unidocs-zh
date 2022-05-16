## UniPush推送图标配置

### 注意：需要手动在manifest.json配置 ，目前仅支持个推 & UniPush配置。
### 5+应用：
+ plus节点 --> distribute节点 --> plugins节点 --> push节点 --> igexin节点（或者unipush节点） --> icons节点 --> small节点下配置

### uni应用：
+ app-plus节点 --> distribute节点 --> plugins节点 --> push节点 --> igexin节点（或者unipush节点） --> icons节点 --> small节点下配置

**UniPush 则把igexin节点修改为 unipush 即可**

### 具体配置信息说明如下：
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
### small图片要求！！
必须是.png格式图片，要有一定的透明度。不按要求的图片无法正常使用 ！！！具体[状态栏图标设计规范](https://developer.android.com/guide/practices/ui_guidelines/icon_design_status_bar)（ 需要翻墙）

![](http://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/push/unipsuh_small_icon_style.png.png)