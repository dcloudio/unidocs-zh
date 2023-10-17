Android平台配置CPU类型针对的是为了提高运行效率使用C/C++语言开发生成的so库，需要为各cpu类型平台单独编译生成对应指令的so库。Java语言开发的代码运行在虚拟机中，由虚拟机适配CPU类型，不涉及到此问题。

HBuilder/HBuilderX中使用so库的功能（模块）
- Audio（录音）：支持mp3格式
- Geolocation（定位）：百度
- LivePush（直播推流）
- Maps（地图）：高德、百度
- OAuth（登录鉴权）：新浪微博
- Push（消息推送）：个推、UniPush
- Share（分享）：新浪微博
- Speech（语音输入）：百度，**注意：讯飞不支持64位**
- Weex（原生渲染）：uni-app（自定义组件模式、nvue页面）， **注意：HBuilderX2.1.5及以上版本支持**
- Android X5 Webview（腾讯TBS）：腾讯X5内核，**注意：不支持x86**

> HBuilderX2.7.0+ 调整 云端打包默认不再包含 x86 CPU类型库，减少apk包体积[详情](id=nox86)  
> HBuilderX2.1.5+ 开始支持Android平台的新增适配64位CPU类型，云端打包支持配置App支持的CPU类型
> 满足Google Play从2019年8月1日起上传的App必需支持64位CPU的要求。



### CPU类型
HBulderX已适配支持以下主流CPU类型：
- armeabi-v7a
第7代及以上的ARM处理器（ARM32位），市面上大多数手机使用此CPU类型。
- arm64-v8a
第8代、64位ARM处理器（ARM64位），最近两年新发的设备使用此CPU类型，可以兼容使用armeabi-v7a的so库。
- x86
少部分平板使用x86，AS模拟器中选了intel x86时使用x86处理器，以及其它常用三方模拟器通常使用x86

**注意：不勾选x86在模拟器上可能无法正常运行，以下是常见模拟器是否需要包含x86的情况**
- 雷电模拟器：
  3.x必须包含x86，否则无法正常运行；4.x无需包含x86。
- 夜神模拟器：
  必须包含x86，否则无法正常运行
- MuMu模拟器：
  无需包含x86
- 逍遥模拟器：
  无需包含x86
- BlueStacks（蓝叠模拟器）：
  无需包含x86
- 腾讯模拟器（手游助手）：
  必须包含x86，否则无法正常运行
- 其它模拟器：
  未测试验证，建议包含x86，确保在模拟器正常运行


### 配置支持的CPU类型  
**可视化界面配置**  
打开项目的manifest.json文件，在 “App常用其它设置” -> “Android设置” -> “支持CPU类型” 项中勾选需要支持的CPU类型：
![](https://native-res.dcloud.net.cn/images/uniapp/others/abifilters-manifest.png)

**源码视图配置**  
打开项目的manifest.json文件，切换到“源码视图”，根据项目类型进行配置

- uni-app项目  
在 "app-plus"->"distribute"->"android" 节点的 abiFilters 属性配置支持的CPU类型，示例如下：
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
使用Android studio打开Android原生项目，打开对应项目的build.gradle文件。
在Android -> defaultConfig下添加支持的CPU类型，如下示例：
``` 
defaultConfig{
	ndk {
            abiFilters 'arm64-v8a','armeabi-v7a'
        }
}
```

**注意：离线打包仅支持arm64-v8a、armeabi-v7a、x86三种类型，建议根据自己需求选择打包的CPU类型**

### 默认值  
- HBuilderX3.92及以下版本，默认值为armeabi-v7a  
- HBuilderX3.93及以上版本，默认值调整为arm64-v8a  


### CPU类型选择建议
ARM64位（arm64-v8a）CPU可以兼容ARM32的指令，也就是说只选择armeabi-v7a类型的so库也可以在64位手机上运行，只是没有完全发挥CPU的性能。
选择支持的CPU类型时请参考以下建议：
- 如果不在意apk大小，三种CPU类型都勾选
- 如果在意apk大小，选择ARM32位即可（几乎在所有ARM指令的所有设备上都可正常运行）
- 如果要兼容一些平板和模拟器，选择ARM32位和X86
不是所有模拟都仅支持x86指令，如雷电（4.x）、MuMu等模拟器也是支持ARM指令。


### 查看apk支持的CPU类型
使用解压工具打开apk，在lib目录下可以查看到支持的CPU类型，如下图所示：  
![](https://native-res.dcloud.net.cn/images/uniapp/others/abifilters-apk.png)


### 常见问题  

#### 在部分华为鸿蒙设备上启动应用慢的问题  
部分华为新设备（Mate60、Mate X5等）使用的芯片运行32位应用时只能跑在小核上，相当于限制的CPU的性能，如果应用只包含armeabi-v7a会导致应用启动速度非常慢。需要勾选arm64-v8a来解决此问题。
为了适配更多的新设备，建议开发者尽量勾选arm64-v8a。

#### CPU类型配置了x86，云端打包后缺没有包含x86
如果勾选了不支持x86的内置模块或uni原生插件，云端打包后不会包含x86
- 不支持x86的内置模块  
  + Android X5 Webview（腾讯TBS）
- uni原生插件  
  + 云端插件可以在插件页面详情页面的“平台兼容性”中查看兼容的CPU类型
  + 内地插件可以在[package.json查看abis属性配置](https://nativesupport.dcloud.net.cn/NativePlugin/course/package?id=abis)

#### 上架Google Play市场对CPU类型的要求
提交Google Play时要求支持64位，建议选择"armeabi-v7a"和"arm64-v8a"两个即可，也可以只选择"arm64-v8a"。  

**注意：不要勾选"x86"**

#### CPU类型错误安装提示
如果打包选择的CPU类型与设备不兼容，会导致无法正常安装。
通过adb命令安装通常会提示如下错误：
```
Performing Streamed Install
adb: failed to install android_debug.apk: Failure [INSTALL_FAILED_NO_MATCHING_ABIS: Failed to extract native libraries, res=-113]
```

使用Android Studio自带的x86模拟器，将不包含x86 cpu类型的apk拖到模拟器安装时会弹出如下提示框：  
![](https://native-res.dcloud.net.cn/images/uniapp/others/abifilters-error.png)

<a id="nox86"/>

#### HBuilderx2.7.0+ 云端打包默认CPU类型不再包含x86
目前市面上常见的手机都是使用ARM处理器，很少有设备使用x86处理器，因此从HBuilderX2.7.0开始云端打包调整为默认不再包含x86的CPU类型，减少apk包大小：
- uni-app项目
  基础功能apk减少5M+，使用的三方SDK及uni原生插件越多，减少的包尺寸越大，具体值取决于其包含的x86类型的so库大小
- 5+App、Wap2App项目
  基础功能apk减少100K+，如果使用的三方SDK中存在so库则减少的尺寸较大，具体值取决于其包含的x86类型的so库大小

**注意：大多数模拟器（如夜神）必须包含x86，否则应用启动时可能会白屏，请根据上面教程进行配置**

