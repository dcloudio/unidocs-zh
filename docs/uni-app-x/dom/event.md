## Event事件系统

uvue 支持事件冒泡。

### 简述

DOM事件主要有三个阶段：捕获阶段、目标阶段和冒泡阶段。

以点击事件为例，当触发点击时，
1. 首先从根节点逐级向下分发，直到监听点击事件的节点为止（捕获阶段）；
2. 然后事件到达当前节点并触发点击事件（目标阶段）；
3. 接着继续向上逐级触发父节点的点击事件，直到根节点为止（冒泡阶段）。

注意，虽然有3个阶段，但第2个阶段（“目标阶段”：事件到达了元素）并没有单独处理：捕获和冒泡阶段的处理程序都会在该阶段触发。

我们一般使用默认的事件注册机制，将事件注册到冒泡阶段，相对来说，大多数处理情况都在冒泡阶段。

uvue 目前暂时不支持事件的捕获阶段。

### 阻止冒泡

在事件回调中，可以通过调用`event.stopPropagation`方法阻止事件冒泡。

```ts
handleClick (event : MouseEvent) {
    // 阻止继续冒泡.
    event.stopPropagation();
}
```

### 阻止默认行为

在事件回调中，可以通过调用`event.preventDefault`方法阻止默认行为。`event.preventDefault`仅处理默认行为，事件冒泡不会被阻止。

```vue
<template>
	<scroll-view style="flex: 1;">
		<view style="width: 750rpx;height: 1750rpx;background-color: bisque;">
			滑动框中区域修改进度并阻止滚动，滑动其余空白区域触发滚动
			<view style="width: 750rpx;height: 40rpx; margin-top: 100rpx;border:5rpx;" @touchmove="slider">
				<view ref="sliderNode" style="background-color: chocolate;width: 0rpx;height: 30rpx;"></view>
			</view>
		</view>
	</scroll-view>
</template>
<script>
	export default {
		data() {
			return {
				sliderNode: null as INode | null
			}
		},
		methods: {
			slider(e : TouchEvent) {
				if (this.sliderNode == null) {
					this.sliderNode = this.$refs["sliderNode"] as INode
				}
				e.preventDefault() // 阻止外层scroll-view滚动行为
				this.sliderNode!!.style?.setProperty('width', e.touches[0].screenX);
			}
		}
	}
</script>
```