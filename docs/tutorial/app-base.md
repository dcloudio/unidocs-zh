HBuilderX中打开项目的manifest.json文件，在“基础配置”中可以设置App的应用名称、版本号等信息：
![](https://native-res.dcloud.net.cn/images/uniapp/base.png)

<a id="appid"/>

### 应用标识  
### Application ID
DCloud应用appid（简称appid）是由DCloud创建App项目时生成的唯一标识，关联DCloud云端服务，创建项目后会自动生成，不能随意变更。
DCloud application appid (appid for short) is a unique identifier generated when DCloud creates an App project. It is associated with DCloud cloud services and will be automatically generated after the project is created, and cannot be changed at will.

> 注：这与各家小程序的appid、Apple的appid(bundle id)及其它三方SDK平台申请的appid不同，它们分别属于各自平台的appid体系
> Note: This is different from the appid of each applet, Apple's appid (bundle id) and the appid applied for by other third-party SDK platforms, which belong to the appid system of their respective platforms

更多appid用途详见 [DCloud appid使用说明](https://ask.dcloud.net.cn/article/35907)
For more appid uses, please refer to [DCloud appid instructions](https://ask.dcloud.net.cn/article/35907)

#### 本地离线打包  
#### Local offline packaging
离线打包时需在原生工程中设置，Android平台参考 [Android Studio工程配置DCloud appid](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/android?id=appid)，iOS平台参考 [XCode工程配置DCloud appid](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/ios?id=appid)
Offline packaging needs to be set in the native project, Android platform reference [Android Studio project configuration DCloud appid](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/android?id=appid), iOS platform reference [XCode Engineering configuration DCloud appid](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/ios?id=appid)


<a id="name"/>

### 应用名称  
### Application Name  
应用的名称，发行为App时作为应用桌面图标的名称，支持国际化时请参考 [manifest.json国际化](https://uniapp.dcloud.io/collocation/i18n?id=manifest)
The name of the application, which is used as the name of the application desktop icon when it is released as an app. When internationalization is supported, please refer to [manifest.json internationalization](https://uniapp.dcloud.io/collocation/i18n?id=manifest)

#### 本地离线打包  
#### Local offline packaging
离线打包时需在原生工程中设置，Android平台参考 [Android Studio工程配置应用名称](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/android?id=name)，iOS平台参考 [XCode工程配置应用名称](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/ios?id=%e9%85%8d%e7%bd%ae%e5%ba%94%e7%94%a8%e5%90%8d%e7%a7%b0)
Offline packaging needs to be set in the native project, Android platform reference [Android Studio project configuration application name](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/android?id=name), iOS platform reference [XCode Engineering Configuration Application Name](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/ios?id=%e9%85%8d%e7%bd%ae%e5%ba%94%e7%94%a8 %e5%90%8d%e7%a7%b0)


<a id="description"/>

### 应用描述  
### Application Description
应用的描述信息，用于简单介绍应用情况，发行为App时不会使用。
The description information of the application, which is used to briefly introduce the application, and will not be used when it is released as an app.


<a id="versionname"/>

### 应用版本名称  
应用显示的版本名称，可以使用任何字符串，推荐使用“.”分割的数字表示“主版本号.次版本号.编译版本号”，如“1.1.1234”。云端打包后设置为原生工程的应用版本名称：
- Android平台  
- Android platform
应用清单文件（AndroidManifest.xml）中manifest节点的`android:versionName`属性值，安装到手机后可在“设置”->“应用管理”->“应用信息”中查看
The value of the `android:versionName` attribute of the manifest node in the application manifest file (AndroidManifest.xml) can be viewed in "Settings" -> "Application Management" -> "Application Information" after it is installed on the phone
- iOS平台  
- iOS platform
应用Info.plist文件中的`CFBundleShortVersionString`字段值，安装到手机后可连接到电脑在iTunes的应用列表中查看。提交AppStore审核时通常跟后台构建的版本号一致，审核失败后重新打包通常不需要修改版本名称。
Apply the value of the `CFBundleShortVersionString` field in the Info.plist file. After installing it on the phone, you can connect it to the computer and view it in the iTunes application list. When submitting AppStore for review, it is usually the same as the version number of the background build. After the review fails, repackage usually does not need to modify the version name.

> 在 App 中可通过 [plus.runtime.version](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.version) 获取应用版本名称。
> In the app, you can get the app version name through [plus.runtime.version](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.version).

#### 本地离线打包  
#### Local offline packaging
离线打包时需在原生工程中设置，Android平台参考 [Android Studio工程配置应用版本名称](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/android?id=versioncode)，iOS平台参考 [XCode工程配置应用版本名称](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/ios?id=%e9%85%8d%e7%bd%ae%e5%ba%94%e7%94%a8%e7%89%88%e6%9c%ac%e5%90%8d%e7%a7%b0)
Offline packaging needs to be set in the native project, Android platform reference [Android Studio project configuration application version name](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/android?id=versioncode), iOS platform reference [ XCode project configuration application version name](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/ios?id=%e9%85%8d%e7%bd%ae%e5%ba%94%e7%94 %a8%e7%89%88%e6%9c%ac%e5%90%8d%e7%a7%b0)


<a id="versioncode"/>

### 应用版本号  
### Application version number
应用的内部版本号，必须使用整数，用于记录开发版本的，建议每次发布（云端打包）时更新为比上一次高。如：当前版本是100，下次发布就要大于100，比如101、102等。云端打包后设置为原生工程的应用版本号：
The internal version number of the application, which must be an integer, is used to record the development version. It is recommended to update it to a higher value than the previous one each time it is released (cloud packaging). For example: the current version is 100, and the next release will be greater than 100, such as 101, 102, etc. Set the application version number of the native project after cloud packaging:
- Android平台  
- Android platform
应用清单文件（AndroidManifest.xml）中manifest节点的`android:versionCode`属性值，安装时只能高版本的安装包覆盖升级低版本的安装包，提交各应用市场时也要求必须更新为比上次高的版本。
The value of the `android:versionCode` attribute of the manifest node in the application manifest file (AndroidManifest.xml), during installation, only the installation package of the higher version can overwrite the installation package of the lower version. high version.
- iOS平台  
- iOS platform
应用Info.plist文件中的`CFBundleVersion`字段值。每次提交AppStore审核时都必须更新为比上一次高的版本号，审核失败后重新打包也需要更新版本号。
Apply the value of the `CFBundleVersion` field in the Info.plist file. Every time the AppStore is submitted for review, it must be updated to a higher version number than the previous one. After the review fails, the repackaged version number also needs to be updated.

> 在 App 中可通过 [plus.runtime.versionCode](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.versionCode) 获取应用版本号。
> In the app, you can get the app version number through [plus.runtime.versionCode](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.versionCode).

#### 本地离线打包  
#### Local offline packaging
离线打包时需在原生工程中设置，Android平台参考 [Android Studio工程配置应用版本名称](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/android?id=versionname)，iOS平台参考 [XCode工程配置应用版本号](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/ios?id=%e9%85%8d%e7%bd%ae%e5%ba%94%e7%94%a8%e7%89%88%e6%9c%ac%e5%8f%b7)
Offline packaging needs to be set in the native project, Android platform reference [Android Studio project configuration application version name](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/android?id=versionname), iOS platform reference [ XCode project configuration application version number](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/ios?id=%e9%85%8d%e7%bd%ae%e5%ba%94%e7%94 %a8%e7%89%88%e6%9c%ac%e5%8f%b7)

