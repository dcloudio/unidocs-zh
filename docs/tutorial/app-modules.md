App端根据功能划分为不同的模块，项目使用到特定功能时选择包含对应的模块，避免App打包时包含无用的代码或三方SDK，可减少App安装包体积。

可在项目的manifest.json文件的“App模块配置”中根据需求勾选。
![](https://native-res.dcloud.net.cn/images/uniapp/manifest-modules.png)


### 功能模块  

| 模块名称 | 功能 | 说明 | 支持平台 |
| :- | :- | :- | :- |
| Barcode(扫码) | 调用相机扫码功能 | HBuilderX3.6.11+新增 | Android、iOS|
| Bluetooth(低功耗蓝牙) | 使用设备蓝牙功能 |  | Android、iOS |
| Camera&Gallery(相机和相册) | 调用相机拍照，访问或修改相册 | HBuilderX3.6.11+新增 | Android、iOS |
| Contact(通讯录) | 访问或修改系统通讯录 |  | Android、iOS |
| FaceID(人脸识别) | 访问系统人脸识别 |  | iOS |
| Fingerprint(指纹识别) | 访问系统指纹识别 |  | Android、iOS |
| Geolocation(定位) | 获取位置信息 | 需配置三方SDK，[详情](app-geolocation.md) | Android、iOS |
| iBeacon | 访问iBeacon设备 |  | Android、iOS |
| LivePusher(直播推流) | 调用相机录像推流到服务器 |  | Android、iOS |
| Maps(地图) | 使用地图功能 | 需配置三方SDK，[详情](app-maps.md) | Android、iOS |
| Messaging(短彩邮件消息) | 发送短信、彩信、邮件等功能 |  | Android、iOS |
| OAuth(登录鉴权) | 使用三方登录功能 | 需配置三方SDK，[详情](app-oauth.md) | Android、iOS |
| Payment(支付) | 使用三方支付功能 | 需配置三方SDK，[详情](app-payment.md) | Android、iOS |
| Push(消息推送) | 使用消息推送功能 | 需配置三方SDK，[详情](app-push.md) | Android、iOS |
| Record(录音) | 调用麦克风录音 | HBuilderX3.6.11+新增 | Android、iOS |
| Share(分享) | 使用三方分享功能 | 需配置三方SDK，[详情](app-share.md) | Android、iOS |
| Speech(语音输入) | 使用语音识别输入功能 | 需配置三方SDK，[详情](app-speech.md) | Android、iOS |
| Statistic(统计) | 使用三方统计功能 | 需配置三方SDK，[详情](app-statistic.md) | Android、iOS |
| SQLite(数据库) | 使用SQLite数据库功能 |  | Android、iOS |
| uni云端一体安全网络 | 使用安全网络功能 | 需配置uniCloud，[详情](https://uniapp.dcloud.net.cn/uniCloud/secure-network) | Android、iOS |
| VideoPlayer(视频播放) | 使用视频模板功能 |  | Android、iOS |
| Android X5 Webview(腾讯TBS) | 使用腾讯X5 Webview内核 | [详情](app-android-x5.md) | Android |
| iOS UIWebview | 使用UIWebview内核 | [详情](app-ios-uiwebview.md) | iOS |


### 注意事项  

<a id="bcor"/>

为了避免App隐私合规检测报包含麦克风、相机/相册、运动等敏感权限，从HBuilderX3.6.11版本开始，将App打包默认包含的Barcode(扫码)、Camera(相机/相册)、Orientation(传感器)、Record(录音)等调整为独立功能模块。  
更新到HBuilderX3.6.11版本后云端打包时默认将不会包含以上功能，需在manifest.json的“App模块配置”中手动勾选要使用的模块。  
Orientation(传感器)将不再维护，在manifest.json中不提供可视化界面配置，如需继续使用，请在manifest.json的“源码视图”中手动在 "app-plus" -> "modules" 添加 "Orientation"，如下：  
```json
"app-plus" : {
	"modules" : {
		"Orientation": {
			"description": "传感器"
		}
	}
}
```


