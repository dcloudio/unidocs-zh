# uni统计2.0 公有版

`uni统计2.0 公有版`（SaaS 模式）由 DCloud 提供云端统计服务：**免费、全端覆盖、开箱即用**。在 `manifest.json` 中开启并发行后，即可在统计控制台查看 App、小程序、Web 等全端的新增、活跃、留存、渠道等数据。

统计控制台：[https://tongji.dcloud.net.cn](https://tongji.dcloud.net.cn)

> 需要数据完全自控、部署在自己 uniCloud 服务空间的团队，请使用 [uni统计2.0 私有版](uni-stat-v2.md)。

::: warning 注意
老版 `uni统计1.0` 已平滑升级到 `uni统计2.0 公有版`，历史数据与功能均保留。请使用原 DCloud 账号登录 [统计控制台](https://tongji.dcloud.net.cn) 查看。
:::

## 产品特色

**全端一张报表**

无需在各端接入不同 SDK、无需在多个报表间切换。iOS、Android、H5 及各家小程序的运营数据汇总到同一份报表，新增、活跃、留存、渠道等关键指标一站查看。

**增长与渠道分析**

从拉新、留存到渠道推广效果，帮助观察用户从首次访问到后续留存的全链路表现；各渠道带来的用户质量也可更直观地对比。

**内容统计**

支持新闻、商品、帖子等内容详情页的访问统计，了解用户真正关注的内容（详见 [内容统计说明](https://ask.dcloud.net.cn/article/36299)）。

**实时统计**

支持当日实时数据观察（受后台运算影响，完整指标通常需数分钟至约 1 小时生效），便于在活动投放期间及时发现问题与机会。

**合规与隐私**

统计数据由 DCloud 依法托管；DCloud 严格遵守国家法律法规，不会售卖用户数据。售卖或未经用户同意向第三方共享用户数据属于违法行为。

## 公有版与私有版

两种部署方式可按需选择，**同一项目不可同时开启公有版与私有版**。

|对比项|公有版（SaaS，本文档）|私有版|
|:-:|:-:|:-:|
|部署位置|DCloud 中央统计服务|开发者自有 uniCloud 服务空间|
|费用|免费使用|需购买 uniCloud 服务空间|
|使用方式|登录控制台即可，无需部署后台|需部署 [uni-admin](https://doc.dcloud.net.cn/uniCloud/admin) 等云端模块|
|数据控制|由 DCloud 托管|数据与云函数均在开发者服务空间|
|适用场景|绝大多数开发者|[uni统计2.0 私有版](uni-stat-v2.md) 适合有数据自主权需求的团队|

## 环境要求

- 客户端：仅支持 **uni-app** 项目（`HBuilderX 5.13+` 或对应 `CLI` 版本）。
- 开启方式：在业务项目的 `manifest.json` 中配置 `uniStatistics`，`type` 为 `"public"`（公有版，默认值）。
- 控制台：使用 DCloud 账号登录 [https://tongji.dcloud.net.cn](https://tongji.dcloud.net.cn)。

## 使用教程

### 开启统计

在 `HBuilderX` 中打开项目的 `manifest.json`，进入 **uni统计配置**，勾选启用 **uni统计2.0 公有版**：

> 开发者可在「公有版」与「私有版」中择一开启，**两个版本不可同时开启**。`HBuilderX 5.13+` 新建项目默认开启公有版。

![选择 uni统计](https://web-ext-storage.dcloud.net.cn/stat/kaitong.png)

可视化配置对应源码中的 `uniStatistics` 节点，核心字段为 `enable: true` 与 `type: "public"`（见下文 [manifest 配置](#manifest-配置)）。

### 关闭统计

在 `manifest.json` 可视化界面取消勾选 **启用全部平台**，或在源码视图中将根节点 `uniStatistics.enable` 设为 `false`：

```json
// ...
"uniStatistics": {
  "enable": false // 全局关闭
},
// ...
```

**分平台关闭示例**（仅关闭微信小程序）：

```json
// ...
"mp-weixin": {
  "uniStatistics": {
    "enable": false // 微信平台关闭统计
  }
}
// ...
```

> 开启 `uni统计2.0 公有版` 时，根节点 `uniStatistics.enable` 须为 `true`；设为 `false` 则全局关闭统计。分平台下的 `enable` 会覆盖全局配置。


#### 小程序 request 合法域名

各家小程序须将可访问域名加入白名单，否则无法联网上报。发布小程序时，请在各厂商后台的 **request 合法域名** 中配置：

- `tongji-collector.dcloud.net.cn`

配置步骤详见：[小程序统计域名白名单配置](https://ask.dcloud.net.cn/article/36298)

### 发行与调试

使用 `HBuilderX 5.13` 及以上版本，或对应版本的 `CLI` 发行应用。

本地开发时可勾选 **开启调试**，在控制台查看 `uni统计2.0 公有版` 相关日志，确认采集与上报是否正常。

> **注意**：调试模式仅影响日志输出，**不影响是否上报**；只要统计已开启，即会发生数据上报。正式发布前请将 `debug` 设为 `false`。

### 查看报表

使用 DCloud 账号登录统计控制台：[https://tongji.dcloud.net.cn](https://tongji.dcloud.net.cn)

- 登录后可查看该账号下创建的应用报表。
- 若看不到期望的应用，说明当前账号不是该应用的所有者；应用归属变更可参考 [如何转让应用](http://ask.dcloud.net.cn/article/12861)。
- 报表存在聚合延时，端上上报后通常需等待数十分钟才能在控制台看到完整数据。

## manifest 配置

除可视化界面外，可在 `manifest.json` 源码视图中直接编辑 `uniStatistics`。完整示例：

```json
{
  // ...
  "uniStatistics": {
    "enable": true, // 全局开启统计
    "type": "public", // 统计版本：public 公有版，private 私有版
    "debug": false, // 调试模式，发布时请关闭
    "reportInterval": 10, // 前端数据上报周期，单位：秒
    "collectItems": {
      "uniPushClientID": false, // 是否采集推送 PushClientID
      "uniStatPageLog": true // 是否采集页面数据
    }
  }
  // ...
}
```

> **注意**：如无必要请勿修改 `uniStatistics` 字段。错误配置可能导致无法上报或数据异常；修改前请确认影响范围。

### uniStatistics 字段说明

|字段|类型|默认值|可选值|说明|
|:-:|:-:|:-:|:-:|:-:|
|enable|Boolean|false|true，false|全局开启或关闭统计；分平台 `enable` 覆盖本项|
|type|String|"public"|"public"，"private"|`public`：公有版（SaaS）；`private`：私有版。未填写时默认为公有版|
|debug|Boolean|false|true，false|调试模式，会产生大量日志，应用发布请关闭|
|reportInterval|Number|10|-|前端数据上报周期，单位：秒（与公有版 SDK 默认一致）|
|collectItems|Object|-|-|采集项配置|

### collectItems 采集项说明

|字段|类型|默认值|可选值|说明|
|:-:|:-:|:-:|:-:|:-:|
|uniPushClientID|Boolean|false|true/false|是否采集推送 `PushClientID`|
|uniStatPageLog|Boolean|true|true/false|是否采集页面数据|

### 分平台设置

仅在某平台开启统计时，在对应平台节点下配置 `uniStatistics` 即可，例如仅开启微信小程序：

```json
{
  // ...
  "mp-weixin": {
    "uniStatistics": {
      "enable": true // 微信平台开启统计
    }
  }
  // ...
}
```

**分平台字段说明**

|字段|类型|默认值|可选值|说明|
|:-:|:-:|:-:|:-:|:-:|
|enable|Boolean|false|true，false|分平台开启或关闭；覆盖全局 `enable`|

::: warning 注意

- 分平台节点存在 `uniStatistics.enable` 时，优先使用分平台配置，否则继承全局设置。
- 分平台仅支持 `enable` 字段，`type`、`debug`、`reportInterval`、`collectItems` 等继承全局配置。

:::

## 常见问题

### 发行时提示「当前应用未配置 Appid，无法使用 uni统计」

`uni统计` 以 **appid** 区分应用。若编译时控制台出现：

```base
当前应用未配置Appid，无法使用 uni统计
```

可通过以下方式获取 appid 并写入 `manifest.json`：

**方式一：在 HBuilderX 中获取**

登录 HBuilderX 后，打开项目根目录 `manifest.json`，在可视化界面点击「获取 APPID」：

![获取 appid](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/appid.png)

**方式二：在 DCloud 开发者中心创建**

登录 [DCloud 开发者中心](https://dev.dcloud.net.cn) 在线创建应用，将 appid 填入 `manifest.json`：

```json
{
  // ...
  "appid": "创建的 appid"
  // ...
}
```

**说明**

- 使用 uni 统计须配置有效 `APPID`。本地未配置时可能仍有上报，但数据无效；**发行**未配置则无法上报。
- `APPID` 与 DCloud 账号绑定，请勿随意填写。
- 不同应用请勿共用同一 appid。
- 相关参考：[DCloud 的 Appid 有什么用，如需转让应用怎么做](https://ask.dcloud.net.cn/article/35907)

### 后台数据一直为 0，看不到上报

请依次排查：

- `manifest.json` 中 `uniStatistics.enable` 是否为 `true`，`type` 是否为 `"public"`（或未填写、默认为公有版）。
- `HBuilderX` 是否为 `5.13+`，`CLI` 是否为对应新版本。
- 小程序 **request 合法域名** 是否已配置 `tongji-collector.dcloud.net.cn`。
- 是否已将带统计的新版本安装到真机并启动运行。
- 是否已等待足够时间（统计常有数十分钟延迟，刚配置完请稍后再刷新报表）。

### 自定义事件怎么用

使用 [`uni.report()`](https://uniapp.dcloud.net.cn/api/other/report.html) 上报自定义事件，详见 [自定义事件说明](https://ask.dcloud.net.cn/article/36304)。

### 内容统计是什么 / 页面规则怎么配置

内容统计用于内容详情页（新闻、商品等）的访问分析，详见 [内容统计说明](https://ask.dcloud.net.cn/article/36299)。

### 是否支持导入历史数据

不支持将其他统计平台或老版本数据导入合并。`uni统计` 自开通并上线后才开始积累数据。

### 数据安全与合规

售卖用户数据，或未经用户同意向第三方共享用户数据，属于违法行为。DCloud 严格遵守国家法律要求，开发者可放心使用 `uni统计2.0 公有版` 提供的合规统计服务。
