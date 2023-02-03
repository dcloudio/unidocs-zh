iOS平台为了减少系统资源消耗，应用默认不支持后台运行，切换到后台会停止运行。比如当应用切换到后台时音乐将暂停播放，下次切换到前台继续播放。如果应用切换到后台继续运行如播放音乐，定位等功能，需要配置支持后台运行的能力。
In order to reduce system resource consumption on the iOS platform, the application does not support running in the background by default, and switching to the background will stop running. For example, when the app switches to the background, the music will be paused, and the next time it switches to the foreground, it will continue to play. If the application switches to the background to continue running functions such as playing music, positioning, etc., it needs to configure the ability to support background running.

可支持以下能力：
The following capabilities are supported:
- 后台播放音乐，设置值为"audio"  
- Play music in the background, set the value to "audio"
- 后台获取位置信息（定位），设置值为"location"  
- Get location information (positioning) in the background, set the value to "location"


### 设置后台运行能力  
### Set background running capability
**可视化界面配置**  
**Visual interface configuration**
打开项目的manifest.json文件，在 “App常用其它设置” -> “iOS设置” -> “后台运行能力” 项中进行设置：
![](https://native-res.dcloud.net.cn/images/uniapp/others/backgroundmodes-manifest.png)

>注意：  
>Note:
>"audio"表示后台播放音乐能力，"location"表示后台定位能力，更多后台能力配置参考苹果官网[UIBackgroundModes文档](https://developer.apple.com/documentation/bundleresources/information_property_list/uibackgroundmodes/)；  
>"audio" indicates the ability to play music in the background, and "location" indicates the ability to locate the background. For more background capability configurations, refer to Apple's official website [UIBackgroundModes document](https://developer.apple.com/documentation/bundleresources/information_property_list/uibackgroundmodes/) ;
>多个后台能力使用 "," 分割；  
> Multiple background capabilities are split using ",";
>如果可视化界面无法编辑，请切换到“源码视图”删除`UIBackgroundModes`节点数据重新操作。  
> If the visual interface cannot be edited, please switch to the "source view" to delete the `UIBackgroundModes` node data and re-operate.

**源码视图配置**  
**Source view configuration**
打开项目的manifest.json文件，切换到“源码视图”，根据项目类型进行配置
Open the manifest.json file of the project, switch to the "source view", and configure according to the project type

- uni-app项目  
- uni-app project
在 "app-plus"->"distribute"->"ios" 节点的 UIBackgroundModes 属性配置后台运行能力，示例如下：
Configure the background running capability in the UIBackgroundModes property of the "app-plus"->"distribute"->"ios" node. The example is as follows:
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
- 5+App/Wap2App projects
在 "plus"->"distribute"->"ios" 节点的 UIBackgroundModes 属性配置后台运行能力，示例如下：
Configure the background running capability in the UIBackgroundModes property of the "plus"->"distribute"->"ios" node. The example is as follows:
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
> Note: For backward compatibility, the `UIBackgroundModes` property value supports a string array when configuring the HBuilderX source view. The value in the above example can also be configured like this ["audio","location"]

**保存后提交App云端打包生效**
**Submit the App cloud package to take effect after saving**




#### 注意事项
#### Precautions
- 配置后需提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)
- After configuration, the cloud package must be submitted to take effect. Please use the [custom debugging base] when the real machine is running (https://ask.dcloud.net.cn/article/35115)
真机运行不支持此功能，需要提交到打App云端打包才生效  
The real machine does not support this function, and it needs to be submitted to the App Cloud for packaging to take effect.
- 应用切换到后台运行时，需要避免调用同步5+ API（调用直接返回数据的API），在后台运行时此类API将无法同步返回数据
- When the app is switched to the background, it is necessary to avoid calling synchronous 5+ APIs (calling APIs that directly return data), such APIs will not be able to return data synchronously when running in the background

