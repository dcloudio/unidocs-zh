::: tip 组件名：uni-data-select
::: tip component name: uni-data-select

> 代码块： `uDataSelect`
> Code block: `uDataSelect`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-data-select)
[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-data-select)
:::

当选项过多时，使用下拉菜单展示并选择内容
When there are too many options, use the drop-down menu to display and select content

## 介绍
## introduce

本组件要解决问题包括：
Problems to be solved by this component include:

1. 数据绑定型组件：给本组件绑定一个 data，会自动渲染一组候选内容。再以往，开发者需要编写不少代码实现类似功能
1. Data-bound component: Bind a data to this component, and a set of candidate content will be automatically rendered. In the past, developers need to write a lot of code to achieve similar functions
2. 自动的表单校验：组件绑定了 data，且符合[uni-forms](https://ext.dcloud.net.cn/plugin?id=2773)组件的表单校验规范，搭配使用会自动实现表单校验
2. Automatic form verification: The component is bound with data and conforms to the form verification specification of the [uni-forms](https://ext.dcloud.net.cn/plugin?id=2773) component. Automatically implement form validation

在 uniCloud 开发中，`DB Schema`中配置了 enum 枚举等类型后，在 web 控制台的[自动生成表单](https://uniapp.dcloud.io/uniCloud/schema?id=autocode)功能中，会自动生成`uni-data-select`组件并绑定好 data
In the development of uniCloud, after configuring the enum enumeration and other types in `DB Schema`, in the [Auto Generate Form](https://uniapp.dcloud.io/uniCloud/schema?id=autocode) function of the web console , will automatically generate the `uni-data-select` component and bind the data

> **注意事项**
> **Notes**
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的注意事项，可以帮你避免一些错误。
> In order to avoid wrong use and bring you a bad development experience, please read the following precautions carefully before using the component, which can help you avoid some mistakes.
>
> - 组件需要依赖 `sass` 插件 ，请自行手动安装
> - The component needs to depend on the `sass` plugin, please install it manually
> - 本组件为数据驱动，目的是快速投入使用，只可通过 style 覆盖有限样式，不支持自定义更多样式
> - This component is data-driven and aims to be put into use quickly. It can only override limited styles through style, and does not support customizing more styles
> - 如使用过程中有任何问题，或者您对 uni-ui 有一些好的建议，欢迎加入 uni-ui 交流群：871950839
> - If you have any problems during use, or you have some good suggestions for uni-ui, welcome to join the uni-ui exchange group: 871950839
> - 组件支持 nvue ，需要在 `manifest.json > app-plus` 节点下配置 `"nvueStyleCompiler" : "uni-app"`
> - The component supports nvue , you need to configure `"nvueStyleCompiler" : "uni-app"` under the `manifest.json > app-plus` node
> - 如组件显示有问题 ，请升级 `HBuilderX` 为 `v3.1.0` 以上
> - If there is a problem with the component display, please upgrade `HBuilderX` to `v3.1.0` or above

### 安装方式
### Installation method

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。
This component complies with the [easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom) specification. From `HBuilderX 2.5.5`, you only need to import this component into the project, in the page `template` Can be used directly without `import` and registering `components` in the page.

如需通过`npm`方式使用`uni-ui`组件，另行文档：[https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/plugin?id=55)
If you need to use the `uni-ui` component through `npm`, please refer to the separate document: [https://ext.dcloud.net.cn/plugin?id=55](https://ext.dcloud.net.cn/ plugin?id=55)

### 基本用法
### Basic usage

设置 `localdata` 属性后，组件会通过数据渲染出对应的内容
After setting the `localdata` attribute, the component will render the corresponding content through the data

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
      value: 0,
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

### 云端数据示例
### Cloud data example

```html
<template>
  <view>
    <!-- 云端数据 -->
    <!-- Cloud data -->
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

|    属性名     |     类型      | 可选值 |  默认值  |                                说明                                 |
| property name | type | optional value | default value | description |
| :-----------: | :-----------: | :----: | :------: | :-----------------------------------------------------------------: |
| value/v-model | String/Number |   -    |    -     |                         已选择数据的 value 值                    |
| value/v-model | String/Number | - | - | value of selected data |
|   localdata   |     Array     |   -    |    -     |                           本地渲染数据                            |
| localdata | Array | - | - | local rendering data |
|     clear     |    Boolean    |   -    |    -     |                         是否可以清空已选项                          |
| clear | Boolean | - | - | Whether to clear the selected options |
|     label     |    String     |        |          |                              左侧标题                               |
| label | String | | | Left title |
|  placeholder  |    String     |   -    |  请选择  |                          输入框的提示文字                           |
| placeholder | String | - | Please select | Prompt text for input box |
|   emptyText   |    String     |   -    | 暂无数据 |                 没有数据时显示的文字 ，本地数据无效                 |
| emptyText | String | - | No data | Text displayed when there is no data, local data is invalid |

#### DataCom Props

更多 DataCom 支持的属性参考[更多](https://uniapp.dcloud.net.cn/component/datacom.html#%E8%AF%AD%E6%B3%95%E6%89%8B%E5%86%8C)
More attributes supported by DataCom [more](https://uniapp.dcloud.net.cn/component/datacom.html#%E8%AF%AD%E6%B3%95%E6%89%8B%E5 %86%8C)

#### Localdata Options

`localdata` 属性的格式为数组，数组内每项是对象，需要严格遵循如下格式
The format of the `localdata` attribute is an array, and each item in the array is an object, which needs to strictly follow the following format

| 属性名  |    说明    |
| attribute name | description |
| :-----: | :--------: |
|  text   |  显示文本  |
| text | Display text |
|  value  | 选中后的值 |
| value | Selected value |
| disable |  是否禁用  |
| disable | Whether to disable |

### DataSelect Events

| 事件名  |        事件说明        | 返回参数 |
| Event name | Event description | Return parameter |
| :-----: | :--------------------: | :------: |
| @change | 选中状态改变时触发事件 |    -     |
| @change | Trigger an event when the selected state changes | - |

## 示例
## Example

::: warning 注意
::: warning attention
直接拷贝示例代码，无法运行 ，示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件。
Copying the sample code directly will not work. The sample relies on multiple components such as `uni-card` `uni-section` `uni-scss`.

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-data-select) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-data-select), select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.
:::

:::preview https://hellouniapp.dcloud.net.cn/pages/extUI/data-select/data-select

```html
<template>
  <view>
    <uni-card is-full>
      <text class="uni-h6"
        >通过数据驱动的单选框和复选框，可直接通过连接 uniCloud
        获取数据，同时可以配合表单组件 uni-forms 使用</text
      >
    </uni-card>
    <uni-section title="本地数据" type="line">
      <uni-data-select
        v-model="value"
        :localdata="range"
        @change="change"
      ></uni-data-select>
    </uni-section>
    <uni-section
      title="云端数据"
      subTitle="连接云服务空间, 且存在相关的数据表才能生效(此处演示, 未连接云服务空间, 故不生效, 且有报错)"
      type="line"
    >
      <uni-data-select
        collection="opendb-app-list"
        field="appid as value, name as text"
        v-mode="value"
      />
    </uni-section>
    <uni-section title="是否可清除已选项" type="line">
      <uni-data-select
        v-model="value"
        :localdata="range"
        @change="change"
        :clear="false"
      ></uni-data-select>
    </uni-section>
    <uni-section title="配置左侧标题" type="line">
      <uni-data-select
        v-model="value"
        :localdata="range"
        @change="change"
        label="应用选择"
      ></uni-data-select>
    </uni-section>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        value: 0,
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
</script>

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
</style>
```
:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/data-select/data-select)
[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/data-select/data-select)