## uni-map-common 公共模块

聚合了多家地图供应商的服务端API

::: warning 注意
uni-map-common公共模块仅能在云函数/云对象内使用。如果您不了解公共模块，请[参阅](cf-common.md)
:::

> 插件市场地址：[https://ext.dcloud.net.cn/plugin?name=uni-map-common](https://ext.dcloud.net.cn/plugin?name=uni-map-common)

## 公共返回参数@publicresult

以下所有API均会返回的参数

|参数						|说明																																													|
|---						|---																																													|
|errCode				|为0代表成功，其他均为失败																																		|
|errMsg					|失败后的提示																																									|
|provider				| 当前数据是哪家地图供应商返回的																															|
|result					| 插件返回结果（抹平各平台差异后的返回结果）																									|
|originalResult	| 原始返回结果（供应商接口原始返回结果，需new UniMap时，设置needOriginalResult: true）	|

## 初始化实例

在调用API前，需要先初始化实例


```js
// 引入uni-map-common公共模块
const UniMap = require('uni-map-common');
// 初始化实例
let uniMap = new UniMap({
	provider: "qqmap", // 指定使用哪家地图供应商
	key: "xxxxxx",
	needOriginalResult: false, // 是否需要返回原始信息
});
```

**参数**

|参数								|类型		|必填	|说明														|兼容性	|
|:--								|:-:		|:-:	|:--														|:-:		|
|provider						|String	|是		|指定使用哪家地图供应商					|all		|
|key								|String	|是		|地图供应商对应的key						|all		|
|needOriginalResult	|Boolean|否		|是否需要返回原始信息，默认false|all		|

**provider可选项**

- qqmap 腾讯地图
- amap 高德地图

## API@api

### 逆地址解析（坐标转地址）@location2address

**功能介绍**

主要用于将经纬度坐标识别为详细地址，如：39.908815,116.397507 识别为 北京市东城区西长安街1号

同时还能获取到经纬度所在省、市、区、乡镇、门牌号、行政区划代码，及周边参考位置信息，如道路及交叉口、河流、湖泊、桥等

**示例**

```js
// 引入uni-map-common公共模块
const UniMap = require('uni-map-common');
// 初始化实例
let uniMap = new UniMap({
	provider: "qqmap", // 指定使用哪家地图供应商
	key: "xxxxxx"
});
// 调用API
let result = await uniMap.location2address({
  location: "39.908815,116.397507"
});
console.log("result", result);
```

**请求参数**

|参数														|类型		|必填	|说明																																																																																																																																																																																																																																																|兼容性																																																										|
|:--														|:-:		|:-:	|:--																																																																																																																																																																																																																																																|:-:																																																											|
|location												|String	|是		|经纬度（GCJ02坐标系），格式：location=lat<纬度>,lng<经度>																																																																																																																																																																																																																					|all																																																											|
|get_poi												|Number	|否		|是否返回周边地点（POI）列表<br/>0：不返回（默认）<br/>1：返回																																																																																																																																																																																																																			|all																																																											|
|poi_options										|Object	|否		|周边POI（AOI）列表控制参数，仅当get\_poi=1时生效																																																																																																																																																																																																																																		|all																																																											|
| &emsp;&#124;-- radius					|Number	|否		|搜索半径，单位：米 <br/>radius取值范围<br/>腾讯地图 1-5000（米）<br/>高德地图 0~3000（米），默认是1000（米）																																																																																																																																																																																												|all																																																											|
| &emsp;&#124;-- policy					|Number	|否		|控制返回场景 <br/>1[默认] 以地标+主要的路+近距离POI为主，着力描述当前位置；<br/>2 到家场景：筛选合适收货的POI，并会细化收货地址，精确到楼栋；<br/>3 出行场景：过滤掉车辆不易到达的POI(如一些景区内POI)，<br/>增加道路出入口、交叉口、大区域出入口类POI，排序会根据真实API大用户的用户点击自动优化。<br/>4 社交签到场景，针对用户签到的热门 地点进行优先排序。<br/>5 位置共享场景，用户经常用于发送位置、位置分享等场景的热门地点优先排序<br/>4 注：policy=1/2/3最多返回10条周边POI，policy=4/5最多返回20条，	|all																																																											|
| &emsp;&#124;-- address_format	|String	|否		|地址格式 <br/>long 长地址（默认）<br/>short 短地址																																																																																																																																																																																																																									|腾讯地图																																																									|
| &emsp;&#124;-- poitype				|String	|否		|返回附近POI类型<br/>参数仅支持传入POI TYPECODE，可以传入多个POI TYPECODE，相互之间用“&#124;”分隔。<br/>获取 POI TYPECODE 可以参考 [高德地图-POI分类码表](https://a.amap.com/lbs/static/amap_3dmap_lite/amap_poicode.zip)																																																																																																																																																																																					| 高德地图																																																								|
| &emsp;&#124;-- roadlevel			|Number	|否		|道路等级<br/>0：显示所有道路<br/>1：过滤非主干道路，仅输出主干道路数据																																																																																																																																																																																																															|高德地图																																																									|
| &emsp;&#124;-- homeorcorp			|Number	|否		|是否优化POI返回顺序homeorcorp 参数的设置可以影响召回 POI 内容的排序策略，<br/>目前提供三个可选参数：<br/>0：不对召回的排序策略进行干扰。<br/>1：综合大数据分析将居家相关的 POI 内容优先返回，即优化返回结果中 pois 字段的poi顺序。<br/>2：综合大数据分析将公司相关的 POI 内容优先返回，即优化返回结果中 pois 字段的poi顺序。																																																																																						| 高德地图																																																								|

**返回参数**

仅列出result内的参数，其他参数见 [公共返回参数](#publicresult)

|参数												|类型		|说明														|兼容性		|
|:--												|:-:		|:--														|:-:			|
|formatted_addresses				| String|详细地址												|all			|
|country										| String|国家														|all			|
|province										| String|省															|all			|
|city												| String|市															|all			|
|district										| String|区															|all			|
|street											| String|街道/道路，可能为空字串				|all			|
|street_number							| String|门牌，可能为空字串							|all			|
|adcode											| String|行政区划代码										|all			|
|pois												| Array	|周边POI												|all			|
| &emsp;&#124;-- id					| String|id															|all			|
| &emsp;&#124;-- title			| String|地点名称												|all			|
| &emsp;&#124;-- address		| String|地址														|all			|
| &emsp;&#124;-- location		| Object|经纬度													|all			|
| &emsp;&#124;-- distance		| Number|距离（米）											|all			|
| &emsp;&#124;-- direction	| String|方位														|all			|
| &emsp;&#124;-- category		| String|类别														|all			|
|roads											| Array	|道路信息列表										|高德地图	|
| &emsp;&#124;-- id					| String|道路id													|高德地图	|
| &emsp;&#124;-- title			| String|道路名称												|高德地图	|
| &emsp;&#124;-- distance		| String|道路到请求坐标的距离（米）			|高德地图	|
| &emsp;&#124;-- direction	| Object|方位														|高德地图	|
| &emsp;&#124;-- location		| Object|坐标点													|高德地图	|
| &emsp;&emsp;&#124;-- lat	| Number|纬度														|高德地图	|
| &emsp;&emsp;&#124;-- lng	| Number|经度														|高德地图	|
|roadinters									| Array	|道路交叉口列表									|高德地图	|
| &emsp;&#124;-- distance		| String|交叉路口到请求坐标的距离（米）	|高德地图	|
| &emsp;&#124;-- direction	| String|方位（输入点相对路口的方位）		|高德地图	|
| &emsp;&#124;-- first_id		| String|第一条道路id										|高德地图	|
| &emsp;&#124;-- first_name	| String|第一条道路名称									|高德地图	|
| &emsp;&#124;-- second_id	| String|第二条道路id										|高德地图	|
| &emsp;&#124;-- second_name| String|第二条道路名称									|高德地图	|
| &emsp;&#124;-- location		| Object|路口经纬度											|高德地图	|
| &emsp;&emsp;&#124;-- lat	| Number|纬度														|高德地图	|
| &emsp;&emsp;&#124;-- lng	| Number|经度														|高德地图	|

### 地址解析（地址转坐标）@address2location

**功能介绍**

用于将文字地址转换成对应的经纬度坐标，同时识别文字地址中的行政区域

**示例**

```js
// 引入uni-map-common公共模块
const UniMap = require('uni-map-common');
// 初始化实例
let uniMap = new UniMap({
	provider: "qqmap", // 指定使用哪家地图供应商
	key: "xxxxxx"
});
// 调用API
let result = await uniMap.address2location({
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

**功能介绍**

实现从其它地图供应商坐标系或标准GPS坐标系，批量转换到指定地图供应商的坐标系。

**示例**

```js
// 引入uni-map-common公共模块
const UniMap = require('uni-map-common');
// 初始化实例
let uniMap = new UniMap({
	provider: "qqmap", // 指定使用哪家地图供应商
	key: "xxxxxx"
});
// 调用API
let result = await uniMap.translate({
	locations: [
		{ lat: 39.908815, lng: 116.397507 },
		{ lat: 39.908815, lng: 116.397107 }
	],
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

**功能介绍**

通过终端设备IP地址获取其当前所在地理位置，常用于显示当前所在城市。

**示例**

```js
// 引入uni-map-common公共模块
const UniMap = require('uni-map-common');
// 初始化实例
let uniMap = new UniMap({
	provider: "qqmap", // 指定使用哪家地图供应商
	key: "xxxxxx"
});
// 调用API
let result = await uniMap.ip2location({
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

**功能介绍**

用于获取输入关键字的补完与提示，帮助用户快速输入。需配合前端程序实现Autocomplete（自动完成）的效果。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-admin/%E8%85%BE%E8%AE%AF%E5%9C%B0%E5%9B%BE/1.jpg)

**示例**

```js
// 引入uni-map-common公共模块
const UniMap = require('uni-map-common');
// 初始化实例
let uniMap = new UniMap({
	provider: "qqmap", // 指定使用哪家地图供应商
	key: "xxxxxx"
});
// 调用API
let result = await uniMap.inputtips({
	keyword: "人民医院",
	city: "北京市"
});
console.log("result", result);
```

**请求参数**

|参数						|类型		|必填	|说明																																																																			|兼容性																																																																			|
|:--						|:-:		|:-:	|:--																																																																			|:-:																																																																				|
|keyword				|String	|是		| 用户输入的关键词（希望获取后续提示的关键词）																																														|all																																																																				|
|city						|String	|是		| 限制城市范围																																																														|all																																																																				|
|citylimit			|Boolean|否		| false：当前城市无结果时，自动扩大范围到全国匹配（默认）<br/>true：固定在当前城市																												| all																																																																				|
|location				|Object	|否		| 定位坐标，传入后，若用户搜索关键词为类别词（如酒店、餐馆时），<br/>与此坐标距离近的地点将靠前显示|all			
| &emsp;&#124;-- lat|Number|纬度																																						|all																																																																				|
| &emsp;&#124;-- lng|Number	|经度	|all																																						|																																																																						|
|get_subpois				|Number	|否		| 是否返回子地点，如大厦停车场、出入口等取值<br/>0：不返回（默认） <br/>1：返回	|腾讯地图																																																																		|
|policy							|Number	|否		| 检索策略																																			|腾讯地图																																																																		|
|filter							|String	|否		| 筛选条件																																			|腾讯地图																																																																		|
|address_format			|String	|否		|可选值：short 返回“不带行政区划的”短地址																			|腾讯地图																																																																		|
|page\_index				|Number	|否		| 页码，从1开始，最大页码需通过count进行计算，必须与page_size同时使用						|腾讯地图																																																																		|
|page\_size					|Number	|否		| 每页条数，取值范围1-20，必须与page_index 同时使用															|腾讯地图																																																																		|
|datatype				|Number							|否			| 返回的数据类型，多种数据类型用“\|”分隔 <br/>可选值：<br/>all：返回所有数据类型 <br/>poi：返回POI数据类型 <br/>bus：返回公交站点数据类型 <br/>busline：返回公交线路数据类型|高德地图																																																																		|

**返回参数**

仅列出result内的参数，其他参数见 [公共返回参数](#publicresult)

|参数														|类型		|说明																																																									|兼容性		|
|:--														|:-:		|:--																																																									|:-:			|
|data														|Array	| 提示词数组，每项为一个POI对象																																												|all			|
| &emsp;&#124;-- id							|String	|若数据为POI类型，则返回POI ID;若数据为bus类型，则返回bus id;若数据为busline类型，则返回busline id。									|all			|
| &emsp;&#124;-- title					|String	|地点名称																																																							|all			|
| &emsp;&#124;-- address				|String	|地址																																																									|all			|
| &emsp;&#124;-- category				|String	|分类																																																									|腾讯地图	|
| &emsp;&#124;-- type						|String	|POI类型，值说明：0:普通POI / 1:公交车站 / 2:地铁站 / 3:公交线路 / 4:行政区划																					|腾讯地图	|
| &emsp;&#124;-- location				|String	|经纬度																																																								|all			|
| &emsp;&emsp;&#124;-- lat			|Number	|纬度																																																									|all			|
| &emsp;&emsp;&#124;-- lng			|Number	|经度																																																									|all			|
| &emsp;&#124;-- adcode					|Number	|行政区划代码																																																					|all			|
| &emsp;&#124;-- province				|String	|省																																																										|腾讯地图	|
| &emsp;&#124;-- city						|String	|市																																																										|腾讯地图	|
| &emsp;&#124;-- district				|String	|腾讯地图：区/县，当type（POI类型）为3（公交线路）时，district由city补全<br/>高德地图为:省+市+区（直辖市为“市+区”）	|all			|
| &emsp;&#124;-- children				|Array	|子地点，当get_subpois=1时返回																																												|腾讯地图	|
| &emsp;&emsp;&#124;-- parent_id|String	|主地点ID，对应data中的地点ID																																													|腾讯地图	|
| &emsp;&emsp;&#124;-- id				|String	|地点唯一标识																																																					|腾讯地图	|
| &emsp;&emsp;&#124;-- title		|String	|地点名称																																																							|腾讯地图	|
| &emsp;&emsp;&#124;-- address	|String	|地址																																																									|腾讯地图	|
| &emsp;&emsp;&#124;-- category	|String	|POI（地点）分类																																																			|腾讯地图	|
| &emsp;&emsp;&#124;-- location	|String	|地址																																																									|腾讯地图	|
| &emsp;&emsp;&emsp;&#124;-- lat|Number	|纬度																																																									|腾讯地图	|
| &emsp;&emsp;&emsp;&#124;-- lng|Number	|经度																																																									|腾讯地图	|
| &emsp;&emsp;&#124;-- adcode		|String	|行政区划代码																																																					|腾讯地图	|
| &emsp;&emsp;&#124;-- city			|String	|地址																																																									|腾讯地图	|
| &emsp;&emsp;&#124;-- address	|String	|地点所在城市名称																																																			|腾讯地图	|

### 地点搜索@search

**功能介绍**

用于搜索周边地点，如，搜索颐和园附近半径500米内的酒店（一个圆形范围）

**示例**

```js
// 引入uni-map-common公共模块
const UniMap = require('uni-map-common');
// 初始化实例
let uniMap = new UniMap({
	provider: "qqmap", // 指定使用哪家地图供应商
	key: "xxxxxx"
});
// 调用API
let result = await uniMap.search({
	keyword: "酒店",
	boundary: "nearby(39.908815,116.397507,1000,1)"
	city: "北京市"
});
console.log("result", result);
```

**请求参数**

|参数								|类型		|必填	|说明																																																																																																																							|兼容性		|
|:--								|:-:		|:-:	|:--																																																																																																																							|:-:			|
|keyword						|String	|是		| 搜索关键字，长度最大80个字节																																																																																																										|all			|
|location						|Object	|是		| 搜索中心点的经纬度																																																																																																															|all			|
| &emsp;&#124;-- lat|Number	|是		|纬度																																																																																																																							|all			|
| &emsp;&#124;-- lng|Number	|是		|经度																																																																																																																							|all			|
|radius							|Number	|否		| 搜索半径，单位：米，取值范围：<br/>腾讯地图：10到1000<br/>高德地图：取值范围:0-50000																																																																														|all			|
|auto_extend				|Number	|否		| 当前范围无结果时，是否自动扩大范围<br/>0：不扩大 <br/>1：自动扩大范围（默认）																																																																																		|all			|
|get_subpois				|Number	|否		| 是否返回子地点，如大厦停车场、出入口等取值<br/>0：不返回（默认） <br/>1：返回																																																																																		|all			|
|orderby						|String	|否		|排序，支持按距离由近到远排序，取值：<br/>distance：按距离排序<br/>weight：综合排序<br/>说明：<br/>1. 周边搜索默认排序会综合考虑距离、权重等多方面因素<br/>2. 设置按距离排序后则仅考虑距离远近，一些低权重的地点可能因距离近排在前面，导致体验下降|all			|
|page\_index				|Number	|否		| 页码，从1开始，最大页码需通过count进行计算，必须与page_size同时使用																																																																																							|all			|
|page\_size					|Number	|否		| 每页条数，取值范围1-20，必须与page_index 同时使用																																																																																																|all			|
|filter							|String	|否		| 筛选条件																																																																																																																				|腾讯地图	|
|types							|String	|否		| 指定地点类型																																																																																																																		|高德地图	|
|city								|String	|否		| 搜索的城市																																																																																																																			|高德地图	|

**返回参数**

仅列出result内的参数，其他参数见 [公共返回参数](#publicresult)

|参数														|类型		|说明																																					|兼容性		|
|:--														|:-:		|:--																																					|:-:			|
|data														|Array	| 搜索结果POI（地点）数组，每项为一个POI（地点）对象													|all			|
| &emsp;&#124;-- id							|String	|POI（地点）唯一标识																													|all			|
| &emsp;&#124;-- title					|String	|地点名称																																			|all			|
| &emsp;&#124;-- tel						|String	|电话																																					|all			|
| &emsp;&#124;-- address				|String	|地址																																					|all			|
| &emsp;&#124;-- category				|String	|分类																																					|all			|
| &emsp;&#124;-- type						|String	|POI类型，值说明：0:普通POI / 1:公交车站 / 2:地铁站 / 3:公交线路 / 4:行政区划	|腾讯地图	|
| &emsp;&#124;-- location				|String	|经纬度																																				|all			|
| &emsp;&emsp;&#124;-- lat			|Number	|纬度																																					|all			|
| &emsp;&emsp;&#124;-- lng			|Number	|经度																																					|all			|
| &emsp;&#124;-- distance				|Number	|距离，单位： 米，根据传入的定位点计算返回																		|all			|
| &emsp;&#124;-- adcode					|Number	|行政区划代码																																	|all			|
| &emsp;&#124;-- province				|String	|省																																						|腾讯地图	|
| &emsp;&#124;-- city						|String	|市																																						|腾讯地图	|
| &emsp;&#124;-- district				|String	|区/县																																				|腾讯地图	|
| &emsp;&#124;-- children				|Array	|子地点，当get_subpois=1时返回																								|all			|
| &emsp;&emsp;&#124;-- parent_id|String	|主地点ID，对应data中的地点ID																									|all			|
| &emsp;&emsp;&#124;-- id				|String	|地点唯一标识																																	|all			|
| &emsp;&emsp;&#124;-- title		|String	|地点名称																																			|all			|
| &emsp;&emsp;&#124;-- tel			|String	|电话																																					|all			|
| &emsp;&emsp;&#124;-- category	|String	|POI（地点）分类																															|all			|
| &emsp;&emsp;&#124;-- address	|String	|地址																																					|all			|
| &emsp;&emsp;&#124;-- location	|Object	|经纬度																																				|all			|
| &emsp;&emsp;&emsp;&#124;-- lat|Number	|纬度																																					|all			|
| &emsp;&emsp;&emsp;&#124;-- lng|Number	|经度																																					|all			|
| &emsp;&emsp;&#124;-- type			|String	|POI类型，值说明：0:普通POI / 1:公交车站 / 2:地铁站 / 3:公交线路 / 4:行政区划	|腾讯地图	|
| &emsp;&emsp;&#124;-- adcode		|String	|行政区划代码																																	|腾讯地图	|
| &emsp;&emsp;&#124;-- province	|String	|省																																						|腾讯地图	|
| &emsp;&emsp;&#124;-- city			|String	|市																																						|腾讯地图	|
| &emsp;&emsp;&#124;-- district	|String	|区/县																																				|腾讯地图	|

### 行政区域查询@districtSearch

**功能介绍**

用于查询四级行政区划列表：省、市、区、街道

**示例**

```js
// 引入uni-map-common公共模块
const UniMap = require('uni-map-common');
// 初始化实例
let uniMap = new UniMap({
	provider: "qqmap", // 指定使用哪家地图供应商
	key: "xxxxxx"
});
// 调用API
let result = await uniMap.districtSearch({
	adcode: "110101"
});
console.log("result", result);
```

**请求参数**

|参数					|类型		|必填	|说明																																																																																																	|兼容性														|
|:--					|:-:		|:-:	|:--																																																																																																	|:-:															|
|adcode				|String	|否		| 父级行政区划adcode																																																																																									|all															|
|get\_polygon	|Number	|否		| 返回行政区划轮廓点串（经纬度点串），取值：<br/>0 默认，不返回轮廓<br/>1 包含海域，3公里抽稀粒度<br/>2 纯陆地行政区划，可通过max_offset设置返回轮廓的抽稀级别<br/>注：乡镇/街道（四级）不支持返回轮廓|腾讯地图：0、1、2 高德地图：0、2	|
|max\_offset	|Number	|否		| 轮廓点串的抽稀精度（仅对get_polygon=2时支持），<br/>单位米，可选值：<br/>100 ：100米（当缺省id返回省级区划时，将按500米返回，其它级别正常生效）<br/>500 ：500米<br/>1000：1000米<br/>3000：3000米		|腾讯地图													|
|page\_index	|Number	|否		| 页码，从1开始，最大页码需通过count进行计算，必须与page_size同时使用																																																																	|高德地图													|
|page\_size		|Number	|否		| 每页条数，取值范围1-20，必须与page_index 同时使用																																																																										|高德地图													|
|filter				|String	|否		|按照指定行政区划进行过滤，填入后则只返回该省/直辖市信息<br/>需填入adcode，为了保证数据的正确，强烈建议填入此参数																																											|高德地图													|
|subdistrict	|Number	|否		|可选值：<br/>1：返回下一级行政区；<br/>2：返回下两级行政区；<br/>3：返回下三级行政区；																																																								|高德地图													|


**返回参数**

仅列出result内的参数，其他参数见 [公共返回参数](#publicresult)

|参数											|类型		|说明																																																																																																									|兼容性		|
|:--											|:-:		|:--																																																																																																									|:-:			|
|data											|Array	| 结果数组																																																																																																						|all			|
| &emsp;&#124;-- adcode		|String	| 行政区划唯一标识																																																																																																		|all			|
| &emsp;&#124;-- name			|String	|简称，如“内蒙古” 注意：高德地图name = fullname																																																																																			|all			|
| &emsp;&#124;-- fullname	|String	|全称，如“内蒙古自治区”																																																																																															|all			|
| &emsp;&#124;-- location	|String	|经纬度																																																																																																								|all			|
| &emsp;&emsp;&#124;-- lat|Number	|纬度																																																																																																									|all			|
| &emsp;&emsp;&#124;-- lng|Number	|经度																																																																																																									|all			|
| &emsp;&#124;-- pinyin		|Array	|行政区划拼音，每一下标为一个字的全拼，如：[“nei”,“meng”,“gu”]																																																																									|腾讯地图	|
| &emsp;&#124;-- cidx			|Array	|子级行政区划在下级数组中的下标位置																																																																																										|腾讯地图	|
| &emsp;&#124;-- polygon	|Array	|该行政区划的轮廓经纬度点串（当使用get_polygon=1或2时返回），数组每一项为一个多边形，一个行政区划可以由多块多边形组成<br/>注意：部分城市存在飞地，当两个polygon重叠时，重叠区域隶属其他城市，不重叠时代表此城市的飞地	|腾讯地图			|
| &emsp;&#124;-- level		|Array	|行政区划级别																																																																																																					|高德地图	|
| &emsp;&#124;-- children	|Array	|下级行政区列表，需传subdistrict参数才会有此值																																																																																																			|高德地图	|

### 路线规划@route

#### 驾车（driving）@drivingroute

**功能介绍**

用于计算从起点到终点驾车的路线以及结合实时路况、少收费、不走高速等多种偏好，精准预估到达时间。

**示例**

```js
// 引入uni-map-common公共模块
const UniMap = require('uni-map-common');
// 初始化实例
let uniMap = new UniMap({
	provider: "qqmap", // 指定使用哪家地图供应商
	key: "xxxxxx"
});
// 调用API
let result = await uniMap.route({
	mode: "driving",
	from: "40.034852,116.319820",
	to: "39.771075,116.351395"
});
console.log("result", result);
```

**请求参数**

|参数											|类型		|必填	|说明																																																																																																																																							|兼容性															|
|:--											|:-:		|:-:	|:--																																																																																																																																							|:-:																|
|mode											|String	|是		| 交通方式 固定为：driving																																																																																																																												|all																|
|from											|String	|是		| 起点位置坐标，格式：lat,lng																																																																																																																											|all																|
|to												|String	|是		| 终点位置坐标，格式：lat,lng																																																																																																																											|all																|
|from_poi									|String	|否		| 起点POI ID，传入后，优先级高于from（坐标）																																																																																																																			|all																|
|to_poi										|String	|否		| 终点POI ID，传入后，优先级高于to（坐标）																																																																																																																			|all																|
|policy										|String	|否		| 算路策略 [详情](#drivingroutepolicy)																																																																																																																						|all																|
|waypoints								|String	|否		| 格式：lat1,lng1;lat2,lng2;																																																																																																								|all																|
|avoid_polygons						|String	|否		| 避让区域																																																																																																																																				|all																|
|road_type								|Number	|否		| [from辅助参数] 起点道路类型[详情](#routeroadtype)																																																																																																																|all																|
|plate_number							|String	|否		| 车牌号，填入后，路线引擎会根据车牌对限行区域进行避让，不填则不不考虑限行问题																																																																																																		|all																|
|cartype									|Number	|否		| 车辆类型（影响限行规则），<br/>取值：<br/>0：[默认]普通汽车 <br/>1：新能源 <br/>2：插电式混动汽车																																																																																								|腾讯地图：0、1; 高德地图：全部支持	|
|heading									|Number	|否		| [from辅助参数]在起点位置时的车头方向，数值型，取值范围0至360（0度代表正北，顺时针一周360度）																																																																																										|腾讯地图														|
|speed										|Number	|否		| [from辅助参数]速度，单位：米/秒，默认3。 当速度低于1.39米/秒时，heading将被忽略																																																																																																	|腾讯地图														|
|accuracy									|Number	|否		| [from辅助参数]定位精度，单位：米，取>0数值，默认5。 当定位精度>30米时heading参数将被忽略																																																																																												|腾讯地图														|
|from_track								|Number	|否		| [from辅助参数]起点轨迹																																																																																																																													|腾讯地图														|
|get_mp										|Number	|否		| 是否返回多方案 <br/>0：[默认]仅返回一条路线方案 <br/>1：返回多方案（最多可返回三条方案供用户备选）																																																																																							|腾讯地图														|
|no_step									|Number	|否		| 不返回路线引导信息，可使回包数据量更小，<br/>取值：<br/>0：[默认]返回路线引导信息 <br/>1：不返回																																																																																								|腾讯地图														|
|avoidroad								|String	|否		| 避让道路名，只支持一条避让道路																																																																																																																									|高德地图														|
|ferry										|Number	|否		| 是否使用轮渡 <br/>0：使用渡轮 <br/>1：不使用渡轮																																																																																																																|高德地图														|

##### 【驾车】方式policy值范围@drivingroutepolicy

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

##### 【驾车】road_type值范围@routeroadtype

0：[默认]不考虑起点道路类型

1：在桥上

2：在桥下

3：在主路

4：在辅路

5：腾讯地图：在对面	 高德地图：隧道

6：桥下主路

7：腾讯地图：桥下辅路	 高德地图：环岛

9：腾讯地图：不支持	 高德地图：停车场内部

**返回参数**

仅列出result内的参数，其他参数见 [公共返回参数](#publicresult)

**驾车（driving）返回参数**

|参数																				|类型		|说明																																																																																					|兼容性															|
|:--																				|:-:		|:--																																																																																					|:-:																|
|routes																			|Array	| 路线方案																																																																																		|all																|
| &emsp;&#124;-- mode												|String	|方案交通方式																																																																																	|all																|
| &emsp;&#124;-- tags												|Array	|方案标签																																																																																			|腾讯地图														|
| &emsp;&#124;-- distance										|Number	|方案总距离，单位：米																																																																													|all																|
| &emsp;&#124;-- traffic\_light\_count			|Number	|方案途经红绿灯个数																																																																														|腾讯地图														|
| &emsp;&#124;-- restriction_status					|Object	|限行状态码：<br/>0 途经没有限行城市，或路线方案未涉及限行区域<br/>1 途经包含有限行的城市<br/>3 [设置车牌] 已避让限行<br/>4 [设置车牌] 无法避开限行区域（本方案包含限行路段）	|腾讯地图：0、1、3、4 高德地图：0、1|
| &emsp;&#124;-- polyline										|Array	|方案路线坐标点串																																																																															|腾讯地图														|
| &emsp;&#124;-- taxi_cost									|Number	|预估打车费用，单位：元																																																																												|all																|
| &emsp;&#124;-- steps											|Array	|路线步骤																																																																																			|all																|
| &emsp;&emsp;&#124;-- instruction					|String	|阶段路线描述																																																																																	|all																|
| &emsp;&emsp;&#124;-- road_name						|String	|阶段路线路名																																																																																	|all																|
| &emsp;&emsp;&#124;-- dir_desc							|String	|阶段路线方向																																																																																	|all																|
| &emsp;&emsp;&#124;-- distance							|Number	|阶段路线距离，单位：米																																																																												|all																|
| &emsp;&emsp;&#124;-- act_desc							|String	|阶段路线末尾动作：如：左转调头																																																																								|all																|
| &emsp;&emsp;&#124;-- accessorial_desc			|String	|末尾辅助动作：如：到达终点																																																																										|all																|
| &emsp;&emsp;&#124;-- polyline							|String	|分路段坐标点串，格式：lat1,lng1;lat2,lng2																																																																		|all																|
| &emsp;&emsp;&#124;-- polyline_idx					|Array	|阶段路线坐标点串在方案路线坐标点串的位置																																																																			|腾讯地图														|
| &emsp;&emsp;&#124;-- cost									|Object	|设置后可返回方案所需时间及费用成本																																																																						|高德地图														|
| &emsp;&emsp;&emsp;&#124;-- duration				|String	|线路耗时，分段step中的耗时																																																																										|高德地图														|
| &emsp;&emsp;&emsp;&#124;-- tolls					|String	|此路线道路收费，单位：元，包括分段信息																																																																				|高德地图														|
| &emsp;&emsp;&emsp;&#124;-- toll_distance	|String	|收费路段里程，单位：米，包括分段信息																																																																					|高德地图														|
| &emsp;&emsp;&emsp;&#124;-- toll_road			|String	|主要收费道路																																																																																	|高德地图														|
| &emsp;&emsp;&emsp;&#124;-- traffic_lights	|String	|方案中红绿灯个数，单位：个																																																																										|高德地图														|
| &emsp;&emsp;&#124;-- speed								|Array	|路况信息，只有设置get_speed=1才会返回																																																																				|高德地图														|
| &emsp;&emsp;&emsp;&#124;-- distance				|String	|距离，单位：米																																																																																|高德地图														|
| &emsp;&emsp;&emsp;&#124;-- level					|String	|路况类型：0:畅通 1:缓行 2:拥堵 3:无路况 4:严重拥堵																																																														|高德地图														|
| &emsp;&emsp;&emsp;&#124;-- polyline				|String	|分路段坐标点串，格式：lat1,lng1;lat2,lng2																																																																		|高德地图														|
| &emsp;&#124;-- speed											|Array	|路况信息，只有设置get_speed=1才会返回																																																																				|腾讯地图														|
| &emsp;&emsp;&#124;-- distance							|String	|距离，单位：米																																																																																|腾讯地图														|
| &emsp;&emsp;&#124;-- level								|String	|路况类型：0:畅通 1:缓行 2:拥堵 3:无路况 4:严重拥堵																																																														|腾讯地图														|
| &emsp;&emsp;&#124;-- polyline							|String	|分路段坐标点串，格式：lat1,lng1;lat2,lng2																																																																		|腾讯地图														|
| &emsp;&emsp;&#124;-- polyline_idx					|String	|阶段路线坐标点串，在路线坐标点串的位置																																																																				|腾讯地图														|
| &emsp;&#124;-- waypoints									|Array	|途经点，顺序与输入waypoints一致 （输入waypoints时才会有此结点返回）																																																					|腾讯地图														|
| &emsp;&emsp;&#124;-- title								|String	|途经点路名																																																																																		|腾讯地图														|
| &emsp;&emsp;&#124;-- location							|Object	|途经点坐标：																																																																																	|腾讯地图														|
| &emsp;&emsp;&emsp;&#124;-- lat						|Number	|纬度																																																																																					|腾讯地图														|
| &emsp;&emsp;&emsp;&#124;-- lng						|Number	|经度																																																																																					|腾讯地图														|
| &emsp;&emsp;&#124;-- duration							|Number	|预估到达耗时，单位：分钟																																																																											|腾讯地图														|
| &emsp;&emsp;&#124;-- distance							|Number	|起点到该途经点的距离，单位：米																																																																								|腾讯地图														|
| &emsp;&emsp;&#124;-- polyline							|String	|分路段坐标点串，格式：lat1,lng1;lat2,lng2																																																																		|腾讯地图														|
| &emsp;&emsp;&#124;-- polyline_idx					|Number	|该途经点在polyline中的索引位置（数组下标位置）																																																																|腾讯地图														|
| &emsp;&#124;-- cities											|Object	|途径城市信息																																																																																	|all																|
| &emsp;&emsp;&#124;-- adcode								|String	|途径区域编码																																																																																	|all																|
| &emsp;&emsp;&#124;-- citycode							|String	|途径城市编码																																																																																	|高德地图														|
| &emsp;&emsp;&#124;-- city									|String	|途径城市名称																																																																																	|高德地图														|
| &emsp;&emsp;&#124;-- district							|String	|途径区县信息																																																																																	|高德地图														|
| &emsp;&emsp;&emsp;&#124;-- name						|String	|途径区县名称																																																																																	|高德地图														|
| &emsp;&emsp;&emsp;&#124;-- adcode					|String	|途径区县adcode																																																																																|高德地图														|

#### 步行（walking）@walkingroute

**功能介绍**

用于计算从起点到终点基于步行路线规划。

**示例**

```js
// 引入uni-map-common公共模块
const UniMap = require('uni-map-common');
// 初始化实例
let uniMap = new UniMap({
	provider: "qqmap", // 指定使用哪家地图供应商
	key: "xxxxxx"
});
// 调用API
let result = await uniMap.route({
	mode: "walking",
	from: "40.034852,116.319820",
	to: "39.771075,116.351395"
});
console.log("result", result);
```

**请求参数**

|参数							|类型		|必填	|说明																																																								|兼容性		|
|:--							|:-:		|:-:	|:--																																																								|:-:			|
|mode							|String	|是		| 交通方式 固定为：walking																																													|all			|
|from							|String	|是		| 起点位置坐标，格式：lat,lng																																												|all			|
|to								|String	|是		| 终点位置坐标，格式：lat,lng																																												|all			|
|to_poi						|String	|否		| 终点POI ID，传入后，优先级高于to（坐标）																																				|腾讯地图			|
|alternative_route|Number	|否		| 1：多备选路线中第一条路线<br/>2：多备选路线中前两条路线<br/>3：多备选路线中三条路线<br/>不传则默认返回一条路线方案|高德地图	|


**返回参数**

仅列出result内的参数，其他参数见 [公共返回参数](#publicresult)

**步行（walking）返回参数**

|参数																|类型		|说明																																									|兼容性		|
|:--																|:-:		|:--																																									|:-:			|
|routes															|Array	| 路线方案																																						|all			|
| &emsp;&#124;-- mode								|String	|方案交通方式																																					|all			|
| &emsp;&#124;-- distance						|Number	|方案总距离，单位：米																																	|all			|
| &emsp;&#124;-- duration						|Number	|方案估算时间，单位：分钟																															|all			|
| &emsp;&#124;-- direction					|String	|方案整体方向																																					|腾讯地图	|
| &emsp;&#124;-- polyline						|Array	|方案路线坐标点串																																			|腾讯地图	|
| &emsp;&#124;-- steps							|Array	|路线步骤																																							|all			|
| &emsp;&emsp;&#124;-- instruction	|String	|阶段路线描述																																					|all			|
| &emsp;&emsp;&#124;-- road_name		|String	|阶段路线路名																																					|all			|
| &emsp;&emsp;&#124;-- dir_desc			|String	|阶段路线方向																																					|all			|
| &emsp;&emsp;&#124;-- distance			|Number	|阶段路线距离，单位：米																																|all			|
| &emsp;&emsp;&#124;-- act_desc			|String	|阶段路线末尾动作：如：左转调头																												|all			|
| &emsp;&emsp;&#124;-- polyline			|String	|分路段坐标点串，格式：lat1,lng1;lat2,lng2																						|all			|
| &emsp;&emsp;&#124;-- type					|Number	|阶段路线的步行设施类型（type），包含：<br/>0普通道路，1过街天桥，2地下通道，3人行横道|腾讯地图	|
| &emsp;&emsp;&#124;-- polyline_idx	|Array	|阶段路线坐标点串在方案路线坐标点串的位置																							|腾讯地图	|
| &emsp;&emsp;&#124;-- taxi_cost		|Number	|预估打车费用，单位：元（此字段不一定会返回）																					|高德地图	|
| &emsp;&emsp;&#124;-- duration			|Number	|线路耗时，分段step中的耗时，单位：分钟																								|高德地图	|

#### 骑行（bicycling）@bicyclingroute

**功能介绍**

用于计算从起点到终点基于自行车的骑行路线规划

**示例**

```js
// 引入uni-map-common公共模块
const UniMap = require('uni-map-common');
// 初始化实例
let uniMap = new UniMap({
	provider: "qqmap", // 指定使用哪家地图供应商
	key: "xxxxxx"
});
// 调用API
let result = await uniMap.route({
	mode: "bicycling",
	from: "40.034852,116.319820",
	to: "39.771075,116.351395"
});
console.log("result", result);
```

**请求参数**

|参数							|类型		|必填	|说明																																																								|兼容性		|
|:--							|:-:		|:-:	|:--																																																								|:-:			|
|mode							|String	|是		| 交通方式 固定为：walking																																													|all			|
|from							|String	|是		| 起点位置坐标，格式：lat,lng																																												|all			|
|to								|String	|是		| 终点位置坐标，格式：lat,lng																																												|all			|
|to_poi						|String	|否		| 终点POI ID，传入后，优先级高于to（坐标）																																				|腾讯地图			|
|alternative_route|Number	|否		| 1：多备选路线中第一条路线<br/>2：多备选路线中前两条路线<br/>3：多备选路线中三条路线<br/>不传则默认返回一条路线方案|高德地图	|

**返回参数**

仅列出result内的参数，其他参数见 [公共返回参数](#publicresult)

**骑行（bicycling）返回参数**

|参数																					|类型		|说明																																																																																																																																																							|兼容性		|
|:--																					|:-:		|:--																																																																																																																																																							|:-:			|
|routes																				|Array	| 路线方案																																																																																																																																																				|all			|
| &emsp;&#124;-- mode													|String	|方案交通方式																																																																																																																																																			|all			|
| &emsp;&#124;-- distance											|Number	|方案总距离，单位：米																																																																																																																																															|all			|
| &emsp;&#124;-- duration											|Number	|方案估算时间，单位：分钟																																																																																																																																													|all			|
| &emsp;&#124;-- direction										|String	|方案整体方向																																																																																																																																																			|腾讯地图	|
| &emsp;&#124;-- polyline											|Array	|方案路线坐标点串																																																																																																																																																	|腾讯地图	|
| &emsp;&#124;-- steps												|Array	|路线步骤																																																																																																																																																					|all			|
| &emsp;&emsp;&#124;-- instruction						|String	|阶段路线描述																																																																																																																																																			|all			|
| &emsp;&emsp;&#124;-- road_name							|String	|阶段路线路名																																																																																																																																																			|all			|
| &emsp;&emsp;&#124;-- dir_desc								|String	|阶段路线方向																																																																																																																																																			|all			|
| &emsp;&emsp;&#124;-- distance								|Number	|阶段路线距离，单位：米																																																																																																																																														|all			|
| &emsp;&emsp;&#124;-- act_desc								|String	|阶段路线末尾动作：如：左转调头																																																																																																																																										|all	|
| &emsp;&emsp;&#124;-- polyline								|String	|分路段坐标点串，格式：lat1,lng1;lat2,lng2																																																																																																																																						|all	|
| &emsp;&emsp;&#124;-- polyline_idx						|Array	|阶段路线坐标点串在方案路线坐标点串的位置																																																																																																																																					|腾讯地图	|
| &emsp;&emsp;&#124;-- duration					|String	|线路耗时，分段step中的耗时																																																																																																																																												|高德地图	|

#### 电动车（ebicycling）@ebicyclingroute

**功能介绍**

用于计算从起点到终点基于电动自行车的骑行路线规划

**示例**

```js
// 引入uni-map-common公共模块
const UniMap = require('uni-map-common');
// 初始化实例
let uniMap = new UniMap({
	provider: "qqmap", // 指定使用哪家地图供应商
	key: "xxxxxx"
});
// 调用API
let result = await uniMap.route({
	mode: "ebicycling",
	from: "40.034852,116.319820",
	to: "39.771075,116.351395"
});
console.log("result", result);
```

**请求参数**

|参数							|类型		|必填	|说明																																																								|兼容性		|
|:--							|:-:		|:-:	|:--																																																								|:-:			|
|mode							|String	|是		| 交通方式 固定为：ebicycling																																													|all			|
|from							|String	|是		| 起点位置坐标，格式：lat,lng																																												|all			|
|to								|String	|是		| 终点位置坐标，格式：lat,lng																																												|all			|
|to_poi						|String	|否		| 终点POI ID，传入后，优先级高于to（坐标）																																				|腾讯地图			|
|alternative_route|Number	|否		| 1：多备选路线中第一条路线<br/>2：多备选路线中前两条路线<br/>3：多备选路线中三条路线<br/>不传则默认返回一条路线方案|高德地图	|

**返回参数**

仅列出result内的参数，其他参数见 [公共返回参数](#publicresult)

**电动车（ebicycling）返回参数**

|参数																					|类型		|说明																																																																																																																																																							|兼容性		|
|:--																					|:-:		|:--																																																																																																																																																							|:-:			|
|routes																				|Array	| 路线方案																																																																																																																																																				|all			|
| &emsp;&#124;-- mode													|String	|方案交通方式																																																																																																																																																			|all			|
| &emsp;&#124;-- distance											|Number	|方案总距离，单位：米																																																																																																																																															|all			|
| &emsp;&#124;-- duration											|Number	|方案估算时间，单位：分钟																																																																																																																																													|all			|
| &emsp;&#124;-- direction										|String	|方案整体方向																																																																																																																																																			|腾讯地图	|
| &emsp;&#124;-- polyline											|Array	|方案路线坐标点串																																																																																																																																																	|腾讯地图	|
| &emsp;&#124;-- steps												|Array	|路线步骤																																																																																																																																																					|all			|
| &emsp;&emsp;&#124;-- instruction						|String	|阶段路线描述																																																																																																																																																			|all			|
| &emsp;&emsp;&#124;-- road_name							|String	|阶段路线路名																																																																																																																																																			|all			|
| &emsp;&emsp;&#124;-- dir_desc								|String	|阶段路线方向																																																																																																																																																			|all			|
| &emsp;&emsp;&#124;-- distance								|Number	|阶段路线距离，单位：米																																																																																																																																														|all			|
| &emsp;&emsp;&#124;-- act_desc								|String	|阶段路线末尾动作：如：左转调头																																																																																																																																										|all			|
| &emsp;&emsp;&#124;-- polyline								|String	|分路段坐标点串，格式：lat1,lng1;lat2,lng2																																																																																																																																				|all			|
| &emsp;&emsp;&#124;-- polyline_idx						|Array	|阶段路线坐标点串在方案路线坐标点串的位置																																																																																																																																					|腾讯地图	|
| &emsp;&emsp;&#124;-- duration								|Number	|线路耗时，分段step中的耗时																																																																																																																																												|高德地图	|
		
#### 公交（transit）@transitroute

**功能介绍**

基于公共汽车、地铁、火车等公共交通工具，计算起到终点的路线换乘方案，同时提供少换乘、少步行等偏好设置，支持一次返回多条方案以供用户选择。

**示例**

```js
// 引入uni-map-common公共模块
const UniMap = require('uni-map-common');
// 初始化实例
let uniMap = new UniMap({
	provider: "qqmap", // 指定使用哪家地图供应商
	key: "xxxxxx"
});
// 调用API
let result = await uniMap.route({
	mode: "transit",
	from: "40.034852,116.319820",
	to: "29.771075,116.351395",
	city1: "010",
	city2: "0792"
});
console.log("result", result);
```

**请求参数**

|参数							|类型		|必填	|说明																																																																																																																																							|兼容性		|
|:--							|:-:		|:-:	|:--																																																																																																																																							|:-:			|
|mode							|String	|是		| 交通方式 固定为：transit																																																																																																																												|all			|
|from							|String	|是		| 起点位置坐标，格式：lat,lng																																																																																																																											|all			|
|to								|String	|是		| 终点位置坐标，格式：lat,lng																																																																																																																											|all			|
|from_poi					|String	|否		| 起点POI ID，传入后，优先级高于from（坐标）																																																																																																																			|all			|
|to_poi						|String	|否		| 终点POI ID，传入后，优先级高于to（坐标）																																																																																																																				|all			|
|policy						|String	|否		| 算路策略 [详情](#transitroutepolicy)																																																																																																																						|all			|
|departure_time		|Number	|否		| 出发时间，用于过滤掉非运营时段的线路，格式为Unix时间戳，默认使用当前时间																																																																																																				|腾讯地图	|
|ad1							|String	|是		| 仅支持adcode																																																																																																																																		|高德地图	|
|ad2							|String	|是		| 仅支持adcode																																																																																																																																		|高德地图	|
|city1						|String	|是		| 起点所在城市（仅支持citycode，相同时代表同城，不同时代表跨城）																																																																																																									|高德地图	|
|city2						|String	|是		| 目的地所在城市（仅支持citycode，相同时代表同城，不同时代表跨城）																																																																																																								|高德地图	|
|alternative_route|Number	|否		|  返回方案条数 最大3条，mode为公交时，最大10条																																																																																																																		|高德地图	|
|multiexport			|Number	|否		| 地铁出入口数量 <br/>0：只返回一个地铁出入口 <br/>1：返回全部地铁出入口																																																																																																					|高德地图	|
|max_trans				|Number	|否		| 最大换乘次数																																																																																																																																		|高德地图	|
|nightflag				|Number	|否		| 考虑夜班车 <br/>0：不考虑夜班车 <br/>1：考虑夜班车																																																																																																															|高德地图	|
|date							|String	|否		| 请求日期 例如:2013-10-28																																																																																																																												|高德地图	|
|time							|String	|否		| 请求时间 例如:9-54																																																																																																																															|高德地图	|

##### 【公交】方式policy值范围@transitroutepolicy

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

仅列出result内的参数，其他参数见 [公共返回参数](#publicresult)

**公交（transit）返回参数**

|参数														|类型		|说明																																																																																						|兼容性		|
|:--														|:-:		|:--																																																																																						|:-:			|
|routes													|Array	| 路线方案																																																																																			|all			|
| &emsp;&#124;-- mode						|String	|方案交通方式																																																																																		|all			|
| &emsp;&#124;-- distance				|Number	|方案总距离，单位：米																																																																														|all			|
| &emsp;&#124;-- duration				|Number	|方案估算时间，单位：分钟																																																																												|all			|
| &emsp;&#124;-- bounds					|Number	|整体路线的外接矩形范围，可在地图显示时使用<br/>通过矩形西南+东北两个端点坐标定义而面<br/>示例：“39.901405,116.334023,39.940289,116.451720”																		|腾讯地图	|
| &emsp;&#124;-- transit_fee		|Number	|各换乘方案总花费，单位：元																																																																											|高德地图	|
| &emsp;&#124;-- steps					|Array	|一条完整公交路线可能会包含多种公共交通工具，<br/>各交通工具的换乘由步行路线串联起来，<br/>形成这样的结构（即 steps数组的结构）：<br/>[步行 , 公交 , 步行 , 公交 , 步行(到终点)]|all			|
| &emsp;&emsp;&#124;-- mode			|String	|本段交通方式，取值：<br/>walking：步行<br/>transit：公共交通工具<br/>不同的方式，返回不同的数据结构，须根据该参数值来判断以哪种结构进行解析，各类具体定义见下文								|all			|
| &emsp;&emsp;&#124;-- 其它字段	|--			|随mode不同有不同字段返回，见下文																																																																								|all			|
		
公交方式包含步行+公共交通混合

以下是交通方式 - 步行 - 响应结果

|参数													|类型		|说明																			|兼容性		|
|:--													|:-:		|:--																			|:-:			|
| mode													|String	| 交通方式，固定值：walking								|all			|
| distance										|Number	|本段step距离，单位：米										|all			|
| duration										|Number	|估算时间，单位：分钟											|all	|
| direction										|String	|方案整体方向描述，如：“南”							|腾讯地图	|
| polyline										|Array	|路线坐标点串，可用于在地图中绘制路线			|腾讯地图	|
|steps												|Array	|分路段导航信息													|all			|
| &emsp;&#124;-- instruction	|String	|阶段路线描述															|all			|
| &emsp;&#124;-- road_name		|String	|阶段路线路名															|all			|
| &emsp;&#124;-- dir_desc			|String	|阶段路线方向															|all			|
| &emsp;&#124;-- distance			|Number	|阶段路线距离，单位：米										|all			|
| &emsp;&#124;-- act_desc			|String	|阶段路线末尾动作：如：左转调头						|all	|
| &emsp;&#124;-- polyline_idx	|Array	|阶段路线坐标点串在方案路线坐标点串的位置	|腾讯地图	|


响应结果 - 交通方式 - 公共交通（transit）
本段为公共交通方式的对象结构，对应steps[]数组下的子对象（“mode”:“transit”）

1. 交通工具 - 公共汽车（“vehicle”：“BUS”）：
本段为公共交通的子对象，vehicle属性值为"BUS"


|参数														|类型		|说明																																																																														|兼容性		|
|:--														|:-:		|:--																																																																														|:-:			|
|mode														|String	| 交通方式，固定值：transit																																																																			|all			|
|lines													|Array	| lines线路信息|all			|
| &emsp;&#124;-- vehicle				|String	|交通工具：公交车（BUS）																																																																				|all			|
| &emsp;&#124;-- id							|String	|线路唯一标识																																																																										|all			|
| &emsp;&#124;-- title					|String	|线路名称																																																																												|all			|
| &emsp;&#124;-- station_count	|Number	|经停站数																																																																												|all			|
| &emsp;&#124;-- distance				|Number	|路线距离，单位：米																																																																							|all			|
| &emsp;&#124;-- duration				|Number	|路线估算时间，单位：分钟																																																																				|all			|
| &emsp;&#124;-- polyline				|Array	|线路坐标点串，可用于在地图中绘制路线																																																														|all			|
| &emsp;&#124;-- start_time			|String	|首班车时间																																																																											|all			|
| &emsp;&#124;-- end_time				|String	|末班车时间																																																																											|all			|
| &emsp;&#124;-- geton					|Object	|上车站																																																																													|all			|
| &emsp;&emsp;&#124;-- id				|String	|站点唯一标识																																																																										|all			|
| &emsp;&emsp;&#124;-- title		|String	|终点站名																																																																												|all			|
| &emsp;&emsp;&#124;-- location	|Object	|站点经纬度坐标																																																																									|all			|
| &emsp;&emsp;&emsp;&#124;-- lat|Number	|纬度																																																																														|all			|
| &emsp;&emsp;&emsp;&#124;-- lng|Number	|经度																																																																														|all			|
| &emsp;&#124;-- getoff					|Object	|下车站																																																																													|all			|
| &emsp;&emsp;&#124;-- id				|String	|站点唯一标识																																																																										|all			|
| &emsp;&emsp;&#124;-- title		|String	|终点站名																																																																												|all			|
| &emsp;&emsp;&#124;-- location	|Object	|站点经纬度坐标																																																																									|all			|
| &emsp;&emsp;&emsp;&#124;-- lat|Number	|纬度																																																																														|all			|
| &emsp;&emsp;&emsp;&#124;-- lng|Number	|经度																																																																														|all			|
| &emsp;&#124;-- stations				|Array	|经停站列表																																																																											|all	|
| &emsp;&emsp;&#124;-- id				|String	|站点唯一标识																																																																										|all	|
| &emsp;&emsp;&#124;-- title		|String	|终点站名																																																																												|all	|
| &emsp;&emsp;&#124;-- location	|Object	|站点经纬度坐标																																																																									|all
| &emsp;&emsp;&emsp;&#124;-- lat|Number	|纬度																																																																														|all	|
| &emsp;&emsp;&emsp;&#124;-- lng|Number	|经度																																																																														|all	|
| &emsp;&#124;-- running_status	|Number	|线路运营状态，取值范围：<br/>300：正常<br/>301：可能错过末班车<br/>302：首班车还未发出<br/>303：停运																														|腾讯地图	|
| &emsp;&#124;-- price					|Number	|预估费用，单位：分，返回-1时为缺少票价信息																																																											|腾讯地图	|
| &emsp;&#124;-- destination		|Object	|公交终点站（用于指示方向）																																																																			|腾讯地图	|
| &emsp;&emsp;&#124;-- id				|String	|站点唯一标识																																																																										|腾讯地图	|
| &emsp;&emsp;&#124;-- title		|String	|终点站名																																																																												|腾讯地图	|
| &emsp;&#124;-- type						|String	|公交类型																																																																												|高德地图	|

2. 交通工具 - 地铁（“vehicle”：“SUBWAY”）：
本段为公共交通的子对象，vehicle属性值为"SUBWAY"

|参数															|类型		|说明																																																	|兼容性		|
|:--															|:-:		|:--																																																	|:-:			|
|mode															|String	| 交通方式，固定值：transit																																						|all			|
|lines														|Array	| lines线路信息																																												|all			|
| &emsp;&#124;-- vehicle					|String	|交通工具：地铁（SUBWAY）																																							|all			|
| &emsp;&#124;-- id								|String	|线路唯一标识																																													|all			|
| &emsp;&#124;-- title						|String	|线路名称																																															|all			|
| &emsp;&#124;-- station_count		|Number	|经停站数																																															|all			|
| &emsp;&#124;-- running_status		|Number	|线路运营状态，取值范围：<br/>300：正常<br/>301：可能错过末班车<br/>302：首班车还未发出<br/>303：停运	|腾讯地图	|
| &emsp;&#124;-- price						|Number	|预估费用，单位：分，返回-1时为缺少票价信息																														|腾讯地图	|
| &emsp;&#124;-- distance					|Number	|路线距离，单位：米																																										|all			|
| &emsp;&#124;-- duration					|Number	|路线估算时间，单位：分钟																																							|all			|
| &emsp;&#124;-- polyline					|Array	|线路坐标点串，可用于在地图中绘制路线																																	|all			|
| &emsp;&#124;-- destination			|Object	|公交终点站（用于指示方向）																																						|腾讯地图	|
| &emsp;&emsp;&#124;-- id					|String	|站点唯一标识																																													|腾讯地图	|
| &emsp;&emsp;&#124;-- title			|String	|终点站名																																															|腾讯地图	|
| &emsp;&#124;-- start_time				|String	|首班车时间																																														|腾讯地图	|
| &emsp;&#124;-- end_time					|String	|末班车时间																																														|腾讯地图	|
| &emsp;&#124;-- geton						|Object	|上车站																																																|all			|
| &emsp;&emsp;&#124;-- id					|String	|站点唯一标识																																													|all			|
| &emsp;&emsp;&#124;-- title			|String	|终点站名																																															|all			|
| &emsp;&emsp;&#124;-- location		|Object	|站点经纬度坐标																																												|all			|
| &emsp;&emsp;&emsp;&#124;-- lat	|Number	|纬度																																																	|all			|
| &emsp;&emsp;&emsp;&#124;-- lng	|Number	|经度																																																	|all			|
| &emsp;&emsp;&#124;-- exit				|Object	|出入口																																																|腾讯地图	|
| &emsp;&emsp;&emsp;&#124;-- id		|String	|唯一标识																																															|腾讯地图	|
| &emsp;&emsp;&emsp;&#124;-- title|String	|出入口名称																																														|腾讯地图	|
| &emsp;&#124;-- getoff						|Object	|下车站																																																|all			|
| &emsp;&emsp;&#124;-- id					|String	|站点唯一标识																																													|all			|
| &emsp;&emsp;&#124;-- title			|String	|终点站名																																															|all			|
| &emsp;&emsp;&#124;-- location		|Object	|站点经纬度坐标																																												|all			|
| &emsp;&emsp;&emsp;&#124;-- lat	|Number	|纬度																																																	|all			|
| &emsp;&emsp;&emsp;&#124;-- lng	|Number	|经度																																																	|all			|
| &emsp;&emsp;&#124;-- exit				|Object	|站点经纬度坐标																																												|腾讯地图	|
| &emsp;&emsp;&emsp;&#124;-- id		|String	|唯一标识																																															|腾讯地图	|
| &emsp;&emsp;&emsp;&#124;-- title|String	|出入口名称																																														|腾讯地图	|
| &emsp;&#124;-- stations					|Array	|经停站列表																																														|all			|
| &emsp;&emsp;&#124;-- id					|String	|站点唯一标识																																													|all			|
| &emsp;&emsp;&#124;-- title			|String	|终点站名																																															|all			|
| &emsp;&emsp;&#124;-- location		|Object	|站点经纬度坐标																																												|all			|
| &emsp;&emsp;&emsp;&#124;-- lat	|Number	|纬度																																																	|all			|
| &emsp;&emsp;&emsp;&#124;-- lng	|Number	|经度																																																	|all			|

3. 交通工具 - 火车（“vehicle”：“RAIL”）：
本段为公共交通的子对象，vehicle属性值为"RAIL"

|参数														|类型		|说明																																																	|兼容性		|
|:--														|:-:		|:--																																																	|:-:			|
|mode														|String	| 交通方式，固定值：transit																																						|all			|
|lines													|Array	| lines线路信息																																												|all			|
| &emsp;&#124;-- vehicle				|String	|交通工具：地铁（RAIL）																																								|all			|
| &emsp;&#124;-- title					|String	|车次名称																																															|all			|
| &emsp;&#124;-- station_count	|Number	|经停站数																																															|腾讯地图	|
| &emsp;&#124;-- running_status	|Number	|线路运营状态，取值范围：<br/>300：正常<br/>301：可能错过末班车<br/>302：首班车还未发出<br/>303：停运	|腾讯地图	|
| &emsp;&#124;-- price					|Number	|预估费用，单位：分，返回-1时为缺少票价信息																														|腾讯地图	|
| &emsp;&#124;-- distance				|Number	|路线距离，单位：米																																										|all			|
| &emsp;&#124;-- duration				|Number	|路线估算时间，单位：分钟																																							|all			|
| &emsp;&#124;-- departure_time	|String	|发车时间																																															|腾讯地图	|
| &emsp;&#124;-- arrival_time		|String	|到达时间																																															|腾讯地图	|
| &emsp;&#124;-- days_count			|Number	|耗时天数，1为当天到达，2为隔天到达，以此类推																													|腾讯地图	|
| &emsp;&#124;-- polyline				|Array	|线路坐标点串，可用于在地图中绘制路线																																	|腾讯地图	|
| &emsp;&#124;-- destination		|Object	|公交终点站（用于指示方向）																																						|腾讯地图	|
| &emsp;&emsp;&#124;-- id				|String	|站点唯一标识																																													|腾讯地图	|
| &emsp;&emsp;&#124;-- title		|String	|终点站名																																															|腾讯地图	|
| &emsp;&#124;-- geton					|Object	|上车站																																																|all			|
| &emsp;&emsp;&#124;-- id				|String	|站点唯一标识																																													|all			|
| &emsp;&emsp;&#124;-- title		|String	|终点站名																																															|all			|
| &emsp;&emsp;&#124;-- location	|Object	|站点经纬度坐标																																												|all			|
| &emsp;&emsp;&emsp;&#124;-- lat|Number	|纬度																																																	|all			|
| &emsp;&emsp;&emsp;&#124;-- lng|Number	|经度																																																	|腾讯地图	|
| &emsp;&emsp;&#124;-- adcode		|String	|上车站点所在城市的adcode																																							|高德地图	|
| &emsp;&emsp;&#124;-- time			|String	|上车点发车时间																																												|高德地图	|
| &emsp;&emsp;&#124;-- start		|Number	|是否始发站，1表示为始发站，0表示非始发站																															|高德地图	|
| &emsp;&#124;-- getoff					|Object	|下车站																																																|all			|
| &emsp;&emsp;&#124;-- id				|String	|站点唯一标识																																													|all			|
| &emsp;&emsp;&#124;-- title		|String	|终点站名																																															|all			|
| &emsp;&emsp;&#124;-- location	|Object	|站点经纬度坐标																																												|all			|
| &emsp;&emsp;&emsp;&#124;-- lat|Number	|纬度																																																	|all			|
| &emsp;&emsp;&emsp;&#124;-- lng|Number	|经度																																																	|all			|
| &emsp;&emsp;&#124;-- adcode		|String	|上车站点所在城市的adcode																																							|高德地图	|
| &emsp;&emsp;&#124;-- time			|String	|上车点发车时间																																												|高德地图	|
| &emsp;&emsp;&#124;-- end			|Number	|是否为终点站，1表示为终点站，0表示非终点站																														|高德地图	|
| &emsp;&#124;-- stations				|Array	|经停站列表																																														|腾讯地图	|
| &emsp;&emsp;&#124;-- id				|String	|站点唯一标识																																													|腾讯地图	|
| &emsp;&emsp;&#124;-- title		|String	|终点站名																																															|腾讯地图	|
| &emsp;&emsp;&#124;-- location	|Object	|站点经纬度坐标																																												|腾讯地图	|
| &emsp;&emsp;&emsp;&#124;-- lat|Number	|纬度																																																	|腾讯地图	|
| &emsp;&emsp;&emsp;&#124;-- lng|Number	|经度																																																	|腾讯地图	|
| &emsp;&#124;-- spaces					|Object	|仓位及价格信息																																												|高德地图	|
| &emsp;&emsp;&#124;-- code			|String	|仓位编码																																															|高德地图	|
| &emsp;&emsp;&#124;-- cost			|String	|仓位费用																																															|高德地图	|

3. 交通工具 - 出租车（“vehicle”：“TAXI”）：
本段为公共交通的子对象，vehicle属性值为"TAXI"（仅高德地图支持"TAXI"）

|参数												|类型		|说明																				|兼容性		|
|:--												|:-:		|:--																				|:-:			|
|mode												|String	| 交通方式，固定值：transit									|高德地图	|
|lines											|Array	| lines线路信息															|高德地图	|
| &emsp;&#124;-- vehicle		|String	|交通工具：地铁（TAXI）											|高德地图	|
| &emsp;&#124;-- price			|String	|预估费用，单位：元，返回-1时为缺少票价信息	|高德地图	|
| &emsp;&#124;-- drivetime	|Number	|打车预计花费时间，单位：分									|高德地图	|
| &emsp;&#124;-- distance		|Number	|打车距离，单位：米													|高德地图	|
| &emsp;&#124;-- polyline		|String	|线路点集合																	|高德地图	|
| &emsp;&#124;-- startpoint	|String	|打车起点经纬度															|高德地图	|
| &emsp;&#124;-- startname	|String	|打车起点名称																|高德地图	|
| &emsp;&#124;-- endpoint		|String	|打车终点经纬度															|高德地图	|
| &emsp;&#124;-- endname		|String	|打车终点名称																|高德地图	|

## 全局错误码@errorcode
	
| 错误模块				|    错误码	|             说明																																				|
|:--							|:--:				|:--																																											|
| uni-map-common	|    110		| 请求来源未被授权																																				|
| uni-map-common	|    111		| 签名验证失败																																						|
| uni-map-common	|    112		| IP未被授权																																							|
| uni-map-common	|    113		| 此功能未被授权																																					|
| uni-map-common	|    120		| 此key每秒请求量已达到上限																																|
| uni-map-common	|    121		| 此key每日调用量已达到上限																																|
| uni-map-common	|    122		| ip访问超限																														|
| uni-map-common	|    123		| 账号访问限制（如余额不足）																														|
| uni-map-common	|    160		| sig参数不支持此请求类型																																	|
| uni-map-common	|    161		| sig参数不支持和非object的POST JSON一起使用																							|
| uni-map-common	|    190		| 无效的KEY																																								|
| uni-map-common	|    199		| 此key未开启webservice功能																																|
| uni-map-common	|    301		| 缺少必要字段key																																					|
| uni-map-common	|    311		| key格式错误																																							|
| uni-map-common	|    300		| 缺少必要字段																																						|
| uni-map-common	|    306		| 缺少参数																																								|
| uni-map-common	|    311		| 服务不支持https请求																																						|
| uni-map-common	|320				|参数数据类型错误																																					|
| uni-map-common	|330				|参数长度错误																																							|
| uni-map-common	|351				|存在不共存的参数																																					|
| uni-map-common	|324				|get和post中的同一参数值不相同																														|
| uni-map-common	|326				|起终点距离过近																																						|
| uni-map-common	|327				|附近无公交站																																							|
| uni-map-common	|328				|无可达公交路线																																						|
| uni-map-common	|329				|无可达火车路线																																						|
| uni-map-common	|331				|查询条件过长																																							|
| uni-map-common	|332				|途径点个数超过限制																																				|
| uni-map-common	|333				|存在无法吸附的坐标点																																			|
| uni-map-common	|335				|不支持该城市的公交查询																																		|
| uni-map-common	|341				|缺少keyword（关键词）																																		|
| uni-map-common	|344				|附近无火车站（公交）																																			|
| uni-map-common	|347				|查询无结果																																								|
| uni-map-common	|348				|参数错误																																									|
| uni-map-common	|364				|是否扩大搜索参数只能为0或1																																|
| uni-map-common	|365				|纬度不能超过±90																																					|
| uni-map-common	|366				|经度不能超过±180																																					|
| uni-map-common	|373				|起终点距离超长																																						|
| uni-map-common	|374				|起终点坐标错误																																						|
| uni-map-common	|375				|局域网IP无法定位																																					|
| uni-map-common	|377				|提供的起终点无法规划出导航线路																														|
| uni-map-common	|378				|提供的起终点无法规划出步行线路																														|
| uni-map-common	|379				|提供的起终点无法规划出公交线路																														|
| uni-map-common	|380				|坐标类型必须在有坐标的情况下使用																													|
| uni-map-common	|382				|IP无法定位																																								|
| uni-map-common	|384				|提供的起终点无法规划出骑行线路																														|
| uni-map-common	|387				|没有对应的POI																																						|
| uni-map-common	|393				|没有符合条件的数据																																				|
| uni-map-common	|394				|错误的查询条件																																						|
| uni-map-common	|395				|传入参数不合法																																						|
| uni-map-common	|396				|最多支持200个坐标点，且起终点数目乘积最多为625（距离矩阵）																|
| uni-map-common	|397				|一对多最多支持200个坐标点，多对多最多支持25个坐标点且起终点数目乘积最多为625（距离矩阵）	|
| uni-map-common	|500				|服务响应失败																																							|

## 常见问题

### 使用uni-map-common后，我还需要购买5万元的地图商业授权费用吗?

答：使用地图服务需要商业授权，可联系DCloud申请折扣优惠。[详情参考 商业授权相关说明](https://uniapp.dcloud.net.cn/tutorial/app-geolocation.html#lic)