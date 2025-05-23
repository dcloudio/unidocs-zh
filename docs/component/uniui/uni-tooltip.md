::: tip 组件名：uni-tooltip

> 代码块： `utooltip`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-tooltip)
:::

常用于展示鼠标 hover 时的提示信息。

> 遮挡不住原生组件

## 介绍

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)

### 基本用法

在 `template` 中使用组件

```html
<uni-tooltip :content="tooltip显示的内容" placement="left">
  <button>被包裹的组件</button>
</uni-tooltip>
```

## API

### Tooltip Props

|  属性名   |  类型  | 默认值 |                说明                 |
| :-------: | :----: | :----: | :---------------------------------: |
|   content    | String |        |             弹出层显示的内容              |
| placement | String |  left  | Tooltip 的出现位置, 支持 left,right,top,bottom |

### Tooltip Slots

|  名称   |         说明          |
| :-----: | :-------------------: |
| default | 被 Tooltip 包裹的组件 |
| content | 弹出层插槽 |

## 示例

::: warning 注意
直接拷贝示例代码，无法运行 ，示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件。

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-tooltip) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
:::

:::preview https://hellouniapp.dcloud.net.cn/pages/extUI/tooltip/tooltip

```html
<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">常用于展示鼠标 hover 时的提示信息，注意：无法覆盖原生组件</text>
    </uni-card>
    <uni-section title="基础用法" type="line" padding>
      <uni-tooltip content="提示文字" />
    </uni-section>
    <uni-section title="自定义弹出层方向" type="line" padding>
			<view class="direction-container">
				<uni-tooltip content="示例文字" placement="top">
					<view class="item">上</view>
				</uni-tooltip>
				<uni-tooltip class="item" content="示例文字" placement="bottom">
					<view class="item">下</view>
				</uni-tooltip>
				<uni-tooltip class="item" content="示例文字" placement="left">
					<view class="item">左</view>
				</uni-tooltip>
				<uni-tooltip class="item" content="示例文字" placement="right">
					<view class="item">右</view>
				</uni-tooltip>
			</view>
		</uni-section>
  </view>
</template>

<script>
  export default {
    components: {},
    data() {
      return {};
    },
  };
</script>

<style lang="scss">
  .direction-container {
		display: flex;
		width: 100px;
		margin: 0 auto;
		flex-wrap: wrap;
	}

	.item {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		background-color: #ebebeb;
		border-radius: 10px;
		margin: 5px;
	}
</style>
```

:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/tooltip/tooltip)