# 鸿蒙元服务唤起鸿蒙应用

目前鸿蒙元服务可以通过 **button 组件** 唤起系统应用、相同开发者名下的鸿蒙应用。

## 唤起系统应用

这里无额外限制，可快速打开特定系统页面

```html
<button
  type="primary"
  open-type="launchApp"
  @launchapp="onLaunchApp"
  @error="onError"
  app-bundle-name="com.huawei.hmos.calendar"
  app-ability-name="MainAbility"
>
  打开日历
</button>
```

## 唤起相同开发名下鸿蒙应用

跳转非同名开发者应用系统拦截，提示无法打开。

```html
<button
  open-type="launchApp"
  app-bundle-name="io.dcloud.hellouniapp.h"
  app-module-name="entry"
  app-ability-name="EntryAbility"
  :app-parameters='{from:"as"}'
  @launchapp="onLaunchApp"
  @error="onError"
>
  唤起统一应用软件鸿蒙应用
</button>
```

上述代码可在 uniapp 的 **helloUniApp** 元服务中唤起 **统一应用软件** 应用并传递参数。

| 属性             | 类型   | 描述                                             |
| ---------------- | ------ | ------------------------------------------------ |
| app-bundle-name  | string | 必选，待启动应用包名                             |
| app-module-name  | string | 可选。待启动 Ability 所属的模块名称。            |
| app-ability-name | string | 必选，待启动 Ability 名称。一般为 `EntryAbility` |
| app-parameters   | string | 可选，自定义传递参数                             |

## 参数获取

传递的参数可通过 UTS 插件来读取。创建 UTS API 插件，定位到 `uni_modules/uni-onLaunch/utssdk/app-harmony/index.uts`

```ts
import { Want } from '@kit.AbilityKit';

export const params = {
  paramsOnCreate: '',
  paramsOnNewWant: '',
};

UTSHarmony.onAppAbilityCreate((want: Want) => {
  let uri = want?.uri;

  params.paramsOnCreate = uri ?? '';
  // 实际上立即执行了，但是通信通道还没有建立，延迟一秒打印可以看到数据
  // 延迟是为了看到打印，业务逻辑不需要延迟
  setTimeout(() => {
    console.log('onCreate', want);
  }, 1000);
});
UTSHarmony.onAppAbilityNewWant((want: Want) => {
  params.paramsOnNewWant = want?.uri ?? '';
  console.log('onNewWant', want);
});
```

传递的参数，可在 `want.parameters` 中读取。
