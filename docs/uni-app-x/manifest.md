# manifest.json  
`manifest.json` 是 uni-app x 项目的配置文件，用于设置应用的名称、版本、图标等信息。在 HBuilderX 中创建项目时此文件保存在根目录。

目前没有内置模块的选择功能。虽然uni-app x的Android基础库体积是7M，但video库无法剥离会显得目前的apk更大。

未来会提供编译器扫描代码摇树，自动引入或剔除不需要的内置模块。

## 配置项列表  
|属性		|类型					|默认值			|描述								|最低版本			|
|:-			|:-						|:-				|:-									|:-					|
|name		|String					|-				|应用名称							|3.9.0				|
|appid		|String					|-				|应用标识，新建项目时DCloud云端分配	|3.9.0				|
|description|String					|-				|应用描述							|3.9.0				|
|versionName|String					|-				|版本名称，例如：1.0.0				|3.9.0				|
|versionCode|String					|-				|版本号，仅包含数字字符，例如：100		|3.9.0				|
|uni-app-x	|[UNI-APP-X配置](#uniappx)	|- 			|uni-app x项目配置					|3.9.0				|
|app		|[APP配置](#app)		|- 					|App项目（原生App端）配置				|3.9.0				|

**注意**  
- `appid` 由 DCloud 云端分配，主要用于 DCloud 相关的云服务，请勿自行修改。[详见](https://ask.dcloud.net.cn/article/35907)
- `uni-app-x` 节点必须存在，它是一个项目是否是 uni-app x项目的核心标识。
	* 缺少该节点时，HBuilderX 会把项目识别为 uni-app js引擎版项目（方形项目图标）。
	* 含有该节点时，HBuilderX中的项目图标是圆形的。


### UNI-APP-X配置@uniappx  
存在uni-app-x节点则表示为uni-app x项目  

|属性			|类型					|默认值			|描述								|最低版本			|
|:-				|:-						|:-				|:-									|:-					|
|flex-direction	|String					|column			|uvue页面默认flex排列方向，可取值：row：从左到右； row-reverse：从右到左；column：从上到下；column-reverse：与 column 相反|3.9.0				|


### APP配置@app  
App端（原生App）配置  

|属性			|类型					|默认值			|描述								|最低版本			|
|:-				|:-						|:-				|:-									|:-					|
|distribute		|[DISTRIBUTE配置](#distribute)	|-		|App端发布配置						|3.9.0				|


### DISTRIBUTE配置@distribute  
App端发布配置  

|属性			|类型					|默认值			|描述								|最低版本			|
|:-				|:-						|:-				|:-									|:-					|
|syncDebug		|Boolean				|false			|是否为自定义调试基座				|3.9.0				|
|icons			|[ICONS配置](#icons)	|-				|App端应用图标配置					|3.9.0				|
|android		|[ANDROID配置](#android)|-				|App-Android端发布配置				|3.9.0				|
|ios			|[IOS配置](#ios)		|-				|App-iOS端发布配置					|3.9.0				|


### ICONS配置@icons  
App端图标配置  

|属性			|类型					|默认值			|描述								|最低版本			|
|:-				|:-						|:-				|:-									|:-					|
|android		|[Android平台图标配置](#icons-android)|-	|App-Android端图标配置				|3.9.0				|

**注意**  
- App端图片相关配置，建议在HBuilderX中 manifest.json 的可视化界面操作，不推荐手动在源码视图中修改  
- manifest中只能配置一个icon。如需在应用发布后动态修改icon，可在插件市场搜索[动态图标插件](https://ext.dcloud.net.cn/search?q=%E5%8A%A8%E6%80%81%E5%9B%BE%E6%A0%87&orderBy=Relevance&cat1=8&cat2=81)。

#### Android平台图标配置@icons-android  

|属性			|类型					|默认值			|描述								|最低版本			|
|:-				|:-						|:-				|:-									|:-					|
|hdpi			|String					|-				|高分屏设备程序图标，分辨率要求72x72	|3.9.0				|
|xhdpi			|String					|-				|720P高分屏设备程序图标，分辨率要求96x96	|3.9.0			|
|xxhdpi			|String					|-				|1080P高分屏设备程序图标，分辨率要求144x144	|3.9.0		|
|xxxhdpi		|String					|-				|2K屏设备程序图标，分辨率要求192x192	|3.9.0				|

### ANDROID配置@android  
App-Android端发布配置  

|属性			|类型					|默认值			|描述								|最低版本			|
|:-				|:-						|:-				|:-									|:-					|
|packagename	|String					|-				|Android包名						|3.9.0				|
|keystore		|String					|-				|证书库文件路径，相对于.manifest目录	|3.9.0				|
|storepwd		|String					|-				|证书库文件密码						|3.9.0				|
|aliasname		|String					|-				|证书别名							|3.9.0				|
|keypwd			|String					|-				|证书密码							|3.9.0				|
|abiFilters		|Array<String>			|-				|支持的CPU类型						|3.9.0				|
|minSdkVersion	|String					|-				|最低Android版本（Android API Level）|3.9.0				|
|targetSdkVersion	|String				|-				|目标版本（Android API Level）		|3.9.0				|

**注意**  
- `minSdkVersion` 用于指定应用运行所需最低 API 级别的整数。如果系统的 API 级别低于该属性中指定的值，Android 系统将阻止用户安装应用。  
- `targetSdkVersion` 一个用于指定应用的目标 API 级别的整数。如果未设置，其默认值与为 minSdkVersion 指定的值相等。该值用于通知系统，您已针对目标版本进行了测试，并且系统不应通过启用任何兼容性行为，以保持您的应用与目标版本的向前兼容性。  
- `minSdkVersion` 和 `targetSdkVersion` 设置的值是 API 级别（API Level），完整API级别信息请参考[Android API级别说明](https://developer.android.com/guide/topics/manifest/uses-sdk-element?hl=zh-cn#ApiLevels)  
- `keystore`、`storepwd`、`aliasname`、`keypwd`为云端打包证书相关配置，在HBuilderX中提交云端打包时使用，不要手动修改  


### IOS配置@ios  
App-iOS端发布配置  

|属性			|类型					|默认值			|描述								|最低版本			|
|:-				|:-						|:-				|:-									|:-					|
|appid			|String					|-				|iOS Bundle ID						|3.9.0				|


## 示例  
```json
{
    "name" : "uni-app x",
    "appid" : "__UNI__XXXXXXX",
    "description" : "描述信息",
    "versionName" : "1.0.0",
    "versionCode" : "100",
    "uni-app-x":{
      "flex-direction": "column"  
    },
    "vueVersion" : "3",
	"app": {
		"distribute": {
			"syncDebug": true,
			"android": {
				"packagename": "Android包名",
				"abiFilters": [
					"armeabi-v7a","arm64-v8a"
				],
				"minSdkVersion": "21",
				"targetSdkVersion": "32"
			},
			"ios": {
				"appid": "iOS Bundle ID"
			}
		}
	}
}
```

