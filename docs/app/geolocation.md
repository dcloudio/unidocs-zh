
> HBuilderX3.3.0开始独立出“系统定位”模块
> HBuilderX3.3.0 began to separate out the "system positioning" module

### 背景
### background

从2021年初开始，高德、百度、腾讯等地图服务商更新了服务协议、开始实施商业授权机制，要求除公益App外所有使用地图相关功能（包括定位SDK、地图SDK、H5地图等）都需要获取地图服务商的商业授权。重点强调一下，免费应用同样需要商业授权，除非你的应用是公益类App，其它类型App都需要商业授权。
From the beginning of 2021, map service providers such as AutoNavi, Baidu, and Tencent have updated their service agreements and started to implement a commercial authorization mechanism, requiring all map-related functions (including positioning SDK, map SDK, H5 map, etc.) Obtain commercial authorization from map service providers. It is important to emphasize that free applications also require commercial authorization. Unless your application is a public welfare application, other types of applications require commercial authorization.
- 高德地图参考：[https://lbs.amap.com/upgrade](https://lbs.amap.com/upgrade)
- Amap map reference: [https://lbs.amap.com/upgrade](https://lbs.amap.com/upgrade)
- 百度地图参考：[https://lbsyun.baidu.com/cashier/auth](https://lbsyun.baidu.com/cashier/auth)
- Baidu map reference: [https://lbsyun.baidu.com/cashier/auth](https://lbsyun.baidu.com/cashier/auth)
没有取得地图服务商授权的App可能会遇到定位或地图功能被停用、上架应用市场可能提示存在侵权的问题，因此需要向高德、百度等地图开放平台申请商业授权。
Apps that have not obtained the authorization of the map service provider may encounter the problem that the positioning or map function is disabled, and the application market may prompt the existence of infringement. Therefore, it is necessary to apply for commercial authorization from map open platforms such as AutoNavi and Baidu.

为了避免商业授权引起的问题，也可以只使用“系统定位”模块，“系统定位”在功能和机型适配上没有高德、百度等商业定位服务完善，需开发者根据实际情况选择。
In order to avoid problems caused by commercial authorization, you can also only use the "system positioning" module. "System positioning" is not as complete as AutoNavi, Baidu and other commercial positioning services in terms of function and model adaptation, and developers need to choose according to the actual situation.


### 系统定位
### System Location
系统定位调用的系统提供的定位服务，不同设备对定位功能支持的情况有所差异
The positioning service provided by the system called by the system positioning, different devices support the positioning function differently

#### iOS平台
#### iOS Platform
由苹果公司提供定位服务，可以获取经纬度信息，也支持解析地址信息。即可以直接返回城市街道信息。
The positioning service is provided by Apple, which can obtain longitude and latitude information, and also supports parsing address information. That is, you can directly return the city street information.

#### Android平台
#### Android Platform
标准Android平台的定位服务是Google提供的，但需要手机内置GMS服务，连接Google服务器。国产手机大多不支持。
The positioning service of the standard Android platform is provided by Google, but it requires the built-in GMS service of the mobile phone to connect to the Google server. Most domestic mobile phones do not support it.

主流国内手机厂商均自行提供了定位服务，但小众品牌可能不支持，主流品牌中较老的机型也不支持。如下Android手机厂商都支持系统定位：
Mainstream domestic mobile phone manufacturers provide their own positioning services, but niche brands may not support it, nor do older models from mainstream brands. The following Android phone manufacturers support system positioning:
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

**注意：Android系统定位模块不支持位置解析服务，只可以获取经纬度信息，不支持解析地址信息。如需要根据经纬度获取城市街道信息，仍然需要请求高德、百度等商业服务**
**Note: The Android system positioning module does not support location resolution services, only latitude and longitude information can be obtained, and address information cannot be resolved. If you need to obtain city street information based on latitude and longitude, you still need to request commercial services such as AutoNavi and Baidu**



