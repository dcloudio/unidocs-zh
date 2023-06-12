<style>
	.join-group-chat{
		position: relative;
	}
	.join-group-chat img{
		display: none;
	}
	.join-group-chat:hover img{
		position: absolute;
                background: #FFF;
		top: 25px;
		right: 0;
		display: block;
		width: 150px;
		height: 150px;
		box-shadow:#999 0px 0px 20px;
		padding: 3px;
	}
</style>

## 概述
## Overview

`uni一键登录`是DCloud联合个推公司推出的，整合了三大运营商网关认证能力的服务。
`uni one-click login` is a service launched by DCloud and a push company that integrates the gateway authentication capabilities of the three major operators.

通过运营商的底层SDK，实现App端无需短信验证码直接获取手机号，也就是很多主流App都提供的一键登录功能。
Through the operator's underlying SDK, the App can directly obtain the mobile phone number without SMS verification code, which is the one-click login function provided by many mainstream apps.

`uni一键登录`是替代短信验证登录的下一代登录验证方式，能消除现有短信验证模式等待时间长、操作繁琐和容易泄露的痛点。
`uni one-click login` is a next-generation login verification method that replaces SMS verification login, which can eliminate the pain points of long waiting time, cumbersome operation and easy leakage of the existing SMS verification mode.

+ 支持版本：HBuilderX 3.0+
+ Supported version: HBuilderX 3.0+
+ 支持项目类型：uni-app的App端，5+ App，Wap2App
+ Supported project types: App side of uni-app, 5+ App, Wap2App
+ 支持系统平台: Android，iOS
+ Support system platform: Android, iOS
+ 支持运营商: 中国移动，中国联通，中国电信
+ Supported operators: China Mobile, China Unicom, China Telecom

![](https://img-cdn-aliyun.dcloud.net.cn/client/doc/univerify/demo.png)

<a id="fullscreen"/>

HBuilderX3.1.6+版本授权登录界面支持全屏模式
HBuilderX3.1.6+ version authorization login interface supports full screen mode

调用uni.login时设置univerifyStyle中的fullScreen属性值为true即可：
When calling uni.login, set the fullScreen property value in unverifyStyle to true:
```js
uni.login({
	provider: 'univerify',
	univerifyStyle: { 
    fullScreen: true
  }
})
```

全屏效果如下:
The full screen effect is as follows:

![](https://img-cdn-aliyun.dcloud.net.cn/client/doc/univerify/full.png)

### 产品优势
### Product advantages

- **用户体验好**
- **Good user experience**

一键登录，无需等待和复制短信验证码，能有效降低用户流失率，提升用户注册量在App激活量中的转换率。
One-click login, no need to wait and copy SMS verification codes, can effectively reduce the user churn rate and improve the conversion rate of user registrations in app activations.

- **便宜**
- **Cheap**

使用`uni一键登录`，每次验证仅需2分！比短信验证码便宜数倍，也比市场上三方提供的一键登录要更便宜。
Use `uni one-click login`, each verification only takes 2 points! It is several times cheaper than the SMS verification code, and it is also cheaper than the one-click login provided by the three parties on the market.

- **安全**
- **Safety**

采用运营商网关认证，避免短信劫持，有效提升安全性
Adopt operator gateway authentication to avoid SMS hijacking and effectively improve security

- **开发体验好**
- **Good development experience**

无需原生插件，无需自定义基座（HBuilder标准基座就可以直接运行调试），简单快速完成上线。
There is no need for native plug-ins or custom bases (the HBuilder standard base can run and debug directly), and it is simple and fast to go online.

### 流程
### process
1. App界面弹出请求授权，询问用户是否同意授权该App获取手机号。这个授权请求界面是运营商sdk弹出的，可以有限定制。
1. The App interface pops up to request authorization, asking the user whether to agree to authorize the App to obtain the mobile phone number. This authorization request interface is popped up by the operator sdk and can be customized to a limited extent.
2. 用户同意授权后，SDK底层访问运营商网关鉴权，获得当前设备`access_token`等信息。
2. After the user agrees to the authorization, the bottom layer of the SDK accesses the operator gateway for authentication, and obtains the current device `access_token` and other information.
3. 在服务器侧通过 uniCloud 将`access_token`等信息 置换为当前设备的真实手机号码。然后服务器直接入库，避免手机号传递到前端发生的不可信情况。
3. On the server side, use uniCloud to replace the `access_token` and other information with the real mobile phone number of the current device. Then the server is directly stored in the warehouse to avoid the untrustworthy situation that the mobile phone number is passed to the front end.

![](https://native-res.dcloud.net.cn/images/univertify/process.png)

前置条件：
precondition:
+ 手机安装有sim卡
+ The phone has a sim card installed
+ 手机开启数据流量（与wifi无关，不要求关闭wifi，但数据流量不能禁用。）
+ Turn on the data flow of the mobile phone (It has nothing to do with wifi, it is not required to turn off the wifi, but the data flow cannot be disabled.)
+ 开通uniCloud服务（但不要求所有后台代码都使用uniCloud）
+ Activate uniCloud service (but do not require all backend code to use uniCloud)


## 开通
## open

### 开通uni一键登录服务
### Enable uni one-click login service
开发者需要登录[DCloud开发者中心](https://dev.dcloud.net.cn/)，申请开通一键登录服务。
Developers need to log in to [DCloud Developer Center](https://dev.dcloud.net.cn/) to apply for one-click login service.

详细步骤参考：[开通一键登录服务的详细教程](https://ask.dcloud.net.cn/article/37965)
For detailed steps, please refer to: [Detailed tutorial on opening one-click login service](https://ask.dcloud.net.cn/article/37965)

开通成功后会得到 apiKey、apiSecret。这2个信息，后续需要配置在uniCloud的云函数里。同时注意保密，这2个信息也是计费凭证。
After the activation is successful, you will get apiKey and apiSecret. These two pieces of information need to be configured in the cloud function of uniCloud later. At the same time, pay attention to confidentiality. These two pieces of information are also billing vouchers.

**注意**
**Notice**
> 应用开通uni一键登录服务后，需要等审核通过后才能正式使用。在审核期间可以使用HBuilder标准基座真机运行调用一键登录功能，调用时会从你的账户中扣费；但在审核期间不可以使用自定义基座调用一键登录功能，调用时会返回错误。
> After the application has opened the uni one-click login service, it needs to wait for the approval before it can be officially used. During the review period, you can use the HBuilder standard base to run the one-key login function, and the fee will be deducted from your account when you call it; but during the review period, you cannot use the custom base to call the one-key login function, and the call will return mistake.


### 开通uniCloud服务
### Enable uniCloud service
一键登录在客户端获取 `access_token` 后，必须在 [uniCloud](https://uniapp.dcloud.io/uniCloud/README) 换取手机号码。
One-click login After obtaining `access_token` on the client side, you must exchange your mobile phone number at [uniCloud](https://uniapp.dcloud.io/uniCloud/README).

在uniCloud的云函数中拿到手机号后，可以直接使用，也可以再转给传统服务器处理，也可以通过[云函数url化](https://uniapp.dcloud.io/uniCloud/http)方式生成普通的http接口给5+ App使用。
After getting the phone number in the cloud function of uniCloud, you can use it directly, or transfer it to a traditional server for processing, or you can use the [cloud function url](https://uniapp.dcloud.io/uniCloud/http) method Generate a common http interface for 5+ apps to use.

注意:
Notice:
**虽然一键登录需要uniCloud，但并不要求开发者把所有的后台服务都迁移到uniCloud**
**Although one-click login requires uniCloud, it does not require developers to migrate all background services to uniCloud**

服务器API详见：[uniCloud云函数中使用一键登录](https://uniapp.dcloud.net.cn/uniCloud/univerify)
For details about the server API, see: [Using One-Key Login in UniCloud Cloud Functions](https://uniapp.dcloud.net.cn/uniCloud/univerify)

uniCloud产生的费用对于一键登陆可以忽略，[详见](/uniCloud/univerify.md#unilogin-fee)

## 开发
## development

本文主要介绍uni-app的客户端调用方法。5+ App（Wap2App）请另行参考：[5+ App一键登录使用指南](https://ask.dcloud.net.cn/article/38009)
This article mainly introduces the client calling method of uni-app. For 5+ App (Wap2App), please refer to: [5+ App One-Key Login User Guide](https://ask.dcloud.net.cn/article/38009)

DCloud还提供了更易用的封装。在[uni-id](/uniCloud/uni-id)里已经预置了`uni一键登录`，并基于`uni-id`提供了[云端一体应用快速开发基本项目模版](https://ext.dcloud.net.cn/plugin?id=5057)，该项目模版内置了包括一键登录在内的各种常用登录示例，开发者可以拿去直接用
DCloud also provides an easier-to-use package. In [uni-id](/uniCloud/uni-id), `uni one-key login` has been preset, and based on `uni-id`, [basic project template for rapid development of cloud integrated application](https:// ext.dcloud.net.cn/plugin?id=5057), the project template has built-in various common login examples including one-click login, developers can use them directly

接下来继续介绍原始API的用法。
Next, continue to introduce the usage of the original API.

### 客户端-获取可用的服务提供商
### client - get available service providers
一键登录，和 uni.login 中的微信登录、QQ登录等provider是并列的。
One-click login is parallel to providers such as WeChat login and QQ login in uni.login.

其中一键登录对应的 provider ID为 'univerify'，当获取provider列表时发现包含 'univerify' ，则说明当前环境打包了一键登录的sdk。
The provider ID corresponding to one-click login is 'univerify'. When the provider list is obtained and found to contain 'univerify', it means that the current environment has packaged the one-click login SDK.

```js
uni.getProvider({
  service: 'oauth',
  success: function (res) {
    console.log(res.provider)// ['qq', 'univerify']
  }
});
```

### 客户端-预登录（可选）
### client-pre-login (optional)
预登录操作可以判断当前设备环境是否支持一键登录，如果能支持一键登录，此时可以显示一键登录选项，同时预登录会准备好相关环境，显著提升显示授权登录界面的速度。
The pre-login operation can determine whether the current device environment supports one-key login. If one-key login is supported, the one-key login option can be displayed at this time. At the same time, the pre-login will prepare the relevant environment, which significantly improves the speed of displaying the authorized login interface.

如果当前设备环境不支持一键登录，此时应该显示其他的登录选项。
If the current device environment does not support one-click login, other login options should be displayed at this time.

如果手机没有插入有效的sim卡，或者手机蜂窝数据网络关闭，都有可能造成预登录校验失败。
If a valid SIM card is not inserted into the phone, or the cellular data network of the phone is turned off, the pre-login verification may fail.

`uni.preLogin(options)`

```js
uni.preLogin({
	provider: 'univerify',
	success(){  //预登录成功
		// 显示一键登录选项
		// Display one-click login options
	},
	fail(res){  // 预登录失败
		// 不显示一键登录选项（或置灰）
		// Don't show the one-click login option (or grey it out)
    // 根据错误信息判断失败原因，如有需要可将错误提交给统计服务器
    // Determine the cause of the failure according to the error message, and submit the error to the statistics server if necessary
		console.log(res.errCode)
		console.log(res.errMsg)
	}
})

```


### 客户端-请求登录授权
### client - request login authorization

弹出用户授权界面。根据用户操作及授权结果返回对应的回调，拿到 `access_token`
The user authorization interface pops up. Return the corresponding callback according to the user operation and authorization result, and get the `access_token`

`uni.login(options);`

```js
uni.login({
	provider: 'univerify',
	univerifyStyle: { // 自定义登录框样式
    //参考`univerifyStyle 数据结构`
    //Refer to `univerifyStyle data structure`
  },
	success(res){ // 登录成功
		console.log(res.authResult);  // {openid:'登录授权唯一标识',access_token:'接口返回的 token'}
	},
	fail(res){  // 登录失败
		console.log(res.errCode)
		console.log(res.errMsg)
	}
})
```


`uni一键登录`的授权弹出界面是默认是半屏的，也可以配置为全屏。这个界面本质是运营商sdk弹出的，它询问手机用户是否授权自己的手机号给这个App使用。
The authorization pop-up interface of `uni one-click login` is half-screen by default, and can also be configured to be full-screen. This interface is essentially popped up by the operator's sdk, which asks the mobile phone user whether to authorize their mobile phone number to be used by the app.

这个授权弹出界面可以通过 univerifyStyle 设置有限定制。
This authorization popup interface can be limitedly customized via the unverifyStyle setting.

univerifyStyle 数据结构：
unverifyStyle data structure:

```json
{  
    "fullScreen": false, // 是否全屏显示，默认值： false
    "backgroundColor": "#ffffff",  // 授权页面背景颜色，默认值：#ffffff
    "backgroundImage": "", // 全屏显示的背景图片，默认值："" （仅支持本地图片，只有全屏显示时支持）  
    "icon": {  
        "path": "static/xxx.png" // 自定义显示在授权框中的logo，仅支持本地图片 默认显示App logo   
    },  
    "closeIcon": {  
        "path": "static/xxx.png" // 自定义关闭按钮，仅支持本地图片。 HBuilderX3.3.7+版本支持
    },  
    "phoneNum": {  
        "color": "#202020"  // 手机号文字颜色 默认值：#202020  
    },  
    "slogan": {  
        "color": "#BBBBBB"  //  slogan 字体颜色 默认值：#BBBBBB  
    },  
    "authButton": {  
        "normalColor": "#3479f5", // 授权按钮正常状态背景颜色 默认值：#3479f5  
        "highlightColor": "#2861c5",  // 授权按钮按下状态背景颜色 默认值：#2861c5（仅ios支持）  
        "disabledColor": "#73aaf5",  // 授权按钮不可点击时背景颜色 默认值：#73aaf5（仅ios支持）  
        "textColor": "#ffffff",  // 授权按钮文字颜色 默认值：#ffffff  
        "title": "本机号码一键登录", // 授权按钮文案 默认值：“本机号码一键登录”  
        "borderRadius": "24px"	// 授权按钮圆角 默认值："24px" （按钮高度的一半）
    },  
    "otherLoginButton": {  
        "visible": true, // 是否显示其他登录按钮，默认值：true  
        "normalColor": "", // 其他登录按钮正常状态背景颜色 默认值：透明 
        "highlightColor": "", // 其他登录按钮按下状态背景颜色 默认值：透明 
        "textColor": "#656565", // 其他登录按钮文字颜色 默认值：#656565  
        "title": "其他登录方式", // 其他登录方式按钮文字 默认值：“其他登录方式”  
        "borderColor": "",  //边框颜色 默认值：透明（仅iOS支持）  
        "borderRadius": "0px" // 其他登录按钮圆角 默认值："24px" （按钮高度的一半）
    },  
    "privacyTerms": {  
        "defaultCheckBoxState":true, // 条款勾选框初始状态 默认值： true
        "isCenterHint":false, //未勾选服务条款时点击登录按钮的提示是否居中显示 默认值: false (3.7.13+ 版本支持)
        "uncheckedImage":"", // 可选 条款勾选框未选中状态图片（仅支持本地图片 建议尺寸 24x24px）(3.2.0+ 版本支持)   
        "checkedImage":"", // 可选 条款勾选框选中状态图片（仅支持本地图片 建议尺寸24x24px）(3.2.0+ 版本支持)   
        "checkBoxSize":12, // 可选 条款勾选框大小，仅android支持
        "textColor": "#BBBBBB", // 文字颜色 默认值：#BBBBBB  
        "termsColor": "#5496E3", //  协议文字颜色 默认值： #5496E3  
        "prefix": "我已阅读并同意", // 条款前的文案 默认值：“我已阅读并同意”  
        "suffix": "并使用本机号码登录", // 条款后的文案 默认值：“并使用本机号码登录”  
        "privacyItems": [  // 自定义协议条款，最大支持2个，需要同时设置url和title. 否则不生效  
            {  
                "url": "https://", // 点击跳转的协议详情页面  
                "title": "用户服务协议" // 协议名称  
            }  
        ]  
    },
    "buttons": {  // 自定义页面下方按钮仅全屏模式生效（3.1.14+ 版本支持）
        "iconWidth": "45px", // 图标宽度（高度等比例缩放） 默认值：45px
        "list": [
            {
                "provider": "apple",
                "iconPath": "/static/apple.png" // 图标路径仅支持本地图片
            }, 
            {
                "provider": "weixin",
                "iconPath": "/static/wechat.png" // 图标路径仅支持本地图片
            }
        ]
    }
}
```

univerifyStyle 属性对应配置的界面指示图
The interface indication diagram corresponding to the configuration of the unverifyStyle property

全屏效果  | 非全屏效果
Full screen effect | Non full screen effect
:--------:|:--------:
<img src="https://img.cdn.aliyun.dcloud.net.cn/client/doc/univerify/full_styles_v2.png" width=240>  | <img src="https://img.cdn.aliyun.dcloud.net.cn/client/doc/univerify/half_styles_v2.png" width=240>

返回数据示例
Return data example

```json
{
	"errMsg": "login:ok",
	"authResult": {
		"openid": "208E2FBE6EF64DF3B2D377D886EF2A14124262bfd7ae16465ea0f0634554dcee7636",
		"access_token": "ZGI4NjkxZWE4YjAyNGUzMjhiMmZiNDcwODBjYjc5MDF8fDJ8djJ8Mg=="
	}
}
```


### 客户端关闭一键登录授权界面
### The client closes the one-click login authorization interface

请求登录认证操作完成后，不管成功或失败都不会关闭一键登录界面，需要主动调用`closeAuthView`方法关闭。
After the request for login authentication is completed, the one-key login interface will not be closed regardless of success or failure. You need to actively call the `closeAuthView` method to close it.

客户端登录认证完成只是说明获取 `access_token` 成功，需要将此数据提交到服务器获取手机号码，完成业务服务登录逻辑后通知客户端关闭登录界面。
The completion of the client login authentication only means that the `access_token` is obtained successfully. You need to submit this data to the server to obtain the mobile phone number. After completing the business service login logic, notify the client to close the login interface.

```js
uni.closeAuthView()
```

### 用户点击一键登录自定义按钮
### User clicks one-click login custom button

`univerifyStyle`中如果配置了`"fullScreen": "true"`和`buttons`选项并且`buttons`数组不为空时，在全屏的时候会渲染出自定义按钮。
If the `"fullScreen": "true"` and `buttons` options are configured in `univerifyStyle` and the `buttons` array is not empty, custom buttons will be rendered in full screen.

当用户点击`自定义按钮`时，会触发`uni.login`的`fail`回调，返回数据如下：
When the user clicks the `custom button`, the `fail` callback of `uni.login` is triggered, and the returned data is as follows:

```json
{
  "code": "30008",
  "errMsg": "用户点击了自定义按钮",
  "index": 0, // 第几个按钮
  "provider": "apple",
}
```

### 获取用户是否选中了勾选框（HBuilderX 3.2.5+ 版本支持）
### Get whether the user has checked the checkbox (supported by HBuilderX 3.2.5+)

`uni.getCheckBoxState(options)`

```js
uni.getCheckBoxState({
	success(res){
		console.log(res.state) // Boolean 用户是否勾选了选框
		console.log(res.errMsg)
	},
	fail(res){
		console.log(res.errCode)
		console.log(res.errMsg)
	}
})

```

### univerifyManager

> **3.2.13+ 版本**可以使用全局 [univerifyManager](https://uniapp.dcloud.io/api/plugins/login?id=getuniverifymanager) 来更高效的使用一键登录
> **3.2.13+ version** can use the global [univerifyManager](https://uniapp.dcloud.io/api/plugins/login?id=getuniverifymanager) to use one-click login more efficiently
>
> 此时点击自定义按钮将不会触发`uni.login`的`fail`回调，也不会自动关闭一键登录弹框
> At this point, clicking the custom button will not trigger the `fail` callback of `uni.login`, nor will it automatically close the one-click login popup

```js
const univerifyManager = uni.getUniverifyManager()

// 预登录
// pre-login
univerifyManager.preLogin()

// 调用一键登录弹框
// Call the one-click login popup
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
  univerifyManager.getCheckBoxState({
    success(res) {
      console.log("getCheckBoxState res: ", res);
      if (res.state) {
        // 关闭一键登录弹框
        // Close the one-click login popup
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

### 用access_token换手机号
### Change phone number with access_token

客户端获取到 `access_token` 后，传递给uniCloud云函数，云函数中通过`uniCloud.getPhoneNumber`方法获取真正的手机号。
After the client obtains the `access_token`, it passes it to the uniCloud cloud function, and the cloud function obtains the real phone number through the `uniCloud.getPhoneNumber` method.

这一步有3种方式：
There are 3 ways to do this step:
1. uni-app项目开通[uniCloud](https://unicloud.dcloud.net.cn/)服务，在前端直接写 `uniCloud.callFunction` ，将 `access_token` 传给指定的云函数。
1. The uni-app project activates the [uniCloud](https://unicloud.dcloud.net.cn/) service, directly write `uniCloud.callFunction` in the front end, and pass the `access_token` to the specified cloud function.
2. 使用普通ajax请求提交 `access_token` 给uniCloud的云函数。这种方式uni-app和5+App、wap2app均可使用，但uniCloud上的云函数需要做URL化。
2. Submit `access_token` to the cloud function of uniCloud using a normal ajax request. This method can be used for uni-app, 5+App, and wap2app, but the cloud function on uniCloud needs to be URLized.
3. 使用普通ajax请求提交 `access_token` 给自己的传统服务器，通过自己的传统服务器再转发给 uniCloud 云函数。这种方式uni-app和5+App、wap2app均可使用，但uniCloud上的云函数需要做URL化。
3. Submit the `access_token` to your traditional server using a normal ajax request, and then forward it to the uniCloud cloud function through your own traditional server. This method can be used for uni-app, 5+App, and wap2app, but the cloud function on uniCloud needs to be URLized.

下面分别提供示例代码：
Sample codes are provided below:

#### uni-app项目使用uniCloud.callFunction的方式调用云函数
#### The uni-app project uses uniCloud.callFunction to call cloud functions

如果是未开通过uniCloud的uni-app项目：
If it is a uni-app project that has not been opened through uniCloud:
1. 首先开通uniCloud服务空间，[参考](https://unicloud.dcloud.net.cn/)
1. First open the uniCloud service space, [Reference](https://unicloud.dcloud.net.cn/)
2. 对项目点右键，创建uniCloud开发环境，然后绑定到上一步创建的服务空间上
2. Right-click on the project, create an uniCloud development environment, and then bind it to the service space created in the previous step
3. 对uniCloud/cloudfunctions/点右键，创建云函数
3. Right-click on uniCloud/cloudfunctions/ to create a cloud function
4. 分别在前端和云端复制下列代码
4. Copy the following code on the front end and the cloud respectively
5. 对云函数点右键，上传到服务空间
5. Right-click on the cloud function and upload to the service space

客户端示例：
Client example:

```js
// 在得到access_token后，通过callfunction调用云函数
// After getting access_token, call cloud function through callfunction
uniCloud.callFunction({
  name: 'xxx', // 你的云函数名称
  data: {
    'access_token': 'xxx', // 客户端一键登录接口返回的access_token
    'openid': 'xxx' // 客户端一键登录接口返回的openid
  }
}).then(res => {
  // res.result = {
  //   code: '',
  //   message: ''
  // }
  // 登录成功，可以关闭一键登录授权界面了
  // The login is successful, you can close the one-click login authorization interface
}).catch(err=>{
  // 处理错误
  // handle errors
})
```

云函数代码示例：
Cloud function code example:
```js
'use strict';
exports.main = async (event, context) => {
  // event里包含着客户端提交的参数
  // event contains the parameters submitted by the client
  const res = await uniCloud.getPhoneNumber({
  	appid: '_UNI_ABCDEFG', // 替换成自己开通一键登录的应用的DCloud appid
  	provider: 'univerify',
  	apiKey: 'xxx', // 在开发者中心开通服务并获取apiKey
  	apiSecret: 'xxx', // 在开发者中心开通服务并获取apiSecret
  	access_token: event.access_token,
  	openid: event.openid
  })
  
  console.log(res); // res里包含手机号
  // 执行用户信息入库等操作，正常情况下不要把完整手机号返回给前端
  // Perform operations such as user information storage. Under normal circumstances, do not return the full mobile phone number to the front end
  // 如果数据库在uniCloud上，可以直接入库
  // If the database is on uniCloud, it can be stored directly
  // 如果数据库不在uniCloud上，可以通过 uniCloud.httpclient API，将手机号通过http方式传递给其他服务器的接口，详见：https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=httpclient
  // If the database is not on uniCloud, you can use the uniCloud.httpclient API to pass the mobile phone number to the interface of other servers through http. For details, see: https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id =httpclient
  return {
    code: 0,
    message: '获取手机号成功'
  }
}
```

完整的项目实例源码，可以参考：
For the complete source code of the project example, please refer to:
1. uni-starter，云端一体应用快速开发基本项目模版：[https://ext.dcloud.net.cn/plugin?id=5057](https://ext.dcloud.net.cn/plugin?id=5057)
1. uni-starter, a basic project template for rapid development of cloud-integrated applications: [https://ext.dcloud.net.cn/plugin?id=5057](https://ext.dcloud.net.cn/plugin?id =5057)
2. hello uni-app，打包后直接体验：[https://m3w.cn/uniapp](https://m3w.cn/uniapp)；源码获取：在HBuilderX中新建uni-app项目，选择hello uni-app模板。一键登录的具体位置在 API - login 栏目中。
2. hello uni-app, experience it directly after packaging: [https://m3w.cn/uniapp](https://m3w.cn/uniapp); source code acquisition: create a new uni-app project in HBuilderX, select hello uni -app templates. The specific location of one-click login is in the API - login column.

**注意**
**Notice**

- 开发期间如果重新获取过appid需要重新编译uni-app项目
- If the appid is re-acquired during development, the uni-app project needs to be recompiled

#### 5+（wap2app）项目通过云函数URL化让云函数暴露出普通http接口
#### The 5+ (wap2app) project exposes the normal http interface to the cloud function through URLization of the cloud function

5+（wap2app）项目不可使用uniCloud.callFunction请求云函数。
5+ (wap2app) projects cannot use uniCloud.callFunction to request cloud functions.

uniCloud云函数提供了[URL化](https://uniapp.dcloud.io/uniCloud/http)方案，可以把云函数暴露出普通http接口。设置方法参考：[https://uniapp.dcloud.io/uniCloud/http](https://uniapp.dcloud.io/uniCloud/http)
The uniCloud cloud function provides the [URLization](https://uniapp.dcloud.io/uniCloud/http) solution, which can expose the cloud function to a common http interface. Setting method reference: [https://uniapp.dcloud.io/uniCloud/http](https://uniapp.dcloud.io/uniCloud/http)

此时客户端代码使用普通ajax写法。
At this time, the client code uses ordinary ajax writing.

客户端代码：
Client code:
```js
const xhr = new plus.net.XMLHttpRequest();
xhr.onload = function(e) {
  const {
    code,
    message
  } = JSON.parse(xhr.responseText)
}
xhr.open( "POST", "https://xxx" ); // url应为云函数Url化之后的地址，可以在uniCloud web控制台云函数详情页面看到
xhr.setRequestHeader('Content-Type','application/json');
xhr.send(JSON.stringify({
  access_token: 'xxx', // 客户端一键登录接口返回的access_token
  openid: 'xxx' // 客户端一键登录接口返回的openid
}));
```

云函数代码：
Cloud function code:
```js
// 下面仅展示客户端使用post方式发送content-type为application/json请求的场景
// The following only shows the scenario where the client sends a request with a content-type of application/json using the post method
exports.main = async(event) => {
  let body = event.body
  if(event.isBase64Encoded) {
    body = Buffer.from(body,'base64')
  }
  const {
    access_token,
    openid
  } = JSON.parse(body)
  const res = await uniCloud.getPhoneNumber({
  	provider: 'univerify',
    appid: 'xxx', // DCloud appid，不同于callFunction方式调用，使用云函数Url化需要传递DCloud appid参数！！！
  	apiKey: 'xxx', // 在开发者中心开通服务并获取apiKey
  	apiSecret: 'xxx', // 在开发者中心开通服务并获取apiSecret
  	access_token: access_token,
  	openid: openid
  })
  console.log(res); // res里包含手机号
  // 如果数据库不在uniCloud上，可以通过 uniCloud.httpclient API，将手机号通过http方式传递给其他服务器的接口，详见：https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=httpclient
  // If the database is not on uniCloud, you can use the uniCloud.httpclient API to pass the mobile phone number to the interface of other servers through http. For details, see: https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id =httpclient
  
  return {  // 不建议把完整手机号返回给前端
    code: 0,
    message: '获取手机号成功'
  }
}
```

uni-app项目也可以使用普通的uni.request来请求云函数URL化后的http接口，此处不再重复举例。
The uni-app project can also use ordinary uni.request to request the URLized http interface of the cloud function, and the example will not be repeated here.

#### 通过传统服务器连接uniCloud云函数
#### Connect uniCloud cloud functions through traditional servers

开发者也可以在客户端获取到access_token等信息后，传给自己的传统服务器。然后由自己的传统服务器，访问uniCloud的云函数（需将云函数URL化）。
Developers can also pass information such as access_token to their traditional servers after the client obtains them. Then use your own traditional server to access the cloud function of uniCloud (the cloud function needs to be URLized).

写法类似上面5+项目的云函数url化的方式，但是不同的是需要云函数返回手机号给自己服务器，这样就需要确保数据安全。
The writing method is similar to the urlization method of the cloud function of the above 5+ projects, but the difference is that the cloud function needs to return the mobile phone number to its own server, so that data security needs to be ensured.

下面以一个简单的例子演示如何使用签名验证请求是否合法
The following is a simple example to demonstrate how to use the signature to verify whether the request is legitimate

```js
// 以nodejs为例
// Take nodejs as an example
const crypto = require('crypto')

const secret = 'your-secret-string' // 自己的密钥不要直接使用示例值，且注意不要泄露
const hmac = crypto.createHmac('sha256', secret);

// 自有服务器生成签名，并以GET方式发送请求
// Generate signature by own server and send request in GET mode
const params = {
  access_token: 'xxx', // 客户端传到自己服务器的参数
  openid: 'xxx'
}
// 字母顺序排序后拼接签名串
// Concatenate the signature string after sorting alphabetically
const signStr = Object.keys(params).sort().map(key => {
  return `${key}=${params[key]}`
}).join('&')
hmac.update(signStr);
const sign = hmac.digest('hex')
// 最终请求如下链接，其中https://xxxx/xxx为云函数Url化地址
// The final request is as follows, where https://xxxx/xxx is the URL of the cloud function
// https://xxxx/xxx?access_token=xxx&openid=xxx&sign=${sign} 其中${sign}为上一步得到的sign值
// https://xxxx/xxx?access_token=xxx&openid=xxx&sign=${sign} where ${sign} is the sign value obtained in the previous step
```


```js
// 云函数验证签名，此示例中以接受GET请求为例作演示
// The cloud function verifies the signature. In this example, accepting a GET request is used as an example to demonstrate
const crypto = require('crypto')
exports.main = async(event) => {
  
  const secret = 'your-secret-string' // 自己的密钥不要直接使用示例值，且注意不要泄露
  const hmac = crypto.createHmac('sha256', secret);
  
  let params = event.queryStringParameters
  const sign = params.sign
  delete params.sign
  const signStr = Object.keys(params).sort().map(key => {
    return `${key}=${params[key]}`
  }).join('&')
  
  hmac.update(signStr);
  
  if(sign!==hmac.digest('hex')){
    throw new Error('非法访问')
  }
  
  const {
    access_token,
    openid
  } = params
  const res = await uniCloud.getPhoneNumber({
  	provider: 'univerify',
    appid: 'xxx', // DCloud appid，不同于callFunction方式调用，使用云函数Url化需要传递DCloud appid参数
  	apiKey: 'xxx', // 在开发者中心开通服务并获取apiKey
  	apiSecret: 'xxx', // 在开发者中心开通服务并获取apiSecret
  	access_token: access_token,
  	openid: openid
  })
  // 返回手机号给自己服务器
  // Return the phone number to the server
  return res
}
```


#### 返回 res 数据说明
#### Return res data description
```json
{
	"data": {
		"code": 0,
		"success": true,
		"phoneNumber": "166xxxx6666"
	},
	"statusCode": 200,
	"header": {
		"Content-Type": "application/json; charset=utf-8",
		"Connection": "keep-alive",
		"Content-Length": "53",
		"Date": "Fri, 06 Nov 2020 08:57:21 GMT",
		"X-CloudBase-Request-Id": "xxxxxxxxxxx",
		"ETag": "xxxxxx"
	},
	"errMsg": "request:ok"
}
```


### 错误码
### error code

|  错误码  |  错误描述  |处理方案|
| Error code | Error description | Solution|
|  :-:  |  :-:  |  :-:  |
|  -7   |  uniAppid 缺失 | 检查是否配置/已通过审核 |
| -7 | uniAppid is missing | check if configured/approved |
|  1000 |  当前 uniAppid 尚未开通一键登录  | 检查是否配置/已通过审核 |
| 1000 | The current uniAppid has not yet opened one-key login | Check whether it is configured/passed audit |
|  1001 |  应用所有者账号信息异常，请检查账号一键登录服务是否正常  | 检查账号一键登录服务是否正常 |
| 1001 | The account information of the application owner is abnormal, please check whether the one-click login service of the account is normal | Check whether the one-click login service of the account is normal |
|  1002 |  应用所有者账号信息异常，请检查账号余额是否充足 | 检查账号余额是否充足|
| 1002 | The account information of the application owner is abnormal, please check whether the account balance is sufficient | Check whether the account balance is sufficient |
|  4001 |  请求参数异常 |校验异常，联系官方人员|
| 4001 | The request parameter is abnormal | The verification is abnormal, contact the official staff |
|  4003 |  开发者账户appid 校验异常，联系官方人员 |校验异常，联系官方人员|
|  5000 |  取号失败，请检查SIM卡是否停机欠费；token是否过期 | 联系官方人员 |
| 20202 |  终端未开启SIM流量 | 引导用户手动开启设备流量 |
| 20202 | Terminal does not enable SIM data | Guide users to manually turn on device data |
| 30001	|  当前网络环境不适合执行该操作  | 无 |
| 30001 | The current network environment is not suitable for this operation | None |
| 30002 |  用户点击了其他登录方式  | 无 |
| 30002 | User clicked on another login method | None |
| 30003 |  用户关闭验证界面  | 无 |
| 30003 | User closed authentication screen | None |
| 30004 |  其他错误  | 联系官方人员 |
| 30004 | Other Errors | Contact Official |
| 30005 |  预登录失败  | 不具备一键登录的使用前提，设备不支持/未开启数据流量/其他原因 |
| 30005 | Pre-login failed | There is no prerequisite for one-key login, the device does not support / data traffic is not enabled / other reasons |
| 30006 |  一键登录失败  | 无 |
| 30006 | One-click login failed | None |
| 30007 |  获取本机号码校验token失败  | 校验异常，联系官方人员|
| 30007 | Failed to obtain the verification token of the local number | The verification is abnormal, contact the official staff |
| 30008 |  用户点击了自定义按钮  | 无 |
| 30008 | User clicked custom button | None |
| 40004 |  应用不存在  | 多出现在自定义基座的场景，请确保应用已通过审核后，且已重新打包  |
| 40004 | The application does not exist | It is often used in custom docking scenarios, please ensure that the application has been reviewed and repackaged |
| 40047 |  一键登录取号失败  | 校验异常，联系官方人员|
| 40047 | One-key login failed to get number | Check abnormal, contact official staff |
| 40053 |  手机号校验失败  | 校验异常，联系官方人员|
| 40053 | The mobile phone number verification failed | The verification is abnormal, contact the official staff |
| 40101 |  移动-源IP鉴权失败 |检查一下手机卡类型是否是正常运营商手机卡，关闭飞行模式后重新尝试。|
| 40101 | Mobile-source IP authentication failed | Check whether the mobile phone card type is a normal carrier mobile phone card, and try again after turning off the airplane mode. |
| 40201 |  联通-源IP鉴权失败 |检查一下手机卡类型是否是正常运营商手机卡，关闭飞行模式后重新尝试。|
| 40201 | Unicom-source IP authentication failed |Check whether the mobile phone card type is a normal carrier mobile phone card, and try again after turning off the airplane mode. |
| 40301 |  电信-源IP鉴权失败 |检查一下手机卡类型是否是正常运营商手机卡，关闭飞行模式后重新尝试。|
| 40301 | Telecom - source IP authentication failed | Check whether the mobile phone card type is a normal carrier mobile phone card, and try again after turning off the airplane mode. |


## 运行基座和打包
## Running the dock and packing

- 使用`uni一键登录`，不需要制作自定义基座，使用HBuilder标准真机运行基座即可。在云函数中配置好apiKey、apiSecret后，一样从你的账户充值中扣费。
- Use `uni one-click login`, no need to make a custom base, just use the HBuilder standard real machine to run the base. After configuring the apiKey and apiSecret in the cloud function, the fee will be deducted from your account recharge.

- 云端打包
- Cloud packaging
在项目manifest.json页面“App模块配置”项的“OAuth(登录鉴权)”下勾选“一键登录(uni-verify)”。
![](https://img-cdn-aliyun.dcloud.net.cn/client/doc/univerify/hx.png)

- 离线打包
- Offline packaging
  + Android平台：[一键登录Android离线打包配置](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/oauth?id=%e4%b8%80%e9%94%ae%e7%99%bb%e5%bd%95)
  + Android platform: [One-click login Android offline package configuration](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/oauth?id=%e4%b8%80%e9%94%ae%e7 %99%bb%e5%bd%95)
  + iOS平台：[一键登录iOS离线打包配置](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/oauth?id=%e4%b8%80%e9%94%ae%e7%99%bb%e5%bd%95%ef%bc%88univerify%ef%bc%89h)
  + iOS platform: [One-click login for iOS offline package configuration](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/oauth?id=%e4%b8%80%e9%94%ae%e7 %99%bb%e5%bd%95%ef%bc%88univerify%ef%bc%89h)


## 常见问题
## common problem
- **预登录有效期**
- **Pre-login validity period**
预登录有效期为10分钟，超过10分钟后预登录失效，此时调用login授权登录相当于之前没有调用过预登录，大概需要等待1-2秒才能弹出授权界面。
The pre-login is valid for 10 minutes. After 10 minutes, the pre-login is invalid. At this time, calling the login authorization login is equivalent to not calling the pre-login before. It takes about 1-2 seconds before the authorization interface pops up.
预登录只能使用一次，调用login弹出授权界面后，如果用户操作取消登录授权，再次使用一键登录时需要重新调用预登录。
Pre-login can only be used once. After calling login to pop up the authorization interface, if the user cancels the login authorization, the pre-login needs to be called again when using one-key login again.

- **双卡手机能否同时获取两个手机号码**
- **Can dual SIM phones get two phone numbers at the same time**
不支持同时获取两个手机号，
It is not supported to obtain two mobile phone numbers at the same time.
双卡手机以开启数据流量的 SIM 卡进行认证。
Dual SIM phones are authenticated with a SIM card with data traffic turned on.

- **提示“非移动网关ip地址”**
- **Prompt "Non-Mobile Gateway IP Address"**
大多数情况 是因为部分特定设备，不支持双卡双待的网络环境。
In most cases, it is because some specific devices do not support dual-card dual-standby network environment.

- **uniCloud费用贵不贵？**
uniCloud产生的费用对于一键登陆可以忽略，[详见](/uniCloud/univerify.md#unilogin-fee)

- **使用有其他疑问**
- **Other questions about use**
欢迎扫码加入 一键登录 微信交流群讨论：
    <br/><img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/Dcloud-%E4%B8%80%E9%94%AE%E8%AE%A4%E8%AF%81.png" width="250"/>




