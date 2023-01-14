# uts Android调试

HBuilderX 3.6.20+，uni-app uts插件，运行到Android，支持Debug调试

## 开启调试

如下Gif动画所示，运行uni-app uts项目到Android，运行成功后，HBuilder控制台点击`红色虫子`图标，下拉菜单选择【uts调试】，即可开启uts调试功能。

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/uts-android.gif" style="zoom: 72%;" />

uts调试，依赖uts调试插件，弹窗提示安装依赖插件，请务必点击安装，否则无法进行调试。


## 添加/删除断点@add-breakpoint

打开要调试的uts文件，在代码行号上，鼠标右击或双击添加断点。

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/uts-add-breakpoint.png" style="zoom: 50%;" />

## 调试视图@debug-View

开启调试后，即可在HBuilderX左侧视图，看到调试视图，具体如下：

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/uts-debug-view.jpg" style="zoom: 60%;" />

**调试视图分为5部分：**

- [调试工具栏](#DebugActions)
- 变量窗口 (`复制值`、`复制表达式`、`添加到监视`)
- 监视窗口（包含`添加`/`编辑`/`删除`表达式，以及`复制值`）
- 调用堆栈窗口
- 断点窗口（包含`删除`/`启用`/`禁用`断点）

## 调试操作@DebugActions

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/uts-debug-action.jpg" style="zoom: 60%;" />

- 继续 `F8`
- 下一步 `F10`
- 进入 `F11`
- 返回 `Shift+F11`