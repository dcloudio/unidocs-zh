# uni-app 鸿蒙使用uni小程序SDK（内部简易教程）

## 已知问题

1. 不支持x86的模拟器
2. uni-app的项目appid只能是HBuilder，暂不支持其他appid，故HBuilderX打包后需要[手动更改appid](#updateappid)
3. 只能启动一个小程序实例
4. 没有胶囊按钮
5. 只能使用 resource 资源中的小程序
6. 支持在 DB1 版本上运行，不支持在 DB2 版本上运行

## 配置uni小程序SDK@mpsdk

1. 下载 uni小程序SDK [下载地址](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/har/UniAppRuntime.har)

2. 将下载的 UniAppRuntime.har 文件复制到鸿蒙原生项目的根目录，如下图所示

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/0f686381-b8d6-4cc9-a1ff-579600baf23f.png)

3. 修改鸿蒙项目根目录文件 oh-package.json5 新增依赖 `"@dcloudio/uni-app-runtime": "./UniAppRuntime.har"`，如下图所示

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1845871b-474a-4fa7-b430-c6b3acf1cee3.png)

4. 等待 Sync 结束

5. 打开鸿蒙项目文件 `entry/src/main/ets/entryability` 新增下图红框内的代码

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/0a822b2b-147c-4aec-8f75-e68466be3911.png)

6. 配置完成

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

## 更新uni小程序SDK@updatempsdk

1. 将最新的 UniAppRuntime.har 文件复制到鸿蒙原生项目的根目录替换旧版本
2. 打开鸿蒙项目根目录下的文件 `oh-package.json5`
3. 删除依赖 `"@dcloudio/uni-app-runtime": "./UniAppRuntime.har"`，并点击右上角 `Sync Now`，等待Sync完成
4. 再恢复依赖 `"@dcloudio/uni-app-runtime": "./UniAppRuntime.har"`，并点击右上角 `Sync Now`，等待Sync完成
5. 更新完成

