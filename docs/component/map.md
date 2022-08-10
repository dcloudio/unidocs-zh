#### map

地图组件。
Map component.

地图组件用于展示地图，而定位API只是获取坐标，请勿混淆两者。
Map components are used to display the map, while positioning API is just to get the coordinates. Pay attention not to mixing them up.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√|√|√|√|1.63+|1.9.0+|√|x|x|√|

**地图服务商说明**

|地图服务商|App|H5|微信小程序|
|:-:|:-:|:-:|:-:|
|高德|√|||
|Goolge|3.4+|3.2.10+||
|腾讯||√|√|


**属性说明**
**Attribute description**

|属性名|类型|默认值|说明|平台差异说明|
| Attribute name| Type| Defaults| Instruction| Platform difference description|
|:-|:-|:-|:-|:-|
|longitude|Number||中心经度||
| longitude| Number| | Center longitude| |
|latitude|Number||中心纬度||
| latitude| Number| | Center latitude| |
|scale|Number|16|缩放级别，取值范围为3-20|高德地图缩放比例与微信小程序不同|
|theme|String|normal|主题（satellite 或 normal）只在初始化时有效，不能动态变更（仅Android支持）|京东小程序|
|min-scale|Number|3|最小缩放级别|App-nvue 3.1.0+、微信小程序2.13+|
|max-scale|Number|20|最大缩放级别|App-nvue 3.1.0+、微信小程序2.13+|
|layer-style|Number/String|1|个性化地图|App-nvue 3.1.0+、微信小程序2.13+|
|markers|Array||标记点||
| markers| Array| | Mark point| |
|polyline|Array||路线|飞书小程序不支持|
|circles|Array||圆||
| circles| Array| | Circle| |
|controls|Array||控件||
| controls| Array| | Control| |
|include-points|Array||缩放视野以包含所有给定的坐标点|App-nvue 2.1.5+、微信小程序、H5、百度小程序、支付宝小程序、京东小程序|
|enable-3D|Boolean|false|是否显示3D楼块|App-nvue 2.1.5+、微信小程序2.3.0|
|show-compass|Boolean|false|是否显示指南针|App-nvue 2.1.5+、微信小程序2.3.0|
|enable-zoom|Boolean|true|是否支持缩放|App-nvue 2.1.5+、微信小程序2.3.0|
|enable-scroll|Boolean|true|是否支持拖动|App-nvue 2.1.5+、微信小程序2.3.0|
|enable-rotate|Boolean|false|是否支持旋转|App-nvue 2.1.5+、微信小程序2.3.0|
|enable-overlooking|Boolean|false|是否开启俯视|App-nvue 2.1.5+、微信小程序2.3.0|
|enable-satellite|Boolean|false|是否开启卫星图|App-nvue 2.1.5+、微信小程序2.7.0|
|enable-traffic|Boolean|false|是否开启实时路况|App-nvue 2.1.5+、微信小程序2.7.0|
|enable-poi|Boolean|false|是否展示 POI 点|App-nvue 3.1.0+|
| enable-poi| Boolean| false| Whether to show POI points| App-nvue 3.1.0+|
|enable-building|Boolean|false|是否展示建筑物|App-nvue 3.1.0+ 支持 (**废除原enable-3D属性 高德地图默认开启建筑物就是3D无法设置**)|
| enable-building| Boolean| false| Whether to display the building?| App-nvue 3.1.0+ is supported (**Abolish the original enable-3D attribute. The default open building of AutoNavi is that 3D cannot be set**)|
|show-location|Boolean||显示带有方向的当前定位点|微信小程序、H5、百度小程序、支付宝小程序、京东小程序|
|polygons|Array.`<polygon>`||多边形|App-nvue 2.1.5+、App-vue 3.4.3+、H5 3.4.3+、微信小程序、百度小程序、支付宝小程序|
|enable-indoorMap|Boolean|false|是否展示室内地图|App-nvue 3.1.0+|
| enable-indoorMap| Boolean| false| Whether to display the indoor map?| App-nvue 3.1.0+|
|@markertap|EventHandle||点击标记点时触发，e.detail = {markerId}|App-nvue 2.3.3+、H5、微信小程序、支付宝小程序 （App和H5平台需要指定 marker 对象属性 id）|
|@labeltap|EventHandle||点击label时触发，e.detail = {markerId} |微信小程序2.9.0|
|@callouttap|EventHandle||点击标记点对应的气泡时触发，e.detail = {markerId}||
| @callouttap| EventHandle| | Triggered when click on the bubble according to the marker, e.detail = {markerId}| |
|@controltap|EventHandle||点击控件时触发，e.detail = {controlId}||
| @controltap| EventHandle| | Triggered when click on the control, e.detail = {controlId}| |
|@regionchange|EventHandle||视野发生变化时触发|微信小程序、H5、百度小程序、支付宝小程序、京东小程序|
|@tap|EventHandle||点击地图时触发; App-nvue、微信小程序2.9支持返回经纬度||
|@updated|EventHandle||在地图渲染更新完成时触发|微信小程序、H5、百度小程序|
|@anchorpointtap|EventHandle||点击定位标时触发，e.detail = {longitude, latitude}|App-nvue 3.1.0+、微信小程序2.13+|
|@poitap|EventHandle||点击地图poi点时触发，e.detail = {name, longitude, latitude}|微信小程序2.3.0+|

**注意** 
**Notice**

- `<map>` 组件的宽/高推荐写直接量，比如：750rpx，不要设置百分比值。
- The width/height of the `<map>` component is recommended to be written directly, such as 750rpx. Do not set a percentage value.
- 谷歌地图使用 `wgs84` 坐标，其他地图使用 `gcj02` 坐标，用错坐标类型会显示偏移。
- App平台 `layer-style` 属性需要在地图服务商后台创建，值设置为高德后台申请的字符串，[详情](https://developer.amap.com/api/android-sdk/guide/create-map/custom)
- The attribute of `layer-style` on the App platform needs to be created in the background of the map service provider, and the value is set to the string applied by AutoNavi background. [Details](https://developer.amap.com/api/android-sdk/guide/create-map/custom)

### 近期新增功能
### Recently added features
1. 支持点聚合，适用于marker过多场景。
1. Marker Cluster is supported, suitable for scenes with overmuch marker.
2. 支持彩虹蚯蚓线，常用于路线规划场景。
2. Rainbow earthworm line is supported, often used in route planning scenes.
3. 覆盖物支持调整与其它地图元素的压盖关系。
3. The covers support adjusting the overlapping relationship with other map elements.
4. 支持marker（小车）平移动画，适用于轨迹回放场景。
4. marker (trolley) translation animation is supported, suitable for scenes of trajectory playback.

**markers**

标记点用于在地图上显示标记的位置
Markers are used to show the location of markers on the map

|属性|说明|类型|必填|备注|平台差异说明|
| Attribute| Instruction| Type| Required| Remark| Platform difference description|
|:-|:-|:-|:-|:-|:-|
|id|标记点id|Number|是|marker点击事件回调会返回此id。建议为每个marker设置上Number类型id，保证更新marker时有更好的性能。最大限制9位数||
| id| Marker id| Number| Yes| Callback marker click event will return this id. It is recommended to set the Number type id for each marker to ensure better performance when updating the marker. Maximum limit is 9 digits| |
|latitude|纬度|Number|是|浮点数，范围 -90 ~ 90||
| latitude| Latitude| Number| Yes| Floating number, ranging from -90 ~ 90| |
|longitude|经度|Number|是|浮点数，范围 -180 ~ 180||
| longitude| Longitude| Number| Yes| Floating number, ranging from -180 ~ 180| |
|title|标注点名|String|否|点击时显示，callout存在时将被忽略|App-nvue 2.1.5+、微信小程序、H5、支付宝小程序、百度小程序、京东小程序|
|iconPath|显示的图标|String|是|项目目录下的图片路径，支持相对路径写法，以'/'开头则表示相对小程序根目录；也支持临时路径||
|rotate|旋转角度|Number|否|顺时针旋转的角度，范围 0 ~ 360，默认为 0|App-nvue 2.1.5+、微信小程序、支付宝小程序、百度小程序、京东小程序|
|alpha|标注的透明度|Number|否|默认1，无透明，范围 0 ~ 1|App-nvue 2.1.5+、微信小程序、支付宝小程序、百度小程序、京东小程序|
|width|标注图标宽度|Number|否|默认为图片实际宽度|App-nvue 2.1.5+、微信小程序、H5、支付宝小程序、百度小程序、京东小程序|
|height|标注图标高度|Number|否|默认为图片实际高度|App-nvue 2.1.5+、微信小程序、H5、支付宝小程序、百度小程序、京东小程序|
|callout|自定义标记点上方的气泡窗口|Object|否|支持的属性见下表，可识别换行符。|App-nvue 2.1.5+、微信小程序、支付宝小程序、百度小程序、京东小程序|
|label|为标记点旁边增加标签|Object|否|支持的属性见下表，可识别换行符。|App-nvue 2.1.5+、微信小程序、H5、App、百度小程序、支付宝小程序|
|anchor|经纬度在标注图标的锚点，默认底边中点|Object|否|{x, y}，x表示横向(0-1)，y表示竖向(0-1)。{x: .5, y: 1} 表示底边中点|App-nvue 2.1.5+、微信小程序、H5、百度小程序、京东小程序|
|clusterId|自定义点聚合簇效果时使用|Number|否||App-nvue 3.1.0+、微信小程序|
|customCallout|自定义气泡窗口|Object|否||App-nvue 2.1.5+、微信小程序、支付宝小程序|
|aria-label|无障碍访问，（属性）元素的额外描述|String|否||App-nvue 3.1.0+、微信小程序|

**marker 上的气泡 callout**
**callout on marker**

|属性|说明|类型|平台差异说明|
| Attribute| Instruction| Type| Platform difference description|
|:-|:-|:-|:-|
|content|文本|String|App-nvue 2.1.5+、微信小程序、H5、百度小程序、京东小程序|
|color|文本颜色|String|App-nvue 2.1.5+、微信小程序、H5、百度小程序、京东小程序|
|fontSize|文字大小|Number|App-nvue 2.1.5+、微信小程序、H5、百度小程序、京东小程序|
|borderRadius|callout边框圆角|Number|App-nvue 2.1.5+、微信小程序、H5、百度小程序、京东小程序|
|borderWidth|边框宽度|Number|京东小程序|
|borderColor|边框颜色|String|京东小程序|
|bgColor|背景色|String|App-nvue 2.1.5+、微信小程序、H5、百度小程序、京东小程序|
|padding|文本边缘留白|Number|App-nvue 2.1.5+、微信小程序、H5、百度小程序、京东小程序|
|display|'BYCLICK':点击显示; 'ALWAYS':常显|String|App-nvue 2.1.5+、微信小程序、H5、百度小程序、京东小程序|
|textAlign|文本对齐方式。有效值: left, right, center|String|App-nvue 2.1.5+、微信小程序、百度小程序、京东小程序|

**marker 上的标签 label**
**label on marker**

|属性|说明|类型|平台差异说明|
| Attribute| Instruction| Type| Platform difference description|
|:-|:-|:-|:-|
|content|文本|String||
| content| Text| String| |
|color|文本颜色|String|App-nvue 2.1.5+、微信小程序、H5、百度小程序、支付宝小程序|
|fontSize|文字大小|Number|App-nvue 2.1.5+、微信小程序、H5、百度小程序、支付宝小程序|
|x|label的坐标，原点是 marker 对应的经纬度|Number|H5、百度小程序|
|y|label的坐标，原点是 marker 对应的经纬度|Number|H5、百度小程序|
|anchorX|label的坐标，原点是 marker 对应的经纬度|Number|App-nvue 2.1.5+、微信小程序|
|anchorY|label的坐标，原点是 marker 对应的经纬度|Number|App-nvue 2.1.5+、微信小程序|
|borderWidth|边框宽度|Number|微信小程序、百度小程序|
|borderColor|边框颜色|String|微信小程序、百度小程序|
|borderRadius|边框圆角|Number|App-nvue 2.1.5+、微信小程序、百度小程序、支付宝小程序|
|bgColor|背景色|String|App-nvue 2.1.5+、微信小程序、百度小程序、支付宝小程序|
|padding|文本边缘留白|Number|App-nvue 2.1.5+、微信小程序、百度小程序、支付宝小程序|
|textAlign|文本对齐方式。有效值: left, right, center|String|App-nvue 2.1.5+、微信小程序、百度小程序|
|customCallout|自定义气泡窗口|Object|App暂时不支持、微信小程序|
|aria-label|无障碍访问，（属性）元素的额外描述|String|App-nvue 3.1.0+、微信小程序|
|joinCluster|是否参与点聚合|Boolean|App-nvue 3.1.0+、微信小程序|

### 点聚合
### Point aggregation

当地图上需要展示的标记点 marker 过多时，可能会导致界面上 marker 出现压盖，展示不全，并导致整体性能变差。针对此类问题，推出点聚合能力。
Too much markers to be displayed on the map may lead to the overlapping of markers on the interface, incomplete display and deteriorative overall performance. To address these problems, we introduced the Marker Cluster feature.

使用流程如下：
The use process is as follows:

[MapContext.initMarkerCluster](/api/location/map?id=createmapcontext) 对聚合点进行初始化配置（可选）；
[MapContext.addMarkers](/api/location/map?id=createmapcontext) 指定参与聚合的 marker；
MapContext.on('markerClusterCreate', callback) 触发时，通过 [MapContext.addMarkers](/api/location/map?id=createmapcontext) 更新聚合簇的样式 （可选）；
[MapContext.removeMarkers](/api/location/map?id=createmapcontext) 移除参与聚合的 marker；


**polyline**

指定一系列坐标点，从数组第一项连线至最后一项
Specify a series of coordinate points, connecting from the first item to the last item of the array

|属性|说明|类型|必填|备注|平台差异说明|
| Attribute| Instruction| Type| Required| Remark| Platform difference description|
|:-|:-|:-|:-|:-|:-|
|points|经纬度数组|Array|是|[{latitude: 0, longitude: 0}]||
| points| Latitude and longitude array| Array| Yes| \[{latitude: 0, longitude: 0}]| |
|color|线的颜色|String|否|8位十六进制表示，后两位表示alpha值，如：#0000AA||
| color| Line color| String| No| Expressed in 8-bit hexadecimal digits, with the last two digits representing the alpha value. For example: #0000AA| |
|width|线的宽度|Number|否|||
| width| Line width| Number| No| | |
|dottedLine|是否虚线|Boolean|否|默认false|App-nvue 2.1.5+、微信小程序、H5、百度小程序、支付宝小程序、京东小程序|
|arrowLine|带箭头的线|Boolean|否|默认false，微信小程序开发者工具暂不支持该属性|App-nvue 2.1.5+、微信小程序、百度小程序、京东小程序|
|arrowIconPath|更换箭头图标|String|否|在arrowLine为true时生效|App-nvue 2.1.5+、微信小程序、百度小程序、京东小程序|
|borderColor|线的边框颜色|String|否||微信小程序、H5、百度小程序、京东小程序|
|borderWidth|线的厚度|Number|否||微信小程序、H5、百度小程序、京东小程序|
|colorList|彩虹线|Array|false|存在时忽略 color 值|App-nvue 3.1.0+、微信小程序|
|level|压盖关系，默认为 abovelabels|String|false||微信小程序|

 **注意事项** 

- App-nvue 当 arrowLine 为 true 时，显示的是带箭头的图片拼接的线 color 值会被忽略，替换箭头图片的方法[参考文档](https://ask.dcloud.net.cn/article/37901) 
- App-nvue. When arrowLine is true, the color value of the spliced line of pictures with arrows will be ignored. For the method of replacing the arrow image, please refer to [Reference Document](https://ask.dcloud.net.cn/article/37901)

**polygon**<br>
指定一系列坐标点，根据 points 坐标数据生成闭合多边形
specifies a series of coordinate points, and generates closed polygons according to the coordinate data of points.

|属性|说明|类型|必填|备注
| Attribute| Instruction| Type| Required| Remark
|:--|:--|:--|:--|:--|
|points|经纬度数组|array|是|[{latitude: 0, longitude: 0}]
| points| Latitude and longitude array| array| Yes| \[{latitude: 0, longitude: 0}]
|strokeWidth|描边的宽度|Number|否||
| strokeWidth| Stroke width| Number| No| |
|strokeColor|描边的颜色|String|否|十六进制|
| strokeColor| Stroke color| String| No| Hexadecimal|
|fillColor|填充颜色|String|否|十六进制|
| fillColor| Fill color| String| No| Hexadecimal|
|zIndex|设置多边形 Z 轴数值|Number|否||
| zIndex| Set the polygon Z-axis value| Number| No| |
|level|压盖关系，默认为 abovelabels|String|false|微信小程序|

**circles**

在地图上显示圆
Display circle on the map

|属性|说明|类型|必填|备注|
| Attribute| Instruction| Type| Required| Remark|
|:-|:-|:-|:-|:-|
|latitude|纬度|Number|是|浮点数，范围 -90 ~ 90|
| latitude| Latitude| Number| Yes| Floating number, ranging from -90 ~ 90|
|longitude|经度|Number|是|浮点数，范围 -180 ~ 180|
| longitude| Longitude| Number| Yes| Floating number, ranging from -180 ~ 180|
|color|描边的颜色|String|否|8位十六进制表示，后两位表示alpha值，如：#000000AA；#00000为十六进制|
|fillColor|填充颜色|String|否|8位十六进制表示，后两位表示alpha值，如：#000000AA；#00000为十六进制|
|radius|半径|Number|是||
| radius| Radius| Number| Yes| |
|strokeWidth|描边的宽度|Number|否|&nbsp;|
| strokeWidth| Stroke width| Number| No|  |
|level|压盖关系，默认为 abovelabels|String|false|微信小程序|

**controls**

在地图上显示控件，控件不随着地图移动
Display controls on the map, and the controls do not move with the map

|属性|说明|类型|必填|备注|
| Attribute| Instruction| Type| Required| Remark|
|:-|:-|:-|:-|:-|
|id|控件id|Number|否|在控件点击事件回调会返回此id|
| id| Control id| Number| No| Callback control click event will return this id|
|position|控件在地图的位置|Object|是|控件相对地图位置|
| position| Location of the control on the map| Object| Yes| Location of the control relative to the map|
|iconPath|显示的图标|String|是|项目目录下的图片路径，支持相对路径写法，以'/'开头则表示相对项目根目录；也支持临时路径|
| iconPath| Icon displayed| String| Yes| The image path in the project directory, supporting the relative path writing, and the beginning with '/' indicates relative project root directory; temporary paths are also supported|
|clickable|是否可点击|Boolean|否|默认不可点击|
| clickable| Whether it is clickable?| Boolean| No| Not clickable by default|

**position**

|属性|说明|类型|必填|备注|
| Attribute| Instruction| Type| Required| Remark|
|:-|:-|:-|:-|:-|
|left|距离地图的左边界多远|Number|否|默认为0|
| left| How far from the left edge of the map| Number| No| 0 as default|
|top|距离地图的上边界多远|Number|否|默认为0|
| top| How far from the upper boundary of the map| Number| No| 0 as default|
|width|控件宽度|Number|否|默认为图片宽度|
| width| Control width| Number| No| The default is the image width|
|height|控件高度|Number|否|默认为图片高度|
| height| Control height| Number| No| The default is the image height|

地图组件的经纬度必填，如果不填经纬度则默认值是北京的经纬度。
The latitude and longitude of the map component are required. If they are not filled in, the default value will be the latitude and longitude of Beijing.

**示例** [查看示例](https://hellouniapp.dcloud.net.cn/pages/component/map/map)
**Example** [View examples](https://hellouniapp.dcloud.net.cn/pages/component/map/map)

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

### Map 地图组件

|属性								|说明																		|高德是否支持	|google地图是否支持		|
|:----							|:----																	|:----				|:----								|
|subkey							|个性化地图使用的key											|不支持				|不支持								|
|show-scale					|显示比例尺															|已支持				|不支持								|
|enable-poi					|是否展示 POI 点													|已支持				|不支持								|
|labeltap						|点击label时触发													|已支持				|Android支持iOS不支持	|
|poitap							|点击地图poi点时触发											|已支持				|Android不支持 iOS支持	|

### marker

|属性					|说明																	|高德是否支持	|google地图是否支持		|
|:----				|:----																|:----				|:----								|
|label				|为标记点旁边增加标签										|已支持				|Android支持 iOS不支持	|

### marker 上的气泡 callout

|属性					|说明																			|高德是否支持	|google地图是否支持							|
|:----				|:----																		|:----				|:----													|
|display			|'BYCLICK':点击显示; 'ALWAYS':常显					|已支持				|Android支持iOS只支持 'BYCLICK'	|

### marker 上的自定义气泡 customCallout

|属性		|说明															|高德是否支持	|google地图是否支持							|
|:----	|:----														|:----				|:----													|
|display|'BYCLICK':点击显示; 'ALWAYS':常显	|已支持				|Android支持iOS只支持 'BYCLICK'	|

### polyline

|属性					|说明					|高德是否支持	|google地图是否支持			|
|:----				|:----				|:----				|:----									|
|colorList		|彩虹线				|已支持				|Android不支持 iOS支持		|
|dottedLine		|是否虚线			|已支持				|Android已支持 iOS不支持	|
|arrowLine		|带箭头的线		|已支持				|Android不支持 iOS支持		|
|arrowIconPath|更换箭头图标	|已支持				|Android不支持 iOS支持		|


map 组件相关操作的 JS API：[uni.createMapContext](api/location/map?id=createmapcontext)
JS API for map-related operations: [uni.createMapContext](api/location/map?id=createmapcontext)
nvue map 更换箭头图标格式参考: [https://ask.dcloud.net.cn/article/37901](https://ask.dcloud.net.cn/article/37901)
nvue map replacement arrow icon format reference: [https://ask.dcloud.net.cn/article/37901](https://ask.dcloud.net.cn/article/37901)

**注意事项**
**Precautions**

- 小程序和app-vue中，`<map>` 组件是由引擎创建的原生组件，它的层级是最高的，不能通过 z-index 控制层级。在`<map>`上绘制内容，可使用组件自带的marker、controls等属性，也可以使用`<cover-view>`组件。App端还可以使用plus.nativeObj.view 或 subNVue 绘制原生内容，[参考](/component/native-component)。另外App端nvue文件不存在层级问题。从微信基础库2.8.3开始，支持map组件的同层渲染，不再有层级问题。
- App端nvue文件的map和小程序拉齐度更高。vue里的map则与plus.map功能一致，和小程序的地图略有差异。**App端使用map推荐使用nvue。**
- App端使用到本地图像的话，打包前需要设置资源为释放模式，在manifest文件内app-plus新增runmode节点，设置值为liberate。
- If the local image is used on the App side, it needs to set the resource to release mode before packaging, and add a runmode node into the app-plus in the manifest file, with the setting value of liberate.
- 在涉及层级问题的小程序中和app-vue中，请勿在 scroll-view、swiper、picker-view、movable-view 中使用 `<map>` 组件。
- 小程序和 app-vue 中，css 动画对 `<map>` 组件无效。
- map 组件使用的经纬度是国测局坐标，调用 uni.getLocation 接口需要指定 type 为 gcj02。
- The latitude and longitude used by the map component are the coordinates of State Bureau of Surveying and Mapping of China. To call the uni.getLocation interface, you need to specify the type as gcj02.
- `<map>` 组件在不同平台的底层引擎是不同的：微信小程序为腾讯地图；H5为腾讯地图或谷歌地图；App、支付宝（中国大陆地区版本）小程序为高德地图；百度小程序、快应用为百度地图。app-vue也可以使用百度地图，在manifest中配置，打包后生效，但app-nvue只支持高德地图。另外选择地图、查看地图位置的API也仅支持高德地图。App端如无特殊必要，建议使用高德地图。
- map 组件默认的api是参考微信小程序的，如需要使用plus.map，可以通过`$getAppMap`获取原生地图对象，[详见](/api/location/map)。注意nvue的map组件不是plus.map对象，无法使用`$getAppMap`
- H5 端获取定位信息，需要部署在 **https** 服务上，本地预览（localhost）仍然可以使用 http 协议。
- To obtain location information on the H5 side, it must be deployed on the **https** service. For local preview (localhost), the http protocol can still be used.
- 无GPS模块或GPS无信号的 PC 设备使用 Chrome 浏览器的时候，位置信息是连接谷歌服务器获取的，国内用户可能获取位置信息失败。
- Location is obtained by connecting to Google server when the PC devices without GPS module or GPS signal use Chrome browser, but the Chinese users may fail to get the location.
- App 端使用地图组件需要**向高德或百度等三方服务商申请SDK资质，获取AppKey，打包时需要在manifest文件中勾选相应模块，在SDK配置中填写Appkey。注意申请包名和打包时的包名需匹配一致，证书信息匹配**。在manifest可视化界面有详细申请指南。
- To use the map component on the App side,  **needs to apply for SDK qualification from a third-party service provider such as AutoNavi or Baidu to obtain the AppKey. When packaging, you need to check the corresponding module in the manifest file and fill in Appkey in the SDK configuration. Note that the application package name must match the package name when packaging, and the certificate information must match** . There are detailed application guides in the manifest visualization interface.
- H5 端使用地图和定位相关，需要在 [manifest.json](/collocation/manifest?id=h5sdkconfig) 内配置腾讯或谷歌等三方地图服务商申请的秘钥（key）。
- ios nvue Color 不支持 ARGB 十六进制，使用 rgba(r,g,b,a) 代替
- ios nvue Color does not support ARGB hexadecimal, and rgba(r,g,b,a) is used for instead

##### FAQ

Q：应用中使用了 `<map>` 组件，打包为App时，提示缺少权限模块怎么办？
Q: What if the `<map>` component is used in the application and packaged as an App, but it prompts that the permission module is missing?
A：App端原生地图，依赖第三方的 SDK，因此打包移动应用时，需要在manifest中勾选相关的权限并填写 key 信息。详见：[https://ask.dcloud.net.cn/article/29](https://ask.dcloud.net.cn/article/29)
A: the native map on the App side, relies on the SDK of the third party. When packaging the mobile application, you need to check the relevant permissions and fill in the key information in manifest. For details, please see: [https://ask.dcloud.net.cn/article/29](https://ask.dcloud.net.cn/article/29)

Q：国外应用想使用谷歌地图/google地图怎么办？
Q: What if foreign applications want to use Google Maps?
A: App 3.4+ 已支持 Google 地图， App 3.4 以下版本使用下面的方案
 1. 可以在web-view下调用谷歌的web地图
 2. 可以写一个原生插件封装谷歌原生地图，具体参考uni-app插件市场的原生插件开发教程。插件市场已有三方写好的[地图插件](https://ext.dcloud.net.cn/search?q=%E8%B0%B7%E6%AD%8C%E5%9C%B0%E5%9B%BE)。

### 三方定位和地图服务收费说明

* 使用三方定位或者地图服务，需向服务提供商（如：高德地图、百度地图、腾讯地图、谷歌地图）申请授权或缴纳费用。
* 申请三方定位或地图服务秘钥时请详细阅读授权和收费说明，并关注服务条款后期的变更。
* 以下是关于部分地图服务商授权和收费的简介，具体以地图服务商官网公布的最新信息为准。
  * 高德地图：商用授权收费，超出配额收费。
  * 百度地图：商用授权收费，超出配额收费。
  * 腾讯地图：商用授权收费，超出配额收费。
  * 谷歌地图：按量收费，每月赠送一定金额。
  * 小程序平台内置地图：无需关心地图服务商，免费使用，无配额限制。