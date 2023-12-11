慢查询，指云数据库查询较慢，不能及时返回结果。这样的查询会收录在 uniCloud web控制台的慢查询日志栏目中。但收录不是实时的，有一定延时。
Slow query means that the cloud database query is slow and cannot return results in time. Such queries will be recorded in the slow query log section of the uniCloud web console. But the recording is not real-time, there is a certain delay.

开发者应经常查阅自己的慢查询，修复问题，保证业务系统的健康稳定。
Developers should check their slow queries frequently, fix problems, and ensure the health and stability of the business system.

在数据库语句执行超过一定时间（**腾讯云、阿里云均为5秒**）仍不能返回结果后，数据库请求会报超时错误。
After the database statement execution exceeds a certain time (**Tencent Cloud and Alibaba Cloud are both 5 seconds**) and still cannot return the result, the database request will report a timeout error.

这里介绍如何进行查询优化以避免此类问题。
Here's how to do query optimization to avoid such problems.

## 设置合适的索引
## set the appropriate index

请参阅：[数据库索引](db-index.md)。
See: [Database Index](db-index.md).

## 将JQL查询结果缓存到redis中
## Cache JQL query results into redis

请参阅：[jql-cache-redis](jql-cache-redis.md)
See: [jql-cache-redis](jql-cache-redis.md)

## 大数据量时查询语句写法注意
## Pay attention to the writing of query statements when there is a large amount of data

如果您的数据量非常大，在设置合适的索引之后仍然会查询超时，您要考虑以下优化方案。
If your data volume is very large and the query still times out after setting a suitable index, you should consider the following optimizations.

尽量避免使用skip，至少不应该skip比较大的值，因为skip操作Mongo服务端依然会扫描被skip的数据，带skip操作的耗时和skip的数量线性相关。您可以考虑使用排序和范围查询功能来替代直接使用skip。
Try to avoid using skip, at least it should not be a large value, because the skip operation Mongo server will still scan the skipped data, and the time-consuming operation with skip is linearly related to the number of skips. Instead of using skip directly, you might consider using the sort and range query capabilities.

对于非常大的数据可以分段来查询，即通过一定的条件将一次查询拆分为多次查询操作。
For very large data, it can be queried in segments, that is, a query can be divided into multiple query operations according to certain conditions.

### 带条件的count@count
### count@count with condition

如果满足条件的数据特别多，where+count会特别慢，很有可能超时。我们建议不要在大数据量的集合内这样使用count方法。
If there is a lot of data that meets the conditions, where+count will be very slow, and it is likely to time out. We recommend against using the count method in this way on large collections.

### 使用skip方法传入较大的值@skip
### Use the skip method to pass in a larger value @skip

您应该避免使用where+skip+limit的查询方式来遍历整个集合，因为这种方式随着Skip数量的增长响应时间会越来越慢，还可能会造成请求超时。
You should avoid using the where+skip+limit query method to traverse the entire collection, because this method will slow down the response time as the number of skips grows, and may also cause the request to time out.

下面的代码给出了一个示例。**为避免示例过于复杂，先假设没有两条记录的create_date是相等，如果create_date不能唯一标识数据，可以再额外加入其他字段，比如文章作者等**
The code below gives an example. **In order to avoid the example being too complicated, it is assumed that the create_dates of no two records are equal. If the create_date cannot uniquely identify the data, other fields can be added, such as the author of the article, etc.**

按照create_date（创建时间）降序排序，每次查询时都指定查询条件小于上次查询结果中的最后一条记录的create_date，这样不需要使用skip即可实现分页效果，同时还能保证用户在上下翻页的时候不会因为出现新增数据而引起的前后两页数据重复的问题。
Sort by create_date (creation time) in descending order. Each time you query, specify that the query condition is less than the create_date of the last record in the last query result, so that the paging effect can be achieved without using skip, and it can also ensure that users turn pages up and down When there is no duplication of data on the front and back pages due to the appearance of new data.

```js
const db = uniCloud.database()
const dbCmd = db.command
module.exports = async function(event,context) {
  const {
    lastCreateDate = Date.now(),
    pageSize
  } = event
  if(pageSize > 100){
    throw new Error('单页数据不可超过100条')
  }
  const res = await db.collection('book').where({
    create_date: dbCmd.lt(lastCreateDate)
  })
  .limit(pageSize)
  .get()
}
```

使用上述写法后您应该使用上一页、下一页、上n页（其中n是一个比较小的数字）、下n页的翻页功能来替换随机翻页。您可以参考百度或者谷歌的搜索结果的分页功能，当结果页数非常多时，不展示共有多少页，仅支持在前10页中支持随机翻页；再往下翻页的过程中，不再支持随机翻页，仅支持向下翻一个较小的页数，这样就可以在已经查询出结果的基础上再使用where+skip（少量）+limit+orderBy的方式来快速查询到结果。
After using the above writing method, you should use the previous page, next page, previous n pages (where n is a relatively small number), and next n pages to replace random page turning. You can refer to the pagination function of search results of Baidu or Google. When the number of result pages is very large, the number of pages in total is not displayed, and only the first 10 pages are supported to support random page turning; in the process of page turning, it is no longer supported. Random page turning only supports turning down a small number of pages, so that you can use where+skip (a small amount)+limit+orderBy method to quickly query the results based on the results already queried.

### 抽样方法sample
### Sampling method sample

sample操作在大数据量高频触发时会响应缓慢，使用前请务必确定自己的业务场景适合使用sample方法
The sample operation will respond slowly when a large amount of data is triggered at high frequency. Before using it, please make sure that your business scenario is suitable for using the sample method.

## clientDB联表查询超时@client-db-lookup
## clientDB linked table query timeout @client-db-lookup

请参考此文档调整优化，[使用getTemp进行联表查询](https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp)
Please refer to this document to adjust and optimize, [Use getTemp for joint table query](https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp)

## 慢查询日志@slow
## Slow query log @slow

> 仅阿里云支持

慢查询的定义：单条查询语句耗时超100毫秒。符合条件的查询会被统计进来。

在慢查询日志到一定量级时，我们会发送邮件通知到服务空间所属账号邮箱，请及时关注并前往[uniCloud web控制台](https://unicloud.dcloud.net.cn/)查看慢查询日志统计和详细信息，参考本文档进行优化。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloud/db-slow-log-detail.png)

慢查询日志支持查看统计及详细数据，可查询具体某个集合的慢查询日志记录。

一个典型的慢查询日志包含以下信息
A typical slow query log contains the following information

| 指标名称			     | 说明																																																			                           |
|-------------|---------------------------------------------------------------------------------|
| 集合名称			     | 数据库请求操作的集合的名称				                                                               |
| 查询语句					   | 详细的查询指令模板，例：{"filter":{"invite_code":"?"}}，表示以 invite_code: "xxx" 作为查询条件进行的查询		 |
| 执行开始时间					 | 该慢查询执行开始的时间			                                                                  |
| 执行时长					 | 该慢查询执行的时长（毫秒）						                                                             |
| 文档扫描行数	     | 该慢查询命中数据库内多少条数据，如果索引设置的合适此数值会尽可能的接近索引扫描行数			                                    |
| 索引扫描行数	     | 该慢查询命中索引扫描数据库内的数据					                                         |
| 返回行数	     | 该慢查询结果最终匹配数据库内多少条数据，即查询返回的条数				                                                |


## 分表和冗余表
## Partition table and redundant table
如果你的数据表记录条数超过几十万，可以使用分表策略来优化。
If the number of records in your data table exceeds hundreds of thousands, you can use the table partitioning strategy to optimize.

比如很多电商系统的订单表，最近3个月的订单是一张表，超期的订单会挪到其他表。银行系统也会把几年前的交易数据归档，防止数据量太大查不动。
For example, in the order table of many e-commerce systems, the orders for the last three months are one table, and the overdue orders will be moved to other tables. The banking system will also archive transaction data from a few years ago to prevent the amount of data from being too large to be checked.

冗余表是另一种策略，不是分表，而是把大表中的高频数据单独摘出来成为一张表。其实 [jql-cache-redis](jql-cache-redis.md) 就是一种冗余思路，把数据在redis里多存一份。
Redundant tables are another strategy. Instead of sub-tables, the high-frequency data in the large table is separately extracted into a table. In fact, [jql-cache-redis](jql-cache-redis.md) is a redundant idea to store more data in redis.
