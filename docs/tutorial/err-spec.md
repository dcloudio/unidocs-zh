## 规范  
所有异步API，都应通过callback回调返回错误，在回调函数参数中包含错误信息，回调函数参数为JSON类型

完整定义如下：
```ts  
//源错误信息
interface SourceError {
    subject?: string,
    code?: number,
    message?: string,
    cause?: SourceError | AggregateError
}

//聚合源错误信息
interface AggregateError extends SourceError {
	errors: Array<SourceError|AggregateError>
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

### SourceError  
用于保存引起错误的源错误，如App端三方SDK的错误信息
- module
	源错误（如App端三方SDK）模块名称，如uni-AD中的穿山甲广告SDK的模块名称为"csj"
- code  
	源错误（如App端三方SDK）的原始错误码  
- message  
	源错误（如App端三方SDK）的原始错误描述信息  
- cause  
	上级源错误，只有一个源错误时是SourceError，包含多个源错误时封装成AggregateError  

**注意**  
源错误可以根据业务情况扩展其它属性，如uni-AD中，可以添加slotId来表示聚合的三方广告位标识

### UniError  
Uni统一错误信息，用于统一各平台（端）错误信息  
- errSubject
	统一错误主题（模块）名称，字符串类型，存在多级模块时使用"::"分割，即"模块名称::二级模块名称"
- errCode  
	统一错误码，数字类型  
	对于已经实现的API，继续保留现有errCode规范（保留向下兼容）  
	**新开发模块按以下规则**  
	错误码可以是正数，也可以是负数，推荐采用4或5位数字，模块内错误数字码唯一  
	数字范围划分：
	+ 50000以下是端的错误码  
	+ 50000以上是云的错误码  
	errCode的错误数字码实现原则：  
	+ 微信小程序规范中有定义的按其规范进行统一  
	+ 微信小程序规范没有定义，由DCloud定义errCode发布到uni-app网站  
	+ 产生冲突时，以先定义发布的规范为准  
- errMsg  
	统一错误描述信息，字符串类型，应准确描述引起的错误原因  
- data  
	可选，错误时返回的数据，比如获取设备信息时，如部分数据获取成功，部分数据获取失败，此时触发错误回调，需将获取成功的数据放到data属性中  
- cause  
	可选，源错误信息，可以包含多个错误，详见SourceError

### AggregateError  
W3C规范：[](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError)

当源错误存在多个时，需要将SourceError封装到AggregateError对象中，按以下方式获取SourceError数组：
```ts
function CallBack(err:UniError){
	var cerrs:SourceError[] = err.cause.errors;
}
```





## 平台兼容原则  
- 保留原平台（端）的错误回调函数参数的属性  
	+ 如app端原来错误信息的属性是code和message，则继续保留，统一实现时增加UniError中定义的属性  
	+ 如微信小程序端错误错误信息的属性是errCode和errMsg，则继续保留，统一实现时增加UniError中定义的属性  
- app端兼容处理  
	+ 已经实现的API如果不是通过回调返回错误，暂不调整，后续重新实现新API时按此规范处理  
	+ 已经实现的API如果是通过回调返回错误，则保留原有属性，后续按此规范补充errCode、errMsg、cause  
	+ 新开发的API，按此规范实现errCode、errMsg、cause  


## 主题（模块）名称  

|模块名称|描述|
|----|----|
| uni-runtime | SDK错误，如没有配置模块 |
| uni-secure-network | 安全网络 |
| uni-ad | uni-AD |
| uni-push | UniPush |
| uni-login | OAuth（登录鉴权） |
| uni-verify | 一键登录 |

**注意**  

- 内置模块（不开源）  
	uni-前缀加模块名称  
	+ 模块名称由多个完整单词组成应该加-分割
- API模块（开源）  
	+ uni.XX API 时：uni-前缀加API名称，如uni.getSystemInfo()，errSubject名称uni-getSystemInfo
	+ Object.XX API 时：uni-Object名称-前缀加API名称，如SocketTask.onMessage()，errSubject名称为uni-SocketTask-onMessage
- 公共模块或方法  
	封装API调用时需要重写errSubject  
- 插件  
	使用插件id作为errSubject名称  
	对于API较多的插件建议使用插件id-API名称作为errSubject名称  


