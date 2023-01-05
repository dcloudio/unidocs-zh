# UTS 组件开发

本文旨在帮助开发者，使用UTS开发Uni-App平台组件功能。


## 1 前置条件

继续阅读文档前，开发者需要了解以下前置条件：

+ HBuilderX 3.6.15 及之后版本

+ 了解Vue 组件基本概念

+ 目前仅支持nvue

## 2 了解UTS组件是什么

### 2.1 UTS组件简介

UTS组件，即:使用UTS语言在uni平台进行组件开发的技术。 [关于UTS](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)


组件是一种独立，可复用的UI单元，用于单独封装和承担一定的代码逻辑，组件化可以降低项目的工程复杂度,提升可维护性



UTS组件整体采用了类Vue组件的语法，[关于Vue组件](https://cn.vuejs.org/guide/essentials/component-basics.html)，但是具体的函数上会有定制，具体参考第四章节。


### 2.2 UTS组件优势

UTS组件的优势在于，它秉承了UTS的跨平台特性，统一的UTS语法，各终端不同的本地产出物。

在Android平台会被编译为会被渲染为Android原生View实例，IOS或其他终端平台也是如此。

|				|Vue组件						|uts组件					|uni原生组件				|
|:------		|:-------					|:--------				|:-------- 				|
|开发语言		|js/ts						|uts					|java/object-c			|
|组件载体		|WebView内部标签				|系统原生View对象		|系统原生View对象		|



## 3 如何开发组件

>本章节提到全部示例源码可以在Hello UTS 中找到


#### 3.1 创建组件

UTS组件的创建过程与UTS插件一样。

选中 项目目录/uni_modules 右键 新建组件  TODO

![目录结构](https://native-res.dcloud.net.cn/images/uts/component/image1.png)


组件的入口文件是index.vue，具体规范会在下一个章节介绍

另外 组件允许存在入口文件：index.uts 对外提供函数能力，具体参考 UTS 插件介绍



#### 3.2 示例代码简介


下面是一个组件源码 index.vue 完整示例：

```ts

    export default {
		/**
		 * 组件名称，也就是开发者使用的标签
		 */
        name: "xxx-view",
        /**
         * 组件涉及的事件声明，只有声明过的事件，才能被正常发送
         */
        emits: ['bindended'],
		/**
		 * 属性声明，组件的使用者会传递这些属性值到组件
		 */
        props: {
            /**
             * 字符串类型 属性：path  默认值:""
             */
            "path": {
                type: String,
                default: ""
            },
        },
		/**
		 * 组件内部变量声明
		 */
        data() {
            return {
            }
        },
		/**
		 * 属性变化监听器实现
		 */
        watch: {
			
            "path": {
                handler(newPath: string) {
					// 这里处理属性newPath 的更新逻辑
                },
				//创建时是否通过此方法更新属性，默认值为false  
                immediate: false 
            },
        },
		
		/**
		 * 规则：如果没有配置expose，则methods中的方法均对外暴露，如果配置了expose，则以expose的配置为准向外暴露
		 * ['publicMethod'] 含义为：只有 `publicMethod` 在实例上可用
		 */
		expose: ['publicMethod'],
        methods: {
			/**
			 * 对外公开的组件方法
			 */
			publicMethod() {
				doSth(paramA: string) {
					// 这是组件的自定义方法
				}
			},
			/**
			 * 内部使用的组件方法
			 */
			privateMethod() {
				doSthInner(paramA: string) {
					// 这是组件的自定义方法
				}
			}
            
        },
		
		/**
		 * 组件被创建，组件第一个生命周期，
		 * 在内存中被占用的时候被调用，开发者可以在这里执行一些需要提前执行的初始化逻辑
		 * [可选实现]
		 */
        created() { 

        },
		/**
		 * 对应平台的view载体即将被创建，对应前端beforeMount  
		 * [可选实现]
		 */
        NVBeforeLoad() {
			
        },
		/**
		 * 创建原生View，必须定义返回值类型
		 * 开发者需要重点实现这个函数，声明原生组件被创建出来的过程，以及最终生成的原生组件类型
		 * （Android需要明确知道View类型，需特殊校验） 
		 * todo 补充IOS平台限制
		 * [必须实现]
		 */
        NVLoad(): View {
            let viewInstance = new View($androidContext)
            return aView
        },
		/**
		 * 原生View已创建 
		 * [可选实现]
		 */
        NVLoaded() {
			
        },
		/**
		 * 原生View布局完成  
		 * [可选实现]
		 */
        NVLayouted() {
            
        },
		/**
		 * 原生View将释放  
		 * [可选实现]
		 */
        NVBeforeUnload() {
        },
		/**
		 * 原生View已释放，这里可以做释放View之后的操作  
		 * [可选实现]
		 */
        NVUnloaded() {
			
        },
		/**
		 * 组件销毁  
		 * [可选实现]
		 */
        unmounted() { 
        }
		/**
		 * 自定组件布局尺寸 
		 * [可选实现]
		 */
		doMeasure(size: UTSSize): UTSSize {
			size.width = 120.0.toFloat()
			size.height = 800.0.toFloat()
			return size
		}
    }

```

index.vue可以分为以下几类：

+ 配置：

	name：组件的使用标签，可以省略，若省略则默认为组件名称
	
	emits：组件允许的消息事件名称，如果没有组件消息，不需要配置

+ 属性：
	
	props：需要由组件的使用者提供，比如一个Image组件，会需要一个path属性作为图像路径来源
	
	watch：属性的监听实现，用来监听属性数据更新。
	
+ 数据：	

	data：组件内部数据定义，用于组件内部逻辑处理，不对外暴露

+ 方法：

	methods：组件方法定义，可以通过与expose组合使用，区分对内方法和对外方法
	
	expose：与methods 字段配合使用，用以区分组件对内方法和对外方法


+ 生命周期：

	组件需要重点处理 内存创建/销毁，View载体创建/销毁 过程中的资源管理，具体参考3.4章节
	
+ 内置对象：
	
	为了方便组件开发者，UTS组件内置了部分变量与函数，具体参考3.5章节


#### 3.4 生命周期 

组件开发者需要重点关注生命周期


![生命周期](https://native-res.dcloud.net.cn/images/uts/component/image2.png)

+ created：

组件被创建，组件第一个生命周期，在内存中被占用的时候被调用，开发者可以在这里执行一些需要提前执行的初始化逻辑

+ NVBeforeLoad：

组件对应平台的view载体 即将被创建

+ NVLoad：

[必须实现]

组件 view载体的创建实现

开发者需要重点实现这个函数，声明原生组件被创建出来的过程，以及最终生成的原生组件类型


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

+ doMeasure：

doMeasure 用于告诉排版系统，组件自身需要的宽高，具体的调用时机由排版系统决定。

一般情况下，组件的宽高应该是由终端系统的排版引擎决定，组件开发者不需要实现此函数。

但是部分场景下，组件开发者需要自己维护宽高，则需要开发者重写此函数



#### 3.5 内置对象和函数

为了方便组件开发者使用，UTS 组件内部内置了下列对象：

|变量名			|类型		|简介					|平台限制	|
|:-------		|:--------	|:--------				|:---		|
|$el			|对象		|当前View实例对象		|全部平台	|
|$androidContext|对象		|当前组件上下文			|仅android	|
|emit("event")	|函数		|发送已注册的事件		|全部平台	|








## 4 使用组件


#### 4.1 注意事项：

1. 需要自定义基座方能使用

2 不需要引用，直接使用自定义标签

```js
 <xxx-view  :propA="自定义属性值" ref="当前组件标签">
 </xxx-view>
```

#### 4.2 属性



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

#### 4.3 方法


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
 <xxx-view  ref="customTag" >
 </xxx-view>
 // 调用代码
 this.$refs["customTag"].doSth('参数')
```


## 5 快速体验


开发者可以使用[Hello UTS](https://gitcode.net/dcloud/hello-uts) 快速体验UTS 组件开发

使用HX 3.6.16 版本 - 选择 Hello UTS - 自定义基座包。

查看：三方SDK-Lottie动画示例,对应的源码实现：~/uni_modules/uts-animation-view



## 常见问题
