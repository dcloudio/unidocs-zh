# uni-app web版调试@h5-debug
# uni-app web version debugging @h5-debug

> HBuilderX 3.5.0版本，uni-app 运行到 web 平台，可通过 HBuilder自带的调试面板进行调试。
> HBuilderX 3.5.0 version, uni-app runs on the web platform, and can be debugged through the debugging panel that comes with HBuilder.

## 简介@introduction
## Introduction @introduction

- 运行uni-app到web后，支持在HBuilder自带的调试面板中调试js代码。
- After running uni-app to the web, it supports debugging js code in the debugging panel that comes with HBuilder.
- 调试需要本机安装chrome浏览器，因为使用了chrome debug 协议
- Debugging requires the chrome browser to be installed locally, because the chrome debug protocol is used
- 调试支持的文件类型：`vue`文件、`nvue`文件、`ts`文件、`js`文件，断点只能打在js或ts代码中，请勿在vue文件template、style节点添加断点。
- Debugging supported file types: `vue` file, `nvue` file, `ts` file, `js` file, breakpoints can only be placed in js or ts code, do not add breakpoints to template and style nodes in vue files point.

**注意事项：**
**Precautions:**
1. uni-app，某些生命周期方法内，添加断点，debug调试后，断点无法进入。
1. uni-app, in some life cycle methods, add breakpoints, after debug debugging, breakpoints cannot be entered.
2. uni-app Vue3项目，debug调试后，可能会在 HBuilderX 内打开一个虚拟目录的文件，如`/localhost:3000/src/pages/index/index.vue`。Debug调试视图，点击继续即可。
2. For the uni-app Vue3 project, after debugging, a file in a virtual directory may be opened in HBuilderX, such as `/localhost:3000/src/pages/index/index.vue`. Debug debug view, click Continue.

![](https://hx.dcloud.net.cn/static/snapshots/app/h5-debug/overview.png)

## 开启调试@start-debug
## Enable debugging @start-debug

项目管理器，选中任意 uni-app项目，运行到Chrome。控制台右上角，点击debug图标（红色虫子），即可打开调试。如下图：
Project Manager, select any uni-app project, run to Chrome. In the upper right corner of the console, click the debug icon (red bug) to enable debugging. As shown below:

![](https://hx.dcloud.net.cn/static/snapshots/app/h5-debug/open-debug.png)

uni-app web调试，依赖debug插件，弹窗提示安装依赖插件，请务必点击安装，否则无法进行调试。
uni-app web debugging, depends on the debug plug-in, the pop-up window prompts to install the dependent plug-in, be sure to click install, otherwise the debugging cannot be performed.

## 添加/删除断点@add-breakpoint
## Add/remove breakpoints @add-breakpoint

打开要调试的文件，在js或ts代码行号上，鼠标右击或双击添加断点。
Open the file to be debugged, right-click or double-click on the js or ts code line number to add a breakpoint.

![](https://hx.dcloud.net.cn/static/snapshots/app/h5-debug/add_breakpoint.png)

## 调试视图@DebugView
## Debug View @DebugView

开启调试后，即可在HBuilderX左侧视图，看到调试视图，具体如下：
After enabling debugging, you can see the debugging view in the left view of HBuilderX, as follows:

**调试视图分为5部分：**
**The debug view is divided into 5 sections:**
- [调试工具栏](#DebugActions)
- [Debug Toolbar](#DebugActions)
- 变量窗口 (`复制值`、`复制表达式`、`添加到监视`)
- Variable window (`Copy Value`, `Copy Expression`, `Add to Watch`)
- 监视窗口（包含`添加`/`编辑`/`删除`表达式，以及`复制值`）
- Watch window (including `add`/`edit`/`delete` expressions, and `copy value`)
- 调用堆栈窗口
- Call stack window
- 断点窗口（包含`删除`/`启用`/`禁用`断点）
- Breakpoints window (contains `delete`/`enable`/`disable` breakpoints)

![](https://hx.dcloud.net.cn/static/snapshots/app/h5-debug/debug_view.png)

## 调试操作@DebugActions
## Debug actions @DebugActions

![](https://hx.dcloud.net.cn/static/snapshots/app/h5-debug/debug_toolbar.png)

- [继续](#Continue) `F8`
- [continue](#Continue) `F8`
- 下一步 `F10`
- Next `F10`
- 进入 `F11`
- Enter `F11`
- 返回 `Shift+F11`
- go back to `Shift+F11`

### 继续@Continue
### Continue @Continue

继续(F8)：点击后，运行直到下一个断点。
Continue (F8): When clicked, run until the next breakpoint.

![](https://hx.dcloud.net.cn/static/snapshots/app/h5-debug/continue.png)

## 数据检查和查看变量@data
## Data check and view variable @data

### 添加到监视@add-to-watch
### Add to watch @add-to-watch

在【变量窗口】，选中变量，右键菜单，即可将变量添加到监视窗口。
In the [Variable window], select the variable, right-click the menu, you can add the variable to the monitoring window.

![](https://hx.dcloud.net.cn/static/snapshots/app/h5-debug/add_to_monitor.png)

### 悬停显示@hover
### Hover to show @hover

断点调试过程中，将鼠标悬停在要查看的变量上，即可打开悬停窗口。
During breakpoint debugging, hover the mouse over the variable you want to view to open the hover window.

![](https://hx.dcloud.net.cn/static/snapshots/app/h5-debug/hovering_window.png)
