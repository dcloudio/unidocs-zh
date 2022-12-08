### uni-app默认集成功能模块
### uni-app default integrated function module

<table style="word-break:break-all">
  <tr>
    <th style="width:10%">SDK名称</th>
    <th style="width:10%">SDK name</th>
    <th style="width:10%">包名信息</th>
    <th style="width:10%">package name information</th>
	<th style="width:15%">使用目的</th>
	<th style="width:15%">purpose of usage</th>
	<th style="width:30%">使用的权限</th>
	<th style="width:30%">Permission to use</th>
	<th style="width:15%">涉及个人信息</th>
	<th style="width:15%">involving personal information</th>
	<th style="width:10%">隐私权政策链接</th>
	<th style="width:10%">Privacy Policy Link</th>
  </tr>
  <tr>
    <td>阿里weexSDK</td>
    <td>com.taobao</td>
	<td>uni-app基础模块默认集成，用于渲染uniapp的nvue页面引擎</td>
	<td style="font-size:12px">
		android.permission.WRITE_EXTERNAL_STORAGE<br>
		android.permission.READ_EXTERNAL_STORAG
	</td>
	<td>存储文件</td>
	<td><a href="http://doc.weex.io/zh/" target="_blank">http://doc.weex.io/zh</a></td>
  </tr>
  <tr>
    <td>Fresco图库</td>
    <td>com.facebook.fresco</td>
  	<td>用于nvue页面加载图片使用</td>
  	<td style="font-size:12px">
  		android.permission.WRITE_EXTERNAL_STORAGE<br>
  		android.permission.READ_EXTERNAL_STORAG
  	</td>
  	<td>存储文件</td>
  	<td><a href="https://www.fresco-cn.org/" target="_blank">https://www.fresco-cn.org/</a></td>
  </tr>
  <tr>
    <td>glide图库</td>
    <td>com.bumptech.glide</td>
  	<td>用于图片预览使用</td>
  	<td style="font-size:12px">
  		android.permission.WRITE_EXTERNAL_STORAGE<br>
  		android.permission.READ_EXTERNAL_STORAG
  	</td>
  	<td>存储文件</td>
  	<td><a href="http://bumptech.github.io/glide/" target="_blank">http://bumptech.github.io/glide/</a></td>
  </tr>
  <tr>
    <td>gif-drawable</td>
    <td>pl.droidsonroids.gif</td>
  	<td>加载gif图</td>
  	<td style="font-size:12px">
  		android.permission.WRITE_EXTERNAL_STORAGE<br>
  		android.permission.READ_EXTERNAL_STORAG
  	</td>
  	<td>存储文件</td>
  	<td><a href="https://github.com/alibaba/fastjson" target="_blank">https://github.com/alibaba/fastjson</a></td>
  </tr>
  <tr>
    <td>fastjson</td>
    <td>com.alibaba.fastjson</td>
  	<td>JSON解析</td>
  	<td style="font-size:12px">
	无
	none
  	</td>
  	<td>无</td>
  	<td><a href="https://github.com/alibaba/fastjson" target="_blank">https://github.com/alibaba/fastjson</a></td>
  </tr>
  <tr>
    <td>移动安全联盟 OAID</td>
    <td>com.bun.miitmdid、com.zui.opendeviceidlibrary</td>
  	<td>获取oaid</td>
  	<td style="font-size:12px">
		无
		none
  	</td>
  	<td>设备信息</td>
  	<td><a href="http://www.msa-alliance.cn/col.jsp?id=105" target="_blank">http://www.msa-alliance.cn/col.jsp?id=105</a></td>
  </tr>
</table>

**关于移动安全联盟 OAID**
**About Mobile Security Alliance OAID**

移动智能终端补充设备标识体系与 SDK 隐私合规问题
Mobile smart terminal supplementary device identification system and SDK privacy compliance issues

移动智能终端补充设备标识体系与 SDK 严格遵守我国《网络安全法》、《数据安全法》和《电信和互联网用户个人信息保护规定》等相关法律法规和《信息安全技术 个人信息安全规范》等国家标准要求。SDK 不会主动收集任何数据，只在 APP 调用时获取以下数据，用于本地判断，不会进行任何网络传输：
­
- 设备制造商、设备型号、设备品牌，用于判断终端调用接口
- Device manufacturer, device model, and device brand, which are used to determine the terminal calling interface
- 设备网络运营商名称，用于判断虚拟机环境
- The name of the network operator of the device, which is used to determine the virtual machine environment
- APP 包名，用于校验签名
- APP package name, used to verify the signature

### UniPush@push

UniPush是DCloud联合个推公司推出的集成型统一推送服务，使用了个推提供的SDK，因此需要在《隐私政策》中添加“个推消息推送SDK”相关说明。
UniPush is an integrated unified push service launched by DCloud and Getui Company. It uses the SDK provided by Getui. Therefore, it is necessary to add a description of "Geetui Message Push SDK" in the "Privacy Policy".
建议《隐私政策》添加 “与授权合作伙伴共享”条款中，将 个推的用户隐私政策 加入其中，并向终端用户逐一明示您嵌入的SDK收集使用个人信息的目的、方式和范围。参考内容如下：
It is recommended to add the "Share with Authorized Partners" clause in the Privacy Policy, add the user privacy policy of Getui to it, and make clear to end users the purpose, method and scope of the collection and use of personal information by your embedded SDK one by one. The reference content is as follows:

`消息推送服务供应商：由每日互动股份有限公司提供推送技术服务，我们可能会将您的设备平台、设备厂商、设备品牌、设备识别码等设备信息，应用列表信息、网络信息以及位置相关信息提供给每日互动股份有限公司，用于为您提供消息推送技术服务。我们在向您推送消息时，我们可能会授权每日互动股份有限公司进行链路调节，相互促活被关闭的SDK推送进程，保障您可以及时接收到我们向您推送的消息。详细内容请访问《个推用户隐私政策》（需将《个推用户隐私政策》超链至：http://docs.getui.com/privacy）`。
`Message push service provider: Daily Interaction Co., Ltd. provides push technology services. We may send your device information such as device platform, device manufacturer, device brand, device identification code, application list information, network information and location-related information The information is provided to Daily Interaction Co., Ltd., which is used to provide you with news push technical services. When we push messages to you, we may authorize Daily Interactive Co., Ltd. to adjust the link, and mutually promote the closed SDK push process to ensure that you can receive the messages we push to you in a timely manner. For details, please visit the "Gitui User Privacy Policy" (the "Gitui User Privacy Policy" needs to be hyperlinked to: http://docs.getui.com/privacy)`.

UniPush模块集成的三方SDK说明
Three-party SDK description for UniPush module integration

<table style="word-break:break-all">
  <tr>
    <th style="width:10%">SDK名称</th>
    <th style="width:10%">SDK name</th>
    <th style="width:10%">包名信息</th>
    <th style="width:10%">package name information</th>
	<th style="width:15%">使用目的</th>
	<th style="width:15%">purpose of usage</th>
	<th style="width:30%">使用的权限</th>
	<th style="width:30%">Permission to use</th>
	<th style="width:20%">涉及个人信息</th>
	<th style="width:20%">involving personal information</th>
	<th style="width:10%">隐私权政策链接</th>
	<th style="width:10%">Privacy Policy Link</th>
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

#### HMS push

推送服务（Push Kit）是华为提供的消息推送平台，建立了从云端到终端的消息推送通道。您通过集成推送服务，可以向客户端应用实时推送消息，因此需要在《隐私政策》中添加"HMS push"相关说明。
Push Kit is a message push platform provided by Huawei, which establishes a message push channel from the cloud to the terminal. By integrating the push service, you can push messages to client applications in real time, so you need to add "HMS push" instructions in the Privacy Policy.

<table style="word-break:break-all">
  <tr>
    <th style="width:10%">SDK名称</th>
    <th style="width:10%">SDK name</th>
    <th style="width:10%">包名信息</th>
    <th style="width:10%">package name information</th>
	<th style="width:15%">使用目的</th>
	<th style="width:15%">purpose of usage</th>
	<th style="width:30%">使用的权限</th>
	<th style="width:30%">Permission to use</th>
	<th style="width:20%">涉及个人信息</th>
	<th style="width:20%">involving personal information</th>
	<th style="width:10%">隐私权政策链接</th>
	<th style="width:10%">Privacy Policy Link</th>
  </tr>
  <tr>
    <td>华为 HMS push</td>
    <td>com.huawei.hms</td>
	<td>华为手机厂商推送(请根据具体使用目的填写)</td>
	<td style="font-size:12px">
		android.permission.ACCESS_NETWORK_STATE<br>
		android.permission.ACCESS_WIFI_STATE<br>
		android.permission.REQUEST_INSTALL_PACKAGES<br>
		android.permission.FOREGROUND_SERVICE<br>
		android.permission.READ_PHONE_STATE
	</td>
	<td>设备信息（IMEI、ANDROID_ID、DEVICE_ID、IMSI）、应用已安装列表、网络信息</td>
	<td>Device Information (IMEI, ANDROID_ID, DEVICE_ID, IMSI), App Installed List, Network Information</td>
	<td><a href="https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/privacy-statement-0000001050042021" target="_blank">推送隐私声明</a></td>
	<td><a href="https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/privacy-statement-0000001050042021" target="_blank">Push Privacy Statement</a></td>
  </tr>
</table>

### Statistic

<a id="statistic"></a>

HX3.1.14+ 友盟SDK已升级到9.3.8版本 适配合规问题
HX3.1.14+ Umeng SDK has been upgraded to version 9.3.8 for compliance issues

+ 当你集成了统计模块。您需要确保App有《隐私政策》，并且在用户首次启动App时就弹出《隐私政策》取得用户同意！！！
+ When you integrate the statistics module. You need to ensure that the App has a "Privacy Policy", and when the user starts the App for the first time, the "Privacy Policy" will pop up to obtain the user's consent! ! !
+ 您务必告知用户您选择友盟+SDK服务，请在《隐私政策》中增加如下参考条款：“我们的产品集成友盟+SDK，友盟+SDK需要收集您的设备Mac地址、唯一设备识别码（IMEI/android ID/IDFA/OPENUDID/GUID、SIM 卡 IMSI 信息）以提供统计分析服务，并通过地理位置校准报表数据准确性，提供基础反作弊能力。”
+ You must inform the user that you choose the Umeng+SDK service, please add the following reference to the Privacy Policy: "Our product integrates Umeng+SDK, Umeng+SDK needs to collect your device's Mac address, unique device identification code (IMEI/android ID/IDFA/OPENUDID/GUID, SIM card IMSI information) to provide statistical analysis services, and to calibrate the accuracy of report data through geographic location to provide basic anti-cheating capabilities.”
+ 您务必确保用户同意《隐私政策》之后。再调用相关api！！！！
+ You must ensure that the user agrees to the "Privacy Policy". Then call the relevant api! ! ! !

Statistic模块集成的三方SDK说明
Three-party SDK description for Statistic module integration

<table style="word-break:break-all">
  <tr>
    <th style="width:10%">SDK名称</th>
    <th style="width:10%">SDK name</th>
    <th style="width:10%">包名信息</th>
    <th style="width:10%">package name information</th>
	<th style="width:15%">使用目的</th>
	<th style="width:15%">purpose of usage</th>
	<th style="width:30%">使用的权限</th>
	<th style="width:30%">Permission to use</th>
	<th style="width:20%">涉及个人信息</th>
	<th style="width:20%">involving personal information</th>
	<th style="width:10%">隐私权政策链接</th>
	<th style="width:10%">Privacy Policy Link</th>
  </tr>
  <tr>
    <td>友盟统计</td>
    <td>com.uc.crashsdk、com.efs、com.umeng</td>
	<td>统计（请根据具体使用目的填写）</td>
	<td style="font-size:12px">
		android.permission.ACCESS_NETWORK_STATE<br>
		android.permission.ACCESS_WIFI_STATE<br>
		android.permission.READ_PHONE_STATE
	</td>
	<td>设备信息（IMEI、ANDROID_ID、DEVICE_ID、IMSI）、应用已安装列表、网络信息</td>
	<td><a href="https://docs.getui.com/privacy/" target="_blank">https://docs.getui.com/privacy/</a></td>
  </tr>
</table>

### OAuth、Share、Payment

<a id="oauth"/>
<a id="payment"/>
<a id="share"/>
登录、分享、支付存在引入相同SDK，这里统一进行说明：
The same SDK is introduced for login, sharing, and payment. Here is a unified description:

<table style="word-break:break-all">
  <tr>
    <th style="width:10%">SDK名称</th>
    <th style="width:10%">SDK name</th>
    <th style="width:10%">包名信息</th>
    <th style="width:10%">package name information</th>
	<th style="width:15%">使用目的</th>
	<th style="width:15%">purpose of usage</th>
	<th style="width:30%">使用的权限</th>
	<th style="width:30%">Permission to use</th>
	<th style="width:20%">涉及个人信息</th>
	<th style="width:20%">involving personal information</th>
	<th style="width:10%">隐私权政策链接</th>
	<th style="width:10%">Privacy Policy Link</th>
  </tr>
  <tr>
    <td>微信开放平台</td>
    <td>com.tencent.mm</td>
	<td>登录、分享、支付（请根据具体使用目的填写）</td>
	<td style="font-size:12px">
		android.permission.ACCESS_NETWORK_STATE<br>
		android.permission.ACCESS_WIFI_STATE
	</td>
	<td>存储的个人文件、网络信息</td>
	<td>Stored personal files, network information</td>
	<td><a href="https://weixin.qq.com/cgi-bin/readtemplate?lang=zh_CN&t=weixin_agreement&s=privacy" target="_blank">微信隐私协议</a></td>
	<td><a href="https://weixin.qq.com/cgi-bin/readtemplate?lang=zh_CN&t=weixin_agreement&s=privacy" target="_blank">WeChat Privacy Agreement</a></td>
  </tr>
  <tr>
    <td>新浪开放平台</td>
    <td>com.sina.weibo</td>
  	<td>登录、分享（请根据具体使用目的填写）</td>
  	<td style="font-size:12px">
  		android.permission.ACCESS_NETWORK_STATE<br>
  		android.permission.ACCESS_WIFI_STATE
  	</td>
  	<td>存储的个人文件、网络信息</td>
  	<td>Stored personal files, network information</td>
  	<td><a href="https://weibo.com/signup/v5/privacy?spm=a1zaa.8161610.0.0.4f8776217Wu8R1" target="_blank">新浪隐私协议</a></td>
  	<td><a href="https://weibo.com/signup/v5/privacy?spm=a1zaa.8161610.0.0.4f8776217Wu8R1" target="_blank">Sina Privacy Policy</a></td>
  </tr>
  <tr>
    <td>QQ开放平台</td>
    <td>com.tencent.open</td>
  	<td>登录、分享（请根据具体使用目的填写）</td>
  	<td style="font-size:12px">
  		android.permission.MODIFY_AUDIO_SETTINGS<br>
  		android.permission.ACCESS_NETWORK_STATE<br>
  		android.permission.ACCESS_WIFI_STATE
  	</td>
  	<td>存储的个人文件、读取手机状态和身份、网络信息</td>
  	<td>Stored personal files, read phone status and identity, network information</td>
  	<td><a href="https://ti.qq.com/agreement/qqface.html?appname=mqq_2019" target="_blank">qq隐私协议</a></td>
  	<td><a href="https://ti.qq.com/agreement/qqface.html?appname=mqq_2019" target="_blank">qq privacy agreement</a></td>
  </tr>
  <tr>
    <td>支付宝开放平台</td>
    <td>com.alipay</td>
  	<td>登录、分享（请根据具体使用目的填写）</td>
  	<td style="font-size:12px">
  		android.permission.ACCESS_NETWORK_STATE<br>
  		android.permission.ACCESS_WIFI_STATE
  	</td>
  	<td>网络信息</td>
  	<td>Internet Information</td>
  	<td><a href="https://render.alipay.com/p/c/k2cx0tg8" target="_blank">支付宝隐私协议</a></td>
  	<td><a href="https://render.alipay.com/p/c/k2cx0tg8" target="_blank">Alipay Privacy Policy</a></td>
  </tr>
  <tr>
    <td>个验一键登录</td>
    <td>com.g.elogin、com.g.gysdk</td>
  	<td>登录（请根据具体使用目的填写）</td>
  	<td style="font-size:12px">
  		android.permission.READ_PHONE_STATE<br>
  		android.permission.READ_EXTERNAL_STORAGE<br>
  		android.permission.WRITE_EXTERNAL_STORAGE<br>
  		android.permission.ACCESS_NETWORK_STATE<br>
  		android.permission.ACCESS_WIFI_STATE<br>
  		android.permission.CHANGE_NETWORK_STATE
  	</td>
  	<td>存储的个人文件、读取手机状态和身份、网络信息</td>
  	<td><a href="https://docs.getui.com/privacy/" target="_blank">https://docs.getui.com/privacy/</a></td>
  </tr>
</table>

### Speech
<a id="speech"/>
Speech模块集成的三方SDK说明
The description of the three-party SDK integrated with the Speech module

#### 百度语音
#### Baidu Voice

<table style="word-break:break-all">
  <tr>
    <th style="width:10%">SDK名称</th>
    <th style="width:10%">SDK name</th>
    <th style="width:10%">包名信息</th>
    <th style="width:10%">package name information</th>
	<th style="width:15%">使用目的</th>
	<th style="width:15%">purpose of usage</th>
	<th style="width:30%">使用的权限</th>
	<th style="width:30%">Permission to use</th>
	<th style="width:20%">涉及个人信息</th>
	<th style="width:20%">involving personal information</th>
	<th style="width:10%">隐私权政策链接</th>
	<th style="width:10%">Privacy Policy Link</th>
  </tr>
  <tr>
    <td>百度语音识别</td>
    <td>com.baidu.speech</td>
	<td>语音识别（请根据具体使用目的填写）</td>
	<td style="font-size:12px">
		android.permission.RECORD_AUDIO<br>
		android.permission.ACCESS_NETWORK_STATE<br>
		android.permission.ACCESS_WIFI_STATE<br>
		android.permission.CHANGE_NETWORK_STATE<br>
		android.permission.READ_PHONE_STATE<br>
		android.permission.WRITE_EXTERNAL_STORAGE
	</td>
	<td>存储的个人文件、读取手机状态和身份、网络信息</td>
	<td><a href="https://ai.baidu.com/ai-doc/REFERENCE/Qkdykq1r3" target="_blank">https://ai.baidu.com/ai-doc/REFERENCE/Qkdykq1r3</a></td>
  </tr>
</table>

### Map & Geolocation
<a id="map-amp-geolocation"/>
Map & Geolocation模块集成的三方SDK说明
Three-party SDK description for Map & Geolocation module integration

<table style="word-break:break-all">
  <tr>
    <th style="width:10%">SDK名称</th>
    <th style="width:10%">SDK name</th>
    <th style="width:10%">包名信息</th>
    <th style="width:10%">package name information</th>
	<th style="width:15%">使用目的</th>
	<th style="width:15%">purpose of usage</th>
	<th style="width:30%">使用的权限</th>
	<th style="width:30%">Permission to use</th>
	<th style="width:20%">涉及个人信息</th>
	<th style="width:20%">involving personal information</th>
	<th style="width:10%">隐私权政策链接</th>
	<th style="width:10%">Privacy Policy Link</th>
  </tr>
  <tr>
    <td>高德开放平台</td>
    <td>com.amap.api, com.loc, com.autonavi</td>
	<td>实现定位/展现地图（请根据具体使用目的填写）</td>
	<td style="font-size:12px">
		android.permission.ACCESS_COARSE_LOCATION<br>
		android.permission.ACCESS_FINE_LOCATION<br>
		android.permission.ACCESS_NETWORK_STATE<br>
		android.permission.ACCESS_WIFI_STATE<br>
		android.permission.CHANGE_WIFI_STATE<br>
		android.permission.READ_PHONE_STATE<br>
		android.permission.WRITE_EXTERNAL_STORAGE<br>
		android.permission.ACCESS_LOCATION_EXTRA_COMMANDS
	</td>
	<td>存储的个人文件、位置信息、读取手机状态和身份、网络信息</td>
	<td><a href="https://lbs.amap.com/agreement/compliance" target="_blank">https://lbs.amap.com/agreement/compliance</a></td>
  </tr>
  <tr>
    <td>百度开放平台</td>
    <td>com.baidu</td>
  	<td>实现定位/展现地图（请根据具体使用目的填写）</td>
  	<td style="font-size:12px">
  		android.permission.ACCESS_COARSE_LOCATION<br>
  		android.permission.ACCESS_FINE_LOCATION<br>
  		android.permission.ACCESS_NETWORK_STATE<br>
  		android.permission.ACCESS_WIFI_STATE<br>
  		android.permission.CHANGE_WIFI_STATE<br>
  		android.permission.READ_PHONE_STATE<br>
  		android.permission.WRITE_EXTERNAL_STORAGE<br>
  		android.permission.ACCESS_LOCATION_EXTRA_COMMANDS<br>
  		android.permission.READ_LOGS<br>
  		android.permission.WRITE_SETTINGS<br>
  		android.permission.MOUNT_UNMOUNT_FILESYSTEM
  	</td>
  	<td>存储的个人文件、位置信息、读取手机状态和身份、网络信息</td>
  	<td><a href="https://map.baidu.com/zt/client/privacy/index.html" target="_blank">https://map.baidu.com/zt/client/privacy/index.html</a></td>
  </tr>
</table>

### uni-AD

<a id="uniAd"/>

uni-AD广告模块集成的三方SDK说明
Three-party SDK description for uni-AD advertising module integration

<table style="word-break:break-all">
  <tr>
    <th style="width:8%">SDK名称</th>
    <th style="width:8%">SDK name</th>
    <th style="width:10%">SDK包名/网址</th>
    <th style="width:10%">SDK package name/URL</th>
    <th style="width:8%">SDK用途</th>
    <th style="width:8%">SDK usage</th>
    <th style="width:20%">可能获取的个人信息类型</th>
    <th style="width:20%">Types of personal information that may be obtained</th>
    <th style="width:25%">调用的设备权限</th>
    <th style="width:25%">Invoked Device Permissions</th>
    <th style="width:20%">信息用途</th>
    <th style="width:20%">Information use</th>
    <th style="width:10%">SDK隐私政策链接/目的</th>
    <th style="width:10%">SDK Privacy Policy Link/Purpose</th>
  </tr>
  <tr>
    <td>uni-AD</td>
    <td></td>
    <td>基础广告 </td>
    <td>basic advertising</td>
    <td style="font-size:12px">设备品牌、型号、操作系统版本、OAID、分辨率、IMEI、android ID、SIM 卡 IMSI 信息、应用名称、应用包名、应用版本号、网络信息、应用安装列表、位置信息 </td>
    <td style="font-size:12px">
	android.permission.ACCESS_NETWORK_STATE <br>
	android.permission.READ_PHONE_STATE <br>
	android.permission.ACCESS_COARSE_LOCATION 
	</td>
    <td>广告投放合作，广告归因、反作弊、安全 </td>
    <td>Advertising cooperation, advertising attribution, anti-cheating, security</td>
    <td><a href="https://doc.dcloud.net.cn/markdown-share-docs/1d821cdd3cdf2681045ec4be94bc8404/" target="_blank">隐私协议</a></td>
    <td><a href="https://doc.dcloud.net.cn/markdown-share-docs/1d821cdd3cdf2681045ec4be94bc8404/" target="_blank">Privacy Agreement</a></td>
  </tr>
  <tr>
	<td>推啊 </td>
	<td> engine.tuifish.com </td>
	<td>基础广告 </td>
	<td>basic advertising</td>
	<td style="font-size:12px">设备品牌、型号、操作系统版本、OAID、分辨率、IMEI、android ID、SIM 卡 IMSI 信息、应用名称、应用包名、应用版本号、网络信息、应用安装列表、位置信息 </td>
	<td style="font-size:12px">
	android.permission.ACCESS_NETWORK_STATE <br>
	android.permission.READ_PHONE_STATE <br>
	android.permission.ACCESS_COARSE_LOCATION 
	</td>
	<td style="font-size:12px">识别广告、活动作弊行为；改善 SDK 崩溃率、推送个性化广告；广告投放。 </td>
	<td style="font-size:12px">Identify ads, campaign cheating; improve SDK crash rate, push personalized ads; ad serving.</td>
	<td><a href= "https://yun.tuia.cn/tuia/sdk/agreement/index.html" target="_blank">推啊隐私协议</a></td>
	<td><a href= "https://yun.tuia.cn/tuia/sdk/agreement/index.html" target="_blank">Push Ah Privacy Policy</a></td>
  </tr>
  <tr>
    <td>快手 </td>
    <td>com.kwad.sdk </td>
    <td>增强1111广告 </td>
    <td>Enhanced 1111 Advertising</td>
    <td>IMEI、openid、位置信息 </td>
    <td style="font-size:12px">
	android.permission.ACCESS_NETWORK_STATE <br>
	android.permission.INTERNET <br>
	android.permission.READ_PHONE_STATE <br>
	android.permission.ACCESS_WIFI_STATE <br>
	android.permission.REQUEST_INSTALL_PACKAGES <br>
	android.permission.VIBRATE 
	</td>
    <td>广告投放、广告归因、反作弊、安全 </td>
    <td>Ad serving, ad attribution, anti-fraud, security</td>
    <td><a href="https://www.kuaishou.com/about/policy" target="_blank">快手隐私协议</a></td>
    <td><a href="https://www.kuaishou.com/about/policy" target="_blank">Kuaishou Privacy Agreement</a></td>
  </tr>
  <tr>
    <td>快手内容联盟 </td>
    <td>com.kwad.sdk </td>
    <td>增强广告 </td>
    <td>Enhanced Ads</td>
    <td>IMEI、openid、位置信息 </td>
    <td style="font-size:12px">
	android.permission.ACCESS_NETWORK_STATE <br>
	android.permission.INTERNET <br>
	android.permission.READ_PHONE_STATE <br>
	android.permission.ACCESS_WIFI_STATE <br>
	android.permission.REQUEST_INSTALL_PACKAGES <br>
	android.permission.VIBRATE <br>
	android.permission.SET_WALLPAPER<br>
    android.permission.READ_EXTERNAL_STORAGE <br>
	android.permission.WRITE_EXTERNAL_STORAGE <br>
	android.permission.ACCESS_COARSE_LOCATION <br>
	android.permission.BLUETOOTH
	</td>
    <td>广告投放、广告归因、反作弊、安全 </td>
    <td>Ad serving, ad attribution, anti-fraud, security</td>
    <td><a href="https://www.kuaishou.com/about/policy" target="_blank">快手内容联盟隐私协议</a></td>
    <td><a href="https://www.kuaishou.com/about/policy" target="_blank">Kuaishou Content Alliance Privacy Policy</a></td>
  </tr>
  <tr>
    <td>优量汇 </td>
    <td>com.qq.e </td>
    <td>增强广告 </td>
    <td>Enhanced Ads</td>
    <td>IMEI、openid、位置信息 </td>
    <td style="font-size:12px">
	android.permission.INTERNET <br>
	android.permission.ACCESS_NETWORK_STATE <br>
	android.permission.ACCESS_WIFI_STATE <br>
	android.permission.REQUEST_INSTALL_PACKAGES <br>
	android.permission.CHANGE_NETWORK_STATE<br> 
	android.permission.QUERY_ALL_PACKAGES <br>
	android.permission.REORDER_TASKS<br>
    android.permission.VIBRATE <br>
	android.permission.ACCESS_COARSE_LOCATION 
	</td>
    <td style="font-size:12px">广告投放与监测归因、广告主统计投放结果、减少App崩溃、确保服务器正常运行、提升可扩展性和性能</td>
    <td style="font-size:12px">Ad serving and monitoring attribution, advertisers&#39; statistics on serving results, reducing App crashes, ensuring normal server operation, improving scalability and performance</td>
    <td><a href="https://imgcache.qq.com/gdt/cdn/adn/uniondoc/ylh_sdk_privacy_statement.html"target="_blank">优量汇隐私协议</a></td>
    <td><a href="https://imgcache.qq.com/gdt/cdn/adn/uniondoc/ylh_sdk_privacy_statement.html"target="_blank">Youlianghui Privacy Agreement</a></td>
  </tr>
  <tr>
    <td>穿山甲 </td>
    <td>com.bytedance.sdk.openadsdk</td>
    <td>增强广告 </td>
    <td>Enhanced Ads</td>
    <td>IMEI、openid、位置信息 </td>
    <td style="font-size:12px">
	android.permission.ACCESS_NETWORK_STATE <br>
	android.permission.READ_PHONE_STATE <br>
	android.permission.WRITE_EXTERNAL_STORAGE 
	</td>
    <td>广告投放合作、广告归因、反作弊 </td>
    <td>Advertising cooperation, advertising attribution, anti-fraud</td>
    <td><a href="https://www.pangle.cn/privacy/partner" target="_blank">穿山甲隐私协议</a></td>
    <td><a href="https://www.pangle.cn/privacy/partner" target="_blank">Pangolin Privacy Policy</a></td>
  </tr>
  <tr>
    <td>Sigmob </td>
    <td>com.sigmob.windad </td>
    <td>增强广告 </td>
    <td>Enhanced Ads</td>
    <td>IMEI、openid、位置信息 </td>
    <td style="font-size:12px">
	android.permission.ACCESS_NETWORK_STATE<br>
	android.permission.INTERNET <br>
	android.permission.ACCESS_WIFI_STATE <br>
	android.permission.CHANGE_WIFI_STATE <br>
	android.permission.READ_PHONE_STATE <br>
	android.permission.REQUEST_INSTALL_PACKAGES <br>
	android.permission.QUERY_ALL_PACKAGES
    </td>
    <td>广告投放、广告主归因、反作弊 </td>
    <td>Ad placement, advertiser attribution, anti-fraud</td>
    <td><a href="https://support.sigmob.com/#/%E9%9A%90%E7%A7%81%E6%9D%A1%E6%AC%BE/">Sigmob隐私协议</a></td>
    <td><a href="https://support.sigmob.com/#/%E9%9A%90%E7%A7%81%E6%9D%A1%E6%AC%BE/">Sigmob Privacy Agreement</a></td>
  </tr>
</table>

### 腾讯x5内核
### Tencent x5 kernel

<a id="e885bee8aeafx5e58685e6a0b8"/>

<table style="word-break:break-all">
  <tr>
    <th style="width:10%">SDK名称</th>
    <th style="width:10%">SDK name</th>
    <th style="width:10%">包名信息</th>
    <th style="width:10%">package name information</th>
	<th style="width:15%">使用目的</th>
	<th style="width:15%">purpose of usage</th>
	<th style="width:30%">使用的权限</th>
	<th style="width:30%">Permission to use</th>
	<th style="width:20%">涉及个人信息</th>
	<th style="width:20%">involving personal information</th>
	<th style="width:10%">隐私权政策链接</th>
	<th style="width:10%">Privacy Policy Link</th>
  </tr>
  <tr>
    <td>腾讯浏览服务SDK</td>
    <td>com.tencent.tbs、com.tencent.smtt</td>
	<td>x5内核渲染webview（请根据具体使用目的填写）</td>
	<td style="font-size:12px">
		android.permission.WRITE_EXTERNAL_STORAGE<br>
		android.permission.ACCESS_NETWORK_STATE<br>
		android.permission.ACCESS_WIFI_STATE<br>
		android.permission.READ_PHONE_STATE
	</td>
	<td>存储的个人文件、读取手机状态和身份、网络信息</td>
	<td><a href="https://x5.tencent.com/docs/privacy.html" target="_blank">https://x5.tencent.com/docs/privacy.html</a></td>
  </tr>
</table>

### Contacts

<a id="Contacts"/>

管理系统通讯录，用于可对系统通讯录进行增、删、改、查等操作。通过plus.contacts获取系统通讯录管理对象。
Manage the system address book, which can be used to add, delete, modify, check and other operations on the system address book. Obtain the system address book management object through plus.contacts.

<table style="word-break:break-all">
  <tr>
    <th style="width:10%">SDK名称</th>
    <th style="width:10%">SDK name</th>
    <th style="width:10%">包名信息</th>
    <th style="width:10%">package name information</th>
	<th style="width:25%">使用目的</th>
	<th style="width:25%">purpose of usage</th>
	<th style="width:20%">使用的权限</th>
	<th style="width:20%">Permission to use</th>
	<th style="width:20%">涉及个人信息</th>
	<th style="width:20%">involving personal information</th>
	<th style="width:10%">隐私权政策链接</th>
	<th style="width:10%">Privacy Policy Link</th>
  </tr>
  <tr>
    <td>Contacts</td>
    <td>io.dcloud.feature.contacts</td>
	<td>管理系统通讯录，用于可对系统通讯录进行增、删、改、查等操作（请根据具体使用目的填写）</td>
	<td style="font-size:12px">
		android.permission.GET_ACCOUNTS<br>
		android.permission.WRITE_CONTACTS<br>
		android.permission.READ_CONTACTS
	</td>
	<td>获取联系人信息</td>
	<td>Get contact information</td>
	<td style="font-size:12px">(宿主根据APP自身逻辑 自行填写相关隐私政策信息)</td>
	<td style="font-size:12px">(The host fills in the relevant privacy policy information according to the APP&#39;s own logic)</td>
  </tr>
</table>

### Messaging
<a id="Messaging"/>
<table style="word-break:break-all">
  <tr>
    <th style="width:10%">SDK名称</th>
    <th style="width:10%">SDK name</th>
    <th style="width:10%">包名信息</th>
    <th style="width:10%">package name information</th>
	<th style="width:25%">使用目的</th>
	<th style="width:25%">purpose of usage</th>
	<th style="width:20%">使用的权限</th>
	<th style="width:20%">Permission to use</th>
	<th style="width:20%">涉及个人信息</th>
	<th style="width:20%">involving personal information</th>
	<th style="width:10%">隐私权政策链接</th>
	<th style="width:10%">Privacy Policy Link</th>
  </tr>
  <tr>
    <td>Messaging</td>
    <td>io.dcloud.feature.messagings</td>
	<td>管理设备通讯功能，可用于短信、彩信、邮件发送等（请根据具体使用目的填写）</td>
	<td style="font-size:12px">
		android.permission.RECEIVE_SMS<br>
		android.permission.SEND_SMS<br>
		android.permission.WRITE_SMS<br>
		android.permission.READ_SMS
	</td>
	<td>读写短信、彩信、邮件</td>
	<td>Read and write SMS, MMS, email</td>
	<td style="font-size:12px">(宿主根据APP自身逻辑 自行填写相关隐私政策信息)</td>
	<td style="font-size:12px">(The host fills in the relevant privacy policy information according to the APP&#39;s own logic)</td>
  </tr>
</table>


如果您的应用使用了依赖三方SDK的模块也需要将其合规条款添加到《隐私政策》中
If your app uses modules that rely on third-party SDKs, you also need to add their compliance clauses to the Privacy Policy

#### uni原生插件
#### uni native plugin

如果应用使用了uni原生插件，需要注意一下几点：
If the application uses the uni native plugin, you need to pay attention to the following points:

+ 使用插件时请查看插件详情页面中的 `隐私、权限声明` 。（插件使用什么sdk？获取了什么用户信息？都应由插件作者提供并填写在 `隐私、权限声明`中）
+ Please check the `Privacy and Permission Statement` in the plugin details page when using the plugin. (What sdk does the plugin use? What user information is obtained? All should be provided by the plugin author and filled in `Privacy, Permission Statement`)
+ 将插件中用到的三方SDK信息添加到用户隐私协议中。例如集成了`百度定位`。就需要在隐私协议中说明集成了百度定位SDK。获取了xxx用户信息!用于xxx.
+ Add the third-party SDK information used in the plugin to the user privacy agreement. For example, `Baidu positioning` is integrated. It is necessary to describe the integration of Baidu positioning SDK in the privacy agreement. Obtained xxx user information! Used for xxx.
+ 如果发现插件有获取用户信息而插件详情页并没有提供`隐私、权限声明`，请与插件开发者或与我们反馈共同督促进行补充。
+ If you find that the plug-in obtains user information but the plug-in details page does not provide a `Privacy and Permission Statement`, please contact the plug-in developer or feedback with us to supervise and supplement.

#### 其它
#### Other

《隐私政策》必须非常清楚、全面地说明（不要用可能收集、了解用户信息这种模糊不清晰的词语）收集用户个人信息的目的、方式和范围。
The "Privacy Policy" must be very clear and comprehensive (do not use vague and unclear words that may collect and understand user information) the purpose, method and scope of collecting users' personal information.
如果应用使用“通讯录”、“短信”等相关功能，请根据应用业务场景进行描述。
If the application uses related functions such as "Address Book" and "SMS", please describe it according to the application business scenario.
