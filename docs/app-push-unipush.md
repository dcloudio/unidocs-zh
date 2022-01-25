### 开通  
- 登录[DCloud开发者中心](https://dev.dcloud.net.cn/)，通过实名认证后，可通过以下入口进入UniPush的Web控制台进行配置
  + HBuilderX中打开项目的manifest.json文件，在“App模块配置”项的“Push(消息推送)”->“UniPush”下点击`配置`
  ![](https://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/push/unipush-hx-config.png)
  + 登录[DCloud开发者中心](https://dev.dcloud.net.cn/)，在“我创建的应用”列表中选择进入应用管理页面，点击左侧导航栏中的“Uni Push”
- 在UniPush开通界面配置“Android包名”、“Android应用签名”、“iOS Bundle Id”等信息
- 为了提升App离线送达率，需配置厂商推送设置

更多信息详见 [UniPush开通指南](https://ask.dcloud.net.cn/article/35716)


### 配置  
在manifest.json文件“App模块配置”项的“Push(消息推送)”下，勾选“UniPush”
![](https://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/push/unipush-manifest.png)

> 提示：需先申请开通审核通过UniPush才能提交云端打包


### 使用UniPush
**详细使用教程请参考 [统一推送UniPush](https://uniapp.dcloud.io/unipush)**

