HBuilderX 4.61+ 运行到鸿蒙，支持Debug调试

## 开启调试

如下图所示，运行uni-app-x项目到鸿蒙，运行成功后，HBuilder控制台点击`红色虫子`图标，下拉菜单选择【开启调试】，即可开启鸿蒙调试功能。

<img src="https://web-ext-storage.dcloud.net.cn/hx/harmony/harmony-debug.png" style="zoom: 72%;" />

> 注意：鸿蒙调试，依赖鸿蒙调试插件，弹窗提示安装依赖插件，请务必点击安装，否则无法进行调试。

> 注意：如果需要触发应用初始化中的断点，比如App.uvue的onLaunch中，需要点击`红色虫子`图标右边的`重启应用`按钮，重启之后应用初始化中的断点才会生效


## 添加/删除断点@add-breakpoint

打开要调试的uts、uvue、ets文件，在代码行号上，鼠标右击或双击添加断点。

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uts-add-breakpoint.png" style="zoom: 50%;" />

## 调试视图@debug-View

开启调试后，即可在HBuilderX左侧视图，看到调试视图，具体如下：

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uts-debug-view.jpg" style="zoom: 60%;" />

调试视图分为5部分:

- [调试工具栏](#debugactions)
- 变量窗口 (`复制值`、`复制表达式`、`添加到监视`)
- 监视窗口（包含`添加`/`编辑`/`删除`表达式，以及`复制值`）
- 调用堆栈窗口
- 断点窗口（包含`删除`/`启用`/`禁用`断点）

## 调试操作@DebugActions

- 继续 `F8`
- 下一步 `F10`
- 进入 `F11`
- 返回 `Shift+F11`

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uts-debug-action.jpg" style="zoom: 50%;" />

## 数据检查和查看变量@data

### 添加到监视@add-to-watch

在【变量窗口】，选中变量，右键菜单，即可将变量添加到监视窗口。

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uts-add_to_monitor.png" style="zoom: 50%;" />

### 悬停显示@hover

断点调试过程中，将鼠标悬停在要查看的变量上，即可打开悬停窗口。

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uts-hovering_window.jpg" style="zoom: 60%;" />
# uts Android调试

HBuilderX 3.6.20+ uni-app uts插件、HBuilderX 4.0+ uni-app-x uts插件，运行到Android，支持Debug调试
HBuilderX 3.6.20+ uni-app uts插件、HBuilderX 4.0+ uni-app-x uts插件、HBuilderX 4.61+支持uni-app-x下调试uvue和kt文件，运行到Android，支持Debug调试

## 开启调试

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uts-android.gif" style="zoom: 72%;" />

> 注意：uts调试，依赖uts调试插件，弹窗提示安装依赖插件，请务必点击安装，否则无法进行调试。

> 注意：如果需要触发应用初始化中的断点，比如App.uvue的onLaunch中，需要点击`红色虫子`图标右边的`重启应用`按钮，重启之后应用初始化中的断点才会生效

## 添加/删除断点@add-breakpoint

