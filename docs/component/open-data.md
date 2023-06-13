#### open-data

用于展示平台开放的数据。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序|飞书小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|x|√|√|x|√|x|x|x|x|

**Tips**

该功能为各小程序平台提供的开放能力。App端和H5端不涉及此概念。

支付宝没有open-data组件，但提供了API方式获取相关信息。[参考](https://docs.alipay.com/mini/api/ch8chh)

**属性说明**

|属性名|类型|默认值|说明|平台差异说明|
|:-:|:-:|:-:|:-:|:-:|
|type|String||开放数据类型||
|open-gid|String||当 type="groupName" 时生效, 群id|微信小程序、QQ小程序|
|lang|String|en|当 type="user*" 时生效，以哪种语言展示 userInfo，有效值有：en, zh_CN, zh_TW|微信小程序、QQ小程序|

**type 有效值**

|值|说明|平台差异说明|
|:-:|:-:|:-:|
|userNickName|用户昵称|微信小程序基础库 `1.9.90+` 返回 `"微信用户"`|
|userAvatarUrl|用户头像|微信小程序基础库 `1.9.90+` 不再返回，展示 [灰色头像](https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0)|
|userGender|用户性别|微信小程序基础库 `1.9.90+` 不再返回|
|groupName|拉取群名称|微信小程序、QQ小程序|
|userCity|用户所在城市|微信小程序基础库 `1.9.90+` 不再返回、QQ小程序|
|userProvince|用户所在省份|微信小程序基础库 `1.9.90+` 不再返回、QQ小程序|
|userCountry|用户所在国家|微信小程序基础库 `1.9.90+` 不再返回、QQ小程序|
|userLanguage|用户的语言|微信小程序基础库 `1.9.90+` 不再返回、QQ小程序|

**注意**
  - 微信小程序平台从 `2022年2月21日24时起` 回收通过 `<open-data>` 展示个人信息的能力，[详情](https://developers.weixin.qq.com/community/develop/doc/000e881c7046a8fa1f4d464105b001?blockType=1)。若小程序需收集用户昵称头像等信息，可以通过 [头像昵称填写功能](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/userProfile.html) 进行收集。具体回收方式为：
     - 头像展示 [灰色头像](https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0)
     - 用户昵称展示 `微信用户`
     - 用户性别、地区、语言展示为为空 `“”`
  - 小程序通过 `<open-data>` 展示群名称能力保留，平台会针对小程序生命周期内首次调用该组件展示群名称向用户提示：“群名称仅你可见，小程序无法获取。”

**示例**

```html
<open-data type="userNickName"></open-data>
<open-data type="userAvatarUrl"></open-data>
<open-data type="userGender"></open-data>
```
