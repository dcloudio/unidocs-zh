> 从HBuilderX 2.0.3 起，uni-app、5+App、wap2app均支持UniPush  
>从HBuilderX2.7.10开始，支持谷歌FCM，参考：[https://ask.dcloud.net.cn/article/37356](https://ask.dcloud.net.cn/article/37356)  


## 概述
UniPush是DCloud联合个推公司推出的集成型统一推送服务，内建了苹果、华为、小米、OPPO、VIVO、魅族、谷歌FCM等手机厂商的系统级推送和个推等第三方推送。

国内Android的Push是一个混乱的世界，因为Google的Push服务FCM被墙，所以一些国内的安卓手机厂商各自做了自己的推送，比如华为、小米、OPPO、VIVO、魅族等，但还有很多国产手机厂商没有提供官方推送方案。三方独立公司如个推，则提供了独立的push方案。
在没有uniPush以前，如果只使用三方push，会在很多国产手机上因为节电设置而无法保活push进程，导致无法推送。
而如果每个安卓手机的官方Push SDK都集成开发一遍，这么多平台，工作量会非常巨大，管理维护也很麻烦。

uniPush解决了这个难题，开发者只需要开发一次。系统会自动在不同手机上选择最可靠的推送通道发送push消息，保障送达率。

UniPush即降低了开发成本、又提高了push送达率，并且免费，是当前推送的最佳解决方案。

有了unipush，开发者不应该再使用其他push方案了。但我们发现很多开发者有误解，导致还在错误使用其他推送。
- 常见误解1：“uniPush的专业性，和专业的个推、极光等服务可相比吗？”  
答：uniPush是由个推将其本来收费的vip push产品，免费提供给了DCloud的开发者。它与个推vip push的只有2个区别：
  + 免费  
  + 账户使用的是DCloud开发者账户，而无需再重新注册个推账户。个推是A股上市公司，专业性在推送领域领先。
- 常见误解2：“uniPush好麻烦，我就喜欢个推、极光这种简单sdk，不想去各个rom厂商去申请一圈”  
答：uniPush不建立在申请手机厂商授权的基础上，如果你不申请那些，使用起来和用普通的个推是一样的。但是要特别注意，推送行业的现状就是：**不集成rom厂商的推送，就无法在App离线时发送push。**。按照普通个推模式使用，后果就是在华为、小米、OPPO、VIVO、魅族上发不了离线消息。
- 常见误解3：“uniPush的送达率还是不够，是否可以付费来提升送达率，个推是有付费提升送达率的方法的”  
答：前文已经说了。个推的付费提升送达率的产品就是vip push，而uniPush就是个推的vip Push。DCloud通过谈判免费给DCloud的开发者使用了。
- 常见误解4：开通uniPush要实名认证，还得传身份证，开通普通个推不用这么麻烦。  
答：此问题之前曾存在，后来已经处理，保持和个推需要的身份信息相同，不再需要身份证。

UniPush推送服务由“个推”专为DCloud订制提供技术支持，因此在服务端的集成与“个推·消息推送”完全一致。对于之前使用个推的开发者，可以平滑的迁移到uniPush方案上。
- 注意使用UniPush推送服务必须重新向DCloud申请开通，不能使用个推的账户。
- 客户端调用的js API：[https://www.html5plus.org/doc/zh_cn/push.html](https://www.html5plus.org/doc/zh_cn/push.html)
- 服务器调用接口发送push消息：文档仍然是个推的服务器文档[http://docs.getui.com/](http://docs.getui.com/)。如果在uniCloud中使用push，还可以使用三方封装好的插件，更简单：[https://ext.dcloud.net.cn/plugin?id=1680](https://ext.dcloud.net.cn/plugin?id=1680)
- web自助发送界面：在DCloud的开发者后台：[https://dev.dcloud.net.cn/](https://dev.dcloud.net.cn/)


### 整体架构
![](https://www.dcloud.io/docs/a/unipush/architecture.png)

### 推送消息类型
通常推送消息分以下两种类型：
- 通知栏消息（推送通知）  
  UniPush推送服务定义好的推送样式、后续动作的推送方式，客户端接收到后显示在系统通知栏，用户点击通知栏消息启动APP（激活到前台）。

- 透传消息  
  即自定义消息，UniPush推送服务只负责消息传递，不做任何处理，客户端在接收到透传消息后需要自己去处理消息的展示方式或后续动作。  
  **UniPush推送服务对透传消息的数据符合以下格式时做了特殊处理，会将如下格式的透传消息，直接在通知栏中展示通知。注意：1、只适用于安卓，ios仍需要开发者手动在receive透传回调中创建通知；2、下列格式的透传消息，消息到达时不会进入receive回调，只有点击消息激活APP触发"click"事件。**
```json
{"title": "xxx","content": "xxx","payload": "xxx"}
```


## 第一步：开通UniPush推送服务  
[点此查看如何开通UniPush推送服务](https://ask.dcloud.net.cn/article/35716)

### Android平台支持厂商推送通道  
**注意：开通UniPush后，需在后台配置“厂商推送设置”，配置好厂商参数后请一定要提交云打包，并且使用“自有证书”打签名包；将云打包后的安装包安装到手机上，再获取cid 进行离线厂商推送测试，不可使用基座方式获取的cid进行离线厂商推送测试。**
![](https://www.dcloud.io/docs/a/unipush/s0.png)
获取手机厂商推送设置信息请参考：[厂商推送应用创建配置流程](https://www.dcloud.io/docs/a/unipush/manufacturer.pdf)

### iOS平台配置推送证书
iOS平台需要使用到苹果的APNS，务必在后台正确配置苹果推送证书，参考：[iOS推送证书配置](https://ask.dcloud.net.cn/article/35716#ios)

## 第二步：服务端下发推送消息

<a id="intent"/>

使用厂商推送下发推送消息必须设置intent，该数据格式是Android原生Intent对象序列化由来。具体可参考[详情](https://blog.csdn.net/u011068702/article/details/51406572)。并且intent须符合以下格式，此格式时在个推定义额基础上二次封装，所以必须以此格式为准。不按此格式设置intent可能出现用户点击推送消息无法启动APP的问题。
intent数据格式如下：
```
intent://io.dcloud.unipush/?#Intent;scheme=unipush;launchFlags=0x4000000;component=io.dcloud.HBuilder/io.dcloud.PandoraEntry;S.UP-OL-SU=true;S.title=测试标题;S.content=测试内容;S.payload=test;end
```

**component=io.dcloud.HBuilder/io.dcloud.PandoraEntry  其中io.dcloud.HBuilder为APP包名，需要替换为自己APP的包名；**  
S.title=的值为推送消息标题，对应5+ API中[PushMessage](https://www.html5plus.org/doc/zh_cn/push.html#plus.push.PushMessage)对象的title属性值；  
S.content=的值为推送消息内容，对应5+ API中[PushMessage](https://www.html5plus.org/doc/zh_cn/push.html#plus.push.PushMessage)对象的content属性值；  
S.payload=的值为推送消息的数据，对应5+ API中[PushMessage](https://www.html5plus.org/doc/zh_cn/push.html#plus.push.PushMessage)对象的payload属性值；  
**launchFlags=0x4000000字段，解决接收多条通知后点击可能无法触发click事件的问题**

注意事项：
- intent格式与个推的多厂商pdf文档中描述的不一样，以此格式为准
- intent是为了兼容Android平台的数据，但为了保持兼容性，建议iOS平台也配置此数据
- action=android.intent.action.oppopush为固定的数据，是兼容oppo设备的离线推送功能，不需要修改
- component=io.dcloud.HBuilder/io.dcloud.PandoraEntry中的io.dcloud.HBuilder为应用的包名，与App云端打包界面设置的Android包名一致
![](https://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/push/packagename.png)


### 通过开发者中心后台Web页面发送Push消息
登录[DCloud开发者中心](https://dev.dcloud.net.cn/)，在“我创建的应用”列表中选择应用，左侧选择“Uni Push”，打开消息推送页面。
**tips** 推送页面改版，详情了解[开发者中心Unipush推送页面优化介绍](https://ask.dcloud.net.cn/article/36932)
**使用厂商通道必须使用“透传消息”类型下发推送消息**
![](https://www.dcloud.io/docs/a/unipush/p1.jpg)

### 使用代码通过服务端接口推送消息
服务端集成时首先需要获取AppId、AppKey、MasterSecret参数，登录[DCloud开发者中心](https://dev.dcloud.net.cn/)，在“Uni Push”下的“应用配置”页面中获取，如下图所示：
![应用信息](https://img.cdn.aliyun.dcloud.net.cn/ask/img/UniPush/unipush-info.png)

#### 如果使用uniCloud开发服务器
已经有封装好的易用插件负责服务器端开发，见：[https://ext.dcloud.net.cn/plugin?id=1680](https://ext.dcloud.net.cn/plugin?id=1680)

#### 如果使用传统服务器开发
参考“个推·消息推送”的服务端快速集成文档[http://docs.getui.com/](http://docs.getui.com/)
![](https://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/push/unipush-api-getui.png)


**通过服务端接口下发推送消息，需要封装个推侧Rest-V2接口。应用在前台，透传内容若使用Dcloud侧要求的格式，则安卓客户端不进透传receive回调，自动创建通知栏通知；IOS开发者则需要在客户端receive透传回调中自己处理创建本地通知；应用在后台使用厂商通道需配置push_channel中的相关参数才可生效。**

以下是Rest-V2厂商推送示例：
``` json
    {
    "request_id":"请填写10到32位的id",
    "audience": {
        "cid": [
            "请填写clientid"
        ]
    },
    "settings":{
        "ttl":3600000,
        "strategy":{
            "default":1
        }
    },
    "push_message":{
         "transmission":" {title:"标题",content:"内容",payload:"自定义数据"}"
    },
    "push_channel":{
        "android":{
            "ups":{
                "notification":{
                    "title":"安卓离线展示的标题",
                    "body":"安卓离线展示的标题",
                    "click_type":"intent",
                    "intent":"intent://io.dcloud.unipush/?#Intent;scheme=unipush;launchFlags=0x4000000;component=io.dcloud.HBuilder/io.dcloud.PandoraEntry;S.UP-OL-SU=true;S.title=测试标题;S.content=测试内容;S.payload=test;end"
                }
            }
        }，
      "ios":{
            "type":"notify",
            "payload":"自定义消息",
            "aps":{
                "alert":{
                    "title":"苹果离线展示的标题",
                    "body":"苹果离线展示的内容"
                },
                "content-available":0
            },
            "auto_badge":"+1"
        }
}
```

以下是Java-sdk封装Rest-V2厂商推送示例：
``` java
public class push2 {
	public static void main(String[] args) {
        GtApiConfiguration apiConfiguration = new GtApiConfiguration();
        //填写应用配置
        apiConfiguration.setAppId("");
        apiConfiguration.setAppKey("");
        apiConfiguration.setMasterSecret("");
        apiConfiguration.setDomain("https://restapi.getui.com/v2/");
        // 实例化ApiHelper对象，用于创建接口对象
        ApiHelper apiHelper = ApiHelper.build(apiConfiguration);
        // 创建对象，建议复用。目前有PushApi、StatisticApi、UserApi
        PushApi pushApi = apiHelper.creatApi(PushApi.class);
        //根据cid进行单推
        PushDTO<Audience> pushDTO = new PushDTO<Audience>();
        // 设置推送参数
        pushDTO.setRequestId(System.currentTimeMillis() + "");//requestid需要每次变化唯一
        //配置推送条件
        // 1: 表示该消息在用户在线时推送个推通道，用户离线时推送厂商通道;
        // 2: 表示该消息只通过厂商通道策略下发，不考虑用户是否在线;
        // 3: 表示该消息只通过个推通道下发，不考虑用户是否在线；
        // 4: 表示该消息优先从厂商通道下发，若消息内容在厂商通道代发失败后会从个推通道下发。
        Strategy strategy=new Strategy();
        strategy.setDef(1);
        Settings settings=new Settings();
        settings.setStrategy(strategy);
        pushDTO.setSettings(settings);
        settings.setTtl(3600000);//消息有效期，走厂商消息需要设置该值
//推送苹果离线通知标题内容
        Alert alert=new Alert();
        alert.setTitle("苹果离线通知栏标题");
        alert.setBody("苹果离线通知栏内容");
        Aps aps = new Aps();
        //1表示静默推送(无通知栏消息)，静默推送时不需要填写其他参数。
        //苹果建议1小时最多推送3条静默消息
        aps.setContentAvailable(0);
        aps.setSound("default");
        aps.setAlert(alert);
        IosDTO iosDTO = new IosDTO();
        iosDTO.setAps(aps);
        iosDTO.setType("notify");
        PushChannel pushChannel = new PushChannel();
        pushChannel.setIos(iosDTO);
        //安卓离线厂商通道推送消息体
        PushChannel pushChannel = new PushChannel();   
        AndroidDTO androidDTO = new AndroidDTO();
        Ups ups = new Ups();
        ThirdNotification notification1 = new ThirdNotification();;
        ups.setNotification(notification1);
        notification1.setTitle("安卓离线展示的标题");
        notification1.setBody("安卓离线展示的内容");
        notification1.setClickType("intent");
     notification1.setIntent("intent://io.dcloud.unipush/?#Intent;scheme=unipush;launchFlags=0x4000000;component=io.dcloud.HBuilder/io.dcloud.PandoraEntry;S.UP-OL-SU=true;S.title=测试标题;S.content=测试内容;S.payload=test;end");
        	//各厂商自有功能单项设置
//ups.addOption("HW", "/message/android/notification/badge/class", "io.dcloud.PandoraEntry ");
        //ups.addOption("HW", "/message/android/notification/badge/add_num", 1);
        //ups.addOption("HW", "/message/android/notification/importance", "HIGH");
//ups.addOption("VV","classification",1);
        androidDTO.setUps(ups);
        pushChannel.setAndroid(androidDTO);
        pushDTO.setPushChannel(pushChannel);
        
        // PushMessage在线走个推通道才会起作用的消息体
        PushMessage pushMessage = new PushMessage();
        pushDTO.setPushMessage(pushMessage);
        pushMessage.setTransmission(" {title:\"标题\",content:\"内容\",payload:\"自定义数据\"}");
        // 设置接收人信息
        Audience audience = new Audience();
        pushDTO.setAudience(audience);
        audience.addCid("请输入clientid");

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

**注意：把$intent变量赋值字符串中的io.dcloud.HBuilder换成自己应用的包名**

<a id="server"/>

完整服务端厂商推送教程参考：
https://docs.getui.com/getui/server/rest_v2/common_args/


## 第三步：客户端处理推送消息
UniPush推送服务已经封装好iOS&Android平台的原生集成工作，开发者只需要调用JS代码处理推送消息的业务逻辑：

- 使用[条件编译](https://uniapp.dcloud.io/platform)直接调用5+ Push接口，参考[5+ APP推送开发指南](https://ask.dcloud.net.cn/article/34)
- uni的客户端jsapi仍然是plus.push，之前使用plus.push开发的代码仍然可以使用。
- uni-app应用中使用UniPush推送服务参考[https://ask.dcloud.net.cn/article/35726](https://ask.dcloud.net.cn/article/35726)

<a id="badge"/>

### 应用桌面图标的角标  
#### Android平台  
不同ROM接收推送消息对桌面图标的角标处理逻辑存在差别
- 小米手机：  
角标自动加1 （MIUI11 以下），另：高版本MIUI 设置角标会以通知的形态发送
- 华为手机：  
可以设置，走厂家通道离线推送可在服务端设置。参考可插件链接:[https://ext.dcloud.net.cn/plugin?id=1680](https://ext.dcloud.net.cn/plugin?id=1680)
- vivo手机：  
不会自动加1，需调用5+ API [plus.runtime.setBadgeNumber](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.setBadgeNumber)动态设置角标数字
- oppo手机：  
角标自动展示，具体形态与rom相关，可能是红点或数字。（需要打开角标权限）

#### iOS平台
根据接收到的推送消息处理桌面图标的角标，在uniPush后台的“iOS配置”项中可配置badge参数对角标进行设置，可取值：
- “+1”，表示当前角标+1；
- “-1”，表示当前角标-1（角标>=0）；
- “3”，表示指定角标值，值必须>=0。

默认（不设置badge参数）则角标数字不变，也可以在应用运行期调用5+ API [plus.runtime.setBadgeNumber](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.setBadgeNumber)动态设置角标数字

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
![](https://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/push/huawei-apconnect-services.png)


#### VIVO厂商通道
**需要在VIVO应用商店上线才能申请VIVO的厂商推送**
注意事项：
1. vivo【运营消息】，一个设备一天只能收到5条离线消息
2. vivo要求：通知文案中不能带 “包含测试、test字符”、“纯数字”、“纯表情”、“符号”或者“符号+数 字”、“表情+数字”、“表情＋符号” 。
3. 1个自然日内相同文案的运营消息给同个设备发，vivo会在客户端做去重处理，导致消息不展示
4. 支持vivo推送功能HBuilderX最低版2.1.0及以上。

具体请参考图中数据  
![](https://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/push/vivo-datas.png)


#### OPPO厂商通道
**需要在OPPO应用商店上线才能申请OPPO的厂商推送**

并且有以下要求：
1. 机型系统要求：oppo colorOS rom且版本号大于等于3.1
2. 检查手机通知权限是否打开，oppo是默认关闭的，将通知权限下的【Default】通道权限也打开。
3. 手机系统时间是否正常


#### 小米厂商通道
1. 机型版本要求：小米rom且小米服务框架（包名：com.xiaomi.xmsf）版本号⼤于等于 105 
2. 检查手机通知权限设置，小米有不重要通知功能，部分消息可能会存在通知栏不重要通知里

#### 魅族厂商通道
1. 机型版本要求：魅族rom且魅族rom版本⼤于等于5.x
2. 检查消息是否存入了魅族手机右上角【魅族消息盒子】中
3. 清除缓存：魅族手机在设置 ---> 应用管理 ---> 所有应用 ---> 推送服务 ，点击里面的清除数据，然后再重新安装一下应用。


#### 谷歌FCM通道
需Android手机已经安装GMS，且手机网络可以连通谷歌FCM推送服务器。
详细教程另见：[https://ask.dcloud.net.cn/article/37356](https://ask.dcloud.net.cn/article/37356)。

#### 其它厂商通道
如果应用在线可以接收到推送消息，离线时使用厂商通道无法接收到推送消息，可参考**UniPush厂商通道常见问题[https://ask.dcloud.net.cn/article/36611](https://ask.dcloud.net.cn/article/36611)**

**最后也可以登录[个推官网](https://www.getui.com/)，或使用微信扫描下面二维码，进行技术咨询**  
![](https://partner-dcloud-native.oss-cn-hangzhou.aliyuncs.com/images/uniapp/push/getui-service.jpg)



## 其他相关资源
- 检查应用是否被授予推送权限：[https://ext.dcloud.net.cn/plugin?id=594](https://ext.dcloud.net.cn/plugin?id=594)
- 开启关闭推送服务：[https://ext.dcloud.net.cn/plugin?id=727](https://ext.dcloud.net.cn/plugin?id=727)
- 自定义iOS推送铃声：[https://ext.dcloud.net.cn/plugin?id=690](https://ext.dcloud.net.cn/plugin?id=690)
- 如何自定义推送通知的图标：[https://ask.dcloud.net.cn/article/35537](https://ask.dcloud.net.cn/article/35537)

## FAQ
- Q：5+app和wap2app需要uniPush怎么办？  
A：HBuilderX 2.0.3起，5+app和wap2app也支持了uniPush。
5+app和wap2app升级uniPush不需要改动app前端代码，只需要在HBuilderX中打开manifest.json的“SDK配置”页，在“推送”下勾选“DCloud UniPush”，并点击“配置”，在后台开通unipush服务，配置好厂商推送参数重新提交云端打包即可。后端服务器需要参考第二步对接个推推送服务。

- Q：离线打包如何配置？  
A：[Android平台App离线打包-Push](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/androidModuleConfig/push?id=unipush)
[iOS平台App离线打包-Push](https://nativesupport.dcloud.net.cn/AppDocs/usemodule/iOSModuleConfig/push?id=unipush)

- Q：iOS平台如何实现应用启动后不立即弹出“发送通知”系统授权框？  
A：参考：[https://ask.dcloud.net.cn/article/36955](https://ask.dcloud.net.cn/article/36955#push)
