# 鸿蒙应用唤起鸿蒙应用、元服务

目前鸿蒙应用可通过 API 唤起鸿蒙应用、元服务。

## 使用 Deep Linking 唤起鸿蒙应用@deeplinking

鸿蒙 App 中可 [使用 Deep Linking 实现应用间跳转](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/deep-linking-startup)。如何在鸿蒙中注册和定义 Deep Linking，请参阅 [uni-app 中设置鸿蒙 Deep Linking 方案](./url-scheme.md#deeplinking)。

目前鸿蒙应用 **统一应用软件** 已经定义了 `hellouniapp://router` 来唤起应用并传递参数。

在鸿蒙应用中唤起其他鸿蒙应用，需要两步操作：

- 定义 querySchemes
- 页面调用 openLink

### 定义 querySchemes

鸿蒙应用在 HBuilderX 工程启动之后，在 `unpackage/dist/dev/app-harmony` 文件夹找到鸿蒙产物工程，找到 `entry/src/main/module.json5` 文件，将其复制，放到 HBuilderX 工程中的 `harmony-configs/entry/src/main/module.json5` 位置，HBuilderX 编译时候会将该配置文件放入最终产物中，实现配置覆盖。

在 `module` 节点下新增 `querySchemes:[“hellouniapp”]`。

注意，querySchemes 有最大 50 个数量限制。

### 页面调用

下载导入 [uts-openSchema](https://ext.dcloud.net.cn/plugin?id=17828) 插件。

安全调用可先检查是否可以唤起应用，再唤起应用。

```ts
import { openSchema, canOpenURL } from "@/uni_modules/uts-openSchema";
const canOpen = () => {
  if (canOpenURL("hellouniapp://router")) {
    openSchema("hellouniapp://router/path/1?v=2");
  }
};
```

使用过程中有问题，可在 [uts-openSchema](https://ext.dcloud.net.cn/plugin?id=17828) 页面底部的 IM 交流群沟通。

## 使用 App Linking 唤起鸿蒙应用@applinking

鸿蒙中可 [使用 App Linking 实现应用间跳转](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-linking-startup)，如何注册和定义 App Linking 可参考 [uniapp 设置 App Linking 方案](./url-scheme.md#applinking)。

目前鸿蒙应用 **统一软件应用** 注册了特定的 URL 可唤起应用。

使用 App Linking 唤起鸿蒙应用只需要一个步骤：

- 页面调用

canOpenURL 不支持 App Linking 协议，所以无需判断是否可用，直接调用即可。如果应用没有安装会直接跳转到应用商店。

```ts
import { openSchema, canOpenURL } from "@/uni_modules/uts-openSchema";
const openApp = () => {
  openSchema("hellouniapp://router/path/1?v=2");
};
```

## 鸿蒙应用唤起元服务

目前 uniapp 支持 Vue2/Vue3 开发鸿蒙元服务。目前可通过下面方式唤起应用

创建 API UTS 插件，可在 `uts-openSchema` 鸿蒙源码中新增下面方法并导出。

```ts
import { common, OpenLinkOptions ，AtomicServiceOptions} from '@kit.AbilityKit';

export const openAtomicService = () => {
  // 你的鸿蒙元服务 APPID
  const appId = ''

  const options : AtomicServiceOptions = {
      displayId: 0
  };

  return new Promise((resolve, reject) => {
    UTSHarmony.getUIAbilityContext().openAtomicService(appId，options)
        .then((result: common.AbilityResult) => {
        resolve('')
      })
      .catch((err : BusinessError) => {
        reject(err.message)
      })
  })
}
```
