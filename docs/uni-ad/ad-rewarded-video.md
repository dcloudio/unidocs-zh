## 激励视频广告

### 简介

激励视频广告，是cpm收益**最高**的广告形式。

手机用户观看几十秒视频广告，在广告播放完毕后可获得应用开发商提供的奖励，而应用开发商则可以从广告平台获取不菲的广告收入。

<video controls src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-ad/ad-rewarded-video.x264.mp4" style="max-width: 100%; max-height: 50vh;"></video>

与开屏、信息流等广告变现方式不同，激励视频需设计激励场景，给用户发放激励。

常见场景：
- 合成类游戏，看广告获得道具，比如各种养龙、养凤凰、养牛、养蟹......
- 走路赚钱、看短视频赚钱、猜歌赚钱等应用也非常多
- 网赚应用中，做各种任务赚钱，或者想要接赚钱的任务，前提是观看激励视频
- 增值内容消费，比如小说、电影看一半，剩下的需要看广告后才能继续
- 区块链应用融合激励视频，比如看广告提高收益或提高挖矿成功率
- 游戏内看广告复活、看广告拿高级道具

注意激励不能直接发钱，那会被视为积分墙，而被广告平台禁封。

- 激励视频还经常和邀请裂变结合在一起，应用开发者为用户设计邀请好友的奖励，让用户有动力邀请更多用户使用这个应用，邀请的人越多，获得的奖励越多。

激励视频是造富神器。行业经常出现几个人的团队，月收入百万的奇迹。


**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√（3.4.8+）|x|√（3.4.8+）|x|x|x|x|x|x|x|x|

### 流程概述

1. **开通配置广告**
  使用激励视频，需首先申请开通。开通步骤详见 [https://uniapp.dcloud.net.cn/uni-ad.html#start](https://uniapp.dcloud.net.cn/uni-ad.html#start)
2. 在页面合适位置引入`<ad-rewarded-video></ad-rewarded-video>`组件
3. 点击组件后自动开始播放全屏的激励视频，有倒计时。倒计时结束前关闭视频，则无法获得奖励。
4. 在客户端和云端可以监听用户是否观看完毕。注意客户端监听不可信赖，不能根据客户端通知来给用户发激励。需云端监听，也就是开通激励视频服务器回调。
5. 服务器通过激励视频回调，拿到用户id、是否播放完毕，然后给用户发放奖励。
6. 客户端监听到广告播放完毕后，向服务器请求，服务器告知客户端是否发放了奖励。

为提升激励视频cpm收益，开发者需要在[uni-ad 后台](https://uniad.dcloud.net.cn/)同时开通多个广告平台，比如穿山甲、优量汇、快手等。然后 uni-ad 会自动竞价、分层，在不同的广告平台选择出价最高的广告来播放。

一个用户每日反复观看激励视频，来领取奖励，会造成广告cpm下降、填充不足等问题。因为广告商不愿意给这个用户再投放广告了。所以一般需要限制用户每日观看激励视频的次数，如15次左右。

### 组件语法

在页面中合适位置，引入下面的激励视频启动组件。

该组件是一个容器组件，可以在里面继续包裹`<button>`、`<image>`等组件，但无需为button编写点击事件，点击后会自动启动全屏的激励视频。

`<ad-rewarded-video></ad-rewarded-video>`

**属性说明**

|属性名														|类型													|默认值		|说明																																									|平台差异	|
|:-																|:-														|:-				|:-																																										|:-				|
|adpid														|String&#124;Number|					|广告位id，到uniad后台申请。|					|
|preload													|Boolean											|true			|页面就绪后加载广告数据																																|					|
|loadnext													|Boolean											|false		|自动加载下一条广告数据																																|					|
|disabled													|Boolean											|false		|禁用默认点击行为																																			|					|
|url-callback											|Object												|					|服务器回调透传数据																																		|					|
|v-slot:default="{loading, error}"|															|					|作用域插槽可以获取组件内部广告加载状态和加载错误信息																	|					|
|@load														|EventHandle									|加载事件	|																																											|					|
|@close														|EventHandle									|关闭事件	|																																											|					|
|@error														|EventHandle									|错误事件	|																																											|					|

**url-callback说明**

|字段定义	|类型		|字段名称		|备注															|
|:-:			|:-:		|:-:				|:-:															|
|userId		|String	|用户id			|调用SDK透传，应用对用户的唯一标识|
|extra		|String	|自定义数据	|调用SDK传入并透传，如无需要则为空|


**方法说明**

|方法名	|说明					|
|:-			|:-						|
|load		|加载广告数据	|
|show		|显示广告			|

**注意**

- `load` 和 `show` 不能同时调用，在 `load` 过程中调用 `show` 会被忽略，因为数据还没加载完毕，可以在`@load`完成事件中调用 `show`
- 支持重复调用 `show`，调用 `show` 时会判断是否加载过数据，如果没有会自动加载一次，如果组件正在预载数据，调用 `show` 也会被忽略
- 推荐直接使用组件的自动加载逻辑，完全不需要手动调用 `load` 和 `show`


#### 简单示例

```vue
<template>
  <view>
    <ad-rewarded-video adpid="1507000689" :loadnext="true" v-slot:default="{loading, error}">
      <button :disabled="loading" :loading="loading">显示广告</button>
      <view v-if="error">{{error}}</view>
    </ad-rewarded-video>
  </view>
</template>
```


#### 完整示例

```html
<template>
  <view class="content">
    <ad-rewarded-video adpid="1507000689" :loadnext="true" v-slot:default="{loading, error}" @load="onadload" @close="onadclose" @error="onaderror">
      <button :disabled="loading" :loading="loading">显示广告</button>
      <view v-if="error">{{error}}</view>
    </ad-rewarded-video>
  </view>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    onadload(e) {
      console.log('广告数据加载成功');
    },
    onadclose(e) {
      const detail = e.detail
      // 用户点击了【关闭广告】按钮
      if (detail && detail.isEnded) {
        // 正常播放结束
        console.log("onadclose " + detail.isEnded);
      } else {
        // 播放中途退出
        console.log("onadclose " + detail.isEnded);
      }
    },
    onaderror(e) {
      // 广告加载失败
      console.log("onaderror: ", e.detail);
    }
  }
}
</script>
```

#### 组件API调用示例

除了使用组件的点击外，也可以使用API来启动激励视频。

比如自定义一个点击位置，然后调用`<ad-rewarded-video>`组件的方法来播放激励视频。如下：

```html
<template>
  <view>
    <ad-rewarded-video ref="adRewardedVideo" adpid="1507000689" :preload="false" :loadnext="false" :disabled="true"
      v-slot:default="{loading, error}" @load="onadload" @close="onadclose" @error="onaderror">
      <view class="ad-error" v-if="error">{{error}}</view>
    </ad-rewarded-video>
    <button type="primary" :disabled="isLoading" :loading="isLoading" @click="showAd">显示广告</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        isLoading: false
      }
    },
    onReady() {
      this.isLoading = true;
      this.$refs.adRewardedVideo.load();
    },
    methods: {
      showAd() {
        if (this.isLoading) {
          return
        }
        this.$refs.adRewardedVideo.show();
      },
      onadload(e) {
        this.isLoading = false;
        console.log('广告数据加载成功');
      },
      onadclose(e) {
        const detail = e.detail
        // 用户点击了【关闭广告】按钮
        if (detail && detail.isEnded) {
          // 正常播放结束
          console.log("onClose " + detail.isEnded);
        } else {
          // 播放中途退出
          console.log("onClose " + detail.isEnded);
        }
        //this.isLoading = true;
        //this.$refs.adRewardedVideo.load();
      },
      onaderror(e) {
        // 广告加载失败
        console.log(e.detail);
        this.isLoading = false;
      }
    }
  }
</script>

<style>
  .ad-error {
    color: orangered;
    margin-top: 5px;
  }
</style>
```


#### 获取广告商名称

**语法**

`getProvider()`

**说明**

返回值 为 string 类型

|值			|描述											|
|:-:		|:-:											|
|wm			|uniMP激励视频						|
|csj		|穿山甲										|
|gm			|穿山甲gromore						|
|gdt		|腾讯优量汇（前称广点通）	|
|ks			|快手											|
|sigmob	|Sigmob										|
|bd			|百度											|
|gg			|Google AdMob							|
|pg			|海外穿山甲								|

**示例代码**

```html
<template>
  <view class="content">
    <ad-rewarded-video ref="adRewardedVideo" adpid="1507000689" :loadnext="true" v-slot:default="{loading, error}" @load="onload">
      <button :disabled="loading" :loading="loading">显示广告</button>
      <view v-if="error">{{error}}</view>
    </ad-rewarded-video>
  </view>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    onload(e) {
      console.log('广告数据加载成功');

      let providerName = this.$refs.adRewardedVideo.getProvider();
      console.log('广告商名称::', providerName);
    }
  }
}
</script>
```

#### 显示/隐藏

激励视频广告默认是隐藏的，在用户主动触发广告后进行显示。

只有在用户点击激励视频广告组件上的 关闭广告 按钮时，广告才会关闭。开发者不可控制激励视频广告的隐藏。

#### 广告拉取成功与失败

`loadnext=true` 时激励视频广告组件是自动拉取广告并进行更新的。在组件创建后会拉取一次广告，用户点击 关闭广告 后会去拉取下一条广告。

如果拉取失败，通过 `@error` 注册的回调函数会执行，回调函数的参数是一个包含错误信息的对象。

#### 拉取失败，重新拉取

如果组件的某次自动拉取失败，此时可以调用 `load()` 手动重新拉取广告。

#### 监听用户关闭广告

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/rewarded-video-close.png)

只有在用户点击激励视频广告组件上的 关闭广告 按钮时，广告才会关闭。这个事件可以通过 `@close` 监听。

`@close` 的回调函数会传入一个参数 e.detail，e.detail.isEnded 描述广告被关闭时的状态。

|属性								|类型		|说明																																																													|
|:-:								|:-:		|:-:																																																													|
|detail: { isEnded }|boolean|视频是否是在用户完整观看的情况下被关闭的，true 表示用户是在视频播放完以后关闭的视频，false 表示用户在视频播放过程中关闭了视频|


开发者需要根据 isEnded 判断是否视频是否播放结束。但 isEnded 作为一个客户端参数，无法确定是完整看完了视频，还是提前结束。需通过服务器回调来判断。在 isEnd 后，客户端应该向服务器请求确认，服务器如确认成功播放完毕则应该向用户发放奖励，

```html
<template>
  <view class="content">
    <ad-rewarded-video adpid="1507000689" :loadnext="true" v-slot:default="{loading, error}" @close="onadclose">
      <button :disabled="loading" :loading="loading">显示广告</button>
      <view v-if="error">{{error}}</view>
    </ad-rewarded-video>
  </view>
</template>

<script>
export default {
  methods: {
    onadclose(e) {
      const detail = e.detail
      // 用户点击了【关闭广告】按钮
      if (detail && detail.isEnded) {
        // 正常播放结束
        // 这里应该联网给予用户激励。且这段代码应该做安全保护，详见下文中的“安全注意”
        console.log("onadclose " + detail.isEnded);
      } else {
        // 播放中途退出
        console.log("onadclose " + detail.isEnded);
      }
    }
  }
}
</script>
```


### API语法

`uni.createRewardedVideoAd(options)`

**参数说明**

options 为 object 类型，属性如下：

|属性名			|类型		|必填	|描述								|最低支持版本																	|
|:-:				|:-:		|:-:	|:-:								|:-:																					|
|adpid			|string	|是		|广告位 id					|App 2.5.11+																	|
|adUnitId		|string	|是		|广告位 id					|微信小程序2.6.0+, QQ0.1.26+， 抖音1.57.0+|
|urlCallback|object	|否		|服务器回调透传参数	|App 2.5.11+																	|

**urlCallback说明**

|属性名	|类型		|描述																																	|
|:-:		|:-:		|:-:																																	|
|userId	|string	|透传到服务器端																												|
|extra	|string	|透传到服务器端，不推荐设置过于复杂的字符串，例如`JSON.stringify({})`	|


**返回值**

返回值为 RewarededVideoAd 类型，属性如下：

|属性名|类型|描述|最低支持版本|
|:-:|:-:|:-:|:-:|
|show|Function|广告创建后默认是隐藏的，可以通过该方法显示广告|App 2.5.11+, 微信小程序2.6.0+, QQ0.1.26+，抖音1.57.0+|
|onLoad|Function|绑定广告 load 事件的监听器|App 2.5.11+, 微信小程序2.6.0+, QQ0.1.26+，抖音1.57.0+|
|offLoad|Function|解除绑定 load 事件的监听器|QQ0.1.26+，抖音1.57.0+|
|load|Function|当广告素材加载出现错误时，可以通过 load 方法手动加载|App 2.5.11+, 微信小程序2.6.0+, QQ0.1.26+，抖音1.57.0+|
|onError|Function|绑定 error 事件的监听器	|App 2.5.11+, 微信小程序2.6.0+, QQ0.1.26+，抖音1.57.0+|
|onAdClicked|Function|绑定广告可点击屏幕区域事件的监听器  |App 2.5.11+|
|offError|Function|解除绑定 error 事件的监听器|QQ0.1.26+，抖音1.57.0+|
|onClose|Function|绑定 close 事件的监听器|App 2.5.11+, 微信小程序2.6.0+, QQ0.1.26+，抖音1.57.0+|
|offClose|Function|解除绑定 close 事件的监听器|QQ0.1.26+，抖音1.57.0+|


**广告创建**

开发者可以调用 `uni.createRewardedVideoAd` 创建激励视频广告组件。

激励视频广告组件默认是隐藏的，因此可以提前创建，以提前初始化组件。开发者可以在页面的 `onReady` 事件回调中创建广告实例，并在该页面的生命周期内重复调用该广告实例。

```html
<script>
    export default {
        data() {
            return {
                title: 'createRewardedVideoAd'
            }
        },
        onReady() {
          this._isLoaded = false
          rewardedVideoAd = this._rewardedVideoAd = uni.createRewardedVideoAd({
            adpid: '1507000689',
            urlCallback: { // 服务器回调透传参数
              userId: 'testuser',
              extra: 'testdata'
            }
          }) // 仅用于HBuilder基座调试 adpid: '1507000689'
          rewardedVideoAd.onLoad(() => {
            this._isLoaded = true
            console.log('onLoad event')
            // 当激励视频被关闭时，默认预载下一条数据，加载完成时仍然触发 `onLoad` 事件
          })
          rewardedVideoAd.onError((err) => {
            console.log('onError event', err)
          })
          rewardedVideoAd.onClose((res) => {
            console.log('onClose event', res)
          })
        },
        methods: {
          show() {
            if (this._isLoaded) {
              this._rewardedVideoAd.show()
            }
          }
        }
    }
</script>
```

#### 显示/隐藏
激励视频广告组件默认是隐藏的，在用户主动触发广告后，开发者需要调用 RewardedVideoAd.show() 进行显示。

```js
rewardedVideoAd.show()
```

只有在用户点击激励视频广告组件上的 关闭广告 按钮时，广告才会关闭。开发者不可控制激励视频广告组件的隐藏。

#### 广告拉取成功与失败

激励视频广告组件是自动拉取广告并进行更新的。在组件创建后会拉取一次广告，用户点击 关闭广告 后会去拉取下一条广告。

如果拉取成功，通过 `RewardedVideoAd.onLoad()` 注册的回调函数会执行，`RewardedVideoAd.show()` 返回的 Promise 也会是一个 resolved Promise。两者的回调函数中都没有参数传递。

```js
rewardedVideoAd.onLoad(() => {
  console.log('激励视频 广告加载成功')
})

rewardedVideoAd.show()
.then(() => console.log('激励视频 广告显示'))
```

如果拉取失败，通过 `RewardedVideoAd.onError()` 注册的回调函数会执行，回调函数的参数是一个包含错误信息的对象。常见异常错误参考文档

```js
rewardedVideoAd.onError(err => {
  console.log(err)
})
```

`RewardedVideoAd.show()` 返回的 Promise 也会是一个 rejected Promise。

```js
rewardedVideoAd.show()
.catch(err => console.log(err))
```

#### 拉取失败，重新拉取

如果组件的某次自动拉取失败，那么之后调用的 show() 将会被 reject。此时可以调用 `RewardedVideoAd.load()` 手动重新拉取广告。

```js
rewardedVideoAd.show()
.catch(() => {
    rewardedVideoAd.load()
    .then(() => rewardedVideoAd.show())
    .catch(err => {
      console.log('激励视频 广告显示失败')
    })
})
```

如果组件的自动拉取是成功的，那么调用 `load()` 方法会直接返回一个 resolved Promise，而不会去拉取广告。

```js
rewardedVideoAd.load()
.then(() => rewardedVideoAd.show())
```

#### 监听用户关闭广告

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/rewarded-video-close.png)

只有在用户点击激励视频广告组件上的 关闭广告 按钮时，广告才会关闭。这个事件可以通过 `RewardedVideoAd.onClose()` 监听。

`RewardedVideoAd.onClose()` 的回调函数会传入一个参数 res，res.isEnded 描述广告被关闭时的状态。


|属性|类型|说明|
|:-:|:-:|:-:|
|isEnded|boolean|视频是否是在用户完整观看的情况下被关闭的，true 表示用户是在视频播放完以后关闭的视频，false 表示用户在视频播放过程中关闭了视频|

开发者需要根据 res.isEnded 判断是否视频是否播放结束，如果成功播放完毕则应该向用户发放奖励。

```js
rewardedVideoAd.onClose(res => {
    // 用户点击了【关闭广告】按钮
    if (res && res.isEnded) {
      // 正常播放结束
      // 这里应该联网给予用户激励。且这段代码应该做安全保护，详见下文中的“安全注意”
    } else {
      // 播放中途退出
    }
})
```


### 服务器回调@callback

App平台 3.1.15+ 支持穿山甲/优量汇/快手

激励视频广告可以支持广告服务器到业务服务器的回调，用于业务系统判断是否提供奖励给观看广告的用户。配置服务器回调后，当用户成功看完广告时，广告服务器会访问配置的云函数，通知用户完成观看激励视频。

服务器回调将更加安全，可以依赖广告平台的反作弊机制来避免用户模拟观看广告完成的事件。

![激励视频回调](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uniAdCallback-01-29.png)

如何使用
1. 申请激励视频广告位时开启服务器回调
2. 创建激励视频广告时传入回调参数

urlCallback示例

```html
<template>
  <view class="content">
    <ad-rewarded-video adpid="1507000689" :url-callback="urlCallback" :loadnext="true" v-slot:default="{loading, error}">
      <button :disabled="loading" :loading="loading">显示广告</button>
      <view v-if="error">{{error}}</view>
    </ad-rewarded-video>
  </view>
</template>

<script>
export default {
  data() {
    return {
      urlCallback: {
        userId: 'testuser',
        extra: 'testdata'
      }
    }
  }
}
</script>
```


### 服务器回调说明

#### 服务器回调基于 [uniCloud](https://uniapp.dcloud.net.cn/uniCloud/README)

1. 由于多家广告商的回调和签名验证逻辑不同，开发者需要写很多逻辑，`uniCloud` 中的云函数 `uniAdCallback` 已抹平了差异，开发者按照统一的参数处理即可
2. 开发者的服务器有可能响应慢或失去响应造成回调数据丢失, 使用 `uniCloud` 可以帮助开发者保存一份来自广告商服务器的回调数据到开发者的云数据中，以便开发者主动查询
3. `uniCloud` 可以承载大并发、防DDoS攻击，无需运营人员维护

#### 详细流程如下:

1. 登陆 uni-ad [Web控制台](https://uniad.dcloud.net.cn/)
2. 在应用的广告位项上配置激励视频回调，可选择云函数或传统服务器
3. 开通后将在选择的服务空间下自动部署一个加密云函数 `uniAdCallback`
4. `uniAdCallback` 接收广告商服务器回调验证签名并抹平穿山甲/优量汇/快手参数差异，然后以以下方式回调
- 业务在uniCloud：通过[callFunction](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=callbyfunction) 方式调用用户云函数
- 业务在传统服务器：以HTTP方式请求开发者配置的回调URL

注意：
1. 新建的云函数名称不能使用 `uniAdCallback`
2. 服务器通信和前端事件是并行的，前端需要轮询向服务器请求并验证结果
3. 不建议在 `uni-ad` web控制台修改回调的服务空间名称，因为修改后广告商生效需要一段时间
4. 看一次广告收到2次回调结果，且 `trans_id` 相同，产生2次的可能原因有
  - 没有正确响应JSON格式数据 `{"isValid": true}`
  - 服务器响应过慢，广告商服务器重试

提示：
- 多个uni-app项目支持关联一个服务空间，都会调用同一个云函数uniAdCallbck，通过接收回调参数中的属性广告位adpid区分


### 服务器回调参数@uniAdCallbackParameters

|字段定义	|类型		|字段名称				|备注															|
|:-:			|:-:		|:-:						|:-:															|
|adpid		|String	|DCloud广告位id	|																	|
|provider	|String	|广告服务商			|wm、csj、ks、gdt、sigmob					|
|platform	|String	|平台						|iOS、Android											|
|sign			|String	|签名						|																	|
|trans_id	|String	|交易id					|完成观看的唯一交易ID							|
|user_id	|String	|用户id					|调用SDK透传，应用对用户的唯一标识|
|extra		|String	|自定义数据			|调用SDK传入并透传，如无需要则为空|

#### 签名生成方式@sign

```
sign = sha256(secret:transid)
```

提示：`Security key` 在 [uni-ad 广告联盟](https://uniad.dcloud.net.cn) 对应的广告位，配置激励视频服务器回调后可看到

#### 签名验证方式

通过以下2种方式验证外部服务器与uniCloud安全通讯

1. [uni-cloud-s2s](https://uniapp.dcloud.net.cn/uniCloud/uni-cloud-s2s.html)模块
2. 手动获取HTTP请求参数中的 `sign` 验证


#### 开发者返回数据约定

返回JSON格式数据，字段如下：

|字段名称|说明|字段类型|备注|
|:-|:-|:-|:-|
|isValid|校验结果|Blean|判定结果，是否发放奖励，具体发放奖励由用户自己的业务系统决定|

#### 开发者云函数

示例代码

```js
'use strict';

const crypto = require('crypto');

const db = uniCloud.database();

const collectionName = "ad-callback-log"; // 如果选择了腾讯云，需要手动预创建表

class DB {

  static save(data) {
    return new DB().add(data);
  }

  add(data) {
    const collection = db.collection(collectionName);
    const data2 = Object.assign(data, {
      ad_type: 0,
      create_date: new Date()
    })
    return collection.add(data2);
  }
}

exports.main = async (event, context) => {
  //event为客户端上传的参数
  console.log('event : ', event);

  const {
    path,
    queryStringParameters
  } = event;

  const data = {
    adpid: event.adpid,
    platform: event.platform,
    provider: event.provider,
    trans_id: event.trans_id,
    sign: event.sign,
    user_id: event.user_id,
    extra: event.extra
  }

  // 注意::必须验签请求来源
  const secret = ""; // uni-ad Web控制台，找到广告位，点击配置激励视频，展开当前广告位项，可看到生成的 Security key
  const trans_id = event.trans_id;
  const sign2 = crypto.createHash('sha256').update(`${secret}:${trans_id}`).digest('hex');
  if (event.sign !== sign2) {
    return null;
  }

  // 可选将回调记录保存到uniCloud，避免用户服务器没有响应时有日志可查，如果选择了保存记录需要做定时清理日志，避免日志过多影响性能
  // try {
  //   await DB.save(data);
  // } catch (e) {
  //   console.log(e);
  // }

  // 开发者在此处处理自己的回调业务，需要返回值

  return {
    isValid: true
  }
};
```

提示：2023/01/29 起，uni-ad Web控制台支持配置传统服务器地址，简化开通流程

### 老用户升级@upgrade

1. 在传统服务器增加[签名校验](/uni-ad/ad-rewarded-video.html#sign)
2. 登陆 uni-ad [Web控制台](https://uniad.dcloud.net.cn/)，找到广告位对应的配置激励视频，选择 "业务在传统服务器" 并配置服务器HTTP地址


### 微信小程序说明@callbackweixin

3.6.8+ 支持微信小程序服务器回调，目前仅支持使用 [uni-id](/uniCloud/uni-id-summary.html) 用户体系的小程序，后续支持非 uni-id 用户系统


#### 接入流程

1. 项目使用了 [uni-id-co](/uniCloud/uni-id-summary.html#save-user-token) 并更新到 1.0.8+
2. 使用 [uni-open-bridge](/uniCloud/uni-open-bridge.html) 托管三方开放平台数据
3. 配置 [安全网络](/uniCloud/secure-network.html)


#### 安全注意

由于激励视频对应着用户奖励，可能会遇到恶意刷激励奖励但实际上并不看广告的情况。此时广告平台不给结算，但开发者却可能把激励送出去。

为了提升安全性，建议所有使用激励视频的开发者都要做如下工作来加强保护：
1. 前端代码加密。涉及激励相关的，在manifest中配置好要加密的代码文件，打包后会自动加密相应文件。[详见](https://ask.dcloud.net.cn/article/36437)
2. apk加固。即便前端代码加密，原生层引擎的java代码仍然可能被反编译，需要对apk加固。市面上很多加固服务，比如360加固、爱加密加固均可以自行选择。
3. 使用uni云端一体安全网络，防止伪造客户端攻击。[详见](/uniCloud/secure-network.md)
3. 使用如下安全类API，防止客户端被篡改
- plus.navigator.getSignature 获取应用签名标识。结合在服务器端存放证书信息，可比对判断App的证书是否被重签 [规范](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.getSignature)
- plus.navigator.isSimulator 判断App是否运行在模拟器环境 [规范](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.isSimulator)
- plus.navigator.isRoot 判断设备是否被root或越狱 [规范](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.isRoot)
- plus.networkinfo.isSetProxy 判断设备的网络是否设置了代理 [规范](https://www.html5plus.org/doc/zh_cn/device.html#plus.networkinfo.isSetProxy)
4. 避免使用短信验证码来识别身份，推荐使用可信度更高的 [手机号一键登录](/univerify) 或 [微信登录](/api/plugins/login?id=login)
5. 必要时使用[uni实人认证（活体检测）](https://uniapp.dcloud.net.cn/uniCloud/frv/dev.html)

详细的安全方案，请仔细阅读[uni安全专题](/tutorial/safe.md)


### 阿里云云函数费用说明@aliyun-cf-fee

激励视频服务器回调业务涉及费用的部分主要是云函数的使用量、调用次数、出网流量(可选)。 接下来，我们对不同资源，分别进行费用评估。

#### 云函数介绍

1. uniAdCallback：uni-ad自动部署，用于接收广告商服务器的 HTTP 请求并抹平参数差异，然后调用开发者云函数或发送HTTP到开发者配置的服务器。
2. userAdCallback: 开发者创建的云函数，用于接收 uniAdCallback，适用于业务系统在uniCloud。


#### 流量费

我们按照uniCloud官网列出的[按量计费](https://uniapp.dcloud.net.cn/uniCloud/price.html#aliyun-postpay)规则，可以简单得出如下公式：

- 云函数费用(业务系统在uniCloud)   = 资源使用量 * 0.000110592 + 调用次数 * 0.0133 / 10000
- 云函数费用(业务系统不在uniCloud) = 资源使用量 * 0.000110592 + 调用次数 * 0.0133 / 10000 + 出网流量 * 0.8

其中：

- 资源使用量 = 云函数内存（单位为G） * 云函数平均单次执行时长（单位为秒） * 调用次数

我们假设如下数据模型：

- 云函数内存：128M，即0.125G （用户可以自定义设置，最低可设置为128M）
- 云函数平均单次执行时长：200毫秒，即0.2秒
- 出网流量：单次请求 1KB

云函数费用分2种情况

1. 业务系统在uniCloud

`1`次激励视频回调费用为：

```
云函数费用 = 资源使用量 * 0.000110592  + 调用次数 * 0.0133 / 10000
          = 云函数内存（单位为G） * 云函数平均单次执行时长（单位为秒） * 调用次数 + 调用次数 * 0.0133 / 10000
          = 0.125G * 0.2S * 2 * 0.000110592 + 2 * 0.0133/10000
          = 0.0000055296 + 0.00000266
          = 0.0000081896（元）
```

2. 业务系统不在uniCloud

业务不在 uniCloud 时通过 HTTP 方式将回调数据发送到传统服务器，将产生出网流量费用

`1`次激励视频回调费用为：

```
云函数费用 = 资源使用量 * 0.000110592  + 调用次数 * 0.0133 / 10000 + 出网流量 * 0.8
          = 云函数内存（单位为G） * 云函数平均单次执行时长（单位为秒） * 调用次数 + 调用次数 * 0.0133 / 10000 + 出网流量 * 0.8
          = 0.125G * 0.2S * 0.000110592 + 0.0133/10000 + 1KB * 0.8 / (1024 * 1024)
          = 0.0000027648 + 0.00000133 + 7.62939453125e-7
          = 0.000004857739453125（元）
```

注意
1. 在实际业务中云函数费用可能会出现稍微偏高，如：开发者的服务器响应过慢时，广告商的服务器会重试，导致调用次数增加
2. 业务系统不在uniCloud的费用采用服务器配置升级后的计算方式，[升级参考](/component/ad-rewarded-video.html#upgrade)

#### 总结

1. 业务系统在[uniCloud](https://uniapp.dcloud.net.cn/uniCloud/)

|广告回调次数	|云函数费用(元)	|
|:-:					|:-:						|
|1						|0.0000081896		|
|10						|0.000081896		|
|100					|0.00081896			|
|1000					|0.0081896			|
|10000				|0.081896				|

2. 业务系统不在[uniCloud](https://uniapp.dcloud.net.cn/uniCloud/)，包含出网流量费用

|广告回调次数	|云函数费用+出网流量费用(元)  |
|:-:					|:-:												|
|1						|0.000004857739453125				|
|10						|0.00004857739453125				|
|100					|0.0004857739453125					|
|1000					|0.004857739453125					|
|10000				|0.04857739453125						|

这个费用非常非常低，相比于广告收益，可以忽略。请开发者放心使用。

如果免费额度不能满足业务需求，建议用户开启按量付费套餐，因为只用到了云函数或出网流量或数据库


### 注意事项
- iOS平台配置应用使用广告标识（IDFA）详见：[https://ask.dcloud.net.cn/article/36107](https://ask.dcloud.net.cn/article/36107)
- 测试期间请使用测试 `adpid`，参考测试代码，如果无法显示换个时间再试
- 多次调用 `RewardedVideoAd.onLoad()`、`RewardedVideoAd.onError()`、`RewardedVideoAd.onClose()` 等方法监听广告事件会产生多次事件回调，建议在创建广告后监听一次即可。
- 为避免滥用广告资源，目前每个用户每天可观看激励式视频广告的次数有限，建议展示广告按钮前先判断广告是否拉取成功。
- App平台，建议每个广告商每个设备每天调用次数不超过`15`，中间要有间隔时间，否则可能触发系统的反作弊策略导致流量收益下降。

### 案例参考
- 项目源码《养猫合成游戏》，拿走就能用，[https://ext.dcloud.net.cn/plugin?id=4095](https://ext.dcloud.net.cn/plugin?id=4095)
- 项目源码《有奖猜歌》，拿走就能用，[https://ext.dcloud.net.cn/plugin?id=4826](https://ext.dcloud.net.cn/plugin?id=4826)
- 项目源码《猜字谜》，拿走就能用，[https://ext.dcloud.net.cn/plugin?id=7996](https://ext.dcloud.net.cn/plugin?id=7996)

**错误码**

[错误码相关问题排查](https://uniapp.dcloud.net.cn/uni-ad/ad-error-code.html)
