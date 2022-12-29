# UTS 组件开发

## 1 前置条件

+ HBuilderX 3.6.15 及之后版本

+ 目前仅支持nvue

## 2 组件概述


组件是一种独立，可复用的UI单元，方便单独封装和承担一定的代码逻辑，组件化有利于降低项目的整体工程复杂度和可维护性

UTS组件，即:使用UTS语言在uni平台进行组件开发的技术。 [关于UTS的更多介绍](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)

UTS组件，与传统JS组件区别在于，它秉承了UTS的跨平台特性，统一的UTS语法，具体终端的本地的产出物。

在Android平台会被编译为 Android原生组件，会被渲染为Android原生View实例.IOS或其他平台也是如此。


## 3 如何开发组件-举个例子

以lottie动画组件为例,示例的源码可以在Hello UTS 中找到


#### 3.1 目录结构

组件的目录结构和插件一样：

![生命周期](https://native-res.dcloud.net.cn/images/uts/component/image1.png)

入口文件是index.vue


#### 3.2 示例代码简介

```uts

    //原生提供以下属性或方法的实现  
    export default {
		/**
		 * 组件名称，也就是开发者使用的标签
		 */
        name: "xxx-view",
        /**
         * 组件涉及的事件声明
         */
        emits: ['bindended'],
        props: {
            /**
             * 属性A：propA  需要声明属性类型和默认值
             */
            "propA": {
                type: String,
                default: ""
            },
        },
        data() {
            return {
            }
        },
        watch: {
            "propA": {
                handler(newPropA: string) {
					// 这里处理属性newPropA 的更新逻辑
                },
                immediate: false //创建时是否通过此方法更新属性，默认值为false  
            },
        },
		// 规则：如果没有配置expose，则methods中的方法均对外暴露，如果配置了expose，则以expose的配置为准向外暴露
		// 只有 `publicMethod` 在实例上可用
		expose: ['publicMethod'],
        methods: {
			publicMethod() {
				doSth(paramA: string) {
					// 这是组件的自定义方法
				}
			},
			privateMethod() {
				doSth(paramA: string) {
					// 这是组件的自定义方法
				}
			}
            
        },
        created() { //创建组件，替换created  

        },
        NVBeforeLoad() { //组件将要创建，对应前端beforeMount  
            //可选实现，这里可以提前做一些操作  
        },
        NVLoad(): View { //创建原生View，必须定义返回值类型（Android需要明确知道View类型，需特殊校验）  
            //必须实现  
            let viewInstance = new View($androidContext)
            return aView
        },
		
        NVLoaded() { //原生View已创建  
			//可选实现，这里可以做后续操作
        },
        NVLayouted() { //原生View布局完成  
            //可选实现，这里可以做布局后续操作  
        },
        NVBeforeUnload() { //原生View将释放  
            //可选实现，这里可以做释放View之前的操作  
        },
        NVUnloaded() { //原生View已释放  
            //可选实现，这里可以做释放View之后的操作  
        },
        unmounted() { //组件销毁  
            //可选实现  
        }
    }

```

#### 3.3 组件开发关键函数


首先开发者需要重点关注的是 NVLoad 函数，开发者需要在这个函数内实现View载体的具体实现

```
let viewInstance = new View($androidContext)
return aView
```

除了组件的基本功能外，组件还以属性和方法的形式为使用者提供额外的功能

组件的开发者，声明属性
```
props: {
	/**
	 * 属性A：propA  需要声明属性类型和默认值
	 */
	"propA": {
		type: String,
		default: ""
	},
},
```

组件使用者，使用属性
```js
 <xxx-view  :propA="自定义属性值" >
 </xxx-view>
```

组件的开发者，定义公开方法

```
methods: {
	publicMethod() {
		doSth(paramA: string) {
			// 这是组件的自定义方法
		}
	}
}
```
组件使用者，使用方法

```js
 // 布局代码
 <xxx-view  ref="xxxView" >
 </xxx-view>
 // 调用代码
 this.$refs["xxxView"].doSth('字符串参数')
```

#### 3.4 使用组件

1  需要自定义基座方能使用

2 不需要特殊引用，直接使用自定义

```js
 <xxx-view  :propA="自定义属性值" ref="当前组件标签">
 </xxx-view>
```




3 调用组件的方法


参考Hello UTS ,源码路径: 

~\pages\SDKIntegration\Lottie\index.nvue


## 4 组件的生命周期


![生命周期](https://native-res.dcloud.net.cn/images/uts/component/image2.png)

+ created：

组件被创建，组件第一个生命周期，在内存中被占用的时候被调用，开发者可以在这里执行一些需要提前执行的初始化逻辑

+ NVBeforeLoad：

组件对应平台的view载体 即将被创建

+ NVLoad：

组件对应平台的view载体 正在被创建，开发者需要重点实现这个函数，声明原生组件被创建出来的过程，以及最终生成的原生组件类型

+ NVLayouted：

组件对应平台的view载体，布局完成

+ NVBeforeUnload：

view载体即将被卸载

资源回收

+ NVUnloaded：

view载体已经被卸载

资源回收

+ unmounted：

view载体被回收

资源回收

## 常见问题
