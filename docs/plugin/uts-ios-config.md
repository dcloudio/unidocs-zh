##### config.json
uts插件在iOS平台的其它原生配置文件，可以在其中配置依赖的系统库等信息  

```json
{
	"frameworks": [
		"可选，依赖的系统库(系统库有.framework和.tbd和.dylib类型)" 
	],
	"deploymentTarget": "9.0",   // 可选，插件支持的最低 iOS 版本  默认：9.0"
	"validArchitectures": [    // 可选，支持的 CPU 架构类型 默认：armv7、arm64
		"arm64"    // 支持多个值，可取值："arm64", "armv7"
	],	
	"dependencies-pods": [{ // 可选, 需要依赖的pod库
		"name": "AMap3DMap",
		"version": "9.7.0"
	}, {
		"name": "PayPal",
		"version": "0.0.1"
	}, {
		"name": "WechatOpenSDK",  
		"version": "2.0.2"     
	}]
}
```

**配置说明：**

+ 1 把需要依赖的 pod 库相关信息配置在 dependencies-pods 节点下，需要明确指定每个 pod 库的名字 (name) 和版本号 (version)，可同时配置多个 pod 依赖库。目前不支持通过 podfile 文件直接设置，也不支持 podfile 文件中除了 name 和 version 之外的其他配置项。
+ 2 为了保证插件的稳定性，避免因未指定 pod 库版本，执行 pod install 之后 pod 库最新版本造成的代码不兼容问题，需要明确指定 pod 库的具体版本。version 字段不可省略，不可为空字符串。 建议将 version 配置为 `"9.7.0"` 这种明确的数字版本号，不建议使用 `~>, >, >=, <, <=` 等带符号的配置。
+ 3 使用 CocoaPods 官方默认地址 (source 'https://github.com/CocoaPods/Specs.git'), 不接受 (source '私有库url') 等存放在私有域名下pod库。
+ 4 deploymentTarget 配置说明：每个 pod 库都会在 spec 文件或者 readme 中指明其所支持的最低系统版本号，为了保证每个 pod 库可用，需要将 deploymentTarget 配置为 pod 库中最低支持版本号中的最高的一个。如果不配置，将默认设置为 9.0。

- 有关CocoaPods使用过程中常见的错误和处理方式[详见](https://uniapp.dcloud.net.cn/plugin/uts-ios-cocoapods.html)s