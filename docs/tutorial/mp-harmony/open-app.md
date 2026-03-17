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

## 常见问题

### 如何使用不过期的二维码访问元服务？

访问 [AGC 后台](https://developer.huawei.com/consumer/cn/service/josp/agc/index.htm) 选择对应元服务，选择 基础服务 - 元服务链接，创建元服务链接，选择关联二维码。关联链接即可，此时短链长期有效，可用于宣传。

如果需要打开特定的页面，可选择自定义参数，参数使用 encodeURIComponent 编码，参考 [链接直达、参数传递](./applinking.md#open-app)。

### 如何传递动态参数唤起元服务？

目前鸿蒙处理逻辑比较复杂，短链拼接参数需要自己解析，不会自动放入 want 中，可尝试如下方式：

```ts
import { AscfUIAbility } from '@atomicservice/ascfapi';
import AbilityConstant from '@ohos.app.ability.AbilityConstant';
import Want from '@ohos.app.ability.Want';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { url } from '@kit.ArkTS';

export default class EntryAbility extends AscfUIAbility {
  onCreate(v: Want, w: AbilityConstant.LaunchParam): void {
    // todo 参数处理
    let uri = v?.uri;
    if (uri) {
      try {
        let urlObject = url.URL.parseURL(uri);
        let ascfPara = urlObject.params.get('ascfPara');
        v.parameters = {
          ascfPara: JSON.stringify(ascfPara),
        };
      } catch (error) {
        hilog.error(0x0000, 'testTag', `Failed to parse url.`);
      }
    }
    super.onCreate(v, w);
  }
}
```
