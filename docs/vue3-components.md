
> 已经了解 Vue 2，只想了解 Vue 3 的新功能可以参阅[vue3新功能](https://vue3js.cn/docs/zh/guide/migration/introduction.html#%E6%A6%82%E8%A7%88)！
>  
> 已经有 Vue 2项目，需要适配 Vue 3 的可参阅[vue2 项目迁移 vue3](https://uniapp.dcloud.io/migration-to-vue3)！



	- 根节点为 `<template>`，这个 `<template>` 下在App、H5可以有多个根 `<view>` 组件。


下面是一个基本组件示例，在根`<view>`组件下再次引入一个`<view>`组件，并给组件的`text`区绑定一个`data`。


基础组件是内置在`uni-app`框架中的，包括`view`、`text`、`input`、`button`、`video`等几十个基础组件，列表详见：[uni-app基础组件](https://uniapp.dcloud.net.cn/component/README?id=%e5%9f%ba%e7%a1%80%e7%bb%84%e4%bb%b6)

但仅有基础组件是不够用的，实际开发中会有很多封装的组件。

比如我们需要一个五角星点击评分的组件，在DCloud的插件市场里可以获取到：[https://ext.dcloud.net.cn/plugin?id=33](https://ext.dcloud.net.cn/plugin?id=33)

把这个`uni-rate`组件导入到你的`uni-app`项目下，在需要的vue页面里引用它，就可以在指定的地方显示出这个五角星组件。

```html
	<!-- 在index.vue页面引用 uni-rate 组件-->
	<template>
		<view>
			<uni-rate></uni-rate><!-- 这里会显示一个五角星，并且点击后会自动亮星 -->
		</view>
	</template>
```








在uni-app工程根目录下的 `components` 目录，创建并存放自定义组件：

```html
	│─components            	符合vue组件规范的uni-app组件目录
	│  └─componentA         	符合‘components/组件名称/组件名称.vue’目录结构，easycom方式可直接使用组件
	│  		└─componentA.vue    可复用的componentA组件
	│  └─component-a.vue      可复用的component-a组件
```



#


`uni-app` 搭建了组件的插件市场，有很多现成的组件，若下载`符合components/组件名称/组件名称.vue`目录结构的组件，均可直接使用。[uni-app插件市场](https://ext.dcloud.net.cn/)



> `uni-app`只支持 vue单文件组件（.vue 组件）。其他的诸如：动态组件，自定义 `render` ，和 `<script type="text/x-template">` 字符串模版等，在非H5端不支持。





则监听这个名字的 `kebab-case` (短横线隔开式)  版本是不会有任何效果的：

```html
	<!-- 没有效果 -->
	<my-component @my-event="doSomething"></my-component>
```


不同于组件和 `prop`，事件名不会被用作一个 `JavaScript` 变量名或 `property` 名，所以就没有理由使用 `camelCase` (驼峰命名法) 或 `PascalCase`(帕斯卡命名法) 了。并且 `v-on` 事件监听器在 `DOM` 模板中会被自动转换为全小写 (因为 `HTML` 是大小写不敏感的)，所以 `@myEvent` 将会变成 `@myevent`——导致 `myEvent` 不可能被监听到。

因此，我们推荐你始终使用 `kebab-case` (短横线隔开式)  的事件名。




示例

```html
	<template>
		<view>
			<!-- 我是counter组件 -->
			<view>counter的值是：{{count}}</view>
			<button type="default" @click="add">+1</button>
		</view>
	</template>
	<script>
		export default {
			//1.声明自定义事件：组件的自定义事件，必须事先声明在emits节点中
			emits:['count-change'],
			data() {
				return {
					count:0
				};
			},
			methods:{
				add(){
					this.count++
					//2.触发自定义事件：当点击+1按钮时，调用this.$emit()方法，触发自定义count-change事件
					this.$emit('count-change')
				}
			}
		}
	</script>
```


```html
	<template>
		<view>
			<!-- 我是父组件 -->
			<!-- 3、监听自定义事件：通过v-on的形式监听自定义事件 -->
			<counter @count-change="getCount"></counter>
		</view>
	</template>
	<script>
		export default {
			methods: {
				getCount(){
					console.log("触发了count-change自定义事件")
				}
			}
		}
	</script>
```




```html
	<template>
		<view>
			<view>父组件-count的值是：{{count}}</view>
			<button type="default" @click="count +=1">+1</button>
			<counter v-model:number="count"></counter>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					count:0
				}
			}
		}
	</script>
```


```html
	<!-- 我是counter组件 -->
	<template>
		<view>
			  <view>子组件-count的值是：{{number}}</view>
			  <button type="default" @click="add">+1</button>
		</view>
	</template>
	<script>
		export default {
			props:['number'],
			emits:['update:number'],
			methods:{
				add(){
					this.$emit('update:number',this.number +1)//子组件通过this.$emit()方法修改number值
				}
			}
		}
	</script>
```



