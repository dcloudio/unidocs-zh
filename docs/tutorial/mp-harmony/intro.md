# 概述

> 如果你是服务商、外包商，承诺短期可快速上架 20 个元服务，欢迎点此[联系我们](https://im.dcloud.net.cn/#/?business_type=harmony-reward)，我们可提供单独技术支持，以及帮助协调鸿蒙测试机。

从 `HBuilderX 4.34` 版本开始，uni-app 支持 **鸿蒙元服务** 平台应用开发。鸿蒙元服务就是鸿蒙 Next 系统上的快应用、小程序。在鸿蒙 Next 系统上，不再支持快应用，对标替换产品即为鸿蒙元服务。

欢迎加入 [uni-app 鸿蒙化技术交流群](https://im.dcloud.net.cn/#/?joinGroup=668685db8185e1e6e7b7b15e) 进行交流。

::: warning 注意

- 目前已支持 Vue2/Vue3 使用 HBuilderX/CLI 方式运行到元服务。cli 参考 [如何使用 cli 创建元服务？](#using-by-cli)
- 目前仅支持鸿蒙 Next 真机，鸿蒙 Mac ARM 模拟器开始内测，[点击链接](#arm-emulator)了解如何申请。
- 目前支持鸿蒙 5.0，鸿蒙 Next 的机型清单如下，查看 [支持清单](https://consumer.huawei.com/cn/support/harmonyos/models-next/)。
  :::

## 前置准备

### 开发环境准备

- HBuilderX 4.51+ [下载地址](https://www.dcloud.io/hbuilderx.html)
- DevEco-Studio 5.0.5.200+ [下载地址](https://developer.huawei.com/consumer/cn/download/)

### 元服务 appid 注册@register-app-id

元服务的开发和上架需要使用元服务的包名 BundleName，包名的形式 `com.atomicservice.[你的 APPID]`。

如果还没有创建元服务，访问 [华为 AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/myApp) 完成元服务应用的注册，得到相关包名。方便进行签名证书的操作。

### 元服务上架备案（上架重要）

元服务上架需要提前做好备案，强烈建议注册元服务时候立刻开始备案流程，避免临上架才开始备案，耽误上架时间。参考 [App 备案相关注意事项](https://developer.huawei.com/consumer/cn/doc/app/50130-FAQ).

如果你的元服务需要使用登录、支付权限，也立即开始着手准备申请相关权限，参考 [华为支付服务开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/payment-preparations-V5)。

常见问题：我已经备案、上架了安卓应用，参考 [HarmonyOS应用/元服务应如何进行备案？](https://developer.huawei.com/consumer/cn/doc/app/50130)

### 准备签名证书

初次运行元服务，需要配置好证书签名、权限设置等信息，第一次参与鸿蒙开发的新手请仔细阅读下面相关建议，否则可能会影响开发元服务。

如果你已有鸿蒙 App 开发经验，元服务的证书签名、权限配置和鸿蒙 App 的相关操作基本一致，参考 [证书签名配置指南](../harmony/runbuild#connectmobile) 。

签名证书分成两类：

- 面向一台鸿蒙设备的自动签名证书。签名过程比较简单，可用于调试，不能用于上架。
- 面向企业级协作的调试、发行证书。统一管理设备注册、权限管理等，调试证书可以用于开发，发行证书可以用于上架。

接下来文档会面向新手，详细介绍如何使用自动签名证书。发行证书会在文档下方的 **发行与上架** 部分进行介绍。

建议用户动手使用 DevEco Studio 编辑器创建元服务的原生项目（下面称原生工程），完成相关配置，以保证开发环境配置正确。

打开 DevEco Studio 编辑器，选择 `新建工程 - 元服务 AtomService - Empty Ability`，下面的截图来自 DevEco Studio：

![选择元服务 AtomService](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/6cf884be-d067-4fed-b3df-23ad74dcbc39.png)

选择 [已注册好的 AppID](#register-app-id)，创建鸿蒙元服务示例（下面称原生工程）。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/2e011c35-932c-48bf-9d06-0a93a1885259.png)

在编辑器的右上角点击`Project Structure...` 图标，勾选自动签名 Automatically generate signature。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/7eeda96c-4fc1-45d3-816b-2e23806d2e36.png)

**注意**：

- 也可以通过 `File - Project Structure...` 打开。
- 这种自动签名的方式只能用于运行与调试，需要发行上架时候请参考 **发行与上架** 章节修改签名文件。
- 签名操作需要连接鸿蒙真机设备。

这个时候点击 `Run - Run 'entry'` 或者编辑器顶部的小三角选择运行。如果可以运行成功官方的 Hello World 示例，说明相关环境、证书配置完成。后续用到登录、支付、定位等权限时候需要使用调试证书，到时候替换正确的手动签名证书即可，本部分目的是配置元服务环境，减少上手阻碍。

到这里前置工作就准备完成了。因为元服务还在开发迭代，下面补充相关注意事项。

### 签名文件、权限配置文件位置

请留意原生工程的两个文件比较特殊，后续 HBuilderX 编译运行需要这些文件：

1. 根目录 `build-profile.json5` - 证书签名参数等。后续元服务的开发运行、发布上架依赖此文件。
2. `entry/src/main/module.json5` - 项目权限配置、metadata 信息配置，元服务设置权限，比如访问网络、位置定位、手机震动等功能依赖此文件。具体的鸿蒙元服务权限列表可以参考 [鸿蒙对所有应用开放的权限清单](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/permissions-for-all-V5)。

## 运行与调试

在 HBuilderX 运行 uni-app 项目到元服务分成四个步骤：

1. 配置 `manifest.json` 文件
2. 配置 `build-profile.json5`
3. 配置 `module.json5`
4. 项目启动

下面进行详细说明。

### 1. 配置 manifest.json 文件

项目运行需要配置元服务包名，打开项目根目录的 `mainefest.json` 填写 `鸿蒙元服务配置 - 应用包名`，结构类似 `com.atomicservice.[你的AppID]`。

![配置 manifest.json 文件](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/f7a94969-59d3-42ad-84be-adf5bcadcd54.png)

### 2. 配置 `build-profile.json5`

需要配置签名证书，这里依赖 [准备签名证书](#准备签名证书) 部分。项目根目录创建 `harmony-mp-configs/build-profile.json5` 文件，下载 [这个模版](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/build-profile.json5) 修改，只替换签名部分。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dac3b26f-7db8-415b-9df6-43e5964043ab.png)

### 3. 配置 `module.json5`

鸿蒙元服务需要获取使用特定的能力，比如元服务登录、震动、获取网络状态等原生提供的能力，需要配置权限模版。

项目根目录创建 `harmony-mp-configs/entry/src/main/module.json5` 文件。下载 [module.json5](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/module.json5) 文件进行替换操作。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/62fbd174-5276-4a76-9ef7-26562e611533.png)

访问 [AGC 后台](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/myProject)，选择你的项目，在 **项目设置 - 常规** 页面中搜索 Client ID，匹配到的结果是下面需要到 `client_id`，这个参数会关联当前应用的相关权限，比如位置服务等。

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

## 发行与上架

元服务上架需要授权 DCloud 作为服务商完成上架，这里介绍如何将元服务上架到鸿蒙应用市场。

### 上架前置准备

**注意**：目前上架元服务，部分应用信息需要在鸿蒙元服务后台填写，访问 [华为 AppGallery Connect 后台](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/)，选择 **我的元服务**，选择对应的元服务 - 编辑。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/0cc21275-cb13-4a68-968b-24438a4b2d0d.png)

需要填写 4 处资料：

1. 设置 `应用上架 - 应用信息 - 应用分类标签` 填写应用分类标签，是为了下一步的内容分级做准备。
2. 填写 **内容分级** 表单。
3. 填写 **隐私声明**，包含隐私政策、用户协议。
   - 务必认真核对隐私政策中的权限申请要和实际代码中的 `requestPermissions` 字段一致，否则会被驳回。
   - 记录好生成的隐私政策链接、填写的用户协议地址。上架时候还需要使用。
4. 同意并勾选 `版权信息 - 免责函` 选项。

填写完点击页面右上角的 **保存** 按钮，其他没有提到的数据无需填写，这一步骤作用是填写上架所需的特定数据。

### 发行与上架步骤

在 HBuilderX 中开发 uni-app 上架到鸿蒙元服务需要下面 5 个步骤：

1. 授权 DCloud 完成上架流程。
2. 配置发行签名证书。
3. 应用打包。
4. 完善上架资料

下面进行详细说明。

### 1. 授权 DCloud 完成上架流程

点击 [鸿蒙第三方授权链接](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/authorization?clientId=1553077832379297600&type=1) 打开下面页面：

第一步：

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/f4f354d9-bfe0-4a75-aaa5-65ca66882316.png)

第二步：

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/fd9c19a8-40e5-482f-a94c-b527cd8952f8.png)

选择你要上架的元服务，授权 DCloud 完成后续的上架流程。

### 2. 配置发行签名证书

开发调试期间的证书不可用于应用上架。元服务发布证书的申请流程和鸿蒙应用开发类似，访问 [鸿蒙发布元服务文档](https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyos-releaseservice-0000001946273965) 进行发布证书的获取。

修改 `build-profile.json5` 里的 release 证书签名。务必注意调试和发行证书是两套，不能混用。

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

### 如何修改元服务默认标题、图标、启动图等信息？@how-to-change-icon

如果你开发过鸿蒙应用，会发现元服务工程和鸿蒙应用开发设置一致，配置文件同样遵循 module.json5 效果优先于 app.json5 ，参考 [鸿蒙应用组件配置文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/application-component-configuration-stage-V5)。推荐在组件级别进行配置。

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

元服务图标必须在华为提供的标准图标底板上设计，参考 [生成元服务图标](https://developer.huawei.com/consumer/cn/doc/atomic-guides-V5/atomic-service-icon-generation-V5) 生成图标，否则会上架审核不通过。最终得到 216x216 的图标放置在 `harmony-mp-configs/entry/src/main/resources/base/media/app_icon.png` 路径内。

上架时候，这个图标文件也需要在 DCloud 管理后台进行配置。

### 如何查询 ClientID ClientSecet?@how-to-get-clientid

访问 [开发者后台 - 凭证](https://developer.huawei.com/consumer/cn/console/api/credentials/dev99442608245310190/0) - 项目级凭证，查询到当前项目的相关信息。

其中 OAth 2.0 客户端 ID 中的凭证名称标识对应的应用、元服务名称，`客户端凭证ID` 代表 `ClientID`,密钥代表 `ClientSecret` 在解析 code 时候需要。

### 发布报错 `hvigor ERROR: Invalid storeFile value. Make sure it is not null or empty. The file must be included`

如果发生在应用运行、发行阶段。可能是构建时候证书缺少或者配置不对。参考 [鸿蒙发布元服务](https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyos-releaseservice-0000001946273965) 进行证书申请。

### 发行报错 hvigor ERROR: Unable to find the product 'release'.

如果是发生应用发行阶段，可能是未填写完整的发布证书，需要调整 `build-profile.json5`。

### 发送网络请求报错

需要主动开启网络访问状态、并且需要设置网络白名单。

开启网络配置。修改 `harmony-mp-configs/entry/src/main/module.json5`，在 json 文件的添加，表明需要 `INTERNET` 权限。

```json
"requestPermissions": [
  {
    "name": "ohos.permission.INTERNET",
    "reason": "$string:app_name",
    "usedScene": {
      "abilities": ["FromAbility"],
      "when": "inuse"
    }
  }
]
```

还需要在配置网络访问白名单：

- 临时方案。进入手机 - 设置 - 系统 - 开发者选项（如果未开启 关于手机 - 软件版本连续点击开启） - 开发中元服务豁免管控，选择开启后，可以自由调试。
- 稳定方案。整理 web-view 需要用到的相关域名，进入[华为 AppGallery Connect 后台](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/) - 我的项目 - 开发管理 - 域名设置 - 服务器域名 - httpRequest 合法域名。按照提示进行填写。填写完成后打开 手机设置 - 应用与元服务，删掉正在开发的元服务，重新启动应用。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/49323643-31f5-4f95-80b2-87157c9a06d5.png)

### 组件 web-view 渲染空白，不能展示网页

同上，发送网络请求报错的解决方案。

### 组件 打开 map 地图无法展示、API 位置相关使用报错

Map 和相关定位需要 [华为 AppGallery Connect 后台](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/) 进行权限申请。具体可以参考 [鸿蒙 Map Kit 开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/map-config-agc-V5)，在 项目设置 - API 管理开启定位服务、位置服务、地图服务。

在 `harmony-mp-configs/entry/src/main/module.json5` 在 `requestPermissions` 字段里添加 `ohos.permission.LOCATION` 和 `ohos.permission.APPROXIMATELY_LOCATION` 两条记录。

元服务不允许未经用户同意发起定位。在请求位置之前需要获取用户授权。伪代码如下：

```js
uni.authorize({
  scope: "scope.userLocation",
  success: () => {
    uni.getLocation({});
  },
  fail: () => {
    uni.showToast({
      title: "未授权获取地理位置权限",
    });
  },
});
```

### 上架驳回理由：存在自行构造的登录页面，不符合华为应用市场审核标准@how-to-design-user-login

元服务的登录要求可以参考阅读 《[使用华为账号登录 静默登录](https://developer.huawei.com/consumer/cn/doc/design-guides/accounts-0000001967444380)》、《[开发者可以使用自行设计的登录界面吗？](https://developer.huawei.com/consumer/cn/doc/atomic-faqs-V5/faqs-common-account-5-V5)》。

如果需要账号登录，必须使用 `uni.login` 登录，不得绕过自行使用账号密码登录。建议申请获取用户手机号权限，然后关联自己的账号系统。在应用在应用合适的时机调用登录接口换取 UnionID，先标识用户为华为用户，操作关键步骤时候接入现有账号，比如获取手机号关联现有账号。同时务必提供注销用户功能入口，用户自行取消注册，否则会被驳回。

具体技术实现见下个问题。

### API 登录 uni.login 获取 code 报错、如何绑定现有用户体系？@how-to-login

参考[鸿蒙 Account Kit 开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/account-config-permissions-V5#section132012717318) 设置相关权限，添加 scope 权限。

易错点： 1. 签名证书不能是自动签名，设置的是 agc 上下载的调试证书 2. `mp-configs/entry/src/main/modueljson5` 里有个 metadata client_id 确保值正确。 3. AGC 后台 - 我的项目，配置指纹，添加了调试证书。

通过 `uni.login` 可以得到 `code`，流程和其他小程序登录流程相似。参考 [解析凭证](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/account-api-get-token-info-V5) 得到用户的 UnionID，开发者在这一步骤自行判断是已绑定华为 UnionID，如果未绑定，引导用户绑定现有账号体系。

也可以参考下面手机号接口申请，快速绑定手机号，具体见下个问题。

欢迎使用 [uni-id-pages](https://doc.dcloud.net.cn/uniCloud/uni-id/app.html) 插件加速元服务开发落地，这里封装号了服务端开发的逻辑。在 uni-pay 中也提供了华为元服务支付的服务端逻辑封装，接入更方便。

### 如何获取用户手机号？@how-to-get-phonenumber

申请过手机号敏感权限之后，可以通过 button 获取用户手机号。使用这种方式快速注册、绑定账号体系。

1. 获取手机号权限。访问 [开发者后台- API 服务 - 授权管理 - 敏感权限](https://developer.huawei.com/consumer/cn/console/api/scopeManage) 申请获取您的手机号权限。等待审核通过后继续下面操作
2. 页面中使用下面按钮获取手机号授权 code。

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

3. 参考 [获取用户级凭证](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/account-api-obtain-user-token-V5) 通过上一步骤的 code 获取 `access_token`
4. 参考 [其他场景获取用户信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/account-api-otherscene-getuserinfo-V5) 接口通过 `access_token` 获取用户手机号。

用户侧第一次使用会有系统控件弹窗申请，同意之后，后续会自动同意。如果撤回同意，或者测试控件效果，需要手机打开 设置-华为账号-账号安全-使用华为账号的应用-删除授权。

用户侧控件效果如下，默认展示手机系统登录的账号，也可以通过管理手机号，手动验证其他手机号。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/153e4b27-07bb-4fb1-aaaf-1685d555abf5.png)

### API 获取网络类型失败、手机震动不等效

需要 `GET_NETWORK_INFO` 和 `vibrate` 权限。具体的鸿蒙元服务权限列表可以参考 [鸿蒙对所有应用开放的权限清单](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/permissions-for-all-V5) 进行查询。按照 **配置权限模版** 章节进行配置。

### 组件 rich-text 渲染空白不展示

已修复。

### 组件 Image 选择本地图片不展示

已知问题，等待元服务修复。目前 `image` 组件不支持本地路径，可临时通过路径字符串展示、或者上传后提供远程 URL 规避。

### 运行报错 `failed to install bundle. code:9568296 error: install failed due to error bundle type`

模拟器或者真机上已经安装了当前 BundleName 的应用。可能是证书复用导致的错误，重新确认当前证书是元服务证书，而不是鸿蒙 App 的证书。

### 运行报错 `hvigor ERROR: SDK component missing. Please verify the integrity of your SDK.`

你可能声明了不兼容的字段，需要在 `harmony-mp-configs/build-profile.json5` 里面去掉 `app.products.*.compileSdkVersion` 属性。

### 运行运行闪退，但是没有报错

一般来说 `harmony-mp-configs/entry/src/main/module.json5` 配置文件有问题，导致运行失败，需要检查配置文件，如果配置文件没有问题，可以尝试删除文件，重新运行一下。

确保 `entry/src/main/module.json5` 文件是使用文档顶部的网络模版下载的。

### 配置的 module.json5 注意事项

文件 `harmony-mp-configs/entry/src/main/module.json5` 会用来配置应用的一些应为，你可以参考 [鸿蒙 module.json5 配置文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/module-configuration-file-V5) 进行学习和参考。

如果你已经在开发鸿蒙 App ，见到 module.json5 会感觉比较熟悉，有几个属性需要特别注意：

- 需要 `module.installationFree` 设置为 true
- 需要设置 `module.srcEntry` `module.metadata` 和 `module.dependencies` 参考上一条问题。

### 鸿蒙元服务的条件编译怎么写？

`MP-HARMONY`，具体参考 [条件编译文档](https://uniapp.dcloud.net.cn/tutorial/platform.html)。

### 运行报错 `Failed to install the HAP or HSP`@failed-to-install-the-hap-or-hsp

参考文档顶部 **开发环境准备** 部分，请确认：

1. 真机是鸿蒙 Next 真机，系统版本是 鸿蒙 5.0+，如果是 Mac M1 系列芯片电脑（ARM 架构）可以申请，[点击链接](#arm-emulator)了解如何申请。
2. 你可能调整过 hvigor 文件，目前普通用户不需要调整。请删除 `harmony-mp-configs/hvigor/hvigor-config.json5` 文件，使用默认的配置文件即可。如果不存在可以忽略。
3. 第一次启动会跳转到应用市场访问应用，有可能会网络超时卡在浏览器页面，重试两次就可以。正式上架后不会出现此问题。出现此问题时，请用鸿蒙 Next 真机，在手机搜索框或手机里的华为应用市场里搜索 uniapp，并点击出现的元服务 helloUniApp，点打开，等待加载完成，然后再关闭，最后在 HBuilderX 重启项目即可。
4. HBuilderX Alpha 4.51 起，内置依赖的 ascf 框架发生了变化，如果仍有问题，可以 IM 群内沟通。

在终端运行 `hdc --version` 观察返回值是否大于 3.x，如果提示 `1.x` 版本可能之前安装过早期版本的鸿蒙相关依赖，需要移除旧依赖。参考 [鸿蒙 HDC 文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/hdc-V5#环境准备) 进行配置。

在终端中运行 `hdc shell bm dump-shared -a` 观察返回值是否包含 `com.huawei.hms.ascfruntime`，如果不包含，请打开应用市场搜索 `helloUniApp` 访问体验一次，然后重试。

### 分包 `The subpackage path name does not meet the requirements`

已修复。参考 [运行报错](#failed-to-install-the-hap-or-hsp) 调整 hvigor 版本号。

### 之后突然报错 `Cannot find module '@atomicservice/ascf-toolkit'`

已修复。参考 [运行报错](#failed-to-install-the-hap-or-hsp) 调整 hvigor 版本号。

### 元服务 ARM 模拟器申请@arm-emulator

基于 ARM 架构 Mac M1 等系列芯片用户，目前可以申请 ARM 模拟器运行和调试鸿蒙元服务。如需申请，请发送邮件向华为运营人员申请。在收到邮件申请后，华为运营人员将在 1-3 个工作日内为你安排对接人员。

详细说明请参考 [其他问题：元服务是否支持模拟器运行](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/faqs-others-simulator-running)

### 我希望自动化来处理元服务的创建、更新和维护@automation-cli

目前华为提供了一个自动化工具，用来自动化处理多个元服务的创建、信息维护和更新操作。详见 [元服务工具使用指导
](https://developer.huawei.com/consumer/cn/doc/app/atomic_tool_usage-0000002081536858#section1861132294011)

### 备案如何获取公钥和签名信息？

备案类问题参考阅读：[APP 备案 FAQ](https://developer.huawei.com/consumer/cn/doc/app/50130)。

补充： Mac 电脑上指纹信息填写 SHA-1 的数值，不要填写 SHA-256。

### 元服务如何调试、遇到渲染白屏了怎么看？@how-to-debug

首先建议缩小问题范围，注释页面相关逻辑，锁定出问题的页面、组件、逻辑，从而针对性的调试。如果希望开启远程调试，可以按照下面方法操作。

阅读官方文档 [使用 DevTools 工具调试前端页面](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/web-debugging-with-devtools-V5)

按照文档操作，简单来说可以分成三个步骤：

1. 确认插入了设备执行 `hdc shell "cat /proc/net/unix | grep devtools"` 记录返回数据尾部的数字部分
2. 转发端口 `hdc fport tcp:9222 localabstract:webview_devtools_remote_[刚才的数字部分]` 返回 OK
3. 打开浏览器 `chrome://inspect/#devices` 观察 Remoet Target 进行调试。

### API uploadFile 报错，其他端正常

观察上传参数里是否有数字类型参数，强转为字符串。

### 元服务构建在 Windows 系统下卡死

有用户反馈在 Windows 平台下运行 DevEco 原生元服务正常，使用 HBuilderX 运行空白工程会卡主无法完成。发现是个别系统安全工具会默认拦截，拦截发生在 DevEco 调用内置的 node 处理编译时候。提示文案：“有程序正在进行可疑操作，建议阻止”。

目前没有好的方案解决，建议始终信任 DevEco 的操作，或者临时退出安全软件。有相关经验也欢迎交流反馈。

### 发行应用时候提示上传失败

- 场景一 `[AppGalleryConnectPublishServicelapp state can not be modified!` 当前应用可能已经在审核中

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