#### rich-text

富文本。

支持默认事件，包括：click、touchstart、touchmove、touchcancel、touchend、longpress。

**属性说明**

|属性名|类型|默认值|说明|平台兼容|
|:-|:-|:-|:-|:-|
|nodes|Array / String|[]|节点列表 / HTML String||
|space|string||显示连续空格|App、H5、微信基础库2.4.1+[详见](https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html)、QQ小程序、字节小程序、快手小程序[详见](https://mp.kuaishou.com/docs/develop/components/basicComponents/richText.html)|
|selectable|Boolean|true|富文本是否可以长按选中，可用于复制，粘贴等场景|百度小程序（仅真机支持，基础库 3.150.1 以下版本默认为 false）|
|image-menu-prevent|Boolean|false|阻止长按图片时弹起默认菜单（将该属性设置为image-menu-prevent或image-menu-prevent="true"），只在初始化时有效，不能动态变更；若不想阻止弹起默认菜单，则不需要设置此属性|百度小程序|
|preview|Boolean||富文本中的图片是否可点击预览。在不设置的情况下，若 rich-text 未监听点击事件，则默认开启。未显示设置 preview 时会进行点击默认预览判断，建议显示设置 preview|百度小程序|
|@itemclick|EventHandle||拦截点击事件（只支持 `a`、`img`标签），返回当前node信息 `event.detail={node}`|H5 (3.2.13+)、App-Vue (3.2.13+)|

##### nodes

nodes 值为 HTML String 时，在组件内部将自动解析为节点列表，推荐直接使用 Array 类型避免内部转换导致的性能下降。App-nvue 和支付宝小程序不支持 HTML String 方式，仅支持直接使用节点列表即 Array 类型，如要使用 HTML String，则需自己将 HTML String 转化为 nodes 数组，可使用 [html-parser](https://github.com/dcloudio/hello-uniapp/blob/master/common/html-parser.js) 转换。

节点列表内的节点现支持两种类型，通过 type 来区分，分别是元素节点和文本节点，默认是元素节点，在富文本区域里显示的 HTML 节点。

**元素节点：type = node**

|属性|说明|类型|必填|备注|
|:-|:-|:-|:-|:-|
|name|标签名|String|是|支持部分受信任的 HTML 节点|
|attrs|属性|Object|否|支持部分受信任的属性，遵循 Pascal 命名法|
|children|子节点列表|Array|否|结构和 nodes 一致|

**文本节点：type = text**

|属性|说明|类型|必填|备注|
|:-|:-|:-|:-|:-|
|text|文本|String|是|支持 entities|
 
##### 受信任的HTML节点及属性

全局支持 class 和 style 属性，**不支持 id 属性**。

|节点|属性|
|:-|:-|
|a||
|abbr||
|b||
|blockquote||
|br||
|code||
|col|span，width|
|colgroup|span，width|
|dd||
|del||
|div||
|dl||
|dt||
|em||
|fieldset||
|h1||
|h2||
|h3||
|h4||
|h5||
|h6||
|hr||
|i||
|img|alt，src，height，width|
|ins||
|label||
|legend||
|li||
|ol|start，type|
|p||
|q||
|span||
|strong||
|sub||
|sup||
|table|width|
|tbody||
|td|colspan，height，rowspan，width|
|tfoot||
|th|colspan，height，rowspan，width|
|thead||
|tr||
|ul|&nbsp;|

**示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/rich-text/rich-text)

以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。

::: preview https://hellouniapp.dcloud.net.cn/pages/component/rich-text/rich-text
> Template
```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view class="content">
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<view class="uni-title uni-common-mt">
				数组类型
				<text>\nnodes属性为Array</text>
			</view>
			<view class="uni-common-mt" style="background:#FFF; padding:20rpx;">
				<rich-text :nodes="nodes"></rich-text>
			</view>
			<view class="uni-title uni-common-mt">
				字符串类型
				<text>\nnodes属性为String</text>
			</view>
			<view class="uni-common-mt" style="background:#FFF; padding:20rpx;">
				<rich-text :nodes="strings"></rich-text>
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
            nodes: [{
                name: 'div',
                attrs: {
                    class: 'div-class',
                    style: 'line-height: 60px; color: red; text-align:center;'
                },
                children: [{
                    type: 'text',
                    text: 'Hello&nbsp;uni-app!'
                }]
            }],
            strings: '<div style="text-align:center;"><img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni@2x.png"/></div>'
        }
    }
}
</script>
```
:::


**Tips**

- nodes 不推荐使用 String 类型，性能会有所下降。
- rich-text 组件内屏蔽所有节点的事件。所以如果内容中有链接、图片需要点击，则不能使用rich-text，此时可在[uni-app插件市场](https://ext.dcloud.net.cn/search?q=parse)搜索parse插件使用。app-vue的rich-text组件支持链接图片点击。
- attrs 属性不支持 id ，支持 class 。
- name 属性大小写不敏感。
- 如果使用了不受信任的HTML节点，该节点及其所有子节点将会被移除。
- 非 App 平台 img 标签仅支持网络图片。
- 如果在自定义组件中使用 rich-text 组件，那么仅自定义组件的 css 样式对 rich-text 中的 class 生效。
- 使用 `itemclick` 时，如果发生节点嵌套，外层 `a标签` 优先级高。