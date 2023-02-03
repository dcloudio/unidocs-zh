### uni.showToast(OBJECT)

显示消息提示框。
Displays the message prompt box.

**OBJECT参数说明**
**OBJECT parameter description**

|参数|类型|必填|说明|平台差异说明|
| Parameter| Type| Required| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|
|title|String|是|提示的内容，长度与 icon 取值有关。||
| title| String| Yes| The content and length of the prompt are related to the value of icon.| |
|icon|String|否|图标，有效值详见下方说明。||
| icon| String| No| Icon. See the description below for valid values.| |
|image|String|否|自定义图标的本地路径（app端暂不支持gif）|App、H5、微信小程序、百度小程序|
|image|String|No|The local path of the custom icon (gif is not supported on the app side)|App, H5, WeChat applet, Baidu applet|
|mask|Boolean|否|是否显示透明蒙层，防止触摸穿透，默认：false|App、微信小程序|
|mask|Boolean|No|Whether to display a transparent mask to prevent touch penetration, default: false|App, WeChat applet|
|duration|Number|否|提示的延迟时间，单位毫秒，默认：1500||
|duration|Number|No|Prompt delay time, in milliseconds, default: 1500||
|position|String|否|纯文本轻提示显示位置，填写有效值后只有 `title` 属性生效，且不支持通过 uni.hideToast 隐藏。有效值详见下方说明。|App|
| position| String|No|The display position of the plain text light prompt. Only the `title` attribute takes effect after filling in a valid value, and does not support hiding through uni.hideToast. See below for valid values. | App|
|success|Function|否|接口调用成功的回调函数||
| success| Function| No| Callback function for successful interface calling| |
|fail|Function|否|接口调用失败的回调函数||
| fail| Function| No| Callback function for failed interface calling| |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|  |

**icon 值说明**
**icon value description**

|值|说明|平台差异说明|
| Value| Instruction| Platform difference description|
|:-|:-|:-|
|success|显示成功图标，此时 title 文本在`小程序`平台最多显示 7 个汉字长度。|支付宝小程序无长度无限制|
|success|The success icon is displayed. At this time, the title text on the `Mini Program` platform can display up to 7 Chinese characters in length. |Alipay applet unlimited length unlimited |
|error|显示错误图标，此时 title 文本在`小程序`平台最多显示 7 个汉字长度。|支付宝小程序、快手小程序、字节小程序、百度小程序、京东小程序、QQ小程序不支持|
|error|Display the error icon. At this time, the title text can display up to 7 Chinese characters in length on the `Mini Program` platform. |Alipay applet, Kuaishou applet, byte applet, Baidu applet, Jingdong applet, QQ applet are not supported|
|fail|显示错误图标，此时 title 文本无长度显示。|支付宝小程序、字节小程序|
|fail|Display an error icon, and the title text has no length. |Alipay applet, byte applet|
|exception|显示异常图标。此时 title 文本无长度显示。|支付宝小程序|
|exception|Display the exception icon. The title text is now displayed without length. |Alipay Mini Program|
|loading|显示加载图标，此时 title 文本在`小程序`平台最多显示 7 个汉字长度。|支付宝小程序不支持|
|loading|Display the loading icon. At this time, the title text can display up to 7 Chinese characters in length on the `Mini Program` platform. |Alipay applet does not support|
|none|不显示图标，此时 title 文本在`小程序`最多可显示两行，`App`仅支持单行显示。|&nbsp;|
|none|No icon is displayed. At this time, the title text can be displayed on a maximum of two lines in `Applet`, and `App` only supports single-line display. |&nbsp;|

**示例**
**Example**

```javascript
uni.showToast({
	title: '标题',
	duration: 2000
});
```

**position 值说明（仅App生效）**
**Description of position value (valid only in App)**

|值|说明|
| Value| Instruction|
|:-|:-|
|top|居上显示|
| top| Display at top|
|center|居中显示|
| center| Display at center|
|bottom|居底显示|
| bottom| Display at bottom|

**Tips**

- App端可通过[plus.nativeUI.toast API](https://www.html5plus.org/doc/zh_cn/nativeui.html#plus.nativeUI.toast)实现更多功能。
- The App can achieve more functions through the [plus.nativeUI.toast API](https://www.html5plus.org/doc/zh_cn/nativeui.html#plus.nativeUI.toast).

### uni.hideToast()

隐藏消息提示框。
Hide the message prompt box.

**示例**
**Example**

```javascript
uni.hideToast();
```


### uni.showLoading(OBJECT)

显示 loading 提示框, 需主动调用 [uni.hideLoading](api/ui/prompt?id=hideloading) 才能关闭提示框。
If the loading prompt box is displayed, you must actively call [uni.hideLoading](api/ui/prompt?id=hideloading) to close the prompt box.

**OBJECT参数说明**
**OBJECT parameter description**

|参数|类型|必填|说明|平台差异说明|
| Parameter| Type| Required| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|
|title|String|是|提示的文字内容，显示在loading的下方||
| title| String| Yes| Text content of the prompt, displayed under loading| |
|mask|Boolean|否|是否显示透明蒙层，防止触摸穿透，默认：false|H5、App、微信小程序、百度小程序|
|mask|Boolean|No|Whether to display a transparent mask to prevent touch penetration, default: false|H5, App, WeChat applet, Baidu applet|
|success|Function|否|接口调用成功的回调函数||
| success| Function| No| Callback function for successful interface calling| |
|fail|Function|否|接口调用失败的回调函数||
| fail| Function| No| Callback function for failed interface calling| |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|  |

**示例**
**Example**

```javascript
uni.showLoading({
	title: '加载中'
});
```

### uni.hideLoading()

隐藏 loading 提示框。
Hide the loading prompt box.

**示例**
**Example**

```javascript
uni.showLoading({
	title: '加载中'
});

setTimeout(function () {
	uni.hideLoading();
}, 2000);
```

### uni.showModal(OBJECT)

显示模态弹窗，可以只有一个确定按钮，也可以同时有确定和取消按钮。类似于一个API整合了 html 中：alert、confirm。
Display the modal pop-up window with only one OK button or both OK and Cancel buttons. Similar to an API integrating alert and confirm in html.

**OBJECT参数说明**
**OBJECT parameter description**

|参数|类型|必填|说明|平台差异说明|
| Parameter| Type| Required| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|
|title|String|否|提示的标题||
| title| String| No| Prompt title| |
|content|String|否|提示的内容||
| content| String| No| Prompt content| |
|showCancel|Boolean|否|是否显示取消按钮，默认为 true||
| showCancel| Boolean| No| Whether to display the Cancel button, with true as default| |
|cancelText|String|否|取消按钮的文字，默认为"取消"||
| cancelText| String|No|The text of the cancel button, the default is "Cancel"||
|cancelColor|HexColor|否|取消按钮的文字颜色，默认为"#000000"|H5、微信小程序、百度小程序、字节小程序（2.62.0+）|
| cancelColor| HexColor|No|The text color of the cancel button, the default is "#000000"| H5, WeChat MiniApp, Baidu MiniApp, Byte MiniApp(2.62.0+)|
|confirmText|String|否|确定按钮的文字，默认为"确定"||
| confirmText| String|No|The text of the confirm button, the default is "OK"||
|confirmColor|HexColor|否|确定按钮的文字颜色，H5平台默认为"#007aff"，微信小程序平台默认为"#576B95"，百度小程序平台默认为"#3c76ff"|H5、微信小程序、百度小程序、字节小程序（2.62.0+）|
| confirmColor| HexColor|No|Confirm the text color of the button. The H5 platform defaults to "#007aff", the WeChat MiniApp platform defaults to "#576B95", and the Baidu MiniApp platform defaults to "#3c76ff"| H5, WeChat MiniApp, Baidu MiniApp, Byte MiniApp(2.62.0+) |
|editable|Boolean|否|是否显示输入框|H5 (3.2.10+)、App (3.2.10+)、微信小程序 (2.17.1+)、字节小程序（2.62.0+）|
| editable| Boolean|No|Whether to display the input box| H5 (3.2.10+), App (3.2.10+), WeChat MiniApp(2.17.1+), Byte MiniApp(2.62.0+)|
|placeholderText|String|否|显示输入框时的提示文本|H5 (3.2.10+)、App (3.2.10+)、微信小程序 (2.17.1+)、字节小程序（2.62.0+）|
| placeholderText| String|No|Prompt text when displaying the input box| H5 (3.2.10+), App (3.2.10+), WeChat MiniApp(2.17.1+), Byte MiniApp(2.62.0+ )|
|success|Function|否|接口调用成功的回调函数||
| success| Function| No| Callback function for successful interface calling| |
|fail|Function|否|接口调用失败的回调函数||
| fail| Function| No| Callback function for failed interface calling| |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|  |

**success返回参数说明**
**Success return parameter description**

|参数|类型|说明|平台差异说明|
|Parameter|Type|Description|Platform Difference Description|
|:-|:-|:-|:-|
|confirm|Boolean|为 true 时，表示用户点击了确定按钮||
|confirm| Boolean|When is true, it means that the user has clicked the OK button||
|cancel|Boolean|为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭）||
| cancel| Boolean|When is true, it means that the user clicked cancel (used by the Android system to distinguish whether to click the mask to close or click the cancel button to close)||
|content|String|`editable` 为 true 时，用户输入的文本|H5 (3.2.10+)、App (3.2.10+)、微信小程序 (2.17.1+)、字节小程序（2.62.0+）|
| content| String|When `editable` is true, the text entered by the user| H5 (3.2.10+), App (3.2.10+), WeChat MiniApp(2.17.1+), byte MiniApp(2.62. 0+)|


**示例**
**Example**

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
**Notice**
- 弹框同时使用确定取消时，需注意不同平台的确认取消按钮位置不同。在微信、H5中，确认按钮默认在右边。在App中，iOS的确认按钮默认在右边，而Android默认在左边。产生这种差异的原因是uni.showModal在App和小程序上调用的是原生提供的弹出框，原生平台的策略本身就不同。如果需要调整，可以通过自行控制按钮的文字，即“确定”按钮的文字其实可以设置为“取消”；
- When the pop-up box is used at the same time to confirm and cancel, it should be noted that the positions of the confirm and cancel buttons on different platforms are different. In WeChat and H5, the confirm button is on the right by default. In the App, the iOS confirmation button is on the right by default, and Android is on the left by default. The reason for this difference is that uni.showModal calls the natively provided pop-up box on the App and the applet, and the native platform strategy itself is different. If you need to adjust, you can control the text of the button by yourself, that is, the text of the "OK" button can actually be set to "Cancel";
- showModal不满足需求时，可以自行开发组件弹框。插件市场有很多自定义弹框的组件，需注意在非H5平台，前端组件无法覆盖原生组件（如地图、video），遮罩也无法盖住tabbar和navigationbar。如需覆盖原生组件或遮罩tabbar等，App端推荐使用[subNvue](https://uniapp.dcloud.net.cn/api/window/subNVues)；
- When showModal does not meet the requirements, you can develop the component bullet box yourself. There are many components for custom pop-up boxes in the plug-in market. It should be noted that on non-H5 platforms, front-end components cannot cover native components (such as maps and videos), and masks cannot cover tabbar and navigationbar. If you need to cover native components or mask tabbar, etc., it is recommended to use [subNvue](https://uniapp.dcloud.net.cn/api/window/subNVues) on the App side;
- 小程序平台，`cancelText`和`confirmText`有长度限制，最多允许 4 个字符；
- On the Mini Program platform, `cancelText` and `confirmText` have a length limit, up to 4 characters;
- 钉钉小程序真机与模拟器表现有差异，真机title，content均为必填项
- DingTalk MiniApp has different performance between the real device and the emulator, the title and content of the real device are required
- 各家小程序平台对于 `confirm`、`cancel` 字段返回规则可能不尽相同，包含两种情况：`{ confirm: true, cancel: false }` 或 `{ confirm: true }`，但并不影响使用 if 去做判断
- Various MiniApp platforms may have different return rules for `confirm` and `cancel` fields, including two cases: `{ confirm: true, cancel: false }` or `{ confirm: true }`, but not Affect the use of if to make judgments


### uni.showActionSheet(OBJECT)

从底部向上弹出操作菜单
Pop up the operation menu from the bottom up

**OBJECT参数说明**
**OBJECT parameter description**

|参数|类型|必填|说明|平台差异说明|
| Parameter| Type| Required| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|
|title|String|否|菜单标题|App、H5、支付宝小程序、钉钉小程序、微信小程序 3.4.5+（仅真机有效）|
|title|String|No|Menu title|App, H5, Alipay applet, DingTalk applet, WeChat applet 3.4.5+ (only valid for real devices)|
|alertText|String|否|警示文案（同菜单标题）|微信小程序（仅真机有效）|
|alertText|String|No|Alert text (same as menu title)|WeChat applet (only valid on real devices)|
|itemList|Array&lt;String&gt;|是|按钮的文字数组|微信、百度、字节跳动小程序数组长度最大为6个|
|itemList|Array&lt;String&gt;|Yes|Button text array|WeChat, Baidu, ByteDance applet array length is up to 6|
|itemColor|HexColor|否|按钮的文字颜色，字符串格式，默认为"#000000"|App-iOS、字节跳动小程序、飞书小程序不支持|
|itemColor|HexColor|No|Button text color, string format, default is "#000000"|App-iOS, ByteDance applet, Feishu applet are not supported|
|popover|Object|否|大屏设备弹出原生选择按钮框的指示区域，默认居中显示|App-iPad（2.6.6+）、H5（2.9.2）|
| popover| Object| No| On large-screen devices, the display area of the native selection button box is popped up and displayed in the center by default| App-iPad(2.6.6+), H5(2.9.2)|
|success|Function|否|接口调用成功的回调函数，详见返回参数说明||
| success| Function| No| Callback function for successful interface calling. See the notices on returning parameter description.| |
|fail|Function|否|接口调用失败的回调函数||
| fail| Function| No| Callback function for failed interface calling| |
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|&nbsp;|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|  |

**popover 值说明（仅App生效）**
**popover value description (only valid for App)**

|值|类型|说明|
| Value| Type| Instruction|
|:-|:-|:-|
|top|Number|指示区域坐标，使用原生 navigationBar 时一般需要加上 navigationBar 的高度|
| top| Number| Coordinates of the indication area. When using the native navigationBar, it is generally necessary to add the height of the navigationBar.|
|left|Number|指示区域坐标|
| left| Number| Indicate area coordinates|
|width|Number|指示区域宽度|
| width| Number| Indicate area width|
|height|Number|指示区域高度|
| height| Number| Indicate area height|

**success返回参数说明**
**Success return parameter description**

|参数|类型|说明|
| Parameter| Type| Instruction|
|:-|:-|:-|
|tapIndex|Number|用户点击的按钮，从上到下的顺序，从0开始|
| tapIndex| Number| The buttons clickable by user, from top to bottom, starting from 0|

**示例**
**Example**

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
- App platform, iPad devices support setting the position of the popup box, see [plus.nativeUI documentation](https://www.html5plus.org/doc/zh_cn/nativeui.html#plus.nativeUI.ActionSheetStyles)
- App平台，实现原生的、复杂的底部图文菜单，例如分享菜单，可参考[https://ext.dcloud.net.cn/plugin?id=69](https://ext.dcloud.net.cn/plugin?id=69)
- To realize native and complex bottom menu of graphics and text on the App platform, such as sharing menu, please refer to [https://ext.dcloud.net.cn/plugin?id=69](https://ext.dcloud.net.cn/plugin?id=69)

**注意**
**Notice**

- 在非H5端，本章的所有弹出控件都是原生控件，层级最高，可覆盖video、map、tabbar等原生控件。
- On the non-H5 side, all pop-up controls in this chapter are native controls with the highest level, covering native controls such as video, map and tabbar.
- [uni-app插件市场](https://ext.dcloud.net.cn/)有很多封装好的前端组件，但注意前端组件层级不是最高，无法覆盖原生组件，除非使用cover-view或nvue。
- [uni-app plug-in market](https://ext.dcloud.net.cn/) has many packaged front-end components, but note that the level of front-end components is not the highest, and cannot cover native components, unless cover-view or nvue is used .
