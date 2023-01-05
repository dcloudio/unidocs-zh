运行，指将项目运行起来，可以一边修改代码、一边立即看到修改结果，同时可以打log日志（console.log）。

而调试，也称之为`debug`，在运行的基础之上，进一步可以打断点、单步跟踪、看堆栈信息。

uni-app可以用cli项目的npm命令运行，但更重要的是，DCloud提供了uni-app的专用开发工具HBuilder，可以更好的开发uni-app。

如果使用cli项目，在非HBuilder环境下运行uni-app，那就执行普通的 `npm run dev:%platform%`命令即可，使用外部工具运行。[详见](../quickstart-cli.md#运行、发布uni-app)

本文重点讲述HBuilder中的运行和调试方法。

简要来讲，HBuilder为uni-app提供了内置的web浏览器、web端调试环境、App的真机运行环境、App调试环境、uniCloud运行环境、uniCloud调试环境。

- 运行容器方面

|					|web						|app		|小程序				|uniCloud|
|--					|--							|--			|--					|--		|
|uni-app+其他ide		|运行在普通浏览器				|不支持		|三方小程序开发工具	|不支持	|
|uni-app+HBuilder	|HBuilder额外内置了浏览器		|支持		|三方小程序开发工具	|支持	|

- debug方面

|					|web		|app	|小程序					|uniCloud|
|--					|--			|--		|--						|--		|
|uni-app+其他ide		|视ide功能	|不支持	|依靠三方小程序开发工具	|不支持	|
|uni-app+HBuilder	|支持		|支持	|依靠三方小程序开发工具	|支持	|

## 运行调试入口

### 运行入口
在HBuilder中，有顶部菜单、toolbar运行按钮、快捷键三种运行入口。

1. 顶部运行菜单

![](https://web-assets.dcloud.net.cn/unidoc/zh/menurun.png)

2. toolbar工具栏上的运行按钮

![](https://web-assets.dcloud.net.cn/unidoc/zh/toolbarrun.png)

	toolbar的运行按钮点击后会展开一个菜单。这个菜单可配置，通过`自定义菜单`将不常用的运行项目折叠起来。

3. 快捷键
	
	运行快捷键是【Ctrl+r】
	
	弹出的菜单还支持键盘快捷选择：按回车可以选中菜单的第一项；按数字可以快捷选中菜单项开头数字对应的菜单项。

如果你不能看到相关菜单，那么HBuilder当前打开的文件可能不是uni-app项目下的文件。

### 调试入口

uni-app一般是先运行后调试。debug的入口在运行之后的控制台上。

运行后的控制台，右上角会有一个红色虫子图标或调试的checkbox。

![](https://hx.dcloud.net.cn/static/snapshots/app/h5-debug/open-debug.png)

### 线上平台排错

应用上线后，各种用户环境下可能会有报错，需要开发者统计和分析。但三方统计系统（如友盟、阿拉丁、百度），对运行端的报错采集，提示的是uni-app编译器编译后的代码报错的行数，相当于乱码，无法告知开发者是uni-app的vue或js的哪一行代码报错。

为了解决这个问题，DCloud提供了uni统计的sourceMap功能，在uni统计后台可以清晰的看到报错的环境和准确的报错代码，是uni-app编译前的vue或js的具体信息。[详见](https://uniapp.dcloud.net.cn/uni-stat-v2.html#sourcemap-parse-error)
