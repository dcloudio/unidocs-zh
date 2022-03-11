根据苹果审核指南要求，如果 App 使用第三方或社交登录服务 (例如，Facebook 登录、Google 登录、通过 Twitter 登录、通过 LinkedIn 登录、通过 Amazon 登录或微信登录) 来对其进行设置或验证这个 App 的用户主帐户，则该 App 必须同时提供“通过 Apple 登录”作为同等选项。详情参考：[App Store 审核指南 - 通过 Apple 登录](https://developer.apple.com/cn/app-store/review/guidelines/#sign-in-with-apple)

> HBuilderX2.4.7+版本新增支持`苹果登录（Sign in with Apple`，苹果登录是** iOS13** 新增加的功能，当你的应用使用了第三方登录比如微信登录，同时也需要集成苹果登录，否则提交AppStore审核会被拒绝


### 开通  
使用苹果登录首先需要在苹果开发者后台开启 App 的 `Sign In with Apple` 服务：
- 登录到[苹果开发者后台](https://developer.apple.com/)
- 在[Identifiers](https://developer.apple.com/account/resources/identifiers/list)页面选择应用的 App ID（Bundle ID）进入编辑 `Capabilities` 界面，勾选 `Sign In with Apple` 服务并保存
![](https://native-res.dcloud.net.cn/images/uniapp/oauth/apple-appid.png)
- 修改 `Sign In with Apple` 配置后需要到 [Profiles](https://developer.apple.com/account/resources/profiles/list) 更新 profile 描述文件（不需要新建），点击 Edit 重新编辑对应的 profile 文件，然后下载保存使用新的 profile 文件即可
![](https://native-res.dcloud.net.cn/images/uniapp/oauth/apple-profile.png)

> 注：只有发布Appstore的应用才能使用苹果登录。企业版开发者账号不支持 `Sign In with Apple` （企业版开发者账号指的是用于企业内部分发App，不能用于发布 App Store 的账号，也就是价格为 299$ 的账号）



### 配置  
打开项目的manifest.json文件，在“App模块配置”项的“OAuth(登录鉴权)”下，勾选“苹果登录（Sign in with Apple）”：
![](https://native-res.dcloud.net.cn/images/uniapp/oauth/apple-manifest.png)

**注意**
- HBuilderX中标准真机运行基座使用的是企业证书签名，不支持`Sign In with Apple`
- 配置后需提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)



### 使用苹果登录  

- uni-app项目  
调用 [uni.login(OBJECT)](api/plugins/login?id=login) 发起授权登录，，调用 [uni.getUserInfo(OBJECT)](https://uniapp.dcloud.io/api/plugins/login?id=getuserinfo) 获取用户信息，OBJECT参数中provider属性值固定为`apple`
- 5+ App项目  
调用 [plus.oauth.getServices(successCB,errorCB)](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.getServices) 获取登录服务对象 [plus.oauth.AuthService](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService), 再调用其 [login](https://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService.login) 方法进行登录授权 

#### 登录按钮样式  
苹果对登录按钮样式有要求，请按照苹果要求统一设置登录按钮的样式，否则审核可能会被拒绝，注意以下事项：
- 按钮必须在显著的位置（避免滑动屏幕才能看到）
- 登录按钮有三种外观：白色，带有黑色轮廓线的白色和黑色，其他设计可能会影响审核；
- 按钮圆角范围及按钮最小尺寸也有要求；
- 具体规则请参考苹果 [官方文档](https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple/overview/)

下面是原生端默认的几种按钮样式供大家参考（width:130pt, height:30pt, corner radius: 6pt）
![](https://native-res.dcloud.net.cn/images/uniapp/oauth/apple-style-zh.png)


#### 示例代码  

> 注：因为是 iOS13+ 系统才支持苹果登录，所以建议在App的界面入口判断下，只有 iOS13 才显示Apple登录的选项  

- uni-app项目  
``` js  
uni.login({
    provider: 'apple',
    success: function (loginRes) {
        // 登录成功
        uni.getUserInfo({
            provider: 'apple',
            success: function(info) {
                // 获取用户信息成功, info.authResult中保存登录认证数据
            }
        })
    },
    fail: function (err) {
        // 登录授权失败  
        // err.code错误码参考`授权失败错误码(code)说明`
    }
});
```  

- 5+ App项目  
``` js  
var appleOauth = null;
plus.oauth.getServices(function(services) {
	for (var i in services) {
		var service = services[i];
		// 获取苹果授权登录对象，苹果授权登录id 为 'apple' iOS13以下系统，不会返回苹果登录对应的 service  
		if (service.id == 'apple') {
			appleOauth = service;
			break;
		}
	}
	appleOauth.login( function(oauth){
		// 授权成功
    // appleOauth.authResult中保存通用认证数据
    // appleOauth.appleInfo中保存苹果登录认证完整数据，参考`appleInfo`说明
	}, function(err) {
    // 登录授权失败  
    // err.code是错误码
	}, {
		// 默认只会请求用户名字信息，如需请求用户邮箱信息，需要设置 scope: 'email'  
		scope: 'email'
	})
}, function(err) {
	// 获取 services 失败
})
```



**appleInfo**  

属性|类型|说明
:--|:--|:--|
user|String|苹果用户唯一标识符
state|String|验证信息状态
email|String|用户共享的可选电子邮件
fullName|Object|用户共享的可选全名
authorizationCode|String|验证数据
identityToken|String|Web令牌(JWT)
realUserStatus|Number|标识用户是否为真实的人 0：当前平台不支持，忽略该值；1：无法确认；2：用户真实性非常高
scope|String|返回信息作用域


**fullName**

属性|类型|说明
:--|:--|:--|
namePrefix|String|名字前缀，头衔、敬称
givenName|String|名字
middleName|String|中间名
familyName|String|姓
nameSuffix|String|名字后缀，学位、荣誉
nickName|String|昵称


**授权失败错误码(code)说明**

code|说明
:--|:--|
1000|未知错误
1001|取消授权
1002|返回值无效
1003|请求未处理
1004|授权失败


### 注意事项
1. 内置基座为企业证书签名不支持Sign in with Apple，需要提交云打包或制作自定义基座进行功能测试
2. 只有首次弹出登录授权框时才会有用户名及email的项（email需要配置 scope: 'email' ），并且用户可以删除或编辑用户名或隐藏用户邮箱，如果用户删除了用户名授权成功后fullname字段也会为空
3. 授权成功后再次调用登录接口会先校验上次授权是否依然有效，如有效，直接回调成功并返回上次授权成功时的数据，**注意，此校验不会校验identityToken是否过期**，需要用户自行处理；如果想每次都弹出授权框获取新的identityToken等信息，需要先调用'logout()'，然后在调用登录接口就会弹出授权框，注意这时授权框内不会在出现用户名及邮箱，登录成功后这两个字段会为空，需要拿到 authorizationCode，identityToken 后传给服务器，然后和苹果服务器验证可获取用户名称等信息，具体请自行查阅文档；如果想在授权框中再次出现用户名或邮箱。需要在 系统设置->AppleID->密码与安全性->使用Apple ID 的 App 里面取消授权，然后再调用登录接口


