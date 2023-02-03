#### rich-text

富文本。
rich text.

支持默认事件，包括：click、touchstart、touchmove、touchcancel、touchend、longpress。
Support default events, including: click, touchstart, touchmove, touchcancel, touchend, longpress.

**属性说明**
**Attribute Description**

|属性名|类型|默认值|说明|平台兼容|
|Property Name|Type|Default Value|Description|Platform Compatibility|
|:-|:-|:-|:-|:-|
|nodes|Array / String|[]|节点列表 / HTML String||
| nodes| Array / String|[]|node list / HTML String||
|space|string||显示连续空格|App、H5、微信基础库2.4.1+[详见](https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html)、QQ小程序、字节小程序、快手小程序[详见](https://mp.kuaishou.com/docs/develop/components/basicComponents/richText.html)|
| space| string||Display continuous spaces| App, H5, WeChat base library 2.4.1+[see details](https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html), QQ MiniApp, Byte MiniApp, Kuaishou MiniApp[see details](https://mp.kuaishou.com/docs/develop/components/basicComponents/richText.html)|
|selectable|Boolean|true|富文本是否可以长按选中，可用于复制，粘贴等场景|百度小程序（仅真机支持，基础库 3.150.1 以下版本默认为 false）|
| selectable| Boolean| true|Whether the rich text can be long-pressed and selected, which can be used for copying, pasting and other scenarios|Baidu MiniApp(only supported by real devices, the default is false for base library versions below 3.150.1)|
|image-menu-prevent|Boolean|false|阻止长按图片时弹起默认菜单（将该属性设置为image-menu-prevent或image-menu-prevent="true"），只在初始化时有效，不能动态变更；若不想阻止弹起默认菜单，则不需要设置此属性|百度小程序|
| image-menu-prevent| Boolean| false|Prevent the default menu from popping up when the image is long pressed (set this property to image-menu-prevent or image-menu-prevent="true"), only valid during initialization, not Dynamic change; if you don't want to prevent the default menu from popping up, you don't need to set this attribute|Baidu MiniApp|
|preview|Boolean||富文本中的图片是否可点击预览。在不设置的情况下，若 rich-text 未监听点击事件，则默认开启。未显示设置 preview 时会进行点击默认预览判断，建议显示设置 preview|百度小程序|
| preview| Boolean||whether the image in the rich text can be clicked to preview. If not set, if rich-text does not listen to click events, it will be enabled by default. When the setting preview is not displayed, it will be judged by clicking the default preview. It is recommended to display the setting preview|Baidu MiniApp|
|@itemclick|EventHandle||拦截点击事件（只支持 `a`、`img`标签），返回当前node信息 `event.detail={node}`|H5 (3.2.13+)、App-Vue (3.2.13+)|
|@itemclick| EventHandle||Intercept click events (only `a`, `img` tags are supported), return the current node information `event.detail={node}`| H5 (3.2.13+), App-Vue (3.2 .13+)|

##### nodes

nodes 值为 HTML String 时，在组件内部将自动解析为节点列表，推荐直接使用 Array 类型避免内部转换导致的性能下降。App-nvue 和支付宝小程序不支持 HTML String 方式，仅支持直接使用节点列表即 Array 类型，如要使用 HTML String，则需自己将 HTML String 转化为 nodes 数组，可使用 [html-parser](https://github.com/dcloudio/hello-uniapp/blob/master/common/html-parser.js) 转换。
When the value of nodes is an HTML String, it will be automatically parsed into a node list inside the component. It is recommended to use the Array type directly to avoid performance degradation caused by internal conversion. App-nvue and Alipay MiniApp do not support the HTML String method, and only support the direct use of the node list, that is, the Array type. If you want to use the HTML String, you need to convert the HTML String into an array of nodes by yourself. You can use [html-parser](https://github.com/dcloudio/hello-uniapp/blob/master/common/html-parser.js) conversion.

节点列表内的节点现支持两种类型，通过 type 来区分，分别是元素节点和文本节点，默认是元素节点，在富文本区域里显示的 HTML 节点。
The nodes in the node list now support two types, which are distinguished by type, which are element nodes and text nodes. The default is element nodes, which are HTML nodes displayed in the rich text area.

**元素节点：type = node**
**element node: type = node**

|属性|说明|类型|必填|备注|
|Attribute|Description|Type|Required|Remarks|
|:-|:-|:-|:-|:-|
|name|标签名|String|是|支持部分受信任的 HTML 节点|
| name|tag name| String|Yes|Supports partially trusted HTML nodes|
|attrs|属性|Object|否|支持部分受信任的属性，遵循 Pascal 命名法|
| attrs|Attributes| Object|No|Supports partially trusted attributes, follows Pascal nomenclature|
|children|子节点列表|Array|否|结构和 nodes 一致|
| children|list of child nodes| Array|no|consistent structure with nodes|

**文本节点：type = text**
**Text node: type = text**

|属性|说明|类型|必填|备注|
|Attribute|Description|Type|Required|Remarks|
|:-|:-|:-|:-|:-|
|text|文本|String|是|支持 entities|
| text|text| String|Yes|support entities|
 
##### 受信任的HTML节点及属性
##### Trusted HTML nodes and attributes

全局支持 class 和 style 属性，**不支持 id 属性**。
The class and style attributes are supported globally, and the id attribute is not supported**.

|节点|属性|
|node|attribute|
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
**Example** [View Demo](https://hellouniapp.dcloud.net.cn/pages/component/rich-text/rich-text)

以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。
The following sample code comes from [hello uni-app project](https://github.com/dcloudio/hello-uniapp). It is recommended to use HBuilderX to create a new uni-app project and select the hello uni-app template to directly experience the complete example.

::: preview https://hellouniapp.dcloud.net.cn/pages/component/rich-text/rich-text
> Template
```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<!-- This example does not contain the complete css, please refer to the above to get the external link css, check it in the hello uni-app project -->
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
            strings: '<div style="text-align:center;"><img src="https://web-assets.dcloud.net.cn/unidoc/zh/uni@2x.png"/></div>'
        }
    }
}
</script>
```
:::


**Tips**

- nodes 不推荐使用 String 类型，性能会有所下降。
- Nodes do not recommend using the String type, and the performance will decrease.
- rich-text 组件内屏蔽所有节点的事件。所以如果内容中有链接、图片需要点击，则不能使用rich-text，此时可在[uni-app插件市场](https://ext.dcloud.net.cn/search?q=parse)搜索parse插件使用。app-vue的rich-text组件支持链接图片点击。
- Block all node events in the rich-text component. So if there are links and pictures in the content that need to be clicked, rich-text cannot be used. In this case, you can search for parse in [uni-app plug-in market](https://ext.dcloud.net.cn/search?q=parse) Plugin usage. The rich-text component of app-vue supports link image clicks.
- attrs 属性不支持 id ，支持 class 。
- The attrs attribute does not support id but supports class .
- name 属性大小写不敏感。
- The name attribute is not case sensitive.
- 如果使用了不受信任的HTML节点，该节点及其所有子节点将会被移除。
- If an untrusted HTML node is used, that node and all its children will be removed.
- 非 App 平台 img 标签仅支持网络图片。
- Non-app platform img tags only support network images.
- 如果在自定义组件中使用 rich-text 组件，那么仅自定义组件的 css 样式对 rich-text 中的 class 生效。
- If the rich-text component is used in a custom component, only the css style of the custom component will take effect for the class in rich-text.
- 使用 `itemclick` 时，如果发生节点嵌套，外层 `a标签` 优先级高。
- When using `itemclick`, if node nesting occurs, the outer `a tag` has higher priority.