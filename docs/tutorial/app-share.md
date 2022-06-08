App端Share(分享)模块封装了市场上主流的三方分享SDK，提供JS API统一调用分享功能。

|项目类型|API|
|:-|:-|
|uni-app|[uni.share(OBJECT)](api/plugins/share#share)、[uni.shareWithSystem(OBJECT)](api/plugins/share#sharewithsystem)|
|5+App/Wap2App|[plus.share.*](https://www.html5plus.org/doc/zh_cn/share.html)

uni-app项目中，官方提供了封装好的[uni-share](https://ext.dcloud.net.cn/plugin?id=4860)插件方便开发者使用。

使用分享功能需在项目manifest.json的“App模块配置”中勾选“Share(分享)”，并根据项目实际情况勾选使用的三方分享平台：
![](https://native-res.dcloud.net.cn/images/uniapp/share/modules.png)

> 提示：三方分享模块参数配置需提交云端打包后才能生效，真机运行调试时请使用[自定义基座](http://ask.dcloud.net.cn/article/35115)

使用分享功能基本流程：
- 向三方分享平台申请开通，有些平台（如微信分享）申请成功后会获取appid
- 在HBuilderX中配置申请的参数（如appid等），提交云端打包生成[自定义基座](http://ask.dcloud.net.cn/article/35115)
- 在App项目中调用API进行分享操作

支持的三方分享平台：
- [微信分享](tutorial/app-share-weixin)  
- [QQ分享](tutorial/app-share-qq)  
- [新浪微博分享](tutorial/app-share-sina)  


