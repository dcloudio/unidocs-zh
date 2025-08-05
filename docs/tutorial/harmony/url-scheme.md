# 通过 URL Scheme 唤起鸿蒙应用

通过短信、落地页唤起应用是常见的业务需求，这里介绍如何在鸿蒙中唤起应用。

在 Android/iOS 中唤起应用一般有两类方案，URL Scheme 和 Universal Links（安卓中叫 App Links）。查看 [Android 设置 UrlSchemes](/tutorial/app-android-schemes) 、 [iOS 设置 UrlSchemes](/tutorial/app-ios-schemes)

## 基本概念

使用 URL Scheme 唤起，用户通过访问自定义的 uri 网址，来打开应用并传递参数，比如 `weixin://` 这个 Scheme 是唤起微信的方案。

使用 Universal Links 这种方案，是用户访问一个 https 网页，这个网页在对应的后台已经认证过，打开这个网页可以直接打开应用并传递对应的参数。

### URL Scheme

优点：简单，常规。

缺点：使用 URL Scheme 这种方式打开应用，系统一般会弹窗提示用户是否打开，，用户打开引用每多一个步骤就会流失的风险。Scheme 方案可能有重复注册 Scheme 的方式，用户需要正确选择才能打开应用，容易困惑、错误选择。

### Universal Links

优点：这种方案有兜底机制，不打扰用户，不会阻塞用户打开应用。

缺点：需要一个所有人都可以访问的 https 网页

## 鸿蒙中方案

鸿蒙中也有类似的方案

- Deep Linking 类似 URL Scheme ，自定义 uri
- App Linking 类似 Universal Links，在华为 AGC 后台认证域名

可参考鸿蒙文档 [鸿蒙应用间跳转](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/inter-app-redirection?ha_source=Dcloud&ha_sourceId=89000448)

### Deep Linking 方案

官方文档地址《[使用 Deep Linking 实现应用间跳转](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/deep-linking-startup?ha_source=Dcloud&ha_sourceId=89000448)》

使用 Deep Linking 方案，需要 1 个步骤

- 配置 module.json5 ，注册 Scheme

在 HBuilderX 工程中，打开 `harmony-configs/entry/src/main/module.json5`。如果没有找到这个文件，可以在 `unpackages/dist/app-harmony` 产物文件里获取，放置到对应位置，HBuilderX 构建过程会自动合并。

重点是添加 `skill[1]`，找到 `module.abilities[0].skills` 追加下面内容，保证 skill 数组长度增加。

```json
{
  "actions": ["ohos.want.action.viewData"],
  "uris": [
    {
      "scheme": "hellouniapp",
      "host": "router"
    }
  ]
}
```

字段说明

- actions 字段必填，为固定写法，不要修改
- uris[0].scheme 必填，定义自己的 Scheme，鸿蒙市场中的**统一应用软件**，使用了提供的 Scheme
- urils[0].host 必填，为路径，不可为空，不要设置 `*`

在线网页中添加 a 链接，填写 Scheme

```html
<a href="hellouniapp://router?a=a&b=2">唤起应用</a>
```

这种情况下，点击链接应该就可以正常唤起应用了。如果不能请自查

- 观察鸿蒙产物文档是否有两个 skills ，原来的 `skill[0]` 不需要动，维持不变，只添加内容
- 网页要通过网络访问，检查 Scheme 是否完全一样，可以使用 localhost 在本地验证

![唤起截图](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/8b2c5df3-01a4-407c-9b42-25e7a651efbf.png)

验证效果如图所示，会在华为浏览器底部出现弹窗提示，这里的文案不可修改，点击之后可以唤起应用。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/show_deep_link.gif)

参数获取可滚动到 [参数解析](#argument-parse) 继续查看。

### App Linking 方案

官方文档 [使用 App Linking 实现应用间跳转](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-linking-startup?ha_source=Dcloud&ha_sourceId=89000448)

这种方案可以实现二维码扫码直达、点击链接直接唤起应用。有验证机制，不会其其他应用仿冒，比较安全。

使用 App Linking 方案需要 4 个步骤

1. 开通功能关联应用。访问 [AGC 后台](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html?ha_source=Dcloud&ha_sourceId=89000448) - 开发与服务 - 增长 - App Linking， 开启 App Linking 功能

2. 在落地页的域名根目录创建 `/.well-known/applinking.json`，内部填写应用 AppID，结构可以参考 [https://uniapp.dcloud.net.cn/.well-known/applinking.json](https://uniapp.dcloud.net.cn/.well-known/applinking.json) 保证你的落地页域名可以访问该路径。

这步骤要求可以访问 json，需要服务端开启访问，这是为了鉴权访问，需要文件持久存在不可删除。

3. AGC 后台在 App Linking 页面创建应用链接，创建并发布成功。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/8f4859ba-9993-4d73-8ef7-7000b6c4a876.png)

4. 修改 `module.json5` 添加 Scheme 参数。

在 HBuilderX 工程中，打开 `harmony-configs/entry/src/main/module.json5`。如果没有找到这个文件，可以在 `unpackages/dist/app-harmony` 产物文件里获取，放置到对应位置，HBuilderX 构建过程会自动合并。

重点是添加 `skill[1]`，找到 `module.abilities[0].skills` 追加下面内容，保证 skill 数组长度增加。

```json
{
  "entities": ["entity.system.browsable"],
  "actions": ["ohos.want.action.viewData"],
  "uris": [
    {
      "scheme": "https",
      "host": "uniapp.dcloud.net.cn",
      "pathStartWith": "tutorial/harmony/runbuild.html"
    }
  ],
  "domainVerify": true
}
```

字段说明

- `entities`/ `actions`/ `domainVerify` 字段为固定写法，必填，不可更改
- uris 追加新字段，注意此处的 `Scheme:https` 为固定写法，不可更改
- host 字段为 applinking.json 所在的域名，必须和后台一致
- patStartWith 字段为指定路径，可选的还有 path 字段，可进一步参考 [uris 标签说明](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-uri-config#uris%E6%A0%87%E7%AD%BE%E8%AF%B4%E6%98%8E?ha_source=Dcloud&ha_sourceId=89000448)

通过上面设置，当用户直接访问对应的 url 时候会直接唤起应用。如果用户未安装会停留在当前页面。如果用户已经在访问相同 host 的网页，应用不会主动唤起不会干扰用户的正常访问。

<img src='https://web-ext-storage.dcloud.net.cn/uni-app/harmony/output.gif' style='height: 500px'>

具体可根据实际业务场景进行测试。上述代码为线上的**统一应用软件** 的 Scheme 设置，可对比参考。

## 参数解析@argument-parse

接下来介绍业务测如何接收参数。

应用中唤起有两个不同的场景：

- 冷启动-通过网页第一次唤起应用，对应鸿蒙中的 onCreate 生命周期
- 热启动-应用已经启动，重新从后台唤起应用，对应鸿蒙中的 onNewWant 生命周期

应用启动时候获取参数，自定义业务逻辑，在应用加载时候监听参数，具体如何跳转是应用自己处理的。

## HBuilderX 中监听参数

HBuilderX 可以封装一个简单的 UTS 插件完成参数获取。

在项目中新建 `uni_modules` 文件夹，选择新建 `UTS插件 - API 插件`，创建之后创建并打开 `utssdk/app-harmony/index.uts`，如果不存在就手动创建该文件。

```ts
import { Want } from "@kit.AbilityKit";

UTSHarmony.onAppAbilityCreate((want: Want) => {
  let uri = want?.uri;
  //  实际上立即执行了，但是通信通道还没有建立，延迟一秒打印可以看到数据
  //  延迟是为了看到打印，业务逻辑不需要延迟
  setTimeout(() => {
    console.log("onCreate", uri);
  }, 1000);
});
UTSHarmony.onAppAbilityNewWant((want: Want) => {
  console.log("onNewWant", want);
});
```

在页面中引入此插件变量，在 onLaunch 和 onShow 读取 params 后续可根据实际需求完善逻辑。比如通过参数判断如何跳转。
