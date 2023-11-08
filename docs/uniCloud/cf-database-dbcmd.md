# 云数据库操作符@dbcmd
# Cloud database operator @dbcmd

## 查询·逻辑操作符@dbcmd-query
## Query Logical operator @dbcmd-query

### and

查询操作符，用于表示逻辑 "与" 的关系，表示需同时满足多个查询筛选条件  
Query operator, used to express a logical "AND" relationship, indicating that multiple query filter conditions need to be satisfied at the same time

#### 使用说明
#### Instructions for use
 `and` 有两种使用情况：  
 `and` has two use cases:

 

**1. 用在根查询条件**
**1. Used in the root query condition**

 此时需传入多个查询条件，表示需同时满足提供的多个完整查询条件  
 At this time, multiple query conditions need to be passed in, which means that multiple complete query conditions need to be satisfied at the same time.

 
```js
const dbCmd = db.command
let res = await db.collection('todo').where(dbCmd.and([
  {
    progress: dbCmd.gt(50)
  },
  {
    tags: 'cloud'
  }
])).get()
```
但以上用 `and` 组成的查询条件是不必要的，因为传入的对象的各字段隐式组成了 “与” 的关系，上述条件等价于下方更简洁的写法：  
However, the above query conditions composed of `and` are unnecessary, because the fields of the incoming object implicitly form an "and" relationship. The above conditions are equivalent to the following more concise writing:

 
```js
const dbCmd = db.command
let res = await db.collection('todo').where({
  progress: dbCmd.gt(50),
  tags: 'cloud'
}).get()
```

通常需要显示使用 `and` 是用在有跨字段或操作的时候
It is usually necessary to explicitly use `and` when there are cross fields or operations


**2. 用在字段查询条件**
**2. Used in field query conditions**

 需传入多个查询操作符或常量，表示字段需满足或匹配给定的条件。  
 Multiple query operators or constants need to be passed in, indicating that the field must meet or match the given conditions.

 如以下用前置写法的方式表示 "progress 字段值大于 50 且小于 100"  
 As shown in the following preamble, "progress field value is greater than 50 and less than 100"

 
```js
const dbCmd = db.command
let res = await db.collection('todo').where({
  progress: dbCmd.and(dbCmd.gt(50), dbCmd.lt(100))
}).get()
```
还可以用后置写法的方式表示同样的条件：  
The same condition can also be expressed in postfix:

 
```js
const dbCmd = db.command
let res = await db.collection('todo').where({
  progress: dbCmd.gt(50).and(dbCmd.lt(100))
}).get()
```
注意 `Command` 默认也可以直接链式调用其他 `Command`，默认表示多个 `Command` 的与操作，因此上述代码还可以精简为：  
Note that `Command` can also directly call other `Command` in a chain by default, which by default means the AND operation of multiple `Command`, so the above code can also be simplified as:

 
```js
const dbCmd = db.command
let res = await db.collection('todo').where({
  progress: dbCmd.gt(50).lt(100)
}).get()
```

#### 调用风格
#### call style
 方法接收两种传参方式，一是传入一个数组参数，二是传入多个参数，效果一样。  
 The method accepts two ways of passing parameters, one is to pass in an array parameter, the other is to pass in multiple parameters, the effect is the same.

 
```js
// 传入数组
// pass in the array
function and(expressions: Expression[]): Command
// 传入多参数
// pass in multiple parameters
function and(...expressions: Expression[]): Command
```

### or

查询操作符，用于表示逻辑 "或" 的关系，表示需同时满足多个查询筛选条件。或指令有两种用法，一是可以进行字段值的 “或” 操作，二是也可以进行跨字段的 “或” 操作。  
The query operator is used to express a logical "or" relationship, indicating that multiple query filter conditions need to be satisfied at the same time. The OR instruction has two usages. One is to perform the "OR" operation of field values, and the other is to perform the "OR" operation across fields.

     
#### 字段值的或操作
#### OR operation of field values
 字段值的 “或” 操作指的是指定一个字段值为多个值之一即可。  
 The "or" operation of field values refers to specifying a field value as one of multiple values.

 如筛选出进度大于 80 或小于 20 的 todo：  
 For example, to filter out todos with progress greater than 80 or less than 20:

 流式写法：  
 Streaming writing:

 
```js
const dbCmd = db.command
let res = await db.collection('todo').where({
  progress: dbCmd.gt(80).or(dbCmd.lt(20))
}).get()
```
前置写法：  
Prefix:

 
```js
const dbCmd = db.command
let res = await db.collection('todo').where({
  progress: dbCmd.or(dbCmd.gt(80), dbCmd.lt(20))
}).get()
```
前置写法也可接收一个数组：  
Prefix also accepts an array:

 
```js
const dbCmd = db.command
let res = await db.collection('todo').where({
  progress: dbCmd.or([dbCmd.gt(80), dbCmd.lt(20)])
}).get()
```

#### 跨字段的或操作
#### OR operation across fields
 跨字段的 “或” 操作指条件 “或”，相当于可以传入多个 where 语句，满足其中一个即可。  
 The "or" operation across fields refers to the condition "or", which is equivalent to passing in multiple where statements, and only one of them can be satisfied.

 如筛选出进度大于 80 或已标为已完成的 todo：  
 To filter out todos with progress greater than 80 or marked as completed:

 
```js
const dbCmd = db.command
let res = await db.collection('todo').where(dbCmd.or([
  {
    progress: dbCmd.gt(80)
  },
  {
    done: true
  }
])).get()
```

#### 调用风格
#### call style
 方法接收两种传参方式，一是传入一个数组参数，二是传入多个参数，效果一样。  
 The method accepts two ways of passing parameters, one is to pass in an array parameter, the other is to pass in multiple parameters, the effect is the same.

 
```js
// 传入数组
// pass in the array
function or(expressions: Expression[]): Command
// 传入多参数
// pass in multiple parameters
function or(...expressions: Expression[]): Command
```

### not

查询操作符，用于表示逻辑 "非" 的关系，表示需不满足指定的条件。  
The query operator is used to express a logical "not" relationship, which means that the specified conditions need not be met.

     
#### 示例
#### Example
 如筛选出进度不等于100的 todo：  
 For example, to filter out todos whose progress is not equal to 100:

 
```js
const dbCmd = db.command
let res = await db.collection('todo').where({
  progress: dbCmd.not(dbCmd.eq(100))
}).get()
```
`not` 也可搭配其他逻辑指令使用，包括 `and`, `or`, `nor`, `not`，如 `or`：  
`not` can also be used with other logical instructions, including `and`, `or`, `nor`, `not`, such as `or`:

 
```js
const dbCmd = db.command
let res = await db.collection('todo').where({
  progress: dbCmd.not(dbCmd.or([dbCmd.lt(50), dbCmd.eq(100)]))
}).get()
```

### nor

查询操作符，用于表示逻辑 "都不" 的关系，表示需不满足指定的所有条件。如果记录中没有对应的字段，则默认满足条件。  
The query operator is used to express a logical "Neither" relationship, indicating that all the specified conditions need not be met. If there is no corresponding field in the record, the condition is satisfied by default.

     
#### 示例 1
#### Example 1
 筛选出进度既不小于20又不大于80的 todo ：  
 Filter out todos whose progress is neither less than 20 nor greater than 80:

 
```js
const dbCmd = db.command
let res = await db.collection('todo').where({
  progress: dbCmd.nor([dbCmd.lt(20), dbCmd.gt(80)])
}).get()
```
以上同时会筛选出不存在 `progress` 字段的记录，如果要要求 `progress` 字段存在，可以用 `exists` 指令：  
The above will also filter out the records without the `progress` field. If you want to require the `progress` field to exist, you can use the `exists` command:

 
```js
const dbCmd = db.command
let res = await db.collection('todo').where({
  progress: dbCmd.exists().nor([dbCmd.lt(20), dbCmd.gt(80)])
  // 等价于以下非链式调用的写法：
  // progress: dbCmd.exists().and(dbCmd.nor([dbCmd.lt(20), dbCmd.gt(80)]))
}).get()
```

#### 示例 2
#### Example 2
 筛选出 `progress` 不小于 20 且 `tags` 数组不包含 `miniprogram` 字符串的记录：  
 Filter out records whose `progress` is not less than 20 and whose `tags` array does not contain the `miniprogram` string:

 
```js
const dbCmd = db.command
db.collection('todo').where(dbCmd.nor([{
  progress: dbCmd.lt(20),
}, {
  tags: 'miniprogram',
}])).get()
```
以上会筛选出满足以下条件之一的记录：  
The above will filter records that meet one of the following conditions:

 
1. `progress` 不小于 20 且 `tags` 数组不包含 `miniprogram` 字符串 3. `progress` 不小于 20 且 `tags` 字段不存在 5. `progress` 字段不存在 且 `tags` 数组不包含 `miniprogram` 字符串 7. `progress` 不小于 20 且 `tags` 字段不存在
1. `progress` is not less than 20 and the `tags` array does not contain the `miniprogram` string 3. `progress` is not less than 20 and the `tags` field does not exist 5. The `progress` field does not exist and the `tags` array does not contain `miniprogram` string 7. `progress` is not less than 20 and the `tags` field does not exist
 如果要求 `progress` 和 `tags` 字段存在，可以用 `exists` 指令：  
 If the `progress` and `tags` fields are required to exist, the `exists` directive can be used:

 
```js
const dbCmd = db.command
let res = await db.collection('todo').where(
  dbCmd.nor([{
    progress: dbCmd.lt(20),
  }, {
    tags: 'miniprogram',
  }])
  .and({
    progress: dbCmd.exists(true),
    tags: dbCmd.exists(true),
  })
).get()
```

#### 调用风格
#### call style
 方法接收两种传参方式，一是传入一个数组参数，二是传入多个参数，效果一样。  
 The method accepts two ways of passing parameters, one is to pass in an array parameter, the other is to pass in multiple parameters, the effect is the same.

 
```js
// 传入数组
// pass in the array
function nor(expressions: Expression[]): Command
// 传入多参数
// pass in multiple parameters
function nor(...expressions: Expression[]): Command
```

## 查询·比较操作符@dbcmd-compare
## Query and comparison operator @dbcmd-compare

### eq

查询筛选条件，表示字段等于某个值。`eq` 指令接受一个字面量 (literal)，可以是 `number`, `boolean`, `string`, `object`, `array`, `Date`。  
Query filter conditions, indicating that the field is equal to a value. The `eq` directive accepts a literal, which can be `number`, `boolean`, `string`, `object`, `array`, `Date`.

     
#### 使用说明
#### Instructions for use
 比如筛选出所有自己发表的文章，除了用传对象的方式：  
 For example, to filter out all the articles published by oneself, in addition to the method of passing objects:

 
```js
const openID = 'xxx'
let res = await db.collection('articles').where({
  _openid: openID
}).get()
```
还可以用指令：  
You can also use the command:

 
```js
const dbCmd = db.command
const openID = 'xxx'
let res = await db.collection('articles').where({
  _openid: dbCmd.eq(openid)
}).get()
```
注意 `eq` 指令比对象的方式有更大的灵活性，可以用于表示字段等于某个对象的情况，比如：  
Note that the `eq` directive has more flexibility than the object method and can be used to indicate that a field is equal to an object, such as:

 
```js
// 这种写法表示匹配 stat.publishYear == 2018 且 stat.language == 'zh-CN'
// This notation means match stat.publishYear == 2018 and stat.language == 'zh-CN'
let res = await db.collection('articles').where({
  stat: {
    publishYear: 2018,
    language: 'zh-CN'
  }
}).get()
// 这种写法表示 stat 对象等于 { publishYear: 2018, language: 'zh-CN' }
// This way of writing means that the stat object is equal to { publishYear: 2018, language: 'zh-CN' }
const dbCmd = db.command
let res = await db.collection('articles').where({
  stat: dbCmd.eq({
    publishYear: 2018,
    language: 'zh-CN'
  })
}).get()
```

### neq

查询筛选条件，表示字段不等于某个值。`eq` 指令接受一个字面量 (literal)，可以是 `number`, `boolean`, `string`, `object`, `array`, `Date`。  
Query filter conditions, indicating that the field is not equal to a value. The `eq` directive accepts a literal, which can be `number`, `boolean`, `string`, `object`, `array`, `Date`.

     
#### 使用说明
#### Instructions for use
 表示字段不等于某个值，和 [eq](Command.eq.html) 相反
 Indicates that the field is not equal to a value, as opposed to [eq](Command.eq.html)

### lt

查询筛选操作符，表示需小于指定值。可以传入 `Date` 对象用于进行日期比较。  
Query filter operator, indicating that it needs to be less than the specified value. A `Date` object can be passed in for date comparison.

     
#### 示例代码
#### Sample code
 找出进度小于 50 的 todo  
 Find todos with progress less than 50

 
```js
const dbCmd = db.command
let res = await db.collection('todos').where({
  progress: dbCmd.lt(50)
})
.get()
```

### lte

查询筛选操作符，表示需小于或等于指定值。可以传入 `Date` 对象用于进行日期比较。  
Query filter operator, indicating that it must be less than or equal to the specified value. A `Date` object can be passed in for date comparison.

     
#### 示例代码
#### Sample code
 找出进度小于或等于 50 的 todo  
 Find todos with progress less than or equal to 50

 
```js
const dbCmd = db.command
let res = await db.collection('todos').where({
  progress: dbCmd.lte(50)
})
.get()
```

### gt

查询筛选操作符，表示需大于指定值。可以传入 `Date` 对象用于进行日期比较。  
Query filter operator, indicating that it must be greater than the specified value. A `Date` object can be passed in for date comparison.

     
#### 示例代码
#### Sample code
 找出进度大于 50 的 todo  
 Find todos with progress greater than 50

 
```js
const dbCmd = db.command
let res = await db.collection('todos').where({
  progress: dbCmd.gt(50)
})
.get()
```

### gte

查询筛选操作符，表示需大于或等于指定值。可以传入 `Date` 对象用于进行日期比较。  
Query filter operator, indicating that it must be greater than or equal to the specified value. A `Date` object can be passed in for date comparison.

     
#### 示例代码
#### Sample code
 找出进度大于或等于 50 的 todo  
 Find todos with progress greater than or equal to 50

 
```js
const dbCmd = db.command
let res = await db.collection('todos').where({
  progress: dbCmd.gte(50)
})
.get()
```

### in

查询筛选操作符，表示要求值在给定的数组内。  
Query filter operator, indicating that the value is required to be in the given array.

     
#### 示例代码
#### Sample code
 找出进度为 0 或 100 的 todo  
 Find todos with progress of 0 or 100

 
```js
const dbCmd = db.command
let res = await db.collection('todos').where({
  progress: dbCmd.in([0, 100])
})
.get()
```

### nin

查询筛选操作符，表示要求值不在给定的数组内。  
Query filter operator, indicating that the required value is not in the given array.

     
#### 示例代码
#### Sample code
 找出进度不是 0 或 100 的 todo  
 Find todos whose progress is not 0 or 100

 
```js
const dbCmd = db.command
let res = await db.collection('todos').where({
  progress: dbCmd.nin([0, 100])
})
.get()
```

## 查询·字段操作符@dbcmd-field
## Query field operator @dbcmd-field

### exists

判断字段是否存在  
Check if field exists

     
#### 示例代码
#### Sample code
 找出存在 tags 字段的记录  
 Find records where tags field exists

 
```js
const dbCmd = db.command
let res = await db.collection('todos').where({
  tags: dbCmd.exists(true)
})
.get()
```

### mod

查询筛选操作符，给定除数 divisor 和余数 remainder，要求字段作为被除数时 value % divisor = remainder。  
Query filter operator, given the divisor divisor and remainder remainder, when the field is required as the dividend value % divisor = remainder.

      
#### 示例代码
#### Sample code
 找出进度为 10 的倍数的字段的记录  
 Find records for fields whose progress is a multiple of 10

 
```js
const dbCmd = db.command
let res = await db.collection('todos').where({
  progress: dbCmd.mod(10, 0)
})
.get()
```

## 查询·数组操作符@dbcmd-array
## Query array operator @dbcmd-array

### all

数组查询操作符。用于数组字段的查询筛选条件，要求数组字段中包含给定数组的所有元素。  
Array query operator. A query filter for array fields that requires all elements of a given array to be contained in the array field.

     
#### 示例代码 1：普通数组
#### Sample Code 1: Normal Array
 找出 tags 数组字段同时包含 cloud 和 database 的记录  
 Find records whose tags array field contains both cloud and database

 
```js
const dbCmd = db.command
let res = await db.collection('todos').where({
  tags: dbCmd.all(['cloud', 'database'])
})
.get()
```

#### 示例代码 2：对象数组
#### Sample Code 2: Array of Objects
 如果数组元素是对象，则可以用 `dbCmd.elemMatch` 匹配对象的部分字段  
 If the array element is an object, you can use `dbCmd.elemMatch` to match part of the field of the object

 假设有字段 `places` 定义如下：  
 Suppose there is a field `places` defined as follows:

 
```js
{
  "type": string
  "area": number
  "age": number
}
```
找出数组字段中至少同时包含一个满足 “area 大于 100 且 age 小于 2” 的元素和一个满足 “type 为 mall 且 age 大于 5” 的元素  
Find out that the array field contains at least one element satisfying "area greater than 100 and age less than 2" and one element satisfying "type is mall and age greater than 5"

 
```js
const dbCmd = db.command
let res = await db.collection('todos').where({
  places: dbCmd.all([
    dbCmd.elemMatch({
      area: dbCmd.gt(100),
      age: dbCmd.lt(2),
    }),
    dbCmd.elemMatch({
      type: 'mall',
      age: dbCmd.gt(5),
    }),
  ]),
})
.get()
```

### elemMatch

用于数组字段的查询筛选条件，要求数组中包含至少一个满足 `elemMatch` 给定的所有条件的元素  
Query filter conditions for array fields that require at least one element in the array that satisfies all conditions given by `elemMatch`

      
#### 示例代码：数组是对象数组的情况
#### Example code: the case where the array is an array of objects
 假设集合示例数据如下：  
 Suppose the collection example data is as follows:

 
```js
{
  "_id": "a0",
  "city": "x0",
  "places": [{
    "type": "garden",
    "area": 300,
    "age": 1
  }, {
    "type": "theatre",
    "area": 50,
    "age": 15
  }]
}
```
找出 `places` 数组字段中至少同时包含一个满足 “area 大于 100 且 age 小于 2” 的元素  
Find at least one element in the `places` array field that satisfies "area greater than 100 and age less than 2"

 
```js
const dbCmd = db.command
let res = await db.collection('todos').where({
  places: dbCmd.elemMatch({
    area: dbCmd.gt(100),
    age: dbCmd.lt(2),
  })
})
.get()
```
*注意**：如果不使用 `elemMatch` 而直接如下指定条件，则表示的是 `places` 数组字段中至少有一个元素的 `area` 字段大于 100 且 `places` 数组字段中至少有一个元素的 `age` 字段小于 2：  
*Note**: If you do not use `elemMatch` and specify the condition directly as follows, it means that the `area` field of at least one element in the `places` array field is greater than 100 and the `places` array field has at least one element. The `age` field is less than 2:

 
```js
const dbCmd = db.command
let res = await db.collection('todos').where({
  places: {
    area: dbCmd.gt(100),
    age: dbCmd.lt(2),
  }
})
.get()
```

#### 示例代码：数组元素都是普通数据类型的情况
#### Sample code: the case where the array elements are all common data types
 假设集合示例数据如下：  
 Suppose the collection example data is as follows:

 
```js
{
  "_id": "a0",
  "scores": [60, 80, 90]
}
```
找出 `scores` 数组字段中至少同时包含一个满足 “大于 80 且小于 100” 的元素  
Find at least one element in the `scores` array field that satisfies "greater than 80 and less than 100" at the same time

 
```js
const dbCmd = db.command
let res = await db.collection('todos').where({
  scores: dbCmd.elemMatch(dbCmd.gt(80).lt(100))
})
.get()
```

### size

更新操作符，用于数组字段的查询筛选条件，要求数组长度为给定值  
The update operator is used for the query filter condition of the array field, and the length of the array is required to be a given value

     
#### 示例
#### Example
 找出 tags 数组字段长度为 2 的所有记录  
 Find all records with tags array field length 2

 
```js
const dbCmd = db.command
let res = await db.collection('todos').where({
  places: dbCmd.size(2)
})
.get()
```

## 查询·地理位置操作符@dbcmd-geo
## Query Geolocation operator @dbcmd-geo

### geoNear

按从近到远的顺序，找出字段值在给定点的附近的记录。  
Find records with field values near a given point in order from nearest to farthest.

     
#### 索引要求
#### Indexing Requirements
 需对查询字段建立地理位置索引  
 Geographical index needs to be established on the query field

 
#### 示例代码
#### Sample code
 找出离给定位置 1 公里到 5 公里范围内的记录  
 Find records within 1km to 5km of a given location

 
```js
const dbCmd = db.command
let res = await db.collection('restaurants').where({
  location: dbCmd.geoNear({
    geometry: new db.Geo.Point(113.323809, 23.097732),
    minDistance: 1000,
    maxDistance: 5000,
  })
}).get()
```

### geoWithin

找出字段值在指定区域内的记录，无排序。指定的区域必须是多边形（Polygon）或多边形集合（MultiPolygon）。  
Finds records whose field value is in the specified range, without sorting. The specified area must be a polygon (Polygon) or a collection of polygons (MultiPolygon).

     
#### 索引要求
#### Indexing Requirements
 需对查询字段建立地理位置索引  
 Geographical index needs to be established on the query field

 
#### 示例代码 1：给定多边形
#### Example Code 1: Given Polygon
 
```js
const dbCmd = db.command
const { Point, LineString, Polygon } = db.Geo
let res = await .collection('restaurants').where({
  location: dbCmd.geoWithin({
    geometry: new Polygon([
      new LineString([
        new Point(0, 0),
        new Point(3, 2),
        new Point(2, 3),
        new Point(0, 0)
      ])
    ]),
  })
}).get()
```

#### 示例代码 2：给定圆形
#### Example code 2: Given a circle
 可以不用 `geometry` 而用 `centerSphere` 构建一个圆形。  
 A circle can be constructed with `centerSphere` instead of `geometry`.

  `centerSphere` 对应的值的定义是：`[ [经度, 纬度], 半径 ]`  
  The definition of the value corresponding to `centerSphere` is: `[ [longitude, latitude], radius]`

 半径需以弧度计，比如需要 10km 的半径，则用距离除以地球半径 6378.1km 得出的数字。  
 The radius needs to be measured in radians. For example, if a radius of 10km is required, divide the distance by the earth's radius of 6378.1km.

 
```js
const dbCmd = db.command
let res = await db.collection('restaurants').where({
  location: dbCmd.geoWithin({
    centerSphere: [
      [-88, 30],
      10 / 6378.1,
    ]
  })
}).get()
```

### geoIntersects

找出给定的地理位置图形相交的记录  
Find the records that intersect the graph for a given geographic location

     
#### 索引要求
#### Indexing Requirements
 需对查询字段建立地理位置索引  
 Geographical index needs to be established on the query field

 
#### 示例代码：找出和一个多边形相交的记录
#### Sample code: Find records that intersect a polygon
 
```js
const dbCmd = db.command
const { Point, LineString, Polygon } = db.Geo
let res = await db.collection('restaurants').where({
  location: dbCmd.geoIntersects({
    geometry: new Polygon([
      new LineString([
        new Point(0, 0),
        new Point(3, 2),
        new Point(2, 3),
        new Point(0, 0)
      ])
    ]),
  })
}).get()
```

## 查询·表达式操作符@dbcmd-expr
## Query expression operator @dbcmd-expr

### expr

查询操作符，用于在查询语句中使用聚合表达式，方法接收一个参数，该参数必须为聚合表达式  
The query operator is used to use aggregate expressions in query statements. The method receives a parameter, which must be an aggregate expression.
      
#### 使用说明
#### Instructions for use
 
1. `expr` 可用于在聚合 [`match`](cf-database-aggregate#aggregate-match) 流水线阶段中引入聚合表达式 3. 如果聚合 [`match`](cf-database-aggregate#aggregate-match) 阶段是在 [`lookup`](cf-database-aggregate#aggregate-lookup) 阶段内，此时的 `expr` 表达式内可使用 `lookup` 中使用 `let` 参数定义的变量，具体示例可见 [`lookup`](cf-database-aggregate#aggregate-lookup) 的 `指定多个连接条件` 例子 5. `expr` 可用在普通查询语句（`where`）中引入聚合表达式
1. `expr` can be used to introduce aggregate expressions in an aggregate[`match`](cf-database-aggregate#aggregate-match) pipeline stage 3. If an aggregate[`match`](cf-database-aggregate#aggregate- match) phase is in the [`lookup`](cf-database-aggregate#aggregate-lookup) phase, the variables defined by the `let` parameter in `lookup` can be used in the `expr` expression at this time. The specific example See `specify multiple join conditions` in [`lookup`](cf-database-aggregate#aggregate-lookup) Example 5. `expr` can be used to introduce aggregate expressions in ordinary query statements (`where`)
 
#### 示例代码 1：比较同一个记录中的两个字段
#### Example code 1: Compare two fields in the same record
 假设 `items` 集合的数据结构如下：  
 Suppose the data structure of the `items` collection is as follows:

 
```js
{
  "_id": string,
  "inStock": number, // 库存量
  "ordered": number  // 被订量
}
```
找出被订量大于库存量的记录：  
Find records where the quantity ordered is greater than the quantity in stock:

 
```js
const dbCmd = db.command
const $ = dbCmd.aggregate
let res = await db.collection('items').where(dbCmd.expr($.gt(['$ordered', '$inStock']))).get()
```

#### 示例代码 2：与条件语句组合使用
#### Sample Code 2: Combining with Conditional Statements
 假设 `items` 集合的数据结构如下：  
 Suppose the data structure of the `items` collection is as follows:

 
```json
{
  "_id": string,
  "price": number
}
```
假设价格小于等于 10 的打 8 折，大于 10 的打 5 折，让数据库查询返回打折后价格小于等于 8 的记录：  
Assuming that the price is less than or equal to 10, 20% off, and the price is greater than 10, 50% off, let the database query return the records whose price is less than or equal to 8 after the discount:

 
```js
const dbCmd = db.command
const $ = dbCmd.aggregate
let res = await db.collection('items').where(dbCmd.expr(
  $.lt([
    $.cond({
      if: $.gte(['$price', 10]),
      then: $.multiply(['$price', '0.5']),
      else: $.multiply(['$price', '0.8']),
    })
    ,
    8
  ])
).get()
```

## 更新·字段操作符@dbcmd-update-field
## Update field operator @dbcmd-update-field

### set

更新操作符，用于设定字段等于指定值。  
Update operator, used to set the field equal to the specified value.

     
#### 使用说明
#### Instructions for use
 这种方法相比传入纯 JS 对象的好处是能够指定字段等于一个对象  
 The advantage of this method over passing in a pure JS object is the ability to specify that the field is equal to an object

 
#### 示例
#### Example
 
```js
// 以下方法只会更新 style.color 为 red，而不是将 style 更新为 { color: 'red' }，即不影响 style 中的其他字段
// The following method will only update style.color to red, not style to { color: 'red' }, that is, it will not affect other fields in style
let res = await db.collection('todos').doc('doc-id').update({
  style: {
    color: 'red'
  }
})

// 以下方法更新 style 为 { color: 'red', size: 'large' }
// The following method updates the style to { color: 'red', size: 'large' }
let res = await db.collection('todos').doc('doc-id').update({
  style: dbCmd.set({
    color: 'red',
    size: 'large'
  })
})
```

### remove

更新操作符，用于表示删除某个字段。  
The update operator is used to indicate the deletion of a field.

   
#### 示例代码
#### Sample code
 删除 style 字段：  
 Remove the style field:

 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('todo-id').update({
  style: dbCmd.remove()
})
```

### inc

更新操作符，原子操作，用于指示字段自增  
Update operator, atomic operation, used to indicate field auto-increment

      
#### 原子自增
#### Atomic increment
 多个用户同时写，对数据库来说都是将字段自增，不会有后来者覆写前者的情况  
 When multiple users write at the same time, the fields are automatically incremented for the database, and there will be no situation where the latter will overwrite the former.

 
#### 示例代码
#### Sample code
 将一个 todo 的进度自增 10：  
 Increment the progress of a todo by 10:

 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('todo-id').update({
  progress: dbCmd.inc(10)
})
```

### mul

更新操作符，原子操作，用于指示字段自乘某个值  
Update operator, atomic operation, used to instruct a field to multiply by a value

      
#### 原子自乘
#### Atomic Multiplication
 多个用户同时写，对数据库来说都是将字段自乘，不会有后来者覆写前者的情况  
 When multiple users write at the same time, for the database, the fields are multiplied by themselves, and there will be no situation where the latter will overwrite the former.

 
#### 示例代码
#### Sample code
 将一个 todo 的进度自乘 10：  
 Multiply the progress of a todo by 10:

 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('todo-id').update({
  progress: dbCmd.mul(10)
})
```

### min

更新操作符，给定一个值，只有该值小于字段当前值才进行更新。  
Update operator, given a value, update only if the value is less than the current value of the field.

     
#### 示例代码
#### Sample code
 如果字段 progress > 50，则更新到 50  
 If field progress > 50, update to 50

 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  progress: dbCmd.min(50)
})
```

### max

更新操作符，给定一个值，只有该值大于字段当前值才进行更新。  
The update operator, given a value, updates only if the value is greater than the current value of the field.

     
#### 示例代码
#### Sample code
 如果字段 progress < 50，则更新到 50  
 If field progress < 50, update to 50

 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  progress: dbCmd.max(50)
})
```

### rename

更新操作符，字段重命名。如果需要对嵌套深层的字段做重命名，需要用点路径表示法。不能对嵌套在数组里的对象的字段进行重命名。  
Update operator, field rename. If you need to rename deeply nested fields, you need to use dot path notation. Fields of objects nested in arrays cannot be renamed.

     
#### 示例 1：重命名顶层字段
#### Example 1: Renaming top-level fields
 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  progress: dbCmd.rename('totalProgress')
})
```

#### 示例 2：重命名嵌套字段
#### Example 2: Renaming nested fields
 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  someObject: {
    someField: dbCmd.rename('someObject.renamedField')
  }
})
```

或：
or:
 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  'someObject.someField': dbCmd.rename('someObject.renamedField')
})
```

## 更新·数组操作符@dbcmd-update-array
## Update array operator @dbcmd-update-array

### push

数组更新操作符。对一个值为数组的字段，往数组添加一个或多个值。或字段原为空，则创建该字段并设数组为传入值。  
Array update operator. For a field whose value is an array, add one or more values to the array. or the field was originally empty, create the field and set the array as the incoming value.

     
#### 参数说明
#### Parameter Description
 

**position 说明**
**position description**

 要求必须同时有 `each` 参数存在。  
 The `each` parameter must also be present.

 非负数代表从数组开始位置数的位置，从 0 开始计。如果数值大于等于数组长度，则视为在尾部添加。负数代表从数组尾部倒数的位置，比如 -1 就代表倒数第二个元素的位置。如果负数数值的绝对值大于等于数组长度，则视为从数组头部添加。  
 A non-negative number represents the position counted from the beginning of the array, starting at 0. If the value is greater than or equal to the length of the array, it is considered to be added at the end. Negative numbers represent the position counted from the end of the array, for example -1 means the position of the second-to-last element. If the absolute value of a negative value is greater than or equal to the length of the array, it is considered to be added from the head of the array.

 

**sort 说明**
**sort instructions**

 要求必须同时有 `each` 参数存在。给定 1 代表升序，-1 代表降序。  
 The `each` parameter must also be present. Give 1 for ascending order and -1 for descending order.

 如果数组元素是记录，则用 `{ <字段>: 1 | -1 }` 的格式表示根据记录中的什么字段做升降序排序。  
 If the array element is a record, the format of `{ <field>: 1 | -1 }` is used to indicate the ascending and descending order according to what field in the record.

 

**slice** 说明**
**slice** Description**

 要求必须同时有 `each` 参数存在  
 Requires that the `each` parameter also exists

|值		|说明									|
|value |description |
|:-:	|:-:									|
|0		|将字段更新为空数组		|
|0 |Update field to empty array|
|正数	|数组只保留前 n 个元素|
|Positive numbers |Array retains only first n elements|
|负数	|数组只保留后 n 个元素|
|Negative |Array retains only last n elements|


#### 示例 1：尾部添加元素
#### Example 1: Adding elements to the end
 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  tags: dbCmd.push(['mini-program', 'cloud'])
})
```

#### 示例 2：从第二个位置开始插入
#### Example 2: Insert from the second position
 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  tags: dbCmd.push({
    each: ['mini-program', 'cloud'],
    position: 1,
  })
})
```

#### 示例 3：排序
#### Example 3: Sorting

插入后对整个数组做排序  
Sort the entire array after insertion

 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  tags: dbCmd.push({
    each: ['mini-program', 'cloud'],
    sort: 1,
  })
})
```

不插入，只对数组做排序  
Do not insert, just sort the array
 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  tags: dbCmd.push({
    each: [],
    sort: 1,
  })
})
```
如果字段是对象数组，可以如下根据元素对象里的字段进行排序：  
If the field is an array of objects, it can be sorted according to the fields in the element object as follows:

 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  tags: dbCmd.push({
    each: [
      { name: 'miniprogram', weight: 8 },
      { name: 'cloud', weight: 6 },
    ],
    sort: {
      weight: 1,
    },
  })
})
```

#### 示例 4：截断保留
#### Example 4: Truncate retain
 插入后只保留后 2 个元素  
 Only keep the last 2 elements after insertion

 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  tags: dbCmd.push({
    each: ['mini-program', 'cloud'],
    slice: -2,
  })
})
```

#### 示例 5：在指定位置插入、然后排序、最后只保留前 2 个元素
#### Example 5: Insert at the specified position, then sort, and keep only the first 2 elements at the end
 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  tags: dbCmd.push({
    each: ['mini-program', 'cloud'],
    position: 1,
    slice: 2,
    sort: 1,
  })
})
```

### pop

数组更新操作符，对一个值为数组的字段，将数组尾部元素删除，仅可以删除末尾一个
Array update operator. For a field whose value is an array, delete the last element of the array. Only the last one can be deleted.

#### 示例代码
#### Sample code
 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  tags: dbCmd.pop()
})
```

### unshift

数组更新操作符，对一个值为数组的字段，往数组头部添加一个或多个值。或字段原为空，则创建该字段并设数组为传入值。  
The array update operator, for a field whose value is an array, adds one or more values to the head of the array. or the field was originally empty, create the field and set the array as the incoming value.

     
#### 示例代码
#### Sample code
 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  tags: dbCmd.unshift(['mini-program', 'cloud'])
})
```

### shift

数组更新操作符，对一个值为数组的字段，将数组头部元素删除。  
The array update operator, for a field whose value is an array, deletes the element at the head of the array.

   
#### 示例代码
#### Sample code
 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  tags: dbCmd.shift()
})
```

### pull

数组更新操作符。给定一个值或一个查询条件，将数组中所有匹配给定值或查询条件的元素都移除掉。  
Array update operator. Given a value or a query condition, removes all elements in the array that match the given value or query condition.

#### 示例代码 1：根据常量匹配移除
#### Example code 1: Remove based on constant matching
 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  tags: dbCmd.pull('database')
})
```

#### 示例代码 2：根据查询条件匹配移除
#### Sample code 2: Remove based on query condition matching
 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  tags: dbCmd.pull(dbCmd.in(['database', 'cloud']))
})
```

#### 示例代码 3：对象数组时，根据查询条件匹配移除
#### Example code 3: When the object array is matched, remove it according to the query condition
 假设有字段 `places` 数组中的元素结构如下  
 Suppose there is a field `places` The elements in the array are structured as follows

 
```json
{
  "type": string
  "area": number
  "age": number
}
```

```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  places: dbCmd.pull({
    area: dbCmd.gt(100),
    age: dbCmd.lt(2),
  })
})
```

#### 示例代码 4：有嵌套对象的对象数组时，根据查询条件匹配移除
#### Example code 4: When there is an object array with nested objects, remove it according to the query condition
 假设有字段 `cities` 数组中的元素结构如下  
 Suppose there is a field `cities` The element structure in the array is as follows

 
```js
{
  "name": string
  "places": Place[]
}
```
`Place` 结构如下：  
`Place` has the following structure:

 
```js
{
  "type": string
  "area": number
  "age": number
}
```
可用 `elemMatch` 匹配嵌套在对象数组里面的对象数组字段 places  
`elemMatch` can be used to match object array fields nested inside object array places

 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  cities: dbCmd.pull({
    places: dbCmd.elemMatch({
      area: dbCmd.gt(100),
      age: dbCmd.lt(2),
    })
  })
})
```

### pullAll

数组更新操作符。给定一个值或一个查询条件，将数组中所有匹配给定值的元素都移除掉。跟 `pull` 的差别在于只能指定常量值、传入的是数组。  
Array update operator. Given a value or a query condition, removes all elements from the array that match the given value. The difference from `pull` is that only constant values can be specified, and an array is passed in.

      
#### 示例代码：根据常量匹配移除
#### Example code: remove based on constant matching
 从 tags 中移除所有 database 和 cloud 字符串  
 Remove all database and cloud strings from tags

 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  tags: dbCmd.pullAll(['database', 'cloud'])
})
```

### addToSet

数组更新操作符。原子操作。给定一个或多个元素，除非数组中已存在该元素，否则添加进数组。  
Array update operator. Atomic operation. Given one or more elements, add them to the array unless they already exist in the array.

      
#### 示例代码 1：添加一个元素
#### Example code 1: Adding an element
 如果 tags 数组中不包含 database，添加进去  
 If the tags array does not contain database, add it

 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  tags: dbCmd.addToSet('database')
})
```

#### 示例代码 2：添加多个元素
#### Sample Code 2: Adding Multiple Elements

需传入一个对象，其中有一个字段 `each`，其值为数组，每个元素就是要添加的元素  
You need to pass in an object, which has a field `each` whose value is an array, and each element is the element to be added

 
```js
const dbCmd = db.command
let res = await db.collection('todos').doc('doc-id').update({
  tags: dbCmd.addToSet({
    $each: ['database', 'cloud']
  })
})
```
