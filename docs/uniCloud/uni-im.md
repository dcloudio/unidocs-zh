> 本插件APP端需要HBuilderX 3.6.9 及其以上版本支持，微信小程序和网页端需要HBuilderX 3.6.4 及其以上版本支持。

# 简介
uni-im是云端一体的、全平台的、免费的、开源即时通讯系统。
- 基于uni-app，App、小程序、web全端兼容
- 基于uniCloud，前后端都使用js开发
- 基于[uni-push2](https://uniapp.dcloud.net.cn/unipush-v2.html)，专业稳定的全端推送系统
- 基于[uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html)，完善的账户体系

案例：打开[插件市场](https://ext.dcloud.net.cn/plugin?id=55)，点击咨询作者按钮

下载地址：[https://ext.dcloud.net.cn/plugin?name=uni-im](https://ext.dcloud.net.cn/plugin?name=uni-im)

## 特点优势  
- 全端可用
- App端支持nvue，更好的长列表性能。list组件性能优势[详情参考](https://uniapp.dcloud.net.cn/component/list.html)
- 智能本地缓存，更快的历史消息加载速度，更小的网络请求压力
- 中心化响应式数据管理，切换会话不重头加载数据，更流畅的体验
- App端聚合多个手机厂商推送通道，app不在线也可以收到消息

## 版本计划  
### 1.0 面向简单客服场景（已上线）
- 应用内嵌入uni-im，使用户方便、实时的与App运营者互动，咨询问题、反馈意见、进行投诉。
- 可发送文字、图片

### 后续计划
1. 发送内容扩展：音频、视频、代码、任意文件
2. 通信方式扩展：音频通话、视频通话
3. 细节完善：聊天记录识别电话邮件、消息删除和批删、消息回复、消息转发和批转、消息撤回、勿扰设置、会话置顶、留言转文字、图片提取文字
4. 客服场景：管理端支持座席
5. im交友场景：群聊、好友关系

优先开发哪些，取决于开发者的反馈。同时也欢迎开发者共建这个开源项目。

> uni-im相关功能建议或问题交流，暂时请加QQ群号:[854520009](https://qm.qq.com/cgi-bin/qm/qr?k=DJNSajXAYHnYcr9pouOfxF9Rwwl1AJHc&jump_from=webapi&authKey=HZ1fG58Eudp3o0GCoyx1/UPMY9Fv1sGT5jdqYqPJlTGT0XVUip3Bk8E+UyToQOMo)。后续uni-im支持群聊后会废除QQ改为uni-im。

### 已知bug
- Mac端Safari浏览器，消息列表界面滚动到顶部无法自动加载历史消息

# 快速部署体验
## 前提条件
1. 开通uniCloud并创建服务空间 [控制面板](https://unicloud.dcloud.net.cn/)
2. 开通`uni-push2.0`[详情参考](https://uniapp.dcloud.net.cn/unipush-v2.html#%E7%AC%AC%E4%B8%80%E6%AD%A5-%E5%BC%80%E9%80%9A)

## 体验步骤

1. 打开`uni-im`插件下载地址：[https://ext.dcloud.net.cn/plugin?name=uni-im](https://ext.dcloud.net.cn/plugin?name=uni-im)
2. 点击`使用HBuilderX导入示例项目`
3. 按提示，通过云服务空间初始化向导部署项目（注意：选择绑定的服务空间，须在uni-push2.0的[web控制台](https://dev.dcloud.net.cn/pages/app/push2/info)关联）
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
	//1. 导入uni身份信息管理模块
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

4. 启用Vuex并引入uni-im的store
- 打开项目根目录的main.js文件启用Vuex
```js
	import App from './App'
	import store from './store'

	// #ifndef VUE3
	import Vue from 'vue'
	Vue.config.productionTip = false
	Vue.prototype.$store = store
	App.mpType = 'app'
	const app = new Vue({
		store,
		...App
	})
	app.$mount()
	// #endif

	// #ifdef VUE3
	import {createSSRApp} from 'vue'
	export function createApp() {
		const app = createSSRApp(App)
		app.use(store)
		return {app}
	}
	// #endif
```

- 项目根目录创建文件夹store，并在此目录下新建入口文件`index.js`引入uni-im的store
```js
	// 文件路径：/store/index.js
	import uniIm from '@/uni_modules/uni-im/common/store'

	// #ifndef VUE3
	import Vue from 'vue'
	import Vuex from 'vuex'
	Vue.use(Vuex)
	const store = new Vuex.Store({
		modules: {
			uniIm
		},
		strict: true
	})
	// #endif
	// #ifdef VUE3
	import {createStore} from 'vuex'
	const store = createStore({
		modules: {
			uniIm
		}
	})
	// #endif
	export default store
```

5. 账号打通

uni-im经常用于嵌入其他App中，成为其中的一个模块。比如客服模块。这就涉及现有应用和uni-im的账户打通问题。

uni-im的账户体系是uni-id的。如果开发者的现有应用要接入uni-im，但账户体系并不在uni-id里，或使用的是老版uni-id，就需要参考本章节打通账户。

- 基于`uni-id-pages`的项目，直接登录即可，无需额外打通工作。
- 基于`uni-id-co`的项目，需要在登录成功和用户信息更新时，同步更新uniId store内的当前用户信息（uni-im显示当前用户头像、昵称时会用到）示例代码：
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
- 客户端是uni-app的，但服务器不是uniCloud的情况。需开通uniCloud，然后在客户端通过uni-im-co的loginWithJWT方法实现联登，因内容较多，需另见[文档](#uniImCoLoginWithJWT)。
- 客户端如果不是uni-app的，如果是网页，可iframe内嵌。如果是app，可嵌入[uni小程序sdk](https://nativesupport.dcloud.net.cn/README)

6. 确保账户对接成功后，打开“用户列表页”，路径：`/uni_modules/uni-im/pages/userList/userList`可以看到所有的注册用户（默认仅登录的账号为超级管理员才有权限访问，你也可以根据自己的业务需求修改`uniCloud/database/uni-id-users.schema.json`配置权限[更多详情](https://uniapp.dcloud.net.cn/uniCloud/schema.html#permission)）
7. 点击某个用户，会自动创建与该用户的会话，并打开“聊天对话页”（路径：`/uni_modules/uni-im/pages/chat/chat`），然后就可以开始聊天了。
8. 还可以导入uni-im的示例项目作为管理员端与用户聊天。
9. 如果你是2个不同appId的应用相互通讯（比如：淘宝的买家端和卖家端通讯）的场景，请打开聊天对话文件（路径：`/uni_modules/uni-im/pages/chat/chat`）搜索`data.appId = this.systemInfo.appId`修改`this.systemInfo.appId`为相对的appId


**补充：**（基于uni-id-pages开发的项目可忽略）

为了实现用户退出登录后，不再收到im消息，需要在执行退出登录时同步状态给uni-id-pages。示例代码如下：
```js
import {mutations as uniIdMutations} from '@/uni_modules/uni-id-pages/common/store.js'
uniIdMutations.logout()
```


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
	"admin_uid":false
}
```

2. 配置`admin_uid`的值为管理员客服的user_id（支持多个以数组的形式指定），如果会话双方均不属于此域则无法通讯。不配置或为false则表示不限制。

# 开发文档  
## 目录结构  
<pre v-pre="" data-lang="">
<code class="lang-" style="padding:0">
├─uni_modules                                         存放[uni_module](/uni_modules)规范的插件。
│    ├─其他module
│    └─uni-im
│        ├─uniCloud
│        │    ├─cloudfunctions                        云函数目录
│        │    │    └─uni-im-co                        集成调用uni-im方法的云对象
│        │    └─database
│        │    	├─uni-im-conversation.schema.json     聊天会话表的表结构
│        │    	└─uni-im-msg.schema.json              聊天消息表的表结构
│        ├─common
│        │    ├─msgManager.js                         消息管理类库
│        │    ├─store.js                              状态管理
│        │    ├─utils.js                              工具类库
│        │    └─uni-im-storage.js                     封装storage操作库
│        ├─components
│        │    └─uni-im-msg                            显示聊天消息气泡组件
│        ├─pages
│        │    ├─chat
│        │    │    └─chat.nvue                        聊天对话页
│        │    ├─index                    
│        │    │     └─index.nvue                      会话列表页
│        │    └─userList                    
│        │         └─userList.vue                     用户列表页
│        ├─static                                     静态资源目录
│        │    └─avatarUrl.png                         默认用户头像图片资源
│        ├─changelog.md                               更新日志
│        ├─package.json                               包管理文件
│        └─readme.md                                  插件自述文件
</code>
</pre>

uni-im v1.0.0 暂时比较简单，云端有1个云对象`uni-im-co`，2个opendb数据表（会话表`uni-im-conversation`，聊天消息表`uni-im-msg`）

名词解释
- 聊天会话ID  
根据通讯双方用户id，生成的唯一索引值；
- 聊天会话  
以会话ID为索引的一组数据，记录：未读消息数量、会话更新时间、会话类型、会话所属用户的id、对话的用户id、对话的群id、最后一条消息概述（文本消息的前15个字，消息为多媒体时只描述类型）

## uni-im-co 云函数（云对象）
### API列表
|API				|描述											|
|--					|--												|
|loginWithJWT		|基于jwt签名的账号登录方式[见下方](#uniImCoLoginWithJWT)				|
|getConversationList|获取会话列表[见下方](#coGetConversationList)	|
|sendMsg			|发送聊天消息[见下方](#coSendMsg)				|

#### 账号登录loginWithJWT@uniImCoLoginWithJWT

如果你的项目是基于非uniCloud开发的项目（比如：应用服务端的开发语言是php、java等，用户信息并没未存储在uniCloud云数据库中）需要通过跨平台签名认证的方式，向uniCloud账户体系新增用户（创建过则更新用户信息）并获取token实现登录。

前置要求：添加`uni-im`配置文件，打开：`/uni_modules/uni-config-center/uniCloud/cloudfunctions/common/uni-config-center/`；新建`uni-im`文件夹和`config.json`文件，示例如下：
```json
{
	"jwtSecret":"jwtSecretDemo",
}
```
这里的值`jwtSecretDemo`为示例，注意修改为自己的，使用一个较长的字符串即可（越长安全性越高，建议大于32位）。

**接口形式**

```js
await uniImCo.loginWithJWT(signedData)
```

signedData 为通过<a target="_blank" href="https://jwt.io">jwt</a>签名后的数据

> 各类计算机语言，jwt库下载地址：<a target="_blank" href="https://jwt.io/libraries">https://jwt.io/libraries</a>

**signedData 包含的数据说明**

| 字段		| 类型		|必填	| 描述							|
| --		| --		| --	| --							|
| exp		| timestamp	| 否	    | 签名数据的过期时间					|
| userInfo	| Object	| 是	    | 用户信息[详情](#signedDataUserInfo)	|

**userInfo 参数说明 @signedDataUserInfo**

| 字段				| 类型	|必填| 描述											|
| --				| --	| --| --											|
| openid			| String| 是	| 原系统的用户id									|
| nickname			| String| 否	| 用户昵称										|
| avatar_file		| file	| 否	| 用户头像文件对象									|
| gender			| int	| 否	| 用户性别：0 未知 1 男性 2 女性					|
| mobile			| String| 否	| 手机号码										|
| email				| String| 否	| 邮箱地址										|
| role				| Array	| 否	| 用户角色列表，由role_id组成的数组[详情查看](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#rbac)。<br/>当值为：`["admin"]`表示为超级管理员，不受任何权限限制；|

签名密钥配置路径： `/cloudfunctions/common/uni-config-center/uni-im/config.json` 

**Nodejs环境，生成signedData示例代码：**
```js
const jwtSecret = "jwtSecretDemo"; //切勿泄露此密钥，且应当与uni-config-center中配置的一致
const jwt = require("jsonwebtoken");
const payload = {
	"exp":Date.now() + 60 * 1000,//60秒后过期
	"userInfo":{
		"avatar_file":{
			"extname": "",
			"name": "",
			"url":'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png'
		},
		"openid":"100001",
		"nickname":"张三",
		"role":["admin"] // 设置该用户为超级管理员，不受任何权限限制
	}
}

// 签名
let token = jwt.sign(payload, jwtSecret);
console.log(token);

/*
// 验证签名
try{
	let decoded = jwt.verify(token, wjtSecret);
	console.log(decoded)
}catch{
	console.error("签名验证失败")
}
*/
```


**返回值**

|参数名							|类型				|说明			|
|--								|--					|--				|
|errCode						|string&#124;number	|错误码			|
|errMsg							|string				|错误信息			|
|newToken						|object				|新token信息（uniCloud客户端监听到云对象返回newToken，</br>会自动将新token及过期时间存储在storage内。</br>当客户端调用云函数（云对象）的方法时，会自动带上token供服务端校验	|
|&nbsp;&#124;-&nbsp;token		|string				|token			|
|&nbsp;&#124;-&nbsp;tokenExpired|string				|token过期时间	|


**示例代码：**

以下为客户端的示例，演示了在客户端中登录之前的账户体系成功后，把signedData传给uni-im，调用uni-im的联登接口。

```js
// 1. 导入uniCloud客户端账户体系，用户信息状态管理模块
import {
	mutations as uniIdMutations
} from '@/uni_modules/uni-id-pages/common/store.js';

// 2. 导入uni-im的云对象
const uniImCo = uniCloud.importObject("uni-im-co")

// 3. 客户端向传统服务器的登录接口发起请求，验证登录信息无误后：将userInfo通过jwt签名与token一起返回
uni.request({
	data:{
		username:"xxx",
		password:"xxx"
	},
	url:'https://xxx.com/login.php',//你在传统服务端的登录地址（示例链接非真实地址）
	success: async res => {
		const {token,signedData} = res.data
		//4. 存储token实现登录
		uni.setStorageSync('token',token)
		
		//5. 将签名后的signedData作为参数调用uni-im的登录接口
		res = await  uniImCo.loginWithJWT(signedData)

		if(res.errCode){
			return uni.showModal({
				content: JSON.stringify(),
				showCancel: false,
				confirmText: '知道了',
			});
		}

		//6. 更新uniId store内的当前用户信息（uni-im显示当前用户头像、昵称时会用到）
		await uniIdMutations.updateUserInfo()

		/*
		// 注：uni-im会话列表页面，已内置步骤5、6；如果是登录后，需要立即打开会话页面的项目，直接将signedData作为token传参，可省略步骤5、6。如下：
		uni.navigateTo({
			url:'/uni_modules/uni-im/pages/index/index?token='+signedData,
			complete: () => {
				uni.hideLoading()
			}
		})
		*/
	}
})
```

**注意：** 登录有效期默认为：2小时；当有效期小于1小时，账号活跃会自动续期。如果与你的系统登录配置不同请修改。配置路径：`uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json`，配置文档[详情查看](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#config)



#### 获取会话列表getConversationList@coGetConversationList
**参数说明**

|参数名	|类型	|必填	|说明			|
|--		|--		|--		|--				|
|limit	|number	|否		|数量，默认值：500	|
|page	|number	|是		|页码			|

**返回值**

|参数名	|类型				|说明		|
|--		|--					|--			|
|errCode|string&#124;number	|错误码，0表示成功	|
|errMsg	|string				|错误信息	|
|data	|array				|会话数据	|

#### 发送聊天消息sendMsg@coSendMsg
|参数名	|类型	|必填	|说明			|
|--		|--		|--		|--				|
|to_uid	|string	|否		|接受消息的用户id	|
|appId	|string	|是		|接收消息的appId；如果你是2个不同appId的应用相互发，请修改此值为相对的appId	|
|type	|string	|是		|消息类型，暂时仅支持：text(表示文本类型)、image(表示图片类型)|
|body	|string	|是		|消息内容，`type = text`时为文本内容.`type = image`时为图片网络地址|

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


## 客户端sdk@clientSkd
### Vuex状态管理  
uni-im的数据通过Vuex进行状态管理，如果你不了解Vuex[详情参考](https://v3.vuex.vuejs.org/zh/)。

这种中心化响应式的数据管理，在用户切换聊天会话时，数据不会不重头加载；降低获取数据的网络请求次数，提高了效率，带来更好的用户体验。

文件路径：`/uni_modules/uni-im/common/store.js`

#### state

|名称					|类型		|说明												|
|--						|--			|--													|
|conversationDatas		|object		|由多个[会话对象](#conversation)组成，以会话id为key		|
|currentConversationId	|string		|正在对话的会话id										|
|heartbeat				|timestamp	|心跳（精确到秒）		|

概念说明：

##### 心跳 heartbeat
uni-im的会话列表和消息列表，需要显示实时的发生时间。而一个应用开启太多的定时器，会消耗大量的系统性能。

所以uni-im提供了一个响应式数据`heartbeat`，挂载在Vuex，由uniImInit方法：用一个定时器刷新。


##### 会话对象 conversation@conversation

|属性名				|类型			|说明											|
|--					|--				|--												|
|id					|string			|当前会话id										|
|title				|string			|普通会话为对方的用户名或昵称、群会话为群昵称	|
|avatar_file		|uniCloud file	|普通会话为对方的用户头像、群会话为群头像		|
|owner_uid			|string			|所属用户id										|
|unread_count		|number			|未读消息数										|
|user_id			|string			|对话的用户id（群聊会话时为空）					|
|group_id			|string			|对话的群聊id（普通会话时为空）					|
|update_time		|timestamp		|更新时间（每次会话会更新）						|
|msgList			|array			|当前会话聊天数据列表							|
|chatText			|string			|当前会话的文本框文字内容						|

#### getters

|名称				|参数	|类型	|说明											|
|--					|--		|--		|--												|
|conversationList	|无		|array	|排序后的会话对象数据列表，与conversationDatas为映射关系|
|conversation		|会话id	|object	|传入会话id获取会话								|
|unread_count		|无		|string	|当前应用总未读消息数								|

#### mutations

|方法名						|参数												|说明								|
|--							|--													|--									|
|setCurrentConversationId	|会话id												|设置全局变量 正在聊天的用户的会话id|
|mergeConversationDatas		|会话数据												|合并（新增/覆盖）会话数据到列表	|
|updateConversation			|[id, data, cover]依次为：会话id，会话数据，是否覆盖		|更新会话							|
|updateTimestamp			|无													|更新心跳时间戳						|

#### actions

|方法名					|参数											|说明					|
|--						|--												|--						|
|clearUnreadCount		|无												|清空当前会话未读消息数	|
|loadMoreConversation	|可选参数`conversation_id`，用于指定要加载的会话id	|加载更多会话数据		|
|setMsgList				|详见[setMsgList 说明](#setMsgListParam)			|设置消息列表			|

**setMsgList 说明**@setMsgListParam

|参数名			|类型			|是否必填				|说明																|
|--				|--				|--						|--																	|
|conversation_id|string			|是						|会话id																|
|action			|string			|否						|操作类型，默认值为`set`，详见[action说明](#setMsgListActionParam)	|
|data			|object、array	|是						|聊天数据	。更新或插入数据时，data为单条消息内容，类型：object。设置聊天列表数据时，为多条消息集合，类型：array。|
|id				|string			|`action = update`时必填 |要更新的消息id														|
|save			|boolean		|否						|是否保存到storage,默认值为`false`									|

**action 说明** @setMsgListActionParam

|参数名	|说明				|
|--		|--					|
|set	|设置聊天列表数据		|
|push	|向后插入数据			|
|unshift|向前插入数据			|
|update	|更新某一条聊天数据	|

### 聊天消息管理类库  
为了提高聊天数据的获取速度，`uni-im`将历史消息存储在本地的storage中。

因此，聊天数据由：云端数库中的数据和本地storage数据两部分组成。

而何时应当从网络拉取数据，何时从本地获取数据是一个复杂的逻辑。uni-im将它封装成一个im消息数据操作类。

使用示例：
```js
import MsgManager from '@/uni_modules/uni-im/common/msgManager.js';
const currentConversation = this.$store.uniIm.getters.conversation('当前会话id')
const msg = new MsgManager(currentConversation);
//拉取更多数据
let data = await this.msg.getMore();
```

|属性名		|类型		|说明														|
|--			|--			|--															|
|isInit		|boolean	|是否已经加载过首页数据											|
|getMore	|function	|获取更多历史聊天数据（如果数据来源服务端，会自动保存到storage）		|
|pageLimit	|number		|配置的聊天数据分页值											|

### storage操作库
uni-app的[数据缓存](https://uniapp.dcloud.net.cn/api/storage/storage.html#)，是通过不同的key来存储和获取数据。

如下示例：
```js
// 设置数据
uni.setStorageSync('storage_key', 'hello');
// 读取数据
uni.getStorageSync('storage_key');
```

以不同的key值，单独存储一组数据；

而im聊天数据可能非常庞大，需要分页存储，且支持按时间和页码检索。

uni-im-storage应需而生，封装了这些方法：

|方法名	|说明		|
|--			|--			|
|update	|更新数据	[详见](#update)	|
|getData|获取数据	[详见](#getData)	|
|append	|向某个会话的聊天数据中添加一条聊天数据（一般用于收到）	|
|insert	|向前插入数据	|

uni-im-storage 还有一个可以配置的属性值`pageLimit`即：加载历史聊天数据时每一页的数据。

配置方式，修改路径`/uni_modules/uni-im/common/uni-im-storage.js`第二行pageLimit的值（默认值：`30`）。

**update 参数说明**@updateMsgStorage

|参数名	|类型	|是否必填	|说明		|
|--		|--		|--		|--			|
|id		|string	|是		|消息id		|
|data	|object	|是		|消息数据		|

**getData 参数说明**@getData

|参数名			|类型	|是否必填							|说明								|
|--				|--		|--								|--									|
|conversation_id|string	|是								|会话id								|
|limit			|object	|否								|获取的条数，默认为配置的pageLimit的值	|
|page			|object	|page、maxTime、miniTime 三选一	|页码。支持负数，如：-1表示倒数第一页		|
|maxTime		|object	|page、maxTime、miniTime 三选一	|获取的消息的最大时间					|
|miniTime		|object	|page、maxTime、miniTime 三选一	|暂不支持								|

#### 工具类库@utils
utils封装了uni-im常用方法的模块，路径：`/uni_modules/uni-im/common/utils.js`

|名称				|类型		|说明												|入参					|返回值												|
|--					|--			|--													|--						|--													|
|init			|function	|初始化uni-im（监听聊天消息，定时每秒更新心跳值为当前时间戳）|无						|无													|
|getConversationId	|function	|获取会话id											|与你对话的用户id或群id	|无													|
|formatTime			|function	|时间戳转化为格式化									|时间戳：timestamp		|格式化后的时间字符串。如：x年x月x日，昨天，下午，1小时前等	|


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
