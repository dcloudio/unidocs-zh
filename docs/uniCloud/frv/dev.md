## 开发指南
## Development Guide

uni实人认证服务，分前端api和云端api，云端为uniCloud API。
uni real person authentication service is divided into front-end api and cloud api, and the cloud is uniCloud API.

如开发者的业务不在uniCloud上，需参考[云函数url化](../http.md)文档编写云函数提供http接口供外部访问，由uniCloud获取到认证结果后转交给开发者的非uniCloud服务器上。
If the developer's business is not on uniCloud, you need to refer to [Cloud function urlization](../http.md) document to write cloud functions to provide http interface for external access, and uniCloud will transfer the authentication results to the developer's non-uniCloud after obtaining the authentication results on the server.

首先在uniCloud服务空间新建一个云函数/云对象，用于处理实人认证业务。新建时在[云函数的扩展库](../cf-functions.md#extension)中配置uni-cloud-verify扩展库。

在uni-app客户端和uniCloud云函数中调用如下api，实现下图流程：
Call the following api in the uni-app client and uniCloud cloud function to realize the following process:

- 云函数获取实人认证实例：[uniCloud.getFacialRecognitionVerifyManager()](#get-frv-manager)
- The cloud function obtains a real person authentication instance: [uniCloud.getFacialRecognitionVerifyManager()](#get-frv-manager)
- 云函数提交姓名、身份证号以获取认证服务的certifyId：[frvManager.getCertifyId()](#get-certify-id)
- The cloud function submits the name and ID number to obtain the certifyId of the certification service: [frvManager.getCertifyId()](#get-certify-id)
- 云函数使用certifyId获取认证结果：[frvManager.getAuthResult()](#get-auth-result)
- The cloud function uses certifyId to obtain the authentication result: [frvManager.getAuthResult()](#get-auth-result)
- 客户端调起sdk刷脸认证：[uni.startFacialRecognitionVerify()](#start-frv)
- The client invokes the sdk face authentication: [uni.startFacialRecognitionVerify()](#start-frv)

完整认证流程如下：
The complete certification process is as follows:

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

由于实人认证涉及费用，为避免其他人盗刷您的余额，您应当谨慎编码，防止漏洞。
Since real person authentication involves fees, in order to prevent others from stealing your balance, you should code carefully to prevent loopholes.

使用uni安全网络，可以有效防止伪造客户端请求，[详见](../secure-network.md)
Using the uni secure network can effectively prevent forged client requests, [see details](../secure-network.md)

- 如果您使用uni-id，那么uni-id-pages已经帮您内置好相关功能，前端页面和云端逻辑均已写好，安全、无需开发、拿来就用。[详见](待补充)
- If you use uni-id, then uni-id-pages has built-in relevant functions for you, and the front-end page and cloud logic have been written, which is safe, no need to develop, and can be used immediately. [see details](to be added)
- 如果您的业务系统不在uniCloud上，那么需要在上述流程图中加一个原业务服务器，由云函数和原业务服务器进行token校验、传递认证结果。
- If your business system is not on uniCloud, you need to add an original business server to the above flowchart, and the cloud function and the original business server will perform token verification and transfer the authentication result.


### 云函数接口
### Cloud function interface

实人认证相关接口由uni-cloud-verify扩展库提供，调用`uniCloud.getFacialRecognitionVerifyManager()`需云函数/云对象中加载对应的扩展库。[参考](../cf-functions.md#extension)

#### 获取实人认证实例@get-frv-manager
#### Get real person authentication instance @get-frv-manager

**接口形式**
**Interface form**

```js
uniCloud.getFacialRecognitionVerifyManager(Object GetFacialRecognitionVerifyManagerParam)
```

**参数说明**
**Parameter Description**

|参数名		|类型	|必填	|默认值	|说明																	|
|Parameter name |Type |Required |Default value |Description |
|:-:		|:-:	|:-:	|:-:	|:-:																	|
|requestId	|String	|是		|-		|本次云函数请求的requestId，用于接口内部获取当前应用appId及客户端ip信息	|
| requestId | String |Yes |- |The requestId of this cloud function request is used to obtain the current application appId and client ip information inside the interface |

**返回值**
**return value**

此接口返回实人认证实例对象
This interface returns the real person authentication instance object

**示例代码**
**Example Code**

- 云函数
- cloud function

```js
exports.main = async (event, context) => {
  const frvManager = uniCloud.getFacialRecognitionVerifyManager({
    requestId: context.requestId
  })
};
```

- 云对象
- cloud object

```js
'use strict';
module.exports = {
  _before() {
    // 本示例写在_before中，可以按需调整到某个方法中
    // This example is written in _before and can be adjusted to a method as needed
    this.frvManager = uniCloud.getFacialRecognitionVerifyManager({
      requestId: this.getUniCloudRequestId()
    })
  }
}
```

#### 获取certifyId@get-certify-id
#### Get-certifyId@get-certify-id

**接口形式**
**Interface form**

```js
frvManager.getCertifyId(Object GetCertifyIdParam)
```

**参数说明**
**Parameter Description**

|参数名		|类型		|必填	|默认值	|说明					|
|Parameter name |Type |Required |Default value |Description |
|:-:			|:-:		|:-:	|:-:		|:-:					|
|realName	|String	|是		|-			|用户真实姓名	|
| realName | String | Yes |- | User real name |
|idCard		|String	|是		|-			|用户身份证号	|
| idCard | String | Yes |- |User ID number |

**返回值**
**return value**

|字段名		|类型		|必备	|说明																								|
|Field Name |Type |Required |Description |
|:-:			|:-:		|:-:	|:-:																								|
|certifyId|String	|是		|认证id，用于客户端调用认证接口及云函数获取认证结果	|
| certifyId| String |Yes |Certification id, used by the client to call the authentication interface and cloud function to obtain the authentication result |

**示例代码**
**Example Code**

云函数
cloud function

```js
exports.main = async (event, context) => {
  const frvManager = uniCloud.getFacialRecognitionVerifyManager({
    requestId: context.requestId
  })
  const result = await frvManager.getCertifyId({
    realName: '张三',
    idCard: 'xxxxxx'
  })
  return result
};
```

云对象
cloud object

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
      idCard: 'xxxxxx'
    })
    return result
  }
}
```

#### 获取认证结果@get-auth-result
#### Get the authentication result @get-auth-result

**接口形式**
**Interface form**

```js
frvManager.getAuthResult(Object GetAuthResultParam)
```

**参数说明**
**Parameter Description**

|参数名			|类型	|必填	|默认值	|说明																		|
|Parameter name |Type |Required |Default value |Description |
|:-:			|:-:	|:-:	|:-:	|:-:																		|
|certifyId		|String	|是		|-		|认证id																		|
| certifyId | String | yes | - | certify id |
|needAlivePhoto	|String	|否		|N		|是否获取认证照片，`Y_O` （原始图片）、`Y_M`（虚化，背景马赛克）、`N`（不返图）	|
| needAlivePhoto | String | No | N | Whether to obtain the authentication photo, `Y_O` (original image), `Y_M` (blurred, background mosaic), `N` (do not return image) |

**返回值**
**return value**

|字段名		|类型	|必备						|说明																|
|Field Name |Type |Required |Description |
|:-:		|:-:	|:-:						|:-:																|
|authState	|String	|是							|人脸检测状态。PROCESSING：初始化；SUCCESS：检测成功；FAIL：检测失败|
| authState | String | Yes | Face detection state. PROCESSING: Initialization; SUCCESS: Detection succeeded; FAIL: Detection failed|
|score		|Number	|authState为SUCCESS时必备	|活体检测结果分数													|
| score | Number | Required when authState is SUCCESS | Liveness detection result score |
|quality	|Number	|authState为SUCCESS时必备	|人脸图片质量分														|
| quality | Number | Required when authState is SUCCESS |Face image quality score |
|base64Photo|String	|authState为SUCCESS时必备	|认证图片的base64内容												|
| base64Photo| String | Mandatory when authState is SUCCESS | base64 content of authentication image |

**示例代码**
**Example Code**

云函数
cloud function

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
cloud object

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
#### Error Handling

可以通过try catch捕获接口抛出的错误，接口抛出的错误为标准的[uni错误对象](../../tutorial/err-spec.md)

具体错误码规范见：[错误码](#err-code)
For specific error code specifications, see: [Error Code](#err-code)

**示例**
**example**

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
### Client interface

#### 调起实人认证界面@start-frv
#### Call up the real person authentication interface @start-frv

```js
uni.startFacialRecognitionVerify({
    certifyId:"",
    progressBarColor: "#CC0000", //刷脸圈的颜色
    progressBarBackgroundColor: "#00CC00", //刷脸圈的背景颜色
    quitAlertTitle:"刷脸页退出对话框的标题",
    quitAlertMessage: "刷脸页退出对话框的内容",
    timeoutAlertTitle: "刷脸页超时对话框的标题",
    timeoutAlertMessage: "刷脸页超时对话框的内容",
    failAlertTitle: "刷脸页错误提示对话框的标题",
    failAlertMessage: "刷脸页错误提示对话框的内容",
    title: "刷脸框顶部文案",
    customBundleName: "iOS自定义UI资源文件名称(英文)",
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

**参数说明**
**Parameter Description**

| 参数						| 类型	| 是否必传	| 支持平台	|描述															|
| Parameter | Type | Required | Supported Platforms |Description |
|---						|---	|---		|---		|---															|
| certifyId					| String| 是		| 安卓、iOS	|认证流水号，由服务端根据接入的业务模式调用对应的初始化接口获取	|
| certifyId | String| Yes | Android, iOS | The certification serial number is obtained by the server calling the corresponding initialization interface according to the connected business model |
| progressBarColor			| String| 否		| 安卓、iOS	| 刷脸圈的颜色													|
| progressBarColor | String| No | Android, iOS | The color of the face circle |
| activityIndicatorColor	| String| 否		| iOS		| 网络等待菊花颜色												|
| activityIndicatorColor | String| No | iOS | Color of network waiting chrysanthemum |
| progressBarBackgroundColor| String| 否		| 安卓		| 刷脸圈的背景颜色												|
| progressBarBackgroundColor| String| No | Android | The background color of the face bar |
| quitAlertTitle			| String| 否		| 安卓		| 刷脸页退出对话框的标题										|
| quitAlertTitle | String| No | Android | The title of the exit dialog box on the swiping face page |
| quitAlertMessage			| String| 否		| 安卓		| 刷脸页退出对话框的内容										|
| quitAlertMessage | String| No | Android | The content of the exit dialog box by swiping the face page |
| timeoutAlertTitle			| String| 否		| 安卓		| 刷脸页超时对话框的标题										|
| timeoutAlertTitle | String| No | Android | The title of the timeout dialog box for face swiping pages |
| timeoutAlertMessage		| String| 否		| 安卓		| 刷脸页超时对话框的内容										|
| timeoutAlertMessage | String| No | Android | The content of the timeout dialog box of the facial recognition page |
| failAlertTitle			| String| 否		| 安卓		| 刷脸页错误提示对话框的标题									|
| failAlertTitle | String| No | Android | The title of the error prompt dialog box on the facial recognition page |
| failAlertMessage			| String| 否		| 安卓		| 刷脸页错误提示对话框的内容									|
| failAlertMessage | String| No | Android | The content of the error prompt dialog box on the facial recognition page |
| title						| String| 否		| 安卓		| 刷脸圈的颜色													|
| title | String| No | Android | The color of the face circle |
| success					| String| 否		| 安卓、iOS	| 成功回调														|
| success | String| No | Android, iOS | Success callback |
| fail						| String| 否		| 安卓、iOS	| 失败回调														|
| fail | String| No | Android, iOS | Failure callback |
| complete					| String| 否		| 安卓、iOS	| 完成回调														|
| complete | String| No | Android, iOS | Complete callback |


注: 颜色值为六位十六进制字符串("#FF0000")
Note: Color values are six-digit hexadecimal strings ("#FF0000")

**返回值**
**return value**

|参数				|类型		|必备	|描述																		|
|Parameter |Type |Required |Description |
|---				|---		|---	|---																		|
|errSubject	|String	|是		| 模块名称(uni-facialRecognitionVerify)	|
| errSubject | String | Yes | Module name (uni-facialRecognitionVerify) |
|errCode		|Number	|是		|错误码，详情见：[错误码](#err-code)		|
| errCode | Number | Yes | Error code, for details, see: [Error Code](#err-code) |
|errMsg			|String	|否		|错误信息，详情见：[错误码](#err-code)	|
| errMsg | String | No | Error message, see: [error code](#err-code) |
|cause			|Object	|否		|SDK返回的原始数据											|
| cause | Object |No | Original data returned by the SDK |

cause

|参数		|描述					|
|Parameters |Description |
|---		|---					|
|code		|原始错误码		|
| code |Original error code |
|message|原始错误信息	|
| message|Original error message |

### 错误码@err-code
### Error code @err-code

**云端错误码**
**Cloud error code**

|错误码	|说明													|
|Error code |Description |
|:-:	|:-:													|
|0		|请求成功												|
| 0 | Request succeeded |
|50001	|缺少参数												|
| 50001 | Missing parameter |
|50002	|参数类型、取值不正确									|
| 50002 | The parameter type and value are incorrect |
|54003	|appId不存在											|
| 54003 | appId does not exist |
|54004	|服务空间不在白名单中									|
| 54004 | The service space is not in the white list |
|54020	|请求记录不存在，certifyId无效							|
| 54020 | Request record does not exist, certifyId is invalid |
|54021	|云函数内缺少接口调用凭证，请联系DCloud处理				|
| 54021 | There is no interface call certificate in the cloud function, please contact DCloud for processing |
|54022	|服务空间不存在											|
| 54022 | Service space does not exist |
|55000	|服务器错误，请联系DCloud处理							|
| 55000 | Server error, please contact DCloud |
|55001	|Api调用失败，实人认证服务商服务不可用，请联系DCloud处理|
| 55001 | Api call failed, the real person authentication service provider service is unavailable, please contact DCloud for processing|
|60000	|服务不可用，请联系DCloud处理							|
| 60000 | The service is unavailable, please contact DCloud for processing |

**客户端错误码**
**Client error code**

|错误码	|错误信息			|描述											|
|Error code |Error message |Description |
|---	|---				|---											|
|0		|刷脸完成			|实际结果需要通过服务端查询接口					|
| 0 |Face swiping completed |Actual results need to query the interface through the server |
|10001	|certifyId不能为空	|参数certifyId为空								|
| 10001 | certifyId cannot be empty |The parameter certifyId is empty |
|10010	|刷脸异常			|刷脸异常,具体原因详见cause						|
| 10010 | Abnormal facial recognition | Abnormal facial recognition, see cause for details |
|10011	|验证中断			|如用户主动退出、验证超时等,具体原因详见cause	|
| 10011 | Verification Interrupted | For example, the user voluntarily logs out, verification timeout, etc., see cause for details |
|10012	|网络异常			|网络异常										|
| 10012 | Network exception | Network exception |
|10013	|刷脸验证失败		|实际结果需要通过服务端查询结果					|
| 10013 | Facial verification failed | The actual result needs to be checked by the server |
|10020	|设备设置时间异常	|设备设置时间异常，仅iOS返回					|
| 10020 | The device setting time is abnormal | The device setting time is abnormal, only returned by iOS |


**注意**
**Notice**

- 为对抗攻击，蚂蚁实人认证返回的错误原因比较模糊。
- In order to combat attacks, the cause of the error returned by Ant Real Person Authentication is relatively vague.

### 发行打包
### Release Packaging

实人认证内置在HBuilderX 3.7.1+ 的标准基座中，所以可真机运行。
Real person authentication is built into the standard base of HBuilderX 3.7.1+, so it can run on a real machine.

但如果开发者需要打包或打自定义基座，需在manifest的app模块配置中，勾选实人认证（注意不是faceId）。
However, if the developer needs to package or create a custom base, he needs to check the real person authentication (note that it is not faceId) in the app module configuration of the manifest.

因蚂蚁SDK仅支持Android5+和iOS10+，所以Android4、iOS9等低版本手机无法使用实人认证。
Because Ant SDK only supports Android5+ and iOS10+, mobile phones with lower versions such as Android4 and iOS9 cannot use real person authentication.
