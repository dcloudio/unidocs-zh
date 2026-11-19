## 工程简介

一个 uni-app 工程，就是一个 Vue 项目，你可以通过 HBuilderX 或 cli 方式快速创建 uni-app 工程，详见：[快速上手](/quickstart-hx.md)。

## 目录结构

一个uni-app工程，默认包含如下目录及文件：

<pre v-pre="" data-lang="">
	<code class="lang-" style="padding:0">
┌─uniCloud              云空间目录，支付宝小程序云为uniCloud-alipay，阿里云为uniCloud-aliyun，腾讯云为uniCloud-tcb（详见<a href="https://uniapp.dcloud.io/uniCloud/quickstart?structure&id=structure">uniCloud</a>）
│─components            符合vue组件规范的uni-app组件目录
│  └─comp-a.vue         可复用的a组件
├─utssdk                存放uts文件（已废弃）
├─pages                 业务页面文件存放的目录
│  ├─index
│  │  └─index.vue       index页面
│  └─list
│     └─list.vue        list页面
├─static                存放应用引用的本地静态资源（如图片、视频等）的目录，<b>注意：</b>静态资源都应存放于此目录
├─uni_modules           存放uni_module <a href="https://uniapp.dcloud.net.cn/plugin/uni_modules.html">详见</a>
├─platforms             存放各平台专用页面的目录，<a href="/tutorial/platform?id=%E6%95%B4%E4%BD%93%E7%9B%AE%E5%BD%95%E6%9D%A1%E4%BB%B6%E7%BC%96%E8%AF%91">详见</a>
├─nativeplugins         App原生语言插件 <a href="https://nativesupport.dcloud.net.cn/NativePlugin/README">详见</a>
├─nativeResources       App端原生资源目录
│  ├─android            Android原生资源目录 <a href="https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android">详见</a>
|  └─ios                iOS原生资源目录 <a href="https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-ios.html#%E8%B5%84%E6%BA%90%E6%96%87%E4%BB%B6-bundle-resources">详见</a>
├─hybrid                App端存放本地html文件的目录，<a href="/component/web-view">详见</a>
├─wxcomponents          存放微信小程序、QQ小程序组件的目录，<a href="/tutorial/miniprogram-subject?id=%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E6%94%AF%E6%8C%81">详见</a>
├─mycomponents          存放支付宝小程序组件的目录，<a href="/tutorial/miniprogram-subject?id=%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E6%94%AF%E6%8C%81">详见</a>
├─swancomponents        存放百度小程序组件的目录，<a href="/tutorial/miniprogram-subject?id=%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E6%94%AF%E6%8C%81">详见</a>
├─ttcomponents          存放抖音小程序、飞书小程序组件的目录，<a href="/tutorial/miniprogram-subject?id=%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E6%94%AF%E6%8C%81">详见</a>
├─kscomponents          存放快手小程序组件的目录，<a href="/tutorial/miniprogram-subject?id=%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E6%94%AF%E6%8C%81">详见</a>
├─jdcomponents          存放京东小程序组件的目录，<a href="/tutorial/miniprogram-subject?id=%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E6%94%AF%E6%8C%81">详见</a>
├─unpackage             非工程代码，一般存放运行或发行的编译结果 <a href="#unpackage">详见</a>
├─main.js               Vue初始化入口文件
├─App.vue               应用配置，用来配置App全局样式以及监听 <a href="/collocation/App#应用生命周期">应用生命周期</a>
├─pages.json            配置页面路由、导航条、选项卡等页面类信息，<a href="/collocation/pages">详见</a>
├─manifest.json         配置应用名称、appid、logo、版本等打包信息，<a href="/collocation/manifest">详见</a>
├─AndroidManifest.xml   Android原生应用清单文件 <a href="https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android">详见</a>
├─Info.plist            iOS原生应用配置文件 <a href="https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-ios">详见</a>
└─uni.scss              内置的常用样式变量
	</code>
</pre>

**Tips**
- HbuilderX 1.9.0+ 支持在根目录创建 `ext.json`、`sitemap.json` 等小程序需要的文件。


### static目录@static
- 为什么需要static这样的目录？

uni-app编译器根据pages.json扫描需要编译的页面，并根据页面引入的js、css合并打包文件。\
对于本地的图片、字体、视频、文件等资源，如果可以直接识别，那么也会把这些资源文件打包进去，但如果这些资源以变量的方式引用，
比如：`<image :src="url"></image>`，甚至可能有更复杂的函数计算，此时编译器无法分析。

那么有了static目录，编译器就会把这个目录整体复制到最终编译包内。这样只要运行时确实能获取到这个图片，就可以显示。

当然这也带来一个注意事项，如果static里有一些没有使用的废文件，也会被打包到编译包里，造成体积变大。

另外注意，static目录支持特殊的平台子目录，比如web、app、mp-weixin等，这些目录存放专有平台的文件，这些平台的文件在打包其他平台时不会被包含。详见[条件编译](https://uniapp.dcloud.net.cn/tutorial/platform.html#static-%E7%9B%AE%E5%BD%95%E7%9A%84%E6%9D%A1%E4%BB%B6%E7%BC%96%E8%AF%91)

非 `static` 目录下的文件（vue组件、js、css 等）只有被引用时，才会被打包编译。

`css`、`less/scss` 等资源不要放在 `static` 目录下，建议这些公用的资源放在自建的 `common` 目录下。

- static目录和App原生资源目录有关系吗？

uni-app支持App原生资源目录nativeResources，下面有assets、res等目录，[详见](app-nativeresource-android.md#nativeresources)。但和static目录没有关系。

static目录下的文件，在app第一次启动时，解压到了app的外部存储目录（external-path）。（uni-app x 从3.99+不再解压）

所以注意控制static目录的大小，太大的static目录和太多文件，会造成App安装后第一次启动变慢。

### unpackage 目录 @unpackage

以下说明适用于通过 HBuilderX 运行、发行 uni-app（Vue2/Vue3）项目时生成的目录。

`unpackage` 用于保存 HBuilderX 生成的编译产物、本地打包资源、发行产物、运行基座、缓存和诊断日志。各目录按实际运行、发行的平台和使用的功能生成，Vue2/Vue3、编译器版本及项目配置可能影响具体结构。

本节中的 CLI 项目指**通过 HBuilderX 运行、采用 `src/dist` 结构的 uni-app CLI 项目**。这类项目的编译输出通常位于项目根目录的 `dist/dev/<平台>`、`dist/build/<平台>`，缓存、基座和本地诊断日志分别使用 `dist/cache`、`dist/debug`、`dist/logs`。资源导出和云打包下载流程仍可能使用项目根目录的 `unpackage/resources`、`unpackage/release`，具体以导出配置及控制台提示为准；不能把下方整棵目录树中的 `unpackage` 直接替换成 `dist`。

#### 目录结构

以下列出主要目录及典型文件。平台目录的对应关系见下方表格，隐藏目录和 UTS 插件编译产物缓存并非每个项目都会生成。`<平台>`、`<模块>`、`<AppID>`、`<HX版本>` 是占位符；切换配置后可能保留历史产物。

```text
<项目根目录>/unpackage/
├─ dist/
│  ├─ dev/                        # 运行阶段的编译产物
│  │  ├─ app-plus/                # Android/iOS 共用的 App 编译产物
│  │  ├─ web/                     # Web 开发模式路径，站点由开发服务器提供
│  │  ├─ mp-weixin/               # 微信小程序，其他小程序目录见下表
│  │  ├─ app-harmony/             # 组装后的鸿蒙原生工程
│  │  ├─ .app-harmony/            # 鸿蒙编译产物
│  │  ├─ .nvue/                   # nvue 编译中间产物
│  │  ├─ .sourcemap/              # sourcemap
│  │  ├─ .automator/              # 自动化测试信息
│  │  └─ cache/                   # Vue3 编译器缓存（按流程生成）
│  ├─ build/                      # 发行阶段的编译产物，按平台组织
│  │  ├─ app-plus/
│  │  ├─ web/
│  │  ├─ mp-weixin/
│  │  ├─ app-harmony/             # 发行时组装的鸿蒙原生工程
│  │  └─ .app-harmony/            # 鸿蒙发行产物
│  └─ cache/
│     └─ .vite/                   # Vite 编译缓存
├─ resources/                     # 本地打包资源
│  ├─ <AppID>/www/                # App 应用资源
│  └─ uni_modules/                # 导出的原生插件资源，按实际插件生成
├─ release/                       # 发行相关产物
│  ├─ <云打包产物文件名>          # 满足自动下载条件时生成，文件名由云端返回
│  └─ <AppID>.wgt                 # 默认导出的 wgt 资源包
├─ debug/
│  ├─ android_debug.apk           # Android 自定义基座
│  ├─ iOS_debug.ipa               # iOS 自定义基座
│  ├─ iOS_debug_sdk.ipa           # iOS 自定义离线 SDK 基座
│  ├─ iOS_debug_<HX版本>.ipa       # iOS 标准基座的项目内副本（按 HBuilderX 版本命名）
│  ├─ Pandora_simulator_debug.app # iOS 模拟器自定义基座
│  ├─ Pandora_simulator_debug_<HX版本>.app # iOS 模拟器标准基座的项目内副本（按 HBuilderX 版本命名）
│  └─ app-harmony/                # 本地打包/导出场景下的鸿蒙工程
├─ cache/
│  ├─ uts_standard_android/       # UTS 插件编译产物缓存（Android 标准基座）
│  ├─ uts_custom_android/         # UTS 插件编译产物缓存（Android 自定义基座）
│  ├─ uts_custom_sdk_android/     # UTS 插件编译产物缓存（Android 自定义离线 SDK 基座）
│  ├─ uts_standard_ios/           # UTS 插件编译产物缓存（iOS 标准基座）
│  ├─ uts_custom_ios/             # UTS 插件编译产物缓存（iOS 自定义基座）
│  ├─ uts_custom_sdk_ios/         # UTS 插件编译产物缓存（iOS 自定义离线 SDK 基座）
│  ├─ uts_standard_simulator/     # UTS 插件编译产物缓存（iOS 模拟器标准基座）
│  ├─ uts_custom_simulator/       # UTS 插件编译产物缓存（iOS 模拟器自定义基座）
│  ├─ uts_custom_sdk_simulator/   # UTS 插件编译产物缓存（iOS 模拟器自定义离线 SDK 基座）
│  ├─ cloudcertificate/           # 云打包证书缓存
│  ├─ apk/                       # 安装包上传等流程使用的下载缓存，按文件类型生成
│  └─ ipa/                       # 同上；其他包类型按扩展名使用同名缓存目录
└─ logs/                          # 运行、崩溃等诊断日志
   ├─ android/
   ├─ app-android/                # 部分上报流程按平台标识保存的 Android 日志
   ├─ ios/
   ├─ ios-simulator/
   └─ harmony/
```

#### 主要目录说明

##### dist（编译输出）

`dist/dev` 保存运行阶段的编译产物，`dist/build` 保存发行阶段的编译产物。平台目录如下，具体可用平台取决于项目和 HBuilderX 版本。

| 目录                      | 平台                                                  |
| ------------------------- | ----------------------------------------------------- |
| `app-plus`                | uni-app App，Android/iOS 共用                         |
| `web`                     | H5/Web                                                |
| `app-harmony`             | HBuilderX 组装的鸿蒙原生工程，可用 DevEco Studio 打开 |
| `mp-weixin`               | 微信小程序                                            |
| `mp-alipay`               | 支付宝小程序                                          |
| `mp-baidu`                | 百度小程序                                            |
| `mp-toutiao`              | 抖音小程序                                            |
| `mp-qq`                   | QQ 小程序                                             |
| `mp-360`                  | 360 小程序                                            |
| `mp-kuaishou`             | 快手小程序                                            |
| `mp-lark`                 | 飞书小程序                                            |
| `mp-jd`                   | 京东小程序                                            |
| `mp-xhs`                  | 小红书小程序                                          |
| `mp-harmony`              | 鸿蒙元服务，原生工程使用系统临时目录，见下文          |
| `quickapp-webview-huawei` | 华为快应用                                            |
| `quickapp-webview-union`  | 联盟快应用                                            |

以点开头的目录用于编译和调试，例如 `.nvue`、`.sourcemap`、`.automator`、`.app-harmony`。`.automator/<平台>/.automator.json` 保存自动化测试信息；`.sourcemap` 是否生成及其内容取决于 sourcemap 选项。发行阶段也可能生成相应的中间产物或调试信息。

Android/iOS App 主编译输出是 `dist/dev/app-plus` 或 `dist/build/app-plus`；UTS 插件内部的 `app-android`、`app-ios` 表示原生插件的目标平台。例如运行时插件产物可能位于：

- `dist/dev/app-plus/uni_modules/<模块>/utssdk/app-android/index.kt`
- `dist/dev/app-plus/uni_modules/<模块>/utssdk/app-ios/index.swift`

##### cache（编译与调试缓存）

###### 平台编译缓存

`dist/cache/.vite` 用于 Vite 依赖预构建等缓存，适用于 Vue3/Vite 编译流程。

HBuilderX 的普通 uni-app Vue3 编译流程使用 `dist/dev/cache/.<平台>` 或 `dist/build/cache/.<平台>` 保存编译器自身的缓存，与 `.vite` 缓存、下方的 UTS 插件编译产物缓存用途不同。以上 Vite／Vue3 缓存路径不适用于 Vue2/Webpack 流程。

###### UTS 插件编译产物缓存

UTS 插件编译产物缓存按目标平台和基座类型区分；`standard`、`custom`、`custom_sdk` 分别对应标准、自定义、自定义离线 SDK 基座。典型结构如下：

```text
<UTS 插件编译产物缓存目录>/
├─ app-android/uts/uni_modules/<模块>/ # Android 插件产物，如 index.kt、config.json
├─ app-ios/uts/uni_modules/<模块>/     # iOS 插件产物，如 index.swift、config.json
├─ modules/                          # iOS 待注入的原生模块，如 framework
├─ Resources/                        # iOS 待注入的原生资源
└─ .cache-meta.json                  # 基座依赖缓存元数据，按缓存初始化/恢复流程生成
```

Android、iOS 子目录分别位于对应平台的缓存中：Android 可包含 Kotlin、DEX/JAR，iOS 可包含 Swift，按插件和编译步骤生成。`modules`、`Resources` 暂存 iOS 待注入模块和资源，处理后清理；真机注入 IPA 解压后的应用包，模拟器直接注入 `.app` 包。

`.cache-meta.json` 位于具体基座依赖缓存目录中，用于记录基座文件指纹等信息，以判断是否需要刷新缓存。`cache/apk`、`cache/ipa` 等是安装包下载缓存，不属于 UTS 插件编译产物缓存。

##### debug（运行基座）

云打包自定义调试基座下载到 `debug`；CLI 项目使用 `dist/debug`。

- Android 自定义基座为 `debug/android_debug.apk`。
- iOS 自定义基座为 `debug/iOS_debug.ipa`；自定义离线 SDK 基座为 `debug/iOS_debug_sdk.ipa`；模拟器自定义基座为 `debug/Pandora_simulator_debug.app`。
- 当前 HBuilderX 的 uni-app 模拟器运行流程不支持 arm64 目标，应按模拟器及基座实际支持的架构运行。

自行打包的自定义基座可按对应运行文档放入 `debug` 目录。

###### iOS 标准基座的项目内副本

- 使用标准基座运行时，HBuilderX 会根据项目是否使用 UTS 插件等条件，按需在 `debug` 中创建或复用带 HBuilderX 版本号的标准基座副本：真机为 `iOS_debug_<HX版本>.ipa`，模拟器为 `Pandora_simulator_debug_<HX版本>.app`。目标文件不存在时从内置标准基座复制，存在时直接复用；无需项目内副本时使用内置标准基座。
- 副本创建与重建／重签是不同步骤。有待注入的原生模块或资源时，本次选用的标准或自定义基座会进行注入及相应的重建／重签；已有副本也可能因插件变更再次处理。
- 切换 HBuilderX 版本或改用自定义基座后，目录中可能保留此前使用的标准基座副本；实际使用哪个以本次运行配置和控制台提示为准。

##### resources（本地打包资源）

- 生成本地打包 App 资源时，应用资源位于 `resources/<AppID>/www`；需要随离线工程集成的 UTS 原生插件产物还可能位于 `resources/uni_modules/<模块>/utssdk/app-android`、`app-ios` 等目录中。这里的 `uni_modules` 与 `<AppID>` 同级，位于 `www` 之外。
- 鸿蒙工程导出与 Android/iOS 的资源导出有不同流程，以导出结果为准。

##### release（发行产物）

- 导出 wgt 时，默认输出为 `release/<AppID>.wgt`，可在导出操作中指定其他位置。wgt 是资源包，不是 APK/IPA 安装包。
- 云打包发行包满足自动下载条件时，保存到 `release/<云端返回的包名>`。当前插件对未指定渠道、渠道为“无”（含“无-aab”）或 iOS App Store 包提供下载地址，不自动保存到此目录；关闭产物下载时也不会生成本地文件。实际结果以下载操作或控制台提示为准。

#### 各平台编译产物

下方产物表的路径相对于对应平台的编译输出目录，按常规应用编译说明。文件是否生成取决于 Vue2/Vue3、页面类型、项目内容及编译选项；分块名称、哈希和辅助文件以实际输出为准。

##### Android/iOS App（app-plus）

- Android 和 iOS 共用 `dist/dev/app-plus`、`dist/build/app-plus`，平台差异还会体现在基座、原生插件和打包配置中。
- nvue 编译可能生成同级 `.nvue` 中间目录。

###### 共有产物（Vue2／Vue3）

| 文件／目录                                                                     | 用途与生成条件                                                                                        |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| `manifest.json`                                                                | 编译处理后的应用配置，供基座运行和打包使用                                                            |
| `app-service.js`                                                               | 应用及 Vue 页面的逻辑入口；分包或代码拆分时还会生成其他脚本                                           |
| `app-config-service.js`                                                        | 页面路由、窗口等运行配置，由 `pages.json`、`manifest.json` 等生成                                     |
| `__uniappview.html`                                                            | Vue 页面的 WebView 渲染入口；纯 nvue 渲染流程不一定使用                                               |
| `<nvue页面路径>.js`                                                            | nvue 页面编译后的脚本，如 `pages/index/index.js`；有对应页面时生成                                    |
| `uni_modules/<模块>/utssdk/app-android/`、`uni_modules/<模块>/utssdk/app-ios/` | 使用 UTS 原生插件时生成的 Kotlin／Swift、配置等产物                                                   |
| `static/`、`uni_modules/<模块>/static/`、`hybrid/html/`                        | 应用、插件静态资源及本地 HTML，存在时按平台规则复制；插件 HTML 位于 `uni_modules/<模块>/hybrid/html/` |
| `androidPrivacy.json`                                                          | Android 隐私政策配置，项目提供且当前流程启用时生成                                                    |

###### Vue2（Webpack）产物

| 文件／目录                        | 用途与生成条件                                                                    |
| --------------------------------- | --------------------------------------------------------------------------------- |
| `app-view.js`                     | Vue 页面的视图层脚本；页面模板、样式及使用到的 renderjs/WXS 随视图编译处理        |
| `app-config.js`                   | 常规 App 编译的 Webpack 运行时代码；页面运行配置主要在 `app-config-service.js` 中 |
| `<分包根目录>/app-sub-service.js` | 启用 App 分包优化并有对应分包代码时生成的逻辑脚本                                 |

纯 nvue 渲染、旧编译模式的输出可能不同，不能将 Vue3 的独立 CSS、renderjs 文件名作为 Vue2 的固定结构。

###### Vue3（Vite）产物

| 文件／目录                      | 用途与生成条件                                                     |
| ------------------------------- | ------------------------------------------------------------------ |
| `app-config.js`                 | 为兼容基座规范生成的占位文件；运行配置位于 `app-config-service.js` |
| `app.css`、`<Vue页面路径>.css`  | 应用和 Vue 页面的样式，按实际样式生成                              |
| `uni-app-view.umd.js`           | Vue 页面使用的视图层运行库；非纯 nvue 渲染流程复制                 |
| `app-renderjs.js`、`app-wxs.js` | Vue 页面使用 renderjs／WXS 时生成的视图层脚本                      |

nvue 的 `.nvue` 目录是中间输出，最终页面脚本写入 `app-plus`；Vue3 的 nvue 样式随脚本及运行配置处理，不对应一份独立的页面 CSS。编译器还可能复制 `__uniapp*.js` 等内置组件、调试辅助文件。

##### 鸿蒙 App（app-harmony）

- `.app-harmony` 保存供组装原生工程使用的代码、配置和资源，主要内容见下表。
- `app-harmony` 是据此组装的原生鸿蒙工程，可使用 DevEco Studio 打开。
- `.hap` 是模块安装包，`.app` 是用于发布分发的 App Pack；具体构建输出路径和签名状态以构建结果为准。
- 默认运行工程为 `dist/dev/app-harmony`，发行工程为 `dist/build/app-harmony`。
- `.hbuilderx/launch.json` 的 `distPathDev`、`distPathBuild` 可以指定工程目录；运行时开启 `debugWithNativeHarmony` 并配置 `nativeHarmonyProjectPath` 后，优先使用指定的联编工程。
- 本地打包/导出场景下，工程还可能位于 `debug/app-harmony`。日志位于 `logs/harmony`。

鸿蒙的初始化文件由编译器生成在实际编译输出目录的 `uni_modules/index.generated.ets`。排查组装后的原生工程时，应核对工程中实际使用的插件及初始化文件，工程内的副本位置以本次组装结果为准。

指定原生工程并直接向工程输出时，插件位于 `<原生工程>/uni_modules/<模块>/`，应用脚本输出到 `<原生工程>/entry/src/main/resources/resfile/apps/HBuilder/www/`，上述初始化文件随编译输出生成在该目录的 `uni_modules/` 下。应以本次实际输出路径为准，避免误查旧的 `.app-harmony`。

鸿蒙使用 Vue3 编译链路。下表列出 `.app-harmony` 内的主要编译产物；页面路径按项目组织，`pages/` 是常见目录名。

| 文件／目录                                                        | 用途与生成条件                                           |
| ----------------------------------------------------------------- | -------------------------------------------------------- |
| `manifest.json`                                                   | 编译处理后的应用配置                                     |
| `app-service.js`                                                  | 应用和页面的逻辑入口                                     |
| `app-config-service.js`、`app-config.js`                          | 前者保存页面路由等运行配置，后者为兼容基座规范的占位文件 |
| `app.css`、`<页面路径>.css`                                       | 应用与页面样式，按实际样式生成                           |
| `__uniappview.html`、`uni-app-view.umd.js`                        | Vue 页面的 WebView 渲染入口及视图层运行库                |
| `app-renderjs.js`、`app-wxs.js`                                   | 使用 renderjs／WXS 时生成的视图层脚本                    |
| `uni_modules/index.generated.ets`                                 | 扩展 API 和 UTS 插件初始化入口，供鸿蒙原生工程集成       |
| `uni_modules/<模块>/`                                             | 对应插件的鸿蒙实现、配置和资源，使用时生成               |
| `uni_modules/oh-package.json5`、`uni_modules/build-profile.json5` | 供组装原生工程使用的插件依赖与模块配置                   |
| `static/`、`uni_modules/<模块>/static/`、`hybrid/html/`           | 应用、插件静态资源及本地 HTML，存在时按平台规则复制      |

##### 鸿蒙元服务（mp-harmony）

HBuilderX 使用 `unpackage/dist/dev/mp-harmony` 或 `unpackage/dist/build/mp-harmony` 的路径与时间生成指纹，在系统临时目录创建原生鸿蒙工程。CLI 项目使用项目根目录下的 `dist/dev/mp-harmony` 或 `dist/build/mp-harmony` 参与计算。

运行工程按 UTC 日期区分，发行工程按 UTC 分钟区分。因此，不能只在 `unpackage` 中查找完整的元服务原生工程，应以控制台提示的位置为准。诊断日志仍保存在 `logs/harmony`。

##### 微信小程序（mp-weixin）

输出目录为 `dist/dev/mp-weixin`（运行）、`dist/build/mp-weixin`（发行），可使用微信开发者工具打开。以下为普通小程序应用产物，小程序插件等编译目标的结构可能不同。

| 文件／目录                                          | 用途与生成条件                                                                                                    |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `app.js`                                            | 小程序应用入口                                                                                                    |
| `app.json`                                          | 页面列表、窗口、分包等配置，由项目页面及平台配置生成                                                              |
| `app.wxss`                                          | 应用级样式，可能引用公共样式文件                                                                                  |
| `<页面或组件路径>.*`                                | 页面／组件的 `.js` 逻辑、`.json` 配置、`.wxml` 模板、`.wxss` 样式，按项目内容生成                                 |
| `common/`                                           | 公共依赖与编译辅助代码；Vue2 常见 `runtime.js`、`vendor.js`、`main.js`，Vue3 按打包结果生成公共分块，文件集合不同 |
| `project.config.json`                               | 微信开发者工具配置，由项目提供的配置或 `manifest.json` 等生成                                                     |
| `static/`、`uni_modules/<模块>/static/`             | 应用及插件静态资源，存在时按平台规则复制                                                                          |
| `wxcomponents/`、`uni_modules/<模块>/wxcomponents/` | 项目或插件中的微信原生组件，存在时按编译规则复制                                                                  |
| `sitemap.json`、`custom-tab-bar/` 等                | 微信专用配置和自定义组件，项目提供且使用时复制                                                                    |

分包产物位于配置的分包根目录，独立分包可有自己的公共依赖。Vue3 编译 nvue 页面时，还会按需生成 `nvue.wxss` 基础样式。`project.private.config.json` 可能由项目复制或由微信开发者工具维护，不是每次编译必然生成的文件。

##### 其他小程序与快应用

输出目录见上方平台表。页面逻辑、配置、模板和样式按目标平台生成，模板／样式扩展名及工具配置文件名可能与微信不同；应使用对应平台的工具打开，并以控制台提示的输出目录为准。

##### Web（web）

当前 HBuilderX 将 H5/Web 输出目录命名为 `web`，编译平台标识仍为 `h5`；旧版本可能保留 `h5` 目录。默认发行目录为 `dist/build/web`，CLI 项目按“unpackage 目录”章节开头的路径规则定位。

运行阶段由开发服务器提供 HTML、脚本和样式，不在 `dist/dev/web` 生成可部署站点。部署时使用发行构建生成的完整输出目录，并按部署路径和路由模式配置服务器。

| 文件／目录                                          | 用途与生成条件                                                                                       |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `index.html`                                        | 常规单页应用的 HTML 入口，发行时生成；运行时由开发服务器提供                                         |
| `static/`（Vue2 构建资源）                          | Webpack 默认将打包资源放在此目录，如 `static/js/`；样式可能随 JS 加载，是否提取为独立 CSS 取决于配置 |
| `assets/`（Vue3 构建资源）                          | Vite 默认输出的 JS、CSS、页面分块及导入资源；目录名可配置，文件名通常带哈希                          |
| `static/`、`uni_modules/<模块>/static/`（项目资源） | 两种编译器均按平台规则复制项目中的静态资源，保留相对路径；Vue2 的 `static/` 也包含上方打包资源       |
| `*.map`                                             | 开启 sourcemap 时生成的源码映射文件，位置随构建配置变化                                              |

#### 使用编译产物排查问题

不直接编辑自动生成的编译产物，修改可能在重新构建时被覆盖；应修改项目源码后重新编译验证。

使用编译产物排查问题时，先确认本次 HBuilderX 运行或发行的目标平台、项目使用的 Vue2／Vue3，并根据控制台提示定位实际输出路径。以下路径相对于普通项目的 `unpackage`，`<阶段>` 为 `dev` 或 `build`；通过 HBuilderX 运行的 CLI 项目按“unpackage 目录”章节开头的路径规则定位。

##### 页面与应用逻辑

| 排查对象               | 优先查看的位置与内容                                                                                                             |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| App Vue 页面及应用逻辑 | `dist/<阶段>/app-plus/app-service.js` 及其引用的分块；页面配置查 `app-config-service.js`，视图与样式按上方 Vue2／Vue3 产物表查找 |
| App nvue 页面          | `dist/<阶段>/app-plus/<页面路径>.js` 是最终页面脚本；`dist/<阶段>/.nvue/` 用于核对编译中间步骤                                   |
| 微信小程序页面／组件   | `dist/<阶段>/mp-weixin/<页面或组件路径>.*` 及引用的公共分块，分别核对 JS、模板、样式和配置                                       |
| Web 页面／组件         | 运行时通过浏览器开发者工具查看实际加载的模块；发行时按 Vue2／Vue3 查 `dist/build/web/static/` 或 `dist/build/web/assets/`        |

##### UTS 原生插件

| 排查对象             | 优先查看的位置与内容                                                                                                                                   |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Android UTS 原生插件 | `dist/<阶段>/app-plus/uni_modules/<模块>/utssdk/app-android/index.kt`，核对生成的 Kotlin、同目录配置及原生混编文件                                     |
| iOS UTS 原生插件     | `dist/<阶段>/app-plus/uni_modules/<模块>/utssdk/app-ios/index.swift`，核对生成的 Swift，结合原生编译日志排查                                           |
| 鸿蒙 UTS 原生插件    | 默认查 `dist/<阶段>/.app-harmony/uni_modules/<模块>/utssdk/app-harmony/index.ets`，结合插件配置和 `uni_modules/index.generated.ets` 中的初始化信息核对 |

鸿蒙指定原生工程时的输出路径及工程副本说明，见上方鸿蒙章节。

排查原生插件时还需注意：

- Android/iOS App 的主输出是 `app-plus`；插件内部的 `app-android`、`app-ios` 是目标平台目录。先确认选中的平台实现，再按导出函数、类名或报错位置查生成代码；多个 UTS 文件可能合并到同一入口。
- 运行时按本次平台、基座类型选择 `cache/uts_*`，再查其中的 `app-android/uts/uni_modules/<模块>/` 或 `app-ios/uts/uni_modules/<模块>/`。Kotlin／Swift 用于对照源码；Android DEX 用于运行，JAR 可供后续编译依赖。
- 命中缓存时可能跳过重新编译，iOS 输出目录不保证每次都恢复 Swift。先结合本次日志与缓存判断；加密插件或基座内已有依赖也不保证提供可读生成源码。插件选用 JS 实现时，查平台 JS 输出。
- 生成代码正确而行为未更新时，核对原生依赖编译、基座注入及安装结果。iOS 缓存中的 `modules/`、`Resources/` 注入后会清理，不能据此判定插件未生效。

有 sourcemap 时结合生成的 `.map` 文件定位原始源码，位置及是否生成取决于编译选项。编译失败可能留下旧文件或部分产物；修改应落在项目源码，重新构建并核对本次日志与运行结果，不能只凭缓存文件存在判定修改已生效。

#### 清理编译缓存

排查修改未生效、增量编译结果异常等问题时，可通过 HBuilderX 界面的“清除缓存后重新运行”清理缓存后运行，Android、iOS 和鸿蒙 App 均支持此操作。先保留错误日志，并保持平台、设备、基座等运行配置一致，便于对比清理前后的结果。

清理编译缓存不等于删除整个 `unpackage`。基座、发行包和诊断日志应按用途保留，不应全部当作编译缓存删除。

重新编译后，对比错误日志、生成代码和运行结果，确认修改是否生效；若问题仍然存在，继续检查源码、配置或原生依赖。
