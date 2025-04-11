# uts Android调试

HBuilderX 3.6.20+ uni-app uts插件、HBuilderX 4.0+ uni-app-x uts插件、HBuilderX 4.61+支持uni-app-x下调试uvue和混编的kt文件

## 开启调试

如下Gif动画所示，运行uni-app uts项目到Android，运行成功后，HBuilder控制台点击`红色虫子`图标，下拉菜单选择【uts调试】，即可开启uts调试功能。

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uts-android.gif" style="zoom: 72%;" />

> 注意：如果需要触发应用初始化中的断点，比如App.uvue的onLaunch中，需要点击`红色虫子`图标右边的`重启应用`按钮，重启之后应用初始化中的断点才会生效

> 注意：目前部分变量的显示可能还是以kotlin的方式显示，因为uts编译结果是kotlin

> 注意：断点时App可能会出现Application Not Responding(应用无响应)的弹框(部分机型的表现是app会重启)，这是因为调试默认是以Attach的方式连接，Android系统不允许UI线程被阻塞太长时间，点击下一步或者断点结束时该弹框会自动消失。(开启断点之后点击点击`红色虫子`图标右边的`重启应用`按钮会以调试模式启动, 此时断点时不会出现`应用无响应`的弹框)

## 添加/删除断点@add-breakpoint

打开要调试的uts文件，在代码行号上，鼠标右击或双击添加断点。

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uts-add-breakpoint.png" style="zoom: 50%;" />

## 调试视图@debug-View

开启调试后，即可在HBuilderX左侧视图，看到调试视图，具体如下：

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uts-debug-view.jpg" style="zoom: 60%;" />

下图中包含了uvue、uts、kotlin的调试步骤

<img src="https://web-ext-storage.dcloud.net.cn/hx/debug/android-debug.gif" style="zoom: 60%;" />

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