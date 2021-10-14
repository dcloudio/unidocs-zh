
#### The supported styles is listed below, and some component may support custom style, which you can check in the component's doc. Except for this, other styles are not supported.


### Notes

- nvue的css**仅支持flex布局**，是webview的css语法的子集。这是因为操作系统原生排版不支持非flex之外的web布局。当然flex足以排布出各种页面，只是写法需要适应。
- class 进行绑定时只支持数组语法。
- 不支持媒体查询
- 不能在 style 中引入字体文件
- 不能使用百分比布局，如`width：100%`
- 不支持在css里写背景图`background-image`，但可以使用image组件和层级来实现类似web中的背景效果。因为原生开发本身也没有web这种背景图概念
- 使用`image`标签，支持使用base64
- nvue 的各组件在安卓端默认是透明的，如果不设置`background-color`，可能会导致出现重影的问题
- 文字内容，必须只能在`text`组件下，`text`组件不能换行写内容，否则会出现无法去除的周边空白
- 只有`text`标签可以设置字体大小，字体颜色


**HBuilderX 3.1.0+ 开始支持更多简写样式**
- `border`
- `border-top`
- `border-right`
- `border-bottom`
- `border-left`
- `border-style`
- `border-width`
- `border-color`
- `border-radius`
- `flex-flow`
- `background`


**HBuilderX 3.1.0+ 开始支持新的样式编译模式**
- 新增 `nvueStyleCompiler` 配置，支持组合选择器（相邻兄弟选择器、普通兄弟选择器、子选择器、后代选择器）。[详见](https://ask.dcloud.net.cn/article/38751)


- nvue的```uni-app```编译模式下，App.vue 中的样式，会编译到每个 nvue文件。对于共享样式，如果有不合法属性控制台会给出警告，可以通过[条件编译](https://uniapp.dcloud.io/platform)```APP-NVUE```屏蔽 App 中的警告。


## 盒模型

Weex box model based on the CSS box model, all of weex elements can be considered as boxes.

The term "box model" is used when talking about design and layout. The box model is essentially a box that wraps around every HTML element. It consists of margins, borders, paddings, and the actual content.

![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/ec4f2810-2fec-11eb-899d-733ae62bed2f.png)


> Weex only supports `box-sizing:border-box`, in which box size includes `content`, `padding` and `border-width` and excludes `margin`.

> On Android, Weex only supports `overflow:hidden`.

> On iOS, Weex supports `overflow:hidden` and `overflow:visible` and by default, it is `overflow:visible`.




##### basic usage
```html
	<template>
		<view>
			<image style="width: 400rpx; height: 200rpx; margin-left: 20rpx;" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/9c877c50-2f0c-11eb-899d-733ae62bed2f.png"></image>
		</view>
	</template>
```



|Property			|Describe									|
|--				|--										|
|width {length}	|width, default value 0							|
|height {length}|height, default value 0							|

##### padding
`padding` specifies the space between element content and the element border. One can use shorthand for four edges or specify the padding for one edge:

|Property					|Describe								|
|--						|--									|
|padding {length}		|padding for four edges, default value 0	|
|padding-left {length}	|default value 0					|
|padding-right {length}	|default value 0					|
|padding-top {length}	|default value 0				|
|padding-bottom {length}|default value 0				|


##### border
The `border-style` CSS property is a shorthand property that sets the line style for all four sides of an element's border. One can use shorthand for four edges or specify the style for one edge:

|Property	|Describe					|
|--		|--						|
|border-left-style {string}		|values `solid` / `dashed` / `dotted`, default value `solid`|
|border-top-style {string}		|values `solid` / `dashed` / `dotted`, default value `solid`|
|border-right-style {string}	|values `solid` / `dashed` / `dotted`, default value `solid`|
|border-bottom-style {string}	|values `solid` / `dashed` / `dotted`, default value `solid`|



|Property	|Describe					|
|--		|--						|
|solid	|实线边框，默认值 ```solid```	|
|dashed	|方形虚线边框			|
|dotted	|圆点虚线边框			|


##### border-width
The border-width shorthand CSS property sets the widths of all four sides of an element's border. One can use shorthand for four edges or specify the width for one edge:

|Property							|Describe				|
|--								|--					|
|border-width {length}			|non-negative, default value 0	|
|border-left-width {length}		|non-negative, default value 0	|
|border-top-width {length}		|non-negative, default value 0	|
|border-right-width {length}	|non-negative, default value 0	|
|border-bottom-width {length}	|non-negative, default value 0	|

##### border-color
The border-color shorthand CSS property sets the color of all sides of an element's border. One can use shorthand for four edges or specify the color for one edge:


|Property						|Describe					|
|--							|--						|
|border-color {color}		|default value #000000	|
|border-left-color {color}	|default value #000000	|
|border-top-color {color}	|default value #000000	|
|border-right-color {color}	|default value #000000	|
|border-bottom-color {color}|default value #000000	|

##### border-radius
border-radius property rounds the corners of an element's outer border edge. One can use shorthand for four corners or specify the radius for one corner:

|Property								|Describe				|
|--									|--					|
|border-radius {length}				|default value 0 which means the corner is a right angle.	|
|border-bottom-left-radius {length}	|non-negative, default value 0	|
|border-bottom-right-radius {length}|non-negative, default value 0	|
|border-top-left-radius {length}	|non-negative, default value 0	|
|border-top-right-radius {length}	|non-negative, default value 0	|

> `border-radius` defines the radius of a quarter ellipse that defines the shape of the corner of the outer border edge by definition, but weex may not render as expected if you need a smooth transition between different `border-radius` or `border-width` on adjoining sides.


##### margin
margin specifies the space around elements which is outside the border. One can use shorthand for four edges or specify the margin for one edge:

|Property					|Describe								|
|--						|--									|
|margin {length}		|margin for four edges, default value 0	|
|margin-left {length}	|margin for left edge, default value 0					|
|margin-right {length}	|margin for left edge, default value 0					|
|margin-top {length}	|margin for left edge, default value 0					|
|margin-bottom {length}	|margin for bottom edge, default value 0					|




##### Only for Android

Although `overflow:hidden` is default on Android, a view will not clip its children according to `border-radius` unless all the following conditions meet.

- The view type is `div`, `a`, `cell`, `refresh` or `loading`.
- OS version is Android 4.3 or higher.
- OS version is not Android 7.0
- A view does not have `background-image` property nor OS version is Android 5.0 or higher.




## Flexbox


### Flexbox
Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

Weex box style model based on the CSS flexbox, ensures that elements behave predictably and the page layout can accommodates to different screen sizes and different display devices.

> Only styles listed below is supported, other style like `order` and `flex-flow` are not supported.

**Flexbox is the default and only style model in Weex, so you don't have to add display: flex; in a container.**


### flex-direction
	
The flex-direction CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).

|Property			|Describe								|
|--				|--									|
|column			|The flex container's main-axis is vertical. The main-start and main-end points is top and bottom.				|
|column-reverse	|Behaves the same as column but the main-start and main-end are permuted.|
|row			|The flex container's main-axis is horizontal and defined to be the same as direction. The main-start and main-end points are the same as the direction.					|
|row-reverse	|Behaves the same as row but the main-start and main-end points are permuted	|



### flex-wrap
	
The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. The default value is nowrap

|Property			|Describe												|
|--				|--													|
|nowrap			| The flex items are laid out in a single line which may cause the flex container to overflow. The cross-start is either equivalent to start or before depending flex-direction value. This is the default value.	|
|wrap			| The flex items break into multiple lines. The cross-start is either equivalent to start or before depending flex-direction value and the cross-end is the opposite of the specified cross-start.	|
|wrap-reverse	|Behaves the same as wrap but cross-start and cross-end are permuted.						|



### justify-content
	
The CSS justify-content property defines how Weex distributes space between and around content items along the main-axis of a flex container. The default value is `flex-start`.

|Property			|Describe										|
|--				|--											|
|flex-start		|The items are packed flush to each other toward the edge of the alignment container depending on the flex container's main-start side.	|
|flex-end		|The items are packed flush to each other toward the edge of the alignment container depending on the flex container's main-end side.			|
|center			|The items are packed flush to each other toward the center of the alignment container along the main axis.		|
|space-between	|The items are evenly distributed within the alignment container along the main axis. The spacing between each pair of adjacent items is the same. The first item is flush with the main-start edge, and the last item is flush with the main-end edge.	|
|space-around	|表示 flex 成员项两侧的间隔相等，所以，成员项之间的间隔比成员项与边框的间隔大一倍	|


![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/9610d190-2f17-11eb-97b7-0dc4655d6e68.png)



	
### align-items
	
The CSS align-items property sets the align-self value on all direct children as a group. It controls the alignment of items on the cross Axis. The default value is `stretch`.

|Property		|Describe								|
|--			|--									|
|stretch	|Flex items are stretched such that the cross-size of the item's margin box is the same as the line while respecting width and height constraints.			|
|flex-start	|The cross-start margin edges of the flex items are flushed with the cross-start edge of the line.	|
|flex-end	|The cross-end margin edges of the flex items are flushed with the cross-end edge of the line.	|
|center		|The flex items' margin boxes are centered within the line on the cross-axis.	|

![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/ad305030-2f17-11eb-b680-7980c8a877b8.png)

### flex
	
The flex property specifies the length of the flex item, relative to the rest of the flex items inside the same container.

If all of the flex items set flex: 1, they will have equal width or height on direction of flex container's flex-direction. If there are two flex items, with one setting flex: 1, and the other setting flex: 2, the first one will take 1/3 container space, and the second one will take 2/3 container space. If all of flex items don't set flex, they will be aligned depending on the container's justify-content property.

The following code snippet show three div with the same height

**Notes**
	
**Flex 成员项暂不支持 ```flex-shrink``` 、 ```flex-basis```、```align-content``` 属性**。

**该属性不支持 flex: flex-grow | flex-shrink | flex-basis 的简写。**


``` html
	//Gird布局
	<template>
		<view>
			<view v-for="(v, i) in list" class="row">
				<view v-for="(text, k) in v" class="item">
					<view>
						<text>{{text}}</text>
					</view>
				</view>
			</view>
		</view>
	</template>
	<script>
		export default {
			data() {
				return {
					list: [
						['A', 'B', 'C'],
						['D', 'E', 'F'],
						['G', 'H', 'I']
					]
				}
			}
		}
	</script>
	<style scoped>
	.row {
		flex-direction: row;
		height: 80px;
	}
	.item {
		flex: 1;
		justify-content: center;
		align-items: center;
		border-width: 1;
		border-style: solid;
		border-color: #FFFFFF;
		background-color: #00AAFF;
	}
	</style>
```



``` html
	//等高模块
	<template>
	  <view>
	    <view style="width:300px; height:100px;">
	      <view style="flex: 1;background-color:blue"></view>
	      <view style="flex: 1;background-color:red"></view>
	      <view style="flex: 1;background-color:yellow"></view>
	    </view>
	  </view>
	</template>
```




## position 定位

设置定位类型。默认值为 ```relative```。

|Property		|Describe													|
|--			|--														|
|relative	|是默认值，指的是相对定位									|
|absolute	|绝对定位，以元素的容器作为参考系						|
|fixed		|固定定位，保证元素在页面窗口中的对应位置显示，即使窗口是滚动的它也不会移动						|
|sticky		|指的是仅当元素滚动到页面之外时，元素会固定在页面窗口的顶部，达到吸顶效果/粘性定位（布局）	|

> 运用 position:sticky或position: fixed 可实现头部导航栏固定(吸顶效果)


``` html
	//水平垂直居中
	<template>
		<view class="wrapper">
			<view class="box"></view>
		</view>
	</template>
	<style scoped>
		.wrapper{
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-color: #cccccc;
			justify-content: center;
			align-items: center;
		}
		.box{
			width: 200px;
			height: 200px;
			background-color: #fc0000;
		}
	</style>
```





> Only for Android

If your component is bigger than its parent, it will be partial invisible as Weex on Android only supports `overflow:hidden`.


## Transition 

Now you can use the transition attribute in CSS to enhance the interactivity and visual experience of your application. The transition includes the layout animation, that is, LayoutAnimation, which now changes the layout and uses the fluent animation of the transition. Transition allows the CSS attribute values to transition smoothly over a certain time interval.
#### transition-property
Allows the name of the transitional animation to set the value of the different styles transition effect, the default value is empty, that does not perform any transition, the following table lists all the legitimate parameters of the property:


|Property				|Describe				|
|--					|--					|
|width				|The transition is performed when the width of the component is involved in the animation		|
|height				|The transition is performed when the height of the component is involved in the animation		|
|top				|The transition is performed when the top of the component is involved in the animation	|
|bottom				|The transition is performed when the bottom of the component is involved in the animation	|
|left				|The transition is performed when the left of the component is involved in the animation	|
|right				|The transition is performed when the right of the component is involved in the animation	|
|background-color	|The transition is performed when the backgroundColor of the component is involved in the animation	|
|opacity			|The transition is performed when the opacity of the component is involved in the animation	|
|transform			|The transition is performed when the transform of the component is involved in the animation	|




#### transition-duration
Specifies the duration of the transition transition (in milliseconds). The default value is 0, indicating that there is no animation.

#### transition-delay
Specifies the time interval (in milliseconds or seconds) between the request transition transition and the transition transition. The default value is 0, indicating that there is no delay, and the transition transition is performed immediately after the request.

#### transition-timing-function
Describes the velocity curve of the transition transition, which is used to make the transition transition smoother. The default is ease. The following table lists all the valid attributes:


|Property							|Describe																																			|
|--								|--																																				|
|ease							|The transition gradually slow down the transition effect																												|
|ease-in						|The transition starts slowly and then becomes faster for the transition effect |
|ease-out						|The transition starts quickly and then slows the transition effect|
|ease-in-out					|The transition starts slowly, then goes fast and then slowly ends the transition effect|
|linear							|The transition changes at constant speed|
|cubic-bezier(x1, y1, x2, y2)	|Using the custom transition in the third-order Bessel function, the parameter values of the function must be between 0 and 1. For more information on three times Bessel, see [cubic-bezier](http://cubic-bezier.com/) and [Bézier curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve).	|


	
#### Example


``` html
<template>
	<view class="row">
		<view class="box" :class="{'active':isActive}" @click="isActive = !isActive">
			<image class="img" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/9c877c50-2f0c-11eb-899d-733ae62bed2f.png" mode="aspectFill"></image>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				"isActive":false
			}
		}
	}
</script>
<style scoped>
	.row{
		align-items: center;
		justify-content: center;
	}
	.box{
		margin:20px;
		align-items: center;
		justify-content: center;
		border-radius: 10px;
		width:200rpx;
		height:200rpx;
		background-color: #007AFF;
		transition-property: width, height, background-color;
		transition-duration:0.3s;
		transition-delay:0.1s;
		transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1.0);
	}
	.active{
		width:300rpx;
		height:300rpx;
		background-color: #6bd8ff;
	}
	.img{
		width:80rpx;
		height:80rpx;
	}
</style>
```

<img width="300px" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/0d2fc7a0-3089-11eb-8ff1-d5dcf8779628.gif" />

## Transform

应用于元素的2D或3D转换。这个属性允许你将元素旋转，缩放，移动，倾斜等。


|Property							|Describe																																			|
|--								|--																																				|
|`translateX({<length/percentage>})`	|X 轴方向平移，支持长度单位或百分比。																												|
|`translateY({<length/percentage>})`	|Y 轴方向平移，支持长度单位或百分比。																	|
|`translate({<length/percentage>} {<length/percentage>})`	|X 轴和 Y 轴方向同时平移，```translateX``` + ```translateY``` 简写。									|
|`scaleX(<number>)`				|X 轴方向缩放，值为数值，表示缩放比例，不支持百分比。							|
|`scaleY(<number>)`						|Y 轴方向缩放，值为数值，表示缩放比例，不支持百分比。																													|
|`scale(<number>)`|X 轴和 Y 轴方向同时缩放，```scaleX``` + ```scaleY``` 简写。|
|`rotate(<angle/degree>)`|将元素围绕一个定点（由 ```transform-origin``` 属性指定）旋转而不变形的转换。指定的角度定义了旋转的量度。若角度为正，则顺时针方向旋转，否则逆时针方向旋转。|
|`rotateX(<angle/degree>)`|X 轴方向的旋转。|
|`rotateY(<angle/degree>)`|Y 轴方向的旋转。|
|`rotateZ(<angle/degree>)`|Z 轴方向的旋转。|
|`perspective(<length>)`|指定了观察者与 z=0 平面的距离，使具有三维位置变换的元素产生透视效果。z>0 的三维元素比正常大，而 z<0 时则比正常小，大小程度由该属性的值决定。Android 4.1及以上版本支持。|
|`transform-origin {length/percentage/关键字(top/left/right/bottom)}:`|设置一个元素变形的原点，仅支持 2D 坐标。|

> Consider use `transition` instead, which supports all the style that `transform` supports except for `transform-origin` and `perspective`
`rotate` is the same as `rotateZ`.


	
#### Example


``` html
<template>
	<view class="card">
		<view class="box">
			<view class="row-box">
				<view @click="isRotate = !isRotate" class="fill row-rotate " :class="{'rotate':isRotate}"></view>
			</view>
			<text>rotate(45deg) </text>
		</view>
		<view class="box">
			<view class="row-box">
				<view @click="isScale = !isScale" class="fill row-scale" :class="{'scale':isScale}"></view>
			</view>
			<text>scale(2)</text>
		</view>
		<view class="box">
			<view class="row-box">
				<view @click="isTranslateX = !isTranslateX" class="fill row-translateX" :class="{'translateX':isTranslateX}"></view>
			</view>
			<text>translateX(45px)</text>
		</view>
		<view class="box">
			<view class="row-box">
				<view @click="isTranslateY = !isTranslateY" class="fill row-translateY" :class="{'translateY':isTranslateY}"></view>
			</view>
			<text>translateY(45px)</text>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				"isRotate": false,
				"isScale":false,
				"isTranslateX":false,
				"isTranslateY":false
			}
		},
	}
</script>
<style>
	.card {
		width:710rpx;
		margin:20rpx;
		flex-direction:row;
		flex-wrap: wrap;
	}
	.box{
		width:355rpx;
		height:355rpx;
		justify-content: center;
		align-items: center;
	}
	.row-box{
		width:200rpx;
		height:200rpx;
		margin:10rpx;
		background-color: #DDDDDD;
	}
	.fill{
		width:200rpx;
		height:200rpx;
		position: relative;
		background-color: #03A9F4;
		opacity: 0.5;
	}
	.row-rotate{
		transition-duration:0.3s;
		transform:rotate(0deg);
	}
	.rotate{
		transition-duration:0.3s;
		transform:rotate(45deg);
	}
	.row-scale{
		transition-duration:0.3s;
		transform:scale(1);
	}
	.scale{
		transform:scale(2);
	}
	.row-translateX{
		transition-duration:0.3s;
		transform:translateX(0px);
	}
	.translateX{
		transform:translateX(45px);
	}
	.row-translateY{
		transition-duration:0.3s;
		transform:translateY(0px);
	}
	.translateY{
		transform:translateY(45px);
	}
</style>
```





<img width="300px" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/810e5de0-3088-11eb-b997-9918a5dda011.gif" />


## Pseudo class


|Property		|Describe								|
|--			|--									|
|active		|所有组件都支持						|
|focus		|只有 ```input``` 组件和 ```textarea``` 组件支持|
|disabled	|只有 ```input``` 组件和 ```textarea``` 组件支持|
|enabled	|只有 ```input``` 组件和 ```textarea``` 组件支持|

**Notes**
> the high priority override low priority when rules take effect at the same time.
> such as: "input:active:enabled" will override "input:active".

- the interconnection rule as follow

<img width="400px" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/f3069420-2f17-11eb-8a36-ebb87efcf8c0.png" />


## Linear-gradient 

Weex support linear-gradient background, You can see [W3C description of the gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients).
You can use linear gradient by `background-image` property.
``` javascript
	background-image:linear-gradient(to bottom right,#AD18F9,#05DFC7);
```

Weex currently supports two color gradients. The direction of the gradient is as follows:

|Value		|Describe				|
|--				|--					|
|to right		|From left to right		|
|to left		|From right to left		|
|to bottom		| From top to bottom		|
|to top			|From bottom to top		|
|to bottom right|From the upper left corner to the lower right corner	|
|to top left	|From the lower right corner to the upper left corner	|

**Notes**

> `background-image` and `background-color` are set at the same time, `background-image` precedes `background-color`.
> Do not use shorthand property such as `background`.
> 
> **`radial-gradient` is not currently supported, do not use it.**


<img width="300px" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/8f70e4e0-308b-11eb-97b7-0dc4655d6e68.PNG" />


## Box-shadow@boxshadow

### Weex supports box-shadow in iOS： inset,offset-x,offset-y, blur-radius,color

	
	{box-shadow:inset offset-x offset-y blur-radius color}


|Property			|Describe																										|
|--				|--																											|
|inset（可选）	|默认阴影在边框外。使用 ```inset``` 后，阴影在边框内（即使是透明边框），背景之上内容之下。						|
|offset-x		|设置水平偏移量，如果是负值则阴影位于元素左边。																|
|offset-y		|设置垂直偏移量，如果是负值则阴影位于元素上面。																|
|blur-radius	|设置模糊半径，px 单位长度值，值越大，模糊面积越大，阴影就越大越淡。不能为负值。默认为0，此时阴影边缘锐利。	|
|color			|设置阴影颜色																								|

Example
``` css
	.box4 {
	    box-shadow: inset 3px 5px 20px rgb(255, 69, 0);
	}
```

**Notes**
- 目前仅 iOS 支持 ```box-shadow``` 属性，Android 暂不支持，可以使用```elevation```或者图片代替。
- 每个元素只支持设置一个阴影效果，不支持多个阴影同时作用于一个元素。





### Android平台：阴影```elevation```@android-box-shadow

Android平台weex对阴影样式(box-shadow)支持不完善，如设置圆角边框时阴影样式显示不正常、设置动画时在Android7上显示不正常、在Android10上出现闪烁现象等。

为解决这些问题，从HBuilderX 2.4.7起，新增elevation属性（**组件的属性，不是css样式**）设置组件的层级，Number类型，层级值越大阴影越明显，阴影效果也与组件位置有关，越靠近页面底部阴影效果越明显


	
用法
``` html
	<view elevation="5px"></view>
```


#### Notes
- 设置```elevation```属性产生的阴影暂时无法修改颜色
- 设置```elevation```后当前组件的层级会高于其他未设置elevation组件的层级，都设置```elevation```值域越大则层级越高！组件覆盖的场景需要留意
- 为了避免```elevation```属性的阴影效果与阴影样式(```box-shadow```)冲突，设置```elevation```属性后```box-shadow```样式失效
- 使用```elevation```需要阴影元素的父元素大于阴影范围，否则会对阴影进行裁剪
- IOS不支持```elevation```属性，请使用```box-shadow```设置阴影



## 文本样式

### color
`color`: &lt;colors&gt; this property set the foreground color of an component's text content.. The property color support multiple formats of values.
 * RGB（ rgb(255, 0, 0) ） 
 * RGBA（ rgba(255, 0, 0, 0.5) ） 
 * 十六进制（ #ff0000 ）；
 * 精简写法的十六进制（ #f00 ）
 * 色值关键字（red）

> 只有```text```标签可以设置字体颜色

### font-size
`font-size`: &lt;length&gt; this property specifies the size of the font.

### font-style
`font-style`: &lt;enum&gt; `normal` | `italic`. This property lets you select italic or normal faces within a font-family. Default value is `normal`.

### font-weight
This property indicate the weight of the text.

- values: `normal`, `bold`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`
- normal is equal to 400, bold equel to 700
- ios support showing 9 kind of font-weight.android support showing 2 kind of font-weight:400,700, other value will map to 400 or 700.
- Some standard values like `lighter`, `bolder`, number unit are not supported.

### text-decoration
`text-decoration`: &lt;enum&gt; `none` | `underline` | `line-through`. This property is used to set the text formatting to underline or line-through. The default value is `none`.

|Property			|Describe						|
|--				|--							|
|none			|默认。定义标准的文本		|
|underline		|定义文本下的一条线		|
|line-through	|定义穿过文本下的一条线	|


> Only support for `<text>` and `<ricthext>`
> 
> 不支持 ```text-decoration:overline```


### text-align
`text-align`: &lt;enum&gt; `left` | `center` | `right`. This property describes how inline content like text is aligned in its parent component. The default value is `left`.

|Property	|Describe				|
|--		|--					|
|left	|把文本排列到左边	|
|center	|把文本排列到中间	|
|right	|把文本排列到右边|

> 不支持```text-align:justify```


### font-family
`font-family`:&lt;string&gt; this property set the font-family of the text. This property **doesn't guarantee** the given font will always be set to the text. If the specified font cannot be found at the device, a typeface fallback will occur and the default typeface will be load. The fallback mechanism may vary in different devices. If you want load your own font-family, ref [dom.addRule](/nvue-api?id=addrule) instead.

### text-overflow
`text-overflow`:&lt;enum&gt; `clip` | `ellipsis`. This property determines how overflowed content that is not displayed is signaled to users. It can be clipped, display an ellipsis.

|Property		|Describe							|
|--			|--								|
|clip		|修剪文本						|
|ellipsis	|显示省略符号来代表被修剪的文本	|
> Only support for `<text>` and `<ricthext>`

### lines
`lines`: &lt;number&gt; positive number. This is the max lines of text that would be displayed, the default value is 0 which means there is no restriction on text lines. If the text is not enough, the actual number of line may be shorter than the specified value.

### line-height
`line-height`: &lt;length&gt; The line height of every line in the text. `line-height` is the space between top and bottom.`line-height` There is no relationship between `line-height` and `font-size`, as `line-height` is restricted by top and bottom, `font-size` is interpreted by glyph. Usually but not always, `line-height` and `font-size` with the same value will cause the text clipped.

### word-wrap
`word-wrap`:&lt;string&gt; `break-word` | `normal` | `anywhere`. This property determins word wrap mode. For Weex, `anywhere` means clipping at character boundaries, other values or by default we break at word boundaries.

|Property		|Describe								|
|--			|--									|
|break-word	|在长单词或 URL 地址内部进行换行	|
|normal		|只在允许的断字点换行				|
|anywhere	|以字符为最小元素做截断换行	|


