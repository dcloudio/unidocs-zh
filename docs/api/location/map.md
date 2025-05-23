## uni.createMapContext(mapId, componentInstance?)
创建并返回 map 上下文 ``mapContext`` 对象。在自定义组件下，第二个参数传入组件实例this，以操作组件内 ``<map>`` 组件。

**注意：uni.createMapContext(mapId, this)**
- app-nvue 平台 2.2.5+ 支持 uni.createMapContext(mapId, this)
- app-nvue 平台 2.2.5- 需要同时设置组件属性id和ref ``<map id="map1" ref="map1"></map>``，或者直接使用 ref，例如 ``this.$refs.map1``


**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|元服务|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|1.9.0+|√|√|√|

<!-- UNIAPPAPIJSON.createMapContext.compatibility -->

## mapContext

``mapContext`` 通过 mapId 跟一个 ``<map>`` 组件绑定，通过它可以操作对应的 ``<map>`` 组件。

**mapContext 对象的方法列表**

|方法|参数|说明|平台差异说明|
|:-|:-|:-|:-|
|getCenterLocation|OBJECT|获取当前地图中心的经纬度，返回的是 gcj02 坐标系，可以用于 [uni.openLocation](/api/location/location.md#getlocation)||
|moveToLocation|OBJECT|将地图中心移动到当前定位点，需要配合map组件的show-location使用||
|translateMarker|OBJECT|平移marker，带动画|app-nvue 2.1.5+、H5、微信小程序带动画、抖音、支付宝、京东、百度、QQ小程序|
|includePoints|OBJECT|缩放视野展示所有经纬度|app-nvue 2.1.5+、微信、抖音、支付宝、京东、百度、快手、QQ小程序|
|getRegion|OBJECT|获取当前地图的视野范围||
|getRotate|OBJECT|获取当前地图的旋转角|微信、抖音、支付宝、京东、QQ小程序|
|getScale|OBJECT|获取当前地图的缩放级别||
|getSkew|OBJECT|获取当前地图的倾斜角|微信、抖音、支付宝、京东、QQ小程序|
|addCustomLayer|OBJECT|添加个性化图层|微信小程序|
|addGroundOverlay|OBJECT|创建自定义图片图层，图片会随着地图缩放而缩放|App-nvue 3.1.0+，微信、抖音小程序|
|addMarkers |OBJECT|添加 marker|App-nvue 3.1.0+，微信小程序|
|fromScreenLocation|OBJECT|获取屏幕上的点对应的经纬度，坐标原点为地图左上角|微信小程序|
|initMarkerCluster|OBJECT|初始化点聚合的配置，未调用时采用默认配置|App-nvue 3.1.0+，微信小程序|
|moveAlong|OBJECT|沿指定路径移动 marker，用于轨迹回放等场景。动画完成时触发回调事件，若动画进行中，对同一 marker 再次调用 moveAlong 方法，前一次的动画将被打断。支持 android，不支持 autoRotate 属性设置，默认为 ture|App-nvue 3.1.0+，微信、抖音小程序|
|openMapApp|OBJECT|拉起地图APP选择导航。|App-nvue 3.1.0+，微信、抖音、快手小程序|
|removeCustomLayer|OBJECT|移除个性化图层 |微信小程序|
|removeGroundOverlay|OBJECT|移除自定义图片图层|App-nvue 3.1.0+，微信小程序|
|removeMarkers|OBJECT|移除 marker。|App-nvue 3.1.0+，微信小程序|
|setCenterOffset|OBJECT|设置地图中心点偏移，向后向下为增长，屏幕比例范围(0.25~0.75)，默认偏移为[0.5, 0.5]|微信、抖音小程序|
|toScreenLocation|OBJECT|获取经纬度对应的屏幕坐标，坐标原点为地图左上角。|微信小程序|
|updateGroundOverlay|OBJECT|更新自定义图片图层。|App-nvue 3.1.0+，微信、抖音小程序|
|on|Method|监听地图事件。|App-nvue 3.1.0+，微信小程序|
|$getAppMap||获取原生地图对象 [plus.maps.Map](https://www.html5plus.org/doc/zh_cn/maps.html#plus.maps.Map)|App-nvue 1.9.3|

`$getAppMap()` 注意事项：

- 在页面中，必须在 `onReady` 中调用。
- 在组件中，必须在 `mounted` 中调用。
- nvue没有`$getAppMap()`，请使用`createMapContext`
- `uni-app`中使用原生地图无需提供占位div，得到`$getAppMap()`后直接js使用即可。
- `openMapApp` iOS 暂不支持，后续补充


**getCenterLocation 的 OBJECT 参数列表**

|参数|类型|必填|说明|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调函数 ，res = { longitude: "经度", latitude: "纬度"}|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|


**moveToLocation 的 OBJECT 参数列表**

|参数			|类型			|必填	|说明																																	|
|:-				|:-				|:-		|:-																																		|
|longitude|Number		|否		|经度 ，App 2.6.8、H5、京东小程序、仅微信小程序 2.8.0+ 支持																			|
|latitude	|Number		|否		|纬度 ，App 2.6.8、H5、京东小程序、仅微信小程序 2.8.0+ 支持																			|
|success	|Function	|否		|接口调用成功的回调函数 ，res = { longitude: "经度", latitude: "纬度"}|
|fail			|Function	|否		|接口调用失败的回调函数																								|
|complete	|Function	|否		|接口调用结束的回调函数（调用成功、失败都会执行）											|


**translateMarker 的 OBJECT 参数列表**

|参数|类型|必填|说明|
|:-|:-|:-|:-|
|markerId|Number|是|指定 marker|
|destination|Object|是|指定 marker 移动到的目标点|
|autoRotate|Boolean|否|移动过程中是否自动旋转 marker|
|rotate|Number|否|marker 的旋转角度|
|moveWithRotate|Boolean|否|平移和旋转同时进行，默认值false（仅微信小程序2.13.0支持）|
|duration|Number|否|动画持续时长，默认值1000ms，平移与旋转分别计算|
|animationEnd|Function|否|动画结束回调函数|
|success|Function|否|接口调用成功的回调函数|
|fail|Function|否|接口调用失败的回调函数|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|

**includePoints 的 OBJECT 参数列表**

|参数|类型|必填|说明|
|:-|:-|:-|:-|
|points|Array|是|要显示在可视区域内的坐标点列表，[{latitude, longitude}]|
|padding|Array|否|坐标点形成的矩形边缘到地图边缘的距离，单位像素。格式为[上，右，下，左]，安卓上只能识别数组第一项，上下左右的padding一致。开发者工具暂不支持padding参数。|
|success|Function|否|接口调用成功的回调函数（支付宝小程序不支持）|
|fail|Function|否|接口调用失败的回调函数（支付宝小程序不支持）|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）（支付宝小程序不支持）|

**getRegion 的 OBJECT 参数列表**

|参数|类型|必填|说明|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调函数，res = {southwest, northeast}，西南角与东北角的经纬度|
|fail|Function|否|接口调用失败的回调函数（支付宝小程序不支持）|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）（支付宝小程序不支持）|


**getRotate 的 OBJECT 参数列表**

|参数|类型|必填|说明|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调函数，res = {rotate}，旋转角|
|fail|Function|否|接口调用失败的回调函数（支付宝小程序不支持）|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）（支付宝小程序不支持）|


**getScale 的 OBJECT 参数列表**

|参数|类型|必填|说明|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调函数，res = {scale}，缩放值|
|fail|Function|否|接口调用失败的回调函数（支付宝小程序不支持）|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）（支付宝小程序不支持）|


**getSkew 的 OBJECT 参数列表**

|参数|类型|必填|说明|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调函数，res = {skew}，倾斜角|
|fail|Function|否|接口调用失败的回调函数（支付宝小程序不支持）|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）（支付宝小程序不支持）|


**addCustomLayer 的 OBJECT 参数列表**

|属性		|类型		|默认值	|必填	|说明												|
|:-|:-|:-|:-|:-|
|layerId	|string		|		|是		|个性化图层id										|
|success	|function	|		|否		|接口调用成功的回调函数								|
|fail		|function	|		|否		|接口调用失败的回调函数								|
|complete	|function	|		|否		|接口调用结束的回调函数（调用成功、失败都会执行）	|


**addGroundOverlay 的 OBJECT 参数列表**

|属性		|类型		|默认值	|必填	|说明												|
|:-|:-|:-|:-|:-|
|id			|String		|		|是		|图片图层 id										|
|src		|String		|		|是		|图片路径，支持网络图片、临时路径、代码包路径		|
|bounds		|Object		|		|是		|图片覆盖的经纬度范围								|
|visible	|Boolean	|true	|否		|是否可见											|
|zIndex		|Number		|1		|否		|图层绘制顺序										|
|opacity	|Number		|1		|否		|图层透明度											|
|success	|function	|		|否		|接口调用成功的回调函数								|
|fail		|function	|		|否		|接口调用失败的回调函数								|
|complete	|function	|		|否		|接口调用结束的回调函数（调用成功、失败都会执行）	|

`object.bounds` 的结构

|属性		|类型	|默认值	|必填	|说明			|
|:-|:-|:-|:-|:-|
|southwest	|Object	|		|是		|西南角经纬度	|
|northeast	|Object	|		|是		|东北角经纬度	|

`southwest` 的结构

|属性		|类型	|默认值	|必填	|说明	|
|:-|:-|:-|:-|:-|
|longitude	|number	|		|是		|经度	|
|latitude	|number	|		|是		|纬度	|

`northeast` 的结构

|属性		|类型	|默认值	|必填	|说明	|
|:-|:-|:-|:-|:-|
|longitude	|number	|		|是		|经度	|
|latitude	|number	|		|是		|纬度	|


**addMarkers 的 OBJECT 参数列表**

|属性		|类型		|默认值	|必填	|说明												|
|:-|:-|:-|:-|:-|
|markers	|Array		|		|是		|同传入 map 组件的 marker 属性						|
|clear		|boolean	|false	|否		|是否先清空地图上所有 marker						|
|success	|function	|		|否		|接口调用成功的回调函数								|
|fail		|function	|		|否		|接口调用失败的回调函数								|
|complete	|function	|		|否		|接口调用结束的回调函数（调用成功、失败都会执行）	|


**removeMarkers 的 OBJECT 参数列表**

|属性		|类型		|默认值	|必填	|说明												|
|:-|:-|:-|:-|:-|
|markerIds	|Array		|		|是		|要被删除的marker的id属性组成的数组						|
|success	|function	|		|否		|接口调用成功的回调函数								|
|fail		|function	|		|否		|接口调用失败的回调函数								|
|complete	|function	|		|否		|接口调用结束的回调函数（调用成功、失败都会执行）	|


**moveAlong 的 OBJECT 参数列表**

|属性				|类型			|默认值	|必填	|说明																							|
|:-					|:-				|:-			|:-		|:-																								|
|markerId		|Number		|				|是		|指定 marker																				|
|path				|Array		|				|是		|移动路径的坐标串，坐标点格式 {longitude, latitude}	|
|autoRotate	|boolean	|true		|否		|根据路径方向自动改变 marker 的旋转角度							|
|duration		|number		|				|是		|平滑移动的时间																		|
|success		|function	|				|否		|接口调用成功的回调函数															|
|fail				|function	|				|否		|接口调用失败的回调函数															|
|complete		|function	|				|否		|接口调用结束的回调函数（调用成功、失败都会执行）			|


**openMapApp 的 OBJECT 参数列表**

|属性				|类型			|默认值	|必填	|说明																							|
|:-					|:-				|:-			|:-		|:-																							|
|longitude		|Number		|				|是		|目的地经度																			|
|latitude				|Number		|				|是		|目的地纬度	|
|destination	|String	|		    |是		|目的地名称							|
|success		|function	|				|否		|接口调用成功的回调函数															|
|fail				|function	|				|否		|接口调用失败的回调函数															|
|complete		|function	|				|否		|接口调用结束的回调函数（调用成功、失败都会执行）			|


**setLocMarkerIcon 的 OBJECT 参数列表**@setLocMarkerIcon

|属性			|类型			|默认值	|必填	|说明																							|
|:-          |:-        |:-      |:-    |:-                                         |
|iconPath	|string		|				|否		|图标路径，支持网络路径、本地路径、代码包路径			|
|success	|function	|				|否		|接口调用成功的回调函数														|
|fail			|function	|				|否		|接口调用失败的回调函数														|
|complete	|function	|				|否		|接口调用结束的回调函数（调用成功、失败都会执行）	|

App nvue 3.6.9+ 支持

**mapContext （App平台地图服务商差异）**

|属性								|说明																																	|高德是否支持									|google地图是否支持	|
|:----							|:----																																|:----												|:----							|
|setLocMarkerIcon		|设置定位点图标，支持网络路径、本地路径、代码包路径												|已支持												|不支持							|
|moveAlong					|沿指定路径移动 marker，用于轨迹回放等场景																|已支持(不支持autoRotate属性)		|已支持							|
|addCustomLayer			|添加个性化图层																												|不支持												|不支持							|
|removeVisualLayer	|移除可视化图层																												|不支持												|不支持							|
|fromScreenLocation	|获取屏幕上的点对应的经纬度，坐标原点为地图左上角													|不支持												|不支持							|
|removeCustomLayer	|移除个性化图层																												|不支持												|不支持							|
|setCenterOffset		|设置地图中心点偏移，向后向下为增长，屏幕比例范围(0.25~0.75)								|不支持												|不支持							|
|toScreenLocation		|获取经纬度对应的屏幕坐标，坐标原点为地图左上角。													|不支持												|不支持							|


**MapContext.on()** (app-nvue、微信小程序支持)

`markerClusterCreate`
缩放或拖动导致新的聚合簇产生时触发，仅返回新创建的聚合簇信息。

返回参数

|参数		|类型								|说明		|
|:-|:-|:-|
|clusters	|Array&amp;lt;ClusterInfo&amp;gt;	|聚合簇数据	|


`markerClusterClick`
聚合簇的点击事件。

返回参数

|参数	|类型		|说明	|
|:-|:-|:-|
|cluster|ClusterInfo|聚合簇	|

`ClusterInfo` 结构

|参数		|类型						|说明						|
|:-|:-|:-|
|clusterId	|Number						|聚合簇的 id				|
|center		|LatLng						|聚合簇的坐标				|
|markerIds	|Array&amp;lt;Number&amp;gt;|该聚合簇内的点标记数据数组	|

`initMarkerCluster(OBJECT)` 结构

|属性								|类型			|默认值	|必填	|说明																																|
|:-|:-|:-|:-|:-|
|enableDefaultStyle	|boolean	|true		|否		|启用默认的聚合样式																									|
|zoomOnClick				|boolean	|true		|否		|点击已经聚合的标记点时是否实现聚合分离															|
|gridSize						|boolean	|60			|否		|聚合算法的可聚合距离，即距离小于该值的点会聚合至一起，以像素为单位	|
|success						|function	|				|否		|接口调用成功的回调函数																							|
|fail								|function	|				|否		|接口调用失败的回调函数																							|
|complete						|function	|				|否		|接口调用结束的回调函数（调用成功、失败都会执行）										|


示例代码

```js
  MapContext.on('markerClusterCreate', (res) => {})
  MapContext.on('markerClusterClick', (res) => {})
```


地图聚合 API 示例(nvue)

缩小地图可看到多个 marker 合并为 1 个并显示聚合数量，放大地图后恢复

```html
<template>
  <view class="content">
    <map id="map" class="map" :show-location="true" :latitude="latitude" :longitude="longitude"></map>
  </view>
</template>

<script>
  const img = '/static/logo.png';

  export default {
    data() {
      return {
        latitude: 23.099994,
        longitude: 113.324520,
      }
    },
    onReady() {
      this._mapContext = uni.createMapContext("map", this);

      // 仅调用初始化，才会触发 on.("markerClusterCreate", (e) => {})
      this._mapContext.initMarkerCluster({
        enableDefaultStyle: false,
        zoomOnClick: true,
        gridSize: 60,
        complete(res) {
          console.log('initMarkerCluster', res)
        }
      });

      this._mapContext.on("markerClusterCreate", (e) => {
        console.log("markerClusterCreate", e);
      });

      this.addMarkers();
    },
    methods: {
      addMarkers() {
        const positions = [
          {
            latitude: 23.099994,
            longitude: 113.324520,
          }, {
            latitude: 23.099994,
            longitude: 113.322520,
          }, {
            latitude: 23.099994,
            longitude: 113.326520,
          }, {
            latitude: 23.096994,
            longitude: 113.329520,
          }
        ]

        const markers = []

        positions.forEach((p, i) => {
          console.log(i)
          markers.push(
            Object.assign({},{
              id: i + 1,
              iconPath: img,
              width: 50,
              height: 50,
              joinCluster: true, // 指定了该参数才会参与聚合
              label: {
                  width: 50,
                  height: 30,
                  borderWidth: 1,
                  borderRadius: 10,
                  bgColor: '#ffffff',
                  content: `label ${i + 1}`
              }
            },p)
          )
        })
        this._mapContext.addMarkers({
            markers,
            clear: false,
            complete(res) {
              console.log('addMarkers', res)
            }
        })
      }
    }
  }
</script>

<style>
  .content {
    flex: 1;
  }

  .map {
    flex: 1;
  }
</style>
```


## mapSearch 模块(仅app-nvue支持，Google地图不支持)

### reverseGeocode(Object,callback);@reverseGeocode
> 反向地理编码

#### Object
属性|类型 |默认值|必填|说明
:--|:--|:--|:--|:--|
point|Object| |是|{latitude: 纬度, longitude: 经度}

#### callback 返回 Object 参数说明
属性|类型 |说明
:--|:--|:--|
type|String|"success" 表示成功， "fail" 表示失败
code|Number| 成功返回 0,失败返回相应 code 码
message|String|失败描述
address|String|查询后地址 （成功时返回）

### poiSearchNearBy（Object,callback);@poiSearchNearBy
> 周边检索

#### Object
属性|类型 |默认值|必填|说明
:--|:--|:--|:--|:--|
point|Object| |是|检索的中心点坐标 {latitude: 纬度, longitude: 经度}
key|String| | 是|搜索关键字
radius|Number|3000|否|检索的半径，单位为米
index|Number|1|否|要获取检索结果的页号索引
offset|Number|10|否|设置每页条目数（默认每页10条数据）。HBuilder 3.2.13+

#### callback 返回 Object 参数说明
属性|类型 |说明
:--|:--|:--|
type|String|"success" 表示成功， "fail" 表示失败
code|Number| 成功返回 0,失败返回相应 code 码
message|String|失败描述
totalNumber|Number|返回的POI数目
currentNumber|Number|当前页POI数目
pageNumber|Number|页数
pageIndex|Number|当前页号索引
poiList|Array.&lt;poiObject&gt;|POI信息数组

#### poiObject
属性|类型 |说明
:--|:--|:--|
location|Object|{latitude: 纬度, longitude: 经度}
name|String|名称
type|String|类型
distance|Number|距离（单位米）
address|String|地址

### poiKeywordsSearch（Object,callback);@poiKeywordsSearch
> 关键字检索

#### Object
属性|类型 |默认值|必填|说明
:--|:--|:--|:--|:--|
key|String| | 是|搜索关键字
index|Number|1|否|要获取检索结果的页号索引（每页10条数据）
city|String| |否|查询城市，可选值：cityname（中文或中文全拼）、citycode、adcode.[code 参考表](https://lbs.amap.com/api/webservice/download)
types|String| |否| 类型，多个类型用“\|”分割 可选值:文本分类、分类代码 [code 参考表](https://lbs.amap.com/api/webservice/download)
point|Object| |否|设置后，则返回结果会按照距离此点的距离来排序 {latitude: 纬度, longitude: 经度}
sortrule|Number|0|否|排序规则, 0-距离排序；1-综合排序, 默认0
offset|Number|10|否|设置每页条目数（默认每页10条数据）。HBuilder 3.2.13+
cityLimit| Boolean | false | 否 | 强制城市限制功能 默认 false，例如：在上海搜索天安门，如果citylimit为true，将不返回北京的天安门相关的POI。HBuilder 3.2.13+

#### callback 返回 Object 参数说明
属性|类型 |说明
:--|:--|:--|
type|String|"success" 表示成功， "fail" 表示失败
code|Number| 成功返回 0,失败返回相应 code 码
message|String|失败描述
totalNumber|Number|返回的POI数目
currentNumber|Number|当前页POI数目
pageNumber|Number|页数
pageIndex|Number|当前页号索引
poiList|Array.&lt;poiObject&gt;|POI信息数组



**Tips**

- App端使用map，nvue比vue更强大，且没有层级问题。
- App端vue页面默认为高德地图，也可以选择百度地图。但app-nvue只有高德地图，没有百度地图。以及地图选择api（mapSearch），只支持高德地图。
- H5 端获取定位信息，需要部署在 **https** 服务上，本地预览（localhost）仍然可以使用 http 协议。
- 无 GPS 模块的 PC 设备使用 Chrome 浏览器的时候，位置信息是连接谷歌服务器获取的，国内用户可能获取位置信息失败。
- App 端使用地图组件需要向高德或百度等三方服务商申请SDK资质，获取AppKey，打包时需要在manifest的SDK配置中填写Appkey。在manifest可视化界面有详细申请指南，详见：[https://ask.dcloud.net.cn/article/29](https://ask.dcloud.net.cn/article/29)
- H5 端使用地图和定位相关，需要在 [manifest.json](https://uniapp.dcloud.io/collocation/manifest.html#h5sdkconfig) 内配置腾讯或谷歌等三方地图服务商申请的秘钥（key）。
- ``<map>`` 组件默认为国测局坐标，调用 ``uni.getLocation`` 返回结果传递给 ``<map>`` 组件时，需指定 type 为 gcj02。

## 三方定位和地图服务收费说明

使用三方定位或者地图服务，需向服务提供商（如：高德地图、百度地图、腾讯地图、谷歌地图）申请商业授权和缴纳费用（5万/年）。

DCloud为开发者争取了福利，可优惠获取高德、腾讯的商业授权。如有需求请发邮件到`bd@dcloud.io`（注明你的公司名称、应用介绍、HBuilder账户）；你也可以直接通过`uni-im`发起在线咨询，在线咨询地址：[DCloud地图服务专员](https://im.dcloud.net.cn/#/?user_id=b9839630-a479-11ea-b772-0f6ad6cf835c)。

详见：[https://uniapp.dcloud.net.cn/tutorial/app-geolocation.html#lic](https://uniapp.dcloud.net.cn/tutorial/app-geolocation.html#lic)
