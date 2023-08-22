::: warning 注意  
 您正在浏览的是老版uni-push1.0的文档。推荐升级到[uni-push2.0](unipush-v2.html)
:::

> 从HBuilderX 2.0.3 起，uni-app、5+App、wap2app均支持UniPush  
>从HBuilderX2.7.10开始，支持谷歌FCM，参考：[https://ask.dcloud.net.cn/article/37356](https://ask.dcloud.net.cn/article/37356)  



## 概述

### 产品介绍

UniPush 是 DCloud 联合个推公司推出的集成型统一推送服务，内建了苹果、华为、小米、OPPO、VIVO、魅族、谷歌 FCM 等手机厂商的系统级推送和个推等第三方推送。

国内Android的Push是一个混乱的世界，因为 Google 的 Push 服务 FCM 被墙，所以一些国内的安卓手机厂商各自做了自己的推送，比如华为、小米、OPPO、VIVO、魅族等，但还有很多国产手机厂商没有提供官方推送方案。三方独立公司如个推，则提供了独立的 push 方案。
在没有 uniPush 以前，如果只使用三方 push，会在很多国产手机上因为节电设置而无法保活 push 进程，导致无法推送。
而如果每个安卓手机的官方 Push SDK 都集成开发一遍，这么多平台，工作量会非常巨大，管理维护也很麻烦。

uniPush 解决了这个难题，开发者只需要开发一次。系统会自动在不同手机上选择最可靠的推送通道发送 push 消息，保障送达率。

UniPush 即降低了开发成本、又提高了 push 送达率，并且免费，是当前推送的最佳解决方案。

### 常见答疑

有了 unipush，开发者不应该再使用其他 push 方案了。但我们发现很多开发者有误解，导致还在错误使用其他推送。

- 常见误解 1：“uniPush的专业性，和专业的个推、极光等服务可相比吗？”

  答：uniPush 是由个推将其本来收费的 push 产品，其中重要VIP部分功能免费提供给了DCloud的开发者。它与个推 vip push 的只有 2 个区别：

  - 免费
  - 账户使用的是 DCloud 开发者账户，而无需再重新注册个推账户。个推是A股上市公司，专业性在推送领域领先。

- 常见误解 2：“uniPush好麻烦，我就喜欢个推、极光这种简单 sdk，不想去各个 rom 厂商去申请一圈”
  答：uniPush不建立在申请手机厂商授权的基础上，如果你不申请那些，使用起来和用普通的个推是一样的。但是要特别注意，推送行业的现状就是：**不集成rom厂商的推送，就无法在App离线时发送push。**。按照普通个推模式使用，后果就是在华为、小米、OPPO、VIVO、魅族上发不了离线消息。

- 常见误解 3：“uniPush的送达率还是不够，是否可以付费来提升送达率，个推是有付费提升送达率的方法的”
  答：前文已经说了。个推的付费提升送达率的产品就是 vip push，而uniPush就是个推的 vip Push。DCloud 通过谈判免费给 DCloud的开发者使用了。

- 常见误解 4：开通 uniPush 要实名认证，还得传身份证，开通普通个推不用这么麻烦。
  答：此问题之前曾存在，后来已经处理，保持和个推需要的身份信息相同，不再需要身份证。

### 技术架构

![img](https://native-res.dcloud.net.cn/images/uniapp/push/architecture.png)

### 名词解释

| 名词     | 解释                                                         |
| -------- | ------------------------------------------------------------ |
| 通知消息 | 指定通知标题和内容后，由个推SDK自动处理在系统通知栏中展示通知栏消息，同时响铃或震动提醒用户(响铃和震动受手机系统的设置状态影响)。 |
| 透传消息 | 即自定义消息，消息体格式客户可以自己定义，如纯文本、json 串等。透传消息个推只传递数据，不做任何处理，客户端接收到透传消息后需要自己去做后续动作处理，如通知栏展示、弹框等。 |
| ClientId | 个推业务层中的对外用户标识，用于标识客户端身份，由第三方客户端获取并保存到第三方服务端，是个推 SDK 的唯一识别号，简称 CID。 |
| 在线推送 | app 在前台打开运行时，通过个推渠道下发消息。                 |
| 离线推送 | app在后台、锁屏、进程关闭时，通过厂商渠道下发消息。若未集成 android 多厂商、未配置 ios 推送证书，则该机型无法使用离线推送。 |

更多名词解释参考：[个推名词解释](https://docs.getui.com/getui/more/word/)

### 消息推送流程

![img](https://native-res.dcloud.net.cn/images/uniapp/push/dispatch.svg)

## 一、客户端集成

### 1.1 开通 unipush 推送服务

unipush 内部封装好了个推及主流厂商 SDK，开发者在使用前必须开通相关服务：[点此查看如何开通UniPush推送服务](https://ask.dcloud.net.cn/article/35716) 。

**完成以上步骤后，ios 支持在线、离线推送；android 仅支持在线推送。**



### 1.2 开通离线厂商推送服务

若需要支持主流 android 厂商客户端接收离线推送，您需要完成 ：[android 多厂商配置](https://uniapp.dcloud.net.cn/unipush_vendor_config.html) 。

配置好厂商参数后请一定要提交云打包，并且使用“自有证书”打签名包；将云打包后的安装包安装到手机上，再获取cid 进行离线厂商推送测试，不可使用基座方式获取的 cid 进行离线厂商推送测试。

**注意事项：**

- 目前华为、魅族、FCM不需要发布应用市场上就可使用离线推送(注：离线推送有条数限制)，其他厂商通道需要上架后才能使用。



### 1.3 集成验证

#### 1.3.1 cid 获取

在应用安装后第一次运行时应该调用 [5+ API](https://www.html5plus.org/doc/zh_cn/push.html) 的 **plus.push.getClientInfoAsync** 方法获取客户端标识。

如果获取的 cid 为空，说明客户端向推送服务器注册还未完成，可以使用 setTimeout 延时重试。

```javascript
plus.push.getClientInfoAsync((info) => {
     let cid = info["clientid"];
});
```



#### 1.3.2 确认离线厂商是否可用

若不需要使用离线推送，则可忽略此步骤。

在【Uni Push】-【配置管理】-【故障排查】-【 状态查询】中输入CID 查询，看是否会返回 devicetoken 。

![img](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/devicetoken1.png)

**若返回 devicetoken ：**

可以开始进行离线推送测试。



**若未返回 devicetoken ：**

说明当前未正常集成厂商，无法使用离线推送功能。

- 检查后台是否有配置厂商参数（配置完参数需要云打包后生效）

![img](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/devicetoken2.png)

华为（包含荣耀）机型需要额外检查：

1. 需要在华为开发者后台配置正确的 sha256 指纹证书
2. 云打包用自有证书打正式签名包
3. 华为开发者后台包名跟客户端包名需要保持一致
4. 厂商推送设置-华为厂商，必须上传agconnect-services.json
5. 在华为平台是否开通了华为推送服务
6. 保存完参数，需要重新提交云端打包

**特别注意**

华为厂商平台更换应用包名或者证书时，需要同步更新云端的agconnect-services.json和包名等信息，否则将导致打包失败。



## 二、服务端推送消息

开发者可通过以下三种方式推送消息，选择其中一种即可。

若您在测试过程中遇到无法收到推送的情况，请先按照 [Unipush常见问题](https://ask.dcloud.net.cn/article/36611) 中的排查思路自助排查一下，例如常见问题：**安卓离线收不到通知** 。

### 2.1 开发者中心后台Web页面推送

登录 [DCloud开发者中心](https://dev.dcloud.net.cn/)，在“我创建的应用”列表中选择应用，左侧选择“Uni Push”，打开消息推送页面。

**测试在线通知消息推荐您使用：**

![img](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/send_notification.png)



**测试离线通知消息推荐您使用：**

![img](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/passthrough.png)



### 2.2 个推服务端 api 推送

#### 2.2.1 服务端消息下发流程（必读）

- **当 CID 在线(即 app 在前台打开运行)时**：

  消息通过个推通道下发到客户端，具体到服务端 Rest-V2 代码中，即 push_message 中的 notification（通知） 或 transmission（透传） 内容传递给客户端。

- **当 CID 离线(即 app 在后台、锁屏、进程关闭)时：**

  有开启对应厂商离线功能的，消息将通过个推侧请求对应厂商侧的服务端，具体到服务端 Rest-V2 代码中，即 push_channel 中的通知内容传递给厂商，实际的消息是经由厂商服务器下发至客户端；若服务端 push_channel 不传值，则无法接收离线消息。

  对于没有开启对应厂商功能的，消息将存在个推的离线库中，等待 CID 在线，再通过个推通道下发到客户端。

#### 2.2.2 服务端api使用

个推服务端接口文档可查看：[服务端 RestAPI V2](https://docs.getui.com/getui/server/rest_v2/push/) ，支持以下 2 种方式调用，选择其中一种即可，推荐您使用 Http 请求。

服务端集成时首先需要获取 AppId、AppKey、MasterSecret 参数，登录 [DCloud开发者中心](https://dev.dcloud.net.cn/) ，在“Uni Push”下的“应用配置”页面中获取，如下图所示：

![img](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/app_config_info.png)

**Http 请求：**参数详情可查看：[服务端 RestAPI V2](https://docs.getui.com/getui/server/rest_v2/push/)

参数示例：

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

个推服务端  SDK 的主要目标是提升开发者在服务端集成个推推送服务的开发效率。 开发者不需要进行复杂编程即可使用个推推送服务的各项常用功能，SDK 可以自动帮您满足调用过程中所需的鉴权、组装参数、发送HTTP请求等非功能性要求，目前仅支持 Java 和 PHP 语言。

在使用以下代码前请先查看 [个推服务端 Java SDK ](https://docs.getui.com/getui/server/rest_v2/service_sdk/) ，配置使用最新版 SDK 。若您想查看详细的字段描述，或者想集成 PHP SDK 可查看：[服务端 RestAPI V2 ](https://docs.getui.com/getui/server/rest_v2/push/) 。

Java SDK 参数示例：

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
        apiConfiguration.setAppId("请填写AppId");
        apiConfiguration.setAppKey("请填写AppKey");
        apiConfiguration.setMasterSecret("请填写MasterSecret");
        apiConfiguration.setDomain("https://restapi.getui.com/v2/");
        // 实例化ApiHelper对象，用于创建接口对象
        ApiHelper apiHelper = ApiHelper.build(apiConfiguration);
        // 创建对象，建议复用。目前有PushApi、StatisticApi、UserApi
        PushApi pushApi = apiHelper.creatApi(PushApi.class);
        //根据cid进行单推
        PushDTO<Audience> pushDTO = new PushDTO<Audience>();
        // 设置推送参数，requestid需要每次变化唯一
        pushDTO.setRequestId(System.currentTimeMillis() + "");
        Settings settings = new Settings();
        pushDTO.setSettings(settings);
        //消息有效期，走厂商消息必须设置该值
        settings.setTtl(3600000);

        //在线走个推通道时推送的消息体
        PushMessage pushMessage = new PushMessage();
        pushDTO.setPushMessage(pushMessage);
        //此格式的透传消息由 unipush 做了特殊处理，会自动展示通知栏。开发者也可自定义其它格式，在客户端自己处理。
        pushMessage.setTransmission(" {title:\"标题\",content:\"内容\",payload:\"自定义数据\"}");
        // 设置接收人信息
        Audience audience = new Audience();
        pushDTO.setAudience(audience);
        audience.addCid("请填写cid");
        //设置离线推送时的消息体
        PushChannel pushChannel = new PushChannel();
        //安卓离线厂商通道推送的消息体
        AndroidDTO androidDTO = new AndroidDTO();
        Ups ups = new Ups();
        ThirdNotification thirdNotification = new ThirdNotification();
        ups.setNotification(thirdNotification);
        thirdNotification.setTitle("安卓离线展示的标题");
        thirdNotification.setBody("安卓离线展示的内容");
        thirdNotification.setClickType("intent");
        //注意：intent参数必须按下方文档（特殊参数说明）要求的固定格式传值，intent错误会导致客户端无法收到消息
        thirdNotification.setIntent("请填写固定格式的intent");
        androidDTO.setUps(ups);
        pushChannel.setAndroid(androidDTO);

        //ios离线apn通道推送的消息体
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

##### 2.2.3.1 Intent

鉴于各厂商SDK打开应用自定义页面有多种方式，且有些方式互不兼容，为了保持统一并且方便开发者，个推提供一种标准且唯一的打开App 内自定义页面方式，通过服务端 API 指定 intent 参数。

使用厂商推送下发推送消息必须设置 intent，该数据格式是Android原生Intent对象序列化由来。具体可参考 [详情](https://blog.csdn.net/u011068702/article/details/51406572)。并且intent须符合以下格式，此格式时在个推定义额基础上二次封装，所以必须以此格式为准。不按此格式设置 intent 可能出现用户点击推送消息无法启动App 的问题，并且离线情况下click事件无法得到响应。
intent 数据格式如下：

```javascript
intent://io.dcloud.unipush/?#Intent;scheme=unipush;launchFlags=0x4000000;component=io.dcloud.HBuilder/io.dcloud.PandoraEntry;S.UP-OL-SU=true;S.title=测试标题;S.content=测试内容;S.payload=test;end
```

**注意事项：**

component=io.dcloud.HBuilder/io.dcloud.PandoraEntry，其中 io.dcloud.HBuilder 为 App 包名，需要替换为自己 App 的包名，与 App 云端打包界面设置的 Android 包名一致。

![img](https://native-res.dcloud.net.cn/images/uniapp/push/packagename2.png)

其它说明：

- S.title=的值为推送消息标题，对应5+ API中 [PushMessage](https://www.html5plus.org/doc/zh_cn/push.html#plus.push.PushMessage) 对象的 title 属性值。
- S.content=的值为推送消息内容，对应5+ API中 [PushMessage ](https://www.html5plus.org/doc/zh_cn/push.html#plus.push.PushMessage)对象的 content 属性值。
- S.payload=的值为推送消息的数据，对应5+ API中 [PushMessage](https://www.html5plus.org/doc/zh_cn/push.html#plus.push.PushMessage) 对象的 payload 属性值。
- launchFlags=0x4000000字段，是为了解决接收多条通知后点击可能无法触发 click 事件的问题。



##### 2.2.3.2 特殊透传消息

UniPush推送服务对透传消息的数据符合以下格式时做了特殊处理，会将如下格式的透传消息，直接在通知栏中展示通知。

**注意事项：**

- 只适用于安卓，ios 仍需要开发者手动在 receive 透传回调中创建通知；
- 下列格式的透传消息，消息到达时不会进入 receive 回调，只有点击消息激活 App 时触发"click"事件。

```json
{"title": "xxx","content": "xxx","payload": "xxx"}
```



### 2.3 uniCloud开发服务器

使用封装好的服务器端开发易用插件，详情可查看：[uniPush的uniCloud版【V2】](https://ext.dcloud.net.cn/plugin?id=1680)



## 三、客户端处理推送消息

### 3.1 支持消息范围

| 客户端  | 个推通知 | 个推透传 | 厂商通知 | 厂商透传 |
| ------- | -------- | -------- | -------- | -------- |
| android | 支持     | 支持     | 支持     | 不支持   |
| ios     | 不支持   | 支持     | 支持     | 不支持   |

### 3.2 客户端 api

#### 3.2.1 消息处理

UniPush 推送服务已经封装好 iOS&Android 平台的原生集成工作，开发者只需要调用 JS 代码处理推送消息的业务逻辑。

若您需要在客户端接收处理推送 UniPush 推送内容，请先阅读了解此对接指南开头的 “**消息推送流程**”，客户端回调处理可参考：[在 uni-app 中使用 UniPush](https://ask.dcloud.net.cn/article/35726) 。

**注意事项：**

- 由于 ios 系统的限制，ios app 在线时，只能推送透传消息。需要开发者在客户端 receive 透传回调中，接收透传消息并根据自身业务场景进行消息的展示方式处理，默认不处理的话是没有任何展示的，透传消息个推只负责传递。

**其它**

- 使用[条件编译](https://uniapp.dcloud.io/platform)直接调用 5+ Push 接口，参考[5+ APP推送开发指南](https://ask.dcloud.net.cn/article/34)
- uni 的客户端 js api 仍然是 plus.push，之前使用 plus.push 开发的代码仍然可以使用。

#### 3.2.2 应用桌面图标的角标

对于支持角标设置的机型，app 在线推送时可调用 5+ API plus.runtime.setBadgeNumber 设置或清零角标。

**Android 平台**

不同 ROM 接收推送消息对桌面图标的角标处理逻辑存在差别，安卓厂商离线角标支持情况如下：

- oppo/魅族，部分手机系统上能设置角标圆点，没有数字角标的功能。

- 小米系统自带离线通知数字角标展示功能，默认+1处理，打开清零。

- vivo高版本系统自带离线通知数字角标展示功能，默认+1处理，打开清零，低版本没有角标功能。

- 华为角标需服务端api进行字段设置，客户端需要手动设置角标数为0

  - add方式支持版本： **EMUI版本8.0.0且推送服务应用版本 8.0.0及以上**

  - 服务端 rest-v2 设置示例，注意Unipush用户的class的值请固定使用'io.dcloud.PandoraEntry'

    ```js
    {
        "android": {
            "ups": {
                "notification": {
                    // ...其他push_channel参数略
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

根据接收到的推送消息处理桌面图标的角标，在uniPush后台的“iOS配置”项中可配置 badge 参数对角标进行设置，可取值：

- “+1”，表示当前角标+1；
- “-1”，表示当前角标-1（角标>=0）；
- “3”，表示指定角标值，值必须>=0。

默认（不设置badge参数）则角标数字不变，也可以在应用运行期调用5+ API [plus.runtime.setBadgeNumber](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.setBadgeNumber) 动态设置角标数字。



## 注意事项
### 推送通道选择逻辑  
- Android平台  
  **APP在线（个推推送通道可用）**  
  推送通知和透传消息都使用个推的推送通道下发推送消息。  
  **APP离线（个推推送通道不可用）**  
  推送通知，使用个推离线推送通道，离线消息会存储在消息离线库，离线时间内APP在线后下发推送消息。
  透传消息，如果符合厂商推送的厂商手机（配置了手机厂商推送参数并且在对应厂商的手机上），则使用厂商推送通道下发推送消息；否则使用个推的离线推送通道，离线消息会存储在消息离线库，离线时间内APP在线后下发推送消息。

- iOS平台  
推送通知，uniPush后台管理界面中不支持下发此类型，个推提供的服务端API支持下发推送通知（设置APN参数则通过苹果的APNS通道，否则使用个推通道）。  
透传消息，设置APN参数则通过苹果的APNS通道下发推送消息，没有设置APN参数则使用个推的推送通道下发。

### Android平台厂商通道
#### 华为厂商通道
在华为手机上必须安装“华为移动服务”才能使用华为的厂商推送通道，首先确保手机上已经安装“华为移动服务”应用。
如果在华为手机应用退出后无法接收到推送消息，需要确保：

1. 机型版本要求：华为rom且华为rom版本大于等于 emui4.1, 华为移动服务(可在应用列表或华为应用市场中查看)版本大于等于 2.5.2。
2. 需要提交云打包，打自有证书-签名包（包名要确认与华为平台一致）。
3. 华为平台【我的项目】-【项目设置】-【常规】中填写“SHA256证书指纹”，点右侧对勾保存证书指纹。
4. emui10的华为手机，检查手机通知权限设置，将【营销通知】的权限也打开，不要默认静默，静默的话是需要下拉通知栏才能看到。
5. 手机通知栏消息是否有存满，清除已存的通知栏消息看下新的消息是否能展示。
6. 清除华为移动服务（HMS Core）（apk（手机设置--应用--应用管理--点击显示系统进程--搜索（华为移动服务）--存储--清空缓存））的缓存


HBuilderX3.0.7 之后，华为除了配置原有的厂商信息之外，需要新增配置  agconnect-services.json文件。

该文件，需要从华为开发者后台--项目设置界面下载  
![](https://native-res.dcloud.net.cn/images/uniapp/push/huawei-apconnect-services.png)


#### VIVO厂商通道
**需要在VIVO应用商店上线才能申请VIVO的厂商推送**
注意事项：

- vivo【运营消息】，一个设备一天只能收到5条离线消息
- vivo要求：通知文案中不能带 “包含测试、test字符”、“纯数字”、“纯表情”、“符号”或者“符号+数 字”、“表情+数字”、“表情＋符号” 。
- 1个自然日内相同文案的运营消息给同个设备发，vivo会在客户端做去重处理，导致消息不展示
- 支持vivo推送功能HBuilderX最低版2.1.0及以上。

具体请参考图中数据  
![](https://native-res.dcloud.net.cn/images/uniapp/push/vivo-datas.png)


#### OPPO厂商通道
**需要在OPPO应用商店上线才能申请OPPO的厂商推送**

并且有以下要求：
- 机型系统要求：oppo colorOS rom且版本号大于等于3.1
- 检查手机通知权限是否打开，oppo是默认关闭的，将通知权限下的【Default】通道权限也打开。
- 手机系统时间是否正常


#### 小米厂商通道
- 机型版本要求：小米rom且小米服务框架（包名：com.xiaomi.xmsf）版本号⼤于等于 105 
- 检查手机通知权限设置，小米有不重要通知功能，部分消息可能会存在通知栏不重要通知里

#### 魅族厂商通道
- 机型版本要求：魅族rom且魅族rom版本⼤于等于5.x
- 检查消息是否存入了魅族手机右上角【魅族消息盒子】中
- 清除缓存：魅族手机在设置 ---> 应用管理 ---> 所有应用 ---> 推送服务 ，点击里面的清除数据，然后再重新安装一下应用。


#### 谷歌FCM通道
需Android手机已经安装GMS，且手机网络可以连通谷歌FCM推送服务器。
详细教程另见：[https://ask.dcloud.net.cn/article/37356](https://ask.dcloud.net.cn/article/37356)。

#### 其它厂商通道
如果应用在线可以接收到推送消息，离线时使用厂商通道无法接收到推送消息，可参考**UniPush厂商通道常见问题[https://ask.dcloud.net.cn/article/36611](https://ask.dcloud.net.cn/article/36611)**

**最后也可以登录[个推官网](https://www.getui.com/)，或使用微信扫描下面二维码，进行技术咨询**  
![](https://native-res.dcloud.net.cn/images/uniapp/push/getui-service.jpg)



## 其他相关资源
- 检查应用是否被授予推送权限：[https://ext.dcloud.net.cn/plugin?id=594](https://ext.dcloud.net.cn/plugin?id=594)
- 开启关闭推送服务：[https://ext.dcloud.net.cn/plugin?id=727](https://ext.dcloud.net.cn/plugin?id=727)
- 自定义推送铃声：[https://ext.dcloud.net.cn/plugin?id=7482](https://ext.dcloud.net.cn/plugin?id=7482)
- 如何自定义推送通知的图标：[https://uniapp.dcloud.net.cn/unipush-custom-icon.html](https://uniapp.dcloud.net.cn/tutorial/app-push-unipush.html#unipush-icons)

## FAQ
- Q：5+app和wap2app需要uniPush怎么办？  
A：HBuilderX 2.0.3起，5+app和wap2app也支持了uniPush。
5+app和wap2app升级uniPush不需要改动app前端代码，只需要在HBuilderX中打开manifest.json的“SDK配置”页，在“推送”下勾选“DCloud UniPush”，并点击“配置”，在后台开通unipush服务，配置好厂商推送参数重新提交云端打包即可。后端服务器需要参考第二步对接个推推送服务。

- Q：离线打包如何配置？  
A：[Android平台App离线打包-Push](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/push?id=unipush)
[iOS平台App离线打包-Push](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/push?id=unipush)

- Q：iOS平台如何实现应用启动后不立即弹出“发送通知”系统授权框？  
A：参考：[https://ask.dcloud.net.cn/article/36955](https://ask.dcloud.net.cn/article/36955#push)

- Q：为什么Android应用进入后台后（App未销毁），点击通知消息无法拉起App。      
A：检查设备是否有禁止后台弹出界面，路径>>设置-应用管理-测试应用-权限管理-后台弹出界面，(一般是小米、oppo、
vivo设备)。


