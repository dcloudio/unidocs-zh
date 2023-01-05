## uni-vue-devtools

`uni-vue-devtools` 是基于 [vue-devtools](https://devtools.vuejs.org/) 开发的 `uni-app` 项目调试工具。

相当于chrome的dev tools，它提供了2个特色功能：
- 可以方便的查看data、修改data并在页面上实时查看效果
- 可以审查自定义的vue组件

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|√|x|

**注意事项：**

- `uni-vue-devtools`只能审查自定义的vue组件，不能审查内置基础组件。
- 目前仅支持 `cli`(3.0.0-alpha-3061220221207002+) 创建的 `Vue3` 项目。
- App、小程序端暂不支持 `script setup` 语法糖。

### 使用方法

#### 1. 安装

  ```shell
  npm install @dcloudio/uni-vue-devtools --save-dev
  ```

#### 2. 运行项目

  ```shell
  npm run dev:%PLATFORM% --devtools
  ```

  服务启动后，会自动在默认浏览器打开一个页面，并显示待连接状态\
  ![](https://web-assets.dcloud.net.cn/unidoc/zh/uni-vue-devtools-waiting-connect.png)

  对应平台项目运行后会与该页面建立连接\
  ![](https://web-assets.dcloud.net.cn/unidoc/zh/uni-vue-devtools-connected.png)

**Tips:**

* 运行项目时可以通过 `--devtoolsHost` 指定 `ip`，`--devtoolsPort` 指定 `端口`。 例如：
 ```shell
  npm run dev:%PLATFORM% --devtools --devtoolsHost=localhost --devtoolsPort=8098
  ```

* uni-vue-devtools 会判断端口是否占用，如被占用，会自动切换未占用端口。