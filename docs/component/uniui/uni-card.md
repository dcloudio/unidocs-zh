

::: tip 组件名：uni-card
::: tip component name: uni-card
> 代码块： `uCard`
> Code block: `uCard`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-card)
[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-card)
:::

卡片组件通用来显示完整独立的一段信息，同时让用户理解他的作用。例如一篇文章的预览图、作者信息、时间等，卡片通常是更复杂和更详细信息的入口点。
The card component is commonly used to display a complete and independent piece of information, while allowing the user to understand its role. For example, a preview image of an article, author information, time, etc., cards are often entry points for more complex and detailed information.

## 介绍
## introduce
::: warning 注意事项
::: warning Notes
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
> In order to avoid wrong use and bring you a bad development experience, please read the following precautions carefully before using the component, which can help you avoid some mistakes.
- 因为平台兼容问题 ， 目前 APP-NVUE 安卓平台下不支持阴影
- Due to platform compatibility issues, shadows are currently not supported under APP-NVUE Android platform
- **1.2.1 版本有较大改动 ，更新组件请注意组件兼容问题**
- **Version 1.2.1 has major changes, please pay attention to component compatibility issues when updating components**
:::
### 基本用法
### Basic usage

```html
<uni-card>
	<text>这是一个基础卡片示例，内容较少，此示例展示了一个没有任何属性不带阴影的卡片。</text>
</uni-card>
```

### 卡片标题+额外信息
### Card title + extra info
使用 `title` 属性设置卡片标题
Use the `title` property to set the card title

使用 `extra` 属性设置卡片标题额外信息
Use the `extra` attribute to set card title extra information

```html
<uni-card title="基础卡片" extra="额外信息">
	<text>这是一个基础卡片示例，此示例展示了一个标题加标题额外信息的标准卡片。</text>
</uni-card>
```

### 双标题卡片 + 略缩图
### Dual Title Card + Thumbnail
使用 `sub-title` 属性设置卡片副标题
Use the `sub-title` property to set the card subtitle

使用 `thumbnail` 属性设置卡片标题左略缩图
Use the `thumbnail` property to set the left thumbnail of the card title

```html
<uni-card title="基础卡片" sub-title="副标题" extra="额外信息" thumbnail="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png">
	<text>这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。</text>
</uni-card>
```

### 通栏卡片
### Banner Cards
使用 `is-full` 属性设置卡片通栏 ，通栏没有外边距，左右会贴合父元素
Use the `is-full` property to set the card banner, the banner has no margin, and the left and right will fit the parent element

```html
<uni-card title="基础卡片" :isFull="true" sub-title="副标题" extra="额外信息">
	<text>这是一个通栏卡片 ，通栏没有外边距，左右会贴合父元素。</text>
</uni-card>
```
### 卡片封面图 + 操作栏
### Card Cover + Action Bar

使用 `cover` 属性设置卡片封面图,或者使用 `cover` 插槽设置卡片封面图
Use the `cover` property to set the card cover image, or use the `cover` slot to set the card cover image

使用 `actions` 插槽设置卡片操作栏内容，示例样式排版和事件需要自己实现
Use the `actions` slot to set the content of the card action bar, the example style layout and events need to be implemented by yourself


```html
<uni-card cover="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png">
	<text>这是一个带封面和操作栏的卡片示例，此示例展示了封面插槽和操作栏插槽的用法。</text>
	<template v-slot:actions>
		<view class="card-actions">
			<view class="card-actions-item" @click="actionsClick('分享')">
				<uni-icons type="pengyouquan" size="18" color="#999"></uni-icons>
				<text class="card-actions-item-text">分享</text>
			</view>
			<view class="card-actions-item" @click="actionsClick('点赞')">
				<uni-icons type="heart" size="18" color="#999"></uni-icons>
				<text class="card-actions-item-text">点赞</text>
			</view>
			<view class="card-actions-item" @click="actionsClick('评论')">
				<uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
				<text class="card-actions-item-text">评论</text>
			</view>
		</view>
	</template>
</uni-card>
```



## API

### Card Props

|属性名|类型|默认值|说明|
|property name|type|default value|description|
|:-:|:-:|:-:|:-:|
|title|String|-|标题文字|
|title|String|-|title text|
|sub-title|String|-|副标题文字|
|sub-title|String|-|Subtitle text|
|extra|String|-|标题额外信息|
|extra|String|-|title extra information|
|thumbnail|String	|-|标题左侧缩略图,支持网络图片，本地图片，本图片需要传入一个绝对路径，如：`/static/xxx.png`|
|thumbnail|String |-|Thumbnail on the left side of the title, support network images, local images, this image needs to pass in an absolute path, such as: `/static/xxx.png`|
|cover|String|-|封面图,支持网络图片，本地图片，本图片需要传入一个绝对路径，如：`/static/xxx.png`|
|cover|String|-|Cover image, support network image, local image, this image needs to pass in an absolute path, such as: `/static/xxx.png`|
|is-full|Boolean|false|卡片内容是否通栏，为true时将去除padding值|
|is-full|Boolean|false|Whether the card content is full, if it is true, the padding value will be removed|
|is-shadow|Boolean|false	|卡片内容是否开启阴影|
|is-shadow|Boolean|false |Whether the shadow of the card content is enabled|
|shadow|String|0px 0px 3px 1px rgba(0, 0, 0, 0.08)	|卡片阴影,需符合 css 值|
|shadow|String|0px 0px 3px 1px rgba(0, 0, 0, 0.08) |Card shadow, it must conform to css value|
|border|Boolean|true	|卡片边框|
|border|Boolean|true |card border|
|margin|String|10px|卡片外边距|
|margin|String|10px|Card margins|
|spacing|String|10px|卡片内边距|
|spacing|String|10px|Card padding|
|padding|String|10px|卡片内容内边距|
|padding|String|10px|Card Content Padding|
|border|Boolean|true|卡片边框|
|border|Boolean|true|card border|
|mode[弃用]|String|basic	|卡片模式 ，可选值， basic：基础卡片 ；style ：图文卡片 ； title ：标题卡片|
|mode[deprecated]|String|basic |card mode, optional value, basic: basic card; style: graphic card; title: title card|
|note[弃用]|String|-|底部信息|
|note[Deprecated]|String|-|Bottom Information|

### Card Events

|事件称名|事件说明|返回参数	|
|Event name|Event description|Return parameter|
|:-:|:-:|:-:|
|@click	|点击 Card 触发事件|-|
|@click |Click Card to trigger event|-|


### Card Slots

|插槽称名|说明|
|Slot Name|Description|
|:-:|:-:|
|cover|封面图插槽|
|cover|Cover Image Slot|
|title|卡片头部插槽，替换原header插槽|
|title|Card header slot, replace the original header slot|
|actions|操作栏插槽，替换原footer插槽|
|actions|Action bar slot, replace the original footer slot|
|header[弃用]|卡片头部插槽（ 图文卡片 mode="style" 时，不支持）|
|header[Deprecated]|Card header slot (not supported when graphic card mode="style" )|
|footer[弃用]|卡片底部插槽 |
|footer[Deprecated]|Card Bottom Slot |


## 示例
## Example
::: warning 注意
::: warning attention
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。
The example relies on multiple components such as `uni-card` `uni-section` `uni-scss`, copying the example code directly will not work properly.

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-card) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-card) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/card/card
> template
```vue
<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">卡片组件通用来显示完整独立的一段信息，同时让用户理解他的作用。例如一篇文章的预览图、作者信息、时间等，卡片通常是更复杂和更详细信息的入口点。</text>
		</uni-card>
		<uni-section title="基础卡片" type="line">
			<uni-card :is-shadow="false">
				<text class="uni-body">这是一个基础卡片示例，内容较少，此示例展示了一个没有任何属性不带阴影的卡片。</text>
			</uni-card>
		</uni-section>
		<uni-section title="卡片标题+额外信息" type="line">
			<uni-card title="基础卡片" extra="额外信息">
				<text class="uni-body">这是一个基础卡片示例，此示例展示了一个标题加标题额外信息的标准卡片。</text>
			</uni-card>
		</uni-section>

		<uni-section title="双标题卡片" type="line" >
			<uni-card title="基础卡片" sub-title="副标题" extra="额外信息" :thumbnail="avatar" @click="onClick">
				<text class="uni-body">这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。</text>
			</uni-card>
		</uni-section>

		<uni-section title="通栏卡片" type="line">
			<uni-card title="基础卡片" :isFull="true" sub-title="副标题" extra="额外信息" :thumbnail="avatar">
				<text class="uni-body">这是一个通栏卡片 ，通栏没有外边距，左右会贴合父元素。</text>
			</uni-card>
		</uni-section>

		<uni-section title="卡片封面图+操作栏" type="line">
			<uni-card :cover="cover" @click="onClick">
				<!-- <image slot='cover' style="width: 100%;" :src="cover"></image> -->
				<text class="uni-body">这是一个带封面和操作栏的卡片示例，此示例展示了封面插槽和操作栏插槽的用法。</text>
				<view slot="actions" class="card-actions">
					<view class="card-actions-item" @click="actionsClick('分享')">
						<uni-icons type="pengyouquan" size="18" color="#999"></uni-icons>
						<text class="card-actions-item-text">分享</text>
					</view>
					<view class="card-actions-item" @click="actionsClick('点赞')">
						<uni-icons type="heart" size="18" color="#999"></uni-icons>
						<text class="card-actions-item-text">点赞</text>
					</view>
					<view class="card-actions-item" @click="actionsClick('评论')">
						<uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
						<text class="card-actions-item-text">评论</text>
					</view>
				</view>
			</uni-card>
		</uni-section>

		<uni-section title="自定义卡片内容" type="line">
			<uni-card title="基础卡片" sub-title="副标题" extra="额外信息" padding="10px 0" :thumbnail="avatar" >
				<template v-slot:title>
					<uni-list>
						<uni-list-item :show-switch="true" title="自定义标题"/>
					</uni-list>
				</template>
				<image style="width: 100%;" :src="cover"></image>
				<text class="uni-body uni-mt-5">卡片组件通用来显示完整独立的一段信息，同时让用户理解他的作用。例如一篇文章的预览图、作者信息、时间等，卡片通常是更复杂和更详细信息的入口点。</text>
				<view slot="actions" class="card-actions">
					<view class="card-actions-item" @click="actionsClick('分享')">
						<uni-icons type="pengyouquan" size="18" color="#999"></uni-icons>
						<text class="card-actions-item-text">分享</text>
					</view>
					<view class="card-actions-item" @click="actionsClick('点赞')">
						<uni-icons type="heart" size="18" color="#999"></uni-icons>
						<text class="card-actions-item-text">点赞</text>
					</view>
					<view class="card-actions-item" @click="actionsClick('评论')">
						<uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
						<text class="card-actions-item-text">评论</text>
					</view>
				</view>
			</uni-card>
		</uni-section>

		<uni-section title="卡片+列表" type="line">
			<uni-card padding="0" spacing="0">
				<template v-slot:cover>
					<view class="custom-cover">
						<image class="cover-image" mode="aspectFill" :src="cover">
						</image>
						<view class="cover-content">
							<text class="uni-subtitle uni-white">今日新闻热点</text>
						</view>
					</view>
				</template>
				<uni-list>
					<uni-list-item title="今日新闻" showArrow></uni-list-item>
					<uni-list-item title="今日新闻" showArrow></uni-list-item>
				</uni-list>
				<view slot="actions" class="card-actions no-border">
					<view class="card-actions-item" @click="actionsClick('分享')">
						<uni-icons type="pengyouquan" size="18" color="#999"></uni-icons>
						<text class="card-actions-item-text">分享</text>
					</view>
					<view class="card-actions-item" @click="actionsClick('点赞')">
						<uni-icons type="heart" size="18" color="#999"></uni-icons>
						<text class="card-actions-item-text">点赞</text>
					</view>
					<view class="card-actions-item" @click="actionsClick('评论')">
						<uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
						<text class="card-actions-item-text">评论</text>
					</view>
				</view>
			</uni-card>
		</uni-section>


	</view>
</template>
```
> script
```vue
<script>
	export default {
		components: {},
		data() {
			return {
				cover: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
				avatar: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png',
				extraIcon:{
					color: '#4cd964',
					size: '22',
					type: 'gear-filled'
				}
			}
		},
		methods: {
			onClick(e){
				console.log(e)
			},
			actionsClick(text){
				uni.showToast({
					title:text,
					icon:'none'
				})
			}
		}
	}
</script>
```

```vue
<style lang="scss">

	.container {
		overflow: hidden;
	}

	.custom-cover {
		flex: 1;
		flex-direction: row;
		position: relative;
	}

	.cover-content {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 40px;
		background-color: rgba($color: #000000, $alpha: 0.4);
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-left: 15px;
		font-size: 14px;
		color: #fff;
	}

	.card-actions {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		height: 45px;
		border-top: 1px #eee solid;
	}
	.card-actions-item {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.card-actions-item-text {
		font-size: 12px;
		color: #666;
		margin-left: 5px;
	}
	.cover-image {
		flex: 1;
		height: 150px;
	}
	.no-border {
		border-width: 0;
	}
</style>

```
:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/card/card)
[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/card/card)