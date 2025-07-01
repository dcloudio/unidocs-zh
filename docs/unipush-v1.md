::: warning 注意  
 您正在浏览的是老版uni-push1.0的文档。推荐升级到[uni-push2.0](unipush-v2.md)
:::

> 从HBuilderX 2.0.3 起，uni-app、5+App、wap2app均支持`uni-push`  
> 从HBuilderX 2.7.10开始，支持谷歌FCM，参考：[如何使用FCM](uni-push/google-fcm.md)  


## uni-push介绍
[查看uni-push介绍](unipush.md)

## 一、客户端集成

### 1.1 开通 `uni-push` 推送服务

`uni-push` 内部封装好了个推及主流厂商 SDK，开发者在使用前必须开通相关服务：[点此查看如何开通uni-push推送服务](./uni-push/open.md) 。

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

在【uni-push/1.0/消息推送】-【配置管理】-【故障排查】-【状态查询】中输入CID 查询，看是否会返回 devicetoken 。

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

若您在测试过程中遇到无法收到推送的情况，请先按照 [uni-push 1.0常见问题](https://ask.dcloud.net.cn/article/36611) 中的排查思路自助排查一下，例如常见问题：**安卓离线收不到通知** 。

### 2.1 开发者中心后台Web页面推送

登录 [DCloud开发者中心](https://dev.dcloud.net.cn/)，在左侧导航选择“uni-push”-“1.0（老版本）”-“消息推送”，打开消息推送页面。

**测试在线通知消息推荐您使用：**

![img](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/send_notification.png)



**测试离线通知消息推荐您使用：**

![img](https://img-cdn-aliyun.dcloud.net.cn/uni-app/doc/dev/passthrough.png)



### 2.2 个推服务端 api 推送@request-getui

#### 2.2.1 服务端消息下发流程（必读）

- **当 CID 在线(即 app 在前台打开运行)时**：

  消息通过个推通道下发到客户端，具体到服务端 Rest-V2 代码中，即 push_message 中的 notification（通知） 或 transmission（透传） 内容传递给客户端。

- **当 CID 离线(即 app 在后台、锁屏、进程关闭)时：**

  有开启对应厂商离线功能的，消息将通过个推侧请求对应厂商侧的服务端，具体到服务端 Rest-V2 代码中，即 push_channel 中的通知内容传递给厂商，实际的消息是经由厂商服务器下发至客户端；若服务端 push_channel 不传值，则无法接收离线消息。

  对于没有开启对应厂商功能的，消息将存在个推的离线库中，等待 CID 在线，再通过个推通道下发到客户端。

#### 2.2.2 服务端api使用

个推服务端接口文档可查看：[服务端 RestAPI V2](https://docs.getui.com/getui/server/rest_v2/push/) ，支持以下 2 种方式调用，选择其中一种即可，推荐您使用 Http 请求。

服务端集成时首先需要获取 AppId、AppKey、MasterSecret 参数，登录 [DCloud开发者中心](https://dev.dcloud.net.cn/) ，在“uni-push”-“1.0（老版本）”-“消息推送”下的“应用配置”页面中获取，如下图所示：

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

`component=io.dcloud.HBuilder/io.dcloud.PandoraEntry`，其中 `io.dcloud.HBuilder` 为 App 包名，需要替换为自己 App 的包名，与 App 云端打包界面设置的 Android 包名一致。

![img](https://native-res.dcloud.net.cn/images/uniapp/push/packagename2.png)

其它说明：

- S.title=的值为推送消息标题，对应5+ API中 [PushMessage](https://www.html5plus.org/doc/zh_cn/push.html#plus.push.PushMessage) 对象的 title 属性值。
- S.content=的值为推送消息内容，对应5+ API中 [PushMessage ](https://www.html5plus.org/doc/zh_cn/push.html#plus.push.PushMessage)对象的 content 属性值。
- S.payload=的值为推送消息的数据，对应5+ API中 [PushMessage](https://www.html5plus.org/doc/zh_cn/push.html#plus.push.PushMessage) 对象的 payload 属性值。
- launchFlags=0x4000000字段，是为了解决接收多条通知后点击可能无法触发 click 事件的问题。



##### 2.2.3.2 特殊透传消息

`uni-push`推送服务对透传消息的数据符合以下格式时做了特殊处理，会将如下格式的透传消息，直接在通知栏中展示通知。

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

`uni-push` 推送服务已经封装好 iOS&Android 平台的原生集成工作，开发者只需要调用 JS 代码处理推送消息的业务逻辑。

若您需要在客户端接收处理推送 `uni-push` 推送内容，请先阅读了解此对接指南开头的 “**消息推送流程**”，客户端回调处理可参考：[在 uni-app 中使用 `uni-push`](uni-push/v1/how-to-use-in-uniapp.md) 。

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

  - 服务端 rest-v2 设置示例，注意`uni-push`用户的class的值请固定使用'io.dcloud.PandoraEntry'

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

根据接收到的推送消息处理桌面图标的角标，在`uni-push`后台的“iOS配置”项中可配置 badge 参数对角标进行设置，可取值：

- “+1”，表示当前角标+1；
- “-1”，表示当前角标-1（角标>=0）；
- “3”，表示指定角标值，值必须>=0。

默认（不设置badge参数）则角标数字不变，也可以在应用运行期调用5+ API [plus.runtime.setBadgeNumber](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.setBadgeNumber) 动态设置角标数字。



## 常见问题
[参考文档](unipush.md#faq)

**如有其它疑问，可使用微信扫描下面二维码，进行技术咨询**  
![](https://native-res.dcloud.net.cn/images/uniapp/push/getui-service.jpg)

