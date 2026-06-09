::: warning 注意
推荐使用 [uni统计2.0](uni-stat.md)。开启方式见 [公有版](uni-stat-public.md) 或 [私有版](uni-stat-v2.md)。
:::

# uni.report

`uni.report` 用于向 uni 统计上报**自定义事件**，例如按钮点击、搜索关键词、下单、注册等业务行为。一张报表即可汇总 App、H5、各家小程序的全端数据，业务介绍详见 [统计控制台](https://tongji.dcloud.net.cn)。

使用前请在 `manifest.json` 中开启 `uniStatistics.enable`，并**重新编译运行**。公有版与私有版调用方式相同，无需额外 import。

## uni.report(eventKey, param)

```javascript
uni.report(eventKey, param)
```

|参数|类型|必填|说明|
|:-:|:-:|:-:|:-:|
|eventKey|String|是|事件名称；特殊值 `title` 用于上报内容页标题，见下文 [内容标题上报](#内容标题上报)|
|param|String、Object|否|事件附加信息，可省略|

### param 传参说明

|传入方式|效果|
|:-:|:-:|
|不传|仅记录事件名，无附加信息|
|字符串|原样记录为事件说明|
|对象|转为 JSON 字符串记录，适合携带多个字段（推荐）|
|数字等其它类型|会转为字符串记录（公有版）|

统计会自动附带设备、网络、会话等基础信息，业务侧无需额外处理。

## 使用示例

### 基础埋点

```javascript
// 只记录事件名
uni.report('button_click')

// 带文字说明
uni.report('banner_click', 'home_top')

// 带结构化数据（推荐）
uni.report('purchase', {
  sku: 'a001',
  amount: '9.9',
  channel: 'wxpay'
})
```

对象参数在后台以 JSON 字符串形式展示，需要时可自行解析字段。

### 命名建议

|建议|示例|
|:-:|:-:|
|小写 + 下划线|`add_cart`、`order_submit`|
|动词 + 对象|`click_banner`、`view_product`|
|避免与内置事件重名|不要用 `login`、`share`、`pay_success`、`pay_fail`（见下文 [内置事件](#内置事件无需重复上报)）|

### 在页面中调用

```javascript
export default {
  onLoad() {
    uni.report('page_enter', { page: 'goods_detail' })
  },
  methods: {
    onBuyClick() {
      uni.report('buy_click', { goodsId: this.goodsId })
    }
  }
}
```

```vue
<script setup>
function handleShare() {
  uni.report('share_click', { from: 'detail_footer' })
}
</script>
```

### 电商场景示例

```javascript
// 商品曝光
uni.report('goods_expose', { goodsId: '1001', list: 'home_recommend' })

// 加入购物车
uni.report('add_cart', { goodsId: '1001', count: 2 })

// 提交订单
uni.report('order_submit', {
  orderId: 'O20260101001',
  amount: '199.0',
  payType: 'wxpay'
})
```

## 内置事件（无需重复上报）

以下用户操作已由统计**自动记录**，请勿再手动上报同名事件，否则数据会重复：

|用户操作|自动记录的事件名|
|:-:|:-:|
|调用 `uni.login()`|`login`|
|调用 `uni.share()` 或触发 `onShareAppMessage`|`share`|
|`uni.requestPayment()` 成功|`pay_success`|
|`uni.requestPayment()` 失败|`pay_fail`|

若需在上述行为中附带业务参数（如登录渠道、订单金额），可**额外**手动调用同名事件并传入 `param`：

```javascript
uni.report('login', { channel: 'weixin' })
uni.report('pay_success', { orderId: 'O001', amount: '99' })
```

## 不能通过 uni.report 上报的数据

应用启动、页面切换、切到后台、运行错误等由统计**自动采集**，没有对应的 `uni.report` 写法，请在后台的「启动」「页面」「错误」等模块查看，不要用自定义事件模拟。

## 内容标题上报

当 `eventKey` 为 `title` 时，用于上报**内容页标题**，不属于自定义事件，不会产生一条新的埋点记录：

```javascript
// param 必须为字符串
uni.report('title', '限时秒杀专区')
```

适用场景：页面标题由接口动态下发，未调用 `uni.setNavigationBarTitle()`，但仍希望在内容统计报表中看到可读的名称。完整说明见 [内容统计](uni-stat-content.md#页面标题采集)。

页面标题可能来自以下来源（可同时存在）：

|来源|说明|
|:-:|:-:|
|`pages.json` 导航栏标题|原生导航栏配置的 `navigationBarTitleText`|
|`uni.setNavigationBarTitle()`|代码动态设置的导航栏标题|
|`uni.report('title', ...)`|手动上报的内容标题|
|统计后台手动修改|后台直接编辑的展示标题|

多种来源并存时，报表按以下优先级展示：`后台手动修改 > uni.report('title') > uni.setNavigationBarTitle > pages.json 导航栏标题`。

## 参数规范

### 私有版

参数不符合要求时，控制台会提示错误，**本次调用不会上报**：

|规则|说明|
|:-:|:-:|
|事件名必填|不能为空|
|事件名类型|必须是字符串|
|事件名长度|不超过 255 个字符|
|事件值类型|只能是字符串或对象（`title` 时只能是字符串）|
|字符串事件值长度|不超过 255 个字符|

### 公有版

|规则|说明|
|:-:|:-:|
|参数校验|相对宽松，建议仍按私有版规范书写|
|单条数据大小|建议控制在 **4KB** 以内，过大可能被忽略|
|页面路径|不会自动附带当前页面路径；如需按页面分析，请在 `param` 中自行传入|

```javascript
uni.report('buy_click', {
  page: 'pages/goods/detail',
  goodsId: '123'
})
```

## 上报时机

自定义事件不会每次调用都立刻发送到服务器，默认会**合并后定时发送**。可在 `manifest.json` 中配置上报间隔：

```json
{
  "uniStatistics": {
    "reportInterval": 10
  }
}
```

|配置值|含义|
|:-:|:-:|
|`10`（默认）|约每 10 秒合并发送一次|
|`0`|每次调用后尽快发送（建议仅调试时使用）|

以下情况会**尽快发送**已缓存的数据：

- 应用切到后台
- 产生新的应用会话（如长时间后台后再次打开）

调试时若调用后暂时看不到日志，可等待一个上报间隔，或将应用切到后台再切回前台。

## 开发调试

**私有版**：本地开发且未开启 `debug` 时，`uni.report` 可能不生效。可开启 `uniStatistics.debug: true` 后重新编译，或使用正式运行 / 发行包验证。

**公有版**：开启统计后一般可直接使用。建议开发阶段打开调试：

```json
{
  "uniStatistics": {
    "enable": true,
    "debug": true
  }
}
```

控制台出现 `[uni统计 2.0]` 前缀的日志，即表示调用已被统计模块接收。更多调试说明见 [公有版发行与调试](uni-stat-public.md#发行与调试)。

### 调试自检

1. 调用 `uni.report('test_event', { time: Date.now() })`
2. 开启 `debug: true` 时，控制台应能看到自定义事件相关日志
3. 等待上报间隔或切到后台后，应能看到上报成功相关日志
4. 稍后在统计后台查看自定义事件是否出现

## 在后台查看

上报成功后，可在统计后台查看自定义事件数据：

|版本|查看位置|
|:-:|:-:|
|uni统计2.0 公有版|[统计控制台](https://tongji.dcloud.net.cn) → 自定义事件|
|uni统计2.0 私有版|uni-admin → uni 统计 → 自定义事件|

数据存在聚合延时，上报后通常需等待数十分钟再刷新报表。

## 常见问题

**Q：调用了 `uni.report` 但没有数据？**

A：确认 `manifest.json` 中已开启 `uniStatistics.enable`，且修改后已重新编译运行。私有版在本地开发时，需将 `debug` 设为 `true` 后重新编译，或使用正式运行 / 发行包验证。

**Q：调试时控制台有记录，但统计后台迟迟看不到数据？**

A：自定义事件默认按 `reportInterval` 合并发送，请等待一个上报周期，或将应用切到后台再切回前台以触发尽快发送。同时检查设备网络是否正常。

**Q：微信小程序上报无数据？**

A：uni统计2.0 公有版在微信小程序**无需**配置 request 合法域名。若使用其他小程序平台，须将 `tongji-collector.dcloud.net.cn` 加入 request 合法域名，详见 [公有版域名说明](uni-stat-public.md#小程序-request-合法域名)。

**Q：私有版调用后控制台报错？**

A：对照上文 [参数规范](#参数规范) 检查 `eventKey` 与 `param` 的类型、长度是否符合要求。参数不合法时本次调用不会上报。

**Q：公有版个别自定义事件在后台缺失？**

A：检查 `param` 单条数据是否超过约 4KB，过大可能被忽略。建议传入精简的对象，避免携带过长字符串或大段 JSON。

**Q：后台看不到事件对应的页面信息？**

A：公有版不会自动附带当前页面路径。如需按页面分析，请在 `param` 中自行传入 `page` 等字段，或结合统计后台的页面统计模块查看。

**Q：自定义事件与 login、share 等数据重复？**

A：`uni.login`、`uni.share`、`uni.requestPayment` 等行为已由统计自动记录，请勿再手动上报同名事件。若需附带业务参数，可在自动记录之外额外调用并传入 `param`。

## 支持 uni.report 的 uni-ui 组件

`uni-ui` 中部分组件内置了数据采集能力。设置属性 `stat: true` 后，使用组件时会自动上报相关数据：

- [uni-nav-bar](https://ext.dcloud.net.cn/plugin?name=uni-nav-bar)
- [uni-title](https://ext.dcloud.net.cn/plugin?name=uni-title)
- [uni-group](https://ext.dcloud.net.cn/plugin?name=uni-group)
- [uni-goods-nav](https://ext.dcloud.net.cn/plugin?name=uni-goods-nav)

## 各平台自定义统计

除 uni 统计外，若还需向各小程序平台自有后台上报数据，请使用条件编译，在对应端调用平台 API：

### 微信小程序

- 数据上报：[wx.reportMonitor](https://developers.weixin.qq.com/minigame/dev/api/data-analysis/wx.reportMonitor.html)
- 数据分析：[wx.reportAnalytics](https://developers.weixin.qq.com/miniprogram/dev/api/data-analysis/wx.reportAnalytics.html)

### 支付宝小程序

- 自定义分析数据上报：[my.reportAnalytics](https://docs.alipay.com/mini/api/report)

### 百度小程序

- 数据分析：[swan.reportAnalytics](https://smartprogram.baidu.com/docs/develop/api/data/#swan-reportAnalytics/)

### 抖音小程序

- [reportAnalytics](https://developer.open-douyin.com/docs/resource/zh-CN/mini-game/develop/open-capacity/data-analysis/tt-report-analytics/)

### QQ 小程序

- 数据上报：[qq.reportMonitor](https://q.qq.com/wiki/develop/miniprogram/API/open_port/port_dataup.html)
- 数据分析：[qq.reportAnalytics](https://q.qq.com/wiki/develop/miniprogram/API/open_port/port_dataanalysis.html#qq-reportanalytics)

### App 友盟统计

- 友盟统计：[开发规范](http://www.html5plus.org/doc/zh_cn/statistic.html)、[配置文档](https://ask.dcloud.net.cn/article/74)
