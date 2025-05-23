::: tip 组件名：uni-transition
> 代码块： `uTransition`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-transition)
:::

元素过渡动画


## 介绍
::: warning 注意事项
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
- 组件需要依赖 `sass` 插件 ，请自行手动安装
- rotate 旋转动画不需要填写 deg 单位，在小程序上填写单位动画不会执行
- NVUE 下修改宽高动画，不能定位到中心点
- 百度小程序下修改宽高 ，可能会影响其他动画，需注意
- nvue 不支持 custom-class , 请使用 styles
:::

### 基本用法

```html
<template>
	<view>
		<button type="primary" @click="open">fade</button>
		<uni-transition mode-class="fade" :styles="{'width':'100px','height':'100px','backgroundColor':'red'}" :show="show" @change="change" />
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: false,
		}
	},
	onLoad() {},
	methods: {
		open(mode) {
			this.show = !this.show
		},
		change() {
			console.log('触发动画')
		}
	}
}
</script>
```

### 样式覆盖

**注意：`nvue` 不支持 `custom-class` 属性 ，需要使用 `styles` 属性进行兼容**

使用 `custom-class` 属性绑定样式，可以自定义 `uni-transition` 的样式

```html
<template>
	<view class="content">
		<uni-transition custom-class="custom-transition" mode-class="fade" :duration="0" :show="true" />
	</view>
</template>

<style>
/* 常规样式覆盖  */
.content >>> .custom-transition {
	width:100px;
	height:100px;
	background-color:red;
}
</style>
<style lang="scss">
/* 如果使用 scss 需要使用 /deep/  */
.content /deep/ .custom-transition {
	width:100px;
	height:100px;
	background-color:red;
}
</style>
```


如果使用 `styles` 注意带’-‘连接符的属性需要使用小驼峰写法如：`backgroundColor:red`

```html
<template>
	<view class="content">
		<uni-transition :styles="styles" mode-class="fade" :duration="0" :show="true" />
	</view>
</template>
<script>
export default {
	data() {
		return {
			styles:{
				'width':'100px',
				'height':'100px',
				'backgroundColor':'red'
			}
		}
	}
}
</script>
```

### 自定义动画
当内置动画类型不能满足需求的时候 ，可以使用 `step()` 和 `run()` 自定义动画,入参以及具体用法参考下方属性说明

`init()` 方法可以覆盖默认配置


```html
<template>
	<view>
		<button type="primary" @click="run">执行动画</button>
		<uni-transition ref="ani" :styles="{'width':'100px','height':'100px','backgroundColor':'red'}" :show="show"  />
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: true,
		}
	},
	onReady() {
		this.$refs.ani.init({
			duration: 1000,
			timingFunction: 'linear',
			transformOrigin: '50% 50%',
			delay: 500
		})
	},
	methods: {
		run() {
			// 同时右平移到 100px,旋转 360 度
			this.$refs.ani.step({
				translateX: '100px',
				rotate: '360'
			})
			// 上面的动画执行完成后，等待200毫秒平移到 0px,旋转到 0 度
			this.$refs.ani.step({
				translateX: '0px',
				rotate: '0'
			},
			{
				timingFunction: 'ease-in',
				duration: 200
			})
			// 开始执行动画
			this.$refs.ani.run(()=>{
				console.log('动画支持完毕')
			})
		}
	}
}
</script>
```


## API

### Transition Props

|属性名		|类型	|默认值	|说明					|
|:-:	|:-:	|:-:					|:-:|
|show				|Boolean|false	|控制组件显示或隐藏	|
|mode-class |Array/String	|-		|内置过渡动画类型			|
|custom-class |String	|-		|自定义类名	|
|duration	 |Number	|300	|过渡动画持续时间		|
|styles		 |Object	|-		|组件样式，同 css 样式，注意带’-‘连接符的属性需要使用小驼峰写法如：`backgroundColor:red`	|

#### mode-class 内置过渡动画类型说明
**格式为** ：`'fade'` 或者 `['fade','slide-top']`

|属性名			|说明			|
|:-:			|:-:			|
|fade			|渐隐渐出过渡	|
|slide-top		|由上至下过渡	|
|slide-right	|由右至左过渡	|
|slide-bottom	|由下至上过渡	|
|slide-left		|由左至右过渡	|
|zoom-in		|由小到大过渡	|
|zoom-out		|由大到小过渡	|

**注意** 

组合使用时，同一种类型相反的过渡动画如（slide-top、slide-bottom）同时使用时，只有最后一个生效

### Transition Events

|事件名		|说明				|返回值			|
|:-:			|:-:				|:-:			|
|click		|点击组件触发		|-				|
|change		|过渡动画结束时触发	| e = {detail:true}	|

### Transition Methons

|方法名|说明|参数|
|:-:|:-:|:-:|
|init()|手动初始化配置|Function(OBJECT:config)|
|step()|动画队列|Function(OBJECT:type,OBJECT:config)|
|run()|执行动画|Function(FUNCTION:callback)	|

### init(OBJECT:config)
**通过 ref 调用方法**

手动设置动画配置，需要在页面渲染完毕后调用

```javascript
this.$refs.ani.init({
	duration: 1000,
	timingFunction:'ease',
	delay:500,
	transformOrigin:'left center'
})
```

### step(OBJECT:type,OBJECT:config) 动画队列
**通过 ref 调用方法**

调用 `step()` 来表示一组动画完成，`step` 第一个参数可以传入任意多个动画方法，一组动画中的所有动画会同时开始，一组动画完成后才会进行下一组动画。`step` 第二个参数可以传入一个跟 `uni.createAnimation()` 一样的配置参数用于指定当前组动画的配置。

Tips
- 第一个参数支持的动画参考下面的 `支持的动画`
- 第二个参数参考下面的 `动画配置`，可省略，如果省略继承`init`的配置


```javascript
this.$refs.ani.step({
	translateX: '100px'
},{
	duration: 1000,
	timingFunction:'ease',
	delay:500,
	transformOrigin:'left center'
})
```

### run(FUNCTION:callback) 执行动画
**通过 ref 调用方法**

在执行 `step()` 后，需要调用 `run()` 来运行动画 ，否则动画会一直等待

`run()` 方法可以传入一个 `callback` 函数 ，会在所有动画执行完毕后回调

```javascript
this.$refs.ani.step({
	translateX: '100px'
})
this.$refs.ani.run(()=>{
	console.log('动画执行完毕')
})

```

### 动画配置
动画配置 ， `init()` 与 `step()` 第二个参数配置相同 ，如果配置`step() `第二个参数，将会覆盖 `init()` 的配置

|属性名|值|必填|默认值|说明|平台差异|
|:-:|:-:|:-:|:-:|:-:|:-:|
|duration|Number|否|400|动画持续时间，单位ms|-|
|timingFunction|String|否|"linear"|定义动画的效果|-|
|delay|Number|否|0|动画延迟时间，单位 ms|-|
|needLayout|Boolean|否|false	|动画执行是否影响布局|仅 nvue 支持|
|transformOrigin|String	|否|"center center"|设置	[transform-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)|-|


### timingFunction 属性说明

|值|说明|平台差异|
|:-:|:-:|:-:|
|linear|动画从头到尾的速度是相同的|-|
|ease|动画以低速开始，然后加快，在结束前变慢|-|
|ease-in|	动画以低速开始|-|
|ease-in-out|	动画以低速开始和结束|-|
|ease-out|动画以低速结束|-|
|step-start|动画第一帧就跳至结束状态直到结束|nvue不支持|
|step-end|动画一直保持开始状态，最后一帧跳到结束状态|nvue不支持|

```javascript
// init 配置
this.$refs.ani.init({
	duration: 1000,
	timingFunction:'ease',
	delay:500,
	transformOrigin:'left center'
})
// step 配置
this.$refs.ani.step({
	translateX: '100px'
},{
	duration: 1000,
	timingFunction:'ease',
	delay:500,
	transformOrigin:'left center'
})
```

### 支持的动画
动画方法 

如果同一个动画方法有多个值，多个值使用数组分隔

```javascript
this.$refs.ani.step({
	width:'100px',
	scale: [1.2,0.8],
})
```

**样式：**

|属性名|值|说明|平台差异|
|:-:|:-:|:-:|:-:|
|opacity|value|透明度，参数范围 0~1|-|
|backgroundColor|color|颜色值|-|
|width|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值|-|
|height|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值|-|
|top|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值|nvue 不支持|
|left|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值|nvue 不支持|
|bottom|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值|nvue 不支持|
|right|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值|nvue 不支持|

```javascript
this.$refs.ani.step({
	opacity: 1,
	backgroundColor: '#ff5a5f',
	widht:'100px',
	height:'50rpx',
})
```

**旋转：**

旋转属性的值不需要填写单位

|属性名|值|说明|平台差异	|
|:-:|:-:|:-:|:-:|
|rotate|deg|deg的范围-180~180，从原点顺时针旋转一个deg角度	|-|
|rotateX|deg|deg的范围-180~180，在X轴旋转一个deg角度				|-|
|rotateY|deg|deg的范围-180~180，在Y轴旋转一个deg角度				|-|
|rotateZ|deg|deg的范围-180~180，在Z轴旋转一个deg角度				|nvue不支持|
|rotate3d|x,y,z,deg| 同	[transform-function rotate3d](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate3d())		|nvue不支持|

```javascript
this.$refs.ani.step({
	rotateX: 45,
	rotateY: 45
})
```

**缩放：**

|属性名|值|说明|平台差异|
|:-:|:-:|:-:	|:-:|
|scale|sx,[sy]|一个参数时，表示在X轴、Y轴同时缩放sx倍数；两个参数时表示在X轴缩放sx倍数，在Y轴缩放sy倍数|-|
|scaleX|sx|在X轴缩放sx倍数|-|
|scaleY|sy|在Y轴缩放sy倍数|-|
|scaleZ|sz|在Z轴缩放sy倍数|nvue不支持|
|scale3d|sx,sy,sz|在X轴缩放sx倍数，在Y轴缩放sy倍数，在Z轴缩放sz倍数|nvue不支持|

```javascript
this.$refs.ani.step({
	scale: [1.2,0.8]
})
```

**偏移：**

|属性名|值|说明|平台差异|
|:-:|:-:|:-:|:-:|
|translate|tx,[ty]|一个参数时，表示在X轴偏移tx，单位px；两个参数时，表示在X轴偏移tx，在Y轴偏移ty，单位px。|-|
|translateX|tx|	在X轴偏移tx，单位px|-|
|translateY|ty|	在Y轴偏移tx，单位px|-|
|translateZ|tz|	在Z轴偏移tx，单位px|nvue不支持|
|translate3d|tx,ty,tz|	在X轴偏移tx，在Y轴偏移ty，在Z轴偏移tz，单位px|nvue不支持|

```javascript
this.$refs.ani.step({
	translateX: '100px'
})
```


## 示例
::: warning 注意
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-transition) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/transition/transition
> Template
``` html
<template>
	<view>
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">过渡动画，通常用于元素的过渡效果，例如淡隐淡出效果，遮罩层的效果、放大缩小的效果等</text>
		</uni-card>
		<uni-section title="示例" type="line">
			<view class="example">
				<uni-transition ref="ani" custom-class="transition" :mode-class="modeClass" :styles="styles"
					:show="show"><text class="text">示例元素</text></uni-transition>
			</view>
		</uni-section>

		<uni-section title="操作" subTitle="点击按钮 ,切换动画效果" type="line">
			<view class="example-body">
				<button class="transition-button" type="primary" @click="handle('fade')">淡隐淡出</button>
				<button class="transition-button" type="primary" @click="handle(['fade', 'slide-top'])">由上至下</button>
				<button class="transition-button" type="primary" @click="handle(['fade', 'slide-right'])">由右至左过</button>
				<button class="transition-button" type="primary" @click="handle(['fade', 'zoom-in'])">由小到大过</button>
				<button class="transition-button" type="primary" @click="custom">自定义动画</button>
			</view>
		</uni-section>

	</view>
</template>
```
> Script
```html
<script>
	export default {
		components: {},
		data() {
			return {
				show: true,
				modeClass: 'fade',
				styles: {}
			}
		},
		onLoad() {
			// #ifdef APP-NVUE
			this.styles = {
				justifyContent: 'center',
				alignItems: 'center',
				width: '100px',
				height: '100px',
				borderRadius: '5px',
				textAlign: 'center',
				backgroundColor: '#4cd964',
				boxShadow: '0 0 5px 1px rgba(0,0,0,0.2)'
			}
			// #endif
		},
		methods: {
			handle(type) {
				this.show = !this.show
				this.modeClass = type
			},
			custom() {
				// TODO 下面修改宽高在百度下还有些问题待修复
				// this.$refs.ani.step({
				// 	width: '200px'
				// })
				// this.$refs.ani.step({
				// 	height: '150px'
				// },{
				// 	delay:100,
				// 	duration:200
				// })
				this.$refs.ani.step({
					width: '100px',
					height: '100px',
					rotate: '180'
				}, {
					delay: 200,
					duration: 300
				})
				this.$refs.ani.step({
					width: '100px',
					height: '100px',
					rotate: '0'
				}, {
					transformOrigin: '50% 50%'
				})

				this.$refs.ani.step({
					translateX: '-100px'
				}, {
					timingFunction: 'ease-in',
					duration: 100
				})

				this.$refs.ani.step({
					translateX: '100px'
				}, {
					timingFunction: 'ease',
					duration: 300
				})

				this.$refs.ani.step({
					translateX: '50px',
					scale: 1.5
				}, {
					timingFunction: 'linear',
					duration: 100
				})
				this.$refs.ani.step({
					translateX: '0px',
					scale: 1
				}, {
					timingFunction: 'linear',
					duration: 150
				})

				this.$refs.ani.run()
			}
		}
	}
</script>

```
> Style
```html
<style lang="scss">
	.example {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		justify-content: center;
		align-items: center;
		height: 150px;
		background-color: #fff;
	}

	.example-body {
		padding: 10px 20px;
		padding-bottom: 0px;
	}

	.transition-button {
		/* #ifndef APP-NVUE */
		width: 100%;
		/* #endif */
		flex: 1;
		margin-bottom: 10px;
	}

	/* #ifndef APP-NVUE */
	.example ::v-deep .transition {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100px;
		height: 100px;
		border-radius: 5px;
		text-align: center;
		background-color: #4cd964;
		box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
	}

	/* #endif */

	.text {
		font-size: 14px;
		color: #fff;
	}
</style>

```
:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/transition/transition)
