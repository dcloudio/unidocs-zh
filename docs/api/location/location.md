### uni.getLocation(OBJECT)
获取当前的地理位置、速度。
Get the current geographical position and speed.

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|平台差异说明|
| Parameter name| Type| Required| Instruction| Platform difference description|
|:-|:-|:-|:-|:-:|
|type|String|否|默认为 wgs84 返回 gps 坐标，gcj02 返回国测局坐标，可用于 ``uni.openLocation`` 和 map 组件坐标，App 和 H5 需配置定位 SDK 信息才可支持 gcj02。||
|type|String|No|The default is wgs84 to return gps coordinates, gcj02 to return to National Survey Bureau coordinates, which can be used for ``uni.openLocation`` and map component coordinates, App and H5 need to configure positioning SDK information to support gcj02. ||
|altitude|Boolean|否|传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度|字节跳动小程序、飞书小程序、支付宝小程序不支持|
|altitude|Boolean|No|Passing in true will return the altitude information. Since the acquisition of altitude requires high accuracy, it will slow down the return speed of the interface|Byte Beat applet, Feishu applet, Alipay applet are not supported|
|geocode|Boolean|否|默认false，是否解析地址信息|仅App平台支持（安卓需指定 type 为 gcj02 并配置三方定位SDK）|
|geocode|Boolean|No |The default is false, whether to resolve the address information|Supported only by the App platform (Android needs to specify the type as gcj02 and configure the three-party positioning SDK)|
|highAccuracyExpireTime|Number|否|高精度定位超时时间(ms)，指定时间内返回最高精度，该值3000ms以上高精度定位才有效果|App (3.2.11+)、H5 (3.2.11+)、微信小程序 (基础库 2.9.0+)|
|highAccuracyExpireTime|Number|No|High Accuracy Positioning Timeout Time (ms), returns the highest accuracy within the specified time, this value is more than 3000ms and high accuracy positioning is effective|App (3.2.11+), H5 (3.2.11+), WeChat applet (basic library 2.9.0+)|
|timeout|String|否|默认为 5，定位超时时间，单位秒|仅飞书小程序支持|
|timeout|String|No|The default is 5, the positioning timeout, in seconds|Only supported by Feishu applet|
|cacheTimeout|Number|否|定位缓存超时时间，单位秒；每次定位缓存当前定位数据，并记下时间戳，当下次调用在cacheTimeout之内时，返回缓存数据|仅飞书小程序、支付宝小程序支持|
|cacheTimeout|Number|No|Location cache timeout, in seconds; the current location data is cached each time, and the timestamp is recorded. When the next call is within cacheTimeout, the cached data will be returned|Only Feishu applet, Alipay applet Program Support |
|accuracy|String|否|默认为 high，指定期望精度，支持 high，best。当指定 high 时，期望精度值为100m，当指定 best 时期望精度值为20m。当定位得到的精度不符合条件时，在timeout之前会继续定位，尝试拿到符合要求的定位结果|仅飞书小程序支持|
|accuracy|String|No|The default is high, which specifies the expected accuracy. High, best are supported. When high is specified, the expected precision value is 100m, and when best is specified, the expected precision value is 20m. When the accuracy obtained from the positioning does not meet the conditions, the positioning will continue before the timeout, and try to obtain the positioning results that meet the requirements|Only supported by Feishu applet|
|isHighAccuracy|Boolean|否|开启高精度定位|App (3.4.0+)、H5 (3.4.0+)、微信小程序 (基础库 2.9.0+)|
|isHighAccuracy|Boolean|No|Enable high-precision positioning|App (3.4.0+), H5 (3.4.0+), WeChat applet (basic library 2.9.0+)|
|success|Function|是|接口调用成功的回调函数，返回内容详见返回参数说明。||
| success| Function| Yes| Callback function for successful interface calling. See the notices on returning parameter description for returning contents.| |
|fail|Function|否|接口调用失败的回调函数||
| fail| Function| No| Callback function for failed interface calling| |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|  |

**success 返回参数说明**
**success return parameter description**

|参数|说明|
| Parameter| Instruction|
|:-|:-|
|latitude|纬度，浮点数，范围为-90~90，负数表示南纬|
| latitude| Latitude, floating number, from -90 to 90. Negative number indicates south latitude|
|longitude|经度，浮点数，范围为-180~180，负数表示西经|
| longitude| Longitude, floating number, from -180 to 180. Negative number indicates west longitude|
|speed|速度，浮点数，单位m/s|
| speed| Speed, floating number, in m/s|
|accuracy|位置的精确度|
| accuracy| Position accuracy|
|altitude|高度，单位 m|
| altitude| Height, in m|
|verticalAccuracy|垂直精度，单位 m（Android 无法获取，返回 0）|
| verticalAccuracy| Vertical accuracy, in m (If Android can't get it, return 0)|
|horizontalAccuracy|水平精度，单位 m|
| horizontalAccuracy| Horizontal accuracy, in m|
|[address](/api/location/location?id=address)|地址信息（仅App端支持，需配置geocode为true）|
| [address](/api/location/location?id=address)| Address information (only supported by App side, geocode needs to be configured to true)|

**address 地址信息说明**
**address information description**

|属性|类型|描述|说明|
| Attribute| Type| Describe| Instruction|
|:-|:-|:-|:-|
|country|String|国家|如“中国”，如果无法获取此信息则返回undefined|
| country| String| Nation| e.g. "China". undefined is returned if no information is obtained.|
|province|String|省份名称|如“北京市”，如果无法获取此信息则返回undefined|
| province| String| Province| e.g. "Beijing City". undefined is returned if no information is obtained.|
|city|String|城市名称|如“北京市”，如果无法获取此信息则返回undefined|
| city| String| City| e.g. "Beijing City". undefined is returned if no information is obtained.|
|district|String|区（县）名称|如“朝阳区”，如果无法获取此信息则返回undefined|
| district| String| District (county) name| e.g. "Chaoyang District". undefined is returned if no information is obtained.|
|street|String|街道信息|如“酒仙桥路”，如果无法获取此信息则返回undefined|
| street| String| Street| e.g. "Jiuxianqiao Road". undefined is returned if no information is obtained.|
|streetNum|String|获取街道门牌号信息|如“3号”，如果无法获取此信息则返回undefined|
| streetNum| String| Get street number information| e.g. "No. 3". undefined is returned if no information is obtained.|
|poiName|String|POI信息|如“电子城．国际电子总部”，如果无法获取此信息则返回undefined|
| poiName| String| POI information| Such as "Electronic City. International Electronics Headquarters". undefined is returned if no information is obtained.|
|postalCode|String|邮政编码|如“100016”，如果无法获取此信息则返回undefined|
| postalCode| String| Postal code| e.g. "100016". undefined is returned if no information is obtained.|
|cityCode|String|城市代码|如“010”，如果无法获取此信息则返回undefined|
| cityCode| String| City code| e.g. "010". undefined is returned if no information is obtained.|

**示例**
**Example**

```javascript
uni.getLocation({
	type: 'wgs84',
	success: function (res) {
		console.log('当前位置的经度：' + res.longitude);
		console.log('当前位置的纬度：' + res.latitude);
	}
});
```

#### 注意
#### Notice

- `H5 平台`
- `H5 Platform`
  - 在较新的浏览器上，H5 端获取定位信息，要求部署在 **https** 服务上，本地预览（localhost）仍然可以使用 http 协议。
  - On newer browsers, the H5 side obtains location information and requires deployment on the **https** service, and the local preview (localhost) can still use the http protocol.
  - 国产安卓手机上，H5若无法定位，检查手机是否开通位置服务、GPS，ROM是否给该浏览器位置权限、浏览器是否对网页弹出请求给予定位的询问框。
  - On a domestic Android phone, if the H5 cannot be positioned, check whether the phone has enabled location services, GPS, whether the ROM has given the browser location permission, and whether the browser has given a positioning query box to the web page pop-up request.
  - `安卓手机` 在原生App内嵌H5时，无法定位需要原生App处理Webview。
  - `Android phone` cannot locate when the native app is embedded with H5, and the native app needs to process the Webview.
  - `移动端浏览器` 普遍仅支持GPS定位，在GPS信号弱的地方可能定位失败。
  - `Mobile browser` generally only supports GPS positioning, and positioning may fail in places with weak GPS signals.
  - `PC 设备` 使用 Chrome 浏览器的时候，位置信息是连接谷歌服务器获取的，国内用户可能获取位置信息失败。
  - When `PC device` uses the Chrome browser, the location information is obtained by connecting to the Google server, and domestic users may fail to obtain the location information.
  - 微信公众号可使用微信js sdk，[详见](https://ask.dcloud.net.cn/article/35380)
  - WeChat public account can use WeChat js sdk, [see details](https://ask.dcloud.net.cn/article/35380)
  - `2.9.9 版本以上`，优化 uni.getLocation 支持通过 IP 定位。默认通过 GPS 获取，如果获取失败，备选方案是通过 IP 定位获取，需填写三方地图服务平台的秘钥（key）。key配置：manifest.json ---> H5配置 ---> 定位和地图 ---> key。
  - `Version 2.9.9 and above`, optimized uni.getLocation to support location by IP. By default, it is obtained through GPS. If the acquisition fails, the alternative is to obtain it through IP positioning, and the secret key of the third-party map service platform needs to be filled in. key configuration: manifest.json ---> H5 configuration ---> positioning and map ---> key.
- `App 平台`
- `App Platform`
  - Android由于谷歌服务被墙，或者手机上没有GMS，想正常定位就需要向高德等三方服务商申请SDK资质，获取AppKey。否则打包后定位就会不准。云打包时需要在manifest的SDK配置中填写 Appkey。在 manifest 可视化界面有详细申请指南，详见：[https://ask.dcloud.net.cn/article/29](https://ask.dcloud.net.cn/article/29)。离线打包自行在原生工程中配置。注意包名、appkey、证书信息必须匹配。真机运行可以正常定位，是因为真机运行基座使用了DCloud向高德申请的sdk配置，打包后必须由开发者自己申请。如果手机自带GMS且网络环境可以正常访问google定位服务器，此时无需在 manifest 填写高德定位的 sdk 配置。
  - For Android, because Google services are blocked, or there is no GMS on the mobile phone, you need to apply for SDK qualifications from third-party service providers such as AutoNavi to obtain AppKey if you want to locate it normally. Otherwise, the positioning will be inaccurate after packing. During cloud packaging, you need to fill in the Appkey in the SDK configuration of the manifest. There are detailed application guidelines in the manifest visual interface, see: [https://ask.dcloud.net.cn/article/29](https://ask.dcloud.net.cn/article/29). Offline packaging is configured in the native project by itself. Note that the package name, appkey, and certificate information must match. The real machine operation can be positioned normally because the real machine operation base uses the sdk configuration applied by DCloud to AutoNavi, and the developer must apply for it after packaging. If the mobile phone comes with GMS and the network environment can access the google positioning server normally, you do not need to fill in the sdk configuration of AutoNavi positioning in the manifest at this time.
  - `<map>` 组件默认为国测局坐标 gcj02，调用 `uni.getLocation` 返回结果传递给 `<map>` 组件时，需指定 type 为 gcj02。
  - `<map> ` The component defaults to the coordinate gcj02 of the National Bureau of Surveying, call `uni.getLocation` to return the result and pass it to `<map> ` When using a component, you need to specify the type as gcj02.
  - 定位 和 map 是两个东西。通过 `getLocation` 得到位置坐标后，可以在任意map地图上展示，比如定位使用高德，地图使用 google 的 webview 版地图。如果坐标系不同时，注意转换坐标系。
  - Positioning and map are two things. After getting the location coordinates through `getLocation`, it can be displayed on any map map, such as positioning using Gaode, and the map using google's webview version of the map. If the coordinate system is different, pay attention to converting the coordinate system.
  - 如果使用 `web-view` 加载地图，无需在manifest里配地图的sdk配置。
  - If you use `web-view` to load the map, there is no need to configure the sdk configuration of the map in the manifest.
  - 持续定位方案：iOS端可以申请持续定位权限，[参考](https://ask.dcloud.net.cn/article/12569)。Android如果进程被杀，代码无法执行。可以使用 [unipush](https://ask.dcloud.net.cn/article/35622) ，通过服务器激活App，执行透传消息，让App启动然后采集位置。Android上，即使自己写原生插件做后台进程，也很容易被杀，unipush是更合适的方案
  - Continuous positioning solution: iOS can apply for continuous positioning permission, [Reference](https://ask.dcloud.net.cn/article/12569). Android If the process is killed, the code cannot be executed. You can use [unipush](https://ask.dcloud.net.cn/article/35622) to activate the App through the server, perform transparent message transmission, let the App start and collect the location. On Android, even if you write a native plugin as a background process, it is easy to be killed. Unipush is a more suitable solution.
  - `3.3.0 版本以上` 优化系统定位模块，可不使用三方定位SDK的进行高精度定位，具体参考：[系统定位](app/geolocation)。
  - `Version 3.3.0 and above` has optimized the system positioning module, and can perform high-precision positioning without using the three-way positioning SDK. For details, refer to: [System Positioning](app/geolocation).
- `小程序平台`
- `Mini Program Platform`
  - api默认不返回详细地址中文描述。需要中文地址有2种方式：1、使用高德地图小程序sdk，在app和微信上都可以获得中文地址，[参考](http://ask.dcloud.net.cn/article/35070)。2、只考虑app，使用``plus.geolocation``也可以获取中文地址。manifest里的App SDK配置仅用于app，小程序无需在这里配置。
  - The api does not return the Chinese description of the detailed address by default. There are two ways to need a Chinese address: 1. Using the AutoNavi map applet sdk, you can get a Chinese address on the app and WeChat, [Reference](http://ask.dcloud.net.cn/article/35070). 2. Only consider the app, you can also use ``plus.geolocation`` to get the Chinese address. The App SDK configuration in the manifest is only used for the app, and the applet does not need to be configured here.
  - 可以通过用户授权API来判断用户是否给应用授予定位权限，[详见](https://uniapp.dcloud.io/api/other/authorize)
  - The user authorization API can be used to determine whether the user has granted the application location permission, [see details](https://uniapp.dcloud.io/api/other/authorize)
  - 在 `微信小程序` 中，当用户离开应用后，此接口无法调用，需要申请 [后台持续定位权限](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html) ，另外新版本中需要使用 [wx.onLocationChange](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.onLocationChange.html) 监听位置信息变化；当用户点击“显示在聊天顶部”时，此接口可继续调用。
  - In the `WeChat Mini Program`, when the user leaves the app, this interface cannot be called, and you need to apply for [Background continuous positioning permission](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability /authorize.html) , and in the new version, you need to use [wx.onLocationChange](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.onLocationChange.html) to monitor location information changes; when This interface can continue to be called when the user clicks "Show on top of chat".

### uni.chooseLocation(OBJECT)
打开地图选择位置。
Open the map to select a location.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|x|x|


**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|平台差异说明|
| Parameter name| Type| Required| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|
|latitude|Number|否|目标地纬度|微信小程序（2.9.0+）、H5-Vue3（3.2.10+）|
|latitude|Number|No|Destination latitude|WeChat applet (2.9.0+), H5-Vue3 (3.2.10+)|
|longitude|Number|否|目标地经度|微信小程序（2.9.0+）、H5-Vue3（3.2.10+）|
|longitude|Number|No|Destination longitude|WeChat applet (2.9.0+), H5-Vue3 (3.2.10+)|
|keyword|String|否|搜索关键字，仅App平台支持||
|keyword|String|No|Search keywords, only supported by App platform||
|success|Function|是|接口调用成功的回调函数，返回内容详见返回参数说明。||
| success| Function| Yes| Callback function for successful interface calling. See the notices on returning parameter description for returning contents.| |
|fail|Function|否|接口调用失败的回调函数（获取定位失败、用户取消等情况下触发）||
|fail|Function|No|The callback function for the failure of the interface call (triggered when the positioning fails, the user cancels, etc.)||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）||
|complete|Function|No|The callback function of the end of the interface call (the call will be executed if the call succeeds or fails)||

**注意**
**Notice**
- 因平台差异，如果SDK配置百度地图，需要设置keyword，才能显示相关地点
- In light of platform differences, for SDK configured with Baidu map, keyword setting is necessary for relevant places being displayed
- `nvue` 下支持高德地图和Google地图(3.4+)，不支持百度地图
- `nvue` supports AutoNavi and Google Maps (3.4+), but does not support Baidu Maps
- `HBuilderX 2.4.0+` 非 weex 编译模式仅支持高德地图
- `HBuilderX 2.4.0+` non-weex compilation mode only supports Gaode maps


**success 返回参数说明**
**success return parameter description**

|参数|说明|
| Parameter| Instruction|
|:-|:-|
|name|位置名称|
| name| Location name|
|address|详细地址|
| address| Address|
|latitude|纬度，浮点数，范围为-90~90，负数表示南纬，使用 gcj02 国测局坐标系。|
| latitude| Latitude, floating number, from -90 to 90. Negative number indicates south latitude, using gcj02 coordinate of State Bureau of Surveying and Mapping of China.|
|longitude|经度，浮点数，范围为-180~180，负数表示西经，使用 gcj02 国测局坐标系。|
| longitude| Longitude, floating number, from -180 to 180. Negative number indicates west longitude, using gcj02 coordinate of State Bureau of Surveying and Mapping of China.|

**示例**
**Example**

```javascript
uni.chooseLocation({
	success: function (res) {
		console.log('位置名称：' + res.name);
		console.log('详细地址：' + res.address);
		console.log('纬度：' + res.latitude);
		console.log('经度：' + res.longitude);
	}
});
```

**注意**
**Notice**
- 不同端，使用地图选择时基于的底层地图引擎不一样，详见地图[map](/component/map)组件的地图服务商支持。
- Different terminals use different underlying map engines for map selection. For details, see map service provider support for the map [map](/component/map) component.
  - `app` 中也可以使用百度定位，在 manifest 中配置，打包后生效。
  - Baidu positioning can also be used in `app`, configured in the manifest, and it will take effect after packaging.
  - `app-nvue` 里只能用高德定位和Google地图(3.4+)，不能用百度地图。另外选择地图、查看地图位置的API也仅支持高德地图和Google地图(3.4+)。所以App端如无特殊必要，建议使用高德地图。
  - Only AutoNavi and Google Maps (3.4+) can be used in `app-nvue`, but Baidu Maps cannot be used. In addition, the API for selecting a map and viewing the map location only supports AutoNavi and Google Maps (3.4+). Therefore, if there is no special need on the App side, it is recommended to use the Gaode map.
- `H5 端` 使用地图和定位相关，需要在 [manifest.json](/collocation/manifest?id=h5sdkconfig) 内配置腾讯或谷歌等三方地图服务商申请的秘钥（key）。
- `H5 terminal` uses maps and positioning related, you need to configure the secret key (key) applied by third-party map service providers such as Tencent or Google in [manifest.json](/collocation/manifest?id=h5sdkconfig).
- `微信内置浏览器` 中可使用微信js sdk，[详见](https://ask.dcloud.net.cn/article/35380)
- WeChat js sdk can be used in `WeChat built-in browser`, [see details](https://ask.dcloud.net.cn/article/35380)
- chooseLocation 属于封装型API，开发者若觉得不够灵活，可自行基于原始的 map 组件进行封装。插件市场已经有各种封装样例了。
- chooseLocation is an encapsulated API. If developers feel that it is not flexible enough, they can encapsulate it based on the original map component. The plugin market already has a variety of packaging examples.
- 若 `Android App端` 位置不准，见上文 uni.getLocation 的注意事项
- If the location of `Android App` is not accurate, see the precautions for uni.getLocation above

### 三方定位和地图服务收费说明
### Three-party positioning and map service fee description

* 使用三方定位或者地图服务，需向服务提供商（如：高德地图、百度地图、腾讯地图、谷歌地图）申请授权或缴纳费用。
* To use third-party positioning or map services, you need to apply for authorization or pay fees to service providers (such as AutoNavi Maps, Baidu Maps, Tencent Maps, Google Maps).
* 申请三方定位或地图服务秘钥时请详细阅读授权和收费说明，并关注服务条款后期的变更。
* When applying for a three-party positioning or map service key, please read the authorization and charging instructions in detail, and pay attention to the later changes to the terms of service.
* 以下是关于部分地图服务商授权和收费的简介，具体以地图服务商官网公布的最新信息为准。
* The following is a brief introduction to the authorization and charges of some map service providers, and the latest information published on the official website of the map service provider shall prevail.
  * 高德地图：商用授权收费，超出配额收费。
  * AutoNavi map: commercial license charges, exceeding quota charges.
  * 百度地图：商用授权收费，超出配额收费。
  * Baidu map: commercial license charges, exceeding quota charges.
  * 腾讯地图：商用授权收费，超出配额收费。
  * Tencent Maps: Commercial license charges, exceeding quota charges.
  * 谷歌地图：按量收费，每月可获得一些赠送金额。
  * Google Maps: Pay-as-you-go with some monthly credits.
  * 小程序平台内置地图：无需关心地图服务商，免费使用，无配额限制。
  * The built-in map of the Mini Program platform: no need to care about the map service provider, free to use, no quota limit.