> 本文为uni-im v2.x 的文档，如果旧项目需要继续使用老版本的uni-im v1.x，另见：[https://gitcode.net/dcloud/hello-uni-im/-/blob/main/README.md](https://gitcode.net/dcloud/hello-uni-im/-/blob/main/README.md)

**uni-im 已开放需求征集和投票** [点此前往](https://vote.dcloud.net.cn/#/?name=uni-im)

# 简介
uni-im是云端一体的、全平台的、免费的、开源即时通讯系统。
- 基于uni-app，App、小程序、web全端兼容
- 基于uniCloud，前后端都使用js开发
- 基于[uni-push2](https://uniapp.dcloud.net.cn/unipush-v2.html)，专业稳定的全端推送系统
- 基于[uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html)，完善的账户体系
- 支持服务端为非uniCloud（比如：应用服务端的开发语言是php、java、go、.net、python、c#等）或 不基于uni-id-pages 开发的项目接入

案例：

<img width="600px" src="https://qiniu-web-assets.dcloud.net.cn/ext/uni-im/20230228110007.jpg"></img>

如图：在插件市场任意插件详情页面，点击咨询作者按钮，即可看到基于uni-im搭建的客服系统。

下载地址：[https://ext.dcloud.net.cn/plugin?name=uni-im](https://ext.dcloud.net.cn/plugin?name=uni-im)

## 特点优势  
- 性价比高；前后端代码均免费开源，相比竞品使用uni-im仅需花费极少的托管在uniCloud（serverless服务器）产生的费用[详情查看](#cost)
- 全端可用
- App端支持nvue，更好的长列表性能。list组件性能优势[详情参考](https://uniapp.dcloud.net.cn/component/list.html)
- 智能本地缓存（app端sqlite，web端indexDB，小程序端storage），更快的历史消息加载速度，更小的网络请求压力
- 中心化响应式数据管理，切换会话无需重新加载数据，更流畅的体验
- App端聚合多个手机厂商推送通道，app不在线也可以收到消息

## 版本计划  
### 已上线
- 应用内嵌入uni-im，使用户方便、实时的与App运营者互动，咨询问题、反馈意见、进行投诉。
- 可发送文字、图片、音频、视频、代码、任意文件
- im交友场景：群聊、好友关系
- 会话细节：消息删除、撤回、消息回复

### 后续计划
1. 通信方式扩展：音频通话、视频通话
2. 细节完善：聊天记录识别电话邮件、消息转发和批转、勿扰设置、会话置顶、留言转文字、图片提取文字
3. 客服场景：管理端支持座席（暂时可先用通过：给每个用户创建一个群，隐藏群信息查看入口，成员进出群实现转坐席）

优先开发哪些，取决于开发者的反馈。同时也欢迎开发者共建这个开源项目。

> uni-im相关功能建议或问题，可以加入由uni-im（本插件）搭建的交流群，[点此加入](https://im.dcloud.net.cn/#/?joinGroup=63ef49711d358337456f4d67)

## 使用uniCloud产生的费用说明@cost

uni-im本身并不收费，实际使用中需要依赖uniCloud云服务，会产生费用；而uniCloud的价格很实惠：  
- 调用10000次云函数仅需0.0133元
- 调用10000次数据库查询仅需0.015元
> 更多计费参考：[阿里云版uniCloud按量计费文档](https://uniapp.dcloud.net.cn/uniCloud/price.html#aliyun-postpay)

### 举例说明：

- 单聊场景，向用户发送一条消息的过程：
1. 调用uni-im-co云对象的sendMsg方法（产生1次云函数请求）
2. 查询当前对话的会话记录（产生1次云数据库读操作）
3. 根据步骤2的查询结果，如果已经有会话记录，就更新会话，否则就创建一条会话记录（产生1次云数据库写操作）
4. 查询发送消息的用户信息，用于接收消息时在通知栏显示发送者昵称和头像（产生1次云数据库读操作）
5. 记录发送的消息内容到数据库，用于保存消息历史记录（产生1次云数据库写操作）
6. 以`user_id`为标识通过`uni-push2`向用户发送消息会产生0.00000283元uniCloud使用费用[详情查看](https://uniapp.dcloud.net.cn/unipush-v2.html#cost)

合计：1次云函数请求、2次数据库读操作、2次数据库写操作、1次uni-push2推送操作，即 (1 * 0.0133 + 2 * 0.015 + 2 * 0.05 + 1 * 0.0283)/10000 ≈ 0.000017元

- 群聊场景，向用户发送一条消息的过程：
1. 调用uni-im-co云对象的sendMsg方法（产生1次云函数请求）
2. 查询当前用户是否为群成员，防止非群成员发送消息（产生1次云数据库读操作）
3. 查询当前对话的会话记录（产生1次云数据库读操作）
4. 根据步骤3的查询结果，如果已经有会话记录，就更新会话，否则就创建一条会话记录（产生1次云数据库写操作）
5. 查询发送消息的用户信息，用于接收消息时在通知栏显示发送者昵称和头像（产生1次云数据库读操作）
6. 记录发送的消息内容到数据库，用于保存消息历史记录（产生1次云数据库写操作）
7. 以群id为参数，调用uni-im-co云对象的sendMsgToGroup方法，这是一个递归方法每次向500名群成员推送消息（如果群成员数量为0-500只需执行1次，500-1000需执行2次，以此类推），（会产生最少1次数据库读操作，和1次以`user_id`为标识通过`uni-push2`向用户发送消息会产生0.00000283元uniCloud使用费用[详情查看](https://uniapp.dcloud.net.cn/unipush-v2.html#cost)）

合计：向500人群发送消息，会产生：1次云函数请求、4次数据库读操作、2次数据库写操作、1次uni-push2推送操作，即 (1 * 0.0133 + 4 * 0.015 + 2 * 0.05 + 1 * 0.0283)/10000 ≈ 0.000020元

相比市面上同类型产品，使用uni-im仅需花费如此便宜的uniCloud（serverless服务器）费用；在价格这块uni-im性价比极高。

# 快速部署体验
## 前提条件
1. 开通uniCloud并创建服务空间 [控制面板](https://unicloud.dcloud.net.cn/)  
	传统的IM产品服务端代码托管在服务商名下的服务器内，你只拥有代码和产生的数据的使用权，并非所有权；而uni-im的前后端代码都是开源的，是将代码托管在你名下的unicloud（[serverless](https://uniapp.dcloud.net.cn/uniCloud/#%E4%BB%80%E4%B9%88%E6%98%AFserverless)服务器）内。
2. 开通`uni-push2.0`（注意：**无论是APP、小程序、web端都需要开通，否则消息将无法实时更新**）[点此前往开通](https://uniapp.dcloud.net.cn/unipush-v2.html#%E7%AC%AC%E4%B8%80%E6%AD%A5-%E5%BC%80%E9%80%9A)

## 体验步骤

1. 打开`uni-im`插件下载地址：[https://ext.dcloud.net.cn/plugin?name=uni-im](https://ext.dcloud.net.cn/plugin?name=uni-im)
2. 点击`使用HBuilderX导入示例项目`
3. 对项目根目录uniCloud点右键选择“云服务空间初始化向导”界面按提示部署项目（注意：选择绑定的服务空间，须在uni-push2.0的[web控制台](https://dev.dcloud.net.cn/pages/app/push2/info)关联）
4. `运行项目`到2个不同的浏览器，因为在同一个浏览器打开相同网络地址（ip或者域名）的uni-im项目，socket会相互占线。
	所以需要使用两个浏览器（或者使用浏览器`打开新的无痕式窗口`功能充当第二个浏览器）分别`注册账号并登录`，
	到此部署已经结束
5. 向对应的用户发起会话，通过访问路径：`/uni_modules/uni-im/pages/chat/chat?user_id=` + `对应的用户id` 即可

## 部署到自己的项目
1. 打开`uni-im`插件下载地址：[https://ext.dcloud.net.cn/plugin?name=uni-im](https://ext.dcloud.net.cn/plugin?name=uni-im)
2. 点击`使用HBuilderX导入插件`，选择你的项目，点击确定（同时会自动导入依赖的uni_modules`uni-id-pages`）按提示操作自动配置`pages.json`
3. 打开项目根目录的App.vue文件，初始化uni-id-pages和uniIm模块  
示例如下：

```html
<script>
	//1. 导入统一身份信息管理模块
	import uniIdPagesInit from '@/uni_modules/uni-id-pages/init.js';
	//2. 导入uniIm的Utils工具类
	import uniImUtils from '@/uni_modules/uni-im/common/utils.js';
	export default {
		onLaunch: async function() {
			console.log('App Launch');
			//3. 初始化uni身份信息管理模块
			uniIdPagesInit();
			//4. 初始化uniIm
			uniImUtils.init();
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		}
	};
</script>
```

4. 部署到uniCloud  
对项目根目录uniCloud点右键，选择“云服务空间初始化向导” 按提示部署项目（注意：选择绑定的服务空间，须在uni-push2.0的[web控制台](https://dev.dcloud.net.cn/pages/app/push2/info)关联）

5. 登录uni-im  

	uni-im的服务端代码托管在uniCloud下，账户体系是[uni-id 4.0+](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html)的；
	uni-app生态下绝大部分项目的架构与uni-im相同，所以不需要考虑账号打通问题，用户登录项目后，不需要额外登录uni-im。

	而有些传统项目，服务端的开发语言是php、java、go、.net、python、c#等，是自己设计的账号体系；用户登录所获得的token，与uni-im所需的token不是同一个账号体系；需要在传统服务器端，通过[uni-id的外部系统联登](./uni-id/cloud-object.md#external)同步你项目的账号数据到uni-im用户体系并获得uni-id的token，客户端再调用uniImUtils的login方法登录uni-im；示例代码如下：

	```js
	import uniImUtils from '@/uni_modules/uni-im/common/utils.js';

	uni.request({
		url: 'https://www.example.com/login', //仅为示例，并非真实接口地址。
		data: {
			username: 'test',
			password: '123456'
		},
		success:async (res) => {
			console.log(res.data); 
			// 得到你自己项目的token和uni-id的token
			let {token,uniIdToken} = res.data
			uni.setStorageSync('token',token)
			// 【请注意】这里的`uniIdToken` 是一个`对象`：包含：`token`和`tokenExpired`
			await uniImUtils.login(uniIdToken)
		}
	});

	```

	其他情况：  

	- 客户端如果不是uni-app的，如果是网页，可iframe内嵌。如果是原生app，可嵌入[uni小程序sdk](https://nativesupport.dcloud.net.cn/README)

	- 不基于`uni-id-pages`的客户端代码，仅基于`uni-id-co`的项目，需要在登录成功和用户信息更新时，同步更新uniId store内的当前用户信息（uni-im显示当前用户头像、昵称时会用到）示例代码：

	```js
		//导入uniCloud客户端账户体系，用户信息状态管理模块
		import {mutations as uniIdMutations} from '@/uni_modules/uni-id-pages/common/store.js';
		await uniIdMutations.updateUserInfo()
	```
	- 基于老版uni-id(版本号：3.x) 开发的项目，需要如下改造：
		1. 在登录成功和token续期后，绑定当前账号与设备推送标识的关联关系。示例代码：
		
	```js
		const uniIdCo = uniCloud.importObject("uni-id-co", {customUI: true})
		uni.getPushClientId({
			success: async function(e) {
				console.log(e)
				let pushClientId = e.cid
				let res = await uniIdCo.setPushCid({
					pushClientId
				})
				console.log('getPushClientId', res);
			},
			fail(e) {
				console.error(e)
			}
		})
	```
		2. 在登录成功和用户信息更新时，同步更新uniId store内的当前用户信息（uni-im显示当前用户头像、昵称时会用到）示例代码：
	```js
		//导入uniCloud客户端账户体系，用户信息状态管理模块
		import {mutations as uniIdMutations} from '@/uni_modules/uni-id-pages/common/store.js';
		await uniIdMutations.updateUserInfo()
	```

6. 确保账户对接成功后，打开“用户列表页”，路径：`/uni_modules/uni-im/pages/userList/userList`可以看到所有的注册用户
7. 点击某个用户，会自动创建与该用户的会话，并打开“聊天对话页”（路径：`/uni_modules/uni-im/pages/chat/chat`），然后就可以开始聊天了。
8. 还可以导入uni-im的示例项目作为管理员端与用户聊天。
9. 如果你是2个不同appId的应用相互通讯（比如：淘宝的买家端和卖家端通讯）的场景，请打开聊天对话文件（路径：`/uni_modules/uni-im/pages/chat/chat`）搜索`data.appId = this.systemInfo.appId`修改`this.systemInfo.appId`为相对的appId

不基于uni-id-pages开发的项目还要注意以下两个问题：
1. 退出登录；需要在执行退出登录/切换账号时，调用uni-id的退出登录接口。否则会出现退出登录后的设备仍然能收到im消息，或导致此设备再登录其他账号不能正常收到消息的问题；示例代码如下：
```js
import {mutations as uniIdMutations} from '@/uni_modules/uni-id-pages/common/store.js'
uniIdMutations.logout()
```
2. token有效期问题，保证你的项目token有效期和uni-id的token有效期保持一致。这涉及两个操作：
- 配置uni-id的token过期时间与你的项目token有效期一致。配置路径：`/uni_modules/uni-config-center/uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json`，关于配置说明[详情查看](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#config)
- 如果你的项目有token续期逻辑，需要在续期后调用uni-id的token续期接口，示例代码：
```js
const uniIdCo = uniCloud.importObject("uni-id-co", {customUI: true})
await uniIdCo.refreshToken()
```

常见问题：
1. 为什么不能实时接收到推送的消息，需要刷新或者关闭重新打开才能收到？  
答： uni-im通过`uni-push2`实现消息实时送达，请检查是否已正确配合并开通，且在配置正常后重新登录

2. 怎么样快速上手  
答：先下载示例项目，部署并正确配置push后，体验没问题了再部署到自己的项目。


## 限制普通用户向其他用户发起会话
客服场景下，我们希望管理员客服可以向任意用户发起会话。而普通用户的会话对象只能是客服。
- 客户端限制  
删除或隐藏“用户列表页”和“会话列表页”，仅保留“聊天对话页”。并绘制按钮，如：“联系客服”，点击后打开“聊天对话页” 
逻辑代码如下：
```js
uni.navigateTo({
	url:'/uni_modules/uni-im/pages/chat/chat?user_id=' + 对应的用户id
})
```

- 服务端限制  

1. 添加`uni-im`配置文件，打开：`/uni_modules/uni-config-center/uniCloud/cloudfunctions/common/uni-config-center/`；新建`uni-im`文件夹和`config.json`文件，示例如下：
```json
{
	"customer_service_uids":["user-id-01","user-id-02"]
}
```

2. 配置`customer_service_uids`的值为管理员客服的user_id（支持多个以数组的形式指定），如果会话双方均不属于此域则无法通讯。不配置或为false则表示不限制。

# 开发文档  
## 目录结构  
<pre v-pre="" data-lang="">
<code class="lang-" style="padding:0">
├─uni_modules
│    ├─其他module
│    └─uni-im
│        ├─uniCloud
│        │    ├─cloudfunctions                         云函数目录
│        │    │    └─uni-im-co                         集成调用uni-im方法的云对象
│        │    └─database
│        │      ├─uni-id-users.schema.ext.js           用户表触发器
│        │      ├─uni-im-conversation.schema.ext.js    聊天会话表触发器
│        │      ├─uni-im-conversation.schema.json      聊天会话表的表结构
│        │      ├─uni-im-friend-invite.schema.ext.js   邀请加为好友表触发器
│        │      ├─uni-im-friend-invite.schema.json     邀请加为好友表表结构
│        │      ├─uni-im-friend.schema.ext.js          好友关系表触发器
│        │      ├─uni-im-friend.schema.json            好友关系表表结构
│        │      ├─uni-im-group-join.schema.ext.js      申请加入群聊表触发器
│        │      ├─uni-im-group-join.schema.json        申请加入群聊表表结构
│        │      ├─uni-im-group-member.schema.ext.js    群成员表触发器
│        │      ├─uni-im-group-member.schema.json      群成员表表结构
│        │      ├─uni-im-group.schema.ext.js           群信息表触发器
│        │      ├─uni-im-group.schema.json             群信息表表结构
│        │      ├─uni-im-msg.schema.ext.js             聊天消息表触发器
│        │      ├─uni-im-msg.schema.json               聊天消息表表结构
│        │      └─uni-im-notification.schema.json      推送消息记录表（仅记录系统消息）
│        ├─common
│        │    ├─appEvent.js             生命周期事件api库
│        │    ├─emojiCodes.js           emoji表情列表
│        │    ├─initIndexDB.js          indexDB本地数据库初始化文件（仅Web端使用）
│        │    ├─md5.js                  md5哈希加密算法（用于本地直接生成会话id）
│        │    ├─toFriendlyTime.js       时间戳转友好时间提示字符库文件（如：x年x月x日，昨天，下午，周二，1小时前等）
│        │    ├─sqlite.js               sqlite本地数据库初始化文件（仅App端使用）
│        │    └─utils.js                工具类库
│        ├─components
│        │    └─uni-im-msg              显示聊天消息气泡组件
│        ├─ lib
│        │    ├─createObservable.js     创建响应式对象文件
│        │    ├─main.js                 核心库入口文件
│        │    └─msgManager.js           消息管理类库
│        ├─pages
│        │    ├─chat
│        │    │    ├─info.nvue           对话详情（显示好友信息，可在此页面操作删除好友。后续支持：备注好友、打标签、拉黑、屏蔽等功能）
│        │    │    └─chat.nvue           聊天对话页
│        │    ├─common                   公共页面
│        │    │    ├─uni-im-code-pages   代码类型消息浏览专用页面
│        │    │    └─video               视频播放专用页面
│        │    ├─contacts
│        │    │    ├─addPeopleGroups     查找并添加用户或群
│        │    │    ├─createGroup         创建群聊
│        │    │    ├─groupList           我的群列表
│        │    │    ├─notification        im系统通知页面
│        │    │    └─contacts.nvue       联系人页面
│        │    ├─group                    
│        │    │    ├─groupQRCode         群二维码页面（未完成）
│        │    │    └─info                群信息页面（管理群）
│        │    ├─index                    首页（展示会话列表）
│        │    └─userList                 所有用户列表页
│        ├─static                        静态资源目录
│        ├─changelog.md                  更新日志
│        ├─package.json                  包管理文件
│        └─readme.md                     插件自述文件
</code>
</pre>
名词解释
- 聊天会话ID  
根据通讯双方用户id，或群聊id，生成的唯一索引值；用于更加方便查找聊天记录等。
- 聊天会话  
以会话ID为索引的一组数据，记录：未读消息数量、会话更新时间、会话类型、会话所属用户的id、对话的用户id、对话的群id、群信息、最后一条消息概述（文本消息的前15个字，消息为多媒体时只描述类型）

## uni-im-co 云函数（云对象）  
API列表

|API				 |描述										 	|
|--					 |--											|
|getConversationList |获取会话列表[见下方](#coGetConversationList)		|
|sendMsg			 |发送聊天消息[见下方](#coSendMsg)					|
|sendPushMsg		 |触发器专用消息推送方法							|
|sendMsgToGroup		 |向群用户递归推送消息[见下方](#coSendMsgToGroup)	|
|addFriendInvite	 |向用户发起加好友邀请[见下方](#coAddFriendInvite)							 	|
|chooseUserIntoGroup |选择用户加入群聊（不传群id时为创建群）[见下方](#coSendMsgToGroup)			 	|
|revokeMsg			 |撤回已经发送的消息[见下方](#coRevokeMsg)			 	|



### 获取会话列表 getConversationList@coGetConversationList
**参数说明**

|参数名			|类型	|必填	|说明						|
|--				|--		|--		|--							|
|limit			|number	|否		|数量，默认值：500				|
|maxUpdateTime	|number	|否		|最大更新时间（实现高性能分页）	|
|page			|number	|是		|页码						|

**返回值**

|参数名	|类型				|说明		|
|--		|--					|--			|
|errCode|string&#124;number	|错误码，0表示成功	|
|errMsg	|string				|错误信息	|
|data	|array				|会话数据	|

### 发送聊天消息 sendMsg@coSendMsg

|参数名		|类型	|必填	|说明			|
|--			|--		|--		|--				|
|appId		|string	|是		|接收消息的appId；如果你是2个不同appId的应用相互发，请修改此值为相对的appId	|
|to_uid		|string	|否		|接收消息的用户id	|
|group_id	|string	|否		|接收消息的群id|
|body		|string	|是		|消息内容，`type = text`时为文本内容.`type = image`时为图片网络地址|
|type		|string	|是		|消息类型，暂时仅支持：text(表示文本类型)、image(表示图片类型)|
|isRetries	|Boolean|否		|是否为重发|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码，0表示成功	|
|errMsg							|string				|错误信息			|
|data							|object				|				|
|&nbsp;&#124;-&nbsp;create_time	|无					|创建时间			|

**接口形式**

```js
const uniImCo = uniCloud.importObject('uni-im-co', {
  customUI: true
});
await uniImCo.sendMsg({
  to_uid:"630cacf46293d20001f3c368",
  type:"text",
  body:"您好！"
})
```

### 向群用户递归推送消息 sendMsgToGroup@coSendMsgToGroup
注意：这是一个递归云对象，500个设备为一组批量向用户推送消息（该方法仅支持云对象的方法，或者触发器调用）

|参数名			|类型	|必填	|说明			|
|--				|--		|--		|--				|
|appId			|string	|是		|接收消息的应用appId|
|pushParam		|object	|是		|参数同uni-push2.0的sendMessage方法，详情参考[https://uniapp.dcloud.net.cn/uniCloud/uni-cloud-push/api.html#sendmessage](https://uniapp.dcloud.net.cn/uniCloud/uni-cloud-push/api.html#sendmessage)|
|before_id		|string	|否		|从哪个用户id开始（用于实现高性能分页）|
|push_clientids	|array	|否		|个推设备id列表|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码，0表示成功	|
|errMsg							|string				|错误信息			|

### 撤回已发送的消息 revokeMsg@coRevokeMsg
|参数名			|类型	|必填	|说明			|
|--				|--		|--		|--				|
|msgId			|string	|是		|消息id			|
**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码，0表示成功	|
|errMsg							|string				|错误信息			|


### 向用户发起加好友邀请 addFriendInvite@coAddFriendInvite

|参数名			|类型	|必填	|说明			|
|--				|--		|--		|--				|
|to_uid			|string	|是		|被邀请的用户id|
|message		|string	|否		|请求信息|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码，0表示成功	|
|errMsg							|string				|错误信息			|

### 选择用户加入群聊 chooseUserIntoGroup@coSendMsgToGroup

|参数名			|类型	|必填	|说明		|
|--				|--		|--		|--			|
|group_id		|string	|否		|群id（为空则创建群）	|
|user_ids		|string	|是		|用户id数组	|

**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码，0表示成功	|
|errMsg							|string				|错误信息			|
|data							|object				|返回信息			|
|&nbsp;&#124;-&nbsp;group_id	|string				|群id			|


## 服务端配置@uni-im-cloud-config 
路径：`/uni_modules/uni-config-center/uniCloud/cloudfunctions/common/uni-config-center/uni-im/config.json`

|字段名				|数据类型		|说明																	|
|--					|--				|--																	|
|customer_service_uids			|string/boolean	|客服用户id，不限制则填`false`即可；仅conversation_grade的值为100时有效	|
|conversation_grade	|int			|控制发起会话的条件，详情[会话控制](#conversation_grade)					|

### 会话控制@conversation_grade

|值	|说明									|
|--	|--										|
|0	|不限制									|
|100|仅限当前用户向：客服、好友、群成员发起会话	|
|200|仅限当前用户向：好友或群成员发起会话			|


## 客户端sdk@clientSkd

入口文件路径:`@/uni_modules/uni-im/lib/main.js`

uni-im2.0 废弃了1.0通过Vuex的状态管理方式，不再需要关心vuex的用法，直接当做一个全局的响应式js变量即可。

### state

|名称						|类型			|说明																																																		|
|--							|--				|--																																																			|
|conversation				|object			|会话对象																																																	|
|&nbsp;&#124;-&nbsp;dataList|array			|会话数据列表																																																|
|&nbsp;&#124;-&nbsp;hasMore	|boolean		|是否还有更多会话数据																																														|
|currentConversationId		|string			|正在对话的会话id																																															|
|heartbeat					|timestamp		|心跳（精确到秒）详情：[心跳概念说明](#heartbeatExplain)																																															|
|friend						|object			|好友对象																																																	|
|&nbsp;&#124;-&nbsp;dataList|array			|好友数据列表																																																|
|&nbsp;&#124;-&nbsp;hasMore	|boolean		|是否还有更多好友数据																																														|
|group						|object			|聊天群对象																																																	|
|&nbsp;&#124;-&nbsp;dataList|array			|聊天群数据列表																																																|
|&nbsp;&#124;-&nbsp;hasMore	|boolean		|是否还有更多群聊数据																																														|
|notification				|object			|系统通知对象																																																|
|&nbsp;&#124;-&nbsp;dataList|array			|系统通知数据列表																																															|
|&nbsp;&#124;-&nbsp;hasMore	|boolean		|是否还有更多系统通知数据																																													|
|usersInfo					|object			|存储所有出现过的用户信息，包括群好友信息																																									|
|isWidescreen				|boolean		|是否为pc宽屏																																																|
|systemInfo					|object			|系统信息详情参考：[https://uniapp.dcloud.net.cn/api/system/info.html#系统信息的概念](https://uniapp.dcloud.net.cn/api/system/info.html#%E7%B3%BB%E7%BB%9F%E4%BF%A1%E6%81%AF%E7%9A%84%E6%A6%82%E5%BF%B5)	|
|indexDB					|object/boolean	|indexDB对象（仅web端有效）																																													|
|audioContext				|object/boolean	|audio对象																																													|
|dataBaseIsOpen				|boolean		|判断本地sqlite数据库是否已经打开(仅app端有用)																																								|
|socketOpenIndex			|number			|记录socket打开次数（用于处理：从云端同步，socket意外断开期间丢失的数据使用）																																													|

心跳概念说明 heartbeat @heartbeatExplain  
uni-im的会话列表和消息列表，需要显示实时的发生时间。而一个应用开启太多的定时器，会消耗大量的系统性能。  
所以uni-im提供了一个每秒钟更新一次的响应式数据`heartbeat`，由uniImInit方法：启用一个定时器刷新，挂载在全局，所有应用场景引用这一个变量即可

#### methods

|名称							|说明						|
|--								|--							|
|conversation					|会话对象						|
|&nbsp;&#124;-&nbsp;get			|获取会话数据					|
|&nbsp;&#124;-&nbsp;loadMore	|加载更多会话数据				|
|&nbsp;&#124;-&nbsp;unreadCount	|统计所有消息的未读数			|
|&nbsp;&#124;-&nbsp;remove		|删除会话						|
|notification					|系统消息						|
|&nbsp;&#124;-&nbsp;get			|获取系统消息					|
|&nbsp;&#124;-&nbsp;loadMore	|加载更多系统消息				|
|&nbsp;&#124;-&nbsp;unreadCount	|统计未读数					|
|friend							|好友列表						|
|&nbsp;&#124;-&nbsp;get			|获取好友数据					|
|&nbsp;&#124;-&nbsp;loadMore	|加载更多系统消息				|
|group							|群列表						|
|&nbsp;&#124;-&nbsp;get			|获取群聊数据					|
|&nbsp;&#124;-&nbsp;loadMore	|加载更多群聊数据				|
|mergeUsersInfo					|添加用户信息到本地用户信息库	|
|clearUnreadCount				|设置某个会话的未读消息数为已读	|


使用示例：  
```js
//引入uniImMethods
import uniIm from '@/uni_modules/uni-im/lib/main.js';
```

- 获取会话数据

1. 获取全部会话数据
```js
let param = null
let conversationList = await uniIm.conversation.get(param)
```
2. 获取指定会话的id会话数据
```js
//xxx表示会话id
let param = "xxx"
let conversationList = await uniIm.conversation.get(param)
```
3. 获取指定好友id的会话数据（如果本地不存在则从云端拉取，仍然不存在则本地自动创建）
```js
//xxx表示好友id
let param = {"friend_uid":"xxx"},
let conversationList = await uniIm.conversation.get(param)
```
4. 获取指定群聊id的会话数据（如果本地不存在则从云端拉取，仍然不存在则本地自动创建）
```js
//xxx表示群聊id
let param = {"group_id":"xxx"}
let conversationList = await uniIm.conversation.get(param)
```

- 加载会话数据

1. 加载更多会话数据（分页加载，新数据的会话更新时间，小于列表中最小的会话更新时间）
```js
let param = null
let conversationList = await uniIm.conversation.loadMore(param)
```

2. 加载指定会话id的会话数据
```js
// xxx表示会话id
let param = 'xxx' 
let conversationData = await uniIm.conversation.loadMore(param)
```

**返回值** 

|属性名				|类型			|说明		|
|--					|--				|--	|
|id					|string			|当前会话id		|
|title				|string			|普通会话为对方的用户名或昵称、群会话为群昵称	|
|avatar_file		|uniCloud file	|普通会话为对方的用户头像、群会话为群头像		|
|unread_count		|number			|未读消息数										|
|user_id			|string			|对话的用户id（群聊会话时为空）					|
|group_id			|string			|对话的群聊id（普通会话时为空）					|
|update_time		|timestamp		|更新时间（每次会话会更新）						|
|msgList			|array			|当前会话聊天数据列表							|
|chatText			|string			|当前会话的文本框文字内容						|


- 统计所有消息的未读数  
```js
let unreadCount = await uniIm.conversation.unreadCount()
```

- 删除指定id的会话数据  
```js
// xxx表示会话id
let param = 'xxxx'
await uniIm.conversation.remove(param)
```

- 获取系统消息数据  

1. 不限类型
```js
let param = null
await uniIm.notification.get(param)
```

2. 指定类型（单个）
```js
// uni-im-group-join-request 表示加群通知
let param = {type:"uni-im-friend-invite"} 
await uniIm.notification.get(param)
```

3. 指定类型（多个）
```js
// uni-im-group-join-request uni-im-friend-invite 表示加群通知、好友加请求通知
let param = {type:["uni-im-friend-invite","uni-im-friend-invite"]} 
await uniIm.notification.get(param)
```

4. 排除类型（单个）
```js
// uni-im-group-join-request 表示加群通知
let param = {excludeType:"uni-im-friend-invite"} 
await uniIm.notification.get(param)
```

5. 排除类型（多个）
```js
// uni-im-group-join-request uni-im-friend-invite 表示加群通知、好友加请求通知
let param = {excludeType:["uni-im-friend-invite","uni-im-friend-invite"]}
await uniIm.notification.get(param)
```

- 加载系统消息数据  
参数与`获取系统消息数据`一致

- 获取好友数据  
```js
await uniIm.friend.get()
```

- 加载更多好友数据  
1. 分页加载  
```js
await uniIm.friend.loadMore()
```
2. 加载指定好友数据  
```js
let param = {"friend_uid":"xxx"}
await uniIm.friend.loadMore(param)
```
- 删除好友数据  
```js
let param = {"friend_uid":"xxx"}
await uniIm.friend.remove(param)
```

- 获取群聊数据  
```js
await uniIm.group.get()
```

- 加载更多群聊数据  
1. 分页加载  
```js
await uniIm.group.loadMore()
```
2. 加载指定群聊数据  
```js
let param = {"group_id":"xxx"}
await uniIm.group.loadMore(param)
```
- 删除群聊数据  
```js
let param = {"group_id":"xxx"}
await uniIm.group.remove(param)
```

- 添加用户信息到本地用户信息库
```js
// xxx表示用户数据
let usersInfo = {xxx}
await uniIm.mergeUsersInfo(usersInfo)
```

- 设置某个会话的未读消息数为已读
```js
// xxx表示会话id
let conversation_id = "xxx"
await uniIm.clearUnreadCount(conversation_id)
```

#### 工具类库@utils
utils封装了uni-im常用方法的模块，路径：`/uni_modules/uni-im/common/utils.js`

|名称				|类型		|说明															|入参				|返回值																				|
|--					|--			|--																|--					|--																					|
|init				|function	|初始化uni-im（监听聊天消息，定时每秒更新心跳值为当前时间戳）			|无					|无																					|
|getConversationId	|function	|获取会话id														|对话的用户id或群id 详见[详见](#getConversationId)	|无																					|
|toFriendlyTime		|function	|用于将时间戳转友好时间提示（距离当前2小时内的时间戳，每隔一秒钟会刷新一次）	|时间戳：timestamp	|格式化后的时间字符串。如：x年x月x日，昨天，下午，1小时前等									|
|clearPushNotify	|function	|清空push消息栏通知												|无					|无																					|
|login				|function	|非uni-id体系系统登录到uni-im方法									|时间戳：timestamp	|参数为对象，含token和token过期时间，例如：`{"token":"xxx","tokenExpired":1679403132582}`	|

- 获取会话id @getConversationId
1. 获取单聊会话id
```js
let friend_uid = "xxx"
uniIm.getConversationId(friend_uid,'single')
```
2. 获取群聊会话id
```js
let group_id = "xxx"
uniIm.getConversationId(group_id,'group')
```

## 重要更新说明：
- [V2.0.14,V2.0.13](https://ext.dcloud.net.cn/plugin?id=9711&update_log) 更新解决了：uni-id-users表的触发器`uni-id-users.schema.ext.js`的兼容性问题。
这个问题可能会和你的项目产生冲突，请升级或者下载最新版的uni-im复制`uni_modules/uni-im/unicloud/database/uni-id-users.schema.ext.js`文件复制到你的项目中以覆盖原文件。


## 项目升级  
uni-im遵循uni-app的插件模块化规范，即：[uni_modules](https://uniapp.dcloud.io/uni_modules)。

在项目根目录下的`uni_modules`目录下，以插件ID即`uni-im`为插件文件夹命名，在该目录右键也会看到“从插件市场更新”选项，点击即可更新该插件。也可以用插件市场web界面下载覆盖。


## 许可协议
uni-im源码使用许可协议

2022年10月

本许可协议，是数字天堂（北京）网络技术有限公司（以下简称DCloud）对其所拥有著作权的“DCloud uni-im”（以下简称软件），提供的使用许可协议。

您对“软件”的复制、使用、修改及分发受本许可协议的条款的约束，如您不接受本协议，则不能使用、复制、修改本软件。

授权许可范围

a) 授予您永久性的、全球性的、免费的、非独占的、不可撤销的本软件的源码使用许可，您可以使用这些源码制作自己的应用。

b) 您只能在DCloud产品体系内使用本软件及其源码。您不能将源码修改后运行在DCloud产品体系之外的环境，比如客户端脱离uni-app，或服务端脱离uniCloud。

c) DCloud未向您授权商标使用许可。您在根据本软件源码制作自己的应用时，需以自己的名义发布软件，而不是以DCloud名义发布。

d) 本协议不构成代理关系。

DCloud的责任限制
“软件”在提供时不带任何明示或默示的担保。在任何情况下，DCloud不对任何人因使用“软件”而引发的任何直接或间接损失承担责任，不论因何种原因导致或者基于何种法律理论,即使其曾被建议有此种损失的可能性。

您的责任限制

a) 您需要在授权许可范围内使用软件。

b) 您在分发自己的应用时，不得侵犯DCloud商标和名誉权利。

c) 您不得进行破解、反编译、套壳等侵害DCloud知识产权的行为。您不得利用DCloud系统漏洞谋利或侵害DCloud利益，如您发现DCloud系统漏洞应第一时间通知DCloud。您不得进行攻击DCloud的服务器、网络等妨碍DCloud运营的行为。您不得利用DCloud的产品进行与DCloud争夺开发者的行为。

d) 如您违反本许可协议，需承担因此给DCloud造成的损失。

本协议签订地点为中华人民共和国北京市海淀区。

根据发展，DCloud可能会对本协议进行修改。修改时，DCloud会在产品或者网页中显著的位置发布相关信息以便及时通知到用户。如果您选择继续使用本框架，即表示您同意接受这些修改。

条款结束
