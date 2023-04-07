## DB Schema概述

`DB Schema`是基于 JSON 格式定义的数据结构的规范。除schema外jql还支持使用js编写schema扩展，详见：[DB schema 扩展](jql-schema-ext.md)

它有很多重要的作用：

- 描述现有的数据含义。可以一目了然的阅读每个表、每个字段的用途。
- 设定数据操作权限(permission)。什么样的角色可以读/写哪些数据，都在这里配置。
- 设定字段值域能接受的格式(validator)，比如不能为空、需符合指定的正则格式。
- 设定字段之间的约束关系(fieldRules)，比如字段结束时间需要晚于字段开始时间。
- 设置数据的默认值(defaultValue/forceDefaultValue)，比如服务器当前时间、当前用户id等。
- 设定多个表的字段间映射关系(foreignKey)，将多个表按一个虚拟联表直接查询，大幅简化联表查询。
- 根据schema自动生成前端界面（schema2code），包括列表、详情、新建和编辑页面，自动处理校验规则。

> MongoDB支持通过 [$jsonSchema 操作符](https://docs.mongodb.com/manual/reference/operator/query/jsonSchema/index.html)在插入和更新文档时进行结构验证（非空、类型校验等）， $jsonSchema 支持 JSON Schema的草案4，包括[core specification](https://tools.ietf.org/html/draft-zyp-json-schema-04)和[validation specification](https://tools.ietf.org/html/draft-fge-json-schema-validation-00)。uniCloud在MongoDB基础上进行了JSON Schema扩展。

编写`DB Schema`是uniCloud的数据库开发的重要环节。但必须通过JQL操作数据库才能发挥`DB Schema`的价值。

**所以注意，在云函数中使用传统MongoDB API操作数据库时`DB Schema`不生效。不管在客户端还是云端，都必须使用JQL操作数据库。**

- 如果你的应用可以通过clientDB完成，那么这样将无需编写服务器代码，整体开发效率会极大提升。客户端操作数据库时必须完全编写`DB Schema`，尤其权限部分。

- 如果应用的权限系统比较复杂，使用clientDB不如使用云对象方便，也应该编写好除了权限部分以外的其他的schema。这样联表查询、tree查询、默认值、值域校验等其他功能仍然可以方便使用。

	具体来说，如自己在云函数中编写权限控制代码，则需要把`DB Schema`的权限都设为false，在云函数中将操作角色设为admin（通过setuser API），以跳过schema的权限验证。
	
	当然，云函数中代码控制的权限和`DB Schema`中的权限也可以混合使用，简单权限交由`DB Schema`处理，负责权限再编写代码处理。

所以建议开发者编写好schema，无论云端还是前端操作数据库。最多是云函数处理权限时忽略schema中的权限部分。

### 如何编写DB Schema

- **方式1，在web控制台编写schema**

1. 登录 [uniCloud控制台](https://unicloud.dcloud.net.cn)，选中一个数据表
2. 点击表右侧页签 “表结构”，点击 “编辑” 按钮，在编辑区域编写 Schema，编写完毕后点保存按钮即可生效。
  ![](https://web-assets.dcloud.net.cn/unidoc/zh/schema2code.png)

**web控制台上编辑`DB Schema`保存后是实时在现网生效的，请注意对现网商用项目的影响。**

- **方式2，在HBuilderX中编写schema（推荐）**

在HBuilderX中编写schema，有良好的语法提示和语法校验，还可以本地调试，是更为推荐的schema编写方案。

**创建schema**

1. 在`uniCloud`项目右键，选择`创建database目录`（如已有目录则忽略）
2. 在 database 目录右键选择`新建数据集合schema`

<div align=center>
  <img style="max-width:750px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/hx%E6%8F%90%E7%A4%BAschema.jpg"/>
</div>

**HBuilderX内创建的schema新建和保存时不会自动上传**

**上传schema**

- 在单个schema文件右键可以只上传当前选中的schema。快捷键是【Ctrl+u】。（Ctrl+u是HBuilderX的通用快捷键，不管是发布App还是上传云函数、schema，都是Ctrl+u）
- 在database目录右键可以上传全部schema

**下载schema**

- database目录右键可以下载所有schema及扩展校验函数

HBuilderX中运行前端项目，在控制台选择连接本地云函数，或者本地云函数/云对象直接运行，此时本地编写的schema可直接生效，无需上传。方便编写调试。

## Schema的一级节点@schema-root
```json
{
	"bsonType": "object", // 固定节点
	"description": "表的描述",
	"required": [], // 必填字段
	"permission": { 
		"read": false, // 前端非admin的读取记录权限控制。默认值是false，即可以不写。可以简单的true/false，也可以写表达式
		"create": false, // 前端非admin的新增记录权限控制。默认值是false，即可以不写。可以简单的true/false，也可以写表达式 
		"update": false, // 前端非admin的更新记录权限控制。默认值是false，即可以不写。可以简单的true/false，也可以写表达式
		"delete": false, // 前端非admin的删除记录权限控制。默认值是false，即可以不写。可以简单的true/false，也可以写表达式
		"count": false // 前端非admin的求数权限控制。默认值是true，即可以不写。可以简单的true/false，也可以写表达式
	},
	"properties": { // 表的字段清单
		"_id": { // 字段名称，每个表都会带有_id字段
			"description": "ID，系统自动生成"
			// 这里还有很多字段属性可以设置
		}
	},
	"fieldRules":[
		// 字段之间的约束关系。比如字段开始时间小于字段结束时间。也可以只校验一个字段。支持表达式
	]
}
```

**注意**

- 对数据进行数量统计时（包括count方法、及groupField内的count操作）均会同时触发表级的count权限及read权限

## 字段的属性@segment

### 属性列表

properties里的字段列表，每个字段都有很多可以设置的属性，如下：

|属性分类|属性|类型|描述|
|:-|:-|:-|:-|
|基本|bsonType|any|字段类型，如json object、字符串、数字、bool值、日期、时间戳，具体见下表bsonType可用类型|
|基本|arrayType|String|数组项类型，bsonType="array" 时有效，HBuilderX 3.1.0+ 支持，具体见下表arrayType可用类型|
|基本|title|string|标题，开发者维护时自用。在schema2code生成前端表单代码时，默认用于表单项前面的label|
|基本|description|string|描述，开发者维护时自用。在生成前端表单代码时，如果字段未设置componentForEdit，且字段被渲染为input，那么input的placehold将默认为本描述|
|基本|defaultValue|string&#124;Object|默认值|
|基本|forceDefaultValue|string&#124;Object|强制默认值，不可通过clientDB的代码修改，常用于存放用户id、时间、客户端ip等固定值。具体参考下表的defaultValue|
|值域校验|required|array|是否必填。支持填写必填的下级字段名称。required可以在表级的描述出现，约定该表有哪些字段必填。也可以在某个字段中出现，如果该字段是一个json对象，可以对这个json中的哪些字段必填进行描述。详见下方示例|
|值域校验|enum|Array|字段值枚举范围，数组中至少要有一个元素，且数组内的每一个元素都是唯一的。|
|值域校验|enumType|String|字段值枚举类型，可选值tree。设为tree时，代表enum里的数据为树形结构。此时schema2code可生成多级级联选择组件|
|值域校验|fileMediaType|String|文件类型，bsonType="file" 时有效，可选值 all&#124;image&#124;video 默认值为all,表示所有文件，image表示图片类型文件，video表示视频类型文件  HBuilderX 3.1.0+|
|值域校验|fileExtName|String|文件扩展名过滤，bsonType="file" 时有效，多个文件扩展名用 "," 分割，例如: jpg,png，HBuilderX 3.1.0+ 支持|
|值域校验|maximum|number|如果bsonType为数字时，可接受的最大值|
|值域校验|exclusiveMaximum|boolean|是否排除 maximum|
|值域校验|minimum|number|如果bsonType为数字时，可接受的最小值|
|值域校验|exclusiveMinimum|boolean|是否排除 minimum|
|值域校验|minLength|number|限制字符串或数组的最小长度|
|值域校验|maxLength|number|限制字符串或数组的最大长度|
|值域校验|trim|String|去除空白字符，支持 none&#124;both&#124;start&#124;end，默认none，仅bsonType="string"时有效|
|值域校验|format|'url'&#124;'email'|数据格式，不符合格式的数据无法入库。目前只支持'url'和'email'，未来会扩展其他格式|
|值域校验|pattern|String|正则表达式，如设置为手机号的正则表达式后，不符合该正则表达式则校验失败，无法入库|
|值域校验|validateFunction|string|扩展校验函数名|
|权限校验|permission|Object|数据库权限，控制什么角色可以对什么数据进行读/写，可控制表和字段，可设置where条件。见下文[详述](#permission)|
|错误返回|errorMessage|string&#124;Object |当数据写入或更新时，校验数据合法性失败后，返回的错误提示|
|关联关系|foreignKey|String|关联字段。表示该字段的原始定义指向另一个表的某个字段，值的格式为`表名.字段名`，比如订单表的下单用户uid字段指向uni-id-users表的_id字段，那么值为`uni-id-users._id`。关联字段定义后可用于[联表查询](jql.md#lookup)，通过关联字段合成虚拟联表，极大的简化了联表查询的复杂度|
|关联关系|parentKey|String|同一个数据表内父级的字段。详情参考：[树状数据查询](jql.md#gettree)|
|schema2code|label|string|字段标题。schema2code生成前端代码时，渲染表单项前面的label标题。如果不填，会使用title属性。适用于title不便显示在表单项前面的情况|
|schema2code|group|string|分组id。schema2code生成前端代码时，多个字段对应的表单项可以合并显示在一个uni-group组件中|
|schema2code|order|int|表单项排序序号。schema2code生成前端代码时，默认是以schema中的字段顺序从上到下排布表单项的，但如果指定了order，则按order规定的顺序进行排序。如果表单项被包含在uni-group中，则同组内按order排序|
|schema2code|component|Object&#124;Array|schema2code生成前端代码时，使用什么组件渲染这个表单项。已废弃。请使用下面的componentForEdit和componentForShow|
|schema2code|componentForEdit|Object&#124;Array|HBuilderX 3.1.0+, 生成前端编辑页面文件时(add.vue、edit.vue)，使用什么组件渲染这个表单项。比如使用input输入框。|
|schema2code|componentForShow|Object&#124;Array|HBuilderX 3.1.0+, 生成前端展示页面时(list.vue、detail.vue)，使用什么组件渲染。比如使用uni-dateformat格式化日期。|

**注意：**
1. schema2code，是根据scheme自动生成数据的增删改查页面的功能。入口1在uniCloud web控制台的数据库schema界面；入口2在HBuilderX中点击schema右键菜单。[详见](https://ext.dcloud.net.cn/plugin?id=4684)
2. 暂不支持子属性校验

**示例**

如果你阅读过[数据库入门文档](hellodb.md)，那么你的服务空间此时应该有表`resume`，且里面有一条数据。

我们仍以 `resume` 表为例，除了`_id`外，该表有6个业务字段：`name`, `birth_year`, `tel`, `email`, `address`, `intro`。

业务规则如下：
- `name`字段是字符串，长度大于等于2小于等于17，必填，需要去除头尾空白字符
- `birth_year`字段是大于等于1950小于2020的数字，必填
- `tel`字段是字符串，但格式是手机号，必填
- `email`字符是字符串，但格式是email，必填
- `address`字段类型为json object，它下面又有2个子字段，`city`和`street`，其中"city"字段必填
- `intro`字段类型为string，非必填，需要去除头尾空白字符

则`resume.schema.json`按如下编写。

```json
{
	"bsonType": "object",
	"required": ["name", "birth_year", "tel", "email"],
	"permission": {
		"read": true,
		"create": true,
		"update": true,
		"delete": true
	},
	"properties": {
		"_id": {
			"description": "ID，系统自动生成"
		},
		"name": {
			"bsonType": "string",
			"title": "姓名",
			"trim": "both",
			"minLength": 2,
			"maxLength": 17
		},
		"birth_year": {
			"bsonType": "int",
			"title": "出生年份",
			"minimum": 1950,
			"maximum": 2020
		},
		"tel": {
			"bsonType": "string",
			"title": "手机号码",
			"pattern": "^\\+?[0-9-]{3,20}$",
			"trim": "both"
		},
		"email": {
			"bsonType": "string",
			"title": "email",
			"format": "email",
			"trim": "both"
		},
		"address": {
			"bsonType": "object",
			"title": "地址",
			"required": ["city"],
			"properties": {
				"city": {
					"bsonType": "string",
					"title": "城市"
				},
				"street": {
					"bsonType": "string",
					"title": "街道",
					"trim": "both"
				}
			}
		},
		"intro":{
			"bsonType": "string",
			"title": "简介",
			"trim": "both"
		}
	}
}

```

注意：
- 把permission改成所有人可操作是为了测试方便，真实业务时需按照业务需求调整，需学习uni-id后方可掌握
- 真实业务不推荐address下设city和street，拉平层级更好。另外city应该通过enum关联另一个城市表，在候选城市列表中选择，后续在enum文档中举例

schema保存后，可以通过代码测试。注意在uniCloud web控制台修改数据不受schema限制，只有通过JQL操作数据时schema才生效。

我们在前端测试工程里新加一个按钮“添加数据”

```html
<template>
	<view class="content">
		<button @click="addresume()">添加数据</button>
	</view>
</template>

<script>
	const db = uniCloud.database();
	export default {
		data() {
			return {}
		},
		methods: {
			addresume() {
				db.collection("resume").add({
					"name": "1",
					"birth_year": 1949,
					"tel": "1",
					"email": "1"
				}).then((res) => {
					// res 为数据库查询结果
					console.log(res)
				}).catch((err) => {
					console.log(err.message)
				});
			}
	}
</script>
```

可以看到，不符合规则的数据无法通过JQL操作入库。可以依次把各个字段的测试值修正为合法格式测试，直到可以正常入库。

成功后，res会返回新增记录的id，也可以在web控制台看到新增的数据。

失败的提示语也可以通过errorMessage自定义。

成功后，再次点击“添加数据”按钮，会发现重复数据插入。避免这种情况需要设置索引，比如将tel字段设为唯一索引。[详见](db-index.md)

官方推出了`openDB`开源数据库规范，包括用户表、文章表、商品表等很多模板表，这些模板表均已经内置`DB Schema`，可学习参考。[详见](opendb.md)

schema 国际化方案 [详见](/tutorial/i18n?id=schema)


### 字段类型bsonType@bsontype

- bool：布尔值，true|false
- string：字符串
- password：一种特殊的string。这类字段不会通过clientDB传递给前端，所有用户都不能通过clientDB读写，即使是admin管理员。[uni-id-user](https://gitee.com/dcloud/opendb/blob/master/collection/uni-id-users/collection.json)表有示例
- int：整数
- double：精度数。由于浮点精度问题，慎用
- object：json对象。地理位置也属于object
- file：一种特殊的object，固定格式存放云存储文件的信息。不直接存储文件，而是一个json object，包括云存储文件的名称、路径、文件体积等信息。（HBuilderX 3.1.0+ ）
- array：数组
- timestamp：时间戳
- date：日期

复杂格式说明：
- timestamp是一串数字的时间戳，一般通过如下js获取`var timestamp = new Date().getTime()；`。它的好处是屏蔽了时区差异。阿里云和腾讯云的云端时区是0，但在HBuilderX本地运行云函数时，如果是中国的电脑，时区则会变成8，导致显示错乱。所以推荐使用时间戳。但时间戳是一串记录毫秒的数字，不合适直接渲染到前端界面上。推荐的做法是在前端渲染时使用[`<uni-dateformat>`组件](https://ext.dcloud.net.cn/plugin?id=3279)。
- 日期和地理位置在web控制台的数据库管理界面上无法直接在引号里录入值，需参考[文档](uniCloud/quickstart?id=editdb)
- double类型慎重，由于js不能精准处理浮点运算，0.1+0.2=0.30000000000000004。所以涉及金额时，建议使用int而不是double，以分为单位而不是以元为单位存储。比如微信支付默认就是以分为单位。如果使用[uniPay](uniCloud/unipay)处理支付的话，它的默认单位也是分。
- file的json object格式存储文件的基本信息和路径，如下：
```json
{
	"name": "filename.jpg",
	"extname": "jpg",
	"fileType": "image",
	"url": "https://xxxx", // 必填
	"size": 0, //单位是字节
	"image": { //图片扩展
		"width":10,//单位是像素
		"height":10
	},
	"video":{ //video和image不会同时存在。此处仅为列举所有数据规范
		"duration":123,//视频时长，单位是秒
		"poster":"https://xxx" //视频封面
	}
}
```

在上述格式中，除了`url`外，其他均为非必填。

`image`键是图片的扩展键，除了基本的宽高像素外，开发者可以自己扩展其他键，比如色位。同理`video`也可以自行扩展。

**示例**

以`resume`表为例，新加一个照片字段`photo`，设为file类型，定义格式如下（省略了其他老字段）：

```json
{
  "schema": {
    "bsonType": "object",
    "required": ["name", "birth_year", "tel", "email"],
    "properties": {
      "_id": {
        "description": "ID，系统自动生成"
      },
      "photo": {
        "bsonType": "file",
        "title": "照片",
        "fileMediaType": "image", // 可选值 all|image|video 默认值为all,表示所有文件，image表示图片类型文件，video表示视频类型文件
        "fileExtName": "jpg,png", // 扩展名过滤，多个用 , 分割
      }
    }
  }
}
```

**file的前端配套组件：**

uni-ui组件库中包含组件：`<uni-file-picker>` 。该组件和file字段的数据库完美搭配。

组件首先选择文件，并上传到uniCloud云存储，在表单提交后将上传文件的地址写入file字段中。详见：[https://ext.dcloud.net.cn/plugin?id=4079](https://ext.dcloud.net.cn/plugin?id=4079)

**file和schema2code：**

DB Schema定义字段类型为file后，可以通过schema2code工具，直接生成上传表单页面，前端页面包含`<uni-file-picker>`组件，选择、上传、写库一气呵成。详见：[schema2code](schema2code.md)

### 数组字段类型的子类型arrayType@arraytype

一个字段如果bsonType是array，那么它可以进一步通过arrayType指定这个数组里每个数组项目的bsonType，值域仍然是所有的字段类型。

比如一个字段存储了多张图片，那么可以设置bsonType为array，然后进一步设置arrayType为file。

**示例**

以`resume`表为例，新加一个照片字段`photos`，设为file类型，定义格式如下（省略了其他老字段）：

```json
{
  "schema": {
    "bsonType": "object",
    "required": [],
    "properties": {
      "_id": {
        "description": "ID，系统自动生成"
      },
      "images": {
        "bsonType": "array",
        "arrayType": "file",
        "title": "照片",
		"multiple": true, // 允许选择多张图片，schema2code生效
        "fileMediaType": "image", // 可选值 all|image|video 默认值为all,表示所有文件，image表示图片类型文件，video表示视频类型文件
        "fileExtName": "jpg,png", // 扩展名过滤，多个用 , 分割
        "maxLength": 3 // 限制最大数量
      }
    }
  }
}
```

- arrayType为file时，与单独的bsonType为file相同，`<uni-file-picker>`组件和schema2code均可使用。
- multiple、fileMediaType、fileExtName、maxLength都可对schema2code生成的客户端页面生效

### 默认值defaultValue/forceDefaultValue@defaultvalue

defaultValue和forceDefaultValue都是默认值，即新增一行数据记录时，如果字段内容未提供，则按默认值填充该字段内容。但2者也有区别，如下：

- defaultValue没有强制力，是普通的默认值，如果客户端上传一个其他值，则按客户端传的值为准。
- forceDefaultValue则是schema强制约定的值，不管客户端传什么都无法修改。只要数据库新增一条记录，字段的值就会是forceDefaultValue。

在实际开发中，forceDefaultValue常用于设置为当前服务器时间、当前登录用户id、客户端ip等。
这些数据都不能通过前端上传，不安全。过去只能在云端写云函数操作。在schema配置后则可以不用写云函数。使用JQL新增数据记录时会自动补齐这些数据。

`defaultValue/forceDefaultValue`内可以使用固定值，还可以使用预置变量`$env`，形式如下：

```json
"forceDefaultValue": {
  "$env": "now"
}
```

预置变量`$env`可取值如下：

|变量			|说明																								|
|:-:			|:-:																								|
|now			|当前服务器时间戳																					|
|clientIP	|当前客户端IP																				|
|uid			|当前用户Id，基于`uni-id`。如果当前用户未登录或登录状态无效会报错	|

示例：

```json
// 指定默认值为true
"defaultValue": true

// 指定强制默认值为当前服务器时间戳
"forceDefaultValue": {
  "$env": "now"
}

// 指定强制默认值为当前客户端IP
"forceDefaultValue": {
  "$env": "clientIP"
}

// 指定强制默认值为当前客户id
"forceDefaultValue": {
  "$env": "uid"
}
```


以`resume`表为例，新增一个字段`create_time`，表示记录的创建时间。

该字段的`defaultValue`指定为服务器时间。新增记录时，若前端不传该字段，则默认为当前服务器时间。若前端传一个指定的值，则以传的值为准。

```json
{
  "bsonType": "object",
  "required": [],
  "properties": {
    "create_time": {
      "bsonType": "timestamp",
      "title": "创建时间",
      "defaultValue": {
        "$env": "now"
      }
    }
  }
}
```


强制默认值`forceDefaultValue`，指定为当前服务器时间戳。此时前端传任何值均无效，新增记录时一定会变成当前云端时间。

```json
{
  "bsonType": "object",
  "required": [],
  "properties": {
    "create_time": {
      "bsonType": "timestamp",
      "title": "创建时间",
      "forceDefaultValue": {
        "$env": "now"
      }
    }
  }
}
```

在实际业务中，记录的创建时间不能由客户端篡改，比如强制为云端时间。所以这个场景下必须使用`forceDefaultValue`。

### foreignKey字段外键

一个复杂的业务系统，有很多张数据表。表与表之间，存在的数据关联。foreignKey用于描述数据关联关系。

比如一个文章系统，至少需要用户表、文章分类表、文章表、评论表。opendb已经包含了这4张表，可以点击链接看这些表的结构：
- 用户表：[uni-id-users](https://gitee.com/dcloud/opendb/blob/master/collection/uni-id-users/collection.json)
- 文章分类表：[opendb-news-categories](https://gitee.com/dcloud/opendb/blob/master/collection/opendb-news-categories/collection.json)
- 文章表：[opendb-news-articles](https://gitee.com/dcloud/opendb/blob/master/collection/opendb-news-articles/collection.json)
- 评论表：[opendb-news-comments](https://gitee.com/dcloud/opendb/blob/master/collection/opendb-news-comments/collection.json)

#### 分表
我们先不展开描述上面这几张表，首先讲解为什么分表、怎么分表。

- 熟悉关系型数据库的开发者对分表设计并不陌生
	只不过在uniCloud的数据库中，新增了一个传统数据库并没有的schema，其中还有一个foreignKey来表达各个表之间关联关系。
	比如上面几个表中的文章表：[opendb-news-articles](https://gitee.com/dcloud/opendb/blob/master/collection/opendb-news-articles/collection.json)，其中的作者字段`user_id`配置了`"foreignKey": "uni-id-users._id"`
- 而对于初学者，首先需要搞明白的是，为什么需要分表。

因为MongoDB的灵活性，理论上可以在用户表[uni-id-users]中新增一个字段articles，在articles下面通过数组来存放该作者的每一遍文章，然后在该文章中再来一个字段comments，存放该文章的每一条评论。

如下，uni-id-users表的数据内容，假使里面有2个用户，zhangsan和lisi，然后lisi写了1篇文章，这篇文章又被zhangsan评论了1条。
```json
[{
	"_id": "60b92a42e22fbe00018c359d",
    "username": "zhangsan",
    "password": "03caebb36670995fc261a275d212cad65e4bbebd",
    "register_date": 1622747714731,
    "register_ip": "192.168.0.1",
},
{
	"_id": "60b9315801033700011ba9ed",
    "username": "lisi",
    "password": "03caebb36670995fc261a275d212cad65e4bbebd",
    "register_date": 1622747714731,
    "register_ip": "192.168.0.2",
	"articles":[
		{
			"title": "文章标题",
			"content": "文章内容",
			"publish_date": 1617850851000,
			"publish_ip": "192.168.0.2",
			"comments":[
				{
					"user_id":"60b92a42e22fbe00018c359d",
					"comment_content":"评论内容",
					"comment_date":1617850851022,
					"comment_ip": "192.168.0.1"
				}
			]
		}
	]
}]
```

可以看出，这个uni-id-users表形成了用户、文章、评论的三层嵌套。

虽然MongoDB可以这么嵌套，但**实际业务中不该这样设计**。会导致查询性能低下甚至某些查询条件无法实现。

数据库是数字系统的底层，它应该清晰有条理，人、文章、评论以及这3者的关系，都应该清晰且不冗余。

MongoDB的嵌套，更多的适用于**不会被单独拎出来查询的、记录条数较少的场景**。

比如简历表中的工作经历，就可以嵌套。因为工作经历数量较少、且不会出现单独查工作经历而不查人的情况。

但文章表，是一定需要独立的，因为文章数量会非常多，它会单独搜索；

评论表其实不太有单独搜索的需求，它总是伴随指定文章出现。但因为数量会很多，评论也需要分页查询，嵌套在文章表下不利于分页查询。

所以正确的数据库设计，还是分开这几张表。另外很多文章系统都会有文章分类，比如 社会、教育、娱乐、体育、科技...，所以还需要一个文章分类表。

opendb的这4张表，才是正确的分表设计。
- 用户表：[uni-id-users](https://gitee.com/dcloud/opendb/blob/master/collection/uni-id-users/collection.json)
- 文章分类表：[opendb-news-categories](https://gitee.com/dcloud/opendb/blob/master/collection/opendb-news-categories/collection.json)
- 文章表：[opendb-news-articles](https://gitee.com/dcloud/opendb/blob/master/collection/opendb-news-articles/collection.json)
- 评论表：[opendb-news-comments](https://gitee.com/dcloud/opendb/blob/master/collection/opendb-news-comments/collection.json)

可以看到注册用户都在uni-id-users表中，而文章内容在opendb-news-articles表中。一个用户可能写了很多文章，这些文章不会存入uni-id-users表。

#### 表之间的关系

既然有了分表的概念，就存在表与表之间关系的概念了。

比如在文章表中，如何存放文章的作者信息？如何表示这篇文章是哪个用户写的？是存放作者的用户名吗？

实际上，文章表中的作者字段，也就是`user_id`字段，存放的是用户表中的这个作者的`_id`字段的值。`_id`是uniCloud数据库每张表的每个记录都有的唯一字段。

可以看下用户表uni-id-users和文章表opendb-news-articles具体数据，直观感受下：

uni-id-users用户表，还是假使里面有2个作者，zhangsan和lisi
```json
[{
	"_id": "60b92a42e22fbe00018c359d",
    "username": "zhangsan",
    "password": "03caebb36670995fc261a275d212cad65e4bbebd",
    "register_date": 1622747714731,
    "register_ip": "127.0.0.1",
},
{
	"_id": "60b9315801033700011ba9ed",
    "username": "lisi",
    "password": "03caebb36670995fc261a275d212cad65e4bbebd",
    "register_date": 1622747714731,
    "register_ip": "127.0.0.1",
}]
```

opendb-news-articles文章表，里面只有1篇文章，这篇文章是 lisi 写的，所以在字段`user_id`中存的就是`60b9315801033700011ba9ed`，这就是uni-id-users表中 lisi 对应的 `_id`
```json
{
	"_id": "606e721280b8450001e773c6",
    "category_id": "606e6feb653b8400017214a3",
    "title": "这里是标题",
    "content": "这里是正文",
    "user_id": "60b9315801033700011ba9ed",
    "publish_date": 1617850851000,
    "publish_ip": "119.131.174.251"
}
```

只要`user_id`这个关联关系映射起来，数据就清晰且完整了。

并不需要在文章表opendb-news-articles存放作者的用户名、昵称、头像、注册时间甚至密码，只需要存它的`user_id`，就精准、最小冗余的表达数据关系。

当然也有的系统设计为了减少联表查询而在文章表里冗余存放作者昵称和头像，是否使用冗余可以视需求而定，但一定需要用`user_id`来做数据表的关联。

#### foreignKey的用法

上面显示的是2个表的数据内容，但回到 DB Schema 中，如何在schema中表达这种关联关系？那就是foreignKey，外键。

文章表opendb-news-articles的 DB Schema 中的`user_id`字段的描述如下：
```json
"properties": {
  "_id": {
	"description": "存储文档 ID（用户 ID），系统自动生成"
  },
  "user_id": {
	"bsonType": "string",
	"description": "文章作者ID， 参考`uni-id-users` 表",
	"foreignKey": "uni-id-users._id",
	"defaultValue": {
	  "$env": "uid"
	}
  },
  "title":{},
  "content":{}
}
```

上面的重点，就在这个foreignKey，**它的前半部分是另一张表的表名，中间用`.`分割，后半部分是另一张表的字段名**。

它代表文章表这个`user_id`字段，在关系上实质指向uni-id-users表的`_id`字段。也就是文章表的`user_id`字段里存的值，其实是源自uni-id-users表的`_id`字段里的值。

注意不要搞反，并不是在uni-id-users表的schema的`_id`字段里配foreignKey。uni-id-users表的`_id`字段是原值，不引用自任何地方。而是在其他引用uid的字段来配。

同样，评论表[opendb-news-comments](https://gitee.com/dcloud/opendb/blob/master/collection/opendb-news-comments/collection.json)的schema里，
- 评论用户id字段`user_id`的foreignKey需指向`"uni-id-users._id"`
- 文章id字段`article_id`的foreignKey需指向`"opendb-news-articles._id"`

配置foreignKey，除了清晰描述数据关系，它最大的作用是**联表查询**。

JQL没有像SQL那样提供了join、leftjoin、innerjoin这些语法，只需要配置好数据关系，配好foreignKey，查询时就可以自动联表查询。

联表查询内容较多，[详见](jql.md#lookup)

<!-- 
以简历和招聘系统为例，一个完整系统至少需要如下表：
- 应聘者注册信息表（uni-id-users），包括`_id`、用户名、密码、注册时间
- 应聘者简历表（resume），包括`_id`、应聘者uid和简历中各种信息
- 招聘方注册信息表（uni-id-users），一般还是使用uni-id-users表，但通过不同的appid区分。详见uni-id的多系统登录
- 招聘方岗位表（job），包括`_id`、招聘方uid、职务名称、职务内容要求、薪资范围、职务发布时间
- 简历投递记录表（send-resume），包括`_id`、应聘者uid、岗位jobid、投递时间、简历是否被查阅
 -->

### parentKey树形表

在传统关系型数据库中，tree是很难表达的，只有oracle这种商业数据库提供了tree查询。其他关系型数据库需要开发者通过复杂的代码实现tree查询。

在MongoDB中，虽然自身天然支持tree，但实际业务中并不会使用MongoDB的json嵌套方式来描述tree。

比如部门tree，部门可以动态的新增、删除、改名、挪动层级。实际上每个部门，在部门表里的数据仍然是一条独立的行数据记录，并不是一条记录里无限嵌套下去。

如部门表，里面有2条数据，一条数据记录是“总部”，另一条数据记录“一级部门A”
- 错误的做法：
```json
{
    "_id": "5fe77207974b6900018c6c9c",
    "name": "总部",
	"child": [
		{
		    "_id": "5fe77232974b6900018c6cb1",
		    "name": "一级部门A",
		    "child": [],
		    "status": 0
		}
	],
    "status": 0
}
```

除非你的部门就这2个，永远不变。否则就不该使用上面的做法。
1. 如果部门很多嵌套很深，查询写法会很困难
2. 如果需要提供可视化的界面给运维人员，动态增删改部门，很难实现。往往需要改代码而不是直接改数据。

- 正确的做法：
每个部门是一条记录，用`parent_id`来描述层级关系。
```json
[{
    "_id": "5fe77207974b6900018c6c9c",
    "name": "总部",
    "parent_id": "",
    "status": 0
},
{
    "_id": "5fe77232974b6900018c6cb1",
    "name": "一级部门A",
    "parent_id": "5fe77207974b6900018c6c9c",
    "status": 0
}]
```

在"一级部门A"的`parent_id`中，值为`5fe77207974b6900018c6c9c`，它其实就是"总部"的`_id`。

那么在 DB Schema 中如何表达这种关系呢？就要使用parentKey。

部门表[opendb-department](https://gitee.com/dcloud/opendb/blob/master/collection/opendb-department/collection.json)的schema中，将字段`parent_id`的"parentKey"设为`"_id"`，即指定了数据之间的父子关系，如下：

```json
{
  "bsonType": "object",
  "required": ["name"],
  "properties": {
    "_id": {
      "description": "ID，系统自动生成"
    },
      "name": {
      "bsonType": "string",
      "description": "名称"
    },
    "parent_id": {
      "bsonType": "string",
      "description": "父id",
      "parentKey": "_id", // 指定父子关系为：如果数据库记录A的_id和数据库记录B的parent_id相等，则A是B的父级。
    },
    "status": {
      "bsonType": "int",
      "description": "部门状态，0-正常、1-禁用"
    }
  }
}
```

parentKey将数据表不同记录的父子关系描述了出来。一个字段A的属性设置了parentKey并指向另一个字段B，那么这个A的值，就一定等于B的值。

使用parentKey描述了字段父子关系后，就可以通过JQL的getTree方便的做tree查询了。因内容较多，[详见](jql.md#gettree)

## 字段值域规则validator@validator

`DB Schema`提供了一套完善的字段值域描述规则，并且自动进行数据入库校验，不符合规则的数据无法写入数据库。

注意只有要对数据库写入内容时（新增记录或修改记录）才涉及字段值域的校验问题。读与删不涉及。

`DB Schema`里的字段值域校验系统由4部分组成：
1. 字段的属性配置：是否必填（required）、数字范围（maximum、minimum）、字符串长度范围（minLength、maxLength）、format、pattern正则表达式、enum、trim等所有属性表格中被分类在值域校验里的属性
2. 字段间的关系约束：fieldRules。在schema一级节点，和properties平级。它比字段的属性配置更强大，可以描述字段之间的关系，比如字段结束时间需大于字段开始时间；可以简单编程
3. 字段的扩展校验函数：validateFunction。当属性配置和fieldRules都不能满足需求，还可以写完整的js编程进行校验。
4. 错误提示：errorMessage。常见错误有默认的错误提示语。开发者也可以自定义错误提示语

### 1. 字段属性配置

#### required必填字段

在schema一级节点的`required`中，可以以数组的方式填入多个字段名称。比如以下示例将name字段设为必填

```json
{
  "bsonType": "object",
  "required": ["name"],
  "properties": {
    "name": {
      "bsonType": "string",
      "title": "姓名",
      "errorMessage": "{title}不能为空"
    }
  }
}
```

一个字段的`required`，和字段的其他规则的关系如下：
- 字段被`required`时，必须传入该字段
- 字段没有被`required`时，如果传入的数据包含该字段则进行其他规则校验，否则忽略该字段的其他校验规则。

以下面的代码为例，如果不传name的值可以通过校验；如果传了name则要求name最小长度为2，否则校验失败

```json
{
  "bsonType": "object",
  "required": [],
  "properties": {
    "name": {
      "bsonType": "string",
      "title": "姓名",
      "minLength": 2,
      "errorMessage": {
        "required": "{title}不能为空",
        "minLength": "{title}不能小于 {minLength} 个字符"
      }
    }
  }
}
```

#### format@url

仅对string类型字段生效。

其中format的url格式补充说明如下：

`http://` | `https://` | `ftp://` 开头, `//` 后必须包含一个 `.`(localhost除外)

有效格式
- http://dcloud.io
- https://dcloud.io
- http://localhost

无效格式
- http://dcloud
- https://dcloud
- mailto:dcloud@dcloud.io
- file:\\
- file:\\\

**示例**

可以在`resume`表中增加一个email字段，使用format来约束其格式。

```json
{
  "bsonType": "object",
  "required": ["email"],
  "properties": {
    "email": {
      "bsonType": "string",
      "title": "邮箱",
      "format": "email",
      "errorMessage": {
        "required": "{title}不能为空",
        "format": "{title}格式无效"
      }
    }
  }
}
```

#### pattern正则表达式

例如: 验证手机号 `"pattern": "^\\+?[0-9-]{3,20}$"`


```json
{
  "bsonType": "object",
  "required": ["name"],
  "properties": {
    "name": {
      "bsonType": "string",
      "title": "姓名",
      "pattern": "",
      "errorMessage": {
        "required": "{title}不能为空",
        "pattern": "{title}格式无效"
      }
    }
  }
}
```

#### enum枚举控制值域@enum

enum，即枚举。一个字段设定了enum后，该字段的合法内容，只能在enum设定的候选数据项中取值。**HBuilderX 3.7.13移除校验数据时enum最多只可以枚举500条的限制**。

enum支持3种数据格式来描述候选：
1. 简单数组
2. 支持描述的复杂数组
3. 数据表查询

##### enum格式之简单数组

比如给`resume`表增加一个性别字段，合法值域只能是“0”、“1”、“2”中的一个。

```json
{
  "bsonType": "object",
  "required": [],
  "properties": {
    "_id": {
      "description": "存储文档 ID（用户 ID），系统自动生成"
    },
    "gender": {
      "bsonType": "array",
      "title": "性别",
      "description": "用户性别：0 未知 1 男性 2 女性",
      "enum": [0,1,2]
    }
  }
}
```

字段gender设成这样后，插入或修改的数据如果不是 0 或 1 或 2，就会报错，无法插入或更新数据。

通过schema2code生成前端表单页面时，带有enum的字段会生成 picker 组件。该组件在界面上渲染时会生成“1、2、3”这3个候选的复选框。所以一般不推荐使用简单数组，而是推荐下面的 支持描述的数组。

##### enum格式之支持描述的复杂数组

仍然使用性别字段举例，合法值域只能是“0”、“1”、“2”中的一个。但通过schema2code生成前端表单页面时，该字段会生成uni-data-checkbox组件，该组件在界面上渲染时会生成“未知”、“男”、“女”这3个候选的复选框。

```json
{
  "bsonType": "object",
  "required": [],
  "properties": {
    "_id": {
      "description": "存储文档 ID（用户 ID），系统自动生成"
    },
    "gender": {
		"bsonType": "int",
		"title": "性别",
		"defaultValue": 0,
		"enum": [
			{
				"text": "未知",
				"value": 0
			},
			{
				"text": "男",
				"value": 1
			},
			{
				"text": "女",
				"value": 2
			}
		]
	  }
  }
}
```

这种带描述的方式，让schema可读性提高，同时也让schema2code生成的前端界面可用性更高。

对于候选比较少的情况，schema2code使用需要弹出一次的picker未必合适。如果想在界面中平铺候选，比如 男、女、未知 直接显示在表单中，此时可以在schema的componentForEdit属性中改用[uni-data-checkbox组件](https://ext.dcloud.net.cn/plugin?id=3456)来表达性别选择。

##### enum格式之数据表查询

一个字段的合法值域，可以是从另一个数据查询而来。也即，在enum中可以配置JQL查询语句。

**这种方式需要搭配foreignKey来使用，也就是需要关联另一个表**

在opendb中有一个民族表[opendb-nation-china](https://gitee.com/dcloud/opendb/tree/master/collection/opendb-nation-china)，里面存放了中国的56个民族。

我们要在`resume`表中加一个民族字段，就应该从这个`opendb-nation-china`表取值。

1. 首先新建这个民族表

在项目根目录uniCloud/database点右键，新建schema，选择`opendb-nation-china`

这种opendb表的预置数据，需要上传schema到云端，才会添加到数据库中。所以需要对这个`opendb-nation-china.schema.json`点右键，上传 DB Schema

就可以uniCloud web控制台创建，此时会自动入库数据，但需要对项目根目录uniCloud/database点右键->下载 DB Schema，才可以在本地调试时使用。

2. 建立关联表关系、配置enum的jql查询

设置`nation`字段的外键`"foreignKey": "opendb-nation-china.name"`。民族比较简单，这里我们直接取了民族表的汉字名称为关联key，没有取数据库ID。

然后设置`nation`字段的enum如下：

```json
{
  "bsonType": "object",
  "required": [],
  "properties": {
    "_id": {
      "description": "存储文档 ID（用户 ID），系统自动生成"
    },
    "nation": {
      "bsonType": "string",
      "title": "民族",
      "foreignKey": "opendb-nation-china.name",
      "enum": {
        "collection": "opendb-nation-china",
        "orderby": "first_letter asc",
        "field": "name as value, name as text"
      }
    }
  }
}
```

这样客户端如果传上来一个不在`opendb-nation-china`表里的民族名称，是无法入库的。

通过schema2code生成前端表单页面时，该字段会生成 picker 组件，该组件被点击后，会弹出候选项，这些候选项都是从民族表中查询数据并显示的。

- enum格式之数据表查询之tree型数据

除了普通的二维数据表，enum还支持**tree型数据**。即enumType为tree。

在opendb中有一个城市表[opendb-city-china](https://gitee.com/dcloud/opendb/tree/master/collection/opendb-city-china)，里面存放了中国的各个城市。城市是按 省、市、区 分三级的树形数据。

在`resume`表中，有一个city字段，其合理的字段规则应该是从`opendb-city-china`表取值，

设置`enumType`为"tree"，代表enum里的数据为树形结构，比如下面的例子，代表opendb-city-china表以getTree方式查询。在schema2code时，可自动生成多级级联选择组件，[详见](/uniCloud/schema2code?id=schema2picker)
```json
{
  "schema": {
    "bsonType": "object",
    "required": ["city_id"],
    "properties": {
      "_id": {
        "description": "ID，系统自动生成"
      },
      "city_id": {
        "bsonType": "string",
        "title": "地址",
        "description": "城市编码",
        "foreignKey": "opendb-city-china.code",
        "enumType": "tree",
        "enum": {
          "collection": "opendb-city-china",
          "orderby": "value asc",
          "field": "code as value, name as text"
        }
      }
    }
  }
}

```

#### trim去除首尾空白字符@trim

是否将字符串两边空格trim掉。仅对string类型字段生效。

|值|描述|
|:-|:-|
|none|不处理。默认为none|
|both|从一个字符串的两端删除空白字符。在这个上下文中的空白字符是所有的空白字符 (space, tab, no-break space 等) 以及所有行终止符字符（如 LF，CR 等）|
|start|从字符串的开头移除空白字符|
|end|从一个字符串的末端移除空白字符|

trim的优先级，高于字符串的其他验证规则，比如format、pattern、minLength、validateFunction、fileRules。配置trim后，JQL引擎会首先将字符串trim后再交给其他验证系统验证。

配置trim后，schema2code生成的前端页面中的输入框也将自动trim用户的输入内容，然后再提交云端。

**示例**

以`resume`表为例，name字段有minLength为2的限制，假使插入name的值为“a ”，由于`a`后面的空格会先被trim掉，长度变成1，导致这个数据无法被写入数据库。

```json
{
  "bsonType": "object",
  "required": ["name"],
  "properties": {
    "name": {
      "bsonType": "string",
      "title": "姓名",
      "minLength": "2",
      "trim" : "both"
    }
  }
}
```


### 2. fieldRules字段间校验@field-rules

自`HBuilderX 3.1.0`起，支持schema内配置一级节点fieldRules对字段之间的关系进行约束和校验。当然只校验一个字段也可以。

fieldRules的写法等同JQL的where写法（也可以使用各种数据库运算方法），参考：[JQL where](jql.md#where)

fieldRules内配置如下，数组内可以配置多个rule，每个rule都有rule表达式、错误提示语、运行兼容环境这3部分。

```js
{
  "fieldRules": [{
    "rule": "end_date == null || end_date != null && create_date < end_date", // 校验规则
    "errorMessage": "创建时间和结束时间不匹配", // 错误提示信息（仅在新增时生效，更新数据时不会提示此信息）
    "client": false // schema2code时，当前规则是否带到前端也进行校验。目前此属性暂不生效，fieldRules不会在客户端校验数据，仅会在云端进行校验
  }],
}
```

rule表达式，是一组js，返回值必须为true或false。返回false则触发提示错误，错误提示显示的是errorMessage的内容。

rule表达式里支持：

1. 字段名称
2. 数据库运算方法
3. js语法
4. 另外还支持`new Date()`来获取时间。需要注意的是不同于数据库运算方法，`new Date()`内不可传入数据库字段作为参数

上述配置中，`create_date`、`end_date`为字段名称。schema内也支持写字段操作方法，如add方法。

例：在todo表内可以使用fieldRules限制`end_date`大于`create_date`

```json
{
  "bsonType": "object",
  "required": ["title","create_date"],
  "fieldRules": [{
    "rule": "end_date == null || end_date != null && create_date < end_date",
    "errorMessage": "结束时间需大于创建时间"
  }],
  "properties": {
    "title": {
      "bsonType": "string",
      "title": "标题"
    },
    "create_date": {
      "bsonType": "timestamp",
      "title": "创建时间",
      "forceDefaultValue": {
        "$env": "now"
      }
    },
    "end_date": {
      "bsonType": "timestamp",
      "title": "结束时间"
    }
  }
}
```
  
上述示例中，`create_date`为必填项，只需限制`end_date`存在时大于`create_date`即可

**注意**

- 新增/更新数据时会校验所有新增/更新字段相关联的fieldRules。如上述规则中，如果更新`end_date`字段或者`create_date`字段均会触发校验
- 新增数据时不需要查库进行校验，更新数据时需要进行一次查库校验（有多条fieldRules时也是一次）
- fieldRules内不支持使用正则

### 3. validateFunction扩展校验函数@validatefunction

扩展校验函数

当属性配置不满足需求，需要写js函数进行校验时，使用本功能。

**注意**

- 扩展校验函数不能有其他依赖
- 尽量不要在扩展校验函数中使用全局变量，如果一定要用请务必确保自己已经阅读并理解了[云函数的启动模式](uniCloud/cf-functions.md?id=launchtype)

如何使用

- 方式一：在uniCloud web控制台创建
1. uniCloud 控制台，选择服务空间，切换到数据库视图
2. 底部 “扩展校验函数” 点击 “+” 增加校验函数 ![](https://web-assets.dcloud.net.cn/unidoc/zh/schema-validate-function.png)
3. 给函数起个名字，比如叫“checkabc”

- 方式二：在HBuilderX中创建
`HBuilderX 3.0.0`及以上版本，可以在项目下创建扩展校验云函数并上传，使用方法如下：

1. 在左侧项目管理器选择工程，对其下的`uniCloud`目录点右键，选择`创建database目录`（如果已有该目录则忽略本步骤）
2. 在第一步创建的database目录右键选择`创建数据库扩展校验函数目录`
3. 在第二步创建的`validateFunction`目录右键选择`新建数据库扩展校验函数`

对`validateFunction`目录右键，还可以上传和下载`validateFunction`，和uniCloud web控制台进行同步。

扩展校验函数示例如下

  ```js
  // 扩展校验函数示例
  module.exports = function (rule, value, data, callback) {
    // rule  当前规则
    // value 当前规则校验数据
    // data  全部校验数据
    // callback 可选，一般用于自定义 errorMessage，如果执行了callback return 值无效，callback 传入的 message 将替换 errorMessage
    // callback('message') 传入错误消息时校验不通过
    // callback() 无参时通过
    // 注意 callback 不支持异步调用，异步请使用 Promise/await/async
    return value.length < 10
  }

  // 异步校验 Promise
  module.exports = function (rule, value, data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (value > 10) {
          // 校验通过
          resolve()
        } else {
          // 校验失败
          resolve('error') // 等于 reject(new Error('error'))
          // reject(new Error('error'))
        }
      }, 3000);
    })
  }

  // 异步校验 await/async
  module.exports = async function (rule, value, data) {
    let result = await uni.request({...})
    if (result > 10) {
      // 校验通过
      return true
    } else {
      // 校验失败
      return 'error message'
    }
  }
  ```

在HBuilderX中编写好`validateFunction`后，按Ctrl+u可以快捷上传`validateFunction`到uniCloud云端。

3. 在需要的字段中引用写好的`validateFunction`

编写`扩展校验函数`后，在表结构 schema 中确定要配置的字段，在该字段的`validateFunction`属性上，配置上面编写的`扩展校验函数`的名称。

如下例中，当name字段的内容要入库前，就会触发执行 "checkabc" 这个 `扩展校验函数` 。如果"checkabc"校验没有返回true，则该次数据库操作会失败。

`validateFunction` 类型为字符串时，云端和客户端同时生效

  ```json
  {
    "bsonType": "object",
    "required": ["name"],
    "properties": {
      "name": {
        "bsonType": "string",
        "title": "姓名",
        "validateFunction": "checkabc",
        "errorMessage": {
          "required": "{title}不能为空"
        }
      }
    }
  }
  ```


`validateFunction` 类型为对象时，可配置客户端同不生效，云端仍然生效

> HBuilder 3.1.0+ 支持

  ```json
  {
    "bsonType": "object",
    "required": ["name"],
    "properties": {
      "name": {
        "bsonType": "string",
        "title": "姓名",
        "validateFunction": {
            "name": "checkabc", // 扩展校验函数名
            "client": false //如果不配置默认是 true
        },
        "errorMessage": {
          "required": "{title}不能为空"
        }
      }
    }
  }
  ```

提示：如果配置了 `"client": false` 客户端也可以在生成的代码中改为自己的校验函数，此时客户端的校验仍然生效，客户端对应的校验文件目录为 `js_sdk/validator/collection`， `collection`为表名，非固定值


`扩展校验函数`是服务空间级的，一个`扩展校验函数`可以被这个服务空间下的任意表中的任意字段引用。

`扩展校验函数`里的代码是可以联网的。一个常见场景是内容的敏感词过滤，可以将内容提交到三方校验服务里，如果校验通过再入库。

不建议在`扩展校验函数`里编写大量的代码，会影响性能。

**扩展校验函数 的运行环境注意事项**

`扩展校验函数`的默认运行环境与普通云函数的环境相同，可以调用云函数里可用的各种API。
	* 如果要连接外网，要调用[uniCloud.httpclient](cf-functions.md#id=httpclient)；
	* 如果要调用数据库，需使用云函数里操作数据库的方式，即不支持JQL，[详见](cf-database.md)

但是，在[schema2code](/uniCloud/schema?id=autocode)中，`扩展校验函数`也会被生成到前端页面的校验规则里。

也就是说，如果使用[schema2code](/uniCloud/schema?id=autocode)生成前端页面，那么写`扩展校验函数`需要多一层注意。

比如调用了uniCloud.httpclient这样在前端并不存在的API时，前端的表单校验会出错。

此时就需要在`扩展校验函数`中多写一个if判断，避免undefined的问题。

```js
if (uniCloud.httpclient) {
	console.log("此处运行在云函数环境里。前端没有这个API");
}
// 或者另一种写法
if (uni) {
	console.log("此处运行在前端环境里。云函数没有uni对象，除非你在validateFunction里自己定义了这个对象");
}
```



### 4. errorMessage自定义错误提示@errormessage

数据不符合schema配置的规范时，无法入库，此时会报错。

uniCloud有一些基本错误提示语的格式化，如需自定义错误提示语，就需要使用本功能，根据errorMessage的定义报出错误提示。

errorMessage支持字符串，也支持json object。类型为object时，可定义多个校验提示。

{} 为占位符，可在其中引用已有属性，如title、label等。

|属性		|类型	|描述	|
|:-			|:-		|:-		|
|minLength	|string	|消息	|
|maxLength	|string	|消息	|
|...		|...	|...	|

示例

```json
{
  "required": ["name"],
  "properties": {
    "name": {
      "bsonType": "string",
      "title": "姓名",
      "minLength": 2,
      "maxLength": 8,
      "errorMessage": {
        "required": "{title}必填",
        "minLength": "{title}不能小于{minLength}个字符",
        "maxLength": "{title}不能大于{maxLength}个字符"
      },
      ...
    },
    "age": {
      "bsonType": "int",
      "title": "年龄",
      "minimum": 1,
      "maximum": 150,
      "errorMessage": "{title}应该大于 {minimum} 岁，小于 {maximum} 岁"
    }
  }
}
```

从示例可以看出，errorMessage支持配一条，也支持根据不同的错误类型配不同的errorMessage。

- 每个校验相关的属性不通过，可以以属性名为key配置它的错误提示语。
- 如果是扩展校验函数，可以在其内部写callback来自定义错误提示语。

**其他注意事项**

“数据库中某字段值不能在多条记录中重复”，这个需求一般不是在字段值域校验里实现，而是在数据库索引里配置该字段为唯一索引。[详见](/uniCloud/hellodb?id=dbindex)

可以在web控制台配置索引，db_init.json也可以创建索引。注意如果数据库中多条记录中该字段已经有重复内容，那么设该字段为唯一索引时会报错，需先把重复数据去掉。

## 数据权限系统permission@permission

### 概述

`DB Schema`的数据权限系统，是为`JQL`设计的，尤其`clientDB`强依赖这套权限系统。因为客户端是无法信任的，没有缜密的权限系统，会导致客户端任意改动云数据库内容。

在过去，开发者需要在后端写代码来处理权限控制，但实际上有了`DB Schema`和`uni-id`后，这种权限控制的后台代码就不用再写了。

只要配好`DB Schema`的权限，放开让前端写业务即可。配置里声明不能读写的数据，前端就无法读写。

`DB Schema`的permission规则，分为两部分，一边是对操作数据的指定，一边是对角色的指定，规则中对两者进行关联，匹配则校验通过。

1. 对数据的指定
- 可以对整个表进行`增删改查或计数`控制
- 可以针对字段进行`读写`控制
- 可以配置具体的where规则，对指定的数据记录进行`删改查`控制
- 默认自带一个特殊数据的描述，就是当前请求计划操作的数据（doc），后面会详解用法
2. 对角色的指定
- 未登录，即游客都可以操作数据
- 当前已登录用户（auth.uid）
- `uni-id`定义的其他角色
	* 开发者可以在`uni-id`中自定义各种角色，比如部门管理员，然后在`DB Schema`的permission中配置其可操作的数据。详见[uni-id的角色权限](uni-id-summary.md#rbac)

**注意**：如果登录用户是`uni-id`的admin角色，即超级管理员，则不受`DB Schema`的配置限制的，admin角色拥有对所有数据的读写权限。

例如在`uniCloud admin`等管理端系统，只要使用admin用户登录就可以在前端操作数据库。

在更新云端`DB Schema`时，如果发现服务空间下没有`uni-id`公共模块，会自动安装`uni-id`。如果服务空间已经存在`uni-id`，则不会再自动安装。此时需要注意及时升级`uni-id`，避免太老的`uni-id`有兼容问题。(从HBuilderX 3.5起，改为`uni-id-common`公共模块)

### 表级权限控制@col-permission

表级控制，包括增删改查四种权限，分别称为：create、delete、update、read。（注意这里使用的是行业通用的crud命名，与操作数据库的方法add()、remove()、update()、get()在命名上有差异，但表意是相同的）

HBuilderX 3.1.0起还新增了count权限，即是否有权对该表进行统计计数。

所有的操作的默认值均为false。也就是不配置permission代表不能操作数据库（角色为admin用户例外）。

例如一个user表，里面有_id、name、pwd等字段，该表的`DB Schema`如下，代表前端用户可读（包括游客），但前端非admin用户不可新增、删除、更新数据记录。

```json
// user表的schema
{
  "bsonType": "object",
  "required": [],
  "permission": {
    "read": true, // 任何用户都可以读
    "create": false, // 禁止新增数据记录（admin权限用户不受限）
    "update": false, // 禁止更新数据（admin权限用户不受限）
    "delete": false, // 禁止删除数据（admin权限用户不受限）
    "count": false // 禁止查询数据条数（admin权限用户不受限），新增于HBuilderX 3.1.0
  },
  "properties": {
    "_id":{},
    "name":{},
    "age": {},
    "pwd": {}
  }
}
```
  
**关于count权限的说明**

- 在HBuilderX 3.1.0之前，count操作都会使用表级的read权限进行验证。HBuilderX 3.1.0及之后的版本，如果配置了count权限则会使用表级的read+count权限进行校验，两条均满足才可以通过校验
- 如果schema内没有count权限，则只会使用read权限进行校验
- 所有会统计数量的操作均会触发count权限校验

### 字段级权限控制

permission的字段级控制，包括读写两种权限，分别称为：read、write。

也就是对于一个指定的字段，可以控制什么样的角色可以读取该字段内容，什么样的角色可以修改写入字段内容。

以上述的user表为例，假如要限制前端禁止读取age字段，那么按如下配置，在字段age下面再写permission节点，设定read为false。

```json
// user表的schema
{
  "bsonType": "object",
  "required": [],
  "permission": {
    "read": true, // 任何用户都可以读
    "create": false, // 禁止新增数据记录（admin权限用户不受限）
    "update": false, // 禁止更新数据（admin权限用户不受限）
    "delete": false // 禁止删除数据（admin权限用户不受限）
  },
  "properties": {
    "_id":{
    },
    "name":{
    },
    "age": {
      "bsonType": "number",
      "title": "年龄",
      "permission": {
        "read": false, // 禁止读取 age 字段的数据（admin权限用户不受限）
        "write": false // 禁止写入 age 字段的数据（admin权限用户不受限）
      }
    }
  }
}
```

按上述配置，前端查询数据时，如果不包含age字段，仍然可以查询。但如果查询请求包含age字段，该请求会被拒绝，提示无权访问。

子级会继承父级的权限，即需要同时满足父级权限以及本节点权限，方可操作此节点。例如上述schema中如果配置表级read权限为false，在为name设置read权限为true的情况下，name字段仍不可读

如果字段的bsonType配置为password，则clientDB完全不可操作此字段（即使是admin用户也不可以在客户端读写）。

```js
// user表的schema
{
  "bsonType": "object",
  "required": [],
  "permission": {
    "read": true, // 任何用户都可以读
    "create": false, // 禁止新增数据记录（admin权限用户不受限）
    "update": false, // 禁止更新数据（admin权限用户不受限）
    "delete": false // 禁止删除数据（admin权限用户不受限）
  },
  "properties": {
    "_id":{
    },
    "name":{
    },
    "pwd": {
      "bsonType": "password", // 即使不配置权限，此字段也无法在客户端读写
      "title": "密码"
    }
  }
}
```

### 指定数据集权限控制

`DB Schema`提供了一个内置变量doc，表示要意图操作的数据记录。并支持用各种表达式来描述指定的记录。

仍然以user表举例，假使该表有个字段叫`status`表示用户是否被禁用。`status`是bool值，true代表用户状态正常，false代表被禁用。

然后有个需求，JQL只能查用户状态正常的用户信息，禁用用户信息无法查。那么schema配置如下，表级控制的read节点的值不再是简单的true/false，而是变成一个表达式：`"doc.status==true"`

```json
// user表的schema
{
  "bsonType": "object",
  "required": [],
  "permission": {
    "read": "doc.status==true", // 任何用户都可以读status字段的值为true的记录，其他记录不可读
    "create": false, // 禁止新增数据记录（admin权限用户不受限）
    "update": false, // 禁止更新数据（admin权限用户不受限）
    "delete": false // 禁止删除数据（admin权限用户不受限）
  },
  "properties": {
    "_id":{
    },
    "name":{
    },
    "pwd": {
      "bsonType": "string",
      "title": "密码",
      "permission": {
        "read": false, // 禁止读取 pwd 字段的数据（admin权限用户不受限）
        "write": false // 禁止写入 pwd 字段的数据（admin权限用户不受限）
      }
    },
    "status": {
      "bsonType": "bool",
      "title": "用户状态",
      "description": "true代表用户正常。false代表用户被禁用"
    }
  }
}
```

根据这个配置，如JQL查询user表的所有数据，则会报权限校验失败；如JQL查询里在where条件里声明了只查询status字段为true的数据，则查询会放行。

### 权限规则的变量和运算符

除了上述例子提到的doc变量，事实上`DB Schema`的权限规则支持很多变量和运算符，可以满足各种配置需求。

**权限规则内可用的全局变量**

|变量名					|说明																																																																							|
|:-:						|:-:																																																																							|
|auth.uid				|用户id																																																																						|
|auth.role			|用户角色数组，参考[uni-id 角色权限](uni-id-summary.md#rbac)，注意`admin`为内置的角色，如果用户角色列表里包含`admin`则认为此用户有完全数据访问权限|
|auth.permission|用户权限数组，参考[uni-id 角色权限](uni-id-summary.md#rbac)																																											|
|doc						|数据库中的目标数据记录，用于匹配记录内容/查询条件																																																|
|now						|当前服务器时间戳（单位：毫秒），时间戳可以进行额外运算，如doc.publish\_date > now - 60000表示publish\_date在最近一分钟														|
|action					|数据操作请求同时指定的uni-clientDB-action。用于指定前端的数据操作必须同时附带执行一个action云函数，如未触发该action则权限验证失败								|

**注意**
- `auth`表示正在执行操作的用户对象
- `auth.xxx`均由uni-id提供，依赖于[uni-id公共模块](uni-id-summary.md)
- `doc.xxx`表示将要查询/修改/删除的每条数据（注意并不包括新增数据，新增数据应通过值域校验进行验证），如果将要访问的数据不满足permission规则将会拒绝执行
- `uni-id`的角色和权限，也即auth.role和auth.permission是不一样的概念。注意阅读[uni-id 角色权限](uni-id-summary.md#rbac)
- 如果想支持使用多个`action`的用法，可以通过`"'actionRequired' in action"`的形式配置权限，限制客户端使用的action内必须包含名为`actionRequired`的action
- doc可以理解为将要访问的数据，因此create权限内不可使用doc变量。create时建议使用forceDefaultValue或自定义校验函数实现插入数据的值域校验。

**权限规则内可以使用的运算符**

|运算符			|说明			|示例									|示例解释(集合查询)														|
|:-:			|:-:			|:-:									|:-:																	|
|==				|等于			|auth.uid == 'abc'						|用户id为abc															|
|!=				|不等于			|auth.uid != null						|用户要处于登录状态											|
|>				|大于			|doc.age>10								|目标数据的 age 属性大于 10												|
|>=				|大于等于		|doc.age>=10							|目标数据的 age 属性大于等于 10											|
|<				|小于			|doc.age<10								|目标数据的 age 属性小于 10												|
|<=				|小于等于		|doc.age<=10							|目标数据的 age 属性小于等于 10											|
|in				|存在在数组中	|doc.status in ['a','b']				|目标数据的 status 是['a','b']中的一个，数组中所有元素类型需一致		|
|!				|非				|!(doc.status in ['a','b'])				|目标数据的 status 不是['a','b']中的任何一个，数组中所有元素类型需一致	|
|&&				|与				|auth.uid == 'abc' && doc.age>10		|用户id 为 abc 并且目标数据的 age 属性大于 10							|
|&#124;&#124;	|或				|auth.uid == 'abc'&#124;&#124;doc.age>10|用户Id为abc或者目标数据的 age 属性大于 10								|


我们继续使用user表举例，目前需求如下，前端用户如果登录，那么该用户可以修改自己的name字段。此时需要在schema中配置name字段的permission为`"write":"(doc._id == auth.uid)"`

```json
// user表的schema
{
  "bsonType": "object",
  "required": [],
  "permission": {
    "read": "doc.status==true", // 任何用户都可以读status字段的值为true的记录，其他记录不可读
    "create": false, // 禁止新增数据记录（admin权限用户不受限）
    "update": "'updateuser' in auth.permission", // 权限标记为updateuser的用户，和admin管理员，可以更新数据，其他人无权更新数据
    "delete": false // 禁止删除数据（admin权限用户不受限）
  },
  "properties": {
    "_id":{
	},
	"name":{
		"bsonType": "string",
		"title": "名称",
		"permission": {
		  "read": true, 
		  "write": "doc._id == auth.uid" // 允许登录的用户修改自己的name字段
		}
	},
    "pwd": {
      "bsonType": "string",
      "title": "密码",
      "permission": {
        "read": false, // 禁止读取 pwd 字段的数据（admin权限用户不受限）
        "write": false // 禁止写入 pwd 字段的数据（admin权限用户不受限）
      }
    },
	"status": {
		"bsonType": "bool",
		"title": "用户状态",
		"description": "true代表用户正常。false代表用户被禁用"
	}
  }
}
```

根据这个配置，如前端应用已经登录，且登录的用户发起修改自己的name的请求，则允许修改。其他修改数据请求则会被拒绝。

**注意**

要分清 数据权限permission 和 字段值域校验validator 的区别。

在权限规则的变量中只有数据库中的数据doc，并没有前端提交的待入库数据data。所以如果要对待入库的数据data做校验，应该在字段值域validator中校验，而不是在权限permission中校验。

如果想获取和判断目标数据记录doc之外的其他数据，则需要使用get方法，见下一章节。

forceDefaultValue属于数据校验的范畴，在数据写入时生效，但是如果配置forceDefaultValue为`{"$env": "uid"}`也会进行用户身份的校验，未登录用户不可插入数据。

例如在news表新增一条记录，权限需求是“未登录用户不能创建新闻”，其实不需要在news表的create权限里写`auth.uid != null`。只需把news表的uid字段的forceDefaultValue设为`"$env": "uid"`，create权限配置为true即可，未登录用户自然无法创建。当然实际使用时你可能需要更复杂的权限，直接使用true作为权限规则时务必注意

**permission和role的使用注意**

在schema中使用uni-id的permission和role，首先需要在uniCloud admin中创建好权限，然后创建角色并给该角色分配权限，最后创建用户并授权角色。

这样用户登录后，uniCloud会自动分析它的permission和role，在schema里编写的关于permission和role的限制也可以一一对应上，进行有效管理。

admin中创建权限、角色和用户授权，另见[文档](/uniCloud/admin?id=mutiladmin)

**变量action的说明**

action是`clientDB`的一个配套功能。它的作用是在前端发起数据操作请求时，附带一个action的name，则会同时执行一个`uni-clientDB-action`的云函数。[详见](jql.md#action)

有些复杂业务，要求必须同时执行一个action云函数，才能允许前端对特定数据的修改。

以user表为例，假使用户在修改自己的name时，必须要触发一个名为changenamelog的action云函数，在该云函数里会记录一条留痕日志，如果没有记录日志则不允许修改name。
那么在`DB Schema`里要配置`'changenamelog' in action`

```json
// user表的schema
{
  "bsonType": "object",
  "required": [],
  "permission": {
    "read": "doc.status==true", // 任何用户都可以读status字段的值为true的记录，其他记录不可读
    "create": false, // 禁止新增数据记录（admin权限用户不受限）
    "update": false, // 禁止更新数据（admin权限用户不受限）
    "delete": false // 禁止删除数据（admin权限用户不受限）
  },
  "properties": {
    "_id":{
	},
	"name":{
		"bsonType": "string",
		"title": "名称",
		"permission": {
		  "read": true, 
		  "write": "(doc._id == auth.uid) && ('changenamelog' in action)" // 允许登录的用户修改自己的name字段，但必须同时触发执行action云函数changenamelog
		}
	},
    "pwd": {
      "bsonType": "string",
      "title": "密码",
      "permission": {
        "read": false, // 禁止读取 pwd 字段的数据（admin权限用户不受限）
        "write": false // 禁止写入 pwd 字段的数据（admin权限用户不受限）
      }
    },
	"status": {
		"bsonType": "bool",
		"title": "用户状态",
		"description": "true代表用户正常。false代表用户被禁用"
	}
  }
}
```

前端提交代码，必须带上action参数
```js
const db = uniCloud.database();
db.action("changenamelog").collection("user").doc("xxx").update({
	name:"newname"
})
```

action云函数中记录日志的代码，此处省略。

根据上述配置，如前端应用已经登录，且登录的用户发起修改自己的name的请求，且同时前端的改库请求伴随action云函数changenamelog，则允许修改。其他修改数据请求则会被拒绝。

`action`有很多用途，有的权限规则比较复杂，需要写很多js代码，此时也可以在`action`的before中进行校验。

但注意导出`db_init.json`时不会包含`action`，`action`属于云函数。导出`db_init.json`只会包含schema和validateFunction。


### 权限规则内的数据库查询get方法

权限规则内置了doc变量，但只能用于要操作的数据表的判断，如果要获取其他表的数据做判断就需要get方法了。

权限规则内通过get方法，根据id获取数据库中的数据。get方法接收一个字符串作为参数，字符串形式为`database.表名.记录ID`

例如有个论坛，要求用户积分大于100分才可以发帖。那么帖子表的create权限应该配成：

```json
// 使用模板字符串语法拼接产生`database.表名.记录ID`形式字符串
"create": get(`database.uni-id-users.${auth.uid}`).score > 100"
```

使用get方法时需要注意get方法的参数必须是唯一确定值，例如schema配置的get权限如下：

```json
// 这句的含义是，本次查询where条件内传入的shop_id需要满足以下条件：shop表内_id为此shop_id的记录的owner字段等于当前用户uid
"get(`database.shop.${doc.shop_id}`).owner == auth.uid"
```

前端js如下：
```js
// 此条件内doc.shop_id只能是'123123'，可以通过get(`database.shop.${doc.shop_id}`)获取shop表内_id为123123的记录验证其owner是否等于当前用户uid
db.collection('street').where("shop_id=='123123'").get()

// 此条件内doc.shop_id可能是'123123'也可能是'456456'，`"get(`database.shop.${doc.shop_id}`).owner == auth.uid"`会直接返回false不会获取shop表数据进行验证
db.collection('street').where("shop_id=='123123 || shop_id=='456456'").get()
```

## schema2code代码生成系统@autocode

`DB Schema`里有大量的信息，其实有了这些信息，前端将无需自己开发表单维护界面，uniCloud可以自动生成新增、修改、列表、详情的前端页面，以及admin端的列表、新增、修改、删除全套功能。

因内容较长，请另见文档[schema2code](schema2code.md)