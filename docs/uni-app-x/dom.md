# UVUE DOM  
UVEU页面在渲染过程中会生成对应的文档对象模型（DOM），DOM 是页面文档结构和内容的对象的数据表示。DOM 模型用一个逻辑树来表示一个页面文档，树的每个分支的终点都是一个节点，每个节点都对应一个节点对象（INode）。  
你可以调用 DOM API 操作页面的这个逻辑树，从而改变页面的结构、样式或者内容。  

通常情况下，我们建议使用 vue 框架的数据绑定来操作更新页面组件。但在一些特定场景，如响应触屏事件更新组件的位置实现跟手拖拽效果，可以通过 DOM API 跳过 vue 框架直接操作组件的样式，从而达到更高的效率。

**注意**  
在 App 端UVUE页面的 DOM 和 [W3C的DOM规范](https://www.w3.org/DOM/?spm=a2c7j.-zh-docs-api-weex-variable.0.0.2a5537c6FrgbYp)有一些差别，暂不支持直接使用 document 对象创建和操作 DOM 树中的元素。请参考[获取DOM元素对象](#getDomNode)中的示例。


## 获取DOM元素对象@getDomNode  
在UVUE页面中可以通过 vue 框架中的组件实例对象 [$refs](https://uniapp.dcloud.net.cn/tutorial/vue3-api.html#%E5%AE%9E%E4%BE%8B-property) 获取 DOM 元素对象。  

以下是完整的操作示例：  
```
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


## DOM接口  
- INode  
- CSSStyleDeclaration  
- DrawableContext  

