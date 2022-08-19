## 概述
## Overview

选择阿里云作为服务商时，服务空间资源完全免费，每个账号最多允许创建50个服务空间。**阿里云目前处于公测阶段，如有正式业务对稳定性有较高要求建议使用腾讯云。**
When Alibaba Cloud is selected as the service provider, the service space resources are completely free, and each account is allowed to create a maximum of 50 service spaces. **Alibaba Cloud is currently in the public beta stage. If you have a formal business that requires high stability, it is recommended to use Tencent Cloud. **

选择腾讯云作为服务商时，可以创建一个免费的服务空间，资源详情参考[腾讯云免费额度](uniCloud/price?id=price-free)；如想提升免费空间资源配额，或创建更多服务空间，则需付费购买。
When you choose Tencent Cloud as a service provider, you can create a free service space. For resource details, please refer to [Tencent Cloud Free Quota](uniCloud/price?id=price-free); if you want to increase the free space resource quota, or create more services space, you need to pay for it.

付费用户享受腾讯云提供的服务协议SLA，[详见](https://uniapp.dcloud.net.cn/uniCloud/agreement)
Paid users enjoy the service agreement SLA provided by Tencent Cloud, [see details](https://uniapp.dcloud.net.cn/uniCloud/agreement)

uniCloud的腾讯云版的定价、套餐内容、服务SLA，是由腾讯公司直接公布的。DCloud公司不会加价，包括开发者通过DCloud充值也会直接充到开发者在腾讯云建立的子账户下。DCloud只从腾讯云等云厂商获取返佣，也不会在未来加价收割开发者。
The pricing, package content, and service SLA of the Tencent Cloud version of uniCloud are directly announced by Tencent. DCloud will not increase the price, including the developer's recharge through DCloud will also be directly charged to the sub-account established by the developer in Tencent Cloud. DCloud only gets rebates from cloud vendors such as Tencent Cloud, and will not increase prices to harvest developers in the future.

uniCloud提供包月、按量计费两种计费方式（仅腾讯云），具体说明如下：
uniCloud provides two billing methods (Monthly and Pay-As-You-Go (Tencent Cloud only), the details are as follows:

|计费方式	|付费方式									|计费单位																							|
|Billing method |Payment method |Billing unit |
|:-:			|:-:											|:-:																									|
|包月	|预付费										|参考 [腾讯云包月套餐](uniCloud/price?id=price-month)																|
|Monthly |Prepaid |Reference [Tencent Cloud Monthly Package](uniCloud/price?id=price-month) |
|按量计费	|结算时冻结费用，每日结算	|参考 [腾讯云按量计费](uniCloud/price?id=price-info)|
|Pay-As-You-Go |Frozen fees during settlement, daily settlement |Reference [Tencent Cloud Pay-As-You-Go](uniCloud/price?id=price-info)|


## 阿里云@aliyun
## Aliyun@aliyun

阿里云的服务空间是纯免费的。但为避免资源滥用，有一些限制，见下。
Alibaba Cloud's service space is purely free. However, to avoid resource abuse, there are some restrictions, see below.

|资源类目					|限制				|说明																																															|
|Resource Category |Restrictions |Description |
|:-:						|:-:				|:-:																																															|
|云函数并发限制				|1000个实例/服务空间|实际普通项目很难达到这个并发数，阿里云可以设置单实例多并发单实例最多100，理论最大并发量1000*100=100000 (10万)，关于单实例多并发请参考：[单实例多并发](uniCloud/cf-functions.md?id=concurrency)	|
|Cloud function concurrency limit|1000 instances/service space|Actual ordinary projects are difficult to achieve this number of concurrency, Alibaba Cloud can set a single instance with multiple concurrent single instance up to 100, the theoretical maximum concurrency is 1000*100=100000 (100,000), For information on single instance multiple concurrency, please refer to: [Single instance multiple concurrency](uniCloud/cf-functions.md?id=concurrency) |
|每个服务空间的云函数数量	|48个				|实际项目中由于clientDB和单路由云函数，只会用到几个云函数，达不到限制数字。[详见](https://uniapp.dcloud.net.cn/uniCloud/faq?id=merge-functions)													|
|Number of cloud functions in each service space |48 |In the actual project, due to clientDB and single-route cloud functions, only a few cloud functions are used, which cannot reach the limit number. [See details](https://uniapp.dcloud.net.cn/uniCloud/faq?id=merge-functions) |
|云函数定时触发最小间隔		|1小时				|-																																																|
|Minimum interval of timed triggering of cloud functions |1 hour |- |
|云存储容量					|10GB				|-																																																|
|Cloud Storage Capacity |10GB |- |
|云数据库容量				|100GB				|-																																																|
|Cloud Database Capacity |100GB |- |
|单次数据库执行时长限制		|3秒				|**不可申请调整**																																												|
|Single database execution time limit |3 seconds |**Cannot apply for adjustment** |

尤其注意阿里云的cdn确实是全免费的，这些免费资源可用于正常公司业务，阿里云不允许开发者使用这些免费的存储及CDN资源来开展图床类业务。
In particular, pay attention to the fact that Alibaba Cloud's CDN is completely free. These free resources can be used for normal company business. Alibaba Cloud does not allow developers to use these free storage and CDN resources to carry out image bed services.

除上面的描述外，阿里云没有其他限制。
Apart from the above description, Alibaba Cloud has no other restrictions.

因为阿里云免费向DCloud提供了硬件资源，所以DCloud也没有向开发者收费。如果阿里云后续明确了收费计划，DCloud也会第一时间公布在这里。
Because Alibaba Cloud provides hardware resources to DCloud for free, DCloud does not charge developers. If Alibaba Cloud clarifies the charging plan in the future, DCloud will also announce it here as soon as possible.

如有超大型应用突破阿里云资源限制，请发邮件到service@dcloud.io请求协助，可以特批扩大资源。
If a super-large application exceeds the resource limit of Alibaba Cloud, please send an email to service@dcloud.io to request assistance, and the resources can be expanded with special approval.

申请邮件内需要提供以下信息
The following information is required in the application email

```
公司信息		// 个人用户无须此项
负责人
联系电话
公司介绍		// 个人用户无须此项
业务场景		// 与申请资源相关的业务场景，包括应用名称及发布平台
用户规模
申请spaceId
申请资源		// 要具体到申请资源量，例如：云存储要写明申请多大、定时触发要写明申请的触发频率
申请日期
```

## 腾讯云@tencent
## Tencent Cloud @tencent

**使用腾讯云Nodejs12版本时，务必仔细阅读此文档：[keepRunningAfterReturn](uniCloud/cf-functions.md?id=keep-running)**
**Be sure to read this document carefully when using Tencent Cloud Nodejs12 version: [keepRunningAfterReturn](uniCloud/cf-functions.md?id=keep-running)**

为了给各位用户提供更加优质可靠的产品服务，腾讯云计划将于2022年8月12日，对计费方式进行如下升级：
In order to provide users with more high-quality and reliable products and services, Tencent Cloud plans to upgrade the billing method as follows on August 12, 2022:

新计费模式下，统一采用**基础套餐+按量计费**的模式，开发者可先购买带有一定配额的基础套餐，超出套餐配额部分按使用量付费。
Under the new billing model, the model of **basic package + pay-as-you-go** is uniformly adopted. Developers can purchase a basic package with a certain quota first, and the portion exceeding the quota of the package will be charged according to the usage.

### 基础套餐@tencent-package
### Basic Package @tencent-package

| 配额						| 个人版						| 入门版| 初创版	| 商用版	| 团队版	| 单位	|
| Quota | Personal Edition | Starter Edition | Startup Edition | Commercial Edition | Team Edition |
| ---							| ---								| ---		| ---			| ---			|  ---		| ---		|
| QPS							| 500								| 500		| 500			| 800			| 1000		| -			|
| 调用次数				| 20								| 500		| 1000		| 2000		| 5000		| 万次	|
| Number of calls | 20 | 500 | 1000 | 2000 | 5000 |
| 容量						| 2									| 30		| 100			| 200			| 300			| GB		|
| Capacity | 2 | 30 | 100 | 200 | 300 | GB |
| 云函数资源使用量| 10								| 30		| 45			| 60			| 100			| 万GBs	|
| Cloud Function Resource Usage | 10 | 30 | 45 | 60 | 1 million | Ten Thousand GBs |
| 云函数外网出流量| 2									| 8			| 10			| 15			| 25			| GB		|
| Cloud Function Extranet Outbound Traffic | 2 | 8 | 10 | 15 | 25 | GB |
| CDN流量					| 5									| 80		| 200			| 400			| 600			| GB		|
| CDN Traffic | 5 | 80 | 200 | 400 | 600 | GB |
| CDN回源流量			| 5									| 40		| 100			| 200			| 300			| GB		|
| CDN back-to-source traffic | 5 | 40 | 100 | 200 | 300 | GB |
| 价格						| **~~39.9~~ 19.9**	| **99**| **299**	| **499**	| **999**	| 元/月	|
| Price | **~~39.9~~ 19.9** | **99**| **299** | **499** | **999** | RMB/month |

1. 个人版5折折扣至少延续至2022年底，后续折扣如有变化将另行通知。
1. The 50% discount on the personal edition will be extended to at least the end of 2022, and further notices will be notified if the subsequent discount changes.
2. **调用次数**：包含云存储上传、下载操作；数据库读、写操作；云函数调用次数。
2. **Number of calls**: including cloud storage upload and download operations; database read and write operations; cloud function calls.
3. **容量**：包含云存储、数据库容量。
3. **Capacity**: Including cloud storage and database capacity.
4. **CDN流量**、**CDN回源流量**：仅包含云存储，不含前端网页托管
4. **CDN traffic**, **CDN back-to-source traffic**: only includes cloud storage, excluding front-end web hosting
5. 开通基础套餐时可以选择是否允许超量，开启后如果用量超出套餐配额将按照按量付费定价进行收费
5. When opening the basic package, you can choose whether to allow overage. If the usage exceeds the package quota, you will be charged according to the pay-as-you-go pricing.
6. 前端网页托管开通后即为按量计费，不管服务空间有没有开启允许超量使用，前端网页托管计费参考[高级功能按量计费](#tencent-advanced)
6. After the front-end web hosting is activated, it is billed according to the amount. No matter whether the service space is enabled or not to allow over-use, the billing of the front-end web hosting refers to [advanced function billing](#tencent-advanced)

### 按量付费/超量使用定价@tencent-postpay
### Pay-As-You-Go/Overage Pricing @tencent-postpay

| 计费项					| 定价						|
| Billing Items | Pricing |
| ---							| ---							|
| 调用次数				| 0.5元/万次/天		|
| Number of calls | 0.5 yuan/10,000 times/day |
| 容量						| 0.1元/GB/天			|
| Capacity | 0.1 yuan/GB/day |
| 云函数资源使用量| 0.00011108元/GBs|
| Cloud function resource usage| 0.00011108 yuan/GBs|
| 云函数外网出流量|  0.8元/GB				|
| Cloud Function Extranet Outbound Traffic | 0.8 yuan/GB |
| CDN流量					| 0.21元/GB				|
| CDN traffic | 0.21 yuan/GB |
| CDN回源流量			| 0.15元/GB				|
| CDN back-to-source traffic | 0.15 yuan/GB |


### 高级功能按量计费定价@tencent-advanced
### Premium Features Pay-As-You-Go Pricing @tencent-advanced

| 计费项		|计费项								|定价							|
| Billing Items | Billing Items |Pricing |
| ---				| ---									|---							|
|前端网页托管		|容量									|0.005元/GB/天		|
|Front-end web hosting |Capacity |0.005 yuan/GB/day |
|						|流量									|0.21元/GB				|
| |traffic |0.21 yuan/GB |
|日志服务		|标准索引存储					|0.0115元/GB/日		|
|Log Service |Standard Index Storage |0.0115 yuan/GB/day |
|						|标准日志存储					|0.0115元/GB/日		|
| |Standard log storage |0.0115 yuan/GB/day |
|						|标准索引流量					|0.35元/GB/日			|
| |Standard index traffic |0.35 yuan/GB/day |
|						|写流量								|0.18元/GB/日			|
| |Write traffic |0.18 yuan/GB/day |
|						|请求次数							|0.15元/百万次/日	|
| |Number of requests |0.15 yuan/million times/day |
|						|分区数量							|0.04元/个/日			|
| |Number of partitions |0.04 yuan/piece/day |

- 在正式进行计费方式切换之日起，用户将不可继续续费或新购旧版套餐或按量计费服务空间。用户可选择是否切换新的计费方式，超时（2022.09.08）切换的服务空间将会停服释放。
- From the date when the billing method is officially switched, users will not be able to continue to renew their bills or purchase new and old packages or pay-as-you-go service space. Users can choose whether to switch to the new billing method, and the service space switched over time (2022.09.08) will be suspended and released.

**注：当包年包月服务空间升级新套餐时，如果已开通前端网页托管，则前端网页托管会自动转为按量计费，请确保账号余额充足！**
**Note: When the annual and monthly service space is upgraded to a new package, if the front-end web hosting has been activated, the front-end web hosting will be automatically converted to billing, please ensure that the account balance is sufficient! **

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