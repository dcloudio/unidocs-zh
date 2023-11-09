# manifest.json 应用配置

`manifest.json` 文件是应用的配置文件，用于指定应用的名称、图标、权限等。HBuilderX 创建的工程此文件在根目录，CLI 创建的工程此文件在 src 目录。
The `manifest.json` file is the configuration file of the application, which is used to specify the name, icon, permissions, etc. of the application. The project created by HBuilderX has this file in the root directory, and the project created by CLI has this file in the src directory.

### 配置项列表
### List of configuration items

|属性|类型|默认值|描述|最低版本|
|Attribute|Type|Default|Description|Minimum Version|
|:-|:-|:-|:-|:-|
|name|String||应用名称||
| name| String||application name||
|appid|String|新建 uni-app 项目时，DCloud 云端分配。用途[详见](https://ask.dcloud.net.cn/article/35907)|应用标识||
| appid| String| When creating a new uni-app project, the DCloud cloud distribution. Purpose [see details](https://ask.dcloud.net.cn/article/35907)|Application logo||
|description|String||应用描述||
| description| String||application description||
|locale|String|auto|设置当前默认语言，具体参考 [locale](/api/ui/locale)||
| locale| String| auto|Set current default language, refer to [locale](/api/ui/locale)||
|versionName|String||版本名称，例如：1.0.0。详见下方Tips说明||
| versionName| String||version name, for example: 1.0.0. See the Tips description below for details||
|versionCode|Number||版本号，例如：36||
|transformPx|Boolean|true|~~是否转换项目的px，为true时将px转换为rpx，为false时，px为传统的实际像素。为兼容历史项目默认值为 true。~~ 此选项已废弃，仅部分平台支持，不推荐新项目启用此配置（新建项目模板一般配置为 false）||
|networkTimeout|Object||网络超时时间，[详见](/collocation/manifest?id=networktimeout)||
| networkTimeout| Object||Network timeout, [see details](/collocation/manifest?id=networktimeout)||
|debug|Boolean|false|是否开启 debug 模式，开启后调试信息以 ``info`` 的形式给出，其信息有页面的注册，页面路由，数据更新，事件触发等||
| debug| Boolean| false|Whether to enable the debug mode, the debugging information will be given in the form of ``info`` after it is enabled, and its information includes page registration, page routing, data update, event triggering, etc. ||
|uniStatistics|Object||[是否开启 uni 统计，全局配置](/collocation/manifest?id=uniStatistics)|2.2.3+|
| uniStatistics| Object||[Whether to enable uni statistics, global configuration](/collocation/manifest?id=uniStatistics)| 2.2.3+|
|app-plus|Object||[App 特有配置](/collocation/manifest?id=app-plus)||
| app-plus| Object||[App specific configuration](/collocation/manifest?id=app-plus)||
|h5|Object||[H5 特有配置](/collocation/manifest?id=h5)||
| h5| Object||[H5 specific configuration](/collocation/manifest?id=h5)||
|quickapp|Object||快应用特有配置，即将支持||
| quickapp| Object|| QuickApp specific configuration, will be supported soon||
|mp-weixin|Object||[微信小程序特有配置](/collocation/manifest?id=mp-weixin)||
| mp-weixin| Object||[WeChat MiniApp specific configuration](/collocation/manifest?id=mp-weixin)||
|mp-alipay|Object||[支付宝小程序特有配置](/collocation/manifest?id=mp-alipay)|
| mp-alipay| Object||[Alipay MiniApp specific configuration](/collocation/manifest?id=mp-alipay)|
|mp-baidu|Object||[百度小程序特有配置](/collocation/manifest?id=mp-baidu)||
|mp-toutiao|Object||[抖音小程序特有配置](/collocation/manifest?id=mp-toutiao)|1.6.0|
|mp-lark|Object||[飞书小程序特有配置](/collocation/manifest?id=mp-lark)|3.2.12|
| mp-lark| Object||[Special configuration of Feishu MiniApp](/collocation/manifest?id=mp-lark)| 3.2.12|
|mp-qq|Object||[qq 小程序特有配置](/collocation/manifest?id=mp-qq)|2.1.0|
| mp-qq| Object||[qq MiniApp specific configuration](/collocation/manifest?id=mp-qq)| 2.1.0|
|mp-kuaishou|Object||[快手小程序特有配置](/collocation/manifest.html#mp-kuaishou)|3.2.2|
| mp-kuaishou| Object||[Special configuration of Kuaishou MiniApp](/collocation/manifest.html#mp-kuaishou)| 3.2.2|

**Tips**

- uni-app 的 `appid` 由 DCloud 云端分配，主要用于 DCloud 相关的云服务，请勿自行修改。[详见](https://ask.dcloud.net.cn/article/35907)
- The `appid` of uni-app is assigned by DCloud and is mainly used for DCloud-related cloud services. Please do not modify it yourself. [See details](https://ask.dcloud.net.cn/article/35907)
- 注意区分 uni-app 的 `appid` 与微信小程序、iOS 等其它平台分配的 `appid`，以及第三方 SDK 的 `appid`。
- Pay attention to distinguish the `appid` of uni-app from the `appid` assigned by WeChat MiniApp, iOS and other platforms, and the `appid` of third-party SDKs.
- versionName在云打包App和生成wgt应用资源时会使用。如需升级App版本，先修改此处再云打包。导出wgt资源用于离线打包和热更新时也会以此版本为依据。
- versionName will be used when cloud packaging App and generating wgt application resources. If you need to upgrade the App version, first modify here and then cloud package. This version will also be used as the basis for exporting wgt resources for offline packaging and hot updates.
- 在本地打包时和热更新时，App版本和wgt应用资源版本将不再保持一致。此时通过[plus.runtime.version](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.version)可获取App版本，通过[plus.runtime.getProperty](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.getProperty)获取wgt资源版本。
- When packaging locally and hot updating, the App version and the wgt application resource version will no longer be consistent. At this time, the App version can be obtained through [plus.runtime.version](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.version), and through [plus.runtime.getProperty](https ://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.getProperty) to get the wgt resource version.

#### networkTimeout

各类网络请求的超时时间，单位均为毫秒。
The timeout period of various network requests, in milliseconds.

|属性|类型|必填|默认值|说明|
|Attribute|Type|Required|Default|Description|
|--|--|--|--|--|
|request|Number|否|60000|uni.request 的超时时间，单位毫秒。|
| request| Number|No| 60000| The timeout of uni.request, in milliseconds. |
|connectSocket|Number|否|60000|uni.connectSocket 的超时时间，单位毫秒。|
| connectSocket| Number|No| 60000| The timeout of uni.connectSocket, in milliseconds. |
|uploadFile|Number|否|60000|uni.uploadFile 的超时时间，单位毫秒。|
| uploadFile| Number|No| 60000| The timeout time of uni.uploadFile, in milliseconds. |
|downloadFile|Number|否|60000|uni.downloadFile 的超时时间，单位毫秒。|
| downloadFile| Number|No| 60000| The timeout time of uni.downloadFile, in milliseconds. |

自`HBuilderX 2.5.10`起，上述默认超时时间由6秒改为60秒，对齐微信小程序平台。
Since `HBuilderX 2.5.10`, the above default timeout time has been changed from 6 seconds to 60 seconds to align with the WeChat MiniApp platform.


#### uniStatistics
uni 统计配置项
uni statistics configuration items

|属性|类型|必填|默认值|说明|
|Attribute|Type|Required|Default|Description|
|--|--|--|--|--|
|enable|Boolean|是|true|是否开启uni统计|
| enable| Boolean|yes|true|whether to enable uni statistics|

### app-plus

|属性|类型|说明|最低版本|
|Properties|Type|Description|Minimum Version|
|:-|:-|:-|:-|
|splashscreen|Object|App 启动界面信息，[详见](/collocation/manifest?id=splashscreen)||
| splashscreen| Object| App startup interface information, [see details](/collocation/manifest?id=splashscreen)||
|screenOrientation|Array|重力感应、横竖屏配置，可取值："portrait-primary"：竖屏正方向；"portrait-secondary"：竖屏反方向；"landscape-primary"：横屏正方向；"landscape-secondary"：横屏反方向。||
| screenOrientation| Array|Gravity sensing, horizontal and vertical screen configuration, possible values: "portrait-primary": positive direction of vertical screen; "portrait-secondary": reverse direction of vertical screen; "landscape-primary": positive direction of horizontal screen;" landscape-secondary": The opposite direction of landscape screen. ||
|modules|Object|权限模块，[详见](/collocation/manifest?id=modules)||
| modules| Object| permission module, [see details](/collocation/manifest?id=modules)||
|distribute|Object|App 发布信息，[详见](/collocation/manifest?id=distribute)||
| distribute| Object| App distribution information, [see details](/collocation/manifest?id=distribute)||
|nvueCompiler|String|切换 nvue 编译模式，可选值，`weex` ：老编译模式，`uni-app`： 新编译模式，默认为 `weex` 。[编译模式区别详情](http://ask.dcloud.net.cn/article/36074)|2.0.3+|
| nvueCompiler| String|Switch nvue compilation mode, optional value, `weex`: old compilation mode, `uni-app`: new compilation mode, the default is `weex`. [Compilation mode difference details](http://ask.dcloud.net.cn/article/36074)| 2.0.3+|
|nvueStyleCompiler|String|切换 nvue 样式编译模式，可选值，`weex` ：老编译模式，`uni-app`： 新编译模式，默认为 `weex` 。[编译模式区别详情](https://ask.dcloud.net.cn/article/38751)|3.1.1+|
| nvueStyleCompiler| String|Switch nvue style compilation mode, optional value, `weex`: old compilation mode, `uni-app`: new compilation mode, default is `weex`. [Compilation mode difference details](https://ask.dcloud.net.cn/article/38751)| 3.1.1+|
|renderer|String|可不加载基于 webview 的运行框架，减少包体积、提升启动速度。可选值 `native`| App-nvue 2.2.0+|
| renderer| String| You can not load the webview-based runtime framework, reducing the package size and improving the startup speed. Optional value `native`| App-nvue 2.2.0+|
|nvueLaunchMode|String|Nvue 首页启动模式，可选值：normal、fast 默认 normal（HBuilderX 2.4.4-2.4.9 固定为 fast） [详见](https://ask.dcloud.net.cn/article/36749)|2.5.0+|
| nvueLaunchMode| String| Nvue home page launch mode, optional values: normal, fast, default normal (HBuilderX 2.4.4-2.4.9 is fixed to fast) [see details](https://ask.dcloud.net.cn/article /36749)| 2.5.0+|
|nvue|Object|nvue 页面布局初始配置，[详见](/collocation/manifest?id=nvue)|2.0.3+|
| nvue| Object| Initial configuration of nvue page layout, [see details](/collocation/manifest?id=nvue)| 2.0.3+|
|optimization|Object|分包配置，可以减轻启动时加载的js数量，提升启动速度|2.7.12+|
| optimization| Object| Subpackage configuration, which can reduce the number of js loaded at startup and improve startup speed| 2.7.12+|
|runmode|String|normal：默认模式，liberate：资源释放模式||
| runmode| String| normal: default mode, liberate: resource release mode||
|uniStatistics|Object|[App 是否开启 uni 统计，配置方法同全局配置](/collocation/manifest?id=uniStatistics)|2.2.3+|
| uniStatistics| Object|[Whether the App enables uni statistics, the configuration method is the same as the global configuration](/collocation/manifest?id=uniStatistics)| 2.2.3+|
|webView|Object|当系统webview低于指定版本时，会弹出提示。或者下载x5内核后继续启动，仅Android支持，[详情](/collocation/manifest?id=appwebview)|3.5.0+|
| webView| Object|When the system webview is lower than the specified version, a prompt will pop up. Or continue to start after downloading the x5 kernel, only supported by Android, [Details](/collocation/manifest?id=appwebview)| 3.5.0+|


PS：上表只列出了核心部分，App平台的配置其实非常多，完整内容请参考 [完整的 manifest.json](/collocation/manifest-app?id=full-manifest)。
PS: The above table only lists the core parts. There are actually many configurations of the App platform. For the complete content, please refer to [Complete manifest.json](/collocation/manifest-app?id=full-manifest).

**Tips**

- manifest.json 文件的配置，推荐在 HBuilderX 提供的可视化操作界面完成。
- The configuration of the manifest.json file is recommended to be completed in the visual operation interface provided by HBuilderX.
- 部分配置在打包时的操作界面补全，例如：证书等信息。
- Some configurations are completed in the operation interface when packaging, such as certificates and other information.
- Native.js 权限部分会根据配置的模块权限，在打包后自动填充。
- The Native.js permissions section will be automatically populated after packaging according to the configured module permissions.
- 部分 modules 是默认的，不需要进行配置。
- Some modules are default and do not need to be configured.
- 微信小程序的 `appid` 等信息，需要配置在 `mp-weixin` 节点下。不要配置在 `app-plus`下。`sdkConfigs` 下出现的 `weixin` 节点，配置的是 App 的第三方 SDK 信息。
- Information such as `appid` of the WeChat MiniApp needs to be configured under the `mp-weixin` node. Do not configure it under `app-plus`. The `weixin` node under `sdkConfigs` configures the third-party SDK information of the App.


#### App Splashscreen@splashscreen

splash（启动封面）是App必然存在的、不可取消的。
Splash (startup cover) is an inevitable existence of App and cannot be cancelled.
|属性|类型|默认值|描述|最低版本|
|Attribute|Type|Default|Description|Minimum Version|
|:-|:-|:-|:-|:-|
|alwaysShowBeforeRender|Boolean|true|是否等待首页渲染完毕后再关闭启动界面|1.6.0|
| alwaysShowBeforeRender| Boolean| true|Whether to wait for the homepage to be rendered before closing the startup interface| 1.6.0|
|autoclose|Boolean|true|是否自动关闭启动界面，仅当alwaysShowBeforeRender设置为false时生效，如果需要[手动关闭](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.closeSplashscreen)启动界面，需将 alwaysShowBeforeRender 及 autoclose 均设置为 false。||
| autoclose| Boolean| true|Whether to automatically close the startup interface, it only takes effect when alwaysShowBeforeRender is set to false, if you need to [manually close](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator .closeSplashscreen) to start the interface, you need to set alwaysShowBeforeRender and autoclose to false. ||
|waiting|Boolean|true|是否在程序启动界面显示等待圈或雪花||
| waiting| Boolean| true|Whether to display the waiting circle or snowflake on the program startup interface||

alwaysShowBeforeRender和autoclose属性组合设置，可配置以下三种关闭启动界面（splash）策略，[详见](tutorial/app-splashscreen)
The combination of alwaysShowBeforeRender and autoclose attributes can configure the following three strategies for closing the splash screen, [see](tutorial/app-splashscreen)

**注意**
**Notice**
- 如果不配置自己的splash图，App端会默认把App的icon放到splash中
- If you do not configure your own splash image, the app will put the icon of the app in the splash by default
- splash只能是标准png，不要用jpg改名为png。也不支持gif等动画
- Splash can only be a standard png, do not use jpg to rename it to png. Animations such as gif are also not supported
- 相关改动，云打包生效，真机运行不生效。本地打包需自行在原生工程中配置
- Relevant changes, cloud packaging takes effect, but real machine operation does not take effect. Local packaging needs to be configured in the native project by itself
- App启动图中iOS的MAX等大屏设备的splash图若不配，会导致iOS认为此App没有为MAX优化，App将无法全屏，四周会有黑边
- If the splash image of iOS MAX and other large-screen devices in the app startup image does not match, iOS will think that the app is not optimized for MAX, and the app will not be able to be full-screen, and there will be black borders around it
- Android的splash支持.9.png，[详见](tutorial/app-splashscreen?id=9png)
- Android's splash support.9.png, [see](tutorial/app-splashscreen?id=9png)


#### App Modules@modules
模块选择是为了控制App的包体积，不需要的模块可以在打包时剔除。
Module selection is to control the package size of the App, and unnecessary modules can be removed during packaging.

|名称|描述|
|Name|Description|
|:-|:-|
|Bluetooth|BLE蓝牙|
| Bluetooth| BLE Bluetooth|
|Contacts|系统通讯录|
| Contacts|System Address Book|
|Fingerprint|指纹识别|
|iBeacon|iBeacon|
|LivePusher|直播推流|
| LivePusher|Live push stream|
|Maps|地图|
| Maps|Maps|
|Messaging|短彩邮件消息|
| Messaging|Short color email message|
|OAuth|登录授权|
| OAuth|Login Authorization|
|Payment|支付|
| Payment|Payment|
|Push|消息推送|
| Push|Message Push|
|Share|社交分享|
| Share|Social Sharing|
|Speech|语音识别|
| Speech|Speech Recognition|
|SQLite|SQLite数据库|
| SQLite| SQLite Database|
|Statistic|统计|
| Statistic|Statistics|
|VideoPlayer|视频播放|
| VideoPlayer|Video Player|

**注意**
**Notice**
- 仅App云打包生效。本地打包需自行在原生工程中配置。
- Only App cloud packaging takes effect. Local packaging needs to be configured in the native project by itself.

#### App Distribute@distribute

|属性|类型|描述|
|Attribute|Type|Description|
|:-|:-|:-|
|android|Object|Android 应用配置，详见: [Android配置明细](/collocation/manifest-app?id=android)|
| android| Object| Android application configuration, see: [Android configuration details](/collocation/manifest-app?id=android)|
|ios|Object|iOS 应用配置，详见: [iOS配置明细](/collocation/manifest-app?id=ios)|
| ios| Object| iOS application configuration, see: [iOS configuration details](/collocation/manifest-app?id=ios)|
|sdkConfigs|Object|SDK配置，仅打包生效 [详见](/collocation/manifest?id=sdkConfigs)|
| sdkConfigs| Object| SDK configuration, only packaged to take effect [see details](/collocation/manifest?id=sdkConfigs)|
|orientation|Array|同 screenOrientation 配置，仅打包生效，已废弃，推荐使用 screenOrientation|
|orientation| Array|Same as screenOrientation configuration, only packaged and effective, deprecated, recommended to use screenOrientation|

#### App SdkConfigs@sdkConfigs

三方原生SDK配置。三方SDK的使用需要向这些SDK提供商申请，并配置参数到此处。可在HBuilderX可视化界面（App SDK配置）输入配置，此配置仅**云打包后生效**，本地打包需自行在原生工程中配置。
Three-party native SDK configuration. The use of the third-party SDK needs to apply to these SDK providers, and configure parameters here. The configuration can be entered in the HBuilderX visual interface (App SDK configuration), this configuration only takes effect after **cloud packaging**, local packaging needs to be configured in the native project by itself.

|属性|类型|描述|
|Attribute|Type|Description|
|:-|:-|:-|
|oauth|Object|授权登录，配置后可调用 [uni.login](/api/plugins/login?id=login) 进行登录操作，目前支持的授权登录平台有：[QQ](http://open.qq.com/)、[微信](https://open.weixin.qq.com/)、[新浪微博](http://open.weibo.com/)。|
| oauth| Object| Authorized login, after configuration, you can call [uni.login](/api/plugins/login?id=login) to log in. Currently supported authorized login platforms are: [QQ](http://open .qq.com/), [WeChat](https://open.weixin.qq.com/), [Sina Weibo] (http://open.weibo.com/). |
|share|Object|分享，配置后可调用 [uni.share](/api/plugins/share?id=share) 进行分享，目前支持QQ、微信、新浪微博等分享， 具体配置 [详见](/api/plugins/share?id=app-端各平台分享配置说明)。|
| share| Object|Share, after configuration, you can call [uni.share](/api/plugins/share?id=share) to share, currently supports QQ, WeChat, Sina Weibo and other sharing, specific configuration [see]( /api/plugins/share?id=App-side sharing configuration instructions for each platform). |
|push|Object|push配置，使用方式 [详见](/unipush)，目前支持：[uniPush](http://ask.dcloud.net.cn/article/35716)、[个推](http://www.igetui.com/)，注意App仅支持一种 push 方式，配置多个 push 无效，建议使用 uniPush，支持多厂商推送。|
| push| Object| push configuration, usage method [see](/unipush), currently supports: [uniPush](http://ask.dcloud.net.cn/article/35716), [unipush](http: //www.igetui.com/), note that the app only supports one push method, and multiple push configurations are invalid. It is recommended to use uniPush, which supports multi-vendor push. |
|payment|Object|三方支付配置，配置后可调用 [uni.payment](/api/plugins/payment?id=payment) 进行支付，目前支持微信支付、支付宝支付、苹果内购， 具体配置 [详见](/api/plugins/payment?id=uni-app-app-平台支付流程)。|
| payment| Object|Three-party payment configuration, after configuration, you can call [uni.payment](/api/plugins/payment?id=payment) to make payment, currently supports WeChat payment, Alipay payment, Apple in-app purchase, specific configuration [see ](/api/plugins/payment?id=uni-app-app-platform payment process). |
|statics|Object|统计配置，目前仅支付友盟统计，[详见](/tutorial/app-statistic)，在uni-app中只用 [plus.statistic](http://www.html5plus.org/doc/zh_cn/statistic.html) 进行调用。|
| statics| Object|Statistics configuration, currently only pay for Youmeng statistics, [see details](/tutorial/app-statistic), in uni-app only use [plus.statistic](http://www.html5plus.org /doc/zh_cn/statistic.html) to call. |
|speech|Object|语音识别配置，支持讯飞语音、百度语音，[详见](/tutorial/app-speech)，在uni-app中只用 [plus.speech](http://www.html5plus.org/doc/zh_cn/speech.html) 进行调用。|
| speech| Object|Speech recognition configuration, support Xunfei voice, Baidu voice, [see](/tutorial/app-speech) for details, only use [plus.speech](http://www.html5plus in uni-app .org/doc/zh_cn/speech.html) to call. |
|maps|Object|原生地图配置，目前仅支持 [高德地图](http://lbs.amap.com/)，申请方式可参考：[地图插件配置](/tutorial/app-maps)。|
| maps| Object|Native map configuration, currently only supports [Automap](http://lbs.amap.com/), the application method can refer to: [Map plugin configuration](/tutorial/app-maps). |

#### optimization@app-vue-optimization

可以减轻启动时加载的js数量，提升启动速度。
It can reduce the number of js loaded at startup and improve startup speed.

从uni-app 2.7.12+ 开始，App-vue平台也兼容了小程序的分包配置，但默认并不开启。
Starting from uni-app 2.7.12+, the App-vue platform is also compatible with the subpackage configuration of MiniApp, but it is not enabled by default.

在manifest配置以下节点，可以在App端启动分包。
Configure the following nodes in the manifest to start subcontracting on the App side.

|属性|类型|说明|
|Attribute|Type|Description|
|:-|:-|:-|
|subPackages|Boolean|是否开启分包优化，目前仅 uni-app vue2 下生效|

```
"app-plus": {
  "optimization": {
    "subPackages": true
  },
  "runmode" : "liberate" // 开启分包优化后，必须配置资源释放模式
}
```

在manifest中启动分包后，需要在pages.json中配置具体的分包规则，与小程序的配置相同，详见：[https://uniapp.dcloud.io/collocation/pages?id=subpackages](https://uniapp.dcloud.io/collocation/pages?id=subpackages)
After starting the subpackage in the manifest, you need to configure specific subpackage rules in pages.json, which is the same as the configuration of the MiniApp. For details, see: [https://uniapp.dcloud.io/collocation/pages?id=subpackages](https://uniapp.dcloud.io/collocation/pages?id=subpackages)

也就是一旦在pages.json里配置分包，小程序一定生效，而app是否生效，取决于manifest里是否开启。
That is, once subcontracting is configured in pages.json, the MiniApp must take effect, and whether the app takes effect depends on whether it is enabled in the manifest.

注意:
Notice:
* App开启分包后，每个分包单独编译成一个js文件(都包含在app内，不会联网下载)，当App首页是vue时，可减小启动加载文件大小，提升启动速度。
* After the App opens subpackages, each subpackage is compiled into a separate js file (all included in the app and will not be downloaded online). When the App home page is vue, the size of the startup loading file can be reduced and the startup speed can be improved.
* 首页是nvue时，分包不会提升启动速度，nvue本身启动速度就快于vue，也快于开启分包后的首页为vue的应用。如果追求极致启动速度，还是应该使用nvue做首页并在manifest开启fast模式。
* When the homepage is nvue, subpackaging will not increase the startup speed. The startup speed of nvue itself is faster than that of vue, and it is also faster than the application whose homepage is vue after subpackaging is enabled. If you pursue the ultimate startup speed, you should still use nvue as the home page and enable fast mode in the manifest.
* App页面较少时，分包对启动速度的优化不明显。
* When the number of App pages is small, the optimization of the startup speed by subpackaging is not obvious.


#### nvue@nvue
`nvue` 页面布局初始设置
`nvue` page layout initial setup

|属性|类型|描述|
|Attribute|Type|Description|
|:-|:-|:-|
|flex-direction|String| flex 成员项的排列方向，支持项，row：从左到右； row-reverse：从右到左；column：从上到下；column-reverse：与 column 相反，默认值 column。|
| flex-direction| String| Arrangement direction of flex member items, supporting items, row: from left to right; row-reverse: from right to left; column: from top to bottom; column-reverse: opposite to column, default value column. |


#### webview@appwebview

> uni-app 3.5.0+

当App代码使用了低版本webview不支持的语法时（比如使用了vue3），可以在manifest配置本属性，来指定最低运行的webview版本。
When the App code uses a grammar that is not supported by a lower version of webview (such as using vue3), you can configure this property in the manifest to specify the minimum running webview version.

当系统webview版本不符合需求时，uni-app引擎会自动弹框。同时开发者可以指定使用 x5引擎webview 来替代系统webview，以保障浏览器兼容性。详见[x5文档](/tutorial/app-android-x5.html)
When the system webview version does not meet the requirements, the uni-app engine will automatically pop up the frame. At the same time, developers can specify to use the x5 engine webview to replace the system webview to ensure browser compatibility. See [x5 document](/tutorial/app-android-x5.html) for details

当你的应用强依赖x5时，比如需要vue页面的字体和tabbar等原生界面保持一致时，也可以在manifest配置本属性。
When your application strongly relies on x5, for example, when you need to keep the font of the vue page consistent with native interfaces such as tabbar, you can also configure this property in the manifest.

|属性|类型|说明|
|Attribute|Type|Description|
|:-|:-|:-|
|minUserAgentVersion|String|最小webview版本，例如：64.0.3282.116。（当低于最小版本要求时，显示 `WebView版本过低`  弹框，点击确定退出应用。）|
| minUserAgentVersion| String| The minimum webview version, for example: 64.0.3282.116. (When the minimum version requirement is lower than the minimum version, a `WebView version is too low` pop-up box will be displayed, click OK to exit the application.) |
|x5|Object|此属性需要在manifest模块配置中勾选 Android X5 Webview 模块，详细参见下面的说明|
| x5| Object|This attribute needs to check the Android X5 Webview module in the manifest module configuration, see the description below for details|

x5 属性说明
x5 attribute description

|属性|类型|默认值|说明|
|Attribute|Type|Default|Description|
|:-|:-|:-|:-|
|timeOut|Number|3000|超时时间|
| timeOut| Number| 3000|timeout time|
|showTipsWithoutWifi|Boolean|false|是否在非WiFi网络环境时，显示用户确认下载x5内核的弹窗。（如果为true时，在非WiFi网络下载x5模块，会显示用户确认弹框，内容为 `当前处于非WiFi网络，是否允许下载x5模块？` ，false时不显示弹框 。）|
| showTipsWithoutWifi| Boolean| false|Whether to display a pop-up window for the user to confirm downloading the x5 kernel in a non-WiFi network environment. (If it is true, when downloading the x5 module on a non-WiFi network, a user confirmation pop-up box will be displayed, the content is `Currently in a non-WiFi network, is it allowed to download the x5 module?`, when false, no pop-up box will be displayed.) |
|allowDownloadWithoutWiFi|Boolean|false|是否允许用户在非WiFi网络时进行x5内核的下载。（如果为true，就不会显示用户确认的弹窗。false时，如果showTipsWithoutWifi为true，就会显示用户确认弹框；showTipsWithoutWifi为false时，不下载x5模块。）|
| allowDownloadWithoutWiFi| Boolean| false|Whether to allow the user to download the x5 kernel when not on a WiFi network. (If it is true, the pop-up window for user confirmation will not be displayed. When it is false, if showTipsWithoutWifi is true, the user confirmation pop-up box will be displayed; when showTipsWithoutWifi is false, the x5 module will not be downloaded.) |


webview示例
webview example

```json
{
  "app-plus" : {
    "webView": {
      "minUserAgentVersion": "64.0.3282.116",
      "x5": {
        "timeOut": 3000,
        "showTipsWithoutWifi": true,
        "allowDownloadWithoutWiFi": false
      }
    }
  }
}
```

提示：vue3 vue页面 要求 Android 系统 webview 最低版本为 `64.0.3282.116`
Tip: The vue3 vue page requires the minimum version of the Android system webview to be `64.0.3282.116`

### h5
|属性|类型|说明|
|Attribute|Type|Description|
|:-|:-|:-|
|title|String|页面标题，默认使用 manifest.json 的 name|
| title| String|page title, the name in manifest.json is used by default|
|template|String|index.html模板路径，相对于应用根目录，可定制生成的 html 代码。参考：[自定义模板](/collocation/manifest?id=h5-template)|
| template| String| index.html template path, relative to the application root directory, can customize the generated html code. Reference: [Custom Template](/collocation/manifest?id=h5-template)|
|router|Object|参考：[router](/collocation/manifest?id=h5-router)|
| router| Object|Reference: [router](/collocation/manifest?id=h5-router)|
|async|Object|参考：[async](/collocation/manifest?id=h5-async)|
| async| Object|Reference: [async](/collocation/manifest?id=h5-async)|
|devServer|Object|开发环境 server 配置，参考：[devServer](/collocation/manifest?id=devserver)|
|publicPath|String|引用资源的地址前缀，仅 Vue2 发布时生效。参考：[publicPath](/collocation/manifest?id=publicPath)|
|sdkConfigs|String|SDK配置，例如地图...  参考：[sdkConfigs](/collocation/manifest?id=h5sdkconfig)|
| sdkConfigs| String| SDK configuration, such as map... Reference: [sdkConfigs](/collocation/manifest?id=h5sdkconfig)|
|optimization|Object|打包优化配置（HBuilderX 2.1.5 以上支持），参考[optimization](/collocation/manifest?id=optimization)|
| optimization| Object|Package optimization configuration (supported by HBuilderX 2.1.5 and above), refer to [optimization](/collocation/manifest?id=optimization)|
|uniStatistics|Object|[H5 是否开启 uni 统计，配置方法同全局配置](/collocation/manifest?id=uniStatistics)||
| uniStatistics| Object|[Whether to enable uni statistics in H5, the configuration method is the same as the global configuration](/collocation/manifest?id=uniStatistics)||

#### 自定义模板@h5-template
#### Custom Template @h5-template
需要使用自定义模板的场景，通常有以下几种情况：
Scenarios that require the use of custom templates usually have the following situations:

- 调整页面 head 中的 meta 配置
- Adjust the meta configuration in the page head
- 补充 SEO 相关的一些配置（仅首页）
- Supplement some configurations related to SEO (only the home page)
- 加入百度统计等三方js
- Join Baidu statistics and other three-party js

使用自定义模板时，1. 工程根目录下新建一个html文件；2. 复制下面的基本模板内容，到这个html文件，在此基础上修改meta和引入js；3. 在 `manifest.json->h5->template` 节点中关联这个html文件的路径。
When using a custom template, 1. Create a new html file in the root directory of the project; 2. Copy the following basic template content to this html file, modify meta and import js on this basis; 3. In `manifest.json-> The path associated with this html file in the h5->template` node.
```html
<!DOCTYPE html>
<html lang="zh-CN">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>
			<%= htmlWebpackPlugin.options.title %>
		</title>
		<!-- Open Graph data -->
		<!-- <meta property="og:title" content="Title Here" /> -->
		<!-- <meta property="og:url" content="http://www.example.com/" /> -->
		<!-- <meta property="og:image" content="http://example.com/image.jpg" /> -->
		<!-- <meta property="og:description" content="Description Here" /> -->
		<script>
			var coverSupport = 'CSS' in window && typeof CSS.supports === 'function' && (CSS.supports('top: env(a)') || CSS.supports('top: constant(a)'))
			document.write('<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' + (coverSupport ? ', viewport-fit=cover' : '') + '" />')
		</script>
		<link rel="stylesheet" href="<%= BASE_URL %>static/index.<%= VUE_APP_INDEX_CSS_HASH %>.css" />
	</head>
	<body>
		<noscript>
			<strong>Please enable JavaScript to continue.</strong>
		</noscript>
		<div id="app"></div>
		<!-- built files will be auto injected -->
	</body>
</html>
```

在hello uni-app示例中有一个`template.h5.html`文件，即是此用途。
There is a `template.h5.html` file in the hello uni-app example, which is used for this purpose.

**关于SEO的补充说明**
**Additional note about SEO**

H5平台是SPA单页应用，普通的SEO信息即加meta字段只能在，自定义的模板html里配置首页。
The H5 platform is a SPA single-page application. Common SEO information, that is, adding meta fields can only be configured on the homepage in the custom template html.

但SEO的时代在变，现在更有效的方式，使用uni-app同时发布一版百度小程序，这个搜索权重更高。DCloud的ask社区的H5版也是uni-app做的，同时发布了百度小程序，权重更高，每天来自百度的搜索量非常多。是一个可现身说法的好案例。
But the era of SEO is changing, and now a more effective way is to use uni-app to release a version of Baidu MiniApp at the same time, which has a higher search weight. The H5 version of DCloud's ask community is also made by uni-app. At the same time, a Baidu MiniApp is released, which has a higher weight and a lot of searches from Baidu every day. It's a good case to speak for itself.

#### router@h5-router
|属性|类型|默认值|说明|
|Attribute|Type|Default|Description|
|:-|:-|:-|:-|
|mode|String|hash|路由跳转模式，支持 hash、history|
| mode| String| hash|routing jump mode, support hash, history|
|base|String|/|应用基础路径，例如，如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 "/app/"，支持设置为相对路径 "./"|
| base| String|/|Application base path, for example, if the entire single-page application service is under /app/, then the base should be set to "/app/", and it is supported to be set to a relative path "./"|

**注意：**
**Notice:**

* `history` 模式部分浏览器器不支持，iOS微信内置浏览器无法观测到URL变动，默认分享（不使用微信[JSSDK](https://ask.dcloud.net.cn/article/35380)的情况下）的链接为入口页链接。
* `history` mode is not supported by some browsers, and the built-in browser of iOS WeChat cannot observe URL changes, and the default sharing (does not use WeChat [JSSDK](https://ask.dcloud.net.cn/article/35380) case) is the entry page link.
* `history` 模式发行需要后台配置支持，详见：[history 模式的后端配置](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90)
* The release of `history` mode requires background configuration support, see: [backend configuration of history mode](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90% 8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90)

#### async@h5-async
|属性|类型|默认值|说明|
|Attribute|Type|Default|Description|
|:-|:-|:-|:-|
|loading|String|AsyncLoading|页面 js 加载时使用的组件（需注册为全局组件）|
| loading| String| AsyncLoading| the component used when page js is loaded (need to be registered as a global component)|
|error|String|AsyncError|页面 js 加载失败时使用的组件（需注册为全局组件）|
| error| String| AsyncError| The component used when the page js fails to load (need to be registered as a global component)|
|delay|Number|200|展示 loading 加载组件的延时时间（页面 js 若在 delay 时间内加载完成，则不会显示 loading 组件）|
| delay| Number| 200|Display the delay time of the loading loading component (if the page js is loaded within the delay time, the loading component will not be displayed)|
|timeout|Number|60000|页面 js 加载超时时间（超时后展示 error 对应的组件）|
| timeout| Number| 60000|page js loading timeout time (the component corresponding to error will be displayed after timeout)|

#### devServer
|属性|类型|默认值|说明|
|Attribute|Type|Default|Description|
|:-|:-|:-|:-|
|https|Boolean|false|启用 https 协议|
| https| Boolean| false|Enable https protocol|
|port|Number|Vue2 8080；Vue3 3000|前端开发服务端口|
| port| Number| Vue2 8080; Vue3 3000|Front-end development service port|
|disableHostCheck|Boolean|false|禁用 Host 检查|
| disableHostCheck| Boolean| false|Disable Host Check|

Tips：`uni-app` 中 `manifest.json->h5->devServer`，`vue2` 实际上对应 `webpack` 的 [devServer](https://webpack.js.org/configuration/dev-server/)，`vue3` 实际上对应 `vite` 的 [server](https://cn.vitejs.dev/config/server-options.html#server-options)，鉴于 manifest 为 json 文件，故 `webpack.config.js->devServer` 及 `vite.config.js->server` 配置项下的简单类型属性均可在`manifest.json->h5->devServer`节点下配置，funciton 等复杂类型暂不支持。

#### publicPath
配置 publicPath 为 cdn 资源地址前缀，这样编译出来的 html 文件，引用的 js，css 路径会自动变成 cdn 上的地址。
Configure publicPath as the prefix of the cdn resource address, so that the compiled html file, the referenced js, and css paths will automatically become the address on the cdn.

注意：如果想对图片生效，image组件的图片地址需要使用相对路径
Note: If you want to take effect on the image, the image address of the image component needs to use a relative path

**示例**
**example**

以 hello-uniapp 发布 H5 时为例
Take hello-uniapp as an example when releasing H5

未配置 publicPath 时，发布时 index.html 中的结果：
Result in index.html when publishing when no publicPath is configured:

```html
<script src=/h5/static/js/chunk-vendors.803ce52d.js></script>
<script src=/h5/static/js/index.34e8497d.js>
```
配置 publicPath 为 `https://www.cdn.com/h5/`（无效地址仅用作示例） 后，发布时 index.html 中的结果：
After configuring publicPath to `https://www.cdn.com/h5/` (invalid address is just used as an example), the result in index.html when publishing:

```html
<script src=https://www.cdn.com/h5/static/js/chunk-vendors.803ce52d.js></script>
<script src=https://www.cdn.com/h5/static/js/index.34e8497d.js>
```

**注意**
**Notice**
- 打包部署后，在服务器上开启 gzip 可以进一步压缩文件。具体的配置，可以参考网上的分享：https://juejin.im/post/5af003286fb9a07aac24611b
- After packaging and deploying, enable gzip on the server to further compress the file. For specific configuration, please refer to the online sharing: https://juejin.im/post/5af003286fb9a07aac24611b

#### sdkconfig@h5sdkconfig

三方SDK配置。三方SDK的使用需要向这些SDK提供商申请，并配置参数到此处。可在HBuilderX可视化界面（H5 配置）输入配置。
Three-party SDK configuration. The use of the third-party SDK needs to apply to these SDK providers, and configure parameters here. The configuration can be entered in the HBuilderX visual interface (H5 configuration).

|属性|类型|描述|
|Attribute|Type|Description|
|:-|:-|:-|
|maps|Object|地图或位置相关SDK|
| maps| Object|Map or location-related SDK|

#### maps@h5sdkconfigmaps

地图服务商 SDK 配置，使用地图以及位置（IP 定位及坐标转换）需要配置此项。
Map service provider SDK configuration, this item needs to be configured when using maps and locations (IP positioning and coordinate conversion).

**示例**
**example**

```json
"h5": {
	"sdkConfigs": {
		// 使用地图或位置相关功能必须填写其一
		// To use map or location-related functions, one must be filled in
		"maps": {
            "qqmap": {
                // 腾讯地图秘钥 https://lbs.qq.com/dev/console/key/manage
                // Tencent map key https://lbs.qq.com/dev/console/key/manage
                "key": ""
            },
            "google": {
                // 谷歌地图秘钥（HBuilderX 3.2.10+）https://developers.google.com/maps/documentation/javascript/get-api-key
                // Google Maps key (HBuilderX 3.2.10+) https://developers.google.com/maps/documentation/javascript/get-api-key
                "key": ""
            },
            "amap": {
                // 高德地图秘钥（HBuilderX 3.6.0+）https://console.amap.com/dev/key/app
                // Amap key (HBuilderX 3.6.0+) https://console.amap.com/dev/key/app
                "key": "",
                // 高德地图安全密钥（HBuilderX 3.6.0+）https://console.amap.com/dev/key/app
                // Amap security key (HBuilderX 3.6.0+) https://console.amap.com/dev/key/app
                "securityJsCode": "",
                // 高德地图安全密钥代理服务器地址（HBuilderX 3.6.0+）https://lbs.amap.com/api/jsapi-v2/guide/abc/prepare
                // Amap security key proxy server address (HBuilderX 3.6.0+) https://lbs.amap.com/api/jsapi-v2/guide/abc/prepare
                "serviceHost": "",
            }
		}
	}
}
```

#### optimization

|属性|类型|默认值|说明|
|Attribute|Type|Default|Description|
|:-|:-|:-|:-|
|prefetch|Boolean|false|资源预取|
| prefetch| Boolean| false|resource prefetch|
|preload|Boolean|false|资源预加载|
| preload| Boolean| false|resource preload|
|treeShaking|Object||摇树优化，根据项目需求，动态打包框架所需的组件及API，保持框架代码最精简化，参考[treeShaking](/collocation/manifest?id=treeshaking)|
| treeShaking| Object|| tree-shaking optimization, according to project requirements, dynamically package the components and API required by the framework, keep the framework code as simple as possible, refer to [treeShaking](/collocation/manifest?id=treeshaking)|

##### treeShaking

|属性|类型|默认值|说明|
|Attribute|Type|Default|Description|
|:-|:-|:-|:-|
|enable|Boolean|false|是否启用摇树优化|
| enable| Boolean| false|whether to enable tree shaking optimization|

**示例：**
**Example:**
```json
"h5": {
    "optimization": {
        "treeShaking": {
            "enable": true
        }
    }
}
```

Tips：关于摇树优化（treeShaking）原理及优化结果，参考：[https://ask.dcloud.net.cn/article/36279](https://ask.dcloud.net.cn/article/36279)
Tips: For treeshaking optimization (treeShaking) principle and optimization results, refer to: [https://ask.dcloud.net.cn/article/36279](https://ask.dcloud.net.cn/article/36279)

### mp-weixin

|属性|类型|说明|
|Attribute|Type|Description|
|:-|:-|:-|
|appid|String|微信小程序的AppID，登录 [https://mp.weixin.qq.com](https://mp.weixin.qq.com) 申请|
| appid| String|AppID of the WeChat MiniApp, log in [https://mp.weixin.qq.com](https://mp.weixin.qq.com) to apply|
|setting|Object|微信小程序项目设置，参考[setting](/collocation/manifest?id=setting)|
| setting| Object|WeChat MiniApp project settings, refer to [setting](/collocation/manifest?id=setting)|
|functionalPages|Boolean|微信小程序是否启用插件功能页，默认关闭|
| functionalPages| Boolean|Whether to enable the plug-in function page of the WeChat MiniApp, it is disabled by default|
|requiredBackgroundModes|Array|微信小程序需要在后台使用的能力,[详见](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#requiredbackgroundmodes)|
| requiredBackgroundModes| Array|WeChat MiniApp needs to be used in the background, [see](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#requiredbackgroundmodes)|
|plugins|Object|使用到的插件，[详见](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/using.html)|
| plugins| Object|The plugin used, [see details](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/using.html)|
|resizable|Boolean|在iPad上小程序是否支持屏幕旋转，默认关闭|
| resizable| Boolean|Whether the MiniApp supports screen rotation on iPad, it is disabled by default|
|navigateToMiniProgramAppIdList|Array|需要跳转的小程序列表，[详见](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/miniprogram-navigate/wx.navigateToMiniProgram.html)|
|navigateToMiniProgramAppIdList| Array|A list of MiniApp that need to be redirected, [see details](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/miniprogram-navigate/wx.navigateToMiniProgram.html)|
|permission|Object|微信小程序接口权限相关设置，比如申请位置权限必须填此处[详见](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html)|
| permission| Object|WeChat MiniApp interface permission related settings, such as applying for location permission must be filled here [see details](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html)|
|workers|String|Worker 代码放置的目录。 [详见](https://developers.weixin.qq.com/miniprogram/dev/framework/workers.html)|
| workers| String| The directory where the Worker code is placed. [See details](https://developers.weixin.qq.com/miniprogram/dev/framework/workers.html)|
|optimization|Object| 对微信小程序的优化配置 |
| optimization| Object| Optimization configuration for WeChat MiniApp|
|cloudfunctionRoot|String| 配置云开发目录，参考[setting](/collocation/manifest?id=cloudfunctionRoot)|
| cloudfunctionRoot| String| Configure cloud development directory, refer to [setting](/collocation/manifest?id=cloudfunctionRoot)|
|uniStatistics|Object|[微信小程序是否开启 uni 统计，配置方法同全局配置](/collocation/manifest?id=uniStatistics)|
| uniStatistics| Object|[Whether to enable uni statistics in the WeChat MiniApp, the configuration method is the same as the global configuration](/collocation/manifest?id=uniStatistics)|
|scopedSlotsCompiler|String|Vue2 作用域插槽编译模式，uni-app 3.1.19+ 开始支持，可选：legacy、auto、augmented，默认：auto|
| scopedSlotsCompiler| String| Vue2 scoped slots compilation mode, supported from uni-app 3.1.19+, options: legacy, auto, augmented, default: auto|
|mergeVirtualHostAttributes|Boolean|合并组件[虚拟节点](/tutorial/vue-api.html#%E5%85%B6%E4%BB%96%E9%85%8D%E7%BD%AE)外层属性（目前仅支持 style、class 属性），uni-app 3.5.1+ 开始支持|
|slotMultipleInstance|Boolean|模拟单个作用域插槽渲染为多个实例，此配置仅限 Vue2 环境 3.7.12+，Vue3 环境已默认支持|
|embeddedAppIdList|Array|要半屏跳转的小程序appid。[详见](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html)|
|requiredPrivateInfos|Array|地理位置相关接口。[详见](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#requiredPrivateInfos)|
|lazyCodeLoading|String| 目前仅支持值 requiredComponents，代表开启小程序[按需注入](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/lazyload.html#%E6%8C%89%E9%9C%80%E6%B3%A8%E5%85%A5)特性，[详见](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#lazyCodeLoading)|
|lazyCodeLoading|String| support only requiredComponents，Represents opening the MiniApp [On-demand injection](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/lazyload.html#%E6%8C%89%E9%9C%80%E6%B3%A8%E5%85%A5)feature，[Details](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#lazyCodeLoading)|


#### setting

编译到微信小程序平台下的项目设置。
Compile to the project settings under the WeChat MiniApp platform.

|属性|类型|说明|
|Attribute|Type|Description|
|:-|:-|:-|
|urlCheck|Boolean|是否检查安全域名和 TLS 版本|
| urlCheck| Boolean|Whether to check secure domain name and TLS version|
|es6|Boolean|ES6 转 ES5|
|es6| Boolean| ES6 to ES5|
|postcss|Boolean|上传代码时样式是否自动补全|
| postcss| Boolean|Whether the style is automatically completed when uploading the code|
|minified|Boolean|上传代码时是否自动压缩|
| minified| Boolean|Whether to automatically compress code when uploading|
|bigPackageSizeSupport|Boolean|预览及真机调试时包体积上限是否调整为4M，默认为true（HBuilderX 3.5.5+）。|
| bigPackageSizeSupport| Boolean|Whether to adjust the upper limit of the package size to 4M when previewing and real-device debugging, the default is true (HBuilderX 3.5.5+). |

注意: 使用微信小程序手势组件会强制开启 ES6 转 ES5

#### optimization

对微信小程序的优化配置
Optimized configuration for WeChat MiniApp

|属性|类型|说明|
|Attribute|Type|Description|
|:-|:-|:-|
|subPackages|Boolean|是否开启分包优化|
| subPackages| Boolean|Whether to enable subpackage optimization|

#### cloudfunctionRoot

如果需要使用微信小程序的云开发，需要在 mp-weixin 配置云开发目录
If you need to use the cloud development of WeChat MiniApp, you need to configure the cloud development directory in mp-weixin

```javascript
"mp-weixin":{
  // ...
   "cloudfunctionRoot": "cloudfunctions/", // 配置云开发目录
  // ...
}
```

配置目录之后，需要在项目根目录新建 `vue.config.js` 配置对应的文件编译规则
After configuring the directory, you need to create a new `vue.config.js` in the project root directory to configure the corresponding file compilation rules

```javascript

{

 plugins: [
     new CopyWebpackPlugin([
       {
         from: path.join(__dirname, '../cloudfunctions'),
         to: path.join(__dirname, 'unpackage', 'dist', process.env.NODE_ENV === 'production' ? 'build' : 'dev', process.env.UNI_PLATFORM, 'cloudfunctions'),
       },
     ]),
   ],
}

```

### mp-alipay

|属性								|类型		|说明			|
|Property |Type |Description |
|:-								|:-			|:-			|
|plugins							|Object	|使用到的插件，[详见](https://opendocs.alipay.com/mini/plugin/plugin-usage)	|
| plugins | Object | Plugins used, [see details](https://opendocs.alipay.com/mini/plugin/plugin-usage) |
|component2						|Boolean| 是否启用 `component2` 编译，默认为true，[查看详情](https://docs.alipay.com/mini/framework/custom-component-overview)	|
| component2 | Boolean| Whether to enable `component2` compilation, the default is true, [View Details](https://docs.alipay.com/mini/framework/custom-component-overview) |
|enableAppxNg         |Boolean| 是否启用 `enableAppxNg` 小程序基础库 2.x 构建，默认为true，[查看详情](https://opendocs.alipay.com/mini/framework/project)，HBuilderX 3.2.10+ |
| enableAppxNg | Boolean| Whether to enable the `enableAppxNg` MiniApp base library 2.x build, the default is true, [View Details](https://opendocs.alipay.com/mini/framework/project), HBuilderX 3.2.10+ |
|axmlStrictCheck			|Boolean| 是否启用 `axml` 严格语法检查，默认为false	|
| axmlStrictCheck | Boolean| Whether to enable `axml` strict syntax checking, default is false |
|enableParallelLoader	|Boolean| 是否启用多进程编译，默认为false	|
| enableParallelLoader | Boolean| Whether to enable multi-process compilation, the default is false |
|enableDistFileMinify	|Boolean| 是否压缩编译产物（仅在真机预览/真机调试时生效），默认为false	|
| enableDistFileMinify | Boolean| Whether to compress the compiled product (only valid in real device preview/real device debugging), the default is false |
|uniStatistics				|Object	|[支付宝小程序是否开启 uni 统计，配置方法同全局配置](/collocation/manifest?id=uniStatistics)|
| uniStatistics | Object |[Whether the Alipay MiniApp enables uni statistics, the configuration method is the same as the global configuration](/collocation/manifest?id=uniStatistics)|
|scopedSlotsCompiler|String|Vue2 作用域插槽编译模式，uni-app 3.1.19+ 开始支持，可选：legacy、auto、augmented，默认：auto|
|mergeVirtualHostAttributes|Boolean|合并组件[虚拟节点](/tutorial/vue-api.html#%E5%85%B6%E4%BB%96%E9%85%8D%E7%BD%AE)外层属性（目前仅支持 style、class 属性），uni-app 3.5.1+ 开始支持|
|slotMultipleInstance|Boolean|模拟单个作用域插槽渲染为多个实例，此配置仅限 Vue2 环境 3.7.12+，Vue3 环境已默认支持|
|lazyCodeLoading|String|是否开启代码按需执行。|
| lazyCodeLoading| String|Whether to enable code execution on demand. |

### mp-baidu

|属性|类型|说明|
|Attribute|Type|Description|
|:-|:-|:-|
|appid|String|百度小程序的 AppID，登录 [https://smartprogram.baidu.com/docs/introduction/enter_application/](https://smartprogram.baidu.com/docs/introduction/enter_application/) 申请|
| appid| String|AppID of Baidu MiniApp, log in [https://smartprogram.baidu.com/docs/introduction/enter_application/](https://smartprogram.baidu.com/docs/introduction/enter_application/) to apply|
|requiredBackgroundModes|Array|小程序需要在后台使用的能力，目前支持背景音频播放，"requiredBackgroundModes": ["audio"]，[详见](https://smartprogram.baidu.com/docs/develop/tutorial/process/#requiredBackgroundModes)	|
| requiredBackgroundModes| Array| MiniApp need the ability to be used in the background, and currently support background audio playback, "requiredBackgroundModes": ["audio"], [see details](https://smartprogram.baidu.com/docs/develop/tutorial/process/#requiredBackgroundModes) |
|prefetches|Array|预请求的所有url的列表，[详见](https://smartprogram.baidu.com/docs/develop/tutorial/process/#prefetches)																|
| prefetches| Array|A list of all pre-requested urls, [see details](https://smartprogram.baidu.com/docs/develop/tutorial/process/#prefetches) |
|optimization|Object| 对百度小程序的优化配置 |
| optimization| Object| optimization configuration for Baidu MiniApp|
|uniStatistics|Object|[百度小程序是否开启 uni 统计，配置方法同全局配置](/collocation/manifest?id=uniStatistics)|
| uniStatistics| Object|[Whether to enable uni statistics in the Baidu MiniApp, the configuration method is the same as the global configuration](/collocation/manifest?id=uniStatistics)|
|scopedSlotsCompiler|String|Vue2 作用域插槽编译模式，uni-app 3.1.19+ 开始支持，可选：legacy、auto、augmented，默认：auto|
|slotMultipleInstance|Boolean|模拟单个作用域插槽渲染为多个实例，此配置仅限 Vue2 环境 3.7.12+，Vue3 环境已默认支持|
|dynamicLib|Object|引入动态库，详情请参考[使用动态库](https://smartprogram.baidu.com/docs/develop/framework/dynamiclib_use/)|
| dynamicLib| Object|Introduce a dynamic library, please refer to [Use a dynamic library](https://smartprogram.baidu.com/docs/develop/framework/dynamiclib_use/)|

#### optimization

对百度小程序的优化配置
Optimized configuration for Baidu MiniApp

|属性|类型|说明|
|Attribute|Type|Description|
|:-|:-|:-|
|subPackages|Boolean|是否开启分包优化|
| subPackages| Boolean|Whether to enable subpackage optimization|

### mp-toutiao

|属性|类型|说明|
|Attribute|Type|Description|
|:-|:-|:-|
|appid|String|抖音小程序的 AppID，登录 [https://microapp.bytedance.com/](https://microapp.bytedance.com/) 申请|
|setting|Object|抖音小程序项目设置，参考[抖音小程序项目设置](/collocation/manifest?id=mp-toutiao-setting)|
|navigateToMiniProgramAppIdList	|Array|需要跳转的小程序列表，[详见](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/framework/basic-reference/general-configuration/)	|
|uniStatistics|Object|[抖音小程序是否开启 uni 统计，配置方法同全局配置](/collocation/manifest?id=uniStatistics)|
|scopedSlotsCompiler|String|Vue2 作用域插槽编译模式，uni-app 3.1.19+ 开始支持，可选：legacy、auto、augmented，默认：auto|
|slotMultipleInstance|Boolean|模拟单个作用域插槽渲染为多个实例，此配置仅限 Vue2 环境 3.7.12+，Vue3 环境已默认支持|

#### 抖音小程序项目设置@mp-toutiao-setting

|属性|类型|说明|
|Attribute|Type|Description|
|:-|:-|:-|
|urlCheck|Boolean|是否检查安全域名和 TLS 版本|
| urlCheck| Boolean|Whether to check secure domain name and TLS version|
|es6|Boolean|ES6 转 ES5|
|es6| Boolean| ES6 to ES5|
|postcss|Boolean|上传代码时样式是否自动补全|
| postcss| Boolean|Whether the style is automatically completed when uploading the code|
|minified|Boolean|上传代码时是否自动压缩|
| minified| Boolean|Whether to automatically compress code when uploading|

### mp-lark

|属性|类型|说明|
|Attribute|Type|Description|
|:-|:-|:-|
|appid|String|飞书小程序的 AppID，登录 [https://open.feishu.cn](https://open.feishu.cn) 申请|
| appid| String|AppID of the Feishu MiniApp, log in to [https://open.feishu.cn](https://open.feishu.cn) to apply|
|setting|Object|飞书小程序项目设置，参考[飞书小程序项目设置](/collocation/manifest?id=mp-lark-setting)|
| setting| Object| Feishu MiniApp project settings, refer to [Feishu MiniApp project settings](/collocation/manifest?id=mp-lark-setting)|
|uniStatistics|Object|[飞书小程序是否开启 uni 统计，配置方法同全局配置](/collocation/manifest?id=uniStatistics)|
| uniStatistics| Object|[Whether the Feishu MiniApp enables uni statistics, the configuration method is the same as the global configuration](/collocation/manifest?id=uniStatistics)|
|scopedSlotsCompiler|String|Vue2 作用域插槽编译模式，uni-app 3.1.19+ 开始支持，可选：legacy、auto、augmented，默认：auto|
|slotMultipleInstance|Boolean|模拟单个作用域插槽渲染为多个实例，此配置仅限 Vue2 环境 3.7.12+，Vue3 环境已默认支持|

#### 飞书小程序项目设置@mp-lark-setting
#### Feishu MiniApp project setting @mp-lark-setting

|属性|类型|说明|
|Attribute|Type|Description|
|:-|:-|:-|
|urlCheck|Boolean|是否检查安全域名和 TLS 版本|
| urlCheck| Boolean|Whether to check secure domain name and TLS version|
|es6|Boolean|ES6 转 ES5|
|es6| Boolean| ES6 to ES5|
|postcss|Boolean|上传代码时样式是否自动补全|
| postcss| Boolean|Whether the style is automatically completed when uploading the code|
|minified|Boolean|上传代码时是否自动压缩|
| minified| Boolean|Whether to automatically compress code when uploading|

### mp-qq

|属性							|类型			|说明																																												|
|Property |Type |Description |
|:-								|:-				|:-																																													|
|appid							|String			|qq 小程序的 AppID，登录 [https://q.qq.com](https://q.qq.com) 申请																													|
| appid | String | The AppID of the qq MiniApp, log in [https://q.qq.com](https://q.qq.com) to apply |
|requiredBackgroundModes		|Array			|小程序需要在后台使用的能力，目前支持背景音频播放，"requiredBackgroundModes": ["audio"]，[详见](https://q.qq.com/wiki/develop/miniprogram/frame/dispose.html#requiredbackgroundmodes)	|
| requiredBackgroundModes | Array | The ability of the MiniApp to be used in the background, currently supports background audio playback, "requiredBackgroundModes": ["audio"], [see details](https://q.qq.com/wiki/develop/miniprogram/frame/dispose.html#requiredbackgroundmodes) |
|navigateToMiniProgramAppIdList	|Array			|需要跳转的小程序列表，[详见](https://q.qq.com/wiki/develop/miniprogram/frame/dispose.html#navigatetominiprogramappidlist)																|
| navigateToMiniProgramAppIdList | Array |A list of MiniApp that need to be redirected, [see details](https://q.qq.com/wiki/develop/miniprogram/frame/dispose.html#navigatetominiprogramappidlist) |
|permission						|Object			|小程序接口权限相关设置，比如申请位置权限必须填此处[详见](https://q.qq.com/wiki/develop/miniprogram/frame/dispose.html#permission)														|
| permission | Object | MiniApp interface permission-related settings, such as applying for location permissions must be filled here [see details](https://q.qq.com/wiki/develop/miniprogram/frame/dispose.html#permission) |
|workers						|String			|Worker 代码放置的目录。 [详见](https://q.qq.com/wiki/develop/miniprogram/frame/dispose.html#workers)																					|
| workers | String | The directory where the Worker code is placed. [See details](https://q.qq.com/wiki/develop/miniprogram/frame/dispose.html#workers) |
|groupIdList					|String Array	|需要打开群资料卡的群号列表，详见button的open-type																																		|
| groupIdList | String Array |The list of group IDs that need to open the group data card, see the open-type of the button for details |
|optimization|Object| 对QQ小程序的优化配置 |
| optimization| Object| optimization configuration of QQ MiniApp|
|uniStatistics|Object|[QQ小程序是否开启 uni 统计，配置方法同全局配置](/collocation/manifest?id=uniStatistics)|
| uniStatistics| Object|[Whether to enable uni statistics in the QQ MiniApp, the configuration method is the same as the global configuration](/collocation/manifest?id=uniStatistics)|
|scopedSlotsCompiler|String|Vue2 作用域插槽编译模式，uni-app 3.1.19+ 开始支持，可选：legacy、auto、augmented，默认：auto|
|slotMultipleInstance|Boolean|模拟单个作用域插槽渲染为多个实例，此配置仅限 Vue2 环境 3.7.12+，Vue3 环境已默认支持|

#### optimization

对QQ小程序的优化配置
Optimized configuration for QQ MiniApp

|属性|类型|说明|
|Attribute|Type|Description|
|:-|:-|:-|
|subPackages|Boolean|是否开启分包优化|
| subPackages| Boolean|Whether to enable subpackage optimization|

### mp-kuaishou

|属性|类型|说明|
|Attribute|Type|Description|
|:-|:-|:-|
|appid|String|快手小程序的 AppID，登录 [https://mp.kuaishou.com](https://mp.kuaishou.com) 申请|
| appid| String|AppID of the Kuaishou MiniApp, log in [https://mp.kuaishou.com](https://mp.kuaishou.com) to apply|
|optimization|Object| 对快手小程序的优化配置 |
| optimization| Object| optimization configuration of Kuaishou MiniApp|
|uniStatistics|Object|[快手小程序是否开启 uni 统计，配置方法同全局配置](/collocation/manifest?id=uniStatistics)|
| uniStatistics| Object|[Whether the Kuaishou MiniApp enables uni statistics, the configuration method is the same as the global configuration](/collocation/manifest?id=uniStatistics)|
|scopedSlotsCompiler|String|Vue2 作用域插槽编译模式，uni-app 3.1.19+ 开始支持，可选：legacy、auto、augmented，默认：augmented|
|slotMultipleInstance|Boolean|模拟单个作用域插槽渲染为多个实例，此配置仅限 Vue2 环境 3.7.12+，Vue3 环境已默认支持|

#### optimization

对快手小程序的优化配置
Optimized configuration for Kuaishou MiniApp

|属性|类型|说明|
|Attribute|Type|Description|
|:-|:-|:-|
|subPackages|Boolean|是否开启分包优化|
| subPackages| Boolean|Whether to enable subpackage optimization|

### 自定义小程序项目配置
### Custom MiniApp project configuration

HBuilderX 3.6.16+ 支持项目根目录(cli 项目为 src 目录)下创建配置文件自定义小程序项目配置。平台对应文件名如下：
HBuilderX 3.6.16+ supports creating a configuration file in the project root directory (cli project is the src directory) to customize the configuration of the MiniApp project. The platform corresponding file name is as follows:
|小程序平台|文件名|
| MiniApp Platform|File Name|
|:-|:-|
|微信|project.config.json|
|QQ|project.config.json|
|百度|project.swan.json|
|Baidu| project.swan.json|
|支付宝|mini.project.json|
|抖音|project.tt.json|
|飞书|project.lark.json|
|Feishu| project.lark.json|
|快手|project.ks.json|
| Kuaishou| project.ks.json|
|京东|project.config.json|
|Jingdong| project.config.json|

### 关于分包优化的说明
### Explanation on subpackage optimization

- 在对应平台的配置下添加`"optimization":{"subPackages":true}`开启分包优化
- Add `"optimization":{"subPackages":true}` under the configuration of the corresponding platform to enable subpackage optimization
- 目前只支持`mp-weixin`、`mp-qq`、`mp-baidu`、`mp-toutiao`、`mp-kuaishou`的分包优化
- Currently only supports subpackage optimization of `mp-weixin`, `mp-qq`, `mp-baidu`, `mp-toutiao`, `mp-kuaishou`
- 分包优化具体逻辑：
- Specific logic of subcontract optimization:
  + 静态文件：分包下支持 static 等静态资源拷贝，即分包目录内放置的静态资源不会被打包到主包中，也不可在主包中使用
  + Static files: Static resources such as static are supported under the subpackage, that is, the static resources placed in the subpackage directory will not be packaged into the main package, nor can they be used in the main package
  + js文件：当某个 js 仅被一个分包引用时，该 js 会被打包到该分包内，否则仍打到主包（即被主包引用，或被超过 1 个分包引用）
  + js file: When a js is only referenced by one subpackage, the js will be packaged into the subpackage, otherwise it will still be packaged into the main package (that is, it is referenced by the main package, or it is referenced by more than one subpackage)
  + 自定义组件：若某个自定义组件仅被一个分包引用时，且未放入到分包内，编译时会输出提示信息
  + Custom component: If a custom component is only referenced by one subpackage and is not placed in the subpackage, a prompt message will be output during compilation

**分包内静态文件示例**
**Example of static files in subpackage**

```json
"subPackages": [{
	"root": "pages/sub",
	"pages": [{
		"path": "index/index"
	}]
}]
```

以上面的分包为例，放在每个分包root对应目录下的静态文件会被打包到此分包内。
Taking the above subpackage as an example, the static files placed in the directory corresponding to the root of each subpackage will be packaged into this subpackage.

### 快应用@quickapp-webview
### QuickApp@quickapp-webview

|属性							 |类型			|说明|
|Property |Type |Description|
|:-								 |:-			|:-|
|icon							 |String	|应用图标，华为推荐 192x192|
| icon | String |Application icon, recommended by Huawei 192x192|
|package					 |String	|应用包名|
| package | String |application package name|
|minPlatformVersion|Number	|最小平台运行支持(华为最低 1070，vivo 1063)|
| minPlatformVersion| Number |Minimum platform support (Huawei minimum 1070, vivo 1063)|
|versionName			 |String	|版本名称|
| versionName | String |version name|
|versionCode			 |Number	|版本号|
| versionCode | Number |Version number|


**manifest.json配置**
**manifest.json configuration**
```json
"quickapp-webview": {// 快应用通用配置
  "icon": "/static/logo.png",
  "package": "com.example.demo",
  "versionName": "1.0.0",
  "versionCode": 100
},
"quickapp-webview-union": {// 快应用联盟，目前仅支持 vivo、oppo
  "minPlatformVersion": 1063 //最小平台支持
},
"quickapp-webview-huawei": {// 快应用华为
  "minPlatformVersion": 1070 //最小平台支持
}
```


### FAQ
Q：iOS 应用调用相机等权限时，弹出的提示语如何修改？
Q: How to modify the pop-up prompts when the iOS app calls the camera and other permissions?
A：在 manifest.json 可视化界面-App模块权限配置-iOS隐私信息访问的许可描述
A: In the manifest.json visual interface - App module permission configuration - iOS privacy information access permission description
