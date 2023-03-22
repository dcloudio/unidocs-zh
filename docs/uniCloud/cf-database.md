云函数中支持对云数据库的全部功能的操作。本章节主要讲解如何在云函数内通过传统api操作数据库，如需在云函数内使用JQL语法操作数据库，请参考：[云函数内使用JQL语法](uniCloud/jql-cloud.md)

## 获取集合的引用@get-collection

```js
const db = uniCloud.database();
// 获取 `user` 集合的引用
const collection = db.collection('user');
```

### 集合 Collection@collection

通过 `db.collection(name)` 可以获取指定集合的引用，在集合上可以进行以下操作

| 类型     | 接口    | 说明                                                                               |
| -------- | ------- | ---------------------------------------------------------------------------------- |
| 写       | add     | 新增记录（触发请求）                                                               |
| 计数     | count   | 获取符合条件的记录条数                                                             |
| 读       | get     | 获取集合中的记录，如果有使用 where 语句定义查询条件，则会返回匹配结果集 (触发请求) |
| 引用     | doc     | 获取对该集合中指定 id 的记录的引用                                                 |
| 查询条件 | where   | 通过指定条件筛选出匹配的记录，可搭配查询指令（eq, gt, in, ...）使用                |
|          | skip    | 跳过指定数量的文档，常用于分页，传入 offset                                        |
|          | orderBy | 排序方式                                                                           |
|          | limit   | 返回的结果集(文档数量)的限制，有默认值和上限值                                     |
|          | field   | 指定需要返回的字段                                                                 |


查询及更新指令用于在 `where` 中指定字段需满足的条件，指令可通过 `db.command` 对象取得。


### 记录 Record / Document@doc

通过 `db.collection(collectionName).doc(docId)` 可以获取指定集合上指定 _id 的记录的引用，在记录上可以进行以下操作

| 接口| 说明||
| ----| ------|----|
| 写	| update        | 局部更新记录(触发请求)只更新传入的字段。如果被更新的记录不存在，会直接返回更新失败|
|       | set		| 覆写记录;会删除操作的记录中的所有字段，创建传入的字段。如果操作的记录不存在，会自动创建新的记录|
|			| remove| 删除记录(触发请求)|
| 读	| get		| 获取记录(触发请求)|

doc(docId)方法的参数只能是字符串，即数据库默认的_id字段。

如需要匹配多个`_id`的记录，应使用where方法。可以在where方法里用in指令匹配一个包含`_id`的数组。

新增文档时数据库会自动生成_id字段，也可以自行将_id设置为其他值

### 查询筛选指令 Query Command@query-command

以下指令挂载在 `db.command` 下

| 类型     | 接口 | 说明                               |
| -------- | ---- | ---------------------------------- |
| 比较运算 | eq   | 字段等于 ==                            |
|          | neq  | 字段不等于 !=                            |
|          | gt   | 字段大于 >                             |
|          | gte  | 字段大于等于 >=                            |
|          | lt   | 字段小于 <                             |
|          | lte  | 字段小于等于 <=                            |
|          | in   | 字段值在数组里                     |
|          | nin  | 字段值不在数组里                   |
| 逻辑运算 | and  | 表示需同时满足指定的所有条件       |
|          | or   | 表示需同时满足指定条件中的至少一个 |

如果你熟悉SQL，可查询[mongodb与sql语句对照表](https://blog.csdn.net/xinghebuluo/article/details/7012788/)进行学习。

### 字段更新指令 Update Command@update-command

以下指令挂载在 `db.command` 下

| 类型 | 接口    | 说明                             |
| ---- | ------- | -------------------------------- |
| 字段 | set     | 设置字段值                       |
|      | remove  | 删除字段                         |
|      | inc     | 加一个数值，原子自增             |
|      | mul     | 乘一个数值，原子自乘             |
|      | push    | 数组类型字段追加尾元素，支持数组 |
|      | pop     | 数组类型字段删除尾元素，支持数组 |
|      | shift   | 数组类型字段删除头元素，支持数组 |
|      | unshift | 数组类型字段追加头元素，支持数组 |

## 新增文档@add

方法1： collection.add(data)

参数说明

| 参数 | 类型   | 必填 | 说明                                     |
| ---- | ------ | ---- | ---------------------------------------- |
| data | object &#124; array | 是   | {_id: '10001', 'name': 'Ben'} _id 非必填|

响应参数

单条插入时


| 参数| 类型	|  说明																			|
| ----| ------|  ----------------------------------------	|
|id		| String|插入记录的id																|

批量插入时

| 参数		| 类型	|  说明																			|
| ----		| ------|  ----------------------------------------	|
|ids			| Array	|批量插入所有记录的id												|

示例：

```js
// 单条插入数据
let res = await collection.add({
  name: 'Ben'
})
// 批量插入数据
let res = await collection.add([{
  name: 'Alex'
},{
  name: 'Ben'
},{
  name: 'John'
}])
```

**Tips**

- 目前云服务商为阿里云时，若集合不存在，调用add方法会自动创建集合。后续可能调整此行为，此方式创建的集合不带索引、表结构，请勿依赖此方式创建集合。

方法2： collection.doc().set(data)

也可通过 `set` 方法新增一个文档，需先取得文档引用再调用 `set` 方法。
如果文档不存在，`set` 方法会创建一个新文档。


**参数说明**

| 参数 | 类型   | 必填 | 说明                                     |
| ---- | ------ | ---- | ---------------------------------------- |
| data | object | 是   | 更新字段的Object，{'name': 'Ben'}|

**响应参数**

| 参数			| 类型	|  说明																				|
| ----			| ------|  ----------------------------------------		|
|updated		| Number| 更新成功条数，数据更新前后没变化时也会返回1	|
|upsertedId	| String| 创建的文档id																|


```js
let res = await collection.doc('doc-id').set({
  name: "Hey"
});
```

**注意**

- 阿里云自动生成的_id是递增的，后创建的记录的_id总是大于先生成的_id。腾讯云自动生成的_id并非递增。

## 查询文档@query

支持 `where()`、`limit()`、`skip()`、`orderBy()`、`get()`、`field()`、`count()` 等操作。

只有当调用`get()`时才会真正发送查询请求。

limit，即返回记录的最大数量，默认值为100，也就是不设置limit的情况下默认返回100条数据。limit最大为1000条。

如需查询更多数据，需要分页多次查询。

如果使用JQL语法传入getTree参数以返回树形数据也受上面的规则限制，不过此时limit方法仅对根节点生效（大量数据建议使用分层加载，不要使用getTree一次返回所有数据）

**get响应参数**

| 参数| 类型	|  说明																			|
| ----| ------|  ----------------------------------------	|
|data	| Array	| 查询结果数组															|

### 添加查询条件@where

collection.where()

**在聚合操作中请使用match**

设置过滤条件，where 可接收对象作为参数，表示筛选出拥有和传入对象相同的 key-value 的文档。比如筛选出所有类型为计算机的、内存为 8g 的商品：

```js
let res = await db.collection('goods').where({
  category: 'computer',
  type: {
    memory: 8,
  }
}).get()
```

如果要表达更复杂的查询，可使用高级查询指令，比如筛选出所有内存大于 8g 的计算机商品：
```js
const dbCmd = db.command // 取指令
db.collection('goods').where({
  category: 'computer',
  type: {
    memory: dbCmd.gt(8), // 表示大于 8
  }
})
```

在SQL里使用字符串表达式操作。但在NOSQL中使用json操作。这使得 等于 的表达，从 `=` 变成了 `:`；而大于的表达，从 `>` 变成了 `dbCmd.gt()`

所有的比较符，详见[表格](https://uniapp.dcloud.io/uniCloud/cf-database-dbcmd?id=%e6%9f%a5%e8%af%a2%e7%ad%9b%e9%80%89%e6%8c%87%e4%bb%a4-query-command)


`where` 还可以使用正则表达式来查询文档，比如一下示例查询所有`name`字段以ABC开头的用户
```js
db.collection('user').where({
  name: new RegExp('^ABC')
})
```

**按照数组内的值查询**

mongoDB内按照数组内的值查询可以使用多种写法，以下面的数据为例

```js
{
  arr:[{
    name: 'item-1',
  },{
    name: 'item-2',
  }]
}

{
  arr:[{
    name: 'item-3',
  },{
    name: 'item-4',
  }]
}
```

如果想查询arr内第一个元素的name为item-1的记录可以使用如下写法

```js
const res = await db.collection('test').where({
  'arr.0.name': 'item-1'
})

res = {
  data:[{
    arr:[{
      name: 'item-1',
    },{
      name: 'item-2',
    }]
  }]
}
```

如果想查询arr内某个元素的name为item-1的记录（可以是数组内的任意一条name为item-1）可以使用如下写法

```js
const res = await db.collection('test').where({
  'arr.name': 'item-1'
})

res = {
  data:[{
    arr:[{
      name: 'item-1',
    },{
      name: 'item-2',
    }]
  }]
}
```

### 获取查询数量@count

collection.count()

```js
let res = await db.collection('goods').where({
  category: 'computer',
  type: {
    memory: 8,
  }
}).count()
```

响应参数

| 字段      | 类型    | 必填 | 说明                     |
| --------- | ------- | ---- | ------------------------ |
| total     | Number | 否   | 计数结果                 |

**注意：**

- 数据量很大的情况下，带条件运算count全表的性能会很差，尽量使用其他方式替代，比如新增一个字段专门用来存放总数。不加条件时count全表不存在性能问题。

### 设置记录数量@limit

collection.limit()

参数说明

| 参数  | 类型    | 必填 | 说明           |
| ----- | ------- | ---- | -------------- |
| value | Number | 是   | 返回的数据条数 |

使用示例

```js
let res = await collection.limit(1).get() // 只返回第一条记录
```

**注意**

- limit不设置的情况下默认返回100条数据；设置limit有最大值，腾讯云限制为最大1000条，阿里云限制为最大500条。

### 设置起始位置@skip

collection.skip(value)

参数说明

| 参数  | 类型    | 必填 | 说明           |
| ----- | ------- | ---- | -------------- |
| value | Number | 是   | 跳过指定的位置，从位置之后返回数据 |

使用示例

```js
let res = await collection.skip(4).get()
```

**注意：数据量很大的情况下，skip性能会很差，尽量使用其他方式替代，参考：[skip性能优化](uniCloud/db-performance.md?id=skip)**

### 对结果排序@order-by

collection.orderBy(field, orderType)

参数说明

| 参数      | 类型   | 必填 | 说明                                |
| --------- | ------ | ---- | ----------------------------------- |
| field     | string | 是   | 排序的字段                          |
| orderType | string | 是   | 排序的顺序，升序(asc) 或 降序(desc) |

如果需要对嵌套字段排序，需要用 "点表示法" 连接嵌套字段，比如 style.color 表示字段 style 里的嵌套字段 color。

同时也支持按多个字段排序，多次调用 orderBy 即可，多字段排序时的顺序会按照 orderBy 调用顺序先后对多个字段排序


使用示例

```js
let res = await collection.orderBy("name", "asc").get()
```

**注意**

- 排序字段存在多个重复的值时排序后的分页结果，可能会出现某条记录在上一页出现又在下一页出现的情况。这时候可以通过指定额外的排序条件比如`.orderBy("name", "asc").orderBy("_id", "asc")`来规避这种情况。

### 指定返回字段@field

collection.field()

从查询结果中，过滤掉不需要的字段，或者指定要返回的字段。

参数说明

| 参数 | 类型   | 必填 | 说明                                    |
| ---- | ------ | ---- | --------------------------------------- |
| -    | object | 是   | 过滤字段对象，包含字段名和策略，不返回传false，返回传true |

使用示例

```js
collection.field({ 'age': true }) //只返回age字段、_id字段，其他字段不返回
```

**注意**

- field内指定是否返回某字段时，不可混用true/false。即{'a': true, 'b': false}是一种错误的参数格式
- 只有使用{ '_id': false }明确指定不要返回_id时才会不返回_id字段，否则_id字段一定会返回。

### 查询指令@dbcmd

查询指令以dbCmd.开头，包括等于、不等于、大于、大于等于、小于、小于等于、in、nin、and、or。


下面的查询指令以以下数据集为例：

```json
// goods表

[{
  "type": {
    "brand": "A",
    "name": "A-01",
    "memory": 16,
    "cpu": 3.2
  },
  "category": "computer",
  "quarter": "2020 Q2",
  "price": 2500
},{
  "type": {
    "brand": "X",
    "name": "X-01",
    "memory": 8,
    "cpu": 4.0
  },
  "category": "computer",
  "quarter": "2020 Q3",
  "price": 6500
},{
  "type": {
    "brand": "S",
    "name": "S-01",
    "author": "S-01-A"
  },
  "category": "book",
  "quarter": "2020 Q3",
  "price": 20
}]

```

#### eq 等于@dbcmd-eq

表示字段等于某个值。`eq` 指令接受一个字面量 (literal)，可以是 `number`, `boolean`, `string`, `object`, `array`。

事实上在uniCloud的数据库中，`等于`有两种写法。

比如筛选出所有2020 Q2季度的商品，

写法1：使用`:`来比较

```js
const myOpenID = "xxx"
let res = await db.collection('articles').where({
  quarter: '2020 Q2'
}).get()

// 查询返回值
{
  "data":[{
    "type": {
      "brand": "A",
      "name": "A-01",
      "memory": 16,
      "cpu": 3.2
    },
    "category": "computer",
    "quarter": "2020 Q2",
    "price": 2500
  }]
}
```

写法2：使用指令`dbcmd.eq()`

```js
const dbCmd = db.command
const myOpenID = "xxx"
let res = await db.collection('articles').where({
  quarter: dbCmd.eq('2020 Q2')
}).get()

// 查询返回值
{
  "data":[{
    "type": {
      "brand": "A",
      "name": "A-01",
      "memory": 16,
      "cpu": 3.2
    },
    "category": "computer",
    "quarter": "2020 Q2",
    "price": 2500
  }]
}
```

注意 `eq` 指令有更大的灵活性，可以用于表示字段等于某个对象的情况，比如：

```js
// 这种写法表示匹配 type.brand == 'S' 且 type.name == 'S-01'
let res = await db.collection('articles').where({
  type: {
    brand: 'S',
    name: 'S-01'
  }
}).get()

// 查询返回值
{
  "data":[{
    "type": {
      "brand": "S",
      "name": "S-01",
      "author": "S-01-A"
    },
    "category": "book",
    "quarter": "2020 Q3",
    "price": 20
  }]
}

// 这种写法表示 stat 对象等于 { brand: 'S', name: 'S-01' }
// 对象中还有其他字段时无法匹配，例如：{ brand: 'S', name: 'S-01', author: 'S-01-A' }
// 对象中字段顺序不一致也不能匹配，例如：{ name: 'S-01', brand: 'S' }
const dbCmd = db.command
let res = await db.collection('articles').where({
  stat: dbCmd.eq({
    brand: 'S',
    name: 'S-01'
  })
}).get()

// 查询返回值
{
  "data":[]
}
```

#### neq 不等于@dbcmd-neq

字段不等于。`neq` 指令接受一个字面量 (literal)，可以是 `number`, `boolean`, `string`, `object`, `array`。

如筛选出品牌不为 X 的计算机：

```js
const dbCmd = db.command
let res = await db.collection('goods').where({
  category: 'computer',
  type: {
    brand: dbCmd.neq('X')
  },
}).get()

// 查询返回值
{
  "data":[{
    "type": {
      "brand": "A",
      "name": "A-01",
      "memory": 16,
      "cpu": 3.2
    },
    "category": "computer",
    "quarter": "2020 Q2",
    "price": 2500
  }]
}
```

#### gt 大于@dbcmd-gt

字段大于指定值。

如筛选出价格大于 3000 的计算机：

```js
const dbCmd = db.command
let res = await db.collection('goods').where({
  category: 'computer',
  price: dbCmd.gt(3000)
}).get()

// 查询返回值
{
  "data":[{
    "type": {
      "brand": "X",
      "name": "X-01",
      "memory": 8,
      "cpu": 4.0
    },
    "category": "computer",
    "quarter": "2020 Q3",
    "price": 6500
  }]
}
```

#### gte 大于等于@dbcmd-gte

字段大于或等于指定值。

#### lt 小于@dbcmd-lt

字段小于指定值。

#### lte 小于等于@dbcmd-lte

字段小于或等于指定值。

#### in 在数组中@dbcmd-in

字段值在给定的数组中。

筛选出内存为 8g 或 16g 的计算机商品：

```js
const dbCmd = db.command
let res = await db.collection('goods').where({
  category: 'computer',
  type: {
    memory: dbCmd.in([8, 16])
  }
}).get()

// 查询返回值
{
  "data":[{
    "type": {
      "brand": "A",
      "name": "A-01",
      "memory": 16,
      "cpu": 3.2
    },
    "category": "computer",
    "quarter": "2020 Q2",
    "price": 2500
  },{
    "type": {
      "brand": "X",
      "name": "X-01",
      "memory": 8,
      "cpu": 4.0
    },
    "category": "computer",
    "quarter": "2020 Q3",
    "price": 6500
  }]
}
```

#### nin 不在数组中@dbcmd-nin

字段值不在给定的数组中。

筛选出内存不是 8g 或 16g 的计算机商品：

```js
const dbCmd = db.command
db.collection('goods').where({
  category: 'computer',
  type: {
    memory: dbCmd.nin([8, 16])
  }
})

// 查询返回值
{
  "data":[]
}
```

#### and 且@dbcmd-and

表示需同时满足指定的两个或以上的条件。

如筛选出内存大于 4g 小于 32g 的计算机商品：

流式写法：
```js
const dbCmd = db.command
db.collection('goods').where({
  category: 'computer',
  type: {
    memory: dbCmd.gt(4).and(dbCmd.lt(32))
  }
})


// 查询返回值
{
  "data":[{
    "type": {
      "brand": "A",
      "name": "A-01",
      "memory": 16,
      "cpu": 3.2
    },
    "category": "computer",
    "quarter": "2020 Q2",
    "price": 2500
  },{
    "type": {
      "brand": "X",
      "name": "X-01",
      "memory": 8,
      "cpu": 4.0
    },
    "category": "computer",
    "quarter": "2020 Q3",
    "price": 6500
  }]
}
```

前置写法：
```js
const dbCmd = db.command
db.collection('goods').where({
  category: 'computer',
  type: {
    memory: dbCmd.and(dbCmd.gt(4), dbCmd.lt(32))
  }
})
```

#### or 或@dbcmd-or

表示需满足所有指定条件中的至少一个。如筛选出价格小于 4000 或在 6000-8000 之间的计算机：

流式写法：
```js
const dbCmd = db.command
db.collection('goods').where({
  category: 'computer',
  type: {
    price:dbCmd.lt(4000).or(dbCmd.gt(6000).and(dbCmd.lt(8000)))
  }
})


// 查询返回值
{
  "data":[{
    "type": {
      "brand": "A",
      "name": "A-01",
      "memory": 16,
      "cpu": 3.2
    },
    "category": "computer",
    "quarter": "2020 Q2",
    "price": 2500
  },{
    "type": {
      "brand": "X",
      "name": "X-01",
      "memory": 8,
      "cpu": 4.0
    },
    "category": "computer",
    "quarter": "2020 Q3",
    "price": 6500
  }]
}
```

前置写法：
```js
const dbCmd = db.command
db.collection('goods').where({
  category: 'computer',
  type: {
    price: dbCmd.or(dbCmd.lt(4000), dbCmd.and(dbCmd.gt(6000), dbCmd.lt(8000)))
  }
})
```

如果要跨字段 “或” 操作：(如筛选出内存 8g 或 cpu 3.2 ghz 的计算机)

```js
const dbCmd = db.command
db.collection('goods').where(dbCmd.or(
  {
    type: {
      memory: dbCmd.gt(8)
    }
  },
  {
    type: {
      cpu: 3.2
    }
  }
))

// 查询返回值
{
  "data":[{
    "type": {
      "brand": "A",
      "name": "A-01",
      "memory": 16,
      "cpu": 3.2
    },
    "category": "computer",
    "quarter": "2020 Q2",
    "price": 2500
  },{
    "type": {
      "brand": "X",
      "name": "X-01",
      "memory": 8,
      "cpu": 4.0
    },
    "category": "computer",
    "quarter": "2020 Q3",
    "price": 6500
  }]
}
```

### 正则表达式查询@regexp

#### db.RegExp

根据正则表达式进行筛选

例如下面可以筛选出 `version` 字段开头是 "数字+s" 的记录，并且忽略大小写：
```js
// 可以直接使用正则表达式
db.collection('articles').where({
  version: /^\ds/i
})

// 也可以使用new RegExp
db.collection('user').where({
  name: new RegExp('^\\ds', 'i')
})

// 或者使用new db.RegExp，这种方式阿里云不支持
db.collection('articles').where({
  version: new db.RegExp({
    regex: '^\\ds',   // 正则表达式为 /^\ds/，转义后变成 '^\\ds'
    options: 'i'    // i表示忽略大小写
  }) 
})
```

### 查询数组字段@querywitharr

假设数据表class内有以下数据，可以使用下面两种方式查询数组内包含指定值

```js
{
  "_id": "1",
  "students": ["li","wang"]
}
{
  "_id": "2",
  "students": ["wang","li"]
}
{
  "_id": "3",
  "students": ["zhao","qian"]
}
```

#### 指定下标查询

```js
const index = 1
const res = await db.collection('class').where({
  ['students.' + index]: 'wang'
})
.get()
```

```js
// 查询结果如下
{
  data: [{
    "_id": "1",
    "students": ["li","wang"]
  }]
}
```

#### 不指定下标查询

```js
const res = await db.collection('class').where({
  students: 'wang'
})
.get()
```

查询结果如下

```js
{
  data: [{
    "_id": "1",
    "students": ["li","wang"]
  },{
    "_id": "1",
    "students": ["wang","li"]
  }]
}
```

#### 数组内是对象

如果将上面class内的数据改为如下形式

```js
{
  "_id": "1",
  "students": [{
    name: "li"
  },{
    name: "wang"
  }]
}
{
  "_id": "2",
  "students": [{
    name: "wang"
  },{
    name: "li"
  }]
}
{
  "_id": "3",
  "students": [{
    name: "zhao"
  },{
    name: "qian"
  }]
}
```

不指定下标查询的写法可以修改为

```js
const res = await db.collection('class').where({
  'students.name': 'wang'
})
.get()
```

查询结果如下

```js
{
  data: [{
    "_id": "1",
    "students": [{
      name: "li"
    },{
      name: "wang"
    }]
  },
  {
    "_id": "2",
    "students": [{
      name: "wang"
    },{
      name: "li"
    }]
  }]
}
```

## 删除文档@remove

**方式1 通过指定文档ID删除**

collection.doc(_id).remove()

```js
// 清理全部数据
let res = await collection.get()
res.data.map(async(document) => {
  return await collection.doc(document.id).remove();
});
```

**方式2 条件查找文档然后直接批量删除**

collection.where().remove()

```js
// 删除字段a的值大于2的文档
const dbCmd = db.command
let res = await collection.where({
  a: dbCmd.gt(2)
}).remove()

// 清理全部数据
const dbCmd = db.command
let res = await collection.where({
  _id: dbCmd.exists(true)
}).remove()
```

响应参数

| 字段      | 类型    | 必填 | 说明                     |
| --------- | ------- | ---- | ------------------------ |
| deleted   | Number | 否   | 删除的记录数量              |

示例：判断删除成功或失败，打印删除的记录数量

```js
const db = uniCloud.database();
db.collection("table1").doc("5f79fdb337d16d0001899566").remove()
	.then((res) => {
		console.log("删除成功，删除条数为: ",res.deleted);
	})
	.catch((err) => {
		console.log( err.message )
	})
	.finally(() => {
		
	})
```

## 更新文档@update

### 更新指定文档@doc-update

**使用腾讯云时更新方法必须搭配doc、where方法使用，`db.collection('test').update()`会报如下错误：`param should have required property 'query'`**

collection.doc().update(Object data)

> 未使用set、remove更新操作符的情况下，此方法不会删除字段，仅将更新数据和已有数据合并。

**参数说明**

| 参数 | 类型   | 必填 | 说明                                     |
| ---- | ------ | ---- | ---------------------------------------- |
| data | object | 是   | 更新字段的Object，{'name': 'Ben'} _id 非必填|

**响应参数**

| 参数	| 类型	|  说明																			|
| ----	| ------|  ----------------------------------------	|
|updated| Number| 更新成功条数，数据更新前后没变化时会返回0	|


```js
let res = await collection.doc('doc-id').update({
  name: "Hey",
  count: {
    fav: 1
  }
});
```

```json
// 更新前
{
  "_id": "doc-id",
  "name": "Hello",
  "count": {
    "fav": 0,
    "follow": 0
  }
}

// 更新后
{
  "_id": "doc-id",
  "name": "Hey",
  "count": {
    "fav": 1,
    "follow": 0
  }
}
```

更新数组时，已数组下标作为key即可，比如以下示例将数组arr内下标为1的值修改为 uniCloud

```js
let res = await collection.doc('doc-id').update({
  arr: {
    1: "uniCloud"
  }
})
```

```json
// 更新前
{
  "_id": "doc-id",
  "arr": ["hello", "world"]
}
// 更新后
{
  "_id": "doc-id",
  "arr": ["hello", "uniCloud"]
}
```

### 更新文档，如果不存在则创建@doc-set

collection.doc().set()

**注意：**

> 此方法会覆写已有字段，需注意与`update`表现不同，比如以下示例执行`set`之后`follow`字段会被删除

```js
let res = await collection.doc('doc-id').set({
  name: "Hey",
  count: {
    fav: 1
  }
})
```

```json
// 更新前
{
  "_id": "doc-id",
  "name": "Hello",
  "count": {
    "fav": 0,
    "follow": 0
  }
}

// 更新后
{
  "_id": "doc-id",
  "name": "Hey",
  "count": {
    "fav": 1
  }
}
```

### 批量更新文档@where-update

`collection.update()`

```js
const dbCmd = db.command
let res = await collection.where({name: dbCmd.eq('hey')}).update({
  age: 18,
})
```

### 更新并返回更新后的数据@update-and-return

> 新增于HBuilderX 3.2.0

此接口仅会操作一条数据，有多条数据匹配的情况下会只更新匹配的第一条并返回

**示例**

```js
const db = uniCloud.database()
await db.collection('test').where({
  uid: '1'
}).updateAndReturn({
  score: db.command.inc(2)
})

// 更新前
{
  _id: 'xx',
  uid: '1',
  score: 0
}
// 更新后
{
  _id: 'xx',
  uid: '1',
  score: 2
}

// 接口返回值
{
  updated: 1,
  doc: {
    _id: 'xx',
    uid: '1',
    score: 2
  }
}
```

**注意**

- 使用updateAndReturn时，不可使用field方法
- 可以在事务中使用，可以使用`transaction.where().updateAndReturn()`以及`transaction.doc().updateAndReturn()`
- 不同于update接口，此接口返回的updated不表示数据真的进行了更新
- 腾讯云暂不支持`doc().updateAndReturn()`的写法可以使用`where().updateAndReturn()`替代

### 更新数组内指定下标的元素@update-arr-with-index

```js
const res = await db.collection('query').doc('1').update({
  // 更新students[1]
  ['students.' + 1]: {
    name: 'wang'
  }
})
```

```js
// 更新前
{
  "_id": "1",
  "students": [
    {
      "name": "zhang"
    },
    {
      "name": "li"
    }
  ]
}

// 更新后
{
  "_id": "1",
  "students": [
    {
      "name": "zhang"
    },
    {
      "name": "wang"
    }
  ]
}
```

### 更新数组内匹配条件的元素@update-arr-matched

**注意：只可确定数组内只会被匹配到一个的时候使用**

```js
const res = await db.collection('query').where({
	'students.id': '001'
}).update({
  // 将students内id为001的name改为li，$代表where内匹配到的数组项的序号
	'students.$.name': 'li'
})
```


```js
// 更新前
{
  "_id": "1",
  "students": [
    {
      "id": "001",
      "name": "zhang"
    },
    {
      "id": "002",
      "name": "wang"
    }
  ]
}

// 更新后
{
  "_id": "1",
  "students": [
    {
      "id": "001",
      "name": "li"
    },
    {
      "id": "002",
      "name": "wang"
    }
  ]
}
```

### 更新操作符@update-operator

更多数据库操作符请查看[数据库操作符](#dbcmd)

#### set@operator-set

更新指令。用于设定字段等于指定值。这种方法相比传入纯 JS 对象的好处是能够指定字段等于一个对象：

```js
const dbCmd = db.command
let res = await db.collection('photo').doc('doc-id').update({
  count: dbCmd.set({
    fav: 1,
    follow: 1
  })
})
```

```json
// 更新前
{
  "_id": "doc-id",
  "name": "Hello",
  "count": {
    "fav": 0,
    "follow": 0
  }
}

// 更新后
{
  "_id": "doc-id",
  "name": "Hello",
  "count": {
    "fav": 1,
    "follow": 1
  }
}
```

#### inc@operator-inc

更新指令。用于指示字段自增某个值，这是个原子操作，使用这个操作指令而不是先读数据、再加、再写回的好处是：

1. 原子性：多个用户同时写，对数据库来说都是将字段加一，不会有后来者覆写前者的情况
2. 减少一次请求：不需先读再写

之后的 mul 指令同理。

在文章阅读数+1、收藏+1等很多场景会用到它。如给收藏的商品数量加一：

```js
const dbCmd = db.command

let res = await db.collection('user').where({
  _id: 'my-doc-id'
}).update({
  count: {
    fav: dbCmd.inc(1)
  }
})
```

```json
// 更新前
{
  "_id": "my-doc-id",
  "name": "Hello",
  "count": {
    "fav": 0,
    "follow": 0
  }
}

// 更新后
{
  "_id": "my-doc-id",
  "name": "Hello",
  "count": {
    "fav": 1,
    "follow": 0
  }
}
```

请注意并没有直接提供减法操作符，如果要实现减法，仍通过inc实现。比如上述字段减1，

```js
const dbCmd = db.command

let res = await db.collection('user').where({
  _id: 'my-doc-id'
}).update({
  count: {
    fav: dbCmd.inc(-1)
  }
})
```

#### mul@operator-mul

更新指令。用于指示字段自乘某个值。

以下示例将count内的fav字段乘10

```js
const dbCmd = db.command

let res = await db.collection('user').where({
  _id: 'my-doc-id'
}).update({
  count: {
    fav: dbCmd.mul(10)
  }
})
```

```json
// 更新前
{
  "_id": "my-doc-id",
  "name": "Hello",
  "count": {
    "fav": 2,
    "follow": 0
  }
}

// 更新后
{
  "_id": "my-doc-id",
  "name": "Hello",
  "count": {
    "fav": 20,
    "follow": 0
  }
}
```

请注意没有直接提供除法操作符，如果要实现除法，仍通过mul实现。比如上述字段除以10，

```js
const dbCmd = db.command

let res = await db.collection('user').where({
  _id: 'my-doc-id'
}).update({
  count: {
    fav: dbCmd.mul(0.1)
  }
})
```

#### remove@operator-remove

更新指令。用于表示删除某个字段。如某人删除了自己一条商品评价中的评分：

```js
const dbCmd = db.command
let res = await db.collection('comments').doc('comment-id').update({
  rating: dbCmd.remove()
})
```

```json
// 更新前
{
  "_id": "comment-id",
  "rating": 5,
  "comment": "xxx"
}

// 更新后
{
  "_id": "comment-id",
  "comment": "xxx"
}
```

#### push@operator-push
向数组尾部追加元素，支持传入单个元素或数组

```js
const dbCmd = db.command

let res = await db.collection('comments').doc('comment-id').update({
  // users: dbCmd.push('aaa')
  users: dbCmd.push(['c', 'd'])
})
```

```json
// 更新前
{
  "_id": "comment-id",
  "users": ["a","b"]
}

// 更新后
{
  "_id": "comment-id",
  "users": ["a","b","c","d"]
}
```

#### pop@operator-pop
删除数组尾部元素

```js
const dbCmd = db.command

let res = await db.collection('comments').doc('comment-id').update({
  users: dbCmd.pop()
})
```

```json
// 更新前
{
  "_id": "comment-id",
  "users": ["a","b"]
}

// 更新后
{
  "_id": "comment-id",
  "users": ["a"]
}
```

#### unshift@operator-unshift

向数组头部添加元素，支持传入单个元素或数组。使用同push

```js
const dbCmd = db.command

let res = await db.collection('comments').doc('comment-id').update({
  // users: dbCmd.push('aaa')
  users: dbCmd.unshift(['c', 'd'])
})
```

```json
// 更新前
{
  "_id": "comment-id",
  "users": ["a","b"]
}

// 更新后
{
  "_id": "comment-id",
  "users": ["c","d","a","b"]
}
```

#### shift@operator-shift

删除数组头部元素。使用同pop

```js
const dbCmd = db.command

let res = await db.collection('comments').doc('comment-id').update({
  users: dbCmd.shift()
})
```

```json
// 更新前
{
  "_id": "comment-id",
  "users": ["a","b"]
}

// 更新后
{
  "_id": "comment-id",
  "users": ["b"]
}
```

## GEO地理位置@geo

注意：**如果需要对类型为地理位置的字段进行搜索，一定要建立地理位置索引**。

### GEO数据类型@geo-data-type

#### Point@geo-point

用于表示地理位置点，用经纬度唯一标记一个点，这是一个特殊的数据存储类型。

签名：`Point(longitude: number, latitude: number)`

示例：
```js
new db.Geo.Point(longitude, latitude)
```

#### LineString@geo-line-string

用于表示地理路径，是由两个或者更多的 `Point` 组成的线段。

签名：`LineString(points: Point[])`

示例：

```js
new db.Geo.LineString([
  new db.Geo.Point(lngA, latA),
  new db.Geo.Point(lngB, latB),
  // ...
])
```

#### Polygon@geo-polygon

用于表示地理上的一个多边形（有洞或无洞均可），它是由一个或多个**闭环** `LineString` 组成的几何图形。

由一个环组成的 `Polygon` 是没有洞的多边形，由多个环组成的是有洞的多边形。对由多个环（`LineString`）组成的多边形（`Polygon`），第一个环是外环，所有其他环是内环（洞）。

签名：`Polygon(lines: LineString[])`

示例：

```js
new db.Geo.Polygon([
  new db.Geo.LineString(...),
  new db.Geo.LineString(...),
  // ...
])
```

#### MultiPoint@geo-multi-point

用于表示多个点 `Point` 的集合。

签名：`MultiPoint(points: Point[])`

示例：

```js
new db.Geo.MultiPoint([
  new db.Geo.Point(lngA, latA),
  new db.Geo.Point(lngB, latB),
  // ...
])
```

#### MultiLineString@geo-multi-line-string

用于表示多个地理路径 `LineString` 的集合。

签名：`MultiLineString(lines: LineString[])`

示例：

```js
new db.Geo.MultiLineString([
  new db.Geo.LineString(...),
  new db.Geo.LineString(...),
  // ...
])
```


#### MultiPolygon@geo-multi-polygon

用于表示多个地理多边形 `Polygon` 的集合。

签名：`MultiPolygon(polygons: Polygon[])`

示例：

```js
new db.Geo.MultiPolygon([
  new db.Geo.Polygon(...),
  new db.Geo.Polygon(...),
  // ...
])
```

### GEO操作符@geo-operator

#### geoNear@operator-geo-near

按从近到远的顺序，找出字段值在给定点的附近的记录。

签名：
```js
db.command.geoNear(options: IOptions)

interface IOptions {
  geometry: Point // 点的地理位置
  maxDistance?: number // 选填，最大距离，米为单位
  minDistance?: number // 选填，最小距离，米为单位
}
```


示例：

```js
let res = await db.collection('user').where({
  location: db.command.geoNear({
    geometry: new db.Geo.Point(lngA, latA),
    maxDistance: 1000,
    minDistance: 0
  })
}).get()
```

#### geoWithin@operator-geo-within

找出字段值在指定 Polygon / MultiPolygon 内的记录，无排序

签名：

```js
db.command.geoWithin(IOptions)

interface IOptions {
  geometry: Polygon | MultiPolygon // 地理位置
}
```

示例：

```js
// 一个闭合的区域
const area = new Polygon([
  new LineString([
    new Point(lngA, latA),
    new Point(lngB, latB),
    new Point(lngC, latC),
    new Point(lngA, latA)
  ]),
])

// 搜索 location 字段在这个区域中的 user
let res = await db.collection('user').where({
  location: db.command.geoWithin({
    geometry: area
  })
}).get()
```

#### geoIntersects@operator-geo-intersects

找出字段值和给定的地理位置图形相交的记录

签名：

```js
db.command.geoIntersects(IOptions)

interface IOptions {
  geometry: Point | LineString | MultiPoint | MultiLineString | Polygon | MultiPolygon // 地理位置
}
```

示例：

```js
// 一条路径
const line = new LineString([
  new Point(lngA, latA),
  new Point(lngB, latB)
])

// 搜索 location 与这条路径相交的 user
let res = await db.collection('user').where({
  location: db.command.geoIntersects({
    geometry: line
  })
}).get()
```

## 事务@transaction

事务通常用来在某个数据库操作失败之后进行回滚。

> 事务因为要锁行，是有时间限制的。从事务开始到事务提交/回滚，时间不可超过10秒。另外注意：如果多条事务同时处理同一行数据，可能存在写冲突，进而导致失败。

### runTransaction@run-transaction

**阿里云不支持此用法，请换成startTransaction以使用事务**

发起事务。与`startTransaction`作用类似，接收参数类型不同

**`runTransaction` 的形式如下：**

```javascript
db.runTransaction(callback: function, times: number)
```

**参数**

|参数			|类型			|说明																																										|
|---			|---			|---																																										|
|callback	|Function	|事务执行函数，需为 async 异步函数或返回 Promise 的函数																	|
|times		|Number		|事务执行最多次数，默认 3 次，成功后不重复执行，只有事务冲突时会重试，其他异常时不会重试|

**返回值**

`runTransaction`返回一个`Promise`，此`Promise.resolve`的结果为`callback`事务执行函数的返回值，`reject` 的结果为事务执行过程中抛出的异常或者是 `transaction.rollback` 传入的值

**callback 事务执行函数的说明**

事务执行函数由开发者传入，函数接收一个参数 transaction，其上提供 collection 方法和 rollback 方法。collection 方法用于取数据库集合记录引用进行操作，rollback 方法用于在不想继续执行事务时终止并回滚事务。

事务执行函数必须为 `async` 异步函数或返回 `Promise` 的函数，当事务执行函数返回时，uniCloud 会认为用户逻辑已完成，自动提交（`commit`）事务，因此务必确保用户事务逻辑完成后才在 `async` 异步函数中返回或 `resolve Promise`。

事务执行函数可能会被执行多次，在内部发现事务冲突时会自动重复执行，如果超过设定的执行次数上限，会报错退出。

在事务执行函数中发生的错误，都会认为事务执行失败而抛错。

事务执行函数返回的值会作为 `runTransaction` 返回的 `Promise resolve` 的值，在函数中抛出的异常会作为 `runTransaction` 返回的 `Promise reject` 的值，如果事务执行函数中调用了 `transaction.rollback`，则传入 `rollback` 函数的值会作为 `runTransaction` 返回的 `Promise reject` 的值。

**限制**

事务操作时为保障效率和并发性，只允许进行单记录操作，不允许进行批量操作，但可以在一个事务进行多次数据库操作。

- 对于修改和删除仅支持使用doc方法，不支持使用where方法。
- 新增时使用add方法一次只可以新增单条，不可新增多条，即不支持在add方法内传入数组
- 腾讯云没有限制where的使用，但是使用where修改或删除多条会导致无法回滚

**注意事项**

- 开发者提供的事务执行函数正常返回时，uniCloud 会自动提交（`commit`）事务，请勿在事务执行函数内调用 `transaction.commit` 方法，该方法仅在通过 `db.startTransaction` 进行事务操作时使用
- 请注意transaction.doc().get()返回的data不是数组形式

**示例代码**

两个账户之间进行转账的简易示例

```javascript
const db = uniCloud.database()
const dbCmd = db.command
exports.main = async (event) => {
  try {
    const result = await db.runTransaction(async transaction => {
      const aaaRes = await transaction.collection('account').doc('aaa').get()
      const bbbRes = await transaction.collection('account').doc('bbb').get()
      if(aaaRes.data && bbbRes.data) {
        try {
          const updateAAARes = await transaction.collection('account').doc('aaa').update({
            amount: dbCmd.inc(-10)
          })

          const updateBBBRes = await transaction.collection('account').doc('bbb').update({
            amount: dbCmd.inc(10)
          })
          const aaaEndRes = await transaction.collection('account').doc('aaa').get()
          if (aaaEndRes.data.amount < 0) { // 请注意transaction.doc().get()返回的data不是数组形式
            await transaction.rollback(-100)
          }
          // 会作为 runTransaction resolve 的结果返回
          return {
            aaaAccount: aaaEndRes.data.amount,
          }
        } catch(e) {
          // 会作为 runTransaction reject 的结果出去
          await transaction.rollback(-100)
        }
      } else {
        await transaction.rollback(-100)
      }
    })

    return {
      success: true,
      aaaAccount: result.aaaAccount,
    }
  } catch (e) {
    console.error(`transaction error`, e)

    return {
      success: false,
      error: e
    }
  }
}
```

### startTransaction@start-transaction

发起事务。与`runTransaction`作用类似，接收参数类型不同

**`startTransaction` 形式如下**

```javascript
// 与runTransaction不同，startTransaction不接收参数
db.startTransaction()
```

**返回值**

返回一个`Promise`，此`Promise resolve`的结果为事务操作对象（**注意这里与runTransaction的区别**），其上可通过 `collection API` 操作数据库，通过 `commit`（**使用`startTransaction`需要主动`commit`**） 或 `rollback` 来结束或终止事务。

**限制**

事务操作时为保障效率和并发性，只允许进行单记录操作，不允许进行批量操作，但可以在一个事务进行多次数据库操作。

- 对于修改和删除仅支持使用doc方法，不支持使用where方法，updateAndReturn除外。
- 新增时使用add方法一次只可以新增单条，不可新增多条，即不支持在add方法内传入数组
- 腾讯云没有限制where的使用，但是使用where修改或删除多条会导致无法回滚

**注意**

- 请注意transaction.doc().get()返回的data不是数组形式

**示例代码**

两个账户之间进行转账的简易示例

```javascript
const db = uniCloud.database()
const dbCmd = db.command

exports.main = async (event) => {
  const transaction = await db.startTransaction()
  try {

    const aaaRes = await transaction.collection('account').doc('aaa').get()
    const bbbRes = await transaction.collection('account').doc('bbb').get()

    if (aaaRes.data && bbbRes.data) {
      const updateAAARes = await transaction.collection('account').doc('aaa').update({
        amount: dbCmd.inc(-10)
      })

      const updateBBBRes = await transaction.collection('account').doc('bbb').update({
        amount: dbCmd.inc(10)
      })
      
      const aaaEndRes = await transaction.collection('account').doc('aaa').get()
      if (aaaEndRes.data.amount < 0) { // 请注意transaction.doc().get()返回的data不是数组形式
        await transaction.rollback(-100)
        return {
          success: false,
          error: `rollback`,
          rollbackCode: -100,
        }
      } else {
        await transaction.commit()
        console.log(`transaction succeeded`)

        return {
          success: true,
          aaaAccount: aaaRes.data.amount - 10,
        }
      }

    } else {

      return {
        success: false,
        error: `rollback`,
        rollbackCode: -100,
      }
    }
  } catch (e) {
    await transaction.rollback()
    console.error(`transaction error`, e)

    return {
      success: false,
      error: e
    }
  }
}
```


<!-- ## 数据库实时推送

监听指定集合中符合查询条件的文档，通过onchange回调获得文档的变化详情
(where参数为查询条件 参考 [查询文档](#查询文档))

```js
  const uniCloud =  uniCloud.init({
      spaceId: 'YourSpaceId
  });
  const db = uniCloud.database();
  const dbCmd = db.command
  const collection = db.collection('collName') // collName 需填当前服务空间下集合名称

  let ref = collection.where({ test: dbCmd.gt(0) }).watch({
    onChange: snapshot => {
        console.log("收到snapshot**********", snapshot)
    },
    onError: error => {
      console.log("收到error**********", error)
    }
  })
```

单个doc的监听，也可以采用doc('docId').watch()形式
```js
  let ref = collection.doc('one docId').watch({
    onChange: snapshot => {
        console.log("收到snapshot**********", snapshot)
    },
    onError: error => {
      console.log("收到error**********", error)
    }
  })
```

手动关闭监听，当前监听将不再收到推送
```js
  ref.close()
```
 -->


