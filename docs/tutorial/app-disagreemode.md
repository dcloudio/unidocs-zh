### 概述
### Overview

为贯彻落实《[中华人民共和国网络安全法](http://www.cac.gov.cn/2016-11/07/c_1119867116.htm)》关于“网络运营者收集、使用个人信息，应当遵循合法、正当、必要的原则”、“网络运营者不得收集与其提供的服务无关的个人信息”等规定，国家互联网信息办公室、工业和信息化部、公安部、国家市场监督管理总局联合制定了《[常见类型移动互联网应用程序必要个人信息范围规定](http://www.cac.gov.cn/2021-03/22/c_1617990997054277.htm)》（国信办秘字〔2021〕14号，以下简称“《规定》”），明确移动互联网应用程序（App）运营者不得因用户不同意收集非必要个人信息，而拒绝用户使用App基本功能服务。
In order to implement the "[Network Security Law of the People's Republic of China](http://www.cac.gov.cn/2016-11/07/c_1119867116.htm)", "Network operators shall collect and use personal information in accordance with the law. , the principle of justification and necessity", "Network operators shall not collect personal information irrelevant to the services they provide", etc. The Cyberspace Administration of China, the Ministry of Industry and Information Technology, the Ministry of Public Security, and the State Administration for Market Regulation jointly formulated the "[[ Provisions on the Scope of Necessary Personal Information for Common Types of Mobile Internet Applications] (http://www.cac.gov.cn/2021-03/22/c_1617990997054277.htm) (Guoxin Ban Mi Zi [2021] No. 14, hereinafter referred to as "" "Regulations"), it is clear that mobile Internet application (App) operators shall not refuse users to use the basic functions of the App because users do not agree to collect non-essential personal information.

《规定》第三条定义了`必要个人信息`，《规定》第四条明确了基本要求，即“App不得因用户不同意提供非必要个人信息，而拒绝用户使用其基本功能服务”；《规定》第五条划定了三十九种常见类型App，及其基本功能服务和必要个人信息，请开发者仔细阅读《规定》确定自己开发的App所属类型，明确基本功能服务及必要个人信息。这里关键就是对`必要个人信息`和`非必要个人信息`的理解，并在App的“隐私政策”中详细描述收集的所有信息及用途，分以下情况：
Article 3 of the "Regulations" defines 'essential personal information', and Article 4 of the "Regulations" clarifies the basic requirements, that is, "Apps shall not refuse users to use their basic functions and services because users do not agree to provide non-essential personal information"; " Article 5 of the Regulations defines 39 common types of apps, their basic functional services and necessary personal information. Developers are requested to read the Regulations carefully to determine the type of apps they develop, and to clarify basic functional services and necessary personal information. . The key here is to understand 'essential personal information' and 'non-essential personal information', and describe all the information collected and its uses in detail in the "Privacy Policy" of the App, in the following situations:
- 划定为需要`必要个人信息`的App（如地图导航类App），需在“隐私政策”中明确描述App使用的`必要个人信息`内容及用途，同时包含使用的三方SDK采集的信息。如果“隐私政策”中只描述收集`非必要个人信息`则用户不同意也应该继续提供基本功能服务
- For apps that require 'essential personal information' (such as map navigation apps), the content and purpose of the 'essential personal information' used by the app must be clearly described in the "Privacy Policy", including the information collected by the third-party SDK used . If the "Privacy Policy" only describes the collection of `non-essential personal information`, the user does not agree and should continue to provide basic functional services
- 划定为无需`必要个人信息`的App（如网络直播类App），应用不应该采集`必要个人信息`，“隐私政策”中描述采集的信息都属于`非必要个人信息`，且用户不同意“隐私政策”应该继续提供基本功能服务
- It is classified as an app that does not require 'essential personal information' (such as a webcast app), the app should not collect 'essential personal information', the information described in the "Privacy Policy" is 'non-essential personal information', and the user Do not agree with the "Privacy Policy" should continue to provide basic functions

> DCloud uni-app(5+ App/Wap2App) SDK及其它三方SDK运行期收集的信息属于`非必要个人信息`
> The information collected during the runtime of the DCloud uni-app (5+ App/Wap2App) SDK and other third-party SDKs is `non-essential personal information`

也就是说根据《规定》要求，很多App需要支持在用户不同意“隐私政策的情况下仍然可以进入运行，并提供基本功能服务。为了支持此类需求，HBuilderX 3.3.1版本新增“未同意隐私政策模式”（以下简称“disagreeMode”），配置支持disagreeMode后，用户在“隐私政策”提示框点击拒绝按钮后仍然可以继续使用App。在此模式下，uni-app(5+ App/Wap2App) 内部逻辑会做特殊处理：
That is to say, according to the requirements of the "Regulations", many apps need to support running even if the user does not agree to the "Privacy Policy", and provide basic functional services. "Privacy Policy Mode" (hereinafter referred to as "disagreeMode"), after configuring to support disagreeMode, the user can continue to use the App after clicking the reject button in the "Privacy Policy" prompt box. In this mode, uni-app(5+ App/Wap2App) The internal logic will do special processing:
- 不会主动申请读写手机存储、访问设备信息等权限
- Will not actively apply for permissions to read and write mobile phone storage, access device information, etc.
- 不会主动读任何取设备信息
- Will not actively read any device information
- 仍然会发送应用启动统计请求，但不包含设备信息
- App launch stats request will still be sent, but without device info
- 仍然会提交异常崩溃统计请求，但不包含任何设备信息
- Exception crash statistics request will still be submitted, but without any device information

**iOS平台暂不支持disgreeMode，需跟原生隐私政策框一样适配处理**
**The iOS platform does not support disgreeMode at the moment, it needs to be adapted to the original privacy policy box**

同时要求用户在使用基本功能服务时，不能读取任何个人信息（包括设备标识信息及用户输入的个人信息），不能调用disagreeMode模式限制API，特别需要注意使用的uni原生插件是否合规。
At the same time, users are required to not read any personal information (including device identification information and personal information entered by users) when using basic functional services, and cannot call the disagreeMode mode restriction API. In particular, it is necessary to pay attention to whether the uni native plug-in used is compliant.


**注意：App要支持disagreeMode，需要根据业务进行适配**
**Note: To support disagreeMode, the App needs to be adapted according to the business**
> - **前提条件：HBuilderX更新到3.3.1及以上版本** 
> - **Prerequisite: HBuilderX is updated to version 3.3.1 and above**
> - **第一步：原生隐私政策提示框[配置支持disagreeMode](#disagree)** 
> - **First step: Native privacy policy prompt box [Configure support disagreeMode](#disagree)**
> - **第二步：[适配App的基本功能服务](#basic-services)，确保不要调用任何可能涉及“隐私政策”合规的API**
> - **Step 2: [Adapt the basic functional services of the App](#basic-services), make sure not to call any API that may involve "Privacy Policy" compliance**
> - **第三步：适配需要使用`非必要个人信息`的业务功能，在调用功能前[引导用户同意“隐私政策”协议](#showPrivacy)**
> - **Step 3: Adapt to business functions that require the use of `non-essential personal information`, before calling the function [guide the user to agree to the "Privacy Policy" agreement](#showPrivacy)**



<a id="disagree"></a>

### 配置支持disagreeMode
### Configure to support disagreeMode

在HBuilderX中打开项目的原生隐私政策提示框配置文件[androidPrivacy.json](https://ask.dcloud.net.cn/article/36937)，添加`disagreeMode`配置设置`support`为true. 
Open the project's native privacy policy prompt box configuration file [androidPrivacy.json](https://ask.dcloud.net.cn/article/36937) in HBuilderX, add the `disagreeMode` configuration setting `support` to true.
```json
{
	"prompt": "template",
	"buttonAccept": "同意并接受",  
	"buttonRefuse": "基础功能模式",
	"disagreeMode": {
    	"support": false,
    	"loadNativePlugins": false,
    	"visitorEntry": true,
    	"showAlways": false
	}
}

```

- support  
Boolean类型，true表示开启disagreeMode；false表示不开启（用户不同意“隐私政策”则退出应用）。默认值为false。
Boolean type, true means to open disagreeMode; false means not to open (the user does not agree to the "Privacy Policy" and exits the application). The default value is false.
- loadNativePlugins  
Boolean类型，表示在disagreeMode模式是否加载uni原生插件，true表示加载；false表示不加载（此时调用uni.requireNativePlugin加载插件扩展Module返回undefined，插件的扩展组件Component也无法使用）。默认值为true。  
Boolean type, indicating whether to load the uni native plugin in disagreeMode mode, true means loading; false means not loading (in this case, calling uni.requireNativePlugin to load the plugin extension Module returns undefined, and the extension component Component of the plugin cannot be used). The default value is true.
使用场景：在disagreeMode模式下如果因为使用uni原生插件不符合“隐私政策”合规检测，无法确定是哪个插件引起的，可以简单配置loadNativePlugins为false不加载所有原生插件。注意：配置为false需要在引导用户同意“隐私政策”后重启应用。
Usage scenario: In disagreeMode mode, if the use of uni native plug-ins does not comply with the "Privacy Policy" compliance detection and cannot be determined which plug-in is causing the problem, you can simply configure loadNativePlugins to false to not load all native plug-ins. Note: Setting it to false requires restarting the application after guiding the user to agree to the "Privacy Policy".
- visitorEntry
是否增加展示`游客模式`按钮，用于进入无权限模式。 默认为false，即不展示游客模式按钮
Whether to increase the display of the `Visitor Mode` button, which is used to enter the non-authorized mode. The default is false, that is, the visitor mode button is not displayed
- showAlways
是否每次启动展示都展示隐私协议，默认为false。  注意此字段只有在配置了 support/visitorEntry 为true，即当前应用支持无权限模式的情况下的才会生效。如果用户没有配置support/visitorEntry 则延续原有的逻辑，每次打开都会展示隐私弹窗
Whether to display the privacy agreement every time the display is started, the default is false. Note that this field will only take effect when support/visitorEntry is configured as true, that is, the current application supports permissionless mode. If the user does not configure support/visitorEntry, the original logic will continue, and a privacy pop-up window will be displayed every time it is opened


<a id="basic-services"></a>

### 适配App的基本功能服务
### Adapt to the basic functional services of the App

disagreeMode表示用户未同意“隐私政策”，此时App仅提供基本功能服务，此模式下不能调用涉及隐私合规相关的API，如果调用了可能会因为读取隐私信息导致App无法通过合规检测，参考[disagreeMode模式限制uni API和组件](#limit-uni)及[disagreeMode模式限制5+ API](#limit-plus)。如果基本功能服务的页面需要需要调用到限制API，需先[判断是否运行在disagreeMode模式](#judge)，如果是的话需先[引导用户同意“隐私政策”协议](#showPrivacy)，用户同意隐私政策后再调用限制API。
disagreeMode means that the user does not agree to the "Privacy Policy". At this time, the App only provides basic functional services. In this mode, APIs related to privacy compliance cannot be called. If it is called, the App may fail the compliance detection due to reading privacy information. See [disagreeMode mode limits uni APIs and components](#limit-uni) and [disagreeMode mode limits 5+ APIs](#limit-plus). If the page of the basic function service needs to call the restriction API, you must first [judg whether it is running in disagreeMode mode](#judge), if so, you must first [guide the user to agree to the "Privacy Policy" agreement](#showPrivacy), the user agrees Call the restriction API after the privacy policy.

<a id="judge"></a>

#### 判断是否运行在disagreeMode模式
#### Determine whether to run in disagreeMode mode

可通过[plus.runtime.isAgreePrivacy](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.isAgreePrivacy)查询当前应用是否用户同意隐私政策可判断是否运行在disagreeMode模式，示例代码如下：
You can use [plus.runtime.isAgreePrivacy](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.isAgreePrivacy) to check whether the user agrees to the privacy policy of the current application, and can determine whether it is running in disagreeMode mode. The sample code is as follows:
```
if(plus.runtime.isAgreePrivacy()) {
  // 用户同意隐私政策，可以调用限制API
	// plus.device.getInfo();
}else{
  // 运行在disagreeMode模式，不能调用限制API
  // Running in disagreeMode mode, cannot call restriction API
  // 这里可以引导用户同意隐私政策
  // Here you can guide the user to agree to the privacy policy
}
```


plus.runtime.isAgreePrivacy()返回为true表示用户已经同意隐私政策，调用相关被限制的API；返回false表示用户没有同意隐私政策，运行运行在disagreeMode模式，不能调用相关被限制的API。
plus.runtime.isAgreePrivacy() returns true to indicate that the user has agreed to the privacy policy and calls the relevant restricted APIs; returns false to indicate that the user does not agree to the privacy policy, runs in disagreeMode mode, and cannot call restricted APIs.


<a id="limit-uni"></a>

#### disagreeMode模式限制uni API和组件
#### disagreeMode restricts uni APIs and components

在disagreeMode模式下不要使用以下uni API及组件，否则影响应用商店上架合规检测！
Do not use the following uni APIs and components in disagreeMode mode, otherwise it will affect the compliance detection of the app store!

##### API
* ad 相关
* uni.getSystemInfo uni.getSystemInfoSync
* uni.getRecorderManager
* uni.scanCode
* bluetooth 相关 API
* uni.chooseImage
* uni.chooseVideo
* uni.addPhoneContact
* uni.startSoterAuthentication
* uni.checkIsSupportSoterAuthentication
* uni.checkIsSoterEnrolledInDevice
* uni.saveImageToPhotosAlbum
* uni.saveVideoToPhotosAlbum
* uni.getLocation
* uni.chooseLocation
* uni.openLocation
* uni.createMapContext
* ibeacon 相关
* uni.getFileInfo
* uni.getSavedFileInfo
* uni.getSavedFileList
* uni.removeSavedFile
* uni.saveFile
* uni.getImageInfo
* uni.getVideoInfo
* uni.getProvider
* uni.login
* uni.getUserInfo
* uni.preLogin
* uni.getUniverifyManager
* uni.share
* uni.requestPayment

##### 组件
##### Components
* ad
* barcode
* map

<a id="limit-plus"/>

#### disagreeMode模式限制plus API
#### disagreeMode mode limit plus API

在disagreeMode模式下不要使用以下5+ API，否则影响应用商店上架合规检测！
Do not use the following 5+ APIs in disagreeMode mode, otherwise it will affect the compliance detection of the app store!

|模块名称|被限制调用的API|
|module name|restricted API calls|
|---|---|
|Ad|plus.ad.xxx 广告相关API被限制不可以调用
|Device|plus.device.imei、plus.device.imsi、plus.device.uuid、plus.device.dial、plus.device.getInfo、plus.device.getOAID、plus.device.getVAID、plus.device.getAAID
|Audio|plus.audio.getRecorder
|Barcode|plus.barcode.scan、plus.barcode.getBarcodeById、plus.barcode.create
|Bluetooth|plus.bluetooth.xxx 蓝牙相关API被限制不可以调用
|Bluetooth|plus.bluetooth.xxx Bluetooth related APIs are restricted and cannot be called
|Camera|plus.camera.xxx 相机相关API被限制不可以调用
|Camera|plus.camera.xxx Camera-related APIs are restricted and cannot be called
|Contacts|plus.contacts.xxx 通讯录相关API被限制不可以调用
|Contacts|plus.contacts.xxx Contact API is restricted and cannot be called
|Fingerprint|plus.fingerprint.xxx 指纹识别相关API被限制不可以调用
|Fingerprint|plus.fingerprint.xxx Fingerprint identification related APIs are restricted and cannot be called
|Gallery|plus.gallery.xxx 相册相关API被限制不可以调用
|Gallery|plus.gallery.xxx Album related APIs are restricted and cannot be called
|Geolocation|plus.geolocation.xxx 定位相关API被限制不可以调用
|Geolocation|plus.geolocation.xxx Location-related APIs are restricted and cannot be called
|Ibeacon|plus.ibeacon.xxx ibeacon相关API被限制不可以调用
|Ibeacon|plus.ibeacon.xxx ibeacon related APIs are restricted and cannot be called
|Io|plus.io.xxx io相关API被限制不可以调
|Io|plus.io.xxx io related APIs are restricted and cannot be adjusted
|Maps|plus.maps.xxx 地图相关API被限制不可以调用
|Maps|plus.maps.xxx Map-related APIs are restricted and cannot be called
|Messaging|plus.messaging.xxx 通讯功能相关API被限制不可以调用
|Navigator|plus.navigator.createShortcut、plus.navigator.hasShortcut、plus.navigator.isSimulator、plus.navigator.isRoot
|Oauth|plus.oauth.xxx 登录相关API被限制不可以调用
|Oauth|plus.oauth.xxx Login-related APIs are restricted and cannot be called
|Share|plus.oauth.xxx 登录相关API被限制不可以调用
|Share|plus.oauth.xxx Login-related APIs are restricted and cannot be called
|Payment|plus.payment.xxx 支付相关API被限制不可以调用
|Payment|plus.payment.xxx Payment related APIs are restricted and cannot be called
|Push|plus.push.xxx 推送相关API被限制不可以调用
|Runtime|plus.runtime.install
|Speech|plus.speech.xxx 语音识别相关API被限制不可以调用
|Speech|plus.speech.xxx Speech recognition related APIs are restricted and cannot be called
|Statistic|plus.statistic.xxx 统计相关API被限制不可以调用
|Statistic|plus.statistic.xxx Statistics related APIs are restricted and cannot be called
|Video|plus.video.createLivePusher、plus.video.LivePusher 推流相关API被限制不可以使用
|Video|plus.video.createLivePusher, plus.video.LivePusher APIs related to push streaming are restricted and cannot be used


<a id="showPrivacy"></a>

### 引导用户同意“隐私政策”协议
### Instruct the user to agree to the "Privacy Policy" agreement

当用户在disagreeMode模式使用基本功能服务时，可能链接打开使用了限制API的业务功能，此时可调用[plus.runtime.showPrivacyDialog](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.showPrivacyDialog)弹出隐私政策协议框，引导用户同意隐私政策后再使用相关业务功能。示例代码如下：
When the user uses the basic function service in disagreeMode mode, the link may open the business function that uses the restricted API. At this time, you can call [plus.runtime.showPrivacyDialog](https://www.html5plus.org/doc/zh_cn/runtime. html#plus.runtime.showPrivacyDialog) pops up a privacy policy agreement box, guiding users to agree to the privacy policy before using related business functions. The sample code is as follows:
```
var options = {
	success:function(response){
		console.log("success  " + JSON.stringify(response));
		if(response.code == 1) {
      //用户已同意隐私政策，可以使用其它业务功能
			// plus.runtime.restart();
		}else{
      //用户未同意隐私政策，仍然运行disagreeMode模式，不可以使用其它业务功能
      // ...
    }
	},
	fail:function(response){
		console.log("fail  " + JSON.stringify(response));
	}
};
//弹出隐私政策协议框，引导用户同意隐私政策
//Pop up the privacy policy agreement box to guide the user to agree to the privacy policy
plus.runtime.showPrivacyDialog(options);
```

**注意：如果项目中使用了 map、push、Statistic，或者设置loadNativePlugins为false时，用户选择同意隐私政策协议后需要调用`plus.runtime.restart`重启应用才能生效！**
**Note: If map, push, Statistic is used in the project, or when loadNativePlugins is set to false, the user needs to call `plus.runtime.restart` to restart the application to take effect after choosing to agree to the privacy policy agreement! **


<a id="fqa"></a>

### 常见问题
### common problem

#### 不同意隐私协议启动后遇到合规问题如何处理
#### How to deal with compliance issues after disagreeing with the privacy agreement

+ 项目全局检测是否调用了被限制API，具体API参考当前文档，如果调用了需要限制调用时机，隐私同意后才可调用！
+ The project globally detects whether the restricted API is called. For the specific API, please refer to the current document. If the calling time needs to be restricted, the call can only be made after the privacy consent!
+ 使用了uni原生插件，这种情况可用排查法排查，暂时删除某uni原生插件！打包重新上架测试。也可以配置`loadNativePlugins`不同意隐私政策时不加载uni原生插件。
+ The uni native plug-in is used, this situation can be checked by the troubleshooting method, and a uni native plug-in is temporarily deleted! Packaged and re-launched for testing. You can also configure `loadNativePlugins` to not load uni native plugins when you disagree with the privacy policy.
+ 使用了被限制组件，在不同意隐私政策环境下不能使用。请自行解决规避被限制组件的展示。
+ Restricted components are used and cannot be used without agreeing to the privacy policy. Please solve by yourself to avoid the display of restricted components.
+ 使用了NJS调用了原生API导致不合规。需要自行排查。或提供java调用堆栈提供客服排查
+ Using NJS to call the native API leads to non-compliance. Need to check on your own. Or provide a java call stack for customer service troubleshooting
+ 使用了插件市场提供的组件、JS SDK、模板等需要注意是否涉及被限制的API。否则可能导致无法上架。
+ If you use components, JS SDK, templates, etc. provided by the plugin market, you need to pay attention to whether restricted APIs are involved. Otherwise, it may not be available on the shelves.
+ 其他未知环境。通过审核平台获取java调用堆栈。提供给客服判定问题原因并解决问题
+ Other unknown environments. Get the java call stack through the audit platform. Provided to customer service to determine the cause of the problem and solve the problem


