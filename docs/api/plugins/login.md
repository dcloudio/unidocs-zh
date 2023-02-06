### uni.login(OBJECT)
登录
Log in

uni.login是一个客户端API，统一封装了各个平台的各种常见的登录方式，包括App手机号一键登陆、三方登录（微信、微博、QQ、Apple、google、facebook）、各家小程序内置登录。
uni.login is a client API that unifies and encapsulates various common login methods of various platforms, including one-click login with App mobile number, three-party login (WeChat, Weibo, QQ, Apple, Google, Facebook), various MiniApp built-in login.

除了前端API，DCloud还提供了[uni-id](/uniCloud/uni-id-summary.md)，这是一个云端一体的、完整的、账户开源框架。不仅包括客户端API，还包括前端页面、服务器代码、管理后台等所有与登录账户有关的服务，包括短信验证码、密码加密存储、忘记密码、头像更新等所有常见账户相关功能。
In addition to the front-end API, DCloud also provides [uni-id](/uniCloud/uni-id-summary.md), which is a cloud-integrated, complete, account open source framework. It includes not only the client API, but also all services related to login accounts such as front-end pages, server code, and management background, including all common account-related functions such as SMS verification codes, password encrypted storage, forgotten passwords, and avatar updates.

**平台差异说明**
**Platform Difference Description**

|App|Web|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
| App| Web|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|√|√|√|√|√|

大多数登录方式，都需要申请开通相关服务，具体点击下面的文档查看。
For most login methods, you need to apply for the activation of related services. For details, click the document below to view.

#### App平台支持的登录方式
#### Login methods supported by App platform
- [手机号一键登录（univerify）](/univerify.md)
- [One-key login with mobile phone number (univerify)](/univerify.md)
- [苹果登录（Sign in with Apple）](/tutorial/app-oauth-apple.md)
- [Sign in with Apple](/tutorial/app-oauth-apple.md)
- [微信登录](/tutorial/app-oauth-weixin.md)
- [WeChat Login](/tutorial/app-oauth-weixin.md)
- [QQ登录](/tutorial/app-oauth-qq.md)
- [QQ Login](/tutorial/app-oauth-qq.md)
- [新浪微博登录](/tutorial/app-oauth-sina.md)
- [Sina Weibo Login](/tutorial/app-oauth-sina.md)
- [Google登录](/tutorial/app-oauth-google.md)
- [Google Login](/tutorial/app-oauth-google.md)
- [Facebook登录](/tutorial/app-oauth-facebook.md)
- [Facebook Login](/tutorial/app-oauth-facebook.md)

#### 小程序平台支持的登录方式
####The login methods supported by the MiniApp platform
* [微信小程序登录](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html)
* [WeChat MiniApp Login](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html)
* [支付宝小程序登录](https://docs.alipay.com/mini/introduce/authcode)
* [Alipay MiniApp login](https://docs.alipay.com/mini/introduce/authcode)
* [百度小程序登录](https://smartprogram.baidu.com/docs/develop/api/open_log/#%E6%8E%88%E6%9D%83%E6%B5%81%E7%A8%8B%E8%AF%B4%E6%98%8E/)
* [Baidu MiniApp login](https://smartprogram.baidu.com/docs/develop/api/open_log/#%E6%8E%88%E6%9D%83%E6%B5%81%E7%A8%8B%E8%AF%B4%E6%98%8E/)
* [字节跳动小程序登录](https://developer.toutiao.com/dev/cn/mini-app/develop/open-capacity/log-in/login)
* [ByteDance MiniApp login](https://developer.toutiao.com/dev/cn/mini-app/develop/open-capacity/log-in/login)
* [QQ小程序登录](https://q.qq.com/wiki/develop/miniprogram/API/open_port/port_login.html)
* [QQ MiniApp Login](https://q.qq.com/wiki/develop/miniprogram/API/open_port/port_login.html)
* [快手小程序登录](https://mp.kuaishou.com/docs/develop/api-next/open/login/ks.login.html)
* [Kuaishou MiniApp login](https://mp.kuaishou.com/docs/develop/api-next/open/login/ks.login.html)
* [京东小程序登录](https://mp-docs.jd.com/api/openInterface/login.html)
* [Jingdong MiniApp login](https://mp-docs.jd.com/api/openInterface/login.html)

#### web平台支持的登录方式
#### Login methods supported by the web platform
Web平台常见的登录包括用户名密码、短信验证码、pc端微信扫描、微信公众号登录。这些没有封装在 uni.login API中，但都封装在了uni-id中。请另行参考[uni-id](/uniCloud/uni-id-summary.md)
Common logins on the web platform include user name and password, SMS verification code, WeChat scanning on PC, and WeChat official account login. These are not encapsulated in the uni.login API, but are encapsulated in uni-id. Please refer to [uni-id](/uniCloud/uni-id-summary.md)

如不使用uni-id，微信内嵌浏览器运行H5版时，可通过js sdk实现微信登录，需要引入一个单独的js，[详见](https://ask.dcloud.net.cn/article/35380)
If you don’t use uni-id, when the WeChat embedded browser runs the H5 version, you can log in to WeChat through js sdk, you need to introduce a separate js, [see details](https://ask.dcloud.net.cn/article /35380)

#### OBJECT 参数说明
#### OBJECT parameter description

|参数名|类型|必填|说明|平台差异说明|
|Parameter Name|Type|Required|Description|Platform Difference Description|
|:-|:-|:-|:-|:-|
|provider|String|否|登录服务提供商，通过 [uni.getProvider](/api/plugins/provider) 获取，如果不设置则弹出登录列表选择界面||
| provider| String|No|Login service provider, obtained through [uni.getProvider](/api/plugins/provider), if not set, the login list selection interface will pop up||
|scopes|String/Array|见平台差异说明|授权类型，默认 auth_base。支持 auth_base（静默授权）/ auth_user（主动授权） / auth_zhima（芝麻信用）|支付宝小程序|
| scopes| String/Array|See platform difference description|Authorization type, default auth_base. Support auth_base (silent authorization) / auth_user (active authorization) / auth_zhima (Sesame Credit) | Alipay MiniApp|
|timeout|Number|否|超时时间，单位ms|微信小程序、百度小程序、京东小程序|
| timeout| Number|No|Timeout time, unit ms|WeChat MiniApp, Baidu MiniApp, Jingdong MiniApp|
|univerifyStyle|Object|否|[一键登录](/univerify)页面样式|App 3.0.0+|
| univerifyStyle| Object|No|[one-key login](/univerify) page style| App 3.0.0+|
|onlyAuthorize|Boolean|否|`微信登录`仅请求授权认证|App 3.2.6+|
| onlyAuthorize| Boolean|No| `WeChat Login` only requests authorization authentication | App 3.2.6+|
|success|Function|否|接口调用成功的回调||
| success| Function|No|Interface call success callback||
|fail|Function|否|接口调用失败的回调函数||
| fail| Function|No|Callback function for interface call failure||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
| complete| Function|No|The callback function of the end of the interface call (it will be executed when the call succeeds or fails)|&nbsp;|

**onlyAuthorize说明**
**onlyAuthorize Description**

微信登录在未配置`onlyAuthorize`的情况下，调用`uni.login`接口用户登录凭证(`code`)不返回，用以换取登录信息(`authResult`)；需要在项目manifest.json中配置的`appsecret`，此参数云端打包后会保存在apk/ipa中，存在参数泄露的风险；HBuilderX3.4.18+ 不再提供此参数的可视化配置。对于安全性要求较低的开发者，可以通过manifest.json -> 源码视图 -> app-plus -> distribute -> sdkConfigs -> oauth -> weixin -> 添加appsecret 配置。
When the WeChat login does not configure `onlyAuthorize`, the user login credential (`code`) is not returned when calling the `uni.login` interface, in exchange for login information (`authResult`); it needs to be configured in the project manifest.json `appsecret`, this parameter will be saved in apk/ipa after cloud packaging, there is a risk of parameter leakage; HBuilderX3.4.18+ no longer provides visual configuration of this parameter. For developers with low security requirements, you can add appsecret configuration via manifest.json -> source view -> app-plus -> distribute -> sdkConfigs -> oauth -> weixin ->.

**success 返回参数说明**
**success return parameter description**

|参数名|说明|平台差异说明|
|Parameter Name|Description|Platform Difference Description|
|:-|:-|:-|
|authResult|登录服务商提供的登录信息，服务商不同返回的结果不完全相同|微信登录配置`onlyAuthorize:true`则此项为空，App 3.2.6+ |
| authResult|The login information provided by the login service provider, the results returned by different service providers are not exactly the same|WeChat login configuration `onlyAuthorize:true`, this item is empty, App 3.2.6+ |
|code|用户登录凭证。开发者需要在开发者服务器后台，使用 code 换取 openid 和 session_key 等信息|微信登录配置`onlyAuthorize:true`才会返回，App 3.2.6+、京东小程序 |
| code| User login credentials. Developers need to use code in the background of the developer server to exchange information such as openid and session_key|WeChat login configuration `onlyAuthorize:true` will return, App 3.2.6+, JD MiniApp |
|appleInfo|Object|否|`苹果登录`返回的信息|App 3.4.3+|
| appleInfo| Object|No|The information returned by `Apple Login`| App 3.4.3+|
|errMsg|描述信息||
| errMsg|Description||

**示例**
**example**

```javascript
uni.login({
  provider: 'weixin', //使用微信登录
  success: function (loginRes) {
    console.log(loginRes.authResult);
  }
});
```

#### 注意事项
#### Precautions
- 百度小程序平台需要在button组件的@login事件后再调用 uni.login ，[详见](https://smartprogram.baidu.com/docs/develop/function/login/),否则会返回“请登录”的错误信息，建议在@login事件中调用。
- The Baidu MiniApp platform needs to call uni.login after the @login event of the button component, [see](https://smartprogram.baidu.com/docs/develop/function/login/),otherwise it will return "please Login" error message, it is recommended to call it in the @login event.
- uni.login 已针对百度小程序[兼容性升级](https://smartprogram.baidu.com/forum/topic/show/125547)转为 getLoginCode 调用，但某些情况下，百度小程序发布时兼容性诊断依然提示swan.login非兼容性改造，[详见](https://github.com/dcloudio/uni-app/issues/2443)，可使用 [uni.getLoginCode](#getLoginCode) 替代 uni.login 解决。
- uni.login has been converted to getLoginCode call for Baidu MiniApp[compatibility upgrade](https://smartprogram.baidu.com/forum/topic/show/125547), but in some cases, Baidu MiniApp is compatible when released Sexual diagnosis still prompts swan.login non-compatibility transformation, [see]( <a href="https://github.com/dcloudio/uni-app/issues/2443)，可使用">https://github.com/dcloudio/uni-app/issues/2443), you can use</a> [uni.getLoginCode](#getLoginCode) instead of uni. login solved.
- 京东小程序IDE 暂时不支持此uni.login()，请用真机查看；IDE调用，只能返回模拟数据 code为200。
- The JD MiniApp IDE does not support this uni.login() for the time being, please check it with a real device; the IDE call can only return the simulated data with a code of 200.

### uni.getLoginCode(OBJECT)@getLoginCode
获取宿主 App 登录凭证（Authorization Code）
Obtain the host App login credentials (Authorization Code)

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|x|x|√|x|x|x|x|

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
|Parameter Name|Type|Required|Description|
|:-|:-|:-|:-|
|timeout|Number|否|超时时间（单位：ms）|
| timeout| Number|No|Timeout (unit: ms)|
|success|Function|否|接口调用成功的回调函数|
| success| Function|No|Callback function for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function|No|The callback function for the end of the interface call (it will be executed when the call succeeds or fails)|

**success 返回参数说明**
**success return parameter description**

|参数名|类型|平台差异说明|
|Parameter Name|Type|Platform Difference Description|
|:-|:-|:-|
|code|String|用户登录凭证（有效期十分钟），开发者需要在开发者服务器后台调用 API ，使用 code 换取 session_key 等信息。用户登录凭证 code 只能使用一次。|
| code| String|User login credentials (valid for ten minutes), the developer needs to call the API in the background of the developer server, and exchange the code for session_key and other information. The user login credential code can only be used once. |

### uni.checkSession
检查登录状态是否过期
Check if the login status has expired

> 1.6.0 新增
> 1.6.0 Added

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|Byte Beat MiniApp, Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|x|√|√|√|√|√|x|

|属性|类型|必填|说明|
|Attribute|Type|Required|Description|
|:-|:-|:-|:-|
|success|function|否|接口调用成功的回调函数|
| success| function|No|Callback function for successful interface call|
|fail|function|否|接口调用失败的回调函数|
| fail| function|No|Callback function for interface call failure|
|complete|function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| function|No|The callback function for the end of the interface call (it will be executed when the call succeeds or fails)|


### uni.getUserInfo(OBJECT)

> 微信小程序端用户头像昵称获取规则已调整，参考 [用户信息接口调整说明](https://developers.weixin.qq.com/community/develop/doc/000cacfa20ce88df04cb468bc52801)、[小程序用户头像昵称获取规则调整公告](https://developers.weixin.qq.com/community/develop/doc/00022c683e8a80b29bed2142b56c01)
> The rules for obtaining nicknames and avatars on WeChat MiniApp have been adjusted <a href="https://developers.weixin.qq.com/community/develop/doc/000cacfa20ce88df04cb468bc52801)、[小程序用户头像昵称获取规则调整公告](https://developers.weixin.qq.com/community/develop/doc/00022c683e8a80b29bed2142b56c01">. Rule Adjustment Announcement](https://developers.weixin.qq.com/community/develop/doc/00022c683e8a80b29bed2142b56c01</a> )

获取用户信息。
Get user information.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|√|√|√|√|√|

**注意：**
**Notice:**
- 微信小程序端，在用户未授权过的情况下调用此接口，不会出现授权弹窗，会直接进入 fail 回调（详见[《微信小程序公告》](https://developers.weixin.qq.com/community/develop/doc/0000a26e1aca6012e896a517556c01)）。在用户已授权的情况下调用此接口，可成功获取用户信息。
- On the WeChat MiniApp side, if the user calls this interface without authorization, the authorization pop-up window will not appear, and it will directly enter the fail callback (see ["WeChat MiniApp announcement"](https://developers.weixin.qq.com/community/develop/doc/0000a26e1aca6012e896a517556c01)). Calling this interface when the user is authorized can successfully obtain user information.
- 京东小程序端，在用户未授权，调用该接口将直接报错。用户已经授权过，可使用该接口直接获取用户信息，不会弹二次授权框
- JD MiniApp, if the user is not authorized, calling this interface will directly report an error. The user has been authorized, you can use this interface to directly obtain user information, and the secondary authorization box will not pop up

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|平台差异说明|
|Parameter Name|Type|Required|Description|Platform Difference Description|
|:-|:-|:-|:-|:-|
|provider|String|否|登录服务提供商，通过 uni.getProvider 获取||
| provider| String|No|Login service provider, get it through uni.getProvider||
|withCredentials|Boolean|否|是否带上登录态信息。|微信小程序、字节跳动小程序、飞书小程序、快手小程序|
| withCredentials| Boolean|No|Whether to bring login status information. |WeChat MiniApp Program, ByteDance MiniApp Program, Feishu Mini MiniApp, Kuaishou MiniApp|
|lang|String|否|指定返回用户信息的语言，默认为 en。更多值请参考下面的说明。|微信小程序|
| lang| String|No| Specifies the language for returning user information, the default is en. For more values, please refer to the description below. |WeChat MiniApp|
|timeout|Number|否|超时时间，单位 ms。|微信小程序|
| timeout| Number|No| Timeout time, unit ms. |WeChat MiniApp|
|success|Function|否|接口调用成功的回调||
| success| Function|No|Interface call success callback||
|fail|Function|否|接口调用失败的回调函数||
| fail| Function|No|Callback function for interface call failure||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
| complete| Function|No|The callback function of the end of the interface call (it will be executed when the call succeeds or fails)|&nbsp;|

**lang 值说明**
**lang value description**

|值|说明|
|value|description|
|:-|:-|
|zh_CN|简体中文|
| zh_CN|Simplified Chinese|
|zh_TW|繁体中文|
| zh_TW|Traditional Chinese|
|en|英文|
| en|English|

**注意：** 在小程序 withCredentials 为 true 时或是在 App 调用 uni.getUserInfo，要求此前有调用过 uni.login 且登录态尚未过期。微信基础库2.10.4版本对用户信息相关接口进行了调整，使用 uni.getUserInfo 获取得到的 userInfo 为匿名数据，建议使用 uni.getUserProfile 获取用户信息。
**Note:** When the MiniApp withCredentials is true or calling uni.getUserInfo in the App, it is required that uni.login has been called before and the login status has not expired. WeChat basic library version 2.10.4 has adjusted the interface related to user information. The userInfo obtained by using uni.getUserInfo is anonymous data. It is recommended to use uni.getUserProfile to obtain user information.

**success 返回参数说明**
**success return parameter description**

|参数|类型|说明|平台差异说明|
|Parameter|Type|Description|Platform Difference Description|
|:-|:-|:-|:-|
|userInfo|OBJECT|用户信息对象||
| userInfo| OBJECT|user information object||
|rawData|String|不包括敏感信息的原始数据字符串，用于计算签名。||
|rawData| String|The raw data string excluding sensitive information, used to calculate the signature. ||
|signature|String|使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息。|微信小程序、字节跳动小程序、飞书小程序、快手小程序、京东小程序|
| signature| String|Use sha1( rawData + sessionkey ) to obtain a string for verifying user information. |WeChat MiniApp Program, ByteDance MiniApp Program, Feishu Mini MiniApp, Kuaishou MiniApp, Jingdong MiniApp|
|encryptedData|String|包括敏感数据在内的完整用户信息的加密数据，详细见加密数据解密算法。|微信小程序、字节跳动小程序、飞书小程序、快手小程序|
| encryptedData| String|Encrypted data of complete user information including sensitive data. For details, see Encrypted Data Decryption Algorithm. |WeChat MiniApp Program, ByteDance MiniApp Program, Feishu Mini MiniApp, Kuaishou MiniApp|
|iv|String|加密算法的初始向量，详细见加密数据解密算法。|微信小程序、字节跳动小程序、飞书小程序、快手小程序|
|iv| String|Initial vector of encryption algorithm, see Encrypted Data Decryption Algorithm for details. |WeChat MiniApp Program, ByteDance MiniApp Program, Feishu Mini MiniApp, Kuaishou MiniApp|
|errMsg|String|描述信息|&nbsp;|
| errMsg| String|Description|&nbsp;|

**userInfo 参数说明**
**userInfo parameter description**

|参数|类型|说明|平台差异说明|
|Parameter|Type|Description|Platform Difference Description|
|:-|:-|:-|:-|
|nickName|String|用户昵称||
| nickName| String|User nickname||
|openId|String|该服务商唯一用户标识|App|
| openId| String|The unique user ID of the service provider| App|
|avatarUrl|String|用户头像|&nbsp;|
| avatarUrl| String|Avatar|&nbsp;|
|gender|String|用户性别：0-男，1-女，2-保密|京东小程序|
| gender| String|User gender: 0-male, 1-female, 2-confidential|Jingdong MiniApp|

除了以上三个必有的信息外，不同服务供应商返回的其它信息会存在差异。
In addition to the above three necessary information, other information returned by different service providers will be different.

#### App端登录的扩展说明
#### Expansion instructions for App login

App端还支持更多登录相关API，如`logout`，[详见](https://www.html5plus.org/doc/zh_cn/oauth.html)
The App side also supports more login-related APIs, such as `logout`, [see details](https://www.html5plus.org/doc/zh_cn/oauth.html)

App端登录相关的SDK需要在manifest中配置：
App-side login-related SDKs need to be configured in the manifest:
1. 打开 manifest.json -> App模块权限配置，勾选 OAuth(登录鉴权)。
1. Open manifest.json -> App module permission configuration, check OAuth (login authentication).
2. 打开 manifest.json -> App SDK配置，查看到登录鉴权。在说明中有蓝色链接，其中包括向微信、QQ、微博等平台申请sdk的链接。
2. Open manifest.json -> App SDK configuration, and check the login authentication. There are blue links in the description, which include links to apply for SDKs on WeChat, QQ, Weibo and other platforms.
3. 向微信、QQ、微博等平台申请到sdk的信息后，回填到manifest里。
3. After applying for SDK information from WeChat, QQ, Weibo and other platforms, fill it back into the manifest.
4. 这些配置需要打包生效，真机运行仍然是HBuilder基座的设置，可使用[自定义基座包](http://ask.dcloud.net.cn/article/12723)。离线打包请参考离线打包文档在原生工程中配置。
4. These configurations need to be packaged to take effect. The real machine operation is still the setting of the HBuilder base, and [custom base package](http://ask.dcloud.net.cn/article/12723) can be used. For offline packaging, please refer to the offline packaging documentation to configure it in the native project.
5. 配置并打包后，通过`uni.getProvider`可以得到配置的结果列表，注意这里返回的是manifest配置的，与手机端是否安装微信、QQ、微博无关。
5. After configuration and packaging, you can get a list of configuration results through `uni.getProvider`. Note that what is returned here is manifest configuration, and it has nothing to do with whether WeChat, QQ, or Weibo are installed on the mobile phone.

如果手机端未安装QQ、微博，调用时会启动这些平台的wap页面登录，如果已安装相应客户端，会启动它们的客户端登录。
If QQ and Weibo are not installed on the mobile phone, the wap page login of these platforms will be activated when calling, and their client login will be activated if the corresponding client has been installed.

**示例**
**example**

```javascript
uni.login({
  provider: 'weixin',
  success: function (loginRes) {
    console.log(loginRes.authResult);
    // 获取用户信息
    // Get user information
    uni.getUserInfo({
      provider: 'weixin',
      success: function (infoRes) {
        console.log('用户昵称为：' + infoRes.userInfo.nickName);
      }
    });
  }
});
```

#### App端集成其他登录SDK如支付宝、淘宝登录的说明 @app-oauth
#### Instructions for integrating other login SDKs such as Alipay and Taobao on the App side @app-oauth
1. 在插件市场寻找插件
1. Find plugins in the plugin market
- [支付宝登录](https://ext.dcloud.net.cn/search?q=%E6%94%AF%E4%BB%98%E5%AE%9D%E7%99%BB%E9%99%86)
- [Alipay Login](https://ext.dcloud.net.cn/search?q=%E6%94%AF%E4%BB%98%E5%AE%9D%E7%99%BB%E9%99 %86)
- [淘宝登录](https://ext.dcloud.net.cn/search?q=%E7%99%BE%E5%B7%9D)
- [Taobao Login](https://ext.dcloud.net.cn/search?q=%E7%99%BE%E5%B7%9D)
- [抖音登录](https://ext.dcloud.net.cn/search?q=%E6%8A%96%E9%9F%B3%E7%99%BB%E5%BD%95)
- [sharesdk](https://ext.dcloud.net.cn/search?q=sharesdk)
2. 内嵌web-view组件，使用web登录模式集成这些三方登录
2. Embed the web-view component and use the web login mode to integrate these three-party logins
3. 开发原生插件集成三方sdk，[详见](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)
3. Develop native plug-ins to integrate three-party SDKs, [see details](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)


### uni.getUserProfile(OBJECT)

> 微信小程序端基础库2.27.1及以上版本，**[wx.getUserProfile 接口](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserProfile.html)被收回**，详见[《小程序用户头像昵称获取规则调整公告》](https://developers.weixin.qq.com/community/develop/doc/00022c683e8a80b29bed2142b56c01)。
> Wechat MiniApp Basic Library 2.27.1 and above, **[wx.getUserProfile interface](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserProfile.html) has been withdrawn**, for details, please refer to ["Announcement on the Adjustment of the Rules for Obtaining MiniApp User Avatar Nicknames"](https://developers.weixin.qq.com/community/develop/doc/00022c683e8a80b29bed2142b56c01).

获取用户信息。每次请求都会弹出授权窗口，用户同意后返回 userInfo。
Get user information. An authorization window will pop up for each request, and userInfo will be returned after the user agrees.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√（基础库2.10.4）|x|x|x|x|x|x|
|x|x|√ (base library 2.10.4)|x|x|x|x|x|x|

**注意：** 
**Notice:** 

- 如业务需获取用户头像昵称，可以使用[「头像昵称填写能力」](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/userProfile.html)（基础库 2.21.2 版本开始支持，覆盖iOS与安卓微信 8.0.16 以上版本）。
- If the business needs to obtain user avatar nicknames, you can use ["Avatar Nickname Filling Ability"](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/userProfile.html) (Basic Library 2.21 .2 version starts to support, covering iOS and Android WeChat version 8.0.16 and above).
- 该API仅支持微信小程序端（基础库2.10.4-2.27.0版本），微信小程序调整了相关接口（详见[《小程序登录、用户信息相关接口调整说明》](https://developers.weixin.qq.com/community/develop/doc/000cacfa20ce88df04cb468bc52801?highLine=getUserProfile%253Afail)）。每次触发 uni.getUserProfile 均会弹出授权窗口，用户授权后可成功获取用户信息。该API暂不支持在事件中使用异步操作，否则会触发错误：{errMsg: "getUserProfile:fail can only be invoked by user TAP gesture."}
- This API only supports the WeChat MiniApp(basic library version 2.10.4-2.27.0), and the WeChat MiniApp adjusted the relevant interface (see ["MiniApp Login, User Information Related Interface Adjustment Instructions"](https://developers.weixin.qq.com/community/develop/doc/000cacfa20ce88df04cb468bc52801?highLine=getUserProfile%253Afail)). Every time uni.getUserProfile is triggered, an authorization window will pop up, and user information can be successfully obtained after user authorization. The API does not currently support asynchronous operations in events, otherwise an error will be triggered: {errMsg: "getUserProfile:fail can only be invoked by user TAP gesture."}

抖音从基础库 2.30.0 开始支持本方法，低版本需做兼容处理。[详见](https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/api/open-interface/user-information/tt-get-user-profile/)
Douyin has supported this method since the base library 2.30.0, and the lower version needs to be compatible. [See details](https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/api/open-interface/user-information/tt-get-user-profile/)

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
|Parameter Name|Type|Required|Description|
|:-|:-|:-|:-|
|desc|String|是|声明获取用户个人信息后的用途，不超过30个字符|
| desc| String|Yes|Describe the purpose of obtaining the user's personal information, no more than 30 characters|
|lang|String|否|指定返回用户信息的语言，默认为 en。更多值请参考下面的说明。|
| lang| String|No| Specifies the language for returning user information, the default is en. For more values, please refer to the description below. |
|success|Function|否|接口调用成功的回调|
| success| Function|No|Callback for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function|No|The callback function for the end of the interface call (it will be executed when the call succeeds or fails)|

**lang 值说明**
**lang value description**

|值|说明|
|value|description|
|:-|:-|
|zh_CN|简体中文|
| zh_CN|Simplified Chinese|
|zh_TW|繁体中文|
| zh_TW|Traditional Chinese|
|en|英文|
| en|English|

**注意：** 可以使用 `if(uni.getUserProfile)` 判断uni.getUserProfile是否可用。
**Note:** You can use `if(uni.getUserProfile)` to determine whether uni.getUserProfile is available.

**success 返回参数说明**
**success return parameter description**

|参数|类型|说明|
|Parameter|Type|Description|
|:-|:-|:-|
|userInfo|OBJECT|用户信息对象|
| userInfo| OBJECT|user information object|
|rawData|String|不包括敏感信息的原始数据字符串，用于计算签名。|
|rawData| String|The raw data string excluding sensitive information, used to calculate the signature. |
|signature|String|使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息。|
| signature| String|Use sha1( rawData + sessionkey ) to get a string for verifying user information. |
|encryptedData|String|包括敏感数据在内的完整用户信息的加密数据，详细见加密数据解密算法。|
| encryptedData| String|Encrypted data of complete user information including sensitive data. For details, see Encrypted Data Decryption Algorithm. |
|iv|String|加密算法的初始向量，详细见加密数据解密算法。|
|iv| String|Initial vector of encryption algorithm, see Encrypted Data Decryption Algorithm for details. |
|cloudID|String|敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据，详细见云调用直接获取开放数据|
| cloudID| String|The cloud ID corresponding to the sensitive data will only be returned if the MiniApp developed by the cloud is activated, and the open data can be obtained directly through cloud calling. For details, see Directly obtaining open data through cloud calling|
|errMsg|String|描述信息|
| errMsg| String|Description|

**userInfo 参数说明**
**userInfo parameter description**

|参数|类型|说明|
|Parameter|Type|Description|
|:-|:-|:-|
|nickName|String|用户昵称|
| nickName| String|User nickname|
|avatarUrl|String|用户头像|
| avatarUrl| String|Avatar|
|gender|Number|用户性别|
| gender| Number|User gender|
|country|String|用户所在国家|
| country| String|User's country|
|province|String|用户所在省份|
| province| String|The user's province|
|city|String|用户所在城市|
| city| String|User's city|
|language|String|显示 country，province，city 所用的语言|
| language| String|Display the language used by country, province, city|

**gender 的合法值**
**Legal values for gender**

|值|说明|
|value|description|
|:-|:-|
|0|未知|
|0|Unknown|
|1|男性|
| 1|Male|
|2|女性|
| 2|Female|

**language 的合法值**
**legal values for language**

|值|说明|
|value|description|
|:-|:-|
|en|英文|
| en|English|
|zh_CN|简体中文|
| zh_CN|Simplified Chinese|
|zh_TW|繁体中文|
| zh_TW|Traditional Chinese|


### uni.preLogin(OBJECT)
预登录。用于App手机号一键登录。
pre-login. It is used for one-click login with App phone number.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|3.0.0+|x|x|x|x|x|x|x|x|

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
|Parameter Name|Type|Required|Description|
|:-|:-|:-|:-|
|provider|String|否|登录服务提供商，通过 [uni.getProvider](/api/plugins/provider) 获取，目前仅支持[一键登录](/univerify)|
| provider| String|No|Login service provider, obtained through [uni.getProvider](/api/plugins/provider), currently only supports [one-key login](/univerify)|
|success|Function|否|接口调用成功的回调|
| success| Function|No|Callback for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function|No|The callback function for the end of the interface call (it will be executed when the call succeeds or fails)|


### uni.closeAuthView()
关闭[一键登录](/univerify)页面。
Close the [one-key login](/univerify) page.

按照中国移动、中国联通、中国电信等运营商的要求，一键登录必须有界面。可用此API关闭页面。
According to the requirements of China Mobile, China Unicom, China Telecom and other operators, one-click login must have an interface. Use this API to close the page.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|3.0.0+|x|x|x|x|x|x|x|x|


### uni.getCheckBoxState(OBJECT)
获取[一键登录](/univerify)条款勾选框状态。
Get the checkbox status of [one-key login](/univerify) clause.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|3.2.3+|x|x|x|x|x|x|x|x|

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
|Parameter Name|Type|Required|Description|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调|
| success| Function|No|Callback for successful interface call|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function|No|The callback function for the end of the interface call (it will be executed when the call succeeds or fails)|

**success 返回参数说明**
**success return parameter description**

|参数|类型|说明|
|Parameter|Type|Description|
|:-|:-|:-|
|state|Boolean|一键登录条款勾选框状态|
| state| Boolean|One-click login terms checkbox state|
|errMsg|String|描述信息|
| errMsg| String|Description|

### uni.getUniverifyManager(OBJECT)
获取全局唯一的一键登录管理器 univerifyManager
Get the globally unique one-click login manager univerifyManager

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√ (3.2.13+)|x|x|x|x|x|x|x|x|

**univerifyManager 方法说明**
**univerifyManager method description**

|方法名|类型|说明|
|Method Name|Type|Description|
|:-|:-|:-|
|login|Function|一键登录|
| login| Function|One-key login|
|preLogin|Function|一键登录预登录|
| preLogin| Function|One-key login pre-login|
|close|Function|关闭一键登陆页面|
| close| Function|Close one-click landing page|
|getCheckBoxState|Function|获取一键登录条款勾选框状态|
| getCheckBoxState| Function|Get the checkbox state of one-click login terms|
|onButtonsClick|Function|订阅一键登录自定义按钮点击事件|
| onButtonsClick| Function|Subscribe to one-click login custom button click event|
|offButtonsClick|Function|取消订阅一键登录自定义按钮点击事件|
| offButtonsClick| Function|Unsubscribe one-click login custom button click event|

**使用示例**
**Usage example**

```js
// 使用时不需要传递 provider
// No need to pass provider when using
const univerifyManager = uni.getUniverifyManager()

// 预登录
// pre-login
// 参数和 uni.preLogin 相同
// parameters are the same as uni.preLogin
univerifyManager.preLogin()

// 调用一键登录弹框
// Call the one-click login pop-up box
// 仅需传参 univerifyStyle 即可
// Only need to pass parameter univerifyStyle
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
  // Get the check status of the one-click login pop-up protocol
  // 参数和 uni.getCheckBoxState 相同
  // The parameters are the same as uni.getCheckBoxState
  univerifyManager.getCheckBoxState({
    success(res) {
      console.log("getCheckBoxState res: ", res);
      if (res.state) {
        // 关闭一键登录弹框
        // Close the one-click login popup
        // 参数和 uni.closeAuthView 相同
        // The parameters are the same as uni.closeAuthView
        univerifyManager.close()
      }
    }
  })
}

// 订阅自定义按钮点击事件
// Subscribe to the custom button click event
univerifyManager.onButtonsClick(callback)
// 取消订阅自定义按钮点击事件
// unsubscribe custom button click event
univerifyManager.offButtonsClick(callback)
```
