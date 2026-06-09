# uni统计2.0

**uni统计** 是 DCloud 为 uni-app 打造的统计平台：全端采集、一张报表汇总 App / H5 / 各家小程序数据，覆盖新增、活跃、留存、渠道、页面、内容、错误等分析能力。

`uni统计2.0` 在 1.0 基础上拆分为两种部署方式，请按业务需求选择（**同一项目不可同时开启公有版与私有版**）：

| 对比项 | [uni统计2.0 公有版](uni-stat-public.md) | [uni统计2.0 私有版](uni-stat-v2.md) |
| :-: | :-: | :-: |
| 部署 | DCloud 中央统计服务（SaaS） | 开发者自有 uniCloud 服务空间 |
| 后台 | 登录 [统计控制台](https://tongji.dcloud.net.cn) 即可 | 部署 [uni-admin](https://doc.dcloud.net.cn/uniCloud/admin) 查看报表 |
| 费用 | 免费使用 | 需 uniCloud 服务空间（按量计费） |
| 数据 | 由 DCloud 依法托管 | 云函数与数据在自有空间，可开源定制 |
| 适用 | **绝大多数开发者**（推荐默认） | 需数据自主权、报表与跑批可二次开发 |

::: tip 如何选型？

- **只想快速看数、不想部署后台** → [uni统计2.0 公有版](uni-stat-public.md)（`HBuilderX 5.13+`，`manifest` 中 `type: "public"`）
- **数据必须落在自己 uniCloud、可改报表与跑批** → [uni统计2.0 私有版](uni-stat-v2.md)（`type: "private"` 或 `version: "2"`）
- **仍在使用 1.0** → 建议升级；1.0 用户可平滑迁移至 [公有版](uni-stat-public.md)，历史数据保留

:::

## 文档导航

### uni统计2.0 公有版

免费、全端、开箱即用。在 `manifest.json` 开启并发行后，使用 DCloud 账号登录控制台查看报表。

- 文档：[公有版](uni-stat-public.md)
- 控制台：[https://tongji.dcloud.net.cn](https://tongji.dcloud.net.cn)

### uni统计2.0 私有版

开源、可定制。前端采集内置于 uni-app，报表与定时跑批通过 uni-admin 部署在与业务 App **相同**的 uniCloud 服务空间。

- 文档：[私有版](uni-stat-v2.md)
- 体验后台：[https://hellouniadmin.dcloud.net.cn/](https://hellouniadmin.dcloud.net.cn/)（内置 uni 统计，数据定期重置）
- 技术交流群：[uni统计2.0 技术交流群](https://im.dcloud.net.cn/#/?joinGroup=663b1aacea24b10030b08f16)

### 其他版本

| 版本 | 说明 |
| :-: | :-: |
| uni统计1.0 | 已停止维护，建议升级 2.0 |
| uni-app x 统计 | 独立插件，与 1.0 / 2.0 **数据不互通** |

## 核心能力（2.0 共通）

无论公有版或私有版，客户端均面向 **uni-app** 全端统计，主要能力包括：

- **全端一张报表**：无需各端分别接 SDK、分别看报表
- **设备 / 页面 / 内容 / 渠道**：新增、活跃、留存、跳出率等（内容详情页统计见 [内容统计](uni-stat-content.md)）
- **错误与崩溃**：JS 错误、App 原生崩溃（私有版支持 [sourceMap 解析](uni-stat-v2.md#sourcemap-parse-error)）
- **自定义事件**：通过 [`uni.report()`](https://uniapp.dcloud.net.cn/api/other/report.html) 扩展打点
- **注册用户统计**（私有版 + uni-id）：基于账户的新增、活跃、留存（需业务与 admin 关联同一服务空间）

## 从 uni统计1.0 升级

`uni统计1.0` 不再更新。升级路径建议：

1. **沿用中央控制台、免部署** → [uni统计2.0 公有版](uni-stat-public.md)，原账号登录 [tongji.dcloud.net.cn](https://tongji.dcloud.net.cn) 可查看历史数据。
2. **需要私有部署与开源定制** → [uni统计2.0 私有版](uni-stat-v2.md)，在自有 uniCloud 部署 uni-admin。

与 1.0 的能力差异（以私有版为例）：

| 功能 | uni统计1.0 | uni统计2.0 私有版 |
| :-: | :-: | :-: |
| 是否开源 | 否 | 是 |
| 部署方式 | 中央部署 | 私有部署（自有 uniCloud） |
| 定制 | 不可定制 | 可自由定制 |
| uni-id 用户统计 | 不含 | 默认支持 |
| 错误分析 | 较低 | 较高（含 sourceMap 等） |

## 环境要求（摘要）

| 项目 | 公有版 | 私有版 |
| :-: | :-: | :-: |
| 客户端 | uni-app，`HBuilderX 5.13+` 或对应 CLI | uni-app |
| 云端 | 无需自建，使用 DCloud 统计服务 | uniCloud + uni-admin |

详细配置、域名白名单、常见问题请进入对应版本文档。
