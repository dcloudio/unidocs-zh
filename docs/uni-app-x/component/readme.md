# uvue组件概述

uni-app x支持vue组件，不支持小程序wxml组件。

支持[easycom](/component/README.md#easycom)。

uvue的组件，可以使用前端技术编写，也可以使用原生技术编写。

- 前端技术即新建一个vue或uvue文件，按vue组件规范编写代码。
- 原生的uts组件插件，指把原生的、需要在界面上显示的组件，编写uts代码，通过uni_modules插件的方式集成到uni-app项目中。比如
	* lottie组件，使用uts调用原生的lottie sdk来开发组件，再引入页面中。[详见](https://ext.dcloud.net.cn/plugin?name=uni-animation-view)
	* video组件，其实官方的video，也是用uts组件插件实现的
	
	之所以称之为`uts组件插件`，是相对于另一个分类`uts api插件`。
	
	uts组件插件的开发教程，[详见](/plugin/uts-component.md)

## vue 与 uvue 不同文件后缀的优先级 @priority

新建组件时，默认组件的后缀名为.vue。而不是.uvue。

.vue里面写uvue的语法，可以正常被.uvue页面引用和编译。

.vue里写条件编译，可以制作同时满足uni-app和uni-app x的组件。

但是uni-app x也支持.uvue文件的组件。

当你手动import或easycom手动配置规则，可以指定文件名后缀。比如`import PageHead from '@/components/page-head.uvue'`

但如果未明确指定组件后缀名的情况，且同一个组件目录下即存在.vue文件、又存在.uvue文件，
此时 `vue` 组件和 `uvue` 组件的优先级如下：
- 在 `uni-app x` 中，优先使用 `uvue` 组件，如果不存在 `uvue` 组件，则使用 `vue` 组件。
- 在 `uni-app` 中，只支持使用 `vue` 组件。
