## uni统计2.0

uni统计2.0 是基于 uniCloud 开发的开源、免费统计平台。

## 产品特色

`uni统计2.0`和`uni统计1.0`一样，均支持全域流量统计，无需在各端接不同的 sdk、无需在不同后台查看数据。使用 uni 统计，一张报表可查看所有端（iOS、Android、H5 及各家小程序）的运营数据。

相比`uni统计1.0`，`uni统计2.0`还有如下特色功能：

**1. 开源**

前端采集数据的 SDK、云端接收数据的云函数、云端跑批统计的云函数、展示统计结果的管理报表，所有代码全部开源。

**2. 私有部署**

使用传统`saas`类统计产品时，所有 App 数据都上报在统计厂商统一的数据库中，也就是中央化部署模式。
`uni统计2.0`基于`uniCloud`实现，云函数、统计数据全部托管在开发者自己的服务空间中，开发者对自己的统计数据拥有完整的控制权。

**3. 自由定制**

`uni统计2.0`所有代码是完全开源的，开发者可在开源代码基础上，轻松扩展统计维度，自由定制报表样式。

**uni 统计新老版本对比**

|功能|uni统计1.0|uni统计2.0|
| :-: | :-: | :-: |
|是否开源 |否|是|
|是否免费 |是|是|
|部署方式 |中央部署|私有部署|
|定制方式 |不可定制|方便定制|

## 前端配置

在项目中打开 `manifest.json` , 选择 `uni统计配置` 项，根据需求，选择开通 `uni统计` ，勾选 `version2` 开启新版统计。

![开启统计](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/73a73c56-1b65-4fc2-9429-26248f3e1267.png)

### 全局设置

将 `manifest.json -> uniStatistics` 下的 `enable` 字段设置为 `true|false` ,来开启关闭 `uni统计`

设置 `version` 属性为 `"2"` 来开启新版统计

```js
//...
"uniStatistics": {
    "enable": true,//全局开启
 "version": "2" // 开启新版uni统计，值为字符串
},
//...
```

### 分平台设置

`uniStatistics` 支持分平台设置，比如若需仅开启微信平台的 `uni统计`，则在`mp-weixin`节点下设置 `uniStatistics ->enable` 即可，如下：

```js
//...
"mp-weixin":{
    "uniStatistics": {
        "enable": true //微信平台开启统计
    }
}
```

::: warning 注意
- 在分平台下如有`uniStatistics -> enable`字段，则优先使用分平台下配置 ，反之使用全局统计设置
- 分平台无需设置 `version` 属性 ，`version` 属性仅全局生效
- 应用在运行、调试时不会上报统计数据，仅在发行后，并启动新版的App、h5、小程序，才会上报数据。
- 如需在开发运行阶段调试查看上报数据 ，可开启 debug 模式 ，后文查看详情
:::

### 域名白名单

由于各家小程序对可访问的域名要配置白名单，否则无法联网。

注意选择对应的服务商域名（文章后面章节会有服务空间相关配置）

| 服务提供商 |      request 合法域名       |
| :--------: | :-------------------------: |
|   阿里云   |       api.bspapp.com        |
|   腾讯云   | tcb-api.tencentcloudapi.com |

## 统计管理后台配置

新版统计与之前不同的是需要用户自行管理部署统计后台，使用了 [uni-admin](https://uniapp.dcloud.io/uniCloud/admin.html#uni-admin-%E6%A1%86%E6%9E%B6-%E5%8E%9F%E5%90%8D-unicloud-admin)
来管理 `uni统计`数据。

### 创建 uni-admin

使用 `HBuilderX 3.4.x`版本新建 `uni-app` 项目，选择 `uni-admin` 项目模板，如下图:
![download-admin](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/80406bf5-f96a-4a66-9430-a339a4054c96.png)
创建完成后，可以跟随`云服务空间初始化向导`初始化项目，创建并绑定云服务空间

![download-admin](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/7fd34451-2313-4d01-8caf-39f277780642.png)

### 运行 uni-admin

接下来所有操作都是基于新创建的 `uni-admin` 项目来操作

### 目录结构

注意：创建完成后确保 `uniCloud -cloudfunctions` 目录下包含了 `uni-stat-report` 云函数
![目录结构](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/c20bd7bf-d52e-4038-80d6-a2e76c80a091.png)

### 配置 uni-id

打开`uni-config-center` 配置 `uni-id` 的 `passwordSecret` 和`tokenSecret`字段 （测试期间跳过本条也可以）

- `passwordSecret` 字段 ，用于加密密码入库的密钥
- `tokenSecret` 字段 ，为生成 token 需要的密钥

```js
//  `uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json`
{
  "passwordSecret": "passwordSecret-demo",
  "tokenSecret": "tokenSecret-demo",
  // ...
}
```

### 配置服务空间

右键 `uniCloud` 目录 `运行云服务空间初始化向导`，初始化数据库和上传部署云函数（**如已创建并绑定云服务空间，则跳过此步**）

![配置服务空间](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/7fd34451-2313-4d01-8caf-39f277780642.png)

**运行项目**

点击`HBuilderX`工具栏的运行(快捷键【Ctrl+r】) -> 运行到浏览器。如果是连接本地云函数调试环境，上一步可以不上传云函数，但数据库仍需初始化。

**登录 admin 后台**

从启动后的登录页面的底部，进入创建管理员页面（仅允许注册一次管理员账号）

![登录 admin 后台](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/6582a93f-e707-4d12-9749-48d7e0f58f4b.png)

![登录 admin 后台](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/28e09692-5931-437d-a633-7437ff87bdca.png)

::: warning 注意
- 在 HBuilderX 中运行需在插件市场在安装 [sass 插件](https://ext.dcloud.net.cn/plugin?id=2046)
- 浏览器联网失败，报 `request：fail`，需要去云服务空间的`跨域配置`配置跨域域名，需带端口。[详见](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=useinh5)
- 如从未接触过`uniCloud`，可能无法直接上手uni-admin的，建议先通读下uniCloud文档的概念介绍和快速上手章节。[详见](https://uniapp.dcloud.net.cn/uniCloud/README)
:::

## 关联服务空间


客户端和管理后端都已经准备好了，但是现在还不能从客户端直接上报数据到管理后端，所以需要关联客户端和管理后端的服务空间

1. 在客户端项目右键并选择 `创建uniCloud云开发环境 -> 阿里云|腾讯云`

![关联前后台数据](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/b2ad84ed-a69a-43dc-b8d1-6efaafd96a14.png)

2. 在`uniCloud`目录右键并选择`关联云服务空间或项目`，在打开的窗口中选择上一节`uni-admin`关联的服务空间（两个项目务必关联同一个服务空间，且 uni-admin 中所有云函数、公共模板等都已经上传部署到该服务空间）

![关联前后台数据](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/14744bf3-c88e-4408-b2fa-0ecf0dcf4fe1.png)

3. 发行项目到对应平台 ，此时数据已经成功采集到 `uni-admin` 中

## 前端SDK开启调试模式

将 `manifest.json -> uniStatistics` 下的 `debug` 字段设置为 `true|false` ,来开启关闭 `uni统计`调试模式

在调试模式下，会将上报数据的关键信息打印到控制台，方便观察采集信息是否正确 ，多用在自定义扩展的时候

**日志格式**

`===` 表示统计日志相关日志

```
// 标识统计开启
=== uni统计开启,version:2.0

// 采集日志，采集类型见 ：上报数据说明
=== 统计数据采集：{采集类型} ===
// 这里是采集的原始数据
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
=== 统计队列数据上报 ===
// 这里是上报数据
{usv: '0.0.1', t: 1650857765, requests: '["lt=11&ut=h5&url=/pages/component/view/view&tt=&u…&ch=&usv=0.0.1&t=1650857765&ttn=&ttpj=view&ttc="]'}
=== 上报结束 ===

```

### 采集类型说明

**应用启动**

访问开始即启动程序，访问结束结分为：进入后台超过5min、在前台无任何操作超过30min、在新的来源程序

|上报字段|说明|
|:-:|:-:|
|lt|统计数据类型|
|ut	|平台类型|
|mpsdk|小程序 sdk version|
|mpv|小程序平台版本，如微信、支付宝等|
|mpn|原生平台包名、小程序 appid|
|v|应用版本。原生应用|
|p|手机系统|
|net|网络类型|
|brand|手机品牌|
|md	|手机型号 model|
|lang|语言|
|lat|纬度|
|lng|经度|
|pr	|pixelRatio 设备像素比|
|ww	|windowWidth 可使用窗口宽度|
|wh	|windowHeight 可使用窗口高度|
|sw	|screenWidth 屏幕宽度|
|sh	|screenHeight 屏幕高度|
|url|当前页面的完整 url，包含参数在内。最多255字符|
|ch	|渠道信息|
|fvts|首次访问时间戳|
|lvts|上次访问时间戳|
|cn	|国家|
|pn	|省份|
|ct	|城市|
|sc	|场景值|
|tvc|用户到本次访问为止总共的访问次数|
|usv|统计 sdk 版本|
|t|上报数据时的时间戳|

## uni-admin公共模块配置项说明
uni统计配置项存放于uniCloud配置中心（`uni-config-center`）下的 `uni-stat/config.json`文件中，用户可根据自身系统需要自定义各配置项的值。

::: warning 注意
修改uni统计配置项后需要重新上传公共模块`uni-config-center`后才会生效。
:::

**基础参数**

|配置项				|默认值		|说明																																																|
|:-:|:-:|:-:|
|debug|false|开启调试模式 true: 开启，false:关闭，开启后会产生大量日志，生产环境请关闭。|
|redis|false|开启redis缓存，开启后可以降低数据库查询压力，提升uni统计性能，可按需决定是否开启。[开启方法](#开启redis缓存)|
|cachetime|604800	|redis缓存有效期，单位秒。|
|sessionExpireTime|1800|会话过期时间，该配置用来判断当前会话是否已过期，一般情况下无需修改此项。|
|realtimeStat|true|开启实时统计，true: 开启，false:关闭，开启后会每小时统计一次，数据库读写次数会增多，可按需决定是否开启。|
|cronMin|false	|开启分钟级定时任务，true: 开启，false:关闭。开启后定时任务将细分到分钟级执行，分摊数据计算压力，适合应用日活较大或有特殊需求的用户群体。开启方法见下方 [开启分钟级定时任务](#开启分钟级定时任务)。	|
|cron|-|用于配置定时任务触发时间，详情见下方[定时任务配置说明](#定时任务配置说明)。|
|batchInsertNum	|5000|当有批量写入操作时，限制单次写入数据库的最大条数。为防止写入超时，最大值为5000条。																													|
|errorCheck|-|错误检测，此项用于在规定时间内限制相同的错误日志写入数据库，防止有高频错误产生时造成大量的数据库写入操作。[详情](#错误检测配置说明)|
|cleanLog|-|日志清理，此项用于配置定时清理过期的日志，减少数据库数据的存储量，提升uni统计性能。[详情](#日志清理配置说明)|

### 开启redis缓存

::: warning 注意
开启redis缓存前，需要先确认是否已在布署uni统计的服务空间内购买redis服务，如果没有购买则需要先购买redis服务。
:::

**开启步骤：**
1. 修改uni统计配置项将`redis`参数的值改为`true`。
2. 分别在数据`上报数据接收器（uni-stat-receiver）`和`定时任务云函数（uni-stat-cron）`下的`package.json`文件中添加redis拓展库。
3. 重新上传部署数据`上报数据接收器（uni-stat-receiver）`、`定时任务云函数（uni-stat-cron）`和`配置中心（uni-config-center）`。

```javascript
//配置uni-stat-receiver的redis拓展库
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


//配置uni-stat-cron的redis拓展库
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


### 定时任务配置说明

`cron` 参数用于配置定时任务触发时间，一般无需修改此项。

|参数|说明|
| :-:|:-:|
|type|定时任务类型：如 `stat`：基础数据统计|
|time|触发时间表达式：`* * * *` 共四位，由左到右分别代表：星期（1-7代表周一到周日）/日/时/分。例：每天晚上0点0分触发，应写作 `* * 0 0`	|

**目前定时任务类型有：**
|字段|说明|
|:-:|:-:|
|stat|基础数据统计		|
|retention-device|设备留存数据统计|
|retention-user|用户留存数据统计|
|active-device|活跃设备数据归档|
|active-user|活跃用户数据归档x|
|page|页面数据统计|
|event|事件数据统计|
|error|错误数据统计|


### 开启分钟级定时任务

**阿里云服务空间开启步骤：**

1. 因阿里云服务空间默认不支持分钟级定时器，必须先向 DCloud 申请分钟级定时器后再开启。[申请方式](https://uniapp.dcloud.io/uniCloud/price.html#aliyun)
2. 修改 uni 统计配置项将`cronMin`参数的值改为`true`。
3. 修改`定时任务云函数（uni-stat-cron）`下的`package.json`文件中的触发器配置。
4. 重新上传部署`定时任务云函数（uni-stat-cron）`和`配置中心（uni-config-center）`。

```javascript
//config选项为阿里云定时器的cron表达式 将原小时级表达式 "config": "0 0 * * * * *" 更改为分钟级表达式 "config": "0 * * * * * *" 后重新上传部署云函数即可.
"cloudfunction-config": {
	"concurrency": 1,
	"memorySize": 256,
	"timeout": 600,
	"triggers": [
		{
			"name": "uni-stat-cron",
			"type": "timer",
			"config": "0 * * * * * *"
		}
	]
}
```

**腾讯云服务空间开启步骤：**

1. 修改 uni 统计配置项将`cronMin`参数的值改为`true`。
2. 修改`定时任务云函数（uni-stat-cron）`下的`package.json`文件中的触发器配置。
3. 重新上传部署`定时任务云函数（uni-stat-cron）`和`配置中心（uni-config-center）`。

```javascript
//config选项为阿里云定时器的cron表达式 将原小时级表达式 "config": "0 0 * * * * *" 更改为分钟级表达式 "config": "0 * * * * * *" 后重新上传部署云函数即可.
"cloudfunction-config": {
	"concurrency": 1,
	"memorySize": 256,
	"timeout": 600,
	"triggers": [
		{
			"name": "uni-stat-cron",
			"type": "timer",
			"config": "0 * * * * * *"
		}
	]
}
```


### 错误检测配置说明

`errorCheck`参数用于在规定时间内限制相同的错误日志写入数据库，防止有高频错误产生时造成大量的数据库写入操作，可按需开启或关闭。

|参数|说明|
|:-:|:-:|
|needCheck|是否需要检测：true：是；false:否	|
|checkTime|错误检测间隔时间，单位`分钟`。|



### 日志清理配置说明

`cleanLog`参数用于配置定时清理过期的日志，减少数据库数据的存储量，提升 uni 统计性能。注意：因为留存统计的需要，基础会话日志和用户会话日志要至少保存 31 天的日志，否则会对留存统计造成影响。

|参数|说明|
| :-:	|:-:|
|open|是否开启日志清理：true：是；false:否|
|reserveDays|各项日志的保留天数配置，参数格式：`日志类型:保留天数`，例如： `sessionLog:31`代表保留31天的会话日志，保留天数设置为0时表示永久保留(此举会累积大量无用数据，不推荐)|


**目前可配置的日志类型有：**

|字段|说明|
|:-:|:-:|
|基础会话日志|sessionLog|
|用户会话日志|userSessionLog|
|页面日志|pageLog|
|事件日志|eventLog|
|分享日志|shareLog|
|错误日志|errorLog|

::: warning 注意事项
- 客户端和统计后台两个项目务必关联同一个服务空间，且uni-admin中所有云函数、公共模板等都已经上传部署到该服务空间
- 使用 uni 统计必须配置 APPID 才能正常使用。[DCloud的Appid有什么用，如需转让应用怎么做](https://ask.dcloud.net.cn/article/35907)
- 应用在运行、调试时不会上报统计数据，仅在发行后，并启动新版的App、h5、小程序，才会上报数据。
- 不支持 CLI 项目
:::

## 开源代码解读

### 前端SDK说明
uni-app 框架内置


### uni-admin说明
**前端页面结构**
为了突出目标，仅注释出 uni 统计相关的文件夹及文件，其余与普通 uni-app 项目相同。新增页面可参考 uni-stat 中相似页面。

```bash
├── cloudfunctions
├── common                              # 样式
│   │── uni.css                           # 公共样式
│   └── uni-icons.css                     # icon样式
├── components                          # 自定义组件
├── js_sdk                              # js sdk
│   └── uni-stat                         # uni统计相关工具方法
│       └── util.js                      
├── pages                               # 页面
│   └── uni-stat                          # uni统计页面
│       │── channel                       # 渠道（app）
│       │   │── channel.vue                 # 页面（下同）
│       │   └── fieldsMap.js                # 字段配置（下同）
│       │── device                      # 设备统计
│       │   │── activity                  # 渠道/场景分析
│       │   │   │── activity.vue      
│       │   │   └── fieldsMap.js    
│       │   │── comparison                # 平台对比
│       │   │   │── comparison.vue      
│       │   │   └── fieldsMap.js    
│       │   │── overview                  # 今日概览
│       │   │   │── overview.vue      
│       │   │   └── fieldsMap.js    
│       │   │── retention                 # 留存
│       │   │   │── retention.vue      
│       │   │   └── fieldsMap.js    
│       │   │── stickiness                # 粘性
│       │   │   │── stickiness.vue      
│       │   │   └── fieldsMap.js    
│       │   └── trend                     # 趋势分析
│       │       │── trend.vue           
│       │       └── fieldsMap.js        
│       │── error                         # 错误分析
│       │   │── error.vue             
│       │   └── fieldsMap.js            
│       │── event                         # 事件分析
│       │   │── event.vue             
│       │   └── fieldsMap.js            
│       │── index                         # 统计首页
│       │   │── index.vue             
│       │   └── fieldsMap.js            
│       │── page-ent                      # 入口页
│       │   │── page-ent.vue             
│       │   └── fieldsMap.js            
│       │── page-res                      # 受访页
│       │   │── page-res.vue             
│       │   └── fieldsMap.js            
│       │── scene                         # 场景值（小程序）
│       │   │── scene.vue             
│       │   └── fieldsMap.js            
│       └── user                        # 用户统计
│           │── activity                  # 渠道/场景分析
│           │   │── activity.vue      
│           │   └── fieldsMap.js    
│           │── comparison                # 平台对比
│           │   │── comparison.vue      
│           │   └── fieldsMap.js    
│           │── overview                  # 今日概览
│           │   │── overview.vue      
│           │   └── fieldsMap.js    
│           │── retention                 # 留存
│           │   │── retention.vue      
│           │   └── fieldsMap.js    
│           │── stickiness                # 粘性
│           │   │── stickiness.vue      
│           │   └── fieldsMap.js    
│           └── trend                     # 趋势分析
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


### 服务端说明

**1. 服务端构成**

- `uni-config-center/uni-stat 配置模块`：给`uni-stat 公共模块`提供运行必要的配置参数。
- `uni-stat 公共模块`：数据处理模块，包括收集上报数据的处理入库及定时任务的数据处理。
- `uni-stat-receiver 上报数据接收器`：接收客户端上报数据并转发给公共模块处理。注意：该云对象依赖于`uni-id`公共模块。
- `uni-stat-cron 定时任务云函数`：触发定时任务并转发给公共模块处理
 
**2. 公共模块结构说明**
- `shared目录` 公共模块，提供公共函数库等支持。
- `stat/mod目录` 数据模型，提供具体业务实现。
- `stat/lib目录` 工具类类库，提供日期计算、数据加密等额外功能支持。
- `stat/report.js文件` 数据上报功能的分发入口文件。
- `stat/stat.js文件` 数据统计及日志清理功能的分发入口文件。
- `index.js文件` 代理入口文件。





<!-- ## 扩展和自定义方式
uni统计提供了基础的数据报表，如不能达到预期的数据采集，可以在客户端通过 `uni.report(eventKey,param)`  自由上报数据 ，并通过 uni-admin 增加页面 ，自行统计数据。

### uni.report 基础用法 

这里列出 `uni.report(eventKey,param)` 的基本用法，完整`API`查看：[详情](https://uniapp.dcloud.io/api/other/report.html)

`uni.report(eventKey,param)` 有两个参数。
- eventKey  自定义事件名称
- param		自定义事件参数

``` js
// 参数支持字符串
uni.report('购买','购买成功')

// 参数支持对象
uni.report('购买',{
	id:'1000',
	name:'上衣',
	price:'998',
	msg:'购买成功'
	// ...
})
```

 -->


