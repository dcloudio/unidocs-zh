Redis（Remote Dictionary Server)，是一种充分利用内存的数据库。
Redis (Remote Dictionary Server) is a database that makes full use of memory.

相比传统硬盘数据库，redis的性能要高出更多。
Compared with traditional hard disk databases, the performance of redis is much higher.

为了保证效率，数据都是缓存在内存中，同时redis会周期性的把更新的数据写入磁盘或者把修改操作写入追加的记录文件，并且在此基础上实现了master-slave(主从)同步，即使宕机，也可以恢复数据。所以redis即做到了高性能又实现了安全持久化存储。
In order to ensure efficiency, data is cached in memory, and redis will periodically write updated data to disk or write modification operations to additional record files, and on this basis, master-slave (master-slave) is implemented Synchronization, even if downtime, data can be recovered. Therefore, redis achieves both high performance and secure persistent storage.

redis是key-value存储系统，支持存储的value类型较多，包括：string(字符串)、list(链表)、set(集合)、sorted set 和hash（哈希类型）[详情](uniCloud/redis?id=data-type)
Redis is a key-value storage system that supports many types of value storage, including: string (string), list (linked list), set (collection), sorted set, and hash (hash type) [details](uniCloud/redis ?id=data-type)

> 使用腾讯云node12和redis，务必仔细阅读此文档：[keepRunningAfterReturn](uniCloud/cf-functions.md?id=keep-running)
> Use Tencent Cloud node12 and redis, be sure to read this document carefully: [keepRunningAfterReturn](uniCloud/cf-functions.md?id=keep-running)

### Redis和MongoDB的比较
### Comparison between Redis and MongoDB
- 读写速度：MongoDB数据存储在磁盘里，读写语法复杂，速度较慢。redis在内存中读写，只根据key访问数据，速度快很多。
- Read and write speed: MongoDB data is stored on disk, and the read and write syntax is complex and slow. Redis reads and writes in memory and only accesses data based on the key, which is much faster.
- 并发能力：uniCloud的mongoDB并发能力有限。redis几乎没有限制，更多取决于云函数的并发限制。
- Concurrency: uniCloud's mongoDB has limited concurrency. Redis has almost no limit, more depends on the concurrency limit of the cloud function.
- 查询能力：MongoDB支持所有查询语法，各种where、联表。redis只能根据key和有限语法操作数据。
- Query capability: MongoDB supports all query syntaxes, various where and joint tables. Redis can only operate data based on key and limited syntax.
- 计费：MongoDB按读写次数收费（目前阿里云免费）。redis不免费，但根据存储容量收费。一般需要存在redis的数据是常用数据，不会太多，性价比非常高。
- Billing: MongoDB charges based on the number of reads and writes (currently Alibaba Cloud is free). Redis is not free, but charges based on storage capacity. Generally, the data that needs to exist in redis is commonly used data, not too much, and the cost performance is very high.

### redis常用应用场景
### Common application scenarios of redis
- 频繁读且变化不频繁的查库
- Frequently read and infrequently changed library search
假如你的应用有5千万条新闻数据，这类数据不经常变化。页面用固定的查询条件获取并显示这些数据；每个用户每次打开页面的时候，都是通过数据库执行查询语句获取数据。显然这样的效率非常低且浪费资源，更高效的做法是把它缓存到redis，每次取数前先从缓存取值，如果取不到数据，再去请求数据库。并将数据加入缓存，下一个用户就能直接从缓存中读取，使得请求能够迅速响应。
If your application has 50 million pieces of news data, such data does not change frequently. The page uses fixed query conditions to obtain and display these data; every time each user opens the page, the query statement is executed through the database to obtain data. Obviously, this kind of efficiency is very low and wastes resources. A more efficient way is to cache it in redis, and get the value from the cache before each fetch. If the data cannot be fetched, then request the database. And add the data to the cache, the next user can read directly from the cache, so that the request can be responded quickly.
- 高并发，短期高频访问的数据
- High concurrency, short-term high-frequency access data
比如热点数据，秒杀等高并发场景。直接使用mongoDB会遇到性能的瓶颈，所有的请求直接访问数据库，数据库会出现连接异常。此时我们也应当使用缓存作为中间件，redis做一个缓冲操作，让请求先访问到redis，而不是直接访问数据库。
For example, hotspot data, spikes and other high-concurrency scenarios. Direct use of mongoDB will encounter performance bottlenecks. All requests directly access the database, and the database will experience connection exceptions. At this time, we should also use cache as middleware, and redis does a buffer operation, so that requests can access redis first instead of directly accessing the database.
- 排行问题
- ranking question
常见的排行问题，例如最热话题、游戏排名等等。使用mongoDB数据库查询都非常消耗资源，这些都可以通过Redis来轻松实现，直接使用ZRank即可得到。
Common ranking questions, such as hottest topics, game rankings, and more. Using mongoDB database queries consumes a lot of resources, which can be easily realized through Redis, and can be obtained directly by using ZRank.
- 删除过期数据
- Delete expired data
Redis不是真正意义上的可持久化数据库，可以给数据加上一个有效时间，在有效时间超过时，Redis会自动删除对应数据。
Redis is not a persistent database in the true sense. You can add a valid time to the data. When the valid time exceeds, Redis will automatically delete the corresponding data.

其他还有：计数器、消息队列推送、好友关注、粉丝数等这里就不一一列举
Others include: counter, message queue push, friend follow, number of fans, etc. I won’t list them all here


### 注意
### Notice
- redis虽支持持久化存储，但它是异步持久化，极端情况下（如：断电）存在丢数据的可能性；改同步的话性能就没有了。所以对数据有强一致需求仍然需要使用mongoDB。
- Although redis supports persistent storage, it is asynchronous. In extreme cases (such as: power failure), there is a possibility of data loss; if it is changed to synchronization, the performance will be lost. Therefore, mongoDB is still required for strong consistent data requirements.
- 每个服务空间一个redis，只有本服务空间的云函数才能访问。
- One redis for each service space, which can only be accessed by cloud functions in this service space.

虽然Redis的优势明显，但是我们仍然不可用Redis完全替代mongoDB。
Although Redis has obvious advantages, we still cannot completely replace mongoDB with Redis.
推荐：mongoDB+redis组合使用。所有数据都在MongoDB里有一份，适合缓存入redis里的则使用redis。
Recommendation: use mongoDB+redis in combination. All data has a copy in MongoDB, and redis is used for caching into redis.

HBuilderX 3.5.2+，新出了`JQL Cache Redis`，可以方便的将 MongoDB 中的数据缓存到 Redis 中。[详见](https://uniapp.dcloud.net.cn/uniCloud/jql-cache-redis.html)
HBuilderX 3.5.2+, the new `JQL Cache Redis`, can conveniently cache the data in MongoDB to Redis. [See details](https://uniapp.dcloud.net.cn/uniCloud/jql-cache-redis.html)
