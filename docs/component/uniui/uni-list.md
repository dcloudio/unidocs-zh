::: tip 组件名：uni-list
::: tip component name: uni-list
> 代码块： `uList`、`uListItem`
> Code blocks: `uList`, `uListItem`
> 关联组件：`uni-list-item`、`uni-badge`、`uni-icons`、`uni-list-chat`
> Associated components: `uni-list-item`, `uni-badge`, `uni-icons`, `uni-list-chat`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-list)
[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-list)
::: 

List 列表组件，包含基本列表样式、可扩展插槽机制、长列表性能优化、多端兼容。
List list component, including basic list style, expandable slot mechanism, long list performance optimization, multi-terminal compatibility.

在vue页面里，它默认使用页面级滚动。在app-nvue页面里，它默认使用原生list组件滚动。这样的长列表，在滚动出屏幕外后，系统会回收不可见区域的渲染内存资源，不会造成滚动越长手机越卡的问题。
In vue pages, it uses page-level scrolling by default. In app-nvue pages, it defaults to scrolling using the native list component. For such a long list, after scrolling out of the screen, the system will recycle the rendering memory resources in the invisible area, which will not cause the problem that the longer the scrolling, the more stuck the phone becomes.

uni-list组件是父容器，里面的核心是uni-list-item子组件，它代表列表中的一个可重复行，子组件可以无限循环。
The uni-list component is the parent container, and the core inside is the uni-list-item sub-component, which represents a repeatable line in the list, and the sub-component can loop infinitely.

uni-list-item有很多风格，uni-list-item组件通过内置的属性，满足一些常用的场景。当内置属性不满足需求时，可以通过扩展插槽来自定义列表内容。
There are many styles of uni-list-item. The uni-list-item component meets some common scenarios through built-in properties. When the built-in properties do not meet your needs, you can customize the list content by extending the slot.

内置属性可以覆盖的场景包括：导航列表、设置列表、小图标列表、通信录列表、聊天记录列表。
Scenarios that can be covered by built-in properties include: navigation list, settings list, small icon list, address book list, and chat history list.

涉及很多大图或丰富内容的列表，比如类今日头条的新闻列表、类淘宝的电商列表，需要通过扩展插槽实现。
Lists involving many large images or rich content, such as news lists like Toutiao and e-commerce lists like Taobao, need to be implemented through expansion slots.

下文均有样例给出。
Examples are given below.

uni-list不包含下拉刷新和上拉翻页。上拉翻页另见组件：[uni-load-more](https://ext.dcloud.net.cn/plugin?id=29)
uni-list does not include pull-to-refresh and pull-up page-turning. Pull up and turn pages. See also components: [uni-load-more](https://ext.dcloud.net.cn/plugin?id=29)


## 介绍
## introduce
::: warning 注意事项
::: warning Notes
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
> In order to avoid wrong use and bring you a bad development experience, please read the following precautions carefully before using the component, which can help you avoid some mistakes.
- 组件需要依赖 `sass` 插件 ，请自行手动安装
- The component needs to depend on the `sass` plugin, please install it manually
- 组件内部依赖 `'uni-icons'` 、`uni-badge` 组件
- Component internal dependencies `'uni-icons'` , `uni-badge` components
- `uni-list` 和 `uni-list-item` 需要配套使用，暂不支持单独使用 `uni-list-item`
- `uni-list` and `uni-list-item` need to be used together, and `uni-list-item` alone is not currently supported
- 只有开启点击反馈后，会有点击选中效果
- Only when click feedback is turned on, there will be a click selection effect
- 使用插槽时，可以完全自定义内容
- Fully customizable content when using slots
- note 、rightText 属性暂时没做限制，不支持文字溢出隐藏，使用时应该控制长度显示或通过默认插槽自行扩展
- The note and rightText attributes are not limited for the time being. They do not support text overflow and hiding. When using, they should control the length display or expand by themselves through the default slot.
- 支付宝小程序平台需要在支付宝小程序开发者工具里开启 component2 编译模式，开启方式： 详情 --> 项目配置 --> 启用 component2 编译
- The Alipay applet platform needs to enable the component2 compilation mode in the Alipay applet developer tool. The way to enable it: Details --> Project Configuration --> Enable component2 compilation
- 如果需要修改 `switch`、`badge` 样式，请使用插槽自定义
- If you need to modify `switch`, `badge` style, please use slot customization
- 在 `HBuilderX` 低版本中，可能会出现组件显示 `undefined` 的问题，请升级最新的 `HBuilderX` 或者 `cli`
- In the lower version of `HBuilderX`, there may be a problem that the component displays `undefined`, please upgrade the latest `HBuilderX` or `cli`
:::

### 基本用法 
### Basic usage

- 设置 `title` 属性，可以显示列表标题
- Set the `title` property to display the title of the list
- 设置 `disabled` 属性，可以禁用当前项
- Set the `disabled` property to disable the current item

```html
<uni-list>
	<uni-list-item  title="列表文字" ></uni-list-item>
	<uni-list-item :disabled="true" title="列表禁用状态" ></uni-list-item>
</uni-list>
			 
```

### 多行内容显示
### Multi-line content display

- 设置 `note` 属性 ，可以在第二行显示描述文本信息
- Set the `note` property to display descriptive text information on the second line

```html
<uni-list>
	<uni-list-item title="列表文字" note="列表描述信息"></uni-list-item>
	<uni-list-item :disabled="true" title="列表文字" note="列表禁用状态"></uni-list-item>
</uni-list>

```

### 右侧显示角标、switch
### The right side shows the corner mark, switch

- 设置 `show-badge` 属性 ，可以显示角标内容
- Set the `show-badge` property to display the content of the badge
- 设置 `show-switch` 属性，可以显示 switch 开关
- Set the `show-switch` property to display the switch switch

```html
<uni-list>
	<uni-list-item  title="列表右侧显示角标" :show-badge="true" badge-text="12" ></uni-list-item>
	<uni-list-item title="列表右侧显示 switch"  :show-switch="true"  @switchChange="switchChange" ></uni-list-item>
</uni-list>

```

### 左侧显示略缩图、图标  
### Thumbnails and icons are displayed on the left

- 设置 `thumb` 属性 ，可以在列表左侧显示略缩图
- Set the `thumb` property to display thumbnails on the left side of the list
- 设置 `show-extra-icon` 属性，并指定 `extra-icon` 可以在左侧显示图标
- Set the `show-extra-icon` property and specify `extra-icon` to display the icon on the left

```html
 <uni-list>
 	<uni-list-item title="列表左侧带略缩图" note="列表描述信息" thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
 	 thumb-size="lg" rightText="右侧文字"></uni-list-item>
 	<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon1" title="列表左侧带扩展图标" ></uni-list-item>
</uni-list>
```

### 开启点击反馈和右侧箭头
### Enable click feedback and right arrow
- 设置 `clickable` 为 `true` ，则表示这是一个可点击的列表，会默认给一个点击效果，并可以监听 `click` 事件
- Set `clickable` to `true` , it means that this is a clickable list, it will give a click effect by default, and can listen to the `click` event
- 设置 `link` 属性，会自动开启点击反馈，并给列表右侧添加一个箭头
- Setting the `link` property will automatically enable click feedback and add an arrow to the right side of the list
- 设置 `to` 属性，可以跳转页面，`link` 的值表示跳转方式，如果不指定，默认为 `navigateTo`
- Set the `to` attribute, you can jump to the page, the value of `link` indicates the jump method, if not specified, the default is `navigateTo`

```html

<uni-list>
	<uni-list-item title="开启点击反馈" clickable  @click="onClick" ></uni-list-item>
	<uni-list-item title="默认 navigateTo 方式跳转页面" link to="/pages/vue/index/index" @click="onClick($event,1)" ></uni-list-item>
	<uni-list-item title="reLaunch 方式跳转页面" link="reLaunch" to="/pages/vue/index/index" @click="onClick($event,1)" ></uni-list-item>
</uni-list>

```


### 聊天列表示例
### Chat list example
- 设置 `clickable` 为 `true` ，则表示这是一个可点击的列表，会默认给一个点击效果，并可以监听 `click` 事件
- Set `clickable` to `true` , it means that this is a clickable list, it will give a click effect by default, and can listen to the `click` event
- 设置 `link` 属性，会自动开启点击反馈，`link` 的值表示跳转方式，如果不指定，默认为 `navigateTo`
- Setting the `link` property will automatically enable click feedback. The value of `link` indicates the jump method. If not specified, the default is `navigateTo`
- 设置 `to` 属性，可以跳转页面
- Set the `to` attribute to jump to the page
- `time` 属性，通常会设置成时间显示，但是这个属性不仅仅可以设置时间，你可以传入任何文本，注意文本长度可能会影响显示
- `time` attribute, usually set to display time, but this attribute can not only set the time, you can pass in any text, note that the length of the text may affect the display
- `avatar` 和 `avatarList` 属性同时只会有一个生效，同时设置的话，`avatarList` 属性的长度大于1 ，`avatar` 属性将失效
- Only one of the `avatar` and `avatarList` attributes is valid at the same time. If they are set at the same time, the length of the `avatarList` attribute is greater than 1, and the `avatar` attribute will be invalid.
- 可以通过默认插槽自定义列表右侧内容
- The content on the right side of the list can be customized through the default slot

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/list/chat
 
> Template
```html

<uni-list>
	<uni-list :border="true">
		<!-- 显示圆形头像 -->
		<uni-list-chat :avatar-circle="true" title="uni-app" avatar="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png" note="您收到一条新的消息" time="2020-02-02 20:20" ></uni-list-chat>
		<!-- 右侧带角标 -->
		<uni-list-chat title="uni-app" avatar="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png" note="您收到一条新的消息" time="2020-02-02 20:20" badge-text="12"></uni-list-chat>
		<!-- 头像显示圆点 -->
		<uni-list-chat title="uni-app" avatar="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png" note="您收到一条新的消息" time="2020-02-02 20:20" badge-positon="left" badge-text="dot"></uni-list-chat>
		<!-- 头像显示角标 -->
		<uni-list-chat title="uni-app" avatar="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png" note="您收到一条新的消息" time="2020-02-02 20:20" badge-positon="left" badge-text="99"></uni-list-chat>
		<!-- 显示多头像 -->
		<!-- Show multiple avatars -->
		<uni-list-chat title="uni-app" :avatar-list="avatarList" note="您收到一条新的消息" time="2020-02-02 20:20" badge-positon="left" badge-text="dot"></uni-list-chat>
		<!-- 自定义右侧内容 -->
		<!-- Customize the right content -->
		<uni-list-chat title="uni-app" :avatar-list="avatarList" note="您收到一条新的消息" time="2020-02-02 20:20" badge-positon="left" badge-text="dot">
			<view class="chat-custom-right">
				<text class="chat-custom-text">刚刚</text>
				<!-- 需要使用 uni-icons 请自行引入 -->
				<!-- If you need to use uni-icons, please import it yourself -->
				<uni-icons type="star-filled" color="#999" size="18"></uni-icons>
			</view>
		</uni-list-chat>
	</uni-list>
</uni-list>

```
> Script
```javascript

export default {
	components: {},
	data() {
		return {
			avatarList: [{
				url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png'
			}, {
				url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png'
			}, {
				url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png'
			}]
		}
	}
}

```

> Style
```css

.chat-custom-right {
	flex: 1;
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-end;
}

.chat-custom-text {
	font-size: 12px;
	color: #999;
}

```

:::
## API

### List Props

|属性名|类型|默认值|说明|	
|property name|type|default value|description|
|:-:|:-:|:-:|:-:	|
|border|Boolean|true|是否显示边框|
|border|Boolean|true|whether to show border|

### ListItem Props

|属性名|类型|默认值|说明|
|property name|type|default value|description|
|:-:|:-:|:-:|:-:|	
|title|String|-|标题|
|title|String|-|title|
|note|String|-|	描述|
|note|String|-| Description|
|ellipsis|Number|0|	title 是否溢出隐藏，可选值，0:默认;  1:显示一行;	2:显示两行;|
|ellipsYes|Number|0| Title is overflow hidden, optional value, 0: default; 1: display one line; 2: display two lines;|
|thumb|String|-|左侧缩略图，若thumb有值，则不会显示扩展图标|
|thumb|String|-|The thumbnail on the left, if the thumb has a value, the extension icon will not be displayed|
|thumbSize|String|medium|略缩图尺寸，可选值，lg:大图;  medium:一般;	sm:小图;|
|thumbSize|String|medium|Thumbnail size, optional value, lg: large image; medium: normal; sm: small image;|
|showBadge|Boolean|false|是否显示数字角标	|
|showBadge|Boolean|false|Whether to show the digital badge |
|badgeText|String|-|数字角标内容|
|badgeText|String|-|Number badge content|
|badgeType|String|-|数字角标类型，参考[uni-icons](https://ext.dcloud.net.cn/plugin?id=21)	|
|badgeType|String|-|Digital badge type, refer to [uni-icons](https://ext.dcloud.net.cn/plugin?id=21) |
|badgeStyle  |Object   |-      | 数字角标样式，使用uni-badge的custom-style参数|
|badgeStyle |Object |- | Number badge style, use the custom-style parameter of uni-badge|
|rightText|String|-|右侧文字内容|
|rightText|String|-|right text content|
|disabled|Boolean|false|是否禁用	|
|disabled|Boolean|false|Disabled|
|showArrow|Boolean|true|是否显示箭头图标	|		
|showArrow|Boolean|true|Show arrow icon |
|link|String|navigateTo	|新页面跳转方式，可选值见下表|
|link|String|navigateTo |New page jump method, see the following table for optional values|
|to|String|-|新页面跳转地址，如填写此属性，click 会返回页面是否跳转成功|
|to|String|-|New page jump address, if you fill in this attribute, click will return whether the page jump is successful|
|clickable|Boolean	|false|	是否开启点击反馈|
|clickable|Boolean |false| Whether to enable clickable feedback|
|showSwitch|Boolean	|false|	是否显示Switch|
|showSwitch|Boolean |false| Whether to show Switch|
|switchChecked|Boolean|false|Switch是否被选中|
|switchChecked|Boolean|false|Whether the Switch is checked|
|showExtraIcon|Boolean|false|左侧是否显示扩展图标|
|showExtraIcon|Boolean|false|Whether to show the extension icon on the left|
|extraIcon|Object|-|扩展图标参数，格式为 ``{color: '#4cd964',size: '22',type: 'spinner'}``，参考 [uni-icons](https://ext.dcloud.net.cn/plugin?id=28)|	
|extraIcon|Object|-|Extended icon parameter, the format is ``{color: '#4cd964',size: '22',type: 'spinner'}``, refer to [uni-icons](https://ext .dcloud.net.cn/plugin?id=28)|
|direction| String|row|	排版方向，可选值，row:水平排列;  column:垂直排列; 3个插槽是水平排还是垂直排，也受此属性控制|
|direction| String|row| Typesetting direction, optional value, row: horizontal arrangement; column: vertical arrangement; 3 slots are horizontal or vertical, also controlled by this property|


#### Link Options

属性名|说明
attribute name|description
:-:|:-:
navigateTo|同 uni.navigateTo()
navigateTo|same as uni.navigateTo()
redirectTo|同 uni.reLaunch()
redirectTo|same as uni.reLaunch()
reLaunch|同 uni.reLaunch()
reLaunch|same as uni.reLaunch()
switchTab|同 uni.switchTab()
switchTab|same as uni.switchTab()

### ListItem Events

|事件称名|说明|返回参数|			
|Event name|Description|Return parameter|
|:-:|:-:|:-:	|			
|click|点击 uniListItem 触发事件，需开启点击反馈	|-	|				
|click|Click on uniListItem to trigger an event, you need to enable click feedback |- |
|switchChange|点击切换 Switch 时触发，需显示 switch|e={value:checked}	|
|switchChange|Triggered when the switch is clicked, switch|e={value:checked} |



### ListItem Slots

|名称	 	|	说明	|				
|Name | Description |
|:-:		|	:-:						|
|header	|	左/上内容插槽，可完全自定义默认显示|
|header | Left/Top content slot, fully customizable default display|
|body	|	中间内容插槽，可完全自定义中间内容|				
|body | Middle content slot, fully customizable middle content|
|footer	|	右/下内容插槽，可完全自定义右侧内容	|	
|footer | Right/bottom content slot, fully customizable right content |


> **通过插槽扩展**
> **Extended by slot**
> 需要注意的是当使用插槽时，内置样式将会失效，只保留排版样式，此时的样式需要开发者自己实现
> It should be noted that when the slot is used, the built-in style will be invalid, and only the typesetting style will be retained. The style at this time needs to be implemented by the developer
> 如果	`uni-list-item` 组件内置属性样式无法满足需求，可以使用插槽来自定义uni-list-item里的内容。
> If the built-in property styles of the `uni-list-item` component cannot meet your needs, you can use slots to customize the content in uni-list-item.
> uni-list-item提供了3个可扩展的插槽：`header`、`body`、`footer`
> uni-list-item provides 3 expandable slots: `header`, `body`, `footer`
> - 当 `direction` 属性为 `row` 时表示水平排列，此时 `header` 表示列表的左边部分，`body` 表示列表的中间部分，`footer` 表示列表的右边部分
> - When the `direction` property is `row`, it means horizontal arrangement, in this case `header` means the left part of the list, `body` means the middle part of the list, `footer` means the right part of the list
> - 当 `direction` 属性为 `column` 时表示垂直排列，此时 `header` 表示列表的上边部分，`body` 表示列表的中间部分，`footer` 表示列表的下边部分
> - When the `direction` property is `column`, it means vertical arrangement, in this case `header` means the top part of the list, `body` means the middle part of the list, `footer` means the bottom part of the list
> 开发者可以只用1个插槽，也可以3个一起使用。在插槽中可自主编写view标签，实现自己所需的效果。
> Developers can use only 1 slot or 3 together. In the slot, you can independently write the view label to achieve your desired effect.

	
**示例**
**Example**

```html
<uni-list>
	<uni-list-item title="自定义右侧插槽" note="列表描述信息" link>
		<template v-slot:header>
			<image class="slot-image" src="/static/logo.png" mode="widthFix"></image>
		</template>
	</uni-list-item>
	<uni-list-item>
		<!-- 自定义 header -->
		<!-- custom header -->
		<template v-slot:header>
			<view class="slot-box"><image class="slot-image" src="/static/logo.png" mode="widthFix"></image></view>
		</template>
		<!-- 自定义 body -->
		<!-- custom body -->
		<template v-slot:body>
			<text class="slot-box slot-text">自定义插槽</text>
		</template>
		<!-- 自定义 footer-->
		<!-- custom footer-->
		<template v-slot:footer>
			<image class="slot-image" src="/static/logo.png" mode="widthFix"></image>
		</template>
	</uni-list-item>
</uni-list>
```





### ListItemChat Props

|属性名|类型|默认值|说明|
|property name|type|default value|description|
|:-:|:-:|:-:|:-:	|
|title|String|-|	标题|
|title|String|-| title|
|note|String|-|描述|
|note|String|-|Description|
|clickable|Boolean|false|	是否开启点击反馈|
|clickable|Boolean|false| Whether to enable clickable feedback|
|badgeText|String|-|	数字角标内容，设置为 `dot` 将显示圆点|
|badgeText|String|-| Number badge content, set to `dot` will display dots|
|badgePositon|String|right|	角标位置|
|badgePositon|String|right| Badge Position|
|link|String|navigateTo|	是否展示右侧箭头并开启点击反馈，可选值见下表|
| link| String| navigateTo| whether to display the right arrow and enable click feedback, the optional values are shown in the table below|
|to|String|-|跳转页面地址，如填写此属性，click 会返回页面是否跳转成功	|
|to|String|-|Jump page address, if fill in this attribute, click will return whether the page jump is successful |
|time|String|-|	右侧时间显示|
|time|String|-| Time display on the right|
|avatarCircle|Boolean|false|	是否显示圆形头像|
|avatarCircle|Boolean|false| Whether to show circular avatar|
|avatar|String|-|头像地址，avatarCircle 不填时生效|
|avatar|String|-|avatar address, valid if avatarCircle is not filled in|
|avatarList|Array|-|	头像组，格式为 [{url:''}]|
|avatarList|Array|-| Avatar group, the format is [{url:''}]|

#### Link Options

|属性名		|	说明|
|property name | description|
|:-:			|	:-:|
|navigateTo 	| 	同 uni.navigateTo()|
|navigateTo |Same as uni.navigateTo()|
|redirectTo 	|	同 uni.reLaunch()|
|redirectTo | Same as uni.reLaunch()|
|reLaunch	|	同 uni.reLaunch()|
|reLaunch | Same as uni.reLaunch()|
|switchTab  	|	同 uni.switchTab()|
|switchTab  	|	 uni.switchTab()|

### ListItemChat Slots

|名称	 	|	说明		|			
|Name | Description |
|:-		|	:-	|					
|default	|	自定义列表右侧内容（包括时间和角标显示）|
|default | Customize the content on the right side of the list (including time and corner mark display)|

### ListItemChat Events
|事件称名|说明|返回参数|		
|Event name|Description|Return parameter|
|:-:|:-:|:-:	|
|@click|点击 uniListChat 触发事件	|	{data:{}}	，如有 to 属性，会返回页面跳转信息	|
|@click|Click on uniListChat to trigger an event | {data:{}} , if there is a to attribute, it will return the page jump information |



## 示例
## example
::: warning 注意
::: warning attention
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。
The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-list) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/list/list
> Template
``` html
<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">列表组件可以在其中使用图标、略缩图或放置任何你想放的元素，使用场景如：导航菜单、列表、设置中心排版等</text>
		</uni-card>
		<uni-section title="基础用法" type="line">
			<uni-list>
				<uni-list-item title="列表文字" />
				<uni-list-item title="列表文字" rightText="右侧文字" />
				<uni-list-item title="列表文字" note="列表描述信息" rightText="右侧文字" />
			</uni-list>
		</uni-section>
		<uni-section title="禁用列表" type="line">
			<uni-list>
				<uni-list-item :disabled="true" title="列表禁用状态" rightText="右侧文字" />
				<uni-list-item :disabled="true" title="列表禁用状态" rightText="右侧文字" />
			</uni-list>
		</uni-section>
		<uni-section title="显示右侧箭头" type="line">
			<uni-list>
				<uni-list-item showArrow title="列表文字" />
				<uni-list-item showArrow title="列表文字" rightText="右侧文字" />
			</uni-list>
		</uni-section>
		<uni-section title="开启点击反馈" type="line">
			<uni-list>
				<uni-list-item title="弹窗提示" clickable @click="onClick" />
				<uni-list-item title="页面跳转" :to="`./chat`" @click="onClick" />
				<uni-list-item title="关闭当前页面打开新页面" showArrow link="redirectTo" to="./chat" @click="onClick" />
				<uni-list-item title="打开错误页面(查看控制台)" showArrow link="redirectTo" to="./chats" @click="onClick" />
			</uni-list>
		</uni-section>

		<uni-section title="不显示分隔线" type="line">
			<uni-list :border="false">
				<uni-list-item title="列表文字" />
				<uni-list-item :border="false" title="列表文字" note="列表描述信息" rightText="右侧文字" />
				<uni-list-item :border="false" title="列表文字" note="列表描述信息" rightText="右侧文字" />
			</uni-list>
		</uni-section>

		<uni-section title="分隔线通栏" type="line">
			<uni-list border-full>
				<uni-list-item title="列表文字" />
				<uni-list-item title="列表文字" note="列表描述信息" rightText="右侧文字" />
				<uni-list-item title="列表文字" note="列表描述信息" rightText="右侧文字" />
			</uni-list>
		</uni-section>

		<uni-section title="文字溢出隐藏" type="line">
			<uni-list>
				<uni-list-item ellipsis="1" title="超长文字显示一行,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字" />
				<uni-list-item ellipsis="2" title="超长文字显示二行,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字"
					rightText="二行显示" />
				<uni-list-item ellipsis="1" title="全部显示,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字"
					note="列表描述信息,下是测试文字,下是测试文字,下是测试文字,下是测试文字,下是测试文字,下是测试文字,下是测试文字" showArrow rightText="一行显示" />
				<uni-list-item title="全部显示,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字" showArrow rightText="全部" />
			</uni-list>
		</uni-section>

		<uni-section title="显示图标或图片" type="line">
			<uni-list>
				<uni-list-item :show-extra-icon="true" showArrow :extra-icon="extraIcon" title="列表左侧带扩展图标" />
				<uni-list-item title="列表左侧带略缩图" note="列表描述信息" showArrow
					thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
					thumb-size="sm" rightText="小图" />

				<uni-list-item title="列表左侧带略缩图" note="列表描述信息" showArrow
					thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
					thumb-size="base" rightText="默认" />
				<uni-list-item title="列表左侧带略缩图" note="列表描述信息" showArrow
					thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
					thumb-size="lg" rightText="大图" />
			</uni-list>
		</uni-section>

		<uni-section title="使用插槽" type="line">
			<uni-list>
				<uni-list-item>
					<template v-slot:body>
						<view class="slot-box">
							<text class="slot-text">使用 body 插槽</text>
						</view>
					</template>
				</uni-list-item>
				<uni-list-item title="自定义右侧插槽" note="列表描述信息" link>
					<template v-slot:footer>
						<image class="slot-image" src="/static/logo.png" mode="widthFix"></image>
					</template>
				</uni-list-item>
				<uni-list-item>
					<template v-slot:header>
						<view class="slot-box">
							<image class="slot-image" src="/static/logo.png" mode="widthFix"></image>
						</view>
					</template>
					<template v-slot:body>
						<text class="slot-box slot-text">自定义两侧插槽</text>
					</template>
					<template v-slot:footer>
						<image class="slot-image" src="/static/logo.png" mode="widthFix"></image>
					</template>
				</uni-list-item>
			</uni-list>
		</uni-section>
	</view>
</template>
``` 

> Script
``` html
<script>
	export default {
		components: {},
		data() {
			return {
				cover: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
				avatar: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png',
				extraIcon: {
					color: '#4cd964',
					size: '22',
					type: 'gear-filled'
				}
			};
		},
		methods: {
			onClick(e) {
				console.log('执行click事件', e.data)
				uni.showToast({
					title: '点击反馈'
				});
			},
			switchChange(e) {
				uni.showToast({
					title: 'change:' + e.value,
					icon: 'none'
				});
			}
		}
	};
</script>
``` 
> Style
``` html
<style lang="scss">
	.slot-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
	}

	.slot-image {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		margin-right: 10px;
		width: 30px;
		height: 30px;
	}

	.slot-text {
		flex: 1;
		font-size: 14px;
		color: #4cd964;
		margin-right: 10px;
	}
</style>

```
:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/list/list)
[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/list/list)



## 基于uni-list扩展的页面模板
## Page template based on uni-list extension

通过扩展插槽，可实现多种常见样式的列表
By extending the slot, a list of many common styles can be implemented

**新闻列表类**
**News list class**

1. 云端一体混合布局：[https://ext.dcloud.net.cn/plugin?id=2546](https://ext.dcloud.net.cn/plugin?id=2546)
1. Cloud-integrated hybrid layout: [https://ext.dcloud.net.cn/plugin?id=2546](https://ext.dcloud.net.cn/plugin?id=2546)
2. 云端一体垂直布局，大图模式：[https://ext.dcloud.net.cn/plugin?id=2583](https://ext.dcloud.net.cn/plugin?id=2583)
2. Cloud integrated vertical layout, big picture mode: [https://ext.dcloud.net.cn/plugin?id=2583](https://ext.dcloud.net.cn/plugin?id=2583)
3. 云端一体垂直布局，多行图文混排：[https://ext.dcloud.net.cn/plugin?id=2584](https://ext.dcloud.net.cn/plugin?id=2584)
3. Cloud integrated vertical layout, multi-line graphics and text mixed: [https://ext.dcloud.net.cn/plugin?id=2584](https://ext.dcloud.net.cn/plugin?id= 2584)
4. 云端一体垂直布局，多图模式：[https://ext.dcloud.net.cn/plugin?id=2585](https://ext.dcloud.net.cn/plugin?id=2585)
4. Cloud integrated vertical layout, multi-image mode: [https://ext.dcloud.net.cn/plugin?id=2585](https://ext.dcloud.net.cn/plugin?id=2585)
5. 云端一体水平布局，左图右文：[https://ext.dcloud.net.cn/plugin?id=2586](https://ext.dcloud.net.cn/plugin?id=2586)
5. Horizontal layout of cloud integration, picture on the left and text on the right: [https://ext.dcloud.net.cn/plugin?id=2586](https://ext.dcloud.net.cn/plugin?id=2586)
6. 云端一体水平布局，左文右图：[https://ext.dcloud.net.cn/plugin?id=2587](https://ext.dcloud.net.cn/plugin?id=2587)
6. Horizontal layout of cloud integration, left and right: [https://ext.dcloud.net.cn/plugin?id=2587](https://ext.dcloud.net.cn/plugin?id=2587)
7. 云端一体垂直布局，无图模式，主标题+副标题：[https://ext.dcloud.net.cn/plugin?id=2588](https://ext.dcloud.net.cn/plugin?id=2588)
7. Cloud integrated vertical layout, no picture mode, main title + subtitle: [https://ext.dcloud.net.cn/plugin?id=2588](https://ext.dcloud.net.cn/plugin? id=2588)

**商品列表类**
**Product list class**

1. 云端一体列表/宫格视图互切：[https://ext.dcloud.net.cn/plugin?id=2651](https://ext.dcloud.net.cn/plugin?id=2651)
1. Cloud integration list/grid view mutual cut: [https://ext.dcloud.net.cn/plugin?id=2651](https://ext.dcloud.net.cn/plugin?id=2651)
2. 云端一体列表（宫格模式）：[https://ext.dcloud.net.cn/plugin?id=2671](https://ext.dcloud.net.cn/plugin?id=2671)
2. Cloud integration list (gongge mode): [https://ext.dcloud.net.cn/plugin?id=2671](https://ext.dcloud.net.cn/plugin?id=2671)
3. 云端一体列表（列表模式）：[https://ext.dcloud.net.cn/plugin?id=2672](https://ext.dcloud.net.cn/plugin?id=2672)
3. Cloud integration list (list mode): [https://ext.dcloud.net.cn/plugin?id=2672](https://ext.dcloud.net.cn/plugin?id=2672)

