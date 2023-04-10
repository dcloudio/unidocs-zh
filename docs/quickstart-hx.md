> `uni-app`支持通过 可视化界面、[`vue-cli`命令行](https://uniapp.dcloud.io/quickstart-cli) 两种方式快速创建项目。


可视化的方式比较简单，HBuilderX内置相关环境，开箱即用，无需配置nodejs。

开始之前，开发者需先下载安装如下工具：

- HBuilderX：[官方IDE下载地址](https://www.dcloud.io/hbuilderx.html)

HBuilderX是通用的前端开发工具，但为`uni-app`做了特别强化。


## 创建uni-app

在点击工具栏里的文件 -> 新建 -> 项目（快捷键`Ctrl+N`）：
<div align=center>
  <img src="https://web-assets.dcloud.net.cn/unidoc/zh/hx-create-01.png"/>
</div>

选择`uni-app`类型，输入工程名，选择模板，点击创建，即可成功创建。

uni-app自带的模板有 默认的空项目模板、Hello uni-app 官方组件和API示例，还有一个重要模板是 uni ui项目模板，日常开发推荐使用该模板，已内置大量常用组件。

<div align=center>
  <img src="https://web-assets.dcloud.net.cn/unidoc/zh/create-uniapp.jpg"/>
</div>


开发者也可以使用`cli`方式创建项目，另见[文档](https://uniapp.dcloud.io/quickstart-cli.html)。

差别是：HBuilderX创建的项目根目录就是源码，可直接编辑。uni-app的编译器在HBuilderX的插件目录下，跟随HBuilderX升级而一起升级。

如果开发者习惯于node模式的项目，对HBuilderX可视化方式感到困惑，可另行参考文档：[## cli创建项目和HBuilderX可视化界面创建项目的区别](quickstart-cli.md#clidiff)

## 运行uni-app


1. 浏览器运行：进入hello-uniapp项目，点击工具栏的运行 -> 运行到浏览器 -> 选择浏览器，即可体验 uni-app 的 web 版。
  <div align=center>
  	<img src="https://web-assets.dcloud.net.cn/unidoc/zh/menurun.png"/>
  </div>

2. 运行App到手机或模拟器：使用电压足够的usb端口连接手机，设置中开启USB调试，手机上允许电脑设备调试手机，进入hello-uniapp项目，点击工具栏的运行 -> 运行App到手机或模拟器，即可在该设备里面体验uni-app。
	<div align=center>
		<img src="https://web-assets.dcloud.net.cn/unidoc/zh/menurunapp.png"/>
	</div>
	
	- 如手机或模拟器无法识别，请点击[常见故障排查指南](https://uniapp.dcloud.net.cn/tutorial/run/run-app-faq.html)。
  - 如需运行在苹果手机真机上，注意需使用自定义基座。[详见](https://uniapp.dcloud.net.cn/tutorial/run/run-app.html#customplayground)
	
3. 在微信开发者工具里运行：进入hello-uniapp项目，点击工具栏的运行 -> 运行到小程序模拟器 -> 微信开发者工具，即可在微信开发者工具里面体验uni-app。
    <br/>
    <div align=center>
    	<img src="https://web-assets.dcloud.net.cn/unidoc/zh/menurunminiapp.png"/>
    </div>
    
    **注意**：如果是第一次使用，需要先配置小程序ide的相关路径，才能运行成功。如下图，需在输入框输入微信开发者工具的安装路径。
    <br/>
    <div align=center>
      <img src="https://web-assets.dcloud.net.cn/unidoc/zh/weixin-setting.png"/>
    </div>

    **注意**：微信开发者工具需要开启服务端口 在微信工具的设置->安全中。
		
4. 在支付宝小程序开发者工具里运行：进入hello-uniapp项目，点击工具栏的运行 -> 运行到小程序模拟器 -> 支付宝小程序开发者工具，即可在支付宝小程序开发者工具里面体验uni-app。
    <br/>
    <div align=center>
    	<img src="https://web-assets.dcloud.net.cn/unidoc/zh/run-ali.png"/>
    </div>

5. 在百度、字节跳动、QQ、快应用（分联盟和华为）、快手、飞书、360、京东等小程序开发工具里运行：内容同上，不再重复。

**Tips**

* 如果是第一次使用，需要配置开发工具的相关路径。点击工具栏的运行 -> 运行到小程序模拟器 -> 运行设置，配置相应小程序开发者工具的路径。
* 微信小程序工具需要配置允许权限，不然HBuilder无法调用微信小程序开发工具的命令行
* 支付宝/百度/字节跳动/360小程序工具，不支持直接指定项目启动并运行。因此开发工具启动后，请将 HBuilderX 控制台中提示的项目路径，在相应小程序开发者工具中打开。
* 如果自动启动小程序开发工具失败，请手动启动小程序开发工具并将 HBuilderX 控制台提示的项目路径，打开项目。

运行的快捷键是`Ctrl+R`。

HBuilderX 还提供了快捷运行菜单，可以按数字快速选择要运行的设备：
<div align=center>
	<img src="https://web-assets.dcloud.net.cn/unidoc/zh/runtool.png"/>
</div>

如需调试，可参考：[uni-app调试](tutorial/run-and-debug.md)

## 发布uni-app

### 打包为原生App

在HBuilderX工具栏，点击发行，选择原生app-云端打包，如下图：

<div align=center>
  <img src="https://web-assets.dcloud.net.cn/unidoc/zh/uni20190222-11.png"/>
</div>
出现如下界面，点击打包即可。
<div align=center>
  <img style="max-width:600px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/uni-pack-cloud.png"/>
</div>

云端打包支持安心打包，保护用户隐私，不会上传代码和证书，通过差量包制作方式实现安心打包。详见：[https://ask.dcloud.net.cn/article/37979](https://ask.dcloud.net.cn/article/37979)

云打包也支持cli模式，通过HBuilderX的cli方式（不是uni-app的cli），可以调用命令行打包，方便持续集成。详见：[https://hx.dcloud.net.cn/cli/pack](https://hx.dcloud.net.cn/cli/pack)

虽然安心打包已经满足需求，但如仍然希望自己使用 xcode 或 Android studio 进行离线打包，则在 HBuilderX 发行菜单里找到本地打包菜单，生成离线打包资源，然后参考离线打包文档操作：[https://nativesupport.dcloud.net.cn/AppDocs/README](https://nativesupport.dcloud.net.cn/AppDocs/README)。

App打包时，注意如果涉及三方sdk，需进行申请并在manifest.json里配置，否则相关功能无法使用。

iOS App打包需要向Apple申请证书。


### 发布为Web网站

1. 在 ``manifest.json`` 的可视化界面，进行如下配置（发行在网站根目录可不配置应用基本路径），此时发行网站路径是 www.xxx.com/h5，如：[https://hellouniapp.dcloud.net.cn](https://hellouniapp.dcloud.net.cn)。
  <div align=center>
    <img src="https://web-assets.dcloud.net.cn/unidoc/zh/build-h5-1.png" style="max-width:600px;height:auto;"/>
  </div>
2. 在HBuilderX工具栏，点击发行，选择网站-H5手机版，如下图，点击即可生成 H5 的相关资源文件，保存于 unpackage 目录。

<div align=center>
	<img src="https://web-assets.dcloud.net.cn/unidoc/zh/uni20190222-10.png" style="max-width:600px;height:auto;"/>
</div>

<div align=center>
	<img src="https://web-assets.dcloud.net.cn/unidoc/zh/buildweb.png"/>
</div>

**注意**
- `history` 模式发行需要后台配置支持，详见：[history 模式的后端配置](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90)
- 打包后，推荐使用[前端网页托管服务](/uniCloud/hosting)，一键上传，自带CDN加速，无需购买虚拟机，无需安装nginx等；
- 若使用传统服务器部署，建议在服务器端开启 `gzip` 压缩。参考网上的分享：https://juejin.im/post/5af003286fb9a07aac24611b

### 发布为小程序

#### 发布为微信小程序：
1. 申请微信小程序AppID，参考：[微信教程](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/getstart.html#%E7%94%B3%E8%AF%B7%E5%B8%90%E5%8F%B7)。
2. 在HBuilderX中顶部菜单依次点击 "发行" => "小程序-微信"，输入小程序名称和appid点击发行即可
<div align=center>
  <img src="https://web-assets.dcloud.net.cn/unidoc/zh/buildmpweixin.png"/>
</div>

如果手动发行，则点击发行按钮后，会在项目的目录 ``unpackage/dist/build/mp-weixin`` 生成微信小程序项目代码。在微信小程序开发者工具中，导入生成的微信小程序项目，测试项目代码运行正常后，点击“上传”按钮，之后按照 “提交审核” => “发布” 小程序标准流程，逐步操作即可，详细查看：[微信官方教程](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/release.html#%E5%8F%91%E5%B8%83%E4%B8%8A%E7%BA%BF)。

如果在发行界面勾选了`自动上传微信平台`，则无需再打开微信工具手动操作，将直接上传到微信服务器提交审核。

#### 发布为百度小程序：
4. 入驻小程序并申请百度小程序AppID，参考：[百度小程序教程](https://smartprogram.baidu.com/docs/introduction/enter_application/)。
5. 在HBuilderX中顶部菜单依次点击 "发行" => "小程序-百度"，输入小程序名称和appid点击发行即可在 ``/unpackage/dist/build/mp-baidu`` 生成百度小程序项目代码。
  <div align=center>
    <img src="https://web-assets.dcloud.net.cn/unidoc/zh/uni20190222-7.png"/>
  </div>
3. 在百度小程序开发者工具中，导入生成的百度小程序项目，测试项目代码运行正常后，点击“上传”按钮上传代码，之后在百度小程序的 [管理中心](https://smartprogram.baidu.com/developer/applist.html) 选择创建的应用点击前往发布，选择对应的版本然后提交审核。


#### 发布为支付宝小程序：
4. 入驻支付宝小程序，参考：[支付宝小程序教程](https://docs.alipay.com/mini/introduce)。
5. 在HBuilderX中顶部菜单依次点击 "发行" => "小程序-支付宝"，即可在 ``/unpackage/dist/build/mp-alipay`` 生成支付宝小程序项目代码。
<div align=center>
  <img src="https://web-assets.dcloud.net.cn/unidoc/zh/uni20190222-8.png"/>
</div>
3. 在支付宝小程序开发者工具中，导入生成的支付宝小程序项目，测试项目代码运行正常后，点击“上传”按钮上传代码，在 [支付宝小程序后台](https://open.alipay.com/platform/mini.htm#/app)，选择刚提交的版本点击提交审核，详见：[支付宝小程序文档](https://docs.alipay.com/mini/developer/publish)。


#### 发布为字节跳动小程序：
   1. 入驻字节跳动小程序，参考：[字节跳动小程序教程](https://developer.open-douyin.com/docs/resource/zh-CN/developer/join/register)。
   2. 在HBuilderX中顶部菜单依次点击 "发行" => "小程序-字节跳动"，即可在 ``/unpackage/dist/build/mp-toutiao`` 生成字节跳动小程序项目代码。
     <div align=center>
       <img style="max-width:300px;" src="https://web-assets.dcloud.net.cn/unidoc/zh/zjdance.jpg"/>
     </div>
   3. 在字节跳动小程序开发者工具中，导入生成的字节跳动小程序项目，测试项目代码运行正常后，点击“上传”按钮上传代码，在 [字节跳动小程序后台](https://microapp.bytedance.com/applist)，选择刚提交的版本点击提交审核，详见：[字节跳动小程序文档](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/guide/release/package-audit/)。

#### 发布为360小程序：
   4. 入驻360小程序，参考：[360小程序教程](https://mp.360.cn/doc/miniprogram/dev/#/)。
   5. 在HBuilderX中顶部菜单依次点击 "发行" => "小程序-360"，即可在 ``/unpackage/dist/build/mp-360`` 生成360小程序项目代码。
     <div align=center>
       <img src="https://web-assets.dcloud.net.cn/unidoc/zh/uni-app-release-mp-360.png"/>
     </div>
   6. 在360浏览器中，导入生成的360小程序项目

**注意**
- 目前仅windows平台支持。360浏览器自身不支持mac平台。


#### 发布为快应用(webview)：
  1. 入驻快应用(webview)，参考：[快应用(webview)教程](https://www.quickapp.cn/)。
  2. 在HBuilderX中顶部菜单依次点击 "发行" => "快应用联盟"，即可在 ``/unpackage/dist/build/quickapp-webview`` 生成快应用(webview)项目代码。
    <div align=center>
      <img src="https://web-assets.dcloud.net.cn/unidoc/zh/uni-app-run-release-quickapp-webview.png"/>
    </div>
  3. 在快应用联盟工具中，导入生成的快应用联盟项目，测试项目代码运行正常后，点击”构建“打包正式版，在[快应用联盟后台](https://www.quickapp.cn/)上传


#### 发布为快应用(webview) - 华为：
  4. 入驻华为快应用，参考：[华为快应用教程](https://developer.huawei.com/consumer/cn/quickApp)。
  5. 在HBuilderX中顶部菜单依次点击 "发行" => "快应用-华为"，即可在 ``/unpackage/dist/build/quickapp-webview`` 生成华为快应用项目代码。
    <div align=center>
      <img src="https://web-assets.dcloud.net.cn/unidoc/zh/uni-app-run-release-quickapp-webview-huawei.png"/>
    </div>
  6. 在华为开发者工具中，导入生成的华为快应用项目，测试项目代码运行正常后，点击”构建“打包正式版，在[华为快应用后台](https://developer.huawei.com/consumer/cn/quickApp)上传。


#### 发布为QQ、快手、飞书、京东小程序：
内容同上，不再重复。

发布的快捷键是`Ctrl+u`。同样可拉下快速发布菜单并按数字键选择。

