你可以通过如下入口，对`uni-app`编译器进行配置：
You can configure the `uni-app` compiler through the following entry:

**manifest.json**

在manifest.json中，你可以配置Vue的版本（Vue2/Vue3），以及发行H5平台路由模式，详见： [manifest.json](/collocation/manifest)
In manifest.json, you can configure the version of Vue (Vue2/Vue3), as well as the routing mode of the release H5 platform, see: [manifest.json](/collocation/manifest)

**vue.config.js**

在 vue.config.js 中可以修改 webpack 配置，包括环境变量，具体参考 [vue-config.js](/collocation/vue-config)。
In vue.config.js, you can modify the webpack configuration, including environment variables, please refer to [vue-config.js](/collocation/vue-config).

**vite.config.js**

在 vite.config.js 中可以修改 Vite 配置，包括环境变量，具体参考 [vite.config.js](/collocation/vite-config)。
Vite configuration, including environment variables, can be modified in vite.config.js, please refer to [vite.config.js](/collocation/vite-config).

**package.json**

在自定义条件编译平台时，可以在 package.json 文件的 env 节点下配置环境变量，具体参考 [package.json](/collocation/package)
When customizing the conditional compilation platform, you can configure environment variables under the env node of the package.json file. For details, refer to [package.json](/collocation/package)

**.env**

CLI 创建的项目中可以在根目录中放置 ``.env`` 文件来指定环境变量，具体参考：[环境变量](https://cli.vuejs.org/zh/guide/mode-and-env.html#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F)。
In a project created by CLI, you can place a ``.env`` file in the root directory to specify environment variables. For details, refer to: [Environment Variables](https://cli.vuejs.org/zh/guide/mode-and-env .html#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F).