##### config.json
uts插件在iOS平台的其它原生配置文件，可以在其中配置依赖的系统库等信息  

```json
{
	"frameworks": [
		"可选，依赖的系统库(系统库有.framework和.tbd和.dylib类型)" 
	],
	"deploymentTarget": "9.0",   // 可选，插件支持的最低 iOS 版本  默认：9.0"
	"validArchitectures": [    // 可选，支持的 CPU 架构类型 默认：arm64
		"arm64"   
	],	
	"dependencies-pods": [ // 可选, 需要依赖的pod库, HBuilder X 3.8.5+ 版本支持
	{
		"name": "WechatOpenSDK",  
		"version": "2.0.2"     
	}]
}
```

**配置说明：**
- frameworks：插件需要依赖的系统库(系统库有 .framework 和 .tbd 和 .dylib 类型)，此节点为可选项。
- deploymentTarget：插件支持的最低 iOS 版本号，此节点为可选项，默认设置为 9.0.
	+ 插件支持的最低版本号应该设置为所有依赖的三方库（包含 framework .a pod ）中最低支持版本号中的最高的一个。
	+ pod 库的最低支持系统版本号可在 pod 库的 spec 文件或者 readme 中查看。
- validArchitectures：插件支持的 CPU 架构类型，此节点为可选项，默认值为：arm64。
- dependencies-pods：插件需要依赖的 pod 库,  HBuilder X 3.8.5+ 版本支持
	+ 把需要依赖的 pod 库相关信息配置在 dependencies-pods 节点下，需要明确指定每个 pod 库的名字 (name) 和版本号 (version)，可同时配置多个 pod 依赖库。目前不支持通过 podfile 文件直接设置，也不支持 podfile 文件中除了 name 和 version 之外的其他配置项。
	+ 为了保证插件的稳定性，避免因未指定 pod 库版本，执行 pod install 之后 pod 库最新版本造成的代码不兼容问题，需要明确指定 pod 库的具体版本。version 字段不可省略，不可为空字符串。 建议将 version 配置为 `"9.7.0"` 这种明确的数字版本号，不建议使用 `~>, >, >=, <, <=` 等带符号的配置。
	+ 使用 CocoaPods 官方默认地址 (source 'https://cdn.cocoapods.org/'), 暂不接受 (source '私有库url') 等存放在私有域名下pod库。
	+ 有关 CocoaPods 使用过程中常见的错误和处理方式[详见](https://uniapp.dcloud.net.cn/plugin/uts-ios-cocoapods.html)