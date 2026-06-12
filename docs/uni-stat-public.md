# uni统计2.0

`uni统计2.0`是DCloud提供的官方统计服务，具备**免费、全端覆盖、开箱即用**的特点。

开发者开启`uni统计2.0`后，可在[uni统计控制台](https://tongji.dcloud.net.cn)查看 App、小程序、Web 等全平台的新增、活跃、留存、渠道等数据。

`uni统计2.0`默认为saas服务，同时也支持私有化部署。私有化部署时，需自己购买uniCloud服务空间，将前端打点数据保存在开发者自己的uniCloud云数据库中，通过云函数的定时任务进行跑批统计，[详见](uni-stat-private.md)。

::: warning 注意
老版 `uni统计1.0` 已平滑升级到 `uni统计2.0 公有版`，历史数据与功能均保留。请使用原 DCloud 账号登录 [统计控制台](https://tongji.dcloud.net.cn) 查看。
:::

## 产品特色

**全端一张报表**

无需在各端接入不同 SDK、无需在多个报表间切换。iOS、Android、H5 及各家小程序的运营数据汇总到同一份报表，新增、活跃、留存、渠道等关键指标一站查看。

**增长与渠道分析**

从拉新、留存到渠道推广效果，帮助观察用户从首次访问到后续留存的全链路表现；各渠道带来的用户质量也可更直观地对比。

**内容统计**

支持新闻、商品、帖子等内容详情页的访问统计，了解用户真正关注的内容（详见 [内容统计](uni-stat-content.md)）。

**实时统计**

支持当日实时数据观察（受后台运算影响，完整指标通常需数分钟至约 1 小时生效），便于在活动投放期间及时发现问题与机会。

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

### 小程序 request 合法域名

各家小程序对网络请求有域名白名单限制。uni统计2.0 公有版上报域名为 **`tongji-collector.dcloud.net.cn`**（与早期文档中的 `tongji.dcloud.io` 不同，请勿混用）。

| 平台 | 公有版是否需配置 | 说明 |
|:-:|:-:|:-:|
| **微信小程序** | **否** | 公有版无需配置 request 合法域名，开箱即用 |
| **支付宝小程序** | **是** | 须在开放平台「服务器域名白名单」中添加 `tongji-collector.dcloud.net.cn` |
| **其他小程序**（百度、抖音、QQ 等） | **是** | 须将 `tongji-collector.dcloud.net.cn` 加入 request 合法域名白名单 |

#### 微信小程序

公有版**无需**在 [微信公众平台](https://mp.weixin.qq.com/) 配置 request 合法域名。开启统计并重新编译运行后，可在开发者工具 Console 查看 `[uni统计 2.0]` 日志确认上报是否正常。


#### 支付宝小程序

1. 登录 [支付宝开放平台](https://open.alipay.com/)，进入小程序 **详情页**
2. 打开 **开发 → 开发设置 → 服务器域名白名单**
3. 在 HTTP 请求域名中新增 `tongji-collector.dcloud.net.cn` 并保存
4. 重新编译并发行小程序；低版本支付宝客户端须发版后新配置才生效

本地调试可在支付宝开发者工具 **详情 → 域名信息** 中临时勾选「忽略 HTTP 请求域名合法性检查」；**正式发布前必须完成开放平台白名单配置**。

配置完成后，Console 出现 `[uni统计 2.0] 上报成功` 即表示链路正常；若出现 `无可用上报线路`，请核对域名拼写与是否已重新发行。

### App 隐私合规

  uni统计2.0 会在应用运行期间采集应用启动、页面访问等运行数据，以及由 DCloud 引擎生成的虚拟统计标识（非真实设备硬件信息），用于统计分析。完整说明见 《[uni统计隐私政](https://dcloud.net.cn/license/uni-stat.html)》

  `Android / iOS /Harmony App` 上架应用市场前，须由开发者自行完成隐私合规配置，主要包括：

  1. 在应用首次启动时弹出隐私政策提示框，取得用户同意后再初始化数据上报。Android 平台参见 [隐私政策提示框配置](tutorial/app-privacy-android.md)；iOS 平台须按应用市场要求自行实现隐私政策弹窗。
  2. 在应用《隐私政策》中告知集成了 uni 统计服务，可参考如下条款：

  > 本产品集成了 DCloud uni统计服务，用于统计分析应用运营数据，采集范围包括应用启动、页面访问等行为数据及 DCloud引擎生成的虚拟统计标识（不含真实设备硬件信息）。详情见《[uni统计隐私政策](https://dcloud.net.cn/license/uni-stat.html)》。

### 发行与调试

使用 `HBuilderX 5.13` 及以上版本，或对应版本的 `CLI` 发行应用。

#### 开启调试

在可视化界面勾选 **开启调试**，或将 `uniStatistics.debug` 设为 `true`。**修改后须重新编译并运行**才会生效。

> **注意**：调试模式仅影响日志输出，**不影响是否上报**；只要统计已开启，即会发生数据上报。正式发布前请将 `debug` 设为 `false` 并重新发行。

#### 查看日志

运行时日志均以 **`[uni统计 2.0]`** 为前缀：

|运行方式|查看位置|
|:-:|:-:|
|H5|浏览器开发者工具 → Console|
|小程序|对应开发者工具 → 调试器 → Console|
|App 模拟器|HBuilderX 控制台|
|App 真机|HBuilderX 真机运行日志|

真机上日志常合并为一行文本，其中的 JSON 需复制到格式化工具查看。编译输出窗口中的「已开启 uni统计 2.0」等提示属于**构建阶段**信息，业务调试日志在**应用运行时**的控制台。

#### 日志类型

|类型|是否依赖 `debug`|说明|
|:-:|:-:|:-:|
|过程日志|是|采集、上报、续传等正常运行信息|
|告警日志（`console.warn`）|否|上报失败、网络异常等，异常时即输出|

排查时**先看告警，再用 debug 过程日志还原完整链路**。

#### 正常运行流程

开启 `debug: true` 并重新运行后，一次完整流程大致为：

```text
应用启动 → 启动摘要（仅一次）→ 数据采集 → 准备上报 → 上报成功/失败
```

**启动摘要**示例（应用启动后仅一条）：

```text
[uni统计 2.0] === uni统计 2.0 已启用 ===
上报间隔: 10s | 应用APPID: __UNI__XXXXXX | 应用名: 我的应用 | Vue3
```

若完全没有启动摘要，统计可能未接入（`enable` 关闭、缺少 appid、未重新编译等）。摘要中 `应用APPID` 显示 `<未注入>` 时，后台无法正确归属数据。

**数据采集**每次事件固定三段：`=== 统计数据采集：xxx ===` → 完整字段 JSON → `=== 采集结束 ===`。

|lt|动作名|一般何时产生|
|:-:|:-:|:-:|
|`1`|应用启动|冷启动、后台超时回前台|
|`3`|应用进入后台|切后台、关闭小程序|
|`11`|页面切换|路由变化|
|`21`|事件触发|`uni.report()` 或登录/支付等内置拦截|
|`31`|应用错误|全局 `onError` 捕获的异常|
|`101`|PUSH 设备标识|开启 `collectItems.uniPushClientID` 时|

**上报结果**有三种：`上报成功`、`上报失败`（看下一行「原因」）、`上报完成`（部分成功部分失败）。临时失败会暂存重试队列，**下次冷启动**自动续传；不可恢复时本批数据丢弃。

#### 常见告警

|告警关键字|常见原因|
|:-:|:-:|
|`无可用上报线路`|网络不可用；其他小程序检查 request 合法域名|
|`统计上报失败（已暂存，下次启动自动重试）`|临时网络错误，下次启动自动续传|
|`统计上报失败（本批已丢弃，不可重试）`|服务端拒绝或数据非法|

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
|enable|Boolean|true|true，false|全局开启或关闭统计；分平台 `enable` 覆盖本项|
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
- 其他小程序（非微信）**request 合法域名** 是否已配置 `tongji-collector.dcloud.net.cn`（微信小程序公有版无需配置）。
- 是否已将带统计的新版本安装到真机并启动运行。
- 是否已等待足够时间（统计常有数十分钟延迟，刚配置完请稍后再刷新报表）。

### 开了 debug 但控制台没有 `[uni统计 2.0]` 日志

请确认 `uniStatistics.enable` 为 `true`、已配置有效 `appid`（正式环境必须）、修改 `debug` 后已**重新编译运行**；并确认查看的是**应用运行时控制台**，而非仅看编译输出。可对照上文 [发行与调试](#发行与调试) 中的快速验证步骤逐项排查。

### 客户端「上报成功」但后台看不到数据

后台非实时，稍等再查；核对启动摘要中的 **应用APPID** 与统计控制台应用一致；确认登录的是对应 DCloud 账号。

### 自定义事件怎么用

使用 [`uni.report()`](api/other/report.md) 上报自定义事件，详见 [自定义事件说明](api/other/report.md)。

### 内容统计是什么 / 页面规则怎么配置

内容统计用于内容详情页（新闻、商品等）的访问分析，需配置页面规则并按需采集标题，详见 [内容统计](uni-stat-content.md)。

### 是否支持导入历史数据

不支持将其他统计平台或老版本数据导入合并。`uni统计` 自开通并上线后才开始积累数据。
