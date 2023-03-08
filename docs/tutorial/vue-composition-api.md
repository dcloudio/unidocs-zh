## 组合式 API（Composition API）

目前 uni-app（Vue2） 基于 Vue 2.6，组合式 API 由 [@vue/composition-api](https://github.com/vuejs/composition-api) 支持，script setup 由 [
Currently uni-app (Vue2) is based on Vue 2.6, the composition API is supported by [@vue/composition-api](https://github.com/vuejs/composition-api), script setup is supported by [
unplugin-vue2-script-setup](https://github.com/antfu/unplugin-vue2-script-setup) 支持。
unplugin-vue2-script-setup](https://github.com/antfu/unplugin-vue2-script-setup) support.

### 环境准备
### Environment preparation

升级 uni-app 编译器到 3.6.8+

  * HBuilderX 创建的项目直接升级 HBuilderX 到最新版即可
  * CLI 创建的项目参考 [https://uniapp.dcloud.net.cn/quickstart-cli.html#cliversion](https://uniapp.dcloud.net.cn/quickstart-cli.html#cliversion) 升级依赖到最新版
  
### 使用组合式API
### Using the Composition API

  1. 在 main.js/ts 文件内增加安装 @vue/composition-api 插件。如果使用 nvue 页面，也需要在每个 nvue 页面安装，且每个 nvue 页面之间插件状态默认不会共享。
  1. Add and install the @vue/composition-api plugin in the main.js/ts file. If you use the nvue page, you also need to install it on each nvue page, and the plug-in state will not be shared between each nvue page by default.
  
  ::: preview
  
  > main.js
  
  ```js
  import './composition-api'
  import Vue from 'vue'
  import App from './App.vue'

  Vue.config.productionTip = false

  const app = new (typeof App === 'function' ? App : Vue.extend(Object.assign({ mpType: 'app' }, App)))
  app.$mount()
  ```
  
  > composition-api.js
  
  ```js
  import Vue from 'vue'
  import VueCompositionAPI from '@vue/composition-api'

  Vue.use(VueCompositionAPI)
  ```
  
  > pages/index/index.nvue
  
  ```js
  import '../../composition-api.js'
  import { defineComponent } from '@vue/composition-api'
  import { onReady } from '@dcloudio/uni-app'
  export default defineComponent({
    setup() {
      onReady(() => {
        console.log('onReady')
      })
    }
  })
  ```
  
  :::

  2. 从 @vue/composition-api 包内导入并使用基础的组合式API，具体的兼容性仍需参考：[@vue/composition-api](https://github.com/vuejs/composition-api#browser-compatibility)。从 @dcloudio/uni-app 包内导入 uni-app [应用生命周期](/collocation/App.html#applifecycle)及[页面的生命周期](/tutorial/page.html#lifecycle)。

  ```js
  import { defineComponent, ref } from '@vue/composition-api'
  import { onReady } from '@dcloudio/uni-app'
  export default defineComponent({
    setup() {
      const title = ref('Hello')
      onReady(() => {
        console.log('onReady')
      })
      return {
        title
      }
    }
  })
  ```

### 使用 Script Setup
### Using Script Setup

  1. 使用 npm/yarn 安装 unplugin-vue2-script-setup 插件，此插件暂不支持 nvue 页面。
  1. Use npm/yarn to install the unplugin-vue2-script-setup plugin. This plugin does not support nvue pages at the moment.
  
  ```shell
  npm install unplugin-vue2-script-setup -D
  # or
  yarn add unplugin-vue2-script-setup -D
  ```
  
  2. 在 vue.config.js 配置 ScriptSetup 插件，以下为基础配置，其他具体配置请参考 [unplugin-vue2-script-setup](https://github.com/antfu/unplugin-vue2-script-setup)
  2. Configure the ScriptSetup plugin in vue.config.js. The following is the basic configuration. For other specific configurations, please refer to [unplugin-vue2-script-setup](https://github.com/antfu/unplugin-vue2-script-setup)
  
  ```js
  const ScriptSetup = require('unplugin-vue2-script-setup/webpack').default
  module.exports = {
    parallel: false,
    configureWebpack: {
      plugins: [
        ScriptSetup({ /* options */ }),
      ],
    },
    chainWebpack (config) {
      // disable type check and let `vue-tsc` handles it
      config.plugins.delete('fork-ts-checker')
    },
  }
  ```
  
  3. 改用 Script Setup 写法导入 API
  3. Use Script Setup to import API
  
  ```vue
  <script setup>
  import { ref } from '@vue/composition-api'
  import { onReady } from '@dcloudio/uni-app'
  const title = ref('Hello')
  onReady(() => {
    console.log('onReady')
  })
  </script>
  ```
  
### 与 TypesSript 一起使用
### Working with TypesScript

> 与 Script Setup 一同使用时会禁用默认的类型检查，具体请参考 [unplugin-vue2-script-setup](https://github.com/antfu/unplugin-vue2-script-setup)
> When used with Script Setup, the default type checking will be disabled. For details, please refer to [unplugin-vue2-script-setup](https://github.com/antfu/unplugin-vue2-script-setup)
