
### uni.canvasGetImageData(OBJECT,this)

返回一个数组，用来描述 canvas 区域隐含的像素数据，在自定义组件下，第二个参数传入自定义组件实例 this，以操作组件内 `<canvas>` 组件。
Return an array to describe the pixel data hidden in the canvas area. Under custom components, the second parameter is passed into the custom component instance this to operate the `<canvas>` component.

**OBJECT参数说明：**
**OBJECT parameter description:**

|参数|类型|必填|说明|
| Parameter| Type| Required| Instruction|
|---|---|---|---|
|canvasId|String|是|画布标识，传入 ```<canvas />``` 的 canvas-id（支付宝小程序是id、其他平台是canvas-id）|
|canvasId|String|Yes|Canvas ID, pass in ```<canvas /> ````&#39;s canvas-id (Alipay applet is id, other platforms are canvas-id)|
|x|Number|是|将要被提取的图像数据矩形区域的左上角 x 坐标|
| x| Number| Yes| x coordinate of the upper left corner of the rectangular area of the image data to be extracted|
|y|Number|是|将要被提取的图像数据矩形区域的左上角 y 坐标|
| y| Number| Yes| y coordinate of the upper left corner of the rectangular area of the image data to be extracted|
|width|Number|是|将要被提取的图像数据矩形区域的宽度|
| width| Number| Yes| Width of the rectangular area of the image data to be extracted|
|height|Number|是|将要被提取的图像数据矩形区域的高度|
| height| Number| Yes| Height of the rectangular area of the image data to be extracted|
|success|Function|否|接口调用成功的回调函数|
| success| Function| No| Callback function for successful interface calling|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|

**success回调返回参数：**
**success callback return parameters:**

|参数|类型|说明|
| Parameter| Type| Instruction|
|---|---|---|
|errMsg|String||
|width|Number|图像数据矩形的宽度|
| width| Number| Width of rectangle in image data|
|height|Number|图像数据矩形的高度|
| height| Number| Height of the image data rectangle|
|data|Uint8ClampedArray|图像像素点数据，一维数组，每四项表示一个像素点的rgba|
| data| Uint8ClampedArray| Image pixel data is a one-dimensional array and every four terms represent the rgba of a pixel.|


**示例代码**
**Sample code**

```javascript
uni.canvasGetImageData({
  canvasId: 'myCanvas',
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  success(res) {
    console.log(res.width) // 100
    console.log(res.height) // 100
    console.log(res.data instanceof Uint8ClampedArray) // true
    console.log(res.data.length) // 100 * 100 * 4
  }
})
```

