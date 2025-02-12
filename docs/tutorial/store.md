## 应用市场上架注意事项

应用（或称“APP”）上架至应用市场时，应用市场会根据APP的行业分类以及所涉及的具体功能和服务而要求APP提供者提交相应的资质、许可、备案、授权等文件。以下是主要手机厂商应用市场的APP审核相关规则，以供开发者进行了解和准备。  

开发者上架应用市场，需注意以下事项：  
- 将应用提交到应用市场之前，先查阅相应的应用市场的APP审核规则，特别是与行业资质相关的审核要求  
- 检查APP涉及的所有功能和服务（包括集成的第三方的服务），判断所需的经营许可并提前准备相关文件  
- 登录应用市场官方平台查看审核规则变更情况、审核通知等，并根据应用市场要求及时提交相关文件  


### 华为  
- [应用审核指南](https://developer.huawei.com/consumer/cn/doc/app/50104)  
- [应用资质审核要求](https://developer.huawei.com/consumer/cn/doc/app/80301)  
- [应用审核FAQ](https://developer.huawei.com/consumer/cn/doc/app/50106)  
- [应用资质FAQ](https://developer.huawei.com/consumer/cn/doc/app/50111)  
- [APP备案FAQ](https://developer.huawei.com/consumer/cn/doc/app/50130)  
- [APP备案补充指引](https://developer.huawei.com/consumer/cn/doc/app/50130-FAQ)


### 小米  
- [开发者生态政策](https://dev.mi.com/xiaomihyperos/documentation/detail?pId=1321)  
- [应用商店上架要求](https://dev.mi.com/xiaomihyperos/documentation/detail?pId=1322)  
- [特殊行业资质要求](https://dev.mi.com/xiaomihyperos/documentation/detail?pId=1139)  
- [应用资质上传操作指南](https://dev.mi.com/xiaomihyperos/documentation/detail?pId=1261)  
- [应用审核常见问题](https://dev.mi.com/xiaomihyperos/documentation/detail?pId=1252)  
- [移动应用程序（APP）备案指引](https://dev.mi.com/xiaomihyperos/documentation/detail?pId=1739)  
- [移动应用程序（APP）备案信息补充指引](https://dev.mi.com/xiaomihyperos/documentation/detail?pId=1775)  


### OPPO  
- [OPPO 应用从业资质规范](https://open.oppomobile.com/new/developmentDoc/info?id=12133)  
- [OPPO 应用审核规范](https://open.oppomobile.com/new/developmentDoc/info?id=12131)  
- [移动应用发布上架软件商店](https://open.oppomobile.com/new/developmentDoc/info?id=10035)  
- [资质审核FAQ](https://open.oppomobile.com/new/developmentDoc/info?id=10914)  
- [应用/游戏备案新规](https://open.oppomobile.com/new/developmentDoc/info?id=12458)  
- [OPPO 应用处罚规范](https://open.oppomobile.com/new/developmentDoc/info?id=12134)  


### VIVO  
- [开放平台应用审核规范](https://dev.vivo.com.cn/documentCenter/doc/12)  
- [特殊行业类资质要求](https://dev.vivo.com.cn/documentCenter/doc/90)  
- [行业资质FAQ](https://dev.vivo.com.cn/documentCenter/doc/851)  
- [移动应用程序（APP）备案指引](https://dev.vivo.com.cn/documentCenter/doc/763)  
- [APP备案FAQ](https://dev.vivo.com.cn/documentCenter/doc/722)  
- [应用违规处罚规则](https://dev.vivo.com.cn/documentCenter/doc/479)  


### 荣耀  
- [荣耀应用市场审核规范](https://developer.honor.com/cn/doc/guides/100879)  
- [应用资质审核要求](https://developer.honor.com/cn/doc/guides/101152)  
- [平台审核常见FAQ](https://developer.honor.com/cn/doc/guides/101269)
- [APP备案指南](https://developer.honor.com/cn/doc/guides/101280)


### 苹果  
- [App 审核指南](https://developer.apple.com/cn/app-store/review/guidelines/)  
- [App 信息](https://developer.apple.com/cn/help/app-store-connect/reference/app-information)



## 国内应用市场上架
最近为有效治理App强制授权、过度索权、超范围收集个人信息等现象，落实《网络安全法》《消费者权益保护法》的要求，保障个人信息安全，各大应用市场都加强应用审核的检测，要求应用必须符合相关政策，否则应用将有被通报或下架的风险。

**应用市场上架审核合规指南：**[https://ask.dcloud.net.cn/article/39073](https://ask.dcloud.net.cn/article/39073)



## Google Play上架

首先App提交云端打包时请务必勾选“GooglePlay”渠道：

![](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/channel-google.png)

Google Play上架审核要求比较严格，需要注意以下问题：
- 应用中不能存在下载/安装apk的行为，不要勾选android.permission.INSTALL_PACKAGES、android.permission.REQUEST_INSTALL_PACKAGES权限‘
- 应用中的任何功能都不能引导用户下载其它应用，以下模块不能使用：
  + QQ登录、QQ分享：手机没有安装QQ应用时，会引导用户安装
  + uni-ad 增强广告SDK：广告中存在下载安装其它三方应用的行为。**uni-ad 广告基础功能不受影响**
- 应用中不能使用动态加载代码，因此无法配置使用X5内核，详情：[https://ask.dcloud.net.cn/article/36806](https://ask.dcloud.net.cn/article/36806)

**应用必须适配Android11，设置targetSdkVersion大于等于30：**[https://ask.dcloud.net.cn/article/193](https://ask.dcloud.net.cn/article/193#targetsdkversion)

**上传安装包使用Android App Bundle（AAB）格式：**[https://ask.dcloud.net.cn/article/39052](https://ask.dcloud.net.cn/article/39052)



## App Store上架

>再次说明：uni-app并不是简单的使用Webview套壳，Webview仅负责vue页面的UI渲染，nvue页面则完全由原生UI渲染，业务逻辑代码是运行在独立的JS引擎（JSCore）中，并且封装了很多JS API调用原生能力（OC代码实现），完全可以上架苹果应用市场。

苹果App Store上架审核规范比较细，提交审核前建议仔细阅读苹果官方[App Store审核指南](https://developer.apple.com/cn/app-store/review/guidelines/)。

需要注意以下问题：
- 应用功能不能过于简单
- 应用功能不能跟已经上架的应用相似，就是不能做马甲包

**使用广告标识（IDFA）相关说明：**[https://ask.dcloud.net.cn/article/36107](https://ask.dcloud.net.cn/article/36107)

**UIWebview API 已废弃：**[https://ask.dcloud.net.cn/article/36348](https://ask.dcloud.net.cn/article/36348)
