# UVUE DOM  

App-uvue的每个页面，在内存中都有一个 DOM（文档对象模型）。它和浏览器的 [DOM规范](https://www.w3.org/DOM/?spm=a2c7j.-zh-docs-api-weex-variable.0.0.2a5537c6FrgbYp) 类似。

DOM 是页面元素内容的结构数据。DOM 模型用一个逻辑树来表示一个页面文档，树的每个分支的终点都是一个节点，每个节点都对应一个节点对象（INode）。

实际上 app-uvue 的template、数据绑定，在底层调用的也是 DOM API。

在浏览器中，开发者一旦跳过vue框架直接操作dom，vue框架将无法管理相应dom，开发者需要注意两端的冲突。

在 App 端，为了减少冲突，目前不支持通过 DOM API 创建和删除 DOM 树中的元素。只支持获取元素INode。

## 使用场景
通常情况下，使用 uvue 框架的数据绑定来操作更新页面组件就可以。但有2个场景，需要使用 DOM API。

1. 跟手动效

	响应触屏事件更新组件的位置，要想不掉帧，需要保证16毫秒绘制一帧。
	
	uvue的data更新，有一套diff机制，每次触发data更新，会多几毫秒的耗时。
	
	此时推荐通过 DOM API 跳过 vue 框架直接操作组件的样式。

2. Draw API

	Android和iOS的原生view，有一些底层的高性能绘制能力，这些API的调用，需要先获取到INode对象，然后再调用其方法。

在[性能](performance.md)章节，对这2个场景有详细的阐述。

## 获取DOM元素对象@getDomNode  

app-uvue页面中可以通过 vue 框架中的组件实例对象 [$refs](https://uniapp.dcloud.net.cn/tutorial/vue3-api.html#%E5%AE%9E%E4%BE%8B-property) 获取 DOM 元素对象。  

首先需要为组件设置 ref 属性值，它类似于id：
```vue
<!-- ref 属性值为 myNode，后续可以通过此值查找 -->
<view ref="myNode" class="container">
</view>
```

在页面`onReady` 后（太早组件可能没有创建），通过 `$refs` 获取。如果长期使用，可以保存在vue的 data 中。
```ts
export default {
	data() {
		return {
			myNode: null as INode|null   //保存后可通过this.myNode访问
		}
	},
	onReady() {
		// 获取组件对象并保存在 this.myNode 中  
		this.myNode = $refs['myNode'] as INode;  //需要使用 as 转换
	},
}
```

通过INode对象的 style 属性更新组件的样式：
```ts
this.myNode?.style?.setProperty('background-color', 'red');
```


以下是完整的操作示例：  
```vue  
<template>
<!-- #ifdef APP -->
<scroll-view style="flex:1;align-items: center;">
<!-- #endif -->
	<view ref="myNode" class="container">
		<text>Hello World</text>
	</view>
	<button @tap="updateNode">操作Node</button>
<!-- #ifdef APP -->
</scroll-view>
<!-- #endif -->
</template>

<script>
	export default {
		data() {
			return {
				color: 'red',
				myNode: null as INode|null
			}
		},
		onLoad() {
		},
		onReady() {
			// 获取组件对象  
			this.myNode = $refs['myNode'] as INode;
		},
		methods: {
			updateNode() {
				this.color = 'red'==this.color?'blue':'red';
				this.myNode?.style?.setProperty('background-color', this.color);
			}
		},
	}
</script>

<style>
.container {
	align-items: center;
	justify-content: center;
	background-color: aquamarine;
	width: 100%;
	height: 200px;
}
</style>
```

以上例子仅为演示DOM API的使用，实际上点击按钮修改背景色这种简单场景，使用数据绑定更简单，class绑定到一个data上，动态修改data即可。

