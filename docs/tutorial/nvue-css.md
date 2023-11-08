
#### nvue所支持的通用样式已在本文档中全部列出，一些组件可能有自定义样式，请参考组件文档。除此之外的属性，均不被支持。
#### The supported styles is listed below, and some component may support custom style, which you can check in the component's doc. Except for this, other styles are not supported.


### 注意事项
### Notes

- nvue的css**仅支持flex布局**，是webview的css语法的子集。这是因为操作系统原生排版不支持非flex之外的web布局。当然flex足以排布出各种页面，只是写法需要适应。
- nvue's css **only supports flex layout**, which is a subset of webview's css syntax. This is because the native layout of the operating system does not support web layouts other than flex. Of course, flex is enough to lay out all kinds of pages, but the writing needs to adapt.
- class 进行绑定时只支持数组语法。
- Only array syntax is supported when binding class.
- 不支持媒体查询
- Media queries are not supported
- 不能在 style 中引入字体文件
- Font files cannot be introduced into style
- 不能使用百分比布局，如`width：100%`
- Percentage layout, such as `width：100%`, cannot be used
- 不支持在css里写背景图`background-image`，但可以使用image组件和层级来实现类似web中的背景效果。因为原生开发本身也没有web这种背景图概念
- Writing background pictures `background-image` in css is not supported, but image components and layers can be used to achieve background effects similar to those in the web. Because in native development, there is no such concept of background map like web.
- 使用`image`标签，支持使用base64，不支持svg格式图片
- Use the `image` tag, support the use of base64, but not svg format images
- nvue 的各组件在安卓端默认是透明的，如果不设置`background-color`，可能会导致出现重影的问题
- Each component of nvue is transparent by default on Android. If `background-color` is not set, it may cause ghosting problems
- 文字内容，必须只能在`text`组件下，`text`组件不能换行写内容，否则会出现无法去除的周边空白
- The text content must only be under the `text` component. In the `text` component, the content cannot be written in a new line, or otherwise there will be irremovable peripheral margins.
- 只有`text`标签可以设置字体大小，字体颜色
- 不支持 `/deep/`


**HBuilderX 3.1.0+ 开始支持更多简写样式**
**From HBuilderX 3.1.0+, more abbreviated styles are supported**
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
**From HBuilderX 3.1.0+, new style compilation mode is supported**
- 新增 `nvueStyleCompiler` 配置，支持组合选择器（相邻兄弟选择器、普通兄弟选择器、子选择器、后代选择器）。[详见](https://ask.dcloud.net.cn/article/38751)
- The newly added `nvueStyleCompiler` configuration supports combined selectors (adjacent brother selector, normal brother selector, child selector, descendant selector). [See details](https://ask.dcloud.net.cn/article/38751)


- nvue的```uni-app```编译模式下，App.vue 中的样式，会编译到每个 nvue文件。对于共享样式，如果有不合法属性控制台会给出警告，可以通过[条件编译](https://uniapp.dcloud.io/tutorial/platform#preprocessor)```APP-PLUS-NVUE```屏蔽 App 中的警告。
- In the ``uni-app`` compilation mode of nvue, the styles in App.vue will be compiled into each nvue file. For shared styles, if there are illegal attributes, the console will give a warning, you can use [conditional compilation](https://uniapp.dcloud.io/tutorial/platform#preprocessor)```APP-PLUS-NVUE``` Suppress warnings in apps.


## 盒模型
## Box model

nvue盒模型基于 CSS 盒模型，每个 nvue 元素都可视作一个盒子。我们一般在讨论设计或布局时，会提到「盒模型」这个概念。
Weex box model based on the CSS box model, all of weex elements can be considered as boxes.

盒模型描述了一个元素所占用的空间。每一个盒子有四条边界：外边距边界 `margin edge`, 边框边界 `border edge`, 内边距边界 `padding edge` 与内容边界 `content edge`。这四层边界，形成一层层的盒子包裹起来，这就是盒模型大体上的含义。
The term "box model" is used when talking about design and layout. The box model is essentially a box that wraps around every HTML element. It consists of margins, borders, paddings, and the actual content.

![图片描述文字](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/flexBox.png)


> nvue盒模型的 `box-sizing` 默认为 `border-box`，即盒子的宽高包含内容、内边距和边框的宽度，不包含外边距的宽度。
> Weex only supports `box-sizing:border-box`, in which box size includes `content`, `padding` and `border-width` and excludes `margin`.

> 在 Android 平台，nvue只支持 `overflow:hidden`。
> On Android, Weex only supports `overflow:hidden`.

> 在 iOS 上，nvue支持 `overflow:hidden` 和 `overflow:visible`，默认是 `overflow:visible`。
> On iOS, Weex supports `overflow:hidden` and `overflow:visible` and by default, it is `overflow:visible`.




##### 基本用法
##### basic usage
```html
	<template>
		<view>
			<image style="width: 400rpx; height: 200rpx; margin-left: 20rpx;" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/loveIcon.png"></image>
		</view>
	</template>
```



|可选值			|描述									|
| Property| Describe|
|--				|--										|
|width {length}	|宽度，默认值 0							|
| width {length}| width, default value 0|
|height {length}|高度，默认值 0							|
| height {length}| height, default value 0|

##### 内边距
##### padding
padding {length}：内边距，内容和边框之间的距离，默认值 0。与标准 CSS 类似，padding 支持简写，也可分解为以下四个：
`padding` specifies the space between element content and the element border. One can use shorthand for four edges or specify the padding for one edge:

|可选值					|描述								|
| Property| Describe|
|--						|--									|
|padding {length}		|上、右、下、左四边内边距，默认值 0	|
| padding {length}| padding for four edges, default value 0|
|padding-left {length}	|左内边距，默认值 0					|
| padding-left {length}| default value 0|
|padding-right {length}	|右内边距，默认值 0					|
| padding-right {length}| default value 0|
|padding-top {length}	|上内边距，默认值 0					|
| padding-top {length}| default value 0|
|padding-bottom {length}|下内边距，默认值 0					|
| padding-bottom {length}| default value 0|


##### 边框
##### border
```border-style``` 设定边框样式，如果四个方向的边框样式不同，可分别设置：
```border-style``` Set the border style. If the border styles in the four directions are different, you can set them separately:

|可选值	|描述					|
| Property| Describe|
|--		|--						|
|border-left-style {string}		|可选值为 ```solid```， ```dashed```， ```dotted```，默认值 ```solid```	|
| border-left-style {string}| values `solid` / `dashed` / `dotted`, default value `solid`|
|border-top-style {string}		|可选值为 ```solid```， ```dashed```， ```dotted```，默认值 ```solid```	|
| border-top-style {string}| values `solid` / `dashed` / `dotted`, default value `solid`|
|border-right-style {string}	|可选值为 ```solid```， ```dashed```， ```dotted```，默认值 ```solid```	|
| border-right-style {string}| values `solid` / `dashed` / `dotted`, default value `solid`|
|border-bottom-style {string}	|可选值为 ```solid```， ```dashed```， ```dotted```，默认值 ```solid```	|
| border-bottom-style {string}| values `solid` / `dashed` / `dotted`, default value `solid`|



|可选值	|描述					|
| Property| Describe|
|--		|--						|
|solid	|实线边框，默认值 ```solid```	|
| solid| The default value of the solid border is `solid`|
|dashed	|方形虚线边框			|
| dashed| Square dashed border|
|dotted	|圆点虚线边框			|
| dotted| Dotted dashed border|


##### border-width
```border-width```：设定边框宽度，非负值, 默认值 0，如果四个方向的边框宽度不同，可分别设置：
```border-width```: Set the border width, non-negative value, the default value is 0, if the border widths in the four directions are different, you can set them separately:

|可选值							|描述				|
| Property| Describe|
|--								|--					|
|border-width {length}			|非负值, 默认值 0	|
| border-width {length}| non-negative, default value 0|
|border-left-width {length}		|非负值, 默认值 0	|
| border-left-width {length}| non-negative, default value 0|
|border-top-width {length}		|非负值, 默认值 0	|
| border-top-width {length}| non-negative, default value 0|
|border-right-width {length}	|非负值, 默认值 0	|
| border-right-width {length}| non-negative, default value 0|
|border-bottom-width {length}	|非负值, 默认值 0	|
| border-bottom-width {length}| non-negative, default value 0|

##### border-color
```border-color```：设定边框颜色，默认值 ```#000000```，如果四个方向的边框颜色不同，可分别设置：
````border-color```: Set the border color, the default value is ```#000000```, if the border colors in the four directions are different, you can set them separately:


|可选值						|描述					|
| Property| Describe|
|--							|--						|
|border-color {color}		|默认值 ```#000000```	|
| border-color {color}| default value #000000|
|border-left-color {color}	|默认值 ```#000000```	|
| border-left-color {color}| default value #000000|
|border-top-color {color}	|默认值 ```#000000```	|
| border-top-color {color}| default value #000000|
|border-right-color {color}	|默认值 ```#000000```	|
| border-right-color {color}| default value #000000|
|border-bottom-color {color}|默认值 ```#000000```	|
| border-bottom-color {color}| default value #000000|

##### border-radius
```border-radius```：设置边框的圆角，默认值 0，如果四个方向的圆角弧度不同，可分别设置：
```border-radius```: Set the rounded corners of the border, the default value is 0. If the rounded corners in the four directions are different, you can set them separately:

|可选值								|描述				|
| Property| Describe|
|--									|--					|
|border-radius {length}				|非负值, 默认值 0	|
| border-radius {length}| default value 0 which means the corner is a right angle.|
|border-bottom-left-radius {length}	|非负值, 默认值 0	|
| border-bottom-left-radius {length}| non-negative, default value 0|
|border-bottom-right-radius {length}|非负值, 默认值 0	|
| border-bottom-right-radius {length}| non-negative, default value 0|
|border-top-left-radius {length}	|非负值, 默认值 0	|
| border-top-left-radius {length}| non-negative, default value 0|
|border-top-right-radius {length}	|非负值, 默认值 0	|
| border-top-right-radius {length}| non-negative, default value 0|

> ```border-radius```和```border-width```定义了圆心角为90度的椭圆弧的长轴和半长轴的大小。如果邻接两边```border-radius``` 或 ```border-width```不一致，nvue绘制的边框曲线可能不够平滑。


##### 外边距
##### margin
margin {length}：外边距，元素和元素之间的空白距离，默认值 0。与标准 CSS 类似，margin 支持简写，也可分解为四边：
margin specifies the space around elements which is outside the border. One can use shorthand for four edges or specify the margin for one edge:

|可选值					|描述								|
| Property| Describe|
|--						|--									|
|margin {length}		|上、右、下、左四边外边距，默认值 0	|
| margin {length}| margin for four edges, default value 0|
|margin-left {length}	|左外边距，默认值 0					|
| margin-left {length}| margin for left edge, default value 0|
|margin-right {length}	|右外边距，默认值 0					|
| margin-right {length}| margin for left edge, default value 0|
|margin-top {length}	|上外边距，默认值 0					|
| margin-top {length}| margin for left edge, default value 0|
|margin-bottom {length}	|下外边距，默认值 0					|
| margin-bottom {length}| margin for bottom edge, default value 0|




##### Android 兼容性
##### Only for Android

尽管 ```overflow: hidden``` 在 Android 上是默认行为，但只有下列条件都满足时，一个父 view 才会去剪切它的子 ```view```。
Although `overflow:hidden` is default on Android, a view will not clip its children according to `border-radius` unless all the following conditions meet.

- 父view是```view```, ```cell```, ```refresh``` 或 ```loading```。
- The view type is `div`, `A`, `cell`, `refresh` or `loading`.
- 系统版本是 Android 4.3 或更高。
- OS version is Android 4.3 or higher.
- 系统版本不是 Andorid 7.0。
- OS version is not Android 7.0
- 父 view 没有 ```background-image``` 属性或系统版本是 Android 5.0 或更高。
- A view does not have `background-image` property nor OS version is Android 5.0 or higher.




## Flexbox


### Flex 容器
### Flexbox
Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。
Flex is the abbreviation of Flexible Box, meaning "flexible layout", which is used to provide maximum flexibility for box model.

nvue布局模型基于 CSS Flexbox，以便所有页面元素的排版能够一致可预测，同时页面布局能适应各种设备或者屏幕尺寸。Flexbox 包含 flex 容器和 flex 成员项。如果一个nvue元素可以容纳其他元素，那么它就成为 flex 容器。
Weex box style model based on the CSS flexbox, ensures that elements behave predictably and the page layout can accommodates to different screen sizes and different display devices.

> 文档中未说明的 flexbox 属性**均不支持**：如 ```order```、```flex-grow``` 、```flex-shrink``` 、 ```flex-basis```、```align-content```、```align-self``` 等。
> Only styles listed below is supported, other style like `order` and `flex-flow` are not supported.

**在 nvue中，Flexbox 是默认且唯一的布局模型，所以你不需要手动为元素添加 ```display: flex;``` 属性。**
**Flexbox is the default and only style model in Weex, so you don't have to add display: flex; in a container.**


### flex-direction

定义了 flex 容器中 flex 成员项的排列方向，默认值为 ```column```
The flex-direction CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).

|可选值			|描述								|
| Property| Describe|
|--				|--									|
|column			|竖排，从上到下排列					|
| column| The flex container's main-axis is vertical. The main-start and main-end points is top and bottom.|
|column-reverse	|反向竖排，排布方向与```flex-direction:column```相反|
| column-reverse| Behaves the same as column but the main-start and main-end are permuted.|
|row			|横排，从左到右排布						|
| row| The flex container's main-axis is horizontal and defined to be the same as direction. The main-start and main-end points are the same as the direction.|
|row-reverse	|反向横排，排布方向与```flex-direction:row```相反	|
| row-reverse| Behaves the same as row but the main-start and main-end points are permuted|



### flex-wrap

决定了 flex 成员项在一行还是多行分布，默认值为```nowrap```
The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. The default value is nowrap

|可选值			|描述												|
| Property| Describe|
|--				|--													|
|nowrap			| 不换行，flex 成员项在一行排布，排布的开始位置由direction指定	|
| nowrap| The flex items are laid out in a single line which may cause the flex container to overflow. The cross-start is either equivalent to start or before depending flex-direction value. This is the default value.|
|wrap			| 换行，第一行在上方，flex 成员项在多行排布，排布的开始位置由direction指定	|
| wrap| The flex items break into multiple lines. The cross-start is either equivalent to start or before depending flex-direction value and the cross-end is the opposite of the specified cross-start.|
|wrap-reverse	|换行，第一行在下方，行为类似于```wrap```，排布方向与其相反						|
| wrap-reverse| Behaves the same as wrap but cross-start and cross-end are permuted.|



### justify-content

定义了 flex 容器中 flex 成员项在主轴方向上如何排列以处理空白部分。默认值为 ```flex-start```
The CSS justify-content property defines how Weex distributes space between and around content items along the main-axis of a flex container. The default value is `flex-start`.

|可选值			|描述										|
| Property| Describe|
|--				|--											|
|flex-start		|左对齐，所有的 flex 成员项都排列在容器的前部	|
| flex-start| The items are packed flush to each other toward the edge of the alignment container depending on the flex container's main-start side.|
|flex-end		|右对齐，则意味着成员项排列在容器的后部				|
| flex-end| The items are packed flush to each other toward the edge of the alignment container depending on the flex container's main-end side.|
|center			|居中，即中间对齐，成员项排列在容器中间、两边留白		|
| center| The items are packed flush to each other toward the center of the alignment container along the main axis.|
|space-between	|两端对齐，空白均匀地填充到 flex 成员项之间	|
| space-between| The items are evenly distributed within the alignment container along the main axis. The spacing between each pair of adjacent items is the same. The first item is flush with the main-start edge, and the last item is flush with the main-end edge.|
|space-around	|表示 flex 成员项两侧的间隔相等，所以，成员项之间的间隔比成员项与边框的间隔大一倍	|
| space-around| It indicates equal intervals on both sides of flex member items, so the interval between member items is twice as large as the interval between member items and borders|


![图片描述文字](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/justify-content.png)




### align-items

定义了 flex 容器中 flex 成员项在纵轴方向上如何排列以处理空白部分。默认值为 stretch。
The CSS align-items property sets the align-self value on all direct children as a group. It controls the alignment of items on the cross Axis. The default value is `stretch`.

|可选值		|描述								|
| Property| Describe|
|--			|--									|
|stretch	|即拉伸高度至 flex 容器的大小			|
| stretch| Flex items are stretched such that the cross-size of the item's margin box is the same as the line while respecting width and height constraints.|
|flex-start	|上对齐，所有的成员项排列在容器顶部	|
| flex-start| The cross-start margin edges of the flex items are flushed with the cross-start edge of the line.|
|flex-end	|下对齐，所有的成员项排列在容器底部	|
| flex-end| The cross-end margin edges of the flex items are flushed with the cross-end edge of the line.|
|center		|中间对齐，所有成员项都垂直地居中显示	|
| center| The flex items' margin boxes are centered within the line on the cross-axis.|

![图片描述文字](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/align-items.png)

### flex

flex 属性定义了 flex 成员项可以占用容器中剩余空间的大小。
The flex property specifies the length of the flex item, 
flex {number}：值为 number 类型。
relative to the rest of the flex items inside the same container.
- 如果所有的成员项设置相同的值 flex: 1，它们将平均分配剩余空间。
- If all of the flex items set flex: 1, they will have equal width or height on direction of flex container's flex-direction.
- 经常用作自适应布局，将父容器的display：flex，侧边栏大小固定后，将内容区flex：1，内容区则会自动放大占满剩余空间。
- If there are two flex items, with one setting flex: 1, and the other setting flex: 2, the first one will take 1/3 container space, and the second one will take 2/3 container space.
- 如果一个成员项设置的值为 flex: 2，其它的成员项设置的值为 flex: 1，那么这个成员项所占用的剩余空间是其它成员项的 2 倍。
- If all of flex items don't set flex, they will be aligned depending on the container's justify-content property.

**注意**

**Flex 成员项暂不支持 ```flex-shrink``` 、 ```flex-basis```、```align-content``` 属性**。
**Flex member item does not support `flex-shrink`, `flex-basis`, `align-content` attributes** temporarily.

**该属性不支持 flex: flex-grow | flex-shrink | flex-basis 的简写。**
**That attribute does not support flex: Abbreviation for flex-grow | flex-shrink | flex-basis.**


``` html
	<!-- Gird布局 -->
	<!-- Grid layout -->
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
	<!-- 等高模块 -->
	<!-- Contour module -->
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
## position localization

设置定位类型。默认值为 ```relative```。
Set the positioning type. The default value is `relative`.

|可选值		|描述													|
| Property| Describe|
|--			|--														|
|relative	|是默认值，指的是相对定位									|
| relative| is the default value and refers to relative localization|
|absolute	|绝对定位，以元素的容器作为参考系						|
| absolute| Absolute localization, with the container of the element as the reference system|
|fixed		|固定定位，保证元素在页面窗口中的对应位置显示，即使窗口是滚动的它也不会移动						|
| fixed| Fixed localization, ensure that the element is displayed in the corresponding position in the page window, even if the window is scrolling, it will not move|
|sticky		|指的是仅当元素滚动到页面之外时，元素会固定在页面窗口的顶部，达到吸顶效果/粘性定位（布局）	|
| sticky| It means that only when the element is scrolled out of the page, the element will be fixed at the top of the page window, achieving sticky effect/sticky localization (layout).|

> 运用 position:sticky或position: fixed 可实现头部导航栏固定(吸顶效果)
> Use position:sticky or position: fixed can fix the head navigation bar (sticky effect)


``` html
	<!-- 水平垂直居中 -->
	<!-- Center horizontally and vertically -->
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





> Android 兼容性
> Only for Android

如果定位元素超过容器边界，在 Android 下，超出部分将不可见，原因在于 Android 端元素 ```overflow``` 默认值为 ```hidden```，但目前 Android 暂不支持设置 ```overflow: visible```。
If your component is bigger than its parent, it will be partial invisible as Weex on Android only supports `overflow:hidden`.


## Transition

```transition```允许 CSS 的属性值在一定的时间区间内平滑地过渡。
```transition``` allows CSS property values to transition smoothly within a certain time interval.
#### transition-property
设置过渡动画的属性名，设置不同样式 ```transition``` 效果的键值对，默认值为空，表示不执行任何过渡效果
Allows the name of the transitional animation to set the value of the different styles transition effect, the default value is empty, that does not perform any transition, the following table lists all the legitimate parameters of the property:


|参数名				|描述				|
| Property| Describe|
|--					|--					|
|width				|宽度参与过渡动画		|
| width| The transition is performed when the width of the component is involved in the animation|
|height				|高度参与过渡动画		|
| height| The transition is performed when the height of the component is involved in the animation|
|top				|顶部距离参与过渡动画	|
| top| The transition is performed when the top of the component is involved in the animation|
|bottom				|底部距离参与过渡动画	|
| bottom| The transition is performed when the bottom of the component is involved in the animation|
|left				|左侧距离参与过渡动画	|
| left| The transition is performed when the left of the component is involved in the animation|
|right				|右侧距离参与过渡动画	|
| right| The transition is performed when the right of the component is involved in the animation|
|background-color	|背景颜色参与过渡动画	|
| background-color| The transition is performed when the backgroundColor of the component is involved in the animation|
|opacity			|不透明度参与过渡动画	|
| opacity| The transition is performed when the opacity of the component is involved in the animation|
|transform			|变换类型参与过渡动画	|
| transform| The transition is performed when the transform of the component is involved in the animation|




#### transition-duration
指定过渡的持续时间 (单位是毫秒)，默认值是 0，表示没有动画效果。
Specifies the duration of the transition (in milliseconds). The default value is 0, indicating that there is no animation.

#### transition-delay
指定请求过渡操作到执行过渡之间的时间间隔 (单位是毫秒或者秒)，默认值是 0，表示没有延迟，在请求后立即执行过渡。
Specifies the time interval (in milliseconds or seconds) between the request transition and the transition. The default value is 0, indicating that there is no delay, and the transition is performed immediately after the request.

#### transition-timing-function
描述过渡执行的速度曲线，用于使过渡更为平滑。默认值是 ```ease```。下表列出了所有合法的属性：
Describes the velocity curve of the transition, which is used to make the transition smoother. The default is ease. The following table lists all the valid attributes:


|参数名							|描述																																			|
| Property| Describe|
|--								|--																																				|
|ease							|transition 过渡逐渐变慢的过渡效果																												|
| ease| The transition gradually slow down the transition effect|
|ease-in						|transition 过渡慢速开始，然后变快的过渡效果																									|
| ease-in| The transition starts slowly and then becomes faster for the transition effect|
|ease-out						|transition 过渡快速开始，然后变慢的过渡效果																									|
| ease-out| The transition starts quickly and then slows the transition effect|
|ease-in-out					|transition 过渡慢速开始，然后变快，然后慢速结束的过渡效果																						|
| ease-in-out| The transition starts slowly, then goes fast and then slowly ends the transition effect|
|linear							|transition 过渡以匀速变化																														|
| linear| The transition changes at constant speed|
|cubic-bezier(x1, y1, x2, y2)	|使用三阶贝塞尔函数中自定义 transition 变化过程，函数的参数值必须处于 0 到 1 之间。更多关于三次贝塞尔的信息请参阅  [cubic-bezier](https://cubic-bezier.com/?spm=a2c7j.-zh-docs-styles-common-styles.0.0.3f952164z39lZD#.17,.67,.83,.67)和 [Bézier curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve?spm=a2c7j.-zh-docs-styles-common-styles.0.0.3f952164z39lZD)	|
| cubic-bezier(x1, y1, x2, y2)| Using the custom transition in the third-order Bessel function, the parameter values of the function must be between 0 and 1. For more information on three times Bessel, see [cubic-bezier](http://cubic-bezier.com/) and [Bézier curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve).|



#### 示例
#### Example


``` html
<template>
	<view class="row">
		<view class="box" :class="{'active':isActive}" @click="isActive = !isActive">
			<image class="img" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/loveIcon.png" mode="aspectFill"></image>
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

<img width="300px" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/gitb.gif" />

## Transform

应用于元素的2D或3D转换。这个属性允许你将元素旋转，缩放，移动，倾斜等。
Applied in the 2D or 3D transformation of elements. This attribute allows the rotation, scaling, moving, tilting and so on of the element.


|参数名							|描述																																			|
| Property| Describe|
|--								|--																																				|
|`translateX({<length/percentage>})`	|X 轴方向平移，支持长度单位或百分比。																												|
| `translateX({<length/percentage>})`| X-axis direction panning, length unit or percentage is supported.|
|`translateY({<length/percentage>})`	|Y 轴方向平移，支持长度单位或百分比。																	|
| `translateY({<length/percentage>})`| Y-axis direction panning, length unit or percentage is supported.|
|`translate({<length/percentage>} {<length/percentage>})`	|X 轴和 Y 轴方向同时平移，```translateX``` + ```translateY``` 简写。									|
| `translate({<length/percentage>} {<length/percentage>})`| X-axis and y-axis directions are simultaneously translated, `translateX` + `translateY` abbreviation.|
|`scaleX(<number>)`				|X 轴方向缩放，值为数值，表示缩放比例，不支持百分比。							|
| `scaleX(<number>)`| X-axis direction scaling, in numeric value, indicates scaling ratio. Percentage is supported.|
|`scaleY(<number>)`						|Y 轴方向缩放，值为数值，表示缩放比例，不支持百分比。																													|
| `scaleY(<number>)`| Y-axis direction scaling, in numeric value, indicates scaling ratio. Percentage is supported.|
|`scale(<number>)`|X 轴和 Y 轴方向同时缩放，```scaleX``` + ```scaleY``` 简写。|
| `scale(<number>)`| X-axis and Y-axis directions are zoomed simultaneously, `scaleX` + `scaleY` abbreviation.|
|`rotate(<angle/degree>)`|将元素围绕一个定点（由 ```transform-origin``` 属性指定）旋转而不变形的转换。指定的角度定义了旋转的量度。若角度为正，则顺时针方向旋转，否则逆时针方向旋转。|
| `rotate(<angle/degree>)`| The transformation that rotates the element around a fixed point (specified by the `transform-origin` attribute) without deformation. The specified angle defines the measure of rotation. If the angle is positive, rotate clockwise; Otherwise, rotate counterclockwise.|
|`rotateX(<angle/degree>)`|X 轴方向的旋转。|
| `rotateX(<angle/degree>)`| Rotation in the X-axis direction.|
|`rotateY(<angle/degree>)`|Y 轴方向的旋转。|
| `rotateY(<angle/degree>)`| Rotation in the Y-axis direction.|
|`rotateZ(<angle/degree>)`|Z 轴方向的旋转。|
| `rotateZ(<angle/degree>)`| Rotation in the Z-axis direction.|
|`perspective(<length>)`|指定了观察者与 z=0 平面的距离，使具有三维位置变换的元素产生透视效果。z>0 的三维元素比正常大，而 z<0 时则比正常小，大小程度由该属性的值决定。Android 4.1及以上版本支持。|
| `perspective(<length>)`| Specify the distance between the observer and the z=0 plane, which makes the elements with three-dimensional position transformation produce perspective effect. The three-dimensional elements with z>0 are larger than the normal ones, and those with z<0 are smaller. The size is determined by the value of this attribute. Supported by Android 4.1+.|
|`transform-origin {length/percentage/关键字(top/left/right/bottom)}:`|设置一个元素变形的原点，仅支持 2D 坐标。|
| `transform-origin {length/percentage/keyword (top/left/right/bottom)}:`| Set the origin of an element deformation, which only supports 2D coordinates.|

> 除了```perspective```和```transform-origin```，```transition```支持了```transform```的全部能力。 其中transform的```rotate``` 和```rotatez``` 等效.
> Consider use `transition` instead, which supports all the style that `transform` supports except for `transform-origin` and `perspective` `rotate` is the same as `rotateZ`.



#### 示例
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





<img width="300px" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/gifa.gif" />


## 伪类
## Pseudo class


|参数名		|描述								|
| Property| Describe|
|--			|--									|
|active		|所有组件都支持						|
| active| All components are supported|
|focus		|只有 ```input``` 组件和 ```textarea``` 组件支持|
| focus| Only the `input` component and `textarea` component are supported|
|disabled	|只有 ```input``` 组件和 ```textarea``` 组件支持|
| disabled| Only the `input` component and `textarea` component are supported|
|enabled	|只有 ```input``` 组件和 ```textarea``` 组件支持|
| enabled| Only the `input` component and `textarea` component are supported|

**注意**
**Notes**
> 同时生效的时候，优先级高覆盖优先级低。
> the high priority override low priority when rules take effect at the same time.
> 例如：```input:active:enabled``` 和 ```input:active``` 同时生效，前者覆盖后者
> such as: "input:active:enabled" will override "input:active".

- 互联规则如下所示
- the interconnection rule as follow

<img width="400px" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/active.png" />


## 线性渐变
## Linear-gradient

所有组件均支持线性渐变。[CSS3 渐变](https://www.w3cschool.cn/css3/oj26bfli.html)
Weex support linear-gradient background, You can see [W3C description of the gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients).
你可以通过  ``` background-image ```属性创建线性渐变。
You can use linear gradient by `background-image` property.
``` javascript
	background-image:linear-gradient(to bottom right,#AD18F9,#05DFC7);
```

只支持两种颜色的渐变，渐变方向如下：
Weex currently supports two color gradients. The direction of the gradient is as follows:

|渐变方向		|描述				|
| Value| Describe|
|--				|--					|
|to right		|从左向右渐变		|
| to right| From left to right|
|to left		|从右向左渐变		|
| to left| From right to left|
|to bottom		|从上到下渐变		|
| to bottom| From top to bottom|
|to top			|从下到上渐变		|
| to top| From bottom to top|
|to bottom right|从左上角到右下角	|
| to bottom right| From the upper left corner to the lower right corner|
|to top left	|从右下角到左上角	|
| to top left| From the lower right corner to the upper left corner|

**注意**
**Notes**

> ```background-image``` 优先级高于 ```background-color```，这意味着同时设置 ```background-image``` 和 ```background-color```，```background-color``` 被覆盖。
> ```background-image``` takes precedence over ```background-color```, which means setting both ```background-image``` and ```background-color```, ` ``background-color``` is overridden.
> ```background``` 不支持简写。
>
> **目前暂不支持 radial-gradient（径向渐变）。**
> **`radial-gradient` is not currently supported, do not use it.**


<img width="300px" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/gradients.PNG" />


## 阴影@boxshadow
## Box-shadow@boxshadow

### 阴影```box-shadow```@ios-box-shadow
### Shadow ````box-shadow````@ios-box-shadow


	{box-shadow:inset offset-x offset-y blur-radius color}
	{box-shadow:投影方式 X轴偏移量 Y轴偏移量 阴影模糊半径  阴影颜色}
	{box-shadow:inset offset-x offset-y blur-radius color}


|参数			|描述																										|
| Property| Describe|
|--				|--																											|
|inset（可选）	|默认阴影在边框外。使用 ```inset``` 后，阴影在边框内（即使是透明边框），背景之上内容之下。						|
| inset (optional)| Shadow is outside the border by default. After using `inset`, the shadow is inside the border (even if it is a transparent border), and below the content above the background.|
|offset-x		|设置水平偏移量，如果是负值则阴影位于元素左边。																|
| offset-x| Set the horizontal offset, if it is negative, the shadow is located to the left of the element.|
|offset-y		|设置垂直偏移量，如果是负值则阴影位于元素上面。																|
| offset-y| Set the vertical offset, if it is negative, the shadow is located above the element.|
|blur-radius	|设置模糊半径，px 单位长度值，值越大，模糊面积越大，阴影就越大越淡。不能为负值。默认为0，此时阴影边缘锐利。	|
| blur-radius| Set the blur radius, px unit length value, the larger the value, the larger the blur area, and the bigger and lighter the shadow. Cannot be negative. The default value is 0, and the shadow edge is sharp at this value.|
|color			|设置阴影颜色																								|
| color| Set shadow color|

示例
Example
``` css
	.box4 {
	    box-shadow: inset 3px 5px 20px rgb(255, 69, 0);
	}
```

**注意**
**Notes**
- 每个元素只支持设置一个阴影效果，不支持多个阴影同时作用于一个元素。
- Each element only supports setting one shadow effect, and does not support multiple shadows acting on one element at the same time.
- Android平台 设置```box-shadow```的组件需要让出阴影渲染位置，否则会出现阴影显示不全的问题。
- On the Android platform, the component that sets the ``box-shadow``` needs to give up the shadow rendering position, otherwise there will be a problem of incomplete shadow display.


### Android平台：阴影@android-box-shadow
### Android: Shadow @android-box-shadow

#### 阴影```box-shadow```
#### shadow ```box-shadow````

从HBuilderX3.4.3起，重新支持阴影样式(box-shadow)。修复老版本组件设置```box-shadow```后在不同系统版本出现的显示异常及闪烁问题! 但需要注意设置阴影样式(box-shadow) 的组件需要让出阴影渲染位置，否则会出现阴影显示不全的问题。


示例
Example
```JavaScript
<template>
	<view class="wrapper">
		<view>
			<view class="box">
				<text class="title" style="text-align: center">Hello World</text>
			</view>
		</view>
	</view>
</template>
<style>
	.box {
		width: 300px;
		height: 100px;
		background-color: #FFE4C4;
		border-radius: 10px;
		box-shadow: 3px 5px 2px rgb(255, 69, 0);
		margin: 10px;//让出阴影位置
	}
</style>

```

#### 阴影```elevation```
#### shadow ```elevation```

目前Android平台对阴影样式(box-shadow)支持的还不太完善，有设置圆角边框时阴影样式显示不正常、占用组件视图渲染区域等问题。
At present, the Android platform's support for the shadow style (box-shadow) is not perfect, and there are problems such as abnormal display of the shadow style when setting a rounded border, and occupying the rendering area of the component view.

为解决这些问题，从HBuilderX 2.4.7起，新增elevation属性（**组件的属性，不是css样式**）设置组件的层级，Number类型，层级值越大阴影越明显，阴影效果也与组件位置有关，越靠近页面底部阴影效果越明显
To solve these problems, from HBuilderX 2.4.7+, the elevation attribute ( **attribute of the component, not css style**) is added to set the level of the component and the Number type. The larger the level value, the more obvious the shadow. The shadow effect is also related to the position of the component, the closer to the bottom of the page, the more obvious the shadow effect



用法
Usage
``` html
	<view elevation="5px"></view>
```


#### 注意
#### Notes
- 设置```elevation```属性产生的阴影暂时无法修改颜色
- The color of the shadow created by setting the `elevation` attribute cannot be modified temporarily
- 设置```elevation```后当前组件的层级会高于其他未设置elevation组件的层级，都设置```elevation```值域越大则层级越高！组件覆盖的场景需要留意
- After setting `elevation`, the level of the current component will be higher than that of other components without elevation. The larger the value range of `elevation`, the higher the level! Be aware of component coverage scenarios
- 为了避免```elevation```属性的阴影效果与阴影样式(```box-shadow```)冲突，设置```elevation```属性后```box-shadow```样式失效
- To avoid conflict between the shadow effect of the `elevation` attribute and the shadow style (`box-shadow`), the `box-shadow` style becomes invalid after setting the `elevation` attribute
- 使用```elevation```需要阴影元素的父元素大于阴影范围，否则会对阴影进行裁剪
- To use `elevation`, the parent element of the shadow element needs to be larger than the shadow range, or otherwise the shadow will be clipped
- IOS不支持```elevation```属性，请使用```box-shadow```设置阴影
- IOS does not support the `elevation` attribute, please use `box-shadow` to set the shadow
- 设置```box-shadow```需要当前组件让出阴影位置。否则无法正常看到阴影
- Setting ````box-shadow```` requires the current component to yield the shadow position. Otherwise, the shadow cannot be seen normally



## 文本样式
## Text style

### color
color {color}：文字颜色，支持如下字段：
 * RGB（ rgb(255, 0, 0) ）
 * RGBA（ rgba(255, 0, 0, 0.5) ）
 * 十六进制（ #ff0000 ）；
 * Hexadecimal ( #ff0000 );
 * 精简写法的十六进制（ #f00 ）
 * Simplified hexadecimal notation ( #f00 )
 * 色值关键字（red）
 * Color value keyword (red)

> 只有```text```标签可以设置字体颜色
> Only `text` tags can set the font color

### font-size
font-size {number}：文字大小，只有```text```标签可以设置字体大小
`font-size`: \<length> this property specifies the size of the font.

### font-style
font-style {string}：字体类别。可选值 ```normal``` | ```italic```，默认为 ```normal```。
`font-style`: \<enum> `normal` | `italic`. This property lets you select italic or normal faces within a font-family. Default value is `normal`.

### font-weight
font-weight {string}：字体粗细程度。默认值: ```normal```；
This property indicate the weight of the text.

- 可选值: ```normal```, ```bold```, 100, 200, 300, 400, 500, 600, 700, 800, 900
- values: `normal`, `bold`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`
- ```normal``` 等同于 400, ```bold``` 等同于 700；
- ```normal``` is equivalent to 400, ```bold``` is equivalent to 700;
- iOS 支持 9 种 ```font-weight```值；Android 仅支持 400 和 700, 其他值会设为 400 或 700
- ios support showing 9 kind of font-weight.android support showing 2 kind of font-weight:400,700, other value will map to 400 or 700.
- 类似 ```lighter```, ```bolder``` 这样的值暂时不支持
- Some standard values like `lighter`, `bolder`, number unit are not supported.

### text-decoration
```text-decoration {string}```：字体装饰。默认值为 ```none```。
```text-decoration {string}```: Font decoration. The default value is ``none``.

|可选值			|描述						|
| Property| Describe|
|--				|--							|
|none			|默认。定义标准的文本		|
| none| Default. Define standard text|
|underline		|定义文本下的一条线		|
| underline| Define a line below the text|
|line-through	|定义穿过文本下的一条线	|
| line-through| Define a line through the text|


> 只支持 ```text``` 和 ```richtext```
>
> 不支持 ```text-decoration:overline```
> `text-decoration:overline` not supported


### text-align
```text-align {string}```：对齐方式。默认值为 ```left```。
```text-align {string}```: The alignment. The default value is ```left```.

|可选值	|描述				|
| Property| Describe|
|--		|--					|
|left	|把文本排列到左边	|
| left| Align the text to the left|
|center	|把文本排列到中间	|
| center| Align the text to the middle|
|right	|把文本排列到右边|
| right| Align the text to the right|

> 不支持```text-align:justify```
> `text-align:justify` not supported


### font-family
```font-family {string}```：设置字体。这个设置不保证在不同平台，设备间的一致性。
```font-family {string}````: Set the font. This setting does not guarantee consistency between devices on different platforms.
如所选设置在平台上不可用，将会降级到平台默认字体。
If the specified font cannot be found at the device, a typeface fallback will occur and the default typeface will be load. The fallback mechanism may vary in different devices.
如果需要加载自定义字体，请参考相关[DOM.addRule](/tutorial/nvue-api?id=addrule)
If you need to load custom fonts, please refer to the relevant [DOM.addRule](/tutorial/nvue-api?id=addrule)

### text-overflow
```text-overflow {string}```：设置内容超长时的省略样式。
```text-overflow {string}````: Set the omission style when the content is too long.

|可选值		|描述							|
| Property| Describe|
|--			|--								|
|clip		|修剪文本						|
| clip| Trimmed text|
|ellipsis	|显示省略符号来代表被修剪的文本	|
| ellipsis| Display ellipsis to represent the trimmed text|
> 只支持 ```text``` 和 ```richtext```
> Only ```text``` and ```richtext``` are supported

### lines
```lines {number}```: 正整数，指定最大文本行数，默认```lines```值为0，表示不限制最大行数```lines```。如果文本不够长，实际展示行数会小于指定行数。
```lines {number}```: A positive integer, specifying the maximum number of text lines, the default ```lines``` value is 0, which means that the maximum number of lines is not limited ```lines```. If the text is not long enough, the actual number of displayed lines will be less than the specified number of lines.

### line-height
line-height {length}: 正整数，每行文字高度。```line-height```是 top 至 bottom的距离。
`line-height`: \<length> The line height of every line in the text. `line-height` is the space between top and bottom.
```line-height```与```font-size```没有关系，因为```line-height```被 top 和 bottom 所限制，
````line-height``` has nothing to do with ````font-size```, because ```line-height``` is limited by top and bottom,
```font-size``` 被 glyph 所解析。```line-height```和```font-size```相等一般会导致文字被截断。
```font-size``` is parsed by glyph. Equal ``line-height``` and ```font-size``` will generally cause text to be truncated.

### word-wrap
```word-wrap:<string>```  对nvue来说 ```anywhere``` 表示在以字符为最小元素做截断换行，其它值或不指定该属性，都以英文单词为单位进行换行。
```word-wrap:<string>``` For nvue, ```anywhere``` means that the character is the smallest element to truncate and wrap the line. Other values or not specifying this attribute are performed in English words. newline.

|可选值		|描述								|
| Property| Describe|
|--			|--									|
|break-word	|在长单词或 URL 地址内部进行换行	|
| break-word| Line feed inside long words or URL addresses|
|normal		|只在允许的断字点换行				|
| normal| Line feed only at allowed hyphenation points|
|anywhere	|以字符为最小元素做截断换行	|
| anywhere| Use characters as the smallest element to do truncation and line feed|


> 在 Android 平台暂不支持
