# 定时触发

如果云函数需要定时/定期执行，即定时触发，您可以使用云函数定时触发器。已配置定时触发器的云函数，会在相应时间点被自动触发，函数的返回结果不会返回给调用方。
If a cloud function needs to be executed periodically/periodically, that is, a timed trigger, you can use a cloud function timed trigger. Cloud functions configured with timed triggers will be automatically triggered at the corresponding time point, and the return result of the function will not be returned to the caller.

使用定时触发可以执行一些跑批任务，阿里云可以在使用定时触发时将云函数最高超时时间设置为600秒，腾讯云定时触发最大超时时间为900秒。

在uniCloud web控制台点击需要添加触发器的云函数详情，创建云函数触发器，格式如下：
In the uniCloud web console, click the details of the cloud function that needs to add a trigger to create a cloud function trigger. The format is as follows:

**腾讯云**
**Tencent Cloud**

```js
// 参数是触发器数组，目前仅支持一个触发器，即数组只能填写一个，不可添加多个
// The parameter is an array of triggers, currently only one trigger is supported, that is, only one array can be filled, and multiple cannot be added
// 实际添加时请务必去除注释
// Be sure to remove the comment when actually adding
[
  {
    // name: 触发器的名字，规则见下方说明
    // name: The name of the trigger, see the rules below
    "name": "myTrigger",
    // type: 触发器类型，目前仅支持 timer （即定时触发器）
    // type: trigger type, currently only supports timer (ie timing trigger)
    "type": "timer",
    // config: 触发器配置，在定时触发器下，config 格式为 cron 表达式，规则见下方说明
    // config: Trigger configuration, under the timing trigger, the config format is cron expression, the rules are described below
    "config": "0 0 2 1 * * *"
  }
]
```

**阿里云**
**Ali Cloud**

```js
["cron:0 0 * * * *"]
```

**在package.json内配置定时触发时统一了腾讯阿里的写法，请参考：[云函数package.json](cf-functions.md#packagejson)**
**When configuring the timing trigger in package.json, the writing method of Tencent Ali is unified, please refer to: [Cloud Functions package.json](cf-functions.md#packagejson)**

::: warning 注意
- 阿里云正式版最低触发间隔为1分钟，腾讯云最低触发间隔为1秒
- 阿里云的cron表达式为6位，腾讯云为7位。相比腾讯云，阿里云缺少代表年份的第7位
- Alibaba Cloud's cron expression is 6-bit, and Tencent Cloud's is 7-bit. Compared with Tencent Cloud, Alibaba Cloud lacks the 7th place representing the year
- 定时触发使用的是utc+8的时间
- The timing trigger uses the time of utc+8
- 定时执行的时间选在较为常见集中的时刻有极低概率出现执行失败的情况。建议避免整点（特别是0点），错开定时触发高峰期进行执行
- 目前阿里云定时任务在运行时长超出配置的时间时会重试3次，此行为后续可能会调整。建议开发者将开启定时触发的云函数超时时间配置为600秒
:::


### 字段规则@config-param
- 定时触发器名称（name） ：最大支持60个字符，支持 `a-z`, `A-Z`, `0-9`, `-` 和 `_`。必须以字母开头，且一个函数下不支持同名的多个定时触发器。
- Timing trigger name (name): supports up to 60 characters, supports `a-z`, `A-Z`, `0-9`, `-` and `_`. Must start with a letter, and multiple timing triggers with the same name are not supported under one function.
- 定时触发器触发周期 （config）：指定的函数触发时间。填写自定义标准的 Cron 表达式来决定何时触发函数。有关 Cron 表达式的更多信息，请参考以下内容。
- Timing trigger trigger cycle (config): The specified function trigger time. Fill in custom standard Cron expressions to decide when to trigger the function. For more information on Cron expressions, please refer to the following.

### Cron 表达式@cron
Cron 表达式有七个**必需**字段，按空格分隔。其中，每个字段都有相应的取值范围：
Cron expressions have seven **required** fields, separated by spaces. Among them, each field has a corresponding value range:

|排序| 字段 | 值 | 通配符 |
|sort|field|value|wildcard|
|--| -- | -- | -- |
|第一位| 秒 | 0 - 59的整数 | , - * / |
|first bit|seconds|integer 0-59| ,-*/|
|第二位| 分钟 | 0 - 59的整数 | , - * / |
|second place|minute |integer 0 - 59 | , - * / |
|第三位| 小时 | 0 - 23的整数 | , - * / |
|third digit| hour | integer 0 - 23 | , - * / |
|第四位| 日 | 1 - 31的整数（需要考虑月的天数） | , - * / |
|4th digit| day | Integer from 1 to 31 (need to consider the number of days in the month) | , - * / |
|第五位| 月 | 1 - 12的整数 | , - * / |
|Fifth digit| month | integer from 1 to 12 | , - * / |
|第六位| 星期 | 0 - 6的整数，其中0指星期日，1指星期一，以此类推 | , - * / |
|Sixth digit| Week | An integer of 0 - 6, where 0 means Sunday, 1 means Monday, and so on | , - * / |
|第七位| 年 | 1970 - 2099的整数（阿里云不支持第七位） | , - * / |
|7th digit| Year | Integer from 1970 to 2099 (Alibaba Cloud does not support 7th digit) | , - * / |

### 通配符@cron-wildcard

| 通配符 | 含义 |
| Wildcard | Meaning |
| -- | -- |
| ，（逗号） | 代表取用逗号隔开的字符的并集。例如：在“小时”字段中 1，2，3 表示1点、2点和3点 |
| , (comma) | represents the union of characters separated by commas. For example: in the "hour" field 1, 2, 3 means 1 o'clock, 2 o'clock and 3 o'clock |
| - （短横线）| 包含指定范围的所有值。例如：在“日”字段中，1 - 15包含指定月份的1号到15号 |
| - (dash) | Contains all values in the specified range. Example: In the "Day" field, 1 - 15 contains the 1st to the 15th of the specified month |
| * （星号） | 表示所有值。在“小时”字段中，* 表示每个小时 |
| * (asterisk) | means all values. In the Hours field, * means every hour |
| / （正斜杠） | 指定增量。在“分钟”字段中，输入1/10以指定从第一分钟开始的每隔十分钟重复。例如，第11分钟、第21分钟和第31分钟，以此类推。正斜杠前后均需要有值，不可省略 |
| / (forward slash) | Specifies an increment. In the Minutes field, enter 1/10 to specify that it repeat every ten minutes starting with the first minute. For example, the 11th minute, the 21st minute, and the 31st minute, and so on. Values are required before and after the forward slash, which cannot be omitted |


- 腾讯云：在 Cron 表达式中的“日”和“星期”字段同时指定值时，两者为“或”关系，即两者的条件均生效。
- Tencent Cloud: When the "day" and "week" fields in the cron expression specify values at the same time, the two are in an "or" relationship, that is, the conditions of both take effect.
- 阿里云：在 Cron 表达式中的“日”和“星期”字段同时指定值时会报错，“秒”不支持特殊字符。
- Alibaba Cloud: An error will be reported when the "day" and "week" fields in the cron expression are specified at the same time, and "second" does not support special characters.

### 辅助工具

- [Cron表达式在线生成工具](http://cron.ciding.cc/)

### 示例@example

下面列举一些 Cron 表达式和相关含义：
Here are some Cron expressions and their associated meanings:

|           示例					|          说明																														|
|-------------------------|-------------------------																								|
| * * * * * * *						| 每1秒触发一次																														|
| */5 * * * * * *					| 每5秒触发一次																														|
| 0 * * * * * *						| 每1分钟触发一次																													|
| 0 */10 * * * * *				| 每10分钟触发一次																												|
| 0 0 * * * * *						| 每1小时触发一次（整点触发）																							|
| 0 20 * * * * *					| 每1小时触发一次（每小时的20分触发，如08:20:00、09:20:00）								|
| 0 0 */2 * * * *					| 每2小时触发一次（整点触发）																							|
| 0 0 18 * * * *					| 每天的下午6点触发一次（整点触发，18:00:00）															|
| 0 0 10,14,16 * * * *		| 每天上午10点，下午2点，4点触发（整点触发，10:00:00、14:00:00、16:00:00）|
| 0 */30 9-17 * * * *			| 每天上午9点到下午5点内每半小时触发																			|
| 0 0 2 1 * * *						| 每月的1日的凌晨2点触发																									|
| 0 15 10 * * 1-5 *				| 周一到周五每天上午10:15触发																							|


### 云函数、云对象入参说明@trigger-param

使用定时触发器调用云函数时云函数会收到特定的参数。两个平台的参数如下：
Cloud functions receive specific parameters when they are called using timed triggers. The parameters for the two platforms are as follows:

**腾讯云**
**Tencent Cloud**

```js
{	
	"Time":"2020-04-08T10:22:31Z", //调用的云函数的时间
	"TriggerName":"myTrigger", //触发器名
	"Type":"Timer" //触发器类型，目前只有Timer
}
```

**阿里云**
**Ali Cloud**

```js
{
  "triggerName": "TIMER_LATEST", //触发云函数的定时器配置内容，注意阿里云不会使用package.json内配置的触发器名称
  "triggerTime": "2020-04-08T10:22:31Z", //触发云函数时的时间戳，可能略晚于cron表达式时间
  // 以下三个属性新增于2023年7月14日
  "Time":"2020-04-08T10:22:31Z", //调用的云函数的时间
  "TriggerName":"TIMER_LATEST", //触发器名
  "Type":"Timer" //触发器类型，目前只有Timer
}
```

`2023年7月14日起`阿里云入参对齐腾讯云，保留上述`triggerName`和`triggerTime`（不再推荐使用这两个属性），增加`Time`、`TriggerName`、`Type`。

### 云对象使用定时触发@cloudobject
### Cloud objects use timing trigger @cloudobject

> 新增于HBuilderX 3.5.2
> Added in HBuilderX 3.5.2

> 2023年7月14日起_timing方法可以获取定时触发参数

配置方式和云函数一致，请参阅上方章节
The configuration method is the same as that of cloud functions, please refer to the above chapter

配置完成后会定时触发云对象内置特殊方法`_timing`
After the configuration is completed, the built-in special method `_timing` of the cloud object will be triggered periodically

云对象代码示例：
Cloud object code example:

```js
module.exports = {
	_timing: function (param) {
    console.log('触发时间：', param.Time)
		console.log('triggered by timing')
	}
}
```

**注意**
**Notice**

- 定时触发云对象时，`_before`和`_after`均不执行
