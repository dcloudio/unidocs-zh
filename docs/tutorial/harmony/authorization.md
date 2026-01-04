## 授权 DCloud 完成上架流程

目前鸿蒙应用、鸿蒙元服务可授权 DCloud 完成上架流程。

授权完成后，在 HBuilderX 中点击发行可直接将构建产物上传到开发者中心进行提审。

### 授权 DCloud 完成上架流程

点击 [鸿蒙第三方授权链接](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/authorization?clientId=1553077832379297600&type=1?ha_source=Dcloud&ha_sourceId=89000448) 打开下面页面：

第一步：

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/f4f354d9-bfe0-4a75-aaa5-65ca66882316.png)

第二步：

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/fd9c19a8-40e5-482f-a94c-b527cd8952f8.png)

选择你要上架的元服务，授权 DCloud 完成后续的上架流程。

### 发行鸿蒙应用

完成服务绑定后，鸿蒙应用在 HBuilderX 中选择 **发行 - App-Harmony-本地打包 - 生成安装包** 可进行应用构建，构建完成后会提示：

> 开始制作安装包 .app，请耐心等待......
> 安装包制作完成
> 上传安装包...
> 上传成功： http://dev.dcloud.net.cn/

点击链接可直接打开开发者中心，进行提审编辑操作。

### 发布鸿蒙元服务

完成服务绑定后，鸿蒙应用在 HBuilderX 中选择 **发行 - 鸿蒙元服务** 可进行元服务构建，构建完成后会提示：

> 开始制作安装包 .app，请耐心等待......
> 安装包制作完成
> 上传安装包...
> 上传成功： http://dev.dcloud.net.cn/

点击链接可直接打开开发者中心，进行提审编辑操作。

### 注意事项

注意事项：

- 如果开发者中心弹窗提示 **未找到应用信息，您还没有授权？** 请检查当前登录的 HBuilderX 账号是否存在 uni-app appId 的管理权限，可切换账号重新操作
- 绑定 DCloud 作为服务商之后，信息维护可在开发者中心修改。如果要临时修改部分参数，可在 AGC 后台用户与访问-第三方授权管理中，临时取消。维护好信息后重新进行绑定。
- 绑定服务商时候，如果华为的页面报错，可刷新一下，短时间重复绑定会有错误缓存
