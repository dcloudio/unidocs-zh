::: warning 注意  
::: warning attention
 您正在浏览的是老版uni-push1.0的文档。推荐升级到[uni-push2.0](unipush-v2.html)
 You are browsing the documentation of the old version of uni-push1.0. It is recommended to upgrade to [uni-push2.0](unipush-v2.html)
:::

> 从HBuilderX 2.0.3 起，uni-app、5+App、wap2app均支持UniPush  
> From HBuilderX 2.0.3, uni-app, 5+App, wap2app all support UniPush
>从HBuilderX2.7.10开始，支持谷歌FCM，参考：[https://ask.dcloud.net.cn/article/37356](https://ask.dcloud.net.cn/article/37356)  
>From HBuilderX2.7.10, support Google FCM, reference: [https://ask.dcloud.net.cn/article/37356](https://ask.dcloud.net.cn/article/37356)



## 概述
## Overview

### 产品介绍
### product description

UniPush 是 DCloud 联合个推公司推出的集成型统一推送服务，内建了苹果、华为、小米、OPPO、VIVO、魅族、谷歌 FCM 等手机厂商的系统级推送和个推等第三方推送。
UniPush is an integrated unified push service launched by DCloud and a push company. It has built-in system-level push and personal push and other third-party push from mobile phone manufacturers such as Apple, Huawei, Xiaomi, OPPO, VIVO, Meizu, and Google FCM.

国内Android的Push是一个混乱的世界，因为 Google 的 Push 服务 FCM 被墙，所以一些国内的安卓手机厂商各自做了自己的推送，比如华为、小米、OPPO、VIVO、魅族等，但还有很多国产手机厂商没有提供官方推送方案。三方独立公司如个推，则提供了独立的 push 方案。
Domestic Android Push is a chaotic world, because Google's Push service FCM is blocked, so some domestic Android mobile phone manufacturers have made their own push, such as Huawei, Xiaomi, OPPO, VIVO, Meizu, etc., but there are many domestic Mobile phone manufacturers do not provide an official push program. A three-party independent company, such as a push, provides an independent push solution.
在没有 uniPush 以前，如果只使用三方 push，会在很多国产手机上因为节电设置而无法保活 push 进程，导致无法推送。
Before there was no uniPush, if only three-way push was used, the push process could not be kept alive on many domestic mobile phones due to power saving settings, resulting in the inability to push.
而如果每个安卓手机的官方 Push SDK 都集成开发一遍，这么多平台，工作量会非常巨大，管理维护也很麻烦。
If the official Push SDK of each Android phone is integrated and developed, the workload of so many platforms will be huge, and the management and maintenance will be very troublesome.

uniPush 解决了这个难题，开发者只需要开发一次。系统会自动在不同手机上选择最可靠的推送通道发送 push 消息，保障送达率。
uniPush solves this problem, and developers only need to develop it once. The system will automatically select the most reliable push channel to send push messages on different mobile phones to ensure the delivery rate.

UniPush 即降低了开发成本、又提高了 push 送达率，并且免费，是当前推送的最佳解决方案。
UniPush not only reduces the development cost, but also improves the delivery rate of push, and it is free. It is the best solution for push at present.

### 常见答疑
### FAQ

有了 unipush，开发者不应该再使用其他 push 方案了。但我们发现很多开发者有误解，导致还在错误使用其他推送。
With unipush, developers should no longer use other push schemes. However, we found that many developers have misunderstandings, which lead to the wrong use of other pushes.

- 常见误解 1：“uniPush的专业性，和专业的个推、极光等服务可相比吗？”
- Common Misunderstanding 1: "Is uniPush's professionalism comparable to professional personal push, Aurora and other services?"

  答：uniPush 是由个推将其本来收费的 push 产品，其中重要VIP部分功能免费提供给了DCloud的开发者。它与个推 vip push 的只有 2 个区别：
  Answer: uniPush is a push product that was originally charged by a pusher, and some important VIP functions are provided to DCloud developers for free. There are only 2 differences between it and vip push:

  - 免费
  - free
  - 账户使用的是 DCloud 开发者账户，而无需再重新注册个推账户。个推是A股上市公司，专业性在推送领域领先。
  - The account is using the DCloud developer account, and there is no need to re-register a Getui account. Getui is an A-share listed company, and its professionalism leads the push field.

- 常见误解 2：“uniPush好麻烦，我就喜欢个推、极光这种简单 sdk，不想去各个 rom 厂商去申请一圈”
- Common misunderstanding 2: "uniPush is so troublesome, I just like simple sdk such as Push and Aurora, and I don't want to go to various rom manufacturers to apply for a circle"
  答：uniPush不建立在申请手机厂商授权的基础上，如果你不申请那些，使用起来和用普通的个推是一样的。但是要特别注意，推送行业的现状就是：**不集成rom厂商的推送，就无法在App离线时发送push。**。按照普通个推模式使用，后果就是在华为、小米、OPPO、VIVO、魅族上发不了离线消息。
  A: uniPush is not based on applying for authorization from a mobile phone manufacturer. If you don't apply for those, it will be the same as using an ordinary push button. However, special attention should be paid to the current status of the push industry: **Without integrating the push of the rom manufacturer, it is impossible to send push when the app is offline. **. According to the ordinary push mode, the consequence is that offline messages cannot be sent on Huawei, Xiaomi, OPPO, VIVO, and Meizu.

- 常见误解 3：“uniPush的送达率还是不够，是否可以付费来提升送达率，个推是有付费提升送达率的方法的”
- Common Misunderstanding 3: "The delivery rate of uniPush is still not enough. Is it possible to pay to increase the delivery rate? There is a way to pay to increase the delivery rate of uniPush"
  答：前文已经说了。个推的付费提升送达率的产品就是 vip push，而uniPush就是个推的 vip Push。DCloud 通过谈判免费给 DCloud的开发者使用了。
  A: It has been mentioned above. The paid product of a push to improve the delivery rate is vip push, and uniPush is a push vip push. DCloud is freely available to DCloud developers through negotiation.

- 常见误解 4：开通 uniPush 要实名认证，还得传身份证，开通普通个推不用这么麻烦。
- Common Misunderstanding 4: To open uniPush, you need real-name authentication, and you have to pass your ID card. You don't need to be so troublesome to open a normal push.
  答：此问题之前曾存在，后来已经处理，保持和个推需要的身份信息相同，不再需要身份证。
  A: This problem existed before, and it has been dealt with later, keeping the same identity information as Getui, and no longer needing an ID card.

### 技术架构
### Technology Architecture

![img](https://native-res.dcloud.net.cn/images/uniapp/push/architecture.png)

### 名词解释
### Glossary

| 名词     | 解释                                                         |
| Noun | Explanation |
| -------- | ------------------------------------------------------------ |
| 通知消息 | 指定通知标题和内容后，由个推SDK自动处理在系统通知栏中展示通知栏消息，同时响铃或震动提醒用户(响铃和震动受手机系统的设置状态影响)。 |
| Notification Message | After specifying the notification title and content, the Getui SDK will automatically display the notification bar message in the system notification bar, and at the same time ring or vibrate to remind the user (the ringing and vibration are affected by the setting status of the mobile phone system). |
| 透传消息 | 即自定义消息，消息体格式客户可以自己定义，如纯文本、json 串等。透传消息个推只传递数据，不做任何处理，客户端接收到透传消息后需要自己去做后续动作处理，如通知栏展示、弹框等。 |
| Transparent message | That is, a custom message, the message body format can be defined by the customer, such as plain text, json string, etc. The pass-through message only transmits data and does not do any processing. After the client receives the pass-through message, it needs to do follow-up actions by itself, such as notification bar display, pop-up box, etc. |
| ClientId | 个推业务层中的对外用户标识，用于标识客户端身份，由第三方客户端获取并保存到第三方服务端，是个推 SDK 的唯一识别号，简称 CID。 |
| ClientId | The external user ID in the Getui business layer, used to identify the client identity. It is obtained by the third-party client and saved to the third-party server. It is the unique identification number of the Getui SDK, or CID for short. |
| 在线推送 | app 在前台打开运行时，通过个推渠道下发消息。                 |
| Online Push | When the app opens and runs in the foreground, it sends messages through a push channel. |
| 离线推送 | app在后台、锁屏、进程关闭时，通过厂商渠道下发消息。若未集成 android 多厂商、未配置 ios 推送证书，则该机型无法使用离线推送。 |
| Offline push | When the app is in the background, locked screen, or the process is closed, messages are sent through the manufacturer's channel. If the android multi-vendor is not integrated and the ios push certificate is not configured, the model cannot use offline push. |

更多名词解释参考：[个推名词解释](https://docs.getui.com/getui/more/word/)
For more noun explanation reference: [Tweet noun explanation](https://docs.getui.com/getui/more/word/)

### 消息推送流程
### Message push process

![img](https://native-res.dcloud.net.cn/images/uniapp/push/dispatch.svg)

## 一、客户端集成
## 1. Client integration

### 1.1 开通 unipush 推送服务
### 1.1 Enable unipush push service

unipush 内部封装好了个推及主流厂商 SDK，开发者在使用前必须开通相关服务：[点此查看如何开通UniPush推送服务](https://ask.dcloud.net.cn/article/35716) 。
Unipush has internally packaged a push and mainstream manufacturer SDK, and developers must activate related services before using it: [Click here to see how to activate the UniPush push service](https://ask.dcloud.net.cn/article/35716) .

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

在【Uni Push】-【配置管理】-【故障排查】-【 状态查询】中输入CID 查询，看是否会返回 devicetoken 。
Enter the CID query in [Uni Push]-[Configuration Management]-[Troubleshooting]-[Status Query] to see if the devicetoken will be returned.

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

若您在测试过程中遇到无法收到推送的情况，请先按照 [Unipush常见问题](https://ask.dcloud.net.cn/article/36611) 中的排查思路自助排查一下，例如常见问题：**安卓离线收不到通知** 。
If you encounter a situation where you cannot receive push notifications during the test, please follow the troubleshooting ideas in [Unipush FAQs](https://ask.dcloud.net.cn/article/36611) to check by yourself, for example, common problems Problem: **Android offline can't receive notifications**.

### 2.1 开发者中心后台Web页面推送
### 2.1 Web page push in the background of the developer center

登录 [DCloud开发者中心](https://dev.dcloud.net.cn/)，在“我创建的应用”列表中选择应用，左侧选择“Uni Push”，打开消息推送页面。
Log in to [DCloud Developer Center](https://dev.dcloud.net.cn/), select an app in the "Apps I Created" list, and select "Uni Push" on the left to open the message push page.

**测试在线通知消息推荐您使用：**
**Testing online notification messages is recommended for you to use:**

![img](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/send_notification.png)



**测试离线通知消息推荐您使用：**
**Test offline notification messages Recommended for you to use:**

![img](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/passthrough.png)



### 2.2 个推服务端 api 推送
### 2.2 push server api push

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

服务端集成时首先需要获取 AppId、AppKey、MasterSecret 参数，登录 [DCloud开发者中心](https://dev.dcloud.net.cn/) ，在“Uni Push”下的“应用配置”页面中获取，如下图所示：
When integrating the server, you first need to obtain the AppId, AppKey, and MasterSecret parameters, log in to [DCloud Developer Center](https://dev.dcloud.net.cn/), and obtain them on the "App Configuration" page under "Uni Push" ,As shown below:

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

component=io.dcloud.HBuilder/io.dcloud.PandoraEntry，其中 io.dcloud.HBuilder 为 App 包名，需要替换为自己 App 的包名，与 App 云端打包界面设置的 Android 包名一致。
component=io.dcloud.HBuilder/io.dcloud.PandoraEntry, where io.dcloud.HBuilder is the app package name, which needs to be replaced with the package name of your own app, which is the same as the Android package name set in the app cloud packaging interface.

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

UniPush推送服务对透传消息的数据符合以下格式时做了特殊处理，会将如下格式的透传消息，直接在通知栏中展示通知。
UniPush push service makes special processing for the data of the transparently transmitted message in the following format, and will directly display the notification in the notification bar of the transparently transmitted message in the following format.

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

UniPush 推送服务已经封装好 iOS&Android 平台的原生集成工作，开发者只需要调用 JS 代码处理推送消息的业务逻辑。
The UniPush push service has already encapsulated the native integration work of the iOS & Android platform, and developers only need to call the JS code to process the business logic of the push message.

若您需要在客户端接收处理推送 UniPush 推送内容，请先阅读了解此对接指南开头的 “**消息推送流程**”，客户端回调处理可参考：[在 uni-app 中使用 UniPush](https://ask.dcloud.net.cn/article/35726) 。
If you need to receive and process UniPush push content on the client side, please read and understand "**Message Push Process**" at the beginning of this linking guide. For client-side callback processing, please refer to: [Using UniPush in uni-app](https ://ask.dcloud.net.cn/article/35726) .

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

  - 服务端 rest-v2 设置示例，注意Unipush用户的class的值请固定使用'io.dcloud.PandoraEntry'
  - Example of server-side rest-v2 setting, please use 'io.dcloud.PandoraEntry' for the value of the Unipush user's class

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

根据接收到的推送消息处理桌面图标的角标，在uniPush后台的“iOS配置”项中可配置 badge 参数对角标进行设置，可取值：
The corner label of the desktop icon is processed according to the received push message. In the "iOS Configuration" item of the uniPush background, the badge parameter can be configured to set the corner label. The possible values are:

- “+1”，表示当前角标+1；
- "+1", indicating that the current index is +1;
- “-1”，表示当前角标-1（角标>=0）；
- "-1", which means the current index is -1 (the index >=0);
- “3”，表示指定角标值，值必须>=0。
- "3", indicating the specified superscript value, the value must be >=0.

默认（不设置badge参数）则角标数字不变，也可以在应用运行期调用5+ API [plus.runtime.setBadgeNumber](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.setBadgeNumber) 动态设置角标数字。
By default (without setting the badge parameter), the badge number remains unchanged, or you can call the 5+ API [plus.runtime.setBadgeNumber](https://www.html5plus.org/doc/zh_cn/runtime.html# plus.runtime.setBadgeNumber) to dynamically set the badge number.



## 注意事项
## Precautions
### 推送通道选择逻辑  
### Push channel selection logic
- Android平台  
- Android platform
  **APP在线（个推推送通道可用）**  
  **APP is online (a push channel is available)**
  推送通知和透传消息都使用个推的推送通道下发推送消息。  
  Both push notifications and pass-through messages use a push channel to deliver push messages.
  **APP离线（个推推送通道不可用）**  
  **APP is offline (Push channel is unavailable)**
  推送通知，使用个推离线推送通道，离线消息会存储在消息离线库，离线时间内APP在线后下发推送消息。
  Push notifications, using a push offline push channel, offline messages will be stored in the offline message library, and the APP will send push messages when it is online during the offline time.
  透传消息，如果符合厂商推送的厂商手机（配置了手机厂商推送参数并且在对应厂商的手机上），则使用厂商推送通道下发推送消息；否则使用个推的离线推送通道，离线消息会存储在消息离线库，离线时间内APP在线后下发推送消息。
  Transparent transmission of the message, if it matches the manufacturer's mobile phone (configured with the mobile phone manufacturer's push parameters and on the mobile phone of the corresponding manufacturer), then use the manufacturer's push channel to deliver the push message; otherwise, use the offline push channel of Personal Push, and the offline message will be stored. In the message offline library, the APP will send push messages after the APP is online during the offline time.

- iOS平台  
- iOS platform
推送通知，uniPush后台管理界面中不支持下发此类型，个推提供的服务端API支持下发推送通知（设置APN参数则通过苹果的APNS通道，否则使用个推通道）。  
Push notification. This type of push notification is not supported in the uniPush background management interface. The server-side API provided by Ge Push supports the sending of push notifications (the APN parameter is set through Apple's APNS channel, otherwise the Ge Push channel is used).
透传消息，设置APN参数则通过苹果的APNS通道下发推送消息，没有设置APN参数则使用个推的推送通道下发。
The message is transparently transmitted. If the APN parameter is set, the push message will be sent through Apple's APNS channel. If the APN parameter is not set, the push message will be sent through the Push channel.

### Android平台厂商通道
### Android platform vendor channel
#### 华为厂商通道
#### Huawei Vendor Channel
在华为手机上必须安装“华为移动服务”才能使用华为的厂商推送通道，首先确保手机上已经安装“华为移动服务”应用。
To use Huawei's manufacturer push channel, you must install "Huawei Mobile Services" on a Huawei mobile phone. First, make sure that the "Huawei Mobile Services" application has been installed on your mobile phone.
如果在华为手机应用退出后无法接收到推送消息，需要确保：
If you cannot receive push messages after exiting the Huawei mobile app, you need to ensure that:

1. 机型版本要求：华为rom且华为rom版本大于等于 emui4.1, 华为移动服务(可在应用列表或华为应用市场中查看)版本大于等于 2.5.2。
1. Model version requirements: Huawei rom and Huawei rom version greater than or equal to emui4.1, Huawei mobile service (can be viewed in the app list or Huawei app store) version greater than or equal to 2.5.2.
2. 需要提交云打包，打自有证书-签名包（包名要确认与华为平台一致）。
2. You need to submit the cloud package and type your own certificate-signature package (the package name must be consistent with the Huawei platform).
3. 华为平台【我的项目】-【项目设置】-【常规】中填写“SHA256证书指纹”，点右侧对勾保存证书指纹。
3. On the Huawei platform [My Project] - [Project Settings] - [General], fill in "SHA256 Certificate Fingerprint", and click the check mark on the right to save the certificate fingerprint.
4. emui10的华为手机，检查手机通知权限设置，将【营销通知】的权限也打开，不要默认静默，静默的话是需要下拉通知栏才能看到。
4. For Huawei mobile phones of emui10, check the notification permission settings of the mobile phone, and also enable the permission of [Marketing Notification]. Do not default to silent. If it is silent, you need to pull down the notification bar to see it.
5. 手机通知栏消息是否有存满，清除已存的通知栏消息看下新的消息是否能展示。
5. Check whether the message in the notification bar of the mobile phone is full, clear the existing message in the notification bar to see if the new message can be displayed.
6. 清除华为移动服务（HMS Core）（apk（手机设置--应用--应用管理--点击显示系统进程--搜索（华为移动服务）--存储--清空缓存））的缓存
6. Clear the cache of Huawei Mobile Services (HMS Core) (apk (Phone Settings--Apps--App Management--click to display system process--Search (Huawei Mobile Services)--Storage--Clear cache))


HBuilderX3.0.7 之后，华为除了配置原有的厂商信息之外，需要新增配置  agconnect-services.json文件。
After HBuilderX3.0.7, in addition to configuring the original vendor information, Huawei needs to add a new configuration agconnect-services.json file.

该文件，需要从华为开发者后台--项目设置界面下载  
![](https://native-res.dcloud.net.cn/images/uniapp/push/huawei-apconnect-services.png)


#### VIVO厂商通道
#### VIVO Vendor Channel
**需要在VIVO应用商店上线才能申请VIVO的厂商推送**
**You need to be online in the VIVO app store to apply for VIVO's manufacturer push**
注意事项：
Precautions:

- vivo【运营消息】，一个设备一天只能收到5条离线消息
- vivo [Operation News], a device can only receive 5 offline messages a day
- vivo要求：通知文案中不能带 “包含测试、test字符”、“纯数字”、“纯表情”、“符号”或者“符号+数 字”、“表情+数字”、“表情＋符号” 。
- vivo requirements: The notification text cannot contain "contains test, test characters", "pure numbers", "pure emoticons", "symbols", or "symbols + numbers", "emoticons + numbers", and "emoticons + symbols".
- 1个自然日内相同文案的运营消息给同个设备发，vivo会在客户端做去重处理，导致消息不展示
- If an operation message with the same copywriting is sent to the same device within 1 natural day, vivo will deduplicate it on the client side, resulting in the message not being displayed.
- 支持vivo推送功能HBuilderX最低版2.1.0及以上。
- Support vivo push function HBuilderX minimum version 2.1.0 and above.

具体请参考图中数据  
![](https://native-res.dcloud.net.cn/images/uniapp/push/vivo-datas.png)


#### OPPO厂商通道
#### OPPO Manufacturer Channel
**需要在OPPO应用商店上线才能申请OPPO的厂商推送**
**You need to be online in the OPPO app store to apply for OPPO's manufacturer push**

并且有以下要求：
and has the following requirements:
- 机型系统要求：oppo colorOS rom且版本号大于等于3.1
- Model system requirements: oppo colorOS rom and the version number is greater than or equal to 3.1
- 检查手机通知权限是否打开，oppo是默认关闭的，将通知权限下的【Default】通道权限也打开。
- Check whether the mobile phone notification permission is turned on. Oppo is turned off by default, and the [Default] channel permission under the notification permission is also turned on.
- 手机系统时间是否正常
- Whether the system time of the mobile phone is normal


#### 小米厂商通道
#### Xiaomi manufacturer channel
- 机型版本要求：小米rom且小米服务框架（包名：com.xiaomi.xmsf）版本号⼤于等于 105 
- Model version requirements: Xiaomi rom and Xiaomi service framework (package name: com.xiaomi.xmsf) version number greater than or equal to 105
- 检查手机通知权限设置，小米有不重要通知功能，部分消息可能会存在通知栏不重要通知里
- Check the notification permission settings of the phone, Xiaomi has the unimportant notification function, some messages may be stored in the unimportant notification in the notification bar

#### 魅族厂商通道
#### Meizu Manufacturer Channel
- 机型版本要求：魅族rom且魅族rom版本⼤于等于5.x
- Model version requirements: Meizu rom and Meizu rom version greater than or equal to 5.x
- 检查消息是否存入了魅族手机右上角【魅族消息盒子】中
- Check if the message is stored in the [Meizu Message Box] in the upper right corner of the Meizu phone
- 清除缓存：魅族手机在设置 ---> 应用管理 ---> 所有应用 ---> 推送服务 ，点击里面的清除数据，然后再重新安装一下应用。
- Clear the cache: On the Meizu phone, go to Settings ---> Application Management ---> All Apps ---> Push Services , click Clear Data in it, and then reinstall the application.


#### 谷歌FCM通道
#### Google FCM channel
需Android手机已经安装GMS，且手机网络可以连通谷歌FCM推送服务器。
The Android phone needs to have GMS installed, and the mobile phone network can be connected to the Google FCM push server.
详细教程另见：[https://ask.dcloud.net.cn/article/37356](https://ask.dcloud.net.cn/article/37356)。
For detailed tutorials, see: [https://ask.dcloud.net.cn/article/37356](https://ask.dcloud.net.cn/article/37356).

#### 其它厂商通道
#### Other Vendor Channels
如果应用在线可以接收到推送消息，离线时使用厂商通道无法接收到推送消息，可参考**UniPush厂商通道常见问题[https://ask.dcloud.net.cn/article/36611](https://ask.dcloud.net.cn/article/36611)**
If the application can receive push messages online, but cannot receive push messages using the vendor channel when offline, please refer to **UniPush vendor channel FAQ [https://ask.dcloud.net.cn/article/36611](https:/ /ask.dcloud.net.cn/article/36611)**

**最后也可以登录[个推官网](https://www.getui.com/)，或使用微信扫描下面二维码，进行技术咨询**  
**Finally, you can also log in to [Getui Official Website](https://www.getui.com/), or use WeChat to scan the QR code below for technical consultation**
![](https://native-res.dcloud.net.cn/images/uniapp/push/getui-service.jpg)



## 其他相关资源
## Other related resources
- 检查应用是否被授予推送权限：[https://ext.dcloud.net.cn/plugin?id=594](https://ext.dcloud.net.cn/plugin?id=594)
- Check if the app is granted push permission: [https://ext.dcloud.net.cn/plugin?id=594](https://ext.dcloud.net.cn/plugin?id=594)
- 开启关闭推送服务：[https://ext.dcloud.net.cn/plugin?id=727](https://ext.dcloud.net.cn/plugin?id=727)
- Enable and disable push service: [https://ext.dcloud.net.cn/plugin?id=727](https://ext.dcloud.net.cn/plugin?id=727)
- 自定义推送铃声：[https://ext.dcloud.net.cn/plugin?id=7482](https://ext.dcloud.net.cn/plugin?id=7482)
- Custom push ringtone: [https://ext.dcloud.net.cn/plugin?id=7482](https://ext.dcloud.net.cn/plugin?id=7482)
- 如何自定义推送通知的图标：[https://uniapp.dcloud.net.cn/unipush-custom-icon.html](https://uniapp.dcloud.net.cn/tutorial/app-push-unipush.html#unipush-icons)
- How to customize push notification icons: [https://uniapp.dcloud.net.cn/unipush-custom-icon.html](https://uniapp.dcloud.net.cn/tutorial/app-push-unipush .html#unipush-icons)

## FAQ
- Q：5+app和wap2app需要uniPush怎么办？  
- Q: What if 5+app and wap2app need uniPush?
A：HBuilderX 2.0.3起，5+app和wap2app也支持了uniPush。
A: Since HBuilderX 2.0.3, 5+app and wap2app also support uniPush.
5+app和wap2app升级uniPush不需要改动app前端代码，只需要在HBuilderX中打开manifest.json的“SDK配置”页，在“推送”下勾选“DCloud UniPush”，并点击“配置”，在后台开通unipush服务，配置好厂商推送参数重新提交云端打包即可。后端服务器需要参考第二步对接个推推送服务。
5+app and wap2app upgrade uniPush without changing the front-end code of the app, just open the "SDK Configuration" page of manifest.json in HBuilderX, check "DCloud UniPush" under "Push", and click "Configure", in the background Activate the unipush service, configure the manufacturer's push parameters, and resubmit the cloud package. The backend server needs to refer to the second step to connect to the push service.

- Q：离线打包如何配置？  
- Q: How to configure offline packaging?
A：[Android平台App离线打包-Push](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/push?id=unipush)
A: [Android Platform App Offline Packaging-Push](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/push?id=unipush)
[iOS平台App离线打包-Push](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/push?id=unipush)
[iOS Platform App Offline Packaging-Push](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/push?id=unipush)

- Q：iOS平台如何实现应用启动后不立即弹出“发送通知”系统授权框？  
- Q: How does the iOS platform realize that the "Send Notification" system authorization box does not pop up immediately after the app is launched?
A：参考：[https://ask.dcloud.net.cn/article/36955](https://ask.dcloud.net.cn/article/36955#push)
A: Reference: [https://ask.dcloud.net.cn/article/36955](https://ask.dcloud.net.cn/article/36955#push)

- Q：为什么Android应用进入后台后（App未销毁），点击通知消息无法拉起App。      
- Q: Why after the Android app enters the background (the app is not destroyed), the app cannot be launched by clicking the notification message.
A：检查设备是否有禁止后台弹出界面，路径>>设置-应用管理-测试应用-权限管理-后台弹出界面，(一般是小米、oppo、
A: Check whether the device has a pop-up interface in the background, path >> Settings - Application Management - Test Application - Permission Management - Pop-up interface in the background, (usually Xiaomi, oppo,
vivo设备)。
vivo devices).


