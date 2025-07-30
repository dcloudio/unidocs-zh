::: tip 组件名：uni-data-select

> 代码块： `uDataSelect`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-data-select)
:::

当选项过多时，使用下拉菜单展示并选择内容
::: warning 注意事项
- `uni-data-select 1.1.0 版本` 发布，新增支持多选和插槽等功能
:::

## 介绍

本组件要解决问题包括：

1. 数据绑定型组件：给本组件绑定一个 data，会自动渲染一组候选内容。再以往，开发者需要编写不少代码实现类似功能
2. 自动的表单校验：组件绑定了 data，且符合[uni-forms](https://ext.dcloud.net.cn/plugin?id=2773)组件的表单校验规范，搭配使用会自动实现表单校验

在 uniCloud 开发中，`DB Schema`中配置了 enum 枚举等类型后，在 web 控制台的[自动生成表单](https://uniapp.dcloud.io/uniCloud/schema?id=autocode)功能中，会自动生成`uni-data-select`组件并绑定好 data

> **注意事项**
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
>
> - 组件需要依赖 `sass` 插件 ，请自行手动安装
> - 本组件为数据驱动，目的是快速投入使用，只可通过 style 覆盖有限样式，不支持自定义更多样式
> - 如使用过程中有任何问题，或者您对 uni-ui 有一些好的建议，欢迎加入 [uni-im](https://im.dcloud.net.cn/#/?joinGroup=65aa42e5465fe748c837da2b)
> - 组件支持 nvue ，需要在 `manifest.json > app-plus` 节点下配置 `"nvueStyleCompiler" : "uni-app"`
> - 如组件显示有问题 ，请升级 `HBuilderX` 为 `v3.1.0` 以上

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另行文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

### 基本用法

设置 `localdata` 属性后，组件会通过数据渲染出对应的内容

```html
<template>
  <view>
    <uni-data-select
      v-model="value"
      :localdata="range"
      @change="change"
    ></uni-data-select>
  </view>
</template>
```

```javascript
export default {
  data() {
    return {
      value: 1,
      range: [
        { value: 0, text: "篮球" },
        { value: 1, text: "足球" },
        { value: 2, text: "游泳" },
      ],
    };
  },
  methods: {
    change(e) {
      console.log("e:", e);
    },
  },
};
```

### 多选
> 新增于 `uni-data-select 1.1.0`

设置 `multiple` 属性，组件展示出多选框

需要注意 `:multiple="true"` 时（多选） ， `v-model` 的值是 Array 类型

```vue
<template>
	<view>
		<uni-data-select multiple v-model="value" :localdata="range" @change="change"></uni-data-select>
	</view>
</template>
<script>
	export default {
		data() { 
			return {
				value: [0,2],
				range: [{"value": 0,"text": "篮球"	},{"value": 1,"text": "足球"},{"value": 2,"text": "游泳"}]
			}
		},
		methods: {
			change(e){
				console.log('e:',e);
			}
		}
	}
</script>
```

### 云端数据示例

```html
<template>
  <view>
    <!-- 云端数据 -->
    <uni-data-select
      collection="opendb-app-list"
      field="appid as value, name as text"
      label="应用选择"
      v-model="appid"
      :clear="false"
    />
  </view>
</template>
```

## API

### DataSelect Props

|    属性名     |     类型      |   可选值   |  默认值  |                         说明                         |  兼容说明  |
| :-----------: | :-----------: | :--------: | :------: | :--------------------------------------------------: |:------: |
| value/v-model | String/Number |     -      |    -     | 已选择数据的 value 值（当其值为0时不进行初始化赋值）   |          |
|   localdata   |     Array     |     -      |    -     |                     本地渲染数据                 |          |
|     clear     |    Boolean    |     -      |    -     |                  是否可以清空已选项               |          |
|     label     |    String     |            |          |                       左侧标题                  |          |
|  placeholder  |    String     |     -      |  请选择  |                   输入框的提示文字                |          |
|   emptyTips   |    String     |     -      | 暂无数据 |         没有数据时显示的文字 ，本地数据无效          |          |
|   placement   |    String     | bottom,top |  bottom  |                      弹出时位置                |          |
|   page-size   |    Number     |     -      |    20    | 返回的数据量（云端请求时有效，更多云端属性详见下方） |          |
|   multiple   |    Boolean     |     -      |    false    | 是否开启多选 |  `1.1.0` 新增        |
|   wrap    |    Boolean     |     -      |    false    | 是否开启换行展示(默认展示 1 行) |  `1.1.0` 新增        |
|   align   |    String     |     left,center,right      |    left    | 选择文字的位置 |  `1.1.0` 新增        |
|   hideRight   |    Boolean     |     -      |    false    | 是否隐藏右侧按钮 |  `1.1.0` 新增        |
|   mode   |    String     |     default,underline,none      |    default    | 边框样式,default(四周边框),underline(下边框),none(无边框) |  `1.1.0` 新增        |


#### 使用云端数据时的属性（DataCom Props）

更多 DataCom 支持的属性参考（包括：设置返回20个的默认大小）[更多](https://uniapp.dcloud.net.cn/component/datacom.html#%E8%AF%AD%E6%B3%95%E6%89%8B%E5%86%8C)

#### Localdata Options

`localdata` 属性的格式为数组，数组内每项是对象，需要严格遵循如下格式

| 属性名  |    说明    |
| :-----: | :--------: |
|  text   |  显示文本  |
|  value  | 选中后的值 |
| disable |  是否禁用  |

### DataSelect Events

| 事件名  |        事件说明        | 返回参数 |兼容性说明 |
| :-----: | :--------------------: | :------: |:------: |
| @change | 选中状态改变时触发事件 |    -     |   -     |
| @open | 选择框开启时触发 |    -     | `1.1.0` 新增  |
| @close | 选择框关闭时触发 |    -     | `1.1.0` 新增  |
| @clear | 点击清除按钮之后触发 |    -     | `1.1.0` 新增  |

### DataSelect Slots

| 插槽名  |        插槽说明        | 返回参数 | 兼容性说明 |
| :-----: | :--------------------: | :------: |:------: |
| selected | 展示选中的数据,数据返回数组,单选 1 项,多选 n 项 |  `selectedItems`:(数组 Localdata Options)     |  `1.1.0` 新增  |
| empty | 选择框中的空数据展示 |  -    |  `1.1.0` 新增  |
| option | 选择框中的数据展示项, item是数据项,itemSelected是该项是否选中 |  `item`:(对象 Localdata Options) , `itemSelected` : Boolean    |  `1.1.0` 新增  |

> **通过插槽扩展**
> 需要注意的是当使用插槽时，内置样式将会失效，只保留排版样式，此时的样式需要开发者自己实现
> `uni-data-select` 提供了三个插槽: `selected`,`empty`,`option`
> - `selected` 可以自定义选择内容展示区域,需要注意,单选和多选返回都是数组
> - `empty` 可以自定义下拉选择框的空数据展示
> - `option` 可以自定义下拉选择框展示的每一项,slot 外层有for循环和click事件,点击元素会自动触发点击,如果需要自定义点击逻辑,需要阻止冒泡 click.stop 之后 , 调用 $ref.uniDataSelect.change({text,value}) 具体可见下方示例

**插槽示例**

> 注意此示例代码用到了其它uniui组件,运行请到下方示例中查看

```vue
<template>
	<view>
		<uni-section title="多选使用插槽" subTitle="多选的时候,超过2个显示省略;" type="line">
			<view class="uni-px-5 uni-pb-5">
				<uni-data-select ref="uniDataSelect" v-model="multipleValue" multiple mode="underline" placement="bottom" :localdata="range">
					<template v-slot:selected="{selectedItems}">
						<view class="slot-box">
							<view v-for="item in sliceArray(selectedItems)" :key="item.value" class="slot-content-item">
								{{item.text}}
							</view>
							<view v-if="selectedItems.length > 2" class="slot-content-item"> +{{selectedItems.length - 2}} more
							</view>
							<view v-if="selectedItems.length == 0" class="slot-content-item"> 没有选择项 </view>
						</view>
					</template>
					<template v-slot:option="{item,itemSelected}">
						<view>
							<uni-list-item showSwitch :switchChecked="itemSelected" :title="item.text" :note="item.value+''"
								:disabled="item.disable"></uni-list-item>
						</view>
					</template>
				<!-- 可以拦截点击事件之后自定义
					<template v-slot:option="{item,itemSelected}">
						<view @click.stop>
							<uni-list-item showSwitch :switchChecked="itemSelected" :title="item.text" :note="item.value+''"
								:disabled="item.disable" @switchChange="switchChange($event,item)"></uni-list-item>
						</view>
					</template> -->
					<template v-slot:empty>
						<view class="empty-box">
							<uni-icons type="spinner-cycle" size="30"></uni-icons>
							<view>empty</view>
						</view>
					</template>
				</uni-data-select>
			</view>
		</uni-section>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				multipleValue: [1, 2, 3],
        range: [{ "value": 0, "text": "篮球运动", "disable": true }, { "value": 1, "text": "足球运动" }, { "value": 2, "text": "游泳健身运动" }, { "value": 3, "text": "跑步有氧运动" }, { "value": 4, "text": "网球运动" }, { "value": 5, "text": "羽毛球运动" }, { "value": 6, "text": "乒乓球运动" }, { "value": 7, "text": "保龄球运动" }]
			}
		},
		methods: {
			change(e) {
				console.log('单选值:', e);
				console.log("range", this.range)
				console.log("value", this.value)
			},
			switchChange(e, item) {
				console.log("switch change", e, item)
				// 传入由 slot 获取的 item 即可
				this.$refs.uniDataSelect.change(item)
			},
			// 支付宝小程序上需要这样
			sliceArray(ls) {
				if (Array.isArray(ls)) {
					return ls.slice(0, 2)
				}
				return ls
			}
		}
	}
</script>
<style lang="scss">
	.slot-content-item {
		background-color: #909399;
		padding: 2px 5px;
		border-radius: 5px;
		color: #fff;
	}

	.slot-box {
		gap: 5px;
		display: flex;
		flex-wrap: wrap;
	}

	.empty-box {
		width: 100%;
		height: 100px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.select-box {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.empty-box {
		width: 100%;
		height: 100px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
```


## 示例

::: warning 注意
直接拷贝示例代码，无法运行 ，示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件。

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-data-select) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
:::

:::preview https://hellouniapp.dcloud.net.cn/pages/extUI/data-select/data-select

> Template
```html
<template>
	<view>
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">通过数据驱动的单选框和复选框，可直接通过连接 uniCloud 获取数据，同时可以配合表单组件 uni-forms 使用</text>
		</uni-card>
		<uni-section title="本地数据 (单选)" type="line">
			<view class="uni-px-5 uni-pb-5">
				<uni-data-select v-model="value" :localdata="range" @change="change"></uni-data-select>
			</view>
		</uni-section>
		<uni-section title="多选换行显示" type="line">
			<view class="uni-px-5 uni-pb-5">
				<uni-data-select v-model="multipleValue" multiple wrap :localdata="range" @change="changeMultiple"
					label="换行显示"></uni-data-select>
			</view>
		</uni-section>
		<uni-section title="禁用状态" type="line">
			<view class="uni-px-5 uni-pb-5">
				<uni-data-select v-model="value" :disabled="true" :localdata="range"></uni-data-select>
			</view>
		</uni-section>
		<!-- <uni-section title="云端数据" subTitle="连接云服务空间, 且存在相关的数据表才能生效(此处演示, 未连接云服务空间, 故不生效, 且有报错)" type="line">
			<uni-data-select collection="opendb-app-list" field="appid as value, name as text" v-mode="value" />
		</uni-section> -->
		<uni-section title="设置弹出位置,文字出现位置,下划线显示" type="line">
			<view class="uni-px-5 uni-pb-5">
				<uni-data-select label="应用选择" placement="top" align="center" mode="underline" v-model="value" :localdata="range"
					@change="change"></uni-data-select>
			</view>
		</uni-section>
		<uni-section title="单选使用插槽" type="line">
			<view class="uni-px-5 uni-pb-5">
				<uni-data-select v-model="value" mode="underline" :localdata="range">
					<template v-slot:selected="{selectedItems}">
						<view class="slot-box">
							<view v-for="item in sliceArray(selectedItems)" :key="item.value" class="slot-content-item">
								{{item.text}}
							</view>
							<view v-if="selectedItems.length == 0" class="slot-content-item"> 没有选择项 </view>
						</view>
					</template>
					<template v-slot:option="{item,itemSelected}">
						<view class="item-view" :class="{
							'item-selected': itemSelected,
							'item-disabled': item.disable
						}">
							{{ item.text }}
						</view>
					</template>
				</uni-data-select>
			</view>
		</uni-section>
		<uni-section title="多选使用插槽" subTitle="多选的时候,超过2个显示省略;" type="line">
			<view class="uni-px-5 uni-pb-5">
				<uni-data-select v-model="multipleValue" multiple mode="underline" placement="top" :localdata="range">
					<template v-slot:selected="{selectedItems}">
						<view class="slot-box">
							<view v-for="item in sliceArray(selectedItems)" :key="item.value" class="slot-content-item">
								{{item.text}}
							</view>
							<view v-if="selectedItems.length > 2" class="slot-content-item"> +{{selectedItems.length - 2}} more </view>
							<view v-if="selectedItems.length == 0" class="slot-content-item"> 没有选择项 </view>
						</view>
					</template>
					<template v-slot:option="{item,itemSelected}">
						<view>
							<uni-list-item showSwitch :switchChecked="itemSelected" :title="item.text" :note="item.value+''"
								:disabled="item.disable"></uni-list-item>
						</view>
					</template>
				</uni-data-select>
			</view>
		</uni-section>
	</view>
</template>
```
> Script
``` html
<script>
	export default {
		data() {
			return {
				value: 1,
				multipleValue: [1, 2, 3],
				range: [{
					"value": 0,
					"text": "篮球运动",
					"disable": true
				}, {
					"value": 1,
					"text": "足球运动",
				}, {
					"value": 2,
					"text": "游泳健身运动"
				}, {
					"value": 3,
					"text": "跑步有氧运动",
				}, {
					"value": 4,
					"text": "网球运动"
				}, {
					"value": 5,
					"text": "羽毛球运动"
				}, {
					"value": 6,
					"text": "乒乓球运动"
				}, {
					"value": 7,
					"text": "保龄球运动"
				}]
			}
		},
		methods: {
			change(e) {
				console.log('单选值:', e);
				console.log("range", this.range)
				console.log("value", this.value)
			},
			changeMultiple(e) {
				console.log('多选值:', e);
			},
			open() {
				console.log("打开选择框")
			},
			close() {
				console.log("关闭选择框")
			},
			clear() {
				console.log("清除选择框")
			},
			// 支付宝小程序上需要这样
			sliceArray(ls) {
				if (Array.isArray(ls)) {
					return ls.slice(0, 2)
				}
				return ls
			}
		}
	}
</script>
```
> Style
```html
<style lang="scss">
	.text {
		font-size: 12px;
		color: #666;
		margin-top: 5px;
	}

	.uni-px-5 {
		padding-left: 10px;
		padding-right: 10px;
	}

	.uni-pb-5 {
		padding-bottom: 10px;
	}

	.slot-content-item {
		background-color: $uni-secondary-color;
		padding: 2px 5px;
		border-radius: 5px;
		color: #fff;
	}

	.slot-box {
		gap: 5px;
		display: flex;
		flex-wrap: wrap;
	}

	.empty-box {
		width: 100%;
		height: 100px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.select-box {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.item-view {
		padding: 8px 12px;
		border-radius: 4px;
		transition: background-color 0.3s ease;
	}

	.item-selected {
		background-color: #007aff;
		color: #fff;
	}

	.item-disabled {
		background-color: #f5f5f5;
		color: #999;
		opacity: 0.6;
	}

	.item-disabled.item-selected {
		background-color: #d0d0d0;
		color: #666;
	}
</style>

```

:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/data-select/data-select)