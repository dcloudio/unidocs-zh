
::: tip 组件名：uni-grid
> 代码块： `uGrid`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-grid)
:::

宫格组件。

## 介绍
::: warning 注意事项
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
- 删除组件自带圆点角标效果，完全交给用户实现，示例有简单角标效果实现
- Grid 组件仅在自定义组件模式下支持
- column 属性最大值最好不要超过 5 个，如果超过，需要注意内容显示
- 支付宝小程序平台需要在支付宝小程序开发者工具里开启 component2 编译模式，开启方式： `详情 --> 项目配置 --> 启用 component2 编译`
- 为了避免高度显示错误组件内必须要有内容
:::

### 基本用法

```html
<uni-grid :column="3">
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
</uni-grid>
```
### 不带边框并矩形显示
```html
<uni-grid :column="3" :showBorder="false"  :square="false">
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
	<uni-grid-item>
		<text class="text">文本</text>
	</uni-grid-item>
</uni-grid>
```

## API

### Grid Props

**uni-grid 属性说明：**

|属性名		|类型	|默认值	|说明				|
|:-:		|:-:	|:-:	|:-:				|
|column		|Number	|3		|每列显示个数		|
|borderColor|String	|#d0dee5|边框颜色			|
|showBorder	|Boolean|true	|是否显示边框		|
|square		|Boolean|true	|是否方形显示		|
|highlight	|Boolean|true	|点击背景是否高亮	|

### Grid Events
|事件名	|说明			|返回值											|
|:-:	|:-:			|:-:											|
|@change|点击 grid 触发	|e={detail:{index:0}}，index 为当前点击 grid下标|


### GridItem Props

|属性名|类型		|默认值	|说明										|
|:-:	|:-:		|:-:	|:-:										|
|index|Number	|-		|子组件的唯一标识 ，点击grid会返回当前的标识|





## 示例
::: danger 注意
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-grid) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/grid/grid
> Template
``` html
<template>
	<view class="warp">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">宫格组件主要使用场景如：商品推荐列表、热门内容等</text>
		</uni-card>
		<uni-section title="基础样式" type="line" padding>
			<uni-grid :column="4" :highlight="true" @change="change">
				<uni-grid-item v-for="(item, index) in 4" :index="index" :key="index">
					<view class="grid-item-box" style="background-color: #fff;">
						<uni-icons type="image" :size="30" color="#777" />
						<text class="text">文本信息</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</uni-section>
		<uni-section title="自定义列数" type="line" padding>
			<uni-grid :column="4" :highlight="true" @change="change">
				<uni-grid-item v-for="(item, index) in 8" :index="index" :key="index">
					<view class="grid-item-box" style="background-color: #fff;">
						<uni-icons type="image" :size="30" color="#777" />
						<text class="text">文本信息</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</uni-section>

		<uni-section title="滑动视图" type="line" padding>
			<!-- 因为swiper特性的关系，请指定swiper的高度 ，swiper的高度并不会被内容撑开-->
			<swiper class="swiper" :indicator-dots="true">
				<swiper-item>
					<uni-grid :column="3" :highlight="true" @change="change">
						<uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
							<view class="grid-item-box">
								<image :src="item.url" class="image" mode="aspectFill" />
								<text class="text">{{ item.text }}</text>
							</view>
						</uni-grid-item>
					</uni-grid>
				</swiper-item>
				<swiper-item>
					<uni-grid :column="3" :highlight="true" @change="change">
						<uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
							<view class="grid-item-box">
								<image :src="item.url" class="image" mode="aspectFill" />
								<text class="text">{{ item.text }}</text>
							</view>
						</uni-grid-item>
					</uni-grid>
				</swiper-item>
				<swiper-item>
					<uni-grid :column="3" :highlight="true" @change="change">
						<uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
							<view class="grid-item-box">
								<image :src="item.url" class="image" mode="aspectFill" />
								<text class="text">{{ item.text }}</text>
							</view>
						</uni-grid-item>
					</uni-grid>
				</swiper-item>
			</swiper>
		</uni-section>
		<uni-section title="动态加载" type="line" padding>
			<view class="grid-dynamic-box">
				<uni-grid :column="3" :highlight="true" @change="change">
					<uni-grid-item v-for="(item, index) in dynamicList" :index="index" :key="index">
						<view class="grid-item-box" :style="{'backgroundColor':item.color}">
							<image :src="item.url" class="image" mode="aspectFill" />
							<text class="text">{{ item.text }}</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</view>
			<button type="primary" @click="add">点击添加一个宫格</button>
			<button v-if="dynamicList.length !== 0" type="primary" style="margin-top: 15px;"
				@click="del">点击删除一个宫格</button>
		</uni-section>
		<uni-section title="无边框带角标（3列）" type="line" padding>
			<uni-grid :column="3" :show-border="false" :square="false" @change="change">
				<uni-grid-item v-for="(item ,index) in list" :index="index" :key="index">
					<view class="grid-item-box">
						<image class="image" :src="item.url" mode="aspectFill" />
						<text class="text">{{item.text}}</text>
						<view v-if="item.badge" class="grid-dot">
							<uni-badge :text="item.badge" :type="item.type" />
						</view>
					</view>
				</uni-grid-item>
			</uni-grid>
		</uni-section>
		<uni-section title="矩形宫格（3列）" type="line" padding>
			<uni-grid :column="3" :square="false" :highlight="false" @change="change">
				<uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
					<view class="grid-item-box">
						<image :src="item.url" class="image" mode="aspectFill" />
						<text class="text">{{ item.text }}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</uni-section>
		<uni-section title="边框颜色（4列 无文字）" type="line" padding>
			<uni-grid :column="4" border-color="#03a9f4" @change="change">
				<uni-grid-item :index="0">
					<view class="grid-item-box">
						<image class="image" src="/static/c1.png" mode="aspectFill" />
					</view>
				</uni-grid-item>
				<uni-grid-item :index="1">
					<view class="grid-item-box">
						<image class="image" src="/static/c2.png" mode="aspectFill" />
					</view>
				</uni-grid-item>
				<uni-grid-item :index="2">
					<view class="grid-item-box">
						<image class="image" src="/static/c3.png" mode="aspectFill" />
					</view>
				</uni-grid-item>
				<uni-grid-item :index="3">
					<view class="grid-item-box">
						<image class="image" src="/static/c4.png" mode="aspectFill" />
					</view>
				</uni-grid-item>
			</uni-grid>
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
				dynamicList: [],
				list: [{
						url: '/static/c1.png',
						text: 'Grid 1',
						badge: '0',
						type: "primary"
					},
					{
						url: '/static/c2.png',
						text: 'Grid 2',
						badge: '1',
						type: "success"
					},
					{
						url: '/static/c3.png',
						text: 'Grid 3',
						badge: '99',
						type: "warning"
					},
					{
						url: '/static/c4.png',
						text: 'Grid 4',
						badge: '2',
						type: "error"
					},
					{
						url: '/static/c5.png',
						text: 'Grid 5'
					},
					{
						url: '/static/c6.png',
						text: 'Grid 6'
					},
					{
						url: '/static/c7.png',
						text: 'Grid 7'
					},
					{
						url: '/static/c8.png',
						text: 'Grid 8'
					},
					{
						url: '/static/c9.png',
						text: 'Grid 9'
					}
				]
			}
		},
		methods: {
			change(e) {
				let {
					index
				} = e.detail
				this.list[index].badge && this.list[index].badge++

				uni.showToast({
					title: `点击第${index+1}个宫格`,
					icon: 'none'
				})
			},
			add() {
				if (this.dynamicList.length < 9) {
					this.dynamicList.push({
						url: `/static/c${this.dynamicList.length+1}.png`,
						text: `Grid ${this.dynamicList.length+1}`,
						color: this.dynamicList.length % 2 === 0 ? '#f5f5f5' : "#fff"
					})
				} else {
					uni.showToast({
						title: '最多添加9个',
						icon: 'none'
					});
				}
			},
			del() {
				this.dynamicList.splice(this.dynamicList.length - 1, 1)
			}
		}
	}
</script>
``` 
> Style
``` html
<style lang="scss">
	.image {
		width: 25px;
		height: 25px;
	}

	.text {
		font-size: 14px;
		margin-top: 5px;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		// display: block;
		/* #endif */
	}

	.grid-dynamic-box {
		margin-bottom: 15px;
	}

	.grid-item-box {
		flex: 1;
		// position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
	}

	.grid-item-box-row {
		flex: 1;
		// position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
	}

	.grid-dot {
		position: absolute;
		top: 5px;
		right: 15px;
	}

	.swiper {
		height: 420px;
	}

	/* #ifdef H5 */
	@media screen and (min-width: 768px) and (max-width: 1425px) {
		.swiper {
			height: 630px;
		}
	}

	@media screen and (min-width: 1425px) {
		.swiper {
			height: 830px;
		}
	}

	/* #endif */
</style>

```
:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/grid/grid)