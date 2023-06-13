## unicloud-db组件简介
## Introduction to unicloud-db components

`<unicloud-db>` 组件是一个数据库查询组件，它是对`clientDB`的js库的再封装。
The `<unicloud-db>` component is a database query component that repackages the js library of `clientDB`.

前端通过组件方式直接获取uniCloud的云端数据库中的数据，并绑定在界面上进行渲染。
The front-end directly obtains the data in the cloud database of uniCloud through components, and binds it to the interface for rendering.

在传统开发中，开发者需要在前端定义data、通过request联网获取接口数据、然后赋值给data。同时后端还需要写接口来查库和反馈数据。
In traditional development, developers need to define data on the front end, obtain interface data through request networking, and then assign values to data. At the same time, the backend also needs to write an interface to query the database and feedback data.

有了`<unicloud-db>` 组件，**上述工作只需要1行代码**！写组件，设组件的属性，在属性中指定要查什么表、哪些字段、以及查询条件，就OK了！
With the `<unicloud-db>` component, **the above works in just 1 line**! Write the component, set the properties of the component, specify which tables, fields, and query conditions to check in the properties, and you're done!

HBuilderX中敲下`udb`代码块，得到如下代码，然后通过collection属性指定要查询表“table1”，通过field属性指定要查询字段“field1”，并且在where属性中指定查询id为1的数据。查询结果data就可以直接渲染在界面上。
Type the `udb` code block in HBuilderX to get the following code, and then specify the table "table1" to be queried through the collection attribute, specify the field "field1" to be queried through the field attribute, and specify the data whose query id is 1 in the where attribute. The query result data can be directly rendered on the interface.

```html
<unicloud-db v-slot:default="{data, loading, error, options}" collection="table1" field="field1" :getone="true" where="id=='1'">
  <view>
    {{ data}}
  </view>
</unicloud-db>
```

`<unicloud-db>` 组件尤其适用于列表、详情等展示类页面。开发效率可以大幅度的提升。
The `<unicloud-db>` component is especially suitable for display pages such as lists and details. Development efficiency can be greatly improved.

`<unicloud-db>` 组件的查询语法是`jql`，这是一种比sql语句和nosql语法更简洁、更符合js开发者习惯的查询语法。没学过sql或nosql的前端，也可以轻松掌握。[jql详见](https://uniapp.dcloud.net.cn/uniCloud/uni-clientDB?id=jsquery)
The query syntax of the `<unicloud-db>` component is `jql`, which is a more concise query syntax than sql statement and nosql syntax and more in line with the habits of js developers. You can easily master it without learning the front end of sql or nosql. [See details in jql](https://uniapp.dcloud.net.cn/uniCloud/uni-clientDB?id=jsquery)

`<unicloud-db>` 组件不仅支持查询。还自带了add、remove、update方法，见下文方法章节
The `<unicloud-db>` component supports more than just queries. It also comes with add, remove, update methods, see the method section below

**平台差异及版本说明**
**Platform differences and release notes**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|√|x|√|√|√|

需 HBuilderX 3.0+
Requires HBuilderX 3.0+

`<unicloud-db>` 由原 `<uni-clientdb>插件` 升级而来，从 HBuilderX 3.0 起`<unicloud-db>`内置到框架，与小程序基础库版本无关。
`<unicloud-db>` is upgraded from the original `<uni-clientdb> plugin`. Since HBuilderX 3.0, `<unicloud-db>` is built into the framework, regardless of the version of the Mini Program base library.

如果需要 HBuilderX3.0 以下版本使用clientDB组件，则需要从插件市场单独下载`<uni-clientdb>插件`，下载地址为：[https://ext.dcloud.net.cn/plugin?id=3256](https://ext.dcloud.net.cn/plugin?id=3256)。但仍然推荐升级HBuilderX 3.0+。
If you need to use the clientDB component in versions below HBuilderX3.0, you need to download the `<uni-clientdb> plugin` from the plugin market separately. The download address is: [https://ext.dcloud.net.cn/plugin?id=3256](https://ext.dcloud.net.cn/plugin?id=3256). However, it is still recommended to upgrade HBuilderX 3.0+.


## 属性@props
## Properties @props

|属性|类型|描述|
|property|type|description|
|:-|:-|:-|
|v-slot:default||查询状态（失败、联网中）及结果（data）|
|v-slot:default||Query status (failed, online) and result (data)|
|ref|string|vue组件引用标记|
|ref|string|vue component reference tag|
|spaceInfo|Object|服务空间信息，新增于`HBuilderX 3.2.11`。同uniCloud.init参数，参考：[uniCloud.init](uniCloud/init.md?id=init-unicloud)|
|spaceInfo|Object|Service space information, added in `HBuilderX 3.2.11`. Same as uniCloud.init parameter, reference: [uniCloud.init](uniCloud/init.md?id=init-unicloud)|
|collection|string|表名。支持输入多个表名，用 `,` 分割，自`HBuilderX 3.2.6`起也支持传入tempCollection组成的数组|
|collection|string|Table name. Supports inputting multiple table names, which are separated by `,`. Since `HBuilderX 3.2.6`, it also supports inputting an array composed of tempCollection|
|field|string|指定要查询的字段，多个字段用 `,` 分割。不写本属性，即表示查询所有字段。支持用 oldname as newname方式对返回字段重命名|
|field|string|Specifies the field to query, multiple fields are separated by `,`. If you don't write this property, it means to query all fields. Support renaming the returned field with oldname as newname|
|where|string|查询条件，对记录进行过滤。[见下](/uniCloud/unicloud-db?id=where)|
|where|string|Query conditions, filter records. [see below](/uniCloud/unicloud-db?id=where)|
|orderby|string|排序字段及正序倒序设置|
|orderby|string|Sort field and reverse order setting|
|foreign-key|String|手动指定使用的关联关系，HBuilderX 3.1.10+ [详情](/uniCloud/clientdb?id=lookup-foreign-key)|
|foreign-key|String|Manually specify the relationship to use, HBuilderX 3.1.10+ [Details](/uniCloud/clientdb?id=lookup-foreign-key)|
|page-data|String|分页策略选择。值为 `add` 代表下一页的数据追加到之前的数据中，常用于滚动到底加载下一页；值为 `replace` 时则替换当前data数据，常用于PC式交互，列表底部有页码分页按钮，默认值为`add`|
|page-data|String|Pagination strategy selection. The value of `add` means that the data of the next page is appended to the previous data, which is often used to scroll to the end to load the next page; when the value is `replace`, the current data data is replaced, which is often used for PC-style interaction, and there are page numbers at the bottom of the list. button, default is `add`|
|page-current|Number|当前页|
|page-current|Number|Current page|
|page-size|Number|每页数据数量|
|page-size|Number|Number of data per page|
|getcount|Boolean|是否查询总数据条数，默认 `false`，需要分页模式时指定为 `true`|
|getcount|Boolean|Whether to query the total number of data items, the default is `false`, when paging mode is required, specify `true`|
|getone|Boolean|指定查询结果是否仅返回数组第一条数据，默认 false。在false情况下返回的是数组，即便只有一条结果，也需要[0]的方式获取。在值为 true 时，直接返回结果数据，少一层数组，一般用于非列表页，比如详情页|
|getone|Boolean|Specifies whether the query result only returns the first data of the array, the default is false. In the case of false, an array is returned. Even if there is only one result, it needs to be obtained by [0]. When the value is true, the result data is returned directly, with one less array, generally used for non-list pages, such as details page|
|action|string|云端执行数据库查询的前或后，触发某个action函数操作，进行预处理或后处理，[详情](/uniCloud/uni-clientDB?id=%e4%ba%91%e7%ab%af%e9%83%a8%e5%88%86)。场景：前端无权操作的数据，比如阅读数+1|
|action|string|Before or after the database query is executed in the cloud, an action function is triggered to perform preprocessing or postprocessing. [Details](/uniCloud/uni-clientDB?id=%e4%ba%91%e7% ab%af%e9%83%a8%e5%88%86). Scenario: Data that the front end does not have permission to operate, such as the number of readings + 1|
|manual|Boolean|**已过时，使用 `loadtime` 替代** 是否手动加载数据，默认为 false，页面onready时自动联网加载数据。如果设为 true，则需要自行指定时机通过方法`this.$refs.udb.loadData()`来触发联网，其中的`udb`指组件的ref值。一般onLoad因时机太早取不到this.$refs.udb，在onReady里可以取到|
|manual|Boolean|**Obsolete, use `loadtime` instead ** Whether to manually load data, the default is false, the data will be automatically loaded online when the page is onready. If set to true, you need to specify the timing to trigger networking through the method `this.$refs.udb.loadData()`, where `udb` refers to the ref value of the component. Generally, onLoad cannot get this.$refs.udb because the timing is too early, but it can be obtained in onReady|
|gettree|Boolean|是否查询树状结构数据，HBuilderX 3.0.5+ [详情](/uniCloud/clientdb?id=gettree)|
|gettree|Boolean| Whether to query tree structure data, HBuilderX 3.0.5+ [Details](/uniCloud/clientdb?id=gettree)|
|startwith|String|gettree的第一层级条件，此初始条件可以省略，不传startWith时默认从最顶级开始查询，HBuilderX 3.0.5+|
|startwith|String|The first level condition of gettree, this initial condition can be omitted, if startWith is not passed, the query starts from the top level by default, HBuilderX 3.0.5+|
|limitlevel|Number|gettree查询返回的树的最大层级。超过设定层级的节点不会返回。默认10级，最大15，最小1，HBuilderX 3.0.5+|
|limitlevel|Number|The maximum level of the tree returned by the gettree query. Nodes beyond the set level will not be returned. Default level 10, maximum 15, minimum 1, HBuilderX 3.0.5+|
|groupby|String|对数据进行分组，HBuilderX 3.1.0+|
|groupby|String|Group data, HBuilderX 3.1.0+|
|group-field|String|对数据进行分组统计|
|group-field|String|Group statistics on data|
|distinct|Boolean|是否对数据查询结果中重复的记录进行去重，默认值false，HBuilderX 3.1.0+|
|distinct|Boolean|Whether to deduplicate the duplicate records in the data query result, the default value is false, HBuilderX 3.1.0+|
|loadtime|String|加载数据时机，默认auto，可选值 auto&#124;onready&#124;manual,[详情](/uniCloud/unicloud-db?id=loadtime) HBuilderX3.1.10+|
|loadtime|String|Load data timing, default auto, optional value auto&#124;onready&#124;manual,[Details](/uniCloud/unicloud-db?id=loadtime) HBuilderX3.1.10+|
|ssr-key|String|[详情](/uniCloud/unicloud-db#=ssrkey) HBuilderX 3.4.11+|
|ssr-key|String|[Details](/uniCloud/unicloud-db#=ssrkey) HBuilderX 3.4.11+|
|@load|EventHandle|成功回调。联网返回结果后，若希望先修改下数据再渲染界面，则在本方法里对data进行修改|
|@load|EventHandle|Callback on success. After the network returns the result, if you want to modify the data first and then render the interface, modify the data in this method|
|@error|EventHandle|失败回调|
|@error|EventHandle|Failure callback|

TODO：暂不支持in子查询功能。后续会补充
TODO: The in subquery function is not supported yet. will be added later

注意：`page-current/page-size` 改变不重置数据(`page-data="replace"`) 和 (`loadtime="manual"`) 除外，`collection/action/field/getcount/orderby/where` 改变后清空已有数据
Note: `page-current/page-size` changes do not reset data (`page-data="replace"`) and (`loadtime="manual"`) except for `collection/action/field/getcount/orderby/ where` clears the existing data after the change


**示例**
**Example**

比如云数据库有个user的表，里面有字段id、name，查询id=1的数据，那么写法如下：
For example, cloud database has a user table with fields id and name. To query data with id=1, the writing method is as follows:

**注意下面示例使用了getone会返回一条对象形式的data，如不使用getone，data将会是数组形式，即多一层**
**Note that the following example uses getone to return a piece of data in the form of an object. If getone is not used, the data will be in the form of an array, that is, one more layer**

```html
<template>
  <view>
    <unicloud-db v-slot:default="{data, loading, error, options}" collection="user" field="name" :getone="true" where="id=='1'">
      <view>
          {{ data.name}}
      </view>
    </unicloud-db>
  </view>
</template>

```

**注意：除非使用admin账户登录操作，否则需要在 uniCloud 控制台对要查询的表增加 Schema 权限配置。至少配置读取权限，否则无权在前端查询**，详见 [DB Schema](/uniCloud/schema)
**Note: Unless you use the admin account to log in, you need to add Schema permission configuration to the table to be queried in the uniCloud console. At least configure read permission, otherwise you will not have permission to query on the front end**, see [DB Schema](/uniCloud/schema)

## v-slot:default

```html
<unicloud-db v-slot:default="{data, pagination, loading, hasMore, error, options}"></unicloud-db>
```


|属性|类型|描述|
|property|type|description|
|:-|:-|:-|
|data|Array&#124;Object|查询结果，默认值为`Array`, 当 `getone` 指定为 `true` 时，值为数组中第一条数据，类型为 `Object`，减少了一层|
|data|Array&#124;Object|Query result, the default value is `Array`, when `getone` is specified as `true`, the value is the first data in the array, the type is `Object`, one layer is reduced|
|pagination|Object|分页属性|
|pagination|Object|Pagination Properties|
|loading|Boolean|查询中的状态。可根据此状态，在template中通过v-if显示等待内容，如`<view v-if="loading">加载中...</view>`|
|loading|Boolean|Status in query. According to this state, the waiting content can be displayed in the template through v-if, such as `<view v-if="loading">Loading...</view>`|
|hasMore|Boolean|是否有更多数据。可根据此状态，在template中通过v-if显示没有更多数据了，如`<uni-load-more v-if="!hasMore" status="noMore"></uni-load-more>`, `<uni-load-more>`详情 [https://ext.dcloud.net.cn/plugin?id=29](https://ext.dcloud.net.cn/plugin?id=29)|
|hasMore|Boolean|Is there more data. According to this status, there is no more data displayed through v-if in the template, such as `<uni-load-more v-if="!hasMore" status="noMore"></uni-load-more>` , `<uni-load-more>`Details[https://ext.dcloud.net.cn/plugin?id=29](https://ext.dcloud.net.cn/plugin?id=29)|
|error|Object|查询错误。可根据此状态，在template中通过v-if显示等待内容，如`<view v-if="error">加载错误</view>`|
|error|Object|Query error. According to this state, the waiting content can be displayed in the template through v-if, such as `<view v-if="error">loading error</view>`|
|options|Object|在小程序中，插槽不能访问外面的数据，需通过此参数传递, 不支持传递函数|
|options|Object|In the applet, the slot cannot access the external data, it needs to be passed through this parameter, and the transfer function is not supported|

**提示：如果不指定分页模式， `data` 为多次查询的集合**
**Hint: If no paging mode is specified, `data` is a collection of multiple queries**

状态示例：
Status example:
```html
<unicloud-db v-slot:default="{data, loading, error, options}" collection="user">
	<view v-if="error">{{error.message}}</view>
	<view v-else-if="loading">正在加载...</view>
	<view v-else>
		{{data}}
	</view>
</unicloud-db>

```

## collection@collection

collection有以下几种形式
collection has the following forms

**单个collection字符串**
**Single collection string**

```html
<unicloud-db v-slot:default="{data, loading, error, options}" collection="user">
	<view v-if="error">{{error.message}}</view>
	<view v-else-if="loading">正在加载...</view>
	<view v-else>
		{{data}}
	</view>
</unicloud-db>
```

**多个collection字符串拼接**
**Multiple collection string concatenation**

用于联表查询，注意主表副表之间需要在schema内以foreignKey关联（副表支持多个）。如下示例以book作为主表，关联author表进行查询，在book表的schema内设置author_id字段指向author表
For join table query, note that the main table and the sub-table need to be associated with foreignKey in the schema (the sub-table supports multiple). The following example uses book as the main table, associates the author table for query, and sets the author_id field in the schema of the book table to point to the author table

```html
<unicloud-db v-slot:default="{data, loading, error, options}" collection="book,author">
	<view v-if="error">{{error.message}}</view>
	<view v-else-if="loading">正在加载...</view>
	<view v-else>
		{{data}}
	</view>
</unicloud-db>
```

**多个临时表组成的数组**
**An array of multiple temporary tables**

同样用于联表查询，但是与直接拼接多个字符串的方式不同，可以先对主表进行处理再关联。和直接使用多个表名字符串拼接相比，在主表数据量大的情况下性能有明显提升
It is also used for join table query, but different from the way of directly splicing multiple strings, the main table can be processed first and then associated. Compared with the direct use of multiple table name string splicing, the performance is significantly improved in the case of a large amount of data in the main table

```html
<template>
  <unicloud-db v-slot:default="{data, loading, error, options}" :collection="colList">
    <view v-if="error">{{error.message}}</view>
    <view v-else-if="loading">正在加载...</view>
    <view v-else>
      {{data}}
    </view>
  </unicloud-db>
</template>
<script>
  const db = uniCloud.database()
  export default {
    data() {
      return {
        colList: [
          db.collection('book').where('name == "水浒传"').getTemp(),
          db.collection('author').getTemp()
        ]
      }
    },
    onReady() {},
    methods: {}
  }
</script>
```

## where@where

where中指定要查询的条件。比如只查询某个字段的值符合一定条件的记录。
where specifies the conditions to be queried. For example, only query records whose value of a field meets certain conditions.

组件的where属性，与clientDB的JS API是一致的，且内容较多，所以详见js API中相关`jql`文档：[详情](/uniCloud/jql.html#where)
The where attribute of the component is consistent with the JS API of clientDB, and has more content, so see the relevant `jql` document in the js API for details: [Details](/uniCloud/jql.html#where)

但组件与js API有一个差别，就是组件的属性中若使用js中的变量，需额外注意。
However, there is a difference between the component and the js API, that is, if you use the variables in js in the properties of the component, you need to pay extra attention.

例如查询uni-id-users表，字段username的值由js变量指定，有如下几种方式：
For example, to query the uni-id-users table, the value of the field username is specified by the js variable. There are several ways as follows:

方式1. 使用模板字符串，用${}包裹变量
Method 1. Use template strings, wrap variables with ${}
```html
<template>
	<view>
		<unicloud-db collection="uni-id-users" :where="`username=='${tempstr}'`"></unicloud-db>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				tempstr: '123'
			}
		}
	}
</script>
```

方式2. 不在属性中写，而在js中拼接字符串
Method 2. Do not write in properties, but concatenate strings in js
```html
<template>
	<view>
		<unicloud-db ref="udb" collection="uni-id-users" :where="sWhere" loadtime="manual"></unicloud-db>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				tempstr: '123',
				sWhere: ''
			}
		}
		onLoad() {
			this.sWhere = "id=='" + this.tempstr + "'"
			// 组件上配置了 loadtime = "manual", 这里需要手动加载数据
			// The component is configured with loadtime = "manual", where data needs to be loaded manually
			this.$nextTick(() => {
			  this.$refs.udb.loadData()
			})
		}
	}
</script>
```
多条件查询示例：
Example of multi-condition query:

方式1. 使用模板字符串，用${}包裹变量
Method 1. Use template strings and wrap variables with ${}
```html
<template>
    <view>
        <unicloud-db ref="udb" collection="uni-id-users" where="`id==${this.tempstr} && create_time > 1613960340000`"></unicloud-db>
    </view>
</template>
<script>
    export default {
        data() {
            return {
                tempstr: '123'
            }
        }
    }
</script>
```

方式2. 使用js拼接字符串
Method 2. Use js to splice strings
```html
<template>
	<view>
		<unicloud-db ref="udb" collection="uni-id-users" :where="sWhere" loadtime="manual"></unicloud-db>
	</view>
</template>
<script>
export default {
  data() {
    return {
      tempstr: '123',
      sWhere: ''
    }
  }
  onLoad() {
    // id = this.tempstr 且 create_time > 1613960340000
    // id = this.tempstr and create_time > 1613960340000
    this.sWhere = "id=='" + this.tempstr + "' && create_time > 1613960340000"

    // id = this.tempstr 或 name != null
    // this.sWhere = "id=='" + this.tempstr + "' || name != null"
    
    // 组件上配置了 loadtime = "manual", 这里需要手动加载数据
    // Loadtime = "manual" is configured on the component, here the data needs to be loaded manually
    this.$nextTick(() => {
      this.$refs.udb.loadData()
    })
  }
}
</script>
```
上述示例使用的是==比较符，如需进行模糊搜索，则使用正则表达式。插件市场提供了完整的云端一体搜索模板，搜索类页面无需自行开发，可直接使用。[详见](https://ext.dcloud.net.cn/plugin?id=3851)
The above example uses the == comparator, and for fuzzy searches, regular expressions are used. The plug-in market provides a complete cloud-integrated search template, and search pages can be used directly without self-development. [See details](https://ext.dcloud.net.cn/plugin?id=3851)

使用正则模糊查询示例：
Example of using regular fuzzy query:
```html
<template>
	<view class="content">
		<input @input="onKeyInput" placeholder="请输入搜索值" />
		<unicloud-db v-slot:default="{data, loading, error, options}" collection="goods" :where="where">
			<view v-if="error">{{error.message}}</view>
			<view v-else>
				
			</view>
		</unicloud-db>
	</view>
</template>

<script>
export default {
  data() {
    return {
      searchVal: ''
    }
  },
  computed: {
    where() {
      return `${new RegExp(this.searchVal, 'i')}.test(name)` // 使用计算属性得到完整where
    }
  },
  methods: {
    onKeyInput(e) {
      // 实际开发中这里应该还有防抖或者节流操作，这里不做演示
      // In actual development, there should be anti-shake or throttling operations here, no demonstration here
      this.searchVal = e.target.value
    }
  }
}
</script>
```

再次强调，where条件内容较多，组件和api用法相同，完整的where条件文档在api文档中，另见：[JQL文档](/uniCloud/jql.html#where)
Again, the where condition has more content, and the usage of components and api is the same. The complete where condition document is in the api document, see also: [JQL document](/uniCloud/jql.html#where)

## orderby

格式为 `字段名` 空格 `asc`(升序)/`desc`(降序)，多个字段用 `,` 分割，优先级为字段顺序
The format is `field name` space `asc` (ascending order)/`desc` (descending order), multiple fields are separated by `,`, the priority is the field order

<!-- 升序可以不写，不写默认就是升序。 -->
<!-- Ascending order can be omitted, the default is ascending order if not written. -->

单字段排序，示例代码
Single field sorting, sample code
```html
<unicloud-db orderby="createTime desc"></unicloud-db>
```

多字段排序，示例代码
Multi-field sorting, sample code
```html
<unicloud-db orderby="createTime1 asc,createTime2 desc"></unicloud-db>
```


## loadtime@loadtime

|值|类型|描述|
|value|type|description|
|:-|:-|:-|
|auto|String|页面就绪后或属性变化后加载数据，默认为auto|
|auto|String|Load data when the page is ready or after the attribute changes, the default is auto|
|onready|String|页面就绪后不自动加载数据，属性变化后加载。适合在onready中接收上个页面的参数作为where条件时。|
|onready|String|The data will not be loaded automatically when the page is ready, and it will be loaded after the attribute changes. It is suitable for receiving the parameters of the previous page as the where condition in onready. |
|manual|String|手动模式，不自动加载数据。如果涉及到分页，需要先手动修改当前页，在调用加载数据|
|manual|String|Manual mode, data is not loaded automatically. If paging is involved, you need to manually modify the current page first, and load data when calling |



## 事件@loadevent
## event @loadevent

- load事件
- load event

load事件在查询执行后、渲染前触发，一般用于查询数据的二次加工。比如查库结果不能直接渲染时，可以在load事件里先对data进行预处理。
The load event is triggered after query execution and before rendering, and is generally used for secondary processing of query data. For example, when the library query result cannot be directly rendered, the data can be preprocessed in the load event.

``` html
...
<unicloud-db @load="handleLoad" />
...

handleLoad(data, ended, pagination) {
  // `data` 当前查询结果
  // `data` current query result
  // `ended` 是否有更多数据
  // `ended` has more data
  // `pagination` 分页信息 HBuilderX 3.1.5+ 支持
  // `pagination` pagination information HBuilderX 3.1.5+ support
}
```

数据库里的时间一般是时间戳，不能直接渲染。虽然可以在load事件中对时间格式化，但更简单的方式是使用[`<uni-dateformat>`组件](https://ext.dcloud.net.cn/plugin?id=3279)，无需写js处理。
The time in the database is generally a timestamp and cannot be rendered directly. Although the time can be formatted in the load event, an easier way is to use the [`<uni-dateformat>` component](https://ext.dcloud.net.cn/plugin?id=3279), no need to write js processing.

- error事件
- error event

error事件在查询报错时触发，比如联网失败。
The error event is triggered when a query reports an error, such as failure to connect to the network.

``` html
...
<unicloud-db @error="handleError" />
...

handleError(e) {
  // {message}
}
```

## ssr-key@ssrkey

发行 H5 ssr 时有效，用于保证服务器端渲染和前端加载的数据对应
Valid when H5 ssr is released, it is used to ensure that server-side rendering and front-end loading data correspond

默认值：根据 (页面路径 + `unicloud-db` 组件代码中的行号)生成的唯一值
Default: Unique value generated from (page path + line number in `unicloud-db` component code)

注意：页面同时出现2个及以上 `unicloud-db` 组件需要配置此属性，且要保证值整个应用唯一
Note: When two or more `unicloud-db` components appear on the page at the same time, this property needs to be configured, and the value must be unique throughout the application


## 方法
## method

### loadData

当 `<unicloud-db>` 组件的 manual 属性设为 true 时，不会在页面初始化时联网查询数据，此时需要通过本方法在需要的时候手动加载数据。
When the manual attribute of the `<unicloud-db>` component is set to true, the data will not be queried online when the page is initialized. In this case, you need to use this method to manually load the data when needed.

```js
this.$refs.udb.loadData() //udb为unicloud-db组件的ref属性值
```

一般onLoad因时机太早取不到this.$refs.udb，在onReady里可以取到。
Generally, onLoad cannot get this.$refs.udb because the timing is too early, but it can be obtained in onReady.

举例常见场景，页面pagea在url中获取参数id，然后加载数据
For example, in a common scenario, the page pagea obtains the parameter id in the url, and then loads the data

请求地址：/pages/pagea?id=123
Request address: /pages/pagea?id=123

pagea.vue源码：
pagea.vue source:

```html
<template>
	<view>
		<unicloud-db ref="udb" collection="table1" :where="where" v-slot:default="{data,pagination,loading,error,options}" :options="options" manual>
			{{data}}
		</unicloud-db>
	</view>
</template>
<script>
export default {
	data() {
		return {
			_id:'',
			where: ''
		}
	},
	onLoad(e) {
		const id = e.id
		if (id) {
			this._id = id
			this.where = "_id == '" + this._id + "'"
		}
		else {
			uni.showModal({
				content:"页面参数错误",
				showCancel:false
			})
		}
	},
	onReady() {
		if (this._id) {
			this.$refs.udb.loadData()
		}
	}
}
</script>
```

下拉刷新示例
Pull to refresh example

`this.$refs.udb.loadData({clear: true}, callback)`，

可选参数 `clear: true`，是否清空数据和分页信息，`true`表示清空，默认`false`
Optional parameter `clear: true`, whether to clear data and paging information, `true` means clear, default `false`

`callback` 是回调函数，加载数据完成后触发（即使加载失败）
`callback` is a callback function that is fired after loading data (even if loading fails)

```
<script>
	export default {
		data() {
			return {
			}
		},
		// 页面生命周期，下拉刷新后触发
		// Page life cycle, triggered after pull-down refresh
		onPullDownRefresh() {
			this.$refs.udb.loadData({
				clear: true
			}, () => {
				// 停止下拉刷新
				// stop pull down to refresh
				uni.stopPullDownRefresh()
			})
		}
	}
</script>
```


### loadMore

在列表的加载下一页场景下，使用ref方式访问组件方法，加载更多数据，每加载成功一次，当前页 +1
In the scenario of loading the next page of the list, use the ref method to access the component method to load more data. Each time the load is successful, the current page will be +1

```js
this.$refs.udb.loadMore() //udb为unicloud-db组件的ref属性值
```

### clear

清空已加载的数据，但不会重置当前分页信息
Clear loaded data without resetting current pagination information

```js
this.$refs.udb.clear() //udb为unicloud-db组件的ref属性值
```

### reset

重置当前分页信息，但不会清空已加载的数据
Reset the current pagination information without clearing the loaded data

```js
this.$refs.udb.reset() //udb为unicloud-db组件的ref属性值
```

### refresh

清空并重新加载当前页面数据
Clear and reload current page data

```js
this.$refs.udb.refresh() //udb为unicloud-db组件的ref属性值
```


### remove

语法
grammar

`this.$refs.udb.remove(id, options)`

udb为unicloud-db组件的ref属性值
udb is the ref attribute value of the unicloud-db component


必选参数 id
Required parameter id

|属性|类型|默认值|描述|
|property|type|default value|description|
|:-|:-|:-|:-|
|id|string&#124;Array||传入数据库的_id|
|id|string&#124;Array||_id|


可选参数 options
optional parameters options

|属性|类型|默认值|描述|
|property|type|default value|description|
|:-|:-|:-|:-|
|action|string||云端执行数据库查询的前或后，触发某个action函数操作，进行预处理或后处理，详情。场景：前端无权操作的数据，比如阅读数+1|
|action|string|| Before or after the cloud executes the database query, an action function is triggered to perform preprocessing or postprocessing, details. Scenario: Data that the front end does not have permission to operate, such as the number of readings + 1|
|confirmTitle|string|提示|删除确认框标题|
|confirmTitle|string|Prompt|Delete Confirmation Box Title|
|confirmContent|string|是否删除该数据|删除确认框提示|
|confirmContent|string|Whether to delete the data|Delete confirmation box prompt|
|needConfirm|boolean|true|控制是否有弹出框，HBuilderX 3.1.5+|
|needConfirm|boolean|true|Controls whether there is a popup box, HBuilderX 3.1.5+|
|needLoading|boolean|true|是否显示Loading，HBuilderX 3.1.5+|
|needLoading|boolean|true|Whether to display Loading, HBuilderX 3.1.5+|
|loadingTitle|string|''|显示loading的标题，HBuilderX 3.1.5+|
|loadingTitle|string|''|Display loading title, HBuilderX 3.1.5+|
|success|function||删除成功后的回调|
|success|function||Delete the callback after success|
|fail|function||删除失败后的回调|
|fail|function||Remove callback after failure|
|complete|function||完成后的回调|
|complete|function||Callback after completion|


在列表页面，如果想删除一个item，原本要做很多事：
On the list page, if you want to delete an item, you have to do a lot of things:
1. 弹出删除确认框
1. A delete confirmation box will pop up
2. 弹出loading
2. Popup loading
3. 调用clientDB的js api删除云端数据
3. Call clientDB's js api to delete cloud data
4. 接收云端删除结果，如果成功则关闭loading
4. Receive the cloud deletion result, and close the loading if successful
5. 进一步删除列表的data中对应的item，自动刷新页面
5. Further delete the corresponding item in the data of the list, and automatically refresh the page

为减少重复开发，`unicloud-db组件`提供了remove方法，在列表渲染时绑定好index，直接调用remove方法即可一行代码完成上述5步。
In order to reduce repeated development, the `unicloud-db component` provides a remove method, which binds the index when the list is rendered, and directly calls the remove method to complete the above 5 steps with one line of code.

首先在列表生成的时候给删除按钮绑定好id：
First, bind the id to the delete button when the list is generated:

```html
<unicloud-db ref="udb" :collection="collectionName" v-slot:default="{data,pagination,loading,error}">
	<uni-table :loading="loading" :emptyText="error.message || '没有更多数据'" border stripe >
		<uni-tr>
			<uni-th>用户名</uni-th>
			<uni-th>操作</uni-th>
		</uni-tr>
		<uni-tr v-for="(item,index) in data" :key="index">
			<uni-th>{{item.username}}</uni-th>
			<uni-td>
				<view>
					<button @click="confirmDelete(item._id)" type="warn">删除</button>
				</view>
			</uni-td>
		</uni-tr>
	</uni-table>
</unicloud-db>
```

然后confirmDelete方法里面只有一行代码：
Then there is only one line of code in the confirmDelete method:

```js
confirmDelete(id) {
	this.$refs.udb.remove(id)
}
```

`clientDB`组件的remove方法的参数只支持传入数据库的_id进行删除，不支持其他where条件删除。
The parameter of the remove method of the `clientDB` component only supports deletion of the _id passed in the database, and does not support deletion of other where conditions.

参数传入的_id支持单个，也支持多个，即可以批量删除。多个id的格式是：
The _id passed in by the parameter supports single or multiple, that is, it can be deleted in batches. The format of multiple ids is:

```js
this.$refs.udb.remove(["5f921826cf447a000151b16d", "5f9dee1ff10d2400016f01a4"])
```

在uniCloud的web控制台的`DB Schema`界面，可自助生成数据表的admin管理插件，其中有多行数据批选批删示例。
In the `DB Schema` interface of the uniCloud web console, you can self-generate the admin management plug-in of the data table, in which there are examples of batch deletion of multiple rows of data.


完整实例，第二个是可选参数。
The full instance, the second is an optional parameter.

```js
var ids = ["5f921826cf447a000151b16d", "5f9dee1ff10d2400016f01a4"]
this.$refs.udb.remove(ids, {
  action: '', // 删除前后的动作
  confirmTitle: '提示', // 确认框标题
  confirmContent: '是否删除该数据',  // 确认框内容
  success: (res) => { // 删除成功后的回调
    const { code, message } = res
  },
  fail: (err) => { // 删除失败后的回调
    const { message } = err
  },
  complete: () => { // 完成后的回调
  }
})
```

### add

语法
grammar

`this.$refs.udb.add(value, options)`

udb为unicloud-db组件的ref属性值
udb is the ref attribute value of the unicloud-db component


必选参数 value
Required parameter value

|属性|类型|默认值|描述|
|property|type|default value|description|
|:-|:-|:-|:-|
|value|Object||新增数据|
|value|Object||Add data|


可选参数 options
optional parameters options

|属性|类型|默认值|描述|
|property|type|default value|description|
|:-|:-|:-|:-|
|action|string||云端执行数据库查询的前或后，触发某个action函数操作，进行预处理或后处理，详情。HBuilder 3.1.0+|
|action|string|| Before or after the cloud executes the database query, an action function is triggered to perform preprocessing or postprocessing, details. HBuilder 3.1.0+|
|showToast|boolean|true|是否显示更新成功后的提示框|
|showToast|boolean|true|Whether to show the prompt box after successful update|
|toastTitle|string|新增成功|新增成功后的toast提示|
|toastTitle|string|Add success|Add a toast prompt after success|
|needLoading|boolean|true|是否显示Loading，HBuilderX 3.1.5+|
|needLoading|boolean|true|Whether to display Loading, HBuilderX 3.1.5+|
|loadingTitle|string|''|显示loading的标题，HBuilderX 3.1.5+|
|loadingTitle|string|''|Display loading title, HBuilderX 3.1.5+|
|success|function||新增成功后的回调|
|success|function||Add a callback after success|
|fail|function||新增失败后的回调|
|fail|function||Add callback after failure|
|complete|function||完成后的回调|
|complete|function||Callback after completion|


```html
<unicloud-db ref="udb" :collection="collectionName" v-slot:default="{data,pagination,loading,error}">
</unicloud-db>
```

```js
this.$refs.udb.add(value)
```


完整实例
full example

```js
this.$refs.udb.add(value, {
  toastTitle: '新增成功', // toast提示语
  success: (res) => { // 新增成功后的回调
    const { code, message } = res
  },
  fail: (err) => { // 新增失败后的回调
    const { message } = err
  },
  complete: () => { // 完成后的回调
  }
})
```

### update

语法
grammar

`this.$refs.udb.update(id, value, options)`

udb为unicloud-db组件的ref属性值
udb is the ref attribute value of the unicloud-db component


必选参数 id
Required parameter id

|属性|类型|默认值|描述|
|property|type|default value|description|
|:-|:-|:-|:-|
|id|string||数据的唯一标识|
|id|string||The unique identifier of the data|


必选参数 value
Required parameter value

|属性|类型|默认值|描述|
|property|type|default value|description|
|:-|:-|:-|:-|
|value|Object||需要修改的新数据|
|value|Object||New data to be modified|


可选参数 options
optional parameters options

|属性|类型|默认值|描述|
|property|type|default value|description|
|:-|:-|:-|:-|
|action|string||云端执行数据库查询的前或后，触发某个action函数操作，进行预处理或后处理，详情。HBuilder 3.1.0+|
|action|string|| Before or after the cloud executes the database query, an action function is triggered to perform preprocessing or postprocessing, details. HBuilder 3.1.0+|
|showToast|boolean|true|是否显示更新成功后的提示框|
|showToast|boolean|true|Whether to show the prompt box after successful update|
|toastTitle|string|修改成功|修改成功后的toast提示|
|toastTitle|string|Modified successfully|Toast prompt after successful modification|
|needConfirm|boolean|true|控制是否有弹出框，HBuilderX 3.1.5+|
|needConfirm|boolean|true|Controls whether there is a popup box, HBuilderX 3.1.5+|
|needLoading|boolean|true|是否显示Loading，HBuilderX 3.1.5+|
|needLoading|boolean|true|Whether to display Loading, HBuilderX 3.1.5+|
|loadingTitle|string|''|显示loading的标题，HBuilderX 3.1.5+|
|loadingTitle|string|''|Display loading title, HBuilderX 3.1.5+|
|success|function||更新成功后的回调|
|success|function||Callback after successful update|
|fail|function||更新失败后的回调|
|fail|function||Callback after update failure|
|complete|function||完成后的回调|
|complete|function||Callback after completion|


使用unicloud-db组件的update方法，除了更新云数据库中的数据外，也会同时更新当前页面的unicloud-db组件中的data数据，自然也会自动差量更新页面渲染的内容。同时update方法还封装了修改成功的toast提示。
Using the update method of the unicloud-db component, in addition to updating the data in the cloud database, the data data in the unicloud-db component of the current page will also be updated at the same time, and the content of the page rendering will also be automatically updated automatically. At the same time, the update method also encapsulates the toast prompt for successful modification.

```html
<unicloud-db ref="udb" :collection="collectionName" v-slot:default="{data,pagination,loading,error}" :getone="true">
</unicloud-db>
```

第一个参数 `id` 是数据的唯一标识，第二个参数 `value` 是需要修改的新数据
The first parameter `id` is the unique identifier of the data, and the second parameter `value` is the new data that needs to be modified
```js
this.$refs.udb.update(id, value)
```

完整实例，第三个是可选参数
The full instance, the third is an optional parameter

```js
this.$refs.udb.update(id, value, {
  toastTitle: '修改成功', // toast提示语
  success: (res) => { // 更新成功后的回调
    const { code, message } = res
  },
  fail: (err) => { // 更新失败后的回调
    const { message } = err
  },
  complete: () => { // 完成后的回调
  }
})
```

注意：
Notice:
- 如果列表分页采取分页组件，即page-data值为`replace`，每页有固定数量，那么`clientDB`组件的remove方法删除数据后，会重新请求当前页面数据。
- If the list pagination adopts the paging component, that is, the page-data value is `replace`, and each page has a fixed number, then after the remove method of the `clientDB` component deletes the data, it will re-request the current page data.
- 如果列表采取滚动加载方式，即page-data值为`add`，滚动加载下一页数据，那么`clientDB`组件的remove方法删除数据后，不会重新请求数据，而是从已有数据移除已删除项。(组件版本1.1.0+支持)
- If the list is loaded by scrolling, that is, the page-data value is `add`, and the data on the next page is scrolled, then after the remove method of the `clientDB` component deletes the data, the data will not be re-requested, but moved from the existing data. except deleted items. (Component version 1.1.0+ support)



### dataList

在js中，获取`<unicloud-db>` 组件的data的方法如下：
In js, the method to get the data of the `<unicloud-db>` component is as follows:

```js
console.log(this.$refs.udb.dataList);
```

如果修改了dataList的值，组件渲染的界面也会同步变化。
If the value of dataList is modified, the interface rendered by the component will also change synchronously.

但是在浏览器控制台里无法使用this来打印查看数据，为此特别新增了`unidev.clientDB.data`方法以优化调试体验。
However, this cannot be used to print and view data in the browser console. For this reason, the `unidev.clientDB.data` method has been added to optimize the debugging experience.

H5平台，开发模式下浏览器控制台输入 `unidev.clientDB.data`，可查看组件内部数据，多个组件通过索引查看 `unidev.clientDB.data[0]`
H5 platform, in development mode, enter `unidev.clientDB.data` in the browser console, you can view the internal data of the component, and multiple components can view `unidev.clientDB.data[0]` through the index


## 联表查询
## Joint table query

联表查询有以下两种写法，对于数据量稍大的表推荐使用多个临时表组成的数组作为collection，可以在主表的getTemp内先进行过滤减小联表时的性能消耗。
There are two ways to write a join table query. For tables with a slightly larger amount of data, it is recommended to use an array of multiple temporary tables as the collection. You can filter in the getTemp of the main table first to reduce the performance consumption when joining tables.

更多关于联表查询的内容请参考：[JQL联表查询](https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup)
For more information about joint table query, please refer to: [JQL joint table query](https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup)

**多个collection字符串拼接**
**Multiple collection string concatenation**

用于联表查询，注意主表副表之间需要在schema内以foreignKey关联（副表支持多个）。如下示例以book作为主表，关联author表进行查询，在book表的schema内设置author_id字段指向author表
For join table query, note that the main table and the sub-table need to be associated with foreignKey in the schema (the sub-table supports multiple). The following example uses book as the main table, associates the author table for query, and sets the author_id field in the schema of the book table to point to the author table

```html
<unicloud-db v-slot:default="{data, loading, error, options}" collection="book,author">
	<view v-if="error">{{error.message}}</view>
	<view v-else-if="loading">正在加载...</view>
	<view v-else>
		{{data}}
	</view>
</unicloud-db>
```

**多个临时表组成的数组**
**An array of multiple temporary tables**

同样用于联表查询，但是与直接拼接多个字符串的方式不同，可以先对主表进行处理再关联。和直接使用多个表名字符串拼接相比，在主表数据量大的情况下性能有明显提升
It is also used for join table query, but different from the way of directly splicing multiple strings, the main table can be processed first and then associated. Compared with the direct use of multiple table name string splicing, the performance is significantly improved in the case of a large amount of data in the main table

```html
<template>
  <unicloud-db v-slot:default="{data, loading, error, options}" :collection="colList">
    <view v-if="error">{{error.message}}</view>
    <view v-else-if="loading">正在加载...</view>
    <view v-else>
      {{data}}
    </view>
  </unicloud-db>
</template>
<script>
  const db = uniCloud.database()
  export default {
    data() {
      return {
        colList: [
          db.collection('book').where('name == "水浒传"').getTemp(),
          db.collection('author').getTemp()
        ]
      }
    },
    onReady() {},
    methods: {}
  }
</script>
```

## 列表分页@page
## List paging @page

unicloud-db组件简化了列表分页的写法，只需简单的配置每页需要多少数据（默认是20条），不管是数据库的分页查询还是前端的列表分页展示，都自动封装了。
The unicloud-db component simplifies the writing method of list paging. It only needs to simply configure how much data each page needs (the default is 20). Whether it is a database paging query or a front-end list paging display, it is automatically encapsulated.

列表分页有2种模式，一种是手机上常见的拉到底部加载下一页，另一种是pc常见的底部列出页码，点击页码跳转页面。
There are 2 modes of list paging, one is common on mobile phones to pull to the bottom to load the next page, and the other is common on PC to list the page number at the bottom, click the page number to jump to the page.

- 列表分页模式1：拉到底部加载下一页。此时下一页的查询结果会追加合并到data里，列表一直在增长。
- List paging mode 1: Pull to the bottom to load the next page. At this time, the query results on the next page will be appended and merged into the data, and the list has been growing.

下面的示例代码没有使用uList组件，实际开发时建议使用uList组件来避免长列表的性能问题。
The following sample code does not use the uList component. It is recommended to use the uList component during actual development to avoid performance problems with long lists.

```html
<template>
  <view class="content">
    <unicloud-db ref="udb" v-slot:default="{data, pagination, loading, error, options}"
      :options="options"
      collection="table1"
      orderby="createTime desc"
      field="name,subType,createTime"
      :getone="false"
      :action="action"
      :where="where"
      @load="onqueryload" @error="onqueryerror">
      <view v-if="error" class="error">{{error.message}}</view>
      <view v-else class="list">
        <view v-for="(item, index) in data" :key="index" class="list-item">
		      {{item.name}}
          <!-- 使用日期格式化组件，详情见插件 https://ext.dcloud.net.cn/search?q=date-format -->
          <!-- Use date formatting component, see plugin for details https://ext.dcloud.net.cn/search?q=date-format -->
          <uni-dateformat :date="item.createTime" />
        </view>
      </view>
      <view v-if="loading" class="loading">加载中...</view>
    </unicloud-db>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        options: {}, // 插槽不能访问外面的数据，通过此参数传递, 不支持传递函数
        action: '',
        where: {} // 类型为对象或字符串
      }
    },
    onPullDownRefresh() { //下拉刷新
      this.$refs.udb.loadData({
        clear: true //可选参数，是否清空数据
      }, () => {
        uni.stopPullDownRefresh()
      })
    },
    onReachBottom() { //滚动到底翻页
      this.$refs.udb.loadMore()
    },
    methods: {
      onqueryload(data, ended) {
		    // 可在此处预处理数据，然后再渲染界面
		    // Data can be preprocessed here before rendering the interface
      },
      onqueryerror(e) {
        // 加载数据失败
        // failed to load data
      }
    }
  }
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    background-color: #f0f0f0;
  }

  .list-item {
    background-color: #fff;
    margin-bottom: 1px;
    padding: 30px 15px;
  }

  .loading {
    padding: 20px;
    text-align: center;
  }

  .error {
    color: #DD524D;
  }
</style>

```


- 列表分页模式2：使用分页控件，点击第二页则只显示第二页数据，第一页数据清空。data会重置为下一页的查询结果，上一页数据丢弃
- List paging mode 2: Use the paging control, click the second page to display only the second page data, and the first page data is cleared. data will be reset to the query result of the next page, and the data of the previous page will be discarded

```html
<template>
  <view class="content">
    <unicloud-db ref="udb" v-slot:default="{data, pagination, loading, error, options}"
      :options="options"
      collection="table1"
      orderby="createTime desc"
      field="name,subType,createTime"
      :getcount="true"
      @load="onqueryload" @error="onqueryerror">
      <view>{{pagination}}</view>
      <view v-if="error" class="error">{{error.errMsg}}</view>
      <view v-else class="list">
        <view v-for="(item, index) in data" :key="index" class="list-item">
		  {{item.name}}
          <!-- 使用日期格式化组件，详情见插件 https://ext.dcloud.net.cn/search?q=date-format -->
          <!-- Use date formatting component, see plugin for details https://ext.dcloud.net.cn/search?q=date-format -->
          <uni-dateformat :date="item.createTime" />
        </view>
      </view>
      <view class="loading" v-if="loading">加载中...</view>
      <!-- 分页组件 -->
      <!-- Pagination component -->
      <uni-pagination show-icon :page-size="pagination.size" :total="pagination.count" @change="onpagination" />
    </unicloud-db>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        options: {}, // 插槽不能访问外面的数据，通过此参数传递, 不支持传递函数
      }
    },
    onPullDownRefresh() { //下拉刷新（一般此场景下不使用下拉刷新）
      this.$refs.udb.loadData({
        clear: true
      }, () => {
        uni.stopPullDownRefresh()
      })
    },
    methods: {
      onqueryload(data, ended) {
		// 可在此处预处理数据，然后再渲染界面
		// Data can be preprocessed here before rendering the interface
      },
      onqueryerror(e) {
        // 加载数据失败
        // failed to load data
      },
      onpagination(e) {
        this.$refs.udb.loadData({
          current: e.current
        })
      }
    }
  }
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    background-color: #f0f0f0;
  }

  .list-item {
    background-color: #fff;
    margin-bottom: 1px;
    padding: 30px 15px;
  }

  .loading {
    padding: 20px;
    text-align: center;
  }

  .error {
    color: #DD524D;
  }
</style>

```

使用分页控件，常见于PC端。在[uniCloud Admin](https://uniapp.dcloud.net.cn/uniCloud/admin)中，有完整的分页展示数据、新增删除数据的示例代码。
Use paging controls, which are common on the PC side. In [uniCloud Admin](https://uniapp.dcloud.net.cn/uniCloud/admin), there are complete paginated display data and sample code for adding and deleting data.

## 组件嵌套
## component nesting

`<unicloud-db>` 组件支持嵌套。
The `<unicloud-db>` component supports nesting.

子组件中访问父组件 data 时，需options传递数据
When accessing parent component data in child component, options need to pass data

如下示例演示了2个组件的嵌套，以及在子组件中如何访问父组件 data
The following example demonstrates the nesting of 2 components and how to access the parent component data in the child component


``` html
<unicloud-db v-slot:default="{data, loading, error, options}" :options="options" collection="table1"
    orderby="createTime desc" field="name,createTime">
    <view v-if="error" class="error">{{error.errMsg}}</view>
    <view v-else class="list">
      <!-- table1 返回的数据 -->
      <!-- Data returned by table1 -->
      <view v-for="(item, index) in options" :key="index" class="list-item">
        {{ item.name }}
      </view>
    </view>
    <!-- 嵌套 -->
    <!-- nested -->
    <!-- :options="data",将 父组件返回的 data 通过 options 传递到组件，子组件通过 options 访问 -->
    <!-- :options="data", the data returned by the parent component is passed to the component through options, and the child component is accessed through options -->
    <unicloud-db ref="dataQuery1" v-slot:default="{loading, data, error, options}" :options="data" collection="table2"
      orderby="createTime desc" field="name,createTime" @load="onqueryload" @error="onqueryerror">
      <!-- 父组件 table1 返回的数据 -->
      <!-- The data returned by the parent component table1 -->
      <view v-for="(item, index) in options" :key="index" class="list-item">
        {{ item.name }}
      </view>
      <!-- 子组件 table2 返回的数据 -->
      <!-- Data returned by subcomponent table2 -->
      <view v-for="(item, index) in data" :key="index" class="list-item">
        {{ item.name }}
      </view>
    </unicloud-db>
  </unicloud-db>
```


完整项目示例见插件市场的示例项目: [https://ext.dcloud.net.cn/plugin?id=2574](https://ext.dcloud.net.cn/plugin?id=2574)
For a complete project example, see the example project in the plugin market: [https://ext.dcloud.net.cn/plugin?id=2574](https://ext.dcloud.net.cn/plugin?id=2574)


**调试小技巧**
**Debugging Tips**

- H5平台，开发模式下浏览器控制台输入 `unidev.clientDB.data`，可查看组件内部数据，多个组件通过索引查看 `unidev.clientDB.data[0]`
- H5 platform, in development mode, enter `unidev.clientDB.data` in the browser console, you can view the internal data of the component, and multiple components can view `unidev.clientDB.data[0]` through the index

