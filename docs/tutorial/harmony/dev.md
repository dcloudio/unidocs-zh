# uni-app 开发鸿蒙应用

> [uni-app鸿蒙化技术交流群](https://im.dcloud.net.cn/#/?joinGroup=668685db8185e1e6e7b7b15e)

## 开发环境要求@env

* DevEco-Studio 5.0.3.400 以上 [下载地址](https://developer.huawei.com/consumer/cn/deveco-developer-suite/enabling/kit?currentPage=1&pageSize=100)
* 鸿蒙系统版本 API 12 以上 （DevEco-Studio有内置鸿蒙模拟器）
* HBuilderX-alpha-4.22 以上

**Windows系统需要开启以下功能**

打开控制面板 - 程序与功能 - 开启以下功能

1. Hyper-V
2. Windows 虚拟机监控程序平台
3. 虚拟机平台

注意: 需要win10专业版或win11专业版才能开启以上功能，家庭版需先升级成专业版或企业版

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720085210915b1knhu7l3u8.png)

## 配置鸿蒙离线SDK（鸿蒙项目模板）@harmonysdk

1. 下载 uni-app 鸿蒙离线SDK template-1.3.1.tgz [下载地址](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/zip/template-1.3.1.tgz)

2. 解压 template-1.3.1.tgz 压缩包，将解压后的模板工程在 DevEco-Studio 中打开

3. 等待 Sync 结束，点击运行按钮可以将工程运行在真机或者模拟器中（如未配置签名信息可能需要先行配置）

### 启动鸿蒙模拟器@connectvirtually

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720085379828ap3pkhhfmig.png)

如果没有登录华为账号，此时需要先登录，登录成功后看到如下页面

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/17200854641084hsm583p5jo.png)

选择模拟器型号，选第一个即可

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/17200855617759sfquhr1j0o.png)

安装完模拟器后，点击启动按钮启动模拟器

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/17200856058101582lbghgf8.png)

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720085712493il2ep17ldg8.png)

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

## 配置 uni-app 工程@uniappproject

1. HBuilderX 新建一个空白的 uniapp 项目，选vue3

2. 在 manifest.json 文件中配置鸿蒙离线SDK路径

编辑 manifest.json 文件，新增如下配置：

```json
"app-harmony": {
  "projectPath": "鸿蒙离线SDK路径"
}
```

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/1719816197812rg4fsafg2io.png)

3. 编译 uni-app 到鸿蒙

点击 HBuilderX 上方【运行】菜单，运行到鸿蒙 DevEco Studio

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/17183338900070pjn2uj49t8.png)

如果没有出现此菜单，请确认你的 HBuilderX 版本是否是 4.22 及以上

4. 在 DevEco-Studio 重新编译或运行

先等待 HBuilderX 编译完成，然后打开 DevEco-Studio，点击运行

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720086018931faq60pigq9g.png)

## 使用uts调用鸿蒙原生API@nativeapi

这里以打开华为应用市场详情页为例

定于API名称为：uni.openAppProduct

1. 右键 uni_modules 目录（没有则新建目录）点击 `新建uni_modules插件`

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720150080112op9li2g0i1o.png)

2. 插件名称为 `uni-openAppProduct`（注意，开发者自己创建时，不可以使用 `uni-` 开头，应以自己名字或昵称的缩写命令，如：`wq-openAppProduct`
3. 修改插件根目录的 `package.json`，新增如下配置，arkts 为 true 代表支持鸿蒙
```js
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

```vue
<template>
	<view class="content">
		<button @click="openAppProduct">打开应用市场</button>
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
			openAppProduct() {
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
</style>
```

7. 点击 HBuilderX 上方【运行】菜单，运行到鸿蒙 DevEco Studio

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/17183338900070pjn2uj49t8.png)

8. 鸿蒙 DevEco Studio 启动项目

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

### 如何修改应用包名

打开 `AppScope\app.json5` 修改 `bundleName`

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/17202578113708uo26uaj0vg.png)

修改包名后，需要重启鸿蒙 DevEco Studio，并重新[配置签名](#signature)

### 如何修改应用名称

1. 打开 `AppScope\resources\base\element\string.json` 修改数组元素 name 值为 app_name 对应的 value 的值
2. 打开 `entry\src\main\resources\base\element\string.json` 修改数组元素 name 值为 EntryAbility_label 对应的 value 的值
3. 打开 `entry\src\main\resources\en_US\element\string.json` 修改数组元素 name 值为 EntryAbility_label 对应的 value 的值
4. 打开 `entry\src\main\resources\zh_CN\element\string.json` 修改数组元素 name 值为 EntryAbility_label 对应的 value 的值

### 如何修改应用图标

替换以下文件，注意文件不要改名

1. AppScope\resources\base\media\app_icon.png
2. entry\src\main\resources\base\media\foreground.png
3. entry\src\main\resources\base\media\startIcon.png



