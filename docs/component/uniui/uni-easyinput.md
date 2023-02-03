

::: tip 组件名：uni-easyinput
::: tip Component name: uni-easyinput
> 代码块： `uEasyinput`
> Code block: `uEasyinput`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-easyinput)
[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-easyinput)
:::


easyinput 组件是对原生input组件的增强 ，是专门为配合表单组件[uni-forms](https://ext.dcloud.net.cn/plugin?id=2773)而设计的，easyinput 内置了边框，图标等，同时包含 input 所有功能
The easyinput component is an enhancement to the original input component, which is specially designed to cooperate with the form component [uni-forms](https://ext.dcloud.net.cn/plugin?id=2773), easyinput has built-in borders, icons Etc., including all functions of input at the same time

## 介绍
## introduce

### 基本用法
### Basic Usage

输入内容后，输入框尾部会显示清除按钮，点击可清除内容，如不需要展示图标，`clearable` 属性设置为 `false` 即可
After entering the content, a clear button will be displayed at the end of the input box. Click to clear the content. If you don’t need to display the icon, set the `clearable` attribute to `false`.

`clearable` 属性设置为 `true` ，输入框聚焦且内容不为空时，才会显示内容
The `clearable` attribute is set to `true`, and the content will only be displayed when the input box is focused and the content is not empty

```html
<uni-easyinput v-model="value" placeholder="请输入内容"></uni-easyinput>
```


### 输入框带左右图标
### Input box with left and right icons

设置 `prefixIcon` 属性来显示输入框的头部图标
Set the `prefixIcon` property to display the header icon of the input box

设置 `suffixIcon` 属性来显示输入框的尾部图标 
Set the `suffixIcon` property to display the suffix icon of the input box

注意图标当前只支持 `uni-icons` 内置的图标，当配置 `suffixIcon` 属性后，会覆盖 `:clearable="true"` 和 `type="password"` 时的原有图标
Note that icons currently only support the built-in icons of `uni-icons`, when the `suffixIcon` attribute is configured, it will overwrite the original icons when `:clearable="true"` and `type="password"`

绑定 `@iconClick` 事件可以触发图标的点击 ，返回 `prefix` 表示点击左侧图标，返回 `suffix` 表示点击右侧图标
Binding `@iconClick` event can trigger icon click, return `prefix` means click on the left icon, return `suffix` means click on the right icon

```html

<!-- 输入框头部图标 -->
<!-- input box header icon -->
<uni-easyinput prefixIcon="search" v-model="value" placeholder="请输入内容" @iconClick="onClick"></uni-easyinput>
<!-- 展示输入框尾部图标 -->
<!-- Display the icon at the end of the input box -->
<uni-easyinput suffixIcon="search"  v-model="value" placeholder="请输入内容" @iconClick="onClick"></uni-easyinput>
```

### 输入框禁用
### Input box disabled

设置 `disable` 属性可以禁用输入框，此时输入框不可编辑
Set the `disable` attribute to disable the input box, and the input box cannot be edited at this time

```html
<uni-easyinput disabled  v-model="value" placeholder="请输入内容"></uni-easyinput>
```

### 密码框
### password box

设置 `type="password"` 时，输入框内容将会不可见，由实心点代替，同时输入框尾部会显示眼睛图标，点击可切换内容显示状态
When `type="password"` is set, the content of the input box will be invisible and will be replaced by a solid dot. At the same time, an eye icon will be displayed at the end of the input box. Click to switch the display status of the content

```html
<uni-easyinput type="password" v-model="password" placeholder="请输入密码"></uni-easyinput>
```

### 输入框聚焦
### Input box focus

设置 `focus` 属性可以使输入框聚焦
Set the `focus` attribute to focus the input box

如果页面存在多个设置 `focus` 属性的输入框，只有最后一个输入框的 `focus` 属性会生效
If there are multiple input boxes with the `focus` attribute set on the page, only the `focus` attribute of the last input box will take effect

```html
<uni-easyinput focus v-model="password" placeholder="请输入内容"></uni-easyinput>
```


### 多行文本
### Multi-line text

设置 `type="textarea"` 时可输入多行文本
Multi-line text can be entered when `type="textarea"` is set

```html
<uni-easyinput type="textarea" v-model="value" placeholder="请输入内容"></uni-easyinput>
```

### 多行文本自动高度
### Multi-line text auto-height

设置 `type="textarea"` 时且设置 `autoHeight` 属性，可使用多行文本的自动高度，会跟随内容调整输入框的显示高度
When `type="textarea"` is set and the `autoHeight` attribute is set, the automatic height of multi-line text can be used, and the display height of the input box will be adjusted according to the content

```html
<uni-easyinput type="textarea" autoHeight v-model="value" placeholder="请输入内容"></uni-easyinput>
```

### 取消边框
### Cancel the border

设置 `:inputBorder="false"` 时可取消输入框的边框显示，同时搭配 `uni-forms` 的 `:border="true"` 有较好的效果
When you set `:inputBorder="false"`, you can cancel the display of the border of the input box. At the same time, it will have a better effect with `:border="true"` of `uni-forms`

```html
<uni-forms border>
	<uni-forms-item label="姓名">
		<uni-easyinput :inputBorder="false" placeholder="请输入姓名"></uni-easyinput>
	</uni-forms-item>
	<uni-forms-item label="年龄">
		<uni-easyinput :inputBorder="false" placeholder="请输入年龄"></uni-easyinput>
	</uni-forms-item>
</uni-forms>
```


## API

### Easyinput Props

|属性名| 类型|	可选值|默认值|说明|
|Attribute Name|Type|Optional Value|Default Value|Description|
|:-:|:-:|:-:|:-:|:-:|
|value|String/ Number|-|-|输入内容|
| value| String/ Number|-|-|Enter content|
|type|String|见 type Options|text|输入框的类型（默认text）|
| type| String|see type Options| text|type of input box (default text)|
|clearable|Boolean|-|true| 是否显示右侧清空内容的图标控件(输入框有内容且不禁用时显示)，点击可清空输入框内容|
| clearable| Boolean|-| true| Whether to display the icon control for clearing the content on the right (displayed when the input box has content and is not disabled), click to clear the content of the input box|
|autoHeight|Boolean|-|false|	是否自动增高输入区域，type为textarea时有效|
| autoHeight| Boolean|-| false| Whether to automatically increase the height of the input area, valid when the type is textarea|
|placeholder|String |-| - |	输入框的提示文字|
| placeholder| String |-| - | The prompt text of the input box|
|placeholderStyle|String| -	| - |	placeholder的样式(内联样式，字符串)，如"color: #ddd"|
| placeholderStyle| String| - | - | placeholder style (inline style, string), such as "color: #ddd"|
|focus|Boolean|-|false|是否自动获得焦点|
| focus| Boolean|-| false|whether to get focus automatically|
|disabled|Boolean|-|false|是否不可输入|
| disabled| Boolean|-| false|Whether input is not allowed|
|maxlength|Number|-|140|最大输入长度，设置为 -1 的时候不限制最大长度|
| maxlength| Number|-| 140|Maximum input length, when set to -1, there is no limit to the maximum length|
|confirmType|String|-|done|设置键盘右下角按钮的文字，仅在type="text"时生效|
| confirmType| String|-| done|Set the text of the button in the lower right corner of the keyboard, only valid when type="text"|
|clearSize|Number|-|15|清除图标的大小，单位px|
| clearSize| Number|-| 15|The size of the clear icon, the unit is px|
|prefixIcon|String|-|-|输入框头部图标	|
| prefixIcon| String|-|-|Input box head icon |
|suffixIcon|String|-|-|输入框尾部图标|
| suffixIcon| String|-|-|Suffix icon of the input box|
|trim|Boolean/String|见 trim Options	| false |	是否自动去除空格，传入类型为 Boolean 时，自动去除前后空格|
| trim| Boolean/String|See trim Options | false | Whether to automatically remove spaces, when the input type is Boolean, automatically remove leading and trailing spaces|
|inputBorder|Boolean|-|true|是否显示input输入框的边框|
| inputBorder| Boolean|-|true|whether to display the border of the input input box|
|styles|Object|-|-|	样式自定义|
| styles| Object|-|-| style customization|
|passwordIcon|Boolean|-| true |	type=password 时，是否显示小眼睛图标|
| passwordIcon| Boolean|-| true | When type=password, whether to display the small eye icon|


#### Type Options

|属性名| 说明|
|Property Name| Description|
|:-:| :-:|
|text|文本输入键盘|
| text|text input keyboard|
|textarea|多行文本输入键盘|
| textarea|multi-line text input keyboard|
|password|密码输入键盘|
| password|Password input keyboard|
|number|数字输入键盘，注意iOS上app-vue弹出的数字键盘并非9宫格方式	|
| number|Number input keyboard, note that the number keyboard popped up by app-vue on iOS is not a 9-square format |
|idcard|身份证输入键盘，仅支持微信、支付宝、百度、QQ小程序|
| idcard|ID card input keyboard, only supports WeChat, Alipay, Baidu, QQ MiniApp|
|digit|带小数点的数字键盘，仅支持微信、支付宝、百度、头条、QQ小程序	|
| digit|Numeric keyboard with decimal point, only supports WeChat, Alipay, Baidu, Toutiao, QQ MiniApp |

#### ConfirmType Options

平台差异与 [input](https://uniapp.dcloud.io/component/input) 相同
Platform differences are the same as [input](https://uniapp.dcloud.io/component/input)

|属性名| 说明|
|Property Name| Description|
|:-:| :-:|
|send|右下角按钮为“发送”|
| send|The button in the lower right corner is "Send"|
|search	|右下角按钮为“搜索”|
| search |The button in the lower right corner is "Search"|
|next|右下角按钮为“下一个”|
| next|The button in the lower right corner is "Next"|
|go|右下角按钮为“前往”	|											
| go|The button in the lower right corner is "go" |
|done|右下角按钮为“完成”|
| done|The button in the lower right corner is "Done"|
	

#### Styles Options 
	
|属性名| 默认值 	|说明|
|property name| default value |description|
|:-:| :-:| :-:|
|color| #333|输入文字颜色|
| color| #333|Input text color|
|disableColor|#eee|	输入框禁用背景色|
| disableColor|#eee| Disable the background color of the input box|
|borderColor|#e5e5e5	|	边框颜色|
| borderColor|#e5e5e5 | border color|

#### Trim Options

传入类型为 `Boolean` 时，自动去除前后空格,传入类型为 `String` 时，可以单独控制，下面是可选值
When the input type is `Boolean`, the leading and trailing spaces are automatically removed. When the input type is `String`, it can be controlled separately. The following are optional values

|属性名|说明|
|Property Name|Description|
|:-:| :-:|
|both|去除两端空格|
| both|Remove spaces at both ends|
|left|去除左侧空格|
| left|Remove left space|
|right|去除右侧空格|
| right|Remove right space|
|all|去除所有空格|
| all|remove all spaces|
|none|不去除空格|
| none|do not remove spaces|


### Easyinput Events

|事件称名| 说明|返回值|兼容说明|
|Event Name| Description|Return Value|Compatible Description|
|:-:| :-:|:-:|:-:|
|@input|输入框内容发生变化时触发| -||
|@input|Triggered when the content of the input box changes| -||
|@clear|点击右侧叉号图标时触发| -|1.1.0新增|
|@clear|Triggered when clicking the cross icon on the right| -| New in 1.1.0|
|@focus|输入框获得焦点时触发| -||
|@focus| Triggered when the input box gets focus | -||
|@blur|输入框失去焦点时触发| -||
|@blur| Triggered when the input box loses focus| -||
|@confirm|点击完成按钮时触发| -||
|@confirm| Fired when the Done button is clicked | -||
|@iconClick	|点击图标时触发| prefix/suffix	||
|@iconClick | Triggered when the icon is clicked | prefix/suffix ||
|@change|仅在输入框失去焦点或用户按下回车时触发||1.1.0新增|
|@change|Only triggered when the input box loses focus or the user presses enter || New in 1.1.0|
|@keyboardheightchange|键盘高度发生变化时触发||1.1.6新增|
|@keyboardheightchange| Triggered when the keyboard height changes|| New in 1.1.6|


## 示例
## Example
::: warning 注意
::: warning note
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。
The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the sample code directly will not work properly.

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-easyinput) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
Please go to the [Component Download Page](https://ext.dcloud.net.cn/plugin?name=uni-easyinput) and select `Import Sample Project Using HBuilderX` on the right side of the page to experience the complete component example.
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/easyinput/easyinput
> Template
``` html
<template>
	<view>
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">easyinput 组件是对原生input组件的增强 ，是专门为配合表单组件 uni-forms 而设计的，easyinput 内置了边框，图标等，同时包含 input所有功能</text>
		</uni-card>
		<uni-section title="默认" subTitle="使用 focus 属性自动获取输入框焦点" type="line" padding>
			<uni-easyinput errorMessage v-model="value" focus placeholder="请输入内容" @input="input"></uni-easyinput>
		</uni-section>

		<uni-section title="去除空格" subTitle="使用 trim 属性 ,可以控制返回内容的空格 " type="line" padding>
			<text class="uni-subtitle">输入内容：{{ '"'+value+'"' }}</text>
			<uni-easyinput class="uni-mt-5" trim="all" v-model="value" placeholder="请输入内容" @input="input"></uni-easyinput>
		</uni-section>

		<uni-section title="自定义样式" subTitle="使用 styles 属性 ,可以自定义输入框样式" type="line" padding>
			<uni-easyinput v-model="value" :styles="styles" :placeholderStyle="placeholderStyle" placeholder="请输入内容"@input="input"></uni-easyinput>
		</uni-section>
		<uni-section title="图标" subTitle="使用 prefixIcon / suffixIcon 属性 ,可以自定义输入框左右侧图标" type="line" padding>
			<uni-easyinput prefixIcon="search" v-model="value" placeholder="左侧图标" @iconClick="iconClick">
			</uni-easyinput>
			<uni-easyinput class="uni-mt-5" suffixIcon="search" v-model="value" placeholder="右侧图标" @iconClick="iconClick"></uni-easyinput>
		</uni-section>
		<uni-section title="禁用" subTitle="使用 disabled 属性禁用输入框" type="line" padding>
			<uni-easyinput disabled value="已禁用" placeholder="请输入内容"></uni-easyinput>
		</uni-section>

		<uni-section title="密码框" subTitle="指定属性 type=password 使用密码框,右侧会显示眼睛图标" type="line" padding>
			<uni-easyinput type="password" v-model="password" placeholder="请输入密码"></uni-easyinput>
		</uni-section>

		<uni-section title="多行文本" subTitle="指定属性 type=textarea 使用多行文本框" type="line" padding>
			<uni-easyinput type="textarea" v-model="value" placeholder="请输入内容"></uni-easyinput>
		</uni-section>

		<uni-section title="多行文本自动高度" subTitle="使用属性 autoHeight 使多行文本框自动增高" type="line" padding>
			<uni-easyinput type="textarea" autoHeight v-model="value" placeholder="请输入内容"></uni-easyinput>
		</uni-section>
	</view>
</template>
``` 
> Script
``` html
<script>
	export default {
		data() {
			return {
				value: '',
				password: '',
				placeholderStyle: "color:#2979FF;font-size:14px",
				styles: {
					color: '#2979FF',
					borderColor: '#2979FF'
				}
			}

		},
		onLoad() {},
		onReady() {},
		methods: {
			input(e) {
				console.log('输入内容：', e);
			},
			iconClick(type) {
				uni.showToast({
					title: `点击了${type==='prefix'?'左侧':'右侧'}的图标`,
					icon: 'none'
				})
			}
		}
	}
</script>
``` 
> Ｓtyle
``` html
<style lang="scss">
.uni-mt-5 {
	margin-top: 5px;
}
</style>

```
:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/easyinput/easyinput)
[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/easyinput/easyinput)