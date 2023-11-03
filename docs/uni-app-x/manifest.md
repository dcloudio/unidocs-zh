# manifest.json

`manifest.json` 是 uni-app x 项目的配置文件，用于设置应用的名称、版本、图标等信息。在 HBuilderX 中创建项目时此文件保存在根目录。

uni-app x 目前不支持配置splash图，因uni-app x打包后启动速度非常快，可以自己做一个简单的uvue页面来当做splash。

uni-app x 的权限配置，移入了[AndroidManifest.xml](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android.html)中。

uni-app x 不再提供内置模块选择，而是提供了摇树机制自动选择内置模块，具体[见下](#treeShaking)。

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

## 模块的摇树@treeShaking

uni-app x的Android基础库体积是7M，打包后的apk体积是基础库的体积加上开发者的代码及代码引用的模块的体积。有些模块涉及so库，覆盖的cpu指令越多，包体积越大。

在uni-app js引擎版中，内置模块如video，是开发者在manifest.json中手动勾选配置的。

但在uni-app x中，不需要手动配置。

HBuilderX3.93版本起，编译器支持扫描代码，摇树treeShaking，自动引入或剔除不需要的内置模块。

如应用中没有使用video组件相关功能，将不再包含video内置模块，减少安装包体积。

**摇树注意事项：**  
当你打包自定义基座时，如果你的工程代码没有使用video、定位、相册、摄像头等涉及三方sdk或敏感权限的api，打出的自定义基座包就不会包含这些组件和api的功能，那么在这些自定义基座上运行时，调用相关的组件和api就会报错。\
此时您需要在工程中写相关的代码，如引用video组件或调用定位api，保存代码后重新打包自定义基座，才会包含相关模块。

您在工程中下载的ext api、三方uts插件也同理，没有引用就不会打进去。

### App端支持摇树的内置模块列表

- uni-network  
  网络请求（文件上传/下载）模块，包括API：[uni.downloadFile](./api/download-file.md)、[uni.request](./api/request.md)、[uni.uploadFile](./api/upload-file.md)  
  依赖的模块：无  

- uni-getLocation-system  
  系统定位模块，包括API：[uni.getLocation](./api/get-location.md)  
  依赖的模块：无  

- uni-video  
  [video视频组件](./component/video.md)模块，包括内置组件：[video](./component/video.md)；包括API：[uni.createVideoContext](./api/create-video-context.md)  

- uni-media  
  多媒体相关API模块，包括API：[uni.chooseImage](./api/choose-image.md)、[uni.previewImage](./api/preview-image.md)、[uni.saveImageToPhotosAlbum](./api/save-image-to-photos-album.md)  
  依赖的模块：无  

- uni-cloud-client  
  调用uniCloud[云函数/云对象](../uniCloud/cf-functions.md)模块，包括API：[uniCloud.importObject](../uniCloud/cloud-obj.md#%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%B0%83%E7%94%A8)、[uniCloud.callFunction](../uniCloud/cf-callfunction.md#callfunction%E6%96%B9%E6%B3%95)  
  依赖的模块：uni-media、uni-network  

- uni-push  
  [uni-push统一推送](../unipush-v2.md)模块（`HBuilderX3.97+`），包括API：[uni.createPushMessage](../api/plugins/push.md#createpushmessage)、[uni.getPushClientId](../api/plugins/push.md#getpushclientid)、[uni.offPushMessage](../api/plugins/push.md#offpushmessage)、[uni.onPushMessage](../api/plugins/push.md#onpushmessage)  
  依赖的模块：无  

- uni-facialRecognitionVerify  
  [uni实人认证](../uniCloud/frv/intro.md)模块，包括API：[uni.getFacialRecognitionMetaInfo](../api/plugins/facialRecognitionVerify.md#getfacialrecognitionmetainfo)、[uni.startFacialRecognitionVerify](../api/plugins/facialRecognitionVerify.md#startfacialrecognitionverify)  
  依赖的模块：无

再次强调，以上模块不属于ext组件或api，是内置模块。但如果你的代码中没有使用这些组件和api，打正式包或自定义基座时会被摇掉。