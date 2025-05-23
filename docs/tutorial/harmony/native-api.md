# 调用鸿蒙原生API

> [uni-app鸿蒙化技术交流群](https://im.dcloud.net.cn/#/?joinGroup=668685db8185e1e6e7b7b15e)


## 使用uts调用鸿蒙原生API@nativeapi

uni-app在Android和iOS平台，支持uts插件和App原生语言插件。目前App原生语言插件已经停止维护。uts插件是主推的扩展方式。

鸿蒙系统有很多原生API，可以通过uts插件方式接入，被uni-app调用。

详细的教程见：
- [uts插件介绍](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-plugin.html)
- [uts插件鸿蒙开发专题](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-for-harmony.html)

这里以打开华为应用市场详情页为例

定义API名称为：openAppProduct

1. 右键 uni_modules 目录（没有则新建目录）点击 `新建uni_modules插件`

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720150080112op9li2g0i1o.png)

2. 插件名称为 `uni-openAppProduct`（注意，开发者自己创建时，不可以使用 `uni-` 开头，应以自己名字或昵称的缩写命令，如：`wq-openAppProduct`
3. 修改插件根目录的 `package.json` 中的 `uni_modules` 节点，新增如下配置，`arkts` 为 true 代表支持鸿蒙

**注意：下方的属性名中包含的 `uni` 请勿更改成自己的名字或昵称缩写，只能用 `uni`**

```js
{
	...其他属性
	
	"uni_modules": {
		"uni-ext-api": {
			"uni": {
				"openAppProduct": {
					"name": "openAppProduct",
					"app": {
						"js": false,
						"kotlin": false,
						"swift": false,
						"arkts": true
					}
				}
			}
		},
		
		...其他属性
	}
}
```

4. 编写插件根目录下的 `/utssdk/interface.uts` 文件，内容如下

````js
export interface Uni {
	/**
		* openAppProduct()
		* @description
		* 跳转应用市场详情页
		* @param {OpenAppProductOptions}  options
		* @return {void}
		* @example
		 ```typescript
			uni.openAppProduct({});
		 ```
		*/
	openAppProduct(options : OpenAppProductOptions) : void;
}

export type OpenAppProduct = (options : OpenAppProductOptions) => void;
export type OpenAppProductSuccess = {
	/**
	 * 错误信息
	 */
	errMsg : string
};
export type OpenAppProductSuccessCallback = (result : OpenAppProductSuccess) => void;
export type OpenAppProductFail = {
	/**
	 * 错误信息
	 */
	errMsg : string
};
export type OpenAppProductFailCallback = (result : OpenAppProductFail) => void;
export type OpenAppProductComplete = {
	/**
	 * 错误信息
	 */
	errMsg : string
};
export type OpenAppProductCompleteCallback = (result : OpenAppProductComplete) => void;
export type OpenAppProductOptions = {
	/**
	 * 接口调用成功的回调函数
	 * @defaultValue null
	 */
	success ?: OpenAppProductSuccessCallback | null,
	/**
	 * 接口调用失败的回调函数
	 * @defaultValue null
	 */
	fail ?: OpenAppProductFailCallback | null,
	/**
	 * 接口调用结束的回调函数（调用成功、失败都会执行）
	 * @defaultValue null
	 */
	complete ?: OpenAppProductCompleteCallback | null
};
````

5. 编写插件根目录下的 `/utssdk/app-harmony/index.uts` 文件（没有则新建），内容如下

```js
import {
	OpenAppProduct,
	OpenAppProductOptions,
	OpenAppProductSuccess,
	OpenAppProductFail,
	OpenAppProductComplete
} from '../interface.uts'

import bundleManager from '@ohos.bundle.bundleManager';

export {
	OpenAppProduct,
	OpenAppProductOptions,
	OpenAppProductSuccess,
	OpenAppProductFail,
	OpenAppProductComplete
}

import { productViewManager } from '@kit.StoreKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import type { common, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export function openAppProduct(options : OpenAppProductOptions) {
	let isSuccess = true;
	try {
		const request : Want = {
			parameters: {
				// 此处填入要加载的应用包名，例如： bundleName: "com.huawei.hmsapp.appgallery"
				bundleName: bundleManager.getBundleInfoForSelfSync(bundleManager.BundleFlag.GET_BUNDLE_INFO_DEFAULT).name // 加载当前包名
			}
		};
		productViewManager.loadProduct(getContext() as common.UIAbilityContext, request, {
			onError: (err : BusinessError) => {
				isSuccess = false;
				hilog.info(0, 'TAG', `loadProduct onError. code is ${err.code}, message is ${err.message}`);
				let result : OpenAppProductFail = {
					errMsg: err.message ?? ""
				};
				const completeResult : OpenAppProductComplete = {
					errMsg: err.message ?? ""
				}
				options?.fail?.(result);
				options?.complete?.(completeResult);
			}
		} as productViewManager.ProductViewCallback);
	} catch (err) {
		isSuccess = false;
		hilog.error(0, 'TAG', `loadProduct failed. code is ${err.code}, message is ${err.message}`);
		let result : OpenAppProductFail = {
			errMsg: err.message ?? ""
		};
		const completeResult : OpenAppProductComplete = {
			errMsg: err.message ?? ""
		}
		options?.fail?.(result);
		options?.complete?.(completeResult);
	}

	// productViewManager.loadProduct 没有成功回调，故以此方式判断是否成功执行
	if (isSuccess) {
		let result : OpenAppProductSuccess = {
			errMsg: "ok"
		};
		const completeResult : OpenAppProductComplete = {
			errMsg: "ok"
		}
		options?.success?.(result);
		options?.complete?.(completeResult);
	}
}
```

6. 编写演示页面，项目根目录下 `/pages/index/index.vue` 内容如下

**方式一（挂载到uni全局对象）**

```vue
<template>
	<view class="content">
		<button class="button" @click="openAppProductBtn">打开应用市场</button>
	</view>
</template>

<script lang="uts">
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {
			openAppProductBtn() {
				uni.openAppProduct({
					success: (res) => {
						console.log('success: ', JSON.stringify(res));
					},
					fail: (err) => {
						console.error('fail: ', JSON.stringify(err));
					},
					complete: (res) => {
						console.log('complete: ', JSON.stringify(res));
					}
				});
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	.button{
		width: 100%;
		margin: 10px;
	}
</style>
```

**方式二（使用import引入）**

```vue
<template>
	<view class="content">
		<button class="button" @click="openAppProductBtn">打开应用市场</button>
	</view>
</template>

<script lang="uts">
	import { openAppProduct } from "@/uni_modules/xxx-openAppProduct"
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {
			openAppProductBtn() {
				openAppProduct({
					success: (res : any) => {
						console.log('success: ', JSON.stringify(res));
					},
					fail: (err : any) => {
						console.error('fail: ', JSON.stringify(err));
					},
					complete: (res : any) => {
						console.log('complete: ', JSON.stringify(res));
					}
				});
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.button{
		width: 100%;
		margin: 10px;
	}
</style>
```

7. 点击 HBuilderX 上方【运行】菜单 - 运行到手机或模拟器 - 运行到鸿蒙

![](https://web-ext-storage.dcloud.net.cn/unicloud/ext-storage/52a7f8f1-ea77-4733-b5f2-d92d20ff87cf.png)

注意：如果是新安装的 HBuilderX，【3】这里可能会只显示【下载真机运行插件】，点击它安装好插件才会看到这些菜单项。

8. 鸿蒙 DevEco Studio 启动项目

## 使用uts调用鸿蒙第三方库的API@nativelibs

> 新增于HBuilderX 4.25

鸿蒙的包用法和npm包差不多，在鸿蒙项目里面用ohpm安装三方库后，在 `/uni_modules/uts插件名/utssdk/app-harmony/index.uts` 内即可直接 import

注意：只能在满足uts插件 `/uni_modules/*/utssdk/app-harmony/*.uts` 的文件下使用，无法直接在项目的pages中使用

具体使用流程：在项目的pages引入uts插件，uts插件内再引入鸿蒙第三方库调用

以调用 `@cashier_alipay/cashiersdk` 为例，代码如下

`page` 内代码

```js
// 导入要使用的插件
import { requestPayment } from "@/uni_modules/test-alipay";
requestPayment({
	orderInfo: "xxxx"
});
```

`/uni_modules/*/utssdk/app-harmony/*.uts` 内的代码

```js
import { Pay } from '@cashier_alipay/cashiersdk'
export interface RequestPaymentOptions {
    orderInfo: string
}
export function requestPayment(options : RequestPaymentOptions) {
		return new Pay().pay(options.orderInfo, true)
}
```

