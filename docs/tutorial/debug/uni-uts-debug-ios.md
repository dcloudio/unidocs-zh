# uts iOS调试

uts在iOS上的调试HBuilderX版本支持如下
> uni-app (x) 的uts插件调试（iOS17以下）需 HBuilderX 3.7.6+

> uni-app x 的jscore调试 HBuilderX 4.31+

> uni-app (x) 的uts插件调试（iOS17以上）需 HBuilderX 4.81+

## uni-app (x) uts插件调试

#### 功能入口

运行uni-app项目运行到iOS，项目包含uts插件，运行成功后，HBuilder控制台点击`红色虫子`图标，下拉菜单选择【开启uts调试(swift)】，即可开启uts调试(swift)功能。

<img src="https://web-ext-storage.dcloud.net.cn/doc/tutorial/app/ios-debug-jscore.png" style="zoom: 50%;" />

#### 注意事项
 
- 自定义基座首次使用【开启uts调试(swift)】，需要重新编译动态库，当遇到下面的确认弹窗时，请点击【确定】按钮。

  <img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uts-ios-debug-firstpromt.jpg" style="zoom: 50%;border-radius: 20px;" />

- 点击【开启uts调试(swift)】，uts调试(swift)显示连接成功后可能需要等待十几秒后方可使用。
- 调试进程`codelldb`会占用较大的内存。
- 调试模式下，uts插件修改导致重装App可能安装失败。
- 基座重装后如果需要再次调试需重新开启uts调试(swift)

## uni-app x jscore调试

> uts调试功能，需 HBuilderX 4.31+

#### 功能入口

运行uni-app x项目运行到iOS，如果项目包含uts插件，运行成功后，HBuilder控制台点击`红色虫子`图标，下拉菜单选择【开启uts调试(jscore)】，即可开启uts调试(jscore)功能。

<img src="https://web-ext-storage.dcloud.net.cn/doc/tutorial/app/ios-debug-swift.png" style="zoom: 50%;" />


#### 注意事项

- uts 调试需要手机在 “设置” > “Safari” > “高级” > “Web检查器” 设置为打开

<img src="https://web-ext-storage.dcloud.net.cn/hx/debug/unix_iphone_safari_setting.jpg?t=1" style="zoom: 30%;" />

- uts调试(jscore)服务开启成功后，修改编译为jscore的代码，热更新后会自动重连调试。不需要调试需手动关闭调试服务。

## 添加/删除断点@add-breakpoint

打开要调试的uts文件，在代码行号上，鼠标右击或双击添加断点。

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uts-ios-debug-add-breakpoint.jpg" style="zoom: 50%;" />

## 调试视图@debug-View

开启调试后，即可在HBuilderX左侧视图，看到调试视图，具体如下：

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uts-ios-debug-view.jpg" style="zoom: 50%;border-radius: 20px;" />

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

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uts-ios-debug-add-monitor.jpg" style="zoom: 50%;" />

### 悬停显示@hover

断点调试过程中，将鼠标悬停在要查看的变量上，即可打开悬停窗口。

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uts-ios-debug-hover-windows.jpg" style="zoom: 50%;" />


## 注意事项

- 开启uts调试(swift)和开启uts调试(jscore)，依赖uts调试插件，弹窗提示安装依赖插件，请务必点击安装，否则无法进行调试。

  <img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uts-ios-debug-install.jpg" style="zoom: 45%;border-radius: 20px;" />


## 故障排查指南@faq
