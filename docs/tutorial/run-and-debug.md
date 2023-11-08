运行，指将项目运行起来，可以一边修改代码、一边立即看到修改结果，同时可以打log日志（console.log）。
Running, refers to running the project, you can modify the code, see the modification results immediately, and log the log (console.log) at the same time.

而调试，也称之为`debug`，在运行的基础之上，进一步可以打断点、单步跟踪、看堆栈信息。
Debugging, also known as `debug`, can further break points, single-step traces, and view stack information on the basis of running.

uni-app可以用cli项目的npm命令运行，但更重要的是，DCloud提供了uni-app的专用开发工具HBuilder，可以更好的开发uni-app。
uni-app can be run with the npm command of the cli project, but more importantly, DCloud provides HBuilder, a special development tool for uni-app, which can better develop uni-app.

如果使用cli项目，在非HBuilder环境下运行uni-app，那就执行普通的 `npm run dev:%platform%`命令即可，使用外部工具运行。[详见](../quickstart-cli.md#运行、发布uni-app)
If you use a cli project to run uni-app in a non-HBuilder environment, just execute the normal `npm run dev:%platform%` command to run it with an external tool. [See details](../quickstart-cli.md#%E8%BF%90%E8%A1%8C, release uni-app)

本文重点讲述HBuilder中的运行和调试方法。
This article focuses on the running and debugging methods in HBuilder.

简要来讲，HBuilder为uni-app提供了内置的web浏览器、web端调试环境、App的真机运行环境、App调试环境、uniCloud运行环境、uniCloud调试环境。
Briefly, HBuilder provides uni-app with a built-in web browser, web-side debugging environment, App's real machine running environment, App debugging environment, uniCloud running environment, and uniCloud debugging environment.

- 运行容器方面
- running container aspects

|					|web						|app		|小程序				|uniCloud|
| |web |app |Mini Program |uniCloud|
|--					|--							|--			|--					|--		|
|uni-app+其他ide		|运行在普通浏览器				|不支持		|三方小程序开发工具	|不支持	|
|uni-app+other IDEs |runs in common browsers |not supported |third-party applet development tools |not supported |
|uni-app+HBuilder	|HBuilder额外内置了浏览器		|支持		|三方小程序开发工具	|支持	|
|uni-app+HBuilder |HBuilder has an additional built-in browser |Support |Three-party applet development tools |Support |

- debug方面
- debug aspect

|					|web		|app	|小程序					|uniCloud|
| |web |app |Mini Program |uniCloud|
|--					|--			|--		|--						|--		|
|uni-app+其他ide		|视ide功能	|不支持	|依靠三方小程序开发工具	|不支持	|
|uni-app+other IDE |Video IDE function |Not supported |Relying on third-party applet development tools |Not supported |
|uni-app+HBuilder	|支持		|支持	|依靠三方小程序开发工具	|支持	|
|uni-app+HBuilder |Support |Support |Rely on third-party applet development tools |Support |

## 运行调试入口
## run debug entry

### 运行入口
### Run entry
在HBuilder中，有顶部菜单、toolbar运行按钮、快捷键三种运行入口。
In HBuilder, there are three run entries: top menu, toolbar run button, and shortcut keys.

1. 顶部运行菜单
1. Top run menu

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/menurun.png)

2. toolbar工具栏上的运行按钮
2. The run button on the toolbar

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/toolbarrun.png)

	toolbar的运行按钮点击后会展开一个菜单。这个菜单可配置，通过`自定义菜单`将不常用的运行项目折叠起来。
	The toolbar's run button will expand a menu when clicked. This menu is configurable to collapse infrequently used run items via the `Custom Menu`.

3. 快捷键
3. Shortcuts
	
	运行快捷键是【Ctrl+r】
	The shortcut key to run is [Ctrl+r]
	
	弹出的菜单还支持键盘快捷选择：按回车可以选中菜单的第一项；按数字可以快捷选中菜单项开头数字对应的菜单项。
	The pop-up menu also supports keyboard shortcut selection: press Enter to select the first item of the menu; press the number to quickly select the menu item corresponding to the number at the beginning of the menu item.

如果你不能看到相关菜单，那么HBuilder当前打开的文件可能不是uni-app项目下的文件。
If you can't see the relevant menu, then the file currently opened by HBuilder is probably not a file under the uni-app project.

### 调试入口
### Debug entry

uni-app一般是先运行后调试。debug的入口在运行之后的控制台上。
uni-app is generally run first and then debugged. The debug entry is on the console after running.

运行后的控制台，右上角会有一个红色虫子图标或调试的checkbox。
After running the console, there will be a red bug icon or a debugging checkbox in the upper right corner.

![](https://hx.dcloud.net.cn/static/snapshots/app/h5-debug/open-debug.png)

### 线上平台排错
### Online Platform Troubleshooting

应用上线后，各种用户环境下可能会有报错，需要开发者统计和分析。但三方统计系统（如友盟、阿拉丁、百度），对运行端的报错采集，提示的是uni-app编译器编译后的代码报错的行数，相当于乱码，无法告知开发者是uni-app的vue或js的哪一行代码报错。
After the application is launched, there may be errors reported in various user environments, which require statistics and analysis by developers. However, the three-party statistical system (such as Youmeng, Aladdin, and Baidu) collects the error reports on the running side, and it prompts the number of error lines in the code compiled by the uni-app compiler, which is equivalent to garbled characters, and cannot tell the developer that it is uni-app Which line of code in vue or js reports an error.

为了解决这个问题，DCloud提供了uni统计的sourceMap功能，在uni统计后台可以清晰的看到报错的环境和准确的报错代码，是uni-app编译前的vue或js的具体信息。[详见](https://uniapp.dcloud.net.cn/uni-stat-v2.html#sourcemap-parse-error)
In order to solve this problem, DCloud provides the sourceMap function of uni statistics. In the background of uni statistics, you can clearly see the error reporting environment and accurate error code. It is the specific information of vue or js before uni-app compilation. [See details](https://uniapp.dcloud.net.cn/uni-stat-v2.html#sourcemap-parse-error)
