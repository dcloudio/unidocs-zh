# uni错误规范  
# uni error specification

## 背景
## background

小程序平台的错误信息，大多返回的格式是errCode和errMsg。但不同的小程序平台，返回的errCode有可能不一样。
Most of the error messages of the MiniApp platform are returned in the format of errCode and errMsg. However, different MiniApp platforms may return different errCode.

在实际开发中，uni-app引擎、三方插件、开发者自己的业务代码，都会返回错误，但errCode也可能彼此冲突。
In actual development, the uni-app engine, third-party plug-ins, and the developer's own business code will all return errors, but errCode may also conflict with each other.

在统一的错误拦截和uni统计中，混乱的errCode会造成很多问题。
In unified error interception and uni statistics, confusing errCode will cause many problems.

很多错误是由更底层的错误引发的，但只暴露最外层错误难以入手排查，需要暴露更底层的错误。
Many errors are caused by lower-level errors, but only the outermost errors are exposed, which is difficult to troubleshoot, and lower-level errors need to be exposed.

为了进一步规范错误信息格式，uni-app定义了更完善的错误规范：
In order to further standardize the error message format, uni-app defines a more complete error specification:
1. 补充了errSubject，用于区隔不同平台或不同模块errCode相同的情况
1. Added errSubject, which is used to distinguish between different platforms or different modules with the same errCode
2. 补充了cause，用于反馈错误的上一层来源。比如在app平台，uni.login API返回错误时，可能是底层的三方社交登录sdk报了错，此时会把三方sdk的错误追加到cause里
2. Added cause, which is used to feed back the source of the error. For example, on the app platform, when the uni.login API returns an error, it may be that the underlying third-party social login sdk reported an error, and the error of the third-party sdk will be added to the cause.

从2022-11-11起，DCloud新增的所有API将使用这套uni错误规范。同时我们推荐所有的插件作者也使用这套规范，在errSubject中声明自己的插件id。
From 2022-11-11, all new APIs added by DCloud will use this set of uni error specifications. At the same time, we recommend that all plugin authors also use this specification and declare their own plugin id in errSubject.

## 定义
## define

所有异步API，都应通过callback回调返回错误，在回调函数参数中包含错误信息，回调函数参数为UniError类型
All asynchronous APIs should return errors through the callback callback, and the error information should be included in the callback function parameters, and the callback function parameters should be of type UniError

完整错误类型定义如下：
The full error types are defined as follows:
```ts  
//源错误信息
// source error message
interface SourceError {
    subject?: string,
    code?: number,
    message?: string,
    cause?: SourceError | AggregateError
}

//聚合源错误信息
// aggregate source error message
interface AggregateError extends SourceError {
	errors: Array<SourceError|AggregateError>
}

//uni错误信息
//uni error message
interface UniError {
	errSubject: string,
	errCode: number,
	errMsg: string,
	data?: Object,
	cause?: SourceError | AggregateError
}

//回调函数
//Callback
function CallBack(err:UniError){
	//console.log(JSON.stringify(res));
}
```  

## SourceError  
用于保存引起错误的源错误，如app端三方SDK的错误信息，包括以下属性：
Used to save the source error that caused the error, such as the error information of the third-party SDK on the app side, including the following attributes:
- subject  
	源错误（如app端三方SDK）模块名称，如uni-AD中的穿山甲广告SDK的模块名称为"csj"
	Incorrect source (such as the third-party SDK on the app side) module name, such as the module name of the pangolin advertising SDK in uni-AD is "csj"
- code  
	源错误（如app端三方SDK）的原始错误码  
	The original error code of the source error (such as the third-party SDK on the app side)
- message  
	源错误（如app端三方SDK）的原始错误描述信息  
	The original error description information of the source error (such as the third-party SDK on the app side)
- cause  
	上级源错误，只有一个源错误时是SourceError，包含多个源错误时封装成AggregateError  
	Superior source error, if there is only one source error, it will be SourceError, if it contains multiple source errors, it will be encapsulated into AggregateError

**注意**  
**Notice**  
源错误可以根据业务情况扩展其它属性，如uni-AD中，可以添加slotId来表示聚合的三方广告位标识
The source error can be expanded to other attributes according to the business situation. For example, in uni-AD, slotId can be added to indicate the aggregated three-party advertising slot identifier

## AggregateError  
用于保存多个源错误，如app端某个错误可能是由多个三方SDK的错误引起，可将多个源错误组成AggregateError对象。
It is used to save multiple source errors. For example, an error on the app side may be caused by multiple third-party SDK errors, and multiple source errors can be composed into an AggregateError object.
包括以下属性：
Includes the following properties:
- errors  
	数组，可包含SourceError或AggregateError对象  
	Array, can contain SourceError or AggregateError objects

## UniError  
Uni统一错误信息，用于统一各平台（端）错误信息  
Uni unified error information, used to unify the error information of each platform (terminal)
- errSubject
	统一错误主题（模块）名称，字符串类型，存在多级模块时使用"::"分割，即"模块名称::二级模块名称"，详情参考[主题（模块）名称](#主题（模块）名称)
	Unified error theme (module) name, string type, use "::" when there are multi-level modules, that is, "module name::secondary module name", for details, refer to [theme (module) name](#%E4% B8%BB%E9%A2%98 (module) name)
- errCode  
	统一错误码，数字类型，通常0表示成功，其它为错误码  
	Unified error code, numeric type, usually 0 means success, others are error codes
	对于已经实现的API，继续保留现有errCode规范（保留向下兼容）  
	For the APIs that have been implemented, continue to retain the existing errCode specification (keep backward compatibility)
- errMsg  
	统一错误描述信息，字符串类型，应准确描述引起的错误原因  
	Unified error description information, string type, should accurately describe the cause of the error
- data  
	可选，错误时返回的数据，比如获取设备信息时，如部分数据获取成功，部分数据获取失败，此时触发错误回调，需将获取成功的数据放到data属性中  
	Optional, the data returned when an error occurs. For example, when obtaining device information, if part of the data is successfully obtained and part of the data fails to obtain, an error callback is triggered at this time, and the successfully obtained data needs to be placed in the data attribute
- cause  
	可选，源错误信息，可以包含多个错误，详见SourceError
	Optional, source error information, can contain multiple errors, see SourceError for details


当源错误存在多个时，需要将SourceError封装到AggregateError对象中，按以下方式获取SourceError数组：
When there are multiple source errors, SourceError needs to be encapsulated into an AggregateError object, and the SourceError array can be obtained as follows:
```ts
function CallBack(err:UniError){
	var cerrs:SourceError[] = err.cause.errors;
}
```


## errSubject（模块/主题）名称  
## errSubject (module/subject) name

errSubject属性值表示返回错误的调用模块名称。
The errSubject attribute value indicates the name of the calling module that returned the error.

|模块名称|描述|
|Module Name|Description|
|----|----|
| uni-runtime | app端SDK运行环境错误 |
| uni-runtime | App side SDK runtime environment error |
| uni-secure-network | 安全网络 |
| uni-ad | uni-AD |
| uni-push | UniPush |
| uni-login | OAuth（登录鉴权） |
| uni-login | OAuth (login authentication) |
| uni-verify | 一键登录 |
| uni-verify | One-key login |


**注意**  
**Notice**  
- uni内置模块errSubject属性值为“uni-模块英文名称”，如果英文名称由多个单词组成，单词键应该加-分割
- The errSubject attribute value of the uni built-in module is "uni-module English name". If the English name consists of multiple words, the word key should be separated by -
- uni API的errSubject属性值
- errSubject attribute value of uni API
	+ uni.XXX API时  
	+ uni.XXX API time
	errSubject属性值为“uni-API名称”，如uni.getSystemInfo()，错误回调中errSubject属性值为“uni-getSystemInfo”  
	The errSubject attribute value is "uni-API name", such as uni.getSystemInfo(), and the errSubject attribute value in the error callback is "uni-getSystemInfo"
	+ Object.XX API时  
	+ Object.XX API time
	errSubject属性值为“uni-Object名称-API名称”，如SocketTask.onMessage()，错误回调中errSubject属性值为“uni-SocketTask-onMessage”  
	The errSubject attribute value is "uni-Object name-API name", such as SocketTask.onMessage(), and the errSubject attribute value in the error callback is "uni-SocketTask-onMessage"
- uni插件中返回错误时建议将“插件id”作为errSubject属性值，如果插件的API较多时可将每个API单独定义errSubject，建议使用errSubject属性值格式为“插件id-API名称”。  
- When an error is returned in the uni plugin, it is recommended to use the "plugin id" as the errSubject attribute value. If there are many APIs in the plugin, each API can be defined separately. The errSubject attribute value format is "plugin id-API name".



