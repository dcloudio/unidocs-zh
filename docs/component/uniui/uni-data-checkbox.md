<md-translatedByGoogle />

::: tip 组件名：uni-data-checkbox
::: tip component name: uni-data-checkbox
> 代码块： `uDataCheckbox`
> Code block: `uDataCheckbox`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-data-checkbox)
[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-data-checkbox)
:::

本组件是基于uni-app基础组件checkbox的封装。本组件要解决问题包括：
This component is a package based on the uni-app basic component checkbox. Problems to be solved by this component include:

1. 数据绑定型组件：给本组件绑定一个data，会自动渲染一组候选内容。再以往，开发者需要编写不少代码实现类似功能
1. Data-bound component: Bind a data to this component, and a set of candidate content will be automatically rendered. In the past, developers need to write a lot of code to achieve similar functions
2. 自动的表单校验：组件绑定了data，且符合[uni-forms](https://ext.dcloud.net.cn/plugin?id=2773)组件的表单校验规范，搭配使用会自动实现表单校验
2. Automatic form verification: The component is bound with data and conforms to the form verification specification of the [uni-forms](https://ext.dcloud.net.cn/plugin?id=2773) component. Automatically implement form validation
3. 本组件合并了单选多选
3. This component incorporates multiple selections
4. 本组件有若干风格选择，如普通的单选多选框、并列button风格、tag风格。开发者可以快速选择需要的风格。但作为一个封装组件，样式代码虽然不用自己写了，却会牺牲一定的样式自定义性
4. This component has several styles to choose from, such as ordinary radio and multi-select boxes, side-by-side button styles, and tag styles. Developers can quickly select the desired style. However, as an encapsulated component, although the style code does not need to be written by itself, it will sacrifice a certain degree of style customization.

在uniCloud开发中，`DB Schema`中配置了enum枚举等类型后，在web控制台的[自动生成表单](https://uniapp.dcloud.io/uniCloud/schema?id=autocode)功能中，会自动生成``uni-data-checkbox``组件并绑定好data
In the development of uniCloud, after configuring the enum enumeration and other types in `DB Schema`, in the [Auto Generate Form](https://uniapp.dcloud.io/uniCloud/schema?id=autocode) function of the web console , will automatically generate the ``uni-data-checkbox`` component and bind the data


## 介绍
## introduce

::: warning 注意事项
::: warning Notes
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
> In order to avoid wrong use and bring you a bad development experience, please read the following precautions carefully before using the component, which can help you avoid some mistakes.
- 组件需要依赖 `sass` 插件 ，请自行手动安装
- The component needs to depend on the `sass` plugin, please install it manually
- 本组件为数据驱动，目的是快速投入使用，只可通过 style 覆盖有限样式，不支持自定义更多样式
- This component is data-driven and aims to be put into use quickly. It can only override limited styles through style, and does not support customizing more styles
- 组件支持 nvue ，需要在 `manifest.json > app-plus` 节点下配置 `"nvueStyleCompiler" : "uni-app"` 
- The component supports nvue, you need to configure `"nvueStyleCompiler" : "uni-app"` under the `manifest.json > app-plus` node
- 如组件显示有问题 ，请升级 `HBuilderX` 为 `v3.1.0` 以上
- If there is a problem with the component display, please upgrade `HBuilderX` to `v3.1.0` or above
:::


### 基本用法
### Basic usage

设置 `localdata` 属性后，组件会通过数据渲染出对应的内容，默认显示的是单选框 
After setting the `localdata` attribute, the component will render the corresponding content through the data, and the radio button is displayed by default

需要注意 `:multiple="false"` 时（单选） ， `value/v-model` 的值是 `String|Number` 类型
It should be noted that when `:multiple="false"` (single choice), the value of `value/v-model` is of type `String|Number`


```vue
<template>
	<view>
		<uni-data-checkbox v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
	</view>
</template>
<script>
	export default {
		data() { 
			return {
				value: 0,
				range: [{"value": 0,"text": "篮球"	},{"value": 1,"text": "足球"},{"value": 2,"text": "游泳"}]
			}
		},
		methods: {
			change(e){
				console.log('e:',e);
			}
		}
	}
</script>
```

### 多选框
### Checkbox

设置 `multiple` 属性，组件显示为多选框
Set the `multiple` property, the component is displayed as a multiple selection box

需要注意 `:multiple="true"` 时（多选） ， `value/v-model` 的值是 `Array` 类型
It should be noted that when `:multiple="true"` (multiple selection), the value of `value/v-model` is of type `Array`

```vue
<template>
	<view>
		<uni-data-checkbox multiple v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
	</view>
</template>
<script>
	export default {
		data() { 
			return {
				value: [0,2],
				range: [{"value": 0,"text": "篮球"	},{"value": 1,"text": "足球"},{"value": 2,"text": "游泳"}]
			}
		},
		methods: {
			change(e){
				console.log('e:',e);
			}
		}
	}
</script>
```

### 设置最大最小值
### set max and min

设置 `:multiple="true"` 时（多选） ，可以设置 `min`、`max` 属性 
When setting `:multiple="true"` (multiple selection), you can set `min`, `max` attributes

如果选中个数小于 `min` 属性设置的值，那么选中内容将不可取消，只有当选中个数大于等于 `min`且小于 `max` 时，才可取消选中
If the number of selections is less than the value set by the `min` property, the selection cannot be cancelled. Only when the number of selections is greater than or equal to `min` and less than `max`, can the selection be cancelled

如果选中个数大于等于 `max` 属性设置的值，那么其他未选中内容将不可选
If the number of selected items is greater than or equal to the value set by the `max` property, other unselected items will not be selected.

```vue
<template>
	<view>
		<uni-data-checkbox min="1" max="2" multiple v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
	</view>
</template>
<script>
	export default {
		data() { 
			return {
				value: [0,2],
				range: [{"value": 0,"text": "篮球"	},{"value": 1,"text": "足球"},{"value": 2,"text": "游泳"}]
			}
		},
		methods: {
			change(e){
				console.log('e:',e);
			}
		}
	}
</script>
```

### 设置禁用
### setting disabled

如果需要禁用某项，需要在 `localdata` 属性的数据源中添加 `disable` 属性，而不是在组件中添加 `disable` 属性
If you need to disable something, you need to add the `disable` attribute to the data source of the `localdata` attribute, not the `disable` attribute in the component


```vue
<template>
	<view>
		<uni-data-checkbox v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
	</view>
</template>

<script>
	export default {
		data() { 
			return {
				value: 0,
				range: [{
						"value": 0,
						"text": "篮球"
					},
					{
						"value": 1,
						"text": "足球",
						// 禁用当前项
						// disable current item
						"disable":true
					},
					{
						"value": 2,
						"text": "游泳"
					}
				]
			}
		},
		methods: {
			change(e){
				console.log('e:',e);
			}
		}
	}
</script>
```

### 自定义选中颜色
### Customize the selected color

设置 `selectedColor` 属性，可以修改组件选中后的图标及边框颜色
Set the `selectedColor` property to modify the icon and border color after the component is selected

设置 `selectedTextColor` 属性，可以修改组件选中后的文字颜色，如不填写默认同 `selectedColor` 属性 ，`mode` 属性为 `tag` 时，默认为白色
Set the `selectedTextColor` property to modify the text color after the component is selected. If not filled in, the default is the same as the `selectedColor` property. When the `mode` property is `tag`, the default is white

```vue
<template>
	<view>
		<uni-data-checkbox　selectedColor＝"red" selectedTextColor="red" multiple v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
	</view>
</template>

<script>
	export default {
		data() { 
			return {
				value: [0,2],
				range: [{"value": 0,"text": "篮球"	},{"value": 1,"text": "足球"},{"value": 2,"text": "游泳"}]
			}
		},
		methods: {
			change(e){
				console.log('e:',e);
			}
		}
	}
</script>
```

### 更多模式
### more patterns

设置 `mode` 属性，可以设置更多显示样式，目前内置样式有四种 `default/list/button/tag` 
Set the `mode` property, you can set more display styles, there are currently four built-in styles `default/list/button/tag`

如果需要禁用某项，需要在 `localdata` 属性的数据源中添加 `disable` 属性，而不是在组件中添加 `disable` 属性
If you need to disable something, you need to add the `disable` attribute to the data source of the `localdata` attribute, not the `disable` attribute in the component

```vue
<template>
	<view>
		<!-- 默认 default -->
		<!-- default default -->
		<uni-data-checkbox v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
		<!-- 列表 list ，显示左侧图标 -->
		<!-- list list , showing left icon -->
		<uni-data-checkbox mode="list" icon="left" v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
		<!-- 列表 list ，显示右侧图标 -->
		<!-- list list , show right icon -->
		<uni-data-checkbox mode="list" icon="right" v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
		<!-- 按钮 button -->
		<!-- button button -->
		<uni-data-checkbox mode="button" v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
		<!-- 标签 tag -->
		<!-- tag tag -->
		<uni-data-checkbox mode="tag" v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
	</view>
</template>

<script>
	export default {
		data() { 
			return {
				value: 0,
				range: [{"value": 0,"text": "篮球"	},{"value": 1,"text": "足球"},{"value": 2,"text": "游泳"}]
			}
		},
		methods: {
			change(e){
				console.log('e:',e);
			}
		}
	}
</script>
```


## API

### DataCheckbox Props

| 属性名| 类型|可选值| 默认值| 说明																													|
| property name | type | optional value | default value | description |
| :-:| :-:|:-:|:-:| :-:|
|value/v-model|Array/String/Number|-|-|默认值，multiple=true时为 Array类型，否则为 String或Number类型|
|value/v-model|Array/String/Number|-|-|Default value, Array type when multiple=true, String or Number type otherwise|
|localdata|Array|-|-|本地渲染数据|
|localdata|Array|-|-|local rendering data|
|mode| String|default/list/button/tag|default|显示模式|
|mode| String|default/list/button/tag|default|Display Mode|
|multiple|Boolean|-|false	|是否多选		|
|multiple|Boolean|-|false |Multiple selection|
|min|String/Number|-|-|最小选择个数 ，multiple为true时生效|
|min|String/Number|-|-|Minimum selection number, effective when multiple is true|
|max|String/Number|-|-|最大选择个数 ，multiple为true时生效|
|max|String/Number|-|-|Maximum selection number, valid when multiple is true|
|wrap|Boolean|-|-|是否换行显示|
|wrap|Boolean|-|-|Whether to wrap the line|
|icon|String|left/right|left|list 列表模式下 icon 显示的位置|
|icon|String|left/right|left|list Icon display position in list mode|
|selectedColor|String|-|#007aff|选中颜色|
|selectedColor|String|-|#007aff|Selected Color|
|selectedTextColor|String|-|#333|选中文本颜色，如不填写则自动显示|
|selectedTextColor|String|-|#333|Selected text color, if not filled in, it will be displayed automatically|
|emptyText 	|String|-|暂无数据|没有数据时显示的文字 ，本地数据无效|
|emptyText |String|-|No data yet|The text displayed when there is no data, the local data is invalid|
|map|Object|-|{text:'text',value:'value'}|字段映射，将text/value映射到数据中的其他字段|
|map|Object|-|{text:'text',value:'value'}|Field mapping, map text/value to other fields in the data|

#### Localdata Options

`localdata` 属性的格式为数组，数组内每项是对象，需要严格遵循如下格式
The format of the `localdata` attribute is an array, and each item in the array is an object, which needs to strictly follow the following format

|属性名| 说明|
|property name| description|
|:-:| :-:|
|text|显示文本|
|text|Display text|
|value|选中后的值|
|value|Selected value|
|disable|是否禁用|
|disable|Whether to disable|

#### Mode Options 

|属性名| 说明|
|property name| description|
|:-:| :-:|
|default|默认值，横向显示|
|default|Default value, landscape display|
|list|列表|
|list|list|
|button|按钮|
|button|button|
|tag|标签|
|tag|tag|


### DataCheckbox Events

| 事件名	| 事件说明| 返回参数|
| Event name | Event description | Return parameter |
| :-:| :-:| :-:|
| @change| 选中状态改变时触发事件	| -|
| @change| Trigger an event when the selected state changes | -|




## 示例
## Example
::: warning 注意
::: warning attention
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。
The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-data-checkbox) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-data-checkbox), select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/data-checkbox/data-checkbox
> Template
``` vue
<template>
	<view>
		<uni-card is-full>
			<text class="uni-h6">通过数据驱动的单选框和复选框，可直接通过连接 uniCloud 获取数据，同时可以配合表单组件 uni-forms 使用</text>
		</uni-card>
		<uni-section title="单选" type="line">
			<view class="uni-px-5 uni-pb-5">
				<view class="text">单选选中：{{JSON.stringify(radio1)}}</view>
				<uni-data-checkbox v-model="radio1" :localdata="sex"></uni-data-checkbox>
			</view>
		</uni-section>
		<uni-section title="多选" subTitle="使用multiple属性开启多选" type="line">
			<view class="uni-px-5 uni-pb-5">
				<view class="text">多选选中：{{JSON.stringify(checkbox1)}}</view>
				<uni-data-checkbox multiple v-model="checkbox1" :localdata="hobby"></uni-data-checkbox>
			</view>
		</uni-section>

		<uni-section title="最大最小值" subTitle="使用 min / max 设置多选的最大最小值,单选无效">
			<view class="uni-px-5 uni-pb-5">
				<view class="text">选中：{{JSON.stringify(checkbox6)}}</view>
				<uni-data-checkbox min="1" max="2" multiple v-model="checkbox6" :localdata="hobby"></uni-data-checkbox>
			</view>
		</uni-section>

		<uni-section title="更多样式 - button" subTitle="使用mode=button属性使用按钮样式" type="line">
			<view class="uni-px-5">
				<view class="text">单选选中：{{JSON.stringify(radio2)}}</view>
				<uni-data-checkbox mode="button" v-model="radio2" :localdata="sex"></uni-data-checkbox>
			</view>
			<view class="uni-px-5 uni-pb-5">
				<view class="text">多选选中：{{JSON.stringify(checkbox2)}}</view>
				<uni-data-checkbox mode="button" multiple v-model="checkbox2" :localdata="hobby"></uni-data-checkbox>
			</view>
		</uni-section>

		<uni-section title="更多样式 - tag" subTitle="使用mode=tag属性使用标签样式" type="line">
			<view class="uni-px-5">
				<view class="text">单选选中：{{JSON.stringify(radio3)}}</view>
				<uni-data-checkbox mode="tag" v-model="radio3" :localdata="sex"></uni-data-checkbox>
			</view>
			<view class="uni-px-5 uni-pb-5">
				<view class="text">多选选中：{{JSON.stringify(checkbox3)}}</view>
				<uni-data-checkbox mode="tag" multiple v-model="checkbox3" :localdata="hobby"></uni-data-checkbox>
			</view>
		</uni-section>

		<uni-section title="禁用" subTitle="数据中使用 disable 属性实现单独禁用,组件使用 disable 属性实现全部禁用" type="line">
			<view class="uni-px-5">
				<view class="text">单选选中：{{JSON.stringify(radio4)}}</view>
				<uni-data-checkbox mode="button" v-model="radio4" :localdata="sex1"></uni-data-checkbox>
			</view>
			<view class="uni-px-5 uni-pb-5">
				<view class="text">多选选中：{{JSON.stringify(checkbox4)}}</view>
				<uni-data-checkbox mode="button" multiple v-model="checkbox4" :localdata="hobby2">
				</uni-data-checkbox>
			</view>
		</uni-section>



		<uni-section title="自定义高亮颜色" subTitle="使用 selectedColor 属性修改颜色" type="line">
			<view class="uni-px-5">
				<view class="text">单选选中：{{JSON.stringify(radio5)}}</view>
				<uni-data-checkbox selectedColor="red" v-model="radio5" :localdata="sex1"></uni-data-checkbox>
			</view>
			<view class="uni-px-5 uni-pb-5">
				<view class="text">多选选中：{{JSON.stringify(checkbox5)}}</view>
				<uni-data-checkbox selectedColor="red" multiple v-model="checkbox5" :localdata="hobby2">
				</uni-data-checkbox>
			</view>
		</uni-section>
	
	</view>
</template>
``` 

> Script
``` vue
<script>
	export default {
		data() {
			return {
				radio1: 0,
				radio2: 0,
				radio3: 0,
				radio4: 0,
				radio5: 0,
				radio6: 0,
				checkbox1: [0],
				checkbox2: [0],
				checkbox3: [0],
				checkbox4: [0],
				checkbox5: [0],
				checkbox6: [0],
				sex: [{
					text: '男',
					value: 0
				}, {
					text: '女',
					value: 1
				}, {
					text: '未知',
					value: 2
				}],
				sex1: [{
					text: '男',
					value: 0
				}, {
					text: '女',
					value: 1,
					disable: true
				}, {
					text: '未知',
					value: 2
				}],
				hobby: [{
					text: '足球',
					value: 0
				}, {
					text: '篮球',
					value: 1
				}, {
					text: '游泳',
					value: 2
				}],
				hobby2: [{
					text: '足球',
					value: 0,
					disable: true
				}, {
					text: '篮球',
					value: 1,
					disable: true
				}, {
					text: '游泳',
					value: 2
				}],
			}
		}
	}
</script>
``` 
> Style
``` vue
<style lang="scss">
	.text {
		font-size: 12px;
		color: #666;
		margin-top: 5px;
	}
	.uni-px-5 {
	    padding-left: 10px;
	    padding-right: 10px;
	}
	.uni-pb-5 {
	    padding-bottom: 10px;
	}
</style>

```

:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/data-checkbox/data-checkbox)
[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/data-checkbox/data-checkbox)

