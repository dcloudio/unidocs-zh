# uni-pagination 分页器

::: tip 组件名：uni-pagination
> 代码块： `uPagination`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-pagination)
:::

分页器组件，用于展示页码、请求数据等。


## 介绍

### 基本用法

```html
<uni-pagination title="标题文字" total="20"></uni-pagination>
<uni-pagination title="标题文字" show-icon="true" total="50" current="2"></uni-pagination>
```

## API

### Pagination Props

|属性名|类型	|默认值	|说明|
|:-:|:-:|:-:|:-:|
|prevText|String|上一页|左侧按钮文字|
|nextText|String|下一页|右侧按钮文字|
|value/v-model|Number|1|当前页|
|current|Number	|1|当前页, 优先级高于 value|
|total|Number|0|数据总量|
|pageSize|Number|10|每页数据量|
|showIcon|Boolean|false	|是否以 icon 形式展示按钮	|


### Pagination Events

|事件称名|说明|返回值|
|:-:|:-:|:-:|
|@change|点击页码按钮时触发	|e={type,current} current为当前页，type值为：next/prev，表示点击的是上一页还是下一个|


## 示例
::: warning 注意
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-pagination) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/pagination/pagination
> Template
``` html
<template>
	<view>
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">分页器组件，用于展示页码、请求数据等</text>
		</uni-card>
		<uni-section title="默认样式" type="line" padding>
			<uni-pagination :total="50" title="标题文字" />
		</uni-section>
		<uni-section title="修改按钮文字" subTitle="使用 prev-text / next-text 属性修改按钮文字" type="line" padding>
			<uni-pagination :total="50" title="标题文字" prev-text="前一页" next-text="后一页" />
		</uni-section>
		<uni-section title="图标样式" subTitle="使用 show-icon 属性显示图标按钮" type="line" padding>
			<uni-pagination :show-icon="true" :total="50" title="标题文字" />
		</uni-section>
		<uni-section title="修改数据长度" type="line" padding>
			<uni-pagination :current="current" :total="total" title="标题文字" :show-icon="true" @change="change" />
			<view class="btn-view">
				<view>
					<text class="example-info">当前页：{{ current }}，数据总量：{{ total }}条，每页数据：{{ pageSize }}</text>
				</view>
				<view class="btn-flex">
					<button class="button word-btn" hover-class="word-btn--hover" :hover-start-time="20"
						:hover-stay-time="70" @click="add"><text class="word-btn-white">增加10条数据</text></button>
					<button class="button" type="default" @click="reset">重置数据</button>
				</view>
			</view>
		</uni-section>
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
				current: 3,
				total: 10,
				pageSize: 10
			}
		},
		mounted() {
			setTimeout(() => {
				this.current = 5
			}, 3000)
		},
		methods: {
			add() {
				this.total += 10
			},
			reset() {
				this.total = 0
				this.current = 1
			},
			change(e) {
				console.log(e)
				this.current = e.current
			}
		}
	}
</script>
```
> Style
```html
<style lang="scss">
	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
	}

	.btn-view {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
		padding: 15px;
		text-align: center;
		background-color: #fff;
		justify-content: center;
		align-items: center;
	}

	.btn-flex {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.button {
		margin: 20px;
		width: 150px;
		font-size: 14px;
		color: #333;
	}
</style>

```
:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/pagination/pagination)