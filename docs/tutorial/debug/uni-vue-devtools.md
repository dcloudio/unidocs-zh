## uni-vue-devtools

> 新增于`HBuilderX 3.7.0` 及 `cli 3.0.0-Alpha-3070020230117001+`

> 仅支持vue3。暂不支持vue2

`uni-vue-devtools` 是基于 [vue-devtools](https://devtools.vuejs.org/) 开发的 `uni-app` 项目调试工具。

在web开发时，开发者可以在 chrome 里安装 vue devtools插件。但app和小程序过去无法使用。

现在HBuilderX集成了该功能，web、app、小程序均可使用。

vue devtools提供了2个特色功能：
1. 可以方便的查看 data、修改 data 并在页面上实时查看效果
2. 可以审查自定义的 vue 组件（不含内置组件）

**平台差异说明**

|App-vue|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|√|

**注意事项：**
- `uni-vue-devtools` 只能审查自定义的 vue 组件，不能审查内置基础组件。
- App、小程序端暂不支持 `script setup` 语法糖。

### HBuilderX中的使用方法

HBuilderX 运行菜单下针对每个运行平台有一个 `运行时自动打开 Vue Devtools` 按钮，

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/devtools-auto-open.png)

勾选后，运行到对应平台时会自动开启 Vue Devtools。服务启动后，会自动打开一个弹窗，并显示待连接状态，

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/devtools-hx-waiting-connect.png)

对应平台项目运行后会与该弹窗建立连接。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/devtools-hx-connected.png)

如果您不需要默认开启 Vue Devtools，但在开发过程中临时需要 Devtools 调试，可点击控制台右上角 Vue 图标按钮，

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/devtools-control-panel-icon.png)

此时会以 Devtools 模式重启开发服务。

**Tips:**

* 如果 Devtools 弹窗已打开且未置于前台，可通过点击控制台 vue 图标将 Devtools 弹窗激活到前台。

### CLI使用方法

如果您不使用HBuilderX开发uni-app，也可以通过cli方式使用vue devtools。

1. 安装

  ```shell
  npm install @dcloudio/uni-vue-devtools --save-dev
  ```

2. 运行项目加上devtools参数

  ```shell
  npm run dev:%PLATFORM% --devtools
  ```

  服务启动后，会自动在默认浏览器打开一个页面，并显示待连接状态，

  ![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/devtools-waiting-connect.png)

  对应平台项目运行后会与该页面建立连接。

  ![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/devtools-connected.png)

### 常见问题

1. HBuilderX 项目运行到微信开发者工具，修改页面数据后 Devtools 弹窗组件树丢失？\
答：微信开发者工具热重载未同步数据问题，关闭热重载。

2. HBuilderX 项目运行到百度开发者工具，修改页面数据后 Devtools 数据未更新？\
答：百度开发者工具隔离编译模式热更新未同步数据问题，切换依赖分析编译模式。

3. `uni.addInterceptor` 修改 `request url` 导致报错 `未能获取局域网地址，本地调试服务不可用`?\
答：`uni-vue-devtools` 依赖本地服务通信，故修改 `request url` 应绕开相关服务，特征为 `http:localhost|本机IP:端口`, 例如：
```js
uni.addInterceptor('request', {
  invoke(args) {
    if (!args.url.startsWith('http://localhost') && !args.url.startsWith('http://本机IP')) {
      args.url = '目标地址'
    }
  }
})
```