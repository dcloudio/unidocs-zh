>HBuilderX 4.08正式版本2024年4月24日更新云端打包机支持 uni-app 项目配置隐私清单  
>HBuilderX 4.13及以上版本开始支持 uni-app x 项目配置隐私清单  

## 什么是隐私清单？
在 2023 年 6 月的全球开发者大会（WWDC23）上，Apple 宣布了一系列[关于 App Store 提交隐私更新](https://developer.apple.com/cn/news/?id=3d8a9yyh)的新政策。这些更新旨在增强应用程序在用户数据收集和使用方面的透明度，从而更好地保护用户的隐私权益。 

政策主要包含以下关键点：
> * 必要理由的API（[use of required reason API](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_use_of_required_reason_api)）：Apple 引入了一种新的机制，要求开发者在使用某些可能影响用户隐私的 API 时，必须提供使用这些 API 的必要理由。
> * 隐私数据使用描述（[data use in privacy manifests](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests)）：在你的应用程序或第三方SDK的隐私清单中添加收集关于用户的数据类别，以及收集数据的原因。
> * 第三方 SDK 隐私清单和签名：SDK 提供者需要对清单进行签名，以证明其内容的真实性和准确性。（详情见下文中[xcframework格式的SDK库配置隐私清单](#xcframework)）

简单的说隐私清单是一个属性列表，记录您的应用程序或第三方SDK使用的API的原因以及使用/收集的隐私数据类型。

> 从2024年5月1日开始，任何未在隐私清单文件中描述 `必要理由API（use of required reason API）` 使用情况的应用程序，都将无法通过 App Store Connect 的审核，而`隐私数据使用描述(data use in privacy manifests)`目前不会触发审核问题，但建议开发者以及插件作者尽早适配隐私清单，如实填写数据使用描述


## uni-app/uni-app x如何配置隐私清单  
通常情况你无需额外配置隐私清单，uni-app/uni-app x 框架中涉及隐私清单的功能模块 DCloud 会根据应用配置自动生成，更新到HBuilderX到最新版本重新提交云端打包即可。  
在以下情况可能需要你补充隐私清单：  
- 应用代码中包含并非三方SDK提供的收集用户信息相关的功能，比如：获取用户联系方式，信用卡信息，敏感信息、健康信息、浏览历史记录等等  
- 使用的`原生语言插件`或`uts插件`未支持隐私清单，且提交审核时因隐私清单相关问题被拒  

这时需要你根据实际情况制作补充隐私清单文件`PrivacyInfo.xcprivacy`，详情可参考[制作隐私清单文件PrivacyInfo.xcprivacy](#privacyInfo)。  
将制作的隐私清单文件`PrivacyInfo.xcprivacy`保存在项目的 `nativeResources/ios` 目录，详情如下：  
![](https://web-ext-storage.dcloud.net.cn/doc/app/ios/app-setup-ios-privacyinfo.jpg)

> 添加或编辑隐私清单文件`PrivacyInfo.xcprivacy`后需提交云端打包后才能生效  


## 原生语言插件及UTS插件如何配置隐私清单  

> 仅插件作者需关心此章节内容，插件使用者可跳过此章节  

`原生语言插件`及`UTS插件`作者应该根据根据插件的实际情况配置好隐私清单，避免插件使用者手动补充隐私清单，配置后云端打包会自动合并处理隐私清单。  

插件依赖的 `xcframework` 格式SDK库涉及的隐私清单可以通过签名内置 `PrivacyInfo.xcprivacy` 文件，而其它格式的SDK库(如.framework、.a等)或插件源码涉及的隐私清单需要在插件包里内置`PrivacyInfo.xcprivacy` 文件  

### 原生语言插件及UTS插件配置PrivacyInfo.xcprivacy文件  

- 原生语言插件  
在 `ios` 目录下添加 `PrivacyInfo.xcprivacy` 文件，详情如下：  
![](https://web-ext-storage.dcloud.net.cn/doc/app/ios/native-plugin-setup-ios-privacyinfo.jpg)

- UTS插件  
在 `utssdk/app-ios` 目录下添加 `PrivacyInfo.xcprivacy` 文件，详情如下：  
![](https://web-ext-storage.dcloud.net.cn/doc/app/ios/uts-setup-ios-privacyinfo.jpg)

### xcframework格式的SDK库配置隐私清单@xcframework  

xcframework库需在 xcode 环境中进行配置：  
- 在SDK原生工程内创建`PrivacyInfo.xcprivacy`文件，创建方法：  
在Xcode 15以上版本中，创建新文件 -> Resource -> PrivacyInfo.xcprivacy，并根据[制作隐私清单文件PrivacyInfo.xcprivacy](#privacyInfo)编辑隐私清单
- 通过`xcodebuild`命令将SDK制作成xcframework的形式：  
```
xcodebuild -create-xcframework -framework <第一个库的路径> -framework <第二个库的路径> -output <输出路径/库名称.xcframework>
```
- 通过`codesign`命令行给`xcframework`签名：  
```
codesign --timestamp -v --sign "证书名称" SDK名称.xcframework
```


## 制作隐私清单文件PrivacyInfo.xcprivacy@privacyInfo  

隐私清单文件`PrivacyInfo.xcprivacy`是 PropertyList 格式文件，建议在XCode中创建并编辑，完成后保存使用。

### 隐私清单文件中键值对说明  

| Key | 说明 |
|-----|------|
|  NSPrivacyTracking   |   布尔值，指示您的应用程序或第三方SDK是否使用应用程序跟踪透明度框架下定义的数据进行跟踪   |
|  NSPrivacyTrackingDomains   |   一组字符串，列出您的应用程序或第三方SDK连接到的参与跟踪的互联网域。如果用户未通过应用程序跟踪透明度框架授予跟踪权限，则对这些域的网络请求将失败，您的应用程序将收到错误. 如果将NSPrivacyTracking设置为true，则需要在NSPrivaceTrackingDomains中至少提供一个internet域  |
|  NSPrivacyCollectedDataTypes   |   隐私数据使用描述，用于描述应用程序或第三方SDK隐私数据采集的数据类型。有关要在字典中使用的键和值的信息，请参阅[data use in privacy manifests](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests)。   |
|  NSPrivacyAccessedAPITypes   |  必要理由API，使用了苹果需要说明原因的API时需要填写，具体API的列表和原因请参阅[use of required reason API](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_use_of_required_reason_api)。   |

#### NSPrivacyAccessedAPITypes必要理由API的示例  
如应用中用到了UserDefaults相关的API则按如下示例填写：
![](https://web-ext-storage.dcloud.net.cn/doc/app/ios/ios-pricacyinfo-requiredapi-sample.jpg)


#### NSPrivacyCollectedDataTypes隐私数据采集的示例  
如应用中需要用户输入手机号则按如下示例填写：
![](https://web-ext-storage.dcloud.net.cn/doc/app/ios/ios-pricacyinfo-collecteddata-sample.jpg)


更多制作隐私清单文件参考文档：
* [苹果官方文档：Privacy manifest files](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files)  
* [苹果官方文档：use of required reason API](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_use_of_required_reason_api)
* [苹果官方文档：data use in privacy manifests](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_data_use_in_privacy_manifests)
* [掘金：一文解读苹果隐私新政：提供隐私清单文件](https://juejin.cn/post/7260752483054600252)  
* [掘金：iOS 隐私清单和三方SDK签名适配](https://juejin.cn/post/7347165355586109477)


### PrivacyInfo.xcprivacy文件示例  
以下是`PrivacyInfo.xcprivacy`文件示例，仅作为参考，实际使用需删除注释内容：  
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <!-- 描述应用或SDK收集的数据类型 -->
	<key>NSPrivacyCollectedDataTypes</key>
	<array>
		<dict>
			<key>NSPrivacyCollectedDataType</key>
			<string>NSPrivacyCollectedDataTypePhoneNumber</string> <!-- 用于标识应用或SDK收集的数据类型 -->
			<key>NSPrivacyCollectedDataTypeLinked</key>
			<true/> <!-- 应用程序或SDK是否将此数据类型链接到用户的身份 -->
			<key>NSPrivacyCollectedDataTypeTracking</key>
			<false/> <!-- 应用程序或SDK是否使用此数据类型进行跟踪 -->
			<key>NSPrivacyCollectedDataTypePurposes</key>
			<array>
				<string>NSPrivacyCollectedDataTypePurposeAppFunctionality</string> <!-- 收集数据的原因/目的 -->
			</array>
		</dict>
	</array>
	<!-- 描述应用或SDK访问的API类型及使用原因 -->
	<key>NSPrivacyAccessedAPITypes</key>
	<array>
		<dict>
			<key>NSPrivacyAccessedAPITypeReasons</key>
			<array>
				<string>CA92.1</string> <!-- 使用API的原因代码 -->
			</array>
			<key>NSPrivacyAccessedAPIType</key>
			<string>NSPrivacyAccessedAPICategoryUserDefaults</string> <!-- 标记应用程序必要理由的API类型 ->
		</dict>
	</array>
	<!-- 指示应用或SDK是否使用应用跟踪透明度框架下定义的数据进行跟踪 -->
	<key>NSPrivacyTracking</key>
	<false/>
</dict>
</plist>

```


## 小程序SDK/离线SDK如何支持隐私清单
`HBuilderX 4.13`版本开始我们在原生示例工程里内置了默认的`PrivacyInfo.xcprivacy` 文件，开发者可根据自身项目情况编辑后重新出包
参考：[uniMPSDK隐私清单](https://nativesupport.dcloud.net.cn/UniMPDocs/UseSdk/ios.html#%25E9%259A%2590%25E7%25A7%2581%25E6%25B8%2585%25E5%258D%2595)、[离线SDK隐私清单](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/ios.html#%25E9%259A%2590%25E7%25A7%2581%25E6%25B8%2585%25E5%258D%2595)  

