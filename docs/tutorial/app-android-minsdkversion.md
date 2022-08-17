minSdkVersion用于指定应用兼容的最低Android版本（API等级），默认值为19（即最低支持Android4.4）。
minSdkVersion is used to specify the minimum Android version (API level) compatible with the application, and the default value is 19 (that is, the minimum support Android4.4).
如果APP某些功能无法支持低版本Android系统的设备，可以配置minSdkVersion确保APP只能安装到指定Android版本及以上的设备。HBuilderX中可在manifest.json中进行配置minSdkVersion。
If some functions of the APP cannot support devices with a lower version of Android system, you can configure minSdkVersion to ensure that the APP can only be installed on devices with a specified Android version and above. In HBuilderX, minSdkVersion can be configured in manifest.json.

**️注意: App升级时 minSdkVersion 只能增加不能降低，也就是说 minSdkVersion 高的App无法被 minSdkVersion 低的App覆盖安装，开发者需要注意！**
**️Note: When the app is upgraded, the minSdkVersion can only be increased and not decreased, that is to say, the app with high minSdkVersion cannot be overwritten and installed by the app with low minSdkVersion, developers need to pay attention! **

### 设置minSdkVersion  
### Set minSdkVersion
minSdkVersion值为Number类型，且必须为正整数，取值范围参考`Android版本列表`中的`API等级`。
The value of minSdkVersion is of type Number and must be a positive integer. For the range of values, refer to `API level` in `Android version list`.

**可视化界面配置**  
**Visual interface configuration**
打开项目的manifest.json文件，在 “App常用其它设置” -> “Android设置” -> “minSdkVersion” 项中进行设置：
![](https://native-res.dcloud.net.cn/images/uniapp/others/minsdkversion.png)

**源码视图配置**  
**Source view configuration**
打开项目的manifest.json文件，切换到“源码视图”，根据项目类型进行配置。  
Open the manifest.json file of the project, switch to the "source view", and configure it according to the project type.

- uni-app项目  
- uni-app project
在 "app-plus" -> "distribute" -> "android" 节点的 minSdkVersion 属性配置，示例如下：
Configure the minSdkVersion attribute of the "app-plus" -> "distribute" -> "android" node, the example is as follows:
``` js
  "app-plus": {
    "distribute": {
      "android":{
        "minSdkVersion": 21
      }
    }
  }
```

- 5+App/Wap2App项目项目  
- 5+App/Wap2App project items
在 "plus" -> "distribute" -> "google" 节点的 minSdkVersion 属性配置，示例如下：
Configure the minSdkVersion attribute of the "plus" -> "distribute" -> "google" node, the example is as follows:
```javascript
  "plus": {
    "distribute": {
      "google":{
        "minSdkVersion": 21
      }
    }
  }
```

#### 注意事项  
#### Precautions  
配置minSdkVersion后保存提交App云端打包后才能生效，并注意以下问题：
After configuring minSdkVersion, save and submit the App cloud package to take effect, and pay attention to the following issues:
- App模块配置中部分功能使用了三方SDK，三方SDK可能对minSdkVersion有要求，这时会取最大的minSdkVersion值
- Some functions in the App module configuration use the third-party SDK. The third-party SDK may have requirements for minSdkVersion. In this case, the maximum minSdkVersion value will be taken.
- uni原生插件也可能对minSdkVersion有要求，这时会取最大的minSdkVersion值
- The uni native plugin may also have requirements for minSdkVersion, in which case the maximum minSdkVersion value will be taken

**注意：云端打包时如果其他模块或插件设置了minSdkVersion，最终最大的minSdkVersion值生效**
**Note: If other modules or plugins set minSdkVersion during cloud packaging, the final maximum minSdkVersion value will take effect**


### Android版本列表  
### Android version list
API等级与Android版本对应列表如下：  
The corresponding list of API levels and Android versions is as follows:

| API等级 | Android版本号 | Android版本名称 |  
| API level | Android version number | Android version name |
| :-- | :-- | :-- |  
| 19 | Android4.4 | Kitkat |  
| 20 | Android4.4W | Kitkat Watch |  
| 21 | Android5.0 | Lollipop |  
| 22 | Android5.1 | Lollipop |  
| 23 | Android6.0 | Marshmallow |  
| 24 | Android7.0 | Nougat |  
| 25 | Android7.1 | Nougat |  
| 26 | Android8.0 | Oreo |  
| 27 | Android8.1 | Oreo |  
| 28 | Android9.0 | Pie |  
| 29 | Android10.0 | Android Q |  
| 30 | Android11.0 | Android R |  
| 31 | Android12.0 | Android S |  

