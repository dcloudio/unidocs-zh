## 组件使用的入门教程
## Component Usage Tutorial
- 组件是视图层的基本组成单元。
- Components are the basic building blocks of the view layer.
- 组件是一个单独且可复用的功能模块的封装。
- A component is an encapsulation of a standalone and reusable functional module.

每个组件，包括如下几个部分：以组件名称为标记的开始标签和结束标签、组件内容、组件属性、组件属性值。
Each component consists of several parts: a start tag and end tag marked by the component name, component content, component attributes, and attribute values.

- 组件名称由尖括号包裹，称为标签，它有开始标签和结束标签。结束标签的`<`后面用`/`来表示结束。结束标签也称为闭合标签。如下面示例的`<component-name>`是开始标签，`</component-name>`是结束标签。
- The component name is wrapped in angle brackets and is called a tag, which has a start tag and an end tag. The end tag uses `/` after `<` to indicate closure. The end tag is also called a closing tag. For example, `<component-name>` is a start tag, `</component-name>` is an end tag.
- 在开始标签和结束标签之间，称为组件内容。如下面示例的`content`
- The content between the start and end tags is called the component content, such as `content` in the example below.
- 开始标签上可以写属性，属性可以有多个，多个属性之间用空格分割。如下面示例的`property1`和`property2`。注意闭合标签上不能写属性。
- Attributes can be written on the start tag, and there can be multiple attributes separated by spaces, such as `property1` and `property2` in the example below. Note that attributes cannot be written on the closing tag.
- 每个属性通过`=`赋值。如下面的示例中，属性`property1`的值被设为字符串`value`。
- Each attribute is assigned a value using `=`, as in the example below where the value of `property1` is set to the string `"value"`.

> 注意：所有组件与属性名都是小写，单词之间以连字符``-``连接。
> Note: All component and attribute names are lowercase, and words are connected with hyphens `-`.

```html
<component-name property1="value" property2="value">
	content
</component-name>
```

下面是一个基本组件的实例，在一个vue页面的根`<view>`组件下插入一个`<button>`组件。给这个组件的内容区写上文字“按钮”，同时给这个组件设置了一个属性“size”，并且“size”属性的值设为了“mini”。
The following is an example of a basic component. A `<button>` component is inserted inside the root `<view>` component of a vue page. The content area of this component is set to the text "Button" (button), and an attribute "size" is set to "mini".

> 注：按照[vue单文件组件规范](https://cn.vuejs.org/v2/guide/single-file-components.html)，每个vue文件的根节点必须为 `<template>`。
> Note: According to the [Vue Single File Component Specification](https://cn.vuejs.org/v2/guide/single-file-components.html), the root node of each vue file must be `<template>`. In vue2, there must be and only one root `<view>` component under `<template>`. Vue3 has no such restriction.
>
> vue2下，这个 `<template>` 下只能且必须有一个根 `<view>` 组件。vue3不限制。
> In vue2, there must be and only one root `<view>` component under `<template>`. Vue3 has no such restriction.

```html
<template>
	<view>
		<button size="mini">按钮</button>
	</view>
</template>
```

通过了解[button组件](/component/button)的文档，我们知道上述代码将在页面中绘制一个按钮，按钮显示的文字是“按钮”，按钮的大小是小尺寸的。
From the documentation of the [button component](/component/button), we know that the above code will render a button on the page, with the text "按钮" displayed and the button size set to small.

### 组件的属性类型
### Attribute Types of Components

组件的属性，有多种类型：
Component attributes have various types:

|类型|描述|注解|
|Type|Description|Notes|
|:-|:-|:-|
|Boolean|布尔值|组件写上该属性，不管该属性等于什么，其值都为 ``true``，只有组件上没有写该属性时，属性值才为 ``false``。如果属性值为变量，变量的值会被转换为 ``Boolean`` 类型。|
|Boolean|Boolean value|If the attribute is present on the component, its value is always `true` regardless of its assigned value; only if the attribute is not present will it be `false`. If the attribute value is a variable, the variable will be converted to Boolean type.|
|Number|数字|1, 2.5|
|Number|Number|Examples: 1, 2.5|
|String|字符串|"string"|
|String|String|Examples: "string"|
|Array|数组|[ 1, "string" ]|
|Array|Array|Examples: [ 1, "string" ]|
|Object|对象|{ key: value }|
|Object|Object|Examples: { key: value }|
|EventHandler|事件处理函数名|``handlerName`` 是 methods 中定义的事件处理函数名|
|EventHandler|Event handler function name|`handlerName` refers to a function defined in methods|
|Any|任意属性|&nbsp;|
|Any|Any attribute| |

下面的例子演示了组件的属性设置boolean值和数字的例子。注意`false`作为一个js变量，在组件的属性中使用时，属性前面需增加`:`冒号前缀，属性值仍使用引号包裹，但引号里不是字符串，而是js。
The following example demonstrates setting component attributes with Boolean and Number values. Note that when using `false` as a JS variable in a component attribute, a `:` prefix is required before the attribute name. The attribute value is enclosed in quotes, but inside the quotes is JS code, not a string.

```html
<template>
	<view>
		<button size="mini" :disabled="false" hover-start-time=20 >按钮</button>
	</view>
</template>
```

### 公共属性列表
### Common Attribute List

每个组件都有各自定义的属性，但所有uni-app的组件，都有如下属性：
Each component has its own attributes, but all uni-app components share the following attributes:

|属性名|类型|描述|注解|
|Attribute Name|Type|Description|Notes|
|:-|:-|:-|:-|
|id|String|组件的唯一标示|一般用于获取组件上下文对象（如：[VideoContext](/api/media/video-context)），需要保持整个页面唯一|
|id|String|Component's unique identifier|Usually used to obtain the component context object (such as [VideoContext](/api/media/video-context)), must be unique within the page|
|ref|String|vue中组件的唯一标示|用来给子组件注册引用信息，详见 [Vue 文档](/tutorial/vue-components?id=ref)|
|ref|String|Component's unique identifier in Vue|Used to register reference information for child components, see [Vue Documentation](/tutorial/vue-components?id=ref)|
|class|String|组件的样式类|在对应的 css 中定义的样式类|
|class|String|Component's CSS class|Defined in the corresponding CSS|
|style|String|组件的内联样式|可以动态设置的内联样式|
|style|String|Component's inline style|Can be dynamically set|
|hidden|Boolean|组件是否隐藏|所有组件默认是显示的|
|hidden|Boolean|Whether the component is hidden|All components are shown by default|
|data-*|Any|自定义属性|组件上触发的事件时，会发送给事件处理函数|
|data-*|Any|Custom attribute|Data will be sent to the event handler when an event is triggered|
|@\*|EventHandler|组件的事件|详见各组件详细文档，事件绑定参考 [事件处理器](/tutorial/vue-basics?id=事件处理器)|
|@\*|EventHandler|Component event|See detailed documentation for each component, event binding refers to [event handler](/tutorial/vue-basics?id=%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E5%99%A8)|

除了上述公共属性，还有一类特殊属性以`v-`开头，称之为vue指令，如v-if、v-else、v-for、v-model。详见[vue指令](/tutorial/vue-api?id=%e6%a8%a1%e6%9d%bf%e6%8c%87%e4%bb%a4)
Apart from the above common attributes, there are special attributes starting with `v-`, called Vue directives, such as v-if, v-else, v-for, v-model. See [Vue Directives](/tutorial/vue-api?id=%e6%a8%a1%e6%9d%bf%e6%8c%87%e4%bb%a4)

### 在组件中使用script的data变量
### Using script data variables in components

组件中可以使用script的data中定义的变量，但组件的属性中使用和内容区使用的用法不一样。
Variables defined in the script's data can be used within components, but their usage differs between attribute values and content areas.

- 在text内容区使用时，使用两个花括号来包裹，如下面的`buttonText`
- In the text content area, wrap the variable with double curly braces, such as `{{buttonText}}` below.
- 在属性值中使用时，属性名的前面要加冒号前缀
- When used as an attribute value, add a colon prefix before the attribute name.

下面的button组件示例，等价于上一个的示例。只不过静态内容改成动态js。
The following button component example is equivalent to the previous one, except that the static content is replaced with dynamic JS.

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

### 组件的事件
### Component Events

每个组件都有“事件”。事件就是在指定的条件下触发某个js方法。
Every component has "events". An event triggers a JS method under certain conditions.

比如button组件，有点击事件，也就是当手机用户点击这个button组件时，会触发这个事件。
For example, the button component has a click event, which is triggered when the user taps the button.

事件也是组件的属性，只不过这类属性以`@`为前缀。
Events are also component attributes, but they use the `@` prefix.

事件的属性值，指向一个在script的methods里定义过的js方法，还可以给方法传参数。
The value of the event attribute points to a JS method defined in the script's methods, and you can pass parameters to the method.

下面是组件事件的示例：
The following is an example of a component event:
- click是button组件的点击事件，在用户点击这个button时触发
- `click` is the click event of the button component, triggered when the user clicks the button.
- click指向了methods中定义的goto方法，并且传递了一个参数'/pages/about/about'
- `click` points to the `goto` method defined in methods and passes in the parameter '/pages/about/about'

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

## 基础组件
## Basic Components

uni-app的组件，分为基础组件和扩展组件。
uni-app components are divided into basic components and extension components.

基础组件在uni-app框架中已经内置，无需将内置组件的文件导入项目，也无需注册内置组件，随时可以直接使用，比如`<view>`组件。
Basic components are built into the uni-app framework. You don't need to import or register them, and can use them directly, such as the `<view>` component.

除了基础组件，都称为扩展组件。扩展组件需要将组件导入项目中才可以使用。
All components other than basic components are called extension components. You need to import extension components into your project before you can use them.

uni-app为开发者提供了一系列基础组件，类似HTML里的基础标签元素。
uni-app provides a series of basic components for developers, similar to basic tag elements in HTML.

但uni-app的组件与HTML不同，而是与小程序相同，可更好的满足手机端的使用习惯。
However, uni-app components are different from HTML and are similar to mini-programs, which better suit mobile usage habits.

虽然不推荐使用HTML标签，但实际上如果开发者写了`div`等标签，在编译到非H5平台时也会被编译器转换为`view`标签，类似的还有`span`转`text`、`a`转`navigator`等，包括css里的元素选择器也会转。但为了管理方便、策略统一，新写代码时仍然建议使用view等组件。
Although HTML tags are not recommended, if you use tags like `div`, the compiler will convert them to `view` tags when compiling to non-H5 platforms. Similarly, `span` will be converted to `text`, `a` to `navigator`, and CSS selectors will also be converted. For management and consistency, it's recommended to use components like `view` when writing new code.

开发者可以通过组合这些基础组件进行快速开发。在需要复用的情况下可封装成扩展组件。
Developers can quickly build applications by combining these basic components. For reuse, you can encapsulate them into extension components.

`uni-app` 基础组件规范，与小程序规范相近。如果了解小程序开发的话，uni-app的基础组件会感觉很熟悉。但需要注意组件上的事件绑定，需要以 vue 的事件绑定语法来绑定，如 bindchange="eventName" 事件，需要写成 `@change="eventName"`
The specification of uni-app basic components is similar to that of mini-program components. If you are familiar with mini-program development, uni-app's basic components will feel familiar. But note that event binding must use Vue's syntax, for example, bindchange="eventName" should be written as `@change="eventName"`.

```html
	<picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="bindDateChange">
		<view class="picker">
		  当前选择: {{date}}
		</view>
	</picker>
```

### 基础组件列表
### Basic Component List

基础组件分为以下十几大类：
Basic components are divided into more than ten categories:

**视图容器（View Container）：**
**View Containers:**

|组件名|说明|
|Component Name|Description|
|:-|:-|
|[view](/component/view.md)|视图容器，类似于HTML中的div|
|[view](/component/view.md)|View container, similar to div in HTML|
|[scroll-view](/component/scroll-view.md)|可滚动视图容器|
|[scroll-view](/component/scroll-view.md)|Scrollable view container|
|[swiper](/component/swiper.md)|滑块视图容器，比如用于轮播banner|
|[swiper](/component/swiper.md)|Slider view container, used for banners|
|[match-media](/component/match-media.md)|屏幕动态适配组件，比如窄屏上不显示某些内容|
|[match-media](/component/match-media.md)|Screen adaptive component, e.g., hiding content on narrow screens|
|[movable-area](/component/movable-view.md?id=movable-area)|可拖动区域|
|[movable-area](/component/movable-view.md?id=movable-area)|Draggable area|
|[movable-view](/component/movable-view.md?id=movable-view)|可移动的视图容器，在页面中可以拖拽滑动或双指缩放。movable-view必须在movable-area组件中|
|[movable-view](/component/movable-view.md?id=movable-view)|Movable view container, can be dragged or zoomed with two fingers. Must be inside movable-area component|
|[cover-view](/component/cover-view?id=cover-view)|可覆盖在原生组件的上的文本组件|
|[cover-view](/component/cover-view?id=cover-view)|Text component that can overlay native components|
|[cover-image](/component/cover-view?id=cover-image)|可覆盖在原生组件的上的图片组件|
|[cover-image](/component/cover-view?id=cover-image)|Image component that can overlay native components|

**基础内容（Basic Content）：**
**Basic Content:**

|组件名|说明|
|Component Name|Description|
|:-|:-|
|[icon](/component/icon.md)|图标|
|[icon](/component/icon.md)|Icon|
|[text](/component/text.md)|文字|
|[text](/component/text.md)|Text|
|[rich-text](/component/rich-text.md)|富文本显示组件|
|[rich-text](/component/rich-text.md)|Rich text display component|
|[progress](/component/progress.md)|进度条|
|[progress](/component/progress.md)|Progress bar|

**表单组件（Form）：**
**Form Components:**

|标签名|说明|
|Tag Name|Description|
|:-|:-|
|[button](/component/button.md)|按钮|
|[button](/component/button.md)|Button|
|[checkbox](/component/checkbox.md)|多项选择器|
|[checkbox](/component/checkbox.md)|Multiple choice selector|
|[editor](/component/editor.md)|富文本输入框|
|[editor](/component/editor.md)|Rich text input box|
|[form](/component/form.md)|表单|
|[form](/component/form.md)|Form|
|[input](/component/input.md)|输入框|
|[input](/component/input.md)|Input box|
|[label](/component/label.md)|标签|
|[label](/component/label.md)|Label|
|[picker](/component/picker.md)|弹出式列表选择器|
|[picker](/component/picker.md)|Popup list selector|
|[picker-view](/component/picker-view.md)|窗体内嵌式列表选择器|
|[picker-view](/component/picker-view.md)|Embedded list selector in form|
|[radio](/component/radio.md)|单项选择器|
|[radio](/component/radio.md)|Single choice selector|
|[slider](/component/slider.md)|滑动选择器|
|[slider](/component/slider.md)|Slider selector|
|[switch](/component/switch.md)|开关选择器|
|[switch](/component/switch.md)|Switch selector|
|[textarea](/component/textarea.md)|多行文本输入框|
|[textarea](/component/textarea.md)|Multi-line text input box|

**路由与页面跳转（Navigation）：**
**Navigation:**

|组件名|说明|
|Component Name|Description|
|:-|:-|
|[navigator](/component/navigator.md)|页面链接。类似于HTML中的a标签|
|[navigator](/component/navigator.md)|Page link. Similar to the `<a>` tag in HTML|

**媒体组件（Media）：**
**Media Components:**

|组件名|说明|
|Component Name|Description|
|:-|:-|
|[audio](/component/audio.md)|音频|
|[audio](/component/audio.md)|Audio|
|[camera](/component/camera.md)|相机|
|[camera](/component/camera.md)|Camera|
|[image](/component/image.md)|图片|
|[image](/component/image.md)|Image|
|[video](/component/video.md)|视频|
|[video](/component/video.md)|Video|
|[live-player](/component/live-player.md)|直播播放|
|[live-player](/component/live-player.md)|Live streaming player|
|[live-pusher](/component/live-pusher.md)|实时音视频录制，也称直播推流|
|[live-pusher](/component/live-pusher.md)|Real-time audio/video recording, also called live streaming push|

**地图（Map）：**
**Map:**

|组件名|说明|
|Component Name|Description|
|:-|:-|
|[map](/component/map.md)|地图|
|[map](/component/map.md)|Map|

**画布（Canvas）：**
**Canvas:**

|组件名|说明|
|Component Name|Description|
|:-|:-|
|[canvas](/component/canvas.md)|画布|
|[canvas](/component/canvas.md)|Canvas|

**webview（Web-view）：**
**Web-view:**

|组件名|说明|
|Component Name|Description|
|:-|:-|
|[web-view](/component/web-view.md)|web浏览器组件|
|[web-view](/component/web-view.md)|Web browser component|

**广告**
**Advertisement:**

|组件名|说明|
|Component Name|Description|
|:-|:-|
|[ad](/component/ad.md)|广告组件|
|[ad](/component/ad.md)|Advertisement component|
|[ad-draw](/component/ad-draw.md)|沉浸视频流广告组件|
|[ad-draw](/component/ad-draw.md)|Immersive video stream advertisement component|

**页面属性配置**
**Page Attribute Configuration:**

|组件名|说明|
|Component Name|Description|
|:-|:-|
|[custom-tab-bar](/component/custom-tab-bar.md)|底部tabbar自定义组件|
|[custom-tab-bar](/component/custom-tab-bar.md)|Custom bottom tab bar component|
|[navigation-bar](/component/navigation-bar.md)|页面顶部导航|
|[navigation-bar](/component/navigation-bar.md)|Top navigation bar of the page|
|[page-meta](/component/page-meta.md)|页面属性配置节点|
|[page-meta](/component/page-meta.md)|Page attribute configuration node|

**uniCloud**
**uniCloud:**

|组件名|说明|
|Component Name|Description|
|:-|:-|
|[unicloud-db组件](https://doc.dcloud.net.cn/uniCloud/unicloud-db)|uniCloud数据库访问和操作组件|
|[unicloud-db component](https://doc.dcloud.net.cn/uniCloud/unicloud-db)|uniCloud database access and manipulation component|

**各平台专有组件**
**Platform-specific components**

在小程序平台和nvue平台，还有一些专有组件，比如open-data，详见左侧导航
There are also platform-specific components such as open-data in mini-program and nvue platforms. See the sidebar navigation for details.

## 扩展组件的意义
## The Significance of Extension Components

虽然所有的业务需求都可以通过基础组件满足，但仅有基础组件是低效的，实际开发中会有很多封装的组件。
Although all business needs can be met with basic components, using only basic components is inefficient. In actual development, many encapsulated components are used.

比如我们需要一个五角星点击评分的组件，在DCloud的插件市场里可以获取到：[https://ext.dcloud.net.cn/plugin?id=33](https://ext.dcloud.net.cn/plugin?id=33)
For example, if you need a five-star rating component, you can get it from the DCloud plugin marketplace: [https://ext.dcloud.net.cn/plugin?id=33](https://ext.dcloud.net.cn/plugin?id=33)

把这个uni-rate组件导入到你的uni-app项目下，在需要的vue页面里引用它，就可以在指定的地方显示出这个五角星组件。
Import the uni-rate component into your uni-app project and use it in the desired vue page to display the five-star component.

```html
	<!-- 在index.vue页面引用 uni-rate 组件-->
	<template>
		<view>
			<uni-rate></uni-rate><!-- 这里会显示一个五角星，并且点击后会自动亮星 -->
		</view>
	</template>
```

封装扩展组件的优势：
Advantages of encapsulating extension components:

- 可以将组件进行任意次数的复用。
- Components can be reused any number of times.
- 合理的划分组件，有助于提高应用性能。
- Proper division of components helps improve application performance.
- 代码更加方便组织和管理，并且扩展性也更强，便于多人协同开发。
- Code organization and management are easier, with stronger extensibility, making team collaboration more convenient.
- 组件化开发能大幅度提高应用开发效率、测试性、复用性等。
- Component-based development greatly improves development efficiency, testability, reusability, etc.

## 组件的类别
## Types of Components

uni-app支持的组件分为vue组件和小程序自定义组件。
uni-app supports Vue components and custom mini-program components.

如果你还不了解这两种组件，可以参阅各自的文档
If you are not familiar with these two types of components, refer to their documentation.
- vue组件：[文档](https://uniapp.dcloud.net.cn/tutorial/vue-components?id=%e6%a6%82%e5%bf%b5)
- Vue components: [Documentation](https://uniapp.dcloud.net.cn/tutorial/vue-components?id=%e6%a6%82%e5%bf%b5)
- 小程序自定义组件：其规范不是vue规范，而是小程序规范，[文档](https://uniapp.dcloud.net.cn/tutorial/miniprogram-subject.html#小程序自定义组件支持)
- Custom mini-program components: They follow the mini-program specification, not the Vue specification. [Documentation](https://uniapp.dcloud.net.cn/tutorial/miniprogram-subject.html#小程序自定义组件支持)

日常开发来讲，推荐使用vue组件。uni-app支持小程序组件主要是为了兼容更多生态资源。
For daily development, it is recommended to use Vue components. uni-app's support for mini-program components is mainly for broader ecosystem compatibility.

如果扩展组件符合uni-app的`easycom`组件规范，则可以免注册，直接使用。比如uni-ui扩展组件就符合`easycom`组件规范。
If the extension component follows uni-app's `easycom` component specification, you can use it directly without registration. For example, uni-ui extension components comply with the `easycom` specification.

如果组件不符合easycom规范，则需要在代码里手动import和注册组件，然后才能使用。
If the component does not comply with the easycom specification, you must manually import and register it in the code before use.

除了easycom规范外，扩展组件还有很多概念，比如`uni_module`、`datacom`、`原生组件`、`uniCloud组件`。
Besides the easycom specification, extension components also include concepts such as `uni_module`, `datacom`, `native component`, and `uniCloud component`.

接下来一一讲解。
The following sections will explain these concepts one by one.

## easycom组件规范@easycom
## easycom Component Specification @easycom
> `HBuilderX 2.5.5`起支持
> Supported since HBuilderX 2.5.5

传统vue组件，需要安装、引用、注册，三个步骤后才能使用组件。`easycom`将其精简为一步。
Traditional Vue components require three steps: install, import, and register before use. `easycom` simplifies this to one step.

只要组件安装在项目的components目录下或`uni_modules`目录下，并符合`components/组件名称/组件名称.(vue|uvue)`目录结构（注意：当同时存在vue和uvue时，uni-app 项目优先使用 vue 文件，而uni-app x 项目优先使用 uvue 文件，[详情](https://doc.dcloud.net.cn/uni-app-x/component/#%E5%A6%82%E4%BD%95%E5%BC%80%E5%8F%91%E5%90%8C%E6%97%B6%E5%85%BC%E5%AE%B9-uni-app-x-%E5%92%8C-uni-app-%E7%9A%84%E7%BB%84%E4%BB%B6)）。就可以不用引用、注册，直接在页面中使用。
As long as the component is installed in the project's components directory or uni_modules directory and follows the `components/component-name/component-name.(vue|uvue)` structure (when both vue and uvue exist, uni-app prefers vue files, uni-app x prefers uvue files, [details](https://doc.dcloud.net.cn/uni-app-x/component/#%E5%A6%82%E4%BD%95%E5%BC%80%E5%8F%91%E5%90%8C%E6%97%B6%E5%85%B7%E5%AE%B9-uni-app-x-%E5%92%8C-uni-app-%E7%9A%84%E7%BB%84%E4%BB%B6)), you can use the component directly in the page without import or registration.

比如前述举例的[uni-rate组件](https://ext.dcloud.net.cn/plugin?id=33)，它导入到uni-app项目后，存放在了目录/components/uni-rate/uni-rate.vue
For example, the [uni-rate component](https://ext.dcloud.net.cn/plugin?id=33) is imported to your uni-app project and stored at /components/uni-rate/uni-rate.vue

同时它的组件名称也叫uni-rate，所以这样的组件，不用在script里注册和引用。
Its component name is also uni-rate, so such components do not need to be registered or imported in the script.

如下：
As follows:

```html
<template>
		<view>
			<uni-rate></uni-rate><!-- 这里会显示一个五角星，并且点击后会自动亮星 -->
		</view>
	</template>
<script>
	// 这里不用import引入，也不需要在components内注册uni-list组件。template里就可以直接用
	// No need to import or register the uni-list component, just use it directly in the template.
	export default {
		data() {
			return {

			}
		}
	}
</script>
```

不管components目录下安装了多少组件，`easycom`打包后会自动剔除没有使用的组件，对组件库的使用尤为友好。
No matter how many components are installed under the components directory, unused components will be automatically excluded during `easycom` packaging, making it especially friendly for component libraries.

组件库批量安装，随意使用，自动按需打包。以官方的`uni-ui`为例，在HBuilderX新建项目界面选择`uni-ui`项目模板，只需在页面中敲u，拉出大量组件代码块，直接选择，即可使用。大幅提升开发效率，降低使用门槛。
Component libraries can be installed in bulk, used as needed, and packaged automatically. For example, with the official `uni-ui`, you can select the `uni-ui` template when creating a new project in HBuilderX, type 'u' in the page, pull out component code blocks, select and use them directly—greatly improving development efficiency and lowering the entry barrier.

在[DCloud插件市场](https://ext.dcloud.net.cn/)下载符合`components/组件名称/组件名称.vue`目录结构的组件，均可直接使用。
Any component downloaded from the [DCloud Plugin Market](https://ext.dcloud.net.cn/) that follows the `components/component-name/component-name.vue` structure can be used directly.

`easycom`是自动开启的，不需要手动开启。
`easycom` is enabled automatically and does not require manual activation.

如果你的组件名称或路径不符合easycom的默认规范，可以在`pages.json`的`easycom`节点进行个性化设置，自定义匹配组件的策略。[另见](/collocation/pages?id=easycom)
If your component name or path doesn't match the default easycom specification, you can customize matching strategies in the `easycom` node of `pages.json`. [See also](/collocation/pages?id=easycom)

如果不使用easycom，手动引用和注册vue组件，则需要分3步写如下代码：
If not using easycom, you must manually import and register Vue components, as shown in the three steps below:

1. import导入组件
1. Import the component
2. components里注册组件
2. Register the component in components
3. template中使用组件
3. Use the component in the template

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

## uni_module规范
## uni_module Specification

uni_module其实不止服务于组件，它可以服务于组件、js库、页面、项目等所有DCloud插件市场所支持的种类。
 uni_module serves not only components but also JS libraries, pages, projects, and all categories supported by the DCloud plugin market.

符合uni_module规范的组件都在项目的`uni_modules`目录下，以插件id为目录存放。（项目模板不放在`uni_modules`目录下）
Components that comply with the uni_module specification are stored under the project's `uni_modules` directory, with each plugin ID as its directory. (Project templates are not stored in `uni_modules`)

在HBuilderX中点右键可方便的更新插件，插件作者也可以方便的上传插件。
Right-click in HBuilderX to easily update plugins; plugin authors can easily upload plugins.

uni_module还支持云端一体的插件。
uni_module also supports cloud-integrated plugins.

uni_module有详细的专项文档，请另行查阅[uni_module规范](/plugin/uni_modules.md)。
There is detailed documentation on uni_module. Please refer to [uni_module specification](/plugin/uni_modules.md).

## uniCloud组件
## uniCloud Components

uniCloud是DCloud提供的、配套uni-app的云开发服务。
uniCloud is a cloud development service provided by DCloud for uni-app.

uni-app的基础组件中，有一个特殊基础组件是：`<unicloud-db>`组件。
Among uni-app's basic components, there is a special one: `<unicloud-db>`.

它可以在前端直接获取和操作uniCloud的云端数据库。
It allows direct frontend access and manipulation of uniCloud's cloud database.

相关文档详见：[unicloud-db组件](https://doc.dcloud.net.cn/uniCloud/unicloud-db)
See [unicloud-db component documentation](https://doc.dcloud.net.cn/uniCloud/unicloud-db) for details.

除了内置的数据库组件，在uni-ui扩展库里还有uniCloud的文件选择和上传组件，参考：[uni-file-picker](https://ext.dcloud.net.cn/plugin?id=4079)
In addition to the built-in database component, the uni-ui extension library also includes uniCloud file selection and upload components, such as [uni-file-picker](https://ext.dcloud.net.cn/plugin?id=4079)

## 原生组件和原生插件
## Native Components and Native Plugins

### 基础组件里的原生组件
### Native components in basic components

uni-app的基础组件里，有一批原生组件，如video、map...
Some basic components in uni-app are native components, such as video, map...

这些组件如果用于vue页面，也就是webview渲染时，会造成层级高于普通前端组件的情况。
If these components are used in Vue pages (i.e., rendered in webview), their layer will be higher than normal frontend components.

它们的层级需要使用cover-view等特殊组件才能覆盖，同时在使用中有些需要注意的事情。
Their layers require special components like cover-view to overlay, and there are some caveats during usage.

在app-nvue里没有这些问题。
These issues do not occur in app-nvue.

相关文档详见：[uni-app内置原生组件说明](/component/native-component)
See [uni-app built-in native component instructions](/component/native-component) for details.

### uni-app的App端原生插件
### Native plugins for uni-app App

uni-app的App端支持原生插件，这类插件使用iOS或Android原生语言编写，封装成插件，供其他开发者使用js来调用。
The App side of uni-app supports native plugins, which are written in native iOS or Android languages, encapsulated as plugins, and can be called by other developers using JS.

原生插件分为原生组件component和原生模块module。
Native plugins are divided into native component (component) and native module (module).

其实原生组件component只能在App-nvue环境中使用。
In fact, native component can only be used in App-nvue environment.

相关文档详见：[uni-app原生插件开发](https://nativesupport.dcloud.net.cn/NativePlugin/README)
See [uni-app native plugin development](https://nativesupport.dcloud.net.cn/NativePlugin/README) for details.

## datacom
## datacom

datacom组件是一种数据驱动的、可云端一体的组件。
The datacom component is a data-driven component that can be cloud-integrated.

传统组件只涉及前端概念，而datacom拉通了uniCloud云端数据，是uni-app+uniCloud协同开发的必备提效工具。
Traditional components involve only frontend concepts, while datacom bridges uniCloud cloud data, making it an essential efficiency tool for uni-app + uniCloud collaborative development.

相关文档详见：[datacom组件](/component/datacom)
See [datacom component documentation](/component/datacom) for details.

## 如何封装组件
## How to encapsulate components

封装组件涉及的知识点较多，相关文档详见：[vue组件详解](https://uniapp.dcloud.io/vue-components)
Encapsulating components involves multiple concepts. See [Vue Component Details](https://uniapp.dcloud.io/vue-components) for more information.

## 扩展组件（uni-ui）@uniui
## Extension Components (uni-ui) @uniui

详见: [uni-ui介绍](/component/uniui/uni-ui.md)
See: [Introduction to uni-ui](/component/uniui/uni-ui.md)
