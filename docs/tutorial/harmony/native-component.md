# 嵌入鸿蒙原生组件

鸿蒙系统有很多原生组件，从 uni-app 4.62 版开始可以通过 uts 插件方式注册为 WebView 支持的原生组件，并且支持同层渲染。

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

```ets
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
    onButtonClick: options?.on?.get('click')
  })
    .width(options.width)
    .height(options.height)
}

defineNativeEmbed('button', {
  builder: ButtonBuilder
})
```

以上代码在 ets 文件内向 uni-app 注册了一个原生组件 ButtonComponent，标签名为 `button`，在 uts 插件内导入此 ets 文件即可生效。

## 调用鸿蒙原生组件

在 WebView 中使用 embed 来渲染原生组件，在 Vue 文件中使用的 embed 组件是经过 uni-app 封装的，更便于使用，支持传递额外的属性和事件。

### 属性

| 属性名  | 类型   | 说明                                                   |
| ------- | ------ | ------------------------------------------------------ |
| tag     | string | 必填，原生组件的标签名                                 |
| options | object | 可选，原生组件的属性集合，具体属性请参考原生组件的定义 |

### 事件

所有 embed 组件上注册的事件均会转发到原生层。

### 示例代码

```vue
<template>
    <embed class="native-button" tag="button" :options="options" @click="onClick"></embed>
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
