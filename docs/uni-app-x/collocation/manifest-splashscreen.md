App启动时，系统加载应用渲染首页需要一定的时间，为了避免用户等待，手机操作系统提供了特殊的启动界面设计，让用户先看到一个简单的界面，等应用加载完成后正式进入应用首页。

这个界面，即被称为启动界面，也成称为 splash 或 lauch screen。

>HBuilderX3.99+版本支持App启动界面配置  

### Android平台启动界面配置

打开项目的manifest.json文件，在“App启动界面配置”中的“Android启动界面设置”项下配置各设备分辨率启动图：

![](http://dcloud-chjh-native.oss-cn-hangzhou.aliyuncs.com/uni-app-x/doc/splash/splash_screen_android_1.png)

> 提示：启动界面设置需提交云端打包后才能生效

#### Android平台splash关闭时机

splash关闭时机可控制，打开项目的manifest.json文件，选择源码视图，在app->splashScreen节点下设置autoClose值域，控制splash关闭时机，默认onShow

**autoClose取值范围:**

|值域|说明|
|--|--|
|onShow|首页页面生命周期触发onShow时关闭splash|
|onReady|首页页面生命周期触发onReady时关闭splash|

配置示例：

```
"app" : {
    "splashScreen" : {
        "autoClose" : "onReady"
    }
}
```

#### Android平台splash注意事项

1. splash关闭时机中描述的`首页`，指的是第一个真正显示的页面，如项目中pages.json第一个页面A在onLoad生命周期被关闭重新跳转了一个新页面B并显示，则B页面就是`首页`，原因是显示的是页面B，A页面并未显示，
如果是在页面A的onShow或更晚的生命周期关闭在跳转或直接跳转，则页面A是`首页`，因为页面A已经显示符合第一个真正显示的页面。

2. 应用冷启动与热启动的splash展示时间是有区别的。应用冷启动指首次启动或被kill掉进程后的启动，冷启动时初始化环境，数据加载等会占用一些启动时间，所以splash展示时间长一些。热启动指应用已启动后未kill进程再次的启动，由于不会再初始化环境，加载数据等操作，所以相对启动时间较少，splash展示时间也会缩短。

#### Android平台使用.9.png启动图@9png  
目前HBuilderX中仅定义几种标准分辨率的启动图配置，而实际上存在很多不同分辨率的手机，导致启动图在一些不常见的设备会进行拉伸或压缩引起变形，Android平台为了解决此问题就出现了可以适配各种尺寸的一种图片格式“.9.png”。这是一种特殊的图片格式，它可以指定特定的区域进行拉伸而不失真。
**使用.9.png的优点**  
1. 避免在非标准分辨率手机上缩放变形  
2. 可以只配置1张或多张图片适配更多分辨率，减少apk的体积（推荐至少配置1080P高分屏启动图片）  

**.9.png图片和普通png图片的差异**  
1. .9.png图片和一般图片的区别在于.9.png图片有四条黑边，而一般的图片没有，这四条黑边就是用来拉伸和指定显示位置的  
2. 使用.9.png图片后，整个图片应该是包裹着你想要显示的内容的，而没有使用的话整个图片将会被拉伸  

**制作.9.png图片**  
1. 在Android sdk目录下的tools目录下，有一个叫做draw9patch.bat的文件，双击打开就可以使用（最新android SDK该文件已经不存在，若电脑不没有安装android studio，可下载附件工具编辑.9.png图片）  
2. 使用android studio，因为android studio已经集成.9.png制作工具，只需选中需要生成的png文件，然后右键，点击create 9-patch file 选项  

详细制作步骤可参考链接：[Android中.9图片的含义及制作教程](https://www.jianshu.com/p/3fd048644e3f?tdsourcetag=s_pctim_aiomsg)  
可以使用在线.9.png生成工具：[http://inloop.github.io/shadow4android/](http://inloop.github.io/shadow4android/)  

**.9.png配置使用**  
打开项目的manifest.json文件，在“App启动界面配置”中的“Android启动界面设置”项下，在各分辨率启动图设置框选择需要使用的.9.png图片（图片尺寸请按照提示尺寸对应上传），保存后提交云端打包即可。
> 不同尺寸的启动图是为了适配不同分辨率的手机，所以提交打包时请务必上传不同尺寸的启动图，切忌上传多张同尺寸启动图  

可以参考开发者在[插件市场](https://ext.dcloud.net.cn/search?q=.9)做好的.9样例工程
