# uni安全专题

`灵魂拷问：你做的应用安全吗？`

## 背景
每个工程师，每个测试人员，在验收项目的时候，对功能需求的满足，心里是有底的。甚至也可以模拟大并发来测试应用的性能。

但要问你交付的应用是否安全？那不管工程师还是测试，心里都没底。

> 实现功能没问题，至于安全嘛...

安全是一个独立且专业的事情，如果不是一个优秀的黑客，很难发现应用的众多安全问题。

普通工程师和测试人员是无法达到这个水平的。

由于http的无状态特性，服务器很难识别客户端的真伪。这是一个真实请求，还是伪造的假客户端？一个貌似简单的识别问题，难住了很多人。

网络传输的数据，在中间被各种路由器和不规范的运营商偷窃和劫持。

如果您的应用有如下特征，就非常容易被黑客盯上：
1. 应用中有大量有价值的数据
2. 提供优惠、促销
3. 提供激励视频等奖励分发

攻击者为了你的数据，或者为了褥你的羊毛，可以破解你的网络请求、伪造假的客户端去请求你的服务器、用手机墙批量操作。

你原本期待给正常用户提供福利，以拉新或促活，结果一场促销后，正常用户没得到好处，全给黑客褥走了。

让普通工程师和测试人员具备黑客能力是不现实的，DCloud为开发者赋能，解决了这些安全顾虑。

## uni安全网络

在过去，客户端和服务器是强分离的，它们使用不同的技术开发，中间通过无状态的http协议交流。

现在，DCloud同时提供了端引擎uni-app和云引擎uniCloud，统一了技术栈，在uni-app开发的客户端和uniCloud开发的服务器之间，使用了更安全的网络通信机制。

> 安全网络仅支持App和微信小程序，其他小程序和web无法保证客户端不被伪造。

在uni安全网络里，可靠的解决了如下2个老大难问题：

- 如何确认这个客户端，真的是你的合法客户端？
- 客户端和服务器的通信，如何安全加密？

使用步骤：
1. 在uniCloud控制台选定服务空间，在安全网络设置页面中绑定uni-app的客户端appid
2. 使用DCloud的云打包来打包这个appid的客户端（要在manifest勾选安全网络模块）

这样，这个客户端和这个服务空间之间就建立了安全网络。云端可以准确识别客户端的真伪，可以在uniCloud控制台直接设置拒绝非法客户端连接您的服务空间。

这条安全网络，几乎不会对请求速度等性能指标产生影响，但又保证可以识别假客户端、马甲包。

另外，还可以在指定的网络请求中做内容加密。不管是云对象请求还是云函数的callFunction，都可以设置secret（一个bool参数）来对通信内容加密。

secret设为true时，这些内容将被加密传输，无法被中间的路由器或伪造客户端解密。

但注意内容加密是影响请求速度的，加解密耗时与内容的数据量有关。数据量小时，可以忽略影响；数据量大时，需自己进行实际测试来评估体验。

uni安全网络还可以鉴别客户端的包名、签名证书，识别客户端设备是否被root或越狱，禁止非法设备访问。

uni安全网络需要开发者在uniCloud上开通，但并不收费。

如此高安全的保障，在商业项目中都需要花掉不少银子来采购。但DCloud**免费**给uniCloud开发者提供。

uni云端一体安全网络文档：[详见](https://doc.dcloud.net.cn/uniCloud/secure-network.html)

## 人机验证

还有一类攻击，攻击者没有破解掉客户端和网络协议，但是用一排排手机墙。

这时，您就需要uni的[一键登录](/univerify.md)和[实人认证](https://doc.dcloud.net.cn/uniCloud/frv/intro.html)。

`一键登录`是运营商提供的安全方案，它要求手机中必须插sim卡，并且从sim中精准读取手机号，防止手机短信验证码被打码池伪造返回。

![](https://img-cdn-aliyun.dcloud.net.cn/client/doc/univerify/demo.png)

而`实人认证`更近一步，是公安部提供的数据库，阿里云提供的活体检测，金融级的安全保障。

输入姓名、身份证，然后启动摄像头，可以检测摄像头前的这个人：
1. 是活人还是静态照片
2. 这个人和指定的名字、身份证号，是否匹配

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/202302242037107.jpg)

这样手机墙的操作者，不但需要有众多手机号、身份证照片，还需要众多人站在手机墙面前做活体检测，这他就褥不着多少羊毛了。

uni的`一键登录`和`实人认证`不但和uni产品完美结合、快捷开发，还比市面上其他类似产品的价格更便宜。

- 一键登录仅需0.02元/次，比发短信验证码都便宜。

- 实人认证是阶梯价格，[详见](https://doc.dcloud.net.cn/uniCloud/frv/price.html)

这些价格都极具优势。如果您有非常大的量，还可以再联系bd@dcloud.io沟通。

不管是一键登录还是实人认证，在[uni-id](https://doc.dcloud.net.cn/uniCloud/uni-id/summary.html)里都已经内置集成好。

无需自己写代码。账户的注册、实人认证，这些代码都已经写好并开源在[uni-id-pages](https://doc.dcloud.net.cn/uniCloud/uni-id/app.html)项目中。

但是注意
::: warning
如果您没有使用uni安全网络，直接使用一键登录和实人认证。仍然会遇到被刷的风险。
因为这些认证都是收费的，如果没有安全防护，攻击者可以刷你的服务器接口，盗用你的余额来给他提供认证服务，或者干脆就是刷的让你破财。
:::

在人机验证领域，uni还提供了免费的[图形验证码](https://doc.dcloud.net.cn/uniCloud/uni-captcha.html)。

## 服务器安全

当然有的攻击者，不是为了你的数据或你的羊毛，而是单纯的就想打垮你的服务。最常见的就是DDoS攻击。

此时，如果使用uniCloud，因为域名是阿里云或腾讯云的，ip不是固定的，攻击者无法通过域名和ip单独DDoS你的服务空间。

如果让攻击者攻击整个阿里云或腾讯云的serverless资源池，那这个池子太大了，那些攻击者根本无法打垮uniCloud服务。

uniCloud还提供了[ip防刷](https://doc.dcloud.net.cn/uniCloud/ip-filter.html)功能，可以在uniCloud web控制台设置，拉黑某些ip，或者自动屏蔽指定时间内访问次数过高的ip。

如果您的应用涉及用户提交内容，那么有一个很大的风险就是用户提交非法内容，导致您的应用被公安或运营商禁封。

此时，uni的[内容安全插件](https://ext.dcloud.net.cn/plugin?id=5460)可以帮助您过滤掉用户提交的风险内容，不管是非法的文字还是图片。

## 客户端代码安全

uni-app或5+App，支持对js文件或nvue文件进行原生加密。让js代码不再明文暴露于客户端。[详见](/tutorial/app-sec-confusion.md)

DCloud联合业内主流安全厂商，提供[uni安全加固](/tutorial/app-security.md)产品，可实现移动App的安全性增强，防止应用程序被破解、篡改或重打包等各类安全破坏。它的作用是保护应用程序的安全性和用户的隐私，提高应用程序的抗攻击能力和可靠性。

**有uni保驾护航，您可以专注于业务，踏实写代码，安心交付。不用再提心吊胆、担忧各种自己不擅长的事。**

## FAQ

- 老项目服务器不是uniCloud的，怎么办？

uni安全网络只能在uni-app客户端和uniCloud服务之间保障安全。如果您的服务器在其他技术上，或者迁移到uniCloud，或者用uniCloud转发。转发的意思就是客户端和uniCloud联网，uniCloud云函数再与您的传统服务器通信。一键登录和实人认证是虽然也是uniCloud服务器，但相对独立。传统服务器可以与uniCloud通信来使用这些能力。详见附录中这些产品单独的文档。

## 附录
- uni安全网络文档：[https://doc.dcloud.net.cn/uniCloud/secure-network.html](https://doc.dcloud.net.cn/uniCloud/secure-network.html)
- app一键登录文档：[https://uniapp.dcloud.net.cn/univerify.html](https://uniapp.dcloud.net.cn/univerify.html)
- app实人认证文档：[https://doc.dcloud.net.cn/uniCloud/frv/intro.html](https://doc.dcloud.net.cn/uniCloud/frv/intro.html)
- ip防刷：[https://doc.dcloud.net.cn/uniCloud/ip-filter.html](https://doc.dcloud.net.cn/uniCloud/ip-filter.html)
- 图形验证码：[https://doc.dcloud.net.cn/uniCloud/uni-captcha.html](https://doc.dcloud.net.cn/uniCloud/uni-captcha.html)
- 内容安全审查：[https://ext.dcloud.net.cn/plugin?id=5460](https://ext.dcloud.net.cn/plugin?id=5460)
- [uni安全加固](/tutorial/app-security.md)
