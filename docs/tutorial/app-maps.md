App端地图模块封装了市场上主流的三方地图SDK，提供JS API统一调用Android、iOS原生地图功能。

|项目类型|API|
|:-|:-|
|uni-app|[uni.getLocation(OBJECT)](https://uniapp.dcloud.io/api/location/location?id=getlocation)、[uni.chooseLocation(OBJECT)](https://uniapp.dcloud.io/api/location/location?id=chooselocation)、[uni.openLocation(OBJECT)](https://uniapp.dcloud.io/api/location/open-location?id=openlocation)、[uni.createMapContext(mapId,this)](api/location/map?id=createmapcontext)、[map](component/map)组件|
|5+App/Wap2App|[plus.maps.*](https://www.html5plus.org/doc/zh_cn/maps.html)

使用地图功能需在项目manifest.json的“App模块配置”中勾选“Maps(地图)”，并根据项目实际情况勾选使用的三方地图SDK：
![](https://native-res.dcloud.net.cn/images/uniapp/maps/modules.png)

> 提示：App模块配置需提交云端打包后才能生效，真机运行调试时请使用[自定义基座](http://ask.dcloud.net.cn/article/35115)

**注意**  
- 使用高德地图、百度地图需要商业授权，详情参考 [商业授权相关说明](app-geolocation?id=business)  
- uni-app项目中仅nvue页面支持使用原生SDK
- uni-app项目暂时不支持使用百度地图


### 高德地图  

#### 申请高德地图Key  
使用前需到[高德开放平台](https://lbs.amap.com/)创建应用并申请Key
- 登录 [高德开放平台](https://lbs.amap.com/)，进入“控制台”，如果没有注册账号请先根据页面提示注册账号  
- 打开 “应用管理” -> “我的应用”页面，点击“创建新应用”，根据页面提示填写内容创建应用
- 在应用下点击“添加”为应用添加Key，根据需要分别为Android平台、iOS平台申请Key

#### 配置使用高德地图  
打开项目的manifest.json文件，在“App模块配置”项的“Maps(地图)”下，勾选“高德地图”：
![](https://native-res.dcloud.net.cn/images/uniapp/maps/amap.png)

#### 参数说明  
- 高德用户名  
高德开放平台注册账号的用户名，获取方式参考“[高德开放平台用户名](#amapName)”章节
- appkey_android  
高德开放平台申请的Android平台Key
- appkey_ios  
高德开放平台申请的iOS平台Key

**注意**
- HBuilderX标准基座默认使用高德地图SDK，可以直接真机运行测试，此时配置的应用包名、签名信息不生效，正式发布前请提交云端打包或使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)测试
- 本地离线打包参考[Android平台高德地图模块配置](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/map?id=%e9%ab%98%e5%be%b7%e5%9c%b0%e5%9b%be)、[iOS平台高德地图模块配置](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/map?id=%e9%ab%98%e5%be%b7%e5%9c%b0%e5%9b%be)

#### 高德开放平台用户名@amapName  
登录 [高德开放平台](https://lbs.amap.com/)，进入“控制台”，在“账号信息”的“基本信息”中可获取“用户名”：  
![](https://native-res.dcloud.net.cn/images/uniapp/maps/amap_name.png)


### 百度地图  

#### 申请百度地图Key  
使用前需到[百度开放平台](https://lbsyun.baidu.com/)创建应用并申请Key
- 登录 [百度开放平台](https://lbsyun.baidu.com/)，进入“控制台”，如果没有注册账号请先根据页面提示注册账号  
- 打开 “应用管理” -> “我的应用”页面，点击“创建应用”，根据页面提示填写内容创建应用获取Key

#### 配置使用百度地图  
打开项目的manifest.json文件，在“App模块配置”项的“Maps(地图)”下，勾选“百度地图”：
![](https://native-res.dcloud.net.cn/images/uniapp/maps/bmap.png)

#### 参数说明  
- appkey_android  
百度地图开放平台申请的Android平台Key
- appkey_ios  
百度地图开放平台申请的iOS平台Key

**注意**
- HBuilderX标准基座没有包含百度地图，请配置后使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)测试
- 本地离线打包参考[Android平台百度地图模块配置](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/map?id=%e7%99%be%e5%ba%a6%e5%9c%b0%e5%9b%be)、[iOS平台百度地图模块配置](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/map?id=%e7%99%be%e5%ba%a6%e5%9c%b0%e5%9b%be)


### Google地图（谷歌地图/google map）

> HBuilderX3.4.0+版本新增支持

#### 申请Google地图Key  
使用前需到[Google地图开放平台](https://console.cloud.google.com/google/maps-apis)创建应用并申请APIKey
- 登录 [Google地图开放平台](https://console.cloud.google.com/google/maps-apis)，如果没有注册账号请先根据页面提示注册账号  
- 根据页面提示新建项目，也可以选择已经存在的项目  
- 打开“凭证”页面，点击 “创建凭证” -> “API密钥”获取APIKey，由于Google地图需要收费，为了保证安全建议配置限制密钥
  + Android平台  
  在“应用限制”下勾选“Android应用”，并添加绑定“软件包名称”、“SHA-1证书指纹”；在“API限制”下建议勾选“不限制密钥”  
  + iOS平台  
  在“应用限制”下勾选“iOS应用”，并添加绑定“软件包ID”；在“API限制”下建议勾选“不限制密钥”  

#### 配置使用Google地图  
打开项目的manifest.json文件，在“App模块配置”项的“Maps(地图)”下，勾选“Google地图”：
![](https://native-res.dcloud.net.cn/images/uniapp/maps/gmap.png)

#### 参数说明  
- APIKey_android  
Google地图开放平台申请的Android平台APIKey
- APIKey_ios  
Google地图开放平台申请的iOS平台APIKey

**注意**
- Google地图在Android、iOS平台SDK不支持POI搜索，无法直接使用[uni.chooseLocation(OBJECT)](https://uniapp.dcloud.io/api/location/location?id=chooselocation)，可以申请Web Server APIKey在业务服务器端进行POI搜索，在App端自己实现chooseLocation相关功能
- HBuilderX标准基座没有包含Google地图，请配置后使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)测试
