## 发送短信
## send messages

<!--
/// meta
keyword: 短信,sms
keyword: SMS, sms
-->

> 自`HBuilderX 3.3.0`起，本接口支持传入phoneList参数批量发送短信，其他参数均于发送单条短信相同
> Since `HBuilderX 3.3.0`, this interface supports batch sending SMS by passing in the phoneList parameter, and other parameters are the same as sending a single SMS

> 自`HBuilderX 3.4.0`起云函数需启用uni-cloud-sms之后才可以调用sendSms接口，详细说明见：[云函数使用短信扩展库](#extension)
> Since `HBuilderX 3.4.0`, cloud functions need to enable uni-cloud-sms before calling the sendSms interface. For details, see: [Cloud functions use SMS extension library](#extension)

自HBuilderX 2.8.1起，uniCloud内置了短信发送API。给开发者提供更方便、更便宜的短信发送能力。
Since HBuilderX 2.8.1, uniCloud has built-in SMS sending API. Provide developers with more convenient and cheaper SMS sending capabilities.

该服务类似小程序的模板消息，在一个固定模板格式的文字里自定义某些字段，而不是所有文字都可以随便写。
This service is similar to the template message of the applet, and some fields are customized in the text in a fixed template format, instead of all the text can be written casually.

使用本功能需要在[DCloud开发者中心](https://dev.dcloud.net.cn/#/pages/sms/base)开通并充值，教程参考[短信服务开通指南](https://ask.dcloud.net.cn/article/37534)
To use this function, you need to activate and recharge in [DCloud Developer Center](https://dev.dcloud.net.cn/#/pages/sms/base). For tutorials, please refer to [SMS Service Activation Guide](https://ask .dcloud.net.cn/article/37534)

因涉及费用，为保障安全，本能力应该在云函数中调用，而不是在前端调用。
Due to the cost involved, to ensure security, this capability should be called in the cloud function, not in the front end.

云函数API名称：`uniCloud.sendSms`
Cloud Function API Name: `uniCloud.sendSms`

**参数说明**
**Parameter Description**

参数结构体为json格式。
The parameter structure is in json format.

|参数名			|类型		|必填							|说明																																											|
|Parameter Name |Type |Required |Description |
|:-:				|:-:		|:-:							|:-:																																											|
|appid			|String	|是								|DCloud appid，可以在项目manifest.json内看到																							|
|appid |String |Yes |DCloud appid, which can be seen in the project manifest.json |
|smsKey			|String	|是								|调用短信接口的密钥key，从 dev.dcloud.net.cn/uniSms 后台获取															|
|smsKey |String |Yes |The key key for calling the SMS interface, obtained from the dev.dcloud.net.cn/uniSms background |
|smsSecret	|String	|是								|调用短信接口的密钥secret，从 dev.dcloud.net.cn/uniSms 后台获取														|
|smsSecret |String |Yes |The secret secret for calling the SMS interface, obtained from the dev.dcloud.net.cn/uniSms background |
|phone			|String	|和phoneList二选一|发送目标手机号，暂仅支持中国大陆手机号																										|
|phone |String |Select one from phoneList |Send the target mobile phone number, currently only supports mobile phone numbers in mainland China |
|phoneList	|Array	|和phone二选一		|发送目标手机号，暂仅支持中国大陆手机号，最多50个手机号码，`HBuilderX 3.3.0`起支持				|
|phoneList |Array |Select one from phone |Send the target mobile phone number, currently only supports mobile phone numbers in mainland China, up to 50 mobile phone numbers, supported since `HBuilderX 3.3.0` |
|templateId	|String	|是								|模版Id，短信内容为固定模板，详见下方说明（应用开发阶段，可以使用 DCloud 提供的测试模板）	|
|templateId |String |Yes |Template Id, the content of SMS is a fixed template, please refer to the description below (in the application development stage, you can use the test template provided by DCloud) |
|data				|Object	|是								|模版里的各个变量字段，json格式																														|
|data |Object |Yes |Variable fields in the template, json format |


**注意**
**Notice**

- 如果使用uni-id发送短信，无需自行开发，请参考[uni-id-pages](uni-id-pages.md)
- If you use uni-id to send SMS, you don't need to develop it yourself, please refer to [uni-id-pages](uni-id-pages.md)

#### 云函数使用短信扩展库@extension
#### Cloud functions use SMS extension library @extension

自HBuilderX 3.4.0起，短信相关功能移至扩展库`uni-cloud-sms`内。在一段时间内无论开发者是否使用扩展库云函数都可以正常使用`uniCloud.sendSms`。预计于2022年3月初发布的HBuilderX内强制使用扩展库，即使用在此时间点后发布的HBuilderX上传云函数时如果没有指定使用`uni-cloud-sms`扩展库的云函数将无法调用uniCloud.sendSms接口。
Since HBuilderX 3.4.0, SMS related functions have been moved to the extension library `uni-cloud-sms`. For a while, `uniCloud.sendSms` can be used normally regardless of whether the developer uses the extension library cloud function or not. The extension library is expected to be mandatory in HBuilderX released in early March 2022, that is, when uploading cloud functions using HBuilderX released after this time point, cloud functions that use the `uni-cloud-sms` extension library will not be able to call uniCloud. sendSms interface.

关于扩展库的说明见：[云函数扩展库](cf-functions.md#extension)
For the description of the extension library, see: [Cloud Function Extension Library](cf-functions.md#extension)

在云函数的package.json内添加`uni-cloud-sms`的引用即可为云函数启用此扩展，无需做其他调整，完整的package.json示例如下：
Add a reference to `uni-cloud-sms` in the cloud function's package.json to enable this extension for the cloud function without any other adjustments. The complete package.json example is as follows:

```js
{
	"name": "uni-sms",
	"extensions": {
		"uni-cloud-sms": {} // 启用uni-cloud-sms扩展，值为空对象即可
	}
}
```

#### 参数templateId说明@smstemplate
#### Parameter templateId description @smstemplate

按照国家法律和运营商要求，每个要发送短信的应用，需要备案其短信模板，并且经过运营商的审核。通过审核的模板，会得到一个templateId。
According to national laws and operator requirements, each application that wants to send SMS needs to record its SMS template and be reviewed by the operator. Templates that pass the review will get a templateId.

短信内容规范：
SMS content specification:
1. 不能包含涉政、黄赌毒、暴力、房产、移民、贷款、代开发票等违法内容
1. It cannot contain illegal content such as politics, pornography, gambling, drugs, violence, real estate, immigration, loans, and invoicing on behalf of others.
2. 不能包含运营商禁止发送的内容
2. Must not contain content prohibited by the operator
3. 不能包含侵犯第三方权益的内容（如侵犯他人商标或冒名行为）
3. Must not contain content that violates the rights of third parties (such as infringing on others' trademarks or impersonation)
4. 营销类短信不能违反广告法
4. Marketing SMS cannot violate the Advertising Law
5. 不能利用短信骚扰或诈骗用户
5. Do not use text messages to harass or defraud users

报备模板的方式：
How to submit a template:

1. 如果尚未添加签名，请在在开发者中心-[签名配置](https://dev.dcloud.net.cn/#/pages/sms/sign)内添加签名
1. If the signature has not been added, please add the signature in the Developer Center - [Signature Configuration](https://dev.dcloud.net.cn/#/pages/sms/sign)
2. 在开发者中心-[模板配置](https://dev.dcloud.net.cn/#/pages/sms/template)内申请自定义模板
2. Apply for a custom template in the Developer Center-[Template Configuration](https://dev.dcloud.net.cn/#/pages/sms/template)

- 短信签名：
- SMS signature:
即短信内容开头的【xxx】，可选内容为App或小程序名称、网站名称、企业名称（可使用简称，但需具备辨识度）、商标名称。如`【DCloud】`，即是DCloud官方发送短信的签名。签名的作用是明确告知用户该短信由什么样的主体发送。签名内容只允许包含中文、英文、数字，签名的长度限制为2-8位。
That is, the [xxx] at the beginning of the text message content. The optional content is the name of the app or applet, the name of the website, the name of the company (abbreviation can be used, but it needs to be recognizable), and the name of the brand. For example, `[DCloud]` is the signature of the official SMS sent by DCloud. The function of the signature is to clearly inform the user what kind of subject the short message is sent by. The signature content is only allowed to contain Chinese, English, and numbers, and the length of the signature is limited to 2-8 characters.

- 模板内容：
- Template content:
短信模板必然以短信签名作为开头，其内容中允许有一定的变量，以满足灵活性需求。变量用${}包裹。
The SMS template must start with the SMS signature, and certain variables are allowed in its content to meet flexibility requirements. Variables are wrapped with ${}.

例如：【hello uni-app】验证码：${code}，${expMinute}分钟内有效，请勿泄露并尽快验证。
For example: [hello uni-app] verification code: ${code}, ${expMinute} is valid within minutes, please do not disclose and verify as soon as possible.

在实际发送短信时，在短信API中传入该模板ID，然后传入合适的变量，最终发送的短信将变为：
When actually sending an SMS, pass in the template ID in the SMS API, and then pass in the appropriate variable, and the final SMS sent will become:
`【hello uni-app】验证码：123465，用于注册，15分钟内有效，请勿泄露并尽快验证。`
`[hello uni-app] verification code: 123465, used for registration, valid within 15 minutes, please do not disclose and verify as soon as possible. `

- 短信类别：
- SMS category:
分为3类，即验证码类短信、通知类短信、营销类短信。验证码类短信，其模板审核简单快速，只能单次发送。
It is divided into 3 categories, namely verification code SMS, notification SMS, and marketing SMS. Verification code SMS, the template review is simple and fast, and can only be sent once.

**短信测试模板说明**
**SMS Test Template Instructions**

运营商目前审核比较严格，处于开发阶段的应用可能无法通过运营商的审核。为方便开发者测试短信功能，DCloud 提供了一个测试模板，该模板的templateId为：uni_sms_test，内容为：`【统一应用软件】尊敬的用户，您的验证码是：${code}。5分钟内有效，请尽快验证。请勿泄漏您的验证码。` 
The operator's current review is relatively strict, and applications in the development stage may not pass the operator's review. In order to facilitate developers to test the SMS function, DCloud provides a test template, the templateId of the template is: uni_sms_test, and the content is: `[Unified Application Software] Dear users, your verification code is: ${code}. Valid within 5 minutes, please verify as soon as possible. Do not reveal your verification code. `

使用该模板的限制：
Limitations of using this template:

1. 每日最多给10个手机号发送不超过100条短信；
1. Send no more than 100 text messages to 10 mobile phone numbers every day;
2. 使用该模板也会正常收取费用，请保证账户有充足余额。
2. The use of this template will also be charged normally, please ensure that the account has sufficient balance.


**返回值**
**return value**

接口调用失败时会直接抛出错误，调用成功时才会有返回值。
An error will be thrown directly when the interface call fails, and a return value will be returned when the call is successful.

注意接口调用成功不代表短信发送成功，比如目标手机关机会导致短信发送失败。真实的短信发送成功与否请在[https://dev.dcloud.net.cn/#/pages/sms/base](https://dev.dcloud.net.cn/#/pages/sms/base)后台查看报表。
Note that the success of the API call does not mean that the SMS is sent successfully. For example, if the target mobile phone is turned off, the SMS will fail to be sent. Whether the real SMS is sent successfully or not, please refer to [https://dev.dcloud.net.cn/#/pages/sms/base](https://dev.dcloud.net.cn/#/pages/sms/base ) to view the report in the background.

|参数名	|类型	|说明			|
|parameter name |type |description |
|:-:	|:-:	|:-:			|
|errCode|Number|成功返回0，调用失败错误码见下表	|
|errCode|Number| returns 0 successfully, and the error code of call failure is shown in the table below |
|errMsg|String|错误描述，调用失败时返回	|
|errMsg|String|Error description, return when the call fails |

**错误码说明**
**Error code description**

|错误码	|错误																	|
|error code |error |
|:-:		|:-:																	|
|1001		|参数校验未通过,errMsg内会给出详细信息|
|1001 |Parameter verification failed, detailed information will be given in errMsg|
|4000		|参数错误															|
|4000 |Parameter error |
|4001		|apiKey 不存在 或 templateId 不正确		|
|4001 |apiKey does not exist or templateId is incorrect |
|4002		|请检查smsKey、smsSecret是否有误			|
|4002 |Please check whether smsKey and smsSecret are correct |
|4003		|服务空间或IP地址不在白名单中					|
|4003 |The service space or IP address is not in the whitelist |
|5000		|服务错误，请联系DCloud进行排查				|
|5000 |Service error, please contact DCloud for troubleshooting |
|5001		|服务器异常，请重试！									|
|5001 |The server is abnormal, please try again! |

**调用示例**
**Call example**

```js
// 发送单条短信示例
// Example of sending a single SMS
'use strict';
exports.main = async (event, context) => {
  try {
    const res = await uniCloud.sendSms({
      appid: '__UNI__xxxxxxx',
      smsKey: '****************',
      smsSecret: '****************',
      phone: '188********',
      templateId: '100**', // 请替换为自己申请的模板id
      data: {
        name: 'DCloud',
        code: '123456',
        action: '注册',
        expMinute: '3',
      }
    })
    // 调用成功，请注意这时不代表发送成功
    // The call is successful, please note that this does not mean the sending is successful
    return res
  } catch(err) {
    // 调用失败
    // call failed
    console.log(err.errCode)
    console.log(err.errMsg)
    return {
      code: err.errCode,
      msg: err.errMsg
    }
  }
};

// 批量发送短信示例
// Example of batch sending SMS
'use strict';
exports.main = async (event, context) => {
  try {
    const res = await uniCloud.sendSms({
      appid: '__UNI__xxxxxxx',
      smsKey: '****************',
      smsSecret: '****************',
      phoneList: ['188********', '138********'],
      templateId: '100**', // 请替换为自己申请的模板id
      data: {
        name: 'DCloud',
        code: '123456',
        action: '注册',
        expMinute: '3',
      }
    })
    // 调用成功，请注意这时不代表发送成功
    // The call is successful, please note that this does not mean the sending is successful
    return res
  } catch(err) {
    // 调用失败
    // call failed
    console.log(err.errCode)
    console.log(err.errMsg)
    return {
      code: err.errCode,
      msg: err.errMsg
    }
  }
};
```

本示例使用的模板为：
The template used for this example is:
```
【uniID】“${name}”验证码：${code}，${expMinute}分钟内有效，请勿泄露并尽快验证。
```

本示例发送的短信，在手机上将显示为：
The SMS sent by this example will appear on the phone as:
```
【uniID】“DCloud”验证码：123456，3分钟内有效，请勿泄露并尽快验证。
```

### 发送失败注意@fail

- data内如果有`测试`、`test`等字样，系统可能会被判定为测试用途，不会真正把短信下发到对应手机（此行为由运营商控制，可能真实发送，也可能不发送） 
- 短信内容不可包含★、 ※、 →、 ●等特殊符号，可能会导致短信乱码
- 如果本地运行提示`不支持的模板ID`，请更新到`2.9.9+`版本的HBuilderX 
- 使用同一短信模板给同一个手机号发送短信时，频率不能太高。如果1分钟内超过1次，会被运营商判定为骚扰或短信重发而被拦截，导致短信发送失败
- 尽量使用企业实名认证，个人实名认证的审核更严格，更容易发送失败


**其他注意事项**

- 在[DCloud开发者中心](https://dev.dcloud.net.cn/#/pages/sms/base)绑定`uniCloud`服务空间后，将会只允许绑定的服务空间调用此接口，绑定列表为空时表示不限制服务空间
- 如果是用于用户注册的短信验证码，那么强烈推荐使用uni-id，这是一套云端一体的、完善的用户管理方案，已经内置封装好的短信验证码功能，详见：[uni-id-pages](uni-id-pages.md)。
- 发送短信前，如果需要图形验证码来防止机刷，可以使用[uni-captcha图形验证码](https://ext.dcloud.net.cn/plugin?id=4048)。在[uni-id-pages](uni-id-pages.md)模板中已经集成了uni-id、uni-captcha
- Android手机在App端获取短信验证码，参考：[https://ask.dcloud.net.cn/article/676](https://ask.dcloud.net.cn/article/676)
- Android phone to obtain SMS verification code on the App side, refer to: [https://ask.dcloud.net.cn/article/676](https://ask.dcloud.net.cn/article/676)
- 短信内容超过70个字符时为长短信，需分条发送，每67个字按一条短信计算
