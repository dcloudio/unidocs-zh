### 云函数API

> 自`HBuilderX 3.3.0`起，本接口支持传入phoneList参数批量发送短信，其他参数均于发送单条短信相同
> Since `HBuilderX 3.3.0`, this interface supports passing in the phoneList parameter to send SMS in batches, and other parameters are the same as sending a single SMS

> 自`HBuilderX 3.4.0`起云函数需启用扩展库uni-cloud-sms之后才可以调用sendSms接口，详细说明见：[云函数使用短信扩展库](#extension)
> Since `HBuilderX 3.4.0`, the cloud function needs to enable the extension library uni-cloud-sms before calling the sendSms interface. For details, see: [Cloud function uses SMS extension library](#extension)

自HBuilderX 2.8.1起，uniCloud内置了短信发送API。给开发者提供更方便、更便宜的短信发送能力。
Since HBuilderX 2.8.1, uniCloud has a built-in SMS sending API. Provide developers with more convenient and cheaper SMS sending capabilities.

该服务类似小程序的模板消息，在一个固定模板格式的文字里自定义某些字段，而不是所有文字都可以随便写。
This service is similar to the template message of the MiniApp. Some fields can be customized in a text in a fixed template format, instead of all text can be written casually.

使用本功能需要在[DCloud开发者中心](https://dev.dcloud.net.cn/pages/sms/base)开通并充值，教程参考[短信服务开通指南](https://ask.dcloud.net.cn/article/37534)
To use this function, you need to activate and recharge in the [DCloud Developer Center](https://dev.dcloud.net.cn/pages/sms/base). For tutorials, refer to the [SMS Service Activation Guide] (https://ask.dcloud .net.cn/article/37534)

因涉及费用，为保障安全，本能力应该在云函数中调用，而不是在前端调用。
Due to the cost involved, to ensure security, this ability should be called in the cloud function instead of the front end.

云函数API名称：`uniCloud.sendSms`
Cloud function API name: `uniCloud.sendSms`

**参数说明**
**Parameter Description**

参数结构体为json格式。
The parameter structure is in json format.

|参数名			|类型		|必填							|说明																																											|
|Parameter name |Type |Required |Description |
|:-:				|:-:		|:-:							|:-:																																											|
|appid			|String	|是								|DCloud appid，可以在项目manifest.json内看到																							|
| appid | String | Yes | DCloud appid, you can see it in the project manifest.json |
|smsKey			|String	|是								|调用短信接口的密钥key，从 dev.dcloud.net.cn/uniSms 后台获取															|
| smsKey | String |Yes |The key key for calling the SMS interface, obtained from the background of dev.dcloud.net.cn/uniSms |
|smsSecret	|String	|是								|调用短信接口的密钥secret，从 dev.dcloud.net.cn/uniSms 后台获取														|
| smsSecret | String |Yes |The key secret for calling the SMS interface, obtained from the background of dev.dcloud.net.cn/uniSms|
|phone			|String	|和phoneList二选一|发送目标手机号，暂仅支持中国大陆手机号																										|
| phone | String | Choose one from phoneList | send the target mobile phone number, only support mobile phone numbers in mainland China |
|phoneList	|Array	|和phone二选一		|发送目标手机号，暂仅支持中国大陆手机号，最多50个手机号码，`HBuilderX 3.3.0`起支持				|
| phoneList | Array |Choose one or phone |Send the target mobile phone number, currently only supports mobile phone numbers in mainland China, with a maximum of 50 mobile phone numbers, supported from `HBuilderX 3.3.0` |
|templateId	|String	|是								|模版Id，短信内容为固定模板，详见下方说明（应用开发阶段，可以使用 DCloud 提供的测试模板）	|
| templateId | String |Yes |Template Id, SMS content is a fixed template, see the description below for details (in the application development stage, you can use the test template provided by DCloud) |
|data				|Object	|是								|模版里的各个变量字段，json格式																														|
| data | Object | Yes | each variable field in the template, in json format |


**注意**
**Notice**

- 如果使用uni-id发送短信，无需自行开发，请参考[uni-id-pages](uni-id-pages.md)
- If you use uni-id to send SMS, you don't need to develop it yourself, please refer to [uni-id-pages](uni-id-pages.md)

#### 云函数使用短信扩展库@extension
#### Cloud function uses SMS extension library @extension

自HBuilderX 3.4.0起，短信相关功能移至扩展库`uni-cloud-sms`内。在一段时间内无论开发者是否使用扩展库云函数都可以正常使用`uniCloud.sendSms`。HBuilderX 3.4.0及之后的版本上传云函数时如果没有指定使用`uni-cloud-sms`扩展库的云函数将无法调用uniCloud.sendSms接口。
Since HBuilderX 3.4.0, SMS-related functions have been moved to the extension library `uni-cloud-sms`. For a period of time, regardless of whether the developer uses the extension library cloud function, `uniCloud.sendSms` can be used normally. HBuilderX 3.4.0 and later versions cannot call the uniCloud.sendSms interface if the cloud function that uses the `uni-cloud-sms` extension library is not specified when uploading the cloud function.

关于扩展库的说明见：[云函数扩展库](cf-functions.md#extension)
For instructions on the extension library, see: [Cloud function extension library](cf-functions.md#extension)

在云函数的package.json内添加`uni-cloud-sms`的引用即可为云函数启用此扩展，无需做其他调整，完整的package.json示例如下：
Add the reference of `uni-cloud-sms` in the package.json of the cloud function to enable this extension for the cloud function without any other adjustments. The complete package.json example is as follows:

```js
{
	"name": "uni-sms",
	"extensions": {
		"uni-cloud-sms": {} // 启用短信扩展，值为空对象即可
	}
}
```

#### 参数templateId说明@smstemplate
#### parameter templateId description @smstemplate

按照国家法律和运营商要求，每个要发送短信的应用，需要备案其短信模板，并且经过运营商的审核。通过审核的模板，会得到一个templateId。
According to national laws and operator requirements, each application that wants to send SMS needs to file its SMS template and be reviewed by the operator. The approved template will get a templateId.

短信内容规范：
SMS content specification:
1. 不能包含涉政、黄赌毒、暴力、房产、移民、贷款、代开发票等违法内容
1. It cannot contain illegal content such as politics, pornography, gambling, drugs, violence, real estate, immigration, loans, and invoicing
2. 不能包含运营商禁止发送的内容
2. Do not contain content prohibited by the operator
3. 不能包含侵犯第三方权益的内容（如侵犯他人商标或冒名行为）
3. It cannot contain content that infringes the rights of a third party (such as infringing on other people's trademarks or impersonation)
4. 营销类短信不能违反广告法
4. Marketing text messages cannot violate the advertising law
5. 不能利用短信骚扰或诈骗用户
5. Do not use text messages to harass or defraud users

报备模板的方式：
How to file a template:

1. 如果尚未添加签名，请在在开发者中心-[签名配置](https://dev.dcloud.net.cn/pages/sms/sign)内添加签名
1. If you have not added a signature, please add a signature in the Developer Center - [Signature Configuration](https://dev.dcloud.net.cn/pages/sms/sign)
2. 在开发者中心-[模板配置](https://dev.dcloud.net.cn/pages/sms/template)内申请自定义模板
2. Apply for a custom template in the Developer Center - [Template Configuration](https://dev.dcloud.net.cn/pages/sms/template)

- 短信签名：
- SMS signature:
即短信内容开头的【xxx】，可选内容为App或小程序名称、网站名称、企业名称（可使用简称，但需具备辨识度）、商标名称。如`【DCloud】`，即是DCloud官方发送短信的签名。签名的作用是明确告知用户该短信由什么样的主体发送。签名内容只允许包含中文、英文、数字，签名的长度限制为2-8位。
That is [xxx] at the beginning of the SMS content, the optional content is the name of the App or MiniApp, website name, company name (abbreviation can be used, but it needs to be recognizable), and brand name. Such as `[DCloud]`, it is the signature of DCloud's official SMS. The function of the signature is to clearly inform the user what kind of subject the message is sent by. The content of the signature is only allowed to contain Chinese, English, and numbers, and the length of the signature is limited to 2-8 digits.

- 模板内容：
- Template content:
短信模板必然以短信签名作为开头，其内容中允许有一定的变量，以满足灵活性需求。变量用${}包裹。
The SMS template must start with the SMS signature, and certain variables are allowed in its content to meet the flexibility requirements. Variables are wrapped with ${}.

例如：【hello uni-app】验证码：${code}，${expMinute}分钟内有效，请勿泄露并尽快验证。
For example: 【hello uni-app】Verification code: ${code}, ${expMinute} valid within minutes, please do not disclose and verify as soon as possible.

在实际发送短信时，在短信API中传入该模板ID，然后传入合适的变量，最终发送的短信将变为：
When actually sending a text message, pass in the template ID in the text message API, and then pass in the appropriate variables, and the final sent text message will become:
`【hello uni-app】验证码：123465，用于注册，15分钟内有效，请勿泄露并尽快验证。`
`【hello uni-app】Verification code: 123465, used for registration, valid within 15 minutes, please do not disclose and verify as soon as possible. `

- 短信类别：
- SMS categories:
分为3类，即验证码类短信、通知类短信、营销类短信。验证码类短信，其模板审核简单快速，只能单次发送。
It is divided into 3 categories, namely verification code SMS, notification SMS, and marketing SMS. Verification code text messages, the template review is simple and fast, and can only be sent once.

**短信测试模板说明**
**SMS Test Template Description**

运营商目前审核比较严格，处于开发阶段的应用可能无法通过运营商的审核。为方便开发者测试短信功能，DCloud 提供了一个测试模板，该模板的templateId为：uni_sms_test，内容为：`【统一应用软件】尊敬的用户，您的验证码是：${code}。5分钟内有效，请尽快验证。请勿泄漏您的验证码。` 
Operators currently have relatively strict audits, and applications in the development stage may not pass the operator's audit. In order to facilitate developers to test the SMS function, DCloud provides a test template. The templateId of the template is: uni_sms_test, and the content is: `[Unified Application Software] Dear user, your verification code is: ${code}. Valid within 5 minutes, please verify as soon as possible. Please do not share your verification code. `

使用该模板的限制：
Limitations of using this template:

1. 每日最多给10个手机号发送不超过100条短信；
1. Send no more than 100 text messages to 10 mobile phone numbers per day;
2. 使用该模板也会正常收取费用，请保证账户有充足余额。
2. Fees will be charged normally for using this template, please ensure that the account has sufficient balance.


#### 返回值

接口调用失败时会直接抛出错误，调用成功时才会有返回值。
When the interface call fails, an error will be thrown directly, and there will be a return value only when the call is successful.

注意接口调用成功不代表短信发送成功，比如目标手机关机会导致短信发送失败。真实的短信发送成功与否请在[https://dev.dcloud.net.cn/pages/sms/base](https://dev.dcloud.net.cn/pages/sms/base)后台查看报表。
Note that the success of the interface call does not mean that the SMS is sent successfully. For example, if the target mobile phone is turned off, the SMS will fail to be sent. Please check the report in the background of [https://dev.dcloud.net.cn/pages/sms/base](https://dev.dcloud.net.cn/pages/sms/base) to see whether the real SMS is sent successfully or not .

|参数名	|类型	|说明			|
|parameter name |type |description |
|:-:	|:-:	|:-:			|
|errCode|Number|成功返回0，调用失败错误码见下表	|
| errCode| Number|Successfully returns 0, and the error code of call failure is shown in the table below |
|errMsg|String|错误描述，调用失败时返回	|
| errMsg| String|Error description, returned when the call fails |

#### 错误码说明

|错误码	|错误																	|
|Error Code |Error |
|:-:		|:-:																	|
|1001		|参数校验未通过,errMsg内会给出详细信息|
| 1001 | Parameter verification failed, detailed information will be given in errMsg|
|4000		|参数错误															|
| 4000 | Parameter error |
|4001		|apiKey 不存在 或 templateId 不正确		|
| 4001 | apiKey does not exist or templateId is incorrect |
|4002		|请检查smsKey、smsSecret是否有误			|
| 4002 | Please check whether the smsKey and smsSecret are correct |
|4003		|服务空间或IP地址不在白名单中					|
| 4003 | The service space or IP address is not in the whitelist |
|5000		|服务错误，请联系DCloud进行排查				|
| 5000 | Service error, please contact DCloud for troubleshooting |
|5001		|服务器异常，请重试！									|
| 5001 | The server is abnormal, please try again! |

#### 调用示例

```js
// 发送单条短信示例
// Example of sending a single message
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
        expMinute: '3',
      }
    })
    // 调用成功，请注意这时不代表发送成功
    // The call is successful, please note that this does not mean that the sending is successful
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
        expMinute: '3',
      }
    })
    // 调用成功，请注意这时不代表发送成功
    // The call is successful, please note that this does not mean that the sending is successful
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
The template used in this example is:
```
【uniID】“${name}”验证码：${code}，${expMinute}分钟内有效，请勿泄露并尽快验证。
```

本示例发送的短信，在手机上将显示为：
The SMS sent in this example will be displayed on the mobile phone as:
```
【uniID】“DCloud”验证码：123456，3分钟内有效，请勿泄露并尽快验证。
```


### 发送失败注意@fail
### Failed to send Note @fail

- data内如果有`测试`、`test`等字样，系统可能会被判定为测试用途，不会真正把短信下发到对应手机（此行为由运营商控制，可能真实发送，也可能不发送） 
- If there are words such as `test` and `test` in the data, the system may be judged as a test purpose, and the SMS will not be sent to the corresponding mobile phone (this behavior is controlled by the operator, and may or may not be sent. )
- 短信内容不可包含★、 ※、 →、 ●等特殊符号，可能会导致短信乱码
- The SMS content cannot contain special symbols such as ★, ※, →, ●, etc., which may cause garbled text messages
- 如果本地运行提示`不支持的模板ID`，请更新到`2.9.9+`版本的HBuilderX 
- If running locally prompts `Unsupported Template ID`, please update to `2.9.9+` version of HBuilderX
- 使用同一短信模板给同一个手机号发送短信时，频率不能太高。如果1分钟内超过1次，会被运营商判定为骚扰或短信重发而被拦截，导致短信发送失败
- When using the same SMS template to send SMS to the same mobile phone number, the frequency should not be too high. If more than one time within 1 minute, it will be judged by the operator as harassment or SMS resending and will be blocked, resulting in failure to send SMS
- 尽量使用企业实名认证，个人实名认证的审核更严格，更容易发送失败
- Try to use corporate real-name authentication, the review of personal real-name authentication is stricter, and it is easier to fail to send


**其他注意事项**
**Other Notes**

- 在[DCloud开发者中心](https://dev.dcloud.net.cn/pages/sms/base)绑定`uniCloud`服务空间后，将会只允许绑定的服务空间调用此接口，绑定列表为空时表示不限制服务空间
- After binding `uniCloud` service space in [DCloud Developer Center](https://dev.dcloud.net.cn/pages/sms/base), only the bound service space will be allowed to call this interface. When the specified list is empty, it means that the service space is not limited
- 如果是用于用户注册的短信验证码，那么强烈推荐使用uni-id，这是一套云端一体的、完善的用户管理方案，已经内置封装好的短信验证码功能，详见：[uni-id-pages](uni-id-pages.md)。
- If it is a SMS verification code used for user registration, then it is strongly recommended to use uni-id, which is a cloud-integrated and complete user management solution. It has built-in packaged SMS verification code function. For details, see: [uni- id-pages](uni-id-pages.md).
- 发送短信前，如果需要图形验证码来防止机刷，可以使用[uni-captcha图形验证码](https://ext.dcloud.net.cn/plugin?id=4048)。在[uni-id-pages](uni-id-pages.md)模板中已经集成了uni-id、uni-captcha
- Before sending SMS, if you need a graphic verification code to prevent machine swiping, you can use [uni-captcha graphic verification code](https://ext.dcloud.net.cn/plugin?id=4048). uni-id and uni-captcha have been integrated in the [uni-id-pages](uni-id-pages.md) template
- Android手机在App端获取短信验证码，参考：[https://ask.dcloud.net.cn/article/676](https://ask.dcloud.net.cn/article/676)
- The Android phone obtains the SMS verification code on the App side, refer to: [https://ask.dcloud.net.cn/article/676](https://ask.dcloud.net.cn/article/676)
- 短信内容超过70个字符时为长短信，需分条发送，每67个字按一条短信计算
- When the content of the text message exceeds 70 characters, it is a long text message, which needs to be sent in separate pieces, and every 67 characters is counted as a short message
- App平台的短信验证码需求，建议优先通过App一键登陆来替代，更便捷、更便宜。[详见](univerify.md)
- For the SMS verification code requirements of the App platform, it is recommended to replace it with one-click login on the App, which is more convenient and cheaper. [See](univerify.md)

更多问题：欢迎加入<a class="join-group-chat" target="_blank" href="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/Dcloud-%E7%9F%AD%E4%BF%A1.png">DCloud短信技术交流群	<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/Dcloud-%E7%9F%AD%E4%BF%A1.png">
</a>咨询
</a> Consulting


### 短信费用说明@sms-fee
### SMS fee description @sms-fee

- 短信费用为：0.036元/条。
- SMS fee: 0.036 yuan/text.

但在实际使用中需要依赖`uniCloud`云服务。如使用uniCloud阿里云商业版，每条大约需要多花0.0000139元，几乎可以忽略不计。您也可以粗略认为每条短信的费用为0.0360139元/条。费用计算规则如下：
But in actual use, it needs to rely on `uniCloud` cloud service. If you use the commercial version of uniCloud Alibaba Cloud, you will need to spend about 0.0000139 yuan more for each item, which is almost negligible. You can also roughly think that the cost of each SMS is 0.0360139 yuan/message. The fee calculation rules are as follows:


`短信`业务涉及费用的部分主要是云函数/云对象的使用量、调用次数、和出网流量(如：使用`uni-id-co`或自定义的云函数/云对象来发送短信)。
The cost of the `SMS` business is mainly the usage of cloud functions/cloud objects, the number of calls, and the outbound traffic (such as: using `uni-id-co` or custom cloud functions/cloud objects to send SMS) .
接下来，我们对不同资源，分别进行费用评估。
Next, we conduct cost assessments for different resources.

我们按照uniCloud官网列出的[按量计费](https://uniapp.dcloud.net.cn/uniCloud/price.html#aliyun-postpay)规则，可以简单得出如下公式：
According to the [pay-as-you-go](https://uniapp.dcloud.net.cn/uniCloud/price.html#aliyun-postpay) rules listed on the uniCloud official website, we can simply get the following formula:

`云函数/云对象费用 = 资源使用量 * 0.000110592  + 调用次数 * 0.0133 / 10000 + 出网流量 * 0.8`
`Cloud function/cloud object cost = resource usage * 0.000110592 + number of calls * 0.0133 / 10000 + outbound traffic * 0.8`

其中：
in:
- 资源使用量 = 云函数内存（单位为G） * 云函数平均单次执行时长（单位为秒） * 调用次数
- Resource usage = cloud function memory (in G) * average execution time of a cloud function (in seconds) * number of calls
- 调用次数 = 发送短信条数（一般情况下发送条数 = 调用次数，特殊情况除外）
- Number of calls = number of text messages sent (in general, number of messages sent = number of calls, except in special cases)


我们假设如下数据模型：
We assume the following data model:

- 云函数内存：512M，即0.5G （云函数内存默认为512M，用户可以自定义设置，最低可设置为128M。如果您仅发送短信，没有其他复杂业务，那么内存设为128M可以进一步的降低费用）
- Cloud function memory: 512M, which is 0.5G (the cloud function memory is 512M by default, and the user can customize the setting, and the minimum can be set to 128M. If you only send text messages and have no other complicated business, then setting the memory to 128M can further reduce cost)
- 云函数平均单次执行时长：200毫秒，即0.2秒
- The average execution time of a cloud function: 200 milliseconds, or 0.2 seconds
- 短信业务平均每日调用次数：10000次
- Average daily call times of SMS service: 10,000 times
- 出网流量：单次请求 2 KB
- Outbound traffic: 2 KB for a single request

按照如上公式，其`短信`业务云函数每天的费用为：
According to the above formula, the daily cost of the `SMS` business cloud function is:

```
云函数费用（天） = 资源使用量 * 0.000110592  + 调用次数 * 0.0133 / 10000 + 出网流量 * 0.8
			  = 云函数内存（单位为G） * 云函数平均单次执行时长（单位为秒） * 调用次数 + 调用次数 * 0.0133 / 10000 + 出网流量 * 0.8
			  = 0.5G * 0.2S * 10000 * 0.000110592 + 10000 * 0.0133/10000 + 10000 * 2 * 0.8 / (1024 * 1024) 
			  = 0.110592 + 0.0133 + 0.0152587890625
			  = 0.1391507890625（元）
			  ≈ 0.139（元）
```

结论：如果你的`短信`业务平均每天发送条数为10000条，使用阿里云正式版云服务空间后，对应云函数每天大概消耗0.139元，对比之前的短信费用，平均每次调用多花0.0000139元，几乎可忽略不计。
Conclusion: If your `SMS` business sends an average of 10,000 messages per day, after using the official cloud service space of Alibaba Cloud, the corresponding cloud function will consume about 0.139 yuan per day. Compared with the previous SMS fee, the average cost per call will be 0.0000139 Yuan is almost negligible.


- 计费条数计算方法：短信内容少于70个字符（每个汉字、标点、空格、字母均算一个字符）算作1条短信，短信内容多于70个字符时，每67个字符算作一条短信，并向上取整（不足67个字符的部分也算做1条）。 例： 短信内容有 100个字符时计费短信条数应为 100 / 67 ≈ 1.49 向上取整后算作2条。
- Calculation method for the number of billing messages: SMS content with less than 70 characters (every Chinese character, punctuation, space, and letter is counted as one character) is counted as 1 SMS, and when the content of SMS is more than 70 characters, every 67 characters is counted as Make a text message and round up (the part less than 67 characters is also counted as 1 message). Example: When the SMS content has 100 characters, the number of charged SMS messages should be 100 / 67 ≈ 1.49, which will be counted as 2 after rounding up.
- 最终按照成功回执状态为"成功"的短信条数计费，成功回执状态可在"发送记录"页面查看。
- In the end, the billing will be based on the number of SMS messages whose success receipt status is "Success", and the status of the success receipt can be viewed on the "Send Record" page.

特别注意：短信成功回执最长延迟为72小时。
Special Note: The maximum delay for SMS success receipt is 72 hours.

## 群发短信@batch-sms
## Batch SMS @batch-sms
如有客户关怀、会员服务、电商活动、新品上线等场景需要给用户发送短信时，通过uni-admin群发短信功能，无需开发，及时送达用户。
If there are scenarios such as customer care, membership services, e-commerce activities, and new product launches that need to send text messages to users, the uni-admin group text message function can be used to send text messages to users in a timely manner without development.
[群发短信配置](uniCloud/admin.md#batch-sms)
[Batch SMS Configuration](uniCloud/admin.md#batch-sms)

**功能亮点**
**Feature Highlights**

支持给用户打标签分组，按照分组群发短信，可以同时给多个分组群发
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/20230109154350.png)
短信模板变量支持从数据库表字段中读取
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/20230109194715.png)
发送前预览短信内容；防止内容错误，提高发送成功率
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/20230109155202.png)

如何使用？查看[群发短信配置](uniCloud/admin.md#batch-sms)
how to use? View [Batch SMS Configuration](uniCloud/admin.md#batch-sms)

<style>
	.join-group-chat{
		position: relative;
	}
	.join-group-chat img{
		display: none;
	}
	.join-group-chat:hover img{
		position: absolute;
                background: #FFF;
		top: 25px;
		right: 0;
		display: block;
		width: 150px;
		height: 150px;
		box-shadow:#999 0px 0px 20px;
		padding: 3px;
	}
</style>


