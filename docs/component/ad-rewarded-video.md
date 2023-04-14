## 激励视频广告
## Rewarded Video Ads

### 简介
### Introduction

激励视频广告，是cpm收益**最高**的广告形式。

手机用户观看几十秒视频广告，在广告播放完毕后可获得应用开发商提供的奖励，而应用开发商则可以从广告平台获取不菲的广告收入。
Mobile phone users watch video advertisements for dozens of seconds, and after the advertisements are played, they can get rewards from application developers, and application developers can get a lot of advertising revenue from advertising platforms.

![](https://web-assets.dcloud.net.cn/unidoc/zh/rewarded-video.png)

与开屏、信息流等广告变现方式不同，激励视频需设计激励场景，给用户发放激励。

常见场景：
- 合成类游戏，看广告获得道具，比如各种养龙、养凤凰、养牛、养蟹......
- Synthetic games, watch advertisements to get props, such as raising dragons, raising phoenixes, raising cattle, raising crabs...
- 走路赚钱、看短视频赚钱、猜歌赚钱等应用也非常多
- There are also many applications such as walking to make money, watching short videos to make money, guessing songs to make money, etc.
- 网赚应用中，做各种任务赚钱，或者想要接赚钱的任务，前提是观看激励视频
- In the online earning app, you can earn money by doing various tasks, or you want to take on the task of making money, the premise is to watch the rewarding video
- 增值内容消费，比如小说、电影看一半，剩下的需要看广告后才能继续
- Consumption of value-added content, such as reading half of novels and movies, and the rest need to watch advertisements before continuing
- 区块链应用融合激励视频，比如看广告提高收益或提高挖矿成功率
- 游戏内看广告复活、看广告拿高级道具

注意激励不能直接发钱，那会被视为积分墙，而被广告平台禁封。

- 激励视频还经常和邀请裂变结合在一起，应用开发者为用户设计邀请好友的奖励，让用户有动力邀请更多用户使用这个应用，邀请的人越多，获得的奖励越多。

激励视频是造富神器。行业经常出现几个人的团队，月收入百万的奇迹。


**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet|QQ applet|Quick app|360 applet|Kaishou applet|Jingdong applet|
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

为提升激励视频cpm收益，开发者需要在uniad后台同时开通多个广告平台，比如穿山甲、优量汇、快手等。然后uniad会自动竞价、分层，在不同的广告平台选择出价最高的广告来播放。

一个用户每日反复观看激励视频，来领取奖励，会造成广告cpm下降、填充不足等问题。因为广告商不愿意给这个用户再投放广告了。所以一般需要限制用户每日观看激励视频的次数，如15次左右。

### 组件语法

在页面中合适位置，引入下面的激励视频启动组件。

该组件是一个容器组件，可以在里面继续包裹`<button>`、`<image>`等组件，但无需为button编写点击事件，点击后会自动启动全屏的激励视频。

`<ad-rewarded-video></ad-rewarded-video>`

**属性说明**
**Property description**

|属性名														|类型													|默认值		|说明																																									|平台差异	|
|property name |type |default value |description |platform difference |
|:-																|:-														|:-				|:-																																										|:-				|
|adpid														|String&#124;Number&#124;Array|					|广告位id，到uniad后台申请。如果传入的是数组，会从索引0开始请求失败后继续下一个，适用于已配置底价的逻辑|					|
|preload													|Boolean											|true			|页面就绪后加载广告数据																																|					|
| preload | Boolean | true | load ad data when the page is ready | |
|loadnext													|Boolean											|false		|自动加载下一条广告数据																																|					|
| loadnext | Boolean | false |Automatically load the next ad data | |
|disabled													|Boolean											|false		|禁用默认点击行为																																			|					|
| disabled | Boolean | false | Disable default click behavior | |
|url-callback											|Object												|					|服务器回调透传数据																																		|					|
|url-callback |Object | |Server callback data transparently | |
|v-slot:default="{loading, error}"|															|					|作用域插槽可以获取组件内部广告加载状态和加载错误信息																	|					|
|v-slot:default="{loading, error}"| | |The scope slot can get the loading status and loading error information of the ad inside the component | |
|@load														|EventHandle									|加载事件	|																																											|					|
|@load |EventHandle |Load event | | |
|@close														|EventHandle									|关闭事件	|																																											|					|
|@close |EventHandle |Close event | | |
|@error														|EventHandle									|错误事件	|																																											|					|
|@error |EventHandle |Error event | | |

**url-callback说明**
**url-callback Description**

|字段定义|类型|字段名称|备注|
|Field Definition|Type|Field Name|Remarks|
|:-:|:-:|:-:|:-:|
|userId|String|用户id|调用SDK透传，应用对用户的唯一标识|
| userId| String|User id|Invoke SDK transparent transmission, the unique identification of the application to the user|
|extra|String|自定义数据|调用SDK传入并透传，如无需要则为空|
| extra| String|Custom data|Call the SDK to pass in and transparently transmit, if not required, it will be empty|


**方法说明**
**Method Description**

|方法名|说明|
|method name|description|
|:-|:-|
|load|加载广告数据|
|load|Load ad data|
|show|显示广告|
|show|Show Ads|

**注意**
**Notice**

- `load` 和 `show` 不能同时调用，在 `load` 过程中调用 `show` 会被忽略，因为数据还没加载完毕，可以在`@load`完成事件中调用 `show`
- 支持重复调用 `show`，调用 `show` 时会判断是否加载过数据，如果没有会自动加载一次，如果组件正在预载数据，调用 `show` 也会被忽略
- 推荐直接使用组件的自动加载逻辑，完全不需要手动调用 `load` 和 `show`


#### 简单示例
#### Simple example

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
#### complete example

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
      // User clicked the [Close Ad] button
      if (detail && detail.isEnded) {
        // 正常播放结束
        // end of normal playback
        console.log("onadclose " + detail.isEnded);
      } else {
        // 播放中途退出
        // Exit midway through playback
        console.log("onadclose " + detail.isEnded);
      }
    },
    onaderror(e) {
      // 广告加载失败
      // ad failed to load
      console.log("onaderror: ", e.detail);
    }
  }
}
</script>
```

#### API调用示例
#### API call example

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
        // User clicked the [Close Ad] button
        if (detail && detail.isEnded) {
          // 正常播放结束
          // end of normal playback
          console.log("onClose " + detail.isEnded);
        } else {
          // 播放中途退出
          // Exit midway through playback
          console.log("onClose " + detail.isEnded);
        }
        //this.isLoading = true;
        //this.$refs.adRewardedVideo.load();
      },
      onaderror(e) {
        // 广告加载失败
        // ad failed to load
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

#### 瀑布流逻辑广告位@waterfall
#### Waterfall logical ad slot @waterfall

分层，是一种持续保持最高广告收益的算法。在不同的出价中阶梯向下，遇到高出价则直接播放广告，未遇到则落入下一阶梯询价播放。

此时需要配置多个广告位。

```html
<template>
  <view class="content">
    <ad-rewarded-video :adpid="adpids" :loadnext="true" v-slot:default="{loading, error}" @load="onadload" @close="onadclose" @error="onaderror">
      <button :disabled="loading" :loading="loading">显示广告</button>
      <view v-if="error">{{error}}</view>
    </ad-rewarded-video>
  </view>
</template>

<script>
export default {
  data() {
    return {
      adpids: ["1507000611", "1507000611", "1507000611", "1507000611"]
    }
  },
  methods: {
    onadload(e) {
      console.log('广告数据加载成功');
    },
    onadclose(e) {
      const detail = e.detail
      // 用户点击了【关闭广告】按钮
      // User clicked the [Close Ad] button
      if (detail && detail.isEnded) {
        // 正常播放结束
        // end of normal playback
        console.log("onadclose " + detail.isEnded);
      } else {
        // 播放中途退出
        // Exit midway through playback
        console.log("onadclose " + detail.isEnded);
      }
    },
    onaderror(e) {
      // 广告加载失败
      // ad failed to load
      console.log("onaderror: ", e.detail);
    }
  }
}
</script>
```

提示：3.5.1+ 增加了广告并行请求逻辑，优化分层逻辑，提升广告显示速度
Tip: 3.5.1+ adds ad parallel request logic, optimizes layered logic, and improves ad display speed


### 获取广告商名称
### Get Advertiser Name

#### 语法
#### grammar

`getProvider()`

#### 说明
#### illustrate

返回值 为 string 类型
The return value is of type string

|值			|描述											|
|value |description|
|:-:		|:-:											|
|csj		|穿山甲										|
| csj | pangolin |
|gdt		|腾讯优量汇（前称广点通）	|
| gdt | Tencent Youlianghui (formerly known as Guangdiantong) |
|ks			|快手											|
|sigmob	|Sigmob										|
|gg			|Google AdMob							|
|pg			|海外穿山甲								|
| pg |Overseas Pangolin |

示例代码
sample code

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


### 显示/隐藏
### show/hide

激励视频广告默认是隐藏的，在用户主动触发广告后进行显示。

只有在用户点击激励视频广告组件上的 关闭广告 按钮时，广告才会关闭。开发者不可控制激励视频广告的隐藏。

### 广告拉取成功与失败
### Ad pull success and failure

`loadnext=true` 时激励视频广告组件是自动拉取广告并进行更新的。在组件创建后会拉取一次广告，用户点击 关闭广告 后会去拉取下一条广告。
When `loadnext=true`, the rewarded video ad component automatically pulls the ad and updates it. After the component is created, one ad will be pulled, and the user will click on Close Ad to pull the next ad.

如果拉取失败，通过 `@error` 注册的回调函数会执行，回调函数的参数是一个包含错误信息的对象。
If the pull fails, the callback function registered with `@error` will be executed. The parameter of the callback function is an object containing the error information.

### 拉取失败，重新拉取
### Pull failed, re-pull

如果组件的某次自动拉取失败，此时可以调用 `load()` 手动重新拉取广告。
If an automatic pull of the component fails, you can call `load()` to manually pull the advertisement again.

### 监听用户关闭广告
### Listen for users to close ads

![](https://web-assets.dcloud.net.cn/unidoc/zh/rewarded-video-close.png)

只有在用户点击激励视频广告组件上的 关闭广告 按钮时，广告才会关闭。这个事件可以通过 `@close` 监听。
The ad will only close when the user clicks the Close Ad button on the rewarded video ad component. This event can be listened to via `@close`.

`@close` 的回调函数会传入一个参数 e.detail，e.detail.isEnded 描述广告被关闭时的状态。
The callback function of `@close` will pass a parameter e.detail, e.detail.isEnded describes the state when the ad is closed.


|属性|类型|说明|
|property|type|description|
|:-:|:-:|:-:|
|detail: { isEnded }|boolean|视频是否是在用户完整观看的情况下被关闭的，true 表示用户是在视频播放完以后关闭的视频，false 表示用户在视频播放过程中关闭了视频
|detail: { isEnded }|boolean|Whether the video was closed when the user watched it completely, true means the user closed the video after the video is finished playing, false means the user closed the video during the video playback


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
      // User clicked the [Close Ad] button
      if (detail && detail.isEnded) {
        // 正常播放结束
        // end of normal playback
        // 这里应该联网给予用户激励。且这段代码应该做安全保护，详见下文中的“安全注意”
        // This should be connected to the Internet to give users incentives. And this code should do security protection, see "Security Notice" below for details
        console.log("onadclose " + detail.isEnded);
      } else {
        // 播放中途退出
        // Exit midway through playback
        console.log("onadclose " + detail.isEnded);
      }
    }
  }
}
</script>
```


### 服务器回调@callback
### Server callback @callback

App平台 3.1.15+ 支持穿山甲/优量汇/快手
App platform 3.1.15+ supports Pangolin/Youlianghui/Kuishou

激励视频广告可以支持广告服务器到业务服务器的回调，用于业务系统判断是否提供奖励给观看广告的用户。配置服务器回调后，当用户成功看完广告时，广告服务器会访问配置的云函数，通知用户完成观看激励视频。
The rewarded video advertisement can support the callback from the advertisement server to the service server, which is used by the service system to determine whether to provide rewards to users who watch the advertisement. After the server callback is configured, when the user successfully finishes watching the ad, the ad server will access the configured cloud function and notify the user to finish watching the rewarded video.

服务器回调将更加安全，可以依赖广告平台的反作弊机制来避免用户模拟观看广告完成的事件。

![激励视频回调](https://web-assets.dcloud.net.cn/unidoc/zh/uniAdCallback-01-29.png)
![Incentive Video Callback](https://web-assets.dcloud.net.cn/unidoc/zh/uniAdCallback-01-29.png)

如何使用
how to use
1. 申请激励视频广告位时开启服务器回调
1. Enable server callback when applying for a rewarded video ad slot
2. 创建激励视频广告时传入回调参数
2. Pass in callback parameters when creating a rewarded video ad

urlCallback示例
urlCallback example

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
  },
  methods: {
  }
}
</script>
```


### 服务器回调说明
### Server callback description

#### 服务器回调基于 [uniCloud](https://uniapp.dcloud.net.cn/uniCloud/README)
#### Server callback based on [uniCloud](https://uniapp.dcloud.net.cn/uniCloud/README)

1. 由于多家广告商的回调和签名验证逻辑不同，开发者需要写很多逻辑，`uniCloud` 中的云函数 `uniAdCallback` 已抹平了差异，开发者按照统一的参数处理即可
1. Due to the different callback and signature verification logic of multiple advertisers, developers need to write a lot of logic. The cloud function `uniAdCallback` in `uniCloud` has smoothed out the differences, and developers can handle it according to the unified parameters
2. 开发者的服务器有可能响应慢或失去响应造成回调数据丢失, 使用 `uniCloud` 可以帮助开发者保存一份来自广告商服务器的回调数据到开发者的云数据中，以便开发者主动查询
2. The developer's server may respond slowly or lose response, resulting in loss of callback data. Using `uniCloud` can help developers save a callback data from the advertiser's server to the developer's cloud data, so that the developer can actively query
3. `uniCloud` 可以承载大并发、防DDoS攻击，无需运营人员维护
3. `uniCloud` can carry large concurrency, prevent DDoS attacks, and does not require maintenance by operators

#### 详细流程如下:
#### The detailed process is as follows:

1. 登陆 [uniCloud](https://unicloud.dcloud.net.cn/) web控制台
1. Log in to [uniCloud](https://unicloud.dcloud.net.cn/) web console
2. 在应用的广告位项上配置激励视频回调，可选择云函数或传统服务器
2. Configure the rewarded video callback on the application's ad slot item, and you can choose a cloud function or a traditional server
3. 开通后将在选择的服务空间下自动部署一个加密云函数 `uniAdCallback`
3. After activation, an encrypted cloud function `uniAdCallback` will be automatically deployed in the selected service space
4. `uniAdCallback` 接收广告商服务器回调验证签名并抹平穿山甲/优量汇/快手参数差异，然后以以下方式回调
4. `Kuaishou receives the callback from the advertiser server to verify the signature and smooth out the parameter differences between Pangolin/Youlianghui/Kaishou, and then calls back in the following way
- 业务在uniCloud：通过[callFunction](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=callbyfunction) 方式调用用户云函数
- Business in uniCloud: call user cloud functions via [callFunction](https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=callbyfunction)
- 业务在传统服务器：以HTTP方式请求开发者配置的回调URL
- Business in the traditional server: request the callback URL configured by the developer in HTTP mode

注意：
Notice:
1. 新建的云函数名称不能使用 `uniAdCallback`
1. The newly created cloud function name cannot use `uniAdCallback`
2. 服务器通信和前端事件是并行的，前端需要轮询向服务器请求并验证结果
2. Server communication and front-end events are parallel, and the front-end needs to poll the server to request and verify the results
3. 不建议在 `uniAD` web控制修改回调的服务空间和云函数名称，因为修改后广告商生效需要一段时间
3. It is not recommended to modify the service space and cloud function name of the callback in the `uniAD` web control, because it will take a while for the advertiser to take effect after the modification
4. 看一次广告收到2次回调结果，且 `trans_id` 相同，产生2次的可能原因有
4. Viewing an ad once and receiving 2 callback results, and the `trans_id` is the same, the possible reasons for the 2 times are
> 1.1 在云函数里没有向广告商的请求返回 isValid: true
> 1.1 The cloud function does not return isValid: true to the advertiser's request
> 1.2 服务器响应过慢，广告商服务器重试
> 1.2 The server responds too slowly, the advertiser server retries

### 服务器回调参数@uniAdCallbackParameters
### Server callback parameters @uniAdCallbackParameters

|字段定义	|类型		|字段名称				|备注															|
|Field Definition |Type |Field Name |Remarks |
|:-:			|:-:		|:-:						|:-:															|
|adpid		|String	|DCloud广告位id	|																	|
| adpid | String | DCloud ad slot id | |
|provider	|String	|广告服务商			|csj、ks、gdt、sigmob							|
| provider | String |Advertising service provider | csj, ks, gdt, sigmob |
|platform	|String	|平台						|iOS、Android											|
| platform | String |Platform | iOS, Android |
|sign			|String	|签名						|																	|
| sign | String | signature | |
|trans_id	|String	|交易id					|完成观看的唯一交易ID							|
| trans_id | String |Transaction id |Unique transaction ID for completed viewing|
|user_id	|String	|用户id					|调用SDK透传，应用对用户的唯一标识|
| user_id | String |User id |Invoke SDK transparent transmission, the unique identification of the application to the user|
|extra		|String	|自定义数据			|调用SDK传入并透传，如无需要则为空|
| extra | String |Custom data |Call the SDK to pass in and transparently transmit, if not required, it will be empty|

#### 签名生成方式@sign
#### Signature generation method @sign

```
sign = sha256(secret:transid)
```

提示：`Security key` 在 [uni-AD 广告联盟](https://uniad.dcloud.net.cn) 对应的广告位，配置激励视频服务器回调后可看到

#### 签名验证方式

通过以下2种方式验证外部服务器与uniCloud安全通讯

1. [uni-cloud-s2s](https://uniapp.dcloud.net.cn/uniCloud/uni-cloud-s2s.html)模块
2. 手动获取HTTP请求参数中的 `sign` 验证


#### 开发者返回数据约定
#### developer return data contract

返回json数据，字段如下：
Return json data, the fields are as follows:

字段名称|说明|字段类型|备注|
field name|description|field type|remark|
:-|:-|:-|:-|
isValid|校验结果|Blean|判定结果，是否发放奖励，具体发放奖励由用户自己的业务系统决定|
isValid|Verification result|Blean|Determination result, whether to issue rewards, the specific rewards are determined by the user's own business system|

#### 开发者云函数
#### Developer Cloud Function

示例代码
sample code

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
  //event is the parameter uploaded by the client
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
  // Note:: the source of the signature request must be verified
  const secret = ""; // uni-AD Web控制台，找到广告位，点击配置激励视频，展开当前广告位项，可看到生成的 Security key
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
  // Developers handle their own callback business here and need to return a value

  return {
    isValid: true
  }
};
```

提示：2023/01/29 起，uni-AD Web控制台支持配置传统服务器地址，简化开通流程
Tip: Starting from 2023/01/29, the uni-AD web console supports configuration of traditional server addresses, simplifying the activation process

### 老用户升级@upgrade
### Old users upgrade @upgrade

1. 在传统服务器增加[签名校验](/component/ad-rewarded-video.html#sign)
1. Add [Signature Verification](/component/ad-rewarded-video.html#sign) to the traditional server
2. 登陆 uni-AD [Web控制台](https://uniad.dcloud.net.cn/)，找到广告位对应的配置激励视频，选择 "业务在传统服务器" 并配置服务器HTTP地址
2. Log in to uni-AD [Web console](https://uniad.dcloud.net.cn/), find the configuration rewarded video corresponding to the advertising position, select "Business on traditional server" and configure the server HTTP address


### 微信小程序说明@callbackweixin
### WeChat MiniApp description @callbackweixin

3.6.8+ 支持微信小程序服务器回调，目前仅支持使用 [uni-id](/uniCloud/uni-id-summary.html) 用户体系的小程序，后续支持非 uni-id 用户系统
3.6.8+ supports WeChat MiniApp server callback, currently only supports MiniApp using the [uni-id](/uniCloud/uni-id-summary.html) user system, and will support non-uni-id user systems in the future


#### 接入流程
#### Access process

1. 项目使用了 [uni-id-co](/uniCloud/uni-id-summary.html#save-user-token) 并更新到 1.0.8+
1. The project uses [uni-id-co](/uniCloud/uni-id-summary.html#save-user-token) and updated to 1.0.8+
2. 使用 [uni-open-bridge](/uniCloud/uni-open-bridge.html) 托管三方开放平台数据
2. Use [uni-open-bridge](/uniCloud/uni-open-bridge.html) to host three-party open platform data
3. 配置 [安全网络](/uniCloud/secure-network.html)
3. Configure [Secure Network](/uniCloud/secure-network.html)


#### 安全注意
#### Safety Notice

由于激励视频对应着用户奖励，可能会遇到恶意刷激励奖励但实际上并不看广告的情况。此时广告平台不给结算，但开发者却可能把激励送出去。
Since rewarded videos correspond to user rewards, you may encounter situations where you maliciously use incentive rewards but do not actually watch ads. At this time, the advertising platform does not provide settlement, but the developer may send the incentive.

为了提升安全性，建议所有使用激励视频的开发者都要做如下工作来加强保护：
To improve security, it is recommended that all developers using rewarded videos do the following to strengthen protection:
1. 前端代码加密。涉及激励相关的，在manifest中配置好要加密的代码文件，打包后会自动加密相应文件。[详见](https://ask.dcloud.net.cn/article/36437)
1. Front-end code encryption. In relation to incentives, configure the code files to be encrypted in the manifest, and the corresponding files will be automatically encrypted after packaging. [See details](https://ask.dcloud.net.cn/article/36437)
2. apk加固。即便前端代码加密，原生层引擎的java代码仍然可能被反编译，需要对apk加固。市面上很多加固服务，比如360加固、爱加密加固均可以自行选择。
3. 使用uni云端一体安全网络，防止伪造客户端攻击。[详见](/uniCloud/secure-network.md)
3. 使用如下安全类API，防止客户端被篡改
3. Use the following security APIs to prevent clients from being tampered with
- plus.navigator.getSignature 获取应用签名标识。结合在服务器端存放证书信息，可比对判断App的证书是否被重签 [规范](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.getSignature)
- plus.navigator.getSignature to get the app signature. Combined with the certificate information stored on the server side, it can be compared and judged whether the certificate of the App has been re-signed [Specification](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.getSignature)
- plus.navigator.isSimulator 判断App是否运行在模拟器环境 [规范](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.isSimulator)
- plus.navigator.isSimulator to determine whether the App is running in the simulator environment [Specification](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.isSimulator)
- plus.navigator.isRoot 判断设备是否被root或越狱 [规范](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.isRoot)
- plus.navigator.isRoot determines whether the device is rooted or jailbroken [Specification](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.isRoot)
- plus.networkinfo.isSetProxy 判断设备的网络是否设置了代理 [规范](https://www.html5plus.org/doc/zh_cn/device.html#plus.networkinfo.isSetProxy)
- plus.networkinfo.isSetProxy determines whether the device's network has a proxy set [Specification](https://www.html5plus.org/doc/zh_cn/device.html#plus.networkinfo.isSetProxy)
4. 避免使用短信验证码来识别身份，推荐使用可信度更高的 [手机号一键登录](/univerify) 或 [微信登录](/api/plugins/login?id=login)
5. 必要时使用[uni实人认证（活体检测）](https://uniapp.dcloud.net.cn/uniCloud/frv/dev.html)

详细的安全方案，请仔细阅读[uni安全专题](/tutorial/safe.md)

### manifest 配置@manifest
### manifest configuration @manifest

注： `Sigmob`属于小型广告联盟，收益偏低。如有条件，还需开通优量汇，快手等广告渠道以便提高收益。
Note: `Sigmob` is a small ad network with low revenue. If conditions permit, it is necessary to open advertising channels such as Youlianghui and Kuaishou in order to increase revenue.

`Sigmob`暂不支持打包界面的勾选，如集成需进行如下的配置变动：
`Sigmob` currently does not support the check of the packaging interface. For integration, the following configuration changes are required:

`Sigmob`打包需要将`HBuilderX`升级到`3.2.0`以上版本。
`Sigmob` packaging requires `HBuilderX` to be upgraded to `3.2.0` or later.

打开 `manifest.json` 文件，点击 “源码视图”，`uni-app` 在 `app-plus->distribute->sdkConfigs` 下添加如下内容，`5+ app` 在 `plus->distribute->plugins` 下添加如下内容：
Open the `manifest.json` file, click "Source View", add the following content in `uni-app` under `app-plus->distribute->sdkConfigs`, `5+ app` in `plus->distribute->plugins` ` add the following:

```json
{
	"app-plus": {
		"distribute": {
			"sdkConfigs": {
				"ad" : {
				  "sigmob" : {}
				}
			}
		}
	}
}
```

**注意：如果已经存在ad节点，只需要在后面追加即可，如下**
**Note: If there is already an ad node, just append it, as follows**

```json
{
	"app-plus": {
		"distribute": {
			"sdkConfigs": {
				"ad" : {
				  "gdt" : {},
				  "csj" : {},
				  "ks" : {},
				  "ks-content" : {},
				  "sigmob" : {}
				}
			}
		}
	}
}
```


### 阿里云云函数费用说明@aliyun-cf-fee
### Aliyun cloud function fee description @aliyun-cf-fee

激励视频服务器回调业务涉及费用的部分主要是云函数的使用量、调用次数、出网流量(可选)。 接下来，我们对不同资源，分别进行费用评估。
The cost involved in the callback service of the incentive video server is mainly the usage amount of the cloud function, the number of calls, and the outbound traffic (optional). Next, we conduct cost assessments for different resources.

#### 云函数介绍
#### Cloud Function Introduction

1. uniAdCallback：uni-AD自动部署，用于接收广告商服务器的 HTTP 请求并抹平参数差异，然后调用开发者云函数或发送HTTP到开发者配置的服务器。
1. uniAdCallback: uni-AD is automatically deployed to receive the HTTP request from the advertiser's server and smooth out the parameter differences, and then call the developer's cloud function or send HTTP to the server configured by the developer.
2. userAdCallback: 开发者创建的云函数，用于接收 uniAdCallback，适用于业务系统在uniCloud。
2. userAdCallback: A cloud function created by the developer to receive uniAdCallback, applicable to business systems in uniCloud.


#### 流量费
#### traffic fee

我们按照uniCloud官网列出的[按量计费](https://uniapp.dcloud.net.cn/uniCloud/price.html#aliyun-postpay)规则，可以简单得出如下公式：
According to the [pay-as-you-go](https://uniapp.dcloud.net.cn/uniCloud/price.html#aliyun-postpay) rules listed on the uniCloud official website, we can simply get the following formula:

- 云函数费用(业务系统在uniCloud)   = 资源使用量 * 0.000110592 + 调用次数 * 0.0133 / 10000
- Cloud function cost (business system in uniCloud) = resource usage * 0.000110592 + number of calls * 0.0133 / 10000
- 云函数费用(业务系统不在uniCloud) = 资源使用量 * 0.000110592 + 调用次数 * 0.0133 / 10000 + 出网流量 * 0.8
- Cloud function fee (business system is not in uniCloud) = resource usage * 0.000110592 + number of calls * 0.0133 / 10000 + outbound traffic * 0.8

其中：
in:

- 资源使用量 = 云函数内存（单位为G） * 云函数平均单次执行时长（单位为秒） * 调用次数
- Resource usage = cloud function memory (in G) * average execution time of a cloud function (in seconds) * number of calls

我们假设如下数据模型：
We assume the following data model:

- 云函数内存：128M，即0.125G （用户可以自定义设置，最低可设置为128M）
- Cloud function memory: 128M, or 0.125G (users can customize the settings, the minimum can be set to 128M)
- 云函数平均单次执行时长：200毫秒，即0.2秒
- The average execution time of a cloud function: 200 milliseconds, or 0.2 seconds
- 出网流量：单次请求 1KB
- Outbound traffic: 1KB for a single request

云函数费用分2种情况
There are two types of cloud function fees

1. 业务系统在uniCloud
1. The business system is in uniCloud

`1`次激励视频回调费用为：
The fee for `1` rewarded video callback is:

```
云函数费用 = 资源使用量 * 0.000110592  + 调用次数 * 0.0133 / 10000
          = 云函数内存（单位为G） * 云函数平均单次执行时长（单位为秒） * 调用次数 + 调用次数 * 0.0133 / 10000
          = 0.125G * 0.2S * 2 * 0.000110592 + 2 * 0.0133/10000
          = 0.0000055296 + 0.00000266
          = 0.0000081896（元）
```

2. 业务系统不在uniCloud
2. The business system is not in uniCloud

业务不在 uniCloud 时通过 HTTP 方式将回调数据发送到传统服务器，将产生出网流量费用
When the business is not in uniCloud, the callback data is sent to the traditional server through HTTP, and the outbound traffic fee will be incurred

`1`次激励视频回调费用为：
The fee for `1` rewarded video callback is:

```
云函数费用 = 资源使用量 * 0.000110592  + 调用次数 * 0.0133 / 10000 + 出网流量 * 0.8
          = 云函数内存（单位为G） * 云函数平均单次执行时长（单位为秒） * 调用次数 + 调用次数 * 0.0133 / 10000 + 出网流量 * 0.8
          = 0.125G * 0.2S * 0.000110592 + 0.0133/10000 + 1KB * 0.8 / (1024 * 1024)
          = 0.0000027648 + 0.00000133 + 7.62939453125e-7
          = 0.000004857739453125（元）
```

注意
Notice
1. 在实际业务中云函数费用可能会出现稍微偏高，如：开发者的服务器响应过慢时，广告商的服务器会重试，导致调用次数增加
1. In actual business, the cost of cloud functions may be slightly higher. For example, when the developer's server responds too slowly, the advertiser's server will retry, resulting in an increase in the number of calls
2. 业务系统不在uniCloud的费用采用服务器配置升级后的计算方式，[升级参考](/component/ad-rewarded-video.html#upgrade)
2. The cost of the business system not in uniCloud is calculated after the server configuration is upgraded, [upgrade reference](/component/ad-rewarded-video.html#upgrade)

#### 总结
#### Summarize

1. 业务系统在[uniCloud](https://uniapp.dcloud.net.cn/uniCloud/)
1. The business system is in [uniCloud](https://uniapp.dcloud.net.cn/uniCloud/)

|广告回调次数	|云函数费用(元)	|
|Ad callback times |Cloud function fee (yuan) |
|:-:					|:-:						|
|1						|0.0000081896		|
|10						|0.000081896		|
|100					|0.00081896			|
|1000					|0.0081896			|
|10000				|0.081896				|

2. 业务系统不在[uniCloud](https://uniapp.dcloud.net.cn/uniCloud/)，包含出网流量费用
2. The business system is not in [uniCloud](https://uniapp.dcloud.net.cn/uniCloud/), including the outbound traffic fee

|广告回调次数	|云函数费用+出网流量费用(元)  |
|Ad callback times |Cloud function fee + outbound traffic fee (yuan) |
|:-:					|:-:												|
|1						|0.000004857739453125				|
|10						|0.00004857739453125				|
|100					|0.0004857739453125					|
|1000					|0.004857739453125					|
|10000				|0.04857739453125						|

这个费用非常非常低，相比于广告收益，可以忽略。请开发者放心使用。
This fee is very, very low and can be ignored compared to advertising revenue. Please feel free to use it.


### 注意事项
### Precautions
- iOS平台配置应用使用广告标识（IDFA）详见：[https://ask.dcloud.net.cn/article/36107](https://ask.dcloud.net.cn/article/36107)
- For details on the iOS platform configuration application to use the Advertising Identification (IDFA): [https://ask.dcloud.net.cn/article/36107](https://ask.dcloud.net.cn/article/36107)
- 测试期间请使用测试 `adpid`，参考测试代码，如果无法显示换个时间再试
- Please use the test `adpid` during the test, refer to the test code, if it cannot be displayed, try again at another time
- 多次调用 `RewardedVideoAd.onLoad()`、`RewardedVideoAd.onError()`、`RewardedVideoAd.onClose()` 等方法监听广告事件会产生多次事件回调，建议在创建广告后监听一次即可。
- Multiple calls to `RewardedVideoAd.onLoad()`, `RewardedVideoAd.onError()`, `RewardedVideoAd.onClose()` and other methods to monitor ad events will generate multiple event callbacks. It is recommended to listen once after creating an ad.
- 为避免滥用广告资源，目前每个用户每天可观看激励式视频广告的次数有限，建议展示广告按钮前先判断广告是否拉取成功。
- In order to avoid abusing advertising resources, currently each user can watch a limited number of rewarded video ads per day. It is recommended to judge whether the advertisement is successfully pulled before displaying the advertising button.
- App平台，建议每个广告商每个设备每天调用次数不超过`15`，中间要有间隔时间，否则可能触发系统的反作弊策略导致流量收益下降。
- App platform, it is recommended that each advertiser call each device no more than `15` per day, and there should be an interval in between, otherwise it may trigger the system's anti-cheating strategy and lead to a decrease in traffic revenue.

### 案例参考
### Case Reference
- 项目源码《养猫合成游戏》，拿走就能用，[https://ext.dcloud.net.cn/plugin?id=4095](https://ext.dcloud.net.cn/plugin?id=4095)
- Project source code "Cat Raising Synthesis Game", you can use it when you take it away, [https://ext.dcloud.net.cn/plugin?id=4095](https://ext.dcloud.net.cn/plugin? id=4095)
- 项目源码《有奖猜歌》，拿走就能用，[https://ext.dcloud.net.cn/plugin?id=4826](https://ext.dcloud.net.cn/plugin?id=4826)
- The project source code "Guess Songs with Prizes" can be used when you take it away, [https://ext.dcloud.net.cn/plugin?id=4826](https://ext.dcloud.net.cn/plugin? id=4826)
- 项目源码《猜字谜》，拿走就能用，[https://ext.dcloud.net.cn/plugin?id=7996](https://ext.dcloud.net.cn/plugin?id=7996)
- Project source code "Character Puzzle", you can use it when you take it away, [https://ext.dcloud.net.cn/plugin?id=7996](https://ext.dcloud.net.cn/plugin?id= 7996)

**错误码**
**error code**

[错误码相关问题排查](https://uniapp.dcloud.net.cn/component/ad-error-code.html)
[Error code related troubleshooting](https://uniapp.dcloud.net.cn/component/ad-error-code.html)
