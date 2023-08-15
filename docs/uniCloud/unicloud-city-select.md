## unicloud-city-select 城市选择组件

::: warning 注意
该组件依赖 [uni-map-common 公共模块](uni-map-common.md)
:::

### 介绍@introduce

unicloud-city-select是一个方便用户在应用中快速选择目标城市的组件。

具有以下功能：

1. 默认自动定位当前城市
2. 支持城市快速搜索
3. 热门城市快捷选择
4. 按字母索引显示城市列表

> 插件市场地址：[https://ext.dcloud.net.cn/plugin?name=unicloud-city-select](https://ext.dcloud.net.cn/plugin?name=unicloud-city-select)

> bug反馈地址：[uni-map交流群](https://im.dcloud.net.cn/#/?joinGroup=64d62b106823de10406ad72f)

**运行效果图**

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/3707/410.png)

### 用法示例@example

注意：由于组件是读取数据库表[opendb-city-china](https://gitee.com/dcloud/opendb/blob/master/collection/opendb-city-china/collection.json)进行查询，若表不存在或表内没有数据，则不会显示城市列表，可以右键插件database目录下的opendb-city-china.schema上传Schema（会自动添加城市数据）

```vue
<template>
	<view class="page">
		<button type="primary" @click="open()">选择城市</button>
		<view style="margin-top: 20px;">当前城市：{{ city.name }}</view>
		<view style="margin-top: 20px;">城市代码：{{ city.code }}</view>
		<unicloud-city-select ref="citySelect" :hot-city="hotCity" :location="true" @select="select"></unicloud-city-select>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 当前选择的城市
				city: {
					code: "",
					name: "定位中..."
				},
				// 热门城市
				hotCity: [
					{ code: "110100", name: "北京" },
					{ code: "310100", name: "上海" },
					{ code: "330100", name: "杭州" },
					{ code: "440100", name: "广州" },
					{ code: "440300", name: "深圳" },
					{ code: "320100", name: "南京" },
					{ code: "500100", name: "重庆" },
					{ code: "510100", name: "成都" }
				]
			}
		},
		onLoad() {},
		methods: {
			// 点击城市选项
			select(city) {
				this.city = city;
			},
			// 打开城市选择页面
			open() {
				this.$refs.citySelect.open();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page {
		padding: 15px;
	}
</style>
```

### 组件属性@props

| 属性名					| 说明																																			| 类型				| 默认值	| 可选值					|平台差异说明	|
|-----------------|-------------------------------																						|---------		|--------	|-------					|-------			|
| location				| 是否自动获取定位所在城市																									| boolean			| true		| false						|-						|
| hot-city				| 热门城市列表																															| array				| -				| [见下](#hotcity)|-						|
| @mounted				| 组件挂载完毕触发																													| EventHandle	| -				| -								|-						|
| @select					| 选择城市后触发（若设置location="true"则会在定位成功后触发一次select事件）	| EventHandle	| -				| -								|-						|

### 热门城市@hotcity

hotCity的值是一个数组，数组内有2个属性，code和name，如下所示

```js
[
	{ code: "110100", name: "北京" },
	{ code: "310100", name: "上海" },
	{ code: "330100", name: "杭州" },
	{ code: "440100", name: "广州" },
	{ code: "440300", name: "深圳" },
	{ code: "320100", name: "南京" },
	{ code: "500100", name: "重庆" },
	{ code: "510100", name: "成都" }
]
```

### 组件方法@function

| 方法名					| 说明													|
|-----------------|-------------------------------|
| open					| 打开城市选择页面										|

**注意**

使用这些方法前，需要在组件先声明 `ref="citySelect"`

```vue
<unicloud-city-select
	ref="citySelect"
	...其他属性
</unicloud-city-select>		
```

**open**

打开城市选择页面

示例

```js
this.$refs.citySelect.open();
```

### unicloud-city-select的opendb数据表@database

unicloud-city-select需要创建以下表后才能正常运行，可以右键插件database目录下的opendb-city-china.schema上传Schema（会自动添加城市数据）

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/3707/418.png)

- 中国城市表 [opendb-city-china](https://gitee.com/dcloud/opendb/blob/master/collection/opendb-city-china/collection.json)

### 常见问题

#### 城市列表没有数据？

右键插件database目录下的opendb-city-china.schema上传Schema（会自动添加城市数据）

#### 无法获取我当前定位的城市？

为了正常使用该组件，请先配置地图Key。地图Key需要在两个地方进行配置：前端配置和云端配置（必须都配置）。

前端配置Key：

在 manifest.json 文件中点击 Web 配置，选择并配置腾讯地图或高德地图中的任意一个即可。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/3707/416.png)

云端配置Key：

在 uni-config-center/uni-map/config.js 中进行配置。（没有配置文件就新建）

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/3707/419.png)

#### 只能选择地级市吗？

由于县级市数量比较多，因此在未搜索的情况下，只能选到地级市，当用户直接搜索时，可以搜索到县级市。

