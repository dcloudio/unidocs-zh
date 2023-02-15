App端定位模块封装系统自带的`系统定位`，及市场上主流的三方定位SDK，如`高德定位`、`百度定位`等，提供JS API统一调用定位功能。

|项目类型|API|
|:-|:-|
|uni-app|[uni.getLocation(OBJECT)](api/location/location?id=getlocation)|
|5+ App/Wap2App|[plus.geolocation.*](https://www.html5plus.org/doc/zh_cn/geolocation.html)

使用定位功能需在项目manifest.json的“App模块配置”中勾选“Geolocation(定位)”，并根据项目实际需求勾选使用的三方定位SDK：
![](https://native-res.dcloud.net.cn/images/uniapp/geolocation/modules.png)



### 系统定位  

> HBuilderX3.2.16开始独立出“系统定位”模块

使用`系统定位`需在“App模块配置”项的“Geolocation(定位)”下，勾选“系统定位”：
![](https://native-res.dcloud.net.cn/images/uniapp/geolocation/system.png)

`系统定位`调用设备的操作系统提供的定位服务，只支持wgs84坐标系，不同设备对定位功能支持的情况有所差异。

#### iOS平台
由苹果iOS系统提供定位服务，可以获取经纬度信息，支持解析地址信息，即可以直接返回城市街道信息。

#### Android平台
只可以获取经纬度信息，不支持解析地址信息，即无法返回城市街道信息。

标准Android系统的定位服务是Google提供的，但需要手机内置GMS服务，连接Google服务器。  
国内主流手机厂商均自行提供了定位服务，但小众品牌可能不支持，主流品牌中较老的机型也不支持。如下Android手机厂商都支持`系统定位`：
- 华为
- 小米
- Oppo
- Vivo
- 努比亚
- 一加
- 魅族
- 联想
- 金立

在国外通常都是使用Google的GMS提供定位服务。

**注意**
- 由于设备厂商适配的原因，在部分Android设备上定位服务可能不稳定，如需提升定位功能的稳定性建议使用`高德定位`或`百度定位`
- 本地离线打包参考[Android平台系统定位模块配置](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/geolocation?id=%e7%b3%bb%e7%bb%9f%e5%ae%9a%e4%bd%8d)、[iOS平台百度定位模块配置](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/geolocation?id=%e7%b3%bb%e7%bb%9f%e5%ae%9a%e4%bd%8d)



### 高德定位

> 需要向高德申请商业授权，参考:[商业授权相关说明](app-geolocation?id=business)，使用前需登录 [高德开放平台](https://lbs.amap.com/) 创建应用申请Key

使用`高德定位`需在“App模块配置”项的“Geolocation(定位)”下，勾选“高德定位”：
![](https://native-res.dcloud.net.cn/images/uniapp/geolocation/amap.png)

#### 参数说明  
- appkey_android  
[高德开放平台](https://lbs.amap.com/)为Android平台申请的Key
- appkey_ios  
[高德开放平台](https://lbs.amap.com/)为iOS平台申请的Key

**注意**  
- 调用高德定位SDK提供的定位服务，仅支持gcj02坐标系，支持解析地址信息。
- 配置后需提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)
- 本地离线打包参考[Android平台高德定位模块配置](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/geolocation?id=%e9%ab%98%e5%be%b7%e5%ae%9a%e4%bd%8d)、[iOS平台高德定位模块配置](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/geolocation?id=%e9%ab%98%e5%be%b7%e5%ae%9a%e4%bd%8d)


### 百度定位

> 需要向百度申请商业授权，参考:[商业授权相关说明](app-geolocation?id=business)，使用前需登录 [百度地图开放平台](https://lbsyun.baidu.com/) 创建应用申请访问应用密钥（AK）

使用`高德定位`需在“App模块配置”项的“Geolocation(定位)”下，勾选“高德定位”：
![](https://native-res.dcloud.net.cn/images/uniapp/geolocation/baidu.png)

#### 参数说明  
- appkey_android  
[百度地图开放平台](https://lbsyun.baidu.com/)为Android平台申请的访问应用密钥
- appkey_ios  
[百度地图开放平台](https://lbsyun.baidu.com/)为iOS平台申请的访问应用密钥

**注意**  
-调用百度定位SDK提供的定位服务，仅支持gcj02/bd09/bd09ll坐标系，支持解析地址信息。
- 配置后需提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)
- 本地离线打包参考[Android平台百度定位模块配置](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/geolocation?id=%e7%99%be%e5%ba%a6%e5%ae%9a%e4%bd%8d)、[iOS平台百度定位模块配置](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/geolocation?id=%e7%99%be%e5%ba%a6%e5%ae%9a%e4%bd%8d)


<a id="business"/>

### 商业授权相关说明

从2021年初开始，高德、百度、腾讯等地图服务商更新了服务协议、开始实施商业授权机制，要求除公益App外所有使用地图相关功能（包括定位SDK、地图SDK、H5地图等）都需要获取地图服务商的商业授权。重点强调一下，免费应用同样需要商业授权，除非你的应用是公益类App，其它类型App都需要商业授权。
- 高德地图参考：[https://lbs.amap.com/upgrade](https://lbs.amap.com/upgrade)
- 百度地图参考：[https://lbsyun.baidu.com/cashier/auth](https://lbsyun.baidu.com/cashier/auth)

没有取得地图服务商授权的App可能会遇到定位或地图功能被停用、上架应用市场可能提示存在侵权的问题，因此需要向高德、百度等地图开放平台申请商业授权。

为了避免商业授权引起的问题，如仅需获取wgs84坐标的情况下也可以只使用“系统定位”模块，“系统定位”在功能和机型适配上没有高德、百度等商业定位服务完善，需开发者根据实际情况选择。

DCloud为开发者争取了福利，可打折获取高德的商业服务，如有需求请发邮件到`bd@dcloud.io`；你也可以直接通过`uni-im`发起在线咨询，DCloud有专人帮你处理商业授权相关问题， 在线咨询地址：[DCloud地图服务专员](https://im.dcloud.net.cn/#/?user_id=b9839630-a479-11ea-b772-0f6ad6cf835c)。



