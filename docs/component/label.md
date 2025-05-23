## label

<!-- UNIAPPCOMJSON.label.compatibility -->

用来改进表单组件的可用性，使用for属性找到对应的id，或者将控件放在该标签下，当点击时，就会触发对应的控件。

for优先级高于内部控件，内部有多个控件的时候默认触发第一个控件。

目前可以绑定的控件有：``<button>``, ``<checkbox>``, ``<radio>``, ``<switch>``。

**属性说明**

|属性名|类型|说明|
|:-|:-|:-|
|for|String|绑定控件的 id|



**注：**
- app-nvue平台 暂不支持for属性

**示例** [查看演示](https://hellouniapp.dcloud.net.cn/pages/component/label/label)

以下示例代码，来自于[hello uni-app项目](https://github.com/dcloudio/hello-uniapp)，推荐使用HBuilderX，新建uni-app项目，选择hello uni-app模板，可直接体验完整示例。

::: preview https://hellouniapp.dcloud.net.cn/pages/component/label/label
> Template
```vue
<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
	<view>
		<view class="uni-common-mt">
			<view class="uni-form-item uni-column">
				<view class="title">表单组件在label内</view>
				<checkbox-group class="uni-list" @change="checkboxChange">
					<label class="uni-list-cell uni-list-cell-pd" v-for="item in checkboxItems" :key="item.name">
						<view>
							<checkbox :value="item.name" :checked="item.checked"></checkbox>
						</view>
						<view>{{item.value}}</view>
					</label>
				</checkbox-group>
			</view>

			<view class="uni-form-item uni-column">
				<view class="title">label用for标识表单组件</view>
				<radio-group class="uni-list" @change="radioChange">
					<label class="uni-list-cell uni-list-cell-pd" v-for="(item,index) in radioItems" :key="index">
						<view>
							<radio :id="item.name" :value="item.name" :checked="item.checked"></radio>
						</view>
						<view>
							<label class="label-2-text" :for="item.name">
								<text>{{item.value}}</text>
							</label>
						</view>
					</label>
				</radio-group>
			</view>

			<view class="uni-form-item uni-column">
				<view class="title">label内有多个时选中第一个</view>
				<checkbox-group class="uni-list" @change="checkboxChange">
					<label class="label-3">
						<view class="uni-list-cell uni-list-cell-pd">
							<checkbox class="checkbox-3">选项一</checkbox>
						</view>
						<view class="uni-list-cell uni-list-cell-pd">
							<checkbox class="checkbox-3">选项二</checkbox>
						</view>
						<view class="uni-link uni-center" style="margin-top:20rpx;">点击该label下的文字默认选中第一个checkbox</view>
					</label>
				</checkbox-group>
			</view>

		</view>
	</view>
</template>
```
> Script
```vue
<script>
export default {
    data() {
        return {
            checkboxItems: [{
                    name: 'USA',
                    value: '美国'
                },
                {
                    name: 'CHN',
                    value: '中国',
                    checked: 'true'
                }
            ],
            radioItems: [{
                    name: 'USA',
                    value: '美国'
                },
                {
                    name: 'CHN',
                    value: '中国',
                    checked: 'true'
                }
            ],
            hidden: false
        }
    },
    methods: {
        checkboxChange: function(e) {
            console.log(e)
            var checked = e.target.value
            var changed = {}
            for (var i = 0; i < this.checkboxItems.length; i++) {
                if (checked.indexOf(this.checkboxItems[i].name) !== -1) {
                    changed['checkboxItems[' + i + '].checked'] = true
                } else {
                    changed['checkboxItems[' + i + '].checked'] = false
                }
            }
        },
        radioChange: function(e) {
            var checked = e.target.value
            var changed = {}
            for (var i = 0; i < this.radioItems.length; i++) {
                if (checked.indexOf(this.radioItems[i].name) !== -1) {
                    changed['radioItems[' + i + '].checked'] = true
                } else {
                    changed['radioItems[' + i + '].checked'] = false
                }
            }
        }
    }
}
</script>
```
:::

<!-- UNIAPPCOMJSON.label.reference -->
