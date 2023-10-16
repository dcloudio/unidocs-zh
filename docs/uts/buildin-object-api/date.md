# Date

创建一个 Date 实例，该实例呈现时间中的某个时刻。Date 对象则基于 Unix Time Stamp，即自 1970 年 1 月 1 日（UTC）起经过的毫秒数。

## 语法

```ts
new Date();
new Date(value);
new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
```

- 如果没有输入任何参数，则 Date 的构造器会依据系统设置的当前时间来创建一个 Date 对象。
- 如果提供了至少两个参数，其余的参数均会默认设置为 1（如果没有指定 day 参数）或者 0（如果没有指定 day 以外的参数）。
- uts 的时间由世界标准时间（UTC）1970 年 1 月 1 日开始，用毫秒计时，一天由 86,400,000 毫秒组成。Date 对象的范围是 -100,000,000 天至 100,000,000 天（等效的毫秒值）。

## 静态方法

### now()

<!-- UTSJSON.Date.now.description -->

<!-- UTSJSON.Date.now.param -->

<!-- UTSJSON.Date.now.returnValue -->

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
<!-- UTSJSON.Date.now.compatibility -->

## 实例方法


### toString()

<!-- UTSJSON.Date.toString.description -->

<!-- UTSJSON.Date.toString.param -->

<!-- UTSJSON.Date.toString.returnValue -->

<!-- UTSJSON.Date.toString.compatibility -->

### toDateString()

<!-- UTSJSON.Date.toDateString.description -->

<!-- UTSJSON.Date.toDateString.param -->

<!-- UTSJSON.Date.toDateString.returnValue -->

<!-- UTSJSON.Date.toDateString.compatibility -->

### getTime()

<!-- UTSJSON.Date.getTime.description -->

<!-- UTSJSON.Date.getTime.param -->

<!-- UTSJSON.Date.getTime.returnValue -->

<!-- UTSJSON.Date.getTime.compatibility -->

### getFullYear()

<!-- UTSJSON.Date.getFullYear.description -->

<!-- UTSJSON.Date.getFullYear.param -->

<!-- UTSJSON.Date.getFullYear.returnValue -->

<!-- UTSJSON.Date.getFullYear.compatibility -->

### getMonth()

<!-- UTSJSON.Date.getMonth.description -->

<!-- UTSJSON.Date.getMonth.param -->

<!-- UTSJSON.Date.getMonth.returnValue -->

<!-- UTSJSON.Date.getMonth.compatibility -->

### getDate()

<!-- UTSJSON.Date.getDate.description -->

<!-- UTSJSON.Date.getDate.param -->

<!-- UTSJSON.Date.getDate.returnValue -->

<!-- UTSJSON.Date.getDate.compatibility -->

### getDay()

<!-- UTSJSON.Date.getDay.description -->

<!-- UTSJSON.Date.getDay.param -->

<!-- UTSJSON.Date.getDay.returnValue -->

<!-- UTSJSON.Date.getDay.compatibility -->

### getHours()

<!-- UTSJSON.Date.getHours.description -->

<!-- UTSJSON.Date.getHours.param -->

<!-- UTSJSON.Date.getHours.returnValue -->

<!-- UTSJSON.Date.getHours.compatibility -->

### getMinutes()

<!-- UTSJSON.Date.getMinutes.description -->

<!-- UTSJSON.Date.getMinutes.param -->

<!-- UTSJSON.Date.getMinutes.returnValue -->

<!-- UTSJSON.Date.getMinutes.compatibility -->

### getSeconds()

<!-- UTSJSON.Date.getSeconds.description -->

<!-- UTSJSON.Date.getSeconds.param -->

<!-- UTSJSON.Date.getSeconds.returnValue -->

<!-- UTSJSON.Date.getSeconds.compatibility -->

### setTime(time)

<!-- UTSJSON.Date.setTime.description -->

<!-- UTSJSON.Date.setTime.param -->

<!-- UTSJSON.Date.setTime.returnValue -->

<!-- UTSJSON.Date.setTime.compatibility -->

### setMilliseconds(ms)

<!-- UTSJSON.Date.setMilliseconds.description -->

<!-- UTSJSON.Date.setMilliseconds.param -->

<!-- UTSJSON.Date.setMilliseconds.returnValue -->

<!-- UTSJSON.Date.setMilliseconds.compatibility -->

### setSeconds(sec)

<!-- UTSJSON.Date.setSeconds.description -->

<!-- UTSJSON.Date.setSeconds.param -->

<!-- UTSJSON.Date.setSeconds.returnValue -->

<!-- UTSJSON.Date.setSeconds.compatibility -->

### setMinutes(min)

<!-- UTSJSON.Date.setMinutes.description -->

<!-- UTSJSON.Date.setMinutes.param -->

<!-- UTSJSON.Date.setMinutes.returnValue -->

<!-- UTSJSON.Date.setMinutes.compatibility -->

### setHours(hours)

<!-- UTSJSON.Date.setHours.description -->

<!-- UTSJSON.Date.setHours.param -->

<!-- UTSJSON.Date.setHours.returnValue -->

<!-- UTSJSON.Date.setHours.compatibility -->

### setDate(date)

<!-- UTSJSON.Date.setDate.description -->

<!-- UTSJSON.Date.setDate.param -->

<!-- UTSJSON.Date.setDate.returnValue -->

<!-- UTSJSON.Date.setDate.compatibility -->

### setMonth(month)

<!-- UTSJSON.Date.setMonth.description -->

<!-- UTSJSON.Date.setMonth.param -->

<!-- UTSJSON.Date.setMonth.returnValue -->

<!-- UTSJSON.Date.setMonth.compatibility -->

### setFullYear(year)

<!-- UTSJSON.Date.setFullYear.description -->

<!-- UTSJSON.Date.setFullYear.param -->

<!-- UTSJSON.Date.setFullYear.returnValue -->

<!-- UTSJSON.Date.setFullYear.compatibility -->