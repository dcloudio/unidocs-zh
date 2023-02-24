# uni实人认证

> uni实人认证依赖 HBuilderX 3.7.4+，目前仅支持App平台。

uni实人认证，即核验终端操作者的真实身份，搭载真人检测和人脸比对等生物识别技术，可快速校验自然人的真实身份。

uni实人认证是金融级实人认证，供应商为阿里云，背后依托公安部数据库，具备国家认可的权威资质。该产品中应用的活体防攻算法获得了 iBeta 国际安全组织最高等级的 Level2 认证，是目前中国国内少数获得此认证的产品之一，是首批获得国家面向金融行业和移动电子政务行业相关认证资质的产品。

与手机号验证不同，实人认证输入姓名+身份证号，进行人脸识别和活体检测，然后返回比对结果：即摄像头前活动的人脸，与姓名和身份证号是否匹配。
Different from mobile phone number verification, real-person authentication inputs name + ID number, performs face recognition and liveness detection, and then returns the comparison result: that is, whether the face in front of the camera matches the name and ID number.

![](https://web-assets.dcloud.net.cn/unidoc/zh/rpa/rpa_szcp.png)


## 使用要求
针对使用对象和认证对象，uni实人认证服务的使用要求如下：

**使用对象**

在使用前，请确保您已注册DCloud账号，并已完成实名认证。更多信息，请参见[uni实人认证开通指南](service.md)

**认证对象**

目前，uni实人认证服务仅支持对拥有以下证件的居民进行认证：
- 中国内地居民：第二代居民身份证。
- 中国香港、中国澳门居民：港澳居民居住证。
- 中国台湾居民：台湾居民居住证。

## 产品优势

uni实人认证具备便宜、安全、准确、稳定、实时、可靠等优势，提供多样化的产品方案和接入类型，满足您核验用户身份信息真实性的需求。
- 便宜：对比其它主流厂商的同类产品，DCloud 实人认证产品有明显的价格优势。更多信息，请参见[uni实人认证计费规则](price.md)
- 准确：十万分之一的低误识率，识别通过率超过99%。
- 安全：活体检测技术成熟，有效防止照片伪造攻击和视频攻击。
- 稳定：支持海量并发人脸比对服务，保障业务快速稳定运行。
- 可靠：海量业务检验，保障超20亿次交易安全。
- 实时：人脸比对结果1秒内返回，实时响应业务需求。
- 灵活：多种方案和接入类型，可以根据业务场景的认证需求灵活拆分或组合接入方式。


<!-- ## 基本流程

![](https://web-assets.dcloud.net.cn/unidoc/zh/rpa/rpa_ts.png) -->

## 典型场景

uni实人认证，主要用于政务和防刷。

当开发者提供促销或发放福利时，很容易被黑产褥羊毛。实人认证，搭配uniCloud[安全网络](../secure-network.md)，可以做到万无一失。
It's easy to get hacked when developers offer promotions or hand out perks. Real person authentication, combined with uniCloud [secure network](../secure-network.md), can be foolproof.

### 政务行业

典型场景：综合数字政务、疫情防疫、公积金提取、工商企业注册等。
Typical scenarios: comprehensive digital government affairs, epidemic prevention, provident fund extraction, industrial and commercial enterprise registration, etc.

响应国家号召，各地政府不断推出线上办理服务，用户可以通过政务 App 客户端，调用人脸认证服务进行身份认证，预约或者直接在线办理各项业务。
In response to the call of the country, local governments continue to launch online processing services. Users can use the government app client to call face authentication services for identity authentication, make appointments or directly handle various businesses online.

### 互联网行业

典型场景：内容发布、权益兑换风控、在线签约等。
Typical scenarios: content publishing, equity exchange risk control, online signing, etc.

- 内容发布场景：国家对互联网内容发布管理办法越来越严格，在一些社区、论坛首次发布内容时，需要有严格的身份核验。通过调用人脸认证服务进行身份实名认证，可以防止恶意灌水、发布不良内容。
- Content release scenario: The state has become more and more strict on the management of Internet content release. When publishing content for the first time in some communities and forums, strict identity verification is required. By calling the face authentication service for identity real-name authentication, malicious flooding and publishing of bad content can be prevented.
- 权益兑换场景：众多互联网权益发放和兑换平台，为防止用户“薅羊毛”，通过调用人脸认证服务，使一个身份证信息只能领取一次（无论注册多少账号），防止用户注册多个账号，绕过风控系统“薅羊毛”。
- Equity exchange scenario: Many Internet equity issuance and exchange platforms, in order to prevent users from "sweeping wool", call the face authentication service so that an ID card information can only be claimed once (regardless of how many accounts are registered), preventing users from registering multiple accounts , Bypassing the risk control system to "sweep the wool".
- 在线签约场景：在线选房、在线签约购房合同、在线签署员工股权协议等场景，都需要用户进行人脸核身。
- Online contract signing scenarios: scenarios such as online house selection, online signing of house purchase contracts, and online signing of employee equity agreements require users to perform face verification.

### 数字藏品业务

典型场景：实名认证、数字藏品抢购、银行卡绑定。
Typical scenarios: real-name authentication, snap-up of digital collections, bank card binding.

数字藏品业务涉及到在线买卖交易和数字藏品的归属，因此必须要身份核验后才能进行数字藏品收藏购买业务操作。
The digital collection business involves online buying and selling transactions and the attribution of digital collections, so identity verification must be performed before digital collection purchase business operations can be carried out.

### 保险行业

典型场景：手机绑定、投保、续保等。
Typical scenarios: mobile phone binding, insurance application, insurance renewal, etc.

新冠疫情发生以来，传统的面签购买保险模式已发生变化，投保人需通过互联网进行投保和续保，从合规方面需要对投保人进行身份核验，为防止身份伪冒造成的虚假保单，该保险公司需要高安全级别的保单身份核验能力。
Since the outbreak of the new crown epidemic, the traditional face-to-face insurance purchase model has changed. The policyholder needs to apply for and renew the insurance through the Internet. From the aspect of compliance, the identity of the policyholder needs to be verified. In order to prevent false insurance policies caused by identity forgery, the insurance Companies need high-security policy identity verification capabilities.

### 银行行业

典型场景：转账、视频柜员交易、证件变更、电子合同签约、客户开卡、征信授权、联网核查等。
Typical scenarios: transfers, video teller transactions, certificate changes, electronic contract signing, customer card opening, credit authorization, online verification, etc.

大部分一定规模的银行都已经私有化部署一套实人认证平台，维护成本高，且通过率低。银行接入云端的人脸认证服务后，整体人脸认证通过率提升明显，且风险可控。
Most banks of a certain size have already privatized and deployed a real-person authentication platform, which has high maintenance costs and a low pass rate. After the bank accesses the face authentication service in the cloud, the overall pass rate of face authentication has increased significantly, and the risks are controllable.

### 交通出行

典型场景：司机注册入驻、接单、乘客发布行程、机场安检登机、铁路安检购票、长途客运购票、边检口岸通关。
Typical scenarios: driver registration, order acceptance, passenger release itinerary, airport security boarding, railway security check ticket purchase, long-distance passenger transport ticket purchase, border inspection port customs clearance.

- 互联网出行场景：近几年出行安全事件频出，为了防止不法分子代替网约车车主接单进行违法、犯法活动，必须保证入驻的司机信息和真实跑单的是同一人。
- Internet travel scene: In recent years, travel safety incidents have occurred frequently. In order to prevent criminals from taking orders instead of online car-hailing car owners to carry out illegal and illegal activities, it is necessary to ensure that the driver information and the real person running the order are the same person.
- 传统交通出行：智慧停车，核验人车一致；乘客忘记带身份证，可通过调用人脸认证生成临时乘机（车）码。
-Traditional transportation: smart parking, verify that the passenger and the vehicle are consistent; if the passenger forgets to bring his ID card, he can generate a temporary boarding (vehicle) code by calling face authentication.

### 直播行业

典型场景：用户首次直播前实名、绑定支付、提现。
Typical scenario: user’s real name, binding payment, and cash withdrawal before the first live broadcast.

直播行业因国家强监管需要，需要留存用户身份真实信息。传统做法是要求用户提交手持证件、身份证正反面复印件，通过人工审核证明用户是身份证持有者本人，费时费力。通过调用人脸认证服务，可以大幅提升主播入驻、直播、资金交易等流程效率和体验。
The live broadcast industry needs to retain the real information of user identities due to the need for strong national supervision. The traditional method is to require the user to submit a hand-held certificate, a copy of the front and back of the ID card, and manually verify that the user is the ID card holder himself, which is time-consuming and laborious. By invoking the face authentication service, the process efficiency and experience of anchor registration, live broadcast, and capital transactions can be greatly improved.

![](https://web-assets.dcloud.net.cn/unidoc/zh/rpa/rpa_zb.png)

### 招聘行业

典型场景：提升信用分、岗位发布、简历投递、面试官身份验证。
Typical scenarios: credit score improvement, job posting, resume delivery, interviewer identity verification.

招聘平台 App，涉及到候选人简历信息的真实性、猎头和面试官的真实性，需要用户身份核验。传统手持身份证校验流程复杂，成功率低。通过接入人脸认证服务，帮助平台更精准的识别用户身份。
The recruitment platform app involves the authenticity of candidates' resume information, the authenticity of headhunters and interviewers, and requires user identity verification. The verification process of traditional handheld ID cards is complicated and the success rate is low. By accessing the face authentication service, it helps the platform to identify users more accurately.

