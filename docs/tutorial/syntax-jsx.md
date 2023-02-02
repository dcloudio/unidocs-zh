## JSX/TSX 支持

uniapp 支持 [JSX](https://facebook.github.io/jsx) 开发，可参考 [Vue.js JSX/TSX 支持](https://cn.vuejs.org/guide/extras/render-function.html#jsx-tsx) 说明。

**平台差异说明**

|App-vue3|H5-vue3|小程序平台|
|:-:|:-:|:-:|
|√|√|x|

## 支持方式

### 安装插件

```
npm install @vitejs/plugin-vue-jsx --save-dev
```

### 配置 vite.config.js

- HBuilderX创建的项目

项目根目录新增 vite.config.js 文件，并增加如下配置：

```
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

项目根目录 vite.config.js 文件中增加如下配置：

```
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
  ],
}
```