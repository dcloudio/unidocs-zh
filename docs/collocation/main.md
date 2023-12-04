# main.js/main.uts

`main.js/uts`是 uni-app 的入口文件。uni-app js引擎版是`main.js`，而uni-app x则是`main.uts`。以下一般用`main.js`泛指全部。

`main.js`主要作用是初始化`vue`实例、定义全局组件、使用需要的插件如 i18n、vuex。

首先引入了`Vue`库和`App.vue`，创建了一个`vue`实例，并且挂载`vue`实例。
::: preview
> uni-app（Vue2）

```js
import Vue from 'vue'
import App from './App'
import PageHead from './components/page-head.vue' //全局引用 page-head 组件

Vue.config.productionTip = false
Vue.component('page-head', PageHead) //全局注册 page-head 组件，每个页面将可以直接使用该组件
App.mpType = 'app'

const app = new Vue({
...App
})
app.$mount() //挂载 Vue 实例

```

> uni-app（Vue3）

```js
import App from './App'
import { createSSRApp } from 'vue'
import PageHead from './components/page-head.vue' //全局引用 page-head 组件

export function createApp() {
    const app = createSSRApp(App)
    app.component('page-head', PageHead) //全局注册 page-head 组件，每个页面将可以直接使用该组件

    return {
        app
    }
}
```

> uni-app x（main.uts）

```ts
import App from './App'
import { createSSRApp } from 'vue'
import PageHead from './components/page-head.vue' //全局引用 page-head 组件

export function createApp() {
  const app = createSSRApp(App)
  app.component('page-head', PageHead) //全局注册 page-head 组件，每个页面将可以直接使用该组件

  return {
    app
  }
}
```
:::

一般情况下，使用easycom比全局组件更常用，easycom按需应用更节省资源。

## 代码时序

开发者写的代码，在应用启动时，按如下时序加载：
1. main.js/uts 的 `export function createApp() {}` 外的代码、任何页面/组件的script中`export default {}`外的代码
2. main.js/uts 的 `export function createApp() {}` 中的代码
3. app.vue/uvue中onLaunch的代码
4. 首页的onLoad
5. 首页的onReady

开发者需谨慎在main.js/uts、页面/组件script中`export default {}`外、和onLaunch中编写代码：
1. 这些的代码都会影响启动速度（定义type不会，type是使用时才加载）
2. 执行太早，很多功能和API无法使用，需trycatch。尤其是与界面相关的都无法使用，此时首页都还没有创建。
3. main.js/uts、页面script中`export default {}`外的代码，其创建的变量在应用存活时一直占据着内存，不会跟随页面关闭而回收


## 插件

使用`Vue.use`引用插件，使用`Vue.prototype`添加全局变量，使用`Vue.component`注册全局组件。

可以引用`vuex`，因涉及多个文件，此处没有提供示例，详见`hello uni-app`示例工程。

无法使用`vue-router`，路由须在`pages.json`中进行配置。如果开发者坚持使用`vue-router`，可以在[插件市场](https://ext.dcloud.net.cn/search?q=vue-router)找到转换插件。


**注意**
- nvue 暂不支持在 main.js 注册全局组件
- uni-app x 暂不支持 i18n、vuex、pinia等插件
