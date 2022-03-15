iOS平台为了减少系统资源消耗，应用默认不支持后台运行，切换到后台会停止运行。比如当应用切换到后台时音乐将暂停播放，下次切换到前台继续播放。如果应用切换到后台继续运行如播放音乐，定位等功能，需要配置支持后台运行的能力。

可支持以下能力：
- 后台播放音乐，设置值为"audio"  
- 后台获取位置信息（定位），设置值为"location"  


### 设置后台运行能力  
**可视化界面配置**  
打开项目的manifest.json文件，在 “App常用其它设置” -> “iOS设置” -> “后台运行能力” 项中进行设置：
![](https://native-res.dcloud.net.cn/images/uniapp/others/backgroundmodes-manifest.png)

>注意：  
>"audio"表示后台播放音乐能力，"location"表示后台定位能力，更多后台能力配置参考苹果官网[UIBackgroundModes文档](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html#//apple_ref/doc/uid/TP40009252-SW22)；  
>多个后台能力使用 "," 分割；  
>如果可视化界面无法编辑，请切换到“源码视图”删除`UIBackgroundModes`节点数据重新操作。  

**源码视图配置**  
打开项目的manifest.json文件，切换到“源码视图”，根据项目类型进行配置

- uni-app项目  
在 "app-plus"->"distribute"->"ios" 节点的 UIBackgroundModes 属性配置后台运行能力，示例如下：
``` js  
  "app-plus": {
    "distribute": {
      "ios": {
        "UIBackgroundModes": "audio,location"
        //...
      },
      //...
    },
    //...
  },
  //...
```

- 5+App/Wap2App项目  
在 "plus"->"distribute"->"ios" 节点的 UIBackgroundModes 属性配置后台运行能力，示例如下：
``` js  
  "plus": {
    "distribute": {
      "ios": {
        "UIBackgroundModes": "audio,location"
        //...
      },
      //...
    },
    //...
  },
  //...
```

> 注：为了向下兼容，HBuilderX源码视图配置时`UIBackgroundModes`属性值支持字符串数组，上面示例中的值也可以这么配置["audio","location"]

**保存后提交App云端打包生效**




#### 注意事项
- 配置后需提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)
真机运行不支持此功能，需要提交到打App云端打包才生效  
- 应用切换到后台运行时，需要避免调用同步5+ API（调用直接返回数据的API），在后台运行时此类API将无法同步返回数据

