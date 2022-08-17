<md-translatedByGoogle />
#### textarea

多行输入框。
Multi-line input box.

**属性说明**
**Attribute description**

|属性名|类型|默认值|说明|平台差异说明|
| Attribute name| Type| Defaults| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|
|value|String||输入框的内容||
| value| String| | Contents of the input box| |
|placeholder|String||输入框为空时占位符||
| placeholder| String| | Placeholder when the input box is empty| |
|placeholder-style|String||指定 placeholder 的样式||
| placeholder-style| String| | Specify the style of placeholder| |
|placeholder-class|String|textarea-placeholder|指定 placeholder 的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/|字节跳动小程序、飞书小程序、快手小程序不支持|
|placeholder-class|String|textarea-placeholder|Specifies the style class of the placeholder. Note that when scoped is written in the style of the page or component, you need to write /deep/| in front of the class name ByteDance applet, Feishu applet, Kuaishou Applets do not support|
|disabled|Boolean|false|是否禁用||
| disabled| Boolean| false| Disable or not| |
|maxlength|Number|140|最大输入长度，设置为 -1 的时候不限制最大长度||
| maxlength| Number| 140| Maximum input length, which is not limited when set to -1| |
|focus|Boolean|false|获取焦点|在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点|
| focus| Boolean| false| Get focus| Whether to focus on H5 platform and whether the soft keyboard pops up with it depend on the implementation of the current browser itself. nvue page is not supported, and focus () and blur () methods of the component are needed to be used to control the focus|
|auto-focus|Boolean|false|自动聚焦，拉起键盘|京东小程序|
|auto-focus|Boolean|false|Auto-focus, pull up the keyboard|JD Mini Program|
|auto-height|Boolean|false|是否自动增高，设置auto-height时，style.height不生效||
| auto-height| Boolean| false| Whether to increase the height automatically. style.height does not take effect when auto-height is set| |
|fixed|Boolean|false|如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true|微信小程序、百度小程序、字节跳动小程序、飞书小程序、QQ小程序、快手小程序、京东小程序|
|fixed|Boolean|false|If the textarea is in a position:fixed area, you need to display the specified attribute fixed as true|WeChat applet, Baidu applet, ByteDance applet, Feishu applet, QQ applet, Kuaishou Mini Programs, JD Mini Programs |
|cursor-spacing|Number|0|指定光标与键盘的距离，单位 px 。取 textarea 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离|App、微信小程序、百度小程序、字节跳动小程序、飞书小程序、QQ小程序、京东小程序|
|cursor-spacing|Number|0|Specifies the distance between the cursor and the keyboard, in px . Take the minimum value of the distance between the textarea and the bottom and the distance specified by cursor-spacing as the distance between the cursor and the keyboard|App, WeChat applet, Baidu applet, ByteDance applet, Feishu applet, QQ applet, Jingdong applet Program |
|cursor|Number||指定focus时的光标位置|微信小程序、App、H5、百度小程序、字节跳动小程序、飞书小程序、QQ小程序、京东小程序|
|cursor|Number||Cursor position when specifying focus|WeChat applet, App, H5, Baidu applet, ByteDance applet, Feishu applet, QQ applet, Jingdong applet|
|confirm-type|String|done|设置键盘右下角按钮的文字|微信小程序基础库2.13.0+、App-vue和H5(2.9.9+，且要求设备webview内核Chrome81+、Safari13.7+)|
|confirm-type|String|done|Set the text of the button in the lower right corner of the keyboard|WeChat Mini Program Basic Library 2.13.0+, App-vue and H5 (2.9.9+, and requires device webview kernel Chrome81+, Safari13.7+) |
|confirm-hold|Boolean|false|点击键盘右下角按钮时是否保持键盘不收起|App(3.3.7+)、H5 (3.3.7+)、微信小程序 (基础库 2.16.0+)、百度小程序 (基础库 3.130.1+)、快手小程序|
|confirm-hold|Boolean|false|Whether to keep the keyboard closed when clicking the button in the lower right corner of the keyboard|App(3.3.7+), H5 (3.3.7+), WeChat applet (basic library 2.16.0+), Baidu applet (basic library 3.130.1+), Kuaishou applet|
|show-confirm-bar|Boolean|true|是否显示键盘上方带有”完成“按钮那一栏|微信小程序、百度小程序、QQ小程序、京东小程序|
|show-confirm-bar|Boolean|true|Whether to display the column with the "Complete" button above the keyboard|WeChat applet, Baidu applet, QQ applet, Jingdong applet|
|selection-start|Number|-1|光标起始位置，自动聚焦时有效，需与selection-end搭配使用|微信小程序、App、H5、百度小程序、字节跳动小程序、飞书小程序、QQ小程序、京东小程序|
|selection-start|Number|-1|The starting position of the cursor, valid when auto-focusing, and must be used with selection-end|WeChat applet, App, H5, Baidu applet, ByteDance applet, Feishu applet , QQ applet, Jingdong applet|
|selection-end|Number|-1|光标结束位置，自动聚焦时有效，需与selection-start搭配使用|微信小程序、App、H5、百度小程序、字节跳动小程序、飞书小程序、QQ小程序、京东小程序|
|selection-end|Number|-1| Cursor end position, valid when auto-focusing, must be used in conjunction with selection-start | WeChat applet, App, H5, Baidu applet, ByteDance applet, Feishu applet, QQ applet, Jingdong applet|
|adjust-position|Boolean|true|键盘弹起时，是否自动上推页面|App-Android（softinputMode 为 adjustResize 时无效）、微信小程序、百度小程序、QQ小程序、京东小程序|
|adjust-position|Boolean|true|Whether the page is automatically pushed up when the keyboard pops up|App-Android (invalid when the softinputMode is adjustResize), WeChat applet, Baidu applet, QQ applet, Jingdong applet|
|disable-default-padding|boolean|false|是否去掉 iOS 下的默认内边距|微信小程序2.10.0、飞书小程序 3.46|
|disable-default-padding|boolean|false|Whether to remove the default padding under iOS|WeChat applet 2.10.0, Feishu applet 3.46|
|hold-keyboard|boolean|false|focus时，点击页面的时候不收起键盘|微信小程序2.8.2|
|hold-keyboard|boolean|false|focus, do not hold the keyboard when clicking on the page|WeChat applet 2.8.2|
|auto-blur|boolean|false|键盘收起时，是否自动失去焦点|App-vue 3.0.0+ ，App-nvue不支持|
| auto-blur| boolean| false| Whether to automatically lose focus when the keyboard is retracted| App-vue 3.0.0+, not supported by App-nvue|
|ignoreCompositionEvent|boolean|true|是否忽略组件内对文本合成系统事件的处理。为 `false` 时将触发 `compositionstart、compositionend、compositionupdate` 事件，且在文本合成期间会触发 `input` 事件|App-vue (3.4.4+)、H5 (3.4.4+)、App-nvue不支持|
|ignoreCompositionEvent|boolean|true|Whether to ignore the processing of text composition system events in the component. `false` will fire `compositionstart, compositionend, compositionupdate` events, and `input` events will fire during text composition|App-vue (3.4.4+), H5 (3.4.4+), App-nvue not Support|
|@focus|EventHandle||输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度|仅微信小程序、京东小程序、App（HBuilderX 2.0+ [nvue uni-app模式](http://ask.dcloud.net.cn/article/36074)） 、QQ小程序支持 height|
|@focus|EventHandle||Triggered when the input box is focused, event.detail = { value, height }, height is the height of the keyboard|Wechat applet, Jingdong applet, App (HBuilderX 2.0+ [nvue uni-app mode]( http://ask.dcloud.net.cn/article/36074)), QQ applet supports height|
|@blur|EventHandle||输入框失去焦点时触发，event.detail = {value, cursor}|快手小程序不支持|
|@blur|EventHandle||Triggered when the input box loses focus, event.detail = {value, cursor}|Not supported by Kuaishou applet|
|@linechange|EventHandle||输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0}|字节跳动小程序、飞书小程序、快手小程序不支持,nvue ios暂不支持|
|@linechange|EventHandle||Called when the number of lines in the input box changes, event.detail = {height: 0, heightRpx: 0, lineCount: 0}|ByteDance applet, Feishu applet, Kuaishou applet are not supported, nvue ios does not currently support|
|@input|EventHandle||当键盘输入时，触发 input 事件，event.detail = {value, cursor}， @input 处理函数的返回值并不会反映到 textarea 上|快手小程序不支持|
|@input|EventHandle||When the keyboard is input, trigger the input event, event.detail = {value, cursor}, the return value of the @input processing function will not be reflected on the textarea|Not supported by Kuaishou applet|
|@confirm|EventHandle||点击完成时， 触发 confirm 事件，event.detail = {value: value}|微信小程序、百度小程序、QQ小程序、京东小程序|
|@confirm|EventHandle||When you click Finish, trigger the confirm event, event.detail = {value: value}|WeChat applet, Baidu applet, QQ applet, Jingdong applet|
|@keyboardheightchange|Eventhandle||键盘高度发生变化的时候触发此事件，event.detail = {height: height, duration: duration}|微信小程序基础库2.7.0+、App 3.1.0+|
|@keyboardheightchange|Eventhandle||This event is triggered when the keyboard height changes, event.detail = {height: height, duration: duration}|WeChat Mini Program Basic Library 2.7.0+, App 3.1.0+|


**confirm-type 有效值**
**Valid value of confirm-type**


|值|说明|
| Value| Instruction|
|:-|:-|
|send|右下角按钮为“发送”|
| send| The button in the lower right corner is "Send"|
|search|右下角按钮为“搜索”|
| search| The button in the lower right corner is "Search"|
|next|右下角按钮为“下一个”|
| next| The button in the lower right corner is "Next"|
|go|右下角按钮为“前往”|
| go| The button in the lower right corner is "Go"|
|done|右下角按钮为“完成”|
| done| The button in the lower right corner is "Finish"|

**示例** [查看示例](https://hellouniapp.dcloud.net.cn/pages/component/textarea/textarea)
**Example** [View examples](https://hellouniapp.dcloud.net.cn/pages/component/textarea/textarea)
 
以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。
The following sample code comes from the [hello uni-app project](https://github.com/dcloudio/hello-uniapp). It is recommended to use HBuilderX to create a new uni-app project and choose the hello uni-app template to directly experience the complete example.

::: preview https://hellouniapp.dcloud.net.cn/pages/component/textarea/textarea
> Template
```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<!-- This example does not include the complete css, please refer to the above to obtain the external css. View it in the hello uni-app project -->
<template>
	<view>
		<view class="uni-title uni-common-pl">输入区域高度自适应，不会出现滚动条</view>
		<view class="uni-textarea">
			<textarea @blur="bindTextAreaBlur" auto-height />
			</view>
			<view class="uni-title uni-common-pl">占位符字体是红色的textarea</view>
			<view class="uni-textarea">
				<textarea placeholder-style="color:#F76260" placeholder="占位符字体是红色的"/>
			</view>
		</view>
</template>
<script>
export default {
    data() {
        return {}
    },
    methods: {
        bindTextAreaBlur: function (e) {
            console.log(e.detail.value)
        }
    }
}
</script>
```
:::

**Tips**

- textarea 的 blur 事件会晚于页面上的 tap 事件，如果需要在 button 的点击事件获取 textarea，可以使用 form 的 @submit。
- The blur event of textarea will be later than the tap event on the page. If you need to get the textarea from the click event of the button, you can use the @submit。 of the form
- 如果遇到 value 属性设置不生效的问题参考：[组件属性设置不生效解决办法](/tutorial/vue-api.html#componentsolutions)
- If you encounter the problem that the value attribute setting does not take effect, please refer to: [Component attribute setting does not take effect solution](/tutorial/vue-api.html#componentsolutions)
- 微信小程序、百度小程序、字节跳动小程序、飞书小程序中，textarea是原生组件，层级高于前端组件，请勿在 scroll-view、swiper、picker-view、movable-view 中使用 textarea 组件。覆盖textarea需要使用cover-view。[详见](/component/native-component)
- In WeChat applet, Baidu applet, ByteDance applet, Feishu applet, textarea is a native component, and its level is higher than the front-end component. Do not use it in scroll-view, swiper, picker-view, movable-view textarea component. Covering the textarea requires using cover-view. [See details](/component/native-component)
- 小程序端 css 动画对 textarea 组件无效。
- applet-side css animation doesn't work for textarea components.
- H5 平台只能在用户交互时修改 focus 生效。
- It can only take effect during user interaction on H5 platform via modifying the focus.
- 如果遇到 focus 属性设置不生效的问题参考：[组件属性设置不生效解决办法](/tutorial/vue-api.html#componentsolutions)
- If you encounter the problem that the focus property setting does not take effect, please refer to: [Component property setting does not take effect solution](/tutorial/vue-api.html#componentsolutions)
- 软键盘的弹出和收起逻辑，详见[input的文档](/component/input?id=app%E5%B9%B3%E5%8F%B0ios%E7%AB%AF%E8%BD%AF%E9%94%AE%E7%9B%98%E4%B8%8A%E6%96%B9%E6%A8%AA%E6%9D%A1%E5%8E%BB%E9%99%A4%E6%96%B9%E6%A1%88)
- For the pop-up and retract logic of the soft keyboard, please refer to the [input document](/component/input?id=app%E5%B9%B3%E5%8F%B0ios%E7%AB%AF%E8%BD%AF%E9%94%AE%E7%9B%98%E4%B8%8A%E6%96%B9%E6%A8%AA%E6%9D%A1%E5%8E%BB%E9%99%A4%E6%96%B9%E6%A1%88)
- 如需禁止点击其他位置收起键盘的默认行为，可以监听`touch`事件并使用`prevent`修饰符（仅支持App、H5，其他平台可以通过设置`focus`来使输入框重新获取焦点），例如在确认按钮上使用：```@touchend.prevent="onTap"```
- If you need to prohibit the default behavior of clicking other places to collapse the keyboard, you can listen to the `touch` event and use the `prevent` modifier (only App and H5 are supported. On other platforms, you can set `focus` to enable input box to regain the focus), for example, use on the confirm button: `@touchend.prevent="onTap"`
- js中给textarea组件赋值为字符串，在字符串中加\n可实现换行。
- js assigns a value to the textarea component as a string. Adding \\n to the string can realize line feed.
- nvue 样式 `word-wrap` 在 Android 平台暂不支持
- nvue style `word-wrap` is not supported on Android platform
- 旧版本chrome或同内核浏览器会将输入多个标点符号放在一行，此时可通过将textarea样式设置为`word-break: break-word;`实现自动换行。
- Older versions of chrome or browsers with the same core will put multiple punctuation marks on one line. In this case, you can set the textarea style to `word-break: break-word;` to achieve automatic line break.
- placeholder-style指定样式类font-size单位为rpx时，字节跳动小程序、飞书小程序、快手小程序不支持，可使用uni.upx2px()将rpx单位值转换成px。
- When placeholder-style specifies that the font-size unit of the style class is rpx, the ByteDance applet, Feishu applet, and Kuaishou applet are not supported. You can use uni.upx2px() to convert the unit value of rpx to px.
- App-iOS nvue页面默认是收起键盘，如果想换行需要设置confirm-hold为true。
- App-iOS nvue page defaults to close the keyboard, if you want to wrap, you need to set confirm-hold to true.


```html
<template>
    <view class="content">
        <textarea class="textarea" v-model="txt"></textarea>
    </view>
</template>
<script>
    export default {
        data() {
            return {
                "txt":"hello world！\n textarea多行输入框"
            }
        }
    }
</script>
```



nvue下键盘右下角按钮点击仅触发换行；如想监听该按钮事件可以参考，示例代码如下：
Under nvue, clicking the button in the lower right corner of the keyboard only triggers line feed; If you want to listen to this button event, please refer to the sample code as follows:
```html
<template>
	<view class="content">
		<textarea class="textarea" v-model="txt"></textarea>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				txt:"txt"
			}
		},
		watch: {
			txt(txt) {
				if( txt.indexOf('\n') != -1 ){ //敲了回车键了
				   uni.hideKeyboard() //收起软键盘
				}
			}
		},
		methods: {
		}
	}
</script>

<style>
.textarea{
	border: solid 1px red;
}
</style>
```


**富文本编辑的解决方案**
**Solution to rich text editing**
在输入框里图文混排内容，在web上该功能依赖document，而小程序和app的正常页面又没有document。
In the input box, the content is mixed with graphics and text. On the web, this function relies on documents, and the normal pages of small programs and apps do not have documents.
- 方式一：使用uni-app自带的`editor`组件，该组件支持App、H5、微信小程序，其他家小程序自身未提供这类解决方案。
- Method 1: Use the `editor` component that comes with uni-app. This component supports App, H5, and WeChat mini-programs. Other mini-programs themselves do not provide such solutions.
- 方式二：采用markdown编辑器方案，输入区输入markdown语法，预览区提供预览。这种方式可以跨端。插件市场搜[富文本编辑](https://ext.dcloud.net.cn/search?q=%E5%AF%8C%E6%96%87%E6%9C%AC%E7%BC%96%E8%BE%91)，有不少插件。
- Method 2: Adopt markdown editor scheme, input markdown syntax in input area, and provide preview in preview area. In this way, cross sides are allowed. Numerous plug-ins are available in the plug-in market when searching for [Rich text editing](https://ext.dcloud.net.cn/search?q=%E5%AF%8C%E6%96%87%E6%9C%AC%E7%BC%96%E8%BE%91).
- 方式三：使用web-view组件，加载html页面，此时可使用web中常见的各种富文本编辑器，插件市场也有这类插件。
- Method 3: Use web-view component, load html pages. At this time, you can use various rich-text editors commonly found in the web, which are also available in the plug-in market.
