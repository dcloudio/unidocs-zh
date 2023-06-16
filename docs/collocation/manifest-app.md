### App Android@android  
App-Android平台云端打包相关配置  

|属性|类型|描述|  
|:-|:-|:-|
|packagename|String|Android平台云端打包的包名|
|keystore|String|Android平台云端打包使用的签名证书文件路径|
|password|String|Android平台云端打包使用的签名证书的密码，要求证书存储密码和证书密码相同|
|aliasname|String|Android平台云端打包使用的证书别名|
|schemes|String|Android平台App注册的scheme，多个scheme使用“,”分割，详情参考：[Android平台设置UrlSchemes](https://uniapp.dcloud.io/tutorial/app-android-schemes)|
|abiFilters|Array|Android平台App支持的cpu类型，详情参考：[Android平台设置CPU类型](https://uniapp.dcloud.io/tutorial/app-android-abifilters)|
|permissions|Array|Android平台App使用的权限|
|custompermissions|Boolean|是否自定义Android权限配置|
|permissionExternalStorage|Object|Android平台应用启动时申请读写手机存储权限策略配置，详情参考：[Android平台应用启动时读写手机存储权限策略](https://ask.dcloud.net.cn/article/36549)，支持request、prompt属性|
|permissionPhoneState|Object|Android平台应用启动时申请读取设备信息权限配置，详情参考：[Android平台应用启动时访问设备信息(如IMEI)权限策略](https://ask.dcloud.net.cn/article/36549)，支持request、prompt属性|
|minSdkVersion|String|Android平台最低支持版本，详情参考：[Android平台设置minSdkVersion](https://uniapp.dcloud.io/tutorial/app-android-minsdkversion)|
|targetSdkVersion|String|Android平台目标版本，详情参考：[Android平台设置targetSdkVersion](https://uniapp.dcloud.io/tutorial/app-android-targetsdkversion)|
|packagingOptions|Array|Android平台云端打包时build.gradle的packagingOptions配置项，示例："packagingOptions": ["doNotStrip '*/armeabi-v7a/*.so'","merge '**/LICENSE.txt'"]|
|jsEngine|String|uni-app使用的JS引擎，可取值v8、jsc，**将废弃，后续不再支持jsc引擎**|
|debuggable|Boolean|是否开启Android调试开关|
|locale|String|应用的默认语言|
|forceDarkAllowed|Boolean|是否强制允许暗黑模式|
|resizeableActivity|Boolean|是否支持分屏调整窗口大小|
|hasTaskAffinity|Boolean|是否设置android：taskAffinity|
|buildFeatures|Object|Android平台云端打包时build.gradle的buildFeatures配置项，[详见](/collocation/manifest?id=buildFeatures)|
|pushRegisterMode|String|延迟初始化UniPush的配置，当配置此项值为`manual`后UniPush不会初始化，直到首次调用[getPushClientId](https://uniapp.dcloud.net.cn/api/plugins/push.html#getpushclientid)、getClientInfo、getClientInfoAsync时才会初始化，注:一旦调用获取cid的方法后，下次App启动就不再延迟初始化UniPush了。(manual为延迟，其他值表示不延迟。)|
|enableOAID|Boolean|是否支持获取OAID，默认值为true，[详见](/collocation/manifest?id=enableOAID)|

#### buildFeatures@buildFeatures  
Android平台云端打包时build.gradle的buildFeatures配置项，支持的属性参考：[Android官方文档](https://developer.android.google.cn/reference/tools/gradle-api/7.1/com/android/build/api/dsl/BuildFeatures?hl=en)，如下示例源码：  
```json  
"buildFeatures": {
    "dataBinding": true,  //开启dataBinding
    "viewBinding": true   //开启viewBinding
}
```

#### enableOAID@enableOAID
获取[OAID](https://www.html5plus.org/doc/zh_cn/device.html#plus.device.getOAID)需要使用[移动智能设备标识公共服务平台](http://www.msa-alliance.cn/col.jsp?id=120)提供的统一SDK（以下简称OAID SDK），由于OAID SDK从1.0.26版本开始添加了授权证书校验机制（需绑定应用包名），需要向“移动智能设备标识公共服务平台”申请授权证书并配置到应用中。目前HBuilderX中暂时还不支持授权证书的配置，使用的是无需授权证书的旧版本OAID SDK。  
为了避免旧版本OAID SDK在新设备可能出现的兼容性问题，从HBuilderX3.8.5开始在manifest.json的android节点下可设置enableOAID为false，配置后提交云端打包将不再包OAID SDK：
```
"enableOAID": false
```
后续将会提供[uts插件](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)适配最新版本OAID SDK。  

已知旧版本OAID SDK存在以下问题：  
- 在部分三星设备获取OAID会引起应用崩溃  
- 部分安全平台检测可能会报存在窃取用户隐私等风险的问题  


### App iOS@ios
iOS平台云端打包相关配置

|属性|类型|描述|  
|:-|:-|:-|
|appid|String|iOS平台云端打包使用的Bundle ID|
|mobileprovision|String|iOS平台云端打包使用的profile文件路径|
|p12|String|iOS平台云端打包使用的证书文件路径|
|password|String|iOS打包使用的证书密码|
|devices|String|iOS支持的设备类型，可取值iphone（仅支持iPhone设备）、ipad（仅支持iPad设备）、universal（同时支持iPhone和iPad设备）|
|urlschemewhitelist|String|应用访问白名单列表，多个白名单使用“,”分割，详情参考：[iOS设置应用访问白名单](https://uniapp.dcloud.io/tutorial/app-ios-schemewhitelist)|
|urltypes|String|Android平台App注册的scheme，多个scheme使用“,”分割，详情参考：[iOS设置应用UrlSchemes](https://uniapp.dcloud.io/tutorial/app-ios-schemes)|
|UIBackgroundModes|Array|应用后台运行模式，详情参考：[iOS设置应用后台运行能力](https://uniapp.dcloud.io/tutorial/app-ios-uibackgroundmodes)|
|frameworks|Array|依赖的系统库，**已废弃，推荐使用uni原生插件扩展使用系统依赖库**|
|deploymentTarget|String|iOS支持的最低版本|
|privacyDescription|Object|iOS隐私信息访问的许可描述|
|idfa|Boolean|是否使用广告标识|
|capabilities|Object|应用的能力配置（Capabilities）|
|CFBundleName|String|应用的CFBundleName名称，默认值为HBuilder|
|validArchitectures|Array|编译时支持的CPU指令，可取值arm64、arm64e、armv7、armv7s、x86_64|
|pushRegisterMode|String|使用“Push(消息推送)”模块时申请系统推送权限模式，设置为manual表示调用push相关API时申请，设置为其它值表示应用启动时自动申请|
|privacyRegisterMode|String|设置为manual表示同意隐私政策后再获取相关隐私信息，设置为其它值表示应用启动时自动获取[详见](/collocation/manifest?id=privacyRegisterMode)|


#### privacyRegisterMode@privacyRegisterMode
为了统计应用的崩溃信息，应用在启动时需要获取idfv，虽然不影响苹果审核但是可能被部分合规检测机构判定为不合规。需要通过隐私合规检测的应用可以将字段配置为manual，并且在用户点击同意隐私政策的方法里执行`plus.runtime.argeePrivacy()`即可。  
注意：配置后如未调用`plus.runtime.argeePrivacy()`会导致崩溃统计失效。





### 完整 manifest.json@full-manifest

```javascript
{
    "appid": "__UNI__XXXXXX，创建应用时云端分配的，不要修改。",
    "name": "应用名称，如uni-app",
    "description": "应用描述",
    "versionName": "1.0.0",
    "versionCode": "100",
    "uniStatistics": {
        "enable": false
    },
    "app-plus": {
        "allowsInlineMediaPlayback": true,  //可选，Boolean类型, 是否允许 h5 中视频非全屏播放，3.8.5版本开始默认值为 true （仅iOS生效）  
        "mediaPlaybackRequiresUserAction": false, //可选，Boolean类型,可通过此属性配置 h5中的音视频是否可通过API自动播放，注意当设置为 false 时允许API控制自动播放，3.8.5版本开始默认值为 false（仅iOS生效 3.0.1 + 版本支持）
        "nvueCompiler": "weex",         //可选，字符串类型，nvue页面编译模式，可取值uni-app、weex，参考：https://ask.dcloud.net.cn/article/36074
        "nvueStyleCompiler": "weex",    //可选，字符串类型，nvue页面样式编译模式，可取值uni-app、weex，参考：https://ask.dcloud.net.cn/article/38751
        "renderer": "native",           //可选，字符串类型，可不加载基于 webview 的运行框架，可取值native
        "compilerVersion": 2,           //可选，数字类型，编译器版本，可取值2、3，参考：https://ask.dcloud.net.cn/article/36599
        "nvueLaunchMode": "normal",     //可选，字符串类型，nvue首页启动模式，compilerVersion值为3时生效，可取值normal、fast，参考：https://ask.dcloud.net.cn/article/36749
        "nvue": {                       //可选，JSON对象，nvue页面相关配置
            "flex-direction": "row"             //可选，字符串类型，nvue页面的flex-direction默认值，可取值row、row-reverse、column、column-reverse
        },
        "optimization": {               //可选，JSON对象，分包配置
            "subPackages": true                 //可选，Boolean类型，是否开启分包优化，参考：https://uniapp.dcloud.io/collocation/pages.html#subpackages
        },
        "uniStatistics": {              //可选，JSON对象，uni统计配置
            "enable": true,                     //可选，Boolean类型，是否开启uni统计
        },
        "screenOrientation": [          //可选，字符串数组类型，应用支持的横竖屏
            "portrait-primary",                 //可选，字符串类型，支持竖屏
            "portrait-secondary",               //可选，字符串类型，支持反向竖屏
            "landscape-primary",                //可选，字符串类型，支持横屏
            "landscape-secondary"               //可选，字符串类型，支持反向横屏
        ],
        "splashscreen": {               //可选，JSON对象，splash界面配置
            "alwaysShowBeforeRender": true,     //可选，Boolean类型，是否等待首页渲染完毕后再关闭启动界面
            "autoclose": true,                  //可选，Boolean类型，是否自动关闭启动界面
            "waiting": true,                    //可选，Boolean类型，是否在程序启动界面显示等待雪花
            "event": "loaded",                  //可选，字符串类型，可取值titleUpdate、rendering、loaded，uni-app项目已废弃
            "target": "defalt",                 //可选，字符串类型，可取值default、second，uni-app项目已废弃
            "dealy": 0,                         //可选，数字类型，延迟自动关闭启动时间，单位为毫秒，uni-app项目已废弃
            "ads": {                            //可选，JSON对象，开屏广告配置
                "backaground": "#RRGGBB",               //可选，字符串类型，格式为#RRGGBB，开屏广告背景颜色
                "image": ""                             //可选，字符串类型，底部图片地址，相对应用资源目录路径
            },
            "androidTranslucent": false         //可选，Boolean类型，使用“自定义启动图”启动界面时是否显示透明过渡界面，可解决点击桌面图标延时启动应用的效果
        },
        "modules": {                    //可选，JSON对象，使用的模块
            "Bluetooth": {                      //可选，JSON对象，Bluetooth(低功耗蓝牙)
                "description": "低功耗蓝牙"
            },
            "Contacts": {                       //可选，JSON对象，Contact(通讯录)
                "description": "通讯录"
            },
            "FaceID": {                         //可选，JSON对象，FaceID(人脸识别)，仅iOS支持
                "description": "人脸识别"
            },
            "Fingerprint": {                    //可选，JSON对象，Fingerprint(指纹识别)
                "description": "指纹识别"
            },
            "Geolocation": {                    //可选，JSON对象，Geolocation(定位)
                "description": "定位"
            },
            "iBeacon": {                        //可选，JSON对象，iBeacon
                "description": "iBeacon"
            },
            "LivePusher": {                     //可选，JSON对象，LivePusher(直播推流)
                "description": "直播推流"
            },
            "Maps": {                           //可选，JSON对象，Maps(地图)
                "description": "地图"
            },
            "Messaging": {                      //可选，JSON对象，Messaging(短彩邮件消息)
                "description": "短彩邮件消息"
            },
            "OAuth": {                          //可选，JSON对象，OAuth(登录鉴权)
                "description": "登录鉴权"
            },
            "Payment": {                        //可选，JSON对象，Payment(支付)
                "description": "iBeacon"
            },
            "Push": {                           //可选，JSON对象，Push(消息推送)
                "description": "iBeacon"
            },
            "Share": {                          //可选，JSON对象，Share(分享)
                "description": "iBeacon"
            },
            "Speech": {                         //可选，JSON对象，Speech(语音输入)
                "description": "iBeacon"
            },
            "Statistic": {                      //可选，JSON对象，Statistic(统计)
                "description": "iBeacon"
            },
            "SQLite": {                         //可选，JSON对象，SQLite(统计)
                "description": "iBeacon"
            },
            "VideoPlayer": {                    //可选，JSON对象，VideoPlayer(视频播放)
                "description": "iBeacon"
            },
            "Webview-x5": {                     //可选，JSON对象，Android X5 Webview(腾讯TBS)，仅Android支持
                "description": "iBeacon"
            },
            "UIWebview": {                      //可选，JSON对象，UIWebview，仅iOS支持
                "description": "iBeacon"
            }
        },
        "webView": { // 3.5.0 + 当系统webview低于指定版本时，会弹出提示。或者下载x5内核后继续启动，仅Android支持
          "minUserAgentVersion": "95.0.4638.75", // 最小webview版本
          "x5": { // 此属性需要勾选 Android X5 Webview 模块，详细参见下面的说明
            "timeOut": 3000, // 超时时间
            "showTipsWithoutWifi": true, // 是否在非WiFi网络环境时，显示用户确认下载x5内核的弹窗。
            "allowDownloadWithoutWiFi": false // 是否允许用户在非WiFi网络时进行x5内核的下载。（如果为true，就不会显示用户确认的弹窗。）
          }
        },
		"checkPermissionDenied": false, // 是否校验已拒绝权限 如果拒绝则不会再申请 默认false 不校验已拒绝权限
        "distribute": {      //必选，JSON对象，云端打包配置
            "android": {            //可选，JSON对象，Android平台云端打包配置
                "packagename": "",          //必填，字符串类型，Android包名
                "keystore": "",             //必填，字符串类型，Android签名证书文件路径
                "password": "",             //必填，字符串类型，Android签名证书文件的密码
                "aliasname": "",            //必填，字符串类型，Android签名证书别名
                "schemes": "",              //可选，字符串类型，参考：https://uniapp.dcloud.io/tutorial/app-android-schemes
                "abiFilters": [             //可选，字符串数组类型，参考：https://uniapp.dcloud.io/tutorial/app-android-abifilters
                    "armeabi-v7a",
                    "arm64-v8a",
                    "x86",
                    "x86_64"
                ],
                "permissions": [                //可选，字符串数组类型，Android权限配置
                    "<uses-feature android:name=\"android.hardware.camera\"/>"
                ],
                "custompermissions": false,     //可选，Boolean类型，是否自定义Android权限配置
                "permissionExternalStorage": {  //可选，JSON对象，Android平台应用启动时申请读写手机存储权限策略
                    "request": "always",                //必填，字符串类型，申请读写手机存储权限策略，可取值none、once、always
                    "prompt": ""                        //可选，字符串类型，当request设置为always值用户拒绝时弹出提示框上的内容
                },
                "permissionPhoneState": {       //可选，JSON对象，Android平台应用启动时申请读取设备信息权限配置
                    "request": "always",                //必填，字符串类型，申请读取设备信息权限策略，可取值none、once、always
                    "prompt": ""                        //可选，字符串类型，当request设置为always值用户拒绝时弹出提示框上的内容
                },
                "minSdkVersion": 21,            //可选，数字类型，Android平台最低支持版本，参考：https://uniapp.dcloud.io/tutorial/app-android-minsdkversion
                "targetSdkVersion": 30,         //可选，数字类型，Android平台目标版本，参考：https://uniapp.dcloud.io/tutorial/app-android-targetsdkversion
                "packagingOptions": [           //可选，字符串数组类型，Android平台云端打包时build.gradle的packagingOptions配置项
                    "doNotStrip '*/armeabi-v7a/*.so'",
                    "merge '**/LICENSE.txt'"
                ],
                "jsEngine": "v8",               //可选，字符串类型，uni-app使用的JS引擎，可取值v8、jsc
                "debuggable": false,            //可选，Boolean类型，是否开启Android调试开关
                "locale": "default",            //可选，应用的语言
                "forceDarkAllowed": false,      //可选，Boolean类型，是否强制允许暗黑模式
                "resizeableActivity": false,    //可选，Boolean类型，是否支持分屏调整窗口大小
                "hasTaskAffinity": false,       //可选，Boolean类型，是否设置android：taskAffinity
                "buildFeatures": {              //（HBuilderX3.5.0+版本支持）可选，JSON对象，Android平台云端打包时build.gradle的buildFeatures配置项  
                    "dataBinding": false,           //可选，Boolean类型，是否设置dataBinding
                    "viewBinding": false            //可选，Boolean类型，是否设置viewBinding
                }
            },
            "ios": {                //可选，JSON对象，iOS平台云端打包配置
                "appid": "",                    //必填，字符串类型，iOS平台Bundle ID
                "mobileprovision": "",          //必填，字符串类型，iOS打包使用的profile文件路径
                "p12": "",                      //必填，字符串类型，iOS打包使用的证书文件路径
                "password": "",                 //必填，字符串类型，iOS打包使用的证书密码
                "devices": "iphone",            //必填，字符串类型，iOS支持的设备类型，可取值iphone、ipad、universal
                "urlschemewhitelist": "baidumap",//可选，字符串类型，应用访问白名单列表，参考：https://uniapp.dcloud.io/tutorial/app-ios-schemewhitelist
                "urltypes": "",                 //可选，字符串类型，参考：https://uniapp.dcloud.io/tutorial/app-ios-schemes
                "UIBackgroundModes": "audio",   //可选，字符串类型，应用后台运行模式，参考：https://uniapp.dcloud.io/tutorial/app-ios-uibackgroundmodes
                "frameworks": [                 //可选，字符串数组类型，依赖的系统库，已废弃，推荐使用uni原生插件扩展使用系统依赖库
                    "CoreLocation.framework"
                ],
                "deploymentTarget": "10.0",     //可选，字符串类型，iOS支持的最低版本
                "privacyDescription": {         //可选，JSON对象，iOS隐私信息访问的许可描述
                    "NSPhotoLibraryUsageDescription": "",                       //可选，字符串类型，系统相册读取权限描述
                    "NSPhotoLibraryAddUsageDescription": "",                    //可选，字符串类型，系统相册写入权限描述
                    "NSCameraUsageDescription": "",                             //可选，字符串类型，摄像头使用权限描述
                    "NSMicrophoneUsageDescription": "",                         //可选，字符串类型，麦克风使用权限描述
                    "NSLocationWhenInUseUsageDescription": "",                  //可选，字符串类型，运行期访问位置权限描述
                    "NSLocationAlwaysUsageDescription": "",                     //可选，字符串类型，后台运行访问位置权限描述
                    "NSLocationAlwaysAndWhenInUseUsageDescription": "",         //可选，字符串类型，运行期后后台访问位置权限描述
                    "NSCalendarsUsageDescription": "",                          //可选，字符串类型，使用日历权限描述
                    "NSContactsUsageDescription": "",                           //可选，字符串类型，使用通讯录权限描述
                    "NSBluetoothPeripheralUsageDescription": "",                //可选，字符串类型，使用蓝牙权限描述
                    "NSBluetoothAlwaysUsageDescription": "",                    //可选，字符串类型，后台使用蓝牙权限描述
                    "NSSpeechRecognitionUsageDescription": "",                  //可选，字符串类型，系统语音识别权限描述
                    "NSRemindersUsageDescription": "",                          //可选，字符串类型，系统提醒事项权限描述
                    "NSMotionUsageDescription": "",                             //可选，字符串类型，使用运动与健康权限描述
                    "NSHealthUpdateUsageDescription": "",                       //可选，字符串类型，使用健康更新权限描述
                    "NSHealthShareUsageDescription": "",                        //可选，字符串类型，使用健康分享权限描述
                    "NSAppleMusicUsageDescription": "",                         //可选，字符串类型，使用媒体资料库权限描述
                    "NFCReaderUsageDescription": "",                            //可选，字符串类型，使用NFC权限描述
                    "NSHealthClinicalHealthRecordsShareUsageDescription": "",   //可选，字符串类型，访问临床记录权限描述
                    "NSHomeKitUsageDescription": "",                            //可选，字符串类型，访问HomeKit权限描述
                    "NSSiriUsageDescription": "",                               //可选，字符串类型，访问Siri权限描述
                    "NSFaceIDUsageDescription": "",                             //可选，字符串类型，使用FaceID权限描述
                    "NSLocalNetworkUsageDescription": "",                       //可选，字符串类型，访问本地网络权限描述
                    "NSUserTrackingUsageDescription": ""                        //可选，字符串类型，跟踪用户活动权限描述
                },
                "idfa": true,                   //可选，Boolean类型，是否使用广告标识
                "capabilities": {               //可选，JSON对象，应用的能力配置（Capabilities）
                },
                "CFBundleName": "HBuilder",     //可选，字符串类型，CFBundleName名称
                "validArchitectures": [         //可选，字符串数组类型，编译时支持的CPU指令，可取值arm64、arm64e、armv7、armv7s、x86_64
                    "arm64"
                ],
                "pushRegisterMode": "manual",    //可选，使用“Push(消息推送)”模块时申请系统推送权限模式，manual表示调用push相关API时申请，其它值表示应用启动时自动申请
                "privacyRegisterMode": "manual"    //可选，仅iOS有效，设置为manual表示用户同意隐私政策后才获取idfv，设置为其它值表示应用启动时自动获取
            },
            "sdkConfigs": {         //可选，JSON对象，三方SDK相关配置
                "geolocation": {        //可选，JSON对象，Geolocation(定位)模块三方SDK配置
                    "system": {                     //可选，JSON对象，使用系统定位
                        "__platform__" : [ "ios", "android" ]   //可选，字符串数组类型，支持的平台
                    },
                    "amap": {                           //可选，JSON对象，使用高德定位SDK配置
                        "__platform__" : ["ios", "android"],    //可选，字符串数组类型，支持的平台
                        "appkey_ios": "",                       //必填，字符串类型，iOS平台高德定位appkey
                        "appkey_android": ""                    //必填，字符串类型，Android平台高德定位appkey
                    },
                    "baidu": {                         //可选，JSON对象，使用百度定位SDK配置
                        "__platform__" : [ "ios", "android" ],  //可选，字符串数组类型，支持的平台
                        "appkey_ios": "",                       //必填，字符串类型，iOS平台百度定位appkey
                        "appkey_android": ""                    //必填，字符串类型，Android平台百度定位appkey
                    }
                },
                "maps" : {              //可选，JSON对象，Maps(地图)模块三方SDK配置
                    "amap": {                       //可选，JSON对象，使用高德地图SDK配置
                        "appkey_ios": "",                       //必填，字符串类型，iOS平台高德地图appkey
                        "appkey_android": ""                    //必填，字符串类型，Android平台高德地图appkey
                    },
                    "baidu": {                      //可选，JSON对象，使用百度地图SDK配置
                        "appkey_ios": "",                       //必填，字符串类型，iOS平台百度地图appkey
                        "appkey_android": ""                    //必填，字符串类型，Android平台百度地图appkey
                    },
                    "google": {                     //可选，JSON对象，使用Google地图SDK配置
                        "APIKey_ios": "",                       //必填，字符串类型，iOS平台Google地图APIKey
                        "APIKey_android": ""                    //必填，字符串类型，Android平台Google地图APIKey
                    }
                },
                "oauth": {              //可选，JSON对象，OAuth(登录鉴权)模块三方SDK配置
                    "univerify" : {                 //可选，JSON对象，使用一键登录(univerify)SDK配置，无需手动配置参数，云端打包自动获取配置参数
                    },
                    "apple": {                      //可选，JSON对象，使用苹果登录(Sign in with Apple)SDK配置，无配置参数，仅iOS平台支持
                    },
                    "weixin": {                     //可选，JSON对象，使用微信登录SDK配置
                        "appid": "",                            //必填，字符串类型，微信开放平台申请的appid
                        "appsecret": "",                        //必填，字符串类型，微信开放平台申请的appsecret
                        "UniversalLinks": ""                    //可选，字符串类型，微信开放平台配置的iOS平台通用链接
                    },
                    "qq": {                         //可选，JSON对象，使用QQ登录SDK配置
                        "appid": "",                            //必填，字符串类型，QQ开放平台申请的appid
                        "UniversalLinks": ""                    //可选，字符串类型，QQ开放平台配置的iOS平台通用链接
                    },
                    "sina": {                       //可选，JSON对象，使用新浪微博登录SDK配置
                        "appkey": "",                           //必填，字符串类型，新浪微博开放平台申请的appid
                        "redirect_uri": "",                     //必填，字符串类型，新浪微博开放平台配置的redirect_uri
                        "UniversalLinks": ""                    //可选，字符串类型，新浪微博开放平台配置的iOS平台通用链接
                    },
                    "google": {                     //可选，JSON对象，使用Google登录SDK配置
                        "clientid": ""                          //必填，字符串类型，Google开发者后台申请的clientid
                    },
                    "facebook": {                   //可选，JSON对象，使用Facebook登录SDK配置
                        "appid": ""                             //必填，字符串类型，Facebook开发者后台申请的appid
                    }
                },
                "payment": {            //可选，JSON对象，Payment(支付)模块三方SDK配置
                    "appleiap": {                   //可选，JSON对象，使用Apple应用内支付配置，无配置参数，仅iOS平台支持
                    },
                    "alipay": {                     //可选，JSON对象，使用支付宝支付SDK配置
                        "__platform__": [ "ios", "android" ]    //可选，字符串数组类型，支持的平台
                    },
                    "weixin": {                     //可选，JSON对象，使用微信支付SDK配置
                        "__platform__": [ "ios", "android" ],   //可选，字符串数组类型，支持的平台
                        "appid": "",                            //必填，字符串类型，微信开放平台申请的appid
                        "UniversalLinks": ""                    //可选，字符串类型，微信开放平台配置的iOS平台通用链接
                    },
                    "paypal": {                     //可选，JSON对象，使用paypal支付SDK配置
                        "__platform__": [ "ios", "android" ],   //可选，字符串数组类型，支持的平台
                        "returnURL_ios": "",                    //必填，字符串类型，paypa开发者者后台配置的iOS平台returnURL
                        "returnURL_android": ""                 //必填，字符串类型，paypa开发者者后台配置的Android平台returnURL
                    },
                    "stripe": {                     //可选，JSON对象，使用stripe支付SDK配置
                        "__platform__": [ "ios", "android" ],   //可选，字符串数组类型，支持的平台
                        "returnURL_ios" : ""                    //必填，字符串类型，stripe开发者者后台配置的iOS平台returnURL
                    },
                    "google": {                     //可选，JSON对象，使用google支付SDK配置，无配置参数，仅Android平台支持
                    }
                },
                "push": {               //可选，JSON对象，Push(消息推送)模块三方SDK配置
                    "unipush": {                    //可选，JSON对象，使用UniPush SDK配置，无需手动配置参数，云端打包自动获取配置参数
                        "icons": {                          //可选，JSON对象，推送图标配置
                            "push": {                               //可选，JSON对象，Push图标配置
                                "ldpi": "",                                 //可选，字符串类型，普通屏设备推送图标路径，分辨率要求48x48
                                "mdpi": "",                                 //可选，字符串类型，大屏设备设备推送图标路径，分辨率要求48x48
                                "hdpi": "",                                 //可选，字符串类型，高分屏设备推送图标路径，分辨率要求72x72
                                "xdpi": "",                                 //可选，字符串类型，720P高分屏设备推送图标路径，分辨率要求96x96
                                "xxdpi": "",                                //可选，字符串类型，1080P高密度屏幕推送图标路径，分辨率要求144x144
                                "xxxdpi": "",                               //可选，字符串类型，4K屏设备推送图标路径，分辨率要求192x192
                            },
                            "smal": {                               //可选，JSON对象，Push小图标配置
                                "ldpi": "",                                 //可选，字符串类型，普通屏设备推送小图标路径，分辨率要求18x18
                                "mdpi": "",                                 //可选，字符串类型，大屏设备设备推送小图标路径，分辨率要求24x24
                                "hdpi": "",                                 //可选，字符串类型，高分屏设备推送小图标路径，分辨率要求36x36
                                "xdpi": "",                                 //可选，字符串类型，720P高分屏设备推送小图标路径，分辨率要求48x48
                                "xxdpi": "",                                //可选，字符串类型，1080P高密度屏幕推送小图标路径，分辨率要求72x72
                                "xxxdpi": "",                               //可选，字符串类型，4K屏设备推送小图标路径，分辨率要求96x96
                            }
                        }
                    },
                    "igexin": {                     //可选，JSON对象，使用个推推送SDK配置，**已废弃，推荐使用UniPush，UniPush是个推推送VIP版，功能更强大**
                        "appid": "",                            //必填，字符串类型，个推开放平台申请的appid
                        "appkey": "",                           //必填，字符串类型，个推开放平台申请的appkey
                        "appsecret": "",                        //必填，字符串类型，个推开放平台申请的appsecret
                        "icons": {                          //可选，JSON对象，推送图标配置
                            "push": {                               //可选，JSON对象，Push图标配置
                                "ldpi": "",                                 //可选，字符串类型，普通屏设备推送图标路径，分辨率要求48x48
                                "mdpi": "",                                 //可选，字符串类型，大屏设备设备推送图标路径，分辨率要求48x48
                                "hdpi": "",                                 //可选，字符串类型，高分屏设备推送图标路径，分辨率要求72x72
                                "xdpi": "",                                 //可选，字符串类型，720P高分屏设备推送图标路径，分辨率要求96x96
                                "xxdpi": "",                                //可选，字符串类型，1080P高密度屏幕推送图标路径，分辨率要求144x144
                                "xxxdpi": "",                               //可选，字符串类型，4K屏设备推送图标路径，分辨率要求192x192
                            },
                            "smal": {                               //可选，JSON对象，Push小图标配置
                                "ldpi": "",                                 //可选，字符串类型，普通屏设备推送小图标路径，分辨率要求18x18
                                "mdpi": "",                                 //可选，字符串类型，大屏设备设备推送小图标路径，分辨率要求24x24
                                "hdpi": "",                                 //可选，字符串类型，高分屏设备推送小图标路径，分辨率要求36x36
                                "xdpi": "",                                 //可选，字符串类型，720P高分屏设备推送小图标路径，分辨率要求48x48
                                "xxdpi": "",                                //可选，字符串类型，1080P高密度屏幕推送小图标路径，分辨率要求72x72
                                "xxxdpi": "",                               //可选，字符串类型，4K屏设备推送小图标路径，分辨率要求96x96
                            }
                        }
                    }
                },
                "share": {              //可选，JSON对象，Share(分享)模块三方SDK配置
                    "weixin": {                     //可选，JSON对象，使用微信分享SDK配置
                        "appid": "",                            //必填，字符串类型，微信开放平台申请的appid
                        "UniversalLinks": ""                    //可选，字符串类型，微信开放平台配置的iOS平台通用链接
                    },
                    "qq": {                         //可选，JSON对象，使用QQ分享SDK配置
                        "appid": "",                            //必填，字符串类型，QQ开放平台申请的appid
                        "UniversalLinks": ""                    //可选，字符串类型，QQ开放平台配置的iOS平台通用链接
                    },
                    "sina": {                       //可选，JSON对象，使用新浪微博分享SDK配置
                        "appkey": "",                           //必填，字符串类型，新浪微博开放平台申请的appid
                        "redirect_uri": "",                     //必填，字符串类型，新浪微博开放平台配置的redirect_uri
                        "UniversalLinks": ""                    //可选，字符串类型，新浪微博开放平台配置的iOS平台通用链接
                    }
                },
                "speech": {             //可选，JSON对象，Speech(语音识别)模块三方SDK配置
                    "baidu": {                      //可选，JSON对象，使用百度语音识别SDK配置
                        "appid": "",                            //必填，字符串类型，百度开放平台申请的appid
                        "apikey": "",                           //必填，字符串类型，百度开放平台申请的apikey
                        "secretkey": ""                         //必填，字符串类型，百度开放平台申请的secretkey
                    }
                },
                "statics": {            //可选，JSON对象，Statistic(统计)模块三方SDK配置
                    "umeng": {                      //可选，JSON对象，使用友盟统计SDK配置
                        "appkey_ios": "",                       //必填，字符串类型，友盟统计开放平台申请的iOS平台appkey
                        "channelid_ios": "",                    //可选，字符串类型，友盟统计iOS平台的渠道标识
                        "appkey_android": "",                   //必填，字符串类型，友盟统计开放平台申请的Android平台appkey
                        "channelid_android": ""                 //可选，字符串类型，友盟统计Android平台的渠道标识
                    },
                    "google" : {                    //可选，JSON对象，使用Google Analytics for Firebase配置
                        "config_ios" : "",                      //必填，字符串类型，Google Firebase统计开发者后台获取的iOS平台配置文件路径
                        "config_android" : ""                   //必填，字符串类型，Google Firebase统计开发者后台获取的Android平台配置文件路径
                    }
                },
                "ad": {                 //可选，JSON对象，uni-AD配置
                    "360": {                        //可选，JSON对象，使用360广告联盟SDK，无需手动配置，在uni-AD后台申请开通后自动获取配置参数
                    },
                    "csj": {                        //可选，JSON对象，使用今日头条穿山甲广告联盟SDK，无需手动配置，在uni-AD后台申请开通后自动获取配置参数
                    },
                    "gdt": {                        //可选，JSON对象，使用腾讯优量汇广告联盟SDK，无需手动配置，在uni-AD后台申请开通后自动获取配置参数
                    },
                    "ks": {                         //可选，JSON对象，使用快手广告联盟SDK，无需手动配置，在uni-AD后台申请开通后自动获取配置参数
                    },
                    "ks-content": {                 //可选，JSON对象，使用快手内容联盟SDK，无需手动配置，在uni-AD后台申请开通后自动获取配置参数
                    },
                    "sigmob": {                     //可选，JSON对象，使用Sigmob广告联盟SDK，无需手动配置，在uni-AD后台申请开通后自动获取配置参数
                    },
                    "hw": {                         //可选，JSON对象，使用华为广告联盟SDK，无需手动配置，在uni-AD后台申请开通后自动获取配置参数
                    },
                    "bd": {                         //可选，JSON对象，使用百度百青藤广告联盟SDK，无需手动配置，在uni-AD后台申请开通后自动获取配置参数
                    },
                    "BXM-AD": {                     //可选，JSON对象，使用互动游戏(变现猫)SDK，无需手动配置，在uni-AD后台申请开通后自动获取配置参数
                    }                    
                }
            },
            "icons": {              //可选，JSON对象，应用图标相关配置
                "ios":{                     //可选，JSON对象，iOS平台图标配置 
                    "appstore": "",                 //必填，字符串类型，分辨率1024x1024, 提交app sotre使用的图标路径
                    "iphone":{                      //可选，JSON对象，iPhone设备图标配置
                        "app@2x": "",                       //可选，字符串类型，分辨率120x120，程序图标路径  
                        "app@3x": "",                       //可选，字符串类型，分辨率180x180，程序图标路径  
                        "spotlight@2x": "",                 //可选，字符串类型，分辨率80x80，Spotlight搜索图标路径
                        "spotlight@3x": "",                 //可选，字符串类型，分辨率120x120，Spotlight搜索图标路径
                        "settings@2x": "",                  //可选，字符串类型，分辨率58x58，Settings设置图标路径
                        "settings@3x": "",                  //可选，字符串类型，分辨率87x87，Settings设置图标路径
                        "notification@2x": "",              //可选，字符串类型，分辨率40x40，通知栏图标路径
                        "notification@3x": ""               //可选，字符串类型，分辨率60x60，通知栏图标路径
                    },  
                    "ipad":{                        //可选，JSON对象，iPad设备图标配置
                        "app": "",                          //可选，字符串类型，分辨率76x76，程序图标图标路径
                        "app@2x": "",                       //可选，字符串类型，分辨率152x152，程序图标图标路径
                        "proapp@2x": "",                    //可选，字符串类型，分辨率167x167，程序图标图标路径
                        "spotlight": "",                    //可选，字符串类型，分辨率40x40，Spotlight搜索图标路径
                        "spotlight@2x": "",                 //可选，字符串类型，分辨率80x80，Spotlight搜索图标路径
                        "settings": "",                     //可选，字符串类型，分辨率29x29，Settings设置图标路径
                        "settings@2x": "",                  //可选，字符串类型，分辨率58x58，Settings设置图标路径
                        "notification": "",                 //可选，字符串类型，分辨率20x20，通知栏图标路径
                        "notification@2x": ""               //可选，字符串类型，分辨率740x40，通知栏图标路径
                    }  
                },  
                "android":{                 //可选，JSON对象，Android平台图标配置
                    "ldpi": "",                         //可选，字符串类型，普通屏设备程序图标，分辨率要求48x48，已废弃  
                    "mdpi": "",                         //可选，字符串类型，大屏设备程序图标，分辨率要求48x48，已废弃  
                    "hdpi": "",                         //可选，字符串类型，高分屏设备程序图标，分辨率要求72x72
                    "xhdpi": "",                        //可选，字符串类型，720P高分屏设备程序图标，分辨率要求96x96
                    "xxhdpi": "",                       //可选，字符串类型，1080P高分屏设备程序图标，分辨率要求144x144
                    "xxxhdpi": ""                       //可选，字符串类型，2K屏设备程序图标，分辨率要求192x192
                }
            },
            "splashscreen":{    //可选，JSON对象，启动界面配置
                "iosStyle": "common",   //可选，字符串类型，iOS平台启动界面样式，可取值common、default、storyboard
                "ios":{                 //可选，JSON对象，iOS平台启动界面配置 
                    "storyboard": "",               //可选，字符串类型，自定义storyboard启动界面文件路径，iosStyle值为storyboard时生效
                    "iphone":{                      //可选，JSON对象，iPhone设备启动图配置，iosStyle值为default时生效
                        "default": "",                      //可选，字符串类型，分辨率320x480，iPhone3（G/GS）启动图片路径，已废弃  
                         "retina35": "",                    //可选，字符串类型，分辨率640x960，3.5英寸设备(iPhone4/4S)启动图片路径，已废弃 
                         "retina40": "",                    //可选，字符串类型，分辨率640x1136，4.0英寸设备(iPhone5/5S)启动图片路径
                         "retina40l":"",                    //可选，字符串类型，分辨率1136x640，4.0英寸设备(iPhone5/5S)横屏启动图片路径
                         "retina47": "",                    //可选，字符串类型，分辨率750x1334，4.7英寸设备（iPhone6/7/8）启动图片路径
                         "retina47l": "",                   //可选，字符串类型，分辨率1334x750，4.7英寸设备（iPhone6/7/8）横屏启动图片路径
                         "retina55": "",                    //可选，字符串类型，分辨率1242x2208，5.5英寸设备（iPhone6/7/8Plus）启动图片路径  
                         "retina55l": "",                   //可选，字符串类型，分辨率2208x1242，5.5英寸设备（iPhone6/7/8Plus）横屏启动图片路径
                         "iphonex": "",                     //可选，字符串类型，分辨率1125x2436，5.8英寸设备（iPhoneX/XS）启动图片路径
                         "iphonexl": "",                    //可选，字符串类型，分辨率2436x1125，5.8英寸设备（iPhoneX/XS）横屏启动图片路径
                         "portrait-896h@2x": "",            //可选，字符串类型，分辨率828x1792，6.1英寸设备（iPhoneXR）启动图片路径
                         "landscape-896h@2x": "",           //可选，字符串类型，分辨率1792x828，6.1英寸设备（iPhoneXR）iPhoneXR横屏启动图片路径
                         "portrait-896h@3x": "",            //可选，字符串类型，分辨率1242x2688，6.5英寸设备（iPhoneXS Max）启动图片路径
                         "landscape-896h@3x": ""            //可选，字符串类型，分辨率2688x1242，6.5英寸设备（iPhoneXS Max）横屏启动图片路径
                    },  
                    "ipad":{                        //可选，JSON对象，iPad设备启动图配置，iosStyle值为default时生效
                         "portrait": "",                    //可选，字符串类型，分辨率768x1004，iPad竖屏启动图片路径，已废弃  
                         "portrait-retina": "",             //可选，字符串类型，分辨率1536x2008，iPad高分屏竖屏启动图片路径，已废弃  
                         "landscape": "",                   //可选，字符串类型，分辨率1024x748，iPad横屏启动图片路径，已废弃   
                         "landscape-retina": "",            //可选，字符串类型，分辨率2048x1496，iPad高分屏横屏启动图片路径，已废弃  
                         "portrait7": "",                   //可选，字符串类型，分辨率768x1024，9.7/7.9英寸iPad/mini竖屏启动图片路径 
                         "landscape7": "",                  //可选，字符串类型，分辨率1024x768，9.7/7.9英寸iPad/mini横屏启动图片路径
                         "portrait-retina7": "",            //可选，字符串类型，分辨率1536x2048，9.7/7.9英寸iPad/mini高分屏竖屏图片路径
                         "landscape-retina7": "",           //可选，字符串类型，分辨率2048x1536，9.7/7.9英寸iPad/mini高分屏横屏启动图片路径
                         "portrait-1112h@2x":"",            //可选，字符串类型，分辨率1668x2224，10.5英寸iPad Pro竖屏启动图片路径
                         "landscape-1112h@2x":"",           //可选，字符串类型，分辨率2224x1668，10.5英寸iPad Pro横屏启动图片路径
                         "portrait-1194h@2x":"",            //可选，字符串类型，分辨率1668x2388，11英寸iPad Pro竖屏启动图片路径
                         "landscape-1194h@2x":"",           //可选，字符串类型，分辨率2388x1668，11英寸iPad Pro横屏启动图片路径
                         "portrait-1366h@2x":"",            //可选，字符串类型，分辨率2048x2732，12.9英寸iPad Pro竖屏启动图片路径
                         "landscape-1366h@2x":""            //可选，字符串类型，分辨率2732x2048，12.9英寸iPad Pro横屏启动图片路径
                    }  
                },
                "androidStyle": "common",//可选，字符串类型，Android平台启动界面样式，可取值common、default
                "android":{         //可选，JSON对象，Android平台启动图片配置， androidStyle值为default时生效
                   "ldpi": "",                          //可选，字符串类型，分辨率320x442，低密度屏幕启动图片路径，已废弃
                   "mdpi": "",                          //可选，字符串类型，分辨率240x282，中密度屏幕启动图片路径，已废弃
                   "hdpi": "",                          //可选，字符串类型，分辨率480x762，高密度屏幕启动图片路径
                   "xhdpi": "",                         //可选，字符串类型，分辨率720x1242，720P高密度屏幕启动图片路径
                   "xxhdpi": ""                         //可选，字符串类型，分辨率1080x1882，1080P高密度屏幕启动图片路径
                }  
            },
            "orientation": [            //可选，字符串数组类型，应用支持的横竖屏，**已废弃，使用screenOrientation配置** 
                "portrait-primary",
                "portrait-secondary",
                "landscape-primary",
                "landscape-secondary"
            ]
        },
        "compatible": {                             //可选，JSON对象，uni-app兼容模式
            "ignoreVersion": false,                             //可选，Boolean类型，是否忽略版本兼容检查提示
            "runtimeVersion": "",                               //可选，字符串类型，兼容的uni-app运行环境版本号，多个版本使用,分割
            "compilerVersion": ""                               //可选，字符串类型，兼容的编译器版本号
        },
        "confusion": {                              //可选，JSON对象，原生混淆加密配置，参考：https://uniapp.dcloud.io/tutorial/app-sec-confusion
            "description": "",                                      //可选，字符串类型，原生混淆描述
            "resources": {                                          //必填，JSON对象，原生混淆文件配置
                "js/common.js": {                                           //可选，JSON对象，键名为需要原生混淆的文件路径
                }
            },
        },
        "channel": "",                              //可选，字符串类型，渠道标识
        "cers": {                                   //可选，JSON对象，应用的异常崩溃与错误报告系统配置
            "crash": true,                                          //可选，Boolean类型，是否提交应用异常崩溃信息
        },
        "cache": {                                  //可选，JSON对象，Webview窗口默认使用的缓存模式，uni-app项目已废弃
            "mode": "default"                                       //可选，字符串类型，可取值default、cacheElseNetwork、noCache、cacheOnly
        },
        "error": {                                  //可选，JSON对象，页面加载错误配置，uni-app项目仅对webview组件有效，参考：https://uniapp.dcloud.io/tutorial/app-webview-error
            "url": ""                                               //必填，字符串类型，webview页面错误是跳转的页面地址
        },
        "kernel": {                                 //可选，JSON对象，webview内核配置
            "ios": "WKWebview",                                     //可选，iOS平台使用的webview类型，可取值WKWebview、UIWebview
            "recovery": "reload"                                    //可选，iOS平台使用WKWebview时，内核崩溃后的处理逻辑，可取值restart、reload、none
        },
        "launchwebview": {                          //可选，JSON对象，应用首页相关配置，uni-app项目不建议手动修改
            "plusrequire": "normal",                                //可选，字符串类型，加载plus API时机，可取值ahead、normal、later、none
            "injection": false,                                     //可选，Boolean类型，是否提前注入plus API
            "overrideresource": [                           //可选，JSON对象数组，应用首页的拦截资源相关配置
                {
                    "match": "",                                    //可选，字符串类型，匹配拦截的资源url地址的正则表达式
                    "redirect":"",                                  //可选，字符串类型，拦截资源的重定向地址
                    "mime":"",                                      //可选，字符串类型，拦截资源的数据类型mime
                    "encoding":"",                                  //可选，字符串类型，拦截资源的数据编码
                    "header": {                                     //可选，JSON对象，拦截资源的http头数据
                    }  
                }
            ],  
            "overrideurl": {                                //可选，JSON对象，应用首页的拦截链接请求处理逻辑
                "mode": "reject",                                   //可选，字符串类型，拦截模式，可取值allow、reject
                "match": "",                                        //可选，字符串类型，匹配拦截规则，支持正则表达式
                "exclude": "none"                                   //可选，字符串类型，排除拦截理规则，可取值none、redirect
            },  
            "replacewebapi": {                              //可选，JSON对象，是否重写Web API实现相关配置
                "geolocation": "none"                               //可选，字符串类型，重写标准定位API，可取值none、alldevice、auto 
            },  
            "subNViews": [                                  //可选，JSON对象数组，首页原生View相关配置，已废弃
                {  
                    "id": "",                                       //可选，字符串类型，原生View标识
                    "styles": {                                     //可选，JSON对象，原生View样式
                    },  
                    "tags": [                                       //可选，JSON对象数组，原生View中包含的tag标签列表
                        {}
                    ]  
                }
            ],  
            "titleNView": {                                 //可选，JSON对象，标题栏相关配置
                "backgroundColor": "#RRGGBB",                       //可选，字符串类型，#RRGGBB格式，标题栏背景颜色
                "titleText": "",                                    //可选，字符串类型，标题栏标题文字内容
                "titleColor": "#RRGGBB",                            //可选，字符串类型，#RRGGBB格式，标题栏标题文字颜色  
                "titleSize": "17px",                                //可选，字符串类型，标题字体大小，默认大小为17px
                "autoBackButton": true,                             //可选，Boolean类型，是否显示标题栏上返回键
                "backButton": {                                     //可选，JSON对象，返回键样式
                    "backgournd": "#RRGGBB",                                //可选，字符串类型，#RRGGBB格式，返回按钮背景颜色
                    "color": "#RRGGBB",                                     //可选，字符串类型，#RRGGBB格式，返回图标颜色
                    "colorPressed": "#RRGGBB",                              //可选，字符串类型，#RRGGBB，返回图标按下时的颜色
                },  
                "buttons": [                                        //可选，JSON对象数组，标题栏按钮配置
                    {  
                        "color": "#RRGGBB",                                 //可选，字符串类型，#RRGGBB格式，按钮上的文字颜色
                        "colorPressed": "#RRGGBB",                          //可选，字符串类型，#RRGGBB格式，按钮按下状态的文字颜色
                        "float": "right",                                   //可选，字符串类型，按钮显示位置，可取值left、right  
                        "fontWeight": "normal",                             //可选，字符串类型，按钮上文字的粗细，可取值normal、bold
                        "fontSize": "22px",                                 //可选，字符串类型，按钮上文字的大小  
                        "fontSrc": "",                                      //可选，字符串类型，按钮上文字使用的字体文件路径
                        "text": ""                                          //可选，字符串类型，按钮上显示的文字
                    }
                ],  
                "splitLine": {                                      //可选，JSON对象，标题栏分割线样式
                    "color": "#RRGGBB",                                     //可选，字符串类型，#RRGGBB格式，分割线颜色
                    "height": "1px"                                         //可选，字符串类型，分割线高度
                } 
            },  
            "statusbar": {                                  //可选，JSON对象，状态栏配置
                "background": "#RRGGBB"                             //可选，字符串类型，#RRGGBB格式，沉浸式状态栏样式下系统状态栏背景颜色
            },  
            "top": "0px",                                   //可选，字符串类型，Webview的顶部偏移量，支持px、%单位
            "height": "100%",                               //可选，字符串类型，Webview窗口高度，支持px、%单位
            "bottom": "0px",                                //可选，字符串类型，Webview的底部偏移量，仅在未同时设置top和height属性时生效
            "backButtonAutoControl": "none",                //可选，字符串类型，运行环境自动处理返回键的控制逻辑，可取值none、hide、close
            "additionalHttpHeaders": {                      //可选，JSON对象，额外添加HTTP请求头数据
            }
        },
        "nativePlugins": {                          //可选，JSON数组对象，uni原生插件配置，参考：https://nativesupport.dcloud.net.cn/NativePlugin/use/use_local_plugin
            "%UniPlugin-ID%": {                                     //可选，JSON对象，键名为插件标识，值为插件配置参数
            }
        },
        "popGesture": "none",                       //可选，字符串类型，窗口侧滑返回默认效果，可取值none、close、hide
        "runmode": "liberate",                      //可选，字符串类型，应用资源运行模式，可取值normal、liberate
        "safearea": {                              //可选，JSON对象，安全区域配置
            "background": "#RRGGBB",                                //可选，字符串类型，#RRGGBB格式，安全区域背景颜色
            "backgroundDark": "#RRGGBB",                            //可选，字符串类型，#RRGGBB格式，暗黑模式安全区域背景颜色
            "bottom": {                                             //可选，JSON对象，底部安全区域配置
                "offset": "none"                                            //可选，字符串类型，安全区域偏移值，可取值auto、none
            },
            "left": {                                               //可选，JSON对象，左侧安全区域配置
                "offset": "none"                                            //可选，字符串类型，安全区域偏移值，可取值auto、none
            },
            "right": {                                              //可选，JSON对象，左侧安全区域配置
                "offset": "none"                                            //可选，字符串类型，安全区域偏移值，可取值auto、none
            }
        },
        "softinput": {                              //可选，JSON对象，软键盘相关配置
            "navBar": "auto",                                       //可选，字符串类型，iOS平台软键盘上导航条的显示模式，可取值auto、none
            "auxiliary": false,                                     //可选，Boolean类型，是否开启辅助输入功能
            "mode": "adjustResize"                                  //可选，字符串类型，弹出系统软键盘模式，可取值adjustResize、adjustPan
        },
        "ssl": {                                    //可选，JSON对象，ssl相关设置
            "untrustedca": "accept"                                 //可选，字符串类型，https请求时服务器非受信证书的处理逻辑，可取值accept、refuse、warning
        },
        "statusbar": {                              //可选，JSON对象，应用启动后的系统状态栏相关配置
            "immersed": "none",                                     //可选，字符串类型，沉浸式状态栏样式，可取值none、suggestedDevice、supportedDevice
            "style": "light",                                       //可选，字符串类型，系统状态栏样式（前景颜色），可取值dark、light
            "background": "#RRGGBB"                                 //可选，字符串类型，#RRGGBB格式，系统状态栏背景颜色
        },
        "useragent": {                              //可选，JSON对象，应用UserAgent相关配置，默认值为系统UserAgent，并添加 uni-app Html5Plus/1.0 
            "value": "",                                            //可选，字符串类型，设置的默认userAgent值
            "concatenate": false                                    //可选，Boolean类型，是否将value值作为追加值连接到系统默认userAgent值之后
        },
        "useragent_android": {                      //可选，JSON对象，Android平台应用UserAgent相关配置，优先级高于useragent配置
            "value": "",                                            //可选，字符串类型，设置的默认userAgent值
            "concatenate": false                                    //可选，Boolean类型，是否将value值作为追加值连接到系统默认userAgent值之后
        },
        "useragent_ios": {                          //可选，JSON对象，iOS平台应用UserAgent相关配置，优先级高于useragent配置
            "value": "",                                            //可选，字符串类型，设置的默认userAgent值
            "concatenate": false                                    //可选，Boolean类型，是否将value值作为追加值连接到系统默认userAgent值之后
        }
	},
    "quickapp": {},
    "mp-weixin": {
        "appid": "wx开头的微信小程序appid",
        "uniStatistics": {
            "enable": false
        }
    },
    "mp-baidu": {
        "appid": "百度小程序appid"
    },
    "mp-toutiao": {
        "appid": "抖音小程序appid"
    },
    "mp-lark": {
        "appid": "飞书小程序appid"
    },
    "h5": {
        "title": "演示",
        "template": "index.html",
        "router": {
            "mode": "history",
            "base": "/hello/"
        },
        "async": {
            "loading": "AsyncLoading",
            "error": "AsyncError",
            "delay": 200,
            "timeout": 3000
        }
    }
}
```
