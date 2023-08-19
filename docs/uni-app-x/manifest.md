# manifest.json  
`manifest.json` 是 uni-app x 项目的配置文件，用于设置应用的名称、版本、图标等信息。在 HBuilderX 中创建项目时此文件保存在根目录。

## 配置项列表  
|属性		|类型					|默认值			|描述								|最低版本			|
|:-			|:-						|:-				|:-									|:-					|
|name		|String					|-				|应用名称							|					|
|appid		|String					|-				|应用标识，新建项目时DCloud云端分配	|					|
|description|String					|-				|应用描述							|					|
|versionName|String					|-				|版本名称，例如：1.0.0				|					|
|versionCode|String					|-				|版本号，仅包含数字字符，例如：100		|					|
|uni-app-x	|[UNI-APP-X配置](#uniappx)	|- 		|uni-app x项目配置					|					|
|app		|[APP配置](#app)		|- 				|App项目（原生App端）配置				|					|

**注意**  
- `appid` 由 DCloud 云端分配，主要用于 DCloud 相关的云服务，请勿自行修改。[详见](https://ask.dcloud.net.cn/article/35907)
- `uni-app-x` 必须存在，没有此节点 HBuilderX 将无法识别为 uni-app x项目


### UNI-APP-X配置@uniappx  
存在uni-app-x节点则表示为uni-app x项目  

|属性			|类型					|默认值			|描述								|最低版本			|
|:-				|:-						|:-				|:-									|:-					|
|singleThread	|Boolean				|true			|是否为单线程模式						|					|
|flex-direction	|String					|column			|uvue页面默认flex排列方向，可取值：row：从左到右； row-reverse：从右到左；column：从上到下；column-reverse：与 column 相反|					|


### APP配置@app  
App端（原生App）配置  

|属性			|类型					|默认值			|描述								|最低版本			|
|:-				|:-						|:-				|:-									|:-					|
|distribute		|[DISTRIBUTE配置](#distribute)	|-	|App端发布配置						|					|


### DISTRIBUTE配置@distribute  
App端发布配置  

|属性			|类型					|默认值			|描述								|最低版本			|
|:-				|:-						|:-				|:-									|:-					|
|syncDebug		|Boolean				|false			|是否为自定义调试基座					|					|
|android		|[ANDROID配置](#android)	|-			|App-Android端发布配置				|					|
|ios			|[IOS配置](#ios)		|-				|App-iOS端发布配置					|					|


### ANDROID配置@android  
App-Android端发布配置  

|属性			|类型					|默认值			|描述								|最低版本			|
|:-				|:-						|:-				|:-									|:-					|
|packagename	|String					|-				|Android包名							|					|
|keystore		|String					|-				|证书库文件路径，相对于.manifest目录	|					|
|storepwd		|String					|-				|证书库文件密码						|					|
|aliasname		|String					|-				|证书别名							|					|
|keypwd			|String					|-				|证书密码							|					|
|abiFilters		|Array<String>			|-				|支持的CPU类型						|					|
|minSdkVersion	|String					|-				|最低Android版本（Android API Level）|					|
|targetSdkVersion	|String				|-				|目标版本（Android API Level）		|					|

**注意**  
- `minSdkVersion` 用于指定应用运行所需最低 API 级别的整数。如果系统的 API 级别低于该属性中指定的值，Android 系统将阻止用户安装应用。  
- `targetSdkVersion` 一个用于指定应用的目标 API 级别的整数。如果未设置，其默认值与为 minSdkVersion 指定的值相等。该值用于通知系统，您已针对目标版本进行了测试，并且系统不应通过启用任何兼容性行为，以保持您的应用与目标版本的向前兼容性。  
- `minSdkVersion` 和 `targetSdkVersion` 设置的值是 API 级别（API Level），完整API级别信息请参考[Android API级别说明](https://developer.android.com/guide/topics/manifest/uses-sdk-element?hl=zh-cn#ApiLevels)  


### IOS配置@ios  
App-iOS端发布配置  

|属性			|类型					|默认值			|描述								|最低版本			|
|:-				|:-						|:-				|:-									|:-					|
|appid			|String					|-				|iOS Bundle ID						|					|


## 示例  
```json
{
    "name" : "uni-app x",
    "appid" : "__UNI__XXXXXXX",
    "description" : "描述信息",
    "versionName" : "1.0.0",
    "versionCode" : "100",
    "uni-app-x":{
      "enable": true  
    },
    "vueVersion" : "3",
	"app": {
		"distribute": {
			"syncDebug": true,
			"android": {
				"packagename": "Android包名",
				"keystore": "证书库文件路径",
				"storepwd": "证书库密码",
				"aliasname": "证书别名",
				"keypwd": "证书密码",
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

