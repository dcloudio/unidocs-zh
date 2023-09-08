
> 已经了解 Vue 2，只想了解 Vue 3 的新功能可以参阅[vue3新功能](https://v3.cn.vuejs.org/guide/migration/introduction.html#%E6%A6%82%E8%A7%88)！
> Already know Vue 2, just want to know the new features of Vue 3, you can refer to [vue3 new features](https://v3.cn.vuejs.org/guide/migration/introduction.html#%E6%A6%82%E8 %A7%88)!
>  
> 已经有 Vue 2项目，需要适配 Vue 3 的可参阅[vue2 项目迁移 vue3](https://uniapp.dcloud.io/migration-to-vue3)！
> There are already Vue 2 projects, and those that need to adapt to Vue 3 can be referred to [Vue2 project migration vue3](https://uniapp.dcloud.io/migration-to-vue3)!


## 概念
## Concept

- 组件是视图层的基本组成单元。
- Components are the basic building blocks of the view layer.
- 组件是一个单独且可复用的功能模块的封装。
- The component is an encapsulation of a single functional module.
- 一个组件包括开始标签和结束标签，标签上可以写属性，并对属性赋值。内容则写在两个标签之内。
- A component includes a start tag and an end tag. Attributes can be written on the label and assigned values to the attributes. The content is written in two labels.
	- 根节点为 `<template>`，这个 `<template>` 下在App、H5可以有多个根 `<view>` 组件，在小程序只能有一个根 `<view>` 组件。
	- the root node is `<template> `, this`<template> ` Under App, H5 can have multiple roots`<view> `Component, there can only be one root in the applet`<view> ` component.
	- 一个组件的 data 选项必须是一个函数。
	- The data option of a component must be a function.

下面是一个基本组件示例，在根`<view>`组件下再次引入一个`<view>`组件，并给组件的`text`区绑定一个`data`。
The following is an example of a basic component. Under the root `<view>` component, introduce a `<view>` component again, and bind a `data` to the `text` area of the component.
```html
	<template>
		<view>
			<text>{{userName}}</text>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					"userName":"foo"
				}
			}
		}
	</script>
```

基础组件是内置在`uni-app`框架中的，包括`view`、`text`、`input`、`button`、`video`等几十个基础组件，列表详见：[uni-app基础组件](https://uniapp.dcloud.net.cn/component/README?id=%e5%9f%ba%e7%a1%80%e7%bb%84%e4%bb%b6)
The basic components are built into the framework of `uni-app`, including dozens of basic components such as `view`, `text`, `input`, `button`, and `video`. The list is detailed in: [uni-app basic components](https://uniapp.dcloud.net.cn/component/README?id=%e5%9f%ba%e7%a1%80%e7%bb%84%e4%bb%b6).

但仅有基础组件是不够用的，实际开发中会有很多封装的组件。
But basic components alone are not enough. There will be many encapsulated components in actual development.

比如我们需要一个五角星点击评分的组件，在DCloud的插件市场里可以获取到：[https://ext.dcloud.net.cn/plugin?id=33](https://ext.dcloud.net.cn/plugin?id=33)
For example, if we need a pentagram click rating component, it is available in the DCloud plug-in market: [https://ext.dcloud.net.cn/plugin?id=33](https://ext.dcloud.net.cn/plugin?id=33)

把这个`uni-rate`组件导入到你的`uni-app`项目下，在需要的vue页面里引用它，就可以在指定的地方显示出这个五角星组件。
Import this `uni-rate` component into your `uni-app` project, refer to it in the required vue page, and the pentagram component can be displayed in the specified place.

```html
	<!-- 在index.vue页面引用 uni-rate 组件-->
	<!-- Refer the uni-rate component on the index.vue page -->
	<template>
		<view>
			<uni-rate></uni-rate><!-- 这里会显示一个五角星，并且点击后会自动亮星 -->
		</view>
	</template>
```



## 优势
## Advantage


- 可以将组件进行任意次数的复用。
- The components can be reused any number of times.
- 合理的划分组件，有助于提高应用性能。
- Reasonable division of components helps improve application performance.
- 代码更加方便组织和管理，并且扩展性也更强，便于多人协同开发。
- The code is more convenient to organize and manage, and it is more extensible, facilitating collaborative development by multiple people.
- 组件化开发能大幅度提高应用开发效率、测试性、复用性等。
- Component development can greatly improve application development efficiency, testability, reusability, etc.




## 注册
## Registered

在注册一个组件的时候，我们始终需要给它一个名字。
When registering a component, we always need to give it a name. 
定义组件名的方式有两种：
There are two ways to define component names:

- 使用 kebab-case
- With kebab-case

当使用 `kebab-case` (短横线分隔命名) 定义一个组件时，你也必须在引用这个自定义元素时使用 `kebab-case`，例如 `<my-component-name>`。
When using kebab-case (name separated by dashes) to define a component, you must also use kebab-case when referencing this custom element, for example `<my-component-name>`.

- 使用 PascalCase
- With PascalCase

当使用 `PascalCase` (首字母大写命名) 定义一个组件时，你在引用这个自定义元素时两种命名法都可以使用。
When defining a component using PascalCase (name with initial capital letters), you can use both nomenclatures when referencing this custom element.
也就是说 `<my-component-name>` 和 `<MyComponentName>` 都是可接受的。
Both `<my-component-name>`and `<MyComponentName>`are acceptable.


在uni-app工程根目录下的 `components` 目录，创建并存放自定义组件：
Create and store custom components in the `components` directory under the root directory of the uni-app project:

```html
	│─components            	符合vue组件规范的uni-app组件目录
	│  └─componentA         	符合‘components/组件名称/组件名称.vue’目录结构，easycom方式可直接使用组件
	│  		└─componentA.vue    可复用的componentA组件
	│  └─component-a.vue      可复用的component-a组件
```



### 全局注册
### Global registration

`uni-app` 支持配置全局组件，需在 `main.js` 里进行全局注册，注册后就可在所有页面里使用该组件。
`uni-app` supports the configuration of global components. Global registration is required in `main.js`, and the component can be used in all pages after registration.

**注意**
**Note**

- app.component 的第一个参数必须是静态的字符串。
- The first parameter of app.component must be a static string.
- nvue 页面暂不支持全局组件。
- The nvue page does not currently support global components.

1. `main.js` 里进行全局导入和注册
1. Global import and registration in `main.js`

```js
	import App from './App'
	import {createSSRApp} from 'vue'
	//引入组件
	//import components
	import myComponent from './components/my-component/my-component.vue'
	export function createApp() {
		const app = createSSRApp(App)
		//调用app.component方法全局注册组件
		//invoke app.component
		app.component('my-component', myComponent)
		return {
			app
		}
	}
```

2. `index.vue` 里可直接使用组件
2. Components can be used directly in`index.vue`
 

```html
	<template>
		<view>
			<my-component></my-component>
		</view>
	</template>
```


### 局部注册
### Partial registration


局部注册之前，在需要引用该组件的页面，导入你想使用的组件。
Before partial registration, import the component you want to use on the page that needs to reference the component.

**页面引入组件方式**
**The way the page introduces components**


如下通过两种方式导入一个角标的组件库，[详见](https://ext.dcloud.net.cn/plugin?id=21)，推荐使用 `easycom` 方式引入。
The following two ways to import a corner label component library[https://ext.dcloud.net.cn/plugin?id=21](https://ext.dcloud.net.cn/plugin?id=21), recommended to use `easycom` to introduce.

1. **传统vue规范：** 在 index.vue 页面中，通过 `import` 方式引入组件 ，在 `components` 选项中定义你想要使用的组件。
1. **Traditional vue specifications:** On the index.vue page, import the component as `import` ,and define the `components`you want to use  in the Components option.

```html
	<!-- 在index.vue引入 uni-badge 组件-->
	<!-- Introduce the uni-badge component in index.vue -->
	<template>
		<view>
			<uni-badge text="1"></uni-badge><!-- 3.使用组件 -->
		</view>
	</template>
	<script>
		import uniBadge from '@/components/uni-badge/uni-badge.vue';//1.导入组件（这步属于传统vue规范，但在uni-app的easycom下可以省略这步）
		export default {
			components:{uniBadge }//2.注册组件（这步属于传统vue规范，但在uni-app的easycom下可以省略这步） 
		}
	</script>
```

对于 `components` 对象中的每个 `property` 来说，其 `property` 名就是自定义元素的名字，其 `property` 值就是这个组件的选项对象。
For the `components`object of each property, its property name is the name of the custom elements, objects whose property value is the option of this component.

在对象中放一个类似 `uniBadge` 的变量名其实是 `uniBadge : uniBadge`  的缩写，即这个变量名同时是：
Putting a variable name similar to uniBadge in the object is actually uniBadge: short for uniBadge, that is, the variable name is also:

- 用在模板中的自定义元素的名称
- The name of the custom element used in the template
- 包含了这个组件选项的变量名(仅支持驼峰法命名)
- The variable name that contains this component option (Only hump naming is supported)


2. **通过uni-app的[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)：** 将组件引入精简为一步。只要组件安装在项目的 `components` 目录下，并符合 `components/组件名称/组件名称.vue` 目录结构。就可以不用引用、注册，直接在页面中使用。
2. **[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)**  : introduce the components into one step. As long as the components are installed in the project `components`directory, and in accordance with `components/component-name/component-name.vue`the directory structure. You can use it directly on the page without quoting or registering.


```html
	<!-- 在index.vue引入 uni-badge 组件-->
	<!-- Introduce the uni-badge component in index.vue -->
	<template>
		<view>
			<uni-badge text="1"></uni-badge><!-- 3.使用组件 -->
		</view>
	</template>
	<script>
		// 这里不用import引入，也不需要在components内注册uni-badge组件。template里就可以直接用
		// There is no need to import or register a uni-badge component in Components. Template can be used directly
		export default {
			data() {
				return {
				}
			}
		}
	</script>
```

- **easycom是自动开启的**，不需要手动开启，有需求时可以在 `pages.json` 的 `easycom` 节点进行个性化设置，[详见](https://uniapp.dcloud.io/collocation/pages?id=easycom)。
- **[Easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom) is automatically turned on** , you do not need to manually open ,when there is a demand `pages.json`of `easycom`nodes personalize .

- 不管`components`目录下安装了多少组件，`easycom`打包后会自动剔除没有使用的组件，对组件库的使用尤为友好。
- No matter how many components are installed in the components directory, easycom will automatically remove unused components after packaging, which is particularly friendly to the use of component libraries.



组件是 `vue` 技术中非常重要的部分，组件使得与ui相关的轮子可以方便的制造和共享，进而使得 `vue` 使用者的开发效率大幅提升。
Component is a very important part of the technology in `vue`.Components allow UI-related wheels to be easily manufactured and shared, which in turn makes development efficiency for `vue`users significantly higher.

`uni-app` 搭建了组件的插件市场，有很多现成的组件，若下载`符合components/组件名称/组件名称.vue`目录结构的组件，均可直接使用。[uni-app插件市场](https://ext.dcloud.net.cn/)
`uni-app` has built a component plug-in market, and there are many ready-made components. If you download the components of the `Comply with components/ component name/ component name.vue` directory structure, you can use them directly. [uni-app plug-in market](https://ext.dcloud.net.cn/)



> `uni-app`只支持 vue单文件组件（.vue 组件）。其他的诸如：动态组件，自定义 `render` ，和 `<script type="text/x-template">` 字符串模版等，在非H5端不支持。
> `uni-app` only supports vue single file components (.vue components). Others such as: dynamic components, custom `render` , and `<script type="text/x-template">` String template, are not supported at non-H5 sides.



## props

`props` 可以是数组或对象，用于接收来自父组件的数据。`props` 可以是简单的数组，或者使用对象作为替代，对象允许配置高级选项，如类型检测、自定义验证和设置默认值。
`props`Can be an array or object, used to receive data from the parent component. `props`It can be a simple array, or use an object as an alternative. The object allows configuration of advanced options such as type detection, custom validation, and setting default values.


|选项	|类型	|说明	|
| Options   | Types of   | Description        |
|--	|--	|--	|
|type	| `String` 、 `Number` 、 `Boolean` 、 `Array` 、 `Object` 、 `Date` 、 `Function` 、 `Symbol` ，任何自定义构造函数、或上述内容组成的数组	|会检查一个 `prop` 是否是给定的类型，否则抛出警告	|
|default	|any	|为该 `prop` 指定一个默认值。如果该 `prop` 没有被传入，则换做用这个值。对象或数组的默认值必须从一个工厂函数返回。`uni-app x` 中 必填	|
|required	|Boolean	|定义该 `prop` 是否是必填项, `uni-app x` 暂不支持|
|validator	|Function	|自定义验证函数会将该 `prop` 的值作为唯一的参数代入。在非生产环境下，如果该函数返回一个 `false` 的值 (也就是验证失败)，一个控制台警告将会被抛出, `uni-app x` 暂不支持|


##### 示例：

::: preview

> uni-app js 引擎版

```html
	<template>
		<view>
			<!-- 我是子组件componentA -->
			<!-- I am the child component componentA -->
			<view>{{age}}</view>
		</view>
	</template>
	<script>
		export default {
			props: {
				// 检测类型 + 其他验证
				// Detection type + other validation
				age: {
					type: Number,
					default: 0,
					required: true,
					validator: function(value) {
						return value >= 0
					}
				}
			}
		}
	</script>
```

> uni-app x

```html
	<template>
		<view>
			<!-- 我是子组件componentA -->
			<view>{{age}}</view>
		</view>
	</template>
	<script lang="uts">
		export default {
			props: {
				// 检测类型 + 其他验证（uni-app x 暂不支持 validator 校验函数）
				age: {
					type: Number,
					default: 0,
					required: true
				}
			}
		}
	</script>
```

:::

```html
	<template>
		<view>
			<!-- 我是父组件 -->
			<!-- I am the parent component -->
			<componentA :age="10"></componentA>
		</view>
	</template>
```

### 传递静态或动态的 Prop
### Passing Static or Dynamic Props


- 可以像这样给 `prop` 传入一个静态的值：
- You can give like this `prop`passed in a static value:

```html
	<blog-post title="My journey with Vue"></blog-post>
```

- 可以通过 `v-bind` 或简写 : 动态赋值，例如：
- Can be `v-bind` assigned dynamically，such as in:

```html
	<!-- 动态赋予一个变量的值 -->
	<!-- Dynamically assign the value of a variable -->
	<blog-post :title="post.title"></blog-post>
	
	<!-- 动态赋予一个复杂表达式的值 -->
	<!-- Dynamically assign the value of a complex expression -->
	<blog-post :title="post.title + ' by ' + post.author.name"></blog-post>
```


在上述两个示例中，我们传入的值都是字符串类型的，但实际上任何类型的值都可以传给一个 `prop`。
In the two examples above, we happen to pass string values, but any type of value can actually be passed to a prop.


- 传入一个数字
- Passing a Number


```html
	<!-- 即便 `42` 是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
	<!-- Even though `42` is static, we need v-bind to tell Vue that -->
	<!-- 这是一个 JavaScript 表达式而不是一个字符串。  -->
	<!-- this is a JavaScript expression rather than a string. -->
	<blog-post :likes="42"></blog-post>

	<!-- 用一个变量进行动态赋值。-->
	<!-- Dynamically assign to the value of a variable. -->
	<blog-post :likes="post.likes"></blog-post>
```

- 传入一个布尔值
- Passing a Boolean


```html
	<!-- 包含该 prop 没有值的情况在内，都意味着 `true`。 -->
	<!-- Including the prop with no value will imply `true`. -->
	<blog-post is-published></blog-post>

	<!-- 即便 `false` 是静态的，我们仍然需要 `v-bind` 来告诉 Vue  -->
	<!-- Even though `false` is static, we need v-bind to tell Vue that -->
	<!-- 这是一个 JavaScript 表达式而不是一个字符串。 -->
	<!-- this is a JavaScript expression rather than a string.  -->
	<blog-post :is-published="false"></blog-post>

	<!-- 用一个变量进行动态赋值。 -->
	<!-- Dynamically assign to the value of a variable. -->
	<blog-post :is-published="post.isPublished"></blog-post>
```



- 传入一个数组
- Passing an Array


```html
	<!-- 即便数组是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
	<!-- Even though the array is static, we need v-bind to tell Vue that -->
	<!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
	<!-- this is a JavaScript expression rather than a string.  -->
	<blog-post :comment-ids="[234, 266, 273]"></blog-post>

	<!-- 用一个变量进行动态赋值。-->
	<!-- Dynamically assign to the value of a variable. -->
	<blog-post :comment-ids="post.commentIds"></blog-post>
```



- 传入一个对象
- Passing an Object


```html
	<!-- 即便对象是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
	<!-- Even though the object is static, we need v-bind to tell Vue that -->
	<!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
	<!-- this is a JavaScript expression rather than a string.  -->
	<blog-post :author="{ name: 'Veronica',company: 'Veridian Dynamics'}"></blog-post>
 
	<!-- 用一个变量进行动态赋值。-->
	<!-- Dynamically assign to the value of a variable. -->
	<blog-post :author="post.author"></blog-post>
```



- 传入一个对象的所有 `property`（微信小程序暂不支持该用法）
- Pass in all `property` of an object (WeChat applet does not currently support this usage)


如果你想要将一个对象的所有 `property` 都作为 `prop` 传入，你可以使用不带参数的 v-bind (取代 v-bind:prop-name)。例如，对于一个给定的对象 post：
If you want to pass all the properties of an object as props, you can use v-bind without an argument (`v-bind` instead of `:prop-name`). For example, given a post object:

```js
	post: {
		id: 1,
		title: 'My Journey with Vue'
	}
```

```html
	<blog-post v-bind="post"></blog-post>
	<!-- 上面的模板等价于： -->
	<!-- The above template is equivalent to: -->
	<blog-post v-bind:id="post.id" v-bind:title="post.title"></blog-post>
```


### 单向数据流
### One-Way Data Flow


所有的 `prop` 都使得其父子 `prop` 之间形成了一个**单向下行绑定**：
All props form a one-way-down binding between the child property and the parent one: 
父级 `prop` 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外变更父级组件的状态，从而导致你的应用的数据流向难以理解。
when the parent property updates, it will flow down to the child, but not the other way around. This prevents child components from accidentally mutating the parent's state, which can make your app's data flow harder to understand.


> 每次父级组件发生变更时，子组件中所有的 `prop` 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 `prop`。如果你这样做了，Vue 会在浏览器的控制台中发出警告。
> In addition, every time the parent component is updated, all props in the child component will be refreshed with the latest value. This means you should not attempt to mutate a prop inside a child component. If you do, Vue will warn you in the console.

这里有两种常见的试图变更一个 prop 的情形：
There are usually two cases where it's tempting to mutate a prop:


1. **这个 `prop` 用来传递一个初始值**；这个子组件接下来希望将其作为一个本地的 `prop` 数据来使用。在这种情况下，最好定义一个本地的 `data property `并将这个 `prop` 作为其初始值：
1. **The prop is used to pass in an initial value; the child component wants to use it as a local data property afterwards**. In this case, it's best to define a local data property that uses the prop as its initial value:

::: preview

> uni-app js 引擎版

```html
	<template>
		<view>
			<!-- 我是子组件componentA -->
			<!-- I am the child component componentA -->
			<view>{{myTitle}}</view>
		</view>
	</template>
	<script>
		export default {
			props: ['title'],
			data() {
				return {
					myTitle:this.title
				}
			}
		}
	</script>
```

> uni-app x

```html
	<template>
		<view>
			<!-- 我是子组件componentA -->
			<view>{{myTitle}}</view>
		</view>
	</template>
	<script lang="uts">
		export default {
			props: {
				title: {
					type: String
				}
			},
			data() {
				return {
					myTitle:this.title as string
				}
			}
		}
	</script>
```

:::

```html
	<template>
		<view>
			<!-- 我是父组件 -->
			<!-- I am the parent component -->
			<componentA :title="title"></componentA>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					title:"hello"
				}
			}
		}
	</script>
```



2. **这个 `prop` 以一种原始的值传入且需要进行转换**。在这种情况下，最好使用这个 `prop` 的值来定义一个计算属性：
2. **The prop is passed in as a raw value that needs to be transformed**. In this case, it's best to define a computed property using the prop's value:

::: preview

> uni-app js 引擎版

```html
	<template>
		<view>
			<!-- 我是子组件componentA -->
			<!-- I am the child component componentA -->
			<view>{{normalizedSize}}</view>
		</view>
	</template>
	<script>
		export default {
			props: ['size'],
			computed: {
				normalizedSize: function () {
					return this.size.toLowerCase()
				}
			}
		}
	</script>
```

> uni-app x

```html
	<template>
		<view>
			<!-- 我是子组件componentA -->
			<view>{{normalizedSize}}</view>
		</view>
	</template>
	<script lang="uts">
		export default {
			props: {
				size: {
					type: String
				}
			},
			computed: {
				normalizedSize: function (): string {
					return this.size.toLowerCase()
				}
			}
		}
	</script>
```

:::

```html
	<template>
		<view>
			<!-- 我是父组件 -->
			<!-- I am the parent component -->
			<componentA :size="size"></componentA>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					size:"M"
				}
			}
		}
	</script>
```



**tips**

> 注意在 `JavaScript` 中对象和数组是通过引用传入的，所以对于一个数组或对象类型的 `prop` 来说，在子组件中改变变更这个对象或数组本身将会影响到父组件的状态。
> Note that objects and arrays in JavaScript are passed by reference, so if the prop is an array or object, mutating the object or array itself inside the child component will affect parent state.


### Prop 验证
### Prop Validation

我们可以为组件的 `prop` 指定验证要求，例如你知道的这些类型。如果有一个需求没有被满足，则 `Vue` 会在浏览器控制台中警告你。这在开发一个会被别人用到的组件时尤其有帮助。
Components can specify requirements for their props, such as the types you've already seen. If a requirement isn't met, Vue will warn you in the browser's JavaScript console. This is especially useful when developing a component that's intended to be used by others.

为了定制 `prop` 的验证方式，你可以为 `props` 中的值提供一个带有验证需求的对象，而不是一个字符串数组。例如：
To specify prop validations, you can provide an object with validation requirements to the value of props, instead of an array of strings. For example:

::: preview

> uni-app js 引擎版

```js
	props: {
		// 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
		// Basic type check (`null` and `undefined` values will pass any type validation)
		propA: Number,
		// 多个可能的类型
		// Multiple possible types
		propB: [String, Number],
		// 必填的字符串
		// Required string
		propC: {
			type: String,
			required: true
		},
		// 带有默认值的数字
		// Number with a default value
		propD: {
			type: Number,
			default: 100
		},
		// 带有默认值的对象
		// Object with a default value
		propE: {
			type: Object,
			// 对象或数组默认值必须从一个工厂函数获取
			// Object or array defaults must be returned from a factory function
			default: function() {
			  return { message: 'hello' }
			}
		},
		// 自定义验证函数
		// Custom validator function
		propF: {
			validator: function(value) {
			  // 这个值必须匹配下列字符串中的一个
				// The value must match one of these strings
			  return ['success', 'warning', 'danger'].indexOf(value) !== -1
			}
		},
		// 具有默认值的函数
		// Function with a default value
		propG: {
			type: Function,
			// 与对象或数组默认值不同，这不是一个工厂函数 —— 这是一个用作默认值的函数
			// Unlike object or array default, this is not a factory function - this is a function to serve as a default value
			default: function() {
			  return 'Default function'
			}
		}
	}
```

> uni-app x

```js
	props: {
		propA: {
			type: Number
		},
		// 必填的字符串
		propC: {
			type: String,
			required: true
		},
		// 带有默认值的数字
		propD: {
			type: Number,
			default: 100
		},
		// 带有默认值的对象
		propE: {
			type: UTSObject,
			// 对象或数组默认值必须从一个工厂函数获取
			default: function(): UTSObject {
			  return { message: 'hello' }
			}
		},
		// uni-app x 暂不支持 validator 校验函数
		
		// 具有默认值的函数
		propG: {
			type: Function,
			// 与对象或数组默认值不同，这不是一个工厂函数 —— 这是一个用作默认值的函数
			default: function(): string {
			  return 'Default function'
			}
		}
	}
```

:::

当 `prop` 验证失败的时候，(开发环境构建版本的) `Vue` 将会产生一个控制台的警告。
When prop validation fails, Vue will produce a console warning (if using the development build).

**tips**

> 注意那些 `prop` 会在一个组件实例创建之前进行验证，所以实例的 `property` (如 `data`、`computed` 等) 在 `default` 或 `validator` 函数中是不可用的。
> Note that props are validated before a component instance is created, so instance properties (e.g. data, computed, etc) will not be available inside default or validator functions.


**类型检查**
**Type Checks**

`type` 可以是下列原生构造函数中的一个：
The type can be one of the following native constructors:

- `String`
- `Number`
- `Boolean`
- `Array`
- `Object`
- `Date`
- `Function`
- `Symbol`


此外，`type` 还可以是一个自定义的构造函数，并且通过 `instanceof` 来进行检查确认。例如，给定下列现成的构造函数：
In addition, `type` can also be a custom constructor function and the assertion will be made with an `instanceof` check. For example, given the following constructor function exists:


```js
	function Person(firstName, lastName) {
		this.firstName = firstName
		this.lastName = lastName
	}
```


```js
	props: {
		author: Person
	}
```

用于验证 `author` prop 的值是否是通过 `new Person` 创建的。
to validate that the value of the author prop was created with new Person

**注意：uni-app x 暂不支持**

### Prop 的大小写命名
### Prop Casing (camelCase vs kebab-case)


`HTML` 中的 `attribute` 名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符。这意味着当你使用 `DOM` 中的模板时，`camelCase` (驼峰命名法) 的 `prop` 名需要使用其等价的 `kebab-case` (短横线分隔命名) 命名：
HTML attribute names are case-insensitive, so browsers will interpret any uppercase characters as lowercase. That means when you're using in-DOM templates, camelCased prop names need to use their kebab-cased (hyphen-delimited) equivalents:

::: preview

> uni-app js 引擎版

```html
	<template>
		<view>
			<!-- 我是子组件componentA -->
			<!-- I am the child component componentA -->
			<view>{{postTitle}}</view>
		</view>
	</template>

	<script>
		export default {
			props: ['postTitle']
		}
	</script>
```

> uni-app x

```html
	<template>
		<view>
			<!-- 我是子组件componentA -->
			<view>{{postTitle}}</view>
		</view>
	</template>

	<script lang="uts">
		export default {
			props: {
				postTitle: {
					type: String
				}
			}
		}
	</script>
```

:::

```html
	<template>
		<view>
			<!-- 我是父组件 -->
			<!-- I am the parent component -->
			<componentA post-title="hello!"></componentA>
		</view>
	</template>
```


## 非 Prop 的 Attribute
## Non-Prop Attributes

一个非 `prop` 的 `attribute` 是指传向一个组件，但是该组件并没有相应 `props` 或 `emits` 定义的 `attribute`。常见的示例包括 `class`、`style` 和 `id` 属性。
A component non-prop attribute is an attribute or event listener that is passed to a component, but does not have a corresponding property defined in props or emits. Common examples of this include class, style, and id attributes. You can access those attributes via $attrs property.

### Attribute 继承
### Attribute Inheritance

当组件返回单个根节点时，非 `prop` attribute 将自动添加到根节点的 `attribute` 中。例如，在 `<date-picker>` 组件的实例中：
When a component returns a single root node, non-prop attributes will automatically be added to the root node's attributes. For example, in the instance of a `date-picker` component:


```html
	<!-- 我是子组件date-picker -->
	<!-- date-picker -->
	<template>
		<view class="date-picker">
		  <input type="datetime-local" />
		</view>
	</template>
```


如果我们需要通过 `data status` property 定义 `<date-picker>` 组件的状态，它将应用于根节点 (即 `div.date-picker`)。
In the event we need to define the status of the date-picker component via a data-status attribute, it will be applied to the root node (i.e., `div.date-picker`).

```html
	<!-- 具有非prop attribute的Date-picker组件-->
	<!-- Date-picker component with a non-prop attribute -->
	<date-picker data-status="activated"></date-picker>

	<!-- 渲染 date-picker 组件 -->
	<!-- Rendered date-picker component -->
	<div class="date-picker" data-status="activated">
		<input type="datetime-local" />
	</div>
```

同样的规则适用于事件监听器：
Same rule applies to the event listeners:

```html
	<date-picker @change="submitChange"></date-picker>
```


```js
	// 我是子组件date-picker
	// date-picker
	export default {
		created() {
		  console.log(this.$attrs) // { onChange: () => {}  }
		}
	}
```

当有一个 `HTML` 元素将 `change` 事件作为 `date-picker` 的根元素时，这可能会有帮助。
This might be helpful when we have an HTML element with change event as a root element of `date-picker`.


```html
	<!-- 我是子组件date-picker -->
	<!-- date-picker -->
	<template>
		<select>
		  <option value="1">Yesterday</option>
		  <option value="2">Today</option>
		  <option value="3">Tomorrow</option>
		</select>
	</template>
```


在这种情况下，`change` 事件监听器从父组件传递到子组件，它将在原生 `select` 的 `change` 事件上触发。我们不需要显式地从 `date-picker` 发出事件：
In this case, change event listener is passed from the parent component to the child and it will be triggered on native `<select>` change event. We won't need to emit an event from the `date-picker` explicitly:


```html
	<template>
		<view id="date-picker" class="demo">
			<date-picker @change="showChange"></date-picker>
		</view>
	</template>
	<script>
		export default {
			methods: {
				showChange(event) {
					console.log(event,event.target.value) // 将记录所选选项的值
				}
			}
		}
	</script>
```



### 禁用 Attribute 继承
### Disabling Attribute Inheritance


如果你不希望组件的根元素继承 `attribute`，你可以在组件的选项中设置 `inheritAttrs: false`。例如：
If you do not want a component to automatically inherit attributes, you can set `inheritAttrs: false` in the component's options.

禁用 `attribute` 继承的常见情况是需要将 `attribute` 应用于根节点之外的其他元素。
The common scenario for disabling an attribute inheritance is when attributes need to be applied to other elements besides the root node.

通过将 `inheritAttrs` 选项设置为 `false`，你可以访问组件的 `$attrs property`，该 `property` 包括组件 `props` 和 `emits property` 中未包含的所有属性 (例如，`class`、`style`、`v-on` 监听器等)。
By setting the inheritAttrs option to false, you can control to apply to other elements attributes to use the component's $attrs property, which includes all attributes not included to component props and emits properties (e.g., class, style, v-on listeners, etc.).

使用上一节中的 `date-picker` 组件示例，如果需要将所有非 prop attribute 应用于 `input` 元素而不是根 `div` 元素，则可以使用 `v-bind` 缩写来完成。
Using our `date-picker` component example from the previous section, in the event we need to apply all non-prop attributes to the input element rather than the root div element, this can be accomplished by using the v-bind shortcut.


```html
	<template>
		<view class="date-picker">
		  <input type="datetime-local" v-bind="$attrs" />
		</view>
	</template>
	<script>
		export default {
			inheritAttrs: false
		}
	</script>
```

有了这个新配置，`data status` attribute 将应用于 `input` 元素！
With this new configuration, our data-status attribute will be applied to our input element!

```html
	<!-- Date-picker 组件 使用非 prop attribute -->
	// Date-picker component with a non-prop attribute
	<date-picker data-status="activated"></date-picker>

	<!-- 渲染 date-picker 组件 -->
	<!-- Rendered date-picker component -->
	<view class="date-picker">
		<input type="datetime-local" data-status="activated" />
	</view>
```


### 多个根节点上的 Attribute 继承
### Attribute Inheritance on Multiple Root Nodes

与单个根节点组件不同，具有多个根节点的组件不具有自动 `attribute` 回退行为（小程序不支持）。如果未显式绑定 `$attrs`，将发出运行时警告。
Unlike single root components, components with multiple roots do not have automatic `attribute` fallback behavior (not supported by applets). A runtime warning will be issued if `$attrs` is not explicitly bound.


```html
<custom-layout id="custom-layout" @click="changeValue"></custom-layout>
```

```html
	<!-- 我是custom-layout组件 -->
	<!-- custom-layout -->
	<!-- 这将发出警告 -->
	<!-- This will raise a warning -->
	<template>
		<header>...</header>
		<main>...</main>
		<footer>...</footer>
	</template>

	<!-- 没有警告，$attrs被传递到<main>元素 -->
	<!-- No warnings, $attrs are passed to <main> element -->

	<template>
		<header>...</header>
		<main v-bind="$attrs">...</main>
		<footer>...</footer>
	</template>

```


## 自定义事件
## Custom Events

### 事件名
### Event Names

不同于组件和 `prop`，事件名不存在任何自动化的大小写转换。而是触发的事件名需要完全匹配监听这个事件所用的名称。举个例子，如果触发一个 `camelCase` (驼峰命名法) 名字的事件：
Like components and props, event names provide an automatic case transformation. If you emit an event from the child component in camel case, you will be able to add a kebab-cased listener in the parent:

```js
	this.$emit('myEvent')
```


则监听这个名字的 `kebab-case` (短横线隔开式)  版本是不会有任何效果的：
listening to the `kebab-case` (dash-separated) version of this name will not have any effect:

```html
	<!-- 没有效果 -->
	<!-- No effect -->
	<my-component @my-event="doSomething"></my-component>
```


不同于组件和 `prop`，事件名不会被用作一个 `JavaScript` 变量名或 `property` 名，所以就没有理由使用 `camelCase` (驼峰命名法) 或 `PascalCase`(帕斯卡命名法) 了。并且 `v-on` 事件监听器在 `DOM` 模板中会被自动转换为全小写 (因为 `HTML` 是大小写不敏感的)，所以 `@myEvent` 将会变成 `@myevent`——导致 `myEvent` 不可能被监听到。
Unlike components and `prop`, the event name will not be used as a `JavaScript` variable name or `property` name, so there is no reason to use `camelCase` (hump nomenclature) or `PascalCase` (Pascal nomenclature). Also, the `v-on` event listener will be automatically converted to all lowercase in the `DOM` template (because `HTML` is case insensitive), so `@myEvent` will become `@myevent`. As a result, `myEvent` cannot be listened to.

因此，我们推荐你始终使用 `kebab-case` (短横线隔开式)  的事件名。
Therefore, we recommend that you always use `kebab-case` (dash-separated) event names.


### 定义自定义事件
### Defining Custom Events

可以通过 `emits` 选项在组件上定义已发出的事件。
Emitted events can be defined on the component via the emits option.

```js
	// 在组件内
	// in component
	export default {
		emits: ['in-focus', 'submit']
	}
```

当在 `emits` 选项中定义了原生事件 (如 `click`) 时，将使用组件中的事件替代原生事件侦听器。
When a native event (e.g., click) is defined in the emits option, the component event will be used instead of a native event listener.


> 建议定义所有发出的事件，以便更好地记录组件应该如何工作。
> It is recommended to define all emitted events in order to better document how a component should work.


示例
Example

```html
	<template>
		<view>
			<!-- 我是counter组件 -->
			<!-- This is counter component -->
			<view>counter的值是：{{count}}</view>
			<button type="default" @click="add">+1</button>
		</view>
	</template>
	<script>
		export default {
			//1.声明自定义事件：组件的自定义事件，必须事先声明在emits节点中
			//1. Declare a custom event: a custom event of the component, which must be declared in the emits node beforehand
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
					//2. Trigger the custom event: when +1 button is clicked, call this.$emit() method to trigger the custom count-change event
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
			<!-- I am the parent component -->
			<!-- 3、监听自定义事件：通过v-on的形式监听自定义事件 -->
			<!-- 3. listen to the custom events: listen to custom events in the form of v-on -->
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



**验证抛出的事件**
**Validate Emitted Events**


与 `prop` 类型验证类似，如果使用对象语法而不是数组语法定义发出的事件，则可以验证它。
Similar to prop type validation, an emitted event can be validated if it is defined with the Object syntax instead of the array syntax.

要添加验证，将为事件分配一个函数，该函数接收传递给 `$emit` 调用的参数，并返回一个布尔值以指示事件是否有效。
To add validation, the event is assigned a function that receives the arguments passed to the `$emit` call and returns a boolean to indicate whether the event is valid or not.


```js
	export default {
		emits: {
			// 没有验证
			// No validation
			click: null,

			// 验证submit 事件
			// Validate submit event
			submit: ({ email, password }) => {
				if (email && password) {
					return true
				} else {
					console.warn('Invalid submit event payload!')
					return false
				}
			}
		},
		methods: {
			submitForm() {
				this.$emit('submit', { email, password })
			}
		}
	}
```

**注意：uni-app x 暂不支持**

### v-model 参数
### v-model arguments


默认情况下，组件上的 `v-model` 使用 `modelValue` 作为 `prop` 和 `update:modelValue` 作为事件。我们可以通过向 `v-model` 传递参数来修改这些名称：
By default, `v-model` on a component uses modelValue as the `prop` and `update:modelValue` as the event. We can modify these names passing an argument to `v-model`:


```html
	<my-component v-model:foo="bar"></my-component>
```


在本例中，子组件将需要一个 foo prop 并发出 `update:foo` 要同步的事件：
In this case, child component will expect a foo prop and emits `update:foo` event to sync:


```html
	<template>
		<view>
			<input type="text" :value="foo" @input="$emit('update:foo', $event.target.value)" >
		</view>
	</template>
	<script>
		export default {
			props: {
			  foo: String
			}
		}
	</script>
```

```html
	<my-component v-model:foo="bar"></my-component>
```

**示例**
**Example**

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
	<!-- counter -->
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



### 多个 v-model 绑定
### Multiple v-model bindings

通过利用以特定 `prop` 和事件为目标的能力，正如我们之前在 `v-model` 参数中所学的那样，我们现在可以在单个组件实例上创建多个 `v-model` 绑定。
By leveraging the ability to target a particular prop and event as we learned before with `v-model` arguments, we can now create multiple `v-model` bindings on a single component instance.

每个 `v-model` 将同步到不同的 `prop`，而不需要在组件中添加额外的选项：
Each `v-model` will sync to a different prop, without the need for extra options in the component:

```html
	<template>
		<view>
			<!-- 父组件 -->
			<!-- parent -->
			<user-name
			  v-model:first-name="firstName"
			  v-model:last-name="lastName"
			></user-name>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					firstName:"",
					lastName:""
				}
			}
		}
	</script>
```

```html
	<!-- 我是user-name子组件 -->
	<!-- user-name -->
	<template>
		<view>
			<input type="text" :value="firstName" @input="$emit('update:firstName', $event.target.value)">
			<input type="text" :value="lastName" @input="$emit('update:lastName', $event.target.value)">
		</view>
	</template>
	<script>
		export default {
			props: {
				firstName: String,
				lastName: String
			}
		}
	</script>
```


### 处理 v-model 修饰符 @v-model-modifiers


让我们创建一个示例自定义修饰符 `capitalize`，它将 `v-model` 绑定提供的字符串的第一个字母大写。
Let's create an example custom modifier, `capitalize`, that capitalizes the first letter of the string provided by the `v-model` binding.

添加到组件 `v-model` 的修饰符将通过 `modelModifiers` prop 提供给组件。在下面的示例中，我们创建了一个组件，其中包含默认为空对象的 `modelModifiers` prop。
Modifiers added to a component `v-model` will be provided to the component via the `modelModifiers` prop. In the below example, we have created a component that contains a `modelModifiers` prop that defaults to an empty object.

请注意，当组件的 created 生命周期钩子触发时，`modelModifiers` prop 包含 `capitalize`，其值为 `true`——因为它被设置在 `v-model` 绑定 `v-model.capitalize="bar"`。
Notice that when the component's created lifecycle hook triggers, the `modelModifiers` prop contains `capitalize` and its value is `true` - due to it being set on the `v-model` binding `v-model.capitalize="myText"`.


```html
	<!-- 我是父组件 -->
	<!-- parent -->
	<template>
		<view>
			<my-component v-model.capitalize="myText"></my-component>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					myText:""
				}
			}
		}
	</script>
```

**注意：uni-app x 暂不支持 capitalize 修饰符**

```html
	<!-- 我是 my-component子组件-->
	<!-- my-component -->
	<template>
		<view>
			<input type="text" :value="modelValue" @input="emitValue" style="border: red solid 1px;">
		</view>
	</template>
	<script>
		export default {
			props: {
				modelValue: String,
				modelModifiers: {
					default: () => ({})
				}
			},
			created() {
				console.log(this.modelModifiers) // { capitalize: true }
			},
			methods: {
				emitValue(e) {
					let value = e.target.value
					if (this.modelModifiers.capitalize) {
						value = value.charAt(0).toUpperCase() + value.slice(1)
					}
					//charAt() 方法可返回指定位置的字符
					//charAt() ***
					//toUpperCase() 方法用于把字符串转换为大写
					//toUpperCase() ***
					//slice() 方法可从已有的数组中返回选定的元素
					//slice() ***
					console.log("value: ",value);
					this.$emit('update:modelValue', value)
				}
			}
		}
	</script>
```

对于带参数的 `v-model` 绑定，生成的 `prop` 名称将为 `arg + "Modifiers"`：
For `v-model` bindings with arguments, the generated prop name will be `arg + "Modifiers"`:

```html
	<my-component v-model:foo.capitalize="bar"></my-component>
```


```html
	<!-- 我是 my-component子组件-->
	<!-- my-component -->
	<template>
		<view>
			<input type="text"
			  :value="foo"
			  @input="$emit('update:foo', $event.target.value)">
		</view>
	</template>
	<script>
		export default {
			props: ['foo', 'fooModifiers'],
			created() {
			  console.log(this.fooModifiers) // { capitalize: true }
			}
		}
	</script>
```


## 插槽
## Slots


### 插槽内容
### Slot Content


Vue 实现了一套内容分发的 API，这套 API 的设计灵感源自 [Web Components 规范草案](https://github.com/WICG/webcomponents/blob/gh-pages/proposals/Slots-Proposal.md)，将 `<slot>` 元素作为承载分发内容的出口。
Vue implements a content distribution API inspired by the [Web Components spec draft](https://github.com/WICG/webcomponents/blob/gh-pages/proposals/Slots-Proposal.md) (opens new window), using the `<slot>` element to serve as distribution outlets for content.


它允许你像这样合成组件：
This allows you to compose components like this:

```html
	<todo-button>
		Add todo
	</todo-button>
```


然后在 `todo-button` 的模板中，你可能有：
Then in the template for `<todo-button>`, you might have:

```html
	<!-- todo-button 组件模板 -->
	<!-- todo-button component template -->
	<button class="btn-primary">
		<slot></slot>
	</button>
```


当组件渲染的时候，将会被替换为`“Add Todo”`。
When the component renders, `<slot></slot>` will be replaced by `"Add Todo"`.

```html
	<!-- 渲染 HTML -->
	<!-- rendered HTML -->
	<button class="btn-primary">
		Add todo
	</button>
```


不过，字符串只是开始！插槽还可以包含任何模板代码，包括 `HTML`：
Strings are just the beginning though! Slots can also contain any template code, including HTML:

```html
	<todo-button>
		<!-- 添加一个Font Awesome 图标 -->
		<!-- Add a Font Awesome icon -->
		<i class="fas fa-plus"></i>
		Add todo
	</todo-button>
```

或其他组件
Or even other components:

```html
	<todo-button>
		<!-- 添加一个图标的组件 -->
		<!-- Use a component to add an icon -->
		<font-awesome-icon name="plus"></font-awesome-icon>
		Add todo
	</todo-button>
```

如果 `todo-button` 的 `template` 中没有包含一个 `slot` 元素，则该组件起始标签和结束标签之间的任何内容都会被抛弃
If `<todo-button>`'s template did not contain a `<slot>` element, any content provided between its opening and closing tag would be discarded.

```html
	<!-- todo-button 组件模板 -->
	<!-- todo-button component template -->
	<button class="btn-primary">
		Create a new item
	</button>
```

```html
	<todo-button>
		<!-- 以下文本不会渲染 -->
		<!-- Following text won't be rendered -->
		Add todo
	</todo-button>
```


### 渲染作用域
### Render Scope


当你想在一个插槽中使用数据时，例如：
When you want to use data inside a slot, such as in:

```html
	<todo-button>
		Delete a {{ item.name }}
	</todo-button>
```


该插槽可以访问与模板其余部分相同的实例 `property` (即相同的“作用域”)。
That slot has access to the same instance properties (i.e. the same "scope") as the rest of the template.

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/slot.png)


插槽不能访问 `todo-button` 的作用域。例如，尝试访问 `action` 将不起作用：
The slot does not have access to `<todo-button>`'s scope. For example, trying to access action would not work:

```html
	<todo-button action="delete">
		Clicking here will {{ action }} an item
		<!-- `action` 未被定义，因为它的内容是传递*到* <todo-button>，而不是*在* <todo-button>里定义的。  -->
		<!-- The `action` will be undefined, because this content is passed _to_ <todo-button>, rather than defined _inside_ the <todo-button> component. -->
	</todo-button>
```


作为一条规则，请记住：
As a rule, remember that:
**父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。**
**Everything in the parent template is compiled in parent scope; everything in the child template is compiled in the child scope.**


### 后备内容
### Fallback Content

有时为一个插槽设置具体的后备 (也就是默认的) 内容是很有用的，它只会在没有提供内容的时候被渲染。例如在一个 `submit-button` 组件中：
There are cases when it's useful to specify fallback (i.e. default) content for a slot, to be rendered only when no content is provided. For example, in a `<submit-button>` component:

```html
	<button type="submit">
		<slot></slot>
	</button>
```

我们可能希望这个 `button` 内绝大多数情况下都渲染文本`“Submit”`。为了将`“Submit”`作为后备内容，我们可以将它放在 `slot` 标签内：
We might want the text "Submit" to be rendered inside the `<button>` most of the time. To make "Submit" the fallback content, we can place it in between the `<slot>` tags:

```html
	<button type="submit">
		<slot>Submit</slot>
	</button>
```


现在当我在一个父级组件中使用 `submit-button` 并且不提供任何插槽内容时：
Now when we use `<submit-button>` in a parent component, providing no content for the slot:

```html
	<submit-button></submit-button>
```

后备内容“Submit”将会被渲染：
will render the fallback content, "Submit":

```html
	<button type="submit">
		Submit
	</button>
```

但是如果我们提供内容：
But if we provide content:

```html
	<submit-button>
		Save
	</submit-button>
```

则这个提供的内容将会被渲染从而取代后备内容：
Then the provided content will be rendered instead:

```html
	<button type="submit">
		Save
	</button>
```

### 具名插槽
### Named Slots


有时我们需要多个插槽。例如对于一个带有如下模板的 `base-layout` 组件：
There are times when it's useful to have multiple slots. For example, in a `<base-layout>` component with the following template:

```html
	<!-- base-layout组件 -->
	<!-- base-layout -->
	<view class="container">
		<header>
		<!-- 我们希望把页头放这里 -->
		<!-- We want header content here -->
		</header>
		<main>
		<!-- 我们希望把主要内容放这里 -->
		<!-- We want main content here -->
		</main>
		<footer>
		<!-- 我们希望把页脚放这里 -->
		<!-- We want footer content here -->
		</footer>
	</view>
```

对于这样的情况，`slot` 元素有一个特殊的 `attribute：name`。这个 `attribute` 可以用来定义额外的插槽：
For these cases, the `<slot>` element has a special attribute, name, which can be used to assign a unique ID to different slots so you can determine where content should be rendered:

```html
	<view class="container">
		<header>
			<slot name="header"></slot>
		</header>
		<main>
			<slot></slot>
		</main>
		<footer>
			<slot name="footer"></slot>
		</footer>
	</view>
```

**一个不带 `name` 的 `slot` 出口会带有隐含的名字`“default”`。**
**A `<slot>` outlet without name implicitly has the name "default".**

在向具名插槽提供内容的时候，我们可以在一个 `template` 元素上使用 `v-slot` 指令，并以 `v-slot` 的参数的形式提供其名称：
To provide content to named slots, we need to use the `v-slot` directive on a `<template>` element, providing the name of the slot as v-slot's argument:

```html
	<template>
		<view>
		<!-- 父组件使用子组件`<base-layout>`，节点上使用v-slot特性： -->
		<!-- base-layout -->
			<base-layout>
				<template v-slot:header>
					<view>Here might be a page title</view>
				</template>
				<template v-slot:default>
					<view>A paragraph for the main content.</view>
					<view>And another one.</view>
				</template>
				<template v-slot:footer>
					<view>Here's some contact info</view>
				</template>
			</base-layout>
		</view>
	</template>
```

现在 `template` 元素中的所有内容都将会被传入相应的插槽。
Now everything inside the `<template>` elements will be passed to the corresponding slots.

渲染的 `HTML` 将会是：
The rendered HTML will be:

```html
	<div class="container">
		<header>
			<div>Here might be a page title</div>
		</header>
		<main>
			<div>A paragraph for the main content.</div>
			<div>And another one.</div>
		</main>
		<footer>
			<div>Here's some contact info</div>
		</footer>
	</div>
```


注意，`v-slot` 只能添加在 `template` 上 (只有一种例外情况)
Note that `v-slot` can only be added to a `<template>` (with one exception)


#### 具名插槽的缩写
#### Named Slots Shorthand

跟 `v-on` 和 `v-bind` 一样，`v-slot` 也有缩写，即把参数之前的所有内容 (v-slot:) 替换为字符 **#**。例如 `v-slot:header` 可以被重写为 `#header`：
Similar to `v-on` and `v-bind`, `v-slot` also has a shorthand, replacing everything before the argument (v-slot:) with the special symbol **#**. For example, v-slot:header can be rewritten as `#header`:


```html
	<base-layout>
		<template #header>
			<view>Here might be a page title</view>
		</template>

		<template #default>
			<view>A paragraph for the main content.</view>
			<view>And another one.</view>
		</template>

		<template #footer>
			<view>Here's some contact info</view>
		</template>
	</base-layout>
```


然而，和其它指令一样，该缩写只在其有参数的时候才可用。这意味着以下语法是无效的：
However, just as with other directives, the shorthand is only available when an argument is provided. That means the following syntax is invalid:

```html
	<!-- This will trigger a warning -->
	<todo-list #="{ item }">
		<i class="fas fa-check"></i>
		<view class="green">{{ item }}</view>
	</todo-list>
```


如果你希望使用缩写的话，你必须始终以明确插槽名取而代之：
Instead, you must always specify the name of the slot if you wish to use the shorthand:

```html
	<todo-list #default="{ item }">
		<i class="fas fa-check"></i>
		<view class="green">{{ item }}</view>
	</todo-list>
```



### 作用域插槽
### Scoped Slots

有时让插槽内容能够访问子组件中才有的数据是很有用的。当一个组件被用来渲染一个项目数组时，这是一个常见的情况，我们希望能够自定义每个项目的渲染方式。
Sometimes, it's useful for slot content to have access to data only available in the child component. It's a common case when a component is used to render an array of items, and we want to be able to customize the way each item is rendered.

例如，我们有一个组件，包含 `todo-items` 的列表。
For example, we have a component, containing a list of `todo-items`.

```html
<template>
	<view>
		<view v-for="(item, index) in items">
        {{ item }}
      </view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				items: ['Feed a cat', 'Buy milk']
			};
		}
	}
</script>
```


我们可能需要替换插槽以在父组件上自定义它：
We might want to replace the {{ item }} with a `<slot>` to customize it on parent component:

```html
	<todo-list>
		<i class="fas fa-check">before--</i>
		<view class="green">{{ item }}</view>
	</todo-list>
```

但是，这是行不通的，因为只有 `todo-list` 组件可以访问 `item`，我们将从其父组件提供槽内容。
That won't work, however, because only the `<todo-list>` component has access to the item and we are providing the slot content from its parent.

要使 `item` 可用于父级提供的 `slot` 内容，我们可以添加一个 `slot` 元素并将其绑定为属性：
To make item available to the slot content provided by the parent, we can add a `<slot>` element and bind it as an attribute:


```html
<template>
	<view>
		<view v-for="(item, index) in items">
		   <slot :item="item"></slot>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				items: ['Feed a cat', 'Buy milk']
			}
		}
	}
</script>
```


绑定在 `slot` 元素上的 `attribute` 被称为**插槽 prop**。现在在父级作用域中，我们可以使用带值的 `v-slot` 来定义我们提供的插槽 `prop` 的名字：
Attributes bound to a `<slot>` element are called **slot props**. Now, in the parent scope, we can use `v-slot` with a value to define a name for the slot props we've been provided:


```html
<template>
	<view>
		<todo-list>
			<template v-slot:default="slotProps">
				<i class="fas fa-check"></i>
				<view class="green">{{ slotProps.item }}</view>
			</template>
		</todo-list>
	</view>
</template>
```

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/scoped-slot.png)

在这个例子中，我们选择将包含所有插槽 `prop` 的对象命名为 `slotProps`，但你也可以使用任意你喜欢的名字。
In this example, we've chosen to name the object containing all our slot props `slotProps`, but you can use any name you like.

**注意：** `uni-app x` 中需要为作用域插槽指定类型，以 `todo-list` 组件为例，需要补充如下代码：

```js
	import { SlotsType } from 'vue'
	export default {
		slots: Object as SlotsType<{
			default: { item: string }
		}>
	}
```


#### 独占默认插槽的缩写语法
#### Abbreviated Syntax for Lone Default Slots

在上述情况下，当被提供的内容只有默认插槽时，组件的标签才可以被当作插槽的模板来使用。这样我们就可以把 `v-slot` 直接用在组件上：
In cases like above, when only the default slot is provided content, the component's tags can be used as the slot's template. This allows us to use `v-slot` directly on the component:

```html
	<todo-list v-slot:default="slotProps">
		<i class="fas fa-check"></i>
		<view class="green">{{ slotProps.item }}</view>
	</todo-list>
```


这种写法还可以更简单。就像假定未指明的内容对应默认插槽一样，不带参数的 `v-slot` 被假定对应默认插槽：
This can be shortened even further. Just as non-specified content is assumed to be for the default slot, `v-slot` without an argument is assumed to refer to the default slot:

```html
	<todo-list v-slot="slotProps">
		<i class="fas fa-check"></i>
		<view class="green">{{ slotProps.item }}</view>
	</todo-list>
```

注意**默认插槽的缩写语法不能和具名插槽混用**，因为它会导致作用域不明确：
Note that the abbreviated syntax for default slot cannot be mixed with named slots, as it would lead to scope ambiguity:

```html
<!-- 无效，会导致警告 -->
<!-- INVALID, will result in warning -->
	<todo-list v-slot="slotProps">
		<todo-list v-slot:default="slotProps">
			<i class="fas fa-check"></i>
			<view class="green">{{ slotProps.item }}</view>
		</todo-list>
		<template v-slot:other="otherSlotProps">
			slotProps is NOT available here
		</template>
	</todo-list>
```

只要出现多个插槽，请始终为所有的插槽使用完整的基于 `template` 的语法：
Whenever there are multiple slots, use the full `<template>` based syntax for all slots:

```html
	<todo-list>
		<template v-slot:default="slotProps">
			<i class="fas fa-check"></i>
			<view class="green">{{ slotProps.item }}</view>
		</template>

		<template v-slot:other="otherSlotProps">
			...
		</template>
	</todo-list>
```


#### 解构插槽 Prop
#### Destructuring Slot Props

作用域插槽的内部工作原理是将你的插槽内容包括在一个传入单个参数的函数里：
Internally, scoped slots work by wrapping your slot content in a function passed a single argument:

```js
function (slotProps) {
  // ... 插槽内容 ...
  // ... slot content ...
}
```

这意味着 `v-slot` 的值实际上可以是任何能够作为函数定义中的参数的 `JavaScript` 表达式。你也可以使用  [ES2015](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring) 解构来传入具体的插槽 `prop`，如下：
That means the value of `v-slot` can actually accept any valid JavaScript expression that can appear in the argument position of a function definition. So you can also use [ES2015](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring) destructuring (opens new window)to pull out specific slot props, like so:

```html
	<todo-list v-slot="{ item }">
		<i class="fas fa-check"></i>
		<view class="green">{{ item }}</view>
	</todo-list>
```

这样可以使模板更简洁，尤其是在该插槽提供了多个 `prop` 的时候。它同样开启了 `prop` 重命名等其它可能，例如将 `item` 重命名为 `todo`：
This can make the template much cleaner, especially when the slot provides many props. It also opens other possibilities, such as renaming props, e.g. item to todo:

```html
	<todo-list v-slot="{ item: todo }">
		<i class="fas fa-check"></i>
		<view class="green">{{ todo }}</view>
	</todo-list>
```

你甚至可以定义后备内容，用于插槽 `prop` 是 `undefined` 的情形：
You can even define fallbacks, to be used in case a slot prop is undefined:

```html
	<todo-list v-slot="{ item = 'Placeholder' }">
		<i class="fas fa-check"></i>
		<view class="green">{{ item }}</view>
	</todo-list>
```

**注意：`uni-app x` 暂不支持**

## 小程序不支持列表
## applet does not support list


- 作用域插槽（HBuilderX 3.1.19 以下仅支持解构插槽且不可使用作用域外数据以及使用复杂的表达式）
- Scoped slots (HBuilderX 3.1.19 and below only supports destructuring slots and cannot use out-of-scope data and complex expressions)
- 动态组件
- Dynamic components
- 异步组件
- `inline-template`
- `X-Templates`
- `keep-alive`（App端也未支持）
- `keep-alive` (not supported on App side)
- `transition` （可使用 `animation` 或 CSS 动画替代）
- `transition` (can be replaced with `animation` or CSS animation)



## 命名限制
## Naming restrictions

在 uni-app 中以下这些作为保留关键字，不可作为组件名。
The following are reserved keywords and can not be used as component names.

- `a`
- `canvas`
- `cell`
- `content`
- `countdown`
- `datepicker`
- `div`
- `element`
- `embed`
- `header`
- `image`
- `img`
- `indicator`
- `input`
- `link`
- `list`
- `loading-indicator`
- `loading`
- `marquee`
- `meta`
- `refresh`
- `richtext`
- `script`
- `scrollable`
- `scroller`
- `select`
- `slider-neighbor`
- `slider`
- `slot`
- `span`
- `spinner`
- `style`
- `svg`
- `switch`
- `tabbar`
- `tabheader`
- `template`
- `text`
- `textarea`
- `timepicker`
- `transition-group`
- `transition`
- `video`
- `view`
- `web`



Tips

- 除以上列表中的名称外，标准的 HTML 及 SVG 标签名也不能作为组件名。
- In addition to the names in the above list, standard HTML and SVG tag names cannot be used as component names.
- 在百度小程序中使用时，不要在 data 内使用 hidden ，可能会导致渲染错误。
- When using in Baidu applet, do not use hidden in data, it may cause rendering errors.
- methods中不可使用与生命周期同名的方法名。
- Methods cannot use a method name with the same name as a lifecycle.