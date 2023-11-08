## JSX/TSX 支持
## JSX/TSX support

uniapp 支持 [JSX](https://facebook.github.io/jsx) 开发，可参考 [Vue.js JSX/TSX 支持](https://cn.vuejs.org/guide/extras/render-function.html#jsx-tsx) 说明。
uniapp supports [JSX](https://facebook.github.io/jsx) development, please refer to [Vue.js JSX/TSX support](https://cn.vuejs.org/guide/extras/render-function. html#jsx-tsx) instructions.

**平台差异说明**
**Platform Difference Description**

|App-vue3|H5-vue3|小程序平台|
| App-vue3| H5-vue3| MiniApp platform|
|:-:|:-:|:-:|
|√|√|x|

## 支持方式
## Support methods

### 安装插件
### Install the plugin

```shell
npm install @vitejs/plugin-vue-jsx --save-dev
```

### 配置 vite.config.js
### Configure vite.config.js

- HBuilderX创建的项目
- Projects created by HBuilderX

项目根目录新增 vite.config.js 文件，并增加如下配置：
Add a vite.config.js file to the root directory of the project, and add the following configuration:

```js
import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [
    uni(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    })
  ],
});

```

- cli创建的项目
- project created by cli

项目根目录 vite.config.js 文件中增加如下配置：
Add the following configuration to the vite.config.js file in the root directory of the project:

```js
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
  ],
}
```