# openDB

数据库设计，是数字经济的基础，是重要的软基建。
Database design is the foundation of the digital economy and an important soft infrastructure.

`openDB`，是一套开放的数据表设计规范，包括了表名、字段等schema定义以及初始数据。
`openDB` is a set of open data table design specifications, including schema definitions such as table names, fields, and initial data.

以用户表为例，它约定了一个标准用户表的表名和字段定义，并且基于`nosql`的特性，可以由开发者自行扩展字段。
Taking the user table as an example, it stipulates the table name and field definition of a standard user table, and based on the characteristics of `nosql`, the fields can be extended by developers themselves.

`openDB`是[uniCloud](https://uniapp.dcloud.io/uniCloud/)的重要软基建，支撑uniCloud数字生态的发展。
`openDB` is an important soft infrastructure of [uniCloud](https://uniapp.dcloud.io/uniCloud/), supporting the development of the uniCloud digital ecosystem.

## 需求背景
## Requirements background
- 传统开发中，数据库设计是 `php/java`等后端工程师的工作范畴；而大多前端工程师并不熟悉数据库设计，在使用 `uniCloud`开发项目时，很多前端工程师希望有成熟的数据库模板，避免走弯路
- In traditional development, database design is the work of back-end engineers such as `php/java`; however, most front-end engineers are not familiar with database design. When using `uniCloud` to develop projects, many front-end engineers hope to have mature database templates. avoid detours
- 有利于产业分工。业务开发、统计分析、智能推荐、数据转换等都是不同的专业角色，大多数开发者仅善于业务开发，需要专业的数据服务商为其提供服务，如果数据库标准统一，各个角色就可以在插件市场各自提供插件。
- Conducive to industrial division of labor. Business development, statistical analysis, intelligent recommendation, data conversion, etc. are all different professional roles. Most developers are only good at business development and need professional data service providers to provide services for them. If the database standards are unified, each role can be used in the plug-in. The marketplaces each offer plugins.
  * 比如有专业数据服务商，基于openDB中电商规范，提供“猜你喜欢”插件，就可以被轻松的引入到开发者的应用中；
  * For example, there are professional data service providers that provide "guess what you like" plug-ins based on e-commerce specifications in openDB, which can be easily introduced into developers' applications;
  * 比如有专业的数据导入导出插件，可以方便的从ecshop等系统中迁移历史数据；
  * For example, there are professional data import and export plug-ins, which can easily migrate historical data from ecshop and other systems;
  * 比如有专业的cms后台厂商，基于openDB中新闻规范，提供更好的新闻编辑工具。
  * For example, there are professional cms background manufacturers, based on the news specification in openDB, to provide better news editing tools.
- 统一的数据库标准，有利于开发者择优切换插件。有利于插件生态的繁荣，并最终通过吸引更多用户做大蛋糕来反哺插件作者。
- A unified database standard is helpful for developers to switch plug-ins according to their preferences. It is conducive to the prosperity of the plug-in ecology, and finally feeds back the plug-in authors by attracting more users to make a bigger cake.
  * 比如有多个新闻应用模板，均基于openDB中的新闻规范，那么开发者可以方便的切换到做的更好的插件上。
  * For example, there are multiple news application templates, all based on the news specification in openDB, so developers can easily switch to better plug-ins.
- 数据孤岛问题。当多个应用之间的数据库规范相同，他们之间的跨应用数据交换就变的更容易。未来uniCloud会提供更方便的跨应用数据交换机制。
- Data silos problem. When multiple applications have the same database specification, the cross-application data exchange between them becomes easier. In the future, uniCloud will provide a more convenient cross-application data exchange mechanism.
- 统一的初始数据。比如地区表等数据，在openDB中有初始化数据，开发者们共享一个相同数据源即可。
- Unified initial data. For example, data such as regional tables, there is initialized data in openDB, and developers can share the same data source.

[uni-id](uni-id-summary.md)的账户统一，是`openDB`的成功实践。基于uni-id规范，有电商插件、有IM插件、有PC管理插件，开发者可以方便的把这些插件整合到自己的同一应用中。
The unified account of [uni-id](uni-id-summary.md) is a successful practice of `openDB`. Based on the uni-id specification, there are e-commerce plug-ins, IM plug-ins, and PC management plug-ins. Developers can easily integrate these plug-ins into their own same application.


## openDB中的已有规范
## Existing specifications in openDB

目前`openDB`已经支持几十张表。可以在[https://gitee.com/dcloud/opendb/tree/master/collection](https://gitee.com/dcloud/opendb/tree/master/collection)查看。
Currently `openDB` already supports dozens of tables. It can be viewed at [https://gitee.com/dcloud/opendb/tree/master/collection](https://gitee.com/dcloud/opendb/tree/master/collection).

部分常用表分类如下：
Some commonly used tables are classified as follows:

1. 用户管理（uni-id）：用户相关的表定义，如：角色、权限、积分、任务等
1. User management (uni-id): user-related table definitions, such as roles, permissions, points, tasks, etc.
2. 日志管理（opendb-admin）：管理后台常见功能，应用管理、升级中心、统计结果（新增、活跃、留存等）
2. Log management (opendb-admin): manage common functions in the background, application management, upgrade center, statistical results (new, active, retained, etc.)
3. 文章&评论（opendb-news)
3. Articles & Comments (opendb-news)
4. 电商系统（opendb-mall)
4. E-commerce system (opendb-mall)
5. 新闻系统（opendb-news)
5. News system (opendb-news)

## 预置数据
## Preset data

`openDB`不仅支持定义常用的数据表字段，还可以预置初始化数据。
`openDB` not only supports the definition of commonly used data table fields, but also can preset initialization data.

比如，[opendb-city-china](https://gitee.com/dcloud/opendb/tree/master/collection/opendb-city-china)是opendb中定义好的`中国城市字典表`，它的定义分为两个部分：
For example, [opendb-city-china](https://gitee.com/dcloud/opendb/tree/master/collection/opendb-city-china) is the `Chinese city dictionary table` defined in opendb, its definition Divided into two parts:
- collection.json：定义数据表名称、所含字段、每个字段的类型以及读写权限规则等；
- collection.json: define the name of the data table, the fields it contains, the type of each field, and the read and write permission rules;
- data.json：定义初始化内容
- data.json: define initialization content

你通过[uniCloud web控制台](https://unicloud.dcloud.net.cn)创建`openDB`表时，`uniCloud`会自动校验该opendb表定义中是否包含`data.json`，若包含，则在创建表定义后，自动导入`data.json`。
When you create an `openDB` table through the [uniCloud web console](https://unicloud.dcloud.net.cn), `uniCloud` will automatically check whether the opendb table definition contains `data.json`. , `data.json` is automatically imported after the table definition is created.

如果你的 HBuilderX 项目中，`uniCloud/database`目录下定义的数据表中含有opendb表定义，则对该opendb表执行`上传DB Schema`操作时，uniCloud服务端会判断该opendb表是否已存在：
If in your HBuilderX project, the data table defined in the `uniCloud/database` directory contains an opendb table definition, when the `Upload DB Schema` operation is performed on the opendb table, the uniCloud server will determine whether the opendb table already exists:
- 若该opendb表已存在，则仅更新 `DB Schema`；
- If the opendb table already exists, only update `DB Schema`;
- 若该opendb表不存在，则先创建该表，然后校验该opendb表定义中是否包含`data.json`，若包含`data.json`，则自动导入`data.json`
- If the opendb table does not exist, create the table first, and then check whether the opendb table definition contains `data.json`. If it contains `data.json`, it will automatically import `data.json`

## 数据表升级
## Data table upgrade

`openDB`数据表在后续的更新迭代中，可能会涉及到`schema`及`预置数据`的变更。自`HBuilderX 3.5.1`之后，opendb表支持检查更新。
The `openDB` data table may involve changes to `schema` and `preset data` in subsequent update iterations. Since `HBuilderX 3.5.1`, opendb tables support checking for updates.

以[opendb-city-china](https://gitee.com/dcloud/opendb/tree/master/collection/opendb-city-china)为例，当我们要修改或补充城市时，为了兼容已部署的数据表，应提供差量数据，这时我们需要做的是：
Take [opendb-city-china](https://gitee.com/dcloud/opendb/tree/master/collection/opendb-city-china) as an example, when we want to modify or supplement the city, in order to be compatible with the deployed The data table should provide differential data, then what we need to do is:
- 更新 `opendb-city-china/package.json`中的`version`字段为升级后的版本号；
- Update the `version` field in `opendb-city-china/package.json` to the upgraded version number;
- 新增 `opendb-city-china/collection.update-原始版本号-升级版本号.jql` JQL数据库管理器文件，内容为差量数据的JQL语句；
- Added `opendb-city-china/collection.update-original version number-upgrade version number.jql` JQL database manager file, the content is JQL statement of differential data;

比如行政区域的撤销或设立需要数据升级，并且定义升级后的版本号为0.0.2，这时需要将差量数据以JQL语句的形式写入文件`opendb-city-china/collection.update-0.0.1-0.0.2.jql`中，并更新`opendb-city-china/package.json`的`version`字段。
For example, the revocation or establishment of an administrative area requires data upgrade, and the upgraded version number is defined as 0.0.2, then the difference data needs to be written into the file `opendb-city-china/collection.update-0.0 in the form of JQL statements .1-0.0.2.jql`, and update the `version` field of `opendb-city-china/package.json`.


## 如何引入到自己的服务空间
## How to introduce into your own service space

在[uniCloud web控制台](https://unicloud.dcloud.net.cn)，新建表时，可直接选择所有`openDB`的表。
In the [uniCloud web console](https://unicloud.dcloud.net.cn), when creating a new table, you can directly select all `openDB` tables.

首先选分类，每个分类下又有若干表，表结构和预置数据可直接预览。支持多个表一起创建。
First select the category, there are several tables under each category, and the table structure and preset data can be previewed directly. Multiple tables are supported to be created together.

![](https://static-eefb4127-9f58-4963-a29b-42856d4205ee.bspapp.com/newopendb.jpg)

`openDB`的表，不应修改表名，修改后就无法与其他插件连同了。
The table name of `openDB` should not be modified. After modification, it cannot be combined with other plugins.

## 欢迎参与
## Welcome to participate

`openDB`是一个持续发展的、由开发者共建的规范。DCloud欢迎各个业务领域的专业开发者提供规范。
`openDB` is an evolving specification built by developers. DCloud welcomes professional developers in various business fields to provide specifications.

开发者通过提pr的方式，给`openDB`添加规范，或者给已有规范的表添加字段，或者添加初始化数据。gitee支持轻量pr，尤其适合共同编辑规范。
Developers can add specifications to `openDB`, or add fields to tables with existing specifications, or add initialization data by submitting PRs. gitee supports lightweight pr, which is especially suitable for co-editing specifications.

- 您将在这个具有重大意义的项目中的贡献者名单中留下自己的名字
- You will leave your name on the list of contributors to this important project
- 您提的pr成为规范将帮助您享受整个产业链的支持
- The pr you mentioned becoming the norm will help you enjoy the support of the entire industry chain

其他注意：
Other Notes:

- 为了向下兼容，`openDB`只增加表和字段，不删改。
- For backward compatibility, `openDB` only adds tables and fields, but does not delete or modify them.

## 注意事项
## Precautions

- opendb提供比较全面的数据表索引供开发者使用，但是过多索引可能会导致插入数据或更新数据变慢。如确认相关索引不需要使用可以自行删除
- opendb provides a relatively comprehensive data table index for developers to use, but too many indexes may cause slow insertion of data or data update. If you confirm that the relevant index does not need to be used, you can delete it yourself