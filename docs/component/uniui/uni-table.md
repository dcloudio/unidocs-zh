::: tip 组件名：uni-table
> 代码块： `uTable`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-table)
:::

用于展示多条结构类似的数据

## 介绍
### 基本用法
表格是由4个组件： `uni-table`表格组件、`uni-tr`表格行 、`uni-th` 表格头、`uni-td` 单元格组成

需要注意的是：
- `uni-table` 的叶子节点一定是 `uni-tr`
- `uni-tr` 的叶子节点一定是 `uni-th` 或者 `uni-td`
- 一个表格内理论上只能包含表头行
- 目前只能在 `uni-th` 中设置 width 属性，`uni-td` 的宽度跟随 `uni-th` 宽度变化


```html
<uni-table border stripe emptyText="暂无更多数据" >
	<!-- 表头行 -->
	<uni-tr>
		<uni-th align="center">日期</uni-th>
		<uni-th align="center">姓名</uni-th>
		<uni-th align="left">地址</uni-th>
	</uni-tr>
	<!-- 表格数据行 -->
	<uni-tr>
		<uni-td>2020-10-20</uni-td>
		<uni-td>Jeson</uni-td>
		<uni-td>北京市海淀区</uni-td>
	</uni-tr>
	<uni-tr>
		<uni-td>2020-10-21</uni-td>
		<uni-td>HanMeiMei</uni-td>
		<uni-td>北京市海淀区</uni-td>
	</uni-tr>
	<uni-tr>
		<uni-td>2020-10-22</uni-td>
		<uni-td>LiLei</uni-td>
		<uni-td>北京市海淀区</uni-td>
	</uni-tr>
	<uni-tr>
		<uni-td>2020-10-23</uni-td>
		<uni-td>Danner</uni-td>
		<uni-td>北京市海淀区</uni-td>
	</uni-tr>

</uni-table>
```




## API

### Table Props

|属性名| 类型|默认值| 可选值| 说明|
|:-:| :-:|:-:| :-:| :-:	|
|border| Boolean| false| -| 是否带有纵向边框	|
|stripe| Boolean| true| -| 是否显示斑马线样式	|
|type| String| ''| -| 值为type="selection" 时开启多选|
|emptyText	| String| 没有更多数据| -| 空数据时显示的文本内容|
|loading| Boolean| false| -| 显示加载中|

### Table Events

|事件称名|说明| 返回参数	|
|:-:|:-:| :-:	|
|selection-change| 开启多选时，当选择项发生变化时会触发该事件	| Function(Object)|

### Table Methods
**Tips: 因微信小程序框架问题，暂不支持如下方法**

|方法称名|说明|参数|
|:-:|:-:|:-:|
|selectionAll|选中全部行	|-	|
|toggleRowSelection	|用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）	| Function(Array:[行索引],Boolean:selected)	|
|clearSelection	|用于多选表格，清空用户的选择	|-	|
|toggleAllSelection	|用于多选表格，切换所有行的选中状态	|-	|



### Th Props

|属性名|类型|默认值|可选值|说明|
|:-:|:-:		|:-:|	:-:|:-:|
|width|String	| -|-| 单元格宽度|
|align|String	| left|left/center/right| 表头对齐方式|
|filter-type|String	||search/select/range/date	| 筛选类型，search关键字搜索，select类别选择|
|filter-data|Array	||| 筛选数据|
|sortable |Boolean| false|- 	| 是否启用排序|

**filter-data 示例**
```json
[{
	text: "", //显示
	value: "" // 值
}]
```


### Th Events

|事件称名				|说明									| 返回参数			|
|:-:					|:-:									| :-:				|
|sort-change	| 点击排序时会触发该事件	| Function(Object)|
|filter-change	| 筛选数据时会触发该事件	| Function(Object)|

filter-change(e) 说明
```json
e = {
	filterType: "", //筛选类型 search/select/range 和传入的相同
	filter: "" // 值, filterType=search字符串类型，filterType=select数组类型，filterType=range数组类型，[0]开始值， [1]结束值
}
```


### Td Props

|属性名	|类型	|默认值	 	|可选值				|说明|
|:-:		|:-:		|:-:			|:-:				|:-:|
|align	|String	| left		|left/center/right	| 单元格对齐方式|



## 示例
::: warning 注意
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-table) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/table/table
> Template
``` html
<template>
	<view>
		<view class="uni-container">
			<uni-table ref="table" :loading="loading" border stripe type="selection" emptyText="暂无更多数据" @selection-change="selectionChange">
				<uni-tr>
					<uni-th width="150" align="center">日期</uni-th>
					<uni-th width="150" align="center">姓名</uni-th>
					<uni-th align="center">地址</uni-th>
					<uni-th width="204" align="center">设置</uni-th>
				</uni-tr>
				<uni-tr v-for="(item, index) in tableData" :key="index">
					<uni-td>{{ item.date }}</uni-td>
					<uni-td>
						<view class="name">{{ item.name }}</view>
					</uni-td>
					<uni-td align="center">{{ item.address }}</uni-td>
					<uni-td>
						<view class="uni-group">
							<button class="uni-button" size="mini" type="primary">修改</button>
							<button class="uni-button" size="mini" type="warn">删除</button>
						</view>
					</uni-td>
				</uni-tr>
			</uni-table>
			<view class="uni-pagination-box"><uni-pagination show-icon :page-size="pageSize" :current="pageCurrent" :total="total" @change="change" /></view>
		</view>
	</view>
</template>
```
> Script
```html
<script>
import tableData from './tableData.js'
export default {
	data() {
		return {
			searchVal: '',
			tableData: [],
			// 每页数据量
			pageSize: 10,
			// 当前页
			pageCurrent: 1,
			// 数据总量
			total: 0,
			loading: false
		}
	},
	onLoad() {
		this.selectedIndexs = []
		this.getData(1)
	},
	methods: {
		// 多选处理
		selectedItems() {
			return this.selectedIndexs.map(i => this.tableData[i])
		},
		// 多选
		selectionChange(e) {
			console.log(e.detail.index)
			this.selectedIndexs = e.detail.index
		},
		//批量删除
		delTable() {
			console.log(this.selectedItems())
		},
		// 分页触发
		change(e) {
			this.$refs.table.clearSelection()
			this.selectedIndexs.length = 0
			this.getData(e.current)
		},
		// 搜索
		search() {
			this.getData(1, this.searchVal)
		},
		// 获取数据
		getData(pageCurrent, value = '') {
			this.loading = true
			this.pageCurrent = pageCurrent
			this.request({
				pageSize: this.pageSize,
				pageCurrent: pageCurrent,
				value: value,
				success: res => {
					// console.log('data', res);
					this.tableData = res.data
					this.total = res.total
					this.loading = false
				}
			})
		},
		// 伪request请求
		request(options) {
			const { pageSize, pageCurrent, success, value } = options
			let total = tableData.length
			let data = tableData.filter((item, index) => {
				const idx = index - (pageCurrent - 1) * pageSize
				return idx < pageSize && idx >= 0
			})
			if (value) {
				data = []
				tableData.forEach(item => {
					if (item.name.indexOf(value) !== -1) {
						data.push(item)
					}
				})
				total = data.length
			}

			setTimeout(() => {
				typeof success === 'function' &&
					success({
						data: data,
						total: total
					})
			}, 500)
		}
	}
}
</script>
```
> Style
```html
<style>
/* #ifndef H5 */
/* page {
	padding-top: 85px;
} */
/* #endif */
.uni-group {
	display: flex;
	align-items: center;
}
</style>

```
> tableData.js
```javascript
export default [{
    "date": "2020-09-01",
    "name": "Dcloud1",
    "address": "上海市普陀区金沙江路 1518 弄"
}, {
    "date": "2020-09-02",
    "name": "Dcloud2",
    "address": "上海市普陀区金沙江路 1517 弄"
}, {
    "date": "2020-09-03",
    "name": "Dcloud3",
    "address": "上海市普陀区金沙江路 1519 弄"
}, {
    "date": "2020-09-04",
    "name": "Dcloud4",
    "address": "上海市普陀区金沙江路 1516 弄"
}, {
    "date": "2020-09-05",
    "name": "Dcloud5",
    "address": "上海市普陀区金沙江路 1518 弄"
}, {
    "date": "2020-09-06",
    "name": "Dcloud6",
    "address": "上海市普陀区金沙江路 1517 弄"
}, {
    "date": "2020-09-07",
    "name": "Dcloud7",
    "address": "上海市普陀区金沙江路 1519 弄"
}, {
    "date": "2020-09-08",
    "name": "Dcloud8",
    "address": "上海市普陀区金沙江路 1516 弄"
}, {
    "date": "2020-09-09",
    "name": "Dcloud9",
    "address": "上海市普陀区金沙江路 1518 弄"
}, {
    "date": "2020-09-10",
    "name": "Dcloud10",
    "address": "上海市普陀区金沙江路 1517 弄"
}, {
    "date": "2020-09-11",
    "name": "Dcloud11",
    "address": "上海市普陀区金沙江路 1519 弄"
}, {
    "date": "2020-09-12",
    "name": "Dcloud12",
    "address": "上海市普陀区金沙江路 1516 弄"
}, {
    "date": "2020-09-13",
    "name": "Dcloud13",
    "address": "上海市普陀区金沙江路 1518 弄"
}, {
    "date": "2020-09-14",
    "name": "Dcloud14",
    "address": "上海市普陀区金沙江路 1517 弄"
}, {
    "date": "2020-09-15",
    "name": "Dcloud15",
    "address": "上海市普陀区金沙江路 1519 弄"
}, {
    "date": "2020-09-16",
    "name": "Dcloud16",
    "address": "上海市普陀区金沙江路 1516 弄"
}, {
    "date": "2020-09-01",
    "name": "Dcloud17",
    "address": "上海市普陀区金沙江路 1518 弄"
}, {
    "date": "2020-09-02",
    "name": "Dcloud18",
    "address": "上海市普陀区金沙江路 1517 弄"
}, {
    "date": "2020-09-03",
    "name": "Dcloud19",
    "address": "上海市普陀区金沙江路 1519 弄"
}, {
    "date": "2020-09-04",
    "name": "Dcloud20",
    "address": "上海市普陀区金沙江路 1516 弄"
}, {
    "date": "2020-09-05",
    "name": "Dcloud21",
    "address": "上海市普陀区金沙江路 1518 弄"
}, {
    "date": "2020-09-06",
    "name": "Dcloud22",
    "address": "上海市普陀区金沙江路 1517 弄"
}, {
    "date": "2020-09-07",
    "name": "Dcloud23",
    "address": "上海市普陀区金沙江路 1519 弄"
}, {
    "date": "2020-09-08",
    "name": "Dcloud24",
    "address": "上海市普陀区金沙江路 1516 弄"
}, {
    "date": "2020-09-09",
    "name": "Dcloud25",
    "address": "上海市普陀区金沙江路 1518 弄"
}, {
    "date": "2020-09-10",
    "name": "Dcloud26",
    "address": "上海市普陀区金沙江路 1517 弄"
}, {
    "date": "2020-09-11",
    "name": "Dcloud27",
    "address": "上海市普陀区金沙江路 1519 弄"
}, {
    "date": "2020-09-12",
    "name": "Dcloud28",
    "address": "上海市普陀区金沙江路 1516 弄"
}, {
    "date": "2020-09-13",
    "name": "Dcloud29",
    "address": "上海市普陀区金沙江路 1518 弄"
}, {
    "date": "2020-09-14",
    "name": "Dcloud30",
    "address": "上海市普陀区金沙江路 1517 弄"
}, {
    "date": "2020-09-15",
    "name": "Dcloud31",
    "address": "上海市普陀区金沙江路 1519 弄"
}, {
    "date": "2020-09-16",
    "name": "Dcloud32",
    "address": "上海市普陀区金沙江路 1516 弄"
}, {
    "date": "2020-09-01",
    "name": "Dcloud33",
    "address": "上海市普陀区金沙江路 1518 弄"
}, {
    "date": "2020-09-02",
    "name": "Dcloud34",
    "address": "上海市普陀区金沙江路 1517 弄"
}, {
    "date": "2020-09-03",
    "name": "Dcloud35",
    "address": "上海市普陀区金沙江路 1519 弄"
}, {
    "date": "2020-09-04",
    "name": "Dcloud36",
    "address": "上海市普陀区金沙江路 1516 弄"
}, {
    "date": "2020-09-05",
    "name": "Dcloud37",
    "address": "上海市普陀区金沙江路 1518 弄"
}, {
    "date": "2020-09-06",
    "name": "Dcloud38",
    "address": "上海市普陀区金沙江路 1517 弄"
}, {
    "date": "2020-09-07",
    "name": "Dcloud39",
    "address": "上海市普陀区金沙江路 1519 弄"
}, {
    "date": "2020-09-08",
    "name": "Dcloud40",
    "address": "上海市普陀区金沙江路 1516 弄"
}, {
    "date": "2020-09-09",
    "name": "Dcloud41",
    "address": "上海市普陀区金沙江路 1518 弄"
}, {
    "date": "2020-09-10",
    "name": "Dcloud42",
    "address": "上海市普陀区金沙江路 1517 弄"
}, {
    "date": "2020-09-11",
    "name": "Dcloud43",
    "address": "上海市普陀区金沙江路 1519 弄"
}, {
    "date": "2020-09-12",
    "name": "Dcloud44",
    "address": "上海市普陀区金沙江路 1516 弄"
}, {
    "date": "2020-09-13",
    "name": "Dcloud45",
    "address": "上海市普陀区金沙江路 1518 弄"
}, {
    "date": "2020-09-14",
    "name": "Dcloud46",
    "address": "上海市普陀区金沙江路 1517 弄"
}, {
    "date": "2020-09-15",
    "name": "Dcloud47",
    "address": "上海市普陀区金沙江路 1519 弄"
}, {
    "date": "2020-09-16",
    "name": "Dcloud48",
    "address": "上海市普陀区金沙江路 1516 弄"
}]

```
:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/table/table)
