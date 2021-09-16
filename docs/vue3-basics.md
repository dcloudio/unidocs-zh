## 介绍


> 已经了解 Vue2，只想了解 Vue3 新功能可以参阅[vue3新功能](https://vue3js.cn/docs/zh/guide/migration/introduction.html#%E6%A6%82%E8%A7%88)！
>  
> 已经有 Vue2 项目，需要适配 Vue3 的可参阅[vue2 项目迁移 vue3](https://uniapp.dcloud.io/migration-to-vue3)！





`Vue.js` 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 `DOM` 的系统，**只关注视图层，易于上手**。所有东西都是响应式的。


 **致谢**

本文大部分内容来源于[vue3中文文档官网](https://vue3js.cn/docs/zh/)，但结合 `uni-app` 做了部分调整，以更有利于开发者快速上手。感谢Vue团队！


**vue3的优势：**

- 响应式系统提升
- 虚拟DOM重写
- 更快，性能比Vue2快1.2~2倍(diff方法优化、静态提升、时间侦听器缓存、[ssr渲染](https://uniapp.dcloud.io/collocation/ssr))
- 更小，按需编译，体积比Vue2更小
- 组合API，加强API设计一致性，实现逻辑模块化和重用
- 加强TypeScript支持
- 暴露了自定义渲染API
- 提高自身可维护性





**vue的优势：**


- 虚拟DOM
- 运行速度快，易于上手
- 便于与第三方库或既有项目整合





在hello uni-app的 `common` 目录有一个工具类 `util.js` ，可以在hello uni-app中搜索这个例子查看。hello uni-app示例代码可从 [github](https://github.com/dcloudio/hello-uniapp) 获取。


`


当然还有一些高级的用法

```js
	<!-- 直接使用js模块的属性。在hello uni-app有示例   -->
	var dateUtils = require('../../../common/util.js').dateUtils; 
	<!-- 将js导入并重命名为echarts，然后使用echarts.来继续执行方法。在hello uni-app有示例 -->
	import * as echarts from '/components/echarts/echarts.simple.min.js'; 
```

**css外部文件导入**。全局样式，在根目录下的 `app.vue` 里写入，每个页面都会加载 `app.vue` 里的样式。




*
`uni-app` 提供了一批[内置组件](https://uniapp.dcloud.io/component/README)。



	- `uni-app` 使用vue的数据绑定方式解决js和 DOM 界面交互的问题。



## 在 uni-app 中使用差异

`uni-app` 在发布到H5时支持所有vue的语法；发布到App时，由于平台限制，无法实现全部vue语法，但 `uni-app` 仍是对vue语法支持度最高的跨端框架。

相比Web平台， Vue.js 在 `uni-app` 中使用差异主要集中在两个方面：

- 新增：`uni-app` 除了支持Vue实例的生命周期，还支持[应用生命周期](https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e5%ba%94%e7%94%a8%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f)以及[页面生命周期](https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f)。
- 受限：相比web平台，在App端部分功能受限。
- uni-app 完整支持 Vue 模板语法。


[uni-app 项目支持 vue 3.0介绍，及升级指南](https://ask.dcloud.net.cn/article/37834)


`HBuilderX 3.2.5-alpha`新增在App平台支持 vue 3.0，至此 `uni-app` 项目对 vue 3.0 的支持情况如下：

- H5/PC Web平台支持，编译器升级为`vite`。
- App 平台：支持，编译器升级为`vite`，`nvue`暂不支持。



**注意事项**

- vue3 响应式基于 `Proxy` 实现，不支持`iOS9`和`ie11`。
- 暂不支持新增的 `Teleport`,`Suspense` 组件。
- 暂不支持 `template` 下存在多个根节点。
- 目前 `HBuilderX 3.2` 起已预置，之前的版本只能使用cli方式。






```html
	<template>
		 <view>
			<view>{{ number + 1 }}</view>
			<view>{{ ok ? 'YES' : 'NO' }}</view>
			<!-- 把一个字符串分割成字符串数组,颠倒其元素的顺序,把数组中的所有元素放入一个字符串 -->
			<view>{{ message.split('').reverse().join('') }}</view>
		 </view>
	</template>
	<script>
	  export default {
		 data() {
			return {
			  number:1,
			  ok:true,
			  message: 'Hello Vue!'
			}
		 }
	  }
	</script>
```



```html
	<template>
	  <view>
			<view v-for="(item,index) in 10">
			<!-- 通过%运算符求余数，实现隔行换色的效果 -->
			<view :class="'list-' + index%2">{{index%2}}</view>
		 </view>
	  </view>
	</template>
	<script>
	  export default {
		 data() {
			return { }
		 }
	  }
	</script>
	<style>
	  .list-0{
		 background-color: #aaaaff;
	  }
	  .list-1{
		 background-color: #ffaa7f;
	  }
	</style>
```




和前端框架中的理解不同，客户端里要实现复用的逻辑，会标记模板节点的状态，添加了 `v-once` 能保证节点只渲染一次，但是并不一定能优化渲染性能，反而可能会拖慢客户端复用节点时的比对效率。



跨端的富文本处理方案详见：[https://ask.dcloud.net.cn/article/35772](https://ask.dcloud.net.cn/article/35772)


`data` 选项已标准化为只接受**返回一个初始数据对象的函数**（注意函数内返回的数据对象不要直接引用函数外的对象）；否则页面关闭时，数据不会自动销毁，再次打开该页面时，会显示上次数据。

```js
	//正确用法，使用函数返回对象
	data() {
		return {
			title: 'Hello'
		}
	}

	//错误写法，会导致再次打开页面时，显示上次数据
	data: {
		title: 'Hello'
	}

	//错误写法，同样会导致多个组件实例对象数据相互影响
	const obj = {
		title: 'Hello'
	}
	data() {
		return {
			obj
		}
	}
```








### 结合 `<template v-for>`

在`Vue3`中，`key` 则应该被设置在 `<template>` 标签上

```html
	<template v-for="item in list" :key="item.id">
		<view>...</view>
		<text>...</text>
	</template>
```


类似地，当使用 `<template v-for>` 时存在使用 `v-if` 的子节点，`key` 应改为设置在 `<template>` 标签上。

```html
	<template v-for="item in list" :key="item.id">
		<view v-if="item.isVisible">...</view>
		<view v-else>...</view>
	</template>
```











- 为兼容各端，不能在 JS 中使用`event.preventDefault()`和`event.stopPropagation()`方法；


- 按键修饰符：`uni-app` 运行在手机端，没有键盘事件，所以不支持按键修饰符。





### 事件映射表

```js
// 事件映射表，左侧为 WEB 事件，右侧为 ``uni-app`` 对应事件

```






### uni-app表单组件

建议开发过程中直接使用 `uni-app`：[表单组件](https://uniapp.dcloud.io/component/button)。

##### 用法示例：

- H5 的 `select` 标签用 `picker` 组件进行代替



- 表单元素 `radio` 用 `radio-group` 组件进行代替









当你有一些数据需要随着其它数据变动而变动时，就可以使用`Watch`来监听他们之间的变化。


`Vue` 实例将会在实例化时调用 `$watch()` ，遍历 `watch` 对象的每一个 `property` 。



#### 监听变量的值变化

示例：

```html
	<template>
		<view>
			<input type="number" v-model="a" style="border: red solid 1px;" />
			<input type="number" v-model="b" style="border: red solid 1px;" />
			<view>总和：{{sum}}</view>
			<button type="default" @click="add">求和</button>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					a:1,
					b:1,
					sum: ""
				}
			},
			watch: {
				/* 使用watch来响应数据的变化，第一个参数为newVal新值，第二个参数oldVal为旧值*/
				a: function(newVal, oldVal) {
					console.log("a--newVal: ", newVal, "a--oldVal: ",oldVal);
				},
				b: function(newVal, oldVal) {
					console.log("b--newVal: ", newVal, "b--oldVal: ",oldVal);
				}
			},
			methods: {
				add() {
					this.sum = parseInt(this.a) + parseInt(this.b)
				}
			}
		}
	</script>
```


以上示例有个问题，就是页面刚加载时，因为没有变化，所以不会执行。下面用`immediate`来解决。


`watch`方法默认就是`handler`，而当`immediate:true`时，就会先执行`handler`方法。


```html
	<template>
		<view>
			<input type="number" v-model="a" style="border: red solid 1px;" />
			<input type="number" v-model="b" style="border: red solid 1px;" />
			<view>总和：{{sum}}</view>
			<button type="default" @click="add">求和</button>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					a:1,
					b:1,
					sum: ""
				}
			},
			watch: {
				a: {
					handler(newVal, oldVal) {
						console.log("a------: ", newVal, oldVal);
					},
					immediate: true//初始化绑定时就会执行handler方法
				},
				b: {
					handler(newVal, oldVal) {
						console.log("b------: ", newVal, oldVal);
					},
					immediate: true//初始化绑定时就会执行handler方法
				}
			},
			methods: {
				add() {
					this.sum = parseInt(this.a) + parseInt(this.b)
				}
			}
		}
	</script>
```



#


```html
	<template>
		<view>
			<input type="number" v-model="obj.a" style="border: red solid 1px;" />
			<input type="number" v-model="obj.b" style="border: red solid 1px;" />
			<view>总和：{{sum}}</view>
			<button type="default" @click="add">求和</button>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					obj: {
						a: 1,
						b: 1,
					},
					sum:""
				}
			},
			watch: {
				obj: {
					handler(newVal, oldVal) {
						console.log('obj-newVal:' + JSON.stringify(newVal), 'obj-oldVal:' + JSON.stringify(oldVal), );
					},
					deep: true//对象中任一属性值发生变化，都会触发handler方法
				}
			},
			methods: {
				add() {
					this.sum = parseInt(this.obj.a) + parseInt(this.obj.b)
				}
			}
		}
	</script>
```


#### 监听对象中单个属性

如果不想监听 `obj` 中其他值，只想监听 `obj.a` 的值的变化，可以写成字符串形式监听。

```js
	export default {
		data() {
			return {
				obj: {
					a: 1,
					b: 1,
				}
			}
		},
		watch: {
			"obj.a": {//监听obj对象中的单个属性值的变化
				handler(newVal, oldVal) {
					console.log('obj-newVal:' + newVal, 'obj-oldVal:' + oldVal);
				}
			}
		}
	}
```


