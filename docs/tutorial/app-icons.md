HBuilderX中打开项目的manifest.json文件，在“App图标配置”中可以设置App的桌面图标，推荐使用“自动生成图标”功能：
![](https://native-res.dcloud.net.cn/images/uniapp/icons/auto.png)

如果不使用自动生成图标方式，可按下面文档分别配置Android和iOS平台的图标。
If you do not use the automatic icon generation method, you can configure the icons for Android and iOS platforms according to the following documents.

### Android平台
### Android Platform
**注意事项**  
**Precautions**  
- 必须使用png格式，其它格式需要使用图片工具转换，注意不要直接将jpg等其它格式图片直接改名为png
- The png format must be used. Other formats need to be converted using the picture tool. Be careful not to directly rename pictures in other formats such as jpg to png
- 系统没有对图标分辨率进行限制，按照建议的分辨率配置即可
- The system does not limit the icon resolution, you can configure it according to the recommended resolution
- 图片支持透明区域，建议使用圆角图标
- The image supports transparent areas, it is recommended to use rounded icons

> 提示：可能有些特殊手机ROM对图标有所要求，提交相应应用市场时注意看是否有要求
> Tip: Some special mobile phone ROMs may have requirements for icons, please pay attention to whether there are requirements when submitting the corresponding application market

#### 云端打包  
#### Cloud Packaging
**可视化界面配置**  
**Visual interface configuration**
推荐在可视化界面操作配置，在“Android图标配置”下根据分辨率选择对应的图标：
![](https://native-res.dcloud.net.cn/images/uniapp/icons/android.png)

**源码视图配置**  
**Source view configuration**
切换到源码视图界面，在 "app-plus"->"distribute"->"icons"->"android" 节点根据以下属性配置对应分辨率图标路径：
Switch to the source view interface, and configure the corresponding resolution icon path in the "app-plus"->"distribute"->"icons"->"android" node according to the following attributes:

|属性名称|类型|说明|
|property name|type|description|
|:-|:-|:-|
|xxxhdpi|String|2K屏设备程序图标，分辨率要求192x192|
|xxxhdpi|String|2K screen device program icon, resolution 192x192|
|xxhdpi|String|1080P高分屏设备程序图标，分辨率要求144x144|
|xxhdpi|String|1080P high resolution screen device program icon, the resolution requirement is 144x144|
|xhdpi|String|720P高分屏设备程序图标，分辨率要求96x96|
|xhdpi|String|720P high-resolution screen device program icon, the resolution requirement is 96x96|
|hdpi|String|高分屏设备程序图标，分辨率要求72x72|
|hdpi|String|High-resolution screen device program icon, resolution 72x72|
|mdpi|String|普通屏设备程序图标，分辨率要求48x48，这类设备很少见，可以不配置|
|mdpi|String|Program icon of common screen device, the resolution requires 48x48, such devices are rare and can not be configured|
|ldpi|String|大屏设备程序图标，分辨率要求48x48，这类设备很少见，可以不配置|
|ldpi|String|Large screen device program icon, the resolution requires 48x48, such devices are rare and can not be configured|

> 提示：5+ App项目源码视图节点为app->distribute->icons->android
> Tip: 5+ App project source code view node is app->distribute->icons->android

**默认图标**  
**Default Icon**
云端打包没有配置图标时将使用以下默认图标：  
![](https://native-res.dcloud.net.cn/images/uniapp/icons/def-android.png)


#### 离线打包
#### Offline packaging
离线打包需在原生工程中配置应用图标，参考[Android原生工程配置](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/android?id=icons)
Offline packaging needs to configure the application icon in the native project, refer to [Android native project configuration](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/android?id=icons)



### iOS平台
### iOS Platform
**注意事项**  
**Precautions**  
- 必须使用png格式，其它格式需要使用图片工具转换，注意不要直接将jpg等其它格式图片直接改名为png
- The png format must be used. Other formats need to be converted using the picture tool. Be careful not to directly rename pictures in other formats such as jpg to png
- 图标必须是直角，不要使用圆角图标，使用圆角AppStore审核不会通过
- Icons must be right-angled, do not use rounded corners, the AppStore review will not pass if you use rounded corners
- 打包提交appstore时，必须配置1024*1024分辨率的AppStore图标，云端打包机默认使用纯白色图标
- When packaging and submitting the appstore, you must configure the AppStore icon with a resolution of 1024*1024. The cloud packager uses a pure white icon by default.
- 所有图标不要包含透明信息（alpha通道），否则提交AppStore会报以下错误[ITMS-90717](#itms90717)错误
- All icons do not contain transparent information (alpha channel), otherwise submitting to AppStore will report the following error [ITMS-90717](#itms90717) error

更多应用图标相关信息，参考苹果官方说明：[https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/app-icon/](https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/app-icon/)
For more information about app icons, refer to Apple's official instructions: [https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/app-icon/](https://developer .apple.com/design/human-interface-guidelines/ios/icons-and-images/app-icon/)

#### 云端打包  
#### Cloud Packaging
**可视化界面配置**  
**Visual interface configuration**
推荐在可视化界面操作配置，分别在“app store”、“iPhone图标配置”、“iPad图标配置”下根据分辨率选择对应的图标：
![](https://native-res.dcloud.net.cn/images/uniapp/icons/ios.png)

- app store  
应用需要提交到AppStore上架审核是必须配置
The application needs to be submitted to the AppStore for review, which is a must-configure
- iPhone图标配置  
- iPhone icon configuration
打包时勾选“支持iPhone”时必须配置
It must be configured when "Support iPhone" is checked when packaging
- iPad图标配置  
- iPad icon configuration
打包时勾选“支持iPad”是必须配置
Checking "support iPad" when packaging is a must

**源码视图配置**  
**Source view configuration**
切换到源码视图界面，在 "app-plus"->"distribute"->"icons"->"ios" 节点根据以下属性配置对应分辨率图标路径：
Switch to the source code view interface, and configure the corresponding resolution icon path in the "app-plus"->"distribute"->"icons"->"ios" node according to the following properties:

|属性名称|类型|说明|
|property name|type|description|
|:-|:-|:-|
|iphone|对象，参考[iPhone图标源码参数](#iphone)|iPhone设备程序图标
|iphone|Object, refer to [iPhone icon source code parameters](#iphone)|iPhone device program icon
|ipad|对象，参考[iPad图标源码参数](#ipad)|iPad设备程序图标|
|ipad|Object, refer to [iPad icon source code parameters](#ipad)|iPad device program icon|
|appstore|String|App Store图标路径，分辨率要求1024x1024|
|appstore|String|App Store icon path, resolution 1024x1024|

<a id="iphone"/>
iPhone图标源码参数
iPhone icon source code parameters

|属性名称|类型|说明|
|property name|type|description|
|:-|:-|:-|
|app@2x|String|iOS7+设备程序主图标，分辨率要求120x120|
|app@2x|String|The main icon of the iOS7+ device program, the resolution requirement is 120x120|
|app@3x|String|iOS7+设备程序主图标，分辨率要求180x180|
|app@3x|String|The main icon of the iOS7+ device program, the resolution requirement is 180x180|
|spotlight@2x|String|iOS7+设备Spotlight搜索图标，分辨率要求80x80|
|spotlight@2x|String|Spotlight search icon for iOS7+ devices, resolution 80x80|
|spotlight@3x|String|iOS7+设备Spotlight搜索图标，分辨率要求120x120|
|spotlight@3x|String|Spotlight search icon for iOS7+ devices, resolution 120x120|
|settings@2x|String|iOS7+设备Settings设置图标，分辨率要求58x58|
|settings@2x|String|iOS7+ device Settings icon, resolution 58x58|
|settings@3x|String|iOS7+设备Settings设置图标，分辨率要求87x87|
|settings@3x|String|iOS7+ device Settings icon, resolution 87x87|
|notification@2x|String|iOS7+设备通知栏图标，分辨率要求40x40|
|notification@2x|String|iOS7+ device notification bar icon, resolution 40x40|
|notification@3x|String|iOS7+设备通知栏图标，分辨率要求60x60|
|notification@3x|String|iOS7+ device notification bar icon, resolution 60x60|
                    
<a id="ipad"/>
iPad图标源码参数
iPad icon source code parameters

|属性名称|类型|说明|
|property name|type|description|
|:-|:-|:-|
|app|String|iOS7+设备程序主图标，分辨率要求76x76|
|app|String|The main icon of the iOS7+ device program, the resolution requirement is 76x76|
|app@2x|String|iOS7+高分屏设备程序主图标，分辨率要求152x152|
|app@2x|String|The main icon of the iOS7+ high-resolution screen device program, the resolution requirement is 152x152|
|proapp@2x|String|iOS9+ iPad Pro(12.9英寸)设备程序主图标，分辨率要求167x167|
|proapp@2x|String|iOS9+ iPad Pro (12.9 inches) device program main icon, the resolution requirement is 167x167|
|spotlight|String|iOS7+设备Spotlight搜索图标，分辨率要求40x40|
|spotlight|String|iOS7+ device Spotlight search icon, the resolution requires 40x40|
|spotlight@2x|String|iOS7+高分屏设备Spotlight搜索图标，分辨率要求80x80|
|spotlight@2x|String|iOS7+ high-resolution screen device Spotlight search icon, the resolution requirement is 80x80|
|settings|String|iOS5+设备Settings设置图标，分辨率要求29x29|
|settings|String|iOS5+ device Settings icon, resolution 29x29|
|settings@2x|String|iOS5+高分屏设备Settings设置图标，分辨率要求58x58|
|settings@2x|String|iOS5+ high-resolution screen device Settings icon, the resolution requires 58x58|
|notification|String|iOS7+设备通知栏图标，分辨率要求20x20|
|notification|String|iOS7+ device notification bar icon, resolution 20x20|
|notification@2x|String|iOS7+高分屏设备通知栏图标，分辨率要求40x40|
|notification@2x|String|iOS7+ high-resolution screen device notification bar icon, the resolution requires 40x40|


#### 离线打包
#### Offline packaging
离线打包需在原生工程中配置应用图标，参考[iOS原生工程配置](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/ios?id=%e9%85%8d%e7%bd%ae%e5%ba%94%e7%94%a8%e7%9a%84%e5%9b%be%e6%a0%87)
Offline packaging needs to configure the application icon in the native project, refer to [iOS native project configuration](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/ios?id=%e9%85%8d%e7%bd% ae%e5%ba%94%e7%94%a8%e7%9a%84%e5%9b%be%e6%a0%87)



### 常见问题
### common problem
#### iOS平台配置/更新图标后打包安装，图标显示不正确  
#### After the iOS platform is configured/updated the icon is packaged and installed, the icon is displayed incorrectly
**解决方案**  
**solution**  
iOS系统会缓存应用图标，需要重启手机新图标才能生效
The iOS system will cache the app icon, and you need to restart the phone for the new icon to take effect

<a id="itms90717"/>

#### 提交AppStore审核是报ITMS-90717错误
#### Submitting AppStore review is reporting ITMS-90717 error
这是因为图片中包含透明信息，即alpha通道，完整错误提示如下：
This is because the image contains transparent information, that is, the alpha channel. The complete error message is as follows:
```javascript
ERROR ITMS-90717: "Invalid App Store Icon. The App Store Icon in the asset catalog in 'HBuilder.app' can't be transparent nor contain an alpha channel."
```
**解决方案**  
**solution**  
生成png图标文件时去掉alpha通道，重新提交云端打包
Remove the alpha channel when generating the png icon file, and resubmit the cloud package

