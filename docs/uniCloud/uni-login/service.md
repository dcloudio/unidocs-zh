## 业务开通

### 开通流程
使用开发者账号登录[uniCloud控制台](https://unicloud.dcloud.net.cn/) ，选择`一键登录`栏目。在使用此功能前需要完成实名认证，可前往[开发者中心](https://dev.dcloud.net.cn/pages/user/info)完成实名认证。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-login/unilogin20231009-01.png)

完成实名认证后，阅读一键登录服务协议并点击协议下方的“同意协议并开通”按钮，便可开通一键登录服务。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-login/unilogin20231009-02.png)

开通成功后的页面如下图所示：
![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-login/unilogin20231009-03.png)

注意： 页面中显示的“账号 API 密钥”用于接口身份验证，此信息需要妥善保存，一旦泄漏可能会给您带来不必要的财务损失。

### 充值
一键登录为预付费业务，使用一键登录服务之前，需要先进行充值。点击页面上的“充值”按钮，可以选择预设金额进行充值，也可以选择自定义金额进行充值，充值金额最小1元。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-login/unilogin20231009-04-01.png)
充值成功后，可真机调试进行测试，费用会从账户中扣除，如需打包使用，请先添加应用。

### 添加应用
点击添加应用，需填写DCloud AppId及对应应用包名和签名信息，申请后一般1-3个工作日审核通过。
特别提醒：
- 请谨慎填写应用信息，保证包名及签名的正确性。
- 新添加的应用提交后，在审核阶段支持修改。
- 审核通过的应用新增平台时，不影响已审核通过平台的使用。
- 应用信息审核周期约为1-3个工作日。
- 真机调试无需添加应用。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-login/unilogin20231009-05.png)

### 安全配置

系统提供了 uniCloud 服务空间白名单安全配置，可以提高接口调用安全性，防止被他人盗用。可点击“添加”按钮，选择相应的服务空间完成添加服务空间白名单，服务空间添加成功后，只有列表中的服务空间才可以调用当前账号下的一键登录接口。此列表为空时，不校验调用方的服务空间。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-login/unilogin20231009-06.png)

### 调用记录

系统可查看一键登录调用记录，但此业务数据量较大，为了维持服务的稳定性，只能查看30天内的某1天的全部调用记录，默认选择当天。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-login/unilogin20231009-07.png)

### 调用统计

系统可查看每日调用汇总数据，包括每日请求次数、每日请求成功次数、计费金额。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-login/unilogin20231009-08.png)

### 注意事项
- 申请时的应用名称需用于应用备案审核，请填写真实的应用名称，需能够简要说明应用用途，请勿使用纯英文及测试字眼。
- 如果之前申请一键登录用的是DCloud公测证书，由于最近DCloud公测证书变更，开发者需要生成自己的证书，重新申请开通一键登录，重新制作自定义基座调试或者重新打正式包，否则会影响一键登录功能的使用。
- 如果应用发生转让，这是应用归属已发生变化，需将获取手机号的云函数中配置的账号apiKey替换为接收账号的apiKey。
- 公共测试证书仅适合应用开发期间体验测试使用，切勿用于发布正式应用！！！