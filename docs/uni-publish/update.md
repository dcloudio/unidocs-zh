
## 更新发布

### 创建渠道配置
1. 使用开发者账号登录[开发者中心](https://dev.dcloud.net.cn/) ，选择`uni发布`栏目。首次使用时需创建渠道配置。

![](https://web-ext-storage.dcloud.net.cn/appstore/config.png)

2. 创建渠道配置

请参考 [API 传包相关参数获取说明](https://uniapp.dcloud.net.cn/tutorial/uni-publish/config.html)，获取相关参数，然后填写所需参数并点击“保存”。

`考虑到不同项目可能对应不同的应用市场账号，建议配置名称使用项目名或公司名以便区分。`
![](https://web-ext-storage.dcloud.net.cn/appstore/2025-09-23_154817_464.png)

### 更新发布

1. 进入应用发布页面，选择要发布的应用，发布类型选择“更新发布”。

![](https://web-ext-storage.dcloud.net.cn/appstore/SCR-20251007-pcas.png)

- 勾选本次上架的平台
- 应用名称、包名需与安装包中的应用名称、包名一致
- 关联渠道配置


2.上传包

Android支持单个APK上传多个市场或多个APK(渠道包)上传多个市场。


单APK上传：

![](https://web-ext-storage.dcloud.net.cn/appstore/SCR-20251007-pctx.png)

多APK上传：

![](https://web-ext-storage.dcloud.net.cn/appstore/SCR-20251008-kaxo.png)

IPA上传：
![](https://web-ext-storage.dcloud.net.cn/appstore/SCR-20251008-kdjc.png)


- 上传完成后，系统会自动解析安装包内的相关信息。若包体较大，请耐心等待解析完成。
- 请确保安装包中的 应用名称 与 包名 与页面中填写的信息保持一致，否则可能导致上传失败或信息校验错误。

3. 完善应用发布信息


![](https://web-ext-storage.dcloud.net.cn/appstore/SCR-20251007-pjaw.png)


![](https://web-ext-storage.dcloud.net.cn/appstore/SCR-20251007-pjch.png)




4. 发布设置

选择 定时发布 或 立即发布，点击确认提交

![](https://web-ext-storage.dcloud.net.cn/appstore/SCR-20251007-pdky.png)

- 审核通过后立即发布：在人工审核通过后，此应用会在应用商店立即上架供用户搜索&下载
- 定时发布：您可以指定希望的上线时间点，若实际审核通过时间晚于设定时间，则会在审核通过后立即上线

