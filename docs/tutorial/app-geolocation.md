App端定位模块封装系统自带的`系统定位`，及市场上主流的三方定位SDK，如`高德定位`、`百度定位`等，提供JS API统一调用定位功能。
The `system positioning` that comes with the packaging system of the app-side positioning module, and the mainstream three-party positioning SDKs in the market, such as `Gode positioning`, `Baidu positioning`, etc., provide JS API unified call positioning function.

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

标准Android系统的定位服务是Google提供的，但需要手机内置GMS服务，连接Google服务器。  
The positioning service of the standard Android system is provided by Google, but it requires the built-in GMS service of the mobile phone to connect to the Google server.
国内主流手机厂商均自行提供了定位服务，但小众品牌可能不支持，主流品牌中较老的机型也不支持。如下Android手机厂商都支持`系统定位`：
Domestic mainstream mobile phone manufacturers provide their own positioning services, but niche brands may not support it, nor do older models from mainstream brands. The following Android phone manufacturers support `system positioning`:
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

在国外通常都是使用Google的GMS提供定位服务。
In foreign countries, Google's GMS is usually used to provide location services.

**注意**
**Notice**
- 由于设备厂商适配的原因，在部分Android设备上定位服务可能不稳定，如需提升定位功能的稳定性建议使用`高德定位`或`百度定位`
- Due to the adaptation of the device manufacturer, the positioning service may be unstable on some Android devices. If you want to improve the stability of the positioning function, it is recommended to use `Guide Positioning` or `Baidu Positioning`
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

### 商业授权相关说明
### Commercial Authorization Instructions

从2021年初开始，高德、百度、腾讯等地图服务商更新了服务协议、开始实施商业授权机制，要求除公益App外所有使用地图相关功能（包括定位SDK、地图SDK、H5地图等）都需要获取地图服务商的商业授权。重点强调一下，免费应用同样需要商业授权，除非你的应用是公益类App，其它类型App都需要商业授权。
From the beginning of 2021, map service providers such as AutoNavi, Baidu, and Tencent have updated their service agreements and started to implement a commercial authorization mechanism, requiring all map-related functions (including positioning SDK, map SDK, H5 map, etc.) Obtain commercial authorization from map service providers. It is important to emphasize that free applications also require commercial authorization. Unless your application is a public welfare application, other types of applications require commercial authorization.
- 高德地图参考：[https://lbs.amap.com/upgrade](https://lbs.amap.com/upgrade)
- Amap map reference: [https://lbs.amap.com/upgrade](https://lbs.amap.com/upgrade)
- 百度地图参考：[https://lbsyun.baidu.com/cashier/auth](https://lbsyun.baidu.com/cashier/auth)
- Baidu map reference: [https://lbsyun.baidu.com/cashier/auth](https://lbsyun.baidu.com/cashier/auth)

没有取得地图服务商授权的App可能会遇到定位或地图功能被停用、上架应用市场可能提示存在侵权的问题，因此需要向高德、百度等地图开放平台申请商业授权。
Apps that have not obtained the authorization of the map service provider may encounter problems of positioning or map functions being disabled, and the application market may prompt the existence of infringement. Therefore, it is necessary to apply for commercial authorization from map open platforms such as AutoNavi and Baidu.

为了避免商业授权引起的问题，如仅需获取wgs84坐标的情况下也可以只使用“系统定位”模块，“系统定位”在功能和机型适配上没有高德、百度等商业定位服务完善，需开发者根据实际情况选择。
In order to avoid problems caused by commercial authorization, if you only need to obtain the coordinates of wgs84, you can only use the "system positioning" module. "System positioning" is not as complete as AutoNavi, Baidu and other commercial positioning services in terms of function and model adaptation. Developers need to choose according to the actual situation.

DCloud为开发者争取了福利，可打折获取高德的商业服务，如有需求请发邮件到`bd@dcloud.io`；你也可以直接通过`uni-im`发起在线咨询，DCloud有专人帮你处理商业授权相关问题， 在线咨询地址：[DCloud地图服务专员](https://im.dcloud.net.cn/#/?user_id=b9839630-a479-11ea-b772-0f6ad6cf835c)。



