targetSdkVersion用于指定应用的目标Android版本（API等级），默认值为28（即Android9.0）。
> - HBuilderX3.2.13云端打包调整targetSdkVersion默认值为28  
> - HBuilderX云端打包targetSdkVersion默认值为26  

设置targetSdkVersion值表示App适配的Android版本（API等级），设置低版本的targetSdkVersion会使APP兼容模式运行，也就可能无法用到新系统的特性，甚至在兼容模式下运行可能存在安全漏洞等问题。
随着Android系统的升级，一些应用市场会要求设置较高的targetSdkVersion才可以提交，HBuilderX中可在项目的manifest.json中进行配置。


**️注意:**
+  App升级时 targetSdkVersion 只能增加不能降低，也就是说 targetSdkVersion 高的App无法被 targetSdkVersion 低的App覆盖安装，开发者需要注意！
+  android 15 设备对 targetSdkVersion 版本有要求，低于24无法正常在android 15设备上正常安装，开发者需要注意！

### 设置targetSdkVersion  
targetSdkVersion值为Number类型，且必须为正整数，取值范围参考`Android版本列表`中的`API等级`。

**可视化界面配置**  
打开项目的manifest.json文件，在 “App常用其它设置” -> “Android设置” -> “targetSdkVersion” 项中进行设置：
![](https://native-res.dcloud.net.cn/images/uniapp/others/targetsdkversion.png)

**源码视图配置**  
打开项目的manifest.json文件，切换到“源码视图”，根据项目类型进行配置。  

- uni-app项目  
在 "app-plus" -> "distribute" -> "android" 节点的 targetSdkVersion 属性配置，示例如下：
``` js
  "app-plus": {
    "distribute": {
      "android":{
        "targetSdkVersion": 30
      }
    }
  }
```

- 5+App/Wap2App项目项目  
在 "plus" -> "distribute" -> "google" 节点的 targetSdkVersion 属性配置，示例如下：
```javascript
  "plus": {
    "distribute": {
      "google":{
        "targetSdkVersion": 30
      }
    }
  }
```


**注意：配置targetSdkVersion后保存提交App云端打包后才能生效**


### Android版本列表
API等级与Android版本对应列表如下：

| API等级 | Android版本号 | Android版本名称 |  
| :-- | :-- | :-- |  
| 35 | Android15 | Android V, Vanilla Ice Cream|
| 34 | Android14 | Android U, Upside Down Cake|
| 33 | Android13 | Android T, Tiramisu |  
| 32 | Android12L | Android S_V2 |  
| 31 | Android12 | Android S, Snow Cone |  
| 30 | Android11 | Android R, Red Velvet Cake |  
| 29 | Android10 | Android Q, Quince Tart |  
| 28 | Android9 | Android P, Pie |  
| 27 | Android8.1 | Android O_MR1 |  
| 26 | Android8.0 | Android O, Oreo |  
| 25 | Android7.1 | Android N_MR1 |  
| 24 | Android7.0 | Android N, Nougat |  
| 23 | Android6.0 | Android M, Marshmallow |  
| 22 | Android5.1 | Android L_MR1 |  
| 21 | Android5.0 | Android L, Lollipop |  
| 20 | Android4.4W | Kitkat Watch |  
| 19 | Android4.4 | Kitkat |  

