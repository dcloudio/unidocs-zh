minSdkVersion用于指定应用兼容的最低Android版本（API等级），默认值为19（即最低支持Android4.4）。
如果APP某些功能无法支持低版本Android系统的设备，可以配置minSdkVersion确保APP只能安装到指定Android版本及以上的设备。HBuilderX中可在manifest.json中进行配置minSdkVersion。

**️注意: App升级时 minSdkVersion 只能增加不能降低，也就是说 minSdkVersion 高的App无法被 minSdkVersion 低的App覆盖安装，开发者需要注意！**

### 设置minSdkVersion  
minSdkVersion值为Number类型，且必须为正整数，取值范围参考`Android版本列表`中的`API等级`。

**可视化界面配置**  
打开项目的manifest.json文件，在 “App常用其它设置” -> “Android设置” -> “minSdkVersion” 项中进行设置：
![](https://native-res.dcloud.net.cn/images/uniapp/others/minsdkversion.png)

**源码视图配置**  
打开项目的manifest.json文件，切换到“源码视图”，根据项目类型进行配置。  

- uni-app项目  
在 "app-plus" -> "distribute" -> "android" 节点的 minSdkVersion 属性配置，示例如下：
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
在 "plus" -> "distribute" -> "google" 节点的 minSdkVersion 属性配置，示例如下：
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
配置minSdkVersion后保存提交App云端打包后才能生效，并注意以下问题：
- App模块配置中部分功能使用了三方SDK，三方SDK可能对minSdkVersion有要求，这时会取最大的minSdkVersion值
- uni原生插件也可能对minSdkVersion有要求，这时会取最大的minSdkVersion值

**注意：云端打包时如果其他模块或插件设置了minSdkVersion，最终最大的minSdkVersion值生效**


### Android版本列表  
API等级与Android版本对应列表如下：  

| API等级 | Android版本号 | Android版本名称 |
| --:-- | --:-- | --:-- |
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

