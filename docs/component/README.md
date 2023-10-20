### 组件使用的入门教程
- 组件是视图层的基本组成单元。
- 组件是一个单独且可复用的功能模块的封装。

每个组件，包括如下几个部分：以组件名称为标记的开始标签和结束标签、组件内容、组件属性、组件属性值。

- 组件名称由尖括号包裹，称为标签，它有开始标签和结束标签。结束标签的`<`后面用`/`来表示结束。结束标签也称为闭合标签。如下面示例的`<component-name>`是开始标签，`</component-name>`是结束标签。
- 在开始标签和结束标签之间，称为组件内容。如下面示例的`content`
- 开始标签上可以写属性，属性可以有多个，多个属性之间用空格分割。如下面示例的`property1`和`property2`。注意闭合标签上不能写属性。
- 每个属性通过`=`赋值。如下面的示例中，属性`property1`的值被设为字符串`value`。

> 注意：所有组件与属性名都是小写，单词之间以连字符``-``连接。

```html
<component-name property1="value" property2="value">
	content
</component-name>
```

下面是一个基本组件的实例，在一个vue页面的根`<view>`组件下插入一个`<button>`组件。给这个组件的内容区写上文字“按钮”，同时给这个组件设置了一个属性“size”，并且“size”属性的值设为了“mini”。

> 注：按照[vue单文件组件规范](https://cn.vuejs.org/v2/guide/single-file-components.html)，每个vue文件的根节点必须为 `<template>`。
> vue2下，这个 `<template>` 下只能且必须有一个根 `<view>` 组件。vue3不限制。

```html
<template>
	<view>
		<button size="mini">按钮</button>
	</view>
</template>
```

通过了解[button组件](/component/button)的文档，我们知道上述代码将在页面中绘制一个按钮，按钮显示的文字是“按钮”，按钮的大小是小尺寸的。

#### 组件的属性类型

组件的属性，有多种类型：

|类型|描述|注解|
|:-|:-|:-|
|Boolean|布尔值|组件写上该属性，不管该属性等于什么，其值都为 ``true``，只有组件上没有写该属性时，属性值才为 ``false``。如果属性值为变量，变量的值会被转换为 ``Boolean`` 类型。|
|Number|数字|1, 2.5|
|String|字符串|"string"|
|Array|数组|[ 1, "string" ]|
|Object|对象|{ key: value }|
|EventHandler|事件处理函数名|``handlerName`` 是 methods 中定义的事件处理函数名|
|Any|任意属性|&nbsp;|

下面的例子演示了组件的属性设置boolean值和数字的例子。注意`false`作为一个js变量，在组件的属性中使用时，属性前面需增加`:`冒号前缀，属性值仍使用引号包裹，但引号里不是字符串，而是js。

```html
<template>
	<view>
		<button size="mini" :disabled="false" hover-start-time=20 >按钮</button>
	</view>
</template>
```

#### 公共属性列表

每个组件都有各自定义的属性，但所有uni-app的组件，都有如下属性：

|属性名|类型|描述|注解|
|:-|:-|:-|:-|
|id|String|组件的唯一标示|一般用于获取组件上下文对象（如：[VideoContext](/api/media/video-context)），需要保持整个页面唯一|
|ref|String|vue中组件的唯一标示|用来给子组件注册引用信息，详见 [Vue 文档](/vue-components?id=ref)|
|class|String|组件的样式类|在对应的 css 中定义的样式类|
|style|String|组件的内联样式|可以动态设置的内联样式|
|hidden|Boolean|组件是否隐藏|所有组件默认是显示的|
|data-*|Any|自定义属性|组件上触发的事件时，会发送给事件处理函数|
|@\*|EventHandler|组件的事件|详见各组件详细文档，事件绑定参考 [事件处理器](/tutorial/vue-basics?id=事件处理器)|

除了上述公共属性，还有一类特殊属性以`v-`开头，称之为vue指令，如v-if、v-else、v-for、v-model。详见[vue指令](/tutorial/vue-api?id=%e6%a8%a1%e6%9d%bf%e6%8c%87%e4%bb%a4)

#### 在组件中使用script的data变量

组件中可以使用script的data中定义的变量，但组件的属性中使用和内容区使用的用法不一样。

- 在text内容区使用时，使用两个花括号来包裹，如下面的`buttonText`
- 在属性值中使用时，属性名的前面要加冒号前缀

下面的button组件示例，等价于上一个的示例。只不过静态内容改成动态js。

```html
<template>
	<view>
		<button size="mini" :disabled="buttondisble" hover-start-time=20 >{{buttonText}}</button>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				"buttonText":"按钮",
				"buttondisble":false
			}
		}
	}
</script>
```

#### 组件的事件

每个组件都有“事件”。事件就是在指定的条件下触发某个js方法。

比如button组件，有点击事件，也就是当手机用户点击这个button组件时，会触发这个事件。

事件也是组件的属性，只不过这类属性以`@`为前缀。

事件的属性值，指向一个在script的methods里定义过的js方法，还可以给方法传参数。

下面是组件事件的示例：
- click是button组件的点击事件，在用户点击这个button时触发
- click指向了methods中定义的goto方法，并且传递了一个参数'/pages/about/about'

```html
<template>
	<view>
		<button size="mini" @click="goto('/pages/about/about')">按钮</button>
	</view>
</template>
<script>
    export default {
        methods: {
            goto(url) {
                console.log("按钮被点击了，且传入的参数是：" + url)
            }
        }
    }
</script>
```


### 基础组件

uni-app的组件，分为基础组件和扩展组件。

基础组件在uni-app框架中已经内置，无需将内置组件的文件导入项目，也无需注册内置组件，随时可以直接使用，比如`<view>`组件。

除了基础组件，都称为扩展组件。扩展组件需要将组件导入项目中才可以使用。

uni-app为开发者提供了一系列基础组件，类似HTML里的基础标签元素。

但uni-app的组件与HTML不同，而是与小程序相同，可更好的满足手机端的使用习惯。

虽然不推荐使用HTML标签，但实际上如果开发者写了`div`等标签，在编译到非H5平台时也会被编译器转换为`view`标签，类似的还有`span`转`text`、`a`转`navigator`等，包括css里的元素选择器也会转。但为了管理方便、策略统一，新写代码时仍然建议使用view等组件。

开发者可以通过组合这些基础组件进行快速开发。在需要复用的情况下可封装成扩展组件。


`uni-app` 基础组件规范，与小程序规范相近。如果了解小程序开发的话，uni-app的基础组件会感觉很熟悉。但需要注意组件上的事件绑定，需要以 vue 的事件绑定语法来绑定，如 bindchange="eventName" 事件，需要写成 `@change="eventName"`

```html
	<picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="bindDateChange">
		<view class="picker">
		  当前选择: {{date}}
		</view>
	</picker>
```


#### 基础组件列表

基础组件分为以下十几大类：


**视图容器（View Container）：**

|组件名|说明|
|:-|:-|
|[view](/component/view.md)|视图容器，类似于HTML中的div|
|[scroll-view](/component/scroll-view.md)|可滚动视图容器|
|[swiper](/component/swiper.md)|滑块视图容器，比如用于轮播banner|
|[match-media](/component/match-media.md)|屏幕动态适配组件，比如窄屏上不显示某些内容|
|[movable-area](/component/movable-view.md?id=movable-area)|可拖动区域|
|[movable-view](/component/movable-view.md?id=movable-view)|可移动的视图容器，在页面中可以拖拽滑动或双指缩放。movable-view必须在movable-area组件中|
|[cover-view](/component/cover-view?id=cover-view)|可覆盖在原生组件的上的文本组件|
|[cover-image](/component/cover-view?id=cover-image)|可覆盖在原生组件的上的图片组件|

**基础内容（Basic Content）：**

|组件名|说明|
|:-|:-|
|[icon](/component/icon.md)|图标|
|[text](/component/text.md)|文字|
|[rich-text](/component/rich-text.md)|富文本显示组件|
|[progress](/component/progress.md)|进度条|

**表单组件（Form）：**

|标签名|说明|
|:-|:-|
|[button](/component/button.md)|按钮|
|[checkbox](/component/checkbox.md)|多项选择器|
|[editor](/component/editor.md)|富文本输入框|
|[form](/component/form.md)|表单|
|[input](/component/input.md)|输入框|
|[label](/component/label.md)|标签|
|[picker](/component/picker.md)|弹出式列表选择器|
|[picker-view](/component/picker-view.md)|窗体内嵌式列表选择器|
|[radio](/component/radio.md)|单项选择器|
|[slider](/component/slider.md)|滑动选择器|
|[switch](/component/switch.md)|开关选择器|
|[textarea](/component/textarea.md)|多行文本输入框|

**路由与页面跳转（Navigation）：**

|组件名|说明|
|:-|:-|
|[navigator](/component/navigator.md)|页面链接。类似于HTML中的a标签|

**媒体组件（Media）：**

|组件名|说明|
|:-|:-|
|[audio](/component/audio.md)|音频|
|[camera](/component/camera.md)|相机|
|[image](/component/image.md)|图片|
|[video](/component/video.md)|视频|
|[live-player](/component/live-player.md)|直播播放|
|[live-pusher](/component/live-pusher.md)|实时音视频录制，也称直播推流|

**地图（Map）：**

|组件名|说明|
|:-|:-|
|[map](/component/map.md)|地图|

**画布（Canvas）：**

|组件名|说明|
|:-|:-|
|[canvas](/component/canvas.md)|画布|

**webview（Web-view）：**

|组件名|说明|
|:-|:-|
|[web-view](/component/web-view.md)|web浏览器组件|

**广告**

|组件名|说明|
|:-|:-|
|[ad](/component/ad.md)|广告组件|
|[ad-draw](/component/ad-draw.md)|沉浸视频流广告组件|

**页面属性配置**

|组件名|说明|
|:-|:-|
|[custom-tab-bar](/component/custom-tab-bar.md)|底部tabbar自定义组件|
|[navigation-bar](/component/navigation-bar.md)|页面顶部导航|
|[page-meta](/component/page-meta.md)|页面属性配置节点|

**uniCloud**

|组件名|说明|
|:-|:-|
|[unicloud-db组件](/uniCloud/unicloud-db)|uniCloud数据库访问和操作组件|

**各平台专有组件**

在小程序平台和nvue平台，还有一些专有组件，比如open-data，详见左侧导航

### 扩展组件的意义

虽然所有的业务需求都可以通过基础组件满足，但仅有基础组件是低效的，实际开发中会有很多封装的组件。

比如我们需要一个五角星点击评分的组件，在DCloud的插件市场里可以获取到：[https://ext.dcloud.net.cn/plugin?id=33](https://ext.dcloud.net.cn/plugin?id=33)

把这个uni-rate组件导入到你的uni-app项目下，在需要的vue页面里引用它，就可以在指定的地方显示出这个五角星组件。

```html
	<!-- 在index.vue页面引用 uni-rate 组件-->
	<template>
		<view>
			<uni-rate></uni-rate><!-- 这里会显示一个五角星，并且点击后会自动亮星 -->
		</view>
	</template>
```

封装扩展组件的优势：

- 可以将组件进行任意次数的复用。
- 合理的划分组件，有助于提高应用性能。
- 代码更加方便组织和管理，并且扩展性也更强，便于多人协同开发。
- 组件化开发能大幅度提高应用开发效率、测试性、复用性等。

### 组件的类别

uni-app支持的组件分为vue组件和小程序自定义组件。

如果你还不了解这两种组件，可以参阅各自的文档
- vue组件：[文档](https://uniapp.dcloud.net.cn/tutorial/vue-components?id=%e6%a6%82%e5%bf%b5)
- 小程序自定义组件：其规范不是vue规范，而是小程序规范，[文档](https://uniapp.dcloud.net.cn/tutorial/miniprogram-subject.html#小程序自定义组件支持)

日常开发来讲，推荐使用vue组件。uni-app支持小程序组件主要是为了兼容更多生态资源。

如果扩展组件符合uni-app的`easycom`组件规范，则可以免注册，直接使用。比如uni-ui扩展组件就符合`easycom`组件规范。

如果组件不符合easycom规范，则需要在代码里手动import和注册组件，然后才能使用。

除了easycom规范外，扩展组件还有很多概念，比如`uni_module`、`datacom`、`原生组件`、`uniCloud组件`。

接下来一一讲解。

### easycom组件规范@easycom

> `HBuilderX 2.5.5`起支持

传统vue组件，需要安装、引用、注册，三个步骤后才能使用组件。`easycom`将其精简为一步。

只要组件安装在项目的components目录下或`uni_modules`目录下，并符合`components/组件名称/组件名称.(vue|uvue)`目录结构（注意：当同时存在vue和uvue时，uni-app 项目优先使用 vue 文件，而uni-app x 项目优先使用 uvue 文件，[详情](https://uniapp.dcloud.net.cn/uni-app-x/component/#%E5%A6%82%E4%BD%95%E5%BC%80%E5%8F%91%E5%90%8C%E6%97%B6%E5%85%BC%E5%AE%B9-uni-app-x-%E5%92%8C-uni-app-%E7%9A%84%E7%BB%84%E4%BB%B6)）。就可以不用引用、注册，直接在页面中使用。

比如前述举例的[uni-rate组件](https://ext.dcloud.net.cn/plugin?id=33)，它导入到uni-app项目后，存放在了目录/components/uni-rate/uni-rate.vue

同时它的组件名称也叫uni-rate，所以这样的组件，不用在script里注册和引用。
如下：
```html
<template>
		<view>
			<uni-rate></uni-rate><!-- 这里会显示一个五角星，并且点击后会自动亮星 -->
		</view>
	</template>
<script>
	// 这里不用import引入，也不需要在components内注册uni-list组件。template里就可以直接用
	export default {
		data() {
			return {
				
			}
		}
	}
</script>
```

不管components目录下安装了多少组件，`easycom`打包后会自动剔除没有使用的组件，对组件库的使用尤为友好。

组件库批量安装，随意使用，自动按需打包。以官方的`uni-ui`为例，在HBuilderX新建项目界面选择`uni-ui`项目模板，只需在页面中敲u，拉出大量组件代码块，直接选择，即可使用。大幅提升开发效率，降低使用门槛。

在[DCloud插件市场](https://ext.dcloud.net.cn/)下载符合`components/组件名称/组件名称.vue`目录结构的组件，均可直接使用。

`easycom`是自动开启的，不需要手动开启。

如果你的组件名称或路径不符合easycom的默认规范，可以在`pages.json`的`easycom`节点进行个性化设置，自定义匹配组件的策略。[另见](/collocation/pages?id=easycom)

如果不使用easycom，手动引用和注册vue组件，则需要分3步写如下代码：

1. import导入组件
2. components里注册组件
3. template中使用组件

```html
	<template>
		<view>
			<uni-rate text="1"></uni-rate><!-- 3.使用组件 -->
		</view>
	</template>
	<script>
		import uniRate from '@/components/uni-rate/uni-rate.vue';//1.导入组件
		export default {
			components:{uniRate }//2.注册组件
		}
	</script>
```

### uni_module规范

uni_module其实不止服务于组件，它可以服务于组件、js库、页面、项目等所有DCloud插件市场所支持的种类。

符合uni_module规范的组件都在项目的`uni_modules`目录下，以插件id为目录存放。（项目模板不放在`uni_modules`目录下）

在HBuilderX中点右键可方便的更新插件，插件作者也可以方便的上传插件。

uni_module还支持云端一体的插件。

uni_module有详细的专项文档，请另行查阅[uni_module规范](/plugin/uni_modules.html)。

### uniCloud组件

uniCloud是DCloud提供的、配套uni-app的云开发服务。

uni-app的基础组件中，有一个特殊基础组件是：`<unicloud-db>`组件。

它可以在前端直接获取和操作uniCloud的云端数据库。

相关文档详见：[unicloud-db组件](/uniCloud/unicloud-db)

除了内置的数据库组件，在uni-ui扩展库里还有uniCloud的文件选择和上传组件，参考：[uni-file-picker](https://ext.dcloud.net.cn/plugin?id=4079)

### 原生组件和原生插件

#### 基础组件里的原生组件

uni-app的基础组件里，有一批原生组件，如video、map...

这些组件如果用于vue页面，也就是webview渲染时，会造成层级高于普通前端组件的情况。

它们的层级需要使用cover-view等特殊组件才能覆盖，同时在使用中有些需要注意的事情。

在app-nvue里没有这些问题。

相关文档详见：[uni-app内置原生组件说明](/component/native-component)

#### uni-app的App端原生插件

uni-app的App端支持原生插件，这类插件使用iOS或Android原生语言编写，封装成插件，供其他开发者使用js来调用。

原生插件分为原生组件component和原生模块module。

其实原生组件component只能在App-nvue环境中使用。

相关文档详见：[uni-app原生插件开发](https://nativesupport.dcloud.net.cn/NativePlugin/README)

### datacom

datacom组件是一种数据驱动的、可云端一体的组件。

传统组件只涉及前端概念，而datacom拉通了uniCloud云端数据，是uni-app+uniCloud协同开发的必备提效工具。

相关文档详见：[datacom组件](/component/datacom)

### 如何封装组件

封装组件涉及的知识点较多，相关文档详见：[vue组件详解](https://uniapp.dcloud.io/vue-components)


### 扩展组件（uni-ui）@uniui

详见: [uni-ui介绍](/component/uniui/uni-ui.md)
