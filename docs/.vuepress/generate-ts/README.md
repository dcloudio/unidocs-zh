# 生成 ts`*.d.ts`文件

## RoadMap

- [x] 全部内部组件vue ts 声明文件

- [ ] markdown格式规范声明

  1. 属性声明标题格式为`**属性声明**`
  2. 表格行声明，必须以`|`开始，以`|`结束，例如：`|属性|类型|说明|`
  3. 属性声明表格合法表头属性字段

    |合法属性名|解析时字段名|
    |:-|:-|
    |备注|notes|
    |属性|property|
    |类型|type|
    |默认值|default|
    |说明|comment|
    |必填|must|
    |生效时机|effectiveTiming|
    |平台差异说明|platformDifferences|

    4. 枚举值声明

    标题声明：`**AudioReverbType**`, 引用枚举值时声明

```ts
interface LivePusherProps{
    audioReverbType: AudioReverbType
}
```
    
    枚举值value
    |名称|表格标题|
    |:-|:-|
    |枚举值key|键|
    |枚举值Value|值|
    |枚举值备注/说明|说明|

- [ ] 属性枚举值生成
- [ ] 一个组件内包含多个接口或类型声明，声明 [type-relations.json][type-relations.json]
  - [x] map
  - [x] radio
  - [ ] image 有枚举值
  - [ ] live-pusher
  - [ ] 其他待排查的组件文档

## 为什么需要这个功能

1. 方便 Volar 展现内置组件类型，方便开发者查看组件内置组件属性和事件，提高工作效率
2. 基于项目 markdown 文档生成，便于后续 markdown 修改时，通过脚本生成的方式，同步修改内置组件 types

## 生产`*.d.ts`

### node环境

node: `v20.10.0`

### 构建命令

```shell
pnpm generate-ts
```
### 产物文件列表
[docs/.vuepress/types/inner-components](docs/.vuepress/types/inner-components)目录下生成文件
```log
animation-view.d.ts
camera.d.ts
cover-image.d.ts
index.d.ts
map.d.ts
movable-view.d.ts
progress.d.ts
slider.d.ts
textarea.d.ts
view.d.ts
audio.d.ts
canvas.d.ts
form.d.ts
label.d.ts
match-media.d.ts
picker.d.ts
radio.d.ts
swiper.d.ts
types.d.ts
web-view.d.ts
button.d.ts
checkbox.d.ts
icon.d.ts
live-player.d.ts
movable-area.d.ts
picker-view.d.ts
rich-text.d.ts
switch.d.ts
video.d.ts
```

## 产物发布

建议放`@dcloudio/types`包内`inner-components`

### 使用并配置

基于发布产物目标`@dcloudio/types/inner-components`

在[quickstart-cli][quickstart-cli]中的[uni-preset-vue typescript][uni-preset-vue:ts]项目`src/shime-uni.d.ts`中增加一行

```ts
/// <reference types="@dcloudio/types/inner-components" />
```

#### IDE工具提示

- VSCode

vscode需要安装Vue[Volar]插件，内置组件内置组件的属性和事件正常提示。

- WebStorm

IDE工具`webstorm`暂无测试条件，支持效果未知。

[quickstart-cli]: https://uniapp.dcloud.net.cn/quickstart-cli.html
[uni-preset-vue:ts]: https://gitee.com/dcloud/uni-preset-vue/repository/archive/vite.zip
[Volar]: https://marketplace.visualstudio.com/items?itemName=Vue.volar
[type-relations.json]: https://github.com/weiquanju/unidocs-zh/blob/master/docs/.vuepress/generate-ts/type-relations.json