## 发布付费插件

DCloud插件市场支持对uniCloud插件、原生插件设置付费销售，帮助插件作者进行技术变现；其中：

- uniCloud插件支持普通授权版、源码授权版两种形式进行售卖；[uniCloud付费插件的“源码授权版”和“普通授权版”的区别](https://ask.dcloud.net.cn/article/38040)；
- App原生插件仅支持购买授权版，不提供源码；

其他类型插件不支持计费。

插件作者在发布uniCloud插件、原生插件时，可自定义售卖价格及形式(uniCloud分类)，见下图：

![](https://web-assets.dcloud.net.cn/unidoc/zh/marketplace-publish-set-price.png)

如未设置价格，则默认为免费插件，所有用户均可下载使用；


## 版权保护和试用机制

普通前端插件因其源码开放问题，无法支持计费。

uniCloud插件的云函数部分支持源码保护，未购买源码版的用户无法获取到源码。如果是云端一体插件，其前端部分的js也支持加密混淆。但由于前端js必须运行在前端设备上，仍然存在被破解的可能性，DCloud无法承诺这种前端加密混淆无法破解。

uniCloud插件的销售和服务空间绑定。购买者购买时绑定好自己的服务空间spaceid，未经授权的服务空间无法上传加密的云函数。

app原生插件由于插件作者提交的是编译后的二进制文件，且该app插件的二进制文件在设计上不会单独被三方获取，所以可以保护安全。（也因此，本地打包不支持使用插件市场的付费app原生插件）

app原生插件的销售和客户端appid、包名绑定。购买者购买时绑定好自己的appid和包名。未经授权的appid和包名无法运行需要付费购买的app原生插件。

但DCloud为所有销售插件提供了试用机制，允许购买者先试用后付费。uniCloud插件提供了7天的试用，试用到期后会自动销毁加密云函数；app原生插件仅支持在app自定义运行基座上试用，该运行基座无法脱离HBuilder独立安装，且每次启动均有会弹出测试toast字样。


## 查看收益

用户购买插件后，插件作者可以在[销售订单列表](https://ext.dcloud.net.cn/order?pluginId=0&status=10)中查看订单流水：

![]( https://web-assets.dcloud.net.cn/unidoc/zh/marketplace-order-list-new.png)

uniCloud源码授权版需在用户及插件作者双方签署合同后方可购买，合同签署采用`e签宝`线上进行签署，具体流程参见[e签宝介绍](https://ask.dcloud.net.cn/article/37878)。

插件收益分为用户付费收益（插件销售、赞赏收益）和广告收益。每天凌晨，系统会自动统计前一天产生的用户付费收益，并于当天下午2：00后统计前一天产生的广告预估收益（可能会有相应的延迟），广告预估收益仅作为参考，实际收益以插件市场后台“付款”栏目提供的月度账单为准。插件作者可登录插件市场后台，查看每天的收益明细。
![]( https://web-assets.dcloud.net.cn/unidoc/zh/marketplace-report-list-new-2.png)

`Tips：` 好的插件及更好的售后会增加用户打赏的积极性！

## 账单结算

DCloud插件市场在每月1日出上月的月度账单，月度账单包含上月的用户付费收益（包括插件销售、赞赏收益）及上上月的广告收益，待提现的账单累计金额达到100元以上时可提现，如有多笔待提现账单可针对多笔账单进行合并提现。插件作者可登录插件市场后台，查看[月度账单](https://ext.dcloud.net.cn/manage/payment)：

![](https://web-assets.dcloud.net.cn/unidoc/zh/marketplace-bill-list.png)

DCloud会收取账单金额的15%做为服务费，然后将剩余款项支付给插件作者，具体参见[插件作者协议](https://ext.dcloud.net.cn/manage/profile)。

申请提现后，如果账号认证为企业认证，提供发票的途径在原有的线下邮寄和发送邮件基础上，新增了电子发票上传功能，插件作者可在[提现记录](https://ext.dcloud.net.cn/manage/payment-detail)中自行上传，电子发票只支持`pdf格式`：

![](https://web-assets.dcloud.net.cn/unidoc/zh/marketplace-cash-list.png)

由于DCloud要向插件作者支付款项，故需插件作者提供对应金额的发票给DCloud公司，开票信息及付款规则如下：

![](https://web-assets.dcloud.net.cn/unidoc/zh/marketplace-pay-rules-01.png)

为了更好的服务插件作者，帮助插件作者节税，插件市场引入了`云账户`，参考[云账户介绍](https://ask.dcloud.net.cn/article/37525)。

`Tips：`为了不影响收益打款，请插件作者在月初尽快提供发票，并完善[财务信息](https://dev.dcloud.net.cn/pages/user/finance)
