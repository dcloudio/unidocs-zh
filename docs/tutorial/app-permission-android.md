根据工业和信息化部关于开展APP侵害用户权益专项整治要求，应用的隐私政策中需详细描述使用权限的用途。
为了不避免应用使用过多权限，HBuilderX2.6.3+版本对应用默认要求的权限进行简化，对第三方SDK需要的权限提供方法根据实际需求进行配置。

### 默认使用的权限
提交云端打包后会自动添加以下权限：
```
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
- android.permission.INTERNET
  使用网络权限，应用基础权限
- android.permission.READ_EXTERNAL_STORAGE 和 android.permission.WRITE_EXTERNAL_STORAGE
  读写SD卡权限，系统授权提示未“访问设备上的照片、媒体内容和文件”，可以参考这里配置应用启动时[申请读写手机存储策略](https://ask.dcloud.net.cn/article/36549#externalstorage)
- android.permission.READ_PHONE_STATE、ACCESS_NETWORK_STATE、ACCESS_WIFI_STATE
  读取设备标识使用，用于[uni统计服务](https://tongji.dcloud.net.cn/)，可以参考这里配置应用启动时[申请访问设备信息权限策略](https://ask.dcloud.net.cn/article/36549#phonestate)
- android.permission.INSTALL_PACKAGES、android.permission.REQUEST_INSTALL_PACKAGES
安装apk需要的权限，应用中使用[plus.runtime.install](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.install)升级应用则需要此权限
**注意：HBuilder2.6.3+开始Goog Play渠道默认不再添加此权限，因为GooglePlay审核规则禁止应用下载apk更新，必须通过上传GooglePlay审核更新**

特定权限说明：
- com.asus.msa.SupplementaryDID.ACCESS
  获取设备标识信息oaid在华硕设备上需要用到的权限
- com.huawei.android.launcher.permission.CHANGE_BADGE
  设置应用角标功能在华为设备上需要用到的权限
- com.android.launcher.permission.INSTALL_SHORTCUT
创建桌面快捷方式权限，应用中使用[plus.navigator.createShortcut](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.createShortcut)创建桌面快捷方式则需要此权限。
- com.android.launcher.permission.UNINSTALL_SHORTCUT
删除桌面快捷方式权限，应用中使用[native.js](https://www.html5plus.org/doc/zh_cn/android.html)删除桌面快捷方式则需要此权限


<a id='sdkpermission' />

### Android自动添加三方SDK（或模块）需要的权限
提交云端打包时，勾选使用三方SDK相关的功能模块时，默认会自动添加三方SDK需要的所有权限。
为了保证三方SDK（或模块）的功能完整，默认会添加可能需要的所有权限，如果应用只用到三方SDK提供的部分功能，不希望自动添加三方SDK需要的所有权限，可以去掉勾选“Android自动添加第三方SDK需要的权限”。
**为了向下兼容，云端打包默认会添加“Geolocation(定位)” -> “系统定位”模块，因此会默认添加定位权限，如果不需要定位权限，请在App权限配置界面去掉勾选“Android自定添加第三方SDK需要的权限”**  

**注意：去掉自动添加第三方SDK需要的权限后，请务必根据需要在“Android权限配置”中勾选三方SDK必需的权限，三方SDK需要的权限详情参考后面《三方SDK（或模块）需要的权限列表》章节**
保存后提交云端打包生效。

#### 可视化界面配置
打开项目的manifest.json文件，在“App权限配置”项中去掉“Android自动添加第三方SDK需要的权限”
[attach]76744[/attach]

#### 代码视图配置
打开项目的manifest.json文件，切换到“代码视图”。
- uni-app项目
在 "app-plus" -> "distribute" -> "android" 下添加 autoSdkPermissions 如下：
```
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
在 "plus" -> "distribute" -> "google" 下添加 autoSdkPermissions 如下：
```
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
打开项目的manifest.json文件，在“（App）模块权限配置”页的“Android权限配置”项下根据需求勾选需要的权限：
[attach]76748[/attach]

**如果没有列出需要的权限，可按以下方法手动添加**
在manifest.json页面，切换到“代码视图”
- uni-app项目
在 "app-plus" -> "distribute" -> "android" -> "permissions" 下添加需要的权限如下：
```
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
在 "plus" -> "distribute" -> "google" -> "permissions" 下添加需要的权限如下：
```
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
#### Bluetooth(低功耗蓝牙)  
```
	"<uses-permission android:name=\"android.permission.ACCESS_COARSE_LOCATION\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_FINE_LOCATION\" />",
	"<uses-permission android:name=\"android.permission.BLUETOOTH_ADMIN\" />",
	"<uses-permission android:name=\"android.permission.BLUETOOTH\" />"
```

#### Contact(通讯录)  
```
	"<uses-permission android:name=\"android.permission.GET_ACCOUNTS\"/>",
	"<uses-permission android:name=\"android.permission.WRITE_CONTACTS\"/>",
	"<uses-permission android:name=\"android.permission.READ_CONTACTS\"/>"
```

#### Fingerprint(指纹识别)  
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
- 高德地图  
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
```
	"<uses-permission android:name=\"android.permission.RECEIVE_SMS\"/>",
	"<uses-permission android:name=\"android.permission.SEND_SMS\"/>",
	"<uses-permission android:name=\"android.permission.WRITE_SMS\"/>",
	"<uses-permission android:name=\"android.permission.READ_SMS\"/>"
```

#### OAuth(登录鉴权)  
- 微信登录
```
	"<uses-permission android:name=\"android.permission.MODIFY_AUDIO_SETTINGS\"/>"
```
- QQ登录
```
	"<uses-permission android:name=\"android.permission.MODIFY_AUDIO_SETTINGS\"/>"
```
- 新浪微博登录
无
- 小米登录
无

#### Payment(支付)  
- 支付宝支付
```
	<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
	<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
```
- 微信支付
```
	"<uses-permission android:name=\"android.permission.MODIFY_AUDIO_SETTINGS\"/>"
```

#### Push(消息推送)  
- uniPush  
```
	<!--个推通道必需权限  权限说明：  https://docs.getui.com/getui/question/sdk/ -->
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
	"<uses-permission android:name=\"android.permission.BLUETOOTH\" />（可选）",
	"<uses-permission android:name=\"android.permission.BLUETOOTH_ADMIN\" />（可选）",
	"<uses-permission android:name=\"android.permission.ACCESS_FINE_LOCATION\" />（可选）",
	"<uses-permission android:name=\"android.permission.ACCESS_COARSE_LOCATION\" />（可选）",
	<!--厂商通道必需权限  小米-->
	"<uses-permission android:name=\"android.permission.BROADCAST_PACKAGE_ADDED\" />",
	"<uses-permission android:name=\"android.permission.BROADCAST_PACKAGE_CHANGED\" />",
	"<uses-permission android:name=\"android.permission.BROADCAST_PACKAGE_INSTALL\" />",
	"<uses-permission android:name=\"android.permission.BROADCAST_PACKAGE_REPLACED\" />",
	"<uses-permission android:name=\"android.permission.RESTART_PACKAGES\" />",
	"<uses-permission android:name=\"android.permission.CHANGE_NETWORK_STATE\" />",
	<!--厂商通道必需权限  魅族-->
	"<uses-permission android:name=\"android.permission.WRITE_SETTINGS\" />",
	<!--厂商通道必需权限 华为-->
	"<uses-permission android:name=\"android.permission.REQUEST_INSTALL_PACKAGES\" />"
```


**个推推送与uniPush一致**

#### Share(分享)  
- 微信分享  
```
	"<uses-permission android:name=\"android.permission.MODIFY_AUDIO_SETTINGS\"/>"
```
- QQ分享  
```
	"<uses-permission android:name=\"android.permission.MODIFY_AUDIO_SETTINGS\"/>"
```
- 新浪微博分享  
```
	"<uses-permission android:name=\"android.permission.CHANGE_WIFI_STATE\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_WIFI_STATE\" />",
	"<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\" />",
	"<uses-permission android:name=\"android.permission.INTERNET\" />",
	"<uses-permission android:name=\"android.permission.WRITE_EXTERNAL_STORAGE\" />"
```

#### Speech(语音识别)  
- 百度语音识别  
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
- 友盟统计  
```
	"<uses-permission android:name=\"android.permission.READ_LOGS\" />",
	"<uses-permission android:name=\"android.permission.RECEIVE_BOOT_COMPLETED\" />",
	"<uses-permission android:name=\"android.permission.RECEIVE_USER_PRESENT\" />"
```

#### uni-AD  
- 今日头条穿山甲广告联盟  
```
	"<uses-permission android:name=\"android.permission.REQUEST_INSTALL_PACKAGES\"/>",
	"<uses-permission android:name=\"android.permission.READ_PHONE_STATE\" />",
	"<uses-permission android:name=\"android.permission.GET_TASKS\"/>"
```

- 腾讯优量汇广告联盟  
```
      "<uses-permission android:name=\"android.permission.REQUEST_INSTALL_PACKAGES\"/>",
      "<uses-permission android:name=\"android.permission.READ_PHONE_STATE\" />"
```

- 快手广告联盟  
```
      "<uses-permission android:name=\"android.permission.REQUEST_INSTALL_PACKAGES\"/>",
      "<uses-permission android:name=\"android.permission.READ_PHONE_STATE\" />",
      "<uses-permission android:name=\"android.permission.ACCESS_WIFI_STATE\" />",
      "<uses-permission android:name=\"android.permission.ACCESS_NETWORK_STATE\" />"
```

### 相关参考  
- Android官方权限说明，参考：[https://developer.android.google.cn/guide/topics/permissions/overview](https://developer.android.google.cn/guide/topics/permissions/overview?hl=zh_cn)
- Android官方权限常量文档，参考：[https://developer.android.google.cn/reference/android/Manifest.permission](https://developer.android.google.cn/reference/android/Manifest.permission?hl=zh_cn)
