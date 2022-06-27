# uni-app web版调试@h5-debug

> HBuilderX 3.5.0版本，uni-app 运行到 web 平台，可通过 chrome debug 协议进行调试。

## 简介@introduction

- 运行uni-app到web后，支持chrome调试。
- 调试需要本机安装chrome浏览器
- 调试支持的文件类型：`vue`文件、`nvue`文件、`ts`文件、`js`文件，断点只能打在js或ts代码中，请勿在vue文件template、style节点添加断点。

**注意事项：**
1. uni-app，某些生命周期方法内，添加断点，debug调试后，断点无法进入。
2. uni-app Vue3项目，debug调试后，可能会在 HBuilderX 内打开一个虚拟目录的文件，如`/localhost:3000/src/pages/index/index.vue`。Debug调试视图，点击继续即可。

![](https://hx.dcloud.net.cn/static/snapshots/app/h5-debug/overview.png)

## 开启调试@start-debug

项目管理器，选中任意 uni-app项目，运行到Chrome。控制台右上角，点击debug图标（红色虫子），即可打开调试。如下图：

![](https://hx.dcloud.net.cn/static/snapshots/app/h5-debug/open-debug.png)

uni-app web调试，依赖debug插件，弹窗提示安装依赖插件，请务必点击安装，否则无法进行调试。

## 添加/删除断点@add-breakpoint

打开要调试的文件，在js或ts代码行号上，鼠标右击或双击添加断点。

![](https://hx.dcloud.net.cn/static/snapshots/app/h5-debug/add_breakpoint.png)

## 调试视图@DebugView

开启调试后，即可在HBuilderX左侧视图，看到调试视图，具体如下：

**调试视图分为5部分：**
- [调试工具栏](#DebugActions)
- 变量窗口 (`复制值`、`复制表达式`、`添加到监视`)
- 监视窗口（包含`添加`/`编辑`/`删除`表达式，以及`复制值`）
- 调用堆栈窗口
- 断点窗口（包含`删除`/`启用`/`禁用`断点）

![](https://hx.dcloud.net.cn/static/snapshots/app/h5-debug/debug_view.png)

## 调试操作@DebugActions

![](https://hx.dcloud.net.cn/static/snapshots/app/h5-debug/debug_toolbar.png)

- [继续](#Continue) `F8`
- 下一步 `F10`
- 进入 `F11`
- 返回 `Shift+F11`

### 继续@Continue

继续(F8)：点击后，运行直到下一个断点。

![](https://hx.dcloud.net.cn/static/snapshots/app/h5-debug/continue.png)

## 数据检查和查看变量@data

### 添加到监视@add-to-watch

在【变量窗口】，选中变量，右键菜单，即可将变量添加到监视窗口。

![](https://hx.dcloud.net.cn/static/snapshots/app/h5-debug/add_to_monitor.png)

### 悬停显示@hover

断点调试过程中，将鼠标悬停在要查看的变量上，即可打开悬停窗口。

![](https://hx.dcloud.net.cn/static/snapshots/app/h5-debug/hovering_window.png)
