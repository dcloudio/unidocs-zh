2012年9月份iOS6发布，IDFA面世，主要用于给开发者跟踪应用中广告的投放效果，但很多应用（或三方SDK）会获取IDFA作为设备唯一标识使用。  
iOS14.5 发布之后，苹果要求应用获取 IDFA 时，需弹出用户许可收集跟踪数据的授权框，如果没有弹出授权框则可能会被App Store审核拒绝，提示违反5.1.2规则：
```txt
Guideline 5.1.2 - Legal - Privacy - Data Use and Sharing


We noticed you do not use App Tracking Transparency to request the user's permission before tracking their activity across apps and websites. The app privacy information you provided in App Store Connect indicates you collect data in order to track the user, including Device ID and Precise Location.

Starting with iOS 14.5, apps on the App Store need to receive the user’s permission through the AppTrackingTransparency framework before collecting data used to track them. This requirement protects the privacy of App Store users.

Next Steps

Here are two ways to resolve this issue:

- You can remove the tracking functionality from your app and update your app privacy information in App Store Connect.
- If you decide to continue tracking users, you must implement App Tracking Transparency and request permission before collecting data used to track the user or device.

Resources

- See Frequently Asked Questions about the new requirements for apps that track users.
- Learn more about designing appropriate permission requests.
```

**如果上架App Store遇到上述问题，请按本文步骤配置开启IDFA，重新打包后再提交审核**
- 确保更新到HBuilderX3.2.9或以上版本，建议使用最新版本  
- 如果是 cli 命令创建的项目，需要将 cli 升级到最新版本，参考[cli命令行](https://uniapp.dcloud.io/quickstart-cli?id=cliversion)


### 如何判断是否需要开启广告标识（IDFA）  
- App中使用了`uni-AD`中的增强广告（优量汇、穿山甲、或快手）需要开启IDFA  
- HBuilderX版本低于`3.2.15`，App使用了`新浪微博登录和分享`、`一键登录`、`友盟统计`中的一个或多个功能模块则需要开启IDFA（3.2.15及以上版本更新了这些模块的三方SDK，可以不用开启IDFA）  
- uni原生插件也也可能会读取IDFA，建议提交APP Store审核不通过，提示违反5.1.2规则且内容中包含`App Tracking Transparency`都可以通过配置开启IDFA解决  

> 注意：  
> uni-AD中的基础广告无需访问IDFA，没有勾选三方增强广告SDK时可以不开启广告标识（IDFA）  
> 对于非广告类的三方SDK，我们会密切关注其官方的版本更新，待官方出了不包含IDFA的版本我们会尽快适配升级  


### 设置开启广告标识（IDFA）
打开项目的manifest.json文件，在 “App常用其它设置” -> “iOS设置” 中勾选“使用广告标识（IDFA）”：
![](https://native-res.dcloud.net.cn/images/uniapp/others/idfa-manifest.png)

#### 设置 NSUserTrackingUsageDescription 隐私描述  
开启广告标识（IDFA）后，云端打包默认隐私描述为“请放心，开启权限不会获取您在其他站点的隐私信息，该权限仅用于标识设备并保障服务安全与提示浏览体验”。
如需自定义隐私描述，打开项目的 manifest.json 文件，在 “App权限配置” -> “iOS隐私信息访问的许可描述” 下配置“跟踪用户的活动(NSUserTrackingUsageDescription)”：
![](https://native-res.dcloud.net.cn/images/uniapp/others/idfa-privacy.png)

隐私描述是为了告诉用户，应用为什么要跟踪用户及访问设备的IDFA，配置的描述内容会展示在授权框上，参考以下建议描述说明：
- 包含uni-AD功能时  
“请放心，开启权限不会获取您在其他站点的隐私信息，该权限仅用于标识设备、第三方广告、并保障服务安全与提示浏览体验”
- 不包含uni-AD功能时  
“请放心，开启权限不会获取您在其他站点的隐私信息，该权限仅用于标识设备并保障服务安全与提示浏览体验”

配置后需提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)，运行时弹出授权提示框显示效果如下：
![](https://native-res.dcloud.net.cn/images/uniapp/others/idfa-tips.png)

离线打包配置参考文档：[iOS配置IDFA](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/ios?id=%e5%a6%82%e4%bd%95%e9%85%8d%e7%bd%aeidfa)

### 配置 App 隐私  
开启广告标识（IDFA）后，提交App Store审核之前，需登录[App Store Connect](https://appstoreconnect.apple.com/)，进入App详情页面，打开 “App 隐私” -> “数据类型”，点击“编辑”，勾选 “是，我们会从此App收集数据”：
![](https://native-res.dcloud.net.cn/images/uniapp/others/idfa-appstoreconnect-1.png)

点击“下一步”，在标识符项中勾选“设备ID”，在诊断数据向中勾选“崩溃数据”，如果使用了`uni-AD`则需在使用数据项中勾选“广告数据”：
![](https://native-res.dcloud.net.cn/images/uniapp/others/idfa-appstoreconnect-2.png)

保存后，分别编辑收集的数据用途：

#### 设备 ID  
点击“设备 ID”旁的“编辑”，勾选“其它用途”：
![](https://native-res.dcloud.net.cn/images/uniapp/others/idfa-appstoreconnect-id.png)

> 如果使用了`uni-AD`，需同时勾选“第三方广告”  

#### 广告数据  
点击“广告数据”旁的“编辑”，勾选“第三方广告”：
![](https://native-res.dcloud.net.cn/images/uniapp/others/idfa-appstoreconnect-ad.png)

#### 崩溃数据  
点击“崩溃数据”旁的“编辑”，勾选“App 功能”：
![](https://native-res.dcloud.net.cn/images/uniapp/others/idfa-appstoreconnect-app.png)

> 如果使用了`uni-AD`，需同时勾选“第三方广告”  



### App中获取IDFA标识
通过[plus.device.getInfo](https://www.html5plus.org/doc/zh_cn/device.html#plus.device.getInfo)获取：
``` js  
plus.device.getInfo({//需要勾选IDFA
	success:function(e){
		console.log('idfa =  '+JSON.stringify(e.idfa));
	},
	fail:function(e){
		console.log('getDeviceInfo failed: '+JSON.stringify(e));
	}
});
```
也可通过native.js获取：
``` js  
var idfa = '';
var manager = plus.ios.invoke('ASIdentifierManager', 'sharedManager');
if(plus.ios.invoke(manager, 'isAdvertisingTrackingEnabled')){
	var identifier = plus.ios.invoke(manager, 'advertisingIdentifier');
	idfa = plus.ios.invoke(identifier, 'UUIDString');
	plus.ios.deleteObject(identifier);
}
plus.ios.deleteObject(manager);
console.log('idfa = '+idfa);
```

参考Uni插件示例：[https://ext.dcloud.net.cn/plugin?id=726](https://ext.dcloud.net.cn/plugin?id=726)


### 注意事项  
#### 配置NSUserTrackingUsageDescription仍然审核不通过,提示违反5.1.1规则：
如果配置了开启广告标识（IDFA）并且也配置了 NSUserTrackingUsageDescription隐私描述，但是应用还是被App Stroe审核拒绝，且提示违反5.1.1规则：

```txt
Guideline 5.1.1 - Legal - Privacy - Data Collection and Storage  

We noticed that your app requests the user's consent to access the AppTrackingTransparency framework, but doesn't sufficiently explain the use of the AppTrackingTransparency framework in the purpose string.

To help users make informed decisions about how their data is used, all permission request alerts need to specify how your app will use the requested information.  

Next Steps  

Please revise the relevant purpose string in your app's Info.plist file to specify why your app needs access to the user's AppTrackingTransparency framework.

You can modify your app's Info.plist file using the property list editor in Xcode.

Resources  

- See example of helpful, informative purpose strings.
- Review a list of relevant property list keys.
```

则可能是描述内容过于简单，没有准确说明应用为什么要跟踪用户及访问设备的IDFA，可参考上文的建议更新NSUserTrackingUsageDescription描述内容

#### 配置NSUserTrackingUsageDescription仍然审核不通过,提示违反2.1规则：
如果配置了开启广告标识（IDFA）并且也配置了 NSUserTrackingUsageDescription隐私描述，但是应用还是被App Stroe审核拒绝，且提示违反2.1规则：
```txt
Guideline 2.1 - Information Needed


We're looking forward to completing the review of your app, but we need more information to continue. Specifically, we noticed that your app uses the AppTrackingTransparency framework, but we haven't been able to locate the App Tracking Transparency permission request.

Next Steps

Please indicate where in your app we can find the AppTrackingTransparency permission request. The request should appear before any data is collected that could be used to track the user.

Apps that track user's activity must implement App Tracking Transparency and request permission before collecting data used to track.

Resources

See Frequently Asked Questions about the new requirements for apps that track users.

Since your App Store Connect status is Metadata Rejected, we do NOT require a new binary. To revise the metadata, visit App Store Connect to select your app and revise the desired metadata values. Once you’ve completed all changes, reply to this message in Resolution Center and we will continue the review.
```
则可能是App Store Connect配置 “App 隐私”的选项不对，请参考上文重新 配置 “App 隐私”中的选项。

#### 配置NSUserTrackingUsageDescription后真机运行不弹出授权提示框
如果按照上述描述勾选了IDFA 和配置了NSUserTrackingUsageDescription隐私描述，但是真机运行App启动时没有弹出授权提示框，可能的原因是，手机的系统版本是iOS14以下的，或者是iOS14.5的手机，但是手机“设置-隐私-跟踪”里，系统默认将“跟踪选项”关闭了且灰色不可设置；目前这种情况还不确定是iOS的bug，还是是针对地区特殊对待，解决办法：可以将账号切换成一个美区的，这时“跟踪选项”是可以操作的；或者将手机设置还原成默认设置，这时App启动时也能弹出授权提示框，但只会弹出一次。

