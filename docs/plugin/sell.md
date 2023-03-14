## 发布付费插件
## Publish paid plugins

DCloud插件市场支持对uniCloud插件、原生插件设置付费销售，帮助插件作者进行技术变现；其中：
The DCloud plug-in market supports setting up paid sales for uniCloud plug-ins and native plug-ins, helping plug-in authors to realize technology; among them:

- uniCloud插件支持普通授权版、源码授权版两种形式进行售卖；[uniCloud付费插件的“源码授权版”和“普通授权版”的区别](https://ask.dcloud.net.cn/article/38040)；
- The uniCloud plug-in supports two types of sales: ordinary authorized version and source code authorized version; [The difference between "source authorized version" and "normal authorized version" of uniCloud paid plug-in](https://ask.dcloud.net.cn/article /38040);
- App原生插件仅支持购买授权版，不提供源码；
- App native plug-ins only support the purchase of the authorized version and do not provide source code;

其他类型插件不支持计费。
Other types of plug-ins do not support billing.

插件作者在发布uniCloud插件、原生插件时，可自定义售卖价格及形式(uniCloud分类)，见下图：
When publishing uniCloud plug-ins and native plug-ins, plug-in authors can customize the sales price and form (uniCloud classification), as shown in the following figure:

![](https://web-assets.dcloud.net.cn/unidoc/zh/marketplace-publish-set-price.png)

如未设置价格，则默认为免费插件，所有用户均可下载使用；
If no price is set, the default is a free plug-in, which can be downloaded and used by all users;


## 版权保护和试用机制
## Copyright protection and trial mechanism

普通前端插件因其源码开放问题，无法支持计费。
Ordinary front-end plug-ins cannot support billing due to their open source code.

uniCloud插件的云函数部分支持源码保护，未购买源码版的用户无法获取到源码。如果是云端一体插件，其前端部分的js也支持加密混淆。但由于前端js必须运行在前端设备上，仍然存在被破解的可能性，DCloud无法承诺这种前端加密混淆无法破解。
The cloud function part of the uniCloud plug-in supports source code protection, and users who have not purchased the source code version cannot obtain the source code. If it is a cloud-integrated plug-in, the js in the front-end part also supports encryption and obfuscation. However, since the front-end js must run on the front-end device, there is still the possibility of being cracked. DCloud cannot promise that this front-end encryption confusion cannot be cracked.

uniCloud插件的销售和服务空间绑定。购买者购买时绑定好自己的服务空间spaceid，未经授权的服务空间无法上传加密的云函数。
The sales and service space of the uniCloud plugin is bound. Buyers must bind their own service space spaceid when purchasing. Unauthorized service spaces cannot upload encrypted cloud functions.

app原生插件由于插件作者提交的是编译后的二进制文件，且该app插件的二进制文件在设计上不会单独被三方获取，所以可以保护安全。（也因此，本地打包不支持使用插件市场的付费app原生插件）
App native plugins can protect security because the plugin author submits the compiled binary files, and the binary files of the app plugin are not designed to be obtained by three parties alone. (As a result, native packaging does not support native plugins for paid apps that use the plugin marketplace)

app原生插件的销售和客户端appid、包名绑定。购买者购买时绑定好自己的appid和包名。未经授权的appid和包名无法运行需要付费购买的app原生插件。
The sales of app native plugins are bound to the client appid and package name. Buyers bind their appid and package name when purchasing. Unauthorized appid and package name cannot run native app plugins that require payment.

但DCloud为所有销售插件提供了试用机制，允许购买者先试用后付费。uniCloud插件提供了7天的试用，试用到期后会自动销毁加密云函数；app原生插件仅支持在app自定义运行基座上试用，该运行基座无法脱离HBuilder独立安装，且每次启动均有会弹出测试toast字样。
But DCloud provides a trial mechanism for all sales plugins, allowing buyers to try and pay later. The uniCloud plug-in provides a 7-day trial, and the encrypted cloud function will be automatically destroyed after the trial expires; the app native plug-in only supports the trial on the app’s custom running base, which cannot be installed independently of HBuilder, and each startup will be A test toast message will pop up.


## 查看收益
## View earnings

用户购买插件后，插件作者可以在[销售订单列表](https://ext.dcloud.net.cn/order?pluginId=0&status=10)中查看订单流水：
After the user purchases the plug-in, the plug-in author can view the order flow in [Sales Order List](https://ext.dcloud.net.cn/order?pluginId=0&status=10):

![]( https://web-assets.dcloud.net.cn/unidoc/zh/marketplace-order-list-new.png)

uniCloud源码授权版需在用户及插件作者双方签署合同后方可购买，合同签署采用`e签宝`线上进行签署，具体流程参见[e签宝介绍](https://ask.dcloud.net.cn/article/37878)。
The authorized version of uniCloud source code can only be purchased after the user and the plug-in author have signed the contract. The contract signing is done online using `e-signbao`. For the specific process, see [e-signbao introduction](https://ask.dcloud.net. cn/article/37878).

每天凌晨，系统会自动统计前一天产生的收益，插件作者可登录插件市场后台，查看每天的收益明细。注意：收益分为用户付费（插件销售、赞赏收益）、广告收益；
![]( https://web-assets.dcloud.net.cn/unidoc/zh/marketplace-report-list-new-2.png)

`Tips：` 好的插件及更好的售后会增加用户打赏的积极性！
`Tips:` Good plugins and better after-sales will increase the enthusiasm of users to tip!

## 账单结算
## Billing

DCloud插件市场在每月1日出上月的月度账单，月度账单包含上月的用户付费收益（包括插件销售、赞赏收益）及上上月的广告收益，待提现的账单累计金额达到100元以上时可提现，如有多笔待提现账单可针对多笔账单进行合并提现。插件作者可登录插件市场后台，查看[月度账单](https://ext.dcloud.net.cn/manage/payment)：

![](https://web-assets.dcloud.net.cn/unidoc/zh/marketplace-bill-list.png)

DCloud会收取账单金额的15%做为服务费，然后将剩余款项支付给插件作者，具体参见[插件作者协议](https://ext.dcloud.net.cn/manage/profile)。
DCloud will charge 15% of the bill amount as a service fee, and then pay the remaining amount to the plugin author. For details, please refer to the [Plugin Author Agreement](https://ext.dcloud.net.cn/manage/profile).

申请提现后，如果账号认证为企业认证，提供发票的途径在原有的线下邮寄和发送邮件基础上，新增了电子发票上传功能，插件作者可在[提现记录](https://ext.dcloud.net.cn/manage/payment-detail)中自行上传，电子发票只支持`pdf格式`：
After applying for cash withdrawal, if the account is certified as enterprise certification, the way to provide invoices is based on the original offline mailing and sending emails, and the function of uploading electronic invoices has been added. dcloud.net.cn/manage/payment-detail), the electronic invoice only supports `pdf format`:

![](https://web-assets.dcloud.net.cn/unidoc/zh/marketplace-cash-list.png)

由于DCloud要向插件作者支付款项，故需插件作者提供对应金额的发票给DCloud公司，开票信息及付款规则如下：
Since DCloud needs to pay the plug-in author, the plug-in author needs to provide an invoice of the corresponding amount to DCloud. The invoicing information and payment rules are as follows:

![](https://web-assets.dcloud.net.cn/unidoc/zh/marketplace-pay-rules-01.png)

为了更好的服务插件作者，帮助插件作者节税，插件市场引入了`云账户`，参考[云账户介绍](https://ask.dcloud.net.cn/article/37525)。
In order to better serve plug-in authors and help plug-in authors save tax, the plug-in market has introduced `cloud account`, refer to [Cloud Account Introduction](https://ask.dcloud.net.cn/article/37525).

`Tips：`为了不影响收益打款，请插件作者在月初尽快提供发票，并完善[财务信息](https://dev.dcloud.net.cn/pages/user/finance)
