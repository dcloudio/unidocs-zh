<md-translatedByGoogle />
#### navigator

页面跳转。
Page jump.

该组件类似HTML中的`<a>`组件，但只能跳转本地页面。目标页面必须在pages.json中注册。
This component is similar to the `<a>` component in HTML, but it can only jump to local pages. The target page must be registered in pages.json.

该组件的功能有API方式，另见：[https://uniapp.dcloud.io/api/router?id=navigateto](https://uniapp.dcloud.io/api/router?id=navigateto)
The function of this component has an API method, see also: [https://uniapp.dcloud.io/api/router?id=navigateto](https://uniapp.dcloud.io/api/router?id=navigateto)

**属性说明**
**Attribute description**

|属性名|类型|默认值|说明|平台差异说明|
| Attribute name| Type| Defaults| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|
|url|String||应用内的跳转链接，值为相对路径或绝对路径，如："../first/first"，"/pages/first/first"，注意不能加 ``.vue`` 后缀||
| url| String| | The jump link in the application is a relative path or an absolute path, such as "../first/first", "/pages/first/first", please note that you cannot add the suffix `.vue`| |
|open-type|String|navigate|跳转方式||
| open-type| String| navigate| Goto method| |
|delta|Number||当 open-type 为 'navigateBack' 时有效，表示回退的层数||
| delta| Number| | Valid when open-type is 'navigateBack', indicating the number of returned layers| |
|animation-type|String|pop-in/out|当 open-type 为 navigate、navigateBack 时有效，窗口的显示/关闭动画效果，详见：[窗口动画](/api/router?id=animation)|App|
|animation-type|String|pop-in/out|It is valid when the open-type is navigate, navigateBack, the window display/close animation effect, see: [window animation](/api/router?id=animation)| App|
|animation-duration|Number|300|当 open-type 为 navigate、navigateBack 时有效，窗口显示/关闭动画的持续时间。|App|
| animation-duration| Number| 300| Valid when open-type is navigate and navigateBack, indicating the animation duration of window turning on/off.| App|
|hover-class|String|navigator-hover|指定点击时的样式类，当hover-class="none"时，没有点击态效果||
| hover-class| String| navigator-hover| Specify the style class when clicking. For hover-class="none", there is no click state| |
|hover-stop-propagation|Boolean|false|指定是否阻止本节点的祖先节点出现点击态|微信小程序|
|hover-stop-propagation|Boolean|false|Specifies whether to prevent the ancestor node of this node from appearing in the click state|WeChat applet|
|hover-start-time|Number|50|按住后多久出现点击态，单位毫秒||
| hover-start-time| Number| 50| How long does the click state appear after pressing, in milliseconds| |
|hover-stay-time|Number|600|手指松开后点击态保留时间，单位毫秒|&nbsp;|
| hover-stay-time| Number| 600| Retention time of the click state after finger release, in milliseconds|  |
|target|String|self|在哪个小程序目标上发生跳转，默认当前小程序，值域self/miniProgram|微信2.0.7+、百度2.5.2+、QQ|
|target|String|self| on which mini-program target the jump occurs, the default is the current mini-program, the value range is self/miniProgram|WeChat 2.0.7+, Baidu 2.5.2+, QQ|

**open-type 有效值**
**open-type valid value**

|值|说明|平台差异说明|
| Value| Instruction| Platform difference description|
|:-|:-|:-|
|navigate|对应 uni.navigateTo 的功能||
| navigate| Function corresponding to uni.navigateTo| |
|redirect|对应 uni.redirectTo 的功能||
| redirect| Function corresponding to uni.redirectTo| |
|switchTab|对应 uni.switchTab 的功能||
| switchTab| Function corresponding to uni.switchTab| |
|reLaunch|对应 uni.reLaunch 的功能|字节跳动小程序与飞书小程序不支持|
|reLaunch|Corresponding to the function of uni.reLaunch|ByteDance applet and Feishu applet are not supported|
|navigateBack|对应 uni.navigateBack 的功能||
| navigateBack| Function corresponding to uni.navigateBack| |
|exit|退出小程序，target="miniProgram"时生效|微信2.1.0+、百度2.5.2+、QQ1.4.7+|
|exit|Exit the Mini Program, it will take effect when target="miniProgram"|WeChat 2.1.0+, Baidu 2.5.2+, QQ1.4.7+|


**注意**
**Notice**
- 跳转tabbar页面，必须设置open-type="switchTab"
- Switch to tabbar page and open-type="switchTab" must be set
- navigator-hover 默认为 {background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}, ``<navigator>`` 的子节点背景色应为透明色。
- navigator-hover defaults to {background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}, `<navigator>` the background color of the child nodes should be transparent.
- navigator-`open-type`属性 如果使用对应的值，则对应值的功能会高于对应跳转路径。
- If the navigator-`open-type` attribute uses the corresponding value, the function of the corresponding value will be higher than the corresponding jump path.
- app-nvue 平台只有纯nvue项目（render为native）才支持 `<navigator>`。非render为native的情况下，nvue暂不支持navigator组件，请使用API跳转。
- The app-nvue platform only supports `<navigator>` for pure nvue projects (render is native). If not rendered as native, nvue temporarily does not support navigator component. Please use API to redirect.
- app下退出应用，Android平台可以使用[plus.runtime.quit](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.quit)。iOS没有退出应用的概念。
- Exit the app under the app, and the Android platform can use [plus.runtime.quit](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.quit). iOS has no concept of exiting an app.
- [uLink组件](https://ext.dcloud.net.cn/plugin?id=1182)是navigator组件的增强版，样式上自带下划线，功能上支持打开在线网页、其他App的schema、mailto发邮件、tel打电话。
- [uLink component](https://ext.dcloud.net.cn/plugin?id=1182) is an enhanced version of the navigator component, with its own underline on the style. Functionally, it supports opening online web pages, schema of other apps, mailto, and tel.

**示例** [查看示例](https://hellouniapp.dcloud.net.cn/pages/component/navigator/navigator)
**Example** [View examples](https://hellouniapp.dcloud.net.cn/pages/component/navigator/navigator)
 
::: preview https://hellouniapp.dcloud.net.cn/pages/component/navigator/navigator

```html
<template>
	<view>
		<view class="page-body">
			<view class="btn-area">
				<navigator url="navigate/navigate?title=navigate" hover-class="navigator-hover">
					<button type="default">跳转到新页面</button>
				</navigator>
				<navigator url="redirect/redirect?title=redirect" open-type="redirect" hover-class="other-navigator-hover">
					<button type="default">在当前页打开</button>
				</navigator>
				<navigator url="/pages/tabBar/extUI/extUI" open-type="switchTab" hover-class="other-navigator-hover">
					<button type="default">跳转tab页面</button>
				</navigator>
			</view>
		</view>
	</view>
</template>
<script>
// navigate.vue页面接受参数
//navigate.vue page reception parameters
export default {
	onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
		console.log(option.id); //打印出上个页面传递的参数。
		console.log(option.name); //打印出上个页面传递的参数。
	}
}
</script>
```
:::

url有长度限制，太长的字符串会传递失败，可使用[窗体通信](https://uniapp.dcloud.io/tutorial/page.html#emit)、[全局变量](https://ask.dcloud.net.cn/article/35021)，或`encodeURIComponent`等多种方式解决，如下为`encodeURIComponent`示例。
The url has a length limit. Too long strings will fail to be delivered. You can use [Form Communication](https://uniapp.dcloud.io/tutorial/page.html#emit), [Global Variables](https:// ask.dcloud.net.cn/article/35021), or `encodeURIComponent` and other solutions, the following is an example of `encodeURIComponent`.
```html
<navigator :url="'/pages/navigate/navigate?item='+ encodeURIComponent(JSON.stringify(item))"></navigator>
```
```javascript
// navigate.vue页面接受参数
//navigate.vue page reception parameters
onLoad: function (option) {
	const item = JSON.parse(decodeURIComponent(option.item));
}
```

