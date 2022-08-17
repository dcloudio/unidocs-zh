
::: tip 组件名：uni-load-more
::: tip component name: uni-load-more
> 代码块： `uLoadMore`
> Code block: `uLoadMore`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-load-more)
[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-load-more)
::: 
用于列表中，做滚动加载使用，展示 loading 的各种状态。
Used in lists, used for scroll loading, and displayed various states of loading.

## 介绍
## introduce
### 基本用法
### Basic usage

```html
<uni-load-more status="more"></uni-load-more>
```

## API

### LoadMore Props

|属性名|类型|	可选值|默认值	|说明|
|property name|type|optional value|default value|description|
|:-:|:-:|:-:|:-:|:-:|
|iconSize|Number|-|24|指定图标大小|
|iconSize|Number|-|24|Specify icon size|
|status|String	|more/loading/noMore|more|loading 的状态|
|status|String |more/loading/noMore|more|loading status|
|showIcon|Boolean|-|true|是否显示 loading 图标|
|showIcon|Boolean|-|true|whether to show the loading icon|
|showText|Boolean|-|true| **[1.3.3新增]**是否显示文本|
|showText|Boolean|-|true| **[New in 1.3.3]**Whether to display text|
|iconType|String|snow/circle/auto|auto|指定图标样式|
|iconType|String|snow/circle/auto|auto|Specify icon style|
|color|String|-|#777777	|图标和文字颜色|
|color|String|-|#777777 |Icon and text color|
|contentText|Object|-|{contentdown: "上拉显示更多",contentrefresh: "正在加载...",contentnomore: "没有更多数据了"}|各状态文字说明	|
|contentText|Object|-|{contentdown: "Pull up to show more",contentrefresh: "Loading...",contentnomore: "No more data"}|Text description of each state |

#### Status Options
|参数名称|说明|
|Parameter name|Description|
|:-:|:-:|
|more|加载前|
|more|Before Loading|
|loading|加载中	|
|loading|Loading |
|no-more|没有更多数据	|
|no-more|No more data|

#### IconType Options
|参数名称|说明|
|Parameter name|Description|
|:-:|:-:|
|snow|ios雪花加载样式|
|snow|ios snowflake loading style|
|circle	|安卓环形加载样式|
|circle |Android Ring Loading Style|
|auto|根据平台自动选择加载样式	|
|auto|Automatically select loading styles based on platform |


::: tip 说明
::: tip Description
`iconType`为`snow`时，在`APP-NVUE`平台不可设置大小，在非`APP-NVUE`平台不可设置颜色
When `iconType` is `snow`, the size cannot be set on the `APP-NVUE` platform, and the color cannot be set on the non-`APP-NVUE` platform
:::

### LoadMore Events

|事件名					|说明				|返回值						|
|Event Name |Description |Return Value |
|:-:						|:-:				|:-:						|
|clickLoadMore	|点击加载更多时触发	|e.detail={status:'loading'}|
|clickLoadMore |triggered when click to load more |e.detail={status:'loading'}|


## 示例
## Example
::: warning 注意
::: warning attention
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。
The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-load-more) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-load-more) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/load-more/load-more
> Template
``` html
<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">加载更多组件用于页面加载更多数据时，页面底部显示内容等场景</text>
		</uni-card>
		<uni-section title="基本用法" type="line">
			<uni-load-more :status="status" />
		</uni-section>
		<uni-section title="修改默认文字" type="line">
			<uni-load-more :status="status" :content-text="contentText" />
		</uni-section>
		<uni-section title="改变颜色" type="line">
			<uni-load-more color="#007AFF" :status="status" />
		</uni-section>
		<uni-section title="指定加载图标样式 - 按平台自动选择样式" type="line">
			<uni-load-more iconType="auto" :status="status" />
		</uni-section>
		<uni-section title="指定加载图标样式 - 环形" type="line">
			<uni-load-more iconType="circle" :status="status" />
		</uni-section>

		<uni-section title="改变组件状态" type="line">
			<radio-group class="uni-list" @change="onChange">
				<view v-for="(item, index) in statusTypes" :key="index" class="uni-list-item">
					<view class="uni-list-item__container">
						<view class="uni-list-item__content">
							<text class="uni-list-item__content-title">{{ item.text }}</text>
						</view>
						<view class="uni-list-item__extra">
							<radio :value="item.value" :checked="item.checked" />
						</view>
					</view>
				</view>
			</radio-group>
		</uni-section>

	</view>
</template>
``` 
> Script
``` html
<script>
	export default {
		components: {},
		data() {
			return {
				status: 'more',
				statusTypes: [{
					value: 'more',
					text: '加载前',
					checked: true
				}, {
					value: 'loading',
					text: '加载中',
					checked: false
				}, {
					value: 'noMore',
					text: '没有更多',
					checked: false
				}],
				contentText: {
					contentdown: '查看更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				}
			}
		},
		methods: {
			onChange(e) {
				this.status = e.detail.value
			},
			clickLoadMore(e) {
				uni.showToast({
					icon: 'none',
					title: "当前状态：" + e.detail.status
				})
			}
		}
	}
</script>
```
> Style
```html
<style lang="scss">
	.uni-list-item {
		border-bottom-style: solid;
		border-bottom-width: 1px;
		border-bottom-color: #eee;
		font-size: 14px;
	}

	.uni-list-item__container {
		/* #ifndef APP-NVUE */
		display: flex;
		width: 100%;
		box-sizing: border-box;
		/* #endif */
		padding: 12px 15px;
		flex: 1;
		position: relative;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.uni-list-item__content-title {
		font-size: 14px;
		color: #666;
	}
</style>

```
:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/load-more/load-more)
[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/load-more/load-more)