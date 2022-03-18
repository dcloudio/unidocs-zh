`main.js`是 uni-app 的入口文件，主要作用是初始化`vue`实例、定义全局组件、使用需要的插件如 vuex。

首先引入了`Vue`库和`App.vue`，创建了一个`vue`实例，并且挂载`vue`实例。

::: preview

> Vue2

```js
import Vue from 'vue'
import App from './App'
import pageHead from './components/page-head.vue' //全局引用 page-head 组件

Vue.config.productionTip = false
Vue.component('page-head', pageHead) //全局注册 page-head 组件，每个页面将可以直接使用该组件
App.mpType = 'app'

const app = new Vue({
...App
})
app.$mount() //挂载 Vue 实例

```

> Vue3

```JS
import App from './App'
import { createSSRApp } from 'vue'
export function createApp() {
    const app = createSSRApp(App)
    return {
        app
    }
}
```

:::

使用`Vue.use`引用插件，使用`Vue.prototype`添加全局变量，使用`Vue.component`注册全局组件。

可以引用`vuex`，因涉及多个文件，此处没有提供示例，详见`hello uni-app`示例工程。

无法使用`vue-router`，路由须在`pages.json`中进行配置。如果开发者坚持使用`vue-router`，可以在[插件市场](https://ext.dcloud.net.cn/search?q=vue-router)找到转换插件。


**注意**
- nvue 暂不支持在 main.js 注册全局组件
