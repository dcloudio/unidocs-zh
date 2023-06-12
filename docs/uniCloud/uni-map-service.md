## uni-map-service 公共模块

聚合了多家地图供应商的服务端API

::: warning 注意
uni-map-service公共模块仅能在云函数/云对象内使用。如果您不了解公共模块，请[参阅](cf-common.md)
:::

> 插件市场地址：[https://ext.dcloud.net.cn/plugin?name=uni-map-service](https://ext.dcloud.net.cn/plugin?name=uni-map-service)

## 配置@config

待补充

## 公共返回参数@publicresult

以下所有API均会返回的参数

|参数						|说明																																													|
|---						|---																																													|
|errCode				|为0代表成功，其他均为失败																																		|
|errMsg					|失败后的提示																																									|
|originalResult	| 原始返回结果（供应商接口原始返回结果，需new UniMapService时，设置needOriginalResult: true）	|
|result					| 插件返回结果（抹平各平台差异后的返回结果）																											|

## 初始化实例

在调用API前，需要先初始化实例

```js
// 初始化实例
let uniMapService = new UniMapService({
	provider: "qqmap", // 指定使用哪家地图供应商
	needOriginalResult: false, // 是否需要返回原始信息
});
```

**参数**

|参数								|类型		|必填	|说明														|兼容性	|
|:--								|:-:		|:-:	|:--														|:-:		|
|provider						|String	|是		|指定使用哪家地图供应商					|all		|
|needOriginalResult	|Boolean|否		|是否需要返回原始信息，默认false|all		|

**provider可选项**

- qqmap 腾讯地图
- amap 高德地图

## API@api

### 逆地址解析（坐标转地址）@location2address

**示例**

```js
// 引入uni-map-service公共模块
const UniMapService  = require('uni-map-service');
// 初始化实例
let uniMapService = new UniMapService({
	provider: "qqmap", // 指定使用哪家地图供应商
});
// 调用API
let result = await uniMapService.location2address({
  location: "39.908815,116.397507"
});
console.log("result", result);
```

**请求参数**

|参数				|类型		|必填	|说明																																		|兼容性		|
|:--				|:-:		|:-:	|:--																																		|:-:			|
|location		|String	|是		|经纬度（GCJ02坐标系），格式：location=lat<纬度>,lng<经度>							|all			|
|get_poi		|Number	|否		|是否返回周边地点（POI）列表<br/>0：不返回（默认）<br/>1：返回					|all			|
|poi_options|String	|否		|周边POI（AOI）列表控制参数																							|腾讯地图	|
|poitype		|String	|否		|返回附近POI类型																												| 高德地图|
|radius			|String	|否		|搜索半径（radius取值范围在0~3000，默认是1000。单位：米）								| 高德地图|
|roadlevel	|Number	|否		|道路等级<br/>0：显示所有道路<br/>1：过滤非主干道路，仅输出主干道路数据	|高德地图	|
|homeorcorp	|String	|否		|是否优化POI返回顺序																										| 高德地图|

**返回参数**

仅列出result内的参数，其他参数见 [公共返回参数](#publicresult)

|参数								|类型		|说明										|兼容性	|
|:--								|:-:		|:--										|:-:		|
|formatted_addresses| String|详细地址								|all		|
|country						| String|国家										|all		|
|province						| String|省											|all		|
|city								| String|市											|all		|
|district						| String|区											|all		|
|street							| String|街道/道路，可能为空字串|all		|
|street_number			| String|门牌，可能为空字串			|all		|
|adcode							| String|行政区划代码						|all		|
|towncode						| String|乡镇街道编码						|all		|
|pois								| Array	|周边POI								|all		|
| &emsp;&#124;-- id				|String	|id											|all		|
| &emsp;&#124;-- title		|String	|地点名称								|all		|
| &emsp;&#124;-- address	|String	|地址										|all		|
| &emsp;&#124;-- location	|Object	|经纬度									|all		|
| &emsp;&#124;-- distance	|Number	|距离（米）							|all		|
| &emsp;&#124;-- direction|String	|方位										|all		|
| &emsp;&#124;-- category	|String	|类别										|all		|

### 地址解析（地址转坐标）@address2location

**示例**

```js
// 引入uni-map-service公共模块
const UniMapService  = require('uni-map-service');
// 初始化实例
let uniMapService = new UniMapService({
	provider: "qqmap", // 指定使用哪家地图供应商
});
// 调用API
let result = await uniMapService.address2location({
  address: "北京市海淀区彩和坊路海淀西大街74号"
});
console.log("result", result);
```

**请求参数**

|参数		|类型		|必填	|说明																																						|兼容性	|
|:--		|:-:		|:-:	|:--																																						|:-:		|
|address|String	|是		|地址（注：地址中请包含城市名称，以及需要对地址进行URL编码，否则会影响解析效果）|all		|
|city		|String	|否		|指定查询的城市（不传则在全国范围内查询）																				|all		|

**返回参数**

仅列出result内的参数，其他参数见 [公共返回参数](#publicresult)

|参数					|类型		|说明										|兼容性	|
|:--					|:-:		|:--										|:-:		|
|location			|Object	| 经纬度								|all		|
| &emsp;&#124;-- lat|Number	|纬度										|all		|
| &emsp;&#124;-- lng|Number	|经度										|all		|
|adcode				|String	|行政区划代码						|all		|
|province			| String|省											|all		|
|city					| String|市											|all		|
|district			| String|区，可能为空字串				|all		|
|street				| String|街道/道路，可能为空字串|all		|
|street_number| String|门牌，可能为空字串			|all		|

### 坐标转换@translate

**示例**

```js
// 引入uni-map-service公共模块
const UniMapService  = require('uni-map-service');
// 初始化实例
let uniMapService = new UniMapService({
	provider: "qqmap", // 指定使用哪家地图供应商
});
// 调用API
let result = await uniMapService.translate({
  locations: "39.12,116.83;30.21,115.43",
  type: 3
});
console.log("result", result);
```

**请求参数**

|参数					|类型		|必填	|说明																																																					|兼容性																|
|:--					|:-:		|:-:	|:--																																																			|:-:																	|
|locations		|Array	|是		|预转换的坐标，支持批量转换																																										|all																	|
| &emsp;&#124;-- lat|Number|纬度																																																					|all																	|
| &emsp;&#124;-- lng|Number|经度																																																					|all																	|
|type					|Number	|否		|输入的locations的坐标类型，<br/>可选值：<br/>1：GPS <br/>2：sogou <br/>3：baidu <br/>4：mapbar <br/>6：sogou	|腾讯地图：全部支持; 高德地图：1、3、4|

**返回参数**

仅列出result内的参数，其他参数见 [公共返回参数](#publicresult)

|参数					|类型		|说明																					|兼容性	|
|:--					|:-:		|:--																					|:-:		|
|locations		|Array	| 坐标转换结果，转换后的坐标顺序与输入顺序一致|all		|
| &emsp;&#124;-- lat|Number	|纬度																					|all		|
| &emsp;&#124;-- lng|Number	|经度																					|all		|

### IP定位@ip2location

**示例**

```js
// 引入uni-map-service公共模块
const UniMapService  = require('uni-map-service');
// 初始化实例
let uniMapService = new UniMapService({
	provider: "qqmap", // 指定使用哪家地图供应商
});
// 调用API
let result = await uniMapService.ip2location({
  ip: "111.206.145.41"
});
console.log("result", result);
```

**请求参数**

|参数	|类型		|必填	|说明		|兼容性	|
|:--	|:-:		|:-:	|:--		|:-:		|
|ip		|String	|是		| IP地址|all		|

**返回参数**

仅列出result内的参数，其他参数见 [公共返回参数](#publicresult)

|参数					|类型		|说明															|兼容性		|
|:--					|:-:		|:--															|:-:			|
|location			|Object	| 坐标														|腾讯地图	|
| &emsp;&#124;-- lat|Number	|纬度															|腾讯地图	|
| &emsp;&#124;-- lng|Number	|经度															|腾讯地图	|
|nation				|String	| 国家														|腾讯地图	|
|nation_code	|String	| 国家代码（ISO3166标准3位数字码）|腾讯地图	|
|adcode				|Number	| 行政区划代码										|all			|
|province			|String	| 省															|all			|
|city					|String	| 市,可能为空											|all			|
|district			|String	| 区,可能为空											|腾讯地图	|
|rectangle		|String	| 所在城市矩形区域范围						|高德地图	|

### 关键词输入提示@inputtips

**示例**

```js
// 引入uni-map-service公共模块
const UniMapService  = require('uni-map-service');
// 初始化实例
let uniMapService = new UniMapService({
	provider: "qqmap", // 指定使用哪家地图供应商
});
// 调用API
let result = await uniMapService.inputtips({
	keyword: "人民医院",
	region: "北京市"
});
console.log("result", result);
```

**请求参数**

|参数						|类型		|必填	|说明																																																																			|兼容性																																																																			|
|:--						|:-:		|:-:	|:--																																																																			|:-:																																																																				|
|keyword				|String	|是		| 用户输入的关键词（希望获取后续提示的关键词）																																														|all																																																																				|
|city						|String	|是		| 限制城市范围																																																														|all																																																																				|
|citylimit			|Boolean|否		| false：当前城市无结果时，自动扩大范围到全国匹配（默认）<br/>true：固定在当前城市																												| all																																																																				|
|location				|String	|否		| 定位坐标，传入后，若用户搜索关键词为类别词（如酒店、餐馆时），<br/>与此坐标距离近的地点将靠前显示<br/>格式：location=lat<纬度>,lng<经度>|all																																																																				|
|get_subpois		|Number	|否		| 是否返回子地点，如大厦停车场、出入口等取值<br/>0：不返回（默认） <br/>1：返回）																													|腾讯地图																																																																		|
|policy					|Number	|否		| 检索策略																																																																|腾讯地图																																																																		|
|filter					|String	|否		| 筛选条件																																																																|腾讯地图																																																																		|
|address_format	|String	|否		|可选值：short 返回“不带行政区划的”短地址																																																|腾讯地图																																																																		|
|page\_index		|Number	|否		| 页码，从1开始，最大页码需通过count进行计算，必须与page_size同时使用																																			|腾讯地图																																																																		|
|page\_size			|Number	|否		| 每页条数，取值范围1-20，必须与page_index 同时使用																																												|腾讯地图																																																																		|
|datatype				|Number	|否		| 返回的数据类型，多种数据类型用“\|”分隔 <br/>可选值：<br/>all：返回所有数据类型 <br/>poi：返回POI数据类型 <br/>bus：返回公交站点数据类型 <br/>busline：返回公交线路数据类型|高德地图																																																																		|

**返回参数**

仅列出result内的参数，其他参数见 [公共返回参数](#publicresult)

|参数								|类型		|说明																																																|兼容性		|
|:--								|:-:		|:--																																																|:-:			|
|data								|Array	| 提示词数组，每项为一个POI对象																																			|all			|
| &emsp;&#124;-- id				|String	|若数据为POI类型，则返回POI ID;若数据为bus类型，则返回bus id;若数据为busline类型，则返回busline id。|all			|
| &emsp;&#124;-- title			|String	|地点名称																																																|all			|
| &emsp;&#124;-- address	|String	|地址																																																|all			|
| &emsp;&#124;-- category	|String	|分类																																																|腾讯地图	|
| &emsp;&#124;-- type			|String	|POI类型，值说明：0:普通POI / 1:公交车站 / 2:地铁站 / 3:公交线路 / 4:行政区划												|腾讯地图	|
| &emsp;&#124;-- location	|String	|经纬度																																															|all			|
| &emsp;&emsp;&#124;-- lat|Number	|纬度																																																|all			|
| &emsp;&emsp;&#124;-- lng|Number	|经度																																																|all			|
| &emsp;&#124;-- adcode		|Number	|行政区划代码																																												|all			|
| &emsp;&#124;-- province	|String	|省																																																	|腾讯地图	|
| &emsp;&#124;-- city			|String	|市																																																	|腾讯地图	|
| &emsp;&#124;-- district	|String	|区/县，当type（POI类型）为3（公交线路）时，district由city补全																			|腾讯地图	|
|sub_pois						|String	|子地点列表，仅在输入参数get\_subpois=1时返回																												|腾讯地图	|
| &emsp;&#124;-- parent_id|String	|主地点ID，对应data中的地点ID																																				|腾讯地图	|
| &emsp;&#124;-- id				|String	|地点唯一标识																																												|腾讯地图	|
| &emsp;&#124;-- title		|String	|地点名称																																														|腾讯地图	|
| &emsp;&#124;-- address	|String	|地址																																																|腾讯地图	|
| &emsp;&#124;-- category	|String	|POI（地点）分类																																										|腾讯地图	|
| &emsp;&#124;-- location	|String	|地址																																																|腾讯地图	|
| &emsp;&emsp;&#124;-- lat|Number	|纬度																																																|all			|
| &emsp;&emsp;&#124;-- lng|Number	|经度																																																|all			|
| &emsp;&#124;-- adcode		|String	|行政区划代码																																												|腾讯地图	|
| &emsp;&#124;-- city			|String	|地址																																																|腾讯地图	|
| &emsp;&#124;-- address	|String	|地点所在城市名称																																										|腾讯地图	|

### 路线规划（驾车/步行/骑行/电动车/公交）@routePlan

**示例**

```js
// 引入uni-map-service公共模块
const UniMapService  = require('uni-map-service');
// 初始化实例
let uniMapService = new UniMapService({
	provider: "qqmap", // 指定使用哪家地图供应商
});
// 调用API
let result = await uniMapService.routePlan({
	mode: "driving",
	from: "40.034852,116.319820",
	to: "39.771075,116.351395"
});
console.log("result", result);
```

**请求参数**

|参数							|类型		|必填	|适用mode	|说明																																																																																																																																							|兼容性															|
|:--							|:-:		|:-:	|:-:	|:--																																																																																																																																							|:-:																|
|mode							|String	|是		| 通用	| 交通方式 <br/>driving：驾车<br/>walking：步行 <br/>bicycling：骑行 <br/>ebicycling：电动车 <br/>transit：公交																																																																																		|all																|
|from							|String	|是		| 通用	| 起点位置坐标，格式：lat,lng																																																																																																																											|all																|
|to								|String	|是		| 通用	| 终点位置坐标，格式：lat,lng																																																																																																																											|all																|
|to_poi						|String	|否		| 通用	| 终点POI ID，传入后，优先级高于from（坐标）																																																																																																																			|all																|
|show_fields			|Number	|否		| 通用	| 返回结果控制，show\_fields用来筛选response结果中可选字段。<br/>show\_fields的使用需要遵循如下规则：<br/>1、具体可指定返回的字段类请见下方返回结果说明中的“show\_fields”内字段类型<br/>2、多个字段间采用“,”进行分割<br/>3、show\_fields未设置时，只返回基础信息类内字段<br/>	|高德地图														|
|from_poi					|String	|否		| 驾车、公交	| 起点POI ID，传入后，优先级高于from（坐标）																																																																																																																			|all																|
|policy						|String	|否		| 驾车、公交	|算路策略，详情见下方policy值范围																																																																																																													|all																|
|waypoints				|String	|否		| 驾车	|途经点，格式：lat1,lng1;lat2,lng2;… <br/>腾讯地图最大支持30个<br/>高德地图最大支持16个																																																																																				|all																|
|avoidpolygons		|String	|否		| 驾车	| 避让区域																																																																																																																												|all																|
|road_type				|Number	|否		| 驾车	| [from辅助参数] 起点道路类型																																																																																																																		|all																|
|plate						|String	|否		| 驾车	| 车牌号，填入后，路线引擎会根据车牌对限行区域进行避让，不填则不不考虑限行问题																																																																																										|all																|
|cartype					|Number	|否		| 驾车	| 车辆类型（影响限行规则），<br/>取值：<br/>0：[默认]普通汽车 <br/>1：新能源 <br/>2：插电式混动汽车																																																																															|腾讯地图：0、1; 高德地图：全部支持	|
|heading					|Number	|否		| 驾车	| [from辅助参数]在起点位置时的车头方向，数值型，取值范围0至360（0度代表正北，顺时针一周360度）																																																																																		|腾讯地图														|
|speed						|Number	|否		| 驾车	| [from辅助参数]速度，单位：米/秒，默认3。 当速度低于1.39米/秒时，heading将被忽略																																																																																								|腾讯地图														|
|accuracy					|Number	|否		| 驾车	| [from辅助参数]定位精度，单位：米，取>0数值，默认5。 当定位精度>30米时heading参数将被忽略																																																																																				|腾讯地图														|
|from_track				|Number	|否		| 驾车	| [from辅助参数]起点轨迹																																																																																																																					|腾讯地图														|
|get_mp						|Number	|否		| 驾车	| 是否返回多方案 <br/>0：[默认]仅返回一条路线方案 <br/>1：返回多方案（最多可返回三条方案供用户备选）																																																																															|腾讯地图														|
|get_speed				|Number	|否		| 驾车	| 是否返回路况（道路速度）<br/>0：[默认]不返回路况 1：返回路况																																																																																																		|腾讯地图														|
|added_fields			|Number	|否		| 驾车	| 返回指定标准附加字段，取值支持 cities 路线途经行政区划信息(按路线A途经顺序排序)																																																																																								|腾讯地图														|
|no_step					|Number	|否		| 驾车	| 不返回路线引导信息，可使回包数据量更小，<br/>取值：<br/>0：[默认]返回路线引导信息 <br/>1：不返回																																																																																|腾讯地图														|
|avoidroad				|String	|否		| 驾车	| 避让道路名，只支持一条避让道路																																																																																																																	|高德地图														|
|ferry						|Number	|否		| 驾车	| 是否使用轮渡 <br/>0：使用渡轮 <br/>1：不使用渡轮																																																																																																								|高德地图														|
|departure_time		|Number	|否		| 公交	| 出发时间，用于过滤掉非运营时段的线路，格式为Unix时间戳，默认使用当前时间																																																																																												|腾讯地图														|
|city1						|String	|是		| 公交	| 起点所在城市（仅支持citycode，相同时代表同城，不同时代表跨城）																																																																																																	|高德地图														|
|city2						|String	|是		| 公交	| 目的地所在城市（仅支持citycode，相同时代表同城，不同时代表跨城）																																																																																																|高德地图														|
|multiexport			|Number	|否		| 公交	| 地铁出入口数量 <br/>0：只返回一个地铁出入口 <br/>1：返回全部地铁出入口																																																																																													|高德地图														|
|max_trans				|Number	|否		| 公交	| 最大换乘次数																																																																																																																										|高德地图														|
|nightflag				|Number	|否		| 公交	| 考虑夜班车 <br/>0：不考虑夜班车 <br/>1：考虑夜班车																																																																																																							|高德地图														|
|date							|String	|否		| 公交	| 请求日期 例如:2013-10-28																																																																																																																				|高德地图														|
|time							|String	|否		| 公交	| 请求时间 例如:9-54																																																																																																																							|高德地图														|
|alternative_route|Number	|否		| 步行、骑行、电动车、公交	| 返回方案条数 最大3条，mode为公交时，最大10条																																																																																																		|高德地图														|


**【驾车】方式policy值范围**

0：速度优先（只返回一条路线），此路线不一定距离最短

1：费用优先（只返回一条路线），不走收费路段，且耗时最少的路线

2：距离优先（只返回一条路线），仅走距离最短的路线，但是可能存在穿越小路/小区的情况

3：速度优先（只返回一条路线），不走快速路，例如京通快速路

32：高德地图APP默认策略

33：躲避拥堵

34：高速优先

35：不走高速

36：少收费

37：大路优先

38：速度最快

39：躲避拥堵＋高速优先

40：躲避拥堵＋不走高速

41：躲避拥堵＋少收费

42：少收费＋不走高速

43：躲避拥堵＋少收费＋不走高速

44：躲避拥堵＋大路优先

45：躲避拥堵＋速度最快

101：该策略会通过终点坐标查找所在地点（如小区/大厦等），并使用地点出入口做为目的地，使路径更为合理

注意：高德地图支持除101外的所有策略，腾讯地图只支持 0、34、35、36、37、101

**【公交】方式policy值范围**

0：默认模式

1：最经济模式，票价最低

2：最少换乘模式，换乘次数少

3：最少步行模式，尽可能减少步行距离

4：最舒适模式，尽可能乘坐空调车

5：不乘地铁模式，不乘坐地铁路线

6：地铁图模式，起终点都是地铁站（地铁图模式下originpoi及destinationpoi为必填项）

7：地铁优先模式，步行距离不超过4KM

8：时间短模式，方案花费总时间最少

注意：高德地图支持所有策略，腾讯地图只支持 0、2、3、5、6、7

**返回参数**

注意：此接口固定返回originalResult参数（透传供应商接口原始返回结果）

腾讯地图：

[返回参数：驾车（driving）](https://lbs.qq.com/service/webService/webServiceGuide/webServiceRoute#2)

[返回参数：步行（walking）](https://lbs.qq.com/service/webService/webServiceGuide/webServiceRoute#3)

[返回参数：骑行（bicycling）](https://lbs.qq.com/service/webService/webServiceGuide/webServiceRoute#4)

[返回参数：电动车（ebicycling）](https://lbs.qq.com/service/webService/webServiceGuide/webServiceRoute#5)

[返回参数：公交（transit）](https://lbs.qq.com/service/webService/webServiceGuide/webServiceRoute#6)

高德地图：

[返回参数：驾车（driving）](https://lbs.amap.com/api/webservice/guide/api/newroute#t5)

[返回参数：步行（walking）](https://lbs.amap.com/api/webservice/guide/api/newroute#t6)

[返回参数：骑行（bicycling）](https://lbs.amap.com/api/webservice/guide/api/newroute#t7)

[返回参数：电动车（ebicycling）](https://lbs.amap.com/api/webservice/guide/api/newroute#t8)

[返回参数：公交（transit）](https://lbs.amap.com/api/webservice/guide/api/newroute#t9)

## 全局状态码

[腾讯地图](https://lbs.qq.com/service/webService/webServiceGuide/status)

[高德地图](https://lbs.amap.com/api/webservice/guide/tools/info)

## 常见问题

### 使用uni-map-service后，我还需要购买5万元的地图商业授权费用吗?

答：待补充