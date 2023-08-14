# text组件

文本组件。用于包裹文本内容。

在app-uvue和app-nvue中，文本只能写在text中，而不能写在view的text区域。

虽然app-uvue中写在view的text区域的文字，也会被编译器自动包裹一层text组件，看起来也可以使用。但这样会造成无法修改该text文字的样式，详见uvue的[样式不继承](../uni-app-x/css/readme.md#stylenoextends)章节

## 属性说明

|属性名		|类型	|默认值	|说明			|平台差异说明				|
|:-|:-			|:-		|:-		|:-				|
|selectable	|Boolean|false	|文本是否可选	|		|
|user-select	|Boolean|false	|文本是否可选	| 微信小程序 |
|space		|String	|		|显示连续空格	|钉钉小程序不支持	|
|decode		|Boolean|false	|是否解码		|百度、钉钉小程序不支持	|

**space 值说明**

|值|说明|
|:-|:-|
|ensp|中文字符空格一半大小|
|emsp|中文字符空格大小|
|nbsp|根据字体设置的空格大小|

## 子组件

text组件在web浏览器渲染（含浏览器、小程序webview渲染模式、app-vue）和uvue中，可以并只能嵌套text组件。

在nvue中，text组件不能嵌套。

## Tips

- 支持 `\n` 方式换行。
- 在app-nvue下，只有`<text>`才能包裹文本内容。无法在`<view>`组件包裹文本。
- decode 可以解析的有 `&nbsp;` `&lt;` `&gt;` `&amp;` `&apos;` `&ensp;` `&emsp;`。
- 各个操作系统的空格标准并不一致。
- 除了文本节点以外的其他节点都无法长按选中。
- 如果使用 `<span>` 组件编译时会被转换为 `<text>`。
- nvue 样式 `word-wrap` 在 Android 平台暂不支持

## 示例

[查看演示](https://hellouniapp.dcloud.net.cn/pages/component/text/text)

以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。

::: preview https://hellouniapp.dcloud.net.cn/pages/component/text/text
> Template
```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
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
                'HBuilder，900万开发者选择的IDE',
                'MUI，轻巧、漂亮的前端开源框架',
                'wap2app，M站快速转换原生体验的App',
                '5+Runtime，为HTML5插上原生的翅膀',
                'HBuilderX，轻巧、极速，极客编辑器',
                'uni-app，终极跨平台方案',
                'HBuilder，900万开发者选择的IDE',
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
