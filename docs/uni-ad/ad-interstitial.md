### 插屏广告

插屏广告组件是由客户端原生的图片、文本、视频控件组成的；插屏广告与信息流或横幅广告相比展现尺寸更大，同样能够满足您对大量曝光和用户转化的需求。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/interstitial-ad.png)


**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√（3.4.8+）|x|√（3.4.8+）|x|x|x|x|x|x|x|x|


**开通配置广告**

[开通广告步骤详情](https://uniapp.dcloud.net.cn/uni-ad.html#start)


HBuilder 基座的测试广告位 `adpid` 为 `1111111113`

### 组件语法

`<ad-interstitial></ad-interstitial>`

**属性说明**

|属性名																			|类型								|默认值		|说明																									|平台差异	|
|:-																					|:-									|:-				|:-																										|:-				|
|adpid																			|String&#124;Number	|					|广告位id																							|					|
|preload																		|Boolean						|true			|页面就绪后加载广告数据																|					|
|loadnext																		|Boolean						|false		|自动加载下一条广告数据																|					|
|options																		|Object							|					|透传到作用域插槽																			|					|
|v-slot:default="{loading, error, options}"	|										|					|作用域插槽可以获取组件内部广告加载状态和加载错误信息	|					|
|@load																			|EventHandle				|加载事件	|微信小程序暂不支持																		|					|
|@close																			|EventHandle				|关闭事件	|微信小程序暂不支持																		|					|
|@error																			|EventHandle				|错误事件	|微信小程序暂不支持																		|					|

**方法说明**

|方法名|说明|
|:-|:-|
|load|加载广告数据|
|show|显示广告|


HBuilder 基座的测试广告位 `adpid` 为 `1111111113`，微信小程序暂不提供测试广告位


**简单示例**

```html
<template>
  <view>
    <ad-interstitial adpid="1111111113" :loadnext="true" v-slot:default="{loading, error}">
      <button :disabled="loading" :loading="loading">显示广告</button>
      <view v-if="error">{{error}}</view>
    </ad-interstitial>
  </view>
</template>
```


**完整示例**

```html
<template>
  <view class="content">
    <ad-interstitial adpid="1111111113" :loadnext="true" v-slot:default="{loading, error}" @load="onadload" @close="onadclose" @error="onaderror">
      <button :disabled="loading" :loading="loading">显示广告</button>
      <view v-if="error">{{error}}</view>
    </ad-interstitial>
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
		 console.log("onadclose",e);
    },
    onaderror(e) {
      // 广告加载失败
      console.log("onaderror: ", e.detail);
    }
  }
}
</script>
```

**组件API示例**

```html
<template>
  <view>
    <ad-interstitial ref="adInterstitial" adpid="1111111113" :loadnext="false" v-slot:default="{loading, error}" @load="onadload" @close="onadclose" @error="onaderror">
      <view v-if="error">{{error}}</view>
    </ad-interstitial>
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
  methods: {
    showAd() {
      this.isLoading = true;
      this.$refs.adInterstitial.show();
    },
    onadload(e) {
      this.isLoading = false;
      console.log('广告数据加载成功');
    },
    onadclose(e) {
      // 用户点击了关闭广告
      console.log("onadclose",e);
    },
    onaderror(e) {
      // 广告加载失败
      console.log("onaderror: ", e.detail);
    }
  }
}
</script>
```

### API语法

`uni.createInterstitialAd(options)`

**参数说明**

`options` 为 object 类型，属性如下：

|属性名		|类型		|必填	|描述			|最低支持版本								|
|:-:			|:-:		|:-:	|:-:			|:-:												|
|adpid		|string	|是		|广告位 id|App 3.1.10+								|
|adUnitId	|string	|是		|广告位 id|微信小程序2.6.0+, QQ0.1.26+|


#### 广告创建

插屏广告组件默认是隐藏的，因此可以提前创建，以提前初始化组件。开发者可以在页面的 onReady 事件回调中创建广告实例，并在该页面的生命周期内重复调用该广告实例。


#### 显示/隐藏

插屏广告组件默认是隐藏的，开发者需要调用 InterstitialAd.show() 进行显示。如果广告拉取失败或触发频率限制，InterstitialAd.show() 方法会返回一个rejected Promise，开发者可自行监听错误信息

```js
interstitialAd.show().catch((err) => {
  console.error(err)
})
```

用户可以主动关闭插屏广告。开发者不可控制插屏广告组件的隐藏。


#### 监听用户关闭广告

如果广告被关闭，通过 InterstitialAd.onClose() 注册的回调函数会执行，回调函数没有参数传递。

```js
interstitialAd.onClose(res => {
    console.log('插屏 广告关闭')
})
```


示例代码

```html
<template>
  <view>
    <view>
      <button :loading="loading" :disabled="loading" type="primary" @click="showInterstitialAd">显示广告</button>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: '插屏广告',
        loading: false
      }
    },
    onReady() {
      this.adOption = {
        adpid: '1111111113' // HBuilder基座的测试广告位
      };

      // 创建广告实例
      this.createInterstitialAd();
    },
    methods: {
      createInterstitialAd() {
        var interstitialAd = this.interstitialAd = uni.createInterstitialAd(this.adOption);
        interstitialAd.onLoad(() => {
          this.loading = false;
          console.log("插屏 广告加载成功");
        });
        interstitialAd.onClose(() => {
          // 用户点击了关闭或返回键(仅Android有返回键)
          console.log("插屏 广告关闭");
        });
        interstitialAd.onError((err) => {
          this.loading = false;
          console.log("插屏 广告加载失败");
        });

        // 广告实例创建成功后默认会执行一次 load，加载广告数据
        // 如果界面有 "显示广告" 按钮，需要先禁用掉，防止用户点击，等待广告数据加载成功后在放开
        this.loading = true;
      },
      showInterstitialAd() {
        // 调用 interstitialAd.show()，如果数据正在加载中不会显示广告，加载成功后才显示
        // 在数据没有加载成功时，需要防止用户频繁点击显示广告
        if (this.loading == true) {
          return
        }
        this.loading = true;
        this.interstitialAd.show().then(() => {
          this.loading = false;
        });
      }
    },
    onUnload() {
      // 页面关闭后销毁实例
      this.interstitialAd.destroy()
    }
  }
</script>
```


#### 方法

`Promise InterstitialAd.load()`

加载插屏广告。

`Promise InterstitialAd.show()`

显示插屏广告。

`InterstitialAd.destroy()`

销毁插屏广告实例。

`InterstitialAd.onLoad(function callback)`

监听插屏广告加载事件。

`InterstitialAd.offLoad(function callback)`

取消监听插屏广告加载事件

`InterstitialAd.onError(function callback)`

监听插屏错误事件。

`InterstitialAd.offError(function callback)`

取消监听插屏错误事件

`InterstitialAd.onClose(function callback)`

监听插屏广告关闭事件。

`InterstitialAd.offClose(function callback)`

取消监听插屏广告关闭事件


**注意**

- 在插屏广告展示过程中如果快速切换页面，可能会出现插屏广告展示在非调用页面的情况，如有需要请在页面切换完成后进行插屏广告展示。
- 微信小程序插屏广告触发频率限制：
  - 小程序启动一定时间内不允许展示插屏广告
  - 距离小程序插屏广告或者激励视频广告上次播放时间间隔不足，不允许展示插屏广告
  - 当前正在播放激励视频广告或者插屏广告，不允许再次展示插屏广告

**错误码**

[错误码相关问题排查](https://uniapp.dcloud.net.cn/uni-ad/ad-error-code.html)
