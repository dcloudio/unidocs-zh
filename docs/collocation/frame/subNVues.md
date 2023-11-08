subNvue，是 vue 页面的原生子窗体，把weex渲染的原生界面当做 vue 页面的子窗体覆盖在页面上。它不是全屏页面，它给App平台vue页面中的层级覆盖和原生界面自定义提供了更强大和灵活的解决方案。它也不是组件，就是一个原生子窗体。
subNvue, the native subwindow of vue page, covers the native interface rendered by weex as a sub-subwindow of vue page on the page. It is not a full-screen page. It provides a more powerful and flexible solution for hierarchical coverage and native interface custom in the vue page of App platform. It is just a native subwindow, not a component.

它的设计背景和用途详见：[subNVue 原生子窗体开发指南](https://ask.dcloud.net.cn/article/35948)
Its design background and usage are detailed in: [subNVue Native Subwindow Development Guide](https://ask.dcloud.net.cn/article/35948)

> subNvue 自1.9.10 起支持 ，仅支持 app 平台
> subNvue only supported since 1.9.10 on app platform

### uni.getSubNVueById(subNvueId)@app-getsubnvuebyid

通过 `ID` 获取 `subNVues` 原生子窗体的实例。  [subNVues 配置](/collocation/pages?id=app-subNVues)
An instance of obtaining the `subNVues` native subwindow by `ID`.  [subNVues configuration](/collocation/pages?id=app-subNVues)

|参数	|类型	|说明				|
| Parameter| Type| Instruction|
|---	|---	|---				|
|subNvueId |String	| 原生子窗体的 ID|
| subNvueId| String| ID of the native subwindow|

**代码示例**
**Code example**

```javascript
const subNVue = uni.getSubNVueById('popup');
```

#### 返回值
#### Return value
返回一个 [subNVue](/api/window/subNVues?id=subnvue) 对象
Return a [subNVue](/api/window/subNVues?id=subnvue) object


### uni.getCurrentSubNVue()@app-getCurrentSubNVue

在一个subnvue窗体的nvue页面代码中，获取当前 `subNVues` 原生子窗体的实例。
An instance of obtaining the current `subNVues` native subwindow in the nvue page code of a subnvue window.

**代码示例（注意执行在nvue页面中）**
**Examples of codes (remember execute is in the nvue page)**

```javascript
const subNVue = uni.getCurrentSubNVue();
```

#### 返回值
#### Return value
返回一个 [subNVue](/api/window/subNVues?id=subnvue) 对象
Return a [subNVue](/api/window/subNVues?id=subnvue) object


#### subNVue 对象的方法列表@subNVue
#### Method list of subNVue object @subNVue

|方法			|说明				|
| Method| Instruction|
|---			|---				|
|show			| 显示原生子窗体		|
| show| Display native subwindow|
|hide			| 隐藏原生子窗体		|
| hide| Hide native subwindow|
|setStyle		| 设置原生子窗体的样式	|
| setStyle| Set the style of the native subwindow|


### subNVue.show (aniShow,duration,showedCB)
显示原生子窗体
Display native subwindow

|参数		|类型|默认值	|说明								|
| Parameter| Type| Defaults| Instruction|
|---		|---	|---		|---																|
|aniShow	|String| auto	|显示原生子窗体的动画效果 ，如果没有指定窗口动画类型，则使用默认值“auto”，即自动选择上一次显示窗口的动画效果，如果之前没有显示过，则使用“none”动画效果。[详见动画类型](/api/window/subNVues?id=动画类型)|
| aniShow| String| auto| Display the animation effect of the native subwindow. If the window animation type is not specified, the default value of "auto" will be used, i.e., the animation effect of the last displayed window will be automatically selected. If it has not been displayed before, the animation effect of "none" will be used. [See animation type for details](/api/window/subNVues?id=%E5%8A%A8%E7%94%BB%E7%B1%BB%E5%9E%8B)|
|duration	|Number| 600	|显示原生子窗体的动画持续时间，单位为ms，如果没有设置则使用默认窗口动画时间 600ms。|
| duration| Number| 600| Display the animation duration of the native subwindow, in ms. If it is not set, the default window animation time will be 600 ms.|
|showedCB	|Function|		|显示完成的回调函数，当指定原生子窗体显示动画执行完毕时触发回调函数，窗口无动画效果（如"none"动画效果）时也会触发此回调。	|
| showedCB| Function| | Display the finished callback function. The displayed callback function will be triggered when the specified native subwindow display animation is finished, and this callback will also be triggered when the window has no animation effect (such as "none" animation effect).|


**代码示例**
**Code example**

```javascript
subNVue.show('slide-in-left',200,()=>{
	console.log('subNVue 原生子窗体显示成功');
})
```


### subNVue.hide (aniShow,duration)
隐藏原生子窗体
Hide native subwindow

|参数		|类型|默认值	|说明																																																												|
| Parameter| Type| Defaults| Instruction|
|---		|---|---	|---																		|
|aniShow	|String| auto	|隐藏原生子窗体的动画效果 ，如果没有指定窗口动画类型，则使用默认值“auto”，即自动选择上一次显示窗口的动画效果，如果之前没有显示过，则使用“none”动画效果。[详见动画类型](/api/window/subNVues?id=动画类型)|
| aniShow| String| auto| Hide the animation effect of the native subwindow. If the window animation type is not specified, the default value of "auto" will be used, i.e., the animation effect of the last displayed window will be automatically selected. If it has not been displayed before, the animation effect of "none" will be used. [See animation type for details](/api/window/subNVues?id=%E5%8A%A8%E7%94%BB%E7%B1%BB%E5%9E%8B)|
|duration	|Number| 600	|隐藏原生子窗体的动画持续时间，单位为ms，如果没有设置则使用默认窗口动画时间 600ms。	|
| duration| Number| 600| Hide the animation duration of the native subwindow, in ms. If it is not set, the default window animation time will be 600 ms.|

**代码示例**
**Code example**

```javascript
subNVue.hide('slide-out-left',200);
```


### subNVue.setStyle (style)
设置原生子窗体的样式
Set the style of the native subwindow

|参数	|类型	|说明					|
| Parameter| Type| Instruction|
|---	|---	|---					|
|style	|Object	| 原生子窗体的样式	|
| style| Object| Style of the native subwindow|

**原生子窗体的样式**
**Style of the native subwindow**

|属性|类型|默认值|描述|
| Attribute| Type| Defaults| Describe|
|:-|:-|:-|:-|
|position|String|absolute|原生子窗体的排版位置，排版位置决定原生子窗体在父窗口中的定位方式。 可取值："static"，原生子窗体在页面中正常定位，如果页面存在滚动条则随窗口内容滚动；"absolute"，原生子窗体在页面中绝对定位，如果页面存在滚动条不随窗口内容滚动；"dock"，原生子窗体在页面中停靠，停靠的位置由dock属性值决定。 默认值为"absolute"。|
| position| String| absolute| The layout position of the native subwindow determines the positioning mode of the native subwindow in the parent window. Options include: "static", the native subwindow is positioned normally in the page, and if there is a scroll bar on the page, it will scroll with the content of the window; "absolute", the native subwindow is absolutely positioned in the page. If there is a scroll bar on the page, it will not scroll with the content of the window; "dock", the native subwindow is docked in the page, and the location of the docking is determined by the value of the dock attribute. The default value is "absolute".|
|dock|String|bottom|原生子窗体的停靠方式,仅当原生子窗体 "position" 属性值设置为 "dock" 时才生效，可取值："top"，原生子窗体停靠则页面顶部；"bottom"，原生子窗体停靠在页面底部；"right"，原生子窗体停靠在页面右侧；"left"，原生子窗体停靠在页面左侧。 默认值为"bottom"。|
| dock| String| bottom| The docking mode of the native subwindow will only take effect when the attribute value of "position" of the native subwindow is set to "dock". Options include: "top", the native subwindow will be docked at the top of the page. "bottom", the native subwindow will be docked at the bottom of the page; "right", the native subwindow will be docked on the right side of the page; "left", the native subwindow will be docked on the left side of the page. The default value is "bottom".|
|mask|HexColor|rgba(0,0,0,0.5)|原生子窗体的遮罩层,仅当原生子窗体 "type" 属性值设置为 "popup" 时才生效，可取值： rgba格式字符串，定义纯色遮罩层样式，如"rgba(0,0,0,0.5)"，表示黑色半透明；|
| mask| HexColor| rgba(0,0,0,0.5)| The mask layer of the native subwindow is valid only when the attribute value of "type" of the native subwindow is set to "popup", and the Options include: rgba format string, which defines the style of solid color mask layer, such as "rgba(0,0,0,0.5)", means black and semitransparent;|
|width|String|100%|原生子窗体的宽度,支持百分比、像素值，默认为100%。未设置width属性值时，可同时设置left和right属性值改变窗口的默认宽度。|
| width| String| 100%| The width of the native subwindow, supports percentage and pixel value, with 100% as default. When the width attribute value is not set, the left and right attribute values can be set at the same time to change the default width of the window.|
|height|String|100%|原生子窗体的高度,支持百分比、像素值，默认为100%。 当未设置height属性值时，优先通过top和bottom属性值来计算原生子窗体的高度。|
| height| String| 100%| The height of the native subwindow, supports percentage and pixel value, with 100% as default. When the height attribute value is not set, the top and bottom attribute values are used to calculate the height of the native subwindow first.|
|top|String|0px|原生子窗体垂直向下的偏移量，支持百分比、像素值，默认值为0px。 未设置top属性值时，优先通过bottom和height属性值来计算原生子窗体的top位置。|
| top| String| 0px| The vertical downward offset of the native subwindow, supporting percentage and pixel value, with 0px as default. When the top attribute value is not set, the bottom and height attribute values are used to calculate the top position of the native subwindow first.|
|bottom|String||原生子窗体垂直向上偏移量,支持百分比、像素值，默认值无值（根据top和height属性值来自动计算）。 当同时设置了top和height值时，忽略此属性值； 当未设置height值时，可通过top和bottom属性值来确定原生子窗体的高度。|
| bottom| String| | The vertical upward offset of the native subwindow supports percentage and pixel values, with null as default (calculated automatically according to the top and height attribute values). Ignore this attribute value when both top and height values are set; When the height value is not set, the height of the native subwindow can be determined by the top and bottom attribute values.|
|left|String|0px|原生子窗体水平向左的偏移量，支持百分比、像素值，默认值为0px。 未设置left属性值时，优先通过right和width属性值来计算原生子窗体的left位置。|
| left| String| 0px| The horizontal leftward offset of the native subwindow, supporting percentage and pixel value, with 0px as default. When the left attribute value is not set, the right and width attribute values are used to calculate the left position of the native subwindow first.|
|right|String||原生子窗体水平向右的偏移量，支持百分比、像素值，默认无值（根据left和width属性值来自动计算）。 当设置了left和width值时，忽略此属性值； 当未设置width值时，可通过left和bottom属性值来确定原生子窗体的宽度。|
| right| String| | The horizontal right offset of the native subwindow, supports percentage and pixel value, with null as default (calculated automatically according to the left and width attribute values). Ignore this attribute value when left and width values are set. When the width value is not set, the width of the native subwindow can be determined by the left and bottom attribute values.|
|margin|String||原生子窗体的边距，用于定位原生子窗体的位置，支持auto，auto表示居中。若设置了left、right、top、bottom则对应的边距值失效。|
| margin| String| | The margin of the native subwindow is used to locate the location of the native subwindow. auto (centered) is supported. If left, right, top and bottom values are set, the corresponding margin values will be invalid.|
|zindex|Number||原生子窗体的窗口的堆叠顺序值，拥有更高堆叠顺序的窗口总是会处于堆叠顺序较低的窗口的前面，拥有相同堆叠顺序的窗口后调用show方法则在前面。|
| zindex| Number| | The stacking order value of the windows of the native subwindow, the window with higher stacking order is always in front of the window with lower stacking order, after the windows are set with the same stacking order and the show method is applied, the windows shall be positioned in the front.|

**代码示例**
**Code example**

```javascript

subNVue.setStyle({
	"position": "absolute", //除 popup 外，其他值域参考 5+ webview position 文档
	"width": "50%",
	"height": "50%",
	"left":"20px",
	"top":"100px"
})
```


### subNVue.postMessage(OBJECT)
发送消息
Send messages

**代码示例**
**Code example**

```javascript

const subNVue = uni.getSubNVueById('subNvue');
subNvue.postMessage({
	id:'1'
	name:'subNvues'
})
```

### subNVue.onMessage(CallBack)
监听消息
Listen to messages

**代码示例**
**Code example**

```javascript

const subNVue = uni.getSubNVueById('subNvue');
subNvue.onMessage(function(data){
	console.log('监听来自所属页面的 message' + JSON.stringify(data));
})
```


### 动画类型
### Animation type
显示动画与关闭动画，会有默认的对应规则。但是如果通过 API 原生子窗体的关闭动画类型，则不会使用默认的类型。
There will be default corresponding rules for turning on/off the animation. However, if the closing animation type of the native subwindow is generated through API, the default type will not be used.

|显示动画|关闭动画|显示动画描述（关闭动画与之相反）
| Show animation| Close animation| Description of animation on (animation off on the contrary)
|:-|:-|:-|
|slide-in-right|slide-out-right|新窗体从右侧进入|
| slide-in-right| slide-out-right| The new window enters from the right|
|slide-in-left|slide-out-left|新窗体从左侧进入|
| slide-in-left| slide-out-left| The new window enters from the left|
|slide-in-top|slide-out-top|新窗体从顶部进入|
| slide-in-top| slide-out-top| The new window enters from the top|
|slide-in-bottom|slide-out-bottom|新窗体从底部进入|
| slide-in-bottom| slide-out-bottom| The new window enters from the bottom|
|fade-in|fade-out|新窗体从透明到不透明逐渐显示|
| fade-in| fade-out| The new window is gradually displayed from transparent to opaque|
|zoom-out|zoom-in|新窗体从小到大缩放显示|
| zoom-out| zoom-in| The new window is scaled from small to large.|
|zoom-fade-out|zoom-fade-in|新窗体从小到大逐渐放大并且从透明到不透明逐渐显示|
| zoom-fade-out| zoom-fade-in| The new window is gradually enlarged from small to large and gradually displayed from transparent to opaque.|
|pop-in|pop-out|新窗体从左侧进入，且老窗体被挤压而出|
| pop-in| pop-out| The new window enters from the left to squeeze out the old window|
|none|none|无动画|
| none| none| No animation|

详细的窗口动画说明，请参考：
For detailed window animation instructions, please refer to:

- 窗口显示的动画：[AnimationTypeShow](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.AnimationTypeShow)
- Window display animation: [AnimationTypeShow](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.AnimationTypeShow)
- 窗口关闭的动画：[AnimationTypeClose](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.AnimationTypeClose)
- Window closing animation: [AnimationTypeClose](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.AnimationTypeClose)

**注意事项**
**Precautions**
- 了解更多 `subNVue` 原生子窗体的用途，请详读[subNVues 原生子窗体开发指南](https://ask.dcloud.net.cn/article/35948)
- To learn more about the purpose of `subNVue` native subwindows, please read the [Development guide for subNVues native subwindow](https://ask.dcloud.net.cn/article/35948)
- 在hello uni-app的接口-界面-原生子窗体中，有完整的subNVue示例，包括带渐变色的原生导航栏、可遮盖地图的侧滑菜单、可从顶部弹出的popup、可在视频上滚动的消息列表
- In the port-interface-native child list of hello uni-app, there are complete examples of subNVue, including native navigation bar with gradient color, sideslip menu that can cover the map, popup that can pop out from the top, and message list that can scroll on the video
- 每个 `subNVue` 页面都要在 pages.json 中注册
- Each `subNVue` page must be registered in pages.json
- `subNVue` 比cover-view和plus.nativeObj.view更强大，也占用更多内存，为了保证更好的性能体验，一个vue页面不要加载太多 `subNVue` 子窗体，建议控制在三个以内
- `subNVue` is more powerful than cover-view and plus.nativeObj.view, and it also takes up more memory. In order to ensure a better performance experience, one vue page should not load too many `subNVue` sub-forms, it is recommended to control it in three within
- `getSubNVueById` 需要在页面生命周期 `onReady` 中调用
- `getSubNVueById` needs to be called in the page life cycle `onReady`