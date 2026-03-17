# 嵌入鸿蒙原生组件

鸿蒙系统有很多原生组件，从 HBuilderX 4.62 版开始 uni-app 可以通过 uts 插件方式注册为 WebView 支持的原生组件，并且支持同层渲染。

目前鸿蒙原生组件仅支持定义在 ets 文件中，uts 插件支持导入 ets 文件，本章节主要介绍在 ets 文件中注册原生组件，其他与[调用鸿蒙原生 API](native-api.md)相同，请参考[调用鸿蒙原生 API](native-api.md)章节。

## 注册鸿蒙原生组件

### 接口定义

```typescript
export interface NativeEmbedEvent {
  detail: object;
}

export interface NativeEmbedBuilderOptions {
  width: number;
  height: number;
  on?: Map<string, (event?: NativeEmbedEvent) => void>;
}

export interface DefineNativeEmbedOptions<
  T extends NativeEmbedBuilderOptions = NativeEmbedBuilderOptions
> {
  builder: (options: T) => void;
}

export declare function defineNativeEmbed<
  T extends NativeEmbedBuilderOptions = NativeEmbedBuilderOptions
>(tag: string, options: DefineNativeEmbedOptions<T>): void;
```

### 示例代码

编辑或创建 `app-harmony/button.ets` 填写下面内容：

```ts
import { NativeEmbedBuilderOptions, defineNativeEmbed } from "@dcloudio/uni-app-runtime"

interface ButtonBuilderOptions extends NativeEmbedBuilderOptions {
  label: string
}

interface ButtonClickEventDetail {
  text: string
}


@Component
struct ButtonComponent {
  @Prop label: string
  onButtonClick?: Function

  build() {
    Button(this.label)
      .width('100%')
      .height('100%')
      .onClick(() => {
        if (this.onButtonClick) {
          const detail = {
            text: 'test'
          } as ButtonClickEventDetail
          this.onButtonClick({
            detail
          })
        }
      })
  }
}

@Builder
function ButtonBuilder(options: ButtonBuilderOptions) {
  ButtonComponent({
    label: options.label,
    onButtonClick: options?.on?.get('buttonclick')
  })
    .width(options.width)
    .height(options.height)
}

defineNativeEmbed('button', {
  builder: ButtonBuilder
})
```

**注意：**

- `defineNativeEmbed` 第一个参数为原生组件名称，小写，暂不支持驼峰写法

以上代码在 ets 文件内向 uni-app 注册了一个原生组件 ButtonComponent，标签名为 `button`，在 uts 插件内导入此 ets 文件即可生效。

编辑或者新建 `app-harmony/index.uts` 文件引入定义的 ets 文件

```ts
import './button.ets'
```

## 调用鸿蒙原生组件

在 WebView 中使用 embed 来渲染原生组件，在 Vue 文件中使用的 embed 组件是经过 uni-app 封装的，更便于使用，支持传递额外的属性和事件。

### 属性

| 属性名  | 类型   | 说明                                                   |
| ------- | ------ | ------------------------------------------------------ |
| tag     | string | 必填，原生组件的标签名                                 |
| options | object | 可选，原生组件的属性集合，具体属性请参考原生组件 BuilderOptions 中的定义，更新时需要对 options 重新赋值|

### 事件

所有 embed 组件上注册的事件均会转发到原生层。

### 示例代码

```vue
<template>
    <embed class="native-button" tag="button" :options="options" @buttonclick="onClick"></embed>
</template>

<script>
    export default {
        data() {
            return {
                options: {
                    label: 'hello'
                }
            }
        },
        methods: {
            onClick(e) {
                console.log('onClick', e.detail.text)
                this.options = {
                    label: 'world'
                }
            }
        }
    }
</script>

<style scoped>
    .native-button {
        display: block;
        width: 200px;
        height: 50px;
        margin: 10px auto;
    }
</style>
```

## 插件市场案例

使用鸿蒙原生组件渲染的案例：

- [UTS 组件鸿蒙花瓣地图](https://ext.dcloud.net.cn/plugin?id=23082)，用来演示原生组件用法，并提供了示例项目。
- [鸿蒙粘贴控件-点击获取、无需权限](https://ext.dcloud.net.cn/plugin?id=24925) 演示了如何使用粘贴板控件，安全访问用户剪切板内容。

## WebView 组件之上展示原生组件

目前 WebView 组件是使用嵌入原生组件进行的封装，如果你希望在 WebView 之上展示内容，可参考下面方案解决。

页面之上展示内容需要嵌入原生组件方案来解决，并设置 `nodeRenderType= NodeRenderType.RENDER_TYPE_DISPLAY`

```js
import { NodeRenderType } from '@kit.ArkUI'

defineNativeEmbed('button', {
  builder: ButtonBuilder,
	nodeRenderType: NodeRenderType.RENDER_TYPE_DISPLAY
})
```

通过设置 nodeRenderType，可在 WebView 组件之下引入该组件，实现内容覆盖在 WebView 组件上。
