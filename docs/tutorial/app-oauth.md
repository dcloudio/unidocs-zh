App端OAuth(登录鉴权)模块封装了市场上主流的三方登录SDK，提供JS API统一调用登录鉴权功能。

|项目类型|API|
|:-|:-|
|uni-app|[uni.preLogin(OBJECT)](https://uniapp.dcloud.io/api/plugins/login?id=prelogin)、[uni.login(OBJECT)](api/plugins/login?id=login)、[uni.getUserInfo(OBJECT)](https://uniapp.dcloud.io/api/plugins/login?id=getuserinfo)、[uni.closeAuthView()](https://uniapp.dcloud.io/api/plugins/login?id=closeauthview)、[uni.getCheckBoxState(OBJECT)](https://uniapp.dcloud.io/api/plugins/login?id=getcheckboxstate)、[uni.getUniverifyManager(OBJECT)](https://uniapp.dcloud.io/api/plugins/login?id=getuniverifymanager)|
|5+App/Wap2App|[plus.oauth.*](https://www.html5plus.org/doc/zh_cn/oauth.html)

如果服务端使用[uniCloud](https://uniapp.dcloud.io/uniCloud/README)，官方提供了[uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id)云端统一登录服务，把微信登录、短信验证码登录及角色权限管理等服务端登录开发，进行了统一的封装。前端统一的`uni.login`和云端统一的`uni-id`搭配，可以极大提升登录业务的开发效率，强烈推荐给开发者使用。uni-id的文档另见：[https://uniapp.dcloud.net.cn/uniCloud/uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id)

使用登录鉴权功能需在项目manifest.json的“App模块配置”中勾选“OAuth(登录鉴权)”，并根据项目实际情况勾选使用的三方登录平台：
![](https://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/oauth/modules.png)

> 提示：三方登录模块参数配置需提交云端打包后才能生效，真机运行调试时请使用[自定义基座](http://ask.dcloud.net.cn/article/35115)

使用登录鉴权功能基本流程：
- 向三方登录平台申请开通，有些平台（如微信登录）申请成功后会获取appid
- 在HBuilderX中配置申请的参数（如appid等），提交云端打包生成[自定义基座](http://ask.dcloud.net.cn/article/35115)
- 在App项目中调用API进行登录，成功后获取到授权标识提交到业务服务器完成登录操作

支持的三方登录平台：
- [一键登录（univerify）](https://uniapp.dcloud.io/univerify)  
- [苹果登录（Sign in with Apple）](https://uniapp.dcloud.io/app-oauth-apple)  
- [微信登录](https://uniapp.dcloud.io/app-oauth-weixin)  
- [QQ登录](https://uniapp.dcloud.io/app-oauth-qq)  
- [新浪微博登录](https://uniapp.dcloud.io/app-oauth-sina)  
- [Google登录](https://uniapp.dcloud.io/app-oauth-google)  
- [Facebook登录](https://uniapp.dcloud.io/app-oauth-facebook)  



