传统vue项目开发，引用组件需要`导入 - 注册 - 使用`三个步骤，如下：
In traditional vue project development, referencing components requires `import-registration-use` three steps, as follows:

```html
<template>
	<view>
		<!-- 3.使用组件 -->
		<uni-rate text="1"></uni-rate>
	</view>
</template>
<script>
	// 1. 导入组件
	import uniRate from '@/components/uni-rate/uni-rate.vue';
	export default {
		components: { uniRate } // 2. 注册组件
	}
</script>
```

Vue 3.x增加了`script setup`特性，将三步优化为两步，无需注册步骤，更为简洁：
Vue 3.x adds the `script setup` feature, which optimizes three steps into two steps, without registration steps, and is more concise:

```html
<template>
	<view>
		<!-- 2.使用组件 -->
		<uni-rate text="1"></uni-rate>
	</view>
</template>
<script setup>
	// 1. 导入组件
	import uniRate from '@/components/uni-rate/uni-rate.vue';
</script>
```

`uni-app`的`easycom`机制，将组件引用进一步优化，开发者只管使用，无需考虑导入和注册，更为高效：
The `easycom` mechanism of `uni-app` further optimizes the reference of components, and developers can just use it without considering import and registration, which is more efficient:


```html
<template>
	<view>
		<!-- 1.使用组件 -->
		<uni-rate text="1"></uni-rate>
	</view>
</template>
<script>
</script>
```

在 uni-app 项目中，页面引用组件和组件引用组件的方式都是一样的（可以理解为：页面是一种特殊的组件），均支持通过 `easycom` 方式直接引用。
In the uni-app project, the page reference component and the component reference component are the same way (it can be understood as: page is a special component), both support direct reference through `easycom`.

easycom 规范详细介绍，参考：[easycom](/collocation/pages.html#easycom)
For a detailed introduction to the easycom specification, refer to: [easycom](/collocation/pages.html#easycom)