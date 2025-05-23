## uni.showToast(OBJECT)

显示消息提示框。

|元服务|
|:-:|
|√|

<!-- UNIAPPAPIJSON.showToast.compatibility -->

**OBJECT参数说明**

|参数|类型|必填|说明|平台差异说明|
|:-|:-|:-|:-|:-|
|title|String|是|提示的内容，长度与 icon 取值有关。||
|icon|String|否|图标，有效值详见下方说明，默认：success。||
|image|String|否|自定义图标的本地路径（app端暂不支持gif）|App、H5、微信小程序、百度小程序、抖音小程序（2.62.0+）|
|mask|Boolean|否|是否显示透明蒙层，防止触摸穿透，默认：false|App、微信小程序、抖音小程序（2.47.0+）|
|duration|Number|否|提示的延迟时间，单位毫秒，默认：1500||
|position|String|否|纯文本轻提示显示位置，填写有效值后只有 `title` 属性生效，且不支持通过 uni.hideToast 隐藏。有效值详见下方说明。|App|
|success|Function|否|接口调用成功的回调函数||
|fail|Function|否|接口调用失败的回调函数||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|



**icon 值说明**

|值|说明|平台差异说明|
|:-|:-|:-|
|success|显示成功图标，此时 title 文本在`小程序`平台最多显示 7 个汉字长度，`App`仅支持单行显示。|支付宝小程序无长度无限制|
|error|显示错误图标，此时 title 文本在`小程序`平台最多显示 7 个汉字长度，`App`仅支持单行显示。|支付宝小程序、快手小程序、抖音小程序、百度小程序、京东小程序、QQ小程序不支持|
|fail|显示错误图标，此时 title 文本无长度显示。|支付宝小程序、抖音小程序|
|exception|显示异常图标。此时 title 文本无长度显示。|支付宝小程序|
|loading|显示加载图标，此时 title 文本在`小程序`平台最多显示 7 个汉字长度。|支付宝小程序不支持|
|none|不显示图标，此时 title 文本在`小程序`最多可显示两行。|&nbsp;|

**示例**

```javascript
uni.showToast({
	title: '标题',
	duration: 2000
});
```

**position 值说明（仅App生效）**

|值|说明|
|:-|:-|
|top|居上显示|
|center|居中显示|
|bottom|居底显示|

**Tips**

- App端可通过[plus.nativeUI.toast API](https://www.html5plus.org/doc/zh_cn/nativeui.html#plus.nativeUI.toast)实现更多功能。

<!-- UNIAPPAPIJSON.showToast.tutorial -->

## uni.hideToast()

隐藏消息提示框。

|元服务|
|:-:|
|x|

<!-- UNIAPPAPIJSON.hideToast.compatibility -->

**示例**

```javascript
uni.hideToast();
```


## uni.showLoading(OBJECT)@showloading

显示 loading 提示框, 需主动调用 [uni.hideLoading](#hideloading) 才能关闭提示框。

|元服务|
|:-:|
|√|

<!-- UNIAPPAPIJSON.showLoading.compatibility -->

**OBJECT参数说明**

|参数|类型|必填|说明|平台差异说明|
|:-|:-|:-|:-|:-|
|title|String|是|提示的文字内容，显示在loading的下方||
|mask|Boolean|否|是否显示透明蒙层，防止触摸穿透，默认：false|H5、App、微信小程序、百度小程序、抖音小程序（2.47.0+）|
|success|Function|否|接口调用成功的回调函数||
|fail|Function|否|接口调用失败的回调函数||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|



**示例**

```javascript
uni.showLoading({
	title: '加载中'
});
```

<!-- UNIAPPAPIJSON.showLoading.tutorial -->

## uni.hideLoading()@hideloading

隐藏 loading 提示框。

|元服务|
|:-:|
|x|

<!-- UNIAPPAPIJSON.hideLoading.compatibility -->

**示例**

```javascript
uni.showLoading({
	title: '加载中'
});

setTimeout(function () {
	uni.hideLoading();
}, 2000);
```

## uni.showModal(OBJECT)@showmodal

显示模态弹窗，可以只有一个确定按钮，也可以同时有确定和取消按钮。类似于一个API整合了 html 中：alert、confirm。

|元服务|
|:-:|
|√|

<!-- UNIAPPAPIJSON.showModal.compatibility -->

**OBJECT参数说明**

|参数|类型|必填|说明|平台差异说明|
|:-|:-|:-|:-|:-|
|title|String|否|提示的标题||
|content|String|否|提示的内容||
|showCancel|Boolean|否|是否显示取消按钮，默认为 true||
|cancelText|String|否|取消按钮的文字，默认为"取消"||
|cancelColor|HexColor|否|取消按钮的文字颜色，默认为"#000000"|H5、微信小程序、百度小程序、抖音小程序（2.62.0+）、支付宝小程序|
|confirmText|String|否|确定按钮的文字，默认为"确定"||
|confirmColor|HexColor|否|确定按钮的文字颜色，H5平台默认为"#007aff"，微信小程序平台默认为"#576B95"，百度小程序平台默认为"#3c76ff"|H5、微信小程序、百度小程序、抖音小程序（2.62.0+）、支付宝小程序|
|editable|Boolean|否|是否显示输入框|H5 (3.2.10+)、App (3.2.10+)、微信小程序 (2.17.1+)、抖音小程序（2.62.0+）|
|placeholderText|String|否|显示输入框时的提示文本|H5 (3.2.10+)、App (3.2.10+)、微信小程序 (2.17.1+)、抖音小程序（2.62.0+）|
|success|Function|否|接口调用成功的回调函数||
|fail|Function|否|接口调用失败的回调函数||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|



**success返回参数说明**

|参数|类型|说明|平台差异说明|
|:-|:-|:-|:-|
|confirm|Boolean|为 true 时，表示用户点击了确定按钮||
|cancel|Boolean|为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭）||
|content|String|`editable` 为 true 时，用户输入的文本|H5 (3.2.10+)、App (3.2.10+)、微信小程序 (2.17.1+)、抖音小程序（2.62.0+）|


**示例**

```javascript
uni.showModal({
	title: '提示',
	content: '这是一个模态弹窗',
	success: function (res) {
		if (res.confirm) {
			console.log('用户点击确定');
		} else if (res.cancel) {
			console.log('用户点击取消');
		}
	}
});
```

**注意**
- 弹框同时使用确定取消时，需注意不同平台的确认取消按钮位置不同。在微信、H5中，确认按钮默认在右边。在App中，iOS的确认按钮默认在右边，而Android默认在左边。产生这种差异的原因是uni.showModal在App和小程序上调用的是原生提供的弹出框，原生平台的策略本身就不同。如果需要调整，可以通过自行控制按钮的文字，即“确定”按钮的文字其实可以设置为“取消”；
- showModal不满足需求时，可以自行开发组件弹框。插件市场有很多自定义弹框的组件，需注意在非H5平台，前端组件无法覆盖原生组件（如地图、video），遮罩也无法盖住tabbar和navigationbar。如需覆盖原生组件或遮罩tabbar等，App端推荐使用[subNvue](https://uniapp.dcloud.net.cn/api/window/subNVues)；
- 小程序平台，`cancelText`和`confirmText`有长度限制，最多允许 4 个字符；
- 钉钉小程序真机与模拟器表现有差异，真机title，content均为必填项
- 各家小程序平台对于 `confirm`、`cancel` 字段返回规则可能不尽相同，包含两种情况：`{ confirm: true, cancel: false }` 或 `{ confirm: true }`，但并不影响使用 if 去做判断
- 钉钉小程序本身不支持设置 cancelColor/confirmColor 属性

## uni.showActionSheet(OBJECT)

从底部向上弹出操作菜单

<!-- UNIAPPAPIJSON.showActionSheet.compatibility -->

**OBJECT参数说明**

|参数|类型|必填|说明|平台差异说明|
|:-|:-|:-|:-|:-|
|title|String|否|菜单标题|App、H5、支付宝小程序、钉钉小程序、微信小程序 3.4.5+（仅真机有效）|
|alertText|String|否|警示文案（同菜单标题）|微信小程序（仅真机有效）|
|itemList|Array&lt;String&gt;|是|按钮的文字数组|微信、百度、抖音小程序数组长度最大为6个|
|itemColor|HexColor|否|按钮的文字颜色，字符串格式，默认为"#000000"|App-iOS、飞书小程序不支持|
|popover|Object|否|大屏设备弹出原生选择按钮框的指示区域，默认居中显示|App-iPad（2.6.6+）、H5（2.9.2）|
|success|Function|否|接口调用成功的回调函数，详见返回参数说明||
|fail|Function|否|接口调用失败的回调函数||
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|

**popover 值说明**

|值|类型|说明|
|:-|:-|:-|
|top|Number|指示区域坐标，使用原生 navigationBar 时一般需要加上 navigationBar 的高度|
|left|Number|指示区域坐标|
|width|Number|指示区域宽度|
|height|Number|指示区域高度|

**success返回参数说明**

|参数|类型|说明|
|:-|:-|:-|
|tapIndex|Number|用户点击的按钮，从上到下的顺序，从0开始|



**示例**

```javascript
uni.showActionSheet({
	itemList: ['A', 'B', 'C'],
	success: function (res) {
		console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
	},
	fail: function (res) {
		console.log(res.errMsg);
	}
});
```

**Tips**

- App平台，iPad设备支持设置弹出框的位置，详见 [plus.nativeUI的文档](https://www.html5plus.org/doc/zh_cn/nativeui.html#plus.nativeUI.ActionSheetStyles)
- App平台，实现原生的、复杂的底部图文菜单，例如分享菜单，可参考[https://ext.dcloud.net.cn/plugin?id=69](https://ext.dcloud.net.cn/plugin?id=69)

**注意**

- 在非H5端，本章的所有弹出控件都是原生控件，层级最高，可覆盖video、map、tabbar等原生控件。
- [uni-app插件市场](https://ext.dcloud.net.cn/)有很多封装好的前端组件，但注意前端组件层级不是最高，无法覆盖原生组件，除非使用cover-view或nvue。

<!-- UNIAPPAPIJSON.showActionSheet.tutorial -->
