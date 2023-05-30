## uni-vue-devtools

> 新增于`HBuilderX 3.7.0` 及 `cli 3.0.0-alpha-3070020230117001+`
> Added in `HBuilderX 3.7.0` and `cli 3.0.0-alpha-3070020230117001+`

> 仅支持vue3。暂不支持vue2
> Only supports vue3. Vue2 is not supported yet

`uni-vue-devtools` 是基于 [vue-devtools](https://devtools.vuejs.org/) 开发的 `uni-app` 项目调试工具。
`uni-vue-devtools` is a `uni-app` project debugging tool developed based on [vue-devtools](https://devtools.vuejs.org/).

在web开发时，开发者可以在 chrome 里安装 vue devtools插件。但app和小程序过去无法使用。
During web development, developers can install the vue devtools plugin in chrome. But apps and MiniApp were not available in the past.

现在HBuilderX集成了该功能，web、app、小程序均可使用。
Now HBuilderX integrates this function, which can be used in web, app and MiniApp.

vue devtools提供了2个特色功能：
Vue devtools provides 2 features:
1. 可以方便的查看 data、修改 data 并在页面上实时查看效果
1. It is convenient to view data, modify data and view the effect in real time on the page
2. 可以审查自定义的 vue 组件（不含内置组件）
2. Can review custom vue components (excluding built-in components)

**平台差异说明**
**Platform Difference Description**

|App-vue|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|
| App-vue| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|√|

**注意事项：**
**Precautions:**
- `uni-vue-devtools` 只能审查自定义的 vue 组件，不能审查内置基础组件。
- `uni-vue-devtools` can only inspect custom vue components, not built-in base components.
- App、小程序端暂不支持 `script setup` 语法糖。
- Apps and MiniApp not currently support `script setup` syntactic sugar.

### HBuilderX中的使用方法
### How to use in HBuilderX

HBuilderX 运行菜单下针对每个运行平台有一个 `运行时自动打开 Vue Devtools` 按钮，
Under the HBuilderX run menu, there is a `Automatically open Vue Devtools` button for each running platform,

![](https://web-assets.dcloud.net.cn/unidoc/zh/devtools-auto-open.png)

勾选后，运行到对应平台时会自动开启 Vue Devtools。服务启动后，会自动打开一个弹窗，并显示待连接状态，
After checking, Vue Devtools will be automatically opened when running to the corresponding platform. After the service starts, it will automatically open a pop-up window and display the pending connection status.

![](https://web-assets.dcloud.net.cn/unidoc/zh/devtools-hx-waiting-connect.png)

对应平台项目运行后会与该弹窗建立连接。
After the corresponding platform project runs, a connection will be established with the pop-up window.

![](https://web-assets.dcloud.net.cn/unidoc/zh/devtools-hx-connected.png)

如果您不需要默认开启 Vue Devtools，但在开发过程中临时需要 Devtools 调试，可点击控制台右上角 Vue 图标按钮，
If you do not need to enable Vue Devtools by default, but temporarily need Devtools debugging during the development process, you can click the Vue icon button in the upper right corner of the console,

![](https://web-assets.dcloud.net.cn/unidoc/zh/devtools-control-panel-icon.png)

此时会以 Devtools 模式重启开发服务。
This will restart the development service in Devtools mode.

**Tips:**

* 如果 Devtools 弹窗已打开且未置于前台，可通过点击控制台 vue 图标将 Devtools 弹窗激活到前台。
* If the Devtools popup is open and not in the foreground, activate the Devtools popup to the foreground by clicking the console vue icon.

### CLI使用方法
### How to use the CLI

如果您不使用HBuilderX开发uni-app，也可以通过cli方式使用vue devtools。
If you don't use HBuilderX to develop uni-app, you can also use vue devtools via cli.

1. 安装
1. Installation

  ```shell
  npm install @dcloudio/uni-vue-devtools --save-dev
  ```

2. 运行项目加上devtools参数
2. Run the project with devtools parameters

  ```shell
  npm run dev:%PLATFORM% --devtools
  ```

  服务启动后，会自动在默认浏览器打开一个页面，并显示待连接状态，
  After the service is started, it will automatically open a page in the default browser and display the pending connection status.

  ![](https://web-assets.dcloud.net.cn/unidoc/zh/devtools-waiting-connect.png)

  对应平台项目运行后会与该页面建立连接。
  After the corresponding platform project runs, it will establish a connection with this page.

  ![](https://web-assets.dcloud.net.cn/unidoc/zh/devtools-connected.png)

### 常见问题
### common problem

1. HBuilderX 项目运行到微信开发者工具，修改页面数据后 Devtools 弹窗组件树丢失？\
1. The HBuilderX project runs to the WeChat developer tools, and the Devtools pop-up window component tree is lost after modifying the page data? \
答：微信开发者工具热重载未同步数据问题，关闭热重载。
Answer: The hot reload of WeChat developer tools does not synchronize data, and the hot reload is turned off.

2. HBuilderX 项目运行到百度开发者工具，修改页面数据后 Devtools 数据未更新？\
答：百度开发者工具隔离编译模式热更新未同步数据问题，切换依赖分析编译模式。

3. `uni.addInterceptor` 修改 `request url` 导致报错 `未能获取局域网地址，本地调试服务不可用`?\
答：`uni-vue-devtools` 依赖本地服务通信，故修改 `request url` 应绕开相关服务，特征为 `http:localhost|本机ip:端口`。