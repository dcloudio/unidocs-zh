### uni.login(OBJECT)
登录
Log in

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|√|√|√|√|√|

H5平台登录注意事项：
Notes for H5 platform login:
- 微信内嵌浏览器运行H5版时，可通过js sdk实现微信登录，需要引入一个单独的js，[详见](https://ask.dcloud.net.cn/article/35380)
- When the WeChat embedded browser runs the H5 version, the WeChat login can be implemented through the js sdk, and a separate js needs to be introduced. [See details](https://ask.dcloud.net.cn/article/35380)
- 普通浏览器上实现微信登录，并非开放API，需要向微信申请，仅个别开发者有此权限
- Wechat login is implemented on ordinary browsers. It is not an open API. You need to apply to Wechat. Only individual developers have this permission.
- H5平台的其他登录，比如QQ登录、微博登录，uni-app未封装，请在条件编译里按普通H5写法编写。
- Other logins on the H5 platform, such as QQ login, Weibo login, and uni-app are not packaged, please write them in the normal H5 writing method in conditional compilation.

注意事项：
Precautions:
- 百度小程序平台需要在button组件的@login事件后再调用 uni.login ，[详见](https://smartprogram.baidu.com/docs/develop/function/login/),否则会返回“请登录”的错误信息，建议在@login事件中调用。
- uni.login 已针对百度小程序[兼容性升级](https://smartprogram.baidu.com/forum/topic/show/125547)转为 getLoginCode 调用，但某些情况下，百度小程序发布时兼容性诊断依然提示swan.login非兼容性改造，[详见](https://github.com/dcloudio/uni-app/issues/2443)，可使用 [uni.getLoginCode](#getLoginCode) 替代 uni.login 解决。
- 京东小程序IDE 暂时不支持此uni.login()，请用真机查看；IDE调用，只能返回模拟数据 code为200。
- The JD Mini Program IDE does not support this uni.login() temporarily, please use a real device to view it; when called by the IDE, it can only return simulated data. The code is 200.

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|平台差异说明|
|Parameter Name|Type|Required|Description|Platform Difference Description|
|:-|:-|:-|:-|:-|
|provider|String|否|登录服务提供商，通过 [uni.getProvider](/api/plugins/provider) 获取，如果不设置则弹出登录列表选择界面||
|provider|String|No|The login service provider is obtained through [uni.getProvider](/api/plugins/provider), if not set, the login list selection interface will pop up||
|scopes|String/Array|见平台差异说明|授权类型，默认 auth_base。支持 auth_base（静默授权）/ auth_user（主动授权） / auth_zhima（芝麻信用）|支付宝小程序|
|scopes|String/Array|See Platform Differences|Authorization Type, default auth_base. Support auth_base (silent authorization)/auth_user (active authorization)/auth_zhima (sesame credit)|Alipay applet|
|timeout|Number|否|超时时间，单位ms|微信小程序、百度小程序、京东小程序|
|timeout|Number|No|Timeout time, in ms|WeChat applet, Baidu applet, Jingdong applet|
|univerifyStyle|Object|否|[一键登录](/univerify)页面样式|App 3.0.0+|
|univerifyStyle|Object|No|[One-click login](/univerify)page style|App 3.0.0+|
|onlyAuthorize|Boolean|否|`微信登录`仅请求授权认证|App 3.2.6+|
|onlyAuthorize|Boolean|No|`WeChat Login` only requests authorization authentication|App 3.2.6+|
|success|Function|否|接口调用成功的回调||
|success|Function|No|Callback for successful interface call||
|fail|Function|否|接口调用失败的回调函数||
|fail|Function|No|Callback function for interface call failure||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
|complete|Function|No|The callback function of the end of the interface call (the call will be executed if the call succeeds or fails)|&nbsp;|

#### onlyAuthorize说明
#### onlyAuthorizeDescription

微信登录在未配置`onlyAuthorize`的情况下，调用`uni.login`接口用户登录凭证(`code`)不返回，用以换取登录信息(`authResult`)；需要在项目manifest.json中配置的`appsecret`，此参数云端打包后会保存在apk/ipa中，存在参数泄露的风险；HBuilderX3.4.18+ 不再提供此参数的可视化配置。对于安全性要求较低的开发者，可以通过manifest.json -> 源码视图 -> app-plus -> distribute -> sdkConfigs -> oauth -> weixin -> 添加appsecret 配置。
If `onlyAuthorize` is not configured for WeChat login, the user login credentials (`code`) will not be returned by calling the `uni.login` interface in exchange for the login information (`authResult`); it needs to be configured in the project manifest.json `appsecret`, this parameter will be saved in apk/ipa after being packaged in the cloud, there is a risk of parameter leakage; HBuilderX3.4.18+ no longer provides visual configuration of this parameter. For developers with low security requirements, you can add appsecret configuration through manifest.json -> source view -> app-plus -> distribute -> sdkConfigs -> oauth -> weixin -> .


**success 返回参数说明**
**success return parameter description**

|参数名|说明|平台差异说明|
|Parameter Name|Description|Platform Difference Description|
|:-|:-|:-|
|authResult|登录服务商提供的登录信息，服务商不同返回的结果不完全相同|微信登录配置`onlyAuthorize:true`则此项为空，App 3.2.6+ |
|authResult|Login information provided by the login service provider. Different service providers return different results
|code|用户登录凭证。开发者需要在开发者服务器后台，使用 code 换取 openid 和 session_key 等信息|微信登录配置`onlyAuthorize:true`才会返回，App 3.2.6+、京东小程序 |
|code|User login credentials. The developer needs to use the code in the background of the developer server to exchange information such as openid and session_key | WeChat login configuration `onlyAuthorize:true` will return, App 3.2.6+, Jingdong applet |
|appleInfo|Object|否|`苹果登录`返回的信息|App 3.4.3+|
|appleInfo|Object|No|The information returned by `Apple Login`|App 3.4.3+|
|errMsg|描述信息||
|errMsg|Description Information||

各个平台的登录流程存在差异，详细请参考相关平台的文档说明：
The login process of each platform is different. For details, please refer to the documentation of the relevant platform:

* [微信小程序登录](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html)
* [WeChat Mini Program Login](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html)
* [支付宝小程序用户授权](https://docs.alipay.com/mini/introduce/authcode)
* [Alipay Mini Program User Authorization](https://docs.alipay.com/mini/introduce/authcode)
* [百度小程序登录](https://smartprogram.baidu.com/docs/develop/api/open_log/#%E6%8E%88%E6%9D%83%E6%B5%81%E7%A8%8B%E8%AF%B4%E6%98%8E/)
* [Baidu Mini Program Login](https://smartprogram.baidu.com/docs/develop/api/open_log/#%E6%8E%88%E6%9D%83%E6%B5%81%E7%A8% 8B%E8%AF%B4%E6%98%8E/)
* [字节跳动小程序登录](https://developer.toutiao.com/dev/cn/mini-app/develop/open-capacity/log-in/login)
* [ByteDance Mini Program Login](https://developer.toutiao.com/dev/cn/mini-app/develop/open-capacity/log-in/login)
* [Apple登录、苹果登录、Sign in with Apple](/tutorial/app-oauth-apple)
* [Sign in with Apple, Sign in with Apple, Sign in with Apple](/tutorial/app-oauth-apple)
* [一键登录](/univerify)
* [One-click login](/univerify)

如果服务端使用`uniCloud`，那么官方提供了[uni-id](/uniCloud/uni-id)云端统一登录服务，把微信登录、短信验证码登录及角色权限管理等服务端登录开发，进行了统一的封装。
If the server uses `uniCloud`, then the official provides the [uni-id] (/uniCloud/uni-id) cloud unified login service, and the server login development such as WeChat login, SMS verification code login and role permission management, etc. Unified packaging.

前端统一的`uni.login`和云端统一的`uni-id`搭配，可以极大提升登录业务的开发效率，强烈推荐给开发者使用。uni-id的文档另见：[https://uniapp.dcloud.net.cn/uniCloud/uni-id](/uniCloud/uni-id-summary.md)
The combination of the unified `uni.login` of the front end and the unified `uni-id` of the cloud can greatly improve the development efficiency of the login business. It is strongly recommended for developers to use it. See also the documentation of uni-id: [https://uniapp.dcloud.net.cn/uniCloud/uni-id](/uniCloud/uni-id-summary.md)


**示例**
**Example**

```javascript
uni.login({
  provider: 'weixin',
  success: function (loginRes) {
    console.log(loginRes.authResult);
  }
});
```

### uni.getLoginCode(OBJECT)@getLoginCode
获取宿主 App 登录凭证（Authorization Code）

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|x|x|√|x|x|x|x|

**OBJECT 参数说明**

|参数名|类型|必填|说明|
|:-|:-|:-|:-|
|timeout|Number|否|超时时间（单位：ms）|
|success|Function|否|接口调用成功的回调函数|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明**

|参数名|类型|平台差异说明|
|:-|:-|:-|
|code|String|用户登录凭证（有效期十分钟），开发者需要在开发者服务器后台调用 API ，使用 code 换取 session_key 等信息。用户登录凭证 code 只能使用一次。|

### uni.checkSession
检查登录状态是否过期
Check if login status has expired

> 1.6.0 新增
> 1.6.0 New

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|x|√|√|√|√|√|x|

|属性|类型|必填|说明|
|Attribute|Type|Required|Description|
|:-|:-|:-|:-|
|success|function|否|接口调用成功的回调函数|
|success|function|No|Callback function for successful interface call|
|fail|function|否|接口调用失败的回调函数|
|fail|function|No|Callback function for interface call failure|
|complete|function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|function|No|The callback function of the end of the interface call (the call will be executed if the call succeeds or fails)|


### uni.getUserInfo(OBJECT)

获取用户信息。
Get user information.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|√|√|√|√|√|

**注意：**
- 微信小程序端，在用户未授权过的情况下调用此接口，不会出现授权弹窗，会直接进入 fail 回调（详见[《微信小程序公告》](https://developers.weixin.qq.com/community/develop/doc/0000a26e1aca6012e896a517556c01)）。在用户已授权的情况下调用此接口，可成功获取用户信息。
- On the WeChat applet, if the user calls this interface without authorization, the authorization pop-up window will not appear, and it will directly enter the fail callback (see ["WeChat applet announcement"](https://developers.weixin. qq.com/community/develop/doc/0000a26e1aca6012e896a517556c01)). When the user is authorized to call this interface, the user information can be successfully obtained.
- 京东小程序端，在用户未授权，调用该接口将直接报错。用户已经授权过，可使用该接口直接获取用户信息，不会弹二次授权框
- On the JD.com applet, if the user is not authorized, calling this interface will directly report an error. The user has been authorized, and can use this interface to directly obtain user information without popping up the secondary authorization box

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|平台差异说明|
|Parameter Name|Type|Required|Description|Platform Difference Description|
|:-|:-|:-|:-|:-|
|provider|String|否|登录服务提供商，通过 uni.getProvider 获取||
|provider|String|No|Login service provider, obtained through uni.getProvider||
|withCredentials|Boolean|否|是否带上登录态信息。|微信小程序、字节跳动小程序、飞书小程序、快手小程序|
|withCredentials|Boolean|No|Whether to bring login status information. |WeChat applet, ByteDance applet, Feishu applet, Kuaishou applet|
|lang|String|否|指定返回用户信息的语言，默认为 en。更多值请参考下面的说明。|微信小程序|
|lang|String|No|Specifies the language of the returned user information, the default is en. See the description below for more values. |WeChat Mini Program|
|timeout|Number|否|超时时间，单位 ms。|微信小程序|
|timeout|Number|No|Timeout time in ms. |WeChat Mini Program|
|success|Function|否|接口调用成功的回调||
|success|Function|No|Callback for successful interface call||
|fail|Function|否|接口调用失败的回调函数||
|fail|Function|No|Callback function for interface call failure||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
|complete|Function|No|The callback function of the end of the interface call (the call will be executed if the call succeeds or fails)|&nbsp;|

**lang 值说明**
**lang value description**

|值|说明|
|value|description|
|:-|:-|
|zh_CN|简体中文|
|zh_CN|Simplified Chinese|
|zh_TW|繁体中文|
|zh_TW|Traditional Chinese|
|en|英文|
|en|English|

**注意：**在小程序 withCredentials 为 true 时或是在 App 调用 uni.getUserInfo，要求此前有调用过 uni.login 且登录态尚未过期。微信基础库2.10.4版本对用户信息相关接口进行了调整，使用 uni.getUserInfo 获取得到的 userInfo 为匿名数据，建议使用 uni.getUserProfile 获取用户信息。
**Note:** When the applet withCredentials is true or the app calls uni.getUserInfo, it requires that uni.login has been called before and the login status has not expired. The WeChat base library version 2.10.4 has adjusted the user information related interfaces. The userInfo obtained by using uni.getUserInfo is anonymous data. It is recommended to use uni.getUserProfile to obtain user information.

**success 返回参数说明**
**success return parameter description**

|参数|类型|说明|平台差异说明|
|Parameter|Type|Description|Platform Difference Description|
|:-|:-|:-|:-|
|userInfo|OBJECT|用户信息对象||
|userInfo|OBJECT|User Information Object||
|rawData|String|不包括敏感信息的原始数据字符串，用于计算签名。||
|rawData|String| Raw data string excluding sensitive information, used to calculate the signature. ||
|signature|String|使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息。|微信小程序、字节跳动小程序、飞书小程序、快手小程序、京东小程序|
|signature|String|Use sha1( rawData + sessionkey ) to get a string to verify user information. |WeChat applet, ByteDance applet, Feishu applet, Kuaishou applet, Jingdong applet|
|encryptedData|String|包括敏感数据在内的完整用户信息的加密数据，详细见加密数据解密算法。|微信小程序、字节跳动小程序、飞书小程序、快手小程序|
|encryptedData|String|Encrypted data of complete user information including sensitive data, see Encrypted Data Decryption Algorithm for details. |WeChat applet, ByteDance applet, Feishu applet, Kuaishou applet|
|iv|String|加密算法的初始向量，详细见加密数据解密算法。|微信小程序、字节跳动小程序、飞书小程序、快手小程序|
|iv|String|Initial vector of encryption algorithm, see Encrypted Data Decryption Algorithm for details. |WeChat applet, ByteDance applet, Feishu applet, Kuaishou applet|
|errMsg|String|描述信息|&nbsp;|
|errMsg|String|Description|&nbsp;|

**userInfo 参数说明**
**userInfo parameter description**

|参数|类型|说明|平台差异说明|
|Parameter|Type|Description|Platform Difference Description|
|:-|:-|:-|:-|
|nickName|String|用户昵称||
|nickName|String|User Nickname||
|openId|String|该服务商唯一用户标识|App|
|openId|String|The unique user ID of the service provider|App|
|avatarUrl|String|用户头像|&nbsp;|
|avatarUrl|String|User Avatar|&nbsp;|
|gender|String|用户性别：0-男，1-女，2-保密|京东小程序|
|gender|String|User gender: 0-male, 1-female, 2-secret|Jingdong Mini Program|

除了以上三个必有的信息外，不同服务供应商返回的其它信息会存在差异。
In addition to the above three necessary information, there will be differences in other information returned by different service providers.

#### App端登录的扩展说明
#### App-side login extension description

App端还支持更多登录相关API，如`logout`，[详见](https://www.html5plus.org/doc/zh_cn/oauth.html)
The App side also supports more login-related APIs, such as `logout`, [see details](https://www.html5plus.org/doc/zh_cn/oauth.html)

App端登录相关的SDK需要在manifest中配置：
App-side login-related SDKs need to be configured in the manifest:
1. 打开 manifest.json -> App模块权限配置，勾选 OAuth(登录鉴权)。
1. Open manifest.json -> App module permission configuration, check OAuth (login authentication).
2. 打开 manifest.json -> App SDK配置，查看到登录鉴权。在说明中有蓝色链接，其中包括向微信、QQ、微博等平台申请sdk的链接。
2. Open manifest.json -> App SDK configuration and check the login authentication. There are blue links in the description, including links to apply for sdk on platforms such as WeChat, QQ, Weibo, etc.
3. 向微信、QQ、微博等平台申请到sdk的信息后，回填到manifest里。
3. After applying for the sdk information from platforms such as WeChat, QQ, Weibo, etc., backfill it into the manifest.
4. 这些配置需要打包生效，真机运行仍然是HBuilder基座的设置，可使用[自定义基座包](http://ask.dcloud.net.cn/article/12723)。离线打包请参考离线打包文档在原生工程中配置。
4. These configurations need to be packaged to take effect. The real machine operation is still the setting of the HBuilder base. You can use the [custom base package](http://ask.dcloud.net.cn/article/12723). For offline packaging, please refer to the offline packaging documentation to configure in the native project.
5. 配置并打包后，通过`uni.getProvider`可以得到配置的结果列表，注意这里返回的是manifest配置的，与手机端是否安装微信、QQ、微博无关。
5. After configuration and packaging, you can get a list of configuration results through `uni.getProvider`. Note that what is returned here is the manifest configuration, which has nothing to do with whether WeChat, QQ, or Weibo is installed on the mobile phone.

如果手机端未安装QQ、微博，调用时会启动这些平台的wap页面登录，如果已安装相应客户端，会启动它们的客户端登录。
If QQ and Weibo are not installed on the mobile phone, the wap page login of these platforms will be activated when called, and if the corresponding client has been installed, their client login will be activated.

**示例**
**Example**

```javascript
uni.login({
  provider: 'weixin',
  success: function (loginRes) {
    console.log(loginRes.authResult);
    // 获取用户信息
    // get user information
    uni.getUserInfo({
      provider: 'weixin',
      success: function (infoRes) {
        console.log('用户昵称为：' + infoRes.userInfo.nickName);
      }
    });
  }
});
```

#### App端集成其他登录SDK如支付宝、淘宝、facebook登录的说明 @app-oauth
#### App-side integration of other login SDKs such as Alipay, Taobao, facebook login instructions @app-oauth
1. [支付宝登录](https://ext.dcloud.net.cn/search?q=%E6%94%AF%E4%BB%98%E5%AE%9D%E7%99%BB%E9%99%86)、[淘宝登录](https://ext.dcloud.net.cn/search?q=%E7%99%BE%E5%B7%9D)、[抖音登录](https://ext.dcloud.net.cn/search?q=%E6%8A%96%E9%9F%B3%E7%99%BB%E5%BD%95)等在插件市场均已有插件，还有[sharesdk](https://ext.dcloud.net.cn/search?q=sharesdk)等专业集成多家登录分享的插件。
1. [Alipay Login](https://ext.dcloud.net.cn/search?q=%E6%94%AF%E4%BB%98%E5%AE%9D%E7%99%BB%E9% 99%86), [Taobao Login](https://ext.dcloud.net.cn/search?q=%E7%99%BE%E5%B7%9D), [Douyin Login](https://ext.dcloud.net.cn/search?q=%E7%99%BE%E5%B7%9D) ext.dcloud.net.cn/search?q=%E6%8A%96%E9%9F%B3%E7%99%BB%E5%BD%95), etc. all have plug-ins in the plug-in market, as well as [sharesdk ](https://ext.dcloud.net.cn/search?q=sharesdk) and other professional integration plugins for multiple login sharing.
2. 现已支持登录：
2. Login is now supported:
  - [facebook 登录](/tutorial/app-oauth-facebook)
  - [facebook login](/tutorial/app-oauth-facebook)
  - [Google 登录](/tutorial/app-oauth-google)
  - [Google Sign In](/tutorial/app-oauth-google)
3. 也可以内嵌web-view组件，使用web登录模式集成这些三方登录
3. You can also embed the web-view component and use the web login mode to integrate these three-party logins


### uni.getUserProfile(OBJECT)

获取用户信息。每次请求都会弹出授权窗口，用户同意后返回 userInfo。
Get user information. An authorization window will pop up for each request, and userInfo will be returned after the user agrees.



**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√（基础库2.10.4）|x|x|x|x|x|x|
|x|x|√ (base library 2.10.4) |x|x|x|x|x|x|

**注意：** 该API仅支持微信小程序端，微信小程序调整了相关接口（详见[《小程序登录、用户信息相关接口调整说明》](https://developers.weixin.qq.com/community/develop/doc/000cacfa20ce88df04cb468bc52801?highLine=getUserProfile%253Afail)）。每次触发 uni.getUserProfile 均会弹出授权窗口，用户授权后可成功获取用户信息。该API暂不支持在事件中使用异步操作，否则会触发错误：{errMsg: "getUserProfile:fail can only be invoked by user TAP gesture."}
**Note:** This API only supports the WeChat applet, and the WeChat applet has adjusted the relevant interface (see ["Mini Program Login, User Information Related Interface Adjustment Instructions"](https://developers.weixin.qq. com/community/develop/doc/000cacfa20ce88df04cb468bc52801?highLine=getUserProfile%253Afail)). Each time uni.getUserProfile is triggered, an authorization window will pop up, and the user can successfully obtain user information after authorization. This API does not support the use of asynchronous operations in events, otherwise an error will be triggered: {errMsg: "getUserProfile:fail can only be invoked by user TAP gesture."}
抖音从基础库 2.30.0 开始支持本方法，低版本需做兼容处理(详见：https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/api/open-interface/user-information/tt-get-user-profile/).
Douyin supports this method from the base library 2.30.0, and the lower version needs to be compatible (see: https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/api/open-interface /user-information/tt-get-user-profile/).

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
|Parameter name|Type|Required|Description|
|:-|:-|:-|:-|
|desc|String|是|声明获取用户个人信息后的用途，不超过30个字符|
|desc|String|Yes|Declare the purpose of obtaining the user's personal information, no more than 30 characters|
|lang|String|否|指定返回用户信息的语言，默认为 en。更多值请参考下面的说明。|
|lang|String|No|Specifies the language of the returned user information, the default is en. See the description below for more values. |
|success|Function|否|接口调用成功的回调|
|success|Function|No|Callback for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
|fail|Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function|No|The callback function of the end of the interface call (the call will be executed if the call succeeds or fails)|

**lang 值说明**
**lang value description**

|值|说明|
|value|description|
|:-|:-|
|zh_CN|简体中文|
|zh_CN|Simplified Chinese|
|zh_TW|繁体中文|
|zh_TW|Traditional Chinese|
|en|英文|
|en|English|

**注意：**可以使用 if(uni.getUserProfile) 判断uni.getUserProfile是否可用。
**Note:** You can use if(uni.getUserProfile) to determine if uni.getUserProfile is available.

**success 返回参数说明**
**success return parameter description**

|参数|类型|说明|
|parameters|type|description|
|:-|:-|:-|
|userInfo|OBJECT|用户信息对象|
|userInfo|OBJECT|User Information Object|
|rawData|String|不包括敏感信息的原始数据字符串，用于计算签名。|
|rawData|String| Raw data string excluding sensitive information, used to calculate the signature. |
|signature|String|使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息。|
|signature|String|Use sha1( rawData + sessionkey ) to get a string to verify user information. |
|encryptedData|String|包括敏感数据在内的完整用户信息的加密数据，详细见加密数据解密算法。|
|encryptedData|String|Encrypted data of complete user information including sensitive data, see Encrypted Data Decryption Algorithm for details. |
|iv|String|加密算法的初始向量，详细见加密数据解密算法。|
|iv|String|Initial vector of encryption algorithm, see Encrypted Data Decryption Algorithm for details. |
|cloudID|String|敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据，详细见云调用直接获取开放数据|
|cloudID|String|The cloud ID corresponding to the sensitive data will be returned only when the applet developed on the cloud is activated. The open data can be obtained directly through the cloud call. For details, see the direct access to the open data by the cloud call|
|errMsg|String|描述信息|
|errMsg|String|Description|

**userInfo 参数说明**
**userInfo parameter description**

|参数|类型|说明|
|parameters|type|description|
|:-|:-|:-|
|nickName|String|用户昵称|
|nickName|String|User Nickname|
|avatarUrl|String|用户头像|
|avatarUrl|String|User Avatar|
|gender|Number|用户性别|
|gender|Number|User gender|
|country|String|用户所在国家|
|country|String|User country|
|province|String|用户所在省份|
|province|String|province of the user|
|city|String|用户所在城市|
|city|String|The user's city|
|language|String|显示 country，province，city 所用的语言|
|language|String|Display language for country, province, city|

**gender 的合法值**
**legal value of gender**

|值|说明|
|value|description|
|:-|:-|
|0|未知|
|0|Unknown|
|1|男性|
|1|Male|
|2|女性|
|2|Women|

**language 的合法值**
**Legal values for language**

|值|说明|
|value|description|
|:-|:-|
|en|英文|
|en|English|
|zh_CN|简体中文|
|zh_CN|Simplified Chinese|
|zh_TW|繁体中文|
|zh_TW|Traditional Chinese|


### uni.preLogin(OBJECT)
预登录。
Pre-login.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|3.0.0+|x|x|x|x|x|x|x|x|

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
|Parameter name|Type|Required|Description|
|:-|:-|:-|:-|
|provider|String|否|登录服务提供商，通过 [uni.getProvider](/api/plugins/provider) 获取，目前仅支持[一键登录](/univerify)|
|provider|String|No|Login service provider, obtained through [uni.getProvider](/api/plugins/provider), currently only supports [one-click login](/univerify)|
|success|Function|否|接口调用成功的回调|
|success|Function|No|Callback for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
|fail|Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function|No|The callback function of the end of the interface call (the call will be executed if the call succeeds or fails)|


### uni.closeAuthView()
关闭[一键登录](/univerify)页面。
Close the [One Click Login](/univerify) page.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|3.0.0+|x|x|x|x|x|x|x|x|


### uni.getCheckBoxState(OBJECT)
获取[一键登录](/univerify)条款勾选框状态。
Get the checkbox status of the [one-click login](/univerify) clause.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|3.2.3+|x|x|x|x|x|x|x|x|

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
|Parameter name|Type|Required|Description|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调|
|success|Function|No|Callback for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
|fail|Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function|No|The callback function of the end of the interface call (the call will be executed if the call succeeds or fails)|

**success 返回参数说明**
**success return parameter description**

|参数|类型|说明|
|parameters|type|description|
|:-|:-|:-|
|state|Boolean|一键登录条款勾选框状态|
|state|Boolean|One-click login terms check box state|
|errMsg|String|描述信息|
|errMsg|String|Description|

### uni.getUniverifyManager(OBJECT)
获取全局唯一的一键登录管理器 univerifyManager
Get the globally unique one-click login manager univerifyManager

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√ (3.2.13+)|x|x|x|x|x|x|x|x|

**univerifyManager 方法说明**
**univerifyManager method description**

|方法名|类型|说明|
|method name|type|description|
|:-|:-|:-|
|login|Function|一键登录|
|login|Function|One-click login|
|preLogin|Function|一键登录预登录|
|preLogin|Function|One-click login pre-login|
|close|Function|关闭一键登陆页面|
|close|Function|Close the one-click landing page|
|getCheckBoxState|Function|获取一键登录条款勾选框状态|
|getCheckBoxState|Function|Get the check box state of one-click login terms|
|onButtonsClick|Function|订阅一键登录自定义按钮点击事件|
|onButtonsClick|Function|Subscribe to one-click login custom button click event|
|offButtonsClick|Function|取消订阅一键登录自定义按钮点击事件|
|offButtonsClick|Function|Unsubscribe one-click login custom button click event|

**使用示例**
**Use example**

```js
// 使用时不需要传递 provider
const univerifyManager = uni.getUniverifyManager()

// 预登录
// pre-login
// 参数和 uni.preLogin 相同
// Parameters are the same as uni.preLogin
univerifyManager.preLogin()

// 调用一键登录弹框
// Call the one-click login popup
// 仅需传参 univerifyStyle 即可
// Just pass the parameter unverifyStyle
univerifyManager.login({
  univerifyStyle: {
    "fullScreen": true,
    "buttons": {
        "iconWidth": "45px",
        "list": [
            {
                "provider": "apple",
                "iconPath": "/static/apple.png"
            },
            {
                "provider": "weixin",
                "iconPath": "/static/wechat.png"
            }
        ]
    }
  },
  success (res) {
    console.log('login success', res)
  }
})

const callback = (res) => {
  // 获取一键登录弹框协议勾选状态
  // Get the check status of the one-click login popup protocol
  // 参数和 uni.getCheckBoxState 相同
  // Parameters are the same as uni.getCheckBoxState
  univerifyManager.getCheckBoxState({
    success(res) {
      console.log("getCheckBoxState res: ", res);
      if (res.state) {
        // 关闭一键登录弹框
        // Close the one-click login popup
        // 参数和 uni.closeAuthView 相同
        // same parameters as uni.closeAuthView
        univerifyManager.close()
      }
    }
  })
}

// 订阅自定义按钮点击事件
// Subscribe to custom button click event
univerifyManager.onButtonsClick(callback)
// 取消订阅自定义按钮点击事件
// Unsubscribe from custom button click event
univerifyManager.offButtonsClick(callback)
```