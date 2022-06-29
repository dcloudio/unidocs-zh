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


### 使用UniPush
- **uni-app项目详细使用教程请参考 [统一推送UniPush](https://uniapp.dcloud.io/unipush)**
- **5+ App、Wap2App项目详细使用教程请参考 [UniPush使用指南](https://ask.dcloud.net.cn/article/35622)**

