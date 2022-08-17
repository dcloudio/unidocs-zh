### uni.createAnimation(OBJECT)

创建一个动画实例 [animation](#animation)。调用实例的方法来描述动画。最后通过动画实例的export方法导出动画数据传递给组件的animation属性。
Create an animation instance [animation](#animation). Call the method of the instance to describe the animation. Finally, export the animation data to the animation attribute of the component through the export method of the animation instance.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|HBuilderX 2.0.4+|√|√|√|√|√|x|x|

**注意:**
**Notice:**
- export 方法每次调用后会清掉之前的动画操作
- The export method clears the previous animation operation after each call
- nvue 暂不支持
- not supported by nvue temporarily

**OBJECT参数说明：**
**OBJECT parameter description:**

|参数|类型|必填|默认值|说明|
| Parameter| Type| Required| Defaults| Instruction|
|---|---|---|---|---|
|duration|Integer|否|400|动画持续时间，单位ms|
| duration| Integer| No| 400| Animation duration, in ms|
|timingFunction|String|否|"linear"|定义动画的效果|
| timingFunction| String| No| "linear"| Define the effect of the animation|
|delay|Integer|否|0|动画延迟时间，单位 ms|
| delay| Integer| No| 0| Animation delay time, in ms|
|transformOrigin|String|否|"50% 50% 0"|设置transform-origin||
| transformOrigin| String| No| "50% 50% 0"| Set transform-origin| |

**timingFunction 有效值：**
**timingFunction valid values:**

|值|说明|
| Value| Instruction|
|----|----|
|linear|动画从头到尾的速度是相同的|
| linear| The animation speed is the same from beginning to end|
|ease|动画以低速开始，然后加快，在结束前变慢|
| ease| Animation starts at a low speed, then speeds up, and slows down before ending|
|ease-in|动画以低速开始|
| ease-in| Animation starts at a low speed|
|ease-in-out|动画以低速开始和结束|
| ease-in-out| Animation starts and ends at a low speed|
|ease-out|动画以低速结束|
| ease-out| Animation ends at a low speed|
|step-start|动画第一帧就跳至结束状态直到结束|
| step-start| The first frame of the animation jumps to the end state until the end|
|step-end|动画一直保持开始状态，最后一帧跳到结束状态|
| step-end| The animation keeps the start state all the time, and the last frame jumps to the end state|

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
The animation instance can call the following methods to describe the animation, and it will return itself after the call. It supports the writing mode of chain call.

**animation 对象的方法列表：**
**Method list of animation object:**

样式：
Style:

|方法|参数|说明|
| Method| Parameter| Instruction|
|---|---|---|
|opacity|value|透明度，参数范围 0~1|
| opacity| value| Transparency, with the parameter range being 0~1|
|backgroundColor|color|颜色值|
| backgroundColor| color| Color value|
|width|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值|
| width| length| If you pass in Number, the default length is px. You can pass in other custom units of length|
|height|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值|
| height| length| If you pass in Number, the default length is px. You can pass in other custom units of length|
|top|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值|
| top| length| If you pass in Number, the default length is px. You can pass in other custom units of length|
|left|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值|
| left| length| If you pass in Number, the default length is px. You can pass in other custom units of length|
|bottom|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值|
| bottom| length| If you pass in Number, the default length is px. You can pass in other custom units of length|
|right|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值|
| right| length| If you pass in Number, the default length is px. You can pass in other custom units of length|


旋转：
Rotate:

|方法|参数|说明|
| Method| Parameter| Instruction|
|---|---|---|
|rotate|deg|deg的范围-180~180，从原点顺时针旋转一个deg角度|
| rotate| deg| The range of deg is -180~180. Rotate one deg angle clockwise from the origin point|
|rotateX|deg|deg的范围-180~180，在X轴旋转一个deg角度|
| rotateX| deg| The range of deg is -180~180. Rotate one deg angle around the X axis|
|rotateY|deg|deg的范围-180~180，在Y轴旋转一个deg角度|
| rotateY| deg| The range of deg is -180~180. Rotate one deg angle around the Y axis|
|rotateZ|deg|deg的范围-180~180，在Z轴旋转一个deg角度|
| rotateZ| deg| The range of deg is -180~180. Rotate one deg angle around the Z axis|
|rotate3d|(x,y,z,deg)|同[transform-function rotate3d](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate3d)|
| rotate3d| (x,y,z,deg)| Same as [transform-function rotate3d](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate3d)|

缩放：
Zoom:

|方法|参数|说明|
| Method| Parameter| Instruction|
|---|---|---|
|scale|sx,[sy]|一个参数时，表示在X轴、Y轴同时缩放sx倍数；两个参数时表示在X轴缩放sx倍数，在Y轴缩放sy倍数|
| scale| sx,\[sy]| One parameter indicates scaling sx multiple on the X axis and Y axis at the same time. Two parameters indicate scaling sx multiple on the X axis and scaling sy multiple on the Y axis|
|scaleX|sx|在X轴缩放sx倍数|
| scaleX| sx| Scale sx multiples on the X-axis|
|scaleY|sy|在Y轴缩放sy倍数|
| scaleY| sy| Scale sy multiples on the Y-axis|
|scaleZ|sz|在Z轴缩放sy倍数|
| scaleZ| sz| Scale sy multiples on the Z-axis|
|scale3d|(sx,sy,sz)|在X轴缩放sx倍数，在Y轴缩放sy倍数，在Z轴缩放sz倍数|
| scale3d| (sx,sy,sz)| Scale sx multiple on X axis, sy multiple on Y axis and sz multiple on Z axis|

偏移：
Offset:

|方法|参数|说明|
| Method| Parameter| Instruction|
|---|---|---|
|translate|tx,[ty]|一个参数时，表示在X轴偏移tx，单位px；两个参数时，表示在X轴偏移tx，在Y轴偏移ty，单位px。|
| translate| tx,\[ty]| One parameter indicates shifting tx on the X axis, in px. Two parameters indicate shifting tx on the X axis and ty on the Y axis, in px.|
|translateX|tx|在X轴偏移tx，单位px|
| translateX| tx| Shifting tx on the X axis, in px|
|translateY|ty|在Y轴偏移tx，单位px|
| translateY| ty| Shifting tx on the Y axis, in px|
|translateZ|tz|在Z轴偏移tx，单位px|
| translateZ| tz| Shifting tx on the Z axis, in px|
|translate3d|(tx,ty,tz)|在X轴偏移tx，在Y轴偏移ty，在Z轴偏移tz，单位px|
| translate3d| (tx,ty,tz)| Shifting tx on the X axis, ty on the Y axis, and tz on the Z axis, in px|

倾斜：
Tilt:

|方法|参数|说明|
| Method| Parameter| Instruction|
|---|---|---|
|skew|ax,[ay]|参数范围-180~180；一个参数时，Y轴坐标不变，X轴坐标延顺时针倾斜ax度；两个参数时，分别在X轴倾斜ax度，在Y轴倾斜ay度|
| skew| ax,\[ay]| The range of parameter is -180~180. One parameter indicates that the X axis coordinate inclines ax degrees clockwise with the Y axis coordinates unchanged. Two parameters indicate that X axis coordinate inclines ax degrees and Y axis coordinate inclines ay degrees.|
|skewX|ax|参数范围-180~180；Y轴坐标不变，X轴坐标延顺时针倾斜ax度|
| skewX| ax| The range of parameter is -180~180. The X axis coordinate inclines ax degrees clockwise with the Y axis coordinates unchanged|
|skewY|ay|参数范围-180~180；X轴坐标不变，Y轴坐标延顺时针倾斜ay度|
| skewY| ay| The range of parameter is -180~180. The Y axis coordinate inclines ay degrees clockwise with the X axis coordinates unchanged|

矩阵变形：
Matrix deformation:

|方法|参数|说明|
| Method| Parameter| Instruction|
|---|---|---|
|matrix|(a,b,c,d,tx,ty)|同	[transform-function matrix](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix)|
| matrix| (a,b,c,d,tx,ty)| Same as	[transform-function matrix](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix)|
|matrix3d||同[transform-function matrix3d](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d)|
| matrix3d| | Same as [transform-function matrix3d](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d)|

**动画队列**
**Animation queue**

调用动画操作方法后要调用 ```step()``` 来表示一组动画完成，可以在一组动画中调用任意多个动画方法，一组动画中的所有动画会同时开始，一组动画完成后才会进行下一组动画。```step``` 可以传入一个跟 ```uni.createAnimation()``` 一样的配置参数用于指定当前组动画的配置。
After calling the animation operation method, if you want to call `step()` to indicate the completion of a group of animations, you can call any number of animation methods in a group of animations. All animations in a group of animations will start at the same time, and the next group of animations will be performed after a group of animations is completed. `step` You can pass in a configuration parameter the same as `uni.createAnimation()` to specify the configuration of the current group animation.

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
      //Rotate and zoom in simultaneously
      this.animation.rotate(45).scale(2, 2).step()
      this.animationData = this.animation.export()
    },
    rotateThenScale: function () {
      // 先旋转后放大
      //Rotate first and then zoom in
      this.animation.rotate(45).step()
      this.animation.scale(2, 2).step()
      this.animationData = this.animation.export()
    },
    rotateAndScaleThenTranslate: function () {
      // 先旋转同时放大，然后平移
      //Rotate and zoom in simultaneously, and then pan
      this.animation.rotate(45).scale(2, 2).step()
      this.animation.translate(100, 100).step({ duration: 1000 })
      this.animationData = this.animation.export()
    }
  }
}
```