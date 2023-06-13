除了HBuilderX可视化界面，也可以使用 `cli` 脚手架，可以通过 `vue-cli` 创建 `uni-app` 项目。


## 环境安装 @install-vue-cli

全局安装 vue-cli

```shell
npm install -g @vue/cli
```

## 创建uni-app

* 使用正式版（对应HBuilderX最新正式版）

  ```shell
  vue create -p dcloudio/uni-preset-vue my-project
  ```

* 使用alpha版（对应HBuilderX最新alpha版）

  ```shell
  vue create -p dcloudio/uni-preset-vue#alpha my-alpha-project
  ```

* 使用Vue3/Vite版
  * 创建以 javascript 开发的工程（如命令行创建失败，请直接访问 [gitee](https://gitee.com/dcloud/uni-preset-vue/repository/archive/vite.zip) 下载模板）
    ```shell
    npx degit dcloudio/uni-preset-vue#vite my-vue3-project
    ```
  * 创建以 typescript 开发的工程（如命令行创建失败，请直接访问 [gitee](https://gitee.com/dcloud/uni-preset-vue/repository/archive/vite-ts.zip) 下载模板）
    ```shell
    npx degit dcloudio/uni-preset-vue#vite-ts my-vue3-project
    ```

此时，会提示选择项目模板（使用Vue3/Vite版不会提示，目前只支持创建默认模板），初次体验建议选择 `hello uni-app` 项目模板，如下所示：

<div>
<img src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/h5-cli-01.png" width="300">
</div>

**注意**

- Vue3/Vite版要求 node 版本`^14.18.0 || >=16.0.0`
- 如果使用 HBuilderX（3.6.7以下版本）运行 Vue3/Vite 创建的最新的 cli 工程，需要在 HBuilderX 运行配置最底部设置 node路径 为自己本机高版本 node 路径（注意需要重启 HBuilderX 才可以生效）
    * HBuilderX Mac 版本菜单栏左上角 HBuilderX->偏好设置->运行配置->node路径
    * HBuilderX Windows 版本菜单栏 工具->设置->运行配置->node路径

#### 自定义模板
选择自定义模板时，需要填写 uni-app 模板地址，这个地址其实就是托管在云端的仓库地址。以 GitHub 为例，地址格式为 `userName/repositoryName`，如 `dcloudio/uni-template-picture` 就是下载图片模板。

更多支持的下载方式，请参考这个插件的说明：[download-git-repo](https://www.npmjs.com/package/download-git-repo)

#### 国内特殊情况
模板项目存放于 Github，由于国内网络环境问题，可能下载失败。针对此问题可以尝试如下措施：
* 更换网络重试，比如使用 4g 网络
* 在设备或路由器的网络设置中增加 DNS（如：8.8.8.8）
* 在设备中增加固定的 hosts（如：140.82.113.4 github.com）

#### 更新依赖到指定版本@cliversion

可以使用 [@dcloudio/uvm](https://www.npmjs.com/package/@dcloudio/uvm) 管理编译器的版本，此工具仅自动增加或更新 uni-app 编译器主要依赖，对于新增的编译命令（scripts）暂时不会自动处理，需手动参考新工程进行配置。

* 更新到最新正式版
  ```shell
  npx @dcloudio/uvm
  ```
* 更新到最新 alpha 版
  ```shell
  npx @dcloudio/uvm alpha
  ```
* 更新到正式版指定版本
  ```shell
  npx @dcloudio/uvm 3.2.0
  ```
  或
  ```shell
  npx @dcloudio/uvm 3.2.12.20211029
  ```
* 更新到 alpha 版指定版本
  ```shell
  npx @dcloudio/uvm 3.2.0-alpha
  ```
  或
  ```shell
  npx @dcloudio/uvm 3.2.14.20211112-alpha
  ```

## 运行、发布uni-app

```shell
npm run dev:%PLATFORM%
npm run build:%PLATFORM%
```

``%PLATFORM%`` 可取值如下：

|值|平台|
|---|---|
|app-plus|app平台生成打包资源（支持npm run build:app-plus，可用于持续集成。不支持run，运行调试仍需在HBuilderX中操作）|
|h5|H5|
|mp-alipay|支付宝小程序|
|mp-baidu|百度小程序|
|mp-weixin|微信小程序|
|mp-toutiao|抖音小程序|
|mp-lark|飞书小程序|
|mp-qq|qq 小程序|
|mp-360|360 小程序|
|mp-kuaishou|快手小程序|
|mp-jd|京东小程序|
|mp-xhs|小红书小程序|
|quickapp-webview|快应用(webview)|
|quickapp-webview-union|快应用联盟|
|quickapp-webview-huawei|快应用华为|

可以自定义更多条件编译平台，比如钉钉小程序，参考[package.json文档](https://uniapp.dcloud.io/collocation/package)。

## 运行并发布快应用@quickapp
快应用有两种开发方式，uni-app均支持：
- 类小程序webview渲染方式：[https://ask.dcloud.net.cn/article/37182](https://ask.dcloud.net.cn/article/37182)
- 原生渲染方式：[https://ask.dcloud.net.cn/article/37145](https://ask.dcloud.net.cn/article/37145)


#### 运行并发布快应用(webview)@quickapp-webview
HBuilderX 2.7.12+ 版支持


#### 运行并发布快应用(webview)-华为@quickapp-webview-huawei
HBuilderX 2.7.10+ 版支持

华为快应用文档-小程序转快应用 [https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/quickapp-filestructure](https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/quickapp-filestructure)


**其他：**

* 目前使用`npm run build:app-plus`会在`/dist/build/app-plus`下生成app打包资源。如需制作wgt包，将`app-plus`中的文件压缩成zip（注意：不要包含`app-plus目录`），再重命名为`${appid}.wgt`， `appid`为`manifest.json`文件中的`appid`。
* dev 模式编译出的各平台代码存放于根目录下的 ``/dist/dev/``目录，打开各平台开发工具选择对应平台目录即可进行预览（h5 平台不会在此目录，存在于缓存中）；
* build 模式编译出的各平台代码存放于根目录下的 ``/dist/build/`` 目录，发布时选择此目录进行发布；
* dev 和 build 模式的区别：
    1. dev 模式有 SourceMap 可以方便的进行断点调试；
    2. build 模式会将代码进行压缩，体积更小更适合发布为正式版应用；
    3. 进行 [环境判断](/worktile/running-env?id=判断平台) 时，dev 模式 process.env.NODE_ENV 的值为 development，build 模式 process.env.NODE_ENV 的值为 production。

## cli创建项目和HBuilderX可视化界面创建项目的区别@clidiff

- cli创建的项目，是传统的node项目结构。工程代码在src目录下，编译器在项目下，编译结果在dist目录下。
- HBuilderX可视化创建的项目，是一种免node开发概念。工程代码在项目目录下，编译器在HBuilderX目录下而不是项目下，编译结果在项目的unpackage目录下。

有些习惯了cli的开发者，使用HBuilderX可视化模式时不适应。讲解下它们的差别以及为什么HBuilderX提供了多种方式。

### cli创建的项目，也可以拖入HBuilderX编辑

首先HBuilderX作为通用编辑器，兼容传统的cli方式开发。不止uni-app的cli，其他框架的cli也可以拖入HBuilderX。

也就是HBuilderX里可以使用可视化界面创建项目，也可以使用cli命令行创建项目，都可以达到和uni-app更好协作的目的。比如pages.json跳转和提示、manifest可视化界面、条件编译、rpx等css单位...众多 for uni-app 的优化都可以使用。

这些是HBuilderX的特点，和项目结构无关。

### 如想用其他ide开发uni-app，只能使用cli模式

很好理解。因为其他ide没有内置uni-app的编译器，所以其他ide开发uni-app，只能把编译器安装在项目下，也就是cli创建的项目格式。

cli项目可以使用多种ide开发，但ide之间有区别：
- HBuilderX为uni-app做了大量优化，其他ide搭配uni-app使用也可以用，但没有为uni-app优化过
- 其他ide没有uni-app的app和uniCloud的运行、调试工具。这些工具在HBuilderX里。如开发app和uniCloud，必须使用HBuilderX。

### 可视化方式的区别

HBuilderX可视化创建、运行、发布项目，底层调用的也是npm的run、build等命令。只是编译器不在项目下，而是在HBuilderX的目录下。

### 为什么要提供HBuilderX可视化模式

1. 为了提升易用性，较低门槛

很多开发者对node不熟悉、对命令行有心理抵触。不要想当然认为所有开发者都会node，HBuilder有几百万开发者，其中掌握node的开发者连一半都占不到。

2. npm、github网络经常出问题

使用cli创建项目时，cli需要从npm安装，预置的项目模板选择从github下载，这些经常因为网络问题卡壳。可视化创建项目不存在这个问题。

3. 每个uni-app项目下都有一套编译器太麻烦

一个HBuilderX的开发者有非常多个uni-app项目，如果每个项目下放一套编译器，会有很多不合理：
	- 创建项目会非常慢
	- 非常占用磁盘空间（uni-app的编译器有数万个文件）
	- 升级麻烦，兼容性问题多。cli项目下的编译器不会跟随HBuilderX升级而升级，只能开发者手敲npm命令升级。当HBuilderX升级后，有的uni-app项目的编译器未升级，有的升级了，报错时开发者很容易懵圈，给DCloud报bug时DCloud也懵圈。让ide版本、编译器版本、uni-app运行时这3者的版本保持一致，会减少非常多的问题。

把编译器内置到HBuilderX中，开发者创建项目时只需关心自己的业务代码，工程结构干净清爽。

各家小程序也都是这么做的，编译器在小程序开发工具里，创建项目时不会在项目下带一套编译器（小程序也是要把wxml等编译为js的）。

4. less、scss、ts等编译器的自动安装

- 如果使用cli项目，那么less、scss、ts等编译器需要自己手动敲npm命令安装。由于DCloud官方不会和每种预编译器的每个版本都做兼容性测试，如果你使用了较低的预编译器版本，可能会无法正常运行，这需要你自己排查
- 如果使用HBuilderX可视化创建项目，这些编译器会按需自动安装，并且是DCloud官方测试过版本兼容性的。开发者只需在你的代码中使用这些预编译技术，剩下的HBuilderX会自动搞定。

5. 可视化更高效

HBuilderX提供的免node开发，除了易用，还更高效。

- 新建项目：`Ctrl+N`
- 运行项目：`Ctrl+R`
- 发行项目：`Ctrl+U`

这比启动终端，移动焦点到终端窗口，敲命令快多了。

在uni-app中，终端命令比传统web开发要多、要长，还要敲运行平台参数的，选择你要运行到web还是app或某家小程序。

综上，

如果你习惯node，也能接受和管理好每个项目下一套编译器的方式，清楚上述利弊，那你可以选择cli创建项目。

至于ide，肯定还是HBuilderX搭配uni-app开发更高效。

如果你习惯其他ide，开发uni-app低效也无所谓，那也可以用其他ide。但注意至少运行调试app和uniCloud时，还得把HBuilderX开着，就像开着微信小程序工具调试那样。

在DCloud内部，uni-app和HBuilderX是不同的团队。

- 对于uni-app来说，它面对所有ide一视同仁。它兼容node生态，支持d.ts语法提示
- 对于HBuilderX来说，uni-app是一等公民。HBuilderX为uni-app做了很多优化

### 其他注意事项

* `cli` 创建的项目，编译器安装在项目下。并且不会跟随HBuilderX升级。如需升级编译器，可以参考：[更新依赖到指定版本](/quickstart-cli.html#cliversion)。
* 已经使用`cli`创建的项目，如果想继续在HBuilderX里使用，可以把工程拖到HBuilderX中。注意如果是把整个项目拖入HBuilderX，则编译时走的是项目下的编译器。如果是把src目录拖入到HBuilderX中，则走的是HBuilderX安装目录下plugin目录下的编译器。
* `cli`创建的项目，内置了d.ts，同其他常规npm库一样，可在[vscode](https://ask.dcloud.net.cn/article/36286)、[webstorm](https://ask.dcloud.net.cn/article/36307)等支持d.ts的开发工具里正常开发并有语法提示。
* 使用HBuilderX创建的项目不带d.ts，HBuilderX内置了uni-app语法提示库。如需把HBuilderX创建的项目在其他编辑器打开并且补充d.ts，可以在项目下先执行 `npm init`，然后`npm i @dcloudio/types -D`，来补充d.ts。
* HBuilderX创建的项目，一样可以使用npm，参考：[NPM 支持](/tutorial/page-script?id=npm支持)
* vscode等其他开发工具，在vue或uni-app领域，开发效率比不过HBuilderX。详见：[https://ask.dcloud.net.cn/article/35451](https://ask.dcloud.net.cn/article/35451)
* 发布App时，仍然需要使用HBuilderX。其他开发工具无法发布App，但可以发布H5、各种小程序。如需开发App，可以先在HBuilderX里运行起来，然后在其他编辑器里修改保存代码，代码修改后会自动同步到手机基座。
* 如果使用``cli``创建项目，HBuilderX插件列表中的uni-app编译器可以不安装
* 对 `cli` 使用有疑问，欢迎扫码加入 uni-app 微信交流群讨论：
    <br/><img src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/wx-barcode.png" width="250"/>
