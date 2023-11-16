# uni-id-pages-x

> uni-id-pages-x 是 uni-id-pages 的[uni-app x](uni-app-x/README.md)版，目前 uni-app x仅支持Android 端  

`uni-id-pages-x`，是`uni-id`体系的一部分。

它基于`uni-id-common`提供了一批现成的、开源的、登录注册账户管理相关的前端页面和云端云对象。

它是一个云端一体页面组的[uni_modules](https://uniapp.dcloud.net.cn/plugin/uni_modules.html)，含前端页面和后端云对象（uni-id-co）。

开发者在项目中引入`uni-id-pages-x`，账户管理的功能无需自己再开发。由于源码的开放性和层次结构清晰，有二次开发需求也很方便调整。

下载地址：[https://ext.dcloud.net.cn/plugin?name=uni-id-pages-x](https://ext.dcloud.net.cn/plugin?name=uni-id-pages-x)

`uni-id-pages-x`的功能包括：

- 注册账号：
	+ 用户名和密码
- 免密登录（首次登录自动注册）：
	+ [app一键登录](https://uniapp.dcloud.io/univerify.html)
	+ 短信验证码登录
- 密码登录
	+ 用户名/手机号和密码登录
- 账户管理
	+ 头像更换
	+ 修改昵称
	+ 绑定手机号码
		* 短信验证码校验
		* App端支持：[一键绑定](https://uniapp.dcloud.io/univerify.html)
	+ 修改密码（仅账号有设置密码时可见）
	+ 找回密码（仅账号有绑定手机号码可见）
	+ 退出登录
	+ 注销账号（上架国内App应用市场必备）
- 用户服务协议和隐私政策条款授权


## 目录结构
<pre v-pre="" data-lang="">
<code class="lang-" style="padding:0">
├─uni_modules                                         存放uni_module规范的插件。
│    ├─其他module
│    └─uni-id-pages-x
│        ├─uniCloud
│        │    └─cloudfunctions                        云函数目录
│        │        └─uni-id-co                         集成调用uni-id方法的云对象
│        │            ├─common                        公用逻辑
│        │            ├─config                        配置
│        │            │  └─permission.js              调用接口所需的权限配置
│        │            ├─lang                          国际化目录
│        │            ├─lib                           基础功能，不建议修改此目录下文件
│        │            │  ├─third-party                三方平台接口
│        │            │  └─utils                      基础功能
│        │            ├─middleware                    中间件
│        │            └─module                        分模块存放的云对象方法
│		     ├── README.md                                插件自述文件
│		     ├── changelog.md                             更变日志
│		     ├── common                                   公共文件目录
│		     │   ├── common.scss                          通用样式
│		     │   └── common.uts                           通用脚本
│		     ├── components                               组件目录
│		     │   ├── cloud-image                          uniCloud云存储图片解析组件
│		     │   ├── my-input                             uni-id-pages x自定义的输入宽组件
│		     │   ├── uni-id-pages-x-agreements            隐私政策协议授权组件
│		     │   ├── uni-id-pages-x-avatar                头像组件（展示、设置头像）
│		     │   ├── uni-id-pages-x-fab-login             悬浮的登录组件（固定在页面便于切换登录方式）
│		     │   ├── uni-id-pages-x-icon                  图标组件
│		     │   ├── uni-id-pages-x-loginByPwd            密码登录组件
│		     │   ├── uni-id-pages-x-loginBySmsCode        短信验证码登录组件
│		     │   ├── uni-id-pages-x-popup-dialog          弹窗对话框组件
│		     │   └── uni-id-pages-x-smsCode               发送短信验证码组件
│		     ├── config.uts                               【重要】配置文件
│		     ├── package.json                             包描述文件
│		     ├── pages                                    页面目录
│		     │   ├── common                               公共页面
│		     │   │   └── webview                          网页查看页面（用于实现应用内浏览《用户协议和隐私协议》的URL链接页面）
│		     │   ├── login                                登录页面
│		     │   ├── register                             注册页面
│		     │   ├── retrieve                             找回密码页面
│		     │   └── userinfo                             用户信息页面
│		     │       ├── bindMobile                       绑定手机号码页面
│		     │       ├── deactivate                       注销账号页面
│		     │       └─ setNickname                       设置昵称页面
│		     ├── static                                   静态资源目录
│		     │   ├── app-plus                             App专用资源目录
│		     │   ├── fonts                                字体资源目录
│		     │   └── login                                登录方式图标资源目录
│		     ├── store.uts                                状态管理文件
</code>
</pre>
**完整的uni-app目录结构[详情查看](https://uniapp.dcloud.io/frame?id=%e7%9b%ae%e5%bd%95%e7%bb%93%e6%9e%84)

## 前端页面
### 初始化
需要在App.uvue中初始化`uni-id-pages-x`的`init.uts`文件

示例代码如下：
```js
<script>
	import uniIdPageInit from '@/uni_modules/uni-id-pages-x/init.uts';
	export default {
    onLaunch: function(){
      console.log('App Launch')
      uniIdPageInit()
    },
    onShow: function() {
      console.log('App Show')
    },
      onHide: function() {
      console.log('App Hide')
    }
  }
</script>
```

### 配置@config
路径：`/uni_modules/uni-id-pages-x/config.uts`

|字段									|类型						|描述																						|
|--										|--							|--																							|
|debug								|Boolean				|调试模式[详情](#debug)														|
|loginTypes						|Array					|登录方式[详情](#loginTypes)											|
|agreements						|Array					|隐私政策[详情](#agreements)											|
|passwordStrength			|Object					|密码配置	[详情](#strength)												|

完整示例：
```js
export default {
	//调试模式
	"debug":true,
	/*
		登录类型 未列举到的或运行环境不支持的，将被自动隐藏。
		如果需要在不同平台有不同的配置，直接用条件编译即可
	*/
	"loginTypes": [
		"univerify",
		"weixin",
		"username",
		"apple",
		"smsCode"
	],
	//政策协议
	"agreements": {
		"serviceUrl": "https://xxx", //用户服务协议链接
		"privacyUrl": "https://xxx", //隐私政策条款链接
		// 哪些场景下显示，1.注册（包括注册并登录，如：微信登录、苹果登录、短信验证码登录）、2.登录（如：用户名密码登录）
		"scopeList": ['register', 'login']
	},
	/**
	 * 密码强度
	 * super（超强：密码必须包含大小写字母、数字和特殊符号，长度范围：8-16位之间）
	 * strong（强: 密密码必须包含字母、数字和特殊符号，长度范围：8-16位之间）
	 * medium (中：密码必须为字母、数字和特殊符号任意两种的组合，长度范围：8-16位之间)
	 * weak（弱：密码必须包含字母和数字，长度范围：6-16位之间）
	 * 为空或false则不验证密码强度
	 */
	"passwordStrength":"medium",
	/**
	 * 登录后允许用户设置密码（只针对未设置密码得用户）
	 * 开启此功能将 setPasswordAfterLogin 设置为 true 即可
	 * "setPasswordAfterLogin": false
	 *
	 * 如果允许用户跳过设置密码 将 allowSkip 设置为 true
	 * "setPasswordAfterLogin": {
	 *   "allowSkip": true
	 * }
	 * */
}
```

#### 调试模式@debug
debug模式下，启动应用会自动发起一次网络请求（调用`uni-id-co`的`getSupportedLoginType`）。

检查：uni-id-pages-x客户端配置的登录方式，是否未在uniCloud服务端配置正确，否则抛出异常。

#### 登录方式@loginTypes
|字段			|描述																								|平台差异			|
|--				|--																									|--					|
|univerify|[一键登录](https://uniapp.dcloud.io/univerify.html)	|App 3.0.0+	|
|smsCode	|短信验证码登录																				|						|
|username	|用户名密码登录																				|						|

##### 配置示例
```js
export default {
	"loginTypes": ["username","smsCode"]
}
```
如上示例配置，表示启用：账号密码登录、验证码登录。

同理配置为：
```js
export default {
	"loginTypes": ["univerify","username","smsCode"]
}
```
则表示启用：一键登录、验证码登录、账号密码登录。

平台差异性配置:如果你希望在不同的平台有不同的登录方式，直接使用[条件编译](https://uniapp.dcloud.io/platform?id=%e6%9d%a1%e4%bb%b6%e7%bc%96%e8%af%91)即可。如下配置，即表示仅在APP端启用`短信验证码登录`
```js
export default {
	"loginTypes": [
		"username","univerify"
		// #ifdef APP-PLUS
		,"smsCode"
		// #endif
	]
}
```

以上配置仅开启前端登录入口，实现功能还需：开通对应登录方式服务，获得服务密钥，并在服务端`uni-id`模块的配置文件中完成配置。详情查看：[登录服务开通与配置](#登录服务开通与配置)

#### 隐私政策@agreements
|字段				|类型		|描述								|
|--					|--			|--									|
|serviceUrl	|String	| 用户服务协议网络链接	|
|privacyUrl	|String	| 隐私政策网络链接			|
|scopeList	|Object	| 作用于哪些场景				|

**scopeList 说明：**

|字段			|类型		|描述																									|
|--				|--			|--																										|
|register	|String	|注册（包括注册并登录，如：微信登录、苹果登录、短信验证码登录）	|
|login		|String	|登录（如：用户名密码登录）																|

要上架到国内应用商店必须提供《隐私政策和用户使用协议》，参考模版：[隐私权政策模板.zip](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/%E9%9A%90%E7%A7%81%E6%9D%83%E6%94%BF%E7%AD%96%E6%A8%A1%E6%9D%BF.zip)

更多合规问题[详情参考](https://uniapp.dcloud.io/tutorial/android-store.html#app%E5%9B%A0%E5%90%88%E8%A7%84%E9%97%AE%E9%A2%98%E6%97%A0%E6%B3%95%E4%B8%8A%E6%9E%B6)

推荐使用：HBuilderX编辑器，以markdown文档格式编辑《隐私政策和用户使用协议》，通过在文档中鼠标右键[一键分享](https://hx.dcloud.net.cn/Tutorial/extension/markdown_share)上传到[前端网页托管](../hosting.md)获得链接

#### 密码强度@strength

|字段				|类型		|描述																													|
|--					|--			|--																														|
|为空或false	| -			|不验证密码强度																									|
|super			|String	|超强：密码必须包含大小写字母、数字和特殊符号，长度范围：8-16位之间			|
|strong			|String	|强: 密密码必须包含字母、数字和特殊符号，长度范围：8-16位之间					|
|medium			|String	|中：密码必须为字母、数字和特殊符号任意两种的组合，长度范围：8-16位之间	|
|weak				|String	|弱：密码必须包含字母和数字，长度范围：6-16位之间											|

### 登录页面介绍
- 路径: `/uni_modules/uni-id-pages-x/pages/login/login`  

- 执行`uni.navigateTo`打开登录页面，会默认使用配置中`loginTypes`值的第一项为登录方式。  
  例如`loginTypes`：`["smsCode","univerify","username"]`会以`smsCode`，即`短信验证码`为默认登录方式  

- 支持通过传递参数`type`，指定登录方式。例如：指定用户名密码登录，使用如下代码即可  
```js
uni.navigateTo({
	"url":"/uni_modules/uni-id-pages-x/pages/login/login?type=username"
})
```

配套使用[uniIdRouter](summary.md#uni-id-router)；当用户未登录，但访问了你配置的需强制登录的页面，或接口提示token无效或过期（响应体以TOKEN_INVALID开头）时 会自动重定向到登录页面。