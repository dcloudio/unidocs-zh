# 隐私协议自查指南
## 背景

为有效治理App强制授权、过度索权、超范围收集个人信息等现象，落实《网络安全法》《消费者权益保护法》的要求，保障个人信息安全，2019年1月，中央网信办、工信部、公安部、市场监管总局等四部委发布了《关于开展App违法违规收集使用个人信息专项治理的公告》，在全国范围组织开展App违法违规收集使用个人信息专项治理，并陆续出台完善了《App违法违规收集使用个人信息行为认定方法》、《GB/T 35273-2020 信息安全技术 个人信息安全规范》等标准规范。
根据以上规范要求，各大应用市场都加强应用的检测，要求应用必须符合相关政策，否则应用将有被通报或下架的风险。

为了帮助开发者同学避免合规风险，提供隐私协议自查指南。开发者可以按照以下顺序自查：

#### 1、[升级最新版本HbuilderX或离线打包SDK](#update)
#### 2、[隐私弹窗配置检测](#check)
#### 3、[隐私政策展示内容](#content)
#### 4、[查看uni-app(5+ App/Wap2App)集成功能模块补充隐私协议](#feature)

<a id="update"></a>
## 一、根据自身APP生产环境选择最新版本HbuilderX或SDK

|打包方式		|推荐版本			|下载地址
|----			|----				|----
|HbuilderX打包	|`HbuilderX3.2.15+`	|【[HbuilderX下载地址](https://www.dcloud.io/hbuilderx.html)】
|离线打包      	|`3.2.15+`         	|【[离线打包SDK下载地址](https://nativesupport.dcloud.net.cn/AppDocs/download/android)】

<a id="check"></a>
## 二、隐私弹窗配置检测

#### 1 .检查uni-app项目目录下是否含有androidPrivacy.json文件 没有请查[参考文档](https://ask.dcloud.net.cn/article/36937)添加配置！
#### 2 .查看androidPrivacy.json文件中`prompt`配置值域是不是`template`。[参考文档](https://ask.dcloud.net.cn/article/36937)
		```
		//androidPrivacy.json  
		{    
		"version": "1",      
		"prompt": "template",    
		"title": "服务协议和隐私政策",    
		"message": "..."  
		}
		```

<a id="content"></a>
## 三、隐私政策展示内容

### 务必在APP《隐私政策》中必告知用户您的应用基于DCloud uni-app(5+ App/Wap2App)开发

请在《隐私政策》填写如下信息:

`我们的产品基于DCloud uni-app(5+ App/Wap2App)开发，应用运行期间需要收集您的设备唯一识别码（IMEI/android ID/DEVICE_ID/IDFA、SIM 卡 IMSI 信息）以提供统计分析服务，并通过应用启动数据及异常错误日志分析改进性能和用户体验，为用户提供更好的服务。`

### 集成其他功能模块涉及隐私政策

App隐私政策“第三方共享信息”条款部分中披露的SDK收集使用个人信息目录清单，应向用户明示当前SDK收集使用个人信息的目的、方式和范围，并正确透出相关平台隐私协议链接，条款内容可参考以下方式，并在法律法规的范围内征得最终用户同意：

#### 方式一 以文字方式向用户列示：

**使用SDK名称:** 个推·消息推送

**使用目的:** 消息推送（请根据具体使用目的填写）

**使用的权限:**
```
android.permission.ACCESS_NETWORK_STATE
android.permission.ACCESS_WIFI_STATE
android.permission.READ_PHONE_STATE
android.permission.VIBRATE
android.permission.GET_TASKS
```

**涉及个人信息:** 设备信息（IMEI、ANDROID_ID、DEVICE_ID、IMSI）、应用已安装列表、网络信息

**隐私权政策链接:** [http://docs.getui.com/privacy](http://docs.getui.com/privacy)
***
#### 方式二 以表格方式向用户呈现：

<table style="word-break:break-all">
  <tr>
    <th style="width:10%">SDK名称</th>
    <th style="width:10%">包名信息</th>
	<th style="width:15%">使用目的</th>
	<th style="width:30%">使用的权限</th>
	<th style="width:20%">涉及个人信息</th>
	<th style="width:10%">隐私权政策链接</th>
  </tr>
  <tr>
    <td>个推·消息推送</td>
    <td>com.igexin</td>
	<td>消息推送(请根据具体使用目的填写)</td>
	<td style="font-size:12px">
		android.permission.ACCESS_NETWORK_STATE<br>
		android.permission.ACCESS_WIFI_STATE<br>
		android.permission.READ_PHONE_STATE<br>
		android.permission.VIBRATE<br>
		android.permission.GET_TASKS
	</td>
	<td>设备信息（IMEI、ANDROID_ID、DEVICE_ID、IMSI）、应用已安装列表、网络信息</td>
	<td><a href="http://docs.getui.com/privacy" target="_blank">http://docs.getui.com/privacy</a></td>
  </tr>
</table>

<a id="feature"></a>
## 四、查看uni-app(5+ App/Wap2App)集成模块补充隐私协议

#### 查看uni-app(5+ App/Wap2App)应用功能模块

使用HBuilder X查看manifest.json的`App模块配置`,查看勾选了哪些模块配置。 根据配置的模块查看[Android平台各功能模块隐私合规协议](https://ask.dcloud.net.cn/article/39484)补充隐私合规协议到你的《隐私政策》中。

#### 查看uni-app(5+ App/Wap2App)应用权限配置

使用HBuilder X查看manifest.json的`App权限配置`,查看勾选了那些权限配置。各功能模块用了哪些权限可查看文档[Android平台云端打包权限配置](https://ask.dcloud.net.cn/article/36982),不需要的权限请及时删除以免上架被拒！

### 离线打包

#### 三方sdk隐私合规
离线打包目前仅支持配置uni-app(5+ App/Wap2App)提供的隐私弹窗。自定义原生写的隐私弹窗是无法规避隐私协议问题的。

集成的是离线打包SDK提供的依赖库 根据实际模块划分查看[Android平台各功能模块隐私合规协议](https://ask.dcloud.net.cn/article/39484)补充《隐私政策》协议即可。

如果是宿主自己集成的三方SDK：
+ 去三方平台获取隐私协议信息。补充到《隐私政策》中。
+ 调用SDK提供的API方法。SDK.isAgreePrivacy获取隐私协议状态。调用三方SDK的初始化逻辑。

#### App权限配置

原生项目APP模块查看`AndroidManifest.xml`,根据实际情况检查App所需权限。
各功能模块用了哪些权限可查看文档[Android平台云端打包权限配置](https://ask.dcloud.net.cn/article/36982),不需要的权限请及时删除以免上架被拒！

### uni原生插件

1、如果App集成了uni原生插件 需要注意插件文档是否涉及到用户隐私获取或敏感权限。相应的要将合规协议补充到《隐私政策》中。

2、uni原生插件可能会获取用户隐私获取或敏感权限。导致用户的App无法上架。这种情况宿主无法排查。可以使用排除法。将插件删除重新检测。