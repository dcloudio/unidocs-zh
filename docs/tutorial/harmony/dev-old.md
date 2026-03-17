# uni-app 开发鸿蒙应用

> 此文档适用于HBuilderX 4.27及之后的版本，4.26及之前的版本请移步：[开发鸿蒙应用](./dev-v1.md)

> [uni-app鸿蒙化技术交流群](https://im.dcloud.net.cn/#/?joinGroup=668685db8185e1e6e7b7b15e)

## 兼容性说明

1. 鸿蒙开发只支持Vue3，不支持Vue2、不支持plus、但支持nvue
2. nvue编译到鸿蒙后非原生渲染，而是与web一样渲染（自动注入一些默认样式进行兼容）
3. Vue3也支持选项式代码风格，参考[Vue2升Vue3指南](https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html )

## 开发环境要求@env

- DevEco-Studio 5.0.3.400 以上 [下载地址](https://developer.huawei.com/consumer/cn/download/deveco-studio?ha_source=Dcloud&ha_sourceId=89000448)
- 鸿蒙系统版本 API 12 以上 （DevEco-Studio有内置鸿蒙模拟器）
- HBuilderX-4.24+ [下载地址](https://www.dcloud.io/hbuilderx.html)

**Windows系统如使用模拟器则需要开启以下功能**

打开控制面板 - 程序与功能 - 开启以下功能

1. Hyper-V
2. Windows 虚拟机监控程序平台
3. 虚拟机平台

注意: 需要win10专业版或win11专业版才能开启以上功能，家庭版需先升级成专业版或企业版

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720085210915b1knhu7l3u8.png)

### 启动鸿蒙模拟器@connectvirtually

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720085379828ap3pkhhfmig.png)

如果没有登录华为账号，此时需要先登录，登录成功后看到如下页面

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/17200854641084hsm583p5jo.png)

选择模拟器型号，选第一个即可

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/17200855617759sfquhr1j0o.png)

安装完模拟器后，点击启动按钮启动模拟器

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/17200856058101582lbghgf8.png)

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720085712493il2ep17ldg8.png)

启动模拟器成功后，如果提示需要先签名，则进行[配置签名](#signature)

### 连接鸿蒙真机@connectmobile

**注意：真机需要鸿蒙系统版本 API 12 以上**

打开鸿蒙手机开发者模式，开启USB调试，通过USB线连接电脑，在此处选择你的手机名称，再启动项目即可，如果提示需要先签名，则进行[配置签名](#signature)

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720091392422r91cpejpp7g.png)

### 配置签名@signature

**注意：配置签名需要先启动模拟器或连接真机后才能配置**

点击 DevEco-Studio 上方菜单 File - Project Structure... 

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720087126462d9133uo0hmg.png)

在弹出的窗体中选择 Project - Signing Configs 并打钩 Automatically generate signature，即可自动生成签名

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/17200873385940vk5oj9ihk.png)

最后依次点击 `Apply` 和 `OK` 使签名生效

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720259265552t0m33hs637.png)

## 配置 HBuilderX settings.json@hbxsettings

打开HBuilderX，点击上方菜单 - 工具 - 设置，在出现的弹窗右侧窗体新增如下配置

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720092016399okjuod823f.png)

注意：值填你自己的 DevEco-Studio 启动路径

```js
"harmony.devTools.path" : "D:/Huawei/DevEco Studio"
```

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/171981598089431le57049d.png)

## 运行uni-app项目

1. HBuilderX 新建一个空白的 uniapp 项目，选vue3

2. 编译 uni-app 到鸿蒙

点击 HBuilderX 上方【运行】菜单 - 运行到手机或模拟器 - 运行到鸿蒙

![](https://web-ext-storage.dcloud.net.cn/unicloud/ext-storage/52a7f8f1-ea77-4733-b5f2-d92d20ff87cf.png)

3. 【首次运行】此时如果是第一次运行本项目会在项目根目录下生成harmony-configs目录用于存放鸿蒙配置文件

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/20240914151712.png)

4. 【首次运行】配置签名信息、包名到鸿蒙配置文件内

参考：[修改鸿蒙工程配置](https://uniapp.dcloud.net.cn/tutorial/run/run-app-harmony.html#configs)

5. 再次运行项目，选择目标设备

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/20240914152406.jpg)

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

## 发布鸿蒙应用@publish

### 生成.app文件

使用hbx（4.28以上），点击【发行】- 【App-Harmony-本地打包】

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/c42f9a21-d782-41e3-9342-bfa3265cbc54.png)

项目第一次发行时，会出现如下提示

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/d6bee0ad-97b2-4d11-ba47-9e6b07d3698b.png)

配置签名：在生成的 `harmony-configs` 目录找到文件 `harmony-configs/build-profile.json5` 修改里面的 `app.signingConfigs`，具体格式如下：

[查看数字签名证书的配置文档](https://uniapp.dcloud.net.cn/tutorial/run/run-app-harmony.html#singing)

```js
{
	"app": {
		"signingConfigs": [
			{
				"name": "default",
				"type": "HarmonyOS",
				"material": {
					"storePassword": "xxxxxx",
					"certpath": "D:/鸿蒙调试证书/xxx.cer",
					"keyAlias": "别名",
					"keyPassword": "xxxxxx",
					"profile": "D:/鸿蒙调试证书/xxx.p7b",
					"signAlg": "SHA256withECDSA",
					"storeFile": "D:/鸿蒙调试证书/.p12"
				}
			},
			{
				"name": "release",
				"type": "HarmonyOS",
				"material": {
					"storePassword": "xxxxxx",
					"certpath": "D:/鸿蒙发布证书/xxx.cer",
					"keyAlias": "别名",
					"keyPassword": "xxxxxx",
					"profile": "D:/鸿蒙发布证书/xxx.p7b",
					"signAlg": "SHA256withECDSA",
					"storeFile": "D:/鸿蒙发布证书/.p12"
				}
			}
		],
		"products": [
			{
				"name": "default",
				"signingConfig": "default",
				"compatibleSdkVersion": "5.0.0(12)",
				"runtimeOS": "HarmonyOS",
			},
			{
				"name": "release",
				"signingConfig": "release",
				"compatibleSdkVersion": "5.0.0(12)",
				"runtimeOS": "HarmonyOS",
			}
		],
		"buildModeSet": [
			{
				"name": "debug",
			},
			{
				"name": "release"
			}
		]
	},
	"modules": [
		{
			"name": "entry",
			"srcPath": "./entry",
			"targets": [
				{
					"name": "default",
					"applyToProducts": [
						"default",
						"release"
					]
				}
			]
		}
	]
}
```

配置完签名后，再次点击【发行】- 【App-Harmony-本地打包】即可得到已签名的 `.app` 安装包文件

最后参考鸿蒙官方文档发布鸿蒙应用，详见[文档](https://developer.huawei.com/consumer/cn/doc/app/agc-help-releaseharmony-0000001933963166?ha_source=Dcloud&ha_sourceId=89000448)

## 条件编译@ifndef

仅 APP-HARMONY 和 APP 可以条件编译命中鸿蒙平台，APP-PLUS 不能命中中鸿蒙平台

```js
// #ifdef APP-HARMONY
console.log("仅鸿蒙会编译")		
// #endif

// #ifndef APP-HARMONY
console.log("仅非鸿蒙会编译")								
// #endif

// #ifdef APP
console.log("安卓、苹果、鸿蒙会编译，小程序和Web不会编译")		
// #endif

// #ifndef APP
console.log("安卓、苹果、鸿蒙不会编译，小程序和Web会编译")		
// #endif

// #ifdef APP-PLUS
console.log("安卓、苹果会编译，鸿蒙不会编译，小程序和Web也不会编译")		
// #endif

// #ifndef APP-PLUS
console.log("安卓、苹果不会编译，鸿蒙会编译，小程序和Web也会编译")		
// #endif
```

## harmonyOS特性说明

### map组件及定位等api

> 新增于HBuilderX 4.26

map组件、getLocation、openLocation、chooseLocation依赖于地图厂商。目前仅支持腾讯地图，且此界面上显示的地图是通过webview加载的。由于目前页面使用的并非http协议，因此在申请腾讯地图key时需要将域名白名单留空以便地图能正确加载出来。后续在harmonyOS上页面会调整成以http方式加载，到时可以在腾讯地图控制台配置域名白名单。

在uni-app项目内配置腾讯地图key：

1. 以源码方式打开项目manifest.json
2. 在manifest.json内放入如下内容：

```json5
{
    // ...
    "app-plus" : {
        // ...
        "distribute" : {
            // ...
            "sdkConfigs" : {
                // ...
                "maps" : {
                    "qqmap" : {
                        "key" : "XXX-XXXX-XXXX"
                    }
                }
            }
        }
    },
    // ...
}
```

### webview组件通讯

在编译到鸿蒙时，plus对象不可用。如果要向webview发送消息，可以使用[WebviewContext的evalJs](https://doc.dcloud.net.cn/uni-app-x/api/create-webview-context.html)，注意此方案来源于uni-app-x，非uni-app-x仅鸿蒙支持。

示例如下：

```js
// uni-app页面
<template>
  <view class="content">
    <web-view id="web" @message="onMessage" src="/static/index.html"></web-view>
  </view>
</template>

<script>
  let context
  const native = {
    add: (a, b, callback) => {
      callback(undefined, a + b)
    }
  }

  function callback(id, err, data) {
    context.evalJs(
      `window.__bridge.callback(${id}, ${err ? JSON.stringify(err) : undefined}, ${data ? JSON.stringify(data) : undefined})`
    )
  }
  export default {
    data() {
      return {
        title: 'Hello'
      }
    },
    onLoad() {},
    onReady() {
      context = uni.createWebviewContext('web', this)
    },
    methods: {
      onMessage(event) {
        const dataList = event.detail.data
        dataList.forEach(({
          data
        } = {}) => {
          if (data && typeof data === 'object' && data.action === '__invoke') {
            const {
              method,
              args,
              id
            } = data
            if (!(method in native)) {
              return callback(id, {
                message: `method:${method} not found`
              })
            }
            try {
              native[method](...args, (err, data) => {
                callback(id, err, data)
              })
            } catch (e) {
              callback(id, e)
            }
          }
        })
      }
    }
  }
</script>

<style>
</style>
```

```html
<!-- webview内的html -->
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSBridge Demo</title>
  </head>
  <body>
    <button id="call-native-method">callNativeMethod</button>
    <script type="text/javascript" src="./uni.webview.1.5.6.js"></script>
    <script>
      let callbackId = 0
      const callbacks = {}

      window.__bridge = {
        invoke(method, args, callback) {
          const id = callbackId++
          callbacks[id] = callback
          uni.postMessage({
            data: {
              action: '__invoke',
              method,
              args,
              id
            }
          });
        },
        callback(callbackId, err, data) {
          const callback = callbacks[callbackId]
          if (!callback) {
            return
          }
          delete callbacks[callbackId]
          callback(err, data)
        }
      }
      document.querySelector('#call-native-method').addEventListener('click', () => {
        console.log(uni)
        window.__bridge.invoke('add', [1, 2], (err, data) => {
          console.log('invoke add callback:', err, data)
        })
      })
    </script>
  </body>
</html>
```

## 注意事项@tips

1. 移植已有的 uni-app 项目源码时，如有其他 npm 依赖，请自行安装
2. 现阶段条件编译仅 APP-HARMONY、APP 可以命中鸿蒙平台
3. 每次HBuilderX改动源码后，DevEco-Studio 内需要点重新运行才能生效
4. 如果模拟器白屏了，尝试重启软件 DevEco-Studio，再重启项目
5. 如果模拟器无法连接了，尝试重启电脑
6. 在HBuilderX里运行后，需要再去鸿蒙 DevEco Studio里运行
7. 在HBuilderX里修改代码后，需要去鸿蒙 DevEco Studio里重新运行
8. 如果有多个uni-app项目要编译到鸿蒙，那么鸿蒙离线sdk需要放置多份，每个uni-app的manifest中配置不同的离线sdk地址，否则会冲突，鸿蒙设备上目前没有基座概念


## 常见问题@question

### 如何修改应用名称、图标、权限等信息

参考鸿蒙官方文档：[应用/组件级配置](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-component-configuration-stage-V5?ha_source=Dcloud&ha_sourceId=89000448)

### 应用图标资源规范

为保证图标在系统内显示的一致性，应用预置的图标资源应满足以下要素：

- 图标资源必须为分层资源（一张前景图和一张背景图）
- 图标资源尺寸必须为1024*1024px
- 图标资源必须为为正方形图像，系统会为对应场景自动生成遮罩裁切

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/b0a3c063-02c4-47f3-a23e-5d04ad5c4293.png)

### 启动图资源规范

启动页可以配置背景色代码（默认为#FFFFFF）和一张启动图，启动图没有尺寸要求，但建议为正方形logo图

### 鸿蒙DevEco Studio如何开启热重载@q4

虽然鸿蒙官方文档提供了如何开启热重载，详见[文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hot-reload-0000001527628941-V5?ha_source=Dcloud&ha_sourceId=89000448)，但目前只能针对ets文件的修改进行热更，还无法针对uniapp打包的js文件进行热更。

### 如何查看console打印的日志@q5

目前编译到鸿蒙时，在uniapp页面通过console.log打印日志可以直接在 HBuilderX 查看

注意：在uniapp页面打印对象或数组时，需要 `JSON.stringify` ，如 `console.log("obj", JSON.stringify(obj))`

### 运行出现白屏或闪退怎么解决?@q6

首先尝试重新编译uniapp项目，并重启模拟器或真机，如果依然白屏或闪退，那可能是你项目中有用到了鸿蒙不支持的组件或者api，可以尝试pages.json进行代码二分法排查（删除一半页面如果正常了代表被删除的那一半页面中有造成白屏或闪退的页面）

### 模拟器已启动，但无法连接?@q7

确保[签名](#signature)没有问题的情况下，尝试重启电脑

### 报启动鸿蒙失败，请手动启动鸿蒙@q8

**Windows系统**

1. 确保路径是正确的

Windows系统快速复制路径方法

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1721024978448hkblu60vadg.png)

注意：复制后的 `\` 要改成 `/`

2. 如果步骤1操作完还是不行，请尝试

原路径后面添加 `/bin/devecostudio64.exe`，然后重启 HBuilderX

**Mac系统**

1. 确保路径是正确的

Mac系统快速复制路径方法

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/ee1f4941-3736-4df8-a35c-bb3929fb124f.png)

2. 如果步骤1操作完还是不行，请尝试

原路径后面添加 `/Contents/MacOS/devecostudio`，然后重启 HBuilderX

### 通过 app-plus:titleNView 配置页面右上角按钮未生效@q9

当前导航栏未支持，可以尝试关闭原生导航栏，使用自己的自定义导航栏组件实现。

### 鸿蒙支持uniPush推送吗?@q10

暂不支持
 
### release模式进入使用了组合式api的页面报错`Cannot read property route of undefined`@q11

此问题由于arkTs的混淆Bug引发，即使进入到一个空的组合式api页面也会出现这个报错，已反馈给鸿蒙团队处理。

临时解决方案：在鸿蒙项目`entry/obfuscation-rules.txt`文件中增加一行`-disable-obfuscation`来禁用混淆。

### 1.3.7及以上模板在部分设备的模拟器上无法运行，报错`Install Failed: error: failed to install bundle`@q12

此问题是由于支付宝sdk兼容性造成的，目前只能删除支付宝sdk依赖，如下图所示操作，删除后需要点右上角的 Sync Now，并等待 Sync 结束

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/2020d045-c7d8-4b3a-ba21-d4f301900d00.png)

删除后还需要点右上角的 Sync Now，并等待 Sync 结束

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/908ef551-8605-4add-b68f-42aa497109b7.png)
