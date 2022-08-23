### uni.createMapContext(mapId,this)
创建并返回 map 上下文 ``mapContext`` 对象。在自定义组件下，第二个参数传入组件实例this，以操作组件内 ``<map>`` 组件。
Creates and returns a map context ``mapContext`` object. Under the custom component, the second parameter is passed in the component instance this to operate inside the component ``<map> `` component.

**注意：uni.createMapContext(mapId, this)**
**Note: uni.createMapContext(mapId, this)**
- app-nvue 平台 2.2.5+ 支持 uni.createMapContext(mapId, this)
- app-nvue platform 2.2.5+ supports uni.createMapContext(mapId, this)
- app-nvue 平台 2.2.5- 需要同时设置组件属性id和ref ``<map id="map1" ref="map1"></map>``，或者直接使用 ref，例如 ``this.$refs.map1``
- app-nvue platform 2.2.5- You need to set both component property id and ref ``<map id="map1" ref="map1"></map> ``, or use ref directly, e.g. ``this.$refs.map1``


**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Kaishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|√|1.9.0+|x|√|

mapContext

``mapContext`` 通过 mapId 跟一个 ``<map>`` 组件绑定，通过它可以操作对应的 ``<map>`` 组件。
``mapContext`` by mapId followed by a ``<map> `` Component binding, through which you can operate the corresponding ``<map> `` component.

**mapContext 对象的方法列表**
**List of methods of the mapContext object**

|方法|参数|说明|平台差异说明|最低版本|
|Method|Parameters|Description|Platform Difference Description|Minimum Version|
|:-|:-|:-|:-|:-|
|getCenterLocation|OBJECT|获取当前地图中心的经纬度，返回的是 gcj02 坐标系，可以用于 [uni.openLocation](api/location/location?id=getlocation)|||
|getCenterLocation|OBJECT|Gets the latitude and longitude of the current map center, and returns the gcj02 coordinate system, which can be used for [uni.openLocation](api/location/location?id=getlocation)|||
|moveToLocation|OBJECT|将地图中心移动到当前定位点，需要配合map组件的show-location使用|||
|moveToLocation|OBJECT|Move the center of the map to the current positioning point, which needs to be used with the show-location of the map component|||
|translateMarker|OBJECT|平移marker，带动画||app-nvue 2.1.5+、微信小程序带动画、京东小程序|
|translateMarker|OBJECT|Translation marker with animation||app-nvue 2.1.5+, WeChat applet with animation, Jingdong applet|
|includePoints|OBJECT|缩放视野展示所有经纬度||app-nvue 2.1.5+、微信小程序、京东小程序|
|includePoints|OBJECT|Zoomed view to display all latitude and longitude||app-nvue 2.1.5+, WeChat applet, Jingdong applet|
|getRegion|OBJECT|获取当前地图的视野范围|||
|getRegion|OBJECT|Get the field of view of the current map|||
|getScale|OBJECT|获取当前地图的缩放级别|||
|getScale|OBJECT|Get the zoom level of the current map|||
|addCustomLayer|OBJECT|添加个性化图层||微信小程序|
|addCustomLayer|OBJECT|Add a personalized layer||WeChat applet|
|addGroundOverlay|OBJECT|创建自定义图片图层，图片会随着地图缩放而缩放||App-nvue 3.1.0+，微信小程序|
|addGroundOverlay|OBJECT|Create a custom image layer, the image will zoom with the map zoom||App-nvue 3.1.0+, WeChat applet|
|addMarkers |OBJECT|添加 marker||App-nvue 3.1.0+，微信小程序|
|addMarkers |OBJECT|Add marker||App-nvue 3.1.0+, WeChat applet|
|fromScreenLocation|OBJECT|获取屏幕上的点对应的经纬度，坐标原点为地图左上角||微信小程序|
|fromScreenLocation|OBJECT|Get the latitude and longitude corresponding to the point on the screen, the origin of the coordinates is the upper left corner of the map||WeChat applet|
|initMarkerCluster|OBJECT|初始化点聚合的配置，未调用时采用默认配置||App-nvue 3.1.0+，微信小程序|
|initMarkerCluster|OBJECT|The configuration of initialization point aggregation, the default configuration is used when it is not called||App-nvue 3.1.0+, WeChat applet|
|moveAlong|OBJECT|沿指定路径移动 marker，用于轨迹回放等场景。动画完成时触发回调事件，若动画进行中，对同一 marker 再次调用 moveAlong 方法，前一次的动画将被打断。|支持 android 不支持autoRotate属性设置 默认ture|App-nvue 3.1.0+，微信小程序|
|moveAlong|OBJECT|Move the marker along the specified path, used in scenarios such as track playback. The callback event is triggered when the animation is completed. If the animation is in progress, if the moveAlong method is called again on the same marker, the previous animation will be interrupted. |Support android does not support autoRotate attribute setting Default ture|App-nvue 3.1.0+, WeChat applet|
|openMapApp|OBJECT|拉起地图APP选择导航。||App-nvue 3.1.0+，微信小程序|
|openMapApp|OBJECT|Pull up the map app and select navigation. ||App-nvue 3.1.0+, WeChat applet|
|removeCustomLayer|OBJECT|移除个性化图层 ||微信小程序|
|removeCustomLayer|OBJECT|Remove a personalized layer ||WeChat applet|
|removeGroundOverlay|OBJECT|移除自定义图片图层||App-nvue 3.1.0+，微信小程序|
|removeGroundOverlay|OBJECT|Remove custom image layer||App-nvue 3.1.0+, WeChat applet|
|removeMarkers|OBJECT|移除 marker。||App-nvue 3.1.0+，微信小程序|
|removeMarkers|OBJECT|Remove markers. ||App-nvue 3.1.0+, WeChat applet|
|setCenterOffset|OBJECT|设置地图中心点偏移，向后向下为增长，屏幕比例范围(0.25~0.75)，默认偏移为[0.5, 0.5]||微信小程序|
|setCenterOffset|OBJECT|Set the offset of the center point of the map. It increases backwards and downwards. The screen scale range is (0.25~0.75), and the default offset is [0.5, 0.5]||WeChat applet|
|toScreenLocation|OBJECT|获取经纬度对应的屏幕坐标，坐标原点为地图左上角。||微信小程序|
|toScreenLocation|OBJECT| Gets the screen coordinates corresponding to the latitude and longitude. The origin of the coordinates is the upper left corner of the map. ||WeChat Mini Program|
|updateGroundOverlay|OBJECT|更新自定义图片图层。||App-nvue 3.1.0+，微信小程序|
|updateGroundOverlay|OBJECT|Update a custom image layer. ||App-nvue 3.1.0+, WeChat applet|
|on|Method|监听地图事件。||App-nvue 3.1.0+，微信小程序|
|on|Method|Listen to map events. ||App-nvue 3.1.0+, WeChat applet|
|$getAppMap||获取原生地图对象 [plus.maps.Map](https://www.html5plus.org/doc/zh_cn/maps.html#plus.maps.Map)|app-vue|1.9.3|
|$getAppMap||Get the native map object [plus.maps.Map](https://www.html5plus.org/doc/zh_cn/maps.html#plus.maps.Map)|app-vue|1.9.3|

`$getAppMap()` 注意事项：
`$getAppMap()` Notes:

- 在页面中，必须在 `onReady` 中调用。
- In the page, must be called in `onReady`.
- 在组件中，必须在 `mounted` 中调用。
- In a component, must be called in `mounted`.
- nvue没有`$getAppMap()`，请使用`createMapContext`
- nvue doesn't have `$getAppMap()`, use `createMapContext`
- `uni-app`中使用原生地图无需提供占位div，得到`$getAppMap()`后直接js使用即可。
- There is no need to provide a placeholder div to use native maps in `uni-app`, and you can use js directly after getting `$getAppMap()`.
- `openMapApp` iOS 暂不支持，后续补充
- `openMapApp` iOS is not currently supported, and will be added later


**getCenterLocation 的 OBJECT 参数列表**
**List of OBJECT parameters for getCenterLocation**

|参数|类型|必填|说明|
|Parameter|Type|Required|Description|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调函数 ，res = { longitude: "经度", latitude: "纬度"}|
|success|Function|No|Callback function for successful interface call, res = { longitude: "longitude", latitude: "latitude"}|
|fail|Function|否|接口调用失败的回调函数|
|fail|Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function|No|The callback function of the end of the interface call (the call will be executed if the call succeeds or fails)|


**moveToLocation 的 OBJECT 参数列表**
**moveToLocation's OBJECT parameter list**

|参数			|类型			|必填	|说明																																	|
|Parameter |Type |Required |Description |
|:-				|:-				|:-		|:-																																		|
|longitude|Number		|否		|经度 ，App 2.6.8、H5、京东小程序、仅微信小程序 2.8.0+ 支持																			|
|longitude|Number |No |Longitude , App 2.6.8, H5, Jingdong applet, only WeChat applet 2.8.0+ support |
|latitude	|Number		|否		|纬度 ，App 2.6.8、H5、京东小程序、仅微信小程序 2.8.0+ 支持																			|
|latitude |Number |No |Latitude , App 2.6.8, H5, Jingdong applet, only WeChat applet 2.8.0+ support |
|success	|Function	|否		|接口调用成功的回调函数 ，res = { longitude: "经度", latitude: "纬度"}|
|success |Function |No |Callback function for successful interface call, res = { longitude: "longitude", latitude: "latitude"}|
|fail			|Function	|否		|接口调用失败的回调函数																								|
|fail |Function |No |Callback function for interface call failure |
|complete	|Function	|否		|接口调用结束的回调函数（调用成功、失败都会执行）											|
|complete |Function |No |The callback function for the end of the interface call (the call will be executed if the call succeeds or fails) |


**translateMarker 的 OBJECT 参数列表**
**List of OBJECT parameters for translateMarker**

|参数|类型|必填|说明|
|Parameter|Type|Required|Description|
|:-|:-|:-|:-|
|markerId|Number|是|指定 marker|
|markerId|Number| Yes |specified marker|
|destination|Object|是|指定 marker 移动到的目标点|
|destination|Object|Yes|Specifies the destination point to move the marker to|
|autoRotate|Boolean|否|移动过程中是否自动旋转 marker|
|autoRotate|Boolean|No|Automatically rotate the marker during movement|
|rotate|Number|否|marker 的旋转角度|
|rotate|Number|No |Rotation angle of marker|
|duration|Number|否|动画持续时长，默认值1000ms，平移与旋转分别计算|
|duration|Number|No|The duration of the animation, the default value is 1000ms, the translation and rotation are calculated separately|
|animationEnd|Function|否|	动画结束回调函数|
|animationEnd|Function|No| Animation end callback function|
|fail|Function|否|	接口调用失败的回调函数|
|fail|Function|No| Callback function for interface call failure|

**includePoints 的 OBJECT 参数列表**
**List of OBJECT parameters for includePoints**

|参数|类型|必填|说明|
|Parameter|Type|Required|Description|
|:-|:-|:-|:-|
|points|Array|是|要显示在可视区域内的坐标点列表，[{latitude, longitude}]|
|points|Array| Yes | a list of coordinate points to display in the viewable area, [{latitude, longitude}]|
|padding|Array|否|坐标点形成的矩形边缘到地图边缘的距离，单位像素。格式为[上，右，下，左]，安卓上只能识别数组第一项，上下左右的padding一致。开发者工具暂不支持padding参数。|
|padding|Array|No|The distance from the edge of the rectangle formed by the coordinate points to the edge of the map, in pixels. The format is [up, right, down, left], only the first item of the array can be recognized on Android, and the padding of the upper, lower, left and right is the same. The developer tools do not support the padding parameter yet. |

**getRegion 的 OBJECT 参数列表**
**List of OBJECT parameters for getRegion**

|参数|类型|必填|说明|
|Parameter|Type|Required|Description|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调函数，res = {southwest, northeast}，西南角与东北角的经纬度|
|success|Function|No|The callback function of the successful interface call, res = {southwest, northeast}, the latitude and longitude of the southwest and northeast corners|
|fail|Function|否|接口调用失败的回调函数|
|fail|Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function|No|The callback function of the end of the interface call (the call will be executed if the call succeeds or fails)|

**getScale 的 OBJECT 参数列表**
**List of OBJECT parameters for getScale**

|参数|类型|必填|说明|
|Parameter|Type|Required|Description|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调函数，res = {scale}|
|success|Function|No|Callback function for successful interface call, res = {scale}|
|fail|Function|否|接口调用失败的回调函数|
|fail|Function|No|Callback function for interface call failure|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
|complete|Function|No|The callback function of the end of the interface call (the call will be executed if the call succeeds or fails)|


**addCustomLayer 的 OBJECT 参数列表**
**List of OBJECT parameters for addCustomLayer**

|属性		|类型		|默认值	|必填	|说明												|
|property |type |default |required |description |
|:-|:-|:-|:-|:-|
|layerId	|string		|		|是		|个性化图层id										|
|layerId |string | |yes |personalized layer id |
|success	|function	|		|否		|接口调用成功的回调函数								|
|success |function | |No |Callback function for successful interface call |
|fail		|function	|		|否		|接口调用失败的回调函数								|
|fail |function | |No |Callback function for interface call failure |
|complete	|function	|		|否		|接口调用结束的回调函数（调用成功、失败都会执行）	|
|complete |function | |No |The callback function for the end of the interface call (the call will be executed if the call succeeds or fails) |


**addGroundOverlay 的 OBJECT 参数列表**
**List of OBJECT parameters for addGroundOverlay**

|属性		|类型		|默认值	|必填	|说明												|
|property |type |default |required |description |
|:-|:-|:-|:-|:-|
|id			|String		|		|是		|图片图层 id										|
|id |String | |Yes |Image layer id |
|src		|String		|		|是		|图片路径，支持网络图片、临时路径、代码包路径		|
|src |String | |Yes |Image path, supports network image, temporary path, code package path |
|bounds		|Object		|		|是		|图片覆盖的经纬度范围								|
|bounds |Object | |Yes |The range of latitude and longitude covered by the image |
|visible	|Boolean	|true	|否		|是否可见											|
|visible |Boolean |true |No |Visible |
|zIndex		|Number		|1		|否		|图层绘制顺序										|
|zIndex |Number |1 |No |Layer Draw Order |
|opacity	|Number		|1		|否		|图层透明度											|
|opacity |Number |1 |No |Layer Opacity |
|success	|function	|		|否		|接口调用成功的回调函数								|
|success |function | |No |Callback function for successful interface call |
|fail		|function	|		|否		|接口调用失败的回调函数								|
|fail |function | |No |Callback function for interface call failure |
|complete	|function	|		|否		|接口调用结束的回调函数（调用成功、失败都会执行）	|
|complete |function | |No |The callback function for the end of the interface call (the call will be executed if the call succeeds or fails) |

`object.bounds` 的结构
Structure of `object.bounds`

|属性		|类型	|默认值	|必填	|说明			|
|property |type |default |required |description |
|:-|:-|:-|:-|:-|
|southwest	|Object	|		|是		|西南角经纬度	|
|southwest |Object | |Yes |Southwest latitude and longitude |
|northeast	|Object	|		|是		|东北角经纬度	|
|northeast |Object | |Yes |Northeast latitude and longitude |

`southwest` 的结构
Structure of `southwest`

|属性		|类型	|默认值	|必填	|说明	|
|property |type |default |required |description |
|:-|:-|:-|:-|:-|
|longitude	|number	|		|是		|经度	|
|longitude |number | |Yes |longitude |
|latitude	|number	|		|是		|纬度	|
|latitude |number | |yes |latitude |

`northeast` 的结构
The structure of `northeast`

|属性		|类型	|默认值	|必填	|说明	|
|property |type |default |required |description |
|:-|:-|:-|:-|:-|
|longitude	|number	|		|是		|经度	|
|longitude |number | |Yes |longitude |
|latitude	|number	|		|是		|纬度	|
|latitude |number | |yes |latitude |


**addMarkers 的 OBJECT 参数列表**
**List of OBJECT parameters for addMarkers**

|属性		|类型		|默认值	|必填	|说明												|
|property |type |default |required |description |
|:-|:-|:-|:-|:-|
|markers	|Array		|		|是		|同传入 map 组件的 marker 属性						|
|markers |Array | |Yes |Same as the marker property of the incoming map component |
|clear		|boolean	|false	|否		|是否先清空地图上所有 marker						|
|clear |boolean |false |No |Whether to clear all markers on the map first |
|success	|function	|		|否		|接口调用成功的回调函数								|
|success |function | |No |Callback function for successful interface call |
|fail		|function	|		|否		|接口调用失败的回调函数								|
|fail |function | |No |Callback function for interface call failure |
|complete	|function	|		|否		|接口调用结束的回调函数（调用成功、失败都会执行）	|
|complete |function | |No |The callback function for the end of the interface call (the call will be executed if the call succeeds or fails) |


**removeMarkers 的 OBJECT 参数列表**
**List of OBJECT parameters for removeMarkers**

|属性		|类型		|默认值	|必填	|说明												|
|property |type |default |required |description |
|:-|:-|:-|:-|:-|
|markerIds	|Array		|		|是		|要被删除的marker的id属性组成的数组						|
|markerIds |Array | |Yes |Array of id attributes of markers to be deleted |
|success	|function	|		|否		|接口调用成功的回调函数								|
|success |function | |No |Callback function for successful interface call |
|fail		|function	|		|否		|接口调用失败的回调函数								|
|fail |function | |No |Callback function for interface call failure |
|complete	|function	|		|否		|接口调用结束的回调函数（调用成功、失败都会执行）	|
|complete |function | |No |The callback function for the end of the interface call (the call will be executed if the call succeeds or fails) |


**moveAlong 的 OBJECT 参数列表**
**moveAlong's OBJECT parameter list**

|属性				|类型			|默认值	|必填	|说明																							|
|property |type |default |required |description |
|:-					|:-				|:-			|:-		|:-																								|
|markerId		|Number		|				|是		|指定 marker																				|
|markerId |Number | |Yes |Specify marker |
|path				|Array		|				|是		|移动路径的坐标串，坐标点格式 {longitude, latitude}	|
|path |Array | |Yes |The coordinate string of the moving path, the coordinate point format {longitude, latitude} |
|autoRotate	|boolean	|true		|否		|根据路径方向自动改变 marker 的旋转角度							|
|autoRotate |boolean |true |No |Automatically change the rotation angle of the marker according to the path direction |
|duration		|number		|				|是		|平滑移动的时间																		|
|duration |number | |Yes |Time for smooth movement |
|success		|function	|				|否		|接口调用成功的回调函数															|
|success |function | |No |Callback function for successful interface call |
|fail				|function	|				|否		|接口调用失败的回调函数															|
|fail |function | |No |Callback function for interface call failure |
|complete		|function	|				|否		|接口调用结束的回调函数（调用成功、失败都会执行）			|
|complete |function | |No |The callback function for the end of the interface call (the call will be executed if the call succeeds or fails) |

**setLocMarkerIcon 的 OBJECT 参数列表**
**List of OBJECT parameters for setLocMarkerIcon**

|属性			|类型			|默认值	|必填	|说明																							|
|property |type |default |required |description |
|:-          |:-        |:-      |:-    |:-                                         |
|iconPath	|string		|				|否		|图标路径，支持网络路径、本地路径、代码包路径			|
|iconPath |string | |No |Icon path, support network path, local path, code package path |
|success	|function	|				|否		|接口调用成功的回调函数														|
|success |function | |No |Callback function for successful interface call |
|fail			|function	|				|否		|接口调用失败的回调函数														|
|fail |function | |No |Callback function for interface call failure |
|complete	|function	|				|否		|接口调用结束的回调函数（调用成功、失败都会执行）	|
|complete |function | |No |The callback function for the end of the interface call (the call will be executed if the call succeeds or fails) |


**mapContext （App平台地图服务商差异）**
**mapContext (App platform map service provider difference)**

|属性								|说明																																	|高德是否支持									|google地图是否支持	|
|Properties |Description |Whether AutoNavi supports |Does Google Maps support |
|:----							|:----																																|:----												|:----							|
|setLocMarkerIcon		|设置定位点图标，支持网络路径、本地路径、代码包路径												|已支持												|不支持							|
|setLocMarkerIcon |Set the anchor icon, support network path, local path, code package path |Supported |Not supported |
|moveAlong					|沿指定路径移动 marker，用于轨迹回放等场景																|已支持(不支持autoRotate属性)		|已支持							|
|moveAlong |Move the marker along the specified path for scenarios such as track playback |Supported (does not support the autoRotate property) |Supported |
|addCustomLayer			|添加个性化图层																												|不支持												|不支持							|
|addCustomLayer |Adding a custom layer |Not supported |Not supported |
|removeVisualLayer	|移除可视化图层																												|不支持												|不支持							|
|removeVisualLayer |Remove a visualization layer |Not supported |Not supported |
|fromScreenLocation	|获取屏幕上的点对应的经纬度，坐标原点为地图左上角													|不支持												|不支持							|
|fromScreenLocation |Get the latitude and longitude corresponding to the point on the screen, the origin of the coordinates is the upper left corner of the map |Not supported |Not supported |
|removeCustomLayer	|移除个性化图层																												|不支持												|不支持							|
|removeCustomLayer |Remove a custom layer |Not supported |Not supported |
|setCenterOffset		|设置地图中心点偏移，向后向下为增长，屏幕比例范围(0.25~0.75)								|不支持												|不支持							|
|setCenterOffset |Set the offset of the center point of the map, grow backwards and downwards, screen scale range (0.25~0.75) |Not supported |Not supported |
|toScreenLocation		|获取经纬度对应的屏幕坐标，坐标原点为地图左上角。													|不支持												|不支持							|
|toScreenLocation |Get the screen coordinates corresponding to the latitude and longitude. The origin of the coordinates is the upper left corner of the map. |Not supported |Not supported |


**MapContext.on()** (app-nvue、微信小程序支持)
**MapContext.on()** (app-nvue, WeChat applet support)

`markerClusterCreate`
缩放或拖动导致新的聚合簇产生时触发，仅返回新创建的聚合簇信息。
Triggered when zooming or dragging causes a new aggregate cluster to be created, and only returns information about the newly created aggregate cluster.

返回参数
return parameter

|参数		|类型								|说明		|
|parameter |type |description |
|:-|:-|:-|
|clusters	|Array&amp;lt;ClusterInfo&amp;gt;	|聚合簇数据	|
|clusters |Array&amp;lt;ClusterInfo&amp;gt; |Aggregate Cluster Data |


`markerClusterClick`
聚合簇的点击事件。
The click event of the aggregated cluster.

返回参数
return parameter

|参数	|类型		|说明	|
|parameter |type |description |
|:-|:-|:-|
|cluster|ClusterInfo|聚合簇	|
|cluster|ClusterInfo|Cluster cluster |

`ClusterInfo` 结构
`ClusterInfo` structure

|参数		|类型						|说明						|
|parameter |type |description |
|:-|:-|:-|
|clusterId	|Number						|聚合簇的 id				|
|clusterId |Number |The id of the aggregated cluster |
|center		|LatLng						|聚合簇的坐标				|
|center |LatLng |Coordinates of aggregated clusters |
|markerIds	|Array&amp;lt;Number&amp;gt;|该聚合簇内的点标记数据数组	|
|markerIds |Array&amp;lt;Number&amp;gt;|Array of point marker data in this aggregated cluster |

`initMarkerCluster(OBJECT)` 结构
`initMarkerCluster(OBJECT)` structure

|属性								|类型			|默认值	|必填	|说明																																|
|property |type |default |required |description |
|:-|:-|:-|:-|:-|
|enableDefaultStyle	|boolean	|true		|否		|启用默认的聚合样式																									|
|enableDefaultStyle |boolean |true |no |enable default aggregation style |
|zoomOnClick				|boolean	|true		|否		|点击已经聚合的标记点时是否实现聚合分离															|
|zoomOnClick |boolean |true |no |Whether to implement aggregation separation when clicking on an already aggregated marker |
|gridSize						|boolean	|60			|否		|聚合算法的可聚合距离，即距离小于该值的点会聚合至一起，以像素为单位	|
|gridSize |boolean |60 |No |The aggregatable distance of the aggregation algorithm, that is, points whose distance is less than this value will be clustered together, in pixels |
|success						|function	|				|否		|接口调用成功的回调函数																							|
|success |function | |No |Callback function for successful interface call |
|fail								|function	|				|否		|接口调用失败的回调函数																							|
|fail |function | |No |Callback function for interface call failure |
|complete						|function	|				|否		|接口调用结束的回调函数（调用成功、失败都会执行）										|
|complete |function | |No |The callback function for the end of the interface call (the call will be executed if the call succeeds or fails) |


示例代码
sample code

```js
  MapContext.on('markerClusterCreate', (res) => {})
  MapContext.on('markerClusterClick', (res) => {})
```


地图聚合 API 示例(nvue)
Map Aggregation API Example (nvue)

缩小地图可看到多个 marker 合并为 1 个并显示聚合数量，放大地图后恢复
Zoom out on the map to see multiple markers merged into one and display the aggregated number, and restore it after zooming in on the map

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
      // On.("markerClusterCreate", (e) => {}) will be triggered only when initialization is called
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
        const marker = {
          id: 1,
          iconPath: img,
          width: 50,
          height: 50,
          joinCluster: true, // 指定了该参数才会参与聚合
          label: {
            width: 50,
            height: 30,
            borderWidth: 1,
            borderRadius: 10,
            bgColor: '#ffffff'
          }
        };

        const positions = [{
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
        }]

        const markers = []

        positions.forEach((p, i) => {
          const newMarker = Object.assign({},marker, p)
          newMarker.id = i + 1
          newMarker.label.content = `label ${i + 1}`
          markers.push(newMarker)
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


## mapSearch 模块(仅app-nvue支持，Goolge地图不支持)
## mapSearch module (only supported by app-nvue, not supported by Goolge maps)

#### reverseGeocode(Object,callback);@reverseGeocode
> 反向地理编码
> Reverse Geocoding

##### Object
属性|类型 |默认值|必填|说明
property|type|default value|required|description
:--|:--|:--|:--|:--|
point|Object| |是|{latitude: 纬度, longitude: 经度}
point|Object| |Yes|{latitude: latitude, longitude: longitude}

##### callback 返回 Object 参数说明
##### callback Returns Object Parameter description
属性|类型 |说明
property | type | description
:--|:--|:--|
type|String|"success" 表示成功， "fail" 表示失败
type|String|"success" means success, "fail" means failure
code|Number| 成功返回 0,失败返回相应 code 码
code|Number| Returns 0 on success, and returns the corresponding code code on failure
message|String|失败描述
message|String|Failure description
address|String|查询后地址 （成功时返回）
address|String|Address after query (returned on success)

#### poiSearchNearBy（Object,callback);@poiSearchNearBy
> 周边检索
> Surrounding search

##### Object
属性|类型 |默认值|必填|说明
property|type|default value|required|description
:--|:--|:--|:--|:--|
point|Object| |是|检索的中心点坐标 {latitude: 纬度, longitude: 经度}
point|Object| |yes| retrieved center point coordinates {latitude: latitude, longitude: longitude}
key|String| | 是|搜索关键字
key|String| | yes | search key
radius|Number|3000|否|检索的半径，单位为米
radius|Number|3000|No|Retrieved radius in meters
index|Number|1|否|要获取检索结果的页号索引
index|Number|1|No|The index of the page number to get the search results
offset|Number|10|否|设置每页条目数（默认每页10条数据）。HBuilder 3.2.13+
offset|Number|10|No|Set the number of entries per page (default 10 entries per page). HBuilder 3.2.13+

##### callback 返回 Object 参数说明
##### callback Returns Object Parameter description
属性|类型 |说明
property | type | description
:--|:--|:--|
type|String|"success" 表示成功， "fail" 表示失败
type|String|"success" means success, "fail" means failure
code|Number| 成功返回 0,失败返回相应 code 码
code|Number| Returns 0 on success, and returns the corresponding code code on failure
message|String|失败描述
message|String|Failure description
totalNumber|Number|返回的POI数目
totalNumber|Number|Number of POIs returned
currentNumber|Number|当前页POI数目
currentNumber|Number|Number of POIs on the current page
pageNumber|Number|页数
pageNumber|Number|Number of pages
pageIndex|Number|当前页号索引
pageIndex|Number|Current page number index
poiList|Array.&lt;poiObject&gt;|POI信息数组
poiList|Array.&lt;poiObject&gt;| POI information array

##### poiObject
属性|类型 |说明
property | type | description
:--|:--|:--|
location|Object|{latitude: 纬度, longitude: 经度}
location|Object|{latitude: latitude, longitude: longitude}
name|String|名称
name|String|Name
type|String|类型
type|String|Type
distance|Number|距离（单位米）
distance|Number| Distance (in meters)
address|String|地址
address|String|Address

#### poiKeywordsSearch（Object,callback);@poiKeywordsSearch
> 关键字检索
> Keyword search

##### Object
属性|类型 |默认值|必填|说明
property|type|default value|required|description
:--|:--|:--|:--|:--|
key|String| | 是|搜索关键字
key|String| | yes | search key
index|Number|1|否|要获取检索结果的页号索引（每页10条数据）
index|Number|1|No|The index of the page number to get the search results (10 pieces of data per page)
city|String| |否|查询城市，可选值：cityname（中文或中文全拼）、citycode、adcode.[code 参考表](https://lbs.amap.com/api/webservice/download)
city|String| |No|Query city, optional values: cityname (Chinese or Chinese spelling), citycode, adcode.[code reference table](https://lbs.amap.com/api/webservice/download)
types|String| |否| 类型，多个类型用“\|”分割 可选值:文本分类、分类代码 [code 参考表](https://lbs.amap.com/api/webservice/download)
types|String| |No| Type, multiple types are separated by "\|" Optional values: text classification, classification code [code reference table](https://lbs.amap.com/api/webservice/download)
point|Object| |否|设置后，则返回结果会按照距离此点的距离来排序 {latitude: 纬度, longitude: 经度}
point|Object| |No|After setting, the returned results will be sorted according to the distance from this point {latitude: latitude, longitude: longitude}
sortrule|Number|0|否|排序规则, 0-距离排序；1-综合排序, 默认0
sortrule|Number|0|No|Sort rule, 0-distance sort; 1-comprehensive sort, default 0
offset|Number|10|否|设置每页条目数（默认每页10条数据）。HBuilder 3.2.13+
offset|Number|10|No|Set the number of entries per page (default 10 entries per page). HBuilder 3.2.13+
cityLimit| Boolean | false | 否 | 强制城市限制功能 默认 false，例如：在上海搜索天安门，如果citylimit为true，将不返回北京的天安门相关的POI。HBuilder 3.2.13+
cityLimit| Boolean | false | No | Mandatory city limit function Default false, for example: search for Tiananmen in Shanghai, if citylimit is true, the POI related to Tiananmen in Beijing will not be returned. HBuilder 3.2.13+

##### callback 返回 Object 参数说明
##### callback Returns Object Parameter description
属性|类型 |说明
property | type | description
:--|:--|:--|
type|String|"success" 表示成功， "fail" 表示失败
type|String|"success" means success, "fail" means failure
code|Number| 成功返回 0,失败返回相应 code 码
code|Number| Returns 0 on success, and returns the corresponding code code on failure
message|String|失败描述
message|String|Failure description
totalNumber|Number|返回的POI数目
totalNumber|Number|Number of POIs returned
currentNumber|Number|当前页POI数目
currentNumber|Number|Number of POIs on the current page
pageNumber|Number|页数
pageNumber|Number|Number of pages
pageIndex|Number|当前页号索引
pageIndex|Number|Current page number index
poiList|Array.&lt;poiObject&gt;|POI信息数组
poiList|Array.&lt;poiObject&gt;| POI information array



**Tips**

- App端使用map，nvue比vue更强大，且没有层级问题。
- The app side uses map, nvue is more powerful than vue, and there is no hierarchy problem.
- App端vue页面默认为高德地图，也可以选择百度地图。但app-nvue只有高德地图，没有百度地图。以及地图选择api（mapSearch），只支持高德地图。
- The Vue page on the App side defaults to the AutoNavi map, and you can also choose the Baidu map. But app-nvue only has Gaode map, not Baidu map. And the map selection api (mapSearch), which only supports Gaode maps.
- H5 端获取定位信息，需要部署在 **https** 服务上，本地预览（localhost）仍然可以使用 http 协议。
- To obtain positioning information on the H5 side, it needs to be deployed on the **https** service. The local preview (localhost) can still use the http protocol.
- 无 GPS 模块的 PC 设备使用 Chrome 浏览器的时候，位置信息是连接谷歌服务器获取的，国内用户可能获取位置信息失败。
- When a PC device without a GPS module uses the Chrome browser, the location information is obtained by connecting to the Google server, and domestic users may fail to obtain the location information.
- App 端使用地图组件需要向高德或百度等三方服务商申请SDK资质，获取AppKey，打包时需要在manifest的SDK配置中填写Appkey。在manifest可视化界面有详细申请指南，详见：[https://ask.dcloud.net.cn/article/29](https://ask.dcloud.net.cn/article/29)
- To use the map component on the app side, you need to apply for the SDK qualification from a third-party service provider such as AutoNavi or Baidu, and obtain the AppKey. You need to fill in the Appkey in the SDK configuration of the manifest when packaging. There are detailed application guidelines in the manifest visualization interface, see: [https://ask.dcloud.net.cn/article/29](https://ask.dcloud.net.cn/article/29)
- H5 端使用地图和定位相关，需要在 [manifest.json](https://uniapp.dcloud.io/collocation/manifest.html#h5sdkconfig) 内配置腾讯或谷歌等三方地图服务商申请的秘钥（key）。
- The use of maps on the H5 side is related to positioning. It is necessary to configure the secret key applied for by a third-party map service provider such as Tencent or Google in [manifest.json](https://uniapp.dcloud.io/collocation/manifest.html#h5sdkconfig) ( key).
- ``<map>`` 组件默认为国测局坐标，调用 ``uni.getLocation`` 返回结果传递给 ``<map>`` 组件时，需指定 type 为 gcj02。
- ``<map> `` The component defaults to the coordinates of the National Bureau of Surveying and Surveying, and calling ``uni.getLocation`` returns the result and passes it to ``<map> `` When using the component, you need to specify the type as gcj02.

### 三方定位和地图服务收费说明
### Three-party positioning and map service fee description

* 使用三方定位或者地图服务，需向服务提供商（如：高德地图、百度地图、腾讯地图、谷歌地图）申请授权或缴纳费用。
* To use third-party positioning or map services, you need to apply for authorization or pay fees to service providers (such as AutoNavi Maps, Baidu Maps, Tencent Maps, Google Maps).
* 申请三方定位或地图服务秘钥时请详细阅读授权和收费说明，并关注服务条款后期的变更。
* When applying for a three-party positioning or map service key, please read the authorization and charging instructions in detail, and pay attention to the later changes to the terms of service.
* 以下是关于部分地图服务商授权和收费的简介，具体以地图服务商官网公布的最新信息为准。
* The following is a brief introduction to the authorization and charges of some map service providers, and the latest information published on the official website of the map service provider shall prevail.
  * 高德地图：商用授权收费，超出配额收费。
  * AutoNavi map: commercial license charges, exceeding quota charges.
  * 百度地图：商用授权收费，超出配额收费。
  * Baidu map: commercial license charges, exceeding quota charges.
  * 腾讯地图：商用授权收费，超出配额收费。
  * Tencent Maps: Commercial license charges, exceeding quota charges.
  * 谷歌地图：按量收费，每月可获得一些赠送金额。
  * Google Maps: Pay-as-you-go with some monthly credits.
  * 小程序平台内置地图：无需关心地图服务商，免费使用，无配额限制。
  * The built-in map of the Mini Program platform: no need to care about the map service provider, free to use, no quota limit.