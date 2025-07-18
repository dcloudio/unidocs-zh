开发者在使用 DCloud 部分服务（uniCloud、uni-ad等）时会要求开发者先进行实名认证，本文将引导开发者完成实名认证。

## 账号归属区别

| 类型   | 个人实名认证 | 企业实名认证 |
| ---- | ------------ | ------------ |
| 适用对象 | 个人 | 企业、个体工商户、政府、事业单位、学校、组织等 |
| 账号归属 | 个人 | 企业 |
| 认证方式 | 提交身份证照片正反面 | 提交企业营业执照照片 |
| 实名区别 | 无法申请增值税专用发票 | 可以申请增值税专用发票 |

::: warning 注意事项

实名认证直接影响账号和资源（包括该账号创建的 appid，广告收入，ASK 社区账号等）的归属，如果企业用户使用个人信息进行实名认证，后续出现人员变动或账号纠纷时，可能会影响企业用户的业务，甚至造成经济损失。在进行实名认证之前，请**务必确认**您在平台购买和使用的资源是属于个人还是企业。
:::


## 验证邮箱和手机号
在实名认证之前需要先完成邮箱和手机号验证。[查看如何验证邮箱和手机号？](modify.md)

## 提交实名认证
邮箱和手机号完成验证后，在[开发者中心账户页面](https://dev.dcloud.net.cn/pages/user/info)，点击“去实名认证”，提交实名认证信息，提交后等待审核即可。

## 注意事项
### 个人实名认证
- 针对个人实名认证，同1个身份信息（身份证号码）支持实名认证1个账号。
- 个人实名支持中国大陆居民使用身份证实名认证，支持中国港澳台用户使用港澳台居民居住证认证，其他地区用户请使用护照认证。
- 为了保证认证可以顺利通过，请开发者在提交信息时务必保证所提交信息真实有效。
- 个人开发者在使用身份证认证时需要提交身份证正反面，上传照片时请务必确保身份证正反面上传顺序与页面要求一致，否则会影响审核速度。
  
### 企业实名认证
- 针对企业实名认证，同1个企业身份信息（企业名称/营业执照）默认支持实名认证1个账号。
- 选择个体工商户进行企业认证时，添加财务信息时，可以选择使用对公账号或个体工商户经营者个人银行卡号。
- 若需申请发票，请确保实名认证名称与发票主体一致。
  
### 其它
- 如需变更实名认证信息，请参考文档：[实名认证信息变更](modify-real-name-verification.md)
- 实名认证通过后，不支持撤销认证。可以选择注销账号，注销流程请参考文档：[DCloud账号注销流程](deletion.md)

## 常见问题
- 如在实名过程中遇到提交信息正常却被驳回的情况，可发送邮件到 `verify@dcloud.io` 进行申诉。