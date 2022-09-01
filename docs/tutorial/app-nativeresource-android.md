# Android原生应用清单文件和资源
# Android native application manifest files and resources

app打包，在Android原生开发中提供了配置 AndroidManifest.xml 和 资源目录 assets、res。uni-app中对常用项进行了封装，提供了[manifest.json](https://uniapp.dcloud.net.cn/collocation/manifest-app.html)。
App packaging provides configuration AndroidManifest.xml and resource directories assets and res in Android native development. Common items are encapsulated in uni-app, and [manifest.json](https://uniapp.dcloud.net.cn/collocation/manifest-app.html) is provided.

但manifest.json不能包含所有Android的配置。
But manifest.json cannot contain all Android configuration.

在HBuilderX 3.6以前，开发者如需使用manifest未封装的配置、或需自定义资源目录 assets、res下的内容，只能离线打包或开发[App原生语言插件](https://nativesupport.dcloud.net.cn/NativePlugin/README)。
Before HBuilderX 3.6, if developers need to use the unpackaged configuration of the manifest, or customize the content under assets and res in the resource directory, they can only package or develop the [App native language plugin](https://nativesupport.dcloud. net.cn/NativePlugin/README).

HBuilderX3.6.0起，支持直接在应用项目中配置应用清单文件 AndroidManifest.xml 和资源目录 assets、res。
Since HBuilderX3.6.0, it supports to configure the application manifest file AndroidManifest.xml and resource directories assets and res directly in the application project.


## 应用清单文件 AndroidManifest.xml
## Application manifest file AndroidManifest.xml

在HBuilderX中，对项目根目录右键菜单 "新建" -> "自定义文件"  
![](https://native-res.dcloud.net.cn/images/uniapp/nativeresource/android/newfile.png)

输入文件名称 `AndroidManifest.xml`（注意大小写敏感），点击 “创建” 按钮新建文件
![](https://native-res.dcloud.net.cn/images/uniapp/nativeresource/android/androidmanifest.png)

根据应用需求编辑添加需要的内容，如下示例：
Edit and add the required content according to the application requirements, as shown in the following example:
```
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android" xmlns:tools="http://schemas.android.com/tools" 
  package="io.dcloud.nativeresouce">
    <!--permissions-->

    <application>
        <!--meta-data-->
        <meta-data android:name="My_Custom_Key" android:value="My_Custom_Value"/>

    </application>
</manifest>
```


**注意**
**Notice**
- 清单文件必须符合标准的xml格式  
- Manifest file must conform to standard xml format
- 清单文件必须符合Android系统规范，详情参考[Google官方AndroidManifest.xml文档](https://developer.android.google.cn/guide/topics/manifest/manifest-intro)  
- The manifest file must conform to the Android system specification. For details, please refer to [Google's official AndroidManifest.xml document](https://developer.android.google.cn/guide/topics/manifest/manifest-intro)
    * 根节点必须是manifest  
    * The root node must be manifest
	* 根节点必须添加示例中的XML命名空间 xmlns:android 和 xmlns:tools  
	* The root node must add the XML namespaces xmlns:android and xmlns:tools in the example
	* 根节点必须配置 package 属性值，建议为云端打包时配置的Android包名  
	* The root node must be configured with the value of the package attribute. It is recommended to use the Android package name configured during cloud packaging
- AndroidManifest.xml的内容，和manifest.json的内容应避免冲突，即不配置manifest中已经配置过的内容。云端打包时环境清单文件会合并，出现冲突错误时请根据打包日志进行排查
- The content of AndroidManifest.xml and the content of manifest.json should avoid conflicts, that is, the content that has been configured in the manifest should not be configured. The environment manifest files will be merged during cloud packaging. If there is a conflict error, please check according to the packaging log.



## 应用资源  
## Application resources

HBuilderX中对项目右键菜单 "新建" -> "目录"
![](https://native-res.dcloud.net.cn/images/uniapp/nativeresource/android/newdir.png)

输入名称 `nativeResouces`（注意大小写敏感），确定并创建目录。
Enter the name `nativeResouces` (note that it is case sensitive), identify and create the directory.

继续创建“android”子目录、创建“assets”、“res”二级子目录，结构如下：
![](https://native-res.dcloud.net.cn/images/uniapp/nativeresource/android/directory.png)

将需要添加的Android原生资源文件放到分别拷贝到assets、res目录，云端打包时将会合并到安装包中。
Copy the Android native resource files to be added to the assets and res directories respectively, and they will be merged into the installation package when packaged in the cloud.

**注意**
**Notice**
- android目录下不支持放java/kotlin源码文件，需要开发源码建议使用[UTS插件](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)或[uni原生语言插件](https://nativesupport.dcloud.net.cn/NativePlugin/README)  
- java/kotlin source code files are not supported in the android directory. If you need to develop source code, it is recommended to use [UTS plugin](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html) or [uni native language plugin](https://nativesupport.dcloud.net.cn/NativePlugin/README)
- assets、res目录中的资源不能通过uni API使用，需通过 Android 原生 API 访问，参考[Android应用资源概览](https://developer.android.google.cn/guide/topics/resources/providing-resources)。也就是在uni-app中，访问这些资源需要通过uts代码访问或编写uni原生语言插件。
- The resources in the assets and res directories cannot be used through the uni API and must be accessed through the Android native API. Please refer to [Android Application Resources Overview](https://developer.android.google.cn/guide/topics/resources/providing-resources ). That is, in uni-app, accessing these resources requires accessing or writing uni native language plugins through uts code.


## 离线打包  
## Offline packaging
离线打包时应用清单文件和资源需要开发者手动合并到Android原生工程中。
When packaging offline, the application manifest file and resources need to be manually merged into the Android native project by the developer.


