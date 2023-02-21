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
The pricing, package content, and service SLA of uniCloud are directly announced by cloud vendors. DCloud will not increase the price. uniCloud has been online for nearly 3 years. DCloud has been serving developers in a conscientious manner, striving to lower the application development threshold and improve application development efficiency.
- 选择阿里云作为服务商时，有一个免费服务空间。更多服务空间需要付费。
- When choosing Alibaba Cloud as a service provider, there is a free service space. Additional service spaces are subject to payment.
- 选择腾讯云作为服务商时，需付费购买套餐，超出套餐后可开启按量计费，套餐详情参考[腾讯云基础套餐](uniCloud/price?id=tencent-package)。
- When you choose Tencent Cloud as a service provider, you need to pay for a package. After the package is exceeded, you can enable pay-as-you-go. For package details, refer to [Tencent Cloud Basic Package](uniCloud/price?id=tencent-package).

付费用户享受阿里云和腾讯云提供的服务协议SLA，[详见](https://uniapp.dcloud.net.cn/uniCloud/agreement)
Paid users enjoy the service agreement SLA provided by Alibaba Cloud and Tencent Cloud, [see details](https://uniapp.dcloud.net.cn/uniCloud/agreement)

uniCloud提供包月、按量计费两种计费方式，具体说明如下：
uniCloud provides two billing methods: monthly subscription and pay-as-you-go. The details are as follows:

|计费方式	|付费方式					|计费单位																									|
|Billing method |Payment method |Billing unit |
|:-:		|:-:						|:-:																										|
|包月		|预付费						|参考 [腾讯云包月套餐](uniCloud/price?id=price-month)、[阿里云包月套餐](uniCloud/price?id=aliyun-package)	|
|Monthly |Prepaid |Refer to [Tencent Cloud Monthly Package](uniCloud/price?id=price-month), [Alibaba Cloud Monthly Package](uniCloud/price?id=aliyun-package) |
|按量计费	|结算时冻结费用，每日结算	|参考 [阿里云按量计费](uniCloud/price?id=aliyun-postpay)													|
|Pay-as-you-go |Frozen fee at settlement, daily settlement |Refer to [Alibaba Cloud Pay-As-You-Go](uniCloud/price?id=aliyun-postpay) |


## 阿里云@aliyun
## Aliyun@aliyun

阿里云分公测版和正式版。正式版于2022年11月21日上线，同时公测版停止新建。
Alibaba Cloud is divided into public beta version and official version. The official version will be launched on November 21, 2022, and the public beta version will stop creating new ones at the same time.
对现存的公测版服务空间，阿里云会提供**两个月的过渡期**，在此期间已创建的服务空间仍可继续使用，开发者需在2023年1月21日前完成迁移。
For the existing public beta service spaces, Alibaba Cloud will provide a **two-month transition period**, during which the created service spaces can still be used, and developers need to complete the migration before January 21, 2023.
同时uniCloud控制台已增加公测版迁移正式版的功能以便开发者平滑迁移。
At the same time, the uniCloud console has added the function of migrating from the public beta version to the official version so that developers can migrate smoothly.

相关公告见：[https://ask.dcloud.net.cn/article/40144](https://ask.dcloud.net.cn/article/40144)
For relevant announcements, see: [https://ask.dcloud.net.cn/article/40144](https://ask.dcloud.net.cn/article/40144)

### 阿里云正式版@aliyun-business
### Alibaba Cloud official version @aliyun-business

阿里云正式版支持`包年包月`及`按量计费`两种计费模式，创建`按量计费`服务空间需先充值保证金及阿里云余额。
The official version of Alibaba Cloud supports two billing modes: `subscription` and `pay-as-you-go`. To create a `pay-as-you-go` service space, you need to recharge the security deposit and Alibaba Cloud balance first.

目前单个账号可创建20个正式版服务空间，更多额度我们会协调阿里云做调整提高。
At present, a single account can create 20 official version service spaces, and we will coordinate with Alibaba Cloud to adjust and increase more quotas.

**注意:**阿里云正式版版需要使用HBuilderX 3.6.5（正式版）或3.6.10（alpha版）或与此版本对应的uni-app cli项目才可正常使用。如果是cli创建的项目，可以通过执行`npx @dcloudio/uvm alpha`升级依赖
**Note:** The official version of Alibaba Cloud needs to use HBuilderX 3.6.5 (official version) or 3.6.10 (alpha version) or the uni-app cli project corresponding to this version to work normally. If it is a project created by cli, you can upgrade the dependencies by executing `npx @dcloudio/uvm alpha`

#### 免费额度
#### Free Quota

阿里云针对每个账号提供了一个有免费额度的服务空间，以方便产品开发测试及体验。具体额度请阅读下方[包年包月套餐](uniCloud/price.md?id=aliyun-package)中的开发者版。
Alibaba Cloud provides a service space with a free quota for each account to facilitate product development, testing and experience. Please read the developer version in [Subscription Package](uniCloud/price.md?id=aliyun-package) below for the specific amount.

**免费额度注意事项：**
**Notes on free quota:**
- 单个账号只能创建一个阿里云免费服务空间
- A single account can only create one Alibaba Cloud free service space
- 阿里云免费服务空间有效期默认一个月，到期时需主动续费（到期前15天可续费，续费时依旧免费），否则将会被停服释放
- Alibaba Cloud's free service space is valid for one month by default, and it needs to be renewed actively when it expires (it can be renewed 15 days before the expiration, and it is still free when it is renewed), otherwise it will be suspended and released
- 免费版如需升配，只能针对剩余有效期进行操作，无法自定义升配时间
- If the free version needs to be upgraded, it can only be operated for the remaining validity period, and the upgrade time cannot be customized
- 免费版可以转换为按量计费
- Free version can be converted to pay-as-you-go
- 免费版升配或转为按量计费后，免费额度会释放，此时仍可再创建一个免费版
- After the free version is upgraded or converted to pay-as-you-go, the free quota will be released, and another free version can still be created at this time

#### 包年包月套餐@aliyun-package
#### Yearly and monthly package @aliyun-package
|资源分类			|资源细项								|开发者版（免费版）	|基础版	|标准版	|专业版	|企业版	|旗舰版	|
|Resource Classification |Resource Details |Developer Edition (Free Edition) |Basic Edition |Standard Edition |Professional Edition |Enterprise Edition |Ultimate Edition |
|:-:					|:-:										|:-:								|:-:		|:-:		|:-:		|:-:		|:-:		|
|云函数				|资源使用量（GBs/月）		|1000								|1万		|20万		|40万		|150万	|400万	|
|Cloud Function |Resource Usage (GBs/month) | 1000 | 10,000 | 200,000 | 400,000 | 1.5 million | 4 million |
|							|调用次数（万次/月）		|1.5								|15			|300		|600		|2400		|6000		|
| |Number of calls (10,000 times/month) | 1.5 | 15 | 300 | 600 | 2400 | 6000 |
|							|出网流量（GB/月）			|1									|1			|20			|40			|160		|500		|
| |Outbound traffic (GB/month) | 1 | 1 | 20 | 40 | 160 | 500 |
|云数据库			|容量（GB）							|2									|2			|3			|5			|10			|10			|
|							|读操作使用量（万RU/天）		|0.05								|5			|25			|50			|150		|500		|
|							|写操作使用量（万WU/天）		|0.03								|3			|15			|30			|100		|300		|
|							|集合数量		|100								|100			|100			|100			|100		|100		|
| |Number of collections | 100 | 100 | 100 | 100 | 100 | 100 |
|							|索引数量		|400								|400			|400			|400			|400		|400		|
| |number of indexes | 400 | 400 | 400 | 400 | 400 | 400 |
|云存储				|容量（GB）							|5									|8			|10			|50			|100		|500		|
|Cloud Storage |Capacity (GB) | 5 | 8 | 10 | 50 | 100 | 500 |
|							|下载操作次数（万次/月）|0.2								|10			|200		|750		|1500		|3750		|
| |Number of download operations (10,000 times/month)| 0.2 | 10 | 200 | 750 | 1500 | 3750 |
|							|上传操作次数（万次/月）|0.1								|5			|100		|300		|600		|1500		|
| |Number of upload operations (10,000 times/month)| 0.1 | 5 | 100 | 300 | 600 | 1500 |
|							|CDN流量（GB/月）				|1									|2			|10			|50			|150		|500		|
| | CDN traffic (GB/month) | 1 | 2 | 10 | 50 | 150 | 500 |
|前端网页托管	|容量（GB）							|5									|8			|10			|50			|100		|500		|
|Front-end web hosting |Capacity (GB) | 5 | 8 | 10 | 50 | 100 | 500 |
|							|CDN流量（GB/月）				|1									|2			|10			|50			|150		|500		|
| | CDN traffic (GB/month) | 1 | 2 | 10 | 50 | 150 | 500 |
|售价（元/月）|-											|免费								|5			|24			|82			|316		|688		|
|Price (yuan/month)|- |Free | 5 | 24 | 82 | 316 | 688 |

- 套餐在有效期内可随时进行续费、升配，到期后只可续费，暂不支持降配。
- Packages can be renewed and upgraded at any time during the validity period, and can only be renewed after expiration, and downgrades are not supported for the time being.
- 套餐中的资源超标后服务空间会停服，需要及时升配或转按量计费才能恢复。
- After the resources in the package exceed the standard, the service space will be suspended, and it needs to be upgraded in time or converted to pay-as-you-go to recover.

包年包月套餐，适于业务稳定、套餐资源使用均衡的场景。
Yearly and monthly packages are suitable for scenarios where the business is stable and package resources are used in a balanced manner.

如果你难以预估会消耗多少云资源，或者业务波峰波谷变化较大，或者套餐中某些项目不够用、某些项目又用不完，此时推荐使用下方的按量计费。
If it is difficult for you to estimate how much cloud resources will be consumed, or the business peaks and troughs vary greatly, or some items in the package are not enough, and some items cannot be used up, then it is recommended to use the pay-as-you-go billing below.


#### 按量计费@aliyun-postpay
#### Pay as you go @aliyun-postpay

按量计费，意味着不是每个月支付固定费用，而是根据使用量付费。
Pay-as-you-go means that instead of paying a flat fee every month, you pay for what you use.

按量付费需要预存一定金额（余额），每日根据前一日资源消耗生成账单，从阿里云预存余额中扣除。
Pay-as-you-go requires a certain amount (balance) to be stored in advance, and a daily bill is generated based on the resource consumption of the previous day, which is deducted from the balance stored in Alibaba Cloud.

如果预存余额不足，则服务空间将不可用，需要立即充值。
If the pre-stored balance is insufficient, the service space will not be available and needs to be recharged immediately.

阿里云按量计费服务空间定价如下：
Alibaba Cloud pay-as-you-go service spaces are priced as follows:

|资源分类			|资源细项							|售价（元）	|
|:-:					|:-:									|:-:				|
|云函数				|资源使用量（GBs）		|0.000110592|
|							|调用次数（万次）			|0.0133			|
|							|出网流量（GB）				|0.8				|
|云数据库			|容量（GB/天）				|0.07				|
|							|读操作使用量（万RU）			|0.015			|
|							|写操作使用量（万RU）			|0.05				|
|云存储				|容量（GB/天）				|0.0043			|
|							|下载操作次数（万次）	|0.01				|
|							|上传操作次数（万次）	|0.01				|
|							|CDN 流量（GB）				|0.18				|
|前端网站托管	|容量（GB/天）				|0.0043			|
|							|流量（GB）						|0.18				|

**注意**
**Notice**
- 按量计费是延迟结算，可能存在前一日消耗大于余额导致超支的情况。故创建按量付费服务空间时，需支付一定的**保证金**，用以抵消超支结算的情况。如果您不再使用uniCloud服务，可以申请退还保证金（目前需要发送邮件到service@dcloud.io）。
- Pay-as-you-go is a delayed settlement, and there may be situations where the consumption on the previous day is greater than the balance, resulting in overspending. Therefore, when creating a pay-as-you-go service space, a certain **deposit** needs to be paid to offset the overspending settlement. If you no longer use the uniCloud service, you can apply for a refund of the security deposit (currently, you need to send an email to service@dcloud.io).


#### 按量计费每日资源上限设置@aliyun-postpay-quota

按量计费服务空间提供每日各项资源阈值上限的设置，通过该项设置，可避免用量过多造成无法控制成本。

资源上限可在服务空间详情进行设置，该设置实时生效。每项资源指标的`数据更新延迟时间`不同，当数据更新且某项资源用量超过阈值时，则该项服务便会停服。

资源阈值设置支持以下十二项资源指标：

|资源分类		|资源细项						    |最小值	            |数据更新延迟时间	    |
|:-:			|:-:								|:-:				|:-:				|
|云函数			|资源使用量					        |1万GBs				|20分钟				|
|				|调用次数       						|1万次				|20分钟				|
|				|出网流量						    |1GB				|20分钟				|
|云数据库		|容量						        |1GB				|1小时				|
|				|读操作使用量     				    |1万RU				|20分钟				|
|				|写操作使用量       					|1万WU				|20分钟				|
|云存储			|容量     						    |1GB				|6小时				|
|				|下载操作次数     					|1万次				|6小时				|
|				|上传操作次数     					|1万次				|6小时				|
|				|CDN 流量     						|1GB				|6小时				|
|前端网站托管		|容量     						    |1GB				|6小时				|
|				|流量         						|1GB				|6小时				|

**注意**
- 资源上限设置针对的是每日用量，当日用量超设置的上限便会停服，受`数据更新延迟时间`影响，在停服时资源用量可能会超出所设阈值。
- 资源上限设置实时生效，如果设置的阈值已超当时的用量，则会实时停服。每小时最多可操作三次。

#### 各项资源释义说明@aliyun-quota-description

|资源分类			|资源细项							|说明	|数据更新延迟时间							|
|:-:					|:-:									|:-:				|:-:				|
|云函数				|资源使用量（GBs）		|资源使用量GBs = 函数配置内存GB × 运行计费时长s。 例如，配置为256MB的函数，单次运行了1760ms，计费时长为1760ms，则单次运行的资源使用量为(256 / 1024) × (1760 / 1000) = 0.44GBs|20分钟		|
|							|调用次数			| -			|20分钟		|
|							|出网流量（GB）				| 在云函数中访问外网时产生的出网流量，包含请求三方服务器发送的数据和返回给客户端的数据。			|20分钟		|
|云数据库			|容量（GB）				| -				|1小时		|
|							|读操作使用量（RU）			|读操作使用量（Read Unit）= ceil(查询数据量KB / 4)，即从数据表中读取一条4 KB数据（向上取整）计作1RU，例如读取7.6 KB的数据计作2RU。			|20分钟		|
|							|写操作使用量（WU）			| 写操作使用量（Write Unit）= ceil(写入数据量KB / 1)，即向数据表中写入一条1 KB数据（向上取整）计作1WU，例如写入1.8 KB的数据计作2WU。				|20分钟		|
|云存储				|容量（GB）				| -			|6小时		|
|							|下载操作次数	|   通过CDN加速访问的次数，回源次数暂不收费。				|6小时		|
|							|上传操作次数	|  -				|6小时		|
|							|CDN 流量（GB）				|通过CDN加速产生的流量，回源流量暂不收费。				|6小时		|
|前端网站托管	|容量（GB）				| -			|6小时		|
|							|CDN 流量（GB）						|通过CDN加速产生的流量，回源流量暂不收费。				|6小时		|

**补充**

- 云函数实际执行时间精确到ms。运行内存默认为512M，可以在云函数package.json中调整。优化代码，降低云函数运行时间，有助于减少GBs的费用。
- 数据库写操作使用量包含对数据的增、删、改，创建表及索引不计算写操作使用量。
- 控制台导入导出数据功能不计算读写操作使用量，导出db_init.json计算读操作使用量。
- updateAndReturn操作只计算写操作使用量，不计算读操作使用量。
- clientDB底层也是基于云函数实现，也会消耗云函数调用次数。


#### 包年包月套餐转按量计费@change-to-postpay
#### Subscription package to pay-as-you-go @change-to-postpay

包年包月套餐支持转换按量计费，如果是付费套餐，转换后会按照剩余有效期核算退费金额并自动退费到uniCloud阿里云账号余额，以用于按量计费账单扣费。
Subscription packages support conversion to pay-as-you-go. If it is a paid-for package, the refund amount will be calculated according to the remaining validity period after conversion and automatically refunded to the balance of the uniCloud Alibaba Cloud account, which will be used for bill deduction of pay-as-you-go bills.

**注意：** 按量计费不支持转换为包年包月，该操作不可逆，请谨慎操作。
**Note:** Pay-As-You-Go does not support conversion to Subscription. This operation is irreversible. Please operate with caution.

#### 现阶段系统限制@aliyun-system-limit
#### Current system limit @aliyun-system-limit

因上游储备不足，目前uniCloud阿里云版仍有一些限额。DCloud会持续推动限额的解除。目前有需求的开发者需向DCloud人工联系申请提高限额。
Due to insufficient upstream reserves, there are still some quotas for the uniCloud Alibaba Cloud version. DCloud will continue to promote the lifting of the limit. Developers currently in need need to contact DCloud manually to apply for an increase in the limit.

|资源分类	|限制项															|限额		|
|Resource Category |Limited Items |Quota |
|---			|---																|---		|
|云函数		|callFunction请求QPS								|1000		|
|cloud function | callFunction request QPS | 1000 |
|					|url化请求QPS（自定义域名）					|1000		|
| | urlization request QPS (custom domain name) | 1000 |
|					|url化请求QPS（默认域名）						|100		|
| | urlization request QPS (default domain name) | 100 |
|					|固定IP代理请求QPS									|20			|
| | Fixed IP proxy request QPS | 20 |
|					|最大实例数													|300		|
| |Maximum number of instances | 300 |
|					|函数数量限制												|50			|
|					|客户端请求最大超时时间							|20秒		|
|					|定时任务单次最大运行时间						|600秒	|
| |The maximum running time of a scheduled task at a time | 600 seconds |
|数据库		|QPS																|1000		|
|Database | QPS | 1000 |
|					|并发执行数													|100		|
| |Number of concurrent executions | 100 |
|					|单次请求超时时间										|5秒		|
| |Single request timeout | 5 seconds |
|					|集合数量														|100		|
| |Collection Quantity | 100 |
|					|索引数量														|400		|
| |Number of indexes | 400 |
|					|单次请求获取的最大数据条数（limit）|1000	|
| |The maximum number of data pieces obtained by a single request (limit) | 1000 |
|云存储		|上传QPS														|300		|
|Cloud Storage |Upload QPS | 300 |
|					|删除QPS														|300		|
| |Delete QPS | 300 |
|					|查询QPS														|300		|
| |Query QPS | 300 |

`2023年2月6日`阿里云客户端请求云函数最大超时时间由10秒调整为20秒

#### 其他说明
#### other instructions

**云存储数据处理**：图片裁剪、视频截帧等功能。在阿里云正式版免费，但不排除后续收费可能。
**Cloud storage data processing**: image cropping, video frame cutting and other functions. The official version of Alibaba Cloud is free, but the possibility of subsequent charges is not ruled out.

**违规图片检测**：正式版不自动进行云存储违规检测，请开发者自行保证云存储文件合规。
**Illegal image detection**: The official version does not automatically detect cloud storage violations. Developers are required to ensure that cloud storage files are compliant.

**前端网页托管**：正式版不再自动根据文件修改刷新缓存，提供手动刷新缓存功能。
**Front-end web page hosting**: The official version no longer automatically refreshes the cache according to file modification, and provides the function of manually refreshing the cache.

#### 欠费停服及资源销毁
#### Suspension of service due to arrears and destruction of resources

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

阿里云公测版已于2023年1月22日下线。本章节文档仅适用于老用户备忘。
The public beta version of Alibaba Cloud will be offline on January 22, 2023. This section of the documentation applies only to old user memos.

阿里云公测版的服务空间是免费但有一些限制，见下。
The service space of the Alibaba Cloud public beta version is free but has some restrictions, see below.

|资源类目					|限制												|说明																																															|
|Resource Category |Restriction |Description |
|:-:						|:-:												|:-:																																															|
|云函数并发限制				|1000个实例/服务空间								|实际普通项目很难达到这个并发数，阿里云可以设置单实例多并发单实例最多100，理论最大并发量1000*100=100000 (10万)，关于单实例多并发请参考：[单实例多并发](uniCloud/cf-functions.md?id=concurrency)	|
|Cloud function concurrency limit | 1000 instances/service space |Actually, it is difficult to achieve this number of concurrency for ordinary projects. Alibaba Cloud can set up to 100 single instances with multiple concurrent instances. The theoretical maximum concurrency is 1000*100=100000 (100,000). Please refer to [Single Instance Multiple Concurrency](uniCloud/cf-functions.md?id=concurrency) |
|每个服务空间的云函数数量	|48个												|实际项目中由于clientDB和单路由云函数，只会用到几个云函数，达不到限制数字。[详见](https://uniapp.dcloud.net.cn/uniCloud/faq?id=merge-functions)													|
|Number of cloud functions for each service space | 48 |In actual projects, due to clientDB and single-route cloud functions, only a few cloud functions will be used, which cannot reach the limit number. [See details](https://uniapp.dcloud.net.cn/uniCloud/faq?id=merge-functions) |
|云函数定时触发最小间隔		|1小时												|-																																																|
|Minimum interval for cloud function timing trigger | 1 hour |- |
|云存储容量					|10GB												|-																																																|
|Cloud storage capacity | 10GB |- |
|云数据库容量				|100GB												|-																																																|
|Cloud database capacity | 100GB |- |
|单次数据库执行时长限制		|5秒												|**不可申请调整**																																												|
|Single database execution time limit | 5 seconds |**Cannot apply for adjustment** |
|闲置停服时间										|30天无活跃服务空间会进行停服，在未销毁前可以恢复																																				|
|Idle service stop time | 30 days without active service space will stop the service, and it can be restored before it is destroyed |
|停服销毁时间										|自动销毁后15天后销毁服务空间，在未销毁前可以恢复																																				|
|Destruction time after service shutdown |The service space will be destroyed 15 days after the automatic destruction, and it can be restored before it is destroyed |

阿里云公测版不允许开发者使用这些免费的存储及CDN资源来开展图床类业务。正式版无此限制。
The public beta version of Alibaba Cloud does not allow developers to use these free storage and CDN resources to carry out image bed services. The official version has no such limitation.

## 腾讯云@tencent
## Tencent Cloud @tencent

**使用腾讯云Nodejs12版本时，务必仔细阅读此文档：[keepRunningAfterReturn](uniCloud/cf-functions.md?id=keep-running)**
**Be sure to read this document carefully when using Tencent Cloud Nodejs12 version: [keepRunningAfterReturn](uniCloud/cf-functions.md?id=keep-running)**

腾讯云于2022年8月12日更新了计费方式。
Tencent Cloud updated the billing method on August 12, 2022.
新计费模式下，统一采用**基础套餐+按量计费**的模式，开发者可先购买带有一定配额的基础套餐，超出套餐配额部分按使用量付费。
Under the new billing model, the model of **basic package + pay-as-you-go** is uniformly adopted. Developers can purchase a basic package with a certain quota first, and the portion exceeding the quota of the package will be charged according to the usage.

### 基础套餐@tencent-package
### Basic Package @tencent-package

| 配额						| 个人版						| 入门版| 初创版	| 商用版	| 团队版	| 单位		|
| ---							| ---								| ---		| ---			| ---			|  ---		| ---			|
| QPS							| 500								| 500		| 500			| 800			| 1000		| -				|
| 调用次数				| 20								| 500		| 1000		| 2000		| 5000		| 万次/月	|
| 容量						| 2									| 30		| 100			| 200			| 300			| GB			|
| 云函数资源使用量| 10								| 30		| 45			| 60			| 100			| 万GBs/月|
| 云函数出网流量	| 2									| 8			| 10			| 15			| 25			| GB/月		|
| 云函数数量限制	| 150								| 150		| 150			| 150			| 150			| 个			|
| CDN流量					| 5									| 80		| 200			| 400			| 600			| GB/月		|
| CDN回源流量			| 5									| 40		| 100			| 200			| 300			| GB/月		|
| 价格						| **~~39.9~~ 19.9**	| **99**| **299**	| **499**	| **999**	| 元/月		|

1. 个人版5折折扣至少延续至2022年底，后续折扣如有变化将另行通知。
2. The 50% discount on the personal edition will be extended to at least the end of 2022, and further notices will be notified if the subsequent discount changes.
3. **调用次数**：包含云存储上传、下载操作；数据库读、写操作；云函数调用次数。
4. **Number of calls**: including cloud storage upload and download operations; database read and write operations; cloud function calls.
5. **容量**：包含云存储、数据库容量。
6. **Capacity**: Including cloud storage and database capacity.
7. **CDN流量**、**CDN回源流量**：仅包含云存储，不含前端网页托管
8. **CDN traffic**, **CDN back-to-source traffic**: only includes cloud storage, excluding front-end web hosting
9. 开通基础套餐时可以选择是否允许超量，开启后如果用量超出套餐配额将按照按量付费定价进行收费
10. When opening the basic package, you can choose whether to allow overage. After opening, if the usage exceeds the package quota, it will be charged according to the pay-as-you-go pricing
11. 套餐在有效期内可进行续费、升配，到期当天可降配，到期后只可续费
12. The package can be renewed and upgraded within the validity period, and can be downgraded on the day of expiration, and can only be renewed after expiration
13. 前端网页托管开通后即为按量计费，不管服务空间有没有开启允许超量使用，前端网页托管计费参考[高级功能按量计费](#tencent-advanced)
14. After the front-end web hosting is activated, it will be billed according to the volume. No matter whether the service space is enabled or not, overuse is allowed. For the billing of the front-end web hosting, please refer to [Advanced Function Billing](#tencent-advanced)

**关于计费项的额外说明**
**Additional Notes on Billing Items**

- 数据库单次写入操作每1KB数据计算一次写操作数，向上取整
- The number of write operations is calculated for every 1KB of data in a single database write operation, rounded up
- 数据库单次读取操作每4KB数据计算一次读操作数，向上取整
- The number of read operations is calculated for every 4KB of data in a single read operation of the database, rounded up
- 创建表、索引均计算一次写入
- Creation of tables and indexes counts as one write
- updateAndReturn操作只计算写次数，不计算读次数
- The updateAndReturn operation only counts the number of writes, not the number of reads
- 云函数出网流量包含请求三方服务器发送的数据和返回给客户端的数据
- The outbound traffic of the cloud function includes the data sent by the third-party server and the data returned to the client
- clientDB底层也是基于云函数实现，也会消耗云函数调用次数
- 腾讯云云函数资源使用量GBs的计算方式为，云函数设置的运行内存*云函数实际执行时间，执行时间以100ms为阶梯向上取整

### 按量付费/超量使用定价@tencent-postpay
### Pay-As-You-Go/Overage Pricing @tencent-postpay

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
|前端网页托管	|容量			|0.005元/GB/天		|
|Front-end web hosting |Capacity | 0.005 yuan/GB/day |
|				|流量			|0.21元/GB			|
| Traffic | 0.21 yuan/GB |
| Traffic | 0.21 yuan/GB |
|日志服务		|标准索引存储	|0.0115元/GB/日		|
|Log Service |Standard Index Storage | 0.0115 yuan/GB/day |
|				|标准日志存储	|0.0115元/GB/日		|
| |Standard log storage | 0.0115 yuan/GB/day |
|				|标准索引流量	|0.35元/GB/日		|
| |Standard index traffic | 0.35 yuan/GB/day |
|				|写流量			|0.18元/GB/日		|
| |Write traffic | 0.18 yuan/GB/day |
|				|请求次数		|0.15元/百万次/日	|
| |Number of requests | 0.15 yuan/million times/day |
|				|分区数量		|0.04元/个/日		|
| |Number of partitions | 0.04 yuan/piece/day |

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

## 余额及保证金@balance
## Balance and Margin @balance

余额单次充值不低于10元，充值后不支持退款，**余额不支持购买包年包月套餐，请根据业务使用量合理选择充值金额**。
The balance of a single recharge is not less than 10 yuan, and refunds are not supported after recharge. **The balance does not support the purchase of yearly and monthly packages. Please choose a reasonable recharge amount according to the business usage**.

腾讯云余额可用于服务空间套餐资源用尽后`超限按量`、前端网页托管等服务产生的费用。
The balance of Tencent Cloud can be used for the expenses incurred by services such as "over-limit and on-demand", front-end web hosting and other services after the service space package resources are exhausted.
腾讯云的套餐资源用完后，当前空间若开启了`超限按量`功能，则会使用按量计费规则对前一日资源用量进行计费，并并从腾讯云余额中扣除。当前空间若未开启了`超限按量`功能，则会触发停服操作。
After Tencent Cloud's package resources are used up, if the current space has the function of "over-limit by-use" enabled, the resource usage of the previous day will be billed using the pay-as-you-go rule, and will be deducted from the balance of Tencent Cloud. If the current space has not enabled the function of "over-limit by volume", it will trigger the shutdown operation.

阿里云服务空间没有`超限按量`功能，但是提供了`按量计费`的服务空间，阿里云余额适用于`按量计费`服务空间产生的费用扣款。
Alibaba Cloud service space does not have the function of "over-limit pay-as-you-go", but provides "pay-as-you-go" service space, and the balance of Alibaba Cloud is applicable to the deduction of fees generated by the "pay-as-you-go" service space.

由于存在上一日资源消耗大于余额，从而导致超支的情况，故开启`超限按量`设置或创建`按量计费`空间时，需提前缴纳保证金。
Since the resource consumption of the previous day is greater than the balance, resulting in an overspend, when you enable the "By-As-You-Go" setting or create a "Bill-As-You-Go" space, you need to pay a deposit in advance.

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

#### 使用一键迁移功能迁移阿里云公测版到正式版@aliyun-beta-to-aliyun-biz
#### Use the one-click migration function to migrate the public beta version of Alibaba Cloud to the official version @aliyun-beta-to-aliyun-biz

阿里云提供了公测版一键迁移到正式版的功能。执行一键迁移后云存储、云函数、数据库都会被迁移到新服务空间。迁移过程中云函数、数据库均可正常访问，云存储无法写入（删除或上传文件）,
Alibaba Cloud provides a one-click migration function from the public beta version to the official version. After performing one-click migration, cloud storage, cloud functions, and databases will all be migrated to the new service space. During the migration process, cloud functions and databases can be accessed normally, but cloud storage cannot be written (deleted or uploaded files),
详见：[阿里云公测版迁移正式版](uniCloud/aliyun-migrate-business.md)
For details, see: [Alibaba Cloud Public Beta Migration Official Version](uniCloud/aliyun-migrate-business.md)
