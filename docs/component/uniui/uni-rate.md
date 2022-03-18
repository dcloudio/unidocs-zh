
::: tip 组件名：uni-rate
> 代码块： `uRate`
> 关联组件：`uni-icons`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-rate)
:::

评分组件，多用于购买商品后，对商品进行评价等场景

## 介绍
::: warning 注意事项
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的使用说明，可以帮你避免一些错误。
> - 暂时不支持零星选择
> - 当前版本暂不支持修改图标，后续版本会继续优化
> - 绑定值推荐使用 `v-model` 的方式
> - 如需设置一个星星表示多分，如：显示5个星星，最高分10分。这种情况请在 change 事件监听中自行处理，获取到的值乘以你的基数就可以，默认组件是一星一分
:::

### 基本用法 

```html
<!-- 基本用法 -->
<!-- 需要在 script 中绑定 value 变量 -->
<uni-rate v-model="value" @change="onChange"/>

<!-- 不支持滑动手势选择评分 -->
<uni-rate :touchable="false" :value="5"/>
<!-- 设置尺寸大小 -->
<uni-rate :size="18" :value="5"/>

<!-- 设置评分数 -->
<uni-rate :max="10" :value="5" />
	
<!-- 设置星星间隔 -->
<uni-rate :value="4" :margin="20" />	

<!-- 设置颜色 -->
<uni-rate :value="3" color="#bbb" active-color="red" />

<!-- 选择半星 -->
<uni-rate allow-half :value="3.5" />

<!-- 只读状态 -->
<uni-rate :readonly="true" :value="2" />

<!-- 禁用状态 -->
<uni-rate :disabled="true" disabledColor="#ccc" :value="3" />

<!-- 未选中的星星为镂空状态 -->
<uni-rate :value="3" :is-fill="false" />
			 
```

```javascript

export default {
	components: {},
	data() {
		return {
			value: 2
		}
	},
	methods: {
		onChange(e) {
			console.log('rate发生改变:' + JSON.stringify(e))
		}
	}
}

```

## API
### Rate Props

|属性名|类型|默认值|说明|
|:-:|:-:|:-:|:-:	|
|value/v-model|Number| 0|当前评分|
|color|String| #ececec|未选中状态的星星颜色|
|activeColor|String| #ffca3e	|选中状态的星星颜色|
|disabledColor|String| #c0c0c0|禁用状态的星星颜色|
|size|Number| 24|星星的大小|
|max|Number| 5|	最大评分评分数量，目前一分一颗星|
|margin|	Number| 0|星星的间距，单位 px|
|isFill|Boolean| true|星星的类型，是否为实心类型|
|disabled|Boolean| false|是否为禁用状态 (之前版本为已读状态，现更正为禁用状态)|
|readonly|Boolean| false|是否为只读状态|
|allowHalf|Boolean| false|是否展示半星|
|touchable|Boolean| true|是否支持滑动手势|

### Rate Events

|事件称名|说明|返回参数|
|:-:|:-:|:-:	|
|@change|改变 value 的值返回|	e = { value:number }|	


## 示例
::: danger 注意
示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件，直接拷贝示例代码将无法正常运行 。

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-rate) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
:::

::: preview https://hellouniapp.dcloud.net.cn/pages/extUI/rate/rate
> Template
``` html
<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">评分组件多用于商品评价打分、服务态度评价、用户满意度等场景。</text>
		</uni-card>
		<uni-section title="基本用法" type="line" padding>
			<uni-rate v-model="rateValue" @change="onChange" />
		</uni-section>
		<uni-section title="不支持滑动手势选择评分" subTitle="设置 touchable 属性控制是否开启手势选择" type="line" padding>
			<uni-rate :touchable="false" :value="5" @change="onChange" />
		</uni-section>
		<uni-section title="设置尺寸大小" subTitle="设置 size 属性控制组件大小" type="line" padding>
			<uni-rate size="18" :value="5" />
		</uni-section>
		<uni-section title="设置评分数" subTitle="设置 max 属性控制组件最大星星数量" type="line" padding>
			<uni-rate :max="10" :value="5" />
		</uni-section>
		<uni-section title="设置星星间隔" subTitle="设置 margin 属性控制星星间隔" type="line" padding>
			<uni-rate :value="4" margin="20" />
		</uni-section>
		<uni-section title="设置颜色" subTitle="使用 color 属性设置星星颜色" type="line" padding>
			<uni-rate :value="3" color="#bbb" active-color="red" />
		</uni-section>
		<uni-section title="半星" subTitle="使用 allow-half 属性设置是否显示半星" type="line" padding>
			<uni-rate allow-half :value="3.5" />
		</uni-section>
		<uni-section title="只读状态" subTitle="使用 readonly 属性设置组件只读" type="line" padding>
			<uni-rate :readonly="true" :value="2" />
		</uni-section>
		<uni-section title="禁用状态" subTitle="使用 disabled 属性设置组件禁用" type="line" padding>
			<uni-rate :disabled="true" disabledColor="#ccc" :value="3" />
		</uni-section>
		<uni-section title="未选中的星星为镂空状态" subTitle="使用 is-fill 属性设置星星镂空" type="line" padding>
			<uni-rate :value="3" :is-fill="false" />
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
				rateValue: 0
			}
		},
		onLoad() {
			// 模拟动态赋值
			setTimeout(() => {
				this.rateValue = 3
			}, 1000)
		},
		methods: {
			onChange(e) {
				console.log('rate发生改变:' + JSON.stringify(e))
				// console.log(this.rateValue);
			}
		}
	}
</script>

```
:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/rate/rate)