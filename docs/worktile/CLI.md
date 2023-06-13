`uni-app`项目支持 `uni cli`和 `HBuilderX cli`两种脚手架工具：

- `uni cli`：面向非HBuilderX的用户（如习惯使用vscode/webstorm的开发者），提供创建项目、编译发行等能力；在App平台，仅支持生成离线打包的wgt资源包，不支持云端打包生成apk/ipa；若需云端打包，依然需要安装HBuilderX，使用`HBuilderX cli`；
- `HBuilderX cli`：面向HBuilderX用户的自动化工具，提供`uni-app`项目的持续集成能力；支持通过`HBuilderX cli`进行web打包、小程序打包、App云端打包、部署uniCloud等；但注意HBuilderX暂不支持linux平台。另外注意`HBuilderX cli`不基于npm，它是HBuilderX安装目录下的`cli.exe`。


提供有完整的`cli` 脚手架，可以通过 `vue-cli` 创建、运行、发行 `uni-app` 项目。

## uni cli

### [环境安装](/quickstart-cli.html#install-vue-cli)

### 编译运行

#### App 平台

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

Tips：
- vue2发布到App平台时，平台参数为`app-plus`；vue3发布到App平台时，平台参数为`app`；
- `uni cli`在App平台，仅支持生成离线打包的wgt资源包，不支持云端打包生成apk/ipa；若需云端打包，依然需要安装HBuilderX，使用`HBuilderX cli`。

#### H5

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

#### 微信小程序


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

#### 支付宝小程序

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

#### 百度小程序


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

#### 抖音小程序


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

#### 飞书小程序


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

#### QQ 小程序

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

#### 快手小程序


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

#### 快应用(webview)


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

#### 快应用联盟

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

#### 快应用华为

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

#### 360 小程序

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
