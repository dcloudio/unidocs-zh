# uni-app x 下的 uni 统计使用教程
>
> 注意：当前版本 uni 统计仅支持 uni-app x ,与 uni统计1.0和uni统计2.0 数据不兼容。
>
> uni统计for uni-app x需要单独下载使用，无需在 manifest.json 中配置开关，只需在前端代码中配置即可。
>
> 依赖 `Hbuilder X Alpha版 4.32+`。

## 配置 uni统计后台

与uni统计2.0后台配置一样，只是数据不互通，详情参考 [创建 admin 项目](https://uniapp.dcloud.net.cn/uni-stat-v2.html#%E5%90%8E%E5%8F%B0%E6%8A%A5%E8%A1%A8%E9%85%8D%E7%BD%AE)

## 前端配置

因为当前版本 uni统计是单独的插件，需要在插件市场中下载使用

[下载uni统计](https://ext.dcloud.net.cn/plugin?name=uni-stat)

### 配置说明

#### uniStatistics说明

|字段      | 类型   | 默认值 | 可选值    | 说明                               |
|:-:      |:-:   |:-:  |:-:     |:-:                               |
|debug     | Boolean |false | true/ false |开启统计调试模式 ，会产生大量日志，且会在开发阶段上报数据，应用发布请关闭此项 |
|reportInterval | Number |10   | -      |前端数据上报周期                          |
|collectItems  |Object  |-   | -      |采集项配置                  |

#### collectItems 采集项配置说明

|字段 |类型| 默认值 |可选值 |说明|
|:-:|:-: |:-:    |:-:  |:-:|
|uniPushClientID| Boolean |false| true/false |是否开启推送PushClientID的采集|
|uniStatPageLog| Boolean |true| true/false |是否开启页面数据采集|

### 如何引用

在 main.uts 中 ，通过vue插件的方式加载 uni统计

```js
import App from './App.uvue'
import { createSSRApp } from 'vue'

// 引入uni统计插件
import { uniStat } from '@/uni_modules/uni-stat/plugin.uts'

// uni统计采集项配置
const collectItems = {
 uniStatPageLog: true
}

// uni统计基础配置
const statOptions = {
 debug: true,
 collectItems: collectItems
}

export function createApp() {
 const app = createSSRApp(App)

 // 载入uni统计插件 ，use 第二个参数不能为空，如需使用默认配置，请传入 {}
 app.use(uniStat, statOptions)

 return {
  app
 }
}

```

### 如何使用

因版本限制，uni统计无法自动采集应用相关的数据，如应用启动、进入后台、进入前台等信息，需要用户手动调用 uni.report() 来实现对应的数据采集。

#### 使用示例

```js
<script lang="uts">
 export default {
  onLaunch: function (options) {
   console.log('App Launch')
   uni.report({
    name: 'uni-app-launch',
    options: options,
    success(res) {
     console.log(res);
    }, fail(err) {
     console.log(err);
    }
   })
  },
  onShow: function () {
   console.log('App Show')
   uni.report({
    name: 'uni-app-show',
    success(res) {
     console.log(res);
    }, fail(err) {
     console.log(err);
    }
   })
  },
  onHide: function () {
   console.log('App Hide')
   uni.report({
    name: 'uni-app-hide',
    success(res) {
     console.log(res);
    }, fail(err) {
     console.log(err);
    }
   })
  },
  onError(err : any) {
   console.log('错误');
   uni.report({
    name: 'uni-app-error',
    options: err,
    success(res) {
     console.log(res);
    }, fail(err) {
     console.log(err);
    }
   })
  }
 }
</script>

```

### 影响范围

`uni-app-launch` 是整个统计的入口，会采集应用启动的相关数据会影响的统计数据为：

- 日活
- 新增
- 总设备数

`uni-app-show` 是应用从后台进入前台调用，会影响：

- 日活

`uni-app-hide` 是应用从前台进入后台调用，会影响：

- 页面访问次数

### uni.report(OBJECT) 说明

#### OBJECT参数说明

|参数名  |类型   |必填 |说明                   |
|:-:   |:-:   |:-: |:-:                   |
|name   | String | 是  |事件名称 ，内置名称见下方 **name 内置事件说明** |
|options | Any   | 否  |事件自定义参数               |
|success | Function| 否  |接口调用成功的回调函数            |
|fail   |Function | 否  |接口调用失败的回调函数            |
|complete | Function| 否  |接口调用结束的回调函数（调用成功、失败都会执行） |

#### name 内置事件说明

|事件名     |调用声明周期  |事件说明     |
|:-:      |:-:     |:-:      |
|uni-app-launch | App.onLaunch| 应用启动    |
|uni-app-show  | App.onShow | 应用进入前台  |
|uni-app-hide  | App.onHide | 应用进入后台  |
|uni-app-error | App.onError | 应用发生错误  |
|title     | any     | 内容统计采集标题 |

#### 如何使用自定义上报

```js
// 参数支持字符串
uni.report({
 name:'购买',
 options:'购买成功'
})

// 参数支持对象
uni.report({
 name:'购买',
 options:{
  id:'1000',
  name:'上衣',
  price:'998',
  msg:'购买成功'
  // ...
 }
})

```
