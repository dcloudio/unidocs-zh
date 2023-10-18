# manifest.json

`manifest.json` 是 uni-app x 项目的配置文件，用于设置应用的名称、版本、图标等信息。在 HBuilderX 中创建项目时此文件保存在根目录。

目前没有内置模块的选择功能。虽然uni-app x的Android基础库体积是7M，但video库无法剥离会显得目前的apk更大。

未来会提供编译器扫描代码摇树，自动引入或剔除不需要的内置模块。

## 配置项列表

<!-- MANIFESTJSON.manifest.description -->

<!-- MANIFESTJSON.manifest.table -->

**注意**
- `appid` 由 DCloud 云端分配，主要用于 DCloud 相关的云服务，请勿自行修改。[详见](https://ask.dcloud.net.cn/article/35907)
- `uni-app-x` 节点必须存在，它是一个项目是否是 uni-app x项目的核心标识。
	* 缺少该节点时，HBuilderX 会把项目识别为 uni-app js引擎版项目（方形项目图标）。
	* 含有该节点时，HBuilderX中的项目图标是圆形的。

### UNI-APP-X配置 @manifest-uni-app-x

<!-- MANIFESTJSON.manifest_uni-app-x.description -->

<!-- MANIFESTJSON.manifest_uni-app-x.table -->


### APP配置 @manifest-app

<!-- MANIFESTJSON.manifest_app.description -->

<!-- MANIFESTJSON.manifest_app.table -->


#### DISTRIBUTE配置 @app-distribute

<!-- MANIFESTJSON.app_distribute.description -->

<!-- MANIFESTJSON.app_distribute.table -->


##### App端图标配置 @distribute-icons

<!-- MANIFESTJSON.distribute_icons.description -->

<!-- MANIFESTJSON.distribute_icons.table -->

**注意**
- App端图片相关配置，建议在HBuilderX中 manifest.json 的可视化界面操作，不推荐手动在源码视图中修改
- manifest中只能配置一个icon。如需在应用发布后动态修改icon，可在插件市场搜索[动态图标插件](https://ext.dcloud.net.cn/search?q=%E5%8A%A8%E6%80%81%E5%9B%BE%E6%A0%87&orderBy=Relevance&cat1=8&cat2=81)。

###### Android图标配置 @icons-android

<!-- MANIFESTJSON.icons_android.description -->

<!-- MANIFESTJSON.icons_android.table -->

###### iOS图标配置 @icons-ios

<!-- MANIFESTJSON.icons_ios.description -->

<!-- MANIFESTJSON.icons_ios.table -->


###### iPhone图标配置 @ios-iphone

<!-- MANIFESTJSON.ios_iphone.description -->

<!-- MANIFESTJSON.ios_iphone.table -->


###### iPad图标配置 @ios-ipad

<!-- MANIFESTJSON.ios_ipad.description -->

<!-- MANIFESTJSON.ios_ipad.table -->


##### ANDROID配置 @distribute-android

<!-- MANIFESTJSON.distribute_android.description -->

<!-- MANIFESTJSON.distribute_android.table -->

**注意**
- `abiFilters` 用于指定应用需要支持的CPU类型，字符串数组类型，字符串可取值"armeabi-v7a"、"arm64-v8a"、"x86"、"x86_64"，默认值为["arm64-v8a"]。
- `minSdkVersion` 用于指定应用运行所需最低 API 级别的整数。如果系统的 API 级别低于该属性中指定的值，Android 系统将阻止用户安装应用。
- `targetSdkVersion` 一个用于指定应用的目标 API 级别的整数。如果未设置，其默认值与为 minSdkVersion 指定的值相等。该值用于通知系统，您已针对目标版本进行了测试，并且系统不应通过启用任何兼容性行为，以保持您的应用与目标版本的向前兼容性。
- `minSdkVersion` 和 `targetSdkVersion` 设置的值是 API 级别（API Level），完整API级别信息请参考[Android API级别说明](https://developer.android.com/guide/topics/manifest/uses-sdk-element?hl=zh-cn#ApiLevels)

##### IOS配置 @distribute-ios

<!-- MANIFESTJSON.distribute_ios.description -->

<!-- MANIFESTJSON.distribute_ios.table -->


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
