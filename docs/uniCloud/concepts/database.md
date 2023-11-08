`uniCloud` 提供了 2 个 nosql 数据库。
`uniCloud` provides 2 nosql databases.
 
- JSON文档型云数据库
- JSON document cloud database
	
	uniCloud阿里云版的云数据库就是 MongoDB 的 serverless版；uniCloud腾讯云版的云数据库是兼容 MongoDB 的自研数据库。
	The cloud database of uniCloud Alibaba Cloud Edition is the serverless version of MongoDB; the cloud database of uniCloud Tencent Cloud Edition is a self-developed database compatible with MongoDB.
	
	数据库中的每条记录都是一个 JSON 格式的对象。
	Each record in the database is a JSON-formatted object.
	
	一个数据库可以有多个集合（相当于关系型数据中的表），集合可看做一个 JSON 数组，数组中的每个对象就是一条记录，记录的格式是 JSON 对象。
	A database can have multiple collections (equivalent to tables in relational data). A collection can be regarded as a JSON array. Each object in the array is a record. The format of the record is a JSON object.
	
	这对于js工程师而言，非常容易理解掌握。
	This is very easy to understand and master for js engineers.
	
	MongoDB的传统操作方法还是比较复杂，uniCloud提供了更多简单操作数据库的方案，包括类似 SQL 的 JQL 语法、clientDB等技术。
	The traditional operation method of MongoDB is still relatively complicated, and uniCloud provides more simple solutions for operating the database, including SQL-like JQL syntax, clientDB and other technologies.
	
	在uniCloud中，云数据库、MongoDB数据库，这些概念一般都是指这个数据库，更多云数据库介绍[参考](uniCloud/hellodb.md)。
	In uniCloud, cloud database, MongoDB database, these concepts generally refer to this database, more cloud database introduction [reference](uniCloud/hellodb.md).

- redis 数据库
- redis database
	
	redis 是一种可以运行在内存中的键值对数据库，它的能力没有MongoDB强大，但由于可运行在内存中，它的性能远超常规数据库。
	Redis is a key-value database that can run in memory. Its capabilities are not as powerful as MongoDB, but because it can run in memory, its performance far exceeds that of conventional databases.
	
	redis 也使用 json 方式 key/value 键值对存储数据。更多文档[参考](redis.md)
	Redis also uses json way key/value key-value pairs to store data. More documentation [reference](redis.md)


如果开发者需要其他数据库，比如 mysql、ElasticSearch、数据湖，这些数据库没有在uniCloud的服务空间内置，云函数中通过 nodejs 的 api 可以访问这些远程数据库。
If developers need other databases, such as mysql, ElasticSearch, and data lakes, these databases are not built in the uniCloud service space, and cloud functions can access these remote databases through nodejs api.

如果是业务方面的mysql，建议通过uniCloud web控制台数据导入或通过云函数将mysql数据导入到uniCloud的云数据库中，这样速度比连接远程mysql数据库要更快，
If it is mysql for business, it is recommended to import mysql data into the cloud database of uniCloud through the uniCloud web console or through cloud functions, which is faster than connecting to a remote mysql database.
并且可以使用jql、clientDB等一系列uniCloud提供的数据库操作技术，uniCloud庞大的生态如uni-id、uni-admin也都只支持uniCloud云数据库。
And you can use a series of database operation technologies provided by uniCloud, such as jql and clientDB. UniCloud's huge ecosystem, such as uni-id and uni-admin, only supports uniCloud cloud databases.

如果是 es搜索、大数据分析，则应该通过云函数中 nodejs API 远程连接这些数据库使用。
If it is es search and big data analysis, you should connect these databases remotely through the nodejs API in cloud functions.