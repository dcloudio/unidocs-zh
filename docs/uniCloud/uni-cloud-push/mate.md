## uni-push2.0、uni-id、uni统计的组合说明

### 包含的opendb表

|数据表名称|操作（添加/更新）时机	|内容/作用	|
|--	|--	|--	|
|opendb-tempdata|旧token过期时	|向个推服务器发起请求的token	|
|opendb-device	|设备启动、登录	|push_clientid与详细的[设备信息](#deviceInfo)	|
|uni-id-device	|登录	|主要用于存储user_id 与 device_id的映射关系，完整字段：user_id、device_id、token_expired、push_clientid、appid	|


**详情：**
1. uni统计模块，在设备启动时立即调用[getPushClientId](https://uniapp.dcloud.io/uniCloud/uni-cloud-push/api.html#getpushclientid)获取`push_clientid`，如果获取成功后（应用未在manifest中启用uni-push2.0则会获取失败）则调用`uni-stat-receiver`云对象的`report`方法（参数：`push_clientid`），服务器会向`opendb-device`表写入或更新（存在时）：[设备信息](#deviceInfo)和`push_clientid`。

2. uni-id-pages插件，调用[uniCloud.onRefreshToken](https://uniapp.dcloud.io/uniCloud/client-sdk.html#on-refresh-token) 监听token发生变化（即：用户登录和token续期时），调用`uni-id-co`云对象的`setPushCid`方法（参数：`push_clientid`）服务器操作`uni-id-device`表，记录`device_id` 与 `user_id`的映射关系；完整字段包含`user_id`、`device_id`、`token_expired`、`push_clientid`、`appid`。同时再向`opendb-device`表写入或更新（存在时）：[设备信息](#deviceInfo)和`push_clientid`。

综上：`push_clientid`被存储在`uni-id-device`和`opendb-device`两个表，前者用于存储`device_id` 与 `user_id`的映射关系，仅用户登录成功后才有对应数据；后者用于存储完整的[设备信息](#deviceInfo)，未登录的用户也有对应的数据。

**注意：**
当用户未登录时，我们可以基于`device_id`向用户推送消息，但有被窃听的风险（营销类消息不用太关心这个）。因为`opendb-device`表中存储的[设备信息](#deviceInfo)，底层的技术原理是获取客户端自动上报的信息，理论上存在被篡改可能。如：张三使用李四的`device_id`+张三的`push_clientid`。上报数据；服务器会认为李四的`push_clientid`更新了，从而将李四的`device_id`与`push_clientid`的映射关系，指向张三的`push_clientid`;张三从而窃听到，其他人发给李四的消息。
而基于`user_id`或者`user_tag`推送消息，是基于`uni-id-device`表，在新增/更新操作时：会校验当前用户的`user_id`，不会被其他用户篡改，即没有被他人窃听消息的风险。

#### 设备信息@deviceInfo
来源uniCloud云对象中的[this.getClientInfo](https://uniapp.dcloud.io/uniCloud/cloud-obj.html#get-client-info)方法，完整字段列表参考：[uni.getSystemInfo](https://uniapp.dcloud.net.cn/api/system/info.html#getsysteminfo)

### 推送接口查库详解：  

<img style="width:80%;max-width:450px;margin:0 10%" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/20220708235304.jpg">

- 推送目标依据为：`push_clientid`直接执行推送。
- 推送目标依据为：`device_id`，查`opendb-device`表，获得`push_clientid`执行推送
- 推送目标依据为：`users_id`查`uni-id-device`表（如果需要验证platform就联查`opendb-device`表）,获得`push_clientid`执行推送
- 推送目标依据为：`user_tag`查`uni-id-users`表，获得`users_id`查`uni-id-device`表（如果需要验证platform就联查`opendb-device`表）,获得`push_clientid`执行推送