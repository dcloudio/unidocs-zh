# uni-app-runtime使用说明（内部简易教程）

## 配置鸿蒙原生项目

1. 创建一个空的鸿蒙项目

2. 修改鸿蒙项目根目录文件 `oh-package.json5` 的依赖 `"@dcloudio/uni-app-runtime": "版本号"`，如下图所示

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/6ed02769-bbf1-46a9-aae5-80cebc86ba82.png)

3. 点击右上角 Sync Now，并等待 Sync 结束

4. 打开鸿蒙项目文件 `entry/src/main/ets/entryability`，增加uni-app sdk初始化逻辑

```ts
import { UniEntryAbility, uni } from '@dcloudio/uni-app-runtime'
import { initUniModules } from '../uni_modules/index.generated'
import BuildProfile from 'BuildProfile'

initUniModules()

export default class EntryAbility extends UniEntryAbility {
  constructor() {
    super('HBuilder', {
      debug: BuildProfile.DEBUG
    })
  }
}

```

## 集成小程序到项目内

1. 将uni_modules入口文件移动到`entry/src/main/ets/uni_modules/index.generated.ets`, 如果目录不存在则需要手动创建

移动`dist/dev/app-harmony/uni_modules/index.generated.ets`文件到鸿蒙项目`src/main/ets/uni_modules/index.generated.ets`

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/20240904152004.jpg)

2. 将uni_modules文件部署到鸿蒙工程内

移动`dist/dev/app-harmony/uni_modules`目录到鸿蒙项目`uni_modules`

编译到鸿蒙时每个uni_module都会创建一个鸿蒙的静态库。对于静态库有两个概念需要区分一下。

- 静态库的module名称（如下称为moduleName），每个静态库的名称，只允许大小写字母加下划线组成
- 静态库的包名（如下称为packageName），静态库被import时的名称，类似npm包名

对于一个名称为uni-getBatteryInfo的uni_module，它的moduleName为`uni_modules__uni_getBatteryInfo`，packageName为`@uni_modules/uni-getBatteryInfo`。

packageName规则较为简单，给uni_module名称前加上`@uni_modules`前缀即可

moduleName是在packageName的基础上生成的，移除@符号，将/替换为两个下划线，将-替换为一个下划线

3. 将小程序打包出的资源（cli项目使用npm run build:app-harmony生成）拷贝到`entry/src/main/resources/resfile/apps/HBuilder`目录。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1725101625314.jpg)

4. 修改鸿蒙项目`oh-package.json5`

为所有uni_module注册packageName。

以uni-getBatteryInfo为例，在`oh-package.json5`文件内`dependencies`字段下添加如下内容

```json
"@uni_modules/uni-getBatteryInfo": "./uni_modules/uni-getBatteryInfo"
```

5. 修改鸿蒙项目`build-profile.json5`

为所有uni_module注册moduleName。

以uni-getBatteryInfo为例，在`build-profile.json5`文件内`modules`数组内添加如下内容

```json
{
  "name": "uni_modules__uni_getBatteryInfo",
  "srcPath": "./uni_modules/uni-getBatteryInfo"
}
```