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

## 使用教程

`uni统计2.0`包括两个模块：
- 前端采集模块：通常为用户端App，内置在`uni-app`项目中，可通过`manifest.json`进行配置；
- 云端统计模块：通常为管理后台，内置在`uni-admin`项目，和用户端App项目复用同样的服务空间；

### 前端采集配置

在项目中打开 `manifest.json` , 选择 `uni统计配置` 项，根据需求，选择开通 `uni统计` ，勾选 `version2` 开启新版统计。

![开启统计](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/fa9e12a5-1f11-4b78-9439-93feef9f86e0.png)

#### 全局设置（通过源码视图配置统计）

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

**uniStatistics说明**

|字段|类型|默认值|可选值|说明|
|:-:|:-:|:-:|:-:|:-:|
|enable|Boolean|false|true ， false|全局开启或关闭统计 ，分平台配置会覆盖当前配置|
|version|String|"1"|"1" ， "2"|统计版本 ，如不填写，默认使用版本1.0，推荐使用2.0版本|
|debug|Boolean|false|true ， false|开启统计调试模式 ，会产生大量日志，且会在开发阶段上报数据，应用发布请关闭此项|

#### 分平台设置（通过源码视图配置统计）

`uniStatistics` 支持分平台设置，比如若需仅开启微信平台的 `uni统计`，则在`mp-weixin`节点下设置 `uniStatistics ->enable` 即可，如下：

```js
//...
"mp-weixin":{
    "uniStatistics": {
        "enable": true //微信平台开启统计
    }
}
```

**uniStatistics说明**

|字段|类型|默认值|可选值|说明|
|:-:|:-:|:-:|:-:|:-:|
|enable|Boolean|false|true ， false|分平台开启或关闭统计 ，分平台配置会覆盖全局配置，uniStatistics 需在平台配置下|

::: warning 注意
- 在分平台下如有`uniStatistics -> enable`字段，则优先使用分平台下配置 ，反之使用全局统计设置
- 分平台无需设置 `version`、`debug` 属性 ，两个属性仅全局生效
- 分平台无需设置 `debug` 属性 ，该属性仅在全局生效
- 仅在开启调试模式或发行代码后才会正常上报数据
:::

#### 域名白名单

由于各家小程序对可访问的域名要配置白名单，否则无法联网。

注意选择对应的服务商域名（文章后面章节会有服务空间相关配置）

| 服务提供商 |      request 合法域名       |
| :--------: | :-------------------------: |
|   阿里云   |       api.bspapp.com        |
|   腾讯云   | tcb-api.tencentcloudapi.com |


#### 调试模式

将 `manifest.json -> uniStatistics` 下的 `debug` 字段设置为 `true|false` ,来开启关闭 `uni统计`调试模式

在调试模式下，会将上报数据的关键信息打印到控制台，方便观察采集信息是否正确 ，多用在自定义扩展的时候

**日志格式**

`===` 表示统计日志相关日志

``` js
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

日志字段说明，详见[前端采集SDK](#web-sdk)

### 后台报表配置

#### 关联admin相关

`uni统计2.0`的后台统计报表是`uni-admin`的内置插件，故使用`uni统计2.0`，需依赖[uni-admin](https://uniapp.dcloud.io/uniCloud/admin.html#uni-admin-%E6%A1%86%E6%9E%B6-%E5%8E%9F%E5%90%8D-unicloud-admin)项目。

请参考[uni-admin](https://uniapp.dcloud.io/uniCloud/admin.html#uni-admin-%E6%A1%86%E6%9E%B6-%E5%8E%9F%E5%90%8D-unicloud-admin)文档，完成如下操作：

1. 创建新的`uni-admin`项目
2. 绑定服务空间
3. 部署云端资源（上传部署云函数、公共模块、初始化数据库表等）
4. 完成其它初始化配置，如：打开`uni-config-center` 配置 `uni-id` 相关秘钥
5. 运行 uni-admin 项目，在「应用管理」中新增「被统计应用」的记录（appid 等）

::: warning 注意
若你想复用老的`uni-admin`项目，请手动对比新老项目差异，将uni统计新增云函数及统计页面复制到老的uni统计项目中，主要包括：
- 云函数：`uniCloud/cloudfunctions/uni-stat-cron`、`uniCloud/cloudfunctions/uni-stat-receiver`
- 通用模块：`uniCloud/cloudfunctions/uni-stat`
- 数据表：`uniCloud/database`目录下相关`schema`文件
- 统计页面：`pages/uni-stat` 文件夹
:::

#### 定时跑批周期

`uni统计2.0`默认跑批间隔为1小时，即：每隔1小时，针对采集到的数据进行统计，计算新增、活跃、留存等。

你可以根据需要修改跑批周期到分钟级，但要注意开启分钟级定时任务后，需要确保[定时任务配置项](#定时任务配置说明)中设置的分钟数是否会被触发，比如你的配置项中设置的是每小时的第10分钟触发（表达式：`* * * 10`），而定时触发器设置的为每20分钟触发1次（`0 1/20 * * * * *`），那这个配置项将永远不会触发。

::: warning 注意
1. 现阶段阿里云仅支持小时级的定时任务，预计很快支持分钟级定时任务，现阶段阿里云用户如想开通分钟级定时任务必须先向DCloud申请后再开启。[申请方式](https://uniapp.dcloud.io/uniCloud/price.html#aliyun)
2. 因云函数运行时长为最大10分钟，所以开启分钟级定时任务后，如果想重新设置定时任务触发时间的话，需要确保各定时任务之间的触发间隔时间要大于等于10分钟，防止出现运行超时的问题。
:::

- 我们这里以将跑批周期修改为每隔10分钟触发1次为例，正确的步骤为：

1. 修改uni统计配置项将`cronMin`参数的值改为`true`。
2. 修改`定时任务云函数（uni-stat-cron）`下的`package.json`文件中的定时触发器配置项，关于定时触发器的具体说明可以参考官方文档[定时触发器](https://uniapp.dcloud.io/uniCloud/trigger.html)。
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
4. 重新上传部署`定时任务云函数（uni-stat-cron）`和`配置中心（uni-config-center）`。





#### 开启redis缓存

::: warning 注意
开启redis缓存前，需要先确认是否已在布署uni统计的服务空间内购买redis服务，如果没有购买则需要先购买redis服务。
:::

**开启步骤：**
1. 修改uni统计配置项将`redis`参数的值改为`true`。
2. 分别在数据`上报数据接收器（uni-stat-receiver）`和`定时任务云函数（uni-stat-cron）`下的`package.json`文件中添加redis拓展库。
3. 重新上传部署数据`上报数据接收器（uni-stat-receiver）`、`定时任务云函数（uni-stat-cron）`和`配置中心（uni-config-center）`。

::: preview 
> 配置uni-stat-receiver的redis拓展库
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


### 共享服务空间

为了让用户端App采集到的数据，可以被`uni-admin`中的云函数正确接收并统计，需保证用户端项目和admin项目，共享同样的服务空间。

客户端和管理后端都已经准备好了，但是现在还不能从客户端直接上报数据到管理后端，所以需要关联客户端和管理后端的服务空间

1. 选择用户端项目（需采集用户数据的项目）
2. 若该项目之前未启用`uniCloud`，右键并选择 `创建uniCloud云开发环境 -> 阿里云|腾讯云`；否则，进入第3步；

![关联前后台数据](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/b2ad84ed-a69a-43dc-b8d1-6efaafd96a14.png)

3. 在`uniCloud`目录右键并选择`关联云服务空间或项目`，在打开的窗口中选择对应`uni-admin`项目关联的服务空间

![关联前后台数据](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/14744bf3-c88e-4408-b2fa-0ecf0dcf4fe1.png)



## 开源代码解读

- 前端采集SDK源码地址，[查看](https://github.com/dcloudio/uni-app/tree/next/packages/uni-stat)
- 云端统计模块以及统计后台源码地址，[查看](https://github.com/dcloudio/uni-admin)

### 前端采集SDK @web-sdk

#### 采集类型

**应用启动**

访问开始即启动程序，访问结束结分为：进入后台超过5min、在前台无任何操作超过30min、新的来源程序

|上报字段|说明|
|:-:|:-:|
|lt|统计数据类型，默认值为1，`类型见下文`|
|ut	|平台类型，`类型见下文`|
|mpsdk|小程序 sdk version|
|mpv|小程序平台版本，如微信、支付宝等|
|mpn|原生平台包名、小程序 appid|
|v|应用版本。原生应用|
|p|手机系统，`类型见下文`|
|net|网络类型，`类型见下文`|
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


**应用进入后台**

应用进入后台时，在 SDK 中是应用的 onHide 生命周期触发

|上报字段|说明|
|:-:|:-:|
|lt			|统计数据类型，默认值为3，`类型见下文`|
|ut			|平台类型，`类型见下文`|
|p			|手机系统，`类型见下文`|
|urlref		|应用退出时停留的页面|
|urlref_ts	|应用退出时，最后一个页面的停留时间|
|ch			|渠道信息|
|usv		|统计 sdk 版本|
|t			|上报数据时的时间戳|


**页面切换**

页面跳转时上报，在 SDK 中是页面的 onHide 生命周期触发

|上报字段|说明|
|:-:|:-:|
|lt|统计数据类型，默认值为11，`类型见下文`|
|ut	|平台类型，`类型见下文`|
|p|手机系统，`类型见下文`|
|url|当前页面的完整 url，包含参数在内。最多255字符|
|ttpj|pages.json 中定义的页面的 title|
|ttn|通过API uni.setnavigationbartitle 设置的 title|
|ttc|通过 uni.report 上报的页面的 title|
|ttct|title 组件中设置的 title|
|urlref		|应用退出时停留的页面|
|urlref_ts	|应用退出时，最后一个页面的停留时间|
|ch	|渠道信息|
|usv|统计 sdk 版本|
|t|上报数据时的时间戳|

**事件触发**

用户触发某些业务逻辑时
- 默认事件
    - 登录：用户信息
    - 支付：商品名称、金额
    - 分享：
- 用户自定义事件

|上报字段|说明|
|:-:|:-:|
|lt|统计数据类型，默认值为21，`类型见下文`|
|ut	|平台类型，`类型见下文`|
|p|手机系统，`类型见下文`|
|url|当前页面的完整 url，包含参数在内。最多255字符|
|e_n|事件名称|
|e_v|事件参数|
|ch	|渠道信息|
|usv|统计 sdk 版本|
|t|上报数据时的时间戳|

**应用错误**

应用发生错误时上报

|上报字段|说明|
|:-:|:-:|
|lt|统计数据类型，默认值为21，`类型见下文`|
|ut	|平台类型，`类型见下文`|
|p|手机系统，`类型见下文`|
|ch|渠道信息|
|mpsdk|小程序 SDK Version|
|mpv|小程序平台版本，如微信、支付宝等|
|v|应用版本。原生应用|
|em|错误信息|
|usv|统计 sdk 版本|
|t|上报数据时的时间戳|


**`lt`：统计数据类型**

|值|说明|
|:-:|:-:|
|1  |应用启动，对应 `onLaunch` 事件|
|3  |应用进入后台，对应应用 `onHide` 事件|
|11 |页面跳转，对应页面 `onHide` 事件|
|21 |事件触发|
|31 |应用错误|

**`ut`：平台类型**

|值|说明|
|:-:|:-:|
|n|移动端  |
|h5|h5	  |
|wx|微信	  |
|ali|阿里	  |
|bd|百度	  |
|tt|头条	  |
|qq|qq	  |
|qn|快应用  |
|ks|快手	  |
|lark|飞书	  |
|qw|快应用  |
|dt| 钉钉	  |

**`p`：手机系统**

|值|说明|
|:-:|:-:|
|a|Android|
|i|iOS|


**`net`：网络类型**

|值|说明|
|:-:|:-:|
|wifi|wifi网络|
|2g|2g网络|
|3g|3g网络|
|4g|4g网络|
|5g|5g网络|
|none|无网络|
|cable|有线|

#### 数据上报逻辑

数据上报间隔最小是 10s 上报一次 ，在上报间隔内，会将每次上报节点的数据加入统计数据队列，10s后会在下一个上报节点，统一对数据队列进行一定的处理进行上报。

这么做的目的是防止频繁上报引起的并发问题。所以上报请求不是时实发生的。

### 云端统计

#### 统计报表展示页

为了突出目标，仅注释出 uni 统计相关的文件夹及文件，其余与普通 uni-app 项目相同。新增页面可参考 uni-stat 中相似页面。

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

**一、 uni统计服务端构成**

- `uni-config-center/uni-stat 配置模块`：给uni统计提供运行必要的配置参数。
- `uni-stat 公共模块`：数据处理模块，包括收集上报数据的处理入库及定时任务的数据处理。
- `uni-stat-receiver 上报数据接收器`：接收客户端上报数据并转发给公共模块处理。注意：该云对象依赖于`uni-id`公共模块。
- `uni-stat-cron 定时任务云函数`：触发定时任务并转发给公共模块处理。

**二、公共模块说明**

::: warning 注意
注意：uni统计公共模块依赖于 uniCloud配置中心（uni-config-center）
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
uni统计配置项存放于uniCloud配置中心（`uni-config-center`）下的 `uni-stat/config.json`文件中，用户可根据自身系统需要自定义各配置项的值。

::: warning 注意
注意：修改uni统计配置项后需要重新上传公共模块`uni-config-center`后才会生效。
:::

**基础参数**

|配置项				|默认值		|说明																																																|
| :--------:		|:---------:|:-------------------:																																												|
|  debug			|  false	|开启调试模式 true: 开启，false:关闭，开启后会产生大量日志，生产环境请关闭。																														|
|  redis			|  false	|开启redis缓存，开启后可以降低数据库查询压力，提升uni统计性能，可按需决定是否开启。[开启方法](#开启redis缓存)																					|
|  cachetime		|  604800	|redis缓存有效期，单位秒。																																											|
|  sessionExpireTime|  1800		|会话过期时间，该配置用来判断当前会话是否已过期，一般情况下无需修改此项。																															|
|  realtimeStat		|  true		|开启实时统计，true: 开启，false:关闭，开启后会每小时统计一次，数据库读写次数会增多，可按需决定是否开启。																							|
|  cronMin			|  false	|开启分钟级定时任务，true: 开启，false:关闭。开启后定时任务将细分到分钟级执行，分摊数据计算压力，适合应用日活较大或有特殊需求的用户群体。开启方法见[定时跑批周期](#定时跑批周期)。	|
|  cron				|  -		|用于配置定时任务触发时间，详情见下方[定时任务配置说明](#定时任务配置说明)。																														|
|  batchInsertNum	|  5000		|当有批量写入操作时，限制单次写入数据库的最大条数。为防止写入超时，最大值为5000条。																													|
|  errorCheck		|  -		|错误检测，此项用于在规定时间内限制相同的错误日志写入数据库，防止有高频错误产生时造成大量的数据库写入操作。[详情](#错误检测配置说明)																|
|  cleanLog			|  -		|日志清理，此项用于配置定时清理过期的日志，减少数据库数据的存储量，提升uni统计性能。[详情](#日志清理配置说明)																						|


#### 定时任务配置说明

`cron` 参数用于配置定时任务触发时间，一般无需修改此项。

|参数		|说明																																|
| :--------:|:-------------------:																												|
|  type		|定时任务类型：如 `stat`：基础数据统计																								|
|  time		|触发时间表达式：`* * * *` 共四位，由左到右分别代表：星期（1-7代表周一到周日）/日/时/分。例：每天晚上0点0分触发，应写作 `* * 0 0`	|

目前定时任务类型有（`以下括号内的内容表示开启分钟级统计后定时任务的触发时间`）：

- `stat`：基础数据统计，统计维度包括：
  - 实时统计，默认`每小时（0分钟）`触发，统计上一小时的基础数据
  - 日统计，默认`每天上午1点（10分钟）`触发，统计前一天的基础数据
  - 周统计，默认`每周一上午1点（20分钟）`触发，统计上一周的基础数据
  - 月统计，默认`每月1号上午3点（30分钟）`触发，统计上一月的基础数据

- `retention-device`：设备留存数据统计，统计维度包括：
  - 日统计，默认`每天上午2点（20分钟）`触发，统计前一天的设备留存数据
  - 周统计，默认`每周一上午2点（30分钟）`触发，统计上一周的设备留存数据
  - 月统计，默认`每月1号上午4点（30分钟）`触发，统计上一月的设备留存数据

- `retention-user`：用户留存数据统计，统计维度包括：
  - 日统计，默认`每天上午3点（40分钟）`触发，统计前一天的用户留存数据
  - 周统计，默认`每周一上午5点（30分钟）`触发，统计上一周的用户留存数据
  - 月统计，默认`每月1号上午6点（40分钟）`触发，统计上一月的用户留存数据

- `active-device`：活跃设备数据归档，统计维度包括：
  - 日归档，默认`每天上午0点（10分钟）`触发，归档前一天的活跃设备数据，注意：此项数据要保持在`基础数据统计`、`设备留存数据统计`、`用户留存数据统计`中的周统计、月统计触发之前执行。

- `active-user`：活跃用户数据归档，统计维度包括：
  - 日归档，默认`每天上午0点（20分钟）`触发，归档前一天的活跃用户数据，注意：此项数据要保持在`基础数据统计`、`设备留存数据统计`、`用户留存数据统计`中的周统计、月统计触发之前执行。

- `page`：页面数据统计，统计维度包括：
  - 日统计，默认`每天上午3点（20分钟）`触发，统计前一天的页面数据

- `event`：事件数据统计，统计维度包括：
  - 日统计，默认`每天上午4点（20分钟）`触发，统计前一天的事件数据

- `error`：错误数据统计，统计维度包括：
  - 日统计，默认`每天上午5点（20分钟）`触发，统计前一天的错误数据



#### 错误检测配置说明

`errorCheck`参数用于在规定时间内限制相同的错误日志写入数据库，防止有高频错误产生时造成大量的数据库写入操作，可按需开启或关闭。

|参数		|说明								|
| :--------:|:-------------------:				|
| needCheck	|是否需要检测：true：是；false:否	|
| checkTime	|错误检测间隔时间，单位`分钟`。		|


#### 日志清理配置说明

`cleanLog`参数用于配置定时清理过期的日志，减少数据库数据的存储量，提升uni统计性能。

|参数			|说明																																								|
| :--------:	|:-------------------:																																				|
| open			|是否开启日志清理：true：是；false:否																																|
| reserveDays	|各项日志的保留天数配置，参数格式：`日志类型:保留天数`，例如： `sessionLog:31`代表保留31天的会话日志，保留天数设置为0时表示永久保留(此举会累积大量无用数据，不推荐)	|

目前可配置的日志类型有：

- `基础会话日志：sessionLog`，默认保留`31`天的日志。注意：因设备留存统计中最长需要统计30后的留存数据， 所以基础会话日志要至少保存`31`天的日志，否则会对设备留存统计造成影响。
- `用户会话日志：userSessionLog`，默认保留`31`天的日志。注意：因用户留存统计中最长需要统计30后的留存数据， 所以用户会话日志要至少保存`31`天的日志，否则会对用户留存统计造成影响。
- `页面日志：pageLog`，默认保留`7`天的日志。
- `事件日志：eventLog`，默认保留`7`天的日志。
- `分享日志：shareLog`，默认保留`7`天的日志。
- `错误日志：errorLog`，默认保留`7`天的日志。

::: warning 注意事项
- 客户端和统计后台两个项目务必关联同一个服务空间，且uni-admin中所有云函数、公共模板等都已经上传部署到该服务空间
- 使用 uni 统计必须配置 APPID 才能正常使用。[DCloud的Appid有什么用，如需转让应用怎么做](https://ask.dcloud.net.cn/article/35907)
- 应用在运行、调试时不会上报统计数据，仅在发行后，并启动新版的App、h5、小程序，才会上报数据。
- 不支持 CLI 项目
:::


### 常见问题

**1. 启动uni统计，何时可以查看报表数据？**

答：与定时任务配置配置有关，默认`统计首页`、`今日概况`等数据为1小时后可见，其余数据为次日可见。要想详细了解各类型数据统计时间请参考[定时任务配置说明](#定时任务配置说明)。

**2. 如何判断是否需要配置分钟级定时任务？**

答：一般情况下是不需要自行配置的，但如果`定时任务云函数（uni-stat-cron）`出现运行超时的情况时，就要考虑去开启分钟级定时任务了。

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


