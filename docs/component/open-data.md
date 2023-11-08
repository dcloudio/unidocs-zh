#### open-data

用于展示平台开放的数据。
It is used to display the open data of the platform.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序|飞书小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|x|√|√|x|√|x|x|x|x|

**Tips**

该功能为各小程序平台提供的开放能力。App端和H5端不涉及此概念。
This function provides open capabilities for each Mini Program platform. The App side and H5 side do not involve this concept.

支付宝没有open-data组件，但提供了API方式获取相关信息。[参考](https://docs.alipay.com/mini/api/ch8chh)

**属性说明**
**Property description**

|属性名|类型|默认值|说明|平台差异说明|
|property name|type|default value|description|platform difference description|
|:-:|:-:|:-:|:-:|:-:|
|type|String||开放数据类型||
|type|String||Open Data Type||
|open-gid|String||当 type="groupName" 时生效, 群id|微信小程序、QQ小程序|
|open-gid|String||It takes effect when type="groupName", group id|WeChat applet, QQ applet|
|lang|String|en|当 type="user*" 时生效，以哪种语言展示 userInfo，有效值有：en, zh_CN, zh_TW|微信小程序、QQ小程序|
|lang|String|en|It takes effect when type="user*", in which language to display userInfo, valid values are: en, zh_CN, zh_TW|WeChat applet, QQ applet|

**type 有效值**
**type valid values**

|值|说明|平台差异说明|
|Value|Description|Platform Difference Description|
|:-:|:-:|:-:|
|userNickName|用户昵称|微信小程序基础库 `1.9.90+` 返回 `"微信用户"`|
|userNickName|User Nickname|WeChat Mini Program Basic Library `1.9.90+` Return `"WeChat User"`|
|userAvatarUrl|用户头像|微信小程序基础库 `1.9.90+` 不再返回，展示 [灰色头像](https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0)|
|userAvatarUrl|User Avatar|WeChat Mini Program Basic Library `1.9.90+` No longer returns, showing [Gray Avatar](https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0)|
|userGender|用户性别|微信小程序基础库 `1.9.90+` 不再返回|
|userGender|User gender|WeChat applet basic library `1.9.90+` no longer returns|
|groupName|拉取群名称|微信小程序、QQ小程序|
|groupName|Pull group name|WeChat applet, QQ applet|
|userCity|用户所在城市|微信小程序基础库 `1.9.90+` 不再返回、QQ小程序|
|userCity|The city where the user is located|WeChat applet basic library `1.9.90+` no longer returns, QQ applet|
|userProvince|用户所在省份|微信小程序基础库 `1.9.90+` 不再返回、QQ小程序|
|userProvince|The province where the user is located|WeChat applet basic library `1.9.90+` no longer returns, QQ applet|
|userCountry|用户所在国家|微信小程序基础库 `1.9.90+` 不再返回、QQ小程序|
|userCountry|The country where the user is located|WeChat applet basic library `1.9.90+` no longer returns, QQ applet|
|userLanguage|用户的语言|微信小程序基础库 `1.9.90+` 不再返回、QQ小程序|
|userLanguage|User's language|WeChat applet basic library `1.9.90+` no longer returns, QQ applet|

**注意**
**Notice**
  - 微信小程序平台从 `2022年2月21日24时起` 回收通过 `<open-data>` 展示个人信息的能力，[详情](https://developers.weixin.qq.com/community/develop/doc/000e881c7046a8fa1f4d464105b001?blockType=1)。若小程序需收集用户昵称头像等信息，可以通过 [头像昵称填写功能](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/userProfile.html) 进行收集。具体回收方式为：
  - The WeChat applet platform will recover the ability to display personal information through `<open-data>` from `24:00 on February 21, 2022`. [Details](https://developers.weixin.qq.com/community/ develop/doc/000e881c7046a8fa1f4d464105b001?blockType=1). If the Mini Program needs to collect information such as the user's nickname and avatar, it can be collected through the [Filling Function of Avatar Nickname](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/userProfile.html). The specific recycling methods are:
     - 头像展示 [灰色头像](https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0)
     - Avatar Display [Gray Avatar](https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0)
     - 用户昵称展示 `微信用户`
     - User nickname display `WeChat user`
     - 用户性别、地区、语言展示为为空 `“”`
     - User gender, region and language are displayed as empty `""`
  - 小程序通过 `<open-data>` 展示群名称能力保留，平台会针对小程序生命周期内首次调用该组件展示群名称向用户提示：“群名称仅你可见，小程序无法获取。”
  - The Mini Program retains the ability to display the group name through `<open-data>`, and the platform will prompt the user for the first time in the Mini Program's life cycle to call this component to display the group name: "The group name is only visible to you, and the Mini Program cannot obtain it."

**示例**
**Example**

```html
<open-data type="userNickName"></open-data>
<open-data type="userAvatarUrl"></open-data>
<open-data type="userGender"></open-data>
```
