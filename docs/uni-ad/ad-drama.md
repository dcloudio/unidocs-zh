## 短剧组件

### 简介

短剧剧集的集合页面，用户可以通过该页面点击进入短剧播放页


<img src="https://web-ext-storage.dcloud.net.cn/uniad/ad-drama.jpg" style="max-width: 300px; max-height: 50vh;" />

**平台差异说明**

|App|H5	|微信小程序	|支付宝小程序	|百度小程序	|抖音小程序、飞书小程序	|QQ小程序	|快应用	|360小程序	|快手小程序	|京东小程序	|
|:-:|:-:|:-:			|:-:				|:-:			|:-:								|:-:			|:-:		|:-:			|:-:			|:-:			|
|✓	|x	|x				|x					|x				|x									|x				|x			|x				|x				|x				|


**开通配置广告**

[开通广告步骤详情](https://uniapp.dcloud.net.cn/uni-ad/ad-open.html)

注意：标准基座不支持测试短剧功能。

### 组件

**`仅nvue支持` (Android-hx5.07支持)**

**属性列表**

| 属性名					| 类型									| 是否必填	| 说明																																		|
| ---						| ---									| ---			| ---																																		|
| `adpid`				| `String`						| 必填			| 广告位标识。																														|
| `lock`				| `String` / `Number`	| 可选			| 单次激励视频可解锁的剧集数。仅在值大于 `0` 时生效；默认值为 `1`，最大值为 `10`。	|
| `free`				| `String` / `Number`	| 可选			| 初始可免费观看的剧集数。仅在值大于 `0` 时生效；默认值为 `1`，最大值为 `20`。			|
| `url-callback`| `Object`						| 可选			| 服务端回调透传参数。当前实现仅识别 `userId`、`extra` 两个字段。								|
| `@load`				| EventHandle					| 可选			| 短剧广告页加载完成。																											|
| `@error`			| EventHandle					| 可选			| 加载失败或展示失败时触发。																									|
| `@click`			| EventHandle					| 可选			| 广告点击时触发。																													|
| `@close`			| EventHandle					| 可选			| 广告页关闭时触发。`isEnded` 为 `Boolean`，表示关闭前是否已经收到奖励完成回调。	|

## `url-callback` 对象结构

| 字段名		| 类型			| 说明															|
| ---			| ---			| ---															|
| `userId`| `String`| 用户标识，可用于广告回传或业务侧关联。	|
| `extra`	| `String`| 扩展透传字段。											|

**配置文件**

在穿山甲后台 内容输出->接入管理 找到需要接入内容SDK的应用，点击"下载SDK参数配置"，然后将SDK配置文件（例如 sdk_setting_file.json）拷贝到项目的 assets 文件夹下。

![](https://lf3-plat.pglstatp-toutiao.com/obj/union-platform/a30bc3001dff716fcf6876da15151ecf.png)

文件下载之后重命名为：`gm_SDK_Setting.json`，然后将文件放到项目根目录的`nativeResources->android->assets`目录下。

## 基本示例

```vue
<template>
  <ad-drama
    adpid="1612625051"
    :lock="2"
    :free="2"
    :url-callback="urlCallback"
    @load="onLoad"
    @error="onError"
    @close="onClose"
    @click="onClick"
  />
</template>

<script>
export default {
  data() {
    return {
      urlCallback: {
        userId: '11111',
        extra: 'biz-extra'
      }
    }
  },
  methods: {
    onLoad() {},
    onClick() {},
    onClose(e) {
      console.log('close', e.detail && e.detail.isEnded)
    },
    onError(e) {
      console.log('error', e.detail && e.detail.code, e.detail && e.detail.message)
    }
  }
}
</script>
```
