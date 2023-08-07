## 业务开通

### 开通流程
使用开发者账号登录[uniCloud控制台](https://unicloud.dcloud.net.cn/) ，选择`短信服务`栏目。在使用此功能前需要完成实名认证，可前往[开发者中心](https://dev.dcloud.net.cn/pages/user/info)完成实名认证。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/sms/sms20230802-04.png)

完成实名认证后，阅读短信服务协议并点击协议下方的“同意协议并开通”按钮，便可开通短信服务。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/sms/sms20230802-05.png)

开通成功后的页面如下图所示：
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/sms/sms20230802-07.png)

注意： 页面中显示的“账号 API 密钥”用于接口身份验证，此信息需要妥善保存，一旦泄漏可能会给您带来不必要的财务损失。

### 充值
短信服务为预付费业务，在发送短信之前，需要先进行充值。点击页面上的“充值”按钮，可以选择预设金额进行充值，也可以选择自定义金额进行充值，充值金额最小为1元。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/sms/sms20230802-06.png)

### 签名配置
例：【dcloud】验证码：${code}，用于${action}，${expMinute}分钟内有效，请勿泄露并尽快验证。dcloud即为签名。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/sms/sms20230802-08.png)

### 模板配置
目前短信签名创建后可立即前往创建短信模板，无需再等待短信签名审核通过且添加短信模板可提高签名审核通过机率。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/sms/sms20230802-09.png)
添加模板完成后，如模板审核通过，则根据[开发文档](https://uniapp.dcloud.net.cn/uniCloud/sms/dev.html)进行短信接入。
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/sms/sms20230802-10.png)


### 安全配置

系统提供了 uniCloud 服务空间白名单安全配置，可以提高接口调用安全性，防止被他人盗用。可点击“添加”按钮，选择相应的服务空间完成添加服务空间白名单，服务空间添加成功后，只有列表中的服务空间才可以调用当前账号下的短信接口。此列表为空时，不校验调用方的服务空间。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/sms/sms20230802-11.png)

### 发送记录

系统可查看短信发送记录，但此业务数据量较大，为了维持服务的稳定性，只能查看30天内的某1天的全部调用记录，默认选择当天。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/sms/sms20230802-12.png)

### 发送统计

系统可查看每日发送汇总数据，包括每日请求次数、每日请求成功次数、成功回执数、计费条数、计费金额等汇总数据。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/sms/sms20230802-13.png)
