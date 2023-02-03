> 本文档意在介绍如何把uni-app项目编译为小程序插件，如果想了解如何在uni-app中引用和使用小程序插件，另见文档：[使用小程序插件](mp-weixin-plugin.md)
> This document is intended to introduce how to compile a uni-app project into an applet plugin. If you want to know how to reference and use applet plugins in uni-app, please refer to the document: [Using applet plugins](mp-weixin-plugin.md)

小程序插件规范由小程序厂商定义，插件是对一组 js 接口、自定义组件或页面的封装，用于嵌入到小程序中使用。
The applet plug-in specification is defined by the applet manufacturer. A plug-in is a package of a set of js interfaces, custom components or pages, and is used to be embedded in the applet.

uni-app 不仅仅可以开发完整的小程序，也可以编译为小程序插件。
uni-app can not only develop a complete applet, but also compile it into a applet plug-in.

**平台差异说明**
**Platform Difference Description**

| 微信小程序 | 支付宝小程序 | 百度小程序 | 字节跳动小程序、飞书小程序 | QQ 小程序 | 快手小程序 |京东小程序|
| WeChat applet | Alipay applet | Baidu applet | ByteDance applet, Feishu applet | QQ applet | Kuaishou applet |Jingdong applet|
| :--------: | :----------: | :--------: | :------------: | :-------: | :--------: | :--------: |
|     √      |       √ ( `3.2.9+` )      |     x      |       x        |     x     |     x      |x|

**注意**
**Notice**

1. 开发 `微信小程序插件` 时，基础库版本 `1.9.6` 开始支持。（如果插件包含页面，则需要基础库版本 `2.1.0` 。）
1. When developing `WeChat applet plugin`, the basic library version `1.9.6` began to support. (If the plugin includes pages, the base library version `2.1.0` is required.)
2. 开发 `支付宝小程序插件` 时，支付宝 IDE 版本要求在 0.60 及以上
2. When developing the `Alipay applet plug-in`, the Alipay IDE version is required to be 0.60 and above

#### 插件目录结构
#### Plugin directory structure

> 编译到微信小程序插件结果
> Compile to WeChat applet plugin result

```
plugin
├── components               // 插件提供的自定义组件（可以有多个）
│   ├── hello-component.js
│   ├── hello-component.json
│   ├── hello-component.wxml
│   └── hello-component.wxss
├── pages
│   ├── hello-page.js        // 插件提供的页面（可以有多个）
│   ├── hello-page.json
│   ├── hello-page.wxml
│   └── hello-page.wxss
├── index.js                 // 插件的 js 接口
└── plugin.json              // 插件配置文件
```

#### 插件配置文件
#### plugin configuration file

> plugin.json 在 uni-app 项目中和 pages.json 同级。向第三方小程序开放的所有组件、页面和 js 接口都必须在 plugin.json 中声明
> plugin.json is at the same level as pages.json in the uni-app project. All components, pages and js interfaces open to third-party applets must be declared in plugin.json

- `mp-weixin`

  ```json
  {
  	"publicComponents": {
  		"hello-component": "components/hello-component"
  	},
  	"pages": {
  		"hello-page": "pages/hello-page"
  	},
  	"main": "index.js"
  }
  ```

  每个配置的含义如下：
  The meaning of each configuration is as follows:

  - `publicComponents`：列出所有向小程序开放的自定义组件。
  - `publicComponents`: List all custom components open to the applet.
  - `pages`：列出所有向小程序开放的页面。
  - `pages`: List all pages open to the applet.
  - `main`：插件面向第三方小程序的 js 接口。
  - `main`: The plugin's js interface for third-party applets.

- `mp-alipay`

  ```json
  {
     "publicComponents": {
       "hello-component": "components/hello-component"
     },
     "publicPages": {
       "hello-pages": "pages/hello-page"
     },
     "pages": [
       "pages/hello-page",
       "pages/index"
     ],
     "main": "index.js"
  }
  ```

  每个配置的含义如下：
  The meaning of each configuration is as follows:

  - `publicComponents`：列出所有向小程序开放的自定义组件。
  - `publicComponents`: List all custom components open to the applet.
  - `publicPages`：列出所有向小程序开放的页面。
  - `publicPages`: List all pages open to the applet.
  - `pages`：列出插件所有页面（包含向小程序开放的以及不向小程序开放的页面）。
  - `pages`: List all the pages of the plugin (including pages that are open to Mini Programs and those that are not open to Mini Programs).
  - `main`：插件面向第三方小程序的 js 接口。
  - `main`: The plugin's js interface for third-party applets.

**注意**
**Notice**

1. `mp-weixin` 中的 `pages` 项与 `mp-alipay` 中的 `publicPages` 项作用一致
1. The `pages` item in `mp-weixin` has the same function as the `publicPages` item in `mp-alipay`
2. `mp-alipay` 中供外部使用的页面，需要在 `pages` 中声明，数组类型
2. The pages in `mp-alipay` for external use need to be declared in `pages`, array type
3. 由于两端的格式不一致，可以在 `plugin.json` 中使用[条件编译](https://uniapp.dcloud.io/tutorial/platform.html#preprocessor)处理
3. Due to the inconsistent formats at both ends, you can use [conditional compilation](https://uniapp.dcloud.io/tutorial/platform.html#preprocessor) in `plugin.json` to process

#### 编译步骤
#### Compilation steps

- 将 CLI 创建的工程编译器依赖更新到 3.2.1 以上，更新编译器依赖参考：[https://uniapp.dcloud.net.cn/quickstart-cli.html#cliversion](https://uniapp.dcloud.net.cn/quickstart-cli.html#cliversion)。
- Update the compiler dependency of the project created by CLI to 3.2.1 or above, and update the compiler dependency reference: [https://uniapp.dcloud.net.cn/quickstart-cli.html#cliversion](https://uniapp. dcloud.net.cn/quickstart-cli.html#cliversion).
- 执行命令行：`yarn dev:mp-weixin -- --plugin plugin-name`。
- Execute the command line: `yarn dev:mp-weixin -- --plugin plugin-name`.
- 其中 `plugin-name` 为编译出插件包的名字。 `项目根目录\dist\dev\mp-weixin\plugin-name` 中即是可执行小程序插件代码。
- Where `plugin-name` is the name of the compiled plugin package. The executable MiniApp plug-in code is in `project root directory\dist\dev\mp-weixin\plugin-name`.
- `mp-alipay` 平台插件编译后续发布，请留意更新日志。
- The `mp-alipay` platform plugin will be compiled and released later, please pay attention to the update log.

#### 如何在项目中使用插件
#### How to use plugins in your project

1. 宿主小程序是 `uni-app项目`，在 `manifest.json` 中配置相关信息即可，[详情](https://uniapp.dcloud.io/component/mp-weixin-plugin?id=%e9%85%8d%e7%bd%ae%e5%b0%8f%e7%a8%8b%e5%ba%8f%e6%8f%92%e4%bb%b6)
1. The host applet is the `uni-app project`. You can configure relevant information in `manifest.json`. [Details](https://uniapp.dcloud.io/component/mp-weixin-plugin?id= %e9%85%8d%e7%bd%ae%e5%b0%8f%e7%a8%8b%e5%ba%8f%e6%8f%92%e4%bb%b6)
2. 宿主为原生小程序，在项目的 `app.json` 中配置即可：
2. The host is a native applet, which can be configured in the `app.json` of the project:
   - [mp-weixin 配置](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/using.html)
   - [mp-weixin configuration](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/using.html)
   - [mp-alipay 配置](https://opendocs.alipay.com/mini/plugin/plugin-development#app.json%20%E9%BB%98%E8%AE%A4%E9%85%8D%E7%BD%AE)
   - [mp-alipay config](https://opendocs.alipay.com/mini/plugin/plugin-development#app.json%20%E9%BB%98%E8%AE%A4%E9%85%8D% E7%BD%AE)

#### 在插件中使用条件编译
#### Using conditional compilation in plugins

> 有时候项目不仅要编译到插件，也需要作为一个正常的小程序运行，但有些 api 并不适用于两端，此时可以使用自定义条件编译区分开来。
> Sometimes the project not only needs to be compiled into a plug-in, but also needs to be run as a normal applet, but some APIs are not applicable to both ends. In this case, you can use custom conditional compilation to distinguish them.

1. 自定义条件编译（[详情](/collocation/package)），在`package.json`中添加如以下配置：
1. To customize conditional compilation ([details](/collocation/package)), add the following configuration to `package.json`:

   ```json
   "uni-app": {
     "scripts": {
       "mp-wx-plugin": {
         "title": "微信小程序插件",
         "env": {
           "UNI_PLATFORM": "mp-weixin"
         },
         "define": {
           "MP-WX-PLUGIN": true
         }
       },
       "mp-ali-plugin": {
         "title": "阿里小程序插件",
         "env": {
           "UNI_PLATFORM": "mp-alipay"
         },
         "define": {
           "MP-ALI-PLUGIN": true
         }
       },
     }
   }
   ```

2. 使用条件编译：
2. Use conditional compilation:
   ```js
   // #ifdef MP-WX-PLUGIN
   /**
    * CODE
    */
   // #endif
   ```
3. 编译时执行命令：`yarn dev:custom mp-wx-plugin --plugin test-plugin` 即可，可将脚本写入`script`中，每次执行更加简化。
3. Execute the command when compiling: `yarn dev:custom mp-wx-plugin --plugin test-plugin`, you can write the script into `script`, and each execution is more simplified.
   ```json
   {
   	"dev:mp-wx-plugin": "yarn dev:custom mp-wx-plugin --plugin",
   	"dev:mp-ali-plugin": "yarn dev:custom mp-ali-plugin --plugin"
   }
   ```

**注意**
**Notice**

1. 组件在插件内部未使用，需要在宿主小程序中使用时，要在 main.js 中引入使用一下，否则编译后会丢失未使用插件。例如：
1. The component is not used inside the plug-in. When it needs to be used in the host applet, it should be introduced and used in main.js, otherwise the unused plug-in will be lost after compilation. E.g:
   ```js
   import helloList from '.../helloList';
   Vue.component('hello-list', helloList);
   ```
2. 插件中所编写的页面需要在 `pages.json` 中填写。
2. The pages written in the plugin need to be filled in `pages.json`.
3. 如果有多个 `uni-app` 编译的 `插件` 需要运行在同一个小程序中，**不要重名**。
3. If there are multiple `plugins` compiled by `uni-app` that need to run in the same applet, **do not have the same name**.
4. 名称不要有特殊字符，比如 `\`。会用到这个名字来挂载一个方法。
4. Do not have special characters in the name, such as `\`. This name will be used to mount a method.
5. `-` 已经手动替换为 `_` ，其他的特殊字符不要写。
5. `-` has been manually replaced with `_`, do not write other special characters.
6. 各家小程序插件对各 `api` 的支持情况不同，具体请查看小程序官方文档的相关描述
6. Each applet plugin has different support for each `api`. For details, please refer to the relevant description of the official applet documentation
