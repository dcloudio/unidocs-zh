<!-- #### vue2 项目迁移 vue3，必须适配的部分 -->
<!-- #### vue2 project migration vue3, the part that must be adapted -->

以下列举迁移到 vue3，必须适配的几个点，vue2 项目才能正常运行在 vue3 上。更多查看完整的[非兼容特性列表](https://github.com/vuejs/vue-next/tree/master/packages/vue-compat#incompatible)
The following are the points that must be adapted for migration to vue3, so that the vue2 project can run normally on vue3. For more inlistation, see the complete [List of non-compatible features](https://github.com/vuejs/vue-next/tree/master/packages/vue-compat#incompatible)

## main.js

创建应用实例
Create an application instance

::: preview

> Vue2

```JS
// 之前 - Vue 2
// Nomae - Vue 2
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
// Cannot modify the exported createApp method name, and cannot modify the createSSRApp imported from Vue.
export function createApp() {
  const app = createSSRApp(App)
  return {
      app
  }
}
```

:::

## 环境变量
## Environment variables

::: preview

> Vue2

```JS
// 配置环境变量
// Configure environment variables
// 根目录.env文件 必须 VUE_APP_ 开头
// Root directory .env file must start with VUE_APP_
VUE_APP_SOME_KEY = 123

// 获取环境变量
// Get environment variables
process.env.NODE_ENV         // 应用运行的模式
process.env.VUE_APP_SOME_KEY // 123
```

> Vue3

```JS
// 配置环境变量
// Configure environment variables
// 根目录.env文件 必须 VITE_ 开头
// Root directory .env file must start with VITE_
VITE_SOME_KEY = 123

// 获取环境变量
// Get environment variables
process.env.NODE_ENV          // 应用运行的模式
import.meta.env.VITE_SOME_KEY // 123
```

:::

**Tips**
- Vue2 更多 [设置环境变量方式](https://uniapp.dcloud.net.cn/tutorial/env.html#env)
- Vue2 more [How to set environment variables](https://uniapp.dcloud.net.cn/tutorial/env.html#env)
- Vue3 非H5端，应直接访问 process.env.* 获取环境变量，不支持访问 process
- Vue3 non-H5 end, should directly access process.env.* to obtain environment variables, does not support access to process


## 全局属性
## global properties

例如：全局网络请求
For example: global network request

```js
// 之前 - Vue 2
// Nomae - Vue 2
Vue.prototype.$http = () => {};

// 之后 - Vue 3
// after - Vue 3
const app = createApp({});
app.config.globalProperties.$http = () => {};
```

## 插件使用
## plugin usage

例如：使用 vuex 的 store
For example: store using vuex

```js
// 之前 - Vue 2
// Nomae - Vue 2
import store from "./store";
Vue.prototype.$store = store;

// 之后 - Vue 3
// after - Vue 3
import store from "./store";
const app = createApp(App);
app.use(store);
```

## 项目根目录必需创建 index.html 文件
## The project root directory must create an index.html file

粘贴复制如下内容：
Paste and copy the following:

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
## Only supports using ES6 module specification

commonJS 需改为 ES6 模块规范
commonJS needs to be changed to ES6 module specification

### 模块导入
### module import

```js
// 之前 - Vue 2, 使用 commonJS
// Before - Vue 2, using commonJS
var utils = require("../../../common/util.js");

// 之后 - Vue 3， 只支持 ES6 模块
// After - Vue 3, only supports ES6 modules
import utils from "../../../common/util.js";
```

### 模块导出
### module export

```js
// 之前 - Vue 2, 依赖如使用 commonJS 方式导出
// Before - Vue 2, dependencies are exported using commonJS
module.exports.X = X;

// 之后 - Vue 3， 只支持 ES6 模块
// After - Vue 3, only supports ES6 modules
export default { X };
```

## vuex 用法
## vuex usage

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
## Avoid using both v-if and v-for on the same element

而 Vue3 中，v-if 总是优先于 v-for 生效。以上写法将会在 Vue3 中与预期不符合，由于语法上存在歧义，建议避免在同一元素上同时使用两者（[更多](https://v3.cn.vuejs.org/guide/migration/v-if-v-for.html#%E6%A6%82%E8%A7%88)）。
In Vue3, v-if always takes precedence over v-for. The above writing method will not meet expectations in Vue3. Due to ambiguity in syntax, it is recommended to avoid using both on the same element at the same time ([more](https://v3.cn.vuejs.org/guide/migration/ v-if-v-for.html#%E6%A6%82%E8%A7%88)).

## 生命周期的适配
## Life cycle adaptation

在 Vue3 中组件卸载的生命周期被重新命名
Component unload lifecycle is renamed in Vue3

- `destroyed` 修改为 `unmounted`
- `destroyed` changed to `unmounted`
- `beforeDestroy` 修改为 `beforeUnmount`
- `beforeDestroy` changed to `beforeUnmount`

## 事件的适配
## Event adaptation

Vue3 现在提供了一个`emits`选项，类似于现有`props`选项。此选项可用于定义组件可以向其父对象发出的事件， [更多](https://v3.cn.vuejs.org/guide/migration/emits-option.html#overview)
Vue3 now provides an `emits` option, similar to the existing `props` option. This option can be used to define events that a component can emit to its parent, [more](https://v3.cn.vuejs.org/guide/migration/emits-option.html#overview)

**强烈建议使用`emits`记录每个组件发出的所有事件。**
**It is strongly recommended to use `emits` to log all events emitted by each component. **

这一点特别重要，因为去除了`.native`修饰符。`emits` 现在在未使用声明的事件的所有侦听器都将包含在组件的中`$attrs`，默认情况下，该侦听器将绑定到组件的根节点。
This is especially important because the `.native` modifier is removed. `emits` will now be included in the component's `$attrs` when not using any listeners for declared events, which by default will be bound to the component's root node.

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
### Some MiniApp terminal events of Vue3 project are delayed or failed to call
可在执行事件的元素上添加 `data-eventsync="true"` 属性以解决此问题，如：
This can be resolved by adding the `data-eventsync="true"` attribute on the element that executes the event, such as:
```html
<template>
  <button @click="onClick" data-eventsync="true">OK</button>
</template>
```

## v-model 的适配
## v-model adaptation

Vue3 的 v-model 相对 Vue2 来说 ，有了较大的改变。可以使用多 `model`,相应语法也有变化。[更多](https://v3.cn.vuejs.org/guide/migration/v-model.html#%E6%A6%82%E8%A7%88)
Compared with Vue2, the v-model of Vue3 has undergone major changes. Multiple `model` can be used, and the corresponding syntax changes. [More](https://v3.cn.vuejs.org/guide/migration/v-model.html#%E6%A6%82%E8%A7%88)

### 修改 modelValue
### Modify modelValue

用于自定义组件时，Vue3 v-model prop 和事件默认名称已更改 `props.value` 修改为 `props.modelValue` ,`event.value` 修改为 `update:modelValue`
Vue3 v-model prop and event default names have been changed when used for custom components `props.value` to `props.modelValue` , `event.value` to `update:modelValue`

```javascript
export default {
  props: {
    // value:String,
    // 替换 value 为 modelValue
    // replace value with modelValue
    modelValue: String,
  },
};
```

## 事件返回
## event return

将之前的 `this.$emit('input')` 修改为 `this.$emit('update:modelValue')` ，vue3 中将省略这一步骤
Change the previous `this.$emit('input')` to `this.$emit('update:modelValue')` , this step will be omitted in vue3

自定义组件上的 v-model 相当于传递了 modelValue prop 并接收抛出的 update:modelValue 事件：
A v-model on a custom component is equivalent to passing the modelValue prop and receiving the thrown update:modelValue event:

```html
<ChildComponent v-model="pageTitle" />

<!-- 是以下的简写: -->
<!-- is shorthand for: -->

<ChildComponent
  :modelValue="pageTitle"
  @update:modelValue="pageTitle = $event"
/>
```

若需要更改 model 名称，作为组件内 model 选项的替代，现在我们可以将一个 argument 传递给 v-model：
If we need to change the model name, as an alternative to the model option inside the component, we can now pass an argument to v-model:

```html
<ChildComponent v-model:title="pageTitle" />

<!-- 是以下的简写: -->
<!-- is shorthand for: -->

<ChildComponent :title="pageTitle" @update:title="pageTitle = $event" />
```

## 插槽的适配
## slot adaptation

Vue3 将不支持 `slot="xxx"` 的用法 ，请使用 `v-slot:xxx` 用法。[更多](https://v3.cn.vuejs.org/guide/component-slots.html#%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD)
Vue3 will not support the usage of `slot="xxx"`, please use the usage of `v-slot:xxx`. [More](https://v3.cn.vuejs.org/guide/component-slots.html#%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD)

::: preview

> Vue2

```html
<!--  Vue2 支持的用法 -->
<!-- Vue2 supported usage -->
<uni-nav-bar>
  <view slot="left" class="city">
    <!-- ... -->
  </view>
</uni-nav-bar>
```

> Vue3

```html
<!--  Vue3 支持的用法 -->
<!-- Vue3 supported usage -->
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
## Filters are no longer supported

从 Vue 3.0 开始，过滤器已删除，不再支持，建议用方法调用或计算属性替换它们。[更多](https://v3.cn.vuejs.org/guide/migration/filters.html#%E6%A6%82%E8%A7%88)
As of Vue 3.0, filters have been removed and are no longer supported, it is recommended to replace them with method calls or computed properties. [More](https://v3.cn.vuejs.org/guide/migration/filters.html#%E6%A6%82%E8%A7%88)

## API `Promise 化` 调用结果的方式
## API `Promise` the way to call the result

在 Vue3 中，处理 API `Promise 化` 调用结果的方式不同于 Vue2。[更多](https://uniapp.dcloud.io/api/#api-promise-化)
In Vue3, the way the result of an API `Promise` call is handled is different than in Vue2. [more](https://uniapp.dcloud.io/api/#api-promise-%E5%8C%96)

- Vue3 中，调用成功会进入 then 方法，调用失败会进入 catch 方法
- In Vue3, if the call is successful, it will enter the then method, and if the call fails, it will enter the catch method.
- Vue2 中，调用无论成功还是失败，都会进入 then 方法，返回数据的第一个参数是错误对象，第二个参数是返回数据
- In Vue2, whether the call succeeds or fails, it will enter the then method, the first parameter of the returned data is the error object, and the second parameter is the returned data

### 转换方法
### Conversion method

::: preview

> Vue2

```js
// Vue 2 转 Vue 3, 在 main.js 中写入以下代码即可
// Vue 2 to Vue 3, write the following code in main.js
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
// Vue 3 to Vue 2, write the following code in main.js
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
## Composition API usage of lifecycle hooks

在 Vue3 组合式 API 中，也需要遵循 uni-app 生命周期钩子规范, 如 onLaunch 等应用生命周期仅可在 App.vue 中监听，使用中请注意生命周期钩子的适用范围。[查看全部生命周期钩子](https://uniapp.dcloud.net.cn/collocation/frame/lifecycle)
In the Vue3 composite API, it is also necessary to follow the uni-app life cycle hook specification. For example, the application life cycle such as onLaunch can only be monitored in App.vue. Please pay attention to the scope of application of the life cycle hook when using it. [View all lifecycle hooks](https://uniapp.dcloud.net.cn/collocation/frame/lifecycle)

只能在 `<script setup>` 单文件语法糖或 `setup()` 方法中使用生命周期钩子，以 A 页面跳转 B 页面传递参数为例：
You can only use life cycle hooks in the `<script setup>` single-file syntax sugar or the `setup()` method. Take page A jumping to page B and passing parameters as an example:

::: preview

> 方法一
> Method 1

```js
// 从 A 页面跳转 B 页面时传递参数 ?id=1&name=uniapp，xxx 为跳转的页面路径
//uni.navigateTo({
//  url: 'xxx?id=1&name=uniapp'
//})

// 方法一：在 B 页面 <script setup> 中
// Method 1: On page B<script setup>
<script setup>
  import {
    onLoad,
    onShow
  } from "@dcloudio/uni-app";

  // onLoad 接受 A 页面传递的参数
  // onLoad accepts the parameters passed by the A page
  onLoad((option) => {
    console.log("B 页面 onLoad:", option); //B 页面 onLoad: {id: '1', name: 'uniapp'}
  });

  onShow(() => {
    console.log("B 页面 onShow");
  });
</script>
```

> 方法二
> Method 2

```js
// 方法二：在 B 页面 setup() 中
// Method 2: in page B setup()
<script>
  import {
    onLoad,
    onShow,
  } from "@dcloudio/uni-app";

  export default {
    setup() {
      // onLoad 接受 A 页面传递的参数
      // onLoad accepts the parameters passed by the A page
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
## `$mp` adjusted to `$scope`

在 Vue3 中，this 对象下的 `$mp` 调整为 `$scope`
In Vue3, `$mp` under this object is adjusted to `$scope`

## 在 nvue 使用 Vuex
## Using Vuex in nvue

在 Vue3 中，如果 nvue 使用了 Vuex 的相关 API，需要在 main.js 的 createApp 的返回值中 return 一下 Vuex 示例：
In Vue3, if nvue uses the related API of Vuex, you need to return the Vuex example in the return value of createApp in main.js:

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
## Need to actively open sourcemap

App，小程序端源码调试，需要在 vite.config.js 中主动开启 sourcemap
App, applet-side source code debugging, you need to actively open sourcemap in vite.config.js

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
In the applet platform of vue3, you can use tap first to listen for native click events.
在 vue3 中，移除了.native 修饰符，所以编译器无法预知 click 是要触发原生事件，还是组件的自定义事件，故并未转换成小程序的 tap 事件。
In vue3, the .native modifier is removed, so the compiler cannot predict whether click is going to trigger a native event or a custom event of the component, so it is not converted into a tap event of the applet.

### style

vue3 出于性能考虑，style 中暂不支持 div、p 等 HTML 标签选择器，推荐使用 class 选择器，[template 中的 HTML 标签仍会进行转换](https://uniapp.dcloud.net.cn/vernacular.html#%E7%BB%84%E4%BB%B6-%E6%A0%87%E7%AD%BE%E7%9A%84%E5%8F%98%E5%8C%96)。

## vue3 支持的手机版本最低到多少？
## What is the minimum mobile phone version supported by vue3?

  > vue3 支持的范围是：Android > 4.4（具体因系统 webview 版本而异，原生安卓系统升级过系统 webview 一般 5.0 即可，国产安卓系统未使用 x5 内核时一般需 7.0 以上）, ios >= 10
  > The range supported by vue3 is: Android > 4.4 (depending on the version of the system webview, the native Android system has been upgraded to the system webview generally 5.0, and the domestic Android system generally needs 7.0 or more when the x5 kernel is not used), ios >= 10

  > Android < 4.4，配置 X5 内核支持，首次需要联网下载，可以配置下载 X5 内核成功后启动应用，[详情](https://uniapp.dcloud.net.cn/collocation/manifest.html#appwebview)
  > Android < 4.4, configure X5 kernel support, it needs to be downloaded online for the first time, you can configure to start the application after downloading the X5 kernel successfully, [Details](https://uniapp.dcloud.net.cn/collocation/manifest.html#appwebview)


## vue3 nvue 暂不支持 recycle-list 组件
## vue3 nvue does not support the recycle-list component

vue3 nvue 暂不支持 recycle-list 组件
vue3 nvue does not support the recycle-list component

## h5 平台发行时，会默认启动摇树
## When the h5 platform is released, tree shaking will be enabled by default

vue3 在 h5 平台发行时，为了优化包体积大小，会默认启动摇树，仅打包明确使用的 api，
When vue3 is released on the h5 platform, in order to optimize the size of the package, tree shaking will be started by default, and only the explicitly used api will be packaged.
如果要关闭摇树，可以在 manifest.json 中配置：
If you want to turn off tree shaking, you can configure it in manifest.json:

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
## Get page parameters through props @url-search-params

vue3 全平台新增：通过 props 来获取页面参数的使用方式
New in vue3 platform: use props to get page parameters

<!--方式1-->
<!--Mode 1-->

```html
<script setup>
  // 页面可以通过定义 props 来直接接收 url 传入的参数
  // The page can directly receive the parameters passed in by the url by defining props
  // 如：uni.navigateTo({ url: '/pages/index/index?id=10' })
  // As：uni.navigateTo({ url: '/pages/index/index?id=10' })
  const props = defineProps({
    id: String,
  });
  console.log("id=" + props.id); // id=10
</script>
```

<!--方式2-->
<!--Mode 2-->

```html
<script>
  // 页面可以通过定义 props 来直接接收 url 传入的参数
  // The page can directly receive the parameters passed in by the url by defining props
  // 如：uni.navigateTo({ url: '/pages/index/index?id=10' })
  // As：uni.navigateTo({ url: '/pages/index/index?id=10' })
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
## The applet and the App do not support the interpolation method to define internationalization @vue-i18n

因运行平台限制，目前在小程序和 App 端不支持插值方式定义国际化,需要使用 Messages Functions 定义国际化信息，[参考文档](https://vue-i18n.intlify.dev/guide/advanced/function.html)
Due to the limitation of the operating platform, the interpolation method is currently not supported on the applet and App side to define internationalization. Messages Functions need to be used to define internationalization information. [Reference Document](https://vue-i18n.intlify.dev/guide/advanced/ function.html)

示例：
Example:

```js
const messages = {
  en: {
    greeting: ({ named }) => `hello, ${named('name')}!`
  }
}
```
