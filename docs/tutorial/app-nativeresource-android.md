# Android原生应用清单文件和资源

app打包，在Android原生开发中提供了配置 AndroidManifest.xml 和 资源目录 assets、res。uni-app中对常用项进行了封装，提供了[manifest.json](https://uniapp.dcloud.net.cn/collocation/manifest-app.html)。

但manifest.json不能包含所有Android的配置。

在HBuilderX 3.6以前，开发者如需使用manifest未封装的配置、或需自定义资源目录 assets、res下的内容，只能离线打包或开发[App原生语言插件](https://nativesupport.dcloud.net.cn/NativePlugin/README)。

HBuilderX3.6.0起，支持直接在应用项目中配置应用清单文件 AndroidManifest.xml 和资源目录 assets、res。


## 应用清单文件 AndroidManifest.xml

在HBuilderX中，对项目根目录右键菜单 "新建" -> "自定义文件"  
![](https://native-res.dcloud.net.cn/images/uniapp/nativeresource/newfile.png)

输入文件名称 `AndroidManifest.xml`（注意大小写敏感），点击 “创建” 按钮新建文件  
![](https://native-res.dcloud.net.cn/images/uniapp/nativeresource/android/androidmanifest.png)

根据应用需求编辑添加需要的内容，如下示例：
``` xml
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
	* 根节点必须配置 package 属性，且属性值不能为空，属性值建议使用云端打包时配置的Android包名  
- AndroidManifest.xml的内容，和manifest.json的内容应避免冲突，即不配置manifest中已经配置过的内容。云端打包时应用清单文件会合并，出现冲突错误时请根据打包日志进行排查  
- 清单文件配置需提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)


### 移除Android权限@removepermissions  
如果应用使用了三方SDK（[uts插件](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)或[uni原生插件](https://nativesupport.dcloud.net.cn/NativePlugin/)）默认包含了一些Android权限，而实际可能不需要用到，则可以在应用清单文件文件中配置权限并添加tools:node="remove"移除，如下示例是移除"android.permission.INSTALL_PACKAGES"、"android.permission.REQUEST_INSTALL_PACKAGES"权限：  
```xml
<?xml version="1.0" encoding="utf-8"?>  
<manifest xmlns:android="http://schemas.android.com/apk/res/android" xmlns:tools="http://schemas.android.com/tools"   
  package="io.dcloud.nativeresouce">  
    <!--按下面方式配置需要移除的permissions-->  
    <uses-permission android:name="android.permission.INSTALL_PACKAGES" tools:node="remove"/>  
    <uses-permission android:name="android.permission.REQUEST_INSTALL_PACKAGES" tools:node="remove"/>  

    <application>  
        <!--meta-data-->  
    </application>  
</manifest>
```


## 应用资源  

HBuilderX中对项目右键菜单 "新建" -> "目录"  
![](https://native-res.dcloud.net.cn/images/uniapp/nativeresource/newdir.png)

输入名称 `nativeResources`（注意大小写敏感），确定并创建目录。

继续创建“android”子目录、创建“assets”、“res”二级子目录，结构如下：  
![](https://native-res.dcloud.net.cn/images/uniapp/nativeresource/android/directory.png)

将需要添加的Android原生资源文件分别拷贝到assets、res目录，云端打包时将会合并到安装包中。

**注意**
- android目录下不支持放java/kotlin源码文件，需要开发源码建议使用[UTS插件](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)或[uni原生语言插件](https://nativesupport.dcloud.net.cn/NativePlugin/README)  
- assets、res目录中的资源不能通过uni API使用，需通过 Android 原生 API 访问，参考[Android应用资源概览](https://developer.android.google.cn/guide/topics/resources/providing-resources)。也就是在uni-app中，访问这些资源需要通过uts代码访问或编写[uni原生语言插件](https://nativesupport.dcloud.net.cn/NativePlugin/README)  
- assets目录中已经保留使用以下文件，需注意避免冲突
<pre v-pre="" data-lang="">
	<code class="lang-" style="padding:0">
┌─apps                          //应用资源目录
│  └─[AppID]                    //使用DCloud AppID作为目录名称
├─data                          //配置文件目录
│  ├─dcloud_control.xml
│  ├─dcloud_error.html
│  ├─dcloud_properties.xml
│  └─dcloud3.dat
├─fonts                        //内置字体文件目录
│  ├─dcloud_iconfont.ttf
│  └─unincomponents.ttf
├─res                          //地图功能资源目录
│  ├─dcloud_beep.ogg
│  ├─dcloud_prograss_snow1.png
│  └─point.png
├─uni-jsframework.js           //uni-app vue2框架
├─uni-jsframework-vue3.js      //uni-app vue3框架
├─uni-jsframework-dev.js       //uni-app vue2框架（开发模式）
└─uni-jsframework-vue3-dev.js  //uni-app vue3框架（开发模式）
	</code>
</pre>
- res目录资源将合并到主项目中编译，会覆盖其它模块的资源
- 应用资源目录配置需提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)

## 离线打包  
离线打包时应用清单文件和资源需要开发者手动合并到Android原生工程中。


