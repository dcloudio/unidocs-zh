
> `uni-app`支持通过 可视化界面、[`vue-cli`命令行](https://uniapp.dcloud.io/quickstart?id=%e9%80%9a%e8%bf%87vue-cli%e5%91%bd%e4%bb%a4%e8%a1%8c) 两种方式快速创建项目。
> `uni-app` supports visual interface, [`vue-cli` command line](https://uniapp.dcloud.io/quickstart?id=%e9%80%9a%e8%bf%87vue-cli% e5%91%bd%e4%bb%a4%e8%a1%8c) There are two ways to quickly create a project.


### 1. 通过 HBuilderX 可视化界面
### 1. Visual interface through HBuilderX

可视化的方式比较简单，HBuilderX内置相关环境，开箱即用，无需配置nodejs。
The visualization method is relatively simple. HBuilderX has a built-in related environment, which can be used out of the box without configuring nodejs.

开始之前，开发者需先下载安装如下工具：
Before starting, developers need to download and install the following tools:

- HBuilderX：[官方IDE下载地址](https://www.dcloud.io/hbuilderx.html)
- HBuilderX: [Official IDE download address](https://www.dcloud.io/hbuilderx.html)

HBuilderX是通用的前端开发工具，但为`uni-app`做了特别强化。
HBuilderX is a general-purpose front-end development tool, but specially hardened for `uni-app`.

下载App开发版，可开箱即用；如下载标准版，在运行或发行`uni-app`时，会提示安装`uni-app`插件，插件下载完成后方可使用。
Download the development version of the app, which can be used out of the box; if you download the standard version, when running or issuing `uni-app`, you will be prompted to install the `uni-app` plug-in, and the plug-in can be used after the download is complete.

如使用`cli`方式创建项目，可直接下载标准版，因为uni-app编译插件被安装到项目下了。
If you use the `cli` method to create a project, you can download the standard version directly, because the uni-app compilation plugin is installed under the project.


## 创建uni-app
## create uni-app

在点击工具栏里的文件 -> 新建 -> 项目：
Click File -> New -> Project in the toolbar:
<div align=center>
  <img src="https://web-assets.dcloud.net.cn/unidoc/zh/create1.png"/>
</div>

选择`uni-app`类型，输入工程名，选择模板，点击创建，即可成功创建。
Select the `uni-app` type, enter the project name, select a template, and click Create to create it successfully.

uni-app自带的模板有 Hello uni-app ，是官方的组件和API示例。还有一个重要模板是 uni ui项目模板，日常开发推荐使用该模板，已内置大量常用组件。
The template that comes with uni-app is Hello uni-app , which is the official component and API example. Another important template is the uni ui project template, which is recommended for daily development, and has built-in a large number of common components.

<div align=center>
  <img src="https://web-assets.dcloud.net.cn/unidoc/zh/create-uniapp.jpg"/>
</div>


## 运行uni-app
## run uni-app
1. 浏览器运行：进入hello-uniapp项目，点击工具栏的运行 -> 运行到浏览器 -> 选择浏览器，即可在浏览器里面体验uni-app 的 H5 版。
1. Browser operation: Enter the hello-uniapp project, click Run on the toolbar -> Run to the browser -> Select the browser, you can experience the H5 version of uni-app in the browser.
  <div align=center>
  	<img src="https://web-assets.dcloud.net.cn/unidoc/zh/run-chrome.png"/>
  </div>

2. 真机运行：连接手机，开启USB调试，进入hello-uniapp项目，点击工具栏的运行 -> 真机运行 -> 选择运行的设备，即可在该设备里面体验uni-app。
2. Real machine operation: connect the mobile phone, enable USB debugging, enter the hello-uniapp project, click Run on the toolbar -> Real machine operation -> select the running device, you can experience the uni-app in the device.
	<div align=center>
		<img src="https://web-assets.dcloud.net.cn/unidoc/zh/run-phone.png"/>
	</div>
	
	如手机无法识别，请点击菜单运行-运行到手机或模拟器-真机运行常见故障排查指南。
	If the mobile phone cannot be recognized, please click the menu to run - run to mobile phone or emulator - common troubleshooting guide for real machine operation.
	注意目前开发App也需要安装微信开发者工具。
	Note that the current development of App also requires the installation of WeChat developer tools.
	
3. 在微信开发者工具里运行：进入hello-uniapp项目，点击工具栏的运行 -> 运行到小程序模拟器 -> 微信开发者工具，即可在微信开发者工具里面体验uni-app。
3. Run in WeChat Developer Tools: Enter the hello-uniapp project, click Run on the toolbar -> Run to Mini Program Simulator -> WeChat Developer Tools, you can experience uni-app in WeChat Developer Tools.
    <br/>
    <div align=center>
    	<img src="https://web-assets.dcloud.net.cn/unidoc/zh/uni20190222-1.png"/>
    </div>
    
    **注意：**如果是第一次使用，需要先配置小程序ide的相关路径，才能运行成功。如下图，需在输入框输入微信开发者工具的安装路径。 若HBuilderX不能正常启动微信开发者工具，需要开发者手动启动，然后将uni-app生成小程序工程的路径拷贝到微信开发者工具里面，在HBuilderX里面开发，在微信开发者工具里面就可看到实时的效果。
    **Note:** If it is the first time to use, you need to configure the relevant path of the applet ide before it can run successfully. As shown in the figure below, you need to enter the installation path of the WeChat developer tool in the input box. If HBuilderX cannot start the WeChat developer tool normally, the developer needs to start it manually, and then copy the path of the uni-app to generate the applet project into the WeChat developer tool, develop it in HBuilderX, and you can see it in the WeChat developer tool real-time effects.
    
    uni-app默认把项目编译到根目录的unpackage目录。
    uni-app compiles the project to the unpackage directory of the root directory by default.
    <br/>
    <div align=center>
      <img src="https://web-assets.dcloud.net.cn/unidoc/zh/weixin-setting.png"/>
    </div>
		
4. 在支付宝小程序开发者工具里运行：进入hello-uniapp项目，点击工具栏的运行 -> 运行到小程序模拟器 -> 支付宝小程序开发者工具，即可在支付宝小程序开发者工具里面体验uni-app。
4. Run in the Alipay applet developer tool: enter the hello-uniapp project, click Run on the toolbar -> run to the applet simulator -> Alipay applet developer tool, you can find it in the Alipay applet developer tool Experience uni-app.
    <br/>
    <div align=center>
    	<img src="https://web-assets.dcloud.net.cn/unidoc/zh/uni20190222-3.png"/>
    </div>

5. 在百度开发者工具里运行：进入hello-uniapp项目，点击工具栏的运行 -> 运行到小程序模拟器 -> 百度开发者工具，即可在百度开发者工具里面体验uni-app。
5. Run in Baidu Developer Tools: Enter the hello-uniapp project, click Run on the toolbar -> Run to Mini Program Simulator -> Baidu Developer Tools, you can experience uni-app in Baidu Developer Tools.
    <br/>
    <div align=center>
    	<img src="https://web-assets.dcloud.net.cn/unidoc/zh/uni20190222-2.png"/>
    </div>
 
6. 在字节跳动开发者工具里运行：进入hello-uniapp项目，点击工具栏的运行 -> 运行到小程序模拟器 -> 字节跳动开发者工具，即可在字节跳动开发者工具里面体验uni-app。
6. Run in ByteDance Developer Tools: Enter the hello-uniapp project, click Run on the toolbar -> Run to Mini Program Simulator -> ByteDance Developer Tools, you can find it in ByteDance Developer Tools Experience uni-app.
    <br/>
    <div align=center>
    	<img src="https://web-assets.dcloud.net.cn/unidoc/zh/uni20190222-4.png"/>
    </div>

7. 在360开发工具中导入：进入hello-uniapp项目，点击工具栏的运行 -> 运行到小程序模拟器 -> 360开发工具，即可在360开发工具里面体验uni-app。
7. Import in 360 development tools: Enter the hello-uniapp project, click Run on the toolbar -> Run to the applet simulator -> 360 development tools, you can experience uni-app in the 360 development tools.
    <br/>
    <div align=center>
      <img src="https://web-assets.dcloud.net.cn/unidoc/zh/uni-app-debug-mp-360.png"/>
    </div>

8. 在快应用联盟工具里运行：进入hello-uniapp项目，点击工具栏的运行 -> 运行到小程序模拟器 -> 快应用联盟工具，即可在快应用联盟工具里面体验uni-app。
8. Run in the quick app alliance tool: enter the hello-uniapp project, click Run on the toolbar -> run to the applet simulator -> quick app alliance tool, you can experience uni-app in the quick app alliance tool.
    <br/>
    <div align=center>
      <img src="https://web-assets.dcloud.net.cn/unidoc/zh/uni-app-run-debug-quickapp-webview.png"/>
    </div>

9. 在华为开发者工具里运行：进入hello-uniapp项目，点击工具栏的运行 -> 运行到小程序模拟器 -> 华为开发者工具，即可在华为开发者工具里面体验uni-app。
9. Run in Huawei Developer Tools: Enter the hello-uniapp project, click Run on the toolbar -> Run to Mini Program Simulator -> Huawei Developer Tools, you can experience uni-app in Huawei Developer Tools.
    <br/>
    <div align=center>
      <img src="https://web-assets.dcloud.net.cn/unidoc/zh/uni-app-run-release-quickapp-webview-huawei.png"/>
    </div>

10. 在QQ小程序开发工具里运行：内容同上，不再重复。
10. Run in the QQ applet development tool: the content is the same as above, and will not be repeated.

**Tips**

* 如果是第一次使用，需要配置开发工具的相关路径。点击工具栏的运行 -> 运行到小程序模拟器 -> 运行设置，配置相应小程序开发者工具的路径。
* If you are using it for the first time, you need to configure the relevant path of the development tool. Click Run -> Run to Mini Program Simulator -> Run Settings on the toolbar to configure the path of the corresponding Mini Program developer tools.
* 支付宝/百度/字节跳动/360小程序工具，不支持直接指定项目启动并运行。因此开发工具启动后，请将 HBuilderX 控制台中提示的项目路径，在相应小程序开发者工具中打开。
* Alipay/Baidu/ByteDance/360 applet tools do not support directly specifying the project to start and run. Therefore, after the development tool is started, please open the project path indicated in the HBuilderX console in the corresponding applet developer tool.
* 如果自动启动小程序开发工具失败，请手动启动小程序开发工具并将 HBuilderX 控制台提示的项目路径，打开项目。
* If the automatic startup of the applet development tool fails, please manually start the applet development tool and open the project with the project path prompted by the HBuilderX console.

运行的快捷键是`Ctrl+r`。
The shortcut key to run is `Ctrl+r`.
HBuilderX 还提供了快捷运行菜单，可以按数字快速选择要运行的设备：
HBuilderX also provides a quick run menu, you can quickly select the device to run by number:
<div align=center>
	<img src="https://web-assets.dcloud.net.cn/unidoc/zh/runtool.png"/>
</div>

如需调试，可参考：[uni-app调试](/snippet?id=使用-chrome-调试)
For debugging, please refer to: [uni-app debugging](/snippet?id=%E4%BD%BF%E7%94%A8-chrome-%E8%B0%83%E8%AF%95)

## 发布uni-app
## Publish uni-app

### 打包为原生App（云端）
### Packaged as native App (cloud)

在HBuilderX工具栏，点击发行，选择原生app-云端打包，如下图：
On the HBuilderX toolbar, click Release and select Native App-Cloud Packaging, as shown below:

<div align=center>
  <img src="https://web-assets.dcloud.net.cn/unidoc/zh/uni20190222-11.png"/>
</div>
出现如下界面，点击打包即可。
The following interface appears, click Package.
<div align=center>
  <img style="max-width:600px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/uni-pack-cloud.png"/>
</div>

### 打包为原生App（离线）
### Package as native App (offline)

``uni-app`` 支持离线打包，在 HBuilderX 发行菜单里生成离线打包资源，然后参考离线打包文档操作，可以从HBuilderX的发行菜单里找到文档链接，也可以直接访问：[https://nativesupport.dcloud.net.cn/AppDocs/README](https://nativesupport.dcloud.net.cn/AppDocs/README)。
``uni-app`` supports offline packaging, generate offline packaging resources in the HBuilderX release menu, and then refer to the offline packaging documentation operation, you can find the documentation link from the HBuilderX release menu, or you can directly visit: [https://nativesupport .dcloud.net.cn/AppDocs/README](https://nativesupport.dcloud.net.cn/AppDocs/README).

在HBuilderX工具栏，点击发行，选择本地打包，如下图，点击即可生成离线打包资源。
On the HBuilderX toolbar, click Release, select local packaging, as shown in the figure below, click to generate offline packaging resources.

<div align=center>
  <img src="https://web-assets.dcloud.net.cn/unidoc/zh/uni20190222-12.png"/>
</div>

### 发布为H5
### Publish as H5

1. 在 ``manifest.json`` 的可视化界面，进行如下配置（发行在网站根目录可不配置应用基本路径），此时发行网站路径是 www.xxx.com/h5，如：[https://hellouniapp.dcloud.net.cn](https://hellouniapp.dcloud.net.cn)。
1. In the visual interface of ``manifest.json``, perform the following configuration (the application base path may not be configured in the root directory of the website), at this time, the path of the issuing website is www.xxx.com/h5, such as: [https:/ /hellouniapp.dcloud.net.cn](https://hellouniapp.dcloud.net.cn).
<div align=center>
	<img src="https://web-assets.dcloud.net.cn/unidoc/zh/build-h5-1.png" style="max-width:600px;height:auto;"/>
</div>
2. 在HBuilderX工具栏，点击发行，选择网站-H5手机版，如下图，点击即可生成 H5 的相关资源文件，保存于 unpackage 目录。
2. On the HBuilderX toolbar, click Release, select Website-H5 Mobile Version, as shown in the figure below, click to generate H5 related resource files and save them in the unpackage directory.

<div align=center>
	<img src="https://web-assets.dcloud.net.cn/unidoc/zh/uni20190222-10.png" style="max-width:600px;height:auto;"/>
</div>

**注意**
**Notice**
- `history` 模式发行需要后台配置支持，详见：[history 模式的后端配置](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90)
- `history` mode release requires background configuration support, see: [Backend configuration of history mode](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90% 8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90)
- 打包部署后，在服务器上开启 gzip 可以进一步压缩文件。具体的配置，可以参考网上的分享：https://juejin.im/post/5af003286fb9a07aac24611b
- After packaging and deployment, enable gzip on the server to further compress files. For specific configuration, please refer to the online sharing: https://juejin.im/post/5af003286fb9a07aac24611b

### 发布为小程序
### Publish as applet

**发布为微信小程序：**
**Published as a WeChat applet:**
1. 申请微信小程序AppID，参考：[微信教程](https://developers.weixin.qq.com/miniprogram/dev/#申请帐号)。
1. To apply for a WeChat Mini Program AppID, refer to: [WeChat Tutorial](https://developers.weixin.qq.com/miniprogram/dev/#%E7%94%B3%E8%AF%B7%E5%B8%90 %E5%8F%B7).
2. 在HBuilderX中顶部菜单依次点击 "发行" => "小程序-微信"，输入小程序名称和appid点击发行即可在 ``unpackage/dist/build/mp-weixin`` 生成微信小程序项目代码。
2. Click "Release" => "Mini Program-WeChat" in the top menu of HBuilderX, enter the applet name and appid and click Release to generate a WeChat applet project in ``unpackage/dist/build/mp-weixin`` code.
<div align=center>
  <img src="https://web-assets.dcloud.net.cn/unidoc/zh/uni20190222-6.png"/>
</div>
3. 在微信小程序开发者工具中，导入生成的微信小程序项目，测试项目代码运行正常后，点击“上传”按钮，之后按照 “提交审核” => “发布” 小程序标准流程，逐步操作即可，详细查看：[微信官方教程](https://developers.weixin.qq.com/miniprogram/dev/quickstart/basic/release.html)。
3. In the WeChat applet developer tool, import the generated WeChat applet project, and after the test project code runs normally, click the "Upload" button, and then follow the "Submit for Review" => "Publish" applet standard process, step by step That's it, check it out in detail: [WeChat Official Tutorial](https://developers.weixin.qq.com/miniprogram/dev/quickstart/basic/release.html).

**发布为百度小程序：**
**Published as a Baidu applet:**
1. 入驻小程序并申请百度小程序AppID，参考：[百度小程序教程](https://smartprogram.baidu.com/docs/introduction/enter_application/)。
1. Enter the Mini Program and apply for the Baidu Mini Program AppID, refer to: [Baidu Mini Program Tutorial](https://smartprogram.baidu.com/docs/introduction/enter_application/).
2. 在HBuilderX中顶部菜单依次点击 "发行" => "小程序-百度"，输入小程序名称和appid点击发行即可在 ``/unpackage/dist/build/mp-baidu`` 生成百度小程序项目代码。
2. Click "Release" => "Mini Program-Baidu" in the top menu of HBuilderX, enter the applet name and appid and click Release to generate Baidu applet at ``/unpackage/dist/build/mp-baidu`` project code.
<div align=center>
  <img src="https://web-assets.dcloud.net.cn/unidoc/zh/uni20190222-7.png"/>
</div>
3. 在百度小程序开发者工具中，导入生成的百度小程序项目，测试项目代码运行正常后，点击“上传”按钮上传代码，之后在百度小程序的 [管理中心](https://smartprogram.baidu.com/developer/applist.html) 选择创建的应用点击前往发布，选择对应的版本然后提交审核。
3. In the Baidu applet developer tool, import the generated Baidu applet project, and after the test project code runs normally, click the "Upload" button to upload the code, and then upload the code in the Baidu applet's [Management Center](https://smartprogram .baidu.com/developer/applist.html) Select the created app and click Go to Publish, select the corresponding version and submit it for review.


**发布为支付宝小程序：**
**Published as Alipay applet:**
1. 入驻支付宝小程序，参考：[支付宝小程序教程](https://docs.alipay.com/mini/introduce)。
1. Enter the Alipay applet, refer to: [Alipay applet tutorial](https://docs.alipay.com/mini/introduce).
2. 在HBuilderX中顶部菜单依次点击 "发行" => "小程序-支付宝"，即可在 ``/unpackage/dist/build/mp-alipay`` 生成支付宝小程序项目代码。
2. Click "Issue" => "Mini Program-Alipay" in the top menu of HBuilderX, and you can generate the Alipay Mini Program project code in ``/unpackage/dist/build/mp-alipay``.
<div align=center>
  <img src="https://web-assets.dcloud.net.cn/unidoc/zh/uni20190222-8.png"/>
</div>
3. 在支付宝小程序开发者工具中，导入生成的支付宝小程序项目，测试项目代码运行正常后，点击“上传”按钮上传代码，在 [支付宝小程序后台](https://open.alipay.com/platform/mini.htm#/app)，选择刚提交的版本点击提交审核，详见：[支付宝小程序文档](https://docs.alipay.com/mini/developer/publish)。
3. In the Alipay applet developer tool, import the generated Alipay applet project, and after the test project code is running normally, click the "Upload" button to upload the code, and in the [Alipay applet background](https://open.alipay. com/platform/mini.htm#/app), select the version just submitted and click Submit for review, see: [Alipay Mini Program Documentation](https://docs.alipay.com/mini/developer/publish).


**发布为字节跳动小程序：**
**Published as ByteDance applet:**
1. 入驻字节跳动小程序，参考：[字节跳动小程序教程](https://developer.toutiao.com/dev/cn/mini-app/introduction/plug-in/registration)。
1. Enter the ByteDance Mini Program, refer to: [ByteDance Mini Program Tutorial](https://developer.toutiao.com/dev/cn/mini-app/introduction/plug-in/registration).
2. 在HBuilderX中顶部菜单依次点击 "发行" => "小程序-字节跳动"，即可在 ``/unpackage/dist/build/mp-alipay`` 生成字节跳动小程序项目代码。
2. On the top menu of HBuilderX, click "Release" => "Mini Program-ByteDance" to generate the ByteDance applet project code in ``/unpackage/dist/build/mp-alipay``.
<div align=center>
  <img style="max-width:300px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/zjdance.jpg"/>
</div>
3. 在字节跳动小程序开发者工具中，导入生成的字节跳动小程序项目，测试项目代码运行正常后，点击“上传”按钮上传代码，在 [字节跳动小程序后台](https://developer.toutiao.com/app/applist)，选择刚提交的版本点击提交审核，详见：[字节跳动小程序文档](https://developer.toutiao.com/dev/cn/mini-app/introduction/plug-in/verification)。
3. In the ByteDance applet developer tool, import the generated ByteDance applet project, and after the test project code runs normally, click the "Upload" button to upload the code, and in the [ByteDance applet background](https: //developer.toutiao.com/app/applist), select the version just submitted and click submit for review, see: [ByteDance Mini Program Documentation](https://developer.toutiao.com/dev/cn/mini- app/introduction/plug-in/verification).

**发布为360小程序：**
**Published as 360 applet:**
1. 入驻360小程序，参考：[360小程序教程](https://mp.360.cn/doc/miniprogram/dev/#/)。
1. Enter the 360 Mini Program, refer to: [360 Mini Program Tutorial](https://mp.360.cn/doc/miniprogram/dev/#/).
2. 在HBuilderX中顶部菜单依次点击 "发行" => "小程序-360"，即可在 ``/unpackage/dist/build/mp-360`` 生成360小程序项目代码。
2. Click "Release" => "Mini Program-360" in the top menu of HBuilderX, and you can generate the 360 Mini Program project code in ``/unpackage/dist/build/mp-360``.
<div align=center>
  <img src="https://web-assets.dcloud.net.cn/unidoc/zh/uni-app-release-mp-360.png"/>
</div>
3. 在360浏览器中，导入生成的360小程序项目
3. In the 360 browser, import the generated 360 applet project

**注意**
**Notice**
- 目前仅windows平台支持。360浏览器自身不支持mac平台。
- Currently only supported on windows platform. 360 browser itself does not support the mac platform.


**发布为快应用(webview)：**
**Published as a quick application (webview):**
1. 入驻快应用(webview)，参考：[快应用(webview)教程](https://www.quickapp.cn/)。
1. Enter the Quick App (webview), refer to: [Quick App (webview) Tutorial](https://www.quickapp.cn/).
2. 在HBuilderX中顶部菜单依次点击 "发行" => "快应用联盟"，即可在 ``/unpackage/dist/build/quickapp-webview`` 生成快应用(webview)项目代码。
2. Click "Release" => "Quick App Alliance" in the top menu of HBuilderX, and then you can generate the quick app (webview) project code in ``/unpackage/dist/build/quickapp-webview``.
<div align=center>
  <img src="https://web-assets.dcloud.net.cn/unidoc/zh/uni-app-run-release-quickapp-webview.png"/>
</div>
3. 在快应用联盟工具中，导入生成的快应用联盟项目，测试项目代码运行正常后，点击”构建“打包正式版，在[快应用联盟后台](https://www.quickapp.cn/)上传
3. In the Quick App Alliance tool, import the generated Quick App Alliance project, and after the test project code is running normally, click "Build" to package the official version, and in the [Quick App Alliance background](https://www.quickapp.cn/ ) upload


**发布为快应用(webview) - 华为：**
**Published as Quick App (webview) - Huawei:**
1. 入驻华为快应用，参考：[华为快应用教程](https://developer.huawei.com/consumer/cn/quickApp)。
1. Enter Huawei Quick App, refer to: [Huawei Quick App Tutorial](https://developer.huawei.com/consumer/cn/quickApp).
2. 在HBuilderX中顶部菜单依次点击 "发行" => "快应用-华为"，即可在 ``/unpackage/dist/build/quickapp-webview`` 生成华为快应用项目代码。
2. On the top menu of HBuilderX, click "Release" => "Quick App-Huawei" to generate Huawei Quick App project code in ``/unpackage/dist/build/quickapp-webview``.
<div align=center>
  <img src="![](https://web-assets.dcloud.net.cn/unidoc/zh/uni-app-run-release-quickapp-webview-huawei.png)g"/>
</div>
3. 在华为开发者工具中，导入生成的华为快应用项目，测试项目代码运行正常后，点击”构建“打包正式版，在[华为快应用后台](https://developer.huawei.com/consumer/cn/quickApp)上传
3. In the Huawei Developer Tools, import the generated Huawei Quick App project, and after the test project code runs normally, click "Build" to package the official version, and in the [Huawei Quick App Background](https://developer.huawei.com/ consumer/cn/quickApp) upload


**发布为QQ小程序：**
**Published as QQ applet:**
内容同上，不再重复。
The content is the same as above and will not be repeated.

发布的快捷键是`Ctrl+u`。同样可拉下快速发布菜单并按数字键选择。
The published shortcut is `Ctrl+u`. Also pull down the quick release menu and press the number keys to select.


# 2. 通过vue-cli命令行
# 2. Via vue-cli command line

除了HBuilderX可视化界面，也可以使用 `cli` 脚手架，可以通过 `vue-cli` 创建 `uni-app` 项目。
In addition to the HBuilderX visual interface, `cli` scaffolding can also be used, and `uni-app` projects can be created through `vue-cli`.


## 环境安装
## Environment installation

全局安装vue-cli
Install vue-cli globally

```
npm install -g @vue/cli
```

## 创建uni-app
## create uni-app

**使用正式版**（对应HBuilderX最新正式版）
**Use the official version** (corresponding to the latest official version of HBuilderX)

```
vue create -p dcloudio/uni-preset-vue my-project
```

**使用alpha版**（对应HBuilderX最新alpha版）
**Use the alpha version** (corresponding to the latest alpha version of HBuilderX)

```
vue create -p dcloudio/uni-preset-vue#alpha my-alpha-project
```

此时，会提示选择项目模板，初次体验建议选择 `hello uni-app` 项目模板，如下所示：
At this point, you will be prompted to select a project template. It is recommended to select the `hello uni-app` project template for the first experience, as shown below:

<div>
<img src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/h5-cli-01.png" width="300">
</div>

#### 自定义模板
#### custom template
选择自定义模板时，需要填写 uni-app 模板地址，这个地址其实就是托管在云端的仓库地址。以 GitHub 为例，地址格式为 `userName/repositoryName`，如 `dcloudio/uni-template-picture` 就是下载图片模板。
When choosing a custom template, you need to fill in the uni-app template address, which is actually the address of the warehouse hosted in the cloud. Take GitHub as an example, the address format is `userName/repositoryName`, such as `dcloudio/uni-template-picture` is to download the picture template.

更多支持的下载方式，请参考这个插件的说明：[download-git-repo](https://www.npmjs.com/package/download-git-repo)
For more supported download methods, please refer to the description of this plugin: [download-git-repo](https://www.npmjs.com/package/download-git-repo)

#### 修改依赖为指定版本
#### Modify the dependency to the specified version

1. 查看 HBuilderX 对应的 NPM 依赖版本: 打开 [NPM版本记录](https://www.npmjs.com/package/@dcloudio/vue-cli-plugin-hbuilderx)，版本号 2.0.0- 后面是与 HBuilderX 对应的版本号且小版本不会超过9，比如 HBuilderX 2.7.5.20200518 对应的版本号 2.0.0-27520200518001，2.0.0-271420200618 对应的为 2.0.0-27920200618002。
1. Check the NPM dependency version corresponding to HBuilderX: Open the [NPM version record](https://www.npmjs.com/package/@dcloudio/vue-cli-plugin-hbuilderx), the version number 2.0.0- is followed by the The version number corresponding to HBuilderX and the minor version will not exceed 9. For example, the version number corresponding to HBuilderX 2.7.5.20200518 is 2.0.0-27520200518001, and the version number corresponding to 2.0.0-271420200618 is 2.0.0-27920200618002.

2. 批量修改 package.json 中 uni 相关依赖为指定的版本号（去掉版本号前面 ^）。
2. Batch modify the uni-related dependencies in package.json to the specified version number (remove the ^ in front of the version number).

3. 对于有变化的依赖进行增删，提示不存指定版本的依赖可以保留原始版本或者删除，运行时提示缺少的依赖自行安装。
3. Add or delete dependencies that have changed. If you are prompted that there is no specified version of the dependency, you can keep the original version or delete it. At runtime, you will be prompted to install the missing dependencies by yourself.

## 运行、发布uni-app
## Run, publish uni-app

```
npm run dev:%PLATFORM%
npm run build:%PLATFORM%
```

``%PLATFORM%`` 可取值如下：
``%PLATFORM%`` can take the following values:

|值|平台|
|value|platform|
|---|---|
|app-plus|app平台生成打包资源（支持npm run build:app-plus，可用于持续集成。不支持run，运行调试仍需在HBuilderX中操作）|
|h5|H5|
|mp-alipay|支付宝小程序|
|mp-alipay|Alipay Mini Program|
|mp-baidu|百度小程序|
|mp-baidu|Baidu Mini Program|
|mp-weixin|微信小程序|
|mp-weixin|WeChat Mini Program|
|mp-toutiao|字节跳动小程序|
|mp-toutiao|Byte Beat Mini Program|
|mp-lark|飞书小程序|
|mp-lark|Feishu Mini Program|
|mp-qq|qq 小程序|
|mp-qq|qq applet|
|mp-360|360 小程序|
|mp-360|360 Mini Program|
|mp-kuaishou|快手小程序|
|mp-kuaishou|Kaishou Mini Program|
|mp-jd|京东小程序|
|mp-jd|JD Mini Program|
|quickapp-webview|快应用(webview)|
|quickapp-webview|Quick App(webview)|
|quickapp-webview-union|快应用联盟|
|quickapp-webview-union|Quick App Union|
|quickapp-webview-huawei|快应用华为|
|quickapp-webview-huawei|Quick App Huawei|

可以自定义更多条件编译平台，比如钉钉小程序，参考[package.json文档](https://uniapp.dcloud.io/collocation/package)。
You can customize more conditional compilation platforms, such as DingTalk applet, refer to [package.json document](https://uniapp.dcloud.io/collocation/package).

## 运行并发布快应用@quickapp
## Run and publish the quick app @quickapp
快应用有两种开发方式，uni-app均支持：
There are two development methods for quick apps, both of which are supported by uni-app:
- 类小程序webview渲染方式：[https://ask.dcloud.net.cn/article/37182](https://ask.dcloud.net.cn/article/37182)
- Small program webview rendering method: [https://ask.dcloud.net.cn/article/37182](https://ask.dcloud.net.cn/article/37182)
- 原生渲染方式：[https://ask.dcloud.net.cn/article/37145](https://ask.dcloud.net.cn/article/37145)
- Native rendering method: [https://ask.dcloud.net.cn/article/37145](https://ask.dcloud.net.cn/article/37145)


#### 运行并发布快应用(webview)@quickapp-webview
#### Run and publish the quick app (webview) @quickapp-webview
HBuilderX 2.7.12+ 版支持
HBuilderX version 2.7.12+ support


#### 运行并发布快应用(webview)-华为@quickapp-webview-huawei
#### Run and publish a quick app (webview) - Huawei @quickapp-webview-huawei
HBuilderX 2.7.10+ 版支持
HBuilderX version 2.7.10+ support

华为快应用文档-小程序转快应用 [https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/quickapp-filestructure](https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/quickapp-filestructure)
Huawei Quick App Documentation - Mini Program Quick App [https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/quickapp-filestructure](https://developer.huawei.com/consumer/ cn/doc/development/quickApp-References/quickapp-filestructure)


**其他：**
**other:**

* 目前使用`npm run build:app-plus`会在`/dist/build/app-plus`下生成app打包资源。如需制作wgt包，将`app-plus`中的文件压缩成zip（注意：不要包含`app-plus目录`），再重命名为`${appid}.wgt`， `appid`为`manifest.json`文件中的`appid`。
* Currently, using `npm run build:app-plus` will generate app packaging resources under `/dist/build/app-plus`. To make a wgt package, compress the files in `app-plus` into a zip (note: do not include the `app-plus directory`), rename it to `${appid}.wgt`, and `appid` to `manifest` `appid` in the .json` file.
* dev 模式编译出的各平台代码存放于根目录下的 ``/dist/dev/``目录，打开各平台开发工具选择对应平台目录即可进行预览（h5 平台不会在此目录，存在于缓存中）；
* The code of each platform compiled in dev mode is stored in the ``/dist/dev/`` directory in the root directory. Open the development tools of each platform and select the corresponding platform directory to preview (the h5 platform will not be in this directory, it exists in in the cache);
* build 模式编译出的各平台代码存放于根目录下的 ``/dist/build/`` 目录，发布时选择此目录进行发布；
* The code of each platform compiled in build mode is stored in the ``/dist/build/`` directory under the root directory, and this directory is selected for publishing when publishing;
* dev 和 build 模式的区别：
* Differences between dev and build modes:
  1. dev 模式有 SourceMap 可以方便的进行断点调试；
  1. In dev mode, there is SourceMap for easy breakpoint debugging;
  2. build 模式会将代码进行压缩，体积更小更适合发布为正式版应用；
  2. The build mode will compress the code, which is smaller and more suitable for publishing as an official version of the application;
  3. 进行 [环境判断](/frame?id=运行环境判断) 时，dev 模式 process.env.NODE_ENV 的值为 development，build 模式 process.env.NODE_ENV 的值为 production。
  3. Perform [environmental judgment](/frame?id=%E8%BF%90%E8%A1%8C%E7%8E%AF%E5%A2%83%E5%88%A4%E6%96%AD) , the value of process.env.NODE_ENV in dev mode is development, and the value of process.env.NODE_ENV in build mode is production.

## 使用cli创建项目和使用HBuilderX可视化界面创建项目有什么区别
## What is the difference between creating a project using cli and creating a project using the HBuilderX visual interface

#### 编译器的区别
#### Compiler differences

* ``cli`` 创建的项目，编译器安装在项目下。并且不会跟随HBuilderX升级。如需升级编译器，执行 ``npm update``，或者手动修改 package.json 中的 uni 相关依赖版本后执行 ``npm install``。更新后可能会有新增的依赖并不会自动安装，手动安装缺少的依赖即可。
* The project created by ``cli``, the compiler is installed under the project. And will not follow the HBuilderX upgrade. To upgrade the compiler, execute ``npm update``, or manually modify the version of uni-related dependencies in package.json and execute ``npm install``. After the update, there may be new dependencies that will not be installed automatically. You can manually install the missing dependencies.
* HBuilderX可视化界面创建的项目，编译器在HBuilderX的安装目录下的plugin目录，随着HBuilderX的升级会自动升级编译器。
* The project created by the HBuilderX visual interface, the compiler is in the plugin directory under the HBuilderX installation directory, and the compiler will be automatically upgraded with the upgrade of HBuilderX.
* 已经使用``cli``创建的项目，如果想继续在HBuilderX里使用，可以把工程拖到HBuilderX中。注意如果是把整个项目拖入HBuilderX，则编译时走的是项目下的编译器。如果是把src目录拖入到HBuilderX中，则走的是HBuilderX安装目录下plugin目录下的编译器。
* If you want to continue using the project created by ``cli`` in HBuilderX, you can drag the project to HBuilderX. Note that if the entire project is dragged into HBuilderX, the compiler under the project is used when compiling. If the src directory is dragged into HBuilderX, the compiler in the plugin directory under the HBuilderX installation directory is used.
* ``cli``版如果想安装less、scss、ts等编译器，需自己手动npm安装。在HBuilderX的插件管理界面安装无效，那个只作用于HBuilderX创建的项目。
* If you want to install less, scss, ts and other compilers in the ``cli`` version, you need to manually npm install it yourself. It is invalid to install in the plugin management interface of HBuilderX, that only works on the project created by HBuilderX.
 
#### 开发工具的区别
#### Differences in development tools
* ``cli``创建的项目，内置了d.ts，同其他常规npm库一样，可在[vscode](https://ask.dcloud.net.cn/article/36286)、[webstorm](https://ask.dcloud.net.cn/article/36307)等支持d.ts的开发工具里正常开发并有语法提示。
* Projects created by ``cli`` have built-in d.ts, like other regular npm libraries, which can be found in [vscode](https://ask.dcloud.net.cn/article/36286), [webstorm]( https://ask.dcloud.net.cn/article/36307) and other development tools that support d.ts are normally developed and have syntax prompts.
* 使用HBuilderX创建的项目不带d.ts，HBuilderX内置了uni-app语法提示库。如需把HBuilderX创建的项目在其他编辑器打开并且补充d.ts，可以在项目下先执行 ``npm init``，然后``npm i @types/uni-app -D``，来补充d.ts。
* Projects created with HBuilderX do not have d.ts, and HBuilderX has a built-in uni-app syntax hint library. If you want to open the project created by HBuilderX in other editors and add d.ts, you can execute ``npm init`` under the project, then ``npm i @types/uni-app -D``, to supplement d.ts .ts.
* 但vscode等其他开发工具，在vue或uni-app领域，开发效率比不过HBuilderX。详见：[https://ask.dcloud.net.cn/article/35451](https://ask.dcloud.net.cn/article/35451)
* But other development tools such as vscode, in the field of vue or uni-app, are less efficient than HBuilderX. For details, see: [https://ask.dcloud.net.cn/article/35451](https://ask.dcloud.net.cn/article/35451)
* 发布App时，仍然需要使用HBuilderX。其他开发工具无法发布App，但可以发布H5、各种小程序。如需开发App，可以先在HBuilderX里运行起来，然后在其他编辑器里修改保存代码，代码修改后会自动同步到手机基座。
* You still need to use HBuilderX when publishing your app. Other development tools cannot publish apps, but they can publish H5 and various small programs. If you need to develop an App, you can run it in HBuilderX first, and then modify and save the code in other editors. After the code is modified, it will be automatically synchronized to the mobile phone base.
* 如果使用``cli``创建项目，那下载HBuilderX时只需下载10M的标准版即可。因为编译器已经安装到项目下了。
* If you use ``cli`` to create a project, you only need to download the 10M standard version when downloading HBuilderX. Because the compiler has been installed under the project.
* 对 `cli` 使用有疑问，欢迎扫码加入 uni-app 微信交流群讨论：
* If you have any questions about the use of `cli`, please scan the code to join the uni-app WeChat exchange group discussion:
    <br/><img src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/wx-barcode.png" width="250"/>

注意：HBuilderX创建的项目，一样可以使用npm，参考：[https://uniapp.dcloud.io/frame?id=npm%e6%94%af%e6%8c%81](https://uniapp.dcloud.io/frame?id=npm%e6%94%af%e6%8c%81)
Note: Projects created by HBuilderX can also use npm, reference: [https://uniapp.dcloud.io/frame?id=npm%e6%94%af%e6%8c%81](https://uniapp.dcloud.io/frame?id=npm%e6%94%af%e6%8c%81)
