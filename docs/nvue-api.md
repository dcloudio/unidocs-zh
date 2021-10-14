
## dom


对于那些不依赖 UI 交互的原生功能，nvue将其封装成模块，这是一种通过 javascript 调用原生能力的方法。
- uni-app默认内置集成原生模块，如：BindingX，animation， DOM.addRule等。
  通过```uni.requireNativePlugin```引入 App 原生插件

  
```js
//使用方式
	const PluginName = uni.requireNativePlugin(PluginName); // PluginName 为原生插件名称
```
  
  
 - 支持项目nativeplugins目录下和插件市场原生云打包的第三方原生插件。你可以将已有原生模块移植到nvue平台也很方便。
  使用方式：在manifest.json->App原生插件配置->选择本地插件或者云端插件->打自定义基座才能使用。[详见](/api/extend/native-plugin.md)
  
 - nvue还支持uni-app的js API接口，若无特殊说明，则表示vue文件和nvue文件均支持。[详见](/api/README)。
  
 - nvue 里不支持的 uni-app API，[详见](/nvue-api?id=nvue-里不支持的-uni-app-api)



### addRule

Weex provide the ability of loading custom through DOM.addRule. Developers can load iconfont and custom font by specifying the font-family.

Developers may use the following code snippet to load their font:
``` html
	<template>
		<view>
			<text class="my-iconfont">&#xe85c;</text>	
		</view>
	</template>
	<script>
		export default{
			beforeCreate() {
				const domModule = uni.requireNativePlugin('dom')
				domModule.addRule('fontFace', {
					'fontFamily': "myIconfont",
					'src': "url('http://at.alicdn.com/t/font_2234252_v3hj1klw6k9.ttf')"
				});
			}
		}
	</script>
	<style>
		.my-iconfont {
			font-family:myIconfont;
			font-size:60rpx;
			color: #00AAFF;
		}
	</style>
	
	
```

<img width="300px" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/18870440-30a9-11eb-bd01-97bc1429a9ff.PNG" />


**addRule(type, contentObject)**
- @fontFace You should not change this as this is the name of the font rule
- @fontFamily You should provide the name of your font-family there, the valid name should be a string.
- @src The src of your custom font, and url('') is reserved for protocol reason, the supported parameters are listed below:
	- `http`. Read from http, e.g. `url('http://at.alicdn.com/t/font_1469606063_76593.ttf')`
  - `https`. Read from https, e.g. `url('https://at.alicdn.com/t/font_1469606063_76593.ttf')`
  - `local`, *Android ONLY*. Read from assets directory e.g. `url('local://foo.ttf')`, the **foo.ttf** is in your android assets directory.
  - `file`. Read from a local file, e.g. `url('file://storage/emulated/0/Android/data/com.alibaba.weex/cache/http:__at.alicdncom_t_font_1469606063_76593.ttf')`
  - `data`. Read from a base64 data source, e.g. `url('data:font/truetype;charset=utf-8;base64,AAEAAAALAIAAAwAwR1NVQrD+....')`, the above data field is only a part of the actual data.
	
**注意**
> You can name `fontFamily` in `addRule` as you wish in your page, any string is OK. But this is not the real font-family name of the font file. The real name or system name for the font is stored in binrary data of ttf file. You must ensure that the real font-family name of font file is unique. Or your font may not be successfully registered to device and your text may display as a '?'.
> Specially, if you are using http://www.iconfont.cn/ to build your iconfont. Make sure that you set a unique enough font-family name for your font in project settings.
> Calling `addRule` in `beforeCreate` is recommended.



### scrollToElement<div id="scrollToElement"></div>

Scroll the scrollable component to the referenced component. This API should only be used in the children components of a scrollable component, such as in a `<scroller>` or `<list>` component.

**scrollToElement(ref, options)**
- @ref, the referenced component who is meant to scroll into the view.
- @options,
	- `offset`, an space on top of the ref component, which is also scrolling down to the visual viewport. Default is `0`.
	- `animated`, a boolean indicates whether a scroll animation should be played. If set to false, the ref component will jump into the view without any transition animation. Default is true.

``` html
  <template>
    <view class="wrapper">
      <scroller class="scroller">
        <view class="row" v-for="(name, index) in rows" :ref="'item'+index">
          <text class="text" :ref="'text'+index">{{name}}</text>
        </view>
      </scroller>
      <view class="group">
        <text @click="goto10" class="button">Go to 10</text>
        <text @click="goto20" class="button">Go to 20</text>
      </view>
    </view>
  </template>
  <script>
    const dom = uni.requireNativePlugin('dom')
    export default {
      data() {
        return {
          rows: []
        }
      },
      created() {
        for (let i = 0; i < 30; i++) {
          this.rows.push('row ' + i)
        }
      },
      methods: {
        goto10(count) {
          const el = this.$refs.item10[0]
          dom.scrollToElement(el, {})
        },
        goto20(count) {
          const el = this.$refs.item20[0]
          dom.scrollToElement(el, {
            offset: 0
          })
        }
      }
    }
  </script>
  <style scoped>
    .scroller {
      width:700rpx;
      height:500px;
      border-width: 3px;
      border-style: solid;
      border-color: rgb(162, 217, 192);
      margin:0 25rpx;
    }
    .row {
      height: 100rpx;
      flex-direction: column;
      justify-content: center;
      padding-left: 30rpx;
      border-bottom-width: 2px;
      border-bottom-style: solid;
      border-bottom-color: #DDDDDD;
    }
    .text {
      font-size: 45rpx;
      color: #666666;
    }
    .group {
      flex-direction: row;
      justify-content: center;
      margin-top: 60rpx;
    }
    .button {
      width: 200rpx;
      padding-top: 20rpx;
      padding-bottom: 20rpx;
      font-size: 40rpx;
      margin-left: 30rpx;
      margin-right: 30rpx;
      text-align: center;
      color: #41B883;
      border-width: 2px;
      border-style: solid;
      border-color: rgb(162, 217, 192);
      background-color: rgba(162, 217, 192, 0.2);
    }
  </style>

```



<img width="300px" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/a3478060-33c8-11eb-880a-0db19f4f74bb.gif" />

### getComponentRect

You can get the bounding rect of the referenced component using this API.

**getComponentRect(ref, callback)**
- @ref, the referenced component.
- @callback, the callback function after executing this action.

An example callback result should be like:
```html
  {
    result: true,
    size: {
        bottom: 60,
        height: 15,
        left: 0,
        right: 353,
        top: 45,
        width: 353
    }
  }
```



> 此方法需要在节点渲染后调用才能获取正确的信息，可在 mounted 或 更新数据后 updated 中调用
> 
> If you want to get the bounding rect of outside viewport of the weex container, you can specify the `ref` as a literal string `'viewport'`, like `getComponentRect('viewport', callback)`.



## animation

The `animation` module is used to perform animation on components.
JS-Animation can perform a series of simple transformations  (position, size, rotation, background color, and opacity) on the component with Javascript.

For example, if you have a `image` component, you can move, rotate, grow, or shrink it by animation.

```html
  <template>
    <view class="box">
      <view ref="test" @click="move" class="box-item"></view>
    </view>
  </template>
  <script>
      const animation = uni.requireNativePlugin('animation')
      export default {
          methods: {
              move() {
                  var testEl = this.$refs.test;
                  animation.transition(testEl, {
                      styles: {
                          backgroundColor: '#007AFF',
                          transform: 'translate(100px, 80px)',
                          transformOrigin: 'center center'
                      },
                      duration: 800, //ms
                      timingFunction: 'ease',
                      delay: 0 //ms
                  },()=>{
                      uni.showToast({
                          title: 'finished',
                          icon:'none'
                      });
                  })
              }
          }
      }
  </script>
  <style scoped>
    .box{
        width:750rpx;
        height:750rpx;
    }
    .box-item{
      width: 250rpx;
      height: 250rpx;
      background-color: #00aaff;
    }
  </style>
```


<img width="300px" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/1852eff0-312d-11eb-8ff1-d5dcf8779628.gif" />




### transition


- @ref, the element that will be animated. For example, if the value of `ref` for an element is `test`, you can start an animation with `this.$refs.test`.
- @options, animation properties such as keys, duration.


下表列出了options所有合法的参数：

|Property		|Describe		|
|--			|--			|
|styles	|specifies the names and values of styles to which a transition effect should be applied.|
|duration		|specifies the duration of animation execution, the default value is `0`, meaning that the component get the desired property immediately.																																				|
|delay			|specifies the waiting time before the animation starts. The default value is `0`. 																												|
|needLayout		|Specifies whether the change to layout(width/height/etc..) is persistence and takes affect after the animation. Default value is `false`|
|timingFunction	|describes how the intermediate values are calculated for the CSS properties being affected by the animation effect. default value is `linear`						|


The supported styles are listed below:

|Property		|Describe		|
|--			|--			|
|width	|表示动画执行后应用到组件上的宽度值。如果你需要影响布局，设置needLayout为true。默认值为computed width。|
|height		|表示动画执行后应用到组件上的高度值。如果你需要影响布局，设置设置为 needLayout为true。默认值为computed width。		|
|backgroundColor	|动画执行后应用到组件上的背景颜色，默认值为computed backgroundColor。
|opacity		|表示动画执行后应用到组件上的不透明度值，默认值为computed opacity。																																						|
|transformOrigin|`transformOrigin` 定义变化过程的中心点，如transformOrigin: x-axis y-axis 参数 x-axis 可能的值为 left、center、right、长度值或百分比值，参数 y-axis 可能的值为 top、center、bottom、长度值或百分比。默认值为center center。|
|transform		| `transform` 变换类型，可能包含rotate，translate，scale及其他属性。默认值为空。详见下																																			|


**transform** 

|Property							|Describe																					|
|--								|--																						|
|translate/translateX/translateY|指定元素要移动到的位置。单位是长度或百分比，默认值是0.									|
|rotate/rotateX/rotateY			|v0.16+ 指定元素将被旋转的角度。单位是度 角度度，默认值是0								|
|scale/scaleX/scaleY			|按比例放大或缩小元素。单位是数字，默认值是1											|
|perspective					|v0.16+ 观察者距离z=0平面的距离，在Android 4.1及以上有效。单位值数字，默认值为正无穷。	|




**timingFunction**

|Property		|Describe		|
|--			|--			|
|linear	|动画从头到尾的速度是相同的	|
|ease-in		|动画速度由慢到快				|
|ease-out		|动画速度由快到慢			|
|ease-in-out		|动画先加速到达中间点后减速到达终点			|
|cubic-bezier(x1, y1, x2, y2)		|在三次贝塞尔函数中定义变化过程，函数的参数值必须处于 0 到 1 之间。更多关于三次贝塞尔的信息请参阅 cubic-bezier 和 Bézier curve。|

- @callback, callback is a function called after the completion of animation. In iOS platform, you can use function to get information of animation execution.


**Notes**
- On iOS platform you can get animation's message about completion, there are two types of parameters with `result`, is `Success`and `Fail`, Android can not support until now.
- Android doesn't support the result parameter.


> 如果需要使用CSS动画，参考[transition](/nvue-css?id=transition)和[transform](/nvue-css?id=transform)。





## nvue 里使用 BindingX

`uni-app` 是逻辑层和视图层分离的。此时会产生两层通信成本。比如拖动视图层的元素，如果在逻辑层不停接收事件，因为通信损耗会产生不顺滑的体验。

[BindingX](https://alibaba.github.io/bindingx/) 是weex提供的一种预描述交互语法。由原生解析BindingX规则，按此规则处理视图层的交互和动效。不再实时去js逻辑层运行和通信。

BindingX类似一种强化版的css，运行性能高，但没有js那样足够强的编程灵活性。

`uni-app` 内置了 BindingX，可在 `nvue` 中使用 BindingX 完成复杂的动画效果。

- 从HBuilderX 2.3.4起，`uni-app` 编译模式可直接引用 `uni.requireNativePlugin('bindingx')` 模块，weex 模式还需使用 npm 方式引用。

- BindingX demo示例可参考 BindingX 示例里 vue 的相关示例，将实验田里的 vue 代码拷贝到 `nvue` 文件里即可。


##### 注意

- 暂时不要在 `expression` 内使用 `origin` 


##### 代码示例:

```html
	<template>
	    <div class="container">
	        <div ref="b1" class="btn" style="background-color:#6A1B9A" @click="clickBtn">
	            <text class="text">A</text>
	        </div>
	        <div ref="b2" class="btn" style="background-color:#0277BD" @click="clickBtn">
	            <text class="text">B</text>
	        </div>
	        <div ref="b3" class="btn" style="background-color:#FF9800" @click="clickBtn">
	            <text class="text">C</text>
	        </div>
	        <div ref="main_btn" class="btn" @click="clickBtn">
	            <image class="image" ref="main_image" src="https://gw.alicdn.com/tfs/TB1PZ25antYBeNjy1XdXXXXyVXa-128-128.png" />
	        </div>
	    </div>
	</template>
	<script>
	    const Binding = uni.requireNativePlugin('bindingx');
	    module.exports = {
	        data() {
	            return {
	                isExpanded: false
	            }
	        },
	        methods: {
	            getEl: function(el) {
	                if (typeof el === 'string' || typeof el === 'number') return el;
	                if (WXEnvironment) {
	                    return el.ref;
	                } else {
	                    return el instanceof HTMLElement ? el : el.$el;
	                }
	            },
	            collapse: function() {
	                let main_btn = this.getEl(this.$refs.main_btn);
	                let main_image = this.getEl(this.$refs.main_image);
	                let b1 = this.getEl(this.$refs.b1);
	                let b2 = this.getEl(this.$refs.b2);
	                let b3 = this.getEl(this.$refs.b3);
	                let main_binding = Binding.bind({
	                    eventType: 'timing',
	                    exitExpression: 't>800',
	                    props: [{
	                        element: main_image,
	                        property: 'transform.rotateZ',
	                        expression: 'easeOutQuint(t,45,0-45,800)'
	
	                    }, {
	                        element: main_btn,
	                        property: 'background-color',
	                        expression: "evaluateColor('#607D8B','#ff0000',min(t,800)/800)"
	                    }]
	                }, function(res) {
	                    if (res.state === 'exit') {
	                        Binding.unbind({
	                            token: main_binding.token,
	                          eventType: 'timing'
	                        })
	                    }
	                });
	                let btn_binding = Binding.bind({
	                    eventType: 'timing',
	                    exitExpression: 't>800',
	                    props: [{
	                        element: b1,
	                        property: 'transform.translateY',
	                        expression: "easeOutQuint(t,-150,150,800)"
	                    }, {
	                        element: b2,
	                        property: 'transform.translateY',
	                        expression: "t<=100?0:easeOutQuint(t-100,-300,300,700)"
	                    }, {
	                        element: b3,
	                        property: 'transform.translateY',
	                        expression: "t<=200?0:easeOutQuint(t-200,-450,450,600)"
	                    }]
	                }, function(res) {
	                    if (res.state === 'exit') {
	                        Binding.unbind({
	                            token: btn_binding.token,
	                          eventType: 'timing'
	                        })
	                    }
	                })
	            },
	            expand: function() {
	                let main_btn = this.getEl(this.$refs.main_btn);
	                let main_image = this.getEl(this.$refs.main_image);
	                let b1 = this.getEl(this.$refs.b1);
	                let b2 = this.getEl(this.$refs.b2);
	                let b3 = this.getEl(this.$refs.b3);
	                let main_binding = Binding.bind({
	                    eventType: 'timing',
	                    exitExpression: 't>100',
	                    props: [{
	                        element: main_image,
	                        property: 'transform.rotateZ',
	                        expression: 'linear(t,0,45,100)'
	                    }, {
	                        element: main_btn,
	                        property: 'background-color',
	                        expression: "evaluateColor('#ff0000','#607D8B',min(t,100)/100)"
	                    }]
	                }, function(res) {
	                    if (res.state === 'exit') {
	                        Binding.unbind({
	                            token: main_binding.token,
	                          eventType: 'timing'
	                        })
	                    }
	                });
	                let btn_binding = Binding.bind({
	                    eventType: 'timing',
	                    exitExpression: 't>800',
	                    props: [{
	                        element: b1,
	                        property: 'transform.translateY',
	                        expression: "easeOutBounce(t,0,0-150,800)"
	                    }, {
	                        element: b2,
	                        property: 'transform.translateY',
	                        expression: "t<=100?0:easeOutBounce(t-100,0,0-300,700)"
	                    }, {
	                        element: b3,
	                        property: 'transform.translateY',
	                        expression: "t<=200?0:easeOutBounce(t-200,0,0-450,600)"
	                    }]
	                }, function(res) {
	                    if (res.state === 'exit') {
	                        Binding.unbind({
	                            token: btn_binding.token,
	                          eventType: 'timing'
	                        })
	                    }
	                })
	            },
	            clickBtn: function(e) {
	                if (this.isExpanded) {
	                    this.collapse();
	                } else {
	                    this.expand();
	                }
	                this.isExpanded = !this.isExpanded;
	            }
	        }
	    }
	</script>
	<style>
	    .container {
	        flex: 1;
	    }
	    .image {
	        width: 60px;
	        height: 60px;
	    }
	    .text {
	        color: #ffffff;
	        font-size: 30px;
	    }
	    .btn {
	        width: 100px;
	        height: 100px;
	        background-color: #ff0000;
	        align-items: center;
	        justify-content: center;
	        position: absolute;
	        border-radius: 50px;
	        bottom: 25px;
	        right: 25px;
	    }
	</style>
```

<img width="300px" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/6c9f84b0-30a6-11eb-880a-0db19f4f74bb.gif" />






## nvue 和 vue 相互通讯@communication
在 uni-app 中，nvue 和 vue 页面可以混搭使用。

推荐使用 ```uni.$on``` , ```uni.$emit``` 的方式进行页面通讯，旧的通讯方式不再推荐使用。

##### 通讯实现方式

```javascript
	// 接收信息的页面
	// $on(eventName, callback)  
	uni.$on('page-popup', (data) => {  
	    console.log('标题：' + data.title)
	    console.log('内容：' + data.content)
	})  
	
	// 发送信息的页面
	// $emit(eventName, data)  
	uni.$emit('page-popup', {  
	    title: '我是title',  
	    content: '我是content'  
	});
```

**使用此页面通讯时注意事项：要在页面卸载前，使用 uni.$off 移除事件监听器。**[参考](https://uniapp.dcloud.io/collocation/frame/communication?id=off)

### nvue 向 vue 通讯（已过期，推荐使用上面的uni.$on、uni.$emit）

##### 步骤：

1. 在 nvue 使用 uni.postMessage(data) 发送数据通讯，data 为 JSON 格式（键值对的值仅支持String）。
2. 在 App.vue 里使用 onUniNViewMessage 进行监听。

##### 代码示例:
```html
	//test.nvue
	<template>
	    <view @click="test">
	        <text>点击页面发送数据</text>
	    </view>
	</template>
	<script>
	    export default {
	        methods: {
	            test(e) {
	                uni.postMessage({test: "数据",value:"数据"});
	            }
	        }
	    }
	</script>
```

```html
	//App.vue
	<script>
	    export default {
	        onUniNViewMessage:function(e){
				console.log("App.vue收到数据")
				console.log(JSON.stringify(e.data))  
	        },
	        onLaunch: function() {
	            console.log('App Launch');
	        }
	    }
	</script>
```

## vue 和 nvue 共享的变量和数据@sharevar

除了通信事件，vue 和 nvue 页面之间还可以共享变量和存储。 ```uni-app```提供的共享变量和数据的方案如下：

1. **vuex:** 自HBuilderX 2.2.5起，nvue支持```vuex```。这是vue官方的状态管理工具。
> 注意：不支持直接引入```store```使用，可以使用```mapState```、```mapGetters```、```mapMutations```等辅助方法或者使用```this.$store```
2. **uni.storage:**
	- vue和nvue页面可以使用相同的```uni.storage```存储。这个存储是持久化的。 比如登录状态可以保存在这里。
3. **globalData:** ```globalData```机制全端通用。 在App.vue文件里定义```globalData```，如下：

```javascript
	<script>  
	    export default {  
	        globalData: {  
	            text: 'text'  
	        },  
	        onLaunch: function() {  
	            console.log('App Launch')  
	        },  
	        onShow: function() {  
	            console.log('App Show')  
	        },  
	        onHide: function() {  
	            console.log('App Hide')  
	        }  
	    }  
	</script>
```


- js中操作```globalData```的方式如下： ```getApp().globalData.text = 'test'```
- 如果需要把```globalData```的数据绑定到页面上，可在页面的onShow声明周期里进行变量重赋值。

## nvue 里不支持的 uni-app API
nvue 支持大部分 uni-app API ，下面只列举目前还**不支持的 API** 。

##### 动画

|API		|Describe		|解决方案|
|--			|--			|--			|
|uni.createAnimation()	|创建一个动画实例	|[animation](/nvue-api?id=animation)|


##### 滚动

|API		|Describe		|解决方案|
|--			|--			|--			|
|uni.pageScrollTo()	|将页面滚动到目标位置	|[scrollToElement](#scrollToElement)|


##### 节点布局交互

|API		|Describe		|
|--			|--			|
|uni.createIntersectionObserver()	|创建并返回一个 IntersectionObserver 对象实例	|

##### 绘画

canvas API使用，[详见canvas文档](https://uniapp.dcloud.net.cn/api/canvas/createCanvasContext)。


