## 产品简介

uni安全加固是DCloud联合业内主流安全厂商提供的移动App安全加固技术。

uni安全加固对移动App进行安全性增强，旨在防止应用程序被破解、篡改或重打包等各类安全破坏。它的作用是保护应用程序的安全性和用户的隐私，提高应用程序的抗攻击能力和可靠性。

uni安全加固目前仅支持Android App，后续会扩展到iOS App及小程序平台。

uni安全加固目前已上线腾讯云版、蚂蚁⼩程序云版。

## 功能介绍

uni安全加固在Android平台支持如下加固方案：
- 腾讯云版
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/app-reinforce/20230822005.png)

- 蚂蚁⼩程序云版
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/app-reinforce/20230822006.png)

## 应用场景

### 上线前安全加固

App 开发完毕直接上线，可能存在代码泄露风险，通过 dex 整体加壳加固，有效保护应用代码安全，提高企业 App 被逆向、破解的难度。

### 防止应用被二次打包

未经安全防护的 App 易被攻击者获取代码信息，制造仿冒应用，采用签名校验、防重打包等加固技术，有效防止应用被二次打包后投放应用市场。

### 敏感数据保护

敏感数据信息、核心算法逻辑、版本内容等需要进行保护，移动应用安全推出的安全加固支持本地资源加密，有效防止攻击者窃取用户敏感数据。

## 计费规则

uni安全加固分为测试版和正式版两种类型：

- 测试版：免费，App有效期15天，15天后不可用；
- 正式版：600元/次，App长久有效；

## 使用指南

1. 使用开发者账号登录[开发者中心](https://dev.dcloud.net.cn/) ，选择`uni安全加固`栏目。阅读uni加固服务协议并点击协议下方的“同意协议并开通”按钮，便可开通uni加固服务。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/app-reinforce/20230822001.png)

2. 在提交应用加固之前，您需要先进行充值，因为应用加固是一项预付费业务。点击页面上的“充值”按钮，并输入充值金额进行充值。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/app-reinforce/20230822002_02.png)

3. 完成充值后，前往`加固记录`栏目，点击"新增加固"按钮后，将打开一个新页面，用于填写加固信息。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/app-reinforce/20231208_01.png)




4. 当您提交成功后，您可以查看应用加固记录来跟踪加固的进展和结果。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/app-reinforce/20230822004_03.png)


## 常见问题@question

- **加固失败并提示“应用存在安全风险”**

选择腾讯云版进行加固时，可能会出现因应用有病毒而不能加固，去腾讯自家WeTest平台加固同样也是这样的结果。
以下是腾讯官方给出的解释：
1. 加固产品不能有病毒，不能有安全风险，如果有安全风险不能加固。
2. 去手机管家复查是否存在病毒风险：[https://m.qq.com/security_lab/scans_online.jsp](https://m.qq.com/security_lab/scans_online.jsp)
若确认应用本身无风险问题，可在官网进行申诉[https://m.qq.com/complaint/](https://m.qq.com/complaint/),此为应用被报毒唯一申诉渠道。

遇到这种情况，可以切换蚂蚁小程序云版进行加固试试。

另外我们自己也写了一篇Android 应用报毒解决方案[https://ask.dcloud.net.cn/article/37501](https://ask.dcloud.net.cn/article/37501)
- **加固失败并提示“加固工具执行vmp加固过程出错”**

选择腾讯云版方案二进行加固时填写profile.txt类文件内容错误导致，请按照页面提示重新填写

- **加固失败并提示“加固过程出错”**

选择蚂蚁小程序云版加固时填写So文件、Assets资源文件、Java2C这几项内容错误导致，请按照页面提示重新填写

- **应用加固完成后安装应用失败**

应用加固不可避免的会破坏原有签名，加固后必须对加固包重签名。

- **应用加固完成后应用无法运行**

情况一：请务必确保重签名选择的证书与之前应用打包签名所使用的证书一致,如果不保持一致，则会触发加固的防二次打包功能，无法正常运行

情况二：选择腾讯云版对libweexcore.so、libweexjsb.so 、libweexjss.so三个文件加固会导致APP无法运行，请删除后重新加固，选择蚂蚁小程序云版如果有So文件加固需求请切换到腾讯云版加固






