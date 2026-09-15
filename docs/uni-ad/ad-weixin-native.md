# 微信小程序原生接入 uni-ad

本文介绍微信小程序原生接入 `uni-ad` 的方式，适用于：

- 使用 `uni-app` 开发，并发行到微信小程序的项目；
- 使用微信开发者工具直接开发的原生小程序项目。

## 接入前准备

1. 在 [uni-ad 广告联盟](https://uniad.dcloud.net.cn/) 创建应用并申请广告位，获取广告位 ID（`adpid`）。开通流程参考[微信小程序广告开通指南](https://uniapp.dcloud.net.cn/uni-ad/ad-weixin-dcloud.html)。
2. 下载[微信原生接入组件（native.zip）](https://web-ext-storage.dcloud.net.cn/uniad/native/native.zip)，解压后得到 `uni-ad-native` 组件目录，后续按项目类型放置。

3. 在微信公众平台添加 `uni-ad` 插件，并确认使用的插件版本和 `provider` 与对接方提供的信息一致。下方示例使用当前常见配置，发布前请以实际提供的版本为准。

## uni-app 项目接入

### 1. 放置组件

将解压得到的 `uni-ad-native` 目录放在 uni-app 项目根目录的 `wxcomponents` 下。

### 2. 注册组件

在 `pages.json` 的 `globalStyle.usingComponents` 中注册。下面注册两个标签名，它们指向同一个组件，便于在页面中区分普通广告和需要主动调用 `show()` 的广告：

```json
{
  "globalStyle": {
    "usingComponents": {
      "u-ad": "/wxcomponents/uni-ad-native/uni-ad-native",
      "u-ad-interstitial": "/wxcomponents/uni-ad-native/uni-ad-native"
    }
  }
}
```

标签名可以按项目规范调整，但 `usingComponents` 中的路径必须与实际目录一致。

### 3. 注册微信广告插件

在 `manifest.json` 的 `mp-weixin` 节点中开启原生组件，并注册 `uni-ad` 插件：

```json
{
  "mp-weixin": {
    "appid": "你的微信小程序 AppID",
    "usingComponents": true,
    "plugins": {
      "uni-ad": {
        "version": "2.2.0",
        "provider": "wxe6129e9cc9619c07"
      }
    }
  }
}
```

这里的 `appid` 是 `mp-weixin` 节点中的微信小程序 AppID，不是广告位 ID。`version` 请以实际对接方提供的插件版本为准。

### 4. 使用 Banner 广告

页面中直接使用已注册的组件，并传入广告位 ID：

```vue
<template>
  <view>
    <u-ad
      adpid="你的 Banner 广告位 ID"
      @load="onAdLoad"
      @error="onAdError"
      @close="onAdClose"
    />
  </view>
</template>

<script>
export default {
  methods: {
    onAdLoad(event) {
      console.log('广告加载成功', event)
    },
    onAdError(event) {
      console.log('广告加载失败', event.detail || event)
    },
    onAdClose(event) {
      console.log('广告关闭', event.detail || event)
    }
  }
}
</script>
```

Banner 广告会在组件加载成功后展示，不需要调用 `show()`。

### 5. 使用插屏广告

插屏广告需要先挂载组件，再在合适的时机调用实例的 `show()`：

```vue
<template>
  <view>
    <button @click="showInterstitial">打开插屏广告</button>

    <u-ad-interstitial
      ref="interstitialAd"
      adpid="你的插屏广告位 ID"
      @load="onAdLoad"
      @error="onAdError"
      @close="onAdClose"
    />
  </view>
</template>

<script>
export default {
  methods: {
    showInterstitial() {
      this.$refs.interstitialAd.show()
    },
    onAdLoad(event) {
      console.log('插屏加载成功', event)
    },
    onAdError(event) {
      console.log('插屏加载失败', event.detail || event)
    },
    onAdClose(event) {
      console.log('插屏关闭', event.detail || event)
    }
  }
}
</script>
```

微信对插屏广告的展示时机和频率有限制。不要在小程序启动后立即调用 `show()`，应放在用户明确操作等合适时机；过早调用可能收到 `errCode: 2001`。

### 6. 使用激励视频广告

激励视频也需要调用 `show()`。`close` 事件中的 `isEnded` 可以用来更新客户端界面状态，但不能直接作为发放奖励的依据：

```vue
<template>
  <view>
    <button @click="showRewardedVideo">观看激励视频</button>

    <u-ad-interstitial
      ref="rewardedAd"
      adpid="你的激励视频广告位 ID"
      @load="onAdLoad"
      @error="onAdError"
      @close="onRewardedClose"
    />
  </view>
</template>

<script>
export default {
  methods: {
    showRewardedVideo() {
      this.$refs.rewardedAd.show()
    },
    onAdLoad(event) {
      console.log('激励视频加载成功', event)
    },
    onAdError(event) {
      console.log('激励视频加载失败', event.detail || event)
    },
    onRewardedClose(event) {
      const detail = event.detail || {}
      console.log('激励视频关闭，是否完整观看：', detail.isEnded)
    }
  }
}
</script>
```

## 微信原生小程序接入

### 1. 放置组件

将解压得到的 `uni-ad-native` 目录放在原生小程序项目的自定义组件目录中，例如 `components/uni-ad-native`。

目录名称可以调整，但注册路径必须和实际目录一致。

### 2. 在 app.json 中注册组件和插件

在 `app.json` 中同时注册本地包装组件和 `uni-ad` 插件：

```json
{
  "usingComponents": {
    "u-ad": "/components/uni-ad-native/uni-ad-native",
    "u-ad-interstitial": "/components/uni-ad-native/uni-ad-native"
  },
  "plugins": {
    "uni-ad": {
      "version": "2.2.0",
      "provider": "wxe6129e9cc9619c07"
    }
  }
}
```

如果只在单个页面使用广告，也可以将 `usingComponents` 配置在页面对应的 `.json` 文件中。

### 3. 使用组件

页面 WXML：

```xml
<u-ad
  adpid="你的 Banner 广告位 ID"
  bind:load="onAdLoad"
  bind:error="onAdError"
  bind:close="onAdClose"
></u-ad>

<button bind:tap="showInterstitial">打开插屏广告</button>
<u-ad-interstitial
  id="interstitialAd"
  adpid="你的插屏广告位 ID"
  bind:load="onAdLoad"
  bind:error="onAdError"
  bind:close="onAdClose"
></u-ad-interstitial>
```

页面 JavaScript：

```js
Page({
  showInterstitial() {
    this.selectComponent('#interstitialAd').show()
  },
  onAdLoad(event) {
    console.log('广告加载成功', event)
  },
  onAdError(event) {
    console.log('广告加载失败', event)
  },
  onAdClose(event) {
    console.log('广告关闭', event)
  }
})
```

激励视频的写法与插屏相同，将 `adpid` 换成激励视频广告位 ID，并在 `bind:close` 中读取 `event.detail.isEnded` 即可。该字段仅表示客户端收到的播放结果，奖励发放仍需由开发者自己的服务端逻辑决定。

## 参数说明

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `adpid` | String | 是 | DCloud 广告位 ID。在 uni-ad 控制台申请。 |

## 事件和方法

uni-app 使用 `@load`、`@close`、`@error`；微信原生小程序使用 `bind:load`、`bind:close`、`bind:error`。

| 事件 | 说明 |
| --- | --- |
| `load` | 广告加载成功。 |
| `error` | 广告加载或展示失败，可从事件对象中查看 `errCode`、`errMsg`。 |
| `close` | 广告关闭。激励视频通常可从 `event.detail.isEnded` 读取是否完整观看。 |

| 方法 | 说明 |
| --- | --- |
| `load()` | 手动加载广告。组件创建时会自动加载，通常不需要调用。 |
| `show()` | 展示插屏或激励视频。若广告仍在加载，组件会在加载完成后尝试展示。Banner 不需要调用。 |
| `destroy()` | 销毁广告实例。组件从页面移除时会自动清理，通常不需要手动调用。 |

## 激励视频安全限制

此接入方式不支持激励视频服务器回调和微信安全网络。`close` 事件中的 `isEnded` 字段来自客户端，可能被篡改，不能仅凭客户端结果向用户发放奖励。

如果业务包含积分、道具、解锁内容等奖励，请自行实现用户身份绑定、服务端校验、幂等发奖和防刷策略。可参考[激励视频服务器回调说明](ad-rewarded-video.md#callback)了解安全校验原则。

## 常见问题

### 提示组件未找到

检查 `usingComponents` 中的路径是否与实际目录一致：

- uni-app 项目通常使用 `/wxcomponents/uni-ad-native/uni-ad-native`；
- 微信原生小程序示例使用 `/components/uni-ad-native/uni-ad-native`。

### 广告插件配置错误

检查以下配置：

- `manifest.json`（uni-app）或 `app.json`（原生小程序）是否注册了 `uni-ad` 插件；
- 微信公众平台是否已添加并授权该插件；
- 插件 `version` 是否为对接方提供的版本。

### 广告加载失败或没有填充

检查 `adpid` 是否正确、广告位类型是否和使用场景匹配，并在微信开发者工具或真机上测试。广告没有填充时，组件会触发 `error`，应根据事件中的 `errCode` 和 `errMsg` 排查。

### 插屏或激励视频没有展示

确认组件已经挂载，并且在用户操作等合适时机调用了 `show()`。小程序启动后立即调用插屏可能触发微信的展示限制（常见错误码为 `2001`）。
