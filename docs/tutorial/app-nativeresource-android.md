# Android原生应用清单文件和资源
# Android native application manifest files and resources

Android平台云端打包时会根据应用[manifest.json](https://uniapp.dcloud.net.cn/collocation/manifest-app.html)文件中的配置自动生成需要的原生应用清单文件 AndroidManifest.xml 和资源目录 assets、res，开发者如果需要自定义添加清单文件内容和资源则只能开发[uni原生插件](https://nativesupport.dcloud.net.cn/NativePlugin/README)
When the Android platform is packaged in the cloud, the required native application manifest files AndroidManifest.xml and The resource directory assets, res, if developers need to customize the content and resources of the manifest file, they can only develop [uni native plugin](https://nativesupport.dcloud.net.cn/NativePlugin/README)

HBuilderX3.6.0+版本开始支持直接在应用项目中配置应用清单文件 AndroidManifest.xml 和资源目录 assets、res
HBuilderX 3.6.0+ version starts to support configuring the application manifest file AndroidManifest.xml and resource directories assets, res directly in the application project



## 应用清单文件 AndroidManifest.xml
## Application manifest file AndroidManifest.xml
在HBuilderX中打开项目，根目录右键菜单 "新建" -> "自定义文件"  
![](https://native-res.dcloud.net.cn/images/uniapp/nativeresource/android/newfile.png)

输入文件名称 “AndroidManifest.xml”，点击 “创建” 按钮新建文件
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
- 云端打包环境清单文件会合并，需注意避免冲突，出现错误时请根据打包日志进行排查  
- The list files of the cloud packaging environment will be merged. Please pay attention to avoid conflicts. If there is an error, please check according to the packaging log.



## 应用资源  
## Application resources
在HBuilderX中打开项目，右键菜单 "新建" -> "目录"
![](https://native-res.dcloud.net.cn/images/uniapp/nativeresource/android/newdir.png)

输入名称 “nativeResouces”，确定并创建目录  
Enter the name "nativeResouces", identify and create the directory
按相同方法创建“android”子目录及“assets”、“res”二级子目录，结构如下：
![](https://native-res.dcloud.net.cn/images/uniapp/nativeresource/android/directory.png)

将需要添加的Android原生资源文件放到分别拷贝到assets、res目录，云端打包时将会合并到安装包中。
Copy the Android native resource files to be added to the assets and res directories respectively, and they will be merged into the installation package when packaged in the cloud.

**注意**
**Notice**
- android目录下不支持放java/kotlin源码文件，需要开发源码建议使用[UTS插件](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)或[Uni原生插件](https://nativesupport.dcloud.net.cn/NativePlugin/README)  
- The java/kotlin source code file is not supported in the android directory. It is recommended to use [UTS plugin](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html) or [Uni native plugin]( https://nativesupport.dcloud.net.cn/NativePlugin/README)
- assets、res目录中的资源不能使用uni API使用，需通过 Android 原生 API 访问，详情参考[Android应用资源概览](https://developer.android.google.cn/guide/topics/resources/providing-resources)
- The resources in the assets and res directories cannot be used using the uni API and must be accessed through the Android native API. For details, please refer to [Android Application Resources Overview](https://developer.android.google.cn/guide/topics/resources/providing- resources)


## 离线打包  
## Offline packaging
离线打包时应用清单文件和资源需要开发者手动合并到Android原生工程中。
When packaging offline, the application manifest file and resources need to be manually merged into the Android native project by the developer.


