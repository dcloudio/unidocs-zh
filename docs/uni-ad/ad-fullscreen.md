# 微信小程序全屏广告
开发者可以使用 ad 组件创建全屏广告组件，全屏广告组件在创建后会自动拉取广告数据并显示。

**平台差异说明**
|App|H5	|微信小程序	|支付宝小程序	|百度小程序	|抖音小程序、飞书小程序	|QQ小程序	|快应用	|360小程序|快手小程序	|京东小程序	|
|:-:|:-:|:-:				|:-:					|:-:				|:-:										|:-:			|:-:		|:-:			|:-:				|:-:				|
|x	|x	|√ 3.5.1+	|x						|x					|x											|x				|x			|x				|x					|x					|

**开通配置广告**
[广告开通步骤](https://uniapp.dcloud.net.cn/uni-ad/ad-weixin-dcloud.html)

## 属性说明
|属性名	|类型				|默认值	|说明																							|
|:-:		|:-:				|:-:		|:-:																							|
|adpid	|String			|				|uni-ad 广告位id，在uni-ad官网申请广告位					|
|@load	|EventHandle|				|广告加载成功的回调																|
|@error	|EventHandle|				|广告加载失败的回调，event.detail = {errCode: xxx}|

## 广告事件监听
微信小程序全屏广告在创建后会自动拉取广告。开发者可以通过 ad 组件的 load 和 error 事件监听广告拉取成功或失败。

```html

<template>
  <view class="adContainer">
    <ad adpid="" @load="adLoad" @error="adError"></ad>
  </view>
</template>
复制代码
<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      adLoad() {
        console.log("adLoad");
      },
      adError(e) {
        console.log("adError",e);
      }
    }
  }
</script>

```

## 修改全屏广告样式 （HBuilderX-Alpha 4.87+ 支持）
全屏广告是通过组件显示内容，显示和关闭均需要开发者自行处理，与普通组件一样。

全屏广告的高度默认是 `100vh`，在一些特殊场景，可能需要修改全屏广告的样式，因为全屏广告的特殊性，目前只允许修改组件高度。且 `vue2`与`vue3`略有差异。

### 通过class样式覆盖
使用组件内置样式名 `uni-ad-custom` 可直接修改ad组件样式。

**注意：**
1. style 不允许设置`scoped`，会影响样式透传
2. 为了避免层级问题，请使用`!important`

```html
<template>
	<view class="content">
		<!-- ad 组件上不需要显示声明 class="uni-ad-custom" 类名 -->
		<ad adpid=""  @error="error" @load="load"></ad>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			load(res) {
				console.log('广告加载成功', res);
			},
			error(err) {
				console.log('广告错误', err);
			}
		}
	}
</script>

<style>
	/* 注意，style 中不允许设置 scoped ,样式需要使用 !important 设置最高权重，避免样式覆盖*/
	.uni-ad-custom {
		height: 50vh !important;
	}
</style>

```

### 通过style样式覆盖
**注意：仅 vue2 支持此方式**

通过 style 覆盖样式，可以在组件上写style属性，与普通元素和组件行为一致。相对 class 的方式，更直观，不需要设置`!important`提升权重。

```html
<template>
	<view class="content">
		<!-- ad 组件上直接通过style设置样式即可 ，为避免样式冲突，仅支持设置 height-->
		<ad adpid="" style="height:50vh;"  @error="error" @load="load"></ad>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			load(res) {
				console.log('广告加载成功', res);
			},
			error(err) {
				console.log('广告错误', err);
			}
		}
	}
</script>
```
