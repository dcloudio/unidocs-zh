`manifest.json` 文件是应用的配置文件，用于指定应用的名称、图标、权限等。HBuilderX 创建的工程此文件在根目录，CLI 创建的工程此文件在 src 目录。

### 配置项列表

|属性|类型|默认值|描述|最低版本|
|:-|:-|:-|:-|:-|
|name|String||应用名称||
|appid|String|新建 uni-app 项目时，DCloud 云端分配。用途[详见](https://ask.dcloud.net.cn/article/35907)|应用标识||
|description|String||应用描述||
|locale|String|auto|设置当前默认语言，具体参考 [locale](/api/ui/locale)||
|versionName|String||版本名称，例如：1.0.0。详见下方Tips说明||
|versionCode|Number||版本号，例如：36||
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
|mp-kuaishou|Object||[快手小程序特有配置](/collocation/manifest.html#mp-kuaishou)|3.2.2|

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


#### uniStatistics
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
|nvueLaunchMode|String|Nvue 首页启动模式，可选值：normal、fast 默认 normal（HBuilderX 2.4.4-2.4.9 固定为 fast） [详见](https://ask.dcloud.net.cn/article/36749)|2.5.0+|
|nvue|Object|nvue 页面布局初始配置，[详见](/collocation/manifest?id=nvue)|2.0.3+|
|optimization|Object|分包配置，可以减轻启动时加载的js数量，提升启动速度|2.7.12+|
|runmode|String|normal：默认模式，liberate：资源释放模式||
|uniStatistics|Object|[App 是否开启 uni 统计，配置方法同全局配置](/collocation/manifest?id=uniStatistics)|2.2.3+|
|webView|Object|当系统webview低于指定版本时，会弹出提示。或者下载x5内核后继续启动，仅Android支持，[详情](/collocation/manifest?id=appwebview)|3.5.0+|


PS：上表只列出了核心部分，App平台的配置其实非常多，完整内容请参考 [完整的 manifest.json](/collocation/manifest-app?id=full-manifest)。

**Tips**

- manifest.json 文件的配置，推荐在 HBuilderX 提供的可视化操作界面完成。
- 部分配置在打包时的操作界面补全，例如：证书等信息。
- Native.js 权限部分会根据配置的模块权限，在打包后自动填充。
- 部分 modules 是默认的，不需要进行配置。
- 微信小程序的 `appid` 等信息，需要配置在 `mp-weixin` 节点下。不要配置在 `app-plus`下。`sdkConfigs` 下出现的 `weixin` 节点，配置的是 App 的第三方 SDK 信息。


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
|android|Object|Android 应用配置，详见: [Android配置明细](/collocation/manifest-app?id=android)|
|ios|Object|iOS 应用配置，详见: [iOS配置明细](/collocation/manifest-app?id=ios)|
|sdkConfigs|Object|SDK配置，仅打包生效 [详见](/collocation/manifest?id=sdkConfigs)|
|orientation|Array|同 screenOrientation 配置，仅打包生效，已废弃，推荐使用 screenOrientation|

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


#### webview@appwebview

> uni-app 3.5.0+

当App代码使用了低版本webview不支持的语法时（比如使用了vue3），可以在manifest配置本属性，来指定最低运行的webview版本。

当系统webview版本不符合需求时，uni-app引擎会自动弹框。同时开发者可以指定使用 x5引擎webview 来替代系统webview，以保障浏览器兼容性。详见[x5文档](/tutorial/app-android-x5.html)

当你的应用强依赖x5时，比如需要vue页面的字体和tabbar等原生界面保持一致时，也可以在manifest配置本属性。

|属性|类型|说明|
|:-|:-|:-|
|minUserAgentVersion|String|最小webview版本，例如：64.0.3282.116。（当低于最小版本要求时，显示 `WebView版本过低`  弹框，点击确定退出应用。）|
|x5|Object|此属性需要在manifest模块配置中勾选 Android X5 Webview 模块，详细参见下面的说明|

x5 属性说明

|属性|类型|默认值|说明|
|:-|:-|:-|:-|
|timeOut|Number|3000|超时时间|
|showTipsWithoutWifi|Boolean|false|是否在非WiFi网络环境时，显示用户确认下载x5内核的弹窗。（如果为true时，在非WiFi网络下载x5模块，会显示用户确认弹框，内容为 `当前处于非WiFi网络，是否允许下载x5模块？` ，false时不显示弹框 。）|
|allowDownloadWithoutWiFi|Boolean|false|是否允许用户在非WiFi网络时进行x5内核的下载。（如果为true，就不会显示用户确认的弹窗。false时，如果showTipsWithoutWifi为true，就会显示用户确认弹框；showTipsWithoutWifi为false时，不下载x5模块。）|


webview示例

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
|port|Number|Vue2 8080；Vue3 3000|前端开发服务端口|
|disableHostCheck|Boolean|false|禁用 Host 检查|

Tips：`uni-app` 中 `manifest.json->h5->devServer`，`vue2` 实际上对应 `webpack` 的 [devServer](https://webpack.js.org/configuration/dev-server/)，`vue3` 实际上对应 `vite` 的 [server](https://cn.vitejs.dev/config/server-options.html#server-options)，鉴于 manifest 为 json 文件，故 `webpack.config.js->devServer` 及 `vite.config.js->server` 配置项下的简单类型属性均可在`manifest.json->h5->devServer`节点下配置，funciton 等复杂类型暂不支持。

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
            },
            "amap": {
                // 高德地图秘钥（HBuilderX 3.6.0+）https://console.amap.com/dev/key/app
                "key": "",
                // 高德地图安全密钥（HBuilderX 3.6.0+）https://console.amap.com/dev/key/app
                "securityJsCode": "",
                // 高德地图安全密钥代理服务器地址（HBuilderX 3.6.0+）https://lbs.amap.com/api/jsapi-v2/guide/abc/prepare
                "serviceHost": "",
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
|mergeVirtualHostAttributes|Boolean|合并组件[虚拟节点](/tutorial/vue-api.html#%E5%85%B6%E4%BB%96%E9%85%8D%E7%BD%AE)外层属性（目前仅支持 style、class 属性），uni-app 3.5.1+ 开始支持|
|slotMultipleInstance|Boolean|模拟单个作用域插槽渲染为多个实例，此配置仅限 Vue2 环境 3.7.12+，Vue3 环境已默认支持|
|embeddedAppIdList|Array|要半屏跳转的小程序appid。[详见](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html)|
|requiredPrivateInfos|Array|地理位置相关接口。[详见](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#requiredPrivateInfos)|
|lazyCodeLoading|String| 目前仅支持值 requiredComponents，代表开启小程序[按需注入](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/lazyload.html#%E6%8C%89%E9%9C%80%E6%B3%A8%E5%85%A5)特性，[详见](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#lazyCodeLoading)|


#### setting

编译到微信小程序平台下的项目设置。

|属性|类型|说明|
|:-|:-|:-|
|urlCheck|Boolean|是否检查安全域名和 TLS 版本|
|es6|Boolean|ES6 转 ES5|
|postcss|Boolean|上传代码时样式是否自动补全|
|minified|Boolean|上传代码时是否自动压缩|
|bigPackageSizeSupport|Boolean|预览及真机调试时包体积上限是否调整为4M，默认为true（HBuilderX 3.5.5+）。|

注意: 使用微信小程序手势组件会强制开启 ES6 转 ES5

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

|属性								|类型		|说明			|
|:-								|:-			|:-			|
|plugins							|Object	|使用到的插件，[详见](https://opendocs.alipay.com/mini/plugin/plugin-usage)	|
|component2						|Boolean| 是否启用 `component2` 编译，默认为true，[查看详情](https://docs.alipay.com/mini/framework/custom-component-overview)	|
|enableAppxNg         |Boolean| 是否启用 `enableAppxNg` 小程序基础库 2.x 构建，默认为true，[查看详情](https://opendocs.alipay.com/mini/framework/project)，HBuilderX 3.2.10+ |
|axmlStrictCheck			|Boolean| 是否启用 `axml` 严格语法检查，默认为false	|
|enableParallelLoader	|Boolean| 是否启用多进程编译，默认为false	|
|enableDistFileMinify	|Boolean| 是否压缩编译产物（仅在真机预览/真机调试时生效），默认为false	|
|uniStatistics				|Object	|[支付宝小程序是否开启 uni 统计，配置方法同全局配置](/collocation/manifest?id=uniStatistics)|
|scopedSlotsCompiler|String|Vue2 作用域插槽编译模式，uni-app 3.1.19+ 开始支持，可选：legacy、auto、augmented，默认：auto|
|mergeVirtualHostAttributes|Boolean|合并组件[虚拟节点](/tutorial/vue-api.html#%E5%85%B6%E4%BB%96%E9%85%8D%E7%BD%AE)外层属性（目前仅支持 style、class 属性），uni-app 3.5.1+ 开始支持|
|slotMultipleInstance|Boolean|模拟单个作用域插槽渲染为多个实例，此配置仅限 Vue2 环境 3.7.12+，Vue3 环境已默认支持|
|lazyCodeLoading|String|是否开启代码按需执行。|

### mp-baidu

|属性|类型|说明|
|:-|:-|:-|
|appid|String|百度小程序的 AppID，登录 [https://smartprogram.baidu.com/docs/introduction/enter_application/](https://smartprogram.baidu.com/docs/introduction/enter_application/) 申请|
|requiredBackgroundModes|Array|小程序需要在后台使用的能力，目前支持背景音频播放，"requiredBackgroundModes": ["audio"]，[详见](https://smartprogram.baidu.com/docs/develop/tutorial/process/#requiredBackgroundModes)	|
|prefetches|Array|预请求的所有url的列表，[详见](https://smartprogram.baidu.com/docs/develop/tutorial/process/#prefetches)																|
|optimization|Object| 对百度小程序的优化配置 |
|uniStatistics|Object|[百度小程序是否开启 uni 统计，配置方法同全局配置](/collocation/manifest?id=uniStatistics)|
|scopedSlotsCompiler|String|Vue2 作用域插槽编译模式，uni-app 3.1.19+ 开始支持，可选：legacy、auto、augmented，默认：auto|
|slotMultipleInstance|Boolean|模拟单个作用域插槽渲染为多个实例，此配置仅限 Vue2 环境 3.7.12+，Vue3 环境已默认支持|
|dynamicLib|Object|引入动态库，详情请参考[使用动态库](https://smartprogram.baidu.com/docs/develop/framework/dynamiclib_use/)|

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
|slotMultipleInstance|Boolean|模拟单个作用域插槽渲染为多个实例，此配置仅限 Vue2 环境 3.7.12+，Vue3 环境已默认支持|

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
|slotMultipleInstance|Boolean|模拟单个作用域插槽渲染为多个实例，此配置仅限 Vue2 环境 3.7.12+，Vue3 环境已默认支持|

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
|slotMultipleInstance|Boolean|模拟单个作用域插槽渲染为多个实例，此配置仅限 Vue2 环境 3.7.12+，Vue3 环境已默认支持|

#### optimization

对QQ小程序的优化配置

|属性|类型|说明|
|:-|:-|:-|
|subPackages|Boolean|是否开启分包优化|

### mp-kuaishou

|属性|类型|说明|
|:-|:-|:-|
|appid|String|快手小程序的 AppID，登录 [https://mp.kuaishou.com](https://mp.kuaishou.com) 申请|
|optimization|Object| 对快手小程序的优化配置 |
|uniStatistics|Object|[快手小程序是否开启 uni 统计，配置方法同全局配置](/collocation/manifest?id=uniStatistics)|
|scopedSlotsCompiler|String|Vue2 作用域插槽编译模式，uni-app 3.1.19+ 开始支持，可选：legacy、auto、augmented，默认：augmented|
|slotMultipleInstance|Boolean|模拟单个作用域插槽渲染为多个实例，此配置仅限 Vue2 环境 3.7.12+，Vue3 环境已默认支持|

#### optimization

对快手小程序的优化配置

|属性|类型|说明|
|:-|:-|:-|
|subPackages|Boolean|是否开启分包优化|

### 自定义小程序项目配置

HBuilderX 3.6.16+ 支持项目根目录(cli 项目为 src 目录)下创建配置文件自定义小程序项目配置。平台对应文件名如下：
|小程序平台|文件名|
|:-|:-|
|微信|project.config.json|
|QQ|project.config.json|
|百度|project.swan.json|
|支付宝|mini.project.json|
|字节跳动|project.tt.json|
|飞书|project.lark.json|
|快手|project.ks.json|
|京东|project.config.json|

### 关于分包优化的说明

- 在对应平台的配置下添加`"optimization":{"subPackages":true}`开启分包优化
- 目前只支持`mp-weixin`、`mp-qq`、`mp-baidu`、`mp-toutiao`、`mp-kuaishou`的分包优化
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


### FAQ
Q：iOS 应用调用相机等权限时，弹出的提示语如何修改？
A：在 manifest.json 可视化界面-App模块权限配置-iOS隐私信息访问的许可描述
