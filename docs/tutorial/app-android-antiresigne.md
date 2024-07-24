在Android系统中，签名是应用发布和安装的重要环节。所有安装在系统中的应用都必须拥有数字证书，即应用的签名。Android SDK提供的apksigner工具可以对应用安装包进行签名。虽然这为开发者带来了便利，但也存在安全隐患。例如，其他开发者可能获取你的应用安装包，使用反编译工具进行修改，如修改uni-app项目的appid、应用包名、甚至植入恶意病毒或广告，然后重新打包签名，实施二次打包重签名攻击。这可能导致应用被篡改和数据泄露等严重后果。

HBuilderX4.25版本Android平台云端打包提供“防重签”功能，避免应用安装包被二次打包重签名攻击。

## 配置方法

在HBuilderX中点击菜单 “发行” -> “原生App-云打包” 打开 “App打包” 界面，在 “Android设置” 栏中可配置 “防重签”，如下图所示：

![](https://web-ext-storage.dcloud.net.cn/doc/tutorial/app/android-antiresigne.png)

Android应用的“防重签”功能会在启动时进行验证，如果验证失败则弹出提示框（如下图），关闭提示框则直接退出应用。

![](https://web-ext-storage.dcloud.net.cn/doc/tutorial/app/android-antiresigne-tips.png)

支持配置以下验证项：

- appid  
应用安装包绑定uni-app项目的 appid，默认情况会开启此项验证。  

- 包名  
应用安装包绑定云端打包配置的 包名，避免应用被其它开发者修改包名后二次打包发布。  

- 证书  
应用安装包绑定云端打包时配置的 证书 指纹信息，这种配置安全性最高。二次打包重签名需要用到签名证书，只要证书信息发生变化则无法通过验证。  
这也要求开发者务必保护好自己的签名证书，避免证书被其它人获取后用于二次打包重签名。  


## 注意事项  

- App加固 可对应用安装包进行安全新增强，同时也支持防二次打包功能，如需更高级别的安全性，推荐使用[uni安全加固](https://uniapp.dcloud.net.cn/tutorial/app-security.html)  

