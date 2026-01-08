## 常见问题

### 1、华为（安卓）应用发布时提示不可选择“新国家或地区”？

请登录 [AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，在历史版本的应用信息中，检查已发布的国家或地区设置，确保没有选择“新国家或地区”。如果已被勾选，建议在本次应用更新时继续在华为开发平台发布，并将“新国家或地区”的勾选去除。之后，您可以在 DCloud 开发者中心重新发布应用版本。

![](https://web-ext-storage.dcloud.net.cn/appstore/publish_country_1230.png)


### 2、OPPO 应用发布失败，提示：icon_url（应用图标）图片宽度不符合要求、pic_url(竖版截图) 文件大小超过限制 (错误码: 800002)

#### 原因说明

OPPO 发布接口要求 `icon_url`（应用图标）和 `pic_url`（竖版截图）为必填参数。  
如果在 DCloud 开发者中心未上传图标或竖版截图，系统会使用 OPPO 开发平台已有的图标或截图。  
当这些文件不符合接口规范时，就会导致发布失败。

#### 文件规范

- **应用图标（icon_url）**  
  - 尺寸：512×512 px  
  - 格式：PNG  
  - 文件大小：小于 1 MB  

- **竖版截图（pic_url）**  
  - 上传 3–5 张截图  
  - 格式：JPG 或 PNG  
  - 尺寸：1080×1920 px  
  - 单张文件大小：≤ 1 MB  

请根据以上规范更新图标和截图后，再重新为 OPPO 渠道发布应用。

![](https://web-ext-storage.dcloud.net.cn/appstore/oppo_icon_1230.png)


---
