根据苹果审核指南要求，如果 App 使用第三方或社交登录服务 (例如，Facebook 登录、Google 登录、通过 Twitter 登录、通过 LinkedIn 登录、通过 Amazon 登录或微信登录) 来对其进行设置或验证这个 App 的用户主帐户，则该 App 必须同时提供“通过 Apple 登录”作为同等选项。详情参考：[App Store 审核指南 - 通过 Apple 登录](https://developer.apple.com/cn/app-store/review/guidelines/#sign-in-with-apple)
If an app uses a third-party or social login service (e.g., Facebook login, Google login, Twitter login, LinkedIn login, Amazon login, or WeChat login) to set up or authenticate users of the app, as required by Apple's review guidelines primary account, the app must also offer "Sign in with Apple" as an equivalent option. For details, please refer to: [App Store Review Guidelines - Sign in with Apple](https://developer.apple.com/cn/app-store/review/guidelines/#sign-in-with-apple)

> HBuilderX2.4.7+版本新增支持`苹果登录（Sign in with Apple`，苹果登录是** iOS13** 新增加的功能，当你的应用使用了第三方登录比如微信登录，同时也需要集成苹果登录，否则提交AppStore审核会被拒绝
> HBuilderX 2.4.7+ version newly supports `Sign in with Apple`, Apple sign in is a newly added feature of **iOS13**, when your application uses a third-party login such as WeChat login, you also need to integrate Apple Login, otherwise submitting AppStore review will be rejected


### 开通  
### Open
使用苹果登录首先需要在苹果开发者后台开启 App 的 `Sign In with Apple` 服务：
To log in with Apple, you first need to enable the `Sign In with Apple` service of the App in the Apple developer background:
- 登录到[苹果开发者后台](https://developer.apple.com/)
- Log in to [Apple Developer Dashboard](https://developer.apple.com/)
- 在[Identifiers](https://developer.apple.com/account/resources/identifiers/list)页面选择应用的 App ID（Bundle ID）进入编辑 `Capabilities` 界面，勾选 `Sign In with Apple` 服务并保存
- Select the App ID (Bundle ID) of the app on the [Identifiers](https://developer.apple.com/account/resources/identifiers/list) page to enter the edit `Capabilities` interface, and check the `Sign In with Apple` service and save
![](https://native-res.dcloud.net.cn/images/uniapp/oauth/apple-appid.png)
- 修改 `Sign In with Apple` 配置后需要到 [Profiles](https://developer.apple.com/account/resources/profiles/list) 更新 profile 描述文件（不需要新建），点击 Edit 重新编辑对应的 profile 文件，然后下载保存使用新的 profile 文件即可
- After modifying the `Sign In with Apple` configuration, you need to go to [Profiles](https://developer.apple.com/account/resources/profiles/list) to update the profile description file (no need to create a new one), click Edit to re-edit the corresponding profile file, then download and save the new profile file
![](https://native-res.dcloud.net.cn/images/uniapp/oauth/apple-profile.png)

> 注：只有发布Appstore的应用才能使用苹果登录。企业版开发者账号不支持 `Sign In with Apple` （企业版开发者账号指的是用于企业内部分发App，不能用于发布 App Store 的账号，也就是价格为 299$ 的账号）
> Note: Only apps published in the Appstore can use Apple login. The enterprise version of the developer account does not support `Sign In with Apple` (the enterprise version of the developer account refers to the account used to distribute apps within the enterprise and cannot be used to publish the App Store, that is, the account with the price of 299$)



### 配置  
### Configuration
打开项目的manifest.json文件，在“App模块配置”项的“OAuth(登录鉴权)”下，勾选“苹果登录（Sign in with Apple）”：
![](https://native-res.dcloud.net.cn/images/uniapp/oauth/apple-manifest.png)

**注意**
**Notice**
- HBuilderX中标准真机运行基座使用的是企业证书签名，不支持`Sign In with Apple`
- The standard real machine running base in HBuilderX uses enterprise certificate signature, which does not support `Sign In with Apple`
- 配置后需提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)
- After configuration, the cloud package must be submitted to take effect. Please use the [custom debugging base] when the real machine is running (https://ask.dcloud.net.cn/article/35115)



### 使用苹果登录  
### Login with Apple

- uni-app项目  
- uni-app project
调用 [uni.login(OBJECT)](api/plugins/login?id=login) 发起授权登录，，调用 [uni.getUserInfo(OBJECT)](https://uniapp.dcloud.io/api/plugins/login?id=getuserinfo) 获取用户信息，OBJECT参数中provider属性值固定为`apple`
Call [uni.login(OBJECT)](api/plugins/login?id=login) to initiate authorized login, call [uni.getUserInfo(OBJECT)](https://uniapp.dcloud.io/api/plugins/login ?id=getuserinfo) to get user information, the value of the provider attribute in the OBJECT parameter is fixed to `apple`
- 5+ App项目  
- 5+ App items
调用 [plus.oauth.getServices(successCB,errorCB)](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.getServices) 获取登录服务对象 [plus.oauth.AuthService](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService), 再调用其 [login](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService.login) 方法进行登录授权 
Call [plus.oauth.getServices(successCB,errorCB)](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.getServices) to get the login service object [plus.oauth.AuthService]( https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService), then call its [login](https://www.html5plus.org/doc/zh_cn/oauth.html# plus.oauth.AuthService.login) method for login authorization

#### 登录按钮样式  
#### Login button style
苹果对登录按钮样式有要求，请按照苹果要求统一设置登录按钮的样式，否则审核可能会被拒绝，注意以下事项：
Apple has requirements for the style of the login button, please set the style of the login button uniformly according to Apple's requirements, otherwise the review may be rejected, pay attention to the following:
- 按钮必须在显著的位置（避免滑动屏幕才能看到）
- Buttons must be prominently located (avoid swiping the screen to see)
- 登录按钮有三种外观：白色，带有黑色轮廓线的白色和黑色，其他设计可能会影响审核；
- The login button has three appearances: white, white with black outline and black, other designs may affect the review;
- 按钮圆角范围及按钮最小尺寸也有要求；
- There are also requirements for the rounded corner range of the button and the minimum size of the button;
- 具体规则请参考苹果 [官方文档](https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple/overview/)
- For specific rules, please refer to Apple's [official document](https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple/overview/)

下面是原生端默认的几种按钮样式供大家参考（width:130pt, height:30pt, corner radius: 6pt）  
![](https://native-res.dcloud.net.cn/images/uniapp/oauth/apple-style-zh.png)


#### 示例代码  
#### Sample code

> 注：因为是 iOS13+ 系统才支持苹果登录，所以建议在App的界面入口判断下，只有 iOS13 才显示Apple登录的选项  
> Note: Because the iOS13+ system only supports Apple login, it is recommended that only iOS13 display the option of Apple login under the judgment of the interface entry of the App.

- uni-app项目  
- uni-app project
``` js  
uni.login({
    provider: 'apple',
    success: function (loginRes) {
        // 登录成功
        // login successful
        uni.getUserInfo({
            provider: 'apple',
            success: function(info) {
                // 获取用户信息成功, info.authResult中保存登录认证数据
                // Obtain user information successfully, save login authentication data in info.authResult
            }
        })
    },
    fail: function (err) {
        // 登录授权失败  
        // Login authorization failed
        // err.code错误码参考`授权失败错误码(code)说明`
        // err.code error code refer to `authorization failure error code (code) description`
    }
});
```  

- 5+ App项目  
- 5+ App items
``` js  
var appleOauth = null;
plus.oauth.getServices(function(services) {
	for (var i in services) {
		var service = services[i];
		// 获取苹果授权登录对象，苹果授权登录id 为 'apple' iOS13以下系统，不会返回苹果登录对应的 service  
		// Get the Apple authorized login object, if the Apple authorized login id is 'apple' iOS13 or below, the service corresponding to Apple login will not be returned
		if (service.id == 'apple') {
			appleOauth = service;
			break;
		}
	}
	appleOauth.login( function(oauth){
		// 授权成功
		// Authorization succeeded
    // appleOauth.authResult中保存通用认证数据
    // save generic authentication data in appleOauth.authResult
    // appleOauth.appleInfo中保存苹果登录认证完整数据，参考`appleInfo`说明
    // appleOauth.appleInfo saves the complete data of Apple login authentication, please refer to the description of `appleInfo`
	}, function(err) {
    // 登录授权失败  
    // Login authorization failed
    // err.code是错误码
    // err.code is the error code
	}, {
		// 默认只会请求用户名字信息，如需请求用户邮箱信息，需要设置 scope: 'email'  
		// By default, only user name information is requested. To request user email information, you need to set scope: 'email'
		scope: 'email'
	})
}, function(err) {
	// 获取 services 失败
	// Failed to get services
})
```



**appleInfo**  

属性|类型|说明
property|type|description
:--|:--|:--|
user|String|苹果用户唯一标识符
user|String|Apple user unique identifier
state|String|验证信息状态
state|String|Verification information state
email|String|用户共享的可选电子邮件
email|String|Optional email shared by the user
fullName|Object|用户共享的可选全名
fullName|Object|Optional full name shared by the user
authorizationCode|String|验证数据
authorizationCode|String|Authentication data
identityToken|String|Web令牌(JWT)
identityToken|String|Web Token (JWT)
realUserStatus|Number|标识用户是否为真实的人 0：当前平台不支持，忽略该值；1：无法确认；2：用户真实性非常高
realUserStatus|Number|Identifies whether the user is a real person 0: The current platform does not support, ignore this value; 1: Unable to confirm; 2: The authenticity of the user is very high
scope|String|返回信息作用域
scope|String|Return information scope


**fullName**

属性|类型|说明
property|type|description
:--|:--|:--|
namePrefix|String|名字前缀，头衔、敬称
namePrefix|String|Name prefix, title, honorific
givenName|String|名字
givenName|String|Name
middleName|String|中间名
middleName|String|middle name
familyName|String|姓
familyName|String|Last name
nameSuffix|String|名字后缀，学位、荣誉
nameSuffix|String|Name suffix, degree, honor
nickName|String|昵称
nickName|String|nickname


**授权失败错误码(code)说明**
**Authorization failure error code (code) description**

code|说明
code|Description
:--|:--|
1000|未知错误
1000|Unknown error
1001|取消授权
1001|Cancel authorization
1002|返回值无效
1002|Invalid return value
1003|请求未处理
1003|Request not processed
1004|授权失败
1004|Authorization failed


### 注意事项
### Precautions
1. 内置基座为企业证书签名不支持Sign in with Apple，需要提交云打包或制作自定义基座进行功能测试
1. The built-in pedestal is signed for the enterprise certificate and does not support Sign in with Apple. You need to submit a cloud package or make a custom pedestal for functional testing.
2. 只有首次弹出登录授权框时才会有用户名及email的项（email需要配置 scope: 'email' ），并且用户可以删除或编辑用户名或隐藏用户邮箱，如果用户删除了用户名授权成功后fullname字段也会为空
2. Only when the login authorization box pops up for the first time will there be items of username and email (email needs to be configured with scope: 'email' ), and the user can delete or edit the username or hide the user's mailbox, if the user deletes the username and the authorization is successful After the fullname field will also be empty
3. 授权成功后再次调用登录接口会先校验上次授权是否依然有效，如有效，直接回调成功并返回上次授权成功时的数据，**注意，此校验不会校验identityToken是否过期**，需要用户自行处理；如果想每次都弹出授权框获取新的identityToken等信息，需要先调用'logout()'，然后在调用登录接口就会弹出授权框，注意这时授权框内不会在出现用户名及邮箱，登录成功后这两个字段会为空，需要拿到 authorizationCode，identityToken 后传给服务器，然后和苹果服务器验证可获取用户名称等信息，具体请自行查阅文档；如果想在授权框中再次出现用户名或邮箱。需要在 系统设置->AppleID->密码与安全性->使用Apple ID 的 App 里面取消授权，然后再调用登录接口
3. After the authorization is successful, calling the login interface again will first verify whether the last authorization is still valid. If it is valid, the callback will be successful and the data of the last authorization will be returned. **Note that this verification will not verify whether the identityToken has expired. **, which needs to be handled by the user; if you want to pop up the authorization box every time to obtain new identityToken and other information, you need to call 'logout()' first, and then the authorization box will pop up after calling the login interface. The username and email address will appear. After successful login, these two fields will be empty. You need to get the authorizationCode and identityToken and pass them to the server, and then verify with the Apple server to obtain the user name and other information. For details, please refer to the documentation; if you want to The username or email appears again in the authorization box. You need to cancel the authorization in System Settings->AppleID->Password and Security->Apps using Apple ID, and then call the login interface


