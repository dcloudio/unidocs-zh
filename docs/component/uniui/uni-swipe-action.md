
::: tip 组件名：uni-swipe-action
> 代码块： `uSwipeAction`、`uSwipeActionItem`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-swipe-action)
:::

通过滑动触发选项的容器

## 介绍
::: warning 注意事项
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
- swipeAction的跟手联动是非常考验性能的。为了提高交互体验，本组件在 app 端 vue 页面、h5、微信小程序使用了wxs 技术，nvue 页面使用 bindingx 技术，可以达到流畅的体验。在其他小程序平台由于底层不支持优化技术，只能使用使用普通 js ，此时性能一般。
- `uni-swipe-action` 和 `uni-swipe-action-item` 需要同时使用
- `uni-swipe-action` 不能嵌套在 `swiper` 中使用 
- 长列表不建议使用 autoClose属性，会影响组件性能，造成卡顿，原因是打开之后要通知其他已经打开的组件关闭，会导致多个组件重新渲染
- 事件中传入 `$event` 获取额外参数
- 向下兼容，需要将 `options` 属性替换成 `right-options`
:::
### 基本用法

```html
<uni-swipe-action>
	<!-- 基础用法 -->
	<uni-swipe-action-item :right-options="options" :left-options="options" @click="onClick" @change="change">
		<view>SwipeAction 基础使用场景</view>
	</uni-swipe-action-item>
	<!-- 使用插槽 （请自行给定插槽内容宽度）-->
	<uni-swipe-action-item>
		<template v-slot:left>
			<view><text>置顶</text></view>
		</template>
		<view>
			<text >使用插槽</text>
		</view>
		<template v-slot:right>
			<view><text>删除</text></view>
		</template>
	</uni-swipe-action-item>
	<!-- 混合用法 -->
	<uni-swipe-action-item :right-options="options">
		<template v-slot:left>
			<view><text>置顶</text></view>
		</template>
		<view><text>混合使用</text></view>
	</uni-swipe-action-item>
</uni-swipe-action>

<!-- 禁止滑动 -->
<uni-swipe-action>
	<uni-swipe-action-item :disabled="true" :right-options="options">
		<view>SwipeAction 基础使用场景</view>
	</uni-swipe-action-item>
</uni-swipe-action>

<!-- 按组使用 -->
<uni-swipe-action>
    <uni-swipe-action-item :right-options="options"  @click="bindClick" @change="swipeChange($event, index)">
		<view >item1</view>
    </uni-swipe-action-item>
    <uni-swipe-action-item :right-options="options"  @click="bindClick" @change="swipeChange($event, index)">
		<view>item2</view>
    </uni-swipe-action-item>
    <uni-swipe-action-item :right-options="options"  @click="bindClick" @change="swipeChange($event, index)">
		<view>item3</view>
    </uni-swipe-action-item>
</uni-swipe-action>

```

```javascript
export default {
  data(){
    return {
      options:[
        {
            text: '取消',
            style: {
                backgroundColor: '#007aff'
            }
        }, {
            text: '确认',
            style: {
                backgroundColor: '#dd524d'
            }
        }
      ]
    }
  },
  methods:{
    onClick(e){
      console.log('点击了'+(e.position === 'left' ? '左侧' : '右侧') + e.content.text + '按钮')
    },
    swipeChange(e,index){
      console.log('当前状态：'+ e +'，下标：' + index)
    }
  }
}

```

## API

### SwipeAction Methods

方法通过 ref 调用 

|方法称名	|说明|
|:-:|:-:|
|resize()|动态添加数据后，如不能正常滑动，需要主动调用此方法，微信小程序、h5、app-vue 不生效|
|closeAll()|关闭所有已经打开的组件|

### SwipeAcitonItem Props

|属性名|类型|可选值|默认值|是否必填|说明|
|:-:|:-:|:-:|:-:|:-:|:-:|
|show|String|left/right/none|none	|否|开启关闭组件，auto-close = false 时生效|
|threshold|Number|-|20|否|滑动阙值|
|disabled|Boolean|-|false|否|是否禁止滑动|
|autoClose|Boolean|-|true|否|其他组件开启的时候，当前组件是否自动关闭，**注意：长列表使用会有性能问题**|
|left-options|Array/Object	|-|-|否|左侧选项内容及样式|
|right-options|Array/Object	|-|-|否|右侧选项内容及样式|

#### LeftOptions & RightOptions Options

|参数|类型|是否必填	|说明|
|:-:|:-:|:-:|:-:|
|text|String|是|按钮的文字	|
|style|Object|否|按钮样式{backgroundColor,color,fontSize}，backgroundColor默认为：#C7C6CD，color默认为：#FFFFFF，fontSize默认为：14px	|



### SwipeAcitonItem Events

|事件称名	|说明|返回值|
|:-:|:-:|:-:|
|@click|点击选项按钮时触发事件|e = {content,index} ，content（点击内容）、index（下标）、position (位置信息)	|
|@change|组件打开或关闭时触发|left:左侧 ，right：右侧，none：关闭|

### SwipeAcitonItem Slots

|名称|说明|
|:-:|:-:|
|-|默认插槽自定义显示内容|
|default|默认内容插槽|
|left|左侧滑动内容	，会覆盖	leftOptions 内容|
|right|右侧滑动内容	，会覆盖	rightOptions 内容|

::: warning 提示
- iOS 端由于存在bounce效果，滑动体验略差，建议禁止bounce效果，禁止方式如下：
```javascript
{
	"path": "swipe-action/swipe-action",
	"style": {
		"navigationBarTitleText": "SwipeAction 滑动操作",
		"disableScroll":true,
		"app-plus":{
			"bounce":"none"
		}
	}
}
```
:::


### Q&A
** Q：动态加载数据，组件滑动失效是怎么回事**
- A：是因为组件会在加载的时候获取相应的节点信息数据 ，获取需要滑动的距离，所以有时候动态加载数据之后，可能是时机的问题，导致节点信息获取失败 ，那么组件就不能正常滑动。
- A：如果是在其他页面通过 vuex 或者uni.$emit 等手段来更新其他页面 uni-swipe-action 数据 ，同样会发生不能滑动的现象，原因是页面隐藏后是不能获取到页面信息的，所以回到 uni-swipe-action 页面后，新增的组件节点信息获取肯定是错误的，所以不能滑动。
- A：值的高兴的是在 1.2.2 版本中重构了组件滑动逻辑 ，在微信小程序、h5、app-vue 中使用了 wxs 优化滑动性能，并且不需要担心动态新增组件导致组件无法滑动的问题，节点信息在滑动时实时获取。
- A：因为其他平台无法使用 wxs ，所以还是会出现无法滑动的问题怎么处理？1.2.2 版本提供了 resize() 方法，无法滑动时调用 resize() 方法重新渲染组件即可，调用方法时要保证节点已经渲染完毕。

** Q：运行到 nvue 下没有样式**
- A：因为 nvue 下样式默认不能使用复杂的css选择器，所以需要在 manifest.json 中配置  "nvueStyleCompiler" 属性
	```json
	// manifest.json
	{
		 "nvueStyleCompiler" : "uni-app",
	}
	```


## 示例
::: warning 注意
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-swipe-action) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/swipe-action/swipe-action
> Template
``` html
<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">通过滑动触发选项的容器，容器内可放置列表等组件，通过左右滑动来触发一些操作。</text>
		</uni-card>
		<uni-section
		    title="基本用法"
		    type="line"
		></uni-section>
		<uni-swipe-action>
			<uni-swipe-action-item
			    :left-options="options2"
			    :threshold="0"
			    :right-options="options1"
			    @click="bindClick"
			>
				<view class="content-box" @click="contentClick">
					<text class="content-text">使用数据填充</text>
				</view>
			</uni-swipe-action-item>
			<uni-swipe-action-item @click="bindClick">
				<template v-slot:left>
					<view class="slot-button">
						<text
						    class="slot-button-text"
						    @click="bindClick({position:'left',content:{text:'置顶'}})"
						>置顶</text>
					</view>
				</template>
				<view class="content-box" @click="contentClick">
					<text class="content-text">使用左右插槽</text>
				</view>
				<template v-slot:right>
					<view class="slot-button" @click="bindClick({position:'right',content:{text:'删除'}})"><text class="slot-button-text">删除</text></view>
				</template>
			</uni-swipe-action-item>
			<uni-swipe-action-item
			    :right-options="options1"
			    @click="bindClick"
			>
				<template v-slot:left>
					<view class="slot-button"><text
						    class="slot-button-text"
						    @click="bindClick({position:'left',content:{text:'置顶'}})"
						>置顶</text></view>
				</template>
				<view class="content-box" @click="contentClick">
					<text class="content-text">数据与插槽混合使用</text>
				</view>
			</uni-swipe-action-item>
		</uni-swipe-action>
		<uni-section
		    title="禁止滑动"
		    type="line"
		></uni-section>
		<uni-swipe-action>
			<uni-swipe-action-item :disabled="true">
				<view class="content-box">
					<text class="content-text">禁止左右滚动</text>
				</view>
			</uni-swipe-action-item>
		</uni-swipe-action>
		<uni-section
		    title="使用变量控制开关"
		    type="line"
		></uni-section>
		<view class="example-body">
			<view
			    class="button"
			    @click="setOpened"
			>
				<text class="button-text">当前状态：{{ isOpened }}</text>
			</view>
		</view>
		<uni-swipe-action>
			<uni-swipe-action-item
			    :left-options="options2"
			    :right-options="options2"
			    :show="isOpened"
			    :auto-close="false"
			    @change="change"
			    @click="bindClick"
			>
				<view class="content-box">
					<text class="content-text">使用变量控制SwipeAction的开启状态</text>
				</view>
			</uni-swipe-action-item>
		</uni-swipe-action>

		<uni-section
		    title="swipe-action 列表"
		    type="line"
		></uni-section>
		<uni-swipe-action ref="swipeAction">
			<uni-swipe-action-item
			    v-for="(item, index) in swipeList"
			    :right-options="item.options"
			    :key="item.id"
			    @change="swipeChange($event, index)"
			    @click="swipeClick($event, index)"
			>
				<view class="content-box">
					<text class="content-text">{{ item.content }}</text>
				</view>
			</uni-swipe-action-item>
		</uni-swipe-action>
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
				show: false,
				isOpened: 'none',
				options1: [{
					text: '取消置顶'
				}],
				options2: [{
						text: '取消',
						style: {
							backgroundColor: '#007aff'
						}
					},
					{
						text: '确认',
						style: {
							backgroundColor: '#F56C6C'
						}
					}
				],
				swipeList: [{
						options: [{
							text: '添加',
							style: {
								backgroundColor: '#F56C6C'
							}
						}],
						id: 0,
						content: '左滑点击添加新增一条数据'
					},
					{
						id: 1,
						options: [{
								text: '置顶'
							},
							{
								text: '删除',
								style: {
									backgroundColor: 'rgb(255,58,49)'
								}
							}
						],
						content: 'item2'
					},
					{
						id: 2,
						options: [{
								text: '置顶'
							},
							{
								text: '标记为已读',
								style: {
									backgroundColor: 'rgb(254,156,1)'
								}
							},
							{
								text: '删除',
								style: {
									backgroundColor: 'rgb(255,58,49)'
								}
							}
						],
						content: 'item3'
					}
				]
			};
		},
		onReady() {
			// 模拟延迟赋值
			// emulate lazy assignment
			setTimeout(() => {
				this.isOpened = 'right';
			}, 1000);
			
			uni.$on('update',res=>{
				console.log(111);
				this.swipeClick({
					content:{
						text:'添加'
					}
				})
			})
		},
		methods: {
			contentClick(){
				console.log('点击内容');
				uni.showToast({
					title:'点击内容',
					icon:'none'
				})
			},
			bindClick(e) {
				console.log(e);
				uni.showToast({
					title: `点击了${e.position === 'left' ? '左侧' : '右侧'} ${e.content.text}按钮`,
					icon: 'none'
				});
			},
			setOpened() {
				if (this.isOpened === 'none') {
					this.isOpened = 'left';
					return;
				}
				if (this.isOpened === 'left') {
					this.isOpened = 'right';
					return;
				}
				if (this.isOpened === 'right') {
					this.isOpened = 'none';
					return;
				}
			},
			change(e) {
				this.isOpened = e;
				console.log('返回：', e);
			},
			swipeChange(e, index) {
				console.log('返回：', e);
				console.log('当前索引：', index);
			},
			swipeClick(e, index) {
				let {
					content
				} = e;
				if (content.text === '删除') {
					uni.showModal({
						title: '提示',
						content: '是否删除',
						success: res => {
							if (res.confirm) {
								this.swipeList.splice(index, 1);
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				} else if (content.text === '添加') {
					if (this.swipeList.length < 10) {
						this.swipeList.push({
							id: new Date().getTime(),
							options: [{
									text: '置顶'
								},
								{
									text: '标记为已读',
									style: {
										backgroundColor: 'rgb(254,156,1)'
									}
								},
								{
									text: '删除',
									style: {
										backgroundColor: 'rgb(255,58,49)'
									}
								}
							],
							content: '新增' + new Date().getTime()
						});
						uni.showToast({
							title: `添加了一条数据`,
							icon: 'none'
						});
					} else {
						uni.showToast({
							title: `最多添加十条数据`,
							icon: 'none'
						});
					}
				} else {
					uni.showToast({
						title: `点击了${e.content.text}按钮`,
						icon: 'none'
					});
				}
			}
		}
	};
</script>
```
> Style
```html
<style lang="scss">
	.content-box {
		flex: 1;
		/* #ifdef APP-NVUE */
		justify-content: center;
		/* #endif */
		height: 44px;
		line-height: 44px;
		padding: 0 15px;
		position: relative;
		background-color: #fff;
		border-bottom-color: #f5f5f5;
		border-bottom-width: 1px;
		border-bottom-style: solid;
	}

	.content-text {
		font-size: 15px;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		padding: 10px 0;
		background-color: #fff;
	}

	.button {
		border-color: #e5e5e5;
		border-style: solid;
		border-width: 1px;
		padding: 4px 8px;
		border-radius: 4px;
	}

	.button-text {
		font-size: 15px;
	}

	.slot-button {
		/* #ifndef APP-NVUE */
		display: flex;
		height: 100%;
		/* #endif */
		flex: 1;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 0 20px;
		background-color: #ff5a5f;
	}

	.slot-button-text {
		color: #ffffff;
		font-size: 14px;
	}
</style>

```
:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/swipe-action/swipe-action)