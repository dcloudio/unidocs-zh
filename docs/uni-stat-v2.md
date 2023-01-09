uni统计2.0 是开源、全端、云端一体、更适合uni-app的统计平台。
Uni Statistics 2.0 is an open source, full-end, cloud-integrated statistics platform that is more suitable for uni-app.

> `HBuilderX 3.4.10 +`起支持
> `HBuilderX 3.6.7 +`修复了Android10多个设备deviceId相同导致统计数据减少的bug

## demo体验
## demo experience

体验系统：[https://hellouniadmin.dcloud.net.cn/](https://hellouniadmin.dcloud.net.cn/)
Experience system: [https://hellouniadmin.dcloud.net.cn/](https://hellouniadmin.dcloud.net.cn/)

注：uni统计内置在[uni-admin](/uniCloud/admin)中，体验系统的数据会定期重置。
Note: uni statistics are built in [uni-admin](/uniCloud/admin), and the data of the experience system will be reset periodically.

![](https://web-assets.dcloud.net.cn/unidoc/zh/admin3.png)

## 产品特色
## feature of product

无需开发，在`manifest`的 `uni统计` 中打勾并发行，在[uniCloud](/uniCloud/)服务空间部署[uni-admin](/uniCloud/admin)，即可查看报表。
There is no need to develop, just tick and publish in the `uni statistics` of `manifest`, deploy [uni-admin](/uniCloud/admin) in the [uniCloud](/uniCloud/) service space, and you can view the report.

同时开发者也可以自定义打点数据、自定义展现报表。
At the same time, developers can also customize the management data and customize the display report.


**1. 全端**
**1. Full end**

全端流量统计，一张报表可查看所有端（iOS、Android、Web 及各家小程序）的运营数据。
Full-end traffic statistics, one report can view the operation data of all devices (iOS, Android, Web and various MiniApp).

无需在各端接不同的sdk、无需在不同报表看数据。目前市面已知唯一一个一张报表看遍业务全景的方案。
There is no need to connect different SDKs at each end, and there is no need to view data in different reports. At present, there is only one solution known in the market that can see the business panorama in one report.

**2. 开源、免费、自由定制**
**2. Open source, free, free to customize**

代码全部开源。采集什么数据可以自定义；跑批频率可以自定义（搞活动时实时统计都可以做到）；展示报表可以自定义。

**3. 私有部署、数据自控**
**3. Private deployment, data automatic control**

使用传统saas类统计产品，所有数据都上报给统计服务厂商。
Using traditional saas statistical products, all data are reported to statistical service providers.

`uni统计2.0`基于`uniCloud`实现，云函数、统计数据全部托管在开发者自己的服务空间（阿里云或腾讯云自选）中，开发者对自己的统计数据拥有完整的控制权。
`uni Statistics 2.0` is implemented based on `uniCloud`, cloud functions and statistical data are all hosted in the developer's own service space (Alibaba Cloud or Tencent Cloud optional), and developers have complete control over their own statistical data.

**4. 有效的错误分析**
**4. Effective Error Analysis**

传统App统计平台，都没有js错误统计。开发者无法了解到自己的js代码在哪些设备上会报错。
Traditional App statistics platforms do not have js error statistics. Developers cannot know on which devices their js code will report errors.

uni统计的错误信息更全面，包括 js前端错误和 App 原生层的崩溃。
The error information of uni statistics is more comprehensive, including js front-end errors and app native layer crashes.

因为uni-app是编译后运行，传统web和小程序的统计平台，其js报错无法回溯到uni-app的编译前源码，报错看不懂。
Because uni-app runs after compilation, the traditional web and MiniApp statistics platform, its js error cannot be traced back to the pre-compiled source code of uni-app, and the error is incomprehensible.

uni统计支持sourcemap，可直观了解到底哪行代码写的有问题。[详见](#sourcemap-parse-error)
Uni statistics support sourcemap, which can intuitively understand which line of code is wrong. [See details](#sourcemap-parse-error)


**5. 默认功能丰富**
**5. Default feature rich**

- 设备统计
- Device Statistics
- 注册用户统计（基于[uni-id](https://uniapp.dcloud.io/uniCloud/uni-id.html)）
- Registered user statistics (based on [uni-id](https://uniapp.dcloud.io/uniCloud/uni-id.html))
- 页面统计
- Page Statistics
- 新增、活跃、留存、跳出率分析
- New, active, retained, bounce rate analysis
- 渠道分析：辅助渠道推广
- Channel analysis: auxiliary channel promotion
- 错误统计和上报：辅助产品质量提升
- Error statistics and reporting: auxiliary product quality improvement
- 原生App崩溃统计，分版本查看崩溃率
- Native App crash statistics, view crash rate by version
- 自定义打点、开源可扩展的报表
- Custom management, open source and extensible reports

**6. 更适合uni-app和uniCloud**
**6. More suitable for uni-app and uniCloud**

uni统计深入uni-app和uniCloud框架底层，提供了众多其他统计平台无法提供的功能：
uni statistics goes deep into the bottom layer of uni-app and uniCloud framework, and provides many functions that other statistics platforms cannot provide:
- uni-app全端识别，无需对接不同sdk、无需在不同报表中切换和自己累加数据
- uni-app full-end recognition, no need to connect to different sdk, no need to switch between different reports and accumulate data by yourself
- 自动识别uni-app路由，自动采集页面标题（基于pages.json的navigationBar或uni-nav-bar组件）
- Automatically identify uni-app routes and automatically capture page titles (navigationBar or uni-nav-bar components based on pages.json)
- 自动捕获js错误，上报app端原生崩溃日志
- Automatically capture js errors and report native crash logs on the app side
- 兼容uni-app渠道包打包体系，自动识别渠道包
- Compatible with the uni-app channel package packaging system, automatically identifying the channel package
- 基于uni-id账户体系，自动出具注册用户（不是设备）的新增、活跃、留存报表
- Based on the uni-id account system, automatically issue new, active and retained reports of registered users (not devices)
- 兼容uniCloud [opendb规范](/uniCloud/opendb)，从服务器端统计各项数据
- Compatible with uniCloud [opendb specification](/uniCloud/opendb), statistics various data from the server

**7. 开放生态**
**7. Open Ecosystem**

uni统计的开源且基于[uni-admin](/uniCloud/admin)的插件规范提供了插件机制，会有更多插件作者提供各种丰富的统计插件（如电商统计、内容统计等）。见[插件市场](https://ext.dcloud.net.cn/?cat1=7&cat2=74&type=HotList)
The open source of uni statistics and based on the plug-in specification of [uni-admin](/uniCloud/admin) provides a plug-in mechanism, and more plug-in authors will provide various statistical plug-ins (such as e-commerce statistics, content statistics, etc.). See [Plugin Market](https://ext.dcloud.net.cn/?cat1=7&cat2=74&type=HotList)

**DCloud非常重视数据驱动开发者业务的增长，近期联合专业的大数据服务商<a href="https://www.sensorsdata.cn/" target="_blank">神策</a>和<a href="https://tj.aldwx.com/" target="_blank">阿拉丁</a>共同完善Uni统计2.0的产品模块和生态建设。
**DCloud attaches great importance to the growth of data-driven developer business. Recently, it has cooperated with professional big data service providers <a href="https://www.sensorsdata.cn/" target="_blank">Sensors</a> and <a href="https://tj.aldwx.com/" target="_blank">Aladdin</a> will jointly improve the product modules and ecological construction of Uni Statistics 2.0.
如果你对数据分析有任何需求，欢迎您填写<a href="https://sdmarketing.wjx.cn/vj/h2UFHnx.aspx" target="_blank">需求调研问卷</a>，我们会根据您的宝贵建议，在原有Uni统计产品的基础上，完成迭代更新。**
If you have any needs for data analysis, you are welcome to fill in the <a href="https://sdmarketing.wjx.cn/vj/h2UFHnx.aspx" target="_blank">demand survey</a>, we will Based on your valuable suggestions, we will complete the iterative update based on the original Uni statistical products. **


## uni 统计老版升级建议
## uni statistics old version upgrade suggestion

对于使用uni统计1.0的开发者，推荐尽快升级到uni统计2.0。uni统计1.0将不再更新维护。
For developers using uni stats 1.0, it is recommended to upgrade to uni stats 2.0 as soon as possible. uni stats 1.0 will no longer be updated and maintained.

|功能|uni统计1.0|uni统计2.0|
|Functions|uni stats 1.0|uni stats 2.0|
| :-: | :-: | :-: |
|是否开源 |否|是|
|Whether Open Source |No |Yes|
|部署方式 |中央部署|私有部署|
|Deployment |Central Deployment|Private Deployment|
|定制方式 |不可定制|自由定制|
|Customization |Cannot be customized|Free customization|
|uni-id用户统计 |不含|默认包含|
|uni-id user statistics |excludes|included by default|
|错误分析有效性|较低|较高|
|Error Analysis Effectiveness|Lower|Higher|


## 环境要求
## Environmental requirements
- uni统计2.0 在客户端仅支持uni-app，非uni-app无法使用。
- uni statistics 2.0 only supports uni-app on the client side, non-uni-app cannot be used.
- uni统计2.0 在云端虽然依赖uniCloud，但并不要求开发者的应用全部基于uniCloud开发。应用的主业务可以连接传统服务器，统计打点、报表展现使用uniCloud即可。
- uni Statistics 2.0 relies on uniCloud in the cloud, but does not require developers to develop all applications based on uniCloud. The main business of the application can be connected to the traditional server, and uniCloud can be used for statistical management and report presentation.


## 使用教程
## Usage tutorial

`uni统计2.0`包括两个模块：
`uni stats 2.0` includes two modules:
- 前端采集模块：内置在`uni-app`框架中，在业务App的`manifest.json`进行配置；
- Front-end collection module: built in the `uni-app` framework and configured in the `manifest.json` of the business app;
- 云端统计模块：内置在`uni-admin`项目模板中，和业务App复用同样的uniCloud服务空间；
- Cloud statistics module: built in the `uni-admin` project template, reuses the same uniCloud service space as the business app;

### 前端采集配置
### Front-end collection configuration

在业务App项目的 `manifest.json` 里，选择 `uni统计配置` 项，根据需求，选择开通 `uni统计` ，勾选 `2.0` 开启新版统计。
In the `manifest.json` of the business app project, select the `uni statistics configuration` item, select to enable `uni statistics` as required, and check `2.0` to enable the new version of statistics.

![开启统计](https://web-assets.dcloud.net.cn/unidoc/zh/iShot2022-05-17%2020.22.52.png)

上述可视化操作，其实对应manifest源码视图的 `uniStatistics` 节点。如下文档对manifest规范进行详述。**如不关心规范细节，可以不阅读本小节，继续看下一节《小程序域名白名单》**。
The above visualization operations actually correspond to the `uniStatistics` node of the manifest source view. The manifest specification is detailed in the following document. **If you don't care about the specification details, you can skip this section and continue to read the next section "MiniApp Domain Name Whitelist"**.

`uniStatistics` 下的 `enable` 字段设置为 `true|false`，来开启关闭 `uni统计`
The `enable` field under `uniStatistics` is set to `true|false` to enable and disable `uni statistics`

设置 `version` 属性为 `"2"` 来开启新版统计
Set the `version` property to `"2"` to enable new version statistics

```js
//...
"uniStatistics": {
	"enable": true,//全局开启
	"version": "2" // 开启新版uni统计，值为字符串
},
//...
```

**uniStatistics说明**
**uniStatistics description**

|字段|类型|默认值|可选值|说明|
|Field|Type|Default Value|Optional Value|Description|
|:-:|:-:|:-:|:-:|:-:|
|enable|Boolean|false|true ， false|全局开启或关闭统计 ，分平台配置会覆盖当前配置|
|enable|Boolean|false|true ， false|Enable or disable statistics globally, the sub-platform configuration will override the current configuration|
|version|String|"1"|"1" ， "2"|统计版本 ，如不填写，默认使用版本1.0，推荐使用2.0版本|
|version|String|"1"|"1" , "2"|Statistical version, if not filled in, the default version 1.0 is used, and the 2.0 version is recommended|
|debug|Boolean|false|true ， false|开启统计调试模式 ，会产生大量日志，且会在开发阶段上报数据，应用发布请关闭此项|
|debug|Boolean|false|true , false|Enable the statistical debugging mode, which will generate a lot of logs, and will report data during the development stage, please turn off this item when the application is released|
|reportInterval|Number|10|true ， false|前端数据上报周期 **HBuilderX 3.5.4+ 支持**|
|reportInterval|Number|10|true ， false|Front-end data reporting cycle **HBuilderX 3.5.4+ support**|
|collectItems|Object|-|-|采集项配置 **HBuilderX 3.5.5+ 支持**|
|collectItems|Object|-|-|collection item configuration **HBuilderX 3.5.5+ support**|

**collectItems 采集项配置说明**
**collectItems collection item configuration description**

|字段|类型|默认值|可选值|说明|
|Field|Type|Default Value|Optional Value|Description|
|:-:|:-:|:-:|:-:|:-:|
|uniPushClientID|Boolean|false|true/false|是否开启推送`PushClientID`的采集|
|uniPushClientID|Boolean|false|true/false|Whether to enable the collection of push `PushClientID`|

**分平台设置**
**Sub-platform settings**

`uniStatistics` 支持分平台设置，比如仅开启微信小程序平台的 `uni统计`，则在`mp-weixin`节点下设置 `uniStatistics ->enable` 即可，如下：
`uniStatistics` supports sub-platform settings. For example, to enable `uni statistics` of the WeChat MiniApp platform, you can set `uniStatistics ->enable` under the `mp-weixin` node, as follows:

```js
//...
"mp-weixin":{
    "uniStatistics": {
        "enable": true //微信平台开启统计
    }
}
```

**分平台uniStatistics说明**
**Description of uniStatistics by platform**

|字段|类型|默认值|可选值|说明|
|Field|Type|Default Value|Optional Value|Description|
|:-:|:-:|:-:|:-:|:-:|
|enable|Boolean|false|true ， false|分平台开启或关闭统计 ，分平台配置会覆盖全局配置，uniStatistics 需在平台配置下|
|enable|Boolean|false|true ， false|Enable or disable statistics by platform, the configuration of each platform will override the global configuration, uniStatistics needs to be under the platform configuration|

::: warning 注意
::: warning attention
- 在分平台下如有`uniStatistics -> enable`字段，则优先使用分平台下配置 ，反之使用全局统计设置
- If there is a `uniStatistics -> enable` field under a sub-platform, the configuration under the sub-platform will be used first, otherwise, the global statistics setting will be used
- 分平台无需设置 `version`、`debug` 属性 ，两个属性仅全局生效
- There is no need to set the `version` and `debug` properties on different platforms, and the two properties only take effect globally
- 分平台无需设置 `debug` 属性 ，该属性仅在全局生效
- There is no need to set the `debug` attribute on different platforms, this attribute only takes effect globally
- 仅在开启调试模式或发行代码后才会正常上报数据
- The data will be reported normally only after the debug mode is turned on or the code is released
:::


#### 小程序域名白名单
#### MiniApp Domain Name Whitelist

由于各家小程序对可访问的域名要配置白名单，否则无法联网。所以需要发布小程序时需要在各厂商的小程序管理后台配置域名白名单。
Because each MiniApp needs to configure a whitelist for accessible domain names, otherwise it will not be able to connect to the Internet. Therefore, when the MiniApp needs to be released, it is necessary to configure the domain name whitelist in the MiniApp management background of each manufacturer.

部署uni统计时可以选择使用uniCloud的阿里云版或腾讯云版，不同云厂商对应的域名不同（文章后面章节会有服务空间相关配置）
When deploying uni statistics, you can choose to use the Alibaba Cloud version or Tencent Cloud version of uniCloud. The domain names corresponding to different cloud vendors are different (there will be service space related configurations in the later chapters of the article)

| uniCloud服务提供商 |      request 合法域名       |
| uniCloud service provider | request legal domain name |
| :--------: | :-------------------------: |
|   阿里云   |       api.bspapp.com        |
| Alibaba Cloud | api.bspapp.com |
|   腾讯云   | tcb-api.tencentcloudapi.com |
| Tencent Cloud | tcb-api.tencentcloudapi.com |

根据选择的uniCloud云厂商，配置相应的域名到小程序的域名白名单配置里即可。
According to the selected uniCloud cloud vendor, you can configure the corresponding domain name in the domain name whitelist configuration of the MiniApp.

#### 调试模式
#### debug mode

将 `manifest.json -> uniStatistics` 下的 `debug` 字段设置为 `true|false` ，来开启关闭 `uni统计`调试模式
Set the `debug` field under `manifest.json -> uniStatistics` to `true|false` to enable and disable the `uni statistics` debug mode

在调试模式下，会将上报数据的关键信息打印到控制台，方便观察采集信息是否正确 ，多用在自定义扩展的时候
In debug mode, the key information of the reported data will be printed to the console, which is convenient to observe whether the collected information is correct. It is mostly used when customizing extensions.

**日志格式**
**Log format**

`===` 表示统计日志相关日志
`===` indicates statistics log related logs

``` js
// 标识统计开启
// mark statistics on
=== uni统计开启,version:2.0

// 采集日志，采集类型见 ：上报数据说明
// Collect logs, see collection type: Description of reported data
=== 统计数据采集：{采集类型} ===
// 这里是采集的原始数据
// here is the raw data collected
{
	fvts: 1647313662
	lang: "zh"
	lt: "1"
	lvts: 1650857441
	md: "PC"
	t: 1650857461
	ttpj: "view"
	tvc: 14
	url: "pages/component/view/view"
	usv: "0.0.1"
	ut: "h5"
	// ...
} 
=== 采集结束 ===

// 数据上报成功
// data reported successfully
=== 统计队列数据上报 ===
// 这里是上报数据
// here is the report data
{usv: '0.0.1', t: 1650857765, requests: '["lt=11&ut=h5&url=/pages/component/view/view&tt=&u…&ch=&usv=0.0.1&t=1650857765&ttn=&ttpj=view&ttc="]'}
=== 上报结束 ===

```

日志字段说明，详见[前端采集SDK](#web-sdk)
For the description of log fields, see [Front-end Collection SDK](#web-sdk)

### 后台报表配置
### Background report configuration

#### 创建 admin 项目
#### Create admin project

`uni统计2.0`的后台统计报表是[uni-admin](https://uniapp.dcloud.io/uniCloud/admin.html)的内置插件。
The background statistics report of `uni statistics 2.0` is a built-in plugin of [uni-admin](https://uniapp.dcloud.io/uniCloud/admin.html).

[uni-admin](https://uniapp.dcloud.io/uniCloud/admin.html)是一个开源管理后台。也就是使用`uni统计2.0`，需要安装这个后台系统，在里面找到uni统计的菜单并使用。
[uni-admin](https://uniapp.dcloud.io/uniCloud/admin.html) is an open source management background. That is, to use `uni statistics 2.0`, you need to install this background system, find the menu of uni statistics and use it.

目前安装`uni-admin`的方式分为两种：`一键部署` 和 `手动安装`。

`一键部署uni-admin`仅需要前往[插件市场](https://ext.dcloud.net.cn)搜索找到`uni-admin`插件后，选择进入[uni-admin插件详情页](https://ext.dcloud.net.cn/plugin?id=3268)并点击`一键部署插件到uniCloud`按钮，然后选择需要部署`uni-admin`项目的服务空间后耐心等待系统自动部署完成即可。


`手动安装uni-admin`则请参考[uni-admin](https://uniapp.dcloud.io/uniCloud/admin.html#uni-admin-%E6%A1%86%E6%9E%B6-%E5%8E%9F%E5%90%8D-unicloud-admin)文档，完成如下操作：

1. 创建新的`uni-admin`项目（HBuilderX新建项目界面选择uni-admin模板）
1. Create a new `uni-admin` project (select the uni-admin template in the HBuilderX new project interface)
2. 在弹出的云服务空间初始化向导中，关联服务空间（如果您的业务App已使用了uniCloud，那么选择相同的服务空间；否则，新建一个服务空间，并在业务App里关联相同服务空间）
2. In the pop-up cloud service space initialization wizard, associate the service space (if your business app has used uniCloud, select the same service space; otherwise, create a new service space and associate the same service space in the business app)
3. 部署云端资源：上传部署云函数、公共模块、通过`db_init.json`初始化数据库表。如之前的表已经有冲突数据，需要自己手动合并下
3. Deploy cloud resources: upload and deploy cloud functions, public modules, and initialize database tables through `db_init.json`. If the previous table already has conflicting data, you need to manually merge it yourself
4. 在云端配置中心完成其它初始化配置，如：在 `uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json` 文件中填写自己的 passwordSecret 字段 (用于加密密码入库的密钥) 和 tokenSecret 字段 (为生成 token 需要的密钥，测试期间跳过本条也可以)，然后对`uni-config-center`公共模块点右键上传更新。注意：`业务端App项目`和`报表端uni-admin项目`关联相同服务空间时，可能会出现`uni-config-center`的相互覆盖问题，此时建议单点维护，[详见](https://uniapp.dcloud.net.cn/uni-stat-v2.html#常见问题)。
4. Complete other initialization configurations in the cloud configuration center, such as: fill in your own passwordSecret field in the `uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json` file (used for encrypted password storage key) and tokenSecret fields (to generate the secret key required for token generation, you can also skip this item during the test), then right-click on the `uni-config-center` public module to upload the update. Note: When the `business-side App project` and the `report-side uni-admin project` are associated with the same service space, the mutual coverage problem of `uni-config-center` may occur. In this case, single-point maintenance is recommended. [See details]( https://uniapp.dcloud.net.cn/uni-stat-v2.html#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98).
5. 运行 uni-admin 项目，一般是运行到浏览器
5. Run the uni-admin project, usually to the browser
6. 设置管理员账户
6. Set up an administrator account
7. 在左侧「应用管理」中新增「被统计应用」的记录（appid 等）
7. Add a record of "Applied to Statistics" (appid, etc.) in the "App Management" on the left
8. 配置结束后，启动业务App，将会在运行后的`uni-admin`页面左侧的uni统计菜单里看到业务App的数据（如看不到数据，见下方常见问题章节）
8. After the configuration is complete, start the business app, and you will see the data of the business app in the uni statistics menu on the left side of the `uni-admin` page after running (if you can't see the data, see the FAQ section below)
9. 测试通过后，在HBuilder发行菜单里发行`uni-admin`项目，选择部署到uniCloud服务空间的前端网页托管里。可以在[uniCloud web控制台](https://unicloud.dcloud.net.cn/)自定义域名。
9. After passing the test, issue the `uni-admin` project in the HBuilder issue menu, and choose to deploy it to the front-end web hosting of the uniCloud service space. You can customize the domain name in the [uniCloud web console](https://unicloud.dcloud.net.cn/).


::: warning 注意
::: warning attention
- 「连接本地云函数」运行需要在 uni-admin 的 database 文件夹上右键，点击「下载所有DB schema及扩展校验函数」。如果之前服务空间初始化向导里漏操作了`db_init`初始化数据，则对`uniCloud/database/db_init.json`点右键初始化
- To run "Connect Local Cloud Functions", right-click on the database folder of uni-admin and click "Download all DB schemas and extended validation functions". If the `db_init` initialization data was missed in the service space initialization wizard before, right-click on `uniCloud/database/db_init.json` to initialize
:::


**uni-admin老项目升级**
**uni-admin old project upgrade**

如您需要统计的业务之前已经使用了`uni-admin`，可以升级`uni-admin`。对项目下的`package.json`点右键，选择「从插件市场更新」。
If the business you need to count has used `uni-admin` before, you can upgrade `uni-admin`. Right-click `package.json` under the project and select "Update from Plugin Marketplace".

uni统计新增的文件主要包括：
The newly added files of uni statistics mainly include:
- 云函数：`uniCloud/cloudfunctions/uni-stat-cron`（定时跑批云函数）、`uniCloud/cloudfunctions/uni-stat-receiver`（接收前端打点的云对象）
- Cloud functions: `uniCloud/cloudfunctions/uni-stat-cron` (run and batch cloud functions regularly), `uniCloud/cloudfunctions/uni-stat-receiver` (receive cloud objects processed by the front end)
- 云函数公共模块：`uniCloud/cloudfunctions/common/uni-stat`
- Cloud functions common module: `uniCloud/cloudfunctions/common/uni-stat`
- 数据表：`uniCloud/database`目录下`uni-stat`开头的若干`schema`文件
- Data table: several `schema` files at the beginning of `uni-stat` in the `uniCloud/database` directory
- 统计页面：`pages/uni-stat` 文件夹下面的若干页面
- Statistics pages: several pages under the `pages/uni-stat` folder

更新时注意合并pages.json，确保新页面都注册成功。否则运行起来后，点击左侧菜单会报找不到xxx文件。
When updating, please merge pages.json to ensure that all new pages are registered successfully. Otherwise, after running, clicking on the left menu will report that the xxx file cannot be found.

`db_init.json`初始化数据库时，老项目的菜单表`opendb-admin-menus`，已经有数据了，此时key冲突的数据无法插入，需要手工合并。
When `db_init.json` initializes the database, the menu table `opendb-admin-menus` of the old project already has data. At this time, the data with conflicting keys cannot be inserted and need to be merged manually.
1. 如果老项目没有改动过menus和权限，那么可以删掉老表，重新初始化
1. If the old project has not changed the menus and permissions, you can delete the old table and reinitialize it
2. 如果老项目的menus菜单改动过，需要把uni统计的若干页面再合并到菜单数据表里
2. If the menu menu of the old project has been changed, several pages of uni statistics need to be merged into the menu data table.

#### 设置定时任务云函数的触发周期
#### Set the trigger period of the scheduled task cloud function

`uni统计2.0`中`定时任务云函数（uni-stat-cron）`的默认触发周期为每小时触发一次（即：每隔1小时，系统会自动触发一次`uni-stat-cron`云函数）。
In `uni statistics 2.0`, the default trigger period of the `timed task cloud function (uni-stat-cron)` is to trigger every hour (ie: every 1 hour, the system will automatically trigger the `uni-stat-cron` cloud function ).

你可以根据需要修改`定时任务云函数（uni-stat-cron）`的触发周期到分钟级(即每隔n分钟触发一次)，但要注意触发周期修改后，需要确保[定时任务配置项](#定时任务配置说明)中设置的分钟数是否会被触发，比如你的配置项中设置的是每小时的第10分钟触发（表达式：`* * * 10`），而定时触发器设置的为每20分钟触发1次（`0 1/20 * * * * *`），那这个配置项将永远不会触发。
You can modify the trigger period of the `Scheduled Task Cloud Function (uni-stat-cron)` to the minute level (that is, every n minutes) as needed, but pay attention to the modification of the trigger period, you need to ensure that [Scheduled Task Configuration Item](#%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E ) whether the number of minutes set in ) will be triggered, for example, your configuration item is set to trigger on the 10th minute of every hour (expression: `* * * 10`), while the timing trigger is set to trigger every 20 minutes 1 time (`0 1/20 * * * * *`), then this configuration item will never be triggered.

::: warning 注意
::: warning attention
1. 现阶段阿里云仅支持小时级的定时任务（即阿里云云函数的定时触发的最小间隔只能设置为每小时触发一次），因此现阶段阿里云用户如想将`定时任务云函数（uni-stat-cron）`的触发周期设置为分钟级须先向DCloud申请后再开启。[申请方式](https://uniapp.dcloud.io/uniCloud/price.html#aliyun)
1. At this stage, Alibaba Cloud only supports hourly scheduled tasks (that is, the minimum interval of timed triggering of Alibaba Cloud cloud functions can only be set to be triggered once an hour). -stat-cron)`'s trigger period is set to minute level. You must apply to DCloud before enabling it. [How to apply](https://uniapp.dcloud.io/uniCloud/price.html#aliyun)
2. 因云函数单次最大运行时长为10分钟，所以开启分钟级定时任务后，如果想重新设置定时任务中触发时间的话，最好确保各定时任务之间的触发间隔时间要大于等于10分钟，防止出现运行超时的问题。默认定时任务类型和触发时间可参考下方[定时任务配置说明](#定时任务配置说明)的说明。
2. Since the cloud function can run for a maximum of 10 minutes at a time, if you want to reset the trigger time in the scheduled task after enabling the minute-level scheduled task, it is best to ensure that the trigger interval between the scheduled tasks is greater than or equal to 10 minutes. , to prevent the problem of running timeout. The default scheduled task type and trigger time can refer to the following [Scheduled Task Configuration Description](#%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1%E9%85%8D%E7 %BD%AE%E8%AF%B4%E6%98%8E).
:::

- 我们这里以将跑批周期修改为每隔10分钟触发1次为例，正确的步骤为：
- Here we take the example of modifying the batch running cycle to trigger once every 10 minutes. The correct steps are:

1. 修改[uni统计配置项](#公共模块配置项说明)将`cronMin`参数的值改为`true`。
1. Modify [uni statistics configuration item](#%E5%85%AC%E5%85%B1%E6%A8%A1%E5%9D%97%E9%85%8D%E7%BD%AE%E9% A1%B9%E8%AF%B4%E6%98%8E) Change the value of the `cronMin` parameter to `true`.
2. 修改`定时任务云函数（uni-stat-cron）`下的`package.json`文件中的定时触发器配置项，关于定时触发器的具体说明可以参考官方文档[定时触发器](https://uniapp.dcloud.io/uniCloud/trigger.html)。
2. Modify the timing trigger configuration item in the `package.json` file under the `Scheduled Task Cloud Function (uni-stat-cron)`. For the specific description of the timing trigger, please refer to the official document [Timing Trigger](https ://uniapp.dcloud.io/uniCloud/trigger.html).
``` javascript
"cloudfunction-config": {
	"concurrency": 1,
	"memorySize": 256,
	"timeout": 600,
	"triggers": [
		{
			"name": "uni-stat-cron",
			"type": "timer",
			"config": "0 1/10 * * * * *"//每隔10分钟触发1次的cron表达式，如需复制此项请务必删除该注释
		}
	]
}
```
3. 检查配置文件(`config.json`)中的`cron`参数中设置的选项是否会被触发。
3. Check whether the options set in the `cron` parameter in the configuration file (`config.json`) will be triggered.
4. 重新上传部署`定时任务云函数（uni-stat-cron）`和`配置中心（uni-config-center）`。
4. Re-upload and deploy the `Scheduled Task Cloud Function (uni-stat-cron)` and `Configuration Center (uni-config-center)`.


#### 开启redis缓存
#### Enable redis cache

开启redis缓存后可以降低数据库查询压力，提升uni统计性能，可按需决定是否开启。
After enabling the redis cache, it can reduce the database query pressure and improve the uni statistical performance. You can decide whether to enable it on demand.

::: warning 注意
::: warning attention
开启redis缓存前，需要先确认是否已在布署uni统计的服务空间内购买redis服务，如果没有购买则需要先购买redis服务。
Before enabling the redis cache, you need to confirm whether the redis service has been purchased in the service space where uni statistics are deployed. If not, you need to purchase the redis service first.
:::

**开启步骤：**
**Open steps:**
1. 修改[uni统计配置项](#公共模块配置项说明)将`redis`参数的值改为`true`。
1. Modify [uni statistics configuration item](#%E5%85%AC%E5%85%B1%E6%A8%A1%E5%9D%97%E9%85%8D%E7%BD%AE%E9% A1%B9%E8%AF%B4%E6%98%8E) Change the value of the `redis` parameter to `true`.
2. 分别在数据`上报数据接收器（uni-stat-receiver）`和`定时任务云函数（uni-stat-cron）`下的`package.json`文件中添加redis拓展库。
2. Add the redis extension library to the `package.json` file under the data `Report data receiver (uni-stat-receiver)` and `Scheduled task cloud function (uni-stat-cron)` respectively.
3. 重新上传部署数据`上报数据接收器（uni-stat-receiver）`、`定时任务云函数（uni-stat-cron）`和`配置中心（uni-config-center）`。
3. Re-upload the deployment data `Report data receiver (uni-stat-receiver)`, `Scheduled task cloud function (uni-stat-cron)` and `Configuration center (uni-config-center)`.

::: preview 
> 配置uni-stat-receiver的redis拓展库
> Configure the redis extension library of uni-stat-receiver
``` javascript
{
	"name": "uni-stat-receiver",
	"dependencies": {
		"uni-id": "file:../../../../uni-id/uniCloud/cloudfunctions/common/uni-id",
		"uni-stat": "file:../common/uni-stat"
	},
	"extensions": {
		"uni-cloud-jql": {},
		"uni-cloud-redis": {} // 配置为此云函数开启redis扩展库，值为空对象留作后续追加参数，暂无内容。如拷贝此配置项到package.json文件，切记去除注释。
	}
}
``` 
> 配置uni-stat-cron的redis拓展库
> Configure the redis extension library of uni-stat-cron
``` javascript
{
	"name": "uni-stat-cron",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1"
	},
	"author": "",
	"license": "ISC",
	"dependencies": {
		"uni-stat": "file:../common/uni-stat"
	},
	"extensions": {
		"uni-cloud-redis": {} // 配置为此云函数开启redis扩展库，值为空对象留作后续追加参数，暂无内容。如拷贝此配置项到package.json文件，切记去除注释。
	},
	"cloudfunction-config": {
		"concurrency": 1,
		"memorySize": 512,
		"timeout": 600,
		"triggers": [
			{
				"name": "uni-stat-cron",
				"type": "timer",
				"config": "0 0 * * * * *"
			}
		]
	}
}
```
:::


### 关联服务空间
### Associated service space

为了让用户端App采集到的数据，可以被`uni-admin`中的云函数正确接收并统计，需保证用户端项目和admin项目，关联同样的服务空间。
In order for the data collected by the client app to be correctly received and counted by the cloud function in `uni-admin`, it is necessary to ensure that the client project and the admin project are associated with the same service space.

1. 选择用户端项目（需采集用户数据的项目）
1. Select the client project (the project that needs to collect user data)
2. 若该项目之前未启用`uniCloud`，右键并选择 `创建uniCloud云开发环境 -> 阿里云|腾讯云`；否则，进入第3步；
2. If `uniCloud` has not been enabled before, right click and select `Create uniCloud cloud development environment -> Alibaba Cloud|Tencent Cloud`; otherwise, go to step 3;

![关联前后台数据](https://web-assets.dcloud.net.cn/unidoc/zh/iShot2022-04-01%2015.11.18.png)

3. 在`uniCloud`目录右键并选择`关联云服务空间或项目`，在打开的窗口中选择对应`uni-admin`项目关联的服务空间
3. Right-click on the `uniCloud` directory and select `Associate cloud service space or project`, and select the service space associated with the `uni-admin` project in the opened window

![关联前后台数据](https://web-assets.dcloud.net.cn/unidoc/zh/iShot2022-04-01%2015.08.51.png)

### 错误解析 <Badge text="uni-admin 1.9.4+" />@sourcemap-parse-error 
### Error parsing <Badge text="uni-admin 1.9.4+" />@sourcemap-parse-error

> 此功能只支持 web平台、App平台、微信小程序平台
> This function only supports web platform, App platform, WeChat MiniApp platform

为方便开发者使用 sourceMap 文件定位代码问题，增加在统计中使用 sourceMap 错误解析功能。
In order to facilitate developers to use sourceMap files to locate code problems, the error analysis function of using sourceMap in statistics has been added.

#### 使用环境@sourcemap-parse-error-env
#### Using the environment @sourcemap-parse-error-env

1. 使用腾讯云服务空间，不支持阿里云服务空间（原因是因为阿里云存储不支持目录）
2. HBuiderX 3.5.3+
3. uni-admin 1.9.4+
4. 不支持 IE
4. Does not support IE

#### 生成 sourceMap@create-sourcemap
#### Generate sourceMap@create-sourcemap

线上运行端在各种用户环境下可能会有报错，需要开发者统计和分析。但三方统计系统（如友盟、阿拉丁、百度），对运行端的报错采集，提示的是uni-app编译器编译后的代码报错的行数，相当于乱码，无法告知开发者是uni-app的vue或js的哪一行代码报错。

uni统计的sourceMap功能可以解决这一问题，在统计后台可以清晰的看到报错的环境和准确的报错代码，是uni-app编译前的vue或js的具体信息。

- 在 HBuiderX 中生成 sourceMap 文件
- Generate sourceMap file in HBuiderX
	- web 平台在`发行-> 网站`时，勾选 `生成 sourceMap` 选项。
	- For the web platform, check the `Generate sourceMap` option in `Release -> Website`.

		![web 平台生成 sourceMap](https://web-assets.dcloud.net.cn/unidoc/zh/create_sourcemap.jpg)
	- App 平台在`发行 -> 原生App-云打包`时，勾选 `生成 sourceMap` 选项。
	- When the App platform is `Release -> Native App-Cloud Packaging`, check the `Generate sourceMap` option.

		![app 平台生成 sourceMap](https://web-assets.dcloud.net.cn/unidoc/zh/app_sourcemap.jpg)
	- 微信小程序平台在`发行 -> 小程序-微信`时，勾选 `生成 sourceMap` 选项。
	- When the WeChat MiniApp platform is `Issue -> MiniApp- WeChat`, check the `Generate sourceMap` option.

		![微信小程序平台生成 sourceMap](https://web-assets.dcloud.net.cn/unidoc/zh/wx_sourcemap.jpg)

- cli 项目生成 sourceMap 文件
- cli project generates sourceMap file

	::: preview

	> Vue2
	```sh
	yarn build:h5 --sourcemap

	yarn build:app-plus --sourcemap

	yarn build:mp-weixin --sourcemap
	```

	> Vue3

	```sh
	yarn build:h5 --sourcemap

	yarn build:app --sourcemap

	yarn build:mp-weixin --sourcemap
	```

	:::

1. 项目编译完成后，可在 `/unpackage/dist/build/.sourcemap` 中查看到生成的各平台的 sourceMap 文件。
1. After the project is compiled, you can view the generated sourceMap files for each platform in `/unpackage/dist/build/.sourcemap`.

	![生成的 sourceMap 路径](https://web-assets.dcloud.net.cn/unidoc/zh/sourcemap_file.jpg)

3. 由于微信小程序平台上传发布后，会再压缩打包一次，所以需要额外一个步骤：
3. After the WeChat MiniApp platform is uploaded and released, it will be compressed and packaged again, so an additional step is required:
   1. 在[微信公众平台](https://mp.weixin.qq.com/)的`开发管理/运维中心/错误日志`中下载线上版本 sourceMap 文件
   1. Download the online version sourceMap file in `Development Management/Operation and Maintenance Center/Error Log` of [WeChat Public Platform](https://mp.weixin.qq.com/).
   2. 将下载好的文件解压到所生成的 .sourcemap 文件夹中： `/unpackage/dist/build/.sourcemap/mp-weixin/__WEIXIN__/`（__WEIXIN__为新建的目录，解析错误时会根据这个名字查找）
   2. Unzip the downloaded file into the generated .sourcemap folder: `/unpackage/dist/build/.sourcemap/mp-weixin/__WEIXIN__/` (__WEIXIN__ is the newly created directory, and the parsing error will be based on this name lookup)

   ![微信 download sourceMap](https://web-assets.dcloud.net.cn/unidoc/zh/mp-weixin-download-sourcemap.png)

	**注意事项**
	**Precautions**

   1. 如果下载的 sourceMap 文件中，只有 `__FULL__` 文件夹，请重命名为 `__APP__`
   1. If there is only `__FULL__` folder in the downloaded sourceMap file, please rename it to `__APP__`
   2. 只支持 `发行模式` sourceMap 文件错误解析
   2. Only support `release mode` sourceMap file error parsing

#### 上传 sourceMap@upload-sourcemap
#### upload sourceMap@upload-sourcemap

1. 在 `uni-admin 项目/admin.config.js` 中配置 `uni-stat` 相关信息：
1. Configure `uni-stat` related information in `uni-admin project/admin.config.js`:
   1. 搜索 `uploadSourceMapCloudSpaceId` 补充腾讯云服务空间 SpaceID
   1. Search `uploadSourceMapCloudSpaceId` to supplement Tencent Cloud Service Space SpaceID
   2. 搜索 `cloudSourceMapUrl` 补充腾讯云云存储访问地址（如：https://xx-xx-xx.tcb.qcloud.la/\_\_UNI\_\_/uni-stat/sourcemap）
   2. Search for `cloudSourceMapUrl` to supplement Tencent Cloud cloud storage access address (eg: https://xx-xx-xx.tcb.qcloud.la/\_\_UNI\_\_/uni-stat/sourcemap)

	![cloudSpaceId](https://web-assets.dcloud.net.cn/unidoc/zh/upload_spaceId.jpg)

2. 将 uni-admin 项目运行到浏览器中，在 `uni 统计 / 错误统计 / js报错` 页面，错误信息列表表格的右上角有 `上传 sourceMap` 按钮。点击后展示如下：
2. Run the uni-admin project into the browser, and on the `uni statistics / error statistics / js error report` page, there is an `upload sourceMap` button in the upper right corner of the error message list table. After clicking, it will display as follows:

	![上传 sourceMap](https://web-assets.dcloud.net.cn/unidoc/zh/%E4%B8%8A%E4%BC%A0%20sourcemap%20%E6%8A%BD%E5%B1%89.png)

1. 上传请前请填写完整信息：`应用`、`平台`、`版本`
1. Please fill in the complete information before uploading: `Application`, `Platform`, `Version`
2. 点击 `选择文件并上传` 按钮，弹出 `选择文件夹` 框后，请选中编译的对应该平台版本的 sourceMap。如：**项目根目录/unpackage/dist/build/.sourcemap/h5**，选中 `h5` 目录后点击上传。如果中途上传失败，在不刷新页面的情况下，重新选择文件夹上传可以跳过已上传文件。
2. Click the `Choose file and upload` button, after the `Select Folder` box pops up, please select the compiled sourceMap corresponding to the platform version. For example: **Project root directory/unpackage/dist/build/.sourcemap/h5**, select the `h5` directory and click upload. If the upload fails in the middle, without refreshing the page, you can skip the uploaded file by re-selecting the folder to upload.
3. 文件夹内容会上传至 `云存储/__UNI__/uni-stat/sourcemap/应用 appId/平台（如：web、mp-weixin、ios）/版本/` 目录下
3. The contents of the folder will be uploaded to the `cloud storage/__UNI__/uni-stat/sourcemap/application appId/platform (eg web, mp-weixin, ios)/version/` directory

**注意事项**
1. 云存储需要配置权限：如果使用的腾讯云服务空间不是当前项目绑定，则需要设置为：`所有用户可读`
2. 如果出现跨域需要在 `跨域配置` 中绑定安全域名
2. If there is cross-domain, you need to bind the security domain name in `cross-domain configuration`
3. 上传失败可能会有如下原因：
3. The upload failure may be due to the following reasons:
   1. 如果文件名称、文件夹名称带 `ad` 或者广告类的字段，请关闭浏览器广告拦截扩展再上传
   1. If the file name, folder name contains `ad` or an advertisement field, please close the browser ad blocking extension and upload it again
   2. 如果云存储中该目录已有同名文件，也可能会上传失败。所以在再次上传相同平台，相同版本的 sourceMap 文件前请将云存储中对应目录 （如：`云存储/__UNI__/uni-stat/sourcemap/应用 appId/平台（如：web、mp-weixin、ios）/版本/`） 删除
   2. If there is a file with the same name in this directory in the cloud storage, the upload may also fail. Therefore, before uploading the same platform and the same version of the sourceMap file again, please refer to the corresponding directory in the cloud storage (eg: `cloud storage/__UNI__/uni-stat/sourcemap/appId/platform (eg: web, mp-weixin, ios)) /version/`) delete

#### 解析错误@parse-error
#### Parse error @parse-error

在 `uni 统计 / 错误统计 / js报错` 页面，错误信息列表表格中，点击表格行中右侧 `详情按钮` 即可在弹窗中查看解析后错误信息。
On the `uni statistics / error statistics / js error report` page, in the error information list table, click the `details button` on the right side of the table row to view the parsed error information in the pop-up window.

**示例**
**Example**

原始错误信息：
Original error message:

![原始错误：](https://web-assets.dcloud.net.cn/unidoc/zh/originalErrMsg.jpg)

解析后的错误信息：
Parsed error message:

![原始错误：](https://web-assets.dcloud.net.cn/unidoc/zh/parse_error.jpg)

- 解析错误是逐行解析，某一行解析失败会返回原错误信息
- Parsing errors are parsed line by line. If a line fails to parse, the original error message will be returned
- `runtime error` 分隔线下方为平台框架运行时错误栈信息，可以不用关心
- `runtime error` Below the separation line is the runtime error stack information of the platform framework, you don't need to care about it

## 开源代码解读
## Open source code interpretation

- 前端采集SDK源码地址，[查看](https://github.com/dcloudio/uni-app/tree/next/packages/uni-stat)
- Front-end collection SDK source address, [View](https://github.com/dcloudio/uni-app/tree/next/packages/uni-stat)
- 云端统计模块以及统计后台源码地址，[查看](https://github.com/dcloudio/uni-admin)
- Cloud statistics module and source address of statistics background, [View](https://github.com/dcloudio/uni-admin)

### 前端采集SDK @web-sdk
### Front-end collection SDK @web-sdk
#### 数据上报逻辑 @report-time
#### Data reporting logic @report-time

数据上报间隔默认是 10s 上报一次 ，在上报间隔内，会将每次上报节点的数据加入统计数据队列，10s后会在下一个上报节点，统一对数据队列进行一定的处理进行上报。
The default data reporting interval is 10s. During the reporting interval, the data of each reporting node will be added to the statistics data queue. After 10s, the next reporting node will uniformly process the data queue and report it.

为节约服务端资源，前端采集到的数据按固定周期上报。所以上报请求不是时实发生的。
To save server-side resources, the data collected by the front-end is reported on a regular basis. So the escalation request does not happen in real time.

`HBuilderX 3.5.4`或更高版本 可以根据自己的业务需求调整上报周期 ，在 `uni统计配置 -> 前端数据上报周期` 中修改即可 ，为节约服务端资源，建议填写范围为 `5-20` 之间。
`HBuilderX 3.5.4` or higher version can adjust the reporting period according to your own business needs, you can modify it in `uni statistics configuration -> front-end data reporting period`, in order to save server resources, it is recommended to fill in the range of `5- between 20`.

::: warning 什么时候会上报数据？
::: warning When will the data be reported?

- 发行代码后，运行项目上报 `（HBuiderX -> 发行 -> 选择开通统计的平台）`
- After the code is released, run the project report `(HBuiderX -> Release -> Select the platform to open statistics)`
- 运行代码且开启调试模式上报 `（manifest.json -> uniStatistics -> debug:true）`
- Run the code with debug mode enabled and report `(manifest.json -> uniStatistics -> debug:true)`

除了以上两种情况 ，其他情况都不会发生数据上报,包括 App 真机运行时（含自定义基座），崩溃和错误数据
In addition to the above two cases, data reporting will not occur in other cases, including App real machine runtime (including custom dock), crash and error data
:::


#### 采集类型
#### Collection Type

**应用启动**
**App launch**

访问开始即启动程序，访问结束结分为：进入后台超过5min、在前台无任何操作超过30min、新的来源程序
The program starts at the beginning of the visit, and the end of the visit is as follows: entering the background for more than 5 minutes, no operation in the foreground for more than 30 minutes, and a new source program

|上报字段|说明|
|Reporting Fields|Description|
|:-:|:-:|
|lt|统计数据类型，默认值为1，`类型见下文`|
|lt|Statistical data type, the default value is 1, `type see below`|
|ut	|平台类型，`类型见下文`|
|ut | Platform type, `type see below`|
|mpsdk|小程序 sdk version|
|mpsdk| MiniApp SDK version|
|mpv|小程序平台版本，如微信、支付宝等|
|mpv| MiniApp platform version, such as WeChat, Alipay, etc.|
|mpn|原生平台包名、小程序 appid|
|mpn|Native platform package name, MiniApp appid|
|v|应用版本。原生应用|
|v| Application version. Native application|
|p|手机系统，`类型见下文`|
|p|Mobile phone system, `type see below`|
|net|网络类型，`类型见下文`|
|net|Network type, `type see below`|
|brand|手机品牌|
|brand|Mobile phone brand|
|md	|手机型号 model|
|md |Mobile phone model|
|lang|语言|
|lang|language|
|lat|纬度|
|lat|Latitude|
|lng|经度|
|lng|Longitude|
|pr	|pixelRatio 设备像素比|
|pr |pixelRatio Device pixel ratio|
|ww	|windowWidth 可使用窗口宽度|
|ww |windowWidth can use window width|
|wh	|windowHeight 可使用窗口高度|
|wh |windowHeight can use the window height|
|sw	|screenWidth 屏幕宽度|
|sw |screenWidth screen width|
|sh	|screenHeight 屏幕高度|
|sh |screenHeight screen height|
|url|当前页面的完整 url，包含参数在内。最多255字符|
|url|The full url of the current page, including parameters. Up to 255 characters|
|ch	|渠道信息|
|ch |Channel Information|
|fvts|首次访问时间戳|
|fvts|First Visit Timestamp|
|lvts|上次访问时间戳|
|lvts|Last Access Timestamp|
|cn	|国家|
|en |Country|
|pn	|省份|
|pn |province|
|ct	|城市|
|ct |City|
|sc	|场景值|
|sc |Scene Value|
|tvc|用户到本次访问为止总共的访问次数|
|tvc|The total number of visits by the user up to this visit|
|usv|统计 sdk 版本|
|usv|stats sdk version|
|t|上报数据时的时间戳|
|t|Timestamp when data was reported|


**应用进入后台**
**App goes to background**

应用进入后台时，在 SDK 中是应用的 onHide 生命周期触发
When the application enters the background, it is triggered by the application's onHide life cycle in the SDK

|上报字段|说明|
|Reporting Fields|Description|
|:-:|:-:|
|lt			|统计数据类型，默认值为3，`类型见下文`|
|lt |Statistical data type, the default value is 3, `type see below`|
|ut			|平台类型，`类型见下文`|
|ut | Platform type, `type see below`|
|p			|手机系统，`类型见下文`|
|p |Mobile system, `type see below`|
|urlref		|应用退出时停留的页面|
|urlref |Page where the app exits|
|urlref_ts	|应用退出时，最后一个页面的停留时间|
|urlref_ts |The duration of the last page when the app exits|
|ch			|渠道信息|
|ch |Channel Information|
|usv		|统计 sdk 版本|
|usv |stats sdk version|
|t			|上报数据时的时间戳|
|t |Timestamp when data was reported|


**页面切换**
**Page switch**

页面跳转时上报，在 SDK 中是页面的 onHide 生命周期触发
Report when the page jumps. In the SDK, it is triggered by the onHide life cycle of the page.

|上报字段|说明|
|Reporting Fields|Description|
|:-:|:-:|
|lt|统计数据类型，默认值为11，`类型见下文`|
|lt|Statistical data type, the default value is 11, `type see below`|
|ut	|平台类型，`类型见下文`|
|ut | Platform type, `type see below`|
|p|手机系统，`类型见下文`|
|p|Mobile phone system, `type see below`|
|url|当前页面的完整 url，包含参数在内。最多255字符|
|url|The full url of the current page, including parameters. Up to 255 characters|
|ttpj|pages.json 中定义的页面的 title|
|ttpj|title of the page defined in pages.json|
|ttn|通过API uni.setnavigationbartitle 设置的 title|
|ttn|title set via API uni.setnavigationbartitle|
|ttc|通过 uni.report 上报的页面的 title|
|ttc|The title of the page reported via uni.report|
|ttct |title 组件中设置的 title|
|ttct |title set in the title component|
|urlref		|应用退出时停留的页面|
|urlref |Page where the app exits|
|urlref_ts	|应用退出时，最后一个页面的停留时间|
|urlref_ts |The duration of the last page when the app exits|
|ch	|渠道信息|
|ch |Channel Information|
|usv|统计 sdk 版本|
|usv|stats sdk version|
|t|上报数据时的时间戳|
|t|Timestamp when data was reported|

**事件触发**
**Event trigger**

用户触发某些业务逻辑时
When the user triggers some business logic
- 默认事件
- Default event
	- 登录：用户信息
	- Login: User Information
	- 支付：商品名称、金额
	- Payment: product name, amount
	- 分享：
	- share:
- 用户自定义事件
- User defined events

|上报字段|说明|
|Reporting Fields|Description|
|:-:|:-:|
|lt|统计数据类型，默认值为21，`类型见下文`|
|lt|Statistical data type, the default value is 21, `type see below`|
|ut	|平台类型，`类型见下文`|
|ut | Platform type, `type see below`|
|p|手机系统，`类型见下文`|
|p|Mobile phone system, `type see below`|
|url|当前页面的完整 url，包含参数在内。最多255字符|
|url|The full url of the current page, including parameters. Up to 255 characters|
|e_n|事件名称|
|e_n|Event Name|
|e_v|事件参数|
|e_v|Event Parameters|
|ch	|渠道信息|
|ch |Channel Information|
|usv|统计 sdk 版本|
|usv|stats sdk version|
|t|上报数据时的时间戳|
|t|Timestamp when data was reported|

**应用错误**
**Application error**

应用发生错误时上报
Report an error in the application

|上报字段|说明|
|Reporting Fields|Description|
|:-:|:-:|
|lt|统计数据类型，默认值为21，`类型见下文`|
|lt|Statistical data type, the default value is 21, `type see below`|
|ut	|平台类型，`类型见下文`|
|ut | Platform type, `type see below`|
|p|手机系统，`类型见下文`|
|p|Mobile phone system, `type see below`|
|ch|渠道信息|
|ch|Channel Information|
|mpsdk|小程序 SDK Version|
|mpsdk| MiniApp SDK Version|
|mpv|小程序平台版本，如微信、支付宝等|
|mpv| MiniApp platform version, such as WeChat, Alipay, etc.|
|v|应用版本。原生应用|
|v| Application version. Native application|
|em|错误信息|
|em|Error message|
|usv|统计 sdk 版本|
|usv|stats sdk version|
|t|上报数据时的时间戳|
|t|Timestamp when data was reported|


**`lt`：统计数据类型**
**`lt`: Statistics type**

|值|说明|
|value|description|
|:-:|:-:|
|1  |应用启动，对应 `onLaunch` 事件|
|1 |The application starts, corresponding to the `onLaunch` event|
|3  |应用进入后台，对应应用 `onHide` 事件|
|3 |The application enters the background, corresponding to the application `onHide` event|
|11 |页面跳转，对应页面 `onHide` 事件|
|11 |Page jump, corresponding to page `onHide` event|
|21 |事件触发|
|21 |Event Trigger|
|31 |应用错误|
|31 |Application Error|

**`ut`：平台类型**
**`ut`: platform type**

|值|说明|
|value|description|
|:-:|:-:|
|n|移动端  |
|h5|h5	  |
|wx|微信	  |
|wx|WeChat |
|ali|阿里	  |
|ali|Ali |
|bd|百度	  |
|bd|Baidu |
|tt|头条	  |
|qq|qq	  |
|qn|快应用  |
|qn| QuickApp |
|ks|快手	  |
|ks| Kuaishou |
|lark|飞书	  |
|lark|Feishu |
|qw|快应用  |
|qw| QuickApp |
|dt| 钉钉	  |
|dt| DingTalk |

**`p`：手机系统**
**`p`: phone system**

|值|说明|
|value|description|
|:-:|:-:|
|a|Android|
|i|iOS|


**`net`：网络类型**
**`net`: network type**

|值|说明|
|value|description|
|:-:|:-:|
|wifi|wifi网络|
|wifi|wifi network|
|2g|2g网络|
|2g|2g network|
|3g|3g网络|
|3g|3g network|
|4g|4g网络|
|4g|4g network|
|5g|5g网络|
|5g|5g network|
|none|无网络|
|none|No Internet|
|cable|有线|
|cable|cable|

### 云端统计
### Cloud Statistics

#### 统计报表展示页
#### Statistical report display page

为了突出目标，仅注释出 uni 统计相关的文件夹及文件，其余与普通 uni-app 项目相同。新增页面可参考 uni-stat 中相似页面。
In order to highlight the goal, only the folders and files related to uni statistics are commented out, and the rest are the same as ordinary uni-app projects. For new pages, please refer to similar pages in uni-stat.

```bash
├── cloudfunctions
├── common                             # 样式
│   │── uni.css                        # 公共样式
│   └── uni-icons.css                  # icon样式
├── components                         # 自定义组件
├── js_sdk                             # js sdk
│   └── uni-stat                       # uni统计相关工具方法
│       └── util.js                      
├── pages                              # 页面
│   └── uni-stat                       # uni统计页面
│       │── channel                    # 渠道（app）
│       │   │── channel.vue            # 页面（下同）
│       │   └── fieldsMap.js           # 字段配置（下同）
│       │── device                     # 设备统计
│       │   │── activity               # 渠道/场景分析
│       │   │   │── activity.vue      
│       │   │   └── fieldsMap.js    
│       │   │── comparison             # 平台对比
│       │   │   │── comparison.vue      
│       │   │   └── fieldsMap.js    
│       │   │── overview               # 今日概览
│       │   │   │── overview.vue      
│       │   │   └── fieldsMap.js    
│       │   │── retention              # 留存
│       │   │   │── retention.vue      
│       │   │   └── fieldsMap.js    
│       │   │── stickiness             # 粘性
│       │   │   │── stickiness.vue      
│       │   │   └── fieldsMap.js    
│       │   └── trend                  # 趋势分析
│       │       │── trend.vue           
│       │       └── fieldsMap.js        
│       │── error                      # 错误分析
│       │   │── error.vue             
│       │   └── fieldsMap.js            
│       │── event                       # 事件分析
│       │   │── event.vue             
│       │   └── fieldsMap.js            
│       │── index                       # 统计首页
│       │   │── index.vue             
│       │   └── fieldsMap.js            
│       │── page-ent                    # 入口页
│       │   │── page-ent.vue             
│       │   └── fieldsMap.js            
│       │── page-res                    # 受访页
│       │   │── page-res.vue             
│       │   └── fieldsMap.js            
│       │── pay-order                   # 支付统计
│           │── funnel                  # 支付/漏斗分析
│           │   │── funnel.vue      
│           │   └── fieldsMap.js              
│           │── list                    # 支付/订单明细
│           │   │── list.vue      
│           │── overview                # 支付/订单概况
│           │   │── overview.vue      
│           │   └── fieldsMap.js      
│           └── ranking                 # 支付/用户价值排行
│               └── ranking.vue           
│       │── scene                       # 场景值（小程序）
│       │   │── scene.vue             
│       │   └── fieldsMap.js            
│       └── user                        # 用户统计
│           │── activity                # 渠道/场景分析
│           │   │── activity.vue      
│           │   └── fieldsMap.js    
│           │── comparison              # 平台对比
│           │   │── comparison.vue      
│           │   └── fieldsMap.js    
│           │── overview                # 今日概览
│           │   │── overview.vue      
│           │   └── fieldsMap.js    
│           │── retention               # 留存
│           │   │── retention.vue      
│           │   └── fieldsMap.js    
│           │── stickiness              # 粘性
│           │   │── stickiness.vue      
│           │   └── fieldsMap.js    
│           └── trend                   # 趋势分析
│               │── trend.vue           
│               └── fieldsMap.js        
├── static
├── store
├── admin.config.js
├── App.vue
├── main.js
├── mainfest.json
├── pages.json
├── postcss.config.js
└── uni.scss
```



#### 云函数、通用模块说明
#### Cloud function, general module description

**一、 uni统计服务端构成**
**1. Composition of uni statistics server**

- `uni-config-center/uni-stat 配置模块`：给uni统计提供运行必要的配置参数。
- `uni-config-center/uni-stat configuration module`: Provides the necessary configuration parameters for uni stats to run.
- `uni-stat 公共模块`：数据处理模块，包括收集上报数据的处理入库及定时任务的数据处理。
- `uni-stat public module`: data processing module, including the processing and storage of the collected and reported data and the data processing of timed tasks.
- `uni-stat-receiver 上报数据接收器`：接收客户端上报数据并转发给公共模块处理。注意：该云对象依赖于`uni-id`公共模块。
- `uni-stat-receiver report data receiver`: Receive the data reported by the client and forward it to the public module for processing. Note: This cloud object depends on the `uni-id` public module.
- `uni-stat-cron 定时任务云函数`：触发定时任务并转发给公共模块处理。
- `uni-stat-cron timed task cloud function`: triggers timed tasks and forwards them to public modules for processing.

**二、公共模块说明**
**2. Description of public modules**

::: warning 注意
::: warning attention
注意：uni统计公共模块依赖于 uniCloud配置中心（uni-config-center）
Note: The uni statistics common module depends on the uniCloud configuration center (uni-config-center)
:::

``` bash
├── shared                              # 公共模块，提供公共函数库等支持。
│   │── create-api.js                   # 用来创建对外访问的实例
│   │── error.js                   		# 错误处理模块
│   │── index.js                   		# 入口文件，提供对外访问的基础模块
│   └── utils.js                     	# 工具函数库文件
├── stat                                # uni统计实际业务处理模块
│   │── lib                             # 工具类类库，提供日期计算、数据加密等额外功能支持。
│   │   │── date.js                     # 日期计算类文件
│   │   │── index.js                    # 入口文件，提供对外访问模块
│   │   └── uni-crypto.js               # 数据加密类文件，提供AES/MD5加密
│   │── mod                             # 数据模型，提供具体业务实现。
│   │   │── uni-pay                     # 支付统计目录
│   │   │   └── payResult.js            # 支付统计模型，跑批支付统计数据。
│   │   │── activeDevices.js            # 活跃设备模型，给周月维度的设备基础统计和留存统计提供数据，每日跑批合并，仅添加本周/本月首次访问的设备。
│   │   │── activeUsers.js              # 活跃用户模型，给周月维度的用户基础统计和留存统计提供数据，每日跑批合并，仅添加本周/本月首次访问的用户。
│   │   │── appCrashLogs.js             # 原生应用崩溃日志模型，记录原生应用的崩溃日志
│   │   │── base.js                     # 基类模型，提供基础服务支持
│   │   │── channel.js                  # 渠道模型，提供渠道和场景值数据
│   │   │── errorLog.js                 # 错误日志模型，记录上报的应用运行错误日志
│   │   │── errorResult.js              # 错误结果统计模型，统计汇总错误日志中的数据
│   │   │── event.js                    # 事件统计模型，提供应用的事件字典
│   │   │── eventLog.js                 # 事件日志模型，记录上报的事件日志
│   │   │── eventResult.js              # 事件结果统计，统计汇总事件日志中的数据
│   │   │── index.js                    # 入口文件，提供对外访问模块
│   │   │── loyalty.js                  # 设备/用户忠诚度（粘性）统计模型，统计设备/用户的粘性，粘性判断依据为：访问时长和访问页面数量
│   │   │── page.js                     # 页面模型，提供应用的页面字典
│   │   │── pageLog.js                  # 页面日志模型，记录上报的页面访问日志
│   │   │── pageResult.js               # 页面结果统计模型，统计汇总页面访问日志中的数据
│   │   │── platform.js                 # 应用平台模型，提供应用的平台字典
│   │   │── runErrors.js                # 运行错误日志，记录数据统计时运行出错的日志
│   │   │── scenes.js                   # 场景值模型，提供应用渠道和小程序场景值的数据字典
│   │   │── sessionLog.js               # 基础会话日志模型，记录设备访问时产生的会话日志
│   │   │── shareLog.js                 # 分享日志模型，记录触发分享事件的日志
│   │   │── statResult.js               # 基础数据结果统计模型，统计汇总会话数据包括不限于设备/用户的数量、访问量、活跃度（日活、周活、月活）、留存率（日留存、周留存、月留存）、跳出率、访问时长等数据
│   │   │── uniIDUsers.js               # uni-id 用户模型，提供uni-id用户数据查询
│   │   │── userSessionLog.js           # 用户会话日志模型，记录登录用户的会话日志
│   │   └── version.js                  # 应用版本模型，提供应用的版本号字典
│   │── receiver.js                     # 上报数据接收器，数据上报功能的分发入口文件
│   └── stat.js                         # 数据统计调度处理模块，数据统计及日志清理功能的分发入口文件
└── index.js                            # 代理入口文件，提供对外访问的uni-stat对象
```

#### 公共模块配置项说明
#### Common module configuration item description
uni统计配置项存放于uniCloud配置中心（`uni-config-center`）下的 `uni-stat/config.json`文件中，用户可根据自身系统需要自定义各配置项的值。
The uni statistics configuration items are stored in the `uni-stat/config.json` file under the uniCloud configuration center (`uni-config-center`). Users can customize the value of each configuration item according to their own system needs.

::: warning 注意
::: warning attention
注意：修改uni统计配置项后需要重新上传公共模块`uni-config-center`后才会生效。
Note: After modifying the uni statistics configuration items, you need to re-upload the public module `uni-config-center` to take effect.
:::

**基础参数**
**Basic parameters**

|配置项				|默认值		|说明																																																|
|Configuration |Default |Description |
| :--------:		|:---------:|:-------------------:																																												|
|  debug			|  false	|开启调试模式 true: 开启，false:关闭，开启后会产生大量日志，生产环境请关闭。																														|
| debug | false | Enable debug mode true: enable, false: disable, a lot of logs will be generated after opening, please disable the production environment. |
|  redis			|  false	|开启redis缓存，开启后可以降低数据库查询压力，提升uni统计性能，可按需决定是否开启。[开启方法](#开启redis缓存)																					|
| redYes | false | Enable the redis cache, which can reduce database query pressure and improve uni statistics performance. You can decide whether to enable it on demand. [Open method](#%E5%BC%80%E5%90%AFredis%E7%BC%93%E5%AD%98) |
|  cachetime		|  604800	|redis缓存有效期，单位秒。																																											|
| cachetime | 604800 | Redis cache validity period, in seconds. |
|  sessionExpireTime|  1800		|会话过期时间，该配置用来判断当前会话是否已过期，一般情况下无需修改此项。																															|
| sessionExpireTime| 1800 | Session expiration time, this configuration is used to determine whether the current session has expired. Generally, it is not necessary to modify this item. |
|  realtimeStat		|  true		|开启实时统计，true: 开启，false:关闭，开启后会每小时统计一次，数据库读写次数会增多，可按需决定是否开启。																							|
| realtimeStat | true | Enable real-time statistics, true: enabled, false: disabled. After it is enabled, statistics will be counted every hour, and the number of database reads and writes will increase. You can decide whether to enable it as needed. |
|  cronMin			|  false	|开启分钟级定时任务，true: 开启，false:关闭。开启后定时任务将细分到分钟级执行，分摊数据计算压力，适合应用日活较大或有特殊需求的用户群体。具体的开启方法见[设置定时任务云函数的触发周期](#设置定时任务云函数的触发周期)。	|
| cronMin | false | Enable minute-level scheduled tasks, true: enable, false: disable. After opening, the scheduled tasks will be subdivided into minute-level execution, and the data calculation pressure will be distributed, which is suitable for user groups with large daily activities or special needs. For the specific opening method, see [Set the trigger period of the cloud function of the scheduled task](#%E8%AE%BE%E7%BD%AE%E5%AE%9A%E6%97%B6%E4%BB%BB%E5% 8A%A1%E4%BA%91%E5%87%BD%E6%95%B0%E7%9A%84%E8%A7%A6%E5%8F%91%E5%91%A8%E6%9C% 9F). |
|  cron				|  -		|用于配置定时任务触发时间，详情见下方[定时任务配置说明](#定时任务配置说明)。																														|
| cron | - | is used to configure the trigger time of scheduled tasks. For details, see the following [Scheduled Task Configuration Instructions](#%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1%E9 %85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E). |
|  batchInsertNum	|  5000		|当有批量写入操作时，限制单次写入数据库的最大条数。为防止写入超时，最大值为5000条。																													|
| batchInsertNum | 5000 | When there are batch write operations, limit the maximum number of records written to the database at one time. To prevent write timeouts, the maximum value is 5000 entries. |
|  errorCheck		|  -		|错误检测，此项用于在规定时间内限制相同的错误日志写入数据库，防止有高频错误产生时造成大量的数据库写入操作。[详情](#错误检测配置说明)																|
| errorCheck | - |Error detection, this item is used to limit the same error log to be written to the database within a specified time, to prevent a large number of database write operations caused by high-frequency errors. [Details](#%E9%94%99%E8%AF%AF%E6%A3%80%E6%B5%8B%E9%85%8D%E7%BD%AE%E8%AF%B4%E6% 98%8E) |
|  cleanLog			|  -		|日志清理，此项用于配置定时清理过期的日志，减少数据库数据的存储量，提升uni统计性能。[详情](#日志清理配置说明)																						|
| cleanLog | - |Log cleaning, this item is used to configure regular cleaning of expired logs, reduce the storage capacity of database data, and improve uni statistics performance. [Details](#%E6%97%A5%E5%BF%97%E6%B8%85%E7%90%86%E9%85%8D%E7%BD%AE%E8%AF%B4%E6% 98%8E) |


#### 定时任务配置说明
#### Scheduled task configuration instructions

`cron` 参数用于配置定时任务触发时间，一般无需修改此项。
The `cron` parameter is used to configure the trigger time of the scheduled task. Generally, you do not need to modify this item.

|参数		|说明																																|
|Parameters |Description |
| :--------:|:-------------------:																												|
|  type		|定时任务类型：如 `stat`：基础数据统计																								|
| type | Scheduled task type: such as `stat`: basic data statistics |
|  time		|触发时间表达式：`* * * *` 共四位，由左到右分别代表：星期（1-7代表周一到周日）/日/时/分。例：每天晚上0点0分触发，应写作 `* * 0 0`	|
|time |Trigger time expression: `* * * *` There are four digits in total, representing from left to right: week (1-7 represents Monday to Sunday)/day/hour/minute. Example: Triggered at 0:00 every night, it should be written as `* * 0 0` |

目前定时任务类型有（`以下括号内的内容表示开启分钟级统计后定时任务的触发时间`）：
The current types of scheduled tasks are (`The content in brackets below indicates the trigger time of the scheduled task after the minute-level statistics are enabled`):

- `stat`：基础数据统计，统计维度包括：
- `stat`: basic data statistics, statistical dimensions include:
  - 实时统计，默认`每小时（0分钟）`触发，统计上一小时的基础数据
  - Real-time statistics, triggered by default `every hour (0 minutes)`, statistics of basic data for the last hour
  - 日统计，默认`每天上午1点（10分钟）`触发，统计前一天的基础数据
  - Daily statistics, the default is triggered at 1:00 a.m. (10 minutes) every day, and the basic data of the previous day is counted
  - 周统计，默认`每周一上午1点（20分钟）`触发，统计上一周的基础数据
  - Weekly statistics, triggered by `every Monday at 1:00 am (20 minutes)` by default, statistics the basic data of the previous week
  - 月统计，默认`每月1号上午3点（30分钟）`触发，统计上一月的基础数据
  - Monthly statistics, the default `triggered at 3:00 am (30 minutes) on the 1st of each month`, statistics the basic data of the previous month

- `retention-device`：设备留存数据统计，统计维度包括：
- `retention-device`: Device retention data statistics, statistical dimensions include:
  - 日统计，默认`每天上午2点（20分钟）`触发，统计设备日留存数据（初始统计前天到昨天的留存情况，因此需至少运行三天才会有数据）
  - Daily statistics, the default is triggered by `every day at 2:00 am (20 minutes)`, and the daily retained data of the device is counted (the initial statistics of the retention status from the day before yesterday to yesterday, so it takes at least three days to have data)
  - 周统计，默认`每周一上午2点（30分钟）`触发，统计设备周留存数据（初始统计上上周到上周的留存情况，因此需至少运行三周才会有数据）
  - Weekly statistics, triggered by `every Monday at 2:00 am (30 minutes)` by default, to count the weekly retained data of the device (the initial statistics of the retention from the last week to the last week, so it takes at least three weeks to have data)
  - 月统计，默认`每月1号上午4点（30分钟）`触发，统计设备月留存数据（初始统计上上月到上月的留存情况，因此需至少运行三个月才会有数据）
  - Monthly statistics, triggered by the default `4:00 am (30 minutes) on the 1st of each month`, to count the monthly retained data of the device (the initial statistics are about the retention of the previous month to the previous month, so it will take at least three months to have data)

- `retention-user`：用户留存数据统计，统计维度包括：
- `retention-user`: User retention data statistics, statistical dimensions include:
  - 日统计，默认`每天上午3点（40分钟）`触发，统计用户日留存数据（初始统计前天到昨天的留存情况，因此需至少运行三天才会有数据）
  - Daily statistics, triggered by `every day at 3:00 a.m. (40 minutes)` by default, to count the daily retained data of users (the initial statistics of retention from the day before yesterday to yesterday, so it takes at least three days to have data)
  - 周统计，默认`每周一上午5点（30分钟）`触发，统计用户周留存数据（初始统计上上周到上周的留存情况，因此需至少运行三周才会有数据）
  - Weekly statistics, triggered by `every Monday at 5:00 am (30 minutes)` by default, and statistics the user's weekly retention data (the initial statistics of the retention status from the last week to the last week, so there will be data after at least three weeks of operation)
  - 月统计，默认`每月1号上午6点（40分钟）`触发，统计用户月留存数据（初始统计上上月到上月的留存情况，因此需至少运行三个月才会有数据）
  - Monthly statistics, triggered by the default `6:00 am (40 minutes) on the 1st of each month`, to count the monthly retention data of users (the retention status from the previous month to the previous month is initially counted, so it takes at least three months to have data)

- `active-device`：活跃设备数据归档，统计维度包括：
- `active-device`: Active device data archive, statistical dimensions include:
  - 日归档，默认`每天上午0点（10分钟）`触发，归档前一天的活跃设备数据，注意：此项数据要保持在`基础数据统计`、`设备留存数据统计`、`用户留存数据统计`中的周统计、月统计触发之前执行。
  - Daily archiving, triggered by `every day at 0:00 am (10 minutes)` by default, and archives the active device data of the previous day. Note: this data should be kept in `basic data statistics`, `device retention data statistics`, `user retention data` Executed before the weekly statistics and monthly statistics in Statistics` are triggered.

- `active-user`：活跃用户数据归档，统计维度包括：
- `active-user`: Active user data archive, statistical dimensions include:
  - 日归档，默认`每天上午0点（20分钟）`触发，归档前一天的活跃用户数据，注意：此项数据要保持在`基础数据统计`、`设备留存数据统计`、`用户留存数据统计`中的周统计、月统计触发之前执行。
  - Daily archiving, triggered by `every day at 0:00 am (20 minutes)` by default, and archives the active user data of the previous day. Note: this data must be kept in `basic data statistics`, `device retention data statistics`, `user retention data` Executed before the weekly statistics and monthly statistics in Statistics` are triggered.

- `page`：页面数据统计，统计维度包括：
- `page`: page data statistics, statistical dimensions include:
  - 日统计，默认`每天上午3点（20分钟）`触发，统计前一天的页面数据
  - Daily statistics, the default is triggered at 3:00 a.m. (20 minutes) every day, and the page data of the previous day is counted

- `event`：事件数据统计，统计维度包括：
- `event`: Event data statistics, statistical dimensions include:
  - 日统计，默认`每天上午4点（20分钟）`触发，统计前一天的事件数据
  - Daily statistics, the default is triggered at 4:00 a.m. (20 minutes) every day, and the event data of the previous day is counted

- `error`：错误数据统计，统计维度包括：
- `error`: Error data statistics, statistical dimensions include:
  - 日统计，默认`每天上午5点（20分钟）`触发，统计前一天的错误数据
  - Daily statistics, the default `triggered at 5:00 a.m. (20 minutes) every day`, statistics the error data of the previous day

- `clean`：错误数据统计，统计维度包括：
- `clean`: Error data statistics, statistical dimensions include:
  - 日志清理，默认`每天上午5点（30分钟）`触发，清理过期的日志数据
  - Log cleanup, triggered by default `every day at 5:00 am (30 minutes)`, to clean up expired log data

- `pay-result`：支付数据结果统计，统计维度包括：
	- 实时统计，默认`每小时（10分钟）`触发，统计上一小时的基础数据（实时统计时，会自动统计小时、天、周、月、季度、年度维度的数据，无需再配置其他维度统计）

#### 错误检测配置说明
#### Error detection configuration instructions

`errorCheck`参数用于在规定时间内限制相同的错误日志写入数据库，防止有高频错误产生时造成大量的数据库写入操作，可按需开启或关闭。
The `errorCheck` parameter is used to limit the same error log to be written to the database within a specified time to prevent a large number of database write operations caused by high-frequency errors. It can be turned on or off as needed.

|参数		|说明								|
|Parameters |Description |
| :--------:|:-------------------:				|
| needCheck	|是否需要检测：true：是；false:否	|
| needCheck | Need to check: true: yes; false: no |
| checkTime	|错误检测间隔时间，单位`分钟`。		|
| checkTime | Error check interval time, in `minutes`. |


#### 日志清理配置说明
#### Log cleaning configuration instructions

`cleanLog`参数用于配置定时清理过期的日志，减少数据库数据的存储量，提升uni统计性能。
The `cleanLog` parameter is used to configure regular cleaning of expired logs, reduce the storage capacity of database data, and improve uni statistics performance.

|参数			|说明																																								|
|Parameters |Description |
| :--------:	|:-------------------:																																				|
| open			|是否开启日志清理：true：是；false:否																																|
| open | Whether to enable log cleaning: true: yes; false: no |
| reserveDays	|各项日志的保留天数配置，参数格式：`日志类型:保留天数`，例如： `sessionLog:31`代表保留31天的会话日志，保留天数设置为0时表示永久保留(此举会累积大量无用数据，不推荐)	|
| reserveDays | Retention days configuration for each log, parameter format: `log type: retention days`, for example: `sessionLog: 31` means to reserve session logs for 31 days, and if the retention days is set to 0, it means permanent retention (this will Accumulate a lot of useless data, not recommended) |

目前可配置的日志类型有：
The currently configurable log types are:

- `基础会话日志：sessionLog`，默认保留`31`天的日志。注意：因设备留存统计中最长需要统计30后的留存数据， 所以基础会话日志要至少保存`31`天的日志，否则会对设备留存统计造成影响。
- `Basic session log: sessionLog`, keep logs for `31` days by default. Note: Because the device retention statistics need to count the retained data after 30 days at the longest, the basic session logs must be stored for at least `31` days, otherwise the device retention statistics will be affected.
- `用户会话日志：userSessionLog`，默认保留`31`天的日志。注意：因用户留存统计中最长需要统计30后的留存数据， 所以用户会话日志要至少保存`31`天的日志，否则会对用户留存统计造成影响。
- `User session log: userSessionLog`, keep logs for `31` days by default. Note: Because the user retention statistics need to count the retained data after 30 days at the longest, the user session log must be kept for at least `31` days, otherwise it will affect the user retention statistics.
- `页面日志：pageLog`，默认保留`7`天的日志。
- `Page log: pageLog`, keep logs for `7` days by default.
- `事件日志：eventLog`，默认保留`7`天的日志。
- `Event log: eventLog`, keep logs for `7` days by default.
- `分享日志：shareLog`，默认保留`7`天的日志。
- `Share log: shareLog`, keep logs for `7` days by default.
- `错误日志：errorLog`，默认保留`7`天的日志。
- `Error log: errorLog`, keep logs for `7` days by default.

::: warning 注意事项
::: warning Notes
- 客户端和统计后台两个项目务必关联同一个服务空间，且uni-admin中所有云函数、公共模板等都已经上传部署到该服务空间
- The two projects of the client and the statistics background must be associated with the same service space, and all cloud functions, public templates, etc. in uni-admin have been uploaded and deployed to the service space
- 使用 uni 统计必须配置 APPID 才能正常使用。[DCloud的Appid有什么用，如需转让应用怎么做](https://ask.dcloud.net.cn/article/35907)
- To use uni statistics, APPID must be configured for normal use. [What is the use of DCloud's Appid, how to transfer the application](https://ask.dcloud.net.cn/article/35907)
- 应用在运行、调试时不会上报统计数据，仅在发行后，并启动新版的App、h5、小程序，才会上报数据。
- The application will not report statistical data during running and debugging. It will only report data after launching the new version of the app, h5, and MiniApp.
- 不支持 CLI 项目
- CLI projects are not supported
:::


## 扩展和自定义方式
## Extensions and customizations
uni统计提供了基础的数据报表，如不能达到预期的数据采集，可以在客户端通过 `uni.report(eventKey,param)`  自由上报数据 ，并通过 uni-admin 增加页面 ，自行统计数据。
uni statistics provides basic data reports. If the expected data collection cannot be achieved, you can freely report data through `uni.report(eventKey,param)` on the client side, and add pages through uni-admin to collect statistics by yourself.

### 前端 uni.report 基础用法 
### Basic usage of front-end uni.report

这里列出 `uni.report(eventKey,param)` 的基本用法，完整`API`查看：[详情](https://uniapp.dcloud.io/api/other/report.html)
The basic usage of `uni.report(eventKey,param)` is listed here, the complete `API` view: [Details](https://uniapp.dcloud.io/api/other/report.html)

`uni.report(eventKey,param)` 有两个参数。
`uni.report(eventKey,param)` takes two parameters.
- eventKey  自定义事件名称
- eventKey custom event name
- param		自定义事件参数
- param custom event parameter

``` js
// 参数支持字符串
// parameter supports string
uni.report('购买','购买成功')

// 参数支持对象
// parameter support object
uni.report('购买',{
	id:'1000',
	name:'上衣',
	price:'998',
	msg:'购买成功'
	// ...
})
```

### uni-admin 中使用自定义事件上报的数据
### Data reported using custom events in uni-admin
在 uni-admin 中新增页面，使用 [uniCloud API](https://uniapp.dcloud.io/uniCloud/clientdb#clientdb%E7%AE%80%E4%BB%8B) 获取所有 `uni-report` 上报的原始数据，数据存放于 [uni-stat-event-logs](https://gitee.com/dcloud/opendb/tree/master/collection/uni-stat-event-logs) 表中。
Add new page in uni-admin, use [uniCloud API](https://uniapp.dcloud.io/uniCloud/clientdb#clientdb%E7%AE%80%E4%BB%8B) to get all `uni-report` The reported raw data is stored in the [uni-stat-event-logs](https://gitee.com/dcloud/opendb/tree/master/collection/uni-stat-event-logs) table.

- 获取数据后，可以自行扩展所需业务逻辑
- After getting the data, you can expand the required business logic by yourself

```js
const db = uniCloud.database()
db.collection('uni-stat-event-logs')
```

不管是新上报的数据，还是[opendb](https://uniapp.dcloud.net.cn/uniCloud/opendb.html)的数据、或者开发者自己的业务数据库里的数据，都可以自己编写报表进行统计分析。
Whether it is the newly reported data, the data of [opendb](https://uniapp.dcloud.net.cn/uniCloud/opendb.html), or the data in the developer's own business database, you can write your own report Statistical Analysis.

与普通uni-app页面一样，新建页面，编写代码。
Like ordinary uni-app pages, create a new page and write code.

在`uni-admin`中注册左侧菜单时，需要参考文档：[uni-admin 左侧窗口-菜单栏](https://uniapp.dcloud.io/uniCloud/admin.html#%E5%B7%A6%E4%BE%A7%E7%AA%97%E5%8F%A3-%E8%8F%9C%E5%8D%95%E6%A0%8F)
When registering the left menu in `uni-admin`, you need to refer to the document: [uni-admin left window - menu bar](https://uniapp.dcloud.io/uniCloud/admin.html#%E5%B7% A6%E4%BE%A7%E7%AA%97%E5%8F%A3-%E8%8F%9C%E5%8D%95%E6%A0%8F)

## 版本升级 @upgrade
## Version upgrade @upgrade

`uni-admin1.9.0`版本开始（对应`HBuilderX 3.5.1`），`uni统计`和`uni升级中心`复用相同的应用版本表（即`opendb-app-versions`表） ，废弃原来的`uni-stat-app-versions`表。
`uni-admin1.9.0` version starts (corresponding to `HBuilderX 3.5.1`), `uni statistics` and `uni uni-upgrade-center center` reuse the same application version table (ie `opendb-app-versions` table), discard the original The `uni-stat-app-versions` table.

如果你已启用`uni统计2.0`，但使用的是老版本的`uni-admin`，则需注意版本表的迁移升级，否则基于版本的统计数据可能不准确。
If you have enabled `uni-statistics 2.0` but are using an older version of `uni-admin`, you need to pay attention to the migration and upgrade of the version table, otherwise the version-based statistics may be inaccurate.

升级步骤：
Upgrade steps:

1. 从插件市场更新`uni-admin`项目
1. Update the `uni-admin` project from the plugin market
2. 上传覆盖`uni-stat`公共模块
2. Upload overlay `uni-stat` public module
3. 重新上传覆盖所有的`DB Schema`
3. Re-upload overwriting all `DB Schema`
4. 将原`uni-stat-app-versions`表中的数据导入到`opendb-app-versions`表中；如下提供了一个代码片段，你可以创建一个云函数，将示例代码拷贝到云函数中，右键执行 “运行-本地云函数”，即可自动完成数据内容的迁移；
4. Import the data in the original `uni-stat-app-versions` table into the `opendb-app-versions` table; a code snippet is provided below, you can create a cloud function and copy the sample code to the cloud function , right-click to execute "Run - Local Cloud Function" to automatically complete the migration of data content;

```js
'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const oldVersionDataRes = await db.collection('uni-stat-app-versions')
		.aggregate()
		.lookup({
			from: 'uni-stat-app-platforms',
			localField: 'platform_id',
			foreignField: '_id',
			as: 'platform'
		})
		.limit(500)
		.end()

	if (oldVersionDataRes.data.length) {
		for (let oldKey in oldVersionDataRes.data) {
			//老版本表的数据
			// data of the old version table
			const oldVersionData = oldVersionDataRes.data[oldKey]
			
			//组装数据
			//Assemble data
			const newVersionData = {
				_id: oldVersionData._id,//_id 两个表数据要保持一致
				appid: oldVersionData.appid,//appid
				platform: [],//默认为空数组即可
				uni_platform: oldVersionData.platform[0].code,//平台代码
				type: 'native_app',//类型 默认为native_app即可
				version: oldVersionData.version,
				create_env: 'uni-stat',//创建来源，设置为uni-stat
				create_date: oldVersionData.create_time//创建时间
			}
			await db.collection('opendb-app-versions').add(newVersionData)
		}
	}
	
	return true
};
```

## uni统计2.0费用评测@cost

### 前言

近期，uniCloud阿里云版开始正式商用，部分开发者对基于uniCloud的`uni统计`等云端一体业务，开始纠结，不清楚这些业务预计会花费多少钱，不清楚相比传统服务器而言，何种方案性价比更好。

本文尝试算细账、算总账，以阿里云[按量计费](https://uniapp.dcloud.net.cn/uniCloud/price.html#aliyun-postpay)为例，详细预测`uni统计`在不同用户规模下的资源消耗及对应费用，帮助大家明智选择，无忧开发。

本文主要分为三个部分：

- `uni统计`消耗的资源费用测算
- `uni统计`给你带来的收益
- 综合考虑，你该如何选择

**uni统计 消耗的资源费用测算**

`uni统计`涉及费用的部分主要分为：
- 云函数：`uni统计`云函数，云函数有2个
	+ uni-stat-receiver 客户端数据上报函数（添加统计数据源）
	+ uni-stat-cron 数据跑批处理函数（生成统计数据）
- 云数据库：`uni-stat-`为前缀的表
- 前端网站托管：部署`uni-admin`，管理员发布新版本

接下来，我们对不同资源，分别进行费用评估。

### 云函数@cost-function

#### uni-stat-receiver

启用`uni统计`后，你的每一个在线用户默认每10秒会请求一次`uni-stat-receiver`云函数（如果你的日活在1万以上，可以改成60秒，可以减少费用。时间间隔可在manifest.json内设置，如果用户一直停留在一个页面，那么此时不会重复上报）

我们按照[uniCloud官网](https://uniapp.dcloud.net.cn/uniCloud/price.html#aliyun-postpay)列出的按量计费规则，计算一下云函数的资源消耗。

|资源分类			|资源细项							|售价（元）	|
|:-------:		|:----------------:		|:-------:	|
|云函数				|资源使用量（GBs）			|0.000110592|
|							|调用次数（万次）				|0.0133			|
|							|出网流量（GB）					|0.8				|
|云数据库			|容量（GB/天）					|0.07				|
|							|读操作数（万次）				|0.015			|
|							|写操作数（万次）				|0.05				|
|云存储				|容量（GB/天）					|0.0043			|
|							|下载操作次数（万次）		|0.01				|
|							|上传操作次数（万次）		|0.01				|
|							|CDN 流量（GB）				|0.18				|
|前端网站托管		|容量（GB/天）					|0.0043			|
|							|流量（GB）						|0.18				|

我们可以简单得出如下公式：

`云函数/云对象费用 = 资源使用量 * 0.000110592  + 调用次数 * 0.0133 / 10000 + 出网流量 * 0.8`

其中：
- 资源使用量 = 云函数内存（单位为G） * 云函数平均单次执行时长（单位为秒） * 调用次数
- 调用次数 = 应用日活 * 每日活用户平均每天上报次数

我们假设如下数据模型：

- 云函数运行内存：128M，即0.125G（云函数内存默认为512M，用户可以自定义设置，最低可设置为128M）
- 每日活用户平均每天上报次数：10 次
- 云函数平均单次执行时长：100毫秒，即0.1秒
- 单次请求出网流量：0.7 KB

按照如上公式，若有100个日活用户，其`uni统计`的`uni-stat-receiver`云函数每天的费用为：

```
云函数费用（天） = 资源使用量 * 0.000110592  + 调用次数 * 0.0133 / 10000 + 出网流量 * 0.8
				= 云函数内存（单位为G） * 云函数平均单次执行时长（单位为秒） * 调用次数 * 0.000110592 + 调用次数 * 0.0133 / 10000 + 出网流量（单位GB） * 0.8
				= 0.125 * 0.1 * (100 * 10) * 0.000110592 + (100 * 10) * 0.0133/10000 + (100 * 10) * (0.7 / 1024 / 1024) * 0.8
				= 0.001382 + 0.00133 + 0.000534
				≈ 0.0032（元）
```

即：你的App日活为100，使用`uni统计`商业版后，`uni-stat-receiver`云函数每天大概消耗0.0032元。

据此，可计算其每月的费用为：0.0032 * 30 ≈ 0.1，即日活为100时，每月`uni-stat-receiver`云函数只需0.1元。

同理，我们可推导出日活为1000、10000、10万的App，其`uni-stat-receiver`云函数每月费用如下表：

|  日活	| 资源使用量计费（元/日）	|	调用次数计费（元/日）	|  出网流量计费（元/日）	| 日合计（元/日）	|  月合计（元/月）	|	
| :----:| :-----------------:		|:-------------------:|:--------------------:	|:----------:		|:---------:			| 
|   100 |			0.001382					|			0.00133					|  0.000534							|    0.0032			|    0.10 				|
|  1000	|			0.01382						|			0.0133					|  0.00534							|    0.0325			|    0.98  				|
| 10000	|			0.1382						|			0.133						|  0.0534								|    0.3246			|    9.74					|
|100000	|			1.382							|			1.33						|  0.534								|    3.2460			|   97.38					|

#### uni-stat-cron

`uni统计`还有一个云函数`uni-stat-cron`，它是定时数据跑批任务，用来将上报的数据进行统计，生成统计报表。

我们假设如下数据模型：

- 云函数内存：512M，即0.5G（跑批云函数建议设置为512M，因为它每天只运行24次，内存越大，性能越强）
- 云函数平均单次执行时长：1秒（随着数据源越多，运行时间越长）
- 每日执行次数：24次（固定每小时运行1次）
- 出网流量：没有返回给客户端，固定为0

其`uni统计`的`uni-stat-cron`云函数每天的费用为：

```
云函数费用（天） = 资源使用量 * 0.000110592  + 调用次数 * 0.0133 / 10000 + 出网流量 * 0.8
				= 云函数内存（单位为G） * 云函数平均单次执行时长（单位为秒） * 调用次数 + 调用次数 * 0.0133 / 10000 + 出网流量 * 0.8
				= 0.5 * 1 * 24 * 0.000110592 + 24 * 0.0133/10000 + 0
				= 0.001327104 + 0.00003192 + 0
				≈ 0.0014（元）
```

即：你的App日活为100，使用`uni统计`商业版后，`uni-stat-receiver`云函数每天大概消耗0.0014元。

据此，可计算其每月的费用为：0.0014 * 30 ≈ 0.04，即日活为100时，每月`uni-stat-receiver`云函数只需0.04元。

同理，我们可推导出日活为1000、10000、10万的App，其`uni-stat-receiver`云函数每月费用如下表：

|  日活	|  平均耗时（秒）	| 资源使用量计费（元/日）	|  调用次数计费（元/日）	|  出网流量计费（元/日）	|   日合计（元/日）	|  月合计（元/月）	|
| :----:| :------:			|:-------------------:	|:-------------------:	|:-------------------:	|:---------:			| :--------:			| 
|   100	|   1						|      0.001327					|       0.00003192			|  0										|   0.0014				|  0.04						|
|  1000	|   3						|      0.003981					|       0.00003192			|  0										|   0.0040				|  0.12						|
| 10000	|  30						|      0.039813					|       0.00003192			|  0										|   0.0398				|  1.19						|
|100000	|  90						|      0.119439					|       0.00003192			|  0										|   0.1195				|  3.59						|

由于`uni-stat-cron`云函数不管多少日活，每日均只运行24次，故日活对其费用的影响很小（只影响了每次运行的时长）。

### 云数据库@cost-db

按照[uniCloud官网](https://uniapp.dcloud.net.cn/uniCloud/price.html#aliyun-postpay)介绍，云数据库费用 = `容量费用 + 读操作次数费用 + 写操作次数费用`，其中：

- 容量费用：数据库存储容量（单位为G） * 0.07
- 读操作次数费用：读操作次数（万次） * 0.015
- 写操作次数：写操作次数（万次） * 0.05

`uni统计`会产生大量的日志数据，但默认会有自动清除历史日志的策略，如：会话日志`31天前`的数据会被删除。

由于`uni统计`涉及数据库的情况非常复杂，我们通过对官方统计示例项目的实际运行数据得出以下结果：

日活为100的应用，`uni统计`数据库资源用量如下：

- 每日活用户平均每天上报次数：10 次
- 平均每次上报，需读取2次数据库，写入2次数据库（平均新增1.1条，修改0.9条），故新增插入1.1条记录，约0.54KB（注意：很多情况下上报可能没有数据新增，仅仅只是修改下会话日志数据。）

以上数据由官方统计示例项目计算得出。

故可得出以下数据模型：

- 日均云数据库容量：0.00052G（= 100 * 10 * 0.54 / 1024 / 1024）
- 日均云数据库读取次数：2000次（= 100 * 10 * 2）
- 日均云数据库写入次数：2000次（= 100 * 10 * 2）

因为数据源只保留31天，故稳定运行后，数据量容量一直会保持在31天的量。故下方公式中云数据库容量需要乘31

```
数据库费用（天） = 云数据库容量 * 31 * 0.07   + 读操作次数 * 0.015 / 10000 + 写操作次数 * 0.05/10000
				= 0.00052 * 31 * 0.07  + 2000 * 0.015/10000 + 2000 * 0.05/10000
				= 0.0011284 + 0.003 + 0.01
				≈ 0.0141（元）
```

即：如果你的`uni统计`业务日活为100，使用阿里云商业版云服务空间后，对应数据库每天大概消耗0.0141元。
据此，可计算其每月的费用为：0.0141 * 30 ≈ 0.42，即日活为100时每月云数据库只需0.42元。

|日活				|容量费（G）	|读操作次数费用（元/日）	|写操作次数费用（元/日）	|日合计（元/日）	|月合计（元/月）	|
| :--------:| :------:	|:---------------:		|:---------------:		|:----------:		|:----------:		|
|   100			|0.0011284	|		0.003						|		 0.01								| 0.0141				|  0.42					|
|  1000			|0.011284		|		0.03						|		 0.10								| 0.1413				|  4.24					|
| 10000			|0.11284		|		0.30						|		 1.00								| 1.4128				| 42.38					|
|100000			|1.1284			|		3.00						|		10.00								| 14.1284				|423.85					|

#### 云数据库搭配redis后费用对比

redis只影响数据库的读操作，通过官方统计示例项目使用redis的前后对比可知redis大概可以减少2/3的数据库读操作次数（等于减少2/3的数据库读次数费用）。

|日活				|读操作次数费用（元/月）（未开启redis）	|读操作次数费用（元/月）（开启redis）	|开启redis后每月减少的费用（元）	|
| :--------:|:------------------------------:		|:---------------------------:		|:-------------------:				|
|   100			|	 0.09															|		0.03													|  0.06												|
|  1000			|	 0.90															|		0.30													|  0.60												|
| 10000			|	 9.00															|		3.00													|  6.00												|
|100000			|	90.00															|	 30.00													| 60.00												|

由此可见，当日活低于10万时，redis减少的费用还不太明显。但当日活大于10万时，redis的作用越来越明显。

### 前端网页托管

`uni统计`需要和`uni-admin`配合使用，`uni-admin`需要部署在前端网页托管中。`uni-admin`主要是管理员使用，使用频次较少，流量也较低。

按照[uniCloud官网](https://uniapp.dcloud.net.cn/uniCloud/price.html#aliyun-postpay)介绍，前端网页托管费用 = `容量费 + 流量费`。

#### 容量费

`uni-admin`编译后为4.7M，按照官网每GB每天0.0043元的规则，`uni-admin`的月度容量费为：`4.7 / 1024 * 0.0043 * 30 = 0.00059`，不到1分钱，可忽略。

#### 流量费

管理员登录`uni-admin`，到`uni统计`管理页面浏览统计数据，所需流量不超过3M，即使每月发布2次更新，流量费预估为：`3 / 1024 * 0.18 * 2 = 0.00105`，也不到1分钱，也可忽略。

#### 前端网页托管总结

每月费用不到1分钱，可忽略。

### 费用合并@cost-total 

细项对比完了，我们来合并看看，使用`uni统计`，每月到底需要花多少钱。

|日活		    |云函数（元/月）	|云数据库（元/月）	|前端网页托管	（元/月）	|  月合计（元/月）	|
| :--------:| :--------:		|:-----------:		|:-----------------:	|:---------------:|
|   100	    |   0.14	  		|   0.42					|可忽略不计						|   0.56					|
|  1000		  |   1.10   			|   4.24					|可忽略不计						|   5.34					| 
| 10000	   	|  10.93				|  42.38					|可忽略不计						|  53.31					|  
|100000		  | 100.97	 			| 423.85					|可忽略不计						| 524.82					|

### uni统计 给你带来的收益

使用`uni统计`，免费获取、一键安装，你将获得：

**1. 全端**

全端流量统计，一张报表可查看所有端（iOS、Android、Web 及各家小程序）的运营数据。

无需在各端接不同的sdk、无需在不同报表看数据。目前市面已知唯一一个一张报表看遍业务全景的方案。

**2. 开源、免费、自由定制**

代码全部开源。采集什么数据可以自定义；跑批频率可以自定义（搞活动时实时统计都可以做到）；展示报表可以自定义。

**3. 私有部署、数据自控**

使用传统saas类统计产品，所有数据都上报给统计服务厂商。

`uni统计2.0`基于`uniCloud`实现，云函数、统计数据全部托管在开发者自己的服务空间（阿里云或腾讯云自选）中，开发者对自己的统计数据拥有完整的控制权。

**4. 有效的错误分析**

传统App统计平台，都没有js错误统计。开发者无法了解到自己的js代码在哪些设备上会报错。

uni统计的错误信息更全面，包括 js前端错误和 App 原生层的崩溃。

因为uni-app是编译后运行，传统web和小程序的统计平台，其js报错无法回溯到uni-app的编译前源码，报错看不懂。

uni统计支持sourcemap，可直观了解到底哪行代码写的有问题。[详见](https://uniapp.dcloud.net.cn/uni-stat-v2.html#sourcemap-parse-error)

**真实案例**

> [一个半月全端获客400万的真实例子](https://mp.weixin.qq.com/s?__biz=MzU3NTU5NDc0NA==&mid=2247491214&idx=1&sn=7e334d079146d9e31cea407f45bd8624&chksm=fd219719ca561e0f9a85b30017618eaf9551b46cdd6ecdf856bc4e47aee4ca93767fcf23147f&mpshare=1&scene=1&srcid=0713VwAOIuRllzMB6syoQssb&key=15a2b72b2464b4fe73325967f733ac332583d5db37f1812c63613c083a8f5921bca2ada2140d45e07657b062dc451f27cc48fe4fd298f6456f300895a90bd471480afdc2c8dc5a45254fb1dc48d3b79a&ascene=1&uin=MTkzNjMxMzU%3D&devicetype=Windows+10&version=62060833&lang=zh_CN&pass_ticket=xW6dPp%2F565g5S8hl1lz%2F8FLQBEzW6KUHyyqyHPdT2nk%3D)

### 总结@cost-summary

再次说回`uni统计`，通过上面的费用测算可得知，以日活1万来说，每个日活产生的一年的费用大概是6分钱到7分钱之间，这个费用已经是比较便宜的了。

目前市面上的统计如友盟统计也是收费的，在日活达到1万时，每年费用需要3109元/年（且这还只是web统计的费用，APP统计另算费用）。同时它还不是源码版本，代码不开源，无法随意定制。

而`uni统计`是全平台统计、代码开源、随意定制，这是三方统计平台做不到的。

再看回刚才的计算表，以日活1万来说，`uni统计`每年费用只需53.31*12=639.72元/年。

|日活		    |云函数（元/月）	|云数据库（元/月）	|前端网页托管	（元/月）	|  月合计（元/月）	|
| :--------:| :--------:		|:-----------:		|:-----------------:	|:---------------:|
|   100	    |   0.14	  		|   0.42					|可忽略不计						|   0.56					|
|  1000		  |   1.10   			|   4.24					|可忽略不计						|   5.34					| 
| 10000	   	|  10.93				|  42.38					|可忽略不计						|  53.31					|  
|100000		  | 100.97	 			| 423.85					|可忽略不计						| 524.82					|

不重复制造轮子，聚焦业务，快速验证模式，实现商业增长，才应该是聪明工程师的追求。

本篇评测共大家参考。

### 如何降低费用@savemoney

- 1.适当增大前端数据上报周期
因为默认是10秒上报一次。改成60秒一次就可以降低6倍的访问量。具体调整方式可参考上文[数据上报逻辑](#report-time)中有关前端数据上报周期的说明。
- 2.开启redis缓存
这也是目前降低`uni统计2.0`数据库查询次数最有效的方法。因为redis是按容量计费，读写次数再多也不会多花钱。redis开启方法可参上文[开启redis缓存](#开启redis缓存)。
- 3.关闭实时统计
实时统计指云端实时运算统计报表。但现实中大多数人只关心昨天的统计报表。只有今天要搞促销时才会实时关注数据报表。可以在日常配置为按天统计，在搞活动时再调整配置为实时统计。修改方法：将实时统计的配置项设置为关闭状态，然后重新上传配置中心（`uni-config-center`）到关联的服务空间即可。配置项说明可查看上文[公共模块配置项说明](#公共模块配置项说明)。

## 常见问题
## common problem

**1. 启动uni统计后，何时可以查看报表数据？**
**1. After starting uni statistics, when can the report data be viewed? **

答：与定时任务配置配置有关，默认`统计首页`、`今日概况`等数据为1小时后可见，其余数据为次日可见。要想详细了解各类型数据统计时间请参考[定时任务配置说明](#定时任务配置说明)。
A: It is related to the configuration of timed tasks. By default, data such as `Statistics Home` and `Today's Overview` are visible after 1 hour, and the rest of the data are visible the next day. To learn more about the statistical time of various types of data, please refer to [Scheduled Task Configuration Instructions](#%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1%E9%85%8D% E7%BD%AE%E8%AF%B4%E6%98%8E).

**2. 已经开启统计，定时任务配置也正常，但是后台还是看不到数据**
**2. Statistics have been turned on, and the scheduled task configuration is normal, but the data is still not visible in the background**

答：
answer:
- 确保分清楚，业务App 和 admin 是2个工程。业务App是采集端，admin是报表端
- Make sure to distinguish clearly, business app and admin are 2 projects. The business app is the collection end, and the admin is the report end
- 确保使用HBuilderX 3.4.14+。如果是cli创建的项目，需要升级cli到uni-app 3.4.14+
- Make sure to use HBuilderX 3.4.14+. If it is a project created by cli, you need to upgrade cli to uni-app 3.4.14+
- 确保在需要统计的业务App工程的manifest里勾选了开启 uni统计2.0，并关联和正确的uniCloud服务空间
- Make sure that Enable uni Statistics 2.0 is checked in the manifest of the business App project that needs statistics, and associate with the correct uniCloud service space
- 确保重新发行过业务App（在HBuilder里发行即可，不需要上架应用商店或小程序商店），数据上报只发生在项目发行后或者运行项目开启了调试模式，其他情况不会上报数据。[详情](#report-time)
- Make sure that the business app has been re-issued (you can issue it in HBuilder, you don't need to put it on the App Store or MiniApp Store). Data reporting only occurs after the project is released or the debug mode is enabled for running the project. In other cases, data will not be reported. [Details](#report-time)
- 确保`uni-admin`项目的`uniCloud`目录下的云函数都上传到了与App相同的uniCloud服务空间
- Make sure that the cloud functions in the `uniCloud` directory of the `uni-admin` project are uploaded to the same uniCloud service space as the App
- 在[uniCloud web控制台](https://unicloud.dcloud.net.cn/)的云函数日志中，可以看到`uni-stat-receiver`云函数有正确的请求日志
- In the cloud function log of [uniCloud web console](https://unicloud.dcloud.net.cn/), you can see that the `uni-stat-receiver` cloud function has the correct request log
- 在[uniCloud web控制台](https://unicloud.dcloud.net.cn/)的云函数日志中，可以看到`uni-stat-cron`云函数有定时执行日志，且日志显示执行成功；如日志中显示`Not Found the cofnig file`，则查看下方第6个问题；
- In the cloud function log of [uniCloud web console](https://unicloud.dcloud.net.cn/), you can see that the `uni-stat-cron` cloud function has a regular execution log, and the log shows that the execution is successful ;If `Not Found the cofnig file` is displayed in the log, check the sixth question below;
- 如需看`uni-admin`这个管理端的统计数据，才需要在`uni-admin`工程的`manifest`里配置`uni统计2.0`并再次发行。再次强调不要搞混业务App和admin
- If you want to see the statistics of the management side of `uni-admin`, you need to configure `uni statistics 2.0` in the `manifest` of the `uni-admin` project and issue it again. Again, don't confuse business App and admin

**3. 如何判断是否需要配置分钟级定时任务？**
**3. How to determine whether a minute-level scheduled task needs to be configured? **

答：一般情况下是不需要自行配置的，但如果`定时任务云函数（uni-stat-cron）`出现运行超时的情况时，就要考虑去开启分钟级定时任务了。
Answer: Generally, you do not need to configure it yourself, but if the time-out occurs in the `Scheduled Task Cloud Function (uni-stat-cron)`, you should consider enabling the minute-level scheduled task.

**4. 如何创建或授权`uni统计`运营管理员账号**
**4. How to create or authorize `uni statistics` operation administrator account**

答：参考[uni-admin 给系统创建多个登录账户并设置不同的权限](https://uniapp.dcloud.net.cn/uniCloud/admin.html#mutiladmin)
A: Refer to [uni-admin creates multiple login accounts for the system and sets different permissions](https://uniapp.dcloud.net.cn/uniCloud/admin.html#mutiladmin)

**5. 为什么总设备数比活跃设备数少？**
**5. Why is the total device count less than the active device count? **

答：总设备数计算公式为：总设备数 = 原设备数 + 新设备数，而判断一个设备是否为新设备的依据是在客户端SDK中是否已储存该设备上次访问某一应用的时间，未存储则认为是该应用的新设备(即lvts=0时为新设备，lvts>0时为老设备)。 因此如果之前某一设备已经访问过某一应用，就算此时清除数据库中的数据，由于已经在客户端SDK中储存该设备上次访问应用的时间（即此时lvts > 0），所以该设备也不会再被认为是该应用的新设备从而不会再被计算进该应用的总设备数中而只会计算进活跃设备数中，此时可能就会出现总设备数小于活跃设备数的情况。

**6. uni-stat-cron运行日志显示 Not Found the cofnig file** 
**6. The uni-stat-cron log shows Not Found the cofnig file**

业务App 和 admin 是2个工程。业务App是采集端，admin是报表端；这两个项目均包含`uni-config-center`；如果这两个项目关联（复用）相同的服务空间时，很容易出现`uni-config-center`的互相覆盖问题；此时建议单点维护，方案有2种：
Business App and admin are 2 projects. The business app is the collection end, and the admin is the report end; both projects contain `uni-config-center`; if these two projects are associated (multiplexed) with the same service space, it is easy to appear `uni-config-center` `The mutual coverage problem; at this time, it is recommended to maintain a single point, there are 2 solutions:
- 以业务App为主：将`uni-admin`项目中`uni-config-center` 下面的`uni-stat`文件夹，复制到业务App项目下的`uni-config-center`目录下，然后重新上传业务App项目下的`uni-config-center`公共模块即可。
- Focus on business apps: copy the `uni-stat` folder under `uni-config-center` in the `uni-admin` project to the `uni-config-center` directory under the business app project, and then Just re-upload the `uni-config-center` public module under the business App project.
- 以`uni-admin`为主：将业务App项目下的`uni-config-center`，手动合并配置项到`uni-admin`项目下的`uni-config-center`中（注意：是手动合并配置项，不要整体覆盖文件），然后重新上传`uni-admin`项目下的`uni-config-center`公共模块即可。
- Mainly based on `uni-admin`: Manually merge the configuration items under the `uni-config-center` under the business App project into the `uni-config-center` under the `uni-admin` project (Note: manual Merge the configuration items, do not overwrite the file as a whole), and then re-upload the `uni-config-center` public module under the `uni-admin` project.

## 参考资料
## References

不掌握如下文档，很难对 `uni统计2.0` 吃透和做二次开发
Without mastering the following documents, it is difficult to understand and do secondary development of `uni statistics 2.0`
- uni-admin文档：[详见](https://uniapp.dcloud.net.cn/uniCloud/admin.html)
- uni-admin documentation: [see details](https://uniapp.dcloud.net.cn/uniCloud/admin.html)
- uni-id文档：[详见](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html)
- uni-id documentation: [see details](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html)
- opendb文档：[详见](https://uniapp.dcloud.net.cn/uniCloud/opendb.html)
- opendb documentation: [see details](https://uniapp.dcloud.net.cn/uniCloud/opendb.html)
