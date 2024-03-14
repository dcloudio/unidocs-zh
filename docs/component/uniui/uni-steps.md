# uni-steps 步骤条

::: tip 组件名：uni-steps
> 代码块： `uSteps`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-steps)
:::

步骤条，常用于显示进度


## 介绍
### 基本用法

```html
<!-- 基本用法 -->
<uni-steps :options="[{title: '事件一'}, {title: '事件二'}, {title: '事件三'}, {title: '事件四'}]" :active="1"></uni-steps>

<!-- 纵向排列 -->
<uni-steps :options="[{title:'买家下单',desc:'2018-11-11'},{title:'卖家发货',desc:'2018-11-12'},{title:'买家签收',desc:'2018-11-13'},{title:'交易完成',desc:'2018-11-14'}]" direction="column" :active="2"></uni-steps>
```


## API

### Steps Props

|属性名|类型|	可选值|默认值	|说明|
|:-:|:-:|:-:|:-:|:-:|
|active|Number|-|0|当前步骤|
|**direction**	|String	|row/column	|row|排列方向|
|active-color|String|-|#1aad19|选中状态的颜色|
|options|Array|-| -|数据源，格式为：[{title:'xxx',desc:'xxx'},{title:'xxx',desc:'xxx'}]|

#### Direction Options
| 属性名| 说明|
| :-:| :-:|
| row| 横向|
| column| 纵向|


## 示例
::: warning 注意
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-steps) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/steps/steps
> Template
``` html
<template>
	<view>
		<uni-section title="基本用法" type="line" padding>
			<uni-steps :options="list1" :active="active" />
		</uni-section>
		<uni-section title="自定义图标" type="line" padding>
			<uni-steps :options="list1" active-icon="checkbox" :active="active" />
		</uni-section>
		<uni-section title="自定义图标" type="line" padding>
			<uni-steps :options="list1" active-icon="medal" :active="active" />
		</uni-section>
		<uni-section title="纵向排列" type="line" padding>
			<uni-steps :options="list2" active-color="#007AFF" :active="active" direction="column" />
		</uni-section>
		<button type="primary" size="mini" style="margin: 30px 10px; width: 100px;" @click="change">改变状态</button>
	</view>
</template>
```
> Script
```html
<script>
	export default {
		components: {},
		data() {
			return {
				active: 1,
				list1: [{
					title: '事件一'
				}, {
					title: '事件二'
				}, {
					title: '事件三'
				}, {
					title: '事件四'
				}],
				list2: [{
					title: '买家下单',
					desc: '2018-11-11'
				}, {
					title: '卖家发货',
					desc: '2018-11-12'
				}, {
					title: '买家签收',
					desc: '2018-11-13'
				}, {
					title: '交易完成',
					desc: '2018-11-14'
				}]
			}
		},
		methods: {
			change() {
				if (this.active < this.list1.length - 1) {
					this.active += 1
				} else {
					this.active = 0
				}
			}
		}
	}
</script>

```
> Style
```html
<style lang="scss">
	.status-btn {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 92rpx;
		margin: 30rpx;
		background-color: #007AFF;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 15px;
		flex-direction: row;
	}
</style>

```
:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/steps/steps)