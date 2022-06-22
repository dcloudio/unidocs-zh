`manifest.json` 文件是应用的配置文件，用于指定应用的名称、图标、权限等。HBuilderX 创建的工程此文件在根目录，CLI 创建的工程此文件在 src 目录。

### 配置项列表

|属性|类型|默认值|描述|最低版本|
|:-|:-|:-|:-|:-|
|name|String||应用名称||
|appid|String|新建 uni-app 项目时，DCloud 云端分配。用途[详见](https://ask.dcloud.net.cn/article/35907)|应用标识|| 
|description|String||应用描述||
|locale|String|auto|设置当前默认语言，具体参考 [locale](/api/ui/locale)||
|versionName|String||版本名称，例如：1.0.0。详见下方Tips说明||
|versionCode|String||版本号，例如：36||
|transformPx|Boolean|true|是否转换项目的px，为true时将px转换为rpx，为false时，px为传统的实际像素。为兼容历史项目默认值为 true，但不推荐新项目启用此配置（新建项目模板一般配置为 false）||
|networkTimeout|Object||网络超时时间，[详见](/collocation/manifest?id=networktimeout)||
|debug|Boolean|false|是否开启 debug 模式，开启后调试信息以 ``info`` 的形式给出，其信息有页面的注册，页面路由，数据更新，事件触发等||
|uniStatistics|Object||[是否开启 uni 统计，全局配置](/collocation/manifest?id=uniStatistics)|2.2.3+|
|app-plus|Object||[App 特有配置](/collocation/manifest?id=app-plus)||
|h5|Object||[H5 特有配置](/collocation/manifest?id=h5)||
|quickapp|Object||快应用特有配置，即将支持||
|mp-weixin|Object||[微信小程序特有配置](/collocation/manifest?id=mp-weixin)||
|mp-alipay|Object||[支付宝小程序特有配置](/collocation/manifest?id=mp-alipay)|
|mp-baidu|Object||[百度小程序特有配置](/collocation/manifest?id=mp-baidu)||
|mp-toutiao|Object||[字节跳动小程序特有配置](/collocation/manifest?id=mp-toutiao)|1.6.0|
|mp-lark|Object||[飞书小程序特有配置](/collocation/manifest?id=mp-lark)|3.2.12|
|mp-qq|Object||[qq 小程序特有配置](/collocation/manifest?id=mp-qq)|2.1.0|

**Tips**

- uni-app 的 `appid` 由 DCloud 云端分配，主要用于 DCloud 相关的云服务，请勿自行修改。[详见](https://ask.dcloud.net.cn/article/35907)
- 注意区分 uni-app 的 `appid` 与微信小程序、iOS 等其它平台分配的 `appid`，以及第三方 SDK 的 `appid`。
- versionName在云打包App和生成wgt应用资源时会使用。如需升级App版本，先修改此处再云打包。导出wgt资源用于离线打包和热更新时也会以此版本为依据。
- 在本地打包时和热更新时，App版本和wgt应用资源版本将不再保持一致。此时通过[plus.runtime.version](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.version)可获取App版本，通过[plus.runtime.getProperty](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.getProperty)获取wgt资源版本。

#### networkTimeout

各类网络请求的超时时间，单位均为毫秒。

|属性|类型|必填|默认值|说明|
|--|--|--|--|--|
|request|Number|否|60000|uni.request 的超时时间，单位毫秒。|
|connectSocket|Number|否|60000|uni.connectSocket 的超时时间，单位毫秒。|
|uploadFile|Number|否|60000|uni.uploadFile 的超时时间，单位毫秒。|
|downloadFile|Number|否|60000|uni.downloadFile 的超时时间，单位毫秒。|

自`HBuilderX 2.5.10`起，上述默认超时时间由6秒改为60秒，对齐微信小程序平台。


### uniStatistics
uni 统计配置项

|属性|类型|必填|默认值|说明|
|--|--|--|--|--|
|enable|Boolean|是|true|是否开启uni统计|

### app-plus

|属性|类型|说明|最低版本|
|:-|:-|:-|:-|
|splashscreen|Object|App 启动界面信息，[详见](/collocation/manifest?id=splashscreen)||
|screenOrientation|Array|重力感应、横竖屏配置，可取值："portrait-primary"：竖屏正方向；"portrait-secondary"：竖屏反方向；"landscape-primary"：横屏正方向；"landscape-secondary"：横屏反方向。||
|modules|Object|权限模块，[详见](/collocation/manifest?id=modules)||
|distribute|Object|App 发布信息，[详见](/collocation/manifest?id=distribute)||
|nvueCompiler|String|切换 nvue 编译模式，可选值，`weex` ：老编译模式，`uni-app`： 新编译模式，默认为 `weex` 。[编译模式区别详情](http://ask.dcloud.net.cn/article/36074)|2.0.3+|
|nvueStyleCompiler|String|切换 nvue 样式编译模式，可选值，`weex` ：老编译模式，`uni-app`： 新编译模式，默认为 `weex` 。[编译模式区别详情](https://ask.dcloud.net.cn/article/38751)|3.1.1+|
|renderer|String|可不加载基于 webview 的运行框架，减少包体积、提升启动速度。可选值 `native`| App-nvue 2.2.0+|
|compilerVersion|Number|编译器版本，可选值：2、3 默认 2 [详见](https://ask.dcloud.net.cn/article/36599)|HBuilderX 2.5.0+|
|nvueLaunchMode|String|Nvue 首页启动模式，在 compilerVersion 值为 3 时生效，可选值：normal、fast 默认 normal（HBuilderX 2.4.4-2.4.9 固定为 fast） [详见](https://ask.dcloud.net.cn/article/36749)|2.5.0+|
|nvue|Object|nvue 页面布局初始配置，[详见](/collocation/manifest?id=nvue)|2.0.3+|
|optimization|Object|分包配置，可以减轻启动时加载的js数量，提升启动速度|2.7.12+|
|uniStatistics|Object|[App 是否开启 uni 统计，配置方法同全局配置](/collocation/manifest?id=uniStatistics)|2.2.3+|
|webView|Object|当系统webview低于指定版本时，会弹出提示。或者下载x5内核后继续启动，仅Android支持，[详情](/collocation/manifest?id=appwebview)|3.5.0+|

#### webview@appwebview

|属性|类型|说明|
|:-|:-|:-|
|minUserAgentVersion|String|最小webview版本，例如：95.0.4638.75。（当低于最小版本要求时，显示 `WebView版本过低`  弹框，点击确定退出应用。）|
|x5|Object|此属性需要勾选 Android X5 Webview 模块，详细参见下面的说明|

x5 属性说明

|属性|类型|默认值|说明|
|:-|:-|:-|:-|
|timeOut|Number|3000|超时时间|
|showTipsWithoutWifi|Boolean|true|是否在非WiFi网络环境时，显示用户确认下载x5内核的弹窗。（如果为true时，在非WiFi网络下载x5模块，会显示用户确认弹框，内容为 `当前处于非WiFi网络，是否允许下载x5模块？` ，false时不显示弹框 。）|
|allowDownloadWithoutWiFi|Boolean|false|是否允许用户在非WiFi网络时进行x5内核的下载。（如果为true，就不会显示用户确认的弹窗。false时，如果showTipsWithoutWifi为true，就会显示用户确认弹框；showTipsWithoutWifi为false时，不下载x5模块。）|


webview示例

```json
{
  "app-plus" : {
    "webView": {
      "minUserAgentVersion": "95.0.4638.75",
      "x5": {
        "timeOut": 3000,
        "showTipsWithoutWifi": true,
        "allowDownloadWithoutWiFi": false
      }
    }
  }
}
```


PS：这里只列出了核心部分，更多内容请参考 [完整的 manifest.json](/tutorial/app-manifest)。

**Tips**

- manifest.json 文件的配置，推荐在 HBuilderX 提供的可视化操作界面完成。
- 部分配置在打包时的操作界面补全，例如：证书等信息。
- Native.js 权限部分会根据配置的模块权限，在打包后自动填充。
- 部分 modules 是默认的，不需要进行配置。
- 微信小程序的 `appid` 等信息，需要配置在 `mp-weixin` 节点下。`sdkConfigs` 下出现的 `weixin` 节点，配置的是 5+ App 的第三方 SDK 信息。


#### App Splashscreen@splashscreen

splash（启动封面）是App必然存在的、不可取消的。
|属性|类型|默认值|描述|最低版本|
|:-|:-|:-|:-|:-|
|alwaysShowBeforeRender|Boolean|true|是否等待首页渲染完毕后再关闭启动界面|1.6.0|
|autoclose|Boolean|true|是否自动关闭启动界面，仅当alwaysShowBeforeRender设置为false时生效，如果需要[手动关闭](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.closeSplashscreen)启动界面，需将 alwaysShowBeforeRender 及 autoclose 均设置为 false。||
|waiting|Boolean|true|是否在程序启动界面显示等待圈或雪花||

alwaysShowBeforeRender和autoclose属性组合设置，可配置以下三种关闭启动界面（splash）策略，[详见](tutorial/app-splashscreen)

**注意**
- 如果不配置自己的splash图，App端会默认把App的icon放到splash中
- splash只能是标准png，不要用jpg改名为png。也不支持gif等动画
- 相关改动，云打包生效，真机运行不生效。本地打包需自行在原生工程中配置
- App启动图中iOS的MAX等大屏设备的splash图若不配，会导致iOS认为此App没有为MAX优化，App将无法全屏，四周会有黑边
- Android的splash支持.9.png，[详见](tutorial/app-splashscreen?id=9png)


#### App Modules@modules
模块选择是为了控制App的包体积，不需要的模块可以在打包时剔除。

|名称|描述|
|:-|:-|
|Bluetooth|BLE蓝牙|
|Contacts|系统通讯录|
|Fingerprint|指纹识别|
|iBeacon|iBeacon|
|LivePusher|直播推流|
|Maps|地图|
|Messaging|短彩邮件消息|
|OAuth|登录授权|
|Payment|支付|
|Push|消息推送|
|Share|社交分享|
|Speech|语音识别|
|SQLite|SQLite数据库|
|Statistic|统计|
|VideoPlayer|视频播放|

**注意**
- 仅App云打包生效。本地打包需自行在原生工程中配置。

#### App Distribute@distribute

|属性|类型|描述|
|:-|:-|:-|
|android|Object|Android 应用配置，详见: [完整 manifest.json](/collocation/manifest?id=android)|
|ios|Object|iOS 应用配置，详见: [完整 manifest.json](/collocation/manifest?id=ios)|
|sdkConfigs|Object|SDK配置，仅打包生效 [详见](/collocation/manifest?id=sdkConfigs)|
|orientation|Array|同 screenOrientation 配置，仅打包生效，已废弃，推荐使用 screenOrientation|

#### App Android@android  
App-Android平台云端打包相关配置

|属性|类型|描述|  
|:-|:-|:-|
|packagename|String|Android平台云端打包的包名|
|keystore|String|Android平台云端打包使用的签名证书文件路径|
|password|String|Android平台云端打包使用的签名证书的密码，要求证书存储密码和证书密码相同|
|aliasname|String|Android平台遇到你打包使用的证书别名|
|schemes|String|Android平台App注册的scheme，多个scheme使用“,”分割，详情参考：[Android平台设置UrlSchemes](https://uniapp.dcloud.io/tutorial/app-android-schemes)|
|abiFilters|Array|Android平台App支持的cpu类型，详情参考：[Android平台设置CPU类型](https://uniapp.dcloud.io/tutorial/app-android-abifilters)|
|permissions|Array|Android平台App使用的权限|
|custompermissions|Boolean|是否自定义Android权限配置|
|permissionExternalStorage|Object|Android平台应用启动时申请读写手机存储权限策略配置，详情参考：[Android平台应用启动时读写手机存储权限策略](https://ask.dcloud.net.cn/article/36549)，支持request、prompt属性|
|permissionPhoneState|Object|Android平台应用启动时申请读取设备信息权限配置，详情参考：[Android平台应用启动时访问设备信息(如IMEI)权限策略](https://ask.dcloud.net.cn/article/36549)，支持request、prompt属性|
|minSdkVersion|String|Android平台最低支持版本，详情参考：[Android平台设置minSdkVersion](https://uniapp.dcloud.io/tutorial/app-android-minsdkversion)|
|targetSdkVersion|String|Android平台目标版本，详情参考：[Android平台设置targetSdkVersion](https://uniapp.dcloud.io/tutorial/app-android-targetsdkversion)|
|packagingOptions|Array|Android平台云端打包时build.gradle的packagingOptions配置项，示例："packagingOptions": ["doNotStrip '*/armeabi-v7a/*.so'","merge '**/LICENSE.txt'"]|
|jsEngine|String|uni-app使用的JS引擎，可取值v8、jsc，**将废弃，后续不再支持jsc引擎**|
|debuggable|Boolean|是否开启Android调试开关|
|locale|String|应用的默认语言|
|forceDarkAllowed|Boolean|是否强制允许暗黑模式|
|resizeableActivity|Boolean|是否支持分屏调整窗口大小|
|hasTaskAffinity|Boolean|是否设置android：taskAffinity|
|buildFeatures|Object|Android平台云端打包时build.gradle的buildFeatures配置项，[详见](/collocation/manifest?id=buildFeatures)|

##### buildFeatures@buildFeatures  
Android平台云端打包时build.gradle的buildFeatures配置项，支持的属性参考：[Android官方文档](https://developer.android.google.cn/reference/tools/gradle-api/7.1/com/android/build/api/dsl/BuildFeatures?hl=en)，如下示例源码：  
```json  
"buildFeatures": {
    "dataBinding": true,  //开启dataBinding
    "viewBinding": true   //开启viewBinding
}
```

#### App iOS@ios
iOS平台云端打包相关配置

|属性|类型|描述|  
|:-|:-|:-|
|appid|String|iOS平台云端打包使用的Bundle ID|
|mobileprovision|String|iOS平台云端打包使用的profile文件路径|
|p12|String|iOS平台云端打包使用的证书文件路径|
|password|String|iOS打包使用的证书密码|
|devices|String|iOS支持的设备类型，可取值iphone（仅支持iPhone设备）、ipad（仅支持iPad设备）、universal（同时支持iPhone和iPad设备）|
|urlschemewhitelist|String|应用访问白名单列表，多个白名单使用“,”分割，详情参考：[iOS设置应用访问白名单](https://uniapp.dcloud.io/tutorial/app-ios-schemewhitelist)|
|urltypes|String|Android平台App注册的scheme，多个scheme使用“,”分割，详情参考：[iOS设置应用UrlSchemes](https://uniapp.dcloud.io/tutorial/app-ios-schemes)|
|UIBackgroundModes|Array|应用后台运行模式，详情参考：[iOS设置应用后台运行能力](https://uniapp.dcloud.io/tutorial/app-ios-uibackgroundmodes)|
|frameworks|Array|依赖的系统库，**已废弃，推荐使用uni原生插件扩展使用系统依赖库**|
|deploymentTarget|String|iOS支持的最低版本|
|privacyDescription|Object|iOS隐私信息访问的许可描述|
|idfa|Boolean|是否使用广告标识|
|capabilities|Object|应用的能力配置（Capabilities）|
|CFBundleName|String|应用的CFBundleName名称，默认值为HBuilder|
|validArchitectures|Array|编译时支持的CPU指令，可取值arm64、arm64e、armv7、armv7s、x86_64|

#### App SdkConfigs@sdkConfigs

三方原生SDK配置。三方SDK的使用需要向这些SDK提供商申请，并配置参数到此处。可在HBuilderX可视化界面（App SDK配置）输入配置，此配置仅**云打包后生效**，本地打包需自行在原生工程中配置。

|属性|类型|描述|
|:-|:-|:-|
|oauth|Object|授权登录，配置后可调用 [uni.login](/api/plugins/login?id=login) 进行登录操作，目前支持的授权登录平台有：[QQ](http://open.qq.com/)、[微信](https://open.weixin.qq.com/)、[新浪微博](http://open.weibo.com/)。|
|share|Object|分享，配置后可调用 [uni.share](/api/plugins/share?id=share) 进行分享，目前支持QQ、微信、新浪微博等分享， 具体配置 [详见](/api/plugins/share?id=app-端各平台分享配置说明)。|
|push|Object|push配置，使用方式 [详见](/unipush)，目前支持：[uniPush](http://ask.dcloud.net.cn/article/35716)、[个推](http://www.igetui.com/)，注意App仅支持一种 push 方式，配置多个 push 无效，建议使用 uniPush，支持多厂商推送。|
|payment|Object|三方支付配置，配置后可调用 [uni.payment](/api/plugins/payment?id=payment) 进行支付，目前支持微信支付、支付宝支付、苹果内购， 具体配置 [详见](/api/plugins/payment?id=uni-app-app-平台支付流程)。|
|statics|Object|统计配置，目前仅支付友盟统计，[详见](/tutorial/app-statistic)，在uni-app中只用 [plus.statistic](http://www.html5plus.org/doc/zh_cn/statistic.html) 进行调用。|
|speech|Object|语音识别配置，支持讯飞语音、百度语音，[详见](/tutorial/app-speech)，在uni-app中只用 [plus.speech](http://www.html5plus.org/doc/zh_cn/speech.html) 进行调用。|
|maps|Object|原生地图配置，目前仅支持 [高德地图](http://lbs.amap.com/)，申请方式可参考：[地图插件配置](/tutorial/app-maps)。|

#### optimization@app-vue-optimization

可以减轻启动时加载的js数量，提升启动速度。

从uni-app 2.7.12+ 开始，App-vue平台也兼容了小程序的分包配置，但默认并不开启。

在manifest配置以下节点，可以在App端启动分包。

|属性|类型|说明|
|:-|:-|:-|
|subPackages|Boolean|是否开启分包优化|

```
"app-plus": {
  "optimization": {
    "subPackages": true
  },
  "runmode" : "liberate" // 开启分包优化后，必须配置资源释放模式
}
```

在manifest中启动分包后，需要在pages.json中配置具体的分包规则，与小程序的配置相同，详见：[https://uniapp.dcloud.io/collocation/pages?id=subpackages](https://uniapp.dcloud.io/collocation/pages?id=subpackages)

也就是一旦在pages.json里配置分包，小程序一定生效，而app是否生效，取决于manifest里是否开启。

注意: 
* App开启分包后，每个分包单独编译成一个js文件(都包含在app内，不会联网下载)，当App首页是vue时，可减小启动加载文件大小，提升启动速度。
* 首页是nvue时，分包不会提升启动速度，nvue本身启动速度就快于vue，也快于开启分包后的首页为vue的应用。如果追求极致启动速度，还是应该使用nvue做首页并在manifest开启fast模式。
* App页面较少时，分包对启动速度的优化不明显。


#### nvue@nvue
`nvue` 页面布局初始设置

|属性|类型|描述|
|:-|:-|:-|
|flex-direction|String| flex 成员项的排列方向，支持项，row：从左到右； row-reverse：从右到左；column：从上到下；column-reverse：与 column 相反，默认值 column。|


### h5
|属性|类型|说明|
|:-|:-|:-|
|title|String|页面标题，默认使用 manifest.json 的 name|
|template|String|index.html模板路径，相对于应用根目录，可定制生成的 html 代码。参考：[自定义模板](/collocation/manifest?id=h5-template)|
|router|Object|参考：[router](/collocation/manifest?id=h5-router)|
|async|Object|参考：[async](/collocation/manifest?id=h5-async)|
|devServer|Object|开发环境 server 配置，参考：[devServer](/collocation/manifest?id=devserver)|
|publicPath|String|引用资源的地址前缀，仅发布时生效。参考：[publicPath](/collocation/manifest?id=publicPath)|
|sdkConfigs|String|SDK配置，例如地图...  参考：[sdkConfigs](/collocation/manifest?id=h5sdkconfig)|
|optimization|Object|打包优化配置（HBuilderX 2.1.5 以上支持），参考[optimization](/collocation/manifest?id=optimization)|
|uniStatistics|Object|[H5 是否开启 uni 统计，配置方法同全局配置](/collocation/manifest?id=uniStatistics)||

#### 自定义模板@h5-template
需要使用自定义模板的场景，通常有以下几种情况：

- 调整页面 head 中的 meta 配置
- 补充 SEO 相关的一些配置（仅首页）
- 加入百度统计等三方js

使用自定义模板时，1. 工程根目录下新建一个html文件；2. 复制下面的基本模板内容，到这个html文件，在此基础上修改meta和引入js；3. 在 `manifest.json->h5->template` 节点中关联这个html文件的路径。
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

**关于SEO的补充说明**

H5平台是SPA单页应用，普通的SEO信息即加meta字段只能在，自定义的模板html里配置首页。

但SEO的时代在变，现在更有效的方式，使用uni-app同时发布一版百度小程序，这个搜索权重更高。DCloud的ask社区的H5版也是uni-app做的，同时发布了百度小程序，权重更高，每天来自百度的搜索量非常多。是一个可现身说法的好案例。

#### router@h5-router
|属性|类型|默认值|说明|
|:-|:-|:-|:-|
|mode|String|hash|路由跳转模式，支持 hash、history|
|base|String|/|应用基础路径，例如，如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 "/app/"，支持设置为相对路径 "./"|

**注意：**

* `history` 模式部分浏览器器不支持，iOS微信内置浏览器无法观测到URL变动，默认分享（不使用微信[JSSDK](https://ask.dcloud.net.cn/article/35380)的情况下）的链接为入口页链接。
* `history` 模式发行需要后台配置支持，详见：[history 模式的后端配置](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90)

#### async@h5-async
|属性|类型|默认值|说明|
|:-|:-|:-|:-|
|loading|String|AsyncLoading|页面 js 加载时使用的组件（需注册为全局组件）|
|error|String|AsyncError|页面 js 加载失败时使用的组件（需注册为全局组件）|
|delay|Number|200|展示 loading 加载组件的延时时间（页面 js 若在 delay 时间内加载完成，则不会显示 loading 组件）|
|timeout|Number|60000|页面 js 加载超时时间（超时后展示 error 对应的组件）|

#### devServer
|属性|类型|默认值|说明|
|:-|:-|:-|:-|
|https|Boolean|false|启用 https 协议|
|disableHostCheck|Boolean|false|禁用 Host 检查|

Tips：`uni-app` 中 `manifest.json->h5->devServer` 实际上对应 `webpack` 的 [devServer](https://webpack.js.org/configuration/dev-server/)，鉴于 manifest 为 json 文件，故 `webpack.config.js->devServer` 配置项下的简单类型属性均可在`manifest.json->h5->devServer`节点下配置，funciton 等复杂类型暂不支持。

#### publicPath
配置 publicPath 为 cdn 资源地址前缀，这样编译出来的 html 文件，引用的 js，css 路径会自动变成 cdn 上的地址。

注意：如果想对图片生效，image组件的图片地址需要使用相对路径

**示例**

以 hello-uniapp 发布 H5 时为例

未配置 publicPath 时，发布时 index.html 中的结果：

```html
<script src=/h5/static/js/chunk-vendors.803ce52d.js></script>
<script src=/h5/static/js/index.34e8497d.js>
```
配置 publicPath 为 `https://www.cdn.com/h5/`（无效地址仅用作示例） 后，发布时 index.html 中的结果：

```html
<script src=https://www.cdn.com/h5/static/js/chunk-vendors.803ce52d.js></script>
<script src=https://www.cdn.com/h5/static/js/index.34e8497d.js>
```

**注意**
- 打包部署后，在服务器上开启 gzip 可以进一步压缩文件。具体的配置，可以参考网上的分享：https://juejin.im/post/5af003286fb9a07aac24611b

#### sdkconfig@h5sdkconfig

三方SDK配置。三方SDK的使用需要向这些SDK提供商申请，并配置参数到此处。可在HBuilderX可视化界面（H5 配置）输入配置。

|属性|类型|描述|
|:-|:-|:-|
|maps|Object|地图或位置相关SDK|

#### maps@h5sdkconfigmaps

地图服务商 SDK 配置，使用地图以及位置（IP 定位及坐标转换）需要配置此项。

**示例**

```json
"h5": {
	"sdkConfigs": {
		// 使用地图或位置相关功能必须填写其一
		"maps": {
			"qqmap": {
				// 腾讯地图秘钥 https://lbs.qq.com/dev/console/key/manage
				"key": ""
			},
			"google": {
				// 谷歌地图秘钥（HBuilderX 3.2.10+）https://developers.google.com/maps/documentation/javascript/get-api-key
				"key": ""
			}
		}
	}
}
```

#### optimization

|属性|类型|默认值|说明|
|:-|:-|:-|:-|
|prefetch|Boolean|false|资源预取|
|preload|Boolean|false|资源预加载|
|treeShaking|Object||摇树优化，根据项目需求，动态打包框架所需的组件及API，保持框架代码最精简化，参考[treeShaking](/collocation/manifest?id=treeshaking)|

##### treeShaking

|属性|类型|默认值|说明|
|:-|:-|:-|:-|
|enable|Boolean|false|是否启用摇树优化|

**示例：**
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

### mp-weixin

|属性|类型|说明|
|:-|:-|:-|
|appid|String|微信小程序的AppID，登录 [https://mp.weixin.qq.com](https://mp.weixin.qq.com) 申请|
|setting|Object|微信小程序项目设置，参考[setting](/collocation/manifest?id=setting)|
|functionalPages|Boolean|微信小程序是否启用插件功能页，默认关闭|
|requiredBackgroundModes|Array|微信小程序需要在后台使用的能力,[详见](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#requiredbackgroundmodes)|
|plugins|Object|使用到的插件，[详见](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/using.html)|
|resizable|Boolean|在iPad上小程序是否支持屏幕旋转，默认关闭|
|navigateToMiniProgramAppIdList|Array|需要跳转的小程序列表，[详见](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/miniprogram-navigate/wx.navigateToMiniProgram.html)|
|permission|Object|微信小程序接口权限相关设置，比如申请位置权限必须填此处[详见](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html)|
|workers|String|Worker 代码放置的目录。 [详见](https://developers.weixin.qq.com/miniprogram/dev/framework/workers.html)|
|optimization|Object| 对微信小程序的优化配置 |
|cloudfunctionRoot|String| 配置云开发目录，参考[setting](/collocation/manifest?id=cloudfunctionRoot)|
|uniStatistics|Object|[微信小程序是否开启 uni 统计，配置方法同全局配置](/collocation/manifest?id=uniStatistics)|
|scopedSlotsCompiler|String|Vue2 作用域插槽编译模式，uni-app 3.1.19+ 开始支持，可选：legacy、auto、augmented，默认：auto|
|mergeVirtualHostAttributes|Boolean|合并组件[虚拟节点](/tutorial/vue-api.html#%E5%85%B6%E4%BB%96%E9%85%8D%E7%BD%AE)外层属性（目前仅支持 style、class 属性），uni-app 3.5.0+ 开始支持（目前仅 Vue2 支持）|
|embeddedAppIdList|Array|要半屏跳转的小程序appid。[详见](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html)|
|requirePrivateInfos|Array|地理位置相关接口。[详见](https://developers.weixin.qq.com/community/develop/doc/000a02f2c5026891650e7f40351c01)|


#### setting

编译到微信小程序平台下的项目设置。

|属性|类型|说明|
|:-|:-|:-|
|urlCheck|Boolean|是否检查安全域名和 TLS 版本|
|es6|Boolean|ES6 转 ES5|
|postcss|Boolean|上传代码时样式是否自动补全|
|minified|Boolean|上传代码时是否自动压缩|

#### optimization

对微信小程序的优化配置

|属性|类型|说明|
|:-|:-|:-|
|subPackages|Boolean|是否开启分包优化|

#### cloudfunctionRoot

如果需要使用微信小程序的云开发，需要在 mp-weixin 配置云开发目录

```javascript
"mp-weixin":{
  // ...
   "cloudfunctionRoot": "cloudfunctions/", // 配置云开发目录
  // ...
}
```

配置目录之后，需要在项目根目录新建 `vue.config.js` 配置对应的文件编译规则

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

|属性									|类型		|说明																																																										|
|:-										|:-			|:-																																																											|
|plugins							|Object	|使用到的插件，[详见](https://opendocs.alipay.com/mini/plugin/plugin-usage)																							|
|component2						|Boolean| 是否启用 `component2` 编译，默认为true，[查看详情](https://docs.alipay.com/mini/framework/custom-component-overview)	|
|enableAppxNg         |Boolean| 是否启用 `enableAppxNg` 小程序基础库 2.x 构建，默认为true，[查看详情](https://opendocs.alipay.com/mini/framework/project)，HBuilderX 3.2.10+ |
|axmlStrictCheck			|Boolean| 是否启用 `axml` 严格语法检查，默认为false																																							|
|enableParallelLoader	|Boolean| 是否启用多进程编译，默认为false																																												|
|enableDistFileMinify	|Boolean| 是否压缩编译产物（仅在真机预览/真机调试时生效），默认为false																													|
|uniStatistics				|Object	|[支付宝小程序是否开启 uni 统计，配置方法同全局配置](/collocation/manifest?id=uniStatistics)														|
|scopedSlotsCompiler|String|Vue2 作用域插槽编译模式，uni-app 3.1.19+ 开始支持，可选：legacy、auto、augmented，默认：auto|
|mergeVirtualHostAttributes|Boolean|合并组件节点外层属性（目前仅支持 style、class 属性），uni-app 3.5.0+ 开始支持（目前仅 Vue2 支持）|

### mp-baidu

|属性|类型|说明|
|:-|:-|:-|
|appid|String|百度小程序的 AppID，登录 [https://smartprogram.baidu.com/docs/introduction/enter_application/](https://smartprogram.baidu.com/docs/introduction/enter_application/) 申请|
|requiredBackgroundModes|Array|小程序需要在后台使用的能力，目前支持背景音频播放，"requiredBackgroundModes": ["audio"]，[详见](https://smartprogram.baidu.com/docs/develop/tutorial/process/#requiredBackgroundModes)	|
|prefetches|Array|预请求的所有url的列表，[详见](https://smartprogram.baidu.com/docs/develop/tutorial/process/#prefetches)																|
|optimization|Object| 对百度小程序的优化配置 |
|uniStatistics|Object|[百度小程序是否开启 uni 统计，配置方法同全局配置](/collocation/manifest?id=uniStatistics)|
|scopedSlotsCompiler|String|Vue2 作用域插槽编译模式，uni-app 3.1.19+ 开始支持，可选：legacy、auto、augmented，默认：auto|

#### optimization

对百度小程序的优化配置

|属性|类型|说明|
|:-|:-|:-|
|subPackages|Boolean|是否开启分包优化|

### mp-toutiao

|属性|类型|说明|
|:-|:-|:-|
|appid|String|字节跳动小程序的 AppID，登录 [https://developer.toutiao.com/](https://developer.toutiao.com/) 申请|
|setting|Object|字节跳动小程序项目设置，参考[字节跳动小程序项目设置](/collocation/manifest?id=mp-toutiao-setting)|
|navigateToMiniProgramAppIdList	|Array|需要跳转的小程序列表，[详见](https://developer.toutiao.com/dev/cn/mini-app/develop/framework/basic-reference/general-configuration)	|
|uniStatistics|Object|[字节跳动小程序是否开启 uni 统计，配置方法同全局配置](/collocation/manifest?id=uniStatistics)|
|scopedSlotsCompiler|String|Vue2 作用域插槽编译模式，uni-app 3.1.19+ 开始支持，可选：legacy、auto、augmented，默认：auto|

#### 字节跳动小程序项目设置@mp-toutiao-setting

|属性|类型|说明|
|:-|:-|:-|
|urlCheck|Boolean|是否检查安全域名和 TLS 版本|
|es6|Boolean|ES6 转 ES5|
|postcss|Boolean|上传代码时样式是否自动补全|
|minified|Boolean|上传代码时是否自动压缩|

### mp-lark

|属性|类型|说明|
|:-|:-|:-|
|appid|String|飞书小程序的 AppID，登录 [https://open.feishu.cn](https://open.feishu.cn) 申请|
|setting|Object|飞书小程序项目设置，参考[飞书小程序项目设置](/collocation/manifest?id=mp-lark-setting)|
|uniStatistics|Object|[飞书小程序是否开启 uni 统计，配置方法同全局配置](/collocation/manifest?id=uniStatistics)|
|scopedSlotsCompiler|String|Vue2 作用域插槽编译模式，uni-app 3.1.19+ 开始支持，可选：legacy、auto、augmented，默认：auto|

#### 飞书小程序项目设置@mp-lark-setting

|属性|类型|说明|
|:-|:-|:-|
|urlCheck|Boolean|是否检查安全域名和 TLS 版本|
|es6|Boolean|ES6 转 ES5|
|postcss|Boolean|上传代码时样式是否自动补全|
|minified|Boolean|上传代码时是否自动压缩|

### mp-qq

|属性							|类型			|说明																																												|
|:-								|:-				|:-																																													|
|appid							|String			|qq 小程序的 AppID，登录 [https://q.qq.com](https://q.qq.com) 申请																													|
|requiredBackgroundModes		|Array			|小程序需要在后台使用的能力，目前支持背景音频播放，"requiredBackgroundModes": ["audio"]，[详见](https://q.qq.com/wiki/develop/miniprogram/frame/dispose.html#requiredbackgroundmodes)	|
|navigateToMiniProgramAppIdList	|Array			|需要跳转的小程序列表，[详见](https://q.qq.com/wiki/develop/miniprogram/frame/dispose.html#navigatetominiprogramappidlist)																|
|permission						|Object			|小程序接口权限相关设置，比如申请位置权限必须填此处[详见](https://q.qq.com/wiki/develop/miniprogram/frame/dispose.html#permission)														|
|workers						|String			|Worker 代码放置的目录。 [详见](https://q.qq.com/wiki/develop/miniprogram/frame/dispose.html#workers)																					|
|groupIdList					|String Array	|需要打开群资料卡的群号列表，详见button的open-type																																		|
|optimization|Object| 对QQ小程序的优化配置 |
|uniStatistics|Object|[QQ小程序是否开启 uni 统计，配置方法同全局配置](/collocation/manifest?id=uniStatistics)|
|scopedSlotsCompiler|String|Vue2 作用域插槽编译模式，uni-app 3.1.19+ 开始支持，可选：legacy、auto、augmented，默认：auto|

#### optimization

对QQ小程序的优化配置

|属性|类型|说明|
|:-|:-|:-|
|subPackages|Boolean|是否开启分包优化|

### mp-kuaishou

|属性|类型|说明|
|:-|:-|:-|
|appid|String|快手小程序的 AppID，登录 [https://mp.kuaishou.com](https://mp.kuaishou.com) 申请|
|uniStatistics|Object|[快手小程序是否开启 uni 统计，配置方法同全局配置](/collocation/manifest?id=uniStatistics)|
|scopedSlotsCompiler|String|Vue2 作用域插槽编译模式，uni-app 3.1.19+ 开始支持，可选：legacy、auto、augmented，默认：augmented|

### 关于分包优化的说明

- 在对应平台的配置下添加`"optimization":{"subPackages":true}`开启分包优化
- 目前只支持`mp-weixin`、`mp-qq`、`mp-baidu`、`mp-toutiao`的分包优化
- 分包优化具体逻辑：
  + 静态文件：分包下支持 static 等静态资源拷贝，即分包目录内放置的静态资源不会被打包到主包中，也不可在主包中使用
  + js文件：当某个 js 仅被一个分包引用时，该 js 会被打包到该分包内，否则仍打到主包（即被主包引用，或被超过 1 个分包引用）
  + 自定义组件：若某个自定义组件仅被一个分包引用时，且未放入到分包内，编译时会输出提示信息

**分包内静态文件示例**

```json
"subPackages": [{
	"root": "pages/sub",
	"pages": [{
		"path": "index/index"
	}]
}]
```

以上面的分包为例，放在每个分包root对应目录下的静态文件会被打包到此分包内。

### 快应用@quickapp-webview

|属性							 |类型			|说明|
|:-								 |:-			|:-|
|icon							 |String	|应用图标，华为推荐 192x192|
|package					 |String	|应用包名|
|minPlatformVersion|Number	|最小平台运行支持(华为最低 1070，vivo 1063)|
|versionName			 |String	|版本名称|
|versionCode			 |Number	|版本号|


**manifest.json配置**
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

### 完整 manifest.json@full-manifest

```javascript
{
    "appid": "__UNI__XXXXXX，创建应用时云端分配的，不要修改。",
    "name": "应用名称，如uni-app",
    "description": "应用描述",
    "versionName": "1.0.0",
    "versionCode": "100",
    "uniStatistics": {
        "enable": false
    },
    "app-plus": {
        "nvueCompiler": "weex",         //可选，字符串类型，nvue页面编译模式，可取值uni-app、weex，参考：https://ask.dcloud.net.cn/article/36074
        "nvueStyleCompiler": "weex",    //可选，字符串类型，nvue页面样式编译模式，可取值uni-app、weex，参考：https://ask.dcloud.net.cn/article/38751
        "renderer": "native",           //可选，字符串类型，可不加载基于 webview 的运行框架，可取值native
        "compilerVersion": 2,           //可选，数字类型，编译器版本，可取值2、3，参考：https://ask.dcloud.net.cn/article/36599
        "nvueLaunchMode": "normal",     //可选，字符串类型，nvue首页启动模式，compilerVersion值为3时生效，可取值normal、fast，参考：https://ask.dcloud.net.cn/article/36749
        "nvue": {                       //可选，JSON对象，nvue页面相关配置
            "flex-direction": "row"             //可选，字符串类型，nvue页面的flex-direction默认值，可取值row、row-reverse、column、column-reverse
        },
        "optimization": {               //可选，JSON对象，分包配置
            "subPackages": true                 //可选，Boolean类型，是否开启分包优化，参考：https://uniapp.dcloud.io/collocation/pages.html#subpackages
        },
        "uniStatistics": {              //可选，JSON对象，uni统计配置
            "enable": true,                     //可选，Boolean类型，是否开启uni统计
        },
        "screenOrientation": [          //可选，字符串数组类型，应用支持的横竖屏
            "portrait-primary",                 //可选，字符串类型，支持竖屏
            "portrait-secondary",               //可选，字符串类型，支持反向竖屏
            "landscape-primary",                //可选，字符串类型，支持横屏
            "landscape-secondary"               //可选，字符串类型，支持反向横屏
        ],
        "splashscreen": {               //可选，JSON对象，splash界面配置
            "alwaysShowBeforeRender": true,     //可选，Boolean类型，是否等待首页渲染完毕后再关闭启动界面
            "autoclose": true,                  //可选，Boolean类型，是否自动关闭启动界面
            "waiting": true,                    //可选，Boolean类型，是否在程序启动界面显示等待雪花
            "event": "loaded",                  //可选，字符串类型，可取值titleUpdate、rendering、loaded，uni-app项目已废弃
            "target": "defalt",                 //可选，字符串类型，可取值default、second，uni-app项目已废弃
            "dealy": 0,                         //可选，数字类型，延迟自动关闭启动时间，单位为毫秒，uni-app项目已废弃
            "ads": {                            //可选，JSON对象，开屏广告配置
                "backaground": "#RRGGBB",               //可选，字符串类型，格式为#RRGGBB，开屏广告背景颜色
                "image": ""                             //可选，字符串类型，底部图片地址，相对应用资源目录路径
            },
            "androidTranslucent": false         //可选，Boolean类型，使用“自定义启动图”启动界面时是否显示透明过渡界面，可解决点击桌面图标延时启动应用的效果
        },
        "modules": {                    //可选，JSON对象，使用的模块
            "Bluetooth": {                      //可选，JSON对象，Bluetooth(低功耗蓝牙)
                "description": "低功耗蓝牙"
            },
            "Contacts": {                       //可选，JSON对象，Contact(通讯录)
                "description": "通讯录"
            },
            "FaceID": {                         //可选，JSON对象，FaceID(人脸识别)，仅iOS支持
                "description": "人脸识别"
            },
            "Fingerprint": {                    //可选，JSON对象，Fingerprint(指纹识别)
                "description": "指纹识别"
            },
            "Geolocation": {                    //可选，JSON对象，Geolocation(定位)
                "description": "定位"
            },
            "iBeacon": {                        //可选，JSON对象，iBeacon
                "description": "iBeacon"
            },
            "LivePusher": {                     //可选，JSON对象，LivePusher(直播推流)
                "description": "直播推流"
            },
            "Maps": {                           //可选，JSON对象，Maps(地图)
                "description": "地图"
            },
            "Messaging": {                      //可选，JSON对象，Messaging(短彩邮件消息)
                "description": "短彩邮件消息"
            },
            "OAuth": {                          //可选，JSON对象，OAuth(登录鉴权)
                "description": "登录鉴权"
            },
            "Payment": {                        //可选，JSON对象，Payment(支付)
                "description": "iBeacon"
            },
            "Push": {                           //可选，JSON对象，Push(消息推送)
                "description": "iBeacon"
            },
            "Share": {                          //可选，JSON对象，Share(分享)
                "description": "iBeacon"
            },
            "Speech": {                         //可选，JSON对象，Speech(语音输入)
                "description": "iBeacon"
            },
            "Statistic": {                      //可选，JSON对象，Statistic(统计)
                "description": "iBeacon"
            },
            "SQLite": {                         //可选，JSON对象，SQLite(统计)
                "description": "iBeacon"
            },
            "VideoPlayer": {                    //可选，JSON对象，VideoPlayer(视频播放)
                "description": "iBeacon"
            },
            "Webview-x5": {                     //可选，JSON对象，Android X5 Webview(腾讯TBS)，仅Android支持
                "description": "iBeacon"
            },
            "UIWebview": {                      //可选，JSON对象，UIWebview，仅iOS支持
                "description": "iBeacon"
            }
        },
        "webView": { // 3.5.0 + 当系统webview低于指定版本时，会弹出提示。或者下载x5内核后继续启动，仅Android支持
          "minUserAgentVersion": "95.0.4638.75", // 最小webview版本
          "x5": { // 此属性需要勾选 Android X5 Webview 模块，详细参见下面的说明
            "timeOut": 3000, // 超时时间
            "showTipsWithoutWifi": true, // 是否在非WiFi网络环境时，显示用户确认下载x5内核的弹窗。
            "allowDownloadWithoutWiFi": false // 是否允许用户在非WiFi网络时进行x5内核的下载。（如果为true，就不会显示用户确认的弹窗。）
          }
        },
        "distribute": {      //必选，JSON对象，云端打包配置
            "android": {            //可选，JSON对象，Android平台云端打包配置
                "packagename": "",          //必填，字符串类型，Android包名
                "keystore": "",             //必填，字符串类型，Android签名证书文件路径
                "password": "",             //必填，字符串类型，Android签名证书文件的密码
                "aliasname": "",            //必填，字符串类型，Android签名证书别名
                "schemes": "",              //可选，字符串类型，参考：https://uniapp.dcloud.io/tutorial/app-android-schemes
                "abiFilters": [             //可选，字符串数组类型，参考：https://uniapp.dcloud.io/tutorial/app-android-abifilters
                    "armeabi-v7a",
                    "arm64-v8a",
                    "x86",
                    "x86_64"
                ],
                "permissions": [                //可选，字符串数组类型，Android权限配置
                    "<uses-feature android:name=\"android.hardware.camera\"/>"
                ],
                "custompermissions": false,     //可选，Boolean类型，是否自定义Android权限配置
                "permissionExternalStorage": {  //可选，JSON对象，Android平台应用启动时申请读写手机存储权限策略
                    "request": "always",                //必填，字符串类型，申请读写手机存储权限策略，可取值none、once、always
                    "prompt": ""                        //可选，字符串类型，当request设置为always值用户拒绝时弹出提示框上的内容
                },
                "permissionPhoneState": {       //可选，JSON对象，Android平台应用启动时申请读取设备信息权限配置
                    "request": "always",                //必填，字符串类型，申请读取设备信息权限策略，可取值none、once、always
                    "prompt": ""                        //可选，字符串类型，当request设置为always值用户拒绝时弹出提示框上的内容
                },
                "minSdkVersion": 21,            //可选，数字类型，Android平台最低支持版本，参考：https://uniapp.dcloud.io/tutorial/app-android-minsdkversion
                "targetSdkVersion": 30,         //可选，数字类型，Android平台目标版本，参考：https://uniapp.dcloud.io/tutorial/app-android-targetsdkversion
                "packagingOptions": [           //可选，字符串数组类型，Android平台云端打包时build.gradle的packagingOptions配置项
                    "doNotStrip '*/armeabi-v7a/*.so'",
                    "merge '**/LICENSE.txt'"
                ],
                "jsEngine": "v8",               //可选，字符串类型，uni-app使用的JS引擎，可取值v8、jsc
                "debuggable": false,            //可选，Boolean类型，是否开启Android调试开关
                "locale": "default",            //可选，应用的语言
                "forceDarkAllowed": false,      //可选，Boolean类型，是否强制允许暗黑模式
                "resizeableActivity": false,    //可选，Boolean类型，是否支持分屏调整窗口大小
                "hasTaskAffinity": false,       //可选，Boolean类型，是否设置android：taskAffinity
                "buildFeatures": {              //（HBuilderX3.5.0+版本支持）可选，JSON对象，Android平台云端打包时build.gradle的buildFeatures配置项  
                    "dataBinding": false,           //可选，Boolean类型，是否设置dataBinding
                    "viewBinding": false            //可选，Boolean类型，是否设置viewBinding
                }
            },
            "ios": {                //可选，JSON对象，iOS平台云端打包配置
                "appid": "",                    //必填，字符串类型，iOS平台Bundle ID
                "mobileprovision": "",          //必填，字符串类型，iOS打包使用的profile文件路径
                "p12": "",                      //必填，字符串类型，iOS打包使用的证书文件路径
                "password": "",                 //必填，字符串类型，iOS打包使用的证书密码
                "devices": "iphone",            //必填，字符串类型，iOS支持的设备类型，可取值iphone、ipad、universal
                "urlschemewhitelist": "baidumap",//可选，字符串类型，应用访问白名单列表，参考：https://uniapp.dcloud.io/tutorial/app-ios-schemewhitelist
                "urltypes": "",                 //可选，字符串类型，参考：https://uniapp.dcloud.io/tutorial/app-ios-schemes
                "UIBackgroundModes": "audio",   //可选，字符串类型，应用后台运行模式，参考：https://uniapp.dcloud.io/tutorial/app-ios-uibackgroundmodes
                "frameworks": [                 //可选，字符串数组类型，依赖的系统库，已废弃，推荐使用uni原生插件扩展使用系统依赖库
                    "CoreLocation.framework"
                ],
                "deploymentTarget": "10.0",     //可选，字符串类型，iOS支持的最低版本
                "privacyDescription": {         //可选，JSON对象，iOS隐私信息访问的许可描述
                    "NSPhotoLibraryUsageDescription": "",                       //可选，字符串类型，系统相册读取权限描述
                    "NSPhotoLibraryAddUsageDescription": "",                    //可选，字符串类型，系统相册写入权限描述
                    "NSCameraUsageDescription": "",                             //可选，字符串类型，摄像头使用权限描述
                    "NSMicrophoneUsageDescription": "",                         //可选，字符串类型，麦克风使用权限描述
                    "NSLocationWhenInUseUsageDescription": "",                  //可选，字符串类型，运行期访问位置权限描述
                    "NSLocationAlwaysUsageDescription": "",                     //可选，字符串类型，后台运行访问位置权限描述
                    "NSLocationAlwaysAndWhenInUseUsageDescription": "",         //可选，字符串类型，运行期后后台访问位置权限描述
                    "NSCalendarsUsageDescription": "",                          //可选，字符串类型，使用日历权限描述
                    "NSContactsUsageDescription": "",                           //可选，字符串类型，使用通讯录权限描述
                    "NSBluetoothPeripheralUsageDescription": "",                //可选，字符串类型，使用蓝牙权限描述
                    "NSBluetoothAlwaysUsageDescription": "",                    //可选，字符串类型，后台使用蓝牙权限描述
                    "NSSpeechRecognitionUsageDescription": "",                  //可选，字符串类型，系统语音识别权限描述
                    "NSRemindersUsageDescription": "",                          //可选，字符串类型，系统提醒事项权限描述
                    "NSMotionUsageDescription": "",                             //可选，字符串类型，使用运动与健康权限描述
                    "NSHealthUpdateUsageDescription": "",                       //可选，字符串类型，使用健康更新权限描述
                    "NSHealthShareUsageDescription": "",                        //可选，字符串类型，使用健康分享权限描述
                    "NSAppleMusicUsageDescription": "",                         //可选，字符串类型，使用媒体资料库权限描述
                    "NFCReaderUsageDescription": "",                            //可选，字符串类型，使用NFC权限描述
                    "NSHealthClinicalHealthRecordsShareUsageDescription": "",   //可选，字符串类型，访问临床记录权限描述
                    "NSHomeKitUsageDescription": "",                            //可选，字符串类型，访问HomeKit权限描述
                    "NSSiriUsageDescription": "",                               //可选，字符串类型，访问Siri权限描述
                    "NSFaceIDUsageDescription": "",                             //可选，字符串类型，使用FaceID权限描述
                    "NSLocalNetworkUsageDescription": "",                       //可选，字符串类型，访问本地网络权限描述
                    "NSUserTrackingUsageDescription": ""                        //可选，字符串类型，跟踪用户活动权限描述
                },
                "idfa": true,                   //可选，Boolean类型，是否使用广告标识
                "capabilities": {               //可选，JSON对象，应用的能力配置（Capabilities）
                },
                "CFBundleName": "HBuilder",     //可选，字符串类型，CFBundleName名称
                "validArchitectures": [         //可选，字符串数组类型，编译时支持的CPU指令，可取值arm64、arm64e、armv7、armv7s、x86_64
                    "arm64"
                ]
            },
            "sdkConfigs": {         //可选，JSON对象，三方SDK相关配置
                "geolocation": {        //可选，JSON对象，Geolocation(定位)模块三方SDK配置
                    "system": {                     //可选，JSON对象，使用系统定位
                        "__platform__" : [ "ios", "android" ]   //可选，字符串数组类型，支持的平台
                    },
                    "amap": {                           //可选，JSON对象，使用高德定位SDK配置
                        "__platform__" : ["ios", "android"],    //可选，字符串数组类型，支持的平台
                        "appkey_ios": "",                       //必填，字符串类型，iOS平台高德定位appkey
                        "appkey_android": ""                    //必填，字符串类型，Android平台高德定位appkey
                    },
                    "baidu": {                         //可选，JSON对象，使用百度定位SDK配置
                        "__platform__" : [ "ios", "android" ],  //可选，字符串数组类型，支持的平台
                        "appkey_ios": "",                       //必填，字符串类型，iOS平台百度定位appkey
                        "appkey_android": ""                    //必填，字符串类型，Android平台百度定位appkey
                    }
                },
                "maps" : {              //可选，JSON对象，Maps(地图)模块三方SDK配置
                    "amap": {                       //可选，JSON对象，使用高德地图SDK配置
                        "appkey_ios": "",                       //必填，字符串类型，iOS平台高德地图appkey
                        "appkey_android": ""                    //必填，字符串类型，Android平台高德地图appkey
                    },
                    "baidu": {                      //可选，JSON对象，使用百度地图SDK配置
                        "appkey_ios": "",                       //必填，字符串类型，iOS平台百度地图appkey
                        "appkey_android": ""                    //必填，字符串类型，Android平台百度地图appkey
                    },
                    "google": {                     //可选，JSON对象，使用Google地图SDK配置
                        "APIKey_ios": "",                       //必填，字符串类型，iOS平台Google地图APIKey
                        "APIKey_android": ""                    //必填，字符串类型，Android平台Google地图APIKey
                    }
                },
                "oauth": {              //可选，JSON对象，OAuth(登录鉴权)模块三方SDK配置
                    "univerify" : {                 //可选，JSON对象，使用一键登录(univerify)SDK配置，无需手动配置参数，云端打包自动获取配置参数
                    },
                    "apple": {                      //可选，JSON对象，使用苹果登录(Sign in with Apple)SDK配置，无配置参数，仅iOS平台支持
                    },
                    "weixin": {                     //可选，JSON对象，使用微信登录SDK配置
                        "appid": "",                            //必填，字符串类型，微信开放平台申请的appid
                        "appsecret": "",                        //必填，字符串类型，微信开放平台申请的appsecret
                        "UniversalLinks": ""                    //可选，字符串类型，微信开放平台配置的iOS平台通用链接
                    },
                    "qq": {                         //可选，JSON对象，使用QQ登录SDK配置
                        "appid": "",                            //必填，字符串类型，QQ开放平台申请的appid
                        "UniversalLinks": ""                    //可选，字符串类型，QQ开放平台配置的iOS平台通用链接
                    },
                    "sina": {                       //可选，JSON对象，使用新浪微博登录SDK配置
                        "appkey": "",                           //必填，字符串类型，新浪微博开放平台申请的appid
                        "redirect_uri": "",                     //必填，字符串类型，新浪微博开放平台配置的redirect_uri
                        "UniversalLinks": ""                    //可选，字符串类型，新浪微博开放平台配置的iOS平台通用链接
                    },
                    "google": {                     //可选，JSON对象，使用Google登录SDK配置
                        "clientid": ""                          //必填，字符串类型，Google开发者后台申请的clientid
                    },
                    "facebook": {                   //可选，JSON对象，使用Facebook登录SDK配置
                        "appid": ""                             //必填，字符串类型，Facebook开发者后台申请的appid
                    }
                },
                "payment": {            //可选，JSON对象，Payment(支付)模块三方SDK配置
                    "appleiap": {                   //可选，JSON对象，使用Apple应用内支付配置，无配置参数，仅iOS平台支持
                    },
                    "alipay": {                     //可选，JSON对象，使用支付宝支付SDK配置
                        "__platform__": [ "ios", "android" ]    //可选，字符串数组类型，支持的平台
                    },
                    "weixin": {                     //可选，JSON对象，使用微信支付SDK配置
                        "__platform__": [ "ios", "android" ],   //可选，字符串数组类型，支持的平台
                        "appid": "",                            //必填，字符串类型，微信开放平台申请的appid
                        "UniversalLinks": ""                    //可选，字符串类型，微信开放平台配置的iOS平台通用链接
                    },
                    "paypal": {                     //可选，JSON对象，使用paypal支付SDK配置
                        "__platform__": [ "ios", "android" ],   //可选，字符串数组类型，支持的平台
                        "returnURL_ios": "",                    //必填，字符串类型，paypa开发者者后台配置的iOS平台returnURL
                        "returnURL_android": ""                 //必填，字符串类型，paypa开发者者后台配置的Android平台returnURL
                    },
                    "stripe": {                     //可选，JSON对象，使用stripe支付SDK配置
                        "__platform__": [ "ios", "android" ],   //可选，字符串数组类型，支持的平台
                        "returnURL_ios" : ""                    //必填，字符串类型，stripe开发者者后台配置的iOS平台returnURL
                    },
                    "google": {                     //可选，JSON对象，使用google支付SDK配置，无配置参数，仅Android平台支持
                    }
                },
                "push": {               //可选，JSON对象，Push(消息推送)模块三方SDK配置
                    "unipush": {                    //可选，JSON对象，使用UniPush SDK配置，无需手动配置参数，云端打包自动获取配置参数
                        "icons": {                          //可选，JSON对象，推送图标配置
                            "push": {                               //可选，JSON对象，Push图标配置
                                "ldpi": "",                                 //可选，字符串类型，普通屏设备推送图标路径，分辨率要求48x48
                                "mdpi": "",                                 //可选，字符串类型，大屏设备设备推送图标路径，分辨率要求48x48
                                "hdpi": "",                                 //可选，字符串类型，高分屏设备推送图标路径，分辨率要求72x72
                                "xdpi": "",                                 //可选，字符串类型，720P高分屏设备推送图标路径，分辨率要求96x96
                                "xxdpi": "",                                //可选，字符串类型，1080P高密度屏幕推送图标路径，分辨率要求144x144
                                "xxxdpi": "",                               //可选，字符串类型，4K屏设备推送图标路径，分辨率要求192x192
                            },
                            "smal": {                               //可选，JSON对象，Push小图标配置
                                "ldpi": "",                                 //可选，字符串类型，普通屏设备推送小图标路径，分辨率要求18x18
                                "mdpi": "",                                 //可选，字符串类型，大屏设备设备推送小图标路径，分辨率要求24x24
                                "hdpi": "",                                 //可选，字符串类型，高分屏设备推送小图标路径，分辨率要求36x36
                                "xdpi": "",                                 //可选，字符串类型，720P高分屏设备推送小图标路径，分辨率要求48x48
                                "xxdpi": "",                                //可选，字符串类型，1080P高密度屏幕推送小图标路径，分辨率要求72x72
                                "xxxdpi": "",                               //可选，字符串类型，4K屏设备推送小图标路径，分辨率要求96x96
                            }
                        }
                    },
                    "igexin": {                     //可选，JSON对象，使用个推推送SDK配置，**已废弃，推荐使用UniPush，UniPush是个推推送VIP版，功能更强大**
                        "appid": "",                            //必填，字符串类型，个推开放平台申请的appid
                        "appkey": "",                           //必填，字符串类型，个推开放平台申请的appkey
                        "appsecret": "",                        //必填，字符串类型，个推开放平台申请的appsecret
                        "icons": {                          //可选，JSON对象，推送图标配置
                            "push": {                               //可选，JSON对象，Push图标配置
                                "ldpi": "",                                 //可选，字符串类型，普通屏设备推送图标路径，分辨率要求48x48
                                "mdpi": "",                                 //可选，字符串类型，大屏设备设备推送图标路径，分辨率要求48x48
                                "hdpi": "",                                 //可选，字符串类型，高分屏设备推送图标路径，分辨率要求72x72
                                "xdpi": "",                                 //可选，字符串类型，720P高分屏设备推送图标路径，分辨率要求96x96
                                "xxdpi": "",                                //可选，字符串类型，1080P高密度屏幕推送图标路径，分辨率要求144x144
                                "xxxdpi": "",                               //可选，字符串类型，4K屏设备推送图标路径，分辨率要求192x192
                            },
                            "smal": {                               //可选，JSON对象，Push小图标配置
                                "ldpi": "",                                 //可选，字符串类型，普通屏设备推送小图标路径，分辨率要求18x18
                                "mdpi": "",                                 //可选，字符串类型，大屏设备设备推送小图标路径，分辨率要求24x24
                                "hdpi": "",                                 //可选，字符串类型，高分屏设备推送小图标路径，分辨率要求36x36
                                "xdpi": "",                                 //可选，字符串类型，720P高分屏设备推送小图标路径，分辨率要求48x48
                                "xxdpi": "",                                //可选，字符串类型，1080P高密度屏幕推送小图标路径，分辨率要求72x72
                                "xxxdpi": "",                               //可选，字符串类型，4K屏设备推送小图标路径，分辨率要求96x96
                            }
                        }
                    }
                },
                "share": {              //可选，JSON对象，Share(分享)模块三方SDK配置
                    "weixin": {                     //可选，JSON对象，使用微信分享SDK配置
                        "appid": "",                            //必填，字符串类型，微信开放平台申请的appid
                        "UniversalLinks": ""                    //可选，字符串类型，微信开放平台配置的iOS平台通用链接
                    },
                    "qq": {                         //可选，JSON对象，使用QQ分享SDK配置
                        "appid": "",                            //必填，字符串类型，QQ开放平台申请的appid
                        "UniversalLinks": ""                    //可选，字符串类型，QQ开放平台配置的iOS平台通用链接
                    },
                    "sina": {                       //可选，JSON对象，使用新浪微博分享SDK配置
                        "appkey": "",                           //必填，字符串类型，新浪微博开放平台申请的appid
                        "redirect_uri": "",                     //必填，字符串类型，新浪微博开放平台配置的redirect_uri
                        "UniversalLinks": ""                    //可选，字符串类型，新浪微博开放平台配置的iOS平台通用链接
                    }
                },
                "speech": {             //可选，JSON对象，Speech(语音识别)模块三方SDK配置
                    "baidu": {                      //可选，JSON对象，使用百度语音识别SDK配置
                        "appid": "",                            //必填，字符串类型，百度开放平台申请的appid
                        "apikey": "",                           //必填，字符串类型，百度开放平台申请的apikey
                        "secretkey": ""                         //必填，字符串类型，百度开放平台申请的secretkey
                    }
                },
                "statics": {            //可选，JSON对象，Statistic(统计)模块三方SDK配置
                    "umeng": {                      //可选，JSON对象，使用友盟统计SDK配置
                        "appkey_ios": "",                       //必填，字符串类型，友盟统计开放平台申请的iOS平台appkey
                        "channelid_ios": "",                    //可选，字符串类型，友盟统计iOS平台的渠道标识
                        "appkey_android": "",                   //必填，字符串类型，友盟统计开放平台申请的Android平台appkey
                        "channelid_android": ""                 //可选，字符串类型，友盟统计Android平台的渠道标识
                    },
                    "google" : {                    //可选，JSON对象，使用Google Analytics for Firebase配置
                        "config_ios" : "",                      //必填，字符串类型，Google Firebase统计开发者后台获取的iOS平台配置文件路径
                        "config_android" : ""                   //必填，字符串类型，Google Firebase统计开发者后台获取的Android平台配置文件路径
                    }
                },
                "ad": {                 //可选，JSON对象，uni-AD配置
                    "360": {                        //可选，JSON对象，使用360广告联盟SDK，无需手动配置，在uni-AD后台申请开通后自动获取配置参数
                    },
                    "csj": {                        //可选，JSON对象，使用今日头条穿山甲广告联盟SDK，无需手动配置，在uni-AD后台申请开通后自动获取配置参数
                    },
                    "gdt": {                        //可选，JSON对象，使用腾讯优量汇广告联盟SDK，无需手动配置，在uni-AD后台申请开通后自动获取配置参数
                    },
                    "ks": {                         //可选，JSON对象，使用快手广告联盟SDK，无需手动配置，在uni-AD后台申请开通后自动获取配置参数
                    },
                    "ks-content": {                 //可选，JSON对象，使用快手内容联盟SDK，无需手动配置，在uni-AD后台申请开通后自动获取配置参数
                    },
                    "sigmob": {                     //可选，JSON对象，使用Sigmob广告联盟SDK，无需手动配置，在uni-AD后台申请开通后自动获取配置参数
                    },
                    "hw": {                         //可选，JSON对象，使用华为广告联盟SDK，无需手动配置，在uni-AD后台申请开通后自动获取配置参数
                    },
                    "bd": {                         //可选，JSON对象，使用百度百青藤广告联盟SDK，无需手动配置，在uni-AD后台申请开通后自动获取配置参数
                    },
                    "BXM-AD": {                     //可选，JSON对象，使用互动游戏(变现猫)SDK，无需手动配置，在uni-AD后台申请开通后自动获取配置参数
                    }                    
                }
            },
            "icons": {              //可选，JSON对象，应用图标相关配置
                "ios":{                     //可选，JSON对象，iOS平台图标配置 
                    "appstore": "",                 //必填，字符串类型，分辨率1024x1024, 提交app sotre使用的图标路径
                    "iphone":{                      //可选，JSON对象，iPhone设备图标配置
                        "app@2x": "",                       //可选，字符串类型，分辨率120x120，程序图标路径  
                        "app@3x": "",                       //可选，字符串类型，分辨率180x180，程序图标路径  
                        "spotlight@2x": "",                 //可选，字符串类型，分辨率80x80，Spotlight搜索图标路径
                        "spotlight@3x": "",                 //可选，字符串类型，分辨率120x120，Spotlight搜索图标路径
                        "settings@2x": "",                  //可选，字符串类型，分辨率58x58，Settings设置图标路径
                        "settings@3x": "",                  //可选，字符串类型，分辨率87x87，Settings设置图标路径
                        "notification@2x": "",              //可选，字符串类型，分辨率40x40，通知栏图标路径
                        "notification@3x": ""               //可选，字符串类型，分辨率60x60，通知栏图标路径
                    },  
                    "ipad":{                        //可选，JSON对象，iPad设备图标配置
                        "app": "",                          //可选，字符串类型，分辨率76x76，程序图标图标路径
                        "app@2x": "",                       //可选，字符串类型，分辨率152x152，程序图标图标路径
                        "proapp@2x": "",                    //可选，字符串类型，分辨率167x167，程序图标图标路径
                        "spotlight": "",                    //可选，字符串类型，分辨率40x40，Spotlight搜索图标路径
                        "spotlight@2x": "",                 //可选，字符串类型，分辨率80x80，Spotlight搜索图标路径
                        "settings": "",                     //可选，字符串类型，分辨率29x29，Settings设置图标路径
                        "settings@2x": "",                  //可选，字符串类型，分辨率58x58，Settings设置图标路径
                        "notification": "",                 //可选，字符串类型，分辨率20x20，通知栏图标路径
                        "notification@2x": ""               //可选，字符串类型，分辨率740x40，通知栏图标路径
                    }  
                },  
                "android":{                 //可选，JSON对象，Android平台图标配置
                    "ldpi": "",                         //可选，字符串类型，普通屏设备程序图标，分辨率要求48x48，已废弃  
                    "mdpi": "",                         //可选，字符串类型，大屏设备程序图标，分辨率要求48x48，已废弃  
                    "hdpi": "",                         //可选，字符串类型，高分屏设备程序图标，分辨率要求72x72
                    "xhdpi": "",                        //可选，字符串类型，720P高分屏设备程序图标，分辨率要求96x96
                    "xxhdpi": "",                       //可选，字符串类型，1080P高分屏设备程序图标，分辨率要求144x144
                    "xxxhdpi": ""                       //可选，字符串类型，2K屏设备程序图标，分辨率要求192x192
                }
            },
            "splashscreen":{    //可选，JSON对象，启动界面配置
                "iosStyle": "common",   //可选，字符串类型，iOS平台启动界面样式，可取值common、default、storyboard
                "ios":{                 //可选，JSON对象，iOS平台启动界面配置 
                    "storyboard": "",               //可选，字符串类型，自定义storyboard启动界面文件路径，iosStyle值为storyboard时生效
                    "iphone":{                      //可选，JSON对象，iPhone设备启动图配置，iosStyle值为default时生效
                        "default": "",                      //可选，字符串类型，分辨率320x480，iPhone3（G/GS）启动图片路径，已废弃  
                         "retina35": "",                    //可选，字符串类型，分辨率640x960，3.5英寸设备(iPhone4/4S)启动图片路径，已废弃 
                         "retina40": "",                    //可选，字符串类型，分辨率640x1136，4.0英寸设备(iPhone5/5S)启动图片路径
                         "retina40l":"",                    //可选，字符串类型，分辨率1136x640，4.0英寸设备(iPhone5/5S)横屏启动图片路径
                         "retina47": "",                    //可选，字符串类型，分辨率750x1334，4.7英寸设备（iPhone6/7/8）启动图片路径
                         "retina47l": "",                   //可选，字符串类型，分辨率1334x750，4.7英寸设备（iPhone6/7/8）横屏启动图片路径
                         "retina55": "",                    //可选，字符串类型，分辨率1242x2208，5.5英寸设备（iPhone6/7/8Plus）启动图片路径  
                         "retina55l": "",                   //可选，字符串类型，分辨率2208x1242，5.5英寸设备（iPhone6/7/8Plus）横屏启动图片路径
                         "iphonex": "",                     //可选，字符串类型，分辨率1125x2436，5.8英寸设备（iPhoneX/XS）启动图片路径
                         "iphonexl": "",                    //可选，字符串类型，分辨率2436x1125，5.8英寸设备（iPhoneX/XS）横屏启动图片路径
                         "portrait-896h@2x": "",            //可选，字符串类型，分辨率828x1792，6.1英寸设备（iPhoneXR）启动图片路径
                         "landscape-896h@2x": "",           //可选，字符串类型，分辨率1792x828，6.1英寸设备（iPhoneXR）iPhoneXR横屏启动图片路径
                         "portrait-896h@3x": "",            //可选，字符串类型，分辨率1242x2688，6.5英寸设备（iPhoneXS Max）启动图片路径
                         "landscape-896h@3x": ""            //可选，字符串类型，分辨率2688x1242，6.5英寸设备（iPhoneXS Max）横屏启动图片路径
                    },  
                    "ipad":{                        //可选，JSON对象，iPad设备启动图配置，iosStyle值为default时生效
                         "portrait": "",                    //可选，字符串类型，分辨率768x1004，iPad竖屏启动图片路径，已废弃  
                         "portrait-retina": "",             //可选，字符串类型，分辨率1536x2008，iPad高分屏竖屏启动图片路径，已废弃  
                         "landscape": "",                   //可选，字符串类型，分辨率1024x748，iPad横屏启动图片路径，已废弃   
                         "landscape-retina": "",            //可选，字符串类型，分辨率2048x1496，iPad高分屏横屏启动图片路径，已废弃  
                         "portrait7": "",                   //可选，字符串类型，分辨率768x1024，9.7/7.9英寸iPad/mini竖屏启动图片路径 
                         "landscape7": "",                  //可选，字符串类型，分辨率1024x768，9.7/7.9英寸iPad/mini横屏启动图片路径
                         "portrait-retina7": "",            //可选，字符串类型，分辨率1536x2048，9.7/7.9英寸iPad/mini高分屏竖屏图片路径
                         "landscape-retina7": "",           //可选，字符串类型，分辨率2048x1536，9.7/7.9英寸iPad/mini高分屏横屏启动图片路径
                         "portrait-1112h@2x":"",            //可选，字符串类型，分辨率1668x2224，10.5英寸iPad Pro竖屏启动图片路径
                         "landscape-1112h@2x":"",           //可选，字符串类型，分辨率2224x1668，10.5英寸iPad Pro横屏启动图片路径
                         "portrait-1194h@2x":"",            //可选，字符串类型，分辨率1668x2388，11英寸iPad Pro竖屏启动图片路径
                         "landscape-1194h@2x":"",           //可选，字符串类型，分辨率2388x1668，11英寸iPad Pro横屏启动图片路径
                         "portrait-1366h@2x":"",            //可选，字符串类型，分辨率2048x2732，12.9英寸iPad Pro竖屏启动图片路径
                         "landscape-1366h@2x":""            //可选，字符串类型，分辨率2732x2048，12.9英寸iPad Pro横屏启动图片路径
                    }  
                },
                "androidStyle": "common",//可选，字符串类型，Android平台启动界面样式，可取值common、default
                "android":{         //可选，JSON对象，Android平台启动图片配置， androidStyle值为default时生效
                   "ldpi": "",                          //可选，字符串类型，分辨率320x442，低密度屏幕启动图片路径，已废弃
                   "mdpi": "",                          //可选，字符串类型，分辨率240x282，中密度屏幕启动图片路径，已废弃
                   "hdpi": "",                          //可选，字符串类型，分辨率480x762，高密度屏幕启动图片路径
                   "xhdpi": "",                         //可选，字符串类型，分辨率720x1242，720P高密度屏幕启动图片路径
                   "xxhdpi": ""                         //可选，字符串类型，分辨率1080x1882，1080P高密度屏幕启动图片路径
                }  
            },
            "orientation": [            //可选，字符串数组类型，应用支持的横竖屏，**已废弃，使用screenOrientation配置** 
                "portrait-primary",
                "portrait-secondary",
                "landscape-primary",
                "landscape-secondary"
            ]
        },
        "compatible": {                             //可选，JSON对象，uni-app兼容模式
            "ignoreVersion": false,                             //可选，Boolean类型，是否忽略版本兼容检查提示
            "runtimeVersion": "",                               //可选，字符串类型，兼容的uni-app运行环境版本号，多个版本使用,分割
            "compilerVersion": ""                               //可选，字符串类型，兼容的编译器版本号
        },
        "confusion": {                              //可选，JSON对象，原生混淆加密配置，参考：https://uniapp.dcloud.io/tutorial/app-sec-confusion
            "description": "",                                      //可选，字符串类型，原生混淆描述
            "resources": {                                          //必填，JSON对象，原生混淆文件配置
                "js/common.js": {                                           //可选，JSON对象，键名为需要原生混淆的文件路径
                }
            },
        },
        "channel": "",                              //可选，字符串类型，渠道标识
        "cers": {                                   //可选，JSON对象，应用的异常崩溃与错误报告系统配置
            "crash": true,                                          //可选，Boolean类型，是否提交应用异常崩溃信息
        },
        "cache": {                                  //可选，JSON对象，Webview窗口默认使用的缓存模式，uni-app项目已废弃
            "mode": "default"                                       //可选，字符串类型，可取值default、cacheElseNetwork、noCache、cacheOnly
        },
        "error": {                                  //可选，JSON对象，页面加载错误配置，uni-app项目仅对webview组件有效，参考：https://uniapp.dcloud.io/tutorial/app-webview-error
            "url": ""                                               //必填，字符串类型，webview页面错误是跳转的页面地址
        },
        "kernel": {                                 //可选，JSON对象，webview内核配置
            "ios": "WKWebview",                                     //可选，iOS平台使用的webview类型，可取值WKWebview、UIWebview
            "recovery": "reload"                                    //可选，iOS平台使用WKWebview时，内核崩溃后的处理逻辑，可取值restart、reload、none
        },
        "launchwebview": {                          //可选，JSON对象，应用首页相关配置，uni-app项目不建议手动修改
            "plusrequire": "normal",                                //可选，字符串类型，加载plus API时机，可取值ahead、normal、later、none
            "injection": false,                                     //可选，Boolean类型，是否提前注入plus API
            "overrideresource": [                           //可选，JSON对象数组，应用首页的拦截资源相关配置
                {
                    "match": "",                                    //可选，字符串类型，匹配拦截的资源url地址的正则表达式
                    "redirect":"",                                  //可选，字符串类型，拦截资源的重定向地址
                    "mime":"",                                      //可选，字符串类型，拦截资源的数据类型mime
                    "encoding":"",                                  //可选，字符串类型，拦截资源的数据编码
                    "header": {                                     //可选，JSON对象，拦截资源的http头数据
                    }  
                }
            ],  
            "overrideurl": {                                //可选，JSON对象，应用首页的拦截链接请求处理逻辑
                "mode": "reject",                                   //可选，字符串类型，拦截模式，可取值allow、reject
                "match": "",                                        //可选，字符串类型，匹配拦截规则，支持正则表达式
                "exclude": "none"                                   //可选，字符串类型，排除拦截理规则，可取值none、redirect
            },  
            "replacewebapi": {                              //可选，JSON对象，是否重写Web API实现相关配置
                "geolocation": "none"                               //可选，字符串类型，重写标准定位API，可取值none、alldevice、auto 
            },  
            "subNViews": [                                  //可选，JSON对象数组，首页原生View相关配置，已废弃
                {  
                    "id": "",                                       //可选，字符串类型，原生View标识
                    "styles": {                                     //可选，JSON对象，原生View样式
                    },  
                    "tags": [                                       //可选，JSON对象数组，原生View中包含的tag标签列表
                        {}
                    ]  
                }
            ],  
            "titleNView": {                                 //可选，JSON对象，标题栏相关配置
                "backgroundColor": "#RRGGBB",                       //可选，字符串类型，#RRGGBB格式，标题栏背景颜色
                "titleText": "",                                    //可选，字符串类型，标题栏标题文字内容
                "titleColor": "#RRGGBB",                            //可选，字符串类型，#RRGGBB格式，标题栏标题文字颜色  
                "titleSize": "17px",                                //可选，字符串类型，标题字体大小，默认大小为17px
                "autoBackButton": true,                             //可选，Boolean类型，是否显示标题栏上返回键
                "backButton": {                                     //可选，JSON对象，返回键样式
                    "backgournd": "#RRGGBB",                                //可选，字符串类型，#RRGGBB格式，返回按钮背景颜色
                    "color": "#RRGGBB",                                     //可选，字符串类型，#RRGGBB格式，返回图标颜色
                    "colorPressed": "#RRGGBB",                              //可选，字符串类型，#RRGGBB，返回图标按下时的颜色
                },  
                "buttons": [                                        //可选，JSON对象数组，标题栏按钮配置
                    {  
                        "color": "#RRGGBB",                                 //可选，字符串类型，#RRGGBB格式，按钮上的文字颜色
                        "colorPressed": "#RRGGBB",                          //可选，字符串类型，#RRGGBB格式，按钮按下状态的文字颜色
                        "float": "right",                                   //可选，字符串类型，按钮显示位置，可取值left、right  
                        "fontWeight": "normal",                             //可选，字符串类型，按钮上文字的粗细，可取值normal、bold
                        "fontSize": "22px",                                 //可选，字符串类型，按钮上文字的大小  
                        "fontSrc": "",                                      //可选，字符串类型，按钮上文字使用的字体文件路径
                        "text": ""                                          //可选，字符串类型，按钮上显示的文字
                    }
                ],  
                "splitLine": {                                      //可选，JSON对象，标题栏分割线样式
                    "color": "#RRGGBB",                                     //可选，字符串类型，#RRGGBB格式，分割线颜色
                    "height": "1px"                                         //可选，字符串类型，分割线高度
                } 
            },  
            "statusbar": {                                  //可选，JSON对象，状态栏配置
                "background": "#RRGGBB"                             //可选，字符串类型，#RRGGBB格式，沉浸式状态栏样式下系统状态栏背景颜色
            },  
            "top": "0px",                                   //可选，字符串类型，Webview的顶部偏移量，支持px、%单位
            "height": "100%",                               //可选，字符串类型，Webview窗口高度，支持px、%单位
            "bottom": "0px",                                //可选，字符串类型，Webview的底部偏移量，仅在未同时设置top和height属性时生效
            "backButtonAutoControl": "none",                //可选，字符串类型，运行环境自动处理返回键的控制逻辑，可取值none、hide、close
            "additionalHttpHeaders": {                      //可选，JSON对象，额外添加HTTP请求头数据
            }
        },
        "nativePlugins": {                          //可选，JSON数组对象，uni原生插件配置，参考：https://nativesupport.dcloud.net.cn/NativePlugin/use/use_local_plugin
            "%UniPlugin-ID%": {                                     //可选，JSON对象，键名为插件标识，值为插件配置参数
            }
        },
        "popGesture": "none",                       //可选，字符串类型，窗口侧滑返回默认效果，可取值none、close、hide
        "runmode": "liberate",                      //可选，字符串类型，应用资源运行模式，可取值normal、liberate
        "safearera": {                              //可选，JSON对象，安全区域配置
            "background": "#RRGGBB",                                //可选，字符串类型，#RRGGBB格式，安全区域背景颜色
            "backgroundDark": "#RRGGBB",                            //可选，字符串类型，#RRGGBB格式，暗黑模式安全区域背景颜色
            "bottom": {                                             //可选，JSON对象，底部安全区域配置
                "offset": "none"                                            //可选，字符串类型，安全区域偏移值，可取值auto、none
            },
            "left": {                                               //可选，JSON对象，左侧安全区域配置
                "offset": "none"                                            //可选，字符串类型，安全区域偏移值，可取值auto、none
            },
            "right": {                                              //可选，JSON对象，左侧安全区域配置
                "offset": "none"                                            //可选，字符串类型，安全区域偏移值，可取值auto、none
            }
        },
        "softinput": {                              //可选，JSON对象，软键盘相关配置
            "navBar": "auto",                                       //可选，字符串类型，iOS平台软键盘上导航条的显示模式，可取值auto、none
            "auxiliary": false,                                     //可选，Boolean类型，是否开启辅助输入功能
            "mode": "adjustResize"                                  //可选，字符串类型，弹出系统软键盘模式，可取值adjustResize、adjustPan
        },
        "ssl": {                                    //可选，JSON对象，ssl相关设置
            "untrustedca": "accept"                                 //可选，字符串类型，https请求时服务器非受信证书的处理逻辑，可取值accept、refuse、warning
        },
        "statusbar": {                              //可选，JSON对象，应用启动后的系统状态栏相关配置
            "immersed": "none",                                     //可选，字符串类型，沉浸式状态栏样式，可取值none、suggestedDevice、supportedDevice
            "style": "light",                                       //可选，字符串类型，系统状态栏样式（前景颜色），可取值dark、light
            "background": "#RRGGBB"                                 //可选，字符串类型，#RRGGBB格式，系统状态栏背景颜色
        },
        "useragent": {                              //可选，JSON对象，应用UserAgent相关配置
            "value": "",                                            //可选，字符串类型，设置的默认userAgent值
            "concatenate": false                                    //可选，Boolean类型，是否将value值作为追加值连接到系统默认userAgent值之后
        },
        "useragent_android": {                      //可选，JSON对象，Android平台应用UserAgent相关配置，优先级高于useragent配置
            "value": "",                                            //可选，字符串类型，设置的默认userAgent值
            "concatenate": false                                    //可选，Boolean类型，是否将value值作为追加值连接到系统默认userAgent值之后
        },
        "useragent_ios": {                          //可选，JSON对象，iOS平台应用UserAgent相关配置，优先级高于useragent配置
            "value": "",                                            //可选，字符串类型，设置的默认userAgent值
            "concatenate": false                                    //可选，Boolean类型，是否将value值作为追加值连接到系统默认userAgent值之后
        }
	},
    "quickapp": {},
    "mp-weixin": {
        "appid": "wx开头的微信小程序appid",
        "uniStatistics": {
            "enable": false
        }
    },
    "mp-baidu": {
        "appid": "百度小程序appid"
    },
    "mp-toutiao": {
        "appid": "字节跳动小程序appid"
    },
    "mp-lark": {
        "appid": "飞书小程序appid"
    },
    "h5": {
        "title": "演示",
        "template": "index.html",
        "router": {
            "mode": "history",
            "base": "/hello/"
        },
        "async": {
            "loading": "AsyncLoading",
            "error": "AsyncError",
            "delay": 200,
            "timeout": 3000
        }
    }
}
```

### FAQ  
Q：iOS 应用调用相机等权限时，弹出的提示语如何修改？  
A：在 manifest.json 可视化界面-App模块权限配置-iOS隐私信息访问的许可描述  
