## App平台调试指南 debug@app-debug
## App Platform Debugging Guide debug@app-debug

常规开发里，在 HBuilderX 的运行菜单里运行 App，手机端的错误或 console.log 日志信息会直接打印到控制台。
In conventional development, when you run the app in the run menu of HBuilderX, the errors or console.log log information on the mobile phone will be directly printed to the console.

如果需要更多功能，比如审查元素、打断点 debug，则需要启动调试模式。自 `HBuilderX 2.0.3+` 版本起开始支持 `App` 端的调试。
If you need more functionality, such as inspecting elements, breaking point debug, you need to enable debug mode. Since `HBuilderX 2.0.3+` version, `App` side debugging has been supported.

### 打开调试窗口
### Open debug window

在 `HBuilderX` 中，正确运行项目： `运行 --> 运行到手机或模拟器 --> 选择设备`，项目启动后，在下方的控制台选择 `debug` 图标。
In `HBuilderX`, run the project correctly: `Run --> Run to phone or emulator --> Select device`, after the project starts, select the `debug` icon in the console below.

![debug](https://web-assets.dcloud.net.cn/unidoc/zh/debug-icon.png)

正确打开调试窗口后，显示如下：
![debug](https://web-assets.dcloud.net.cn/unidoc/zh/csdndebug-window.png)

### Elements

根据上一步，启动完成`debug`窗口后，可以看到`Elements`。`Elements` 主要显示当前页面的组织结构，目前`Elements`只支持`nvue`。
![debug](https://web-assets.dcloud.net.cn/unidoc/zh/debug-elements.png)

### console.log 打日志
### console.log log

`console.log`是我们日常开发最常用的调试方法，`HBuilderX`中当然也不能少。
`console.log` is the most commonly used debugging method in our daily development, and of course `HBuilderX` is indispensable.

- App 端提供真机运行的`console.log`日志输出，运行到真机或模拟器时，不用点`debug`按钮，操作手机，会在`HBuilderX`的控制台直接输出日志。
- The App side provides the `console.log` log output running on the real machine. When running to the real machine or simulator, you don't need to click the `debug` button to operate the mobile phone, and the log will be output directly on the `HBuilderX` console.

- 如果是比较复杂的逻辑，那就推荐使用调试工具中的`console`了。根据上一步，启动完成`debug`窗口后，执行`console.log`方法就可以看到打印的内容了。
- If it is more complex logic, it is recommended to use the `console` in the debugging tool. According to the previous step, after starting the `debug` window, execute the `console.log` method to see the printed content.

`debug`窗口中看`console.log`的方法如下图：
The method of viewing `console.log` in the `debug` window is as follows:

![debug](https://web-assets.dcloud.net.cn/unidoc/zh/debug-console-new.jpg)

### 调试页面
### Debug page

在调试窗口控制台的 `Sources` （图中指示 1） 栏，可以给 `js` 打断点调试。
In the `Sources` (indicated 1 in the figure) column of the debug window console, you can breakpoint debugging for `js`.

在 `uniapp`（图中指示 2）下找到需要调试的页面，单击打开 ，在右侧可以看到我们需要调试的内容（图中指示 3）。在需要调试的代码行号的位置，点击打上断点（图中指示 4）。
Find the page that needs to be debugged under `uniapp` (indicated by 2 in the figure), click Open , and you can see the content we need to debug on the right (indicated by 3 in the figure). Click to place a breakpoint at the position of the line of code that needs to be debugged (indicated by 4 in the figure).

![debug](https://web-assets.dcloud.net.cn/unidoc/zh/csdndebug-log.png)

之后，在设备上进行操作，进入断点位置，可以方便我们跟踪调试代码。
After that, operate on the device and enter the breakpoint position, which is convenient for us to trace and debug the code.

![debug](https://web-assets.dcloud.net.cn/unidoc/zh/csdndebug-breakpoint.png)

### 同步断点到调试器
### Synchronize breakpoints to debugger

在控制台众多代码中寻找要调试的代码是比较麻烦的一件事，`HBuilderX`的调试还提供一个便利的功能，可直接在编辑器中打断点，断点会自动同步到调试工具中。
It is quite troublesome to find the code to be debugged among the many codes in the console. The debugging of `HBuilderX` also provides a convenient function, which can directly break the breakpoint in the editor, and the breakpoint will be automatically synchronized to the debugging tool .

操作步骤：在 HBuilderX 编辑器中对目标行的行号处点右键，在右键菜单中选择“同步断点到调试器”，然后调试控制台会自动打开对应的代码并在指定行处标记断点。演示如下：
Operation steps: Right-click on the line number of the target line in the HBuilderX editor, select "Synchronize breakpoint to debugger" in the right-click menu, and then the debugging console will automatically open the corresponding code and mark the breakpoint at the specified line . The demo is as follows:

![debug](https://web-assets.dcloud.net.cn/unidoc/zh/debug-console-light.gif)

### 注意事项
### Precautions

- `vue` 和 `nvue` 页面均支持断点调试
- Both `vue` and `nvue` pages support breakpoint debugging
- 目前仅支持 `nvue` 页面审查元素，`vue` 页面暂不支持，以及 `Android` 平台的 `nvue` 审查元素暂不支持查看 `style`
- Currently only supports `nvue` page review elements, `vue` pages are not currently supported, and `nvue` review elements on the `Android` platform do not currently support viewing `style`
- App 端提供真机运行的`console.log`日志输出，运行到真机或模拟器时，不用点`debug`按钮，运行手机 App，会在`HBuilderX`的控制台直接输出日志。
- The App side provides the `console.log` log output running on the real machine. When running to the real machine or simulator, you don't need to click the `debug` button to run the mobile app, and the log will be output directly on the `HBuilderX` console.
- 如果是调试`App`的界面和常规 API，推荐编译到 H5 端，点`HBuilderX`右上角的预览，在内置浏览器里调`Dom`，保存后立即看到结果，调试更方便。并且 H5 端也支持`titleNView`的各种复杂设置。唯一要注意的就是`css`兼容性，使用太新的`css`在`pc`上预览可能正常，但低端`Android`上异常，具体可查询`caniuse`等网站。
- If you are debugging the interface and general API of `App`, it is recommended to compile to the H5 side, click the preview in the upper right corner of `HBuilderX`, and call `Dom` in the built-in browser. You can see the results immediately after saving, which makes debugging more convenient. And the H5 side also supports various complex settings of `titleNView`. The only thing to pay attention to is the compatibility of `css`. Using too new `css` to preview on `pc` may be normal, but it is abnormal on low-end `Android`. For details, please check `caniuse` and other websites.
- 常用的开发模式就是`pc`上使用内置浏览器预览调 dom，运行到真机上看`console.log`。如果是很复杂的问题才使用`debug`。
- The common development mode is to use the built-in browser preview on `pc` to adjust the dom, and run it on the real machine to see `console.log`. Only use `debug` if it is a very complex problem.
- uni-app 的 App 端的 webkit remote debug，只能调试视图层，不能调试逻辑层。因为 uni-app 的 js 不是运行在 webview 里，而是独立的 jscore 里。
- The webkit remote debug on the App side of uni-app can only debug the view layer, but not the logic layer. Because the js of uni-app is not running in webview, but in independent jscore.
- 部分 manifest 配置，如三方 sdk 配置，需要打包后生效的，可以打包一个自定义运行基座。打包自定义基座后运行这个自定义基座，同样可以真机运行和 debug。打包正式包将无法真机运行和 debug。
- Some manifest configurations, such as third-party sdk configurations, need to be packaged to take effect, and a custom runtime base can be packaged. After packaging the custom base and running this custom base, you can also run and debug the real machine. Packaging the official package will not be able to run and debug the real machine.
