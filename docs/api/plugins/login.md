### uni.login(OBJECT)
登录

**平台差异说明**

|App|H5|
|:-:|:-:|
|√|x|


**OBJECT 参数说明**

|参数名|类型|必填|说明|平台差异说明|
|:-|:-|:-|:-|:-|
|provider|String|否|登录服务提供商，通过 [uni.getProvider](/api/plugins/provider) 获取，如果不设置则弹出登录列表选择界面||
|univerifyStyle|Object|否|[一键登录](/univerify)页面样式|App 3.0.0+|
|success|Function|否|接口调用成功的回调||
|fail|Function|否|接口调用失败的回调函数||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|

**success 返回参数说明**

|参数名|说明|
|:-|:-|
|authResult|登录服务商提供的登录信息，服务商不同返回的结果不完全相同|
|code|小程序专有，用户登录凭证。开发者需要在开发者服务器后台，使用 code 换取 openid 和 session_key 等信息|
|errMsg|描述信息|

各个平台的登录流程存在差异，详细请参考相关平台的文档说明：

* [Apple登录、苹果登录、Sign in with Apple](https://ask.dcloud.net.cn/article/36651)
* [一键登录](/univerify)

如果服务端使用`uniCloud`，那么官方提供了[uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id)云端统一登录服务，把微信登录、短信验证码登录及角色权限管理等服务端登录开发，进行了统一的封装。

前端统一的`uni.login`和云端统一的`uni-id`搭配，可以极大提升登录业务的开发效率，强烈推荐给开发者使用。uni-id的文档另见：https://uniapp.dcloud.net.cn/uniCloud/uni-id


**示例**

```javascript
uni.login({
  provider: 'weixin',
  success: function (loginRes) {
    console.log(loginRes.authResult);
  }
});
```


### uni.getUserInfo(OBJECT)

获取用户信息。

**平台差异说明**

|App|H5|
|:-:|:-:|
|√|x|


**OBJECT 参数说明**

|参数名|类型|必填|说明|平台差异说明|
|:-|:-|:-|:-|:-|
|provider|String|否|登录服务提供商，通过 uni.getProvider 获取||
|success|Function|否|接口调用成功的回调||
|fail|Function|否|接口调用失败的回调函数||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|



**success 返回参数说明**

|参数|类型|说明|平台差异说明|
|:-|:-|:-|:-|
|userInfo|OBJECT|用户信息对象||
|rawData|String|不包括敏感信息的原始数据字符串，用于计算签名。||
|errMsg|String|描述信息|&nbsp;|

**userInfo 参数说明**

|参数|类型|说明|平台差异说明|
|:-|:-|:-|:-|
|nickName|String|用户昵称||
|openId|String|该服务商唯一用户标识|App|
|avatarUrl|String|用户头像|&nbsp;|

除了以上三个必有的信息外，不同服务供应商返回的其它信息会存在差异。

#### App端登录的扩展说明

App端还支持更多登录相关API，如`logout`，[详见](https://www.html5plus.org/doc/zh_cn/oauth.html)

App端登录相关的SDK需要在manifest中配置：
1. 打开 manifest.json -> App模块权限配置，勾选 OAuth(登录鉴权)。
2. 打开 manifest.json -> App SDK配置，查看到登录鉴权。
3. 这些配置需要打包生效，真机运行仍然是HBuilder基座的设置，可使用[自定义基座包](http://ask.dcloud.net.cn/article/12723)。离线打包请参考离线打包文档在原生工程中配置。
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

#### App端集成其他登录SDK如支付宝、淘宝、facebook登录的说明
1. [支付宝登录](https://ext.dcloud.net.cn/search?q=%E6%94%AF%E4%BB%98%E5%AE%9D%E7%99%BB%E9%99%86)、[淘宝登录](https://ext.dcloud.net.cn/search?q=%E7%99%BE%E5%B7%9D)、[抖音登录](https://ext.dcloud.net.cn/search?q=%E6%8A%96%E9%9F%B3%E7%99%BB%E5%BD%95)、[facebook登录](https://ext.dcloud.net.cn/search?q=facebook%E7%99%BB%E5%BD%95)等在插件市场均已有插件，还有[sharesdk](https://ext.dcloud.net.cn/search?q=sharesdk)等专业集成多家登录分享的插件。
2. 也可以内嵌web-view组件，使用web登录模式集成这些三方登录


### uni.preLogin(OBJECT)
预登录。

**平台差异说明**

|App|H5|
|:-:|:-:|
|3.0.0+|x|

**OBJECT 参数说明**

|参数名|类型|必填|说明|
|:-|:-|:-|:-|
|provider|String|否|登录服务提供商，通过 [uni.getProvider](/api/plugins/provider) 获取，目前仅支持[一键登录](/univerify)|
|success|Function|否|接口调用成功的回调|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|


### uni.closeAuthView()
关闭[一键登录](/univerify)页面。

**平台差异说明**

|App|H5|
|:-:|:-:|
|3.0.0+|x|
