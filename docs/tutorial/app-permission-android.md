根据工业和信息化部关于开展APP侵害用户权益专项整治要求，应用的隐私政策中需详细描述使用权限的用途。
According to the Ministry of Industry and Information Technology's special rectification requirements for APP infringing user rights and interests, the application's privacy policy needs to describe in detail the purpose of the use permission.
为了不避免应用使用过多权限，HBuilderX2.6.3+版本对应用默认要求的权限进行简化，对第三方SDK需要的权限提供方法根据实际需求进行配置。
In order not to prevent the application from using too many permissions, the HBuilderX 2.6.3+ version simplifies the permissions required by the application by default, and configures the permission provision method required by the third-party SDK according to the actual needs.

### 默认使用的权限
### Default permissions used
提交云端打包后会自动添加以下权限：
After submitting the cloud package, the following permissions will be automatically added:
```js
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.READ_PHONE_STATE" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
<uses-permission android:name="com.asus.msa.SupplementaryDID.ACCESS" />
<uses-permission android:name="com.huawei.android.launcher.permission.CHANGE_BADGE" />
<uses-permission android:name="android.permission.INSTALL_PACKAGES" />
<uses-permission android:name="android.permission.REQUEST_INSTALL_PACKAGES" />
```

权限说明：
Permission description:
- android.permission.INTERNET  
  使用网络权限，应用基础权限  
  Use network permissions, apply basic permissions
- android.permission.READ_EXTERNAL_STORAGE 和 android.permission.WRITE_EXTERNAL_STORAGE  
- android.permission.READ_EXTERNAL_STORAGE and android.permission.WRITE_EXTERNAL_STORAGE  
  读写SD卡权限，系统授权提示未“访问设备上的照片、媒体内容和文件”，可以参考这里配置应用启动时[申请读写手机存储策略](https://ask.dcloud.net.cn/article/36549#externalstorage)  
  Read and write SD card permissions, the system authorization prompt does not "access photos, media content and files on the device", you can refer to here to configure the application startup [Apply for read and write mobile phone storage policy](https://ask.dcloud.net.cn /article/36549#externalstorage)
- android.permission.READ_PHONE_STATE、ACCESS_NETWORK_STATE、ACCESS_WIFI_STATE  
  读取设备标识使用，用于[uni统计服务](https://tongji.dcloud.net.cn/)，可以参考这里配置应用启动时[申请访问设备信息权限策略](https://ask.dcloud.net.cn/article/36549#phonestate)  
  Read the device ID for use in [uni statistics service](https://tongji.dcloud.net.cn/), you can refer to here to configure the [Apply for access device information permission policy](https://ask. dcloud.net.cn/article/36549#phonestate)
- android.permission.INSTALL_PACKAGES、android.permission.REQUEST_INSTALL_PACKAGES  
  安装apk需要的权限，应用中使用[plus.runtime.install](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.install)升级应用则需要此权限  
  Permission required to install apk. This permission is required to upgrade the application using [plus.runtime.install](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.install) in the application
  **注意：HBuilder2.6.3+开始Goog Play渠道默认不再添加此权限，因为GooglePlay审核规则禁止应用下载apk更新，必须通过上传GooglePlay审核更新**  
  **Note: Goog Play channel does not add this permission by default since HBuilder2.6.3+, because GooglePlay audit rules prohibit apps from downloading apk updates, you must upload GooglePlay audit updates**

特定权限说明：
Description of specific permissions:
- com.asus.msa.SupplementaryDID.ACCESS  
  获取设备标识信息oaid在华硕设备上需要用到的权限  
  Permissions required to obtain device identification information oaid on ASUS devices
- com.huawei.android.launcher.permission.CHANGE_BADGE  
  设置应用角标功能在华为设备上需要用到的权限  
  Set the permissions required for the app icon function on Huawei devices
- com.android.launcher.permission.INSTALL_SHORTCUT  
  创建桌面快捷方式权限，应用中使用[plus.navigator.createShortcut](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.createShortcut)创建桌面快捷方式则需要此权限  
  The permission to create desktop shortcuts is required for creating desktop shortcuts using [plus.navigator.createShortcut](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.createShortcut) in applications
- com.android.launcher.permission.UNINSTALL_SHORTCUT  
  删除桌面快捷方式权限，应用中使用[native.js](https://www.html5plus.org/doc/zh_cn/android.html)删除桌面快捷方式则需要此权限  
  Delete the desktop shortcut permission, this permission is required to delete the desktop shortcut using [native.js](https://www.html5plus.org/doc/zh_cn/android.html) in the application


<a id='sdkpermission' />

### Android自动添加三方SDK（或模块）需要的权限  
### Android automatically adds the permissions required by the third-party SDK (or module)
提交云端打包时，勾选使用三方SDK相关的功能模块时，默认会自动添加三方SDK需要的所有权限。  
When submitting the cloud package, if you check the function modules related to the third-party SDK, all the permissions required by the third-party SDK will be automatically added by default.
为了保证三方SDK（或模块）的功能完整，默认会添加可能需要的所有权限，如果应用只用到三方SDK提供的部分功能，不希望自动添加三方SDK需要的所有权限，可以去掉勾选“Android自动添加第三方SDK需要的权限”。  
In order to ensure that the functions of the third-party SDK (or module) are complete, all permissions that may be required will be added by default. If the application only uses some functions provided by the third-party SDK and does not want to automatically add all the permissions required by the third-party SDK, you can uncheck the "Android" Automatically add permissions required by third-party SDKs".
**为了向下兼容，云端打包默认会添加“Geolocation(定位)” -> “系统定位”模块，因此会默认添加定位权限，如果不需要定位权限，请在App权限配置界面去掉勾选“Android自定添加第三方SDK需要的权限”**  
**In order to be backward compatible, the cloud package will add the "Geolocation (location)" -> "system location" module by default, so the location permission will be added by default. If you don't need the location permission, please uncheck "Android" in the App permission configuration interface. Customize the permissions required to add third-party SDKs"**

**注意：去掉自动添加第三方SDK需要的权限后，请务必根据需要在“Android权限配置”中勾选三方SDK必需的权限，三方SDK需要的权限详情参考后面《三方SDK（或模块）需要的权限列表》章节**  
**Note: After removing the permissions required to automatically add the third-party SDK, please be sure to check the permissions required by the third-party SDK in "Android Permission Configuration" as required. For details of the permissions required by the third-party SDK, please refer to "Requirements for the Third-party SDK (or Module)" List of Permissions" chapter**
保存后提交云端打包生效。
After saving, submit the cloud package to take effect.

#### 可视化界面配置  
#### Visual interface configuration
打开项目的manifest.json文件，在“App权限配置”项中去掉“Android自动添加第三方SDK需要的权限”  
![](https://native-res.dcloud.net.cn/images/uniapp/permission/android-sdk.png)

#### 代码视图配置  
#### Code view configuration
打开项目的manifest.json文件，切换到“代码视图”。  
Open your project's manifest.json file and switch to "Code View".
- uni-app项目  
- uni-app project
在 "app-plus" -> "distribute" -> "android" 下添加 autoSdkPermissions 如下：  
Add autoSdkPermissions under "app-plus" -> "distribute" -> "android" as follows:
```json
  "app-plus": {
    "distribute": {
      "android": {
        "autoSdkPermissions": false,    // 不自动添加第三方SDK需要的Android权限
        //...
      },
      //...
  },
  //...
```
- 5+ APP（WAP2APP）项目  
- 5+ APP (WAP2APP) project
在 "plus" -> "distribute" -> "google" 下添加 autoSdkPermissions 如下：
Add autoSdkPermissions under "plus" -> "distribute" -> "google" as follows:
```json
  "plus": {
    "distribute": {
      "google": {
        "autoSdkPermissions": false,    // 不自动添加第三方SDK需要的Android权限
        //...
      },
      //...
  },
  //...
```

### Android权限配置  
### Android permission configuration
打开项目的manifest.json文件，在“（App）模块权限配置”页的“Android权限配置”项下根据需求勾选需要的权限：  
![](https://native-res.dcloud.net.cn/images/uniapp/permission/android.png)

**如果没有列出需要的权限，可按以下方法手动添加**  
**If the required permissions are not listed, you can manually add them as follows**
在manifest.json页面，切换到“代码视图”  
On the manifest.json page, switch to "Code View"
- uni-app项目  
- uni-app project
在 "app-plus" -> "distribute" -> "android" -> "permissions" 下添加需要的权限如下：  
Add the required permissions under "app-plus" -> "distribute" -> "android" -> "permissions" as follows:
```json
  "app-plus": {
    "distribute": {
      "android": {
        "permissions": [   //这里添加需要的Android权限
            "<uses-permission android:name=\"android.permission.REQUEST_INSTALL_PACKAGES\"/>"
        ]
        //...
      },
      //...
  },
  //...
```
- 5+ APP（WAP2APP）项目  
- 5+ APP (WAP2APP) project
在 "plus" -> "distribute" -> "google" -> "permissions" 下添加需要的权限如下：  
Add the required permissions under "plus" -> "distribute" -> "google" -> "permissions" as follows:
```json
  "app-plus": {
    "distribute": {
      "google": {
        "permissions": [   //这里添加需要的Android权限
            "<uses-permission android:name=\"android.permission.REQUEST_INSTALL_PACKAGES\"/>"
        ]
        //...
      },
      //...
  },
  //...
```

### 三方SDK（或模块）需要的权限列表  
### List of permissions required by the third-party SDK (or module)
#### Bluetooth(低功耗蓝牙)  
#### Bluetooth (Bluetooth Low Energy)
```
	"<uses-permission android:name=\"android.permission.ACCESS_COARSE_LOCATION\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_FINE_LOCATION\" />",
	"<uses-permission android:name=\"android.permission.BLUETOOTH_ADMIN\" />",
	"<uses-permission android:name=\"android.permission.BLUETOOTH\" />"
```

#### Contact(通讯录)  
#### Contact
```
	"<uses-permission android:name=\"android.permission.GET_ACCOUNTS\"/>",
	"<uses-permission android:name=\"android.permission.WRITE_CONTACTS\"/>",
	"<uses-permission android:name=\"android.permission.READ_CONTACTS\"/>"
```

#### Fingerprint(指纹识别)  
#### Fingerprint
```
	"<uses-permission android:name=\"android.permission.USE_FINGERPRINT\"/>"
```

#### iBeacon  
```
	"<uses-permission android:name=\"android.permission.ACCESS_COARSE_LOCATION\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_FINE_LOCATION\" />",
	"<uses-permission android:name=\"android.permission.BLUETOOTH_ADMIN\" />",
	"<uses-permission android:name=\"android.permission.BLUETOOTH\" />"
```

#### Maps(定位和地图)  
#### Maps (location and maps)
- 高德地图  
- Gaode map
```
	"<uses-permission android:name=\"android.permission.ACCESS_COARSE_LOCATION\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_FINE_LOCATION\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_WIFI_STATE\" />",
	"<uses-permission android:name=\"android.permission.CHANGE_WIFI_STATE\" />",
	"<uses-permission android:name=\"android.permission.INTERNET\" />",
	"<uses-permission android:name=\"android.permission.READ_PHONE_STATE\" />",
	"<uses-permission android:name=\"android.permission.WRITE_EXTERNAL_STORAGE\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_LOCATION_EXTRA_COMMANDS\" />",
	"<uses-permission android:name=\"android.permission.BLUETOOTH\" />",
	"<uses-permission android:name=\"android.permission.BLUETOOTH_ADMIN\" />"
```
- 百度地图  
- Baidu map  
```
	"<uses-permission android:name=\"android.permission.ACCESS_COARSE_LOCATION\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_FINE_LOCATION\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_WIFI_STATE\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\" />",
	"<uses-permission android:name=\"android.permission.CHANGE_WIFI_STATE\" />",
	"<uses-permission android:name=\"android.permission.READ_PHONE_STATE\" />",
	"<uses-permission android:name=\"android.permission.WRITE_EXTERNAL_STORAGE\" />",
	"<uses-permission android:name=\"android.permission.INTERNET\"/>",
	"<uses-permission android:name=\"android.permission.MOUNT_UNMOUNT_FILESYSTEMS\" />",
	"<uses-permission android:name=\"android.permission.READ_LOGS\" />",
	"<uses-permission android:name=\"android.permission.WRITE_SETTINGS\"/>"
```

#### Messaging(短彩邮件消息)  
#### Messaging
```
	"<uses-permission android:name=\"android.permission.RECEIVE_SMS\"/>",
	"<uses-permission android:name=\"android.permission.SEND_SMS\"/>",
	"<uses-permission android:name=\"android.permission.WRITE_SMS\"/>",
	"<uses-permission android:name=\"android.permission.READ_SMS\"/>"
```

#### OAuth(登录鉴权)  
#### OAuth (login authentication)
- 微信登录  
- WeChat login
```
	"<uses-permission android:name=\"android.permission.MODIFY_AUDIO_SETTINGS\"/>"
```
- QQ登录  
- QQ login
```
	"<uses-permission android:name=\"android.permission.MODIFY_AUDIO_SETTINGS\"/>"
```
- 新浪微博登录  
- Sina Weibo login
无  
none  
- 小米登录  
- Xiaomi login
无  
none  

#### Payment(支付)  
#### Payment
- 支付宝支付  
- pay by AliPay  
```
	<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
	<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
```
- 微信支付  
- WeChat Pay
```
	"<uses-permission android:name=\"android.permission.MODIFY_AUDIO_SETTINGS\"/>"
```

#### Push(消息推送)  
#### Push (message push)
- uniPush  
```
	<!--个推通道必需权限  权限说明：  https://docs.getui.com/getui/question/sdk/ -->
	<!--Required permissions for each push channel Permission description: https://docs.getui.com/getui/question/sdk/ -->
	"<uses-permission android:name=\"android.permission.INTERNET\" />",
	"<uses-permission android:name=\"android.permission.READ_PHONE_STATE\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\" />",
	"<uses-permission android:name=\"android.permission.CHANGE_WIFI_STATE\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_WIFI_STATE\" />",
	"<uses-permission android:name=\"android.permission.RECEIVE_BOOT_COMPLETED\" />",
	"<uses-permission android:name=\"android.permission.WRITE_EXTERNAL_STORAGE\" />",
	"<uses-permission android:name=\"android.permission.VIBRATE\" />",
	"<uses-permission android:name=\"android.permission.GET_TASKS\" />",
	<!--个推通道 可选权限 用于电子围栏  -->
	<!--One push channel optional permission for electronic fence -->
	"<uses-permission android:name=\"android.permission.BLUETOOTH\" />（可选）",
	"<uses-permission android:name=\"android.permission.BLUETOOTH_ADMIN\" />（可选）",
	"<uses-permission android:name=\"android.permission.ACCESS_FINE_LOCATION\" />（可选）",
	"<uses-permission android:name=\"android.permission.ACCESS_COARSE_LOCATION\" />（可选）",
	<!--厂商通道必需权限  小米-->
	<!--Manufacturer channel required permissions Xiaomi -->
	"<uses-permission android:name=\"android.permission.BROADCAST_PACKAGE_ADDED\" />",
	"<uses-permission android:name=\"android.permission.BROADCAST_PACKAGE_CHANGED\" />",
	"<uses-permission android:name=\"android.permission.BROADCAST_PACKAGE_INSTALL\" />",
	"<uses-permission android:name=\"android.permission.BROADCAST_PACKAGE_REPLACED\" />",
	"<uses-permission android:name=\"android.permission.RESTART_PACKAGES\" />",
	"<uses-permission android:name=\"android.permission.CHANGE_NETWORK_STATE\" />",
	<!--厂商通道必需权限  魅族-->
	<!--Manufacturer channel required permissions Meizu-->
	"<uses-permission android:name=\"android.permission.WRITE_SETTINGS\" />",
	<!--厂商通道必需权限 华为-->
	<!--Vendor channel required permissions Huawei -->
	"<uses-permission android:name=\"android.permission.REQUEST_INSTALL_PACKAGES\" />"
```


**个推推送与uniPush一致**
**A push push is the same as uniPush**

#### Share(分享)  
#### Share
- 微信分享  
- WeChat sharing
```
	"<uses-permission android:name=\"android.permission.MODIFY_AUDIO_SETTINGS\"/>"
```
- QQ分享  
- QQ sharing
```
	"<uses-permission android:name=\"android.permission.MODIFY_AUDIO_SETTINGS\"/>"
```
- 新浪微博分享  
- Share on Sina Weibo
```
	"<uses-permission android:name=\"android.permission.CHANGE_WIFI_STATE\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_WIFI_STATE\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\" />",
	"<uses-permission android:name=\"android.permission.INTERNET\" />",
	"<uses-permission android:name=\"android.permission.WRITE_EXTERNAL_STORAGE\" />"
```

#### Speech(语音识别)  
#### Speech (speech recognition)
- 百度语音识别  
- Baidu speech recognition
```
	"<uses-permission android:name=\"android.permission.RECORD_AUDIO\" />",
	"<uses-permission android:name=\"android.permission.INTERNET\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_WIFI_STATE\" />",
	"<uses-permission android:name=\"android.permission.CHANGE_NETWORK_STATE\" />",
	"<uses-permission android:name=\"android.permission.READ_PHONE_STATE\" />",
	"<uses-permission  android:name=\"android.permission.WRITE_EXTERNAL_STORAGE\" />"
```
- 讯飞语音识别  
- iFLYTEK voice recognition
```
	"<uses-permission android:name=\"android.permission.RECORD_AUDIO\" />",
	"<uses-permission android:name=\"android.permission.INTERNET\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_WIFI_STATE\" />",
	"<uses-permission android:name=\"android.permission.CHANGE_NETWORK_STATE\" />",
	"<uses-permission android:name=\"android.permission.READ_PHONE_STATE\" />",
	"<uses-permission android:name=\"android.permission.WRITE_EXTERNAL_STORAGE\" />"
```

#### Static(统计)  
#### Static (statistics)
- 友盟统计  
- Umeng statistics
```
	"<uses-permission android:name=\"android.permission.READ_LOGS\" />",
	"<uses-permission android:name=\"android.permission.RECEIVE_BOOT_COMPLETED\" />",
	"<uses-permission android:name=\"android.permission.RECEIVE_USER_PRESENT\" />"
```

#### uni-AD  
- 今日头条穿山甲广告联盟  
- Today's Toutiao Pangolin Advertising Alliance
```
	"<uses-permission android:name=\"android.permission.REQUEST_INSTALL_PACKAGES\"/>",
	"<uses-permission android:name=\"android.permission.READ_PHONE_STATE\" />",
	"<uses-permission android:name=\"android.permission.GET_TASKS\"/>"
```

- 腾讯优量汇广告联盟  
- Tencent Youlianghui Advertising Alliance
```
      "<uses-permission android:name=\"android.permission.REQUEST_INSTALL_PACKAGES\"/>",
      "<uses-permission android:name=\"android.permission.READ_PHONE_STATE\" />"
```

- 快手广告联盟  
- Kuaishou Advertising Alliance
```
      "<uses-permission android:name=\"android.permission.REQUEST_INSTALL_PACKAGES\"/>",
      "<uses-permission android:name=\"android.permission.READ_PHONE_STATE\" />",
      "<uses-permission android:name=\"android.permission.ACCESS_WIFI_STATE\" />",
      "<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\" />"
```

### 相关参考  
### Related References
- Android官方权限说明，参考：[https://developer.android.google.cn/guide/topics/permissions/overview](https://developer.android.google.cn/guide/topics/permissions/overview?hl=zh_cn)  
- Android official permission description, refer to: [https://developer.android.google.cn/guide/topics/permissions/overview](https://developer.android.google.cn/guide/topics/permissions/overview? hl=en_cn)
- Android官方权限常量文档，参考：[https://developer.android.google.cn/reference/android/Manifest.permission](https://developer.android.google.cn/reference/android/Manifest.permission?hl=zh_cn)  
- Android official permission constant document, reference: [https://developer.android.google.cn/reference/android/Manifest.permission](https://developer.android.google.cn/reference/android/Manifest.permission ?hl=en_cn)
