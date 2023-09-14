### 全屏视频广告

全屏视频广告是一个原生组件，层级比普通组件高。全屏视频广告每次创建都会返回一个全新的实例，默认是隐藏的，需要调用 FullScreenVideoAd.show() 将其显示。

如何开通参考激励视频广告 [https://uniapp.dcloud.net.cn/api/a-d/rewarded-video](https://uniapp.dcloud.net.cn/api/a-d/rewarded-video)


**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√（3.4.8+）|x|x|x|x|x|x|x|x|x|x|

- app端的广告源由腾讯优量汇、头条穿山甲、快手等广告联盟提供，DCloud负责聚合
- 小程序端的广告由小程序平台提供

**开通配置广告**

[开通广告步骤详情](https://uniapp.dcloud.net.cn/uni-ad.html#start)


### 组件语法

`<ad-fullscreen-video adpid=""></ad-fullscreen-video>`

**属性说明**

|属性名														|类型								|默认值		|说明																									|平台差异	|
|:-																|:-									|:-				|:-																										|:-				|
|adpid														|String&#124;Number	|					|广告位id																							|					|
|preload													|Boolean						|true			|页面就绪后加载广告数据																|					|
|loadnext													|Boolean						|false		|自动加载下一条广告数据																|					|
|v-slot:default="{loading, error}"|										|					|作用域插槽可以获取组件内部广告加载状态和加载错误信息	|					|
|@load														|EventHandle				|加载事件	|																											|					|
|@close														|EventHandle				|关闭事件	|																											|					|
|@error														|EventHandle				|错误事件	|																											|					|

**方法说明**

|方法名	|说明					|
|:-			|:-						|
|load		|加载广告数据	|
|show		|显示广告			|


简单示例

```html
<template>
  <view>
    <ad-fullscreen-video adpid="1507000611" :loadnext="true" v-slot:default="{loading, error}">
      <button :disabled="loading" :loading="loading">显示广告</button>
      <view v-if="error">{{error}}</view>
    </ad-fullscreen-video>
  </view>
</template>
```


完整示例

```html
<template>
  <view class="content">
    <ad-fullscreen-video adpid="1507000611" :loadnext="true" v-slot:default="{loading, error}" @load="onadload" @close="onadclose" @error="onaderror">
      <button :disabled="loading" :loading="loading">显示广告</button>
      <view v-if="error">{{error}}</view>
    </ad-fullscreen-video>
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
      console.log("onerror: ", e.detail);
    }
  }
}
</script>
```

#### 组件API调用示例

除了使用组件的点击外，也可以使用API来启动全屏视频。

比如自定义一个点击位置，然后调用`<ad-fullscreen-video>`组件的方法来播放全屏视频。如下：

```html
<template>
  <view>
    <ad-fullscreen-video ref="adFullscreenVideo" adpid="1507000611" :preload="false" :loadnext="false" :disabled="true"
      v-slot:default="{loading, error}" @load="onadload" @close="onadclose" @error="onaderror">
      <view class="ad-error" v-if="error">{{error}}</view>
    </ad-fullscreen-video>
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
      this.$refs.adFullscreenVideo.load();
    },
    methods: {
      showAd() {
        if (this.isLoading) {
          return
        }
        this.$refs.adFullscreenVideo.show();
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
        //this.$refs.adFullscreenVideo.load();
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


### API语法

`uni.createFullScreenVideoAd(options)`

**参数说明**

options 为 object 类型，属性如下：

|属性	|类型		|必填	|说明					|
|:-:	|:-:		|:-:	|:-:					|
|adpid|string	|是		|广告位 adpid	|


#### 方法

加载全屏视频广告。

`Promise FullScreenVideoAd.load()`


显示全屏视频广告。

`Promise FullScreenVideoAd.show()`


销毁全屏视频广告实例。

`FullScreenVideoAd.destroy()`


监听全屏视频广告加载事件。

`FullScreenVideoAd.onLoad(function callback)`


监听全屏视频错误事件。

`FullScreenVideoAd.onError(function callback)`


监听全屏视频广告关闭事件。

`FullScreenVideoAd.onClose(function callback)`


示例代码

```html
<template>
  <view>
    <button :loading="loading" :disabled="loading" type="primary" @click="showFullScreenVideoAd">显示广告</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: '全屏视频广告',
        loading: false
      }
    },
    onReady() {
      // HBuilderX标准基座真机运行测试全屏视频广告位标识（adpid）为：1507000611
      // adpid: 1507000611 仅用于测试，发布时需要改为广告后台（https://uniad.dcloud.net.cn/）申请的 adpid
      // 广告后台申请的广告位(adpid)需要自定义基座/云打包/本地打包后生效
      this.adOption = {
        adpid: '1507000611'
      };
      // 创建广告实例
      this.createFullScreenVideoAd();
    },
    methods: {
      createFullScreenVideoAd() {
        var fullScreenVideoAd = this.fullScreenVideoAd = uni.createFullScreenVideoAd(this.adOption);
        fullScreenVideoAd.onLoad(() => {
          // 广告数据加载成功
          this.loading = false;
          console.log("onLoad");
        });
        fullScreenVideoAd.onClose((e) => {
          // 用户点击了关闭或返回键(仅Android有返回键)
          console.log("onClose " + e.isEnded);
        });
        fullScreenVideoAd.onError((err) => {
          console.log("onError", JSON.stringify(err));
          // 广告数据加载失败
          this.loading = false;
          uni.showToast({
            title: `${err.code} : ${err.errMsg}`
          })
        });
      },
      showFullScreenVideoAd() {
        // 调用 fullScreenVideoAd.show()，如果数据正在加载中不会显示广告，加载成功后才显示
        // 在数据没有加载成功时，需要防止用户频繁点击显示广告
        if (this.loading == true) {
          return
        }
        this.loading = true;
        this.fullScreenVideoAd.show().then(() => {
          this.loading = false;
        }).catch((err) => {
          console.log(err.message);
          this.loading = false;
          uni.showToast({
            title: `${err.code} : ${err.errMsg}`
          })
        });
      }
    },
    onUnload() {
      this.fullScreenVideoAd.destroy()
    }
  }
</script>
```


**错误码**

[错误码相关问题排查](https://uniapp.dcloud.net.cn/uni-ad/ad-error-code.html)
