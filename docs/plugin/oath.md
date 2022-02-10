### 简介

DCloud用户开放平台，[https://open.dcloud.net.cn](https://open.dcloud.net.cn/)，是DCloud为三方开发者服务商提供的开放平台。

DCloud将数百万开发者的流量通过开放平台提供给三方开发者服务商。

#### 使用场景：

1.三方的开发者服务商，比如Git服务商，可以制作HBuilderX插件，并且将账户打通。比如在HBuilderX插件中注册项目的右键菜单，在HBuilderX中对项目点右键，一键上传源码到某Git服务商，且无需再重复注册三方Git服务账户。
2.第三方网站，可以申请web授权给自己网站，用户无需在网站注册，直接可以跳转到DCloud登录授权页面进行登录后回跳到网站进行登录。

当然不止是Git服务商、网站，所有其他开发者服务商，如测试、加固、多渠道发布、招聘...，均可通过[DCloud用户开放平台](https://open.dcloud.net.cn/)共享DCloud的开发者资源。

插件授权使用步骤：
1. 三方开发商需要在[DCloud用户开放平台](https://open.dcloud.net.cn/)注册插件应用
2. 开发HBuilderX插件，调用 `hx.authorize.login` API，拿到code码。文档详见：[https://hx.dcloud.net.cn/ExtensionDocs/Api/README?id=authorize](https://hx.dcloud.net.cn/ExtensionDocs/Api/README?id=authorize)
3. 插件将code码传到三方开发商服务器，从服务器端向 DCloud用户开放平台 的服务器请求，获取用户信息。文档具体见下。

WEB授权使用步骤：
1.第三方网站需要在[DCloud用户开放平台](https://open.dcloud.net.cn/)注册授权WEB
2. 在自己网站拼接url登录链接
3. 用户登录完成后DCloud会携带code回跳到对应的第三方网址
4. 第三方网站根据code在服务器端 DCloud用户开放平台 的服务器请求，获取用户信息 文档具体见下。

这套授权体系是国际标准的 OAuth2.0 授权机制。[什么是OAuth2.0?](http://www.ruanyifeng.com/blog/2019/04/oauth-grant-types.html)
在用户授权的情况下，得到用于换取用户信息的令牌（code码）。拿到用户的授权令牌后，开发者在服务端通过接口换取accessToken,通过accessToken换取用户授权的基本信息。

### OAuth2.0 授权登录流程

### 接入准备
在[DCloud用户开放平台](https://open.dcloud.net.cn/)创建授权，拿到client_id、client_secret

### 插件授权接入步骤
在[DCloud用户开放平台](https://open.dcloud.net.cn/)创建插件授权时，需要填写插件id。重点解释下这个概念。

HBuilderX的所有插件，发布时均需发布到DCloud插件市场，地址：[https://ext.dcloud.net.cn/](https://ext.dcloud.net.cn/)。HBuilderX用户从插件市场获取插件来使用。

插件市场的每个插件都有一个唯一的插件id，该id由插件作者上传插件时自行输入，提交插件时会进行验重，与其他插件的id不冲突即可使用。

目前创建授权是免审的，可以直接获取到client_id和client_secret。

### 插件接入流程图
[attach]64115[/attach]

### 接入流程
#### 1. 通过HX提供的hx.authorize.login()方法获取code [HX登录授权api接口](https://hx.dcloud.net.cn/ExtensionDocs/Api/README?id=authorize)
#### 2. 开发者服务商获取到code后在自己服务器端去获取accessToken
#### 3. 通过接口获取accessToken
#### 请求过程建议将 参数 放在 Body 中传值，以保证数据安全。

开发者服务商从自己的服务器端发送请求到DCloud的服务器，地址如下：
https://account.dcloud.net.cn/dcloudOauthv2/accessToken?code={code}&client_id={client_id}&app_secret={app_secret}	
请求方式
POST
返回json数据格式
```
{
    "ret": 0,	// 状态码 非0为错误码
    "desc": "success",	// 描述
    "data": {
        "access_token": "f06e27a0-1e85-11eb-bc60-8fdcccfc955b",		// access_token
        "access_token_ttl": "2020-12-04 18:10:17",					// access_token过期时间
        "refresh_token": "30895c20-1e80-11eb-9c0e-ef6813716901",	// refresh_token
        "refresh_token_ttl": "2021-11-04 17:29:08"					// refresh_token过期时间
    }
}
```
#### 4. 通过accessToken获取用户信息
地址
https://account.dcloud.net.cn/dcloudOauthv2/userInfo?access_token={access_token}	
请求方式
POST
返回json数据格式
```
{
    "ret": 0,		// 状态码 非0为错误码
    "desc": "success",	// 描述
    "data": {
        "nickname": "phil123",		// 用户昵称
        "avatar": "",				// 用户头像地址
        "uid": "e4541ee0-dada-11ea-a0b7-3f6acaa2391b",	// 用户uid
        "email": "",		// 用户邮箱 如果用户授权了
	"phone": "",		// 用户手机号码 如果用户授权了
    }
}
```
#### accessToken过期后可以通过refreshToken进行获取新的access_token
地址
https://account.dcloud.net.cn/dcloudOauthv2/accessTokenByRefreshToken?refresh_token={refresh_token}	
请求方式
POST
返回json数据格式
```
{
    "ret": 0,		// 状态码 非0为错误码
    "desc": "success",	// 描述
    "data": {
        "access_token": "88e3b460-1e95-11eb-b2c2-b30587156981",		// access_token
        "access_token_ttl": "2020-12-04 20:01:56",					// access_token过期时间
        "refresh_token": "28c86600-1e87-11eb-b70f-ef63535e6ee0",	// refresh_token
        "refresh_token_ttl": "2021-11-04 18:19:01"					// refresh_token过期时间
    }
}
```
### WEB授权接入步骤
在DCloud用户开放平台创建WEB授权时，需要填写域名。拿到client_id、client_secret
### WEB授权接入流程图
[attach]66566[/attach]
点击体验[WEB授权示例](https://hello-open.dcloud.net.cn/pages/login/login)
### 接入流程
#### 1. 拼接DCloud登录授权url链接地址
https://account.dcloud.net.cn/oauth2/webAuthorize?client_id={client_id}&redirect_uri={redirect}&response_type=code
用户登录授权完成后会回跳到redirect并在url参数内携带`code`参数
注意：
redirect需要进行`encodeURIComponent`转码
redirect的主域名需要和在开放平台式申请时填写的域名保持一致

#### 2. 开发者服务商获取到`code`后在自己服务器端去获取accessToken
#### 3. 通过接口获取accessToken
#### 请求过程建议将 参数 放在 Body 中传值，以保证数据安全。

开发者服务商从自己的服务器端发送请求到DCloud的服务器，地址如下：
https://account.dcloud.net.cn/dcloudOauthv2/accessToken?code={code}&client_id={client_id}&client_secret={client_secret}
请求方式
POST
返回json数据格式
```
{
    "ret": 0,	// 状态码 非0为错误码
    "desc": "success",	// 描述
    "data": {
        "access_token": "f06e27a0-1e85-11eb-bc60-8fdcccfc955b",		// access_token
        "access_token_ttl": "2020-12-04 18:10:17",					// access_token过期时间
        "refresh_token": "30895c20-1e80-11eb-9c0e-ef6813716901",	// refresh_token
        "refresh_token_ttl": "2021-11-04 17:29:08"					// refresh_token过期时间
    }
}
```
#### 4. 通过accessToken获取用户信息
地址
https://account.dcloud.net.cn/dcloudOauthv2/userInfo?access_token={access_token}	
请求方式
POST
返回json数据格式
```
{
    "ret": 0,		// 状态码 非0为错误码
    "desc": "success",	// 描述
    "data": {
        "nickname": "phil123",		// 用户昵称
        "avatar": "",				// 用户头像地址
        "uid": "e4541ee0-dada-11ea-a0b7-3f6acaa2391b",	// 用户uid
        "email": "",		// 用户邮箱 如果用户授权了
	"phone": "",		// 用户手机号码 如果用户授权了
    }
}
```
#### accessToken过期后可以通过refreshToken进行获取新的access_token
地址
https://account.dcloud.net.cn/dcloudOauthv2/accessTokenByRefreshToken?refresh_token={refresh_token}	
请求方式
POST
返回json数据格式
```
{
    "ret": 0,		// 状态码 非0为错误码
    "desc": "success",	// 描述
    "data": {
        "access_token": "88e3b460-1e95-11eb-b2c2-b30587156981",		// access_token
        "access_token_ttl": "2020-12-04 20:01:56",					// access_token过期时间
        "refresh_token": "28c86600-1e87-11eb-b70f-ef63535e6ee0",	// refresh_token
        "refresh_token_ttl": "2021-11-04 18:19:01"					// refresh_token过期时间
    }
}
```

### 案例
coding开发了HBuilderX插件，无需额外注册coding账户，即可在HBuilderX中一键上传项目到coding。
详见：[https://ext.dcloud.net.cn/plugin?id=3675](https://ext.dcloud.net.cn/plugin?id=3675)