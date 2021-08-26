
> `uni-app`支持通过 可视化界面、[`vue-cli`命令行](https://uniapp.dcloud.io/quickstart?id=%e9%80%9a%e8%bf%87vue-cli%e5%91%bd%e4%bb%a4%e8%a1%8c) 两种方式快速创建项目。


### 1. 通过 HBuilderX 可视化界面

可视化的方式比较简单，HBuilderX内置相关环境，开箱即用，无需配置nodejs。

开始之前，开发者需先下载安装如下工具：

- HBuilderX：[官方IDE下载地址](https://www.dcloud.io/hbuilderx.html)

HBuilderX是通用的前端开发工具，但为`uni-app`做了特别强化。

下载App开发版，可开箱即用；如下载标准版，在运行或发行`uni-app`时，会提示安装`uni-app`插件，插件下载完成后方可使用。

如使用`cli`方式创建项目，可直接下载标准版，因为uni-app编译插件被安装到项目下了。


## 创建uni-app

在点击工具栏里的文件 -> 新建 -> 项目：
<div align=center>
  <img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/c16d8d70-4f37-11eb-8a36-ebb87efcf8c0.png"/>
</div>

选择`uni-app`类型，输入工程名，选择模板，点击创建，即可成功创建。

uni-app自带的模板有 Hello uni-app ，是官方的组件和API示例。还有一个重要模板是 uni ui项目模板，日常开发推荐使用该模板，已内置大量常用组件。

<div align=center>
  <img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/c0966750-4f37-11eb-97b7-0dc4655d6e68.png"/>
</div>

## 运行uni-app
1. 浏览器运行：进入hello-uniapp项目，点击工具栏的运行 -> 运行到浏览器 -> 选择浏览器，即可在浏览器里面体验uni-app 的 H5 版。
  <div align=center>
  	<img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/c2808410-4f37-11eb-97b7-0dc4655d6e68.png"/>
  </div>

2. 真机运行：连接手机，开启USB调试，进入hello-uniapp项目，点击工具栏的运行 -> 真机运行 -> 选择运行的设备，即可在该设备里面体验uni-app。
	<div align=center>
		<img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/c371c1e0-4f37-11eb-97b7-0dc4655d6e68.png"/>
	</div>
	
	如手机无法识别，请点击菜单运行-运行到手机或模拟器-真机运行常见故障排查指南。
	注意目前开发App也需要安装微信开发者工具。
	
运行的快捷键是`Ctrl+r`。
HBuilderX 还提供了快捷运行菜单，可以按数字快速选择要运行的设备：
<div align=center>
	<img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/aef21b70-4f37-11eb-a16f-5b3e54966275.png"/>
</div>

如需调试，可参考：[uni-app调试](/snippet?id=使用-chrome-调试)

## 发布uni-app

### 打包为原生App（云端）

在HBuilderX工具栏，点击发行，选择原生app-云端打包，如下图：

<div align=center>
  <img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/b8332fd0-4f37-11eb-8ff1-d5dcf8779628.png"/>
</div>
出现如下界面，点击打包即可。
<div align=center>
  <img style="max-width:600px;" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/001a20b0-d85a-11ea-81ea-f115fe74321c.png"/>
</div>

### 打包为原生App（离线）

``uni-app`` 支持离线打包，在 HBuilderX 发行菜单里生成离线打包资源，然后参考离线打包文档操作，可以从HBuilderX的发行菜单里找到文档链接，也可以直接访问：[https://nativesupport.dcloud.net.cn/AppDocs/README](https://nativesupport.dcloud.net.cn/AppDocs/README)。

在HBuilderX工具栏，点击发行，选择本地打包，如下图，点击即可生成离线打包资源。

<div align=center>
  <img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/b9269080-4f37-11eb-8a36-ebb87efcf8c0.png"/>
</div>

### 发布为H5

1. 在 ``manifest.json`` 的可视化界面，进行如下配置（发行在网站根目录可不配置应用基本路径），此时发行网站路径是 www.xxx.com/h5，如：[https://hellouniapp.dcloud.net.cn](https://hellouniapp.dcloud.net.cn)。
<div align=center>
	<img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/bf90de30-4f37-11eb-8ff1-d5dcf8779628.png" style="max-width:600px;height:auto;"/>
</div>
2. 在HBuilderX工具栏，点击发行，选择网站-H5手机版，如下图，点击即可生成 H5 的相关资源文件，保存于 unpackage 目录。

<div align=center>
	<img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/b7391860-4f37-11eb-8a36-ebb87efcf8c0.png" style="max-width:600px;height:auto;"/>
</div>

**注意**
- `history` 模式发行需要后台配置支持，详见：[history 模式的后端配置](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90)
- 打包部署后，在服务器上开启 gzip 可以进一步压缩文件。具体的配置，可以参考网上的分享：https://juejin.im/post/5af003286fb9a07aac24611b

发布的快捷键是`Ctrl+u`。同样可拉下快速发布菜单并按数字键选择。


# 2. 通过vue-cli命令行

除了HBuilderX可视化界面，也可以使用 `cli` 脚手架，可以通过 `vue-cli` 创建 `uni-app` 项目。


## 环境安装

全局安装vue-cli

```
npm install -g @vue/cli
```

## 创建uni-app

**使用正式版**（对应HBuilderX最新正式版）

```
vue create -p dcloudio/uni-preset-vue my-project
```

**使用alpha版**（对应HBuilderX最新alpha版）

```
vue create -p dcloudio/uni-preset-vue#alpha my-alpha-project
```

此时，会提示选择项目模板，初次体验建议选择 `hello uni-app` 项目模板，如下所示：

<div>
<img src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/h5-cli-01.png" width="300">
</div>

#### 自定义模板
选择自定义模板时，需要填写 uni-app 模板地址，这个地址其实就是托管在云端的仓库地址。以 GitHub 为例，地址格式为 `userName/repositoryName`，如 `dcloudio/uni-template-picture` 就是下载图片模板。

更多支持的下载方式，请参考这个插件的说明：[download-git-repo](https://www.npmjs.com/package/download-git-repo)

#### 修改依赖为指定版本

1. 查看 HBuilderX 对应的 NPM 依赖版本: 打开 [NPM版本记录](https://www.npmjs.com/package/@dcloudio/vue-cli-plugin-hbuilderx)，版本号 2.0.0- 后面是与 HBuilderX 对应的版本号且小版本不会超过9，比如 HBuilderX 2.7.5.20200518 对应的版本号 2.0.0-27520200518001，2.0.0-271420200618 对应的为 2.0.0-27920200618002。

2. 批量修改 package.json 中 uni 相关依赖为指定的版本号（去掉版本号前面 ^）。

3. 对于有变化的依赖进行增删，提示不存指定版本的依赖可以保留原始版本或者删除，运行时提示缺少的依赖自行安装。

## 运行、发布uni-app

```
npm run dev:%PLATFORM%
npm run build:%PLATFORM%
```

``%PLATFORM%`` 可取值如下：

|值|平台|
|---|---|
|app-plus|app平台生成打包资源（支持npm run build:app-plus，可用于持续集成。不支持run，运行调试仍需在HBuilderX中操作）|
|h5|H5|

可以自定义更多条件编译平台，参考[package.json文档](https://uniapp.dcloud.io/collocation/package)。


**其他：**

* 目前使用`npm run build:app-plus`会在`/dist/build/app-plus`下生成app打包资源。如需制作wgt包，将`app-plus`中的文件压缩成zip（注意：不要包含`app-plus目录`），再重命名为`${appid}.wgt`， `appid`为`manifest.json`文件中的`appid`。
* dev 模式编译出的各平台代码存放于根目录下的 ``/dist/dev/``目录，打开各平台开发工具选择对应平台目录即可进行预览（h5 平台不会在此目录，存在于缓存中）；
* build 模式编译出的各平台代码存放于根目录下的 ``/dist/build/`` 目录，发布时选择此目录进行发布；
* dev 和 build 模式的区别：
    1. dev 模式有 SourceMap 可以方便的进行断点调试；
    2. build 模式会将代码进行压缩，体积更小更适合发布为正式版应用；
    3. 进行 [环境判断](/frame?id=运行环境判断) 时，dev 模式 process.env.NODE_ENV 的值为 development，build 模式 process.env.NODE_ENV 的值为 production。

## 使用cli创建项目和使用HBuilderX可视化界面创建项目有什么区别

#### 编译器的区别

* ``cli`` 创建的项目，编译器安装在项目下。并且不会跟随HBuilderX升级。如需升级编译器，执行 ``npm update``，或者手动修改 package.json 中的 uni 相关依赖版本后执行 ``npm install``。更新后可能会有新增的依赖并不会自动安装，手动安装缺少的依赖即可。
* HBuilderX可视化界面创建的项目，编译器在HBuilderX的安装目录下的plugin目录，随着HBuilderX的升级会自动升级编译器。
* 已经使用``cli``创建的项目，如果想继续在HBuilderX里使用，可以把工程拖到HBuilderX中。注意如果是把整个项目拖入HBuilderX，则编译时走的是项目下的编译器。如果是把src目录拖入到HBuilderX中，则走的是HBuilderX安装目录下plugin目录下的编译器。
* ``cli``版如果想安装less、scss、ts等编译器，需自己手动npm安装。在HBuilderX的插件管理界面安装无效，那个只作用于HBuilderX创建的项目。
 
#### 开发工具的区别
* ``cli``创建的项目，内置了d.ts，同其他常规npm库一样，可在[vscode](https://ask.dcloud.net.cn/article/36286)、[webstorm](https://ask.dcloud.net.cn/article/36307)等支持d.ts的开发工具里正常开发并有语法提示。
* 使用HBuilderX创建的项目不带d.ts，HBuilderX内置了uni-app语法提示库。如需把HBuilderX创建的项目在其他编辑器打开并且补充d.ts，可以在项目下先执行 ``npm init``，然后``npm i @types/uni-app -D``，来补充d.ts。
* 但vscode等其他开发工具，在vue或uni-app领域，开发效率比不过HBuilderX。详见：[https://ask.dcloud.net.cn/article/35451](https://ask.dcloud.net.cn/article/35451)
* 发布App时，仍然需要使用HBuilderX。其他开发工具无法发布App，但可以发布H5。如需开发App，可以先在HBuilderX里运行起来，然后在其他编辑器里修改保存代码，代码修改后会自动同步到手机基座。
* 如果使用``cli``创建项目，那下载HBuilderX时只需下载10M的标准版即可。因为编译器已经安装到项目下了。
* 对 `cli` 使用有疑问，欢迎扫码加入 uni-app 微信交流群讨论：
    <br/><img src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/wx-barcode.png" width="250"/>

注意：HBuilderX创建的项目，一样可以使用npm，参考：[https://uniapp.dcloud.io/frame?id=npm%e6%94%af%e6%8c%81](https://uniapp.dcloud.io/frame?id=npm%e6%94%af%e6%8c%81)
