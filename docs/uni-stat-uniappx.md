# uni-app x 下的 uni 统计使用教程
>
> 注意：当前版本 uni 统计仅支持 uni-app x ,与 uni统计1.0和uni统计2.0 数据不兼容。
>
> uni统计for uni-app x需要单独下载使用，无需在 manifest.json 中配置开关，只需在前端代码中配置即可。
>
> 依赖 `Hbuilder X Alpha版 4.33+`。

## 配置 uni统计后台

与uni统计2.0后台配置一样，只是数据不互通，详情参考 [创建 admin 项目](https://uniapp.dcloud.net.cn/uni-stat-v2.html#%E5%90%8E%E5%8F%B0%E6%8A%A5%E8%A1%A8%E9%85%8D%E7%BD%AE)

## 前端配置

因为当前版本 `uni统计`是单独的插件，需要在插件市场中下载使用

[下载uni统计](https://ext.dcloud.net.cn/plugin?name=uni-stat)

### 配置说明

#### uniStatistics说明

|字段      | 类型   | 默认值     | 说明                               |
|:-:      |:-:   |:-:      |:-:                               |
|debug     | Boolean |false  |开启统计调试模式 ，会产生大量日志，且会在开发阶段上报数据，应用发布请关闭此项 |
|reportInterval | Number |10        |前端数据上报周期 （单位秒）                    |
|collectItems  |Object  |-       |采集项配置          |

#### collectItems 采集项配置说明

|字段 |类型| 默认值  |说明|
|:-:|:-: |:-:     |:-:|
|uniPushClientID| Boolean |false |是否开启推送PushClientID的采集。**需注意：开启PUSH采集，在APP上需要初始化个推SDK，涉及隐私政策的问题。**|
|uniStatPageLog| Boolean |true |是否开启页面数据采集，如不关心页面数据且需要节省函数调用量的用户，可关闭此项。|

### 如何引用

在 `main.uts` 中 ，通过vue插件的方式加载 `uni统计`

```js
import App from './App.uvue'
import { createSSRApp } from 'vue'

// 引入uni统计插件
import { uniStat } from '@/uni_modules/uni-stat/plugin.uts'

// uni统计采集项配置
const uniStatcollectItems = {
 uniStatPageLog: true
}

// uni统计基础配置
const uniStatOptions = {
 debug: true,
 collectItems: uniStatcollectItems
}

export function createApp() {
 const app = createSSRApp(App)

 // 载入uni统计插件 ，use 第二个参数不能为空，如需使用默认配置，请传入 {}
 app.use(uniStat, uniStatOptions)

 return {
  app
 }
}

```

### 如何使用

因版本限制，uni统计无法自动采集应用相关的数据，如应用启动、进入后台、进入前台等信息，需要用户手动调用 [uni.report()](https://doc.dcloud.net.cn/uni-app-x/api/report) 来实现对应的数据采集。

#### 使用示例

**示例页面：`App.nvue`**

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

### uni.report(OBJECT) 
`uni.report` 参考[使用文档](https://doc.dcloud.net.cn/uni-app-x/api/report)

