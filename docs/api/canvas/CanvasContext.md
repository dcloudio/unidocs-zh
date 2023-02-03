**属性**
**Attributes**

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|QQ MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|√|√|

App-nvue下如需使用canvas，暂未封装为uni API，可参考[文档](https://github.com/dcloudio/NvueCanvasDemo)使用。
If you need to use canvas under App-nvue, it has not been packaged as uni API yet, you can refer to [documentation](https://github.com/dcloudio/NvueCanvasDemo) to use.

### CanvasContext.fillStyle string

填充颜色。用法同 [CanvasContext.setFillStyle()](#canvascontextsetfillstyle)。
Fill color. The usage is the same as [CanvasContext.setFillStyle()](#canvascontextsetfillstyle).

### CanvasContext.strokeStyle string

边框颜色。用法同 [CanvasContext.setStrokeStyle()](#canvascontextsetstrokestyle)。
Border color. The usage is the same as [CanvasContext.setStrokeStyle()](#canvascontextsetstrokestyle).

### CanvasContext.shadowOffsetX number

阴影相对于形状在水平方向的偏移
The shadow's horizontal offset relative to the shape

### CanvasContext.shadowOffsetY number

阴影相对于形状在竖直方向的偏移
The vertical offset of the shadow relative to the shape

### CanvasContext.shadowColor number

阴影的颜色
shade color

### CanvasContext.shadowBlur number

阴影的模糊级别
Blur level for shadows

### CanvasContext.lineWidth number

线条的宽度。用法同 [CanvasContext.setLineWidth()](#canvascontextsetlinewidth)。
The width of the line. The usage is the same as [CanvasContext.setLineWidth()](#canvascontextsetlinewidth).

### CanvasContext.lineCap number

线条的端点样式。用法同 [CanvasContext.setLineCap()](#canvascontextsetlinecap)。
The endpoint style of the line. The usage is the same as [CanvasContext.setLineCap()](#canvascontextsetlinecap).

### CanvasContext.lineJoin number

线条的交点样式。用法同 [CanvasContext.setLineJoin()](#canvascontextsetlinejoin)。
The intersection style of the line. The usage is the same as [CanvasContext.setLineJoin()](#canvascontextsetlinejoin).

### CanvasContext.miterLimit number

最大斜接长度。用法同 [CanvasContext.setMiterLimit()](#canvascontextsetmiterlimit)。
Maximum miter length. The usage is the same as [CanvasContext.setMiterLimit()](#canvascontextsetmiterlimit).

### CanvasContext.lineDashOffset number

虚线偏移量，初始值为0
Dashed line offset, the initial value is 0

### CanvasContext.font string

当前字体样式的属性。符合 [CSS font 语法](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font) 的 DOMString 字符串，至少需要提供字体大小和字体族名。默认值为 10px sans-serif。
Properties of the current font style. A DOMString string conforming to [CSS font syntax](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font), at least need to provide font size and font family name. The default is 10px sans-serif.

### CanvasContext.globalAlpha number

全局画笔透明度。范围 0-1，0 表示完全透明，1 表示完全不透明。
Global brush transparency. The range is 0-1, with 0 being completely transparent and 1 being completely opaque.

### CanvasContext.globalCompositeOperation string

在绘制新形状时应用的合成操作的类型。目前安卓版本只适用于 `fill` 填充块的合成，用于 `stroke` 线段的合成效果都是 `source-over`。
The type of compositing operation to apply when drawing new shapes. The current Android version is only applicable to the composition of `fill` filling blocks, and the composition effect of `stroke` line segments is `source-over`.

目前支持的操作有
Currently supported operations are
* App和H5端：source-over、destination-over、source-in、destination-in、source-out、destination-out、source-atop、destination-atop、lighter、darker、xor、copy
* App and H5 side: source-over, destination-over, source-in, destination-in, source-out, destination-out, source-atop, destination-atop, lighter, darker, xor, copy
* 微信小程序安卓端：xor, source-over, source-atop, destination-out, lighter, overlay, darken, lighten, hard-light
* WeChat MiniApp Android: xor, source-over, source-atop, destination-out, lighter, overlay, darken, lighten, hard-light
* 微信小程序iOS端：xor, source-over, source-atop, destination-over, destination-out, lighter, multiply, overlay, darken, lighten, color-dodge, color-burn, hard-light, soft-light, difference, exclusion, saturation, luminosity
* WeChat MiniApp iOS: xor, source-over, source-atop, destination-over, destination-out, lighter, multiply, overlay, darken, lighten, color-dodge, color-burn, hard-light, soft-light , difference, exclusion, saturation, luminosity

**方法**
**method**

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|JD MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|

### CanvasContext.arc

画一条弧线。创建一个圆可以用 ```arc()``` 方法指定起始弧度为0，终止弧度为 ```2 * Math.PI```。用 ```stroke()``` 或者 ```fill()``` 方法来在 ```canvas``` 中画弧线。
Draw an arc. To create a circle, you can use the ```arc()``` method to specify the starting arc as 0 and the ending arc as ```2 * Math.PI```. Use the ```stroke()``` or ```fill()``` methods to draw arcs in ```canvas```.

**参数**
**parameter**

|参数|类型	|说明|
|Parameter|Type |Description|
|---|---	|---	|
|x	|Number	|圆的x坐标	|
| x | Number | The x-coordinate of the circle |
|y	|Number	|圆的y坐标|
| y | Number | The y coordinate of the circle |
|r|Number	|圆的半径|
|r| Number |The radius of the circle|
|sAngle	|Number	|起始弧度，单位弧度（在3点钟方向）|
| sAngle | Number | Starting radian, unit radian (at 3 o'clock direction)|
|eAngle	|Number	|终止弧度|
| eAngle | Number |End Angle |
|counterclockwise	|Boolean|可选。指定弧度的方向是逆时针还是顺时针。默认是false，即顺时针。|
|counterclockwise|Boolean|Optional. Specifies whether the direction of the arc is counterclockwise or clockwise. The default is false, which is clockwise. |

**示例代码**
**Example Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')

// Draw coordinates
ctx.arc(100, 75, 50, 0, 2 * Math.PI)
ctx.setFillStyle('#EEEEEE')
ctx.fill()

ctx.beginPath()
ctx.moveTo(40, 75)
ctx.lineTo(160, 75)
ctx.moveTo(100, 15)
ctx.lineTo(100, 135)
ctx.setStrokeStyle('#AAAAAA')
ctx.stroke()

ctx.setFontSize(12)
ctx.setFillStyle('black')
ctx.fillText('0', 165, 78)
ctx.fillText('0.5*PI', 83, 145)
ctx.fillText('1*PI', 15, 78)
ctx.fillText('1.5*PI', 83, 10)

// Draw points
ctx.beginPath()
ctx.arc(100, 75, 2, 0, 2 * Math.PI)
ctx.setFillStyle('lightgreen')
ctx.fill()

ctx.beginPath()
ctx.arc(100, 25, 2, 0, 2 * Math.PI)
ctx.setFillStyle('blue')
ctx.fill()

ctx.beginPath()
ctx.arc(150, 75, 2, 0, 2 * Math.PI)
ctx.setFillStyle('red')
ctx.fill()

// Draw arc
ctx.beginPath()
ctx.arc(100, 75, 50, 0, 1.5 * Math.PI)
ctx.setStrokeStyle('#333333')
ctx.stroke()

ctx.draw()
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/arc.png)

针对 ```arc(100, 75, 50, 0, 1.5 * Math.PI)```的三个关键坐标如下：
The three key coordinates for ```arc(100, 75, 50, 0, 1.5 * Math.PI)``` are as follows:
* 绿色: 圆心 (100, 75)
* Green: center of circle (100, 75)
* 红色: 起始弧度 (0)
* Red: starting arc (0)
* 蓝色: 终止弧度 (1.5 * Math.PI)
* Blue: end radians (1.5 * Math.PI)

### CanvasContext.arcTo

根据控制点和半径绘制圆弧路径。
Draws an arc path based on control points and radius.

```javascript
CanvasContext.arcTo(x1, y1, x2, y2, radius)
```

**参数**
**parameter**

|属性值	|类型	|说明|
|Attribute Value |Type |Description|
|---	|---	|---	|
|x1|Number	|第一个控制点的 x 轴坐标|
|x1| Number |The x-coordinate of the first control point|
|y1|Number	|第一个控制点的 y 轴坐标|
|y1| Number |The y-coordinate of the first control point|
|x2|Number	|第二个控制点的 x 轴坐标|
|x2| Number |The x-coordinate of the second control point|
|y2|Number	|第二个控制点的 y 轴坐标|
|y2| Number |The y-coordinate of the second control point|
|radius	|Number	|圆弧的半径	|
| radius | Number | Radius of the arc |

### CanvasContext.beginPath

开始创建一个路径，需要调用fill或者stroke才会使用路径进行填充或描边。
Start to create a path, you need to call fill or stroke to use the path to fill or stroke.

**Tip:** 在最开始的时候相当于调用了一次 ```beginPath()```。
**Tip:** At the beginning, it is equivalent to calling ```beginPath()``` once.
**Tip:** 同一个路径内的多次`setFillStyle()`、`setStrokeStyle()`、`setLineWidth()`等设置，以最后一次设置为准。
**Tip:** For multiple `setFillStyle()`, `setStrokeStyle()`, `setLineWidth()` and other settings in the same path, the last setting shall prevail.


**示例代码**
**Example Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')
// begin path
ctx.rect(10, 10, 100, 30)
ctx.setFillStyle('yellow')
ctx.fill()

// begin another path
ctx.beginPath()
ctx.rect(10, 40, 100, 30)

// only fill this rect, not in current path
ctx.setFillStyle('blue')
ctx.fillRect(10, 70, 100, 30)

ctx.rect(10, 100, 100, 30)

// it will fill current path
ctx.setFillStyle('red')
ctx.fill()
ctx.draw()
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/fill-path.png)
### CanvasContext.bezierCurveTo

创建三次方贝塞尔曲线路径。
Creates a cubic Bezier path.

**Tip:** 曲线的起始点为路径中前一个点。
**Tip:** The starting point of the curve is the previous point in the path.

**参数**
**parameter**

|参数	|类型	|说明|
|Parameter |Type |Description|
|---	|---	|---|
|cp1x	|Number	|第一个贝塞尔控制点的 x 坐标|
| cp1x | Number | The x-coordinate of the first Bézier control point |
|cp1y	|Number	|第一个贝塞尔控制点的 y 坐标|
| cp1y | Number | The y-coordinate of the first Bézier control point |
|cp2x	|Number	|第二个贝塞尔控制点的 x 坐标|
| cp2x | Number | The x-coordinate of the second Bézier control point |
|cp2y	|Number	|第二个贝塞尔控制点的 y 坐标|
| cp2y | Number | The y-coordinate of the second Bezier control point |
|x|Number	|结束点的 x 坐标|
|x| Number |The x-coordinate of the end point|
|y|Number	|结束点的 y 坐标|
| y| Number |The y-coordinate of the end point|

**示例代码**
**Example Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')

// Draw points
ctx.beginPath()
ctx.arc(20, 20, 2, 0, 2 * Math.PI)
ctx.setFillStyle('red')
ctx.fill()

ctx.beginPath()
ctx.arc(200, 20, 2, 0, 2 * Math.PI)
ctx.setFillStyle('lightgreen')
ctx.fill()

ctx.beginPath()
ctx.arc(20, 100, 2, 0, 2 * Math.PI)
ctx.arc(200, 100, 2, 0, 2 * Math.PI)
ctx.setFillStyle('blue')
ctx.fill()

ctx.setFillStyle('black')
ctx.setFontSize(12)

// Draw guides
ctx.beginPath()
ctx.moveTo(20, 20)
ctx.lineTo(20, 100)
ctx.lineTo(150, 75)

ctx.moveTo(200, 20)
ctx.lineTo(200, 100)
ctx.lineTo(70, 75)
ctx.setStrokeStyle('#AAAAAA')
ctx.stroke()

// Draw quadratic curve
ctx.beginPath()
ctx.moveTo(20, 20)
ctx.bezierCurveTo(20, 100, 200, 100, 200, 20)
ctx.setStrokeStyle('black')
ctx.stroke()

ctx.draw()
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/bezier-curve.png)

针对 `moveTo(20, 20)` ```bezierCurveTo(20, 100, 200, 100, 200, 20)``` 的三个关键坐标如下：
The three key coordinates for `moveTo(20, 20)` ```bezierCurveTo(20, 100, 200, 100, 200, 20)``` are as follows:

* 红色：起始点(20, 20)
* Red: starting point (20, 20)
* 蓝色：两个控制点(20, 100) (200, 100)
* Blue: two control points (20, 100) (200, 100)
* 绿色：终止点(200, 20)
* Green: end point (200, 20)

### CanvasContext.clearRect

清除画布上在该矩形区域内的内容。
Clears the content within the rectangle on the canvas.


**参数**
**parameter**

|参数|类型|说明|
|Parameter|Type|Description|
|---	|---	|---	|
|x	|Number	|矩形区域左上角的x坐标|
| x | Number | The x coordinate of the upper left corner of the rectangle |
|y	|Number	|矩形区域左上角的y坐标|
| y | Number | The y coordinate of the upper left corner of the rectangle |
|width	|Number	|矩形区域的宽度|
| width | Number | the width of the rectangular area |
|height	|Number	|矩形区域的高度|
| height | Number | the height of the rectangular area |

**示例代码**
**Example Code**

clearRect 并非画一个白色的矩形在地址区域，而是清空，为了有直观感受，对 canvas 加了一层背景色。
clearRect does not draw a white rectangle in the address area, but clears it. In order to have an intuitive feeling, a layer of background color is added to the canvas.

```javascript
<canvas canvas-id="myCanvas" id="myCanvas" style="border: 1px solid; background: #123456;"/>
```

```javascript
const ctx = uni.createCanvasContext('myCanvas')
ctx.setFillStyle('red')
ctx.fillRect(0, 0, 150, 200)
ctx.setFillStyle('blue')
ctx.fillRect(150, 0, 150, 200)
ctx.clearRect(10, 10, 150, 75)
ctx.draw()
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/clear-rect.png)


### CanvasContext.clip
从原始画布中剪切任意形状和尺寸。一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内（不能访问画布上的其他区域）。可以在使用 clip() 方法前通过使用 save() 方法对当前画布区域进行保存，并在以后的任意时间对其进行恢复（通过 restore() 方法）。
Cut any shape and size from the original canvas. Once a region is clipped, all subsequent drawing is restricted to the clipped region (no access to other regions on the canvas). The current canvas area can be saved by using the save() method before using the clip() method, and restored at any later time (via the restore() method).

**Tip:** 用 setFillStroke() 设置矩形线条的颜色，如果没设置默认是黑色。
**Tip:** Use setFillStroke() to set the color of the rectangle line, if not set, the default is black.


**示例代码**
**Example Code**

```javascript
const context = uni.createCanvasContext('myCanvas')

uni.downloadFile({
	url: 'https://web-assets.dcloud.net.cn/unidoc/zh/uni@2x.png',
	success: function (res) {
context.save()
context.beginPath()
context.arc(96, 96, 48, 0, 2 * Math.PI)
context.clip()
context.drawImage(res.tempFilePath, 48, 48)
		context.restore()
		context.draw()
	}
})

```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/clip.png)

### CanvasContext.closePath
关闭一个路径。
Close a path.

**Tip:** 关闭路径会连接起点和终点。
**Tip:** Closing a path connects the start and end points.
**Tip:** 如果关闭路径后没有调用 ```fill()``` 或者 ```stroke()``` 并开启了新的路径，那之前的路径将不会被渲染。
**Tip:** If you close the path without calling ```fill()``` or ```stroke()``` and open a new path, the previous path will not be rendered.


**示例代码**
**Example Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')
ctx.moveTo(10, 10)
ctx.lineTo(100, 10)
ctx.lineTo(100, 100)
ctx.closePath()
ctx.stroke()
ctx.draw()
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/close-line.png)


```javascript
const ctx = uni.createCanvasContext('myCanvas')
// begin path
ctx.rect(10, 10, 100, 30)
ctx.closePath()

// begin another path
ctx.beginPath()
ctx.rect(10, 40, 100, 30)

// only fill this rect, not in current path
ctx.setFillStyle('blue')
ctx.fillRect(10, 70, 100, 30)

ctx.rect(10, 100, 100, 30)

// it will fill current path
ctx.setFillStyle('red')
ctx.fill()
ctx.draw()
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/close-path.png)

### CanvasContext.createCircularGradient
创建一个从圆心开始的渐变。返回的 [CanvasGradient](/api/canvas/CanvasGradient) 对象，需要使用 ```CanvasGradient.addColorStop()``` 来指定渐变点，至少要两个。
Creates a gradient starting at the center of the circle. The returned [CanvasGradient](/api/canvas/CanvasGradient) object needs to use ```CanvasGradient.addColorStop()``` to specify gradient points, at least two.

**参数**
**parameter**

|参数	|类型		|定义	|
|parameter |type |definition |
|---	|---	|---		|
|x		|Number	|圆心的x坐标|
| x | Number | The x coordinate of the center of the circle |
|y		|Number	|圆心的y坐标|
| y | Number | The y coordinate of the center of the circle |
|r		|Number	|圆的半径		|
| r | Number | Radius of the circle |

**示例代码**
**Example Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')

// Create circular gradient
const grd = ctx.createCircularGradient(75, 50, 50)
grd.addColorStop(0, 'red')
grd.addColorStop(1, 'white')

// Fill with gradient
ctx.setFillStyle(grd)
ctx.fillRect(10, 10, 150, 80)
ctx.draw()
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/circular-gradient.png)

### CanvasContext.createLinearGradient
创建一个线性的渐变颜色。返回的 [CanvasGradient](/api/canvas/CanvasGradient) 对象，需要使用 ```CanvasGradient.addColorStop()``` 来指定渐变点，至少要两个。
Creates a linear gradient of colors. The returned [CanvasGradient](/api/canvas/CanvasGradient) object needs to use ```CanvasGradient.addColorStop()``` to specify gradient points, at least two.

**参数**
**parameter**

|参数	|类型		|定义	|
|parameter |type |definition |
|---	|---	|---		|
|x0		|Number	|起点的x坐标|
| x0 | Number | The x-coordinate of the starting point |
|y0		|Number	|起点的y坐标|
| y0 | Number | The y-coordinate of the starting point |
|x1		|Number	|终点的x坐标|
|x1|Number|The x-coordinate of the end point|
|y1		|Number	|终点的y坐标|
| y1 | Number | The y-coordinate of the end point |


**示例代码**
**Example Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')

// Create linear gradient
const grd = ctx.createLinearGradient(0, 0, 200, 0)
grd.addColorStop(0, 'red')
grd.addColorStop(1, 'white')

// Fill with gradient
ctx.setFillStyle(grd)
ctx.fillRect(10, 10, 150, 80)
ctx.draw()
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/linear-gradient.png)

### CanvasContext.createPattern
对指定的图像创建模式的方法，可在指定的方向上重复元图像
Method for creating a pattern for a specified image that repeats the metaimage in the specified direction

**参数**
**parameter**

|参数		|类型	|说明				|
|Parameter |Type |Description |
|---		|---	|---																|
|image		|String	|重复的图像源，仅支持包内路径和临时路径								|
| image | String |Duplicate image source, only supports in-package path and temporary path |
|repetition	|String	|指定如何重复图像，有效值有: repeat, repeat-x, repeat-y, no-repeat	|
| repetition | String | specifies how to repeat the image, valid values are: repeat, repeat-x, repeat-y, no-repeat |

**示例代码**
**Example Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')
const pattern = ctx.createPattern('/path/to/image', 'repeat-x')
ctx.fillStyle = pattern
ctx.fillRect(0, 0, 300, 150)
ctx.draw()
```

### CanvasContext.draw
将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。
Draws the description (path, transform, style) previously in the drawing context to the canvas.

**参数**
**parameter**

|参数|类型|说明|最低版本	|
|Parameter|Type|Description|Minimum Version|
|---|---|---|---|
|reserve	|Boolean	|非必填。本次绘制是否接着上一次绘制，即reserve参数为false，则在本次调用drawCanvas绘制之前native层应先清空画布再继续绘制；若reserver参数为true，则保留当前画布上的内容，本次调用drawCanvas绘制的内容覆盖在上面，默认 false	|	|
| reserve | Boolean |Optional. Whether this drawing follows the previous drawing, that is, the reserve parameter is false, and the native layer should clear the canvas before drawing this time before calling drawCanvas; if the reserve parameter is true, the content on the current canvas is reserved, and this call The content drawn by drawCanvas is overlaid on it, the default is false | |
|callback	|Function	|绘制完成后回调|1.7.0|
| callback | Function | callback after drawing is complete | 1.7.0|

**示例代码**
**Example Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')

ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 100)
ctx.draw()
ctx.fillRect(50, 50, 150, 100)
ctx.draw()
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/un-reserve.png)


```javascript
const ctx = uni.createCanvasContext('myCanvas')

ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 100)
ctx.draw()
ctx.fillRect(50, 50, 150, 100)
ctx.draw(true)
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/reserve.png)

### CanvasContext.drawImage
绘制图像到画布。
Draw the image to the canvas.

**参数**
**parameter**

|参数|类型	|说明				|
|Parameter|Type |Description|
|---	|---|---	|
|imageResource	|String	|所要绘制的图片资源				|
| imageResource | String |The image resource to be drawn |
|dx	|Number	|图像的左上角在目标canvas上 X 轴的位置		|
| dx | Number | The X-axis position of the upper left corner of the image on the target canvas |
|dy	|Number	|图像的左上角在目标canvas上 Y 轴的位置		|
| dy | Number | The Y-axis position of the upper left corner of the image on the target canvas |
|dWidth|Number	|在目标画布上绘制图像的宽度，允许对绘制的图像进行缩放	|
| dWidth | Number | The width of the image drawn on the target canvas, allowing scaling of the drawn image |
|dHeight|Number	|在目标画布上绘制图像的高度，允许对绘制的图像进行缩放	|
| dHeight | Number | The height of the image drawn on the target canvas, allowing scaling of the drawn image |
|sx	|Number	|源图像的矩形选择框的左上角 X 坐标			|
| sx | Number | The X coordinate of the upper left corner of the selection rectangle of the source image |
|sy	|Number	|源图像的矩形选择框的左上角 Y 坐标			|
| sy | Number | The Y coordinate of the upper left corner of the selection rectangle of the source image |
|sWidth|Number	|源图像的矩形选择框的宽度		|
| sWidth | Number | The width of the selection rectangle of the source image |
|sHeight		|Number	|源图像的矩形选择框的高度		|
| sHeight | Number | The height of the selection rectangle of the source image |

有三个版本的写法：
There are three versions of writing:

* ```drawImage(dx, dy)```
* ```drawImage(dx, dy, dWidth, dHeight)```
* ```drawImage(sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)```

**示例代码**
**Example Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')

uni.chooseImage({
  success: function(res){
    ctx.drawImage(res.tempFilePaths[0], 0, 0, 150, 100)
    ctx.draw()
  }
})
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/draw-image.png)

### CanvasContext.fill
对当前路径中的内容进行填充。默认的填充色为黑色。
Fill in the content of the current path. The default fill color is black.

**Tip:** 如果当前路径没有闭合，```fill()``` 方法会将起点和终点进行连接，然后填充，详情见例一。
**Tip:** If the current path is not closed, the ```fill()``` method will connect the starting point and the ending point, and then fill it. See example 1 for details.

**Tip:** ```fill()``` 填充的的路径是从 ```beginPath()``` 开始计算，但是不会将 ```fillRect()``` 包含进去，详情见例二。
**Tip:** ```fill()``` fills the path from ```beginPath()```, but does not include ```fillRect()```, details See example two.

**示例代码**
**Example Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')
ctx.moveTo(10, 10)
ctx.lineTo(100, 10)
ctx.lineTo(100, 100)
ctx.fill()
ctx.draw()
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/fill-line.png)

```javascript
const ctx = uni.createCanvasContext('myCanvas')
// begin path
ctx.rect(10, 10, 100, 30)
ctx.setFillStyle('yellow')
ctx.fill()

// begin another path
ctx.beginPath()
ctx.rect(10, 40, 100, 30)

// only fill this rect, not in current path
ctx.setFillStyle('blue')
ctx.fillRect(10, 70, 100, 30)

ctx.rect(10, 100, 100, 30)

// it will fill current path
ctx.setFillStyle('red')
ctx.fill()
ctx.draw()
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/fill-path.png)

### CanvasContext.fillRect
填充一个矩形。
Fills a rectangle.

**Tip:** 用 ```setFillStyle()``` 设置矩形的填充色，如果没设置默认是黑色。
**Tip:** Use ```setFillStyle()``` to set the fill color of the rectangle, if not set, the default is black.

**参数**
**parameter**

|参数	|类型	|定义					|
|parameter |type |definition |
|---	|---	|---					|
|x		|Number	|矩形路径左上角的x坐标	|
| x | Number | The x-coordinate of the upper left corner of the rectangle path |
|y		|Number	|矩形路径左上角的y坐标	|
| y | Number | The y coordinate of the upper left corner of the rectangle path |
|width	|Number	|矩形路径的宽度			|
| width | Number | Width of the rectangular path |
|height	|Number	|矩形路径的高度			|
| height | Number | the height of the rectangle path |

**示例代码**
**Example Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')
ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 75)
ctx.draw()
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/fill-rect.png)

### CanvasContext.fillText
在画布上绘制被填充的文本。
Draw the filled text on the canvas.

**参数**
**parameter**

|参数		|类型	|说明						|
|Parameter |Type |Description |
|---		|---	|---						|
|text		|String	|在画布上输出的文本			|
| text | String | The text to output on the canvas |
|x			|Number	|绘制文本的左上角x坐标位置	|
| x | Number | The x coordinate position of the upper left corner of the drawn text |
|y			|Number	|绘制文本的左上角y坐标位置	|
| y | Number | The y coordinate position of the upper left corner of the drawn text |
|maxWidth	|Number	|需要绘制的最大宽度，可选	|
| maxWidth | Number | The maximum width to be drawn, optional |

**示例代码**
**Example Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')

ctx.setFontSize(20)
ctx.fillText('Hello', 20, 20)
ctx.fillText('MINA', 100, 100)

ctx.draw()
```


### CanvasContext.lineTo
增加一个新点，然后创建一条从上次指定点到目标点的线。
Adds a new point, then creates a line from the last specified point to the target point.

**Tip:** 用 ```stroke()``` 方法来画线条
**Tip:** Use the ```stroke()``` method to draw lines

**参数**
**parameter**

|参数	|类型|说明			|
|parameter |type|description|
|---	|---	|---	|
|x		|Number	|目标位置的x坐标|
| x | Number | The x-coordinate of the target location |
|y		|Number	|目标位置的y坐标|
| y | Number | The y-coordinate of the target location |

**示例代码**
**Example Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')
ctx.moveTo(10, 10)
ctx.rect(10, 10, 100, 50)
ctx.lineTo(110, 60)
ctx.stroke()
ctx.draw()
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/line-to.png)

### CanvasContext.measureText
测量文本尺寸信息，目前仅返回文本宽度。同步接口。（App 端 2.8.12+ 支持）
Measure text size information, currently only returns text width. synchronous interface. (App 2.8.12+ support)

**参数**
**parameter**

|参数	|类型	|说明			|
|Parameter |Type |Description |
|---	|---	|---			|
|text	|String	|要测量的文本	|
| text | String | Text to measure |

**返回**
**return**

返回 ```TextMetrics``` 对象，结构如下：
Return ```TextMetrics``` object, the structure is as follows:

|参数	|类型	|说明		|
|Parameter |Type |Description |
|---	|---	|---			|
|width	|Number	|文本的宽度	|
| width | Number | the width of the text |

**示例代码**
**Example Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')
ctx.font = 'italic bold 20px cursive'
const metrics = ctx.measureText('Hello World')
console.log(metrics.width)
```

### CanvasContext.moveTo
把路径移动到画布中的指定点，不创建线条。用 ```stroke()``` 方法来画线条。
Moves the path to the specified point in the canvas without creating a line. Use the ```stroke()``` method to draw lines.

**参数**
**parameter**

|参数	|类型|说明			|
|parameter |type|description|
|---	|---	|---	|
|x		|Number	|目标位置的x坐标|
| x | Number | The x-coordinate of the target location |
|y		|Number	|目标位置的y坐标|
| y | Number | The y-coordinate of the target location |

**示例代码**
**Example Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')
ctx.moveTo(10, 10)
ctx.lineTo(100, 10)

ctx.moveTo(10, 50)
ctx.lineTo(100, 50)
ctx.stroke()
ctx.draw()
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/move-to.png)

### CanvasContext.quadraticCurveTo
创建二次贝塞尔曲线路径。曲线的起始点为路径中前一个点。
Creates a quadratic Bézier path. The starting point of the curve is the previous point in the path.

**参数**
**parameter**

|参数	|类型	|说明				|
|Parameter |Type |Description |
|---	|---	|---				|
|cpx	|Number	|贝塞尔控制点的x坐标|
| cpx | Number | x-coordinate of the Bezier control point |
|cpy	|Number	|贝塞尔控制点的y坐标|
| cpy | Number | The y-coordinate of the Bezier control point |
|x		|Number	|结束点的x坐标		|
| x | Number | The x-coordinate of the end point |
|y		|Number	|结束点的y坐标		|
| y | Number | The y coordinate of the end point |

**示例代码**
**Example Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')

// Draw points
ctx.beginPath()
ctx.arc(20, 20, 2, 0, 2 * Math.PI)
ctx.setFillStyle('red')
ctx.fill()

ctx.beginPath()
ctx.arc(200, 20, 2, 0, 2 * Math.PI)
ctx.setFillStyle('lightgreen')
ctx.fill()

ctx.beginPath()
ctx.arc(20, 100, 2, 0, 2 * Math.PI)
ctx.setFillStyle('blue')
ctx.fill()

ctx.setFillStyle('black')
ctx.setFontSize(12)

// Draw guides
ctx.beginPath()
ctx.moveTo(20, 20)
ctx.lineTo(20, 100)
ctx.lineTo(200, 20)
ctx.setStrokeStyle('#AAAAAA')
ctx.stroke()

// Draw quadratic curve
ctx.beginPath()
ctx.moveTo(20, 20)
ctx.quadraticCurveTo(20, 100, 200, 20)
ctx.setStrokeStyle('black')
ctx.stroke()

ctx.draw()
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/quadratic-curve-to.png)

针对 `moveTo(20, 20)` ```quadraticCurveTo(20, 100, 200, 20)``` 的三个关键坐标如下：
The three key coordinates for `moveTo(20, 20)` ```quadraticCurveTo(20, 100, 200, 20)``` are as follows:

* 红色：起始点(20, 20)
* Red: starting point (20, 20)
* 蓝色：控制点(20, 100)
* Blue: control points (20, 100)
* 绿色：终止点(200, 20)
* Green: end point (200, 20)

### CanvasContext.rect
创建一个矩形。
Create a rectangle.

**Tip:** 用 fill() 或者 stroke() 方法将矩形真正的画到 canvas 中。
**Tip:** Use the fill() or stroke() method to actually draw the rectangle into the canvas.

**参数**
**parameter**

|参数	|类型	|说明				|
|Parameter |Type |Description |
|---	|---	|---					|
|x		|Number	|矩形路径左上角的x坐标	|
| x | Number | The x-coordinate of the upper left corner of the rectangle path |
|y		|Number	|矩形路径左上角的y坐标	|
| y | Number | The y coordinate of the upper left corner of the rectangle path |
|width	|Number	|矩形路径的宽度			|
| width | Number | Width of the rectangular path |
|height	|Number	|矩形路径的高度			|
| height | Number | the height of the rectangle path |

**示例代码**
**Example Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')
ctx.rect(10, 10, 150, 75)
ctx.setFillStyle('red')
ctx.fill()
ctx.draw()
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/fill-rect.png)

### CanvasContext.restore
恢复之前保存的绘图上下文。
Restores a previously saved drawing context.

**示例代码**
**Example Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')

// save the default fill style
ctx.save() 
ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 100)

// restore to the previous saved state
ctx.restore()
ctx.fillRect(50, 50, 150, 100)

ctx.draw()
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/save-restore.png)

### CanvasContext.rotate
以原点为中心，原点可以用 translate方法修改。顺时针旋转当前坐标轴。多次调用rotate，旋转的角度会叠加。
Centered on the origin, the origin can be modified with the translate method. Rotate the current axis clockwise. Call rotate multiple times, the angle of rotation will be superimposed.

**参数**
**parameter**

|参数	|类型	|说明															|
|Parameter |Type |Description |
|---	|---	|---															|
|rotate	|Number	|旋转角度，以弧度计(degrees * Math.PI/180；degrees范围为0~360)	|
| rotate | Number | Rotation angle, in radians (degrees * Math.PI/180; the range of degrees is 0~360) |

**示例代码**
**Example Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')

ctx.strokeRect(100, 10, 150, 100)
ctx.rotate(20 * Math.PI / 180)
ctx.strokeRect(100, 10, 150, 100)
ctx.rotate(20 * Math.PI / 180)
ctx.strokeRect(100, 10, 150, 100)

ctx.draw()
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/rotate.png)

### CanvasContext.save
保存当前的绘图上下文。
Save the current drawing context.

**示例代码**
**Example Code**

```javascript
const ctx = wx.createCanvasContext('myCanvas')

// save the default fill style
ctx.save()
ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 100)

// restore to the previous saved state
ctx.restore()
ctx.fillRect(50, 50, 150, 100)

ctx.draw()
```

### CanvasContext.scale
在调用```scale```方法后，之后创建的路径其横纵坐标会被缩放。多次调用```scale```，倍数会相乘。
After calling the ```scale``` method, the horizontal and vertical coordinates of the created path will be scaled. Calling ```scale``` multiple times, the multiples will be multiplied.

**参数**
**parameter**

|参数		|类型	|说明												|
|Parameter |Type |Description |
|---		|---	|---												|
|scaleWidth	|Number	|横坐标缩放的倍数 (1 = 100%，0.5 = 50%，2 = 200%)	|
| scaleWidth | Number | Multiplier of abscissa scaling (1 = 100%, 0.5 = 50%, 2 = 200%) |
|scaleHeight|Number	|纵坐标轴缩放的倍数 (1 = 100%，0.5 = 50%，2 = 200%)	|
| scaleHeight | Number | Multiplier of vertical axis scaling (1 = 100%, 0.5 = 50%, 2 = 200%) |

**示例代码**
**Example Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')

ctx.strokeRect(10, 10, 25, 15)
ctx.scale(2, 2)
ctx.strokeRect(10, 10, 25, 15)
ctx.scale(2, 2)
ctx.strokeRect(10, 10, 25, 15)

ctx.draw()
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/scale.png)

### CanvasContext.setFillStyle@canvascontextsetfillstyle
设置填充色，如果没有设置 fillStyle，默认颜色为 black。
Set the fill color, if no fillStyle is set, the default color is black.

**语法**
**grammar**

```javascript
canvasContext.setFillStyle(color)
canvasContext.fillStyle = color
```

**参数**
**parameter**

|参数	|类型|定义		|说明|
|parameter |type|definition |description|
|---|---|---|---|
|color|Color|Gradient Object|填充色	|
| color| Color| Gradient Object|fill color|

**示例代码**
**Example Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')
ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 75)
ctx.draw()
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/fill-rect.png)

### CanvasContext.setFontSize
设置字体的字号。
Sets the size of the font.

|参数	|类型	|说明					|
|Parameter |Type |Description |
|---	|---	|---					|
|fontSize	|Number	|字体的字号|
| fontSize | Number | Font size |

**示例代码**
**Example Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')

ctx.setFontSize(20)
ctx.fillText('20', 20, 20)
ctx.setFontSize(30)
ctx.fillText('30', 40, 40)
ctx.setFontSize(40)
ctx.fillText('40', 60, 60)
ctx.setFontSize(50)
ctx.fillText('50', 90, 90)

ctx.draw()
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/font-size.png)


### CanvasContext.setGlobalAlpha
设置全局画笔透明度。
Sets the global brush transparency.

**参数**
**parameter**

|参数	|类型	|范围|说明										|
|parameter |type |range|description|
|---	|---	|---	|---									|
|alpha	|Number	|0~1	|透明度，0 表示完全透明，1 表示完全不透明	|
| alpha | Number | 0~1 | Transparency, 0 means completely transparent, 1 means completely opaque |

**示例代码**
**Example Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')

ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 100)
ctx.setGlobalAlpha(0.2)
ctx.setFillStyle('blue')
ctx.fillRect(50, 50, 150, 100)
ctx.setFillStyle('yellow')
ctx.fillRect(100, 100, 150, 100)

ctx.draw()
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/global-alpha.png)

### CanvasContext.setLineCap@canvascontextsetlinecap
设置线条的端点样式。
Sets the endpoint style of the line.

**参数**
**parameter**

|参数	|类型						|说明				|
|Parameter |Type |Description |
|---	|---						|---				|
|lineCap|String	|'butt'、'round'、'square'	|线条的结束端点样式	|
| lineCap | String | 'butt', 'round', 'square' | End cap style of the line |

**示例代码**
**Example Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')
ctx.beginPath()
ctx.moveTo(10, 10)
ctx.lineTo(150, 10)
ctx.stroke()

ctx.beginPath()
ctx.setLineCap('butt')
ctx.setLineWidth(10)
ctx.moveTo(10, 30)
ctx.lineTo(150, 30)
ctx.stroke()

ctx.beginPath()
ctx.setLineCap('round')
ctx.setLineWidth(10)
ctx.moveTo(10, 50)
ctx.lineTo(150, 50)
ctx.stroke()

ctx.beginPath()
ctx.setLineCap('square')
ctx.setLineWidth(10)
ctx.moveTo(10, 70)
ctx.lineTo(150, 70)
ctx.stroke()

ctx.draw()
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/line-cap.png)

### CanvasContext.setLineDash
设置线条宽度。
Sets the line width.

**参数**
**parameter**

|参数	|类型	|定义													|
|parameter |type |definition |
|---	|---	|---													|
|pattern|Array	|一组描述交替绘制线段和间距（坐标空间单位）长度的数字	|
| pattern| Array | An array of numbers describing the lengths of alternately drawn line segments and spacing (coordinate space units) |
|offset	|Number	|虚线偏移量												|
| offset | Number | Dashed line offset |

**示例代码**
**Example Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')

ctx.setLineDash([10, 20], 5);

ctx.beginPath();
ctx.moveTo(0,100);
ctx.lineTo(400, 100);
ctx.stroke();

ctx.draw()
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/set-line-dash.png)

### CanvasContext.setLineJoin@canvascontextsetlinejoin
设置线条的交点样式。
Sets the intersection style for lines.

**参数**
**parameter**

|参数	|类型						|范围				|说明|
|parameter |type |range |description|
|---	|---						|---				|---|
|lineJoin	|String	|'bevel'、'round'、'miter'	|线条的结束交点样式	|
| lineJoin | String | 'bevel', 'round', 'miter' | End intersection style for lines |

**示例代码**
**Example Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')
ctx.beginPath()
ctx.moveTo(10, 10)
ctx.lineTo(100, 50)
ctx.lineTo(10, 90)
ctx.stroke()

ctx.beginPath()
ctx.setLineJoin('bevel')
ctx.setLineWidth(10)
ctx.moveTo(50, 10)
ctx.lineTo(140, 50)
ctx.lineTo(50, 90)
ctx.stroke()

ctx.beginPath()
ctx.setLineJoin('round')
ctx.setLineWidth(10)
ctx.moveTo(90, 10)
ctx.lineTo(180, 50)
ctx.lineTo(90, 90)
ctx.stroke()

ctx.beginPath()
ctx.setLineJoin('miter')
ctx.setLineWidth(10)
ctx.moveTo(130, 10)
ctx.lineTo(220, 50)
ctx.lineTo(130, 90)
ctx.stroke()

ctx.draw()
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/line-join.png)

### CanvasContext.setLineWidth@canvascontextsetlinewidth
设置线条的宽度。
Sets the width of the line.

**参数**
**parameter**

|参数		|类型	|说明					|
|Parameter |Type |Description |
|---		|---	|---					|
|lineWidth	|Number	|线条的宽度(单位是px)	|
| lineWidth | Number |The width of the line (unit is px) |

**示例代码**
**Example Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')
ctx.beginPath()
ctx.moveTo(10, 10)
ctx.lineTo(150, 10)
ctx.stroke()

ctx.beginPath()
ctx.setLineWidth(5)
ctx.moveTo(10, 30)
ctx.lineTo(150, 30)
ctx.stroke()

ctx.beginPath()
ctx.setLineWidth(10)
ctx.moveTo(10, 50)
ctx.lineTo(150, 50)
ctx.stroke()

ctx.beginPath()
ctx.setLineWidth(15)
ctx.moveTo(10, 70)
ctx.lineTo(150, 70)
ctx.stroke()

ctx.draw()
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/line-width.png)

### CanvasContext.setMiterLimit@canvascontextsetmiterlimit
设置最大斜接长度，斜接长度指的是在两条线交汇处内角和外角之间的距离。 当 ``setLineJoin()`` 为 miter 时才有效。超过最大倾斜长度的，连接处将以 lineJoin 为 bevel 来显示。
Sets the maximum miter length, which is the distance between the inner and outer corners where two lines meet. Only valid when ``setLineJoin()`` is miter. If it exceeds the maximum slant length, the join will be displayed with lineJoin as bevel.

**参数**
**parameter**

|参数		|类型	|说明			|
|Parameter |Type |Description |
|---		|---	|---			|
|miterLimit	|Number	|最大斜接长度	|
| miterLimit | Number | Maximum miter length |

**示例代码**
**Example Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')
ctx.beginPath()
ctx.setLineWidth(10)
ctx.setLineJoin('miter')
ctx.setMiterLimit(1)
ctx.moveTo(10, 10)
ctx.lineTo(100, 50)
ctx.lineTo(10, 90)
ctx.stroke()

ctx.beginPath()
ctx.setLineWidth(10)
ctx.setLineJoin('miter')
ctx.setMiterLimit(2)
ctx.moveTo(50, 10)
ctx.lineTo(140, 50)
ctx.lineTo(50, 90)
ctx.stroke()

ctx.beginPath()
ctx.setLineWidth(10)
ctx.setLineJoin('miter')
ctx.setMiterLimit(3)
ctx.moveTo(90, 10)
ctx.lineTo(180, 50)
ctx.lineTo(90, 90)
ctx.stroke()

ctx.beginPath()
ctx.setLineWidth(10)
ctx.setLineJoin('miter')
ctx.setMiterLimit(4)
ctx.moveTo(130, 10)
ctx.lineTo(220, 50)
ctx.lineTo(130, 90)
ctx.stroke()

ctx.draw()
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/miter-limit.png)

### CanvasContext.setShadow
设置阴影样式。如果没有设置，offsetX 默认值为0， offsetY 默认值为0， blur 默认值为0，color 默认值为 black。
Sets the shadow style. If not set, the default value of offsetX is 0, the default value of offsetY is 0, the default value of blur is 0, and the default value of color is black.

**参数**
**parameter**

|参数|类型|定义		|说明				|
|Parameter|Type|Definition |Description|
|---|---|---		|---				|
|offsetX|Number	|		|阴影相对于形状在水平方向的偏移	|
|offsetX|Number||The horizontal offset of the shadow relative to the shape|
|offsetY|Number	|		|阴影相对于形状在竖直方向的偏移	|
|offsetY|Number||The vertical offset of the shadow relative to the shape|
|blur|Number	|0~100	|阴影的模糊级别，数值越大越模糊	|
| blur| Number | 0~100 | Blur level of the shadow, the larger the value, the more blurred |
|color	|Color	|		|阴影的颜色			|
| color | Color | | the color of the shadow |

**示例代码**
**Example Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')
ctx.setFillStyle('red')
ctx.setShadow(10, 50, 50, 'blue')
ctx.fillRect(10, 10, 150, 75)
ctx.draw()
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/shadow.png)

### CanvasContext.setStrokeStyle@canvascontextsetstrokestyle
设置边框颜色。如果没有设置 fillStyle，默认颜色为 black。
Set border color. If fillStyle is not set, the default color is black.

**参数**
**parameter**

|参数	|类型	|定义|说明		|
|Parameter |Type |Definition |Description |
|---	|---	|---|---		|
|color|Color|Gradient Object|填充色	|
| color| Color| Gradient Object|fill color|

**示例代码**
**Example Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')
ctx.setStrokeStyle('red')
ctx.strokeRect(10, 10, 150, 75)
ctx.draw()
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/stroke-rect.png)

### CanvasContext.setTextAlign
用于设置文字的对齐
Used to set the alignment of text

|参数	|类型	|定义|
|parameter |type |definition|
|---	|---	|---|
|align	|String	|可选值 'left'、'center'、'right'	|
| align | String | Optional values 'left', 'center', 'right' |

**示例代码**
**Example Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')

ctx.setStrokeStyle('red')
ctx.moveTo(150, 20)
ctx.lineTo(150, 170)
ctx.stroke()

ctx.setFontSize(15)
ctx.setTextAlign('left')
ctx.fillText('textAlign=left', 150, 60)

ctx.setTextAlign('center')
ctx.fillText('textAlign=center', 150, 80)

ctx.setTextAlign('right')
ctx.fillText('textAlign=right', 150, 100)

ctx.draw()
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/set-text-align.png)

### CanvasContext.setTextBaseline
用于设置文字的水平对齐
Used to set the horizontal alignment of the text

**参数**
**parameter**

|参数	|类型|说明|
|parameter |type|description|
|---	|---|---|
|textBaseline	|String	|可选值 'top'、'bottom'、'middle'、'normal'	|
| textBaseline | String | Optional values 'top', 'bottom', 'middle', 'normal' |

**示例代码**
**Example Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')

ctx.setStrokeStyle('red')
ctx.moveTo(5, 75)
ctx.lineTo(295, 75)
ctx.stroke()

ctx.setFontSize(20)

ctx.setTextBaseline('top')
ctx.fillText('top', 5, 75)

ctx.setTextBaseline('middle')
ctx.fillText('middle', 50, 75)

ctx.setTextBaseline('bottom')
ctx.fillText('bottom', 120, 75)

ctx.setTextBaseline('normal')
ctx.fillText('normal', 200, 75)

ctx.draw()
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/set-text-baseline.png)

### CanvasContext.setTransform
使用矩阵重新设置（覆盖）当前变换的方法
Method to reset (overwrite) the current transform using a matrix

**语法**
**grammar**

```javascript
canvasContext.setTransform(scaleX, skewX, skewY, scaleY, translateX, translateY)
```

**参数**
**parameter**

|参数		|类型	|说明		|
|Parameter |Type |Description |
|---		|---	|---		|
|scaleX		|Number	|水平缩放	|
| scaleX | Number | Horizontal scaling |
|skewX		|Number	|水平倾斜	|
| skewX | Number | Horizontal skew |
|skewY		|Number	|垂直倾斜	|
| skewY | Number | vertical skew |
|scaleY		|Number	|垂直缩放	|
| scaleY | Number | Vertical scaling |
|translateX	|Number	|水平移动	|
| translateX | Number | Horizontal translation |
|translateY	|Number	|垂直移动	|
| translateY | Number | vertical translation |

### CanvasContext.stroke
画出当前路径的边框。默认颜色为黑色。
Draws a border around the current path. The default color is black.

**Tip:** ``stroke()`` 描绘的的路径是从 ```beginPath()``` 开始计算，但是不会将 ```strokeRect()``` 包含进去，详情见例二。
**Tip:** The path drawn by ``stroke()`` is calculated from ```beginPath()```, but will not include ```strokeRect()```, see the example for details two.

**示例代码**
**Example Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')
ctx.moveTo(10, 10)
ctx.lineTo(100, 10)
ctx.lineTo(100, 100)
ctx.stroke()
ctx.draw()
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/stroke-line.png)


```javascript
const ctx = uni.createCanvasContext('myCanvas')
// begin path
ctx.rect(10, 10, 100, 30)
ctx.setStrokeStyle('yellow')
ctx.stroke()

// begin another path
ctx.beginPath()
ctx.rect(10, 40, 100, 30)

// only stoke this rect, not in current path
ctx.setStrokeStyle('blue')
ctx.strokeRect(10, 70, 100, 30)

ctx.rect(10, 100, 100, 30)

// it will stroke current path
ctx.setStrokeStyle('red')
ctx.stroke()
ctx.draw()
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/stroke-path.png)

### CanvasContext.strokeRect
画一个矩形(非填充)。用 `setFillStroke()` 设置边框颜色，如果没设置默认是黑色。
Draw a rectangle (not filled). Use `setFillStroke()` to set the border color, if not set, the default is black.

**参数**
**parameter**

|参数	|类型	|范围	|说明					|
|parameter |type |range |description |
|---	|---	|---	|---					|
|x		|Number	|		|矩形路径左上角的x坐标	|
| x | Number | | The x-coordinate of the upper left corner of the rectangle path |
|y		|Number	|		|矩形路径左上角的y坐标	|
| y | Number | | The y coordinate of the upper left corner of the rectangle path |
|width	|Number	|		|矩形路径的宽度			|
| width | Number | | Width of the rectangular path |
|height	|Number	|		|矩形路径的高度			|
| height | Number | | height of the rectangle path |

**示例代码**
**Example Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')
ctx.setStrokeStyle('red')
ctx.strokeRect(10, 10, 150, 75)
ctx.draw()
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/stroke-rect.png)


### CanvasContext.strokeText
给定的 (x, y) 位置绘制文本描边的方法
Method to draw a text stroke at a given (x, y) position

**语法**
**grammar**

```javascript
canvasContext.strokeText(text, x, y, maxWidth)
```


**参数**
**parameter**

|参数	|类型		|说明						|
|Parameter |Type |Description |
|---	|---		|---						|
|text		|String	|要绘制的文本				|
| text | String | The text to draw |
|x			|Number	|文本起始点的 x 轴坐标		|
| x | Number | The x-axis coordinate of the starting point of the text |
|y			|Number	|文本起始点的 y 轴坐标		|
| y | Number | The y-axis coordinate of the starting point of the text |
|maxWidth	|Number	|需要绘制的最大宽度，可选	|
| maxWidth | Number | The maximum width to be drawn, optional |

### CanvasContext.transform
使用矩阵多次叠加当前变换的方法。
Method to overlay the current transform multiple times using a matrix.

**参数**
**parameter**

|参数		|类型	|说明		|
|Parameter |Type |Description |
|---		|---	|---		|
|scaleX		|Number	|水平缩放	|
| scaleX | Number | Horizontal scaling |
|skewX		|Number	|水平倾斜	|
| skewX | Number | Horizontal skew |
|skewY		|Number	|垂直倾斜	|
| skewY | Number | vertical skew |
|scaleY		|Number	|垂直缩放	|
| scaleY | Number | Vertical scaling |
|translateX	|Number	|水平移动	|
| translateX | Number | Horizontal translation |
|translateY	|Number	|垂直移动	|
| translateY | Number | vertical translation |

### CanvasContext.translate
对当前坐标系的原点(0, 0)进行变换，默认的坐标系原点为页面左上角。
Transform the origin (0, 0) of the current coordinate system. The default coordinate system origin is the upper left corner of the page.

**参数**
**parameter**

|参数	|类型	|说明			|
|Parameter |Type |Description |
|---	|---	|---			|
|x		|Number	|水平坐标平移量	|
| x | Number | Horizontal coordinate translation |
|y		|Number	|竖直坐标平移量	|
| y | Number |Vertical coordinate translation |

**示例代码**
**Example Code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')

ctx.strokeRect(10, 10, 150, 100)
ctx.translate(20, 20)
ctx.strokeRect(10, 10, 150, 100)
ctx.translate(20, 20)
ctx.strokeRect(10, 10, 150, 100)

ctx.draw()
```

![uniapp](https://web-assets.dcloud.net.cn/unidoc/zh/translate.png)
