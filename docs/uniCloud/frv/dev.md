## 开发指南
## Development Guide

uni实人认证服务，分前端api和云端api，云端为uniCloud API。

如开发者的业务不在uniCloud上，需参考[云函数url化](../http.md)文档编写云函数提供http接口供外部访问，由uniCloud获取到认证结果后转交给开发者的非uniCloud服务器上。

完整认证流程如下：

```mermaid
sequenceDiagram
  actor user as 用户端
  participant cf as 云函数
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
  cf-->>-user: 4.2 更新用户认证信息返回认证成功
  deactivate user
```

上述流程中涉及如下接口：
The above process involves the following interfaces:

- 云函数获取实人认证实例：[uniCloud.getFacialRecognitionVerifyManager()](#get-frv-manager)
- 云函数提交姓名、身份证号以获取认证服务的certifyId：[frvManager.getCertifyId()](#get-certify-id)
- 云函数使用certifyId获取认证结果：[frvManager.getAuthResult()](#get-auth-result)
- The cloud function uses certifyId to obtain the authentication result: [frvManager.getAuthResult()](#get-auth-result)
- 客户端调起sdk刷脸认证：[uni.startFacialRecognitionVerify()](#start-frv)
- The client invokes the sdk face authentication: [uni.startFacialRecognitionVerify()](#start-frv)

### 云函数接口
### Cloud function interface

实人认证相关接口由uni-cloud-verify扩展库提供，如何使用扩展库请参考：[云函数内使用扩展库](cf-functions.md#extension)
The interface related to real person authentication is provided by the uni-cloud-verify extension library. For how to use the extension library, please refer to: [Using the extension library in cloud functions](cf-functions.md#extension)

#### 获取实人认证实例@get-frv-manager
#### Get real person authentication instance @get-frv-manager

**接口形式**
**Interface form**

```js
uniCloud.getFacialRecognitionVerifyManager(Object GetFacialRecognitionVerifyManagerParam)
```

**参数说明**
**Parameter Description**

|参数名		|类型		|必填	|默认值	|说明																																		|
|Parameter name |Type |Required |Default value |Description |
|:-:			|:-:		|:-:	|:-:		|:-:																																		|
|requestId|String	|是		|-			|本次云函数请求的requestId，用于接口内部获取当前应用appId及客户端ip信息	|
| requestId| String |Yes |- |The requestId of this cloud function request is used to obtain the current application appId and client ip information inside the interface |

**返回值**
**return value**

此接口返回实人认证实例
This interface returns the real person authentication instance

**示例代码**
**Example Code**

云函数
cloud function

```js
exports.main = async (event, context) => {
  const frvManager = uniCloud.getFacialRecognitionVerifyManager({
    requestId: context.requestId
  })
};
```

云对象
cloud object

```js
'use strict';
module.exports = {
  _before() {
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
  _before() {
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

|参数名					|类型		|必填	|默认值	|说明																																			|
|Parameter name |Type |Required |Default value |Description |
|:-:						|:-:		|:-:	|:-:		|:-:																																			|
|certifyId			|String	|是		|-			|认证id																																		|
| certifyId | String | yes | - | certify id |
|needAlivePhoto	|String	|否		|N			|是否获取认证照片，Y_O （原始图片）、Y_M（虚化，背景马赛克）、N（不返图）	|
| needAlivePhoto | String | No | N | Whether to obtain an authentication photo, Y_O (original image), Y_M (blurred, background mosaic), N (no image returned) |

**返回值**
**return value**

|字段名			|类型		|必备											|说明																																|
|Field Name |Type |Required |Description |
|:-:				|:-:		|:-:											|:-:																																|
|authState	|String	|是												|人脸检测状态。PROCESSING：初始化；SUCCESS：检测成功；FAIL：检测失败|
| authState | String | Yes | Face detection state. PROCESSING: Initialization; SUCCESS: Detection succeeded; FAIL: Detection failed|
|score			|Number	|authState为SUCCESS时必备	|活体检测结果分数																										|
| score | Number | Required when authState is SUCCESS | Liveness detection result score |
|quality		|Number	|authState为SUCCESS时必备	|人脸图片质量分																											|
| quality | Number | Required when authState is SUCCESS |Face image quality score |
|base64Photo|String	|authState为SUCCESS时必备	|认证图片的base64内容																								|
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

可以通过try catch捕获接口抛出的错误，接口抛出的错误为标准的[uni错误对象](../tutorial/err-spec.md)
The error thrown by the interface can be caught by try catch, and the error thrown by the interface is the standard [uni error object](../tutorial/err-spec.md)

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

| 参数											| 类型	| 是否必传| 支持平台	|描述																														|
| Parameter | Type | Required | Supported Platforms |Description |
|---												|---		|---			|---				|---																														|
| certifyId									| String| 是			| 安卓、iOS	|认证流水号，由服务端根据接入的业务模式调用对应的初始化接口获取	|
| certifyId | String| Yes | Android, iOS | The certification serial number is obtained by the server calling the corresponding initialization interface according to the connected business model |
| progressBarColor					| String| 否			| 安卓、iOS	| 刷脸圈的颜色																									|
| progressBarColor | String| No | Android, iOS | The color of the face circle |
| activityIndicatorColor		| String| 否			| iOS				| 网络等待菊花颜色																							|
| activityIndicatorColor | String| No | iOS | Color of network waiting chrysanthemum |
| progressBarBackgroundColor| String| 否			| 安卓			| 刷脸圈的背景颜色																							|
| progressBarBackgroundColor| String| No | Android | The background color of the face bar |
| quitAlertTitle						| String| 否			| 安卓			| 刷脸页退出对话框的标题																				|
| quitAlertTitle | String| No | Android | The title of the exit dialog box on the swiping face page |
| quitAlertMessage					| String| 否			| 安卓			| 刷脸页退出对话框的内容																				|
| quitAlertMessage | String| No | Android | The content of the exit dialog box by swiping the face page |
| timeoutAlertTitle					| String| 否			| 安卓			| 刷脸页超时对话框的标题																				|
| timeoutAlertTitle | String| No | Android | The title of the timeout dialog box for face swiping pages |
| timeoutAlertMessage				| String| 否			| 安卓			| 刷脸页超时对话框的内容																				|
| timeoutAlertMessage | String| No | Android | The content of the timeout dialog box of the facial recognition page |
| failAlertTitle						| String| 否			| 安卓			| 刷脸页错误提示对话框的标题																		|
| failAlertTitle | String| No | Android | The title of the error prompt dialog box on the facial recognition page |
| failAlertMessage					| String| 否			| 安卓			| 刷脸页错误提示对话框的内容																		|
| failAlertMessage | String| No | Android | The content of the error prompt dialog box on the facial recognition page |
| title											| String| 否			| 安卓			| 刷脸圈的颜色																									|
| title | String| No | Android | The color of the face circle |
| success										| String| 否			| 安卓、iOS	| 成功回调																											|
| success | String| No | Android, iOS | Success callback |
| fail											| String| 否			| 安卓、iOS	| 失败回调																											|
| fail | String| No | Android, iOS | Failure callback |
| complete									| String| 否			| 安卓、iOS	| 完成回调																											|
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

|错误码	|说明																										|
|Error code |Description |
|:-:		|:-:																										|
|0			|请求成功																								|
| 0 | Request succeeded |
|50001	|缺少参数																								|
| 50001 | Missing parameter |
|50002	|参数类型、取值不正确																		|
| 50002 | The parameter type and value are incorrect |
|54003	|appId不存在																						|
| 54003 | appId does not exist |
|54004	|服务空间不在白名单中																		|
| 54004 | The service space is not in the white list |
|54020	|请求记录不存在，certifyId无效													|
| 54020 | Request record does not exist, certifyId is invalid |
|54021	|云函数内缺少接口调用凭证，请联系DCloud处理							|
| 54021 | There is no interface call certificate in the cloud function, please contact DCloud for processing |
|54022	|服务空间不存在																					|
| 54022 | Service space does not exist |
|55000	|服务器错误，请联系DCloud处理														|
| 55000 | Server error, please contact DCloud |
|55001	|Api调用失败，实人认证服务商服务不可用，请联系DCloud处理|
| 55001 | Api call failed, the real person authentication service provider service is unavailable, please contact DCloud for processing|
|60000	|服务不可用，请联系DCloud处理														|
| 60000 | The service is unavailable, please contact DCloud for processing |

**客户端错误码**
**Client error code**

|错误码	|错误信息					|描述																					|
|Error code |Error message |Description |
|---		|---							|---																					|
|0			|刷脸完成					|实际结果需要通过服务端查询接口								|
| 0 |Face swiping completed |Actual results need to query the interface through the server |
|10001	|certifyId不能为空|参数certifyId为空														|
| 10001 | certifyId cannot be empty | The parameter certifyId is empty |
|10010	|刷脸异常					|刷脸异常,具体原因详见cause										|
| 10010 | Abnormal facial recognition | Abnormal facial recognition, see cause for details |
|10011	|验证中断					|如用户主动退出、验证超时等,具体原因详见cause	|
| 10011 | Verification Interrupted | For example, the user voluntarily logs out, verification timeout, etc., see cause for details |
|10012	|网络异常					|网络异常																			|
| 10012 | Network exception | Network exception |
|10013	|刷脸验证失败			|实际结果需要通过服务端查询结果								|
|10020	|设备设置时间异常	|设备设置时间异常，仅iOS返回									|
