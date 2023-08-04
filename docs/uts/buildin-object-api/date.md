## Date

创建一个 Date 实例，该实例呈现时间中的某个时刻。Date 对象则基于 Unix Time Stamp，即自 1970 年 1 月 1 日（UTC）起经过的毫秒数。

### 语法

```ts
new Date();
new Date(value);
new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
```

- 如果没有输入任何参数，则 Date 的构造器会依据系统设置的当前时间来创建一个 Date 对象。
- 如果提供了至少两个参数，其余的参数均会默认设置为 1（如果没有指定 day 参数）或者 0（如果没有指定 day 以外的参数）。
- uts 的时间由世界标准时间（UTC）1970 年 1 月 1 日开始，用毫秒计时，一天由 86,400,000 毫秒组成。Date 对象的范围是 -100,000,000 天至 100,000,000 天（等效的毫秒值）。
- 
### 静态方法
### now

表示自 UNIX 纪元开始（1970 年 1 月 1 日 00:00:00 (UTC)）到当前时间的毫秒数。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

```ts
// this example takes 2 seconds to run
const start = Date.now()
console.log('starting timer...')
// expected output: starting timer...
setTimeout(() => {
  const millis = Date.now() - start
  console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`)
  // expected output: seconds elapsed = 2
}, 2000)
```

### 实例方法

### getDate

根据本地时间，返回一个指定的日期对象为一个月中的哪一日（从 1--31）。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

### getDay

根据本地时间，返回一个具体日期中一周的第几天，0 表示星期天。对于某个月中的第几天

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

### getFullYear

根据本地时间返回指定日期的年份。

### getHours

根据本地时间，返回一个指定的日期对象的小时。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

### getMilliseconds

根据本地时间，返回一个指定的日期对象的毫秒数。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

### getMinutes

根据本地时间，返回一个指定的日期对象的分钟数。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

### getMonth

指定的日期对象的月份，为基于 0 的值（0 表示一年中的第一月）。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

### getSeconds

根据本地时间，返回一个指定的日期对象的秒数。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

### getTime

返回一个时间的格林威治时间数值。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

### setDate

根据本地时间来指定一个日期对象的天数。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

### setFullYear

根据本地时间为一个日期对象设置年份。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|

### setHours

根据本地时间为一个日期对象设置小时数，返回从 1970-01-01 00:00:00 UTC 到更新后的 日期 对象实例所表示时间的毫秒数。

### setMilliseconds

根据本地时间设置一个日期对象的豪秒数。

### setMinutes

根据本地时间为一个日期对象设置分钟数。

### setMonth

根据本地时间为一个日期对象设置月份。

### setSeconds

根据本地时间设置一个日期对象的秒数。

### setTime

以一个表示从 1970-1-1 00:00:00 UTC 计时的毫秒数为来为 Date 对象设置时间。

**平台差异说明**

|JavaScript|Kotlin|Swift|
|:-:|:-:|:-:|
|√|√|√ `(3.6.11+)`|
