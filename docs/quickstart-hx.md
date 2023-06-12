> `uni-app`支持通过 可视化界面、[`vue-cli`命令行](https://uniapp.dcloud.io/quickstart-cli) 两种方式快速创建项目。
> `uni-app` supports quick project creation through the visual interface and [`vue-cli` command line](https://uniapp.dcloud.io/quickstart-cli).


可视化的方式比较简单，HBuilderX内置相关环境，开箱即用，无需配置nodejs。
The visualization method is relatively simple. HBuilderX has built-in related environment, which is out of the box and does not need to configure nodejs.

开始之前，开发者需先下载安装如下工具：
Before starting, developers need to download and install the following tools:

- HBuilderX：[官方IDE下载地址](https://www.dcloud.io/hbuilderx.html)
- HBuilderX: [Official IDE download address](https://www.dcloud.io/hbuilderx.html)

HBuilderX是通用的前端开发工具，但为`uni-app`做了特别强化。
HBuilderX is a general front-end development tool, but it is specially enhanced for `uni-app`.


## 创建uni-app
## Create uni-app

在点击工具栏里的文件 -> 新建 -> 项目（快捷键`Ctrl+N`）：
Click File -> New -> Project in the toolbar (shortcut `Ctrl+N`):
<div align=center>
  <img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/hx-create-01.png"/>
</div>

选择`uni-app`类型，输入工程名，选择模板，点击创建，即可成功创建。
Select the type of `uni-app`, enter the project name, select the template, and click Create to successfully create it.

uni-app自带的模板有 默认的空项目模板、Hello uni-app 官方组件和API示例，还有一个重要模板是 uni ui项目模板，日常开发推荐使用该模板，已内置大量常用组件。
The templates that come with uni-app include the default empty project template, Hello uni-app official components and API examples, and an important template is the uni ui project template, which is recommended for daily development, and has built-in a large number of common components.

<div align=center>
  <img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/create-uniapp.jpg"/>
</div>


开发者也可以使用`cli`方式创建项目，另见[文档](https://uniapp.dcloud.io/quickstart-cli.html)。
Developers can also use `cli` to create projects, see also [documentation](https://uniapp.dcloud.io/quickstart-cli.html).

差别是：HBuilderX创建的项目根目录就是源码，可直接编辑。uni-app的编译器在HBuilderX的插件目录下，跟随HBuilderX升级而一起升级。
The difference is: the root directory of the project created by HBuilderX is the source code, which can be edited directly. The compiler of uni-app is in the plug-in directory of HBuilderX, and is upgraded along with the upgrade of HBuilderX.

如果开发者习惯于node模式的项目，对HBuilderX可视化方式感到困惑，可另行参考文档：[## cli创建项目和HBuilderX可视化界面创建项目的区别](quickstart-cli.md#clidiff)
If developers are accustomed to projects in node mode and are confused about the visualization method of HBuilderX, you can refer to the document separately: [## The difference between creating a project with cli and creating a project with the HBuilderX visual interface](quickstart-cli.md#clidiff)

## 运行uni-app
## Run uni-app


1. 浏览器运行：进入hello-uniapp项目，点击工具栏的运行 -> 运行到浏览器 -> 选择浏览器，即可体验 uni-app 的 web 版。
1. Browser operation: Enter the hello-uniapp project, click on the toolbar -> run to browser -> select a browser, and you can experience the web version of uni-app.
  <div align=center>
  	<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/menurun.png"/>
  </div>

2. 运行App到手机或模拟器：使用电压足够的usb端口连接手机，设置中开启USB调试，手机上允许电脑设备调试手机，进入hello-uniapp项目，点击工具栏的运行 -> 运行App到手机或模拟器，即可在该设备里面体验uni-app。
2. Run the App to the mobile phone or emulator: connect the mobile phone with a usb port with sufficient voltage, enable USB debugging in the settings, allow the computer device to debug the mobile phone on the mobile phone, enter the hello-uniapp project, click Run -> Run App to the mobile phone on the toolbar Or emulator, you can experience uni-app in the device.
	<div align=center>
		<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/menurunapp.png"/>
	</div>
	
	- 如手机或模拟器无法识别，请点击[常见故障排查指南](https://uniapp.dcloud.net.cn/tutorial/run/run-app-faq.html)。
	- If the mobile phone or emulator cannot be recognized, please click [Common Troubleshooting Guide](https://uniapp.dcloud.net.cn/tutorial/run/run-app-faq.html).
  - 如需运行在苹果手机真机上，注意需使用自定义基座。[详见](https://uniapp.dcloud.net.cn/tutorial/run/run-app.html#customplayground)
  - If you want to run on a real Apple phone, please note that you need to use a custom dock. [See details](https://uniapp.dcloud.net.cn/tutorial/run/run-app.html#customplayground)

<!-- @ifdef ZH -->
3. 在微信开发者工具里运行：进入hello-uniapp项目，点击工具栏的运行 -> 运行到小程序模拟器 -> 微信开发者工具，即可在微信开发者工具里面体验uni-app。
    <br/>
    <div align=center>
    	<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/menurunminiapp.png"/>
    </div>
    
    **注意**：如果是第一次使用，需要先配置小程序ide的相关路径，才能运行成功。如下图，需在输入框输入微信开发者工具的安装路径。
    <br/>
    <div align=center>
      <img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/weixin-setting.png"/>
    </div>

    **注意**：微信开发者工具需要开启服务端口 在微信工具的设置->安全中。
		
4. 在支付宝小程序开发者工具里运行：进入hello-uniapp项目，点击工具栏的运行 -> 运行到小程序模拟器 -> 支付宝小程序开发者工具，即可在支付宝小程序开发者工具里面体验uni-app。
    <br/>
    <div align=center>
    	<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/run-ali.png"/>
    </div>

5. 在百度、字节跳动、QQ、快应用（分联盟和华为）、快手、飞书、360、京东等小程序开发工具里运行：内容同上，不再重复。

**Tips**

* 如果是第一次使用，需要配置开发工具的相关路径。点击工具栏的运行 -> 运行到小程序模拟器 -> 运行设置，配置相应小程序开发者工具的路径。
* 微信小程序工具需要配置允许权限，不然HBuilder无法调用微信小程序开发工具的命令行
* 支付宝/百度/字节跳动/360小程序工具，不支持直接指定项目启动并运行。因此开发工具启动后，请将 HBuilderX 控制台中提示的项目路径，在相应小程序开发者工具中打开。
* 如果自动启动小程序开发工具失败，请手动启动小程序开发工具并将 HBuilderX 控制台提示的项目路径，打开项目。
<!-- @endif -->

运行的快捷键是`Ctrl+R`。
The shortcut key to run is `Ctrl+R`.

HBuilderX 还提供了快捷运行菜单，可以按数字快速选择要运行的设备：
HBuilderX also provides a shortcut run menu, which allows quick selection for the equipment to run by pressing number keys:
<div align=center>
	<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/runtool.png"/>
</div>

如需调试，可参考：[uni-app调试](tutorial/run-and-debug.md)
For debugging, please refer to: [uni-app debugging](tutorial/run-and-debug.md)

## 发布uni-app
## Release uni-app

### 打包为原生App
### Package as a native app

在HBuilderX工具栏，点击发行，选择原生app-云端打包，如下图：
On the HBuilderX toolbar, click Release and select Native app - Cloud packaging, as shown in the figure below:

<div align=center>
  <img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni20190222-11.png"/>
</div>
出现如下界面，点击打包即可。
...
<div align=center>
  <img style="max-width:600px;" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-pack-cloud.png"/>
</div>

云端打包支持安心打包，保护用户隐私，不会上传代码和证书，通过差量包制作方式实现安心打包。详见：[https://ask.dcloud.net.cn/article/37979](https://ask.dcloud.net.cn/article/37979)
Cloud packaging supports Packaging At Ease, which protects user privacy without uploading codes and certificates. It achieves Packaging At Ease by differential package production. For details, please see: [https://ask.dcloud.net.cn/article/37979](https://ask.dcloud.net.cn/article/37979)

云打包也支持cli模式，通过HBuilderX的cli方式（不是uni-app的cli），可以调用命令行打包，方便持续集成。详见：[https://hx.dcloud.net.cn/cli/pack](https://hx.dcloud.net.cn/cli/pack)
Cloud packaging also supports cli mode. The command line packaging can be called through the cli method of HBuilderX (not the cli of uni-app) to facilitate continuous integration. For details, please see: [https://hx.dcloud.net.cn/cli/pack](https://hx.dcloud.net.cn/cli/pack)

虽然安心打包已经满足需求，但如仍然希望自己使用 xcode 或 Android studio 进行离线打包，则在 HBuilderX 发行菜单里找到本地打包菜单，生成离线打包资源，然后参考离线打包文档操作：[https://nativesupport.dcloud.net.cn/AppDocs/README](https://nativesupport.dcloud.net.cn/AppDocs/README)。
Although peace of mind packaging has met the demand, if you still want to use xcode or Android studio for offline packaging, find the local packaging menu in HBuilderX release menu, generate offline packaging resources, and then proceed by referring to the offline packaging documentation: [https://nativesupport.dcloud.net.cn/AppDocs/README](https://nativesupport.dcloud.net.cn/AppDocs/README).

App打包时，注意如果涉及三方sdk，需进行申请并在manifest.json里配置，否则相关功能无法使用。
When packaging the App, please note that if a third-party SDK is involved, you need to apply for it and configure it in manifest.json, otherwise the related functions cannot be used.

iOS App打包需要向Apple申请证书。
iOS App packaging requires a certificate from Apple.


### 发布为Web网站
### Publish as web site

1. 在 ``manifest.json`` 的可视化界面，进行如下配置（发行在网站根目录可不配置应用基本路径），此时发行网站路径是 www.xxx.com/h5，如：[https://hellouniapp.dcloud.net.cn](https://hellouniapp.dcloud.net.cn)。
1. In the visual interface of `manifest.json`, perform the following configuration (the application base path is not required when publishing in the root directory of the website). At this time, the publishing website path is www.xxx.com/h5, such as: [https://hellouniapp.dcloud.net.cn](https://hellouniapp.dcloud.net.cn).
  <div align=center>
    <img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/build-h5-1.png" style="max-width:600px;height:auto;"/>
  </div>
2. 在HBuilderX工具栏，点击发行，选择网站-H5手机版，如下图，点击即可生成 H5 的相关资源文件，保存于 unpackage 目录。
2. On the toolbar of HBuilderX, click Release, and select the Website - H5 Mobile Version, as shown in the figure below. Click to generate the H5-related resource files and save them in unpackage directory.

<div align=center>
	<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni20190222-10.png" style="max-width:600px;height:auto;"/>
</div>

<div align=center>
	<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/buildweb.png"/>
</div>

**注意**
**Notice**
- `history` 模式发行需要后台配置支持，详见：[history 模式的后端配置](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90)
- The release of `history` mode requires back-end configuration support. For details, please refer to [Back-end configuration of history mode](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90).
- 打包后，推荐使用[前端网页托管服务](/uniCloud/hosting)，一键上传，自带CDN加速，无需购买虚拟机，无需安装nginx等；
- After packaging, it is recommended to use [front-end web hosting service](/uniCloud/hosting), one-click upload, built-in CDN acceleration, no need to purchase a virtual machine, no need to install nginx, etc.;
- 若使用传统服务器部署，建议在服务器端开启 `gzip` 压缩。参考网上的分享：https://juejin.im/post/5af003286fb9a07aac24611b
- If using traditional server deployment, it is recommended to enable `gzip` compression on the server side. Refer to the online sharing: https://juejin.im/post/5af003286fb9a07aac24611b

### 发布为小程序
### Publish as applet

#### 发布为微信小程序：
#### Publish as a WeChat applet:
1. 申请微信小程序AppID，参考：[微信教程](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/getstart.html#%E7%94%B3%E8%AF%B7%E5%B8%90%E5%8F%B7)。
1. To apply for a WeChat Mini Program AppID, refer to: [WeChat Tutorial](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/getstart.html#%E7%94%B3%E8%AF% B7%E5%B8%90%E5%8F%B7).
2. 在HBuilderX中顶部菜单依次点击 "发行" => "小程序-微信"，输入小程序名称和appid点击发行即可
2. Click "Release" => "Mini Program-WeChat" in the top menu of HBuilderX, enter the applet name and appid and click Release
<div align=center>
  <img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/buildmpweixin.png"/>
</div>

如果手动发行，则点击发行按钮后，会在项目的目录 ``unpackage/dist/build/mp-weixin`` 生成微信小程序项目代码。在微信小程序开发者工具中，导入生成的微信小程序项目，测试项目代码运行正常后，点击“上传”按钮，之后按照 “提交审核” => “发布” 小程序标准流程，逐步操作即可，详细查看：[微信官方教程](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/release.html#%E5%8F%91%E5%B8%83%E4%B8%8A%E7%BA%BF)。
If it is released manually, after clicking the release button, the WeChat applet project code will be generated in the project directory ``unpackage/dist/build/mp-weixin``. In the WeChat applet developer tool, import the generated WeChat applet project, and after the test project code is running normally, click the "Upload" button, and then follow the "Submit for Review" => "Publish" applet standard process and operate step by step. , check in detail: [WeChat Official Tutorial](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/release.html#%E5%8F%91%E5%B8%83%E4%B8 %8A%E7%BA%BF).

如果在发行界面勾选了`自动上传微信平台`，则无需再打开微信工具手动操作，将直接上传到微信服务器提交审核。
If `Auto upload to WeChat platform` is checked on the release interface, you do not need to open the WeChat tool for manual operation, and it will be uploaded directly to the WeChat server for review.

#### 发布为百度小程序：
#### Published as a Baidu applet:
4. 入驻小程序并申请百度小程序AppID，参考：[百度小程序教程](https://smartprogram.baidu.com/docs/introduction/enter_application/)。
4. Enter the Mini Program and apply for the Baidu Mini Program AppID, refer to: [Baidu Mini Program Tutorial](https://smartprogram.baidu.com/docs/introduction/enter_application/).
5. 在HBuilderX中顶部菜单依次点击 "发行" => "小程序-百度"，输入小程序名称和appid点击发行即可在 ``/unpackage/dist/build/mp-baidu`` 生成百度小程序项目代码。
5. Click "Release" => "Mini Program-Baidu" in the top menu of HBuilderX, enter the applet name and appid and click Release to generate a Baidu applet in ``/unpackage/dist/build/mp-baidu`` project code.
  <div align=center>
    <img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni20190222-7.png"/>
  </div>
3. 在百度小程序开发者工具中，导入生成的百度小程序项目，测试项目代码运行正常后，点击“上传”按钮上传代码，之后在百度小程序的 [管理中心](https://smartprogram.baidu.com/developer/applist.html) 选择创建的应用点击前往发布，选择对应的版本然后提交审核。
3. In the Baidu applet developer tool, import the generated Baidu applet project, and after the test project code runs normally, click the "Upload" button to upload the code, and then upload the code in the Baidu applet's [Management Center](https://smartprogram .baidu.com/developer/applist.html) Select the created app and click Go to Publish, select the corresponding version and submit it for review.


#### 发布为支付宝小程序：
#### Published as an Alipay applet:
4. 入驻支付宝小程序，参考：[支付宝小程序教程](https://docs.alipay.com/mini/introduce)。
4. Enter the Alipay applet, refer to: [Alipay applet tutorial](https://docs.alipay.com/mini/introduce).
5. 在HBuilderX中顶部菜单依次点击 "发行" => "小程序-支付宝"，即可在 ``/unpackage/dist/build/mp-alipay`` 生成支付宝小程序项目代码。
5. Click "Issue" => "Mini Program-Alipay" in the top menu of HBuilderX, and you can generate the Alipay Mini Program project code in ``/unpackage/dist/build/mp-alipay``.
<div align=center>
  <img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni20190222-8.png"/>
</div>
3. 在支付宝小程序开发者工具中，导入生成的支付宝小程序项目，测试项目代码运行正常后，点击“上传”按钮上传代码，在 [支付宝小程序后台](https://open.alipay.com/platform/mini.htm#/app)，选择刚提交的版本点击提交审核，详见：[支付宝小程序文档](https://docs.alipay.com/mini/developer/publish)。
3. In the Alipay applet developer tool, import the generated Alipay applet project, and after the test project code is running normally, click the "Upload" button to upload the code, and in the [Alipay applet background](https://open.alipay. com/platform/mini.htm#/app), select the version just submitted and click Submit for review, see: [Alipay Mini Program Documentation](https://docs.alipay.com/mini/developer/publish).


#### 发布为字节跳动小程序：
   1. 入驻字节跳动小程序，参考：[字节跳动小程序教程](https://developer.open-douyin.com/docs/resource/zh-CN/developer/join/register)。
   2. 在HBuilderX中顶部菜单依次点击 "发行" => "小程序-字节跳动"，即可在 ``/unpackage/dist/build/mp-toutiao`` 生成字节跳动小程序项目代码。
   2. In HBuilderX, click "Release" => "Mini Program-ByteDance" in sequence from the top menu, and you can generate the ByteDance applet project code in ``/unpackage/dist/build/mp-toutiao``.
     <div align=center>
       <img style="max-width:300px;" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/zjdance.jpg"/>
     </div>
   3. 在字节跳动小程序开发者工具中，导入生成的字节跳动小程序项目，测试项目代码运行正常后，点击“上传”按钮上传代码，在 [字节跳动小程序后台](https://microapp.bytedance.com/applist)，选择刚提交的版本点击提交审核，详见：[字节跳动小程序文档](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/guide/release/package-audit/)。

#### 发布为360小程序：
#### Published as 360 applet:
   4. 入驻360小程序，参考：[360小程序教程](https://mp.360.cn/doc/miniprogram/dev/#/)。
   4. Enter the 360 Mini Program, refer to: [360 Mini Program Tutorial](https://mp.360.cn/doc/miniprogram/dev/#/).
   5. 在HBuilderX中顶部菜单依次点击 "发行" => "小程序-360"，即可在 ``/unpackage/dist/build/mp-360`` 生成360小程序项目代码。
   5. Click "Release" => "Mini Program-360" in the top menu of HBuilderX, and then the 360 Mini Program project code can be generated in ``/unpackage/dist/build/mp-360``.
     <div align=center>
       <img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-app-release-mp-360.png"/>
     </div>
   6. 在360浏览器中，导入生成的360小程序项目
   6. In the 360 browser, import the generated 360 applet project

**注意**
**Notice**
- 目前仅windows平台支持。360浏览器自身不支持mac平台。
- Currently only supported on windows platform. 360 browser itself does not support the mac platform.


#### 发布为快应用(webview)：
#### Publish as a quick application (webview):
  1. 入驻快应用(webview)，参考：[快应用(webview)教程](https://www.quickapp.cn/)。
  1. Enter the Quick App (webview), refer to: [Quick App (webview) Tutorial](https://www.quickapp.cn/).
  2. 在HBuilderX中顶部菜单依次点击 "发行" => "快应用联盟"，即可在 ``/unpackage/dist/build/quickapp-webview`` 生成快应用(webview)项目代码。
  2. Click "Release" => "Quick App Alliance" in the top menu of HBuilderX, and then you can generate the quick app (webview) project code in ``/unpackage/dist/build/quickapp-webview``.
    <div align=center>
      <img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-app-run-release-quickapp-webview.png"/>
    </div>
  3. 在快应用联盟工具中，导入生成的快应用联盟项目，测试项目代码运行正常后，点击”构建“打包正式版，在[快应用联盟后台](https://www.quickapp.cn/)上传
  3. In the Quick App Alliance tool, import the generated Quick App Alliance project, and after the test project code is running normally, click "Build" to package the official version, and in the [Quick App Alliance background](https://www.quickapp.cn/ ) upload


#### 发布为快应用(webview) - 华为：
#### Publish as a quick application (webview) - Huawei:
  4. 入驻华为快应用，参考：[华为快应用教程](https://developer.huawei.com/consumer/cn/quickApp)。
  4. Enter Huawei Quick App, refer to: [Huawei Quick App Tutorial](https://developer.huawei.com/consumer/cn/quickApp).
  5. 在HBuilderX中顶部菜单依次点击 "发行" => "快应用-华为"，即可在 ``/unpackage/dist/build/quickapp-webview`` 生成华为快应用项目代码。
  5. On the top menu of HBuilderX, click "Release" => "Quick App-Huawei" to generate Huawei Quick App project code in ``/unpackage/dist/build/quickapp-webview``.
    <div align=center>
      <img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-app-run-release-quickapp-webview-huawei.png"/>
    </div>
  6. 在华为开发者工具中，导入生成的华为快应用项目，测试项目代码运行正常后，点击”构建“打包正式版，在[华为快应用后台](https://developer.huawei.com/consumer/cn/quickApp)上传。
  6. In the Huawei Developer Tools, import the generated Huawei Quick App project, and after the test project code runs normally, click "Build" to package the official version, and in the [Huawei Quick App Background](https://developer.huawei.com/ consumer/cn/quickApp) upload.


#### 发布为QQ、快手、飞书、京东小程序：
#### Published as QQ, Kuaishou, Feishu, JD Mini Programs:
内容同上，不再重复。
The content is the same as above and will not be repeated.

发布的快捷键是`Ctrl+u`。同样可拉下快速发布菜单并按数字键选择。
The shortcut key released is `Ctrl+u`. You can also pull down the quick release menu and select by pressing number keys.

