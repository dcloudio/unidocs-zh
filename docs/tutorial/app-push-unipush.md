### 开通  
- 登录[DCloud开发者中心](https://dev.dcloud.net.cn/)，通过实名认证后，可通过以下入口进入UniPush的Web控制台进行配置
  + HBuilderX中打开项目的manifest.json文件，在“App模块配置”项的“Push(消息推送)”->“UniPush”下点击`配置`
  ![](https://native-res.dcloud.net.cn/images/uniapp/push/unipush-hx-config.png)
  + 登录[DCloud开发者中心](https://dev.dcloud.net.cn/)，在“我的应用”列表中选择进入应用管理页面，点击上方选项卡中的“uniPush”，然后点击“应用信息”
  ![](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/unipush-web-config.png)
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

#### FCM配置@unipush-gp-fcm

##### 概述
在海外网络环境下，部分网络在连接UniPush技术支持供应商个推的推送服务时，可能出现不稳定的情况。此时，开发者可以接入 FCM 辅助通道，当在个推服务断线的情况下，通过谷歌的 FCM 推送通道下发消息，提升推送到达率。

**使用FCM时手机端需安装Google移动服务（GMS），并且可以正常连接Google服务（国内网络需要翻墙）**

使用FCM必须先开通使用UniPush：
- 开通UniPush服务参考：[https://ask.dcloud.net.cn/article/35716](https://ask.dcloud.net.cn/article/35716)
- App端使用UniPush参考：[https://ask.dcloud.net.cn/article/35622](https://ask.dcloud.net.cn/article/35622)

##### 从谷歌后台申请key信息
进入 [Firebase官网](https://firebase.google.com/)创建项目，获取google-services.json文件及Server key。

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
点击“Next”继续
![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/download.png)

此步骤中的操作云端打包机已经处理，忽略提示信息，继续点击“Next”，进入下一步
完成注册Android应用，点击“Continue to console”回到项目详情页面
![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/continuetoconsole.png)

点击“Project settings”，进入项目设置页面
![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/settings.png)

切换到“Cloud Messaging”项，获取“Server key”，**保存Server key后面需要使用**

由于新版`Firebase Cloud Messaging API (V1)`不提供`Server key`, 所以需要手动开启旧版 `Cloud Messaging API` 。
![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_android_setup_get_server_key.png)

跳转到Api管理页面启动`Cloud Messaging API`

![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_android_open_old_api.png)

启动`Cloud Messaging API`后即可得到`Server key`

![](https://native-res.dcloud.net.cn/images/uniapp/push/firebase/firebase_android_server_key.png)

##### UniPush后台配置FCM参数
配置FCM需先开通UniPush，如应用未开通UniPush请先开通。
在HBuilderX的mainfest.json页面，在“App SDK配置”项下的“uniPush”栏点击“配置”
![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/hx_unipush.png)

打开DCloud的开发者中心后台进入应用列表，点击应用名称进入详情，点击上方“uniPush”选项卡，点击“厂商推送设置”按钮进入配置UniPush的FCM参数 
[attach]94813[/attach]



保存成功后在HBuilderX中重新提交云端打包，并在“App-云打包”界面选择google play 渠道包：
![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/unipush/fcm/hx_package.png)

如果你已经完成了uniPush的代码开发，只需完成上述配置和打包即可，不用修改代码。

如果你还没有开发过推送代码，参考App端使用UniPush参考：[https://ask.dcloud.net.cn/article/35622](https://ask.dcloud.net.cn/article/35622)



##### 本地离线打包
Android平台离线sdk集成UniPush支持FCM可参考：[Push(消息推送)](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/push?id=%e8%b0%b7%e6%ad%8c%e6%8e%a8%e9%80%81)

##### 注意事项


** FCM 离线消息仅支持GOOGLE 推送，暂不支持国内设备商的海外发行版本**

#### Android平台推送图标配置@unipush-icons
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

![](https://native-res.dcloud.net.cn/images/uniapp/push/custom_push_icon/unipush_icons_hx_config.png)

**注意事项**  
- 5+ App项目在manifest.json文件的 "plus" -> "distribute" -> "plugins" -> "push" -> "unipush" -> "icons"节点下配置推送图标  
- “个推推送”模块已不再维护，推荐使用UniPush模块，如需继续使用“个推推送”模块，可将“unipush”节点名称修改为“igexin”进行配置，完整配置信息可参考[App完整manifest.json](/collocation/manifest-app)  


##### 推送小图标(small)要求
设计规范需要注意：
1. 必须是带 Alpha 透明通道的 PNG 图片。 
2. 背景必须是透明的。 （如果非透明就会显示为白色方块）  

![](http://native-res.dcloud.net.cn/images/uniapp/push/unipsuh_small_icon_style.png.png) 




### 使用UniPush
- **uni-app项目详细使用教程请参考 [统一推送UniPush](https://uniapp.dcloud.io/unipush)**
- **5+ App、Wap2App项目详细使用教程请参考 [UniPush使用指南](https://ask.dcloud.net.cn/article/35622)**


### 常见问题

#### iOS启动时弹出发送通知授权框的问题@ios_pushregistermode  
App勾选“Push（消息推送）”模块后，默认应用启动会立即申请推送消息权限，弹出系统发送通知授权框，如下：  
![](https://native-res.dcloud.net.cn/images/uniapp/push/ios-privacy.png)  
如果希望应用启动不申请推送消息权限（不弹出系统发送通知授权框），可以在manifest.json文件的源码视图中配置"app-plus" -> "distribute" -> "ios" -> "pushRegisterMode"字段值为"manual"，如下：  
```json
{
	"app-plus": {
		"distribute": {
			"ios": {
				"pushRegisterMode": "manual"
			}
		}
	}
}
```
> 需提交云端打包后生效  
> 配置为"manual"，需要在App代码中调用[uni.getPushClientId](https://uniapp.dcloud.net.cn/api/plugins/push.html#getpushclientid)触发申请推送消息权限，用户同意返回客户端推送标识  


#### iOS勾选推送并且基于HBuilderX 3.6.14+打包ipa变大的问题  
1. 为什么会变大?  
  原因是推送SDK升级需要支持Swift环境，之前工程如果不包含Swift环境需要添加Swift环境(打包使用Swift语言开发的原生插件同样有类似问题)。
2. 为什么只有生产包变大?  
  只有用生产证书+AppStore类型的描述文件打出来的ipa会增大80M左右，苹果为了兼容iOS12.2之前的Swift版本，打包AppStore类型的ipa需要将全部版本的Swift环境添加到ipa的根目录，而测试证书以及adhoc描述文件打的包不会添加多个版本的Swift环境。
  另：设置支持系统大于iOS12.2也可解决以上问题 [设置iOS支持的最低版本](https://uniapp.dcloud.net.cn/collocation/manifest-app.html#ios) 
3. ipa变大会导致用户下载的应用变大吗?    
  大约只会增到2-3M左右。ipa上传的AppStore后苹果会根据用户手机系统最终只会保留一份Swift环境，用户实际下载的安装包不会大特别多。

