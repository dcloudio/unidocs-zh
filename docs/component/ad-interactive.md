## 互动广告
## Interactive ads

## 简介
## Introduction

互动广告是DCloud联合三方服务商为开发者提供新的广告场景增值服务。开发者在App中放置入口，用户点击入口参与权益化、趣味性的活动。
Interactive advertising is a value-added service provided by DCloud and three-party service providers for developers to provide new advertising scenarios. The developer places the entrance in the App, and the user clicks the entrance to participate in the equity and interesting activities.


**平台差异说明**
**Platform Difference Description**

|App				|Web				|微信小程序	|支付宝小程序	|百度小程序	|字节跳动小程序	|QQ小程序	|快应用	|360小程序|快手小程序	|京东小程序	|
|:-:				|:-:				|:-:				|:-:					|:-:				|:-:						|:-:			|:-:		|:-:			|:-:				|:-:				|
|√(3.6.11+)	|√(3.6.11+)	|√(3.5.5+)	|x						|x					|x							|x				|x			|x				|x					|x					|


**开通配置广告**
**Activate configuration advertisement**

[开通广告步骤详情](https://uniapp.dcloud.net.cn/uni-ad.html#start)
[Details of the steps to activate advertising](https://uniapp.dcloud.net.cn/uni-ad.html#start)

注意
- 3.6.11+ 支持App平台和Web平台。开通方式不是单独开通，而是需要开启 App 基础广告，收益报表在基础广告里看。如未在[uniad后台](https://uniad.dcloud.net.cn/)开通，又在界面上使用了本组件，会显示DCloud公益广告。
- 在App平台和Web平台不需要设置广告位属性 `adpid`

## 语法
## grammar

`<ad-interactive></ad-interactive>`

**属性说明**
**Property description**

|属性名																	|类型				|说明																						|
|property name |type |description |
|:-																			|:-					|:-																							|
|adpid																	|String			|广告位id																				|
|adpid |String |Ad slot id |
|open-page-path													|String			|点击广告后打开的页面路径，[详见](#openpagepath)|
|open-page-path |String |The page path to open after clicking the ad, [see details](#openpagepath)|
|v-slot:default="{data, loading, error}"|						|作用域插槽，[详见](#vslot)											|
|v-slot:default="{data, loading, error}"| |Scope slot, [see details](#vslot) |
|@load																	|EventHandle|加载成功事件																		|
|@load |EventHandle|Load success event |
|@error																	|EventHandle|加载失败事件																		|
|@error |EventHandle|Load failure event |

### `v-slot:default="{data, loading, error}"` 属性说明@vslot
### `v-slot:default="{data, loading, error}"` Attribute description @vslot

|属性名	|类型		|说明												|
|property name |type |description |
|:-			|:-			|:-													|
|data		|Object	|广告位数据, {imgUrl }			|
|data |Object |Ad slot data, {imgUrl } |
|loading|Boolean|加载状态										|
|loading|Boolean|Loading Status|
|error	|Object	|加载错误, {errCode, errMsg}|
|error |Object |Load error, {errCode, errMsg}|


### 简单示例
### Simple example

```html
<template>
  <view>
    <!-- 用户点击组件后将打开广告页面，参见属性 open-page-path -->
    <!-- After the user clicks on the component, the advertisement page will be opened, see the property open-page-path -->
    <ad-interactive adpid="1000000001" v-slot:default="{data, loading, error}" open-page-path="/pages/ad-interactive-webview/ad-interactive-webview">
      <view v-if="data">
        <!-- 可以自定义此图片，组件提供了默认素材，通过 uni-ad 后台配置 -->
        <!-- This image can be customized, the component provides default material, configured through uni-ad background -->
        <image :src="data.imgUrl" style="width: 128px; height: 72px;"></image>
      </view>
    </ad-interactive>
  </view>
</template>
```

注意：需要添加依赖页面 [open-page-path](#openpagepath)
Note: need to add dependent pages [open-page-path](#openpagepath)

### 完整示例
### Complete example

```html
<template>
  <view class="content">
    <!-- 用户点击组件后将打开广告页面，参见属性 open-page-path -->
    <!-- After the user clicks on the component, the advertisement page will be opened, see the property open-page-path -->
    <ad-interactive adpid="1000000001" v-slot:default="{data, loading, error}" @load="onadload" @error="onaderror" open-page-path="/pages/ad-interactive-webview/ad-interactive-webview">
      <view v-if="loading">Loading</view>
      <view v-if="data">
        <!-- 可以自定义此图片，组件提供了默认素材，通过 uni-ad 后台配置 -->
        <!-- This image can be customized, the component provides default material, configured through uni-ad background -->
        <image :src="data.imgUrl" style="width: 128px; height: 72px;"></image>
      </view>
      <view v-if="error">{{error.errMsg}}</view>
    </ad-interactive>
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
    onaderror(e) {
      // 广告加载失败
      // ad failed to load
      console.log("onaderror", e.errCode, e.errMsg);
    }
  }
}
</script>
```


### open-page-path 页面代码@openpagepath
### open-page-path page code @openpagepath

组件的 `open-page-path` 属性所需页面，点击广告后将打开此页面
The page required by the component's `open-page-path` property, which will be opened when the ad is clicked

在项目的pages目录上右键，新增 `ad-interactive-webview.vue` 页面，并复制替换为下面代码
Right-click on the pages directory of the project, add the `ad-interactive-webview.vue` page, and copy and replace it with the following code

```html
<template>
  <web-view :src="url"></web-view>
</template>

<script>
  export default {
    data() {
      return {
        url: ''
      }
    },
    onLoad(options) {
      if (options && options.url) {
        this.url = decodeURIComponent(options.url);
      }
    }
  }
</script>
```


## 接入步骤
## Access steps

1. 开通并[申请](https://uniapp.dcloud.net.cn/uni-ad.html#start)广告位
3. 在需要展示广告的地方放入 `<ad-interactive></ad-interactive>` 组件代码，此广告可作为悬浮红包使用，设置组件样式 fixed 定位即可
3. Put the `<ad-interactive></ad-interactive>` component code where the ad needs to be displayed. This ad can be used as a floating red envelope. Set the component style to fixed positioning.
4. 在项目中新增 [ad-interactive-webview](#openpagepath) 页面
4. Add [ad-interactive-webview](#openpagepath) page to the project


运行到微信小程序时需要添加request合法域名和业务域名白名单
When running to the WeChat applet, you need to add the request legal domain name and business domain name whitelist

1. 登陆 [微信公众平台](https://mp.weixin.qq.com/)，左侧栏找到 `开发管理` 并点击 开发设置->服务器域名
1. Log in to [WeChat Public Platform](https://mp.weixin.qq.com/), find `Development Management` in the left column and click Development Settings->Server Domain Name
2. 新增 `request合法域名`: `https://wxac1.dcloud.net.cn`
3. 配置业务域名-> 下载校验文件
4. 在[uniAD后台](https://uniad.dcloud.net.cn/)，微信小程序广告管理-> 开通微信小程序互动广告 -> 上传校验文件，等待校验成功
5. 新增 `业务域名`: `https://engine.dcad01.com` 和 `https://xcx.dcad01.com`
