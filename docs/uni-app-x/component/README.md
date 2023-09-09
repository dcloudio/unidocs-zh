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

**兼容性及注意事项：**

## props

- 仅支持[对象方式](https://cn.vuejs.org/guide/components/props.html#props-declaration)声明。
- 暂不支持[自定义类型校验函数](https://cn.vuejs.org/guide/components/props.html#prop-validation)。

## 自定义事件

- [v-model](tutorial/vue3-components.html#v-model-modifiers) 暂不支持 `capitalize` 修饰符。

## 计算属性和侦听器

- [watch deep](https://uniapp.dcloud.net.cn/tutorial/vue3-basics.html#%E9%80%89%E9%A1%B9-deep) 不支持
- [监听对象中单个属性](https://uniapp.dcloud.net.cn/tutorial/vue3-basics.html#%E7%9B%91%E5%90%AC%E5%AF%B9%E8%B1%A1%E4%B8%AD%E5%8D%95%E4%B8%AA%E5%B1%9E%E6%80%A7) 不支持

## 作用域插槽的类型

作用域插槽需在组件中指定插槽数据类型
```ts
// components/Foo.uvue
<view>
    <slot msg="test msg" />
</view>

import { SlotsType } from 'vue'
export default {
  slots: Object as SlotsType<{
    default: { msg: string }
  }>
}
// page.uvue
<view>
	<Foo>
		<template v-slot="slotProps">
			<text>{{ slotProps.msg }}</text>
		</template>
	</Foo>
</view>
```

## 监听页面生命周期

目前暂不支持在组件内监听页面生命周期，待后续支持组合式 API 后，可通过组合式 API 实现。

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


## 如何开发同时兼容 uni-app x 和 uni-app 的组件

目前有两种方案：

- 目录下同时提供uvue，vue文件，分别适配 uni-app x 和 uni-app

组件作者在 uvue 和 vue 文件中可以自由使用各自的特性，比如 vue 中可以任意使用 js 或 ts 来书写代码，

如果部分组件逻辑被抽离为单独的文件，需要分别命名为各自环境支持的文件类型，导入时不同平台支持的文件类型也不同，

比如 uvue 文件目前不支持引入js或ts，而 vue 文件不能引入 uts 文件

对于现有的 uni-app 组件，通过新建 uvue 文件来渐进式支持 uni-app x，可以避免对已有 uni-app 项目造成影响

- 仅提供一个vue文件，同时适配 uni-app x 和 uni-app

该方案，需要script节点配置lang="ts"，这样才可以在 uni-app 项目中正常书写带有类型的代码，而在 uni-app x 项目中，则会忽略 lang="ts"，当做 uts 代码编译。

当需要区分平台或项目类型时，可以使用对应的条件编译。

<!-- 比如，当需要在 css 中区分原生渲染和webview渲染时

可以通过 APP-UVUE（表示在 uni-app x 项目app端的Android和iOS原生渲染）、APP-NVUE（表示在 uni-app 项目app端的nvue页面原生渲染） 区分，

`#ifdef APP-UVUE || APP-NVUE` 可以表示原生渲染，使用 `ifndef` 则可以取反表示为webview渲染，如 `#ifndef APP-UVUE || APP-NVUE`
 -->
比如通过 UNI-APP-X 来区分项目类型，更多条件编译见：[详情](https://uniapp.dcloud.net.cn/tutorial/platform.html)