# 云数据库聚合操作@aggregate
# Cloud database aggregation operation @aggregate

有时候我们需要对数据进行分析操作，比如一些统计操作、联表查询等，这个时候简单的查询操作就搞不定这些需求，因此就需要使用聚合操作来完成。
Sometimes we need to perform analysis operations on data, such as some statistical operations, join table queries, etc. At this time, simple query operations cannot handle these requirements, so we need to use aggregation operations to complete them.

获取数据库集合的聚合操作实例
Get the aggregate operation instance of the database collection

```js
db.collection('scores').aggregate()
```

**注意：**
**Notice:**

- 聚合操作实例仅用于查询，不可执行增删改操作。在聚合操作实例上只能使用聚合操作方法，不能使用where/orderBy等基础方法，where需改为match，orderBy应使用sort实现，细节请阅读下方聚合操作文档。
- Aggregate operation instances are only used for querying, and cannot perform addition, deletion, and modification operations. Only the aggregation operation method can be used on the aggregation operation instance, and basic methods such as where/orderBy cannot be used. Where should be changed to match, and orderBy should be implemented using sort. For details, please read the aggregation operation document below.
- 聚合操作在大数据量下性能不如简单查询，请根据自身业务选择合适的用法
- The performance of aggregation operations is not as good as simple queries under large data volumes. Please choose the appropriate usage according to your own business.

云函数中使用时切勿复用aggregate实例，容易引发Bug。
Do not reuse aggregate instances when used in cloud functions, which may cause bugs.

以下两种写法均为错误示例：
Both of the following are examples of errors:

```js
const db = uniCloud.database()
const collection = db.collection('test')
const aggregate = collection.aggregate() // 云函数实例复用时，此聚合实例也会复用，导致Bug
exports.main = async function(){
  const res = await aggregate.match({a:1}).end()
  return {res}
}
```

```js
const db = uniCloud.database()
const collection = db.collection('test')
exports.main = async function(){
  const aggregate = collection.aggregate() // 此聚合实例分别在两个请求内使用，导致Bug
  const res1 = await aggregate.match({a:1}).end()
  const res2 = await aggregate.match({a:2}).end()
  return {res1, res2}
}
```

将上述两个用法修正为正确用法分别如下：
Correct the above two usages to the correct usage as follows:


```js
const db = uniCloud.database()
const collection = db.collection('test')
exports.main = async function(){
  const aggregate = collection.aggregate() // 每次执行云函数会有独立的聚合实例
  const res = await aggregate.match({a:1}).end()
  return {res}
}
```

```js
const db = uniCloud.database()
const collection = db.collection('test')
exports.main = async function(){
  const res1 = await collection.aggregate().match({a:1}).end() // 两个请求分别调用aggregate方法产生聚合实例
  const res2 = await collection.aggregate().match({a:2}).end()
  return {res1, res2}
}
```

## 聚合表达式@aggregate-expression
## Aggregate expression @aggregate-expression

表达式可以是字段路径、常量、或数据库运算方法。表达式可以嵌套表达式。
Expressions can be field paths, constants, or database operations. Expressions can nest expressions.

**字段路径**
**Field Path**

表达式用字段路径表示法来指定记录中的字段。字段路径的表示由一个 `$` 符号加上字段名或嵌套字段名。嵌套字段名用点将嵌套的各级字段连接起来。如 `$profile` 就表示 `profile` 的字段路径，`$profile.name` 就表示 `profile.name` 的字段路径（`profile` 字段中嵌套的 `name` 字段）。
Expressions use field path notation to specify fields in the record. Field paths are represented by a `$` sign followed by the field name or nested field name. Nested field names use dots to connect fields at all levels of nesting. For example, `$profile` represents the field path of `profile`, and `$profile.name` represents the field path of `profile.name` (the `name` field nested in the `profile` field).

例如：现有以下数据
For example: the following data is available

```json
[{
  "profile": {
    "name": "Chloe"
  },
  "status": 0
}]
```

```js
// 执行以下操作
// do the following
let res = await db.collection('scores').aggregate()
  .addFields({
    name: '$profile.name'
  })
  .end()

// 返回值为
// return value
{
  "data": [{
    "profile": {
      "name": "Chloe"
    },
    "status": 0,
    "name": "Chloe"
  }]
}
```


**常量**
**constant**

常量可以是任意类型。默认情况下 $ 开头的字符串都会被当做字段路径处理，如果想要避免这种行为，使用 `db.command.aggregate.literal` 声明为常量。
Constants can be of any type. By default, strings starting with $ are treated as field paths. To avoid this behavior, use `db.command.aggregate.literal` to declare it as a constant.

**数据库运算方法**
**Database operation method**

参考[数据库运算方法](cf-database-aggregate-operator.md)
Refer to [Database Operation Method](cf-database-aggregate-operator.md)

## addFields@aggregate-add-fields

聚合阶段。添加新字段到输出的记录。经过 `addFields` 聚合阶段，输出的所有记录中除了输入时带有的字段外，还将带有 `addFields` 指定的字段。
Aggregation stage. Add new fields to the output records. After the `addFields` aggregation stage, all output records will have the fields specified by `addFields` in addition to the fields they were input.


**API 说明**
**API description**

`addFields` 等同于同时指定了所有已有字段和新增字段的 `project` 阶段。
`addFields` is equivalent to the `project` phase specifying all existing fields and new fields at the same time.

**`addFields` 的形式如下：**
**`addFields` has the following form:**

```js
addFields({
  <new field>: <expression>
})
```
`addFields` 可指定多个新字段，每个新字段的值由使用的表达式决定。
`addFields` can specify multiple new fields, the value of each new field is determined by the expression used.

如果指定的新字段与原有字段重名，则新字段的值会覆盖原有字段的值。注意 `addFields` 不能用来给数组字段添加元素。
If the specified new field has the same name as the original field, the value of the new field will overwrite the value of the original field. Note that `addFields` cannot be used to add elements to array fields.

**示例 1：连续两次 addFields**
**Example 1: addFields twice in a row**

假设集合 scores 有如下记录：
Suppose the set scores has the following records:
```js
{
  _id: 1,
  student: "Maya",
  homework: [ 10, 5, 10 ],
  quiz: [ 10, 8 ],
  extraCredit: 0
}
{
  _id: 2,
  student: "Ryan",
  homework: [ 5, 6, 5 ],
  quiz: [ 8, 8 ],
  extraCredit: 8
}
```
应用两次 `addFields`，第一次增加两个字段分别为 `homework` 和 `quiz` 的和值，第二次增加一个字段再基于上两个和值求一次和值。
Apply `addFields` twice, the first time adding two fields are the sum of `homework` and `quiz`, the second time adding a field and then calculating the sum based on the previous two sums.
```js
const $ = db.command.aggregate
let res = await db.collection('scores').aggregate()
  .addFields({
    totalHomework: $.sum('$homework'),
    totalQuiz: $.sum('$quiz')
  })
  .addFields({
    totalScore: $.add(['$totalHomework', '$totalQuiz', '$extraCredit'])
  })
  .end()
```

返回结果如下：
The returned results are as follows:
```js
{
  "_id" : 1,
  "student" : "Maya",
  "homework" : [ 10, 5, 10 ],
  "quiz" : [ 10, 8 ],
  "extraCredit" : 0,
  "totalHomework" : 25,
  "totalQuiz" : 18,
  "totalScore" : 43
}
{
  "_id" : 2,
  "student" : "Ryan",
  "homework" : [ 5, 6, 5 ],
  "quiz" : [ 8, 8 ],
  "extraCredit" : 8,
  "totalHomework" : 16,
  "totalQuiz" : 16,
  "totalScore" : 40
}
```

**示例 2：在嵌套记录里增加字段**
**Example 2: Adding fields to nested records**

可以用点表示法在嵌套记录里增加字段。假设 vehicles 集合含有如下记录：
Fields can be added to nested records using dot notation. Suppose the vehicles collection contains the following records:
```js
{ _id: 1, type: "car", specs: { doors: 4, wheels: 4 } }
{ _id: 2, type: "motorcycle", specs: { doors: 0, wheels: 2 } }
{ _id: 3, type: "jet ski" }
```
可以用如下操作在 `specs` 字段下增加一个新的字段 `fuel_type`，值都设为固定字符串 `unleaded`：
A new field `fuel_type` can be added under the `specs` field by the following operations, and the value is set to the fixed string `unleaded`:
```js
let res = await db.collection('vehicles').aggregate()
  .addFields({
    'specs.fuel_type': 'unleaded'
  })
  .end()
```

返回结果如下：
The returned results are as follows:
```js
{ _id: 1, type: "car",
   specs: { doors: 4, wheels: 4, fuel_type: "unleaded" } }
{ _id: 2, type: "motorcycle",
   specs: { doors: 0, wheels: 2, fuel_type: "unleaded" } }
{ _id: 3, type: "jet ski",
   specs: { fuel_type: "unleaded" } }
```

**示例 3：设置字段值为另一个字段**
**Example 3: Set field value to another field**

可以通过 `$` 加字段名组成的字符串作为值的表达式来设置字段的值为另一个字段的值。
You can set the value of a field to the value of another field by using an expression consisting of `$` followed by the field name as the value.

同样用上一个集合示例，可以用如下操作添加一个字段 `vehicle_type`，将其值设置为 `type` 字段的值：
Also using the previous collection example, you can add a field `vehicle_type` and set its value to the value of the `type` field as follows:
```js
let res = await db.collection('vehicles').aggregate()
  .addFields({
    vehicle_type: '$type'
  })
  .end()
```
返回结果如下：
The returned results are as follows:
```js
{ _id: 1, type: "car", vehicle_type: "car",
   specs: { doors: 4, wheels: 4, fuel_type: "unleaded" } }
{ _id: 2, type: "motorcycle", vehicle_type: "motorcycle",
   specs: { doors: 0, wheels: 2, fuel_type: "unleaded" } }
{ _id: 3, type: "jet ski", vehicle_type: "jet ski",
   specs: { fuel_type: "unleaded" } }
```

## bucket@aggregate-bucket

聚合阶段。将输入记录根据给定的条件和边界划分成不同的组，每组即一个 `bucket`。
Aggregation stage. Divide the input records into different groups according to the given conditions and boundaries, each group is a `bucket`.

**API 说明**
**API description**

每组分别作为一个记录输出，包含一个以下界为值的 `_id` 字段和一个以组中记录数为值的 `count` 字段。`count` 在没有指定 `output` 的时候是默认输出的。
Each group is output as a record, containing a `_id` field with a lower bound and a `count` field with the number of records in the group. `count` is output by default when `output` is not specified.

`bucket` 只会在组内有至少一个记录的时候输出。
`bucket` will only output if there is at least one record in the group.

**bucket 的形式如下：**
**bucket has the following form:**

```js
bucket({
  groupBy: <expression>,
  boundaries: [<lowerbound1>, <lowerbound2>, ...],
  default: <literal>,
  output: {
    <output1>: <accumulator expr>,
    ...
    <outputN>: <accumulator expr>
  }
})
```
`groupBy` 是一个用以决定分组的表达式，会应用在各个输入记录上。可以用 `$` 前缀加上要用以分组的字段路径来作为表达式。除非用 `default` 指定了默认值，否则每个记录都需要包含指定的字段，且字段值必须在 `boundaries` 指定的范围之内。
`groupBy` is an expression used to determine the grouping applied to each input record. Expressions can be prefixed with `$` followed by the path of the field to be used for grouping. Unless a default value is specified with `default`, each record needs to contain the specified field, and the field value must be within the range specified by `boundaries`.

`boundaries` 是一个数组，每个元素分别是每组的下界。必须至少指定两个边界值。数组值必须是同类型递增的值。
`boundaries` is an array where each element is the lower bound of each group. At least two boundary values must be specified. Array values must be incremented values of the same type.

`default` 可选，指定之后，没有进入任何分组的记录将都进入一个默认分组，这个分组记录的 `_id` 即由 `default` 决定。`default` 的值必须小于 `boundaries` 中的最小值或大于等于其中的最大值。`default` 的值可以与 `boundaries` 元素值类型不同。
`default` is optional. After specifying, records that do not enter any group will enter a default group. The `_id` of this group record is determined by `default`. The value of `default` must be less than the minimum value or greater than or equal to the maximum value in `boundaries`. The value of `default` can be different from the value type of the `boundaries` element.

`output` 可选，用以决定输出记录除了 `_id` 外还要包含哪些字段，各个字段的值必须用累加器表达式指定。当 `output` 指定时，默认的 `count` 是不会被默认输出的，必须手动指定：
`output` is optional and is used to determine which fields the output record contains in addition to `_id`. The value of each field must be specified with an accumulator expression. When `output` is specified, the default `count` will not be output by default and must be specified manually:

```js
output: {
  count: $.sum(1),
  ...
  <outputN>: <accumulator expr>
}
```
使用 bucket 需要满足以下至少一个条件，否则会抛出错误：
Using buckets requires at least one of the following conditions, otherwise an error will be thrown:

每一个输入记录应用 groupBy 表达式获取的值都必须是一个在 boundaries 内的值
The value obtained by applying the groupBy expression to each input record must be a value within boundaries

指定一个 default 值，该值在 boundaries 以外，或与 boundaries 元素的值不同的类型。
Specify a default value that is outside boundaries, or a different type than the value of the boundaries element.

**示例**
**Example**

假设集合 items 有如下记录：
Suppose the collection items has the following records:
```js
{
  _id: "1",
  price: 10
}
{
  _id: "2",
  price: 50
}
{
  _id: "3",
  price: 20
}
{
  _id: "4",
  price: 80
}
{
  _id: "5",
  price: 200
}
```

对上述记录进行分组，将 [0, 50) 分为一组，[50, 100) 分为一组，其他分为一组：
To group the above records, group [0, 50) into one group, [50, 100) into one group, and the others into one group:

```js
const $ = db.command.aggregate
let res = await db.collection('items').aggregate()
  .bucket({
    groupBy: '$price',
    boundaries: [0, 50, 100],
    default: 'other',
    output: {
      count: $.sum(1),
      ids: $.push('$_id')
    }
  })
  .end()
```

返回结果如下：
The returned results are as follows:

```js
[
  {
    "_id": 0,
    "count": 2,
    "ids": [
      "1",
      "3"
    ]
  },
  {
    "_id": 50,
    "count": 2,
    "ids": [
      "2",
      "4"
    ]
  },
  {
    "_id": "other",
    "count": 1,
    "ids": [
      "5"
    ]
  }
]
```

## bucketAuto@aggregate-bucket-auto

聚合阶段。将输入记录根据给定的条件划分成不同的组，每组即一个 `bucket`。与 `bucket` 的其中一个不同之处在于无需指定 `boundaries`，`bucketAuto` 会自动尝试将记录尽可能平均的分散到每组中。
Aggregation stage. Divide the input records into different groups according to the given conditions, each group is a `bucket`. One of the differences from `bucket` is that there is no need to specify `boundaries`, `bucketAuto` will automatically try to spread the records as evenly as possible into each group.

**API 说明**
**API description**
每组分别作为一个记录输出，包含一个以包含组中最大值和最小值两个字段的对象为值的 _id 字段和一个以组中记录数为值的 count 字段。count 在没有指定 output 的时候是默认输出的。
Each group is output as a record, containing an _id field whose value is an object containing the two fields of the maximum and minimum values in the group, and a count field whose value is the number of records in the group. count is output by default when output is not specified.

**bucketAuto 的形式如下：**
**bucketAuto has the following form:**

```js
bucketAuto({
  groupBy: <expression>,
  buckets: <number>,
  granularity: <string>,
  output: {
    <output1>: <accumulator expr>,
    ...
    <outputN>: <accumulator expr>
  }
})
```
`groupBy` 是一个用以决定分组的表达式，会应用在各个输入记录上。可以用 $ 前缀加上要用以分组的字段路径来作为表达式。除非用 `default` 指定了默认值，否则每个记录都需要包含指定的字段，且字段值必须在 `boundaries` 指定的范围之内。
`groupBy` is an expression used to determine the grouping applied to each input record. Expressions can be prefixed with $ followed by the field path to group by. Unless a default value is specified with `default`, each record needs to contain the specified field, and the field value must be within the range specified by `boundaries`.

`buckets` 是一个用于指定划分组数的正整数。
`buckets` is a positive integer specifying the number of buckets to split.

`granularity` 是可选枚举值字符串，用于保证自动计算出的边界符合给定的规则。这个字段仅可在所有 `groupBy` 值都是数字并且没有 `NaN` 的情况下使用。枚举值包括：`R5、R10、R20、R40、R80、1-2-5、E6、E12、E24、E48、E96、E192、POWERSOF2`。
`granularity` is an optional enumeration value string used to ensure that the automatically computed bounds conform to the given rules. This field can only be used if all `groupBy` values are numbers and there are no `NaN`s. Enumerated values include: `R5, R10, R20, R40, R80, 1-2-5, E6, E12, E24, E48, E96, E192, POWERSOF2`.

`output` 可选，用以决定输出记录除了 `_id` 外还要包含哪些字段，各个字段的值必须用累加器表达式指定。当 `output` 指定时，默认的 `count` 是不会被默认输出的，必须手动指定：
`output` is optional and is used to determine which fields the output record contains in addition to `_id`. The value of each field must be specified with an accumulator expression. When `output` is specified, the default `count` will not be output by default and must be specified manually:

```js
output: {
  count: $.sum(1),
  ...
  <outputN>: <accumulator expr>
}
```
在以下情况中，输出的分组可能会小于给定的组数：
The output grouping may be smaller than the given number of groups in the following cases:

输入记录数少于分组数
The number of input records is less than the number of groups
- `groupBy` 计算得到的唯一值少于分组数
- `groupBy` counts fewer unique values than groups
- `granularity` 的间距少于分组数
- `granularity` has less spacing than the number of packets
- `granularity` 不够精细以至于不能平均分配到各组
- `granularity` is not granular enough to be evenly distributed among groups

**granularity 详细说明**
**granularity details**

`granularity` 用于保证边界值属于一个给定的数字序列。
`granularity` is used to guarantee that boundary values belong to a given sequence of numbers.

**Renard 序列**
**Renard Sequence**

Renard 序列是以 10 的 5 / 10 / 20 / 40 / 80 次方根来推导的、在 1.0 到 10.0 (如果是 R80 则是 10.3) 之间的数字序列。
The Renard sequence is a sequence of numbers between 1.0 and 10.0 (10.3 in the case of R80) derived by the 5 / 10 / 20 / 40 / 80 root of 10.

设置 granularity 为 R5 / R10 / R20 / R40 / R80 就把边界值限定在序列内。如果 groupBy 的值不在 1.0 到 10.0 (如果是 R80 则是 10.3) 内，则序列数字会自动乘以 10。
Setting the granularity to R5 / R10 / R20 / R40 / R80 limits the boundary values to within the sequence. If the value of groupBy is not within 1.0 to 10.0 (or 10.3 in case of R80), the serial number is automatically multiplied by 10.

**E 序列**
**E sequence**

E 序列是以 10 的 6 / 12 / 24 / 48 / 96 / 192 次方跟来推导的、带有一个特定误差的、在 1.0 到 10.0 之间的数字序列。
The E-sequence is a sequence of numbers between 1.0 and 10.0 with a certain error derived from 10 to the power of 6 / 12 / 24 / 48 / 96 / 192.

**1-2-5 序列**
**1-2-5 sequence**

1-2-5 序列 表现与三值 Renard 序列一样。
The 1-2-5 sequence behaves the same as the three-valued Renard sequence.

**2的次方序列**
**Sequence of powers of 2**

由 2 的各次方组成的序列数字。
A sequence of numbers made up of powers of 2.

**示例**
**Example**

假设集合 items 有如下记录：
Suppose the collection items has the following records:
```js
{
  _id: "1",
  price: 10.5
}
{
  _id: "2",
  price: 50.3
}
{
  _id: "3",
  price: 20.8
}
{
  _id: "4",
  price: 80.2
}
{
  _id: "5",
  price: 200.3
}
```
对上述记录进行自动分组，分成三组：
The above records are automatically grouped into three groups:
```js
const $ = db.command.aggregate
let res = await db.collection('items').aggregate()
  .bucketAuto({
    groupBy: '$price',
    buckets: 3,
  })
  .end()
```
返回结果如下：
The returned results are as follows:
```js
{
  "_id": {
    "min": 10.5,
    "max": 50.3
  },
  "count": 2
}
{
  "_id": {
    "min": 50.3,
    "max": 200.3
  },
  "count": 2
}
{
  "_id": {
    "min": 200.3,
    "max": 200.3
  },
  "count": 1
}
```

## count@aggregate-count

聚合阶段。计算上一聚合阶段输入到本阶段的记录数，输出一个记录，其中指定字段的值为记录数。
Aggregation stage. Calculates the number of records input to this stage from the previous aggregation stage, and outputs a record where the value of the specified field is the number of records.

**API 说明**
**API description**

**count 的形式如下：**
**count has the following form:**
```js
count(<string>)
```
`<string>` 是输出记录数的字段的名字，不能是空字符串，不能以 $ 开头，不能包含 . 字符。
`<string>` is the name of the field to output the number of records, cannot be an empty string, cannot start with $, cannot contain . characters.

count 阶段等同于 group + project 的操作：
The count stage is equivalent to the operation of group + project:
```js
const $ = db.command.aggregate
let res = await db.collection('items').aggregate()
  .group({
    _id: null,
    count: $.sum(1),
  })
  .project({
    _id: 0,
  })
  .end()
```
上述操作会输出一个包含 count 字段的记录。
The above operation will output a record with the count field.

**示例**
**Example**

假设集合 items 有如下记录：
Suppose the collection items has the following records:
```js
{
  _id: "1",
  price: 10.5
}
{
  _id: "2",
  price: 50.3
}
{
  _id: "3",
  price: 20.8
}
{
  _id: "4",
  price: 80.2
}
{
  _id: "5",
  price: 200.3
}
```
找出价格大于 50 的记录数：
Find the number of records with a price greater than 50:
```js
const $ = db.command.aggregate
let res = await db.collection('items').aggregate()
  .match({
    price: $.gt(50)
  })
  .count('expensiveCount')
  .end()
```
返回结果如下：
The returned results are as follows:
```js
{
  "expensiveCount": 3
}
```

## geoNear@aggregate-geo-near

聚合阶段。将记录按照离给定点从近到远输出。
Aggregation stage. Output the records from near to far from the given point.

|属性								|类型			|默认值	|必填	|说明																																														|
|property |type |default |required |description |
|----								|----			|----		|----	|----																																														|
|near								|GeoPoint	|				|是		|GeoJSON Point，用于判断距离的点																																|
|near |GeoPoint | |Yes |GeoJSON Point, the point used to determine distance |
|spherical					|true			|				|是		|必填，值为 true																																								|
|spherical |true | |Yes |Required, value is true |
|maxDistance				|number		|				|否		|距离最大值																																											|
|maxDistance |number | |No |Maximum Distance |
|minDistance				|number		|				|否		|距离最小值																																											|
|minDistance |number | |No |Minimum Distance |
|query							|Object		|				|否		|要求记录必须同时满足该条件（语法同 where）																											|
|query |Object | |No |requires that records must meet this condition at the same time (same syntax as where) |
|distanceMultiplier	|number		|				|否		|返回时在距离上乘以该数字																																				|
|distanceMultiplier |number | |No |Multiply the distance by this number on return |
|distanceField			|string		|				|是		|存放距离的输出字段名，可以用点表示法表示一个嵌套字段																						|
|distanceField |string | |Yes |The name of the output field to store the distance, a nested field can be represented by dot notation |
|includeLocs				|string		|				|否		|列出要用于距离计算的字段，如果记录中有多个字段都是地理位置时有用																|
|includeLocs |string | |No |Lists the fields to be used for distance calculations, useful if multiple fields in the record are geographic locations |
|key								|string		|				|否		|选择要用的地理位置索引。如果集合由多个地理位置索引，则必须指定一个，指定的方式是指定对应的字段	|
|key |string | |No |Select the geographic index to use. If the collection is indexed by multiple geographic locations, one must be specified, by specifying the corresponding field |

**API 说明**
**API description**

- `geoNear` 必须为第一个聚合阶段
- `geoNear` must be the first aggregation stage
- 必须有地理位置索引。如果有多个，必须用 `key` 参数指定要使用的索引。
- Must have geo-indexed. If there are more than one, the index to use must be specified with the `key` parameter.

**示例**
**Example**

假设集合 attractions 有如下记录：
Suppose the collection attractions has the following records:
```js
{
  "_id": "geoNear.0",
  "city": "Guangzhou",
  "docType": "geoNear",
  "location": {
    "type": "Point",
    "coordinates": [
      113.30593,
      23.1361155
    ]
  },
  "name": "Canton Tower"
},
{
  "_id": "geoNear.1",
  "city": "Guangzhou",
  "docType": "geoNear",
  "location": {
    "type": "Point",
    "coordinates": [
      113.306789,
      23.1564721
    ]
  },
  "name": "Baiyun Mountain"
},
{
  "_id": "geoNear.2",
  "city": "Beijing",
  "docType": "geoNear",
  "location": {
    "type": "Point",
    "coordinates": [
      116.3949659,
      39.9163447
    ]
  },
  "name": "The Palace Museum"
},
{
  "_id": "geoNear.3",
  "city": "Beijing",
  "docType": "geoNear",
  "location": {
    "type": "Point",
    "coordinates": [
      116.2328567,
      40.242373
    ]
  },
  "name": "Great Wall"
}
```
```js
const $ = db.command.aggregate
let res = await db.collection('attractions').aggregate()
  .geoNear({
    distanceField: 'distance', // 输出的每个记录中 distance 即是与给定点的距离
    spherical: true,
    near: new db.Geo.Point(113.3089506, 23.0968251),
    query: {
      docType: 'geoNear',
    },
    key: 'location', // 若只有 location 一个地理位置索引的字段，则不需填
    key: 'location', // If there is only one field of location index, it is not required to fill in
    includeLocs: 'location', // 若只有 location 一个是地理位置，则不需填
    includeLocs: 'location', // If only location is a geographic location, you don't need to fill in
  })
  .end()
```

返回结果如下：
The returned results are as follows:
```js
{
  "_id": "geoNear.0",
  "location": {
    "type": "Point",
    "coordinates": [
      113.30593,
      23.1361155
    ]
  },
  "docType": "geoNear",
  "name": "Canton Tower",
  "city": "Guangzhou",
  "distance": 4384.68131486958
},
{
  "_id": "geoNear.1",
  "city": "Guangzhou",
  "location": {
    "type": "Point",
    "coordinates": [
      113.306789,
      23.1564721
    ]
  },
  "docType": "geoNear",
  "name": "Baiyun Mountain",
  "distance": 6643.521654040738
},
{
  "_id": "geoNear.2",
  "docType": "geoNear",
  "name": "The Palace Museum",
  "city": "Beijing",
  "location": {
    "coordinates": [
      116.3949659,
      39.9163447
    ],
    "type": "Point"
  },
  "distance": 1894750.4414538583
},
{
  "_id": "geoNear.3",
  "docType": "geoNear",
  "name": "Great Wall",
  "city": "Beijing",
  "location": {
    "type": "Point",
    "coordinates": [
      116.2328567,
      40.242373
    ]
  },
  "distance": 1928300.3308822548
}
```

## group@aggregate-group

聚合阶段。将输入记录按给定表达式分组，输出时每个记录代表一个分组，每个记录的 _id 是区分不同组的 key。输出记录中也可以包括累计值，将输出字段设为累计值即会从该分组中计算累计值。
Aggregation stage. Group the input records according to the given expression, each record represents a group when outputting, and the _id of each record is the key to distinguish different groups. Output records can also include cumulative values, and setting the output field to cumulative values will calculate cumulative values from that grouping.

使用group可以很方便的实现类似SQL的distinct功能
Using group can easily implement distinct functions similar to SQL

**API 说明**
**API description**

**group 的形式如下：**
**group has the following form:**


```js
group({
  _id: <expression>,
  <field1>: <accumulator1>,
  ...
  <fieldN>: <accumulatorN>
})
```

`_id` 参数是必填的，如果填常量则只有一组。其他字段是可选的，都是累计值，用 `$.sum` 等累计器(`const $ = db.command.aggregate`)，但也可以使用其他表达式。
The `_id` parameter is required, if you fill in a constant, there is only one set. The other fields are optional and are accumulated values, using accumulators such as `$.sum` (`const $ = db.command.aggregate`), but other expressions can also be used.

累计器必须是以下操作符之一：
The accumulator must be one of the following operators:

详细使用方法见[累计器操作符](#累计器操作符)
For details, see [Accumulator Operator](#%E7%B4%AF%E8%AE%A1%E5%99%A8%E6%93%8D%E4%BD%9C%E7%AC%A6)

|操作符				|说明																																																					|
|operator |description |
|----					|----																																																					|
|addToSet			|向数组中添加值，如果数组中已存在该值，不执行任何操作																													|
|addToSet |Adds a value to the array, does nothing if the value already exists in the array |
|avg					|返回一组集合中，指定字段对应数据的平均值																																			|
|avg |Returns the average value of the data corresponding to the specified field in a set of collections |
|sum					|计算并且返回一组字段所有数值的总和																																						|
|sum |Computes and returns the sum of all values in a set of fields |
|first				|返回指定字段在一组集合的第一条记录对应的值。仅当这组集合是按照某种定义排序（ sort ）后，此操作才有意义。			|
|first |Returns the value corresponding to the first record of the specified field in a set. This operation only makes sense if the set of collections is sorted by some definition ( sort ). |
|last					|返回指定字段在一组集合的最后一条记录对应的值。仅当这组集合是按照某种定义排序（ sort ）后，此操作才有意义。		|
|last |Returns the value corresponding to the last record of the specified field in a set. This operation only makes sense if the set of collections is sorted by some definition ( sort ). |
|max					|返回一组数值的最大值																																													|
|max |returns the maximum value of a set of values |
|min					|返回一组数值的最小值																																													|
|min |Returns the minimum value of a set of values |
|push					|在 group 阶段，返回一组中表达式指定列与对应的值，一起组成的数组																							|
|push |In the group stage, returns an array consisting of the column specified by the expression and the corresponding value |
|stdDevPop		|返回一组字段对应值的标准差																																										|
|stdDevPop | Returns the standard deviation of the corresponding values of a set of fields |
|stdDevSamp		|计算输入值的样本标准偏差。如果输入值代表数据总体，或者不概括更多的数据，请改用 db.command.aggregate.stdDevPop|
|stdDevSamp | Calculates the sample standard deviation of the input values. If the input values represent the population of data, or do not generalize more data, use db.command.aggregate.stdDevPop| instead
|mergeObjects	|将多个文档合并为单个文档																																											|
|mergeObjects |Merge multiple documents into a single document |

**内存限制**
**Memory Limit**

该阶段有 100M 内存使用限制。
There is a 100M memory usage limit at this stage.

**示例 1：按字段值分组**
**Example 1: Group by Field Value**

假设集合 avatar 有如下记录：
Suppose the collection avatar has the following records:
```js
{
  _id: "1",
  alias: "john",
  region: "asia",
  scores: [40, 20, 80],
  coins: 100
}
{
  _id: "2",
  alias: "arthur",
  region: "europe",
  scores: [60, 90],
  coins: 20
}
{
  _id: "3",
  alias: "george",
  region: "europe",
  scores: [50, 70, 90],
  coins: 50
}
{
  _id: "4",
  alias: "john",
  region: "asia",
  scores: [30, 60, 100, 90],
  coins: 40
}
{
  _id: "5",
  alias: "george",
  region: "europe",
  scores: [20],
  coins: 60
}
{
  _id: "6",
  alias: "john",
  region: "asia",
  scores: [40, 80, 70],
  coins: 120
}
```
```js
const $ = db.command.aggregate
let res = await db.collection('avatar').aggregate()
  .group({
    _id: '$alias',
    num: $.sum(1)
  })
  .end()
```
返回结果如下：
The returned results are as follows:
```js
{
  "_id": "john",
  "num": 3
}
{
  "_id": "authur",
  "num": 1
}
{
  "_id": "george",
  "num": 2
}
```

**示例 2：按多个值分组**
**Example 2: Group by Multiple Values**

可以给 _id 传入记录的方式按多个值分组。还是沿用上面的示例数据，按各个区域（region）获得相同最高分（score）的来分组，并求出各组虚拟币（coins）的总量：
Records can be grouped by multiple values in the way _id is passed in. Or follow the example data above, group by regions with the same highest score (score), and find the total amount of coins in each group:
```js
const $ = db.command.aggregate
let res = await db.collection('avatar').aggregate()
  .group({
    _id: {
      region: '$region',
      maxScore: $.max('$scores')
    },
    totalCoins: $.sum('$coins')
  })
  .end()
```
返回结果如下：
The returned results are as follows:
```js
{
  "_id": {
    "region": "asia",
    "maxScore": 80
  },
  "totalCoins": 220
}
{
  "_id": {
    "region": "asia",
    "maxScore": 100
  },
  "totalCoins": 40
}
{
  "_id": {
    "region": "europe",
    "maxScore": 90
  },
  "totalCoins": 70
}
{
  "_id": {
    "region": "europe",
    "maxScore": 20
  },
  "totalCoins": 60
}
```

## limit@aggregate-limit

聚合阶段。限制输出到下一阶段的记录数。
Aggregation stage. Limit the number of records output to the next stage.

**示例**
**Example**

假设集合 items 有如下记录：
Suppose the collection items has the following records:
```js
{
  _id: "1",
  price: 10
}
{
  _id: "2",
  price: 50
}
{
  _id: "3",
  price: 20
}
{
  _id: "4",
  price: 80
}
{
  _id: "5",
  price: 200
}
```
返回价格大于 20 的记录的最小的两个记录：
Return the smallest two records of records with a price greater than 20:
```js
const $ = db.command.aggregate
let res = await db.collection('items').aggregate()
  .match({
    price: $.gt(20)
  })
  .sort({
    price: 1,
  })
  .limit(2)
  .end()
```
返回结果如下：
The returned results are as follows:
```js
{
  "_id": "2",
  "price": 50
}
{
  "_id": "4",
  "price": 80
}
```

## lookup@aggregate-lookup

聚合阶段。联表查询。与同个数据库下的一个指定的集合做 left outer join(左外连接)。对该阶段的每一个输入记录，lookup 会在该记录中增加一个数组字段，该数组是被联表中满足匹配条件的记录列表。lookup 会将连接后的结果输出给下个阶段。
Aggregation stage. Joint query. Do left outer join with a specified collection in the same database. For each input record in this stage, lookup will add an array field to the record, and the array is a list of records in the linked table that meet the matching conditions. lookup will output the concatenated result to the next stage.

**API 说明**
**API description**

`lookup` 有两种使用方式
`lookup` can be used in two ways

### 相等匹配@lookup-local-eq-foreign
将输入记录的一个字段和被连接集合的一个字段进行相等匹配时，采用以下定义：
When matching a field of an input record for equality with a field of the joined collection, the following definitions are used:
```js
lookup({
  from: <要连接的集合名>,
  from: <collection name to connect to>,
  localField: <输入记录的要进行相等匹配的字段>,
  localField: <field of the input record to be matched for equality>,
  foreignField: <被连接集合的要进行相等匹配的字段>,
  foreignField: <the field of the connected collection to be matched for equality>,
  as: <输出的数组字段名>
  as: <output array field name>
})
```

**参数详细说明**
**Detailed description of parameters**

|参数字段			|说明																																																																										|
|Parameter Fields |Description |
|----					|----																																																																										|
|from					|要进行连接的另外一个集合的名字																																																													|
|from |The name of another collection to join |
|localField		|当前流水线的输入记录的字段名，该字段将被用于与 from 指定的集合的 foreignField 进行相等匹配。如果输入记录中没有该字段，则该字段的值在匹配时会被视作 null|
|localField |The field name of the input record of the current pipeline, which will be used for equality matching with the foreignField of the collection specified by from. If the field is not present in the input record, the value of the field will be treated as null|
|foreignField	|被连接集合的字段名，该字段会被用于与 localField 进行相等匹配。如果被连接集合的记录中没有该字段，该字段的值将在匹配时被视作 null												|
|foreignField |The field name of the concatenated collection that will be used for equality matching with localField. If the field is not present in the records of the joined collection, the value of the field will be treated as null when matching |
|as						|指定连接匹配出的记录列表要存放的字段名，这个数组包含的是匹配出的来自 from 集合的记录。如果输入记录中本来就已有该字段，则该字段会被覆写									|
|as |Specifies the field name to be stored in the list of records matched by the connection. This array contains the matched records from the from collection. If the field already exists in the input record, the field will be overwritten |

这个操作等价于以下伪 SQL 操作：
This operation is equivalent to the following pseudo-SQL operation:

```
SELECT *, <output array field>
FROM collection
WHERE <output array field> IN (SELECT *
                               FROM <collection to join>
                               WHERE <foreignField>= <collection.localField>);
```

**例子：**
**example:**

- 指定一个相等匹配条件
- Specify an equality match condition
- 对数组字段应用相等匹配
- apply equality matching to array fields
- 组合 mergeObjects 应用相等匹配
- Combine mergeObjects to apply equality matching

### 自定义连接条件、拼接子查询@lookup-pipeline

如果需要指定除相等匹配之外的连接条件，或指定多个相等匹配条件，或需要拼接被连接集合的子查询结果，那可以使用如下定义：
If you need to specify join conditions other than equality matching, or specify multiple equality matching conditions, or need to concatenate the subquery results of the joined sets, you can use the following definitions:
```js
lookup({
  from: <要连接的集合名>,
  from: <collection name to connect to>,
  let: { <变量1>: <表达式1>, ..., <变量n>: <表达式n> },
  let: { <variable1>: <expression1>, ..., <variablen>: <expressionn> },
  pipeline: [ <在要连接的集合上进行的流水线操作> ],
  pipeline: [ <pipeline operation on the collection to join> ],
  as: <输出的数组字段名>
  as: <output array field name>
})
```

**参数详细说明**
**Detailed description of parameters**

|参数字段	|说明																																																																																																																																																				|
|Parameter Fields |Description |
|----			|----																																																																																																																																																				|
|from			|要进行连接的另外一个集合的名字																																																																																																																																							|
|from |The name of another collection to join |
|let			|可选。指定在 pipeline 中可以使用的变量，变量的值可以引用输入记录的字段，比如 let: { userName: '$name' } 就代表将输入记录的 name 字段作为变量 userName 的值。在 pipeline 中无法直接访问输入记录的字段，必须通过 let 定义之后才能访问，访问的方式是在 expr 操作符中用 $$变量名 的方式访问，比如 $$userName。	|
|let |Optional. Specify a variable that can be used in the pipeline. The value of the variable can refer to the field of the input record. For example, let: { userName: '$name' } means that the name field of the input record is used as the value of the variable userName. The fields of the input record cannot be directly accessed in the pipeline, and must be accessed after the let definition. The way to access is to use the $$ variable name in the expr operator to access, such as $$userName. |
|pipeline	|指定要在被连接集合中运行的聚合操作。如果要返回整个集合，则该字段取值空数组 []。在 pipeline 中无法直接访问输入记录的字段，必须通过 let 定义之后才能访问，访问的方式是在 expr 操作符中用 $$变量名 的方式访问，比如 $$userName。																																							|
|pipeline |Specifies the aggregation operation to run on the joined collection. If the entire collection is to be returned, this field takes the empty array []. The fields of the input record cannot be directly accessed in the pipeline, and must be accessed after the let definition. The way to access is to use the $$ variable name in the expr operator to access, such as $$userName. |
|as				|指定连接匹配出的记录列表要存放的字段名，这个数组包含的是匹配出的来自 from 集合的记录。如果输入记录中本来就已有该字段，则该字段会被覆写																																																																																			|
|as |Specifies the field name to be stored in the list of records matched by the connection. This array contains the matched records from the from collection. If the field already exists in the input record, the field will be overwritten |

该操作等价于以下伪 SQL 语句：
This operation is equivalent to the following pseudo-SQL statement:
```
SELECT *, <output array field>
FROM collection
WHERE <output array field> IN (SELECT <documents as determined from the pipeline>
                               FROM <collection to join>
                               WHERE <pipeline> );
```

**例子**
**example**

- 指定多个连接条件
- Specify multiple join conditions
- 拼接被连接集合的子查询
- Subqueries that concatenate the joined collections

**示例**
**Example**

**指定一个相等匹配条件**
**Specify an equality match condition**

假设 orders 集合有以下记录：
Suppose the orders collection has the following records:
```js
[
  {"_id":4,"book":"novel 1","price":30,"quantity":2},
  {"_id":5,"book":"science 1","price":20,"quantity":1},
  {"_id":6}
]
```
books 集合有以下记录：
The books collection has the following records:
```js
[
  {"_id":"book1","author":"author 1","category":"novel","stock":10,"time":1564456048486,"title":"novel 1"},
  {"_id":"book3","author":"author 3","category":"science","stock":30,"title":"science 1"},
  {"_id":"book4","author":"author 3","category":"science","stock":40,"title":"science 2"},
  {"_id":"book2","author":"author 2","category":"novel","stock":20,"title":"novel 2"},
  {"_id":"book5","author":"author 4","category":"science","stock":50,"title":null},
  {"_id":"book6","author":"author 5","category":"novel","stock":"60"}
]
```
以下聚合操作可以通过一个相等匹配条件连接 `orders` 和 `books` 集合，匹配的字段是 `orders` 集合的 `book` 字段和 `books` 集合的 title 字段：
The following aggregation operations can join the `orders` and `books` collections with an equality match condition on the `book` field of the `orders` collection and the title field of the `books` collection:
```js
const db = uniCloud.database()
let res = await db.collection('orders').aggregate()
  .lookup({
    from: 'books',
    localField: 'book',
    foreignField: 'title',
    as: 'bookList',
  })
  .end()
```
结果：
result:
```js
[
  {
    "_id": 4,
    "book": "novel 1",
    "price": 30,
    "quantity": 2,
    "bookList": [
      {
        "_id": "book1",
        "title": "novel 1",
        "author": "author 1",
        "category": "novel",
        "stock": 10
      }
    ]
  },
  {
    "_id": 5,
    "book": "science 1",
    "price": 20,
    "quantity": 1,
    "bookList": [
      {
        "_id": "book3",
        "category": "science",
        "title": "science 1",
        "author": "author 3",
        "stock": 30
      }
    ]
  },
  {
    "_id": 6,
    "bookList": [
      {
        "_id": "book5",
        "category": "science",
        "author": "author 4",
        "stock": 50,
        "title": null
      },
      {
        "_id": "book6",
        "author": "author 5",
        "stock": "60",
        "category": "novel"
      }
    ]
  }
]
```
对数组字段应用相等匹配
Apply equality matching to array fields
假设 authors 集合有以下记录：
Suppose the authors collection has the following records:
```js
[
  {"_id": 1, "name": "author 1", "intro": "Two-time best-selling sci-fiction novelist"},
  {"_id": 3, "name": "author 3", "intro": "UCB assistant professor"},
  {"_id": 4, "name": "author 4", "intro": "major in CS"}
]
```
books 集合有以下记录：
The books collection has the following records:
```js
[
  {"_id":"book1","authors":["author 1"],"category":"novel","stock":10,"time":1564456048486,"title":"novel 1"},
  {"_id":"book3","authors":["author 3", "author 4"],"category":"science","stock":30,"title":"science 1"},
  {"_id":"book4","authors":["author 3"],"category":"science","stock":40,"title":"science 2"}
]
```
以下操作获取作者信息及他们分别发表的书籍，使用了 lookup 操作匹配 authors 集合的 name 字段和 books 集合的 authors 数组字段：
The following operation retrieves author information and their respective published books, using the lookup operation to match the name field of the authors collection with the authors array field of the books collection:
```js
const db = cloud.database()
let res = await db.collection('authors').aggregate()
  .lookup({
    from: 'books',
    localField: 'name',
    foreignField: 'authors',
    as: 'publishedBooks',
  })
  .end()
```
结果
result
```js
[
  {
    "_id": 1,
    "intro": "Two-time best-selling sci-fiction novelist",
    "name": "author 1",
    "publishedBooks": [
      {
        "_id": "book1",
        "title": "novel 1",
        "category": "novel",
        "stock": 10,
        "authors": [
          "author 1"
        ]
      }
    ]
  },
  {
    "_id": 3,
    "name": "author 3",
    "intro": "UCB assistant professor",
    "publishedBooks": [
      {
        "_id": "book3",
        "category": "science",
        "title": "science 1",
        "stock": 30,
        "authors": [
          "author 3",
          "author 4"
        ]
      },
      {
        "_id": "book4",
        "title": "science 2",
        "category": "science",
        "stock": 40,
        "authors": [
          "author 3"
        ]
      }
    ]
  },
  {
    "_id": 4,
    "intro": "major in CS",
    "name": "author 4",
    "publishedBooks": [
      {
        "_id": "book3",
        "category": "science",
        "title": "science 1",
        "stock": 30,
        "authors": [
          "author 3",
          "author 4"
        ]
      }
    ]
  }
]
```

**组合 mergeObjects 应用相等匹配**
**Combining mergeObjects applies equality matching**

假设 `orders` 集合有以下记录：
Suppose the `orders` collection has the following records:
```js
[
  {"_id":4,"book":"novel 1","price":30,"quantity":2},
  {"_id":5,"book":"science 1","price":20,"quantity":1},
  {"_id":6}
]
```
`books` 集合有以下记录：
The `books` collection has the following records:
```js
[
  {"_id":"book1","author":"author 1","category":"novel","stock":10,"time":1564456048486,"title":"novel 1"},
  {"_id":"book3","author":"author 3","category":"science","stock":30,"title":"science 1"},
  {"_id":"book4","author":"author 3","category":"science","stock":40,"title":"science 2"},
  {"_id":"book2","author":"author 2","category":"novel","stock":20,"title":"novel 2"},
  {"_id":"book5","author":"author 4","category":"science","stock":50,"title":null},
  {"_id":"book6","author":"author 5","category":"novel","stock":"60"}
]
```
以下操作匹配 orders 的 book 字段和 books 的 title 字段，并将 books 匹配结果直接 merge 到 orders 记录中。
The following operation matches the book field of orders and the title field of books, and merges the books matching result directly into the orders record.
```js
var db = cloud.database()
var $ = db.command.aggregate
let res = await db.collection('orders').aggregate()
  .lookup({
    from: "books",
    localField: "book",
    foreignField: "title",
    as: "bookList"
  })
  .replaceRoot({
    newRoot: $.mergeObjects([ $.arrayElemAt(['$bookList', 0]), '$$ROOT' ])
  })
  .project({
    bookList: 0
  })
  .end()
```
结果
result
```js
[
  {
    "_id": 4,
    "title": "novel 1",
    "author": "author 1",
    "time": 1564456048486,
    "category": "novel",
    "stock": 10,
    "book": "novel 1",
    "price": 30,
    "quantity": 2
  },
  {
    "_id": 5,
    "category": "science",
    "title": "science 1",
    "author": "author 3",
    "stock": 30,
    "book": "science 1",
    "price": 20,
    "quantity": 1
  },
  {
    "_id": 6,
    "category": "science",
    "author": "author 4",
    "stock": 50,
    "title": null
  }
]
```

**指定多个连接条件**
**Specify multiple join conditions**

假设 `orders` 集合有以下记录：
Suppose the `orders` collection has the following records:
```js
[
  {"_id":4,"book":"novel 1","price":300,"quantity":20},
  {"_id":5,"book":"science 1","price":20,"quantity":1}
]
```
`books` 集合有以下记录：
The `books` collection has the following records:
```js
[
  {"_id":"book1","author":"author 1","category":"novel","stock":10,"time":1564456048486,"title":"novel 1"},
  {"_id":"book3","author":"author 3","category":"science","stock":30,"title":"science 1"}
]
```
以下操作连接 `orders` 和 `books` 集合，要求两个条件：
The following operation joins the `orders` and `books` collections, requiring two conditions:

- orders 的 book 字段与 books 的 title 字段相等
- The book field of orders is equal to the title field of books
- books 的 stock 字段 大于或等于 orders 的 quantity 字段
- The stock field of books is greater than or equal to the quantity field of orders
```js
const db = cloud.database()
const dbCmd = db.command
const $ = dbCmd.aggregate
let res = await db.collection('orders').aggregate()
  .lookup({
    from: 'books',
    let: {
      order_book: '$book',
      order_quantity: '$quantity'
    },
    pipeline: $.pipeline()
      .match(dbCmd.expr($.and([
        $.eq(['$title', '$$order_book']),
        $.gte(['$stock', '$$order_quantity'])
      ])))
      .project({
        _id: 0,
        title: 1,
        author: 1,
        stock: 1
      })
      .done(),
    as: 'bookList',
  })
  .end()
```
结果：
result:
```js
[
  {
    "_id": 4,
    "book": "novel 1",
    "price": 300,
    "quantity": 20,
    "bookList": []
  },
  {
    "_id": 5,
    "book": "science 1",
    "price": 20,
    "quantity": 1,
    "bookList": [
      {
        "title": "science 1",
        "author": "author 3",
        "stock": 30
      }
    ]
  }
]
```

**拼接被连接集合的子查询**
**Concatenate subqueries of joined collections**

假设 `orders` 集合有以下记录：
Suppose the `orders` collection has the following records:
```js
[
  {"_id":4,"book":"novel 1","price":30,"quantity":2},
  {"_id":5,"book":"science 1","price":20,"quantity":1}
]
```
`books` 集合有以下记录：
The `books` collection has the following records:
```js
[
  {"_id":"book1","author":"author 1","category":"novel","stock":10,"time":1564456048486,"title":"novel 1"},
  {"_id":"book3","author":"author 3","category":"science","stock":30,"title":"science 1"},
  {"_id":"book4","author":"author 3","category":"science","stock":40,"title":"science 2"}
]
```
在每条输出记录上加上一个数组字段，该数组字段的值是对 books 集合的一个查询语句的结果：
Add an array field to each output record whose value is the result of a query on the books collection:
```js
const db = cloud.database()
const $ = db.command.aggregate
let res = await db.collection('orders').aggregate()
  .lookup({
    from: 'books',
    let: {
      order_book: '$book',
      order_quantity: '$quantity'
    },
    pipeline: $.pipeline()
      .match({
        author: 'author 3'
      })
      .project({
        _id: 0,
        title: 1,
        author: 1,
        stock: 1
      })
      .done(),
    as: 'bookList',
  })
  .end()
```
结果
result
```js
[
  {
    "_id": 4,
    "book": "novel 1",
    "price": 30,
    "quantity": 20,
    "bookList": [
      {
        "title": "science 1",
        "author": "author 3",
        "stock": 30
      },
      {
        "title": "science 2",
        "author": "author 3",
        "stock": 40
      }
    ]
  },
  {
    "_id": 5,
    "book": "science 1",
    "price": 20,
    "quantity": 1,
    "bookList": [
      {
        "title": "science 1",
        "author": "author 3",
        "stock": 30
      },
      {
        "title": "science 2",
        "author": "author 3",
        "stock": 40
      }
    ]
  }
]
```

**多表联表查询**
**Multiple table join table query**

假设 `orders` 集合有以下记录：
Suppose the `orders` collection has the following records:
```js
[
  {"_id":4,"book":"book1","price":30,"quantity":2},
  {"_id":5,"book":"book2","price":20,"quantity":1}
]
```
`books` 集合有以下记录：
The `books` collection has the following records:
```js
[
  {"_id":"book1","author":"author1","title":"novel 1"},
  {"_id":"book2","author":"author2","title":"science 1"},
]
```
`authors` 集合有以下记录：
The `authors` collection has the following records:
```js
[
  {"_id":"author1","name":"A1"},
  {"_id":"author2","author":"A2"}
]
```

如需orders关联books，book再关联authors查询，可以在pipeline内再使用lookup
If orders are associated with books, and books are associated with authors query, you can use lookup in the pipeline.

```js
const db = cloud.database()
const dbCmd = db.command
const $ = db.command.aggregate
let res = await db.collection('orders').aggregate()
  .lookup({
    from: 'books',
    let: {
      book_id: '$book'
    },
    pipeline: $.pipeline()
      .match(
        dbCmd.expr($.eq(['$_id', '$$book_id']))
      )
      .lookup({
        from: 'authors',
        let: {
          author_id: '$author'
        },
        pipeline: $.pipeline()
          .match(
            dbCmd.expr($.eq(['$_id', '$$author_id']))
          )
          .done(),
        as: 'authorList'
      })
      .done(),
    as: 'bookList',
  })
  .end()

```

结果如下
The result is as follows

```js
[
  {
		"_id":4,
		"book":"book1",
		"price":30,
		"quantity":2,
		"bookList": [{
			"_id":"book1",
			"author":"author1",
			"title":"novel 1",
			authorList: [{
				"_id":"author1",
				"name":"A1"
			}]
		}]
	},
  {
		"_id":5,
		"book":"book2",
		"price":20,
		"quantity":1,
		"bookList": [{
			"_id":"book2",
			"author":"author2",
			"title":"science 1",
			authorList: [{
				"_id":"author2",
				"name":"A2"
			}]
		}]
	}
]
```

## match@aggregate-match

聚合阶段。根据条件过滤文档，并且把符合条件的文档传递给下一个流水线阶段。
Aggregation stage. Filter documents based on a condition and pass those documents that match the condition to the next pipeline stage.

**API 说明**
**API description**

**match 的形式如下：**
**match has the following form:**


```js
match(<查询条件>)
match(<query condition>)
```

查询条件与普通查询一致，可以用普通查询操作符，注意 match 阶段和其他聚合阶段不同，不可使用数据库运算方法，只能使用查询操作符。
The query conditions are the same as those of ordinary queries, and ordinary query operators can be used. Note that the match stage is different from other aggregation stages. Database operations cannot be used, and only query operators can be used.
```js
// 直接使用字符串
// use string directly
match({
  name: 'Tony Stark'
})
```
```js
// 使用操作符
// use operator
const dbCmd = db.command
match({
  age: dbCmd.gt(18)
})
```

**示例**
**Example**

假设集合 articles 有如下记录：
Suppose the collection articles has the following records:
```js
{ "_id" : "1", "author" : "stark",  "score" : 80 }
{ "_id" : "2", "author" : "stark",  "score" : 85 }
{ "_id" : "3", "author" : "bob",    "score" : 60 }
{ "_id" : "4", "author" : "li",     "score" : 55 }
{ "_id" : "5", "author" : "jimmy",  "score" : 60 }
{ "_id" : "6", "author" : "li",     "score" : 94 }
{ "_id" : "7", "author" : "justan", "score" : 95 }
```

**匹配**
**match**

下面是一个直接匹配的例子：
Here is an example of a direct match:
```js
let res = await db.collection('articles')
  .aggregate()
  .match({
    author: 'stark'
  })
  .end()
```
这里的代码尝试找到所有 author 字段是 stark 的文章，那么匹配如下：
The code here tries to find all articles where the author field is stark , then the match is as follows:
```js
{ "_id" : "1", "author" : "stark", "score" : 80 }
{ "_id" : "2", "author" : "stark", "score" : 85 }
```

**计数**
**count**

match 过滤出文档后，还可以与其他流水线阶段配合使用。
After match filters out documents, it can also be used in conjunction with other pipeline stages.

比如下面这个例子，我们使用 group 进行搭配，计算 score 字段大于 80 的文档数量：
For example, in the following example, we use group to match and calculate the number of documents whose score field is greater than 80:
```js
const dbCmd = db.command
const $ = dbCmd.aggregate
let res = await db.collection('articles')
  .aggregate()
  .match({
    score: dbCmd.gt(80)
  })
  .group({
      _id: null,
      count: $.sum(1)
  })
  .end()
```
返回值如下：
The return value is as follows:
```js
{ "_id" : null, "count" : 3 }
```

## project@aggregate-project

聚合阶段。把指定的字段传递给下一个流水线，指定的字段可以是某个已经存在的字段，也可以是计算出来的新字段。
Aggregation stage. Pass the specified field to the next pipeline. The specified field can be an existing field or a new calculated field.

**API 说明**
**API description**

**project 的形式如下：**
**project has the following form:**


```js
project({
  <expression>
})
```

表达式可以有以下格式：
Expressions can have the following formats:

|格式									|说明																																														|
|Format |Description |
|----									|----																																														|
|<字段>: <1 或 true>	|指定包含某个已有字段																																						|
|<field>: <1 or true> |Specifies to include an existing field|
|_id: <0 或 false>		|舍弃 _id 字段																																									|
|_id: <0 or false> |Discard _id field |
|<字段>: <表达式>			|加入一个新字段，或者重置某个已有字段																														|
|<field>: <expression> |Add a new field, or reset an existing field|
|<字段>: <0 或 false>	|舍弃某个字段（如果你指定舍弃了某个非 _id 字段，那么在此次 project 中，你不能再使用其它表达式）	|
|<field>: <0 or false> |Discard a field (if you specify to discard a non-_id field, you cannot use other expressions in this project) |

**指定包含字段**
**Specify Include Fields**

_id 字段是默认包含在输出中的，除此之外其他任何字段，如果想要在输出中体现的话，必须在 project 中指定； 如果指定包含一个尚不存在的字段，那么 project 会忽略这个字段，不会加入到输出的文档中；
The _id field is included in the output by default, and any other fields must be specified in the project if they want to be reflected in the output; if the specified field contains a field that does not yet exist, the project will ignore this field, will not be added to the output document;

**指定排除字段**
**Specify exclusion fields**

如果你在 project 中指定排除某个字段，那么其它字段都会体现在输出中； 如果指定排除的是非 _id 字段，那么在本次 project 中，不能再使用其它表达式；
If you specify to exclude a field in the project, other fields will be reflected in the output; if the specified exclusion is a non-_id field, then in this project, no other expressions can be used;

**加入新的字段或重置某个已有字段**
**Add a new field or reset an existing field**

你可以使用一些特殊的表达式加入新的字段，或重置某个已有字段。
You can use some special expressions to add new fields, or reset an existing field.

**多层嵌套的字段**
**Multi-level nested fields**

有时有些字段处于多层嵌套的底层，我们可以使用点记法：
Sometimes some fields are at the bottom of multiple levels of nesting, we can use dot notation:
```js
"contact.phone.number": <1 or 0 or 表达式>
"contact.phone.number": <1 or 0 or expression>
```
也可以直接使用嵌套的格式：
Nested formats can also be used directly:
```js
contact: { phone: { number: <1 or 0 or 表达式> } }
contact: { phone: { number: <1 or 0 or expression> } }
```

**示例**
**Example**

假设我们有一个 articles 集合，其中含有以下文档：
Suppose we have an articles collection with the following documents:
```js
{
    "_id": 666,
    "title": "This is title",
    "author": "Nobody",
    "isbn": "123456789",
    "introduction": "......"
}
```
**指定包含某些字段**
**Specify to include certain fields**

下面的代码使用 project，让输出只包含 _id、title 和 author 字段：
The following code uses project to have the output only contain the _id, title and author fields:
```js
let res = await db.collection('articles')
  .aggregate()
  .project({
    title: 1,
    author: 1
  })
  .end()
```

输出如下：
The output is as follows:
```js
{ "_id" : 666, "title" : "This is title", "author" : "Nobody" }
```

**去除输出中的 _id 字段**
**Remove _id field from output**

_id 是默认包含在输出中的，如果不想要它，可以指定去除它：
_id is included in the output by default, if you don't want it, you can specify to remove it:
```js
let res = await db.collection('articles')
  .aggregate()
  .project({
    _id: 0,  // 指定去除 _id 字段
    title: 1,
    author: 1
  })
  .end()
```
输出如下：
The output is as follows:
```js
{ "title" : "This is title", "author" : "Nobody" }
```

**去除某个非 _id 字段**
**Remove a non-_id field**

我们还可以指定在输出中去掉某个非 _id 字段，这样其它字段都会被输出：
We can also specify to remove a non-_id field from the output, so that all other fields will be output:
```js
let res = await db.collection('articles')
  .aggregate()
  .project({
    isbn: 0,  // 指定去除 isbn 字段
    isbn: 0, // Specifies to remove the isbn field
  })
  .end()
```
输出如下，相比输入，没有了 isbn 字段：
The output is as follows, without the isbn field compared to the input:
```js
{
    "_id" : 666,
    "title" : "This is title",
    "author" : "Nobody",
    "introduction": "......"
}
```

**加入计算出的新字段**
**Add calculated new field**

假设我们有一个 students 集合，其中包含以下文档：
Suppose we have a students collection with the following documents:
```js
{
    "_id": 1,
    "name": "小明",
    "scores": {
        "chinese": 80,
        "math": 90,
        "english": 70
    }
}
```
下面的代码，我们使用 project，在输出中加入了一个新的字段 totalScore：
In the code below, we use project and add a new field totalScore to the output:
```js
const { sum } = db.command.aggregate
let res = await db.collection('students')
  .aggregate()
  .project({
    _id: 0,
    name: 1,
    totalScore: sum([
        "$scores.chinese",
        "$scores.math",
        "$scores.english"
    ])
  })
  .end()
```
输出为：
The output is:
```js
{ "name": "小明", "totalScore": 240 }
{ "name": "Xiao Ming", "totalScore": 240 }
```

**加入新的数组字段**
**Add new array field**

假设我们有一个 points 集合，包含以下文档：
Suppose we have a points collection containing the following documents:
```js
{ "_id": 1, "x": 1, "y": 1 }
{ "_id": 2, "x": 2, "y": 2 }
{ "_id": 3, "x": 3, "y": 3 }
```

下面的代码，我们使用 project，把 x 和 y 字段，放入到一个新的数组字段 coordinate 中：
In the code below, we use project to put the x and y fields into a new array field coordinate :
```js
let res = await db.collection('points')
  .aggregate()
  .project({
    coordinate: ["$x", "$y"]
  })
  .end()
```
输出如下：
The output is as follows:
```js
{ "_id": 1, "coordinate": [1, 1] }
{ "_id": 2, "coordinate": [2, 2] }
{ "_id": 3, "coordinate": [3, 3] }
```

## replaceRoot@aggregate-replace-root

聚合阶段。指定一个已有字段作为输出的根节点，也可以指定一个计算出的新字段作为根节点。
Aggregation stage. Specify an existing field as the root node of the output, or you can specify a new calculated field as the root node.

**API 说明**
**API description**

**replaceRoot 使用形式如下：**
**replaceRoot is used in the following form:**


```js
replaceRoot({
    newRoot: <表达式>
    newRoot: <expression>
})
```
表达式格式如下：
The expression format is as follows:

|格式			|说明																											|
|Format |Description |
|----			|----																											|
|<字段名>	|指定一个已有字段作为输出的根节点（如果字段不存在则报错）	|
|<field name> |Specifies an existing field as the output root node (if the field does not exist, an error is reported) |
|<对象>		|计算一个新字段，并且把这个新字段作为根节点								|
|<object> |Computes a new field and uses this new field as the root node |

**示例**
**Example**

**使用已有字段作为根节点**
**Use existing field as root node**

假设我们有一个 schools 集合，内容如下：
Suppose we have a schools collection with the following content:
```js
{
  "_id": 1,
  "name": "SFLS",
  "teachers": {
    "chinese": 22,
    "math": 18,
    "english": 21,
    "other": 123
  }
}
```
下面的代码使用 replaceRoot，把 teachers 字段作为根节点输出：
The following code uses replaceRoot to output the teachers field as the root node:
```js
let res = await db.collection('schools')
  .aggregate()
  .replaceRoot({
    newRoot: '$teachers'
  })
  .end()
```
输出如下：
The output is as follows:
```js
{
  "chinese": 22,
  "math": 18,
  "english": 21,
  "other": 123
}
```
**使用计算出的新字段作为根节点**
**Use calculated new field as root node**

假设我们有一个 roles 集合，内容如下：
Suppose we have a roles collection with the following content:
```js
{ "_id": 1, "first_name": "四郎", "last_name": "黄" }
{ "_id": 1, "first_name": "Shiro", "last_name": "Yellow" }
{ "_id": 2, "first_name": "邦德", "last_name": "马" }
{ "_id": 2, "first_name": "Bond", "last_name": "Horse" }
{ "_id": 3, "first_name": "牧之", "last_name": "张" }
{ "_id": 3, "first_name": "Muzhi", "last_name": "Zhang" }
```
下面的代码使用 replaceRoot，把 first_name 和 last_name 拼在一起：
The following code uses replaceRoot to concatenate first_name and last_name:
```js
const { concat } = db.command.aggregate
let res = await db.collection('roles')
  .aggregate()
  .replaceRoot({
    newRoot: {
      full_name: concat(['$last_name', '$first_name'])
    }
  })
  .end()
```
输出如下：
The output is as follows:
```js
{ "full_name": "黄四郎" }
{ "full_name": "Huang Shilang" }
{ "full_name": "马邦德" }
{ "full_name": "Mabonde" }
{ "full_name": "张牧之" }
{ "full_name": "Zhang Muzhi" }
```

## sample@aggregate-sample

**注意**
**Notice**

- 此方法在数据量大的集合高频调用时可能会导致响应缓慢
- This method may cause slow response when called frequently with large collections
- 腾讯云数据库操作有默认20的limit，如需使用sample返回20条以上数据，请额外指定limit，例：`sample({size:40}).limit(40)`
- There is a default limit of 20 for Tencent Cloud database operations. If you need to use sample to return more than 20 pieces of data, please specify an additional limit, for example: `sample({size:40}).limit(40)`

聚合阶段。随机从文档中选取指定数量的记录。
Aggregation stage. Randomly picks the specified number of records from the document.

**API 说明**
**API description**

**sample 的形式如下：**
**sample has the following form:**


```js
sample({
    size: <正整数>
    size: <positive integer>
})
```
请注意：size 是正整数，否则会出错。
Note: size is a positive integer, otherwise an error occurs.

**示例**
**Example**

假设文档 users 有以下记录：
Suppose the document users has the following records:
```js
{ "name": "a" }
{ "name": "b" }
```

**随机选取**
**choose randomly**

如果现在进行抽奖活动，需要选出一名幸运用户。那么 sample 的调用方式如下：
If there is a lottery now, one lucky user needs to be selected. Then sample is called as follows:
```js
let res = await db.collection('users')
  .aggregate()
  .sample({
    size: 1
  })
  .end()
```

返回了随机选中的一个用户对应的记录，结果如下：
The record corresponding to a randomly selected user is returned, and the result is as follows:

```js
{ "_id": "696529e4-7e82-4e7f-812e-5144714edff6", "name": "b" }
```

## skip@aggregate-skip

聚合阶段。指定一个正整数，跳过对应数量的文档，输出剩下的文档。
Aggregation stage. Specify a positive integer to skip the corresponding number of documents and output the remaining documents.

**示例**
**Example**


```js
let res = await db.collection('users')
  .aggregate()
  .skip(5)
  .end()
```

这段代码会跳过查找到的前 5 个文档，并且把剩余的文档输出。
This code will skip the first 5 documents found and output the remaining documents.

## sort@aggregate-sort

聚合阶段。根据指定的字段，对输入的文档进行排序。
Aggregation stage. Sorts the entered documents according to the specified field.

**API 说明**
**API description**

**形式如下：**
**The form is as follows:**

```js
sort({
    <fieldname1>: <collation>,
    <fieldname2>: <collation>,
})
```
`<排序规则>`可以是以下取值：
`<collation />` can be the following values:

- 1 代表升序排列（从小到大）；
- 1 represents ascending order (smallest to largest);
- -1 代表降序排列（从大到小）；
- -1 represents descending order (large to small);

**示例**
**Example**

升序/降序排列
Ascending/descending order

假设我们有集合 articles，其中包含数据如下：
Suppose we have the collection articles, which contains the following data:
```js
{ "_id": "1", "author": "stark",  "score": 80, "age": 18 }
{ "_id": "2", "author": "bob",    "score": 60, "age": 18 }
{ "_id": "3", "author": "li",     "score": 55, "age": 19 }
{ "_id": "4", "author": "jimmy",  "score": 60, "age": 22 }
{ "_id": "5", "author": "justan", "score": 95, "age": 33 }
```
```js
let res = await db.collection('articles')
  .aggregate()
  .sort({
      age: -1,
      score: -1
  })
  .end()
```
上面的代码在 students 集合中进行聚合搜索，并且将结果排序，首先根据 age 字段降序排列，然后再根据 score 字段进行降序排列。
The above code performs an aggregate search in the students collection and sorts the results, first according to the age field in descending order, and then according to the score field in descending order.

输出结果如下：
The output is as follows:
```js
{ "_id": "5", "author": "justan", "score": 95, "age": 33 }
{ "_id": "4", "author": "jimmy",  "score": 60, "age": 22 }
{ "_id": "3", "author": "li",     "score": 55, "age": 19 }
{ "_id": "1", "author": "stark",  "score": 80, "age": 18 }
{ "_id": "2", "author": "bob",    "score": 60, "age": 18 }
```

## sortByCount@aggregate-sort-by-count

聚合阶段。根据传入的表达式，将传入的集合进行分组（group）。然后计算不同组的数量，并且将这些组按照它们的数量进行排序，返回排序后的结果。
Aggregation stage. Groups the incoming collection according to the incoming expression. Then count the number of distinct groups, and sort the groups by their number, returning the sorted result.

**API 说明**
**API description**

**sortByCount 的调用方式如下：**
**sortByCount is called as follows:**


```js
sortByCount(<表达式>)
sortByCount(<expression>)
```

表达式的形式是：$ + 指定字段。请注意：不要漏写 $ 符号。
The form of the expression is: $ + specifies the field. Note: don't leave out the $ sign.

**示例**
**Example**

**统计基础类型**
**Statistical base type**

假设集合 passages 的记录如下：
Suppose the set passages are recorded as follows:
```js
{ "category": "Web" }
{ "category": "Web" }
{ "category": "Life" }
```
下面的代码就可以统计文章的分类信息，并且计算每个分类的数量。即对 category 字段执行 sortByCount 聚合操作。
The following code can count the classification information of the article and calculate the number of each classification. That is, perform the sortByCount aggregation operation on the category field.
```js
let res = await db.collection('passages')
  .aggregate()
  .sortByCount('$category')
  .end()
```

返回的结果如下所示：Web 分类下有2篇文章，Life 分类下有1篇文章。
The returned results are as follows: 2 articles in the Web category and 1 article in the Life category.
```js
{ "_id": "Web", "count": 2 }
{ "_id": "Life", "count": 1 }
```
**解构数组类型**
**destructuring array types**

假设集合 passages 的记录如下：tags 字段对应的值是数组类型。
Suppose the records of the collection passages are as follows: the value corresponding to the tags field is of type array.
```js
{ "tags": [ "JavaScript", "C#" ] }
{ "tags": [ "Go", "C#" ] }
{ "tags": [ "Go", "Python", "JavaScript" ] }
```
如何统计文章的标签信息，并且计算每个标签的数量？因为 tags 字段对应的数组，所以需要借助 unwind 操作解构 tags 字段，然后再调用 sortByCount。
How to count the tag information of the article and calculate the number of each tag? Because of the array corresponding to the tags field, you need to use the unwind operation to deconstruct the tags field, and then call sortByCount.

下面的代码实现了这个功能：
The following code implements this functionality:
```js
let res = await db.collection('passages')
  .aggregate()
  .unwind(`$tags`)
  .sortByCount(`$tags`)
  .end()
```
返回的结果如下所示：
The result returned is as follows:
```js
{ "_id": "Go", "count": 2 }
{ "_id": "C#", "count": 2 }
{ "_id": "JavaScript", "count": 2 }
{ "_id": "Python", "count": 1 }
```

## unwind@aggregate-unwind

聚合阶段。使用指定的数组字段中的每个元素，对文档进行拆分。拆分后，文档会从一个变为一个或多个，分别对应数组的每个元素。
Aggregation stage. Splits the document using each element in the specified array field. After splitting, the document changes from one to one or more, one for each element of the array.

**API 说明**
**API description**

使用指定的数组字段中的每个元素，对文档进行拆分。拆分后，文档会从一个变为一个或多个，分别对应数组的每个元素。
Splits the document using each element in the specified array field. After splitting, the document changes from one to one or more, one for each element of the array.

**unwind 有两种使用形式：**
**unwind can be used in two forms:**

**参数是一个字段名**
**The parameter is a field name**


```js
unwind(<字段名>)
unwind(<field name>)
```
**参数是一个对象**
**The parameter is an object**


```js
unwind({
    path: <字段名>,
    includeArrayIndex: <string>,
    preserveNullAndEmptyArrays: <boolean>
})
```

|字段												|类型		|说明																																																																								|
|Field |Type |Description |
|----												|----		|----																																																																								|
|path												|string	|想要拆分的数组的字段名，需要以 $ 开头。																																																						|
|path |string |The field name of the array you want to split, needs to start with $. |
|includeArrayIndex					|string	|可选项，传入一个新的字段名，数组索引会保存在这个新的字段上。新的字段名不能以 $ 开头。																															|
|includeArrayIndex |string |Optional, pass in a new field name on which the array index will be stored. New field names cannot start with $. |
|preserveNullAndEmptyArrays	|boolean|如果为 true，那么在 path 对应的字段为 null、空数组或者这个字段不存在时，依然会输出这个文档；如果为 false，unwind 将不会输出这些文档。默认为 false。|
|preserveNullAndEmptyArrays |boolean| If true, the document will still be output when the field corresponding to path is null, an empty array, or the field does not exist; if false, unwind will not output these documents. Defaults to false. |

**示例**
**Example**

**拆分数组**
**split array**

假设我们有一个 products 集合，包含数据如下：
Suppose we have a products collection with the following data:
```js
{ "_id": "1", "product": "tshirt", "size": ["S", "M", "L"] }
{ "_id": "2", "product": "pants", "size": [] }
{ "_id": "3", "product": "socks", "size": null }
{ "_id": "4", "product": "trousers", "size": ["S"] }
{ "_id": "5", "product": "sweater", "size": ["M", "L"] }
```

我们根据 size 字段对这些文档进行拆分
We split these documents based on the size field
```js
db.collection('products')
  .aggregate()
  .unwind('$size')
  .end()
```

输出如下：
The output is as follows:
```js
{ "_id": "1", "product": "tshirt", "size": "S" }
{ "_id": "1", "product": "tshirt", "size": "M" }
{ "_id": "1", "product": "tshirt", "size": "L" }
{ "_id": "4", "product": "trousers", "size": "S" }
{ "_id": "5", "product": "sweater", "size": "M" }
{ "_id": "5", "product": "sweater", "size": "L" }
```

**拆分后，保留原数组的索引**
**After splitting, keep the index of the original array**

我们根据 size 字段对文档进行拆分后，想要保留原数组索引在新的 index 字段中。
After we split the document according to the size field, we want to keep the original array index in the new index field.
```js
let res = await db.collection('products')
  .aggregate()
  .unwind({
      path: '$size',
      includeArrayIndex: 'index'
  })
  .end()
```
输出如下：
The output is as follows:
```js
{ "_id": "1", "product": "tshirt", "size": "S", "index": 0 }
{ "_id": "1", "product": "tshirt", "size": "M", "index": 1 }
{ "_id": "1", "product": "tshirt", "size": "L", "index": 2 }
{ "_id": "4", "product": "trousers", "size": "S", "index": 0 }
{ "_id": "5", "product": "sweater", "size": "M", "index": 0 }
{ "_id": "5", "product": "sweater", "size": "L", "index": 1 }
```

**保留字段为空的文档**
**Keep documents with empty fields**

注意到我们的集合中有两行特殊的空值数据：
Notice that we have two special rows of null data in our collection:
```js
...
{ "_id": "2", "product": "pants", "size": [] }
{ "_id": "3", "product": "socks", "size": null }
...
```
如果想要在输出中保留 size 为空数组、null，或者 size 字段不存在的文档，可以使用 preserveNullAndEmptyArrays 参数
If you want to keep documents whose size is an empty array, null, or the size field does not exist in the output, you can use the preserveNullAndEmptyArrays parameter
```js
let res = await db.collection('products')
  .aggregate()
  .unwind({
      path: '$size',
      preserveNullAndEmptyArrays: true
  })
  .end()
```
输出如下：
The output is as follows:
```js
{ "_id": "1", "product": "tshirt", "size": "S" }
{ "_id": "1", "product": "tshirt", "size": "M" }
{ "_id": "1", "product": "tshirt", "size": "L" }
{ "_id": "2", "product": "pants", "size": null }
{ "_id": "3", "product": "socks", "size": null }
{ "_id": "4", "product": "trousers", "size": "S" }
{ "_id": "5", "product": "sweater", "size": "M" }
{ "_id": "5", "product": "sweater", "size": "L" }
```

## end@aggregate-end

标志聚合操作定义完成，发起实际聚合操作
Indicates that the definition of the aggregation operation is completed, and initiates the actual aggregation operation

**返回值**
**return value**

Promise.&lt;Object&gt;

|属性	|类型							|说明					|
|property |type |description |
|---	|---							|---					|
|list	|Array.&lt;any&gt;|聚合结果列表	|
|list |Array.&lt;any&gt;|List of aggregated results |

**示例代码**
**Sample code**


```js
const $ = db.command.aggregate
let res = await db.collection('books').aggregate()
  .group({
    // 按 category 字段分组
    // group by category field
    _id: '$category',
    // 让输出的每组记录有一个 avgSales 字段，其值是组内所有记录的 sales 字段的平均值
    // Let each group of records output have an avgSales field whose value is the average of the sales fields of all records in the group
    avgSales: $.avg('$sales')
  })
  .end()
```
