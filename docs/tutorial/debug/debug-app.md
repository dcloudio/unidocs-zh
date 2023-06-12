## App平台调试指南 debug@app-debug

常规开发里，在 HBuilderX 的运行菜单里运行 App，手机端的错误或 console.log 日志信息会直接打印到控制台。

如果需要更多功能，比如审查元素、打断点 debug，则需要启动调试模式。自 `HBuilderX 2.0.3+` 版本起开始支持 `App` 端的调试。

### 打开调试窗口

在 `HBuilderX` 中，正确运行项目： `运行 --> 运行到手机或模拟器 --> 选择设备`，项目启动后，在下方的控制台选择 `debug` 图标。

![debug](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/debug-icon.png)

正确打开调试窗口后，显示如下：
![debug](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/csdndebug-window.png)

### Elements

根据上一步，启动完成`debug`窗口后，可以看到`Elements`。`Elements` 主要显示当前页面的组织结构，目前`Elements`只支持`nvue`。
![debug](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/debug-elements.png)

### console.log 打日志

`console.log`是我们日常开发最常用的调试方法，`HBuilderX`中当然也不能少。

- App 端提供真机运行的`console.log`日志输出，运行到真机或模拟器时，不用点`debug`按钮，操作手机，会在`HBuilderX`的控制台直接输出日志。

- 如果是比较复杂的逻辑，那就推荐使用调试工具中的`console`了。根据上一步，启动完成`debug`窗口后，执行`console.log`方法就可以看到打印的内容了。

`debug`窗口中看`console.log`的方法如下图：

![debug](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/debug-console-new.jpg)

### 调试页面

在调试窗口控制台的 `Sources` （图中指示 1） 栏，可以给 `js` 打断点调试。

在 `uniapp`（图中指示 2）下找到需要调试的页面，单击打开 ，在右侧可以看到我们需要调试的内容（图中指示 3）。在需要调试的代码行号的位置，点击打上断点（图中指示 4）。

![debug](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/csdndebug-log.png)

之后，在设备上进行操作，进入断点位置，可以方便我们跟踪调试代码。

![debug](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/csdndebug-breakpoint.png)

### 同步断点到调试器

在控制台众多代码中寻找要调试的代码是比较麻烦的一件事，`HBuilderX`的调试还提供一个便利的功能，可直接在编辑器中打断点，断点会自动同步到调试工具中。

操作步骤：在 HBuilderX 编辑器中对目标行的行号处点右键，在右键菜单中选择“同步断点到调试器”，然后调试控制台会自动打开对应的代码并在指定行处标记断点。演示如下：

![debug](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/debug-console-light.gif)

### 注意事项

- `vue` 和 `nvue` 页面均支持断点调试
- 目前仅支持 `nvue` 页面审查元素，`vue` 页面暂不支持，以及 `Android` 平台的 `nvue` 审查元素暂不支持查看 `style`
- App 端提供真机运行的`console.log`日志输出，运行到真机或模拟器时，不用点`debug`按钮，运行手机 App，会在`HBuilderX`的控制台直接输出日志。
- 如果是调试`App`的界面和常规 API，推荐编译到 H5 端，点`HBuilderX`右上角的预览，在内置浏览器里调`Dom`，保存后立即看到结果，调试更方便。并且 H5 端也支持`titleNView`的各种复杂设置。唯一要注意的就是`css`兼容性，使用太新的`css`在`pc`上预览可能正常，但低端`Android`上异常，具体可查询`caniuse`等网站。
- 常用的开发模式就是`pc`上使用内置浏览器预览调 dom，运行到真机上看`console.log`。如果是很复杂的问题才使用`debug`。
- uni-app 的 App 端的 webkit remote debug，只能调试视图层，不能调试逻辑层。因为 uni-app 的 js 不是运行在 webview 里，而是独立的 jscore 里。
- 部分 manifest 配置，如三方 sdk 配置，需要打包后生效的，可以打包一个自定义运行基座。打包自定义基座后运行这个自定义基座，同样可以真机运行和 debug。打包正式包将无法真机运行和 debug。
