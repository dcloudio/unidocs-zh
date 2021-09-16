

下面是一个基本组件示例，在根`<view>`组件下再次引入一个`<view>`组件，并给组件的text区绑定一个data。
```html
	<template>
		<view>
			<view>{{userName}}</view>
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





































