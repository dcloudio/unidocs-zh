### uniCloud和微信小程序云开发、支付宝小程序云开发有何区别？
### What is the difference between uniCloud and WeChat MiniApp cloud development and Alipay MiniApp cloud development?

微信、支付宝、百度的小程序，均提供了云开发。但它们都仅支持自家小程序，无法在其他端使用。
WeChat, Alipay, and Baidu's MiniApp all provide cloud development. But they only support their own MiniApp and cannot be used on other terminals.

`uniCloud`和微信小程序云开发、支付宝小程序云开发使用相同的基础建设平台，微信小程序云开发背后是腾讯云的TCB团队，支付宝小程序云开发背后是阿里小程序云团队。`uniCloud`是DCloud和阿里小程序云团队、腾讯云的TCB团队直接展开深层次合作，在他们底层资源的基础上进行二次封装，提供的跨端云开发方案。
`uniCloud` uses the same infrastructure platform as WeChat MiniApp MiniApp Development and Alipay MiniApp Program Cloud Development. Behind WeChat Mini Program Cloud Development is the TCB team of Tencent Cloud, and behind Alipay MiniApp Cloud Development is the Alibaba Mini MiniApp Cloud Team. `uniCloud` is a cross-device cloud development solution provided by DCloud, Alibaba MiniApp Cloud team, and Tencent Cloud's TCB team, who directly carry out in-depth cooperation and perform secondary packaging on the basis of their underlying resources.

简单来说，uniCloud和微信小程序云开发、支付宝小程序云开发一样稳定健壮，但有更多优势：
In short, uniCloud is as stable and robust as WeChat MiniApp Cloud Development and Alipay MiniApp Cloud Development, but has more advantages:
- 跨平台。不管你在uniCloud里选择了阿里还是腾讯的serverless，均可以跨uni-app的全端使用。从pc到h5，从Android到iOS，以及各家小程序快应用，十几个平台全端支持
- Cross-platform. Regardless of whether you choose Ali or Tencent's serverless in uniCloud, you can use it across the entire uni-app. From pc to h5, from Android to iOS, and various MiniApp and QuickApp, more than a dozen platforms are fully supported
- uniCloud提供了`clientDB`神器，减少90%的服务器开发工作量，且保障数据安全。[详见](/uniCloud/database)
- uniCloud provides the `clientDB` artifact, which reduces 90% of the server development workload and ensures data security. [See details](/uniCloud/database)
- uniCloud提供了[uni-id](uni-id-summary.md)、[uniPay](/uniCloud/unipay)等重要框架，大幅减少开发者的相应功能开发量。
- uniCloud provides important frameworks such as [uni-id](uni-id-summary.md), [uniPay](/uniCloud/unipay), which greatly reduces the amount of corresponding function development for developers.
- uniCloud提供了[uni-starter](https://ext.dcloud.net.cn/plugin?id=5057)，客户端开发工作量大幅减少。
- uniCloud provides [uni-starter](https://ext.dcloud.net.cn/plugin?id=5057), which greatly reduces the workload of client development.
- uniCloud提供了[uniCloud admin](/uniCloud/admin)，管理端开发工作量大幅减少。
- uniCloud provides [uniCloud admin](/uniCloud/admin), which greatly reduces the development workload on the management side.
- uniCloud提供了[schema2code](schema2code.md)，只需编制数据库schema文件，用户端和管理端的数据列表、分页、搜索、详情查看、修改、删除，全套代码均能自动生成。
- uniCloud provides [schema2code](schema2code.md). You only need to compile the database schema file, and the data list, pagination, search, details view, modification, and deletion on the client side and management side can automatically generate a complete set of codes.
- 更易学。uniCloud提供了`JQL`查询语言，比SQL和MongoDB的查询语法更简单易掌握，尤其是联表查询非常简单。[详见](https://uniapp.dcloud.io/uniCloud/database?id=jsquery)
- Easier to learn. uniCloud provides `JQL` query language, which is simpler and easier to master than the query syntax of SQL and MongoDB, especially the join table query is very simple. [See details](https://uniapp.dcloud.io/uniCloud/database?id=jsquery)
- 更完善的工具链。前端uni-app、云端uniCloud、还有ide端的HBuilderX，互相紧密搭配，打造闭环的优秀开发体验
- Improved toolchain. Front-end uni-app, cloud uniCloud, and ide-side HBuilderX are closely matched with each other to create an excellent closed-loop development experience
- 更丰富的生态。插件市场有大量现成的轮子和资源 [详见](https://ext.dcloud.net.cn/?cat1=7&orderBy=TotalDownload)
- Richer ecology. There are a lot of ready-made wheels and resources in the plug-in market [see details](https://ext.dcloud.net.cn/?cat1=7&orderBy=TotalDownload)

如果你已经使用过微信小程序云开发，想进一步了解对比差异或如何从微信小程序云迁移到uniCloud，[详见](uniCloud/wx2unicloud.md)
If you have used WeChat MiniApp cloud development and want to learn more about the comparison and differences or how to migrate from WeChat MiniApp cloud to uniCloud, [see](uniCloud/wx2unicloud.md)

### uniCloud稳定吗？DCloud服务器异常会影响我的线上业务吗？
### Is uniCloud stable? Will DCloud server abnormality affect my online business?

`uniCloud`是 DCloud 和阿里云、腾讯云等成熟云厂商合作推出的云服务产品，阿里云、腾讯云等提供云端基础资源，DCloud提供API设计、前端框架、IDE工具支持、管理控制台、插件生态等服务，开发者的云函数直接托管在阿里云等服务商的serverless平台。
`uniCloud` is a cloud service product jointly launched by DCloud and mature cloud vendors such as Alibaba Cloud and Tencent Cloud. Alibaba Cloud and Tencent Cloud provide basic cloud resources, and DCloud provides API design, front-end framework, IDE tool support, management console, and plug-ins For services such as ecology, developers' cloud functions are directly hosted on the serverless platforms of service providers such as Alibaba Cloud.

用户终端上的应用在运行时，直连云服务商serverless平台，不会经过DCloud服务器，开发者无需担心因DCloud服务器负载而影响自己业务的问题。
When the application on the user terminal is running, it is directly connected to the serverless platform of the cloud service provider without going through the DCloud server. Developers do not need to worry about the problem of affecting their business due to the load of the DCloud server.

阿里云和腾讯云都有商业级SLA。如果真出问题，他们会负责赔偿。

### 云函数 和 传统 Node.js 开发有何区别？
### What is the difference between Cloud Functions and traditional Node.js development?

云函数相当于 Node.js + Serverless + DCloud改进。
Cloud Functions is equivalent to Node.js + Serverless + DCloud improvements.
- 传统Node.js开发需要购买服务器，安装Node.js环境，部署 pm2 等守护进程；云函数无需考虑服务器环境，只需专心实现业务代码，然后将云函数一键上传，云服务商负责云函数运行环境的准备。
- Traditional Node.js development needs to purchase a server, install the Node.js environment, and deploy pm2 and other daemon processes; cloud functions do not need to consider the server environment, only need to concentrate on implementing business code, and then upload the cloud function with one click, and the cloud service provider is responsible for the cloud Preparation of the function execution environment.
- 传统Node.js开发模式，开发者需监控服务器参数，比如硬盘使用率，避免服务器负载过高导致业务中断；云函数模式下，开发者无需关心云函数运行的宿主环境，云厂商会实现服务调配及硬件监控。
- In the traditional Node.js development mode, developers need to monitor server parameters, such as hard disk usage, to avoid business interruption caused by excessive server load; in the cloud function mode, developers do not need to care about the host environment where the cloud function runs, and the cloud vendor will implement the service Provisioning and hardware monitoring.
- 用户量较大时，传统Node.js开发需考虑购买更多服务器并实现负载均衡；云函数模式下，云服务商自动弹性扩容，开发者无需担心服务器扛不住压力。
- When the number of users is large, traditional Node.js development needs to consider purchasing more servers and achieving load balancing; in the cloud function mode, the cloud service provider automatically expands elastically, and developers do not need to worry about the server being unable to bear the pressure.
- 传统Node.js开发模式，需考虑安全防护，比如DDos攻击；云函数模式，云厂商的API网关会做拦截防护，开发者无需关心，并可节省高防IP等费用
- In the traditional Node.js development mode, security protection needs to be considered, such as DDos attacks; in the cloud function mode, the API gateway of the cloud vendor will do interception protection, developers do not need to care, and can save high-defense IP and other costs

总结一下，前端同学即便可熟练编写Node.js代码，但对于DB优化、弹性扩容、攻击防护、灾备处理等方面还是有经验欠缺的，但`uniCloud`将这些都封装好了，真正做到仅专注业务实现，其它都委托云厂商服务。
To sum up, even if the front-end students can write Node.js code proficiently, they still lack experience in DB optimization, elastic expansion, attack protection, disaster recovery processing, etc., but `uniCloud` encapsulates these and truly achieves Only focus on business implementation, and entrust cloud vendors with other services.

另外，在 Node.js 代码实现上，云函数每次执行的宿主环境（可简单理解为虚拟机或服务器硬件）可能相同，也可能不同，因此传统`Node.js`开发中将部分信息存储本地硬盘或内存的方案就不再适合，建议通过云数据库或云存储的方案替代。
In addition, in terms of Node.js code implementation, the host environment (which can be simply understood as a virtual machine or server hardware) for each execution of a cloud function may be the same or different. Therefore, in traditional `Node.js` development, some information is stored locally Hard disk or memory solutions are no longer suitable, and it is recommended to use cloud database or cloud storage solutions instead.

当然还有最重要的一点，在uniCloud中，推荐大量业务使用clientDB，一个应用中写不了太多云函数。
Of course, there is the most important point. In uniCloud, it is recommended to use clientDB for a large number of businesses. Too many cloud functions cannot be written in one application.

### uniCloud只支持uni-app，怎么开发web界面？
### uniCloud only supports uni-app, how to develop web interface?

uni-app可以开发web界面，详见：[uni-app宽屏适配指南](https://uniapp.dcloud.io/adapt)
uni-app can develop web interface, see: [uni-app widescreen adaptation guide](https://uniapp.dcloud.io/adapt)

如果是需要pc版admin的话，uniCloud提供了[uniCloud admin](https://uniapp.dcloud.io/uniCloud/admin)
If you need admin for PC, uniCloud provides [uniCloud admin](https://uniapp.dcloud.io/uniCloud/admin)

### 可否通过http url方式访问云函数或云数据库？
### Can I access cloud functions or cloud databases through http url?

- 场景1：比如App端微信支付，需要配服务器回调地址，此时需要一个HTTP URL。
- Scenario 1: For example, WeChat payment on the app side needs to be configured with a server callback address. In this case, an HTTP URL is required.
- 场景2：非uni-app开发的系统，想要连接uniCloud，读取数据，也需要通过HTTP URL方式访问。
- Scenario 2: For a system not developed by uni-app, if you want to connect to uniCloud and read data, you also need to access it through HTTP URL.

uniCloud提供了`云函数URL化`，来满足上述需求。[详见](https://uniapp.dcloud.io/uniCloud/http)
uniCloud provides `cloud function URLization` to meet the above requirements. [See details](https://uniapp.dcloud.io/uniCloud/http)

### 微信云开发支持客户端直接操作数据库，uniCloud支持吗？
### WeChat cloud development supports the client to directly operate the database, does uniCloud support it?

uniCloud提供了比微信云开发更优秀的前端操作数据库方案，见：[clientDB](clientdb.md)
uniCloud provides a better front-end operation database solution than WeChat cloud development, see: [clientDB](clientdb.md)

### 云开发是nodejs+改良版MongoDB组合，对比php+mysql的传统组合怎么样？
### Cloud development is a combination of nodejs+improved version of MongoDB. How does it compare to the traditional combination of php+mysql?

nodejs的性能优于php，MongoDB的性能也优于mysql。
The performance of nodejs is better than php, and the performance of MongoDB is better than mysql.

对于前端而言，MongoDB这种类json的文档数据库更加易用，且有更高的灵活性。
For the front end, a json-like document database such as MongoDB is easier to use and has higher flexibility.
操作MongoDB仍然使用js的方法。
The method of operating MongoDB still uses js.

MongoDB非常灵活，可以对大数据量的表随便增加字段。而mysql的表数据量一旦变大，每增加一个字段，数据库的体积和性能都会造成负面影响。
MongoDB is very flexible and can add fields to tables with large amounts of data at will. However, once the amount of data in mysql table becomes large, every time a field is added, the size and performance of the database will be negatively affected.

MongoDB的字段可以嵌套，表达tree型的数据非常方便，扩展起来随心所欲。
The fields of MongoDB can be nested, and it is very convenient to express tree-type data, and it can be expanded as you like.

对于希望增加数据冗余以提高性能的开发者而言，nosql数据库则是利器。
For developers who want to increase data redundancy to improve performance, nosql databases are a powerful tool.

当然，对于喜欢传统数据库的开发者而言，仍然可以按传统方式设计数据库表结构。
Of course, for developers who prefer traditional databases, the database table structure can still be designed in the traditional way.

MongoDB的功能要比mysql强大很多。sql太简单的了，一段sql语句其实就是一个字符串，写不了复杂的逻辑。
MongoDB is much more powerful than mysql. SQL is too simple. A SQL statement is actually a string, and complex logic cannot be written.

而MongoDB有非常多的js api，各种聚合运算符，它是可编程的，而不是仅靠一段字符串sql语句来表达。
And MongoDB has a lot of js APIs and various aggregation operators, which are programmable, rather than expressed by a string of SQL statements.

举个例子，商品数据表中有4个字段：浏览量、收藏量、购买量、评价。需要生成一个近期热门商品列表，4个字段各占25%的权重，加权后排序。这种需求sql是无法直接实现的。而MongoDB里可以一个查询直接返回排序好的结果。
For example, there are 4 fields in the product data table: views, favorites, purchases, and reviews. It is necessary to generate a list of recent popular products, each of which has a weight of 25% in each of the four fields, and sort them after weighting. This requirement cannot be directly realized by sql. In MongoDB, a query can directly return the sorted results.

SQL的模糊查询也很弱，like只有前后%，导致很多开发者不得不再使用ElastciSearch这些三方数据库。虽然后期版本的mysql也支持有限正则。但MongoDB的正则查询还是超过开发者预期的强大。
The fuzzy query of SQL is also very weak, like only before and after %, so many developers have to use third-party databases such as ElastciSearch. Although later versions of mysql also support limited regularization. But MongoDB's regular query is still more powerful than developers expected.

MongoDB虽然强大，但易用性不佳，尤其是聚合运算写起来非常复杂。
Although MongoDB is powerful, it is not easy to use, especially the aggregation operation is very complicated to write.

uniCloud在MongoDB的基础上改良，进一步提供了`DB Schema`和`JQL`。
uniCloud improves on the basis of MongoDB and further provides `DB Schema` and `JQL`.

`DB Schema`是一个json文件，可以对数据进行描述、约定字段值域、控制操作权限、描述字段之间的关系，让数据库管理更高效，并且大幅降低了服务端的代码开发工作量。[详见](https://uniapp.dcloud.io/uniCloud/schema)
`DB Schema` is a json file that can describe data, agree on field value ranges, control operation permissions, and describe the relationship between fields, making database management more efficient and greatly reducing the workload of code development on the server side. [See details](https://uniapp.dcloud.io/uniCloud/schema)

`JQL`是一套操作uniCloud数据库的方法，它更符合js开发者的习惯，并且极大的降低了学习成本和代码量。
`JQL` is a set of methods to operate the uniCloud database, which is more in line with the habits of js developers, and greatly reduces the learning cost and code volume.
比如联表查询、tree查询，都变的非常简单。像tree查询是以往只有oracle才有的功能。`JQL`文档[详见](https://uniapp.dcloud.net.cn/uniCloud/database?id=jsquery)
For example, joint table query and tree query have become very simple. Such as tree query is a function that only Oracle has in the past. `JQL` documentation [see details](https://uniapp.dcloud.net.cn/uniCloud/database?id=jsquery)

曾经DCloud官方也推进过阿里云和腾讯云提供serverless的mysql。但经过对MongoDB的深入研究和改良，DCloud已经放弃了难用的mysql。推荐开发者了解uniCloud的云数据库，用起来更强大和方便。
In the past, DCloud officially promoted Alibaba Cloud and Tencent Cloud to provide serverless mysql. However, after in-depth research and improvement of MongoDB, DCloud has given up the difficult-to-use mysql. It is recommended that developers learn about uniCloud's cloud database, which is more powerful and convenient to use.

### 支持websocket吗？
### Does it support websocket?
1. uni-push2.0，全端支持（APP、H5、各端小程序）当应用在线时就是一个免费的websocket服务，详情文档：[https://uniapp.dcloud.io/unipush-v2.html](https://uniapp.dcloud.io/unipush-v2.html)
1. uni-push2.0, full-end support (APP, H5, each end MiniApp) is a free websocket service when the application is online, detailed document: [https://uniapp.dcloud.io/unipush-v2.html](https://uniapp.dcloud.io/unipush-v2.html)
2. 如果是im方面的需求，有DCloud基于uni-push2.0开发的云端一体的、全平台的、免费的、开源即时通讯系统，详情查看：[https://uniapp.dcloud.net.cn/uniCloud/uni-im.html](https://uniapp.dcloud.net.cn/uniCloud/uni-im.html)
2. If it is an IM requirement, there is a cloud-integrated, full-platform, free, open-source instant messaging system developed by DCloud based on uni-push2.0. For details, check: [https://uniapp.dcloud.net.cn /uniCloud/uni-im.html](https://uniapp.dcloud.net.cn/uniCloud/uni-im.html)

### 如何导入老数据库的数据？
### How to import data from old database?
- 方式1：可以在HBuilderX里用db_init.json来批量创建云数据库和插入表内容，[详见](https://uniapp.dcloud.io/uniCloud/cf-database?id=%e4%bd%bf%e7%94%a8db_initjson%e5%88%9d%e5%a7%8b%e5%8c%96%e9%a1%b9%e7%9b%ae%e6%95%b0%e6%8d%ae%e5%ba%93)
- Method 1: You can use db_init.json in HBuilderX to create cloud databases and insert table content in batches, [see details](https://uniapp.dcloud.io/uniCloud/cf-database?id=%e4%bd% bf%e7%94%a8db_initjson%e5%88%9d%e5%a7%8b%e5%8c%96%e9%a1%b9%e7%9b%ae%e6%95%b0%e6%8d%ae% e5%ba%93)
- 方式2：阿里云支持在uniCloud web控制台界面直接导入导出数据
- Method 2: Alibaba Cloud supports direct import and export of data on the uniCloud web console interface
- 方式3：在云函数里，使用nodejs标准写法，连接老数据库，如使用mysql的[插件](https://ext.dcloud.net.cn/plugin?id=1925)，把数据读出来，再批量写入云数据库
- Method 3: In the cloud function, use the nodejs standard writing method to connect to the old database, such as using the mysql [plugin](https://ext.dcloud.net.cn/plugin?id=1925) to read the data, Then write to the cloud database in batches
- 方式4：将一个云函数URL化，用其他语言读取老数据库，通过http方式提交到云函数，云函数将接收到的数据存入云数据库
- Method 4: URLize a cloud function, read the old database in other languages, submit it to the cloud function through http, and the cloud function will store the received data into the cloud database

### 云函数访问时快时慢怎么回事？
### What happens when the cloud function access is fast and sometimes slow?

云函数对应的资源，如果长时间不使用，会被阿里云或腾讯云平台从内存中释放。一旦被释放，启动云函数时会有一个冷启动的过程。
If the resources corresponding to cloud functions are not used for a long time, they will be released from memory by Alibaba Cloud or Tencent Cloud Platform. Once released, there will be a cold start process when starting the cloud function.

表现为：隔了很久不用，第一次用就会比较慢，然后立即访问第二次，则很快，毫秒级响应。
The performance is: after a long time without use, the first use will be slower, and then the second visit immediately will be very fast, with a millisecond response.

冷启动的速度一般不会超过1.5秒，如超过1.5秒应该是云函数写的有问题或网络有问题。
The cold start speed generally does not exceed 1.5 seconds. If it exceeds 1.5 seconds, it should be a problem with the cloud function or the network.

资源回收策略方面，阿里云是15分钟内没有第二次访问的云函数，就会被回收。腾讯云是半小时。
In terms of resource recovery policy, Alibaba Cloud will be recycled if there is no second visit to the cloud function within 15 minutes. Tencent Cloud is half an hour.

两家云厂商仍然在优化这个问题。目前如果开发者在意这个问题，给开发者的建议是：
The two cloud vendors are still optimizing this problem. At present, if developers care about this issue, the suggestions for developers are:
1. 使用clientDB可以减少遇到冷启动问题的概率
1. Using clientDB can reduce the probability of encountering cold start problems
2. 非高频访问的云函数，合并到高频云函数中。有的开发者使用纯单页方式编写云函数，即在一个云函数中通过路由处理实现了整个应用的所有后台逻辑。参考[插件](https://ext.dcloud.net.cn/search?q=%E8%B7%AF%E7%94%B1&cat1=7&orderBy=UpdatedDate)
2. Cloud functions that are not frequently accessed are merged into high-frequency cloud functions. Some developers use a pure single-page method to write cloud functions, that is, implement all the background logic of the entire application through routing processing in one cloud function. Refer to [Plugin](https://ext.dcloud.net.cn/search?q=%E8%B7%AF%E7%94%B1&cat1=7&orderBy=UpdatedDate)
3. 非高频访问的云函数，可以通过定时任务持续运行它（注意腾讯云可以使用这个方式完全避开冷启动，而阿里云的定时任务最短周期大于资源回收周期）
3. For non-frequently accessed cloud functions, you can continue to run them through scheduled tasks (note that Tencent Cloud can use this method to completely avoid cold start, and Alibaba Cloud's scheduled task minimum period is greater than the resource recovery period)
4. 配置云函数的单实例多并发，请参考：[单实例多并发](cf-functions.md#concurrency)
4. To configure the single-instance multi-concurrency of cloud functions, please refer to: [Single-instance multi-concurrency](cf-functions.md#concurrency)

### uniCloud访问速度感觉不如传统服务器？@slow
### uniCloud access speed is not as good as traditional servers? @slow
有开发者在一台单机上安装php或java，连接同电脑的mysql。然后与uniCloud比较速度，认为uniCloud偏慢。这里需要澄清如下差异：
A developer installs php or java on a single computer and connects to mysql on the same computer. Then compare the speed with uniCloud, and think that uniCloud is slow. The following differences need to be clarified here:

- 原因1. 冷启动。具体分析见上一问题
- Cause 1. Cold start. For detailed analysis, see the previous question

- 原因2. 代码和数据库不在一台服务器
- Reason 2. Code and database are not on the same server
在一台单机上安装php或java，同时安装数据库，访问速度确实快。但在使用云数据库时，即数据库是单独的服务器，和运行代码不在一台服务器上时，就会略微造成些延迟。但商业应用的数据库肯定都是独立服务器。
Install php or java on a single machine, and install the database at the same time, the access speed is really fast. But when using a cloud database, that is, the database is a separate server, and the running code is not on the same server, it will cause a slight delay. But the databases for commercial applications must all be independent servers.

- 原因3. 拦截器
- Reason 3. Interceptor
后端开发的请求一般都有路由管理框架或拦截器，每个请求都要拦截，校验权限。使用这类框架肯定会增加耗时。
Requests for back-end development generally have routing management frameworks or interceptors, and each request must be intercepted and permissions verified. Using such frameworks will definitely increase the time consumption.

clientDB就是这种情况，因为clientDB内部有权限校验系统，某些权限的验证还需要数据库查询。
This is the case with clientDB, because clientDB has a permission verification system inside, and the verification of certain permissions also requires database queries.

所以虽然clientDB的速度慢一些，但实际上开发者在自己写了路由拦截和权限管理的框架后，速度也一样会下降。
Therefore, although the speed of clientDB is slower, in fact, after developers write the framework for routing interception and authority management, the speed will also decrease.

从uni-id 3.0起，用户的角色权限缓存在token里，不再查库。clientDB的速度比之前提升了100毫秒左右。如果还未升级，请尽快[升级](https://ext.dcloud.net.cn/plugin?id=2116)。同时注意如果用了uniCloud admin，也要配套升级。如果自己在云函数里编写过相关业务逻辑，请务必阅读升级注意事项。
From uni-id 3.0 onwards, the user's role permissions are cached in the token, and the library is no longer checked. The speed of clientDB is about 100 milliseconds faster than before. If you have not upgraded, please [upgrade](https://ext.dcloud.net.cn/plugin?id=2116) as soon as possible. At the same time, note that if you use uniCloud admin, you must also upgrade it. If you have written relevant business logic in cloud functions, please be sure to read the upgrade notes.

- 原因4. 数据库索引
- Reason 4. Database index

查询表的索引要正确配置，需要在where里查询的字段都建议配上索引，否则查询会很慢。
The index of the query table must be correctly configured. It is recommended to add an index to the fields that need to be queried in where, otherwise the query will be very slow.

但注意索引不能太多，否则增删改数据时又会变慢，精准很重要。推荐详细阅读[索引文档](https://uniapp.dcloud.io/uniCloud/db-index)
But be careful not to have too many indexes, otherwise it will slow down when adding, deleting, and modifying data. Accuracy is very important. It is recommended to read [Index Document](https://uniapp.dcloud.io/uniCloud/db-index) in detail

### 发布H5时还得自己找个服务器部署前端网页，可以不用自己再找服务器吗？
### When releasing H5, you have to find a server to deploy the front-end webpage. Can you not find a server by yourself?

uniCloud支持[前端网页托管](https://uniapp.dcloud.io/uniCloud/hosting)，选择阿里云作为云厂商时完全免费！
uniCloud supports [front-end web hosting](https://uniapp.dcloud.io/uniCloud/hosting), and it is completely free when you choose Alibaba Cloud as a cloud provider!

- 如果你已经有备案过的域名，直接解析过来即可；
- If you already have a registered domain name, just resolve it directly;
- 如果你要新注册域名，备案流程和传统云主机略有不同，涉及一个uniCloud没有固定ip的问题。此时可以去买花生壳的备案服务；也可以临时买一个短期固定ip，走固定ip备案。这里有开发者分享的[经验贴](https://ask.dcloud.net.cn/article/38116)
- If you want to register a new domain name, the filing process is slightly different from traditional cloud hosting, involving a problem that uniCloud does not have a fixed IP. At this time, you can go to buy the filing service of peanut shells; you can also temporarily buy a short-term fixed IP and go through the fixed IP filing. Here are [Experience Posts] shared by developers (https://ask.dcloud.net.cn/article/38116)

如果是因为微信js sdk等服务要求配置固定ip白名单，那么腾讯云收费空间已经支持固定ip，[详见](https://uniapp.dcloud.io/uniCloud/cf-functions?id=eip)
If it is because WeChat js sdk and other services require the configuration of a fixed ip whitelist, then Tencent Cloud’s charging space already supports fixed ip, [see details](https://uniapp.dcloud.io/uniCloud/cf-functions?id=eip)

### uniCloud云数据库如何实现全文检索
### How does the uniCloud cloud database implement full-text search

uniCloud的云数据库本身就是文档型数据库，可以全文检索。
uniCloud's cloud database itself is a document database, which can be searched in full text.

查询数据时可以传入正则表达式。相比sql的like只有前后的%，正则表达式要强大的多。详情请参考[正则表达式查询](https://uniapp.dcloud.io/uniCloud/cf-database?id=regexp)
Regular expressions can be passed in when querying data. Compared with SQL's like, which only has % before and after, regular expressions are much more powerful. For details, please refer to [Regular Expression Query](https://uniapp.dcloud.io/uniCloud/cf-database?id=regexp)

当然如果你需要额外配置ElastciSearch等三方数据库，也可以自己找服务器安装这些服务，同步数据，把需要搜索的数据同步过去。
Of course, if you need to configure additional third-party databases such as ElastciSearch, you can also find a server to install these services yourself, synchronize data, and synchronize the data that needs to be searched.

### uniCloud内如何使用formdata
### How to use formdata in uniCloud

nodejs本身不支持formdata，但是可以通过手动拼装formdata的方式来进行支持，[参考](https://www.npmjs.com/package/form-data)
nodejs itself does not support formdata, but it can be supported by manually assembling formdata, [reference](https://www.npmjs.com/package/form-data)

结合`uniCloud.httpclient.request`使用的示例
Example of using with `uniCloud.httpclient.request`

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
### What are the major cases of Tencent and Ali's serverless?

- 微信小程序云开发，已经有50万开发者，包括腾讯自有的很多大日活应用都构建在腾讯云serverless上，如微信生活缴费、乘车码、微信读书、腾讯新闻、腾讯相册等。
- Wechat MiniApp cloud development, already has 500,000 developers, including many of Tencent's own big daily life applications are built on Tencent Cloud serverless, such as WeChat life payment, ride code, WeChat reading, Tencent news, Tencent photo album, etc.
- 2019年双11，阿里部分业务已经迁移在serverless上。支付宝小程序也提供了云开发功能。
- On Double 11 in 2019, part of Ali's business has been migrated to serverless. The Alipay MiniApp also provides cloud development functions.


### 如何控制云函数数量？云函数是否可以按多级目录整理@merge-functions
### How to control the number of cloud functions? Can cloud functions be sorted by multi-level directories @merge-functions

不需要控制数量，实际开发中不会突破限制。
There is no need to control the quantity, and the limit will not be broken in actual development.

因为实际开发中会使用框架而不是真的一个一个开发云函数。
Because the framework will be used in actual development instead of developing cloud functions one by one.

1. 使用[clientDB](https://uniapp.dcloud.net.cn/uniCloud/clientdb)。这种方式是在前端直接操作数据库，此时一个云函数都不需要写。开发效率远超传统开发模式。包括它配套的action云函数是不占用云函数数量的。
1. Use [clientDB](https://uniapp.dcloud.net.cn/uniCloud/clientdb). This method is to directly operate the database on the front end, and at this time, no cloud function needs to be written. The development efficiency far exceeds the traditional development mode. Including its supporting action cloud function does not occupy the number of cloud functions.
2. 使用[uni-cloud-router单路由云函数框架](https://uniapp.dcloud.net.cn/uniCloud/uni-cloud-router)，这种方式只有一个云函数，所有接口都是这个云函数的不同参数，它有统一的路由管理。
2. Use [uni-cloud-router single-route cloud function framework](https://uniapp.dcloud.net.cn/uniCloud/uni-cloud-router), this method has only one cloud function, and all interfaces are this Different parameters of the cloud function, it has a unified routing management.

以免费空间的48个云函数举例，一般情况下：
Take the 48 cloud functions in free space as an example, in general:
- [uni-id](uni-id-summary.md)会有一个云对象（uni-id-co）或老版的云函数（uni-id-cf），这是必备的一个云函数
- [uni-id](uni-id-summary.md) will have a cloud object (uni-id-co) or an old cloud function (uni-id-cf), which is a necessary cloud function
- 如果使用uni统计、app升级中心、uni发布平台、uniPush2、[uni-search热搜词统计跑批](https://ext.dcloud.net.cn/plugin?id=3851)，这些会自带云函数
- If you use uni statistics, app uni-upgrade-center, uni publishing platform, uniPush2, [uni-search hot search word statistics running batch](https://ext.dcloud.net.cn/plugin?id=3851),these will automatically with cloud function

上述几个是官方推荐的几个常用框架所带的云函数，然后开发者自己的代码里，大多数业务使用clientDB开发，不写云函数，或者写了配套的action云函数也不占用云函数数量；如果还需要自己写一些云函数，再加上uni-cloud-router，用这个单路由云函数搞定剩余需求；另外如果有跑批数据的需求可以再来一个云函数。所以无论如何48个云函数都占不满。
The above are the cloud functions carried by several commonly used frameworks recommended by the government, and in the developer’s own code, most of the business is developed using clientDB, without writing cloud functions, or writing supporting action cloud functions without occupying cloud functions Quantity; if you still need to write some cloud functions yourself, add uni-cloud-router, and use this single-router cloud function to meet the remaining needs; in addition, if you need to run batch data, you can add another cloud function. So in any case, 48 cloud functions are not enough.

uniCloud的每个云函数是一个独立进程，不存在云函数级别的多级目录概念。
Each cloud function of uniCloud is an independent process, and there is no multi-level directory concept at the cloud function level.

每个云函数下可以有子目录，但它们都属于这个云函数的一部分，而不是另一个云函数。
There can be subdirectories under each cloud function, but they all belong to a part of this cloud function, not another cloud function.

单路由云函数框架不止是官方提供的uni-cloud-router，插件市场有很多类似框架：[详见](https://ext.dcloud.net.cn/search?q=%E8%B7%AF%E7%94%B1&cat1=7&orderBy=TotalDownload)
The single-router cloud function framework is not only the official uni-cloud-router, there are many similar frameworks in the plug-in market: [see for details](https://ext.dcloud.net.cn/search?q=%E8%B7%AF %E7%94%B1&cat1=7&orderBy=TotalDownload)


### 港澳台及境外用户访问比较慢怎么办@global-accelerate
### What should I do if the access of users from Hong Kong, Macao, Taiwan and overseas is relatively slow @global-accelerate

港澳台及海外/国外用户需要使用全球加速（海外加速）。uniCloud服务商为阿里云时支持配置全球加速，步骤如下：

1. 参考[阿里云全球加速](https://help.aliyun.com/document_detail/153198.html)文档，开通服务并对`自有域名`进行加速
1. Refer to the [Alibaba Cloud Global Acceleration](https://help.aliyun.com/document_detail/153198.html) document, activate the service and accelerate `own domain name`
2. 将上述域名CNAME到`api.next.bspapp.com`
2. CNAME the above domain name to `api.next.bspapp.com`
3. [自行初始化uniCloud](uniCloud/init.md)传入endpoint参数，其值为开通全球加速的自有域名
3. [Initialize uniCloud by yourself](uniCloud/init.md) pass in the endpoint parameter, whose value is your own domain name for global acceleration

### 腾讯云提示当前实名主体已经有三个账号怎么办@tencent-exceed-account-limit
### What should I do if Tencent Cloud prompts that the current real-name subject already has three accounts @tencent-exceed-account-limit

开通腾讯云服务空间时实名认证提示实名主体已有三个账号，这往往是开发者在微信小程序开发工具里不小心开通了多个免费的小程序云，此时可以参考以下流程注销不用的账号：
When opening Tencent Cloud service space, the real-name authentication prompts that the real-name subject already has three accounts. This is often because the developer has accidentally opened multiple free MiniApp clouds in the WeChat MiniApp development tool. At this time, you can refer to the following process to cancel the unused accounts. :

1. 打开[腾讯云找回账号](https://cloud.tencent.com/services/forgotAccount)页面
1. Open the [Tencent Cloud Forgot Account](https://cloud.tencent.com/services/forgotAccount) page
2. 选择找回账号方式为实名信息
2. Select the method of retrieving the account as real-name information
3. 操作完成之后可以看到自己实名信息对应的全部腾讯云账号
3. After the operation is completed, you can see all Tencent Cloud accounts corresponding to your real name information
4. 选择不使用的账号登录之后注销即可，参考文档：[注销腾讯云账号](https://cloud.tencent.com/document/product/378/30253)
4. Choose an unused account to log in and log out. Refer to the document: [Cancel Tencent Cloud Account](https://cloud.tencent.com/document/product/378/30253)

同时，如果付费购买腾讯云服务空间，每个账号可以最多拥有50个腾讯云服务空间（注意其中仅有一个享受免费额度）。
At the same time, if you pay to purchase Tencent Cloud service space, each account can have a maximum of 50 Tencent Cloud service spaces (note that only one of them enjoys a free quota).

### 高并发下简单的防止超卖
### Simple way to prevent oversold under high concurrency

> uniCloud阿里云现已支持redis，开通并使用redis请参考:[redis开通和使用](uniCloud/redis.md)，如何使用redis防止超卖请参考：[redis高并发抢购](uniCloud/redis.md?id=snap-over-sell)（推荐使用）。如下方式针对无redis场景比较不灵活（不推荐使用）
> uniCloud Alibaba Cloud now supports redis. To enable and use redis, please refer to: [Redis activation and use](uniCloud/redis.md). md?id=snap-over-sell) (recommended). The following method is not flexible for scenarios without redis (not recommended)

高并发时很多用户同时对一条数据读写，很容易造成数据混乱，表现在秒杀抢购等场景就是超卖。以秒杀为例，开发者可以从扣除库存这步入手对超卖进行很大程度的限制，下面是一个简单的示例（**注意以下代码未使用事务**）
When the concurrency is high, many users read and write a piece of data at the same time, which can easily cause data confusion, which is manifested in scenarios such as flash sales and panic buying, which are oversold. Taking seckill as an example, developers can start from deducting inventory to greatly limit overselling. The following is a simple example (**note that the following code does not use transactions**)

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
  // Inventory minus one
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
### Cloud storage, database has not been used a few times

关于云存储：这里的读写次数，并不一定是针对文件的：包括：上传文件、修改Policy、修改ACL、修改CORS 等操作，都会被认为是COS写。环境初始化时也会执行很多次初始化操作，写入 policy/acl/cors 等配置信息。用户每次操作 修改安全域名、修改静态域名等，也会触发 CORS 的写入。
About cloud storage: The number of reads and writes here is not necessarily for files: including: uploading files, modifying policies, modifying ACLs, modifying CORS, etc., will be considered as COS writes. When the environment is initialized, many initialization operations will be performed, and configuration information such as policy/acl/cors will be written. Every time the user operates to modify the security domain name, modify the static domain name, etc., it will also trigger the writing of CORS.

关于数据库：开发者通过uniCloud web控制台访问数据库也会增加少量读写次数
About the database: Developers accessing the database through the uniCloud web console will also increase a small number of reads and writes

### 部署网站到前端网页托管报“The requested file was not found on this server.”
### Deploy the website to the front-end web hosting and report "The requested file was not found on this server."

- 部署history模式的uni-app项目时，如果未修改前端网页托管的配置，直接访问子页面时就会遇到上面的错误。如何配置请参考[部署uni-app项目](uniCloud/hosting.md?id=host-uni-app)
- When deploying the uni-app project in history mode, if the configuration of the front-end web page hosting is not modified, the above error will be encountered when directly accessing the sub-page. For how to configure, please refer to [Deploy uni-app project](uniCloud/hosting.md?id=host-uni-app)

### 使用腾讯云报未登录Cloudbase
### Use Tencent Cloud Report without logging into Cloudbase

腾讯云会在本地storage存储一些信息，请不要在应用使用过程中使用clearStorage等接口直接删除storage。
Tencent Cloud will store some information in the local storage, please do not use interfaces such as clearStorage to directly delete the storage during application use.

### 阿里云前端网页托管域名报错指引@ali-hosting-domain
### Alibaba Cloud front-end web hosting domain name error guide@ali-hosting-domain

1. 错误信息：`该域名已经被添加过，不能重复添加`
1. Error message: `This domain name has already been added and cannot be added again`

  前端网页托管会和阿里云上其他的CDN业务（包括但不限于CDN）冲突，如需绑定到前端网页托管请先将此域名与其他业务解除关联。
  Front-end web hosting will conflict with other CDN services on Alibaba Cloud (including but not limited to CDN). If you want to bind to front-end web hosting, please first disassociate this domain name from other services.
  
2. 错误信息：`The root domain of your domain is reserved by another account`
2. Error message: `The root domain of your domain is reserved by another account`

  当前域名有在阿里云开通全站加速相关业务（可能配置了泛域名加速），与前端网页托管冲突。可以考虑使用三级域名或去除泛域名加速改为单独配置需要加速的域名。
  Currently, the domain name has services related to site-wide acceleration enabled on Alibaba Cloud (the pan-domain name acceleration may be configured), which conflicts with the front-end web page hosting. You can consider using a third-level domain name or removing the pan-domain name for acceleration and instead configuring the domain name that needs to be accelerated separately.

### 授权其他用户访问服务空间@collaborator
### Authorize other users to access the service space @collaborator

详见文档：[服务空间的多人协作](/uniCloud/concepts/space?id=collaboration)
For details, please refer to the document: [Multiplayer Collaboration in Service Space](/uniCloud/concepts/space?id=collaboration)

### 如何使用promise/async/await@promise
### How to use promise/async/await@promise

uniCloud客户端callFunction及数据库相关接口会返回Promise类型结果，请参考以下写法使用：
The uniCloud client callFunction and database-related interfaces will return Promise-type results, please refer to the following writing method:

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
### How to judge the fault point when a fault occurs@fault

当你的系统出问题时，如何判断是DCloud还是阿里云或腾讯云的问题？
When there is a problem with your system, how to judge whether it is DCloud or Alibaba Cloud or Tencent Cloud?

首先再次声明，DCloud的服务仅限于开发阶段。发行部署后，应用的访问不经过DCloud的服务器。
First of all, it is stated again that DCloud's services are limited to the development stage. After release and deployment, the access of the application does not go through the DCloud server.

1. 通过域名判断故障点
1. Judging the fault point by domain name
- unicloud.dcloud.net.cn，属于DCloud，这个网站是开发期间使用的，你的应用上线运行时，不经过DCloud服务器。
- unicloud.dcloud.net.cn belongs to DCloud. This website is used during development. When your application goes online, it does not go through the DCloud server.
	如果该域名可以访问，但是在该域名下操作连接阿里云或腾讯云的数据出现问题，那么也是阿里云或腾讯云出了问题。
	If the domain name can be accessed, but there is a problem with the data connected to Alibaba Cloud or Tencent Cloud under this domain name, then there is also a problem with Alibaba Cloud or Tencent Cloud.
- bspapp.com，属于阿里云。如果该域名访问报错，说明阿里云serverless出故障了。
- bspapp.com, which belongs to Alibaba Cloud. If an error is reported when accessing the domain name, it means that Alibaba Cloud serverless is faulty.
- tencentcloudapi.com，属于腾讯云。如果该域名访问报错，说明腾讯云serverless出故障了。
- tencentcloudapi.com, belonging to Tencent Cloud. If the domain name access error is reported, it means that the Tencent Cloud serverless has failed.

当然还有一种情况报错，其实是客户端的问题，包括浏览器的跨域问题，或者小程序的域名白名单问题，导致客户端无法连接uniCloud。这需要通过配置来解决，参考文档：[小程序和浏览器的域名访问配置](https://uniapp.dcloud.io/uniCloud/quickstart?id=useinmp)
Of course, there is another situation where an error is reported. In fact, it is a problem with the client, including the cross-domain problem of the browser, or the whitelist problem of the domain name of the MiniApp, which makes the client unable to connect to uniCloud. This needs to be solved through configuration, refer to the document: [Domain name access configuration for MiniApp and browsers](https://uniapp.dcloud.io/uniCloud/quickstart?id=useinmp)

2. 通过测试系统判断故障点
2. Determine the fault point through the test system
- [hello uniCloud 阿里云版](https://hellounicloud.dcloud.net.cn/#/)
- [hello uniCloud Alibaba Cloud Edition](https://hellounicloud.dcloud.net.cn/#/)
- [hello uniCloud 腾讯云版](https://hellounicloud.dcloud.net.cn/tcb/#/)
- [hello uniCloud Tencent Cloud Edition](https://hellounicloud.dcloud.net.cn/tcb/#/)

如果测试系统不正常，那就说明这家云厂商的服务出故障了。
If the test system is abnormal, it means that the cloud vendor's service is out of order.

这2个系统是完全独立的，如果两个系统都故障了，那就是2家云厂商都故障了，而不是DCloud服务故障了。再次声明，发布后的服务，不连接DCloud的服务器。
These two systems are completely independent. If both systems fail, it means that both cloud vendors fail, not the DCloud service. Again, the published service does not connect to DCloud's server.

当遇到uniCloud故障时，在uniCloud的QQ群或论坛里反馈即可。因为阿里云、腾讯云其实都有拨测系统，他们也会及时知道故障并解决的。
When encountering uniCloud faults, just give feedback in the QQ group or forum of uniCloud. Because Alibaba Cloud and Tencent Cloud actually have a dial-up testing system, they will know the fault and solve it in time.

### 常见错误@freq-error
### Common errors @freq-error

**`operation exceeded time limit`、`云数据库执行时间超限`错误**
** `operation exceeded time limit`, `cloud database execution time exceeded` error**

此错误一般由数据库操作超时引发，具体如何优化请参考：[性能优化](https://uniapp.dcloud.io/uniCloud/db-performance)
This error is generally caused by database operation timeout. For details on how to optimize it, please refer to: [Performance Optimization](https://uniapp.dcloud.io/uniCloud/db-performance)

**使用事务时出现`WriteConflict`错误**
**`WriteConflict` error when using transactions**

事务的执行会锁行，同时执行的不同事务在操作同一行数据是会存在冲突导致写入失败。尽量优化流程，避免事务互相冲突
The execution of the transaction will lock the row, and different transactions executed at the same time will conflict when operating the same row of data, resulting in write failure. Optimize the process as much as possible to avoid transaction conflicts

**长时间未使用的服务空间再次访问时报错**
** An error will be reported when the service space that has not been used for a long time is accessed again **

可能出现的错误信息有：`请求云函数超时`、`Response timeout for 10000ms, POST https://api.next.bspapp.com/server -1`
Possible error messages include: `Request cloud function timeout`, `Response timeout for 10000ms, POST https://api.next.bspapp.com/server -1`

此问题一般是数据库长时间未访问，mongoDB WiredTiger存储引擎在内存中淘汰了表和索引，导致数据库请求超时引发云函数报错。
This problem is generally caused by the fact that the database has not been accessed for a long time, and the mongoDB WiredTiger storage engine eliminated tables and indexes in memory, causing the database request to time out and causing the cloud function to report an error.

**腾讯云报`SIGN_PARAM_INVALID signature is expired`**错误
**Tencent Cloud reported `SIGN_PARAM_INVALID signature is expired`** error

此问题一般出现在腾讯云云函数本地调试时，一般由当前开发用机器系统时间错误引起
This problem usually occurs when the Tencent Cloud function is debugged locally, and it is usually caused by the wrong system time of the current development machine

**腾讯云报`access token disabled for ANONYMOUS login`错误**
**Tencent Cloud reports `access token disabled for ANONYMOUS login` error**

服务空间从来没有上传过云函数，上传一个云函数即可
The service space has never uploaded a cloud function, just upload a cloud function

### 云函数通过https访问其他服务器时出现“certificate has expired”@lets-encrypt-cert
### "certificate has expired" appears when the cloud function accesses other servers through https @lets-encrypt-cert

> 本章节仅对let's encrypt证书调整进行说明，其他情况请检查对应网站证书是否过期
> This chapter only explains the adjustment of the let's encrypt certificate. In other cases, please check whether the certificate of the corresponding website has expired

let's encrypt于2021年9月30日根证书过期并切换到新版根证书。详情参考：[DST Root CA X3 Expiration (September 2021)](https://letsencrypt.org/docs/dst-root-ca-x3-expiration-september-2021/)。此次过期行为引起nodejs8请求使用了let's encrypt证书的网站时出现`certificate has expired`错误。
The root certificate of let's encrypt expires on September 30, 2021 and switches to a new version of the root certificate. For details, please refer to: [DST Root CA X3 Expiration (September 2021)](https://letsencrypt.org/docs/dst-root-ca-x3-expiration-september-2021/). This expiration behavior caused a `certificate has expired` error when nodejs8 requested a website using a let's encrypt certificate.

解决方案有以下两种：
There are two solutions:

1. 将云函数升级到nodejs12，删除旧云函数，配置node版本之后重新上传。详情参考：[云函数package.json](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=packagejson)
1. Upgrade the cloud function to nodejs12, delete the old cloud function, and re-upload after configuring the node version. For details, refer to: [cloud function package.json](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=packagejson)

2. （不推荐）使用`uniCloud.httpclient.request`时使用`rejectUnauthorized: false`。示例代码如下：
2. (Not recommended) Use `rejectUnauthorized: false` when using `uniCloud.httpclient.request`. The sample code is as follows:

  ```js
  const https = require('https')
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false
  })
  await uniCloud.httpclient.request('https://xxx.com/get', {
  	httpsAgent
  })
  ```

### 调用云函数时出现“Unauthenticated access is denied”@access-denied
### "Unauthenticated access is denied" appears when calling cloud functions @access-denied

如使用腾讯云作为服务商，出现此问题时请检查前端是否有执行clearStorage操作。clearStorage会清理掉腾讯云设置的token，导致请求云函数报错。
If Tencent Cloud is used as the service provider, please check whether the clearStorage operation has been executed on the front end when this problem occurs. clearStorage will clear the token set by Tencent Cloud, resulting in an error when requesting cloud functions.

### 阿里云存储在部分地区、运营商无法访问的问题
### Alibaba cloud storage is in some areas, and the operator cannot access the problem

阿里云云存储目前没有服务空间级别的域名隔离，因此在有服务空间的云存储因为违法、违规被封禁域名时会影响其他服务空间。阿里云提供了一个备用CDN域名`vkceyugu-backup.cdn.bspapp.com`，替换原CDN域名`vkceyugu.cdn.bspapp.com`。有一定业务量的用户可以在uniCloud web控制台云存储界面申请独立cdn域名。
Alibaba Cloud Cloud Storage currently does not have domain name isolation at the service space level, so when a cloud storage with service space is blocked for domain names due to violations of laws and regulations, other service spaces will be affected. Alibaba Cloud provides an alternate CDN domain name `vkceyugu-backup.cdn.bspapp.com` to replace the original CDN domain name `vkceyugu.cdn.bspapp.com`. Users with a certain amount of business can apply for an independent CDN domain name on the cloud storage interface of the uniCloud web console.

### 等级保护认证
### Level Protection Authentication

如需云厂商提供等级保护证书，请发送邮件到service@dcloud.io申请，邮件模板参考：[申请解除限制邮件模板](price.md#apply-email-template)

### 使用uniCloud.init初始化阿里云正式版服务空间报“InvalidSpaceId.NotFound”
### Use uniCloud.init to initialize the Alibaba Cloud official version service space and report "InvalidSpaceId.NotFound"

商用版如果使用uniCloud.init需要自行传递endpoint参数，参考：[uniCloud.init](concepts/space.md#multi-space)

### 使用阿里云访问云函数时出现“unknow system error”

检查云函数运行时间是否超出配置的超时时间，优化代码逻辑或配置更长的超时时间
