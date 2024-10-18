# 发行

> [uni-app鸿蒙化技术交流群](https://im.dcloud.net.cn/#/?joinGroup=668685db8185e1e6e7b7b15e)

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

最后还需参考鸿蒙官方文档发布鸿蒙应用到应用市场，详见[文档](https://developer.huawei.com/consumer/cn/doc/app/agc-help-releaseharmony-0000001933963166)

## 常见问题@question

### 如何修改应用名称、图标、权限等信息

参考鸿蒙官方文档：[应用/组件级配置](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/application-component-configuration-stage-V5)

### 应用图标资源规范

为保证图标在系统内显示的一致性，应用预置的图标资源应满足以下要素：

- 图标资源必须为分层资源（一张前景图和一张背景图）
- 图标资源尺寸必须为1024*1024px
- 图标资源必须为为正方形图像，系统会为对应场景自动生成遮罩裁切

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/b0a3c063-02c4-47f3-a23e-5d04ad5c4293.png)

### 启动图资源规范

启动页可以配置背景色代码（默认为#FFFFFF）和一张启动图，启动图没有尺寸要求，但建议为正方形logo图

