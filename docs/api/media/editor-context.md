## editorContext

editor 组件对应的 editorContext 实例，可通过 [uni.createSelectorQuery](/api/ui/nodes-info?id=createselectorquery) 获取。
The editorContext instance corresponding to the editor component can be accessed through [uni.createSelectorQuery](/api/ui/nodes-info?id=createselectorquery).

```js
	onEditorReady() {
		uni.createSelectorQuery().select('#editor').context((res) => {
			this.editorCtx = res.context
		}).exec()
	}
```

百度小程序 `Editor` 富文本编辑器动态库提供了 `createEditorContext` 的方法来获取。
The Baidu applet `Editor` rich text editor dynamic library provides the `createEditorContext` method to get it.

```js
	onEditorReady() {
		this.editorCtx = requireDynamicLib('editorLib').createEditorContext('editor');
	}
```


`editorContext` 通过 `id` 跟一个 [`<editor>`](/component/editor) 组件绑定，操作对应的 [`<editor>`](/component/editor) 组件。
`editorContext` is bound to a [`<editor>`](/component/editor) component through `id`, and operates the corresponding [`<editor>`](/component/editor) component.




**平台差异说明**
**Platform difference description**

|App|H5	|微信小程序	|支付宝小程序	|百度小程序	|抖音小程序、飞书小程序	|QQ小程序	|快手小程序|京东小程序|
|:-:|:-:		|:-:		|:-:				|:-:			|:-:				|:-:		|:-:		|:-:	|
|√	|2.4.5+	|√			|x					|需引入动态库	|x				|x			|x			|x		|
|√ |2.4.5+ |√ |x |A dynamic library needs to be imported |x |x |x |x |


**百度小程序引入动态库**
**Baidu applet introduces dynamic library**


1. 在项目中引用动态库，在 `manifest.json` 中增添一项 `dynamicLib` 
1. To reference the dynamic library in the project, add a `dynamicLib` to `manifest.json`
 
```js
	"mp-baidu" : {
		"appid" : "",
		"setting" : {
			"urlCheck" : true
		},
		"dynamicLib": {//引入百度小程序动态库
			"editorLib": {
				"provider": "swan-editor"
			}
		}
	}
```

2. 在每个使用到富文本编辑器组件的页面，配置 `pages.json` 文件如下：
2. On each page that uses the Rich Text Editor component, configure the `pages.json` file as follows:

``` js 
{
	"pages": [ 
		{
			"path": "pages/index/index",
			"style": {
				"navigationBarTitleText": "uni-app",
				"usingComponents": {
					"editor": "dynamicLib://editorLib/editor"
				}
			}
		}
	]
}

```




## editorContext.format(name, value)

修改样式
Modify style

| 参数 | 类型 | 说明 |
| Parameter| Type| Instruction|
| --- | --- | --- |
|name|String|属性|
| name| String| Attribute|
|value|String|值|
| value| String| Value|

**支持设置的样式列表**
**List of supported styles**

| name | value |平台差异说明|
| name | value | Platform Difference Description |
| --- | --- |--- |
| bold |  ||
| italic |  ||
| underline |  ||
| strike |  ||
| ins |  ||
| script | sub / super ||
| header | H1 / H2 / h3 / H4 / h5 / H6 ||
| align | left / center / right / justify |left百度小程序不支持|
| direction | rtl ||
| indent | -1 / +1 ||
| list | ordered / bullet / check ||
| color | hex color ||
| backgroundColor | hex color ||
| margin/marginTop/marginBottom/marginLeft/marginRight | css style |百度小程序不支持|
| margin/marginTop/marginBottom/marginLeft/marginRight | css style |Baidu applet does not support|
| padding/paddingTop/paddingBottom/paddingLeft/paddingRight | css style |百度小程序不支持|
| padding/paddingTop/paddingBottom/paddingLeft/paddingRight | css style |Baidu applet does not support|
| font/fontSize/fontStyle/fontVariant/fontWeight/fontFamily | css style |百度小程序不支持|
| font/fontSize/fontStyle/fontVariant/fontWeight/fontFamily | css style | Baidu applet does not support |
| lineHeight | css style |百度小程序不支持|
| lineHeight | css style | Baidu applet does not support |
| letterSpacing | css style |百度小程序不支持|
| letterSpacing | css style | Baidu applet does not support |
| textDecoration | css style |百度小程序不支持|
| textDecoration | css style | Baidu applet does not support |
| textIndent | css style |百度小程序不支持|
| textIndent | css style | Baidu applet does not support |
| wordWrap | css style |百度小程序不支持|
| wordWrap | css style | Baidu applet does not support |
| wordBreak | css style |百度小程序不支持|
| wordBreak | css style | Baidu applet does not support |
| whiteSpace | css style |百度小程序不支持|
| whiteSpace | css style | Baidu applet does not support |


对已经应用样式的选区设置会取消样式。css style 表示 css 中规定的允许值。
If applying to the selected area with style, the current style will be canceled. css style represents the allowable values specified in css.

## editorContext.insertDivider(OBJECT)

插入分割线
Insert dividing line

**OBJECT 参数说明**
**OBJECT parameter description**

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| Attribute| Type| Defaults| Required| Instruction|
| --- | --- | --- | --- | --- |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| success| Function| | No| Callback function for successful interface calling|
| fail | Function |  | 否 | 接口调用失败的回调函数 |
| fail| Function| | No| Callback function for failed interface calling|
| complete | Function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| complete| Function| | No| Callback function for closed interface calling (available both for successful and failed calling)|

## editorContext.insertImage(OBJECT)

插入图片。
Insert image.

微信小程序平台地址为临时文件时，获取的编辑器html格式内容中 `<img>` 标签增加属性 data-local，delta 格式内容中图片 attributes 属性增加 data-local 字段，该值为传入的临时文件地址。
When the WeChat applet platform address is a temporary file, the content in the html format of the editor obtained is `<img> ` The attribute data-local is added to the tag, and the data-local field is added to the image attributes attribute in the delta format content, which is the address of the incoming temporary file.
开发者可选择在提交阶段上传图片到服务器，获取到网络地址后进行替换。替换时对于html内容应替换掉 `<img>` 的 src 值，对于 delta 内容应替换掉 `insert { image: abc }` 值。
Developers can choose to upload images to the server during the submission stage, and replace them after obtaining the network address. When replacing, the html content should be replaced with `<img> The src value of `, which should be substituted for the `insert { image: abc }` value for delta content.

**OBJECT 参数说明**
**OBJECT parameter description**

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| Attribute| Type| Defaults| Required| Instruction|
| --- | --- | --- | --- | --- |
| src | String |  | 是 | 图片地址，仅支持 http(s)、base64、本地图片 |
| src| String| | Yes| Image address|
| alt | String |  | 否 | 图像无法显示时的替代文本 |
| alt| String| | No| Alternative text when the image cannot be displayed.|
| width | String |  | 否 | 图片宽度（pixels/百分比），2.6.5+ 支持，百度小程序不支持 |
| width| String| | No| Width of image (pixels/percentage). Supported in 2.6.5+.|
| height | String |  | 否 | 图片高度 (pixels/百分比），2.6.5+ 支持，百度小程序不支持|
| height| String| | No| Height of image (pixels/percentage). Supported in 2.6.5+.|
| extClass | String |  | 否 | 添加到图片 img 标签上的类名，2.6.5+ 支持 |
| extClass| String| | No| Class name that added to img tags. Supported in 2.6.5+.|
| data | Object |  | 否 | data 被序列化为 name=value;name1=value2 的格式挂在属性 data-custom 上，2.6.5+ 支持 |
| data| Object| | No| data area serialized to name=value;name1=value2 and mounted to the attribute data-custom. Supported in 2.6.5+.|
| success | Function |  | 否 | 接口调用成功的回调函数 |
| success| Function| | No| Callback function for successful interface calling|
| fail | Function |  | 否 | 接口调用失败的回调函数 |
| fail| Function| | No| Callback function for failed interface calling|
| complete | Function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| complete| Function| | No| Callback function for closed interface calling (available both for successful and failed calling)|

## editorContext.insertText(OBJECT)

覆盖当前选区，设置一段文本
Override the current selected area and set a paragraph.

**OBJECT 参数说明**
**OBJECT parameter description**

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| Attribute| Type| Defaults| Required| Instruction|
| --- | --- | --- | --- | --- |
| text | String |  | 否 | 文本内容 |
| text| String| | No| Text content|
| success | Function |  | 否 | 接口调用成功的回调函数 |
| success| Function| | No| Callback function for successful interface calling|
| fail | Function |  | 否 | 接口调用失败的回调函数 |
| fail| Function| | No| Callback function for failed interface calling|
| complete | Function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| complete| Function| | No| Callback function for closed interface calling (available both for successful and failed calling)|

## editorContext.setContents(OBJECT)

初始化编辑器内容，html和delta同时存在时仅delta生效
Initialize the editor content, only delta takes effect when html and delta exist at the same time

**OBJECT 参数说明**
**OBJECT parameter description**

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| Attribute| Type| Defaults| Required| Instruction|
| --- | --- | --- | --- | --- |
| html | String |  | 否 | 带标签的HTML内容 |
| html| String| | No| HTML content with tags|
| delta | Object |  | 否 | 表示内容的delta对象 |
| delta| Object| | No| Delta object that represents the content|
| success | Function |  | 否 | 接口调用成功的回调函数 |
| success| Function| | No| Callback function for successful interface calling|
| fail | Function |  | 否 | 接口调用失败的回调函数 |
| fail| Function| | No| Callback function for failed interface calling|
| complete | Function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| complete| Function| | No| Callback function for closed interface calling (available both for successful and failed calling)|

## editorContext.getContents(OBJECT)

获取编辑器内容
Get editor content

**OBJECT 参数说明**
**OBJECT parameter description**

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| Attribute| Type| Defaults| Required| Instruction|
| --- | --- | --- | --- | --- |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| success| Function| | No| Callback function for successful interface calling|
| fail | Function |  | 否 | 接口调用失败的回调函数 |
| fail| Function| | No| Callback function for failed interface calling|
| complete | Function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| complete| Function| | No| Callback function for closed interface calling (available both for successful and failed calling)|


**object.success 回调函数**
**object.success callback function**

| 属性 | 类型 | 说明 |
| property | type | description |
| --- | --- | --- |
| html | string |带标签的 HTML 内容 |
| html | string | Tagged HTML content |
| text | string |纯文本内容 |
| text | string | Plain text content |
| delta | Object |表示内容的 delta 对象 |
| delta | Object | A delta object representing the content |


## editorContext.clear(OBJECT)

清空编辑器内容
Clear editor content

**OBJECT 参数说明**
**OBJECT parameter description**

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| Attribute| Type| Defaults| Required| Instruction|
| --- | --- | --- | --- | --- |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| success| Function| | No| Callback function for successful interface calling|
| fail | Function |  | 否 | 接口调用失败的回调函数 |
| fail| Function| | No| Callback function for failed interface calling|
| complete | Function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| complete| Function| | No| Callback function for closed interface calling (available both for successful and failed calling)|

## editorContext.removeFormat(OBJECT)

清除当前选区的样式
Clear the style of the current selection

**OBJECT 参数说明**
**OBJECT parameter description**

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| Attribute| Type| Defaults| Required| Instruction|
| --- | --- | --- | --- | --- |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| success| Function| | No| Callback function for successful interface calling|
| fail | Function |  | 否 | 接口调用失败的回调函数 |
| fail| Function| | No| Callback function for failed interface calling|
| complete | Function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| complete| Function| | No| Callback function for closed interface calling (available both for successful and failed calling)|

## editorContext.undo(OBJECT)

撤销
Revoke

**OBJECT 参数说明**
**OBJECT parameter description**

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| Attribute| Type| Defaults| Required| Instruction|
| --- | --- | --- | --- | --- |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| success| Function| | No| Callback function for successful interface calling|
| fail | Function |  | 否 | 接口调用失败的回调函数 |
| fail| Function| | No| Callback function for failed interface calling|
| complete | Function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| complete| Function| | No| Callback function for closed interface calling (available both for successful and failed calling)|

## editorContext.redo(OBJECT)

恢复
Restore

**OBJECT 参数说明**
**OBJECT parameter description**

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| Attribute| Type| Defaults| Required| Instruction|
| --- | --- | --- | --- | --- |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| success| Function| | No| Callback function for successful interface calling|
| fail | Function |  | 否 | 接口调用失败的回调函数 |
| fail| Function| | No| Callback function for failed interface calling|
| complete | Function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| complete| Function| | No| Callback function for closed interface calling (available both for successful and failed calling)|

## editorContext.blur(OBJECT)

编辑器失焦，同时收起键盘。
The editor is out of focus and the keyboard is retracted at the same time.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√`HBuilderX 3.0.3`|√`HBuilderX 3.0.3`|√`基础库2.8.3`|x|√|x|x|x|x|
|√`HBuilderX 3.0.3`|√`HBuilderX 3.0.3`|√`Basic library 2.8.3`|x|√|x|x|x|x|

**OBJECT 参数说明**
**OBJECT parameter description**

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| Attribute| Type| Defaults| Required| Instruction|
| --- | --- | --- | --- | --- |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| success| Function| | No| Callback function for successful interface calling|
| fail | Function |  | 否 | 接口调用失败的回调函数 |
| fail| Function| | No| Callback function for failed interface calling|
| complete | Function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| complete| Function| | No| Callback function for closed interface calling (available both for successful and failed calling)|

## editorContext.scrollIntoView(OBJECT)

使得编辑器光标处滚动到窗口可视区域内。
Make the editor cursor scroll to the visible area of the window.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√`HBuilderX 3.0.3`|√`HBuilderX 3.0.3`|√`基础库2.8.3`|x|√|x|x|x|x|
|√`HBuilderX 3.0.3`|√`HBuilderX 3.0.3`|√`Basic library 2.8.3`|x|√|x|x|x|x|

**OBJECT 参数说明**
**OBJECT parameter description**

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| Attribute| Type| Defaults| Required| Instruction|
| --- | --- | --- | --- | --- |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| success| Function| | No| Callback function for successful interface calling|
| fail | Function |  | 否 | 接口调用失败的回调函数 |
| fail| Function| | No| Callback function for failed interface calling|
| complete | Function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| complete| Function| | No| Callback function for closed interface calling (available both for successful and failed calling)|

## editorContext.getSelectionText(OBJECT)

获取编辑器已选区域内的纯文本内容。当编辑器失焦或未选中一段区间时，返回内容为空。
Get the plain text content within the selected area of the editor. When the editor is out of focus or no interval is selected, noting is returned.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√`HBuilderX 3.0.3`|√`HBuilderX 3.0.3`|√`基础库2.10.2`|x|√|x|x|x|x|
|√`HBuilderX 3.0.3`|√`HBuilderX 3.0.3`|√`Basic library 2.10.2`|x|√|x|x|x|x|

**OBJECT 参数说明**
**OBJECT parameter description**

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| Attribute| Type| Defaults| Required| Instruction|
| --- | --- | --- | --- | --- |
| success | Function |  | 否 | 接口调用成功的回调函数 |
| success| Function| | No| Callback function for successful interface calling|
| fail | Function |  | 否 | 接口调用失败的回调函数 |
| fail| Function| | No| Callback function for failed interface calling|
| complete | Function |  | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| complete| Function| | No| Callback function for closed interface calling (available both for successful and failed calling)|

**success 返回参数说明：**
**Success return parameter description:**

|参数|类型|说明|
| Parameter| Type| Instruction|
|:-|:-|:-|
|errMsg|String|接口调用结果（百度小程序不支持）|
| errMsg| String| Interface call result|
|text|String|纯文本内容|
| text| String| Plain text content|
