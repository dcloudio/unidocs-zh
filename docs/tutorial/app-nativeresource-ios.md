# iOS原生应用配置文件和资源

app打包，在iOS原生开发中提供了配置 Info.plist 和 资源文件（Bundle Resources）。uni-app中对常用项进行了封装，提供了[manifest.json](https://uniapp.dcloud.net.cn/collocation/manifest-app.html)。

但manifest.json不能包含所有iOS的配置。

在HBuilderX 3.6.5以前，开发者如需使用manifest未封装的配置、或需自定义资源文件（Bundle Resources）内容，只能离线打包或开发[App原生语言插件](https://nativesupport.dcloud.net.cn/NativePlugin/README)。

HBuilderX3.6.5起，支持直接在应用项目中配置 iOS 平台的 Info.plist 和 资源文件（Bundle Resources）。


## 配置文件 Info.plist@infoPlist

`Info.plist`文件是 XCode 工程配置文件，可在HBuilderX中项目中添加`Info.plist`文件，云端打包后将会合并到 XCode 工程生成 ipa。

在HBuilderX中，对项目根目录右键菜单 "新建" -> "自定义文件"  
![](https://native-res.dcloud.net.cn/images/uniapp/nativeresource/newfile.png)

输入文件名称 `Info.plist`（注意大小写敏感），点击 “创建” 按钮新建文件  
![](https://native-res.dcloud.net.cn/images/uniapp/nativeresource/ios/info.png)

根据应用需求编辑添加需要的内容，如下示例：
``` xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>My_Custom_String_Key</key>
    <string>My_Custom_String_Value</string>
    <key>My_Custom_Array_Key</key>
    <array>
      <dict>
        <key>My_Custom_Array_Item_Key</key>
        <string>My_Custom_Array_Item_Value</string>
        <key>My_Custom_Array_Item_Key2</key>
        <string>My_Custom_Array_Item_Value2</string>
      </dict>
    </array>
  </dict>
</plist>
```


**注意**
- plist文件必须符合标准的xml格式  
- plist文件必须符合Apple Information Property List规范，参考[详情](https://developer.apple.com/documentation/bundleresources/information_property_list)  
	* 文件头需加`<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">`
	* 根节点必须是plist，二级节点必须是dict   
- Info.plist的内容和manifest.json的内容应避免冲突，即不配置manifest中已经配置过的内容。云端打包时会合并到app中的Info.list文件，出现冲突时Info.plist的内容会覆盖manifest.json中配置  
- plist文件配置需提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)


### iOS隐私信息访问描述配置@usageDescription  
如果应用需要修改隐私信息访问的许可描述，可根据需求在`Info.plist`文件中添加，如下示例：
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>NSPhotoLibraryUsageDescription</key>
    <string>读取相册的许可描述</string>
    <key>NSPhotoLibraryAddUsageDescription</key>
    <string>读写相册的许可描述</string>
    <key>NSCameraUsageDescription</key>
    <string>使用摄像头的许可描述</string>
    <key>NSMicrophoneUsageDescription</key>
    <string>使用麦克风的许可描述</string>
    <key>NSLocationWhenInUseUsageDescription</key>
    <string>运行期访问位置信息的许可描述</string>
    <key>NSLocationAlwaysUsageDescription</key>
    <string>后台运行期访问位置信息的许可描述</string>
    <key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
    <string>访问位置信息的许可描述</string>
    <key>NSUserNotificationsUsageDescription</key>
    <string>使用推送通知的许可描述</string>
    <key>NSCalendarsUsageDescription</key>
    <string>访问日历的许可描述</string>
    <key>NSContactsUsageDescription</key>
    <string>访问通讯录的许可描述</string>
    <key>NSBluetoothPeripheralUsageDescription</key>
    <string>使用蓝牙的许可描述</string>
    <key>NSBluetoothAlwaysUsageDescription</key>
    <string>持续使用蓝牙的许可描述</string>
    <key>NSSpeechRecognitionUsageDescription</key>
    <string>使用系统语音识别的许可描述</string>
    <key>NSRemindersUsageDescription</key>
    <string>访问提醒事项的许可描述</string>
    <key>NSMotionUsageDescription</key>
    <string>访问运动与健身的许可描述</string>
    <key>NSHealthUpdateUsageDescription</key>
    <string>更新健康数据的许可描述</string>
    <key>NSHealthShareUsageDescription</key>
    <string>分享健康数据的许可描述</string>
    <key>NSAppleMusicUsageDescription</key>
    <string>访问媒体资料库的许可描述</string>
    <key>NFCReaderUsageDescription</key>
    <string>使用NFC的许可描述</string>
    <key>NSHealthClinicalHealthRecordsShareUsageDescription</key>
    <string>访问临床记录信息的许可描述</string>
    <key>NSHomeKitUsageDescription</key>
    <string>访问HomeKit数据的许可描述</string>
    <key>NSSiriUsageDescription</key>
    <string>访问Siri的许可描述</string>
    <key>NSFaceIDUsageDescription</key>
    <string>使用FaceID的许可描述</string>
    <key>NSLocalNetworkUsageDescription</key>
    <string>使用本地网络的许可描述</string>
    <key>NSUserTrackingUsageDescription</key>
    <string>跟踪用户活动的许可描述</string>
  </dict>
</plist>
```

**注意**  
uni-app x项目manifest.json中没有提供iOS隐私信息访问许可描述的配置，需在此Info.plist中添加。  
配置许可描述时需根据应用实际情况准确描述用途，否则提交AppStore审核可能被拒。  
- NSUserNotificationsUsageDescription  
  使用消息推动通知的许可描述是可选配置，不配置此字段（不包含NSUserNotificationsUsageDescription）也可以通过AppStore审核；如果配置了此字段则需正确描述应用使用消息通知的用途才能通过AppStore审核。

**相关参考**  
- iOS隐私信息访问列表，参考：[https://developer.apple.com/documentation/bundleresources/information_property_list/protected_resources](https://developer.apple.com/documentation/bundleresources/information_property_list/protected_resources)


### iOS url scheme配置@urlScheme  
如果应用需要向系统注册url scheme，以便在浏览器中通过scheme打开App，可根据需求在`Info.plist`文件中添加`CFBundleURLTypes`数据，如下示例：
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>CFBundleURLTypes</key>
    <array>
      <dict>
        <key>CFBundleTypeRole</key>
        <string>Editor</string>
        <key>CFBundleURLName</key>
        <string>scheme</string>
        <key>CFBundleURLSchemes</key>
        <array>
          <string>myappuniappx</string>
        </array>
      </dict>
    </array>
  </dict>
</plist>
```

>uni-app/uni-app x项目都支持通过此方式配置url scheme，uni-app项目还可通过manifest.json的可视化界面配置，参考[iOS设置url scheme](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-ios.html#urlscheme)

**注意**  
- `CFBundleURLSchemes`字段下的字符串数组项是需要注册的scheme值，上面示例配置了`myappuniappx`，请根据应用实际需求修改，array可添加多个string项配置多个scheme值。为了避免与其他应用产生冲突，请配置自己应用特有的字符串来避免冲突。  
- `CFBundleURLName`字段下的字符串是这组url scheme的标识，建议按上面示例的默认值配置即可，如需修改请参考苹果官方文档。  
- `CFBundleTypeRole`字段下的字符串是固定值，不要修改。  

**相关参考**  
- iOS Property List Key ‘CFBundleURLTypes’，参考：[https://developer.apple.com/documentation/bundleresources/information_property_list/cfbundleurltypes/](https://developer.apple.com/documentation/bundleresources/information_property_list/cfbundleurltypes/)


### 应用可支持横竖屏列表配置@orientation  
应用默认可支持的横竖列表：  
- uni-app 项目由 manifest.json 中的 [screenOrientation](https://uniapp.dcloud.net.cn/collocation/manifest.html#app-plus) 字段配置决定  
- uni-app x 项目默认可支持横竖屏列表为横屏和竖屏，但运行期在 iPhone 设备默认为竖屏，在 iPad 设备根据系统设置自动感应适配横竖屏，HBuilderX4.25版本iPhone设备支持[screenOrientation](https://uniapp.dcloud.net.cn/collocation/manifest.html#app-plus) 字段配置  

如果希望自定义配置应用可支持的横竖屏列表，可根据需求在`Info.plist`文件中添加`UISupportedInterfaceOrientations`数据，如下示例：
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>UISupportedInterfaceOrientations~iphone</key>
    <array>
      <string>UIInterfaceOrientationPortrait</string>
      <string>UIInterfaceOrientationLandscapeLeft</string>
      <string>UIInterfaceOrientationLandscapeRight</string>
    </array>
    <key>UISupportedInterfaceOrientations~ipad</key>
    <array>
      <string>UIInterfaceOrientationPortrait</string>
      <string>UIInterfaceOrientationPortraitUpsideDown</string>
      <string>UIInterfaceOrientationLandscapeLeft</string>
      <string>UIInterfaceOrientationLandscapeRight</string>
    </array>
  </dict>
</plist>
```

> uni-app 项目同时也支持在 manifest.json 中配置  [screenOrientation](https://uniapp.dcloud.net.cn/collocation/manifest.html#app-plus)，云端打包会与 Info.plist 中配置的值合并  
> uni-app x 项目仅支持 Info.plist 中配置，需 HBuilderX4.22+ 版本，提交云端打包后才能生效  

**注意**  
- `UISupportedInterfaceOrientations~iphone` 字段下配置的是 iPhone 设备可支持的横竖屏  
- `UISupportedInterfaceOrientations~ipad` 字段下配置的是 iPad 设备可支持的横竖屏  
- 字段值为字符串数组，其中字符串可取值：  
	* `UIInterfaceOrientationPortrait` 竖屏主方向  
  * `UIInterfaceOrientationPortraitUpsideDown` 竖屏反方向，仅 iPad 设备支持  
  * `UIInterfaceOrientationLandscapeLeft` 横屏主方向  
  * `UIInterfaceOrientationLandscapeRight` 横屏反方向  
- iPhone 和 iPad 设备可分别单独设置，可支持的横竖屏列表会限制应用能支持的横竖屏状态，如设置应用支持的横竖屏列表值为竖屏（UIInterfaceOrientationPortrait），则应用在任何状态下都无法横屏。 

##  应用资源  

HBuilderX中对项目右键菜单 "新建" -> "目录"  
![](https://native-res.dcloud.net.cn/images/uniapp/nativeresource/newdir.png)

输入名称 `nativeResources`（注意大小写敏感），确定并创建目录。

继续创建“ios”子目录，结构如下：  
![](https://native-res.dcloud.net.cn/images/uniapp/nativeresource/ios/ios.png)

- `Resources`，用于保存Bundle资源的目录  
- `UniApp.entitlements`，用于配置工程`Capabilities`的文件  


### 配置文件UniApp.entitlements@entitlements  

在 XCode 中可以通过项目可视化界面编辑应用的`Capabilities`，实际上是操作项目的 entitlements 和 Info.plist 文件保存数据。在 HBuilderX 中暂未提供`Capabilities`可视化界面操作，需手动编辑`UniApp.entitlements`和`Info.plist`文件来实现相关配置。

在 nativeResources/ios 目录下创建`UniApp.entitlements`文件，用于配置 XCode 原生工程的`Capabilities`，如下示例：

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
  </dict>
</plist>
```

uni-app/uni-app x 项目可以通过编辑`UniApp.entitlements`文件配置`Capabilities`，需确保此entitlements文件格式正确，可以在 XCode 中编辑验证此文件。  

**注意**
- plist文件必须符合标准的xml格式  
- plist文件必须符合Apple Information Property List规范，参考[详情](https://developer.apple.com/documentation/bundleresources/information_property_list)  
	* 文件头需加`<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">`
	* 根节点必须是plist，二级节点必须是dict   
- `UniApp.entitlements`的内容只能用于配置 `Capabilities`，不能添加自定义数据   

**相关参考** 
- Adding capabilities to your app，参考：[https://developer.apple.com/documentation/xcode/adding-capabilities-to-your-app](https://developer.apple.com/documentation/xcode/adding-capabilities-to-your-app)

#### 配置`Associated Domains`@domains  
在`UniApp.entitlements`添加`com.apple.developer.associated-domains`节点数据开启`Associated Domains`能力
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>com.apple.developer.associated-domains</key>
	<array>
		<string>applinks:demo.dcloud.net.cn</string>
	</array>
</dict>
</plist>
```

**注意**  
- `com.apple.developer.associated-domains`字段值类型必须是字符串数组  
- 上面示例中`applinks:demo.dcloud.net.cn`配置的是通用链接域名，其中`applinks:`表示此域名用于通用链接，`demo.dcloud.net.cn`是域名，请修改为应用自己使用的域名
- `array`节点下可添加多个关联域名    
- iOS平台完整配置通用链接参考文档：[配置通用链接（Universal Link）](https://uniapp.dcloud.net.cn/tutorial/app-ios-capabilities.html#%E9%80%9A%E7%94%A8%E9%93%BE%E6%8E%A5-universal-link)

**相关参考**  
- Configuring an associated domain，参考：[https://developer.apple.com/documentation/xcode/configuring-an-associated-domain](https://developer.apple.com/documentation/xcode/configuring-an-associated-domain)  


### 配置文件PrivacyInfo.xcprivacy @privacyinfo

PrivacyInfo.xcprivacy用于配置应用隐私清单文件，详情参考[uni-app/uni-app x如何配置隐私清单](https://uniapp.dcloud.net.cn/tutorial/app-ios-privacyinfo.html#uni-app-uni-app-x%E5%A6%82%E4%BD%95%E9%85%8D%E7%BD%AE%E9%9A%90%E7%A7%81%E6%B8%85%E5%8D%95)。


### Bundle资源目录 （Bundle Resources）@bundle  

在“ios”目录下创建“Resources”子目录，结构如下：  
![](https://native-res.dcloud.net.cn/images/uniapp/nativeresource/ios/directory.png)

将需要添加的iOS原生资源文件拷贝到Resources目录，云端打包时将会合并到安装包的.app中。


**注意**
- ios目录下不支持放Object-C/Swift源码文件，需要开发源码建议使用[UTS插件](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)或[uni原生语言插件](https://nativesupport.dcloud.net.cn/NativePlugin/README)  
- resources目录中的资源文件不能通过uni API使用，需通过 iOS 原生 API 访问，参考[Accessing a Bundle's Contents](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBundles/Introduction/Introduction.html#//apple_ref/doc/uid/10000123i-CH1-SW1)。也就是在uni-app/uni-app x项目中这些资源需要通过uts代码访问，uni-app项目也可编写[uni原生语言插件](https://nativesupport.dcloud.net.cn/NativePlugin/README)访问  
- resources目录中已经保留使用以下文件，需注意避免冲突

<pre v-pre="" data-lang="">
	<code class="lang-" style="padding:0">
// uni-app/5+ App 项目  
┌─Pandora                       //uni-app资源目录
│  └─apps                       //应用资源目录
│    └─[AppID]                  //使用DCloud AppID作为目录名称
├─PandoraApi.bundle             //uni-app SDK内置资源目录
├─control.xml                   //uni-app模块配置文件
├─dcloud_logo@2x.png           //应用logo图片
├─dcloud_logo@3x.png           //应用logo图片
├─uni-jsframework.js           //uni-app vue2框架
├─uni-jsframework-vue3.js      //uni-app vue3框架
├─uni-jsframework-dev.js       //uni-app vue2框架（开发模式）
├─uni-jsframework-vue3-dev.js  //uni-app vue3框架（开发模式）
├─unincomponents.ttf           //uni-app内置字体图标
└─userPosition@2x.png          //地图模块当前位置图标

// uni-app x 项目
┌─uni-app-x                    //uni-app x 项目资源
├─DCUniVideo                   //video组件目录
├─uni_uts_toast_error.png      //uni.showToast 使用的图标
└─uni_uts_toast_success.png    //uni.showToast 使用的图标

	</code>
</pre>
- 应用资源目录配置需提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)

## 离线打包  
离线打包时应用清单文件和资源需要开发者手动合并到XCode原生工程中。


