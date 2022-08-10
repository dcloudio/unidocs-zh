### uni.addPhoneContact(OBJECT)
调用后，用户可以选择将该表单以“新增联系人”或“添加到已有联系人”的方式（APP端目前没有选择步骤，将直接写入），写入手机系统通讯录，完成手机通讯录联系人和联系方式的增加。
After calling, the user can choose to write the form into the address book of the mobile phone system in the way of "Add Contact" or “Add to Existing Contact" (there is no selection step on the APP side at present, and it will be written directly) so as to complete the addition of contacts and contact information in the mobile phone address book.

App平台提供了更多通讯录相关API，包括读取联系人，详见：[https://www.html5plus.org/doc/zh_cn/contacts.html](https://www.html5plus.org/doc/zh_cn/contacts.html)

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|x|√|√|√|x|x|√|x|

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
| Parameter name| Type| Required| Instruction|
|:-|:-|:-|:-|
|photoFilePath|String|否|头像本地文件路径|
| photoFilePath| String| No| Local file path of the avatar|
|nickName|String|否|昵称|
| nickName| String| No| Nick name|
|lastName|String|否|姓氏|
| lastName| String| No| Last name|
|middleName|String|否|中间名|
| middleName| String| No| Middle name|
|firstName|String|是|名字|
| firstName| String| Yes| First name|
|remark|String|否|备注|
| remark| String| No| Remark|
|mobilePhoneNumber|String|否|手机号|
| mobilePhoneNumber| String| No| Phone number|
|weChatNumber|String|否|微信号|
|addressCountry|String|否|联系地址国家|
| addressCountry| String| No| Contact address country|
|addressState|String|否|联系地址省份|
| addressState| String| No| Contact address province|
|addressCity|String|否|联系地址城市|
| addressCity| String| No| Contact address city|
|addressStreet|String|否|联系地址街道|
| addressStreet| String| No| Contact address street|
|addressPostalCode|String|否|联系地址邮政编码|
| addressPostalCode| String| No| Contact address postal code|
|organization|String|否|公司|
| organization| String| No| Company|
|title|String|否|职位|
| title| String| No| Position|
|workFaxNumber|String|否|工作传真|
| workFaxNumber| String| No| Office fax|
|workPhoneNumber|String|否|工作电话|
| workPhoneNumber| String| No| Office phone|
|hostNumber|String|否|公司电话|
| hostNumber| String| No| Company phone|
|email|String|否|电子邮件|
| email| String| No| e-mail|
|url|String|否|网站|
| url| String| No| Website|
|workAddressCountry|String|否|工作地址国家|
| workAddressCountry| String| No| Work address country|
|workAddressState|String|否|工作地址省份|
| workAddressState| String| No| Work address province|
|workAddressCity|String|否|工作地址城市|
| workAddressCity| String| No| Work address city|
|workAddressStreet|String|否|工作地址街道|
| workAddressStreet| String| No| Work address street|
|workAddressPostalCode|String|否|工作地址邮政编码|
| workAddressPostalCode| String| No| Work address postal code|
|homeFaxNumber|String|否|住宅传真|
| homeFaxNumber| String| No| Home fax|
|homePhoneNumber|String|否|住宅电话|
| homePhoneNumber| String| No| Home phone|
|homeAddressCountry|String|否|住宅地址国家|
| homeAddressCountry| String| No| Residential address country|
|homeAddressState|String|否|住宅地址省份|
| homeAddressState| String| No| Residential address province|
|homeAddressCity|String|否|住宅地址城市|
| homeAddressCity| String| No| Residential address city|
|homeAddressStreet|String|否|住宅地址街道|
| homeAddressStreet| String| No| Residential address street|
|homeAddressPostalCode|String|否|住宅地址邮政编码|
| homeAddressPostalCode| String| No| Residential address postal code|
|success|Function|否|接口调用成功的回调|
| success| Function| No| Callback for successful interface calling|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|

**回调结果**
**Callback result**

|回调类型|errMsg|说明|
| Callback type| errMsg| Instruction|
|:-|:-|:-|
|success|ok|添加成功|
| success| ok| Addition successful|
|cancel|fail cancel|用户取消操作|
| cancel| fail cancel| User cancellation operation|
|fail|fail ${detail}|调用失败，detail 加上详细信息。|
| fail| fail ${detail}| If calling failed, add the detailed error information.|

**示例**
**Example**

```javascript
uni.addPhoneContact({
	nickName: '昵称',
	lastName: '姓',
	firstName: '名',
	remark: '备注',
	mobilePhoneNumber: '114',
	weChatNumber: 'wx123',
	success: function () {
		console.log('success');
	},
	fail: function () {
		console.log('fail');
	}
});
```

**注意**
**Notice**

- 手机OS对通讯录访问有严格的权限限制和要求。在小程序中使用时，需注意微信等小程序载体本身已经获得了手机端的授权许可。App端获取通讯录相关权限，参考[https://ext.dcloud.net.cn/plugin?id=594](https://ext.dcloud.net.cn/plugin?id=594)
- 打包App时，云打包则需要在manifest中配置权限和模块，离线打包需自行在原生工程中配置。
- When packaging on cloud, permissions and modules need to be configured on manifest. When packaging offline packaging needs to be configured in native engineering.
