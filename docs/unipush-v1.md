::: warning 注意  
 您正在浏览的是老版uni-push1.0的文档。推荐升级到[uni-push2.0](unipush-v2.md)
:::

> 从HBuilderX 2.0.3 起，uni-app、5+App、wap2app均支持`uni-push`  
> 从HBuilderX 2.7.10开始，支持谷歌FCM，参考：[如何使用FCM](uni-push/google-fcm.md)  


## uni-push介绍
[查看uni-push介绍](unipush.md)

## 一、客户端集成
## 1. Client integration

### 1.1 开通 `uni-push` 推送服务

`uni-push` 内部封装好了个推及主流厂商 SDK，开发者在使用前必须开通相关服务：[点此查看如何开通uni-push推送服务](./uni-push/open.md) 。

**完成以上步骤后，ios 支持在线、离线推送；android 仅支持在线推送。**
**After completing the above steps, ios supports online and offline push; android only supports online push. **



### 1.2 开通离线厂商推送服务
### 1.2 Enable offline vendor push service

若需要支持主流 android 厂商客户端接收离线推送，您需要完成 ：[android 多厂商配置](https://uniapp.dcloud.net.cn/unipush_vendor_config.html) 。
If you need to support mainstream android vendor clients to receive offline push, you need to complete: [android multi-vendor configuration](https://uniapp.dcloud.net.cn/unipush_vendor_config.html).

配置好厂商参数后请一定要提交云打包，并且使用“自有证书”打签名包；将云打包后的安装包安装到手机上，再获取cid 进行离线厂商推送测试，不可使用基座方式获取的 cid 进行离线厂商推送测试。
After configuring the manufacturer parameters, be sure to submit the cloud package and use the "own certificate" to sign the package; install the cloud packaged installation package on the mobile phone, and then obtain the cid for offline manufacturer push test, which cannot be obtained by the pedestal method. cid for offline vendor push testing.

**注意事项：**
**Precautions:**

- 目前华为、魅族、FCM不需要发布应用市场上就可使用离线推送(注：离线推送有条数限制)，其他厂商通道需要上架后才能使用。



### 1.3 集成验证
### 1.3 Integration Verification

#### 1.3.1 cid 获取
#### 1.3.1 cid get

在应用安装后第一次运行时应该调用 [5+ API](https://www.html5plus.org/doc/zh_cn/push.html) 的 **plus.push.getClientInfoAsync** 方法获取客户端标识。
The **plus.push.getClientInfoAsync** method of [5+ API](https://www.html5plus.org/doc/zh_cn/push.html) should be called to obtain the client ID when the application is run for the first time after installation .

如果获取的 cid 为空，说明客户端向推送服务器注册还未完成，可以使用 setTimeout 延时重试。
If the obtained cid is empty, it means that the client's registration with the push server has not been completed, and you can use setTimeout to delay retry.

```javascript
plus.push.getClientInfoAsync((info) => {
     let cid = info["clientid"];
});
```



#### 1.3.2 确认离线厂商是否可用
#### 1.3.2 Check if offline vendor is available

若不需要使用离线推送，则可忽略此步骤。
If you do not need to use offline push, you can ignore this step.

在【uni-push/1.0/消息推送】-【配置管理】-【故障排查】-【状态查询】中输入CID 查询，看是否会返回 devicetoken 。

![img](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/devicetoken1.png)

**若返回 devicetoken ：**
**If devicetoken is returned:**

可以开始进行离线推送测试。
Offline push testing can be started.



**若未返回 devicetoken ：**
**If no devicetoken is returned:**

说明当前未正常集成厂商，无法使用离线推送功能。
It means that the manufacturer is not properly integrated, and the offline push function cannot be used.

- 检查后台是否有配置厂商参数（配置完参数需要云打包后生效）
- Check whether the manufacturer parameters are configured in the background (the configured parameters need to be packaged in the cloud to take effect)

![img](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/devicetoken2.png)

华为（包含荣耀）机型需要额外检查：
Huawei (including Honor) models require additional checks:

1. 需要在华为开发者后台配置正确的 sha256 指纹证书
1. You need to configure the correct sha256 fingerprint certificate in the Huawei developer background
2. 云打包用自有证书打正式签名包
2. Cloud packaging uses its own certificate to print the official signature package
3. 华为开发者后台包名跟客户端包名需要保持一致
3. The name of the backend package of Huawei developers must be the same as the name of the client package.
4. 厂商推送设置-华为厂商，必须上传agconnect-services.json
4. Manufacturer push settings - Huawei manufacturers, must upload agconnect-services.json
5. 在华为平台是否开通了华为推送服务
5. Whether the Huawei push service has been activated on the Huawei platform
6. 保存完参数，需要重新提交云端打包
6. After saving the parameters, you need to resubmit the cloud package

**特别注意**
**pay attention**

华为厂商平台更换应用包名或者证书时，需要同步更新云端的agconnect-services.json和包名等信息，否则将导致打包失败。
When changing the application package name or certificate on the Huawei vendor platform, the cloud agconnect-services.json and package name need to be updated synchronously. Otherwise, the packaging will fail.



## 二、服务端推送消息
## 2. Server push message

开发者可通过以下三种方式推送消息，选择其中一种即可。
Developers can push messages in one of the following three ways.

若您在测试过程中遇到无法收到推送的情况，请先按照 [uni-push 1.0常见问题](https://ask.dcloud.net.cn/article/36611) 中的排查思路自助排查一下，例如常见问题：**安卓离线收不到通知** 。

### 2.1 开发者中心后台Web页面推送
### 2.1 Web page push in the background of the developer center

登录 [DCloud开发者中心](https://dev.dcloud.net.cn/)，在左侧导航选择“uni-push”-“1.0（老版本）”-“消息推送”，打开消息推送页面。

**测试在线通知消息推荐您使用：**
**Testing online notification messages is recommended for you to use:**

![img](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/send_notification.png)



**测试离线通知消息推荐您使用：**
**Test offline notification messages Recommended for you to use:**

![img](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/passthrough.png)



### 2.2 个推服务端 api 推送@request-getui

#### 2.2.1 服务端消息下发流程（必读）
#### 2.2.1 Server message delivery process (must read)

- **当 CID 在线(即 app 在前台打开运行)时**：
- **When the CID is online (i.e. the app is open and running in the foreground)**:

  消息通过个推通道下发到客户端，具体到服务端 Rest-V2 代码中，即 push_message 中的 notification（通知） 或 transmission（透传） 内容传递给客户端。
  The message is sent to the client through a push channel, specifically in the server-side Rest-V2 code, that is, the notification (notification) or transmission (transparent transmission) content in push_message is passed to the client.

- **当 CID 离线(即 app 在后台、锁屏、进程关闭)时：**
- **When CID is offline (i.e. app in background, locked screen, process closed):**

  有开启对应厂商离线功能的，消息将通过个推侧请求对应厂商侧的服务端，具体到服务端 Rest-V2 代码中，即 push_channel 中的通知内容传递给厂商，实际的消息是经由厂商服务器下发至客户端；若服务端 push_channel 不传值，则无法接收离线消息。
  If the offline function of the corresponding manufacturer is enabled, the message will request the server of the corresponding manufacturer through a push side, which is specific to the Rest-V2 code of the server, that is, the notification content in the push_channel is passed to the manufacturer, and the actual message is sent through the manufacturer's server. Sent to the client; if the server push_channel does not pass a value, it cannot receive offline messages.

  对于没有开启对应厂商功能的，消息将存在个推的离线库中，等待 CID 在线，再通过个推通道下发到客户端。
  For those who do not have the corresponding manufacturer function enabled, the message will be stored in the offline library of Ge Push, waiting for the CID to be online, and then sent to the client through the push channel.

#### 2.2.2 服务端api使用
#### 2.2.2 Server API usage

个推服务端接口文档可查看：[服务端 RestAPI V2](https://docs.getui.com/getui/server/rest_v2/push/) ，支持以下 2 种方式调用，选择其中一种即可，推荐您使用 Http 请求。
You can view the server interface documentation of GePush: [Server RestAPI V2](https://docs.getui.com/getui/server/rest_v2/push/), it supports the following two ways to call, just choose one of them, It is recommended that you use Http requests.

服务端集成时首先需要获取 AppId、AppKey、MasterSecret 参数，登录 [DCloud开发者中心](https://dev.dcloud.net.cn/) ，在“uni-push”-“1.0（老版本）”-“消息推送”下的“应用配置”页面中获取，如下图所示：

![img](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/app_config_info.png)

**Http 请求：**参数详情可查看：[服务端 RestAPI V2](https://docs.getui.com/getui/server/rest_v2/push/)
**Http request: **Parameter details can be viewed: [Server RestAPI V2](https://docs.getui.com/getui/server/rest_v2/push/)

参数示例：
Parameter example:

```json
{
    "request_id": "请填写10到32位的id",
    "audience": {
        "cid": [
            "请输入clientid"
        ]
    },
    "settings": {
        "ttl": 3600000,
        "strategy": {
            "default": 1
        }
    },
    "push_message": {
        //此格式的透传消息由 unipush 做了特殊处理，会自动展示通知栏。开发者也可自定义其它格式，在客户端自己处理。
        //The transparent transmission message in this format is specially processed by unipush, and the notification bar will be displayed automatically. Developers can also customize other formats and handle them on the client side.
        "transmission": "{title:\"标题\",content:\"内容\",payload:\"自定义数据\"}"
    },
    "push_channel": {
        "android": {
            "ups": {
                "notification": {
                    "title": "安卓离线展示的标题",
                    "body": "安卓离线展示的内容",
                    "click_type": "intent",
                    //注意：intent参数必须按下方文档（特殊参数说明）要求的固定格式传值，intent错误会导致客户端无法收到消息
                    //Note: The intent parameter must be passed in the fixed format required by the following document (special parameter description). If the intent is wrong, the client will not be able to receive the message.
                    "intent": "请填写固定格式的intent"
                }
            }
        },
        "ios": {
            "type": "notify",
            "payload": "自定义消息",
            "aps": {
                "alert": {
                    "title": "苹果离线展示的标题",
                    "body": "苹果离线展示的内容"
                },
                "content-available": 0,
                "sound": "default"
            },
            "auto_badge": "+1"
        }
    }
}
```



**SDK集成：**
**SDK Integration:**

个推服务端  SDK 的主要目标是提升开发者在服务端集成个推推送服务的开发效率。 开发者不需要进行复杂编程即可使用个推推送服务的各项常用功能，SDK 可以自动帮您满足调用过程中所需的鉴权、组装参数、发送HTTP请求等非功能性要求，目前仅支持 Java 和 PHP 语言。
The main goal of Getui server SDK is to improve the development efficiency of developers integrating Getui push service on the server side. Developers do not need to perform complex programming to use the common functions of the Getui push service. The SDK can automatically help you meet the non-functional requirements such as authentication, assembly parameters, and sending HTTP requests during the calling process. Currently, only supports Java and PHP languages.

在使用以下代码前请先查看 [个推服务端 Java SDK ](https://docs.getui.com/getui/server/rest_v2/service_sdk/) ，配置使用最新版 SDK 。若您想查看详细的字段描述，或者想集成 PHP SDK 可查看：[服务端 RestAPI V2 ](https://docs.getui.com/getui/server/rest_v2/push/) 。
Before using the following code, please check the [Getui Server Java SDK](https://docs.getui.com/getui/server/rest_v2/service_sdk/), and configure to use the latest version of the SDK. If you want to see detailed field descriptions, or want to integrate PHP SDK, you can check: [Server-side RestAPI V2 ](https://docs.getui.com/getui/server/rest_v2/push/) .

Java SDK 参数示例：
Java SDK parameter example:

```java
import com.getui.push.v2.sdk.ApiHelper;
import com.getui.push.v2.sdk.GtApiConfiguration;
import com.getui.push.v2.sdk.api.PushApi;
import com.getui.push.v2.sdk.common.ApiResult;
import com.getui.push.v2.sdk.dto.req.Audience;
import com.getui.push.v2.sdk.dto.req.Settings;
import com.getui.push.v2.sdk.dto.req.message.PushChannel;
import com.getui.push.v2.sdk.dto.req.message.PushDTO;
import com.getui.push.v2.sdk.dto.req.message.PushMessage;
import com.getui.push.v2.sdk.dto.req.message.android.AndroidDTO;
import com.getui.push.v2.sdk.dto.req.message.android.ThirdNotification;
import com.getui.push.v2.sdk.dto.req.message.android.Ups;
import com.getui.push.v2.sdk.dto.req.message.ios.Alert;
import com.getui.push.v2.sdk.dto.req.message.ios.Aps;
import com.getui.push.v2.sdk.dto.req.message.ios.IosDTO;
import java.util.Map;

public class UnipushTest {
    public static void main(String[] args) {
        GtApiConfiguration apiConfiguration = new GtApiConfiguration();
        //填写应用配置，参数在“Uni Push”下的“应用配置”页面中获取
        //Fill in the application configuration, the parameters are obtained from the "Application Configuration" page under "Uni Push"
        apiConfiguration.setAppId("请填写AppId");
        apiConfiguration.setAppKey("请填写AppKey");
        apiConfiguration.setMasterSecret("请填写MasterSecret");
        apiConfiguration.setDomain("https://restapi.getui.com/v2/");
        // 实例化ApiHelper对象，用于创建接口对象
        // Instantiate the ApiHelper object for creating interface objects
        ApiHelper apiHelper = ApiHelper.build(apiConfiguration);
        // 创建对象，建议复用。目前有PushApi、StatisticApi、UserApi
        // Create an object, it is recommended to reuse. Currently there are PushApi, StatisticApi, UserApi
        PushApi pushApi = apiHelper.creatApi(PushApi.class);
        //根据cid进行单推
        //Single push according to cid
        PushDTO<Audience> pushDTO = new PushDTO<Audience>();
        // 设置推送参数，requestid需要每次变化唯一
        // Set push parameters, requestid needs to be unique each time
        pushDTO.setRequestId(System.currentTimeMillis() + "");
        Settings settings = new Settings();
        pushDTO.setSettings(settings);
        //消息有效期，走厂商消息必须设置该值
        //The validity period of the message, this value must be set for the manufacturer message
        settings.setTtl(3600000);

        //在线走个推通道时推送的消息体
        //The message body pushed when a push channel is online
        PushMessage pushMessage = new PushMessage();
        pushDTO.setPushMessage(pushMessage);
        //此格式的透传消息由 unipush 做了特殊处理，会自动展示通知栏。开发者也可自定义其它格式，在客户端自己处理。
        //The transparent transmission message in this format is specially processed by unipush, and the notification bar will be displayed automatically. Developers can also customize other formats and handle them on the client side.
        pushMessage.setTransmission(" {title:\"标题\",content:\"内容\",payload:\"自定义数据\"}");
        // 设置接收人信息
        // set recipient information
        Audience audience = new Audience();
        pushDTO.setAudience(audience);
        audience.addCid("请填写cid");
        //设置离线推送时的消息体
        //Set the message body for offline push
        PushChannel pushChannel = new PushChannel();
        //安卓离线厂商通道推送的消息体
        //The message body pushed by the Android offline vendor channel
        AndroidDTO androidDTO = new AndroidDTO();
        Ups ups = new Ups();
        ThirdNotification thirdNotification = new ThirdNotification();
        ups.setNotification(thirdNotification);
        thirdNotification.setTitle("安卓离线展示的标题");
        thirdNotification.setBody("安卓离线展示的内容");
        thirdNotification.setClickType("intent");
        //注意：intent参数必须按下方文档（特殊参数说明）要求的固定格式传值，intent错误会导致客户端无法收到消息
        //Note: The intent parameter must be passed in the fixed format required by the following document (special parameter description). If the intent is wrong, the client will not be able to receive the message.
        thirdNotification.setIntent("请填写固定格式的intent");
        androidDTO.setUps(ups);
        pushChannel.setAndroid(androidDTO);

        //ios离线apn通道推送的消息体
        //Message body pushed by ios offline apn channel
        Alert alert = new Alert();
        alert.setTitle("苹果离线通知栏标题");
        alert.setBody("苹果离线通知栏内容");
        Aps aps = new Aps();
        aps.setContentAvailable(0);
        aps.setSound("default");
        aps.setAlert(alert);
        IosDTO iosDTO = new IosDTO();
        iosDTO.setAps(aps);
        iosDTO.setType("notify");
        pushChannel.setIos(iosDTO);
        
        pushDTO.setPushChannel(pushChannel);

        // 进行cid单推
        // Perform cid single push
        ApiResult<Map<String, Map<String, String>>> apiResult = pushApi.pushToSingleByCid(pushDTO);
        if (apiResult.isSuccess()) {
            // success
            System.out.println(apiResult.getData());
        } else {
            // failed
            System.out.println("code:" + apiResult.getCode() + ", msg: " + apiResult.getMsg());
        }
    }
}

```



#### 2.2.3 特殊参数说明
#### 2.2.3 Special parameter description

##### 2.2.3.1 Intent

鉴于各厂商SDK打开应用自定义页面有多种方式，且有些方式互不兼容，为了保持统一并且方便开发者，个推提供一种标准且唯一的打开App 内自定义页面方式，通过服务端 API 指定 intent 参数。
In view of the fact that each manufacturer's SDK has multiple ways to open application custom pages, and some of them are incompatible with each other, in order to maintain unity and facilitate developers, Getui provides a standard and unique way to open custom pages in apps through the server API. Specify the intent parameter.

使用厂商推送下发推送消息必须设置 intent，该数据格式是Android原生Intent对象序列化由来。具体可参考 [详情](https://blog.csdn.net/u011068702/article/details/51406572)。并且intent须符合以下格式，此格式时在个推定义额基础上二次封装，所以必须以此格式为准。不按此格式设置 intent 可能出现用户点击推送消息无法启动App 的问题，并且离线情况下click事件无法得到响应。
Intent must be set when using manufacturer push to deliver push messages. This data format is the origin of Android native Intent object serialization. For details, please refer to [Details](https://blog.csdn.net/u011068702/article/details/51406572). And the intent must conform to the following format. This format is encapsulated twice on the basis of the inferred amount, so this format must prevail. Not setting the intent in this format may cause the user to click on the push message to fail to launch the app, and the click event cannot be responded to when offline.
intent 数据格式如下：
The intent data format is as follows:

```javascript
intent://io.dcloud.unipush/?#Intent;scheme=unipush;launchFlags=0x4000000;component=io.dcloud.HBuilder/io.dcloud.PandoraEntry;S.UP-OL-SU=true;S.title=测试标题;S.content=测试内容;S.payload=test;end
```

**注意事项：**
**Precautions:**

`component=io.dcloud.HBuilder/io.dcloud.PandoraEntry`，其中 `io.dcloud.HBuilder` 为 App 包名，需要替换为自己 App 的包名，与 App 云端打包界面设置的 Android 包名一致。

![img](https://native-res.dcloud.net.cn/images/uniapp/push/packagename2.png)

其它说明：
other instructions:

- S.title=的值为推送消息标题，对应5+ API中 [PushMessage](https://www.html5plus.org/doc/zh_cn/push.html#plus.push.PushMessage) 对象的 title 属性值。
- The value of S.title= is the push message title, which corresponds to the title attribute value of the [PushMessage](https://www.html5plus.org/doc/zh_cn/push.html#plus.push.PushMessage) object in the 5+ API .
- S.content=的值为推送消息内容，对应5+ API中 [PushMessage ](https://www.html5plus.org/doc/zh_cn/push.html#plus.push.PushMessage)对象的 content 属性值。
- The value of S.content= is the push message content, which corresponds to the content attribute value of the [PushMessage ](https://www.html5plus.org/doc/zh_cn/push.html#plus.push.PushMessage) object in the 5+ API .
- S.payload=的值为推送消息的数据，对应5+ API中 [PushMessage](https://www.html5plus.org/doc/zh_cn/push.html#plus.push.PushMessage) 对象的 payload 属性值。
- The value of S.payload= is the data of the push message, which corresponds to the payload attribute of the [PushMessage](https://www.html5plus.org/doc/zh_cn/push.html#plus.push.PushMessage) object in the 5+ API value.
- launchFlags=0x4000000字段，是为了解决接收多条通知后点击可能无法触发 click 事件的问题。
- The launchFlags=0x4000000 field is to solve the problem that the click event may not be triggered after receiving multiple notifications.



##### 2.2.3.2 特殊透传消息
##### 2.2.3.2 Special transparent message

`uni-push`推送服务对透传消息的数据符合以下格式时做了特殊处理，会将如下格式的透传消息，直接在通知栏中展示通知。

**注意事项：**
**Precautions:**

- 只适用于安卓，ios 仍需要开发者手动在 receive 透传回调中创建通知；
- Only applicable to Android, ios still requires developers to manually create notifications in the receive passthrough callback;
- 下列格式的透传消息，消息到达时不会进入 receive 回调，只有点击消息激活 App 时触发"click"事件。
- The transparent message in the following format will not enter the receive callback when the message arrives, and only trigger the "click" event when the app is activated by clicking on the message.

```json
{"title": "xxx","content": "xxx","payload": "xxx"}
```



### 2.3 uniCloud开发服务器
### 2.3 uniCloud development server

使用封装好的服务器端开发易用插件，详情可查看：[uniPush的uniCloud版【V2】](https://ext.dcloud.net.cn/plugin?id=1680)
Use the packaged server-side to develop easy-to-use plug-ins. For details, please refer to: [uniPush's uniCloud version [V2]](https://ext.dcloud.net.cn/plugin?id=1680)



## 三、客户端处理推送消息
## 3. The client processes push messages

### 3.1 支持消息范围
### 3.1 Support message scope

| 客户端  | 个推通知 | 个推透传 | 厂商通知 | 厂商透传 |
| Client | Individual Push Notification | Individual Push Transparent Transmission | Manufacturer Notification | Vendor Transparent Transmission |
| ------- | -------- | -------- | -------- | -------- |
| android | 支持     | 支持     | 支持     | 不支持   |
| android | supported | supported | supported | not supported |
| ios     | 不支持   | 支持     | 支持     | 不支持   |
| ios | not supported | supported | supported | not supported |

### 3.2 客户端 api
### 3.2 Client API

#### 3.2.1 消息处理
#### 3.2.1 Message Handling

`uni-push` 推送服务已经封装好 iOS&Android 平台的原生集成工作，开发者只需要调用 JS 代码处理推送消息的业务逻辑。

若您需要在客户端接收处理推送 `uni-push` 推送内容，请先阅读了解此对接指南开头的 “**消息推送流程**”，客户端回调处理可参考：[在uni-app中使用uni-push](uni-push/v1/how-to-use-in-uniapp.md) 。

**注意事项：**
**Precautions:**

- 由于 ios 系统的限制，ios app 在线时，只能推送透传消息。需要开发者在客户端 receive 透传回调中，接收透传消息并根据自身业务场景进行消息的展示方式处理，默认不处理的话是没有任何展示的，透传消息个推只负责传递。
- Due to the limitations of the ios system, when the ios app is online, only transparent messages can be pushed. The developer needs to receive the transparent transmission message in the client receive transparent transmission callback and process the message display method according to its own business scenario. If it is not processed by default, there will be no display, and the transparent transmission message is only responsible for delivery.

**其它**
**other**

- 使用[条件编译](https://uniapp.dcloud.io/platform)直接调用 5+ Push 接口，参考[5+ APP推送开发指南](https://ask.dcloud.net.cn/article/34)
- Use [Conditional Compilation](https://uniapp.dcloud.io/platform) to directly call 5+ Push interface, refer to [5+ APP Push Development Guide](https://ask.dcloud.net.cn/article/ 34)
- uni 的客户端 js api 仍然是 plus.push，之前使用 plus.push 开发的代码仍然可以使用。
- The client-side js api of uni is still plus.push, and the code previously developed using plus.push can still be used.

#### 3.2.2 应用桌面图标的角标
#### 3.2.2 The corner label of the application desktop icon

对于支持角标设置的机型，app 在线推送时可调用 5+ API plus.runtime.setBadgeNumber 设置或清零角标。
For models that support badge setting, you can call 5+ API plus.runtime.setBadgeNumber to set or clear the badge when the app is pushed online.

**Android 平台**
**Android Platform**

不同 ROM 接收推送消息对桌面图标的角标处理逻辑存在差别，安卓厂商离线角标支持情况如下：
Different ROMs have differences in the processing logic of desktop icons when receiving push messages. The Android manufacturers support offline corner icons as follows:

- oppo/魅族，部分手机系统上能设置角标圆点，没有数字角标的功能。
- For oppo/Meizu, some mobile phone systems can set up corner mark dots, but there is no function of digital corner mark.

- 小米系统自带离线通知数字角标展示功能，默认+1处理，打开清零。
- The Xiaomi system has its own offline notification digital corner display function, which is processed by +1 by default and cleared when turned on.

- vivo高版本系统自带离线通知数字角标展示功能，默认+1处理，打开清零，低版本没有角标功能。
- The high version of vivo system comes with the offline notification digital corner mark display function, which is processed by +1 by default and cleared when turned on. The lower version does not have the corner mark function.

- 华为角标需服务端api进行字段设置，客户端需要手动设置角标数为0
- Huawei's logo requires the server api to set the field, and the client needs to manually set the number of logos to 0

  - add方式支持版本： **EMUI版本8.0.0且推送服务应用版本 8.0.0及以上**
  - Version supported by add method: **EMUI version 8.0.0 and push service application version 8.0.0 and above**

  - 服务端 rest-v2 设置示例，注意`uni-push`用户的class的值请固定使用'io.dcloud.PandoraEntry'

    ```js
    {
        "android": {
            "ups": {
                "notification": {
                    // ...其他push_channel参数略
                    // ...other push_channel parameters omitted
                },
                "options": {
                    "HW": {
                        "/message/android/notification/badge/class": "io.dcloud.PandoraEntry",
                        "/message/android/notification/badge/add_num": 1
                    }
                }
            }
        }
    }
    ```

**iOS 平台**
**iOS Platform**

根据接收到的推送消息处理桌面图标的角标，在`uni-push`后台的“iOS配置”项中可配置 badge 参数对角标进行设置，可取值：

- “+1”，表示当前角标+1；
- "+1", indicating that the current index is +1;
- “-1”，表示当前角标-1（角标>=0）；
- "-1", which means the current index is -1 (the index >=0);
- “3”，表示指定角标值，值必须>=0。
- "3", indicating the specified superscript value, the value must be >=0.

默认（不设置badge参数）则角标数字不变，也可以在应用运行期调用5+ API [plus.runtime.setBadgeNumber](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.setBadgeNumber) 动态设置角标数字。
By default (without setting the badge parameter), the badge number remains unchanged, or you can call the 5+ API [plus.runtime.setBadgeNumber](https://www.html5plus.org/doc/zh_cn/runtime.html# plus.runtime.setBadgeNumber) to dynamically set the badge number.



## 常见问题
[参考文档](unipush.md#faq)

**如有其它疑问，可使用微信扫描下面二维码，进行技术咨询**  
![](https://native-res.dcloud.net.cn/images/uniapp/push/getui-service.jpg)

