::: tip 组件名：uni-tooltip
::: tip Component name: uni-tooltip

> 代码块： `utooltip`
> Code block: `utooltip`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-tooltip)
[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-tooltip)
:::

常用于展示鼠标 hover 时的提示信息。
It is often used to display the prompt information when the mouse hovers.

> 遮挡不住原生组件
> Can't block native components

## 介绍
## introduce

### 安装方式
### Installation method

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。
This component complies with the [easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom) specification. From `HBuilderX 2.5.5`, you only need to import this component into the project, and in the page `template` Can be used directly without `import` and registering `components` in the page.

如需通过`npm`方式使用`uni-ui`组件，另见文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)
If you want to use the `uni-ui` component through `npm`, see also the documentation: [https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn /plugin?id=55)

### 基本用法
### Basic usage

在 `template` 中使用组件
Using components in `template`

```html
<uni-tooltip :content="tooltip显示的内容">
  <button>被包裹的组件</button>
</uni-tooltip>
```

## API

### Tooltip Props

|  属性名   |  类型  | 默认值 |                说明                 |
| property name | type | default value | description |
| :-------: | :----: | :----: | :---------------------------------: |
|   content    | String |        |             弹出层显示的内容              |
| content | String | | The content displayed by the popup layer |
| placement | String |  left  | Tooltip 的出现位置, 目前只支持 left |
| placement | String | left | Tooltip's appearance position, currently only supports left |

### Tooltip Slots

|  名称   |         说明          |
| Name | Description |
| :-----: | :-------------------: |
| default | 被 Tooltip 包裹的组件 |
| default | Component wrapped by Tooltip |
| content | 弹出层插槽 |
| content | Popup slot |

## 示例
## Example

::: warning 注意
::: warning attention
直接拷贝示例代码，无法运行 ，示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件。
Copying the sample code directly will not work. The sample relies on multiple components such as `uni-card` `uni-section` `uni-scss`.

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-tooltip) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-tooltip) , select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.
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
    <uni-section title="插槽用法" type="line" padding>
      <uni-tooltip content="提示文字">一段文字</uni-tooltip>
    </uni-section>
    <uni-section title="自定义弹层宽度" type="line" padding>
      <uni-tooltip content="提示文字">一段文字</uni-tooltip>
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

<style lang="scss"></style>
```

:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/tooltip/tooltip)
[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/tooltip/tooltip)