
除了HBuilderX可视化界面，也可以使用 `cli` 脚手架，可以通过 `vue-cli` 创建 `uni-app` 项目。
In addition to the HBuilderX visual interface, you can also use `cli` scaffolding, and you can create an `uni-app` project through `vue-cli`.


## 环境安装 @install-vue-cli

全局安装vue-cli
Globally installed vue-cli

```shell
npm install -g @vue/cli@4
```

## 创建uni-app
## Create uni-app

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

#### 自定义模板
#### Custom templates
选择自定义模板时，需要填写 uni-app 模板地址，这个地址其实就是托管在云端的仓库地址。以 GitHub 为例，地址格式为 `userName/repositoryName`，如 `dcloudio/uni-template-picture` 就是下载图片模板。
When choosing a custom template, you need to fill in the uni-app template address, which is actually the address of the repository hosted in the Cloud. Take GitHub as an example, the address format is `userName/repositoryName`, such as `dcloudio/uni-template-picture` is to download the image template.

更多支持的下载方式，请参考这个插件的说明：[download-git-repo](https://www.npmjs.com/package/download-git-repo)
For more supported download methods, please refer to the description of this plug-in: [download-git-repo](https://www.npmjs.com/package/download-git-repo)

#### 国内特殊情况
#### Special cases in China
模板项目存放于 Github，由于国内网络环境问题，可能下载失败。针对此问题可以尝试如下措施：
The template project is stored in Github. The download may fail due to network problems in China. To solve this problem, the following measures can be taken:
* 更换网络重试，比如使用 4g 网络
* Change the network and retry, such as using 4g network
* 在设备或路由器的网络设置中增加 DNS（如：8.8.8.8）
* Add DNS (e.g.: 8.8.8.8) to the network settings of the device or router
* 在设备中增加固定的 hosts（如：140.82.113.4 github.com）
* Add fixed hosts (e.g.: 140.82.113.4 github.com) to the equipment

#### 修改依赖为指定版本@cliversion

可以使用 [@dcloudio/uvm](https://www.npmjs.com/package/@dcloudio/uvm) 管理编译器的版本：

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
  npx @dcloudio/uvm 3.2.12.20211029
  ```
* 更新到 alpha 版指定版本
  ```shell
  npx @dcloudio/uvm 3.2.14.20211112-alpha
  ```

## 运行、发布uni-app
## Run and release uni-app

```shell
npm run dev:%PLATFORM%
npm run build:%PLATFORM%
```

``%PLATFORM%`` 可取值如下：
The possible values of `%PLATFORM%` are as follows:

|值|平台|
| Value| Platform|
|---|---|
|app-plus|app平台生成打包资源（支持npm run build:app-plus，可用于持续集成。不支持run，运行调试仍需在HBuilderX中操作）|
|h5|H5|
|mp-alipay|支付宝小程序|
|mp-baidu|百度小程序|
|mp-weixin|微信小程序|
|mp-toutiao|字节跳动小程序|
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
**Others:**

* 目前使用`npm run build:app-plus`会在`/dist/build/app-plus`下生成app打包资源。如需制作wgt包，将`app-plus`中的文件压缩成zip（注意：不要包含`app-plus目录`），再重命名为`${appid}.wgt`， `appid`为`manifest.json`文件中的`appid`。
* Currently using `npm run build:app-plus` will generate app packaging resources under `/dist/build/app-plus`. To make a wgt package, compress the files in `app-plus` into zip (note: do not include `app-plus directory`), and rename it to `${appid}.wgt`. `appid` is the `appid` in `manifest.json` file.
* dev 模式编译出的各平台代码存放于根目录下的 ``/dist/dev/``目录，打开各平台开发工具选择对应平台目录即可进行预览（h5 平台不会在此目录，存在于缓存中）；
* The code for each platform compiled in dev mode is stored in the `/dist/dev/` directory under the root directory. Open the development tools of each platform and select the corresponding platform directory to preview (the h5 platform will not be in this directory, but will exist in the cache);
* build 模式编译出的各平台代码存放于根目录下的 ``/dist/build/`` 目录，发布时选择此目录进行发布；
* The code for each platform compiled in build mode is stored in the `/dist/build/` directory under the root directory, and this directory is selected for publishing when publishing;
* dev 和 build 模式的区别：
* Differences between dev and build mode:
    1. dev 模式有 SourceMap 可以方便的进行断点调试；
    1. dev mode has SourceMap for easy breakpoint debugging;
    2. build 模式会将代码进行压缩，体积更小更适合发布为正式版应用；
    2. build mode will compress the code to be smaller and more suitable for releasing as official application;
    3. 进行 [环境判断](/worktile/running-env?id=判断平台) 时，dev 模式 process.env.NODE_ENV 的值为 development，build 模式 process.env.NODE_ENV 的值为 production。

## 使用cli创建项目和使用HBuilderX可视化界面创建项目有什么区别
## What is the difference between creating a project using the cli and creating a project using the HBuilderX visual interface?

#### 编译器的区别
#### Differences among compilers

* ``cli`` 创建的项目，编译器安装在项目下。并且不会跟随HBuilderX升级。如需升级编译器，可以使用 [@dcloudio/uvm](https://www.npmjs.com/package/@dcloudio/uvm) 管理编译器的版本，如 ```npx @dcloudio/uvm```。
* HBuilderX可视化界面创建的项目，编译器在HBuilderX的安装目录下的plugin目录，随着HBuilderX的升级会自动升级编译器。
* The project created by the visual interface of HBuilderX and the plugin directory of the compiler in the installation directory of HBuilderX will automatically upgrade the compiler with the upgrade of HBuilderX.
* 已经使用``cli``创建的项目，如果想继续在HBuilderX里使用，可以把工程拖到HBuilderX中。注意如果是把整个项目拖入HBuilderX，则编译时走的是项目下的编译器。如果是把src目录拖入到HBuilderX中，则走的是HBuilderX安装目录下plugin目录下的编译器。
* If you want to continue using the project created with `cli` in HBuilderX, you can drag the project to HBuilderX. Note that if the whole project is dragged into HBuilderX, the compiler under the project will be used when compiling. If the src directory is dragged into HBuilderX, the compiler in plugin directory under HBuilderX installation directory will be used.
* ``cli``版如果想安装less、scss、ts等编译器，需自己手动npm安装。在HBuilderX的插件管理界面安装无效，那个只作用于HBuilderX创建的项目。
* If you want to install less, scss, ts and other compilers in the `cli` version, you need to manually install them with npm. Installation of plug-in management interface in HBuilderX is invalid, and that only works on projects created by HBuilderX.
 
#### 开发工具的区别
#### Differences among development tools
* ``cli``创建的项目，内置了d.ts，同其他常规npm库一样，可在[vscode](https://ask.dcloud.net.cn/article/36286)、[webstorm](https://ask.dcloud.net.cn/article/36307)等支持d.ts的开发工具里正常开发并有语法提示。
* The project created by `cli` has built-in d.ts. Like other regular npm libraries, it can be normally developed in [vscode](https://ask.dcloud.net.cn/article/36286), [webstorm](https://ask.dcloud.net.cn/article/36307) development tools that support d.ts and there are grammar hints.
* 使用HBuilderX创建的项目不带d.ts，HBuilderX内置了uni-app语法提示库。如需把HBuilderX创建的项目在其他编辑器打开并且补充d.ts，可以在项目下先执行 ``npm init``，然后``npm i @types/uni-app -D``，来补充d.ts。
* Projects created with HBuilderX are not suffixed with d.ts. HBuilderX has a built-in uni-app syntax prompt library. If you need to open the project created by HBuilderX in other editors and add d.ts, you can first execute `npm init` and then `npm i @types/uni-app -D` under the project to add d.ts.
* 但vscode等其他开发工具，在vue或uni-app领域，开发效率比不过HBuilderX。详见：[https://ask.dcloud.net.cn/article/35451](https://ask.dcloud.net.cn/article/35451)
* However, other development tools, such as vscode, are less efficient than HBuilderX in vue or uni-app fields. For details, please see: [https://ask.dcloud.net.cn/article/35451](https://ask.dcloud.net.cn/article/35451)
* 发布App时，仍然需要使用HBuilderX。其他开发工具无法发布App，但可以发布H5、各种小程序。如需开发App，可以先在HBuilderX里运行起来，然后在其他编辑器里修改保存代码，代码修改后会自动同步到手机基座。
* 如果使用``cli``创建项目，那下载HBuilderX时只需下载23.31M的标准版即可。因为编译器已经安装到项目下了。
* 对 `cli` 使用有疑问，欢迎扫码加入 uni-app 微信交流群讨论：
    <br/><img src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/wx-barcode.png" width="250"/>

注意：HBuilderX创建的项目，一样可以使用npm，参考：[NPM 支持](/tutorial/page-script?id=npm支持)
