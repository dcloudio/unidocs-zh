# 组件的公共属性和事件

每个组件都有属性和事件。有些属性和事件，是所有组件都支持的。

## 组件公共属性

- id
- ref
- style
- class
- data-

<!-- CUSTOMTYPEJSON.general-attribute.example -->

## 组件公共事件

- @touchstart
- @touchmove
- @touchend
- @touchcancel
- @tap
- @click //与tap等价
- @longpress

在多点触摸的屏幕上，touch事件返回数组，包含了每个touch点对应的x、y坐标。

### 冒泡事件系统

DOM事件主要有三个阶段：捕获阶段、目标阶段和冒泡阶段。

以点击事件为例，当触发点击时，
1. 首先从根节点逐级向下分发，直到监听点击事件的节点为止（捕获阶段）；
2. 然后事件到达当前节点并触发点击事件（目标阶段）；
3. 接着继续向上逐级触发父节点的点击事件，直到根节点为止（冒泡阶段）。

注意，虽然有3个阶段，但第2个阶段（“目标阶段”：事件到达了元素）并没有单独处理：捕获和冒泡阶段的处理程序都会在该阶段触发。

我们一般使用默认的事件注册机制，将事件注册到冒泡阶段，相对来说，大多数处理情况都在冒泡阶段。

uvue 目前暂不支持事件的捕获阶段。

#### 阻止冒泡

在事件回调中，可以通过调用`event.stopPropagation`方法阻止事件冒泡。

```ts
handleClick (event : MouseEvent) {
    // 阻止继续冒泡.
    event.stopPropagation();
}
```

#### 阻止默认行为

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

## Event

<!-- CUSTOMTYPEJSON.Event.description -->

<!-- CUSTOMTYPEJSON.Event.extends -->

<!-- CUSTOMTYPEJSON.Event.param -->



### 方法
<!-- CUSTOMTYPEJSON.Event.methods.stopPropagation.name -->

<!-- CUSTOMTYPEJSON.Event.methods.stopPropagation.description -->

<!-- CUSTOMTYPEJSON.Event.methods.stopPropagation.param -->

<!-- CUSTOMTYPEJSON.Event.methods.stopPropagation.returnValue -->

<!-- CUSTOMTYPEJSON.Event.methods.stopPropagation.compatibility -->

<!-- CUSTOMTYPEJSON.Event.methods.stopPropagation.tutorial -->

<!-- CUSTOMTYPEJSON.Event.methods.preventDefault.name -->

<!-- CUSTOMTYPEJSON.Event.methods.preventDefault.description -->

<!-- CUSTOMTYPEJSON.Event.methods.preventDefault.param -->

<!-- CUSTOMTYPEJSON.Event.methods.preventDefault.returnValue -->

<!-- CUSTOMTYPEJSON.Event.methods.preventDefault.compatibility -->

<!-- CUSTOMTYPEJSON.Event.methods.preventDefault.tutorial -->

## CustomEvent

<!-- CUSTOMTYPEJSON.CustomEvent.description -->

<!-- CUSTOMTYPEJSON.CustomEvent.extends -->

<!-- CUSTOMTYPEJSON.CustomEvent.param -->



### 方法
<!-- CUSTOMTYPEJSON.CustomEvent.methods.stopPropagation.name -->

<!-- CUSTOMTYPEJSON.CustomEvent.methods.stopPropagation.description -->

<!-- CUSTOMTYPEJSON.CustomEvent.methods.stopPropagation.param -->

<!-- CUSTOMTYPEJSON.CustomEvent.methods.stopPropagation.returnValue -->

<!-- CUSTOMTYPEJSON.CustomEvent.methods.stopPropagation.compatibility -->

<!-- CUSTOMTYPEJSON.CustomEvent.methods.stopPropagation.tutorial -->

<!-- CUSTOMTYPEJSON.CustomEvent.methods.preventDefault.name -->

<!-- CUSTOMTYPEJSON.CustomEvent.methods.preventDefault.description -->

<!-- CUSTOMTYPEJSON.CustomEvent.methods.preventDefault.param -->

<!-- CUSTOMTYPEJSON.CustomEvent.methods.preventDefault.returnValue -->

<!-- CUSTOMTYPEJSON.CustomEvent.methods.preventDefault.compatibility -->

<!-- CUSTOMTYPEJSON.CustomEvent.methods.preventDefault.tutorial -->

## CustomEventOptions

<!-- CUSTOMTYPEJSON.CustomEventOptions.description -->

<!-- CUSTOMTYPEJSON.CustomEventOptions.extends -->

<!-- CUSTOMTYPEJSON.CustomEventOptions.param -->

## MouseEvent

<!-- CUSTOMTYPEJSON.MouseEvent.description -->

<!-- CUSTOMTYPEJSON.MouseEvent.extends -->

<!-- CUSTOMTYPEJSON.MouseEvent.param -->

### 方法
<!-- CUSTOMTYPEJSON.MouseEvent.methods.stopPropagation.name -->

<!-- CUSTOMTYPEJSON.MouseEvent.methods.stopPropagation.description -->

<!-- CUSTOMTYPEJSON.MouseEvent.methods.stopPropagation.param -->

<!-- CUSTOMTYPEJSON.MouseEvent.methods.stopPropagation.returnValue -->

<!-- CUSTOMTYPEJSON.MouseEvent.methods.stopPropagation.compatibility -->

<!-- CUSTOMTYPEJSON.MouseEvent.methods.stopPropagation.tutorial -->

<!-- CUSTOMTYPEJSON.MouseEvent.methods.preventDefault.name -->

<!-- CUSTOMTYPEJSON.MouseEvent.methods.preventDefault.description -->

<!-- CUSTOMTYPEJSON.MouseEvent.methods.preventDefault.param -->

<!-- CUSTOMTYPEJSON.MouseEvent.methods.preventDefault.returnValue -->

<!-- CUSTOMTYPEJSON.MouseEvent.methods.preventDefault.compatibility -->

<!-- CUSTOMTYPEJSON.MouseEvent.methods.preventDefault.tutorial -->

## TouchEvent

<!-- CUSTOMTYPEJSON.TouchEvent.description -->

<!-- CUSTOMTYPEJSON.TouchEvent.extends -->

<!-- CUSTOMTYPEJSON.TouchEvent.param -->

### 方法
<!-- CUSTOMTYPEJSON.TouchEvent.methods.stopPropagation.name -->

<!-- CUSTOMTYPEJSON.TouchEvent.methods.stopPropagation.description -->

<!-- CUSTOMTYPEJSON.TouchEvent.methods.stopPropagation.param -->

<!-- CUSTOMTYPEJSON.TouchEvent.methods.stopPropagation.returnValue -->

<!-- CUSTOMTYPEJSON.TouchEvent.methods.stopPropagation.compatibility -->

<!-- CUSTOMTYPEJSON.TouchEvent.methods.stopPropagation.tutorial -->

<!-- CUSTOMTYPEJSON.TouchEvent.methods.preventDefault.name -->

<!-- CUSTOMTYPEJSON.TouchEvent.methods.preventDefault.description -->

<!-- CUSTOMTYPEJSON.TouchEvent.methods.preventDefault.param -->

<!-- CUSTOMTYPEJSON.TouchEvent.methods.preventDefault.returnValue -->

<!-- CUSTOMTYPEJSON.TouchEvent.methods.preventDefault.compatibility -->

<!-- CUSTOMTYPEJSON.TouchEvent.methods.preventDefault.tutorial -->

## Touch

<!-- CUSTOMTYPEJSON.Touch.description -->

<!-- CUSTOMTYPEJSON.Touch.extends -->

<!-- CUSTOMTYPEJSON.Touch.param -->

<!-- CUSTOMTYPEJSON.general-event.example -->