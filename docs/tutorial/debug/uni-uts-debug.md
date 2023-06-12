# uts Android调试
# uts Android debug

HBuilderX 3.6.20+，uni-app uts插件，运行到Android，支持Debug调试
HBuilderX 3.6.20+, uni-app uts plugin, run to Android, support Debug

## 开启调试
## Enable debugging

如下Gif动画所示，运行uni-app uts项目到Android，运行成功后，HBuilder控制台点击`红色虫子`图标，下拉菜单选择【uts调试】，即可开启uts调试功能。
As shown in the following Gif animation, run the uni-app uts project to Android. After running successfully, click the `red bug` icon in the HBuilder console, and select [uts debugging] from the drop-down menu to enable the uts debugging function.

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uts-android.gif" style="zoom: 72%;" />

> 注意：uts调试，依赖uts调试插件，弹窗提示安装依赖插件，请务必点击安装，否则无法进行调试。
> Note: uts debugging depends on the uts debugging plug-in, and a pop-up window prompts to install the dependent plug-in. Please be sure to click Install, otherwise you cannot debug.


## 添加/删除断点@add-breakpoint
## Add/remove breakpoint @add-breakpoint

打开要调试的uts文件，在代码行号上，鼠标右击或双击添加断点。
Open the uts file to be debugged, and right-click or double-click on the code line number to add a breakpoint.

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uts-add-breakpoint.png" style="zoom: 50%;" />

## 调试视图@debug-View
## Debug View @debug-View

开启调试后，即可在HBuilderX左侧视图，看到调试视图，具体如下：
After debugging is enabled, you can see the debugging view in the left view of HBuilderX, as follows:

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uts-debug-view.jpg" style="zoom: 60%;" />

调试视图分为5部分:
The debug view is divided into 5 parts:

- [调试工具栏](#DebugActions)
- [Debug Toolbar](#DebugActions)
- 变量窗口 (`复制值`、`复制表达式`、`添加到监视`)
- Variables window (`Copy value`, `Copy expression`, `Add to watch`)
- 监视窗口（包含`添加`/`编辑`/`删除`表达式，以及`复制值`）
- Watch window (contains `add`/`edit`/`delete` expressions, and `copy value`)
- 调用堆栈窗口
- call stack window
- 断点窗口（包含`删除`/`启用`/`禁用`断点）
- Breakpoints window (contains `remove`/`enable`/`disable` breakpoints)

## 调试操作@DebugActions
## Debug Actions @DebugActions

- 继续 `F8`
- continue with `F8`
- 下一步 `F10`
- next step `F10`
- 进入 `F11`
- Enter `F11`
- 返回 `Shift+F11`
- Back to `Shift+F11`

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uts-debug-action.jpg" style="zoom: 50%;" />

## 数据检查和查看变量@data
## Data checking and viewing variables @data

### 添加到监视@add-to-watch
### Add to watch @add-to-watch

在【变量窗口】，选中变量，右键菜单，即可将变量添加到监视窗口。
In the 【Variable Window】, select the variable and right-click the menu to add the variable to the monitoring window.

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uts-add_to_monitor.png" style="zoom: 50%;" />

### 悬停显示@hover
### Hover display @hover

断点调试过程中，将鼠标悬停在要查看的变量上，即可打开悬停窗口。
During breakpoint debugging, hover the mouse over the variable to be viewed to open the hover window.

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uts-hovering_window.jpg" style="zoom: 60%;" />