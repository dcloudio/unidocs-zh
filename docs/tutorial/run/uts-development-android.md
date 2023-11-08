# Android UTS扩展开发
# Android UTS extension development

> 版本要求: HBuilderX 3.6.9+
> Version requirements: HBuilderX 3.6.9+

HBuilderX 3.6.9+， 新增 uts插件 Android平台 真机运行支持三方 Gradle 仓储。
HBuilderX 3.6.9+, new uts plug-in Android platform real machine operation supports three-party Gradle storage.

运行带有uts插件的项目到Android设备，如果您遇到以下提示，请配置[运行环境](#Android环境配置)
Run the project with the uts plug-in to the Android device, if you encounter the following prompts, please configure [running environment](#Android environment configuration)

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/20221111173829.jpg" style="zoom: 50%;" />

## uts扩展插件
## uts extension

当您运行带有uts插件的项目到Android设备时，会自动安装【uts开发扩展 - Android】插件，请务必安装。具体如下：
When you run the project with the uts plugin to the Android device, the [uts development extension - Android] plugin will be installed automatically, please be sure to install it. details as follows:

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/20221111171012.jpg" style="zoom: 50%" />

## 环境配置
## Environment configuration
> 下载插件后打开 HBuilderX到 【设置 - 插件配置】：如图
> After downloading the plug-in, open HBuilderX to [Settings - Plug-in Configuration]: as shown in the figure

![image](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/%E9%85%8D%E7%BD%AE.png)

#### 上面的截图展示了以下配置：
#### The screenshot above shows the following configuration:

##### 配置Gradle
##### Configuring Gradle

1. 点击图标1的下载地址进入下载页面。如图所示，点击红圈部分下载工具包。
1. Click the download link in icon 1 to enter the download page. As shown in the figure, click the red circled part to download the toolkit.

 ![image](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/gradle.png)
 
2. 将步骤1下载的内容解压后，找到bin目录下的执行脚本，填入图标3处。
2. After decompressing the content downloaded in step 1, find the execution script in the bin directory, and fill in icon 3.

**注意** mac为`%解压路径%/bin/gradle`；window为`%解压路径%\bin\gradle.bat`。
**Note** mac is `%decompression path%/bin/gradle`; window is `%decompression path%\bin\gradle.bat`.

##### 配置SDK
##### Configure the SDK

点击图标2的下载地址进入安卓官网，提供如下两种形式。
Click the download address of icon 2 to enter the Android official website, which provides the following two forms.

###### ◇ 下载Android Studio
###### ◇ Download Android Studio
1. 如图所示，根据平台下载Android Studio
1. As shown in the figure, download Android Studio according to the platform

![image](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/sdk-2.png)

2. 安装后获取Android Studio中sdk的路径地址填入到图标4处。
2. After installation, obtain the path address of the sdk in Android Studio and fill it in icon 4.

**注意** 默认路径 mac为`/Users/用户名/Library/Android/sdk`；window为`C:\Users\用户名\AppData\Local\Android\Sdk`
**Note** The default path mac is `/Users/username/Library/Android/sdk`; window is `C:\Users\username\AppData\Local\Android\Sdk`

###### ◇ 如不需要安装Android Studio可通过下载Command line tools only
###### ◇ If you don’t need to install Android Studio, you can download Command line tools only
1. 如图所示，根据平台下载Command line tools only。
1. As shown in the figure, download Command line tools only according to the platform.

![image](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/sdk.png)
 
2. 下载解压后通过`%解压目录%/bin/sdkmanager脚本安装build-tools和platforms
2. After downloading and decompressing, install build-tools and platforms through `%decompression directory%/bin/sdkmanager script
```
sdkmanager --sdk_root=%sdk路径% --install "build-tools;30.0.0"

sdkmanager --sdk_root=%sdk路径% --install "platforms;android-30"
```

4. 将`%sdk路径%`配置到图标4处。
4. Configure `%sdk path%` to icon 4.

5. [sdkmanager使用文档](https://developer.android.google.cn/studio/command-line/sdkmanager)
5. [sdkmanager usage documentation](https://developer.android.google.cn/studio/command-line/sdkmanager)

**注意** 下载Android Studio和下载Command line tools only选择一种形式下载sdk即可。
**Note** Download Android Studio and download Command line tools only choose one form to download sdk.

##### 配置示例
##### Configuration Example
配置后如下图（根据本地目录结构有所不同）
After configuration, as shown below (depending on the local directory structure)

 ![image](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/%E9%85%8D%E7%BD%AE%E5%AE%8C%E6%88%90.png)

**注意**
**Notice**

- 如果环境已存在可以直接设置本地的工具包路径
- If the environment already exists, you can directly set the local toolkit path
- 此插件依赖sdk目录下build-tools版本不低于30.0.0
- This plugin depends on the version of build-tools in the sdk directory not lower than 30.0.0
- 此插件依赖sdk目录下platforms版本不低于android-30
- This plug-in depends on the platforms version in the sdk directory not lower than android-30
