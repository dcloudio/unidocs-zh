
## 首次发布@first

| 渠道名称 | 是否支持新应用发布？ | 备注说明 | 
| :--- | :---: | :--- | 
| **小米、华为、荣耀** | **是** | 先在**各自开放平台**创建应用，再回 **DCloud 开发者中心** 进行后续的新应用发布 |
| **VIVO** | **是** | 无需提前创建应用，可直接在 **DCloud 开发者中心** 完成新应用发布 |
| **OPPO、应用宝** | **否** | **各自开放平台** 创建和发布应用  |
---

### 整体流程
1. **前置准备**  
   - 提前完成 **APP备案** [点此前往](https://wikinew.open.qq.com/index.html#/iwiki/4008550787)了解备案政策及接入指引。  
   - 申请并取得 **软件著作权登记证书（软著）**[点此前往](https://market.aliyun.com/common/agents/yscdcloud?userCode=yp4pevgx#4)加急办理软著登记。  

2. **注册开发者账号并实名认证**  
   - 前往各家**开放平台**注册开发者账号并完成实名认证。
- [腾讯应用开放平台](https://wikinew.open.qq.com/index.html#/iwiki/4007776081)
- [小米开放平台](https://dev.mi.com/xiaomihyperos/documentation/detail?pId=1145)
- [华为开放平台](https://developer.huawei.com/consumer/cn/doc/start/registration-and-verification-0000001053628148)
- [荣耀开放平台](https://developer.honor.com/cn/doc/guides/100272?source=Search_SearchResultsPage)
- [OPPO开放平台](https://open.oppomobile.com/documentation/page/info?id=10446)
- [VIVO开放平台](https://dev.vivo.com.cn/documentCenter/doc/2)
- [App Store Connect](https://developer.apple.com/cn/help/app-store-connect/)

3. **创建应用** 
   - 由于小米、华为、荣耀的传包 API 暂不提供创建应用接口，需在各家**开放平台**提前手动创建应用（**VIVO** 渠道除外)。  

4. **开发应用**  
   - 在本地开发环境中完成应用开发并进行打包。  

5. **发布应用**  
   - 使用 **DCloud 开发者账号** 登录 [开发者中心](https://dev.dcloud.net.cn)，进入“uni发布”-“应用发布”页面。  
   - 上传应用安装包，完善发布信息后，点击“提交审核“。  


### 创建应用

#### 小米@xiaomi
1.前往小米[开放平台](https://dev.mi.com/xiaomihyperos)，点击管理中心。如未登录，则会先跳转至登录页面。

![](https://web-ext-storage.dcloud.net.cn/appstore/mi_2025-09-01_155214_780.png)

2.点击“创建应用”按钮，即可开始应用首次创建。

![](https://web-ext-storage.dcloud.net.cn/appstore/2025-09-24_143731_545.png)

3.应用创建成功后，会自动跳转至完善资料页面，由于小米传包 API不支持补充 **备案信息、资质信息、联系人信息**，需先在小米开放平台手动填写。

![](https://web-ext-storage.dcloud.net.cn/appstore/2025-09-24_143913_480.png)
![](https://web-ext-storage.dcloud.net.cn/appstore/2025-09-24_143933_631.png)
![](https://web-ext-storage.dcloud.net.cn/appstore/2025-09-24_143951_999.png)
![](https://web-ext-storage.dcloud.net.cn/appstore/2025-09-24_144008_171.png)

4.点击“保存草稿”按钮。

5.其余信息可使用 **DCloud 开发者账号** 登录 [开发者中心](https://dev.dcloud.net.cn)，进入“uni发布”-“应用发布”页面完善。

#### 华为@huawei
1.前往[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，如未登录，则先登录。

2.点击“APP”,选择“Android” 页签，点击应用列表右侧的“新建发布”。

![](https://web-ext-storage.dcloud.net.cn/appstore/2025-09-26_150724_080.png)

3.填写应用信息，完成后点击“确认”。

![](https://web-ext-storage.dcloud.net.cn/appstore/2025-09-26_150724_079.png)

4.应用的内容分级信息当前无法通过传包 API完成，您必须在AppGallery Connect网站中手动配置，参见[修改内容分级](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agcapi-add_appinfo-0000001111845350#section116mcpsimp)。

5.点击“保存草稿”按钮。

6.其余信息可使用 **DCloud 开发者账号** 登录 [开发者中心](https://dev.dcloud.net.cn)，进入“uni发布”-“应用发布”页面完善。


#### 荣耀@honor
1.前往荣耀[开放平台](https://developer.honor.com/cn)，点击管理中心。如未登录，则会先跳转至登录页面。
![](https://web-ext-storage.dcloud.net.cn/appstore/honor_2025-09-01_175654_723.png)
2.点击生态服务 > 应用服务 > 应用分发卡片。
![](https://web-ext-storage.dcloud.net.cn/appstore/2025-09-24_153026_551.png)
3.点击页面新建按钮，创建应用。

![](https://web-ext-storage.dcloud.net.cn/appstore/2025-09-24_153026_5512.png)

4.其余信息可使用 **DCloud 开发者账号** 登录 [开发者中心](https://dev.dcloud.net.cn)，进入“uni发布”-“应用发布”页面完善。



#### VIVO@vivo
**无需提前创建应用**，后续使用 **DCloud 开发者账号** 登录 [开发者中心](https://dev.dcloud.net.cn)，进入“uni发布”-“应用发布”，直接完成新应用的首次发布。

#### OPPO@oppo
**暂不支持通过传包 API 进行首次发布。**  请前往 **开放平台** 手动完成新应用的创建与发布，详见：[创建应用](https://open.oppomobile.com/documentation/page/info?id=10035)

#### 应用宝@yyb
**暂不支持通过传包 API 进行首次发布。**  请前往 **开放平台** 手动完成新应用的创建与发布，详见：[创建应用](https://wikinew.open.qq.com/index.html#/iwiki/4007776088)

#### 苹果@apple
1.前往[App Store Connect](https://appstoreconnect.apple.com/apps)，点击App旁边的"+"号，添加 App。如您还没有添加 Bundle ID 请点击“证书、标识符和描述文件”链接进行添加。
![](https://web-ext-storage.dcloud.net.cn/appstore/apple-create-1001.png)

2.uni发布暂只支持“简体中文”，如您的应用需要其它语言介绍请在 App Store Connect 中添加介绍等内容。

3.点击左侧 “App 信息” 菜单在“综合信息”中完成“内容版权”“年龄分级”信息填写。
![](https://web-ext-storage.dcloud.net.cn/appstore/apple-create-1002.png)

4.点击左侧 “App 隐私”菜单填写“数据收集”。
![](https://web-ext-storage.dcloud.net.cn/appstore/apple-create-1003.png)

5.其余信息可使用 **DCloud 开发者账号** 登录 [开发者中心](https://dev.dcloud.net.cn)，进入“uni发布”-“应用发布”页面完善。



### 发布应用

#### 创建渠道配置
1. 使用 **DCloud 开发者账号** 登录 [开发者中心](https://dev.dcloud.net.cn/) ，选择`uni发布`栏目。首次使用时需创建渠道配置。

![](https://web-ext-storage.dcloud.net.cn/appstore/config.png)

2. 创建渠道配置

请参考 [API 传包相关参数获取说明](https://uniapp.dcloud.net.cn/tutorial/uni-publish/config.html)，获取相关参数，然后填写所需参数并点击“保存”。

`考虑到不同项目可能对应不同的应用市场账号，建议配置名称使用项目名或公司名以便区分。`
![](https://web-ext-storage.dcloud.net.cn/appstore/2025-09-23_154817_464.png)

#### 首次发布

1. 进入应用发布页面，选择要发布的应用，发布类型选择“首次发布”。

![](https://web-ext-storage.dcloud.net.cn/appstore/SCR-20251007-pcas.png)

- 勾选本次上架的平台
- 应用名称、包名需与安装包中的应用名称、包名一致
- 关联渠道配置


2.上传包

Android支持单个APK上传多个市场或多个APK(渠道包)上传多个市场。
`仅支持上传64位安装包和32/64位兼容包`

单APK上传：

![](https://web-ext-storage.dcloud.net.cn/appstore/SCR-20251007-pctx.png)

多APK上传：

![](https://web-ext-storage.dcloud.net.cn/appstore/SCR-20251007-pgdg.png)

3. 完善应用发布信息

![](https://web-ext-storage.dcloud.net.cn/appstore/SCR-20251007-pddb.png)


![](https://web-ext-storage.dcloud.net.cn/appstore/SCR-20251007-pdfp.png)

![](https://web-ext-storage.dcloud.net.cn/appstore/SCR-20251007-pdhs.png)


4. 发布设置

选择 定时发布 或 立即发布，点击确认提交

![](https://web-ext-storage.dcloud.net.cn/appstore/SCR-20251007-pdky.png)


