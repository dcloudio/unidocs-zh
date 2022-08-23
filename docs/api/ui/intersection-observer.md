节点布局交叉状态 API 可用于监听两个或多个组件节点在布局位置上的相交状态。这一组API常常可以用于推断某些节点是否可以被用户看见、有多大比例可以被用户看见。
The node layout intersection status API can be used to listen to the intersection status of two or more component nodes in the layout position. This set of APIs can often be used to deduce whether or to what extent certain nodes are visible to users.

### uni.createIntersectionObserver([this], [options])
创建并返回一个 ``IntersectionObserver`` 对象实例。
Create and return a `IntersectionObserver` object instance.

**this说明：**
**this description:**

自定义组件实例。**支付宝小程序不支持此参数，传入仅为抹平写法差异**
Custom component instance. **Alipay applet does not support this parameter, the input is only to smooth out the writing difference**

**options 的可选参数为：**
**Optional parameters of options are:**

|字段名|类型|说明|
| Field name| Type| Instruction|
|:-|:-|:-|
|thresholds|Array|一个数值数组，包含所有阈值。默认为 ``[0]``。|
| thresholds| Array| An numeric array, containing all thresholds. The default is `[0]`.|
|initialRatio|Number|初始的相交比例，如果调用时检测到的相交比例与这个值不相等且达到阈值，则会触发一次监听器的回调函数。默认为 ``0``。|
| initialRatio| Number| In terms of initial intersection ratio, if the intersection ratio detected when calling is not equal to this value and reaches the threshold, the callback function of the listener will be triggered once. The default is `0`.|
|observeAll|Boolean|是否同时观测多个参照节点（而非一个），如果设为 ``true``，``observe`` 的 ``targetSelector`` 将选中多个节点（注意：同时选中过多节点将影响渲染性能）|
| observeAll| Boolean| Whether to observe multiple reference nodes (instead of one) simultaneously. If it is set to `true`, the `targetSelector` of `observe` will select multiple nodes (note: selecting too many nodes simultaneously will affect rendering performance)|

### IntersectionObserver 对象的方法列表
### Method list of IntersectionObserver object

|方法|说明|
| Method| Instruction|
|:-|:-|
|IntersectionObserver.relativeTo(selector,[margins])|使用选择器指定一个节点，作为参照区域之一。|
| IntersectionObserver.relativeTo(selector,[margins])| Use the selector to specify a node as one of the reference areas.|
|IntersectionObserver.relativeToViewport([margins])|指定页面显示区域作为参照区域之一|
| IntersectionObserver.relativeToViewport([margins])| Specify the page display area as one of the reference areas|
|IntersectionObserver.observe(selector,[callback])|指定目标节点并开始监听相交状态变化情况。回调函数 ``callback`` 包含一个参数 ``result``|
| IntersectionObserver.observe(selector,[callback])| Specify the target node and start listening to the change of intersection status. The callback function `callback` contains a parameter `result`|
|IntersectionObserver.disconnect()|停止监听。回调函数将不再触发。|
| IntersectionObserver.disconnect()| Stop listening. The callback function will no longer be triggered.|

**margins 参数：** 用来扩展（或收缩）参照节点布局区域的边界。
**margins parameter:** Used to expand (or shrink) the bound of the layout area of the reference node.

|属性|类型|默认值|是否必填|说明|
| Attribute| Type| Defaults| Required or not| Instruction|
|:-|:-|:-|:-|:-|
|left|number||否|节点布局区域的左边界|
| left| number| | No| Left bound of node layout area|
|right|number||否|节点布局区域的右边界|
| right| number| | No| Right bound of node layout area|
|top|number||否|节点布局区域的上边界|
| top| number| | No| Upper bound of node layout area|
|bottom|number||否|节点布局区域的下边界|
| bottom| number| | No| Lower bound of node layout area|

下面的示例代码中，如果目标节点 ``".test"`` 进入 ``".scroll"`` 区域以下 100px 时，就会触发回调函数。
In the following sample code, if the target node `".test"` enters 100px below the `".scroll"` area, the callback function will be triggered.
```
uni.createIntersectionObserver(this).relativeTo('.scroll',{bottom: 100}).observe('.test', (res) => {
  console.log(res);
})
```

**observe 回调函数 result 包含的字段**
**Fields contained in the observe callback function result**

|字段名|类型|说明|
| Field name| Type| Instruction|
|:-|:-|:-|
|intersectionRatio|Number|相交比例|
| intersectionRatio| Number| Intersection ratio|
|intersectionRect|Object|相交区域的边界，包含 ``left``、``right``、``top``、``bottom`` 四项|
| intersectionRect| Object| The boundary of the intersection area, including four items: `left`, `right`, `top`, and `bottom`|
|boundingClientRect|Object|目标节点布局区域的边界，包含 ``left``、``right``、``top``、``bottom`` 四项|
| boundingClientRect| Object| The boundary of the target node layout area, including four items: `left`, `right`, `top`, and `bottom`|
|relativeRect|Object|参照区域的边界，包含 ``left``、``right``、``top``、``bottom`` 四项|
| relativeRect| Object| The boundary of the reference area, including four items: `left`, `right`, `top`, and `bottom`|
|time|Number|相交检测时的时间戳|
| time| Number| Timestamp of intersection detection|


**Tips**

- 与页面显示区域的相交区域并不准确代表用户可见的区域，因为参与计算的区域是“布局区域”，布局区域可能会在绘制时被其他节点裁剪隐藏（如祖先节点中 overflow 样式为 hidden 的节点）或遮盖（如 fixed 定位的节点）。
- The area intersect with the display area of the page does not accurately represent the area visible to the user, because the area involved in the calculation is the "layout area", and the layout area may be cropped and hidden by other nodes (such as the node whose overflow style is hidden in the ancestor node) or covered (such as the node located by fixed) when drawing.
- 节点交互状态 ``API`` 建议在 ``onReady`` 生命周期里监听，因为此 ``API`` 需要查找页面元素，``onReady`` 时页面已经完成初次渲染，已经能查找到对应的元素。
- It is recommended to listen to the node interaction status `API` in the `onReady` life cycle. The reason is that `API` needs to find page elements, and the page has already been rendered primarily at `onReady`, and the corresponding elements can already be found.

### 代码示例
### Code example

```
<template>
	<view class="container">
		<text>{{appear ? '小球出现' : '小球消失'}}</text>
		<view class="page-section">
			<scroll-view class="scroll-view" scroll-y>
				<view class="scroll-area">
					<text class="notice">向下滚动让小球出现</text>
					<view class="ball"></view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>
<script>
	let observer = null;
	export default {
		data() {
			return {
				appear: false
			}
		},
		onReady() {
			observer = uni.createIntersectionObserver(this);
            observer.relativeTo('.scroll-view').observe('.ball', (res) => {
              if (res.intersectionRatio > 0 && !this.appear) {
                this.appear = true;
              } else if (!res.intersectionRatio > 0 && this.appear) {
                this.appear = false;
              }
            })
		},
		onUnload() {
			if (observer) {
				observer.disconnect()
			}
		}
	}
</script>
<style>
	view,page {
		display: flex;
		flex-direction: column;
	}

	.scroll-view {
		height: 400rpx;
		background: #fff;
		border: 1px solid #ccc;
		box-sizing: border-box;
	}

	.scroll-area {
		height: 1300rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		transition: .5s;
	}

	.notice {
		margin-top: 150rpx;
		margin: 150rpx 0 400rpx 0;
	}

	.ball {
		width: 200rpx;
		height: 200rpx;
		background: #1AAD19;
		border-radius: 50%;
	}
</style>

```
