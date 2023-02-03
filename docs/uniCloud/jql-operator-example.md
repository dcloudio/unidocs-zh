# JQL 常用运算方法
# JQL common operation method

uniCloud的云数据库，提供了一批强大的运算方法。这些方法是数据库执行的，而不是云函数执行的。
uniCloud's cloud database provides a batch of powerful computing methods. These methods are executed by the database, not by the cloud function.

这些运算方法是与数据查询搭配使用的，它们可以对字段的值或字段的值的一部分进行运算，将运算后的结果返回给查询请求。
These calculation methods are used in conjunction with data query, and they can perform calculations on field values or part of field values, and return the calculated results to the query request.

数据库运算方法，提供了比传统SQL更大强大和灵活的查询。可以实现更多功能、可以一次性查询出期待的结果。不必多次查库多次运算，那样不仅代码复杂，而且会造成多次查库性能下降；如果使用计费云空间，使用这些方法还可以减少数据库查询次数。
The database operation method provides more powerful and flexible queries than traditional SQL. More functions can be realized, and the expected results can be queried at one time. It is not necessary to check the database multiple times for multiple calculations, which will not only complicate the code, but also cause performance degradation for multiple database queries; if you use billing cloud space, using these methods can also reduce the number of database queries.

比如sum()方法，可以对多行记录的某个字段值求和、可以对单行记录的若干字段的值求和，如果字段是一个数组，还可以对数组的各项求和。
For example, the sum() method can sum the values of a certain field in multiple rows of records, and can sum the values of several fields in a single row of records. If the field is an array, it can also sum the items of the array.

为方便书写，JQL内将数据库运算方法的用法进行了简化（相对于[原始数据库运算方法写法](cf-database-aggregate-operator.md)而言），主要是参数摊平，以字符串方式表达。以下是可以在JQL中使用的数据库运算方法
For the convenience of writing, the usage of the database operation method is simplified in JQL (compared to [the original database operation method writing method](cf-database-aggregate-operator.md)), mainly the parameters are flattened, and the method is a string Express. The following are the database operation methods that can be used in JQL
## 数据库运算方法汇总@summary
## Summary of database operation methods @summary
### 完整运算方法列表
### Complete list of operation methods

|运算方法	|用途|JQL简化用法|说明|
|Computation method |Application| Simplified usage of JQL|Description|
|---|---|---|---|
|abs|返回一个数字的绝对值|abs(表达式)|-	|
| abs | Returns the absolute value of a number | abs(expression) |- |
|add							|将数字相加或将数字加在日期上。如果参数中的其中一个值是日期，那么其他值将被视为毫秒数加在该日期上																	|add(表达式1,表达式2)																																				|-																				|
| add | Add numbers or add numbers to dates. If one of the values in the argument is a date, the other values will be treated as milliseconds added to that date | add(expression1,expression2) |- |
|ceil							|向上取整																																																													|ceil(表达式)																																								|-																				|
| ceil | round up | ceil(expression) |- |
|divide						|传入被除数和除数，求商																																																						|divide(表达式1,表达式2)																																		|-																				|
| divide |Input dividend and divisor, find quotient | divide(expression1,expression2) |- |
|exp							|取 e（自然对数的底数，欧拉数） 的 n 次方																																													|exp(表达式)																																								|-																				|
| exp | Take e (the base of natural logarithm, Euler's number) to the power n | exp(expression) |- |
|floor						|向下取整																																																													|floor(表达式)																																							|-																				|
| floor | round down | floor(expression) |- |
|ln								|计算给定数字在自然对数值																																																					|ln(表达式)																																									|-																				|
| ln | Calculates the natural logarithm value of the given number | ln(expression) |- |
|log							|计算给定数字在给定对数底下的 log 值																																															|log(表达式1,表达式2)																																				|-																				|
| log | Calculates the log value of a given number under a given logarithm | log(expression1,expression2) |- |
|log10						|计算给定数字在对数底为 10 下的 log 值																																														|log10(表达式)																																							|-																				|
| log10 | Calculates the log value of a given number with logarithm base 10 | log10(expression) |- |
|mod							|取模运算，第一个数字是被除数，第二个数字是除数																																										|mod(表达式1,表达式2)																																				|-																				|
| mod | Modulo operation, the first number is the dividend, the second number is the divisor | mod(expression1,expression2) |- |
|multiply					|取传入的数字参数相乘的结果																																																				|multiply(表达式1,表达式2)																																	|-																				|
| multiply |The result of multiplying the incoming number parameters | multiply(expression1,expression2) |- |
|pow							|求给定基数的指数次幂																																																							|pow(表达式1,表达式2)																																				|-																				|
| pow | Find the power of the exponent in the given base | pow(expression1,expression2) |- |
|sqrt							|求平方根																																																													|sqrt(表达式1,表达式2)																																			|-																				|
| sqrt | square root | sqrt(expression1,expression2) |- |
|subtract					|将两个数字相减然后返回差值，或将两个日期相减然后返回相差的毫秒数，或将一个日期减去一个数字返回结果的日期。												|subtract(表达式1,表达式2)																																	|-																				|
| subtract | Subtracts two numbers and returns the difference, or subtracts two dates and returns the difference in milliseconds, or subtracts a date and returns the date of the result. | subtract(expression1,expression2) |- |
|trunc						|将数字截断为整形																																																									|trunc(表达式)																																							|-																				|
| trunc | Truncates a number to an integer | trunc(expression) |- |
|arrayElemAt			|返回在指定数组下标的元素																																																					|arrayElemAt(表达式1,表达式2)																																|-																				|
| arrayElemAt | returns the element at the specified array index | arrayElemAt(expression1,expression2) |- |
|arrayToObject		|将一个数组转换为对象																																																							|arrayToObject(表达式)																																			|-																				|
| arrayToObject | converts an array to an object | arrayToObject(expression) |- |
|concatArrays			|将多个数组拼接成一个数组																																																					|concatArrays(表达式1,表达式2)																															|-																				|
| concatArrays | Concatenate multiple arrays into one array | concatArrays(expression1,expression2) |- |
|filter						|根据给定条件返回满足条件的数组的子集																																															|filter(input,as,cond)																																			|-																				|
| filter | Returns a subset of the array that satisfies the condition based on the given condition | filter(input,as,cond) |- |
|in								|给定一个值和一个数组，如果值在数组中则返回 true，否则返回 false																																	|in(表达式1,表达式2)																																				|-																				|
| in |Given a value and an array, return true if the value is in the array, otherwise return false | in(expression1,expression2) |- |
|indexOfArray			|在数组中找出等于给定值的第一个元素的下标，如果找不到则返回 -1																																		|indexOfArray(表达式1,表达式2)																															|-																				|
| indexOfArray | Find the subscript of the first element in the array equal to the given value, if not found, return -1 | indexOfArray(expression1,expression2) |- |
|isArray					|判断给定表达式是否是数组，返回布尔值																																															|isArray(表达式)																																						|-																				|
| isArray | Determine whether the given expression is an array, return a Boolean value | isArray(expression) |- |
|map							|类似 JavaScript Array 上的 map 方法，将给定数组的每个元素按给定转换方法转换后得出新的数组																				|map(input,as,in)																																						|-																				|
| map |Similar to the map method on JavaScript Array, convert each element of the given array according to the given conversion method to get a new array | map(input,as,in) |- |
|objectToArray		|将一个对象转换为数组。方法把对象的每个键值对都变成输出数组的一个元素，元素形如 `{ k: <key>, v: <value> }`												|objectToArray(表达式)																																			|-																				|
| objectToArray | Converts an object to an array. The method turns each key-value pair of the object into an element of the output array, and the element is in the form of `{ k: <key>, v: <value> }` | objectToArray(expression) |- |
|range						|返回一组生成的序列数字。给定开始值、结束值、非零的步长，range 会返回从开始值开始逐步增长、步长为给定步长、但不包括结束值的序列。	|range(表达式1,表达式2)																																			|-																				|
|range| Returns a range of generated sequence numbers. Given a start value, an end value, and a non-zero step size, range returns a sequence growing from the start value in steps of the given step size, excluding the end value. | range(expression1,expression2) |- |
|reduce						|类似 JavaScript 的 reduce 方法，应用一个表达式于数组各个元素然后归一成一个元素																										|reduce(input,initialValue,in)																															|-																				|
| reduce |Similar to JavaScript's reduce method, apply an expression to each element of the array and then normalize it into one element | reduce(input,initialValue,in) |- |
|reverseArray			|返回给定数组的倒序形式																																																						|reverseArray(表达式)																																				|-																				|
| reverseArray | Returns the reversed form of the given array | reverseArray(expression) |- |
|size							|返回数组长度																																																											|size(表达式)																																								|-																				|
| size | returns the length of the array | size(expression) |- |
|slice						|类似 JavaScritp 的 slice 方法。返回给定数组的指定子集																																						|slice(表达式1,表达式2)																																			|-																				|
| slice | Similar to JavaScript's slice method. returns the specified subset of the given array | slice(expression1,expression2) |- |
|zip							|把二维数组的第二维数组中的相同序号的元素分别拼装成一个新的数组进而组装成一个新的二维数组。																				|zip(inputs,useLongestLength,defaults)																											|-																				|
| zip | Assemble the elements with the same serial number in the second dimension of the two-dimensional array into a new array and then assemble a new two-dimensional array. | zip(inputs, useLongestLength, defaults) |- |
|and							|给定多个表达式，and 仅在所有表达式都返回 true 时返回 true，否则返回 false																												|and(表达式1,表达式2)																																				|-																				|
| and |Given multiple expressions, and returns true only if all expressions return true, otherwise returns false | and(expression1,expression2) |- |
|not							|给定一个表达式，如果表达式返回 true，则 not 返回 false，否则返回 true。注意表达式不能为逻辑表达式（and、or、nor、not）						|not(表达式)																																								|-																				|
| not | Given an expression, not returns false if the expression returns true, and true otherwise. Note that the expression cannot be a logical expression (and, or, nor, not) | not(expression) |- |
|or								|给定多个表达式，如果任意一个表达式返回 true，则 or 返回 true，否则返回 false																											|or(表达式1,表达式2)																																				|-																				|
| or |Given multiple expressions, if any expression returns true, then or returns true, otherwise returns false | or(expression1,expression2) |- |
|cmp							|给定两个值，返回其比较值。如果第一个值小于第二个值，返回 -1 如果第一个值大于第二个值，返回 1 如果两个值相等，返回 0							|cmp(表达式1,表达式2)																																				|-																				|
| cmp | Given two values, return their comparison value. If the first value is less than the second value, return -1 If the first value is greater than the second value, return 1 If the two values are equal, return 0 | cmp(expression1,expression2) |- |
|eq								|匹配两个值，如果相等则返回 true，否则返回 false																																									|eq(表达式1,表达式2)																																				|-																				|
| eq | Matches two values, returns true if equal, false otherwise | eq(expression1,expression2) |- |
|gt								|匹配两个值，如果前者大于后者则返回 true，否则返回 false																																					|gt(表达式1,表达式2)																																				|-																				|
| gt | matches two values, returns true if former is greater than latter, false otherwise | gt(expression1,expression2) |- |
|gte							|匹配两个值，如果前者大于或等于后者则返回 true，否则返回 false																																		|gte(表达式1,表达式2)																																				|-																				|
| gte | matches two values, returns true if former is greater than or equal to latter, false otherwise | gte(expression1,expression2) |- |
|lt								|匹配两个值，如果前者小于后者则返回 true，否则返回 false																																					|lt(表达式1,表达式2)																																				|-																				|
|lt|Matches two values, returns true if former is less than latter, false otherwise |lt(expression1,expression2) |- |
|lte							|匹配两个值，如果前者小于或等于后者则返回 true，否则返回 false																																		|lte(表达式1,表达式2)																																				|-																				|
| lte | matches two values, returns true if former is less than or equal to latter, false otherwise | lte(expression1,expression2) |- |
|neq							|匹配两个值，如果不相等则返回 true，否则返回 false																																								|neq(表达式1,表达式2)																																				|-																				|
| neq | matches two values, returns true if not equal, false otherwise | neq(expression1,expression2) |- |
|cond							|计算布尔表达式1，成立返回表达式2，否则返回表达式3																																													|cond(表达式1,表达式2,表达式3)																																			|-																				|
| cond | Calculate Boolean expression 1, return expression 2 if true, otherwise return expression 3 | cond(expression 1, expression 2, expression 3) |- |
|ifNull						|计算给定的表达式，如果表达式结果为 null、undefined 或者不存在，那么返回一个替代值；否则返回原值。																|ifNull(表达式1,表达式2)																																		|-																				|
| ifNull | Evaluates the given expression and returns a replacement value if the expression evaluates to null, undefined or does not exist; otherwise returns the original value. | ifNull(expression1,expression2) |- |
|switch						|根据给定的 switch-case-default 计算返回值																																												|switch(branches,default)																																		|-																				|
| switch | Calculate the return value according to the given switch-case-default | switch(branches,default) |- |
|dateFromParts		|给定日期的相关信息，构建并返回一个日期对象																																												|dateFromParts(year,month,day,hour,minute,second,millisecond,timezone)											|-																				|
| dateFromParts |Given information about a date, construct and return a date object | dateFromParts(year,month,day,hour,minute,second,millisecond,timezone) |- |
|isoDateFromParts	|给定日期的相关信息，构建并返回一个日期对象																																												|isoDateFromParts(isoWeekYear,isoWeek,isoDayOfWeek,hour,minute,second,millisecond,timezone)	|-																				|
| isoDateFromParts |Given information about a date, construct and return a date object | isoDateFromParts(isoWeekYear,isoWeek,isoDayOfWeek,hour,minute,second,millisecond,timezone) |- |
|dateFromString		|将一个日期/时间字符串转换为日期对象																																															|dateFromString(dateString,format,timezone,onError,onNull)																	|-																				|
| dateFromString | Convert a date/time string to a date object | dateFromString(dateString, format, timezone, onError, onNull) |- |
|dateToString			|根据指定的表达式将日期对象格式化为符合要求的字符串																																								|dateToString(date,format,timezone,onNull)																									|-																				|
| dateToString | Format the date object into a string that meets the requirements according to the specified expression | dateToString(date,format,timezone,onNull) |- |
|dayOfMonth				|返回日期字段对应的天数（一个月中的哪一天），是一个介于 1 至 31 之间的数字																												|dayOfMonth(date,timezone)																																	|-																				|
| dayOfMonth | Returns the day (the day of the month) corresponding to the date field, which is a number between 1 and 31 | dayOfMonth(date,timezone) |- |
|dayOfWeek				|返回日期字段对应的天数（一周中的第几天），是一个介于 1（周日）到 7（周六）之间的整数																							|dayOfWeek(date,timezone)																																		|-																				|
| dayOfWeek | Returns the day number (the day of the week) corresponding to the date field, which is an integer between 1 (Sunday) and 7 (Saturday) | dayOfWeek(date,timezone) |- |
|dayOfYear				|返回日期字段对应的天数（一年中的第几天），是一个介于 1 到 366 之间的整数																													|dayOfYear(date,timezone)																																		|-																				|
| dayOfYear | Returns the day number (the day of the year) corresponding to the date field, which is an integer between 1 and 366 | dayOfYear(date,timezone) |- |
|hour							|返回日期字段对应的小时数，是一个介于 0 到 23 之间的整数。																																				|hour(date,timezone)																																				|-																				|
| hour | Returns the hour corresponding to the date field, which is an integer between 0 and 23. | hour(date,timezone) |- |
|isoDayOfWeek			|返回日期字段对应的 ISO 8601 标准的天数（一周中的第几天），是一个介于 1（周一）到 7（周日）之间的整数。														|isoDayOfWeek(date,timezone)																																|-																				|
| isoDayOfWeek | Returns the ISO 8601 day number (day of the week) corresponding to the date field, as an integer between 1 (Monday) and 7 (Sunday). | isoDayOfWeek(date, timezone) |- |
|isoWeek					|返回日期字段对应的 ISO 8601 标准的周数（一年中的第几周），是一个介于 1 到 53 之间的整数。																				|isoWeek(date,timezone)																																			|-																				|
| isoWeek | Returns the ISO 8601 week number (week of the year) corresponding to the date field, which is an integer between 1 and 53. | isoWeek(date, timezone) |- |
|isoWeekYear			|返回日期字段对应的 ISO 8601 标准的天数（一年中的第几天）																																					|isoWeekYear(date,timezone)																																	|-																				|
| isoWeekYear | Returns the ISO 8601 day number (day of the year) corresponding to the date field | isoWeekYear(date,timezone) |- |
|millisecond			|返回日期字段对应的毫秒数，是一个介于 0 到 999 之间的整数																																					|millisecond(date,timezone)																																	|-																				|
| millisecond | returns the milliseconds corresponding to the date field, which is an integer between 0 and 999 | millisecond(date,timezone) |- |
|minute						|返回日期字段对应的分钟数，是一个介于 0 到 59 之间的整数																																					|minute(date,timezone)																																			|-																				|
| minute | Returns the minute corresponding to the date field, which is an integer between 0 and 59 | minute(date,timezone) |- |
|month						|返回日期字段对应的月份，是一个介于 1 到 12 之间的整数																																						|month(date,timezone)																																				|-																				|
| month | Returns the month corresponding to the date field, which is an integer between 1 and 12 | month(date,timezone) |- |
|second						|返回日期字段对应的秒数，是一个介于 0 到 59 之间的整数，在特殊情况下（闰秒）可能等于 60																						|second(date,timezone)																																			|-																				|
| second | Returns the second corresponding to the date field, an integer between 0 and 59, which may be equal to 60 in special cases (leap seconds) | second(date,timezone) |- |
|week							|返回日期字段对应的周数（一年中的第几周），是一个介于 0 到 53 之间的整数																													|week(date,timezone)																																				|-																				|
| week | Returns the week number (week of the year) corresponding to the date field, which is an integer between 0 and 53 | week(date,timezone) |- |
|year							|返回日期字段对应的年份																																																						|year(date,timezone)																																				|-																				|
| year | returns the year corresponding to the date field | year(date,timezone) |- |
|timestampToDate	|传入一个时间戳，返回对应的日期对象																																																|timestampToDate(timestamp)																																	|仅JQL字符串内支持，HBuilderX 3.1.0起支持	|
| timestampToDate | Pass in a timestamp and return the corresponding date object | timestampToDate(timestamp) | Only supported in JQL strings, supported since HBuilderX 3.1.0 |
|literal					|直接返回一个值的字面量，不经过任何解析和处理																																											|literal(表达式)																																						|-																				|
| literal | directly returns a literal value without any parsing and processing | literal(expression) |- |
|mergeObjects			|将多个对象合并为单个对象																																																					|mergeObjects(表达式1,表达式2)																															|-																				|
| mergeObjects | Merge multiple objects into a single object | mergeObjects(expression1,expression2) |- |
|allElementsTrue	|输入一个数组，或者数组字段的表达式。如果数组中所有元素均为真值，那么返回 true，否则返回 false。空数组永远返回 true								|allElementsTrue(表达式1,表达式2)																														|-																				|
| allElementsTrue | Enter an array, or an expression for an array field. Returns true if all elements in the array are true, otherwise returns false. An empty array always returns true | allElementsTrue(expression1,expression2) |- |
|anyElementTrue		|输入一个数组，或者数组字段的表达式。如果数组中任意一个元素为真值，那么返回 true，否则返回 false。空数组永远返回 false						|anyElementTrue(表达式1,表达式2)																														|-																				|
| anyElementTrue | Enter an array, or an expression for an array field. Returns true if any element in the array is true, otherwise returns false. An empty array always returns false | anyElementTrue(expression1,expression2) |- |
|setDifference		|输入两个集合，输出只存在于第一个集合中的元素																																											|setDifference(表达式1,表达式2)																															|-																				|
| setDifference | Input two collections, output elements that only exist in the first collection | setDifference(expression1,expression2) |- |
|setEquals				|输入两个集合，判断两个集合中包含的元素是否相同（不考虑顺序、去重）																																|setEquals(表达式1,表达式2)																																	|-																				|
| setEquals | Input two collections, judge whether the elements contained in the two collections are the same (regardless of order, deduplication) | setEquals(expression 1, expression 2) |- |
|setIntersection	|输入两个集合，输出两个集合的交集																																																	|setIntersection(表达式1,表达式2)																														|-																				|
| setIntersection | Input two sets, output the intersection of the two sets | setIntersection(expression1,expression2) |- |
|setIsSubset			|输入两个集合，判断第一个集合是否是第二个集合的子集																																								|setIsSubset(表达式1,表达式2)																																|-																				|
| setIsSubset |Input two sets, judge whether the first set is a subset of the second set | setIsSubset(expression1,expression2) |- |
|setUnion					|输入两个集合，输出两个集合的并集																																																	|setUnion(表达式1,表达式2)																																	|-																				|
| setUnion | Input two sets, output the union of two sets | setUnion(expression1,expression2) |- |
|concat						|连接字符串，返回拼接后的字符串																																																		|concat(表达式1,表达式2)																																		|-																				|
| concat |Concatenate strings and return the concatenated string | concat(expression1,expression2) |- |
|indexOfBytes			|在目标字符串中查找子字符串，并返回第一次出现的 UTF-8 的字节索引（从0开始）。如果不存在子字符串，返回 -1													|indexOfBytes(表达式1,表达式2)																															|-																				|
| indexOfBytes | Finds a substring in the target string and returns the UTF-8 byte index (starting from 0) of the first occurrence. If there is no substring, return -1 | indexOfBytes(expression1,expression2) |- |
|indexOfCP				|在目标字符串中查找子字符串，并返回第一次出现的 UTF-8 的 code point 索引（从0开始）。如果不存在子字符串，返回 -1									|indexOfCP(表达式1,表达式2)																																	|-																				|
| indexOfCP | Finds a substring in the target string and returns the UTF-8 code point index (starting from 0) of the first occurrence. If there is no substring, return -1 | indexOfCP(expression1,expression2) |- |
|split						|按照分隔符分隔数组，并且删除分隔符，返回子字符串组成的数组。如果字符串无法找到分隔符进行分隔，返回原字符串作为数组的唯一元素			|split(表达式1,表达式2)																																			|-																				|
|split|Splits an array by a delimiter and removes the delimiter, returning an array of substrings. If the string cannot be separated by a delimiter, return the original string as the only element of the array | split(expression1,expression2) |- |
|strLenBytes			|计算并返回指定字符串中 utf-8 编码的字节数量																																											|strLenBytes(表达式)																																				|-																				|
| strLenBytes | Calculate and return the number of utf-8 encoded bytes in the specified string | strLenBytes(expression) |- |
|strLenCP					|计算并返回指定字符串的UTF-8 code points 数量																																											|strLenCP(表达式)																																						|-																				|
| strLenCP | Calculate and return the number of UTF-8 code points of the specified string | strLenCP(expression) |- |
|strcasecmp				|对两个字符串在不区分大小写的情况下进行大小比较，并返回比较的结果																																	|strcasecmp(表达式1,表达式2)																																|-																				|
| strcasecmp |Compare two character strings without case sensitivity, and return the comparison result | strcasecmp(expression1,expression2) |- |
|substr						|返回字符串从指定位置开始的指定长度的子字符串																																											|substr(表达式1,表达式2)																																		|-																				|
| substr | Returns a substring of the specified length starting at the specified position | substr(expression1,expression2) |- |
|substrBytes			|返回字符串从指定位置开始的指定长度的子字符串。子字符串是由字符串中指定的 UTF-8 字节索引的字符开始，长度为指定的字节数						|substrBytes(表达式1,表达式2)																																|-																				|
| substrBytes | Returns a substring of the specified length of the string starting at the specified position. The substring starts with the character at the specified UTF-8 byte index in the string and has a length of the specified number of bytes | substrBytes(expression1,expression2) |- |
|substrCP					|返回字符串从指定位置开始的指定长度的子字符串。子字符串是由字符串中指定的 UTF-8 字节索引的字符开始，长度为指定的字节数						|substrCP(表达式1,表达式2)																																	|-																				|
| substrCP | Returns a substring of a specified length of a string starting at a specified position. The substring starts with the character at the specified UTF-8 byte index in the string and has a length of the specified number of bytes | substrCP(expression1,expression2) |- |
|toLower					|将字符串转化为小写并返回																																																					|toLower(表达式)																																						|-																				|
| toLower | Convert the string to lowercase and return | toLower(expression) |- |
|toUpper					|将字符串转化为大写并返回																																																					|toUpper(表达式)																																						|-																				|
| toUpper | convert string to uppercase and return | toUpper(expression) |- |
|addToSet					|聚合运算符。向数组中添加值，如果数组中已存在该值，不执行任何操作。它只能在 group stage 中使用																		|addToSet(表达式)																																						|-																				|
| addToSet | Aggregation operator. Adds a value to the array, or does nothing if the value already exists in the array. It can only be used in group stage | addToSet(expression) |- |
|avg							|返回指定表达式对应数据的平均值																																																		|avg(表达式)																																								|-																				|
| avg | returns the average value of the data corresponding to the specified expression | avg(expression) |- |
|first						|返回指定字段在一组集合的第一条记录对应的值。仅当这组集合是按照某种定义排序（ sort ）后，此操作才有意义														|first(表达式)																																							|-																				|
| first | Returns the value corresponding to the first record of the specified field in a set. This operation only makes sense if the set of collections is sorted by some definition ( sort ) | first(expression) |- |
|last							|返回指定字段在一组集合的最后一条记录对应的值。仅当这组集合是按照某种定义排序（ sort ）后，此操作才有意义。												|last(表达式)																																								|-																				|
| last | Returns the value corresponding to the last record of the specified field in a set. This operation only makes sense if the set of collections is sorted ( sort ) by some definition. | last(expression) |- |
|max							|返回一组数值的最大值																																																							|max(表达式)																																								|-																				|
| max | Returns the maximum value of a set of values | max(expression) |- |
|min							|返回一组数值的最小值																																																							|min(表达式)																																								|-																				|
| min | Returns the minimum value of a set of values | min(expression) |- |
|push							|返回一组中表达式指定列与对应的值，一起组成的数组																																									|push(表达式)																																								|-																				|
| push | Returns an array of columns specified by expressions and corresponding values in a group | push(expression) |- |
|stdDevPop				|返回一组字段对应值的标准差																																																				|stdDevPop(表达式)																																					|-																				|
| stdDevPop | Returns the standard deviation of values corresponding to a set of fields | stdDevPop(expression) |- |
|stdDevSamp				|计算输入值的样本标准偏差																																																					|stdDevSamp(表达式)																																					|-																				|
| stdDevSamp | Computes the sample standard deviation of input values | stdDevSamp(expression) |- |
|sum							|在groupField内返回一组字段所有数值的总和，非groupField内返回一个数组所有元素的和																									|sum(表达式)																																								|-																				|
| sum | Returns the sum of all values of a group of fields in groupField, and returns the sum of all elements of an array in non-groupField | sum(expression) |- |
|let							|自定义变量，并且在指定表达式中使用，返回的结果是表达式的结果																																			|let(vars,in)																																								|-																				|
| let | Customize variables and use them in the specified expression, the returned result is the result of the expression | let(vars,in) |- |

以上操作符还可以组合使用
The above operators can also be used in combination

例：数据表article内有以下数据
Example: The data table article has the following data

```js
{
  "_id": "1",
  "publish_date": 1611141512751,
  "content": "hello uniCloud content 01",
  "content": "hello uniCloud title 01",
}

{
  "_id": "2",
  "publish_date": 1611141512752,
  "content": "hello uniCloud content 02",
  "content": "hello uniCloud title 02",
}

{
  "_id": "3",
  "publish_date": 1611141512753,
  "content": "hello uniCloud content 03",
  "content": "hello uniCloud title 03",
}
```

可以通过以下查询将publish_date字段从时间戳转为`2021-01-20`形式，然后进行按天进行统计
You can use the following query to convert the publish_date field from timestamp to `2021-01-20`, and then perform statistics by day

```js
const res = await db.collection('article')
.groupBy('dateToString(add(new Date(0),publish_date),"%Y-%m-%d","+0800") as publish_date_str')
.groupField('count(*) as total')
.get()
```

上述代码使用add方法将publish_date时间戳转为日期类型，再用dateToString将上一步的日期按照时区'+0800'（北京时间），格式化为`4位年-2位月-2位日`格式，完整格式化参数请参考[dateToString](uniCloud/cf-database-aggregate-operator.md?id=datetostring)。
The above code uses the add method to convert the publish_date timestamp into a date type, and then uses dateToString to format the date in the previous step in the format of `4-digit year-2-digit month-2-digit day` according to the time zone '+0800' (Beijing time) , please refer to [dateToString](uniCloud/cf-database-aggregate-operator.md?id=datetostring) for complete format parameters.

上述代码执行结果为
The above code execution result is

```js
res = {
  result: {
    data: [{
      publish_date_str: '2021-01-20',
      total: 3
    }]
  }
}
```

**注意**
**Notice**

运算方法中仅数据库字段可以直接去除引号作为变量书写，其他字符串仍要写成字符串形式
In the calculation method, only database fields can be directly written as variables without quotation marks, and other strings must still be written as strings

例：
example:

数据库内有以下数据：
The database contains the following data:

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

云函数内对以下数据中的sales字段取整
Round the sales field in the following data in the cloud function

```js
const db = uniCloud.database()
const $ = db.command.aggregate
let res = await db.collection('stats').aggregate()
  .project({
    truncated: $.map({
      input: '$sales',
      as: 'num',
      in: $.trunc('$$num'),
    })
  })
  .end()
```

JQL语法内同样功能的实现
Realization of the same function in JQL syntax

```js
const db = uniCloud.database()
const res = await db.collection('stats')
.field('map(sales,"num",trunc("$$num")) as truncated')
.get()
```

### 分组运算方法@accumulator
### Grouping operation method @accumulator

分组运算方法是专用于统计汇总的数据库运算方法。它也是数据库的方法，而不是js的方法。
The grouping operation method is a database operation method dedicated to statistical summarization. It's also a database method, not a js method.

**等同于mongoDB累计器操作符概念**
**Equivalent to mongoDB accumulator operator concept**

groupField内可使用且仅能使用如下运算方法。
Only the following calculation methods can be used in groupField.

|操作符			|用途																										|用法					|说明								|
|Operator |Usage |Usage |Description |
|---			|---																										|---					|---								|
|addToSet		|向数组中添加值，如果数组中已存在该值，不执行任何操作														|addToSet(表达式)		|-									|
| addToSet | Adds a value to the array, or does nothing if the value already exists in the array | addToSet(expression) |- |
|avg			|返回指定表达式对应数据的平均值																				|avg(表达式)			|-									|
| avg | returns the average value of the data corresponding to the specified expression | avg(expression) |- |
|first			|返回指定字段在一组集合的第一条记录对应的值。仅当这组集合是按照某种定义排序（ sort ）后，此操作才有意义		|first(表达式)			|-									|
| first | Returns the value corresponding to the first record of the specified field in a set. This operation only makes sense if the collection is sorted by some definition ( sort ) | first(expression) |- |
|last			|返回指定字段在一组集合的最后一条记录对应的值。仅当这组集合是按照某种定义排序（ sort ）后，此操作才有意义。	|last(表达式)			|-									|
| last | Returns the value corresponding to the last record of the specified field in a set. This operation only makes sense if the set of collections is sorted ( sort ) by some definition. | last(expression) |- |
|max			|返回一组数值的最大值																						|max(表达式)			|-									|
| max | Returns the maximum value of a set of values | max(expression) |- |
|min			|返回一组数值的最小值																						|min(表达式)			|-									|
| min | Returns the minimum value of a set of values | min(expression) |- |
|push			|返回一组中表达式指定列与对应的值，一起组成的数组															|push(表达式)			|-									|
| push | Returns an array of columns specified by expressions and corresponding values in a group | push(expression) |- |
|stdDevPop		|返回一组字段对应值的标准差																					|stdDevPop(表达式)		|-									|
| stdDevPop | Returns the standard deviation of values corresponding to a set of fields | stdDevPop(expression) |- |
|stdDevSamp		|计算输入值的样本标准偏差																					|stdDevSamp(表达式)		|-									|
| stdDevSamp | Computes the sample standard deviation of the input values | stdDevSamp(expression) |- |
|sum			|返回一组字段所有数值的总和																					|sum(表达式)			|-									|
| sum | Returns the sum of all values in a set of fields | sum(expression) |- |
|mergeObjects	|将一组对象合并为一个对象																					|mergeObjects(表达式)	|在groupField内使用时仅接收一个参数	|
| mergeObjects | Merges a group of objects into a single object | mergeObjects(expression) | Receives only one argument when used inside a groupField |


## 常用运算方法示例@demo
## Examples of common operation methods @demo
以下列举常用的运算方法在 JQL 中的应用
The following lists the application of common operation methods in JQL

### 算术运算方法
### Arithmetic methods
算术表达式对数字执行数学运算。一些算术表达式也可以支持日期算术。
Arithmetic expressions perform mathematical operations on numbers. Some arithmetic expressions can also support date arithmetic.
#### abs
返回一个数字的绝对值。
Returns the absolute value of a number.

示例集合 `test` 数据示例：
Example collection `test` data example:
```javascript
{ _id: 1, start: 5 }
{ _id: 2, start: -4 }
{ _id: 3, start: -9 }
{ _id: 4, start: 6 }
```
计算 `start` 的绝对值：
Compute the absolute value of `start`:
```javascript
db.collection('test').field('abs(satrt) as absStart').get()
```
执行结果：
Results of the:
```javascript
{ _id: 1, absStart: 5 }
{ _id: 2, absStart: 4 }
{ _id: 3, absStart: 9 }
{ _id: 4, absStart: 6 }
```
#### add
将数字相加或将数字加在日期上。如果参数中的其中一个值是日期，那么其他值将被视为毫秒数加在该日期上。
Add numbers or add numbers to dates. If one of the values in the parameter is a date, the other values are treated as milliseconds added to that date.

示例集合 `test` 数据示例：
Example collection `test` data example:
```javascript
{ _id: 1, price: 5, fee: 1, date: 1667804052630 }
{ _id: 2, price: 4, fee: 5, date: 1667804052630 }
{ _id: 3, price: 9, fee: 2, date: 1667804052630 }
{ _id: 4, price: 6, fee: 8, date: 1667804052630 }
```

示例：
Example:

**加数字**
**add numbers**

```javascript
db.collection('test').field('add(price, fee) as total').get()
```

执行结果：
Results of the:

```javascript
{ _id: 1, total: 6 }
{ _id: 2, total: 9 }
{ _id: 3, total: 11 }
{ _id: 4, total: 14 }
```

**在当前日期上加上1天**
**Add 1 day to the current date**

```javascript
db.collection('test').field('add(date, 24 * 60 * 60 * 1000) as newDate').get()
```
执行结果：
Results of the:
```javascript
{ _id: 1, newDate: 1667890452630 }
{ _id: 2, newDate: 1667890452630 }
{ _id: 3, newDate: 1667890452630 }
{ _id: 4, newDate: 1667890452630 }
```

#### ceil
向上取整。
Rounded up.

集合 `test` 数据如下：
The collection `test` data is as follows:
```javascript
{ _id: 1, value: 9.25 }
{ _id: 2, value: 8.73 }
{ _id: 3, value: 4.32 }
{ _id: 4, value: -5.34 }
```

对 value 字段向上取整：
Round up the value field:
```javascript
db.collection('test').field('ceil(value) as ceilingVaule').get()
```
执行结果：
Results of the:
```javascript
{ _id: 1, value: 10 }
{ _id: 2, value: 10 }
{ _id: 3, value: 5 }
{ _id: 4, value: -5 }
```

#### divide
传入被除数和除数，求商。
Pass in the dividend and divisor to find the quotient.

示例集合 `test` 数据如下：
The example collection `test` data is as follows:
```javascript
{ "_id" : 1, "name" : "A", "hours" : 80, "resources" : 7 }
{ "_id" : 2, "name" : "B", "hours" : 40, "resources" : 4 }
```

将`hours`字段除以8以计算工作日数：
Divide the `hours` field by 8 to calculate the number of working days:
```javascript
db.collection('test').field('divide(hours, 8) as workdays').get()
```
执行结果：
Results of the:
```javascript
{ "_id" : 1, "workdays" : 10 }
{ "_id" : 2, "workdays" : 8 }
```
#### floor
向下取整。
Round down.

示例集合 `test` 数据如下：
The example collection `test` data is as follows:
```javascript
{ _id: 1, value: 9.25 }
{ _id: 2, value: 8.73 }
{ _id: 3, value: 4.32 }
{ _id: 4, value: -5.34 }
```

对 value 进行向下取整：
Round value down:
```javascript
db.collection('test').field('floor(value) as floorValue').get()
```
执行结果：
Results of the:
```javascript
{ _id: 1, floorValue: 9 }
{ _id: 2, floorValue: 8 }
{ _id: 3, floorValue: 4 }
{ _id: 4, floorValue: -6 }
```

#### ln
计算给定数字在自然对数值。
Calculates the natural logarithm value of the given number.

示例集合 `test` 数据如下：
The example collection `test` data is as follows:
```javascript
{ _id: 1, year: "2000", sales: 8700000 }
{ _id: 2, year: "2005", sales: 5000000 }
{ _id: 3, year: "2010", sales: 6250000 }
```

转换 test 数据示例如下：
An example of converting test data is as follows:
```javascript
db.collection('test').field('year as x, ln(sales) as y').get()
```
执行结果：
Results of the:
```javascript
{ "_id" : 1, "x" : "2000", "y" : 15.978833583624812 }
{ "_id" : 2, "x" : "2005", "y" : 15.424948470398375 }
{ "_id" : 3, "x" : "2010", "y" : 15.648092021712584 }
```
#### log
计算给定数字在给定对数底下的 `log` 值。
Computes the `log` value of a given number at a given logarithm.

示例集合 `test` 数据如下：
The example collection `test` data is as follows:
```javascript
{ _id: 1, positiveInt: 5 }
{ _id: 2, positiveInt: 2 }
{ _id: 3, positiveInt: 23 }
{ _id: 4, positiveInt: 10 }
```

在计算中使用 $ log_2 $ 来确定表示的值所需的位数 positiveInt：
Use $log_2$ in the calculation to determine the number of digits required to represent the value of positiveInt:
```javascript
db.collection('test').field('floor(add(log(positiveInt, 2))) as bitsNeeded')
```

执行结果：
Results of the:
```javascript
{ "_id" : 1, "bitsNeeded" : 3 }
{ "_id" : 2, "bitsNeeded" : 2 }
{ "_id" : 3, "bitsNeeded" : 5 }
{ "_id" : 4, "bitsNeeded" : 4 }
```
#### log10
计算给定数字在对数底为 10 下的 `log` 值。
Computes the `log` value of the given number at log base 10.

示例集合 `test` 数据如下：
The example collection `test` data is as follows:
```javascript
{ _id: 1, H3O: 0.0025 }
{ _id: 2, H3O: 0.001 }
{ _id: 3, H3O: 0.02 }
```

以下示例计算样品的pH值：
The following example calculates the pH of a sample:
```javascript
db.collection('test').field('multiply(1, log10(H3O)) as pH').get()
```

执行结果：
Results of the:
```javascript
{ "_id" : 1, "pH" : 2.6020599913279625 }
{ "_id" : 2, "pH" : 3 }
{ "_id" : 3, "pH" : 1.6989700043360187 }
```
#### mod
取模运算，第一个数字是被除数，第二个数字是除数。
Modulo operation, the first number is the dividend and the second number is the divisor.

示例集合 `test` 数据如下：
The example collection `test` data is as follows:
```javascript
{ "_id" : 1, "project" : "A", "hours" : 80, "tasks" : 7 }
{ "_id" : 2, "project" : "B", "hours" : 40, "tasks" : 4 }
```

使用 `mod` 表达式返回 `hours` 字段的其余部分除以 `tasks` 字段：
Use the `mod` expression to return the remainder of the `hours` field divided by the `tasks` field:
```javascript
db.collection('test').field('mod(hours, tasks) as remainder').get()
```

执行结果：
Results of the:
```javascript
{ "_id" : 1, "remainder" : 3 }
{ "_id" : 2, "remainder" : 0 }
```
#### multiply
取传入的数字参数相乘的结果。
Gets the result of multiplying the passed in numeric arguments.

示例集合 `test` 数据如下：
The example collection `test` data is as follows:
```javascript
{ "_id" : 1, "item" : "abc", "price" : 10, "quantity": 2 }
{ "_id" : 2, "item" : "jkl", "price" : 20, "quantity": 1 }
{ "_id" : 3, "item" : "xyz", "price" : 5, "quantity": 10 }
```

使用 `multiply` 表达式将 `price` 和 `quantity` 字段相乘：
Use the `multiply` expression to multiply the `price` and `quantity` fields:
```javascript
db.collection('test').field('multiply(price, quantity) as total').get()
```

执行结果：
Results of the:
```javascript
{ "_id" : 1, "total" : 20 }
{ "_id" : 2, "total" : 20 }
{ "_id" : 3, "total" : 50 }
```
#### pow
求给定基数的指数次幂。
Raises the given base to the power of the exponent.

示例集合 `test` 数据如下：
The example collection `test` data is as follows:
```javascript
{ "_id" : 1, "item" : "abc", "price" : 10, "quantity": 2 }
{ "_id" : 2, "item" : "jkl", "price" : 20, "quantity": 1 }
{ "_id" : 3, "item" : "xyz", "price" : 5, "quantity": 10 }
```

使用 `multiply` 表达式将 `price` 和 `quantity` 字段相乘：
Use the `multiply` expression to multiply the `price` and `quantity` fields:
```javascript
db.collection('test').field('multiply(price, quantity) as total').get()
```

执行结果：
Results of the:
```javascript
{ "_id" : 1, "total" : 20 }
{ "_id" : 2, "total" : 20 }
{ "_id" : 3, "total" : 50 }
```

#### sqrt
计算平方根。
Calculates the square root.

示例集合 `test` 数据如下：
The example collection `test` data is as follows:
```javascript
{ _id: 1, p1: { x: 5, y: 8 }, p2: { x: 0, y: 5} }
{ _id: 2, p1: { x: -2, y: 1 }, p2: { x: 1, y: 5} }
{ _id: 3, p1: { x: 4, y: 4 }, p2: { x: 4, y: 0} }
```

以下示例计算 p1 和 p2 之间的距离：
The following example calculates the distance between p1 and p2:
```javascript
db.collection('test').field('sqrt(add(pow(subtract(p2.y, p1.y), 2), pow(subtract(p2.x, p1.x), 2))) as distance').get()
```

执行结果：
Results of the:
```javascript
{ "_id" : 1, "distance" : 5.830951894845301 }
{ "_id" : 2, "distance" : 5 }
{ "_id" : 3, "distance" : 4 }
```
#### subtract
将两个数字相减然后返回差值，或将两个日期相减然后返回相差的毫秒数，或将一个日期减去一个数字返回结果的日期。
Subtracts two numbers and returns the difference, or subtracts two dates and returns the difference in milliseconds, or subtracts a number from a date and returns the date of the result.

示例集合 `test` 数据如下：
The example collection `test` data is as follows:
```javascript
{ "_id" : 1, "item" : "abc", "price" : 10, "fee" : 2, "discount" : 5, "date" : 1393660800000 }
{ "_id" : 2, "item" : "jkl", "price" : 20, "fee" : 1, "discount" : 2, "date" : 1393664400000 }
```

**减数字**
**subtract number**
```javascript
db.collection('test').field('subtract(add(price, fee), discount) as total').get()
```

执行结果：
Results of the:
```javascript
{ "_id" : 1, "item" : "abc", "total" : 7 }
{ "_id" : 2, "item" : "jkl", "total" : 19 }
```

**从当前日期减去1天**
**Subtract 1 day from current date**
```javascript
db.collection('test').field('subtract(date, 24 * 60 * 60 * 1000) as dateDifference').get()
```

执行结果：
Results of the:
```javascript
{ "_id" : 1, "item" : "abc", "dateDifference" : 1393747200000 }
{ "_id" : 2, "item" : "jkl", "dateDifference" : 1393750800000 }
```

#### trunc
将数字截断为整型。
Truncates a number to an integer.

示例集合 `test` 数据如下：
The example collection `test` data is as follows:
```javascript
{ _id: 1, value: 19.25 }
{ _id: 2, value: 28.73 }
{ _id: 3, value: 34.32 }
{ _id: 4, value: -45.34 }
```

截断 `value` 到小数点后第一位的信息：
Truncate `value` to the first decimal place:
```javascript
db.collection('test').field('trunc(value, 1) as truncatedValue').get()
```

执行结果：
Results of the:
```javascript
{ "_id" : 1, "truncatedValue" : 19.2 }
{ "_id" : 2, "truncatedValue" : 28.7 }
{ "_id" : 3, "truncatedValue" : 34.3 }
{ "_id" : 4, "truncatedValue" : -45.3 }
```
### 数组运算方法
### Array operation method
#### arrayElemAt
返回在指定数组下标的元素。
Returns the element at the specified array index.

示例集合`users`包含以下文档：
The example collection `users` contains the following documents:

```javascript
{"_id":1,"name":"dave123",favorites:["chocolate","cake","butter","apples"]}
{"_id":2,"name":"li",favorites:["apples","pudding","pie"]}
{"_id":3,"name":"ahn",favorites:["pears","pecans","chocolate","cherries"]}
{"_id":4,"name":"ty",favorites:["ice cream"]}
```

返回`favorites`数组中的第一个和最后一个元素：
Return the first and last elements in the `favorites` array:

```javascript
db.collection('users').field('arrayElemAt(favorites, 0) as first, arrayElemAt(favorites, -1) as last').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"first":"chocolate","last":"apples"}
{"_id":2,"first":"apples","last":"pie"}
{"_id":3,"first":"pears","last":"cherries"}
{"_id":4,"first":"ice cream","last":"ice cream"}
```

#### arrayToObject
将一个数组转换为对象。
Convert an array to an object.

示例集合`inventory`包含以下文档的集合：
The example collection `inventory` contains a collection of the following documents:

```javascript
{"_id":1,"item":"ABC1",dimensions:[{"k":"l","v":25},{"k":"w","v":10},{"k":"uom","v":"cm"}]}
{"_id":2,"item":"ABC2",dimensions:[["l",50],["w",25],["uom","cm"]]}
{"_id":3,"item":"ABC3",dimensions:[["l",25],["l","cm"],["l",50]]}
```

以下将`dimensions`字段作为对象返回：
The following returns the `dimensions` field as an object:

```javascript
db.collection('inventory').field('item, arrayToObject(dimensions) as dimensionsObject').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"item":"ABC1","dimensionsObject":{"l":25,"w":10,"uom":"cm"}}
{"_id":2,"item":"ABC2","dimensionsObject":{"l":50,"w":25,"uom":"cm"}}
{"_id":3,"item":"ABC3","dimensionsObject":{"l":50}}
```

#### concatArrays
将多个数组拼接成一个数组。
Concatenate multiple arrays into one array.

示例集合`warehouses`包含以下文档：
The example collection `warehouses` contains the following documents:

```javascript
{"_id":1,instock:["chocolate"],ordered:["butter","apples"]}
{"_id":2,instock:["apples","pudding","pie"]}
{"_id":3,instock:["pears","pecans"],ordered:["cherries"]}
{"_id":4,instock:["ice cream"],ordered:[]}
```

以下示例将`instock`和`ordered`数组串联在一起：
The following example concatenates the `instock` and `ordered` arrays:

```javascript
db.collection('warehouses').field('concatArrays(instock, ordered) as items').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"items":["chocolate","butter","apples"]}
{"_id":2,"items":null}
{"_id":3,"items":["pears","pecans","cherries"]}
{"_id":4,"items":["ice cream"]}
```

#### filter
根据给定条件返回满足条件的数组的子集。
Returns the subset of the array that satisfies the condition based on the given condition.

示例集合`sales`包含以下文档：
The example collection `sales` contains the following documents:

```javascript
{_id:0,items:[{item_id:43,quantity:2,price:10},{item_id:2,quantity:1,price:240}]}
{_id:1,items:[{item_id:23,quantity:3,price:110},{item_id:103,quantity:4,price:5},{item_id:38,quantity:1,price:300}]}
{_id:2,items:[{item_id:4,quantity:1,price:23}]}
```

将`items`数组过滤为仅包含`price`大于或等于`100`的文档：
Filter the `items` array to only contain documents with `price` greater than or equal to `100`:

```javascript
db.collection('sales').field('filter(items, "item", gte("$$item.price", 100)) as filterItems').get()
```

执行结果：
Results of the:

```javascript
{"_id":0,"filterItems":[{"item_id":2,"quantity":1,"price":240}]}
{"_id":1,"filterItems":[{"item_id":23,"quantity":3,"price":110},{"item_id":38,"quantity":1,"price":300}]}
{"_id":2,"filterItems":[]}
```
#### in
给定一个值和一个数组，如果值在数组中则返回 true，否则返回 false。
Given a value and an array, return true if the value is in the array, false otherwise.

示例集合`fruit`具有以下文档：
The example collection `fruit` has the following documents:

```javascript
{"_id":1,"location":"24th Street","in_stock":["apples","oranges","bananas"]}
{"_id":2,"location":"36th Street","in_stock":["bananas","pears","grapes"]}
{"_id":3,"location":"82nd Street","in_stock":["cantaloupes","watermelons","apples"]}
```

判断`in_stock`数组中是否存在`bananas`字符串：
Determine whether the `bananas` string exists in the `in_stock` array:

```javascript
db.collection('fruit').field('location as storeLocation, in("bananas", in_stock) as hasHananas').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"storeLocation":"24th Street","hasBananas":true}
{"_id":2,"storeLocation":"36th Street","hasBananas":true}
{"_id":3,"storeLocation":"82nd Street","hasBananas":false}
```

#### indexOfArray
在数组中找出等于给定值的第一个元素的下标，如果找不到则返回 -1。
Finds the index of the first element in the array equal to the given value, or returns -1 if not found.

示例集合`inventory`包含以下文档：
The example collection `inventory` contains the following documents:

```javascript
{"_id":1,"items":["one","two","three"]}
{"_id":2,"items":[1,2,3]}
{"_id":3,"items":[null,null,2]}
{"_id":4,"items":null}
{"_id":5,"amount":3}
```

查询数字`2`在每个`items`数组中所处的数组索引：
Query the array index where the number `2` is located in each `items` array:

```javascript
db.collection('inventory').field('indexOfArray(items, 2) as index').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"index":"-1"}
{"_id":2,"index":"1"}
{"_id":3,"index":"2"}
{"_id":4,"index":null}
{"_id":5,"index":null}
```

#### isArray
判断给定表达式是否是数组，返回布尔值。
Determines whether the given expression is an array, returns a Boolean value.

示例集合`warehouses`包含以下文档：
The example collection `warehouses` contains the following documents:

```javascript
{"_id":1,instock:["chocolate"],ordered:["butter","apples"]}
{"_id":2,instock:["apples","pudding","pie"]}
{"_id":3,instock:["pears","pecans"],ordered:["cherries"]}
{"_id":4,instock:["ice cream"],ordered:[]}
```

在将两个字段连接在一起之前检查`instock`和`ordered`字段是否为数组：
Check that the `instock` and `ordered` fields are arrays before concatenating the two fields together:

```javascript
db.collection('warehouses').field('cond(and(isArray(instock), isArray(ordered)), concatArrays(instock, ordered), "有字段不是数组类型") as items').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"items":["chocolate","butter","apples"]}
{"_id":2,"items":"有字段不是数组类型"}
{"_id":3,"items":["pears","pecans","cherries"]}
{"_id":4,"items":["ice cream"]}
```

#### map
类似 JavaScript Array 上的 map 方法，将给定数组的每个元素按给定转换方法转换后得出新的数组。
Similar to the map method on JavaScript Array, each element of the given array is converted by the given conversion method to obtain a new array.

示例集合`grades`为以下文档：
An example collection `grades` is the following documents:

```javascript
{_id:1,quizzes:[5,6,7]}
{_id:2,quizzes:[]}
{_id:3,quizzes:[3,8,9]}
```

将`quizzes`数组中的每个元素加1
Increment each element in the `quizzes` array by 1
```javascript
db.collection('grades').field('map(quizzes, "grade", add("$$grade", 2)) as adjustedGrades').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"adjustedGrades":[7,8,9]}
{"_id":2,"adjustedGrades":[]}
{"_id":3,"adjustedGrades":[5,10,11]}
```

#### objectToArray
将一个对象转换为数组。方法把对象的每个键值对都变成输出数组的一个元素，元素形如 `{ k: <key>, v: <value> }`
Convert an object to an array. The method turns each key-value pair of the object into an element of the output array, and the element is in the form of `{ k: <key>, v: <value> }`

示例集合`inventory`包含以下文档：
The example collection `inventory` contains the following documents:

```javascript
{"_id":1,"item":"ABC1",dimensions:{l:25,w:10,uom:"cm"}}
{"_id":2,"item":"ABC2",dimensions:{l:50,w:25,uom:"cm"}}
{"_id":3,"item":"XYZ1",dimensions:{l:70,w:75,uom:"cm"}}
```

将`dimensions`字段作为数组返回：
Return the `dimensions` field as an array:

```javascript
db.collection('inventory').field('item, objectToArray(dimensions) as dimensionsArray').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"item":"ABC1","dimensionsArray":[{"k":"l","v":25},{"k":"w","v":10},{"k":"uom","v":"cm"}]}
{"_id":2,"item":"ABC2","dimensionsArray":[{"k":"l","v":50},{"k":"w","v":25},{"k":"uom","v":"cm"}]}
{"_id":3,"item":"XYZ1","dimensionsArray":[{"k":"l","v":70},{"k":"w","v":75},{"k":"uom","v":"cm"}]}
```

#### range
返回一组生成的序列数字。给定开始值、结束值、非零的步长，`range` 会返回从开始值开始逐步增长、步长为给定步长、但不包括结束值的序列。
Returns an array of generated sequence numbers. Given a start value, an end value, and a non-zero step size, `range` returns a sequence that increases incrementally from the start value by the given step size, excluding the end value.

示例集合`distances`包含以下文档：
The example collection `distances` contains the following documents:

```javascript
{_id:0,city:"San Jose",distance:42}
{_id:1,city:"Sacramento",distance:88}
{_id:2,city:"Reno",distance:218}
{_id:3,city:"Los Angeles",distance:383}
```

一名骑自行车的人正计划从旧金山骑车前往集合中列出的每个城市，并希望每25英里停下来休息一下。
A cyclist is planning to cycle from San Francisco to every city listed in the set and wants to stop every 25 miles to take a break.

以下操作来确定每个行程的停止点。
The following operations are performed to determine the stopping points for each trip.

```javascript
db.collection('distances').field('city, range(0, distance, 25) as restStops').get()
```

该操作返回以下内容：
The operation returns the following:

```javascript
{"city":"San Jose","restStops":[0,25]}
{"city":"Sacramento","restStops":[0,25,50,75]}
{"city":"Reno","restStops":[0,25,50,75,100,125,150,175,200]}
{"city":"Los Angeles","restStops":[0,25,50,75,100,125,150,175,200,225,250,275,300,325,350,375]}
```

#### reduce
类似 JavaScript 的 reduce 方法，应用一个表达式于数组各个元素然后归一成一个元素。
Similar to JavaScript's reduce method, it applies an expression to each element of an array and reduces it to a single element.

示例集合`clothes`包含以下文档：
The example collection `clothes` contains the following documents:

```javascript
{"_id":1,"productId":"ts1","description":"T-Shirt","color":"black","size":"M","price":20,"discounts":[0.5,0.1]}
{"_id":2,"productId":"j1","description":"Jeans","color":"blue","size":"36","price":40,"discounts":[0.25,0.15,0.05]}
{"_id":3,"productId":"s1","description":"Shorts","color":"beige","size":"32","price":30,"discounts":[0.15,0.05]}
{"_id":4,"productId":"ts2","description":"Cool T-Shirt","color":"White","size":"L","price":25,"discounts":[0.3]}
{"_id":5,"productId":"j2","description":"Designer Jeans","color":"blue","size":"30","price":80,"discounts":[0.1,0.25]}
```

每个文档包含一个`discounts`数组，其中包含每个项目当前可用的优惠券。
Each document contains a `discounts` array containing currently available coupons for each item.
如果每个折扣都可以一次应用于该产品，则可以通过`reduce`对`discounts`数组中的每个元素应用以下公式来计算最低价格
If each discount can be applied to the product at one time, the minimum price can be calculated by applying the following formula to each element in the `discounts` array via `reduce`
（1-折扣）*价格。
(1-discount)*price.

```javascript
db.collection('clothes').field('reduce(discounts, price, multiply("$$vaule", subtract(1, "$$this")) as discountedPrice').get()
```

该操作返回以下内容：
The operation returns the following:

```javascript
{"_id":ObjectId("57c893067054e6e47674ce01"),"discountedPrice":9}
{"_id":ObjectId("57c9932b7054e6e47674ce12"),"discountedPrice":24.224999999999998}
{"_id":ObjectId("57c993457054e6e47674ce13"),"discountedPrice":24.224999999999998}
{"_id":ObjectId("57c993687054e6e47674ce14"),"discountedPrice":17.5}
{"_id":ObjectId("57c993837054e6e47674ce15"),"discountedPrice":54}
```

#### reverseArray
返回给定数组的倒序形式。
Returns the reversed form of the given array.

示例集合`users`包含以下文档：
The example collection `users` contains the following documents:

```javascript
{"_id":1,"name":"dave123","favorites":["chocolate","cake","butter","apples"]}
{"_id":2,"name":"li","favorites":["apples","pudding","pie"]}
{"_id":3,"name":"ahn","favorites":[]}{"_id":4,"name":"ty"}
```

下面的示例`favorites`以相反的顺序返回一个包含数组元素的数组：
The following example `favorites` returns an array containing the elements of the array in reverse order:

```javascript
db.collection('users').field('name, reverseArray(favorites) as reverseFavorites').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"name":"dave123","reverseFavorites":["apples","butter","cake","chocolate"]}
{"_id":2,"name":"li","reverseFavorites":["pie","pudding","apples"]}
{"_id":3,"name":"ahn","reverseFavorites":[]}{"_id":4,"name":"ty","reverseFavorites":null}
```

#### size
返回数组长度。
Returns the length of the array.

示例集合`inventory`包含以下文档：
The example collection `inventory` contains the following documents:

```javascript
{"_id":1,"item":"ABC1","description":"product 1",colors:["blue","black","red"]}
{"_id":2,"item":"ABC2","description":"product 2",colors:["purple"]}
{"_id":3,"item":"XYZ1","description":"product 3",colors:[]}
{"_id":4,"item":"ZZZ1","description":"product 4 - missing colors"}
{"_id":5,"item":"ZZZ2","description":"product 5 - colors is string",colors:"blue,red"}
```

返回`colors`数组中的元素数：
Returns the number of elements in the `colors` array:

```javascript
db.collection('inventory').field('item, cond(isArray(colors), size(colors), "None") as numberOfColors').get()
```

该操作返回以下内容：
The operation returns the following:

```javascript
{"_id":1,"item":"ABC1","numberOfColors":3}
{"_id":2,"item":"ABC2","numberOfColors":1}
{"_id":3,"item":"XYZ1","numberOfColors":0}
{"_id":4,"item":"ZZZ1","numberOfColors":"None"}
{"_id":5,"item":"ZZZ2","numberOfColors":"None"}
```

#### slice
类似 JavaScritp 的 slice 方法。返回给定数组的指定子集。
Similar to JavaScript's slice method. Returns the specified subset of the given array.

示例集合`users`包含以下文档：
The example collection `users` contains the following documents:

```javascript
{"_id":1,"name":"dave123",favorites:["chocolate","cake","butter","apples"]}
{"_id":2,"name":"li",favorites:["apples","pudding","pie"]}
{"_id":3,"name":"ahn",favorites:["pears","pecans","chocolate","cherries"]}
{"_id":4,"name":"ty",favorites:["ice cream"]}
```

为每个用户最多返回`favorites`数组中的前三个元素：
Return at most the first three elements in the `favorites` array for each user:

```javascript
db.collection('users').field('name, slice(favorites, 3) as threeFavorites').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"name":"dave123","threeFavorites":["chocolate","cake","butter"]}
{"_id":2,"name":"li","threeFavorites":["apples","pudding","pie"]}
{"_id":3,"name":"ahn","threeFavorites":["pears","pecans","chocolate"]}
{"_id":4,"name":"ty","threeFavorites":["ice cream"]}
```

#### zip
把二维数组的第二维数组中的相同序号的元素分别拼装成一个新的数组进而组装成一个新的二维数组。
The elements of the same serial number in the second dimension array of the two-dimensional array are respectively assembled into a new array and then assembled into a new two-dimensional array.

示例集合`matrices`包含以下文档：
The example collection `matrices` contains the following documents:

```javascript
{matrix:[[1,2],[2,3],[3,4]]}
{matrix:[[8,7],[7,6],[5,4]]}
```

计算此集合中每个3x2矩阵的转置：
Compute the transpose of each 3x2 matrix in this set:

```javascript
db.collection('matrices').field('zip(arrayElemAt(matrix, 0), arrayElemAt(matrix, 1), arrayElemAt(matrix, 2))').get()
```

执行返回：
Execution returns:

```javascript
{"transposed":[[1,2,3],[2,3,4]]}
{"transposed":[[8,7,5],[7,6,4]]}
```

### 布尔运算方法
### Boolean methods
布尔表达式将其参数表达式计算为布尔值，并返回一个布尔值作为结果。
A Boolean expression evaluates its argument expressions to Boolean values and returns a Boolean value as the result.

#### and
给定多个表达式，and 仅在所有表达式都返回 true 时返回 true，否则返回 false。
Given multiple expressions, and returns true only if all of them return true, and returns false otherwise.

接受任意数量的参数表达式。
Accepts any number of argument expressions.

示例集合`inventory`包含以下文档：
The example collection `inventory` contains the following documents:

```javascript
{"_id":1,"item":"abc1",description:"product 1",qty:300}
{"_id":2,"item":"abc2",description:"product 2",qty:200}
{"_id":3,"item":"xyz1",description:"product 3",qty:250}
{"_id":4,"item":"VWZ1",description:"product 4",qty:300}
{"_id":5,"item":"VWZ2",description:"product 5",qty:180}
```

判断`qty`字段是否大于`100`并小于`250`：
Determine whether the `qty` field is greater than `100` and less than `250`:

```javascript
db.collection('inventory').field('item, qty, and(gt(qty, 100), lt(qty, 250)) as result').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"item":"abc1","qty":300,"result":false}
{"_id":2,"item":"abc2","qty":200,"result":true}
{"_id":3,"item":"xyz1","qty":250,"result":false}
{"_id":4,"item":"VWZ1","qty":300,"result":false}
{"_id":5,"item":"VWZ2","qty":180,"result":true}
```

#### not
给定一个表达式，如果表达式返回 true，则 not 返回 false，否则返回 true。注意表达式不能为逻辑表达式（and、or、nor、not）。
Given an expression, not returns false if the expression returns true, and true otherwise. Note that the expression cannot be a logical expression (and, or, nor, not).

示例集合`inventory`包含以下文档：
The example collection `inventory` contains the following documents:

```javascript
{"_id":1,"item":"abc1",description:"product 1",qty:300}
{"_id":2,"item":"abc2",description:"product 2",qty:200}
{"_id":3,"item":"xyz1",description:"product 3",qty:250}
{"_id":4,"item":"VWZ1",description:"product 4",qty:300}
{"_id":5,"item":"VWZ2",description:"product 5",qty:180}
```

判断`qty`字段是否不大于`250`：
Determine whether the `qty` field is not greater than `250`:

```javascript
db.collection('inventory').field('item, not(gt(qty, 250)) as result').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"item":"abc1","result":false}
{"_id":2,"item":"abc2","result":true}
{"_id":3,"item":"xyz1","result":true}
{"_id":4,"item":"VWZ1","result":false}
{"_id":5,"item":"VWZ2","result":true}
```

#### or
给定多个表达式，如果任意一个表达式返回 true，则 or 返回 true，否则返回 false。
Given multiple expressions, or returns true if any one of them returns true, otherwise it returns false.

接受任意数量的参数表达式。
Accepts any number of argument expressions.

示例集合`inventory`包含以下文档：
The example collection `inventory` contains the following documents:

```javascript
{"_id":1,"item":"abc1",description:"product 1",qty:300}
{"_id":2,"item":"abc2",description:"product 2",qty:200}
{"_id":3,"item":"xyz1",description:"product 3",qty:250}
{"_id":4,"item":"VWZ1",description:"product 4",qty:300}
{"_id":5,"item":"VWZ2",description:"product 5",qty:180}
```

判断`qty`字段是否大于`250`或小于`200`：
Determine whether the `qty` field is greater than `250` or smaller than `200`:

```javascript
db.collection('inventory').field('item, or(gt(qty, 250), lt(qty, 200)) as result').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"item":"abc1","result":true}
{"_id":2,"item":"abc2","result":false}
{"_id":3,"item":"xyz1","result":false}
{"_id":4,"item":"VWZ1","result":true}
{"_id":5,"item":"VWZ2","result":true}
```

### 比较运算方法
### Comparison operation method
比较表达式返回一个布尔值，除了 `cmp`，它返回一个数字。
Comparison expressions return a boolean value, except `cmp`, which returns a number.

#### cmp
给定两个值，返回其比较值。如果第一个值小于第二个值，返回 -1 如果第一个值大于第二个值，返回 1 如果两个值相等，返回 0。
Given two values, return their comparison value. Returns -1 if the first value is less than the second value 1 if the first value is greater than the second value 0 if the two values are equal.

示例集合`inventory`包含以下文档：
The example collection `inventory` contains the following documents:

```javascript
{"_id":1,"item":"abc1",description:"product 1",qty:300}
{"_id":2,"item":"abc2",description:"product 2",qty:200}
{"_id":3,"item":"xyz1",description:"product 3",qty:250}
{"_id":4,"item":"VWZ1",description:"product 4",qty:300}
{"_id":5,"item":"VWZ2",description:"product 5",qty:180}
```

`qty`值与`250`进行比较：
The `qty` value is compared to `250`:

```javascript
db.collection('inventory').field('item, qty, cmp(qty, 250) as cmpTo250').get()
```

执行结果：
Results of the:

```javascript
{"_id": 1,"item":"abc1","qty":300,"cmpTo250":1}
{"_id": 2,"item":"abc2","qty":200,"cmpTo250":-1}
{"_id": 3,"item":"xyz1","qty":250,"cmpTo250":0}
{"_id": 4,"item":"VWZ1","qty":300,"cmpTo250":1}
{"_id": 5,"item":"VWZ2","qty":180,"cmpTo250":-1}
```

#### eq
匹配两个值，如果相等则返回 true，否则返回 false。
Matches two values, returning true if they are equal, otherwise false.

示例集合`inventory`包含以下文档：
The example collection `inventory` contains the following documents:

```javascript
{"_id":1,"item":"abc1",description:"product 1",qty:300}
{"_id":2,"item":"abc2",description:"product 2",qty:200}
{"_id":3,"item":"xyz1",description:"product 3",qty:250}
{"_id":4,"item":"VWZ1",description:"product 4",qty:300}
{"_id":5,"item":"VWZ2",description:"product 5",qty:180}
```

判断`qty`是否等于`250`：
Determine whether `qty` is equal to `250`:
```javascript
db.collection('inventory').field('item, qty, eq(qty, 250) as qtyEq250').get()
```

执行结果：
Results of the:
```javascript
{"id": 1,"item":"abc1","qty":300,"qtyEq250":false}
{"id": 2,"item":"abc2","qty":200,"qtyEq250":false}
{"id": 3,"item":"xyz1","qty":250,"qtyEq250":true}
{"id": 4,"item":"VWZ1","qty":300,"qtyEq250":false}
{"id": 5,"item":"VWZ2","qty":180,"qtyEq250":false}
```

#### gt
匹配两个值，如果前者大于后者则返回 true，否则返回 false。
Matches two values, returning true if the former is greater than the latter, false otherwise.

示例集合`inventory`包含以下文档：
The example collection `inventory` contains the following documents:

```javascript
{"_id":1,"item":"abc1",description:"product 1",qty:300}
{"_id":2,"item":"abc2",description:"product 2",qty:200}
{"_id":3,"item":"xyz1",description:"product 3",qty:250}
{"_id":4,"item":"VWZ1",description:"product 4",qty:300}
{"_id":5,"item":"VWZ2",description:"product 5",qty:180}
```

判断`qty`是否大于`250`：
Determine whether `qty` is greater than `250`:

```javascript
db.collection('inventory').field('item, qty, gt(qty, 250) as qtyGt250').get()
```

执行结果：
Results of the:

```javascript
{"item":"abc1","qty":300,"qtyGt250":true}
{"item":"abc2","qty":200,"qtyGt250":false}
{"item":"xyz1","qty":250,"qtyGt250":false}
{"item":"VWZ1","qty":300,"qtyGt250":true}
{"item":"VWZ2","qty":180,"qtyGt250":false}
```

#### gte
匹配两个值，如果前者大于或等于后者则返回 true，否则返回 false。
Matches two values, returning true if the former is greater than or equal to the latter, false otherwise.

示例集合`inventory`包含以下文档：
The example collection `inventory` contains the following documents:

```javascript
{"_id":1,"item":"abc1",description:"product 1",qty:300}
{"_id":2,"item":"abc2",description:"product 2",qty:200}
{"_id":3,"item":"xyz1",description:"product 3",qty:250}
{"_id":4,"item":"VWZ1",description:"product 4",qty:300}
{"_id":5,"item":"VWZ2",description:"product 5",qty:180}
```

判断`qty`是否大于或等于`250`：
Determine whether `qty` is greater than or equal to `250`:

```javascript
db.collection('inventory').field('item, qty, gte(qty, 250) as qtyGte250').get()
```

执行结果：
Results of the:

```javascript
{"item":"abc1","qty":300,"qtyGte250":true}
{"item":"abc2","qty":200,"qtyGte250":false}
{"item":"xyz1","qty":250,"qtyGte250":true}
{"item":"VWZ1","qty":300,"qtyGte250":true}
{"item":"VWZ2","qty":180,"qtyGte250":false}
```

#### lt
匹配两个值，如果前者小于后者则返回 true，否则返回 false。
Matches two values, returning true if the former is less than the latter, false otherwise.

示例集合`inventory`包含以下文档：
The example collection `inventory` contains the following documents:

```javascript
{"_id":1,"item":"abc1",description:"product 1",qty:300}
{"_id":2,"item":"abc2",description:"product 2",qty:200}
{"_id":3,"item":"xyz1",description:"product 3",qty:250}
{"_id":4,"item":"VWZ1",description:"product 4",qty:300}
{"_id":5,"item":"VWZ2",description:"product 5",qty:180}
```

判断`qty`是否小于`250`：
Determine whether `qty` is less than `250`:

```javascript
db.collection('inventory').field('item, qty, lt(qty, 250) as qtyLt250').get()
```

执行结果：
Results of the:
```javascript
{"_id": 1,"item":"abc1","qty":300,"qtyLt250":false}
{"_id": 2,"item":"abc2","qty":200,"qtyLt250":true}
{"_id": 3,"item":"xyz1","qty":250,"qtyLt250":false}
{"_id": 4,"item":"VWZ1","qty":300,"qtyLt250":false}
{"_id": 5,"item":"VWZ2","qty":180,"qtyLt250":true}
```

#### lte
匹配两个值，如果前者小于或等于后者则返回 true，否则返回 false。
Matches two values, returning true if the former is less than or equal to the latter, false otherwise.

示例集合`inventory`包含以下文档：
The example collection `inventory` contains the following documents:

```javascript
{"_id":1,"item":"abc1",description:"product 1",qty:300}
{"_id":2,"item":"abc2",description:"product 2",qty:200}
{"_id":3,"item":"xyz1",description:"product 3",qty:250}
{"_id":4,"item":"VWZ1",description:"product 4",qty:300}
{"_id":5,"item":"VWZ2",description:"product 5",qty:180}
```

判断`qty`是否小于或等于`250`：
Determine whether `qty` is less than or equal to `250`:

```javascript
db.collection('inventory').field('item, qty, lte(qty, 250) as qtyLte250').get()
```

执行结果：
Results of the:

```javascript
{"_id": 1,"item":"abc1","qty":300,"qtyLte250":false}
{"_id": 2,"item":"abc2","qty":200,"qtyLte250":true}
{"_id": 3,"item":"xyz1","qty":250,"qtyLte250":true}
{"_id": 4,"item":"VWZ1","qty":300,"qtyLte250":false}
{"_id": 5,"item":"VWZ2","qty":180,"qtyLte250":true}
```

#### neq
匹配两个值，如果不相等则返回 true，否则返回 false.
Matches two values, returning true if they are not equal, false otherwise.

示例集合`inventory`包含以下文档：
The example collection `inventory` contains the following documents:

```javascript
{"_id":1,"item":"abc1",description:"product 1",qty:300}
{"_id":2,"item":"abc2",description:"product 2",qty:200}
{"_id":3,"item":"xyz1",description:"product 3",qty:250}
{"_id":4,"item":"VWZ1",description:"product 4",qty:300}
{"_id":5,"item":"VWZ2",description:"product 5",qty:180}
```

判断`qty`是否不等于`250`：
Determine whether `qty` is not equal to `250`:

```javascript
db.collection('inventory').field('item, qty, neq(qty, 250) as qtyNe250').get()
```

执行结果：
Results of the:
```javascript
{"_id": 1,"item":"abc1","qty":300,"qtyNe250":true}
{"_id": 2,"item":"abc2","qty":200,"qtyNe250":true}
{"_id": 3,"item":"xyz1","qty":250,"qtyNe250":false}
{"_id": 4,"item":"VWZ1","qty":300,"qtyNe250":true}
{"_id": 5,"item":"VWZ2","qty":180,"qtyNe250":true}
```

### 条件运算方法
### Conditional operation method
#### cond
计算布尔表达式1，成立返回表达式2，否则返回表达式3。
Evaluates Boolean expression 1, returns expression 2 if true, otherwise returns expression 3.

示例集合`inventory`包含以下文档：
The example collection `inventory` contains the following documents:

```javascript
{"_id":1,"item":"abc1",qty:300}
{"_id":2,"item":"abc2",qty:200}
{"_id":3,"item":"xyz1",qty:250}
```
如果 `qty` 值大于等于250，将`discount`设置为30，否则设置为20：
If `qty` value is greater than or equal to 250, set `discount` to 30, otherwise set to 20:

```javascript
db.collection('inventory').field('item, cond(gte(qty, 250), 30, 20) as discount').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"item":"abc1","discount":30}
{"_id":2,"item":"abc2","discount":20}
{"_id":3,"item":"xyz1","discount":30}
```

#### ifNull
计算给定的表达式，如果表达式结果为 null、undefined 或者不存在，那么返回一个替代值；否则返回原值。
Evaluates the given expression and returns a replacement value if the expression evaluates to null, undefined, or does not exist; otherwise returns the original value.

示例集合`inventory`包含以下文档：
The example collection `inventory` contains the following documents:

```javascript
{"_id":1,"item":"abc1",description:"product 1",qty:300}
{"_id":2,"item":"abc2",description:null,qty:200}
{"_id":3,"item":"xyz1",qty:250}
```

如果`description`字段为空或不存在返回`"Unspecified"`字符串， 否则返回`description`字段值：
If the `description` field is empty or does not exist, return the string `"Unspecified"`, otherwise return the value of the `description` field:

```javascript
db.collection('inventory').field('item, ifNull(description, "Unspecified") as description').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"item":"abc1","description":"product 1"}
{"_id":2,"item":"abc2","description":"Unspecified"}
{"_id":3,"item":"xyz1","description":"Unspecified"}
```

#### switch
根据给定的 switch-case-default 计算返回值。
Computes the return value according to the given switch-case-default.

示例集合`grades`包含以下文档：
The example collection `grades` contains the following documents:

```javascript
{"_id":1,"name":"Susan Wilkes","scores":[87,86,78]}
{"_id":2,"name":"Bob Hanna","scores":[71,64,81]}
{"_id":3,"name":"James Torrelio","scores":[91,84,97]}
```

根据每个学生的平均分数显示特定的消息。
Display specific messages based on each student's average score.

```javascript
db.collection('grades').field('name, switch([{case: gte(avg(scores), 90), then: "Doing great!"}, {case: and(gte(avg(scores), 80), lt(avg(scores), 90)), then: "Doing pretty well."}, {case: lt(avg(scores), 80), then: "Needs improvement."}], "No scores found.")').get()
```

该操作返回以下内容：
The operation returns the following:

```javascript
{"_id":1,"name":"Susan Wilkes","summary":"Doing pretty well."}
{"_id":2,"name":"Bob Hanna","summary":"Needs improvement."}
{"_id":3,"name":"James Torrelio","summary":"Doing great!"}
```

### 日期运算方法
### Date operation method

#### dateFromParts
给定日期的相关信息，构建并返回一个日期对象。
Given information about a date, construct and return a date object.

从提供的输入字段构造三个日期对象：
Constructs three date objects from the provided input fields:

```javascript
db.collection('sales').field('dateFromParts(2017, 2, 8, 12) as date, isoDateFromParts(2017, 6, 3, 12) as date_iso, dateFromParts(2016, 12, 31, 23, 46, 12, "America/New_York") as date_timezone').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"date":"2017-02-08T12:00:00Z","date_iso":"2017-02-08T12:00:00Z","date_timezone":"2017-01-01T04:46:12Z"}
```

#### dateFromString
将一个日期/时间字符串转换为日期对象。
Convert a date/time string to a date object.

示例集合`logmessages`包含以下集合。
The example collection `logmessages` contains the following collections.

```javascript
{_id:1,date:"2017-02-08T12:10:40.787",timezone:"America/New_York",message:"Step 1: Started"}
{_id:2,date:"2017-02-08",timezone:"-05:00",message:"Step 1: Ended"}
{_id:3,message:" Step 1: Ended "}
{_id:4,date:"2017-02-09",timezone:"Europe/London",message:"Step 2: Started"}
{_id:5,date:"2017-02-09T03:35:02.055",timezone:"+0530",message:"Step 2: In Progress"}
```

**将`date`值转换为日期对象：**
** Convert a `date` value to a date object:**

```javascript
db.collection('logmessages').field('dateFromString(date, "%Y-%m-%dT%H:%M:%S.%LZ", "America/New_York") as date').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"date": "2017-02-08T17:10:40.787Z"}
{"_id":2,"date": "2017-02-08T05:00:00Z"}
{"_id":3,"date":null}
{"_id":4,"date": "2017-02-09T05:00:00Z"}
{"_id":5,"date": "2017-02-09T08:35:02.055Z"}
```

**该`timezone`参数也可以通过一个文档字段，而不是硬编码参数提供的。例如：**
** The `timezone` parameter can also be provided via a document field instead of a hardcoded parameter. For example:**

```javascript
db.collection('logmessages').field('dateFromString(date, "%Y-%m-%dT%H:%M:%S.%LZ", timezone) as date').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"date":"2017-02-08T17:10:40.787Z"}
{"_id":2,"date":"2017-02-08T05:00:00Z"}
{"_id":3,"date":null}
{"_id":4,"date":"2017-02-09T00:00:00Z"}
{"_id":5,"date":"2017-02-08T22:05:02.055Z"}
```

**如果集合中带有不可解析的日期字符串，将引发错误 `onError`，可以用 `onError` 参数以其原始字符串形式返回无效日期：**
**If the collection has an unparseable date string, an error `onError` will be raised, and the `onError` parameter can be used to return an invalid date in its raw string form:**

示例集合`dates`如下：
An example collection `dates` is as follows:
```javascript
{"_id":1,"date":"2017-02-08T12:10:40.787",timezone:"America/New_York"}
{"_id":2,"date":"20177-02-09T03:35:02.055",timezone:"America/New_York"}
```

```javascript
db.collection('dates').field('dateFromString(date, "%Y-%m-%dT%H:%M:%S.%L", timezone, date)')
```

执行结果：
Results of the:
```javascript
{"_id":1,"date": "2017-02-08T17:10:40.787Z"}
{"_id":2,"date": "20177-02-09T03:35:02.055"}
```

**如果集合中带有`null`日期字符串，可以使用 `onNull` 参数返回一个日期：**
**If there is a `null` date string in the collection, you can use the `onNull` parameter to return a date:**

示例集合`dates`如下：
An example collection `dates` is as follows:
```javascript
{"_id":1,"date":"2017-02-08T12:10:40.787",timezone:"America/New_York"}
{"_id":2,"date":null,timezone:"America/New_York"}
```
```javascript
db.collection('dates').field('dateFromString(date, "%Y-%m-%dT%H:%M:%S.%L", timezone, date, new Date(0))')
```

执行结果：
Results of the:
```javascript
{"_id":1,"date": "2017-02-08T17:10:40.787Z"}
{"_id":2,"date": "1970-01-01T00:00:00Z"}
```

#### dateToString
根据指定的表达式将日期对象格式化为符合要求的字符串。
Formats a date object as a string according to the specified expression.

示例集合`sales`包含以下文档：
The example collection `sales` contains the following documents:

```javascript
{"_id":1,"item":"abc","price":10,"quantity":2,"date":"2014-01-01T08:15:39.736Z"}
```

将`date`字段格式化后返回：
Format the `date` field and return:

```javascript
db.collection('sales').field('dateToString(date, "%Y-%m-%d") as yearMonthDayUTC, dateToString(date, "%H:%M:%S:%L%z", "America/New_York") as timewithOffsetNY, dateToString(date, "%H:%M:%S:%L%z", "+04:30") as timewithOffset430, dateToString(date, "%Z", "America/New_York") as minutesOffsetNY, dateToString(date, "%Z", "+04:30") as minutesOffset430').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"yearMonthDayUTC":"2014-01-01","timewithOffsetNY":"03:15:39:736-0500","timewithOffset430":"12:45:39:736+0430","minutesOffsetNY":"-300","minutesOffset430":"270"}
```

#### dayOfMonth
返回日期字段对应的天数（一个月中的哪一天），是一个介于 1 至 31 之间的数字。
Returns the day (the day of the month) corresponding to the date field, which is a number between 1 and 31.

示例集合`sales`包含以下文档：
The example collection `sales` contains the following documents:

```javascript
{"_id":1,"item":"abc","price":10,"quantity":2,"date":"2014-01-01T08:15:39.736Z"}
```

解析`date`字段：
Parsing the `date` field:

```javascript
db.collection('sales').field('year(date) as year, month(date) as month, dayOfMonth(date) as day, hour(date) as hour, minutes(date) as minutes, second(date) as seconds, millisecond(date) as milliseconds, dayOfYear(date) as dayOfYear, dayOfWeek(date) as dayOfWeek, week(date) as week').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"year":2014,"month":1,"day":1,"hour":8,"minutes":15,"seconds":39,"milliseconds":736,"dayOfYear":1,"dayOfWeek":4,"week":0}
```
#### dayOfWeek
返回日期字段对应的天数（一周中的第几天），是一个介于 1（周日）到 7（周六）之间的整数。
Returns the day (day of the week) corresponding to the date field, which is an integer between 1 (Sunday) and 7 (Saturday).

示例集合`sales`包含以下文档：
The example collection `sales` contains the following documents:

```javascript
{"_id":1,"item":"abc","price":10,"quantity":2,"date":"2014-01-01T08:15:39.736Z"}
```

解析`date`字段：
Parsing the `date` field:

```javascript
db.collection('sales').field('year(date) as year, month(date) as month, dayOfMonth(date) as day, hour(date) as hour, minutes(date) as minutes, second(date) as seconds, millisecond(date) as milliseconds, dayOfYear(date) as dayOfYear, dayOfWeek(date) as dayOfWeek, week(date) as week').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"year":2014,"month":1,"day":1,"hour":8,"minutes":15,"seconds":39,"milliseconds":736,"dayOfYear":1,"dayOfWeek":4,"week":0}
```

#### dayOfYear
返回日期字段对应的天数（一年中的第几天），是一个介于 1 到 366 之间的整数。
Returns the day number (the day of the year) corresponding to the date field, which is an integer between 1 and 366.

示例集合`sales`包含以下文档：
The example collection `sales` contains the following documents:

```javascript
{"_id":1,"item":"abc","price":10,"quantity":2,"date":"2014-01-01T08:15:39.736Z"}
```

解析`date`字段：
Parsing the `date` field:

```javascript
db.collection('sales').field('year(date) as year, month(date) as month, dayOfMonth(date) as day, hour(date) as hour, minutes(date) as minutes, second(date) as seconds, millisecond(date) as milliseconds, dayOfYear(date) as dayOfYear, dayOfWeek(date) as dayOfWeek, week(date) as week').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"year":2014,"month":1,"day":1,"hour":8,"minutes":15,"seconds":39,"milliseconds":736,"dayOfYear":1,"dayOfWeek":4,"week":0}
```

#### hour
返回日期字段对应的小时数，是一个介于 0 到 23 之间的整数。
Returns the hour corresponding to the date field, an integer between 0 and 23.

示例集合`sales`包含以下文档：
The example collection `sales` contains the following documents:

```javascript
{"_id":1,"item":"abc","price":10,"quantity":2,"date":"2014-01-01T08:15:39.736Z"}
```

解析`date`字段：
Parsing the `date` field:

```javascript
db.collection('sales').field('year(date) as year, month(date) as month, dayOfMonth(date) as day, hour(date) as hour, minutes(date) as minutes, second(date) as seconds, millisecond(date) as milliseconds, dayOfYear(date) as dayOfYear, dayOfWeek(date) as dayOfWeek, week(date) as week').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"year":2014,"month":1,"day":1,"hour":8,"minutes":15,"seconds":39,"milliseconds":736,"dayOfYear":1,"dayOfWeek":4,"week":0}
```

#### isoDayOfWeek
返回日期字段对应的 ISO 8601 标准的天数（一周中的第几天），是一个介于 1（周一）到 7（周日）之间的整数。
Returns the ISO 8601 day number (day of the week) corresponding to the date field, which is an integer between 1 (Monday) and 7 (Sunday).

示例集合`birthdays`包含以下文档：
The example collection `birthdays` contains the following documents:

```javascript
{"_id":1,"name":"Betty","birthday":"1993-09-21T00:00:00Z"}
{"_id":2,"name":"Veronica","birthday":"1981-11-07T00:00:00Z"}
```

从`birthday`字段中返回一周中的第几天：
Return the day of the week from the `birthday` field:

```javascript
db.collection('dates').field('name, isoDayOfWeek(birthday) as dayOfWeek').get()
```

执行结果：
Results of the:

```javascript
{"name":"Betty","dayOfWeek":2}{"name":"Veronica","dayOfWeek":6}
```

#### isoWeek
返回日期字段对应的 ISO 8601 标准的周数（一年中的第几周），是一个介于 1 到 53 之间的整数。
Returns the ISO 8601 week number (week of the year) corresponding to the date field, an integer between 1 and 53.

示例集合`deliveries`包含以下文档：
The example collection `deliveries` contains the following documents:

```javascript
{"_id":1,"date":"2006-10-24T00:00:00Z","city":"Boston"}
{"_id":2,"date":"2011-08-18T00:00:00Z","city":"Detroit"}
```

返回每个`date`字段的星期数。
Returns the week number for each `date` field.

```javascript
db.collection('deliveries').field('city, isoWeek(date) as weekNumber').get()
```

执行结果：
Results of the:

```javascript
{"city":"Boston","weekNumber":43}{"city":"Detroit","weekNumber":33}
```

#### isoWeekYear
返回日期字段对应的 ISO 8601 标准的天数（一年中的第几天）。
Returns the ISO 8601 day number (day of the year) for a date field.

示例集合`anniversaries`包含以下文档：
The example collection `anniversaries` contains the following documents:

```javascript
{"_id":1,"date":"2016-01-01T00:00:00Z"}
{"_id":2,"date":"2016-01-04T00:00:00Z"}
{"_id":3,"date":"2015-01-01T00:00:00Z"}
{"_id":4,"date":"2014-04-21T00:00:00Z"}
```

返回`date`字段ISO 8601格式的年份。
Returns the year in ISO 8601 format for the `date` field.

```javascript
db.collection('anniversaries').field('isoWeekYear(date) as yearNumber').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"yearNumber":2015}
{"_id":2,"yearNumber":2016}
{"_id":3,"yearNumber":2015}
{"_id":4,"yearNumber":2014}
```

#### millisecond
返回日期字段对应的毫秒数，是一个介于 0 到 999 之间的整数。
Returns the milliseconds corresponding to the date field, which is an integer between 0 and 999.

示例集合`sales`包含以下文档：
The example collection `sales` contains the following documents:

```javascript
{"_id":1,"item":"abc","price":10,"quantity":2,"date":"2014-01-01T08:15:39.736Z"}
```

解析`date`字段：
Parsing the `date` field:

```javascript
db.collection('sales').field('year(date) as year, month(date) as month, dayOfMonth(date) as day, hour(date) as hour, minutes(date) as minutes, second(date) as seconds, millisecond(date) as milliseconds, dayOfYear(date) as dayOfYear, dayOfWeek(date) as dayOfWeek, week(date) as week').get()
```

#### minute
返回日期字段对应的分钟数，是一个介于 0 到 59 之间的整数。
Returns the minute corresponding to the date field, an integer between 0 and 59.

示例集合`sales`包含以下文档：
The example collection `sales` contains the following documents:

```javascript
{"_id":1,"item":"abc","price":10,"quantity":2,"date":"2014-01-01T08:15:39.736Z"}
```

解析`date`字段：
Parsing the `date` field:

```javascript
db.collection('sales').field('year(date) as year, month(date) as month, dayOfMonth(date) as day, hour(date) as hour, minutes(date) as minutes, second(date) as seconds, millisecond(date) as milliseconds, dayOfYear(date) as dayOfYear, dayOfWeek(date) as dayOfWeek, week(date) as week').get()
```

#### month
返回日期字段对应的月份，是一个介于 1 到 12 之间的整数。
Returns the month corresponding to the date field, which is an integer between 1 and 12.

示例集合`sales`包含以下文档：
The example collection `sales` contains the following documents:

```javascript
{"_id":1,"item":"abc","price":10,"quantity":2,"date":"2014-01-01T08:15:39.736Z"}
```

解析`date`字段：
Parsing the `date` field:

```javascript
db.collection('sales').field('year(date) as year, month(date) as month, dayOfMonth(date) as day, hour(date) as hour, minutes(date) as minutes, second(date) as seconds, millisecond(date) as milliseconds, dayOfYear(date) as dayOfYear, dayOfWeek(date) as dayOfWeek, week(date) as week').get()
```

#### second
返回日期字段对应的秒数，是一个介于 0 到 59 之间的整数，在特殊情况下（闰秒）可能等于 60。
Returns the number of seconds corresponding to the date field, an integer between 0 and 59, which may be equal to 60 in special cases (leap seconds).

示例集合`sales`包含以下文档：
The example collection `sales` contains the following documents:

```javascript
{"_id":1,"item":"abc","price":10,"quantity":2,"date":"2014-01-01T08:15:39.736Z"}
```

解析`date`字段：
Parsing the `date` field:

```javascript
db.collection('sales').field('year(date) as year, month(date) as month, dayOfMonth(date) as day, hour(date) as hour, minutes(date) as minutes, second(date) as seconds, millisecond(date) as milliseconds, dayOfYear(date) as dayOfYear, dayOfWeek(date) as dayOfWeek, week(date) as week').get()
```

#### week
返回日期字段对应的周数（一年中的第几周），是一个介于 0 到 53 之间的整数。
Returns the week number (week of the year) corresponding to the date field, which is an integer between 0 and 53.

示例集合`sales`包含以下文档：
The example collection `sales` contains the following documents:

```javascript
{"_id":1,"item":"abc","price":10,"quantity":2,"date":"2014-01-01T08:15:39.736Z"}
```

解析`date`字段：
Parsing the `date` field:

```javascript
db.collection('sales').field('year(date) as year, month(date) as month, dayOfMonth(date) as day, hour(date) as hour, minutes(date) as minutes, second(date) as seconds, millisecond(date) as milliseconds, dayOfYear(date) as dayOfYear, dayOfWeek(date) as dayOfWeek, week(date) as week').get()
```

#### year
返回日期字段对应的年份。
Returns the year corresponding to the date field.

示例集合`sales`包含以下文档：
The example collection `sales` contains the following documents:

```javascript
{"_id":1,"item":"abc","price":10,"quantity":2,"date":"2014-01-01T08:15:39.736Z"}
```

解析`date`字段：
Parsing the `date` field:

```javascript
db.collection('sales').field('year(date) as year, month(date) as month, dayOfMonth(date) as day, hour(date) as hour, minutes(date) as minutes, second(date) as seconds, millisecond(date) as milliseconds, dayOfYear(date) as dayOfYear, dayOfWeek(date) as dayOfWeek, week(date) as week').get()
```

#### timestampToDate
传入一个时间戳，返回对应的日期对象。
Pass in a timestamp and return the corresponding date object.

> 仅JQL字符串内支持，HBuilderX 3.1.0起支持
> Only supported in JQL strings, supported since HBuilderX 3.1.0

示例集合`sales`包含以下文档：
The example collection `sales` contains the following documents:

```javascript
{"_id":1,"item":"abc","date": 1664697600000}
```

返回 `date`字段的日期对象：
Return a date object for the `date` field:

```javascript
db.collection('sales').field('item, timestampToDate(date) as date').get()
```

执行结果：
Results of the:
```javascript
{"_id":1,"item":"abc","date": "2022-10-02T08:00:00.000Z"}
```

### 文字运算方法
### Literal operation methods
#### literal
直接返回一个值的字面量，不经过任何解析和处理。
Directly returns a value literal without any parsing and processing.

**将 `$` 视为字面量**
**Treat `$` as a literal value**

示例集合`records`包含以下文档：
The example collection `records` contains the following documents:

```javascript
{"_id":1,"item":"abc123",price:"$2.50"}
{"_id":2,"item":"xyz123",price:"1"}
{"_id":3,"item":"ijk123",price:"$1"}
```

判断 `price` 是否等于字符串 `$1`:
Check whether `price` is equal to the string `$1`:
```javascript
db.collection('records').field('eq(price, literal($1)) as costsOneDollar').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"costsOneDollar":false}
{"_id":2,"costsOneDollar":false}
{"_id":3,"costsOneDollar":true}
```

### 对象运算方法
### Object operation method
#### mergeObjects
将多个对象合并为单个对象。
Merge multiple objects into a single object.

> 注意：如果要合并的文档包含相同的字段名称，则结果文档中的字段将会覆盖上次合并的文档中的值。
> Note: If the documents to be merged contain the same field names, the fields in the resulting document will override the values in the last merged document.

示例集合`orders`包含以下文档：
The example collection `orders` contains the following documents:

```javascript
{"_id":1,"item":"abc","price":12,"ordered":2}
{"_id":2,"item":"jkl","price":20,"ordered":1}
```

另外一个示例集合`items`包含以下文档：
Another example collection `items` contains the following documents:

```javascript
{"_id":1,"item":"abc",description:"product 1","instock":120}
{"_id":2,"item":"def",description:"product 2","instock":80}
{"_id":3,"item":"jkl",description:"product 3","instock":60}
```

**合并 `items` 与 `orders`**
**Merge `items` and `orders`**

先通过 `lookup` 将两表进行关联，之后使用 `mergeObjects` 表达式在 `replaceRoot` 阶段合并两表。
First associate the two tables through `lookup`, and then use the `mergeObjects` expression to merge the two tables in the `replaceRoot` stage.
```javascript
db.collection('orders').aggregate().lookup({
    from: "items",
    let: {
        item: "$item"
    },
    pipeline: $.pipeline().match(db.command.expr($.and([
        $.eq(['$item', '$$item'])
    ]))).done(),
    as: 'fromItems'
}).replaceRoot({
    newRoot: $.mergeObjects([ $.arrayElemAt(['$fromItems', 0]), '$$ROOT' ])
}).project({
    fromItems: 0
}).end()
```

执行返回：
Execution returns:

```javascript
{"_id":1,"item":"abc","description":"product 1","instock":120,"price":12,"ordered":2}
{"_id":2,"item":"jkl","description":"product 3","instock":60,"price":20,"ordered":1}
```

**在`groupBy`中使用**
**used in `groupBy`**

示例集合`sales`包含以下文档：
The example collection `sales` contains the following documents:

```javascript
{_id:1,year:2017,item:"A",quantity:{"2017Q1":500,"2017Q2":500}}
{_id:2,year:2016,item:"A",quantity:{"2016Q1":400,"2016Q2":300,"2016Q3":0,"2016Q4":0}}
{_id:3,year:2017,item:"B",quantity:{"2017Q1":300}}
{_id:4,year:2016,item:"B",quantity:{"2016Q3":100,"2016Q4":250}}
```

按照 `item` 进行分组，`mergeObjects` 仅接受单个对象操作。
Group by `item`, `mergeObjects` only accepts single object operations.

```javascript
db.collection('sales').groupBy('item').groupField('mergeObjects(quantity) as mergedSales').get()
```

执行结果：
Results of the:

```javascript
{"_id":"B","mergedSales":{"2017Q1":300,"2016Q3":100,"2016Q4":250}}
{"_id":"A","mergedSales":{"2017Q1":500,"2017Q2":500,"2016Q1":400,"2016Q2":300,"2016Q3":0,"2016Q4":0}}
```

#### objectToArray
将文档转换为代表键值对的文档数组。
Convert a document to an array of documents representing key-value pairs.

示例集合`inventory`包含以下文档：
The example collection `inventory` contains the following documents:

```javascript
{"_id":1,"item":"ABC1",dimensions:{l:25,w:10,uom:"cm"}}
{"_id":2,"item":"ABC2",dimensions:{l:50,w:25,uom:"cm"}}
{"_id":3,"item":"XYZ1",dimensions:{l:70,w:75,uom:"cm"}}
```

将`dimensions`字段作为数组返回：
Return the `dimensions` field as an array:

```javascript
db.collection('inventory').field('item, objectToArray(dimensions) as dimensionsArray').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"item":"ABC1","dimensions":[{"k":"l","v":25},{"k":"w","v":10},{"k":"uom","v":"cm"}]}
{"_id":2,"item":"ABC2","dimensions":[{"k":"l","v":50},{"k":"w","v":25},{"k":"uom","v":"cm"}]}
{"_id":3,"item":"XYZ1","dimensions":[{"k":"l","v":70},{"k":"w","v":75},{"k":"uom","v":"cm"}]}
```

### 集合运算方法
### Set operation method
Set 表达式对数组执行 set 操作，将数组视为 sets。 Set 表达式忽略每个输入数组中的重复条目和元素的顺序。
Set expressions perform set operations on arrays, treating arrays as sets. Set expressions ignore duplicate entries and the order of elements in each input array.

如果 set 操作返回一个 set，则该操作会过滤掉结果中的重复项，以输出仅包含唯一条目的 array。输出 array 中元素的顺序未指定。
If a set operation returns a set, the operation filters out duplicates in the result to output an array containing only unique entries. The order of elements in the output array is unspecified.

如果集合包含嵌套的 array 元素，则 set 表达式不会下降到嵌套的 array 中，而是在顶层level 处计算 array。
If the set contains nested array elements, the set expression does not descend into the nested array, but evaluates the array at the top level.

#### allElementsTrue
输入一个数组，或者数组字段的表达式。如果数组中所有元素均为真值，那么返回 true，否则返回 false。空数组永远返回 true。
Enter an array, or an expression for an array field. Returns true if all elements in the array are true, otherwise returns false. Empty arrays always return true.
示例集合`survey`使用以下文档：
The example collection `survey` uses the following documents:

```javascript
{"_id":1,"responses":[true]}
{"_id":2,"responses":[true,false]}
{"_id":3,"responses":[]}
{"_id":4,"responses":[1,true,"seven"]}
{"_id":5,"responses":[0]}
{"_id":6,"responses":[[]]}
{"_id":7,"responses":[[0]]}
{"_id":8,"responses":[[false]]}
{"_id":9,"responses":[null]}
{"_id":10,"responses":[undefined]}
```

判断`responses`数组是否仅包含计算结果为`true`的值：
Check if the `responses` array contains only values that evaluate to `true`:

```javascript
db.collection('survey').field('responses, allElementsTrue(responses) as isAllTrue').get()
```

执行结果：
Results of the:

```javascript
{"responses":[true],"isAllTrue":true}
{"responses":[true,false],"isAllTrue":false}
{"responses":[],"isAllTrue":true}
{"responses":[1,true,"seven"],"isAllTrue":true}
{"responses":[0],"isAllTrue":false}
{"responses":[[]],"isAllTrue":true}
{"responses":[[0]],"isAllTrue":true}
{"responses":[[false]],"isAllTrue":true}
{"responses":[null],"isAllTrue":false}
{"responses":[undefined],"isAllTrue":false}
```

#### anyElementTrue
输入一个数组，或者数组字段的表达式。如果数组中任意一个元素为真值，那么返回 true，否则返回 false。空数组永远返回 false。
Enter an array, or an expression for an array field. Returns true if any element in the array is true, otherwise returns false. Empty arrays always return false.

示例集合`survey`包含以下文档：
The example collection `survey` contains the following documents:

```javascript
{"_id":1,"responses":[true]}
{"_id":2,"responses":[true,false]}
{"_id":3,"responses":[]}
{"_id":4,"responses":[1,true,"seven"]}
{"_id":5,"responses":[0]}
{"_id":6,"responses":[[]]}
{"_id":7,"responses":[[0]]}
{"_id":8,"responses":[[false]]}
{"_id":9,"responses":[null]}
{"_id":10,"responses":[undefined]}
```

判断`responses`数组是否包含任何计算结果为`true`：
Determine if the `responses` array contains any that evaluate to `true`:

```javascript
db.collection('survey').field('responses, anyElementTrue(responses) as isAnyTrue').get()
```

执行结果：
Results of the:

```javascript
{"responses":[true],"isAnyTrue":true}
{"responses":[true,false],"isAnyTrue":true}
{"responses":[],"isAnyTrue":false}
{"responses":[1,true,"seven"],"isAnyTrue":true}
{"responses":[0],"isAnyTrue":false}
{"responses":[[]],"isAnyTrue":true}
{"responses":[[0]],"isAnyTrue":true}
{"responses":[[false]],"isAnyTrue":true}
{"responses":[null],"isAnyTrue":false}
{"responses":[undefined],"isAnyTrue":false}
```
#### setDifference
输入两个集合，输出只存在于第一个集合中的元素
Input two collections, output elements that only exist in the first collection

示例集合`experiments`包含以下文档：
The example collection `experiments` contains the following documents:

```javascript
{"_id":1,"A":["red","blue"],"B":["red","blue"]}
{"_id":2,"A":["red","blue"],"B":["blue","red","blue"]}
{"_id":3,"A":["red","blue"],"B":["red","blue","green"]}
{"_id":4,"A":["red","blue"],"B":["green","red"]}
{"_id":5,"A":["red","blue"],"B":[]}
{"_id":6,"A":["red","blue"],"B":[["red"],["blue"]]}
{"_id":7,"A":["red","blue"],"B":[["red","blue"]]}
{"_id":8,"A":[],"B":[]}
{"_id":9,"A":[],"B":["red"]}
```

比较A,B数组，返回只有在数组B中的值：
Compare A and B arrays and return only the values in array B:

```javascript
db.collection('experiments').field('A, B, setDifference(B, A) as inBOnly').get()
```

执行结果：
Results of the:

```javascript
{"A":["red","blue"],"B":["red","blue"],"inBOnly":[]}
{"A":["red","blue"],"B":["blue","red","blue"],"inBOnly":[]}
{"A":["red","blue"],"B":["red","blue","green"],"inBOnly":["green"]}
{"A":["red","blue"],"B":["green","red"],"inBOnly":["green"]}
{"A":["red","blue"],"B":[],"inBOnly":[]}
{"A":["red","blue"],"B":[["red"],["blue"]],"inBOnly":[["red"],["blue"]]}
{"A":["red","blue"],"B":[["red","blue"]],"inBOnly":[["red","blue"]]}
{"A":[],"B":[],"inBOnly":[]}
{"A":[],"B":["red"],"inBOnly":["red"]}
```

#### setEquals
输入两个集合，判断两个集合中包含的元素是否相同（不考虑顺序、去重）
Enter two collections, and judge whether the elements contained in the two collections are the same (regardless of order, deduplication)

示例集合`experiments`包含以下文档：
The example collection `experiments` contains the following documents:

```javascript
{"_id":1,"A":["red","blue"],"B":["red","blue"]}
{"_id":2,"A":["red","blue"],"B":["blue","red","blue"]}
{"_id":3,"A":["red","blue"],"B":["red","blue","green"]}
{"_id":4,"A":["red","blue"],"B":["green","red"]}
{"_id":5,"A":["red","blue"],"B":[]}
{"_id":6,"A":["red","blue"],"B":[["red"],["blue"]]}
{"_id":7,"A":["red","blue"],"B":[["red","blue"]]}
{"_id":8,"A":[],"B":[]}{"_id":9,"A":[],"B":["red"]}
```

判断`A`数组和`B`数组是否包含相同的元素：
Determine whether `A` array and `B` array contain the same elements:

```javascript
db.collection('experiments').field('A, B, setEquals(A, B) as sameElements').get()
```

执行结果：
Results of the:

```javascript
{"A":["red","blue"],"B":["red","blue"],"sameElements":true}
{"A":["red","blue"],"B":["blue","red","blue"],"sameElements":true}
{"A":["red","blue"],"B":["red","blue","green"],"sameElements":false}
{"A":["red","blue"],"B":["green","red"],"sameElements":false}
{"A":["red","blue"],"B":[],"sameElements":false}
{"A":["red","blue"],"B":[["red"],["blue"]],"sameElements":false}
{"A":["red","blue"],"B":[["red","blue"]],"sameElements":false}
{"A":[],"B":[],"sameElements":true}{"A":[],"B":["red"],"sameElements":false}
```

#### setIntersection
输入两个集合，输出两个集合的交集
Input two sets, output the intersection of the two sets

示例集合`experiments`包含以下文档：
The example collection `experiments` contains the following documents:

```javascript
{"_id":1,"A":["red","blue"],"B":["red","blue"]}
{"_id":2,"A":["red","blue"],"B":["blue","red","blue"]}
{"_id":3,"A":["red","blue"],"B":["red","blue","green"]}
{"_id":4,"A":["red","blue"],"B":["green","red"]}
{"_id":5,"A":["red","blue"],"B":[]}
{"_id":6,"A":["red","blue"],"B":[["red"],["blue"]]}
{"_id":7,"A":["red","blue"],"B":[["red","blue"]]}
{"_id":8,"A":[],"B":[]}{"_id":9,"A":[],"B":["red"]}
```

返回`A`数组和`B`数组共同的元素数组：
Returns an array of elements common to arrays `A` and `B`:

```javascript
db.collection('experiments').field('A, B, setIntersection(A, B) as commonToBoth').get()
```

执行结果：
Results of the:

```javascript
{"A":["red","blue"],"B":["red","blue"],"commonToBoth":["blue","red"]}
{"A":["red","blue"],"B":["blue","red","blue"],"commonToBoth":["blue","red"]}
{"A":["red","blue"],"B":["red","blue","green"],"commonToBoth":["blue","red"]}
{"A":["red","blue"],"B":["green","red"],"commonToBoth":["red"]}
{"A":["red","blue"],"B":[],"commonToBoth":[]}
{"A":["red","blue"],"B":[["red"],["blue"]],"commonToBoth":[]}
{"A":["red","blue"],"B":[["red","blue"]],"commonToBoth":[]}
{"A":[],"B":[],"commonToBoth":[]}{"A":[],"B":["red"],"commonToBoth":[]}
```

#### setIsSubset
输入两个集合，判断第一个集合是否是第二个集合的子集。
Given two sets, determine whether the first set is a subset of the second set.

示例集合`experiments`包含以下文档：
The example collection `experiments` contains the following documents:

```javascript
{"_id":1,"A":["red","blue"],"B":["red","blue"]}
{"_id":2,"A":["red","blue"],"B":["blue","red","blue"]}
{"_id":3,"A":["red","blue"],"B":["red","blue","green"]}
{"_id":4,"A":["red","blue"],"B":["green","red"]}
{"_id":5,"A":["red","blue"],"B":[]}
{"_id":6,"A":["red","blue"],"B":[["red"],["blue"]]}
{"_id":7,"A":["red","blue"],"B":[["red","blue"]]}
{"_id":8,"A":[],"B":[]}{"_id":9,"A":[],"B":["red"]}
```

判断`A`数组是否为数组的子集`B`：
Determine whether the array `A` is a subset of the array `B`:

```javascript
db.collection('experiments').field('A, B, setIsSubset(A, B) as AisSubset').get()
```

执行结果：
Results of the:

```javascript
{"A":["red","blue"],"B":["red","blue"],"AisSubset":true}
{"A":["red","blue"],"B":["blue","red","blue"],"AisSubset":true}
{"A":["red","blue"],"B":["red","blue","green"],"AisSubset":true}
{"A":["red","blue"],"B":["green","red"],"AisSubset":false}
{"A":["red","blue"],"B":[],"AisSubset":false}
{"A":["red","blue"],"B":[["red"],["blue"]],"AisSubset":false}
{"A":["red","blue"],"B":[["red","blue"]],"AisSubset":false}
{"A":[],"B":[],"AisSubset":true}{"A":[],"B":["red"],"AisSubset":true}
```

#### setUnion
输入两个集合，输出两个集合的并集。
Input two sets and output the union of the two sets.

示例集合`experiments`包含以下文档：
The example collection `experiments` contains the following documents:

```javascript
{"_id":1,"A":["red","blue"],"B":["red","blue"]}
{"_id":2,"A":["red","blue"],"B":["blue","red","blue"]}
{"_id":3,"A":["red","blue"],"B":["red","blue","green"]}
{"_id":4,"A":["red","blue"],"B":["green","red"]}
{"_id":5,"A":["red","blue"],"B":[]}
{"_id":6,"A":["red","blue"],"B":[["red"],["blue"]]}
{"_id":7,"A":["red","blue"],"B":[["red","blue"]]}
{"_id":8,"A":[],"B":[]}{"_id":9,"A":[],"B":["red"]}
```

返回在`A`数组或`B`数组或两者中都找到的元素数组：
Return an array of elements found in the `A` array or the `B` array, or both:

```javascript
db.collection('experiments').field('A, B, setUnion(A, B) as allValues').get()
```

执行结果：
Results of the:

```javascript
{"A":["red","blue"],"B":["red","blue"],"allValues":["blue","red"]}
{"A":["red","blue"],"B":["blue","red","blue"],"allValues":["blue","red"]}
{"A":["red","blue"],"B":["red","blue","green"],"allValues":["blue","red","green"]}
{"A":["red","blue"],"B":["green","red"],"allValues":["blue","red","green"]}
{"A":["red","blue"],"B":[],"allValues":["blue","red"]}
{"A":["red","blue"],"B":[["red"],["blue"]],"allValues":["blue","red",["red"],["blue"]]}
{"A":["red","blue"],"B":[["red","blue"]],"allValues":["blue","red",["red","blue"]]}
{"A":[],"B":[],"allValues":[]}{"A":[],"B":["red"],"allValues":["red"]}
```

### 字符串运算方法
### String operation method
字符串表达式（除外 `concat`）仅对ASCII字符字符串具有明确定义的行为。
String expressions (except `concat`) have well-defined behavior only for strings of ASCII characters.

`concat` 行为是明确定义的，与所使用的字符无关。
The behavior of `concat` is well-defined independent of the characters used.

#### concat
连接任意数量的字符串。
Concatenate any number of strings.

示例集合`inventory`包含以下文档：
The example collection `inventory` contains the following documents:

```javascript
{"_id":1,"item":"ABC1",quarter:"13Q1","description":"product 1"}
{"_id":2,"item":"ABC2",quarter:"13Q4","description":"product 2"}
{"_id":3,"item":"XYZ1",quarter:"14Q2","description":null}
```

将`item`字段和`description`用“-”定界符的字段连接起来：
Concatenate the `item` field and the `description` field with the "-" delimiter:
```javascript
db.collection('inventory').field('concat(item, "-", "description") as itemDescription').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"itemDescription":"ABC1 - product 1"}
{"_id":2,"itemDescription":"ABC2 - product 2"}
{"_id":3,"itemDescription":null}
```

#### indexOfBytes
在目标字符串中查找子字符串，并返回第一次出现的 UTF-8 的字节索引（从0开始）。如果不存在子字符串，返回 -1
Finds a substring in the target string and returns the UTF-8 byte index (starting from 0) of the first occurrence. Returns -1 if no substring exists

示例集合`inventory`包含以下文档：
The example collection `inventory` contains the following documents:

```javascript
{"_id":1,"item":"foo"}
{"_id":2,"item":"fóofoo"}
{"_id":3,"item":"the foo bar"}
{"_id":4,"item":"hello world fóo"}
{"_id":5,"item":null}{"_id":6,"amount":3}
```

检索每个项目中字符串foo所在的索引：
Retrieve the index where the string foo resides in each item:

```javascript
db.collection('inventory').field('indexOfBytes(item, "foo") as bytyLocation').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"byteLocation":"0"}
{"_id":2,"byteLocation":"4"}
{"_id":3,"byteLocation":"4"}
{"_id":4,"byteLocation":"-1"}
{"_id":5,"byteLocation":null}
{"_id":6,"byteLocation":null}
```

#### indexOfCP
在目标字符串中查找子字符串，并返回第一次出现的 UTF-8 的 code point 索引（从0开始）。如果不存在子字符串，返回 -1
Finds a substring in the target string and returns the UTF-8 code point index (starting from 0) of the first occurrence. Returns -1 if no substring exists

示例集合`inventory`包含以下文档：
The example collection `inventory` contains the following documents:

```javascript
{"_id":1,"item":"foo"}
{"_id":2,"item":"fóofoo"}
{"_id":3,"item":"the foo bar"}
{"_id":4,"item":"hello world fóo"}
{"_id":5,"item":null}
{"_id":6,"amount":3}
```

返回`foo`每个`item`字符串中字符串所在的代码点索引：
Returns the code point index where the string is located in each `item` string of `foo`:

```javascript
db.collection('inventory').field('indexOfCP(item, "foo") as cpLocation').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"cpLocation":"0"}
{"_id":2,"cpLocation":"3"}
{"_id":3,"cpLocation":"4"}
{"_id":4,"cpLocation":"-1"}
{"_id":5,"cpLocation":null}
{"_id":6,"cpLocation":null}
```

#### split
按照分隔符分隔数组，并且删除分隔符，返回子字符串组成的数组。如果字符串无法找到分隔符进行分隔，返回原字符串作为数组的唯一元素
Splits the array by delimiter and removes the delimiter, returning an array of substrings. If the string cannot be separated by a delimiter, return the original string as the only element of the array

示例集合`deliveries`包含以下文档：
The example collection `deliveries` contains the following documents:

```javascript
{"_id":1,"city":"Berkeley, CA","qty":648}
{"_id":2,"city":"Bend, OR","qty":491}
{"_id":3,"city":"Kensington, CA","qty":233}
```

通过分割创建字符串数组`city`字段，使用`, `作为分隔符。
Create string array `city` field by splitting, using `,` as delimiter.
```javascript
db.collection('deliveries').field('split(city, ", ") as city_state').get()
```
执行结果：
Results of the:

```javascript
{"_id":1,"city_state":["Berkeley", "CA"]}
{"_id":2,"city_state":["Bend", "OR"]}
{"_id":3,"city_state":["Kensington", "CA"]}
```

#### strLenBytes
计算并返回指定字符串中 utf-8 编码的字节数量。
Calculates and returns the number of utf-8 encoded bytes in the specified string.

示例集合`food`包含以下文档：
The example collection `food` contains the following documents:

```javascript
{"_id":1,"name":"apple"}
{"_id":2,"name":"banana"}
{"_id":3,"name":"éclair"}
{"_id":4,"name":"hamburger"}
{"_id":5,"name":"jalapeño"}
{"_id":6,"name":"pizza"}
{"_id":7,"name":"tacos"}
{"_id":8,"name":"寿司"}
```

计算每个`name`值的`length`：
Compute the `length` for each `name` value:
```javascript
db.collection('food').field('name, strLenBytes(name) as length').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"name":"apple","length":5}
{"_id":2,"name":"banana","length":6}
{"_id":3,"name":"éclair","length":7}
{"_id":4,"name":"hamburger","length":9}
{"_id":5,"name":"jalapeño","length":9}
{"_id":6,"name":"pizza","length":5}
{"_id":7,"name":"tacos","length":5}
{"_id":8,"name":"寿司","length":6}
```

_id: 3 和 _id: 5 的文档每个都包含一个变音符号（分别为 é 和 ñ），需要两个字节进行编码。
The documents for _id: 3 and _id: 5 each contain an umlaut (é and ñ, respectively), which requires two bytes to encode.

_id: 8 的文档包含两个日语字符，每个字符使用三个字节进行编码。
The document with _id: 8 contains two Japanese characters encoded using three bytes each.

这使得长度大于具有 _id: 3、_id: 5 和 _id: 8 的文档的名称中的字符数。
This makes the length greater than the number of characters in the names of documents with _id: 3, _id: 5, and _id: 8.

#### strLenCP
计算并返回指定字符串的UTF-8 code points 数量。
Calculates and returns the number of UTF-8 code points for the specified string.

示例集合`food`包含以下文档：
The example collection `food` contains the following documents:

```javascript
{"_id":1,"name":"apple"}
{"_id":2,"name":"banana"}
{"_id":3,"name":"éclair"}
{"_id":4,"name":"hamburger"}
{"_id":5,"name":"jalapeño"}
{"_id":6,"name":"pizza"}
{"_id":7,"name":"tacos"}
{"_id":8,"name":"寿司"}
```

计算每个`name`值的`length`：
Compute the `length` for each `name` value:

```javascript
db.collection('food').field('name, strLenCP(name) as length').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"name":"apple","length":5}
{"_id":2,"name":"banana","length":6}
{"_id":3,"name":"éclair","length":6}
{"_id":4,"name":"hamburger","length":9}
{"_id":5,"name":"jalapeño","length":8}
{"_id":6,"name":"pizza","length":5}
{"_id":7,"name":"tacos","length":5}
{"_id":8,"name":"寿司","length":2}
```

#### strcasecmp
对两个字符串在不区分大小写的情况下进行大小比较，并返回比较的结果
Compare two strings case-insensitively, and return the result of the comparison

示例集合`inventory`包含以下文档：
The example collection `inventory` contains the following documents:

```javascript
{"_id":1,"item":"ABC1",quarter:"13Q1","description":"product 1"}
{"_id":2,"item":"ABC2",quarter:"13Q4","description":"product 2"}
{"_id":3,"item":"XYZ1",quarter:"14Q2","description":null}
```

对`quarter`字段值与字符串“13q4”进行不区分大小写的比较：
Perform a case-insensitive comparison of the `quarter` field value with the string "13q4":

```javascript
db.collection('inventory').field('item, strcasecmp(quarter, "13q4") as comparisonResult').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"item":"ABC1","comparisonResult":-1}
{"_id":2,"item":"ABC2","comparisonResult":0}
{"_id":3,"item":"XYZ1","comparisonResult":1}
```

#### substr
返回字符串从指定位置开始的指定长度的子字符串。
Returns a substring of the specified length of the string starting at the specified position.

> 不推荐使用，推荐使用`substrBytes`或`substrCP`
> Deprecated, recommend using `substrBytes` or `substrCP`

示例集合`inventory`包含以下文档：
The example collection `inventory` contains the following documents:

```javascript
{"_id":1,"item":"ABC1",quarter:"13Q1","description":"product 1"}
{"_id":2,"item":"ABC2",quarter:"13Q4","description":"product 2"}
{"_id":3,"item":"XYZ1",quarter:"14Q2","description":null}
```

将`quarter`分为 `yearSubstring` 和 `QuarterSubstring`：
Divide `quarter` into `yearSubstring` and `QuarterSubstring`:
```javascript
db.collection('inventory').field('item, substr(quarter, 0, 2) as yearSubstring, substr(quarter, 2, -1) as quarterSubtring')
```

执行结果：
Results of the:

```javascript
{"_id":1,"item":"ABC1","yearSubstring":"13","quarterSubtring":"Q1"}
{"_id":2,"item":"ABC2","yearSubstring":"13","quarterSubtring":"Q4"}
{"_id":3,"item":"XYZ1","yearSubstring":"14","quarterSubtring":"Q2"}
```

#### substrBytes
返回字符串从指定位置开始的指定长度的子字符串。子字符串是由字符串中指定的 UTF-8 字节索引的字符开始，长度为指定的字节数。
Returns a substring of the specified length of the string starting at the specified position. The substring starts at the character at the specified UTF-8 byte index in the string and is the specified number of bytes long.

示例集合`inventory`包含以下文档：
The example collection `inventory` contains the following documents:

```javascript
{"_id":1,"item":"ABC1",quarter:"13Q1","description":"product 1"}
{"_id":2,"item":"ABC2",quarter:"13Q4","description":"product 2"}
{"_id":3,"item":"XYZ1",quarter:"14Q2","description":null}
```
将`quarter`（仅包含单字节 US-ASCII 字符）分隔为 `yearSubstring` 和 `QuarterSubstring`。
Separate `quarter` (containing only single-byte US-ASCII characters) into `yearSubstring` and `QuarterSubstring`.

`QuarterSubstring` 字段表示来自 `yearSubstring` 之后的指定字节索引的字符串的其余部分。
The `QuarterSubstring` field represents the rest of the string from the specified byte index after `yearSubstring`.

它是通过使用 `strLenBytes` 从字符串的长度中减去字节索引来计算的。
It is calculated by subtracting the byte index from the length of the string using `strLenBytes`.

```javascript
db.collection('inventory').field('item, substrBytes(quarter, 0, 2) as yearSubstring, substrBytes(quarter, 2, subtract(strLenBytes(quarter), 2)) as quarterSubtring').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"item":"ABC1","yearSubstring":"13","quarterSubtring":"Q1"}
{"_id":2,"item":"ABC2","yearSubstring":"13","quarterSubtring":"Q4"}
{"_id":3,"item":"XYZ1","yearSubstring":"14","quarterSubtring":"Q2"}
```

#### substrCP
返回字符串从指定位置开始的指定长度的子字符串。子字符串是由字符串中指定的 UTF-8 字节索引的字符开始，长度为指定的字节数
Returns a substring of the specified length of the string starting at the specified position. The substring starts at the character at the specified UTF-8 byte index in the string and is the specified number of bytes long

示例集合`inventory`包含以下文档：
The example collection `inventory` contains the following documents:

```javascript
{"_id":1,"item":"ABC1",quarter:"13Q1","description":"product 1"}
{"_id":2,"item":"ABC2",quarter:"13Q4","description":"product 2"}
{"_id":3,"item":"XYZ1",quarter:"14Q2","description":null}
```
将`quarter`分隔为 `yearSubstring` 和 `QuarterSubstring`。
Split `quarter` into `yearSubstring` and `QuarterSubstring`.

`QuarterSubstring` 字段表示来自 `yearSubstring` 之后的指定字节索引的字符串的其余部分。
The `QuarterSubstring` field represents the rest of the string from the specified byte index after `yearSubstring`.

它是通过使用 `strLenCP` 从字符串的长度中减去字节索引来计算的。
It is calculated by subtracting the byte index from the length of the string using `strLenCP`.

```javascript
db.collection('inventory').field('item, substrCP(quarter, 0, 2) as yearSubstring, substrCP(quarter, 2, subtract(strLenCP(quarter), 2))').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"item":"ABC1","yearSubstring":"13","quarterSubtring":"Q1"}
{"_id":2,"item":"ABC2","yearSubstring":"13","quarterSubtring":"Q4"}
{"_id":3,"item":"XYZ1","yearSubstring":"14","quarterSubtring":"Q2"}
```

#### toLower
将字符串转换为小写。接受单个参数表达式。
Convert a string to lowercase. Accepts a single argument expression.

示例集合`inventory`包含以下文档：
The example collection `inventory` contains the following documents:

```javascript
{"_id":1,"item":"ABC1",quarter:"13Q1","description":"PRODUCT 1"}
{"_id":2,"item":"abc2",quarter:"13Q4","description":"Product 2"}
{"_id":3,"item":"xyz1",quarter:"14Q2","description":null}
```

返回小写`item`和小写`description`值：
Return lowercase `item` and lowercase `description` values:

```javascript
db.collection('inventory').field('toLower(item) as item, toLower(description) as description').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"item":"abc1","description":"product 1"}
{"_id":2,"item":"abc2","description":"product 2"}
{"_id":3,"item":"xyz1","description":""}
```

#### toUpper
将字符串转换为大写。接受单个参数表达式。
Convert a string to uppercase. Accepts a single argument expression.

示例集合`inventory`包含以下文档：
The example collection `inventory` contains the following documents:

```javascript
{"_id":1,"item":"ABC1",quarter:"13Q1","description":"PRODUCT 1"}
{"_id":2,"item":"abc2",quarter:"13Q4","description":"Product 2"}
{"_id":3,"item":"xyz1",quarter:"14Q2","description":null}
```

返回大写`item`和大写`description`值：
Return uppercase `item` and uppercase `description` values:

```javascript
db.collection('inventory').field('toUpper(item) as item, toUpper(description) as description').get()
```

执行结果：
Results of the:

```javascript
{"_id":1,"item":"ABC1","description":"PRODUCT 1"}
{"_id":2,"item":"ABC2","description":"PRODUCT 2"}
{"_id":3,"item":"XYZ1","description":""}
```

### 分组(groupBy)运算方法@group
### Grouping (groupBy) operation method @group

#### addToSet
向数组中添加值，如果数组中已存在该值，不执行任何操作。
Adds a value to the array, or does nothing if the value already exists in the array.

示例集合`sales`包含以下文档：
The example collection `sales` contains the following documents:

```javascript
{"_id":1,"item":"abc","price":10,"quantity":2,"date":"2014-01-01T08:00:00Z"}
{"_id":2,"item":"jkl","price":20,"quantity":1,"date":"2014-02-03T09:00:00Z"}
{"_id":3,"item":"xyz","price":5,"quantity":5,"date":"2014-02-03T09:05:00Z"}
{"_id":4,"item":"abc","price":10,"quantity":10,"date":"2014-02-15T08:00:00Z"}
{"_id":5,"item":"xyz","price":5,"quantity":10,"date":"2014-02-15T09:12:00Z"}
```

计算每组出售的唯一商品的列表：
Compute the list of unique items sold by each group:

```javascript
db.collection('sales').groupBy('dayOfYear(date) as day, year(date) as year').groupField('addToSet(item) as itemsSold').get()
```

执行结果：
Results of the:

```javascript
{"day":46,"year":2014,"itemsSold":["xyz","abc"]}
{"day":34,"year":2014,"itemsSold":["xyz","jkl"]}
{"day":1,"year":2014,"itemsSold":["abc"]}
```

#### avg
返回指定表达式对应数据的平均值。
Returns the mean of the data corresponding to the specified expression.

示例集合`sales`包含以下文档：
The example collection `sales` contains the following documents:

```javascript
{"_id":1,"item":"abc","price":10,"quantity":2,"date":"2014-01-01T08:00:00Z"}
{"_id":2,"item":"jkl","price":20,"quantity":1,"date":"2014-02-03T09:00:00Z"}
{"_id":3,"item":"xyz","price":5,"quantity":5,"date":"2014-02-03T09:05:00Z"}
{"_id":4,"item":"abc","price":10,"quantity":10,"date":"2014-02-15T08:00:00Z"}
{"_id":5,"item":"xyz","price":5,"quantity":10,"date":"2014-02-15T09:12:00Z"}
```

按`item`字段对文档进行分组，并计算每个分组的平均数量和平均数量。
Group documents by the `item` field and calculate the average and average count for each group.

```javascript
db.collection('sales').groupBy('item').groupField('avg(multiply(price, quantity)) as avgAmount, avg(quantity) as avgQuantity').get()
```

执行结果：
Results of the:

```javascript
{"_id":"xyz","avgAmount":37.5,"avgQuantity":7.5}
{"_id":"jkl","avgAmount":20,"avgQuantity":1}
{"_id":"abc","avgAmount":60,"avgQuantity":6}
```

#### first
返回指定字段在一组集合的第一条记录对应的值。仅当这组集合是按照某种定义排序（ sort ）后，此操作才有意义。
Returns the value corresponding to the first record of the specified field in a collection. This operation only makes sense if the set of collections is sorted ( sort ) by some definition.

示例集合`sales`包含以下文档：
The example collection `sales` contains the following documents:

```javascript
{"_id":1,"item":"abc","price":10,"quantity":2,"date":"2014-01-01T08:00:00Z"}
{"_id":2,"item":"jkl","price":20,"quantity":1,"date":"2014-02-03T09:00:00Z"}
{"_id":3,"item":"xyz","price":5,"quantity":5,"date":"2014-02-03T09:05:00Z"}
{"_id":4,"item":"abc","price":10,"quantity":10,"date":"2014-02-15T08:00:00Z"}
{"_id":5,"item":"xyz","price":5,"quantity":10,"date":"2014-02-15T09:05:00Z"}
{"_id":6,"item":"xyz","price":5,"quantity":5,"date":"2014-02-15T12:05:10Z"}
{"_id":7,"item":"xyz","price":5,"quantity":10,"date":"2014-02-15T14:12:12Z"}
```

按字段`item`分组，并计算每个物料的首次销售日期：
Group by field `item` and calculate the first sale date for each item:

```javascript
const $ = db.command.aggregate

db.collection('sales').aggregate().sort({item: 1, date: 1}).group({
    _id: "$item",
    firstSalesDate: $.first('$date')
}).end()
```

执行结果：
Results of the:

```javascript
{"_id":"xyz","firstSalesDate":"2014-02-03T09:05:00Z"}
{"_id":"jkl","firstSalesDate":"2014-02-03T09:00:00Z"}
{"_id":"abc","firstSalesDate":"2014-01-01T08:00:00Z"}
```

#### last
返回指定字段在一组集合的最后一条记录对应的值。仅当这组集合是按照某种定义排序（ sort ）后，此操作才有意义。
Returns the value corresponding to the last record of the specified field in a collection. This operation only makes sense if the set of collections is sorted ( sort ) by some definition.

示例集合`sales`包含以下文档：
The example collection `sales` contains the following documents:

```javascript
{"_id":1,"item":"abc","date":"2014-01-01T08:00:00Z","price":10,"quantity":2}
{"_id":2,"item":"jkl","date":"2014-02-03T09:00:00Z","price":20,"quantity":1}
{"_id":3,"item":"xyz","date":"2014-02-03T09:05:00Z","price":5,"quantity":5}
{"_id":4,"item":"abc","date":"2014-02-15T08:00:00Z","price":10,"quantity":10}
{"_id":5,"item":"xyz","date":"2014-02-15T09:05:00Z","price":5,"quantity":10}
{"_id":6,"item":"xyz","date":"2014-02-15T12:05:10Z","price":5,"quantity":5}
{"_id":7,"item":"xyz","date":"2014-02-15T14:12:12Z","price":5,"quantity":10}
```

按照`item`和`date`对文档进行排序，然后按`item`字段对现在已排序的文档进行分组，并计算每个物料的最后销售日期：
Sort the documents by `item` and `date`, then group the now sorted documents by the `item` field and calculate the last sale date for each item:

```javascript
const $ = db.command.aggregate

db.collection('sales').aggregate().sort({item: 1, date: 1}).group({
    _id: "$item",
    lastSalesDate: $.last('$date')
}).end()
```

执行结果：
Results of the:

```javascript
{"_id":"xyz","lastSalesDate":"2014-02-15T14:12:12Z"}
{"_id":"jkl","lastSalesDate":"2014-02-03T09:00:00Z"}
{"_id":"abc","lastSalesDate":"2014-02-15T08:00:00Z"}
```

#### max
返回一组数值的最大值。
Returns the maximum value of a set of numbers.

示例集合`sales`包含以下文档：
The example collection `sales` contains the following documents:

```javascript
{"_id":1,"item":"abc","price":10,"quantity":2,"date":"2014-01-01T08:00:00Z"}
{"_id":2,"item":"jkl","price":20,"quantity":1,"date":"2014-02-03T09:00:00Z"}
{"_id":3,"item":"xyz","price":5,"quantity":5,"date":"2014-02-03T09:05:00Z"}
{"_id":4,"item":"abc","price":10,"quantity":10,"date":"2014-02-15T08:00:00Z"}
{"_id":5,"item":"xyz","price":5,"quantity":10,"date":"2014-02-15T09:05:00Z"}
```

按字段`item`分组，并计算每组文件的最大总量和最大数量。
Group by field `item`, and calculate the maximum total and maximum number of documents for each group.

```javascript
db.collection('sales').groupBy('item').groupField('max(multiply(price, quantity)) as maxTotalAmount, max(quantity) as maxQuantity').get()
```

执行结果：
Results of the:

```javascript
{"_id":"xyz","maxTotalAmount":50,"maxQuantity":10}
{"_id":"jkl","maxTotalAmount":20,"maxQuantity":1}
{"_id":"abc","maxTotalAmount":100,"maxQuantity":10}
```

#### min
返回一组数值的最小值。
Returns the minimum value of a set of numbers.

示例集合`sales`包含以下文档：
The example collection `sales` contains the following documents:

```javascript
{"_id":1,"item":"abc","price":10,"quantity":2,"date":"2014-01-01T08:00:00Z"}
{"_id":2,"item":"jkl","price":20,"quantity":1,"date":"2014-02-03T09:00:00Z"}
{"_id":3,"item":"xyz","price":5,"quantity":5,"date":"2014-02-03T09:05:00Z"}
{"_id":4,"item":"abc","price":10,"quantity":10,"date":"2014-02-15T08:00:00Z"}
{"_id":5,"item":"xyz","price":5,"quantity":10,"date":"2014-02-15T09:05:00Z"}
```

按`item`字段对文档进行分组，并计算每次分组的最小数量和最小数量。
Groups documents by the `item` field and computes the minimum and minimum counts for each grouping.

```javascript
db.collection('sales').groupBy('item').groupField('min(quantity) as minQuantity').get()
```

执行结果：
Results of the:

```javascript
{"item":"xyz","minQuantity":5}
{"item":"jkl","minQuantity":1}
{"item":"abc","minQuantity":2}
```

#### push
返回一组中表达式指定列与对应的值，一起组成的数组。
Returns an array composed of the column specified by the expression and the corresponding value in a group.

示例集合`sales`包含以下文档：
The example collection `sales` contains the following documents:

```javascript
{"_id":1,"item":"abc","price":10,"quantity":2,"date":"2014-01-01T08:00:00Z"}
{"_id":2,"item":"jkl","price":20,"quantity":1,"date":"2014-02-03T09:00:00Z"}
{"_id":3,"item":"xyz","price":5,"quantity":5,"date":"2014-02-03T09:05:00Z"}
{"_id":4,"item":"abc","price":10,"quantity":10,"date":"2014-02-15T08:00:00Z"}
{"_id":5,"item":"xyz","price":5,"quantity":10,"date":"2014-02-15T09:05:00Z"}
{"_id":6,"item":"xyz","price":5,"quantity":5,"date":"2014-02-15T12:05:10Z"}
{"_id":7,"item":"xyz","price":5,"quantity":10,"date":"2014-02-15T14:12:12Z"}
```

按`date`字段的日期和年份分组，并计算每组的物料清单和销售数量：
Group by the date and year of the `date` field and calculate the BOM and sales quantity for each group:

```javascript
db.collection('sales').groupBy('dayOfYear(date) as day, year(date) as year').groupField('push({item: item, quantity: quantity}) as itemsSold').get()
```

执行结果：
Results of the:

```javascript
{"day":46,"year":2014,"itemsSold":[{"item":"abc","quantity":10},{"item":"xyz","quantity":10},{"item":"xyz","quantity":5},{"item":"xyz","quantity":10}]}
{"day":34,"year":2014,"itemsSold":[{"item":"jkl","quantity":1},{"item":"xyz","quantity":5}]}
{"day":1,"year":2014,"itemsSold":[{"item":"abc","quantity":2}]}
```

#### stdDevPop
返回一组字段对应值的标准差。
Returns the standard deviation of the corresponding values for a set of fields.

示例集合`users`包含以下文档：
The example collection `users` contains the following documents:

```javascript
{"_id":1,"name":"dave123","quiz":1,"score":85}
{"_id":2,"name":"dave2","quiz":1,"score":90}
{"_id":3,"name":"ahn","quiz":1,"score":71}
{"_id":4,"name":"li","quiz":2,"score":96}
{"_id":5,"name":"annT","quiz":2,"score":77}
{"_id":6,"name":"ty","quiz":2,"score":82}
```

计算每个测验的标准偏差：
Compute the standard deviation for each test:

```javascript
db.collection('users').groupBy('quiz').groupField('stdDevPop(score) as stdDev').get()
```

执行结果：
Results of the:

```javascript
{"quiz":2,"stdDev":8.04155872120988}
{"quiz":1,"stdDev":8.04155872120988}
```

#### stdDevSamp
计算输入值的样本标准偏差。
Computes the sample standard deviation of the input values.

示例集合`users`包含以下文档：
The example collection `users` contains the following documents:

```javascript
{_id:0,username:"user0",age:20}
{_id:1,username:"user1",age:42}
{_id:2,username:"user2",age:28}
...
```

为了计算用户样本的标准差，首先使用`sample`管道对100个用户进行采样，然后使用`stdDevSamp`计算样本用户的标准差。
To calculate the standard deviation of a sample of users, first use the `sample` pipeline to sample 100 users, then use `stdDevSamp` to calculate the standard deviation of the sample users.

```javascript
db.collection('users').aggregate()
    .sample({size: 100})
    .group({
        _id: null,
        ageStdDev:{$stdDevSamp:"$age"}
    })
    .end()
```

该操作返回如下结果：
The operation returns the following results:

```javascript
{"_id":null,"ageStdDev":7.811258386185771}
```

#### sum
返回一组字段所有数值的总和。
Returns the sum of all values for a set of fields.

示例集合`sales`包含以下文档：
The example collection `sales` contains the following documents:

```javascript
{"_id":1,"item":"abc","price":10,"quantity":2,"date":"2014-01-01T08:00:00Z"}
{"_id":2,"item":"jkl","price":20,"quantity":1,"date":"2014-02-03T09:00:00Z"}
{"_id":3,"item":"xyz","price":5,"quantity":5,"date":"2014-02-03T09:05:00Z"}
{"_id":4,"item":"abc","price":10,"quantity":10,"date":"2014-02-15T08:00:00Z"}
{"_id":5,"item":"xyz","price":5,"quantity":10,"date":"2014-02-15T09:05:00Z"}
```

按照`date`字段的日期和年份对文档进行分组，并计算每组文档的总数和计数。
Group documents by the date and year of the `date` field and calculate the total and count of each group of documents.

```javascript
db.collection('sales').groupBy('dayOfYear(date) as day, year(date) as year').groupField('sum(multiply(price, quantity)) as totalAmount, sum(1) as count').get()
```

执行结果：
Results of the:

```javascript
{"_id":{"day":46,"year":2014},"totalAmount":150,"count":2}
{"_id":{"day":34,"year":2014},"totalAmount":45,"count":2}
{"_id":{"day":1,"year":2014},"totalAmount":20,"count":1}
```

#### mergeObjects
将多个文档合并为一个文档。
Merge multiple documents into one.

> 注意：如果要合并的文档包含相同的字段名称，则结果文档中的字段将会覆盖上次合并的文档中的值。
> Note: If the documents to be merged contain the same field names, the fields in the resulting document will override the values in the last merged document.

示例集合`sales`包含以下文档：
The example collection `sales` contains the following documents:

```javascript
{_id:1,year:2017,item:"A",quantity:{"2017Q1":500,"2017Q2":500}}
{_id:2,year:2016,item:"A",quantity:{"2016Q1":400,"2016Q2":300,"2016Q3":0,"2016Q4":0}}
{_id:3,year:2017,item:"B",quantity:{"2017Q1":300}}
{_id:4,year:2016,item:"B",quantity:{"2016Q3":100,"2016Q4":250}}
```

按照 `item` 进行分组，`mergeObjects` 仅接受单个对象操作。
Group by `item`, `mergeObjects` only accepts single object operations.

```javascript
db.collection('sales').groupBy('item').groupField('mergeObjects(quantity) as mergedSales').get()
```

执行结果：
Results of the:

```javascript
{"_id":"B","mergedSales":{"2017Q1":300,"2016Q3":100,"2016Q4":250}}
{"_id":"A","mergedSales":{"2017Q1":500,"2017Q2":500,"2016Q1":400,"2016Q2":300,"2016Q3":0,"2016Q4":0}}
```

## 商城示例@shop-demo
## Mall example @shop-demo
::: details Schema
```json
// 商品表 goods
// Product table goods
{
  "name": {
    "bsonType": "string",
    "description": "商品名称"
  },
  "category": {
    "bsonType": "string",
    "description": "商品分类"
  },
  "price": {
    "bsonType": "number",
    "description": "商品价格"
  },
  "stock": {
    "bsonType": "number",
    "description": "库存"
  }
}
```
```json
// 订单表 orders
// order table orders
{
  "goodsId": {
    "bsonType": "string",
    "description": "商品ID",
    "foreignKey": "goods._id"
  },
  "buyNum": {
    "bsonType": "number",
    "description": "购买数量"
  },
  "userId": {
    "bsonType": "string",
    "description": "用户ID",
    "foreignKey": "users._id"
  },
  "createDate": {
    "bsonType": "timestamp",
    "description": "购买时间"
  }
}

```
```json
// 用户表 users
// user table users
{
  "name": {
    "bsonType": "string",
    "description": "用户名"
  }
}
```
:::

::: details 示例数据
::: details sample data
```json
// goods
[
  {
    "_id": "6363666826e8170001b62baa",
    "category": "手机",
    "name": "iPhone 14 512G",
    "price": 8488,
    "stock": 100
  },
  {
    "_id": "6363666f3aeb530001925bb6",
    "category": "手机",
    "name": "iPhone 13 Pro Max 128G",
    "price": 9688,
    "stock": 20
  },
  {
    "_id": "63636678a899370001a22627",
    "category": "手机",
    "name": "华为 Meta P50",
    "price": 7699,
    "stock": 50
  },
  {
    "_id": "63636681ff2a54000133afd7",
    "category": "手机",
    "name": "小米 12 Ultra",
    "price": 4599,
    "stock": 200
  },
  {
    "_id": "6363668cd69bc10001765c5f",
    "category": "电脑",
    "name": "红米 Redmibook 15寸 256G",
    "price": 3999,
    "stock": 100
  },
  {
    "_id": "6363669353a7f30001b46c84",
    "category": "电脑",
    "name": "Macbook Pro 512G",
    "price": 10499,
    "stock": 100
  },
  {
    "_id": "6363669a26e8170001b63213",
    "category": "电脑",
    "name": "Macbook Air 128G",
    "price": 7699,
    "stock": 100
  }
]
```
```json
// orders
[
  {
    "_id": "6364b2e8b653d6000163c4f3",
    "buyNum": 2,
    "createDate": 1664769600000,
    "goodsId": "6363666826e8170001b62baa",
    "userId": "6364cc82b653d6000167f848"
  },
  {
    "_id": "6364b2e8b653d6000163c4f4",
    "buyNum": 1,
    "createDate": 1664773200000,
    "goodsId": "6363668cd69bc10001765c5f",
    "userId": "6364cc82b653d6000167f848"
  },
  {
    "_id": "6364b2e8b653d6000163c4f5",
    "buyNum": 2,
    "createDate": 1664758800000,
    "goodsId": "6363669353a7f30001b46c84",
    "userId": "6364cc82b653d6000167f849"
  },
  {
    "_id": "6364b2e8b653d6000163c4f6",
    "buyNum": 1,
    "createDate": 1664769600000,
    "goodsId": "63636678a899370001a22627",
    "userId": "6364cc82b653d6000167f848"
  },
  {
    "_id": "6364b2e8b653d6000163c4f7",
    "buyNum": 3,
    "createDate": 1664769600000,
    "goodsId": "63636681ff2a54000133afd7",
    "userId": "6364cc82b653d6000167f848"
  },
  {
    "_id": "6364b2e8b653d6000163c4f8",
    "buyNum": 1,
    "createDate": 1664769600000,
    "goodsId": "6363668cd69bc10001765c5f",
    "userId": "6364cc82b653d6000167f849"
  },
  {
    "_id": "6364b2e8b653d6000163c4f9",
    "buyNum": 3,
    "createDate": 1664683200000,
    "goodsId": "6363669353a7f30001b46c84",
    "userId": "6364cc82b653d6000167f848"
  },
  {
    "_id": "6364b2e8b653d6000163c4fa",
    "buyNum": 2,
    "createDate": 1664679600000,
    "goodsId": "6363666f3aeb530001925bb6",
    "userId": "6364cc82b653d6000167f848"
  },
  {
    "_id": "6364b2e8b653d6000163c4fb",
    "buyNum": 1,
    "createDate": 1664697600000,
    "goodsId": "63636678a899370001a22627",
    "userId": "6364cc82b653d6000167f849"
  }
]

```
```json
// users
[
  {
    "_id": "6364cc82b653d6000167f847",
    "name": "张三"
  },
  {
    "_id": "6364cc82b653d6000167f848",
    "name": "李四"
  },
  {
    "_id": "6364cc82b653d6000167f849",
    "name": "王五"
  }
]
```
:::

#### 按照商品的分类统计商品数量及库存
#### Count the quantity and inventory of commodities according to the classification of commodities
在本示例中使用 group 与 groupField，对应 Aggregate 阶段的 $group 与 $project 阶段。
In this example, group and groupField are used, corresponding to the $group and $project stages of the Aggregate stage.

将商品分类 category 字段用 groupBy 进行分组，在 groupField 中使用 sum 表达式对商品数量(goodsNumber)加1，库存(stock)同样也用 sum 表达式计算库存总和。
Use groupBy to group the product classification category field, use the sum expression in the groupField to add 1 to the product quantity (goodsNumber), and also use the sum expression to calculate the total inventory of the stock (stock).

```javascript
// JQL
db.collection('goods').groupBy('category').groupField('sum(1) as goodsNumber, sum(stock) as stock').get()
```
相比于上面 JQL 方式，下面的 Aggregate 就略显复杂一些，但大致逻辑是一致的。
Compared with the above JQL method, the following Aggregate is slightly more complicated, but the general logic is the same.

在 Aggregate 第一阶段，按照商品分类进行分组，同时组内添加商品数量(goodsNumber)与库存(stock)字段，计算与上面计算方式一样，将结果传递至下一阶段。
In the first stage of Aggregate, group according to product classification, and add the goodsNumber and stock fields in the group. The calculation is the same as the above calculation method, and the result is passed to the next stage.

第二阶段中，使用 $project 管道对字段修整，移除 _id 字段，增加 category 字段，保留 goodsNumber, stock 字段，如果使用 JQL 方式将不需要手动对字段修整。
In the second stage, use the $project pipeline to trim the fields, remove the _id field, add the category field, and keep the goodsNumber and stock fields. If you use the JQL method, you don’t need to manually trim the fields.

```javascript
// JQL Aggregate
const $ = db.command.aggregate
db.collection('goods').aggregate().group({
    _id: "$category",
    goodsNumber: $.sum(1),
    stock: $.sum('$stock')
}).project({
    _id: false,
    category: "$_id",
    goodsNumber: 1,
    stock: 1
}).end()
```
执行结果
Results of the
```javascript
[
    {
        "category": "手机",
        "goodsNumber": 4,
        "stock": 370
    },
    {
        "category": "电脑",
        "goodsNumber": 3,
        "stock": 300
    }
]
```
#### 查询各分类下商品价格超过5000元的商品数量
#### Query the number of products whose price exceeds 5,000 yuan under each category

使用 where 先初步筛选商品金额大于5000的商品，对筛选后的商品按照分类(category)使用 groupBy 分组，在 groupField 中使用 sum 表达式对商品数量(goodsNumber)加1。
Use where to preliminarily screen products whose value is greater than 5000, use groupBy to group the filtered products according to category, and use sum expression in groupField to add 1 to the number of products (goodsNumber).

```javascript
// JQL
db.collection('goods').where('price > 5000').groupBy('category').groupField('sum(1) as goodsNumber').get()
```
在阶段一中使用 $match 管道按照商品金额筛选，将结果传递至下一阶段。
In stage 1, use the $match pipeline to filter by item amount, and pass the result to the next stage.

第二阶段中使用 $group 管道按照商品分类(category)分组，同时组内添加 goodsNumber 字段，使用 sum 表达式对数量加1。
In the second stage, the $group pipeline is used to group by category, and the goodsNumber field is added to the group, and the sum expression is used to add 1 to the quantity.

第三阶段中使用 $project 管道对字段进行修整，移除 _id 字段，添加 category 字段值为上一阶段传递来的商品分类(category)，保留 goodsNumber 字段。
In the third stage, use the $project pipeline to trim the fields, remove the _id field, add the category field value to the product category passed in the previous stage, and keep the goodsNumber field.

```javascript
// JQL Aggregate
db.collection('goods').aggregate().match({
    price: $.gt(5000)
}).group({
    _id: '$category',
    goodsNumber: $.sum(1)
}).project({
    _id: 0,
    category: "$_id",
    goodsNumber: 1
}).end()
```
执行结果
Results of the
```json
[
  {
    "category": "手机",
    "goodsNumber": 3
  },
  {
    "category": "电脑",
    "goodsNumber": 2
  }
]

```

#### 查询价格最高的商品和最低的商品
#### Query the highest priced item and the lowest item
第一阶段使用 $sort 管道将 goods 表按照 price 倒叙排列，将结果传递到下一阶段。
The first stage uses the $sort pipeline to sort the goods table by price in reverse, passing the result to the next stage.

第二阶段使用 $group 管道按照 category 分组，由于在第一阶段已经按照 price 倒叙排列了，所以在组内添加了 maxGoodsName, maxGoodsPrice 字段使用 $first 表达式来选择第一个文档，及 price 最大的一个表示价格最高的商品，相反，minGoodsName, minGoodsPrice 字段使用 $last 表达式来选择最后一个文档，代表价格最低的商品。
In the second stage, the $group pipeline is used to group by category. Since the price has been arranged in reverse order in the first stage, the maxGoodsName and maxGoodsPrice fields are added to the group using the $first expression to select the first document and the one with the largest price Indicates the item with the highest price. Conversely, the minGoodsName, minGoodsPrice fields use the $last expression to select the last document, which represents the item with the lowest price.

第三阶段使用 $project 管道对数据修整，移除 _id 字段，添加 category 字段值为上一阶段传递来的商品分类(category)，maxGoods 为价格最高的商品，minGoods 为价格最低的商品。
In the third stage, use the $project pipeline to trim the data, remove the _id field, add the category field value to the product category passed in the previous stage, maxGoods is the product with the highest price, and minGoods is the product with the lowest price.

```javascript
// JQL Aggregate
db.collection('goods').aggregate().sort({
    price: -1
}).group({
    _id: "$category",
    maxGoodsName: {$first: "$name"},
    maxGoodsPrice: {$first: "$price"},
    minGoodsName: {$last: "$name"},
    minGoodsPrice: {$last: "$price"}
}).project({
    _id: 0,
    category: "$_id",
    maxGoods: {
        name: "$maxGoodsName",
        price: "$maxGoodsPrice"
    },
    minGoods: {
        name: "$minGoodsName",
        price: "$minGoodsPrice"
    }
}).end()
```
执行结果
Results of the
```javascript
[
    {
        "category": "电脑",
        "maxGoods": {
            "name": "Macbook Pro 512G",
            "price": 10499
        },
        "minGoods": {
            "name": "红米 Redmibook 15寸 256G",
            "price": 3999
        }
    },
    {
        "category": "手机",
        "maxGoods": {
            "name": "iPhone 13 Pro Max 128G",
            "price": 9688
        },
        "minGoods": {
            "name": "小米 12 Ultra",
            "price": 4599
        }
    }
]
```

#### 查询某天的平均客单价
#### Query the average customer unit price of a certain day
第一阶段使用 $match 管道筛选某一天的订单，将结果传递至下一阶段
The first stage uses the $match pipeline to filter orders for a certain day and pass the results to the next stage

第二阶段使用 $group 管道使用 avg 表达式计算平均客单价
The second stage uses the $group pipeline to calculate the average customer unit price using the avg expression

```javascript
// JQL Aggregate
const $ = db.command.aggregate

db.collection('orders').aggregate().match({
    createDate: $.and($.gt(new Date('2022-10-03T00:00:00.000Z')), $.lt(new Date('2022-10-04T00:00:00.000Z')))
}).group({
    _id: null,
    avgPrice: $.avg('$price')
}).end()
```
执行结果
Results of the
```json
[
  {
    "_id": null,
    "avgPrice": 11364
  }
]
```

#### 查询最受欢迎的商品
#### Query the most popular products
```javascript
// JQL
const orders = db.collection('orders').getTemp()
db.collection(orders, 'goods')
    .foreignKey('orders.goodsId')
    .field('arrayElemAt(goodsId, 0) as goods, buyNum')
    .groupBy('goods._id as goodsId')
    .groupField('sum(buyNum) as count, first(goods.name) as name, first(goods.category) as category')
    .orderBy('count desc')
    .get()
```
```javascript
// JQL Aggregate
db.collection('orders').aggregate().lookup({
    from: "goods",
    let: {
        goodsId: "$goodsId"
    },
    pipeline: $.pipeline()
        .match(db.command.expr(
            db.command.eq(['$_id', '$$goodsId'])
        )).done(),
    as: "goods"
}).unwind('$goods').group({
    _id: "$goods._id",
    count: $.sum("$buyNum"),
    name: $.first("$goods.name"),
    category: $.first("$goods.category")
}).sort({
    count: -1
}).end()
```
执行结果
Results of the
```json
[
  {
    "_id": "6363669353a7f30001b46c84",
    "category": "电脑",
    "count": 5,
    "name": "Macbook Pro 512G"
  },
  {
    "_id": "63636681ff2a54000133afd7",
    "category": "手机",
    "count": 3,
    "name": "小米 12 Ultra"
  },
  {
    "_id": "63636678a899370001a22627",
    "category": "手机",
    "count": 2,
    "name": "华为 Meta P50"
  },
  {
    "_id": "6363668cd69bc10001765c5f",
    "category": "电脑",
    "count": 2,
    "name": "红米 Redmibook 15寸 256G"
  },
  {
    "_id": "6363666826e8170001b62baa",
    "category": "手机",
    "count": 2,
    "name": "iPhone 14 512G"
  },
  {
    "_id": "6363666f3aeb530001925bb6",
    "category": "手机",
    "count": 2,
    "name": "iPhone 13 Pro Max 128G"
  }
]
```

#### 统计购买手机的用户
#### Statistics of users who purchased mobile phones
```javascript
// JQL
const orders = db.collection('orders').getTemp()
db.collection(orders, 'goods', 'users')
    .where('goodsId.category=="手机"')
    .field('arrayElemAt(goodsId, 0) as goods, arrayElemAt(userId, 0) as user')
    .groupBy('goods.category as category')
    .groupField('addToSet(user) as users')
    .get()
```
```javascript
// Aggregate
db.collection('orders').aggregate().lookup({
    from: "goods",
    let: {
        goodsId: "$goodsId"
    },
    pipeline: $.pipeline().match(db.command.expr(
        db.command.eq(['$_id', '$$goodsId'])
    )).done(),
    as: "goods"
}).match({
    'goods.category': "手机"
}).unwind("$goods").lookup({
    from: "users",
    let: {
        userId: "$userId"
    },
    pipeline: $.pipeline().match(db.command.expr(
        db.command.eq(['$_id', '$$userId'])
    )).done(),
    as: "user"
}).unwind('$user').group({
    _id: "$goods.category",
    users: {$addToSet: "$user"}
}).end()
```
执行结果
Results of the
```json
[
  {
    "category": "手机",
    "users": [
      {
        "_id": "6364cc82b653d6000167f849",
        "name": "王五"
      },
      {
        "_id": "6364cc82b653d6000167f848",
        "name": "李四"
      }
    ]
  }
]
```
