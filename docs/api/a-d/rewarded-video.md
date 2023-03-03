
**激励视频广告**
**Rewarded Video Ads**

# 此文档已过期，新文档: [https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html)

===========以下为过期文档=========

[激励视频广告介绍](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html)
[Introduction to Rewarded Video Ads](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html)


**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序|飞书小程序|QQ小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet|Feishu applet|QQ applet|Kuishou applet|Jingdong applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√（2.5.11+）|x|√|x|x|√（1.57.0+）|x|√（0.1.26+）|√|x|


**开通配置广告**
**Activate configuration advertisement**

[开通广告步骤详情](https://uniapp.dcloud.net.cn/uni-ad.html#start)
[Details of the steps to activate advertising](https://uniapp.dcloud.net.cn/uni-ad.html#start)


激励视频广告组件是原生组件，层级最高，会覆盖在普通前端组件上。
The rewarded video ad component is a native component, the highest level, and will be overlaid on the common front-end component.


### 语法
### grammar

`uni.createRewardedVideoAd(options)`

### 参数说明
### Parameter Description
options 为 object 类型，属性如下：
options is of type object with the following properties:

|属性名		|类型		|必填	|描述			|最低支持版本	|
|Property Name |Type |Required |Description |Minimum Supported Version |
|:-:|:-:|:-:|:-:|:-:|
|adpid	  |string	|	是|广告位 id |App 2.5.11+|
|adpid |string | yes|ad slot id |App 2.5.11+|
|adUnitId	|string	|	是|广告位 id |微信小程序2.6.0+, QQ0.1.26+， 字节跳动1.57.0+|
|adUnitId |string | Yes|Ad slot id |WeChat applet 2.6.0+, QQ0.1.26+, ByteDance 1.57.0+|


### 返回值
### return value

返回值为 RewarededVideoAd 类型，属性如下：
The return value is of type RewarededVideoAd with the following properties:

|属性名|类型|描述|最低支持版本|
|property name|type|description|minimum supported version|
|:-:|:-:|:-:|:-:|
|show|Function|广告创建后默认是隐藏的，可以通过该方法显示广告|App 2.5.11+, 微信小程序2.6.0+, QQ0.1.26+，字节跳动1.57.0+|
|show|Function|Ads are hidden by default after they are created. You can use this method to display ads|App 2.5.11+, WeChat applet 2.6.0+, QQ0.1.26+, ByteDance 1.57.0+|
|onLoad|Function|绑定广告 load 事件的监听器|App 2.5.11+, 微信小程序2.6.0+, QQ0.1.26+，字节跳动1.57.0+|
|onLoad|Function|Binding a listener for ad load event|App 2.5.11+, WeChat applet 2.6.0+, QQ0.1.26+, ByteDance 1.57.0+|
|offLoad|Function|解除绑定 load 事件的监听器|QQ0.1.26+，字节跳动1.57.0+|
|offLoad|Function|Unbind the listener for the load event|QQ0.1.26+, ByteDance 1.57.0+|
|load|Function|当广告素材加载出现错误时，可以通过 load 方法手动加载|App 2.5.11+, 微信小程序2.6.0+, QQ0.1.26+，字节跳动1.57.0+|
|load|Function|When there is an error in the creative loading, you can manually load it through the load method|App 2.5.11+, WeChat applet 2.6.0+, QQ0.1.26+, ByteDance 1.57.0+|
|onError|Function|绑定 error 事件的监听器	|App 2.5.11+, 微信小程序2.6.0+, QQ0.1.26+，字节跳动1.57.0+|
|onError|Function|Binding the listener of the error event |App 2.5.11+, WeChat applet 2.6.0+, QQ0.1.26+, ByteDance 1.57.0+|
|onAdClicked|Function|绑定广告可点击屏幕区域事件的监听器  |App 2.5.11+|
|onAdClicked|Function|Binding a listener for the clickable screen area event of an ad |App 2.5.11+|
|offError|Function|解除绑定 error 事件的监听器|QQ0.1.26+，字节跳动1.57.0+|
|offError|Function|Unbind the listener for the error event|QQ0.1.26+, ByteDance 1.57.0+|
|onClose|Function|绑定 close 事件的监听器|App 2.5.11+, 微信小程序2.6.0+, QQ0.1.26+，字节跳动1.57.0+|
|onClose|Function|Bind the listener of the close event|App 2.5.11+, WeChat applet 2.6.0+, QQ0.1.26+, ByteDance 1.57.0+|
|offClose|Function|解除绑定 close 事件的监听器|QQ0.1.26+，字节跳动1.57.0+|
|offClose|Function|Unbind the listener for the close event|QQ0.1.26+, ByteDance 1.57.0+|


### 广告创建
### Ad Creation

开发者可以调用 `uni.createRewardedVideoAd` 创建激励视频广告组件。
Developers can call `uni.createRewardedVideoAd` to create rewarded video ad components.

激励视频广告组件默认是隐藏的，因此可以提前创建，以提前初始化组件。开发者可以在页面的 `onReady` 事件回调中创建广告实例，并在该页面的生命周期内重复调用该广告实例。
The rewarded video ad component is hidden by default, so it can be created ahead of time to initialize the component early. Developers can create an ad instance in the page's `onReady` event callback, and call the ad instance repeatedly during the page's life cycle.

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
          rewardedVideoAd = this._rewardedVideoAd = uni.createRewardedVideoAd({ adpid: '1507000689' }) // 仅用于HBuilder基座调试 adpid: '1507000689'
          rewardedVideoAd.onLoad(() => {
            this._isLoaded = true
            console.log('onLoad event')
            // 当激励视频被关闭时，默认预载下一条数据，加载完成时仍然触发 `onLoad` 事件
            // When the incentive video is closed, the next data is preloaded by default, and the `onLoad` event is still triggered when the loading is complete
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


### 推荐接入示例@ad-js
### Recommended access example @ad-js

`ad.js` 是对 `uni.createRewardedVideoAd` 的封装，一个页面缓存多页面生效，避免每个页面都预载而不展示的问题，可以传入不同广告位，内部处理了Loading状态、快速点击、数据过期、失败重试1次逻辑
`ad.js` is the encapsulation of `uni.createRewardedVideoAd`. One page caches multiple pages and takes effect, avoiding the problem that each page is preloaded but not displayed. Different ad slots can be passed in, and the Loading state and quick clicks are processed internally. , data expired, failed to retry 1 logic

```html
<template>
  <view>
    <button type="primary" class="btn" @click="showRewardedVideoAd">显示激励视频广告</button>
    <button type="primary" class="btn" @click="showFullScreenVideoAd">显示全屏视频广告</button>
  </view>
</template>

<script>
  import AD from "../ad.js"

  export default {
    data() {
      return {
        title: '视频广告'
      }
    },
    onReady() {
      // 可选预载广告数据
      // optional preload ad data

      // AD.load({
      //   adpid: 1507000689,
      //   adType: "RewardedVideo"
      // });

      // AD.load({
      //   adpid: 1507000611,
      //   adType: "FullScreenVideo"
      // });
    },
    methods: {
      showRewardedVideoAd() {
        // 调用后会显示 loading 界面
        // After calling, the loading interface will be displayed
        AD.show({
          adpid: 1507000689, // HBuilder 基座测试广告位
          adType: "RewardedVideo",
          urlCallback: {// 服务器回调透传参数
            userId: 'testuser',
            extra: 'testdata'
          }
          //singleton: false // 设置此参数后，每次调用 show 方法将重新创建广告实例，预载将失效，如果广告回调每次要透传用户信息需要设置 false
          //singleton: false // After this parameter is set, the ad instance will be recreated every time the show method is called, and the preload will be invalid. If the ad callback needs to transparently transmit user information every time, it needs to be set to false
        }, (res) => {
          // 用户点击了【关闭广告】按钮
          // User clicked the [Close Ad] button
          if (res && res.isEnded) {
            // 正常播放结束
            // end of normal playback
            console.log("onClose " + res.isEnded);
          } else {
            // 播放中途退出
            // Exit midway through playback
            console.log("onClose " + res.isEnded);
          }

          // 在此处理服务器回调逻辑
          // Process server callback logic here
        }, (err) => {
          // 广告加载错误
          // ad loading error
          console.log(err)
        })
      },
      showFullScreenVideoAd() {
        // 调用后会显示 loading 界面
        // After calling, the loading interface will be displayed
        AD.show({
          adpid: 1507000611, // HBuilder 基座测试广告位
          adType: "FullScreenVideo"
        }, (res) => {
          // 用户点击了【关闭广告】按钮
          // The user clicked the [Close Ad] button
          if (res && res.isEnded) {
            // 正常播放结束
            // end of normal playback
            console.log("onClose " + res.isEnded);
          } else {
            // 播放中途退出
            // Exit midway through playback
            console.log("onClose " + res.isEnded);
          }
        }, (err) => {
          // 广告加载错误
          // ad loading error
          console.log(err)
        })
      }
    }
  }
</script>

```

```js
// ad.js
const ADType = {
  RewardedVideo: "RewardedVideo",
  FullScreenVideo: "FullScreenVideo"
}

class AdHelper {

  constructor() {
    this._ads = {}
  }

  load(options, onload, onerror) {
    let ops = this._fixOldOptions(options)
    let {
      adpid
    } = ops

    if (!adpid || this.isBusy(adpid)) {
      return
    }

    this.get(ops).load(onload, onerror)
  }

  show(options, onsuccess, onfail) {
    let ops = this._fixOldOptions(options)
    let {
      adpid
    } = ops

    if (!adpid) {
      return
    }

    uni.showLoading({
      mask: true
    })

    var ad = this.get(ops)

    ad.load(() => {
      uni.hideLoading()
      ad.show((e) => {
        onsuccess && onsuccess(e)
      })
    }, (err) => {
      uni.hideLoading()
      onfail && onfail(err)
    })
  }

  isBusy(adpid) {
    return (this._ads[adpid] && this._ads[adpid].isLoading)
  }

  get(options) {
    const {
      adpid,
      singleton = true
    } = options
    if (singleton === false) {
      if (this._ads[adpid]) {
        this._ads[adpid].destroy()
        delete this._ads[adpid]
      }
    }
    delete options.singleton
    if (!this._ads[adpid]) {
      this._ads[adpid] = this._createAdInstance(options)
    }

    return this._ads[adpid]
  }

  _createAdInstance(options) {
    const adType = options.adType || ADType.RewardedVideo
    delete options.adType

    let ad = null;
    if (adType === ADType.RewardedVideo) {
      ad = new RewardedVideo(options)
    } else if (adType === ADType.FullScreenVideo) {
      ad = new FullScreenVideo(options)
    }

    return ad
  }

  _fixOldOptions(options) {
    return (typeof options === "string") ? {
      adpid: options
    } : options
  }
}

const EXPIRED_TIME = 1000 * 60 * 30
const ProviderType = {
  CSJ: 'csj',
  GDT: 'gdt'
}

const RETRY_COUNT = 1

class AdBase {
  constructor(adInstance, options = {}) {
    this._isLoad = false
    this._isLoading = false
    this._lastLoadTime = 0
    this._lastError = null
    this._retryCount = 0

    this._loadCallback = null
    this._closeCallback = null
    this._errorCallback = null

    const ad = this._ad = adInstance
    ad.onLoad((e) => {
      this._isLoading = false
      this._isLoad = true
      this._lastLoadTime = Date.now()

      this.onLoad()
    })
    ad.onClose((e) => {
      this._isLoad = false
      this.onClose(e)
    })
    ad.onVerify && ad.onVerify((e) => {
      // e.isValid
    })
    ad.onError(({
      code,
      message
    }) => {
      this._isLoading = false
      const data = {
        code: code,
        errMsg: message
      }

      if (code === -5008) {
        this._loadAd()
        return
      }

      if (this._retryCount < RETRY_COUNT) {
        this._retryCount += 1
        this._loadAd()
        return
      }

      this._lastError = data
      this.onError(data)
    })
  }

  get isExpired() {
    return (this._lastLoadTime !== 0 && (Math.abs(Date.now() - this._lastLoadTime) > EXPIRED_TIME))
  }

  get isLoading() {
    return this._isLoading
  }

  getProvider() {
    return this._ad.getProvider()
  }

  load(onload, onerror) {
    this._loadCallback = onload
    this._errorCallback = onerror

    if (this._isLoading) {
      return
    }

    if (this._isLoad) {
      this.onLoad()
      return
    }

    this._retryCount = 0

    this._loadAd()
  }

  show(onclose) {
    this._closeCallback = onclose

    if (this._isLoading || !this._isLoad) {
      return
    }

    if (this._lastError !== null) {
      this.onError(this._lastError)
      return
    }

    const provider = this.getProvider()
    if (provider === ProviderType.CSJ && this.isExpired) {
      this._loadAd()
      return
    }

    this._ad.show()
  }

  onLoad(e) {
    if (this._loadCallback != null) {
      this._loadCallback()
    }
  }

  onClose(e) {
    if (this._closeCallback != null) {
      this._closeCallback({
        isEnded: e.isEnded
      })
    }
  }

  onError(e) {
    if (this._errorCallback != null) {
      this._errorCallback(e)
    }
  }

  destroy() {
    this._ad.destroy()
  }

  _loadAd() {
    this._isLoad = false
    this._isLoading = true
    this._lastError = null
    this._ad.load()
  }
}

class RewardedVideo extends AdBase {
  constructor(options = {}) {
    super(plus.ad.createRewardedVideoAd(options), options)
  }
}

class FullScreenVideo extends AdBase {
  constructor(options = {}) {
    super(plus.ad.createFullScreenVideoAd(options), options)
  }
}

export default new AdHelper()

```


### 显示/隐藏
### show/hide
激励视频广告组件默认是隐藏的，在用户主动触发广告后，开发者需要调用 RewardedVideoAd.show() 进行显示。
The rewarded video ad component is hidden by default. After the user actively triggers the ad, the developer needs to call RewardedVideoAd.show() to display it.

```js
rewardedVideoAd.show()
```

只有在用户点击激励视频广告组件上的 关闭广告 按钮时，广告才会关闭。开发者不可控制激励视频广告组件的隐藏。
The ad will only close when the user clicks the Close Ad button on the rewarded video ad component. The developer has no control over the hiding of rewarded video ad components.

### 广告拉取成功与失败
### Ad pull success and failure

激励视频广告组件是自动拉取广告并进行更新的。在组件创建后会拉取一次广告，用户点击 关闭广告 后会去拉取下一条广告。
The rewarded video ad component automatically pulls the ad and updates it. After the component is created, one ad will be pulled, and the user will click on Close Ad to pull the next ad.

如果拉取成功，通过 `RewardedVideoAd.onLoad()` 注册的回调函数会执行，`RewardedVideoAd.show()` 返回的 Promise 也会是一个 resolved Promise。两者的回调函数中都没有参数传递。
If the pull is successful, the callback function registered by `RewardedVideoAd.onLoad()` will be executed, and the Promise returned by `RewardedVideoAd.show()` will also be a resolved Promise. There is no parameter passed in the callback function of both.

```js
rewardedVideoAd.onLoad(() => {
  console.log('激励视频 广告加载成功')
})

rewardedVideoAd.show()
.then(() => console.log('激励视频 广告显示'))
```

如果拉取失败，通过 `RewardedVideoAd.onError()` 注册的回调函数会执行，回调函数的参数是一个包含错误信息的对象。常见异常错误参考文档
If the pull fails, the callback function registered with `RewardedVideoAd.onError()` will be executed. The parameter of the callback function is an object containing the error information. Common exception error reference document

```js
rewardedVideoAd.onError(err => {
  console.log(err)
})
```

`RewardedVideoAd.show()` 返回的 Promise 也会是一个 rejected Promise。
The Promise returned by `RewardedVideoAd.show()` will also be a rejected Promise.

```js
rewardedVideoAd.show()
.catch(err => console.log(err))
```

### 拉取失败，重新拉取
### Pull failed, re-pull

如果组件的某次自动拉取失败，那么之后调用的 show() 将会被 reject。此时可以调用 `RewardedVideoAd.load()` 手动重新拉取广告。
If an automatic pull of the component fails, subsequent calls to show() will be rejected. At this point, you can call `RewardedVideoAd.load()` to manually re-pull the ad.

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
If the automatic pull of the component is successful, calling the `load()` method will directly return a resolved Promise without pulling the ad.

```js
rewardedVideoAd.load()
.then(() => rewardedVideoAd.show())
```

### 监听用户关闭广告
### Listen for users to close ads

![](https://web-assets.dcloud.net.cn/unidoc/zh/rewarded-video-close.png)

只有在用户点击激励视频广告组件上的 关闭广告 按钮时，广告才会关闭。这个事件可以通过 `RewardedVideoAd.onClose()` 监听。
The ad will only close when the user clicks the Close Ad button on the rewarded video ad component. This event can be listened to by `RewardedVideoAd.onClose()`.

`RewardedVideoAd.onClose()` 的回调函数会传入一个参数 res，res.isEnded 描述广告被关闭时的状态。
The callback function of `RewardedVideoAd.onClose()` will pass a parameter res, res.isEnded describes the state when the ad is closed.


|属性|类型|说明|
|property|type|description|
|:-:|:-:|:-:|
|isEnded|boolean|视频是否是在用户完整观看的情况下被关闭的，true 表示用户是在视频播放完以后关闭的视频，false 表示用户在视频播放过程中关闭了视频
|isEnded|boolean|Whether the video was closed when the user watched it completely, true means the user closed the video after the video finished playing, false means the user closed the video during the video playback


开发者需要根据 res.isEnded 判断是否视频是否播放结束，如果成功播放完毕则应该向用户发放奖励。
The developer needs to judge whether the video has finished playing according to res.isEnded , and should issue a reward to the user if it finishes playing successfully.

```js
rewardedVideoAd.onClose(res => {
    // 用户点击了【关闭广告】按钮
    // User clicked the [Close Ad] button
    if (res && res.isEnded) {
    // 正常播放结束
    // end of normal playback
	  // 这里应该联网给予用户激励。且这段代码应该做安全保护，详见下文中的“安全注意”
	  // This should be connected to the Internet to give users incentives. And this code should do security protection, see "Security Notice" below for details
    } else {
      // 播放中途退出
      // Exit midway through playback
    }
})
```


### 服务器回调@callback
### Server callback @callback

App平台 3.1.15+ 支持穿山甲/优量汇/快手
App platform 3.1.15+ supports Pangolin/Youlianghui/Kuishou

激励视频广告可以支持广告服务器到业务服务器的回调，用于业务系统判断是否提供奖励给观看广告的用户。配置服务器回调后，当用户成功看完广告时，广告服务器会访问配置的云函数，通知用户完成观看激励视频。
The rewarded video advertisement can support the callback from the advertisement server to the service server, which is used by the service system to determine whether to provide rewards to users who watch the advertisement. After the server callback is configured, when the user successfully finishes watching the ad, the ad server will access the configured cloud function and notify the user to finish watching the rewarded video.

相对来讲服务器回调将更加安全，可以依赖广告平台的反作弊机制来避免用户模拟观看广告完成的事件。
Relatively speaking, the server callback will be more secure, and you can rely on the anti-cheating mechanism of the advertising platform to prevent users from simulating the completion of watching the advertisement.


![激励视频回调](https://web-assets.dcloud.net.cn/unidoc/zh/uniAdCallback.png)
![Incentive Video Callback](https://web-assets.dcloud.net.cn/unidoc/zh/uniAdCallback.png)


如何使用
how to use
1. 申请激励视频广告位时开启服务器回调
1. Enable server callback when applying for a rewarded video ad slot
2. 创建激励视频广告时传入回调参数
2. Pass in callback parameters when creating a rewarded video ad


urlCallback示例
urlCallback example

```js
rewardedVideoAd = uni.createRewardedVideoAd({
  adpid: '',
  urlCallback: {
    userId: 'testuser',
    extra: 'testdata'
  }
});

rewardedVideoAd.onClose(e => {
})
```

### 服务器回调
### server callback

[服务器回调详细说明](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html#callback)
[Detailed description of server callback](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html#callback)


#### 安全注意
#### Safety Notice

[详细说明](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html#%E5%AE%89%E5%85%A8%E6%B3%A8%E6%84%8F)
[Detailed description](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html#%E5%AE%89%E5%85%A8%E6%B3%A8%E6%84% 8F)

#### 获取广告商名称
#### Get Advertiser Name

> HBuilderX 2.6.8+

#### 语法
#### grammar

`RewardedVideoAd.getProvider()`

#### 说明
#### illustrate

返回值 为 string 类型
The return value is of type string

|值|描述|
|value|description|
|:-:|:-:|
|csj|穿山甲|
|csj|Pangolin|
|gdt|腾讯优量汇（前称广点通）|
|gdt|Tencent Youlianghui (formerly known as Guangdiantong)|
|ks|快手|
|sigmob|Sigmob|


```js
var rewardedVideoAd = uni.createRewardedVideoAd(Options);
var provider = rewardedVideoAd.getProvider();
```


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
