
::: tip 组件名：uni-popup
::: tip component name: uni-popup
> 代码块： `uPopup`
> Code block: `uPopup`
> 关联组件：`uni-popup-dialog`,`uni-popup-message`,`uni-popup-share`,`uni-transition`
> Associated components: `uni-popup-dialog`, `uni-popup-message`, `uni-popup-share`, `uni-transition`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-popup)
[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-popup)
:::

弹出层组件，在应用中弹出一个消息提示窗口、提示框等
Pop-up layer component, pops up a message prompt window, prompt box, etc. in the application

## 介绍
## introduce
::: warning 注意事项
::: warning Notes
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
> In order to avoid wrong use and bring you a bad development experience, please read the following precautions carefully before using the component, which can help you avoid some mistakes.
> - 组件需要依赖 `sass` 插件 ，请自行手动安装
> - The component needs to depend on the `sass` plugin, please install it manually
- `uni-popup-message` 、 `uni-popup-dialog` 等扩展ui组件，需要和 `uni-popup` 配套使用，暂不支持单独使用
- `uni-popup-message` , `uni-popup-dialog` and other extended ui components need to be used in conjunction with `uni-popup`, and do not support separate use currently
- `nvue` 中使用 `uni-popup` 时，尽量将组件置于其他元素后面，避免出现层级问题
- When using `uni-popup` in `nvue`, try to place components behind other elements to avoid hierarchy problems
- `uni-popup` 并不能完全阻止页面滚动，可在打开 `uni-popup` 的时候手动去做一些处理，禁止页面滚动
- `uni-popup` does not completely prevent page scrolling, you can manually do some processing when opening `uni-popup` to prohibit page scrolling
- 如果想在页面渲染完毕后就打开 `uni-popup` ，请在 `onReady` 或 `mounted` 生命周期内调用，确保组件渲染完毕
- If you want to open `uni-popup` after the page is rendered, please call it during the `onReady` or `mounted` lifecycle to make sure the component is rendered
- 在微信小程序开发者工具中，启用真机调试，popup 会延时出现，是因为 setTimeout 在真机调试中的延时问题导致的，预览和发布小程序不会出现此问题
- In the WeChat applet developer tool, when real device debugging is enabled, the popup will appear delayed, which is caused by the delay of setTimeout in real device debugging. This problem does not occur when previewing and publishing applet
- 使用 `npm` 方式引入组件，如果确认引用正确，但是提示未注册组件或显示不正常，请尝试重新编译项目
- Use `npm` to import components. If you confirm that the reference is correct, but it prompts that the component is not registered or the display is abnormal, please try to recompile the project
- `uni-popup` 中尽量不要使用 `scroll-view` 嵌套过多的内容，可能会影响组件的性能，导致组件无法打开或者打开卡顿
- Try not to use `scroll-view` to nest too much content in `uni-popup`, which may affect the performance of the component, causing the component to fail to open or to freeze
- `uni-popup` 不会覆盖原生 tabbar 和原生导航栏
- `uni-popup` does not override native tabbar and native navbar
- app-vue 中组件无法遮盖 video ，ad 等原生组件 ，建议使用 nvue 
- Components in app-vue cannot cover native components such as video, ad, etc. It is recommended to use nvue
- 组件支持 nvue ，需要在 `manifest.json > app-plus` 节点下配置 `"nvueStyleCompiler" : "uni-app"` 
- The component supports nvue, you need to configure `"nvueStyleCompiler" : "uni-app"` under the `manifest.json > app-plus` node
:::
### 基本用法 
### Basic usage

```html
<template>
	<view>
		<button @click="open">打开弹窗</button>
		<uni-popup ref="popup" type="bottom">底部弹出 Popup</uni-popup>
	</view>
</template>
<script>
export default {
   methods:{
      open(){
        // 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
        // Call the uni-popup method through the ref defined by the component. If the parameter is passed in, the type attribute will be invalid. Only ['top','left','bottom','right','center'] is supported
        this.$refs.popup.open('top')
      }
   }
}
</script>

```

### 设置主窗口背景色
### Set the background color of the main window

在大多数场景下，并不需要设置 `background-color` 属性，因为`uni-popup`的主窗口默认是透明的，在向里面插入内容的时候 ，样式完全交由用户定制，如果设置了背景色 ，例如 `uni-popup-dialog` 中的圆角就很难去实现，不设置背景色，更适合用户去自由发挥。
In most scenarios, you do not need to set the `background-color` property, because the main window of `uni-popup` is transparent by default. When inserting content into it, the style is completely customized by the user. If the background is set For example, the rounded corners in `uni-popup-dialog` are difficult to achieve. Without setting the background color, it is more suitable for users to freely play.

而也有特例，需要我们主动去设置背景色，例如 `type = 'bottom'` 的时候 ，在异型屏中遇到了底部安全区问题（如 iphone 11），因为 `uni-popup`的主要内容避开了安全区（设置`safe-area:true`），导致底部的颜色我们无法自定义，这时候使用 `background-color` 就可以解决这个问题。 
There are also special cases that require us to actively set the background color. For example, when `type = 'bottom'`, the bottom safe area problem is encountered in the special-shaped screen (such as iphone 11), because the main content of `uni-popup` avoids The safe area is set (set `safe-area: true`), so we cannot customize the color of the bottom. At this time, using `background-color` can solve this problem.

**示例**
**Example**

```html
<button @click="open">打开弹窗</button>
<uni-popup ref="popup" type="bottom" background-color="#fff">底部弹出 Popup</uni-popup>
```

### 禁用打开动画
### Disable opening animation
在某些场景 ，可能不希望弹层有动画效果 ，只需要将 `animation` 属性设置为 `false` 即可以关闭动画。
In some scenarios, you may not want the popup layer to animate, just set the `animation` property to `false` to turn off the animation.

**示例**
**Example**

```html
<button @click="open">打开弹窗</button>
<uni-popup ref="popup" type="center" :animation="false">中间弹出 Popup</uni-popup>
```

### 禁用点击遮罩关闭
### Disable click mask off
默认情况下，点击遮罩会自动关闭`uni-popup`，如不想点击关闭，只需将`mask-click`设置为`false`，这时候要关闭`uni-popup`，只能手动调用 `close` 方法。
By default, clicking on the mask will automatically close `uni-popup`, if you don't want to click to close, just set `mask-click` to `false`, then to close `uni-popup`, you can only manually call ` close` method.

**示例**
**Example**

```html
<button @click="open">打开弹窗</button>
<uni-popup ref="popup" :mask-click="false">
	<text>Popup</text>
	<button @click="close">关闭</button>
</uni-popup>
```

```javascript
export default {
	data() {
		return {}
	},
	onReady() {},
	methods: {
		open() {
			this.$refs.popup.open('top')
		},
		close() {
			this.$refs.popup.close()
		}
	}
}

```

## API

### Popup Props 

|属性名|类型|默认值|说明|
|property name|type|default value|description|
|:-:|:-:|:-:|:-:|
|animation|Boolean|true|是否开启动画|
|animation|Boolean|true|Enable animation|
|type|String|'center'|弹出方式|
|type|String|'center'|Popup|
|mask-click **[即将废弃]**|Boolean|true|蒙版点击是否关闭弹窗|
|mask-click **[to be deprecated]**|Boolean|true|Does the mask click close the popup window|
|is-mask-click **[1.7.4新增]**|Boolean|true|蒙版点击是否关闭弹窗|
|is-mask-click **[New in 1.7.4]**|Boolean|true|Does the mask click close the popup window|
|mask-background-color **[1.7.4新增]**|rgba|rgba(0,0,0,0.4)|蒙版颜色，建议使用 rgba 颜色值|
|mask-background-color **[New in 1.7.4]**|rgba|rgba(0,0,0,0.4)|Mask color, it is recommended to use rgba color value|
|background-color|String|'none'|主窗口背景色|
|background-color|String|'none'|Main window background color|
|safe-area|Boolean|true|是否适配底部安全区|
|safe-area|Boolean|true|Whether it fits the bottom safe area|

#### Type Options

|属性名|说明|
|property name|description|
|:-:| :-:|
|top|顶部弹出	|
|top|Top Popup |
|center|居中弹出|
|center|Center Popup|
|bottom|底部弹出|
|bottom|bottom popup|
|left|左侧弹出|
|left|Left Popup|
|right|右侧弹出|
|right|Popup right|
|message|预置样式 ：消息提示|
|message|Preset Style : Message Prompt|
|dialog|预置样式 ：对话框|
|dialog|Preset Styles: Dialog|
|share|预置样式 ：底部弹出分享示例	|
|share|Preset Style : Pop-up share example at the bottom |


### Popup Methods

|方法称名	|说明|参数|
|method name |description|parameters|
|:-:|:-:|:-:|
|open|打开弹出层|open(String:type) ，如果参数可代替 type 属性|
|open|Open the popup layer|open(String:type), if the parameter can replace the type attribute|
|close|关闭弹出层	|-|
|close|Close the popup layer |-|


### Popup Events

|事件称名|说明|返回值|
|Event Name|Description|Return Value|
|:-:|:-:|:-:|
|change|组件状态发生变化触发|e={show: true｜false,type:当前模式}|
|change|The component state changes to trigger|e={show: true|false,type:current mode}|
|maskClick|点击遮罩层触发|-|
|maskClick|Click on the mask layer to trigger|-|


## 扩展组件说明
## Extended component description
`uni-popup` 其实并没有任何样式，只提供基础的动画效果，给用户一个弹出层解决方案，仅仅是这样并不能满足开发需求，所以我们提供了三种基础扩展样式
`uni-popup` does not actually have any styles, it only provides basic animation effects, giving users a pop-up layer solution, which alone cannot meet development needs, so we provide three basic extension styles

### uni-popup-message 提示信息
### uni-popup-message message

将 `uni-popup` 的`type`属性改为 `message`，并引入对应组件即可使用消息提示 ，*该组件不支持单独使用*
Change the `type` attribute of `uni-popup` to `message`, and introduce the corresponding component to use the message prompt. *This component does not support separate use*

**示例**
**Example**

```html
<uni-popup ref="popup" type="message">
	<uni-popup-message type="success" message="成功消息" :duration="2000"></uni-popup-message>
</uni-popup>
```

### PopupMessage Props

|属性名|类型|默认值|说明|
|property name|type|default value|description|
|:-:|:-:|:-:|:-:|
|type|String|success|消息提示主题|
|type|String|success|message prompt subject|
|message|String|-|消息提示文字|
|message|String|-|message prompt text|
|duration|Number|3000|消息显示时间，超过显示时间组件自动关闭，设置为0 将不会关闭，需手动调用 close 方法关闭|
|duration|Number|3000|The message display time, the component will be automatically closed after the display time, if it is set to 0, it will not be closed, you need to manually call the close method to close|

#### Type Options

|属性名|说明|
|property name|description|
|:-:| :-:|
|success|成功|
|success|success|
|warn|警告|
|warn|Warning|
|error|失败|
|error|failed|
|info|消息|
|info|News|

### PopupMessage Slots

|名称|说明|					
|Name|Description|
|:-:|:-:|						
|default|消息内容，会覆盖 message 属性|
|default|The content of the message, which overrides the message property|

### uni-popup-dialog 对话框
### uni-popup-dialog dialog

将 `uni-popup` 的`type`属性改为 `dialog`，并引入对应组件即可使用对话框 ，*该组件不支持单独使用*
Change the `type` attribute of `uni-popup` to `dialog`, and import the corresponding component to use the dialog box. *This component does not support separate use*

**示例**
**Example**

```html
<button @click="open">打开弹窗</button>
<uni-popup ref="popup" type="dialog">
	<uni-popup-dialog mode="input" message="成功消息" :duration="2000" :before-close="true" @close="close" @confirm="confirm"></uni-popup-dialog>
</uni-popup>
```

```javascript
export default {
	methods: {
		open() {
			this.$refs.popup.open()
		},
		/**
		 * 点击取消按钮触发
		 * @param {Object} done
		 */
		close() {
			// TODO 做一些其他的事情，before-close 为true的情况下，手动执行 close 才会关闭对话框
			// ...
			this.$refs.popup.close()
		},
		/**
		 * 点击确认按钮触发
		 * @param {Object} done
		 * @param {Object} value
		 */
		confirm(value) {
			// 输入框的值
			// the value of the input box
			console.log(value)
			// TODO 做一些其他的事情，手动执行 close 才会关闭对话框
			// ...
			this.$refs.popup.close()
		}
	}
}
```

### PopupDialog Props

|属性名|类型|默认值|说明|
|property name|type|default value|description|
|:-:|:-:|:-:|:-:|
|type|String|success|对话框标题主题，可选值： success/warn/info/error|
|type|String|success|Dialog title subject, optional value: success/warn/info/error|
|mode|String|base| 对话框模式，可选值：base（提示对话框）/input（可输入对话框）|
|mode|String|base| Dialog mode, optional value: base (prompt dialog)/input (input dialog)|
|title|String|-|对话框标题|
|title|String|-|Dialog Title|
|content|String|-|对话框内容，base模式下生效|
|content|String|-|Dialog content, valid in base mode|
|confirmText **[1.7.4新增]**|String|-|定义确定按钮文本|
|confirmText **[New in 1.7.4]**|String|-|Define the text of the confirm button|
|cancelText **[1.7.4新增]**|String|-|定义取消按钮文本|
|cancelText **[New in 1.7.4]**|String|-|Define the text of the cancel button|
|value| String\Number|-|输入框默认值，input模式下生效|
|value| String\Number|-|Default value of the input box, valid in input mode|
|placeholder|String|-|输入框提示文字，input模式下生效|
|placeholder|String|-|Input box prompt text, valid in input mode|
|before-close|Boolean|false	| 是否拦截按钮事件，如为true，则不会关闭对话框，关闭需要手动执行 uni-popup 的 close 方法|
|before-close|Boolean|false | Whether to intercept button events, if true, the dialog box will not be closed, and the close method of uni-popup needs to be manually executed to close |

#### PopupDialog Events

|事件称名	|说明|返回值|
|Event Name |Description|Return Value|
|:-:|:-:|:-:|
|close|点击dialog取消按钮触发|-|
|close|Click the dialog cancel button to trigger|-|
|confirm|点击dialog确定按钮触发|e={value:input模式下输入框的值}|
|confirm|Click the dialog OK button to trigger |e={value: the value of the input box in input mode}|

### PopupDialog Slots

|名称|说明|					
|Name|Description|
|:-:|:-:|						
|default|自定义内容，会覆盖原有的内容显示|
|default|Custom content will overwrite the original content display|

### uni-popup-share 分享示例
### uni-popup-share sharing example

分享示例，不作为最终可使用的组件，只做为样式组件，供用户自行修改，`后续的开发计划是实现实际的分享逻辑，参数可配置`。
The sharing example is not used as a final component, but only as a style component for users to modify by themselves. `The follow-up development plan is to implement the actual sharing logic, and the parameters can be configured`.

将 `uni-popup` 的 `type` 属性改为 `share`，并引入对应组件即可使用 ，*该组件不支持单独使用*
Change the `type` attribute of `uni-popup` to `share`, and import the corresponding component to use, *this component does not support separate use*

**示例**
**Example**

```html
<uni-popup ref="popup" type="share">
	<uni-popup-share title="分享到" @select="select"></uni-popup-share>
</uni-popup>
```

### PopupShare Props

|属性名|类型|默认值|说明|
|property name|type|default value|description|
|:-:|:-:|:-:| :-:			|
|title|String|-|分享弹窗标题|
|title|String|-|Share popup title|
|before-close|Boolean|false	| 是否拦截按钮事件，如为true，则不会关闭对话框，关闭需要手动执行 uni-popup 的 close 方法|
|before-close|Boolean|false | Whether to intercept button events, if true, the dialog box will not be closed, and the close method of uni-popup needs to be manually executed to close |

### PopupShare Events

|事件称名|说明|返回值|
|Event Name|Description|Return Value|
|:-:|:-:|:-:|
|select|选择触发|e = {item,index}：所选参数|
|select|select trigger|e = {item,index}: selected parameter|

**Tips**
- share 分享组件，只是作为一个扩展示例，如果需要修改数据源，请到组件内修改
- share share component, just as an extension example, if you need to modify the data source, please modify it in the component



## 禁止滚动穿透
## Forbid scroll penetration

使用组件时，会发现内容部分滚动到底时，继续划动会导致底层页面的滚动，这就是滚动穿透。
When using components, you will find that when the content part scrolls to the end, continuing to swipe will cause the underlying page to scroll, which is scroll penetration.

但由于平台自身原因，除了h5平台外 ，其他平台都不能在在组件内禁止滚动穿透，所以在微信小程序、App 平台，页面内需要用户特殊处理一下
However, due to the platform's own reasons, except for the h5 platform, other platforms cannot prohibit scroll penetration in the component, so in the WeChat applet and App platform, the user needs special treatment in the page

### 微信小程序/App
### WeChat Mini Program/App
在 `微信小程序/App` 平台可使用 `page-meta` 组件动态修改页面样式 ，
On the `WeChat Mini Program/App` platform, you can use the `page-meta` component to dynamically modify the page style.

需要在 data 中定义一个变量，用来表示 `uni-popup` 的开启关闭状态，并通过这个变量修改 `page-meta` 的 `overflow` 属性。
You need to define a variable in data to indicate the open and close state of `uni-popup`, and modify the `overflow` attribute of `page-meta` through this variable.

在 `uni-popup` 的 `@change` 事件中可以接受到 `uni-popup` 的开启关闭状态 ，并赋值给上面的变量
In the `@change` event of `uni-popup`, you can receive the open/close state of `uni-popup` and assign it to the above variable

**下面是关键代码片段：**
**Here is the key code snippet:**

```html
<template>
	<page-meta :page-style="'overflow:'+(show?'hidden':'visible')"></page-meta>
	<view class="container">
		<!-- 普通弹窗 -->
		<!-- Normal popup -->
		<uni-popup ref="popup" background-color="#fff" @change="change">
		<!-- ... -->
		</uni-popup>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				show:false
			}
		},
		methods: {
			change(e) {
				this.show = e.show
			}
		}
	}
</script>


```

**Tips**
- h5 滚动穿透不需要处理 
- h5 scroll penetration does not require processing
- wx、app 需要 使用 page-meta 组件配合阻止滚动穿透
- wx, app need to use page-meta component to prevent scroll penetration
- 注意 page-meta 组件，一个页面只能存在一个
- Note the page-meta component, only one page can exist
- 其他平台无法阻止滚动穿透，建议使用 scroll-view 滚动 ，手动设置 overflow:hidden,同 page-meta 方法一致
- Other platforms cannot prevent scroll penetration. It is recommended to use scroll-view scrolling and manually set overflow:hidden, which is consistent with the page-meta method



## 示例
## Example
::: warning 注意
::: warning attention
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。
The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-popup) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-popup) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/popup/popup
> Template
``` html
<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">弹出层组件用于弹出一个覆盖到页面上的内容，使用场景如：底部弹出分享弹窗、页面插屏广告等。</text>
		</uni-card>
		<uni-section title="基本示例" type="line">
			<view class="example-body box">
				<button class="button" type="primary" @click="toggle('top')"><text class="button-text">顶部</text></button>
				<button class="button" type="primary" @click="toggle('bottom')"><text class="button-text">底部</text></button>
				<button class="button" type="primary" @click="toggle('center')"><text class="button-text">居中</text></button>
				<button class="button" type="primary" @click="toggle('left')"><text class="button-text">左侧</text></button>
				<button class="button" type="primary" @click="toggle('right')"><text class="button-text">右侧</text></button>
			</view>
		</uni-section>

		<uni-section title="提示消息" type="line">
			<view class="example-body box">
				<button class="button popup-success" @click="messageToggle('success')"><text
						class="button-text success-text">成功</text></button>
				<button class="button popup-error" @click="messageToggle('error')"><text
						class="button-text error-text">失败</text></button>
				<button class="button popup-warn" @click="messageToggle('warn')"><text
						class="button-text warn-text">警告</text></button>
				<button class="button popup-info" @click="messageToggle('info')"><text
						class="button-text info-text">信息</text></button>
			</view>
		</uni-section>


		<uni-section title="对话框示例" type="line" class="hideOnPc">
			<view class="example-body box">
				<button class="button popup-success" @click="dialogToggle('success')"><text
						class="button-text success-text">成功</text></button>
				<button class="button popup-error" @click="dialogToggle('error')"><text
						class="button-text error-text">失败</text></button>
				<button class="button popup-warn" @click="dialogToggle('warn')"><text
						class="button-text warn-text">警告</text></button>
				<button class="button popup-info" @click="dialogToggle('info')"><text
						class="button-text info-text">信息</text></button>
			</view>
		</uni-section>

		<uni-section title="输入框示例" type="line" padding>
			<view class="dialog-box">
				<text class="dialog-text">输入内容：{{ value }}</text>
			</view>
			<button class="button" type="primary" @click="inputDialogToggle"><text
					class="button-text">输入对话框</text></button>

		</uni-section>
		<uni-section title="底部分享示例" type="line" padding>
			<button class="button" type="primary" @click="shareToggle"><text class="button-text">分享模版示例</text></button>
		</uni-section>
		<view>
			<!-- 普通弹窗 -->
			<!-- Normal popup -->
			<uni-popup ref="popup" background-color="#fff" @change="change">
				<view class="popup-content" :class="{ 'popup-height': type === 'left' || type === 'right' }"><text
						class="text">popup 内容</text></view>
			</uni-popup>
		</view>

		<view>
			<!-- 提示信息弹窗 -->
			<!-- Prompt information popup -->
			<uni-popup ref="message" type="message">
				<uni-popup-message :type="msgType" :message="messageText" :duration="2000"></uni-popup-message>
			</uni-popup>
		</view>

		<view>
			<!-- 提示窗示例 -->
			<!-- Prompt window example -->
			<uni-popup ref="alertDialog" type="dialog">
				<uni-popup-dialog :type="msgType" cancelText="关闭" confirmText="同意" title="通知" content="欢迎使用 uni-popup!" @confirm="dialogConfirm"
					@close="dialogClose"></uni-popup-dialog>
			</uni-popup>
		</view>

		<view>
			<!-- 输入框示例 -->
			<!-- Input box example -->
			<uni-popup ref="inputDialog" type="dialog">
				<uni-popup-dialog ref="inputClose"  mode="input" title="输入内容" value="对话框预置提示内容!"
					placeholder="请输入内容" @confirm="dialogInputConfirm"></uni-popup-dialog>
			</uni-popup>
		</view>

		<view>
			<!-- 分享示例 -->
			<!-- share example -->
			<uni-popup ref="share" type="share" safeArea backgroundColor="#fff">
				<uni-popup-share></uni-popup-share>
			</uni-popup>
		</view>
	</view>
</template>
```
> Script

```html
<script>
	export default {
		data() {
			return {
				type: 'center',
				msgType: 'success',
				messageText: '这是一条成功提示',
				value: ''
			}
		},
		onReady() {},
		methods: {
			change(e) {
				console.log('当前模式：' + e.type + ',状态：' + e.show);
			},
			toggle(type) {
				this.type = type
				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
				// The parameter passed to the open method is equivalent to binding the type attribute on the uni-popup component
				this.$refs.popup.open(type)
			},
			messageToggle(type) {
				this.msgType = type
				this.messageText = `这是一条${type}消息提示`
				this.$refs.message.open()
			},
			dialogToggle(type) {
				this.msgType = type
				this.$refs.alertDialog.open()
			},
			dialogConfirm() {
				console.log('点击确认')
				this.messageText = `点击确认了 ${this.msgType} 窗口`
				this.$refs.message.open()
			},
			inputDialogToggle() {
				this.$refs.inputDialog.open()
			},
			dialogClose() {
				console.log('点击关闭')
			},
			dialogInputConfirm(val) {
				uni.showLoading({
					title: '3秒后会关闭'
				})

				setTimeout(() => {
					uni.hideLoading()
					console.log(val)
					this.value = val
					// 关闭窗口后，恢复默认内容
					// After closing the window, restore the default content
					this.$refs.inputDialog.close()
				}, 3000)
			},
			shareToggle() {
				this.$refs.share.open()
			}
		}
	}
</script>
```
> Style
```html
<style lang="scss">
	@mixin flex {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
	}

	@mixin height {
		/* #ifndef APP-NVUE */
		height: 100%;
		/* #endif */
		/* #ifdef APP-NVUE */
		flex: 1;
		/* #endif */
	}

	.box {
		@include flex;
	}

	.button {
		@include flex;
		align-items: center;
		justify-content: center;
		flex: 1;
		height: 35px;
		margin: 0 5px;
		border-radius: 5px;
	}

	.example-body {
		background-color: #fff;
		padding: 10px 0;
	}

	.button-text {
		color: #fff;
		font-size: 12px;
	}

	.popup-content {
		@include flex;
		align-items: center;
		justify-content: center;
		padding: 15px;
		height: 50px;
		background-color: #fff;
	}

	.popup-height {
		@include height;
		width: 200px;
	}

	.text {
		font-size: 12px;
		color: #333;
	}

	.popup-success {
		color: #fff;
		background-color: #e1f3d8;
	}

	.popup-warn {
		color: #fff;
		background-color: #faecd8;
	}

	.popup-error {
		color: #fff;
		background-color: #fde2e2;
	}

	.popup-info {
		color: #fff;
		background-color: #f2f6fc;
	}

	.success-text {
		color: #09bb07;
	}

	.warn-text {
		color: #e6a23c;
	}

	.error-text {
		color: #f56c6c;
	}

	.info-text {
		color: #909399;
	}

	.dialog,
	.share {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
	}

	.dialog-box {
		padding: 10px;
	}

	.dialog .button,
	.share .button {
		/* #ifndef APP-NVUE */
		width: 100%;
		/* #endif */
		margin: 0;
		margin-top: 10px;
		padding: 3px 0;
		flex: 1;
	}

	.dialog-text {
		font-size: 14px;
		color: #333;
	}
</style>

```
:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/popup/popup)
[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/popup/popup)