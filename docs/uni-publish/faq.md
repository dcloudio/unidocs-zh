## 常见问题

## 华为渠道

### 应用发布失败，提示：APK编译超时

① 原因说明

APK包名存在冲突或无法安装

② 解决方案

请登录 [AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，进入应用的历史版本页面，在软件包管理页面查看具体原因。

![](https://web-ext-storage.dcloud.net.cn/appstore/huawei_account_2.png)


### 应用发布失败，提示：[cds]submit failed, additional msg is [The history of questionnaire feedback content ratings is empty .] (错误码: 204144660)

① 原因说明

应用的内容分级信息未在 AppGallery Connect 中配置，而该配置当前无法通过 Publishing API 自动完成。

② 解决方案

您必须在 AppGallery Connect 网站中手动配置内容分级。参见[修改内容分级](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agcapi-add_appinfo-0000001111845350#section116mcpsimp)，完整设置后，请前往 DCloud 开发者中心 重新发布应用版本。

### 应用发布失败，提示：[cds]submit failed, additional msg is [registeredEntity and registeredEntityName can not be empty.] (错误码: 204144660)

① 原因说明

备案主体名称或备案主体统一社会信用代码信息为空。

② 解决方案

请确认该应用是否为首次上架。如果是首次上架，请确保已选择“应用首次上架”为发布类型。


## OPPO 渠道

### 提交审核时提示一句话简介不能为空、一句话简介不能多于13个字符、应用图标需为PNG格式

① 原因说明

OPPO Publishing API 要求应用图标、一句话简介等信息符合特定规范。如果在 DCloud 开发者中心未更新这些信息，系统将使用 OPPO 开发平台中已有的信息，当这些信息不符合接口规范时，就会导致发布失败。

② 解决方案

请按照以下参数规范在 DCloud 开发者中心更新应用信息：

- **应用图标（icon_url）**  
  - 尺寸：512×512 px  
  - 格式：PNG  
  - 文件大小：小于 1 MB  

- **一句话简介（summary）**  
  - 一句话简介，不多于 13 个字符，不能包含任何标点符号和空格

完成信息更新后，再重新为 OPPO 渠道发起应用发布。

![](https://web-ext-storage.dcloud.net.cn/appstore/oppo_icon_1230.png)


### 应用发布失败，提示：icon_url（应用图标）图片宽度不符合要求、pic_url(竖版截图) 文件大小超过限制 

① 原因说明

OPPO Publishing API要求 `icon_url`（应用图标）、 `pic_url`（竖版截图）、`summary`（应用简介）为必填参数。  
如果在 DCloud 开发者中心未更新应用图标、竖版截图或应用简介，系统将默认使用 OPPO 开发平台中已有的图标、截图和简介信息。  
当这些信息不符合接口规范时，就会导致发布失败。

② 解决方案

请按照以下参数规范完成信息更新：

- **应用图标（icon_url）**  
  - 尺寸：512×512 px  
  - 格式：PNG  
  - 文件大小：小于 1 MB  

- **竖版截图（pic_url）**  
  - 上传 3–5 张截图  
  - 格式：JPG 或 PNG  
  - 尺寸：1080×1920 px  
  - 单张文件大小：≤ 1 MB  



完成信息更新后，再重新为 OPPO 渠道 发起应用发布。

![](https://web-ext-storage.dcloud.net.cn/appstore/oppo_icon_1230.png)


---

