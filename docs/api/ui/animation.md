### uni.createAnimation(OBJECT)

创建一个动画实例 [animation](#animation)。调用实例的方法来描述动画。最后通过动画实例的export方法导出动画数据传递给组件的animation属性。
Create an animation instance [animation](#animation). Call the instance's method to describe the animation. Finally, the animation data is exported through the export method of the animation instance and passed to the animation property of the component.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|HBuilderX 2.0.4+|√|√|√|√|√|x|x|

**注意:**
**Notice:**
- export 方法每次调用后会清掉之前的动画操作
- The export method will clear the previous animation operation after each call
- nvue 暂不支持
- nvue does not currently support

**OBJECT参数说明：**
**OBJECT parameter description:**

|参数|类型|必填|默认值|说明|
|Parameter|Type|Required|Default|Description|
|---|---|---|---|---|
|duration|Integer|否|400|动画持续时间，单位ms|
|duration|Integer|No|400|Animation duration, in ms|
|timingFunction|String|否|"linear"|定义动画的效果|
|timingFunction|String|No|"linear"|Define the effect of the animation|
|delay|Integer|否|0|动画延迟时间，单位 ms|
|delay|Integer|No|0|Animation delay time, unit ms|
|transformOrigin|String|否|"50% 50% 0"|设置transform-origin||
|transformOrigin|String|No|"50% 50% 0"|Set transform-origin||

**timingFunction 有效值：**
**timingFunction Valid values:**

|值|说明|
|value|description|
|----|----|
|linear|动画从头到尾的速度是相同的|
|linear|The speed of the animation is the same from beginning to end|
|ease|动画以低速开始，然后加快，在结束前变慢|
|ease|The animation starts at a slow speed, then speeds up, and slows down before the end|
|ease-in|动画以低速开始|
|ease-in|Animation starts at slow speed|
|ease-in-out|动画以低速开始和结束|
|ease-in-out|Animation starts and ends at low speed|
|ease-out|动画以低速结束|
|ease-out|Animation ends at slow speed|
|step-start|动画第一帧就跳至结束状态直到结束|
|step-start|The first frame of the animation jumps to the end state until the end|
|step-end|动画一直保持开始状态，最后一帧跳到结束状态|
|step-end|The animation remains in the start state, and the last frame jumps to the end state|

```javascript
var animation = uni.createAnimation({
  transformOrigin: "50% 50%",
  duration: 1000,
  timingFunction: "ease",
  delay: 0
})
```


**animation**

动画实例可以调用以下方法来描述动画，调用结束后会返回自身，支持链式调用的写法。
The animation instance can call the following methods to describe the animation. After the call ends, it will return itself, which supports the writing method of chain call.

**animation 对象的方法列表：**
**List of methods for animation objects:**

样式：
style:

|方法|参数|说明|
|method|parameters|description|
|---|---|---|
|opacity|value|透明度，参数范围 0~1|
|opacity|value|transparency, parameter range 0~1|
|backgroundColor|color|颜色值|
|backgroundColor|color|color value|
|width|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值|
|width|length|Length value, if you pass in Number, it will use px by default, you can pass in the length value of other custom units|
|height|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值|
|height|length|Length value, if you pass in Number, it will use px by default, you can pass in the length value of other custom units|
|top|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值|
|top|length|Length value, if you pass in Number, it will use px by default, you can pass in the length value of other custom units|
|left|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值|
|left|length|Length value, if you pass in Number, it will use px by default, you can pass in the length value of other custom units|
|bottom|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值|
|bottom|length|Length value, if you pass in Number, it will use px by default, you can pass in the length value of other custom units|
|right|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值|
|right|length|Length value, if you pass in Number, it will use px by default, you can pass in the length value of other custom units|


旋转：
Rotate:

|方法|参数|说明|
|method|parameters|description|
|---|---|---|
|rotate|deg|deg的范围-180~180，从原点顺时针旋转一个deg角度|
The range of |rotate|deg|deg is -180~180, and it rotates a deg angle clockwise from the origin|
The range of |rotate|deg|deg is -180~180, and it rotates a deg angle clockwise from the origin|
The range of |rotate|deg|deg is -180~180, and it rotates a deg angle clockwise from the origin|
The range of |rotate|deg|deg is -180~180, and it rotates a deg angle clockwise from the origin|
|rotateX|deg|deg的范围-180~180，在X轴旋转一个deg角度|
|rotateX|deg|deg range -180~180, rotate a deg angle on the X axYes|
|rotateY|deg|deg的范围-180~180，在Y轴旋转一个deg角度|
|rotateY|deg|deg range -180~180, rotate a deg angle on the Y axYes|
|rotateZ|deg|deg的范围-180~180，在Z轴旋转一个deg角度|
|rotateZ|deg|deg range -180~180, rotate a deg angle on the Z axYes|
|rotate3d|(x,y,z,deg)|同[transform-function rotate3d](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate3d)|

缩放：
Zoom:

|方法|参数|说明|
|method|parameters|description|
|---|---|---|
|scale|sx,[sy]|一个参数时，表示在X轴、Y轴同时缩放sx倍数；两个参数时表示在X轴缩放sx倍数，在Y轴缩放sy倍数|
|scale|sx,[sy]|With one parameter, it means to scale the sx multiple on the X-axis and Y-axis at the same time; with two parameters, it means to scale the sx multiple on the X-axis and the sy multiple on the Y-axYes|
|scaleX|sx|在X轴缩放sx倍数|
|scaleX|sx|Scale sx times on the X axYes|
|scaleY|sy|在Y轴缩放sy倍数|
|scaleY|sy|Scale the sy factor on the Y axYes|
|scaleZ|sz|在Z轴缩放sz倍数|
|scaleZ|sz|Scales the z-axis by a factor of sz|
|scale3d|(sx,sy,sz)|在X轴缩放sx倍数，在Y轴缩放sy倍数，在Z轴缩放sz倍数|
|scale3d|(sx,sy,sz)|Scale the sx multiplier on the X axis, the sy multiplier on the Y axis, and the sz multiplier on the Z axYes|

偏移：
Offset:

|方法|参数|说明|
|method|parameters|description|
|---|---|---|
|translate|tx,[ty]|一个参数时，表示在X轴偏移tx，单位px；两个参数时，表示在X轴偏移tx，在Y轴偏移ty，单位px。|
|translate|tx,[ty]|When one parameter is used, it means the offset tx on the X axis, the unit is px; when there are two parameters, it means the offset is tx on the X axis and ty on the Y axis, the unit is px. |
|translateX|tx|在X轴偏移tx，单位px|
|translateX|tx|Offset tx on the X axis, in px|
|translateY|ty|在Y轴偏移ty，单位px|
|translateY|ty|Offset ty on the Y axis, in px|
|translateZ|tz|在Z轴偏移tz，单位px|
|translateZ|tz|Offset tz on the Z axis, in px|
|translate3d|(tx,ty,tz)|在X轴偏移tx，在Y轴偏移ty，在Z轴偏移tz，单位px|
|translate3d|(tx,ty,tz)|Offset tx on the X axis, ty on the Y axis, tz on the Z axis, unit px|

倾斜：
tilt:

|方法|参数|说明|
|method|parameters|description|
|---|---|---|
|skew|ax,[ay]|参数范围-180~180；一个参数时，Y轴坐标不变，X轴坐标延顺时针倾斜ax度；两个参数时，分别在X轴倾斜ax度，在Y轴倾斜ay度|
|skew|ax,[ay]|The parameter range is -180~180; when there is one parameter, the Y-axis coordinate remains unchanged, and the X-axis coordinate is inclined by ax degrees clockwise; when there are two parameters, the X-axis is inclined by ax degrees, respectively. Y-axis tilt ay degrees |
|skewX|ax|参数范围-180~180；Y轴坐标不变，X轴坐标延顺时针倾斜ax度|
|skewX|ax|The parameter range is -180~180; the Y-axis coordinates remain unchanged, and the X-axis coordinates extend clockwise by ax degrees|
|skewY|ay|参数范围-180~180；X轴坐标不变，Y轴坐标延顺时针倾斜ay度|
|skewY|ay|The parameter range is -180~180; the X-axis coordinates remain unchanged, and the Y-axis coordinates extend clockwise by ay degrees|

矩阵变形：
Matrix deformation:

|方法|参数|说明|
|method|parameters|description|
|---|---|---|
|matrix|(a,b,c,d,tx,ty)|同	[transform-function matrix](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix)|
|matrix3d||同[transform-function matrix3d](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d)|

**动画队列**
**Animation queue**

调用动画操作方法后要调用 ```step()``` 来表示一组动画完成，可以在一组动画中调用任意多个动画方法，一组动画中的所有动画会同时开始，一组动画完成后才会进行下一组动画。```step``` 可以传入一个跟 ```uni.createAnimation()``` 一样的配置参数用于指定当前组动画的配置。
After calling the animation operation method, call ```step()``` to indicate that a group of animations is completed. You can call any number of animation methods in a group of animations. All animations in a group of animations will start at the same time, and a group of animations will start at the same time. The next set of animations will not proceed until it is complete. ```step```` can pass a configuration parameter same as ``uni.createAnimation()``` to specify the configuration of the current group animation.

**示例代码**
**Sample code**

```html
<view :animation="animationData" style="background:red;height:100rpx;width:100rpx"></view>
```

```javascript
export default{
  data() {
    return {
      animationData: {}
    }
  },
  onShow: function(){
    var animation = uni.createAnimation({
      duration: 1000,
        timingFunction: 'ease',
    })

    this.animation = animation

    animation.scale(2,2).rotate(45).step()

    this.animationData = animation.export()

    setTimeout(function() {
      animation.translate(30).step()
      this.animationData = animation.export()
    }.bind(this), 1000)
  },
  methods:{
    rotateAndScale: function () {
      // 旋转同时放大
      // Rotate while zooming in
      this.animation.rotate(45).scale(2, 2).step()
      this.animationData = this.animation.export()
    },
    rotateThenScale: function () {
      // 先旋转后放大
      // first rotate and then zoom in
      this.animation.rotate(45).step()
      this.animation.scale(2, 2).step()
      this.animationData = this.animation.export()
    },
    rotateAndScaleThenTranslate: function () {
      // 先旋转同时放大，然后平移
      // Rotate and zoom in first, then translate
      this.animation.rotate(45).scale(2, 2).step()
      this.animation.translate(100, 100).step({ duration: 1000 })
      this.animationData = this.animation.export()
    }
  }
}
```