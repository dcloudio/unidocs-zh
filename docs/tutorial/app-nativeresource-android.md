# Android原生应用清单文件和资源

app打包，在Android原生开发中提供了配置 AndroidManifest.xml 和 资源目录 assets、res。uni-app中对常用项进行了封装，提供了[manifest.json](https://uniapp.dcloud.net.cn/collocation/manifest-app.html)。

但manifest.json不能包含所有Android的配置。

在HBuilderX 3.6以前，开发者如需使用manifest未封装的配置、或需自定义资源目录 assets、res下的内容，只能离线打包或开发[App原生语言插件](https://nativesupport.dcloud.net.cn/NativePlugin/README)。

HBuilderX3.6.0起，支持直接在应用项目中配置应用清单文件 AndroidManifest.xml 和资源目录 assets、res。


## 应用清单文件 AndroidManifest.xml

在HBuilderX中，对项目根目录右键菜单 "新建" -> "自定义文件"  
![](https://native-res.dcloud.net.cn/images/uniapp/nativeresource/android/newfile.png)

输入文件名称 `AndroidManifest.xml`（注意大小写敏感），点击 “创建” 按钮新建文件
![](https://native-res.dcloud.net.cn/images/uniapp/nativeresource/android/androidmanifest.png)

根据应用需求编辑添加需要的内容，如下示例：
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
- 清单文件必须符合标准的xml格式  
- 清单文件必须符合Android系统规范，详情参考[Google官方AndroidManifest.xml文档](https://developer.android.google.cn/guide/topics/manifest/manifest-intro)  
    * 根节点必须是manifest  
	* 根节点必须添加示例中的XML命名空间 xmlns:android 和 xmlns:tools  
	* 根节点必须配置 package 属性值，建议为云端打包时配置的Android包名  
- AndroidManifest.xml的内容，和manifest.json的内容应避免冲突，即不配置manifest中已经配置过的内容。云端打包时环境清单文件会合并，出现冲突错误时请根据打包日志进行排查



## 应用资源  

HBuilderX中对项目右键菜单 "新建" -> "目录"
![](https://native-res.dcloud.net.cn/images/uniapp/nativeresource/android/newdir.png)

输入名称 `nativeResouces`（注意大小写敏感），确定并创建目录。

继续创建“android”子目录、创建“assets”、“res”二级子目录，结构如下：
![](https://native-res.dcloud.net.cn/images/uniapp/nativeresource/android/directory.png)

将需要添加的Android原生资源文件放到分别拷贝到assets、res目录，云端打包时将会合并到安装包中。

**注意**
- android目录下不支持放java/kotlin源码文件，需要开发源码建议使用[UTS插件](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)或[uni原生语言插件](https://nativesupport.dcloud.net.cn/NativePlugin/README)  
- assets、res目录中的资源不能通过uni API使用，需通过 Android 原生 API 访问，参考[Android应用资源概览](https://developer.android.google.cn/guide/topics/resources/providing-resources)。也就是在uni-app中，访问这些资源需要通过uts代码访问或编写uni原生语言插件。


## 离线打包  
离线打包时应用清单文件和资源需要开发者手动合并到Android原生工程中。


