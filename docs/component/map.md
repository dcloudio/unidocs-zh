#### map

地图组件。
map component.

地图组件用于展示地图，而定位API只是获取坐标，请勿混淆两者。
The map component is used to display the map, and the positioning API is only to obtain coordinates, do not confuse the two.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
|App|H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|ByteDance MiniApp, Feishu MiniApp|QQ MiniApp| QuickApp|360 MiniApp| Kuaishou MiniApp|JD MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|1.63+|1.9.0+|√|x|x|√|

**地图服务商说明**
**Map Service Provider Description**

|地图服务商|App|H5|微信小程序|
|Map Service Provider|App|H5|WeChat MiniApp|
|:-:|:-:|:-:|:-:|
|高德|√|3.6.0+||
|Goolge|3.4+|3.2.10+||
|腾讯||√|√|
|Tencent||√|√|


**属性说明**
**Property description**

|属性名|类型|默认值|说明|平台差异说明|
|property name|type|default value|description|platform difference description|
|:-|:-|:-|:-|:-|
|longitude|Number||中心经度||
|longitude|Number||Center Longitude||
|latitude|Number||中心纬度||
|latitude|Number||Central Latitude||
|scale|Number|16|缩放级别，取值范围为3-20|高德地图缩放比例与微信小程序不同|
|scale|Number|16|Zoom level, the value range is 3-20|The zoom ratio of the AutoNavi map is different from that of the WeChat MiniApp|
|theme|String|normal|主题（satellite 或 normal）只在初始化时有效，不能动态变更（仅Android支持）|京东小程序|
|theme|String|normal|Theme (satellite or normal) is only valid during initialization and cannot be changed dynamically (only supported by Android)|JD MiniApp|
|min-scale|Number|3|最小缩放级别|App-nvue 3.1.0+、微信小程序2.13+|
|min-scale|Number|3|Minimum zoom level|App-nvue 3.1.0+, WeChat MiniApp 2.13+|
|max-scale|Number|20|最大缩放级别|App-nvue 3.1.0+、微信小程序2.13+|
|max-scale|Number|20|Maximum zoom level|App-nvue 3.1.0+, WeChat MiniApp 2.13+|
|layer-style|Number/String|1|个性化地图|App-nvue 3.1.0+、微信小程序2.13+|
|layer-style|Number/String|1|Personalized map|App-nvue 3.1.0+, WeChat MiniApp 2.13+|
|markers|Array||标记点||
|markers|Array||Markers||
|polyline|Array||路线|飞书小程序不支持|
|polyline|Array||Route|Feishu MiniApp does not support|
|circles|Array||圆||
|circles|Array||Circles||
|controls|Array||控件||
|controls|Array||Controls||
|include-points|Array||缩放视野以包含所有给定的坐标点|App-nvue 2.1.5+、微信小程序、H5、百度小程序、支付宝小程序、京东小程序|
|include-points|Array||Zooms the field of view to include all given coordinate points|App-nvue 2.1.5+, WeChat MiniApp, H5, Baidu MiniApp, Alipay MiniApp, Jingdong MiniApp|
|enable-3D|Boolean|false|是否显示3D楼块|App-nvue 2.1.5+、微信小程序2.3.0|
|enable-3D|Boolean|false|Whether to display 3D building blocks|App-nvue 2.1.5+, WeChat MiniApp 2.3.0|
|show-compass|Boolean|false|是否显示指南针|App-nvue 2.1.5+、微信小程序2.3.0|
|show-compass|Boolean|false|Whether to show the compass|App-nvue 2.1.5+, WeChat MiniApp 2.3.0|
|enable-zoom|Boolean|true|是否支持缩放|App-nvue 2.1.5+、微信小程序2.3.0|
|enable-zoom|Boolean|true|Whether to support zoom|App-nvue 2.1.5+, WeChat MiniApp 2.3.0|
|enable-scroll|Boolean|true|是否支持拖动|App-nvue 2.1.5+、微信小程序2.3.0|
|enable-scroll|Boolean|true|Whether to support dragging|App-nvue 2.1.5+, WeChat MiniApp 2.3.0|
|enable-rotate|Boolean|false|是否支持旋转|App-nvue 2.1.5+、微信小程序2.3.0|
|enable-rotate|Boolean|false|Whether to support rotation|App-nvue 2.1.5+, WeChat MiniApp 2.3.0|
|enable-overlooking|Boolean|false|是否开启俯视|App-nvue 2.1.5+、微信小程序2.3.0|
|enable-overlooking|Boolean|false|Whether to enable Overlooking|App-nvue 2.1.5+, WeChat MiniApp 2.3.0|
|enable-satellite|Boolean|false|是否开启卫星图|App-nvue 2.1.5+、微信小程序2.7.0|
|enable-satellite|Boolean|false|Whether to enable satellite images|App-nvue 2.1.5+, WeChat MiniApp 2.7.0|
|enable-traffic|Boolean|false|是否开启实时路况|App-nvue 2.1.5+、微信小程序2.7.0|
|enable-traffic|Boolean|false|Whether to enable real-time traffic conditions|App-nvue 2.1.5+, WeChat MiniApp 2.7.0|
|enable-poi|Boolean|false|是否展示 POI 点|App-nvue 3.1.0+|
|enable-poi|Boolean|false|Whether to display POI points|App-nvue 3.1.0+|
|enable-building|Boolean|false|是否展示建筑物|App-nvue 3.1.0+ 支持 (**废除原enable-3D属性 高德地图默认开启建筑物就是3D无法设置**)|
|enable-building|Boolean|false|Whether to display the building|App-nvue 3.1.0+ support (**Abolish the original enable-3D property, the Gaode map opens the building by default, and the 3D cannot be set**)|
|show-location|Boolean||显示带有方向的当前定位点|微信小程序、H5、百度小程序、支付宝小程序、京东小程序|
|show-location|Boolean||Show the current location point with direction|WeChat MiniApp, H5, Baidu MiniApp, Alipay MiniApp, Jingdong MiniApp|
|polygons|Array.`<polygon>`||多边形|App-nvue 2.1.5+、App-vue 3.4.3+、H5 3.4.3+、微信小程序、百度小程序、支付宝小程序|
|polygons|Array.`<polygon>`||Polygon|App-nvue 2.1.5+, App-vue 3.4.3+, H5 3.4.3+, WeChat MiniApp, Baidu MiniApp, Alipay MiniApp|
|enable-indoorMap|Boolean|false|是否展示室内地图|App-nvue 3.1.0+|
|enable-indoorMap|Boolean|false|Whether to display indoor map|App-nvue 3.1.0+|
|@markertap|EventHandle||点击标记点时触发，e.detail = {markerId}|App-nvue 2.3.3+、H5、微信小程序、支付宝小程序 （App和H5平台需要指定 marker 对象属性 id）|
|@markertap|EventHandle||Triggered when a marker is clicked, e.detail = {markerId}|App-nvue 2.3.3+, H5, WeChat MiniApp, Alipay MiniApp(App and H5 platforms need to specify the marker object attribute id) |
|@labeltap|EventHandle||点击label时触发，e.detail = {markerId} |微信小程序2.9.0|
|@labeltap|EventHandle||Triggered when the label is clicked, e.detail = {markerId} |WeChat MiniApp 2.9.0|
|@callouttap|EventHandle||点击标记点对应的气泡时触发，e.detail = {markerId}||
|@callouttap|EventHandle||Triggered when the bubble corresponding to the marker point is clicked, e.detail = {markerId}||
|@controltap|EventHandle||点击控件时触发，e.detail = {controlId}||
|@controltap|EventHandle||Triggered when the control is clicked, e.detail = {controlId}||
|@regionchange|EventHandle||视野发生变化时触发|微信小程序、H5、百度小程序、支付宝小程序、京东小程序|
|@regionchange|EventHandle||Triggered when the field of view changes|WeChat MiniApp, H5, Baidu MiniApp, Alipay MiniApp, Jingdong MiniApp|
|@tap|EventHandle||点击地图时触发; App-nvue、微信小程序2.9支持返回经纬度||
|@tap|EventHandle||Triggered when the map is clicked; App-nvue, WeChat MiniApp 2.9 support returning latitude and longitude||
|@updated|EventHandle||在地图渲染更新完成时触发|微信小程序、H5、百度小程序|
|@updated|EventHandle||Triggered when the map rendering update is completed|WeChat MiniApp, H5, Baidu MiniApp|
|@anchorpointtap|EventHandle||点击定位标时触发，e.detail = {longitude, latitude}|App-nvue 3.1.0+、微信小程序2.13+|
|@anchorpointtap|EventHandle||Triggered when the anchor is clicked, e.detail = {longitude, latitude}|App-nvue 3.1.0+, WeChat MiniApp 2.13+|
|@poitap|EventHandle||点击地图poi点时触发，e.detail = {name, longitude, latitude}|微信小程序2.3.0+|
|@poitap|EventHandle||Triggered when the map poi point is clicked, e.detail = {name, longitude, latitude}|WeChat MiniApp 2.3.0+|

**注意**
**Notice**

- `<map>` 组件的宽/高推荐写直接量，比如：750rpx，不要设置百分比值。
- The width/height of the `<map>` component is recommended to be written directly, for example: 750rpx, do not set a percentage value.
- 谷歌地图使用 `wgs84` 坐标，其他地图使用 `gcj02` 坐标，用错坐标类型会显示偏移。
- Google Maps use `wgs84` coordinates, other maps use `gcj02` coordinates, if the wrong coordinate type is used, the offset will be displayed.
- App平台 `layer-style` 属性需要在地图服务商后台创建，值设置为高德后台申请的字符串，[详情](https://developer.amap.com/api/android-sdk/guide/create-map/custom)
- The `layer-style` attribute of the App platform needs to be created in the backend of the map service provider, and the value is set to the string applied for by the AutoNavi backend. create-map/custom)

### 近期新增功能
### Recent additions
1. 支持点聚合，适用于marker过多场景。
1. Support point aggregation, suitable for scenarios with too many markers.
2. 支持彩虹蚯蚓线，常用于路线规划场景。
2. Support rainbow earthworm line, which is often used in route planning scenarios.
3. 覆盖物支持调整与其它地图元素的压盖关系。
3. Overlay supports adjusting the overlay relationship with other map elements.
4. 支持marker（小车）平移动画，适用于轨迹回放场景。
4. Support marker (car) translation animation, suitable for track playback scenarios.

**markers**

标记点用于在地图上显示标记的位置
Marker points are used to display the marker's location on the map

|属性|说明|类型|必填|备注|平台差异说明|
|Attribute|Description|Type|Required|Remarks|Platform Difference Description|
|:-|:-|:-|:-|:-|:-|
|id|标记点id|Number|是|marker点击事件回调会返回此id。建议为每个marker设置上Number类型id，保证更新marker时有更好的性能。最大限制9位数||
|id|marker id|Number| yes |marker click event callback will return this id. It is recommended to set the Number type id for each marker to ensure better performance when updating the marker. Maximum limit 9 digits||
|latitude|纬度|Number|是|浮点数，范围 -90 ~ 90||
|latitude|latitude |Number| Yes |float, range -90 ~ 90||
|longitude|经度|Number|是|浮点数，范围 -180 ~ 180||
|longitude|longitude|Number| Yes |float, range -180 ~ 180||
|title|标注点名|String|否|点击时显示，callout存在时将被忽略|App-nvue 2.1.5+、微信小程序、H5、支付宝小程序、百度小程序、京东小程序|
|title|Mark Callout|String|No|Display when clicked, and will be ignored when callout exists|App-nvue 2.1.5+, WeChat MiniApp, H5, Alipay MiniApp, Baidu MiniApp, Jingdong MiniApp|
|iconPath|显示的图标|String|是|项目目录下的图片路径，支持相对路径写法，以'/'开头则表示相对小程序根目录；也支持临时路径||
|iconPath|The displayed icon |String| is the image path under the project directory, which supports relative path writing. Starting with '/' means relative to the MiniApp root directory; it also supports temporary path||
|rotate|旋转角度|Number|否|顺时针旋转的角度，范围 0 ~ 360，默认为 0|App-nvue 2.1.5+、微信小程序、支付宝小程序、百度小程序、京东小程序|
|rotate|Rotation angle|Number|No|Clockwise rotation angle, the range is 0 ~ 360, the default is 0|App-nvue 2.1.5+, WeChat MiniApp, Alipay MiniApp, Baidu MiniApp, Jingdong MiniApp|
|alpha|标注的透明度|Number|否|默认1，无透明，范围 0 ~ 1|App-nvue 2.1.5+、微信小程序、支付宝小程序、百度小程序、京东小程序|
|alpha|The transparency of the label|Number|No|Default 1, no transparency, range 0 ~ 1|App-nvue 2.1.5+, WeChat MiniApp, Alipay MiniApp, Baidu MiniApp, Jingdong MiniApp|
|width|标注图标宽度|Number|否|默认为图片实际宽度|App-nvue 2.1.5+、微信小程序、H5、支付宝小程序、百度小程序、京东小程序|
|width|The width of the label icon|Number|No|The default is the actual width of the image|App-nvue 2.1.5+, WeChat MiniApp, H5, Alipay MiniApp, Baidu MiniApp, Jingdong MiniApp|
|height|标注图标高度|Number|否|默认为图片实际高度|App-nvue 2.1.5+、微信小程序、H5、支付宝小程序、百度小程序、京东小程序|
|height|The height of the label icon|Number|No|The default is the actual height of the picture|App-nvue 2.1.5+, WeChat MiniApp, H5, Alipay MiniApp, Baidu MiniApp, Jingdong MiniApp|
|callout|自定义标记点上方的气泡窗口|Object|否|支持的属性见下表，可识别换行符。|App-nvue 2.1.5+、微信小程序、支付宝小程序、百度小程序、京东小程序|
|callout|Bubble window above the custom marker |Object|No|The supported properties are shown in the table below, which recognizes line breaks. |App-nvue 2.1.5+, WeChat MiniApp, Alipay MiniApp, Baidu MiniApp, Jingdong MiniApp|
|label|为标记点旁边增加标签|Object|否|支持的属性见下表，可识别换行符。|App-nvue 2.1.5+、微信小程序、H5、App、百度小程序、支付宝小程序|
|label|Add a label next to the marker |Object|No|The supported properties are shown in the following table, which can recognize line breaks. |App-nvue 2.1.5+, WeChat MiniApp, H5, App, Baidu MiniApp, Alipay MiniApp|
|anchor|经纬度在标注图标的锚点，默认底边中点|Object|否|{x, y}，x表示横向(0-1)，y表示竖向(0-1)。{x: .5, y: 1} 表示底边中点|App-nvue 2.1.5+、微信小程序、H5、百度小程序、京东小程序|
|anchor|The latitude and longitude is the anchor point of the label icon. The default bottom edge midpoint |Object|No|{x, y}, x means horizontal (0-1), y means vertical (0-1). {x: .5, y: 1} represents the midpoint of the bottom edge|App-nvue 2.1.5+, WeChat MiniApp, H5, Baidu MiniApp, Jingdong MiniApp|
|clusterId|自定义点聚合簇效果时使用|Number|否||App-nvue 3.1.0+、微信小程序|
|clusterId|Use |Number|No||App-nvue 3.1.0+, WeChat MiniApp|
|customCallout|自定义气泡窗口|Object|否||App-nvue 2.1.5+、微信小程序、支付宝小程序|
|customCallout|Custom Bubble Window|Object|No||App-nvue 2.1.5+, WeChat MiniApp, Alipay MiniApp|
|aria-label|无障碍访问，（属性）元素的额外描述|String|否||App-nvue 3.1.0+、微信小程序|
|aria-label|Accessibility, additional description of (attribute) element|String|No||App-nvue 3.1.0+, WeChat MiniApp|

**marker 上的气泡 callout**
**Bubble callout on marker**

|属性|说明|类型|平台差异说明|
|Properties|Description|Type|Platform Difference Description|
|:-|:-|:-|:-|
|content|文本|String|App-nvue 2.1.5+、微信小程序、H5、百度小程序、京东小程序|
|content|Text|String|App-nvue 2.1.5+, WeChat MiniApp, H5, Baidu MiniApp, Jingdong MiniApp|
|color|文本颜色|String|App-nvue 2.1.5+、微信小程序、H5、百度小程序、京东小程序|
|color|Text color|String|App-nvue 2.1.5+, WeChat MiniApp, H5, Baidu MiniApp, Jingdong MiniApp|
|fontSize|文字大小|Number|App-nvue 2.1.5+、微信小程序、H5、百度小程序、京东小程序|
|fontSize|Text Size|Number|App-nvue 2.1.5+, WeChat MiniApp, H5, Baidu MiniApp, Jingdong MiniApp|
|borderRadius|callout边框圆角|Number|App-nvue 2.1.5+、微信小程序、H5、百度小程序、京东小程序|
|borderRadius|callout border rounded corners|Number|App-nvue 2.1.5+, WeChat MiniApp, H5, Baidu MiniApp, Jingdong MiniApp|
|borderWidth|边框宽度|Number|京东小程序|
|borderWidth|Border width|Number|JD MiniApp|
|borderColor|边框颜色|String|京东小程序|
|borderColor|border color|String|JD MiniApp|
|bgColor|背景色|String|App-nvue 2.1.5+、微信小程序、H5、百度小程序、京东小程序|
|bgColor|Background Color|String|App-nvue 2.1.5+, WeChat MiniApp, H5, Baidu MiniApp, Jingdong MiniApp|
|padding|文本边缘留白|Number|App-nvue 2.1.5+、微信小程序、H5、百度小程序、京东小程序|
|padding|Leave the text margins|Number|App-nvue 2.1.5+, WeChat MiniApp, H5, Baidu MiniApp, Jingdong MiniApp|
|display|'BYCLICK':点击显示; 'ALWAYS':常显|String|App-nvue 2.1.5+、微信小程序、H5、百度小程序、京东小程序|
|display|'BYCLICK':Click to display; 'ALWAYS':Always display|String|App-nvue 2.1.5+, WeChat MiniApp, H5, Baidu MiniApp, Jingdong MiniApp|
|textAlign|文本对齐方式。有效值: left, right, center|String|App-nvue 2.1.5+、微信小程序、百度小程序、京东小程序|
|textAlign|Text alignment. Valid values: left, right, center|String|App-nvue 2.1.5+, WeChat MiniApp, Baidu MiniApp, Jingdong MiniApp|

**marker 上的标签 label**
**label on marker**

|属性|说明|类型|平台差异说明|
|Properties|Description|Type|Platform Difference Description|
|:-|:-|:-|:-|
|content|文本|String||
|content|Text|String||
|color|文本颜色|String|App-nvue 2.1.5+、微信小程序、H5、百度小程序、支付宝小程序|
|color|Text color|String|App-nvue 2.1.5+, WeChat MiniApp, H5, Baidu MiniApp, Alipay MiniApp|
|fontSize|文字大小|Number|App-nvue 2.1.5+、微信小程序、H5、百度小程序、支付宝小程序|
|fontSize|Text Size|Number|App-nvue 2.1.5+, WeChat MiniApp, H5, Baidu MiniApp, Alipay MiniApp|
|x|label的坐标，原点是 marker 对应的经纬度|Number|H5、百度小程序|
The coordinates of |x|label, the origin is the latitude and longitude corresponding to the marker|Number|H5, Baidu MiniApp|
The coordinates of |x|label, the origin is the latitude and longitude corresponding to the marker|Number|H5, Baidu MiniApp|
|y|label的坐标，原点是 marker 对应的经纬度|Number|H5、百度小程序|
The coordinates of |y|label, the origin is the latitude and longitude corresponding to the marker|Number|H5, Baidu MiniApp|
The coordinates of |y|label, the origin is the latitude and longitude corresponding to the marker|Number|H5, Baidu MiniApp|
|anchorX|label的坐标，原点是 marker 对应的经纬度|Number|App-nvue 2.1.5+、微信小程序|
The coordinates of |anchorX|label, the origin is the latitude and longitude corresponding to the marker|Number|App-nvue 2.1.5+, WeChat MiniApp|
The coordinates of |anchorX|label, the origin is the latitude and longitude corresponding to the marker|Number|App-nvue 2.1.5+, WeChat MiniApp|
|anchorY|label的坐标，原点是 marker 对应的经纬度|Number|App-nvue 2.1.5+、微信小程序|
The coordinates of |anchorY|label, the origin is the latitude and longitude corresponding to the marker|Number|App-nvue 2.1.5+, WeChat MiniApp|
The coordinates of |anchorY|label, the origin is the latitude and longitude corresponding to the marker|Number|App-nvue 2.1.5+, WeChat MiniApp|
|borderWidth|边框宽度|Number|微信小程序、百度小程序|
|borderWidth|Border width|Number|WeChat MiniApp, Baidu MiniApp|
|borderColor|边框颜色|String|微信小程序、百度小程序|
|borderColor|Border color|String|WeChat MiniApp, Baidu MiniApp|
|borderRadius|边框圆角|Number|App-nvue 2.1.5+、微信小程序、百度小程序、支付宝小程序|
|borderRadius|Border rounded corners|Number|App-nvue 2.1.5+, WeChat MiniApp, Baidu MiniApp, Alipay MiniApp|
|bgColor|背景色|String|App-nvue 2.1.5+、微信小程序、百度小程序、支付宝小程序|
|bgColor|Background Color|String|App-nvue 2.1.5+, WeChat MiniApp, Baidu MiniApp, Alipay MiniApp|
|padding|文本边缘留白|Number|App-nvue 2.1.5+、微信小程序、百度小程序、支付宝小程序|
|padding|Leave the text margins|Number|App-nvue 2.1.5+, WeChat MiniApp, Baidu MiniApp, Alipay MiniApp|
|textAlign|文本对齐方式。有效值: left, right, center|String|App-nvue 2.1.5+、微信小程序、百度小程序|
|textAlign|Text alignment. Valid values: left, right, center|String|App-nvue 2.1.5+, WeChat MiniApp, Baidu MiniApp|
|customCallout|自定义气泡窗口|Object|App暂时不支持、微信小程序|
|customCallout|Custom bubble window|Object|App is temporarily not supported, WeChat MiniApp|
|aria-label|无障碍访问，（属性）元素的额外描述|String|App-nvue 3.1.0+、微信小程序|
|aria-label|Accessibility, additional description of (attribute) element|String|App-nvue 3.1.0+, WeChat MiniApp|
|joinCluster|是否参与点聚合|Boolean|App-nvue 3.1.0+、微信小程序|
|joinCluster| Whether to participate in point aggregation|Boolean|App-nvue 3.1.0+, WeChat MiniApp|

### 点聚合
### Point Aggregation

当地图上需要展示的标记点 marker 过多时，可能会导致界面上 marker 出现压盖，展示不全，并导致整体性能变差。针对此类问题，推出点聚合能力。
When there are too many markers that need to be displayed on the map, it may cause the markers on the interface to be covered, incompletely displayed, and lead to poor overall performance. In response to such problems, the point aggregation capability is introduced.

使用流程如下：
The usage process is as follows:

[MapContext.initMarkerCluster](/api/location/map?id=createmapcontext) 对聚合点进行初始化配置（可选）；
[MapContext.initMarkerCluster](/api/location/map?id=createmapcontext) Initialize and configure aggregation points (optional);
[MapContext.addMarkers](/api/location/map?id=createmapcontext) 指定参与聚合的 marker；
[MapContext.addMarkers](/api/location/map?id=createmapcontext) specifies the markers participating in the aggregation;
MapContext.on('markerClusterCreate', callback) 触发时，通过 [MapContext.addMarkers](/api/location/map?id=createmapcontext) 更新聚合簇的样式 （可选）；
When MapContext.on('markerClusterCreate', callback) is triggered, update the style of the aggregation cluster through [MapContext.addMarkers](/api/location/map?id=createmapcontext) (optional);
[MapContext.removeMarkers](/api/location/map?id=createmapcontext) 移除参与聚合的 marker；
[MapContext.removeMarkers](/api/location/map?id=createmapcontext) remove markers participating in aggregation;


**polyline**

指定一系列坐标点，从数组第一项连线至最后一项
Specify a series of coordinate points, connecting from the first item of the array to the last item

|属性|说明|类型|必填|备注|平台差异说明|
|Attribute|Description|Type|Required|Remarks|Platform Difference Description|
|:-|:-|:-|:-|:-|:-|
|points|经纬度数组|Array|是|[{latitude: 0, longitude: 0}]||
|points|Array of latitude and longitude |Array| Yes |[{latitude: 0, longitude: 0}]||
|color|线的颜色|String|否|8位十六进制表示，后两位表示alpha值，如：#0000AA||
|color|Line color|String|No|8-digit hexadecimal representation, the last two digits represent the alpha value, such as: #0000AA||
|width|线的宽度|Number|否|||
|width|width of line |Number|No |||
|dottedLine|是否虚线|Boolean|否|默认false|App-nvue 2.1.5+、微信小程序、H5、百度小程序、支付宝小程序、京东小程序|
|dottedLine|Dotted Line|Boolean|No|Default false|App-nvue 2.1.5+, WeChat MiniApp, H5, Baidu MiniApp, Alipay MiniApp, Jingdong MiniApp|
|arrowLine|带箭头的线|Boolean|否|默认false，微信小程序开发者工具暂不支持该属性|App-nvue 2.1.5+、微信小程序、百度小程序、京东小程序|
|arrowLine|Line with arrows|Boolean|No|The default is false, this property is not supported by the WeChat MiniApp developer tools|App-nvue 2.1.5+, WeChat MiniApp, Baidu MiniApp, Jingdong MiniApp|
|arrowIconPath|更换箭头图标|String|否|在arrowLine为true时生效|App-nvue 2.1.5+、微信小程序、百度小程序、京东小程序|
|arrowIconPath|Replace arrow icon|String|No|Effective when arrowLine is true|App-nvue 2.1.5+, WeChat MiniApp, Baidu MiniApp, Jingdong MiniApp|
|borderColor|线的边框颜色|String|否||微信小程序、H5、百度小程序、京东小程序|
|borderColor|Line border color|String|No||WeChat MiniApp, H5, Baidu MiniApp, Jingdong MiniApp|
|borderWidth|线的厚度|Number|否||微信小程序、H5、百度小程序、京东小程序|
|borderWidth|Line thickness|Number|No||WeChat MiniApp, H5, Baidu MiniApp, Jingdong MiniApp|
|colorList|彩虹线|Array|false|存在时忽略 color 值|App-nvue 3.1.0+、微信小程序|
|colorList|Rainbow line|Array|false|Ignore color value when it exists|App-nvue 3.1.0+, WeChat MiniApp|
|level|压盖关系，默认为 abovelabels|String|false||微信小程序|
|level|overlapping relationship, the default is abovelabels|String|false||WeChat MiniApp|

 **注意事项**
 **Precautions**

- App-nvue 当 arrowLine 为 true 时，显示的是带箭头的图片拼接的线 color 值会被忽略，替换箭头图片的方法[参考文档](https://ask.dcloud.net.cn/article/37901)
- App-nvue When arrowLine is true, the line color value of the image splicing with arrows will be ignored, and the method of replacing arrow images [reference document](https://ask.dcloud.net.cn/article/ 37901)

**polygon**<br>
指定一系列坐标点，根据 points 坐标数据生成闭合多边形
Specify a series of coordinate points to generate a closed polygon based on the coordinate data of points

|属性|说明|类型|必填|备注
|Attribute|Description|Type|Required|Remarks
|:--|:--|:--|:--|:--|
|points|经纬度数组|array|是|[{latitude: 0, longitude: 0}]
|points|array of latitude and longitude |array| Yes |[{latitude: 0, longitude: 0}]
|strokeWidth|描边的宽度|Number|否||
|strokeWidth|Width of the stroke|Number|No||
|strokeColor|描边的颜色|String|否|十六进制|
|strokeColor|The color of the stroke |String|No|hex|
|fillColor|填充颜色|String|否|十六进制|
|fillColor|fill color|String|no|hex|
|zIndex|设置多边形 Z 轴数值|Number|否||
|zIndex|Set the polygon Z-axis value|Number|No||
|level|压盖关系，默认为 abovelabels|String|false|微信小程序|
|level|overlapping relationship, the default is abovelabels|String|false|WeChat MiniApp|

**circles**

在地图上显示圆
Show circle on map

|属性|说明|类型|必填|备注|
|Attribute|Description|Type|Required|Remarks|
|:-|:-|:-|:-|:-|
|latitude|纬度|Number|是|浮点数，范围 -90 ~ 90|
|latitude|latitude|Number| Yes |float, range -90 ~ 90|
|longitude|经度|Number|是|浮点数，范围 -180 ~ 180|
|longitude|longitude|Number| Yes |float, range -180 ~ 180|
|color|描边的颜色|String|否|8位十六进制表示，后两位表示alpha值，如：#000000AA；#00000为十六进制|
|color|The color of the stroke|String|No|8-digit hexadecimal representation, the last two digits represent the alpha value, such as: #000000AA; #00000%E4%B8%BA%E5%8D%81%E5%85 %AD%E8%BF%9B%E5%88%B6|
|fillColor|填充颜色|String|否|8位十六进制表示，后两位表示alpha值，如：#000000AA；#00000为十六进制|
|fillColor|Fill Color|String|No|8-digit hexadecimal representation, the last two digits represent the alpha value, such as: #000000AA; #00000%E4%B8%BA%E5%8D%81%E5%85%AD %E8%BF%9B%E5%88%B6|
|radius|半径|Number|是||
|radius|Radius|Number|Yes||
|strokeWidth|描边的宽度|Number|否|&nbsp;|
|strokeWidth|Width of the stroke|Number|No|&nbsp;|
|level|压盖关系，默认为 abovelabels|String|false|微信小程序|
|level|overlapping relationship, the default is abovelabels|String|false|WeChat MiniApp|

**controls**

在地图上显示控件，控件不随着地图移动
Display controls on the map, the controls do not move with the map

|属性|说明|类型|必填|备注|
|Attribute|Description|Type|Required|Remarks|
|:-|:-|:-|:-|:-|
|id|控件id|Number|否|在控件点击事件回调会返回此id|
|id|Control id|Number|No|This id will be returned in the control click event callback|
|position|控件在地图的位置|Object|是|控件相对地图位置|
|position|The position of the control on the map |Object|Yes |The position of the control relative to the map|
|iconPath|显示的图标|String|是|项目目录下的图片路径，支持相对路径写法，以'/'开头则表示相对项目根目录；也支持临时路径|
|iconPath|The displayed icon|String| is the image path under the project directory, which supports the relative path writing, starting with '/' means the relative project root directory; also supports the temporary path|
|clickable|是否可点击|Boolean|否|默认不可点击|
|clickable|Clickable|Boolean|No|Not clickable by default|

**position**

|属性|说明|类型|必填|备注|
|Attribute|Description|Type|Required|Remarks|
|:-|:-|:-|:-|:-|
|left|距离地图的左边界多远|Number|否|默认为0|
|left| How far from the left border of the map |Number|No |Default is 0|
|top|距离地图的上边界多远|Number|否|默认为0|
|top|How far from the top border of the map|Number|No|default is 0|
|width|控件宽度|Number|否|默认为图片宽度|
|width|Control width|Number|No|Default image width|
|height|控件高度|Number|否|默认为图片高度|
|height|Control height|Number|No|Default image height|

地图组件的经纬度必填，如果不填经纬度则默认值是北京的经纬度。
The latitude and longitude of the map component is required. If the latitude and longitude is not filled in, the default value is the latitude and longitude of Beijing.

**示例** [查看示例](https://hellouniapp.dcloud.net.cn/pages/component/map/map)
**Example** [View Example](https://hellouniapp.dcloud.net.cn/pages/component/map/map)

::: preview https://hellouniapp.dcloud.net.cn/pages/component/map/map
> Template
```vue
<template>
	<view>
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" :markers="covers">
				</map>
			</view>
		</view>
	</view>
</template>
```
> Script
```vue
<script>
export default {
	data() {
		return {
			id:0, // 使用 marker点击事件 需要填写id
			title: 'map',
			latitude: 39.909,
			longitude: 116.39742,
			covers: [{
				latitude: 39.909,
				longitude: 116.39742,
				iconPath: '../../../static/location.png'
			}, {
				latitude: 39.90,
				longitude: 116.39,
				iconPath: '../../../static/location.png'
			}]
		}
	},
	methods: {

	}
}
</script>
```
:::

## App平台地图服务商差异
## App platform map service provider differences

### Map 地图组件
### Map map component

|属性								|说明																		|高德是否支持	|google地图是否支持		|
|Properties |Description |Whether AutoNavi supports |Does Google Maps support |
|:----							|:----																	|:----				|:----								|
|subkey							|个性化地图使用的key											|不支持				|不支持								|
|subkey |Key used for personalized map |Not supported |Not supported |
|show-scale					|显示比例尺															|已支持				|不支持								|
|show-scale |Show scale |Supported |Not supported |
|enable-poi					|是否展示 POI 点													|已支持				|不支持								|
|enable-poi |Whether to display POI points |Supported |Not supported |
|labeltap						|点击label时触发													|已支持				|Android支持iOS不支持	|
|labeltap |Triggered when the label is clicked |Supported |Android supported iOS not supported |
|poitap							|点击地图poi点时触发											|已支持				|Android不支持 iOS支持	|
|poitap |Triggered when the map poi point is clicked |Supported |Android not supported iOS supported |

### marker

|属性					|说明																	|高德是否支持	|google地图是否支持		|
|Properties |Description |Whether AutoNavi supports |Does Google Maps support |
|:----				|:----																|:----				|:----								|
|label				|为标记点旁边增加标签										|已支持				|Android支持 iOS不支持	|
|label |Add a label next to a marker |Supported |Android Supported iOS Not Supported |

### marker 上的气泡 callout
### Bubble callout on marker

|属性					|说明																			|高德是否支持	|google地图是否支持							|
|Properties |Description |Whether AutoNavi supports |Does Google Maps support |
|:----				|:----																		|:----				|:----													|
|display			|'BYCLICK':点击显示; 'ALWAYS':常显					|已支持				|Android支持iOS只支持 'BYCLICK'	|
|display |'BYCLICK':Click to display; 'ALWAYS':Always display |Supported |Android supports iOS only supports 'BYCLICK' |

### marker 上的自定义气泡 customCallout
### custom bubble on marker customCallout

|属性		|说明															|高德是否支持	|google地图是否支持							|
|Properties |Description |Whether AutoNavi supports |Does Google Maps support |
|:----	|:----														|:----				|:----													|
|display|'BYCLICK':点击显示; 'ALWAYS':常显	|已支持				|Android支持iOS只支持 'BYCLICK'	|
|display|'BYCLICK':Click to display; 'ALWAYS':Always display |Supported |Android supports iOS only supports 'BYCLICK' |

### polyline

|属性					|说明					|高德是否支持	|google地图是否支持			|
|Properties |Description |Whether AutoNavi supports |Does Google Maps support |
|:----				|:----				|:----				|:----									|
|colorList		|彩虹线				|已支持				|Android不支持 iOS支持		|
|colorList |Rainbow Lines |Supported |Android Not Supported iOS Supported |
|dottedLine		|是否虚线			|已支持				|Android已支持 iOS不支持	|
|dottedLine |Dotted Line |Supported |Android Supported iOS Not Supported |
|arrowLine		|带箭头的线		|已支持				|Android不支持 iOS支持		|
|arrowLine |Line with Arrows |Supported |Android Not Supported iOS Supported |
|arrowIconPath|更换箭头图标	|已支持				|Android不支持 iOS支持		|
|arrowIconPath|Change Arrow Icons |Supported |Android Not Supported iOS Supported |


map 组件相关操作的 JS API：[uni.createMapContext](api/location/map?id=createmapcontext)
JS API for map component related operations: [uni.createMapContext](api/location/map?id=createmapcontext)
nvue map 更换箭头图标格式参考: [https://ask.dcloud.net.cn/article/37901](https://ask.dcloud.net.cn/article/37901)
nvue map replacement arrow icon format reference: [https://ask.dcloud.net.cn/article/37901](https://ask.dcloud.net.cn/article/37901)

**注意事项**
**Precautions**

- 小程序和app-vue中，`<map>` 组件是由引擎创建的原生组件，它的层级是最高的，不能通过 z-index 控制层级。在`<map>`上绘制内容，可使用组件自带的marker、controls等属性，也可以使用`<cover-view>`组件。App端还可以使用plus.nativeObj.view 或 subNVue 绘制原生内容，[参考](/component/native-component)。另外App端nvue文件不存在层级问题。从微信基础库2.8.3开始，支持map组件的同层渲染，不再有层级问题。
-In MiniApp and app-vue, the `<map>` component is a native component created by the engine, its level is the highest, and the level cannot be controlled by z-index. To draw content on `<map>`, you can use the marker, controls and other attributes that come with the component, or you can use the `<cover-view>` component. The App side can also use plus.nativeObj.view or subNVue to draw native content, [Reference](/component/native-component). In addition, there is no hierarchy problem in the nvue file on the App side. Starting from WeChat base library 2.8.3, the same layer rendering of map components is supported, and there are no more hierarchical problems.
- App端nvue文件的map和小程序拉齐度更高。vue里的map则与plus.map功能一致，和小程序的地图略有差异。**App端使用map推荐使用nvue。**
- The map and MiniApp of the nvue file on the App side are more aligned. The map in vue is the same as the plus.map function, which is slightly different from the map of the MiniApp. **It is recommended to use nvue when using map on the App side. **
- App端使用到本地图像的话，打包前需要设置资源为释放模式，在manifest文件内app-plus新增runmode节点，设置值为liberate。
- If the app uses local images, you need to set the resource to release mode before packaging. Add a runmode node to app-plus in the manifest file, and set the value to liberate.
- 在涉及层级问题的小程序中和app-vue中，请勿在 scroll-view、swiper、picker-view、movable-view 中使用 `<map>` 组件。
- Do not use `<map>` components in scroll-view, swiper, picker-view, movable-view in MiniApp and app-vue that involve hierarchy issues.
- 小程序和 app-vue 中，css 动画对 `<map>` 组件无效。
- In MiniApp and app-vue, css animation does not work for `<map>` component.
- map 组件使用的经纬度是国测局坐标，调用 uni.getLocation 接口需要指定 type 为 gcj02。
- The latitude and longitude used by the map component are the coordinates of the National Survey Bureau. When calling the uni.getLocation interface, you need to specify the type as gcj02.
- `<map>` 组件在不同平台的底层引擎是不同的：微信小程序为腾讯地图；H5为腾讯地图或谷歌地图或高德地图；App、支付宝（中国大陆地区版本）小程序为高德地图；百度小程序、快应用为百度地图。app-vue也可以使用百度地图，在manifest中配置，打包后生效，但app-nvue只支持高德地图。另外选择地图、查看地图位置的API也仅支持高德地图。App端如无特殊必要，建议使用高德地图。
- The underlying engine of the `<map>` component is different on different platforms: WeChat MiniApp is Tencent Map; H5 is Tencent Map or Google Map or AutoNavi map; App, Alipay (mainland China version) MiniApp is AutoNavi Maps; Baidu MiniApp and QuickApp are Baidu Maps. App-vue can also use Baidu map, configure it in the manifest, and take effect after packaging, but app-nvue only supports Gaode map. In addition, the API for selecting a map and viewing the map location only supports AutoNavi maps. If there is no special need on the App side, it is recommended to use the AutoNavi map.
- map 组件默认的api是参考微信小程序的，如需要使用plus.map，可以通过`$getAppMap`获取原生地图对象，[详见](/api/location/map)。注意nvue的map组件不是plus.map对象，无法使用`$getAppMap`
- The default api of the map component refers to the WeChat MiniApp. If you need to use plus.map, you can obtain the native map object through `$getAppMap`, [see details](/api/location/map). Note that nvue's map component is not a plus.map object and cannot use `$getAppMap`
- H5 端获取定位信息，需要部署在 **https** 服务上，本地预览（localhost）仍然可以使用 http 协议。
- To obtain positioning information on the H5 side, it needs to be deployed on the **https** service. The local preview (localhost) can still use the http protocol.
- 无GPS模块或GPS无信号的 PC 设备使用 Chrome 浏览器的时候，位置信息是连接谷歌服务器获取的，国内用户可能获取位置信息失败。
- When using the Chrome browser on a PC device without a GPS module or with no GPS signal, the location information is obtained by connecting to the Google server, and domestic users may fail to obtain the location information.
- App 端使用地图组件需要**向高德或百度等三方服务商申请SDK资质，获取AppKey，打包时需要在manifest文件中勾选相应模块，在SDK配置中填写Appkey。注意申请包名和打包时的包名需匹配一致，证书信息匹配**。在manifest可视化界面有详细申请指南。
- To use the map component on the app side, you need to apply for SDK qualification from third-party service providers such as AutoNavi or Baidu to obtain the AppKey. When packaging, you need to check the corresponding module in the manifest file, and fill in the Appkey in the SDK configuration. Note that the application package name must match the package name when packaging, and the certificate information must match **. There are detailed application guidelines in the manifest visual interface.
- H5 端使用地图和定位相关，需要在 [manifest.json](/collocation/manifest?id=h5sdkconfig) 内配置腾讯或谷歌等三方地图服务商申请的秘钥（key）。高德地图需要额外配置 securityJsCode 或 serviceHost，具体参考[高德地图文档](https://lbs.amap.com/api/jsapi-v2/guide/abc/prepare)。
- The use of maps on the H5 side is related to positioning. It is necessary to configure the secret key (key) applied for by a third-party map service provider such as Tencent or Google in [manifest.json](/collocation/manifest?id=h5sdkconfig). AutoNavi map requires additional configuration of securityJsCode or serviceHost. For details, please refer to [Amap Documentation](https://lbs.amap.com/api/jsapi-v2/guide/abc/prepare).
- ios nvue Color 不支持 ARGB 十六进制，使用 rgba(r,g,b,a) 代替
- ios nvue Color does not support ARGB hex, use rgba(r,g,b,a) instead

##### FAQ

Q：应用中使用了 `<map>` 组件，打包为App时，提示缺少权限模块怎么办？
Q: What should I do if the `<map>` component is used in the app and it is packaged as an app and it prompts that the permission module is missing?
A：App端原生地图，依赖第三方的 SDK，因此打包移动应用时，需要在manifest中勾选相关的权限并填写 key 信息。详见：[https://ask.dcloud.net.cn/article/29](https://ask.dcloud.net.cn/article/29)
A: The native map on the App side relies on a third-party SDK. Therefore, when packaging a mobile application, you need to check the relevant permissions in the manifest and fill in the key information. For details, see: [https://ask.dcloud.net.cn/article/29](https://ask.dcloud.net.cn/article/29)

Q：国外应用想使用谷歌地图/google地图怎么办？
Q: What if foreign applications want to use Google Maps/Google Maps?
A: App 3.4+ 已支持 Google 地图， App 3.4 以下版本使用下面的方案
A: App 3.4+ already supports Google Maps, App 3.4 and below use the following scheme
 1. 可以在web-view下调用谷歌的web地图
 1. You can call Google's web map under web-view
 2. 可以写一个原生插件封装谷歌原生地图，具体参考uni-app插件市场的原生插件开发教程。插件市场已有三方写好的[地图插件](https://ext.dcloud.net.cn/search?q=%E8%B0%B7%E6%AD%8C%E5%9C%B0%E5%9B%BE)。
 2. You can write a native plugin to encapsulate Google's native map. For details, refer to the native plugin development tutorial in the uni-app plugin market. The plugin market has already written [map plugin](https://ext.dcloud.net.cn/search?q=%E8%B0%B7%E6%AD%8C%E5%9C%B0%E5% 9B%BE).

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
  * 谷歌地图：按量收费，每月赠送一定金额。
  * Google Maps: Charge by volume, and give a certain amount every month.
  * 小程序平台内置地图：无需关心地图服务商，免费使用，无配额限制。
  *The built-in map of the MiniApp platform: no need to care about the map service provider, it is free to use, and there is no quota limit.