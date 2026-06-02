# uni统计2.0 公有版

`HBuilderX 5.13+` 版本新增 `uni 统计2.0 公有版`，支持全平台业务统计，包括App、H5及各家小程序。

1. 无需在各端接不同的 SDK、无需在不同报表看数据。uni统计：一张报表看遍业务全景。
2. 拉通内容。让你知道用户到底喜欢你提供的什么内容，不管是新闻 App 里的新闻，还是购物 App 里的商品，都可以一目了然地看到全景。

web控制台地址：[https://tongji.dcloud.net.cn](https://tongji.dcloud.net.cn)

::: warning 注意
 原 `uni统计1.0` 已经平滑迁移到 `uni统计2.0 公有版`，数据和功能都得到保留。
:::

## 如何开启统计

打开 `HBuilderX`，在当前项目的 `manifest.json` 中，选择 `uni统计配置`，如下图：
> 默认开启 `uni统计2.0 公有版`，开发者可根据需要选择开启其中一个版本的统计功能，两个版本不可同时开启。

![选择 uni统计](https://web-ext-storage.dcloud.net.cn/stat/kaitong.png)

## 如何关闭统计

如果不使用 `uni统计2.0`，可以在 HBuilderX 的 `manifest.json` 可视化界面中取消勾选 `启用全部平台`，也可在 `manifest.json` 的源码视图中手动关闭：

将 `manifest.json -> uniStatistics`  下的 `enable` 字段设置为 `false` 来关闭 uni 统计

```json
//...
"uniStatistics": {
 "enable": false//全局关闭
},
//...
```

注意：`uniStatistics` 支持分平台设置，若仅需关闭微信平台的 `uni统计2.0`，则在 `mp-weixin` 节点下设置 `uniStatistics -> enable` 即可：

```json
//...
"mp-weixin":{
    "uniStatistics": {
        "enable": false //微信平台关闭统计
    }
}
```

> 如果开启 `uni统计2.0` 需要确保根节点的 `uniStatistics > enable` 是 `true`，当此值为 `false` 时为关闭 `uni统计2.0`。

## 小程序端需添加域名访问白名单

由于各家小程序对可访问的域名要配置白名单，否则无法联网，所以需要将`tongji.dcloud.io`配入服务器域名列表。详细教程可参考[https://ask.dcloud.net.cn/article/36298](https://ask.dcloud.net.cn/article/36298)

## 发行带有 uni统计2.0 公有版的应用

使用 `HBuilderX 5.13` 以上或对应的 `CLI` 版发行应用。

本地开发时，可以勾选 `开启调试` 可查看统计的本地调试日志来确定是否正确上报数据，调试日志中会有 `uni统计2.0 公有版` 的相关日志输出。

> 注意： `uni统计2.0 公有版` 开启调试与否并不影响数据上报，即开启统计就会发生数据上报。

## 如何查看数据

`uni统计2.0 公有版` 报表登录：[https://tongji.dcloud.net.cn](https://tongji.dcloud.net.cn) 查看。

请使用正确的 DCloud 账户登录后台，每个 DCloud 账户登录后可看到自己名下创建的应用。如果看不到期望的应用，则说明这个账户不是某个应用的所有者。

如果 appid 对应的项目的所有者发生变更，请参考[如何转让应用](http://ask.dcloud.net.cn/article/12861)

数据报表更新有延时，手机端上报数据后延迟几十分钟可在后台报表看到数据。

## uni统计2.0 公有版源码视图字段配置

`manifest.json` 可视化对应的源码视图节点，有些配置需要手动增加节点，例：

```json
{
  // ...
  "uniStatistics": {
    "enable": true, //全局开启统计
    "type": "public", //统计版本，默认为公有版
    "debug": false, //是否开启调试模式，调试模式会产生大量日志，发布时请关闭
    "reportInterval": 10, //前端数据上报周期，单位为秒
    "collectItems": { //采集项配置
      "uniPushClientID": false, //是否开启推送PushClientID的采集
      "uniStatPageLog": true //是否开启页面数据采集
    }
  },
  // ...
}
```

> 注意：如无必要，请勿修改 `manifest.json` 中 `uniStatistics` 的字段配置，错误的配置可能导致数据无法上报或上报异常，除非你明确知道，你的修改会影响什么。

### `uniStatistics` 说明

|字段|类型|默认值|可选值|说明|
|:-:|:-:|:-:|:-:|:-:|
|enable|Boolean|false|true，false|全局开启或关闭统计，分平台配置会覆盖当前配置|
|type|String|"public"|"public"，"private"|统计版本，如不填写，默认使用版本 `public`，public:公有版，private：私有版|
|debug|Boolean|false|true，false|开启统计调试模式，会产生大量调试日志，应用发布请关闭此项|
|reportInterval|Number|10|-|前端数据上报周期，单位为秒|
|collectItems|Object|-|-|采集项配置|

### collectItems 采集项配置说明

|字段|类型|默认值|可选值|说明|
|:-:|:-:|:-:|:-:|:-:|
|uniPushClientID|Boolean|false|true/false|是否开启推送`PushClientID`的采集|
|uniStatPageLog|Boolean|true|true/false|是否开启页面数据采集|

### 分平台设置

`uniStatistics` 支持分平台设置，比如仅开启微信小程序平台的 `uni统计`，则在 manifest.json `mp-weixin` 节点下设置 `uniStatistics -> enable` 即可，如下：

```json
{
 //...
 "mp-weixin":{
   "uniStatistics": {
     "enable": true //微信平台开启统计
   }
 }
}
```

**分平台uniStatistics说明**

|字段|类型|默认值|可选值|说明|
|:-:|:-:|:-:|:-:|:-:|
|enable|Boolean|false|true，false|分平台开启或关闭统计，分平台配置会覆盖全局配置，uniStatistics 需在平台配置下|

::: warning 注意

- 在分平台下如有 `uniStatistics -> enable` 字段，则优先使用分平台下配置，反之使用全局统计设置
- 分平台只有 `enable` 属性，其他配置继承全局设置

:::

--------------------------

## 常见问题排查

### 1. 发行时为什么提示“当前应用未配置Appid，无法使用uni统计”

`uni统计`以appid区分不同应用，因此在编译项目时，若发现当前应用未配置appid，则会在控制台显示如下警告提醒：

```base
当前应用未配置Appid，无法使用 uni统计
```

此时，开发者可通过HBuilderX、[DCloud开发者中心](https://dev.dcloud.net.cn)两个入口创建应用，获取Appid。

**方式1. 登录 HBuilderX 获取**

在 HBuilderX 中先登录，然后在项目根目录打开 `manifest.json`，在可视化界面点击「获取 APPID」即可，无需其他设置，如下图

![获取appid](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/appid.png)

**方式2. 登录 DCloud 开发者中心获取（即将支持）**

登录 [DCloud 开发者中心](https://dev.dcloud.net.cn)，在线创建应用，然后将新应用的 appid 填写到 manifest.json 中

```javascript
{
  // ...
  "appid":"创建的 appid"
  // ...
}
```

**Tips：**

- 使用 uni 统计必须配置 `APPID` 才能正常使用。本地开发环境未配置 `APPID` 时仍可能上报，但数据会被视为无效；发行时不配置 `APPID` 则无法上报数据。
- 获取或创建的 `APPID` 与您的 DCloud 账号绑定，请不要随意填写，否则将不能正常获取上报内容。
- 部分开发者不重视 Appid，在不同应用中使用相同的 appid，请修正这些错误的行为。
- uni 统计具备当日实时数据统计功能，虽然是实时，但仍需经历一定运算时间，一般在 3 分钟到 1 个小时不等。
- 相关参考：[DCloud 的 Appid 有什么用，如需转让应用怎么做](https://ask.dcloud.net.cn/article/35907)

### 2. 后台数据一直显示 0，看不到数据上报

- 请检查 `manifest.json` 是否配置 uni 统计为开启
- 如已经配置请检查 `HBuilderX` 是否升级到 `5.13` 版本以上，`CLI` 方式是否升级到最新。
- 请确认小程序的服务器域名名单中加入了`tongji.dcloud.io`
- 请确认带有 uni 统计的新版本已经发布到手机上并且启动运行
- 统计数据有几十分钟的延迟，如果是刚配置好，请等一会再刷新报表

### 3. 自定义事件怎么用

 使用 `uni.report()` API 上报数据，详见[自定义事件说明](https://ask.dcloud.net.cn/article/36304)

### 4. 内容统计是什么 / 页面规则怎么配置

 内容统计是uni统计的特色功能之一，是内容详情页的访问统计，详见[内容统计说明](https://ask.dcloud.net.cn/article/36299)

### 5. 不支持导入老数据合并统计。uni统计需要自开通上线后才有数据

### 6. 售卖用户数据，或未经用户同意共享数据给第三方，属于违法行为，DCloud严格遵守国家法律要求，uni统计可安心使用
