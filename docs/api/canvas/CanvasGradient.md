<md-translatedByGoogle />

### CanvasGradient.addColorStop(stop,color)

创建一个颜色的渐变点。
Create a gradient point of color.
- 小于最小 stop 的部分会按最小 stop 的 color 来渲染，大于最大 stop 的部分会按最大 stop 的 color 来渲染。
- Parts smaller than the minimum stop will be rendered with the color of the minimum stop, and those larger than the maximum stop will be rendered with the color of the maximum stop.

- 需要使用 ```addColorStop()``` 来指定渐变点，至少要两个。
- `addColorStop()` is required to specify at least two gradient points.

#### 参数
#### Parameter

|参数|类型	|定义	|
| Parameter| Type| Definition|
|---|---|---	|
|stop	|Number(0-1)|表示渐变点在起点和终点中的位置	|
| stop| Number(0-1)| Position of the gradient point referring to the starting and ending points.|
|color	|Color	|渐变点的颜色|
| color| Color| Gradient point color|

**示例代码**
**Sample code**

```javascript
const ctx = uni.createCanvasContext('myCanvas')

// Create circular gradient
const grd = ctx.createLinearGradient(30, 10, 120, 10)
grd.addColorStop(0, 'red')
grd.addColorStop(0.16, 'orange')
grd.addColorStop(0.33, 'yellow')
grd.addColorStop(0.5, 'green')
grd.addColorStop(0.66, 'cyan')
grd.addColorStop(0.83, 'blue')
grd.addColorStop(1, 'purple')

// Fill with gradient
ctx.setFillStyle(grd)
ctx.fillRect(10, 10, 150, 80)
ctx.draw()
```

![uniapp](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/d1e88440-4f26-11eb-bd01-97bc1429a9ff.png)

