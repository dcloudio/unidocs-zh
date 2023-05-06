> 以下为uni-starter v2的文档，新项目推荐直接使用。如果你的老项目使用的是uni-starter v1版，不想升级请查看：[uni-starter v1 文档](https://gitcode.net/dcloud/uni-starter/-/blob/v1/README.md)

## 简介
uni-starter是集成商用项目常见功能的、云端一体应用快速开发项目模版。

一个应用有很多通用的功能，比如登录注册、个人中心、设置、权限管理、拦截器、banner... uni-starter将这些功能都已经集成好。

直接在`HBuilderx`新建项目选择`uni-starter`模板，即可在此基础上快速开发自己的特色业务。

有了`uni-starter`，再加上`schema2code`生成前端页面，一个简单应用就可以快速完成。

如果说[uni-admin](https://uniapp.dcloud.io/uniCloud/admin)是管理端项目的基本项目模版，那么uni-starter则是用户端、尤其是移动端的基础项目模板。

`uni-starter` + `uni-admin` 提供了用户端和管理端的全套模版，开箱即用，应用开发从未如此简单快捷！

演示项目：[https://uni-starter.dcloud.net.cn](https://uni-starter.dcloud.net.cn)

扫码体验：<img src="https://web-assets.dcloud.net.cn/unidoc/zh/download.png" style="width: 120px;">

下载地址：[https://ext.dcloud.net.cn/plugin?id=5057](https://ext.dcloud.net.cn/plugin?id=5057)

GitCode 仓库：[https://gitcode.net/dcloud/uni-starter](https://gitcode.net/dcloud/uni-starter)

## uni-starter集成包括：
1. 用户管理：
	uni-starter的用户管理本质是集成了[uni-id-pages](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html)，它包括众多功能：
	- 登录注册（用户名密码登录、手机号验证码登录、APP一键登录、微信登录、Apple登录、微信小程序登录、手机微信扫码登录、微信公众号内登录）
	- 修改密码、忘记密码、头像更换（集成图片裁剪）、昵称修改、积分查看、退出登录、账号注销
2. 系统设置：
	- 内置[App升级中心](https://uniapp.dcloud.net.cn/uniCloud/upgrade-center.html)（整包升级、wgt升级、强制升级，后台搭配uni-admin的升级中心插件管理）
	- 推送开关（app）、清除缓存（app）
	- 指纹解锁（app）、人脸解锁（app）
	- 多语言切换
3. 隐私权限：内置Android先弹出隐私协议对话框，然后再向用户申请设备权限
4. 权限引导：当应用拒绝授权某些权限，但在后续使用中又需要这个权限；此时实现：引导用户可“一键跳转至系统设置”中开启。
	- 而不是报错让用户自己去找解决方案（更好的用户体验）。
	- 采用高内聚低耦合的设计结构，直接在应用启动时，应用拦截器中实现。免去在每个业务代码中处理这类问题，更优雅更方便。
	- 已实现项目：摄像头、相册、获取GPS定位、网络2/3/4/5G和Wi-Fi。你可以参考这些实现，处理更多该类场景的处理。uni-starter也会持续更新完善。
5. 实用功能
	- 问题与反馈、关于、隐私政策、用户服务协议
	- banner（后台搭配uni-admin的banner插件管理）
	- 新闻的搜索、列表、详情、分享。通过clientDB实现，开发者直接修改定义的表名等参数，即可轻松改为自己的业务
	- 可覆盖原生层的分享菜单
	- h5版在页面顶部（全局悬浮）引导用户点击下载App
	- 营销裂变：点击“分销推荐”，生成带用户inviteCode参数的应用下载页（H5），一键分享到微信或微信朋友圈等。被邀请人打开下载页面点击下载，设备剪贴板的内容会被自动设置为邀请者的inviteCode。被邀请人下载app之后通过任何方式登录（含：注册并登录），uni-starter框架会自动获取设备剪切板中的inviteCode提交到服务端绑定关联关系。
6. 更好的性能：首页采用nvue，fast编译模式，加快App端启动速度
7. 内置拦截器：
	- 页面路由拦截，配置需强制登录的页面；打开时自动检测`token`若无效就自动跳转到登录页
	- 调用云函数（callFunction）拦截器，自动携带必要参数、自动处理响应体。详见8.自动完成1-2
8. 自动完成：
	- 分析uniCloud.callFunction和clientDB操作的响应体，判断code执行对应的操作如跳转到登录页，自动续期token
	- 操作注册/登录操作自动获取客户端设备：push_clientid、imei、oaid、idfa新增/更新到数据表uni-id-device
	- 异常恢复处理：断网恢复后自动重连“因网络错误导致的”网络请求
	- 为迎合苹果App Store的规则，登录与分享功能项显示之前自动检测是否安装了对应客户端。比如：设备未安装微信则不显示微信快捷登录和微信分享选项

## 快速体验部署流程
#### 1. 开通uniCloud
- 开通`uniCloud`：本项目是云端一体的，它的云端代码需要部署在uniCloud云服务空间里，需要开通uniCloud。在[https://unicloud.dcloud.net.cn/](https://unicloud.dcloud.net.cn/)登录，按云厂商要求进行实名认证。
- 在uniCloud认证通过后，创建一个服务空间给本项目使用。选择阿里云或腾讯云均可，两种服务空间差异[详情](https://uniapp.dcloud.net.cn/uniCloud/price)

#### 2. 运行云服务空间初始化向导
<img style="width:61.8%" src="https://web-assets.dcloud.net.cn/unidoc/zh/20210809115104.jpg" />
<img style="width:61.8%" src="https://web-assets.dcloud.net.cn/unidoc/zh/20210809113634.jpg" />
<img style="width:61.8%" src="https://web-assets.dcloud.net.cn/unidoc/zh/20210809114205.jpg" />

## 功能模块介绍
### 1.账户管理
uni-starter 使用 `uni-id-pages`实现：登录注册账户管理相关功能 [详情查看](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html)
### 2.路由管理
大多数应用，都会指定某些页面需要登录才能访问。以往开发者需要写不少代码。现在，只需在项目的pages.json内配置登录页路径、需要登录才能访问的页面等信息，uni-app框架的路由跳转，会自动在需要登录且客户端登录状态过期或未登录时跳转到登录页面。详情查看：[uniIdRouter文档](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#uni-id-router)
### 3.h5版在页面顶部引导用户`点击下载App`
把h5端用户引流到APP端，是一个非常实用的功能。相对于h5，APP端有更高的用户留存和更好的产品体验。
uni-starter集成了这个功能，你只需直接在`项目根目录/uni-starter.config.js`的"h5"->"openApp"中配置相关内容，即可开启全局悬浮的下载引导。
这也是一个演示开发者如何在h5端做全局悬浮块的例子。你也可以在`/common/openApp.js`中修改他的样式等代码等，注意它只支持原生js语法。

### 4.分享模块
一个可覆盖原生层分享模块
- 应用配置：`manifest.json` App模块配置 --> Share --> 勾选并配置你所需要的模块
- 分享功能配置参数，随着应用的业务场景决定，在各场景调用的时候配置。参考uni-starter的`/pages/list/detail.vue`的`methods -> shareClick`
- 更多`uni-share`的介绍 [详情](https://ext.dcloud.net.cn/plugin?id=4860)

### 5.升级中心相关
为了解决开发者维护多个 App 升级繁琐，重复逻辑过多，管理不便的问题，升级中心`uni-upgrade-center`应运而生。
提供了简单、易用、统一的 App 管理、App 版本管理、安装包发布管理，升级检测更新管理。
- 升级中心分为两个部分：`uni-upgrade-center` 前台检测更新和`uni-upgrade-center-Admin`后台管理系统。
- `uni-upgrade-center`的介绍 [详情](https://ext.dcloud.net.cn/plugin?id=4542)
- `uni-upgrade-center-Admin`的介绍 [详情](https://ext.dcloud.net.cn/plugin?id=4470)

### 6.意见反馈
- 客户端[详情](https://ext.dcloud.net.cn/plugin?id=50)
- admin端[详情](https://ext.dcloud.net.cn/plugin?id=4992)

### 7.指纹识别模块
- `manifest.json` App模块配置 --> `Fingerprint`指纹识别

### 8.消息推送模块
- `manifest.json` App模块配置 --> `push`消息推送

### 9.隐私政策弹框
根据工业和信息化部关于开展APP侵害用户权益专项整治要求，App提交到应用市场必须满足以下条件：
- 应用启动运行时需弹出隐私政策协议，说明应用采集用户数据
- 应用不能强制要求用户授予权限，即不能“不给权限不让用”
+ 如不希望应用启动时申请“读写手机存储”和“访问设备信息”权限，请参考：[https://ask.dcloud.net.cn/article/36549](https://ask.dcloud.net.cn/article/36549)

配置弹出“隐私协议和政策”打开项目的manifest.json文件，切换到“源码视图”项
在`manifest.json` -> `app-plus` -> `privacy` 节点下添加 prompt节点
```js
"privacy" : {
	"prompt" : "template",
	"template" : {
		"title" : "服务协议和隐私政策",
		"message" : "　　请你务必审慎阅读、充分理解“服务协议”和“隐私政策”各条款，包括但不限于：为了更好的向你提供服务，我们需要收集你的设备标识、操作日志等信息用于分析、优化应用性能。<br/>　　你可阅读<a href=\"https://ask.dcloud.net.cn/protocol.html\">《服务协议》</a>和<a href=\"https://ask.dcloud.net.cn/protocol.html\">《隐私政策》</a>了解详细信息。如果你同意，请点击下面按钮开始接受我们的服务。",
		"buttonAccept" : "同意",
		"buttonRefuse" : "暂不同意"
	}
}
```
- prompt
  字符串类型，必填，隐私政策提示框配置策略，可取值template、custom、none，默认值为none
  + template
     使用原生提示框模板，可自定义标题、内容已经按钮上的文本
  + custom
     自定义隐私政策提示框，uni-app项目中推荐使用nvue页面进行自定义，5+ APP使用html页面进行自定义
  + none
    不弹出隐私政策提示框
- template
  json格式，可选，模板提示框上显示的内容
	+ title
	  模板提示框上的标题，默认为“服务协议和隐私政策”
	+ message
	  模板提示框上的内容，richtext类型字符串，支持a/font/br等节点，点击a链接会调用内置页面打开其href属性中链接地址。
	  **注意：务必配置此提示内容，或参考上面示例内容并修改《服务协议》和《隐私政策》链接地址**
	+ buttonAccept
	  模板提示框上接受按钮的文本，默认值为“我知道了”
	+ buttonRefuse
	  模板提示框上拒绝按钮的文本，默认不显示此按钮
	+ second
	  HBuilderX3.1.12+版本新增支持隐私提示框二次确认提示，用于配置二次确认提示框显示内容，message属性值不为空时弹出二次确认提示框
		+ title 二次确认提示框上的标题
		+ message 二次确认提示框上的内容，支持richtext类型字符串
		+ buttonAccept 二次确认提示框上接受按钮的文本
		+ buttonRefuse 二次确认提示框上拒绝按钮的文本

> 更多Android平台隐私与政策提示框配置方法，[详情](https://ask.dcloud.net.cn/article/36937)

##### 注意：
1. 最新的华为应用市场要求，隐私政策提示框上接受按钮的文本，必须为“同意”而不能是其他有歧义的文字。
2. 配置后提交云端打包后生效。理论上绝大部分和`manifest.json`生效相关的配置均需要提交云打包后生效

### 10.云对象拦截器应用  
云对象拦截器文档[详情查看](https://uniapp.dcloud.net.cn/uniCloud/client-sdk.html#add-interceptor)

1. 控制调试模式  
配置路径：`uni-starter/uni-starter.config.js`
云对象请求fail时，开启调试模式将以`showModal`的模式弹出真实错误信息。关闭调试模式，则以`showToast`的模式模糊提示（弹出系统错误请稍后再试！）

2. 裂变营销功能原理
当用户请求云对象`uni-id-co`的任何方式登录（含：注册并登录）功能时，
云对象拦截器逻辑内部：判断用户的剪切板是否包含`uniInvitationCode:`开头的邀请码，如果存在则在请求时带上此邀请码；实现裂变营销功能的用户关系绑定。

### 12.关于升级
- 项目升级  
uni-starter遵循uni-app的插件模块化规范，即：[uni_modules](https://uniapp.dcloud.io/uni_modules) 。它是个项目类型的插件。在项目的根目录下有一个符合uni_modules规范的package.json文件，在这个文件右键-从插件市场更新即可更新该插件。
	
- 插件升级  
非项目类型的`uni_modules`插件在项目根目录下的`uni_modules`目录下。以插件ID为插件文件夹命名，在该目录右键也会看到“从插件市场更新”选项，点击即可更新该插件。

uni-starter内集成的uni-id-pages、uni-upgrade-center等插件都可以独立升级。

### 13.多语言国际化  
uni-starter支持多语言国际化，默认关闭，可以在`uni-starter.config.js`->`i18n`->`enable`中配置。

如果你启用了多语言国际化需要先阅读：[uni-app多语言国际化](https://uniapp.dcloud.io/collocation/i18n?id=%e6%a1%86%e6%9e%b6%e5%86%85%e7%bd%ae%e7%bb%84%e4%bb%b6%e5%92%8capi%e5%9b%bd%e9%99%85%e5%8c%96)

### 14.微信登录自动获取头像  
当用户首次在微信小程序中通过微信登录应用。uni-starter将获取用户的微信头像，设置为当前账号头像。

**注意：** 保存头像的过程是：先将微信头像的图片下载，再上传到uniCloud云存储。而小程序平台要求在管理后台配置小程序应用的联网服务器域名，否则无法联网。请确认已正确配置download、uploadFile合法域名[详情查看](https://uniapp.dcloud.io/uniCloud/publish.html#useinmp)
	
## initApp()做了什么
1. 读取uni-starter.config并挂载到globalData的config下
2. 读取应用版本号，并存到globalData下
3. 检查是否有可更新的应用版本，决定是否启动在线更新版本
4. 监听设备的网络变化并以uni.showToast APi的方式提醒用户
5. 使用[拦截器](https://uniapp.dcloud.io/api/interceptor?id=addinterceptor) 实现：自动引导打开`选择图片`所需要的权限。当调用`uni.chooseImage`时检测到无权限则自动开启引导。并不是在每次调用接口时处理这类问题，你可以参考该例子做更多该类场景的处理。uni-starter也会持续完善。

## 配置文件  
uni-starter提供了`uni-starter.config.js`，可配置选择登录注册方式及优先级等，可指定该应用是否强制登录才能进入某个页面。配置项内容如下：
```js
module.exports = {
	"h5": {
		"url": "https://static-76ce2c5e-31c7-4d81-8fcf-ed1541ecbc6e.bspapp.com", //	前端网页托管的域名
		 // 在h5端全局悬浮引导用户下载app的功能 更多自定义要求在/common/openApp.js中修改
		"openApp": {
			//点击悬浮下载栏后打开的网页链接
			"openUrl": 'https://sj.qq.com/myapp/detail.htm?apkName=com.tencent.android.qqdownloader&info=6646FD239A6EBA9E2DEE5DFC7E18D867',
			//左侧显示的应用名称
			"appname": 'uni-starter',
			//应用的图标
			"logo": './static/logo.png',
		}
	},
	"mp": {
		"weixin": {
			//微信小程序原始id，微信小程序分享时
			"id": "gh_132465798"
		}
	},
	//关于应用
	"about": {
		//应用名称
		"appName": "uni-starter",
		//应用logo
		"logo": "/static/logo.png",
		//公司名称
		"company": "数字天堂（北京）网络技术有限公司",
		//口号
		"slogan": "为开发而生",
		//应用的链接，用于分享到第三方平台和生成关于我们页的二维码
		"download": "https://m3w.cn/uniapp",
		//应用版本号，用于非app端显示，app端自动获取
		"version":"1.0.0"
	},
	//用于打开应用市场评分界面
	"marketId":{
		"ios":"",
		"android":""
	},
	//配置多语言国际化。i18n为英文单词 internationalization的首末字符i和n，18为中间的字符数 是“国际化”的简称
	"i18n":{
		"enable":false //默认启用，国际化。如果你不想使用国际化相关功能，请改为false
	}
}
```

## 目录结构@catalogue
<pre v-pre="" data-lang="">
<code class="lang-" style="padding:0">
uni-starter
├─uniCloud	
│	├─cloudfunctions 云函数目录
│	|	├─common 公共模块
│	│	|	├─uni-config-center			uni-starter的服务端配置中心，项目所有云函数的配置在这里填写 <a target="_blank" href="https://ext.dcloud.net.cn/plugin?id=4425">详情</a>
│	│	|	|	├─index.js				config-center入口文件
│	│	|	|	└─uni-id				uni-id模块配置目录
│	│	|	|		├─config.json		uni-id对应的配置数据：微信登录、一键登录、短信验证码登录等key都在这里填写<a target="_blank" href="https://ext.dcloud.net.cn/plugin?id=4425">详情</a>
│	│	|	|		└─file.cert			uni-id依赖的配置文件,假如你使用微信发红包功能，需要的证书文件就是放到这里
│	|	|	└───uni-id					uni-id用户体系 <a target="_blank" href="https://uniapp.dcloud.io/uniCloud/uni-id-summary">详情</a>
│	|	├─check-version					检查更新云函数 <a target="_blank" href="https://ext.dcloud.net.cn/plugin?name=uni-upgrade-center-app">详情</a>
│	|	├─rewarded-video-ad-notify-url	签到插件广告回调 <a target="_blank" href="https://ext.dcloud.net.cn/plugin?name=uni-sign-in">详情</a>
│	|	├─uni-analyse-searchhot			云端一体搜索模板依赖的云函数 <a target="_blank" href="https://ext.dcloud.net.cn/plugin?id=3851">详情</a>
│	|	├─uni-captcha-co				云端一体图形验证码组件云对象 <a target="_blank" href="https://ext.dcloud.net.cn/plugin?name=uni-captcha">详情</a>
│	|	├─uni-clientDB-actions			客户端直接操作数据库拦截逻辑 <a target="_blank" href="https://uniapp.dcloud.net.cn/uniCloud/jql.html#action">详情</a>
│	|	├─uni-open-bridge				统一接管微信等三方平台认证的开源库 <a target="_blank" href="https://uniapp.dcloud.net.cn/uniCloud/jql.html#action">详情</a>
│	|	├─upgrade-center				云端一体uni升级中心的云函数 <a target="_blank" href="https://uniapp.dcloud.net.cn/uniCloud/jql.html#action">详情</a>
│	|	└─uni-id-co						用户中心云函数，实现用户注册、修改密码、发送验证码、快捷登录（微信、短信、账户、一键登录） <a target="_blank" href="https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html">详情</a>
│	└──database							云数据目录
│		├─db_init.json					db_init.json初始化数据库文件，其中不再包含schema <a target="_blank" href="https://uniapp.dcloud.net.cn/uniCloud/hellodb?id=db-init">详情</a>
│		├─opendb-app-versions.schema.json		应用版本，表结构文件
│		├─opendb-banner.schema.json	        	横幅数据表，表结构文件
│		├─opendb-feedback.schema.json	        意见反馈表，表结构文件
│		├─opendb-news-articles.schema.json	    新闻文章表，表结构文件
│		├─opendb-news-categories.schema.json	新闻分类表，表结构文件
│		├─opendb-news-comments.schema.json		新闻评论表，表结构文件
│		├─opendb-news-favorite.schema.json		新闻收藏表，表结构文件
│		├─opendb-search-hot.schema.json			热门搜索表，表结构文件
│		├─opendb-search-log.schema.json			搜索记录表，表结构文件
│		├─opendb-verify-codes.schema.json		验证码表，表结构文件
│		├─uni-id-log.schema.json	        	登录日志表，表结构文件
│		├─uni-id-scores.schema.json	        	用户积分表，表结构文件
│		└─uni-id-users.schema.json	        	用户表，表结构文件
├─pages										业务页面文件存放的目录
│	├─common						
│	│	└─webview							webview目录
│	│		└─webview.vue					webview页面	用于实现跨端的web页面浏览
│	├─grid
│	│	└─grid.vue	 						带宫格和banner的示例页面
│	├─list
│	│	├─list.vue	 						新闻列表
│	│	├─search
│	│	│	└─search						云端一体搜索插件
│	│	└─detail.vue						新闻详情
│	├─ucenter
│	│	├─about								关于我们
│	│	│	└─about
│	│	├─login-page						登录模块<a target="_blank" href="https://ext.dcloud.net.cn/plugin?id=8577">详情参考</a>
│	│	├─read-news-log						新闻阅读记录
│	│	│	└─read-news-log
│	│	├─invite							带用户inviteCode参数的应用下载页
│	│	│	└─invite
│	│	├─settings						
│	│	│	├─dc-push
│	│	│	│	└─push.js					push权限操作SDK
│	│	│	└─settings.vue					app设置
│	│	├─userinfo							用户个人信息
│	│	│	├─bind-mobile
│	│	│	│	└─bind-mobile.vue			绑定手机号码
│	│	│	├─limeClipper					图片裁剪插件,来源<a target="_blank" href="https://ext.dcloud.net.cn/plugin?id=3594">limeClipper @作者： 陌上华年</a>
│	│	│	│	├─images
│	│	│	│	│	├─photo.svg
│	│	│	│	│	└─rotate.svg
│	│	│	│	├─index.css
│	│	│	│	├─limeClipper.vue
│	│	│	│	├─README.md
│	│	│	│	└─utils.js
│	│	│	├─main.js
│	│	│	├─cropImage.vue		引用limeClipper的图片裁剪模块，为了方便二开可能会出现兼容`vue`与`nvue`，所以做成了`页面`而不是`组件`
│	│	│	└─userinfo.vue
│	|	└─ucenter.vue						用户中心
│	|
├─static	 							存放应用引用的本地静态资源（如图片、视频等）的目录，<b>注意：</b>静态资源只能存放于此
├─uni_modules						存放<a target="_blank" href="https://uniapp.dcloud.net.cn/plugin/uni_modules.html">uni_modules</a>规范的插件。
├─uni_modules_tools				uni_modules插件上传辅助脚本 <a href="https://ext.dcloud.net.cn/plugin?id=5256">详情</a>。
├─main.js							Vue初始化入口文件
├─App.vue							应用配置，用来配置App全局样式以及监听 <a href="/collocation/frame/lifecycle?id=应用生命周期">应用生命周期</a>
├─uni-starter.config				uni-starter的前端的配置文件，项目所有模块的配置在这里填写。详见该文件的代码注释。
├─manifest.json	 				配置应用名称、appid、logo、版本等打包信息，<a href="/collocation/manifest">详见</a>
└─pages.json						配置页面路由、导航条、选项卡等页面类信息，<a href="/collocation/pages">详见</a>
</code>
</pre>
完整的uni-app目录结构[详情](https://uniapp.dcloud.io/frame?id=%e7%9b%ae%e5%bd%95%e7%bb%93%e6%9e%84)

## 常见API示范
1. 判断当前用户是否拥有某角色`uniIDHasRole` 演示页面：`/pages/grid/grid` [API文档详情](https://uniapp.dcloud.io/api/global?id=uniidhasrole)
2. 指纹解锁、人脸解锁  演示页面：`/pages/ucenter/settings/settings` [API文档详情](https://uniapp.dcloud.io/api/system/authentication)

## 注意事项
1. 真机运行需要制作自定义基座，制作后选择运行到自定义基座
2. 苹果登录的图标，需要满足苹果应用市场的审核规范请勿随便修改；如需修改请先阅读:[Sign in with Apple Button](https://appleid.apple.com/signinwithapple/button)
3. 应用登录功能，默认不勾选同意隐私权限是响应安卓应用市场的规范；请勿修改该逻辑。
4. uni-id-pages 默认在刷新token（登录、注销、切换用户）后获取push客户端标识同步至uni-id-device表;如果你不使用push模块，请注释或删除，路径：`/uni-starter/uni_modules/uni-id-pages/init.js` 如下代码：
```js
//4. 同步客户端push_clientid至uni-id-device表
if (uniCloud.onRefreshToken) {
 uniCloud.onRefreshToken(() => {
  console.log('onRefreshToken');
  if (uni.getPushClientId) {
   uni.getPushClientId({
    success: async function(e) {
     console.log(e)
     let pushClientId = e.cid
     console.log(pushClientId);
     let res = await uniIdCo.setPushCid({
      pushClientId
     })
     console.log('getPushClientId', res);
    },
    fail(e) {
     console.error(e,'更多详情：https://uniapp.dcloud.net.cn/uniCloud/uni-starter.html#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9')
    }
   })
  }
 })
}
```
						

## FAQ：常见问题
1. 提示“公共模块uni-id缺少配置信息”解决方案：在cloudfunctions右键‘上传所有云函数、公共模块及actions’之后，需要在cloudfunctions -> common -> uni-config-center 目录单独上传一次，右键‘上传公共模块’。
2. 本项目代码可以商用，无需为DCloud付费。但不能把本项目的代码改造用于非uni-app和uniCloud的技术体系。即，不能将后台改成php、java等其他后台，这将违反使用许可协议。

## 相关案例
[
	![](https://web-assets.dcloud.net.cn/unidoc/zh/20211108121525.jpg)
](https://ext.dcloud.net.cn/search?q=uni-starter)
（点击跳转到案例列表）


## 第三方插件（感谢插件作者，排名不分前后）：
1. 图片裁剪 [limeClipper](https://ext.dcloud.net.cn/plugin?id=3594) @作者： 陌上华年
2. 二维码生成 [Sansnn-uQRCode](https://ext.dcloud.net.cn/plugin?id=1287) @作者： 3snn
