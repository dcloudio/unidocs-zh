### 云函数API

> 自`HBuilderX 3.3.0`起，本接口支持传入phoneList参数批量发送短信，其他参数均于发送单条短信相同

> 自`HBuilderX 3.4.0`起云函数需启用扩展库uni-cloud-sms之后才可以调用sendSms接口，详细说明见：[云函数使用短信扩展库](#extension)

自HBuilderX 2.8.1起，uniCloud内置了短信发送API。给开发者提供更方便、更便宜的短信发送能力。

该服务类似小程序的模板消息，在一个固定模板格式的文字里自定义某些字段，而不是所有文字都可以随便写。

使用本功能需要在[uniCloud控制台](https://unicloud.dcloud.net.cn/pages/uni-sms/sms-account)开通并充值，教程参考[短信服务开通指南](https://uniapp.dcloud.net.cn/uniCloud/sms/intro.html)

因涉及费用，为保障安全，本能力应该在云函数中调用，而不是在前端调用。

云函数API名称：`uniCloud.sendSms`

**参数说明**

参数结构体为json格式。

|参数名			|类型		|必填							|说明																																											|
|:-:				|:-:		|:-:							|:-:																																											|
|appid			|String	|是								|DCloud appid，可以在项目manifest.json内看到																							|
|smsKey			|String	|是								|`HBuilderX 3.91`及之后的版本可不填此参数，调用短信接口的密钥key，从 dev.dcloud.net.cn/uniSms 后台获取															|
|smsSecret	|String	|是								|`HBuilderX 3.91`及之后的版本可不填此参数，调用短信接口的密钥secret，从 dev.dcloud.net.cn/uniSms 后台获取														|
|phone			|String	|和phoneList二选一|发送目标手机号，暂仅支持中国大陆手机号																										|
|phoneList	|Array	|和phone二选一		|发送目标手机号，暂仅支持中国大陆手机号，最多50个手机号码，`HBuilderX 3.3.0`起支持				|
|templateId	|String	|是								|模版Id，短信内容为固定模板，详见下方说明（应用开发阶段，可以使用 DCloud 提供的测试模板）	|
|data				|Object	|是								|模版里的各个变量字段，json格式																														|


**注意**

- 如果使用uni-id发送短信，无需自行开发，请参考[uni-id-pages](uni-id-pages.md)

#### 云函数使用短信扩展库@extension

自HBuilderX 3.4.0起，短信相关功能移至扩展库`uni-cloud-sms`内。在一段时间内无论开发者是否使用扩展库云函数都可以正常使用`uniCloud.sendSms`。HBuilderX 3.4.0及之后的版本上传云函数时如果没有指定使用`uni-cloud-sms`扩展库的云函数将无法调用uniCloud.sendSms接口。

关于扩展库的说明见：[云函数扩展库](cf-functions.md#extension)

在云函数的package.json内添加`uni-cloud-sms`的引用即可为云函数启用此扩展，无需做其他调整，完整的package.json示例如下：

```js
{
	"name": "uni-sms",
	"extensions": {
		"uni-cloud-sms": {} // 启用短信扩展，值为空对象即可
	}
}
```

#### 参数templateId说明@smstemplate

按照国家法律和运营商要求，每个要发送短信的应用，需要备案其短信模板，并且经过运营商的审核。通过审核的模板，会得到一个templateId。

短信内容规范：
1. 不能包含涉政、黄赌毒、暴力、房产、移民、贷款、代开发票等违法内容
2. 不能包含运营商禁止发送的内容
3. 不能包含侵犯第三方权益的内容（如侵犯他人商标或冒名行为）
4. 营销类短信不能违反广告法
5. 不能利用短信骚扰或诈骗用户

报备模板的方式：

1. 如果尚未添加签名，请在uniCloud控制台-短信服务-[签名配置](https://unicloud.dcloud.net.cn/pages/uni-sms/sign-config)内添加签名
2. 在uniCloud控制台-短信服务-[模板配置](https://unicloud.dcloud.net.cn/pages/uni-sms/template-config)内申请自定义模板

- 短信签名：
即短信内容开头的【xxx】，可选内容为App或小程序名称、网站名称、企业名称（可使用简称，但需具备辨识度）、商标名称。如`【DCloud】`，即是DCloud官方发送短信的签名。签名的作用是明确告知用户该短信由什么样的主体发送。签名内容只允许包含中文、英文、数字，签名的长度限制为2-8位。

- 模板内容：
短信模板必然以短信签名作为开头，其内容中允许有一定的变量，以满足灵活性需求。变量用${}包裹。

例如：【hello uni-app】验证码：${code}，${expMinute}分钟内有效，请勿泄露并尽快验证。

在实际发送短信时，在短信API中传入该模板ID，然后传入合适的变量，最终发送的短信将变为：
`【hello uni-app】验证码：123465，用于注册，15分钟内有效，请勿泄露并尽快验证。`

- 短信类别：
分为3类，即验证码类短信、通知类短信、营销类短信。验证码类短信，其模板审核简单快速，只能单次发送。

**短信测试模板说明**

运营商目前审核比较严格，处于开发阶段的应用可能无法通过运营商的审核。为方便开发者测试短信功能，DCloud 提供了一个测试模板，该模板的templateId为：uni_sms_test，内容为：`【统一应用软件】尊敬的用户，您的验证码是：${code}。5分钟内有效，请尽快验证。请勿泄漏您的验证码。` 

使用该模板的限制：

1. 每日最多给10个手机号发送不超过100条短信；
2. 使用该模板也会正常收取费用，请保证账户有充足余额。


#### 返回值

接口调用失败时会直接抛出错误，调用成功时才会有返回值。

注意接口调用成功不代表短信发送成功，比如目标手机关机会导致短信发送失败。真实的短信发送成功与否请在uniCloud控制台-短信服务-[发送记录](https://unicloud.dcloud.net.cn/pages/uni-sms/send-record)查看发送记录。

|参数名	|类型	|说明			|
|:-:	|:-:	|:-:			|
|errCode|Number|成功返回0，调用失败错误码见下表	|
|errMsg|String|错误描述，调用失败时返回	|

#### 错误码说明

|错误码	|错误																	|
|:-:		|:-:																	|
|1001		|参数校验未通过,errMsg内会给出详细信息|
|4000		|参数错误															|
|4001		|apiKey 不存在 或 templateId 不正确		|
|4002		|请检查smsKey、smsSecret是否有误			|
|4003		|服务空间或IP地址不在白名单中					|
|5000		|服务错误，请联系DCloud进行排查				|
|5001		|服务器异常，请重试！									|

#### 调用示例

```js
// 发送单条短信示例
'use strict';
exports.main = async (event, context) => {
  try {
    const res = await uniCloud.sendSms({
      appid: '__UNI__xxxxxxx',
      phone: '188********',
      templateId: '100**', // 请替换为自己申请的模板id
      data: {
        name: 'DCloud',
        code: '123456',
        expMinute: '3',
      }
    })
    // 调用成功，请注意这时不代表发送成功
    return res
  } catch(err) {
    // 调用失败
    console.log(err.errCode)
    console.log(err.errMsg)
    return {
      code: err.errCode,
      msg: err.errMsg
    }
  }
};

// 批量发送短信示例
'use strict';
exports.main = async (event, context) => {
  try {
    const res = await uniCloud.sendSms({
      appid: '__UNI__xxxxxxx',
      phoneList: ['188********', '138********'],
      templateId: '100**', // 请替换为自己申请的模板id
      data: {
        name: 'DCloud',
        code: '123456',
        expMinute: '3',
      }
    })
    // 调用成功，请注意这时不代表发送成功
    return res
  } catch(err) {
    // 调用失败
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
```
【uniID】“${name}”验证码：${code}，${expMinute}分钟内有效，请勿泄露并尽快验证。
```

本示例发送的短信，在手机上将显示为：
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

- 在uniCloud控制台-短信服务-[安全配置](https://unicloud.dcloud.net.cn/pages/uni-sms/space-white)绑定`uniCloud`服务空间后，将会只允许绑定的服务空间调用此接口，绑定列表为空时表示不限制服务空间
- 如果是用于用户注册的短信验证码，那么强烈推荐使用uni-id，这是一套云端一体的、完善的用户管理方案，已经内置封装好的短信验证码功能，详见：[uni-id-pages](uni-id-pages.md)。
- 发送短信前，如果需要图形验证码来防止机刷，可以使用[uni-captcha图形验证码](https://ext.dcloud.net.cn/plugin?id=4048)。在[uni-id-pages](uni-id-pages.md)模板中已经集成了uni-id、uni-captcha
- Android手机在App端获取短信验证码，参考：[https://ask.dcloud.net.cn/article/676](https://ask.dcloud.net.cn/article/676)
- 短信内容超过70个字符时为长短信，需分条发送，每67个字按一条短信计算
- App平台的短信验证码需求，建议优先通过App一键登陆来替代，更便捷、更便宜。[详见](univerify.md)

更多问题：欢迎加入<a class="join-group-chat" target="_blank" href="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/Dcloud-%E7%9F%AD%E4%BF%A1.png">DCloud短信技术交流群	<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/Dcloud-%E7%9F%AD%E4%BF%A1.png">
</a>咨询


## 群发短信@batch-sms
如有客户关怀、会员服务、电商活动、新品上线等场景需要给用户发送短信时，通过uni-admin群发短信功能，无需开发，及时送达用户。
[群发短信配置](uniCloud/admin.md#batch-sms)

**功能亮点**

支持给用户打标签分组，按照分组群发短信，可以同时给多个分组群发
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/20230109154350.png)
短信模板变量支持从数据库表字段中读取
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/20230109194715.png)
发送前预览短信内容；防止内容错误，提高发送成功率
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/20230109155202.png)

如何使用？查看[群发短信配置](uniCloud/admin.md#batch-sms)

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


