::: tip 组件名：uni-breadcrumb
::: tip component name: uni-breadcrumb

> 代码块： `uBreadcrumb`
> Code block: `uBreadcrumb`

[点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-breadcrumb)
[Click to download & install](https://ext.dcloud.net.cn/plugin?name=uni-breadcrumb)
:::

显示当前页面的路径，快速返回之前的任意页面。
Display the path of the current page and quickly return to any previous page.

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
<uni-breadcrumb separator="/">
  <uni-breadcrumb-item v-for="(route,index) in routes" :key="index" :to="route.to">
    {{route.name}}
  </uni-breadcrumb-item>
</uni-breadcrumb>
```

```js
export default {
  name: "uni-stat-breadcrumb",
  data() {
    return {
      routes: [
        {
          to: "/A",
          name: "A页面",
        },
        {
          to: "/B",
          name: "B页面",
        },
        {
          to: "/C",
          name: "C页面",
        },
      ],
    };
  },
};
```

## API

### Breadcrumb Props

|     属性名     |  类型  | 默认值  |       说明       |
| property name | type | default value | description |
| :------------: | :----: | :-----: | :--------------: |
|   separator    | String | 斜杠'/' |      分隔符      |
| separator | String | slash '/' | separator |
| separatorClass | String |         | 图标分隔符 class |
| separatorClass | String | | Icon separator class |

### Breadcrumb Item Props

| 属性名  |     类型      | 默认值 |                                      说明                                       |
| property name | type | default value | description |
| :-----: | :-----------: | :----: | :-----------------------------------------------------------------------------: |
|   to    | String |        |                              路由跳转页面路径                              |
| to | String | | Route jump page path |
| replace |    Boolean    |        | 在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录(仅 h5 支持） |
| replace | Boolean | | When using to for routing jumps, enabling replace will not add new records to history (only h5 support) |

## 示例
## example

::: warning 注意
::: warning attention
直接拷贝示例代码，无法运行 ，示例依赖了 `uni-card` `uni-section` `uni-scss` 等多个组件。
Copying the sample code directly will not work. The sample relies on multiple components such as `uni-card` `uni-section` `uni-scss`.

请到 [组件下载页面](https://ext.dcloud.net.cn/plugin?name=uni-breadcrumb) ，在页面右侧选择 `使用 HBuilderX导入示例项目` ，体验完整组件示例。
Please go to the [Component download page](https://ext.dcloud.net.cn/plugin?name=uni-breadcrumb), select `Import sample project using HBuilderX` on the right side of the page to experience the complete component example.
:::

:::preview https://hellouniapp.dcloud.net.cn/pages/extUI/breadcrumb/breadcrumb

```html
<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6"
        >面包屑导航显示当前页面的路径，快速返回之前的任意可跳转页面</text
      >
    </uni-card>
    <uni-section title="基础用法" type="line" padding>
      <uni-breadcrumb separator="/">
        <uni-breadcrumb-item v-for="(route,index) in routes" :key="index" :to="route.to">
          {{route.name}}
        </uni-breadcrumb-item>
      </uni-breadcrumb>
    </uni-section>
    <uni-section title="自定义分隔符" type="line" padding>
      <uni-breadcrumb separator=">">
        <uni-breadcrumb-item v-for="(route,index) in routes" :key="index" :to="route.to">
          {{route.name}}
        </uni-breadcrumb-item>
      </uni-breadcrumb>
    </uni-section>
  </view>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        routes: [
          {
            to: "/pages/index/index",
            name: "首页",
          },
          {
            to: "",
            name: "菜单 A",
          },
          {
            to: "",
            name: "菜单 B",
          },
        ],
      };
    },
  };
</script>

<style lang="scss"></style>
```
:::

[完整示例演示](https://hellouniapp.dcloud.net.cn/pages/extUI/breadcrumb/breadcrumb)
[Complete example demo](https://hellouniapp.dcloud.net.cn/pages/extUI/breadcrumb/breadcrumb)