> 需要HBuilderX 3.5.1 及其以上版本支持

为了更好的服务欢迎：
<a class="join-group-chat" target="_blank" href="https://ask.dcloud.net.cn/uploads/article/20210219/f0fca7f4ea8b8650386fc20345312105.JPG">
	加入uni-push2.0 交流群
	<img src="https://ask.dcloud.net.cn/uploads/article/20210219/f0fca7f4ea8b8650386fc20345312105.JPG">
</a>

<style>
	.join-group-chat{
		position: relative;
	}
	.join-group-chat img{
		display: none;
	}
	.join-group-chat:hover img{
		position: absolute;
                background: #FFF;
		top: 25px;
		right: 0;
		display: block;
		width: 150px;
		height: 150px;
		box-shadow:#999 0px 0px 20px;
		padding: 3px;
	}
</style>

`uni-push`有服务器API和客户端API。

## 客户端API [详情参考](/api/plugins/push)

## 服务端API @uni-cloud-push

以下为uni-cloud-push扩展库的api文档；关于uni-cloud-push扩展库的详细介绍，以及如何在需要操作uni-push的云函数里，手动配置uni-cloud-push扩展库[详情参考](https://uniapp.dcloud.io/unipush-v2.html#%E7%AC%AC%E5%9B%9B%E6%AD%A5-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%8E%A8%E9%80%81%E6%B6%88%E6%81%AF)

### 推送消息@sendMessage

#### 推送目标选择
发送push可以基于如下维度选择目标设备：
- 不指定，所有启动过应用的设备
- user_id，指定的用户id，基于uni-id账户体系
- user_tag，指定用户标签，基于uni-id账户体系
- device_id，指定的设备id，基于opendb表的device设备（未开通uni统计的应用，必须基于uni-id-co登录后才可使用）
- push_clientid，个推客户端id（也会存在opendb表中）。
- getui_alias，个推自定义客户端别名。
- getui_custom_tag，由用户自定义的个推客户端标签。该功能需要申请相关套餐，请点击右侧“技术咨询”了解详情
- getui_big_data_tag，个推大数据标签。该功能需要申请相关套餐，请点击右侧“技术咨询”了解详情

**注意**：`user_id`、`user_tag`、`device_id`、`push_clientid`、`getui_custom_tag`、`getui_big_data_tag`、`getui_alias`不可多选。全为空表示向所有启动过应用的设备推送。

如果用户处于未登录状态，你可以基于`device_id`向用户推送消息，但是推送服务器底层只识别`push_clientid`，需要通过查数据库获得`push_clientid`。而`device_id`与`push_clientid`的映射关系不由`uni-push`提供，而是由[uni统计](https://uniapp.dcloud.io/uni-stat-v2.html)模块内置的功能实现。如果你不使用uni统计，则需要在应用启动时调用[getPushClientId](/api/plugins/push)获取`push_clientid`，获取成功后（应用未在manifest中启用uni-push2.0则会获取失败）调用服务端云对象的某个方法（参数：`push_clientid`）执行向`opendb-device`表写入或更新（存在时）：[设备信息](https://uniapp.dcloud.io/uniCloud/cloud-obj.html#get-client-info)和`push_clientid`。

同理基于`user_id`向用户推送消息，需要`user_id`与`push_clientid`的映射关系，可以直接使用[uni-id-pages](https://ext.dcloud.net.cn/plugin?id=8577)插件内置的功能实现。如果你不使用`uni-id-pages`需要在`App.vue`调用[uniCloud.onRefreshToken](https://uniapp.dcloud.io/uniCloud/client-sdk.html#on-refresh-token) 监听token发生变化（即：用户登录和token续期时），调用服务端云对象的某个方法（参数：`push_clientid`）操作`uni-id-device`表，记录`device_id` 与 `user_id`（防客户端伪造，需校验`token`）的映射关系；完整字段包含`user_id`、`device_id`、`token_expired`、`push_clientid`、`appid`。同时再向`opendb-device`表写入或更新（存在时）：[设备信息](https://uniapp.dcloud.io/uniCloud/cloud-obj.html#get-client-info)和`push_clientid`。


**注意：** 客户端上报的信息在理论上存在被篡改可能，基于`device_id`向用户推送消息有被窃听的风险（营销类消息不用太关心这个）。
例如：张三使用李四的`device_id`+张三的`push_clientid`。上报数据；服务器会认为李四的`push_clientid`更新了，从而将李四的`device_id`与`push_clientid`的映射关系，指向张三的`push_clientid`;张三从而窃听到，其他人发给李四的消息。
而基于`user_id`或者`user_tag`推送消息，是基于`uni-id-device`表，在新增/更新操作时：会校验当前用户的`user_id`，不会被其他用户篡改，即没有被他人窃听消息的风险。

#### 接口形式
可以向设定的（单个、群组、全体）设备，即时或定时推送消息。支持设置：通知栏消息内容、控制响铃，震动，浮动，闪灯；手机桌面应用右上角的角标等。
```js 
await uniPush.sendMessage(OBJECT)
```
#### 入参说明  
|名称|类型|必填|默认值|描述|平台特性|
|--|--|--|--|--|--|
|user_id|String、Array|否|无|基于uni-id的_id，指定接收消息的用户id。</br>支持多个以数组的形式指定多个用户id，如["user_id-1","user_id-2"]，数组长度不大于500| |
|user_tag|String、Array|否|无|指定接收消息的用户标签，基于uni-id账户体系。</br>支持多个以数组的形式指定多个标签，如["user_tag-1","user_tag-2"]，数组长度不大于500| |
|device_id|String、Array|否|无|指定接收消息的设备id，基于opendb表的device设备（未开通uni统计或基于uni-id-pages开发的应用，必须基于uni-id-co登录后才可使用）| |
|push_clientid|String、Array|否|无|基于[uni.getPushClientId](#getPushClientId)获取的客户端推送标识，指定接收消息的设备。</br>支持多个以数组的形式指定多个设备，如["cid-1","cid-2"]，数组长度不大于1000| |
|getui_custom_tag|String|否|无|基于个推`getui_custom_tag`，指定接收消息接设备;</br>注：该功能需要申请相关套餐，请点击右侧“技术咨询”了解详情 。| |
|getui_big_data_tag|Object Array|否|无|对指定应用的符合筛选条件的设备群发推送消息。支持定时、定速功能。详见下方[getui-big-data-tag 说明](#getui-big-data-tag-说明)| |
|getui_alias|String、Array|否|无|个推自定义客户端别名，指定消息接收者。</br>支持多个以数组的形式指定多个设备，如["getui_alias-1","getui_alias-2"]，数组长度不大于1000| |
|platform|String、Array|否|"ALL"|指定接收消息的平台，"ALL"表示所有平台。</br>支持用数组枚举支持的平台，如：["web","app-ios","app-android","mp-weixin"],详情见下方[platform 说明](#platform-说明)</br>仅通过`user_id`、`user_tag`指定消息接收者时有效|
|check_token|Boolean|否|true|校验客户端登陆状态是否有效（含token过期）</br>仅通过`user_id`、`user_tag`指定消息接收者时有效| |
|title|String|是|无|通知栏标题，长度小于20|APP|
|content|String|是|无|通知栏内容，长度小于50|APP|
|payload|String、Object|是|无|推送透传数据，app程序接受的数据，长度小于800字符;</br>注意：为了确保离线厂商通道，可以获得payload的值，请用Object格式如：`{"text":"xxx"}`| |
|force_notification|Boolean|否|false|无论是离线推送还是在线推送，都自创建通知栏消息。HBuilderX 3.5.2 及其以上版本的客户端支持| App|
|badge|Number、String|否|+1|设置应用右上角数字，用于提醒用户未阅读消息数量，支持在原有数字上的+、-操作;</br>例如：badge=+1，表示当前角标+1；</br>badge=-1，(仅iOS支持)表示当前角标-1(角标>=0)；</br>badge=1，(仅iOS和华为EMUI版本10.0.0+支持)表示当前角标置成1。| ios、android-华为|
|channel|Object|否|无|消息渠道设置，避免被限量推送、静默推送（静音且需下拉系统通知栏才可见通知内容），需要在各家发邮件申请，详情下方[channel说明](#channel)</br>此功能依赖uni原生插件[点此打开](https://ext.dcloud.net.cn/plugin?id=7482)打包后生效。| android|
|request_id|String|否|无|请求唯一标识号，10-32位之间；如果`request_id`重复，会导致消息丢失||
|group_name|String|否|无|任务组名。多个消息任务可以用同一个任务组名，后续可根据任务组名查询推送情况（长度限制100字符，且不能含有特殊符号）；</br>仅基于user_id、push_clientid、getui_custom_tag指定消息接收者，或对应用的所有用户群发推送消息时有效。||
|sound|String|否|无|消息提醒铃声设置，常见的离线语音播报功能就是用它实现。android需要设置channel生效，详见下方[铃声设置注意](#sound)</br>如果铃声文件未找到，响铃为系统默认铃声。</br>铃声文件需要使用uni原生插件[点此打开](https://ext.dcloud.net.cn/plugin?id=7482)打包后生效。</br>建议iOS和Android铃声使用一致的文件名称。直接填写文件名，不含扩展名；如：pushsound.caf或pushsound.mp3，直接填写pushsound即可。|
|content_available|Number|否|0|0表示普通通知消息(默认为0)；</br>1表示静默推送(无通知栏消息)，静默推送时不需要填写其他参数。</br>苹果官方建议1小时最多推送3条静默消息|ios |
|open_url|string|否|无|填写该值将:强制push类型为“通知栏消息”，点击后系统浏览器将打开此链接。以`http(s)://`开头的有效可访问链接,华为通道必须使用https。长度小于300|android|
|settings|Object|否|无|推送条件设置，详细解释见下方settings说明||
|options|Object|否|无|其他配置，[更多关于options的说明](/uniCloud/uni-cloud-push/options)||

**频次限制说明：**
- 多客户端接收消息推送API，频次限制200万次/天，申请修改请点击右侧“技术咨询”了解详情。
- 通过getui_big_data_tag（根据条件筛选设备推送）指定消息接收者推送API，频次限制100次/天，每分钟不能超过5次(推送限制和接口执行群推共享限制)，定时推送功能需要申请开通才可以使用，申请修改请点击右侧“技术咨询”了解详情。
- 对指定应用的所有用户群发推送消息API，频次限制100次/天，每分钟不能超过5次(推送限制和接口根据条件筛选用户推送共享限制)

**注意：**
- 调用一次sendMessage，最大推送设备数是500，超过将直接忽略。有超过500台以上设备接收消息的应用场景，应当调用内置在[uni-push-admin插件](https://ext.dcloud.net.cn/plugin?name=uni-push-admin) 中的云对象uni-push-co，调用参数与本api一致
- `push_clientid`如果3个月未登陆会失效，所以uni-id的token过期时间不能超过3个月，否则push模块会有意想不到的故障。

##### getui_big_data_tag 说明
|名称|类型|是否必需|默认值|描述|
|--|--|--|--|--|
|key|String|是|无|查询条件(phone_type 手机类型; region 省市; custom_tag 客户端标签; portrait，个推用户画像使用编码，[点击下载文件portrait.data](https://docs.getui.com/files/portrait.data)。|
|values|String Array| 是| 无|查询条件值列表，其中<br>**手机型号**使用如下参数`android`和`ios`；<br>**省市**使用编号，[点击下载文件region_code.data](https://docs.getui.com/files/region_code.data)；|
| opt_type|String|是|无|or(或),and(与),not(非)，`values`间的交并补操作|

- 不同key之间是交集，同一个key之间是根据`opt_type`操作
- eg. 需要发送给城市在A,B,C里面，没有设置tagtest标签，手机型号为android的设备，用条件交并补功能可以实现，city(A|B|C) && !tag(tagtest) && phonetype(android)

##### platform 说明  
|值|解释|
|:-|:-|
|app-ios|iOS App|
|app-android|Android App|
|web|网页|
|mp-weixin|微信小程序|
|mp-alipay|支付宝小程序|
|mp-baidu|百度小程序|
|mp-toutiao|字节跳动小程序|
|mp-lark|飞书小程序|
|mp-qq|QQ小程序|
|mp-kuaishou|快手小程序|
|mp-jd|京东小程序|
|mp-360|360小程序|
|quickapp-webview|快应用通用(包含联盟、华为)|
|quickapp-webview-union|快应用联盟|
|quickapp-webview-huawei|快应用华为|


##### settings 说明
|名称|类型|必填|默认值|描述|
|--|--|--|--|--|
|ttl|Number|否|1小时|消息离线时间设置，单位毫秒，-1表示不设离线，-1 ～ 3 * 24 * 3600 * 1000(3天)之间|
|strategy|Object|否|{"strategy":{"default":1}}|厂商通道策略，详细内容见strategy|
|speed|Number|否|0|定速推送，例如100，个推控制下发速度在100条/秒左右，0表示不限速|
|schedule_time|Number|否|无|设置定时推送时间（仅向所有启动过应用的设备群发时有效），必须是7天内的时间，格式：毫秒时间戳，此功能需要开通VIP，如需开通请点击右侧“技术咨询”了解详情|

##### strategy 厂商下发策略选择
|名称|类型|必填|默认值|描述|
|--|--|--|--|--|
|default|Number|否|1|默认所有通道的策略选择1-4 <br/>1: 表示该消息在设备在线时推送个推通道，设备离线时推送厂商通道;<br/>2: 表示该消息只通过厂商通道策略下发，不考虑设备是否在线;<br/>3: 表示该消息只通过个推通道下发，不考虑设备是否在线；<br/>4: 表示该消息优先从厂商通道下发，若消息内容在厂商通道代发失败后会从个推通道下发。 其中名称可填写: ios、st、hw、xm、vv、mz、op，如有疑问请点击右侧“技术咨询”了解详情。|
|ios|Number|否|无|ios通道策略1-4，表示含义同上，要推送ios通道，需要在个推开发者中心上传ios证书，建议填写2或4，否则可能会有消息不展示的问题|
|st|Number|否|无|通道策略1-4，表示含义同上，需要开通st厂商使用该通道推送消息|
|...|Number|否|无|通道策略1-4，表示含义同上|

##### channel 说明@channel

>注意：此功能依赖uni原生插件[点此打开](https://ext.dcloud.net.cn/plugin?id=7482)打包后生效。

|名称|类型|必填|默认值|描述|
|--|--|--|--|--|
|HW|string|否|无|取值为“LOW”时，表示消息为资讯营销；取值为“NORMAL”时，表示消息为服务与通讯。需要先向华为侧发邮件申请权限参见[华为消息分类申请](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835)。|
|XM|string|否|无|小米推送的消息通道分为“普通消息”（默认）和“重要消息”两类，默认下发普通消息。普通消息单日可推送数量有限制，重要消息不限。重要消息申请具体请参考： [小米推送消息分类新规](https://dev.mi.com/console/doc/detail?pId=2422)|
|OP|string|否|无|需要联系客服开通;OPush平台上所有通道分为“公信”(默认)、“私信”两类，默认下发公信消息。公信消息单日可推送数量有限制，私信消息不限(仅限单个用户)。私信消息申请请参见（OPPO官方文档）[推送私信通道申请](https://open.oppomobile.com/new/developmentDoc/info?id=11227)。|
|VV|Number|否|无| 0代表运营消息，1代表系统消息;vivo消息分类功能将推送消息类型分为运营消息和系统消息，默认下发运营消息。运营消息单用户单应用单日接收条数上限为5条，系统消息不限。系统消息功能不用申请，可以直接使用，如特殊情况需额外提升系统消息量级，请参见（vivo官方文档）[推送消息分类功能说明](https://dev.vivo.com.cn/documentCenter/doc/359)。|

例如：
```js
"channel":{
	"XM":"xxx",
	"HW":"NORMAL",
	"OP":"xxx",
	"VV":1
}
```

##### 铃声设置注意@sound
1. 华为通道须 [申请自分类权益](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835#section3699155822013)
2. 小米通道需：申请重要级别消息Channel —— 申请其他个性化重要级别消息Channel，并设置自定义铃声前端路径格式：`android.resource://你的APP应用包名/raw/铃声文件名`，例如：`android.resource://io.dcloud.UniPush2/raw/pushsound`（路径不需要带音频后缀名）如图
![](https://docs.getui.com/img/img_getui_server_rest_v2_third_party_1.png)

#### 响应体说明
多个别名推送返回值示例：
```js
{
    "errMsg":"success",
    "errCode":0,
    "data":{
        "$taskid":{
            "$alias1":{
                "$cid1":"$status",
                "$cid2":"$status"
            },
            "$alias2":{
                "$cid3":"$status",
                "$cid4":"$status"
            }
        }
    }
}
```
>返回结构说明请参考[公共返回结构](#公共返回结构)
* 返回参数`data`说明

| 名称 | 类型 | 描述 |
| ------ | ---- | -------- |
| $taskid | Object | 任务编号 |
| $alias | String |设备别名|
| $cid | String |个推客户端id|
| $status | Object |推送结果 <br>successed_offline: 离线下发(包含厂商通道下发)，<br>successed_online: 在线下发，<br>successed_ignore: 最近90天内不活跃设备不下发|

群发返回值示例：
```js
{
	"errCode": 0,
	"errMsg": "",
	"data": {
		"$taskid": "RASA_123_12469008ac33dd02815014631c00000f"
	}
}
```


其他推送返回值示例：
```js
{
	"errCode": 0,
	"errMsg": "",
	"data": {
		"$taskid": {
			"$cid":"$status"
		}
	}
}
```

>返回结构说明请参考[公共返回结构](#公共返回结构)
* 返回参数`data`说明

| 名称 | 类型 | 描述 |
| ------ | ---- | -------- |
| $taskid | Object | 任务编号 |
| $cid | String |个推客户端id|
| $status | Object |推送结果 <br>successed_offline: 离线下发(包含厂商通道下发)，<br>successed_online: 在线下发，<br>successed_ignore: 最近90天内不活跃设备不下发|

### 消息任务
#### 停止任务
对正处于推送状态，或者未接收的消息停止下发（只支持批量推和群推任务）
##### 接口形式
```js 
await uniPush.stopTaskByTaskid(taskId)
```
##### 入参说明
| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| taskId | String | 是 | 无 | 任务id (格式RASL-MMdd_XXXXXX或RASA-MMdd_XXXXXX)|

##### 响应体说明
```js
 {
    "errCode":0, 
    "errMsg":"success"
}
```
> 返回结构说明请参考[公共返回结构](#公共返回结构)


#### 查询定时任务
该接口支持在推送完定时任务之后，查看定时任务状态，定时任务是否发送成功。
##### 接口形式
```js 
await uniPush.getTaskScheduleByTaskid(taskId)
```
##### 入参说明
| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| taskId | String | 是 | 无 | 任务id|

##### 响应体说明
* 返回值示例

```js
 {
    "errCode":0,
    "errMsg":"success",
    "data": {
        "$taskid": {
            "create_time":"",
            "status":"success",
            "transmission_content":"",
            "push_time":""
        }
    }
}
```
* 返回参数`data`说明

| 名称 | 类型 | 描述 |
| ------ | ---- | -------- |
|$taskid|Object|key: 任务编号，value: 任务数据|
|create_time|String|定时任务创建时间，毫秒时间戳|
|status|String|定时任务状态：success/failed|
|transmission_content|String|透传内容|
|push_time|String|定时任务推送时间，毫秒时间戳|


#### 删除定时任务
用来删除还未下发的任务，删除后定时任务不再触发(距离下发还有一分钟的任务，将无法删除，后续可以调用停止任务接口。)
##### 接口形式
```js 
await uniPush.deleteTaskScheduleByTaskid(taskId)
```
##### 入参说明
| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| taskId | String | 是 | 无 | 任务id|

##### 响应体说明
* 返回值示例

```js
 {
    "errCode":0,
    "errMsg":"success"
}
```
> 返回结构说明请参考[公共返回结构](#公共返回结构)


#### 查询消息明细
调用此接口可以查询某任务下某cid的具体实时推送路径情况
>使用该接口需要申请权限，若有需要，请点击右侧“技术咨询”了解详情
##### 接口形式
```js 
await uniPush.getTaskDetail(OBJECT)
```
##### 入参说明
| 名称         |  类型   |是否必须      |    默认值|说明      |  
| ------------ | ----------- |-----------|---|--------|
|taskId         |string | true      |      无|任务id  |         
|cid         |string |   true      |      无|cid   |

##### 响应体说明
* 返回值示例

```js
{
    "errCode":0,
    "errMsg":"success",
    "data":{
        "deatil":[
            {
                "time":"yyyy-MM-dd HH:mm:ss",
                "event":"消息请求成功"
            },
            {
                "time":"yyyy-MM-dd HH:mm:ss",
                "event":"到达客户端"
            }
        ]
    }
}
```

* 返回参数`data`说明

| 名称 | 类型 | 描述 |
| ------ | ---- | -------- |
|detail|array|请求返回详细数据|
|time|String|时间，格式：yyyy-MM-dd HH:mm:ss|
|event|String|事件|


### 设备别名
开发者可对设备设定别名与标签，推送时可直接根据别名、标签进行推送，方便对设备的管理。
别名是开发者根据自身需求为每个设备设定的标识，建议对不同设备设定不同别名，保证可通过别名来唯一确认某特定设备。

例子：可将用户的邮箱、昵称、手机号等设为别名，即可通过邮箱、昵称、手机号指定目标设备下发推送。
>一个cid只能绑定一个别名，若已绑定过别名的cid再次绑定新别名，则前一个别名会自动解绑，并绑定新别名。
#### 绑定别名
一个cid只能绑定一个别名，若已绑定过别名的cid再次绑定新别名，则前一个别名会自动解绑，并绑定新别名。
##### 接口形式
```js 
await uniPush.cidBindAlias(OBJECT)
```
##### 入参说明
* 参数示例

```js
[
	{
		"cid":"",
		"alias":""
	},
	{
		"cid":"",
		"alias":""
	}
]
```

* 请求参数说明
数据列表，数组长度不大于1000

| 名称        | 类型          | 是否必须   | 默认值  | 描述  |
| ---------  | ------------- | ---- | ---- | -------- |
| cid |String|是|无| cid，设备标识|
| alias |String|是|无|别名，有效的别名组成：<br>字母（区分大小写）、数字、下划线、汉字;<br>长度<40;<br>一个别名最多允许绑定10个cid。|

##### 响应体说明
* 返回值示例

```js
{
    "errCode": 0,
    "errMsg": "success"
}
```
> 返回结构说明请参考[公共返回结构](#公共返回结构)


#### 根据cid查询别名
通过传入的cid查询对应的别名信息
##### 接口形式
```js 
await uniPush.getAliasByCid(cid)
```
##### 入参说明
| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| cid | String | 是 | 无 | 设备唯一标识 |

##### 响应体说明
* 返回值示例

```js
{
    "errCode": 0,
    "errMsg": "success",
    "data": {
        "alias": "xxx"
    }
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)

* 返回参数`data`说明

| 名称 | 类型 | 描述 |
| ------ | ---- | -------- |
| alias | String | 别名 |


#### 根据别名查询cid
通过传入的别名查询对应的cid信息
##### 接口形式
```js 
await uniPush.getCidByAlias(alias)
```
##### 入参说明
| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| alias | String | 是 | 无 | 别名 |

##### 响应体说明
```js
{
    "errCode": 0,
    "errMsg": "success",
    "data": {
        "cid": ["xxx","xxx"]
    }
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)

* 返回参数`data`说明

| 名称 | 类型 | 描述 |
| ------ | ---- | -------- |
| cid | String | 客户端标识 |


#### 批量解绑别名
批量解除别名与cid的关系
##### 接口形式
```js 
await uniPush.unboundAlias(Array)
```
##### 入参说明
* 参数示例

```js
	[
        {
            "cid":"",
            "alias":""
        },
        {
            "cid":"",
            "alias":""
        }
    ]
```

* 请求参数说明

| 名称        | 类型          | 是否必须   | 默认值  | 描述  |
| ---------  | ------------- | ---- | ---- | -------- |
| cid |String|是|无| 客户端标识|
| alias |String|是|无|别名|

##### 响应体说明
* 返回值示例

```json
{
    "errCode": 0,
    "errMsg": "success"
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)


#### 解绑所有别名
解绑所有与该别名绑定的cid
##### 接口形式
```js 
await uniPush.unboundAllAlias(alias)
```
##### 入参说明
| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| alias | String | 是 | 无 | 设备别名 |

##### 响应体说明
* 返回值示例

```js
{
    "errCode": 0,
    "errMsg": "success"
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)


### 客户端标签
开发者可对设备设定别名与标签，推送时可直接根据别名、标签进行推送，方便对设备的管理。
标签是设备的一种属性，每个设备（通过CID来标识 ）可以打上100个标签。
例子：“喜爱足球”，“喜爱动漫”
#### 一个设备绑定一批标签
一个设备绑定一批标签，此操作为覆盖操作，会删除历史绑定的标签；
> 此接口对单个cid有频控限制，每天只能修改一次，最多设置100个标签；单个标签长度最大为32字符，标签总长度最大为512个字符，申请修改请点击右侧“技术咨询”了解详情 。
##### 接口形式
```js 
await uniPush.cidBindCustomTags(OBJECT)
```
##### 入参说明
* 参数示例

```json
{
	"cid":"xxx",
    "custom_tag": [
        "tag1",
        "tag2"
    ]
}
```

* 请求参数说明

| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| cid | String | 是 | 无 | 设备标识 |
| custom_tag |String Array|是|无|标签列表，标签中不能包含空格|

##### 响应体说明
* 返回值示例

```json
{
    "errCode": 0,
    "errMsg": "success"
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)



#### 一批设备绑定一个标签
一批设备绑定一个标签，此接口为增量
> 此接口有频次控制(每分钟最多100次，每天最多10000次)，申请修改请点击右侧“技术咨询”了解详情
##### 接口形式
```js 
await uniPush.cidsBindCustomTag(OBJECT)
```

##### 入参说明
| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| cids | String Array | 是      | 无    | 要修改标签属性的cid列表，数组长度不大于1000 |
| custom_tag | String | 是 | 无 | 客户端标签，标签中不能包含空格，单个标签最大长度为32字符，如果含有中文字符需要编码(UrlEncode) |

* 参数示例

```js
{
	"cids": [
	    "xxx"
	],
    "custom_tag": "xxx"
}
```

##### 响应体说明
* 返回值示例

```js
{
    "errCode": 0,
    "errMsg": "success"
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)

#### 一批设备解绑一个标签
解绑设备的某个标签属性，不影响其它标签
>此接口有频次控制(每分钟最多100次，每天最多10000次)，申请修改请点击右侧“技术咨询”了解详情
##### 接口形式
```js 
await uniPush.cidsUnboundCustomTag(OBJECT)
```
##### 入参说明
| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| cids | String Array | 是      | 无    | 要修改标签属性的cid列表，数组长度不大于1000 |
| custom_tag | String | 是 | 无 | 客户端标签，标签中不能包含空格，单个标签最大长度为32字符，如果含有中文字符需要编码(UrlEncode) |

* 参数示例
```js
{
    "cids": [
        "xxx"
    ],
	"custom_tag":"xxx"
}
```

##### 响应体说明
```js
{
    "errCode": 0,
    "errMsg": "success",
    "data": {
        "$cid": "true"
    }
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)

#### 查询客户端标签
根据cid查询客户端标签列表
>此接口有频次控制(每分钟最多100次，每天最多10000次)，申请修改请点击右侧“技术咨询”了解详情
##### 接口形式
```js 
await uniPush.searchCustomTagByCid(cid)
```
##### 入参说明
| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| cid | Array | 是 | 无 | 设备标识 |

##### 响应体说明
* 返回值示例

```js
{
    "errMsg": "success",
    "errCode": 0,
    "data": {
        "$cid": [
            "custom_tag1","custom_tag2"
        ]
    }
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)

* 返回参数`data`说明

| 名称 | 类型 | 描述 |
| ------ | ---- | -------- |
|$cid|Object|key: cid，value: 标签列表，列表中只会有一个元素，多个以空格隔开|


### 黑名单设备
黑名单设备无法收到推送消息。当使用群发全推时，有时需要调节某些设备不发，此时需要按push_clientid进行黑名单控制。

#### 添加黑名单设备
将单个或多个设备加入黑名单，对于黑名单设备在推送过程中会被过滤掉。

##### 接口形式
```js 
await uniPush.addCidToBlacklist(push_clientid)
```
##### 入参说明
| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| push_clientid | String | 是 | 无 | 设备标识，多个以英文逗号隔开，一次最多传200个 |

##### 响应体说明
* 返回值示例

```js
{
    "errCode": 0,
    "errMsg": "success"
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)


#### 移除黑名单设备
将单个push_clientid或多个push_clientid设备移出黑名单，对于黑名单设备在推送过程中会被过滤掉的，不会给黑名单设备推送消息
##### 接口形式
```js 
await uniPush.removeCidInBlacklist(push_clientid)
```
##### 入参说明
| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| getui_ | String | 是 | 无 | 设备标识，多个以英文逗号隔开，一次最多传200个 |

##### 响应体说明
* 返回值示例

```js
{
    "errCode": 0,
    "errMsg": "success"
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)


### 设备信息
#### 设备在线状态
查询你的应用在线状态

注意：该状态为：`offline`离线时，消息可通过：同设备下其他集成个推SDK的在线应用通道完成推送（iOS不支持，Android受限于手机rom的节点设置策略）

##### 接口形式
```js 
await uniPush.getClientStatusByCid(push_clientid)
```
##### 入参说明
| 名称 | 类型    | 是否必须 | 默认值 | 说明                                    |
|:----|:-------|:--------|:------|:---------------------------------------|
| push_clientid | String | 是      | 无    | 设备标识，多个以英文逗号隔开，一次最多传1000个 |

##### 响应体说明
* 返回值示例

```js
{
    "errCode": 0,
    "errMsg": "success",
    "data": {
        "$cid": {
            "last_login_time":"1484018265935",
            "status":"offline"
        }
    }
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)
* 返回参数`data`说明

| 名称 | 类型 | 描述 |
| ------ | ---- | -------- |
| $cid | Object | key: cid，value: 设备状态信息 |
| last_login_time | String | 毫秒时间戳 |
| status | String | 状态，online在线 offline离线 |

#### 推送通道状态
查询与你的应用同设备（手机）下的所有集成了个推SDK的应用在线状态

注意：
1. 该接口返回设备在线时，仅表示存在集成了个推SDK的应用在线
2. 该接口返回设备不在线时，仅表示不存在集成了个推SDK的应用在线
3. 该接口需要开通权限，如需开通，请联系右侧技术咨询
##### 接口形式
```js 
await uniPush.getDeviceStatusByCid(cid)
```
##### 入参说明
| 名称 | 类型    | 是否必须 | 默认值 | 说明                                    |
|:----|:-------|:--------|:------|:---------------------------------------|
| cid | String | 是      | 无    | 设备标识，多个以英文逗号隔开，一次最多传100个  |

##### 响应体说明
* 返回值示例

```js
{
    "errCode": 0,
    "errMsg": "success",
    "data": {
        "$cid": {
            "errMsg":"success",
            "errCode": 0,
            "data": {
                "cid_status":"offline",
                "device_status":"online"
            }  
        }
    }
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)

* 返回参数`data`说明

| 名称 | 类型 | 描述 |
| ------ | ---- | -------- |
| $cid | Object | key: cid，value: 设备状态信息 |
| cid_status | String | cid在线状态，online在线 offline离线 |
| device_status | String | 设备在线状态，online在线 offline离线 |


#### 设备详细信息
查询设备的信息
##### 接口形式
```js 
await uniPush.getClientDetailByCid(String|Array)
```
##### 入参说明
| 名称 | 类型    | 是否必须 | 默认值 | 说明                                    |
|:----|:-------|:--------|:------|:---------------------------------------|
| cid | String | 是      | 无    | 设备标识，多个以英文逗号隔开，一次最多传1000个 |

##### 响应体说明
* 返回值示例

```js
{
    "errCode":0,
    "errMsg":"success",
    "data":{
        "invalidCids":[
            "invalidCid1",
            "invalidCid2",
            "invalidCid3"
        ],
        "validCids":{
            "${cid1}":{
                "client_app_id":"client_app_id",
                "package_name":"com.getui.demo",
                "device_token":"device_token",
                "phone_type":1,
                "phoneModel":"vv",
                "notificationSwitch":true,
                "createTime":"2021-06-30 00:00:00",
                "loginFreq":10
            }
        }
    }
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)

* 返回参数`data`说明

| 名称 | 类型 | 描述 |
| ------ | ---- | -------- |
| validCids | Object Array | 设备信息列表 |
| invalidCids | String Array | 无效cid列表 |

**validCids中的${cid}**

| 名称        | 类型           | 描述  |
| ---------  | ------------- |  -------- |
| client_app_id |String| 应用id|
| package_name |String| 包名|
| device_token |String| 厂商token|
| phone_type |Number| 手机系统 1-安卓 2-ios|
| phoneModel |String| 机型|
| notificationSwitch |Boolean| 系统通知栏开关|
| createTime |String| 首次登录时间|
| loginFreq |Number| 登录频次|


#### 查询设备总量
通过指定查询条件来查询满足条件的设备数量
##### 接口形式
```js 
await uniPush.getClientCount(OBJECT)
```
##### 入参说明
* 参数示例

```js
{
    "tag": [
         {
            "key":"phone_type",
            "values": [
                "android"
            ],
            "opt_type":"and"
        },
        {
            "key":"region",
            "values": [
                "11000000"
            ],
            "opt_type":"not"
        },
         {
            "key":"custom_tag",
            "values": [
                "tag1",
                "tag2"
            ],
            "opt_type":"or"
        }
    ]
}
```

* 请求参数说明

| 名称		| 类型			| 是否必须| 默认值| 描述|
|----		|----			|---	| ----	|---|
| key		| String		| 是		| 无		|查询条件(phone_type 手机类型,region 省市,custom_tag 客户端标签，设置标签请见[接口](#客户端标签))|
| values	| String Array	| 是		| 无		|查询条件值列表，其中<br>**手机型号**使用如下参数`android`和`ios`；<br>**省市**使用编号，[点击下载文件region_code.data](https://docs.getui.com/files/region_code.data)；|
| opt_type	| String		| 是		|无		|or(或),and(与),not(非)，`values`间的交并补操作|

- 不同key之间是交集，同一个key之间是根据`opt_type`操作
- 需要发送给城市在A,B,C里面，没有设置tagtest标签，手机型号为android的设备，用条件交并补功能可以实现，city(A|B|C) && !tag(tagtest) && phonetype(android)

##### 响应体说明
 返回值示例

```js
{
    "errCode": 0,
    "errMsg": "success",
    "data":{
        "user_count": 0
    }
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)

* 返回参数`data`说明

| 名称 | 类型 | 描述 |
| ------ | ---- | -------- |
| user_count | Number | 符合条件的设备数量 |


#### 设置应用角标(仅支持IOS)
通过cid通知个推服务器当前iOS设备的角标情况。
##### 接口形式
```js 
await uniPush.setBadgeByCid(OBJECT)
```
##### 入参说明
| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| cid | String | 是 | 无 | 设备标识，多个以英文逗号隔开，一次最多传200个 |
| badge |String|是|无|设备应用icon上显示的数字<br>`+N`: 在原有badge上+N<br>`-N`: 在原有badge上-N<br>`N`: 直接设置badge(数字，会覆盖原有的badge值) |
* 参数示例

```js
{
	"cid":"xxx",
    "badge": "-8"
}
```

##### 响应体说明

### 统计API
#### 获取推送结果
查询推送数据，可查询消息可下发数、下发数，接收数、展示数、点击数等结果。支持单个taskId查询和多个taskId查询。
>此接口调用，仅可以查询toList或toApp的推送结果数据；不能查询toSingle的推送结果数据。
##### 接口形式
```js 
await uniPush.getReport(OBJECT)
```
##### 入参说明
| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| taskid | String | 是 | 无 | 任务id，推送时返回，多个taskId以英文逗号隔开，一次最多传200个|
| actionIdList | String | 否 | 无 |  

##### 响应体说明
* content-type:`application/json;charset=utf-8`

* 返回值示例

```js
 {
    "errCode":0,
    "errMsg":"success",
    "data": {
        "$taskid": {
            "total": {
                "msg_num":4,
                "target_num":4,
                "receive_num":4,
                "display_num":2,
                "click_num":2
            },
            "gt": {
                "target_num":2,
                "receive_num":2,
                "display_num":1,
                "click_num":1
            },
            "actionCntMap": {
                "$actionId":2
            }
        }
    }
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)

* 返回参数`data`说明

| 名称 | 类型 | 描述 |                 
| ------ | ---- | -------- |
|$taskid|Object|key: 任务编号，value: 统计数据|
|total|Object|总的统计数据|
|gt|Object|key表示厂商通道，value表示该通道的统计数据。其中 gt: 个推通道; ios: APN;st: 坚果; key还可以是hw、xm、vv、mz、op。|
|msg_num|Number|消息可下发数|
|target_num|Number|消息下发数|
|receive_num|Number|消息接收数|
|display_num|Number|消息展示数|
|click_num|Number|消息点击数|
|actionCntMap|Object|自定义事件统计数据|
|$actionId|Number|$actionId为自定义事件id，对应的值表示对应的统计数据(由开发者打点统计)|


#### 任务组名查报表
根据任务组名查询推送结果，返回结果包括消息可下发数、下发数，接收数、展示数、点击数。
>此接口调用，仅可以查询toList或toApp的推送结果数据；不能查询toSingle的推送结果数据。
##### 接口形式
```js 
await uniPush.getReportByGroupName(group_name)
```
##### 入参说明
| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| group_name | String | 是 | 无 | 任务组名|

##### 响应体说明
* 返回值示例

```js
 {
    "errCode":"0",
    "errMsg":"success",
    "data": {
        "$group_name": {
            "total": {
                "msg_num":4,
                "target_num":4,
                "receive_num":4,
                "display_num":2,
                "click_num":2
            },
            "gt": {
                "target_num":2,
                "receive_num":2,
                "display_num":1,
                "click_num":1
            },
            "ios": {
                "target_num":2,
                "receive_num":2,
                "display_num":1,
                "click_num":1
            }
        }
    }
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)

* 返回参数`data`说明

| 名称 | 类型 | 描述 |
| ------ | ---- | -------- |
|$group_name|Object|key任务编号，value: 统计数据|
|total|Object|总的统计数据|
|gt|Object|key表示厂商通道，value表示该通道的统计数据。其中 gt: 个推通道; ios: APN;st: 坚果; key还可以是hw、xm、vv、mz、op。|
|msg_num|Number|消息可下发数|
|target_num|Number|消息下发数|
|receive_num|Number|消息接收数|
|display_num|Number|消息展示数|
|click_num|Number|消息点击数|


#### 获取推送实时结果
获取推送实时结果，可查询消息下发数，接收数、展示数、点击数和消息折损详情等结果。支持单个taskId查询和多个taskId查询。
>注意：该接口需要开通权限，如需开通，请联系对应的商务同学开通
##### 接口形式
```js 
await uniPush.getReportDetailByTaskid(taskid)
```
##### 入参说明
| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| taskid | String | 是 | 无 | 任务id，推送时返回，多个taskId以英文逗号隔开，一次最多传200个|

##### 响应体说明
* 返回值示例

```js
{
    "errMsg":"success",
    "errCode":0,
    "data":{
        "$taskid":{
            "total":{
                "msg_num":320,
                "target_num":14,
                "receive_num":3,
                "display_num":3,
                "click_num":0
            },
            "gt":{
                "target_num":3,
                "receive_num":2,
                "display_num":2,
                "click_num":0
            },
            "apn":{
                "target_num":11,
                "receive_num":1,
                "display_num":1,
                "click_num":0
            },
            "failed_detail":{
                "rs":{
                    "gt":{
                        "12":{
                            "total":231
                        }
                    },
                    "apn":{
                        "11":{
                            "11999":1,
                            "total":1
                        }
                    }
                },
                "ts":{
                    "gt":{
                        "13":{
                            "13001":608,
                            "total":608
                        },
                        "14":{
                            "14001":3,
                            "total":3
                        }
                    }
                }
            }
        }
    }
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)

* 返回参数`data`说明

| 名称 | 类型 | 描述 |                 
| ------ | ---- | -------- |
|$taskid|Object|key: 任务编号，value: 统计数据|
|total|Object|总的统计数据|
|gt|Object|key表示厂商通道，value表示该通道的统计数据。其中 gt: 个推通道; apn: APNs通道; key还可以是hw、xm、vv、mz、op。|
|msg_num|Number|消息可下发数|
|target_num|Number|消息下发数|
|receive_num|Number|消息接收数|
|display_num|Number|消息展示数|
|click_num|Number|消息点击数|
|failed_detail|Object|消息折损详情|
|ts|Object|请求-可下发阶段折损数据|
|rs|Object|可下发-下发成功阶段折损数据|
|sf|Object|下发成功-到达阶段折损数据|
|fd|Object|到达-展示阶段折损数据|


* `ts/rs/sf/fd` 里面的各个通道下面的数据含义

**折损详情分类如下，`2-14`是折损大类说明，大类说明下面的`7001-8999`是细分的折损原因，total代表各细分原因总和**

| 名称 |  描述 |                 
| ------ | -------- |
|2|参数无效|
|3|app鉴权信息错误|
|4|敏感词过滤|
|5|设备/应用无效（卸载）|
|6|推送数量超限|
|7|参数超限|
|8|无相关权限|
|10|关闭通知|
|11|其他厂商原因|
|12|消息有效期内离线|
|13|无效设备|
|14|其它|
|7001|title通知标题过长|
|7002|content通知内容过长|
|7003|url网页地址过长|
|7005|extraData透传内容过长|
|7006|payload附加消息过长|
|2001|参数错误|
|2002|title/content为空,或url非https协议|
|2003|无标题|
|2004|点击跳转目标页无效(intent)|
|2005|该厂商不支持纯透传模板|
|2999|其他原因|
|8001|无API推送权限/未获取到authToken|
|8002|系统消息开关未打开|
|8003|不在厂商规定时间|
|8999|其他原因|

#### 获取单日推送数据
调用此接口可以获取某个应用单日的推送数据(推送数据包括：下发数，接收数、展示数、点击数)(目前只支持查询非当天的数据)
##### 接口形式
```js 
await uniPush.getReportByDate(date)
```
##### 入参说明
| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| date | String | 是 | 无 | 日期，格式: yyyy-MM-dd|

##### 响应体说明
* 返回值示例

```js
{
    "errCode":0,
    "errMsg":"success",
    "data": {
        "$date": {
            "total": {
                "target_num":4,
                "receive_num":4,
                "display_num":2,
                "click_num":2
            },
            "gt": {
                "target_num":2,
                "receive_num":2,
                "display_num":1,
                "click_num":1
            },
             "hw": {
                "target_num":2,
                "receive_num":2,
                "display_num":1,
                "click_num":1
            }
        }
    }
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)

* 返回参数`data`说明

| 名称 | 类型 | 描述 |
| ------ | ---- | -------- |
|$date|Object|key: 日期，格式: yyyy-MM-dd，value: 统计数据|
|total|Object|总的统计数据|
|gt|Object|key表示厂商通道，value表示该通道的统计数据。其中 gt: 个推通道; ios: APN;st: 坚果; key还可以是hw、xm、vv、mz、op。|
|target_num|Number|消息下发数|
|receive_num|Number|消息接收数|
|display_num|Number|消息展示数|
|click_num|Number|消息点击数|


#### 查询推送量
查询应用当日可推送量和推送余量

注意：
1. 部分厂商消息不限制推送量，所以此接口不做返回，例如 hw/xmg厂商，op的私信消息，xm的重要级别消息等等
2.vv返回的是请求量push_num，总限额total_num返回的总的到达量，所以会有请求量push_num超过总限额total_num的情况
3.该接口做了频控限制，请不要频繁调用
##### 接口形式
```js 
await uniPush.getTodayReport()
```
##### 入参说明
无

##### 响应体说明
* 返回值示例

```js
{
    "errMsg":"success",
    "errCode":0,
    "data":{
        "vv":{
            "special":{
                "push_num":0,
                "total_num":"10000",
                "limit":false
            },
            "general":{
                "push_num":0,
                "total_num":"10000",
                "limit":false
            },
            "grouppush":{
                "push_num":0,
                "total_num":"1000",
                "limit":false
            }
        },
        "op":{
            "general":{
                "total_num":"100000",
                "limit":false,
                "remain_num":"100000"
            }
        },
        "xm":{
            "general":{
                "total_num":20000,
                "limit":false,
                "remain_num":20000
            }
        },
        "gt":{
            "app":{
                "total_num":3000,
                "limit":false,
                "remain_num":3000
            },
            "app_with_tag":{
                "total_num":1000,
                "limit":false,
                "remain_num":1000
            },
            "list":{
                "total_num":2000000,
                "limit":false,
                "remain_num":2000000
            }
        }
    }
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)

* 返回参数`data`说明

为了接口返回统一，所以用special和general返回表示特殊消息和普通消息

| 名称         | 类型 |描述                          |
| ------------ | -------------------|-------|
|**gt**     |         Object   |  个推通道 |
|gt/app     |Object   | 个推群推接口推送限制|     
|gt/list    |Object   | 个推创建消息接口限制  |   
|gt/app\_with\_tag   | Object     |个推 根据条件筛选设备推送接口推送限制 |  
|**xm**    |Object   | xm通道    |  
|xm/general    |Object   | xm通道 普通消息限制，channel是普通级别消息时推送量限制    |    
|**op**    |Object   | op通道    |  
|op/general    |Object   | op通道 公信消息限制，不带channel或公信channel时推送量限制   |    
|**vv**    |Object   | vv通道    |   
|vv/special    |Object   | vv通道系统类消息限制，即classification=1时推送量限制    |  
|vv/general    |Object   | vv通道运营类消息限制，即classification=0时推送量限制   |   
|vv/grouppush   |Object   | vv群推消息体配置量   |  
| total_num     |  long   | 单日可推送总量    |        
| remain_num     |  long| 单日可推送剩余量   |   
| push_num     |  long| 单日可推送请求量，**仅vv返回该字段**   |  
| limit     |boolean|  是否被限量,当日可推送总量使用完时，该字段更新true|  


#### 获取单日设备数据接口
调用此接口可以获取某个应用单日的设备数据(设备数据包括：新增设备数，累计注册设备总数，在线峰值，日联网设备数)(目前只支持查询非当天的数据)
##### 接口形式
```js 
await uniPush.getClientReportByDate(date)
```
##### 入参说明

| 名称 | 类型 | 是否必须 | 默认值| 说明 |
| ------ | ------ | ------ | ------ | ------ |
| date | String | 是 | 无 | 日期，格式: yyyy-MM-dd|

##### 响应体说明
* 返回值示例

```js
{
    "errCode":0,
    "errMsg":"success",
    "data": {
        "$date": {
            "accumulative_num":9,
            "register_num":2,
            "active_num":5,
            "online_num":2
        }
    }
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)

* 返回参数`data`说明

| 名称 | 类型 | 描述 |
| ------ | ---- | -------- |
|$date|Object|key: 日期，格式: yyyy-MM-dd，value: 统计数据|
|accumulative_num|Number|累计注册设备数|
|register_num|Number|注册设备数|
|active_num|Number|活跃设备数|
|online_num|Number|在线设备数|

#### 获取24个小时在线设备数
查询当前时间一天内的在线设备数(10分钟一个点，1个小时六个点)
##### 接口形式
```js
await uniPush.getTodayOnlineClientReport()
```
##### 入参说明
无

##### 响应体说明
##### 成功响应数据格式:

* content-type:`application/json;charset=utf-8`

* 返回值示例

```js
{
    "errCode":0,
    "errMsg":"success",
    "data": {
        "online_statics":{
            "$date":4,
            "$date":5
        }
    }
}
```

> 返回结构说明请参考[公共返回结构](#公共返回结构)

* 返回参数`data`说明

| 名称 | 类型 | 描述 |
| ------ | ---- | -------- |
|online_statics|Object|在线设备统计数据|
|$date|Number|key: 毫秒时间戳，value: 在线设备数|


### 公共返回结构

以下参数格式为每个接口返回的数据的通用格式。

| 名称 | 类型 |  描述 |
| ------ | ------ | ---- |
| errCode | Number | 成功或失败errCode码，详细含义见[返回码说明](#返回码说明)|
| errMsg | String | 失败时返回此说明|
| data | Object | 详见接口说明|

### 返回码说明


> HTTP errCode码说明

uni-cloud-push 扩展库的errCode码以uni-cloud-push-error-开头，如：uni-cloud-push-error-10005，以下省略为10005

| errCode	| 错误描述		|  解决措施																|
| ------	| ------		| ----																	|
| 0			| 成功			| 不涉及																	|
| 1			| 失败			| 接口入参要求是 Object 格式，非 Object 格式会无法识别导致报错，建议检查一下代码		|
| 2			| 服务正在启动	| 请等待																	|
| 200		| 成功			| 查看基础返回码															|
| 301		| 域名错误		| 请检查域名是否与appid机房匹配												|
| 400		| 参数错误		| 具体异常信息请参考业务返回码												|
| 401		| 权限相关		| 具体异常信息请参考业务返回码												|
| 403		| 套餐相关		| 具体异常信息请参考业务返回码												|
| 404		| url错误		| 请检查Http路径是否正确													|
| 405		| 方法不支持		| 该接口不支持该方法请求，请查看文档确认请求方式								|

#### 10000 - 权限相关

| errCode | 错误描述 |  解决措施 | 对应http errCode |
| ------ | ------ | ---- | ---- |
| 10001 | token错误/失效 | 调用接口重新获取token | 401 |
| 10002 | appId或ip在黑名单中 |  | 401 |
| 10003 | 每分钟鉴权频率超限 | 接口调用过于频繁 | 401 |
| 10004 | 没有查询消息明细的权限|可以申请权限，若有需要，请点击右侧“技术咨询”了解详情 | 401|
| 10005 | 每分钟调用频率超限| |401|

#### 20000 - 参数相关

| errCode | 错误描述 |  解决措施 | 对应http errCode |
| ------ | ------ | ---- | ---- |
| 20001 | 参数不合法 | 请检查参数 | 400 |
| 22001 | 定时任务已经执行，无法删除 |  | 400 |
| 22002 | 任务无效或定时任务时间不合法 |  | 400 |
| 23001 | 操作tag失败 |  | 400 |

#### 30000 - 套餐相关，关于套餐相关的返回码，可以针对应用特殊配置，若有需要，请点击右侧“技术咨询”了解详情。

| errCode | 错误描述 |  对应http errCode |
| ------ | ------ | ---- |
| 30000 | 没有推送fast_custom_tag的权限  | 403 |
| 30001 | 没有修改和删除custom_tag的权限  | 403 |
| 30002 | 没有推送定时任务的权限 |  403 |
| 30003 | app/tag 接口无权限，或tag无效 | 403 |
| 30004 | tag每日推送总数超限(VIP用户可根据应用特殊配置)  | 403 |
| 30005 | tag长度超限(tag长度<32) |  403 |
| 30006 | fast_custom_tag次数超过每日推送总数限制(VIP用户可根据应用特殊配置) |  403 |
| 30007 | `app/all`推送，推送次数超过每日推送总数限制，每日最多推送100次 |  403 |
| 30008 | list推送次数超过每日推送总数限制，每日最多推送2000000次 |  403 |
| 30009 | 推送次数超过每日推送总数限制 |  403 |
| 30010 | `app/tag` 推送次数超过每日推送总数限制，每日最多推送100次，和接口`app/all`共享限制|  403 |
| 30011 | 设置tag次数超过每日次数限制 |  403 |
| 30012 | 修改和删除tag 超过每分钟频率限制，每分钟最多操作5次 |  403 |
| 30013 | 推送fast_custom_tag频率超过每分钟频率限制(VIP用户可根据应用特殊配置) |  403 |
| 30014 | app 推送 频率超过每分钟频率限制，每分钟最多操作5次 |  403 |
| 30015 | list推送 频率超过每分钟频率限制 |  403 |
| 30016 | push/tag tag个数超过限制 |  403 |
| 30017 | 没有查询单推实时报表的权限  | 403 |
| 30018 | 查询单推实时报表 频率超过每分钟频率限制 |  403 |
| 30019 | 系统繁忙，请稍后重试 |  403 |

<div class="weixin-support">
    <div class="weixin-support-focus">
        <img src="https://web-assets.dcloud.net.cn/unidoc/zh/weixin.png" alt="" class="weixin-support-icon">
        联系
        <br>
        个推
    </div>
    <div class="weixin-support-content">
		<img src="https://web-assets.dcloud.net.cn/unidoc/zh/support.jpg" alt="" class="weixin-support-icon">
       微信扫一扫
		<br>
        随时联系个推技术支持
    </div>
</div>

<style>
.weixin-support {
  position: fixed;
  z-index: 10;
  bottom: calc(10% + 265px);
  right: 230px;
}
@media screen and (max-width: 1499px) {
	.weixin-support {
	  right: 10px;
	}
}
.weixin-support img{
	background: #0591F0;
}
.weixin-support-focus {
  padding: 10px 8px;
  color: #fff;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  background: #0591F0;
  box-shadow: 0px 4px 8px rgba(0, 105, 202, 0.24);
  border-radius: 2px;
}
.weixin-support-focus .iconfont{
  display: block;
  font-size: 16px;
  text-align: center;
}
.weixin-support-icon{
  width: 30px;
  display: block;
  margin-bottom: 2px;
  margin-top: -4px;
}
.weixin-support-content {
  z-index: 10;
  display: none;
  position: absolute;
  right: 50px;
  top: -100px;
  background-color: #fff;
  padding: 20px;
  margin-right: 10px;
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  width: 200px;
  font-size: 14px;
  box-shadow: 0 0 10px #ccc;
}
.weixin-support:hover .weixin-support-content{
  display: block;
}
.weixin-support-content img{
  display: block;
  height: 200px;
  width: 200px;
}
</style>
