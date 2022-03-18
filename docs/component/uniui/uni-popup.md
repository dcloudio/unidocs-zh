
::: tip 组件名：uni-popup
> 代码块： `uPopup`
> 关联组件：`uni-popup-dialog`,`uni-popup-message`,`uni-popup-share`,`uni-transition`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-popup)
:::

弹出层组件，在应用中弹出一个消息提示窗口、提示框等

## 介绍
::: warning 注意事项
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
> - 组件需要依赖 `sass` 插件 ，请自行手动安装
- `uni-popup-message` 、 `uni-popup-dialog` 等扩展ui组件，需要和 `uni-popup` 配套使用，暂不支持单独使用
- `nvue` 中使用 `uni-popup` 时，尽量将组件置于其他元素后面，避免出现层级问题
- `uni-popup` 并不能完全阻止页面滚动，可在打开 `uni-popup` 的时候手动去做一些处理，禁止页面滚动
- 如果想在页面渲染完毕后就打开 `uni-popup` ，请在 `onReady` 或 `mounted` 生命周期内调用，确保组件渲染完毕
- 在微信小程序开发者工具中，启用真机调试，popup 会延时出现，是因为 setTimeout 在真机调试中的延时问题导致的，预览和发布小程序不会出现此问题
- 使用 `npm` 方式引入组件，如果确认引用正确，但是提示未注册组件或显示不正常，请尝试重新编译项目
- `uni-popup` 中尽量不要使用 `scroll-view` 嵌套过多的内容，可能会影响组件的性能，导致组件无法打开或者打开卡顿
- `uni-popup` 不会覆盖原生 tabbar 和原生导航栏
- app-vue 中组件无法遮盖 video ，ad 等原生组件 ，建议使用 nvue 
- 组件支持 nvue ，需要在 `manifest.json > app-plus` 节点下配置 `"nvueStyleCompiler" : "uni-app"` 
:::
### 基本用法 

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
        this.$refs.popup.open('top')
      }
   }
}
</script>

```

### 设置主窗口背景色

在大多数场景下，并不需要设置 `background-color` 属性，因为`uni-popup`的主窗口默认是透明的，在向里面插入内容的时候 ，样式完全交由用户定制，如果设置了背景色 ，例如 `uni-popup-dialog` 中的圆角就很难去实现，不设置背景色，更适合用户去自由发挥。

而也有特例，需要我们主动去设置背景色，例如 `type = 'bottom'` 的时候 ，在异型屏中遇到了底部安全区问题（如 iphone 11），因为 `uni-popup`的主要内容避开了安全区（设置`safe-area:true`），导致底部的颜色我们无法自定义，这时候使用 `background-color` 就可以解决这个问题。 

**示例**

```html
<button @click="open">打开弹窗</button>
<uni-popup ref="popup" type="bottom" background-color="#fff">底部弹出 Popup</uni-popup>
```

### 禁用打开动画
在某些场景 ，可能不希望弹层有动画效果 ，只需要将 `animation` 属性设置为 `false` 即可以关闭动画。

**示例**

```html
<button @click="open">打开弹窗</button>
<uni-popup ref="popup" type="center" :animation="false">中间弹出 Popup</uni-popup>
```

### 禁用点击遮罩关闭
默认情况下，点击遮罩会自动关闭`uni-popup`，如不想点击关闭，只需将`mask-click`设置为`false`，这时候要关闭`uni-popup`，只能手动调用 `close` 方法。

**示例**

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
|:-:|:-:|:-:|:-:|
|animation|Boolean|true|是否开启动画|
|type|String|'center'|弹出方式|
|mask-click **[即将废弃]**|Boolean|true|蒙版点击是否关闭弹窗|
|is-mask-click **[1.7.4新增]**|Boolean|true|蒙版点击是否关闭弹窗|
|mask-background-color **[1.7.4新增]**|rgba|rgba(0,0,0,0.4)|蒙版颜色，建议使用 rgba 颜色值|
|background-color|String|'none'|主窗口背景色|
|safe-area|Boolean|true|是否适配底部安全区|

#### Type Options

|属性名|说明|
|:-:| :-:|
|top|顶部弹出	|
|center|居中弹出|
|bottom|底部弹出|
|left|左侧弹出|
|right|右侧弹出|
|message|预置样式 ：消息提示|
|dialog|预置样式 ：对话框|
|share|预置样式 ：底部弹出分享示例	|


### Popup Methods

|方法称名	|说明|参数|
|:-:|:-:|:-:|
|open|打开弹出层|open(String:type) ，如果参数可代替 type 属性|
|close|关闭弹出层	|-|


### Popup Events

|事件称名|说明|返回值|
|:-:|:-:|:-:|
|change|组件状态发生变化触发|e={show: true｜false,type:当前模式}|
|maskClick|点击遮罩层触发|-|


## 扩展组件说明
`uni-popup` 其实并没有任何样式，只提供基础的动画效果，给用户一个弹出层解决方案，仅仅是这样并不能满足开发需求，所以我们提供了三种基础扩展样式

### uni-popup-message 提示信息

将 `uni-popup` 的`type`属性改为 `message`，并引入对应组件即可使用消息提示 ，*该组件不支持单独使用*

**示例**

```html
<uni-popup ref="popup" type="message">
	<uni-popup-message type="success" message="成功消息" :duration="2000"></uni-popup-message>
</uni-popup>
```

### PopupMessage Props

|属性名|类型|默认值|说明|
|:-:|:-:|:-:|:-:|
|type|String|success|消息提示主题|
|message|String|-|消息提示文字|
|duration|Number|3000|消息显示时间，超过显示时间组件自动关闭，设置为0 将不会关闭，需手动调用 close 方法关闭|

#### Type Options

|属性名|说明|
|:-:| :-:|
|success|成功|
|warn|警告|
|error|失败|
|info|消息|

### PopupMessage Slots

|名称|说明|					
|:-:|:-:|						
|default|消息内容，会覆盖 message 属性|

### uni-popup-dialog 对话框

将 `uni-popup` 的`type`属性改为 `dialog`，并引入对应组件即可使用对话框 ，*该组件不支持单独使用*

**示例**

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
|:-:|:-:|:-:|:-:|
|type|String|success|对话框标题主题，可选值： success/warn/info/error|
|mode|String|base| 对话框模式，可选值：base（提示对话框）/input（可输入对话框）|
|title|String|-|对话框标题|
|content|String|-|对话框内容，base模式下生效|
|confirmText **[1.7.4新增]**|String|-|定义确定按钮文本|
|cancelText **[1.7.4新增]**|String|-|定义取消按钮文本|
|value| String\Number|-|输入框默认值，input模式下生效|
|placeholder|String|-|输入框提示文字，input模式下生效|
|before-close|Boolean|false	| 是否拦截按钮事件，如为true，则不会关闭对话框，关闭需要手动执行 uni-popup 的 close 方法|

#### PopupDialog Events

|事件称名	|说明|返回值|
|:-:|:-:|:-:|
|close|点击dialog取消按钮触发|-|
|confirm|点击dialog确定按钮触发|e={value:input模式下输入框的值}|

### PopupDialog Slots

|名称|说明|					
|:-:|:-:|						
|default|自定义内容，会覆盖原有的内容显示|

### uni-popup-share 分享示例

分享示例，不作为最终可使用的组件，只做为样式组件，供用户自行修改，`后续的开发计划是实现实际的分享逻辑，参数可配置`。

将 `uni-popup` 的 `type` 属性改为 `share`，并引入对应组件即可使用 ，*该组件不支持单独使用*

**示例**

```html
<uni-popup ref="popup" type="share">
	<uni-popup-share title="分享到" @select="select"></uni-popup-share>
</uni-popup>
```

### PopupShare Props

|属性名|类型|默认值|说明|
|:-:|:-:|:-:| :-:			|
|title|String|-|分享弹窗标题|
|before-close|Boolean|false	| 是否拦截按钮事件，如为true，则不会关闭对话框，关闭需要手动执行 uni-popup 的 close 方法|

### PopupShare Events

|事件称名|说明|返回值|
|:-:|:-:|:-:|
|select|选择触发|e = {item,index}：所选参数|

**Tips**
- share 分享组件，只是作为一个扩展示例，如果需要修改数据源，请到组件内修改



## 禁止滚动穿透

使用组件时，会发现内容部分滚动到底时，继续划动会导致底层页面的滚动，这就是滚动穿透。

但由于平台自身原因，除了h5平台外 ，其他平台都不能在在组件内禁止滚动穿透，所以在微信小程序、App 平台，页面内需要用户特殊处理一下

### 微信小程序/App
在 `微信小程序/App` 平台可使用 `page-meta` 组件动态修改页面样式 ，

需要在 data 中定义一个变量，用来表示 `uni-popup` 的开启关闭状态，并通过这个变量修改 `page-meta` 的 `overflow` 属性。

在 `uni-popup` 的 `@change` 事件中可以接受到 `uni-popup` 的开启关闭状态 ，并赋值给上面的变量

**下面是关键代码片段：**

```html
<template>
	<page-meta :page-style="'overflow:'+(show?'hidden':'visible')"></page-meta>
	<view class="container">
		<!-- 普通弹窗 -->
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
- wx、app 需要 使用 page-meta 组件配合阻止滚动穿透
- 注意 page-meta 组件，一个页面只能存在一个
- 其他平台无法阻止滚动穿透，建议使用 scroll-view 滚动 ，手动设置 overflow:hidden,同 page-meta 方法一致



## 示例
::: warning 注意
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-popup) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
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
			<uni-popup ref="popup" background-color="#fff" @change="change">
				<view class="popup-content" :class="{ 'popup-height': type === 'left' || type === 'right' }"><text
						class="text">popup 内容</text></view>
			</uni-popup>
		</view>

		<view>
			<!-- 提示信息弹窗 -->
			<uni-popup ref="message" type="message">
				<uni-popup-message :type="msgType" :message="messageText" :duration="2000"></uni-popup-message>
			</uni-popup>
		</view>

		<view>
			<!-- 提示窗示例 -->
			<uni-popup ref="alertDialog" type="dialog">
				<uni-popup-dialog :type="msgType" cancelText="关闭" confirmText="同意" title="通知" content="欢迎使用 uni-popup!" @confirm="dialogConfirm"
					@close="dialogClose"></uni-popup-dialog>
			</uni-popup>
		</view>

		<view>
			<!-- 输入框示例 -->
			<uni-popup ref="inputDialog" type="dialog">
				<uni-popup-dialog ref="inputClose"  mode="input" title="输入内容" value="对话框预置提示内容!"
					placeholder="请输入内容" @confirm="dialogInputConfirm"></uni-popup-dialog>
			</uni-popup>
		</view>

		<view>
			<!-- 分享示例 -->
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