## DrawableContext  

uni-app x 在 app 端提供 DrawableContext 绘制内容到 uvue 页面的`view`标签上。可用于绘制文本、形状等内容。

### 使用

#### 获取 DrawableContext 对象

DrawableContext 对象通过对象节点（INode）的`getDrawableContext()`方法获取

```vue
<template>
	<view ref="drawable" style="width: 750rpx;height: 750rpx;">
	</view>
</template>
<script>
	export default {
		onReady() {
			var ctx = (this.$refs['drawable'] as INode).getDrawableContext()
		}
	}
</script>
```

#### 绘制内容

通过 DrawableContext 提供的 API 绘制文本、形状等内容

```ts
<script>
	export default {
		onReady() {
			var ctx = (this.$refs['drawable'] as INode).getDrawableContext()
			ctx.moveTo(50, 40);
			ctx.lineTo(200, 40);
			ctx.stroke();
		}
	}
</script>
```

#### 更新到画布

DrawableContext 在调用 API 之后不会主动更新到画布上，需要主动调用`update()`方法更新。

```ts
<script>
	export default {
		onReady() {
			var ctx = (this.$refs['drawable'] as INode).getDrawableContext()
			ctx.moveTo(50, 40);
			ctx.lineTo(200, 40);
			ctx.stroke();
			ctx.update()
		}
	}
</script>
```

#### 清除画布内容

如果清除已经绘制的内容重新绘制，需要调用`reset()`方法清除内容再进行绘制。

```vue
<template>
	<view ref="drawable" style="width: 750rpx;height: 750rpx;" @click="drawable">
	</view>
</template>
<script>
	export default {
		data(){
			return {
				change:false
			}
		},
		onReady() {
			this.drawable()
		},
		methods:{
			drawable(){
				var ctx = (this.$refs['drawable'] as INode).getDrawableContext()
				ctx.reset();
				if(this.change) {
					ctx.strokeStyle = "#33ff0000"
					ctx.lineWidth = 10
				}
				this.change = !this.change
				ctx.moveTo(50, 40);
				ctx.lineTo(200, 40);
				ctx.stroke();
				ctx.update()
			}
		}
	}
```