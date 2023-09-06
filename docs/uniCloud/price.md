## 概述
## Overview

1. uniCloud为每个开发者提供一个免费的服务空间，更低门槛
1. uniCloud provides each developer with a free service space, lower threshold
2. 按量付费是serverless的特色，如果没有消耗硬件资源，就完全不用付款
2. Pay-as-you-go is a feature of serverless. If you don’t consume hardware resources, you don’t need to pay at all.
3. serverless比传统的云主机更便宜
3. Serverless is cheaper than traditional cloud hosting
4. 传统云主机一旦被攻击，高防价格非常昂贵。而uniCloud无需支付高防费用，不惧DDoS攻击。
4. Once the traditional cloud host is attacked, the high defense price is very expensive. And uniCloud does not need to pay high defense fees, and is not afraid of DDoS attacks.

uniCloud的定价、套餐内容、服务SLA，是由云厂商直接公布的。DCloud公司不会加价。uniCloud已经上线近3年，DCloud一直以良心方式服务开发者，努力降低应用的开发门槛、提高应用的开发效率。
- 选择阿里云作为服务商时，有一个免费服务空间。更多服务空间需要付费，付费支持套餐和按量两种模式。
- 选择腾讯云作为服务商时，需付费购买套餐，用量超出套餐后可开启按量计费，详情参考[腾讯云基础套餐](uniCloud/price?id=tencent-package)。

付费用户享受阿里云和腾讯云提供的服务协议SLA，[详见](https://uniapp.dcloud.net.cn/uniCloud/agreement)
Paid users enjoy the service agreement SLA provided by Alibaba Cloud and Tencent Cloud, [see details](https://uniapp.dcloud.net.cn/uniCloud/agreement)

## 阿里云@aliyun
## Aliyun@aliyun

## 阿里云正式版@aliyun-business

> 阿里云正式版版需要使用HBuilderX 3.6.5+（正式版）或3.6.10+（Alpha版）或与此版本对应的uni-app cli项目才可正常使用。如果是cli创建的项目，可以参考：[更新依赖到指定版本](/quickstart-cli.html#cliversion)

阿里云提供1个免费空间，付费空间提供包月、按量计费两种计费方式，具体说明如下：

|计费方式	|付费方式										|超限策略																							|详情													|
|:-:		|:-:											|:-:																								|:-:													|
|包年包月	|购买包年包月套餐，每月金额和可用量上限固定。		|某资源超过套餐额度时会提前停止该资源使用，下个月恢复，亦可及时升配和转按量			|参考 [阿里云包月套餐](uniCloud/price?id=aliyun-package)|
|按量计费	|先充值，根据使用量扣余额，每日结算。不用的余额可退	|余额不足会停服，充值后恢复。亦可额外设置某资源指标的阈值，超阈值停用该资源 [详见](#aliyun-postpay-quota)	|参考 [阿里云按量计费](uniCloud/price?id=aliyun-postpay)|

包年包月套餐，适于业务稳定、套餐资源使用均衡的场景。

如果你难以预估会消耗多少云资源，或者业务波峰波谷变化较大，或者套餐中某些项目不够用、某些项目又用不完，此时推荐使用按量计费。

### 免费服务空间

阿里云为每个账号提供了1个免费服务空间，以方便产品开发测试及体验。具体额度请阅读下方[包年包月套餐](uniCloud/price.md?id=aliyun-package)中的开发者版。

**免费额度注意事项：**
- 阿里云免费服务空间有效期默认一个月，到期时需主动续期（到期前15天可续），不续期会被停服释放
- 免费空间可以升配或转为按量计费。此时免费额度会释放，该账户仍可再创建一个免费空间
- 免费空间如需升配包月套餐，只能针对剩余有效期进行操作，比如距离有效期结束还有7天，升配时需先为这7天升配套餐，7天后再按整月续费。

### 包年包月套餐@aliyun-package
|资源分类		|资源细项				|免费版	|基础版	|标准版	|专业版	|企业版	|旗舰版	|
|:-:			|:-:					|:-:	|:-:	|:-:	|:-:	|:-:	|:-:	|
|云函数	#{rowspan=3}		|资源使用量（GBs/月）	|1000	|1万	|20万	|40万	|150万	|400万	|
|调用次数（万次/月）	|1.5	|15		|300	|600	|2400	|6000	|
|出网流量（GB/月）		|1		|1		|20		|40		|160	|500	|
|云数据库	#{rowspan=3}		|容量（GB）				|2		|2		|3		|5		|10		|10		|
|读操作使用量（万RU/天）|0.05	|5		|25		|50		|150	|500	|
|写操作使用量（万WU/天）|0.03	|3		|15		|30		|100	|300	|
|集合数量				|100	|100	|100	|100	|100	|100	|
|索引数量				|400	|400	|400	|400	|400	|400	|
|云存储	#{rowspan=4}		|容量（GB）				|5		|8		|10		|50		|100	|500	|
|下载操作次数（万次/月）|0.2	|10		|200	|750	|1500	|3750	|
|上传操作次数（万次/月）|0.1	|5		|100	|300	|600	|1500	|
|CDN流量（GB/月）		|1		|2		|10		|50		|150	|500	|
|前端网页托管 #{rowspan=2}|容量（GB）				|5		|8		|10		|50		|100	|500	|
|CDN流量（GB/月）		|1		|2		|10		|50		|150	|500	|
|售价（元/月）#{colspan=2}	|免费	|5		|24		|82		|316	|688	|

- GBs、RU、WU等单位释义，[见下](#aliyun-quota-description)
- 套餐中的资源超标后服务空间会停服，需要及时升配或转按量计费才能恢复。
- After the resources in the package exceed the standard, the service space will be suspended, and it needs to be upgraded in time or converted to pay-as-you-go to recover.

- 包月套餐的服务空间，有如下可用操作：
	* 续费：时间到期前继续付费购买更长时间。到期后、销毁释放前，可以续费挽回。
	* 升配：将低档资源套餐升配为高档套餐。到期后不能操作。暂不支持降配。
	* 转按量：将包年包月套餐方式转为按量计费方式。见下。

#### 包年包月套餐转按量计费@change-to-postpay

包年包月套餐支持转换按量计费，如果是付费套餐，转换后会按照剩余有效期核算退费金额并自动退费到uniCloud阿里云账号余额，以用于按量计费账单扣费。

**注意：** 按量计费不支持转换为包年包月，该操作不可逆，请谨慎操作。


### 按量计费@aliyun-postpay

按量计费，意味着不是每个月支付固定费用，而是根据使用量付费。
Pay-as-you-go means that instead of paying a flat fee every month, you pay for what you use.

按量付费需要预存余额，每日根据前一日资源消耗生成账单，从阿里云预存余额中扣除。

如果预存余额不足，则服务空间将不可用，需要立即充值。
If the pre-stored balance is insufficient, the service space will not be available and needs to be recharged immediately.

阿里云按量计费服务空间定价如下：
Alibaba Cloud pay-as-you-go service spaces are priced as follows:

|资源分类		|资源细项				|售价（元）	|
|:-:			|:-:					|:-:		|
|云函数 #{rowspan=3}|资源使用量（GBs）		|0.000110592|
|调用次数（万次）		|0.0133		|
|出网流量（GB）			|0.8		|
|云数据库 #{rowspan=3}|容量（GB/天）			|0.07		|
|读操作使用量（万RU）	|0.015		|
|写操作使用量（万RU）	|0.05		|
|云存储 #{rowspan=4}|容量（GB/天）			|0.0043		|
|下载操作次数（万次）	|0.01		|
|上传操作次数（万次）	|0.01		|
|CDN 流量（GB）			|0.18		|
|前端网站托管 #{rowspan=2}|容量（GB/天）			|0.0043		|
|流量（GB）|0.18		|

**注意**
- GBs、RU、WU等单位释义，[见下](#aliyun-quota-description)
- 按量计费是延迟结算，可能存在前一日消耗大于余额导致欠费的情况。故创建按量付费服务空间时，需支付**保证金**，以确保欠费后开发者会缴纳欠费。如果您不再使用uniCloud的按量付费空间，可以申请退还保证金（发送邮件到service@dcloud.io）。

##### 按量计费每日资源上限设置@aliyun-postpay-quota

如您担心按量计费会造成不可控的费用上升，也可以为各项资源设置用量上限。

资源上限可在[web控制台](https://unicloud.dcloud.net.cn/)服务空间详情进行设置，该设置实时生效。

每项资源指标的`数据更新延迟时间`不同，当数据更新且某项资源用量超过阈值时，则该项服务便会**单独停用**。

资源阈值设置支持以下十二项资源指标：

|资源分类		|资源细项		|最小值		|数据更新延迟时间	|
|:-:			|:-:			|:-:		|:-:				|
|云函数 #{rowspan=3}|资源使用量		|1万GBs/日	|20分钟				|
|调用次数		|1万次/日	|20分钟				|
|出网流量		|1GB/日		|20分钟				|
|云数据库 #{rowspan=3}|容量			|1GB		|1小时				|
|读操作使用量	|1万RU/日	|20分钟				|
|写操作使用量	|1万WU/日	|20分钟				|
|云存储 #{rowspan=4}|容量			|1GB		|6小时				|
|下载操作次数	|1万次/日	|6小时				|
|上传操作次数	|1万次/日	|6小时				|
|CDN 流量		|1GB/日		|6小时				|
|前端网站托管 #{rowspan=2}|容量			|1GB		|6小时				|
|流量|1GB/日		|6小时				|

上述指标，容量是累计的，其他单位则是按日的。

例如，设置了每日云存储下载次数不能超过1万次。如某日该超过该下载次数，则在超过的6小时后停止云存储的下载功能。同时不影响其他资源指标的使用。

**注意**
- 资源上限设置针对的是每日用量，当日用量超设置的上限便会停服，受`数据更新延迟时间`影响，在停服时资源用量可能会超出所设阈值。
- 资源上限设置实时生效，如果设置的阈值已超当时的用量，则会实时停服。每小时最多可操作三次。

### 各项资源释义说明@aliyun-quota-description

|资源分类		|资源细项			|说明																																											|数据更新延迟时间	|
|:-:			|:-:				|:-:																																											|:-:				|
|云函数 #{rowspan=3}|资源使用量（GBs）	|资源使用量GBs = 函数配置内存GB × 运行计费时长s。 例如，配置为256MB的函数，单次运行了1760ms，计费时长为1760ms，则单次运行的资源使用量为(256 / 1024) × (1760 / 1000) = 0.44GBs	|20分钟				|
|调用次数			| -																																												|20分钟				|
|出网流量（GB）		|在云函数中访问外网时产生的出网流量，包含请求三方服务器发送的数据和返回给客户端的数据。																						|20分钟				|
|云数据库 #{rowspan=3}|容量（GB）			| -																																												|1小时				|
|读操作使用量（RU）	|读操作使用量（Read Unit）= ceil(查询数据量KB / 4)，即从数据表中读取一条4 KB数据（向上取整）计作1RU，例如读取7.6 KB的数据计作2RU。												|20分钟				|
|写操作使用量（WU）	|写操作使用量（Write Unit）= ceil(写入数据量KB / 1)，即向数据表中写入一条1 KB数据（向上取整）计作1WU，例如写入1.8 KB的数据计作2WU。											|20分钟				|
|云存储 #{rowspan=4}|容量（GB）			| -																																												|6小时				|
|下载操作次数		|通过CDN加速访问的次数，回源次数暂不收费。																																	|6小时				|
|上传操作次数		|  -																																											|6小时				|
|CDN 流量（GB）		|通过CDN加速产生的流量，回源流量暂不收费。																																		|6小时				|
|前端网站托管 #{rowspan=2}|容量（GB）			| -																																												|6小时				|
|CDN 流量（GB）		|通过CDN加速产生的流量，回源流量暂不收费。																																		|6小时				|

**补充**

- 云函数实际执行时间精确到ms。运行内存默认为512M，可以在云函数package.json中调整。优化代码，降低云函数运行时间，有助于减少GBs的费用。
- 数据库写操作使用量包含对数据的增、删、改。创建表及索引不计算写操作使用量。
- web控制台导入导出数据功能，不计算读写操作使用量；导出`db_init.json`计算读操作使用量，执行`db_init.json`计算写操作使用量。
- updateAndReturn操作只计算写操作使用量，不计算读操作使用量。
- clientDB底层也是基于云函数实现，也会消耗云函数调用次数。

### 现阶段系统限制@aliyun-system-limit

因上游储备不足，目前uniCloud阿里云版仍有一些限额。DCloud会持续推动限额的解除。目前有需求的开发者需向DCloud人工联系申请提高限额。
Due to insufficient upstream reserves, there are still some quotas for the uniCloud Alibaba Cloud version. DCloud will continue to promote the lifting of the limit. Developers currently in need need to contact DCloud manually to apply for an increase in the limit.

|资源分类	|限制项																			|限额	|
|---			|---																				|---	|
|云函数 #{rowspan=12}|callFunction请求QPS												|1000	|
|url化请求QPS（自定义域名）									|1000	|
|url化请求QPS（默认域名）										|1000	|
|固定IP代理请求QPS													|20		|
|最大实例数																	|300	|
|函数数量限制																|48		|
|客户端请求最大超时时间											|60秒	|
|固定IP代理请求最大超时时间									|5秒	|
|定时任务单次最大运行时间										|600秒|
|定时任务最小执行间隔												|1分钟|
|callFunction请求体最大限制									|6M		|
|url化请求体最大限制												|1M		|
|数据库 #{rowspan=7}|QPS																				|1000	|
|并发执行数																	|100	|
|单次请求超时时间														|5秒	|
|集合数量																		|100	|
|索引数量																		|400	|
|单次请求获取的最大数据条数（limit）				|1000	|
|事务超时时间（从事务开始到事务提交或回滚）	|10秒	|
|云存储 #{rowspan=3}|上传QPS																		|300	|
|删除QPS																		|300	|
|查询QPS																		|300	|

目前单个账号可创建20个正式版服务空间，如有更多需求需发邮件到service@dcloud.io申请。此外云函数数量限制、集合数量限制也可申请提升。邮件模板见下方：[申请解除限制邮件模板](#apply-email-template)

### 申请解除限制邮件模板@apply-email-template

```md
邮件标题：云函数数量限制提升申请 | 服务空间数量限制提升申请 | 集合数量限制提升申请 | 云函数域名代理需求申请

邮件内容：

客户账号：uniCloud.dcloud.net.cn 登录账号(就是HBuilderX账号)
服务空间id：mp-xxxxxxx (注意不是服务空间名称而是id)
客户名称：当前账号认证的公司名称
负责人电话：
申请内容：申请提升 云函数数量限制 | 服务空间数量限制 | 集合数量限制 | 将www.xxx.com纳入云函数的域名代理中
业务场景：
业务规模：
```

### 其他说明

**云存储数据处理**：图片裁剪、视频截帧等功能。现阶段免费，但不排除后续收费可能。

### 欠费停服及资源销毁说明

- 套餐指标超限：
- Package index exceeded:
包月套餐各项资源用量如有指标超上限时，该项指标服务便会停服，其他服务不受影响。比如云存储CDN流量超套餐上限，则云存储文件无法访问，其他服务正常。如需恢复，可升级套餐来获取更高套餐额度或转换为按量计费，升配或转按量计费后，资源恢复大约有10分钟左右延迟。
If the usage of various resources of the monthly package exceeds the upper limit, the service of the target will be suspended, and other services will not be affected. For example, if the cloud storage CDN traffic exceeds the upper limit of the plan, the cloud storage files cannot be accessed, and other services are normal. If you need to restore, you can upgrade the package to obtain a higher package quota or switch to pay-as-you-go. After upgrading or switching to pay-as-you-go, resource recovery will be delayed for about 10 minutes.

- 套餐到期停服：
- Stop service when package expires:
包月套餐在到期当天的0点10分左右开始停服，停服后服务空间无法正常使用，资源会保留15天。15天内操作续费服务恢复正常（续费后大约有10分钟左右延迟），未续费则会被销毁且无法找回。
The service of the monthly package will be suspended at around 00:10 on the day of expiration. After the service is suspended, the service space cannot be used normally, and the resources will be reserved for 15 days. The operation renewal service will return to normal within 15 days (there will be a delay of about 10 minutes after the renewal), and the non-renewal will be destroyed and cannot be retrieved.

- 余额欠费停服：
- Suspension of service due to overdue balance:
按量计费空间没有到期时间，是在账户欠费时开始停服。阿里云在每天上午9点左右出前一日账单，出账后如果账户发生欠费，按量计费服务空间则会被停服无法正常使用，资源会保留15天。15天内操作余额充正服务恢复正常（续费后大约有10分钟左右延迟），15天后会销毁空间资源且无法找回。
The pay-as-you-go space has no expiration date, and the service will be suspended when the account is in arrears. Alibaba Cloud issues the previous day's bill at around 9 am every day. If the account is in arrears after the bill is issued, the pay-as-you-go service space will be suspended and cannot be used normally, and the resources will be reserved for 15 days. Within 15 days, the operation balance recharge service will return to normal (there will be a delay of about 10 minutes after the renewal), and the space resource will be destroyed after 15 days and cannot be retrieved.

### 阿里云公测版@aliyun-public
### Alibaba Cloud Public Beta @aliyun-public

阿里云公测版已于2022年11月15日公告，于21日停止新建，于2023年1月22日下线。详见：[https://ask.dcloud.net.cn/article/40144](https://ask.dcloud.net.cn/article/40144)

#### 公测版迁移正式版@aliyun-beta-to-aliyun-biz

阿里云提供了公测版一键迁移到正式版的功能。执行一键迁移后云存储、云函数、数据库都会被迁移到新服务空间。迁移过程中云函数、数据库均可正常访问，云存储无法写入（删除或上传文件）,
详见：[阿里云公测版迁移正式版](uniCloud/aliyun-migrate-business.md)


## 腾讯云@tencent
## Tencent Cloud @tencent

**使用腾讯云Nodejs12版本时，务必仔细阅读此文档：[keepRunningAfterReturn](uniCloud/cf-functions.md?id=keep-running)**
**Be sure to read this document carefully when using Tencent Cloud Nodejs12 version: [keepRunningAfterReturn](uniCloud/cf-functions.md?id=keep-running)**

腾讯云于2022年8月12日更新了计费方式。

新计费模式下，统一采用**基础套餐+按量计费**的模式，开发者可先购买带有一定配额的基础套餐，超出套餐配额部分按使用量付费。
Under the new billing model, the model of **basic package + pay-as-you-go** is uniformly adopted. Developers can purchase a basic package with a certain quota first, and the portion exceeding the quota of the package will be charged according to the usage.

### 基础套餐@tencent-package
### Basic Package @tencent-package

| 配额				| 个人版			| 入门版| 初创版	| 商用版	| 团队版	| 单位		|
| ---				| ---				| ---	| ---		| ---		|  ---		| ---		|
| QPS				| 500				| 500	| 500		| 800		| 1000		| -			|
| 调用次数			| 20				| 500	| 1000		| 2000		| 5000		| 万次/月	|
| 容量				| 2					| 30	| 100		| 200		| 300		| GB		|
| 集合数量限制				| 300					| 300	| 300		| 300		| 300		| 个		|
| 云函数资源使用量	| 10				| 30	| 45		| 60		| 100		| 万GBs/月	|
| 云函数出网流量		| 2					| 8		| 10		| 15		| 25		| GB/月		|
| 云函数数量限制		| 150				| 150	| 150		| 150		| 150		| 个		|
| CDN流量			| 5					| 80	| 200		| 400		| 600		| GB/月		|
| CDN回源流量		| 5					| 40	| 100		| 200		| 300		| GB/月		|
| 价格				| **~~39.9~~ 19.9**	| **99**| **299**	| **499**	| **999**	| 元/月		|

1. 个人版5折折扣至少延续至2022年底，后续折扣如有变化将另行通知。
2. **调用次数**：包含云存储上传、下载操作；数据库读、写操作；云函数调用次数。
3. **QPS**：和调用次数类似，包含云存储上传、云存储下载、数据库读、数据库写、云函数调用的QPS
4. **容量**：包含云存储、数据库容量。
5. **CDN流量**、**CDN回源流量**：仅包含云存储，不含前端网页托管
6. 开通基础套餐时可以选择是否允许超量，开启后如果用量超出套餐配额将按照按量付费定价进行收费
7. 套餐在有效期内可进行续费、升配，到期当天可降配，到期后只可续费
8. 前端网页托管开通后即为按量计费，不管服务空间有没有开启允许超量使用，前端网页托管计费参考[高级功能按量计费](#tencent-advanced)

**关于计费项的额外说明**
**Additional Notes on Billing Items**

- 创建表、索引均计算一次写入
- Creation of tables and indexes counts as one write
- updateAndReturn操作只计算写次数，不计算读次数
- The updateAndReturn operation only counts the number of writes, not the number of reads
- 云函数出网流量包含请求三方服务器发送的数据和返回给客户端的数据
- The outbound traffic of the cloud function includes the data sent by the third-party server and the data returned to the client
- clientDB底层也是基于云函数实现，也会消耗云函数调用次数
- 腾讯云云函数资源使用量GBs的计算方式为，云函数设置的运行内存*云函数实际执行时间，执行时间以100ms为阶梯向上取整

### 超套餐后按量付费/超量使用定价@tencent-postpay

| 计费项			| 定价				|
| Billing Items | Pricing |
| ---				| ---				|
| 调用次数			| 0.5元/万次		|
| Number of calls | 0.5 yuan/10,000 times |
| 容量				| 0.1元/GB/天		|
| Capacity | 0.1 yuan/GB/day |
| 云函数资源使用量	| 0.00011108元/GBs	|
| Cloud function resource usage | 0.00011108 yuan/GBs |
| 云函数外网出流量	| 0.8元/GB			|
| Cloud function external network traffic | 0.8 yuan/GB |
| CDN流量			| 0.21元/GB			|
| CDN traffic | 0.21 yuan/GB |
| CDN回源流量		| 0.15元/GB			|
| CDN back-to-source traffic | 0.15 yuan/GB |


### 高级功能按量计费定价@tencent-advanced
### Premium Features Pay-As-You-Go Pricing @tencent-advanced

以下条目的消耗不属于套餐内资源，会从账号的腾讯云余额进行扣除。
The consumption of the following items does not belong to the resources in the package, and will be deducted from the Tencent Cloud balance of the account.

| 计费项		|计费项			|定价				|
| Billing Items |Billing Items |Pricing |
| ---			| ---			|---				|
|前端网页托管 #{rowspan=2}|容量			|0.005元/GB/天		|
|流量			|0.21元/GB			|
|日志服务 #{rowspan=6}|标准索引存储	|0.0115元/GB/日		|
|标准日志存储	|0.0115元/GB/日		|
|标准索引流量	|0.35元/GB/日		|
|写流量			|0.18元/GB/日		|
|请求次数		|0.15元/百万次/日	|
|分区数量		|0.04元/个/日		|

- 在正式进行计费方式切换之日起，用户将不可继续续费或新购旧版套餐或按量计费服务空间。用户可选择是否切换新的计费方式，超时（2022.09.08）切换的服务空间将会停服释放。
- From the date when the billing method is officially switched, the user will not be able to continue to renew or purchase new packages of the old version or pay-as-you-go service space. Users can choose whether to switch to the new billing method, and the service space switched after timeout (2022.09.08) will be stopped and released.
- 新计费下腾讯云云函数日志保存时长为7天
- Under the new billing, Tencent Cloud's cloud function logs will be saved for 7 days

**注：当包年包月服务空间升级新套餐时，如果已开通前端网页托管，则前端网页托管会自动转为按量计费，请确保账号余额充足！**
**Note: When the annual and monthly service space is upgraded to a new package, if the front-end web hosting has been activated, the front-end web hosting will be automatically converted to metered billing, please ensure that the account balance is sufficient! **

### 欠费停服及资源销毁
### Suspension of service due to arrears and destruction of resources

套餐到期第二天服务空间会进入隔离状态，服务空间不可用，资源会保留7天。7天内操作续费服务恢复正常（续费后大约有10分钟左右延迟），7天后会销毁空间资源且无法找回。
The service space will enter the isolation state on the second day after the package expires, the service space will be unavailable, and the resources will be reserved for 7 days. The operation renewal service will return to normal within 7 days (there will be a delay of about 10 minutes after the renewal), and the space resource will be destroyed after 7 days and cannot be retrieved.

当腾讯云按量余额欠费时，服务空间的`云函数日志`及`超限按量`将会自动关闭。如果服务空间套餐资源已超上限，则服务将会停服不可用。腾讯云按量余额充正后需手动开启相关服务。

## 余额及保证金@balance
## Balance and Margin @balance

按量计费时，涉及余额和保证金的概念。包年包月不涉及这2个概念。

余额指开发者使用按量计费时提前充值的金额，发生资源消耗后，会从余额里扣除。

余额分为阿里云余额和腾讯云余额。2个余额不通用，比如腾讯云的余额，在开发者充值后直接转到了腾讯的收款账户里，由腾讯云计费和停服。

因按量扣费不是实时，而是隔天，所以可能出现某天消耗过大、余额不足以支付昨日账单的情况。此时就发生了欠费。

开发者欠费时，DCloud仍需要向云厂商缴纳欠费。所以为了避免开发者不缴纳欠费，DCloud收取了200元保证金。

当开发者不再使用按量计费时，保证金可退还。

余额充值后不支持退款，**余额不支持购买包年包月套餐，请根据业务使用量合理选择充值金额**。

腾讯云余额可用于服务空间套餐资源用尽后`超限按量`、前端网页托管等服务产生的费用。
The balance of Tencent Cloud can be used for the expenses incurred by services such as "over-limit and on-demand", front-end web hosting and other services after the service space package resources are exhausted.
腾讯云的套餐资源用完后，当前空间若开启了`超限按量`功能，则会使用按量计费规则对前一日资源用量进行计费，并并从腾讯云余额中扣除。当前空间若未开启了`超限按量`功能，则会触发停服操作。
After Tencent Cloud's package resources are used up, if the current space has the function of "over-limit by-use" enabled, the resource usage of the previous day will be billed using the pay-as-you-go rule, and will be deducted from the balance of Tencent Cloud. If the current space has not enabled the function of "over-limit by volume", it will trigger the shutdown operation.

阿里云服务空间没有`超限按量`功能，但是提供了`按量计费`的服务空间，阿里云余额适用于`按量计费`服务空间产生的费用扣款。
Alibaba Cloud service space does not have the function of "over-limit pay-as-you-go", but provides "pay-as-you-go" service space, and the balance of Alibaba Cloud is applicable to the deduction of fees generated by the "pay-as-you-go" service space.

账户保证金在停止使用按量计费服务后可以申请退还，所以账户保证金不能申请开具发票，但可申请开具收据，申请方式：发送邮件到 fapiao@dcloud.io，邮件内容：
You can apply for a refund of the account deposit after you stop using the pay-as-you-go service, so you cannot apply for an invoice for the account deposit, but you can apply for a receipt. The application method: send an email to fapiao@dcloud.io, and the email content:

```
邮件标题：uniCloud保证金收据申请

邮件内容：

客户账号：uniCloud.dcloud.net.cn 登录账号(就是HBuilderX账号)
客户名称：当前账号认证的公司名称/个人姓名，会显示在收据上
申请内容：申请阿里云/腾讯云保证金收据
金额：200元

```

若需退还保证金，需满足以下条件：
In order to refund the security deposit, the following conditions must be met:
1. 退还阿里云保证金时，需先删除该账号下所有阿里云`按量计费`服务空间
1. When refunding the Alibaba Cloud security deposit, you need to delete all Alibaba Cloud's "pay-as-you-go" service spaces under the account first.
2. 退还腾讯云保证金时，需先关闭所有腾讯云`超限按量`功能，并关闭所有腾讯云空间的`前端网页托管`功能；
2. When refunding the security deposit of Tencent Cloud, it is necessary to turn off all Tencent Cloud's "over-limit and pay-as-you-go" functions, and turn off the "front-end web page hosting" function of all Tencent Cloud spaces;

退还保证金申请方式：使用uniCloud注册邮箱发送邮件到 service@dcloud.io，邮件内容：

```
邮件标题：uniCloud保证金退还申请

邮件内容：

客户账号：uniCloud.dcloud.net.cn 登录账号
申请内容：申请退还uniCloud保证金
金额：200元

```

*注意：如果您注册uniCloud账号使用的是`qq号@qq.com`这类邮箱，发送邮件时，请勿使用qq邮箱的域名邮箱，需更换为`qq号@qq.com` 这种邮箱发送邮件。*

如果满足上述退还保证金的条件，且保证金支付时间在2023年3月16日之后，未超出第三方支付原路退还时间（微信支付365天内，支付宝90天内）时，可在[uniCloud控制台费用中心](https://unicloud.dcloud.net.cn/uni_modules/uni-trade/pages/cost-center/balance/balance)自助申请退回。


## 发生故障时如何判断故障点
## How to judge the fault point when a fault occurs

当你的线上系统故障时，可以参考此文档判断责任归属：[如何判断是DCloud或阿里云或腾讯云的问题](https://uniapp.dcloud.io/uniCloud/faq?id=fault)
When your online system fails, you can refer to this document to determine the attribution of responsibility: [How to determine if it is a DCloud or Alibaba Cloud or Tencent Cloud problem](https://uniapp.dcloud.io/uniCloud/faq?id=fault)

## 云厂商之间的迁移@cross-provider
## Migration between cloud providers @cross-provider

### 数据库迁移@cross-provider-db
### Database Migration @cross-provider-db

目前可以使用云数据库的导入导出进行迁移，迁移数据库之前可以使用导出db_init.json功能将所有集合及索引导出。再使用数据导入导出功能进行迁移。导入导出请参考：[数据导入导出和备份](uniCloud/hellodb.md?id=dbmigration)
Currently, you can use the import and export of ApsaraDB for migration. Before migrating the database, you can use the export db_init.json function to export all collections and indexes. Then use the data import and export function to migrate. For import and export, please refer to: [Data import, export and backup](uniCloud/hellodb.md?id=dbmigration)

> 也可以直接使用第三方封装好的插件：[unicloud数据库一键搬家工具，支持阿里云与腾讯云互转。支持跨账号转。](https://ext.dcloud.net.cn/plugin?id=6089)
> You can also directly use third-party packaged plug-ins: [unicloud database one-click moving tool, which supports the mutual transfer between Alibaba Cloud and Tencent Cloud. Support cross-account transfer. ](https://ext.dcloud.net.cn/plugin?id=6089)

#### 腾讯云迁移到阿里云@tencent-to-aliyun-db
#### Tencent Cloud to Aliyun @tencent-to-aliyun-db

迁移数据可以通过在腾讯云服务空间导出数据表为json文件，在阿里云服务空间导入json文件到表的方式进行迁移。
Migrating data can be migrated by exporting the data table as a json file in the Tencent cloud service space and importing the json file into the table in the Alibaba cloud service space.

#### 阿里云迁移到腾讯云@aliyun-to-tencent-db
#### Aliyun migrated to Tencent Cloud @aliyun-to-tencent-db

由于此前腾讯云并未完全支持ObjectId类型的数据，在阿里云迁移到腾讯云时需要注意处理一下`ObjectId`类型的数据，包括自动生成的_id字段以及关联到其他表的_id的字段。简单来说就是将导出的数据内的ObjectId类型的数据处理成字符串且不满足ObjectId的格式。
Since Tencent Cloud does not fully support ObjectId type data before, you need to pay attention to handling `ObjectId` type data when Alibaba Cloud migrates to Tencent Cloud, including the automatically generated _id field and the _id field associated with other tables. To put it simply, the data of type ObjectId in the exported data is processed into a string that does not meet the format of ObjectId.

例：
example:

```js
// 原始数据
// Raw data
{"_id":{"$oid":"60fa6d25cd84d60001ec38a2"},"uid":{"$oid":"60fa6d1d2e5faa0001ade857"}}

// 调整后的数据
// adjusted data
{"_id":"60fa6d25cd84d60001ec38a2a","uid":"60fa6d1d2e5faa0001ade857a"} // 在结尾追加了一个“a”使其不满足ObjectId格式
```

以下为一个简单的脚本示例用于处理导出的json文件
The following is a simple script example for processing the exported json file

如果将此文件存储为`parse.js`，使用`node parse.js 输入文件相对或绝对路径 输出文件相对或绝对路径`即可处理导出的json文件
If you store this file as `parse.js`, use `node parse.js input file relative or absolute path output file relative or absolute path` to process the exported json file

```js
const fs = require('fs')
const path = require('path')
const readline = require('readline')

const cwd = process.cwd()
const inputPath = path.resolve(cwd, process.argv[2])
const outputPath = path.resolve(cwd, process.argv[3])

if (fs.existsSync(outputPath)) {
  throw new Error(`输出路径（${outputPath}）已存在`)
}

function getType(val) {
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase()
}
function parseRecord(obj) {
  const type = getType(obj)
  switch (type) {
    case 'object':
      if (obj.$oid) {
        return obj.$oid + 'a'
      }
      const keys = Object.keys(obj)
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        obj[key] = parseRecord(obj[key])
      }
      return obj
    case 'array':
      for (let i = 0; i < obj.length; i++) {
        obj[i] = parseRecord(obj[i])
      }
      return obj
    default:
      return obj
  }
}

async function parseCollection() {
  const inputStream = fs.createReadStream(inputPath)
  const outputStream = fs.createWriteStream(outputPath)

  const rl = readline.createInterface({
    input: inputStream
  });

  for await (const line of rl) {
    const recordStr = line.trim()
    if (!recordStr) {
      continue
    }
    const record = parseRecord(JSON.parse(recordStr))
    outputStream.write(JSON.stringify(record) + '\n')
  }
  rl.close()
  console.log(`处理后的文件已输出到${outputPath}`)
}

parseCollection()

```

