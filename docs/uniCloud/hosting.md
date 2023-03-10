## 简介
## Introduction

DCloud为开发者提供了`uni发布平台`，包括网站发布、App发布和统一门户页面。
DCloud provides a `uni publishing platform` for developers, including website publishing, App publishing and unified portal pages.

`前端网页托管`是其中的网页发布环节产品。
`Front-end web hosting` is one of the products in the web publishing link.

`前端网页托管`基于uniCloud的能力，为开发者的html网页提供**更快速、更安全、更省心、更便宜**的网站发布。
`Front-end web hosting` is based on uniCloud's ability to provide developers with **faster, safer, more worry-free, and cheaper** website publishing for their html web pages.

- 更快速：不经过web server，页面和资源直接上cdn，就近访问，速度更快。
- Faster: Without going through the web server, the pages and resources are directly uploaded to the CDN, and the nearest access is faster.
- 更安全：不存在传统服务器各种操作系统、web server的漏洞，不用天天想着打补丁。不怕DDoS攻击，永远打不垮的服务。
- Safer: There are no loopholes in various operating systems and web servers of traditional servers, so you don't have to think about patching every day. Not afraid of DDoS attacks, services that will never be defeated.
- 更省心：无需再购买虚拟机、安装操作系统、配置web服务器、处理负载均衡、处理大并发、处理DDoS攻击......您什么都不用管，只需上传您写的页面文件
- More peace of mind: no need to buy virtual machines, install operating systems, configure web servers, handle load balancing, handle large concurrency, handle DDoS attacks... you don't have to worry about anything, just upload the page file you wrote
- 更便宜：uniCloud由DCloud联合阿里云和腾讯云推出，享受云厂商政策优惠。
- Cheaper: uniCloud is launched by DCloud in conjunction with Alibaba Cloud and Tencent Cloud, and enjoys preferential policies from cloud vendors.

## 案例
## case

- `HBuilderX`文档网站，是一个基于`markdown`的文档系统，域名：[https://hx.dcloud.net.cn/](https://hx.dcloud.net.cn/)
- `HBuilderX` document website is a document system based on `markdown`, domain name: [https://hx.dcloud.net.cn/](https://hx.dcloud.net.cn/)
- `uni统计`官网现已部署到uniCloud，一份报表，掌握业务全景，域名：[https://tongji.dcloud.net.cn](https://tongji.dcloud.net.cn)
- `uni Statistics` official website has been deployed to uniCloud, a report, grasp the business panorama, domain name: [https://tongji.dcloud.net.cn](https://tongji.dcloud.net.cn)
- `hello uni-app`项目现已部署到uniCloud，线上地址：[https://hellouniapp.dcloud.net.cn](https://hellouniapp.dcloud.net.cn)
- The `hello uni-app` project has been deployed to uniCloud, online address: [https://hellouniapp.dcloud.net.cn](https://hellouniapp.dcloud.net.cn)

## 开通
## open

首先开发者需要开通`uniCloud`，登录[https://unicloud.dcloud.net.cn/](https://unicloud.dcloud.net.cn/)。
First, developers need to activate `uniCloud` and log in to [https://unicloud.dcloud.net.cn/](https://unicloud.dcloud.net.cn/).

然后选择或创建一个服务空间。
Then select or create a service space.

最后在上述网页左侧导航点击`前端网页托管`，即可开始使用。
Finally, navigate to the left side of the above web page and click `Front-end Web Hosting` to start using it.

`前端网页托管`和云函数没有绑定关系，可以和云函数部署在一个服务空间，也可以是不同的空间，甚至是不同云服务商的空间。
`Front-end web page hosting` has no binding relationship with cloud functions, and can be deployed in the same service space as cloud functions, or in different spaces, or even spaces of different cloud service providers.

- 阿里云`前端网页托管`提供一个免费版，收费版定价[详见](price.md#aliyun-business)
- Alibaba Cloud's `front-end web hosting` provides a free version, and the paid version is priced [see details](price.md#aliyun-business)
- 腾讯云`前端网页托管`需付费，定价由腾讯云提供。[详见](price.md#tencent-advanced)
- Tencent Cloud's `front-end web page hosting` requires payment, and the pricing is provided by Tencent Cloud. [See details](price.md#tencent-advanced)

注意：
Notice:
- 腾讯云新计费模式下前端网页托管仅支持按量计费模式，原包年包月套餐已下线。现存包年包月`前端网页托管`，如果服务空间升级到新套餐，则`前端网页托管`会自动切换为按量计费模式，请确保余额充足。
- Under Tencent Cloud's new billing model, the front-end web page hosting only supports the pay-as-you-go billing model, and the original yearly and monthly packages have been discontinued. The existing yearly and monthly subscription `front-end web hosting`, if the service space is upgraded to a new package, `front-end web hosting` will automatically switch to the pay-as-you-go mode, please ensure that the balance is sufficient.


## 使用
## use

开通后，需要把开发者的前端网页，上传到uniCloud的`前端网页托管`中。
After activation, the developer's front-end webpage needs to be uploaded to uniCloud's front-end webpage hosting.

目前提供了2种方式操作：
There are currently 2 ways to operate:

方式1. 通过[uniCloud控制台](https://unicloud.dcloud.net.cn/)，在web界面上传。
Method 1. Upload on the web interface through [uniCloud console](https://unicloud.dcloud.net.cn/).

  上传时，可以按文件上传，也可以按文件夹上传。
  When uploading, you can upload by file or by folder.

  如果是按文件夹上传，可以选择上传后的目录是否包含上传文件夹的根目录。
  If uploading by folder, you can choose whether the uploaded directory includes the root directory of the uploaded folder.

![](https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/unicloud-web-hosting.jpg)

方式2. 通过HBuilderX工具上传。
Method 2. Upload through the HBuilderX tool.

  > HBuilderX 2.8+起，支持在HBuilderX中直接上传前端网页到uniCloud阿里云版；3.5.1起，支持uniCloud腾讯云版。
  > Starting from HBuilderX 2.8+, it supports directly uploading front-end web pages to uniCloud Alibaba Cloud version in HBuilderX; starting from 3.5.1, it supports uniCloud Tencent Cloud version.

  在菜单发行中，选择`上传网站到服务器`。
  In the menu release, select `Upload website to server`.

  - 对于uni-app项目，可以先编译为h5，然后直接把编译后的h5上传上去。如下图
  - For the uni-app project, you can first compile it into h5, and then directly upload the compiled h5. As shown below

![](https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/unicloud-hx-hosting.jpg)

  - 对于非uni-app项目，可以自己选择要上传的目录，包含html、js、css、图片等静态前端文件接口。如下图
  - For non-uni-app projects, you can choose the directory to upload, including static front-end file interfaces such as html, js, css, and pictures. As shown below

![](https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/unicloud-hx-hosting-h5.jpg)

  > HBuilderX 2.8.9+，支持前端网页托管管理器管理uniCloud阿里云版，3.5.1起，支持uniCloud腾讯云版。
  > HBuilderX 2.8.9+, supports front-end web hosting manager to manage uniCloud Alibaba Cloud version, starting from 3.5.1, supports uniCloud Tencent Cloud version.

  在菜单视图中，或者在左下角状态栏中，点击`前端网页托管`，可在左侧打开前端网页托管管理器。如下图
  In the menu view, or in the status bar in the lower left corner, click `Frontend Webpage Hosting` to open the frontend webpage hosting manager on the left. As shown below
  
<img style="max-width:750px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/%E5%89%8D%E7%AB%AF%E7%BD%91%E9%A1%B5%E6%89%98%E7%AE%A1%E7%AE%A1%E7%90%86%E5%99%A8.jpg"/>


  在前端网页托管管理器中，可以看到当前用户的服务空间列表，置灰表示该服务空间还没有开通前端网页托管，点击后可根据提示开通。（如上图中置灰的ali1服务空间）。
  In the front-end web hosting manager, you can see the list of service spaces for the current user. If the service space is grayed out, it means that the front-end web hosting has not been opened for the service space. After clicking, you can open it according to the prompt. (As shown in the grayed out ali1 service space in the figure above).

  点击可用的服务空间，在右侧可以看到远端的资源管理器，把本地文件拖进入，即可上传文件。
  Click the available service space, you can see the remote resource manager on the right, drag the local file into it, and you can upload the file.

**注意事项**
**Precautions**

1. `前端网页托管`适于uni-app的h5页面发布。尤其是配搭uniCloud云开发，将彻底不用再租用任何传统的服务器。
1. `Front-end web hosting` is suitable for publishing h5 pages of uni-app. Especially with uniCloud cloud development, there will be no need to rent any traditional servers at all.
2. `前端网页托管`适于所有前后端分离的网站中的前端页面发布，包括pc网页。
2. `Front-end web page hosting` is suitable for publishing front-end pages in all websites with front-end and back-end separation, including PC web pages.
3. 仅支持html、CSS、JavaScript、字体、图片、音视频、json等文件。不支持php、java、python、ruby、go、c++等其他需要额外语言解释器解释的语言文件。
3. Only html, CSS, JavaScript, fonts, pictures, audio and video, json and other files are supported. It does not support php, java, python, ruby, go, c++ and other language files that need to be interpreted by an additional language interpreter.
4. 如果开发者需要做a/b test或灰度新功能，需要自己在js里写代码实现，不能通过路由到不同服务器实现。
4. If developers need to do a/b test or grayscale new functions, they need to write code in js to implement it, and cannot implement it by routing to different servers.
5. uni-app项目编译为h5时，在项目的manifest中配置二级目录。上传时无需重复设置二级目录。
5. When compiling the uni-app project to h5, configure the secondary directory in the project manifest. There is no need to repeatedly set the secondary directory when uploading.
6. 一个`前端网页托管`的空间里，可以上传多个网站，用不同目录区分开，访问时使用同一个域名后加不同目录的方式访问。不支持每个目录单独设置不同域名。
6. In a "front-end web hosting" space, multiple websites can be uploaded, separated by different directories, and accessed by using the same domain name followed by different directories. It is not supported to set different domain names for each directory separately.
7. 部署到不同的服务空间的`前端网页托管`内的网站，也是可以访问同一个服务空间内的云函数的，只需要在部署云函数的服务空间的`跨域配置`内添加部署前端页面的域名即可
7. Websites deployed to different service spaces in `Front-End Web Hosting` can also access cloud functions in the same service space. You only need to add the deployment front-end in the `Cross-Domain Configuration` of the service space where the cloud functions are deployed The domain name of the page
8. 腾讯云缓存时间默认为1天，阿里云一般情况下文件变动后会一小段时间内自动刷新缓存
8. The default cache time of Tencent Cloud is 1 day. Generally, Alibaba Cloud will automatically refresh the cache within a short period of time after the file is changed.

## 基础配置@base-config
## Basic configuration @base-config

本章节介绍`前端网页托管`提供的各种配置项目说明。其中配置域名、网站首页、404页面，是阿里云和腾讯云均支持的，其他配置仅腾讯云支持。
This chapter introduces the descriptions of various configuration items provided by `Frontend Web Hosting`. Among them, the configuration of domain name, website homepage, and 404 page is supported by both Alibaba Cloud and Tencent Cloud. Other configurations are only supported by Tencent Cloud.

### 配置域名@domain
### Configure domain name @domain

`前端网页托管`，自带一个测试域名，仅用于产品体验及测试可快速体验前端网页部署的完整流程，该域名有如下限制：
`Front-end web page hosting` comes with a test domain name, which is only used for product experience and testing to quickly experience the complete process of front-end web page deployment. This domain name has the following restrictions:
  + 阿里云每分钟最多60次请求，默认每日仅允许10个公网IP访问，超出部分，需通过手动方式将来源IP加入白名单,IP白名单也会有数量限制
  + Alibaba Cloud has a maximum of 60 requests per minute. By default, only 10 public network IPs are allowed to access each day. If the excess part is exceeded, the source IP needs to be added to the whitelist manually, and the IP whitelist will also have a limit on the number of requests
  + 腾讯云限速100K/s
  + Tencent cloud speed limit 100K/s

业务如要上线商用，请配置自己的正式域名，配置自己的正式域名后，将不受上述测试域名的限制。（尤其注意阿里云测试域名是公共的，任意一个服务空间如果有上传恶意文件被投诉，会导致测试域名被微信内置浏览器整体禁封）
If you want to launch your business for commercial use, please configure your own official domain name. After configuring your own official domain name, it will not be restricted by the above test domain name. (Pay special attention to the fact that Alibaba Cloud’s test domain name is public. If any malicious file uploaded in any service space is complained, the test domain name will be blocked by the built-in browser of WeChat as a whole.)


前端网页托管配置自己域名的步骤如下：
The steps to configure your own domain name for front-end web hosting are as follows:

1、登录[uniCloud控制台](https://unicloud.dcloud.net.cn/)。
1、 Log in to [uniCloud console](https://unicloud.dcloud.net.cn/).
2、进入前端网页托管页面，选择【基础设置】，单击【添加域名】，进行域名添加，（注意：域名是需要自行购买的）如下图所示：
2、 Enter the front-end web page hosting page, select [Basic Settings], click [Add Domain Name] to add a domain name, (note: the domain name needs to be purchased by yourself) as shown in the following figure:

 ![](https://img-cdn-aliyun.dcloud.net.cn/uni-app/uniCloud/uniCloud-hosting-domain-add.jpg)

3、添加后，系统会自动分配一个 CNAME 域名，CNAME 域名不能直接访问，您需要在域名服务提供商处完成 CNAME 配置（将添加的域名CNAME到此域名），配置生效后，新域名即可使用。
3、 After adding, the system will automatically assign a CNAME domain name. The CNAME domain name cannot be accessed directly. You need to complete the CNAME configuration at the domain name service provider (CNAME the added domain name to this domain name). After the configuration takes effect, the new domain name can be used .

阿里云现已支持http强制跳转https，在上述添加界面打开对应开关即可
Alibaba Cloud now supports http to force jump to https, just turn on the corresponding switch on the above adding interface

**域名备案**
**Domain name registration**

如果你已经有备案过的域名，直接解析过来即可；如果你要新注册域名，首先自行在网上购买，然后注意域名如果想在国内正常绑定阿里云或腾讯云，需要域名备案。这里的备案流程和传统云主机略有不同，涉及一个uniCloud没有固定ip的问题。此时可以去买花生壳的备案服务；也可以临时买一个短期传统云，走传统备案；还有授权码方案，这里有开发者分享的经验贴：[https://ask.dcloud.net.cn/article/38116](https://ask.dcloud.net.cn/article/38116)
If you already have a registered domain name, you can directly resolve it; if you want to register a new domain name, first purchase it online, and then note that if you want to bind the domain name to Alibaba Cloud or Tencent Cloud normally in China, you need to register the domain name. The filing process here is slightly different from traditional cloud hosts, involving a problem that uniCloud does not have a fixed IP. At this time, you can buy the filing service of peanut shells; you can also temporarily buy a short-term traditional cloud and follow the traditional filing; there is also an authorization code scheme, here is the experience post shared by developers: [https://ask.dcloud.net. cn/article/38116](https://ask.dcloud.net.cn/article/38116)

**关于证书内容与私钥**
**About certificate content and private key**

域名如果使用https，则需要证书。证书签发后，可下载到本地，然后将内容复制黏贴到uniCloud web控制台。
If the domain name uses https, a certificate is required. After the certificate is issued, it can be downloaded locally, and then copy and paste the content to the uniCloud web console.

注意：各运营商下载证书的后缀可能不同，一般来说，`.key`文件对应私钥，`.pem`或`.crt`文件对应证书。这几种类型文件都是文本内容，可选择记事本打开查看内容。
Note: The suffix of the certificate downloaded by each operator may be different. Generally speaking, the `.key` file corresponds to the private key, and the `.pem` or `.crt` file corresponds to the certificate. These types of files are all text content, you can choose Notepad to open to view the content.

如果您还没有SSL证书，点此[快速获取](https://cloud.tencent.com/act/cps/redirect?redirect=33848&cps_key=c858f748f10419214b870236b5bb94c6)。
If you do not have an SSL certificate, click here [quickly get it](https://cloud.tencent.com/act/cps/redirect?redirect=33848&cps_key=c858f748f10419214b870236b5bb94c6).

**注意事项**
**Precautions**

- 在阿里云开启了泛域名加速的情况下，对应的子域名可能无法配置到前端网页托管，**这种情况下可能会提示：该域名已被添加过，不能重复添加**
- When Alibaba Cloud has turned on pan-domain name acceleration, the corresponding sub-domain name may not be configured to be hosted on the front-end web page. **In this case, a prompt may be displayed: This domain name has already been added and cannot be added again**
- 暂不支持绑定中文域名
- Binding of Chinese domain names is not currently supported
- 阿里云要求必须有一个备案在阿里才可以绑定，按照uniCloud web控制台提示操作即可，腾讯云没有此条限制。
- Alibaba Cloud requires that there must be a record in Alibaba before it can be bound. Just follow the prompts on the uniCloud web console. Tencent Cloud does not have this restriction.

**务必注意，如果你是在腾讯购买并备案的域名需要保留一个到腾讯ip的解析，否则备案会被撤销，阿里云同理。具体细节可以咨询购买域名的云厂商**
**It is important to note that if you purchased and filed a domain name from Tencent, you need to keep a resolution to Tencent ip, otherwise the filing will be revoked, and Alibaba Cloud is the same. For details, please consult the cloud provider who purchased the domain name**

### 路由规则@routing
### Routing rules @routing

**网站首页**
**Home page**

设置网站首页文档名
Set the homepage document name of the website

**404页面**
**404 page**

访问静态网站出错后返回的页面。
The page returned after an error occurs when accessing a static website.

如需在阿里云正式版支持history模式，请将404页面配置为网站首页。注意正式版404页面不支持目录，即阿里云仅能在根目录下支持history模式

**重定向规则**
**Redirection Rules**

> 仅腾讯云支持
> Only supported by Tencent Cloud

支持以下三种组合配置
Supports the following three combination configurations

- 类型：错误码、规则：替换路径。将特定错误码的请求重定向到目标文档，仅支持对4xx错误码。
- Type: error code, rule: replacement path. Redirect requests for specific error codes to the target document. Only 4xx error codes are supported.

例：将404错误码重定向至index.html，需做如下配置（uni-app项目使用history模式发行到h5时可以使用此配置）：
Example: To redirect the 404 error code to index.html, the following configuration is required (this configuration can be used when the uni-app project uses the history mode to publish to h5):

|类型		|描述	|规则			|替换内容		|
|Type |Description |Rule |Replace |
|:-:		|:-:	|:-:			|:-:				|
|错误码	|404	|替换路径	|index.html	|
|Error code | 404 |Replace path | index.html |

- 类型：前缀匹配、规则：替换路径。将匹配到特定前缀的请求重定向到目标文档
- Type: Prefix Match, Rule: Replace Path. Redirect requests matching a specific prefix to the target document

例：当您删除了images/文件夹（即删除了具有前缀images/的所有对象）。您可以添加重定向规则，将具有前缀images/的任何对象的请求重定向至test.html页面。
Example: when you deleted the images/ folder (i.e. deleted all objects with prefix images/). You can add redirect rules to redirect requests for any object with the prefix images/ to the test.html page.

|类型			|描述		|规则			|替换内容	|
|Type |Description |Rule |Replace |
|:-:			|:-:		|:-:			|:-:			|
|前缀匹配	|images/|替换路径	|test.html|
|prefix match | images/|replace path | test.html|

- 类型：前缀匹配、规则：替换前缀。将匹配到特定前缀的请求中的前缀替换为替换内容，例：
- Type: Prefix Match, Rule: Replace Prefix. Replace the prefix in the request matching a specific prefix with the replacement content, for example:

例：当您将文件夹从docs/重命名为documents/后，用户在访问docs/文件夹会产生错误。所以，您可以将前缀docs/的请求重定向至documents/。
Example: After you rename the folder from docs/ to documents/, users will generate errors when accessing the docs/ folder. So, you can redirect requests prefixed with docs/ to documents/.

|类型			|描述	|规则			|替换内容		|
|Type |Description |Rule |Replace |
|:-:			|:-:	|:-:			|:-:				|
|前缀匹配	|docs/|替换前缀	|documents/	|
| prefix match | docs/ | replace prefix | documents/ |

**注意**
**Notice**

- 阿里云每天仅能修改3次路由规则
- Alibaba Cloud can only modify routing rules 3 times a day

### 缓存配置@cache
### Cache configuration @cache

> 仅腾讯云支持
> Only supported by Tencent Cloud

- 文件类型：根据填入的文件后缀进行缓存过期时间设置，格式为.jpg形式，不同后缀之间用;间隔。
- File type: Set the cache expiration time according to the filled-in file suffix, the format is .jpg, and use ; between different suffixes.
- 文件夹：根据填入的目录路径进行缓存过期时间设置，格式为/test形式，无需以/结尾，不同目录之间用;间隔。
- Folder: Set the cache expiration time according to the filled directory path, the format is /test, there is no need to end with /, and the interval between different directories is ;.
- 全路径文件：指定完整的文件路径进行缓存过期时间设置，格式为/index.html，支持完整路径加文件类型匹配模式，如/test/*.jpg。
- Full path file: specify the complete file path to set the cache expiration time, the format is /index.html, and support the full path plus file type matching mode, such as /test/*.jpg.

**注意**
**Notice**

- 缓存过期规则最多可配置10条。
- Up to 10 cache expiration rules can be configured.
- 多条缓存过期规则之间的优先级为底部优先。
- The priority among multiple cache expiration rules is bottom priority.
- 缓存过期时间最多可设置365天。
- The cache expiration time can be set up to 365 days.

### 刷新缓存@refresh-cache
### Refresh cache @refresh-cache

> 仅腾讯云、阿里云商用版支持
> Only supported by commercial versions of Tencent Cloud and Alibaba Cloud

腾讯云需要填写要刷新的链接，针对填写的链接进行刷新。阿里云对默认域名和自定义域名一键刷新。
Tencent Cloud needs to fill in the link to be refreshed, and refresh the filled link. Alibaba Cloud refreshes the default domain name and custom domain name with one click.

**注意**
**Notice**

- 阿里云商用版限制每小时只允许刷新3次
- Alibaba Cloud commercial version only allows 3 refreshes per hour

### 防盗链配置@referer
### Anti-leech configuration @referer

> 仅腾讯云支持
> Only supported by Tencent Cloud

**referer 黑名单：**
**referer blacklist:**

- 若请求的 referer 字段匹配黑名单内设置的内容，CDN 节点拒绝返回该请求信息，直接返回403状态码。
- If the referer field of the request matches the content set in the blacklist, the CDN node refuses to return the request information and directly returns a 403 status code.
- 若请求的 referer 不匹配黑名单内设置的内容，则 CDN 节点正常返回请求信息。
- If the requested referer does not match the content set in the blacklist, the CDN node will return the request information normally.
- 当勾选包含空 referer 选项时，此时若请求 referer 字段为空或无 referer 字段（如浏览器请求），则 CDN 节点拒绝返回该请求信息，返回403状态码。
- When the Include empty referer option is checked, if the request referer field is empty or has no referer field (such as a browser request), the CDN node refuses to return the request information and returns a 403 status code.

**referer白名单：**
**referer whitelist:**

- 若请求的 referer 字段匹配白名单设置的内容，则 CDN 节点正常返回请求信息。
- If the referer field of the request matches the content set in the whitelist, the CDN node returns the request information normally.
- 若请求的 referer 字段不匹配白名单设置的内容，则 CDN 节点拒绝返回该请求信息，会直接返回状态码403。
- If the referer field of the request does not match the content set in the whitelist, the CDN node refuses to return the request information, and returns status code 403 directly.
- 当设置白名单时，CDN 节点只能返回符合该白名单内字符串内容的请求。
- When a whitelist is set, the CDN node can only return requests that match the string content in the whitelist.
- 当勾选包含空 referer 选项时，此时若请求 referer 字段为空或无 referer 字段（如浏览器请求），则 CDN 正常返回请求信息。
- When the Include empty referer option is checked, if the request referer field is empty or has no referer field (such as a browser request), the CDN will return the request information normally.

**配置规则：**
**Configuration rules:**

防盗链支持域名 / IP 规则，匹配方式为前缀匹配（仅支持路径情况下，域名的前缀匹配不支持），即假设配置名单为www.abc.com，则www.abc.com/123匹配，www.abc.com.cn不匹配；假设配置名单为127.0.0.1，则127.0.0.1/123也会匹配。
Anti-leeching supports domain name/IP rules, and the matching method is prefix matching (only path support is supported, domain name prefix matching is not supported), that is, assuming the configuration list is www.abc.com, then www.abc.com/123 matches, www .abc.com.cn does not match; assuming the configuration list is 127.0.0.1, 127.0.0.1/123 will also match.
防盗链支持通配符匹配，即假设名单为*.qq.com，则www.qq.com、a.qq.com均会匹配。
Anti-leeching supports wildcard matching, that is, if the list is *.qq.com, www.qq.com and a.qq.com will match.

### IP黑白名单配置@ip-filter
### IP black and white list configuration @ip-filter

> 仅腾讯云支持
> Only supported by Tencent Cloud

**IP 黑名单**
**IP Blacklist**

用户端 IP 匹配黑名单中的 IP 或 IP 段时 ，访问 CDN 节点时将直接返回403状态码。
When the client IP matches the IP or IP segment in the blacklist, the 403 status code will be returned directly when accessing the CDN node.

**IP 白名单**
**IP Whitelist**

用户端 IP 未匹配白名单中的 IP 或 IP 段时 ，访问 CDN 节点时将直接返回403状态码。
When the client IP does not match the IP or IP segment in the whitelist, the 403 status code will be returned directly when accessing the CDN node.

**名单规则**
**List Rules**

- IP 黑名单与 IP 白名单二选一，不可同时配置。
- IP blacklist and IP whitelist can be selected, and cannot be configured at the same time.
- IP 段仅支持 /8、/16、/24 网段，不支持其他网段。
- The IP segment only supports /8, /16, /24 network segments, other network segments are not supported.
- 不支持IP：端口形式的黑白名单
- Does not support black and white lists in the form of IP:ports
- 名单最多可输入50个。
- Up to 50 names can be entered in the list.

### 默认域名IP白名单@default-domain-ip-whitelist
### Default Domain IP Whitelist @default-domain-ip-whitelist

> 仅阿里云支持
> Only supported by Alibaba Cloud

为保障默认域名不被滥用，阿里云对默认域名做出了如下限制：每天前10个IP可以直接访问，超出10个IP后需要配置IP白名单才可以访问
In order to ensure that the default domain name is not abused, Alibaba Cloud has made the following restrictions on the default domain name: the first 10 IPs per day can be directly accessed, and after more than 10 IPs need to be configured with an IP whitelist to access

仅支持配置ipv4，可以配置IP或者IP网段，掩码位数取值范围24-31。最多可同时配置三个，多个之间用逗号隔开，如：123.120.5.235/24,123.123.123.123
Only ipv4 is supported, and IP or IP network segment can be configured, and the mask bit range is 24-31. Up to three can be configured at the same time, separated by commas, such as: 123.120.5.235/24,123.123.123.123

### IP访问限频配置@ip-freq
### IP access frequency limit configuration @ip-freq

> 仅腾讯云支持
> Only supported by Tencent Cloud

**配置说明**
**Configuration instructions**

- 配置开启后，超出 QPS 限制的请求会直接返回514，设置较低频次限制可能会影响您的正常高频用户的使用，请根据业务情况、使用场景合理设置阈值。
- After the configuration is enabled, requests that exceed the QPS limit will directly return 514. Setting a lower frequency limit may affect the use of your normal high-frequency users. Please set the threshold reasonably according to business conditions and usage scenarios.
- 限频仅针对与单 IP 单节点访问次数进行约束，若恶意用户海量 IP 针对性的进行全网节点攻击，则通过此功能无法进行有效控制。
- The frequency limit is only limited to the number of visits to a single node with a single IP. If a malicious user attacks a large number of IPs on the entire network, it cannot be effectively controlled through this function.

## 跨域
## cross-domain

web浏览器有跨域限制，A域名的网站如果通过js请求另一个域名B，且另一个B域名并没有放开跨域策略，那么浏览器就会报跨域错误。
Web browsers have cross-domain restrictions. If the website of A domain name requests another domain name B through js, and the other B domain name does not release the cross-domain policy, the browser will report a cross-domain error.

在前端网页托管里，托管前端网页的网站就是A域名。要连接的服务器接口就是B域名。
In front-end web hosting, the website hosting the front-end web page is the A domain name. The server interface to be connected is the B domain name.

1. B域名是uniCloud的云函数/云对象
1. B domain name is the cloud function/cloud object of uniCloud

也就是业务后台也在uniCloud的云函数或云对象上。此时需要在uniCloud的[web控制台](https://unicloud.dcloud.net.cn/)的`跨域配置`中，把A域名填写在Web安全域名中。
That is, the business background is also on the cloud function or cloud object of uniCloud. At this time, you need to fill in the A domain name in the web security domain name in the `cross-domain configuration` of uniCloud’s [web console](https://unicloud.dcloud.net.cn/).

2. B域名是开发者自己的传统服务器
2. B domain name is the developer's own traditional server

需要在开发者自己的传统服务器上配置跨域，允许A域名跨域访问自己。
You need to configure cross-domain on the developer's own traditional server to allow A domain name to access itself across domains.

## 缓存问题@cache

如果在更新页面后浏览器访问到的仍是旧页面，可以通过如下流程排查

1. 客户端禁用缓存或无痕模式打开是否正常，如果是就是客户端缓存问题，需要等浏览器缓存失效 
2. 排除了第一步的影响后，访问页面路径后加参数 比如 /admin#/pages/index/index 改为 /admin?v=1#/pages/index/index，如果正常则是cdn缓存问题，在uniCloud前端网页托管**配置页面**刷新缓存即可

## 最佳实践
## Best Practices

### 部署uni-app项目@host-uni-app
### Deploy uni-app project @host-uni-app

uni-app项目根据路由模式不同需要做不同的配置
The uni-app project requires different configurations depending on the routing mode

- 使用hash模式时，无需特别的配置即可正常使用
- When using hash mode, it can be used normally without special configuration

- 使用history模式时可以配置如下规则
- When using history mode, you can configure the following rules

  + 腾讯云配置重定向规则将404错误码重定向至`index.html`
  + Tencent Cloud configures redirection rules to redirect 404 error codes to `index.html`
  + 阿里云请配置404页面为`index.html`
  + Alibaba Cloud please configure the 404 page as `index.html`

手动部署uni-app项目时需要注意将文件部署在配置的h5基础路径下。**HBuilderX一键部署时会自动按照manifest.json内配置的基础路径进行部署**
When manually deploying the uni-app project, you need to pay attention to deploying the file under the configured h5 base path. **HBuilderX will automatically deploy according to the basic path configured in manifest.json during one-click deployment**

### 部署多个项目@host-multi-project
### Deploy multiple projects @host-multi-project

如果部署多个项目到一个服务空间可以使用不同的基础路径来区分，需要注意的是这多个项目中只有一个项目可以使用history模式。
If you deploy multiple projects to a service space, you can use different basic paths to distinguish them. It should be noted that only one of the multiple projects can use the history mode.

以一个admin项目和一个用户端项目为例，可以将用户端项目部署在前端网页托管的根目录下，admin项目部署在`/admin`目录下。通过`https://xxx.com/`访问用户端项目，通过`https://xxx.com/admin/`来访问admin项目
Taking an admin project and a client project as an example, the client project can be deployed in the root directory of the front-end web hosting, and the admin project can be deployed in the `/admin` directory. Access the client project through `https://xxx.com/`, and access the admin project through `https://xxx.com/admin/`

**注意**
**Notice**

- 部署到子目录内的uni-app项目发行前需要将项目下manifest.json内`h5配置-->运行的基础路径`配置为子目录名，例`/admin/`
- Before the release of the uni-app project deployed in the subdirectory, it is necessary to configure `h5 configuration --> running base path` in the manifest.json under the project as the subdirectory name, for example `/admin/`

## 阿里云使用限制
## Alibaba Cloud usage restrictions

- 前端网页部署限制为最大存储空间用量2GB
- The front-end webpage deployment is limited to a maximum storage space usage of 2GB
- 单文件最大限制为50MB
- The maximum limit for a single file is 50MB

