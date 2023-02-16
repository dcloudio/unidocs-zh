## 开发指南

uni实人认证服务，分前端api和云端api，云端为uniCloud API。

如开发者的业务不在uniCloud上，需参考[云函数url化](../http.md)文档编写云函数提供http接口供外部访问，由uniCloud获取到认证结果后转交给开发者的非uniCloud服务器上。

首先在uniCloud服务空间新建一个云函数/云对象，用于处理实人认证业务。新建时在[云函数的扩展库](../cf-functions.md#extension)中配置uni-cloud-verify扩展库。

在uni-app客户端和uniCloud云函数中调用如下api，实现下图流程：

- 云函数获取实人认证实例：[uniCloud.getFacialRecognitionVerifyManager()](#get-frv-manager)
- 云函数提交姓名、身份证号以获取认证服务的certifyId：[frvManager.getCertifyId()](#get-certify-id)
- 云函数使用certifyId获取认证结果：[frvManager.getAuthResult()](#get-auth-result)
- 客户端调起sdk刷脸认证：[uni.startFacialRecognitionVerify()](#start-frv)

完整认证流程如下：

```mermaid
sequenceDiagram
  actor user as 用户端
  participant cf as 云函数/云对象
  participant service as 认证服务
  user->>+cf: 1.1 上传姓名、身份证号获取certifyId
  activate user
  cf->>+service: 2.1 提交姓名、身份证号获取certifyId
  service-->>-cf: 2.2 返回certifyId
  cf-->>-user: 1.2 返回certifyId
  user->>+service: 3.1 调用sdk进行刷脸认证
  service-->>-user: 3.2 返回认证结果
  user->>+cf: 4.1 请求更新认证结果
  cf->>+service: 5.1 请求认证结果
  service-->>-cf: 5. 返回认证结果
  cf-->>-user: 4.2 入库更新用户认证信息并返回认证成功
  deactivate user
```


- 如果您使用uni-id，那么uni-id-pages已经帮您内置好相关功能，前端页面和云端逻辑均已写好，安全、无需开发、拿来就用。[详见](待补充)
- 如果您的业务系统不在uniCloud上，那么需要在上述流程图中加一个原业务服务器，由云函数和原业务服务器进行token校验、传递认证结果。

### 接口防刷

由于实人认证涉及费用，为避免其他人盗刷您的余额，您应当谨慎编码，防止漏洞。一般可以通过一个用户每天限制实名次数来实现防刷，未登录用户禁止调用认证接口。如果有更高的安全需求可以使用uni安全网络，可以有效防止伪造客户端请求，[详见](../secure-network.md)

### 云函数接口

实人认证相关接口由uni-cloud-verify扩展库提供，调用`uniCloud.getFacialRecognitionVerifyManager()`需云函数/云对象中加载对应的扩展库。[参考](../cf-functions.md#extension)

![依赖扩展库](https://web-assets.dcloud.net.cn/unidoc/zh/rpa/unicloud-frv-edit-extension.jpg)

#### 获取实人认证实例@get-frv-manager

**接口形式**

```js
uniCloud.getFacialRecognitionVerifyManager(Object GetFacialRecognitionVerifyManagerParam)
```

**参数说明**

**Object GetFacialRecognitionVerifyManagerParam**

|属性			|类型		|必填	|默认值	|说明																																		|
|:-:			|:-:		|:-:	|:-:		|:-:																																		|
|requestId|String	|是		|-			|本次云函数请求的requestId，用于接口内部获取当前应用appId及客户端ip信息	|
|appId		|String	|否		|-			|用于在url化等无法获取客户端信息的场景下传入客户端appId									|

**返回值**

此接口返回实人认证实例对象

**示例代码**

- 云函数

```js
exports.main = async (event, context) => {
  const frvManager = uniCloud.getFacialRecognitionVerifyManager({
    requestId: context.requestId
  })
};
```

- 云对象

```js
'use strict';
module.exports = {
  _before() {
    // 本示例写在_before中，可以按需调整到某个方法中
    this.frvManager = uniCloud.getFacialRecognitionVerifyManager({
      requestId: this.getUniCloudRequestId()
    })
  }
}
```

#### 获取certifyId@get-certify-id

**接口形式**

```js
frvManager.getCertifyId(Object GetCertifyIdParam)
```

**参数说明**

**Object GetCertifyIdParam**

|属性			|类型		|必填	|默认值	|说明													|
|:-:			|:-:		|:-:	|:-:		|:-:													|
|realName	|String	|是		|-			|用户真实姓名									|
|idCard		|String	|是		|-			|用户身份证号									|
|metaInfo	|String	|是		|-			|客户端初始化时返回的metaInfo	|

**返回值**

|字段名		|类型		|必备	|说明																								|
|:-:			|:-:		|:-:	|:-:																								|
|certifyId|String	|是		|认证id，用于客户端调用认证接口及云函数获取认证结果	|

**示例代码**

云函数

```js
exports.main = async (event, context) => {
  const frvManager = uniCloud.getFacialRecognitionVerifyManager({
    requestId: context.requestId
  })
  const result = await frvManager.getCertifyId({
    realName: '张三',
    idCard: 'xxxxxx',
    metaInfo: '{"xx": "xx"}'
  })
  return result
};
```

云对象

```js
module.exports = {
  _before() { // _before是云对象中每个方法运行前都会执行的方法
    this.frvManager = uniCloud.getFacialRecognitionVerifyManager({
      requestId: this.getUniCloudRequestId()
    })
  },
  async getCertifyId() {
    const result = await this.frvManager.getCertifyId({
      realName: '张三',
      idCard: 'xxxxxx',
      metaInfo: '{"xx": "xx"}'
    })
    return result
  }
}
```

#### 获取认证结果@get-auth-result

**接口形式**

```js
frvManager.getAuthResult(Object GetAuthResultParam)
```

**参数说明**

**Object GetAuthResultParam**

|属性			|类型	|必填	|默认值	|说明																		|
|:-:			|:-:	|:-:	|:-:	|:-:																		|
|certifyId		|String	|是		|-		|认证id																		|

**返回值**

|字段名		|类型	|必备						|说明																|
|:-:		|:-:	|:-:						|:-:																|
|authState	|String	|是							|人脸检测状态。PROCESSING：初始化；SUCCESS：检测成功；FAIL：检测失败|
|score		|Number	|authState为SUCCESS时必备	|活体检测结果分数													|
|quality	|Number	|authState为SUCCESS时必备	|人脸图片质量分														|
|base64Photo|String	|authState为SUCCESS时必备	|认证图片的base64内容												|

**示例代码**

云函数

```js
exports.main = async (event, context) => {
  const frvManager = uniCloud.getFacialRecognitionVerifyManager({
    requestId: context.requestId
  })
  const result = await frvManager.getAuthResult({
    certifyId: 'xxxxxx'
  })
  return result
};
```

云对象

```js
module.exports = {
  _before() {
    this.frvManager = uniCloud.getFacialRecognitionVerifyManager({
      requestId: this.getUniCloudRequestId()
    })
  },
  async getAuthResult() {
    const result = await this.frvManager.getAuthResult({
      certifyId: 'xxxxxx'
    })
    return result
  }
}
```

#### 错误处理

可以通过try catch捕获接口抛出的错误，接口抛出的错误为标准的[uni错误对象](../../tutorial/err-spec.md)

具体错误码规范见：[错误码](#err-code)

**示例**

```js
module.exports = {
  _before() {
    this.frvManager = uniCloud.getFacialRecognitionVerifyManager({
      requestId: this.getUniCloudRequestId()
    })
  },
  async getAuthResult() {
    try {
      const result = await this.frvManager.getAuthResult({
        certifyId: 'xxxxxx'
      })
      return result
    } catch (e) {
      if(e.errCode === 50001 || e.errCode === 50002) {
        throw new Error('缺少参数或参数不正确')
      }
      throw e
    }
  }
}
```

### 客户端接口

#### 获取设备信息
调用刷脸前通过客户端先获取设备信息，调用[uni.getFacialRecognitionMetaInfo](https://uniapp.dcloud.net.cn/api/plugins/facialRecognitionVerify.html)
`const metaInfo = uni.getFacialRecognitionMetaInfo();`

#### 调起实人认证界面@start-frv

通过云函数获取certifyId后，在客户端调用[uni.startFacialRecognitionVerify](https://uniapp.dcloud.net.cn/api/plugins/facialRecognitionVerify.html)打开认证界面，通过刷脸操作获取认证结果。

`uni.startFacialRecognitionVerify(OBJECT)`

**注意**  
* HBuilderX3.7.2+新增支持  
* App端需在“App模块配置”中勾选“FacialRecognitionVerify(实人认证)”，参考[详情](https://uniapp.dcloud.net.cn/tutorial/app-facialRecognitionVerify.html)  
* App端使用蚂蚁金服人脸认证SDK，需在隐私政策的三方SDK中添加实人认证功能描述，参考[详情](https://ask.dcloud.net.cn/article/39484#FacialRecognitionVerify)
* App-Android平台要求Android5（API Leavel 21）及以上系统
* App-iOS平台要求iOS9及以上系统

**示例**  
```js
uni.startFacialRecognitionVerify({
    certifyId:"",
    progressBarColor: "#CC0000", //刷脸圈的颜色
    screenOrientation: "port", //认证界面UI朝向
    success:(e)=>{
        console.log(JSON.stringify(e))
    },
    fail:(e)=>{
        console.log(JSON.stringify(e))
    },
    complete:(e)=>{
        console.log(JSON.stringify(e))
    }
})
```

##### OBJECT参数说明  

| 参数						| 类型		| 是否必传	| 支持平台		| 描述															|
| ---						| ---		| ---		| ---			| ---															|
| certifyId					| String	| 是		| App			| 认证流水号，由服务端根据接入的业务模式调用对应的初始化接口获取		|
| progressBarColor			| String	| 否		| App			| 刷脸圈的颜色													|
| screenOrientation      | String  | 否    | App-Android  | 认证界面UI朝向。port 为竖屏，land 为横屏，默认为 port|
| success					| Function	| 否		| App			| 成功回调														|
| fail						| Function	| 否		| App			| 失败回调														|
| complete					| Function	| 否		| App			| 完成回调														|

注: 颜色字符串格式为“#RRGGBB”，RRGGBB为十六进制字符串，如红色("#FF0000")  

##### CALLBACK返回值

| 参数			| 描述										|
| ---			| ---										|
| errSubject	| 模块名称(uni-facialRecognitionVerify)		|
| errCode		| 错误码，详情见：[错误码](#err-code)			|
| errMsg		| 错误信息，详情见：[错误码](#err-code)		|
| cause			| SDK返回的原始数据 (certifyId不为空时返回)	|

##### cause  

| 参数		| 描述				|
| ---		| ---				|
| code		| SDK原始错误码		|
| message	| SDK原始错误信息		|

#### iOS平台自定义UI  
iOS平台不支持通过参数的方式修改刷脸页的提示文案，但可以通过自定义bundle文件的方式修改提示内容以及国际化信息

[APBToygerFacade.bundle文件下载](https://native-res.dcloud.net.cn/uni-app/file/APBToygerFacade.zip)

首先需要下载APBToygerFacade.bundle文件，可通过修改APBToygerFacade.bundle中的内容自定义多语言文案，如 zh-Hans.strings 代表中文文案，en.strings 代表英文文案，内容格式为 "APBToygerFacade:xxxA"="xxxB"，xxxA 为目标修改文案，xxxB 为修改后的文案，示例内容如下：
```
"APBToygerFacade:xxxA"="xxxB";
"APBToygerFacade:当前设备不支持刷脸"="当前设备不支持刷脸";
"APBToygerFacade:拿起手机眨眨眼"="拿起手机，眨眨眼";
"APBToygerFacade:再试一次"="再试一次";
"APBToygerFacade:无法启动相机"="无法打开相机";
"APBToygerFacade:网络不给力"="网络异常";
```

此处文案修改后需要完整测试回归 UI 以及文案变化影响，以免影响用户体验。修改后的bundle文件配到项目根目录的 nativeResources -> ios -> Resources 路径下后打包即可，详情参照[iOS原生应用配置文件和资源](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-ios.html) 

### 错误码@err-code

**云端错误码**

|错误码	|说明													|
|:-:	|:-:													|
|0		|请求成功												|
|50001	|缺少参数												|
|50002	|参数类型、取值不正确									|
|54003	|appId不存在											|
|54004	|服务空间不在白名单中									|
|54020	|请求记录不存在，certifyId无效							|
|54021	|云函数内缺少接口调用凭证，请联系DCloud处理				|
|54022	|服务空间不存在											|
|54100	|实人认证账号余额不足						|
|54101	|费用获取失败，请联系DCloud处理							|
|54102	|金额冻结失败，请联系DCloud处理											|
|55000	|服务器错误，请联系DCloud处理							|
|55001	|Api调用失败，实人认证服务商服务不可用，请联系DCloud处理|
|55023	|尚未开通实人认证										|
|60000	|服务不可用，请联系DCloud处理							|

**客户端错误码**

|错误码	|错误信息			|描述											|
|---	|---				|---											|
|0		|刷脸完成			|实际结果需要通过服务端查询接口					|
|10001	|certifyId不能为空	|参数certifyId为空								|
|10010	|刷脸异常			|刷脸异常,具体原因详见cause						|
|10011	|验证中断			|如用户主动退出、验证超时等,具体原因详见cause	|
|10012	|网络异常			|网络异常										|
|10013	|刷脸验证失败		|实际结果需要通过服务端查询结果					|
|10020	|设备设置时间异常	|设备设置时间异常，仅iOS返回					|


**注意**

- 为对抗攻击，实人认证SDK返回的错误原因比较模糊。

### 发行打包

实人认证内置在HBuilderX 3.7.1+ 的标准基座中，所以可真机运行。

但如果开发者需要打包或打自定义基座，需在manifest的app模块配置中，勾选实人认证（注意不是faceId）。

因蚂蚁SDK仅支持Android5+和iOS9，所以Android4、iOS8等低版本手机无法使用实人认证。
