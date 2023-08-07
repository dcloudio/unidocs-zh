<!-- #### vue2 项目迁移 vue3，必须适配的部分 -->

以下列举迁移到 vue3，必须适配的几个点，vue2 项目才能正常运行在 vue3 上。更多查看完整的[非兼容特性列表](https://github.com/vuejs/vue-next/tree/master/packages/vue-compat#incompatible)

## main.js

创建应用实例

::: preview

> Vue2

```JS
// 之前 - Vue 2
import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false    // vue3 不再需要
App.mpType = 'app'    // vue3 不再需要
const app = new Vue({
...App
})
app.$mount()
```

> Vue3

```JS
import App from './App'
import { createSSRApp } from 'vue'
// 不能修改导出的 createApp 方法名，不能修改从 Vue 中导入的 createSSRApp。
export function createApp() {
  const app = createSSRApp(App)
  return {
      app
  }
}
```

:::

## 环境变量

::: preview

> Vue2

```JS
// 配置环境变量
// 根目录.env文件 必须 VUE_APP_ 开头
VUE_APP_SOME_KEY = 123

// 获取环境变量
process.env.NODE_ENV         // 应用运行的模式
process.env.VUE_APP_SOME_KEY // 123
```

> Vue3

```JS
// 配置环境变量
// 根目录.env文件 必须 VITE_ 开头
VITE_SOME_KEY = 123

// 获取环境变量
process.env.NODE_ENV          // 应用运行的模式
import.meta.env.VITE_SOME_KEY // 123
```

:::

**Tips**
- Vue2 更多 [设置环境变量方式](https://uniapp.dcloud.net.cn/tutorial/env.html#env)
- Vue3 非H5端，应直接访问 process.env.* 获取环境变量，不支持访问 process


## 全局属性

例如：全局网络请求

```js
// 之前 - Vue 2
Vue.prototype.$http = () => {};

// 之后 - Vue 3
const app = createApp({});
app.config.globalProperties.$http = () => {};
```

## 插件使用

例如：使用 vuex 的 store

```js
// 之前 - Vue 2
import store from "./store";
Vue.prototype.$store = store;

// 之后 - Vue 3
import store from "./store";
const app = createApp(App);
app.use(store);
```

## 项目根目录必需创建 index.html 文件

粘贴复制如下内容：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    />
    <title></title>
    <!--preload-links-->
    <!--app-context-->
  </head>
  <body>
    <div id="app"><!--app-html--></div>
    <script type="module" src="/main.js"></script>
  </body>
</html>
```

## 只支持使用 ES6 模块规范

commonJS 需改为 ES6 模块规范

### 模块导入

```js
// 之前 - Vue 2, 使用 commonJS
var utils = require("../../../common/util.js");

// 之后 - Vue 3， 只支持 ES6 模块
import utils from "../../../common/util.js";
```

### 模块导出

```js
// 之前 - Vue 2, 依赖如使用 commonJS 方式导出
module.exports.X = X;

// 之后 - Vue 3， 只支持 ES6 模块
export default { X };
```

## vuex 用法

::: preview

> Vue2

```js
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {},
});
export default store;
```

> Vue3

```js
import { createStore } from "vuex";
const store = createStore({
  state: {},
});
export default store;
```

:::

## 避免在同一元素上同时使用 v-if 与 v-for

而 Vue3 中，v-if 总是优先于 v-for 生效。以上写法将会在 Vue3 中与预期不符合，由于语法上存在歧义，建议避免在同一元素上同时使用两者（[更多](https://v3.cn.vuejs.org/guide/migration/v-if-v-for.html#%E6%A6%82%E8%A7%88)）。

## 生命周期的适配

在 Vue3 中组件卸载的生命周期被重新命名

- `destroyed` 修改为 `unmounted`
- `beforeDestroy` 修改为 `beforeUnmount`

::: warning created 和 onLoad 生命周期执行顺序
created为组件生命周期，onLoad为页面生命周期。因此created执行先于onLoad更合理。

Vue3 在实现时 created 先于 onLoad 执行；Vue2 项目由于历史包袱较重不便修改，仅在使用组合式API时与Vue3对齐。

在编写代码时不应依赖 created 和 onLoad 生命周期执行顺序
:::

## 事件的适配

Vue3 现在提供了一个`emits`选项，类似于现有`props`选项。此选项可用于定义组件可以向其父对象发出的事件， [更多](https://v3.cn.vuejs.org/guide/migration/emits-option.html#overview)

**强烈建议使用`emits`记录每个组件发出的所有事件。**

这一点特别重要，因为去除了`.native`修饰符。`emits` 现在在未使用声明的事件的所有侦听器都将包含在组件的中`$attrs`，默认情况下，该侦听器将绑定到组件的根节点。

```html
<template>
  <button @click="onClick">OK</button>
</template>
<script>
  export default {
    emits: ["click"],
    methods: {
      onClick() {
        this.$emit("click", "OK");
      },
    },
  };
</script>
```

### Vue3 项目部分小程序端事件延迟或调用失败
可在执行事件的元素上添加 `data-eventsync="true"` 属性以解决此问题，如：
```html
<template>
  <button @click="onClick" data-eventsync="true">OK</button>
</template>
```

## v-model 的适配

Vue3 的 v-model 相对 Vue2 来说 ，有了较大的改变。可以使用多 `model`,相应语法也有变化。[更多](https://v3.cn.vuejs.org/guide/migration/v-model.html#%E6%A6%82%E8%A7%88)

### 修改 modelValue

用于自定义组件时，Vue3 v-model prop 和事件默认名称已更改 `props.value` 修改为 `props.modelValue` ,`event.value` 修改为 `update:modelValue`

```javascript
export default {
  props: {
    // value:String,
    // 替换 value 为 modelValue
    modelValue: String,
  },
};
```

## 事件返回

将之前的 `this.$emit('input')` 修改为 `this.$emit('update:modelValue')` ，vue3 中将省略这一步骤

自定义组件上的 v-model 相当于传递了 modelValue prop 并接收抛出的 update:modelValue 事件：

```html
<ChildComponent v-model="pageTitle" />

<!-- 是以下的简写: -->

<ChildComponent
  :modelValue="pageTitle"
  @update:modelValue="pageTitle = $event"
/>
```

若需要更改 model 名称，作为组件内 model 选项的替代，现在我们可以将一个 argument 传递给 v-model：

```html
<ChildComponent v-model:title="pageTitle" />

<!-- 是以下的简写: -->

<ChildComponent :title="pageTitle" @update:title="pageTitle = $event" />
```

## 插槽的适配

Vue3 将不支持 `slot="xxx"` 的用法 ，请使用 `v-slot:xxx` 用法。[更多](https://v3.cn.vuejs.org/guide/component-slots.html#%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD)

::: preview

> Vue2

```html
<!--  Vue2 支持的用法 -->
<uni-nav-bar>
  <view slot="left" class="city">
    <!-- ... -->
  </view>
</uni-nav-bar>
```

> Vue3

```html
<!--  Vue3 支持的用法 -->
<uni-nav-bar>
  <template v-slot:left>
    <view class="city">
      <!-- ... -->
    </view>
  </template>
</uni-nav-bar>
```

:::

## 不再支持过滤器

从 Vue 3.0 开始，过滤器已删除，不再支持，建议用方法调用或计算属性替换它们。[更多](https://v3.cn.vuejs.org/guide/migration/filters.html#%E6%A6%82%E8%A7%88)

## API `Promise 化` 调用结果的方式

在 Vue3 中，处理 API `Promise 化` 调用结果的方式不同于 Vue2。[更多](https://uniapp.dcloud.io/api/#api-promise-化)

- Vue3 中，调用成功会进入 then 方法，调用失败会进入 catch 方法
- Vue2 中，调用无论成功还是失败，都会进入 then 方法，返回数据的第一个参数是错误对象，第二个参数是返回数据

### 转换方法

::: preview

> Vue2

```js
// Vue 2 转 Vue 3, 在 main.js 中写入以下代码即可
function isPromise(obj) {
  return (
    !!obj &&
    (typeof obj === "object" || typeof obj === "function") &&
    typeof obj.then === "function"
  );
}

uni.addInterceptor({
  returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise((resolve, reject) => {
      res.then((res) => {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  },
});
```

> Vue3

```js
// Vue 3 转 Vue 2, 在 main.js 中写入以下代码即可
function isPromise(obj) {
  return (
    !!obj &&
    (typeof obj === "object" || typeof obj === "function") &&
    typeof obj.then === "function"
  );
}

uni.addInterceptor({
  returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    const returnValue = [undefined, undefined];
    return res
      .then((res) => {
        returnValue[1] = res;
      })
      .catch((err) => {
        returnValue[0] = err;
      })
      .then(() => returnValue);
  },
});
```

:::

## 生命周期钩子的组合式 API 使用方式

在 Vue3 组合式 API 中，也需要遵循 uni-app 生命周期钩子规范, 如 onLaunch 等应用生命周期仅可在 App.vue 中监听，使用中请注意生命周期钩子的适用范围。[查看全部生命周期钩子](https://uniapp.dcloud.net.cn/collocation/frame/lifecycle)

只能在 `<script setup>` 单文件语法糖或 `setup()` 方法中使用生命周期钩子，以 A 页面跳转 B 页面传递参数为例：

::: preview

> 方法一

```js
// 从 A 页面跳转 B 页面时传递参数 ?id=1&name=uniapp，xxx 为跳转的页面路径
//uni.navigateTo({
//  url: 'xxx?id=1&name=uniapp'
//})

// 方法一：在 B 页面 <script setup> 中
<script setup>
  import {
    onLoad,
    onShow
  } from "@dcloudio/uni-app";

  // onLoad 接受 A 页面传递的参数
  onLoad((option) => {
    console.log("B 页面 onLoad:", option); //B 页面 onLoad: {id: '1', name: 'uniapp'}
  });

  onShow(() => {
    console.log("B 页面 onShow");
  });
</script>
```

> 方法二

```js
// 方法二：在 B 页面 setup() 中
<script>
  import {
    onLoad,
    onShow,
  } from "@dcloudio/uni-app";

  export default {
    setup() {
      // onLoad 接受 A 页面传递的参数
      onLoad((option) => {
        console.log("B 页面 onLoad:", option); //B 页面 onLoad: {id: '1', name: 'uniapp'}
      });

      onShow(() => {
        console.log("B 页面 onShow");
      });
    }
  }
</script>
```

:::

## `$mp` 调整为 `$scope`

在 Vue3 中，this 对象下的 `$mp` 调整为 `$scope`

## 在 nvue 使用 Vuex

在 Vue3 中，如果 nvue 使用了 Vuex 的相关 API，需要在 main.js 的 createApp 的返回值中 return 一下 Vuex 示例：

  ```js
  import Vuex from "vuex";
  export function createApp() {
    const app = createSSRApp(App);
    app.use(store);
    return {
      app,
      Vuex, // 如果 nvue 使用 vuex 的各种map工具方法时，必须 return Vuex
    };
  }
  ```

## 需主动开启 sourcemap

App，小程序端源码调试，需要在 vite.config.js 中主动开启 sourcemap

  ```js
  import { defineConfig } from "vite";
  import uni from "@dcloudio/vite-plugin-uni";

  /**
   * @type {import('vite').UserConfig}
   */

  export default defineConfig({
    build: {
      sourcemap: true,
    },

    plugins: [uni()],
  });
  ```

## 小程序平台

### 监听原生的点击事件

在 vue3 的小程序平台中，监听原生的点击事件可以先使用 tap。
在 vue3 中，移除了.native 修饰符，所以编译器无法预知 click 是要触发原生事件，还是组件的自定义事件，故并未转换成小程序的 tap 事件。

### style

vue3 出于性能考虑，style 中暂不支持 div、p 等 HTML 标签选择器，推荐使用 class 选择器，[template 中的 HTML 标签仍会进行转换](https://uniapp.dcloud.net.cn/vernacular.html#%E7%BB%84%E4%BB%B6-%E6%A0%87%E7%AD%BE%E7%9A%84%E5%8F%98%E5%8C%96)。

### 真机调试

- vue3 微信开发者工具真机调试页面空白，如[帖子](https://ask.dcloud.net.cn/question/162915)
- vue3 微信小程序真机调试，如[帖子](https://ask.dcloud.net.cn/question/173162)

均可以通过在 manifest.json 的 `mp-weixin` 中配置 `minified` 为 `true` 来解决

```json
{
  "mp-weixin": {
    "setting": {
      // ...其他配置
      "minified": true
    }
  }
}
```

## vue3 支持的手机版本最低到多少？

  > vue3 支持的范围是：Android > 4.4（具体因系统 webview 版本而异，原生安卓系统升级过系统 webview 一般 5.0 即可，国产安卓系统未使用 x5 内核时一般需 7.0 以上）, ios >= 10

  > Android < 4.4，配置 X5 内核支持，首次需要联网下载，可以配置下载 X5 内核成功后启动应用，[详情](https://uniapp.dcloud.net.cn/collocation/manifest.html#appwebview)


## vue3 nvue 暂不支持 recycle-list 组件

vue3 nvue 暂不支持 recycle-list 组件

## h5 平台发行时，会默认启动摇树

vue3 在 h5 平台发行时，为了优化包体积大小，会默认启动摇树，仅打包明确使用的 api，
如果要关闭摇树，可以在 manifest.json 中配置：

```json
"h5": {
    "optimization": {
        "treeShaking": {
            "enable": false
        }
    }
}
```

## 通过 props 来获取页面参数@url-search-params

vue3 全平台新增：通过 props 来获取页面参数的使用方式

<!--方式1-->

```html
<script setup>
  // 页面可以通过定义 props 来直接接收 url 传入的参数
  // 如：uni.navigateTo({ url: '/pages/index/index?id=10' })
  const props = defineProps({
    id: String,
  });
  console.log("id=" + props.id); // id=10
</script>
```

<!--方式2-->

```html
<script>
  // 页面可以通过定义 props 来直接接收 url 传入的参数
  // 如：uni.navigateTo({ url: '/pages/index/index?id=10' })
  export default {
    props: {
      id: {
        type: String,
      },
    },
    setup(props) {
      console.log("id=" + props.id); // id=10
    },
  };
</script>
```

## 小程序和App端不支持插值方式定义国际化@vue-i18n

因运行平台限制，目前在小程序和 App 端不支持插值方式定义国际化,需要使用 Messages Functions 定义国际化信息，[参考文档](https://vue-i18n.intlify.dev/guide/advanced/function.html)

示例：

```js
const messages = {
  en: {
    greeting: ({ named }) => `hello, ${named('name')}!`
  }
}
```
