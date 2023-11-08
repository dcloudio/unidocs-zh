
::: tip 组件名：uni-transition
::: tip component name: uni-transition
> 代码块： `uTransition`
> Code block: `uTransition`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-transition)
[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-transition)
:::

元素过渡动画
Element transition animation


## 介绍
## introduce
::: warning 注意事项
::: warning Notes
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
> In order to avoid wrong use and bring you a bad development experience, please read the following precautions carefully before using the component, which can help you avoid some mistakes.
- 组件需要依赖 `sass` 插件 ，请自行手动安装
- The component needs to depend on the `sass` plugin, please install it manually
- rotate 旋转动画不需要填写 deg 单位，在小程序上填写单位动画不会执行
- The rotate animation does not need to fill in the deg unit. Filling in the unit animation on the applet will not execute
- NVUE 下修改宽高动画，不能定位到中心点
- Modify the width and height animation under NVUE, cannot locate the center point
- 百度小程序下修改宽高 ，可能会影响其他动画，需注意
- Modify the width and height under the Baidu applet, which may affect other animations, please pay attention
- nvue 不支持 custom-class , 请使用 styles
- nvue does not support custom-class , please use styles
:::

### 基本用法
### Basic usage

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
### style override

**注意：`nvue` 不支持 `custom-class` 属性 ，需要使用 `styles` 属性进行兼容**
**Note: `nvue` does not support the `custom-class` attribute, you need to use the `styles` attribute for compatibility**

使用 `custom-class` 属性绑定样式，可以自定义 `uni-transition` 的样式
Use the `custom-class` attribute to bind styles to customize the style of `uni-transition`

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
If you use `styles` note that properties with '-' connectors need to use small camel case such as: `backgroundColor:red`

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
### custom animation
当内置动画类型不能满足需求的时候 ，可以使用 `step()` 和 `run()` 自定义动画,入参以及具体用法参考下方属性说明
When the built-in animation type cannot meet the requirements, you can use `step()` and `run()` to customize the animation. For parameters and specific usage, please refer to the property description below

`init()` 方法可以覆盖默认配置
The `init()` method can override the default configuration


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
			// 同时右平移到 100px,旋转 360 读
			// At the same time pan right to 100px, rotate 360 to read
			this.$refs.ani.step({
				translateX: '100px',
				rotate: '360'
			})
			// 上面的动画执行完成后，等待200毫秒平移到 0px,旋转到 0 读
			// After the above animation is executed, wait for 200 milliseconds to translate to 0px, rotate to 0 to read
			this.$refs.ani.step({
				translateX: '0px',
				rotate: '0'
			},
			{
				timingFunction: 'ease-in',
				duration: 200
			})
			// 开始执行动画
			// start the animation
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
|property name |type |default value |description |
|:-:	|:-:	|:-:					|:-:|
|show				|Boolean|false	|控制组件显示或隐藏	|
|show |Boolean|false |Control component show or hide |
|mode-class |Array/String	|-		|内置过渡动画类型			|
|mode-class |Array/String |- |Built-in transition animation type |
|custom-class |String	|-		|自定义类名	|
|custom-class |String |- |custom-class name |
|duration	 |Number	|300	|过渡动画持续时间		|
|duration |Number |300 |Transition Animation Duration |
|styles		 |Object	|-		|组件样式，同 css 样式，注意带’-‘连接符的属性需要使用小驼峰写法如：`backgroundColor:red`	|
|styles |Object |- |Component styles, the same as css styles, note that properties with '-' connectors need to be written in small camel case, such as: `backgroundColor:red` |

#### mode-class 内置过渡动画类型说明
#### mode-class built-in transition animation type description
**格式为** ：`'fade'` 或者 `['fade','slide-top']`
**Format is**: `'fade'` or `['fade','slide-top']`

|属性名			|说明			|
|property name |description |
|:-:			|:-:			|
|fade			|渐隐渐出过渡	|
|fade |Fade out transition |
|slide-top		|由上至下过渡	|
|slide-top |Transition from top to bottom |
|slide-right	|由右至左过渡	|
|slide-right |Transition from right to left |
|slide-bottom	|由下至上过渡	|
|slide-bottom |Transition from bottom to top |
|slide-left		|由左至右过渡	|
|slide-left |Transition from left to right |
|zoom-in		|由小到大过渡	|
|zoom-in |Transition from small to large |
|zoom-out		|由大到小过渡	|
|zoom-out |Transition from big to small |

**注意** 
**Notice** 

组合使用时，同一种类型相反的过渡动画如（slide-top、slide-bottom）同时使用时，只有最后一个生效
When used in combination, when the same type of opposite transition animations (slide-top, slide-bottom) are used at the same time, only the last one will take effect

### Transition Events

|事件名		|说明				|返回值			|
|Event Name |Description |Return Value |
|:-:			|:-:				|:-:			|
|click		|点击组件触发		|-				|
|click |Click component triggers |- |
|change		|过渡动画结束时触发	| e = {detail:true}	|
|change |Triggered when transition animation ends | e = {detail:true} |

### Transition Methons

|方法名|说明|参数|
|method name|description|parameters|
|:-:|:-:|:-:|
|init()|手动初始化配置|Function(OBJECT:config)|
|init()|Manually initialize the configuration|Function(OBJECT:config)|
|step()|动画队列|Function(OBJECT:type,OBJECT:config)|
|step()|Animation Queue|Function(OBJECT:type,OBJECT:config)|
|run()|执行动画|Function(FUNCTION:callback)	|
|run()|Execute animation|Function(FUNCTION:callback) |

### init(OBJECT:config)
**通过 ref 调用方法**
**Calling methods by ref**

手动设置动画配置，需要在页面渲染完毕后调用
Manually set the animation configuration, which needs to be called after the page is rendered

```javascript
this.$refs.ani.init({
	duration: 1000,
	timingFunction:'ease',
	delay:500,
	transformOrigin:'left center'
})
```

### step(OBJECT:type,OBJECT:config) 动画队列
### step(OBJECT:type,OBJECT:config) animation queue
**通过 ref 调用方法**
**Calling methods by ref**

调用 `step()` 来表示一组动画完成，`step` 第一个参数可以传入任意多个动画方法，一组动画中的所有动画会同时开始，一组动画完成后才会进行下一组动画。`step` 第二个参数可以传入一个跟 `uni.createAnimation()` 一样的配置参数用于指定当前组动画的配置。
Call `step()` to indicate that a group of animations is completed. The first parameter of `step` can be passed to any number of animation methods. All animations in a group of animations will start at the same time, and the next animation will be performed after a group of animations is completed. Group animation. The second parameter of `step` can be passed a configuration parameter same as `uni.createAnimation()` to specify the configuration of the current group animation.

Tips
- 第一个参数支持的动画参考下面的 `支持的动画`
- The animations supported by the first parameter refer to `Supported animations` below
- 第二个参数参考下面的 `动画配置`，可省略，如果省略继承`init`的配置
- The second parameter refers to the following `animation configuration`, which can be omitted, if the configuration of inheriting `init` is omitted


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
### run(FUNCTION:callback) execute animation
**通过 ref 调用方法**
**Calling methods by ref**

在执行 `step()` 后，需要调用 `run()` 来运行动画 ，否则动画会一直等待
After executing `step()`, you need to call `run()` to run the animation, otherwise the animation will wait forever

`run()` 方法可以传入一个 `callback` 函数 ，会在所有动画执行完毕后回调
The `run()` method can be passed a `callback` function, which will be called after all animations are executed

```javascript
this.$refs.ani.step({
	translateX: '100px'
})
this.$refs.ani.run(()=>{
	console.log('动画执行完毕')
})

```

### 动画配置
### Animation configuration
动画配置 ， `init()` 与 `step()` 第二个参数配置相同 ，如果配置`step() `第二个参数，将会覆盖 `init()` 的配置
Animation configuration, `init()` is the same as the second parameter configuration of `step()`, if the second parameter of `step()` is configured, it will override the configuration of `init()`

|属性名|值|必填|默认值|说明|平台差异|
|PropertyName|Value|Required|Default|Description|Platform Difference|
|:-:|:-:|:-:|:-:|:-:|:-:|
|duration|Number|否|400|动画持续时间，单位ms|-|
|duration|Number|No|400|Animation duration, in ms|-|
|timingFunction|String|否|"linear"|定义动画的效果|-|
|timingFunction|String|No|"linear"|Defines the effect of the animation|-|
|delay|Number|否|0|动画延迟时间，单位 ms|-|
|delay|Number|No|0|Animation delay time, unit ms|-|
|needLayout|Boolean|否|false	|动画执行是否影响布局|仅 nvue 支持|
|needLayout|Boolean|No|false |Does the animation affect the layout |Only supported by nvue|
|transformOrigin|String	|否|"center center"|设置	[transform-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)|-|
|transformOrigin|String |No|"center center"|Set [transform-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)|-|


### timingFunction 属性说明
### timingFunction property description

|值|说明|平台差异|
|Value|Description|Platform Difference|
|:-:|:-:|:-:|
|linear|动画从头到尾的速度是相同的|-|
|linear|The speed of the animation is the same from beginning to end|-|
|ease|动画以低速开始，然后加快，在结束前变慢|-|
|ease|The animation starts at a slow speed, then speeds up and slows down before the end|-|
|ease-in|	动画以低速开始|-|
|ease-in| Animation starts at slow speed|-|
|ease-in-out|	动画以低速开始和结束|-|
|ease-in-out| Animation starts and ends at low speed|-|
|ease-out|动画以低速结束|-|
|ease-out|Animation ends at slow speed|-|
|step-start|动画第一帧就跳至结束状态直到结束|nvue不支持|
|step-start|The first frame of the animation jumps to the end state until the end|nvue does not support|
|step-end|动画一直保持开始状态，最后一帧跳到结束状态|nvue不支持|
|step-end|The animation keeps the start state, and the last frame jumps to the end state|nvue does not support|

```javascript
// init 配置
// init configuration
this.$refs.ani.init({
	duration: 1000,
	timingFunction:'ease',
	delay:500,
	transformOrigin:'left center'
})
// step 配置
// step configuration
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
### Supported animations
动画方法 
animation method

如果同一个动画方法有多个值，多个值使用数组分隔
If the same animation method has multiple values, use an array to separate the multiple values

```javascript
this.$refs.ani.step({
	width:'100px',
	scale: [1.2,0.8],
})
```

**样式：**
**style:**

|属性名|值|说明|平台差异|
|property name|value|description|platform difference|
|:-:|:-:|:-:|:-:|
|opacity|value|透明度，参数范围 0~1|-|
|opacity|value|transparency, the parameter range is 0~1|-|
|backgroundColor|color|颜色值|-|
|backgroundColor|color|Color value|-|
|width|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值|-|
|width|length|Length value, if you pass in Number, it will use px by default, you can pass in the length value of other custom units|-|
|height|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值|-|
|height|length|Length value, if you pass in Number, it will use px by default, you can pass in the length value of other custom units|-|
|top|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值|nvue 不支持|
|top|length|Length value, if you pass in Number, it will use px by default, you can pass in the length value of other custom units|nvue does not support|
|left|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值|nvue 不支持|
|left|length|Length value, if you pass in Number, it will use px by default, you can pass in the length value of other custom units|nvue does not support|
|bottom|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值|nvue 不支持|
|bottom|length|Length value, if you pass in Number, it will use px by default, you can pass in the length value of other custom units|nvue does not support|
|right|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值|nvue 不支持|
|right|length|Length value, if you pass in Number, it will use px by default, you can pass in the length value of other custom units|nvue does not support|

```javascript
this.$refs.ani.step({
	opacity: 1,
	backgroundColor: '#ff5a5f',
	widht:'100px',
	height:'50rpx',
})
```

**旋转：**
**Rotation:**

旋转属性的值不需要填写单位
The value of the rotation attribute does not need to fill in the unit

|属性名|值|说明|平台差异	|
|property name|value|description|platform difference|
|:-:|:-:|:-:|:-:|
|rotate|deg|deg的范围-180~180，从原点顺时针旋转一个deg角度	|-|
|rotate|deg|The range of deg is -180~180, which is rotated one deg angle clockwise from the origin |-|
|rotateX|deg|deg的范围-180~180，在X轴旋转一个deg角度				|-|
|rotateX|deg|The range of deg is -180~180, rotate a deg angle on the X axYes |-|
|rotateY|deg|deg的范围-180~180，在Y轴旋转一个deg角度				|-|
|rotateY|deg|The range of deg is -180~180, and rotate a deg angle on the Y axYes |-|
|rotateZ|deg|deg的范围-180~180，在Z轴旋转一个deg角度				|nvue不支持|
|rotateZ|deg|deg range -180~180, rotate a deg angle on the Z axYes |nvue does not support|
|rotate3d|x,y,z,deg| 同	[transform-function rotate3d](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate3d())		|nvue不支持|
|rotate3d|x,y,z,deg| Same as [transform-function rotate3d](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate3d()) |nvue does not Support|

```javascript
this.$refs.ani.step({
	rotateX: 45,
	rotateY: 45
})
```

**缩放：**
**Zoom:**

|属性名|值|说明|平台差异|
|property name|value|description|platform difference|
|:-:|:-:|:-:	|:-:|
|scale|sx,[sy]|一个参数时，表示在X轴、Y轴同时缩放sx倍数；两个参数时表示在X轴缩放sx倍数，在Y轴缩放sy倍数|-|
|scale|sx,[sy]|When one parameter is used, it means to scale the sx multiple on the X-axis and Y-axis at the same time; when there are two parameters, it means to scale the sx multiple on the X-axis and the sy multiple on the Y-axYes|-|
|scaleX|sx|在X轴缩放sx倍数|-|
|scaleX|sx|Scale sx times on the X axYes|-|
|scaleY|sy|在Y轴缩放sy倍数|-|
|scaleY|sy|Scale the sy factor on the Y axYes|-|
|scaleZ|sz|在Z轴缩放sy倍数|nvue不支持|
|scaleZ|sz|Scale sy times in Z axYes|Not supported by nvue|
|scale3d|sx,sy,sz|在X轴缩放sx倍数，在Y轴缩放sy倍数，在Z轴缩放sz倍数|nvue不支持|
|scale3d|sx,sy,sz|Scale the sx multiplier on the X axis, the sy multiplier on the Y axis, and the sz multiplier on the Z axYes|nvue does not support|

```javascript
this.$refs.ani.step({
	scale: [1.2,0.8]
})
```

**偏移：**
**Offset:**

|属性名|值|说明|平台差异|
|property name|value|description|platform difference|
|:-:|:-:|:-:|:-:|
|translate|tx,[ty]|一个参数时，表示在X轴偏移tx，单位px；两个参数时，表示在X轴偏移tx，在Y轴偏移ty，单位px。|-|
|translate|tx,[ty]|When one parameter is used, it means the offset tx on the X-axis, the unit is px; when there are two parameters, it means that the offset is tx on the X-axis and ty on the Y-axis, and the unit is px. |-|
|translateX|tx|	在X轴偏移tx，单位px|-|
|translateX|tx| Offset tx on the X axis, in px|-|
|translateY|ty|	在Y轴偏移tx，单位px|-|
|translateY|ty| Offset tx on the Y axis, in px|-|
|translateZ|tz|	在Z轴偏移tx，单位px|nvue不支持|
|translateZ|tz| Offset tx in Z axis, unit px|nvue does not support|
|translate3d|tx,ty,tz|	在X轴偏移tx，在Y轴偏移ty，在Z轴偏移tz，单位px|nvue不支持|
|translate3d|tx,ty,tz| Offset tx on the X axis, ty on the Y axis, tz on the Z axis, the unit is px|nvue does not support|

```javascript
this.$refs.ani.step({
	translateX: '100px'
})
```


## 示例
## example
::: warning 注意
::: warning attention
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。
The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-transition) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-transition) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.
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
[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/transition/transition)