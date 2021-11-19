
> **组件名：uni-list**
> 代码块： `uList`、`uListItem`
> 关联组件：`uni-list-item`、`uni-badge`、`uni-icons`、`uni-list-chat`、`uni-list-ad`


List 列表组件，包含基本列表样式、可扩展插槽机制、长列表性能优化、多端兼容。

在vue页面里，它默认使用页面级滚动。在app-nvue页面里，它默认使用原生list组件滚动。这样的长列表，在滚动出屏幕外后，系统会回收不可见区域的渲染内存资源，不会造成滚动越长手机越卡的问题。

uni-list组件是父容器，里面的核心是uni-list-item子组件，它代表列表中的一个可重复行，子组件可以无限循环。

uni-list-item有很多风格，uni-list-item组件通过内置的属性，满足一些常用的场景。当内置属性不满足需求时，可以通过扩展插槽来自定义列表内容。

内置属性可以覆盖的场景包括：导航列表、设置列表、小图标列表、通信录列表、聊天记录列表。

涉及很多大图或丰富内容的列表，比如类今日头条的新闻列表、类淘宝的电商列表，需要通过扩展插槽实现。

下文均有样例给出。

uni-list不包含下拉刷新和上拉翻页。上拉翻页另见组件：[uni-load-more](https://ext.dcloud.net.cn/plugin?id=29)

> **注意事项**
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
> - 组件需要依赖 `sass` 插件 ，请自行手动安装
> - 组件内部依赖 `'uni-icons'` 、`uni-badge` 组件
> - `uni-list` 和 `uni-list-item` 需要配套使用，暂不支持单独使用 `uni-list-item`
> - 只有开启点击反馈后，会有点击选中效果
> - 使用插槽时，可以完全自定义内容
> - note 、rightText 属性暂时没做限制，不支持文字溢出隐藏，使用时应该控制长度显示或通过默认插槽自行扩展
> - 支付宝小程序平台需要在支付宝小程序开发者工具里开启 component2 编译模式，开启方式： 详情 --> 项目配置 --> 启用 component2 编译
> - 如果需要修改 `switch`、`badge` 样式，请使用插槽自定义
> - 在 `HBuilderX` 低版本中，可能会出现组件显示 `undefined` 的问题，请升级最新的 `HBuilderX` 或者 `cli`

### 基本用法 

- 设置 `title` 属性，可以显示列表标题
- 设置 `disabled` 属性，可以禁用当前项

```html
<uni-list>
	<uni-list-item  title="列表文字" ></uni-list-item>
	<uni-list-item :disabled="true" title="列表禁用状态" ></uni-list-item>
</uni-list>
			 
```

### 多行内容显示

- 设置 `note` 属性 ，可以在第二行显示描述文本信息

```html
<uni-list>
	<uni-list-item title="列表文字" note="列表描述信息"></uni-list-item>
	<uni-list-item :disabled="true" title="列表文字" note="列表禁用状态"></uni-list-item>
</uni-list>

```

### 右侧显示角标、switch

- 设置 `show-badge` 属性 ，可以显示角标内容
- 设置 `show-switch` 属性，可以显示 switch 开关

```html
<uni-list>
	<uni-list-item  title="列表右侧显示角标" :show-badge="true" badge-text="12" ></uni-list-item>
	<uni-list-item title="列表右侧显示 switch"  :show-switch="true"  @switchChange="switchChange" ></uni-list-item>
</uni-list>

```

### 左侧显示略缩图、图标  

- 设置 `thumb` 属性 ，可以在列表左侧显示略缩图
- 设置 `show-extra-icon` 属性，并指定 `extra-icon` 可以在左侧显示图标

```html
 <uni-list>
 	<uni-list-item title="列表左侧带略缩图" note="列表描述信息" thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
 	 thumb-size="lg" rightText="右侧文字"></uni-list-item>
 	<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon1" title="列表左侧带扩展图标" ></uni-list-item>
</uni-list>
```

### 开启点击反馈和右侧箭头
- 设置 `clickable` 为 `true` ，则表示这是一个可点击的列表，会默认给一个点击效果，并可以监听 `click` 事件
- 设置 `link` 属性，会自动开启点击反馈，并给列表右侧添加一个箭头
- 设置 `to` 属性，可以跳转页面，`link` 的值表示跳转方式，如果不指定，默认为 `navigateTo`

```html

<uni-list>
	<uni-list-item title="开启点击反馈" clickable  @click="onClick" ></uni-list-item>
	<uni-list-item title="默认 navigateTo 方式跳转页面" link to="/pages/vue/index/index" @click="onClick($event,1)" ></uni-list-item>
	<uni-list-item title="reLaunch 方式跳转页面" link="reLaunch" to="/pages/vue/index/index" @click="onClick($event,1)" ></uni-list-item>
</uni-list>

```

## API

### List Props

|属性名			|类型		|默认值		|	说明|
|:-:				|:-:		|:-:		|	:-:	|
|border			|Boolean	|true		|	是否显示边框|


### ListItem Props

|属性名|类型|默认值|说明	|
|:-:|:-:|:-:|:-:|
|title|String|-|标题|
|note|String|-|描述|
|ellipsis|Number|0|	title 是否溢出隐藏，可选值，0:默认;  1:显示一行;	2:显示两行;|
|disabled|Boolean|false|是否禁用	|
|thumb|String|-|左侧缩略图，若thumb有值，则不会显示扩展图标|
|thumbSize|String|medium|略缩图尺寸，可选值，lg:大图;  medium:一般;	sm:小图;|
|rightText|String|-|右侧文字内容|
|showArrow|Boolean|true|是否显示箭头图标	|		
|link|String|navigateTo	|新页面跳转方式，可选值见下表|
|to|String|-|新页面跳转地址，如填写此属性，click 会返回页面是否跳转成功		|	
|clickable|Boolean|false|是否开启点击反馈|
|showExtraIcon|Boolean|false|左侧是否显示扩展图标|																	
|extraIcon|Object|-|扩展图标参数，格式为 ``{color: '#4cd964',size: '22',type: 'spinner'}``，参考 [uni-icons](https://ext.dcloud.net.cn/plugin?id=28)|
|direction[弃用]| String|row|排版方向，可选值，row:水平排列;  column:垂直排列; 3个插槽是水平排还是垂直排，也受此属性控制|
|showBadge[弃用]|Boolean|false|是否显示数字角标|
|badgeText[弃用]|String|-|数字角标内容|
|badgeType[弃用]|String|-|数字角标类型，参考[uni-icons](https://ext.dcloud.net.cn/plugin?id=21)|					
|showSwitch[弃用]|Boolean|false|是否显示Switch|
|switchChecked|Boolean[弃用]|false|Switch是否被选中	|

#### Link Options

|属性名|	说明|
|:-:|:-:|
|navigateTo|同 uni.navigateTo()|
|redirectTo|同 uni.reLaunch()|
|reLaunch|同 uni.reLaunch()|
|switchTab|同 uni.switchTab()|

### ListItem Events

|事件称名|说明|返回参数|		
|:-:|:-:|:-:|			
|@click|点击 uniListItem 触发事件，需开启点击反馈|-|			



### ListItem Slots

|名称|说明|			
|:-:|:-:|				
|default|默认插槽|
|icon|图标插槽|			
|actions|操作栏插槽|	

## 基于uni-list扩展的页面模板

通过扩展插槽，可实现多种常见样式的列表

**新闻列表类**

1. 云端一体混合布局：[https://ext.dcloud.net.cn/plugin?id=2546](https://ext.dcloud.net.cn/plugin?id=2546)
2. 云端一体垂直布局，大图模式：[https://ext.dcloud.net.cn/plugin?id=2583](https://ext.dcloud.net.cn/plugin?id=2583)
3. 云端一体垂直布局，多行图文混排：[https://ext.dcloud.net.cn/plugin?id=2584](https://ext.dcloud.net.cn/plugin?id=2584)
4. 云端一体垂直布局，多图模式：[https://ext.dcloud.net.cn/plugin?id=2585](https://ext.dcloud.net.cn/plugin?id=2585)
5. 云端一体水平布局，左图右文：[https://ext.dcloud.net.cn/plugin?id=2586](https://ext.dcloud.net.cn/plugin?id=2586)
6. 云端一体水平布局，左文右图：[https://ext.dcloud.net.cn/plugin?id=2587](https://ext.dcloud.net.cn/plugin?id=2587)
7. 云端一体垂直布局，无图模式，主标题+副标题：[https://ext.dcloud.net.cn/plugin?id=2588](https://ext.dcloud.net.cn/plugin?id=2588)

**商品列表类**

1. 云端一体列表/宫格视图互切：[https://ext.dcloud.net.cn/plugin?id=2651](https://ext.dcloud.net.cn/plugin?id=2651)
2. 云端一体列表（宫格模式）：[https://ext.dcloud.net.cn/plugin?id=2671](https://ext.dcloud.net.cn/plugin?id=2671)
3. 云端一体列表（列表模式）：[https://ext.dcloud.net.cn/plugin?id=2672](https://ext.dcloud.net.cn/plugin?id=2672)

## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/list/list](https://hellouniapp.dcloud.net.cn/pages/extUI/list/list)