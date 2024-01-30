# 生成 ts`d.ts`文件

## 为什么需要这个功能

1. 方便 Volar 展现内置组件类型，方便开发者查看组件内置组件属性和事件，提高工作效率
2. 基于项目 markdown 文档生成，便于后续 markdown 修改时，通过脚本生成的方式，同步修改内置组件 types

## 生产`d.ts`

### node环境

node: `v20.10.0`

### 构建命令

```shell
pnpm generate-ts
```

## 产物发布

建议放`@dcloud/types`项目`inner-components`

### 使用

基于发布产物目标目录`@dcloud/types/inner-components`

在[quickstart-cli][quickstart-cli]中的[uni-preset-vue typescript][uni-preset-vue:ts]项目`src/shime-uni.d.ts`中增加一行

```ts
/// <reference types="@dcloud/types/inner-components" />
```

vscode中内置组件出现内置组件的属性和事件提示

[quickstart-cli]: https://uniapp.dcloud.net.cn/quickstart-cli.html
[uni-preset-vue:ts]: https://gitee.com/dcloud/uni-preset-vue/repository/archive/vite.zip