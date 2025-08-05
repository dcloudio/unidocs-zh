# **厂商推送应用创建配置流程**
# **Manufacturer push application creation configuration process**

    目录
    Table of contents
        1. 华为应用创建配置流程
        1. Huawei application creation and configuration process
            1. 创建应用
            1. Create an application
            2. Create an app
            3. 推送配置
            3. Push configuration
            4. Push configuration
        2. 魅族应用创建配置流程
        2. Meizu application creation and configuration process
            1. 创建应用
            1. Create an application
            2. Create an app
            3. 推送配置
            3. Push configuration
            4. Push configuration
        3. 小米应用创建配置流程
        3. Xiaomi application creation and configuration process
            1. 创建应用
            1. Create an application
            2. Create an app
            3. 推送配置
            3. Push configuration
            4. Push configuration
        4. OPPO应用创建配置流程
        4. OPPO application creation and configuration process
            1. 创建应用
            1. Create an application
            2. Create an app
            3. 推送配置
            3. Push configuration
            4. Push configuration
        5. VIVO应用创建配置流程
        5. VIVO application creation configuration process
            1. 创建应用
            2. 推送配置
        六、荣耀应用创建配置流程
            1. 创建应用
            2. 推送配置


## 一、 华为应用创建配置流程
## 1. Huawei app creation and configuration process
### 1. 创建应用
### 1. Create an application

* 华为推送启用条件：华为rom且华为rom版本大于等于 emui4.1, 华为移动服务(可在应用列表或华为应用市场中查看)版本大于等于 2.6.3.301
* 参见华为官方文档 [开发准备](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/android-config-agc-0000001050170137?ha_source=Dcloud&ha_sourceId=89000448) 章节。推送必须操作的步骤：1.1~1.6 小节（推送相关）
* 查看应用 AppID，SecretKey
登录 [AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html?ha_source=Dcloud&ha_sourceId=89000448) 网站，选择“我的应用”。打开刚才创建的应用，查看应用信息中相应的华为 AppID、华为 SecretKey。该信息在之后步骤中将会使用，如下图：

![huawei_appid](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/huawei_appid.png)
* 在 “项目设置 > 增长” 中选择“推送服务”，点击“立即开通”，以此来开启华为侧推送服务状态。
* Select "Push Service" in "Project Settings > Growth", and click "Activate Now" to enable the Huawei side push service status.

  ![huawei_appid](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_huawei1.png)

* 在 “项目设置 > 常规” 中填写“ SHA256证书指纹 ”，点击右侧对勾进行保存；若不知道具体值，请参考 [SHA256指纹证书获取](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/android-config-agc-0000001050170137?ha_source=Dcloud&ha_sourceId=89000448)。

  ![huawei_appid](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_huawei2.png)
  
* 下载agconnect-services.json文件备用。如下
* Download the agconnect-services.json file for backup. as follows
	![img](https://native-res.dcloud.net.cn/images/uniapp/push/huawei-apconnect-services.png)

* 在 “项目设置 > 推送服务> 配置”中开通项目回执状态，配置个推侧的回调地址以及HTTPS证书。如下
* Enable the project receipt status in "Project Settings > Push Service > Configuration", and configure the callback address and HTTPS certificate on the push side. as follows

  ![huawei_appid](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_huawei3.png)

- 回执名称可自定义
- Receipt name can be customized

- 回调地址(杭州机房)
- Callback address (Hangzhou computer room)

  ```
  https://thirdrcp-hz.getui.com/hw
  ```


​    

### 2. 推送配置
### 2. Push configuration

* 在开发者中心中填写华为AppID、华为AppSecret、应用包名、上传刚刚保存下的json文件。如下
* Fill in the Huawei AppID, Huawei AppSecret, and application package name in the developer center, and upload the json file you just saved. as follows

![as_configuration3.png](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/dcloud_hw.png)


## 二、 魅族应用创建配置流程
## 2. Meizu application creation and configuration process
### 1. 创建应用
### 1. Create an application
* 辅助推送启用条件：魅族rom且魅族rom版本大于等于5.x
* Auxiliary push enabling conditions: Meizu rom and Meizu rom version is greater than or equal to 5.x
* 登录 [魅族开放平台](http://open.flyme.cn) 申请开发者帐号：
* Log in to [Meizu Open Platform](http://open.flyme.cn) to apply for a developer account:

![img_manufacture_meizu1](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_meizu1.png)

* 登录 [魅族推送平台](http://push.meizu.com) ，选择`新建应用`：
* Log in to [Meizu Push Platform](http://push.meizu.com) and select `New App`:

![img_manufacture_meizu2](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_meizu2.png)

* 填写`应用名称`和`应用包名`，上传应用图标后创建应用：
* Fill in the `application name` and `application package name`, upload the application icon to create the application:

![img_manufacture_meizu3](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_meizu3.png)

* 打开新创建的应用：
* Open the newly created app:

![img_manufacture_meizu4](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_meizu4.png)

* 在`配置管理`中查看相应的魅族AppID、魅族AppKey、魅族AppSecret：
* View the corresponding Meizu AppID, Meizu AppKey, and Meizu AppSecret in `Configuration Management`:

![img_manufacture_meizu5](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_meizu5.png)


### 2. 推送配置
### 2. Push configuration

* 在开发者中心中填写魅族AppID、魅族AppKey、魅族AppSecret：
* Fill in the Meizu AppID, Meizu AppKey, and Meizu AppSecret in the developer center:

![as_configuration2.png](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/dcloud_mz.png)


## 三、 小米应用创建配置流程
## 3. Xiaomi application creation and configuration process
### 1. 创建应用
### 1. Create an application
* 辅助推送启用条件：小米rom且小米服务框架（包名:com.xiaomi.xmsf）版本号大于等于105
* Auxiliary push enabling conditions: Xiaomi rom and Xiaomi service framework (package name: com.xiaomi.xmsf) version number is greater than or equal to 105
* 登录 [小米开放平台](http://dev.xiaomi.com/console/) 申请开发者帐号：
* Log in to [Xiaomi Open Platform](http://dev.xiaomi.com/console/) to apply for a developer account:

![img_manufacture_xiaomi1](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_xiaomi1.png)

* 进入`管理控制台`->`消息推送`：
* Enter `Management Console`->`Message Push`:

![img_manufacture_xiaomi2](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_xiaomi2.png)

* 选择`创建手机/平板应用`：
* Select `Create mobile/tablet app`:

![img_manufacture_xiaomi3](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_xiaomi3.png)

* 填写`应用名称`和`应用包名`创建应用
* Fill in `application name` and `application package name` to create an application
![img_manufacture_xiaomi4](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_xiaomi4.png)

* 勾选`我同意接受小米推送的接入合作协议`复选框，点击`启用`按钮：
* Check the `I agree to accept the access cooperation agreement pushed by Xiaomi` checkbox, and click the `Enable` button:

![img_manufacture_xiaomi4](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_xiaomi5.png)

* 查看应用信息，获取小米AppID、小米AppKey、小米AppSecret：
* View application information, get Xiaomi AppID, Xiaomi AppKey, Xiaomi AppSecret:

![img_manufacture_xiaomi5](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_xiaomi6.png)


### 2. 推送配置
### 2. Push configuration

* 在开发者中心中填写小米AppID、小米AppSecret：
* Fill in the Xiaomi AppID and Xiaomi AppSecret in the developer center:

![as_configuration3.png](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/dcloud_xm.png)


## 四、 OPPO应用创建配置流程
## Four, OPPO application creation configuration process
### 1. 创建应用
### 1. Create an application
* 辅助推送启用条件：oppo colorOS rom且版本号大于等于3.1
* Auxiliary push enabling conditions: oppo colorOS rom and the version number is greater than or equal to 3.1
* 登录 [OPPO推送平台](https://push.oppo.com) 登录/注册帐号：
* Log in to [OPPO Push Platform](https://push.oppo.com) to log in/register an account:

![img_manufacture_oppo1](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_oppo1.png)

* 选择`创建应用`：
* Select `Create Application`:

![img_manufacture_oppo2](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_oppo2.png)

* 填写`应用名称`和`应用包名`以及上传`应用图标`创建应用
* Fill in `application name` and `application package name` and upload `application icon` to create an application
![img_manufacture_oppo3](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_oppo3.png)

* 查看应用信息，获取OPPO App ID、OPPO App Key、OPPO App Secret、OPPO Master Secret
* View app information, get OPPO App ID, OPPO App Key, OPPO App Secret, OPPO Master Secret

![img_manufacture_oppo4](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_oppo4.png)


### 2. 推送配置
### 2. Push configuration
* 在开发者中心中填写OPPO参数。
* Fill in the OPPO parameters in the developer center.

​	![](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/dcloud_op.png)

## 四、 VIVO应用创建配置流程
## Four, VIVO application creation configuration process
### 1. 创建应用
### 1. Create an application
* 辅助推送启用条件：xplay6， x9系列， x9s, x20系列，Y79系列，y75系列，后续版本待vivo支持。具体参考 https://dev.vivo.com.cn/documentCenter/doc/156
* Assisted push enabling conditions: xplay6, x9 series, x9s, x20 series, Y79 series, y75 series, and subsequent versions will be supported by vivo. Specific reference https://dev.vivo.com.cn/documentCenter/doc/156
* 登录 [VIVO推送平台](https://vpush.vivo.com.cn) 登录/注册帐号：
* Login [VIVO Push Platform](https://vpush.vivo.com.cn) Login/register account:

![img_manufacture_vivo1](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_vivo1.png)

* 选择`创建应用`：
* Select `Create Application`:

![img_manufacture_vivo2](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_vivo2.png)

* 填写`应用名称`和`应用包名`创建应用
* Fill in `application name` and `application package name` to create an application
![img_manufacture_vivo3](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_vivo3.png)

* 查看应用信息，获取VIVO APP ID、VIVO APP keyy、VIVO APP secret
* View application information, get VIVO APP ID, VIVO APP keyy, VIVO APP secret

![img_manufacture_vivo4](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_vivo4.png)


### 2. 推送配置
### 2. Push configuration
* 在开发者中心中填写VIVO参数。
* Fill in the VIVO parameters in the developer center.

  ![](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/dcloud_vv.png)


## 五、 荣耀应用创建配置流程
### 1. 创建应用

* 辅助推送启用条件：荣耀手机和平板，国内Magic UI 4.0及以上或者海外Magic UI 4.2及以上 ，具体参考 [文档](https://developer.hihonor.com/cn/kitdoc?category=%E5%9F%BA%E7%A1%80%E6%9C%8D%E5%8A%A1&kitId=11002&navigation=guides&docId=introduction.md&token=)
* 登录荣耀开放平台 [地址](https://hnid-drcn.cloud.hihonor.com/CAS/portal/login.html?validated=true&themeName=blue&service=https%3A%2F%2Fhnid-drcn.cloud.hihonor.com%2FAMW%2Fportal%2FuserCenter%2Findex.html%3FthemeName%3Dblue%26loginChannel%3D7000700%26countryCode%3Dcn%26loginUrl%3Dhttps%253A%252F%252Fhnid-drcn.cloud.hihonor.com%252FCAS%252Fportal%252Flogin.html%26reqClientType%3D7%26lang%3Dzh-cn&loginChannel=7000700&reqClientType=7&lang=zh-cn&countryCode=cn)

![img_vendor_honor1](https://web-ext-storage.dcloud.net.cn/native/unipush/img_vendor_honor1.jpg)

* 登录以后，点击管理中心，弹出的界面需要认证，此处选择`企业/组织开发者` [认证说明](https://developer.hihonor.com/cn/doc/guides/100619#h1-1666272620039)

![img_vendor_honor2](https://web-ext-storage.dcloud.net.cn/native/unipush/img_vendor_honor2.jpg)

* 认证成功后，进入控制台，点击`应用服务`->`应用分发`

![img_vendor_honor3](https://web-ext-storage.dcloud.net.cn/native/unipush/img_vendor_honor3.png)

* 创建应用，填写应用信息

![img_vendor_honor5](https://web-ext-storage.dcloud.net.cn/native/unipush/img_vendor_honor5.png)

![img_vendor_honor6](https://web-ext-storage.dcloud.net.cn/native/unipush/img_vendor_honor6.png)

* 应用创建完毕后，点击`应用服务`->`推送服务`

![img_vendor_honor4](https://web-ext-storage.dcloud.net.cn/native/unipush/img_vendor_honor4.png)

* 申请推送服务

![img_vendor_honor7](https://web-ext-storage.dcloud.net.cn/native/unipush/img_vendor_honor7.png)

* 填写推送服务信息（应用名称要选刚刚创建的应用）

![img_vendor_honor8](https://web-ext-storage.dcloud.net.cn/native/unipush/img_vendor_honor8.jpg)

* 创建完成后，点击`查看`，就可以得到荣耀推送的配置信息

![img_vendor_honor9](https://web-ext-storage.dcloud.net.cn/native/unipush/img_vendor_honor9.jpg)

### 2. 推送配置

* 在开发者中心中填写荣耀参数。

![img_vendor_honor8](https://web-ext-storage.dcloud.net.cn/native/unipush/img_vendor_honor10.jpg)