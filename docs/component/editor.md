## editor 组件

富文本编辑器，可以对图片、文字格式进行编辑和混排。

在web开发时，可以使用`contenteditable`来实现内容编辑。但这是一个dom API，在非H5平台无法使用。于是微信小程序和uni-app的App-vue提供了`editor`组件来实现这个功能，并且在uni-app的H5平台也提供了兼容。从技术本质来讲，这个组件仍然运行在视图层webview中，利用的也是浏览器的`contenteditable`功能。

编辑器导出内容支持带标签的 `html`和纯文本的 `text`，编辑器内部采用 `delta` 格式进行存储。

通过`setContents`接口设置内容时，解析插入的 `html` 可能会由于一些非法标签导致解析错误，建议开发者在应用内使用时通过 delta 进行插入。

富文本组件内部引入了一些基本的样式使得内容可以正确的展示，开发时可以进行覆盖。需要注意的是，在其它组件或环境中使用富文本组件导出的html时，需要额外引入[这段样式](https://github.com/dcloudio/uni-app/blob/master/src/core/view/components/editor/editor.css)，并维护`<ql-container><ql-editor></ql-editor></ql-container>`的结构，参考：[使用 editor 组件导出的 html](https://ask.dcloud.net.cn/article/36205)。

图片控件仅初始化时设置有效。

相关 api：[editorContext](/api/media/editor-context)

## 平台差异说明


|App					|H5			|微信小程序		|支付宝小程序|百度小程序		|抖音小程序、飞书小程序|QQ小程序		|快应用					|360小程序|快手小程序	|元服务|小红书小程序|
|:-:					|:-:		|:-:					|:-:		    |:-:					|:-:					|:-:				|:-:						|:-:			|:-:			|:-:|:-:|
|2.0+，app-vue|2.4.5+	|基础库 2.7.0+|x						|需引入动态库[引入方式](https://smartprogram.baidu.com/docs/develop/framework/dynamiclib_use/)					|x							|x				|x				|x				|x				|x|√|

<!-- UNIAPPCOMJSON.editor.compatibility -->

::: warning 注意
- editor组件目前只有H5、App的vue页面、微信小程序、百度小程序支持，其他端平台自身未提供editor组件，只能使用web-view加载web页面，也可搜索[插件市场](https://ext.dcloud.net.cn/search?q=%E5%AF%8C%E6%96%87%E6%9C%AC%E7%BC%96%E8%BE%91) 获取简单的markdown富文本编辑器
- 百度平台需引入动态库[引入方式](https://smartprogram.baidu.com/docs/develop/framework/dynamiclib_use/)
:::


## 属性说明

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| read-only | boolean | false | 否 | 设置编辑器为只读 |
| placeholder | string |  | 否 | 提示信息 |
| show-img-size | boolean | false | 否 | 点击图片时显示图片大小控件 |
| show-img-toolbar | boolean | false | 否 | 点击图片时显示工具栏控件 |
| show-img-resize | boolean | false | 否 | 点击图片时显示修改尺寸控件 |
| @ready | eventhandle |  | 否 | 编辑器初始化完成时触发 |
| @focus | eventhandle |  | 否 | 编辑器聚焦时触发，event.detail = {html, text, delta} |
| @blur | eventhandle |  | 否 | 编辑器失去焦点时触发，detail = {html, text, delta} |
| @input | eventhandle |  | 否 | 编辑器内容改变时触发，detail = {html, text, delta} |
| @statuschange | eventhandle |  | 否 | 通过 Context 方法改变编辑器内样式时触发，返回选区已设置的样式 |

## HTML 标签和 style 内联样式支持情况

编辑器内支持部分 HTML 标签和内联样式，不支持**class**和**id**


### 支持的标签

不满足的标签会被忽略，`<div>`会被转行为`<p>`储存。

| 类型 | 节点 |平台差异说明 |
| --- | --- |--- |
| 行内元素 | `<span> <strong> <b> <ins> <em> <i> <u> <a> <del> <s> <sub> <sup> <img>` |其中`<ins> <del>` 百度小程序不支持 |
| 块级元素 | `<br> <p> <h1> <h2> <h3> <h4> <h5> <h6> <hr> <ol> <ul> <li>` |其中`<br>`仅百度小程序支持、`<p>`百度小程序不支持|

### 支持的内联样式

内联样式仅能设置在行内元素或块级元素上，不能同时设置。例如 font-size` 归类为行内元素属性，在 p 标签上设置是无效的。

| 类型 | 样式 |平台差异说明 |
| --- | --- |--- |
| 块级样式 | `text-align` `direction` `margin` `margin-top` `margin-left` `margin-right` `margin-bottom` `padding` `padding-top` `padding-left` `padding-right` `padding-bottom` `line-height` `text-indent` |百度小程序仅支持`text-align、direction`|
| 行内样式 | `font` `font-size` `font-style` `font-variant` `font-weight` `font-family` `letter-spacing` `text-decoration` `color` `background-color` |百度小程序仅支持`color、background-color`|

## H5 使用最佳实践

近期部分用户反馈访问 `unpkg` 失败，导致 `editor` 组件初始化异常。这里提供代码块，方便用户修改。

### 方案一：自行托管 CDN 资源

分别下载[quill.min.js](https://unpkg.com/quill@1.3.7/dist/quill.min.js)、[image-resize.min.js](https://unpkg.com/quill-image-resize-mp@3.0.1/image-resize.min.js)，放入 `static` 目录中。

在 `index.html`(Vue 3)，或者 `public/index.html`(Vue2) 中在 `head` 之间添加 js

```html
<head>
  <script src="/static/quill-1.3.7.min.js"></script>
  <script src="/static/image-resize-3.0.1.min.js"></script>
</head>
```

这样 `editor` 组件就可以正常使用了，代码逻辑中检测到有相关 `window.Quill` 变量，就不会从远程获取资源。

### 方案二：从 npm 中处理资源

方案一的解决思路是在 `window` 上进行挂载，同样，我们可以在项目入口 `main.js` 或者 `App.vue`中引用相关依赖即可。

在项目中添加相关依赖：

```bash
npm i quill@1.3.7
```

在组件页面或者 `main.ts` 入口逻辑中，使用下面方案，注入依赖：

```js
// #ifdef H5
import quill from "quill";
window.Quill = quill;
// #endif
```

相比方案一，方案二好处是依赖清晰，引用透明。如果你熟悉 `npm` 生态和构建流程，推荐方案二。


## 注意事项

* 插入的 html 中事件绑定会被移除
* formats 中的 color 属性会统一以 hex 格式返回
* 粘贴时仅纯文本内容会被拷贝进编辑器
* 插入 html 到编辑器内时，编辑器会删除一些不必要的标签，以保证内容的统一。例如`<p><span>xxx</span></p>`会改写为`<p>xxx</p>`
* 编辑器聚焦时页面会被上推，系统行为以保证编辑区可见
* H5 端需要动态引入 [quill.min.js](https://unpkg.com/quill@1.3.7/dist/quill.min.js)、[image-resize.min.js](https://unpkg.com/quill-image-resize-mp@3.0.1/image-resize.min.js) 依赖，默认情况下浏览器会从 [unpkg.com](https://unpkg.com) 加载。如果依赖加载较慢或失败，uni-app 建议使用通过测试的 js 依赖保证效果一致，访问 [github.com](https://github.com/dcloudio/uni-app/tree/dev/src/core/view/components/editor/quill) 或者 [gitee.com](https://gitee.com/dcloud/uni-app/tree/dev/src/core/view/components/editor/quill) 选择下载。可以放入 `static` 目录进行托管，或者使用 CDN 服务商。为了保证服务的稳定性，推荐开发者将所有前端资源使用 [uniCloud 前端网页托管](https://uniapp.dcloud.net.cn/uniCloud/hosting.html) 服务进行托管，然后在 [自定义模板](../collocation/manifest?id=h5-template) 的 `head` 标签内引入相关 js 依赖。
* 不能直接插入视频或者其他文件，编辑时可以采用视频封面或者文件缩略图占位，并在图片属性中保存视频信息，预览时读取附加信息再还原为视频或者其他文件操作。


**示例代码** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/editor/editor)

::: preview https://hellouniapp.dcloud.net.cn/pages/component/editor/editor
> Template
``` vue
<template>
	<view class="container">
		<view class="page-body">
			<view class='wrapper'>
				<view class='toolbar' @tap="format" style="height: 120px;overflow-y: auto;">
					<view :class="formats.bold ? 'ql-active' : ''" class="iconfont icon-zitijiacu" data-name="bold">
					</view>
					<view :class="formats.italic ? 'ql-active' : ''" class="iconfont icon-zitixieti" data-name="italic">
					</view>
					<view :class="formats.underline ? 'ql-active' : ''" class="iconfont icon-zitixiahuaxian"
						data-name="underline"></view>
					<view :class="formats.strike ? 'ql-active' : ''" class="iconfont icon-zitishanchuxian"
						data-name="strike"></view>
					<!-- #ifndef MP-BAIDU -->
					<view :class="formats.align === 'left' ? 'ql-active' : ''" class="iconfont icon-zuoduiqi"
						data-name="align" data-value="left"></view>
					<!-- #endif -->
					<view :class="formats.align === 'center' ? 'ql-active' : ''" class="iconfont icon-juzhongduiqi"
						data-name="align" data-value="center"></view>
					<view :class="formats.align === 'right' ? 'ql-active' : ''" class="iconfont icon-youduiqi"
						data-name="align" data-value="right"></view>
					<view :class="formats.align === 'justify' ? 'ql-active' : ''" class="iconfont icon-zuoyouduiqi"
						data-name="align" data-value="justify"></view>
					<!-- #ifndef MP-BAIDU -->
					<view :class="formats.lineHeight ? 'ql-active' : ''" class="iconfont icon-line-height"
						data-name="lineHeight" data-value="2"></view>
					<view :class="formats.letterSpacing ? 'ql-active' : ''" class="iconfont icon-Character-Spacing"
						data-name="letterSpacing" data-value="2em"></view>
					<view :class="formats.marginTop ? 'ql-active' : ''" class="iconfont icon-722bianjiqi_duanqianju"
						data-name="marginTop" data-value="20px"></view>
					<view :class="formats.marginBottom ? 'ql-active' : ''" class="iconfont icon-723bianjiqi_duanhouju"
						data-name="marginBottom" data-value="20px"></view>
					<!-- #endif -->

					<view class="iconfont icon-clearedformat" @tap="removeFormat"></view>

					<!-- #ifndef MP-BAIDU -->
					<view :class="formats.fontFamily ? 'ql-active' : ''" class="iconfont icon-font"
						data-name="fontFamily" data-value="Pacifico"></view>
					<view :class="formats.fontSize === '24px' ? 'ql-active' : ''" class="iconfont icon-fontsize"
						data-name="fontSize" data-value="24px"></view>
					<!-- #endif -->
					<view :class="formats.color === '#0000ff' ? 'ql-active' : ''" class="iconfont icon-text_color"
						data-name="color" data-value="#0000ff"></view>
					<view :class="formats.backgroundColor === '#00ff00' ? 'ql-active' : ''"
						class="iconfont icon-fontbgcolor" data-name="backgroundColor" data-value="#00ff00"></view>
					<view class="iconfont icon-date" @tap="insertDate"></view>
					<view class="iconfont icon--checklist" data-name="list" data-value="check"></view>
					<view :class="formats.list === 'ordered' ? 'ql-active' : ''" class="iconfont icon-youxupailie"
						data-name="list" data-value="ordered"></view>
					<view :class="formats.list === 'bullet' ? 'ql-active' : ''" class="iconfont icon-wuxupailie"
						data-name="list" data-value="bullet"></view>

					<view class="iconfont icon-undo" @tap="undo"></view>
					<view class="iconfont icon-redo" @tap="redo"></view>

					<view class="iconfont icon-outdent" data-name="indent" data-value="-1"></view>
					<view class="iconfont icon-indent" data-name="indent" data-value="+1"></view>
					<view class="iconfont icon-fengexian" @tap="insertDivider"></view>
					<view class="iconfont icon-charutupian" @tap="insertImage"></view>
					<view :class="formats.header === 1 ? 'ql-active' : ''" class="iconfont icon-format-header-1"
						data-name="header" :data-value="1"></view>
					<view :class="formats.script === 'sub' ? 'ql-active' : ''" class="iconfont icon-zitixiabiao"
						data-name="script" data-value="sub"></view>
					<view :class="formats.script === 'super' ? 'ql-active' : ''" class="iconfont icon-zitishangbiao"
						data-name="script" data-value="super"></view>

					<view class="iconfont icon-shanchu" @tap="clear"></view>

					<view :class="formats.direction === 'rtl' ? 'ql-active' : ''" class="iconfont icon-direction-rtl"
						data-name="direction" data-value="rtl"></view>
				</view>

				<view class="editor-wrapper">
					<editor id="editor" class="ql-container" placeholder="开始输入..." show-img-size show-img-toolbar
						show-img-resize @statuschange="onStatusChange" :read-only="readOnly" @ready="onEditorReady">
					</editor>
				</view>
			</view>
		</view>
	</view>
</template>
```
> Script
``` vue
<script>
	export default {
		data() {
			return {
				readOnly: false,
				formats: {}
			}
		},
		onLoad() {
			// #ifndef MP-BAIDU
			uni.loadFontFace({
				family: 'Pacifico',
				source: 'url("https://sungd.github.io/Pacifico.ttf")'
			})
			// #endif
		},
		methods: {
			readOnlyChange() {
				this.readOnly = !this.readOnly
			},
			onEditorReady() {
				// #ifdef MP-BAIDU
				this.editorCtx = requireDynamicLib('editorLib').createEditorContext('editor');
				// #endif

				// #ifdef APP-PLUS || MP-WEIXIN || H5
				uni.createSelectorQuery().select('#editor').context((res) => {
					this.editorCtx = res.context
				}).exec()
				// #endif
			},
			undo() {
				this.editorCtx.undo()
			},
			redo() {
				this.editorCtx.redo()
			},
			format(e) {
				let {
					name,
					value
				} = e.target.dataset
				if (!name) return
				// console.log('format', name, value)
				this.editorCtx.format(name, value)
			},
			onStatusChange(e) {
				const formats = e.detail
				this.formats = formats
			},
			insertDivider() {
				this.editorCtx.insertDivider({
					success: function() {
						console.log('insert divider success')
					}
				})
			},
			clear() {
				uni.showModal({
					title: '清空编辑器',
					content: '确定清空编辑器全部内容？',
					success: res => {
						if (res.confirm) {
							this.editorCtx.clear({
								success: function(res) {
									console.log("clear success")
								}
							})
						}
					}
				})
			},
			removeFormat() {
				this.editorCtx.removeFormat()
			},
			insertDate() {
				const date = new Date()
				const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
				this.editorCtx.insertText({
					text: formatDate
				})
			},
			insertImage() {
				uni.chooseImage({
					count: 1,
					success: (res) => {
						this.editorCtx.insertImage({
							src: res.tempFilePaths[0],
							alt: '图像',
							success: function() {
								console.log('insert image success')
							}
						})
					}
				})
			}
		}
	}
</script>
```
> Style
``` vue
<style>
	@import "./editor-icon.css";

	.page-body {
		height: calc(100vh - var(--window-top) - var(--status-bar-height));
	}

	.wrapper {
		height: 100%;
	}

	.editor-wrapper {
		height: calc(100vh - var(--window-top) - var(--status-bar-height) - 140px);
		background: #fff;
	}

	.iconfont {
		display: inline-block;
		padding: 8px 8px;
		width: 24px;
		height: 24px;
		cursor: pointer;
		font-size: 20px;
	}

	.toolbar {
		box-sizing: border-box;
		border-bottom: 0;
		font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
	}

	.ql-container {
		box-sizing: border-box;
		padding: 12px 15px;
		width: 100%;
		min-height: 30vh;
		height: 100%;
		margin-top: 20px;
		font-size: 16px;
		line-height: 1.5;
	}

	.ql-active {
		color: #06c;
	}
</style>
```
:::

一个完整的内容管理系统 `Content Management System` 比较复杂，DCloud已提供好了现成的 `uni-cms`，开源、免费、全端可用、功能完善，包括管理端和用户端。还内置了 AI 生成文章和广告变现功能。详见：[https://uniapp.dcloud.net.cn/uniCloud/uni-cms.html](https://uniapp.dcloud.net.cn/uniCloud/uni-cms.html)

<!-- UNIAPPCOMJSON.editor.reference -->
