### 开通  
- 登录[DCloud开发者中心](https://dev.dcloud.net.cn/)，通过实名认证后，可通过以下入口进入UniPush的Web控制台进行配置
  + HBuilderX中打开项目的manifest.json文件，在“App模块配置”项的“Push(消息推送)”->“UniPush”下点击`配置`
  ![](https://native-res.dcloud.net.cn/images/uniapp/push/unipush-hx-config.png)
  + 登录[DCloud开发者中心](https://dev.dcloud.net.cn/)，在“我创建的应用”列表中选择进入应用管理页面，点击左侧导航栏中的“Uni Push”
  ![](https://native-res.dcloud.net.cn/images/uniapp/push/unipush-web-config.png)
- 在UniPush开通界面配置“Android包名”、“Android应用签名”、“iOS Bundle Id”等信息，点击“开通”
- 开通后可进行其它消息推送参数配置
  + Android平台  
    为了提升App离线送达率，建议配置厂商推送设置
  + iOS平台  
    需配置推送证书，在“UniPush”页面的“配置管理”->“应用配置”可上传推送证书
    

更多信息详见 [UniPush开通指南](https://ask.dcloud.net.cn/article/35716)


### 配置  
在manifest.json文件“App模块配置”项的“Push(消息推送)”下，勾选“UniPush”
![](https://native-res.dcloud.net.cn/images/uniapp/push/unipush-manifest.png)

**注意**  
- UniPush模块需要开通后才能提交云端打包，否则会提示错误，如未开通UniPush不要勾选此模块
- UniPush推送功能需要提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)
- 本地离线打包参考[Android平台UniPush模块配置](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/push)、[iOS平台UniPush模块配置](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/push)


#### 推送图标配置@unipush-icons
UniPush和个推推送模块支持设置自定义推送图标，包括push图标和推送小图标(small)
- push图标  
默认使用应用图标
- 推送小图标(small)  
默认使用个推提供的小图标

显示效果如下图所示：  

![](https://native-res.dcloud.net.cn/images/uniapp/push/custom_push_icon/custom_push_icon_small_instructions.png)  

##### 源码视图配置  
打开项目的manifest.json文件，切换到“源码视图”，手动设置推送图标。
在 "app-plus" -> "distribute" -> "sdkConfigs" -> "push" -> "unipush" -> "icons"节点下配置推送图标
```json  
{
    "unipush": {                    //可选，JSON对象，使用UniPush SDK配置，无需手动配置参数，云端打包自动获取配置参数
        "icons": {                          //可选，JSON对象，推送图标配置
            "push": {                               //可选，JSON对象，Push图标配置
                "ldpi": "",                                 //可选，字符串类型，普通屏设备推送图标路径，分辨率要求48x48
                "mdpi": "",                                 //可选，字符串类型，大屏设备设备推送图标路径，分辨率要求48x48
                "hdpi": "",                                 //可选，字符串类型，高分屏设备推送图标路径，分辨率要求72x72
                "xdpi": "",                                 //可选，字符串类型，720P高分屏设备推送图标路径，分辨率要求96x96
                "xxdpi": "",                                //可选，字符串类型，1080P高密度屏幕推送图标路径，分辨率要求144x144
                "xxxdpi": "",                               //可选，字符串类型，4K屏设备推送图标路径，分辨率要求192x192
            },
            "smal": {                               //可选，JSON对象，Push小图标配置
                "ldpi": "",                                 //可选，字符串类型，普通屏设备推送小图标路径，分辨率要求18x18
                "mdpi": "",                                 //可选，字符串类型，大屏设备设备推送小图标路径，分辨率要求24x24
                "hdpi": "",                                 //可选，字符串类型，高分屏设备推送小图标路径，分辨率要求36x36
                "xdpi": "",                                 //可选，字符串类型，720P高分屏设备推送小图标路径，分辨率要求48x48
                "xxdpi": "",                                //可选，字符串类型，1080P高密度屏幕推送小图标路径，分辨率要求72x72
                "xxxdpi": "",                               //可选，字符串类型，4K屏设备推送小图标路径，分辨率要求96x96
            }
        }
    }
}
```

**注意事项**  
- 5+ App项目在manifest.json文件的 "plus" -> "distribute" -> "plugins" -> "push" -> "unipush" -> "icons"节点下配置推送图标  
- “个推推送”模块已不再维护，推荐使用UniPush模块，如需继续使用“个推推送”模块，可将“unipush”节点名称修改为“igexin”进行配置，完整配置信息可参考[App完整manifest.json](/collocation/manifest-app)  


### 推送小图标(small)要求
设计规范需要注意：
1. 必须是带 Alpha 透明通道的 PNG 图片。 
2. 背景必须是透明的。 （如果非透明就会显示为白色方块）  

![](http://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/push/unipsuh_small_icon_style.png.png) 




### 使用UniPush
- **uni-app项目详细使用教程请参考 [统一推送UniPush](https://uniapp.dcloud.io/unipush)**
- **5+ App、Wap2App项目详细使用教程请参考 [UniPush使用指南](https://ask.dcloud.net.cn/article/35622)**

