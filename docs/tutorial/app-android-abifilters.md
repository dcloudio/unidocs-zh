Android平台配置CPU类型针对的是为了提高运行效率使用C/C++语言开发生成的so库，需要为各cpu类型平台单独编译生成对应指令的so库。Java语言开发的代码运行在虚拟机中，由虚拟机适配CPU类型，不涉及到此问题。
The Android platform configures the CPU type for the so library developed and generated using the C/C++ language in order to improve the operating efficiency. It is necessary to compile and generate the corresponding instruction so library for each CPU type platform separately. The code developed in the Java language runs in the virtual machine, and the virtual machine adapts the CPU type, which does not involve this problem.

HBuilder/HBuilderX中使用so库的功能（模块）
Functions (modules) using the so library in HBuilder/HBuilderX
- Audio（录音）：支持mp3格式
- Audio (recording): supports mp3 format
- Geolocation（定位）：百度
- Geolocation: Baidu
- LivePush（直播推流）
- LivePush (live streaming)
- Maps（地图）：高德、百度
- Maps: Gaode, Baidu
- OAuth（登录鉴权）：新浪微博
- OAuth (login authentication): Sina Weibo
- Push（消息推送）：个推、UniPush
- Push (message push): individual push, UniPush
- Share（分享）：新浪微博
- Share: Sina Weibo
- Speech（语音输入）：百度，**注意：讯飞不支持64位**
- Speech (voice input): Baidu, **Note: iFLYTEK does not support 64-bit**
- Weex（原生渲染）：uni-app（自定义组件模式、nvue页面）， **注意：HBuilderX2.1.5及以上版本支持**
- Weex (native rendering): uni-app (custom component mode, nvue page), **Note: HBuilderX2.1.5 and above versions support**
- Android X5 Webview（腾讯TBS）：腾讯X5内核，**注意：不支持x86**
- Android X5 Webview (Tencent TBS): Tencent X5 kernel, **Note: x86 is not supported**

> HBuilderX2.7.0+ 调整 云端打包默认不再包含 x86 CPU类型库，减少apk包体积[详情](id=nox86)  
> HBuilderX2.7.0+ adjustment Cloud package no longer includes x86 CPU type library by default, reducing the size of apk package [Details](id=nox86)
> HBuilderX2.1.5+ 开始支持Android平台的新增适配64位CPU类型，云端打包支持配置App支持的CPU类型
> HBuilderX2.1.5+ began to support the new 64-bit CPU type for Android platform, and cloud package supports configuration of CPU types supported by App
> 满足Google Play从2019年8月1日起上传的App必需支持64位CPU的要求。
> Meet the requirement that apps uploaded on Google Play from August 1, 2019 must support 64-bit CPU.



### CPU类型
### CPU type
HBulderX已适配支持以下主流CPU类型：
HBulderX has been adapted to support the following mainstream CPU types:
- armeabi-v7a
第7代及以上的ARM处理器（ARM32位），市面上大多数手机使用此CPU类型。
7th generation and above ARM processors (ARM32-bit), most mobile phones on the market use this CPU type.
- arm64-v8a
第8代、64位ARM处理器（ARM64位），最近两年新发的设备使用此CPU类型，可以兼容使用armeabi-v7a的so库。
The 8th generation, 64-bit ARM processor (ARM64-bit), the newly released devices in the last two years use this CPU type, which is compatible with the so library of armeabi-v7a.
- x86
少部分平板使用x86，AS模拟器中选了intel x86时使用x86处理器，以及其它常用三方模拟器通常使用x86
A small number of tablets use x86, when intel x86 is selected in the AS simulator, the x86 processor is used, and other commonly used third-party simulators usually use x86

**注意：不勾选x86在模拟器上可能无法正常运行，以下是常见模拟器是否需要包含x86的情况**
**Note: If x86 is not checked, it may not work properly on the emulator. The following are common emulators that need to include x86**
- 雷电模拟器：
- Thunderbolt Simulator:
  3.x必须包含x86，否则无法正常运行；4.x无需包含x86。
  3.x must include x86 or it will not work properly; 4.x does not need to include x86.
- 夜神模拟器：
- NoxPlayer:
  必须包含x86，否则无法正常运行
  Must include x86 or it won't work
- MuMu模拟器：
- MuMu Simulator:
  无需包含x86
  No need to include x86
- 逍遥模拟器：
- MEmu Emulator:
  无需包含x86
  No need to include x86
- BlueStacks（蓝叠模拟器）：
- BlueStacks (BlueStacks Simulator):
  无需包含x86
  No need to include x86
- 腾讯模拟器（手游助手）：
- Tencent Simulator (Mobile Game Assistant):
  必须包含x86，否则无法正常运行
  Must include x86 or it won't work
- 其它模拟器：
- Other emulators:
  未测试验证，建议包含x86，确保在模拟器正常运行
  Not tested and verified, it is recommended to include x86 to ensure normal operation in the simulator


### 配置支持的CPU类型  
### Configure supported CPU types
**可视化界面配置**  
**Visual interface configuration**
打开项目的manifest.json文件，在 “App常用其它设置” -> “Android设置” -> “支持CPU类型” 项中勾选需要支持的CPU类型：
![](https://native-res.dcloud.net.cn/images/uniapp/others/abifilters-manifest.png)

**源码视图配置**  
**Source view configuration**
打开项目的manifest.json文件，切换到“源码视图”，根据项目类型进行配置
Open the manifest.json file of the project, switch to the "source view", and configure according to the project type

- uni-app项目  
- uni-app project
在 "app-plus"->"distribute"->"android" 节点的 abiFilters 属性配置支持的CPU类型，示例如下：
Configure the supported CPU types in the abiFilters attribute of the "app-plus"->"distribute"->"android" node, for example:
``` js  
  "app-plus": {
    "distribute": {
      "android": {
        "abiFilters": [
          "armeabi-v7a",
          "arm64-v8a"
        ]
        //...
      },
      //...
    },
    //...
  },
  //..
```


#### 离线打包配置
#### Offline packaging configuration
使用Android studio打开Android原生项目，打开对应项目的build.gradle文件。
Use Android studio to open the Android native project and open the build.gradle file of the corresponding project.
在Android -> defaultConfig下添加支持的CPU类型，如下示例：
Add the supported CPU types under Android -> defaultConfig, as shown in the following example:
``` 
defaultConfig{
	ndk {
    abiFilters 'arm64-v8a','armeabi-v7a'
  }
}
```

**注意：离线打包仅支持arm64-v8a、armeabi-v7a、x86三种类型，建议根据自己需求选择打包的CPU类型**
**Note: Offline packaging only supports three types: arm64-v8a, armeabi-v7a, and x86. It is recommended to choose the type of CPU packaged according to your needs**

### 默认值@default  
- HBuilderX3.92及以下版本，默认值为armeabi-v7a  
- HBuilderX3.93及以上版本，默认值调整为arm64-v8a  


### CPU类型选择建议
### CPU type selection suggestion
ARM64位（arm64-v8a）CPU可以兼容ARM32的指令，也就是说只选择armeabi-v7a类型的so库也可以在64位手机上运行，只是没有完全发挥CPU的性能。
ARM64-bit (arm64-v8a) CPU is compatible with ARM32 instructions, that is to say, only the so library of type armeabi-v7a can also run on 64-bit mobile phones, but it does not fully utilize the performance of the CPU.
选择支持的CPU类型时请参考以下建议：
- 如果不在意apk大小，三种CPU类型都勾选  
- 如果要尽量发挥新设备性能，选择arm64-v8a  
- 如果在意apk大小，选择armeabi-v7a（几乎在所有ARM指令的所有设备上都可正常运行）  
- 如果想兼容性能和apk大小，建议选择armeabi-v7a、arm64-v8a  
- 如果要兼容一些平板和模拟器，选择armeabi-v7a、x86  
不是所有模拟都仅支持x86指令，如雷电（4.x）、MuMu等模拟器也是支持ARM指令。  


### 查看apk支持的CPU类型
### Check the CPU types supported by apk
使用解压工具打开apk，在lib目录下可以查看到支持的CPU类型，如下图所示：  
![](https://native-res.dcloud.net.cn/images/uniapp/others/abifilters-apk.png)


### 常见问题  

#### 在部分华为鸿蒙设备上启动应用慢的问题  
部分华为新设备（Mate60、Mate X5等）使用的芯片运行32位应用时只能跑在小核上，相当于限制的CPU的性能，如果应用只包含armeabi-v7a会导致应用启动速度非常慢。需要勾选arm64-v8a来解决此问题。  
为了适配更多的新设备，建议开发者尽量勾选arm64-v8a。

#### CPU类型配置了x86，云端打包后缺没有包含x86
#### The CPU type is configured with x86, and the cloud package does not include x86
如果勾选了不支持x86的内置模块或uni原生插件，云端打包后不会包含x86
If you check the built-in modules that do not support x86 or uni native plug-ins, x86 will not be included after cloud packaging
- 不支持x86的内置模块  
- Built-in modules that do not support x86
  + Android X5 Webview（腾讯TBS）
  + Android X5 Webview (Tencent TBS)
- uni原生插件  
- uni native plugin
  + 云端插件可以在插件页面详情页面的“平台兼容性”中查看兼容的CPU类型
  + For cloud plugins, you can check the compatible CPU types in the "Platform Compatibility" of the plugin details page
  + 内地插件可以在[package.json查看abis属性配置](https://nativesupport.dcloud.net.cn/NativePlugin/course/package?id=abis)
  + Mainland plug-ins can view the abis attribute configuration in [package.json](https://nativesupport.dcloud.net.cn/NativePlugin/course/package?id=abis)

#### 上架Google Play市场对CPU类型的要求
#### CPU type requirements for listing on Google Play Market
提交Google Play时要求支持64位，建议选择"armeabi-v7a"和"arm64-v8a"两个即可，也可以只选择"arm64-v8a"。  
When submitting to Google Play, it is required to support 64-bit. It is recommended to select "armeabi-v7a" and "arm64-v8a", or you can only select "arm64-v8a".

**注意：不要勾选"x86"**
**Note: Do not check "x86"**

#### CPU类型错误安装提示
#### CPU type error installation prompt
如果打包选择的CPU类型与设备不兼容，会导致无法正常安装。
If the CPU type selected by the package is not compatible with the device, it will not be installed normally.
通过adb命令安装通常会提示如下错误：
Installation through adb command usually prompts the following error:
```
Performing Streamed Install
adb: failed to install android_debug.apk: Failure [INSTALL_FAILED_NO_MATCHING_ABIS: Failed to extract native libraries, res=-113]
```

使用Android Studio自带的x86模拟器，将不包含x86 cpu类型的apk拖到模拟器安装时会弹出如下提示框：  
![](https://native-res.dcloud.net.cn/images/uniapp/others/abifilters-error.png)

<a id="nox86"/>

#### HBuilderx2.7.0+ 云端打包默认CPU类型不再包含x86
#### HBuilderx2.7.0+ cloud package default CPU type no longer includes x86
目前市面上常见的手机都是使用ARM处理器，很少有设备使用x86处理器，因此从HBuilderX2.7.0开始云端打包调整为默认不再包含x86的CPU类型，减少apk包大小：
At present, common mobile phones on the market use ARM processors, and few devices use x86 processors. Therefore, starting from HBuilderX2.7.0, cloud packaging is adjusted to no longer contain x86 CPU types by default, reducing the size of the apk package:
- uni-app项目
- uni-app project
  基础功能apk减少5M+，使用的三方SDK及uni原生插件越多，减少的包尺寸越大，具体值取决于其包含的x86类型的so库大小
  The basic function apk is reduced by 5M+. The more third-party SDKs and uni native plug-ins are used, the larger the package size will be reduced. The specific value depends on the size of the x86 type so library it contains.
- 5+App、Wap2App项目
- 5+App, Wap2App project
  基础功能apk减少100K+，如果使用的三方SDK中存在so库则减少的尺寸较大，具体值取决于其包含的x86类型的so库大小
  The basic function apk is reduced by 100K+. If there is a so library in the third-party SDK used, the reduced size will be larger. The specific value depends on the size of the x86 type so library it contains.

**注意：大多数模拟器（如夜神）必须包含x86，否则应用启动时可能会白屏，请根据上面教程进行配置**
**Note: Most emulators (like Nox) must include x86, otherwise the app may start with a white screen, please configure it according to the tutorial above**

