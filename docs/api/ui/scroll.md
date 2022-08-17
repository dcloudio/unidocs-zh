### uni.pageScrollTo(OBJECT)

将页面滚动到目标位置。
Scroll the page to the target location.



**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|华为快应用|360小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Huawei Quick App|360 applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√(nvue不支持)|√|√|√|√|√|√|√|√|
|√(nvue does not support)|√|√|√|√|√|√|√|√|





**OBJECT参数说明**
**OBJECT parameter description**

|参数名		|类型			|必填	|说明																							|
| Parameter name| Type| Required| Instruction|
|:-				|:-				|:-		|:-																								|
|scrollTop|Number		|否		|滚动到页面的目标位置（单位px）										|
| scrollTop| Number| No| Scroll to the target location on the page (in px)|
|selector	|String		|否		|选择器，App、H5、微信小程序2.7.3+ 、支付宝小程序1.20.0+支持		|
|selector |String |No |Selector, App, H5, WeChat applet 2.7.3+, Alipay applet 1.20.0+ support |
|duration	|Number		|否		|滚动动画的时长，默认300ms，单位 ms								|
| duration| Number| No| The duration of scrolling animation with the default of 300ms, in ms|
|success	|function	|否		|接口调用成功的回调函数														|
| success| function| No| Callback function for successful interface calling|
|fail			|function	|否		|接口调用失败的回调函数														|
| fail| function| No| Callback function for failed interface calling|
|complete	|function	|否		|接口调用结束的回调函数（调用成功、失败都会执行）	|
| complete| function| No| Callback function for closed interface calling (available both for successful and failed calling)|

**selector 语法**
**selector syntax**
selector类似于 CSS 的选择器，但仅支持下列语法。
selector is similar to a CSS selector, but only the following syntax is supported.

- ID选择器：#the-id
- ID selector: #the-id
- class选择器（可以连续指定多个）：`.a-class.another-class`
- class selector (you can specify more than one in a row): `.a-class.another-class`
- 子元素选择器：`.the-parent > .the-child`
- Child element selector: `.the-parent > .the-child`
- 后代选择器：`.the-ancestor .the-descendant`
- Descendant selector: `.the-ancestor .the-descendant`
- 跨自定义组件的后代选择器：`.the-ancestor >>> .the-descendant`
- Descendant selectors across custom components: `.the-ancestor >>> .the-descendant`
- 多选择器的并集：`#a-node, .some-other-nodes`
- Union of multiple selectors: `#a-node, .some-other-nodes`

**示例**
**Example**

```javascript
uni.pageScrollTo({
	scrollTop: 0,
	duration: 300
});
```

