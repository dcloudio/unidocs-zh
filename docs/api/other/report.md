::: warning 注意 
推荐使用 [uni统计2.0](https://uniapp.dcloud.io/uni-stat-v2.html)
:::
## 统计

从uni-app 2.2.3起，支持uni统计。一张报表，掌握全端数据。业务介绍详见[https://tongji.dcloud.net.cn](https://tongji.dcloud.net.cn)

自定义事件是统计中不可或缺的功能。开发者可通过本API自定义上报统计数据，如统计登录、注册、点击某个按钮，我们都可以称之为自定义事件。

### uni.report( eventKey , param)

**参数说明**

|参数|类型|描述|
|---|---|---|
|eventKey|String|事件名称，最大长度不超过 255 个字符|
|param|String 、 Object	|事件参数|

::: tip 提示
- eventKey 为 String 类型，并且字符长度必须小于255 
- param 为 String 类型时，字符长度必须小于255 
- param 为 Object 类型时，该对象的值只能为 String 类型 
- 字符串支持特殊字符但不包括（英文逗号 , 英文冒号 : 点 .）
- eventKey 为 `title` 时为内容标题上报，用户不能自定义。此时数据会展现在uni统计的首页-内容统计及左侧导航的内容统计中。方便查看内容页数据。
- 用户在使用 `uni.login()` 会执行登录事件，不携带参数。如果如需上报携带具体参数的数据，需要手动调用 `uni.report('login',{...})`
- 用户在使用 `uni.share()` 或触发 `onShareAppMessage` 会执行分享事件，不携带参数。如果如需上报携带具体参数的数据，需要手动调用 `uni.report('share',{...})`
- 用户在使用 `uni.requestPayment()` 会执行支付事件，不携带参数。如果如需上报携带具体参数的数据，需要手动调用 `uni.report('pay_success',{...})` 和 `uni.report('pay_fail',{...})`

:::

**示例**

```javascript
// 内容统计
// 当 eventKey 为 title 时，param 只能为 String 类型
uni.report('title','首页')

// 登录
uni.report('login',{
  'name':'uni-app',
  'age':'21',
  // ...
})

// 分享
uni.report('share','分享')

// 支付成功
uni.report('pay_success','支付成功')
// or
uni.report('pay_success',{
  "订单金额":'20元',
  "订单名称":'鼠标',
  // ...
})

// 支付失败
uni.report('pay_fail','支付失败')
// or
uni.report('pay_fail',{
  "订单金额":'20元',
  "订单名称":'鼠标',
  // ...
})

// 注册
uni.report('register',{
  'name':'uni-app',
  'age':'21',
  // ...
})

// 搜索
uni.report('search','搜索内容')
// or
uni.report('search',{
  '内容':'搜索内容'
})

```

自定义事件上报后：
- 统计1.0在统计后台的`事件和转换`栏目中，可以看到上报的事件情况。
- 统计2.0在uni-admin后台的`uni 统计 --> 自定义事件`栏目中，可以看到上报的事件情况。

::: tip 提示
- 小程序平台，需将`tongji.dcloud.net.cn`配入域名白名单，[详见](https://ask.dcloud.net.cn/article/36298)
- uni统计使用教程：[uni统计2.0](https://uniapp.dcloud.io/uni-stat-v2.html)、[uni统计1.0](https://uniapp.dcloud.io/uni-stat-v1.html)
:::

### 支持 uni.report 的 uni-ui 组件
`uni-ui` 中内置了一些数据采集相关的组件,用户使用这些组件，并设置属性 `stat:true`，即可在使用相关组件时，自动上报相关自定义数据 

- [uni-nav-bar](https://ext.dcloud.net.cn/plugin?name=uni-nav-bar)
- [uni-title](https://ext.dcloud.net.cn/plugin?name=uni-title)
- [uni-group](https://ext.dcloud.net.cn/plugin?name=uni-group)
- [uni-goods-nav](https://ext.dcloud.net.cn/plugin?name=uni-goods-nav)

### 非官方自定义统计
除了官方的uni统计，如果开发者还需要调用小程序平台的自定义统计，给小程序的后台上报数据，那么需使用条件编译，在各端调用此自己的API。

#### 微信小程序平台：
- 数据上报：[wx.reportMonitor](https://developers.weixin.qq.com/minigame/dev/api/data-analysis/wx.reportMonitor.html)
- 数据分析：[wx.reportAnalytics](https://developers.weixin.qq.com/miniprogram/dev/api/data-analysis/wx.reportAnalytics.html)

#### 支付宝小程序平台：
- 自定义分析数据的上报接口：[my.reportAnalytics](https://docs.alipay.com/mini/api/report)

#### 百度小程序平台：
- 数据分析：[swan.reportAnalytics](https://smartprogram.baidu.com/docs/develop/api/data/#swan-reportAnalytics/)

#### 字节跳动小程序平台：
- [reportAnalytics](https://developer.open-douyin.com/docs/resource/zh-CN/mini-game/develop/open-capacity/data-analysis/tt-report-analytics/)

#### QQ小程序平台：
- 数据上报：[qq.reportMonitor](https://q.qq.com/wiki/develop/miniprogram/API/open_port/port_dataup.html)
- 数据分析：[qq.reportAnalytics](https://q.qq.com/wiki/develop/miniprogram/API/open_port/port_dataanalysis.html#qq-reportanalytics)

#### App平台的友盟统计：
- 友盟统计：[开发规范](http://www.html5plus.org/doc/zh_cn/statistic.html)，[配置文档](https://ask.dcloud.net.cn/article/74)
