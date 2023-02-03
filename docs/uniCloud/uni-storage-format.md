## uni-storage键名命名规范
## uni-storage key naming convention

实际开发中，开发者通常会用到 [storage（本地缓存）](https://uniapp.dcloud.net.cn/api/storage/storage.html)，官方的开源库如uni-admin等也使用了storage。
In actual development, developers usually use [storage (local cache)](https://uniapp.dcloud.net.cn/api/storage/storage.html), and official open source libraries such as uni-admin also use storage.

为了规范storage的键名命名，避免与其他开发者的键名冲突，DCloud新增了storage键名命名规范，同时我们推荐所有的插件作者也使用这套规范，如下：
In order to standardize the naming of storage keys and avoid conflicts with other developers' key names, DCloud has added a storage key naming specification. At the same time, we recommend that all plug-in authors also use this specification, as follows:

1. storage的键名必须以插件id作为前缀，如 uni-admin 的前缀为 uni-admin-
1. The key name of storage must be prefixed with the plugin id, for example, the prefix of uni-admin is uni-admin-
2. 键名命名要达意，易于通过键名了解这个storage里存的是什么数据，如 uni-admin-theme（admin的主题）
2. The name of the key should be expressive, so that it is easy to know what data is stored in the storage through the key name, such as uni-admin-theme (the theme of admin)

## 官方插件storage键名列表
## Official plugin storage key name list

|插件id							| 键名															| 说明																																																|
|plugin id | key name | description |
| :------:					| :------------------:							| :------------------:																																								|
| uni-id						| uni_id_token											| uniId的Token（由于历史原因，此键名使用了下划线而不是中划线）																				|
| uni-id | uni_id_token | Token of uniId (for historical reasons, this key name uses underscores instead of dashes) |
| uni-id						| uni_id_token_expired							| uniIdToken的过期时间，时间戳形式（由于历史原因，此键名使用了下划线而不是中划线）										|
| uni-id | uni_id_token_expired | Expiration time of uniIdToken in timestamp form (for historical reasons, this key name uses underscores instead of dashes) |
| uni-id-pages			| uni-id-pages-userInfo							| 最近一次登录的用户信息																																							|
| uni-id-pages | uni-id-pages-userInfo | Last logged in user information |
| uni-admin					| uni-admin-theme										| admin当前使用的主题																																									|
| uni-admin | uni-admin-theme | Theme currently used by admin |
| uni-admin					| uni-admin-statTabsData						| 缓存uni-stat-tabs组件内部数据																																				|
| uni-admin | uni-admin-statTabsData | Cache internal data of uni-stat-tabs component |
| uni-data-select		| uni-data-select-lastSelectedValue	| 记录最后一次选择的值																																								|
| uni-data-select | uni-data-select-lastSelectedValue | record last selected value |
| uni-app客户端sdk	| UNI_LOCALE												| uni.setLocale 记录最后一次设置的语言（由于历史原因，此键名使用了下划线而不是中划线）								|
| uni-app client sdk | UNI_LOCALE | uni.setLocale records the language set last time (due to historical reasons, this key name uses underscores instead of dashes) |
| uni统计客户端sdk	| __DC_STAT_UUID										| 用户设备id																																													|
| uni statistics client sdk | __DC_STAT_UUID | user device id |
| uniCloud客户端sdk	| __LAST_DCLOUD_APPID								| 上次运行到此host+port的应用appId，仅开发调试期间生效。用于清理上个应用内存储的可能影响本次运行的内容|
| uniCloud client sdk | __LAST_DCLOUD_APPID | The appId of the application running to this host+port last time, only valid during development and debugging. It is used to clean up the content stored in the previous application that may affect this operation|


