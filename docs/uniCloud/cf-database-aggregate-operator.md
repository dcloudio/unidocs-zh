# 云数据库运算方法@aggregate-operator
# Cloud database operation method @aggregate-operator

**等同于mongoDB聚合操作符概念**
**equivalent to mongoDB aggregate operator concept**

## 算术操作符
## Arithmetic operators

### abs

<!--
/// meta
keyword: abs,绝对值
keyword: abs, absolute value
-->

返回一个数字的绝对值。  
Returns the absolute value of a number.

#### API 说明
#### API Description

语法如下：  
The syntax is as follows:

 
```js
db.command.aggregate.abs(<number>)
```
`abs` 传入的值除了数字常量外，也可以是任何最终解析成一个数字的表达式。  
In addition to numeric constants, the value passed in by `abs` can also be any expression that eventually resolves to a number.

 如果表达式解析为 `null` 或者指向一个不存在的字段，则 `abs` 的结果是 `null`。如果值解析为 `NaN`，则结果是 `NaN`。  
 If the expression resolves to `null` or points to a field that does not exist, the result of `abs` is `null`. If the value resolves to `NaN`, the result is `NaN`.

 
####  示例代码
#### Sample code
 假设集合 `ratings` 有如下记录：  
 Suppose the collection `ratings` has the following records:

 
```json
{ _id: 1, start: 5, end: 8 }
{ _id: 2, start: 4, end: 4 }
{ _id: 3, start: 9, end: 7 }
{ _id: 4, start: 6, end: 7 }
```
···
可以用如下方式求得各个记录的 `start` 和 `end` 之间的绝对差异大小：  
The absolute difference between `start` and `end` for each record can be found as follows:

 
```js
const $ = db.command.aggregate
let res = await db.collection('ratings').aggregate()
  .project({
    delta: $.abs($.subtract(['$start', '$end']))
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```json
{ "_id" : 1, "delta" : 3 }
{ "_id" : 2, "delta" : 0 }
{ "_id" : 3, "delta" : 2 }
{ "_id" : 4, "delta" : 1 }
```

### add

<!--
/// meta
keyword: 相加,add,日期
keyword: add, add, date
-->

将数字相加或将数字加在日期上。如果数组中的其中一个值是日期，那么其他值将被视为毫秒数加在该日期上。  
Add numbers or add numbers to dates. If one of the values in the array is a date, the other values are treated as milliseconds added to that date.

####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.add([<表达式1>, <表达式2>, ...])
```
表达式可以是形如 `$ + 指定字段`，也可以是普通字符串。只要能够被解析成字符串即可。  
The expression can be in the form of `$ + specified field`, or it can be a normal string. As long as it can be parsed into a string.

 
####  示例代码
#### Sample code
 假设集合 `staff` 有如下记录：  
 Suppose the collection `staff` has the following records:

 
```json
{ _id: 1, department: "x", sales: 5, engineer: 10, lastUpdate: ISODate("2019-05-01T00:00:00Z") }
{ _id: 2, department: "y", sales: 10, engineer: 20, lastUpdate: ISODate("2019-05-01T02:00:00Z") }
{ _id: 3, department: "z", sales: 20, engineer: 5, lastUpdate: ISODate("2019-05-02T03:00:00Z") }
```


**数字求和**
**SUM OF NUMBERS**

 可以用如下方式求得各个记录人数总数：  
 The total number of people in each record can be obtained as follows:

 
```js
const $ = db.command.aggregate
let res = await db.collection('staff').aggregate()
  .project({
    department: 1,
    total: $.add(['$sales', '$engineer'])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```json
{ _id: 1, department: "x", total: 15 }
{ _id: 2, department: "y", total: 30 }
{ _id: 3, department: "z", total: 25 }
```


**增加日期值**
**Increase date value**

 如下操作可以获取各个记录的 `lastUpdate` 加一个小时之后的值：  
 The following operation can obtain the value of `lastUpdate` plus one hour later for each record:

 
```js
const $ = db.command.aggregate
let res = await db.collection('staff').aggregate()
  .project({
    department: 1,
    lastUpdate: $.add(['$lastUpdate', 60*60*1000])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```json
{ _id: 1, department: "x", lastUpdate: ISODate("2019-05-01T01:00:00Z") }
{ _id: 2, department: "y", lastUpdate: ISODate("2019-05-01T03:00:00Z") }
{ _id: 3, department: "z", lastUpdate: ISODate("2019-05-02T04:00:00Z") }
```

### ceil

向上取整，返回大于或等于给定数字的最小整数。  
Round up, returns the smallest integer greater than or equal to the given number.

      
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.ceil(<number>)
```
`<number>` 可以是任意解析为数字的表达式。如果表达式解析为 `null` 或指向一个不存在的字段，则返回 `null`，如果解析为 `NaN`，则返回 `NaN`。  
`<number>` can be any expression that resolves to a number. Returns `null` if the expression resolves to `null` or points to a field that does not exist, or `NaN` if it resolves to `NaN`.

 
####  示例代码
#### Sample code
 假设集合 `sales` 有如下记录：  
 Suppose the collection `sales` has the following records:

 
```json
{ _id: 1, sales: 5.2 }
{ _id: 2, sales: 1.32 }
{ _id: 3, sales: -3.2 }
```
可以用如下方式取各个数字的向上取整值：  
Each number can be rounded up as follows:

 
```js
const $ = db.command.aggregate
let res = await db.collection('sales').aggregate()
  .project({
    sales: $.ceil('$sales')
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```json
{ _id: 1, sales: 6 }
{ _id: 2, sales: 2 }
{ _id: 3, sales: -3 }
```

### divide

传入被除数和除数，求商。  
Pass in the dividend and the divisor, and find the quotient.

      
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.divide([<被除数表达式>, <除数表达式>])
```
表达式可以是任意解析为数字的表达式。  
An expression can be any expression that resolves to a number.

 
####  示例代码
#### Sample code
 假设集合 `railroads` 有如下记录：  
 Suppose the collection `railroads` has the following records:

 
```js
{ _id: 1, meters: 5300 }
{ _id: 2, meters: 64000 }
{ _id: 3, meters: 130 }
```
可以用如下方式取各个数字转换为千米之后的值：  
You can take the values after converting each number to kilometers as follows:

 
```js
const $ = db.command.aggregate
let res = await db.collection('railroads').aggregate()
  .project({
    km: $.divide(['$meters', 1000])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ _id: 1, km: 5.3 }
{ _id: 2, km: 64 }
{ _id: 3, km: 0.13 }
```

### exp

取 e（自然对数的底数，欧拉数） 的 n 次方。  
Take e (the base of the natural logarithm, Euler's number) to the nth power.

      
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.exp(<exponent>)
```
`<exponent>` 可以是任意解析为数字的表达式。如果表达式解析为 `null` 或指向一个不存在的字段，则返回 `null`，如果解析为 `NaN`，则返回 `NaN`。  
`<exponent>` can be any expression that resolves to a number. Returns `null` if the expression resolves to `null` or points to a field that does not exist, or `NaN` if it resolves to `NaN`.

 
####  示例代码
#### Sample code
 假设集合 `math` 有如下记录：  
 Suppose the set `math` has the following records:

 
```js
{ _id: 1, exp: 0 }
{ _id: 2, exp: 1 }
{ _id: 3, exp: 2 }
```

```js
const $ = db.command.aggregate
let res = await db.collection('math').aggregate()
  .project({
    result: $.exp('$exp')
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ _id: 1, result: 1 }
{ _id: 2, result: 2.71828182845905 }
{ _id: 3, result: 7.38905609893065 }
```

### floor

向下取整，返回大于或等于给定数字的最小整数。  
Round down, returns the smallest integer greater than or equal to the given number.

      
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.floor(<number>)
```
`<number>` 可以是任意解析为数字的表达式。如果表达式解析为 `null` 或指向一个不存在的字段，则返回 `null`，如果解析为 `NaN`，则返回 `NaN`。  
`<number>` can be any expression that resolves to a number. Returns `null` if the expression resolves to `null` or points to a field that does not exist, or `NaN` if it resolves to `NaN`.

 
####  示例代码
#### Sample code
 假设集合 `sales` 有如下记录：  
 Suppose the collection `sales` has the following records:

 
```js
{ _id: 1, sales: 5.2 }
{ _id: 2, sales: 1.32 }
{ _id: 3, sales: -3.2 }
```
可以用如下方式取各个数字的向下取整值：  
Each number can be rounded down as follows:

 
```js
const $ = db.command.aggregate
let res = await db.collection('sales').aggregate()
  .project({
    sales: $.floor('$sales')
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ _id: 1, sales: 5 }
{ _id: 2, sales: 1 }
{ _id: 3, sales: -4 }
```

### ln

计算给定数字在自然对数值。  
Calculates the natural logarithm of the given number.

      
####  API 说明
#### API Description

语法如下：  
The syntax is as follows:

```js
db.command.aggregate.ln(<number>)
```
`<number>` 可以是任意解析为非负数字的表达式。  
`<number>` can be any expression that resolves to a non-negative number.

`ln` 等价于 `log([<number>, Math.E])`，其中 `Math.E` 是 `JavaScript` 获取 `e` 的值的方法。  
`ln` is equivalent to `log([<number>, Math.E])`, where `Math.E` is the `JavaScript` method for getting the value of `e`.

 
####  示例代码
#### Sample code

假设集合 curve 有如下记录：
Suppose the collection curve has the following records:
```js
{ _id: 1, x: 1 }
{ _id: 2, x: 2 }
{ _id: 3, x: 3 }
```
计算 ln(x) 的值：
Compute the value of ln(x):
```js
const $ = db.command.aggregate
let res = await db.collection('curve').aggregate()
  .project({
    log: $.ln('$x')
  })
  .end()
```
返回结果如下：
The returned results are as follows:
```js
{ _id: 1, ln: 0 }
{ _id: 2, ln: 0.6931471805599453 }
{ _id: 3, ln: 1.0986122886681098 }
```


### log

计算给定数字在给定对数底下的 log 值。  
Calculates the log value of the given number under the given logarithm.

      
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.log([<number>, <base>])
```
`<number>` 可以是任意解析为非负数字的表达式。`<base>` 可以是任意解析为大于 1 的数字的表达式。  
`<number> ` can be any expression that resolves to a non-negative number. `<base> ` can be any expression that resolves to a number greater than 1.

 如果任一参数解析为 `null` 或指向任意一个不存在的字段，`log` 返回 `null`。如果任一参数解析为 `NaN`，`log` 返回 `NaN`。  
 `log` returns `null` if either argument resolves to `null` or points to any non-existent field. If either argument resolves to `NaN`, `log` returns `NaN`.

 
####  示例代码
#### Sample code
 假设集合 `curve` 有如下记录：  
 Suppose the collection `curve` has the following records:

 
```js
{ _id: 1, x: 1 }
{ _id: 2, x: 2 }
{ _id: 3, x: 3 }
```
计算 `log2(x)` 的值：  
Compute the value of `log2(x)`:

 
```js
const $ = db.command.aggregate
let res = await db.collection('curve').aggregate()
  .project({
    log: $.log(['$x', 2])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ _id: 1, log: 0 }
{ _id: 2, log: 1 }
{ _id: 3, log: 1.58496250072 }
```

### log10

计算给定数字在对数底为 10 下的 log 值。  
Calculates the log value of the given number in log base 10.

      
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.log(<number>)
```
`<number>` 可以是任意解析为非负数字的表达式。  
`<number>` can be any expression that resolves to a non-negative number.

 `log10` 等同于 `log` 方法的第二个参数固定为 10。  
 `log10` is equivalent to the `log` method where the second parameter is fixed to 10.

 
####  示例代码
#### Sample code
 
####  db.command.aggregate.log10

计算给定数字在对数底为 10 下的 log 值。  
Calculates the log value of the given number at log base 10.

语法如下：  
The syntax is as follows:

 
```js
db.command.aggregate.log(<number>)
```
`<number>` 可以是任意解析为非负数字的表达式。  
`<number>` can be any expression that resolves to a non-negative number.

 `log10` 等同于 `log` 方法的第二个参数固定为 10。
 `log10` is equivalent to the `log` method where the second parameter is fixed to 10.

### mod

取模运算，取数字取模后的值。  
The modulo operation takes the modulo value of the number.

      
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.mod([<dividend>, <divisor>])
```
第一个数字是被除数，第二个数字是除数。参数可以是任意解析为数字的表达式。  
The first number is the dividend and the second number is the divisor. The argument can be any expression that resolves to a number.

 
####  示例代码
#### Sample code
 假设集合 `shopping` 有如下记录：  
 Suppose the collection `shopping` has the following records:

 
```js
{ _id: 1, bags: 3, items: 5 }
{ _id: 2, bags: 2, items: 8 }
{ _id: 3, bags: 5, items: 16 }
```
各记录取 `items` 除以 `bags` 的余数（`items % bags`）：  
Each record takes the remainder of dividing `items` by `bags` (`items % bags`):

 
```js
const $ = db.command.aggregate
let res = await db.collection('shopping').aggregate()
  .project({
    overflow: $.mod(['$items', '$bags'])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ _id: 1, overflow: 2 }
{ _id: 2, overflow: 0 }
{ _id: 3, overflow: 1 }
```

### multiply

取传入的数字参数相乘的结果。  
Takes the result of multiplying the passed numeric arguments.

      
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.multiply([<expression1>, <expression2>, ...])
```
参数可以是任意解析为数字的表达式。  
The argument can be any expression that resolves to a number.

 
####  示例代码
#### Sample code
 假设集合 `fruits` 有如下记录：  
 Suppose the collection `fruits` has the following records:

 
```js
{ "_id": 1, "name": "apple", "price": 10, "quantity": 100 }
{ "_id": 2, "name": "orange", "price": 15, "quantity": 50 }
{ "_id": 3, "name": "lemon", "price": 5, "quantity": 20 }
```
求各个水果的的总价值：  
Find the total value of each fruit:

 
```js
const $ = db.command.aggregate
let res = await db.collection('fruits').aggregate()
  .project({
    name: 1,
    total: $.multiply(['$price', '$quantity']),
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "name": "apple", "total": 1000 }
{ "_id": 2, "name": "orange", "total": 750 }
{ "_id": 3, "name": "lemo", "total": 100 }
```

### pow

求给定基数的指数次幂。  
Raises the exponential power of a given base.

      
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.pow([<base>, <exponent>])
```
参数可以是任意解析为数字的表达式。  
The argument can be any expression that resolves to a number.

 
####  示例代码
#### Sample code
 假设集合 `stats` 有如下记录：  
 Suppose the collection `stats` has the following records:

 
```js
{ "_id": 1, "x": 2, "y": 3 }
{ "_id": 2, "x": 5, "y": 7 }
{ "_id": 3, "x": 10, "y": 20 }
```
求 `x` 和 `y` 的平方和：  
Find the sum of the squares of `x` and `y`:

 
```js
const $ = db.command.aggregate
let res = await db.collection('stats').aggregate()
  .project({
    sumOfSquares: $.add([$.pow(['$x', 2]), $.pow(['$y', 2])]),
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "sumOfSquares": 13 }
{ "_id": 2, "sumOfSquares": 74 }
{ "_id": 3, "sumOfSquares": 500 }
```

### sqrt

求平方根。  
Find the square root.

      
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.sqrt([<number>])
```
参数可以是任意解析为非负数字的表达式。  
The argument can be any expression that resolves to a non-negative number.

 
####  示例代码
#### Sample code
 假设直角三角形集合 `triangle` 有如下记录：  
 Suppose the collection of right triangles `triangle` has the following records:

 
```js
{ "_id": 1, "x": 2, "y": 3 }
{ "_id": 2, "x": 5, "y": 7 }
{ "_id": 3, "x": 10, "y": 20 }
```
假设 `x` 和 `y` 分别为两直角边，则求斜边长：  
Assuming `x` and `y` are two right-angled sides, find the length of the hypotenuse:

 
```js
const $ = db.command.aggregate
let res = await db.collection('triangle').aggregate()
  .project({
    len: $.sqrt([$.add([$.pow(['$x', 2]), $.pow(['$y', 2])])]),
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "len": 3.605551275463989 }
{ "_id": 2, "len": 8.602325267042627 }
{ "_id": 3, "len": 22.360679774997898 }
```

### subtract

将两个数字相减然后返回差值，或将两个日期相减然后返回相差的毫秒数，或将一个日期减去一个数字返回结果的日期。  
Subtracts two numbers and returns the difference, or subtracts two dates and returns the milliseconds difference, or subtracts a number from a date and returns the date of the result.

      
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.subtract([<expression1>, <expression2>])
```
参数可以是任意解析为数字或日期的表达式。  
The argument can be any expression that resolves to a number or date.

 
####  示例代码
#### Sample code
 假设集合 `scores` 有如下记录：  
 Suppose the collection `scores` has the following records:

 
```js
{ "_id": 1, "max": 10, "min": 1 }
{ "_id": 2, "max": 7, "min": 5 }
{ "_id": 3, "max": 6, "min": 6 }
```
求各个记录的 `max` 和 `min` 的差值。：  
Find the difference between `max` and `min` for each record. :

 
```js
const $ = db.command.aggregate
let res = await db.collection('scores').aggregate()
  .project({
    diff: $.subtract(['$max', '$min'])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "diff": 9 }
{ "_id": 2, "diff": 2 }
{ "_id": 3, "diff": 0 }
```

### trunc

将数字截断为整形。  
Truncate numbers to integers.

      
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.trunc(<number>)
```
参数可以是任意解析为数字的表达式。  
The argument can be any expression that resolves to a number.

 
####  示例代码
#### Sample code
 假设集合 `scores` 有如下记录：  
 Suppose the collection `scores` has the following records:

 
```js
{ "_id": 1, "value": 1.21 }
{ "_id": 2, "value": 3.83 }
{ "_id": 3, "value": -4.94 }
```

```js
const $ = db.command.aggregate
let res = await db.collection('scores').aggregate()
  .project({
    int: $.trunc('$value')
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "value": 1 }
{ "_id": 2, "value": 3 }
{ "_id": 3, "value": -4 }
```

## 数组操作符
## Array operators

### arrayElemAt

返回在指定数组下标的元素。  
Returns the element at the index of the specified array.

      
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.arrayElemAt([<array>, <index>])
```
`<array>` 可以是任意解析为数组的表达式。  
`<array>` can be any expression that resolves to an array.

 `<index>` 可以是任意解析为整形的表达式。如果是正数，`arrayElemAt` 返回在 `index` 位置的元素，如果是负数，`arrayElemAt` 返回从数组尾部算起的 `index` 位置的元素。  
 `<index>` can be any expression that resolves to an integer. If positive, `arrayElemAt` returns the element at `index` position, if negative, `arrayElemAt` returns the element at `index` position from the end of the array.

 
####  示例代码
#### Sample code
 假设集合 `exams` 有如下记录：  
 Suppose the collection `exams` has the following records:

 
```js
{ "_id": 1, "scores": [80, 60, 65, 90] }
{ "_id": 2, "scores": [78] }
{ "_id": 3, "scores": [95, 88, 92] }
```
求各个第一次考试的分数和和最后一次的分数：  
Find the sum of the scores for each first test and the final score:

 
```js
const $ = db.command.aggregate
let res = await db.collection('exams').aggregate()
  .project({
    first: $.arrayElemAt(['$scores', 0]),
    last: $.arrayElemAt(['$scores', -1]),
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "first": 80, "last": 90 }
{ "_id": 2, "first": 78, "last": 78 }
{ "_id": 3, "first": 95, "last": 92 }
```

### arrayToObject

将一个数组转换为对象。  
Convert an array to an object.

     
####  API 说明
#### API Description
 语法可以取两种：  
 There are two syntaxes:

 第一种：传入一个二维数组，第二维的数组长度必须为 2，其第一个值为字段名，第二个值为字段值  
 The first type: pass in a two-dimensional array, the length of the second dimension must be 2, the first value is the field name, and the second value is the field value

 
```js
db.command.aggregate.arrayToObject([
  [<key1>, <value1>],
  [<key2>, <value2>],
  ...
])
```
第二种：传入一个对象数组，各个对象必须包含字段 `k` 和 `v`，分别指定字段名和字段值  
The second: pass in an array of objects, each object must contain the fields `k` and `v`, specifying the field name and field value respectively

 
```js
db.command.aggregate.arrayToObject([
  { "k": <key1>, "v": <value1> },
  { "k": <key2>, "v": <value2> },
  ...
])
```
传入 `arrayToObject` 的参数只要可以解析为上述两种表示法之一即可。  
Arguments passed to `arrayToObject` can be resolved to one of the above two notations.

 
####  示例代码
#### Sample code
 假设集合 `shops` 有如下记录：  
 Suppose the collection `shops` has the following records:

 
```js
{ "_id": 1, "sales": [ ["max", 100], ["min", 50] ] }
{ "_id": 2, "sales": [ ["max", 70], ["min", 60] ] }
{ "_id": 3, "sales": [ { "k": "max", "v": 50 }, { "k": "min", "v": 30 } ] }
```
将数组转换为对象：  
Convert an array to an object:

 
```js
const $ = db.command.aggregate
let res = await db.collection('shops').aggregate()
  .project({
    sales: $.arrayToObject('$sales'),
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "sales": { "max": 100, "min": 50 } }
{ "_id": 2, "sales": { "max": 70, "min": 60 } }
{ "_id": 3, "sales": { "max": 50, "min": 30 } }
```

### concatArrays

将多个数组拼接成一个数组。  
Concatenates multiple arrays into one array.

      
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.concatArrays([ <array1>, <array2>, ... ])
```
参数可以是任意解析为数组的表达式。  
The argument can be any expression that resolves to an array.

 
####  示例代码
#### Sample code
 假设集合 `items` 有如下记录：  
 Suppose the collection `items` has the following records:

 
```js
{ "_id": 1, "fruits": [ "apple" ], "vegetables": [ "carrot" ] }
{ "_id": 2, "fruits": [ "orange", "lemon" ], "vegetables": [ "cabbage" ] }
{ "_id": 3, "fruits": [ "strawberry" ], "vegetables": [ "spinach" ] }
```

```js
const $ = db.command.aggregate
let res = await db.collection('items').aggregate()
  .project({
    list: $.concatArrays(['$fruits', '$vegetables']),
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "list": [ "apple", "carrot" ] }
{ "_id": 2, "list": [ "orange", "lemon", "cabbage" ] }
{ "_id": 3, "list": [ "strawberry", "spinach" ] }
```

### filter

根据给定条件返回满足条件的数组的子集。  
Returns a subset of an array that satisfies the condition based on the given condition.

     
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.filter({
  input: <array>,
  as: <string>,
  cond: <expression>
})
```

|字段	|说明																																																											|
|Fields |Description |
|----	|----																																																											|
|input|一个可以解析为数组的表达式																																																|
|input|An expression that can be parsed as an array|
|as		|可选，用于表示数组各个元素的变量，默认为 this																																						|
|as | optional, a variable used to represent each element of the array, the default is thYes |
|cond	|一个可以解析为布尔值的表达式，用于判断各个元素是否满足条件，各个元素的名字由 as 参数决定（参数名需加 $$ 前缀，如 $$this）|
|cond |An expression that can be parsed as a boolean value to determine whether each element satisfies the condition, the name of each element is determined by the as parameter (the parameter name needs to be prefixed with $$, such as $$this)|

参数可以是任意解析为数组的表达式。  
The argument can be any expression that resolves to an array.

 
####  示例代码
#### Sample code
 假设集合 `fruits` 有如下记录：  
 Suppose the collection `fruits` has the following records:

 
```json
{
  "_id": 1,
  "stock": [
    { "name": "apple", "price": 10 },
    { "name": "orange", "price": 20 }
  ],
}
{
  "_id": 2,
  "stock": [
    { "name": "lemon", "price": 15 },
  ],
}
```

```js
const _ = db.command
const $ = db.command.aggregate
let res = await db.collection('fruits').aggregate()
  .project({
    stock: $.filter({
      input: '$stock',
      as: 'item',
      cond: $.gte(['$$item.price', 15])
    })
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "stock": [ { "name": "orange", "price": 20} ] }
{ "_id": 2, "stock": [ { "name": "lemon", "price": 15 } ] }
```

### in

给定一个值和一个数组，如果值在数组中则返回 `true`，否则返回 `false`。  
Given a value and an array, return `true` if the value is in the array, `false` otherwise.

      
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.in([<value>, <array>])
```
`<value>` 可以是任意表达式。  
`<value>` can be any expression.

 `<array>` 可以是任意解析为数组的表达式。  
 `<array>` can be any expression that resolves to an array.

 
####  示例代码
#### Sample code
 假设集合 `shops` 有如下记录：  
 Suppose the collection `shops` has the following records:

 
```js
{ "_id": 1, "topsellers": ["bread", "ice cream", "butter"] }
{ "_id": 2, "topsellers": ["ice cream", "cheese", "yagurt"] }
{ "_id": 3, "topsellers": ["croissant", "cucumber", "coconut"] }
```
标记销量最高的商品包含 `ice cream` 的记录。  
Mark the record for the highest-selling item containing `ice cream`.

 
```js
const $ = db.command.aggregate
let res = await db.collection('price').aggregate()
  .project({
    included: $.in(['ice cream', '$topsellers'])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "included": true }
{ "_id": 2, "included": true }
{ "_id": 3, "included": false }
```

### indexOfArray

在数组中找出等于给定值的第一个元素的下标，如果找不到则返回 -1。  
Finds the index of the first element in the array that is equal to the given value, or returns -1 if not found.

      
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.indexOfArray([ <array expression>, <search expression>, <start>, <end> ])
```

|字段	|类型		|说明																																						|
|Field |Type |Description |
|----	|----		|----																																						|
|-		|string	|一个可以解析为数组的表达式，如果解析为 null，则 indexOfArray 返回 null					|
|- |string | An expression that resolves to an array, if it resolves to null, indexOfArray returns null |
|-		|string	|对数据各个元素应用的条件匹配表达式																							|
|- |string |Conditional match expression applied to each element of the data |
|-		|integer|可选，用于指定搜索的开始下标，必须是非负整数																		|
|- |integer| optional, used to specify the starting index of the search, must be a non-negative integer |
|-		|integer|可选，用于指定搜索的结束下标，必须是非负整数，指定了 时也应指定 ，否则 默认当做|
|- |integer| is optional, it is used to specify the end index of the search, it must be a non-negative integer, and should also be specified when is specified, otherwise the default is used as |

参数可以是任意解析为数组的表达式。  
The argument can be any expression that resolves to an array.

 
####  示例代码
#### Sample code
 假设集合 `stats` 有如下记录：  
 Suppose the collection `stats` has the following records:

 
```json
{
  "_id": 1,
  "sales": [ 1, 6, 2, 2, 5 ]
}
{
  "_id": 2,
  "sales": [ 4, 2, 1, 5, 2 ]
}
{
  "_id": 3,
  "sales": [ 2, 5, 3, 3, 1 ]
}
```

```js
const $ = db.command.aggregate
let res = await db.collection('stats').aggregate()
  .project({
    index: $.indexOfArray(['$sales', 2, 2])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "index": 2 }
{ "_id": 2, "index": 4 }
{ "_id": 3, "index": -1 }
```

### isArray

判断给定表达式是否是数组，返回布尔值。  
Checks whether the given expression is an array, returning a boolean value.

      
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.isArray(<expression>)
```
参数可以是任意表达式。  
Arguments can be arbitrary expressions.

 
####  示例代码
#### Sample code
 假设集合 `stats` 有如下记录：  
 Suppose the collection `stats` has the following records:

 
```js
{
  "_id": 1,
  "base": 10,
  "sales": [ 1, 6, 2, 2, 5 ]
}
{
  "_id": 2,
  "base": 1,
  "sales": 100
}
```
计算总销量，如果 `sales` 是数字，则求 `sales * base`，如果 `sales` 是数组，则求数组元素之和与 `base` 的乘积。  
Calculates the total sales, taking `sales * base` if `sales` is a number, or the product of the sum of the elements of the array and `base` if `sales` is an array.

 
```js
const $ = db.command.aggregate
let res = await db.collection('stats').aggregate()
  .project({
    sum: $.cond({
      if: $.isArray('$sales'),
      then: $.multiply([$.sum(['$sales']), '$base']),
      else: $.multiply(['$sales', '$base']),
    })
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "sum": 160 }
{ "_id": 2, "sum": 100 }
```

### map

类似 JavaScript Array 上的 `map` 方法，将给定数组的每个元素按给定转换方法转换后得出新的数组。  
Similar to the `map` method on JavaScript Array, converts each element of the given array according to the given conversion method to obtain a new array.

     
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.map({
  input: <expression>,
  as: <string>,
  in: <expression>
})
```

|字段	|说明																																																			|
|Fields |Description |
|----	|----																																																			|
|input|一个可以解析为数组的表达式																																								|
|input|An expression that can be parsed as an array|
|as		|可选，用于表示数组各个元素的变量，默认为 this																														|
|as | optional, a variable used to represent each element of the array, the default is thYes |
|in		|一个可以应用在给定数组的各个元素上的表达式，各个元素的名字由 as 参数决定（参数名需加 $$ 前缀，如 $$this）|
|in |an expression that can be applied to each element of a given array, the name of each element is determined by the as parameter (the parameter name needs to be prefixed with $$, such as $$this)|

####  示例代码
#### Sample code
 假设集合 `stats` 有如下记录：  
 Suppose the collection `stats` has the following records:

 
```js
{
  "_id": 1,
  "sales": [ 1.32, 6.93, 2.48, 2.82, 5.74 ]
}
{
  "_id": 2,
  "sales": [ 2.97, 7.13, 1.58, 6.37, 3.69 ]
}
```
将各个数字截断为整形，然后求和  
truncate individual numbers to integers, then sum


```js
const $ = db.command.aggregate
let res = await db.collection('stats').aggregate()
  .project({
    truncated: $.map({
      input: '$sales',
      as: 'num',
      in: $.trunc('$$num'),
    })
  })
  .project({
    total: $.sum('$truncated')
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "total": 16 }
{ "_id": 2, "total": 19 }
```

### objectToArray

将一个对象转换为数组。方法把对象的每个键值对都变成输出数组的一个元素，元素形如 `{ k: <key>, v: <value> }`。  
Convert an object to an array. The method turns each key-value pair of the object into an element of the output array, with elements of the form `{ k: <key>, v: <value> }`.

     
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.objectToArray(<object>)
```

####  示例代码
#### Sample code
 假设集合 `items` 有如下记录：  
 Suppose the collection `items` has the following records:

 
```js
{ "_id": 1, "attributes": { "color": "red", "price": 150 } }
{ "_id": 2, "attributes": { "color": "blue", "price": 50 } }
{ "_id": 3, "attributes": { "color": "yellow", "price": 10 } }
```

```js
const $ = db.command.aggregate
let res = await db.collection('items').aggregate()
  .project({
    array: $.objectToArray('$attributes')
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "array": [{ "k": "color", "v": "red" }, { "k": "price", "v": 150 }] }
{ "_id": 2, "array": [{ "k": "color", "v": "blue" }, { "k": "price", "v": 50 }] }
{ "_id": 3, "array": [{ "k": "color", "v": "yellow" }, { "k": "price", "v": 10 }] }
```

### range

返回一组生成的序列数字。给定开始值、结束值、非零的步长，`range` 会返回从开始值开始逐步增长、步长为给定步长、但不包括结束值的序列。  
Returns a set of generated sequence numbers. Given a start value, an end value, and a non-zero step size, `range` returns a sequence that starts at the start value and gradually increases with the given step size, but not the end value.

      
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.range([<start>, <end>, <non-zero step>])
```

|字段					|说明																									|
|Fields |Description |
|----					|----																									|
|start				|开始值，一个可以解析为整形的表达式										|
|start |start value, an expression that resolves to an integer |
|end					|结束值，一个可以解析为整形的表达式										|
|end | The end value, an expression that resolves to an integer |
|non-zero step|可选，步长，一个可以解析为非零整形的表达式，默认为 1	|
|non-zero step| optional, step size, an expression that resolves to a non-zero integer, defaults to 1 |

####  示例代码
#### Sample code
 假设集合 `stats` 有如下记录：  
 Suppose the collection `stats` has the following records:

 
```js
{ "_id": 1, "max": 52 }
{ "_id": 2, "max": 38 }
```

```js
const $ = db.command.aggregate
db.collection('stats').aggregate()
  .project({
    points: $.range([0, '$max', 10])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "points": [0, 10, 20, 30, 40, 50] }
{ "_id": 2, "points": [0, 10, 20, 30] }
```

### reduce

类似 JavaScript 的 `reduce` 方法，应用一个表达式于数组各个元素然后归一成一个元素。  
Similar to JavaScript's `reduce` method, which applies an expression to each element of an array and then normalizes it to a single element.

     
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.reduce({
  input: <array>
  initialValue: <expression>,
  in: <expression>
})
```

|字段					|说明																																																				|
|Fields |Description |
|----					|----																																																				|
|input				|输入数组，可以是任意解析为数组的表达式																																			|
|input |input array, which can be any expression that resolves to an array |
|initialValue	|初始值																																																			|
|initialValue |Initial Value |
|in						|用来作用于每个元素的表达式，在 in 中有两个可用变量，value 是表示累计值的变量，this 是表示当前数组元素的变量|
|in |The expression used to act on each element, there are two variables available in in, value is the variable representing the accumulated value, this is the variable representing the current array element|

####  示例代码
#### Sample code
 

**简易字符串拼接**
**Simple String Concatenation**

 假设集合 `player` 有如下记录：  
 Suppose the collection `player` has the following records:

 
```js
{ "_id": 1, "fullname": [ "Stephen", "Curry" ] }
{ "_id": 2, "fullname": [ "Klay", "Thompsom" ] }
```
获取各个球员的全名，并加 `Player:` 前缀：  
Get the full name of each player, prefixed with `Player:`:

 
```js
const $ = db.command.aggregate
let res = await db.collection('player').aggregate()
  .project({
    info: $.reduce({
      input: '$fullname',
      initialValue: 'Player:',
      in: $.concat(['$$value', ' ', '$$this']),
    })
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "info": "Player: Stephen Curry" }
{ "_id": 2, "info": "Player: Klay Thompson" }
```
获取各个球员的全名，不加前缀：  
Get the full name of each player, unprefixed:

 
```js
const $ = db.command.aggregate
let res = await db.collection('player').aggregate()
  .project({
    name: $.reduce({
      input: '$fullname',
      initialValue: '',
      in: $.concat([
        '$$value',
        $.cond({
          if: $.eq(['$$value', '']),
          then: '',
          else: ' ',
        }),
        '$$this',
      ]),
    })
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "name": "Stephen Curry" }
{ "_id": 2, "name": "Klay Thompson" }
```

### reverseArray

返回给定数组的倒序形式。  
Returns the reversed form of the given array.

     
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.reverseArray(<array>)
```
参数可以是任意解析为数组表达式。  
Arguments can be arbitrarily parsed as array expressions.

 
####  示例代码
#### Sample code
 假设集合 `stats` 有如下记录：  
 Suppose the collection `stats` has the following records:

 
```js
{
  "_id": 1,
  "sales": [ 1, 2, 3, 4, 5 ]
}
```
取 `sales` 倒序：  
Take `sales` in reverse order:

 
```js
const $ = db.command.aggregate
let res = await db.collection('stats').aggregate()
  .project({
    reversed: $.reverseArray('$sales'),
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "reversed": [5, 4, 3, 2, 1] }
```

### size

返回数组长度。  
Returns the length of the array.

     
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.size(<array>)
```
`<array>` 可以是任意解析为数组的表达式。  
`<array>` can be any expression that resolves to an array.

 
####  示例代码
#### Sample code
 假设集合 `shops` 有如下记录：  
 Suppose the collection `shops` has the following records:

 
```js
{ "_id": 1, "staff": [ "John", "Middleton", "George" ] }
{ "_id": 2, "staff": [ "Steph", "Jack" ] }
```
计算各个商店的雇员数量：  
Count the number of employees in each store:

 
```js
const $ = db.command.aggregate
let res = await db.collection('shops').aggregate()
  .project({
    totalStaff: $.size('$staff')
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "totalStaff": 3 }
{ "_id": 2, "totalStaff": 2 }
```

### slice

类似 JavaScritp 的 `slice` 方法。返回给定数组的指定子集。  
Similar to JavaScript's `slice` method. Returns the specified subset of the given array.

      
####  API 说明
#### API Description
 语法有两种：  
 There are two syntaxes:

 返回从开头或结尾开始的 `n` 个元素：  
 Return `n` elements from the beginning or end:

 
```js
db.command.aggregate.slice([<array>, <n>])
```
返回从指定位置算作数组开头、再向后或向前的 `n` 个元素：  
Returns `n` elements from the specified position counted as the beginning of the array, backwards or forwards:

 
```js
db.command.aggregate.slice([<array>, <position>, <n>])
```
`<array>` 可以是任意解析为数组的表达式。  
`<array>` can be any expression that resolves to an array.

 `<position>` 可以是任意解析为整形的表达式。如果是正数，则将数组的第 `<position>` 个元素作为数组开始；如果 `<position>` 比数组长度更长，`slice` 返回空数组。如果是负数，则将数组倒数第 `<position>` 个元素作为数组开始；如果 `<position>` 的绝对值大于数组长度，则开始位置即为数组开始位置。  
 `<position>` can be any expression that resolves to an integer. If positive, start the array with the `<position>`-th element of the array; if `<position>` is longer than the array length, `slice` returns an empty array. If it is a negative number, the last `<position>` element of the array is used as the start of the array; if the absolute value of `<position>` is greater than the length of the array, the start position is the start position of the array.

 `<n>` 可以是任意解析为整形的表达式。如果 `<position>` 有提供，则 `<n>` 必须为正整数。如果是正数，`slice` 返回前 `n` 个元素。如果是负数，`slice` 返回后 `n` 个元素。  
 `<n>` can be any expression that resolves to an integer. If `<position>` is provided, `<n>` must be a positive integer. If positive, `slice` returns the first `n` elements. If negative, `slice` returns the last `n` elements.

 
####  示例代码
#### Sample code
 假设集合 `people` 有如下记录：  
 Suppose the collection `people` has the following records:

 
```js
{ "_id": 1, "hobbies": [ "basketball", "football", "tennis", "badminton" ] }
{ "_id": 2, "hobbies": [ "golf", "handball" ] }
{ "_id": 3, "hobbies": [ "table tennis", "swimming", "rowing" ] }
```
统一返回前两个爱好：  
Unity returns the first two hobbies:

 
```js
const $ = db.command.aggregate
let res = await db.collection('fruits').aggregate()
  .project({
    hobbies: $.slice(['$hobbies', 2]),
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "hobbies": [ "basketball", "football" ] }
{ "_id": 2, "hobbies": [ "golf", "handball" ] }
{ "_id": 3, "hobbies": [ "table tennis", "swimming" ] }
```

### zip

把二维数组的第二维数组中的相同序号的元素分别拼装成一个新的数组进而组装成一个新的二维数组。如可将 `[ [ 1, 2, 3 ], [ "a", "b", "c" ] ]` 转换成 `[ [ 1, "a" ], [ 2, "b" ], [ 3, "c" ] ]`。  
The elements of the same serial number in the second-dimensional array of the two-dimensional array are assembled into a new array and then assembled into a new two-dimensional array. For example, `[ [ 1, 2, 3 ], [ "a", "b", "c" ] ]` can be converted to `[ [ 1, "a" ], [ 2, "b" ], [ 3 , "c" ] ]`.

     
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.zip({
  inputs: [<array1>, <array2>, ...],
  useLongestLength: <boolean>,
  defaults: <array>
})
```
`inputs` 是一个二维数组（`inputs` 不可以是字段引用），其中每个元素的表达式（这个可以是字段引用）都可以解析为数组。如果其中任意一个表达式返回 `null`，`<inputs>` 也返回 `null`。如果其中任意一个表达式不是指向一个合法的字段 / 解析为数组 / 解析为 `null`，则返回错误。  
`inputs` is a two-dimensional array (`inputs` cannot be a field reference), where the expression for each element (this can be a field reference) can be resolved as an array. If either of these expressions returns `null`, `<inputs>` also returns `null`. An error is returned if either of the expressions does not point to a valid field / resolves to an array / resolves to `null`.

 `useLongestLength` 决定输出数组的长度是否采用输入数组中的最长数组的长度。默认为 `false`，即输入数组中的最短的数组的长度即是输出数组的各个元素的长度。  
 `useLongestLength` determines whether the length of the output array takes the length of the longest array in the input array. The default is `false`, that is, the length of the shortest array in the input array is the length of each element of the output array.

 `defaults` 是一个数组，用于指定在输入数组长度不一的情况下时采用的数组各元素默认值。指定这个字段则必须指定 `useLongestLength`，否则返回错误。如果 `useLongestLength` 是 `true` 但是 `defaults` 是空或没有指定，则 `zip` 用 `null` 做数组元素的缺省默认值。指定各元素默认值时 `defaults` 数组的长度必须是输入数组最大的长度。  
 `defaults` is an array that specifies the default values for each element of the array to use if the input arrays are of different lengths. If this field is specified, `useLongestLength` must be specified, otherwise an error will be returned. If `useLongestLength` is `true` but `defaults` is empty or not specified, `zip` uses `null` as the default default value for array elements. When specifying default values for each element, the length of the `defaults` array must be the maximum length of the input array.

 
####  示例代码
#### Sample code
 假设集合 `stats` 有如下记录：  
 Suppose the collection `stats` has the following records:

 
```js
{ "_id": 1, "zip1": [1, 2], "zip2": [3, 4], "zip3": [5, 6] ] }
{ "_id": 2, "zip1": [1, 2], "zip2": [3], "zip3": [4, 5, 6] ] }
{ "_id": 3, "zip1": [1, 2], "zip2": [3] ] }
```


**只传 inputs**
**Only transmit inputs**

 
```js
const $ = db.command.aggregate
let res = await db.collection('items').aggregate()
  .project({
    zip: $.zip({
      inputs: [
        '$zip1', // 字段引用
        '$zip2',
        '$zip3',
      ],
    })
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "zip": [ [1, 3, 5], [2, 4, 6] ] }
{ "_id": 2, "zip": [ [1, 3, 4] ] }
{ "_id": 3, "zip": null }
```


**设置 useLongestLength**
**set useLongestLength**

 如果设 `useLongestLength` 为 `true`：  
 If `useLongestLength` is set to `true`:

 
```js
const $ = db.command.aggregate
let res = await db.collection('items').aggregate()
  .project({
    zip: $.zip({
      inputs: [
        '$zip1', // 字段引用
        '$zip2',
        '$zip3',
      ],
      useLongestLength: true,
    })
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "zip": [ [1, 3, 5], [2, 4, 6] ] }
{ "_id": 2, "zip": [ [1, 3, 4], [2, null, 5], [null, null, 6] ] }
{ "_id": 3, "zip": null }
```


**设置 defaults**
**set defaults**

 
```js
const $ = db.command.aggregate
let res = await db.collection('items').aggregate()
  .project({
    zip: $.zip({
      inputs: [
        '$zip1', // 字段引用
        '$zip2',
        '$zip3',
      ],
      useLongestLength: true,
      defaults: [-300, -200, -100],
    })
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "zip": [ [1, 3, 5], [2, 4, 6] ] }
{ "_id": 2, "zip": [ [1, 3, 4], [2, -200, 5], [-300, -200, 6] ] }
{ "_id": 3, "zip": null }
```

## 布尔操作符
## boolean operators

### and

给定多个表达式，`and` 仅在所有表达式都返回 `true` 时返回 `true`，否则返回 `false`。  
Given multiple expressions, `and` returns `true` only if all expressions return `true`, and `false` otherwise.

      
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.and([<expression1>, <expression2>, ...])
```
如果表达式返回 `false`、`null`、`0`、或 `undefined`，表达式会解析为 `false`，否则对其他返回值都认为是 `true`。  
If the expression returns `false`, `null`, `0`, or `undefined`, the expression resolves to `false`, otherwise it is considered `true` for other return values.

 
####  示例代码
#### Sample code
 假设集合 `price` 有如下记录：  
 Suppose the collection `price` has the following records:

 
```js
{ "_id": 1, "min": 10, "max": 100 }
{ "_id": 2, "min": 60, "max": 80 }
{ "_id": 3, "min": 30, "max": 50 }
```
求 `min` 大于等于 30 且 `max` 小于等于 80 的记录。  
Find records where `min` is greater than or equal to 30 and `max` is less than or equal to 80.

 
```js
const $ = db.command.aggregate
let res = await db.collection('price').aggregate()
  .project({
    fullfilled: $.and([$.gte(['$min', 30]), $.lte(['$max', 80])])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "fullfilled": false }
{ "_id": 2, "fullfilled": true }
{ "_id": 3, "fullfilled": true }
```

### not

给定一个表达式，如果表达式返回 `true`，则 `not` 返回 `false`，否则返回 `true`。注意表达式不能为逻辑表达式（`and`、`or`、`nor`、`not`）。  
Given an expression, `not` returns `false` if the expression returns `true`, and `true` otherwise. Note that expressions cannot be logical expressions (`and`, `or`, `nor`, `not`).

      
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.not(<expression>)
```
如果表达式返回 `false`、`null`、`0`、或 `undefined`，表达式会解析为 `false`，否则对其他返回值都认为是 `true`。  
If the expression returns `false`, `null`, `0`, or `undefined`, the expression resolves to `false`, otherwise it is considered `true` for other return values.

 
####  示例代码
#### Sample code
 假设集合 `price` 有如下记录：  
 Suppose the collection `price` has the following records:

 
```js
{ "_id": 1, "min": 10, "max": 100 }
{ "_id": 2, "min": 60, "max": 80 }
{ "_id": 3, "min": 30, "max": 50 }
```
求 `min` 不大于 40 的记录。  
Find records whose `min` is not greater than 40.

 
```js
const $ = db.command.aggregate
let res = await db.collection('price').aggregate()
  .project({
    fullfilled: $.not($.gt(['$min', 40]))
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "fullfilled": true }
{ "_id": 2, "fullfilled": false }
{ "_id": 3, "fullfilled": true }
```

### or

给定多个表达式，如果任意一个表达式返回 `true`，则 `or` 返回 `true`，否则返回 `false`。  
Given multiple expressions, `or` returns `true` if any of the expressions returns `true`, otherwise it returns `false`.

      
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.or([<expression1>, <expression2>, ...])
```
如果表达式返回 `false`、`null`、`0`、或 `undefined`，表达式会解析为 `false`，否则对其他返回值都认为是 `true`。  
If the expression returns `false`, `null`, `0`, or `undefined`, the expression resolves to `false`, otherwise it is considered `true` for other return values.

 
####  示例代码
#### Sample code
 假设集合 `price` 有如下记录：  
 Suppose the collection `price` has the following records:

 
```js
{ "_id": 1, "min": 10, "max": 100 }
{ "_id": 2, "min": 50, "max": 60 }
{ "_id": 3, "min": 30, "max": 50 }
```
求 `min` 小于 40 或 `max` 大于 60 的记录。  
Find records where `min` is less than 40 or `max` is greater than 60.

 
```js
const $ = db.command.aggregate
let res = await db.collection('price').aggregate()
  .project({
    fullfilled: $.or([$.lt(['$min', 40]), $.gt(['$max', 60])])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "fullfilled": true }
{ "_id": 2, "fullfilled": false }
{ "_id": 3, "fullfilled": true }
```

## 比较操作符
## Comparison operator

### cmp

给定两个值，返回其比较值：  
Given two values, return their comparison value:

      
####  API 说明
#### API Description
 如果第一个值小于第二个值，返回 -1
 If the first value is less than the second value, return -1
如果第一个值大于第二个值，返回 1
Returns 1 if the first value is greater than the second value
如果两个值相等，返回 0  
Returns 0 if the two values are equal

 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.cmp([<expression1>, <expression2>])
```

####  示例代码
#### Sample code
 假设集合 `price` 有如下记录：  
 Suppose the collection `price` has the following records:

 
```js
{ "_id": 1, "shop1": 10, "shop2": 100 }
{ "_id": 2, "shop1": 80, "shop2": 20 }
{ "_id": 3, "shop1": 50, "shop2": 50 }
```
求 `shop1` 和 `shop2` 的各个物品的价格对比。  
Find the price comparison of each item in `shop1` and `shop2`.

 
```js
const $ = db.command.aggregate
let res = await db.collection('price').aggregate()
  .project({
    compare: $.cmp(['$shop1', '$shop2']))
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "compare": -1 }
{ "_id": 2, "compare": 1 }
{ "_id": 3, "compare": 0 }
```

### eq

匹配两个值，如果相等则返回 `true`，否则返回 `false`。  
Matches two values and returns `true` if they are equal, `false` otherwise.

      
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.eq([<value1>, <value2>])
```

####  示例代码
#### Sample code
 假设集合 `price` 有如下记录：  
 Suppose the collection `price` has the following records:

 
```js
{ "_id": 1, "value": 10 }
{ "_id": 2, "value": 80 }
{ "_id": 3, "value": 50 }
```
求 `value` 等于 50 的记录。  
Find records with `value` equal to 50.

 
```js
const $ = db.command.aggregate
let res = await db.collection('price').aggregate()
  .project({
    matched: $.eq(['$value', 50])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "matched": false }
{ "_id": 2, "matched": false }
{ "_id": 3, "matched": true }
```

### gt

匹配两个值，如果前者大于后者则返回 `true`，否则返回 `false`。  
Matches two values and returns `true` if the former is greater than the latter, `false` otherwise.

      
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.gt([<value1>, <value2>])
```

####  示例代码
#### Sample code
 假设集合 `price` 有如下记录：  
 Suppose the collection `price` has the following records:

 
```js
{ "_id": 1, "value": 10 }
{ "_id": 2, "value": 80 }
{ "_id": 3, "value": 50 }
```
判断 `value` 是否大于 50。  
Check if `value` is greater than 50.

 
```js
const $ = db.command.aggregate
db.collection('price').aggregate()
  .project({
    matched: $.gt(['$value', 50])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "matched": false }
{ "_id": 2, "matched": true }
{ "_id": 3, "matched": false }
```

### gte

匹配两个值，如果前者大于或等于后者则返回 `true`，否则返回 `false`。  
Matches two values and returns `true` if the former is greater than or equal to the latter, `false` otherwise.

      
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.gte([<value1>, <value2>])
```

####  示例代码
#### Sample code
 假设集合 `price` 有如下记录：  
 Suppose the collection `price` has the following records:

 
```js
{ "_id": 1, "value": 10 }
{ "_id": 2, "value": 80 }
{ "_id": 3, "value": 50 }
```
判断 `value` 是否大于或等于 50。  
Check if `value` is greater than or equal to 50.

 
```js
const $ = db.command.aggregate
let res = await b.collection('price').aggregate()
  .project({
    matched: $.gte(['$value', 50])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "matched": false }
{ "_id": 2, "matched": true }
{ "_id": 3, "matched": true }
```

### lt

匹配两个值，如果前者小于后者则返回 `true`，否则返回 `false`。  
Matches two values and returns `true` if the former is less than the latter, `false` otherwise.

      
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.lt([<value1>, <value2>])
```

####  示例代码
#### Sample code
 假设集合 `price` 有如下记录：  
 Suppose the collection `price` has the following records:

 
```
{ "_id": 1, "value": 10 }
{ "_id": 2, "value": 80 }
{ "_id": 3, "value": 50 }
```
判断 `value` 是否小于 50。  
Check if `value` is less than 50.

 
```js
const $ = db.command.aggregate
let res = await db.collection('price').aggregate()
  .project({
    matched: $.lt(['$value', 50])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "matched": true }
{ "_id": 2, "matched": false }
{ "_id": 3, "matched": false }
```

### lte

匹配两个值，如果前者小于或等于后者则返回 `true`，否则返回 `false`。  
Matches two values and returns `true` if the former is less than or equal to the latter, `false` otherwise.

      
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.lte([<value1>, <value2>])
```

####  示例代码
#### Sample code
 假设集合 `price` 有如下记录：  
 Suppose the collection `price` has the following records:

 
```js
{ "_id": 1, "value": 10 }
{ "_id": 2, "value": 80 }
{ "_id": 3, "value": 50 }
```
判断 `value` 是否小于 50。  
Check if `value` is less than 50.

 
```js
const $ = db.command.aggregate
let res = await db.collection('price').aggregate()
  .project({
    matched: $.lte(['$value', 50])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "matched": true }
{ "_id": 2, "matched": false }
{ "_id": 3, "matched": true }
```

### neq

匹配两个值，如果不相等则返回 `true`，否则返回 `false`。  
Matches two values, returning `true` if they are not equal, `false` otherwise.

      
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.neq([<value1>, <value2>])
```

####  示例代码
#### Sample code
 假设集合 `price` 有如下记录：  
 Suppose the collection `price` has the following records:

 
```js
{ "_id": 1, "value": 10 }
{ "_id": 2, "value": 80 }
{ "_id": 3, "value": 50 }
```
求 `value` 不等于 50 的记录。  
Find records where `value` is not equal to 50.

 
```js
const $ = db.command.aggregate
let res = await db.collection('price').aggregate()
  .project({
    matched: $.neq(['$value', 50])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "matched": true }
{ "_id": 2, "matched": true }
{ "_id": 3, "matched": false }
```

## 条件操作符
## Conditional operator

### cond

计算布尔表达式，返回指定的两个值其中之一。  
Evaluates a Boolean expression, returning one of the two specified values.

     
####  API 说明
#### API Description
 `cond` 的使用形式如下：  
 `cond` is used as follows:

 
```js
cond({ if: <布尔表达式>, then: <真值>, else: <假值>  })
```
或者：  
or:  

 
```js
cond([ <布尔表达式>, <真值>, <假值> ])
```
两种形式中，三个参数（`if`、`then`、`else`）都是必须的。  
In both forms, the three arguments (`if`, `then`, `else`) are required.

 如果布尔表达式为真，那么 `$cond` 将会返回 `<真值>`，否则会返回 `<假值>`  
 `$cond` will return `<true value>` if the boolean expression is true, otherwise it will return `<false value>`

 
####  示例代码
#### Sample code
 假设集合 `items` 的记录如下：  
 Suppose the collection `items` records as follows:

 
```js
{ "_id": "0", "name": "item-a", "amount": 100 }
{ "_id": "1", "name": "item-b", "amount": 200 }
{ "_id": "2", "name": "item-c", "amount": 300 }
```
我们可以使用 `cond`，根据 `amount` 字段，来生成新的字段 `discount`：  
We can use `cond` to generate a new field `discount` based on the `amount` field:

 
```js
const $ = db.command.aggregate
let res = await db.collection('items').aggregate()
  .project({
    name: 1,
    discount: $.cond({
        if: $.gte(['$amount', 200]),
        then: 0.7,
        else: 0.9
    })
  })
  .end()
```
输出如下：  
The output is as follows:

 
```js
{ "_id": "0", "name": "item-a", "discount": 0.9 }
{ "_id": "1", "name": "item-b", "discount": 0.7 }
{ "_id": "2", "name": "item-c", "discount": 0.7 }
```

### ifNull

计算给定的表达式，如果表达式结果为 null、undefined 或者不存在，那么返回一个替代值；否则返回原值。  
Evaluates the given expression and returns an alternate value if the expression result is null, undefined, or does not exist; otherwise, returns the original value.

      
####  API 说明
#### API Description
 `ifNull` 的使用形式如下：  
 `ifNull` is used as follows:

 
```js
ifNull([ <表达式>, <替代值> ])
```

####  示例代码
#### Sample code
 假设集合 `items` 的记录如下：  
 Suppose the collection `items` records as follows:

 
```js
{ "_id": "0", "name": "A", "description": "这是商品A" }
{ "_id": "1", "name": "B", "description": null }
{ "_id": "2", "name": "C" }
```
我们可以使用 `ifNull`，对不存在 `desc` 字段的文档，或者 `desc` 字段为 `null` 的文档，补充一个替代值。  
We can use `ifNull` to add an alternative value for documents where the `desc` field does not exist, or for which the `desc` field is `null`.

 
```js
const $ = db.command.aggregate
let res = await db.collection('items').aggregate()
  .project({
    _id: 0,
    name: 1,
    description: $.ifNull(['$description', '商品描述空缺'])
  })
  .end()
```
输出如下：  
The output is as follows:

 
```js
{ "name": "A", "description": "这是商品A" }
{ "name": "B", "description": "商品描述空缺" }
{ "name": "C", "description": "商品描述空缺" }
```

### switch

根据给定的 `switch-case-default` 计算返回值、  
Calculate the return value according to the given `switch-case-default`,

     
####  API 说明
#### API Description
 `switch` 的使用形式如下：  
 `switch` is used as follows:

 
```js
switch({
    branches: [
        case: <表达式>, then: <表达式>,
        case: <表达式>, then: <表达式>,
        ...
    ],
    default: <表达式>
})
```

####  示例代码
#### Sample code
 假设集合 `items` 的记录如下：  
 Suppose the collection `items` records as follows:

 
```js
{ "_id": "0", "name": "item-a", "amount": 100 }
{ "_id": "1", "name": "item-b", "amount": 200 }
{ "_id": "2", "name": "item-c", "amount": 300 }
```
我们可以使用 `switch`，根据 `amount` 字段，来生成新的字段 `discount`：  
We can use `switch` to generate a new field `discount` based on the `amount` field:

 
```js
const $ = db.command.aggregate
let res = await db.collection('items').aggregate()
  .project({
    name: 1,
    discount: $.switch({
        branches: [
            { case: $.gt(['$amount', 250]), then: 0.8 },
            { case: $.gt(['$amount', 150]), then: 0.9 }
        ],
        default: 1
    })
  })
  .end()
```
输出如下：  
The output is as follows:

 
```js
{ "_id": "0", "name": "item-a", "discount": 1 }
{ "_id": "1", "name": "item-b", "discount": 0.9 }
{ "_id": "2", "name": "item-c", "discount": 0.8 }
```

## 日期操作符
## date operator

**注意**
**Notice**

- 以下日期操作符中`timezone`均支持以下几种形式
- `timezone` in the following date operators supports the following forms

```js
timezone: "Asia/Shanghai" // Asia/Shanghai时区
timezone: "+08" // utc+8时区
timezone: "+08:30" // 时区偏移8小时30分
timezone: "+0830" // 时区偏移8小时30分，同上
```

### dateFromParts

给定日期的相关信息，构建并返回一个日期对象。  
Given information about a date, constructs and returns a date object.
     
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.dateFromParts({
    year: <year>,
    month: <month>,
    day: <day>,
    hour: <hour>,
    minute: <minute>,
    second: <second>,
    millisecond: <ms>,
    timezone: <tzExpression>
})
```
你也可以使用 ISO 8601 的标准：  
You can also use the ISO 8601 standard:

 
```js
db.command.aggregate.dateFromParts({
    isoWeekYear: <year>,
    isoWeek: <week>,
    isoDayOfWeek: <day>,
    hour: <hour>,
    minute: <minute>,
    second: <second>,
    millisecond: <ms>,
    timezone: <tzExpression>
})
```

####  示例代码
#### Sample code
 
```js
const $ = db.command.aggregate
let res = await db
  .collection('dates')
  .aggregate()
  .project({
    _id: 0,
    date: $.dateFromParts({
        year: 2017,
        month: 2,
        day: 8,
        hour: 12,
        timezone: 'America/New_York'
    }),
  })
  .end()
```
输出如下：  
The output is as follows:

 
```js
{
    "date": ISODate("2017-02-08T17:00:00.000Z")
}
```

### dateFromString

将一个日期/时间字符串转换为日期对象  
Convert a date/time string to a date object

####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
db.command.aggregate.dateFromString({
    dateString: <dateStringExpression>,
    timezone: <tzExpression>
})
```

####  示例代码
#### Sample code
 
```js
const $ = db.command.aggregate
let res = await db
  .collection('dates')
  .aggregate()
  .project({
    _id: 0,
    date: $.dateFromString({
        dateString: "2019-05-14T09:38:51.686Z"
    })
  })
  .end()
```
输出如下：  
The output is as follows:

 
```js
{
    "date": ISODate("2019-05-14T09:38:51.686Z")
}
```

### dateToString

根据指定的表达式将日期对象格式化为符合要求的字符串。  
Formats a date object as a string according to the specified expression.

####  API 说明
#### API Description
 `dateToString` 的调用形式如下：  
 The call form of `dateToString` is as follows:

 
```js
db.command.aggregate.dateToString({
  date: <日期表达式>,
  format: <格式化表达式>,
  timezone: <时区表达式>,
  onNull: <空值表达式>
})
```
下面是四种表达式的详细说明：  
The following is a detailed description of the four expressions:

|名称					|描述																																																																																																											|
|Name |Description |
|----					|----																																																																																																											|
|日期表达式		|必选。指定字段值应该是能转化为字符串的日期。																																																																																							|
|Date Expression |Required. Specifies that the field value should be a date that can be converted to a string. |
|格式化表达式	|可选。它可以是任何包含“格式说明符”的有效字符串。																																																																																				|
|Formatting Expression |Optional. It can be any valid string containing a "format specifier". |
|时区表达式		|可选。指明运算结果的时区。它可以解析格式为 [UTC Offset](https://en.wikipedia.org/wiki/List_of_UTC_time_offsets) 或者 [Olson Timezone Identifier](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) 的字符串。|
|Timezone expression |Optional. Specifies the time zone for the result of the operation. It can parse strings in the format [UTC Offset](https://en.wikipedia.org/wiki/List_of_UTC_time_offsets) or [Olson Timezone Identifier](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). |
|空值表达式		|可选。当 <日期表达式> 返回空或者不存在的时候，会返回此表达式指明的值。																																																																										|
|null expression |optional. When <date_expression> returns null or does not exist, the value specified by this expression will be returned. |

下面是格式说明符的详细说明：  
The following is a detailed description of the format specifiers:

|说明符	|描述															|合法值			|
|specifier |description |legal values |
|----		|----															|----				|
|%d			|月份的日期（2位数，0填充）				|01 - 31		|
|%d|Day of the month (2 digits, 0-padded) |01 - 31|
|%G			|ISO 8601 格式的年份							|0000 - 9999|
|%G |Year in ISO 8601 format |0000 - 9999|
|%H			|小时（2位数，0填充，24小时制）		|00 - 23		|
|%H|hour (2 digits, 0-padded, 24-hour clock) |00 - 23 |
|%j			|一年中的一天（3位数，0填充）			|001 - 366	|
|%j |Day of the year (3 digits, 0-padded) |001 - 366 |
|%L			|毫秒（3位数，0填充）							|000 - 999	|
|%L|milliseconds (3 digits, 0-padded) |000 - 999|
|%m			|月份（2位数，0填充）							|01 - 12		|
|%m |month (2 digits, 0-padded) |01 - 12 |
|%M			|分钟（2位数，0填充）							|00 - 59		|
|%M |minutes (2 digits, 0-padded) |00 - 59 |
|%S			|秒（2位数，0填充）								|00 - 60		|
|%S|Seconds (2 digits, padded with 0s) |00 - 60 |
|%w			|星期几														|1 - 7			|
|%w |Day of the week |1 - 7 |
|%u			|ISO 8601 格式的星期几						|1 - 7			|
|%u |Day of the week in ISO 8601 format |1 - 7 |
|%U			|一年中的一周（2位数，0填充）			|00 - 53		|
|%U|week of year (2 digits, 0-padded) |00 - 53|
|%V			|ISO 8601 格式的一年中的一周			|1 - 53			|
|%V |week of year in ISO 8601 format |1 - 53 |
|%Y			|年份（4位数，0填充）							|0000 - 9999|
|%Y|Year (4 digits, 0-padded) |0000 - 9999|
|%z			|与 UTC 的时区偏移量							|+/-[hh][mm]|
|%z |Timezone offset from UTC |+/-[hh][mm]|
|%Z			|以分钟为单位，与 UTC 的时区偏移量|+/-mmm			|
|%Z |timezone offset from UTC in minutes |+/-mmm|
|%%			|百分号作为字符										|%					|
|%%|Percent sign as character |%|

####  示例代码
#### Sample code
 假设集合 `students` 有如下记录：  
 Suppose the collection `students` has the following records:

 
```js
{ "date": "1999-12-11T16:00:00.000Z", "firstName": "Yuanxin", "lastName": "Dong" }
{ "date": "1998-11-10T16:00:00.000Z", "firstName": "Weijia", "lastName": "Wang" }
{ "date": "1997-10-09T16:00:00.000Z", "firstName": "Chengxi", "lastName": "Li" }
```


**格式化日期**
**Format Date**

 下面是将 `date` 字段的值，格式化成形如 `年份-月份-日期` 的字符串：  
 The following is the value of the `date` field, formatted as a string like `year-month-date`:

 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .project({
    _id: 0,
    formatDate: $.dateToString({
      date: '$date',
      format: '%Y-%m-%d'
    })
  })
  .end()
```
返回的结果如下：  
The results returned are as follows:

 
```js
{ "formatDate": "1999-12-11" }
{ "formatDate": "1998-11-10" }
{ "formatDate": "1997-10-09" }
```


**时区时间**
**Time zone time**

 下面是将 `date` 字段值格式化为上海时区时间的例子：  
 The following is an example of formatting a `date` field value to Shanghai time zone time:

 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .project({
    _id: 0,
    formatDate: $.dateToString({
      date: '$date',
      format: '%H:%M:%S',
      timezone: 'Asia/Shanghai'
    })
  })
  .end()
```
返回的结果如下：  
The results returned are as follows:

 
```js
{ "formatDate": "00:00:00" }
{ "formatDate": "00:00:00" }
{ "formatDate": "00:00:00" }
```


**缺失情况的默认值**
**Default value for missing cases**

 当指定的 `<日期表达式>` 返回空或者不存在的时候，可以设置缺失情况下的默认值：  
 When the specified `<date_expression>` returns empty or does not exist, you can set the default value in the absence of:

 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .project({
    _id: 0,
    formatDate: $.dateToString({
      date: '$empty',
      onNull: 'null'
    })
  })
  .end()
```
返回的结果如下：  
The results returned are as follows:

 
```js
{ "formatDate": "null" }
{ "formatDate": "null" }
{ "formatDate": "null" }
```

### dayOfMonth

返回日期字段对应的天数（一个月中的哪一天），是一个介于 1 至 31 之间的数字。  
Returns the number of days (day of the month) corresponding to the date field, as a number between 1 and 31.

      
####  API 说明
#### API Description

该接口有以下两种用法，语法如下：  
The interface has the following two usages, the syntax is as follows:

 
```js
db.command.aggregate.dayOfMonth(<日期字段>)

db.command.aggregate.dayOfMonth({date:<日期字段>,timezone:<时区>})
```

####  示例代码
#### Sample code
 假设集合 `dates` 有以下文档：  
 Suppose the collection `dates` has the following documents:

 
```js
{
    "_id": 1,
    "date": ISODate("2019-05-14T09:38:51.686Z")
}
```
我们使用 `dayOfMonth()` 对 `date` 字段进行投影，获取对应的日期：  
We use `dayOfMonth()` to project the `date` field to get the corresponding date:

 
```js
const $ = db.command.aggregate
let res = await db
  .collection('dates')
  .aggregate()
  .project({
    _id: 0,
    dayOfMonth: $.dayOfMonth('$date')
  })
  .end()
```
输出如下：  
The output is as follows:

 
```js
{
    "dayOfMonth": 14
}
```

### dayOfWeek

返回日期字段对应的天数（一周中的第几天），是一个介于 1（周日）到 7（周六）之间的整数。  
Returns the number of days (day of the week) corresponding to the date field, as an integer between 1 (Sunday) and 7 (Saturday).

      
####  API 说明
#### API Description

**注意：周日是每周的第 1 天**  
**NOTE: Sunday is the 1st day of the week**

该接口有以下两种用法，语法如下：  
The interface has the following two usages, the syntax is as follows:
 
```js
db.command.aggregate.dayOfWeek(<日期字段>)

db.command.aggregate.dayOfWeek({date:<日期字段>,timezone:<时区>})
``` 

####  示例代码
#### Sample code
 假设集合 `dates` 有以下文档：  
 Suppose the collection `dates` has the following documents:

 
```js
{
    "_id": 1,
    "date": ISODate("2019-05-14T09:38:51.686Z")
}
```
我们使用 `dayOfWeek()` 对 `date` 字段进行投影，获取对应的天数（一周中的第几天）：  
We use `dayOfWeek()` to project the `date` field to get the corresponding day (day of the week):

 
```js
const $ = db.command.aggregate
let res = await db
  .collection('dates')
  .aggregate()
  .project({
    _id: 0,
    dayOfWeek: $.dayOfWeek('$date')
  })
  .end()
```
输出如下：  
The output is as follows:

 
```js
{
    "dayOfWeek": 3
}
```

### dayOfYear

返回日期字段对应的天数（一年中的第几天），是一个介于 1 到 366 之间的整数。  
Returns the number of days (day of the year) corresponding to the date field, as an integer between 1 and 366.

      
####  API 说明
#### API Description

该接口有以下两种用法，语法如下：  
The interface has the following two usages, the syntax is as follows:
  
```js
db.command.aggregate.dayOfYear(<日期字段>)

db.command.aggregate.dayOfYear({date:<日期字段>,timezone:<时区>})
```

####  示例代码
#### Sample code
 假设集合 `dates` 有以下文档：  
 Suppose the collection `dates` has the following documents:

 
```js
{
    "_id": 1,
    "date": ISODate("2019-05-14T09:38:51.686Z")
}
```
我们使用 `dayOfYear()` 对 `date` 字段进行投影，获取对应的天数（一年中的第几天）：  
We use `dayOfYear()` to project the `date` field to get the corresponding number of days (day of the year):

 
```js
const $ = db.command.aggregate
let res = await db
  .collection('dates')
  .aggregate()
  .project({
    _id: 0,
    dayOfYear: $.dayOfYear('$date')
  })
  .end()
```
输出如下：  
The output is as follows:

 
```js
{
    "dayOfYear": 134
}
```

### hour

返回日期字段对应的小时数，是一个介于 0 到 23 之间的整数。  
Returns the hour corresponding to the date field, as an integer between 0 and 23.

      
####  API 说明
#### API Description

该接口有以下两种用法，语法如下：  
The interface has the following two usages, the syntax is as follows:
  
```js
db.command.aggregate.hour(<日期字段>)

db.command.aggregate.hour({date:<日期字段>,timezone:<时区>})
```

####  示例代码
#### Sample code
 假设集合 `dates` 有以下文档：  
 Suppose the collection `dates` has the following documents:

 
```js
{
    "_id": 1,
    "date": ISODate("2019-05-14T09:38:51.686Z")
}
```
我们使用 `hour()` 对 `date` 字段进行投影，获取对应的小时数：  
We use `hour()` to project the `date` field to get the corresponding hour:

 
```js
const $ = db.command.aggregate
let res = await db
  .collection('dates')
  .aggregate()
  .project({
    _id: 0,
    hour: $.hour('$date')
  })
  .end()
```
输出如下：  
The output is as follows:

 
```js
{
    "hour": 9
}
```

### isoDayOfWeek

返回日期字段对应的 ISO 8601 标准的天数（一周中的第几天），是一个介于 1（周一）到 7（周日）之间的整数。  
Returns the ISO 8601 standard day number (day of the week) for the date field, as an integer between 1 (Monday) and 7 (Sunday).

####  API 说明
#### API Description

该接口有以下两种用法，语法如下：  
The interface has the following two usages, the syntax is as follows:
  
```js
db.command.aggregate.isoDayOfWeek(<日期字段>)

db.command.aggregate.isoDayOfWeek({date:<日期字段>,timezone:<时区>})
```

####  示例代码
#### Sample code

假设集合 `dates` 有以下文档：
Suppose the collection `dates` has the following documents:
 
```js
{
    "_id": 1,
    "date": ISODate("2019-05-14T09:38:51.686Z")
}
```
我们使用 `isoDayOfWeek()` 对 `date` 字段进行投影，获取对应的 ISO 8601 标准的天数（一周中的第几天）：  
We use `isoDayOfWeek()` to project the `date` field to get the corresponding ISO 8601 standard number of days (day of the week):

 
```js
const $ = db.command.aggregate
let res = await db
  .collection('dates')
  .aggregate()
  .project({
    _id: 0,
    isoDayOfWeek: $.isoDayOfWeek('$date')
  })
  .end()
```

输出如下：
The output is as follows:

```js
{
    "isoDayOfWeek": 2
}
```

### isoWeek

返回日期字段对应的 ISO 8601 标准的周数（一年中的第几周），是一个介于 1 到 53 之间的整数。  
Returns the ISO 8601 standard week number (week of the year) for the date field, as an integer between 1 and 53.

      
####  API 说明
#### API Description

根据 ISO 8601 标准，周一到周日视为一周，本年度第一个周四所在的那周，视为本年度的第 1 周。  
According to the ISO 8601 standard, Monday to Sunday are regarded as a week, and the week on which the first Thursday of the current year is located is regarded as the first week of the current year.

例如：2016 年 1 月 7 日是那年的第一个周四，那么 2016.01.04（周一）到 2016.01.10（周日） 即为第 1 周。同理，2016 年 1 月 1 日的周数为 53。  
For example: January 7, 2016 is the first Thursday of that year, then 2016.01.04 (Monday) to 2016.01.10 (Sunday) is week 1. Similarly, the week number for January 1, 2016 is 53.

该接口有以下两种用法，语法如下：  
The interface has the following two usages, the syntax is as follows:
  
```js
db.command.aggregate.isoWeek(<日期字段>)

db.command.aggregate.isoWeek({date:<日期字段>,timezone:<时区>})
```

####  示例代码
#### Sample code

假设集合 `dates` 有以下文档：  
Suppose the collection `dates` has the following documents:
 
```js
{
    "_id": 1,
    "date": ISODate("2019-05-14T09:38:51.686Z")
}
```

我们使用 `isoWeek()` 对 `date` 字段进行投影，获取对应的 ISO 8601 标准的周数（一年中的第几周）：  
We use `isoWeek()` to project the `date` field to get the corresponding ISO 8601 week number (week of the year):

 
```js
const $ = db.command.aggregate
let res = await db
  .collection('dates')
  .aggregate()
  .project({
    _id: 0,
    isoWeek: $.isoWeek('$date')
  })
  .end()
```

输出如下：  
The output is as follows:

```js
{
    "isoWeek": 20
}
```

### isoWeekYear

返回日期字段对应的 ISO 8601 标准的天数（一年中的第几天）。  
Returns the ISO 8601 standard number of days (day of the year) for a date field.
      
####  API 说明
#### API Description

此处的“年”以第一周的周一为开始，以最后一周的周日为结束。  
The "year" here starts on the Monday of the first week and ends on the Sunday of the last week.

该接口有以下两种用法，语法如下：  
The interface has the following two usages, the syntax is as follows:
  
```js
db.command.aggregate.isoWeekYear(<日期字段>)

db.command.aggregate.isoWeekYear({date:<日期字段>,timezone:<时区>})
```

####  示例代码
#### Sample code

假设集合 `dates` 有以下文档：  
Suppose the collection `dates` has the following documents:
 
```js
{
    "_id": 1,
    "date": ISODate("2019-05-14T09:38:51.686Z")
}
```

我们使用 `isoWeekYear()` 对 `date` 字段进行投影，获取对应的 ISO 8601 标准的天数（一年中的第几天）：  
We use `isoWeekYear()` to project the `date` field to get the corresponding ISO 8601 standard number of days (day of the year):
 
```js
const $ = db.command.aggregate
let res = await db
  .collection('dates')
  .aggregate()
  .project({
    _id: 0,
    isoWeekYear: $.isoWeekYear('$date')
  })
  .end()
```

输出如下：  
The output is as follows:

```js
{
    "isoWeekYear": 2019
}
```

### millisecond

返回日期字段对应的毫秒数，是一个介于 0 到 999 之间的整数。  
Returns the number of milliseconds corresponding to the date field, as an integer between 0 and 999.

####  API 说明
#### API Description

该接口有以下两种用法，语法如下：  
The interface has the following two usages, the syntax is as follows:
  
```js
db.command.aggregate.millisecond(<日期字段>)

db.command.aggregate.millisecond({date:<日期字段>,timezone:<时区>})
```

####  示例代码
#### Sample code

假设集合 `dates` 有以下文档：
Suppose the collection `dates` has the following documents:
 
```js
{
    "_id": 1,
    "date": ISODate("2019-05-14T09:38:51.686Z")
}
```

我们使用 `millisecond()` 对 `date` 字段进行投影，获取对应的毫秒数：  
We use `millisecond()` to project the `date` field to get the corresponding milliseconds:

```js
const $ = db.command.aggregate
let res = await db
  .collection('dates')
  .aggregate()
  .project({
    _id: 0,
    millisecond: $.millisecond('$date'),
  })
  .end()
```

输出如下：  
The output is as follows:

```js
{
    "millisecond": 686
}
```

### minute

返回日期字段对应的分钟数，是一个介于 0 到 59 之间的整数。  
Returns the number of minutes corresponding to the date field, as an integer between 0 and 59.

####  API 说明
#### API Description

该接口有以下两种用法，语法如下：  
The interface has the following two usages, the syntax is as follows:
  
```js
db.command.aggregate.minute(<日期字段>)

db.command.aggregate.minute({date:<日期字段>,timezone:<时区>})
```

####  示例代码
#### Sample code

假设集合 `dates` 有以下文档：
Suppose the collection `dates` has the following documents:

```js
{
    "_id": 1,
    "date": ISODate("2019-05-14T09:38:51.686Z")
}
```

我们使用 `minute()` 对 `date` 字段进行投影，获取对应的分钟数：
We use `minute()` to project the `date` field to get the corresponding minutes:
 
```js
const $ = db.command.aggregate
let res = await db
  .collection('dates')
  .aggregate()
  .project({
    _id: 0,
    minute: $.minute('$date')
  })
  .end()
```

输出如下：  
The output is as follows:

```js
{
    "minute": 38
}
```

### month

返回日期字段对应的月份，是一个介于 1 到 12 之间的整数。  
Returns the month corresponding to the date field as an integer between 1 and 12.

####  API 说明
#### API Description

该接口有以下两种用法，语法如下：  
The interface has the following two usages, the syntax is as follows:
  
```js
db.command.aggregate.month(<日期字段>)

db.command.aggregate.month({date:<日期字段>,timezone:<时区>})
```

####  示例代码
#### Sample code
 假设集合 `dates` 有以下文档：  
 Suppose the collection `dates` has the following documents:

 
```js
{
    "_id": 1,
    "date": ISODate("2019-05-14T09:38:51.686Z")
}
```

我们使用 `month()` 对 `date` 字段进行投影，获取对应的月份：  
We use `month()` to project the `date` field to get the corresponding month:

```js
const $ = db.command.aggregate
let res = await db
  .collection('dates')
  .aggregate()
  .project({
    _id: 0,
    month: $.month('$date')
  })
  .end()
```

输出如下：  
The output is as follows:

```js
{
    "month": 5
}
```

### second

返回日期字段对应的秒数，是一个介于 0 到 59 之间的整数，在特殊情况下（闰秒）可能等于 60。  
Returns the number of seconds corresponding to the date field, as an integer between 0 and 59, and may be equal to 60 in special cases (leap seconds).

####  API 说明
#### API Description

该接口有以下两种用法，语法如下：  
The interface has the following two usages, the syntax is as follows:
  
```js
db.command.aggregate.second(<日期字段>)

db.command.aggregate.second({date:<日期字段>,timezone:<时区>})
```

####  示例代码
#### Sample code

假设集合 `dates` 有以下文档：
Suppose the collection `dates` has the following documents:

```js
{
    "_id": 1,
    "date": ISODate("2019-05-14T09:38:51.686Z")
}
```

我们使用 `second()` 对 `date` 字段进行投影，获取对应的秒数：  
We use `second()` to project the `date` field to get the corresponding seconds:

```js
const $ = db.command.aggregate
let res = await db
  .collection('dates')
  .aggregate()
  .project({
    _id: 0,
    second: $.second('$date')
  })
  .end()
```

输出如下：  
The output is as follows:

```js
{
    "second": 51
}
```

### week

返回日期字段对应的周数（一年中的第几周），是一个介于 0 到 53 之间的整数。  
Returns the week number (week of the year) corresponding to the date field, as an integer between 0 and 53.

####  API 说明
#### API Description

每周以周日为开头，**每年的第一个周日**即为 `week 1` 的开始，这天之前是 `week 0`。  
Week starts with Sunday, **the first Sunday of every year** is the start of `week 1`, before this day is `week 0`.

该接口有以下两种用法，语法如下：  
The interface has the following two usages, the syntax is as follows:
  
```js
db.command.aggregate.week(<日期字段>)

db.command.aggregate.week({date:<日期字段>,timezone:<时区>})
```

####  示例代码
#### Sample code

假设集合 `dates` 有以下文档：  
Suppose the collection `dates` has the following documents:

```js
{
    "_id": 1,
    "date": ISODate("2019-05-14T09:38:51.686Z")
}
```

我们使用 `week()` 对 `date` 字段进行投影，获取对应的周数（一年中的第几周）：  
We use `week()` to project the `date` field to get the corresponding week number (week of the year):

```js
const $ = db.command.aggregate
let res = await db
  .collection('dates')
  .aggregate()
  .project({
    _id: 0,
    week: $.week('$date')
  })
  .end()
```

输出如下：  
The output is as follows:

```js
{
    "week": 19
}
```

### year

返回日期字段对应的年份。  
Returns the year corresponding to the date field.

####  API 说明
#### API Description

该接口有以下两种用法，语法如下：  
The interface has the following two usages, the syntax is as follows:
  
```js
db.command.aggregate.year(<日期字段>)

db.command.aggregate.year({date:<日期字段>,timezone:<时区>})
```

####  示例代码
#### Sample code

假设集合 `dates` 有以下文档：
Suppose the collection `dates` has the following documents:

```js
{
    "_id": 1,
    "date": ISODate("2019-05-14T09:38:51.686Z")
}
```

我们使用 `year()` 对 `date` 字段进行投影，获取对应的年份：
We use `year()` to project the `date` field to get the corresponding year:

```js
const $ = db.command.aggregate
let res = await db
  .collection('dates')
  .aggregate()
  .project({
    _id: 0,
    year: $.year('$date')
  })
  .end()
```

输出如下：
The output is as follows:

```js
{
    "year": 2019
}
```

### subtract

见[subtract](#subtract)
see [subtract](#subtract)

## 常量操作符
## constant operator

### literal

直接返回一个值的字面量，不经过任何解析和处理。  
Returns the literal of a value directly, without any parsing and processing.

     
####  API 说明
#### API Description
 `literal` 使用形式如下：  
 `literal` is used as follows:

 
```js
literal(<值>)
```
如果 `<值>` 是一个表达式，那么 `literal` **不会**解析或者计算这个表达式，而是直接返回这个表达式。  
If `<value>` is an expression, then `literal` **will not** parse or evaluate the expression, but return the expression directly.

 
####  示例代码
#### Sample code
 比如我们有一个 `items` 集合，其中数据如下：  
 For example, we have an `items` collection with the following data:

 
```js
{ "_id": "0", "price": "$1" }
{ "_id": "1", "price": "$5.60" }
{ "_id": "2", "price": "$8.90" }
```


**以字面量的形式使用 $**
**Use $ in literal form**

 下面的代码使用 `literal`，生成了一个新的字段 `isOneDollar`，表示 `price` 字段是否严格等于 `"$1"`。  
 The following code uses `literal` to generate a new field `isOneDollar` that indicates whether the `price` field is strictly equal to `"$1"`.

 注意：我们这里无法使用 `eq(['$price', '$1'])`，因为 `"$1"` 是一个表达式，代表 `"1"` 字段对应的值，而不是字符串字面量 `"$1"`。  
 Note: We cannot use `eq(['$price', '$1'])` here, because `"$1"` is an expression that represents the value of the `"1"` field, not a string literal `"$1"`.

 
```js
const $ = db.command.aggregate
let res = await db.collection('items').aggregate()
  .project({
    isOneDollar: $.eq(['$price', $.literal('$1')])
  })
  .end()
```
输出如下：  
The output is as follows:

 
```js
{ "_id": "0", "isOneDollar": true }
{ "_id": "1", "isOneDollar": false }
{ "_id": "2", "isOneDollar": false }
```


**投影一个字段，对应的值为 1**
**Project a field, the corresponding value is 1**

 下面的代码使用 `literal`，投影了一个新的字段 `amount`，其值为 `1`。  
 The following code uses `literal`, projecting a new field `amount` with a value of `1`.

 
```js
const $ = db.command.aggregate
db.collection('items').aggregate()
  .project({
    price: 1,
    amount: $.literal(1)
  })
  .end()
```
输出如下：  
The output is as follows:

 
```js
{ "_id": "0", "price": "$1", "amount": 1 }
{ "_id": "1", "price": "$5.60", "amount": 1 }
{ "_id": "2", "price": "$8.90", "amount": 1 }
```

## 对象操作符
## Object operators

### mergeObjects

将多个文档合并为单个文档。  
Merge multiple documents into a single document.

####  API 说明
#### API Description
 使用形式如下：
 The form of use is as follows:
在 `group()` 中使用时：  
When used in `group()`:

 
```js
mergeObjects(<document>)
```
在其它表达式中使用时：  
When used in other expressions:

 
```js
mergeObjects([<document1>, <document2>, ...])
```

####  示例代码
#### Sample code
 

**搭配 `group()` 使用**
**Use with `group()`**

 假设集合 `sales` 存在以下文档：  
 Suppose the following documents exist in the collection `sales`:

 
```js
{ "_id": 1, "year": 2018, "name": "A", "volume": { "2018Q1": 500, "2018Q2": 500 } }
{ "_id": 2, "year": 2017, "name": "A", "volume": { "2017Q1": 400, "2017Q2": 300, "2017Q3": 0, "2017Q4": 0 } }
{ "_id": 3, "year": 2018, "name": "B", "volume": { "2018Q1": 100 } }
{ "_id": 4, "year": 2017, "name": "B", "volume": { "2017Q3": 100, "2017Q4": 250 } }
```
下面的代码使用 `mergeObjects()`，将用相同 `name` 的文档合并：  
The following code uses `mergeObjects()` to merge documents with the same `name`:

 
```js
const $ = db.command.aggregate
let res = await db.collection('sales').aggregate()
  .group({
    _id: '$name',
    mergedVolume: $.mergeObjects('$volume')
  })
  .end()
```
输出如下：  
The output is as follows:

 
```js
{ "_id": "A", "mergedVolume": { "2017Q1": 400, "2017Q2": 300, "2017Q3": 0, "2017Q4": 0, "2018Q1": 500, "2018Q2": 500 } }
{ "_id": "B", "mergedVolume": { "2017Q3": 100, "2017Q4": 250, "2018Q1": 100 } }
```


**一般用法**
**General usage**

假设集合 `test` 存在以下文档：  
Suppose the following documents exist in the collection `test`:

 
```js
{ "_id": 1, "foo": { "a": 1 }, "bar": { "b": 2 } }
{ "_id": 2, "foo": { "c": 1 }, "bar": { "d": 2 } }
{ "_id": 3, "foo": { "e": 1 }, "bar": { "f": 2 } }
```
下面的代码使用 `mergeObjects()`，将文档中的 `foo` 和 `bar` 字段合并为 `foobar`：  
The following code uses `mergeObjects()` to merge the `foo` and `bar` fields in the document into `foobar`:

 
```js
const $ = db.command.aggregate
let res = await db.collection('sales').aggregate()
  .project({
    foobar: $.mergeObjects(['$foo', '$bar'])
  })
  .end()
```
输出结果如下：  
The output is as follows:

 
```js
{ "_id": 1, "foobar": { "a": 1, "b": 2 } }
{ "_id": 2, "foobar": { "c": 1, "d": 2 } }
{ "_id": 3, "foobar": { "e": 1, "f": 2 } }
```

### objectToArray

见[objectToArray](#objectToArray)
see[objectToArray](#objectToArray)

## 集合操作符
## set operators

### allElementsTrue

输入一个数组，或者数组字段的表达式。如果数组中所有元素均为真值，那么返回 `true`，否则返回 `false`。空数组永远返回 `true`。  
Enter an array, or an expression for an array field. Returns `true` if all elements in the array are true, otherwise returns `false`. Empty arrays always return `true`.

####  API 说明
#### API Description

语法如下：
The syntax is as follows:
 
```js
allElementsTrue([<expression>])
```

####  示例代码
#### Sample code

假设集合 `test` 有如下记录：  
Suppose the collection `test` has the following records:

```js
{ "_id": 1, "array": [ true ] }
{ "_id": 2, "array": [ ] }
{ "_id": 3, "array": [ false ] }
{ "_id": 4, "array": [ true, false ] }
{ "_id": 5, "array": [ 0 ] }
{ "_id": 6, "array": [ "stark" ] }
```
下面的代码使用 `allElementsTrue()`，判断 `array` 字段中是否均为真值：  
The following code uses `allElementsTrue()` to determine whether all of the `array` fields are true:

 
```js
const $ = db.command.aggregate
let res = await db.collection('price')
  .aggregate()
  .project({
    isAllTrue: $.allElementsTrue(['$array'])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "isAllTrue": true }
{ "_id": 2, "isAllTrue": true }
{ "_id": 3, "isAllTrue": false }
{ "_id": 4, "isAllTrue": false }
{ "_id": 5, "isAllTrue": false }
{ "_id": 6, "isAllTrue": true }
```

### anyElementTrue

输入一个数组，或者数组字段的表达式。如果数组中任意一个元素为真值，那么返回 `true`，否则返回 `false`。空数组永远返回 `false`。  
Enter an array, or an expression for an array field. Returns `true` if any element in the array is true, otherwise returns `false`. Empty arrays always return `false`.

      
####  API 说明
#### API Description
 语法如下：  
 The syntax is as follows:

 
```js
anyElementTrue([<expression>])
```

####  示例代码
#### Sample code
 假设集合 `test` 有如下记录：  
 Suppose the collection `test` has the following records:

 
```js
{ "_id": 1, "array": [ true ] }
{ "_id": 2, "array": [ ] }
{ "_id": 3, "array": [ false ] }
{ "_id": 4, "array": [ true, false ] }
{ "_id": 5, "array": [ 0 ] }
{ "_id": 6, "array": [ "stark" ] }
```
下面的代码使用 `anyElementTrue()`，判断 `array` 字段中是否含有真值：  
The following code uses `anyElementTrue()` to determine whether the `array` field contains a true value:

 
```js
const $ = db.command.aggregate
let res = await db.collection('price')
  .aggregate()
  .project({
    isAnyTrue: $.anyElementTrue(['$array'])
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "_id": 1, "isAnyTrue": true }
{ "_id": 2, "isAnyTrue": false }
{ "_id": 3, "isAnyTrue": false }
{ "_id": 4, "isAnyTrue": true }
{ "_id": 5, "isAnyTrue": false }
{ "_id": 6, "isAnyTrue": true }
```

### setDifference

输入两个集合，输出只存在于第一个集合中的元素。  
Takes two sets as input, and outputs elements that exist only in the first set.

      
####  API 说明
#### API Description
 使用形式如下：  
 The form of use is as follows:

 
```js
setDifference([<expression1>, <expression2>])
```

####  示例代码
#### Sample code
 假设集合 `test` 存在以下数据：  
 Suppose the following data exists in the collection `test`:

 
```js
{ "_id": 1, "A": [ 1, 2 ], "B": [ 1, 2 ] }
{ "_id": 2, "A": [ 1, 2 ], "B": [ 2, 1, 2 ] }
{ "_id": 3, "A": [ 1, 2 ], "B": [ 1, 2, 3 ] }
{ "_id": 4, "A": [ 1, 2 ], "B": [ 3, 1 ] }
{ "_id": 5, "A": [ 1, 2 ], "B": [ ] }
{ "_id": 6, "A": [ 1, 2 ], "B": [ {}, [] ] }
{ "_id": 7, "A": [ ], "B": [ ] }
{ "_id": 8, "A": [ ], "B": [ 1 ] }
```
下面的代码使用 `setDifference`，找到只存在于 `B` 中的数字：  
The following code uses `setDifference` to find numbers that only exist in `B`:

 
```js
let res = await db.collection('test')
  .aggregate()
  .project({
    isBOnly: $.setDifference(['$B', '$A'])
  })
  .end()
```

```js
{ "_id": 1, "isBOnly": [] }
{ "_id": 2, "isBOnly": [] }
{ "_id": 3, "isBOnly": [3] }
{ "_id": 4, "isBOnly": [3] }
{ "_id": 5, "isBOnly": [] }
{ "_id": 6, "isBOnly": [{}, []] }
{ "_id": 7, "isBOnly": [] }
{ "_id": 8, "isBOnly": [1] }
```

### setEquals

输入两个集合，判断两个集合中包含的元素是否相同（不考虑顺序、去重）。  
Input two sets and determine whether the elements contained in the two sets are the same (regardless of order, deduplication).

      
####  API 说明
#### API Description
 使用形式如下：  
 The form of use is as follows:

 
```js
setEquals([<expression1>, <expression2>])
```

####  示例代码
#### Sample code
 假设集合 `test` 存在以下数据：  
 Suppose the following data exists in the collection `test`:

 
```js
{ "_id": 1, "A": [ 1, 2 ], "B": [ 1, 2 ] }
{ "_id": 2, "A": [ 1, 2 ], "B": [ 2, 1, 2 ] }
{ "_id": 3, "A": [ 1, 2 ], "B": [ 1, 2, 3 ] }
{ "_id": 4, "A": [ 1, 2 ], "B": [ 3, 1 ] }
{ "_id": 5, "A": [ 1, 2 ], "B": [ ] }
{ "_id": 6, "A": [ 1, 2 ], "B": [ {}, [] ] }
{ "_id": 7, "A": [ ], "B": [ ] }
{ "_id": 8, "A": [ ], "B": [ 1 ] }
```
下面的代码使用 `setEquals`，判断两个集合中包含的元素是否相同：  
The following code uses `setEquals` to determine whether two sets contain the same elements:

 
```js
let res = await db.collection('test')
  .aggregate()
  .project({
    sameElements: $.setEquals(['$A', '$B'])
  })
  .end()
```

```js
{ "_id": 1, "sameElements": true }
{ "_id": 2, "sameElements": true }
{ "_id": 3, "sameElements": false }
{ "_id": 4, "sameElements": false }
{ "_id": 5, "sameElements": false }
{ "_id": 6, "sameElements": false }
{ "_id": 7, "sameElements": true }
{ "_id": 8, "sameElements": false }
```

### setIntersection

输入两个集合，输出两个集合的交集。  
Input two sets, output the intersection of the two sets.

      
####  API 说明
#### API Description
 使用形式如下：  
 The form of use is as follows:

 
```js
setIntersection([<expression1>, <expression2>])
```

####  示例代码
#### Sample code
 假设集合 `test` 存在以下数据：  
 Suppose the following data exists in the collection `test`:

 
```js
{ "_id": 1, "A": [ 1, 2 ], "B": [ 1, 2 ] }
{ "_id": 2, "A": [ 1, 2 ], "B": [ 2, 1, 2 ] }
{ "_id": 3, "A": [ 1, 2 ], "B": [ 1, 2, 3 ] }
{ "_id": 4, "A": [ 1, 2 ], "B": [ 3, 1 ] }
{ "_id": 5, "A": [ 1, 2 ], "B": [ ] }
{ "_id": 6, "A": [ 1, 2 ], "B": [ {}, [] ] }
{ "_id": 7, "A": [ ], "B": [ ] }
{ "_id": 8, "A": [ ], "B": [ 1 ] }
```
下面的代码使用 `setIntersection`，输出两个集合的交集：  
The following code uses `setIntersection` to output the intersection of two sets:

 
```js
let res = await db.collection('test')
  .aggregate()
  .project({
    commonToBoth: $.setIntersection(['$A', '$B'])
  })
  .end()
```
输出如下：  
The output is as follows:

 
```js
{ "_id": 1, "commonToBoth": [ 1, 2 ] }
{ "_id": 2, "commonToBoth": [ 1, 2 ] }
{ "_id": 3, "commonToBoth": [ 1, 2 ] }
{ "_id": 4, "commonToBoth": [ 1 ] }
{ "_id": 5, "commonToBoth": [ ] }
{ "_id": 6, "commonToBoth": [ ] }
{ "_id": 7, "commonToBoth": [ ] }
{ "_id": 8, "commonToBoth": [ ] }
```

### setIsSubset

输入两个集合，判断第一个集合是否是第二个集合的子集。  
Given two sets, determine whether the first set is a subset of the second set.

      
####  API 说明
#### API Description
 使用形式如下：  
 The form of use is as follows:

 
```js
setIsSubset([<expression1>, <expression2>])
```

####  示例代码
#### Sample code
 假设集合 `test` 存在以下数据：  
 Suppose the following data exists in the collection `test`:

 
```js
{ "_id": 1, "A": [ 1, 2 ], "B": [ 1, 2 ] }
{ "_id": 2, "A": [ 1, 2 ], "B": [ 2, 1, 2 ] }
{ "_id": 3, "A": [ 1, 2 ], "B": [ 1, 2, 3 ] }
{ "_id": 4, "A": [ 1, 2 ], "B": [ 3, 1 ] }
{ "_id": 5, "A": [ 1, 2 ], "B": [ ] }
{ "_id": 6, "A": [ 1, 2 ], "B": [ {}, [] ] }
{ "_id": 7, "A": [ ], "B": [ ] }
{ "_id": 8, "A": [ ], "B": [ 1 ] }
```
下面的代码使用 `setIsSubset`，判断第一个集合是否是第二个集合的子集：  
The following code uses `setIsSubset` to determine whether the first set is a subset of the second set:

 
```js
let res = await db.collection('test')
  .aggregate()
  .project({
    AisSubsetOfB: $.setIsSubset(['$A', '$B'])
  })
  .end()
```

```js
{ "_id": 1, "AisSubsetOfB": true }
{ "_id": 2, "AisSubsetOfB": true }
{ "_id": 3, "AisSubsetOfB": true }
{ "_id": 4, "AisSubsetOfB": false }
{ "_id": 5, "AisSubsetOfB": false }
{ "_id": 6, "AisSubsetOfB": false }
{ "_id": 7, "AisSubsetOfB": true }
{ "_id": 8, "AisSubsetOfB": true }
```

### setUnion

输入两个集合，输出两个集合的并集。  
Input two sets, output the union of the two sets.

      
####  API 说明
#### API Description
 使用形式如下：  
 The form of use is as follows:

 
```js
setUnion([<expression1>, <expression2>])
```

####  示例代码
#### Sample code
 假设集合 `test` 存在以下数据：  
 Suppose the following data exists in the collection `test`:

 
```js
{ "_id": 1, "A": [ 1, 2 ], "B": [ 1, 2 ] }
{ "_id": 2, "A": [ 1, 2 ], "B": [ 2, 1, 2 ] }
{ "_id": 3, "A": [ 1, 2 ], "B": [ 1, 2, 3 ] }
{ "_id": 4, "A": [ 1, 2 ], "B": [ 3, 1 ] }
{ "_id": 5, "A": [ 1, 2 ], "B": [ ] }
{ "_id": 6, "A": [ 1, 2 ], "B": [ {}, [] ] }
{ "_id": 7, "A": [ ], "B": [ ] }
{ "_id": 8, "A": [ ], "B": [ 1 ] }
```
下面的代码使用 `setUnion`，输出两个集合的并集：  
The following code uses `setUnion` to output the union of two sets:

 
```js
let res = await db.collection('test')
  .aggregate()
  .project({
    AB: $.setUnion(['$A', '$B'])
  })
  .end()
```
输出如下：  
The output is as follows:

 
```js
{ "_id": 1, "AB": [ 1, 2 ] }
{ "_id": 2, "AB": [ 1, 2 ] }
{ "_id": 3, "AB": [ 1, 2, 3 ] }
{ "_id": 4, "AB": [ 1, 2, 3 ] }
{ "_id": 5, "AB": [ 1, 2 ] }
{ "_id": 6, "AB": [ 1, 2, {}, [] ] }
{ "_id": 7, "AB": [ ] }
{ "_id": 8, "AB": [ 1 ] }
```

## 字符串操作符
## String operators

### concat

连接字符串，返回拼接后的字符串。  
Concatenate strings and return the concatenated string.

      
####  API 说明
#### API Description
 `concat` 的语法如下：  
 The syntax of `concat` is as follows:

 
```js
db.command.aggregate.concat([<表达式1>, <表达式2>, ...])
```
表达式可以是形如 `$ + 指定字段`，也可以是普通字符串。只要能够被解析成字符串即可。  
The expression can be in the form of `$ + specified field`, or it can be a normal string. As long as it can be parsed into a string.

 
####  示例代码
#### Sample code
 假设集合 `students` 的记录如下：  
 Suppose the collection `students` has the following records:

 
```js
{ "firstName": "Yuanxin", "group": "a", "lastName": "Dong", "score": 84 }
{ "firstName": "Weijia", "group": "a", "lastName": "Wang", "score": 96 }
{ "firstName": "Chengxi", "group": "b", "lastName": "Li", "score": 80 }
```
借助 `concat` 可以拼接 `lastName` 和 `firstName` 字段，得到每位学生的名字全称：  
With `concat` you can concatenate the `lastName` and `firstName` fields to get the full name of each student:

 
```js
const $ = db.command.aggregate
db
  .collection('students')
  .aggregate()
  .project({
    _id: 0,
    fullName: $.concat(['$firstName', ' ', '$lastName'])
  })
  .end()
```
返回的结果如下：  
The results returned are as follows:

 
```js
{ "fullName": "Yuanxin Dong" }
{ "fullName": "Weijia Wang" }
{ "fullName": "Chengxi Li" }
```

### dateFromString

见[dateFromString](#dateFromString)
see [dateFromString](#dateFromString)

### dateToString

见[dateToString](#dateToString)
see [dateToString](#dateToString)

### indexOfBytes

在目标字符串中查找子字符串，并返回第一次出现的 `UTF-8` 的字节索引（从0开始）。如果不存在子字符串，返回 -1。  
Finds a substring in the target string and returns the byte index (0-based) of the first occurrence of `UTF-8`. Returns -1 if no substring exists.

      
####  API 说明
#### API Description
 `indexOfBytes` 的语法如下：  
 The syntax of `indexOfBytes` is as follows:

 
```js
db.command.aggregate.indexOfBytes([<目标字符串表达式>, <子字符串表达式>, <开始位置表达式>, <结束位置表达式>])
```
下面是 4 种表达式的详细描述：  
The following is a detailed description of the four expressions:

|表达式						|描述															|
|expression |description |
|----							|----															|
|目标字符串表达式	|任何可以被解析为字符串的表达式		|
|target string expression |any expression that can be parsed as a string |
|子字符串表达式		|任何可以被解析为字符串的表达式		|
|Substring expression |Any expression that can be parsed as a string |
|开始位置表达式		|任何可以被解析为非负整数的表达式	|
|Start position expression |Any expression that can be parsed as a non-negative integer |
|结束位置表达式		|任何可以被解析为非负整数的表达式	|
|End position expression |Any expression that can be parsed as a non-negative integer |

####  示例代码
#### Sample code
 假设集合 `students` 的记录如下：  
 Suppose the collection `students` has the following records:

 
```js
{ "firstName": "Yuanxin", "group": "a", "lastName": "Dong", "score": 84 }
{ "firstName": "Weijia", "group": "a", "lastName": "Wang", "score": 96 }
{ "firstName": "Chengxi", "group": "b", "lastName": "Li", "score": 80 }
```
借助 `indexOfBytes` 查找字符 `"a"` 在字段 `firstName` 中的位置：  
Use `indexOfBytes` to find the position of the character `"a"` in the field `firstName`:

 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .project({
    _id: 0,
    aStrIndex: $.indexOfBytes(['$firstName', 'a'])
  })
  .end()
```
返回的结果如下：  
The results returned are as follows:

 
```js
{ "aStrIndex": 2 }
{ "aStrIndex": 5 }
{ "aStrIndex": -1 }
```

### indexOfCP

在目标字符串中查找子字符串，并返回第一次出现的 `UTF-8` 的 `code point` 索引（从0开始）。如果不存在子字符串，返回 -1。  
Finds a substring in the target string and returns the `code point` index (0-based) of the first occurrence of `UTF-8`. Returns -1 if no substring exists.

      
####  API 说明
#### API Description
 `code point` 是“码位”，又名“编码位置”。这里特指 `Unicode` 包中的码位，范围是从0（16进制）到10FFFF（16进制）。  
 `code point` is a "code point", aka "code position". This refers specifically to the code points in the `Unicode` package, ranging from 0 (hexadecimal) to 10FFFF (hexadecimal).

 `indexOfCP` 的语法如下：  
 The syntax of `indexOfCP` is as follows:

 
```js
db.command.aggregate.indexOfCP([<目标字符串表达式>, <子字符串表达式>, <开始位置表达式>, <结束位置表达式>])
```
下面是 4 种表达式的详细描述：  
The following is a detailed description of the four expressions:

|表达式						|描述															|
|expression |description |
|----							|----															|
|目标字符串表达式	|任何可以被解析为字符串的表达式		|
|target string expression |any expression that can be parsed as a string |
|子字符串表达式		|任何可以被解析为字符串的表达式		|
|Substring expression |Any expression that can be parsed as a string |
|开始位置表达式		|任何可以被解析为非负整数的表达式	|
|Start position expression |Any expression that can be parsed as a non-negative integer |
|结束位置表达式		|任何可以被解析为非负整数的表达式	|
|End position expression |Any expression that can be parsed as a non-negative integer |

####  示例代码
#### Sample code
 假设集合 `students` 的记录如下：  
 Suppose the collection `students` has the following records:

 
```js
{ "firstName": "Yuanxin", "group": "a", "lastName": "Dong", "score": 84 }
{ "firstName": "Weijia", "group": "a", "lastName": "Wang", "score": 96 }
{ "firstName": "Chengxi", "group": "b", "lastName": "Li", "score": 80 }
```
借助 `indexOfCP` 查找字符 `"a"` 在字段 `firstName` 中的位置：  
Use `indexOfCP` to find the position of the character `"a"` in the field `firstName`:

 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .project({
    _id: 0,
    aStrIndex: $.indexOfCP(['$firstName', 'a'])
  })
  .end()
```
返回的结果如下：  
The results returned are as follows:

 
```js
{ "aStrIndex": 2 }
{ "aStrIndex": 5 }
{ "aStrIndex": -1 }
```

### split

按照分隔符分隔数组，并且删除分隔符，返回子字符串组成的数组。如果字符串无法找到分隔符进行分隔，返回原字符串作为数组的唯一元素。  
Delimits the array by the delimiter and removes the delimiter to return an array of substrings. If the string cannot be separated by a delimiter, returns the original string as the only element of the array.

      
####  API 说明
#### API Description
 `split` 的语法如下：  
 The syntax of `split` is as follows:

 
```js
db.command.aggregate.split([<字符串表达式>, <分隔符表达式>])
```
字符串表达式和分隔符表达式可以是任意形式的表达式，只要它可以被解析为字符串即可。  
String expressions and delimiter expressions can be any expression as long as it can be parsed as a string.

 
####  示例代码
#### Sample code
 假设集合 `students` 的记录如下：  
 Suppose the collection `students` has the following records:

 
```js
{ "birthday": "1999/12/12" }
{ "birthday": "1998/11/11" }
{ "birthday": "1997/10/10" }
```
通过 `split` 将每条记录中的 `birthday` 字段对应值分隔成数组，每个数组分别由代表年、月、日的3个元素组成：  
Use `split` to separate the corresponding values of the `birthday` field in each record into arrays, each consisting of 3 elements representing the year, month, and day:

 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .project({
    _id: 0,
    birthday: $.split(['$birthday', '/'])
  })
  .end()
```
返回的结果如下：  
The results returned are as follows:

 
```js
{ "birthday": [ "1999", "12", "12" ] }
{ "birthday": [ "1998", "11", "11" ] }
{ "birthday": [ "1997", "10", "10" ] }
```

### strLenBytes

计算并返回指定字符串中 `utf-8` 编码的字节数量。  
Calculates and returns the number of `utf-8` encoded bytes in the specified string.

      
####  API 说明
#### API Description
 `strLenBytes` 的语法如下：  
 The syntax of `strLenBytes` is as follows:

 
```js
db.command.aggregate.strLenBytes(<表达式>)
```
只要表达式可以被解析成字符串，那么它就是有效表达式。  
An expression is a valid expression as long as it can be parsed into a string.

 
####  示例代码
#### Sample code
 假设集合 `students` 的记录如下：  
 Suppose the collection `students` has the following records:

 
```js
{ "name": "dongyuanxin", "nickname": "心谭" }
```
借助 `strLenBytes` 计算 `name` 字段和 `nickname` 字段对应值的字节长度：  
Calculate the length in bytes of the corresponding values of the `name` field and `nickname` field with the help of `strLenBytes`:

 
```js
const $ = db.command.aggregate
db
  .collection('students')
  .aggregate()
  .project({
    _id: 0,
    nameLength: $.strLenBytes('$name'),
    nicknameLength: $.strLenBytes('$nickname')
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "nameLength": 11, "nicknameLength": 6 }
```

### strLenCP

计算并返回指定字符串的UTF-8 [code points<span></span>](http://www.unicode.org/glossary/#code_point) 数量。  
Calculates and returns the UTF-8 [code points of the specified string<span></span> ](http://www.unicode.org/glossary/#code_point) number.

      
####  API 说明
#### API Description
 `strLenCP` 的语法如下：  
 The syntax of `strLenCP` is as follows:

 
```js
db.command.aggregate.strLenCP(<表达式>)
```
只要表达式可以被解析成字符串，那么它就是有效表达式。  
An expression is a valid expression as long as it can be parsed into a string.

 
####  示例代码
#### Sample code
 假设集合 `students` 的记录如下：  
 Suppose the collection `students` has the following records:

 
```js
{ "name": "dongyuanxin", "nickname": "心谭" }
```
借助 `strLenCP` 计算 `name` 字段和 `nickname` 字段对应值的UTF-8 [code points<span></span>](http://www.unicode.org/glossary/#code_point)的数量：  
Calculate UTF-8 [code points<span></span> ](http://www.unicode.org/glossary/#code_point) number:

 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .project({
    _id: 0,
    nameLength: $.strLenCP('$name'),
    nicknameLength: $.strLenCP('$nickname')
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "nameLength": 11, "nicknameLength": 2 }
```

### strcasecmp

对两个字符串在不区分大小写的情况下进行大小比较，并返回比较的结果。  
Compares two strings case-insensitively and returns the result of the comparison.

      
####  API 说明
#### API Description
 `strcasecmp` 的语法如下：  
 The syntax of `strcasecmp` is as follows:

 
```js
db.command.aggregate.strcasecmp([<表达式1>, <表达式2>])
```
只要 `表达式1`和 `表达式2` 可以被解析成字符串，那么它们就是有效的。  
`expression1` and `expression2` are valid as long as they can be parsed as strings.

 返回的比较结果有1，0和-1三种：  
 The comparison results returned are 1, 0 and -1:

 
- 1：`表达式1` 解析的字符串 > `表达式2` 解析的字符串 - 0：`表达式1` 解析的字符串 = `表达式2` 解析的字符串 - -1：`表达式1` 解析的字符串 < `表达式2` 解析的字符串
- 1: `expression1` parsed string > `expression2` parsed string - 0: `expression1` parsed string = `expression2` parsed string - -1: `expression2` expression1` parsed string < `expression2` parsed string
 
####  示例代码
#### Sample code
 假设集合 `students` 的记录如下：  
 Suppose the collection `students` has the following records:

 
```js
{ "firstName": "Yuanxin", "group": "a", "lastName": "Dong", "score": 84 }
{ "firstName": "Weijia", "group": "a", "lastName": "Wang", "score": 96 }
{ "firstName": "Chengxi", "group": "b", "lastName": "Li", "score": 80 }
```
借助 `strcasecmp` 比较 `firstName` 字段值和 `lastName` 字段值的大小：  
Use `strcasecmp` to compare the size of the `firstName` field value and the `lastName` field value:

 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .project({
    _id: 0,
    result: $.strcasecmp(['$firstName', '$lastName']),
  })
  .end()
```
返回结果如下：  
The returned results are as follows:

 
```js
{ "result": 1 }
{ "result": 1 }
{ "result": -1 }
```

### substr

返回字符串从指定位置开始的指定长度的子字符串。它是 `db.command.aggregate.substrBytes` 的别名，更推荐使用后者。  
Returns a substring of the specified length of the string starting at the specified position. It is an alias for `db.command.aggregate.substrBytes`, the latter is preferred.

      
####  API 说明
#### API Description
 `substr` 的语法如下：  
 The syntax of `substr` is as follows:

 
```js
db.command.aggregate.substr([<表达式1>, <表达式2>, <表达式3>])
```
`表达式1` 是任何可以解析为字符串的有效表达式，`表达式2` 和 `表达式3` 是任何可以解析为数字的有效表达式。  
`expression1` is any valid expression that can be parsed as a string, `expression2` and `expression3` are any valid expression that can be parsed as a number.

 如果 `表达式2` 是负数，返回的结果为 `""`。  
 If `expression2` is negative, the result returned is `""`.

 如果 `表达式3` 是负数，返回的结果为从 `表达式2` 指定的开始位置以及之后其余部分的子字符串。  
 If `expression3` is negative, the result returned is the substring starting at the position specified by `expression2` and the rest after that.

 
####  示例代码
#### Sample code
 假设集合 `students` 的记录如下：  
 Suppose the collection `students` has the following records:

 
```js
{ "birthday": "1999/12/12", "firstName": "Yuanxin", "group": "a", "lastName": "Dong", "score": 84 }
{ "birthday": "1998/11/11", "firstName": "Weijia", "group": "a", "lastName": "Wang", "score": 96 }
{ "birthday": "1997/10/10", "firstName": "Chengxi", "group": "b", "lastName": "Li", "score": 80 }
```
借助 `substr` 可以提取 `birthday` 中的年、月、日信息，代码如下：  
With the help of `substr`, you can extract the year, month, and day information in `birthday`, the code is as follows:

 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .project({
    _id: 0,
    year: $.substr(['$birthday', 0, 4]),
    month: $.substr(['$birthday', 5, 2]),
    day: $.substr(['$birthday', 8, -1])
  })
  .end()
```
返回的结果如下：  
The results returned are as follows:

 
```js
{ "day": "12", "month": "12", "year": "1999" }
{ "day": "11", "month": "11", "year": "1998" }
{ "day": "10", "month": "10", "year": "1997" }
```

### substrBytes

返回字符串从指定位置开始的指定长度的子字符串。子字符串是由字符串中指定的 `UTF-8` 字节索引的字符开始，长度为指定的字节数。  
Returns a substring of the specified length of the string starting at the specified position. The substring starts at the character at the specified `UTF-8` byte index in the string and is the specified number of bytes long.

      
####  API 说明
#### API Description
 `substrBytes` 的语法如下：  
 The syntax of `substrBytes` is as follows:

 
```js
db.command.aggregate.substrBytes([<表达式1>, <表达式2>, <表达式3>])
```
`表达式1` 是任何可以解析为字符串的有效表达式，`表达式2` 和 `表达式3` 是任何可以解析为数字的有效表达式。  
`expression1` is any valid expression that can be parsed as a string, `expression2` and `expression3` are any valid expression that can be parsed as a number.

 如果 `表达式2` 是负数，返回的结果为 `""`。  
 If `expression2` is negative, the result returned is `""`.

 如果 `表达式3` 是负数，返回的结果为从 `表达式2` 指定的开始位置以及之后其余部分的子字符串。  
 If `expression3` is negative, the result returned is the substring starting at the position specified by `expression2` and the rest after that.

 
####  示例代码
#### Sample code
 假设集合 `students` 的记录如下：  
 Suppose the collection `students` has the following records:

 
```js
{ "birthday": "1999/12/12", "firstName": "Yuanxin", "group": "a", "lastName": "Dong", "score": 84 }
{ "birthday": "1998/11/11", "firstName": "Weijia", "group": "a", "lastName": "Wang", "score": 96 }
{ "birthday": "1997/10/10", "firstName": "Chengxi", "group": "b", "lastName": "Li", "score": 80 }
```
借助 `substrBytes` 可以提取 `birthday` 中的年、月、日信息，代码如下：  
With the help of `substrBytes`, you can extract the year, month, and day information in `birthday`, the code is as follows:

 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .project({
    _id: 0,
    year: $.substrBytes(['$birthday', 0, 4]),
    month: $.substrBytes(['$birthday', 5, 2]),
    day: $.substrBytes(['$birthday', 8, -1])
  })
  .end()
```
返回的结果如下：  
The results returned are as follows:

 
```js
{ "day": "12", "month": "12", "year": "1999" }
{ "day": "11", "month": "11", "year": "1998" }
{ "day": "10", "month": "10", "year": "1997" }
```

### substrCP

返回字符串从指定位置开始的指定长度的子字符串。子字符串是由字符串中指定的 `UTF-8` 字节索引的字符开始，长度为指定的字节数。  
Returns a substring of the specified length of the string starting at the specified position. The substring starts at the character at the specified `UTF-8` byte index in the string and is the specified number of bytes long.

      
####  API 说明
#### API Description
 `substrCP` 的语法如下：  
 The syntax of `substrCP` is as follows:

 
```js
db.command.aggregate.substrCP([<表达式1>, <表达式2>, <表达式3>])
```
`表达式1` 是任何可以解析为字符串的有效表达式，`表达式2` 和 `表达式3` 是任何可以解析为数字的有效表达式。  
`expression1` is any valid expression that can be parsed as a string, `expression2` and `expression3` are any valid expression that can be parsed as a number.

 如果 `表达式2` 是负数，返回的结果为 `""`。  
 If `expression2` is negative, the result returned is `""`.

 如果 `表达式3` 是负数，返回的结果为从 `表达式2` 指定的开始位置以及之后其余部分的子字符串。  
 If `expression3` is negative, the result returned is the substring starting at the position specified by `expression2` and the rest after that.

 
####  示例代码
#### Sample code
 假设集合 `students` 的记录如下：  
 Suppose the collection `students` has the following records:

 
```js
{ "name": "dongyuanxin", "nickname": "心谭" }
```
借助 `substrCP` 可以提取 `nickname` 字段值的第一个汉字：  
With the help of `substrCP`, the first Chinese character of the `nickname` field value can be extracted:

 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .project({
    _id: 0,
    firstCh: $.substrCP(['$nickname', 0, 1])
  })
  .end()
```
返回的结果如下：  
The results returned are as follows:

 
```js
{ "firstCh": "心" }
```

### toLower

将字符串转化为小写并返回。  
Convert the string to lowercase and return.

     
####  API 说明
#### API Description
 `toLower` 的语法如下：  
 The syntax of `toLower` is as follows:

 
```js
db.command.aggregate.toLower(表达式)
```
只要表达式可以被解析成字符串，那么它就是有效表达式。例如：`$ + 指定字段`。  
An expression is a valid expression as long as it can be parsed into a string. For example: `$ + specify field`.

 
####  示例代码
#### Sample code
 假设集合 `students` 的记录如下：  
 Suppose the collection `students` has the following records:

 
```js
{ "firstName": "Yuanxin", "group": "a", "lastName": "Dong", "score": 84 }
{ "firstName": "Weijia", "group": "a", "lastName": "Wang", "score": 96 }
{ "firstName": "Chengxi", "group": "b", "lastName": "Li", "score": 80 }
```
借助 `toLower` 将 `firstName` 的字段值转化为小写：  
Convert the field value of `firstName` to lowercase with the help of `toLower`:

 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .project({
    _id: 0,
    result: $.toLower('$firstName'),
  })
  .end()
```
返回的结果如下：  
The results returned are as follows:

 
```js
{ "result": "yuanxin" }
{ "result": "weijia" }
{ "result": "chengxi" }
```

### toUpper

将字符串转化为大写并返回。  
Convert the string to uppercase and return.

     
####  API 说明
#### API Description
 `toUpper` 的语法如下：  
 The syntax of `toUpper` is as follows:

 
```js
db.command.aggregate.toUpper(表达式)
```
只要表达式可以被解析成字符串，那么它就是有效表达式。例如：`$ + 指定字段`。  
An expression is a valid expression as long as it can be parsed into a string. For example: `$ + specify field`.

 
####  示例代码
#### Sample code
 假设集合 `students` 的记录如下：  
 Suppose the collection `students` has the following records:

 
```js
{ "firstName": "Yuanxin", "group": "a", "lastName": "Dong", "score": 84 }
{ "firstName": "Weijia", "group": "a", "lastName": "Wang", "score": 96 }
{ "firstName": "Chengxi", "group": "b", "lastName": "Li", "score": 80 }
```
借助 `toUpper` 将 `lastName` 的字段值转化为大写：  
Use `toUpper` to convert the field value of `lastName` to uppercase:

 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .project({
    _id: 0,
    result: $.toUpper('$lastName'),
  })
  .end()
```
返回的结果如下：  
The results returned are as follows:

```js
{ "result": "DONG" }
{ "result": "WANG" }
{ "result": "LI" }
```

## 分组运算方法@accumulator
## Grouping operation method @accumulator

### addToSet

聚合运算符。向数组中添加值，如果数组中已存在该值，不执行任何操作。它只能在 `group stage` 中使用。  
Aggregation operator. Adds a value to the array, and does nothing if the value already exists in the array. It can only be used in `group stage`.

####  API 说明
#### API Description

`addToSet` 语法如下：  
The `addToSet` syntax is as follows:
 
```js
db.command.aggregate.addToSet(<表达式>)
```

表达式是形如 `$ + 指定字段` 的字符串。如果指定字段的值是数组，那么整个数组会被当作一个元素。  
An expression is a string of the form `$ + specified field`. If the value of the specified field is an array, the entire array is treated as one element.
 
####  示例代码
#### Sample code

假设集合 `passages` 的记录如下：  
Suppose the collection `passages` has the following records:
 
```js
{ "category": "web", "tags": [ "JavaScript", "CSS" ], "title": "title1" }
{ "category": "System", "tags": [ "C++", "C" ], "title": "title2" }
```


**非数组字段**
**non-array field**

 每条记录的 `category` 对应值的类型是非数组，利用 `addToSet` 统计所有分类：  
 The type of the corresponding value of `category` for each record is non-array, use `addToSet` to count all categories:

 
```js
const $ = db.command.aggregate
let res = await db
  .collection('passages')
  .aggregate()
  .group({
    _id: null,
    categories: $.addToSet('$category')
  })
  .end()
```
返回的结果如下：  
The results returned are as follows:

 
```js
{ "_id": null, "categories": [ "System", "web" ] }
```


**数组字段**
**Array field**

 每条记录的 `tags` 对应值的类型是数组，数组不会被自动展开：  
 The type of the corresponding value of `tags` for each record is an array, and the array will not be automatically expanded:

 
```js
const $ = db.command.aggregate
let res = await db
  .collection('passages')
  .aggregate()
  .group({
    _id: null,
    tagsList: $.addToSet('$tags')
  })
  .end()
```
返回的结果如下：  
The results returned are as follows:

 
```js
{ "_id": null, "tagsList": [ [ "C++", "C" ], [ "JavaScript", "CSS" ] ] }
```

### avg

<!--
/// meta
keyword: 均值
keyword: mean
-->

返回一组集合中，指定字段对应数据的平均值。  
Returns the average value of the data corresponding to the specified field in a set of collections.

      
####  API 说明
#### API Description
 `avg` 的语法如下：  
 The syntax of `avg` is as follows:

 
```js
db.command.aggregate.avg(<number>)
```
`avg` 传入的值除了数字常量外，也可以是任何最终解析成一个数字的表达式。它会忽略非数字值。  
In addition to numeric constants, the value passed to `avg` can also be any expression that eventually resolves to a number. It ignores non-numeric values.

 
####  示例代码
#### Sample code
 假设集合 `students` 的记录如下：  
 Suppose the collection `students` has the following records:

 
```js
{ "group": "a", "name": "stu1", "score": 84 }
{ "group": "a", "name": "stu2", "score": 96 }
{ "group": "b", "name": "stu3", "score": 80 }
{ "group": "b", "name": "stu4", "score": 100 }
```
借助 `avg` 可以计算所有记录的 `score` 的平均值：  
With `avg` it is possible to calculate the average of the `score` of all records:

 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .group({
    _id: null,
    average: $.avg('$score')
  })
  .end()
```
返回的结果如下：  
The results returned are as follows:

 
```js
{ "_id": null, "average": 90 }
```

### first

返回指定字段在一组集合的第一条记录对应的值。仅当这组集合是按照某种定义排序（ `sort` ）后，此操作才有意义。  
Returns the value corresponding to the specified field in the first record of a set. This operation only makes sense if the set of collections is sorted by some definition ( `sort` ).

      
####  API 说明
#### API Description
 `first` 的语法如下：  
 The syntax of `first` is as follows:

 
```js
db.command.aggregate.first(<表达式>)
```
表达式是形如 `$ + 指定字段` 的字符串。  
An expression is a string of the form `$ + specified field`.

 `first` 只能在 `group` 阶段被使用，并且需要配合 `sort` 才有意义。  
 `first` can only be used in the `group` phase, and only makes sense in conjunction with `sort`.

 
####  示例代码
#### Sample code
 假设集合 `students` 的记录如下：  
 Suppose the collection `students` has the following records:

 
```js
{ "group": "a", "name": "stu1", "score": 84 }
{ "group": "a", "name": "stu2", "score": 96 }
{ "group": "b", "name": "stu3", "score": 80 }
{ "group": "b", "name": "stu4", "score": 100 }
```
如果需要得到所有记录中 `score` 的最小值，可以先将所有记录按照 `score` 排序，然后取出第一条记录的 `first`。  
If you need to get the minimum value of `score` in all records, you can first sort all records according to `score`, and then take the `first` of the first record.

 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .sort({
    score: 1
  })
  .group({
    _id: null,
    min: $.first('$score')
  })
  .end()
```
返回的数据结果如下：  
The returned data results are as follows:

 
```js
{ "_id": null, "min": 80 }
```

### last

返回指定字段在一组集合的最后一条记录对应的值。仅当这组集合是按照某种定义排序（ `sort` ）后，此操作才有意义。  
Returns the value corresponding to the specified field in the last record of a set. This operation only makes sense if the set of collections is sorted by some definition ( `sort` ).

      
####  API 说明
#### API Description
 `last` 的语法如下：  
 The syntax of `last` is as follows:

 
```js
db.command.aggregate.last(<表达式>)
```
表达式是形如 `$ + 指定字段` 的字符串。  
An expression is a string of the form `$ + specified field`.

 `last` 只能在 `group` 阶段被使用，并且需要配合 `sort` 才有意义。  
 `last` can only be used in the `group` phase, and only makes sense with `sort`.

 
####  示例代码
#### Sample code
 假设集合 `students` 的记录如下：  
 Suppose the collection `students` has the following records:

 
```js
{ "group": "a", "name": "stu1", "score": 84 }
{ "group": "a", "name": "stu2", "score": 96 }
{ "group": "b", "name": "stu3", "score": 80 }
{ "group": "b", "name": "stu4", "score": 100 }
```
如果需要得到所有记录中 `score` 的最大值，可以先将所有记录按照 `score` 排序，然后取出最后一条记录的 `last`。  
If you need to get the maximum value of `score` in all records, you can first sort all records according to `score`, and then take the `last` of the last record.

 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .sort({
    score: 1
  })
  .group({
    _id: null,
    max: $.last('$score')
  })
  .end()
```
返回的数据结果如下：  
The returned data results are as follows:

 
```js
{ "_id": null, "max": 100 }
```

### max

返回一组数值的最大值。  
Returns the maximum value of a set of values.

      
####  API 说明
#### API Description
 `max` 的语法如下：  
 The syntax of `max` is as follows:

 
```js
db.command.aggregate.max(<表达式>)
```
表达式是形如 `$ + 指定字段` 的字符串。  
An expression is a string of the form `$ + specified field`.

 
####  示例代码
#### Sample code
 假设集合 `students` 的记录如下：  
 Suppose the collection `students` has the following records:

 
```js
{ "group": "a", "name": "stu1", "score": 84 }
{ "group": "a", "name": "stu2", "score": 96 }
{ "group": "b", "name": "stu3", "score": 80 }
{ "group": "b", "name": "stu4", "score": 100 }
```
借助 `max` 可以统计不同组（ `group` ）中成绩的最高值，代码如下：  
With the help of `max`, you can count the highest value of grades in different groups ( `group` ), the code is as follows:

 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .group({
    _id: '$group',
    maxScore: $.max('$score')
  })
  .end()
```
返回的数据结果如下：  
The returned data results are as follows:

 
```js
{ "_id": "b", "maxScore": 100 }
{ "_id": "a", "maxScore": 96 }
...
```

### mergeObjects

见[mergeObjects](#mergeObjects)
see [mergeObjects](#mergeObjects)

### min

返回一组数值的最小值。  
Returns the minimum value of a set of values.

      
####  API 说明
#### API Description
 `min` 的语法如下：  
 The syntax for `min` is as follows:

 
```js
db.command.aggregate.min(<表达式>)
```
表达式是形如 `$ + 指定字段` 的字符串。  
An expression is a string of the form `$ + specified field`.

 
####  示例代码
#### Sample code
 假设集合 `students` 的记录如下：  
 Suppose the collection `students` has the following records:

 
```js
{ "group": "a", "name": "stu1", "score": 84 }
{ "group": "a", "name": "stu2", "score": 96 }
{ "group": "b", "name": "stu3", "score": 80 }
{ "group": "b", "name": "stu4", "score": 100 }
```
借助 `min` 可以统计不同组（ `group` ）中成绩的最低值，代码如下：  
With the help of `min`, you can count the lowest value of grades in different groups ( `group` ), the code is as follows:

 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .group({
    _id: '$group',
    minScore: $.min('$score')
  })
  .end()
```
返回的数据结果如下：  
The returned data results are as follows:

 
```js
{ "_id": "b", "minScore": 80 }
{ "_id": "a", "minScore": 84 }
```

### push

在 `group` 阶段，返回一组中表达式指定列与对应的值，一起组成的数组。  
In the `group` stage, returns a group of arrays consisting of the columns specified by the expression and the corresponding values.

     
####  API 说明
#### API Description
 `push` 语法如下：  
 The `push` syntax is as follows:

 
```js
db.command.aggregate.push({
  <字段名1>: <指定字段1>,
  <字段名2>: <指定字段2>,
  ...
})
```

####  示例代码
#### Sample code
 假设集合 `students` 的记录如下：  
 Suppose the collection `students` has the following records:

 
```js
{ "group": "a", "name": "stu1", "score": 84 }
{ "group": "a", "name": "stu2", "score": 96 }
{ "group": "b", "name": "stu3", "score": 80 }
{ "group": "b", "name": "stu4", "score": 100 }
```
借助 `push` 操作，对不同分组( `group` )的所有记录，聚合所有数据并且将其放入一个新的字段中，进一步结构化和语义化数据。  
With the `push` operation, for all records in different groups ( `group` ), aggregate all the data and put it into a new field, further structuring and semantic data.

 
```js
const $ = db.command.aggregate
let res = await db
  .collection('students')
  .aggregate()
  .group({
    _id: '$group',
    students: $.push({
      name: '$name',
      score: '$score'
    })
  })
  .end()
```
输出结果如下：  
The output is as follows:

 
```js
{ "_id": "b", "students": [{ "name": "stu3", "score": 80 }, { "name": "stu4", "score": 100 }] }
{ "_id": "a", "students": [{ "name": "stu1", "score": 84 }, { "name": "stu2", "score": 96 }] }
```

### stdDevPop

返回一组字段对应值的标准差。  
Returns the standard deviation of the corresponding values for a set of fields.

      
####  API 说明
#### API Description
 `stdDevPop` 的使用形式如下：  
 `stdDevPop` is used as follows:

 
```js
db.command.aggregate.stdDevPop(<表达式>)
```
表达式传入的是指定字段，指定字段对应的值的数据类型必须是 `number` ，否则结果会返回 `null`。  
The expression passes in the specified field, and the data type of the value corresponding to the specified field must be `number` , otherwise the result will return `null`.

 
####  示例代码
#### Sample code
 假设集合 `students` 的记录如下：`a` 组同学的成绩分别是84和96，`b`组同学的成绩分别是80和100。  
 Suppose the records of the set `students` are as follows: The grades of the students in the `a` group are 84 and 96, respectively, and the grades of the students in the `b` group are 80 and 100, respectively.

 
```js
{ "group":"a", "score":84 }
{ "group":"a", "score":96 }
{ "group":"b", "score":80 }
{ "group":"b", "score":100 }
```
可以用 `stdDevPop` 来分别计算 `a` 和 `b` 两组同学成绩的标准差，以此来比较哪一组同学的成绩更稳定。代码如下：  
You can use `stdDevPop` to calculate the standard deviation of the scores of the two groups of students `a` and `b` respectively, in order to compare which group of students has more stable scores. code show as below:  

 
```js
const $ = db.command.aggregate
let res = await db.collection('students').aggregate()
  .group({
    _id: '$group',
    stdDev: $.stdDevPop('$score')
  })
  .end()
```
返回的数据结果如下：  
The returned data results are as follows:

 
```js
{ "_id": "b", "stdDev": 10 }
{ "_id": "a", "stdDev": 6 }
```

### stdDevSamp

计算输入值的样本标准偏差。如果输入值代表数据总体，或者不概括更多的数据，请改用 `db.command.aggregate.stdDevPop`。  
Calculates the sample standard deviation of the input values. Use `db.command.aggregate.stdDevPop` instead if the input value represents the population of data, or does not generalize more data.

      
####  API 说明
#### API Description
 `stdDevSamp` 的使用形式如下：  
 `stdDevSamp` is used as follows:

 
```js
db.command.aggregate.stdDevSamp(<表达式>)
```
表达式传入的是指定字段，`stdDevSamp` 会自动忽略非数字值。如果指定字段所有的值均是非数字，那么结果返回 `null`。  
The expression passed in is the specified field, and `stdDevSamp` will automatically ignore non-numeric values. If all values of the specified field are non-numeric, the result returns `null`.

 
####  示例代码
#### Sample code
 假设集合 `students` 的记录如下：  
 Suppose the collection `students` has the following records:

 
```js
{ "score": 80 }
{ "score": 100 }
```
可以用 `stdDevSamp` 来计算成绩的标准样本偏差。代码如下：  
The standard sample deviation of grades can be calculated using `stdDevSamp`. code show as below:  

 
```js
const $ = db.command.aggregate
let res = await db.collection('students').aggregate()
  .group({
    _id: null,
    ageStdDev: $.stdDevSamp('$score')
  })
  .end()
```
返回的数据结果如下：  
The returned data results are as follows:

 
```js
{ "_id": null, "ageStdDev": 14.142135623730951 }
```
如果向集合 `students` 添加一条新记录，它的 `score` 字段类型是 `string`：  
If you add a new record to the collection `students`, its `score` field type is `string`:

 
```js
{ "score": "aa" }
```
用上面代码计算标准样本偏差时，`stdDevSamp` 会自动忽略类型不为 `number` 的记录，返回结果保持不变。
When using the above code to calculate standard sample deviation, `stdDevSamp` will automatically ignore records whose type is not `number`, and the returned result will remain unchanged.

### sum

<!--
/// meta
keyword: 求和
keyword: summation
-->

计算并且返回一组字段所有数值的总和。  
Calculates and returns the sum of all values in a set of fields.

      
####  API 说明
#### API Description
 `sum` 的使用形式如下：  
 `sum` is used in the following form:

 
```js
db.command.aggregate.sum(<表达式>)
```
表达式可以传入指定字段，也可以传入指定字段组成的列表。`sum` 会自动忽略非数字值。如果字段下的所有值均是非数字，那么结果返回 0。若传入数字常量，则当做所有记录该字段的值都给给定常量，在聚合时相加，最终值为输入记录数乘以常量。  
The expression can be passed in a specified field, or a list of specified fields can be passed in. `sum` automatically ignores non-numeric values. If all values under the field are non-numeric, the result returns 0. If a numeric constant is passed in, the value of this field in all records will be given the given constant, added during aggregation, and the final value will be the number of input records multiplied by the constant.

 
####  示例代码
#### Sample code
 假设代表商品的集合 `goods` 的记录如下：`price` 代表商品销售额，`cost` 代表商品成本  
 Suppose the records representing the collection of goods `goods` are as follows: `price` represents the sales of the goods, `cost` represents the cost of the goods

 
```js
{ "cost": -10, "price": 100 }
{ "cost": -15, "price": 1 }
{ "cost": -10, "price": 10 }
```


**单独字段**
**Separate field**

 借助 `sum` 可以计算所有商品的销售总和，代码如下：  
 With the help of `sum` you can calculate the total sales of all products, the code is as follows:

 
```js
const $ = db.command.aggregate
let res = await db
  .collection('goods')
  .aggregate()
  .group({
    _id: null,
    totalPrice: $.sum('$price')
  })
  .end()
```
返回的数据结果如下：销售额是 111  
The result of the returned data is as follows: Sales is 111

 
```js
{ "_id": null, "totalPrice": 111 }
```


**字段列表**
**Field List**

 如果需要计算所有商品的利润总额，那么需要将每条记录的 `cost` 和 `price` 相加得到此记录对应商品的利润。最后再计算所有商品的利润总额。  
 If you need to calculate the total profit of all items, you need to add the `cost` and `price` of each record to get the profit of the item corresponding to this record. Finally, calculate the total profit of all commodities.

 借助 `sum`，代码如下：  
 With `sum`, the code is as follows:

 
```js
const $ = db.command.aggregate
let res = await db
  .collection('goods')
  .aggregate()
  .group({
    _id: null,
    totalProfit: $.sum(
      $.sum(['$price', '$cost'])
    )
  })
  .end()
```
返回的数据结果如下：利润总额为 76  
The result of the returned data is as follows: The total profit is 76

 
```js
{ "_id": null, "totalProfit": 76 }
```

## 变量操作符
## variable operator

### let

自定义变量，并且在指定表达式中使用，返回的结果是表达式的结果。  
Custom variables, and used in the specified expression, the returned result is the result of the expression.

     
####  API 说明
#### API Description
 `let` 的语法如下：  
 The syntax of `let` is as follows:

 
```js
db.command.aggregate.let({
  vars: {
    <变量1>: <变量表达式>,
    <变量2>: <变量表达式>,
    ...
  },
  in: <结果表达式>
})
```
`vars` 中可以定义多个变量，变量的值由 `变量表达式` 计算而来，并且被定义的变量只有在 `in` 中的 `结果表达式` 才可以访问。  
Multiple variables can be defined in `vars`, the value of the variable is calculated from the `variable expression`, and the defined variable can only be accessed by the `result expression` in `in`.

 在 `in` 的结果表达式中访问自定义变量时候，请在变量名前加上双美元符号( `$$` )并用引号括起来。  
 When accessing custom variables in the result expression of `in`, precede the variable name with a double dollar sign ( `$$` ) and enclose it in quotes.

 
####  示例代码
#### Sample code
 假设代表商品的集合 `goods` 的记录如下：`price` 代表商品价格，`discount` 代表商品折扣率，`cost` 代表商品成本  
 Suppose the records representing the collection of goods `goods` are as follows: `price` represents the price of the goods, `discount` represents the discount rate of the goods, and `cost` represents the cost of the goods

 
```js
{ "cost": -10, "discount": 0.95, "price": 100 }
{ "cost": -15, "discount": 0.98, "price": 1 }
{ "cost": -10, "discount": 1, "price": 10 }
```
借助 `let` 可以定义并计算每件商品实际的销售价格，并将其赋值给自定义变量 `priceTotal`。最后再将 `priceTotal` 与 `cost` 进行取和( `sum` )运算，得到每件商品的利润。  
With `let`, you can define and calculate the actual selling price of each item, and assign it to the custom variable `priceTotal`. Finally, `priceTotal` and `cost` are summed ( `sum` ) to get the profit of each item.

 代码如下：  
 code show as below:  

 
```js
const $ = db.command.aggregate
let res = await db
  .collection('goods')
  .aggregate()
  .project({
    profit: $.let({
      vars: {
        priceTotal: $.multiply(['$price', '$discount'])
      },
      in: $.sum(['$$priceTotal', '$cost'])
    })
  })
  .end()
```
返回的数据结果如下：  
The returned data results are as follows:

 
```
{ "profit": 85 }
{ "profit": -14.02 }
{ "profit": 0 }
```

