除了HBuilderX可视化界面，也可以使用 `cli` 脚手架，可以通过 `vue-cli` 创建 `uni-app` 项目。
In addition to the HBuilderX visual interface, you can also use `cli` scaffolding, and you can create an `uni-app` project through `vue-cli`.


## 环境安装 @install-vue-cli
## Environment installation @install-vue-cli

全局安装 vue-cli
Install vue-cli globally

```shell
npm install -g @vue/cli
```

## 创建uni-app
## Create uni-app

* 使用正式版（对应HBuilderX最新正式版）
* Use the official version (corresponding to the latest official version of HBuilderX)

  ```shell
  vue create -p dcloudio/uni-preset-vue my-project
  ```

* 使用alpha版（对应HBuilderX最新alpha版）
* Use the alpha version (corresponding to the latest alpha version of HBuilderX)

  ```shell
  vue create -p dcloudio/uni-preset-vue#alpha my-alpha-project
  ```

* 使用Vue3/Vite版
* Use Vue3/Vite version
  * 创建以 javascript 开发的工程（如命令行创建失败，请直接访问 [gitee](https://gitee.com/dcloud/uni-preset-vue/repository/archive/vite.zip) 下载模板）
  * Create a project developed with javascript (if the command line creation fails, please visit [gitee](https://gitee.com/dcloud/uni-preset-vue/repository/archive/vite.zip) to download the template directly)
    ```shell
    npx degit dcloudio/uni-preset-vue#vite my-vue3-project
    ```
    ```shell
    npx degit dcloudio/uni-preset-vue#vite-alpha my-vue3-project
    ```
  * 创建以 typescript 开发的工程（如命令行创建失败，请直接访问 [gitee](https://gitee.com/dcloud/uni-preset-vue/repository/archive/vite-ts.zip) 下载模板）
  * Create a project developed with typescript (if the command line fails to create, please visit [gitee](https://gitee.com/dcloud/uni-preset-vue/repository/archive/vite-ts.zip) directly to download the template)
    ```shell
    npx degit dcloudio/uni-preset-vue#vite-ts my-vue3-project
    ```

此时，会提示选择项目模板（使用Vue3/Vite版不会提示，目前只支持创建默认模板），初次体验建议选择 `hello uni-app` 项目模板，如下所示：
At this point, you will be prompted to select a project template (the Vue3/Vite version will not prompt, currently only the default template can be created). It is recommended to select the `hello uni-app` project template for the first experience, as shown below:

<div>
<img src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/h5-cli-01.png" width="300">
</div>

**注意**
**Notice**

- Vue3/Vite版要求 node 版本`^14.18.0 || >=16.0.0`
- Vue3/Vite version requires node version `^14.18.0 || >=16.0.0`
- 如果使用 HBuilderX（3.6.7以下版本）运行 Vue3/Vite 创建的最新的 cli 工程，需要在 HBuilderX 运行配置最底部设置 node路径 为自己本机高版本 node 路径（注意需要重启 HBuilderX 才可以生效）
- If you use HBuilderX (below version 3.6.7) to run the latest cli project created by Vue3/Vite, you need to set the node path at the bottom of the HBuilderX running configuration to your local version node path (note that you need to restart HBuilderX to take effect)
    * HBuilderX Mac 版本菜单栏左上角 HBuilderX->偏好设置->运行配置->node路径
    * HBuilderX Mac version menu bar upper left corner HBuilderX->Preferences->Run Configuration->node path
    * HBuilderX Windows 版本菜单栏 工具->设置->运行配置->node路径
    * HBuilderX Windows version menu bar Tools->Settings->Run Configuration->node path

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

#### 更新依赖到指定版本@cliversion

可以使用 [@dcloudio/uvm](https://www.npmjs.com/package/@dcloudio/uvm) 管理编译器的版本，此工具仅自动增加或更新 uni-app 编译器主要依赖，对于新增的编译命令（scripts）暂时不会自动处理，需手动参考新工程进行配置。
You can use [@dcloudio/uvm](https://www.npmjs.com/package/@dcloudio/uvm) to manage the version of the compiler. This tool only automatically adds or updates the main dependencies of the uni-app compiler. For new Compilation commands (scripts) of the command line will not be processed automatically for the time being, and need to be manually configured with reference to the new project.

* 更新到最新正式版
* Update to the latest official version
  ```shell
  npx @dcloudio/uvm@latest
  ```
* 更新到最新 Alpha 版
  ```shell
  npx @dcloudio/uvm@latest alpha
  ```
* 更新到正式版指定版本
* Update to the official version specified version
  ```shell
  npx @dcloudio/uvm@latest 3.2.0
  ```
  或
  ```shell
  npx @dcloudio/uvm@latest 3.2.12.20211029
  ```
* 更新到 Alpha 版指定版本
  ```shell
  npx @dcloudio/uvm@latest 3.2.0-alpha
  ```
  或
  ```shell
  npx @dcloudio/uvm@latest 3.2.14.20211112-alpha
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
|mp-alipay|Alipay Mini Program|
|mp-baidu|百度小程序|
|mp-baidu|Baidu Mini Program|
|mp-weixin|微信小程序|
|mp-toutiao|抖音小程序|
|mp-lark|飞书小程序|
|mp-lark|Feishu Mini Program|
|mp-qq|qq 小程序|
|mp-qq|qq applet|
|mp-360|360 小程序|
|mp-360|360 Mini Program|
|mp-kuaishou|快手小程序|
|mp-kuaishou|Kaishou Mini Program|
|mp-jd|京东小程序|
|mp-jd|JD Mini Program|
|mp-xhs|小红书小程序|
|mp-xhs|Xiaohongshu Mini Program|
|quickapp-webview|快应用(webview)|
|quickapp-webview|Quick App(webview)|
|quickapp-webview-union|快应用联盟|
|quickapp-webview-union|Quick App Union|
|quickapp-webview-huawei|快应用华为|
|quickapp-webview-huawei|Quick App Huawei|

可以自定义更多条件编译平台，比如钉钉小程序，参考[package.json文档](https://uniapp.dcloud.io/collocation/package)。
You can customize more conditional compilation platforms, such as DingTalk applet, refer to [package.json document](https://uniapp.dcloud.io/collocation/package).

## 运行并发布快应用@quickapp
## Run and publish the quick app @quickapp
快应用有两种开发方式，uni-app均支持：
There are two development methods for quick apps, both of which are supported by uni-app:
- 类小程序webview渲染方式：[https://ask.dcloud.net.cn/article/37182](https://ask.dcloud.net.cn/article/37182)
- Small program webview rendering method: [https://ask.dcloud.net.cn/article/37182](https://ask.dcloud.net.cn/article/37182)
- 原生渲染方式：[https://ask.dcloud.net.cn/article/37145](https://ask.dcloud.net.cn/article/37145)
- Native rendering method: [https://ask.dcloud.net.cn/article/37145](https://ask.dcloud.net.cn/article/37145)


#### 运行并发布快应用(webview)@quickapp-webview
#### Run and publish the quick app (webview) @quickapp-webview
HBuilderX 2.7.12+ 版支持
HBuilderX version 2.7.12+ support


#### 运行并发布快应用(webview)-华为@quickapp-webview-huawei
#### Run and publish a quick app (webview) - Huawei @quickapp-webview-huawei
HBuilderX 2.7.10+ 版支持
HBuilderX version 2.7.10+ support

华为快应用文档-小程序转快应用 [https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/quickapp-filestructure](https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/quickapp-filestructure)
Huawei Quick App Documentation - Mini Program Quick App [https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/quickapp-filestructure](https://developer.huawei.com/consumer/ cn/doc/development/quickApp-References/quickapp-filestructure)


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
    3. When performing [environment judgment](/worktile/running-env?id=%E5%88%A4%E6%96%AD%E5%B9%B3%E5%8F%B0), the dev mode process.env. The value of NODE_ENV is development, and the value of process.env.NODE_ENV in build mode is production.

## cli创建项目和HBuilderX可视化界面创建项目的区别@clidiff
## Difference between cli creation project and HBuilderX visual interface creation project @clidiff

- cli创建的项目，是传统的node项目结构。工程代码在src目录下，编译器在项目下，编译结果在dist目录下。
- The project created by cli is the traditional node project structure. The project code is in the src directory, the compiler is in the project, and the compilation result is in the dist directory.
- HBuilderX可视化创建的项目，是一种免node开发概念。工程代码在项目目录下，编译器在HBuilderX目录下而不是项目下，编译结果在项目的unpackage目录下。
- The project created visually by HBuilderX is a node-free development concept. The project code is in the project directory, the compiler is in the HBuilderX directory instead of the project, and the compilation result is in the unpackage directory of the project.

有些习惯了cli的开发者，使用HBuilderX可视化模式时不适应。讲解下它们的差别以及为什么HBuilderX提供了多种方式。
Some developers who are accustomed to cli are not comfortable when using the HBuilderX visualization mode. Explain their differences and why HBuilderX provides multiple ways.

### cli创建的项目，也可以拖入HBuilderX编辑
### The project created by cli can also be dragged into HBuilderX for editing

首先HBuilderX作为通用编辑器，兼容传统的cli方式开发。不止uni-app的cli，其他框架的cli也可以拖入HBuilderX。
First of all, as a general editor, HBuilderX is compatible with traditional cli development. Not only the cli of uni-app, but also the cli of other frameworks can be dragged into HBuilderX.

也就是HBuilderX里可以使用可视化界面创建项目，也可以使用cli命令行创建项目，都可以达到和uni-app更好协作的目的。比如pages.json跳转和提示、manifest可视化界面、条件编译、rpx等css单位...众多 for uni-app 的优化都可以使用。
That is to say, you can use the visual interface to create projects in HBuilderX, or you can use the cli command line to create projects, which can achieve the purpose of better collaboration with uni-app. Such as pages.json jumps and prompts, manifest visual interface, conditional compilation, rpx and other css units... Many optimizations for uni-app can be used.

这些是HBuilderX的特点，和项目结构无关。
These are the characteristics of HBuilderX and have nothing to do with the project structure.

### 如想用其他ide开发uni-app，只能使用cli模式
### If you want to develop uni-app with other IDEs, you can only use cli mode

很好理解。因为其他ide没有内置uni-app的编译器，所以其他ide开发uni-app，只能把编译器安装在项目下，也就是cli创建的项目格式。
Well understood. Because other IDEs do not have built-in uni-app compilers, other IDEs develop uni-apps and can only install the compiler under the project, which is the project format created by cli.

cli项目可以使用多种ide开发，但ide之间有区别：
CLI projects can be developed using a variety of IDEs, but there are differences between IDEs:
- HBuilderX为uni-app做了大量优化，其他ide搭配uni-app使用也可以用，但没有为uni-app优化过
- HBuilderX has done a lot of optimization for uni-app, other IDEs can also be used with uni-app, but not optimized for uni-app
- 其他ide没有uni-app的app和uniCloud的运行、调试工具。这些工具在HBuilderX里。如开发app和uniCloud，必须使用HBuilderX。
- Other IDEs do not have uni-app apps and uniCloud running and debugging tools. These tools are in HBuilderX. For developing apps and uniCloud, HBuilderX must be used.

### 可视化方式的区别
### Differences in visualization methods

HBuilderX可视化创建、运行、发布项目，底层调用的也是npm的run、build等命令。只是编译器不在项目下，而是在HBuilderX的目录下。
HBuilderX creates, runs, and publishes projects visually, and the underlying calls are also npm's run, build and other commands. It's just that the compiler is not under the project, but in the directory of HBuilderX.

### 为什么要提供HBuilderX可视化模式
### Why provide HBuilderX visualization mode

1. 为了提升易用性，较低门槛
1. In order to improve ease of use, lower threshold

很多开发者对node不熟悉、对命令行有心理抵触。不要想当然认为所有开发者都会node，HBuilder有几百万开发者，其中掌握node的开发者连一半都占不到。
Many developers are unfamiliar with node and have psychological resistance to the command line. Don't take it for granted that all developers can use node. HBuilder has millions of developers, and less than half of them master node.

2. npm、github网络经常出问题
2. Frequent problems with npm and github networks

使用cli创建项目时，cli需要从npm安装，预置的项目模板选择从github下载，这些经常因为网络问题卡壳。可视化创建项目不存在这个问题。
When using cli to create a project, cli needs to be installed from npm, and the preset project template can be downloaded from github. These are often stuck due to network problems. Visually created projects do not have this problem.

3. 每个uni-app项目下都有一套编译器太麻烦
3. It is too troublesome to have a set of compilers under each uni-app project

一个HBuilderX的开发者有非常多个uni-app项目，如果每个项目下放一套编译器，会有很多不合理：
An HBuilderX developer has a lot of uni-app projects. If each project decentralizes a set of compilers, there will be many unreasonable:
	- 创建项目会非常慢
	- Creating projects can be very slow
	- 非常占用磁盘空间（uni-app的编译器有数万个文件）
	- Very disk space intensive (uni-app's compiler has tens of thousands of files)
	- 升级麻烦，兼容性问题多。cli项目下的编译器不会跟随HBuilderX升级而升级，只能开发者手敲npm命令升级。当HBuilderX升级后，有的uni-app项目的编译器未升级，有的升级了，报错时开发者很容易懵圈，给DCloud报bug时DCloud也懵圈。让ide版本、编译器版本、uni-app运行时这3者的版本保持一致，会减少非常多的问题。
	- It is troublesome to upgrade, and there are many compatibility problems. The compiler under the cli project will not be upgraded with the upgrade of HBuilderX, and only the developer can upgrade by typing the npm command. When HBuilderX is upgraded, the compilers of some uni-app projects have not been upgraded, while others have been upgraded. Developers are easily confused when reporting errors, and DCloud is also confused when reporting bugs to DCloud. Keeping the ide version, compiler version, and uni-app runtime version consistent will reduce a lot of problems.

把编译器内置到HBuilderX中，开发者创建项目时只需关心自己的业务代码，工程结构干净清爽。
The compiler is built into HBuilderX, developers only need to care about their own business code when creating a project, and the project structure is clean and refreshing.

各家小程序也都是这么做的，编译器在小程序开发工具里，创建项目时不会在项目下带一套编译器（小程序也是要把wxml等编译为js的）。
Every applet also does this. The compiler is in the applet development tool. When creating a project, it will not bring a set of compilers under the project (the applet also needs to compile wxml into js).

4. less、scss、ts等编译器的自动安装
4. Automatic installation of less, scss, ts and other compilers

- 如果使用cli项目，那么less、scss、ts等编译器需要自己手动敲npm命令安装。由于DCloud官方不会和每种预编译器的每个版本都做兼容性测试，如果你使用了较低的预编译器版本，可能会无法正常运行，这需要你自己排查
- If you use the cli project, compilers such as less, scss, and ts need to be installed manually by typing the npm command. Since DCloud officially does not do compatibility testing with each version of each precompiler, if you use a lower precompiler version, it may not work properly, you need to check it yourself
- 如果使用HBuilderX可视化创建项目，这些编译器会按需自动安装，并且是DCloud官方测试过版本兼容性的。开发者只需在你的代码中使用这些预编译技术，剩下的HBuilderX会自动搞定。
- If you use HBuilderX to create a project visually, these compilers will be automatically installed on demand, and DCloud has officially tested version compatibility. Developers only need to use these pre-compilation techniques in your code, and HBuilderX will take care of the rest automatically.

5. 可视化更高效
5. Visualization is more efficient

HBuilderX提供的免node开发，除了易用，还更高效。
The node-free development provided by HBuilderX is not only easy to use, but also more efficient.

- 新建项目：`Ctrl+N`
- New project: `Ctrl+N`
- 运行项目：`Ctrl+R`
- Run the project: `Ctrl+R`
- 发行项目：`Ctrl+U`
- Release item: `Ctrl+U`

这比启动终端，移动焦点到终端窗口，敲命令快多了。
This is much faster than starting the terminal, moving the focus to the terminal window, and typing commands.

在uni-app中，终端命令比传统web开发要多、要长，还要敲运行平台参数的，选择你要运行到web还是app或某家小程序。
In uni-app, the terminal commands are more and longer than traditional web development, and you need to type the platform parameters to choose whether you want to run to the web or an app or a small program.

综上，
To sum up,

如果你习惯node，也能接受和管理好每个项目下一套编译器的方式，清楚上述利弊，那你可以选择cli创建项目。
If you are used to node, you can also accept and manage the way of a set of compilers under each project, and know the above pros and cons, then you can choose cli to create a project.

至于ide，肯定还是HBuilderX搭配uni-app开发更高效。
As for ide, it is definitely more efficient to develop HBuilderX with uni-app.

如果你习惯其他ide，开发uni-app低效也无所谓，那也可以用其他ide。但注意至少运行调试app和uniCloud时，还得把HBuilderX开着，就像开着微信小程序工具调试那样。
If you are used to other IDEs and it doesn't matter if developing uni-apps is inefficient, you can use other IDEs too. But note that at least when running the debugging app and uniCloud, you have to open HBuilderX, just like opening the WeChat applet tool for debugging.

在DCloud内部，uni-app和HBuilderX是不同的团队。
Inside DCloud, uni-app and HBuilderX are different teams.

- 对于uni-app来说，它面对所有ide一视同仁。它兼容node生态，支持d.ts语法提示
- For uni-app, it treats all IDEs equally. It is compatible with node ecology and supports d.ts syntax hints
- 对于HBuilderX来说，uni-app是一等公民。HBuilderX为uni-app做了很多优化
- For HBuilderX, uni-app is a first class citizen. HBuilderX does a lot of optimizations for uni-app

### 其他注意事项
### Other Notes

* `cli` 创建的项目，编译器安装在项目下。并且不会跟随HBuilderX升级。如需升级编译器，可以参考：[更新依赖到指定版本](/quickstart-cli.html#cliversion)。
* 已经使用`cli`创建的项目，如果想继续在HBuilderX里使用，可以把工程拖到HBuilderX中。注意如果是把整个项目拖入HBuilderX，则编译时走的是项目下的编译器。如果是把src目录拖入到HBuilderX中，则走的是HBuilderX安装目录下plugin目录下的编译器。
* `cli`创建的项目，内置了d.ts，同其他常规npm库一样，可在[vscode](https://ask.dcloud.net.cn/article/36286)、[webstorm](https://ask.dcloud.net.cn/article/36307)等支持d.ts的开发工具里正常开发并有语法提示。
* 使用HBuilderX创建的项目不带d.ts，HBuilderX内置了uni-app语法提示库。如需把HBuilderX创建的项目在其他编辑器打开并且补充d.ts，可以在项目下先执行 `npm init`，然后`npm i @dcloudio/types -D`，来补充d.ts。
* HBuilderX创建的项目，一样可以使用npm，参考：[NPM 支持](/tutorial/page-script?id=npm支持)
* Projects created by HBuilderX can also use npm, reference: [NPM support](/tutorial/page-script?id=npm%E6%94%AF%E6%8C%81)
* vscode等其他开发工具，在vue或uni-app领域，开发效率比不过HBuilderX。详见：[https://ask.dcloud.net.cn/article/35451](https://ask.dcloud.net.cn/article/35451)
* Other development tools such as vscode, in the field of vue or uni-app, the development efficiency is not as good as HBuilderX. For details, see: [https://ask.dcloud.net.cn/article/35451](https://ask.dcloud.net.cn/article/35451)
* 发布App时，仍然需要使用HBuilderX。其他开发工具无法发布App，但可以发布H5、各种小程序。如需开发App，可以先在HBuilderX里运行起来，然后在其他编辑器里修改保存代码，代码修改后会自动同步到手机基座。
* You still need to use HBuilderX when publishing your app. Other development tools cannot publish apps, but they can publish H5 and various small programs. If you need to develop an App, you can run it in HBuilderX first, and then modify and save the code in other editors. After the code is modified, it will be automatically synchronized to the mobile phone base.
* 如果使用``cli``创建项目，HBuilderX插件列表中的uni-app编译器可以不安装
* If you use ``cli`` to create a project, the uni-app compiler in the HBuilderX plugin list can not be installed
* 对 `cli` 使用有疑问，欢迎扫码加入 uni-app 微信交流群讨论：
* If you have any questions about the use of `cli`, please scan the code to join the uni-app WeChat exchange group discussion:
    <br/><img src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/wx-barcode.png" width="250"/>
