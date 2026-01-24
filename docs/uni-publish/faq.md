## 常见问题

### 1、华为（安卓）应用发布时提示不可选择“新国家或地区”？

请登录 [AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，进入应用的历史版本页面，检查已发布版本的国家或地区配置，确认未勾选“新国家或地区”。如已勾选，请取消该选项；完成修改后，请前往 DCloud 开发者中心 重新发布应用版本。

![](https://web-ext-storage.dcloud.net.cn/appstore/publish_country_1230.png)


### 2、华为（安卓）应用发布失败，提示：[cds]submit failed, additional msg is [The history of questionnaire feedback content ratings is empty .] (错误码: 204144660)

应用的内容分级当前无法通过Publishing API完成，您必须在AppGallery Connect网站中手动配置。参见[修改内容分级](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agcapi-add_appinfo-0000001111845350#section116mcpsimp)。



### 3、OPPO 应用发布失败，提示：icon_url（应用图标）图片宽度不符合要求、pic_url(竖版截图) 文件大小超过限制 、summary 包含非法字符

#### 原因说明

OPPO Publishing API要求 `icon_url`（应用图标）、 `pic_url`（竖版截图）、`summary`（应用简介）为必填参数。  
如果在 DCloud 开发者中心未更新应用图标、竖版截图或应用简介，系统将默认使用 OPPO 开发平台中已有的图标、截图和简介信息。  
当这些信息不符合接口规范时，就会导致发布失败。

#### 参数规范

- **应用图标（icon_url）**  
  - 尺寸：512×512 px  
  - 格式：PNG  
  - 文件大小：小于 1 MB  

- **竖版截图（pic_url）**  
  - 上传 3–5 张截图  
  - 格式：JPG 或 PNG  
  - 尺寸：1080×1920 px  
  - 单张文件大小：≤ 1 MB  

- **一句话简介（summary）**  
  - 一句话简介，不多于 13 个字符，不能包含任何标点符号和空格

请按照以上参数规范完成信息更新后，再重新为 OPPO 渠道 发起应用发布。

![](https://web-ext-storage.dcloud.net.cn/appstore/oppo_icon_1230.png)


---
