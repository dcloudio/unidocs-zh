## input

单行输入框。
Single line input box.

html规范中input不仅是输入框，还有radio、checkbox、时间、日期、文件选择功能。在uni-app规范中，input仅仅是输入框。其他功能uni-app有单独的组件或API：[radio组件](https://uniapp.dcloud.io/component/radio)、[checkbox组件](https://uniapp.dcloud.io/component/checkbox)、[时间选择](https://uniapp.dcloud.io/component/picker?id=%e6%97%b6%e9%97%b4%e9%80%89%e6%8b%a9%e5%99%a8)、[日期选择](https://uniapp.dcloud.io/component/picker?id=%e6%97%a5%e6%9c%9f%e9%80%89%e6%8b%a9%e5%99%a8)、[图片选择](https://uniapp.dcloud.io/api/media/image?id=chooseimage)、[视频选择](https://uniapp.dcloud.io/api/media/video?id=choosevideo)、[多媒体文件选择(含图片视频)](https://uniapp.dcloud.io/api/media/video?id=choosemedia)、[通用文件选择](https://uniapp.dcloud.io/api/media/file?id=choosefile)。
The input in the html specification is not only an input box, but also radio, checkbox, time, date, and file selection functions. In the uni-app specification, input is just an input box. Other functions uni-app has a separate component or API: [radio component](https://uniapp.dcloud.io/component/radio), [checkbox component](https://uniapp.dcloud.io/component/checkbox ), [time selection](https://uniapp.dcloud.io/component/picker?id=%e6%97%b6%e9%97%b4%e9%80%89%e6%8b%a9%e5% 99%a8), [date picker](https://uniapp.dcloud.io/component/picker?id=%e6%97%a5%e6%9c%9f%e9%80%89%e6%8b%a9 %e5%99%a8), [Image Selection](https://uniapp.dcloud.io/api/media/image?id=chooseimage), [Video Selection](https://uniapp.dcloud.io/api /media/video?id=choosevideo), [multimedia file selection (including picture and video)](https://uniapp.dcloud.io/api/media/video?id=choosemedia), [general file selection](https: //uniapp.dcloud.io/api/media/file?id=choosefile).

### 属性说明
### Attribute description

|属性名|类型|默认值|说明|平台差异说明|
|Property Name|Type|Default Value|Description|Platform Difference Description|
|:-|:-|:-|:-|:-|
|value|String||输入框的初始内容||
| value| String||Initial content of the input box||
|type|String|text|input 的类型 [有效值](#type)|H5 暂未支持动态切换，详见下方 Tips，请使用 v-if 进行整体切换|
| type| String| text| input type [valid value](#type)| H5 does not support dynamic switching yet, see Tips below for details, please use v-if for overall switching|
|text-content-type|String||文本区域的语义，根据类型自动填充 [有效值](#text-content-type)|仅 App-nvue-iOS 支持|
| text-content-type| String||Semantics of the text area, automatically filled according to the type [valid value](#text-content-type)|Only supported by App-nvue-iOS|
|password|Boolean|false|是否是密码类型|H5和App写此属性时，type失效|
| password| Boolean| false|Whether it is a password type| When H5 and App write this attribute, the type is invalid|
|placeholder|String||输入框为空时占位符||
| placeholder| String||The placeholder when the input box is empty||
|placeholder-style|String||指定 placeholder 的样式||
|placeholder-class|String|"input-placeholder"|指定 placeholder 的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/|抖音小程序、飞书小程序、快手小程序不支持|
|disabled|Boolean|false|是否禁用||
| disabled| Boolean| false|whether to disable||
|maxlength|Number|140|最大输入长度，设置为 -1 的时候不限制最大长度||
| maxlength| Number| 140|Maximum input length, when set to -1, there is no limit to the maximum length||
|cursor-spacing|Number|0|指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离|App、微信小程序、百度小程序、QQ小程序、京东小程序|
| cursor-spacing| Number| 0| specifies the distance between the cursor and the keyboard, in px. Take the minimum value of the distance between the input and the bottom and the distance specified by cursor-spacing as the distance between the cursor and the keyboard | App, WeChat MiniApp, Baidu MiniApp, QQ MiniApp, JD MiniApp|
|focus|Boolean|false|获取焦点。|在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点|
| focus| Boolean| false| Get focus. |Whether it can be focused on the H5 platform and whether the soft keyboard pops up depends on the implementation of the current browser itself. The nvue page does not support it, you need to use the focus() and blur() methods of the component to control the focus|
|confirm-type|String|done|设置键盘右下角按钮的文字，仅在 type="text" 时生效。[有效值](#confirm-type)|微信小程序、App、H5、快手小程序、京东小程序|
| confirm-type| String| done|Set the text of the button in the lower right corner of the keyboard, only valid when type="text". [Valid value](#confirm-type)|WeChat MiniApp, App, H5, Kuaishou MiniApp, Jingdong MiniApp|
|confirm-hold|Boolean|false|点击键盘右下角按钮时是否保持键盘不收起|App(3.3.7+)、H5 (3.3.7+)、微信小程序、支付宝小程序、百度小程序、QQ小程序、京东小程序|
| confirm-hold| Boolean| false|Whether to keep the keyboard closed when the button in the lower right corner of the keyboard is clicked| App (3.3.7+), H5 (3.3.7+), WeChat MiniApp, Alipay MiniApp, Baidu MiniApp, QQ MiniApp, Jingdong MiniApp|
|cursor|Number||指定focus时的光标位置||
| cursor| Number||Cursor position when focus is specified||
|selection-start|Number|-1|光标起始位置，自动聚集时有效，需与selection-end搭配使用||
| selection-start| Number|-1|Cursor starting position, valid when auto-gathering, need to be used together with selection-end||
|selection-end|Number|-1|光标结束位置，自动聚集时有效，需与selection-start搭配使用||
| selection-end| Number|-1|Cursor end position, valid when auto-gathering, must be used together with selection-start||
|adjust-position|Boolean|true|键盘弹起时，是否自动上推页面|App-Android（vue 页面 softinputMode 为 adjustResize 时无效，使用 x5 内核时无效）、微信小程序、百度小程序、QQ小程序、京东小程序|
| adjust-position| Boolean| true|Whether to automatically push up the page when the keyboard pops up| App-Android (invalid when the vue page softinputMode is adjustResize, invalid when using the x5 kernel), WeChat MiniApp, Baidu MiniApp, QQ MiniApp, Jingdong MiniApp|
|auto-blur|Boolean|false|键盘收起时，是否自动失去焦点|App-Vue 3.0.0+|
| auto-blur| Boolean| false|Whether to automatically lose focus when the keyboard is closed|App-Vue 3.0.0+|
|ignoreCompositionEvent|Boolean|true|是否忽略组件内对文本合成系统事件的处理。为 `false` 时将触发 `compositionstart、compositionend、compositionupdate` 事件，且在文本合成期间会触发 `input` 事件|App-vue (3.4.4+)、H5 (3.4.4+)、App-nvue不支持|
| ignoreCompositionEvent| Boolean| true|Whether to ignore the processing of text composition system events in the component. When it is `false`, `compositionstart, compositionend, compositionupdate` events will be triggered, and `input` events will be triggered during text composition | App-vue (3.4.4+), H5 (3.4.4+), App-nvue does not Support|
|always-embed|Boolean|false|强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)|微信小程序 2.10.4+|
| always-embed| Boolean| false|Force the input to be in the same layer state, and the input will switch to a non-same layer state when it is in focus by default (only valid under iOS)|WeChat MiniApp 2.10.4+|
|hold-keyboard|Boolean|false|focus时，点击页面的时候不收起键盘|微信小程序 2.8.2+|
| hold-keyboard| Boolean| false| In focus, the keyboard will not be put away when the page is clicked|WeChat MiniApp 2.8.2+|
|safe-password-cert-path|String||安全键盘加密公钥的路径，只支持包内路径|微信小程序 2.18.0+|
| safe-password-cert-path| String||The path of the safe keyboard encryption public key, only supports the path in the package|WeChat MiniApp 2.18.0+|
|safe-password-length|Number||安全键盘输入密码长度|微信小程序 2.18.0+|
| safe-password-length| Number||Safe keyboard input password length|WeChat MiniApp 2.18.0+|
|safe-password-time-stamp|Number||安全键盘加密时间戳|微信小程序 2.18.0+|
| safe-password-time-stamp| Number||Safe keyboard encryption time stamp|WeChat MiniApp 2.18.0+|
|safe-password-nonce|String||安全键盘加密盐值|微信小程序 2.18.0+|
| safe-password-nonce| String||Safe keyboard encryption salt value|WeChat MiniApp 2.18.0+|
|safe-password-salt|String||安全键盘计算 hash 盐值，若指定custom-hash 则无效|微信小程序 2.18.0+|
| safe-password-salt| String||Safe keyboard calculates hash salt value, if custom-hash is specified, it will be invalid|WeChat MiniApp 2.18.0+|
|safe-password-custom-hash|String||安全键盘计算 hash 的算法表达式，如 md5(sha1('foo' + sha256(sm3(password + 'bar'))))|微信小程序 2.18.0+|
| safe-password-custom-hash| String||Safe keyboard calculation hash algorithm expression, such as md5(sha1('foo' + sha256(sm3(password + 'bar'))))|WeChat MiniApp 2.18.0 +|
|random-number|Boolean|false|当 type 为 number, digit, idcard 数字键盘是否随机排列|支付宝小程序 1.9.0+|
| random-number| Boolean| false|When the type is number, digit, idcard, whether the number keyboard is arranged randomly|Alipay MiniApp 1.9.0+|
|controlled|Boolean|false|是否为受控组件。为 true 时，value 内容会完全受 setData 控制|支付宝小程序 1.9.0+|
| controlled| Boolean| false|Whether it is a controlled component. When it is true, the value content will be completely controlled by setData|Alipay MiniApp 1.9.0+|
|always-system|Boolean|false|是否强制使用系统键盘和 Web-view 创建的 input 元素。为 true 时，confirm-type、confirm-hold 可能失效|支付宝小程序 2.7.3+|
| always-system| Boolean| false|Whether to force the use of the system keyboard and input elements created by the web-view. When it is true, confirm-type and confirm-hold may be invalid|Alipay MiniApp 2.7.3+|
|inputmode|String|"text"|是一个枚举属性，它提供了用户在编辑元素或其内容时可能输入的数据类型的提示。[有效值](#inputmode)|H5（3.6.16+）、App-vue（3.6.16+）|
|inputmode| String|"text"| is an enumerated property that provides hints about the type of data the user may enter when editing the element or its contents. [valid value](#inputmode)| H5 (3.6.16+), App-vue (3.6.16+)|
|@input|EventHandle||当键盘输入时，触发input事件，event.detail = {value}|差异见下方 Tips|
|@input| EventHandle||When the keyboard enters, the input event is triggered, event.detail = {value}|For the difference, see Tips below|
|@focus|EventHandle||输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度|仅微信小程序、京东小程序、App（2.2.3+） 、QQ小程序支持 height|
|@focus| EventHandle||triggered when the input box is focused, event.detail = { value, height }, height is the height of the keyboard|Only WeChat MiniApp, Jingdong MiniApp, App (2.2.3+), QQ MiniApp support height |
|@blur|EventHandle||输入框失去焦点时触发，event.detail = {value: value}|快手小程序不支持|
|@blur| EventHandle||triggered when the input box loses focus, event.detail = {value: value}| Kuaishou MiniApp does not support|
|@confirm|EventHandle||点击完成按钮时触发，event.detail = {value: value}|&nbsp;快手小程序不支持|
|@confirm| EventHandle||triggered when the Done button is clicked, event.detail = {value: value}|&nbsp; Kuaishou MiniApp does not support|
|@keyboardheightchange|eventhandle||键盘高度发生变化的时候触发此事件，event.detail = {height: height, duration: duration}|微信小程序基础库2.7.0+、App 3.1.0+|
|@keyboardheightchange| eventhandle||This event is triggered when the keyboard height changes, event.detail = {height: height, duration: duration}|WeChat MiniApp base library 2.7.0+, App 3.1.0+|

**Tips**

- `input` 事件处理函数可以直接 return 一个字符串，将替换输入框的内容。仅微信小程序支持。
- The `input` event handler can directly return a string, which will replace the content of the input box. Only supported by WeChat MiniApp.
- 如果遇到 value 属性设置不生效的问题参考：[组件属性设置不生效解决办法](/tutorial/vue-api.html#componentsolutions)
- If you encounter the problem that the value attribute setting does not take effect, please refer to: [Solutions for component attribute setting not taking effect](/tutorial/vue-api.html#componentsolutions)
- `input` 组件上有默认的 `min-height` 样式，如果 `min-height` 的值大于 `height` 的值那么 `height` 样式无效。
- There is a default `min-height` style on the `input` component, if the value of `min-height` is greater than the value of `height` then the `height` style will be invalid.
- H5 暂未支持动态切换，请使用 `v-if`进行整体切换。
- H5 does not support dynamic switching yet, please use `v-if` for overall switching.

```html
        <!-- 错误写法 -->
        <!-- wrong wording -->
	<input :type="isText?'text':'number'" placeholder="请输入内容" />

        <!-- 正确写法 -->
        <!-- Correct spelling -->
	<input v-if="isText" type="text" placeholder="请输入文本" />
	<input v-else  type="number"  placeholder="请输入数字" />
```

#### type 有效值 @type
#### type valid values @type

|值|说明|平台差异说明|
|Value|Description|Platform Difference Description|
|:-|:-|:-|
|text|文本输入键盘||
| text|text input keyboard||
|number|数字输入键盘|均支持，App平台、H5平台 3.1.22 以下版本 vue 页面在 iOS 平台显示的键盘包含负数和小数。|
| number|Number input keyboard|All support, App platform, H5 platform version 3.1.22 and below, the keyboard displayed on the iOS platform on the vue page contains negative numbers and decimals. |
|idcard|身份证输入键盘|微信、支付宝、百度、QQ小程序、快手小程序、京东小程序|
| idcard|ID card input keyboard|WeChat, Alipay, Baidu, QQ MiniApp, Kuaishou MiniApp, Jingdong MiniApp|
|digit|带小数点的数字键盘|均支持，App平台、H5平台 vue 页面在 iOS 平台显示的键盘包含负数（原生键盘不支持负号）。|
|tel|电话输入键盘||
|safe-password|密码安全输入键盘|微信小程序|
| safe-password|Password safe input keyboard|WeChat MiniApp|
|nickname|昵称输入键盘|微信小程序|
| nickname|nickname input keyboard|WeChat MiniApp|

::: warning 注意事项
- 小程序平台，`number` 类型只支持输入整型数字。微信开发者工具上体现不出效果，请使用真机预览。
-For the MiniApp platform, the `number` type only supports the input of integer numbers. The effect cannot be reflected on the WeChat developer tools, please use the real device to preview.
- 如果需要在小程序平台输入浮点型数字，请使用 `digit` 类型。
- If you need to input floating-point numbers on the MiniApp platform, please use the `digit` type.
- 小程序端input在置焦时，会表现为原生控件，此时会层级变高。如需前端组件遮盖input，需让input失焦，或使用cover-view等覆盖原生控件的方案，[参考](https://uniapp.dcloud.io/component/native-component)。具体来讲，阿里小程序的input为text且置焦为原生控件；微信、头条、QQ所有input置焦均为原生控件；百度小程序置焦时仍然是非原生的。也可以参考[原生控件](https://uniapp.dcloud.io/component/native-component)文档
-When the input on the MiniApp terminal is focused, it will behave as a native control, and the level will become higher at this time. If you need front-end components to cover the input, you need to make the input out of focus, or use cover-view and other solutions to cover native controls, [reference](https://uniapp.dcloud.io/component/native-component).Specifically, the input of the Ali MiniApp is text and the focus is a native control; all the input focus of WeChat, Toutiao, and QQ are native controls; the focus of the Baidu MiniApp is still non-native. You can also refer to [Native Control](https://uniapp.dcloud.io/component/native-component) document
- input组件若不想弹出软键盘，可设置为disabled
- placeholder-style指定样式类font-size单位为rpx时，抖音小程序、飞书小程序、快手小程序不支持，可使用uni.upx2px()将rpx单位值转换成px。
:::

#### text-content-type 有效值 @text-content-type
#### text-content-type valid values @text-content-type

> 仅 App-nvue-iOS 支持
> Only supported by App-nvue-iOS

|值|说明|
|value|description|
|:-|:-|
|oneTimeCode|一次性验证码，常用于短信验证码输入|
| oneTimeCode|one-time verification code, often used for SMS verification code input|

#### confirm-type 有效值 @confirm-type
#### confirm-type valid values @confirm-type

弹出软键盘的右下角按钮的文字。
The text of the button in the lower right corner of the popup soft keyboard.

|值|说明|平台差异说明|
|Value|Description|Platform Difference Description|
|:-|:-|:-|
|send|右下角按钮为“发送”|微信、支付宝、百度小程序、快手小程序、京东小程序、app-nvue、app-vue和h5(2.9.9+，且要求设备webview内核Chrome81+、Safari13.7+)|
| send|The button in the lower right corner is "Send"|WeChat, Alipay, Baidu MiniApp, Kuaishou MiniApp, Jingdong MiniApp, app-nvue, app-vue and h5 (2.9.9+, and require the device webview kernel Chrome81+, Safari13 .7+)|
|search|右下角按钮为“搜索”||
| search|The button in the lower right corner is "Search"||
|next|右下角按钮为“下一个”|微信、支付宝、百度小程序、快手小程序、京东小程序、app-nvue、app-vue和h5(2.9.9+，且要求设备webview内核Chrome81+、Safari13.7+)|
| next|The button in the lower right corner is "Next"|WeChat, Alipay, Baidu MiniApp, Kuaishou MiniApp, Jingdong MiniApp, app-nvue, app-vue and h5 (2.9.9+, and requires the device webview kernel Chrome81+, Safari13.7+)|
|go|右下角按钮为“前往”||
| go|The button in the lower right corner is "Go"||
|done|右下角按钮为“完成”|微信、支付宝、百度小程序、快手小程序、京东小程序、app-nvue、app-vue和h5(2.9.9+，且要求设备webview内核Chrome81+、Safari13.7+)|
| done|The button in the lower right corner is "Done"|WeChat, Alipay, Baidu MiniApp, Kuaishou MiniApp, Jingdong MiniApp, app-nvue, app-vue and h5 (2.9.9+, and require the device webview kernel Chrome81+, Safari13 .7+)|

- App平台的vue页面及 H5平台 的弹出键盘使用的是浏览器控制的键盘，在Chrome81+、Safari13.7+之前，键盘右下角文字只能设置完成和搜索，从Chrome81+、Safari13.7+起支持设置发送、下一个。
- The vue page of the App platform and the pop-up keyboard of the H5 platform use a browser-controlled keyboard. Before Chrome81+ and Safari13.7+, the text in the lower right corner of the keyboard can only be set and searched. It is supported from Chrome81+ and Safari13.7+ Set send, next.
- App平台涉及聊天的建议使用nvue，一方面因为app-vue控制键盘右下角按键文字为“发送”对webview内核有要求，另一方面聊天记录如使用scroll-view，过长的内容在app-vue上会有性能问题。
- It is recommended to use nvue on the app platform that involves chatting. On the one hand, because app-vue controls the key text in the lower right corner of the keyboard as "send", it requires the webview kernel. There will be performance issues on vue.

#### inputmode 有效值 @inputmode
#### inputmode valid values @inputmode

> 新增于 uni-app 3.6.16+
> Added in uni-app 3.6.16+
inputmode是html规范后期更新的内容。各家小程序还未支持此属性。
inputmode is the content of the later update of the html specification. Various MiniApp not yet supported this attribute.

在符合条件的高版本webview里，uni-app的web和app-vue平台中可使用本属性。
In the qualified high-version webview, this attribute can be used in the web and app-vue platforms of uni-app.

|值|说明|
|value|description|
|:-|:-|
|none|无虚拟键盘。在应用程序或者站点需要实现自己的键盘输入控件时很有用。|
| none|No virtual keyboard. Useful when an application or site needs to implement its own keyboard input control. |
|text|使用用户本地区域设置的标准文本输入键盘。|
|text|Use the standard text input keyboard for the user's locale. |
|decimal|小数输入键盘，包含数字和分隔符（通常是“ . ”或者“ , ”），设备可能也可能不显示减号键。|
| decimal|A decimal input keyboard, consisting of digits and a separator (usually " ." or " , "), the device may or may not display a minus key. |
|numeric|数字输入键盘，所需要的就是 0 到 9 的数字，设备可能也可能不显示减号键。|
|numeric|A numeric input keypad, all that is required is the digits 0 to 9, the device may or may not display a minus key. |
|tel|电话输入键盘，包含 0 到 9 的数字、星号（*）和井号（#）键。表单输入里面的电话输入通常应该使用 \<input type="tel"\> 。|
| tel| Telephone input keypad, consisting of the digits 0 through 9, the asterisk (*) and pound (#) keys. Telephone inputs inside form inputs should generally use \<input type="tel"\> . |
|search|为搜索输入优化的虚拟键盘，比如，返回键可能被重新标记为“搜索”，也可能还有其他的优化。|
| search|Virtual keyboard optimized for search input, e.g. the return key may be relabeled as "search", and there may be other optimizations as well. |
|email|为邮件地址输入优化的虚拟键盘，通常包含"@"符号和其他优化。表单里面的邮件地址输入应该使用 \<input type="email"\> 。|
| email|Virtual keyboard optimized for email address typing, usually containing "@" symbols and other optimizations. Email address inputs in forms should use \<input type="email"\> . |
|url|为网址输入优化的虚拟键盘，比如，“/”键会更加明显、历史记录访问等。表单里面的网址输入通常应该使用 \<input type="url"\> 。|
| url| Optimized virtual keyboard for URL input, for example, "/" key will be more visible, history access, etc. URL inputs in forms should generally use \<input type="url"\> . |

::: warning 注意事项
- inputmode 兼容性：`Chrome >= 66`、`Edge >= 79`、`Firefox >= 95`、`Chrome Android >= 66`、`Firefox for Android >= 79`、`Safari on iOS >= 12.2`、`WebView Android >= 66`
- inputmode compatibility: `Chrome >= 66`, `Edge >= 79`, `Firefox >= 95`, `Chrome Android >= 66`, `Firefox for Android >= 79`, `Safari on iOS >= 12.2 `, `WebView Android >= 66`
- input组件有 `inputmode` 和 `type`、`comfirm-tye` 3个相似的属性，它们的区别详解如下：
- The input component has 3 similar attributes `inputmode` and `type`, `comfirm-tye`, and their differences are explained in detail as follows:
  - type：在 uni-app 和小程序中仅仅是输入框，定义 input 的工作方式，此值决定可输入什么值。比如 number 只能输入数字。
  - type: In uni-app and MiniApp, it is just an input box, which defines how the input works. This value determines what value can be entered. For example, number can only enter numbers.
  - comfirm-type：定义键盘右下角按键的文字
  - confirm-type: Define the text of the key in the lower right corner of the keyboard
  - inputmode：inputmode 属性是当使用某些值时会对键盘所作出的优化。
  - inputmode: The inputmode attribute is an optimization for the keyboard when certain values are used.
    - 同时使用 inputmode 和 comfirm-type 时，若设值冲突，键盘右下角按键类型由 comfirm-type 决定
    - When inputmode and confirm-type are used at the same time, if the settings conflict, the type of the key in the lower right corner of the keyboard is determined by the confirm-type
    - type 属性和 inputmode 属性并不冲突
:::

### App平台iOS端软键盘上方横条去除方案
### App platform iOS side of the top of the horizontal bar to remove the program

app-vue在iOS上，webview中的软键盘弹出时，默认在软键盘上方有一个横条，显示着：上一项、下一项和完成等按钮。
When app-vue is on iOS, when the soft keyboard in webview pops up, there is a horizontal bar above the soft keyboard by default, showing: buttons for previous item, next item, and completion.
如不想显示这个横条，可以配置softinputNavBar: 'none'
If you don't want to display this horizontal bar, you can configure softinputNavBar: 'none'

配置方式，在 pages.json 中某个页面或全局配置 style
Configuration method, configure style on a certain page or globally in pages.json

```json
"app-plus": {
	"softinputNavBar": "none"
}
```

- 如需使用js动态设置softinputNavBar
- If you need to use js to dynamically set softinputNavBar
```javascript
this.$scope.$getAppWebview().setStyle({
	softinputNavBar: 'none'
})
//this.$scope.$getAppWebview()相当于html5plus里的plus.webview.currentWebview()。在uni-app里vue页面直接使用plus.webview.currentWebview()无效
//this.$scope.$getAppWebview() is equivalent to plus.webview.currentWebview() in html5plus. Using plus.webview.currentWebview() directly on the vue page in uni-app is invalid
```

如果是nvue页面，iOS默认就没有键盘上方的横条，无需任何设置。
If it is an nvue page, iOS does not have a horizontal bar above the keyboard by default, and no settings are required.

### 关于软键盘弹出的逻辑说明
### About the logical description of the soft keyboard pop-up

App平台软键盘弹出有 adjustResize|adjustPan 两种模式，默认为 adjustPan 模式，小程序平台只支持 adjustPan 模式，H5平台因不同浏览器而异
The App platform soft keyboard pops up with two modes: adjustResize|adjustPan. The default is the adjustPan mode. The MiniApp platform only supports the adjustPan mode. The H5 platform varies with different browsers
- adjustResize：软键盘弹出时，webview窗体高度挤压。屏幕高度=webview窗体高度+软键盘高度
- adjustResize: When the soft keyboard pops up, the height of the webview form is squeezed. Screen height = webview form height + soft keyboard height
- adjustPan：软键盘弹出时，webview窗体高度不变，但窗体上推，以保证输入框不被软键盘盖住
- adjustPan: When the soft keyboard pops up, the height of the webview form remains unchanged, but the form is pushed up to ensure that the input box is not covered by the soft keyboard

配置方式，在 pages.json 中配置 style
Configuration method, configure style in pages.json

```json
"app-plus": {
	"softinputMode": "adjustResize"
}
```


**注意**
**Notice**
- adjustResize模式在Android App上，弹起键盘和收回键盘时，因为要重设webview窗体高度，可能会在个别安卓机型闪现灰屏或漏出下层页面内容。
- In adjustResize mode on Android App, when the keyboard is popped up and retracted, because the height of the webview form needs to be reset, a gray screen may flash or the content of the underlying page may be leaked on some Android models.
- 小程序端在 input 聚焦期间，避免使用 css 动画。
-Avoid using css animations during input focus on the MiniApp side.
- H5平台只能在用户交互时修改 focus 生效。
- The H5 platform can only modify the focus to take effect when the user interacts.
- 如果遇到 focus 属性设置不生效的问题参考：[组件属性设置不生效解决办法](/tutorial/vue-api.html#componentsolutions)
- If you encounter the problem that the focus attribute setting does not take effect, please refer to: [Solutions for component attribute setting not taking effect](/tutorial/vue-api.html#componentsolutions)
- 如需禁止点击其他位置收起键盘的默认行为，可以监听`touch`事件并使用`prevent`修饰符（仅支持App、H5，其他平台可以通过设置`focus`来使输入框重新获取焦点），例如在确认按钮上使用：```@touchend.prevent="onTap"```
- If you want to prohibit the default behavior of clicking other positions to close the keyboard, you can listen to the `touch` event and use the `prevent` modifier (only App, H5 is supported, other platforms can set `focus` to make the input box regain focus) , such as using on the confirm button: ```@touchend.prevent="onTap"```


### 关于软键盘收起的逻辑说明
### About the logical description of soft keyboard retraction
- Android上在软键盘弹出后，点击back或点击非置焦区域可收起软键盘。
- After the soft keyboard pops up on Android, click back or click the non-focused area to close the soft keyboard.
- iOS上如果软键盘上方有带有“完成”的横条，则需要点完成才能收起键盘；如果没有软键盘上方横条，则点击非input/textarea区域即可收起软键盘
- On iOS, if there is a horizontal bar with "Done" above the soft keyboard, you need to click Done to close the keyboard; if there is no horizontal bar above the soft keyboard, tap the non-input/textarea area to close the soft keyboard

以上为默认逻辑，uni-app同时提供了隐藏软键盘的api：[uni.hideKeyboard()](https://uniapp.dcloud.io/api/key?id=hidekeyboard)
The above is the default logic. uni-app also provides an API to hide the soft keyboard: [uni.hideKeyboard()](https://uniapp.dcloud.io/api/key?id=hidekeyboard)

### App平台原生输入框的说明
### App platform native input box description
在app平台，有titleNView配置的[searchinput](/collocation/pages?id=app-titlenview)原生输入框和plus.nativeObj.view的drawinput。这两种方式的输入框都是原生的，不是webview里的。
On the app platform, there are native input boxes of [searchinput](/collocation/pages?id=app-titlenview) configured by titleNView and drawinput of plus.nativeObj.view. The input boxes of these two methods are native, not in the webview.
- 原生输入框在iOS上不会有软键盘上方的横条
- The native input box will not have a horizontal bar above the soft keyboard on iOS
- 原生输入框一样受配置的`adjustPan|adjustResize`模式影响
- The native input box is also affected by the configured `adjustPan|adjustResize` mode

**input示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/input/input)
**input example** [View Demo](https://hellouniapp.dcloud.net.cn/pages/component/input/input)

以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。
The following sample code comes from [hello uni-app project](https://github.com/dcloudio/hello-uniapp). It is recommended to use HBuilderX to create a new uni-app project and select the hello uni-app template to directly experience the complete example.


::: preview https://hellouniapp.dcloud.net.cn/pages/component/input/input
> Template
```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<!-- This example does not contain the complete css, please refer to the above to get the external link css, check it in the hello uni-app project -->
<template>
	<view>
		<view class="uni-common-mt">
			<view class="uni-form-item uni-column">
				<view class="title">可自动聚焦的input</view>
				<input class="uni-input" focus placeholder="自动获得焦点" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">键盘右下角按钮显示为搜索</view>
				<input class="uni-input" confirm-type="search" placeholder="键盘右下角按钮显示为搜索" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">控制最大输入长度的input</view>
				<input class="uni-input" maxlength="10" placeholder="最大输入长度为10" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">实时获取输入值：{{inputValue}}</view>
				<input class="uni-input" @input="onKeyInput" placeholder="输入同步到view中" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">控制输入的input</view>
				<input class="uni-input" @input="replaceInput" v-model="changeValue" placeholder="连续的两个1会变成2" />
			</view>
			<!-- #ifndef MP-BAIDU -->
			<view class="uni-form-item uni-column">
				<view class="title">控制键盘的input</view>
				<input class="uni-input" ref="input1" @input="hideKeyboard" placeholder="输入123自动收起键盘" />
			</view>
			<!-- #endif -->
			<view class="uni-form-item uni-column">
				<view class="title">数字输入的input</view>
				<input class="uni-input" type="number" placeholder="这是一个数字输入框" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">密码输入的input</view>
				<input class="uni-input" password type="text" placeholder="这是一个密码输入框" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">带小数点的input</view>
				<input class="uni-input" type="digit" placeholder="带小数点的数字键盘" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">身份证输入的input</view>
				<input class="uni-input" type="idcard" placeholder="身份证输入键盘" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">控制占位符颜色的input</view>
				<input class="uni-input" placeholder-style="color:#F76260" placeholder="占位符字体是红色的" />
			</view>
      <view class="uni-form-item uni-column">
				<view class="title"><text class="uni-form-item__title">带清除按钮的输入框</text></view>
				<view class="uni-input-wrapper">
					<input class="uni-input" placeholder="带清除按钮的输入框" :value="inputClearValue" @input="clearInput" />
					<text class="uni-icon" v-if="showClearIcon" @click="clearIcon">&#xe434;</text>
				</view>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title"><text class="uni-form-item__title">可查看密码的输入框</text></view>
				<view class="uni-input-wrapper">
					<input class="uni-input" placeholder="请输入密码" :password="showPassword" />
					<text class="uni-icon" :class="[!showPassword ? 'uni-eye-active' : '']"
						@click="changePassword">&#xe568;</text>
				</view>
			</view>
		</view>
	</view>
</template>
```
> Script
```vue
<script>
export default {
    data() {
        return {
            title: 'input',
            focus: false,
            inputValue: '',
            showClearIcon: false,
            inputClearValue: '',
            changeValue: '',
            showPassword: true
        }
    },
    methods: {
        onKeyInput: function(event) {
            this.inputValue = event.target.value
        },
        replaceInput: function(event) {
            var value = event.target.value;
            if (value === '11') {
                this.changeValue = '2';
            }
        },
        hideKeyboard: function(event) {
            if (event.target.value === '123') {
                uni.hideKeyboard();
            }
        },
        clearInput: function(event) {
            this.inputClearValue = event.detail.value;
            if (event.detail.value.length > 0) {
                this.showClearIcon = true;
            } else {
                this.showClearIcon = false;
            }
        },
        clearIcon: function() {
            this.inputClearValue = '';
            this.showClearIcon = false;
        },
        changePassword: function() {
            this.showPassword = !this.showPassword;
        }
    }
}
</script>
```
:::

### 扩展
### Extensions
- uni ui提供了easyinput组件，提供了常用的封装，可搭配uni-forms组件，支持表单验证、支持各种常用设置。[详见](https://ext.dcloud.net.cn/plugin?id=3455)
- uni ui provides the easyinput component, which provides commonly used packages, can be used with uni-forms components, supports form validation, and supports various common settings. [See details](https://ext.dcloud.net.cn/plugin?id=3455)
- uni ui提供了combox组件，可选可输入，常用词免输入。[详见](https://ext.dcloud.net.cn/plugin?id=1261)
- uni ui provides a combox component, which is optional and can be input, and common words are free of input. [See details](https://ext.dcloud.net.cn/plugin?id=1261)
- uni ui提供了搜索框ui组件，插件市场还有封装好的页面模板。[详见](https://ext.dcloud.net.cn/search?q=search)。云端一体搜索模板功能完善，推荐使用：[https://ext.dcloud.net.cn/plugin?id=3851](https://ext.dcloud.net.cn/plugin?id=3851)
- uni ui provides search box ui components, and the plug-in market also has packaged page templates. [See](https://ext.dcloud.net.cn/search?q=search) for details. The cloud-integrated search template has complete functions, and it is recommended to use: [https://ext.dcloud.net.cn/plugin?id=3851](https://ext.dcloud.net.cn/plugin?id=3851)
- uni-app插件市场有输入文字后自动提示候选的组件，可搜索 [autocomplete](https://ext.dcloud.net.cn/search?q=autocomplete) 查看。
- The uni-app plug-in market has a component that automatically prompts candidates after inputting text, you can search for [autocomplete](https://ext.dcloud.net.cn/search?q=autocomplete) to view.
- 插件市场有各种类型的模拟键盘，比如车牌键盘、身份证键盘，可去插件市场搜索 [键盘](https://ext.dcloud.net.cn/search?q=%E9%94%AE%E7%9B%98)。
- There are various types of simulated keyboards in the plug-in market, such as license plate keyboards and ID card keyboards, you can go to the plug-in market to search [Keyboard](https://ext.dcloud.net.cn/search?q=%E9%94%AE %E7%9B%98).
