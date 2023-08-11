# uni-app x 性能优化

Android开发，其性能优化和web开发有几处不同，需要注意：

## Android对dom的数量和层次更苛刻

dom数量越多，渲染越慢。

以日历为例，web开发一般是每天一个view，里面再嵌套农历、假日等，一个日历可能有几百个dom元素。如果Android上这么做，会非常卡。

那么原生Android开发怎么做的呢？使用Android的开发者模式审查元素边界，可以发现rom自带的日历，并不是每个格子一个view，而是整个月都是一个view。

![]()

Android上为了避免view数量过多，提供了原始的draw api，把线条和文字绘制上去。

在 uni-app x 中，也提供了同样的方法，允许开发者调用绘制API。

hello uni-app x 示例中，有一个日历的模板页面，就是通过draw api来绘制的，性能非常高。[源码详见](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/master/pages/template/calendar/calendar.uvue)

尤其是组件作者，更需要关注dom数量的问题。

再举一个例子，uni-app x 内部开发基础组件时，第一个版本的slider组件，使用了7个view，利用view的移动和不同颜色view的width变化来实现。当页面中有100个slider时，会变成非常卡。

后来 slider组件改为 draw api 实现，只需要一个view。与许多原生应用相比，uni-app x的 slider组件性能更优秀。

uni-app x还提供了工具帮助开发者监控页面的dom数量。

HBuilderX真机运行到Android时，每个页面进入时会都打印页面初始化的数据：dom数量、排版次数、渲染耗时等。

![]()

当然耗时数据不能以真机运行为准，调试基座因为热更新和sourcemap追踪等很多调试功能，导致性能比真实打包差。正式打包后性能更优。

## 界面元素动画

动画，分不跟随手势的固定动画，和跟随手势的动效两种。

固定动画使用css transition动画，或者使用 [animation-view组件](https://ext.dcloud.net.cn/plugin?id=10674)，这个组件本质是lottie动画。

跟随手势的动效，需要写逻辑代码。

uni-app x中，没有通信阻塞，可以直接监听touch和滚动事件。不再需要renderjs、bindingx、wxs、worklet动画这些为了解决通信阻塞的补丁技术。

在touch和滚动事件中，移动dom元素时，有2个注意：
1. 请使用transition方式，而不是给dom的left/top/width/height等position参数重新赋值。这个在web开发也一样，直接改position参数不如使用transition。因为每次修改position参数都要过排版，而transition不用。
2. 请拿到dom的ref，调用js api操作，而不是通过模板style绑定data操作。因为操作data需要vue框架做diff对比。在touch和滚动中，16毫秒一帧才能达到最平滑的效果，多了几毫秒就可能掉帧。

在大多数开发框架中，吸顶这个行为需要底层封装。uni-app x无需特别封装，直接监听滚动事件，通过dom的transition方式动态修改top值，就能在指定条件下实现固顶。
源码参考hello uni-app x中的吸顶示例，[详见](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/master/pages/template/scroll-sticky/scroll-sticky.uvue)

## 避免复杂逻辑卡UI

开发者的代码默认是在ui主线程运行的。除非单独写代码调用子进程或协程。

如果在ui繁忙时，比如页面进入动画时，开发者的代码做了很多耗时操作，会卡动画。这个原生开发也如此。

页面的onload触发，和进入动画是同时发生的，所以需注意onload生命周期中代码的编写。

由于uni-app x提供的联网和图片加载是在单独进程或协程中的，所以这2个行为不会卡ui。

如果onload里某些代码卡了进入动画，也可以挪到页面的onready生命周期中，该事件触发的更晚一些。

页面dom元素过多的话，也会影响进入动画，所以尽量节省dom数量。

## 长列表

uvue页面模板里，list-view组件使用v-for来循环添加list-item，自动就是recycle-view的。无论多长的列表，系统也会自动回收和节约资源，和原生应用一样的体验，但开发更简单。

请避免使用其他方式构建长列表，比如scroll-view。

另外注意list-item里的组件数量，它是dom元素的放大器。每个list-item里的dom数量多一点，页面性能就很容易被拖垮。


##优化排版效率
1. 排版性能的高低和dom元素多少层级样式有直接关系优化dom层级结构可以提高排版性能
2. 明确的宽高的可以提高排版性能
3. 指定主轴方向的尺寸可以减少递归的深度
4. 文字测量属于耗时操作指定宽高可以减少测量耗时
5. 使用百分比时父亲节点有明确宽高或者不依赖子节点确定宽高可以减少测量耗时
6. 指定图片的尺寸信息可以减少排版次数
