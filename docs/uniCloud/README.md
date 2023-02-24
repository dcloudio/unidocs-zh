`uniCloud` 是 DCloud 联合阿里云、腾讯云，为开发者提供的基于 serverless 模式和 js 编程的云开发平台。
`uniCloud` is a cloud development platform based on serverless mode and js programming provided by DCloud and Alibaba Cloud and Tencent Cloud for developers.

`uniCloud` 的 web控制台地址：[https://unicloud.dcloud.net.cn](https://unicloud.dcloud.net.cn)
`uniCloud` web console address: [https://unicloud.dcloud.net.cn](https://unicloud.dcloud.net.cn)


### uniCloud 的价值
### uniCloud value

- 对于程序员，从此你又get一个新技能，用熟悉的js，轻松搞定前后台整体业务。
- For programmers, from now on, you can get a new skill, and use the familiar js to easily handle the overall business of the front and back.
- 对于开发商：
- For developers:
    1. 开发成本大幅下降、开发效率大幅提升、上线和迭代速度大幅提速；
    1. The development cost has been greatly reduced, the development efficiency has been greatly improved, and the launch and iteration speed has been greatly accelerated;
    2. 如果你是新创公司，将无需雇佣php或java等服务器工程师，每年至少节省几十万；
    2. If you are a start-up company, you will not need to hire server engineers such as php or java, saving at least hundreds of thousands every year;
    3. 如果你已拥有掌握php和js的全栈，那么改用新的技术栈，一样可以大幅提升开发效率、降低成本；
    3. If you already have a full stack of php and js, then switching to a new technology stack can greatly improve development efficiency and reduce costs;
    4. 你只需专注于你的业务，其他什么服务器运维、弹性扩容、大并发承载、防DDoS攻击，全都不需要操心；
    4. You only need to focus on your business, and you don't need to worry about other server operation and maintenance, elastic expansion, large concurrent load, and anti-DDoS attack;
    5. 除了开发成本，云资源租用成本也将大幅下降
    5. In addition to development costs, cloud resource rental costs will also drop significantly
    6. 如果不发布Web版，你将不需要购买备案域名。小程序和App可以免域名使用服务器；
    6. If you do not publish the web version, you will not need to purchase a registered domain name. Mini Programs and Apps can use the server without a domain name;

uniCloud为每个开发者提供一个免费服务空间，让你也可以拥有自己的服务器。
uniCloud provides a free service space for each developer, so that you can also have your own server.

### 看视频，只需25分钟，快速入门uniCloud
### Watch the video, just 25 minutes, get started quickly with uniCloud

<a target="_blank" href="https://www.bilibili.com/video/BV17p4y1a71x?p=1">
    <img src="https://web-assets.dcloud.net.cn/unidoc/zh/20210512183320.jpg" alt="uniCloud视频教程" style="width: 70%;">
    <img src="https://web-assets.dcloud.net.cn/unidoc/zh/20210512183320.jpg" alt="uniCloud video tutorial" style="width: 70%;">
</a>

### uniCloud是什么和不是什么
### what uniCloud is and is not

uniCloud是DCloud在阿里云和腾讯云的serverless服务上封装而成的。
uniCloud is a package of DCloud on the serverless services of Alibaba Cloud and Tencent Cloud.

它包含IaaS层（由阿里云和腾讯云提供硬件和网络）和PaaS层（由DCloud提供开发环境）。
It consists of IaaS layer (hardware and network provided by Alibaba Cloud and Tencent Cloud) and PaaS layer (development environment provided by DCloud).

开发者可以自主选择uniCloud的硬件和网络资源的供应商，在阿里云版和腾讯云版之间切换。
Developers can independently choose the supplier of uniCloud hardware and network resources, and switch between Alibaba Cloud Edition and Tencent Cloud Edition.

开户和付费虽然通过DCloud渠道，但实际上开发者自动在云厂商处建立了账户和充值了余额。价格是云厂商的标准定价，DCloud只获取云服务厂商的返佣。
Although account opening and payment are made through the DCloud channel, in fact, the developer automatically establishes an account and recharges the balance at the cloud vendor. The price is the standard pricing of cloud vendors, and DCloud only gets rebates from cloud service vendors.

开发时虽使用DCloud的工具，但应用上线时，手机端是直连阿里云或腾讯云的serverless，不经由DCloud的服务器。
Although DCloud's tools are used during development, when the application is launched, the mobile terminal is directly connected to Alibaba Cloud or Tencent Cloud's serverless, without going through DCloud's server.

### 什么是serverless？
### What is serverless?

serverless是目前很火的概念，它是下一代云技术，是真正的“云”。
Serverless is a very popular concept at present. It is the next generation cloud technology and a real "cloud".

传统的云服务，让开发者免于购买实体服务器硬件，改为购买虚拟机。但开发者仍然要自己装操作系统、web服务器、数据库，自己处理热备，自己新购服务器来应对高并发，自己抗DDOS攻击...
Traditional cloud services free developers from purchasing physical server hardware and instead purchase virtual machines. However, developers still have to install their own operating systems, web servers, and databases, handle hot backup by themselves, purchase new servers to deal with high concurrency, and resist DDOS attacks by themselves...

这不是成熟的“云”！
This is not a full-fledged "cloud"!

真正的云计算，就像用水用电，没有复杂的门槛，即用即有、按需付费。
True cloud computing is like using electricity and water. There are no complicated thresholds. It is available and paid on demand.

简单回顾下用电的历史。几十年前，很多单位都有专门管电的工程师，当单位的电力负荷不够时，就需要找这个管电的工程师扩容发电机。
Briefly review the history of electricity consumption. A few decades ago, many units had engineers specializing in power management. When the power load of the unit was not enough, it was necessary to find this engineer to expand the generator capacity.

现在这个管电工程师的岗位已经淘汰了，电已经变成随用随取、按需付费了。
Now the post of electrical engineer has been eliminated, and electricity has become on-demand and pay-as-you-go.

传统云模式下，开发商仍然需要一个管服务器的工程师，当用户量激增或被攻击时，甚至需要半夜把工程师叫醒来扩容。这当然不合理。
In the traditional cloud model, developers still need an engineer to manage the server. When the number of users surges or is attacked, they even need to wake up the engineer in the middle of the night to expand the capacity. This is of course unreasonable.

serverless的云，真正的把计算、存储的能力进行了云化，开发者只需要按量租用这些计算和存储能力，再也不用关心扩容和攻击。
The serverless cloud truly cloudifies the computing and storage capabilities. Developers only need to rent these computing and storage capabilities according to the amount, and no longer need to worry about expansion and attacks.

开发者不再有“服务器”的概念，因为没有一台具体的机器。就像现在的你再也找不到自己的发电机一样。
Developers no longer have the concept of a "server" because there is no specific machine. Just like now you can't find your own generator anymore.

当用户量激增时，开发者什么都不用做，系统自动承载更高并发。开发者只需要按照对资源的消耗付费即可。
When the number of users surges, developers don't have to do anything, and the system automatically carries higher concurrency. Developers only need to pay according to the consumption of resources.

同理，如果没有用户使用，即没有资源消耗，则根本无需为云资源付费。
Similarly, if there is no user usage, that is, no resource consumption, there is no need to pay for cloud resources at all.

开发者写好云端业务代码，即js编写的云函数，通过HBuilderX部署到uniCloud上即可。
Developers write cloud business code, that is, cloud functions written in js, and deploy them to uniCloud through HBuilderX.

云端庞大的serverless资源池，有无数个node进程待命。当手机用户发起请求时，serverless系统会调配闲置的资源来运行开发者相应的云函数。
The huge serverless resource pool in the cloud has countless node processes on standby. When a mobile phone user initiates a request, the serverless system will allocate idle resources to run the developer's corresponding cloud function.

- serverless，让一个不懂服务器运维的开发者，可以只处理自己的业务，再不用关心热备、负载、增容、DDOS等事情。
- serverless, so that a developer who does not understand server operation and maintenance can only handle his own business, and no longer need to care about hot backup, load, capacity expansion, DDOS and other things.
- serverless，让一个学生，也可以享受世界最顶级的IT基础设置。
- Serverless, so that a student can also enjoy the world's top IT infrastructure.

serverless在国外兴起，但国内的发展速度已经超过了国外。微信、支付宝、百度、字节跳动、快应用联盟都上线了自己的serverless云开发。
Serverless is emerging in foreign countries, but the domestic development speed has surpassed that of foreign countries. WeChat, Alipay, Baidu, ByteDance, and Kuaishou Alliance have all launched their own serverless cloud development.

目前国内已经有超过60万开发者在使用serverless云开发，包括腾讯、阿里、DCloud的很多自有业务都在使用。
At present, more than 600,000 developers in China are using serverless cloud development, including many self-owned businesses of Tencent, Alibaba, and DCloud.

就像uni-app可跨端一样，uniCloud可跨云。基于uniCloud，无需担心使用云开发被绑定到专用的小程序平台。uni-app + uniCloud 是跨端跨云的开发方案。
Just like uni-app can be cross-end, uniCloud can be cross-cloud. Based on uniCloud, there is no need to worry about using cloud development to be bound to a dedicated applet platform. uni-app + uniCloud is a cross-end and cross-cloud development solution.

### uniCloud为何可降低云服务租用成本@lowprice

**1、传统云服务的租用，按占用的硬件资源的上限值+固定时长来租用。**
**1. The lease of traditional cloud services is based on the upper limit of the occupied hardware resources + a fixed duration. **

传统云是按配置买服务器，买了之后不管用不用都要交钱。而serverless是按量计费，如果没有使用，一分钱都不用交。
The traditional cloud is to buy servers according to the configuration, and after buying, you have to pay whether you use it or not. And serverless is billed by volume, if you don't use it, you don't have to pay a penny.

传统云选择CPU和内存的配置，不到满配时，资源是浪费的，接近满配就需要立即扩容新的配置。
The traditional cloud chooses the configuration of CPU and memory. When the configuration is less than full, resources are wasted. When it is close to full configuration, a new configuration needs to be expanded immediately.

serverless不是传统云，它不需要开发者选择CPU和内存配置，也没有操作系统的选择。开发者编写云函数代码，上传到uniCloud的阿里云版或腾讯云版。
Serverless is not a traditional cloud, it does not require developers to choose CPU and memory configuration, and there is no choice of operating system. The developer writes the cloud function code and uploads it to the Alibaba Cloud version or Tencent Cloud version of uniCloud.

阿里云和腾讯云搭建了巨大的serverless资源池，有众多node进程用于云函数的运行。
Alibaba Cloud and Tencent Cloud have built a huge serverless resource pool, and many node processes are used to run cloud functions.

这些资源是复用和共享的，并不存在某个开发者租用了3G CPU和8G内存，这些硬件就只能为他所用。
These resources are reused and shared. There is no one developer who rents 3G CPU and 8G memory, and these hardware can only be used by him.

因为共享大资源池，云服务厂商的成本大幅下降，开发者无需为闲置资源付费，云函数被调用才计费。
Because of sharing a large resource pool, the cost of cloud service providers is greatly reduced, and developers do not need to pay for idle resources, and cloud functions are only billed when they are called.

从技术原理上serverless就有明显成本优势，所以租用serverless比租用传统云要便宜的多。
From a technical point of view, serverless has obvious cost advantages, so renting serverless is much cheaper than renting traditional cloud.

**2、没有名目繁多的收费项**
**2. There are no numerous charging items**

在传统云的世界里，有大量的收费产品。
In the world of traditional cloud, there are a plethora of premium offerings.

在阿里云和腾讯云的官网可以看到长长的收费产品列表，比如负载均衡、高防、cdn回源、安全中心...
On the official websites of Alibaba Cloud and Tencent Cloud, you can see a long list of paid products, such as load balancing, high defense, CDN back-to-source, security center...

这个计费项又贵又让开发者头晕。在uniCloud的世界，简单清晰，**没有这些收费项**。
This billing item is expensive and makes developers dizzy. In the world of uniCloud, it is simple and clear, **there are no such fees**.

只需按对计算资源、存储资源的消耗计费，只需关心业务，无需关心其他各种名目的增值产品，也无需为它们付费。
You only need to pay for the consumption of computing resources and storage resources, you only need to care about the business, and you don't need to care about other value-added products in various names, and you don't need to pay for them.

要知道一个用于防DDoS的高防套餐，每个月至少几万元。而这些费用，在uniCloud中无需支付。
You must know that a high-defense package for anti-DDoS is at least tens of thousands of yuan per month. And these fees do not need to be paid in uniCloud.

展开说下uniCloud为什么不用买高防也不害怕DDoS：由于阿里云和腾讯云的serverless有巨大的资源池，且serverless没有固定ip，云函数使用的是阿里云和腾讯云的自有域名，前端网页托管在cdn上，DDoS攻击者打不起、也打不挂uniCloud。
Let's talk about why uniCloud does not need to buy high defense and is not afraid of DDoS: Because Alibaba Cloud and Tencent Cloud's serverless have huge resource pools, and serverless does not have a fixed IP, cloud functions use Alibaba Cloud and Tencent Cloud's own domain names, front-end Web pages are hosted on CDNs, and DDoS attackers can't fight or hang up uniCloud.

**3、云厂商的补贴优惠**
**3. Subsidy discounts for cloud vendors**

uniCloud阿里云版为每个开发者提供1个免费的服务空间。传统云可没有这种优惠。
uniCloud Alibaba Cloud Edition provides one free service space for each developer. Traditional clouds don't have this perk.

**4、DCloud的议价能力**

DCloud拥有国内广泛的开发者，可以与云厂商谈判拿到非常低的价格。所以不管是服务器计算资源、还是短信、实人认证、一键登陆等云能力，uniCloud里的定价均低于阿里腾讯等云厂商的定价。

基于以上4点原因，uniCloud大幅降低了开发者云资源的租用成本。

除了云资源的成本，uniCloud还可以减少开发商的人工成本、招聘成本、沟通管理成本，这些成本更远大于云资源成本。
In addition to the cost of cloud resources, uniCloud can also reduce the labor cost, recruitment cost, and communication management cost of developers, which are far greater than the cost of cloud resources.

### uniCloud降低前端掌握后端的门槛@onejs

前端工程师想掌握后端开发，有6大门槛：
Front-end engineers want to master back-end development, there are 6 major barriers:
- 学习php、java等非js的语言
- Learn non-js languages such as php and java
- 学习数据库设计
- Learn database design
- 学习SQL
- Learn SQL
- 学习linux、nginx等系统和三方软件
- Learn linux, nginx and other systems and third-party software
- 学习服务器运维：熟悉负载均衡、大并发处理。了解各种复杂的云厂商产品目录和报价
- Learning server operation and maintenance: familiar with load balancing and large concurrent processing. Understand various complex cloud vendor product catalogs and quotes
- 学习系统安全：避免业务安全漏洞（权限漏洞、防SQL注入）、操作系统和三方软件补丁、DDoS等网络攻击
- Learn system security: avoid business security vulnerabilities (permission vulnerabilities, anti-SQL injection), operating system and third-party software patches, DDoS and other network attacks

而有了uniCloud，这些门槛全都降了下去：
With uniCloud, these thresholds are all lowered:
1. uniCloud采用js编写后端服务代码，无需单独学习php或java，甚至也无需提前掌握nodejs。看下uniCloud的api文档即可。
1. uniCloud uses js to write back-end service code, no need to learn php or java separately, or even to master nodejs in advance. Just look at the api documentation of uniCloud.
2. uniCloud基于serverless，开发者无需了解linux、nginx，无需熟悉负载均衡、大并发处理，不用关心系统补丁和DDoS攻击，只需要用js写好云端业务代码，上传到uniCloud即可。
2. uniCloud is based on serverless. Developers do not need to understand linux, nginx, or be familiar with load balancing, large concurrency processing, or care about system patches and DDoS attacks. They only need to write cloud business code in js and upload it to uniCloud.
3. uniCloud推出了[opendb](opendb.md)，包含了大量的开源数据库模板，常见数据表无需自己设计。通过opendb模板，开发者可以快速掌握数据库设计。
3. uniCloud launched [opendb](opendb.md), which contains a large number of open source database templates, and common data tables do not need to be designed by yourself. Through the opendb template, developers can quickly master database design.
4. SQL在过去也需要单独学习，尤其是复杂的联表查询、Tree查询，掌握很不容易。uniCloud推出了JQL（Javascript Query Language），会js即可掌握数据库查询，更对联表查询、Tree查询提供了非常简便的操作封装。
4. SQL also needs to be learned separately in the past, especially complex join table query and Tree query, which is not easy to master. uniCloud has launched JQL (Javascript Query Language), which can master database query by knowing js, and also provides a very simple operation package for linked table query and tree query.
5. uniCloud提供了[uni-id](uni-id-summary.md)，无需自己开发账户体系，登录、注册、修改密码、角色权限体系、token管理一应俱全。
5. uniCloud provides [uni-id](uni-id-summary.md), no need to develop an account system by yourself, login, registration, password modification, role permission system, and token management are all available.
6. uniCloud在[DB Schema](schema.md)中提供了与[uni-id](uni-id-summary.md)的角色权限体系配套的数据权限控制方案。这套方案让初学者也不会在权限控制中犯错。
6. uniCloud provides a data permission control scheme in [DB Schema](schema.md) that matches the role permission system of [uni-id](uni-id-summary.md). This solution allows beginners to not make mistakes in permission control.
在一目了然的权限配置清单中可以轻松发现漏做的事情，比以往在大坨php代码中分析是否存在权限漏洞要简单的多。
In the clear permission configuration list, you can easily find out what you have missed, which is much simpler than analyzing whether there is a permission vulnerability in the big php code in the past.
这套方案还能让多人协作、或项目二次开发变的更容易，因为规范的存在，新人可以轻易读懂老代码的权限体系逻辑。
This solution also makes it easier for multiple people to collaborate, or for the secondary development of the project. Because of the existence of specifications, newcomers can easily understand the logic of the permission system of the old code.

所以说，uniCloud是前端变全栈的最佳机会，只需花点时间熟读uniCloud的文档，你就可以成为全栈！
So, uniCloud is the best opportunity for the front-end to become a full-stack. Just spend some time reading the uniCloud documentation, and you can become a full-stack!


### uniCloud如何提升10倍开发效率？@fastdev

uniCloud最吸引人的是，它将开发效率提升了10倍以上。
The most attractive thing about uniCloud is that it improves development efficiency by more than 10 times.

在uniCloud推出的3年时间里，uni-app + uniCloud 已经变成了一个庞大的生态。包括非常多的工具、模块。
In the three years since uniCloud was launched, uni-app + uniCloud has become a huge ecosystem. Including a lot of tools, modules.

开发效率提升10倍，并非某个杀手功能的功劳，而是庞大的生态共同的作用。本章节篇幅较长，请耐心阅读。
The 10-fold increase in development efficiency is not due to a certain killer function, but the common effect of a huge ecosystem. This chapter is long, please read it with patience.

![](https://web-assets.dcloud.net.cn/unidoc/zh/c50d2741-6a47-4dcd-a02c-fdd683fa4ea4.png)

#### 一个故事
#### a story

2020年初，uniCloud刚发布，新冠肺炎突然来袭，各地涌现大量抗疫项目需求。
At the beginning of 2020, uniCloud was just released, the new crown pneumonia suddenly hit, and a large number of anti-epidemic projects emerged in various places.

uni-app + uniCloud成为大家和病毒抢时间的重要利器。
uni-app + uniCloud has become an important tool for everyone and viruses to grab time.

各地迅速涌现了数百个基于uni体系的抗疫项目。详见：[https://www.dcloud.io/ncp.html](https://www.dcloud.io/ncp.html)
Hundreds of anti-epidemic projects based on the uni system have sprung up everywhere. For details, see: [https://www.dcloud.io/ncp.html](https://www.dcloud.io/ncp.html)

当时一个抗疫项目的开发，仍然需要几十人天。
At that time, the development of an anti-epidemic project still required dozens of man-days.

以[出入管理登记](https://gitee.com/dcloud/xinguan2020-alien-registration)的项目为例，第一版做了10天，有4-5位全职或兼职工程师参与。
Taking the project of [Access Management Registration](https://gitee.com/dcloud/xinguan2020-alien-registration) as an example, the first version was done for 10 days, and 4-5 full-time or part-time engineers participated.

一年后的2021年春节，各地又大量出现了[返乡人员信息登记](https://gitee.com/dcloud/returnees)的需求。
One year later, in the Spring Festival of 2021, the demand for [returnees information registration](https://gitee.com/dcloud/returnees) appeared in large numbers in various places.

项目需求类似，但此时的uniCloud生态建设已经完善，基于各种利器，返乡人员登记系统的开发人天数大幅削减，只花费0.0625人天！
The project requirements are similar, but the uniCloud ecological construction has been completed at this time. Based on various tools, the number of developer days for the returnee registration system has been greatly reduced, and it only costs 0.0625 person-days!

1年时间，开发效率提升了将近1000倍！
In one year, the development efficiency has increased by nearly 1000 times!

uni云端一体生态的内容太多，让我们抽丝剥茧、归纳分类，以容易理解的方式讲解开发效率是怎么提升的。
There is too much content in the uni cloud integrated ecology. Let us take a look at it, summarize and classify it, and explain how to improve the development efficiency in an easy-to-understand way.

开发效率提升，分8个层次：
Development efficiency is improved, divided into 8 levels:
1. 提供众多现成轮子，不用自己写代码
1. Provide many ready-made wheels, no need to write code yourself
2. 如果没有现成轮子，那么用[schema2code](schema2code.md)代码生成工具，生成数据库的增删改查页面（是直接生成页面，不是生成接口）
2. If there is no ready-made wheel, then use the [schema2code](schema2code.md) code generation tool to generate the addition, deletion, modification, and checking pages of the database (the pages are generated directly, not the interface)
3. 如果schema2code搞不定，需要手写代码，那么使用[clientDB](clientdb.md)，将节省80%的服务端开发工作
3. If schema2code can’t be done and you need to write code, then using [clientDB](clientdb.md) will save 80% of the server development work
4. 如果仍然需要写云端代码，那么云对象让你的开发更简单
4. If you still need to write cloud code, then cloud objects make your development easier
5. HBuilderX在云端协同中提供工具助力
5. HBuilderX provides tool assistance in cloud collaboration
6. 端和云的语言统一，提高了沟通效率、招聘效率
6. The language of the terminal and the cloud is unified, which improves the efficiency of communication and recruitment
7. 代码量的减少到原来的十分之一，让code review效率和测试的效率也提升了十倍
7. The amount of code is reduced to one-tenth of the original, which increases the efficiency of code review and testing tenfold
8. serverless让开发者专注于业务，无需分心运维
8. Serverless allows developers to focus on business without distracting operation and maintenance

我们来依次展开介绍每一层。
Let's expand on each layer in turn.

#### 第一层提效：提供众多现成的轮子
#### The first layer of efficiency improvement: provide many ready-made wheels

这是云端一体生态里最容易理解的价值：大量开源模块。
This is the most easily understood value in the cloud-integrated ecosystem: a large number of open source modules.

以前的开源模块，基本端是端、云是云，没听说过云端一体的开源模块。
In the previous open source modules, the basic end is the end, the cloud is the cloud, and I have never heard of an open source module that integrates the cloud.

以用户模块为例，其实它有前端、也有云端。前端有注册、登录、修改密码等页面，云端有对应的逻辑代码和数据库。
Taking the user module as an example, it actually has a front end and a cloud. The front end has pages for registration, login, and password modification, and the cloud has corresponding logic codes and databases.

现在有了uni-id，一个开源的、功能完善的、云端一体的用户模块。立即节省数人月的开发工作量。
Now there is uni-id, an open source, full-featured, cloud-integrated user module. Instantly save man-months of development effort.

下面列举些常用的轮子
Listed below are some commonly used wheels

**1. 官方维护的插件**
**1. Officially maintained plugins**

- uni-id：不用再开发用户系统。用户注册、登录（含社交登录、短信验证码登录、App一键登录）、修改或重置密码、token管理、图形验证码、RBAC权限角色系统...所有与用户相关的，不管前端还是云端，代码都是现成的。[详见](/uniCloud/uni-id-summary)
- uni-id: No need to develop user systems. User registration, login (including social login, SMS verification code login, App one-click login), password modification or reset, token management, graphic verification code, RBAC permission role system...all related to users, regardless of front-end or cloud , the code is readily available. [See details](/uniCloud/uni-id-summary)
- uni-pay：不管微信还是支付宝，不管App、微信小程序、还是支付宝小程序，不管前端还是服务端，一切都现成的，拿来即用。[详见](unipay.md)
- uni-pay: No matter WeChat or Alipay, no matter App, WeChat applet, or Alipay applet, no matter front-end or server, everything is ready-made and ready to use. [See details](unipay.md)
- uni-starter：云端一体应用快速开发基本项目模版，实现快速搭建一款应用。它集成了很多通用的功能，比如登录注册、头像、设置、拦截器、banner...[详见](https://ext.dcloud.net.cn/plugin?id=5057)
- uni-starter: A basic project template for rapid development of cloud-integrated applications to quickly build an application. It integrates many common functions, such as login registration, avatar, settings, interceptor, banner... [see details](https://ext.dcloud.net.cn/plugin?id=5057)
- uni-admin：全端可用的admin后台。自带用户管理、权限管理、角色管理、菜单管理、业务图表统计。更有众多admin插件，比如cms插件、push、banner管理插件、App升级管理插件...[详见](admin.md)
- uni-admin: An admin background that is available on all sides. It comes with user management, authority management, role management, menu management, and business chart statistics. There are also many admin plugins, such as cms plugin, push, banner management plugin, App upgrade management plugin... [See details](admin.md)
- uni-search：云端一体搜索。搜索页面、输入联想、搜索历史记录、热搜词分析提取...一应俱全。[详见](https://ext.dcloud.net.cn/plugin?id=3851)
- uni-search: Cloud unified search. Search pages, input associations, search history, analysis and extraction of hot search words... everything is available. [See details](https://ext.dcloud.net.cn/plugin?id=3851)
- uni-file-picker：前端直传uniCloud存储组件。[详见](https://ext.dcloud.net.cn/plugin?id=4079)
- uni-file-picker: The front-end directly transmits the uniCloud storage component. [See details](https://ext.dcloud.net.cn/plugin?id=4079)
- uni-captcha：云端一体图形验证码组件。[详见](https://ext.dcloud.net.cn/plugin?id=4048)
- uni-captcha: cloud-integrated graphic captcha component. [See details](https://ext.dcloud.net.cn/plugin?id=4048)
- uni-sec-check：免费的内容安全审查，防止用户提交违法的文字或图片。[详见](https://ext.dcloud.net.cn/plugin?id=5460)
- uni-sec-check: Free content security review to prevent users from submitting illegal text or images. [See details](https://ext.dcloud.net.cn/plugin?id=5460)
- uni-upgrade-center：App升级中心。支持整包升级、wgt热更新；支持直接下载安装包或跳转应用商店。[详见](upgrade-center.md)
- uni-upgrade-center: uni-upgrade-center. Support package upgrade, wgt hot update; support direct download of installation package or jump to the app store. [See details](upgrade-center.md)
- uni-push2：云端一体的推送，大幅简化推送开发。[详见](/unipush-v2.md)
- uni-push2: Cloud-integrated push, which greatly simplifies push development. [See details](/unipush-v2.md)
- uni-im：开源IM。[详见](uni-im.md)
- uni-im: open source IM. [See details](uni-im.md)

**2. 社区的优秀插件**
**2. Excellent plugins from the community**

- cms
- 城市选择
- city selection
- banner管理
- banner management
- 留言反馈
- feedback
- 日志管理
- log management
- 敏感词过滤
- Sensitive word filtering

**3. 项目模板**
**3. Project Template**

上面的轮子，是与业务无关的通用轮子。除此之外，还有大量的云端一体的项目模板。
The wheel above is a general-purpose wheel that has nothing to do with business. In addition, there are a large number of cloud-integrated project templates.
使用这些现成的项目模板，那开发效率更是极大幅的提升。过去5、6人月的项目，现在几天就能搞定上线！
Using these ready-made project templates, the development efficiency is greatly improved. Projects that took 5 or 6 person-months in the past can now be launched in a few days!

|				|			|					|
|--				|--			|--					|
|电商			|博客		|排班				|
|E-commerce |Blog |Scheduling |
|网赚合成游戏	|社交		|预约预订			|
|Net Earning Synthetic Game |Social |Reservation |
|O2O			|短视频		|家谱				|
|O2O |Short Video |Family Tree |
|外卖			|音乐		|头像挂件			|
| Takeaway | Music | Avatar Pendant |
|影视			|记账		|人像抠图、漫画脸	|
|Film |Accounting |Portrait Cutout, Comic Face |
|新闻			|考勤打卡	|红包封面			|
|News |Attendance punch card |Red envelope cover |


在这里，我们还必须提到2个新概念：`uni_module`和`datacom`。
Here we also have to mention 2 new concepts: `uni_module` and `datacom`.
- uni_module：云端一体组件最佳的承载方式。传统的npm无法处理云端一体的需求，把前端和云端的代码，一起打包到一个`uni_module`中，整体传播与发布，对云端一体组件的生态有重大的帮助。[详见](https://uniapp.dcloud.net.cn/uni_modules)
- uni_module: The best way to carry cloud-integrated components. Traditional npm cannot handle the requirements of cloud integration. The front-end and cloud code are packaged together into a uni_module for overall dissemination and release, which is of great help to the ecology of cloud-integrated components. [See details](https://uniapp.dcloud.net.cn/uni_modules)
- datacom：datacom是一种在前端绑定后端数据源的组件。[详见](https://uniapp.dcloud.net.cn/component/datacom)
- datacom: datacom is a component that binds back-end data sources on the front-end. [See details](https://uniapp.dcloud.net.cn/component/datacom)

优良的模块化方案让生态越发繁荣。
Excellent modular solutions make the ecology more and more prosperous.

#### 第二层提效：schema2code自动生成代码
#### The second layer of efficiency: schema2code automatically generates code

如果在第一层提效中，找不到现成的轮子，需要自己写代码时。那么首先要做的，是使用[schema2code](schema2code.md)这个神器，自动生成代码。
If you can't find a ready-made wheel in the first layer of efficiency improvement, you need to write your own code. So the first thing to do is to use the artifact [schema2code](schema2code.md) to automatically generate code.

uniCloud云数据的schema，是一项重要的创新。
The schema of uniCloud cloud data is an important innovation.
为数据表编写schema，可以实现非常多功能：数据结构定义、权限管理、数据值域管理，以及非常神奇的功能 -- 《[schema2code](schema2code.md)》
Writing a schema for a data table can achieve very many functions: data structure definition, permission management, data range management, and very magical functions -- "[schema2code](schema2code.md)"

在传统开发中，有了数据库，可以生成crud后台接口。然后前端再写代码调用接口。
In traditional development, with the database, the crud background interface can be generated. Then the front end writes code to call the interface.

但在uni云端一体生态中，有了数据库的schema，可以直接生成云端一体的页面。而不仅仅是只生成接口。
However, in the uni cloud-integrated ecosystem, with the schema of the database, a cloud-integrated page can be generated directly. Instead of just generating just the interface.

[schema2code](schema2code.md)，可以生成手机端的列表、详情或增删改页面，也可以生成admin管理端的所有数据管理功能的页面。
[schema2code](schema2code.md), can generate the list, details or add, delete and modify pages on the mobile phone, and can also generate pages for all data management functions on the admin management side.

如下是[schema2code](schema2code.md)的操作演示视频：
The following is the operation demonstration video of [schema2code](schema2code.md):

<video style="width:50vw;height:28vw;" id="video" preload="none" controls="controls"
	poster="https://web-assets.dcloud.net.cn/unidoc/zh/create-schema2code.jfif" src="https://web-assets.dcloud.net.cn/unidoc/zh/create-schema2code-video.mp4"></video>


可以实战体验这个[云端一体通讯录](https://ext.dcloud.net.cn/plugin?id=2574)的项目，几乎没有单独写代码。设计好通讯录的表schema，用[schema2code](schema2code.md)即可生成这个项目。
You can actually experience this project of [Cloud Integration Address Book](https://ext.dcloud.net.cn/plugin?id=2574), and almost no code is written alone. After designing the table schema of the address book, use [schema2code](schema2code.md) to generate this project.

前述提到的返乡人员管理项目，之所以只花费了半小时就可以做好，也是[schema2code](schema2code.md)的功劳。
The above-mentioned management project for returnees can be completed in only half an hour, which is also the credit of [schema2code](schema2code.md).

数据的权限管理也很简单，在schema中可以快速定义指定的数据记录或字段，只能由什么样角色或权限的人来操作。
Data rights management is also very simple. In the schema, you can quickly define the specified data records or fields, which can only be operated by people with what roles or rights.

数据入库的值域校验就更简单了。传统开发中，一个手机号的校验，需要在前端页面写一遍，服务器入库前再检查一遍，很多余。既然云端协同了，自然会优化掉这个问题。
The range verification of data storage is simpler. In traditional development, the verification of a mobile phone number needs to be written on the front-end page and checked again before the server is stored, which is redundant. Now that the cloud is coordinated, this problem will naturally be optimized.

现在只需在DB Schema中定义好手机号这个字段的可选值域，比如一个正则，那么[schema2code](schema2code.md)将自动生成前端表单，且遵循schema的定义，只接受相同正则。
Now you only need to define the optional value field of the mobile phone number field in the DB Schema, such as a regular, then [schema2code](schema2code.md) will automatically generate the front-end form, and follow the definition of the schema, only accept the same regular.

这样不但提高了开发效率，还可以避免传统开发中各种漏洞，保持严谨和一致性。
This not only improves development efficiency, but also avoids various loopholes in traditional development and maintains rigor and consistency.

[schema2code](schema2code.md)生成的代码清晰易读，易于二次开发。这比低代码平台更有效率、且完全开放开源，随意扩展。
The code generated by [schema2code](schema2code.md) is clear and easy to read and easy for secondary development. This is more efficient than low-code platforms, and is completely open and open source, free to expand.


#### 第三层提效：clientDB，让服务器代码减少80%
#### The third layer of efficiency: clientDB, reducing server code by 80%

如果schema2code仍不能满足你的需求，需要单独开发，那么只要操作数据库，[clientDB](https://uniapp.dcloud.net.cn/uniCloud/clientdb)就是推荐使用的利器。
If schema2code still cannot meet your needs and needs to be developed separately, as long as you operate the database, [clientDB](https://uniapp.dcloud.net.cn/uniCloud/clientdb) is the recommended tool.

传统开发中，前端写request联网，后台写接收请求去查库，再返给前端，然后前台再绑定到data上....天天干这么枯燥的事情不烦吗？
In traditional development, the front-end writes requests for networking, the back-end writes and receives requests to check the database, returns them to the front-end, and then binds the data to the front-end... Isn't it annoying to do such a boring thing every day?

uni-app提供了`<unicloud-db>`组件（代码块触发键是udb），在前端直接访问数据库，前所未有的高效和简洁，在大多数场景下完全不用写服务器代码！
uni-app provides the `<unicloud-db>` component (the trigger key of the code block is udb), which directly accesses the database on the front end, which is unprecedentedly efficient and concise, and does not need to write server code in most scenarios!

比如uniCloud的云数据库有个user表，里面有字段id、name，查询id=1的用户数据，把名字显示在界面上，写法如下：
For example, the cloud database of uniCloud has a user table, which contains fields id and name, query the user data with id=1, and display the name on the interface, which is written as follows:

```html
<template>  
  <view>  
    <unicloud-db v-slot:default="{data, loading, error, options}" collection="user" field="name" :getone="true" where="id=='1'">  
      <view>  
          {{ data.name}}  
      </view>  
    </unicloud-db>  
  </view>  
</template>
```

是的，仅需5行代码，就可以完成过去前后端合计得写几十行代码才能完成的事情，代码量大幅减少到原来的十分之一。
Yes, with only 5 lines of code, it is possible to complete what used to be done by writing dozens of lines of code in the front and back ends, and the amount of code is greatly reduced to one-tenth of the original.

无需担心前端直接访问数据库会造成安全隐患，上一节提过了DB Schema，在云端的schema中可以定义什么角色可以操作数据库。[详见](schema.md#permission)
There is no need to worry that the front-end directly accessing the database will cause security risks. The DB Schema was mentioned in the previous section. In the schema of the cloud, you can define what roles can operate the database. [See details](schema.md#permission)

clientDB技术，有前端的[JS API](clientdb.md)和[前端组件](unicloud-db.md)，为了进一步提高开发效率，clientDB还提供了几大利器：
The clientDB technology includes front-end [JS API](clientdb.md) and [front-end components] (unicloud-db.md). In order to further improve development efficiency, clientDB also provides several major tools:
[JQL](jql.md)是一种基于js的数据库操作语言，它改进了SQL语言的诸多不便之处。
[JQL](jql.md) is a js-based database manipulation language, which improves many inconveniences of SQL language.
- 在传统mysql或MongoDB中，联表查询的写法非常麻烦，tree查询mysql根本没有，需要oracle等专业数据库。但在uniCloud中，只需在数据库的schema中定义两个表的字段之间的关系，比如是引用关系（foreignKey）、还是父子关系(parentKey)，前端就可以直接查询，轻松完成[联表查询](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=lookup)和[tree查询](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=gettree)
- In traditional mysql or MongoDB, it is very troublesome to write a table query. There is no tree query mysql at all, and a professional database such as oracle is required. But in uniCloud, you only need to define the relationship between the fields of the two tables in the schema of the database, such as the reference relationship (foreignKey), or the parent-child relationship (parentKey), the front-end can directly query, and easily complete [join table query] ](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=lookup) and [tree query](https://uniapp.dcloud.net.cn/uniCloud/clientdb?id=gettree)
- SQL语言的运算方法非常少，而JQL则提供了大量的运算方法，比如日期运算dayOfMonth()、字符串操作方法substr()、数字运算方法add()...可以对数据库字段的值直接进行运算和筛选。比如对数据库2个字段进行加权求和然后排序，这传统的SQL语句可搞不定了
- There are very few operation methods in the SQL language, while JQL provides a large number of operation methods, such as date operation dayOfMonth(), string operation method substr(), number operation method add()... You can directly manipulate the value of database fields Compute and filter. For example, weighted summation of two fields in the database and then sorting, this traditional SQL statement can not be solved

可以看出，在uni云端一体生态中，开发者不但提高了效率、减少了成本，还得到了更强大的赋能工具。
It can be seen that in the uni cloud integrated ecosystem, developers not only improve efficiency and reduce costs, but also get more powerful enabling tools.

#### 第四层提效：云对象，改变前后端协同
#### Fourth layer efficiency improvement: cloud objects, changing front-end and back-end collaboration

如果clientDB仍然不能满足需求，必须编写云端代码，那么[云对象](cloud-obj.md)的出现，彻底改变了后端开发json接口和前端联调的低效局面。
If clientDB still cannot meet the requirements and must write cloud code, the emergence of [cloud object](cloud-obj.md) has completely changed the inefficient situation of back-end development of json interface and front-end joint debugging.

[云对象](cloud-obj.md)把云端的代码变成对象方式，让前端js直接import这个对象，然后使用这个对象的方法，就像使用前端的js对象一样顺畅。
[Cloud Object](cloud-obj.md) Change the code in the cloud into an object method, let the front-end js directly import this object, and then use the method of this object, just like using the front-end js object.

云端新加一个`todo`云对象，写一个add方法，代码如下：
Add a `todo` cloud object to the cloud, write an add method, the code is as follows:
```js
// 云对象名：todo
// Cloud object name: todo
module.exports = {
	add(title, content) {
		title = title.trim()
		content = content.trim()
		if(!title || !content) {
			return {
				errCode: 'INVALID_TODO',
				errMsg: 'TODO标题或内容不可为空'
			}
		}
		// ...其他逻辑
		// ...other logic
		return {
			errCode: 0,
			errMsg: '创建成功'
		}
	}
}
```

然后在客户端的js中，import这个`todo`对象，调用它的add方法
Then in the client-side js, import the `todo` object and call its add method

```js
const todo = uniCloud.importObject('todo') //第一步导入云对象
async function addTodo () {
	try {
		const res = await todo.add('title demo', 'content demo') //导入云对象后就可以直接调用该对象的方法了，注意使用异步await
		console.log("add成功")
	} catch (e) {
		// 符合uniCloud响应体规范 https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=resformat，自动抛出此错误 
		// Compliant with uniCloud response body specification https://uniapp.dcloud.net.cn/uniCloud/cf-functions?id=resformat, this error will be thrown automatically
		console.log(e.errMsg)
	}
}
```

#### 第五层提效：HBuilderX工具助力
#### Fifth layer efficiency: HBuilderX tools help

HBuilderX、uni-app、uniCloud是三位一体、高效协同的。
HBuilderX, uni-app, and uniCloud are trinity and efficient collaboration.

HBuilderX提升了uni-app的开发效率，自然也将提升uniCloud的开发效率。并且三位一体，实现了以前无法想象的新突破。
HBuilderX improves the development efficiency of uni-app, and will naturally improve the development efficiency of uniCloud. And the Trinity has achieved new breakthroughs that were previously unimaginable.

以下图为例：
The following figure is an example:

在传统开发中，item是一个通过request返回的json，ide是不可能知道这个json的数据结构的，也就无法提示。
In traditional development, item is a json returned by request, and it is impossible for IDE to know the data structure of this json, so it cannot prompt.

由于三位一体协同，HBuilderX可以解析本地schema文件，直接提示item后面的数据结构。避免开发者写错代码、减少服务器联调工作。
![](https://web-assets.dcloud.net.cn/unidoc/zh/hx%E6%8F%90%E7%A4%BA%E6%95%B0%E6%8D%AE%E5%AD%97%E6%AE%B5.jpg)

云对象的方法，HBuilderX同样可以完美解析，让编写客户端代码时直接提示云对象的方法、参数。
The methods of cloud objects can also be perfectly parsed by HBuilderX, so that the methods and parameters of cloud objects can be directly prompted when writing client code.

#### 第六层提效：语言统一的价值
#### Level 6 Efficiency Improvement: The Value of Language Unity

前端和云端都使用js编程语言，提高了沟通效率。
Both the front-end and the cloud use the js programming language, which improves communication efficiency.

js和其他服务器语言，比如php或java，在过去需要Mock来翻译，这很多余。
js and other server languages, such as php or java, used Mock to translate, which was redundant.

在实际开发中，开发商应该安排人员按业务分工，专注于业务，一个业务模块的前端后端都由一个人负责。开发效率会比以前更高。
In actual development, developers should arrange personnel to divide labor according to business and focus on business. One person is responsible for the front-end and back-end of a business module. Development efficiency will be higher than before.

由于统一了技术栈，招聘效率、管理效率也会相应提升。。
Due to the unified technology stack, recruitment efficiency and management efficiency will also be improved accordingly. .

#### 第七层提效：测试效率的提升
#### Seventh layer efficiency improvement: test efficiency improvement

代码量的减少到原来的十分之一，这自然可以让code review效率和白盒测试的效率也提升了十倍。
The amount of code is reduced to one-tenth of the original, which naturally increases the efficiency of code review and white-box testing tenfold.

黑盒测试中，前后端对不齐的bug、权限漏洞等发生的概率也大幅减少。
In black-box testing, the probability of occurrence of bugs and permission loopholes with front and back ends being misaligned is also greatly reduced.

现在，开发、测试都将变的更加轻松。
Now, development and testing will become easier.

#### 第八层提效：serverless让开发者专注于业务，无需分心运维
#### Eighth layer efficiency improvement: serverless allows developers to focus on business without distracting operation and maintenance

因为serverless的免运维特点，开发商再也不用操心扩容、高并发、ddos攻击、安全漏洞补丁等一系列麻烦事。只需专注于自己的业务。
Because of the free operation and maintenance feature of serverless, developers no longer have to worry about a series of troubles such as capacity expansion, high concurrency, ddos attacks, and security vulnerability patches. Just focus on your business.


uniCloud是开发界的革命。在HBuilderX、uni-app、uniCloud三位一体的协同下、创新的功能设计下、丰富的生态和轮子支持下，开发者的开发效率，超过传统开发10倍以上。
uniCloud is a revolution in the development world. With the cooperation of HBuilderX, uni-app, and uniCloud, innovative functional design, rich ecology and wheel support, the development efficiency of developers is more than 10 times that of traditional development.

> 目前uniCloud已发展3年多，活跃服务空间数万，云函数日请求数量过亿。请放心使用。
> At present, uniCloud has been developed for more than 3 years, with tens of thousands of active service spaces and over 100 million cloud function requests per day. Please use it with confidence.
