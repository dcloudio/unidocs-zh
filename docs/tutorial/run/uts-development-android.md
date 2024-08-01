# Android UTS 扩展开发

> 版本要求: HBuilderX 3.6.9+

HBuilderX 3.6.9+， 新增 uts 插件 Android 平台 真机运行支持通过 Gradle 下载三方仓储。

运行带有 uts 插件的项目到 Android 设备，如果您遇到以下提示，请配置[运行环境](#环境配置)

<img src="https://web-ext-storage.dcloud.net.cn/hx/84E1472F-A959-4440-9C47-B8D8A4D0C9BB.png" style="zoom: 50%;" />

## uts 扩展插件

当您运行带有 uts 插件的项目到 Android 设备时，会自动安装【uts 开发扩展 - Android】插件，请务必安装。具体如下：

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/20221111171012.jpg" style="zoom: 50%" />

## 环境配置

> 下载插件后打开 HBuilderX 到 【设置 - 插件配置】：如图

![image](https://web-ext-storage.dcloud.net.cn/hx/uts-android-2.png)

### 上面的截图展示了以下配置：

#### 配置 Gradle

1. 点击图标 1 的下载地址进入下载页面。如图所示，点击红圈部分下载工具包。

![image](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/gradle.png)

2. 将步骤 1 下载的内容解压后，找到 bin 目录下的执行脚本，填入图标 2 处。

**注意** 

- 内置的下载模板中 Android Gradle Plugin 使用的最低版本为 7.4.0，所以Gradle 最低版本要求7.5及以上。
- mac 为`%解压路径%/bin/gradle`；window 为`%解压路径%\bin\gradle.bat`。

#### 配置 Gradle JDK

- 不同版本 Gradle 依赖不同版本的 JDK 。HbuilderX 内置的 JDK 为 11，仅支持 Gradle8.0 以下。如配置 Gradle 为 8.0 及以上版本需要手动下载并配置 JDK 路径。配置方式如下

1. 点击图标 3 的下载地址进入下载页面，选择所需要的版本。（如本地已安装 JDK 可跳过此步骤）

2. 将步骤 1 下载的内容解压，填入图标 4 处（Mac电脑找到 Home 目录，Win电脑为解压后的根目录），可参考文档最后的示例。

**注意**

- HBuilderX 4.02+支持此配置项
- Gradle8.0 最低要求 JDK 版本为 17。更多版本要求[参考文档](https://developer.android.google.cn/build/releases/past-releases?hl=zh-cn)

#### 配置 SDK

点击图标 5 的下载地址进入安卓官网，提供如下两种形式。

##### ◇ 下载 Android Studio

1. 如图所示，根据平台下载 Android Studio

![image](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/sdk-2.png)

2. 安装后获取 Android Studio 中 sdk 的路径地址填入图标 6 处。

**注意**

- 默认路径 mac 为`/Users/用户名/Library/Android/sdk`；window 为`C:\Users\用户名\AppData\Local\Android\Sdk`

##### ◇ 如不需要安装 Android Studio 可通过下载 Command line tools only

1. 如图所示，根据平台下载 Command line tools only。

![image](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/sdk.png)

2. 下载解压后通过`%解压目录%/bin/sdkmanager 脚本安装 build-tools 和 platforms

```
sdkmanager --sdk_root=%sdk路径% --install "build-tools;30.0.0"

sdkmanager --sdk_root=%sdk路径% --install "platforms;android-30"
```

4. 将`%sdk路径%`填入图标 6 处。

5. [sdkmanager 使用文档](https://developer.android.google.cn/studio/command-line/sdkmanager)

**注意**

- 下载 Android Studio 和下载 Command line tools only 选择一种形式下载 sdk 即可。

#### 配置示例

mac系统配置后如下图（根据本地目录结构有所不同）
![image](https://web-ext-storage.dcloud.net.cn/hx/uts-android-1.png)

win系统配置后如下图（根据本地目录结构有所不同）
![image](https://web-ext-storage.dcloud.net.cn/hx/uts-android-3.png)


**注意**

- 如果环境已存在可以直接设置本地的工具包路径
- 此插件依赖 sdk 目录下 build-tools 版本不低于 30.0.0
- 此插件依赖 sdk 目录下 platforms 版本不低于 android-30

## 特别注意

> 项目依赖的三方仓储下载完成后会生成缓存，缓存如果有效，下次运行将直接跳过配置检测和下载过程。如需要缓存主动失效可清理gradle的缓存目录，正常存放于`用户目录/.gradle/caches`。
