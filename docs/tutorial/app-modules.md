App端根据功能划分为不同的模块，项目使用到特定功能时选择包含对应的模块，避免App打包时包含无用的代码或三方SDK，可减少App安装包体积。
The App side is divided into different modules according to the function. When the project uses a specific function, choose to include the corresponding module, avoiding useless code or third-party SDK when the App is packaged, and reducing the size of the App installation package.

可在项目的manifest.json文件的“App模块配置”中根据需求勾选。
![](https://native-res.dcloud.net.cn/images/uniapp/manifest-modules.png)

如果使用了相关API，但没有勾选对应功能模块，在运行时会弹出以下模块缺失提示框：
If the relevant API is used, but the corresponding functional module is not checked, the following module missing prompt box will pop up at runtime:
- 真机运行时  
- real machine runtime
![](https://native-res.dcloud.net.cn/images/uniapp/modules/error-debug.png)
- 打包后运行时  
- When running after packaging
![](https://native-res.dcloud.net.cn/images/uniapp/modules/error-release.png)

> 碰到此情况请勾选对应缺失的模块，并重新提交云端打包  


### 源码视图  
### Source View
HBuilderX新版本中增加的模块在老版本可能不存在可视化配置界面，则可以在源码视图中进行手动配置  
The modules added in the new version of HBuilderX may not have a visual configuration interface in the old version, so they can be manually configured in the source code view
在项目的manifest.json文件的“源码视图”中的 "app-plus" -> "modules" 手动添加：
Manually add in "app-plus" -> "modules" in the "source view" of the project's manifest.json file:
```json
{
"app-plus" : {
	"modules" : {
		"Barcode" : {},
		"Camera" : {}
	},
	//...
},
//...
}
```

> modules下添加项的键名为“模块标识”，可在下面**[功能模块](#功能模块)**中查询到  
> The key name of the added item under modules is "Module ID", which can be found below **[function module](#%E5%8A%9F%E8%83%BD%E6%A8%A1%E5%9D%97) ** found in


### 功能模块  
### functional module  

| 模块名称 | 模块标识 | 功能 | 说明 | 支持平台 |
| Module Name | Module Identifier | Functionality | Description | Supported Platforms |
| :- | :- | :- | :- | :- |
| Barcode(扫码) | Barcode | 调用相机扫码功能 | HBuilderX3.6.11+新增 | Android、iOS|
| Barcode (scan code) | Barcode | Call camera scan code function | HBuilderX3.6.11+ new | Android, iOS|
| Bluetooth(低功耗蓝牙) | Bluetooth | 使用设备蓝牙功能 |  | Android、iOS |
| Bluetooth (Bluetooth Low Energy) | Bluetooth | Use the device's Bluetooth function | | Android, iOS |
| Camera&Gallery(相机和相册) | Camera | 调用相机拍照，访问或修改相册 | HBuilderX3.6.11+新增 | Android、iOS |
| Camera&Gallery (camera and photo album) | Camera | Call the camera to take pictures, access or modify the photo album | HBuilderX3.6.11+ new | Android, iOS |
| Contact(通讯录) | Contact | 访问或修改系统通讯录 |  | Android、iOS |
| Contact (Contacts) | Contact | Access or modify system contacts | | Android, iOS |
| FaceID(人脸识别) | FaceID | 访问系统人脸识别 |  | iOS |
| FaceID (Face Recognition) | FaceID | Access System Face Recognition | | iOS |
| Fingerprint(指纹识别) | Fingerprint | 访问系统指纹识别 |  | Android、iOS |
| Fingerprint | Fingerprint | Access System Fingerprint | | Android, iOS |
| Geolocation(定位) | Geolocation | 获取位置信息 | 需配置三方SDK，[详情](app-geolocation.md) | Android、iOS |
| Geolocation (positioning) | Geolocation | Get location information | Need to configure a third-party SDK, [Details](app-geolocation.md) | Android, iOS |
| iBeacon | iBeacon | 访问iBeacon设备 |  | Android、iOS |
| iBeacon | iBeacon | Access iBeacon Devices | | Android, iOS |
| LivePusher(直播推流) | LivePusher | 调用相机录像推流到服务器 |  | Android、iOS |
| LivePusher (live streaming) | LivePusher | Call camera video to push to the server | | Android, iOS |
| Maps(地图) | Maps | 使用地图功能 | 需配置三方SDK，[详情](app-maps.md) | Android、iOS |
| Maps (map) | Maps | Use the map function | Need to configure a third-party SDK, [Details](app-maps.md) | Android, iOS |
| Messaging(短彩邮件消息) | Messaging | 发送短信、彩信、邮件等功能 |  | Android、iOS |
| Messaging (short color email message) | Messaging | Send SMS, MMS, email and other functions | | Android, iOS |
| OAuth(登录鉴权) | OAuth | 使用三方登录功能 | 需配置三方SDK，[详情](app-oauth.md) | Android、iOS |
| OAuth (login authentication) | OAuth | Use the three-party login function | Need to configure the three-party SDK, [Details](app-oauth.md) | Android, iOS |
| Payment(支付) | Payment | 使用三方支付功能 | 需配置三方SDK，[详情](app-payment.md) | Android、iOS |
| Payment (payment) | Payment | Use the third-party payment function | Need to configure the third-party SDK, [Details](app-payment.md) | Android, iOS |
| Push(消息推送) | Push | 使用消息推送功能 | 需配置三方SDK，[详情](app-push.md) | Android、iOS |
| Push (message push) | Push | Use the message push function | Need to configure a third-party SDK, [Details](app-push.md) | Android, iOS |
| Record(录音) | Record | 调用麦克风录音 | HBuilderX3.6.11+新增 | Android、iOS |
| Record (recording) | Record | Call microphone recording | HBuilderX3.6.11+ new | Android, iOS |
| Share(分享) | Share | 使用三方分享功能 | 需配置三方SDK，[详情](app-share.md) | Android、iOS |
| Share (Share) | Share | Use the three-party sharing function | Need to configure the three-party SDK, [Details](app-share.md) | Android, iOS |
| Speech(语音输入) | Speech | 使用语音识别输入功能 | 需配置三方SDK，[详情](app-speech.md) | Android、iOS |
| Speech (voice input) | Speech | Use speech recognition input function | Need to configure a third-party SDK, [Details](app-speech.md) | Android, iOS |
| Statistic(统计) | Statistic | 使用三方统计功能 | 需配置三方SDK，[详情](app-statistic.md) | Android、iOS |
| Statistic (statistics) | Statistic | Use the three-party statistical function | Need to configure the three-party SDK, [Details](app-statistic.md) | Android, iOS |
| SQLite(数据库) | SQLite | 使用SQLite数据库功能 |  | Android、iOS |
| SQLite (database) | SQLite | Use SQLite database features | | Android, iOS |
| uni云端一体安全网络 | - | 使用安全网络功能 | 需配置uniCloud，[详情](https://uniapp.dcloud.net.cn/uniCloud/secure-network) | Android、iOS |
| uni cloud integrated secure network | - | use secure network function | need to configure uniCloud, [Details](https://uniapp.dcloud.net.cn/uniCloud/secure-network) | Android, iOS |
| VideoPlayer(视频播放) | VideoPlayer | 使用视频模板功能 |  | Android、iOS |
| VideoPlayer (video playback) | VideoPlayer | Use video template function | | Android, iOS |
| Android X5 Webview(腾讯TBS) | Webview-x5 | 使用腾讯X5 Webview内核 | [详情](app-android-x5.md) | Android |
| Android X5 Webview (Tencent TBS) | Webview-x5 | Use Tencent X5 Webview kernel | [Details](app-android-x5.md) | Android |
| iOS UIWebview | UIWebview | 使用UIWebview内核 | [详情](app-ios-uiwebview.md) | iOS |
| iOS UIWebview | UIWebview | Use UIWebview kernel | [Details](app-ios-uiwebview.md) | iOS |
| Orientation(传感器) | Orientation | 方向传感器 | 不再维护 | Android、iOS |
| Orientation (Sensor) | Orientation | Orientation Sensor | No longer maintained | Android, iOS |


### 注意事项  
### Precautions  

<a id="bcor"/>

为了避免App隐私合规检测报包含麦克风、相机/相册、运动等敏感权限，从HBuilderX3.6.11版本开始，将App打包默认包含的Barcode(扫码)、Camera&Gallery(相机和相册)、Orientation(传感器)、Record(录音)等调整为独立功能模块。  
In order to prevent the App privacy compliance detection report from including sensitive permissions such as microphone, camera/photo album, and motion, starting from HBuilderX3.6.11, the App package contains Barcode (scan code), Camera&Gallery (camera and photo album), and Orientation (sensor) by default. , Record (recording), etc. are adjusted as independent functional modules.
更新到HBuilderX3.6.11版本后云端打包时默认将不会包含以上功能，需在manifest.json的“App模块配置”中手动勾选要使用的模块。  
After updating to HBuilderX3.6.11 version, the above functions will not be included by default in cloud packaging. You need to manually check the modules to be used in the "App Module Configuration" of manifest.json.
Orientation(传感器)将不再维护，在manifest.json中不提供可视化界面配置，如需继续使用，请在manifest.json的“源码视图”中手动在 "app-plus" -> "modules" 添加 "Orientation"，如下：  
Orientation (sensor) will no longer be maintained, and no visual interface configuration is provided in manifest.json. If you want to continue using it, please manually add "app-plus" -> "modules" in "source view" of manifest.json Orientation", as follows:
```json
"app-plus" : {
	"modules" : {
		"Orientation": {
			"description": "传感器"
		}
	}
}
```


