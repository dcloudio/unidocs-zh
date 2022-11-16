# **厂商推送应用创建配置流程**

    目录
        一、华为应用创建配置流程
            1. 创建应用
            2. 推送配置
        二、魅族应用创建配置流程
            1. 创建应用
            2. 推送配置
        三、小米应用创建配置流程
            1. 创建应用
            2. 推送配置
        四、OPPO应用创建配置流程
            1. 创建应用
            2. 推送配置
        五、VIVO应用创建配置流程
            1. 创建应用
            2. 推送配置


## 一、 华为应用创建配置流程
### 1. 创建应用

* 华为推送启用条件：华为rom且华为rom版本大于等于 emui4.1, 华为移动服务(可在应用列表或华为应用市场中查看)版本大于等于 2.6.3.301
* 参见华为官方文档 [开发准备](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/android-config-agc-0000001050170137) 章节。推送必须操作的步骤：1.1~1.6 小节（推送相关）
* 查看应用 AppID，SecretKey
登录 [AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html) 网站，选择“我的应用”。打开刚才创建的应用，查看应用信息中相应的华为 AppID、华为 SecretKey。该信息在之后步骤中将会使用，如下图：

![huawei_appid](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/huawei_appid.png)
* 在 “项目设置 > 增长” 中选择“推送服务”，点击“立即开通”，以此来开启华为侧推送服务状态。

  ![huawei_appid](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_huawei1.png)

* 在 “项目设置 > 常规” 中填写“ SHA256证书指纹 ”，点击右侧对勾进行保存；若不知道具体值，请参考 [SHA256指纹证书获取](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/android-config-agc-0000001050170137)。

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

 - HTTPS证书

    ```
    -----BEGIN CERTIFICATE-----
    MIIGqTCCBZGgAwIBAgIQAVdiWJ3ORoF7fDA5qyolZTANBgkqhkiG9w0BAQsFADBf
    MQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3
    d3cuZGlnaWNlcnQuY29tMR4wHAYDVQQDExVHZW9UcnVzdCBDTiBSU0EgQ0EgRzEw
    HhcNMjIwNTE2MDAwMDAwWhcNMjMwNjE2MjM1OTU5WjB0MQswCQYDVQQGEwJDTjES
    MBAGA1UECAwJ5rWZ5rGf55yBMRIwEAYDVQQHDAnmna3lt57luIIxJzAlBgNVBAoM
    Huavj+aXpeS6kuWKqOiCoeS7veaciemZkOWFrOWPuDEUMBIGA1UEAwwLKi5nZXR1
    aS5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDAOvUwMLw5roP+
    vQzEqdVfFQDg5viSUnevk31GhS7UkwNVKPJkdwBvuetOuki5NfJR9GxQAq0fk0Qq
    15VHHnLYdgY/VSBSuFJZ8DbKD+/3LqVp6WW7HEEgPWbto04bgB2KOqkt/ws3bmso
    NZsdHHAYb2pbOTO7ZW4VpZaiIppGeLvcFNcP1QwqpARiOGOUxz3q4OFSh8QWapV9
    Y15LBrTdMid4Dzd+UNRqZJYWX0KdmD5VNK3obo+Wq2Rj0ktV1skPWWINo+ecvJDq
    O82+6m8zF+G1nmz7ofVCGm261wXdAaFWS7gdh8MRuSFSVW0O+edXTx4Ez2mNMzQp
    65PjJAxfAgMBAAGjggNKMIIDRjAfBgNVHSMEGDAWgBSRn14xFa4Qn61gwffBzKpI
    NC8MJjAdBgNVHQ4EFgQUpYw0JXac0ld0vX8gP1le02rlQUAwIQYDVR0RBBowGIIL
    Ki5nZXR1aS5jb22CCWdldHVpLmNvbTAOBgNVHQ8BAf8EBAMCBaAwHQYDVR0lBBYw
    FAYIKwYBBQUHAwEGCCsGAQUFBwMCMHUGA1UdHwRuMGwwNKAyoDCGLmh0dHA6Ly9j
    cmwzLmRpZ2ljZXJ0LmNvbS9HZW9UcnVzdENOUlNBQ0FHMS5jcmwwNKAyoDCGLmh0
    dHA6Ly9jcmw0LmRpZ2ljZXJ0LmNvbS9HZW9UcnVzdENOUlNBQ0FHMS5jcmwwPgYD
    VR0gBDcwNTAzBgZngQwBAgIwKTAnBggrBgEFBQcCARYbaHR0cDovL3d3dy5kaWdp
    Y2VydC5jb20vQ1BTMG8GCCsGAQUFBwEBBGMwYTAhBggrBgEFBQcwAYYVaHR0cDov
    L29jc3AuZGNvY3NwLmNuMDwGCCsGAQUFBzAChjBodHRwOi8vY3JsLmRpZ2ljZXJ0
    LWNuLmNvbS9HZW9UcnVzdENOUlNBQ0FHMS5jcnQwCQYDVR0TBAIwADCCAX0GCisG
    AQQB1nkCBAIEggFtBIIBaQFnAHUA6D7Q2j71BjUy51covIlryQPTy9ERa+zraeF3
    fW0GvW4AAAGAyt5DUAAABAMARjBEAiAsp7cSQHGTO8EF09x7mKga8eWF0UYq0JZ2
    xQR4ubI87AIgK+zsAzAF7tFQ29fQGm/87wYEE8y1g5lhWqO+5vLUpg8AdwA1zxkb
    v7FsV78PrUxtQsu7ticgJlHqP+Eq76gDwzvWTAAAAYDK3kOMAAAEAwBIMEYCIQDe
    fomYJt4a0uSt2CE6pA1LePKCCobkCWbBriHSFgNPEwIhAPlyCWEPFkZ0sIV7rAEg
    oZHuV77Xe58cSUIGm80UxS5sAHUAtz77JN+cTbp18jnFulj0bF38Qs96nzXEnh0J
    gSXttJkAAAGAyt5DhwAABAMARjBEAiA+FlDj9Gmb8zbK+wHFlqkzjKLFqeSOH80F
    Ndv/tgemaAIgFiGUdq3HTxNsdstCfBpK8UCN8ChNeI2O2msCHK8lU70wDQYJKoZI
    hvcNAQELBQADggEBAHtbJKGJOfgJzvSfyvzPKcbYymhjIerPVX+HBAEqb2SX9f9M
    qhvo89xsZTiT2dMSDLCvdEO2E5QWJZoTKmL3uY9BO6/4reoYvd8sGTjNU/spjZUR
    hv1+79Xz9DTFtCYziBnPOv72t4iklZjpato1vJLHQ62f9BgQlYplMiZ1KZkmP5XA
    my34lax7fg0SSz2GCmjKoNGkoCpvAl+TmJ+8IS0z6N/szZrmioDZT5Jp/lJ2U1fk
    so3vAz19idF8P95yy2jRGg2IA8WdMnfxp8rv6HszdBoaKiMlSAYXU3mktRhedEz4
    MUvq13jQmXo+vsN0eggEeUiFFHBHjlXs1g+b8bQ=
    -----END CERTIFICATE-----
    
    ```


​    

### 2. 推送配置

* 在开发者中心中填写华为AppID、华为AppSecret、应用包名、上传刚刚保存下的json文件。如下

![as_configuration3.png](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/dcloud_hw.png)


## 二、 魅族应用创建配置流程
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


### 2. 推送配置

* 在开发者中心中填写魅族AppID、魅族AppKey、魅族AppSecret：

![as_configuration2.png](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/dcloud_mz.png)


## 三、 小米应用创建配置流程
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

* 在开发者中心中填写小米AppID、小米AppSecret：

![as_configuration3.png](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/dcloud_xm.png)


## 四、 OPPO应用创建配置流程
### 1. 创建应用
* 辅助推送启用条件：oppo colorOS rom且版本号大于等于3.1
* 登录 [OPPO推送平台](https://push.oppo.com) 登录/注册帐号：

![img_manufacture_oppo1](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_oppo1.png)

* 选择`创建应用`：

![img_manufacture_oppo2](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_oppo2.png)

* 填写`应用名称`和`应用包名`以及上传`应用图标`创建应用
![img_manufacture_oppo3](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_oppo3.png)

* 查看应用信息，获取OPPO App ID、OPPO App Key、OPPO App Secret、OPPO Master Secret

![img_manufacture_oppo4](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_oppo4.png)


### 2. 推送配置
* 在开发者中心中填写OPPO参数。

​	![](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/dcloud_op.png)

## 四、 VIVO应用创建配置流程
### 1. 创建应用
* 辅助推送启用条件：xplay6， x9系列， x9s, x20系列，Y79系列，y75系列，后续版本待vivo支持。具体参考 https://dev.vivo.com.cn/documentCenter/doc/156
* 登录 [VIVO推送平台](https://vpush.vivo.com.cn) 登录/注册帐号：

![img_manufacture_vivo1](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_vivo1.png)

* 选择`创建应用`：

![img_manufacture_vivo2](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_vivo2.png)

* 填写`应用名称`和`应用包名`创建应用
![img_manufacture_vivo3](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_vivo3.png)

* 查看应用信息，获取VIVO APP ID、VIVO APP keyy、VIVO APP secret

![img_manufacture_vivo4](https://native-res.dcloud.net.cn/images/uniapp/push/adnroid_vendor/manufacture_vivo4.png)


### 2. 推送配置
* 在开发者中心中填写VIVO参数。

  ![](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/dcloud_vv.png)

