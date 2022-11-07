## 概述

选择阿里云作为服务商时，服务空间资源完全免费，每个账号最多允许创建50个服务空间。**阿里云目前处于公测阶段，如有正式业务对稳定性有较高要求建议使用腾讯云。**

选择腾讯云作为服务商时，需付费购买套餐，超出套餐后可开启按量计费，套餐详情参考[腾讯云基础套餐](uniCloud/price?id=tencent-package)。

付费用户享受腾讯云提供的服务协议SLA，[详见](https://uniapp.dcloud.net.cn/uniCloud/agreement)

uniCloud的腾讯云版的定价、套餐内容、服务SLA，是由腾讯公司直接公布的。DCloud公司不会加价，包括开发者通过DCloud充值也会直接充到开发者在腾讯云建立的子账户下。DCloud只从腾讯云等云厂商获取返佣，也不会在未来加价收割开发者。

uniCloud提供包月、按量计费两种计费方式（仅腾讯云），具体说明如下：

|计费方式	|付费方式									|计费单位																							|
|:-:			|:-:											|:-:																									|
|包月	|预付费										|参考 [腾讯云包月套餐](uniCloud/price?id=price-month)																|
|按量计费	|结算时冻结费用，每日结算	|参考 [腾讯云按量计费](uniCloud/price?id=price-info)|


## 阿里云@aliyun

阿里云的服务空间是纯免费的。但为避免资源滥用，有一些限制，见下。

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

除上面的描述外，阿里云没有其他限制。

因为阿里云免费向DCloud提供了硬件资源，所以DCloud也没有向开发者收费。如果阿里云后续明确了收费计划，DCloud也会第一时间公布在这里。

如有超大型应用突破阿里云资源限制，请发邮件到service@dcloud.io请求协助，可以特批扩大资源。

申请邮件内需要提供以下信息

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

**使用腾讯云Nodejs12版本时，务必仔细阅读此文档：[keepRunningAfterReturn](uniCloud/cf-functions.md?id=keep-running)**

为了给各位用户提供更加优质可靠的产品服务，腾讯云计划将于2022年8月12日，对计费方式进行如下升级：

新计费模式下，统一采用**基础套餐+按量计费**的模式，开发者可先购买带有一定配额的基础套餐，超出套餐配额部分按使用量付费。

### 基础套餐@tencent-package

| 配额						| 个人版						| 入门版| 初创版	| 商用版	| 团队版	| 单位	|
| ---							| ---								| ---		| ---			| ---			|  ---		| ---		|
| QPS							| 500								| 500		| 500			| 800			| 1000		| -			|
| 调用次数				| 20								| 500		| 1000		| 2000		| 5000		| 万次	|
| 容量						| 2									| 30		| 100			| 200			| 300			| GB		|
| 云函数资源使用量| 10								| 30		| 45			| 60			| 100			| 万GBs	|
| 云函数外网出流量| 2									| 8			| 10			| 15			| 25			| GB		|
| CDN流量					| 5									| 80		| 200			| 400			| 600			| GB		|
| CDN回源流量			| 5									| 40		| 100			| 200			| 300			| GB		|
| 价格						| **~~39.9~~ 19.9**	| **99**| **299**	| **499**	| **999**	| 元/月	|

1. 个人版5折折扣至少延续至2022年底，后续折扣如有变化将另行通知。
2. **调用次数**：包含云存储上传、下载操作；数据库读、写操作；云函数调用次数。
3. **容量**：包含云存储、数据库容量。
4. **CDN流量**、**CDN回源流量**：仅包含云存储，不含前端网页托管
5. 开通基础套餐时可以选择是否允许超量，开启后如果用量超出套餐配额将按照按量付费定价进行收费
6. 前端网页托管开通后即为按量计费，不管服务空间有没有开启允许超量使用，前端网页托管计费参考[高级功能按量计费](#tencent-advanced)

### 按量付费/超量使用定价@tencent-postpay

| 计费项					| 定价						|
| ---							| ---							|
| 调用次数				| 0.5元/万次/天		|
| 容量						| 0.1元/GB/天			|
| 云函数资源使用量| 0.00011108元/GBs|
| 云函数外网出流量|  0.8元/GB				|
| CDN流量					| 0.21元/GB				|
| CDN回源流量			| 0.15元/GB				|


### 高级功能按量计费定价@tencent-advanced

| 计费项		|计费项								|定价							|
| ---				| ---									|---							|
|前端网页托管		|容量									|0.005元/GB/天		|
|						|流量									|0.21元/GB				|
|日志服务		|标准索引存储					|0.0115元/GB/日		|
|						|标准日志存储					|0.0115元/GB/日		|
|						|标准索引流量					|0.35元/GB/日			|
|						|写流量								|0.18元/GB/日			|
|						|请求次数							|0.15元/百万次/日	|
|						|分区数量							|0.04元/个/日			|

- 在正式进行计费方式切换之日起，用户将不可继续续费或新购旧版套餐或按量计费服务空间。用户可选择是否切换新的计费方式，超时（2022.09.08）切换的服务空间将会停服释放。
- 新计费下腾讯云云函数日志保存时长为7天

**注：当包年包月服务空间升级新套餐时，如果已开通前端网页托管，则前端网页托管会自动转为按量计费，请确保账号余额充足！**

### 余额及保证金@tencent-balance
腾讯云余额可用于服务空间`按量计费`产生的费用扣款，如服务空间套餐资源用尽后`超限按量`、前端网页托管等服务产生的费用。单次充值不低于10元，充值后不支持退款，**余额不支持购买腾讯云包年包月套餐，请根据业务使用量合理选择充值金额**。

腾讯云购买基础套餐后，如果开启了`超限按量`功能，在超出套餐资源用量后，每日的资源用量会在第二天按照按量计费结算并从余额中扣除。由于存在余额超支的情况，使用按量计费服务需要缴纳保证金，账户保证金在停止使用按量计费服务后可以申请退还，所以账户保证金不能申请开具发票。若需退还保证金，需满足以下条件：
1. 服务空间未开启`超限按量`功能
2. 服务空间未开通`前端网页托管`

由于包年包月前端网页托管已下线，新开通的前端网页托管均为按量计费，如果开通了上面两项功能，请先关闭，然后发邮件到 service@dcloud.io 申请退还。

## 发生故障时如何判断故障点

当你的线上系统故障时，可以参考此文档判断责任归属：[如何判断是DCloud或阿里云或腾讯云的问题](https://uniapp.dcloud.io/uniCloud/faq?id=fault)

## 云厂商之间的迁移@cross-provider

### 数据库迁移@cross-provider-db

目前可以使用云数据库的导入导出进行迁移，迁移数据库之前可以使用导出db_init.json功能将所有集合及索引导出。再使用数据导入导出功能进行迁移。导入导出请参考：[数据导入导出和备份](uniCloud/hellodb.md?id=dbmigration)

> 也可以直接使用第三方封装好的插件：[unicloud数据库一键搬家工具，支持阿里云与腾讯云互转。支持跨账号转。](https://ext.dcloud.net.cn/plugin?id=6089)

#### 腾讯云迁移到阿里云@tencent-to-aliyun-db

迁移数据可以通过在腾讯云服务空间导出数据表为json文件，在阿里云服务空间导入json文件到表的方式进行迁移。

#### 阿里云迁移到腾讯云@aliyun-to-tencent-db

由于此前腾讯云并未完全支持ObjectId类型的数据，在阿里云迁移到腾讯云时需要注意处理一下`ObjectId`类型的数据，包括自动生成的_id字段以及关联到其他表的_id的字段。简单来说就是将导出的数据内的ObjectId类型的数据处理成字符串且不满足ObjectId的格式。

例：

```js
// 原始数据
{"_id":{"$oid":"60fa6d25cd84d60001ec38a2"},"uid":{"$oid":"60fa6d1d2e5faa0001ade857"}}

// 调整后的数据
{"_id":"60fa6d25cd84d60001ec38a2a","uid":"60fa6d1d2e5faa0001ade857a"} // 在结尾追加了一个“a”使其不满足ObjectId格式
```

以下为一个简单的脚本示例用于处理导出的json文件

如果将此文件存储为`parse.js`，使用`node parse.js 输入文件相对或绝对路径 输出文件相对或绝对路径`即可处理导出的json文件

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
