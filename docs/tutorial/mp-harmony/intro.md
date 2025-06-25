# 概述

> 如果你是服务商、外包商，承诺短期可快速上架 20 个元服务，欢迎点此[联系我们](https://im.dcloud.net.cn/#/?business_type=harmony-reward)，我们可提供单独技术支持，以及帮助协调鸿蒙测试机。

从 `HBuilderX 4.34` 版本开始，uni-app 支持 **鸿蒙元服务** 平台应用开发。鸿蒙元服务就是鸿蒙 Next 系统上的快应用、小程序。在鸿蒙 Next 系统上，不再支持快应用，对标替换产品即为鸿蒙元服务。

欢迎加入 [uni-app 鸿蒙化技术交流群](https://im.dcloud.net.cn/#/?joinGroup=668685db8185e1e6e7b7b15e) 进行交流。

::: warning 注意

- 目前已支持 Vue2/Vue3 使用 HBuilderX/CLI 方式运行到元服务。cli 参考 [如何使用 cli 创建元服务？](#using-by-cli)
- 元服务的开发支持鸿蒙真机，现已支持使用模拟器开发，不区分 Mac/Windows，需要下载 [5.1.1 beta 版本的 DevEco](https://developer.huawei.com/consumer/cn/download/?ha_source=Dcloud&ha_sourceId=89000448)，提供的 API 19 Beta 模拟器。如果遇到 hsp 报错，[查看解决方法](#failed-to-install-the-hap-or-hsp)
- 目前支持鸿蒙 5.0，低于此版本（比如鸿蒙 4.x）不视为鸿蒙 Next。鸿蒙 Next 的机型清单如下，查看 [支持清单](https://consumer.huawei.com/cn/support/harmonyos/models-next/?ha_source=Dcloud&ha_sourceId=89000448)
  :::

## 前置准备

### 开发环境准备

- HBuilderX 4.51+ [下载地址](https://www.dcloud.io/hbuilderx.html)
- DevEco-Studio 5.0.5.200+ 最新的 release 版本 [下载地址](https://developer.huawei.com/consumer/cn/download/?ha_source=Dcloud&ha_sourceId=89000448)

### 元服务 appid 注册@register-app-id

元服务的开发和上架需要使用元服务的包名 BundleName，包名的形式 `com.atomicservice.[你的 APPID]`。

如果还没有创建元服务，访问 [华为 AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/myApp?ha_source=Dcloud&ha_sourceId=89000448) 完成元服务应用的注册，得到相关包名。方便进行签名证书的操作。

### 元服务上架备案（上架重要）

元服务上架需要提前做好备案，强烈建议注册元服务时候立刻开始备案流程，避免临上架才开始备案，耽误上架时间。参考 [App 备案相关注意事项](https://developer.huawei.com/consumer/cn/doc/app/50130-FAQ?ha_source=Dcloud&ha_sourceId=89000448).

如果你的元服务需要使用登录、支付权限，也立即开始着手准备申请相关权限，参考 [华为支付服务开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/payment-preparations-V5?ha_source=Dcloud&ha_sourceId=89000448)。

常见问题：我已经备案、上架了安卓应用，参考 [HarmonyOS 应用/元服务应如何进行备案？](https://developer.huawei.com/consumer/cn/doc/app/50130?ha_source=Dcloud&ha_sourceId=89000448)

### 准备签名证书

初次运行元服务，需要配置好证书签名、权限设置等信息，第一次参与鸿蒙开发的新手请仔细阅读下面相关建议，否则可能会影响开发元服务。

如果你已有鸿蒙 App 开发经验，元服务的证书签名、权限配置和鸿蒙 App 的相关操作基本一致，参考 [证书签名配置指南](../harmony/runbuild#connectmobile) 。

签名证书分成两类：

- 自动签名证书。签名过程比较简单，可用于调试，不能用于上架，熟悉上手后再迁移成手动签名
- 面向企业级协作的调试、发行证书。统一管理设备注册、鸿蒙权限管理等，调试证书可以用于开发，发行证书可以用于上架。

接下来文档会面向新手，详细介绍如何使用自动签名证书。发行证书会在文档下方的 **发行与上架** 部分进行介绍。

建议用户动手使用 DevEco Studio 编辑器创建元服务的原生项目（下面称原生工程），完成相关配置，以保证开发环境配置正确。**先保证空模板项目能运行**，再继续进行 uniapp 元服务的开发。

打开 DevEco Studio 编辑器，选择 `新建工程 - 元服务 AtomService - Empty Ability`，下面的截图来自 DevEco Studio：

![选择元服务 AtomService](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/6cf884be-d067-4fed-b3df-23ad74dcbc39.png)

选择 [已注册好的 AppID](#register-app-id)，创建鸿蒙元服务示例（下面称原生工程）。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/2e011c35-932c-48bf-9d06-0a93a1885259.png)

在编辑器的右上角点击`Project Structure...` 图标，勾选自动签名 Automatically generate signature。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/7eeda96c-4fc1-45d3-816b-2e23806d2e36.png)

**注意**：

- 也可以通过 `File - Project Structure...` 打开。
- 这种自动签名的方式只能用于运行与调试，需要发行上架时候请参考 **发行与上架** 章节修改签名文件。
- 签名操作需要连接鸿蒙设备。

这个时候点击 `Run - Run 'entry'` 或者编辑器顶部的小三角选择运行。如果可以运行成功官方的 Hello World 示例，说明相关环境、证书配置完成。后续用到登录、支付、定位等权限时候需要使用调试证书，到时候替换正确的手动签名证书即可，本部分目的是配置元服务环境，减少上手阻碍。

到这里前置工作就准备完成了。因为元服务还在开发迭代，下面补充相关注意事项。

### 签名文件、权限配置文件位置

请留意原生工程的两个文件比较特殊，后续 HBuilderX 编译运行需要这些文件：

1. 根目录 `build-profile.json5` - 证书签名参数等。后续元服务的开发运行、发布上架依赖此文件。
2. `entry/src/main/module.json5` - 项目权限配置、metadata 信息配置，元服务设置权限，比如访问网络、位置定位、手机震动等功能依赖此文件。具体的鸿蒙元服务权限列表可以参考 [鸿蒙对所有应用开放的权限清单](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/permissions-for-all-V5?ha_source=Dcloud&ha_sourceId=89000448)。

## 运行与调试

在 HBuilderX 运行 uni-app 项目到元服务分成四个步骤：

1. 配置 `manifest.json` 文件
2. 配置 `build-profile.json5`
3. 配置 `module.json5`
4. 项目启动

下面进行详细说明。

### 1. 配置 manifest.json 文件

项目运行需要配置元服务包名，打开项目根目录的 `mainefest.json` 填写 `鸿蒙元服务 - 应用包名`，结构类似 `com.atomicservice.[你的AppID]`。

![配置 manifest.json 文件](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/f7a94969-59d3-42ad-84be-adf5bcadcd54.png)

### 2. 配置 `build-profile.json5`

需要配置签名证书，这里依赖 [准备签名证书](#准备签名证书) 部分。项目根目录创建 `harmony-mp-configs/build-profile.json5` 文件。

考虑到新手用户不熟悉配置，建议下载 [这个模版](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/build-profile.json5) 修改，只替换签名 `signingConfigs`部分，其他配置项不要修改。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dac3b26f-7db8-415b-9df6-43e5964043ab.png)

### 3. 配置 `module.json5`

鸿蒙元服务需要获取使用特定的能力，比如元服务登录、震动、获取网络状态等原生提供的能力，需要配置权限模版。

项目根目录创建 `harmony-mp-configs/entry/src/main/module.json5` 文件。下载 [module.json5](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/module.json5) 文件进行替换操作。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/62fbd174-5276-4a76-9ef7-26562e611533.png)

访问 [AGC 后台](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/myProject?ha_source=Dcloud&ha_sourceId=89000448)，选择你的项目，在 **项目设置 - 常规** 页面中搜索 Client ID，匹配到的结果是下面需要到 `client_id`，这个参数会关联当前应用的相关权限，比如位置服务等。

![](https://web-ext-storage.dcloud.net.cn/unicloud/0a447b30-645c-4325-99c8-8d68274f0f2d.png)

### 4. 运行鸿蒙元服务

选择 `运行 - 运行到小程序模拟器 - 鸿蒙元服务`，在弹出的鸿蒙设置选择框中选择鸿蒙真机。

![运行鸿蒙元服务](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/48d95bfd-418d-4dfd-8715-b03c8d9841f1.png)

![选择模拟器](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dc3e7683-5d44-40a9-920f-80aec53330dc.png)

构建流程完成后，控制台提示：

> 安装成功
>
> 在鸿蒙设备上启动运行 .hap ...
>
> 运行成功

同时真机页面更新，即可进行元服务开发和运行。

元服务的条件编译是 `MP-HARMONY`。

开发过程中遇到的问题，欢迎加入 [uni-app 鸿蒙化技术交流群](https://im.dcloud.net.cn/#/?joinGroup=668685db8185e1e6e7b7b15e) 进行交流，有官方人员进行答疑和指导。

如果遇到需要 debug 或者白屏问题可以下面方案 [进行调试](#how-to-debug)。

构建鸿蒙工程的过程中可能需要访问 npm 公共仓库，如果遇到网络问题可以通过设置环境变量 `NPM_CONFIG_REGISTRY` 来指向特定的 npm 公共仓库。

## 发行与上架

元服务上架需要授权 DCloud 作为服务商完成上架，这里介绍如何将元服务上架到鸿蒙应用市场。

### 上架前置准备

**注意**：目前上架元服务，部分应用信息需要在鸿蒙元服务后台填写，访问 [华为 AppGallery Connect 后台](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/?ha_source=Dcloud&ha_sourceId=89000448)，选择 **我的元服务**，选择对应的元服务 - 编辑。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/0cc21275-cb13-4a68-968b-24438a4b2d0d.png)

需要填写 3 处资料：

1. 设置 `应用上架 - 应用信息 - 应用分类标签` 填写应用分类标签，是为了下一步的内容分级做准备。
2. 填写 **内容分级** 表单。
3. 填写 **隐私声明**，包含隐私政策、用户协议。
   - 务必认真核对隐私政策中的权限申请要和实际代码中的 `requestPermissions` 字段一致，否则会被驳回。
   - 记录好生成的隐私政策链接、填写的用户协议地址。上架时候还需要使用。

填写完点击页面右上角的 **保存** 按钮，其他没有提到的数据无需填写，这一步骤作用是填写上架所需的特定数据。

### 发行与上架步骤

在 HBuilderX 中开发 uni-app 上架到鸿蒙元服务需要下面几个步骤：

1. 授权 DCloud 完成上架流程。
2. 配置发行签名证书。
3. 应用打包。
4. 完善上架资料

下面进行详细说明。

### 1. 授权 DCloud 完成上架流程

点击 [鸿蒙第三方授权链接](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/authorization?clientId=1553077832379297600&type=1?ha_source=Dcloud&ha_sourceId=89000448) 打开下面页面：

第一步：

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/f4f354d9-bfe0-4a75-aaa5-65ca66882316.png)

第二步：

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/fd9c19a8-40e5-482f-a94c-b527cd8952f8.png)

选择你要上架的元服务，授权 DCloud 完成后续的上架流程。

### 2. 配置发行签名证书

开发调试期间的证书不可用于应用上架。元服务发布证书的申请流程和鸿蒙应用开发类似，访问 [鸿蒙发布元服务文档](https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyos-releaseservice-0000001946273965?ha_source=Dcloud&ha_sourceId=89000448) 进行发布证书的获取。

修改 `build-profile.json5` 里的 release 证书签名。务必注意调试和发行证书是两套，不能混用。

参考下方常见问题，配置 `module.json5` 设置图标、启动图等自定义配置项。

### 3. 应用打包

在 HBuilderX 中选择 `发行 - 鸿蒙元服务`，进行元服务打包。等待打包完成，会提示上传完成。接下来到 DCloud 开发者中心完善上架资料。

上传成功截图如下：

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/a40b554b-2ba3-4a7b-8d2c-a9baa43e9bb7.png)

### 4. 完善上架资料

在上个步骤中，控制台在上传完成之后，提示打开 [DCloud 开发者中心](https://dev.dcloud.net.cn)。如果你是项目协作者账号登录，请切换为项目作者账号登录。

选择 `应用管理 - 我的应用 - 选择项目 APPID`，进入项目详情，选择 **各平台信息**，打开下面截图的页面，选择 **发布** 按钮。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/0dba9aa1-1a5f-4fea-86b0-35f7c9e691bd.png)

表单会默认填写部分元服务信息，请务必确定完成了 **上架前置准备** 要求内容。填写完成后选择 **提交审核** 按钮。

下面是用户上架遇到的问题，请 **注意**：

- 务必配置应用图标位元服务图标，页面中有 元服务图标生成工具 链接，否则会审核失败
- 发布版本 - 版本选取，选择创建时间最新的版本，勾选选择

上架过程中遇到的问题，欢迎加入 [uni-app 鸿蒙化技术交流群](https://im.dcloud.net.cn/#/?joinGroup=668685db8185e1e6e7b7b15e) 进行交流，有官方人员进行答疑和指导。

## 注意事项

### 如何配置元服务签名证书？如何配置权限？

建议先阅读上面调试开发文档，了解大致流程。也可参考 [鸿蒙签名文件配置](https://uniapp.dcloud.net.cn/tutorial/harmony/runbuild.html#signing-configs-files) 了解如何生成证书。

新用户面对鸿蒙签名相关文件会不确定怎么调整。这里对概念做进一步解释：签名文件总共需要四个配置文件（p12/csr/cer/p7b），和两个配置选项（alias/password）。

- p12/csr 是本地生成的配置文件，这两个文件和鸿蒙应用、鸿蒙元服务无关，可兼容使用。
- cer 文件区分调试证书、发行证书，这个文件和和鸿蒙应用、鸿蒙元服务无关，可兼容使用。
- p7b 文件和具体应用、绑定设备、ACL 权限有关，新增的设备必须重新下载，

访问 [AGC 后台](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html?ha_source=Dcloud&ha_sourceId=89000448) 的 证书/APPID/Profile 页面中可以下载。

文档调试章节提到了权限配置、metadata 等信息配置。HBuilderX 工程文件重点关注 `harmony-mp-configs` 这个文件夹，内部的文件在编译时候会自动同步到最终鸿蒙工程中，如果没有需要新建对应文件。

在 `harmony-mp-configs/entry/src/main/module.json5`，可以设置权限、metadata、隐私协议托管等功能，完整配置文档可以参考 [module.json5 配置文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/module-configuration-file?ha_source=Dcloud&ha_sourceId=89000448)

### 如何修改元服务默认标题、图标、启动图等信息？@how-to-change-icon

如果你开发过鸿蒙应用，会发现元服务工程和鸿蒙应用开发设置一致，配置文件同样遵循 module.json5 效果优先于 app.json5 ，参考 [鸿蒙应用组件配置文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/application-component-configuration-stage-V5?ha_source=Dcloud&ha_sourceId=89000448)。推荐在组件级别进行配置。

打开 `entry/src/main/module.json5` ，定位到 `module.abilities[0]` 会找到下面几个字段：

- `description` 应用描述
- `icon` 应用图标
- `label` 应用标题
- `startWindowIcon` 应用启动图标，Splashscreen
- `startWindowBackground` 应用启动时候屏幕颜色

这里的取值一般是 `$media:xxx` 对应图片索引，`$string:xxx` `$color:xxx` 对应配置文件的值。通过文件配置，在项目 `harmony-mp-configs` 目录创建 `entry/src/main/resources/` 目录，并将原生工程相关配置复制过来。注意，`zh_CN` 大于 `base` 配置，优先修改 zh_CN 配置。

举例，下面是 `zh-CN/element/string.json` 中的内容，可以修改 `EntryAbility_label` 字段。

```json
{
  "string": [
    {
      "name": "module_desc",
      "value": "模块描述"
    },
    {
      "name": "EntryAbility_desc",
      "value": "description"
    },
    {
      "name": "EntryAbility_label",
      "value": "label"
    }
  ]
}
```

元服务图标必须在华为提供的标准图标底板上设计，参考 [生成元服务图标](https://developer.huawei.com/consumer/cn/doc/atomic-guides-V5/atomic-service-icon-generation-V5?ha_source=Dcloud&ha_sourceId=89000448) 生成图标，否则会上架审核不通过。最终得到 512x512 的图标放置在 `harmony-mp-configs/entry/src/main/resources/base/media/app_icon.png` 路径内。

上架时候，这个图标文件也需要在 DCloud 管理后台进行配置。

### 如何查询 ClientID ClientSecet?@how-to-get-clientid

访问 [开发者后台 - 凭证](https://developer.huawei.com/consumer/cn/console/api/credentials/dev99442608245310190/0?ha_source=Dcloud&ha_sourceId=89000448) - 项目级凭证，查询到当前项目的相关信息。

其中 OAth 2.0 客户端 ID 中的凭证名称标识对应的应用、元服务名称，`客户端凭证ID` 代表 `ClientID`,密钥代表 `ClientSecret` 在解析 code 时候需要。

### 发布报错 `hvigor ERROR: Invalid storeFile value. Make sure it is not null or empty. The file must be included`

如果发生在应用运行、发行阶段。可能是构建时候证书缺少或者配置不对。参考 [鸿蒙发布元服务](https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyos-releaseservice-0000001946273965?ha_source=Dcloud&ha_sourceId=89000448) 进行证书申请。

### 发行报错 hvigor ERROR: Unable to find the product 'release'.

如果是发生应用发行阶段，可能是未填写完整的发布证书，需要调整 `build-profile.json5`。

### 发送网络请求报错

需要在配置网络访问白名单：

- 临时方案。进入手机 - 设置 - 系统 - 开发者选项（如果未开启 关于手机 - 软件版本连续点击开启） - 开发中元服务豁免管控，选择开启后，可以自由调试。
- 稳定方案。整理 web-view 需要用到的相关域名，进入[华为 AppGallery Connect 后台](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/?ha_source=Dcloud&ha_sourceId=89000448) - 我的项目 - 开发管理 - 域名设置 - 服务器域名 - httpRequest 合法域名。按照提示进行填写。填写完成后打开 手机设置 - 应用与元服务，删掉正在开发的元服务，重新启动应用。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/49323643-31f5-4f95-80b2-87157c9a06d5.png)

### 组件 web-view 渲染空白，不能展示网页

同上，发送网络请求报错的解决方案。

### 组件 打开 map 地图无法展示、API 位置相关使用报错

Map 和相关定位需要 [华为 AppGallery Connect 后台](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/?ha_source=Dcloud&ha_sourceId=89000448) 进行权限申请。具体可以参考 [鸿蒙 Map Kit 开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/map-config-agc-V5?ha_source=Dcloud&ha_sourceId=89000448)，在 项目设置 - API 管理开启定位服务、位置服务、地图服务。

在 `harmony-mp-configs/entry/src/main/module.json5` 在 `requestPermissions` 字段里添加 `ohos.permission.LOCATION` 和 `ohos.permission.APPROXIMATELY_LOCATION` 两条记录。

元服务不允许未经用户同意发起定位。在请求位置之前需要获取用户授权。伪代码如下：

```js
uni.authorize({
  scope: 'scope.userLocation',
  success: () => {
    uni.getLocation({});
  },
  fail: () => {
    uni.showToast({
      title: '未授权获取地理位置权限',
    });
  },
});
```

### 上架驳回理由：存在自行构造的登录页面，不符合华为应用市场审核标准@how-to-design-user-login

元服务的登录要求可以参考阅读 《[使用华为账号登录 静默登录](https://developer.huawei.com/consumer/cn/doc/design-guides/accounts-0000001967444380?ha_source=Dcloud&ha_sourceId=89000448)》、《[开发者可以使用自行设计的登录界面吗？](https://developer.huawei.com/consumer/cn/doc/atomic-faqs-V5/faqs-common-account-5-V5?ha_source=Dcloud&ha_sourceId=89000448)》。

如果需要账号登录，必须使用 `uni.login` 登录，不得绕过自行使用账号密码登录。建议申请获取用户手机号权限，然后关联自己的账号系统。在应用在应用合适的时机调用登录接口换取 UnionID，先标识用户为华为用户，操作关键步骤时候接入现有账号，比如获取手机号关联现有账号。同时务必提供注销用户功能入口，用户自行取消注册，否则会被驳回。

实践中，某些分类下的应用无法申请一键获取手机号，申请会被驳回，这种情况下，建议在业务中完成静默登录，然后在某些操作时候关联其他平台用户，此时通过手机号和验证码完成相关关联平台账号逻辑。

具体技术实现见下个问题。

### API 登录 uni.login 获取 code 报错、如何绑定现有用户体系？@how-to-login

参考[鸿蒙 Account Kit 开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/account-config-permissions-V5#section132012717318?ha_source=Dcloud&ha_sourceId=89000448) 设置相关权限，添加 scope 权限。

易错点：

1. 签名证书不能是自动签名，设置的是 agc 上下载的调试证书
2. `mp-configs/entry/src/main/modueljson5` 里有个 metadata client_id 确保值正确。
3. 访问 [AGC 开发与服务](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/myProject?ha_source=Dcloud&ha_sourceId=89000448) - 我的项目，选择对应的项目和应用，打开 常规 - 应用，配置指纹，确保添加了调试证书。

通过 `uni.login` 可以得到 `code`，流程和其他小程序登录流程相似。参考 [解析凭证](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/account-api-get-token-info-V5?ha_source=Dcloud&ha_sourceId=89000448) 得到用户的 UnionID，开发者在这一步骤自行判断是已绑定华为 UnionID，如果未绑定，引导用户绑定现有账号体系。如果你没有 code 返回值，观察接口错误提示，一般是 client_id 设置错误。

也可以参考下面手机号接口申请，快速绑定手机号，具体见下个问题。

欢迎使用 [uni-id-pages](https://doc.dcloud.net.cn/uniCloud/uni-id/app.html) 插件加速元服务开发落地，这里封装了服务端开发的逻辑。在 uni-pay 中也提供了华为元服务支付的服务端逻辑封装，接入更方便。

### 如何获取用户手机号？@how-to-get-phonenumber

申请过手机号敏感权限之后，可以通过 button 获取用户手机号。使用这种方式快速注册、绑定账号体系。

1. 获取手机号权限。访问 [开发者后台- API 服务 - 授权管理 - 敏感权限](https://developer.huawei.com/consumer/cn/console/api/scopeManage?ha_source=Dcloud&ha_sourceId=89000448) 申请获取您的手机号权限。等待审核通过后继续下面操作
2. 页面中使用下面按钮获取手机号授权 code。
3. 参考 [获取用户级凭证](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/account-api-obtain-user-token-V5?ha_source=Dcloud&ha_sourceId=89000448) 通过上一步骤的 code 获取 `access_token`
4. 参考 [其他场景获取用户信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/account-api-otherscene-getuserinfo-V5?ha_source=Dcloud&ha_sourceId=89000448) 接口通过 `access_token` 获取用户手机号。

如果手机号申请失败，一般是没有严格按照手机号申请的要求完整填写，确保包含三个部分，应用的分类、场景的具体操作步骤、请求频率。尤其是第二部分，参考描述详细步骤。

```html
<button open-type="getPhoneNumber" @getphonenumber="getphonenumber">
  获取手机号
</button>
```

```js
getphonenumber(e){
  // 获取 code 数值：e.detai.code
  console.log(e.detail.code);
}
```

如果有返回值，说明配置项正确。可以让服务端解析数据。如果点击无反应，在 HBuilderX 中打开展示原生日志，观察是否有类似 `Failed to check the fringerprint` 的告警，排查错误方案如下：

1. 签名证书不能是自动签名，设置的是 agc 上下载的调试证书
2. 确保你联调的元服务已经申请得到了获取手机号权限，如果你在开发多个元服务可能会错误配置
3. 访问 [AGC 开发与服务](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/myProject?ha_source=Dcloud&ha_sourceId=89000448) - 我的项目，选择对应的项目和应用，打开 常规 - 应用，配置指纹，确保添加了调试证书。
4. `mp-configs/entry/src/main/modueljson5` 里有个 metadata client_id 确保值正确，是应用的 ClientID，不是项目的 ClinetID
5. 如果修改过配置参数没有立刻生效，真机打开设置 - 应用与元服务，找到正在开发的应用选择移除，重新运行

用户侧第一次使用会有系统控件弹窗申请，同意之后，后续会自动同意。如果撤回同意，或者测试控件效果，需要手机打开 设置-华为账号-账号安全-使用华为账号的应用-删除授权。

用户侧控件效果如下，默认展示手机系统登录的账号，也可以通过管理手机号，手动验证其他手机号。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/153e4b27-07bb-4fb1-aaaf-1685d555abf5.png)

最终解析 token 得到最终结果，最终结果数据是下面的结构，供 mock 参考，包含了 unionID/mobileNunber 字段，后面执行用户关联操作。

```json
{
  "unionID": "xxx",
  "phoneCountryCode": "0086",
  "mobileNumber": "13000000000",
  "openID": "xxx",
  "purePhoneNumber": "13000000000"
}
```

### API 获取网络类型失败、手机震动不等效

新版模版已内置，如果你自定义过权限，需要存在 `GET_NETWORK_INFO` 和 `vibrate` 权限。具体的鸿蒙元服务权限列表可以参考 [鸿蒙对所有应用开放的权限清单](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/permissions-for-all-V5?ha_source=Dcloud&ha_sourceId=89000448) 进行查询。按照 **配置权限模版** 章节进行配置。

### 运行报错 `failed to install bundle. code:9568296 error: install failed due to error bundle type`

模拟器或者真机上已经安装了当前 BundleName 的应用。可能是证书复用导致的错误，重新确认当前证书是元服务证书，而不是鸿蒙 App 的证书。

### 运行报错 `hvigor ERROR: SDK component missing. Please verify the integrity of your SDK.`

你可能声明了不兼容的字段，需要在 `harmony-mp-configs/build-profile.json5` 里面去掉 `app.products.*.compileSdkVersion` 属性。

### 运行运行闪退，但是没有报错

一般来说 `harmony-mp-configs/entry/src/main/module.json5` 配置文件有问题，导致运行失败，需要检查配置文件，如果配置文件没有问题，可以尝试删除文件，重新运行一下。

确保 `entry/src/main/module.json5` 文件是使用文档顶部的网络模版下载的。

### 配置的 module.json5 注意事项

文件 `harmony-mp-configs/entry/src/main/module.json5` 会用来配置应用的一些应为，你可以参考 [鸿蒙 module.json5 配置文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/module-configuration-file-V5?ha_source=Dcloud&ha_sourceId=89000448) 进行学习和参考。

如果你已经在开发鸿蒙 App ，见到 module.json5 会感觉比较熟悉，有几个属性需要特别注意：

- 需要 `module.installationFree` 设置为 true
- 需要设置 `module.srcEntry` `module.metadata` 和 `module.dependencies` 参考上一条问题。

### 鸿蒙元服务的条件编译怎么写？

`MP-HARMONY`，具体参考 [条件编译文档](https://uniapp.dcloud.net.cn/tutorial/platform.html)。

### 运行报错 `Failed to install the HAP or HSP because the dependent module does not exist.`@failed-to-install-the-hap-or-hsp

错误原因：表明当前环境缺少元服务运行所必须的基础依赖，通常出现在初次运行的错误提示。

解决方案：

在终端中运行 `hdc shell bm dump-shared -a`，观察返回值是否包含 `com.huawei.hms.ascfruntime`，如果不包含运行元服务会出现此错误。

1. 如果使用真机，需要使用鸿蒙 Next 真机，确保系统版本是鸿蒙 5.0+，其他版本不支持。应用市场搜索 “helloUniapp”，随后直接运行以自动安装 ASCF 引擎。
2. 如果使用模拟器开发，需要下载 [5.1.1 beta 版本的 DevEco](https://developer.huawei.com/consumer/cn/download/?ha_source=Dcloud&ha_sourceId=89000448)，下载 API 19 Beta 模拟器，其他版本模拟器无法运行元服务。

注意：如果使用模拟器仍然报错上述错误，临时方案需要新建 `harmony-mp-configs/entry/oh-package.json5`，填充下面内容。使用真机时候不需要执行这个操作。此为鸿蒙 Bug，后续鸿蒙会优化处理。

```json
{
  "name": "entry",
  "version": "1.0.0",
  "description": "Please describe the basic information.",
  "main": "",
  "author": "",
  "license": "",
  "dependencies": {
    "@atomicservice/ascfapi": "1.0.10"
  }
}
```

3. 如果仍有问题，可以在 [uni-app 鸿蒙化技术交流群](https://im.dcloud.net.cn/#/?joinGroup=668685db8185e1e6e7b7b15e)沟通。

### 分包页面无法打开

已修复，在 HBuilderX alpha 4.63 上有问题，请参考 [这个问题](https://ask.dcloud.net.cn/question/209765) 进行兼容。

### 我希望自动化来处理元服务的创建、更新和维护@automation-cli

目前华为提供了一个自动化工具，用来自动化处理多个元服务的创建、信息维护和更新操作。详见 [元服务工具使用指导](https://developer.huawei.com/consumer/cn/doc/app/atomic_tool_usage-0000002081536858#section1861132294011?ha_source=Dcloud&ha_sourceId=89000448)

### 备案如何获取公钥和签名信息？

备案类问题参考阅读：[APP 备案 FAQ](https://developer.huawei.com/consumer/cn/doc/app/50130?ha_source=Dcloud&ha_sourceId=89000448)。

补充： Mac 电脑上指纹信息填写 SHA-1 的数值，不要填写 SHA-256。

### 元服务如何调试、遇到渲染白屏了怎么看？@how-to-debug

首先建议缩小问题范围，注释页面相关逻辑，锁定出问题的页面、组件、逻辑，从而针对性的调试。如果希望开启远程调试，可以按照下面方法操作。

调试分成两个部分，一个是视图层的 WebView 调试，一个是逻辑层 V8 的调试。阅读官方文档 [运行调试元服务](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/debug-ascf-code?ha_source=Dcloud&ha_sourceId=89000448)

WebView 调试按照文档操作，简单来说可以分成三个步骤：

1. 确认插入了设备执行 `hdc shell "cat /proc/net/unix | grep devtools"` 记录返回数据尾部的数字部分
2. 转发端口 `hdc fport tcp:9222 localabstract:webview_devtools_remote_[刚才的数字部分]` 返回 OK
3. 打开浏览器 `chrome://inspect/#devices` 观察 Remoet Target 进行调试。

V8 引擎调试可以这样操作

- 阅读 [获取 ASCF 插件](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/ascf-plugin?ha_source=Dcloud&ha_sourceId=89000448) 安装 DevEco 插件
- 在 DevEco 中创建新工程，选择 Atomic Service - ASCF Ability 模版。如果没有说明上个步骤没有安装正确。
- 找到 HBuilderX 的编译产物 `unpackage/dist/dev/.mp-harmony` 内容放置到 DevEco 工程中的 ascf_src 目录下
- 选择启动，确保应用可以正确访问，需要配置证书签名，同步 HBuilderX 工程中的 harmony-mp-configs 目录内容。如果用到了分包，选择 entry- Editor Configure - Deploy Multi Hap,勾选全部 Module。本步骤是保证项目正常运行
- 选择 debugger 模式。点击顶部图标小虫子 `debug Entry'
- 终端执行 `hdc fport tcp:9229 tcp:9225`， 打开浏览器 `chrome://inspect/#devices` 应该可以找到 RemoteTarget。如果找不到，检查上面步骤操作正确
- 默认情况下看不到源码，此为鸿蒙问题，需要把当前应用返回桌面，再从历史记录中激活，此时 debugger 会正常出现

如果你遇到应用几秒后闪退，说明不是 debugger 模式，正常运行情况下阻塞 6s 系统会让应用闪退。

### API uploadFile 报错，其他端正常

观察上传参数里是否有数字类型参数，强转为字符串。可进一步参考 [鸿蒙相关问题](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/faqs-runtime-uploadfile-error)

### 元服务构建在 Windows 系统下卡死

有用户反馈在 Windows 平台下运行 DevEco 原生元服务正常，使用 HBuilderX 运行空白工程会卡主无法完成。发现是个别系统安全工具会默认拦截，拦截发生在 DevEco 调用内置的 node 处理编译时候。提示文案：“有程序正在进行可疑操作，建议阻止”。

目前没有好的方案解决，建议始终信任 DevEco 的操作，或者临时退出安全软件。有相关经验也欢迎交流反馈。

### 发行应用时候提示上传失败

- 场景一 `[AppGalleryConnectPublishServicelapp state can not be modified!` 当前应用可能已经在审核中
- 场景二 `submit version for review failed, additional msg is [[5]]` 这表示代码和上传时候设备勾选的不统一，代码中搜索 `tablet` 配置项删掉并重新发布，在 uniapp 后台改为仅手机，不勾选平板。
- 场景三 `请检查华为后台隐私政策中 xxx 是否填写完整`，这表示 AGC 的隐私协议表单缺少对应项。你可以在 AGC 后台 - 用户与访问 - 授权管理 -应用授权，临时取消服务商绑定。操作好之后点击保存，重新走服务商绑定。

### HBuilderX Alpha 4.51 版本无法启动@run-on-451

从 HBuilderX Alpha 4.51 开始，鸿蒙元服务启用了新的内置模版，适配 ASCF 最新能力，产生了不兼容变化，需要手动处理。

需要手动处理下面 3 项改动：

1. 打开 `harmony-mp-configs/build-profile.json5` 文件，搜索 `useNormalizedOHMUrl` 确保值为 true
2. 打开 `harmony-mp-configs/entry/src/main/module.json5` 文件，

- 搜索 `dependencies` 修改 bundleName 为 `com.huawei.hms.ascfruntime`
- 搜索 `dependencies` 修改 versionCode 为 `10006300`

3. （可选）如果你存在 `entry/oh-package.json5` 文件（一般不需要这个文件），你需要添加新的依赖，添加 dependencies 内 `"@atomicservice/ascfapi": "^1.0.6"`

如果仍有报错，你可以在华为应用市场中搜索 `helloUniApp` 打开体验一次，这个过程会主动下载 `com.huawei.hms.ascfruntime`。

### 常见上架驳回错误原因

- 元服务图标（最近任务列表图标）未使用平台提供的元服务图标生成工具生成，图标使用不规范。处理方案：参考 [如何修改元服务默认标题、图标、启动图等信息？](#how-to-change-icon)
- 您的元服务提交的图标为系统图标（安装后/最近任务列表）。修改建议：元服务图标不得为系统图标。处理方案：参考 [如何修改元服务默认标题、图标、启动图等信息？](#how-to-change-icon)
- 元服务存在自定构造的登录页面，不符合华为应用市场审核标准。处理方案：参考 [API 登录 uni.login 获取 code 报错、如何绑定现有用户体系？](#how-to-design-user-login)
- 您提交的元服务（名称/图标与最近任务列表的元服务名称/元服务图标不一致）处理方案：参考 [如何修改元服务默认标题、图标、启动图等信息？](#how-to-change-icon)
- 您元服务内的隐私政策/在 AppGallery Connect 上提交的隐私政策网址内元服务名称与开发者提交的元服务名称信息不一致。处理方案：隐私协议是在华为后台自己填写表格构建的，观察表格里顶部的名称是否和 appid 对应的名称是否一致。
- 您元服务内用户协议展示的元服务名称与在 AppGallery Connect 上提交的元服务名称不一致。处理方案：用户协议网址一般是在华为后台自己添加的，观察填写的 URL 内容和当前的元服务名称是否一样，元服务名称华为后台 appid 对应的名称一致。
- 隐私政策、用户协议未体现鸿蒙平台，处理方案，检查在 Android iOS 相关描述旁，应该有鸿蒙，常见的问题是把安卓平台的隐私协议直接上传了，没有增加鸿蒙字样，没有针对鸿蒙平台做适配导致驳回。

### 如何使用 cli 创建元服务？@using-by-cli

目前已支持通过 Vue3 CLI 开发元服务：

- 全新项目可使用 `npx degit dcloudio/uni-preset-vue#vite-alpha my-vue3-project` 创建项目。
- 在现有的 cli 项目中使用 `npx @dcloudio/uvm@latest alpha` 可以升级最新 alpha 依赖，修改 package.json 的 scripts ，添加：

```json
{
  "dev:mp-harmony": "uni -p mp-harmony",
  "build:mp-harmony": "uni build -p mp-harmony"
}
```

目前已支持通过 Vue2 CLI 开发元服务:

```shell
yarn add @dcloudio/uni-mp-harmony@2.0.2-alpha-4050720250316001
yarn add @dcloudio/webpack-uni-pages-loader@2.0.2-alpha-4050720250316001 -D
```

修改 package.json 的 scripts ，添加

```json
{
  "dev:mp-harmony": "cross-env NODE_ENV=development UNI_PLATFORM=mp-harmony vue-cli-service uni-build --watch",
  "build:mp-harmony": "cross-env NODE_ENV=production UNI_PLATFORM=mp-harmony vue-cli-service uni-build"
}
```

### 元服务如何开发服务卡片 Widget？

在鸿蒙应用、鸿蒙元服务中可以开发卡片，放置到桌面上，展示特定的应用数据、提供快速启动应用的入口。目前，卡片开发有两种方式：

- ArkTS UI 开发，需要使用 ArkTS 语法编写布局、支持自定义 Canvas，同时支持鸿蒙应用和元服务，属于原生开发，具体参考 [开发基于 ArkTS UI 的卡片](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-working-principles?ha_source=Dcloud&ha_sourceId=89000448) 文章。
- JS UI 开发，**不支持元服务**，仅支持鸿蒙应用开发。提供了类似 HTML+CSS 的方案实现布局，相比 ArkTS UI 有一些能力限制。具体参考 [开发基于 JS UI 的卡片](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/js-ui-widget-development?ha_source=Dcloud&ha_sourceId=89000448)

在元服务中，只能通过 ArkTS UI 开发实现布局，参考文档方案如下：

1. 在 DevEco 创建卡片模板
2. 开发卡片功能：快速唤起元服务、共享元服务数据
3. 移动代码放置到 HBuilderX 工程中

下面介绍如何开发基于 UI 的卡片，思路和原生开发一致，推荐在 DevEco 中完成卡片开发验证，之后再迁移到 HBuilderX 工程中。首先在 DevEco 中先创建一个 ascf 工程。

- 打开 entry/src/build-profile.json5 文件
- 选择 DevEco 的菜单 File - New - Service Widget - Dynamic Widget。如果没有找个选项，说明没有打开上面的文件

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/1f6ddb67-ef68-4d06-a9a4-5e75acd56180.png)

- 选择 Hello World 模版
- 在打开的 Configure Your Service Widget 选择 ArkTS 模板。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/0f4c22e8-d444-4407-84d8-895ad1f2aa1f.png)

这里推荐通过 git 来管理文件变化，选择默认的 2x2 和 2x4 会自动生成模板文件。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/9f62a690-2007-4a2f-a1d4-8d945c0e84b5.png)

在默认的模板中，定义了一个 Hello World 卡片，点击卡片时候会自动打开元服务。复制这些文件放置到 mp-harmony-configs 文件夹，比如 `entry/src/main/module.json5` 文件放到 `harmony-mp-configs/entry/src/main/module.json5` 中，保持路径一致，构建时候会自动做替换。

运行服务之后，滚动手机到负一屏，选择卡片，点击加号，添加卡片，卡片可以放到负一屏，也可以长按拖动到桌面中。

更多开发细节参阅鸿蒙文档：[开发基于 ArkTS UI 的卡片](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-ui-widget-working-principles?ha_source=Dcloud&ha_sourceId=89000448)

### 元服务的日志如何查看、分析？

元服务开发还在不断迭代，建议通过 HBuilderX alpha 版本进行开发。

在 HBuilderX 4.63 alpha 版本之前，元服务的 log 日志规则发生了调整，如果低于此版本需要临时使用下面方案查看日志：

- 打开 DevEco 任意项目，不需要启动应用，在底部找到 Log 面板
- 打开 Log 面板，筛选你正在开发的应用，过滤 Warn 级别，观察此时 log 是否有告警、错误爆红。
- 用户侧打印的 log 建议临时通过固定前缀，在 Info 级别进行过滤，或者临时使用 `console.warn` 进行数据打印

如果报错中包含 xxx is not defined，可能是对应的 api 在元服务中还未实现，比如 uni.createAnimation、获取胶囊位置、获取激励视频等。此类问题需要使用条件编译进行规避。

如果报错中包含 vendor.js 中有报错，可能是三方组件库不兼容元服务，可以参考 debug 文档进行错误定位。

### 元服务提交审核常见报错

#### 请检查华为后台隐私政策中 “设备权限调用” 是否填写完整

检查代码中 `module.json5` 中的 requestPermissions 和 AGC 后台的隐私协议权限第二条 设备权限调用要严格一致。

**注意：**

- 位置权限中，精准 `ohos.permission.LOCATION` +模糊定位 `ohos.permission.APPROXIMATELY_LOCATION` 务必成对出现。
- 不要勾选 `ohos.permission.WRITE_IMAGEVIDEO` 和 `ohos.permission.READ_IMAGEVIDEO` 读取和写入，这是敏感权限，一般情况下使用 uni.chooseMedia 和 uni.saveFile 就可以
- 不要勾选剪切板 `ohos.permission.READ_PASTEBOARD` 权限，这是敏感权限需要华为申请下来才能使用，一般场景无法申请，设置剪切板功能 `uni.setClipboardData` 可正常使用。

#### sumit version for review failed, additional msg is xxx

- xxx 为 `[[5]]` ，报错一般是代码中 deviceType 和 uniapp 后台里选择的不一致。元服务建议值勾选 Phone 手机。保持一致即可。
- xxx 为 AppGalleryConnectAppMetaInfoService version's privacyAgreementId is empty。这个一般是一些协议没有选择，错误通过了校验审核

#### [amis] submit version for review faied, additional msg is [appAdapters devices can not own entry main packages]

代码内应用适配平台和鸿蒙后台勾选的设备不匹配，也就是代码中设备清单和线上资料不一样。

代码工程中，需要在 `harmony-mp-configs/entry/src/main/module.json5` 中搜索 `deviceTypes`，通常只设置 phone 值，表示兼容手机

在 AGC 后台或者 uni-app 提审后台，也有适配设备选项，确保和代码中保持一致，通常勾选 手机 Phone 值，表示兼容手机

#### 提交审核按钮为灰色无法提交

观察按钮右侧有个联系方式，可以和 uniapp 发起沟通，看是否有更好的激励政策。如果仍有问题，可以在 [uni-app 鸿蒙化技术交流群](https://im.dcloud.net.cn/#/?joinGroup=668685db8185e1e6e7b7b15e)沟通。
