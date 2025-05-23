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


### Android权限配置@permissions
如果应用需要一些特殊的Android权限配置，可根据需求在manifest节点下添加，如下示例：
```xml
<?xml version="1.0" encoding="utf-8"?>  
<manifest xmlns:android="http://schemas.android.com/apk/res/android" xmlns:tools="http://schemas.android.com/tools"   
  package="io.dcloud.nativeresouce">  
    <!--按下面方式配置需要自定义添加的权限-->  
    <!-- 使用网络权限 -->
    <uses-permission android:name="android.permission.INTERNET"/>
    <!-- 读写SD卡权限 -->
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
    <!-- 读取设备标识权限 -->
    <uses-permission android:name="android.permission.READ_PHONE_STATE" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
    <!-- 拍照权限 -->
    <uses-permission android:name="android.permission.CAMERA"/>
    <!-- 定位权限 -->
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
    <uses-permission android:name="android.permission.ACCESS_LOCATION_EXTRA_COMMANDS"/>
    <uses-permission android:name="android.permission.ACCESS_MOCK_LOCATION"/>
    <!-- 联系人权限 -->
    <uses-permission android:name="android.permission.READ_CONTACTS" />
    <uses-permission android:name="android.permission.WRITE_CONTACTS" />
    <!-- 蓝牙权限 -->
    <uses-permission android:name="android.permission.BLUETOOTH"/>
    <uses-permission android:name="android.permission.BLUETOOTH_ADMIN"/>
    <!-- 短信权限 -->
    <uses-permission android:name="android.permission.RECEIVE_SMS"/>
    <uses-permission android:name="android.permission.SEND_SMS"/>
    <uses-permission android:name="android.permission.WRITE_SMS"/>
    <uses-permission android:name="android.permission.READ_SMS"/>
    <!-- 安装应用权限 -->
    <uses-permission android:name="android.permission.INSTALL_PACKAGES"/>
    <uses-permission android:name="android.permission.REQUEST_INSTALL_PACKAGES" />
    <!-- 快捷方式权限 -->
    <uses-permission android:name="com.android.launcher.permission.INSTALL_SHORTCUT"/>
    <uses-permission android:name="com.android.launcher.permission.UNINSTALL_SHORTCUT"/>"
    <application>  
        <!--meta-data-->  
    </application>  
</manifest>
```

**注意**  
uni-app x项目manifest.json中没有提供Android权限的配置，需在此AndroidManifest.xml中添加。

**相关参考**  
- Android官方权限列表，参考：[https://developer.android.google.cn/reference/android/Manifest.permission](https://developer.android.google.cn/reference/android/Manifest.permission?hl=zh_cn)


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

### Android url scheme配置@urlScheme  

#### 5+ App/uni-app 项目

uni-app 项目请在 `manifest.json` 可视化界面的 `App常用其它设置` 中配置，详情参考[Android设置url scheme](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-ios.html#urlscheme)

#### uni-app x 项目

应用需要向系统注册url scheme，以便在浏览器中通过scheme打开App，可根据需求在`AndroidManifest.xml`文件中添加`android:scheme`数据，如下示例：
```xml
<?xml version="1.0" encoding="utf-8"?>  
<manifest xmlns:android="http://schemas.android.com/apk/res/android" xmlns:tools="http://schemas.android.com/tools"   
  package="io.dcloud.nativeresouce">  
    <application>  
        <!--meta-data-->  
        <activity android:name="io.dcloud.uniapp.UniLaunchProxyActivity" android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.VIEW" />
                <category android:name="android.intent.category.DEFAULT" />
                <category android:name="android.intent.category.BROWSABLE" />
                <data android:scheme="myappuniappx"/>
      </intent-filter>
    </activity>
    </application>  
</manifest>
```

> uni-app x 项目支持通过此方式配置url scheme，需 HBuilderX4.18及以上版本    

**注意**  
- `intent-filter` 下 `data` 节点的 `android:scheme` 属性值配置的是需要注册的scheme，上面示例配置了myappuniappx，请根据应用实际需求修改，可添加多个data节点配置多个scheme值。为了避免与其他应用产生冲突，请配置自己应用特有的字符串来避免冲突。  
- `intent-filter` 下 `action` 和 `category` 节点数据是固定值，不要修改。  

**相关参考**  
- Android应用清单文件`intent-filter`节点，参考：[https://developer.android.google.cn/guide/topics/manifest/intent-filter-element](https://developer.android.google.cn/guide/topics/manifest/intent-filter-element?hl=zh-cn)  
- Android应用清单文件`data`节点，参考：[https://developer.android.google.cn/guide/topics/manifest/data-element](https://developer.android.google.cn/guide/topics/manifest/data-element?hl=zh-cn)  

### Android 修改`activity`注册配置信息

android平台的`activity`内容载体，部分特殊功能需修改[activity注册配置](https://developer.android.google.cn/guide/topics/manifest/activity-element?hl=zh-cn)才能实现功能，因此提供如下方式修改注册的配置信息。

#### 5+ App/uni-app 项目

5+ App/uni-app 项目 页面 activity 如下:

+ 所有页面activity为io.dcloud.PandoraEntryActivity

如下示例：
```xml
<?xml version="1.0" encoding="utf-8"?>  
<manifest xmlns:android="http://schemas.android.com/apk/res/android" xmlns:tools="http://schemas.android.com/tools"   
  package="io.dcloud.nativeresouce">  
    <application>  
        <activity android:name="io.dcloud.PandoraEntryActivity" 
                  android:配置项 = "配置内容"/> 
    </application>  
</manifest>
```

#### uni-app x 项目

uni-app x 项目页面 activity 如下:

+ 首页的activity为io.dcloud.uniapp.UniAppActivity
+ 次级页面跟随屏幕方向的activity为io.dcloud.uniapp.appframe.activity.UniPageActivity
+ 次级页面固定横屏的activity为io.dcloud.uniapp.appframe.activity.UniLandscapePageActivity
+ 次级页面固定竖屏的activity为io.dcloud.uniapp.appframe.activity.UniPortraitPageActivity

如下示例：
```xml
<?xml version="1.0" encoding="utf-8"?>  
<manifest xmlns:android="http://schemas.android.com/apk/res/android" xmlns:tools="http://schemas.android.com/tools"   
  package="io.dcloud.nativeresouce">  
    <application>  
        <activity android:name="io.dcloud.uniapp.UniAppActivity" 
                  android:配置项 = "配置内容"/>
        <activity android:name="io.dcloud.uniapp.appframe.activity.UniPageActivity"
                  android:配置项 = "配置内容"/>
        <activity android:name="io.dcloud.uniapp.appframe.activity.UniLandscapePageActivity"
                  android:配置项 = "配置内容"/>
        <activity android:name="io.dcloud.uniapp.appframe.activity.UniPortraitPageActivity"
                  android:配置项 = "配置内容"/>
    </application>  
</manifest>
```

**注意** 
- activity 注册配置项theme、screenOrientation、configChanges、windowSoftInputMode、launchMode禁止设置，随意配置可能会导致app出现不可预估问题
- 不可通过该方式自行配置scheme，请通过`Android url scheme配置`实现

## 应用资源@nativeResources

HBuilderX中对项目右键菜单 "新建" -> "目录"  
![](https://native-res.dcloud.net.cn/images/uniapp/nativeresource/newdir.png)

输入名称 `nativeResources`（注意大小写敏感），确定并创建目录。

继续创建“android”子目录、创建“assets”、“res”二级子目录，结构如下：  
![](https://native-res.dcloud.net.cn/images/uniapp/nativeresource/android/directory.png)

将需要添加的Android原生资源文件分别拷贝到assets、res目录，云端打包时将会合并到安装包中。

**注意**
- android目录下不支持放java/kotlin源码文件，需要开发源码建议使用[UTS插件](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)或[uni原生语言插件](https://nativesupport.dcloud.net.cn/NativePlugin/README)  
- assets、res目录中的资源不能通过uni API使用，需通过 Android 原生 API 访问，参考[Android应用资源概览](https://developer.android.google.cn/guide/topics/resources/providing-resources)。也就是在uni-app中，访问这些资源需要通过uts代码访问或编写[uni原生语言插件](https://nativesupport.dcloud.net.cn/NativePlugin/README)  
- uni-app项目assets目录中已经保留使用以下文件，需注意避免冲突

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
  
- uni-app x 项目assets目录中已经保留使用以下文件，需注意避免冲突

<pre v-pre="" data-lang="">
	<code class="lang-" style="padding:0">
┌─apps                          //应用资源目录
│  └─[AppID]                    //使用DCloud AppID作为目录名称
├─font                          //内置字体文件目录
│  └─dcloud_iconfont.ttf
├─uniappx                       //内置unix资源目录
│  ├─fonts
│  └─version.json
└─uni-uts                       //内置uts资源目录
   ├─uni-prompt
   └─...
	</code>
</pre>

- res目录资源将合并到主项目中编译，会覆盖其它模块的资源
- 其它文件在云打包时将会拷贝到应用级根目录（app）下
- 应用资源目录配置需提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)

### manifestPlaceholders.json @manifestplaceholders  
在 Android 原生开发中可以在 `build.gradle` 文件配置 `manifestPlaceholders` 数据用于替换 `AndroidManifest.xml` 中的占位符，例如 ${api_key} 。
为了满足此需求，在项目的 nativeResources/android 目录下可添加 `manifestPlaceholders.json` 文件来配置 `manifestPlaceholders` 数据。

示例如下：
```json
{
  "api_key": "我的api key"
}
```

 `manifestPlaceholders.json` 文件中的键名和键值必需是字符串，其中键名为占位符的名称，如占位符 ${api_key} 的键名为 api_key，键值为要替换 `AndroidManifest.xml` 中的占位符的值。  

**注意**  
云端打包默认保留以下`manifestPlaceholders`，避免使用
- apk.applicationId: 用于保存应用 ID，作用与 android 构建环境内置的 [applicationId](https://developer.android.google.cn/build/configure-app-module?hl=zh-cn#set-application-id) 一致。  


## 离线打包  
离线打包时应用清单文件和资源需要开发者手动合并到Android原生工程中。


