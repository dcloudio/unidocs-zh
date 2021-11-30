### uni-app默认集成功能模块

#### weex
**使用SDK名称:** 阿里weexSDK

**包名信息:** com.taobao

**使用目的:** uni-app基础模块默认集成，用于渲染uniapp的nvue页面引擎

**使用的权限:**
```
android.permission.WRITE_EXTERNAL_STORAGE
android.permission.READ_EXTERNAL_STORAG
```

**涉及个人信息:** 存储的个人文件

**隐私权政策链接:** [http://doc.weex.io/zh](http://doc.weex.io/zh/)
***
#### Fresco
**使用SDK名称:** Fresco图库

**包名信息:** com.facebook.fresco

**使用目的:** 用于nvue页面加载图片使用

**使用的权限:**
```
android.permission.WRITE_EXTERNAL_STORAGE
android.permission.READ_EXTERNAL_STORAG
```

**涉及个人信息:** 存储的个人文件

**隐私权政策链接:** [https://www.fresco-cn.org/](https://www.fresco-cn.org/)
***

### UniPush

UniPush是DCloud联合个推公司推出的集成型统一推送服务，使用了个推提供的SDK，因此需要在《隐私政策》中添加“个推消息推送SDK”相关说明。
建议《隐私政策》添加 “与授权合作伙伴共享”条款中，将 个推的用户隐私政策 加入其中，并向终端用户逐一明示您嵌入的SDK收集使用个人信息的目的、方式和范围。参考内容如下：

`消息推送服务供应商：由每日互动股份有限公司提供推送技术服务，我们可能会将您的设备平台、设备厂商、设备品牌、设备识别码等设备信息，应用列表信息、网络信息以及位置相关信息提供给每日互动股份有限公司，用于为您提供消息推送技术服务。我们在向您推送消息时，我们可能会授权每日互动股份有限公司进行链路调节，相互促活被关闭的SDK推送进程，保障您可以及时接收到我们向您推送的消息。详细内容请访问《个推用户隐私政策》（需将《个推用户隐私政策》超链至：http://docs.getui.com/privacy）`。

UniPush模块集成的三方SDK说明

**使用SDK名称:** 个推·消息推送

**包名信息:** com.igexin

**使用目的:** 消息推送（请根据具体使用目的填写）

**使用的权限:**
```
android.permission.ACCESS_NETWORK_STATE
android.permission.ACCESS_WIFI_STATE
android.permission.READ_PHONE_STATE
android.permission.VIBRATE
android.permission.GET_TASKS
```

**涉及个人信息:** 设备信息（IMEI、ANDROID_ID、DEVICE_ID、IMSI）、应用已安装列表、网络信息

**隐私权政策链接:** [http://docs.getui.com/privacy](http://docs.getui.com/privacy)
***
#### HMS push

推送服务（Push Kit）是华为提供的消息推送平台，建立了从云端到终端的消息推送通道。您通过集成推送服务，可以向客户端应用实时推送消息，因此需要在《隐私政策》中添加"HMS push"相关说明。

**使用SDK名称:** 华为 HMS push

**包名信息:** com.huawei.hms

**使用目的:** 华为手机厂商推送（请根据具体使用目的填写）

**使用的权限:**
```
android.permission.ACCESS_NETWORK_STATE
android.permission.ACCESS_WIFI_STATE
android.permission.REQUEST_INSTALL_PACKAGES
android.permission.FOREGROUND_SERVICE
android.permission.READ_PHONE_STATE
```

**涉及个人信息:** 设备信息（IMEI、ANDROID_ID、DEVICE_ID、IMSI）、应用已安装列表、网络信息

**隐私权政策链接:** [https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/privacy-statement-0000001050042021](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/privacy-statement-0000001050042021)
***
### Statistic

HX3.1.14+ 友盟SDK已升级到9.3.8版本 适配合规问题

+ 当你集成了统计模块。您需要确保App有《隐私政策》，并且在用户首次启动App时就弹出《隐私政策》取得用户同意！！！
+ 您务必告知用户您选择友盟+SDK服务，请在《隐私政策》中增加如下参考条款：“我们的产品集成友盟+SDK，友盟+SDK需要收集您的设备Mac地址、唯一设备识别码（IMEI/android ID/IDFA/OPENUDID/GUID、SIM 卡 IMSI 信息）以提供统计分析服务，并通过地理位置校准报表数据准确性，提供基础反作弊能力。”
+ 您务必确保用户同意《隐私政策》之后。再调用相关api！！！！

Statistic模块集成的三方SDK说明

**使用SDK名称:** 友盟统计

**包名信息:** com.uc.crashsdk、com.efs、com.umeng

**使用目的:** 统计（请根据具体使用目的填写）

**使用的权限:**
```
android.permission.ACCESS_NETWORK_STATE
android.permission.ACCESS_WIFI_STATE
android.permission.READ_PHONE_STATE
```

**涉及个人信息:** 设备信息（IMEI、ANDROID_ID、DEVICE_ID、IMSI）、网络信息

**隐私权政策链接:** [https://developer.umeng.com/docs/119267/detail/182050](https://developer.umeng.com/docs/119267/detail/182050)
***
### OAuth、Share、Payment

登录、分享、支付存在引入相同SDK，这里统一进行说明：

#### 微信SDK

**使用SDK名称:** 微信开放平台

**包名信息:** com.tencent.mm

**使用目的:** 登录、分享、支付（请根据具体使用目的填写）

**使用的权限:**
```
android.permission.ACCESS_NETWORK_STATE
android.permission.ACCESS_WIFI_STATE
```

**涉及个人信息:** 存储的个人文件、网络信息

**隐私权政策链接:** [https://weixin.qq.com/cgi-bin/readtemplate?lang=zh_CN&t=weixin_agreement&s=privacy](https://weixin.qq.com/cgi-bin/readtemplate?lang=zh_CN&t=weixin_agreement&s=privacy)
***
#### 新浪微博

**使用SDK名称:** 新浪开放平台

**包名信息:** com.sina.weibo

**使用目的:** 登录、分享（请根据具体使用目的填写）

**使用的权限:**
```
android.permission.ACCESS_NETWORK_STATE
android.permission.ACCESS_WIFI_STATE
```

**涉及个人信息:** 存储的个人文件、网络信息

**隐私权政策链接:** [https://weibo.com/signup/v5/privacy?spm=a1zaa.8161610.0.0.4f8776217Wu8R1](https://weibo.com/signup/v5/privacy?spm=a1zaa.8161610.0.0.4f8776217Wu8R1)
***
#### QQ
**使用SDK名称:** QQ开放平台

**包名信息:** com.tencent.open

**使用目的:** 登录、分享（请根据具体使用目的填写）

**使用的权限:**
```
android.permission.MODIFY_AUDIO_SETTINGS
android.permission.ACCESS_NETWORK_STATE
android.permission.ACCESS_WIFI_STATE
```

**涉及个人信息:** 存储的个人文件、读取手机状态和身份、网络信息

**隐私权政策链接:** [https://ti.qq.com/agreement/qqface.html?appname=mqq_2019](https://ti.qq.com/agreement/qqface.html?appname=mqq_2019)
***
#### 支付宝
**使用SDK名称:** 支付宝开放平台

**包名信息:** com.alipay

**使用目的:** 支付（请根据具体使用目的填写）

**使用的权限:**
```
android.permission.ACCESS_NETWORK_STATE
android.permission.ACCESS_WIFI_STATE
```

**涉及个人信息:** 网络信息

**隐私权政策链接:** [https://render.alipay.com/p/c/k2cx0tg8](https://render.alipay.com/p/c/k2cx0tg8)
***
#### 一键登录
**使用SDK名称:** 个验一键登录

**包名信息:** com.g.elogin、com.g.gysdk

**使用目的:** 登录（请根据具体使用目的填写）

**使用的权限:**
```
android.permission.READ_PHONE_STATE
android.permission.READ_EXTERNAL_STORAGE
android.permission.WRITE_EXTERNAL_STORAGE
android.permission.ACCESS_NETWORK_STATE
android.permission.ACCESS_WIFI_STATE
android.permission.CHANGE_NETWORK_STATE
```

**涉及个人信息:**  存储的个人文件、读取手机状态和身份、网络信息

**隐私权政策链接:** [https://docs.getui.com/privacy/](https://docs.getui.com/privacy/)
***

### Speech

Speech模块集成的三方SDK说明

#### 百度语音
**使用SDK名称:** 百度语音识别

**包名信息:** com.baidu.speech

**使用目的:** 语音识别（请根据具体使用目的填写）

**使用的权限:**
```
android.permission.RECORD_AUDIO
android.permission.ACCESS_NETWORK_STATE
android.permission.ACCESS_WIFI_STATE
android.permission.CHANGE_NETWORK_STATE
android.permission.READ_PHONE_STATE
android.permission.WRITE_EXTERNAL_STORAGE
```

**涉及个人信息:**  存储的个人文件、读取手机状态和身份、网络信息

**隐私权政策链接:** [https://ai.baidu.com/ai-doc/REFERENCE/Qkdykq1r3](https://ai.baidu.com/ai-doc/REFERENCE/Qkdykq1r3)
***
### Map & Geolocation

Map & Geolocation模块集成的三方SDK说明

#### 高德

**使用SDK名称:** 高德开放平台

**包名信息:** com.amap.api, com.loc, com.autonavi

**使用目的:** 实现定位/展现地图（请根据具体使用目的填写）

**使用的权限:**
```
android.permission.ACCESS_COARSE_LOCATION
android.permission.ACCESS_FINE_LOCATION
android.permission.ACCESS_NETWORK_STATE
android.permission.ACCESS_WIFI_STATE
android.permission.CHANGE_WIFI_STATE
android.permission.READ_PHONE_STATE
android.permission.WRITE_EXTERNAL_STORAGE
android.permission.ACCESS_LOCATION_EXTRA_COMMANDS
```

**涉及个人信息:**  存储的个人文件、位置信息、读取手机状态和身份、网络信息

**隐私权政策链接:** [https://lbs.amap.com/agreement/compliance](https://lbs.amap.com/agreement/compliance)
***

#### 百度

**使用SDK名称:** 百度开放平台

**包名信息:** com.baidu

**使用目的:** 实现定位/展现地图（请根据具体使用目的填写）

**使用的权限:**
```
android.permission.ACCESS_COARSE_LOCATION
android.permission.ACCESS_FINE_LOCATION
android.permission.ACCESS_NETWORK_STATE
android.permission.ACCESS_WIFI_STATE
android.permission.CHANGE_WIFI_STATE
android.permission.READ_PHONE_STATE
android.permission.WRITE_EXTERNAL_STORAGE
android.permission.ACCESS_LOCATION_EXTRA_COMMANDS
android.permission.READ_LOGS
android.permission.WRITE_SETTINGS
android.permission.MOUNT_UNMOUNT_FILESYSTEM
```

**涉及个人信息:**  存储的个人文件、位置信息、读取手机状态和身份、网络信息

**隐私权政策链接:** [https://map.baidu.com/zt/client/privacy/index.html](https://map.baidu.com/zt/client/privacy/index.html)
***
### uni-AD

uni-AD广告模块集成的三方SDK说明

|SDK名称|SDK包名/网址|SDK用途|可能获取的个人信息类型|调用的设备权限|SDK隐私政策链接/目的|
|:----|:----|:----|:----|:----|:----
|uni-AD| |基础广告|设备品牌、型号、操作系统版本、OAID、分辨率、IMEI、android ID、SIM 卡 IMSI 信息、应用名称、应用包名、应用版本号、网络信息、应用安装列表、位置信息|获取网络状态、位置信息、访问Wi-Fi状态、读取手机状态和身份|[https://doc.dcloud.net.cn/...45ec4be94bc8404/](https://doc.dcloud.net.cn/markdown-share-docs/1d821cdd3cdf2681045ec4be94bc8404/)|
|推啊| engine.tuifish.com |基础广告|设备品牌、型号、操作系统版本、OAID、分辨率、IMEI、android ID、SIM 卡 IMSI 信息、应用名称、应用包名、应用版本号、网络信息、应用安装列表、位置信息|获取网络状态、位置信息、访问Wi-Fi状态、读取手机状态和身份|[https://yun.tuia.cn/tuia/.../index.html](https://yun.tuia.cn/tuia/sdk/agreement/index.html)|
|快手|com.kwad.sdk|增强广告|IMEI、openid、位置信息|获取网络状态、访问Wi-Fi状态、位置信息、读写外置存储器、读取手机状态和身份|[https://www.kuaishou.com/about/policy](https://www.kuaishou.com/about/policy)|
|优量汇|com.qq.e|增强广告|IMEI、openid、位置信息|获取网络状态、访问Wi-Fi状态、位置信息、读写外置存储器、读取手机状态和身份|[https://imgcache.qq.com/..privacy](https://imgcache.qq.com/gdt/cdn/adn/uniondoc/ylh_sdk_privacy_statement.html)|
|穿山甲|com.bytedance.sdk. openadsdk.adhost|增强广告|IMEI、openid、位置信息|获取网络状态、访问Wi-Fi状态、位置信息、读写外置存储器、读取手机状态和身份|[https://www.pangle.cn/privacy/partner](https://www.pangle.cn/privacy/partner)|
|Sigmob|com.sigmob.windad|增强广告|IMEI、openid、位置信息|获取网络状态、访问Wi-Fi状态、位置信息、读写外置存储器、读取手机状态和身份|[https://support.sigmob.com/#/隐私条款/](https://support.sigmob.com/#/%E9%9A%90%E7%A7%81%E6%9D%A1%E6%AC%BE/)|

### 腾讯x5内核
**使用SDK名称:** 腾讯浏览服务SDK

**包名信息:** com.tencent.tbs、com.tencent.smtt

**使用目的:** x5内核渲染webview（请根据具体使用目的填写）

**使用的权限:**
```
android.permission.WRITE_EXTERNAL_STORAGE
android.permission.ACCESS_NETWORK_STATE
android.permission.ACCESS_WIFI_STATE
android.permission.READ_PHONE_STATE
```

**涉及个人信息:**  存储的个人文件、读取手机状态和身份、网络信息

**隐私权政策链接:** [https://x5.tencent.com/docs/privacy.html](https://x5.tencent.com/docs/privacy.html)
***
### Contacts

管理系统通讯录，用于可对系统通讯录进行增、删、改、查等操作。通过plus.contacts获取系统通讯录管理对象。

**使用SDK名称:** Contacts

**包名信息:** io.dcloud.feature.contacts

**使用目的:** 管理系统通讯录，用于可对系统通讯录进行增、删、改、查等操作（请根据具体使用目的填写）

**使用的权限:**
```
android.permission.GET_ACCOUNTS
android.permission.WRITE_CONTACTS
android.permission.READ_CONTACTS
```

**涉及个人信息:** 获取联系人信息

**隐私权政策链接:** (宿主根据APP自身逻辑 自行填写相关隐私政策信息)
***

### Messaging

**使用SDK名称:** Messaging

**包名信息:** io.dcloud.feature.messaging

**使用目的:** 管理设备通讯功能，可用于短信、彩信、邮件发送等（请根据具体使用目的填写）

**使用的权限:**
```
android.permission.RECEIVE_SMS
android.permission.SEND_SMS
android.permission.WRITE_SMS
android.permission.READ_SMS
```

**涉及个人信息:** 读写短信、彩信、邮件

**隐私权政策链接:** (宿主根据APP自身逻辑 自行填写相关隐私政策信息)
***

如果您的应用使用了依赖三方SDK的模块也需要将其合规条款添加到《隐私政策》中

#### uni原生插件

如果应用使用了uni原生插件，需要注意一下几点：

+ 使用插件时请查看插件详情页面中的 `隐私、权限声明` 。（插件使用什么sdk？获取了什么用户信息？都应由插件作者提供并填写在 `隐私、权限声明`中）
+ 将插件中用到的三方SDK信息添加到用户隐私协议中。例如集成了`百度定位`。就需要在隐私协议中说明集成了百度定位SDK。获取了xxx用户信息!用于xxx.
+ 如果发现插件有获取用户信息而插件详情页并没有提供`隐私、权限声明`，请与插件开发者或与我们反馈共同督促进行补充。

#### 其它

《隐私政策》必须非常清楚、全面地说明（不要用可能收集、了解用户信息这种模糊不清晰的词语）收集用户个人信息的目的、方式和范围。
如果应用使用“通讯录”、“短信”等相关功能，请根据应用业务场景进行描述。
