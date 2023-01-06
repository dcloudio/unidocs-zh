### 开通  
### Open
- 登录[DCloud开发者中心](https://dev.dcloud.net.cn/)，通过实名认证后，可通过以下入口进入UniPush的Web控制台进行配置
- Log in to [DCloud Developer Center](https://dev.dcloud.net.cn/), after passing the real-name authentication, you can enter the UniPush web console through the following entry for configuration
  + HBuilderX中打开项目的manifest.json文件，在“App模块配置”项的“Push(消息推送)”->“UniPush”下点击`配置`
  ![](https://native-res.dcloud.net.cn/images/uniapp/push/unipush-hx-config.png)
  + 登录[DCloud开发者中心](https://dev.dcloud.net.cn/)，在“我的应用”列表中选择进入应用管理页面，点击上方选项卡中的“uniPush”，然后点击“应用信息”
  ![](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/unipush-web-config.png)
- 在UniPush开通界面配置“Android包名”、“Android应用签名”、“iOS Bundle Id”等信息，点击“开通”
- Configure "Android package name", "Android application signature", "iOS Bundle Id" and other information on the UniPush activation interface, and click "Activate"
- 开通后可进行其它消息推送参数配置
- After activation, other message push parameters can be configured
  + Android平台  
  + Android platform
    为了提升App离线送达率，建议配置厂商推送设置
    In order to improve the offline delivery rate of the app, it is recommended to configure the manufacturer push settings
  + iOS平台  
  + iOS platform
    需配置推送证书，在“UniPush”页面的“配置管理”->“应用配置”可上传推送证书
    The push certificate needs to be configured. You can upload the push certificate in "Configuration" -> "App Configuration" on the "UniPush" page.
    

更多信息详见 [UniPush开通指南](https://ask.dcloud.net.cn/article/35716)
For more information, see [UniPush Activation Guide](https://ask.dcloud.net.cn/article/35716)


### 配置  
### Configuration
在manifest.json文件“App模块配置”项的“Push(消息推送)”下，勾选“UniPush”
![](https://native-res.dcloud.net.cn/images/uniapp/push/unipush-manifest.png)

**注意**  
**Notice**  
- UniPush模块需要开通后才能提交云端打包，否则会提示错误，如未开通UniPush不要勾选此模块
- The UniPush module needs to be activated before submitting the cloud package, otherwise an error will be prompted. If UniPush is not activated, do not check this module
- UniPush推送功能需要提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)
- The UniPush push function needs to be submitted to the cloud before it can take effect. Please use the [custom debugging base] when the real machine is running (https://ask.dcloud.net.cn/article/35115)
- 本地离线打包参考[Android平台UniPush模块配置](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/push)、[iOS平台UniPush模块配置](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/push)
- For local offline packaging reference [UniPush module configuration on Android platform](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/push), [UniPush module configuration on iOS platform](https://nativesupport.dcloud. net.cn/AppDocs/usemodule/iOSModuleConfig/push)

#### FCM配置@unipush-gp-fcm
#### FCM configuration @unipush-gp-fcm

##### 概述
##### Overview
在海外网络环境下，部分网络在连接UniPush技术支持供应商个推的推送服务时，可能出现不稳定的情况。此时，开发者可以接入 FCM 辅助通道，当在个推服务断线的情况下，通过谷歌的 FCM 推送通道下发消息，提升推送到达率。
In the overseas network environment, some networks may be unstable when connecting to the push service provided by UniPush technical support provider. At this point, developers can access the FCM auxiliary channel. When the personal push service is disconnected, messages can be sent through Google's FCM push channel to improve the push arrival rate.

**使用FCM时手机端需安装Google移动服务（GMS），并且可以正常连接Google服务（国内网络需要翻墙）**
**When using FCM, the mobile phone needs to install Google Mobile Services (GMS), and can connect to Google services normally (domestic network needs to be over the wall)**

使用FCM必须先开通使用UniPush：
To use FCM, you must first activate UniPush:
- 开通UniPush服务参考：[https://ask.dcloud.net.cn/article/35716](https://ask.dcloud.net.cn/article/35716)
- Open UniPush service reference: [https://ask.dcloud.net.cn/article/35716](https://ask.dcloud.net.cn/article/35716)
- App端使用UniPush参考：[https://ask.dcloud.net.cn/article/35622](https://ask.dcloud.net.cn/article/35622)
- Reference for using UniPush on the App side: [https://ask.dcloud.net.cn/article/35622](https://ask.dcloud.net.cn/article/35622)

##### 从谷歌后台申请key信息
##### Request key information from Google background
进入 [Firebase官网](https://firebase.google.com/)创建项目，获取google-services.json文件及Server key。
Go to [Firebase official website](https://firebase.google.com/) to create a project and obtain the google-services.json file and Server key.

登录google账号，如果没有账号请先注册
![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/signin.png)

登录后点击右上角的“Go to console”
![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/gotoconsole.png)

打开项目列表页面，点击“Add project”创建项目
![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/addproject.png)

输入项目名称（根据自己应用取名），点击“Continue”
![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/createproject1.png)

确认是否需要使用Google Analytics服务（根据自己需要开启或关闭），点击“Continue”
![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/createproject2.png)

确认后创建项目，点击“Continue”
![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/createproject3.png)

进入项目详情页面，点击“Android”图标添加Android应用
![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/android.png)

输入Android应用信息（包名、昵称、证书SHA-1），点击“Register App”
![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/regapp.png)

注册Android应用后下载配置文件“google-services.json”，**保存google-services.json文件后面需要使用**
After registering the Android application, download the configuration file "google-services.json", **You need to use the google-services.json file after saving**
点击“Next”继续
![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/download.png)

此步骤中的操作云端打包机已经处理，忽略提示信息，继续点击“Next”，进入下一步
The operation in this step has been processed by the cloud packager, ignore the prompt information, continue to click "Next" to enter the next step
完成注册Android应用，点击“Continue to console”回到项目详情页面
![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/continuetoconsole.png)

点击“Project settings”，进入项目设置页面
![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/settings.png)

切换到“Cloud Messaging”项，获取“Server key”，**保存Server key后面需要使用**
Switch to the "Cloud Messaging" item, get the "Server key", **You need to use it after saving the Server key**

由于新版`Firebase Cloud Messaging API (V1)`不提供`Server key`, 所以需要手动开启旧版 `Cloud Messaging API` 。
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_android_setup_get_server_key.png)

跳转到Api管理页面启动`Cloud Messaging API`
Jump to the Api management page to start `Cloud Messaging API`

![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_android_open_old_api.png)

启动`Cloud Messaging API`后即可得到`Server key`
After starting the `Cloud Messaging API`, you can get the `Server key`

![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_android_server_key.png)

##### UniPush后台配置FCM参数
##### UniPush background configuration FCM parameters
配置FCM需先开通UniPush，如应用未开通UniPush请先开通。
To configure FCM, you need to activate UniPush first. If the application has not activated UniPush, please activate it first.
在HBuilderX的mainfest.json页面，在“App SDK配置”项下的“uniPush”栏点击“配置”
![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/hx_unipush.png)

打开DCloud的开发者中心后台进入应用列表，点击应用名称进入详情，点击上方“uniPush”选项卡，点击“厂商推送设置”按钮进入配置UniPush的FCM参数 
[attach]94813[/attach]



保存成功后在HBuilderX中重新提交云端打包，并在“App-云打包”界面选择google play 渠道包：
![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/hx_package.png)

如果你已经完成了uniPush的代码开发，只需完成上述配置和打包即可，不用修改代码。
If you have completed the code development of uniPush, you only need to complete the above configuration and packaging without modifying the code.

如果你还没有开发过推送代码，参考App端使用UniPush参考：[https://ask.dcloud.net.cn/article/35622](https://ask.dcloud.net.cn/article/35622)
If you have not developed push code, please refer to using UniPush on App: [https://ask.dcloud.net.cn/article/35622](https://ask.dcloud.net.cn/article/35622)



##### 本地离线打包
##### Local offline packaging
Android平台离线sdk集成UniPush支持FCM可参考：[Push(消息推送)](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/push?id=%e8%b0%b7%e6%ad%8c%e6%8e%a8%e9%80%81)
Android platform offline sdk integration UniPush supports FCM for reference: [Push (message push)](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/push?id=%e8%b0%b7%e6% ad%8c%e6%8e%a8%e9%80%81)

##### 注意事项
##### Precautions


** FCM 离线消息仅支持GOOGLE 推送，暂不支持国内设备商的海外发行版本**
** FCM offline messages only support GOOGLE push, not the overseas version released by domestic equipment manufacturers**

#### Android平台推送图标配置@unipush-icons
#### Android platform push icon configuration @unipush-icons
UniPush和个推推送模块支持设置自定义推送图标，包括push图标和推送小图标(small)
UniPush and personal push push modules support setting custom push icons, including push icons and push small icons (small)
- push图标  
- push icon
默认使用应用图标
Use the app icon by default
- 推送小图标(small)  
- Push small icons (small)
默认使用个推提供的小图标
By default, the small icon provided by Tweet is used

显示效果如下图所示：  
The display effect is as shown in the following figure:

![](https://native-res.dcloud.net.cn/images/uniapp/push/custom_push_icon/custom_push_icon_small_instructions.png)  

##### 源码视图配置  
##### Source view configuration
打开项目的manifest.json文件，切换到“源码视图”，手动设置推送图标。
Open the manifest.json file of the project, switch to the "source view", and manually set the push icon.
在 "app-plus" -> "distribute" -> "sdkConfigs" -> "push" -> "unipush" -> "icons"节点下配置推送图标
Configure the push icon under the "app-plus" -> "distribute" -> "sdkConfigs" -> "push" -> "unipush" -> "icons" node
```json  
{
    "unipush": {                    //可选，JSON对象，使用UniPush SDK配置，无需手动配置参数，云端打包自动获取配置参数
        "icons": {                          //可选，JSON对象，推送图标配置
            "push": {                               //可选，JSON对象，Push图标配置
                "ldpi": "",                                 //可选，字符串类型，普通屏设备推送图标路径，分辨率要求48x48
                "mdpi": "",                                 //可选，字符串类型，大屏设备设备推送图标路径，分辨率要求64x64
                "hdpi": "",                                 //可选，字符串类型，高分屏设备推送图标路径，分辨率要求96x96
                "xhdpi": "",                                 //可选，字符串类型，720P高分屏设备推送图标路径，分辨率要求128x128
                "xxhdpi": "",                                //可选，字符串类型，1080P高密度屏幕推送图标路径，分辨率要求192x192
            },
            "small": {                               //可选，JSON对象，Push小图标配置
                "ldpi": "",                                 //可选，字符串类型，普通屏设备推送小图标路径，分辨率要求18x18
                "mdpi": "",                                 //可选，字符串类型，大屏设备设备推送小图标路径，分辨率要求24x24
                "hdpi": "",                                 //可选，字符串类型，高分屏设备推送小图标路径，分辨率要求36x36
                "xhdpi": "",                                 //可选，字符串类型，720P高分屏设备推送小图标路径，分辨率要求48x48
                "xxhdpi": "",                                //可选，字符串类型，1080P高密度屏幕推送小图标路径，分辨率要求72x72
                "xxxhdpi": "",                               //可选，字符串类型，4K屏设备推送小图标路径，分辨率要求96x96
            }
        }
    }
}
```


也可在HBuilder X（3.5.1+ 版本） 中可视化配置 
Configuration can also be visualized in HBuilder X (version 3.5.1+)

![](https://native-res.dcloud.net.cn/images/uniapp/push/custom_push_icon/unipush_icons_hx_config.png)

**注意事项**  
**Precautions**  
- 5+ App项目在manifest.json文件的 "plus" -> "distribute" -> "plugins" -> "push" -> "unipush" -> "icons"节点下配置推送图标  
- 5+ App projects configure push icons under the "plus" -> "distribute" -> "plugins" -> "push" -> "unipush" -> "icons" node of the manifest.json file
- “个推推送”模块已不再维护，推荐使用UniPush模块，如需继续使用“个推推送”模块，可将“unipush”节点名称修改为“igexin”进行配置，完整配置信息可参考[App完整manifest.json](/collocation/manifest-app)  
- The "UniPush" module is no longer maintained. It is recommended to use the UniPush module. If you want to continue to use the "Push" module, you can change the name of the "unipush" node to "igexin" for configuration. For complete configuration information, please refer to [App full manifest.json](/collocation/manifest-app)


##### 推送小图标(small)要求
##### Push small icon (small) request
设计规范需要注意：
Design specifications need to pay attention to:
1. 必须是带 Alpha 透明通道的 PNG 图片。 
1. Must be a PNG image with alpha transparency channel.
2. 背景必须是透明的。 （如果非透明就会显示为白色方块）  
2. The background must be transparent. (If it is not transparent, it will be displayed as a white square)

![](http://native-res.dcloud.net.cn/images/uniapp/push/unipsuh_small_icon_style.png.png) 




### 使用UniPush
### Using UniPush
- **uni-app项目详细使用教程请参考 [统一推送UniPush](https://uniapp.dcloud.io/unipush)**
- **Please refer to [UniPush](https://uniapp.dcloud.io/unipush)**
- **5+ App、Wap2App项目详细使用教程请参考 [UniPush使用指南](https://ask.dcloud.net.cn/article/35622)**
- **Please refer to [UniPush User Guide](https://ask.dcloud.net.cn/article/35622) for detailed usage tutorials of 5+ App and Wap2App projects.**

### 常见问题
- **iOS勾选推送并且基于HBuilderX 3.6.14+打包ipa变大的问题**  原因是推送SDK升级需要支持Swift环境，用生产证书+AppStore类型的描述文件打出来的ipa会增大60-70M左右，苹果为了兼容iOS12之前的Swift版本，打包AppStore的ipa需要将全部版本的Swift环境添加到ipa的根目录，上传的AppStore后苹果会处理这些Swift环境，用户实际下载的安装包不会大特别多

