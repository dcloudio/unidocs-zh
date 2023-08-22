# uni错误规范  

## 背景

小程序平台的错误信息，大多返回的格式是errCode和errMsg。但不同的小程序平台，返回的errCode有可能不一样。

在实际开发中，uni-app引擎、三方插件、开发者自己的业务代码，都会返回错误，但errCode也可能彼此冲突。

在统一的错误拦截和uni统计中，混乱的errCode会造成很多问题。

很多错误是由更底层的错误引发的，但只暴露最外层错误难以入手排查，需要暴露更底层的错误。

为了进一步规范错误信息格式，uni-app定义了更完善的错误规范：
1. 补充了errSubject，用于区隔不同平台或不同模块errCode相同的情况
2. 补充了cause，用于反馈错误的上一层来源。比如在app平台，uni.login API返回错误时，可能是底层的三方社交登录sdk报了错，此时会把三方sdk的错误追加到cause里

从2022-11-11起，DCloud新增的所有API将使用这套uni错误规范。同时我们推荐所有的插件作者也使用这套规范，在errSubject中声明自己的插件id。

## 定义

所有异步API，都应通过callback回调返回错误，在回调函数参数中包含错误信息，回调函数参数为UniError类型

完整错误类型定义如下：
```ts  
//源错误信息
interface SourceError {
    subject?: string,
    code?: number,
    message?: string,
    cause?: SourceError | UniAggregateError
}

//Uni聚合源错误信息
interface UniAggregateError extends SourceError {
	errors: Array<SourceError|UniAggregateError>
}

//uni错误信息
interface UniError {
	errSubject: string,
	errCode: number,
	errMsg: string,
	data?: Object,
	cause?: SourceError | AggregateError
}

//回调函数
function CallBack(err:UniError){
	//console.log(JSON.stringify(res));
}
```  

## SourceError  
用于保存引起错误的源错误，如app端三方SDK的错误信息，包括以下属性：
- subject  
	源错误（如app端三方SDK）模块名称，如uni-AD中的穿山甲广告SDK的模块名称为"csj"
- code  
	源错误（如app端三方SDK）的原始错误码  
- message  
	源错误（如app端三方SDK）的原始错误描述信息  
- cause  
	上级源错误，只有一个源错误时是SourceError，包含多个源错误时封装成AggregateError  

**注意**  
源错误可以根据业务情况扩展其它属性，如uni-AD中，可以添加slotId来表示聚合的三方广告位标识

## UniAggregateError  
用于保存多个源错误，如app端某个错误可能是由多个三方SDK的错误引起，可将多个源错误组成UniAggregateError对象。
包括以下属性：
- errors  
	数组，可包含SourceError或UniAggregateError对象  

## UniError  
Uni统一错误信息，用于统一各平台（端）错误信息  
- errSubject
	统一错误主题（模块）名称，字符串类型，存在多级模块时使用"::"分割，即"模块名称::二级模块名称"，详情参考[主题（模块）名称](#主题（模块）名称)
- errCode  
	统一错误码，数字类型，通常0表示成功，其它为错误码  
	对于已经实现的API，继续保留现有errCode规范（保留向下兼容）  
- errMsg  
	统一错误描述信息，字符串类型，应准确描述引起的错误原因  
- data  
	可选，错误时返回的数据，比如获取设备信息时，如部分数据获取成功，部分数据获取失败，此时触发错误回调，需将获取成功的数据放到data属性中  
- cause  
	可选，源错误信息，可以包含多个错误，详见SourceError


当源错误存在多个时，需要将SourceError封装到AggregateError对象中，按以下方式获取SourceError数组：
```ts
function CallBack(err:UniError){
	var cerrs:SourceError[] = err.cause.errors;
}
```


## errSubject（模块/主题）名称  

errSubject属性值表示返回错误的调用模块名称。

|模块名称|描述|
|----|----|
| uni-runtime | app端SDK运行环境错误 |
| uni-secure-network | 安全网络 |
| uni-ad | uni-AD |
| uni-push | UniPush |
| uni-login | OAuth（登录鉴权） |
| uni-verify | 一键登录 |


**注意**  
- uni内置模块errSubject属性值为“uni-模块英文名称”，如果英文名称由多个单词组成，单词键应该加-分割
- uni API的errSubject属性值
	+ uni.XXX API时  
	errSubject属性值为“uni-API名称”，如uni.getSystemInfo()，错误回调中errSubject属性值为“uni-getSystemInfo”  
	+ Object.XX API时  
	errSubject属性值为“uni-Object名称-API名称”，如SocketTask.onMessage()，错误回调中errSubject属性值为“uni-SocketTask-onMessage”  
- uni插件中返回错误时建议将“插件id”作为errSubject属性值，如果插件的API较多时可将每个API单独定义errSubject，建议使用errSubject属性值格式为“插件id-API名称”。  



