## vue-basics

我们提供了免费视频教程，在看此文档同时建议结合 [vue入门视频教程](https://learning.dcloud.io/#/?vid=0) ，帮助你更加快速掌握。


 **致谢**

本文大部分内容来源于vue官网，但结合 `uni-app` 做了部分调整，以更有利于开发者快速上手。感谢Vue团队！

- 虚拟DOM
- 运行速度快，易于上手
- 便于与第三方库或既有项目整合


在hello uni-app的 `common` 目录有一个工具类 `util.js` ，可以在hello uni-app中搜索这个例子查看。hello uni-app示例代码可从 [github](https://github.com/dcloudio/hello-uniapp) 获取。


当然还有一些高级的用法

```js
	<!-- 直接使用js模块的属性。在hello uni-app有示例   -->
	var dateUtils = require('../../../common/util.js').dateUtils; 
	<!-- 将js导入并重命名为echarts，然后使用echarts.来继续执行方法。在hello uni-app有示例 -->
	import * as echarts from '/components/echarts/echarts.simple.min.js'; 
```

**css外部文件导入**。全局样式，在根目录下的 `app.vue` 里写入，每个页面都会加载 `app.vue` 里的样式。



`uni-app` 提供了一批[内置组件](https://uniapp.dcloud.io/component/README)。

	- `uni-app` 使用vue的数据绑定方式解决js和 DOM 界面交互的问题。


### 在 uni-app 中使用差异

`uni-app` 在发布到H5时支持所有vue的语法；发布到App时，由于平台限制，无法实现全部vue语法，但 `uni-app` 仍是对vue语法支持度最高的跨端框架。

相比Web平台， Vue.js 在 `uni-app` 中使用差异主要集中在两个方面：

- 新增：`uni-app` 除了支持Vue实例的生命周期，还支持[应用生命周期](/collocation/frame/lifecycle?id=应用生命周期)以及[页面生命周期](/collocation/frame/lifecycle?id=页面生命周期)。
- 受限：相比web平台，在App端部分功能受限，[具体见](/vue-api)。
- uni-app 完整支持 Vue 模板语法。
- App端可以使用更多的vue特性，[详见](https://ask.dcloud.net.cn/article/36599)。



> 已经了解 Vue2，只想了解 Vue3 新功能可以参阅[vue3新功能](https://vue3js.cn/docs/zh/guide/migration/introduction.html#%E6%A6%82%E8%A7%88)！
>  
> 已经有 Vue2 项目，需要适配 Vue3 的可参阅[vue2 项目迁移 vue3](https://uniapp.dcloud.io/migration-to-vue3)！


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



[uni-app 项目支持 vue 3.0介绍，及升级指南](https://ask.dcloud.net.cn/article/37834)


`HBuilderX 3.2.5-alpha`新增在App平台支持 vue 3.0，至此 `uni-app` 项目对 vue 3.0 的支持情况如下：

- H5/PC Web平台支持，编译器升级为`vite`。
- App 平台：支持，编译器升级为`vite`，`nvue`暂不支持。



**注意事项**

- vue3 响应式基于 `Proxy` 实现，不支持`iOS9`和`ie11`。
- 暂不支持新增的 `Teleport`,`Suspense` 组件。
- 暂不支持 `template` 下存在多个根节点。
- 目前 `HBuilderX 3.2` 起已预置，之前的版本只能使用cli方式。



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


类似地，当使用 `<template v-for>` 时存在使用 `v-if` 的子节点，`key` 应改为设置在 `<template>` 标签上。


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

<!-- 监听obj对象中的单个属性值的变化 -->
<!-- 把一个字符串分割成字符串数组,颠倒其元素的顺序,把数组中的所有元素放入一个字符串 -->
<!-- 通过%运算符求余数，实现隔行换色的效果 -->

为节约性能，我们将 `Class` 与 `Style` 的表达式通过 `compiler` 硬编码到 `uni-app` 中，支持语法和转换效果见下：




## vue-components

下面是一个基本组件示例，在根`<view>`组件下再次引入一个`<view>`组件，并给组件的text区绑定一个data。

基础组件是内置在uni-app框架中的，包括view、text、input、button、video等几十个基础组件，列表详见：[uni-app基础组件](https://uniapp.dcloud.net.cn/component/README?id=%e5%9f%ba%e7%a1%80%e7%bb%84%e4%bb%b6)

但仅有基础组件是不够用的，实际开发中会有很多封装的组件。

比如我们需要一个五角星点击评分的组件，在DCloud的插件市场里可以获取到：[https://ext.dcloud.net.cn/plugin?id=33](https://ext.dcloud.net.cn/plugin?id=33)

把这个uni-rate组件导入到你的uni-app项目下，在需要的vue页面里引用它，就可以在指定的地方显示出这个五角星组件。

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



`uni-app` 支持配置全局组件，需在 `main.js` 里进行全局注册，注册后就可在所有页面里使用该组件。



`uni-app` 搭建了组件的插件市场，有很多现成的组件，若下载符合components/组件名称/组件名称.vue目录结构的组件，均可直接使用。[uni-app插件市场](https://ext.dcloud.net.cn/)


> `uni-app`只支持 vue单文件组件（.vue 组件）。其他的诸如：动态组件，自定义 `render` ，和 `<script type="text/x-template">` 字符串模版等，在非H5端不支持。



```html
//index 父组件页面
<template>
	<view>
		<base-input ref="usernameInput"></base-input>
		<button type="default" @click="getFocus">获取焦点</button> 
	</view>
</template>
<script>
	export default {
		methods:{
			getFocus(){
				//通过组件定义的ref调用focus方法
				this.$refs.usernameInput.focus()
			}
		}
	}
</script>
```


**注意**

> 非H5端只能用于获取自定义组件，不能用于获取内置组件实例（如：view、text）


- 注意：在app和h5端表现不一致，h5端获取到的是浏览器原生事件。


> 已经了解 Vue 2，只想了解 Vue 3 的新功能可以参阅[vue3新功能](https://vue3js.cn/docs/zh/guide/migration/introduction.html#%E6%A6%82%E8%A7%88)！
>  
> 已经有 Vue 2项目，需要适配 Vue 3 的可参阅[vue2 项目迁移 vue3](https://uniapp.dcloud.io/migration-to-vue3)！


根节点为 `<template>`，这个 `<template>` 下在App、H5可以有多个根 `<view>` 组件。

则监听这个名字的 `kebab-case` (短横线隔开式)  版本是不会有任何效果的：

```html
	<!-- 没有效果 -->
	<my-component @my-event="doSomething"></my-component>
```


不同于组件和 `prop`，事件名不会被用作一个 `JavaScript` 变量名或 `property` 名，所以就没有理由使用 `camelCase` (驼峰命名法) 或 `PascalCase`(帕斯卡命名法) 了。并且 `v-on` 事件监听器在 `DOM` 模板中会被自动转换为全小写 (因为 `HTML` 是大小写不敏感的)，所以 `@myEvent` 将会变成 `@myevent`——导致 `myEvent` 不可能被监听到。

因此，我们推荐你始终使用 `kebab-case` (短横线隔开式)  的事件名。

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

<!-- 子组件通过this.$emit()方法修改number值 -->


## vue-api


只在Web环境下支持
强烈不推荐，会覆盖uni-app框架配置的内置组件
uni-app使用的vue是只包含运行时的版本
注意：此处并不能确定子组件被全部挂载，如果需要子组件完全挂载之后在执行操作可以使用$nextTick
H5端 `view`、`text` 等内置标签是以 Vue 组件方式实现，`$parent` 会获取这些到内置组件，导致的问题是 `this.$parent` 与其他平台不一致，解决方式是使用 `this.$parent.$parent` 获取或自定义组件根节点由 `view` 改为 `div`
非H5端只能用于获取自定义组件，不能用于获取内置组件实例（如：view、text）	

|v-is	| 在 `DOM` 内模板使用时，模板受原生 `HTML` 解析规则的约束。 [详情](https://vue3js.cn/docs/zh/api/directives.html#v-is) 	|√	| x	| -	|


2. 如何设置全局的数据和全局的方法

uni-app 内置了 [Vuex](https://uniapp.dcloud.io/vue-vuex) ，在app里的使用，可参考 `hello-uniapp` ` store/index.js`。






## vuex

uni-app 内置了 [Vuex](https://vuex.vuejs.org/zh/) 。


### 优势与使用场景

- Vuex的状态存储是响应式的，可跟踪每一个状态变化，一旦它改变，所有关联组件都会自动更新相对应的数据。
- 共享数据，解决了非父子组件的消息传递（将数据存放在state中）。
- 统一状态管理，减少了请求次数，有些情景可以直接从内存中的state获取数据。


###  Vuex与全局变量区别


|vuex	|全局变量|
|--	|--	|
|不能直接改变store里面的变量，由统一的方法修改数据	|可以任意修改	|
|每个组件可以根据自己vuex的变量名引用不受影响	|全局变量可能操作命名污染	|
|解决了多组件之间通信的问题	|跨页面数据共享	|
|适用于多模块、业务关系复杂的中大型项目	|适用于demo或者小型项目	|


### 什么时候需要用vuex？

- 当一个组件需要多次派发事件时。例如购物车数量加减。
- 跨组件共享数据、跨页面共享数据。例如订单状态更新。
- 需要持久化的数据。例如登录后用户的信息。
- 当您需要开发中大型应用，适合复杂的多模块多页面的数据交互，考虑如何更好地在组件外部管理状态时。




### 项目结构


使用 Vuex 需要遵守的规则：

- 应用层级的状态应该集中到单个 `store` 对象中。

- 提交 `mutation` 是更改状态的唯一方法，并且这个过程是同步的。

- 异步逻辑都应该封装到 `action` 里面。

只要你遵守以上规则，如何组织代码随你便。如果你的 `store` 文件太大，只需将 `action` 、`mutation` 和 `getter` 分割到单独的文件。

对于大型应用，我们会希望把 `Vuex` 相关代码分割到模块中。下面是项目结构示例：


```html
├── pages
├── static
└── store
    ├── index.js          # 我们组装模块并导出 store 的地方
    ├── actions.js        # 根级别的 action
    ├── mutations.js      # 根级别的 mutation
    └── modules           # 模块文件夹
        ├── cart.js       # 购物车模块
        └── products.js   # 产品模块
├── App.vue
├── main.js
├── manifest.json
├── pages.json
└── uni.scss
```



单一状态树，定义应用状态的默认初始值，页面显示所需的数据从该对象中进行读取。


1. 在 `uni-app` 项目根目录下，新建 `store` 目录，在此目录下新建 `index.js` 文件。在 `index.js` 文件配置如下：

```js
<!-- 页面路径：store/index.js -->
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);//vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
	state:{//存放状态
		"username":"foo",
		"age":18
	}
})
export default store
```


2. 在 `main.js` 中导入文件。

```js
<!-- 页面路径：main.js -->
import Vue from 'vue'
import App from './App'
import store from './store'

Vue.prototype.$store = store

// 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
const app = new Vue({
	store,
	...App
})
app.$mount()

```

**获取state**


1. 通过属性访问，需要在根节点注入 `store` 。

```html
<!-- 页面路径：pages/index/index.vue -->
<template>
	<view>
		<text>用户名：{{username}}</text>
	</view>
</template>
<script>
	import store from '@/store/index.js';//需要引入store
	export default {
		data() {
			return {}
		},
		computed: {
			username() {
				return store.state.username 
			}
		}
	}
</script>
```

2. 在组件中使用，通过 `this.$store` 访问到 `state` 里的数据。

```html
<!-- 页面路径：pages/index/index.vue -->
<template>
	<view>
		<text>用户名：{{username}}</text>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		computed: {
			username() {
				return this.$store.state.username 
			}
		}
	}
</script>
```


#### mapState

3. 通过 `mapState` 辅助函数获取。


### Getter

`Vuex` 允许我们在 `store` 中定义`“getter”`（可以认为是 `store` 的计算属性），对 `state` 的加工，是派生出来的数据。

- 可以在多组件中共享 `getter` 函数，这样做还可以提高运行效率。

在 `uni-app` 项目根目录下，`store` 目录 `index.js` 文件下：

在 `store` 上注册 `getter`，`getter` 方法接受以下参数：

- state, 如果在模块中定义则为模块的局部状态
- getters, 等同于 store.getters

```js
<!-- 页面路径：store/index.js -->
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		todos: [{
				id: 1,
				text: '我是内容一',
				done: true
			},
			{
				id: 2,
				text: '我是内容二',
				done: false
			}
		]
	},
	getters: {
		doneTodos: state => {
			return state.todos.filter(todo => todo.done)
		},
		doneTodosCount: (state, getters) => {
			//state ：可以访问数据
			//getters：访问其他函数，等同于 store.getters
			return getters.doneTodos.length
		},
		getTodoById: (state) => (id) => {
			return state.todos.find(todo => todo.id === id)
		}
	}
})

export default store
```


**获取getters**

2. 通过 `this.$store` 访问。


4. 通过 `mapGetters` 辅助函数访问。


通俗的理解，`mutations` 里面装着改变数据的方法集合，处理数据逻辑的方法全部放在 `mutations` 里，使数据和视图分离。

**注意**：`store.commit` 调用 `mutation`（需要在根节点注入 store）。



**传入参数**

还是以累加器的例子来实现 `mutation` 函数的传参，来动态定义累加的数量。


- 在 `mutation` 传参（载荷）可以传递一个参数。

- 在 `mutation` 传参（载荷）可以也可以传递一个对象。让我们修改上面累加器的例子：



```html
<!-- 页面路径：pages/index/index.vue -->
<template>
	<view>
		<view>数量：{{count }}</view>
		<button @click="addCount">增加</button>
	</view>
</template>
<script>
	import store from '@/store/index.js'
	export default {
		computed: {
			count() {
				return this.$store.state.count
			}
		},
		methods: {
			addCount () {//把载荷和type分开提交
				store.commit('add', { amount: 10 })
			}
		}
	}
</script>
```


**提交方式**

```html
<!-- 页面路径：pages/index/index.vue -->
<template>
	<view>
		<view>数量：{{count }}</view>
		<button @click="addCount">增加</button>
	</view>
</template>
<script>
	import store from '@/store/index.js'
	export default {
		computed: {
			count() {
				return this.$store.state.count
			}
		},
		methods: {
			addCount() {//整个对象都作为载荷传给 mutation 函数
				store.commit({
					type: 'add',
					amount: 6
				})
			}
		}
	}
</script>
```


2. 通过 `mapMutations` 辅助函数提交。

创建组件方法提交 `mutation`。

使用 `mapMutations` 辅助函数将组件中的 `methods` 映射为 `store.commit` 调用（需要在根节点注入 `store`）。


```html
<!-- 页面路径：pages/index/index.vue -->
<template>
	<view>
		<view>数量：{{count}}</view>
		<button @click="add">增加</button>
	</view>
</template>
<script>
	import { mapMutations } from 'vuex'//引入mapMutations
	export default {
		computed: {
			count() {
				return this.$store.state.count
			}
		},
		methods: {
			...mapMutations(['add'])//对象展开运算符直接拿到add
		}
	}
</script>
```



我们要通过提交 `mutation` 的方式来改变状态数据，是因为我们想要更明确地追踪到状态的变化。如果是类似下面这样异步的话：


我们就不知道什么时候状态会发生改变，所以也就无法追踪了，这与 `mutation` 的设计初心相悖，所以强制规定它必须是同步函数。


`action` 可以执行任意的同步和异步操作

```js
<!-- 页面路径：store/index.js -->
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		count: 1
	},
	mutations:{
		add(state) {
			// 变更状态
			state.count += 2
		}
	},
	actions:{
		addCountAction (context) {
			//在执行累加的时候，会等待两秒才执行
		    setTimeout(function () {
				context.commit('add')
		    }, 2000)
		}
	}
})
export default store
```



2. 通过 `mapActions` 辅助函数分发。

- `mapActions` 也支持传入参数（载荷）：

- `mapActions` 也支持传递一个对象：


### Module

1. 在 `store` 文件夹下新建 `modules` 文件夹，并在下面新建 `moduleA.js` 和 `moduleB.js` 文件用来存放 `vuex` 的 `modules` 模块。


```html
├── components             # 组件文件夹
    └── myButton 
        └── myButton.vue   # myButton组件
├── pages
    └── index 
	    └── index.vue      # index页面
├── static
├── store
    ├── index.js          # 我们组装模块并导出 store 的地方
    └── modules           # 模块文件夹
        ├── moduleA.js    # 模块moduleA
        └── moduleB.js    # 模块moduleB
├── App.vue
├── main.js
├── manifest.json
├── pages.json
└── uni.scss
```


2. 在 `main.js` 文件中引入 `store`。

```js
<!-- 页面路径：main.js -->
	import Vue from 'vue'
	import App from './App'
	import store from './store'

	Vue.prototype.$store = store

	// 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
	const app = new Vue({
		store,
		...App
	})
	app.$mount()
```


3. 在项目根目录下，新建 `store` 文件夹，并在下面新建 `index.js` 文件，作为模块入口，引入各子模块。

```js
<!-- 页面路径：store/index.js -->
	import Vue from 'vue'
	import Vuex from 'vuex'

	import moduleA from '@/store/modules/moduleA'
	import moduleB from '@/store/modules/moduleB'

	Vue.use(Vuex)
	export default new Vuex.Store({
		modules:{
			moduleA,moduleB
		}
	})
```

4. 子模块 `moduleA` 页面内容。

```js
<!-- 子模块moduleA路径：store/modules/moduleA.js -->
export default {
	state: {
		text:"我是moduleA模块下state.text的值"
	},
	getters: {
		
	},
	mutations: {
		
	},
	actions: { 
		
	}
}
```

5. 子模块 `moduleB` 页面内容。

```js
<!-- 子模块moduleB路径：store/modules/moduleB.js -->
export default {
	state: {
		timestamp: 1608820295//初始时间戳
	},
	getters: {
		timeString(state) {//时间戳转换后的时间
			var date = new Date(state.timestamp);
			var year = date.getFullYear();
			var mon  = date.getMonth()+1;
			var day  = date.getDate();
			var hours = date.getHours();
			var minu = date.getMinutes();
			var sec = date.getSeconds();
			var trMon = mon<10 ? '0'+mon : mon
			var trDay = day<10 ? '0'+day : day
			return year+'-'+trMon+'-'+trDay+" "+hours+":"+minu+":"+sec;
		}
	},
	mutations: {
		updateTime(state){//更新当前时间戳
			state.timestamp = Date.now()
		}
	},
	actions: {

	}
}
```


6. 在页面中引用组件 myButton ，并通过 `mapState` 读取 `state` 中的初始数据。


```html
<!-- 页面路径：pages/index/index.vue -->
<template>
	<view class="content">
		<view>{{text}}</view>
		<view>时间戳：{{timestamp}}</view>
		<view>当前时间:{{timeString}}</view>
		<myButton></myButton>
	</view>
</template>
<script>
	import {mapState,mapGetters} from 'vuex' 
	export default {
		computed: {
			...mapState({
				text: state => state.moduleA.text,
				timestamp: state => state.moduleB.timestamp
			}),
			...mapGetters([
				'timeString'
			])
		}
	}
</script>
```

7. 在组件 `myButton`中，通过 `mutations` 操作刷新当前时间。

```html
<!-- 组件路径：components/myButton/myButton.vue -->
<template>
	<view>
		<button type="default" @click="updateTime">刷新当前时间</button>
	</view>
</template>
<script>
	import {mapMutations} from 'vuex'
	export default {
		data() {
			return {}
		},
		methods: {
			...mapMutations(['updateTime'])
		}
	}
</script>

```

vue是单向数据流，子组件不能直接修改父组件的数据，而通过vuex状态管理实现：把组件的共享状态抽取出来，以一个全局单例模式管理。在这种模式下，我们的组件树构成了一个巨大的“视图”，不管在树的哪个位置，任何组件都能获取状态或者触发行为！





