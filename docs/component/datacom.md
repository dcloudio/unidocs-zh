### 什么是datacom
### What is datacom

`datacom`，全称是`data components`，数据驱动的组件。
`datacom`, with the full name of `data components`, is a data-driven component.

这种组件也是vue组件，是一种子类，是基础组件的再封装。
This component is also a vue component, a subclass, and an encapsulation of basic components.

相比于普通的vue组件，`datacom`组件的特点是，给它绑定一个data，data中包含**一组**候选数据，即可自动渲染出结果。
Compared with ordinary vue components, the feature of the `datacom` component is that if a data containing  **a group of** candidate data is bound, the result can be automatically rendered.

比如 [uni-data-checkbox](https://ext.dcloud.net.cn/plugin?id=3456) 组件，给它绑定一个data，即可直接生成一组选择框。
For example, if the [uni-data-checkbox](https://ext.dcloud.net.cn/plugin?id=3456) component is bound to a data, a set of select boxes can be directly generated.

```html
<template>
    <!-- 传入符合 datacom 规范的数据，即可渲染出一组 checkbox -->
    <!-- Pass in data that meets the datacom specification to render a set of checkboxes -->
    <!-- 使用 v-model 双向绑定 checkbox 的选中值 -->
    <!-- Use v-model to bind the selected value of checkbox in two ways-->
    <uni-data-checkbox v-model="value" :localdata="options" multiple></uni-data-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        value: ['sh'],
        options: [
          {value: 'bj',text: '北京'},
          {value: 'sh',text: '上海'},
          {value: 'gz',text: '广州'}
        ],
      };
    },
  };
</script>
```

而使用基础组件的写法，代码量则要增加很多，如下：
For the writing mode with basic components, the code lines will increase a lot, as follows:

```html
<template>
    <view>
        <view class="uni-list">
            <checkbox-group @change="checkboxChange">
                <label class="uni-list-cell" v-for="item in items" :key="item.value">
                    <view>
                        <checkbox :value="item.value" :checked="item.checked" />
                    </view>
                    <view>{{item.name}}</view>
                </label>
            </checkbox-group>
        </view>
    </view>
</template>
<script>
    export default {
        data() {
            return {
                items: [{
                        value: 'bj',
                        name: '北京'
                    },
                    {
                        value: 'sh',
                        name: '上海',
                        checked: 'true'
                    },
                    {
                        value: 'gz',
                        name: '广州'
                    }
                ]
            }
        },
        methods: {
            checkboxChange: function (e) {
                var items = this.items,
                    values = e.detail.value;
                for (var i = 0, lenI = items.length; i < lenI; ++i) {
                    const item = items[i]
                    if(values.includes(item.value)){
                        this.$set(item,'checked',true)
                    }else{
                        this.$set(item,'checked',false)
                    }
                }
            }
        }
    }
</script>

<style>
.uni-list-cell {
    justify-content: flex-start
}
</style>
```


图例：
![](https://img-cdn-aliyun.dcloud.net.cn/stream/plugin_screens/f5c64490-2994-11eb-a554-03adfa49bb37_0.jpg)

### 什么是datacom组件规范
### What is datacom component specification

显然，datacom组件不是只有一个`<uni-data-checkbox>`，radio、check、select、picker、segement、tree...还有很多组件都可以成为datacom组件，变成类似`<uni-data-picker>`。
Obviously, there is more than one `<uni-data-checkbox>` for datacom component , radio, check, select, picker, segement, tree ... and many other components can become datacom components and become similar `<uni-data-picker>`.

那么“datacom组件规范”，就定义了什么是`datacom组件`，以及它们的互联互通标准。
In this way, the "datacom component specification" defines what is `datacom component` and their interconnection standards.

所有开发者，都可以在 [DCloud插件市场](https://ext.dcloud.net.cn) 提交符合`datacom组件规范`的组件。在插件市场组件分类下可以找到所有已上传的datacom组件，[详见](https://ext.dcloud.net.cn/search?&q=DataCom&orderBy=Relevance)
All developers can submit components that meet `datacom component specification` in the [DCloud plug-in market](https://ext.dcloud.net.cn). All uploaded datacom components can be found under the component category of plug-in market. [See details](https://ext.dcloud.net.cn/search?&q=DataCom&orderBy=Relevance)

详细的“datacom组件规范”见后文。
See the "datacom component specification" below for details.

### datacom对于开发者的好处
### Benefits of datacom to developers

datacom组件，对服务器数据规范、前端组件的数据输入和输出规范，做了定义。它提升了产业的标准化程度、细化了分工，提升了效率。
datacom components define the data specification of server, and the data input and output specifications of front-end components. It enhances the degree of standardization of the industry, refines the division of work and improves the efficiency.

且不论产业影响，对开发者个人而言，显而易见的好处也很多：
Regardless of the industry influence, there are many obvious benefits to developers:

- 更少的代码量。从前述的传统写法对比可见，使用datacom的前端页面，代码量可减少一半以上。
- Less code quantity. From the comparison of traditional writing mentioned above, it can be seen that the amount of code can be reduced by more than half by using the front-end page of datacom.
- 设计更加清晰。服务器端给符合规范的数据，然后接受选择的结果数据。中间的ui交互无需关心。
- Clearer design. The server provides the data conforming to the specification, and then accepts the selected result data. The ui interactions wherein do not matter.
- 结合 [uni-forms](https://ext.dcloud.net.cn/plugin?id=2773) 组件，自动实现表单校验。
- Combined with the [uni-forms](https://ext.dcloud.net.cn/plugin?id=2773) component, form validation is automatically realized.
- 搭配 uniCloud 的[unicloud-db组件](https://uniapp.dcloud.io/uniCloud/clientdb)，数据库查询结果直接绑定给`datacom组件`，服务器代码直接就不用写了
- With uniCloud's [unicloud-db component](https://uniapp.dcloud.io/uniCloud/clientdb), if the database query results are directly bound to `datacom component`, the server code does not need to be written directly
- 搭配 uniCloud 的[schema2code页面生成系统](https://uniapp.dcloud.net.cn/uniCloud/schema?id=autocode)，数据库定义好schema，前端页面就不用写了，自动生成
- With uniCloud's [schema2code page generation system](https://uniapp.dcloud.net.cn/uniCloud/schema?id=autocode), if the schema is defined in the database, the front-end page does not need to be written and is automatically generated
- 互操作性。可以轻易的切换更好的组件
- Interoperability. It will be easy to switch to better components.

举个例子，假使我们想实现一个城市选择的业务。
For example, suppose we want to realize the transaction of city selection.
1. 首先在uniCloud的数据库里，建一个城市表。
1. Firstly, build a city list in uniCloud database.
2. 然后前端写一个组件`<xx-data-citypicker>`
2. Then write a component `<xx-data-citypicker>` on the front end
3. 最后用`unicloud-db组件`把数据库的城市表数据拉下来，绑定给`<xx-data-citypicker>`
3. Finally, use `unicloud-db component` to pull down the city table data of the database and bind it to `<xx-data-citypicker>`
4. 在传统开发里，这个功能要写很长的代码，现在变得特别轻松。
4. This feature, in traditional development, used to require much code, but now is particularly easy.
5. 额外的，开发者将可以在插件市场找到多个城市选择组件，它们都符合`datacom组件规范`，可能有的是全屏选择、有的是底部半屏选择，有的顶部有搜索框、有的右侧有索引字母....不管什么样的城市选择组件，你都可以随便的换，反正它们都符合一个数据规范。
5. In addition, developers will be able to find multiple city selection components in the plug-in market, all of which meet `datacom component specification`. There may be full-screen options, half-screen options at the bottom, search boxes at the top, index letters at the right ... No matter what kind of city selection components, you can change them at will, because they all conform to a data specification.


### datacom组件规范
### datacom component specification

1. 命名以 -data- 为中间分隔符，前面为组件库名称，后面是组件功能表达
1. Naming with -data- as the middle separator, the front part is the component library name and the rear part is component function expression
2. 组件可以通过属性赋值，绑定一个 data 数据。可以是本地的localdata，也可以直接指定uniCloud云数据库的查询结果。详见下文的《数据绑定规范》
2. Components can bind a data by assigning values to attributes. It can be localdata, or the query result directly specified by uniCloud cloud database. See the Data Binding Specification below for details.
3. data数据是一组候选json数据。数据可以是平铺的数组，也可以是嵌套的树形结构。详见下文的《数据结构规范》
3. data is a set of candidate json data. Data can be a tiled array or a nested tree structure. See the Data Structure Specification below for details.
4. 符合 `<uni-forms>` 组件的表单校验规范
4. Conform to the form validation specification of the `<uni-forms>` component

#### 数据结构规范
#### Data structure specification

datacom组件接受的数据结构，包含了“数组”和“树”两种数据结构规范。
The data structure accepted by datacom component includes two data structure specifications: "array" and "tree".

1. 数组类型数据：
1. Array type data:

- 规范：
- Specification:

data数据是一组可循环的数据集合。数组中每条数据如下基本key：
data is a recyclable data set. Each piece of data in the array has the following basic key:

|key		|描述						|
| key| Describe|
|--			|--							|
|value		|值。必填					|
| value| Value. Required|
|text		|显示文字。必填				|
| text| Display text. Required|
|selected	|是否默认选中。默认值false	|
| selected| Whether it is selected by default. The default value is false|
|disable	|是否禁用。默认值false		|
| disable| Disable or not. The default value is false|
|group		|分组标记					|
| group| Grouping mark|

如果熟悉html的`<select>`标签的话，其`<option>`标签的属性也是value、text、selected。
If you are familiar with the `<select>` tag of html, the attributes of the `<option>` tag are also value, text, and selected.

除了这些基本key，开发者也可以自由扩展key。比如电影票、机票、火车票的选座，都需要扩展额外的信息：行、列、单元格类型（座位或过道）等。
In addition to these basic key, developers are also free to extend key. For example, the seat selection of movie tickets, air tickets and train tickets all require additional information: rows, columns, cell types (seats or aisles), etc.

完整的 JSON Schema 定义详见：[https://gitee.com/dcloud/datacom/blob/master/array.schema.json](https://gitee.com/dcloud/datacom/blob/master/array.schema.json)
For the complete JSON Schema definition, please refer to [https://gitee.com/dcloud/datacom/blob/master/array.schema.json](https://gitee.com/dcloud/datacom/blob/master/array.schema.json)

- 数据示例：
- Data example:
```json
[
{"value": "bj","text": "北京"},
{"value": "sh","text": "上海"}
]
```

- 组件示例：[uni-data-checkbox](https://ext.dcloud.net.cn/plugin?id=3456)
- Component example: [uni-data-checkbox](https://ext.dcloud.net.cn/plugin?id=3456)

- 使用示例：
- Usage example:
```html
	<template>
		<!-- 传入符合 datacom 规范的数据，即可渲染出一组 checkbox -->
		<!-- Pass in data that meets the datacom specification to render a set of checkboxes -->
		<!-- 使用 v-model 双向绑定 checkbox 的选中值 -->
		<!-- Use v-model to bind the selected value of checkbox in two ways-->
		<uni-data-checkbox v-model="value" :localdata="options" multiple></uni-data-checkbox>
	</template>
	<script>
	  export default {
		data() {
		  return {
			value: ['bj'],
			options: [
			  { value: "bj", text: "北京" },
			  { value: "sh", text: "上海" },
			],
		  };
		},
	  };
	</script>
```

2. 树类型数据：
2. Tree type data:

- 规范：
- Specification:

data数据是可遍历嵌套的数据集合。数组中每条数据如下基本key：
data is a traversable nested data set. Each piece of data in the array has the following basic key:

|key		|描述												|
| key| Describe|
|--			|--													|
|value		|值。必填											|
| value| Value. Required|
|text		|显示文字。必填										|
| text| Display text. Required|
|selected	|是否默认选中。默认值false							|
| selected| Whether it is selected by default. The default value is false|
|disable	|是否禁用。默认值false								|
| disable| Disable or not. The default value is false|
|isleaf		|是否为叶子节点。默认值false，为true时会忽略children|
| isleaf| Whether it is a leaf node. The default value is false, and true indicates ignoring the children|
|children	|子节点。其值的格式与父节点相同						|
| children| Child node. Its value has the same format as the parent node|

完整的 JSON Schema 定义详见：[https://gitee.com/dcloud/datacom/blob/master/tree.schema.json](https://gitee.com/dcloud/datacom/blob/master/tree.schema.json)
For the complete JSON Schema definition, please refer to [https://gitee.com/dcloud/datacom/blob/master/tree.schema.json](https://gitee.com/dcloud/datacom/blob/master/tree.schema.json)


- 数据示例：
- Data example:
```json
[{
"value": "110000",
"text": "北京市",
"children": [{
	"value": "110105",
	"text": "朝阳区"
}, {
	"value": "110108",
	"text": "海淀区"
}]
}]
```

- 组件示例：[uni-data-picker](https://ext.dcloud.net.cn/plugin?id=3796)
- Component example: [uni-data-picker](https://ext.dcloud.net.cn/plugin?id=3796)

- 使用示例：
- Usage example:
```html
	<template>
	  <!-- 传入符合 datacom 规范的数据，即可渲染出一个选择器  -->
	  <!-- Pass in data that meets the datacom specification to render a selector -->
	  <!-- 使用 v-model 双向绑定 picker 的选中值 -->
	  <!-- Use v-model to bind the selected value of picker in two ways-->
	  <uni-data-picker v-model="value" :localdata="items"></uni-data-picker>
	</template>
	<script>
	  export default {
		data() {
		  return {
			value: ["110000","110105"],
			items: [{
				"value": "110000",
				"text": "北京市",
				"children": [{
					"value": "110105",
					"text": "朝阳区"
				}, {
					"value": "110108",
					"text": "海淀区"
				}]
			}],
		  };
		},
	  };
	</script>
```

#### 数据绑定规范
#### Data binding specification

`datacom组件	`的data，可以来自页面本地，即localdata；也可以直接指定uniCloud的云数据库查询结果，即指定collection表名、field字段名、where条件，这些写法与`unicloud-db组件`的写法相同，如果localdata和collection同时存在，优先使用localdata。
The data of `datacom component	` can come from the page local, i.e., localdata, or can directly specify the cloud database query result of uniCloud, i.e., specify the collection table name, field name, and where condition. These writing methods are the same as those of `unicloud-db component`. If both localdata and collection exist, localdata is preferred.

localdata的示例上文已经举例，下面来看下直接指定uniCloud云数据库查询的写法。
Examples of localdata have been given above. Let's move on to the writing mode of directly specifying the uniCloud cloud database query.

```html
	<template>
		<!-- 传入符合 datacom 规范的数据，即可渲染出一组 checkbox -->
		<!-- Pass in data that meets the datacom specification to render a set of checkboxes -->
		<!-- 使用 v-model 双向绑定 checkbox 的选中值 -->
		<!-- Use v-model to bind the selected value of checkbox in two ways-->
		<uni-data-checkbox v-model="value" collection="" where="" field="" multiple></uni-data-checkbox>
	</template>
	<script>
	  export default {
		data() {
		  return {
			
		  };
		},
	  };
	</script>
```

collection表名、field字段名、where条件的写法，详见[clientDB组件文档](https://uniapp.dcloud.net.cn/uniCloud/uni-clientdb-component?id=%e5%b1%9e%e6%80%a7)
For the writing of collection table name, field name, and where condition, please refer to [clientDB component documentation](https://uniapp.dcloud.net.cn/uniCloud/uni-clientdb-component?id=%e5%b1%9e%e6%80%a7)

当然，支持绑定uniCloud数据，对于datacom组件规范来说，是可选的。
Of course, it supports the binding of uniCloud data, and it is optional for datacom component specification.

更为常见的场景，是在整个页面组件外围套一个clientDB组件，一次性查库，把查询结果的data分拆赋值给不同的datacom组件。
A more common scenario is to install a clientDB component around the whole page component, conduct database query once, and split the data of the query result into different datacom components.

datacom组件规范还要求支持绑定 value，且支持双向绑定，即：支持`v-model`指令。这同时也是为了uni-forms的表单校验。
The datacom component specification also requires that the binding value is supported, and two-way binding is supported, that is, the `v-model` instruction is supported. This is also for the form verification of uni-forms.

#### 组件属性规范
#### Component attribute specifications

##### 分步查询属性规范
##### Query attribute specifications step by step

当`datacom组件`的data来自uniCloud的云数据库或cdn等云端，且数据量较大时，我们通常可以选择分步查询来优化用户体验，如以下场景：
When the data of `datacom component` comes from uniCloud's cloud database or cdn and other clouds, and the amount of data is large, we can usually choose step-by-step query to optimize the user experience, such as the following scenarios:

1. 树组件：点击父节点时，动态加载该父节点的子节点
1. Tree component: when a parent node is clicked, the child node of the parent node is dynamically loaded.
2. 列表组件：点击下一页，动态加载下一页数据
2. List component: click next page to dynamically load the data of the next page

`datacom组件`为分步查询云端数据，设计了以下组件属性、事件：
`datacom component` designs the following component attributes and events for step-by-step query of cloud data:

|属性名			|类型		|默认值	|说明																				|
| Attribute name| Type| Defaults| Instruction|
|--				|--			|--		|--																					|
|step-search		|Boolean	|true	|是否分步查询云端数据。常用于树，picker，分页列表等，参考：`uni-data-picker`		|
| step-search| Boolean| true| Whether to query cloud data step-by-step. Commonly used in trees, pickers, paging lists, etc., refer to `uni-data-picker`|
|step-search-url|String		|		|分步查询的云端数据请求地址。常用于树，picker，分页列表等，参考：`uni-data-picker`	|
| step-search-url| String| | Request address of cloud data query step-by-step. Commonly used in trees, pickers, paging lists, etc., refer to `uni-data-picker`|
|self-field	|String		|		|"树"结构的当前字段名称。常用于树，picker，参考：`uni-data-picker`					|
| self-field| String| | The current field name of the "tree" structure. Commonly used in trees, picker, refer to `uni-data-picker`|
|parent-field	|String		|		|"树"结构的父字段名称。常用于树，picker，参考：`uni-data-picker`					|
| parent-field| String| | The parent field name of the "tree" structure. Commonly used in trees, picker, refer to `uni-data-picker`|
|@stepsearch	|EventHandle|		|分步查询数据时触发。可用于自定义分步查询数据，参考：`uni-data-picker`				|
| @stepsearch| EventHandle| | Triggered when querying data step-by-step. Can be used to customize step-by-step query data, refer to: `uni-data-picker`|

##### 弹出类属性规范
##### Pop-up class attribute specification

`datacom组件`为弹出类组件，设计了以下组件属性、事件：
`datacom component` designs the following component attributes and events for pop-up components:

|属性名			|类型		|默认值	|说明										|
| Attribute name| Type| Defaults| Instruction|
|--				|--			|--		|--											|
|preload		|Boolean	|false	|是否预加载云端数据。参考：`uni-data-picker`|
| preload| Boolean| false| Whether to preload cloud data. Refer to: `uni-data-picker`|
|@popupopened	|EventHandle|		|组件弹出显示时触发。参考：`uni-data-picker`|
| @popupopened| EventHandle| | Triggered when the component pop-up displays. Refer to: `uni-data-picker`|
|@popupclosed	|EventHandle|		|组件弹出关闭时触发。参考：`uni-data-picker`|
| @popupclosed| EventHandle| | Triggered when the component pop-up closes. Refer to: `uni-data-picker`|


### datacom的局限
### Limitations of datacom

- 与基础代码相比，datacom用起来简单，但封装一层后导致其灵活性不如基础组件。如有个性化逻辑则有可能需要改组件源码。
- Compared with the basic code, datacom is simple to use, but its flexibility is not as good as that of the basic component after encapsulation for one level. If there is personalized logic, it may be necessary to change the component source code.
- datacom覆盖范围主要是选择类组件。按钮类、输入类组件并不适合做成datacom。
- datacom covers mainly the selection components. It is not suitable to design the button and input components as datacom.

### 有哪些组件可做成datacom
### What components can be designed as datacom

选择类组件很多，基本逻辑都是在指定的数据范围内，选择其中的一个或多个。
There are many selection components, and the basic logic is to select one or more of them within the specified data range.

根据不同维度可以划分为：
According to different dimensions, it can be divided into:

- 选择模式：单选、多选
- Selection mode: single choice or multiple choice
- 数据结构：数组、树、数值范围
- Data structure: array, tree, number range
- 展现方式：平铺、弹出
- Presentation mode: tiling and pop-up
- 使用场景：表单、展示
- Usage scenarios: forms, presentations

这里列一下常见的选择类组件，以及它们按不同维度的分类，有助于更透彻的理解它们的本质
Here's a list of common selection components and their classification according to different dimensions, which will be helpful to better understand their essence

|组件				|选择模式	|数据结构	|展现方式	|使用场景	|说明									|
| Component| Selection mode| Data structure| Illustration mode| Scenes of use| Instruction|
|--					|--			|--			|--			|--			|--										|
|radio(单选框)		|单选		|数组		|平铺		|表单		|列表单选、按钮组单选、标签组单选		|
| radio (radio box)| Single choice| Array| Tile| Form| List radio, button group radio and label group radio|
|checkbox(多选框)	|多选		|数组		|平铺		|表单		|列表多选、按钮组多选、标签组多选		|
| checkbox (check box)| Multiple choice| Array| Tile| Form| List checkbox, button group checkbox and label group checkbox|
|select(下拉列表)	|单选、多选	|数组		|弹出		|表单		|单选下拉列表、多选下拉列表				|
| select (drop down list)| Single selection, multiple selection| Array| Pop up| Form| Radio drop-down list and checkbox drop-down list|
|picker(滚动选择器)	|单选		|数组、树	|弹出		|表单		|单列选择器（数组）、多列选择器（树）	|
| picker (scrolling picker)| Single choice| Array, Tree| Pop up| Form| Single column picker (array), multi-column picker (tree)|
|cascader(级联选择)	|单选、多选	|树			|弹出		|表单		|										|
| cascader (cascade selection)| Single selection, multiple selection| Tree| Pop up| Form| |
|transfer(穿梭框)	|多选		|数组		|平铺		|表单		|										|
| transfer (shuttle box)| Multiple choice| Array| Tile| Form| |
|slider(滑块)		|单选		|数字范围	|平铺		|表单		|										|
| slider (slider)| Single choice| Number range| Tile| Form| |
|rate(评分)			|单选		|数字范围	|平铺		|表单		|										|
| rate| Single choice| Number range| Tile| Form| |
|stepper(步进器)		|单选		|数字范围	|平铺		|表单		|										|
| stepper (stepper)| Single choice| Number range| Tile| Form| |
|表头筛选			|多选		|数组		|弹出		|表单		|										|
| Header filter| Multiple choice| Array| Pop up| Form| |
|城市选择			|单选		|树			|弹出、平铺	|表单		|										|
| City selection| Single choice| Tree| Pop-up, tile| Form| |
|segement(分段器)	|单选		|数组		|平铺		|展示		|										|
| segement (segmenter)| Single choice| Array| Tile| Exhibit| |
|侧边导航			|单选		|数组		|平铺		|展示		|										|
| Side navigation| Single choice| Array| Tile| Exhibit| |
|tree(树状控件)		|单选、多选	|树			|平铺		|展示		|										|
| tree (tree control)| Single selection, multiple selection| Tree| Tile| Exhibit| |

欢迎开发者们开发这些`datacom组件`。插件市场提供了[datacom组件专区](https://ext.dcloud.net.cn/search?&q=DataCom&type=UpdatedDate)，给予更高的显示权重。


### 使用mixinDatacom快速开发datacom@mixindatacom
### Use mixinDatacom to quickly develop datacom@mixindatacom

> 版本要求：HBuilderX 3.1.0+ 
> Version requirement: HBuilderX 3.1.0+

开发一个支持localdata的datacom组件相对容易，但要开发支持云端数据的datacom组件，实现对collection、field、where等属性的解析，工作量还是不小的。
It is relatively easy to develop a datacom component that supports localdata, but there will be a lot of work to develop a datacom component that supports cloud data and realize the analysis of collection, field, where and other attributes.

为此官方提供了一个mixin混入库，开发者在自己的datacom组件中混入`uniCloud.mixinDatacom`，即可方便的让自己的组件支持本地和云端的数据绑定，快速完成datacom组件。
For this reason, the official provides a mixin library. Developers can mix `uniCloud.mixinDatacom` into their datacom components to easily enable their components to support local and cloud data binding, and quickly complete datacom components.

mixin是vue的技术，不熟悉的可以点此了解[vue官网的mixin文档](https://cn.vuejs.org/v2/api/#Vue-mixin)
mixin is the technology of vue. If you are not familiar with it, please refer to [mixin document on vue official website](https://cn.vuejs.org/v2/api/#Vue-mixin)

#### 语法手册
#### Grammar Manual

`uniCloud.mixinDatacom` 的props
props of `uniCloud.mixinDatacom`

与标准的datacom组件相同，除了localdata外，其他都是`uniCloud-db组件`的标准属性。
It is the same as the standard datacom component, except for localdata, the others are all standard attributes of `uniCloud-db component`.

|属性名						| 类型			| 	默认值		| 说明|
| Attribute name| Type| Defaults| Instruction|
|:-:						| :-:			| :-:			| :-:	|
|localdata					|Array			|				|本地数据，[详情](https://uniapp.dcloud.net.cn/component/datacom)|
| localdata| Array| | Local data, [Details](https://uniapp.dcloud.net.cn/component/datacom)|
|spaceInfo					|Object     |				|服务空间信息，新增于`HBuilderX 3.2.11`。同uniCloud.init参数，参考：[uniCloud.init](uniCloud/init.md?id=init-unicloud)|
|spaceInfo |Object | |Service space information, added in `HBuilderX 3.2.11`. Same as uniCloud.init parameter, reference: [uniCloud.init](uniCloud/init.md?id=init-unicloud)|
|collection					|String			|				|表名。支持输入多个表名，用 `,` 分割|
| collection| String| | Table Name. Support input of multiple table names, separated by `,`|
|field						|String			|				|查询字段，多个字段用 `,` 分割|
| field| String| | Query field, multiple fields are separated by `,`|
|where						|String			|				|查询条件，内容较多，另见jql文档：[详情](https://uniapp.dcloud.net.cn/uniCloud/uni-clientDB?id=jsquery)|
| where| String| | For more information about query conditions, see also jql document: [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-clientDB?id=jsquery)|
|orderby					|String			|				|排序字段及正序倒叙设置|
| orderby| String| | Sorting field and forward and reverse sequence settings|
|groupby					|String			|				|对数据进行分组|
| groupby| String| | Group data|
|group-field				|String			|				|对数据进行分组统计|
| group-field| String| | Group data for statistics|
|distinct					|Boolean		|	false		|是否对数据查询结果中重复的记录进行去重|
| distinct| Boolean| false| Whether to remove duplicate records from the data query results|
|action						|string			|				|云端执行数据库查询的前或后，触发某个action函数操作，进行预处理或后处理，[详情](https://uniapp.dcloud.net.cn/uniCloud/uni-clientDB?id=%e4%ba%91%e7%ab%af%e9%83%a8%e5%88%86)。场景：前端无权操作的数据，比如阅读数+1|
| action| string| | Before or after the database query is executed in the cloud, an action function is triggered to perform pre-processing or post-processing, [Details](https://uniapp.dcloud.net.cn/uniCloud/uni-clientDB?id=%e4%ba%91%e7%ab%af%e9%83%a8%e5%88%86). Scenario: data that the front-end has no right to operate, such as pageview +1|
|page-data					|String			|	add			|分页策略选择。值为 `add` 代表下一页的数据追加到之前的数据中，常用于滚动到底加载下一页；值为 `replace` 时则替换当前data数据，常用于PC式交互，列表底部有页码分页按钮|
| page-data| String| add| Paging strategy selection. The value of `add` means that the data of the next page is appended to the previous data, which is often used to scroll to the bottom to load the next page; When the value is `replace`, it replaces the current data, which is often used for PC-style interaction. There is a paging button at the bottom of the list.|
|page-current				|Number			|	0			|当前页|
| page-current| Number| 0| Current page|
|page-size					|Number			|	20			|每页数据数量|
|page-size |Number | 20 |Number of data per page|
|getcount					|Boolean		|	false		|是否查询总数据条数，默认 `false`，需要分页模式时指定为 `true`|
| getcount| Boolean| false| Whether to query the total number of data items, the default is `false`, and when paging mode is required, specify it as `true`|
|getone						|Boolean		|	false		|指定查询结果是否仅返回数组第一条数据，默认 false。在false情况下返回的是数组，即便只有一条结果，也需要[0]的方式获取。在值为 true 时，直接返回结果数据，少一层数组。一般用于非列表页，比如详情页|
| getone| Boolean| false| Specifies whether the query result returns only the first data of the array, which is false by default. In case of false, return the array, even if there is only one result, it needs to be obtained with the method of [0]. When the value is true, returned the result data directly and lost one layer of array. Generally used for non-list pages, such as details pages|
|gettree					|Boolean		|	false		|是否查询树状数据，默认 `false`|
| gettree| Boolean| false| Whether to query tree data, the default is `false`|
|startwith					|String			|	''			|`gettree`的第一层级条件，此初始条件可以省略，不传startWith时默认从最顶级开始查询|
| startwith| String| ''| The first level condition of `gettree` can be omitted. If startWith is not sent, the query starts from the top level by default|
|limitlevel					|Number			|	10			|`gettree`查询返回的树的最大层级。超过设定层级的节点不会返回。默认10级，最大15，最小1|
| limitlevel| Number| 10| `gettree` queries the maximum level of the returned tree. If nodes beyond the set level, it will not return. level 10 by default, with level 15 as maximum and 1 as minimum|
|foreign-key				|String			|	''			|手动指定使用的关联关系，HBuilderX 3.1.10+ [详情](/uniCloud/clientdb?id=lookup-foreign-key)|
| foreign-key| String| ''| Manually specify the association relationship used by HBuilderX 3.1.10+, [Details](/uniCloud/clientdb?id=lookup-foreign-key)|


`uniCloud.mixinDatacom` 的data
data of `uniCloud.mixinDatacom`

|属性名							| 类型			|	默认值	| 说明|
| Attribute name| Type| Defaults| Instruction|
|:-:							| :-:			| :-:		| :-:	|
|mixinDatacomLoading			|Boolean		| 	false	|加载数据状态|
| mixinDatacomLoading| Boolean| false| Load data status|
|mixinDatacomHasMore			|Boolean		| 	false	|是否有更多数据|
| mixinDatacomHasMore| Boolean| false| Is there more data?|
|mixinDatacomResData			|Array			| 	[]		|查询返回的数据|
| mixinDatacomResData| Array| \[]| Query the returned data|
|mixinDatacomErrorMessage	|String			| 			|错误消息|
| mixinDatacomErrorMessage| String| | Wrong information|
|mixinDatacomPage			|OBject			| 			|分页信息|
| mixinDatacomPage| OBject| | Paging information|


`uniCloud.mixinDatacom` methods

|方法名							| 说明|
| Method name| Instruction|
|:-:							| :-:	|
|mixinDatacomGet				|加载数据|
| mixinDatacomGet| Load Data|
|mixinDatacomEasyGet			|加载数据，包含 `mixinDatacomLoading` 、`mixinDatacomHasMore`、`mixinDatacomErrorMessage` 逻辑 |
| mixinDatacomEasyGet| Load data, including `mixinDatacomLoading`, `mixinDatacomHasMore`, `mixinDatacomErrorMessage` logic|
|onMixinDatacomPropsChange	|属性发生变化时触发|
| onMixinDatacomPropsChange| Triggered when the attribute changes|

#### 使用方法
#### Usage method

使用 `uniCloud.mixinDatacom` 开发 `datacom` 组件需要以下步骤
The following steps are required to develop the `datacom` component using `uniCloud.mixinDatacom`

1. 在export default下声明`mixin: [uniCloud.mixinDatacom]`
1. Declare `mixin: [uniCloud.mixinDatacom]` under export default
2. 在template中定义三个标签，绑定 `uniCloud.mixinDatacom` 的 `data` 状态，加载中`mixinDatacomLoading` 、加载出错提示 `mixinDatacomErrorMessage`、处理数据及相关UI展现 `mixinDatacomResData`
2. Define three tags in the template, bind the `data` state of `uniCloud.mixinDatacom` and load `mixinDatacomLoading`, load error prompt `mixinDatacomErrorMessage`, process data and related UI display `mixinDatacomResData`
3. 组件的created声明周期中调用 `uniCloud.mixinDatacom` 中的 `mixinDatacomGet()` 或 `mixinDatacomEasyGet()` 方法请求云端数据库。这两种方法的区别如下：
3. For the method of calling `mixinDatacomGet()` or `mixinDatacomEasyGet()` in `uniCloud.mixinDatacom` during the component's created life cycle, a cloud database can be requested. The differences between the two methods are as follows:
	- `mixinDatacomGet()` 仅请求数据，自行处理各种状态和异常。
	- `mixinDatacomGet()` only requests data and handles various statuses and exceptions by itself.
	- `mixinDatacomEasyGet()` 在 `mixinDatacomGet()` 的基础之上封装了加载状态、分页及错误消息，可通过模板绑定。用起来更简单
	- `mixinDatacomEasyGet()` encapsulates the loading status, paging and error messages on the basis of `mixinDatacomGet()`, which can be bound by template. User-friendly


使用 `uniCloud.mixinDatacom` 开发 `datacom` 组件的优势
Advantages of using `uniCloud.mixinDatacom` to develop `datacom` components

- 不需要定义 `datacom` 组件的属性
- No need to define the attributes of the `datacom` component
- 不需要关心 `uniClinetDB` API
- No need to care about `uniClinetDB` API
- 不需要判断哪些属性变化时需要重置已加载数据， 仅判断 `onMixinDatacomPropsChange(needReset, changed) {}` 参数 `needReset` 是否为 `true` 即可
- No need to determine which attributes need to be reset when the loaded data is changed, just determine whether the `onMixinDatacomPropsChange(needReset, changed) {}` parameter `needReset` is `true`
- 当 `uniClinetDB` 有新增属性时，组件代码也不需要跟随更新
- When there are new attributes in `uniClinetDB`, the component code does not need to be updated


例如要开发一个datacom组件，名为uni-data-jql：
For example, develop a datacom component named as uni-data-jql:

- 方法1，使用 `mixinDatacomEasyGet()`
- Method 1, use `mixinDatacomEasyGet()`

```html
<!-- uni-data-jql.vue -->
<template>
	<view>
		<view v-if="mixinDatacomLoading">Loading...</view>
		<view v-else-if="mixinDatacomErrorMessage">
			请求错误：{{mixinDatacomErrorMessage}}
		</view>
		<view v-else="mixinDatacomResData">
			<!-- 需要自行处理数据及相关UI展现 -->
			<!-- Need to process data and related UI display by yourself -->
			{{mixinDatacomResData}}
		</view>
	</view>
</template>

<script>
	export default {
		mixins: [uniCloud.mixinDatacom],
		data() {
			return {}
		},
		created() {
			// 调用 uniCloud.mixinDatacom 中的方法加载数据
			//Call the method in uniCloud.mixinDatacom to load the data
			this.mixinDatacomEasyGet()
		},
		methods: {
			// 当组件属性发生变化时
			//When the component attribute changed
			onMixinDatacomPropsChange(needReset, changed) {
				// needReset=true 需要重置已加载数据和分页信息，例如 collection，orderby
				//needReset=true needs to reset the loaded data and paging information, such as collection, orderby
				// changed，变化的属性名，类型为 Array，例如 ['collection', 'orderby']
				//changed, attribute name of change with the type of Array, such as ['collection', 'orderby']
				if (needReset) {
					// 清空已加载的数据
					//Remove the loaded data
					this.mixinDatacomResData = []

					// 重置分页数据，如果没有分页不需要处理
					//Reset the paging data. If no paging, skip this
					this.mixinDatacomPage.size = this.pageSize // 重置分页大小
					this.mixinDatacomPage.current = 0 // 重置当前分页
					this.mixinDatacomPage.count = 0 // 重置数据总数
				}
			}
		}
	}
</script>
```


- 方法2，使用 `mixinDatacomGet()` 
- Method 2, use `mixinDatacomGet()`

需要多写些代码处理各种状态。如果`mixinDatacomEasyGet`的封装无法灵活满足你的需求，可以使用这种方式。
Need to write more codes to handle various states. If the encapsulation of `mixinDatacomEasyGet` cannot meet your needs flexibly, you can use this method.

```html
<!-- uni-data-jql.vue -->
<template>
	<view>
		<view v-if="mixinDatacomLoading">Loading...</view>
		<view v-else-if="mixinDatacomErrorMessage">
			请求错误：{{mixinDatacomErrorMessage}}
		</view>
		<view v-else="mixinDatacomResData">
			<!-- 需要自行处理数据及相关UI展现 -->
			<!-- Need to process data and related UI display by yourself -->
			{{mixinDatacomResData}}
		</view>
	</view>
</template>

<script>
	export default {
		mixins: [uniCloud.mixinDatacom],
		data() {
			return {}
		},
		created() {
			this.load()
		},
		methods: {
			load() {
				if (this.mixinDatacomLoading == true) {
					return
				}
				this.mixinDatacomLoading = true

				this.mixinDatacomGet().then((res) => {
					this.mixinDatacomLoading = false
					const {
						data,
						count
					} = res.result
					this.mixinDatacomResData = data
				}).catch((err) => {
					this.mixinDatacomLoading = false
					this.mixinDatacomErrorMessage = err
				})
			},
			// 当组件属性发生变化时
			//When the component attribute changed
			onMixinDatacomPropsChange(needReset, changed) {
				// needReset=true 需要重置已加载数据和分页信息，例如 collection，orderby
				//needReset=true needs to reset the loaded data and paging information, such as collection, orderby
				// changed，变化的属性名，类型为 Array，例如 ['collection', 'orderby']
				//changed, attribute name of change with the type of Array, such as ['collection', 'orderby']
				if (needReset) {
					// 清空已加载的数据
					//Remove the loaded data
					this.mixinDatacomResData = []

					// 重置分页数据，如果没有分页不需要处理
					//Reset the paging data. If no paging, skip this
					this.mixinDatacomPage.size = this.pageSize // 重置分页大小
					this.mixinDatacomPage.current = 0 // 重置当前分页
					this.mixinDatacomPage.count = 0 // 重置数据总数
				}
			}
		}
	}
</script>
```


做好这个uni-data-jql组件后，就可以在页面中使用了：
After completing the uni-data-jql component, it can be used in the page:

```html
<template>
	<view>
		<uni-data-jql collection="table1"></uni-data-jql>
	</view>
</template>

<script>
	// jql.vue 组件
	//jql.vue component
	import UniData from "./jql.vue" // 如果符合easycom规范，无需本代码
	export default {
		components: {
			UniData // 如果符合easycom规范，无需本代码
		},
		data() {
			return {}
		},
		methods: {}
	}
</script>
```


#### `uniCloud.mixinDatacom` 源码 @mixinDatacomsource
#### `uniCloud.mixinDatacom` Source code @mixinDatacomsource
为方便开发者理解mixinDatacom的工作原理，这里贴出mixinDatacom的源码：
In order to help the developers to understand the working principle of mixinDatacom easily, the source code of mixinDatacom is posted here:

```js
export default {
	props: {
		localdata: {
			type: Array,
			default () {
				return []
			}
		},
		options: {
			type: [Object, Array],
			default () {
				return {}
			}
		},
		collection: {
			type: String,
			default: ''
		},
		action: {
			type: String,
			default: ''
		},
		field: {
			type: String,
			default: ''
		},
		orderby: {
			type: String,
			default: ''
		},
		where: {
			type: [String, Object],
			default: ''
		},
		pageData: {
			type: String,
			default: 'add'
		},
		pageCurrent: {
			type: Number,
			default: 1
		},
		pageSize: {
			type: Number,
			default: 20
		},
		getcount: {
			type: [Boolean, String],
			default: false
		},
		gettree: {
			type: [Boolean, String],
			default: false
		},
		gettreepath: {
		  type: [Boolean, String],
		  default: false
		},
		startwith: {
		  type: String,
		  default: ''
		},
		limitlevel: {
		  type: Number,
		  default: 10
		},
		groupby: {
		  type: String,
		  default: ''
		},
		groupField: {
		  type: String,
		  default: ''
		},
		distinct: {
		  type: [Boolean, String],
		  default: false
		},
		manual: {
		  type: Boolean,
		  default: false
		}
	},
	data() {
		return {
			mixinDatacomLoading: false, // 网络请求状态
			mixinDatacomHasMore: false, // 是否有更多数据
			mixinDatacomResData: [], // 请求返回的数据，调用 loadData 后会更新
			mixinDatacomErrorMessage: '', // 请求出错时的错误消息
			mixinDatacomPage: {} // 分页信息，详情见 created 生命周期
		}
	},
	created() {
		this.mixinDatacomPage = {
			current: this.pageCurrent, // 当前页面，初始化设置 props中的 pageCurrent
			size: this.pageSize, // 页面大小，初始化设置 props中的 pageSize
			count: 0, // 数据总数，getcount=true时有效
		}
		this.$watch(() => {
			var al = [];
			['pageCurrent',
				'pageSize',
				'localdata',
				'collection',
				'action',
				'field',
				'orderby',
				'where',
				'getont',
				'getcount',
				'gettree'
			].forEach(key => {
				al.push(this[key])
			})
			return al
		}, (newValue, oldValue) => {
			let needReset = false
			let changed = []
			for (let i = 2; i < newValue.length; i++) {
				if (newValue[i] !== oldValue[i]) {
					needReset = true
					changed.push(newValue[i])
				}
			}
			if (newValue[0] !== oldValue[0]) {
				this.mixinDatacomPage.current = this.pageCurrent
			}
			this.mixinDatacomPage.size = this.pageSize

			this.onMixinDatacomPropsChange(needReset, changed)
		})
	},
	methods: {
		// props发生变化时被调用，在组件中覆盖此方法
		//It is called when props is changed, and this method will be overridden in the component
		// 非 pageCurrent，pageSize 改变时 needReset=true,需要重置数据
		//For non pageCurrent, when pageSize changes, needReset=true, and data needs to be reset
		// changed，发生变化的属性名，类型为Array，例如 ['collection', 'action']
		//changed, attribute name of change occured with the type of Array, such as ['collection', 'action']
		onMixinDatacomPropsChange(needReset, changed) {},
		// 加载数据
		//Load Data
		mixinDatacomEasyGet({
			getone = false,
			success,
			fail
		} = {}) {
			if (this.mixinDatacomLoading) {
				return
			}
			this.mixinDatacomLoading = true

			this.mixinDatacomErrorMessage = ''

			this.mixinDatacomGet().then((res) => {
				this.mixinDatacomLoading = false
				const {
					data,
					count
				} = res.result
				if (this.getcount) {
					this.mixinDatacomPage.count = count
				}
				this.mixinDatacomHasMore = data.length < this.pageSize
				const responseData = getone ? (data.length ? data[0] : undefined) : data
				this.mixinDatacomResData = responseData

				if (success) {
					success(responseData)
				}
			}).catch((err) => {
				this.mixinDatacomLoading = false
				this.mixinDatacomErrorMessage = err
				fail && fail(err)
			})
		},
		// 调用 uniClientDB 查询数据
		//Call uniClientDB to query data
		mixinDatacomGet(options = {}) {
			let db = uniCloud.database()

			const action = options.action || this.action
			if (action) {
				db = db.action(action)
			}

			const collection = options.collection || this.collection
			db = db.collection(collection)

			const where = options.where || this.where
			if (!(!where || !Object.keys(where).length)) {
				db = db.where(where)
			}

			const field = options.field || this.field
			if (field) {
				db = db.field(field)
			}

			const groupby = options.groupby || this.groupby
			if (groupby) {
				db = db.groupBy(groupby)
			}

			const groupField = options.groupField || this.groupField
			if (groupField) {
				db = db.groupField(groupField)
			}

			const distinct = options.distinct !== undefined ? options.distinct : this.distinct
			if (distinct === true) {
				db = db.distinct()
			}

			const orderby = options.orderby || this.orderby
			if (orderby) {
				db = db.orderBy(orderby)
			}

			const current = options.pageCurrent !== undefined ? options.pageCurrent : this.mixinDatacomPage.current
			const size = options.pageSize !== undefined ? options.pageSize : this.mixinDatacomPage.size
			const getCount = options.getcount !== undefined ? options.getcount : this.getcount
			const gettree = options.gettree !== undefined ? options.gettree : this.gettree
			const gettreepath = options.gettreepath !== undefined ? options.gettreepath : this.gettreepath
			const limitLevel = options.limitlevel !== undefined ? options.limitlevel : this.limitlevel
			const startWith = options.startwith !== undefined ? options.startwith : this.startwith

			const getOptions = {
				getCount
			}
			const treeOptions = {
				limitLevel,
				startWith
			}
			if (gettree) {
				getOptions.getTree = treeOptions
			}
			if (gettreepath) {
				getOptions.getTreePath = treeOptions
			}

			db = db.skip(size * (current - 1)).limit(size).get(getOptions)

			return db
		}
	}
}
```
