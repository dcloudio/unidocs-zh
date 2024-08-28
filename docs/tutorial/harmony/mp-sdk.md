# uni-app 鸿蒙使用uni小程序SDK（内部简易教程）

## 已知问题

1. 不支持x86的模拟器
2. 只能使用 resource 资源中的小程序
3. 支持在 DB1 版本上运行，不支持在 DB2 版本上运行

## 配置uni小程序SDK@mpsdk

1. 修改鸿蒙项目根目录文件 `oh-package.json5` 的依赖 `"@dcloudio/uni-app-runtime": "版本号"`，如下图所示

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/6ed02769-bbf1-46a9-aae5-80cebc86ba82.png)

2. 点击右上角 Sync Now，并等待 Sync 结束

3. 打开鸿蒙项目文件 `entry/src/main/ets/entryability` 新增下图红框内的代码

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/0a822b2b-147c-4aec-8f75-e68466be3911.png)

4. 配置完成

## 使用步骤

1. 在鸿蒙ets页面引入uni小程序SDK

```js
import { openUniMP } from '@dcloudio/uni-app-runtime';
interface UniMP {
  on(name:string,callback:Function):void
}
```

2. 执行 `const mp = openUniMP('HBuilder') as UniMP` 打开小程序

完整ets页面代码如下

```js
import { openUniMP } from '@dcloudio/uni-app-runtime';
interface UniMP {
  on(name:string,callback:Function):void
}
@Entry
@Component
struct Index {
  @State message: string = 'Hello World';

  build() {
    RelativeContainer() {
      Text(this.message)
        .id('HelloWorld')
        .fontSize(50)
        .fontWeight(FontWeight.Bold)
        .alignRules({
          center: { anchor: '__container__', align: VerticalAlign.Center },
          middle: { anchor: '__container__', align: HorizontalAlign.Center }
        })
        .onClick(()=>{
          const mp = openUniMP('HBuilder') as UniMP
           mp.on('close',()=>{
              console.log('close')
           })
        })
    }
    .height('100%')
    .width('100%')
  }
}
```

## 手动更改uni-app打包后的项目的appid@updateappid

按如下图所示修改 `目录名` 和 `entry\src\main\resources\rawfile\apps\HBuilder\www\manifest.json` 内的id属性

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/2637224c-67c1-4470-91ab-5f62440b73ea.png)

