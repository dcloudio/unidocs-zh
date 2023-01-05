> 需要HBuilderX 3.5.1 及其以上版本支持
> Requires HBuilderX 3.5.1 and above to support

options 更多参数配置
options More parameter configuration

## 简述
## Brief description

由于各手机厂商特定推送参数支持不统一，uniPush为了降低开发者的接入成本，提供一致的推送API。
Since the specific push parameters supported by different mobile phone manufacturers are not uniform, uniPush provides a consistent push API in order to reduce the access cost of developers.
以下两种需求，可以在`options`参数传入参数实现。
The following two requirements can be implemented by passing in parameters in the `options` parameter.
1. 如果开发者希望在不同的厂商手机端，实现不同的效果；
1. If the developer wants to achieve different effects on the mobile terminal of different manufacturers;

	例子:你希望实现在**iOS**和**华为**两款手机，收到消息后的角标变化分别为:在原值上**-1**和**+1**两种效果
	Example: You want to implement two mobile phones, **iOS** and **Huawei**. After receiving the message, the changes of the angle labels are: **-1** and **+1** on the original value. effect
	
	options 配置示例如下：
	An example of options configuration is as follows:
	```json
	"options": {
	  "IOS":{
	    "auto_badge":"-1",
	  },
	  "HW": {
	    "/message/android/notification/badge/class": "io.dcloud.PandoraEntry",
	    "/message/android/notification/badge/add_num": 1
	  }
	}
	```
2. 部分特定厂商支持的且不常用的功能，uniPush未提供统一封装。
2. For some uncommon functions supported by specific manufacturers, uniPush does not provide unified encapsulation.

    比如实现【小米】通道对app版本号筛选
    For example, implement the [Xiaomi] channel to filter the app version number
    
	options 配置示例如下：
	An example of options configuration is as follows:
    ```json
    "options": {
      其他配置...,
      "XM": {
        "/extra.app_version": "v3.3.0"
      }
    }
    ```

## 参数详情
## parameter details

## 【华为】角标
## [Huawei] corner logo

* 参数示例
* parameter example

```json
"options": {
   "HW": {
    "/message/android/notification/badge/class": "io.dcloud.PandoraEntry",
    "/message/android/notification/badge/add_num": 1,
    "/message/android/notification/badge/set_num": 2
  }
}
```

* **key** 说明
* **key** Description

| 名称       | 类型            | 是否必须   | 默认值  | 描述  |
| name | type | required | default value | description |
| ---------  | ------------- | ---- | ---- | -------- |
|/message/android/notification/badge/class         |String     |是    |无|value：io.dcloud.PandoraEntry|
|/message/android/notification/badge/class |String |Yes |None|value: io.dcloud.PandoraEntry|
|/message/android/notification/badge/add_num         |Integer     |是    |无|value：应用角标累加数字，并非应用角标实际显示数字<br>必须是大于0小于100的整数|
|/message/android/notification/badge/add_num |Integer |Yes|None|value: The number is accumulated by the application index, not the actual number displayed by the application index must be an integer greater than 0 and less than 100|
|/message/android/notification/badge/set_num         |Integer     |是    |无|value：角标设置数字<br>必须是大于0小于100的整数，如果set_num和add_num同时存在，以set_num为准|
|/message/android/notification/badge/set_num |Integer |Yes|No|value: The number of the subscript setting must be an integer greater than 0 and less than 100. If set_num and add_num exist at the same time, set_num shall prevail|

> 注意事项<br>1. 点击启动图标或通知栏系统并不会清理角标数，需应用在端侧通过角标API去清理角标；<br>2. add_num：EMUI版本8.0.0(及以上)，推送服务App版本8.0.0（及以上）支持；<br>3. set_num：EMUI版本10.0.0（及以上），推送服务App版本10.1.0（及以上）支持。
> Note<br> 1. Clicking the startup icon or the notification bar system will not clear the number of corner labels. It needs to be applied on the terminal side to clear the corner labels through the corner label API;<br> 2. add_num: EMUI version 8.0.0 (and above), push service App version 8.0.0 (and above) support;<br> 3. set_num: EMUI version 10.0.0 (and above), push service App version 10.1.0 (and above) support.

## 【华为】富文本消息
## [Huawei] Rich Text Message

### Options参数说明:
### Options parameter description:

* 参数示例
* parameter example

```json
"options": {
  "HW": {
    "/message/android/notification/image": "公网可以访问的https图标链接",
    "/message/android/notification/style": 1,
    "/message/android/notification/big_title": "big_title",
    "/message/android/notification/big_body": "big_body"
  }
}
```

* **key** 说明
* **key** Description

| 名称       | 类型            | 是否必须   | 默认值  | 描述  |
| name | type | required | default value | description |
| ---------  | ------------- | ---- | ---- | -------- |
|/message/android/notification/image         |String     |是    |无|通知小图；<br>value：请写入对应图标https地址<br>URL使用的协议必须是HTTPS协议，取值样例：<a href="javascript:void(0)">https://example.com/image.png。</a>|
|/message/android/notification/image |String |Yes|None|Notification thumbnail;<br> value: Please write the corresponding icon https address<br> The protocol used by the URL must be the HTTPS protocol. The value example is: <a href="javascript:void(0)">https://example.com/image.png.</a> |
|/message/android/notification/style         |Integer     |是    |无|通知长文本；<br>value：1<br>通知栏样式1，为长文本。|
|/message/android/notification/style |Integer |Yes|None|Notification long text;<br> value: 1<br> Notification bar style 1, which is long text. |
|/message/android/notification/big_title        |String     |是    |无|通知长文本；<br>value：通知title内容<br>设置big_title后通知栏展示时，使用 big_title而不用title。|
|/message/android/notification/big_title |String |Yes|None|Notification long text;<br> value: When the notification bar is displayed after the notification title content is set to big_title, use big_title instead of title. |
|/message/android/notification/big_body        |String     |是    |无|通知长文本；<br>value：通知title内容<br>通知body内容。设置big_body后通知栏展示时，使用big_body而不用body。|
|/message/android/notification/big_body |String |Yes|None|Notification long text;<br> value: notify the title content to notify the body content. When the notification bar is displayed after setting big_body, use big_body instead of body. |

> 注意事项<br>1. 通知长文本：EMUI版本9.1.0（及以上），推送服务App版本9.1.1（及以上）支持。
> Precautions<br> 1. Notification long text: EMUI version 9.1.0 (and above), push service App version 9.1.1 (and above) support.

## 【华为】消息分类
## 【Huawei】Message Classification

消息分类使用之前，需要先向华为侧发邮件申请权限参见[华为消息分类申请](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835)
Before using message classification, you need to send an email to Huawei to apply for permission. See [Huawei Message Classification Application](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835)

key 说明
key description

| **名称**                                 | 类型   | 是否必须 | 默认值 | 描述                                                         |
| **name** | type | required | default value | description |
| ---------------------------------------- | ------ | -------- | ------ | ------------------------------------------------------------ |
| /message/android/notification/importance | String | 否       | 无     | 取值为“LOW”时，表示消息为资讯营销；取值为“NORMAL”时，表示消息为服务与通讯 |
| /message/android/notification/importance | String | No | None | When the value is "LOW", it indicates that the message is information marketing; when the value is "NORMAL", it indicates that the message is service and communication |

**Options参数说明:**
**Options parameter description:**

- Options参数【ups 参数中】下进行设置示例:
- Example of setting under Options parameter [ups parameter]:

  ```
  "HW": {
      "/message/android/notification/importance","LOW"
  }
  ```


## 【华为】离线自定义铃声
## [Huawei] Offline custom ringtones
离线自定义铃声设置需要Android客户端配合使用
Offline custom ringtone settings require the use of an Android client

### 服务端
### Server

key 说明
key description

| 名称                                        | 类型    | 是否必须 | 默认值 | 描述                                                         |
| name | type | required | default value | description |
| ------------------------------------------- | ------- | -------- | ------ | ------------------------------------------------------------ |
| /message/android/notification/default_sound | Boolean | 是       | 无     | 设置为 false，使用sound自定义铃声                            |
| /message/android/notification/default_sound | Boolean | yes | no | set to false, use sound to customize ringtone |
| /message/android/notification/channel_id    | String  | 是       | 无     | 自Android O版本后可以支持通知栏自定义渠道，指定消息要展示在哪个通知渠道上，详情请参见[自定义通知渠道](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides-V5/android-custom-chan-0000001050040122-V5)。 自定义通知渠道仅对发送给用户设备的重要级别消息有效，一般级别消息仍然通过华为营销通知渠道展示。 |
| /message/android/notification/channel_id | String | Yes | None | Since the Android O version, it can support the notification bar custom channel, specify which notification channel the message should be displayed on. For details, please refer to [Custom Notification Channel](https ://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides-V5/android-custom-chan-0000001050040122-V5). Custom notification channels are only valid for critical-level messages sent to user devices. General-level messages are still displayed through Huawei's marketing notification channels. |
| /message/android/notification/sound         | String  | 是       | 无     | 自定义消息通知铃声，在新创建渠道时有效，此处设置的铃声文件必须存放在应用的/res/raw路径下，例如设置为“/raw/shake”，对应应用本地的“/res/raw/shake.xxx”文件，支持的文件格式包括MP3、WAV、MPEG等，如果不设置使用默认系统铃声。 |
| /message/android/notification/sound | String | Yes | No | Custom message notification ringtone, valid when a new channel is created, the ringtone file set here must be stored in the /res/raw path of the application, for example, set as "/raw/shake" corresponds to the local "/res/raw/shake.xxx" file of the application. The supported file formats include MP3, WAV, MPEG, etc. If not set, use the default system ringtone. |
| /message/android/notification/importance    | String  | 否       | 无     | 取值为“LOW”时，表示消息为资讯营销；取值为“NORMAL”时，表示消息为服务与通讯 |
| /message/android/notification/importance | String | No | None | When the value is "LOW", it indicates that the message is information marketing; when the value is "NORMAL", it indicates that the message is service and communication |

注意：自定义铃声受华为自己通知消息权重影响
Note: Custom ringtones are affected by Huawei's own notification message weight

自定义通知渠道仅对发送给用户设备的服务与通讯级别消息有效，一般级别消息仍然通过华为营销通知渠道展示（一般级别消息是不会播放自定义铃声）。这个时候就不会播放自定义铃声了。消息类别受华为侧AI智能判断控制，或开发者自己向华为侧申请[自分类权益申请](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides-V5/message-frequency-restriction-0000001149358835-V5#ZH-CN_TOPIC_0000001149358835__section893184112272)
Custom notification channels are only valid for service and communication-level messages sent to user devices. General-level messages are still displayed through Huawei's marketing notification channels (general-level messages do not play custom ringtones). This time the custom ringtone will not play. The message category is controlled by Huawei's AI intelligent judgment, or developers can apply to Huawei for [Self-Classification Rights Application](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides-V5/message -frequency-restriction-0000001149358835-V5#EN-CN_TOPIC_0000001149358835__section893184112272)



**Rest-v2 示例：**
**Rest-v2 example:**

> Options参数【ups 参数中】下进行设置示例:
> Example of setting under Options parameter [ups parameter]:

```
"HW": {
	"/message/android/notification/default_sound",false,
	"/message/android/notification/channel_id","RingRing4",
	"/message/android/notification/sound","/raw/ring001"
}
```

## 【小米】消息分类
## [Xiaomi] Message Classification
小米推送的消息通道分为“普通消息”（默认）和“重要消息”两类，默认下发普通消息。普通消息单日可推送数量有限制，重要消息不限。重要消息申请具体请参考： [小米推送消息分类新规](https://dev.mi.com/console/doc/detail?pId=2422)
The message channels of Xiaomi Push are divided into two categories: "Normal Message" (default) and "Important Message", and common messages are delivered by default. The number of ordinary messages that can be pushed in a single day is limited, and there is no limit to important messages. For details on important news applications, please refer to: [New Rules for Classification of Xiaomi Push News](https://dev.mi.com/console/doc/detail?pId=2422)

### Options参数说明:
### Options parameter description:

* 参数示例
* parameter example

```json
"options": {
  "XM": {
    "/extra.channel_id": "Default"
  }
}
```

* **key** 说明
* **key** Description

| 名称       | 类型            | 是否必须   | 默认值  | 描述  |
| name | type | required | default value | description |
| ---------  | ------------- | ---- | ---- | -------- |
|/extra.channel_id         |String     |是    |无|value：填写小米平台申请的渠道id|
|/extra.channel_id |String |Yes |None|value: fill in the channel id applied for on the Xiaomi platform|

> 注意事项：<br>1. 如果使用重要消息，需要在客户端创建对应的渠道，具体请参考: [MIUI 10 通知类别 (Channel) 适配说明](https://docs.getui.com/getui/server/rest_v2/third_party/)
> Notes:<br> 1. If you use important messages, you need to create a corresponding channel on the client side. For details, please refer to: [MIUI 10 Notification Category (Channel) Adaptation Instructions](https://docs.getui.com/getui/server/rest_v2/third_party /)
## 【小米】富文本消息
## [Xiaomi] Rich Text Messages

先调用小米接口，上传图片，获取图片url。
First call the Xiaomi interface, upload the picture, and get the picture url.

Java方式 <a target="_blank" href="https://dev.mi.com/console/doc/detail?pId=1278%23_3_3">参考（小米官方文档） 4.4.1 大图/大文本/Large icon</a>，或者集成<a target="_blank" href="https://github.com/GetuiLaboratory/getui-3rd-push-utils">个推多厂商推送工具集</a>。
Java method <a target="_blank" href="https://dev.mi.com/console/doc/detail?pId=1278%23_3_3">reference (Xiaomi official documentation) 4.4.1 Large image/large text/Large icon</a> , or integrate <a target="_blank" href="https://github.com/GetuiLaboratory/getui-3rd-push-utils">a push tool set from multiple vendors</a> .

RestAPI 方式 <a target="_blank" href="https://dev.mi.com/console/doc/detail?pId=1163">参考（小米官方文档）11.1 大图、大文本/上传大图API</a>。
RestAPI method <a target="_blank" href="https://dev.mi.com/console/doc/detail?pId=1163">reference (Xiaomi official documentation) 11.1 Big Picture, Big Text/Upload Big Picture API</a> .

### Options参数说明:
### Options parameter description:

* 参数示例
* parameter example

```json
"options": {
  "XM": {
    "/extra.notification_style_type": 2,
    "/extra.notification_bigPic_uri":"http://url.big.pic/xxx.png"
  }
}
```

* **key** 说明
* **key** Description

| 名称       | 类型            | 是否必须   | 默认值  | 描述  |
| name | type | required | default value | description |
| ---------  | ------------- | ---- | ---- | -------- |
|/extra.notification_style_type         |String     |是    |无|1表示多字版；2表示大图版 <br> 填1时，文本内容为body内的值|
|/extra.notification_style_type |String |Yes|No|1 means multi-character version; 2 means that when 1 is filled in the large version, the text content is the value in the body|
|/extra.notification_bigPic_uri        |String     |是    |无|/extra.notification_style_type填2时，填写，表示大图地址(上传到小米返回的url)<br>图片要求:固定876x324px，小于1M，PNG/JPG/JPEG格式。 |
|/extra.notification_bigPic_uri |String |Yes|None|/extra.notification_style_type If 2 is filled, fill in, indicating the address of the big picture (uploaded to the url returned by Xiaomi)<br> Image requirements: Fixed 876x324px, less than 1M, PNG/JPG/JPEG format. |
|/extra.notification_large_icon_uri    |String     |是    |无|通知小图；<br>value：填写接口返回的图片链接。<br>Large icon可以出现在大图版和多字版消息中，显示在右边，通知小图。图片要求:尺寸必须为 120×120px，文件小于200KB，PNG/JPG/JPEG格式。|
|/extra.notification_large_icon_uri |String |Yes|None|Notification thumbnail;<br> value: Fill in the image link returned by the interface.<br> The Large icon can appear in large-picture and multi-text messages, displayed on the right, and notification thumbnails. Image requirements: The size must be 120×120px, the file size must be less than 200KB, in PNG/JPG/JPEG format. |


> 注意事项：<br>1. 富文本消息仅在MIUI10及以上版本支持，在低版本和非MIUI系统上，消息将按照普通消息的样式展示; <br>2. 国内版MIUI系统中，仅在MIUI12及以上版本支持large icon，MIUI12以下版本不会展示; <br>3. 发送大图消息时，如果因为网络原因图片下载失败后将不会展示图片， 而是按照普通消息样式 展示。
> Notes:<br> 1. Rich text messages are only supported in MIUI10 and above. On lower versions and non-MIUI systems, the messages will be displayed in the style of ordinary messages;<br> 2. In the domestic version of MIUI system, the large icon is only supported in MIUI12 and above, and will not be displayed in versions below MIUI12;<br> 3. When sending a large image message, if the image download fails due to network reasons, the image will not be displayed, but will be displayed in the normal message style.

## 【小米】离线自定义铃声
## [Xiaomi] Offline custom ringtones
离线自定义铃声设置需要Android客户端配合使用
Offline custom ringtone settings require the use of an Android client

### 服务端：
### Server:

key 说明
key description

| 名称      | 类型   | 是否必须 | 默认值 | 描述                                                         |
| name | type | required | default value | description |
| --------- | ------ | -------- | ------ | ------------------------------------------------------------ |
| /extra.sound_uri | String | 是       | 无     | 小米后台申请的自定义 sound_url 地址，示例：android.resource://your packagename/raw/XXX |
| /extra.sound_uri | String | Yes | No | Custom sound_url address applied by Xiaomi backend, example: android.resource://your packagename/raw/XXX |
| /extra.channel_id   | String | 是       | 无     | 小米后台申请的通知类别id                                     |
| /extra.channel_id | String | Yes | No | Notification category id applied by Xiaomi background |

> 注意：若服务端/extra.sound_uri和/extra.channel_id同时设置，Android 8.0及以上版本的通知效果以channel中的效果为准
> Note: If the server /extra.sound_uri and /extra.channel_id are set at the same time, the notification effect of Android 8.0 and above is subject to the effect in the channel

1、客户端-小米厂商版本需要用com.getui:xmp:1.0.8版本或小米-3.0.1版本及以上
1、 Client-Xiaomi manufacturer version needs to use com.getui:xmp:1.0.8 version or Xiaomi-3.0.1 version or above

2、客户端铃声文件放在Android app的raw目录下；
2、 The client ringtone file is placed in the raw directory of the Android app;

3、针对android8以上的小米机型，离线自定义铃声只在channel通道中起作用，若需要多个不同铃声则需要多个不同channel通道
3、 For Xiaomi models above android8, offline custom ringtones only work in the channel channel. If you need multiple different ringtones, you need multiple different channel channels

因此需要在小米平台上新建channel通道，设置自定义铃声前端路径如：android.resource://your packagename/raw/test（路径不需要带音频后缀名）如图
Therefore, it is necessary to create a new channel channel on the Xiaomi platform, and set the custom ringtone front-end path such as: android.resource://your packagename/raw/test (the path does not need to have an audio suffix name) as shown in the figure

![](https://web-assets.dcloud.net.cn/unidoc/zh/custom_sound.png)


**Rest-v2 示例：**
**Rest-v2 example:**

> Options参数【ups 参数中】下进行设置示例:
> Example of setting under Options parameter [ups parameter]:

```
"XM": {
  "/extra.sound_uri": "小米后台申请的自定义 sound_url 地址",
  "/extra.channel_id": "小米后台申请的通知类别id"
}
```

## 【小米】语言范围
## 【Xiaomi】Language range

### Options参数说明:
### Options parameter description:

* 参数示例
* parameter example

```json
"options": {
  "XM": {
    "/extra.locale": "zh_CN"
  }
}
```

### 服务端
### Server

key 说明
key description

| 名称                                        | 类型    | 是否必须 | 默认值 | 描述                                                         |
| name | type | required | default value | description |
| ------------------------------------------- | ------- | -------- | ------ | ------------------------------------------------------------ |
| /extra.locale           | String | 否       | 无     | 可以接收消息的设备的语言范围，用逗号分隔。比如，中国大陆用zh_CN表示。 |
| /extra.locale | String | No | None | The language ranges of devices that can receive messages, separated by commas. For example, mainland China is represented by zh_CN. |
| /extra.locale_not_in    | String | 否       | 无     | 无法收到消息的设备的语言范围，逗号分隔。 |
| /extra.locale_not_in | String | No | None | The language ranges of devices that cannot receive messages, comma-separated. |

## 【小米】model筛选
## [Xiaomi] model filter

### Options参数说明:
### Options parameter description:

* 参数示例
* parameter example

```json
"options": {
  "XM": {
    "/extra.model": "MI 4LTE"
  }
}
```

### 服务端
### Server

key 说明
key description

| 名称                                        | 类型    | 是否必须 | 默认值 | 描述                                                         |
| name | type | required | default value | description |
| ------------------------------------------- | ------- | -------- | ------ | ------------------------------------------------------------ |
| /extra.model           | String | 否       | 无     | 可以收到消息的设备的机型范围，逗号分隔。当前设备的model的获取方法：Build.MODEL。<br>比如，小米手机4移动版用”MI 4LTE”表示。 |
| /extra.model | String | No | None | The range of models of devices that can receive messages, separated by commas. How to get the model of the current device: Build.MODEL.<br> For example, Xiaomi Mi Phone 4 mobile version is represented by &quot;MI 4LTE&quot;. |
| /extra.model_not_in    | String | 否       | 无     | 无法收到消息的设备的机型范围，逗号分隔。 |
| /extra.model_not_in | String | No | None | The model range of devices that cannot receive messages, separated by commas. |

## 【小米】app版本号筛选
## [Xiaomi] App version number filter

### Options参数说明:
### Options parameter description:

* 参数示例
* parameter example

```json
"options": {
  "XM": {
    "/extra.app_version": "v3.3.0"
  }
}
```

### 服务端
### Server

key 说明
key description

| 名称                                        | 类型    | 是否必须 | 默认值 | 描述                                                         |
| name | type | required | default value | description |
| ------------------------------------------- | ------- | -------- | ------ | ------------------------------------------------------------ |
| /extra.app_version           | String | 否       | 无     | 可以接收消息的app版本号，用逗号分割。安卓app版本号来源于manifest文件中的”android:versionName”的值。 |
| /extra.app_version | String | No | None | App version numbers that can receive messages, separated by commas. The Android app version number is derived from the value of "android:versionName" in the manifest file. |
| /extra.app_version_not_in    | String | 否       | 无     | 无法接收消息的app版本号，用逗号分割。 |
| /extra.app_version_not_in | String | No | None | The version number of the app that cannot receive messages, separated by commas. |

## 【小米】按钮设置
## [Xiaomi] button settings

### Options参数说明:
### Options parameter description:

* 参数示例
* parameter example

```json
"options": {
  "XM": {
    "/extra.notification_style_button_left_name": "左侧按钮",
    "/extra.notification_style_button_left_notify_effect": "3",
    "/extra.notification_style_button_left_web_uri": "https://c.runoob.com/front-end/854/"
  }
}
```

### 服务端
### Server

key 说明
key description

| 名称                                        | 类型    | 是否必须 | 默认值 | 描述                                                         |
| name | type | required | default value | description |
| ------------------------------------------- | ------- | -------- | ------ | ------------------------------------------------------------ |
| /extra.notification_style_button_left_notify_effect | String | 否       | 无     | 左侧按钮点击后的动作，支持以下取值：<br>1：打开应用<br>2：打开应用内指定页面<br>3：打开网页<br>如果不配置或者配置为其他值都将不显示按钮。 |
| /extra.notification_style_button_left_notify_effect | String | No | None | The action after the left button is clicked. The following values are supported:<br> 1: Open the app<br> 2: Open the specified page in the app<br> 3: The button will not be displayed if the web page is not configured or configured with other values. |
| /extra.notification_style_button_left_name    | String | 否       | 无     | 左侧按钮名称。<br>该参数必须配置，不配置将不展示按钮。。 |
| /extra.notification_style_button_left_name | String | No | None | Left button name.<br> This parameter must be configured, otherwise the button will not be displayed. . |
| /extra.notification_style_button_left_intent_uri           | String | 否       | 无     | 打开应用。 |
| /extra.notification_style_button_left_intent_uri | String | No | None | Open the app. |
| /extra.notification_style_button_left_web_uri    | String | 否       | 无     | 点击左侧按钮，打开指定web页面。 |
| /extra.notification_style_button_left_web_uri | String | No | None | Click the left button to open the specified web page. |
| /extra.notification_style_button_left_intent_class           | String | 否       | 无     | 点击左侧按键，打开应用内指定页面。 |
| /extra.notification_style_button_left_intent_class | String | No | None | Click the left button to open the specified page in the app. |
| /extra.notification_style_button_right_notify_effect | String | 否       | 无     | 右侧按钮点击后的动作，支持以下取值：<br>1：打开应用<br>2：打开应用内指定页面<br>3：打开网页<br>如果不配置或者配置为其他值都将不显示按钮。 |
| /extra.notification_style_button_right_notify_effect | String | No | None | The action after the right button is clicked. The following values are supported:<br> 1: Open the app<br> 2: Open the specified page in the app<br> 3: The button will not be displayed if the web page is not configured or configured with other values. |
| /extra.notification_style_button_right_name    | String | 否       | 无     | 右侧按钮名称。<br>该参数必须配置，不配置将不展示按钮。。 |
| /extra.notification_style_button_right_name | String | no | none | right button name.<br> This parameter must be configured, otherwise the button will not be displayed. . |
| /extra.notification_style_button_right_intent_uri           | String | 否       | 无     | 打开应用。 |
| /extra.notification_style_button_right_intent_uri | String | No | None | Open the app. |
| /extra.notification_style_button_right_web_uri    | String | 否       | 无     | 点击右侧按钮，打开指定web页面。 |
| /extra.notification_style_button_right_web_uri | String | No | None | Click the button on the right to open the specified web page. |
| /extra.notification_style_button_right_intent_class           | String | 否       | 无     | 点击右侧按键，打开应用内指定页面。 |
| /extra.notification_style_button_right_intent_class | String | No | None | Click the button on the right to open the specified page in the app. |
| /extra.notification_style_button_mid_notify_effect | String | 否       | 无     | 中间按钮点击后的动作，支持以下取值：<br>1：打开应用<br>2：打开应用内指定页面<br>3：打开网页<br>如果不配置或者配置为其他值都将不显示按钮。 |
| /extra.notification_style_button_mid_notify_effect | String | No | None | The action after the middle button is clicked. The following values are supported:<br> 1: Open the app<br> 2: Open the specified page in the app<br> 3: The button will not be displayed if the web page is not configured or configured with other values. |
| /extra.notification_style_button_mid_name    | String | 否       | 无     | 中间按钮名称。<br>该参数必须配置，不配置将不展示按钮。。 |
| /extra.notification_style_button_mid_name | String | No | None | Middle button name.<br> This parameter must be configured, otherwise the button will not be displayed. . |
| /extra.notification_style_button_mid_intent_uri           | String | 否       | 无     | 打开应用。 |
| /extra.notification_style_button_mid_intent_uri | String | No | None | Open the app. |
| /extra.notification_style_button_mid_web_uri    | String | 否       | 无     | 点击中间按钮，打开指定web页面。 |
| /extra.notification_style_button_mid_web_uri | String | No | None | Click the middle button to open the specified web page. |
| /extra.notification_style_button_mid_intent_class           | String | 否       | 无     | 点击中间按键，打开应用内指定页面。 |
| /extra.notification_style_button_mid_intent_class | String | No | None | Click the middle button to open the specified page in the app. |

## 【OPPO】公、私信
## 【OPPO】Public and private messages

OPush平台上所有通道分为“公信”(默认)、“私信”两类，默认下发公信消息。公信消息单日可推送数量有限制，私信消息不限(仅限单个用户)。私信消息申请请<a target="_blank" href="https://open.oppomobile.com/wiki/doc#id=11096">参见（OPPO官方文档）通道升级公测邀请</a>。
All channels on the OPush platform are divided into two categories: &quot;public letter&quot; (default) and &quot;private letter&quot;, and public letter messages are sent by default. There is a limit to the number of public messages that can be pushed in a single day, and unlimited private messages (only for a single user). For private message application, please <a target="_blank" href="https://open.oppomobile.com/wiki/doc#id=11096">refer to (OPPO official document) Channel Upgrade Public Beta Invitation</a> .

### Options参数说明:
### Options parameter description:

* 参数示例
* parameter example

```json
"options": {
  "OP": {
    "/channel_id": "Default"
  }
}
```

* **key** 说明
* **key** Description

| 名称       | 类型            | 是否必须   | 默认值  | 描述  |
| name | type | required | default value | description |
| ---------  | ------------- | ---- | ---- | -------- |
|/channel_id         |String     |是    |无|value：填写OPPO平台登记的渠道ID|
|/channel_id |String |Yes |None|value: fill in the channel ID registered on the OPPO platform|

> 注意事项<br><a style="color:red">1.该接口需要联系个推技术人员申请开通才可以使用;</a><br>2.OPPO私信消息仅支持单推。<br/>3. 如果使用私信，需要在客户端创建对应的私信渠道，具体请参考: [通知通道（Channel）适配](https://open.oppomobile.com/wiki/doc#id=10289)
> Precautions<br> <a style="color:red">1. This interface can be used only after contacting a personal push technician to apply for activation;</a><br> 2. OPPO private message only supports single push.<br/> 3. If you use private messages, you need to create a corresponding private message channel on the client side. For details, please refer to: [Notification Channel (Channel) Adaptation](https://open.oppomobile.com/wiki/doc#id=10289)

## 【OPPO】富文本消息
## 【OPPO】Rich text message

先调用OPPO接口，上传图片，获取图标url。
First call the OPPO interface, upload a picture, and get the icon url.

Java方式集成<a target="_blank" href="https://github.com/GetuiLaboratory/getui-3rd-push-utils">个推多厂商推送工具集</a>。
Java method integrates <a target="_blank" href="https://github.com/GetuiLaboratory/getui-3rd-push-utils">a push multi-vendor push tool set</a> .

RestAPI <a target="_blank" href="https://open.oppomobile.com/wiki/doc%23id=10693">参考 “图片上传”</a> 。
RestAPI <a target="_blank" href="https://open.oppomobile.com/wiki/doc%23id=10693">reference &quot;Image upload&quot;</a> .

### Options参数说明:
### Options parameter description:

* 参数示例
* parameter example

```json
"options": {
  "OP": {
    "/small_picture_id": "xxxxxxxxxxxxxxx",
    // "style": 2,
    "/style": 3,
    "/big_picture_id": "big_body"
  }
}
```

* **key** 说明
* **key** Description


| 名称       | 类型            | 是否必须   | 默认值  |支持单推| 描述  |
| Name | Type | Required | Default | Single Push Support | Description |
| ---------  | ------------- | ---- | ---- | -------- |---|
|/style        |Integer     |是    |无|是|通知栏样式<br>1. 标准样式 <br> 2. 长文本样式（ColorOS版本>5.0可用，通知栏第一条消息可展示全部内容，非第一条消息只展示一行内容） <br> 3. 大图样式（ColorOS版本>5.0可用，通知栏第一条消息展示大图，非第一条消息不显示大图，推送方式仅支持广播）|
|/style |Integer |Yes|None|Yes|Notification bar style<br> 1. Standard style<br> 2. Long text style (available for ColorOS version &gt; 5.0, the first message in the notification bar can display the entire content, and the non-first message only displays one line of content)<br> 3. Large image style (ColorOS version &gt; 5.0 is available, the first message in the notification bar displays the large image, the non-first message does not display the large image, and the push method only supports broadcast)|
|/small_picture_id        |String     |是   |无|**否**|通知小图；<br>value: 填写接口返回的图标ID<br>图片要求:尺寸144*144 px，文件大小为50k以内,格式为PNG/JPG/JPEG。|
|/small_picture_id |String |Yes|No|**No**|Notify small picture;<br> value: fill in the icon ID returned by the interface<br> Image requirements: The size is 144*144 px, the file size is within 50k, and the format is PNG/JPG/JPEG. |
|/big_picture_id        |String     |是    |无|**否**|通知大图<br>value：填写接口返回的图标id，**style为3时必填**<br> 图片要求:尺寸876*324px,文件大小1M以内，格式为PNG/JPG/JPEG。|
|/big_picture_id |String |Yes|No|**No**|Notify Big Picture<br> value: fill in the icon id returned by the interface, **required when style is 3**<br> Image requirements: Size 876*324px, file size within 1M, and the format is PNG/JPG/JPEG. |

> 注意事项：<br>通知小图标、大图不支持单推，单推请求会返回无权限错误
> Notes:<br> Notification small icons and large images do not support single push, and a single push request will return a permissionless error

## 【OPPO】消息去重
## 【OPPO】News deduplication

App开发者自定义消息Id，OPPO推送平台根据此ID做去重处理
The app developer customizes the message ID, and the OPPO push platform performs deduplication processing based on this ID.

### Options参数说明:
### Options parameter description:

* 参数示例
* parameter example

```json
"options": {
  "OP": {
    "/app_message_id": "xxxx"
  }
}
```

* **key** 说明
* **key** Description


| 名称       | 类型            | 是否必须   | 默认值  |支持单推| 描述  |
| Name | Type | Required | Default | Single Push Support | Description |
| ---------  | ------------- | ---- | ---- | -------- |---|
|/app_message_id        |String     |是    |无|是|App开发者自定义消息Id，OPPO推送平台根据此ID做去重处理，对于tolist推送和全部用户推送相同app_message_id只会保存一次，对于单推相同app_message_id只会推送一次|
|/app_message_id |String |Yes|None|Yes|The app developer customizes the message ID, and the OPPO push platform performs deduplication processing based on this ID. The same app_message_id for tolist push and all user pushes will only be saved once, and the same app_message_id for single push Only push once|

## 【OPPO】定时展示
## 【OPPO】Timely display

开发者可以根据自己的业务需求设置定时展示，定时展示功能设置成功后消息即时下发，到达用户手机后并不直接展示出来，消息在设置的定时展示时间内展示出来。
Developers can set timed display according to their own business needs. After the timed display function is successfully set, the message will be delivered immediately, and it will not be displayed directly after reaching the user's mobile phone. The message will be displayed within the set timed display time.

### Options参数说明:
### Options parameter description:

* 参数示例
* parameter example

```json
"options":{
    "OP":{
        "/show_time_type":1,
        "/show_start_time":1640570400000,
        "/show_end_time":1640571000000
    }
}
```

* **key** 说明
* **key** Description


| 名称       | 类型            | 是否必须   | 默认值  |支持单推| 描述  |
| Name | Type | Required | Default | Single Push Support | Description |
| ---------  | ------------- | ---- | ---- | -------- |---|
|/show_time_type	|Int 	|否	|0|否|	展示类型 (0, “即时”),(1, “定时”)	|                        
|/show_time_type |Int |No |0|No| show type (0, "real time"), (1, "timed") |
|/show_start_time	|Long	|否	|0|否|	定时展示开始时间（根据time_zone转换成当地时间），时间的毫秒数	|
|/show_start_time |Long |No |0|No| Timing show start time (converted to local time according to time_zone), time in milliseconds |
|/show_end_time	|Long	|否	|0|否|	定时展示结束时间（根据time_zone转换成当地时间），时间的毫秒数	   | 
|/show_end_time |Long |No |0|No| The end time of the scheduled display (converted to local time according to time_zone), the time in milliseconds |

> 注意事项：消息并不是到达开始时间就会展示，是在开始时间和结束之间之内进行展示
> Note: The message is not displayed when it reaches the start time, it is displayed between the start time and the end

## 【OPPO】自定义消息有效期
## [OPPO] Custom message validity period

开发者可设置每条消息的有效期，在设置的有效期内，只要设备联网，便会收到消息。消息有效期最长10天，最短1小时。
Developers can set the validity period of each message. Within the set validity period, as long as the device is connected to the Internet, the message will be received. The message is valid for a maximum of 10 days and a minimum of 1 hour.

### Options参数说明:
### Options parameter description:

* 参数示例
* parameter example

```json
"options":{
    "OP":{
        "/off_line":true,
        "/off_line_ttl":86400
    }
}
```

* **key** 说明
* **key** Description


| 名称       | 类型            | 是否必须   | 默认值  | 描述  |支持单推|
| Name | Type | Required | Default Value | Description | Support Single Push |
| ---------  | ------------- | ---- | ---- | -------- |---|
|/off_line	 	|Boolean		|否	|TRUE|	是否进离线消息,【非必填，默认为True】						|是|
|/off_line |Boolean |No |TRUE|
|/off_line_ttl	|Int			|否	|3600|	离线消息的存活时间(time_to_live) (单位：秒), 【最长10天】	|是|
|/off_line_ttl |Int |No |3600| Offline message survival time (time_to_live) (unit: second), [up to 10 days] |Yes|

## 【OPPO】限时展示
## 【OPPO】Limited time display

消息在通知栏展示后开始计时，到达填写的相对应时间后自动从通知栏消失
The message starts timing after the notification bar is displayed, and automatically disappears from the notification bar after reaching the corresponding time filled in

### Options参数说明:
### Options parameter description:

* 参数示例
* parameter example

```json
"options":{
                 "OP":{
                     "/show_ttl":86400
                 }
             }
```

* **key** 说明
* **key** Description


| 名称       | 类型            | 是否必须   | 默认值  |支持单推| 描述  |
| Name | Type | Required | Default | Single Push Support | Description |
| ---------  | ------------- | ---- | ---- | -------- |---|
|/show_ttl	 	|int		|否	|86400|是|	限时展示(单位：秒)，消息在通知栏展示后开始计时，到达填写的相对应时间后自动从通知栏消失，默认是1天。时间范围6 * 60 * 60 s -- 48 * 60 * 60 s|
|/show_ttl |int |No |86400|Yes| Time-limited display (unit: seconds), the message starts timing after the message is displayed in the notification bar, and automatically disappears from the notification bar when the corresponding time is reached. The default is 1 day. Time range 6 * 60 * 60 s -- 48 * 60 * 60 s|

## 【OPPO】动作参数
## 【OPPO】Action parameters

打开应用内页或网页时传递给应用或网页
Passed to the app or web page when the in-app page or web page is opened

### Options参数说明:
### Options parameter description:

* 参数示例
* parameter example

```json
"options":{
	"OP":{
		"/action_parameters/key":"value",
		"/action_parameters/key1":"value1"
	}
}
```

* **key** 说明
* **key** Description


| 名称       | 类型            | 是否必须   | 默认值  |支持单推| 描述  |
| Name | Type | Required | Default | Single Push Support | Description |
| ---------  | ------------- | ---- | ---- | -------- |---|
|/action_parameters/XXX	 	|String		|否	|null|是|XXX表示自定义参数，动作参数，打开应用内页或网页时传递给应用或网页|
|/action_parameters/XXX |String |No |null|Yes|XXX represents custom parameters, action parameters, which are passed to the app or web page when the in-app page or web page is opened|
                                                               
## 【vivo】消息分类
## [vivo] message classification

vivo消息分类功能将推送消息类型分为运营消息和系统消息，默认下发运营消息。运营消息单用户单应用单日接收条数上限为5条，系统消息不限。系统消息功能不用申请，可以直接使用，如特殊情况需额外提升系统消息量级，请<a target="_blank" href="https://dev.vivo.com.cn/documentCenter/doc/359">参见（vivo官方文档）推送消息分类功能说明</a>。
The vivo message classification function divides push message types into operational messages and system messages, and operational messages are delivered by default. The maximum number of operational messages received by a single user and a single application in a single day is 5, and there is no limit to system messages. The system message function does not need to be applied for, and can be used directly. If you need to increase the system message level in special circumstances, please <a target="_blank" href="https://dev.vivo.com.cn/documentCenter/doc/359">refer to the description of the push message classification function (vivo official documentation)</a> .

### Options参数说明:
### Options parameter description:


* 参数示例
* parameter example

```json
"options": {
	"VV": {
		"/classification": 0
	}
}
```

* **key** 说明
* **key** Description

| 名称            | 类型    | 是否必须 | 默认值 | 描述                                         |
| name | type | required | default value | description |
|:---------------|:--------|:-------|:------|:---------------------------------------------|
| /classification | Integer | 否      | 0     | value: 0代表运营消息，1代表系统消息 |
| /classification | Integer | no | 0 | value: 0 for operational messages, 1 for system messages |


## 【vivo】通知类型
## [vivo] notification type

通知消息类型，响铃和振动设置，只对Android 8.0及以下系统有效
Notification message type, ringtone and vibration settings, only valid for Android 8.0 and below systems
### Options参数说明:
### Options parameter description:


* 参数示例
* parameter example

```json
"options": {
	"VV": {
		"/notifyType": 0
	}
}
```

* **key** 说明
* **key** Description

| 名称            | 类型    | 是否必须 | 默认值 | 描述                                         |
| name | type | required | default value | description |
|:---------------|:--------|:-------|:------|:---------------------------------------------|
| /notifyType | int | 是      | 无    | 通知类型 1:无，2:响铃，3:振动，4:响铃和振动  注意：只对Android 8.0及以下系统有效 |
| /notifyType | int | Yes | None | Notification Type 1: None, 2: Ring, 3: Vibrate, 4: Ring and Vibrate Note: Only valid for Android 8.0 and below |

## 【vivo】网络方式 
## 【vivo】Network mode

开发者可设置手机接收消息的网络方式,若设置wifi下发送，只有手机联网方式为wifi才能收到消息；设置不限，手机只要联网即可收到消息
The developer can set the network mode for the mobile phone to receive messages. If the mobile phone is set to send under wifi, the message can only be received if the mobile phone's networking mode is wifi; the settings are not limited, and the mobile phone can receive messages as long as it is connected to the Internet

### Options参数说明:
### Options parameter description:


* 参数示例
* parameter example

```json
"options": {
	"VV": {
		"/networkType": -1
	}
}
```

* **key** 说明
* **key** Description

| 名称            | 类型    | 是否必须 | 默认值 | 描述                                         |
| name | type | required | default value | description |
|:---------------|:--------|:-------|:------|:---------------------------------------------|
| /networkType | int | 否      | -1    | 网络方式 -1：不限，1：wifi下发送|
| /networkType | int | no | -1 | network type -1: unlimited, 1: send under wifi|


## 【vivo】消息保留时长
## [vivo] message retention time

开发者可设置每条消息的保留时长，在设置的保留时长内，只要设备联网，便会收到消息。
The developer can set the retention time of each message. Within the set retention time, as long as the device is connected to the Internet, the message will be received.

### Options参数说明:
### Options parameter description:

* 参数示例
* parameter example

```json
"options":{
	"VV":{
		"/timeToLive":86400
	}
}
```

* **key** 说明
* **key** Description


| 名称       | 类型            | 是否必须   | 默认值  | 描述  |
| name | type | required | default value | description |
| ---------  | ------------- | ---- | ---- | -------- |
|/timeToLive	 	|int		|否	|86400|	消息保留时长 单位：秒，单推取值至少60秒，群推至少900秒，最长7天。当值为空时，默认一天|
|/timeToLive |int |No |86400| Message retention time Unit: second, the value is at least 60 seconds for single push, at least 900 seconds for group push, and up to 7 days. When the value is empty, the default is one day|

## 【vivo】客户端自定义键值对
## [vivo] Client-side custom key-value pair

客户端自定义键值对,app可以按照客户端SDK接入文档获取该键值对
Client-defined key-value pair, the app can obtain the key-value pair according to the client SDK access documentation

### Options参数说明:
### Options parameter description:

* 参数示例
* parameter example

```json
"options":{
	"VV":{
		"/clientCustomMap/key":"value",
		"/clientCustomMap/key1":"value1"
	}
}
```

* **key** 说明
* **key** Description


| 名称       | 类型            | 是否必须   | 默认值  | 描述  |
| name | type | required | default value | description |
| ---------  | ------------- | ---- | ---- | -------- |
|/clientCustomMap/XXX	 	|String		|否	|null|客户端自定义键值对,app可以按照客户端SDK接入文档获取该键值对|
|/clientCustomMap/XXX |String |No |null|Custom key-value pair on the client side, the app can obtain the key-value pair according to the client SDK access document|
                                                               



## ios厂商通道消息
## ios vendor channel message

具体参数含义详见<a target="_blank" href="https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/PayloadKeyReference.html">苹果APNs文档</a>
For specific parameter meanings, please refer to <a target="_blank" href="https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/PayloadKeyReference.html">Apple APNs documentation</a>

| 名称       | 类型            | 是否必需   | 默认值  | 描述  |
| name | type | required | default value | description |
| ---------  | ------------- | ---- | ---- | -------- |
|type|String|否|notify默认通知消息|voip：voip语音推送，notify：apns通知消息|
|type|String|No|notify default notification message|voip: voip voice push, notify: apns notification message|
|aps  |Json |否|无|推送通知消息内容|
|aps |Json |No |None |Push Notification Message Content|
|auto_badge |String|否|无|用于计算icon上显示的数字，还可以实现显示数字的自动增减，如“+1”、 “-1”、 “1” 等，计算结果将覆盖badge|
|auto_badge |String|No|None|It is used to calculate the number displayed on the icon, and it can also realize the automatic increase or decrease of the displayed number, such as "+1", "-1", "1", etc. The calculation result will cover the badge|
|payload|String|否|无|增加自定义的数据|
|payload|String|No|None|Add custom data|
|multimedia|Json Array|否|无|多媒体设置|
|multimedia|Json Array|No|None|Multimedia Settings|
|apns-collapse-id|String|否|无|使用相同的`apns-collapse-id`可以覆盖之前的消息|
|apns-collapse-id|String|No|None|A previous message can be overwritten with the same `apns-collapse-id`|

**aps**

| 名称       | 类型            | 是否必需   | 默认值  | 描述  |
| name | type | required | default value | description |
| ---------  | ------------- | ---- | ---- | -------- |
|alert  |Json |否|无| 通知消息|
|alert |Json |No |None|Notification Message|
|content-available  | Number| 否 |0|0表示普通通知消息(默认为0)；<br>1表示静默推送(无通知栏消息)，静默推送时不需要填写其他参数。<br>苹果建议1小时最多推送3条静默消息|
|content-available | Number| No |0|0 means normal notification message (default is 0);<br> 1 means silent push (no notification bar message), no other parameters need to be filled in silent push.<br> Apple recommends pushing up to 3 silent messages per hour|
|sound  |String |否|无|通知铃声文件名，如果铃声文件未找到，响铃为系统默认铃声。<br>无声设置为“com.gexin.ios.silence”或不填|
|sound |String |No|None|Notification ringtone file name, if the ringtone file is not found, the ringtone is the system default ringtone.<br> Set silent to &quot;com.gexin.ios.silence&quot; or leave it blank|
|category | String|否|无  |在客户端通知栏触发特定的action和button显示|
|category | String|No|None |Trigger specific actions and button display in the client notification bar|
|thread-id  | String|否|无  |ios的远程通知通过该属性对通知进行分组，仅支持iOS 12.0以上版本|
|thread-id | String|No|None |The remote notification of ios groups notifications by this property, only supports iOS 12.0 and above|

**alert**

| 名称       | 类型            | 是否必需   | 默认值  | 描述  |
| name | type | required | default value | description |
| ---------  | ------------- | ---- | ---- | -------- |
|title| String| 否|无|通知消息标题|
|title| String| No|None|Notification message title|
|body|  String| 否|无|通知消息内容|
|body| String| No|None|Notification Message Content|
|action-loc-key|  String| 否|无|（用于多语言支持）指定执行按钮所使用的Localizable.strings|
|action-loc-key| String| No |None| (for multi-language support) Specifies the Localizable.strings used by the execute button |
|loc-key  |String|  否|无|（用于多语言支持）指定Localizable.strings文件中相应的key|
|loc-key |String| no |none| (for multi-language support) specifies the corresponding key| in the Localizable.strings file
|loc-args |String Array|否|无|  如果loc-key中使用了占位符，则在loc-args中指定各参数|
|loc-args |String Array|No |None| If placeholders are used in loc-key, specify each parameter in loc-args|
|launch-image |String|  否|无|指定启动界面图片名|
|launch-image |String| No|None|Specify the image name of the launch interface|
|title-loc-key| String|否|无| (用于多语言支持）对于标题指定执行按钮所使用的Localizable.strings,仅支持iOS8.2以上版本|
|title-loc-key| String|No|None| (for multi-language support) For the Localizable.strings used by the title-specific execution button, only iOS8.2 and later versions are supported|
|title-loc-args|  String Array  |否|无|对于标题,如果loc-key中使用的占位符，则在loc-args中指定各参数,仅支持iOS8.2以上版本|
|title-loc-args| String Array |No|None|For the title, if placeholders are used in loc-key, specify each parameter in loc-args, only supports iOS8.2 and above|
|subtitle|  String  |否|无|通知子标题,仅支持iOS8.2以上版本|
|subtitle| String |No|None|Notification subtitle, only supports iOS8.2 and above|
|subtitle-loc-key|  String  |否|无|当前本地化文件中的子标题字符串的关键字,仅支持iOS8.2以上版本|
|subtitle-loc-key| String |No|None|The keyword of the subtitle string in the current localization file, only supports iOS8.2 and above|
|subtitle-loc-args| String Array  |否|无|当前本地化子标题内容中需要置换的变量参数 ,仅支持iOS8.2以上版本|
|subtitle-loc-args| String Array |No|None|Variable parameters that need to be replaced in the current localized subtitle content, only supports iOS8.2 and above|

**multimedia说明**：
**multimedia description**:

该字段为Array类型，最多可设置3个子项，每个参数定义如下所示：
This field is of type Array, and up to 3 sub-items can be set. Each parameter is defined as follows:

| 名称       | 类型            | 是否必需   | 默认值  | 描述  |
| name | type | required | default value | description |
| ---------  | ------------- | ---- | ---- | -------- |
|url| String  | 是|无|多媒体资源地址|
|url| String | Yes|None|Multimedia resource URL|
|type |Number |是|无|资源类型（1.图片，2.音频，3.视频）|
|type |Number|Yes|None|Resource Type (1.Image, 2.Audio, 3.Video)|
|only_wifi| Boolean |否|false| 是否只在wifi环境下加载，如果设置成true,但未使用wifi时，会展示成普通通知|
|only_wifi| Boolean |No|false| Whether to load only in wifi environment, if set to true, but when wifi is not used, it will be displayed as a normal notification|

示例：
Example:

voip语音推送：
voip voice push:

```json
{
    "ios":{
        "type":"voip",
        "payload":"自定义消息"
    }
}
```

apns通知消息
apns notification message

```json
{
    "IOS":{
        "type":"notify",
        "payload":"自定义消息",
        "aps":{
            "alert":{
                "title":"通知标题",
                "body":"通知内容"
            },
            "content-available":0,
            "sound":"com.gexin.ios.silence",
            "category":"ACTIONABLE"
        },
        "auto_badge":"+1",
        "multimedia": [{
            "url": "https://xxx",
            "type": 1,
            "only_wifi": false
        }]
    }
}
```

apn静默推送 可参考<a target="_blank" href="https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/CreatingtheNotificationPayload.html#//apple_ref/doc/uid/TP40008194-CH10-SW8">苹果APNs文档</a>
For apn silent push, please refer to <a target="_blank" href="https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/CreatingtheNotificationPayload.html#//apple_ref/doc/uid/TP40008194-CH10-SW8">Apple APNs documentation</a>

```json
{
    "ios":{
        "aps":{
            "content-available":1
        },
        "payload": "自定义消息"
    }
}
```



## 【UPS】展开式通知
## 【UPS】Expanded Notification

通知展示样式，文本+长文本样式和文本+大图样式，二者选其一；**该参数作用于UPS下面的所有机型，比如ST,SN等等**。
Notification display style, text + long text style and text + large image style, choose one of the two; **This parameter applies to all models under the UPS, such as ST, SN, etc.**.

### Options参数说明:
### Options parameter description:

* 参数示例
* parameter example

```json
 "options":{
	"UPS":{
		"bigText":"请填写长文本内容"
		//"bigImageUrl":"请填写大图的url地址"
		//"bigImageUrl":"Please fill in the url address of the big image"
	}
}
```

* **key** 说明
* **key** Description

| 名称       | 类型            | 是否必须   | 默认值  | 描述  |
| name | type | required | default value | description |
| ---------  | ------------- | ---- | ---- | -------- |
|bigText	 	|String		|否	|无|通知展示文本+长文本样式的长文本内容|
|bigText |String |No |None|Notification display text + long text content in long text style|
|bigImageUrl	|String		|否	|无|通知展示大图样式的大图内容，填写大图的URL地址|
|bigImageUrl |String |No |None|Notify to display the big image content in big image style, fill in the URL address of the big image|

<div class="weixin-support">
    <div class="weixin-support-focus">
        <img src="https://web-assets.dcloud.net.cn/unidoc/zh/weixin.png" alt="" class="weixin-support-icon">
        联系
        connect
        <br>
        个推
        push
    </div>
    <div class="weixin-support-content">
		<img src="https://web-assets.dcloud.net.cn/unidoc/zh/support.jpg" alt="" class="weixin-support-icon">
       微信扫一扫
       WeChat scan
		<br>
        随时联系个推技术支持
        Feel free to contact Getui technical support
    </div>
</div>

<style>
.weixin-support {
  position: fixed;
  z-index: 10;
  bottom: calc(10% + 265px);
  right: 230px;
}
@media screen and (max-width: 1499px) {
	.weixin-support {
	  right: 10px;
	}
}
.weixin-support img{
	background: #0591F0;
}
.weixin-support-focus {
  padding: 10px 8px;
  color: #fff;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  background: #0591F0;
  box-shadow: 0px 4px 8px rgba(0, 105, 202, 0.24);
  border-radius: 2px;
}
.weixin-support-focus .iconfont{
  display: block;
  font-size: 16px;
  text-align: center;
}
.weixin-support-icon{
  width: 30px;
  display: block;
  margin-bottom: 2px;
  margin-top: -4px;
}
.weixin-support-content {
  z-index: 10;
  display: none;
  position: absolute;
  right: 50px;
  top: -100px;
  background-color: #fff;
  padding: 20px;
  margin-right: 10px;
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  width: 200px;
  font-size: 14px;
  box-shadow: 0 0 10px #ccc;
}
.weixin-support:hover .weixin-support-content{
  display: block;
}
.weixin-support-content img{
  display: block;
  height: 200px;
  width: 200px;
}
</style>