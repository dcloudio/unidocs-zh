> **组件名：uni-card**
> 代码块： `uCard`
> 
>  [点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-card)

卡片视图组件。

> **注意事项**
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
> - 因为平台兼容问题 ， 目前 APP-NVUE 安卓平台下不支持阴影
> - **1.2.1 版本有较大改动 ，更新组件请注意组件兼容问题**


### 基本用法

```html
<uni-card>
	<text>这是一个基础卡片示例，内容较少，此示例展示了一个没有任何属性不带阴影的卡片。</text>
</uni-card>
```

### 卡片标题+额外信息
使用 `title` 属性设置卡片标题

使用 `extra` 属性设置卡片标题额外信息

```html
<uni-card title="基础卡片" extra="额外信息">
	<text>这是一个基础卡片示例，此示例展示了一个标题加标题额外信息的标准卡片。</text>
</uni-card>
```

### 双标题卡片 + 略缩图
使用 `sub-title` 属性设置卡片副标题

使用 `thumbnail` 属性设置卡片标题左略缩图

```html
<uni-card title="基础卡片" sub-title="副标题" extra="额外信息" thumbnail="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png">
	<text>这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。</text>
</uni-card>
```

### 通栏卡片
使用 `is-full` 属性设置卡片通栏 ，通栏没有外边距，左右会贴合父元素

```html
<uni-card title="基础卡片" :isFull="true" sub-title="副标题" extra="额外信息">
	<text>这是一个通栏卡片 ，通栏没有外边距，左右会贴合父元素。</text>
</uni-card>
```
### 卡片封面图 + 操作栏

使用 `cover` 属性设置卡片封面图,或者使用 `cover` 插槽设置卡片封面图

使用 `actions` 插槽设置卡片操作栏内容，示例样式排版和事件需要自己实现


```html
<uni-card cover="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png">
	<!-- <image slot='cover' style="width: 100%;" :src="cover"></image> -->
	<text>这是一个带封面和操作栏的卡片示例，此示例展示了封面插槽和操作栏插槽的用法。</text>
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
```

## API

### Card Props

|属性名|类型|默认值|说明|
|:-:|:-:|:-:|:-:|
|title|String|-|标题文字|
|sub-title|String|-|副标题文字|
|extra|String|-|标题额外信息|
|thumbnail|String	|-|标题左侧缩略图,支持网络图片，本地图片，本图片需要传入一个绝对路径，如：`/static/xxx.png`|
|cover|String|-|封面图,支持网络图片，本地图片，本图片需要传入一个绝对路径，如：`/static/xxx.png`|
|is-full|Boolean|false|卡片内容是否通栏，为true时将去除padding值|
|is-shadow|Boolean|false	|卡片内容是否开启阴影|
|shadow|String|0px 0px 3px 1px rgba(0, 0, 0, 0.08)	|卡片阴影,需符合 css 值|
|border|Boolean|true	|卡片边框|
|margin|String|true	|卡片外边距|
|spacing|String|true|卡片内边距|
|padding|String|true|卡片内容内边距|
|border|Boolean|true|卡片边框|
|mode[弃用]|String|basic	|卡片模式 ，可选值， basic：基础卡片 ；style ：图文卡片 ； title ：标题卡片|
|note[弃用]|String|-|底部信息|

### Card Events

|事件称名|事件说明|返回参数	|
|:-:|:-:|:-:|
|@click	|点击 Card 触发事件|-|


### Card Slots

|插槽称名|说明|
|:-:|:-:|
|cover|封面图插槽|
|title|卡片头部插槽，替换原header插槽|
|actions|操作栏插槽，替换原footer插槽|
|header[弃用]|卡片头部插槽（ 图文卡片 mode="style" 时，不支持）|
|footer[弃用]|卡片底部插槽 |

## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/card/card](https://hellouniapp.dcloud.net.cn/pages/extUI/card/card)