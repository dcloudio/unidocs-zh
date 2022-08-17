<md-translatedByGoogle />
#### editor

富文本编辑器，可以对图片、文字格式进行编辑和混排。
Rich text editor, which can edit and mix images and text formats.

在web开发时，可以使用`contenteditable`来实现内容编辑。但这是一个dom API，在非H5平台无法使用。于是微信小程序和uni-app的App-vue提供了`editor`组件来实现这个功能，并且在uni-app的H5平台也提供了兼容。从技术本质来讲，这个组件仍然运行在视图层webview中，利用的也是浏览器的`contenteditable`功能。
In web development, you can use `contenteditable` to implement content editing. But this is a dom API and cannot be used on non-H5 platforms. So WeChat applet and App-vue of uni-app provide the `editor` component to realize this function, and also provide compatibility on the H5 platform of uni-app. Technically speaking, this component still runs in the view layer webview, using the browser's `contenteditable` feature.

编辑器导出内容支持带标签的 `html`和纯文本的 `text`，编辑器内部采用 `delta` 格式进行存储。
The export content of the editor supports tagged `html` and plain text `text`, and the editor uses the `delta` format for storage.

通过`setContents`接口设置内容时，解析插入的 `html` 可能会由于一些非法标签导致解析错误，建议开发者在应用内使用时通过 delta 进行插入。
When setting content through the `setContents` interface, parse the inserted `html` may cause parsing errors due to some illegal tags. It is recommended that developers insert them through delta when using them in the app.

富文本组件内部引入了一些基本的样式使得内容可以正确的展示，开发时可以进行覆盖。需要注意的是，在其它组件或环境中使用富文本组件导出的html时，需要额外引入[这段样式](https://github.com/dcloudio/uni-app/blob/master/src/core/view/components/editor/editor.css)，并维护`<ql-container><ql-editor></ql-editor></ql-container>`的结构，参考：[使用 editor 组件导出的 html](https://ask.dcloud.net.cn/article/36205)。
Some basic styles are introduced into the rich text component to display the content correctly, and it can be overridden during development. It should be noted that when using html exported by rich-text components in other components or environments, you need to additionally introduce [this style](https://github.com/dcloudio/uni-app/blob/master/src/core/view/components/editor/editor.css) and maintain the structure of `<ql-container><ql-editor></ql-editor></ql-container>`, refer to [Html exported using the editor component](https://ask.dcloud.net.cn/article/36205).

图片控件仅初始化时设置有效。
The setting of image controls is valid only during initiation.

相关 api：[editorContext](/api/media/editor-context)
Related api: [editorContext](/api/media/editor-context)

**平台差异说明**
**Platform difference description**

|App					|H5			|微信小程序		|支付宝小程序|百度小程序		|字节跳动小程序、飞书小程序|QQ小程序		|快应用					|360小程序|快手小程序	|
|App |H5 |WeChat applet |Alipay applet |Baidu applet |ByteDance applet, Feishu applet |QQ applet |Quick app |360 applet | Kuaishou applet |
|:-:					|:-:		|:-:					|:-:		    |:-:					|:-:					|:-:				|:-:						|:-:			|:-:			|
|2.0+，app-vue|2.4.5+	|基础库 2.7.0+|x						|需引入动态库[引入方式](https://smartprogram.baidu.com/docs/develop/framework/dynamiclib_use/)					|x							|x				|x				|x				|x				|
|2.0+, app-vue|2.4.5+ |Basic library 2.7.0+|x |Need to import dynamic library [introduction method](https://smartprogram.baidu.com/docs/develop/framework/dynamiclib_use/) |x |x |x |x |x |

editor组件目前只有H5、App的vue页面、微信小程序、百度小程序支持，其他端平台自身未提供editor组件，只能使用web-view加载web页面，也可搜索[插件市场](https://ext.dcloud.net.cn/search?q=%E5%AF%8C%E6%96%87%E6%9C%AC%E7%BC%96%E8%BE%91) 获取简单的markdown富文本编辑器
The editor component is currently only supported by H5, App's vue page, WeChat applet, and Baidu applet. Other platforms do not provide editor components themselves. You can only use web-view to load web pages, and you can also search the [plug-in market] (https:/ /ext.dcloud.net.cn/search?q=%E5%AF%8C%E6%96%87%E6%9C%AC%E7%BC%96%E8%BE%91) Get simple markdown rich text editor

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| Attribute| Type| Defaults| Required| Instruction|
| --- | --- | --- | --- | --- |
| read-only | boolean | false | 否 | 设置编辑器为只读 |
| read-only| boolean| false| No| Set the editor to read-only|
| placeholder | string |  | 否 | 提示信息 |
| placeholder| string| | No| Prompt information|
| show-img-size | boolean | false | 否 | 点击图片时显示图片大小控件 |
| show-img-size| boolean| false| No| Display image size controls when clicking the image|
| show-img-toolbar | boolean | false | 否 | 点击图片时显示工具栏控件 |
| show-img-toolbar| boolean| false| No| Display toolbar controls when clicking the image|
| show-img-resize | boolean | false | 否 | 点击图片时显示修改尺寸控件 |
| show-img-resize| boolean| false| No| Display modified size controls when clicking the image|
| @ready | eventhandle |  | 否 | 编辑器初始化完成时触发 |
| @ready| eventhandle| | No| Trigger when the editor is initialized|
| @focus | eventhandle |  | 否 | 编辑器聚焦时触发，event.detail = {html, text, delta} |
| @focus| eventhandle| | No| Triggered when the editor getting focus, event.detail = {html, text, delta}|
| @blur | eventhandle |  | 否 | 编辑器失去焦点时触发，detail = {html, text, delta} |
| @blur| eventhandle| | No| Triggered when the editor losing focus, detail = {html, text, delta}|
| @input | eventhandle |  | 否 | 编辑器内容改变时触发，detail = {html, text, delta} |
| @input| eventhandle| | No| Triggered when the editor content changing, event.detail, detail = {html, text, delta}|
| @statuschange | eventhandle |  | 否 | 通过 Context 方法改变编辑器内样式时触发，返回选区已设置的样式 |
| @statuschange| eventhandle| | No| Trigger when styles in the editor are changing by the Context method, and return the styles that have been set on the selection|

编辑器内支持部分 HTML 标签和内联样式，不支持**class**和**id**
The editor internally supports some HTML tags and inline styles, but does not support **class** and **id**

#### 支持的标签
#### Supported tags

不满足的标签会被忽略，`<div>`会被转行为`<p>`储存。
Unsatisfactory tags will be ignored and `<div>` will be transferred to `<p>` and stored.

| 类型 | 节点 |平台差异说明 |
| Type | Node | Platform Difference Description |
| --- | --- |--- |
| 行内元素 | `<span> <strong> <b> <ins> <em> <i> <u> <a> <del> <s> <sub> <sup> <img>` |其中`<ins>  <del> `百度小程序不支持 |
| inline element | `<ins><del> <span><strong><b><em><i><u><a><s><sub><sup><img>`|where`</sup></sub></s></a></u></i></em></b></strong></span><ins><del> <span><strong><b>`Baidu applet does not support |</b></strong></span>
| 块级元素 | `<br> <p> <h1> <h2> <h3> <h4> <h5> <h6> <hr> <ol> <ul> <li>` |其中`<br>`仅百度小程序支持、`<p>`百度小程序不支持|
| block-level elements | `<br><p><h1><h2><h3><h4><h5><h6><hr><ol><ul><li> `|where`<br> `Only Baidu applet supports,`<p> `Baidu applet does not support |

#### 支持的内联样式
#### Supported inline styles

内联样式仅能设置在行内元素或块级元素上，不能同时设置。例如 font-size` 归类为行内元素属性，在 p 标签上设置是无效的。
Inline styles can only be set on inline elements or block-level elements, but not both. For example, font-size is classified as an inline element attribute, so that setting it on the p tag is invalid.

| 类型 | 样式 |平台差异说明 |
| Type | Style | Platform Difference Description |
| --- | --- |--- |
| 块级样式 | `text-align` `direction` `margin` `margin-top` `margin-left` `margin-right` `margin-bottom` `padding` `padding-top` `padding-left` `padding-right` `padding-bottom` `line-height` `text-indent` |百度小程序仅支持`text-align、direction`|
| Block-level styles | `text-align` `direction` `margin` `margin-top` `margin-left` `margin-right` `margin-bottom` `padding` `padding-top` `padding-left` ` padding-right` `padding-bottom` `line-height` `text-indent` |Baidu applet only supports `text-align, direction`|
| 行内样式 | `font` `font-size` `font-style` `font-variant` `font-weight` `font-family` `letter-spacing` `text-decoration` `color` `background-color` |百度小程序仅支持`color、background-color`|
| Inline styles | `font` `font-size` `font-style` `font-variant` `font-weight` `font-family` `letter-spacing` `text-decoration` `color` `background-color` |Baidu applet only supports `color, background-color`|

**注意事项**
**Precautions**

* 插入的 html 中事件绑定会被移除
* Event binding in inserted html event will be removed
* formats 中的 color 属性会统一以 hex 格式返回
* color attribute in formats will be returned in hex format
* 粘贴时仅纯文本内容会被拷贝进编辑器
* Only plain text content will be copied into the editor when pasting
* 插入 html 到编辑器内时，编辑器会删除一些不必要的标签，以保证内容的统一。例如`<p><span>xxx</span></p>`会改写为`<p>xxx</p>`
* When html is inserted into the editor, the editor will delete some unnecessary tags to ensure the unity of content. For example, `<p><span>xxx</span></p>` will be rewritten as `<p>xxx</p>`
* 编辑器聚焦时页面会被上推，系统行为以保证编辑区可见
* When the editor is focused, the page will be pushed up, and the system behavior will ensure that the editing area is visible
* H5端会动态引入依赖 [quill.min.js](https://unpkg.com/quill@1.3.7/dist/quill.min.js)、[image-resize.min.js](https://unpkg.com/quill-image-resize-mp@3.0.1/image-resize.min.js)，依赖从 [unpkg.com](https://unpkg.com) 加载，如过依赖加载较慢，可以下载下来放在自己的服务器或 CDN 服务商，然后在 [自定义模板](/collocation/manifest?id=h5-template) head 内引入。
* The H5 side will dynamically introduce the dependency [quill.min.js](https://unpkg.com/quill@1.3.7/dist/quill.min.js), [image-resize.min.js](https://unpkg.com/quill-image-resize-mp@3.0.1/image-resize.min.js), and the dependency will be loaded from [unpkg.com](https://unpkg.com). If the dependency is slow to load, you can download it and put it on your own server or CDN service provider, and then import it in the [custom template](/collocation/manifest?id=h5-template) head.
* 不能直接插入视频，编辑时可以采用视频封面占位，并在图片属性中保存视频信息，预览时再还原为视频。
* Videos can't be inserted directly. When editing, use video covers as placeholders, save the video information in the image attributes, and then restore it to video during previewing.


**示例代码** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/editor/editor)
**Example code** [View demo](https://hellouniapp.dcloud.net.cn/pages/component/editor/editor)

::: preview https://hellouniapp.dcloud.net.cn/pages/component/editor/editor
> Template
``` vue
<template>
	<view class="container">
		<editor id="editor" class="ql-container" :placeholder="placeholder" @ready="onEditorReady"></editor>
		<button type="warn" @tap="undo">撤销</button>
	</view>
</template>
``` 
> Script
``` vue
<script>
	export default {
		data() {
			return {
				placeholder: '开始输入...'
			}
		},
		methods: {
			onEditorReady() {
			    // #ifdef MP-BAIDU
			    this.editorCtx = requireDynamicLib('editorLib').createEditorContext('editor');
			    // #endif
			    
			    // #ifdef APP-PLUS || H5 ||MP-WEIXIN
			    uni.createSelectorQuery().select('#editor').context((res) => {
			      this.editorCtx = res.context
			    }).exec()
			    // #endif
			},
			undo() {
				this.editorCtx.undo()
			}
		}
	}
</script>
``` 
> Style
``` vue
<style>
	.container {
		padding: 10px;
	}

	#editor {
		width: 100%;
		height: 300px;
		background-color: #CCCCCC;
	}

	button {
		margin-top: 10px;
	}
</style>
```
:::