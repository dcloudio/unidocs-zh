# **厂商推送应用创建配置流程**

> 注意：华为、荣耀、vivo、魅族渠道，必须参考此文档配置回执，才能统计到这些渠道完整的到达、折损数据。


## 华为
### 1. 创建应用

* 华为推送启用条件：华为rom且华为rom版本大于等于 emui4.1, 华为移动服务(可在应用列表或华为应用市场中查看)版本大于等于 2.6.3.301
* 参见华为官方文档 [开发准备](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/android-config-agc-0000001050170137?ha_source=Dcloud&ha_sourceId=89000448) 章节。推送必须操作的步骤：1.1~1.6 小节（推送相关）
* 查看应用 AppID，SecretKey
登录 [AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html?ha_source=Dcloud&ha_sourceId=89000448) 网站，选择“我的应用”。打开刚才创建的应用，查看应用信息中相应的华为 AppID、华为 SecretKey。该信息在之后步骤中将会使用，如下图：

![huawei_appid](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/huawei_appid.png)
* 在 “项目设置 > 增长” 中选择“推送服务”，点击“立即开通”，以此来开启华为侧推送服务状态。

  ![huawei_appid](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_huawei1.png)

* 在 “项目设置 > 常规” 中填写“ SHA256证书指纹 ”，点击右侧对勾进行保存；若不知道具体值，请参考 [SHA256指纹证书获取](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/android-config-agc-0000001050170137?ha_source=Dcloud&ha_sourceId=89000448)。

  ![huawei_appid](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_huawei2.png)
  
* 下载agconnect-services.json文件备用。如下
	![img](https://native-res.dcloud.net.cn/images/uniapp/push/huawei-apconnect-services.png)

* 在 “项目设置 > 推送服务> 配置”中开通项目回执状态，配置个推侧的回调地址以及HTTPS证书。如下

  ![huawei_appid](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_huawei3.png)

- 回执名称可自定义

- 回调地址(杭州机房)

  ```
  https://thirdrcp-hz.getui.com/hw
  ```


​    

### 2. 推送配置

* 在开发者中心中填写华为AppID、华为AppSecret、应用包名、刚刚保存下的json文件内容。如下

![](https://web-ext-storage.dcloud.net.cn/doc/push/hw/hw.png)


## 荣耀
### 1. 创建应用
* 登录 [荣耀开放平台](https://developer.hihonor.com/cn/home) 申请开发者帐号：

![](https://web-ext-storage.dcloud.net.cn/doc/push/honor/ry_01.png)

* 点击`开放能力`->`推送服务`：

![](https://web-ext-storage.dcloud.net.cn/doc/push/honor/ry_02.png)

* 进入`开放能力`页面->选择`推送服务`：

![](https://web-ext-storage.dcloud.net.cn/doc/push/honor/ry_03.png)

* 点击`申请推送服务`：

![](https://web-ext-storage.dcloud.net.cn/doc/push/honor/ry_04.png)

* 选择`移动应用`：

![](https://web-ext-storage.dcloud.net.cn/doc/push/honor/ry_05.png)

* 填写`应用名称`、`应用包名`和`SHA256证书指纹`

![](https://web-ext-storage.dcloud.net.cn/doc/push/honor/ry_06.png)

证书指纹用于校验应用的真实性。如使用荣耀开放服务能力等，必须配置证书指纹。使用以下命令获取指纹：
Keytool-list-v-keystore mystore.keystore

* 勾选`我已经阅读并同意《荣耀推送服务使用协议》`和`我已经阅读并同意《数据处理附录》`，点击`提交`按钮：

![](https://web-ext-storage.dcloud.net.cn/doc/push/honor/ry_07.png)

* 在推送服务列表，找到刚创建的应用，点击`查看`按钮：

![](https://web-ext-storage.dcloud.net.cn/doc/push/honor/ry_08.png)

* 查看应用信息，获取荣耀 APP ID、荣耀 APP Secret、荣耀 Client ID、荣耀 Client Secret：

![](https://web-ext-storage.dcloud.net.cn/doc/push/honor/ry_09.png)

* 消息报表到达回执配置：选择 “开放服务 > 推送服务 > 应用回执 > 新增回执” ，即可进行配置

![](https://web-ext-storage.dcloud.net.cn/doc/push/honor/ry_10.jpg)

![](https://web-ext-storage.dcloud.net.cn/doc/push/honor/ry_11.png)

* 回执名称可自定义
* 荣耀回调地址
```
https://thirdrcp-hz.getui.com/ho
```
* 点击“提交”，提示“成功”则表示配置成功

### 2. 推送配置

* 在开发者中心中填写荣耀AppID、ClientID、ClientSecret。如下

![](https://web-ext-storage.dcloud.net.cn/doc/push/honor/ry.png)


## 小米
### 1. 创建应用
* 辅助推送启用条件：小米rom且小米服务框架（包名:com.xiaomi.xmsf）版本号大于等于105
* 登录 [小米开放平台](http://dev.xiaomi.com/console/) 申请开发者帐号：

![img_manufacture_xiaomi1](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_xiaomi1.png)

* 进入`管理控制台`->`消息推送`：

![img_manufacture_xiaomi2](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_xiaomi2.png)

* 选择`创建手机/平板应用`：

![img_manufacture_xiaomi3](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_xiaomi3.png)

* 填写`应用名称`和`应用包名`创建应用
![img_manufacture_xiaomi4](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_xiaomi4.png)

* 勾选`我同意接受小米推送的接入合作协议`复选框，点击`启用`按钮：

![img_manufacture_xiaomi4](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_xiaomi5.png)

* 查看应用信息，获取小米AppID、小米AppKey、小米AppSecret：

![img_manufacture_xiaomi5](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_xiaomi6.png)


### 2. 推送配置

* 在开发者中心中填写小米AppID、小米AppKey、小米AppSecret：

![](https://web-ext-storage.dcloud.net.cn/doc/push/xm/xm.png)


## OPPO
### 1. 创建应用
* 辅助推送启用条件：oppo colorOS rom且版本号大于等于3.1
* 登录 [OPPO推送平台](https://push.oppo.com) 登录/注册帐号：

![img_manufacture_oppo1](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_oppo1.png)

* 搜索 OPPO `推送服务`

![](https://web-ext-storage.dcloud.net.cn/doc/push/oppo/oppo_2.png)

* 选择`创建应用`：

![img_manufacture_oppo2](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_oppo2.png)

* 填写`应用名称`和`应用包名`以及上传`应用图标`创建应用
![img_manufacture_oppo3](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_oppo3.png)

* 查看应用信息，获取OPPO App ID、OPPO App Key、OPPO App Secret、OPPO Master Secret

![img_manufacture_oppo4](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_oppo4.png)


### 2. 推送配置
* 在开发者中心中填写OPPO参数。

​![](https://web-ext-storage.dcloud.net.cn/doc/push/oppo/oppo.png)


## VIVO
### 1. 创建应用
* 辅助推送启用条件：xplay6， x9系列， x9s, x20系列，Y79系列，y75系列，后续版本待vivo支持。具体参考 https://dev.vivo.com.cn/documentCenter/doc/156
* 首先，先创建 VIVO 应用，见 [Vivo 推送平台开启指南](https://dev.vivo.com.cn/documentCenter/doc/281)。
* 查看应用信息，获取 VIVO AppID、AppKey、AppSecret

![](https://web-ext-storage.dcloud.net.cn/doc/push/vivo/vv_1.png)

* 点击“应用信息“。 APP回执地址 点击“开通“
* 点击“新增回执“ 添加回执地址。

![](https://web-ext-storage.dcloud.net.cn/doc/push/vivo/vv_2.png)

* 回调地址
```
https://receipt-hz.lmmindex.com/vv
```

::: warning 注意
1. 添加回执地址后，会生成对应的回执ID，若要使用该回执，请在服务端调用个推 api 推送时带上回执id；（未配置回执 id 将影响 vivo 推送数据统计）
```
"options": {
  "VV": {
    "/extra/callback.id":"填写vivo回执id"
  }
}
```
2. 回执能力关闭后，所有回执能力都失效；删除某个回执ID记录，对应的回执ID将失效
3. 回执支持单推和列表推
4. 回执地址添加成功后，将在1小时后生效回执
5. 更多的注意事项见 [vivo消息回执文档](https://dev.vivo.com.cn/documentCenter/doc/681#w2-33657032)
:::

### 2. 推送配置
* 在开发者中心中填写VIVO参数。

![](https://web-ext-storage.dcloud.net.cn/doc/push/vivo/vivo.png)


## 魅族
### 1. 创建应用
* 辅助推送启用条件：魅族rom且魅族rom版本大于等于5.x
* 登录 [魅族开放平台](http://open.flyme.cn) 申请开发者帐号：

![img_manufacture_meizu1](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_meizu1.png)

* 登录 [魅族推送平台](http://push.meizu.com) ，选择`新建应用`：

![img_manufacture_meizu2](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_meizu2.png)

* 填写`应用名称`和`应用包名`，上传应用图标后创建应用：

![img_manufacture_meizu3](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_meizu3.png)

* 打开新创建的应用：

![img_manufacture_meizu4](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_meizu4.png)

* 在`配置管理`中查看相应的魅族AppID、魅族AppKey、魅族AppSecret：

![img_manufacture_meizu5](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_meizu5.png)

* 在`配置管理`中--点击`回执管理`,将回调地址复制到“回执地址”输入框中，点“添加”，如下图：

![](https://web-ext-storage.dcloud.net.cn/doc/push/mz/mz_01.png)

* 回调地址

```
https://thirdrcp-hz.getui.com/mz
```

> 注：1.魅族只支持单推任务的回执数据。

### 2. 推送配置

* 在开发者中心中填写魅族AppID、魅族AppKey、魅族AppSecret：

![](https://web-ext-storage.dcloud.net.cn/doc/push/mz/meizu.png)


## FCM

### 1.简介

消息推送支持集成 Firebase 云信息传递（Firebase Cloud Messaging，简称 FCM）通道，以满足 App 在海外安卓设备上的使用推送的需求，该服务由 Google 拥有的 Firebase 公司提供。若app需要上架海外应用市场，建议您使用 [Google Play专版](https://docs.getui.com/download.html) 客户端 SDK 。

### 2.创建应用

* 进入 [Firebase](https://firebase.google.com/)官网 创建项目，获取 google-services.json 文件及 Server key 。
* 登录 google 账号，如果没有账号请先注册

![](https://web-ext-storage.dcloud.net.cn/doc/push/fcm/fcm_1.png)

* 登录后点击右上角的“Go to console”

![](https://web-ext-storage.dcloud.net.cn/doc/push/fcm/fcm_2.png)

* 打开项目列表页面，点击 “Add project” 创建项目

![](https://web-ext-storage.dcloud.net.cn/doc/push/fcm/fcm_3.png)

* 输入项目名称（根据自己应用取名)，点击 “Continue”

![](https://web-ext-storage.dcloud.net.cn/doc/push/fcm/fcm_4.png)

* 确认是否需要使用 Google Analytics 服务（根据自己需要开启或关闭），点击 “Continue”

![](https://web-ext-storage.dcloud.net.cn/doc/push/fcm/fcm_5.png)

* 确认后创建项目，点击 “Continue”

![](https://web-ext-storage.dcloud.net.cn/doc/push/fcm/fcm_6.png)

* 进入项目详情页面，点击 “Android” 图标添加 Android 应用

![](https://web-ext-storage.dcloud.net.cn/doc/push/fcm/fcm_7.png)

* 输入 Android 应用信息（包名、昵称、证书SHA-1），点击 “Register App”

![](https://web-ext-storage.dcloud.net.cn/doc/push/fcm/fcm_8.png)

* 注册 Android 应用后下载配置文件 “google-services.json”，保存 google-services.json 文件后面需要使用，点击 “Next” 继续

![](https://web-ext-storage.dcloud.net.cn/doc/push/fcm/fcm_9.png)

* 此步骤中的操作云端打包机已经处理，忽略提示信息，继续点击“Next”，进入下一步
* 完成注册 Android 应用，点击 “Continue to console” 回到项目详情页面

![](https://web-ext-storage.dcloud.net.cn/doc/push/fcm/fcm_10.png)

* 点击 “Project settings” ，进入项目设置页面

![](https://web-ext-storage.dcloud.net.cn/doc/push/fcm/fcm_11.png)

* 旧版 Cloud Messaging API开启，获取Server Key(如果您现在使用旧版 HTTP 或 XMPP API（于 2023 年 6 月 20 日弃用），则必须在 2024 年 6 月 20 日之前迁移到最新的 Firebase Cloud Messaging API (HTTP v1))

![](https://web-ext-storage.dcloud.net.cn/doc/push/fcm/fcm_12.png)

* 跳转到Api管理页面启动Cloud Messaging API

![](https://web-ext-storage.dcloud.net.cn/doc/push/fcm/fcm_13.png)

* 启动Cloud Messaging API后即可得到Server key

![](https://web-ext-storage.dcloud.net.cn/doc/push/fcm/fcm_14.png)

* 新版Firebase Cloud Messaging API (V1)

![](https://web-ext-storage.dcloud.net.cn/doc/push/fcm/fcm_15.png)

* 选择配置语言，点击生成新的私钥

![](https://web-ext-storage.dcloud.net.cn/doc/push/fcm/fcm_16.jpg)

* 生成密钥

![](https://web-ext-storage.dcloud.net.cn/doc/push/fcm/fcm_17.jpg)

* 生成密钥后，会下载到本地一个json文件

![](https://web-ext-storage.dcloud.net.cn/doc/push/fcm/fcm_18.jpg)


### 2. 推送配置

* 在开发者中心中填写密钥文件内容和google-services.json文件内容：

![](https://web-ext-storage.dcloud.net.cn/doc/push/fcm/fcm.png)

