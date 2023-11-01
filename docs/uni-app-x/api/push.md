## uni.getPushClientId(options) @getpushclientid

<!-- UTSAPIJSON.getPushClientId.description -->

<!-- UTSAPIJSON.getPushClientId.param -->

<!-- UTSAPIJSON.getPushClientId.returnValue -->

<!-- UTSAPIJSON.getPushClientId.compatibility -->

<!-- UTSAPIJSON.getPushClientId.tutorial -->

## uni.onPushMessage(callback) @onpushmessage

<!-- UTSAPIJSON.onPushMessage.description -->

<!-- UTSAPIJSON.onPushMessage.param -->

<!-- UTSAPIJSON.onPushMessage.returnValue -->

<!-- UTSAPIJSON.onPushMessage.compatibility -->

<!-- UTSAPIJSON.onPushMessage.tutorial -->

## uni.offPushMessage(callback) @offpushmessage

<!-- UTSAPIJSON.offPushMessage.description -->

<!-- UTSAPIJSON.offPushMessage.param -->

<!-- UTSAPIJSON.offPushMessage.returnValue -->

<!-- UTSAPIJSON.offPushMessage.compatibility -->

<!-- UTSAPIJSON.offPushMessage.tutorial -->

## uni.getChannelManager() @getchannelmanager

<!-- UTSAPIJSON.getChannelManager.description -->

<!-- UTSAPIJSON.getChannelManager.param -->

<!-- UTSAPIJSON.getChannelManager.returnValue -->

<!-- UTSAPIJSON.getChannelManager.compatibility -->

<!-- UTSAPIJSON.getChannelManager.tutorial -->

## 注意事项

* 由于Android通知渠道的机制问题，一旦通知渠道建立，便不能修改此渠道的配置，即使删除渠道后再次创建同channelId名称的渠道，也不会改变原先渠道的配置（除非删除应用），最明显的现象就是铃声动态修改失败，比如调用`setPushChannel`时，第一次的设置参数是`{"channelId":"test","soundName":"pushsound"}` , 这时你想切换铃音，你的channelId就不能再叫test了，而应该为`{"channelId":"test2","soundName":"ring"}` ，此时会新建一个渠道。

## uni.createPushMessage(options) @createpushmessage

<!-- UTSAPIJSON.createPushMessage.description -->

<!-- UTSAPIJSON.createPushMessage.param -->

<!-- UTSAPIJSON.createPushMessage.returnValue -->

<!-- UTSAPIJSON.createPushMessage.compatibility -->

<!-- UTSAPIJSON.createPushMessage.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->

## 注意事项

* 关于隐私安全问题，由于在调用`getPushClientId`或者`onPushMessage`时，才会初始化个推SDK，所以开发者要确保弹出隐私框之前不调用此两项API。
* 关于图标的配置，需要创建[nativeResources](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android.html#%E5%BA%94%E7%94%A8%E8%B5%84%E6%BA%90)目录，放置对应分辨率的图片资源即可 ，目录配置如下

    ```
    ├── nativeResources
    │   └── android
    │       └── res
    │           ├── drawable-ldpi
    │           │   ├── push.png            // 分辨率要求48x48
    │           │   └── push_small.png      // 分辨率要求18x18
    │           ├── drawable-mdpi
    │           │   ├── push.png            // 分辨率要求64x64
    │           │   └── push_small.png      // 分辨率要求24x24
    │           ├── drawable-hdpi
    │           │   ├── push.png            // 分辨率要求96x96
    │           │   └── push_small.png      // 分辨率要求36x36
    │           ├── drawable-xhdpi
    │           │   ├── push.png            // 分辨率要求128x128
    │           │   └── push_small.png      // 分辨率要求48x48
    │           ├── drawable-xxhdpi
    │           │   ├── push.png            // 分辨率要求192x192
    │           │   └── push_small.png      // 分辨率要求72x72
    │           ├── drawable-xxxhdpi
    │           │   └── push_small.png      // 分辨率要求96x96
    │           └── raw
    │               └── pushsound.mp3       // 声音文件， 自定义推送铃音时使用
    ```

* `setPushChannel`设置新建渠道时，`soundName`字段的值为nativeResources->android->res->raw中存放的音频文件名称，注意不要带文件的后缀，比如`pushsound.mp3`文件，例：
  ```
	const channelManager = getChannelManager()
	channelManager.setPushChannel({
		channelId: "test1",
		channelDesc: "test1 desc",
		soundName: "pushsound"
	})
  ```
* 在云端配置厂商推送信息时，需要使用unipsuh2.0进行配置。
