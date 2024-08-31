# uni-app 鸿蒙使用uni小程序SDK（内部简易教程）

## 已知问题

1. 支持在 DB1 版本上运行，不支持在 DB2 版本上运行

## 配置uni小程序SDK@mpsdk

1. 修改鸿蒙项目根目录文件 `oh-package.json5` 的依赖 `"@dcloudio/uni-app-runtime": "版本号"`，如下图所示

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/6ed02769-bbf1-46a9-aae5-80cebc86ba82.png)

2. 点击右上角 Sync Now，并等待 Sync 结束

3. 打开鸿蒙项目文件 `entry/src/main/ets/entryability`，增加初始化uni小程序sdk的逻辑，初始化uni_module

```ts
import { init } from '@dcloudio/uni-app-runtime'
import BuildProfile from 'BuildProfile'
import { UIAbility } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { window } from '@kit.ArkUI';

export default class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage): void {
    init(this, windowStage, { // 初始化uni小程序sdk
      debug: BuildProfile.DEBUG, // 传入参数控制webview及jsvm的调试开关
    })
    // Main window is created, set main page for this ability
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');
    windowStage.loadContent('pages/Index', (err) => {
      if (err.code) {
        hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');
        return;
      }
      hilog.info(0x0000, 'testTag', 'Succeeded in loading the content.');
    });
  }
}
```

## 集成小程序到项目内

1. 将小程序打包出的资源（cli项目使用npm run build:app-harmony生成）拷贝到`entry/src/main/resources/resfile/apps/${小程序AppId}`目录。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1725101625314.jpg)

2. 在鸿蒙ets页面（例如: entry/src/main/ets/pages/Index.ets）引入uni小程序SDK，编写小程序代码

```js
// entry/src/main/ets/pages/Index.ets
import { openUniMP } from '@dcloudio/uni-app-runtime';

@Entry
@Component
struct Index {
  @State message: string = 'Open UniMP';

  build() {
    RelativeContainer() {
      Button(this.message)
        .alignRules({
          center: { anchor: '__container__', align: VerticalAlign.Center },
          middle: { anchor: '__container__', align: HorizontalAlign.Center }
        })
        .onClick(async () => {
          const mp = openUniMP(`${小程序AppId}`) // 替换成真实的appId，和上一步的目录对应
        })
    }
    .height('100%')
    .width('100%')
  }
}
```

3. 运行此项目，点击按钮即可打开小程序

## 小程序和宿主通讯

```js
// 小程序监听宿主消息
uni.onNativeEventReceive((event, data) => {
    console.log(`小程序收到宿主消息，事件：${event}，消息：${JSON.stringify(data)}`);
})

// 小程序向宿主发送消息
uni.sendNativeEvent(
    event,
    data,
    (...args) => {
        console.log(`宿主处理完成并返回如下信息：${JSON.stringify(args)}`)
    }
)
```

```typescript
// const mp = openUniMP(...)
// 宿主监听小程序消息
mp.on('uniMPEvent', (event, data, notify) => {
    console.log(`宿主收到小程序消息，事件：${event}，消息：${JSON.stringify(data)}`);
    notify('宿主成功接收小程序消息')
})

// 宿主向小程序发送消息
mp.sendUniMPEvent(event, data)
```