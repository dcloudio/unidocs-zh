### uni.getLocation(OBJECT)
获取当前的地理位置、速度。

**OBJECT 参数说明**

|参数名|类型|必填|说明|平台差异说明|
|:-|:-|:-|:-|:-:|
|type|String|否|默认为 wgs84 返回 gps 坐标，gcj02 返回国测局坐标，可用于 ``uni.openLocation`` 和 map 组件坐标，App 和 H5 需配置定位 SDK 信息才可支持 gcj02。||
|altitude|Boolean|否|传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度|抖音小程序、飞书小程序、支付宝小程序不支持|
|geocode|Boolean|否|默认false，是否解析地址信息|仅App平台支持（安卓需指定 type 为 gcj02 并配置三方定位SDK）|
|highAccuracyExpireTime|Number|否|高精度定位超时时间(ms)，指定时间内返回最高精度，该值3000ms以上高精度定位才有效果|App (3.2.11+)、H5 (3.2.11+)、微信小程序 (基础库 2.9.0+)|
|timeout|String|否|默认为 5，定位超时时间，单位秒|仅飞书小程序支持|
|cacheTimeout|Number|否|定位缓存超时时间，单位秒；每次定位缓存当前定位数据，并记下时间戳，当下次调用在cacheTimeout之内时，返回缓存数据|仅飞书小程序、支付宝小程序支持|
|accuracy|String|否|默认为 high，指定期望精度，支持 high，best。当指定 high 时，期望精度值为100m，当指定 best 时期望精度值为20m。当定位得到的精度不符合条件时，在timeout之前会继续定位，尝试拿到符合要求的定位结果|仅飞书小程序支持|
|isHighAccuracy|Boolean|否|开启高精度定位|App (3.4.0+)、H5 (3.4.0+)、微信小程序 (基础库 2.9.0+)|
|success|Function|是|接口调用成功的回调函数，返回内容详见返回参数说明。||
|fail|Function|否|接口调用失败的回调函数||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|

**success 返回参数说明**

|参数|说明|
|:-|:-|
|latitude|纬度，浮点数，范围为-90~90，负数表示南纬|
|longitude|经度，浮点数，范围为-180~180，负数表示西经|
|speed|速度，浮点数，单位m/s|
|accuracy|位置的精确度|
|altitude|高度，单位 m|
|verticalAccuracy|垂直精度，单位 m（Android 无法获取，返回 0）|
|horizontalAccuracy|水平精度，单位 m|
|[address](/api/location/location?id=address)|地址信息（仅App端支持，需配置geocode为true）|

**address 地址信息说明**

|属性|类型|描述|说明|
|:-|:-|:-|:-|
|country|String|国家|如“中国”，如果无法获取此信息则返回undefined|
|province|String|省份名称|如“北京市”，如果无法获取此信息则返回undefined|
|city|String|城市名称|如“北京市”，如果无法获取此信息则返回undefined|
|district|String|区（县）名称|如“朝阳区”，如果无法获取此信息则返回undefined|
|street|String|街道信息|如“酒仙桥路”，如果无法获取此信息则返回undefined|
|streetNum|String|获取街道门牌号信息|如“3号”，如果无法获取此信息则返回undefined|
|poiName|String|POI信息|如“电子城．国际电子总部”，如果无法获取此信息则返回undefined|
|postalCode|String|邮政编码|如“100016”，如果无法获取此信息则返回undefined|
|cityCode|String|城市代码|如“010”，如果无法获取此信息则返回undefined|

**示例**

```javascript
uni.getLocation({
	type: 'wgs84',
	success: function (res) {
		console.log('当前位置的经度：' + res.longitude);
		console.log('当前位置的纬度：' + res.latitude);
	}
});
```

**注意事项**

- `H5 平台`
  - 在较新的浏览器上，H5 端获取定位信息，要求部署在 **https** 服务上，本地预览（localhost）仍然可以使用 http 协议。
  - 国产安卓手机上，H5若无法定位，检查手机是否开通位置服务、GPS，ROM是否给该浏览器位置权限、浏览器是否对网页弹出请求给予定位的询问框。
  - `安卓手机` 在原生App内嵌H5时，无法定位需要原生App处理Webview。
  - `移动端浏览器` 普遍仅支持GPS定位，在GPS信号弱的地方可能定位失败。
  - `PC 设备` 使用 Chrome 浏览器的时候，位置信息是连接谷歌服务器获取的，国内用户可能获取位置信息失败。
  - 微信公众号可使用微信js sdk，[详见](https://ask.dcloud.net.cn/article/35380)
  - `2.9.9 版本以上`，优化 uni.getLocation 支持通过 IP 定位。默认通过 GPS 获取，如果获取失败，备选方案是通过 IP 定位获取，需填写三方地图服务平台的秘钥（key）。key配置：manifest.json ---> H5配置 ---> 定位和地图 ---> key。
- `App 平台`
  - Android由于谷歌服务被墙，或者手机上没有GMS，想正常定位就需要向高德等三方服务商申请SDK资质，获取AppKey。否则打包后定位就会不准。云打包时需要在manifest的SDK配置中填写 Appkey。在 manifest 可视化界面有详细申请指南，详见：[https://ask.dcloud.net.cn/article/29](https://ask.dcloud.net.cn/article/29)。离线打包自行在原生工程中配置。注意**包名、appkey、证书信息**必须匹配。真机运行可以正常定位，是因为真机运行基座使用了DCloud向高德申请的sdk配置，打包后必须由开发者自己申请。如果手机自带GMS且网络环境可以正常访问google定位服务器，此时无需在 manifest 填写高德定位的 sdk 配置。
  - 注意手机自身要开启定位、同时要给App赋予定位权限。权限判断可参考：[https://uniapp.dcloud.net.cn/api/system/getappauthorizesetting.html](https://uniapp.dcloud.net.cn/api/system/getappauthorizesetting.html)
  - `<map>` 组件默认为国测局坐标 gcj02，调用 `uni.getLocation` 返回结果传递给 `<map>` 组件时，需指定 type 为 gcj02。
  - 定位 和 map 是两个东西。通过 `getLocation` 得到位置坐标后，可以在任意map地图上展示，比如定位使用高德，地图使用 google 的 webview 版地图。如果坐标系不同时，注意转换坐标系。
  - 如果使用 `web-view` 加载地图，无需在manifest里配地图的sdk配置。
  - 持续定位方案：iOS端可以申请持续定位权限，[参考](https://ask.dcloud.net.cn/article/12569)。Android如果进程被杀，代码无法执行，可以在插件市场搜索[保活](https://ext.dcloud.net.cn/search?q=%E4%BF%9D%E6%B4%BB&cat1=5)相关原生语言插件避免App被系统杀死。即使使用了原生语言插件保活，也很容易被杀，此时可以使用[unipush](https://uniapp.dcloud.net.cn/unipush-v2.html) ，通过推送消息提示用户激活App
  - `3.3.0 版本以上` 优化系统定位模块，可不使用三方定位SDK的进行高精度定位，具体参考：[系统定位](app/geolocation)。
  - 鸿蒙系统 不支持系统定位，需要配置三方sdk，比如高德，同时设置坐标系参数为 `type: 'gcj02'`
  - 如需使用腾讯定位sdk，可下载[腾讯定位插件](https://ext.dcloud.net.cn/plugin?id=14569)，在插件中配置key打包后生效，腾讯定位是[ext api插件](../../api/extapi.md)引用到工程后，会覆盖uni.getLocation的实现，替换掉系统定位。
- `小程序平台`
  - api默认不返回详细地址中文描述。需要中文地址有2种方式：1、使用高德地图小程序sdk，在app和微信上都可以获得中文地址，[参考](http://ask.dcloud.net.cn/article/35070)。2、只考虑app，使用``plus.geolocation``也可以获取中文地址。manifest里的App SDK配置仅用于app，小程序无需在这里配置。
  - 可以通过用户授权API来判断用户是否给应用授予定位权限，[详见](https://uniapp.dcloud.io/api/other/authorize)
  - 在 `微信小程序` 中，当用户离开应用后，此接口无法调用，需要申请 [后台持续定位权限](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html) ，另外新版本中需要使用 [wx.onLocationChange](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.onLocationChange.html) 监听位置信息变化；当用户点击“显示在聊天顶部”时，此接口可继续调用。

### uni.chooseLocation(OBJECT)
打开地图选择位置。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|x|x|


**OBJECT 参数说明**

|参数名|类型|必填|说明|平台差异说明|
|:-|:-|:-|:-|:-|
|latitude|Number|否|目标地纬度|微信小程序（2.9.0+）、H5-Vue3（3.2.10+）|
|longitude|Number|否|目标地经度|微信小程序（2.9.0+）、H5-Vue3（3.2.10+）|
|keyword|String|否|搜索关键字，仅App平台支持||
|success|Function|是|接口调用成功的回调函数，返回内容详见返回参数说明。||
|fail|Function|否|接口调用失败的回调函数（获取定位失败、用户取消等情况下触发）||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）||

**注意**
- 因平台差异，如果SDK配置百度地图，需要设置 keyword，才能显示相关地点
- [非 weex 编译模式](/collocation/manifest.html#app-plus)不支持百度地图


**success 返回参数说明**

|参数|说明|
|:-|:-|
|name|位置名称|
|address|详细地址|
|latitude|纬度，浮点数，范围为-90~90，负数表示南纬，使用 gcj02 国测局坐标系。|
|longitude|经度，浮点数，范围为-180~180，负数表示西经，使用 gcj02 国测局坐标系。|

**示例**

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
- 不同端，使用地图选择时基于的底层地图引擎不一样，详见地图[map](/component/map)组件的地图服务商支持。
  - `app` 中也可以使用百度定位，在 manifest 中配置，打包后生效。
  - `app-nvue` 里只能用高德定位和Google地图(3.4+)，不能用百度地图。另外选择地图、查看地图位置的API也仅支持高德地图和Google地图(3.4+)。所以App端如无特殊必要，建议使用高德地图。
- `H5 端` 使用地图和定位相关，需要在 [manifest.json](/collocation/manifest?id=h5sdkconfig) 内配置腾讯或谷歌等三方地图服务商申请的秘钥（key）。
- `微信内置浏览器` 中可使用微信js sdk，[详见](https://ask.dcloud.net.cn/article/35380)
- chooseLocation 属于封装型API，开发者若觉得不够灵活，可自行基于原始的 map 组件进行封装。插件市场已经有各种封装样例了。
- 若 `Android App端` 位置不准，见上文 uni.getLocation 的注意事项
- 微信小程序在2023年10月17日之后，使用API需要配置[隐私协议](https://developers.weixin.qq.com/miniprogram/dev/framework/user-privacy/PrivacyAuthorize.html)

### 三方定位和地图服务收费说明

使用三方定位或者地图服务，需向服务提供商（如：高德地图、百度地图、腾讯地图、谷歌地图）申请商业授权和缴纳费用（5万/年）。

DCloud为开发者争取了福利，可优惠获取高德的商业授权。如有需求请发邮件到`bd@dcloud.io`（注明你的公司名称、应用介绍、HBuilder账户）；你也可以直接通过`uni-im`发起在线咨询，在线咨询地址：[DCloud地图服务专员](https://im.dcloud.net.cn/#/?user_id=b9839630-a479-11ea-b772-0f6ad6cf835c)。

详见：[https://uniapp.dcloud.net.cn/tutorial/app-geolocation.html#lic](https://uniapp.dcloud.net.cn/tutorial/app-geolocation.html#lic)

### unicloud-city-select 城市选择组件

若想要实现城市选择功能，可以使用 `unicloud-city-select` 城市选择组件。

**运行效果图**

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/3707/410.png)

> 下载地址：[https://ext.dcloud.net.cn/plugin?name=unicloud-city-select](https://ext.dcloud.net.cn/plugin?name=unicloud-city-select)

> 文档地址：[https://uniapp.dcloud.net.cn/uniCloud/unicloud-city-select.html](https://uniapp.dcloud.net.cn/uniCloud/unicloud-city-select.html)
