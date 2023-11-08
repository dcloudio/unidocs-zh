
::: tip 组件名：uni-data-picker
::: tip component name: uni-data-picker
> 代码块： `uDataPicker`
> Code block: `uDataPicker`
> 关联组件：`uni-data-pickerview`、`uni-load-more`。
> Associated components: `uni-data-pickerview`, `uni-load-more`.

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-data-picker)
[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-data-picker)
:::


`<uni-data-picker>` 是一个选择类[datacom组件](https://uniapp.dcloud.net.cn/component/datacom)。
`<uni-data-picker>` is a selection class [datacom component](https://uniapp.dcloud.net.cn/component/datacom).

支持单列、和多列级联选择。列数没有限制，如果屏幕显示不全，顶部tab区域会左右滚动。
Single-column and multi-column cascade selections are supported. There is no limit to the number of columns. If the screen is not fully displayed, the top tab area will scroll left and right.

候选数据支持一次性加载完毕，也支持懒加载，比如示例图中，选择了“北京”后，动态加载北京的区县数据。
The candidate data supports one-time loading, and also supports lazy loading. For example, in the example picture, after selecting "Beijing", the district/county data of Beijing is dynamically loaded.

`<uni-data-picker>` 组件尤其适用于地址选择、分类选择等选择类。
The `<uni-data-picker>` component is especially useful for selection classes such as address selection, category selection, etc.

`<uni-data-picker>` 支持本地数据、云端静态数据(json)，uniCloud云数据库数据。
`<uni-data-picker>` supports local data, cloud static data (json), and uniCloud cloud database data.

`<uni-data-picker>` 可以通过JQL直连uniCloud云数据库，配套[DB Schema](https://uniapp.dcloud.net.cn/uniCloud/schema)，可在schema2code中自动生成前端页面，还支持服务器端校验。
`<uni-data-picker>` can directly connect to uniCloud cloud database through JQL, supporting [DB Schema](https://uniapp.dcloud.net.cn/uniCloud/schema), can automatically generate front-end pages in schema2code, Server-side validation is also supported.

在uniCloud数据表中新建表“uni-id-address”和“opendb-city-china”，这2个表的schema自带foreignKey关联。在“uni-id-address”表的表结构页面使用schema2code生成前端页面，会自动生成地址管理的维护页面，自动从“opendb-city-china”表包含的中国所有省市区信息里选择地址。
Create new tables "uni-id-address" and "opendb-city-china" in the uniCloud data table. The schemas of these two tables are associated with foreignKey. On the table structure page of the "uni-id-address" table, use schema2code to generate the front-end page. The maintenance page for address management will be automatically generated, and addresses will be automatically selected from the information of all provinces and cities in China contained in the "opendb-city-china" table.


## 介绍
## introduce

::: warning 注意事项
::: warning Notes
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
> In order to avoid wrong use and bring you a bad development experience, please read the following precautions carefully before using the component, which can help you avoid some mistakes.
- 组件需要依赖 `sass` 插件 ，请自行手动安装
- The component needs to depend on the `sass` plugin, please install it manually
- `<uni-data-picker>` 内部包含了弹出层组件 `<uni-data-pickerview>` 外层的布局可能会影响弹出层，[详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Common_CSS_Questions)
- `<uni-data-picker>` contains the popup layer component `<uni-data-pickerview>` The outer layout may affect the popup layer, [Details](https://developer.mozilla.org/en -CN/docs/Web/CSS/Common_CSS_Questions)
- 云端数据需要关联服务空间
- Cloud data requires associated service space
- 下面示例中使用的表 `opendb-city-china`(中国城市省市区数据，含港澳台), 在[uniCloud控制台](https://unicloud.dcloud.net.cn/)使用opendb创建，[详情](https://gitee.com/dcloud/opendb)
- The table `opendb-city-china` used in the following example (the data of cities, provinces and cities in China, including Hong Kong, Macao and Taiwan), is created using opendb in the [uniCloud console](https://unicloud.dcloud.net.cn/) , [details](https://gitee.com/dcloud/opendb)
:::



### 云端数据
### Cloud data

```vue
<template>
  <view>
    <uni-data-picker placeholder="请选择地址" popup-title="请选择城市" collection="opendb-city-china" field="code as value, name as text" orderby="value asc" :step-searh="true" self-field="code" parent-field="parent_code"
 @change="onchange" @nodeclick="onnodeclick">
    </uni-data-picker>
  </view>
</template>
<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      onchange(e) {
        const value = e.detail.value
      },
      onnodeclick(node) {}
    }
  }
</script>

```





### 本地数据
### local data

```vue
<template>
  <view>
    <uni-data-picker :localdata="items" popup-title="请选择班级" @change="onchange" @nodeclick="onnodeclick"></uni-data-picker>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        items: [{
          text: "一年级",
          value: "1-0",
          children: [
            {
              text: "1.1班",
              value: "1-1"
            },
            {
              text: "1.2班",
              value: "1-2"
            }
          ]
        },
        {
          text: "二年级",
          value: "2-0"
        },
        {
          text: "三年级",
          value: "3-0"
        }]
      }
    },
    methods: {
      onchange(e) {
        const value = e.detail.value
      },
      onnodeclick(node) {
      }
    }
  }
</script>

```


### 自定义 Solt
### Custom Solt

```html
<uni-data-picker v-slot:default="{data, error, options}" popup-title="请选择所在地区">
  <view v-if="error" class="error">
    <text>{{error}}</text>
  </view>
  <view v-else-if="data.length" class="selected">
    <view v-for="(item,index) in data" :key="index" class="selected-item">
      <text>{{item.text}}</text>
    </view>
  </view>
  <view v-else>
    <text>请选择</text>
  </view>
</uni-data-picker>
```


> **注意事项**
> **Notes**
> `localdata` 和 `collection` 同时配置时，`localdata` 优先
> When `localdata` and `collection` are configured at the same time, `localdata` takes precedence


## API

### DataPicker Props

|属性名| 类型|可选值|默认值| 说明|
|property name| type|optional value|default value|description|
|:-:| :-:|:-:| :-:| :-:	|
|v-model|String/ Number	| -|-|绑定数据|
|v-model|String/ Number | -|-|Bind Data|
|spaceInfo|Object|-|-|服务空间配置，[详情](https://uniapp.dcloud.net.cn/uniCloud/init)|
|spaceInfo|Object|-|-|Service space configuration, [Details](https://uniapp.dcloud.net.cn/uniCloud/init)|
|localdata|Array|-|-|数据，[详情](https://gitee.com/dcloud/datacom)|
|localdata|Array|-|-|data, [details](https://gitee.com/dcloud/datacom)|
|preload|Boolean| true/false |false|预加载数据|
|preload|Boolean| true/false |false|Preload data|
|readonly|Boolean| true/false |	false|是否禁用|
|readonly|Boolean| true/false | false|Disabled|
|clear-icon|Boolean| true/false |true|是否显示清除按钮|
|clear-icon|Boolean| true/false |true|whether to show clear button|
|ellipsis|Boolean| true/false |	true|是否隐藏 tab 标签过长的文本|
|ellipsYes|Boolean| true/false | true|whether to hide the long text of the tab label|
|step-searh|Boolean| true/false |true|分步查询时，点击节点请求数据|
|step-searh|Boolean| true/false |true|During step-by-step query, click the node to request data|
|step-search-url|String|-|-|分步查询时，动态加载云端数据url格式，`https://xxx.com/{parentValue}`(当前版本暂不支持，下版支持)|
|step-search-url|String|-|-|Dynamic loading of cloud data url format during step-by-step query, `https://xxx.com/{parentValue}` (current version does not support, the next version supports)|
|self-field|String|-|-|分步查询时当前字段名称|
|self-field|String|-|-|Current field name during step-by-step query|
|parent-field|String|-|-|分步查询时父字段名称|
|parent-field|String|-|-|Parent field name during step-by-step query|
|collection|String|-|-|表名。支持输入多个表名，用 `,` 分割|
|collection|String|-|-|Table name. Supports input of multiple table names, separated by `,`|
|field|String|-|-|查询字段，多个字段用 `,` 分割|
|field|String|-|-|Query field, multiple fields are separated by `,`|
|where|String|-|-|查询条件，内容较多，另见jql文档：[详情](https://uniapp.dcloud.net.cn/uniCloud/uni-clientDB?id=jsquery)|
|where|String|-|-|Query conditions, more content, see also the jql documentation: [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-clientDB?id=jsquery)|
|orderby|String|-|-|排序字段及正序倒叙设置|
|orderby|String|-|-|Order field and reverse order setting|
|popup-title|String|||弹出层标题|
|popup-title|String|||popup layer title|
|map|Object|-|{text:'text',value:'value'}|字段映射，将text/value映射到数据中的其他字段|
|map|Object|-|{text:'text',value:'value'}|Field mapping, map text/value to other fields in the data|

::: warning 注意
::: warning attention
`collection/where/orderby` 和 `<unicloud-db>` 的用法一致，[详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db)
The usage of `collection/where/orderby` and `<unicloud-db>` is the same, [Details](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db)
:::



### DataPicker Events

|事件称名| 类型| 说明|
|EventName|Type|Description|
|:-:| :-:|	:-:|
|@change|EventHandle|选择完成时触发 {detail: {value}}|
|@change|EventHandle|Triggered when selection is complete {detail: {value}}|
|@nodeclick|EventHandle| 节点被点击时触发|
|@nodeclick|EventHandle| Fired when a node is clicked|
|@stepsearch|EventHandle| 动态加载节点数据前触发(当前版本暂不支持，下版支持)	|
|@stepsearch|EventHandle| Triggered before dynamically loading node data (not supported in the current version, supported in the next version) |
|@popupopened|EventHandle| 弹出层弹出时触发|
|@popupopened|EventHandle| Triggered when the popup layer pops up|
|@popupclosed|EventHandle| 弹出层关闭时触发|
|@popupclosed|EventHandle| Fired when the popup layer is closed|

### DataPicker Methods

|方法称名	|说明|参数|
|method name |description|parameters|
|:-:|:-:|:-:|
|show|打开弹出层|-|
|show|Open popup layer|-|
|hide|关闭弹出层|-|
|hide|Close the popup layer|-|
|clear|清除已选项|-|
|clear|Clear selected options|-|

**使用方法：**
**Instructions:**
```js
this.$refs.picker.show() // `picker` 为组件的 ref 名称
```

### DataPicker Slots

|名称|说明|					
|Name|Description|
|:-:|:-:|						
|default|覆盖显示框内容|
|default|Override Display Box Contents|

## 示例
## Example
::: warning 注意
::: warning attention
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。
The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-data-picker) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-data-picker) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/data-picker/data-picker
> Template
``` vue
<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">标签组件多用于商品分类、重点内容显示等场景。</text>
		</uni-card>
		<uni-section title="本地数据" type="line" padding style="height: calc(100vh - 100px);">
			<uni-data-picker placeholder="请选择班级" popup-title="请选择所在地区" :localdata="dataTree" v-model="classes"
				@change="onchange" @nodeclick="onnodeclick" @popupopened="onpopupopened" @popupclosed="onpopupclosed">
			</uni-data-picker>
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
				classes: '1-2',
				dataTree: [{
					text: "一年级",
					value: "1-0",
					children: [{
						text: "1.1班",
						value: "1-1"
					},
					{
						text: "1.2班",
						value: "1-2"
					}]
				},
				{
					text: "二年级",
					value: "2-0",
					children: [{
						text: "2.1班",
						value: "2-1"
					},
					{
						text: "2.2班",
						value: "2-2"
					}]
				},
				{
					text: "三年级",
					value: "3-0",
					disable: true
				}]
			}
		},
		methods: {
			onnodeclick(e) {
				console.log(e);
			},
			onpopupopened(e) {
				console.log('popupopened');
			},
			onpopupclosed(e) {
				console.log('popupclosed');
			},
			onchange(e) {
				console.log('onchange:', e);
			}
		}
	}
</script>
``` 
> Style
``` vue
<style>
	.title {
		font-size: 14px;
		font-weight: bold;
		margin: 20px 0 5px 0;
	}

	.data-pickerview {
		height: 400px;
		border: 1px #e5e5e5 solid;
	}

	 .popper__arrow {
    top: -6px;
    left: 50%;
    margin-right: 3px;
    border-top-width: 0;
    border-bottom-color: #EBEEF5;
}
 .popper__arrow {
    top: -6px;
    left: 50%;
    margin-right: 3px;
    border-top-width: 0;
    border-bottom-color: #EBEEF5;
}
</style>

```
:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/data-picker/data-picker)
[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/data-picker/data-picker)