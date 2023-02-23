## 什么是 uni ext api

> 新增于HBuilderX 3.6.7

uni ext api，是一种需要下载[uni_modules](https://uniapp.dcloud.net.cn/plugin/uni_modules.html)插件才能使用的、uni.开头的js API。

它是uni对象的方法，但不预置在uni-app的runtime中，需要单独下载对应的`uni_modules`。

示例：

uni.getBatteryInfo，这个API就是一个`ext api`，需要下载插件才能使用。[详见](https://uniapp.dcloud.net.cn/api/system/batteryInfo.html)

- 背景1，uni-app runtime越来越大

uni对象的api，如uni.navigateTo，之前都是内置在uni-app的runtime中的，跟随uni-app/HBuilder的升级而变化。

随着各家小程序和uni-app的演进，uni-app的api越来越多，而很多api又不常用，这会增加uni-app的runtime体积，尤其是在web和app平台。

比如很多小程序都内置有`getBatteryInfo`获取电量的API，在uni-app中理应拉齐各端实现，但在uni-app的web和app上内置它并不合适。

所以推出了`uni ext api`，这些API以`uni_modules`的方式出现，从插件市场单独下载。但导入到工程后，仍使用`uni.getBatteryInfo`方式来调用。

为此，在这些`uni_modules`的`package.json`中提供了一种特殊的注册方式，允许插件向uni对象自动挂载api。（只有DCloud官方插件，以`uni-`开头的插件，才能使用此机制）

- 背景2，uts将重构uni-app的内部实现

在过去，uni-app的web和小程序端，是github的独立项目，由DCloud的js团队维护。而uni-app的app端，是另2个独立项目，由DCloud的原生团队维护。
每次新加一个api，需要各个团队在不同的工程里开发，尤其是app端，需要先在原生项目里开发，然后在前端项目里封装。还需要再另一个语法提示工程中编写代码提示。

有了uts后，uni-app的实现机制将被重构，大幅的简化。

每个api，都使用uts这门统一的语言来开发，不再使用不同的技术语言。作为一个独立的`uni_modules`，独立的工程，有独立的版本。

仍然以`uni.getBatteryInfo`电量为例，开发这个api，不再需要在庞大复杂的uni-app的若干个项目里编码，也不需要再关心功能间关联和耦合。

只需要在`uni-getBatteryInfo`这个`uni_modules`下开发，目录结构如下。

这个目录清晰的列出了这个插件要做的所有事情：在不同的目录下编写uts或js代码、在d.ts里写语法提示。

```bash
├── uni_modules
│   ├── uni-getbatteryinfo
│   │   ├── changelog.md
│   │   ├── index.d.ts // 类型声明，需要同时扩展 uni 声明当前注册的 API
│   │   ├── package.json
│   │   ├── readme.md
│   │   └── utssdk // 在不同目录实现平台能力
│   │       ├── app-android
│   │       │   └── index.uts
│   │       ├── app-ios
│   │       │   └── index.uts
│   │       ├── mp-weixin
│   │       │   └── index.js
│   │       └── web
│   │           └── index.js
```

这种模式，还给开发者带来若干好处，比如开放性和灵活性。

* 以往，uni-app内置api如果有bug，普通开发者很难看懂源码，很难参与完善。

现在，在uts的支持下，普通前端也可以review这些api的实现，发现其中的问题和提出改进方案。

* 以往，这些uni api的bug被修复时，需要等待HBuilder发版，由于每次发版都需要发很多功能，可能bug1虽然已经修好，但bug2复测出问题，导致版本不能及时发布。

现在，ext api的`uni_modules`脱离HBuilder独立升级，快速解决开发者的问题。并且开发者可以自己修本地工程中ext api的bug。让问题得以更快速的解决。

- 背景3，内置api复写

很多uni的内置api，比如`uni.showWaiting`，实现的比较简单，在web端，常见的waiting都有更丰富的样式、使用更多的图片资源。

uni-app的runtime不适合内置很多waiting样式和资源，而使用三方插件，又需要按三方插件的写法调用，之前工程里写好的`uni.showWaiting`的代码不得不重改。

有了`ext api`，可以实现一个`uni-showwaiting`的`uni_modules`，在web端提供更丰富的效果，并且开源，可自由裁剪和增补。

导入这个`uni_modules`后，之前的`uni.showWaiting`的api的功能就被复写。


综上，背景1、2、3的问题，都将使用`uni ext api`来解决。uni-app很多新增的、不常用的api将采用`ext api`方式。

在uts的发展路线上，uni-app自身也将使用uts实现；使用uts将可以开发完整的uni-app。

目前所有的`ext api`，在未来的uts版的uni-app，其内置的uni对象的api中，均会得到复用。也就是说`ext api`将大幅推进下一代uni-app（纯uts版）的上线速度。

欢迎广大开发者参与到`uni ext api`的开源共建中来。

## 注意事项

1. 由于开发api是以uni.开头的，所以无法像普通插件那样由开发者自己开发、自己发布。

参与共建的开发者需要在DCloud官方插件的开源项目中提pr，由官方审核后再发布新版uni_modules。

也只有`uni-`开头的插件，才能在package.json中编写注册声明，挂载方法到uni对象上。

2. `uni ext api`的版本将不再跟随HBuilder和uni-app cli的版本，它将是独立的版本。

只有uni的内置api才跟随HBuilder升级。请记得内置api和`ext api`的区别。

3. `ext api`的实现不一定都是uts，但如果使用了uts，则将受uts自身的约束。如
- uts在iOS上真机运行必须打包自定义基座。后续官方会继续优化
- uts在Android上涉及arr、jar、so库等三方sdk的时候，也需打包自定义基座才能真机运行。
- wgt升级只对js、css生效，uts代码无法热更新。但这不意味着使用uts的项目就失去热更新能力，只是uts部分不能热更。js、vue、css、图片仍然可以打包成wgt热更。

4. `ext api`在入口文件`export`的API，必须在`package.json`中编写注册声明 

## 如何开发uni ext api

### 创建一个符合规则的`uni_modules`插件（通常是`utssdk`类型），如`uni-getbatteryinfo`

**注意：** 插件ID格式为：`uni-API名称全小写`


```bash
├── uni_modules
│   ├── uni-getbatteryinfo
│   │   ├── changelog.md
│   │   ├── index.d.ts // 类型声明，需要同时扩展 uni 声明当前注册的 API
│   │   ├── package.json
│   │   ├── readme.md
│   │   └── utssdk // 在不同目录实现平台能力
│   │       ├── app-android
│   │       │   └── index.uts
│   │       ├── app-ios
│   │       │   └── index.uts
│   │       ├── mp-weixin
│   │       │   └── index.js
│   │       └── web
│   │           └── index.js
```

### 配置`package.json`

```json
{
  "uni_modules": {
    "uni-ext-api": {
      "uni": ""// string | string[] | Record<string,string>
    }
  }
}
```

- 默认导出

```json
{
  "uni_modules": {
    "uni-ext-api": {
      "uni": "getBatteryInfo"
      // 等同于
      // import getBatteryInfo from "@/uni_modules/uni-getbatteryinfo";
      // uni.getBatteryInfo = getBatteryInfo
    }
  }
}
```

- 导出多个

```json
{
  "uni_modules": {
    "uni-ext-api": {
      "uni": ["getBatteryInfo", "isCharging"]
      // 等同于
      // import { getBatteryInfo, isCharging } from "@/uni_modules/uni-getbatteryinfo";
      // uni.getBatteryInfo = getBatteryInfo
      // uni.isCharging = isCharging
    }
  }
}
```

- 导出别名

```json
{
  "uni_modules": {
    "uni-ext-api": {
      "uni": {
        "onUserCaptureScreen": "onCaptureScreen",
        "offUserCaptureScreen": "offCaptureScreen"
      }
      // 等同于
      // import { onCaptureScreen, offCaptureScreen } from "@/uni_modules/uni-getbatteryinfo";
      // uni.onUserCaptureScreen = onCaptureScreen
      // uni.offUserCaptureScreen = offCaptureScreen
    }
  }
}
```

- [示例(获取电量)参考](https://gitcode.net/dcloud/hello-uts/-/tree/dev/uni_modules/uni-getbatteryinfo)

## 如何使用uni ext api

在[插件市场](https://ext.dcloud.net.cn/)查找`uni ext api`插件，导入`HBuilderX`中的项目即可直接使用。


如：[uni-getbatteryinfo](https://ext.dcloud.net.cn/plugin?name=uni-getbatteryinfo)，导入后，即可直接使用`uni.getBatteryInfo`


