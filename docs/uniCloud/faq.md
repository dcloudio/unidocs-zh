### uniCloud和微信小程序云开发、支付宝小程序云开发有何区别？
### What is the difference between uniCloud and WeChat applet cloud development and Alipay applet cloud development?

微信、支付宝、百度的小程序，均提供了云开发。但它们都仅支持自家小程序，无法在其他端使用。
WeChat, Alipay, and Baidu's small programs all provide cloud development. But they all only support their own mini programs and cannot be used on other ends.

`uniCloud`和微信小程序云开发、支付宝小程序云开发使用相同的基础建设平台，微信小程序云开发背后是腾讯云的TCB团队，支付宝小程序云开发背后是阿里小程序云团队。`uniCloud`是DCloud和阿里小程序云团队、腾讯云的TCB团队直接展开深层次合作，在他们底层资源的基础上进行二次封装，提供的跨端云开发方案。
`uniCloud` uses the same infrastructure platform as WeChat applet cloud development and Alipay applet cloud development. The TCB team of Tencent Cloud is behind the WeChat applet cloud development, and the Alibaba applet cloud team is behind the Alipay applet cloud development. `uniCloud` is a cross-terminal cloud development solution provided by DCloud, Alibaba's Mini Program Cloud team, and Tencent Cloud's TCB team.

简单来说，uniCloud和微信小程序云开发、支付宝小程序云开发一样稳定健壮，但有更多优势：
In short, uniCloud is as stable and robust as WeChat applet cloud development and Alipay applet cloud development, but has more advantages:
- 跨平台。不管你在uniCloud里选择了阿里还是腾讯的serverless，均可以跨uni-app的全端使用。从pc到h5，从Android到iOS，以及各家小程序快应用，十几个平台全端支持
- Cross-platform. Regardless of whether you choose Alibaba or Tencent's serverless in uniCloud, you can use it across the entire uni-app. From pc to h5, from Android to iOS, as well as various small program quick applications, more than a dozen platforms are fully supported
- uniCloud提供了`clientDB`神器，减少90%的服务器开发工作量，且保障数据安全。[详见](/uniCloud/database)
- uniCloud provides the `clientDB` artifact, which reduces the workload of server development by 90% and ensures data security. [See details](/uniCloud/database)
- uniCloud提供了[uni-id](uni-id-summary.md)、[uniPay](/uniCloud/unipay)等重要框架，大幅减少开发者的相应功能开发量。
- uniCloud provides important frameworks such as [uni-id](uni-id-summary.md), [uniPay](/uniCloud/unipay), which greatly reduces the amount of corresponding function development for developers.
- uniCloud提供了[uni-starter](https://ext.dcloud.net.cn/plugin?id=5057)，客户端开发工作量大幅减少。
- uniCloud provides [uni-starter](https://ext.dcloud.net.cn/plugin?id=5057), which greatly reduces the client development workload.
- uniCloud提供了[uniCloud admin](/uniCloud/admin)，管理端开发工作量大幅减少。
- uniCloud provides [uniCloud admin](/uniCloud/admin), which greatly reduces the development workload of the management side.
- uniCloud提供了[schema2code](schema2code.md)，只需编制数据库schema文件，用户端和管理端的数据列表、分页、搜索、详情查看、修改、删除，全套代码均能自动生成。
- uniCloud provides [schema2code](schema2code.md), you only need to compile the database schema file, the data list, pagination, search, details view, modification and deletion of the client and management end, and a full set of codes can be automatically generated.
- 更易学。uniCloud提供了`JQL`查询语言，比SQL和MongoDB的查询语法更简单易掌握，尤其是联表查询非常简单。[详见](https://uniapp.dcloud.io/uniCloud/database?id=jsquery)
- Easier to learn. uniCloud provides the `JQL` query language, which is simpler and easier to master than the query syntax of SQL and MongoDB, especially the join table query is very simple. [See details](https://uniapp.dcloud.io/uniCloud/database?id=jsquery)
- 更完善的工具链。前端uni-app、云端uniCloud、还有ide端的HBuilderX，互相紧密搭配，打造闭环的优秀开发体验
- A more complete toolchain. Front-end uni-app, cloud uniCloud, and ide-side HBuilderX work closely with each other to create an excellent closed-loop development experience
- 更丰富的生态。插件市场有大量现成的轮子和资源 [详见](https://ext.dcloud.net.cn/?cat1=7&orderBy=TotalDownload)
- Richer ecology. The plugin market has a lot of ready-made wheels and resources [see details](https://ext.dcloud.net.cn/?cat1=7&orderBy=TotalDownload)

如果你已经使用过微信小程序云开发，想进一步了解对比差异或如何从微信小程序云迁移到uniCloud，[详见](uniCloud/wx2unicloud.md)
If you have used WeChat applet cloud development and want to know more about the comparison and differences or how to migrate from WeChat applet cloud to uniCloud, [see details](uniCloud/wx2unicloud.md)

### uniCloud稳定吗？DCloud服务器异常会影响我的线上业务吗？
### Is uniCloud stable? Will abnormal DCloud server affect my online business?

`uniCloud`是 DCloud 和阿里云、腾讯云等成熟云厂商合作推出的云服务产品，阿里云、腾讯云等提供云端基础资源，DCloud提供API设计、前端框架、IDE工具支持、管理控制台、插件生态等服务，开发者的云函数直接托管在阿里云等服务商的serverless平台。
`uniCloud` is a cloud service product jointly launched by DCloud and mature cloud vendors such as Alibaba Cloud and Tencent Cloud. Alibaba Cloud and Tencent Cloud provide basic cloud resources. DCloud provides API design, front-end framework, IDE tool support, management console, and plug-ins. For ecological and other services, developers' cloud functions are directly hosted on the serverless platforms of service providers such as Alibaba Cloud.

用户终端上的应用在运行时，直连云服务商serverless平台，不会经过DCloud服务器，开发者无需担心因DCloud服务器负载而影响自己业务的问题。
When the application on the user terminal is running, it is directly connected to the serverless platform of the cloud service provider and does not pass through the DCloud server. Developers do not need to worry about the problem that their business is affected by the load of the DCloud server.

尤其是腾讯云付费版，享受腾讯云的SLA。如果真出问题，腾讯云会负责赔偿（实际上不太会出现故障）
Especially the Tencent Cloud paid version, enjoy Tencent Cloud's SLA. If there is a real problem, Tencent Cloud will be responsible for compensation (actually it is unlikely to fail)

### 云函数 和 传统 Node.js 开发有何区别？
### What is the difference between cloud functions and traditional Node.js development?

云函数相当于 Node.js + Serverless + DCloud改进。
Cloud functions are equivalent to Node.js + Serverless + DCloud improvements.
- 传统Node.js开发需要购买服务器，安装Node.js环境，部署 pm2 等守护进程；云函数无需考虑服务器环境，只需专心实现业务代码，然后将云函数一键上传，云服务商负责云函数运行环境的准备。
- Traditional Node.js development requires purchasing a server, installing a Node.js environment, and deploying daemon processes such as pm2; cloud functions do not need to consider the server environment, just concentrate on implementing business code, and then upload the cloud functions with one click, and the cloud service provider is responsible for the cloud Preparation of the function runtime environment.
- 传统Node.js开发模式，开发者需监控服务器参数，比如硬盘使用率，避免服务器负载过高导致业务中断；云函数模式下，开发者无需关心云函数运行的宿主环境，云厂商会实现服务调配及硬件监控。
- In the traditional Node.js development mode, developers need to monitor server parameters, such as hard disk usage, to avoid business interruption caused by excessive server load; in cloud function mode, developers do not need to care about the hosting environment for cloud functions, and cloud vendors will implement the service Provisioning and hardware monitoring.
- 用户量较大时，传统Node.js开发需考虑购买更多服务器并实现负载均衡；云函数模式下，云服务商自动弹性扩容，开发者无需担心服务器扛不住压力。
- When the number of users is large, traditional Node.js development needs to consider purchasing more servers and achieve load balancing; in the cloud function mode, the cloud service provider automatically expands the capacity elastically, and developers do not need to worry about the server being unable to withstand the pressure.
- 传统Node.js开发模式，需考虑安全防护，比如DDos攻击；云函数模式，云厂商的API网关会做拦截防护，开发者无需关心，并可节省高防IP等费用
- In the traditional Node.js development mode, security protection, such as DDos attacks, needs to be considered; in the cloud function mode, the cloud vendor's API gateway will do interception protection, so developers don't need to care, and can save costs such as high-defense IP

总结一下，前端同学即便可熟练编写Node.js代码，但对于DB优化、弹性扩容、攻击防护、灾备处理等方面还是有经验欠缺的，但`uniCloud`将这些都封装好了，真正做到仅专注业务实现，其它都委托云厂商服务。
To sum up, even though front-end students can write Node.js code proficiently, they are still inexperienced in DB optimization, elastic expansion, attack protection, disaster recovery processing, etc., but `uniCloud` encapsulates all these and truly achieves Only focus on business implementation, and other services are entrusted to cloud vendors.

另外，在 Node.js 代码实现上，云函数每次执行的宿主环境（可简单理解为虚拟机或服务器硬件）可能相同，也可能不同，因此传统`Node.js`开发中将部分信息存储本地硬盘或内存的方案就不再适合，建议通过云数据库或云存储的方案替代。
In addition, in the implementation of Node.js code, the host environment (which can be simply understood as virtual machine or server hardware) for each execution of cloud functions may be the same or different. Therefore, in traditional `Node.js` development, some information is stored locally The hard disk or memory solution is no longer suitable, and it is recommended to replace it with a cloud database or cloud storage solution.

当然还有最重要的一点，在uniCloud中，推荐大量业务使用clientDB，一个应用中写不了太多云函数。
Of course, there is also the most important point. In uniCloud, it is recommended that a large number of businesses use clientDB, and one application cannot write too many cloud functions.

### uniCloud只支持uni-app，怎么开发web界面？
### uniCloud only supports uni-app, how to develop web interface?

uni-app可以开发web界面，详见：[uni-app宽屏适配指南](https://uniapp.dcloud.io/adapt)
uni-app can develop web interface, see: [uni-app widescreen adaptation guide](https://uniapp.dcloud.io/adapt)

如果是需要pc版admin的话，uniCloud提供了[uniCloud admin](https://uniapp.dcloud.io/uniCloud/admin)
If you need a PC version of admin, uniCloud provides [uniCloud admin](https://uniapp.dcloud.io/uniCloud/admin)

### 可否通过http url方式访问云函数或云数据库？
### Can I access cloud functions or cloud databases through http url?

- 场景1：比如App端微信支付，需要配服务器回调地址，此时需要一个HTTP URL。
- Scenario 1: For example, WeChat payment on the App side needs to be configured with a server callback address. In this case, an HTTP URL is required.
- 场景2：非uni-app开发的系统，想要连接uniCloud，读取数据，也需要通过HTTP URL方式访问。
- Scenario 2: For a system not developed by uni-app, if you want to connect to uniCloud and read data, you also need to access it through HTTP URL.

uniCloud提供了`云函数URL化`，来满足上述需求。[详见](https://uniapp.dcloud.io/uniCloud/http)
uniCloud provides `cloud function URLization` to meet the above requirements. [See details](https://uniapp.dcloud.io/uniCloud/http)

### 微信云开发支持客户端直接操作数据库，uniCloud支持吗？
### WeChat cloud development supports the client to directly operate the database, does uniCloud support it?

uniCloud提供了比微信云开发更优秀的前端操作数据库方案，见：[clientDB](clientdb.md)
uniCloud provides a better front-end operation database solution than WeChat cloud development, see: [clientDB](clientdb.md)

### 云开发是nodejs+改良版MongoDB组合，对比php+mysql的传统组合怎么样？
### Cloud development is a combination of nodejs+improved MongoDB, how about the traditional combination of php+mysql?

nodejs的性能优于php，MongoDB的性能也优于mysql。
The performance of nodejs is better than that of php, and the performance of MongoDB is also better than that of mysql.

对于前端而言，MongoDB这种类json的文档数据库更加易用，且有更高的灵活性。
For the front end, MongoDB, a json-like document database, is easier to use and has higher flexibility.
操作MongoDB仍然使用js的方法。
Operating MongoDB still uses the methods of js.

MongoDB非常灵活，可以对大数据量的表随便增加字段。而mysql的表数据量一旦变大，每增加一个字段，数据库的体积和性能都会造成负面影响。
MongoDB is very flexible and can add fields to tables with large amounts of data at will. Once the amount of table data in MySQL becomes larger, each additional field will have a negative impact on the size and performance of the database.

MongoDB的字段可以嵌套，表达tree型的数据非常方便，扩展起来随心所欲。
MongoDB's fields can be nested, which is very convenient to express tree-type data, and can be expanded as you like.

对于希望增加数据冗余以提高性能的开发者而言，nosql数据库则是利器。
For developers who want to increase data redundancy to improve performance, the nosql database is a powerful tool.

当然，对于喜欢传统数据库的开发者而言，仍然可以按传统方式设计数据库表结构。
Of course, for developers who prefer traditional databases, the database table structure can still be designed in the traditional way.

MongoDB的功能要比mysql强大很多。sql太简单的了，一段sql语句其实就是一个字符串，写不了复杂的逻辑。
MongoDB is much more powerful than mysql. SQL is too simple. A SQL statement is actually a string, and complex logic cannot be written.

而MongoDB有非常多的js api，各种聚合运算符，它是可编程的，而不是仅靠一段字符串sql语句来表达。
And MongoDB has a lot of js api, various aggregation operators, it is programmable, rather than only a string of SQL statements to express.

举个例子，商品数据表中有4个字段：浏览量、收藏量、购买量、评价。需要生成一个近期热门商品列表，4个字段各占25%的权重，加权后排序。这种需求sql是无法直接实现的。而MongoDB里可以一个查询直接返回排序好的结果。
For example, there are 4 fields in the product data table: Views, Collections, Purchases, and Reviews. A list of recent popular products needs to be generated. Each of the four fields accounts for 25% of the weight and is sorted after weighting. This kind of requirement sql cannot be realized directly. In MongoDB, a query can directly return sorted results.

SQL的模糊查询也很弱，like只有前后%，导致很多开发者不得不再使用ElastciSearch这些三方数据库。虽然后期版本的mysql也支持有限正则。但MongoDB的正则查询还是超过开发者预期的强大。
The fuzzy query of SQL is also very weak, like only the front and back %, so many developers have to use the third-party databases such as ElastciSearch again. Although later versions of mysql also support limited regularization. But MongoDB's regular queries are still more powerful than developers expected.

MongoDB虽然强大，但易用性不佳，尤其是聚合运算写起来非常复杂。
Although MongoDB is powerful, it is not easy to use, especially the aggregation operation is very complicated to write.

uniCloud在MongoDB的基础上改良，进一步提供了`DB Schema`和`JQL`。
uniCloud is improved on the basis of MongoDB and further provides `DB Schema` and `JQL`.

`DB Schema`是一个json文件，可以对数据进行描述、约定字段值域、控制操作权限、描述字段之间的关系，让数据库管理更高效，并且大幅降低了服务端的代码开发工作量。[详见](https://uniapp.dcloud.io/uniCloud/schema)
`DB Schema` is a json file that can describe data, agree on field value ranges, control operation permissions, and describe the relationship between fields, making database management more efficient and greatly reducing the workload of code development on the server side. [See details](https://uniapp.dcloud.io/uniCloud/schema)

`JQL`是一套操作uniCloud数据库的方法，它更符合js开发者的习惯，并且极大的降低了学习成本和代码量。
`JQL` is a set of methods for operating the uniCloud database, which is more in line with the habits of js developers, and greatly reduces the learning cost and the amount of code.
比如联表查询、tree查询，都变的非常简单。像tree查询是以往只有oracle才有的功能。`JQL`文档[详见](https://uniapp.dcloud.net.cn/uniCloud/database?id=jsquery)
For example, join table query and tree query have become very simple. Like tree query is a function that only Oracle has in the past. `JQL` documentation [see details](https://uniapp.dcloud.net.cn/uniCloud/database?id=jsquery)

曾经DCloud官方也推进过阿里云和腾讯云提供serverless的mysql。但经过对MongoDB的深入研究和改良，DCloud已经放弃了难用的mysql。推荐开发者了解uniCloud的云数据库，用起来更强大和方便。
In the past, DCloud officials also promoted Alibaba Cloud and Tencent Cloud to provide serverless mysql. But after in-depth research and improvement of MongoDB, DCloud has given up the difficult-to-use mysql. It is recommended that developers understand the cloud database of uniCloud, which is more powerful and convenient to use.

### 支持websocket吗？
### Does it support websockets?
1. uni-push2.0，全端支持（APP、H5、各端小程序）当应用在线时就是一个免费的websocket服务，详情文档：[https://uniapp.dcloud.io/unipush-v2.html](https://uniapp.dcloud.io/unipush-v2.html)
1. uni-push2.0, full-end support (APP, H5, applet on each end) is a free websocket service when the application is online, detailed document: [https://uniapp.dcloud.io/unipush-v2. html](https://uniapp.dcloud.io/unipush-v2.html)
2. 如果是im方面的需求，那么基于uniPush的im服务是非常推荐的选择：[https://ext.dcloud.net.cn/plugin?id=2670](https://ext.dcloud.net.cn/plugin?id=2670)
2. If it is an im requirement, the im service based on uniPush is a highly recommended choice: [https://ext.dcloud.net.cn/plugin?id=2670](https://ext.dcloud.net .cn/plugin?id=2670)

### 如何导入老数据库的数据？
### How to import data from the old database?
- 方式1：可以在HBuilderX里用db_init.json来批量创建云数据库和插入表内容，[详见](https://uniapp.dcloud.io/uniCloud/cf-database?id=%e4%bd%bf%e7%94%a8db_initjson%e5%88%9d%e5%a7%8b%e5%8c%96%e9%a1%b9%e7%9b%ae%e6%95%b0%e6%8d%ae%e5%ba%93)
- Method 1: You can use db_init.json in HBuilderX to create cloud databases and insert table contents in batches, [see details](https://uniapp.dcloud.io/uniCloud/cf-database?id=%e4%bd% bf%e7%94%a8db_initjson%e5%88%9d%e5%a7%8b%e5%8c%96%e9%a1%b9%e7%9b%ae%e6%95%b0%e6%8d%ae% e5%ba%93)
- 方式2：阿里云支持在uniCloud web控制台界面直接导入导出数据
- Method 2: Alibaba Cloud supports importing and exporting data directly on the uniCloud web console interface
- 方式3：在云函数里，使用nodejs标准写法，连接老数据库，如使用mysql的[插件](https://ext.dcloud.net.cn/plugin?id=1925)，把数据读出来，再批量写入云数据库
- Method 3: In the cloud function, use the standard writing method of nodejs to connect to the old database, such as using the [plugin] of mysql (https://ext.dcloud.net.cn/plugin?id=1925), read the data, Then batch write to cloud database
- 方式4：将一个云函数URL化，用其他语言读取老数据库，通过http方式提交到云函数，云函数将接收到的数据存入云数据库
- Method 4: URLize a cloud function, read the old database in other languages, submit it to the cloud function through http, and the cloud function will store the received data in the cloud database

### 云函数访问时快时慢怎么回事？
### What happens when cloud function access is fast and slow?

云函数对应的资源，如果长时间不使用，会被阿里云或腾讯云平台从内存中释放。一旦被释放，启动云函数时会有一个冷启动的过程。
If the resources corresponding to cloud functions are not used for a long time, they will be released from memory by Alibaba Cloud or Tencent Cloud. Once released, there will be a cold start process when launching cloud functions.

表现为：隔了很久不用，第一次用就会比较慢，然后立即访问第二次，则很快，毫秒级响应。
The performance is as follows: after a long period of non-use, the first use will be relatively slow, and then the second visit immediately, it will be very fast, with a millisecond response.

冷启动的速度一般不会超过1.5秒，如超过1.5秒应该是云函数写的有问题或网络有问题。
The cold start speed generally does not exceed 1.5 seconds. If it exceeds 1.5 seconds, there should be a problem with the writing of the cloud function or a network problem.

资源回收策略方面，阿里云是15分钟内没有第二次访问的云函数，就会被回收。腾讯云是半小时。
In terms of resource recycling strategy, Alibaba Cloud will be recycled if there is no second access to the cloud function within 15 minutes. Tencent Cloud is half an hour.

两家云厂商仍然在优化这个问题。目前如果开发者在意这个问题，给开发者的建议是：
Both cloud vendors are still optimizing this issue. At present, if developers care about this problem, the advice to developers is:
1. 使用clientDB可以减少遇到冷启动问题的概率
1. Using clientDB can reduce the probability of encountering cold start problems
2. 非高频访问的云函数，合并到高频云函数中。有的开发者使用纯单页方式编写云函数，即在一个云函数中通过路由处理实现了整个应用的所有后台逻辑。参考[插件](https://ext.dcloud.net.cn/search?q=%E8%B7%AF%E7%94%B1&cat1=7&orderBy=UpdatedDate)
2. Cloud functions that are not frequently accessed are merged into high-frequency cloud functions. Some developers use a pure single-page method to write cloud functions, that is, all the background logic of the entire application is implemented in one cloud function through routing processing. Reference [plugin](https://ext.dcloud.net.cn/search?q=%E8%B7%AF%E7%94%B1&cat1=7&orderBy=UpdatedDate)
3. 非高频访问的云函数，可以通过定时任务持续运行它（注意腾讯云可以使用这个方式完全避开冷启动，而阿里云的定时任务最短周期大于资源回收周期）
3. For cloud functions that are not frequently accessed, you can run them continuously through scheduled tasks (note that Tencent Cloud can use this method to completely avoid cold starts, while Alibaba Cloud’s scheduled tasks have a shorter period than the resource recovery period)
4. 配置云函数的单实例多并发，请参考：[单实例多并发](cf-functions.md#concurrency)
4. To configure single-instance multi-concurrency of cloud functions, please refer to: [Single-instance multi-concurrency](cf-functions.md#concurrency)

### uniCloud访问速度感觉不如传统服务器？@slow
### uniCloud access speed feels inferior to traditional servers? @slow
有开发者在一台单机上安装php或java，连接同电脑的mysql。然后与uniCloud比较速度，认为uniCloud偏慢。这里需要澄清如下差异：
Some developers install php or java on a single computer, and connect to the mysql of the same computer. Then compare the speed with uniCloud and think that uniCloud is slow. The following differences need to be clarified here:

- 原因1. 冷启动。具体分析见上一问题
- Cause 1. Cold start. For specific analysis, see the previous question

- 原因2. 代码和数据库不在一台服务器
- Reason 2. The code and database are not on the same server
在一台单机上安装php或java，同时安装数据库，访问速度确实快。但在使用云数据库时，即数据库是单独的服务器，和运行代码不在一台服务器上时，就会略微造成些延迟。但商业应用的数据库肯定都是独立服务器。
Install php or java on a single machine, and install the database at the same time, the access speed is really fast. But when using a cloud database, that is, the database is a separate server, and the running code is not on the same server, it will cause a slight delay. But the databases of commercial applications are definitely independent servers.

- 原因3. 拦截器
- Reason 3. Interceptors
后端开发的请求一般都有路由管理框架或拦截器，每个请求都要拦截，校验权限。使用这类框架肯定会增加耗时。
Back-end development requests generally have routing management frameworks or interceptors, and each request must be intercepted to verify permissions. Using such frameworks will definitely increase the time consuming.

clientDB就是这种情况，因为clientDB内部有权限校验系统，某些权限的验证还需要数据库查询。
This is the case with clientDB, because clientDB has a permission verification system inside, and the verification of some permissions also requires database query.

所以虽然clientDB的速度慢一些，但实际上开发者在自己写了路由拦截和权限管理的框架后，速度也一样会下降。
Therefore, although the speed of clientDB is slower, in fact, after developers write their own framework for routing interception and permission management, the speed will also decrease.

从uni-id 3.0起，用户的角色权限缓存在token里，不再查库。clientDB的速度比之前提升了100毫秒左右。如果还未升级，请尽快[升级](https://ext.dcloud.net.cn/plugin?id=2116)。同时注意如果用了uniCloud admin，也要配套升级。如果自己在云函数里编写过相关业务逻辑，请务必阅读升级注意事项。
Since uni-id 3.0, the user's role permissions are cached in the token, and the database is no longer checked. The speed of clientDB is about 100 milliseconds faster than before. If it has not been upgraded, please [upgrade] as soon as possible (https://ext.dcloud.net.cn/plugin?id=2116). At the same time, note that if you use uniCloud admin, you must also upgrade it. If you have written relevant business logic in cloud functions, be sure to read the upgrade precautions.

- 原因4. 数据库索引
- Reason 4. Database Index

查询表的索引要正确配置，需要在where里查询的字段都建议配上索引，否则查询会很慢。
The index of the query table must be properly configured, and it is recommended that all fields that need to be queried in where should be indexed, otherwise the query will be very slow.

但注意索引不能太多，否则增删改数据时又会变慢，精准很重要。推荐详细阅读[索引文档](https://uniapp.dcloud.io/uniCloud/db-index)
But be careful not to have too many indexes, otherwise it will slow down when adding, deleting or modifying data. Accuracy is very important. It is recommended to read the [index document](https://uniapp.dcloud.io/uniCloud/db-index)

### 发布H5时还得自己找个服务器部署前端网页，可以不用自己再找服务器吗？
### When I release H5, I have to find a server to deploy the front-end webpage by myself. Can I not have to find a server by myself?

uniCloud支持[前端网页托管](https://uniapp.dcloud.io/uniCloud/hosting)，选择阿里云作为云厂商时完全免费！
uniCloud supports [front-end web hosting](https://uniapp.dcloud.io/uniCloud/hosting), and it is completely free when you choose Alibaba Cloud as the cloud vendor!

- 如果你已经有备案过的域名，直接解析过来即可；
- If you already have a registered domain name, you can directly resolve it;
- 如果你要新注册域名，备案流程和传统云主机略有不同，涉及一个uniCloud没有固定ip的问题。此时可以去买花生壳的备案服务；也可以临时买一个短期固定ip，走固定ip备案。这里有开发者分享的[经验贴](https://ask.dcloud.net.cn/article/38116)
- If you want to register a new domain name, the filing process is slightly different from traditional cloud hosting, which involves a problem that uniCloud does not have a fixed IP. At this time, you can buy the filing service of peanut shells; you can also temporarily buy a short-term fixed IP and go to the fixed IP for filing. Here are [experience posts] shared by developers (https://ask.dcloud.net.cn/article/38116)

如果是因为微信js sdk等服务要求配置固定ip白名单，那么腾讯云收费空间已经支持固定ip，[详见](https://uniapp.dcloud.io/uniCloud/cf-functions?id=eip)
If it is because services such as WeChat js sdk require the configuration of a fixed IP whitelist, then Tencent Cloud's charging space already supports fixed IP, [see details](https://uniapp.dcloud.io/uniCloud/cf-functions?id=eip)

### uniCloud云数据库如何实现全文检索
### How uniCloud cloud database realizes full-text search

uniCloud的云数据库本身就是文档型数据库，可以全文检索。
The cloud database of uniCloud itself is a document database, which can be searched in full text.

查询数据时可以传入正则表达式。相比sql的like只有前后的%，正则表达式要强大的多。详情请参考[正则表达式查询](https://uniapp.dcloud.io/uniCloud/cf-database?id=regexp)
Regular expressions can be passed in when querying data. Compared with sql's like, which only has % before and after, regular expressions are much more powerful. For details, please refer to [Regular Expression Query](https://uniapp.dcloud.io/uniCloud/cf-database?id=regexp)

当然如果你需要额外配置ElastciSearch等三方数据库，也可以自己找服务器安装这些服务，同步数据，把需要搜索的数据同步过去。
Of course, if you need to configure additional third-party databases such as ElastciSearch, you can also find a server to install these services, synchronize data, and synchronize the data to be searched.

### uniCloud内如何使用formdata
### How to use formdata in uniCloud

nodejs本身不支持formdata，但是可以通过手动拼装formdata的方式来进行支持，[参考](https://www.npmjs.com/package/form-data)
Nodejs itself does not support formdata, but it can be supported by manually assembling formdata, [Reference](https://www.npmjs.com/package/form-data)

结合`uniCloud.httpclient.request`使用的示例
Example used with `uniCloud.httpclient.request`

```js
const FormData = require('form-data');
let form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Buffer(10));

form.append('img', new Buffer(10), {
  filename: `${Date.now()}.png`,
  contentType: 'image/png'
})

uniCloud.httpclient.request('https://example.com',{
  content: form.getBuffer(),
  headers: form.getHeaders()
})
```

### 腾讯、阿里的serverless有什么大案例？
### What are the major cases of Tencent and Alibaba's serverless?

- 微信小程序云开发，已经有50万开发者，包括腾讯自有的很多大日活应用都构建在腾讯云serverless上，如微信生活缴费、乘车码、微信读书、腾讯新闻、腾讯相册等。
- WeChat applet cloud development, there are already 500,000 developers, including many of Tencent's own daily life applications are built on Tencent cloud serverless, such as WeChat life payment, bus code, WeChat reading, Tencent news, Tencent photo album, etc.
- 2019年双11，阿里部分业务已经迁移在serverless上。支付宝小程序也提供了云开发功能。
- On Double 11 in 2019, part of Alibaba's business has been migrated to serverless. The Alipay applet also provides cloud development functions.


### 如何控制云函数数量？云函数是否可以按多级目录整理@merge-functions
### How to control the number of cloud functions? Can cloud functions organize @merge-functions by multi-level directory

不需要控制数量，实际开发中不会突破限制。
There is no need to control the number, and the limit will not be broken in actual development.

因为实际开发中会使用框架而不是真的一个一个开发云函数。
Because the framework will be used in actual development instead of really developing cloud functions one by one.

1. 使用[clientDB](https://uniapp.dcloud.net.cn/uniCloud/clientdb)。这种方式是在前端直接操作数据库，此时一个云函数都不需要写。开发效率远超传统开发模式。包括它配套的action云函数是不占用云函数数量的。
1. Use [clientDB](https://uniapp.dcloud.net.cn/uniCloud/clientdb). In this way, the database is directly operated on the front end, and no cloud function needs to be written at this time. The development efficiency far exceeds the traditional development mode. Including its supporting action cloud function does not occupy the number of cloud functions.
2. 使用[uni-cloud-router单路由云函数框架](https://uniapp.dcloud.net.cn/uniCloud/uni-cloud-router)，这种方式只有一个云函数，所有接口都是这个云函数的不同参数，它有统一的路由管理。
2. Use [uni-cloud-router single-route cloud function framework](https://uniapp.dcloud.net.cn/uniCloud/uni-cloud-router), this method has only one cloud function, and all interfaces are this Different parameters of cloud functions, it has unified routing management.

以免费空间的48个云函数举例，一般情况下：
Take the 48 cloud functions of free space as an example, in general:
- [uni-id](uni-id-summary.md)会有一个云对象（uni-id-co）或老版的云函数（uni-id-cf），这是必备的一个云函数
- [uni-id](uni-id-summary.md) will have a cloud object (uni-id-co) or an old cloud function (uni-id-cf), which is a necessary cloud function
- 如果使用uni统计、app升级中心、uni发布平台、uniPush2、[uni-search热搜词统计跑批](https://ext.dcloud.net.cn/plugin?id=3851)，这些会自带云函数
- If you use uni statistics, app upgrade center, uni publishing platform, uniPush2, [uni-search hot search word statistics running batch](https://ext.dcloud.net.cn/plugin?id=3851), these will be automatically with cloud function

上述几个是官方推荐的几个常用框架所带的云函数，然后开发者自己的代码里，大多数业务使用clientDB开发，不写云函数，或者写了配套的action云函数也不占用云函数数量；如果还需要自己写一些云函数，再加上uni-cloud-router，用这个单路由云函数搞定剩余需求；另外如果有跑批数据的需求可以再来一个云函数。所以无论如何48个云函数都占不满。
The above are the cloud functions that are officially recommended by several common frameworks. Then, in the developer's own code, most businesses are developed using clientDB without writing cloud functions, or writing supporting action cloud functions without occupying cloud functions. Quantity; if you need to write some cloud functions yourself, plus uni-cloud-router, use this single-route cloud function to handle the remaining needs; in addition, if you need to run batch data, you can add another cloud function. So in any case, 48 cloud functions are not satisfied.

uniCloud的每个云函数是一个独立进程，不存在云函数级别的多级目录概念。
Each cloud function of uniCloud is an independent process, and there is no multi-level directory concept at the cloud function level.

每个云函数下可以有子目录，但它们都属于这个云函数的一部分，而不是另一个云函数。
There can be subdirectories under each cloud function, but they are all part of this cloud function, not another cloud function.

单路由云函数框架不止是官方提供的uni-cloud-router，插件市场有很多类似框架：[详见](https://ext.dcloud.net.cn/search?q=%E8%B7%AF%E7%94%B1&cat1=7&orderBy=TotalDownload)
The single-route cloud function framework is not only the official uni-cloud-router, but there are many similar frameworks in the plugin market: [see details](https://ext.dcloud.net.cn/search?q=%E8%B7%AF %E7%94%B1&cat1=7&orderBy=TotalDownload)


### 港澳台及境外用户访问比较慢怎么办@global-accelerate
### What should I do if users from Hong Kong, Macau, Taiwan and overseas are slow to access @global-accelerate

港澳台及境外用户需要使用全球加速。uniCloud服务商为阿里云时支持配置全球加速，步骤如下：
Hong Kong, Macao, Taiwan and overseas users need to use Global Accelerator. When the uniCloud service provider is Alibaba Cloud, it supports configuring global acceleration. The steps are as follows:

1. 参考[阿里云全球加速](https://help.aliyun.com/document_detail/153198.html)文档，开通服务并对`自有域名`进行加速
1. Refer to the [Alibaba Cloud Global Acceleration](https://help.aliyun.com/document_detail/153198.html) document to activate the service and accelerate the `own domain name`
2. 将上述域名CNAME到`api.bspapp.com`
2. CNAME the above domain name to `api.bspapp.com`
3. [自行初始化uniCloud](uniCloud/init.md)传入endpoint参数，其值为开通全球加速的自有域名
3. [Initialize uniCloud by yourself](uniCloud/init.md) passes in the endpoint parameter, which is the own domain name for which Global Acceleration is activated

### 腾讯云提示当前实名主体已经有三个账号怎么办@tencent-exceed-account-limit
### What if Tencent Cloud prompts that the current real-name subject already has three accounts @tencent-exceed-account-limit

开通腾讯云服务空间时实名认证提示实名主体已有三个账号，这往往是开发者在微信小程序开发工具里不小心开通了多个免费的小程序云，此时可以参考以下流程注销不用的账号：
When opening the Tencent Cloud service space, the real-name authentication prompts that the real-name subject has three accounts. This is often because the developer has accidentally opened multiple free applet clouds in the WeChat applet development tool. At this time, you can refer to the following process to cancel the unused account. :

1. 打开[腾讯云找回账号](https://cloud.tencent.com/services/forgotAccount)页面
1. Open the [Tencent Cloud Forgot Account](https://cloud.tencent.com/services/forgotAccount) page
2. 选择找回账号方式为实名信息
2. Select the method to retrieve the account as real-name information
3. 操作完成之后可以看到自己实名信息对应的全部腾讯云账号
3. After the operation is completed, you can see all Tencent Cloud accounts corresponding to your real-name information
4. 选择不使用的账号登录之后注销即可，参考文档：[注销腾讯云账号](https://cloud.tencent.com/document/product/378/30253)
4. Select the unused account to log in and then log out. Refer to the document: [Logout Tencent Cloud Account](https://cloud.tencent.com/document/product/378/30253)

同时，如果付费购买腾讯云服务空间，每个账号可以最多拥有50个腾讯云服务空间（注意其中仅有一个享受免费额度）。
At the same time, if you pay for Tencent Cloud service space, each account can have up to 50 Tencent Cloud service spaces (note that only one of them enjoys a free quota).

### 高并发下简单的防止超卖
### Simple to prevent oversold under high concurrency

> uniCloud阿里云现已支持redis，开通并使用redis请参考:[redis开通和使用](uniCloud/redis.md)，如何使用redis防止超卖请参考：[redis高并发抢购](uniCloud/redis.md?id=snap-over-sell)（推荐使用）。如下方式针对无redis场景比较不灵活（不推荐使用）
> uniCloud Alibaba Cloud now supports redis, please refer to: [redis activation and use](uniCloud/redis.md), how to use redis to prevent overselling, please refer to: [redis high concurrent purchase] (uniCloud/redis. md?id=snap-over-sell) (recommended). The following methods are relatively inflexible for scenarios without redis (not recommended)

高并发时很多用户同时对一条数据读写，很容易造成数据混乱，表现在秒杀抢购等场景就是超卖。以秒杀为例，开发者可以从扣除库存这步入手对超卖进行很大程度的限制，下面是一个简单的示例（**注意以下代码未使用事务**）
When there is high concurrency, many users read and write a piece of data at the same time, which can easily cause data confusion, which is manifested in oversold scenarios such as spikes and panic buying. Taking Lightning Strike as an example, developers can limit oversold to a large extent by deducting inventory. The following is a simple example (**Note that the following code does not use transactions**)

```js
// 云函数
// cloud function
const db = uniCloud.database()
const dbCmd = db.command
exports.main = async function(event){
  const transaction = await db.startTransaction()
  // 其他业务逻辑...
  // other business logic...
  // 库存减一
  // stock minus one
  const reduceRes = await db.collection('goods').where({
    _id: 'goods_id', // 商品ID
    stock: dbCmd.gt(1) // 限制库存大于1的才允许扣除库存
  }).update({
    stock: dbCmd.inc(-1)
  })
  if(reduceRes.updated === 0) { // 如果没成功更新库存就认为下单失败
    await transaction.rollback()
    return {
      code: 1001,
      message: '下单失败'
    }
  }
}
```


### 云存储、数据库还没有使用就多了几次
### Cloud storage and database have been added several times before they are used

关于云存储：这里的读写次数，并不一定是针对文件的：包括：上传文件、修改Policy、修改ACL、修改CORS 等操作，都会被认为是COS写。环境初始化时也会执行很多次初始化操作，写入 policy/acl/cors 等配置信息。用户每次操作 修改安全域名、修改静态域名等，也会触发 CORS 的写入。
About cloud storage: The number of reads and writes here is not necessarily for files: operations such as uploading files, modifying Policy, modifying ACL, modifying CORS, etc., will all be considered as COS writes. When the environment is initialized, many initialization operations are also performed, and configuration information such as policy/acl/cors is written. Every time the user operates to modify the security domain name, modify the static domain name, etc., it will also trigger the writing of CORS.

关于数据库：开发者通过uniCloud web控制台访问数据库也会增加少量读写次数
About the database: Developers accessing the database through the uniCloud web console will also increase the number of reads and writes by a small amount

### 部署网站到前端网页托管报“The requested file was not found on this server.”
### Deploy the website to the front-end web hosting and report "The requested file was not found on this server."

- 部署history模式的uni-app项目时，如果未修改前端网页托管的配置，直接访问子页面时就会遇到上面的错误。如何配置请参考[部署uni-app项目](uniCloud/hosting.md?id=host-uni-app)
- When deploying a uni-app project in history mode, if the configuration of the front-end web page hosting is not modified, the above error will be encountered when directly accessing the sub-page. For how to configure, please refer to [Deploy uni-app project](uniCloud/hosting.md?id=host-uni-app)

### 使用腾讯云报未登录Cloudbase
### Not logged in to Cloudbase using Tencent Cloud News

腾讯云会在本地storage存储一些信息，请不要在应用使用过程中使用clearStorage等接口直接删除storage。
Tencent Cloud will store some information in the local storage. Please do not use interfaces such as clearStorage to directly delete the storage during application use.

### 阿里云前端网页托管域名报错指引@ali-hosting-domain
### Alibaba Cloud front-end web hosting domain name error guide@ali-hosting-domain

1. 错误信息：`该域名已经被添加过，不能重复添加`
1. Error message: `This domain name has already been added and cannot be added again`

  前端网页托管会和阿里云上其他的CDN业务（包括但不限于CDN）冲突，如需绑定到前端网页托管请先将此域名与其他业务解除关联。
  Front-end web hosting will conflict with other CDN services (including but not limited to CDN) on Alibaba Cloud. If you want to bind to front-end web hosting, please disassociate this domain name from other services first.
  
2. 错误信息：`The root domain of your domain is reserved by another account`
2. Error message: `The root domain of your domain is reserved by another account`

  当前域名有在阿里云开通全站加速相关业务（可能配置了泛域名加速），与前端网页托管冲突。可以考虑使用三级域名或去除泛域名加速改为单独配置需要加速的域名。
  The current domain name has services related to site-wide acceleration on Alibaba Cloud (probably configured with pan-domain name acceleration), which conflicts with front-end web hosting. You can consider using the third-level domain name or removing the generic domain name acceleration instead of configuring the domain name that needs to be accelerated separately.

### 授权其他用户访问服务空间@collaborator
### Authorize other users to access the service space @collaborator

详见文档：[服务空间的多人协作](/uniCloud/concepts/space?id=collaboration)
For details, please refer to the document: [Multiplayer Collaboration in Service Space](/uniCloud/concepts/space?id=collaboration)

### 如何使用promise/async/await@promise
### How to use promise/async/await@promise

uniCloud客户端callFunction及数据库相关接口会返回Promise类型结果，请参考以下写法使用：
The uniCloud client callFunction and database related interfaces will return Promise type results, please refer to the following writing method:

```html
// index.vue
<template>
  <view class="content">
    <button type="default" @click="testThen">promise+then</button>
    <button type="default" @click="testAwait">async+await</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      testThen() {
        uniCloud.callFunction({
          name: 'test'
        }).then(res => {
          console.log(res)
        }).catch(err => {
          console.error(err)
        })
      },
      async testAwait() {
        const res = await uniCloud.callFunction({
          name: 'test'
        })
        console.log(res)

        // 如需捕获错误需使用如下写法
        // try {
        //   const res = await uniCloud.callFunction({
        //     name: 'test'
        //   })
        //   console.log(res)
        // } catch (err) {
        //   console.error(err)
        // }

      }
    }
  }
</script>

<style>
</style>
```

### 发生故障时如何判断故障点@fault
### How to judge the fault point when a fault occurs @fault

当你的系统出问题时，如何判断是DCloud还是阿里云或腾讯云的问题？
When there is a problem with your system, how to judge whether it is the problem of DCloud, Alibaba Cloud or Tencent Cloud?

首先再次声明，DCloud的服务仅限于开发阶段。发行部署后，应用的访问不经过DCloud的服务器。
First of all, once again, DCloud's services are limited to the development stage. After the release and deployment, the access of the application does not go through the DCloud server.

1. 通过域名判断故障点
1. Determine the fault point by the domain name
- unicloud.dcloud.net.cn，属于DCloud，这个网站是开发期间使用的，你的应用上线运行时，不经过DCloud服务器。
- unicloud.dcloud.net.cn belongs to DCloud. This website is used during development. When your application is online and running, it does not pass through the DCloud server.
	如果该域名可以访问，但是在该域名下操作连接阿里云或腾讯云的数据出现问题，那么也是阿里云或腾讯云出了问题。
	If the domain name can be accessed, but there is a problem with the data connected to Alibaba Cloud or Tencent Cloud under this domain name, then there is also a problem with Alibaba Cloud or Tencent Cloud.
- bspapp.com，属于阿里云。如果该域名访问报错，说明阿里云serverless出故障了。
- bspapp.com, which belongs to Alibaba Cloud. If an error is reported when accessing the domain name, it means that Alibaba Cloud serverless is faulty.
- tencentcloudapi.com，属于腾讯云。如果该域名访问报错，说明腾讯云serverless出故障了。
- tencentcloudapi.com, which belongs to Tencent Cloud. If an error is reported when accessing the domain name, it means that Tencent Cloud serverless is faulty.

当然还有一种情况报错，其实是客户端的问题，包括浏览器的跨域问题，或者小程序的域名白名单问题，导致客户端无法连接uniCloud。这需要通过配置来解决，参考文档：[小程序和浏览器的域名访问配置](https://uniapp.dcloud.io/uniCloud/quickstart?id=useinmp)
Of course, there is another case of reporting an error, which is actually a client-side problem, including the browser's cross-domain problem, or the applet's domain name whitelist problem, which prevents the client from connecting to uniCloud. This needs to be solved by configuration, refer to the document: [Domain Name Access Configuration for Applets and Browsers](https://uniapp.dcloud.io/uniCloud/quickstart?id=useinmp)

2. 通过测试系统判断故障点
2. Determine the fault point through the test system
- [hello uniCloud 阿里云版](https://hellounicloud.dcloud.net.cn/#/)
- [hello uniCloud Alibaba Cloud Edition](https://hellounicloud.dcloud.net.cn/#/)
- [hello uniCloud 腾讯云版](https://hellounicloud.dcloud.net.cn/tcb/#/)
- [hello uniCloud Tencent Cloud Edition](https://hellounicloud.dcloud.net.cn/tcb/#/)

如果测试系统不正常，那就说明这家云厂商的服务出故障了。
If the test system is abnormal, it means that the cloud vendor's service is faulty.

这2个系统是完全独立的，如果两个系统都故障了，那就是2家云厂商都故障了，而不是DCloud服务故障了。再次声明，发布后的服务，不连接DCloud的服务器。
These two systems are completely independent. If both systems fail, it means that both cloud vendors have failed, not the DCloud service. Again, the published service does not connect to the DCloud server.

当遇到uniCloud故障时，在uniCloud的QQ群或论坛里反馈即可。因为阿里云、腾讯云其实都有拨测系统，他们也会及时知道故障并解决的。
When encountering uniCloud failure, you can give feedback in the uniCloud QQ group or forum. Because Alibaba Cloud and Tencent Cloud actually have a dialing and testing system, they will also know the fault in time and solve it.

### 常见数据库错误
### Common database errors

**`operation exceeded time limit`、`云数据库执行时间超限`错误**
**`operation exceeded time limit`, `cloud database execution time exceeded` errors**

此错误一般由数据库操作超时引发，具体如何优化请参考：[性能优化](https://uniapp.dcloud.io/uniCloud/db-performance)
This error is generally caused by database operation timeout. For details on how to optimize, please refer to: [Performance Optimization](https://uniapp.dcloud.io/uniCloud/db-performance)

**使用事务时出现`WriteConflict`错误**
** `WriteConflict` error when using transactions**

事务的执行会锁行，同时执行的不同事务在操作同一行数据是会存在冲突导致写入失败。尽量优化流程，避免事务互相冲突
The execution of the transaction will lock the row, and different transactions executed at the same time will conflict with the same row of data and cause the write to fail. Try to optimize the process to avoid conflicting transactions

### 云函数通过https访问其他服务器时出现“certificate has expired”@lets-encrypt-cert
### "certificate has expired" when cloud functions access other servers via https @lets-encrypt-cert

> 本章节仅对let's encrypt证书调整进行说明，其他情况请检查对应网站证书是否过期
> This chapter only describes the adjustment of the let's encrypt certificate. In other cases, please check whether the certificate of the corresponding website has expired.

let's encrypt于2021年9月30日根证书过期并切换到新版根证书。详情参考：[DST Root CA X3 Expiration (September 2021)](https://letsencrypt.org/docs/dst-root-ca-x3-expiration-september-2021/)。此次过期行为引起nodejs8请求使用了let's encrypt证书的网站时出现`certificate has expired`错误。
Let's encrypt's root certificate expired on September 30, 2021 and switched to a new version of the root certificate. For details, refer to: [DST Root CA X3 Expiration (September 2021)](https://letsencrypt.org/docs/dst-root-ca-x3-expiration-september-2021/). This expired behavior caused a `certificate has expired` error when nodejs8 requested a website that uses a let's encrypt certificate.

解决方案有以下两种：
There are two solutions:

1. 将云函数升级到nodejs12，删除旧云函数，配置node版本之后重新上传。详情参考：[云函数package.json](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=packagejson)
1. Upgrade the cloud function to nodejs12, delete the old cloud function, configure the node version and upload it again. For details, please refer to: [Cloud Functions package.json](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=packagejson)

2. （不推荐）使用`uniCloud.httpclient.request`时传入`rejectUnauthorized: false`。示例代码如下：
2. (Not recommended) Pass `rejectUnauthorized: false` when using `uniCloud.httpclient.request`. The sample code is as follows:

  ```js
  await uniCloud.httpclient.request('https://xxx.com/get', {
  	rejectUnauthorized: false
  })
  ```

### 调用云函数时出现“Unauthenticated access is denied”@access-denied
### "Unauthenticated access is denied" when calling cloud functions @access-denied

如使用腾讯云作为服务商，出现此问题时请检查前端是否有执行clearStorage操作。clearStorage会清理掉腾讯云设置的token，导致请求云函数报错。
If Tencent Cloud is used as the service provider, please check whether the front-end clearStorage operation is performed when this problem occurs. clearStorage will clear the token set by Tencent Cloud, resulting in an error when requesting cloud functions.

### 阿里云存储在部分地区、运营商无法访问的问题
### Alibaba Cloud storage in some regions, the operator can not access the problem

阿里云云存储目前没有服务空间级别的域名隔离，因此在有服务空间的云存储因为违法、违规被封禁域名时会影响其他服务空间。阿里云提供了一个备用CDN域名`vkceyugu-backup.cdn.bspapp.com`，替换原CDN域名`vkceyugu.cdn.bspapp.com`
Alibaba Cloud Cloud Storage currently does not have domain name isolation at the service space level. Therefore, when a cloud storage with a service space is blocked due to illegal or illegal domain names, other service spaces will be affected. Alibaba Cloud provides a backup CDN domain name `vkceyugu-backup.cdn.bspapp.com` to replace the original CDN domain name `vkceyugu.cdn.bspapp.com`