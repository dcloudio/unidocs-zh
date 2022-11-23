HBuilderX中打开项目的manifest.json文件，在“基础配置”中可以设置App的应用名称、版本号等信息：
![](https://native-res.dcloud.net.cn/images/uniapp/base.png)

<a id="appid"/>

### 应用标识  
DCloud应用appid（简称appid）是由DCloud创建App项目时生成的唯一标识，关联DCloud云端服务，创建项目后会自动生成，不能随意变更。

> 注：这与各家小程序的appid、Apple的appid(bundle id)及其它三方SDK平台申请的appid不同，它们分别属于各自平台的appid体系

更多appid用途详见 [DCloud appid使用说明](https://ask.dcloud.net.cn/article/35907)

#### 本地离线打包  
离线打包时需在原生工程中设置，Android平台参考 [Android Studio工程配置DCloud appid](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/android?id=appid)，iOS平台参考 [XCode工程配置DCloud appid](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/ios?id=appid)


<a id="name"/>

### 应用名称  
应用的名称，发行为App时作为应用桌面图标的名称，支持国际化时请参考 [manifest.json国际化](https://uniapp.dcloud.io/collocation/i18n?id=manifest)

#### 本地离线打包  
离线打包时需在原生工程中设置，Android平台参考 [Android Studio工程配置应用名称](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/android?id=name)，iOS平台参考 [XCode工程配置应用名称](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/ios?id=%e9%85%8d%e7%bd%ae%e5%ba%94%e7%94%a8%e5%90%8d%e7%a7%b0)


<a id="description"/>

### 应用描述  
应用的描述信息，用于简单介绍应用情况，发行为App时不会使用。


<a id="versionname"/>

### 应用版本名称  
应用显示的版本名称，可以使用任何字符串，推荐使用“.”分割的数字表示“主版本号.次版本号.编译版本号”，如“1.1.1234”。云端打包后设置为原生工程的应用版本名称：
- Android平台  
应用清单文件（AndroidManifest.xml）中manifest节点的`android:versionName`属性值，安装到手机后可在“设置”->“应用管理”->“应用信息”中查看
- iOS平台  
应用Info.plist文件中的`CFBundleShortVersionString`字段值，安装到手机后可连接到电脑在iTunes的应用列表中查看。提交AppStore审核时通常跟后台构建的版本号一致，审核失败后重新打包通常不需要修改版本名称。

> 在 App 中可通过 [plus.runtime.version](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.version) 获取应用版本名称。

#### 本地离线打包  
离线打包时需在原生工程中设置，Android平台参考 [Android Studio工程配置应用版本名称](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/android?id=versioncode)，iOS平台参考 [XCode工程配置应用版本名称](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/ios?id=%e9%85%8d%e7%bd%ae%e5%ba%94%e7%94%a8%e7%89%88%e6%9c%ac%e5%90%8d%e7%a7%b0)


<a id="versioncode"/>

### 应用版本号  
应用的内部版本号，必须使用整数，用于记录开发版本的，建议每次发布（云端打包）时更新为比上一次高。如：当前版本是100，下次发布就要大于100，比如101、102等。云端打包后设置为原生工程的应用版本号：
- Android平台  
应用清单文件（AndroidManifest.xml）中manifest节点的`android:versionCode`属性值，安装时只能高版本的安装包覆盖升级低版本的安装包，提交各应用市场时也要求必须更新为比上次高的版本。
- iOS平台  
应用Info.plist文件中的`CFBundleVersion`字段值。每次提交AppStore审核时都必须更新为比上一次高的版本号，审核失败后重新打包也需要更新版本号。

> 在 App 中可通过 [plus.runtime.versionCode](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.versionCode) 获取应用版本号。

#### 本地离线打包  
离线打包时需在原生工程中设置，Android平台参考 [Android Studio工程配置应用版本名称](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/android?id=versionname)，iOS平台参考 [XCode工程配置应用版本号](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/ios?id=%e9%85%8d%e7%bd%ae%e5%ba%94%e7%94%a8%e7%89%88%e6%9c%ac%e5%8f%b7)

