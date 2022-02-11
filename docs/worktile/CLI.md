---
sidebarDepth: 2
---

`uni-app`提供有完整的`cli` 脚手架，可以通过 `vue-cli` 创建、运行、发行 `uni-app` 项目。

## CLI 工具安装

首先，你需要使用 npm 或者 yarn 全局安装 `@vue/cli`

```shell
npm install -g @vue/cli
```

## 创建 uni-app 工程

- 使用 `正式版`（对应 HBuilderX 最新正式版）

  ```shell
  vue create -p dcloudio/uni-preset-vue my-project
  ```

- 使用 `alpha版`（对应 HBuilderX 最新 alpha 版）

  ```shell
  vue create -p dcloudio/uni-preset-vue#alpha my-alpha-project
  ```

- 使用 `Vue3/Vite版`
  - 创建以 javascript 开发的工程（如命令行创建失败，请直接访问 [gitee](https://gitee.com/dcloud/uni-preset-vue/repository/archive/vite.zip) 下载模板）
    ```shell
    npx degit dcloudio/uni-preset-vue#vite my-vue3-project
    ```
  - 创建以 typescript 开发的工程（如命令行创建失败，请直接访问 [gitee](https://gitee.com/dcloud/uni-preset-vue/repository/archive/vite-ts.zip) 下载模板）
    ```shell
    npx degit dcloudio/uni-preset-vue#vite-ts my-vue3-project
    ```

此时，会提示选择项目模板（使用 `Vue3/Vite版` 不会提示，目前只支持创建默认模板），初次体验建议选择 `hello uni-app` 项目模板，如下所示：

<div>
<img src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/h5-cli-01.png" width="300">
</div>

- **自定义模板**

  选择自定义模板时，需要填写 uni-app 模板地址，这个地址其实就是托管在云端的仓库地址。以 GitHub 为例，地址格式为 `userName/repositoryName`，如 `dcloudio/uni-template-picture` 就是下载图片模板。

  更多支持的下载方式，请参考这个插件的说明：[download-git-repo](https://www.npmjs.com/package/download-git-repo)

- **国内特殊情况**

  > 模板项目存放于 Github，由于国内网络环境问题，可能下载失败。针对此问题可以尝试如下措施：

  - 更换网络重试，比如使用 4g 网络
  - 在设备或路由器的网络设置中增加 DNS（如：8.8.8.8）
  - 在设备中增加固定的 hosts（如：140.82.113.4 github.com）

- **修改依赖为指定版本@cliversion**

  可以使用 [@dcloudio/uvm](https://www.npmjs.com/package/@dcloudio/uvm) 管理编译器的版本：

  - 更新到 `最新正式版`
    ```shell
    npx @dcloudio/uvm
    ```
  - 更新到 `最新 alpha 版`
    ```shell
    npx @dcloudio/uvm alpha
    ```
  - 更新到 `正式版指定版本`
    ```shell
    npx @dcloudio/uvm 3.2.12.20211029
    ```
  - 更新到 `alpha 版指定版本`
    ```shell
    npx @dcloudio/uvm 3.2.14.20211112-alpha
    ```

## 运行、发布 uni-app

### App 平台

> app 平台生成打包资源（支持 `npm run build:app-plus`，可用于持续集成。不支持直接运行到真机。运行调试仍需在 HBuilderX 中操作）

**编译命令**

```shell
# npm
npm run build:app-plus
npm run dev:app-plus
# vue3项目
npm run build:app
npm run dev:app

# yarn
yarn build:app-plus
yarn dev:app-plus
# vue3项目
yarn build:app
yarn dev:app

# 监听文件变化且启用压缩
yarn build:app-plus --watch
# vue3项目
yarn build:app -w
```

### H5

**编译命令**

```shell
# npm
npm run build:h5
npm run dev:h5

# yarn
yarn build:h5
yarn dev:h5

# 监听文件变化且启用压缩
yarn build:h5 --watch
# vue3项目
yarn build:h5 -w
```

### 微信小程序

**编译命令**

```shell
# npm
npm run build:mp-weixin
npm run dev:mp-weixin

# yarn
yarn build:mp-weixin
yarn dev:mp-weixin

# 监听文件变化且启用压缩
yarn build:mp-weixin -watch
# vue3项目
yarn build:mp-weixin -w
```

### 支付宝小程序

**编译命令**

```shell
# npm
npm run build:mp-alipay
npm run dev:mp-alipay

# yarn
yarn build:mp-alipay
yarn dev:mp-alipay

# 监听文件变化且启用压缩
yarn build:mp-alipay -watch
# vue3项目
yarn build:mp-alipay -w
```

### 百度小程序

**编译命令**

```shell
# npm
npm run build:mp-baidu
npm run dev:mp-baidu

# yarn
yarn build:mp-baidu
yarn dev:mp-baidu

# 监听文件变化且启用压缩
yarn build:mp-baidu -watch
# vue3项目
yarn build:mp-baidu -w
```

### 字节跳动小程序

**编译命令**

```shell
# npm
npm run build:mp-toutiao
npm run dev:mp-toutiao

# yarn
yarn build:mp-toutiao
yarn dev:mp-toutiao

# 监听文件变化且启用压缩
yarn build:mp-toutiao -watch
# vue3项目
yarn build:mp-toutiao -w
```

### 飞书小程序

**编译命令**

```shell
# npm
npm run build:mp-lark
npm run dev:mp-lark

# yarn
yarn build:mp-lark
yarn dev:mp-lark

# 监听文件变化且启用压缩
yarn build:mp-lark -watch
# vue3项目
yarn build:mp-lark -w
```

### QQ 小程序

**编译命令**

```shell
# npm
npm run build:mp-qq
npm run dev:mp-qq

# yarn
yarn build:mp-qq
yarn dev:mp-qq

# 监听文件变化且启用压缩
yarn build:mp-qq -watch
# vue3项目
yarn build:mp-qq -w
```

### 快手小程序

**编译命令**

```shell
# npm
npm run build:mp-kuaishou
npm run dev:mp-kuaishou

# yarn
yarn build:mp-kuaishou
yarn dev:mp-kuaishou

# 监听文件变化且启用压缩
yarn build:mp-kuaishou -watch
# vue3项目
yarn build:mp-kuaishou -w
```

### 快应用(webview)

**编译命令**

```shell
# npm
npm run build:quickapp-webview
npm run dev:quickapp-webview

# yarn
yarn build:quickapp-webview
yarn dev:quickapp-webview

# 监听文件变化且启用压缩
yarn build:quickapp-webview -watch
# vue3项目
yarn build:quickapp-webview -w
```

### 快应用联盟

**编译命令**

```shell
# npm
npm run build:quickapp-webview-union
npm run dev:quickapp-webview-union

# yarn
yarn build:quickapp-webview-union
yarn dev:quickapp-webview-union

# 监听文件变化且启用压缩
yarn build:quickapp-webview-union -watch
# vue3项目
yarn build:quickapp-webview-union -w
```

### 快应用华为

**编译命令**

```shell
# npm
npm run build:quickapp-webview-huawei
npm run dev:quickapp-webview-huawei

# yarn
yarn build:quickapp-webview-huawei
yarn dev:quickapp-webview-huawei

# 监听文件变化且启用压缩
yarn build:quickapp-webview-huawei -watch
# vue3项目
yarn build:quickapp-webview-huawei -w
```

### 360 小程序

**编译命令**

```shell
# npm
npm run build:mp-360
npm run dev:mp-360

# yarn
yarn build:mp-360
yarn dev:mp-360

# 监听文件变化且启用压缩
yarn build:mp-360 --watch
```

可以自定义更多条件编译平台，比如钉钉小程序，参考[package.json 文档](https://uniapp.dcloud.io/collocation/package)。

## HBuilderX cli

开发者可以通过 cli 命令行指示 HBuilderX 进行启动、打包、登录等操作，详情参考：[https://hx.dcloud.net.cn/cli/README](https://hx.dcloud.net.cn/cli/README)
