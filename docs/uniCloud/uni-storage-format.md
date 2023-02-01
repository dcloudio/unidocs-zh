
## uni-storage键名命名规范

实际开发中，开发者通常会用到 [storage（本地缓存）](https://uniapp.dcloud.net.cn/api/storage/storage.html)，官方的开源库中也有使用到storage。

为了进一步规范storage键名命名格式，避免与其他开发者键名冲突，DCloud新增了storage键名命名规范，同时我们推荐所有的插件作者也使用这套规范，在storage键名中声明自己的插件id。

1. 必须以插件id作为前缀，如 uni-admin 的前缀为 uni-admin-
2. 命名要达意，一看就知道这个storage存的是什么东西，如 uni-admin-theme（admin的主题）

## 官方插件storage键名列表

|插件id						| 键名															| 说明																													|
| :------:				| :------------------:							| :------------------:																					|
| uni-id					| uni_id_token											| uniIdToken（由于历史原因，此键名不更改）											|
| uni-id					| uni_id_token_expired							| uniIdToken的过期时间（时间戳形式，由于历史原因，此键名不更改）|
| uni-id-pages		| uni-id-pages-userInfo							| 待补充																												|
| uni-admin				| uni-admin-theme										| admin当前使用的主题																						|
| uni-admin				| uni-admin-statTabsData						| 缓存uni-stat-tabs组件内部数据																	|
| uni-data-select	| uni-data-select-lastSelectedValue	| 记录最后一次选择的值																					|
| 待补充					| UNI_LOCALE												| 待补充																												|
| 待补充					| __DC_STAT_UUID										| 待补充																												|
| 待补充					| __LAST_DCLOUD_APPID								| 待补充																												|

