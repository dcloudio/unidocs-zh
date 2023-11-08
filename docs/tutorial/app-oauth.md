App端OAuth(登录鉴权)模块封装了市场上主流的三方登录SDK，提供JS API统一调用登录鉴权功能。
The App-side OAuth (login authentication) module encapsulates the mainstream three-party login SDKs on the market, and provides the JS API to call the login authentication function uniformly.

|项目类型|API|
|Project Type|API|
|:-|:-|
|uni-app|[uni.preLogin(OBJECT)](https://uniapp.dcloud.io/api/plugins/login?id=prelogin)、[uni.login(OBJECT)](api/plugins/login?id=login)、[uni.getUserInfo(OBJECT)](https://uniapp.dcloud.io/api/plugins/login?id=getuserinfo)、[uni.closeAuthView()](https://uniapp.dcloud.io/api/plugins/login?id=closeauthview)、[uni.getCheckBoxState(OBJECT)](https://uniapp.dcloud.io/api/plugins/login?id=getcheckboxstate)、[uni.getUniverifyManager(OBJECT)](https://uniapp.dcloud.io/api/plugins/login?id=getuniverifymanager)|
|5+App/Wap2App|[plus.oauth.*](https://www.html5plus.org/doc/zh_cn/oauth.html)

如果服务端使用[uniCloud](https://uniapp.dcloud.io/uniCloud/README)，官方提供了[uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id)云端统一登录服务，把微信登录、短信验证码登录及角色权限管理等服务端登录开发，进行了统一的封装。前端统一的`uni.login`和云端统一的`uni-id`搭配，可以极大提升登录业务的开发效率，强烈推荐给开发者使用。uni-id的文档另见：[https://uniapp.dcloud.net.cn/uniCloud/uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id)
If the server uses [uniCloud](https://uniapp.dcloud.io/uniCloud/README), the official provides [uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id) The cloud unified login service integrates the development of server-side logins such as WeChat login, SMS verification code login, and role rights management. The combination of the unified `uni.login` of the front end and the unified `uni-id` of the cloud can greatly improve the development efficiency of the login business, and is strongly recommended for developers to use. See also the documentation of uni-id: [https://uniapp.dcloud.net.cn/uniCloud/uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id)

使用登录鉴权功能需在项目manifest.json的“App模块配置”中勾选“OAuth(登录鉴权)”，并根据项目实际情况勾选使用的三方登录平台：
![](https://native-res.dcloud.net.cn/images/uniapp/oauth/modules.png)

> 提示：三方登录模块参数配置需提交云端打包后才能生效，真机运行调试时请使用[自定义基座](http://ask.dcloud.net.cn/article/35115)
> Tip: The parameter configuration of the three-party login module can only take effect after submitting the cloud package. Please use the [custom base] when running and debugging the real machine (http://ask.dcloud.net.cn/article/35115)

使用登录鉴权功能基本流程：
The basic process of using the login authentication function:
- 向三方登录平台申请开通，有些平台（如微信登录）申请成功后会获取appid
- Apply to the third-party login platform for activation, some platforms (such as WeChat login) will obtain the appid after the application is successful
- 在HBuilderX中配置申请的参数（如appid等），提交云端打包生成[自定义基座](http://ask.dcloud.net.cn/article/35115)
- Configure the parameters of the application (such as appid, etc.) in HBuilderX, and submit the cloud package to generate [custom base](http://ask.dcloud.net.cn/article/35115)
- 在App项目中调用API进行登录，成功后获取到授权标识提交到业务服务器完成登录操作
- Call the API in the App project to log in, and after success, obtain the authorization ID and submit it to the business server to complete the login operation

支持的三方登录平台：
Supported third-party login platforms:
- [一键登录（univerify）](univerify.md)
- [One-click login (univerify)](univerify.md)
- [苹果登录（Sign in with Apple）](app-oauth-apple.md)
- [Sign in with Apple](app-oauth-apple.md)
- [微信登录](app-oauth-weixin.md)
- [WeChat Login](app-oauth-weixin.md)
- [QQ登录](app-oauth-qq.md)
- [QQ Login](app-oauth-qq.md)
- [新浪微博登录](app-oauth-sina.md)
- [Sina Weibo Login](app-oauth-sina.md)
- [Google登录](app-oauth-google.md)
- [Google Login](app-oauth-google.md)
- [Facebook登录](app-oauth-facebook.md)
- [Facebook Login](app-oauth-facebook.md)



