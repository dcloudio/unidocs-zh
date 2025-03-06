#### 什么是编译器

`uni-app`能实现一套代码、多端运行，核心是通过`编译器 + 运行时`实现的：
- 编译器：将`uni-app`统一代码编译生成每个平台支持的特有代码；如在小程序平台，编译器将`.vue`文件拆分生成`wxml`、`wxss`、`js`等代码。
- 运行时：动态处理数据绑定、事件代理，保证Vue和平台宿主数据的一致性；

`uni-app`项目根据所依赖的`Vue`版本不同，编译器的实现也不同：
- vue2：`uni-app`编译器基于wepback实现
- vue3：`uni-app`编译器基于Vite实现，编译速度更快，详见：[vue3和vite双向加持，uni-app性能再次提升](https://ask.dcloud.net.cn/article/39628)

`uni-app`项目根据创建方式的不同，编译器在使用上也有差异：
- `cli` 方式创建的项目，编译器安装在项目下。编译器不会跟随`HBuilderX`升级。如需升级编译器，可以参考：[更新依赖到指定版本](/quickstart-cli.md#cliversion)。
- `HBuilderX`可视化界面创建的项目，编译器在`HBuilderX`的安装目录下的`plugin`目录，随着`HBuilderX`的升级会自动升级编译器。
- 已经使用`cli`创建的项目，如果想继续在`HBuilderX`里使用，可以把工程拖到`HBuilderX`中。注意如果是把整个项目拖入`HBuilderX`，则编译时走的是项目下的编译器。如果是把src目录拖入到`HBuilderX`中，则走的是`HBuilderX`安装目录下`plugin`目录下的编译器。


