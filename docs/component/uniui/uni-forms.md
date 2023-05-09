
::: tip 组件名：uni-forms
::: tip component name: uni-forms
> 代码块： `uForms`、`uni-forms-item`
> Code blocks: `uForms`, `uni-forms-item`
> 关联组件：`uni-forms-item`、`uni-easyinput`、`uni-data-checkbox`、`uni-group`。
> Associated components: `uni-forms-item`, `uni-easyinput`, `uni-data-checkbox`, `uni-group`.

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-forms)
[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-forms)
:::

uni-app的内置组件已经有了 `<form>`组件，用于提交表单内容。
The built-in components of uni-app already have `<form> `Component for submitting form content.

然而几乎每个表单都需要做表单验证，为了方便做表单验证，减少重复开发，`uni-ui` 又基于 `<form>`组件封装了 `<uni-forms>`组件，内置了表单验证功能。
However, almost every form requires form validation. In order to facilitate form validation and reduce repetitive development, `uni-ui` is based on `<form> `Component encapsulates`<uni-forms> `Component, with built-in form validation.

`<uni-forms>` 提供了 `rules`属性来描述校验规则、`<uni-forms-item>`子组件来包裹具体的表单项，以及给原生或三方组件提供了 `onFieldChange()` 来校验表单值。
`<uni-forms>` provides `rules` attribute to describe validation rules, `<uni-forms-item>` sub-component to wrap specific form items, and `onFieldChange()` for native or third-party components to validate form values.

每个要校验的表单项，不管input还是checkbox，都必须放在`<uni-forms-item>`组件中，且一个`<uni-forms-item>`组件只能放置一个表单项。
Each form item to be verified, regardless of input or checkbox, must be placed in the `<uni-forms-item>` component, and a `<uni-forms-item>` component can only place one form item.

`<uni-forms-item>`组件内部预留了显示error message的区域，默认是在表单项的底部。
The `<uni-forms-item>` component reserves an area for displaying error messages, which is at the bottom of the form item by default.

另外，`<uni-forms>`组件下面的各个表单项，可以通过`<uni-group>`包裹为不同的分组。同一`<uni-group>`下的不同表单项目将聚拢在一起，同其他group保持垂直间距。`<uni-group>`仅影响视觉效果。
In addition, each form item under the `<uni-forms>` component can be wrapped into different groups by `<uni-group>`. Different form items under the same `<uni-group>` will be grouped together, maintaining vertical spacing with other groups. `<uni-group>` only affects visual effects.

## 介绍
## introduce
::: warning 注意事项
::: warning Notes
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
> In order to avoid wrong use and bring you a bad development experience, please read the following precautions carefully before using the component, which can help you avoid some mistakes.
- 组件需要依赖 `sass` 插件 ，请自行手动安装
- The component needs to depend on the `sass` plugin, please install it manually
- 组件支持 nvue ，需要在 `manifest.json > app-plus` 节点下配置 `"nvueStyleCompiler" : "uni-app"` 
- The component supports nvue, you need to configure `"nvueStyleCompiler" : "uni-app"` under the `manifest.json > app-plus` node
- `uni-forms` 中不包含其他表单组件，如需使用 `uni-easyinput`、`uni-data-checkbox` 等组件，需要自行引入
- `uni-forms` does not contain other form components, if you need to use `uni-easyinput`, `uni-data-checkbox` and other components, you need to import them yourself
- `uni-forms 1.4.0 版本` 发布，请注意文档中兼容问题说明
- `uni-forms version 1.4.0` released, please pay attention to the compatibility problem description in the document
:::
### 基本用法 
### Basic usage

`uni-forms` 组件通常用来做表单校验和提交。每一个 `uni-forms-item` 是它的一个表单域组件，用来承载表单具体内容，`uni-forms-item` 中可以嵌套 `uni-easyinput`、`uni-data-checkbox` 和 `uni-app` 内置的表单组件
The `uni-forms` component is often used for form validation and submission. Each `uni-forms-item` is a form field component of it, which is used to carry the specific content of the form. `uni-easyinput`, `uni-data-checkbox` and `uni-easyinput` can be nested in `uni-forms-item` uni-app` built-in form components

```html
<template>
	<view class="">
		<uni-forms :modelValue="formData">
			<uni-forms-item label="姓名" name="name">
				<uni-easyinput type="text" v-model="formData.name" placeholder="请输入姓名" />
			</uni-forms-item>
			<uni-forms-item label="年龄" name="age">
				<input type="text" v-model="formData.age" placeholder="请输入年龄" />
			</uni-forms-item>
			<uni-forms-item required name="hobby" label="兴趣爱好">
				<uni-data-checkbox multiple v-model="formData.hobby" :localdata="hobby"/>
			</uni-forms-item>
		</uni-forms>
		<button @click="submitForm">Submit</button>
	</view>
</template>
```

### 对齐方式
### Alignment

使用 `label-position` 属性可以设置所有表单域的位置，默认在左侧
Use the `label-position` property to set the position of all form fields, the default is on the left

```html
<template>
	<view class="">
		<uni-forms :modelValue="formData" label-position="top">
			<uni-forms-item label="姓名" name="name">
				<uni-easyinput type="text" v-model="formData.name" placeholder="请输入姓名" />
			</uni-forms-item>
			<uni-forms-item required name="hobby" label="兴趣爱好">
				<uni-data-checkbox multiple v-model="formData.hobby" :localdata="hobby"/>
			</uni-forms-item>
		</uni-forms>
	</view>
</template>
```

## 表单校验
## form validation

表单校验还可以直接通过 `uniCloud web 控制台` 快速根据 `schema` 自动生成表单维护界面，比如新建页面和编辑页面，自动处理校验规则，更多参考[DB Schema](https://uniapp.dcloud.io/uniCloud/schema)
Form validation can also directly use the `uniCloud web console` to automatically generate a form maintenance interface based on `schema`, such as creating new pages and editing pages, and automatically processing validation rules. For more reference [DB Schema](https://uniapp .dcloud.io/uniCloud/schema)

### 如何使用 
### how to use 

1. `uni-forms` 需要通过 `rules` 属性传入约定的校验规则，详细描述下文`校验规则说明`。
1. `uni-forms` needs to pass in the agreed validation rules through the `rules` attribute, which is described in detail below `Validation rules description`.
```html
<!-- rules 内容详见下方完整示例 -->
<!-- For details of rules, see the complete example below -->
<uni-forms ref="form" :rules="rules">
	...
</uni-forms>
```

2. `uni-forms` 需要绑定`model`属性，值为表单的key\value 组成的对象。
2. `uni-forms` needs to bind the `model` property, which is an object composed of the key\value of the form.
```html
<!-- formData、rules 内容详见下方完整示例 -->
<!-- For details of formData and rules, please refer to the complete example below -->
<uni-forms ref="form" :model="formData" :rules="rules">
	...
</uni-forms>
```

3. `uni-forms-item` 需要设置 `name` 属性为当前字段名，字段为 `String|Array` 类型。
3. `uni-forms-item` needs to set the `name` property to the current field name, and the field is of type `String|Array`.
```html
<!-- formData、rules 内容详见下方完整示例 -->
<!-- For details of formData and rules, please refer to the complete example below -->
<uni-forms :modelValue="formData" :rules="rules">
	<uni-forms-item label="姓名" name="name">
		<uni-easyinput type="text" v-model="formData.name" placeholder="请输入姓名" />
	</uni-forms-item>
	<uni-forms-item required :name="['data','hobby']" label="兴趣爱好">
		<uni-data-checkbox multiple v-model="formData.data.hobby" :localdata="hobby"/>
	</uni-forms-item>
</uni-forms>
```

4. 只要使用的组件不管内置组件还是三方组件，只需绑定 v-model，无需其他操作，即可参与校验。
4. As long as the components used are built-in components or third-party components, you only need to bind v-model, and you can participate in the verification without other operations.
5. 如果使用原生 checkbox 或三方组件不支持 v-model 等，只需要给组件绑定 `binddata` 方法即可触发表单校验，无需绑定事件到 `methods` 中，见下方完整示例。
5. If you use native checkboxes or third-party components that do not support v-model, etc., you only need to bind the `binddata` method to the component to trigger form validation, without binding events to `methods`, see the complete example below.
6. `binddata('name',$event.detail.value,'form')"` 方法接受三个值，
6. The `binddata('name',$event.detail.value,'form')"` method accepts three values,
	- 第一个参数传入当前表单组件所在的 name，同当前父组件 `uni-forms-item` 绑定属性 `name` 的值
	- The first parameter passes in the name of the current form component, which is bound to the value of the property `name` with the current parent component `uni-forms-item`
	- 第二个参数传入需要校验的值，内置组件可以通过 `$event.detail.value` 获取到组件的返回值，自定义组件传入需要校验的值即可
	- The second parameter passes in the value that needs to be verified. The built-in component can get the return value of the component through `$event.detail.value`, and the custom component can pass in the value to be verified.
	- 第三个参数传入 `uni-forms` 组件绑定属性 `ref` 的值，通常在多表单的时候需要传入，用来区分表单，如页面中仅有一个 `uni-forms` 可忽略
	- The third parameter passes in the value of the `uni-forms` component binding attribute `ref`, which is usually required when there are multiple forms to distinguish the form. For example, there is only one `uni-forms` in the page, which can be ignored
7. 如果内置 `binddata` 方法无法满足需求，在当前页面的 `methods` 中复写此方法即可，复写此方法需要调用 `uni-forms` 的 `setValue` 来触发表单校验，见下方 `setValue`方法说明
7. If the built-in `binddata` method cannot meet the requirements, you can override this method in the `methods` of the current page. To override this method, you need to call the `setValue` of `uni-forms` to trigger the form validation, see `setValue` below `Method description


::: warning 注意
::: warning attention
- uni-forms 1.4.0 版本后，binddata 方法不在推荐，请使用 uni-forms-item 上的 onFieldChange 方法代替
- After uni-forms version 1.4.0, the binddata method is no longer recommended, please use the onFieldChange method on uni-forms-item instead
:::

**完整示例**
**full example**

::: preview 
> Template
```html
<template>
	<view>
		<uni-forms ref="form" :modelValue="formData" :rules="rules">
			<uni-forms-item label="姓名" name="name">
				<uni-easyinput type="text" v-model="formData.name" placeholder="请输入姓名" />
			</uni-forms-item>
			<uni-forms-item label="邮箱" name="email">
				<input class="input" v-model="formData.email" type="text" placeholder="请输入邮箱" @input="binddata('email',$event.detail.value)" />
			</uni-forms-item>
		</uni-forms>
		<button @click="submit">Submit</button>
	</view>
</template>
			 
```
> Script
```javascript
export default {
	data() {
		return {
			// 表单数据
			// form data
			formData: {
				name: 'LiMing',
				email: 'dcloud@email.com'
			},
			rules: {
				// 对name字段进行必填验证
				// Required validation for the name field
				name: {
					rules: [{
							required: true,
							errorMessage: '请输入姓名',
						},
						{
							minLength: 3,
							maxLength: 5,
							errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符',
						}
					]
				},
				// 对email字段进行必填验证
				// Required validation for email field
				email: {
					rules: [{
						format: 'email',
						errorMessage: '请输入正确的邮箱地址',
					}]
				}
			}
		}
	},
	methods: {
		/**
		 * 复写 binddata 方法，如果只是为了校验，无复杂自定义操作，可忽略此方法
		 * @param {String} name 字段名称
		 * @param {String} value 表单域的值
		 */
		// binddata(name,value){
		// 通过 input 事件设置表单指定 name 的值
		//   this.$refs.form.setValue(name, value)
		// },
		// 触发提交表单
		// trigger submit form
		submit() {
			this.$refs.form.validate().then(res=>{
				console.log('表单数据信息：', res);
			}).catch(err =>{
				console.log('表单错误信息：', err);
			})
		}
	}
}
```
:::

::: danger 注意 （1.4.0后不在用这个限制，name 使用 array 类型可支持）
::: danger Note (this restriction is not used after 1.4.0, the name can be supported by using the array type)
`modelValue` 对象目前有比较严格的格式要求：
The `modelValue` object currently has strict format requirements:
- 尽量不要使用嵌套的数据结构，因为表单域指定的`name`值与 modeValue 的 key 是一一对应的，只有一种情况例外，那就是动态校验表单，见下方`动态校验表单`章节
- Try not to use nested data structures, because the `name` value specified by the form field corresponds to the key of modeValue one-to-one. There is only one exception, that is, the dynamic verification form, see `Dynamic verification form` below chapter
:::

### 校验规则说明
### Validation rule description

校验规则接受一个 `Object` 类型的值，通过传入不同的规则来表示每个表单域的值该如何校验
The validation rule accepts a value of type `Object`, by passing in different rules to indicate how the value of each form field should be validated

对象的 `key` 表示当前表单域的字段名，`value` 为具体的校验规则
The `key` of the object represents the field name of the current form field, and the `value` is the specific validation rule

以下为 `value` 所包含的内容：
Here's what `value` contains:

|属性名|类型|说明|
|property name|type|description|
|:-:|:-:|:-:|
|rules|Array|校验规则，见下方 `rules 属性说明`|
|rules|Array|Validation rules, see below `rules attribute description`|
|validateTrigger| String| 表单校验时机【1.4.0 已废弃】|
|validateTrigger| String| Form validation timing [1.4.0 deprecated]|
|label|String|当前表单域的字段中文名，多用于 `errorMessage` 的显示，可不填|
|label|String|The field Chinese name of the current form field, which is mostly used for the display of `errorMessage`, can be left blank|


```javascript
rules: {
	// 对name字段进行必填验证
	// Required validation for the name field
	name: {
		// name 字段的校验规则
		// Validation rules for the name field
		rules:[
			// 校验 name 不能为空
			// Verify that name cannot be empty
			{
				required: true,
				errorMessage: '请填写姓名',
			},
			// 对name字段进行长度验证
			// Validate the length of the name field
			{
				minLength: 3,
				maxLength: 5,
				errorMessage: '{label}长度在 {minLength} 到 {maxLength} 个字符',
			}
		],
		// 当前表单域的字段中文名，可不填写
		// The field Chinese name of the current form field can be left blank
		label:'姓名',
		validateTrigger:'submit'
	}
}

```


### rules 属性说明
### rules attribute description
每一个验证规则中，可以配置多个属性，下面是一些常见规则属性。实际上这里的规范，与uniCloud的[DB Schema](https://uniapp.dcloud.io/uniCloud/schema?id=validator)规范相同。
In each validation rule, multiple attributes can be configured. The following are some common rule attributes. Actually the specification here is the same as uniCloud's [DB Schema](https://uniapp.dcloud.io/uniCloud/schema?id=validator) specification.

|属性名|类型|默认值|可选值|说明	|
|property name|type|default value|optional value|description|
|:-:|:-:|:-:|:-:|:-:|
|required|Boolean|-|-|是否必填，配置此参数不会显示输入框左边的必填星号，如需要，请配置`uni-forms-item`组件的的required为true|
|required|Boolean|-|-| is required, configuring this parameter will not display the required asterisk on the left side of the input box, if necessary, please configure the required of the `uni-forms-item` component to true|
|range|Array|-|-|数组至少要有一个元素，且数组内的每一个元素都是唯一的。	|
|range|Array|-|-|Arrays must have at least one element, and each element in the array is unique. |
|format|String|-|-|内置校验规则，如这些规则无法满足需求，可以使用正则匹配或者自定义规则	|
|format|String|-|-| Built-in validation rules, if these rules cannot meet the requirements, you can use regular matching or custom rules |
|pattern|RegExp|-|-|正则表达式，注意事项见下方说明|
|pattern|RegExp|-|-|Regular expression, please refer to the note below|
|maximum|Number|-|-| 校验最大值(大于)|
|maximum|Number|-|-| Check the maximum value (greater than)|
|minimum|Number|-|-| 校验最小值(小于)		|
|minimum|Number|-|-| Check the minimum value (less than) |
|maxLength|Number|-|-| 校验数据最大长度		|
|maxLength|Number|-|-| Maximum length of check data |
|errorMessage|String|-|-|校验失败提示信息语，可添加属性占位符，当前表格内属性都可用作占位符|
|errorMessage|String|-|-|Verification failure prompt message, attribute placeholders can be added, and all attributes in the current table can be used as placeholders|
|validateFunction|Function|-|-|自定义校验规则	|
|validateFunction|Function|-|-|Custom validation rules |


**format属性值说明**
**format attribute value description**

|属性名|说明|
|property name|description|
|:-:|:-:|
|string|必须是 string 类型，默认类型|
|string| must be of type string, default type|
|number|必须是 number 类型|
|number|must be of type number|
|boolean|必须是 boolean 类型|
|boolean|must be of type boolean|
|array|必须是 array 类型|
|array|must be of type array|
|object|必须是 object 类型|
|object|must be of type object|
|url|必须是 url 类型|
|url|must be of type url|
|email|必须是 email 类型|
|email|must be of type email|


::: warning pattern属性说明
::: warning pattern attribute description
- 在小程序中，json 中不能使用正则对象，如：`/^\S+?@\S+?\.\S+?$/`，使用正则对象会被微信序列化，导致正则失效。
- In the applet, regular objects cannot be used in json, such as: `/^\S+?@\S+?\.\S+?$/`, the use of regular objects will be serialized by WeChat, resulting in regular invalidation.
- 所以建议统一使用字符串的方式来使用正则 ，如`'^\\S+?@\\S+?\\.\\S+?$'` ，需要注意 `\` 需要使用 `\\` 来转译。
- So it is recommended to use the regular method in a unified way, such as `'^\\S+?@\\S+?\\.\\S+?$'`, it should be noted that `\` needs to use `\\` to translate .
- 如验证邮箱：/^\S+?@\S+?\.\S+?$/ （注意不带引号）,或使用 "^\\S+?@\\S+?\\.\\S+?$"（注意带引号需要使用 `\` 转义）		
- Such as verification email: /^\S+?@\S+?\.\S+?$/ (note no quotation marks), or use "^\\S+?@\\S+?\\.\\S+?$" (note that quotes need to be escaped with `\`)
:::


### validateFunction 自定义校验规则使用说明
### validateFunction Custom Validation Rules Instructions
`uni-forms` 的 `rules` 基础规则有时候不能满足项目的所有使用场景，这时候可以使用 `validateFunction` 来自定义校验规则
The `rules` basic rules of `uni-forms` sometimes cannot meet all the usage scenarios of the project. In this case, you can use `validateFunction` to customize the validation rules

`validateFunction` 方法返回四个参数 `validateFunction:function(rule,value,data,callback){}` ，当然返回参数名开发者可以自定义：
The `validateFunction` method returns four parameters `validateFunction:function(rule,value,data,callback){}` , of course, the returned parameter name can be customized by developers:
 - rule :  当前校验字段在 rules 中所对应的校验规则
 - rule : the validation rule corresponding to the current validation field in rules
 - value : 当前校验字段的值
 - value : the value of the current validation field
 - data	:  所有校验字段的字段和值的对象
 - data : object of fields and values of all validation fields
 - callback : 校验完成时的回调，一般无需执行callback，返回true(校验通过)或者false(校验失败)即可 ，如果需要显示不同的 `errMessage`，如果校验不通过需要执行 callback('提示错误信息')，如果校验通过，执行callback()即可
 - callback : The callback when the verification is completed. Generally, there is no need to execute the callback. Return true (verification passed) or false (verification failed). If you need to display a different `errMessage`, if the verification fails, you need to execute the callback( 'Prompt error message'), if the verification passes, execute callback()


::: warning 注意
::: warning attention
- 需要注意，如果需要使用 `validateFunction` 自定义校验规则,则不能采用 `uni-forms` 的 `rules` 属性来配置校验规则，这时候需要通过`ref`，在`onReady`生命周期调用组件的`setRules`方法绑定验证规则
- It should be noted that if you need to use `validateFunction` to customize the validation rules, you cannot use the `rules` attribute of `uni-forms` to configure the validation rules. In this case, you need to pass `ref` and call it in the `onReady` life cycle Component's `setRules` method binds validation rules
- 无法通过props传递变量，是因为微信小程序会过滤掉对象中的方法，导致自定义验证规则无效。
- Variables cannot be passed through props, because the WeChat MiniApp will filter out the methods in the object, resulting in invalid custom validation rules.
- 如果使用了 `validateFunction` 且 `required` 为 `false`的情况，表现为不填写内容不校验，有内容才校验，所以内容为空时 `validateFunction` 不会执行
- If `validateFunction` is used and `required` is `false`, it means that the content will not be verified if it is not filled in, and the content will be verified, so `validateFunction` will not be executed when the content is empty
::: 


```html
<template>
	<view>
		<uni-forms ref="form" :modelValue="formData">
			<uni-forms-item label="兴趣爱好" required name="hobby">
				<uni-data-checkbox v-model="formData.hobby" multiple :localdata="hobbys" />
			</uni-forms-item>
		</uni-forms>
		<button class="button" @click="submit">校验表单</button>
	</view>
</template>
<script>
export default {
	data() {
		return {
			formData:{
				
			},
			rules: {
				hobby: {
					rules: [{
						required: true,
						errorMessage: '请选择兴趣',
					},{
						validateFunction:function(rule,value,data,callback){
							if (value.length < 2) {
								callback('请至少勾选两个兴趣爱好')
							}
							return true
						}
					}]
				}
			}
		}
	},
	onReady() {
		// 需要在onReady中设置规则
		// Need to set rules in onReady
		this.$refs.form.setRules(this.rules)
	},
	methods: {
		submit(form) {
			this.$refs.form.validate().then(res=>{
				console.log('表单数据信息：', res);
			}).catch(err =>{
				console.log('表单错误信息：', err);
			})
		}
	}
}
</script>
```


### validateFunction 异步校验
### validateFunction asynchronous validation

上面的自定义校验方式为同步校验 ，如果需要异步校验，`validateFunction` 需要返回一个 `Promise` ，校验不通过 执行 `reject(new Error('错误信息'))` 返回对应的错误信息，如果校验通过则直接执行 `resolve()` 即可，在异步校验方法中，不需要使用 `callback` 。
The above custom verification method is synchronous verification. If asynchronous verification is required, `validateFunction` needs to return a `Promise`, and the verification does not return the corresponding error by executing `reject(new Error('error message'))` information, if the verification is passed, just execute `resolve()` directly. In the asynchronous verification method, you do not need to use `callback`.

```html
<template>
	<view>
		<uni-forms :modelValue="formData" ref="form">
			<uni-forms-item name="age" label="年龄">
				<uni-easyinput v-model="formData.age" type="text" placeholder="请输入年龄" />
			</uni-forms-item>
		</uni-forms>
		<button class="button" @click="submit">校验表单</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			formData:{
				age:''
			},
			rules: {
				age: {
					rules: [{
						required: true,
						errorMessage: '请输入年龄',
					},{
						validateFunction: (rule, value, data, callback) => {
							// 异步需要返回 Promise 对象
							// Async needs to return a Promise object
							return new Promise((resolve, reject) => {
								setTimeout(() => {
									if (value > 10 ) {
										// 通过返回 resolve
										// by returning resolve
										resolve()
									} else {
										// 不通过返回 reject(new Error('错误信息'))
										// not by returning reject(new Error('error message'))
										reject(new Error('年龄必须大于十岁'))
									}
								}, 2000)
							})
						}
					}]
				}
			}
		}
	},
	onReady() {
		// 需要在onReady中设置规则
		// Need to set rules in onReady
		this.$refs.form.setRules(this.rules)
	},
	methods: {
		/**
		 * 表单提交
		 * @param {Object} event
		 */
		submit() {
			uni.showLoading()
			this.$refs.form.validate().then(res => {
				uni.hideLoading()
				console.log('表单数据信息：', res);
			}).catch(err => {
				uni.hideLoading()
				console.log('表单错误信息：', err);
			})
		}
	}
}
</script>
```


### 动态表单校验
### Dynamic form validation
::: warning 注意
::: warning attention
- `uni-forms 1.4.0`后更新了动态校验表单的使用方式，请与之前的版本动态表单校验方式进行区分与兼容。
- After `uni-forms 1.4.0`, the way of using dynamic form validation has been updated, please distinguish and be compatible with the previous version of dynamic form validation.
:::

多用于同一个字段需要添加多次的场景，如需要动态创建多个域名参与检验。
It is mostly used in scenarios where the same field needs to be added multiple times, such as the need to dynamically create multiple domain names to participate in the verification.

1. 在 `formData` 中定义个变量用来接受同一个字段的多个结果。
1. Define a variable in `formData` to accept multiple results for the same field.
```javascript
dynamicFormData: {
	email: '',
	// domains 字段下会有多个结果
	// There will be multiple results under the domains field
	domains: []
}
```


2. 使用 `uni-forms-item` 的 `rules` 属性定义单个表单域的校验规则。
2. Use the `rules` property of `uni-forms-item` to define validation rules for a single form field.
```html
<uni-forms-item :label="item.label+' '+index" required
	:rules="[{'required': true,errorMessage: '域名项必填'}]" :key="item.id">
	...
</uni-forms-item>
```

3. `name` 需要动态指定，动态表单推荐使用 Array 类型，内容从左到右为绑定值的调用链。`['domains',index,'value']` 等同于 `dynamicFormData.domains[index].value`
3. `name` needs to be specified dynamically. It is recommended to use the Array type for dynamic forms. The content is the call chain of the bound value from left to right. `['domains',index,'value']` is equivalent to `dynamicFormData.domains[index].value`
```html
<uni-forms-item 
	required
	:label="item.label+' '+index" 
	:name="['domains',index,'value']"
	:rules="[{'required': true,errorMessage: '域名项必填'}]" 
	:key="item.id"
	>
	...
</uni-forms-item>
```

4. 需要绑定值的组件的 v-model 也需要动态指定  `dynamicFormData.domains[index].value`
4. The v-model of the component that needs to bind the value also needs to dynamically specify `dynamicFormData.domains[index].value`
```html
<uni-forms-item 
	required
	:label="item.label+' '+index" 
	:name="['domains',index,'value']"
	:rules="[{'required': true,errorMessage: '域名项必填'}]" 
	:key="item.id"
	>
	<uni-easyinput v-model="dynamicFormData.domains[index].value" placeholder="请输入域名" />
</uni-forms-item>
```

**完整示例**
**full example**

::: preview 
> Template
```html
<uni-forms ref="dynamicForm" :rules="dynamicRules" :model="dynamicFormData">
	<uni-forms-item label="邮箱" required name="email">
		<uni-easyinput v-model="dynamicFormData.email" placeholder="请输入邮箱" />
	</uni-forms-item>
	<template v-for="(item,index) in dynamicFormData.domains">
		<uni-forms-item :label="item.label+' '+index" required
			:rules="[{'required': true,errorMessage: '域名项必填'}]" :key="item.id"
			:name="['domains',index,'value']">
			<view class="form-item">
				<uni-easyinput v-model="dynamicFormData.domains[index].value" placeholder="请输入域名" />
				<button class="button" size="mini" type="default" @click="del(item.id)">删除</button>
			</view>
		</uni-forms-item>
	</template>

</uni-forms>
<view class="button-group">
	<button type="primary" size="mini" @click="add">新增域名</button>
	<button type="primary" size="mini" @click="submit('dynamicForm')">提交</button>
</view>

```
> Script
```javascript
export default {
	data() {
		return {
			// 数据源
			// data source
			dynamicFormData: {
				email: '',
				domains: []
			},
			// 规则
			// rule
			dynamicRules: {
				email: {
					rules: [{
						required: true,
						errorMessage: '域名不能为空'
					}, {
						format: 'email',
						errorMessage: '域名格式错误'
					}]
				}
			}
		}
	},
	methods: {
		// 新增表单域
		// add form field
		add() {
			this.dynamicFormData.domains.push({
				label: '域名',
				value:'',
				id: Date.now()
			})
		},
		// 删除表单域
		// delete form field
		del(id) {
			let index = this.dynamicLists.findIndex(v => v.id === id)
			this.dynamicLists.splice(index, 1)
		},
		// 提交
		// submit
		submit(ref) {
			this.$refs[ref].validate((err,value)=>{
				console.log(err,value);
			})
		},
	}
}
```
:::

### 表单校验时机说明
### Form validation timing description

`uni-forms 1.4.0` 后，只有 `uni-forms`上可以配置 `validateTrigger`，不在支持单独控制没个子表单的校验时机
After `uni-forms 1.4.0`, `validateTrigger` can only be configured on `uni-forms`, and no longer supports independent control of the validation timing of each subform

如果需要子表单需要单独的校验时机，可以使用 `uni-forms-item` 的 `rules` 属性和 `onFieldChange` 配合
If you need a separate validation timing for subforms, you can use the `rules` attribute of `uni-forms-item` in conjunction with `onFieldChange`
```html

<template>
	<view>
		<uni-forms  ref="form" :modelValue="formData" validate-trigger="bind">
			<uni-forms-item name="age" label="年龄">
				<!-- uni-easyinput 的校验时机是数据发生变化， 即触发 input 时 -->
				<!-- The verification timing of uni-easyinput is when the data changes, that is, when the input is triggered -->
				<uni-easyinput v-model="formData.age" type="text" placeholder="请输入年龄" />
			</uni-forms-item>
			<uni-forms-item ref="input"  name="email" label="邮箱">
			 <!-- input 的校验时机 -->
			 <!-- Input validation timing -->
				<input v-model="formData.email"  @blur="(e)=>$refs.input.onFieldChange($event.detail.value)" />
			</uni-forms-item>
			<button class="button" @click="submit">校验表单</button>
		</uni-forms>
	</view>
</template>

```

【1.4.0后此规则已不生效】对于表单校验时机，同时只会有一个 `validateTrigger` 发生作用，它的作用权重为
[This rule no longer takes effect after 1.4.0] For form validation timing, only one `validateTrigger` will work at the same time, and its effect weight is

**`规则 > uni-forms-item > uni-forms `**
**`rules > uni-forms-item > uni-forms `**

- 如果规则里配置 `validateTrigger` ，则优先使用规则里的 `validateTrigger` 属性来决定表单校验时机
- If `validateTrigger` is configured in the rule, the `validateTrigger` attribute in the rule will be used first to determine the timing of form validation
- 如果规则里没有配置 `validateTrigger` ，则优先使用 `uni-forms-item` 的 `validateTrigger` 属性来决定表单校验时机
- If `validateTrigger` is not configured in the rule, the `validateTrigger` attribute of `uni-forms-item` will be used first to determine the form validation timing
- 如果 `uni-forms-item` 组件里没有配置 `validateTrigger` ，则优先使用 `uni-forms` 的 `validateTrigger` 属性来决定表单校验时机
- If `validateTrigger` is not configured in the `uni-forms-item` component, the `validateTrigger` attribute of `uni-forms` will be used first to determine the form validation timing
- 以此类推，如果都没有使用 `validateTrigger` 属性，则会使用 `uni-forms` 的 `validateTrigger` 属性默认值来决定表单校验时机
- By analogy, if the `validateTrigger` attribute is not used, the default value of the `validateTrigger` attribute of `uni-forms` will be used to determine the form validation timing


## API

### Forms Props

|属性名|类型|默认值|可选值|说明|兼容说明|	
|property name|type|default value|optional value|description|compatible description|
|:-:|:-:|:-:|:-:|:-:|:-:|
|model|Object|-|-|表单数据|1.4.0 新增|
|model|Object|-|-|FormData|New in 1.4.0|
|rules|Object|-|-|表单校验规则||
|rules|Object|-|-|Form validation rules||
|validateTrigger|String|submit|bind/submit/blur| 表单校验时机,blur仅在 uni-easyinput 中生效|1.4.0 新增 blur 值|
|validateTrigger|String|submit|bind/submit/blur| Form validation timing, blur is only valid in uni-easyinput|1.4.0 added blur value|
|label-position|String|left|top/left|label 位置||
|label-position|String|left|top/left|label position||
|label-width|String/Number|75|-|label 宽度，单位 px||
|label-width|String/Number|75|-|label width in px||
|label-align|String|left| left/center/right|label 居中方式||
|label-align|String|left| left/center/right|label centering||
|err-show-type|String|undertext| undertext/toast/modal|表单错误信息提示方式||
|err-show-type|String|undertext| undertext/toast/modal|Form error message prompt method||
|border|Boolean|false|-|是否显示分格线||
|border|Boolean|false|-|Whether to display the grid line||
|value|Object|-|-|表单数据，兼容vue2|即将弃用，请使用 model 代替|
|value|Object|-|-|form data, compatible with vue2|will be deprecated, please use model instead|
|modelValue|Object|-|-| 表单数据，兼容vue3|即将弃用，请使用 model 代替|
|modelValue|Object|-|-| form data, compatible with vue3|will be deprecated, please use model instead|

### Forms Events

|事件称名|说明|										
|Event Name|Description|
|:-:|:-:|									
|@validate|任意表单项被校验后触发，返回表单校验信息|		
|@validate|Triggered after any form item is validated, returns form validation information|

### Forms Methods

|方法称名|说明|兼容说明|				
|Method Name|Description|Compatibility Description|
|:-:| :-:|:-:|			
|setRules|动态设置表单规则||
|setRules|Set form rules dynamically||
|validate|对整个表单进行校验的方法，会返回一个 promise||
|validate|The method that validates the entire form will return a promise||
|validateField|部分表单进行校验||
|validateField|Part of the form is validated||
|clearValidate|移除表单的校验结果||
|clearValidate|Remove the validation result of the form||
|submit| 对整个表单进行校验的方法，会返回一个 promise|即将弃用，请使用validate代替|
|submit| The method that validates the entire form will return a promise|will be deprecated, please use validate instead|
|setValue|设置表单某一项 name 的对应值，通常在 uni-forms-item 和自定表单组件中使用|即将弃用，请使用 onFieldChange 兼容相关功能|
|setValue|Set the corresponding value of the name of an item in the form, usually used in uni-forms-item and custom form components|will be deprecated, please use onFieldChange to be compatible with related functions|
|resetFields|重置表单, 需要把 `uni-forms` 的`modelValue`属性改为 `v-model` ,且对内置组件可能不生效|1.4.0 已弃用|
|resetFields|Reset the form, you need to change the `modelValue` property of `uni-forms` to `v-model` , and may not take effect for built-in components|1.4.0 Deprecated|

### validate(keepItem:Array,callback:Function) 方法说明
### validate(keepItem:Array,callback:Function) method description
`validate` 方法是对整个表单进行校验，方法接受两个参数
The `validate` method is to verify the entire form, the method accepts two parameters

|参数称名|类型|说明|						
|parameter name|type|description|
|:-:| :-:|:-:|						
|keepItem|Array|保留不参与校验的字段|
|keepItem|Array|Reserve fields that do not participate in validation|
|callback|Function|校验完成返回函数|
|callback|Function|Verification complete return function|

校验成功后，校验对象只保留指定了`name`的字段（只要 `uni-forms-item` 绑定了 `name`，哪怕不校验，也会返回），如果需要保留其他字段，则需要 `keepItem` 属性
After the verification is successful, the verification object only retains the field specified with `name` (as long as `uni-forms-item` binds `name`, it will return even if it is not verified), if you need to retain other fields, then Requires the `keepItem` attribute

```html

<template>
	<view>
		<uni-forms  ref="form" :modelValue="formData">
			<uni-forms-item name="age" label="年龄">
				<uni-easyinput v-model="formData.age" type="text" placeholder="请输入年龄" />
			</uni-forms-item>
			
			<button class="button" @click="submit">校验表单</button>
		</uni-forms>
	</view>
</template>
<script>
export default {
	data() {
		return {
			formData:{
				age:''
			},
			rules: {
				// ...
			}
		}
	},
	onLoad(){
		this.formData.id = 'testId'
	},
	methods: {
		submit() {
			// 在 onLoad 生命周期中，formData添加了一个 id 字段 ，此时这个字段是不参数校验的，所以结果中不返回
			// In the onLoad life cycle, formData adds an id field. At this time, this field is checked without parameters, so it is not returned in the result.
			// 在 validate(['id']) 方法中，指定第一个参数 ，即可返回id字段
			// In the validate(['id']) method, specify the first parameter to return the id field
			this.$refs.form.validate(['id'],(err,formData)=>{
				if(!err){
					console.log('success',formData)
				}
			})
		}
	}
}
</script>

```


`validate` 方法还可以返回一个 `Promise` 对象，如果使用了 `callback` 则`Promise` 返回 `null`，`validate` 方法会优先使用 `callback`。
The `validate` method can also return a `Promise` object. If `callback` is used, `Promise` returns `null`, and the `validate` method will take precedence over `callback`.

`callback` 方法会返回两个返回值 :
The `callback` method returns two return values:
- 第一个返回值为检验结果，如果校验失败，则返回失败信息，如果成功，返回 `null` 
- The first return value is the verification result, if the verification fails, return the failure information, if successful, return `null`
- 第二个返回值校验数据
- The second return value check data


```javascript

// 使用 callback
// use callback
// 如果不需要 keepItem 参数 ，则可以省略
// If you don't need the keepItem parameter, you can omit it
this.$refs.form.validate((err,formData)=>{
	// 如果校验成功 ，err 返回 null
	// If the verification is successful, err returns null
	if(!err){
		console.log('success',formData)
		return
	}
	console.log('error',err)
}).then(res=>{
	// res 返回 null
	// res returns null
})

// 使用 Promise
// use Promises
// 对整个表单进行校验，返回一个 Promise
// Validate the entire form and return a Promise
this.$refs.form.validate().then((res)=>{
	// 成功返回，res 为表单数据
	// Successfully returned, res is form data
	// 其他逻辑处理 
	// ...
}).catch((err)=>{
	// 表单校验验失败，err 为具体错误信息
	// Form validation failed, err is the specific error message
	// 其他逻辑处理
	// ...
})

```

### setValue(name:String,value:any) 方法说明
### setValue(name:String,value:any) method description

::: warning 注意
::: warning attention
 - uni-forms 1.4.0 后不在推荐使用 ，请使用 `onFieldChange` 代替
 - Deprecated since uni-forms 1.4.0, use `onFieldChange` instead
:::

`setValue` 方法通常用于内置组件或三方组件返回值的校验，因为`uni-esayinput` 等 uni 开头的组件内置了对 `uni-forms`的支持，所以这些组件返回的值可以直接使用，但是比如像`input` 这些内置组件值的变化，无法及时通知 `uni-forms` ，从而无法正常的校验，这时就需要我们手动将这些值加入到`uni-forms`的校验。
The `setValue` method is usually used to verify the return value of built-in components or third-party components. Because components starting with uni such as `uni-esayinput` have built-in support for `uni-forms`, the values returned by these components can be used directly. However, for example, if the value of built-in components such as `input` changes, it cannot notify `uni-forms` in time, so it cannot be properly verified. At this time, we need to manually add these values to the verification of `uni-forms`.

`setValue` 方法接受两个参数：
The `setValue` method accepts two parameters:
- name: 表单域对应的name
- name: the name corresponding to the form field
- value: 表单域对应的值
- value: the value corresponding to the form field

```html

<template>
	<view>
		<uni-forms  ref="form" :modelValue="formData">
			<uni-forms-item name="age" label="年龄">
				<input v-model="formData.age" @input="setValue('age',formData.age)">
			</uni-forms-item>
			<button class="button" @click="submit">校验表单</button>
		</uni-forms>
	</view>
</template>

<script>
export default {
	data() {
		return {
			formData:{
				age:''
			},
			rules: {
				// ...
			}
		}
	},
	methods: {
		setValue(name,value){
			// 设置表单某项对应得值来触发表单校验
			// Set the corresponding value of a form item to trigger form validation
			// 接受两个参数，第一个参数为表单域的 name ，第二个参数为表单域的值
			// accepts two parameters, the first parameter is the name of the form field, and the second parameter is the value of the form field
			this.$refs.form.setValue(name,value)
		},
		submit() {
			this.$refs.form.validate(['id'],(err,formData)=>{
				if(!err){
					console.log('success',formData)
				}
			})
		}
	}
}
</script>

```

### 其他方法说明
### Other method description

```javascript
// 设置规则
// set the rules
this.$refs.form.setRules({
	//...
})

// 部分表单进行校验，接受一个参数，类型为 String 或 Array ，只校验传入 name 表单域的值
// Part of the form is verified, accepting a parameter, the type is String or Array, only the value of the incoming name form field is verified
this.$refs.form.validateField(['name', 'email']).then((res)=>{
	// 成功返回，res 为对应表单数据
	// Successfully returned, res is the corresponding form data
	// 其他逻辑处理 
	// ...
}).catch((err)=>{
	// 表单校验验失败，err 为具体错误信息
	// Form validation failed, err is the specific error message
	// 其他逻辑处理
	// ...
})

// 移除表单校验，接受一个参数，类型为 String 或 Array ，只移除传入 name 表单域的值，如果不传入参数，则移除所有
// Remove form validation, accept one parameter, the type is String or Array, only remove the value passed in the name form field, if no parameter is passed in, remove all
this.$refs.form.clearValidate(['name', 'email'])

```


### FormsItem Props

|属性名|类型|默认值|可选值	|说明|兼容说明|
|property name|type|default value|optional value|description|compatible description|
|:-:|:-:|:-:|:-:|:-:|:-:|
|name|String/Array|-|-|表单域的属性名，在使用校验规则时必填||
|name|String/Array|-|-|The attribute name of the form field, which is required when using the validation rule||
|rules|	Object|	-|	-|	表单校验规则||
|rules| Object| -| -| Form validation rules||
|required|Boolean|false|-|label 右边显示红色"*"号，样式显示不会对校验规则产生效果||
|required|Boolean|false|-|The right side of the label displays a red "*" sign, the style display will not have an effect on the validation rules||
|label|String|-|-| 输入框左边的文字提示||
|label|String|-|-| Text prompt on the left side of the input box||
|label-width|Number|70|-| label的宽度，单位px||
|label-width|Number|70|-| The width of the label, in px||
|error-message|String|-|-|显示的错误提示内容，如果为空字符串或者false，则不显示错误信息||
|error-message|String|-|-|Display the error message content, if it is an empty string or false, the error message will not be displayed||
|label-align|String|left|left/center/right|label的文字对齐方式||
|label-align|String|left|left/center/right|label text alignment||
|label-position|String|left|top/left|label的文字的位置|1.4.0已弃用 ，统一使用 uni-forms 的对齐方式|
|label-position|String|left|top/left|label's text position|Deprecated in 1.4.0, the alignment of uni-forms is used uniformly|
|validateTrigger|String|submit|bind/submit|表单校验时机|1.4.0已弃用，统一使用 uni-forms 的校验时机|
|validateTrigger|String|submit|bind/submit|Form validation timing|Deprecated in 1.4.0, uniformly use uni-forms validation timing|
|left-icon|String|-|-| label左边的图标，限uni-ui的图标名称|1.4.0已弃用 ，请使用 #label 插槽实现相关功能|
|left-icon|String|-|-| The icon on the left of the label, the name of the icon for uni-ui only|Deprecated in 1.4.0, please use the #label slot to realize the related function|
|icon-color|String|#606266|-| 左边通过icon配置的图标的颜色|1.4.0已弃用 ，请使用 #label 插槽实现相关功能|
|icon-color|String|#606266|-| The color of the icon configured by icon on the left|Deprecated in 1.4.0, please use the #label slot for related functions|

### FormsItem Methods

|方法称名|说明|兼容说明|				
|Method Name|Description|Compatibility Description|
|:-:| :-:|:-:|					
|setRules|动态设置表单规则||
|setRules|Set form rules dynamically||
|onFieldChange|校验子表单|1.4.0新增|
|onFieldChange|Validator form|New in 1.4.0|

### FormsItem Slots
|插槽名|说明|
|Slot Name|Description|
|:-:| :-:|
|default|默认插槽|
|default|default slot|
|label|label插槽，自定义label显示内容|
|label|label slot, custom label display content|

## 示例
## example
::: warning 注意
::: warning attention
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。
The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-forms) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-forms) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/forms/forms
> Template
``` html
<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">uni-forms 组件一般由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据。</text>
		</uni-card>
		<uni-section title="基本用法" type="line">
			<view class="example">
				<!-- 基础用法，不包含校验规则 -->
				<!-- Basic usage, excluding validation rules -->
				<uni-forms ref="baseForm" :modelValue="baseFormData">
					<uni-forms-item label="姓名" required>
						<uni-easyinput v-model="baseFormData.name" placeholder="请输入姓名" />
					</uni-forms-item>
					<uni-forms-item label="年龄" required>
						<uni-easyinput v-model="baseFormData.age" placeholder="请输入年龄" />
					</uni-forms-item>
					<uni-forms-item label="性别" required>
						<uni-data-checkbox v-model="baseFormData.sex" :localdata="sexs" />
					</uni-forms-item>
					<uni-forms-item label="兴趣爱好" required>
						<uni-data-checkbox v-model="baseFormData.hobby" multiple :localdata="hobbys" />
					</uni-forms-item>
					<uni-forms-item label="自我介绍">
						<uni-easyinput type="textarea" v-model="baseFormData.introduction" placeholder="请输入自我介绍" />
					</uni-forms-item>
					<uni-forms-item label="日期时间">
						<uni-datetime-picker type="datetime" return-type="timestamp" v-model="baseFormData.datetimesingle"/>
					</uni-forms-item>
				</uni-forms>
			</view>
		</uni-section>

		<uni-section title="对齐方式" type="line">
			<view class="example">
				<view class="segmented-control">
					<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="button">
					</uni-segmented-control>
				</view>
				<!-- 展示不同的排列方式 -->
				<!-- show different arrangements -->
				<uni-forms ref="baseForm" :modelValue="alignmentFormData" :label-position="alignment">
					<uni-forms-item label="姓名" required>
						<uni-easyinput v-model="baseFormData.name" placeholder="请输入姓名" />
					</uni-forms-item>
					<uni-forms-item label="年龄" required>
						<uni-easyinput v-model="baseFormData.age" placeholder="请输入年龄" />
					</uni-forms-item>
				</uni-forms>
			</view>
		</uni-section>

		<uni-section title="表单校验" type="line">
			<view class="example">
				<!-- 基础表单校验 -->
				<!-- Basic form validation -->
				<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData">
					<uni-forms-item label="姓名" required name="name">
						<uni-easyinput v-model="valiFormData.name" placeholder="请输入姓名" />
					</uni-forms-item>
					<uni-forms-item label="年龄" required name="age">
						<uni-easyinput v-model="valiFormData.age" placeholder="请输入年龄" />
					</uni-forms-item>
					<uni-forms-item label="自我介绍" name="introduction">
						<uni-easyinput type="textarea" v-model="valiFormData.introduction" placeholder="请输入自我介绍" />
					</uni-forms-item>
				</uni-forms>
				<button type="primary" @click="submit('valiForm')">提交</button>
			</view>
		</uni-section>

		<uni-section title="自定义校验规则" type="line">
			<view class="example">
				<!-- 自定义表单校验 -->
				<!-- Custom form validation -->
				<uni-forms ref="customForm" :rules="customRules" :modelValue="customFormData">
					<uni-forms-item label="姓名" required name="name">
						<uni-easyinput v-model="customFormData.name" placeholder="请输入姓名" />
					</uni-forms-item>
					<uni-forms-item label="年龄" required name="age">
						<uni-easyinput v-model="customFormData.age" placeholder="请输入年龄" />
					</uni-forms-item>
					<uni-forms-item label="兴趣爱好" required name="hobby">
						<uni-data-checkbox v-model="customFormData.hobby" multiple :localdata="hobbys" />
					</uni-forms-item>
				</uni-forms>
				<button type="primary" @click="submit('customForm')">提交</button>
			</view>
		</uni-section>


		<uni-section title="动态表单" type="line">
			<view class="example">
				<!-- 动态表单校验 -->
				<!-- Dynamic form validation -->
				<uni-forms ref="dynamicForm" :rules="dynamicRules" :modelValue="dynamicFormData">
					<uni-forms-item label="邮箱" required name="email">
						<uni-easyinput v-model="dynamicFormData.email" placeholder="请输入姓名" />
					</uni-forms-item>
					<uni-forms-item v-for="(item,index) in dynamicLists" :key="item.id" :label="item.label+' '+index"
						required :rules="item.rules" :name="'domains[' + item.id + ']'">
						<view class="form-item">
							<uni-easyinput v-model="dynamicFormData.domains[item.id]" placeholder="请输入域名" />
							<button class="button" size="mini" type="default" @click="del(item.id)">删除</button>
						</view>
					</uni-forms-item>
				</uni-forms>
				<view class="button-group">
					<button type="primary" size="mini" @click="add">新增域名</button>
					<button type="primary" size="mini" @click="submit('dynamicForm')">提交</button>
				</view>
			</view>
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
				// 基础表单数据
				baseFormData: {
					name: '',
					age: '',
					introduction: '',
					sex: 2,
					hobby: [5],
					datetimesingle: 1627529992399
				},
				// 表单数据
				alignmentFormData: {
					name: '',
					age: '',
				},
				// 单选数据源
				sexs: [{
					text: '男',
					value: 0
				}, {
					text: '女',
					value: 1
				}, {
					text: '保密',
					value: 2
				}],
				// 多选数据源
				hobbys: [{
					text: '跑步',
					value: 0
				}, {
					text: '游泳',
					value: 1
				}, {
					text: '绘画',
					value: 2
				}, {
					text: '足球',
					value: 3
				}, {
					text: '篮球',
					value: 4
				}, {
					text: '其他',
					value: 5
				}],
				// 分段器数据
				current: 0,
				items: ['左对齐', '顶部对齐'],
				// 校验表单数据
				valiFormData: {
					name: '',
					age: '',
					introduction: '',
				},
				// 校验规则
				rules: {
					name: {
						rules: [{
							required: true,
							errorMessage: '姓名不能为空'
						}]
					},
					age: {
						rules: [{
							required: true,
							errorMessage: '年龄不能为空'
						}, {
							format: 'number',
							errorMessage: '年龄只能输入数字'
						}]
					}
				},
				// 自定义表单数据
				customFormData: {
					name: '',
					age: '',
					hobby: []
				},
				// 自定义表单校验规则
				customRules: {
					name: {
						rules: [{
							required: true,
							errorMessage: '姓名不能为空'
						}]
					},
					age: {
						rules: [{
							required: true,
							errorMessage: '年龄不能为空'
						}]
					},
					hobby: {
						rules: [{
								format: 'array'
							},
							{
								validateFunction: function(rule, value, data, callback) {
									if (value.length < 2) {
										callback('请至少勾选两个兴趣爱好')
									}
									return true
								}
							}
						]
					}

				},
				dynamicFormData: {
					email: '',
					domains: {}
				},
				dynamicLists: [],
				dynamicRules: {
					email: {
						rules: [{
							required: true,
							errorMessage: '域名不能为空'
						}, {
							format: 'email',
							errorMessage: '域名格式错误'
						}]
					}
				}
			}
		},
		computed: {
			// 处理表单排列切换
			alignment() {
				if (this.current === 0) return 'left'
				if (this.current === 1) return 'top'
				return 'left'
			}
		},
		onLoad() {},
		onReady() {
			// 设置自定义表单校验规则，必须在节点渲染完毕后执行
			this.$refs.customForm.setRules(this.customRules)
		},
		methods: {
			onClickItem(e) {
				console.log(e);
				this.current = e.currentIndex
			},
			add() {
				this.dynamicLists.push({
					label: '域名',
					rules: [{
						'required': true,
						errorMessage: '域名项必填'
					}],
					id: Date.now()
				})
			},
			del(id) {
				let index = this.dynamicLists.findIndex(v => v.id === id)
				this.dynamicLists.splice(index, 1)
			},
			submit(ref) {
				this.$refs[ref].validate().then(res => {
					console.log('success', res);
					uni.showToast({
						title: `校验通过`
					})
				}).catch(err => {
					console.log('err', err);
				})
			},
		}
	}
</script>
``` 
> Style
``` html
<style lang="scss">

	.example {
		padding: 15px;
		background-color: #fff;
	}

	.segmented-control {
		margin-bottom: 15px;
	}

	.button-group {
		margin-top: 15px;
		display: flex;
		justify-content: space-around;
	}

	.form-item {
		display: flex;
		align-items: center;
	}

	.button {
		display: flex;
		align-items: center;
		height: 35px;
		margin-left: 10px;
	}
</style>

```
:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/forms/forms)
[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/forms/forms)


