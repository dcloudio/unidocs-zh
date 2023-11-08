App启动时，系统加载应用渲染首页需要一定的时间，为了避免用户等待，手机操作系统提供了特殊的启动界面设计，让用户先看到一个简单的界面，等应用加载完成后正式进入应用首页。
When the app starts, it takes a certain amount of time for the system to load the application and render the home page. In order to avoid the user's waiting, the mobile operating system provides a special startup interface design, allowing users to see a simple interface first, and then officially enter the application home page after the application is loaded.

这个界面，即被称为启动界面，也成称为 splash 或 lauch screen。
This interface is called the startup interface, also known as splash or lauch screen.

### 启动界面选项  
### Startup interface options

#### 等待首页渲染完毕后再关闭Splash图  
#### Wait until the home page is rendered before closing the Splash image

进入应用后启动界面在合适的时机会自动关闭并显示应用首页，可在manifest.json文件中进行配置。
After entering the application, the startup interface will automatically close at the right time and display the application home page, which can be configured in the manifest.json file.

打开项目的manifest.json文件，在“App启动界面配置”中的“启动界面选项”配置是否“等待首页渲染完毕后再关闭Splash图”：
![](https://native-res.dcloud.net.cn/images/uniapp/splashscreen/setting-closesplash-onrender.png)

- 勾选“等待首页渲染完毕后再关闭Splash图”，表示需要等待首页渲染完成后再关闭启动界面  
- Check "Wait for the rendering of the home page before closing the Splash image", indicating that you need to wait for the rendering of the home page to complete before closing the startup interface
- 不勾选“等待首页渲染完毕后再关闭Splash图”，则表示首页加载完成后就会关闭启动界面，此时首页可能没有完成渲染，在部分设备可能会闪一下白屏，不推荐使用。
- If you don't check "Wait for the home page to be rendered before closing the Splash image", it means that the startup interface will be closed after the home page is loaded. At this time, the home page may not be rendered, and a white screen may flash on some devices, which is not recommended.

源码视图支持以下配置:
The source view supports the following configurations:
|属性|类型|默认值|描述|最低版本|
|property|type|default value|description|minimum version|
|:-|:-|:-|:-|:-|
|alwaysShowBeforeRender|Boolean|true|是否等待首页渲染完毕后再关闭启动界面|1.6.0|
|alwaysShowBeforeRender|Boolean|true|Whether to wait for the home page to render before closing the startup interface|1.6.0|
|autoclose|Boolean|true|是否自动关闭启动界面，仅当alwaysShowBeforeRender设置为false时生效，如果需要[手动关闭](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.closeSplashscreen)启动界面，需将 alwaysShowBeforeRender 及 autoclose 均设置为 false。||
|autoclose|Boolean|true|Whether to automatically close the startup interface, it only takes effect when alwaysShowBeforeRender is set to false, if you need to [manually close](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator .closeSplashscreen) to start the interface, both alwaysShowBeforeRender and autoclose should be set to false. ||
|waiting|Boolean|true|是否在启动界面显示等待雪花||
|waiting|Boolean|true|Whether to display waiting snowflakes in the startup interface||

alwaysShowBeforeRender和autoclose属性组合设置，可配置以下三种关闭启动界面（splash）策略：
The combination of alwaysShowBeforeRender and autoclose properties can configure the following three strategies for closing the splash interface:
- 首页渲染完毕后自动关闭启动界面  
- Automatically close the startup interface after the home page is rendered
  App启动后自动检测首页渲染状态，检测到首页渲染完成则自动关闭启动界面
  After the app starts, it automatically detects the rendering status of the home page, and automatically closes the startup interface when it detects that the rendering of the home page is complete.
```
"app-plus" : {
    "splashscreen" : {
        "alwaysShowBeforeRender" : true
    }
}
```
- 首页加载完成后自动关闭启动界面  
- Automatically close the startup interface after the home page is loaded
  App启动后不检测首页渲染状态，当首页加载完成后自动关闭启动界面
  After the app starts, the rendering state of the home page is not detected, and the startup interface is automatically closed after the home page is loaded.
```
"app-plus" : {
    "splashscreen" : {
        "alwaysShowBeforeRender" : false
    }
}
```
- 代码控制关闭启动界面  
- Code control to close the startup interface
  App启动后不会自动关闭启动界面，需要在代码中调用[plus.navigator.closeSplashscreen](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.closeSplashscreen)关闭启动界面。
  After the app starts, the startup interface will not be closed automatically. You need to call [plus.navigator.closeSplashscreen](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.closeSplashscreen) in the code to close the startup interface .
```
"app-plus" : {
    "splashscreen" : {
        "alwaysShowBeforeRender" : false,
        "autoclose" : false,
    }
}
```


### 启动界面设置
### Startup interface settings

`启动界面`原本是一个静态png图片方式。随着移动设备屏幕的多样化，为了让每种屏幕启动时界面都不变形，开发者需要为越来越多的屏幕尺寸制作不同的图片。这带来很多问题，包括制作复杂、app包体积增大等。
`Startup interface` was originally a static png image. With the diversification of mobile device screens, in order to make the interface not deformed when each screen starts, developers need to make different images for more and more screen sizes. This brings many problems, including complex production and increased size of the app package.

HBuilderX中提供了以下`启动界面`方式：
The following `start interface` methods are provided in HBuilderX:

| 启动界面 | 平台支持 | 特点 |
| Startup Screen | Platform Support | Features |
|-- |-- |-- |
| 通用启动界面 | Android、iOS均支持。其中在iOS上通过storyboard实现 |简单，自定义性弱、可适配不同屏幕 |
| Universal launch interface | Both Android and iOS are supported. Among them, it is implemented through storyboard on iOS | Simple, weak customization, adaptable to different screens |
| 自定义启动图 | Android支持，同时支持使用[.9.png图片](#id=9png)；iOS可以打包，但从2020年6月30日起，无法提交Appstore|为了适配不同屏幕尺寸，需要做大量图片	|
| Custom launch image | Android support, also supports the use of [.9.png image](#id=9png); iOS can be packaged, but from June 30, 2020, it cannot be submitted to the Appstore|In order to adapt to different screen sizes , need to do a lot of pictures |
|[自定义storyboard启动界面](#storyboard)|仅iOS支持，HBuilderX2.8+版本 | 可适配不同屏幕 |
|[Custom storyboard startup interface](#storyboard)|Only supported by iOS, HBuilderX2.8+ version | Can adapt to different screens |

> 提示：启动界面设置需提交云端打包后才能生效
> Tip: The startup interface settings need to be submitted to the cloud package to take effect


<a id="common"/>

#### 通用启动界面
#### Generic startup interface

`通用启动界面`是一种简单、可适配不同屏幕的`启动界面`。它以app的logo、name为元素，自动生成适配不同屏幕尺寸、适配不同OS要求的`启动界面`。
`Universal startup interface` is a simple `startup interface` that can adapt to different screens. It uses the logo and name of the app as elements, and automatically generates a `startup interface` that adapts to different screen sizes and different OS requirements.

`通用启动界面`有着最低的门槛，仅需要开发者为app在manifest里配好logo和name即可。并且符合任何应用商店的上线规范。它在iOS上就是通过storyboard实现的。
The `universal startup interface` has the lowest threshold, and only requires the developer to configure the logo and name for the app in the manifest. And it complies with the go-live specifications of any app store. It's implemented on iOS through storyboards.

> 提示`通用启动界面`是为了方便开发者而设计的，它不具有很强的灵活性，如果开发者有较强的自定义需求，Android平台请使用[.9.png格式自定义启动图](#id=9png)、iOS平台请使用[自定义storyboard启动界面](#storyboard)
> Tip `Universal startup interface` is designed for the convenience of developers. It does not have strong flexibility. If developers have strong customization requirements, please use [.9.png format to customize the startup image for Android platform. ](#id=9png)、For iOS platform, please use [custom storyboard startup interface](#storyboard)

##### Android平台通用启动界面
##### Android platform universal startup interface

打开项目的manifest.json文件，在“App启动界面配置”中的“Android启动界面设置”项下勾选“通用启动界面”：  
![](https://native-res.dcloud.net.cn/images/uniapp/splashscreen/setting-android.png)

通用启动界面上部显示应用图标（圆形裁剪，外围显示进度），图标下面为应用名称，效果如下：  
![](https://native-res.dcloud.net.cn/images/uniapp/splashscreen/common-android.png)


##### iOS平台通用启动界面
##### iOS platform universal launch interface

打开项目的manifest.json文件，在“App启动界面配置”中的“iOS启动界面设置”项下勾选“通用启动界面”：  
![](https://native-res.dcloud.net.cn/images/uniapp/splashscreen/setting-ios.png)

通用启动界面使用storyboard实现，在界面上部显示应用图标（无裁剪），图标下面为应用名称，效果如下：  
![](https://native-res.dcloud.net.cn/images/uniapp/splashscreen/common-ios.png)

如果应用开启适配暗黑模式/夜间模式/深色模式，则启动界面背景色会自动使用深色，文字颜色自动使用白色。
If the app is turned on to adapt to dark mode/night mode/dark mode, the background color of the startup interface will automatically use dark color, and the text color will automatically use white.


<a id="default"/>

#### 自定义启动图
#### Custom launch image

##### Android平台自定义启动图
##### Android platform custom launch map

打开项目的manifest.json文件，在“App启动界面配置”中的“Android启动界面设置”项下勾选“自定义启动图”：  
![](https://native-res.dcloud.net.cn/images/uniapp/splashscreen/setting-android-default.png)

##### Android平台使用.9.png启动图@9png  
##### Android platform uses .9.png startup image @9png
目前HBuilderX中仅定义几种标准分辨率的启动图配置，而实际上存在很多不同分辨率的手机，导致启动图在一些不常见的设备会进行拉伸或压缩引起变形，Android平台为了解决此问题就出现了可以适配各种尺寸的一种图片格式“.9.png”。这是一种特殊的图片格式，它可以指定特定的区域进行拉伸而不失真。
At present, HBuilderX only defines several standard resolution startup image configurations. In fact, there are many mobile phones with different resolutions. As a result, the startup image will be stretched or compressed to cause deformation in some uncommon devices. In order to solve this problem, the Android platform There is a picture format ".9.png" that can adapt to various sizes. This is a special picture format that can specify a specific area to stretch without distortion.
**使用.9.png的优点**  
**Advantages of using .9.png**
1. 避免在非标准分辨率手机上缩放变形  
1. Avoid scaling distortion on non-standard resolution phones
2. 可以只配置1张或多张图片适配更多分辨率，减少apk的体积（推荐至少配置1080P高分屏启动图片）  
2. You can configure only 1 or more pictures to adapt to more resolutions and reduce the size of the apk (it is recommended to configure at least 1080P high-resolution screen startup pictures)

**.9.png图片和普通png图片的差异**  
**.9.The difference between png image and normal png image**
1. .9.png图片和一般图片的区别在于.9.png图片有四条黑边，而一般的图片没有，这四条黑边就是用来拉伸和指定显示位置的  
1. The difference between the .9.png picture and the general picture is that the .9.png picture has four black borders, while the general picture does not. These four black borders are used to stretch and specify the display position.
2. 使用.9.png图片后，整个图片应该是包裹着你想要显示的内容的，而没有使用的话整个图片将会被拉伸  
2. After using the .9.png image, the entire image should wrap the content you want to display. If it is not used, the entire image will be stretched

**制作.9.png图片**  
**Make .9.png image**
1. 在Android sdk目录下的tools目录下，有一个叫做draw9patch.bat的文件，双击打开就可以使用（最新android SDK该文件已经不存在，若电脑不没有安装android studio，可下载附件工具编辑.9.png图片）  
1. In the tools directory of the Android sdk directory, there is a file called draw9patch.bat, which can be used by double-clicking to open it (the file no longer exists in the latest android SDK, if the computer does not have android studio installed, you can download the attached tool to edit. 9.png image)
2. 使用android studio，因为android studio已经集成.9.png制作工具，只需选中需要生成的png文件，然后右键，点击create 9-patch file 选项  
2. Use android studio, because android studio has integrated the .9.png production tool, just select the png file that needs to be generated, then right-click and click the create 9-patch file option

详细制作步骤可参考链接：[Android中.9图片的含义及制作教程](https://www.jianshu.com/p/3fd048644e3f?tdsourcetag=s_pctim_aiomsg)  
For detailed production steps, please refer to the link: [The meaning and production tutorial of .9 pictures in Android](https://www.jianshu.com/p/3fd048644e3f?tdsourcetag=s_pctim_aiomsg)
可以使用在线.9.png生成工具：[http://inloop.github.io/shadow4android/](http://inloop.github.io/shadow4android/)  
You can use the online .9.png generation tool: [http://inloop.github.io/shadow4android/](http://inloop.github.io/shadow4android/)

**.9.png配置使用**  
**.9.png configuration use**
打开项目的manifest.json文件，在“App启动界面配置”中的“Android启动界面设置”项下勾选“自定义启动图”，在各分辨率启动图设置框选择需要使用的.9.png图片（图片尺寸请按照提示尺寸对应上传），保存后提交云端打包即可。
Open the manifest.json file of the project, check "Custom Launch Image" under "Android Launch Interface Settings" in "App Launch Interface Configuration", and select the desired .9.png in each resolution launch image setting box Picture (please upload the picture size according to the prompt size), save it and submit it to the cloud for packaging.
> 不同尺寸的启动图是为了适配不同分辨率的手机，所以提交打包时请务必上传不同尺寸的启动图，切忌上传多张同尺寸启动图  
> The splash images of different sizes are to adapt to mobile phones of different resolutions, so please be sure to upload the splash images of different sizes when submitting the package, and do not upload multiple launch images of the same size

可以参考开发者在[插件市场](https://ext.dcloud.net.cn/search?q=.9)做好的.9样例工程
You can refer to the .9 sample project done by the developer in [Plugin Market](https://ext.dcloud.net.cn/search?q=.9)


##### iOS平台自定义启动图
##### iOS platform custom launch map

> 提示：2020年6月30日起，苹果AppStore审核要求应用在启动时，不能使用启动图片，必须改为使用Storyboard来制作启动界面，如果需要提交AppStore请使用[通用启动界面](#common)或[自定义storyboard启动界面](#storyboard)。
> Tip: From June 30, 2020, the Apple AppStore audit requires that the app cannot use the launch image when launching, and must instead use Storyboard to create the launch interface. If you need to submit the AppStore, please use the [Common Launch Interface](#common) Or [custom storyboard launch interface](#storyboard).

打开项目的manifest.json文件，在“App启动界面配置”中的“iOS启动界面设置”项下勾选“自定义启动图”：  
![](https://native-res.dcloud.net.cn/images/uniapp/splashscreen/setting-ios-default.png)



<a id="storyboard"/>

#### 自定义storyboard启动界面
#### Custom storyboard startup interface

Storyboard是Apple提供的一种简化的布局界面，通过xml描述界面，不能编程。
Storyboard is a simplified layout interface provided by Apple, which describes the interface through xml and cannot be programmed.
虽然无法制作非常灵活的界面，但满足启动界面是没问题的，比如设定背景色背景图、设定前景文字、图片的位置。
Although it is impossible to make a very flexible interface, it is no problem to meet the startup interface, such as setting the background color and background image, setting the foreground text, and the position of the image.
storyboard的优势是启动速度快。在App的真实首页被渲染完成前，可以快速给用户提供一个基于Storyboard的启动屏。
The advantage of storyboard is that it starts fast. Before the real home page of the app is rendered, a Storyboard-based splash screen can be quickly provided to the user.

##### 制作storyboard文件
##### Make storyboard file

storyboard有两种制作方式：  
**1.** **直接使用[模板文件(点击下载)](https://native-res.dcloud.net.cn/uni-app/file/CustomStoryboard.zip)中提供的相对常用的 storyboard 模板，可在这个文件的基础上进行自定义（不需要 Mac 及 XCode，详情请查看附件中的 readme 教程）**
此 storyboard 文件适用于各种 iPhone 及 iPad 设备的横竖屏，支持自定义界面元素包括
This storyboard file is suitable for portrait and landscape screens on various iPhone and iPad devices, and supports custom interface elements including:

- 页面背景图片或背景颜色
- Page background image or background color
- 中间显示图片
- middle display picture
- 底部显示文字及颜色
- Bottom display text and color
注：每一项都是可选的（比如只显示背景图片，只提供背景图片即可）
Note: each item is optional (for example, only the background image is displayed, only the background image can be provided)

**2.** 使用xcode自行制作。xcode提供了可视化的制作storyboard的方式，但依赖于mac电脑。在xcode中制作storyboard的教程请自行网络搜索，请注意下面的注意事项。
**2.** Make it by yourself using xcode. Xcode provides a visual way to make storyboards, but it depends on Mac computers. For the tutorial of making storyboard in xcode, please search the Internet by yourself, please pay attention to the following precautions.

HBuilderX需要的自定义storyboard文件格式为zip压缩包，里面要求包含XCode使用的.storyboard文件，以及.stroybard文件中使用的png图，如下图所示：  
![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/pkg/splash/storyboard.png)

**注意事项**
**Precautions**
- zip压缩包中不要包含目录，直接包含.storyboard和.png文件
- Do not include directories in the zip archive, directly include .storyboard and .png files
- 有且只有一个.storyboard文件
- There is one and only one .storyboard file
- .storyboard文件可以通过xcode生成，也可以使用任何文本编辑器修改其源码，比如对.storyboard文件点右键，使用HBuilderX打开。它本质是一个xml文件。
- The .storyboard file can be generated by xcode, or you can use any text editor to modify its source code, such as right-clicking the .storyboard file and opening it with HBuilderX. It is essentially an xml file.
- png文件名称中的@2x和@3x是适配不同分辨率的图片，系统会自动根据设备dpi选择，可参考[这里](https://www.jianshu.com/p/5b5f47ff87d4)
- The @2x and @3x in the png file name are pictures of different resolutions, and the system will automatically select them according to the dpi of the device. Please refer to [here](https://www.jianshu.com/p/5b5f47ff87d4)
- 为了避免png文件名称与应用中内置的文件名冲突，建议以dc_launchscreen开头
- In order to avoid the png file name conflict with the file name built in the app, it is recommended to start with dc_launchscreen
- 制作 storyboard 时，**请将图片资源直接拖到放工程中，不要放到 imageset 里面，并且图片命名要保证一定的唯一性可参考附件中的示例**
- When making a storyboard, **please drag and drop the image resources directly into the project, do not put them in the imageset, and the image naming should ensure a certain uniqueness, please refer to the example in the attachment**
- XCode中创建 storyboard 文件时，**页面元素添加约束时一定要相对于** `Superview`，不然启动图到 loading页面过渡时页面会跳动或者变形  
- When creating a storyboard file in XCode, **page elements must be relative to ** `Superview` when adding constraints, otherwise the page will jump or deform when the startup image transitions to the loading page
![](https://img.cdn.aliyun.dcloud.net.cn/client/ask/pkg/splash/xcode.png)

##### 使用storyboard文件
##### Using storyboard files

打开项目的manifest.json文件，在“App启动界面配置”中的“iOS启动界面设置”项下勾选“自定义storyboard启动界面”，并选择自己制作的storyboard文件：  
![](https://native-res.dcloud.net.cn/images/uniapp/splashscreen/setting-storyboard.png)

