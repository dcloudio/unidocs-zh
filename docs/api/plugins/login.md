## uni.login(OBJECT)
登录

uni.login是一个客户端API，统一封装了各个平台的各种常见的登录方式，包括App手机号一键登陆、三方登录（微信、微博、QQ、Apple、google、facebook）、各家小程序内置登录。

除了前端API，DCloud还提供了[uni-id](https://doc.dcloud.net.cn/uniCloud/uni-id/summary.html)，这是一个云端一体的、完整的、账户开源框架。不仅包括客户端API，还包括前端页面、服务器代码、管理后台等所有与登录账户有关的服务，包括短信验证码、密码加密存储、忘记密码、头像更新等所有常见账户相关功能。

**平台差异说明**

|App|Web|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|√|√|√|√|√|√|

<!-- UNIAPPAPIJSON.login.compatibility -->

大多数登录方式，都需要申请开通相关服务，具体点击下面的文档查看。

### App平台支持的登录方式
- [手机号一键登录（univerify）](/univerify.md)
- [苹果登录（Sign in with Apple）](/tutorial/app-oauth-apple.md)
- [微信登录](/tutorial/app-oauth-weixin.md)
- [QQ登录](/tutorial/app-oauth-qq.md)
- [新浪微博登录](/tutorial/app-oauth-weibo.md)
- [Google登录](/tutorial/app-oauth-google.md)
- [Facebook登录](/tutorial/app-oauth-facebook.md)

### 小程序平台支持的登录方式
* [微信小程序登录](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html)
* [支付宝小程序登录](https://docs.alipay.com/mini/introduce/authcode)
* [百度小程序登录](https://smartprogram.baidu.com/docs/develop/api/open_log/#%E6%8E%88%E6%9D%83%E6%B5%81%E7%A8%8B%E8%AF%B4%E6%98%8E/)
* [抖音小程序登录](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/api/open-interface/log-in/tt-login/)
* [QQ小程序登录](https://q.qq.com/wiki/develop/miniprogram/API/open_port/port_login.html)
* [快手小程序登录](https://mp.kuaishou.com/docs/develop/api-next/open/login/ks.login.html)
* [京东小程序登录](https://mp-docs.jd.com/api/openInterface/login.html)

### web平台支持的登录方式
Web平台常见的登录包括用户名密码、短信验证码、pc端微信扫描、微信公众号登录。这些没有封装在 uni.login API中，但都封装在了uni-id中。请另行参考[uni-id](https://doc.dcloud.net.cn/uniCloud/uni-id/summary.html)

如不使用uni-id，微信内嵌浏览器运行H5版时，可通过js sdk实现微信登录，需要引入一个单独的js，[详见](https://ask.dcloud.net.cn/article/35380)

### OBJECT 参数说明

|参数名|类型|必填|说明|平台差异说明|
|:-|:-|:-|:-|:-|
|provider|String|否|登录服务提供商，通过 [uni.getProvider](/api/plugins/provider) 获取，如果不设置则弹出登录列表选择界面||
|scopes|String/Array|见平台差异说明|授权类型，默认 auth_base。支持 auth_base（静默授权）/ auth_user（主动授权） / auth_zhima（芝麻信用）|支付宝小程序|
|timeout|Number|否|超时时间，单位ms|微信小程序、百度小程序、京东小程序|
|univerifyStyle|Object|否|[一键登录](/univerify)页面样式|App 3.0.0+、`HarmonyOS 不支持`|
|onlyAuthorize|Boolean|否|`微信登录`仅请求授权认证|App 3.2.6+、`HarmonyOS 不支持`|
|success|Function|否|接口调用成功的回调||
|fail|Function|否|接口调用失败的回调函数||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|

**onlyAuthorize说明**

微信登录在未配置`onlyAuthorize`的情况下，调用`uni.login`接口用户登录凭证(`code`)不返回，用以换取登录信息(`authResult`)；需要在项目manifest.json中配置的`appsecret`，此参数云端打包后会保存在apk/ipa中，存在参数泄露的风险；HBuilderX3.4.18+ 不再提供此参数的可视化配置。对于安全性要求较低的开发者，可以通过manifest.json -> 源码视图 -> app-plus -> distribute -> sdkConfigs -> oauth -> weixin -> 添加appsecret 配置。

**success 返回参数说明**

|参数名|说明|平台差异说明|
|:-|:-|:-|
|authResult|登录服务商提供的登录信息，服务商不同返回的结果不完全相同|微信登录配置`onlyAuthorize:true`则此项为空，App 3.2.6+ |
|code|用户登录凭证。开发者需要在开发者服务器后台，使用 code 换取 openid 和 session_key 等信息|微信登录配置`onlyAuthorize:true`才会返回，App 3.2.6+、京东小程序 |
|appleInfo|`苹果登录`返回的信息|App 3.4.3+|
|errMsg|描述信息||

**示例**

```javascript
uni.login({
  provider: 'weixin', //使用微信登录
  success: function (loginRes) {
    console.log(loginRes.authResult);
  }
});
```

### 注意事项
- 百度小程序平台需要在button组件的@login事件后再调用 uni.login ，[详见](https://smartprogram.baidu.com/docs/develop/function/login/),否则会返回“请登录”的错误信息，建议在@login事件中调用。
- uni.login 已针对百度小程序[兼容性升级](https://smartprogram.baidu.com/forum/topic/show/125547)转为 getLoginCode 调用，但某些情况下，百度小程序发布时兼容性诊断依然提示swan.login非兼容性改造，[详见](https://github.com/dcloudio/uni-app/issues/2443)，可使用 [uni.getLoginCode](#getlogincode) 替代 uni.login 解决。
- 京东小程序IDE 暂时不支持此uni.login()，请用真机查看；IDE调用，只能返回模拟数据 code为200。

## uni.getLoginCode(OBJECT)@getLoginCode
获取宿主 App 登录凭证（Authorization Code）

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|x|x|√|x|x|x|x|x|

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

## uni.checkSession
检查登录状态是否过期

> 1.6.0 新增

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|快手小程序|京东小程序|元服务|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|x|√|√|√|√|√|x|x|

|属性|类型|必填|说明|
|:-|:-|:-|:-|
|success|function|否|接口调用成功的回调函数|
|fail|function|否|接口调用失败的回调函数|
|complete|function|否|接口调用结束的回调函数（调用成功、失败都会执行）|


## uni.getUserInfo(OBJECT)

> 微信小程序端用户头像昵称获取规则已调整，参考 [用户信息接口调整说明](https://developers.weixin.qq.com/community/develop/doc/000cacfa20ce88df04cb468bc52801)、[小程序用户头像昵称获取规则调整公告](https://developers.weixin.qq.com/community/develop/doc/00022c683e8a80b29bed2142b56c01)
> 支付宝小程序获取用户头像昵称规则已调整，将在 2024年09月15日正式生效。参考 [关于小程序用户头像昵称获取规则调整公告](https://open.alipay.com/portal/forum/post/173201040)

获取用户信息。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|√|√|√|√|√|x|

<!-- UNIAPPAPIJSON.getUserInfo.compatibility -->

**注意：**
- 微信小程序端，在用户未授权过的情况下调用此接口，不会出现授权弹窗，会直接进入 fail 回调（详见[《微信小程序公告》](https://developers.weixin.qq.com/community/develop/doc/0000a26e1aca6012e896a517556c01)）。在用户已授权的情况下调用此接口，可成功获取用户信息。
- 京东小程序端，在用户未授权，调用该接口将直接报错。用户已经授权过，可使用该接口直接获取用户信息，不会弹二次授权框
- 抖音小程序此接口将逐步废弃，请切换使用[uni.getUserProfile](#getuserprofile)。[详见](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/api/open-interface/user-information/tt-get-user-info)

**OBJECT 参数说明**

|参数名|类型|必填|说明|平台差异说明|
|:-|:-|:-|:-|:-|
|provider|String|否|登录服务提供商，通过 uni.getProvider 获取||
|withCredentials|Boolean|否|是否带上登录态信息。|微信小程序、抖音小程序、飞书小程序、快手小程序|
|lang|String|否|指定返回用户信息的语言，默认为 en。更多值请参考下面的说明。|微信小程序|
|timeout|Number|否|超时时间，单位 ms。|微信小程序|
|success|Function|否|接口调用成功的回调||
|fail|Function|否|接口调用失败的回调函数||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|

**lang 值说明**

|值|说明|
|:-|:-|
|zh_CN|简体中文|
|zh_TW|繁体中文|
|en|英文|

**注意：** 在小程序 withCredentials 为 true 时或是在 App 调用 uni.getUserInfo，要求此前有调用过 uni.login 且登录态尚未过期。微信基础库2.10.4版本对用户信息相关接口进行了调整，使用 uni.getUserInfo 获取得到的 userInfo 为匿名数据，建议使用 uni.getUserProfile 获取用户信息。

**success 返回参数说明**

|参数|类型|说明|平台差异说明|
|:-|:-|:-|:-|
|userInfo|OBJECT|用户信息对象||
|rawData|String|不包括敏感信息的原始数据字符串，用于计算签名。|微信小程序、抖音小程序、飞书小程序、快手小程序、京东小程序|
|signature|String|使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息。|微信小程序、抖音小程序、飞书小程序、快手小程序、京东小程序|
|encryptedData|String|包括敏感数据在内的完整用户信息的加密数据，详细见加密数据解密算法。|微信小程序、抖音小程序、飞书小程序、快手小程序|
|iv|String|加密算法的初始向量，详细见加密数据解密算法。|微信小程序、抖音小程序、飞书小程序、快手小程序|
|errMsg|String|描述信息|&nbsp;|

**userInfo 参数说明**

|参数|类型|说明|平台差异说明|
|:-|:-|:-|:-|
|nickName|String|用户昵称||
|openId|String|该服务商唯一用户标识|App|
|avatarUrl|String|用户头像|&nbsp;|
|gender|String|用户性别：0-男，1-女，2-保密|京东小程序|

除了以上三个必有的信息外，不同服务供应商返回的其它信息会存在差异。

### App端登录的扩展说明

App端还支持更多登录相关API，如`logout`，[详见](https://www.html5plus.org/doc/zh_cn/oauth.html)

App端登录相关的SDK需要在manifest中配置：
1. 打开 manifest.json -> App模块权限配置，勾选 OAuth(登录鉴权)。
2. 打开 manifest.json -> App SDK配置，查看到登录鉴权。在说明中有蓝色链接，其中包括向微信、QQ、微博等平台申请sdk的链接。
3. 向微信、QQ、微博等平台申请到sdk的信息后，回填到manifest里。
4. 这些配置需要打包生效，真机运行仍然是HBuilder基座的设置，可使用[自定义基座包](http://ask.dcloud.net.cn/article/12723)。离线打包请参考离线打包文档在原生工程中配置。
5. 配置并打包后，通过`uni.getProvider`可以得到配置的结果列表，注意这里返回的是manifest配置的，与手机端是否安装微信、QQ、微博无关。

如果手机端未安装QQ、微博，调用时会启动这些平台的wap页面登录，如果已安装相应客户端，会启动它们的客户端登录。

**示例**

```javascript
uni.login({
  provider: 'weixin',
  success: function (loginRes) {
    console.log(loginRes.authResult);
    // 获取用户信息
    uni.getUserInfo({
      provider: 'weixin',
      success: function (infoRes) {
        console.log('用户昵称为：' + infoRes.userInfo.nickName);
      }
    });
  }
});
```

### App端集成其他登录SDK如支付宝、淘宝登录的说明 @app-oauth
1. 在插件市场寻找插件
- [支付宝登录](https://ext.dcloud.net.cn/search?q=%E6%94%AF%E4%BB%98%E5%AE%9D%E7%99%BB%E9%99%86)
- [淘宝登录](https://ext.dcloud.net.cn/search?q=%E7%99%BE%E5%B7%9D)
- [抖音登录](https://ext.dcloud.net.cn/search?q=%E6%8A%96%E9%9F%B3%E7%99%BB%E5%BD%95)
- [sharesdk](https://ext.dcloud.net.cn/search?q=sharesdk)
2. 内嵌web-view组件，使用web登录模式集成这些三方登录
3. 开发原生插件集成三方sdk，[详见](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)


## uni.getUserProfile(OBJECT)@getUserProfile

> 微信小程序端基础库2.27.1及以上版本，**[wx.getUserProfile 接口](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserProfile.html)被收回**，详见[《小程序用户头像昵称获取规则调整公告》](https://developers.weixin.qq.com/community/develop/doc/00022c683e8a80b29bed2142b56c01)。

获取用户信息。每次请求都会弹出授权窗口，用户同意后返回 userInfo。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√（基础库2.10.4）|x|x|√（基础库2.30.0）|x|x|x|x|

**注意：**

- 如业务需获取用户头像昵称，可以使用[「头像昵称填写能力」](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/userProfile.html)（基础库 2.21.2 版本开始支持，覆盖iOS与安卓微信 8.0.16 以上版本）。
- 该API仅支持微信小程序端（基础库2.10.4-2.27.0版本），微信小程序调整了相关接口（详见[《小程序登录、用户信息相关接口调整说明》](https://developers.weixin.qq.com/community/develop/doc/000cacfa20ce88df04cb468bc52801?highLine=getUserProfile%253Afail)）。每次触发 uni.getUserProfile 均会弹出授权窗口，用户授权后可成功获取用户信息。该API暂不支持在事件中使用异步操作，否则会触发错误：{errMsg: "getUserProfile:fail can only be invoked by user TAP gesture."}

抖音从基础库 2.30.0 开始支持本方法，低版本需做兼容处理。[详见](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/api/open-interface/user-information/tt-get-user-profile/)

**OBJECT 参数说明**

|参数名|类型|必填|说明|
|:-|:-|:-|:-|
|desc|String|是|声明获取用户个人信息后的用途，不超过30个字符|
|lang|String|否|指定返回用户信息的语言，默认为 en。更多值请参考下面的说明。|
|success|Function|否|接口调用成功的回调|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|

**lang 值说明**

|值|说明|
|:-|:-|
|zh_CN|简体中文|
|zh_TW|繁体中文|
|en|英文|

**注意：** 可以使用 `if(uni.getUserProfile)` 判断uni.getUserProfile是否可用。

**success 返回参数说明**

|参数|类型|说明|
|:-|:-|:-|
|userInfo|OBJECT|用户信息对象|
|rawData|String|不包括敏感信息的原始数据字符串，用于计算签名。|
|signature|String|使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息。|
|encryptedData|String|包括敏感数据在内的完整用户信息的加密数据，详细见加密数据解密算法。|
|iv|String|加密算法的初始向量，详细见加密数据解密算法。|
|cloudID|String|敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据，详细见云调用直接获取开放数据|
|errMsg|String|描述信息|

**userInfo 参数说明**

|参数|类型|说明|
|:-|:-|:-|
|nickName|String|用户昵称|
|avatarUrl|String|用户头像|
|gender|Number|用户性别|
|country|String|用户所在国家|
|province|String|用户所在省份|
|city|String|用户所在城市|
|language|String|显示 country，province，city 所用的语言|

**gender 的合法值**

|值|说明|
|:-|:-|
|0|未知|
|1|男性|
|2|女性|

**language 的合法值**

|值|说明|
|:-|:-|
|en|英文|
|zh_CN|简体中文|
|zh_TW|繁体中文|


## uni.preLogin(OBJECT)
预登录。用于App手机号一键登录。

**平台差异说明**

|App|HarmonyOS Next|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|3.0.0+|x|x|x|x|x|x|x|x|x|x|

**OBJECT 参数说明**

|参数名|类型|必填|说明|
|:-|:-|:-|:-|
|provider|String|否|登录服务提供商，通过 [uni.getProvider](/api/plugins/provider) 获取，目前仅支持[一键登录](/univerify)|
|success|Function|否|接口调用成功的回调|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|


## uni.closeAuthView()
关闭[一键登录](/univerify)页面。

按照中国移动、中国联通、中国电信等运营商的要求，一键登录必须有界面。可用此API关闭页面。

**平台差异说明**

|App|HarmonyOS Next|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|3.0.0+|x|x|x|x|x|x|x|x|x|x|


## uni.getCheckBoxState(OBJECT)
获取[一键登录](/univerify)条款勾选框状态。

**平台差异说明**

|App|HarmonyOS Next|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|3.2.3+|x|x|x|x|x|x|x|x|x|x|

**OBJECT 参数说明**

|参数名|类型|必填|说明|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明**

|参数|类型|说明|
|:-|:-|:-|
|state|Boolean|一键登录条款勾选框状态|
|errMsg|String|描述信息|

## uni.getUniverifyManager(OBJECT)
获取全局唯一的一键登录管理器 univerifyManager

**平台差异说明**

|App|HarmonyOS Next|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√ (3.2.13+)|4.61|x|x|x|x|x|x|x|x|x|

**univerifyManager 方法说明**

|方法名|类型|说明|
|:-|:-|:-|
|login|Function|一键登录|
|preLogin|Function|一键登录预登录|
|close|Function|关闭一键登陆页面|
|getCheckBoxState|Function|获取一键登录条款勾选框状态|
|onButtonsClick|Function|订阅一键登录自定义按钮点击事件；`HarmonyOS 不支持`|
|offButtonsClick|Function|取消订阅一键登录自定义按钮点击事件；`HarmonyOS 不支持`|

**使用示例**

```js
// 使用时不需要传递 provider
const univerifyManager = uni.getUniverifyManager()

// 预登录
// 参数和 uni.preLogin 相同
univerifyManager.preLogin()

// 调用一键登录弹框
// 仅需传参 univerifyStyle 即可
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
  // 参数和 uni.getCheckBoxState 相同
  univerifyManager.getCheckBoxState({
    success(res) {
      console.log("getCheckBoxState res: ", res);
      if (res.state) {
        // 关闭一键登录弹框
        // 参数和 uni.closeAuthView 相同
        univerifyManager.close()
      }
    }
  })
}

// 订阅自定义按钮点击事件
univerifyManager.onButtonsClick(callback)
// 取消订阅自定义按钮点击事件
univerifyManager.offButtonsClick(callback)
```

### HarmonyOS 使用 getUniverifyManager 注意事项 @harmonyos-univerify

- 在使用 `getUniverifyManager().login` 时，其中 `univerifyStyle 参数` 只支持传递（支持情况和 [uni-app x 一键登录 login 一致](https://doc.dcloud.net.cn/uni-app-x/api/get-univerify-manager.html#login)）:
  - `fullScreen` 是否全屏显示一键登录弹框
  - `logoPath` 一键登录弹框顶部 logo 图片路径
  - `loginBtnText` 一键登录按钮文案
- 运行到鸿蒙手机调试，必须在 [开通一键登录](https://uniapp.dcloud.net.cn/univerify.html#%E5%BC%80%E9%80%9A) 后，在 uniCloud `一键登录 -> 应用管理` 添加应用，并将所添加应用的包名配置在 `manifest` 中才可以调试运行，否则运行报错
- 需要在 `modules.json5` 中配置以下权限：
  ```json
  "requestPermissions": [
    {
      //允许应用程序联网，用于访问网关和认证服务器
      "name": "ohos.permission.INTERNET",
    },
    {
      //获取网络状态，判断是否数据、wifi等
      "name": "ohos.permission.GET_NETWORK_INFO"
    },
    {
      //允许获取wifi信息
      "name": "ohos.permission.GET_WIFI_INFO"
    },
    {
      //允许应用配置数据网络
      "name": "ohos.permission.SET_NETWORK_INFO"
    },
    {
      //用于创建唯一的gyuid标识
      "name": "ohos.permission.APP_TRACKING_CONSENT",
      "usedScene": {
        "abilities": [
          "EntryAbility"
        ]
      },
      "reason": "$string:gy_oaid_tracking" // 此项需要在 `harmony-config/AppScope/resources/base/element/string.json` 中配置，[配置文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/resource-categories-and-access-V5#%E8%B5%84%E6%BA%90%E7%BB%84%E7%9B%AE%E5%BD%95)
    }
  ]
  ```
- 配置CHANNEL(非必选)，项目的module.json5文件中配置 GT_INSTALL_CHANNEL:
  ```json
  "metadata": [
    {
      "name": "GT_INSTALL_CHANNEL",
      "value": "CHANNEL" // 填写你想要的渠道名
    }
  ]
  ```
