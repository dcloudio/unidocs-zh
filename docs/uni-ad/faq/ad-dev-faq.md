## 开发接入常见问题

### 我的广告代码如何部署到应用上？

- 开屏广告（无需开发，后台开通即可生效，关闭可通过后台云开关控制）
- 信息流广告/原生广告
- 激励视频广告
- Draw 视频广告
- 插屏广告

> **请严格按照官方文档进行代码部署，否则广告可能无法正常展示！**
>
> 技术支持uni-im交流群：[点击加入](https://im.dcloud.net.cn/#/?joinGroup=65d85fc09847e92db03ff81a)

---

### 如果开屏广告同时开启 DCloud 快捷广告和渠道 SDK 广告，请求顺序是怎样的？

所有请求顺序由算法动态调整，渠道收益高的优先展示。

---

### 激励视频开启了服务器回调，没有收到回调请求？

1. 登录[uniCloud](https://unicloud.dcloud.net.cn/)检查`uniAdCallback`云函数日志是否有回调请求。
2. 检查激励视频logo是否是快手广告，快手反作弊23年开始做了调整，原来被风控命中的用户直接不返回广告；现在风控分两种，一种是设备风控，一种是单次广告风控，如果是单次广告风控，单次拉取不给服务器回调，下次拉取广告是还能拉取到的，如测试时遇到快手广告无服务器会回调，请更换设备、网络重新进行测试。

---
### 激励视频开启了服务器回调，重复收到回调请求？

如重复收到回调请求，请检查回调参数trans_id是否一致，如一致则表明广告渠道商未收到正确返回值触发广告回调重试机制。[回调约定返回值](https://uniapp.dcloud.net.cn/uni-ad/ad-rewarded-video.html#%E5%BC%80%E5%8F%91%E8%80%85%E8%BF%94%E5%9B%9E%E6%95%B0%E6%8D%AE%E7%BA%A6%E5%AE%9A)

---

### 广告展示时报错，错误码-5002，无效的广告位标识adpid，请使用正确的adpid？
1. 打包时基座和广告位不匹配，使用正式广告位需要[自定义基座调试](https://uniapp.dcloud.net.cn/tutorial/run/run-app.html#customplayground)进行打包
2. 检查打包时appid是否和[uni-ad](https://uniad.dcloud.net.cn/)申请的appid一致

---

### Android平台引导用户授权获取设备信息（IMEI、IMSI）权限？
设备信息对于广告投放平台非常重要，可以通过设备标识信息对用户及设备进行画像，分析用户的属性、行为等，从而大幅提升广告投放的精准度。
默认情况下，开通广告后应用首次启动会自动申请获取设备信息权限，用户可以拒绝授权，应用也可以继续运行，但广告平台也无法获取设备信息导致下发的广告跟用户匹配度不够高，甚至影响广告填充率。因此如果应用能够拥有获取设备信息权限，将会有助于提升广告收益。

在应用中可以强制设置必须授权获取设备信息权限才能运行，用户拒绝授权将会弹出提示框，配置方法：
打开manifest.json文件，切换到“源码视图”项
- uni-app项目
在 "app-plus" -> "distribute" -> "android" 节点下添加 permissionPhoneState 节点
- 5+ App项目
在 "plus" -> "distribute" -> "google" 节点下添加 permissionPhoneState 节点

permissionPhoneState节点数据格式如下：
```
    "permissionPhoneState": {
        "request": "always",
        "prompt": "为保证您正常、安全地使用，需要获取设备识别码（部分手机提示为获取手机号码）使用权限，请允许。"
     }
```

request字段需设置为"always"，表示强制设置应用必须授权获取设备信息权限
prompt字段为用户拒绝获取设备信息权限时弹出提示框上的内容，建议根据应用功能修改为更为友好的提示信息

> 需提交云端打包才能生效，更多详情及离线打包配置请参考：[https://ask.dcloud.net.cn/article/36549](https://ask.dcloud.net.cn/article/36549#phonestate)

---

### iOS平台使用广告标识IDFA
IDFA是苹果官方提供用于追踪用户的广告标识符，与Android平台的设备信息类似，广告平台可以通过IDFA来分析用户的属性、行为来提升广告投放的精准度。
应用如果使用广告标识，将会有助于提升广告收益。

> 使用IDFA的配置方法参考：[https://ask.dcloud.net.cn/article/36107](https://ask.dcloud.net.cn/article/36107)

---

### 引导用户授权定位（位置信息）权限
同样位置信息对于广告平台的用户的属性、行为分析也很重要，如果能够获取位置信息，也可以大幅提升广告投放的精准度，从而提升广告收益。
如果应用中已经使用了定位或地图功能，manifest.json中配置添加百度或高德地图模块则会自动添加定位权限，调用相关功能会自动弹出授权提示框。
如果应用中没有使用定位或地图功能，可以在manifest.json的“App模块权限配置”中配置定位权限：
- Android平台
在“Android权限配置”项下勾选android.permission.ACCESS_COARSE_LOCATION、android.permission.ACCESS_FINE_LOCATION权限：
![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/uniad/geo-a.png)
- iOS平台
在“iOS隐私信息访问的许可描述”项下输入访问位置信息的描述：
![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/uniad/geo-i.png)

在应用添加业务场景使用定位功能，并引导用户授权定位权限，可以调用以下5+ API进行定位
```
plus.geolocation.getCurrentPosition(function(p){//成功回调
  console.log('Geolocation\nLatitude:' + p.coords.latitude + '\nLongitude:' + p.coords.longitude + '\nAltitude:' + p.coords.altitude);
}, function(e){//失败回调
  console.log('Geolocation error: ' + e.message);
});
```

调用定位API时会弹出系统位置授权框，如果用户拒绝权限将会触发失败回调，可以弹出警告提示某些业务功能无法使用来引导用户授权定位权限。

---

### 防刷

为了提升安全性，建议所有使用激励视频的开发者都要做激励视频[服务器回调功能](https://uniapp.dcloud.net.cn/uni-ad/ad-rewarded-video.html#callback)，除此之外还可用如下办法来加强安全保护（防止刷量）：
1. 前端代码加密。涉及激励相关的，在manifest中配置好要加密的代码文件，打包后会自动加密相应文件。[详见](https://uniapp.dcloud.net.cn/tutorial/app-sec-confusion.html)
2. apk加固。即便前端代码加密，原生层引擎的java代码仍然可能被反编译，需要对apk加固。[详见](https://uniapp.dcloud.net.cn/tutorial/app-security.html)
3. 使用如下安全类API，防止客户端被篡改
- plus.navigator.getSignature 获取应用签名标识。结合在服务器端存放证书信息，可比对判断App的证书是否被重签 [规范](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.getSignature)
- plus.navigator.isSimulator 判断App是否运行在模拟器环境 [规范](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.isSimulator)
- plus.navigator.isRoot 判断设备是否被root或越狱 [规范](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.isRoot)
- plus.networkinfo.isSetProxy 判断设备的网络是否设置了代理 [规范](https://www.html5plus.org/doc/zh_cn/device.html#plus.networkinfo.isSetProxy)
4. 避免使用短信验证码来识别身份，推荐使用[微信登录](https://uniapp.dcloud.net.cn/api/plugins/login)、[手机号一键登陆](https://uniapp.dcloud.net.cn/univerify)
5. 必要时可使用[生物认证（指纹和faceid）](https://uniapp.dcloud.net.cn/api/system/authentication)、[活体检测的sdk](https://ext.dcloud.net.cn/search?q=%E6%B4%BB%E4%BD%93%E6%A3%80%E6%B5%8B&orderBy=Relevance&cat1=5&cat2=51)
6. 插件市场还有很多插件，比如识别设备质量，防止羊毛党，详见：[https://ext.dcloud.net.cn/search?q=%E7%BE%8A%E6%AF%9B&orderBy=UpdatedDate](https://ext.dcloud.net.cn/search?q=%E7%BE%8A%E6%AF%9B&orderBy=UpdatedDate)

---
