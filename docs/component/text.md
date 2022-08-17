<md-translatedByGoogle />
#### text
文本组件。
Text components.

用于包裹文本内容。
Used to wrap text content.

**属性说明**
**Attribute description**

|属性名		|类型	|默认值	|说明			|平台差异说明				|
| Attribute name| Type| Defaults| Instruction| Platform difference description|
|:-|:-			|:-		|:-		|:-				|:-						|
|selectable	|Boolean|false	|文本是否可选	|	App、H5、快手小程序	|
|selectable |Boolean|false |Whether the text is optional | App, H5, Kuaishou applet |
|user-select	|Boolean|false	|文本是否可选	| 微信小程序 |
|user-select |Boolean|false |Whether the text is optional | WeChat applet |
|space		|String	|		|显示连续空格	|App、H5、微信小程序	|
|space |String | |Display consecutive spaces |App, H5, WeChat applet |
|decode		|Boolean|false	|是否解码		|App、H5、微信小程序	|
|decode |Boolean|false |Whether to decode |App, H5, WeChat applet |

**space 值说明**
**space value description**

|值|说明|
| Value| Instruction|
|:-|:-|
|ensp|中文字符空格一半大小|
| ensp| Half the size of Chinese character spaces|
|emsp|中文字符空格大小|
| emsp| Size of Chinese character spaces|
|nbsp|根据字体设置的空格大小|
| nbsp| Space size set according to font|

**Tips**

- `<text>` 组件内只支持嵌套 `<text>`，不支持其它组件或自定义组件，否则会引发在不同平台的渲染差异。
- `<text>` only supports nested `<text>` components, and does not support other components or custom components, or otherwise rendering differences in different platforms will be caused.
- 在app-nvue下，只有`<text>`才能包裹文本内容。无法在`<view>`组件包裹文本。
- Under app-nvue, only `<text>` can wrap the text content. Unable to wrap text in the `<view>` component.
- decode 可以解析的有 `&nbsp;` `&lt;` `&gt;` `&amp;` `&apos;` `&ensp;` `&emsp;`。
- `&nbsp;` `&lt;` `&gt;` `&amp;` `&apos;` `&ensp;` `&emsp;` can be parsed by decode.
- 各个操作系统的空格标准并不一致。
- The space standard of each operating system is not consistent.
- 除了文本节点以外的其他节点都无法长按选中。
- All nodes except the text node can not be selected by long press.
- 支持 `\n` 方式换行。
- Line feed using the `\n` method is supported.
- 如果使用 `<span>` 组件编译时会被转换为 `<text>`。
- If you use the `<span>` component to compile, it will be converted to `<text>`.

**示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/text/text)
**Example** [View demo](https://hellouniapp.dcloud.net.cn/pages/component/text/text)

以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。
The following sample code comes from the [hello uni-app project](https://github.com/dcloudio/hello-uniapp). It is recommended to use HBuilderX to create a new uni-app project and choose the hello uni-app template to directly experience the complete example.

::: preview https://hellouniapp.dcloud.net.cn/pages/component/text/text
> Template
```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<!-- This example does not include the complete css, please refer to the above to obtain the external css. View it in the hello uni-app project -->
<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="text-box" scroll-y="true">
				<text>{{text}}</text>
			</view>
			<view class="uni-btn-v">
				<button type="primary" :disabled="!canAdd" @click="add">add line</button>
				<button type="warn" :disabled="!canRemove" @click="remove">remove line</button>
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
            texts: [
                'HBuilder，500万开发者选择的IDE',
                'MUI，轻巧、漂亮的前端开源框架',
                'wap2app，M站快速转换原生体验的App',
                '5+Runtime，为HTML5插上原生的翅膀',
                'HBuilderX，轻巧、极速，极客编辑器',
                'uni-app，终极跨平台方案',
                'HBuilder，500万开发者选择的IDE',
                'MUI，轻巧、漂亮的前端开源框架',
                'wap2app，M站快速转换原生体验的App',
                '5+Runtime，为HTML5插上原生的翅膀',
                'HBuilderX，轻巧、极速，极客编辑器',
                'uni-app，终极跨平台方案',
                '......'
            ],
            text: '',
            canAdd: true,
            canRemove: false,
            extraLine: []
        }
    },
    methods: {
        add: function(e) {
            this.extraLine.push(this.texts[this.extraLine.length % 12]);
            this.text = this.extraLine.join('\n');
            this.canAdd = this.extraLine.length < 12;
            this.canRemove = this.extraLine.length > 0;
        },
        remove: function(e) {
            if (this.extraLine.length > 0) {
                this.extraLine.pop();
                this.text = this.extraLine.join('\n');
                this.canAdd = this.extraLine.length < 12;
                this.canRemove = this.extraLine.length > 0;
            }
        }
    }
}
</script>
```
:::


**注意事项**
**Precautions**

- nvue 样式 `word-wrap` 在 Android 平台暂不支持
- nvue style `word-wrap` is not supported on Android platform
