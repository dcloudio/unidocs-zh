# Geolocation定位

定位模块封装了OS自带的`系统定位`，及市场上主流的三方定位SDK，如`高德定位`、`百度定位`等。并提供统一的JS API调用定位能力。

::: warning 注意
三方定位（高德、百度、腾讯、谷歌）是商业收费服务，需获取授权，注意避免侵权。[详见](#lic)
:::

|项目类型|API|
|Project Type|API|
|:-|:-|
|uni-app|[uni.getLocation(OBJECT)](api/location/location?id=getlocation)|
|5+ App/Wap2App|[plus.geolocation.*](https://www.html5plus.org/doc/zh_cn/geolocation.html)

使用定位功能需在项目manifest.json的“App模块配置”中勾选“Geolocation(定位)”，并根据项目实际需求勾选使用的三方定位SDK：
![](https://native-res.dcloud.net.cn/images/uniapp/geolocation/modules.png)



### 系统定位  
### System Location

> HBuilderX3.2.16开始独立出“系统定位”模块
> HBuilderX3.2.16 began to separate out the "system location" module

使用`系统定位`需在“App模块配置”项的“Geolocation(定位)”下，勾选“系统定位”：
![](https://native-res.dcloud.net.cn/images/uniapp/geolocation/system.png)

`系统定位`调用设备的操作系统提供的定位服务，只支持wgs84坐标系，不同设备对定位功能支持的情况有所差异。
`System positioning` calls the positioning service provided by the operating system of the device, which only supports the wgs84 coordinate system. Different devices support different positioning functions.

#### iOS平台
#### iOS Platform
由苹果iOS系统提供定位服务，可以获取经纬度信息，支持解析地址信息，即可以直接返回城市街道信息。
The positioning service is provided by Apple's iOS system, which can obtain latitude and longitude information and support the resolution of address information, that is, it can directly return city street information.

#### Android平台
#### Android Platform
只可以获取经纬度信息，不支持解析地址信息，即无法返回城市街道信息。
Only latitude and longitude information can be obtained, and address information cannot be resolved, that is, city street information cannot be returned.

标准Android系统的定位服务是Google的GMS服务，需连接Google服务器。中国大陆地区用户无法翻墙，导致无法使用定位，或者很多国产手机阉割掉了GMS，也导致无法使用定位。

国内手机厂商早期均没有内置替代GMS的位置服务，这些设备上只能使用三方定位。但后期大品牌手机和三方定位合作，内置了替代GMS的版本。如下Android手机厂商的新款手机都支持`系统定位`：
- 华为
- Huawei
- 小米
- Oppo
- Vivo
- 努比亚
- Nubia
- 一加
- one plus
- 魅族
- Meizu
- 联想
- Lenovo
- 金立
- Gionee

其他小众品牌可能不支持，主流品牌中较老的机型也不支持，暂无机型清单，需自行测试。

**注意**
- 由于设备厂商适配的原因，在部分Android设备上定位服务可能不稳定，如需提升定位功能的稳定性建议使用`高德定位`或`腾讯定位`
- 本地离线打包参考[Android平台系统定位模块配置](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/geolocation?id=%e7%b3%bb%e7%bb%9f%e5%ae%9a%e4%bd%8d)、[iOS平台百度定位模块配置](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/geolocation?id=%e7%b3%bb%e7%bb%9f%e5%ae%9a%e4%bd%8d)
- Local offline packaging reference [Android platform system positioning module configuration](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/geolocation?id=%e7%b3%bb%e7%bb%9f%e5 %ae%9a%e4%bd%8d), [iOS platform Baidu positioning module configuration](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/geolocation?id=%e7%b3%bb% e7%bb%9f%e5%ae%9a%e4%bd%8d)



### 高德定位
### Gaode Positioning

> 需要向高德申请商业授权，参考:[商业授权相关说明](app-geolocation?id=business)，使用前需登录 [高德开放平台](https://lbs.amap.com/) 创建应用申请Key
> You need to apply for business authorization from AutoNavi, refer to: [Commercial authorization instructions](app-geolocation?id=business), you need to log in to the [AutoNavi Open Platform](https://lbs.amap.com/) to create Application Application Key

使用`高德定位`需在“App模块配置”项的“Geolocation(定位)”下，勾选“高德定位”：
![](https://native-res.dcloud.net.cn/images/uniapp/geolocation/amap.png)

#### 参数说明  
#### Parameter Description  
- appkey_android  
[高德开放平台](https://lbs.amap.com/)为Android平台申请的Key
[Amap Open Platform](https://lbs.amap.com/) Key applied for Android platform
- appkey_ios  
[高德开放平台](https://lbs.amap.com/)为iOS平台申请的Key
[Amap Open Platform](https://lbs.amap.com/) Key applied for iOS platform

**注意**  
**Notice**  
- 调用高德定位SDK提供的定位服务，仅支持gcj02坐标系，支持解析地址信息。
- Calling the positioning service provided by the AutoNavi positioning SDK, it only supports the gcj02 coordinate system, and supports parsing address information.
- 配置后需提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)
- After configuration, the cloud package must be submitted to take effect. Please use the [custom debugging base] when the real machine is running (https://ask.dcloud.net.cn/article/35115)
- 本地离线打包参考[Android平台高德定位模块配置](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/geolocation?id=%e9%ab%98%e5%be%b7%e5%ae%9a%e4%bd%8d)、[iOS平台高德定位模块配置](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/geolocation?id=%e9%ab%98%e5%be%b7%e5%ae%9a%e4%bd%8d)
- Local offline packaging reference [Android platform AutoNavi positioning module configuration](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/geolocation?id=%e9%ab%98%e5%be%b7% e5%ae%9a%e4%bd%8d), [iOS Platform Geolocation Module Configuration](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/geolocation?id=%e9%ab% 98%e5%be%b7%e5%ae%9a%e4%bd%8d)


### 百度定位
### Baidu positioning

> 需要向百度申请商业授权，参考:[商业授权相关说明](app-geolocation?id=business)，使用前需登录 [百度地图开放平台](https://lbsyun.baidu.com/) 创建应用申请访问应用密钥（AK）
> You need to apply for business authorization from Baidu, please refer to: [Commercial authorization instructions](app-geolocation?id=business), you need to log in to [Baidu Map Open Platform](https://lbsyun.baidu.com/) to create an application before use Request an Access Application Key (AK)

使用`高德定位`需在“App模块配置”项的“Geolocation(定位)”下，勾选“高德定位”：
![](https://native-res.dcloud.net.cn/images/uniapp/geolocation/baidu.png)

#### 参数说明  
#### Parameter Description  
- appkey_android  
[百度地图开放平台](https://lbsyun.baidu.com/)为Android平台申请的访问应用密钥
[Baidu Map Open Platform](https://lbsyun.baidu.com/) Access application key applied for Android platform
- appkey_ios  
[百度地图开放平台](https://lbsyun.baidu.com/)为iOS平台申请的访问应用密钥
[Baidu Map Open Platform](https://lbsyun.baidu.com/) Access application key applied for the iOS platform

**注意**  
**Notice**  
-调用百度定位SDK提供的定位服务，仅支持gcj02/bd09/bd09ll坐标系，支持解析地址信息。
- Calling the positioning service provided by Baidu Positioning SDK, only supports gcj02/bd09/bd09ll coordinate system, and supports parsing address information.
- 配置后需提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)
- After configuration, the cloud package must be submitted to take effect. Please use the [custom debugging base] when the real machine is running (https://ask.dcloud.net.cn/article/35115)
- 本地离线打包参考[Android平台百度定位模块配置](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/geolocation?id=%e7%99%be%e5%ba%a6%e5%ae%9a%e4%bd%8d)、[iOS平台百度定位模块配置](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/geolocation?id=%e7%99%be%e5%ba%a6%e5%ae%9a%e4%bd%8d)
- Local offline packaging reference [Android platform Baidu positioning module configuration](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/geolocation?id=%e7%99%be%e5%ba%a6%e5 %ae%9a%e4%bd%8d), [iOS platform Baidu positioning module configuration](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/geolocation?id=%e7%99%be% e5%ba%a6%e5%ae%9a%e4%bd%8d)


<a id="business"/>

### 商业授权相关说明@lic

#### 国内用户
2021年起，高德、百度、腾讯等地图服务商开始商业授权。

授权费用：5万元/年。

例外：如果是公益类应用，可以申请豁免商业授权。只要不是公益应用，不管你有多少用户，都需要获取商业授权。

**未授权面临的问题和风险：**
1. 法律问题：违反产品使用许可，也就是侵权了
2. 功能问题：定位、地图、服务器相关接口随时可能被停用
3. 上架某些应用市场会提示侵权而导致无法上架

**商业授权的范围：**
1. 凡是要请求地图厂商服务器的，均属于授权范围。不管是使用这3家的定位SDK、地图SDK，不管是app、web、小程序、服务器接口。
2. 如果你的应用没有配置在3家厂商注册账户后申请的应用秘钥（AppKey等），则无需付费。比如在小程序里使用自带的定位api和map组件，已经由小程序平台给地图厂商付费了，所以开发者无需再向地图厂商申请appkey和付费。但如果开发者在地图厂商的开放平台注册了开发者账户，且调用了它们的服务器接口，比如逆地址解析，仍然要获取商业授权。

**如何节省费用：**
1. 使用定位时，可以优先调用系统定位。
  - iOS可以直接用。
  - Android如果在国外可直接用。如果国内，因为google服务被墙，情况较复杂。
    + 小米、华为的系统定位可以直接用，因为他们已经向地图厂商购买了授权并封装成了系统定位。但其他品牌的手机则需要开发者自行测试，也有的品牌在较新的手机上支持了系统定位。手机webview的定位api背后也是系统定位，如果系统定位支持，就可以直接用，如果不支持，那webview里也用不了。所以无需考虑用webview的定位来绕过。
    + 微信浏览器、QQ浏览器的定位之所以可以使用，也是因为这些浏览器厂商向地图厂商购买了授权。如果你的web应用跑在这些浏览器里，调用定位api是没问题的。
  - 系统定位只能拿到坐标，无法获取地址信息，比如城市、街道。如需要根据坐标获取街道信息，需使用地图厂商的逆地址解析，这属于商业授权范围。
2. 使用地图时，在你的app里通过schema调用，打开地图厂商的app，比如直接交给高德地图来导航，这种情况无需在地图厂商注册账户和获取应用key，也就不需要付费。
3. 联系DCloud申请折扣优惠。

DCloud为开发者争取了福利，可优惠获取高德、腾讯的商业授权。如有需求请发邮件到`shacui@dcloud.io`（注明你的公司名称、应用名称/介绍、HBuilder账户）；你也可以直接通过`企业微信`发起在线咨询，扫描以下二维码获取地图福利。如您需要快速回复，一定注明公司名称、应用名称/介绍、以及HBuilder账户，感谢你的理解与配合。
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-ad/sc-weixin.png)

**注意骗局**

部分中介采用共享地图授权的模式，吸引开发者向该中介采购地图授权。本质是中介向地图厂商支付授权费，然后把开发者的应用创建到中介在地图厂商的账户下。

这种做法是纯粹的骗局。因为开发者向中介支付了费用，虽然可能低于地图厂商的授权费，但开发者并没有获得商业许可。地图厂商的商业许可是出具给中介的，开发者仍然是侵权的。地图厂商仍然会给您打电话催缴商业许可费用。

所以请开发者务必注意，付款时一定要拿到地图厂商向您出具的授权许可。切勿付了款又没有得到授权，财物两空。

对于已经被中介欺骗的开发者，请尽快向公安报案。

#### 海外用户
海外用户使用google地图，也需要付费，支持按量付费，具体请参阅google地图官网。

