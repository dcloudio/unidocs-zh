# uts ios调试

HBuilderX 3.7.6+，uni-app uts插件，运行到iOS，支持Debug调试

## 开启调试

运行uni-app uts项目到iOS，运行成功后，HBuilder控制台点击`红色虫子`图标，下拉菜单选择【uts调试】，即可开启uts调试功能。

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/uts-ios-debug-open.jpg" style="zoom: 50%;" />


## uts-ios调试注意事项

- uts调试，依赖uts调试插件，弹窗提示安装依赖插件，请务必点击安装，否则无法进行调试。

  <img src="https://web-assets.dcloud.net.cn/unidoc/zh/uts-ios-debug-install.jpg" style="zoom: 45%;border-radius: 20px;" />

- 首次点击【uts调试】，需要重新编译动态库，当遇到下面的确认弹窗时，请点击【确定】按钮。

  <img src="https://web-assets.dcloud.net.cn/unidoc/zh/uts-ios-debug-firstpromt.jpg" style="zoom: 50%;border-radius: 20px;" />

- 点击【uts调试】，uts调试开启，可能需要十几秒
- 调试进程`codelldb`会占用较大的内存。

## 添加/删除断点@add-breakpoint

打开要调试的uts文件，在代码行号上，鼠标右击或双击添加断点。

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/uts-ios-debug-add-breakpoint.jpg" style="zoom: 50%;" />

## 调试视图@debug-View

开启调试后，即可在HBuilderX左侧视图，看到调试视图，具体如下：

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/uts-ios-debug-view.jpg" style="zoom: 50%;border-radius: 20px;" />

调试视图分为5部分:

- [调试工具栏](#DebugActions)
- 变量窗口 (`复制值`、`复制表达式`、`添加到监视`)
- 监视窗口（包含`添加`/`编辑`/`删除`表达式，以及`复制值`）
- 调用堆栈窗口
- 断点窗口（包含`删除`/`启用`/`禁用`断点）

## 调试操作@DebugActions

- 继续 `F8`
- 下一步 `F10`
- 进入 `F11`
- 返回 `Shift+F11`

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/uts-debug-action.jpg" style="zoom: 50%;" />

## 数据检查和查看变量@data

### 添加到监视@add-to-watch

在【变量窗口】，选中变量，右键菜单，即可将变量添加到监视窗口。

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/uts-ios-debug-add-monitor.jpg" style="zoom: 50%;" />

### 悬停显示@hover

断点调试过程中，将鼠标悬停在要查看的变量上，即可打开悬停窗口。

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/uts-ios-debug-hover-windows.jpg" style="zoom: 50%;" />