### 概述

为贯彻落实《[中华人民共和国网络安全法](http://www.cac.gov.cn/2016-11/07/c_1119867116.htm)》关于“网络运营者收集、使用个人信息，应当遵循合法、正当、必要的原则”、“网络运营者不得收集与其提供的服务无关的个人信息”等规定，国家互联网信息办公室、工业和信息化部、公安部、国家市场监督管理总局联合制定了《[常见类型移动互联网应用程序必要个人信息范围规定](http://www.cac.gov.cn/2021-03/22/c_1617990997054277.htm)》（国信办秘字〔2021〕14号，以下简称“《规定》”），明确移动互联网应用程序（App）运营者不得因用户不同意收集非必要个人信息，而拒绝用户使用App基本功能服务。

《规定》第三条定义了`必要个人信息`，《规定》第四条明确了基本要求，即“App不得因用户不同意提供非必要个人信息，而拒绝用户使用其基本功能服务”；《规定》第五条划定了三十九种常见类型App，及其基本功能服务和必要个人信息，请开发者仔细阅读《规定》确定自己开发的App所属类型，明确基本功能服务及必要个人信息。这里关键就是对`必要个人信息`和`非必要个人信息`的理解，并在App的“隐私政策”中详细描述收集的所有信息及用途，分以下情况：
- 划定为需要`必要个人信息`的App（如地图导航类App），需在“隐私政策”中明确描述App使用的`必要个人信息`内容及用途，同时包含使用的三方SDK采集的信息。如果“隐私政策”中只描述收集`非必要个人信息`则用户不同意也应该继续提供基本功能服务
- 划定为无需`必要个人信息`的App（如网络直播类App），应用不应该采集`必要个人信息`，“隐私政策”中描述采集的信息都属于`非必要个人信息`，且用户不同意“隐私政策”应该继续提供基本功能服务

> DCloud uni-app(5+ App/Wap2App) SDK及其它三方SDK运行期收集的信息属于`非必要个人信息`

也就是说根据《规定》要求，很多App需要支持在用户不同意“隐私政策的情况下仍然可以进入运行，并提供基本功能服务。为了支持此类需求，HBuilderX 3.3.1版本新增“未同意隐私政策模式”（以下简称“disagreeMode”），配置支持disagreeMode后，用户在“隐私政策”提示框点击拒绝按钮后仍然可以继续使用App。在此模式下，uni-app(5+ App/Wap2App) 内部逻辑会做特殊处理：
- 不会主动申请读写手机存储、访问设备信息等权限
- 不会主动读任何取设备信息
- 仍然会发送应用启动统计请求，但不包含设备信息
- 仍然会提交异常崩溃统计请求，但不包含任何设备信息

**iOS平台暂不支持disgreeMode，需跟原生隐私政策框一样适配处理**

同时要求用户在使用基本功能服务时，不能读取任何个人信息（包括设备标识信息及用户输入的个人信息），不能调用disagreeMode模式限制API，特别需要注意使用的uni原生插件是否合规。


**注意：App要支持disagreeMode，需要根据业务进行适配**
> - **前提条件：HBuilderX更新到3.3.1及以上版本** 
> - **第一步：原生隐私政策提示框[配置支持disagreeMode](#disagree)** 
> - **第二步：[适配App的基本功能服务](#basic-services)，确保不要调用任何可能涉及“隐私政策”合规的API**
> - **第三步：适配需要使用`非必要个人信息`的业务功能，在调用功能前[引导用户同意“隐私政策”协议](#showPrivacy)**



<a id="disagree"></a>

### 配置支持disagreeMode

在HBuilderX中打开项目的原生隐私政策提示框配置文件[androidPrivacy.json](https://ask.dcloud.net.cn/article/36937)，添加`disagreeMode`配置设置`support`为true. 
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
- loadNativePlugins  
Boolean类型，表示在disagreeMode模式是否加载uni原生插件，true表示加载；false表示不加载（此时调用uni.requireNativePlugin加载插件扩展Module返回undefined，插件的扩展组件Component也无法使用）。默认值为true。  
使用场景：在disagreeMode模式下如果因为使用uni原生插件不符合“隐私政策”合规检测，无法确定是哪个插件引起的，可以简单配置loadNativePlugins为false不加载所有原生插件。注意：配置为false需要在引导用户同意“隐私政策”后重启应用。
- visitorEntry
是否增加展示`游客模式`按钮，用于进入无权限模式。 默认为false，即不展示游客模式按钮
- showAlways
是否每次启动展示都展示隐私协议，默认为false。  注意此字段只有在配置了 support/visitorEntry 为true，即当前应用支持无权限模式的情况下的才会生效。如果用户没有配置support/visitorEntry 则延续原有的逻辑，每次打开都会展示隐私弹窗


<a id="basic-services"></a>

### 适配App的基本功能服务

disagreeMode表示用户未同意“隐私政策”，此时App仅提供基本功能服务，此模式下不能调用涉及隐私合规相关的API，如果调用了可能会因为读取隐私信息导致App无法通过合规检测，参考[disagreeMode模式限制uni API和组件](#limit-uni)及[disagreeMode模式限制5+ API](#limit-plus)。如果基本功能服务的页面需要需要调用到限制API，需先[判断是否运行在disagreeMode模式](#judge)，如果是的话需先[引导用户同意“隐私政策”协议](#showPrivacy)，用户同意隐私政策后再调用限制API。

<a id="judge"></a>

#### 判断是否运行在disagreeMode模式

可通过[plus.runtime.isAgreePrivacy](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.isAgreePrivacy)查询当前应用是否用户同意隐私政策可判断是否运行在disagreeMode模式，示例代码如下：
```
if(plus.runtime.isAgreePrivacy()) {
  // 用户同意隐私政策，可以调用限制API
	// plus.device.getInfo();
}else{
  // 运行在disagreeMode模式，不能调用限制API
  // 这里可以引导用户同意隐私政策
}
```


plus.runtime.isAgreePrivacy()返回为true表示用户已经同意隐私政策，调用相关被限制的API；返回false表示用户没有同意隐私政策，运行运行在disagreeMode模式，不能调用相关被限制的API。


<a id="limit-uni"></a>

#### disagreeMode模式限制uni API和组件

在disagreeMode模式下不要使用以下uni API及组件，否则影响应用商店上架合规检测！

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
* ad
* barcode
* map

<a id="limit-plus"/>

#### disagreeMode模式限制plus API

在disagreeMode模式下不要使用以下5+ API，否则影响应用商店上架合规检测！

|模块名称|被限制调用的API|
|---|---|
|Ad|plus.ad.xxx 广告相关API被限制不可以调用
|Device|plus.device.imei、plus.device.imsi、plus.device.uuid、plus.device.dial、plus.device.getInfo、plus.device.getOAID、plus.device.getVAID、plus.device.getAAID
|Audio|plus.audio.getRecorder
|Barcode|plus.barcode.scan、plus.barcode.getBarcodeById、plus.barcode.create
|Bluetooth|plus.bluetooth.xxx 蓝牙相关API被限制不可以调用
|Camera|plus.camera.xxx 相机相关API被限制不可以调用
|Contacts|plus.contacts.xxx 通讯录相关API被限制不可以调用
|Fingerprint|plus.fingerprint.xxx 指纹识别相关API被限制不可以调用
|Gallery|plus.gallery.xxx 相册相关API被限制不可以调用
|Geolocation|plus.geolocation.xxx 定位相关API被限制不可以调用
|Ibeacon|plus.ibeacon.xxx ibeacon相关API被限制不可以调用
|Io|plus.io.xxx io相关API被限制不可以调
|Maps|plus.maps.xxx 地图相关API被限制不可以调用
|Messaging|plus.messaging.xxx 通讯功能相关API被限制不可以调用
|Navigator|plus.navigator.createShortcut、plus.navigator.hasShortcut、plus.navigator.isSimulator、plus.navigator.isRoot
|Oauth|plus.oauth.xxx 登录相关API被限制不可以调用
|Share|plus.oauth.xxx 登录相关API被限制不可以调用
|Payment|plus.payment.xxx 支付相关API被限制不可以调用
|Push|plus.push.xxx 推送相关API被限制不可以调用
|Runtime|plus.runtime.install
|Speech|plus.speech.xxx 语音识别相关API被限制不可以调用
|Statistic|plus.statistic.xxx 统计相关API被限制不可以调用
|Video|plus.video.createLivePusher、plus.video.LivePusher 推流相关API被限制不可以使用


<a id="showPrivacy"></a>

### 引导用户同意“隐私政策”协议

当用户在disagreeMode模式使用基本功能服务时，可能链接打开使用了限制API的业务功能，此时可调用[plus.runtime.showPrivacyDialog](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.showPrivacyDialog)弹出隐私政策协议框，引导用户同意隐私政策后再使用相关业务功能。示例代码如下：
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
plus.runtime.showPrivacyDialog(options);
```

**注意：如果项目中使用了 map、push、Statistic，或者设置loadNativePlugins为false时，用户选择同意隐私政策协议后需要调用`plus.runtime.restart`重启应用才能生效！**


<a id="fqa"></a>

### 常见问题

#### 不同意隐私协议启动后遇到合规问题如何处理

+ 项目全局检测是否调用了被限制API，具体API参考当前文档，如果调用了需要限制调用时机，隐私同意后才可调用！
+ 使用了uni原生插件，这种情况可用排查法排查，暂时删除某uni原生插件！打包重新上架测试。也可以配置`loadNativePlugins`不同意隐私政策时不加载uni原生插件。
+ 使用了被限制组件，在不同意隐私政策环境下不能使用。请自行解决规避被限制组件的展示。
+ 使用了NJS调用了原生API导致不合规。需要自行排查。或提供java调用堆栈提供客服排查
+ 使用了插件市场提供的组件、JS SDK、模板等需要注意是否涉及被限制的API。否则可能导致无法上架。
+ 其他未知环境。通过审核平台获取java调用堆栈。提供给客服判定问题原因并解决问题


