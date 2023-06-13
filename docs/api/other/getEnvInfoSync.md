#### uni.getEnvInfoSync()

获取小程序环境信息。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序|飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|x|x|x|√|x|x|x|x|

**返回值**

**Object**

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| microapp | MicroApp| 小程序信息 |
| common | Common | 通用参数 |


**MicroApp 类型说明**

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| mpVersion | string | 小程序版本号 |
| envType| string | 小程序环境 `development` 测试版、`preview` 预览版、`production` 线上版 |
| appId| string | 小程序 appId |


**Common 类型说明**

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| USER_DATA_PATH | string | 用户数据存储的路径（默认值 ttfile://user）|
