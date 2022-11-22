## 概述
## Overview

选择阿里云作为服务商时，服务空间资源完全免费，每个账号最多允许创建50个服务空间。**阿里云目前处于公测阶段，如有正式业务对稳定性有较高要求建议使用腾讯云。**
When Alibaba Cloud is selected as the service provider, the service space resources are completely free, and each account is allowed to create a maximum of 50 service spaces. **Alibaba Cloud is currently in the public beta stage. If you have a formal business that requires high stability, it is recommended to use Tencent Cloud. **

选择腾讯云作为服务商时，需付费购买套餐，超出套餐后可开启按量计费，套餐详情参考[腾讯云基础套餐](uniCloud/price?id=tencent-package)。

付费用户享受腾讯云提供的服务协议SLA，[详见](https://uniapp.dcloud.net.cn/uniCloud/agreement)
Paid users enjoy the service agreement SLA provided by Tencent Cloud, [see details](https://uniapp.dcloud.net.cn/uniCloud/agreement)

uniCloud的腾讯云版的定价、套餐内容、服务SLA，是由腾讯公司直接公布的。DCloud公司不会加价，包括开发者通过DCloud充值也会直接充到开发者在腾讯云建立的子账户下。DCloud只从腾讯云等云厂商获取返佣，也不会在未来加价收割开发者。
The pricing, package content, and service SLA of the Tencent Cloud version of uniCloud are directly announced by Tencent. DCloud will not increase the price, including the developer's recharge through DCloud will also be directly charged to the sub-account established by the developer in Tencent Cloud. DCloud only gets rebates from cloud vendors such as Tencent Cloud, and will not increase prices to harvest developers in the future.

uniCloud提供包月、按量计费两种计费方式（仅阿里云），具体说明如下：

|计费方式	|付费方式									|计费单位																							|
|Billing method |Payment method |Billing unit |
|:-:			|:-:											|:-:																									|
|包月	|预付费										|参考 [腾讯云包月套餐](uniCloud/price?id=price-month)	、[阿里云包月套餐](uniCloud/price?id=aliyun-package)															|
|按量计费	|结算时冻结费用，每日结算	|参考 [阿里云按量计费](uniCloud/price?id=aliyun-postpay)|


## 阿里云@aliyun
## Aliyun@aliyun

阿里云商业版计划将于**2022年11月中旬**上线，届时公测版服务空间将下线不再支持新建。对现存的公测版服务空间，阿里云会提供一个预期**两个月的过渡期**，在此期间已创建的服务空间仍可继续使用，**过渡期满后将停服释放**。

在商业版上线后，uniCloud控制台会于近期增加公测版迁移商业版的相关功能以便开发者迁移。


### 公测版@aliyun-public
阿里云公测版的服务空间是纯免费的。但为避免资源滥用，有一些限制，见下。

|资源类目					|限制											|说明																							|
|:-:						|:-:											|:-:																							|
|云函数并发限制				|1000个实例/服务空间			|实际普通项目很难达到这个并发数，阿里云可以设置单实例多并发单实例最多100，理论最大并发量1000*100=100000 (10万)，关于单实例多并发请参考：[单实例多并发](uniCloud/cf-functions.md?id=concurrency)|
|每个服务空间的云函数数量	|48个											|实际项目中由于clientDB和单路由云函数，只会用到几个云函数，达不到限制数字。[详见](https://uniapp.dcloud.net.cn/uniCloud/faq?id=merge-functions)|
|云函数定时触发最小间隔		|1小时										|-																								|
|云存储容量					|10GB											|-																								|
|云数据库容量				|100GB										|-																								|
|单次数据库执行时长限制		|5秒											|**不可申请调整**																	|
|闲置停服时间							|30天无活跃服务空间会进行停服，在未销毁前可以恢复	|
|停服销毁时间							|自动销毁后15天后销毁服务空间，在未销毁前可以恢复	|

尤其注意阿里云的cdn确实是全免费的，这些免费资源可用于正常公司业务，阿里云不允许开发者使用这些免费的存储及CDN资源来开展图床类业务。
In particular, pay attention to the fact that Alibaba Cloud's CDN is completely free. These free resources can be used for normal company business. Alibaba Cloud does not allow developers to use these free storage and CDN resources to carry out image bed services.

除上面的描述外，阿里云没有其他限制。
Apart from the above description, Alibaba Cloud has no other restrictions.

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

**阿里云商业版上线后，将不再支持公测版资源扩容，如有需求请使用商业版本。**


### 商业版@aliyun-business

阿里云商业版支持`包年包月`及`按量计费`两种计费模式，创建`按量计费`服务空间需先充值保证金及阿里云余额。

#### 免费额度
阿里云针对每个账号提供了一个有免费额度的服务空间，以方便产品开发测试及体验。具体额度请阅读下方[包年包月套餐](uniCloud/price.md?id=aliyun-package)中的开发者版。

**免费额度注意事项：**
- 单个账号只能创建一个阿里云免费服务空间
- 阿里云免费服务空间有效期默认一年，到期时需主动续费（续费时依旧免费），否则将会被停服释放
- 免费版如需升配，只能针对剩余有效期进行操作，无法自定义升配时间

#### 包年包月套餐@aliyun-package
|资源分类		|资源细项				|开发者版（免费版）	|基础版			|标准版			|专业版			|企业版			|旗舰版			|
|:-:		|:-:				|:-:				|:-:			|:-:			|:-:			|:-:			|:-:			|
|云函数		|资源使用量（GBs/月）	|1000				|1万				|20万			|40万			|150万			|400万			|
|			|调用次数（万次/月）	|1.5				|15				|300			|600			|2400			|6000			|
|			|出网流量（GB/月）		|1					|1				|20				|40				|160			|500			|
|云数据库		|容量（GB）			|2					|2				|3				|5				|10				|10				|
|			|读操作数（万次/天）	|0.05				|5				|25				|50				|150			|500			|
|			|写操作数（万次/天）	|0.03				|3				|15				|30				|100			|300			|
|云存储		|容量（GB）			|5					|8				|10				|50				|100			|500			|
|			|下载操作次数（万次/月）|0.2				|10				|200			|750			|1500			|3750			|
|			|上传操作次数（万次/月）|0.1				|5				|100			|300			|600			|1500			|
|			|CDN流量（GB/月）		|1					|2				|10				|50				|150			|500			|
|前端网页托管	|容量（GB）			|5					|8				|10				|50				|100			|500			|
|			|CDN流量（GB/月）		|1					|2				|10				|50				|150			|500			|
|售价（元/月）|-					|免费				|5				|24				|82				|316			|688			|


#### 按量计费@aliyun-postpay

按量计费，意味着不是每个月支付固定套餐，而是根据使用量付费。

按量付费需要预存一定金额，每日根据前一日资源消耗生成账单，从阿里云预存金额中扣除。

如果预存金额不足，则服务空间将不可用，需要立即充值。

阿里云按量计费服务空间定价如下：

|资源分类			|资源细项								|售价（元）		|
|:-:			|:-:								|:-:				|
|云函数			|资源使用量（GBs）						|0.000110592		|
|				|调用次数（万次）						|0.0133				|
|				|出网流量（GB）						|0.8				|
|云数据库			|容量（GB/天）						|0.07				|
|				|读操作数（万次）						|0.015				|
|				|写操作数（万次）						|0.05				|
|云存储			|容量（GB/天）						|0.0043				|
|				|下载操作次数（万次）					|0.01				|
|				|上传操作次数（万次）					|0.01				|
|				|CDN 流量（GB）						|0.18				|
|前端网站托管		|容量（GB/天）						|0.0043				|
|				|流量（GB）							|0.18				|

**注意**
- 按量计费是延迟结算，可能存在余额超支的情况，故创建按量付费服务空间时，需支付一定的保证金，用以抵消超支结算的情况。如果您不再申请使用uniCloud服务，可以申请退还保证金（目前需要发送邮件到service@dcloud.io）。

#### 系统限制@aliyun-system-limit

|资源分类	|限制项											|限额	|
|---			|---												|---	|
|云函数		|callFunction请求QPS				|1000	|
|					|url化请求QPS（自定义域名）	|1000	|
|					|url化请求QPS（默认域名）		|100	|
|					|固定IP代理请求QPS					|20		|
|					|最大实例数									|300	|
|数据库		|QPS												|1000	|
|					|并发执行数									|100	|
|云存储		|上传QPS										|300	|
|					|删除QPS										|300	|
|					|查询QPS										|300	|

#### 其他说明

**云存储数据处理**

图片裁剪、视频截帧等功能。在阿里云商业版初期，此功能仍免费提供给用户使用。后续数据处理功能可能会收费。

**违规图片检测**

商业版不再自动进行云存储违规检测，请开发者自行保证云存储文件合规。

**前端网页托管**

商业版不再自动根据文件修改刷新缓存，提供手动刷新缓存功能。

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
- 新计费下腾讯云云函数日志保存时长为7天

**注：当包年包月服务空间升级新套餐时，如果已开通前端网页托管，则前端网页托管会自动转为按量计费，请确保账号余额充足！**
**Note: When the annual and monthly service space is upgraded to a new package, if the front-end web hosting has been activated, the front-end web hosting will be automatically converted to metered billing, please ensure that the account balance is sufficient! **

## 余额及保证金@balance

腾讯云余额可用于服务空间`按量计费`产生的费用扣款，如服务空间套餐资源用尽后`超限按量`、前端网页托管等服务产生的费用。

阿里云商业版服务空间没有`超限按量`功能，但是提供了`按量计费`的服务空间，阿里云余额适用于`按量计费`服务空间产生的费用扣款。

余额单次充值不低于10元，充值后不支持退款，**余额不支持购买腾讯云及阿里云包年包月套餐，请根据业务使用量合理选择充值金额**。

腾讯云购买基础套餐后，如果开启了`超限按量`功能；或开通了阿里云`按量计费`服务空间；在超出套餐资源用量后，每日的资源用量会在第二天按照按量计费结算并从余额中扣除。由于存在余额超支的情况，使用按量计费服务需要缴纳保证金，账户保证金在停止使用按量计费服务后可以申请退还，所以账户保证金不能申请开具发票。若需退还保证金，需满足以下条件：
1. 腾讯云服务空间未开启`超限按量`功能
2. 腾讯云服务空间未开通`前端网页托管`
3. 未开通阿里云`按量计费`服务空间

由于腾讯云包年包月前端网页托管已下线，新开通的前端网页托管均为按量计费，如果开通了上面两项功能，请先关闭，然后发邮件到 service@dcloud.io 申请退还。

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


#### 阿里云公测版迁移到商业版@aliyun-beta-to-aliyun-biz

阿里云提供了公测版一键迁移到商业版的功能。执行一键迁移后云存储、云函数、数据库都会被迁移到新服务空间。迁移过程中云函数、数据库均可正常访问，云存储无法写入（删除或上传文件）

- 公测版不可迁移到商业版的免费版
- 客户端需要重新打包以使用新服务空间，需要`HBuilderX 3.6.10-alpha`或`HBuilderX 3.6.5`及以上版本
- 注意迁移后服务空间id会变，如果云函数内有用到相关逻辑请务必注意调整。短信、一键登录功能使用了服务空间白名单的也务必将新空间加到白名单内
- 旧服务空间云函数url化默认域名会保留一段时间（请求会被转发到新服务空间），在后续清理时会彻底删除
- 云函数url化自定义域名需要重新绑定
- 迁移到商业版后旧服务空间的数据库备份不会被迁移过来
- 旧云存储url需要通过`uniCloud.getFileInfo`（云函数接口：[uniCloud.getFileInfo](storage.md#get-file-info)，客户端接口：[uniCloud.getFileInfo](storage.md#cloud-get-file-info)）接口获取新服务空间的cdn链接，需要`HBuilderX 3.6.10-alpha`或`HBuilderX 3.6.5`及以上版本
- 商业版云存储和云函数位于同一区域，云函数上传文件到云存储会比之前快很多
- 前端网页托管自定义域名需要重新绑定
- 前端网页托管不再提供文件变动自动刷新缓存功能，提供手动刷新功能
