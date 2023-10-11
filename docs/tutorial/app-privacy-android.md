> HBuilderX2.6.3+版本开始支持配置隐私政策提示框  
> HBuilderX 2.6.3+ version starts to support configuring privacy policy prompt box
> HBuilderX3.1.10+版本优化template模式策略，解决应用市场检测到弹出隐私政策提示框之前读取mac地址和应用列表的问题  
> HBuilderX3.1.10+ version optimizes the template mode strategy to solve the problem of reading the mac address and application list before the application market detects the pop-up privacy policy prompt box
> HBuilderX3.2.1+版本开始支持androidPrivacy.json文件配置隐私政策提示框，真机运行时也可生效  
> HBuilderX3.2.1+ version starts to support the androidPrivacy.json file to configure the privacy policy prompt box, which can also take effect when the real machine is running
> HBuilderX3.2.5+版本隐私政策提示框内容中的链接支持本地 html 页面地址  
> The link in the content of the privacy policy prompt box of HBuilderX3.2.5+ version supports local html page address
> `注意：目前设置custom模式策略，并不能完全避免在弹出隐私提示框之前，读取设备信息（如mac地址、应用列表等）的情况，主要原因是自定义模式隐私提示框并不能阻塞应用的生命周期，使用到一些三方SDK（如X5 Webview内核、UniPush等）在应用启动时会执行初始化操作，三方SDK这是可能会读取设备信息。碰到此问题的开发者请先使用template模式解决，我们后续会提供新的自定义隐私提示框样式解决方案。`  
> `Note: At present, setting the custom mode policy cannot completely avoid the situation of reading device information (such as mac address, application list, etc.) before the privacy prompt box pops up. The main reason is that the custom mode privacy prompt box cannot block the application. The life cycle of some third-party SDKs (such as X5 Webview kernel, UniPush, etc.) will perform initialization operations when the application starts, and the third-party SDKs may read device information. Developers who encounter this problem, please use the template mode to solve it, and we will provide a new custom privacy prompt box style solution in the future. `

**请使用HBuilderX`3.2.15`+ 版本打包，并使用template配置隐私弹窗否则无法正常上架应用市场**  
**Please use the HBuilderX`3.2.15`+ version to package, and use the template to configure the privacy pop-up window, otherwise the app market will not be available normally**
**uni小程序SDK暂时不支持uniapp自己配置隐私弹窗，需要宿主自行实现隐私弹窗**  
**The uni applet SDK temporarily does not support uniapp to configure its own privacy pop-up window, the host needs to implement its own privacy pop-up window**

DCloud联合业内主流隐私合规检测厂商推出了`uni合规检测服务`，可在线申请获取详细检测报告，详见：[uni合规检测服务](/uni-app-privacy-detect.md)

### 概述  
### Overview

根据工业和信息化部关于开展APP侵害用户权益专项整治要求，App提交到应用市场必须满足以下条件：
According to the Ministry of Industry and Information Technology's special rectification requirements for APPs that infringe on user rights and interests, applications submitted to the application market must meet the following conditions:
- 应用启动运行时需弹出隐私政策协议，说明应用采集用户数据  
- When the app starts and runs, a privacy policy agreement should pop up, indicating that the app collects user data
  这里将详细介绍如何配置弹出“隐私协议和政策”提示框  
  Here we will introduce in detail how to configure the pop-up "Privacy Agreement and Policy" prompt box
- 应用不能强制要求用户授予权限，即不能“不给权限不让用”  
- Apps cannot force users to grant permissions, i.e. they cannot "don't give permissions, don't let them use them"
  如不希望应用启动时申请“读写手机存储”和“访问设备信息”权限，请参考：[https://ask.dcloud.net.cn/article/36549](https://ask.dcloud.net.cn/article/36549)  
  If you do not want to apply for "read and write mobile phone storage" and "access device information" permissions when the app starts, please refer to: [https://ask.dcloud.net.cn/article/36549](https://ask.dcloud. net.cn/article/36549)

为了兼顾隐私政策提示框的易用性和灵活性，解决弹出隐私政策提示框之前可能弹出系统授权框的问题。Android平台提供了以下隐私政策提示配置策略：
In order to take into account the ease of use and flexibility of the privacy policy prompt box, solve the problem that the system authorization box may pop up before the privacy policy prompt box pops up. The Android platform provides the following privacy policy tips to configure policies:
- template  
  使用原生提供的隐私政策模板提示框，应用启动时在splash界面弹出。  
  Use the natively provided privacy policy template prompt box, which pops up on the splash interface when the application starts.
  + 优点：在系统授权提示框之前显示，用户点击确认后才会进入应用  
  + Advantages: It is displayed before the system authorization prompt box, and the user will not enter the application until the user clicks to confirm
  + 缺点：只能配置提示文本及链接地址，无法自定义提示框样式  
  + Disadvantage: Only the prompt text and link address can be configured, and the style of the prompt box cannot be customized
- none  
  不处理隐私政策  
  Do Not Process Privacy Policy
  不提交到应用市场时使用  
  Used when not submitting to the app market


<a id='collect'></a>

### DCloud数据采集说明  
### DCloud Data Collection Instructions
为了持续优化应用及提供统计报表功能，在运行过程中会采集应用启动时间、异常错误日志等数据，其中包含设备唯一识别码。  
In order to continuously optimize the application and provide statistical report functions, data such as application startup time and abnormal error logs will be collected during operation, including the unique identification code of the device.
> DCloud通过了国家信息安全等级保护三级，证书编号：11010813802-20001，保障相关数据的安全性  
> DCloud has passed the third level of national information security protection, certificate number: 11010813802-20001, to ensure the security of related data
> DCloud并非大数据公司，采集的数据是为开发者提供统计服务和产品持续优化，不包含个人隐私信息  
> DCloud is not a big data company, the data collected is to provide developers with statistical services and continuous product optimization, and does not contain personal privacy information

**请在《隐私政策》中必告知用户您的应用基于DCloud uni-app(5+ App/Wap2App)开发，增加如下参考条款**
**Please inform users in the "Privacy Policy" that your app is developed based on DCloud uni-app (5+ App/Wap2App), and add the following reference terms**

`我们的产品基于DCloud uni-app(5+ App/Wap2App)开发，应用运行期间需要收集您的设备唯一识别码（IMEI/android ID/DEVICE_ID/IDFA、SIM 卡 IMSI 信息、OAID）以提供统计分析服务，并通过应用启动数据及异常错误日志分析改进性能和用户体验，为用户提供更好的服务。详情内容请访问《DCloud用户服务条款》。（DCloud用户服务条款超链至：https://ask.dcloud.net.cn/protocol.html）`
`Our product is developed based on DCloud uni-app (5+ App/Wap2App), during the running of the application, you need to collect your device unique identification code (IMEI/android ID/DEVICE_ID/IDFA, SIM card IMSI information, OAID) to provide statistical analysis Service, and improve performance and user experience through application startup data and exception error log analysis, to provide users with better services. For details, please visit "DCloud User Terms of Service". (DCloud user terms of service hyperlink to: https://ask.dcloud.net.cn/protocol.html)`


### 配置方式  
### Configuration method

#### HBuilderX3.2.1及以上版本配置方式  
#### HBuilderX3.2.1 and above version configuration
从HBuilderX3.2.1+版本开始新增androidPrivacy.json文件配置隐私政策提示框，支持真机运行查看效果，在androidPrivacy.json中也支持配置部分样式（如背景颜色、标题颜色、按钮颜色等）。
Starting from HBuilderX3.2.1+, the androidPrivacy.json file has been added to configure the privacy policy prompt box, which supports real machine running and viewing effects, and also supports configuring some styles (such as background color, title color, button color, etc.) in androidPrivacy.json.
打开项目的manifest.json文件，切换到“App启动界面配置”，在“Android启动界面样式”中勾选“使用原生隐私政策提示框”
![](https://native-res.dcloud.net.cn/images/uniapp/privacy/manifest-android.png)

**注意！androidPrivacy.json不要添加注释，会影响隐私政策提示框的显示！！！**
**Notice! Do not add comments to androidPrivacy.json, it will affect the display of the privacy policy prompt box! ! ! **

勾选后会在项目中自动添加androidPrivacy.json文件，可以双击打开自定义配置以下内容：
After checking, the androidPrivacy.json file will be automatically added to the project. You can double-click to open the custom configuration as follows:
```json
{
  "version": "1",  
  "prompt": "template",
  "title": "服务协议和隐私政策",
  "message": "　　请你务必审慎阅读、充分理解“服务协议”和“隐私政策”各条款，包括但不限于：为了更好的向你提供服务，我们需要收集你的设备标识、操作日志等信息用于分析、优化应用性能。<br/>　　你可阅读<a href=\"\">《服务协议》</a>和<a href=\"\">《隐私政策》</a>了解详细信息。如果你同意，请点击下面按钮开始接受我们的服务。",
  "buttonAccept": "同意并接受",
  "buttonRefuse": "暂不同意",
  "hrefLoader": "system|default",
  "backToExit":"false",
  "second": {
    "title": "确认提示",
    "message": "　　进入应用前，你需先同意<a href=\"\">《服务协议》</a>和<a href=\"\">《隐私政策》</a>，否则将退出应用。",
    "buttonAccept": "同意并继续",
    "buttonRefuse": "退出应用"
  },
  "disagreeMode":{
    "support": false,
    "loadNativePlugins": false,
    "visitorEntry": true,
    "showAlways": false 
  },
  "styles": {
    "backgroundColor": "#00FF00",
    "borderRadius":"5px",
    "title": {
      "color": "#ff00ff"
    },
    "buttonAccept": {
      "color": "#ffff00"
    },
    "buttonRefuse": {
      "color": "#00ffff"
    },
    "buttonVisitor": {
      "color": "#00ffff"
    }
  }
}
```
- version  
  隐私政策版本号，如果应用升级后希望重新弹出隐私政策提示框，则需要设置新版本  
  The version number of the privacy policy. If you want to pop up the privacy policy prompt box again after the app is upgraded, you need to set a new version
- prompt  
  是否使用原生隐私政策提示框，值为“template”表示使用，“none”表示不使用  
  Whether to use the native privacy policy prompt box, the value is "template" to use, "none" to not use
- title  
  隐私政策提示框标题文本内容  
  Privacy Policy Toolbox Title Text Content
- message  
  隐私政策提示框正文内容，支持富文本richtext类型字符串，支持a/font/br等节点，点击a链接会调用内置页面打开其href属性中链接地址。  
  The text content of the privacy policy prompt box supports rich text type strings and nodes such as a/font/br. Clicking the a link will call the built-in page to open the link address in its href attribute.
  **注意：务必配置此提示内容，参考上面示例内容并修改《服务协议》和《隐私政策》链接地址**  
  **Note: Be sure to configure this prompt content, refer to the above example content and modify the "Service Agreement" and "Privacy Policy" link address**
- buttonAccept  
  模板提示框上接受按钮的文本，默认值为“同意”  
  The text of the accept button on the template tooltip, the default value is "Agree"
- buttonRefuse  
  模板提示框上拒绝按钮的文本，默认不显示此按钮  
  The text of the reject button on the template tooltip, this button is not displayed by default
- hrefLoader  HX 3.4.13之后版本新增，system 使用系统webview 打开隐私协议链接，默认使用uni-app内置web组件
- hrefLoader HX 3.4.13 and later added, system uses the system webview to open the privacy protocol link, the default uses the uni-app built-in web component
  隐私政策提示框中的链接地址加载方式，可取值：system-表示使用系统浏览器打开；default-表示使用应用内置webview页面打开。默认值为default。  
  The link address loading method in the privacy policy prompt box. Possible values: system- means to use the system browser to open; default- means to use the built-in webview page of the application to open. The default value is default.
  **注意：可能有些检测机构认为webview会读取隐私信息，这时可以配置为system来解决此问题**  
  **Note: Some detection agencies may think that webview will read private information, and then it can be configured as system to solve this problem**
- backToExit  HX 3.6.20之后版本新增。用来设置弹出隐私弹窗时，用户点击系统回退按钮 是否能退出应用。默认为false 不退出。部分应用市场不接受此行为，则开发者可以设置为true，允许用户点击回退按钮时，退出应用。
- disagreeMode 
  用户不同意隐私协议的响应配置 **具体配置及说明查看**[https://uniapp.dcloud.io/app-disagreemode](https://uniapp.dcloud.io/app-disagreemode)  
  The user does not agree to the response configuration of the privacy agreement. **See the specific configuration and instructions**[https://uniapp.dcloud.io/app-disagreemode](https://uniapp.dcloud.io/app-disagreemode)
  + support 用户拒绝隐私协议后，是否直接进入游客模式，默认false关闭 
  + support After the user rejects the privacy agreement, whether to directly enter the tourist mode, the default is false to close
  + loadNativePlugins 表示在disagreeMode模式是否加载uni原生插件，true表示加载；false表示不加载（此时调用uni.requireNativePlugin加载插件扩展Module返回undefined，扩展组件Component也无法使用）。默认值为true。  
  + loadNativePlugins indicates whether to load uni native plug-ins in disagreeMode mode, true means loading; false means not loading (at this time, calling uni.requireNativePlugin to load the plug-in extension Module returns undefined, and the extension component Component cannot be used). The default value is true.
  + visitorEntry HBuilderX 3.6.7 版本后支持，默认false,当设置为true，隐私协议弹窗 会出现 游客模式 按钮
  + visitorEntry Supported after HBuilderX version 3.6.7, the default is false, when set to true, the privacy agreement pop-up window will appear the visitor mode button
  + showAlways HBuilderX 3.6.10 版本后支持，默认false 标记用户拒绝协议后，下次启动是否继续弹出，默认false,拒绝后不弹出
  + showAlways Supported after HBuilderX version 3.6.10, the default is false to mark whether the user will continue to pop up after the user rejects the agreement, the default is false, no pop-up after rejection
- second  
  配置二次确认提示框显示内容，message属性值不为空时弹出二次确认提示框  
  Configure the display content of the second confirmation prompt box. When the value of the message attribute is not empty, a second confirmation prompt box will pop up.
  + title 二次确认提示框上的标题  
  + title The title on the second confirmation prompt
  + message 二次确认提示框上的内容，支持富文本richtext类型字符串  
  + message The content on the second confirmation prompt box, supports rich text richtext type strings
  + buttonAccept 二次确认提示框上接受按钮的文本  
  + buttonAccept the text of the accept button on the second confirmation prompt box
  + buttonRefuse 二次确认提示框上拒绝按钮的文本  
  + buttonRefuse the text of the reject button on the secondary confirmation prompt
- styles  
  配置隐私政策提示框样式  
  Configure Privacy Policy Tooltip Style
  + backgroundColor 提示框背景颜色，#RRGGBB格式字符串  
  + backgroundColor prompt box background color, #RRGGBB format string
  + borderRadius 提示框背景圆角半径，单位为px（逻辑像素）  
  + borderRadius The radius of the background corners of the prompt box, in px (logical pixels)
  + title 提示框标题样式，其下仅支持color属性配置文本颜色，值为#RRGGBB格式字符串  
  + title The title style of the prompt box, under which only the color attribute is supported to configure the text color, the value is #RRGGBB format string
  + buttonAccept 接受按钮样式，其下仅支持color属性配置文本颜色，值为#RRGGBB格式字符串  
  + buttonAccept accepts the button style, under which only the color attribute is supported to configure the text color, the value is the #RRGGBB format string
  + buttonRefuse 拒绝按钮样式，其下仅支持color属性配置文本颜色，值为#RRGGBB格式字符串  
  + buttonRefuse rejects the button style, it only supports the color attribute to configure the text color, and the value is the #RRGGBB format string
  + buttonVisitor HX 3.6.7 版本后支持，游客模式按钮样式，其下仅支持color属性配置文本颜色，值为#RRGGBB格式字符串  
  + buttonVisitor is supported after version 3.6.7 of HX, the button style of visitor mode, under which only the color attribute is supported to configure the text color, and the value is the format string of #RRGGBB

uni-app项目可以使用uni原生插件能支持更多自定义隐私政策提示框样式，可参考：[https://ext.dcloud.net.cn/plugin?id=5581](https://ext.dcloud.net.cn/plugin?id=5581)  
The uni-app project can use the uni native plugin to support more custom privacy policy prompt box styles, please refer to: [https://ext.dcloud.net.cn/plugin?id=5581](https://ext. dcloud.net.cn/plugin?id=5581)

#### HBuilderX3.2.0及以下版本配置方法  
#### HBuilderX3.2.0 and below configuration method
打开项目的manifest.json文件，切换到“源码视图”项  
Open the manifest.json file of the project and switch to the "Source View" item
- uni-app项目  
- uni-app project
  在 "app-plus" -> "privacy" 节点下添加 prompt节点  
  Add prompt node under "app-plus" -> "privacy" node
- 5+ App项目  
- 5+ App items
  在 "plus" -> "privacy" 节点下添加 prompt节点  
  Add prompt node under "plus" -> "privacy" node

privacy节点数据格式如下：  
The privacy node data format is as follows:
```
    "privacy": {
      "prompt": "template",  //可取值template、none
      "template": { //prompt取值为template时有效，用于配置模板提示框上显示的内容
      }
    }
```
- prompt  
  字符串类型，必填，隐私政策提示框配置策略，可取值template，none，默认值为none  
  + template  
    使用原生提示框模板，可自定义标题、内容已经按钮上的文本  
    Use the native tooltip template to customize the title, content, and text on the button
  + none
    不弹出隐私政策提示框  
    Do not pop up the privacy policy prompt
- template  
 json格式，可选，模板提示框上显示的内容  
 json format, optional, the content displayed on the template prompt box

#### 模板提示框  
#### Template tooltip
配置promt属性值为template时，表示使用原生模板隐私政策提示框，效果如下：  
![](https://native-res.dcloud.net.cn/images/uniapp/privacy/template-android.png)

**应用启动前，在Splash页面时显示此提示框，用户点击同意按钮后才会进入应用**
**This prompt box will be displayed on the Splash page before the application starts, and the user will only enter the application after clicking the agree button**

可使用以下配置模板提示框内容
You can use the following configuration template prompt box content
```
    "privacy": {
      "prompt": "template",
      "template": {
        "title": "服务协议和隐私政策",
        "message": "　　请你务必审慎阅读、充分理解“服务协议”和“隐私政策”各条款，包括但不限于：为了更好的向你提供服务，我们需要收集你的设备标识、操作日志等信息用于分析、优化应用性能。<br/>　　你可阅读<a href=\"\">《服务协议》</a>和<a href=\"\">《隐私政策》</a>了解详细信息。如果你同意，请点击下面按钮开始接受我们的服务。",
        "buttonAccept": "同意",
        "buttonRefuse": "暂不同意",
        "second": {
          "title": "温馨提示",
          "message": "　　进入应用前，你需先同意<a href=\"\">《服务协议》</a>和<a href=\"\">《隐私政策》</a>，否则将退出应用。",
          "buttonAccept": "同意并继续",
          "buttonRefuse": "退出应用",
        } 
      }
    }
```
- title
  模板提示框上的标题，默认为“服务协议和隐私政策”
  The title on the template tooltip, the default is "Service Agreement and Privacy Policy"
- message
  模板提示框上的内容，richtext类型字符串，支持a/font/br等节点，点击a链接会调用内置页面打开其href属性中链接地址。
  The content on the template prompt box, the richtext type string, supports nodes such as a/font/br, and clicking the a link will call the built-in page to open the link address in its href attribute.
  + HBuilderX3.2.5以下版本a链接的href属性仅支持网络地址，以http:或https:开头，如“https://www.dcloud.io/privacy.html”
  + HBuilderX3.2.5 and below the href attribute of a link only supports network addresses, starting with http: or https:, such as "https://www.dcloud.io/privacy.html"
  + HBuilder3.2.5及以上版本a链接的href属性支持本地地址，相对于应用根目录，如“static/privacy.html”
  + The href attribute of HBuilder3.2.5 and above a link supports local address, relative to the application root directory, such as "static/privacy.html"
  **注意：务必配置此提示内容，参考上面示例内容并修改《服务协议》和《隐私政策》链接地址**
  **Note: Be sure to configure this prompt content, refer to the above example content and modify the "Service Agreement" and "Privacy Policy" link address**
- buttonAccept
  模板提示框上接受按钮的文本，默认值为“同意”，
  The text of the accept button on the template tooltip, the default value is "Agree",
  **注意：接受按钮设置为“我知道了”在部分应用市场上架时会审核不通过。**
  **Note: The accept button is set to "I get it" and it will fail the review when it is listed in some app markets. **
- buttonRefuse
  模板提示框上拒绝按钮的文本，默认不显示此按钮
  The text of the reject button on the template tooltip, this button is not displayed by default
- second
  HBuilderX3.1.12+版本新增支持隐私提示框二次确认提示，用于配置二次确认提示框显示内容，message属性值不为空时弹出二次确认提示框
  HBuilderX3.1.12+ version newly supports the second confirmation prompt of the privacy prompt box, which is used to configure the display content of the second confirmation prompt box. When the message attribute value is not empty, the second confirmation prompt box will pop up
 + title 二次确认提示框上的标题
 + title The title on the second confirmation prompt
 + message 二次确认提示框上的内容，支持richtext类型字符串
 + message The content on the second confirmation prompt box, supports richtext type strings
 + buttonAccept 二次确认提示框上接受按钮的文本
 + buttonAccept the text of the accept button on the second confirmation prompt box
 + buttonRefuse 二次确认提示框上拒绝按钮的文本
 + buttonRefuse the text of the reject button on the secondary confirmation prompt

**配置后提交云端打包后生效**
**Submit cloud package after configuration to take effect**

提供5+ API设置/获取状态：
Provides 5+ APIs to set/get status:
- 获取是否同意隐私政策
- Get consent to privacy policy
  参考规范：[plus.runtime.isAgreePrivacy](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.isAgreePrivacy)
  Reference specification: [plus.runtime.isAgreePrivacy](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.isAgreePrivacy)
  应用启动时调用此API查下状态，如果用户未同意则弹出自定义隐私政策提示框。
  When the application starts, this API is called to check the status, and if the user does not agree, a custom privacy policy prompt box will pop up.
```
  if(!plus.runtime.isAgreePrivacy()){
    //弹出自定义隐私政策提示框
    //Pop up a custom privacy policy prompt box
  }
```
- 设置为同意隐私政策
- Set to agree to the privacy policy
  参考规范：[plus.runtime.agreePrivacy](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.agreePrivacy)
  Reference Specification: [plus.runtime.agreePrivacy](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.agreePrivacy)
  在自定义隐私政策提示界面用，用户点击“同意”按钮时需调用此API设置状态
  It is used in the custom privacy policy prompt interface. When the user clicks the "Agree" button, this API needs to be called to set the status
- 设置为不同意隐私政策
- Set to disagree with privacy policy
  参考规范：[plus.runtime.disagreePrivacy](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.disagreePrivacy)
  Reference: [plus.runtime.disagreePrivacy](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.disagreePrivacy)
  在自定义隐私政策提示界面用，用户点击“不同意”按钮时需调用此API设置状态
  It is used in the custom privacy policy prompt interface. When the user clicks the "Disagree" button, this API needs to be called to set the status.

**注意：用户同意隐私政策前不要调用可能弹出系统授权框的API，如定位（plus.geolocation）、录音（plus.audio.getRecorder）等**
**Note: Before users agree to the privacy policy, do not call APIs that may pop up the system authorization box, such as location (plus.geolocation), recording (plus.audio.getRecorder), etc.**

#### 无提示框
#### No tooltip
配置prompt属性值为none时，表示不显示隐私政策提示框。
When the value of the prompt attribute is set to none, it means that the privacy policy prompt box is not displayed.
如果不提交到应用市场，可以使用此模式。
This mode can be used if not submitting to the app market.


### 离线打包配置方式
### Offline packaging configuration method

**HBuilderX3.2.1+版本新增androidPrivacy.json配置隐私政策提示框，优先级高于原生环境配置，HBuilderX3.2.1+版本建议使用androidPrivacy.json 替代本章节的离线打包配置**
**HBuilderX3.2.1+ version adds androidPrivacy.json configuration privacy policy prompt box, the priority is higher than native environment configuration, HBuilderX3.2.1+ version recommends using androidPrivacy.json to replace the offline packaging configuration in this chapter**

----------------------


在原生工程中应用的AndroidManifest.xml中配置隐私提供框模式，在application节点下添加meta-data节点数据，如下：
Configure the privacy provider mode in the AndroidManifest.xml applied in the native project, and add the meta-data node data under the application node, as follows:
```xml
<application>
<meta-data
            android:name="DCLOUD_PRIVACY_PROMPT"  android:value="template"/>
</application>
```
android:value可取值为"template"、"none"。
android:value can be "template", "none".

** 配置使用"template"模板提示框时，需要按以下方法配置提示框内容**
** When configuring the prompt box using the "template" template, you need to configure the prompt box content as follows**
`在原生工程的res/values目录下的strings.xml配置默认语言内容（为了兼容用户设置不同语言的清空，此文件必须配置）。中文还需要创建res/values-zh目录下的strings.xml文件并配置中文内容。`
`Configure the default language content in strings.xml in the res/values directory of the native project (this file must be configured in order to be compatible with user settings for clearing different languages). Chinese also needs to create the strings.xml file in the res/values-zh directory and configure the Chinese content. `

### 模板提示框
### Template tooltip
请在原生工程的strings.xml中添加以下字段配置模板提示框内容。
Please add the following fields to the strings.xml of the native project to configure the content of the template prompt box.
```xml
<resources>
    <string name="dcloud_privacy_prompt_title">弹窗标题</string>
    <string name="dcloud_privacy_prompt_accept_button_text">接收按钮文字配置字段（不存在该字段，即使用默认内容“同意”）</string>
    <string name="dcloud_privacy_prompt_refuse_button_text">拒绝按钮文字配置字段（没有该字段或该字段内容为空，拒绝按钮不显示）</string>
    <string name="dcloud_privacy_prompt_message"><Data><![CDATA[弹窗内容，如果内容中有富文本，请将内容放入cdata下，如当前配置]]></Data></string>
</resources>
```

### 二次确认提示框
### Secondary confirmation prompt box
HBuilderX3.1.12+版本新增支持模板隐私提示框二次确认功能，点击隐私模板提示框时用户选择“拒绝”按钮并且二次确认提示框内容dcloud_second_privacy_prompt_message配置不为空时会弹出二次确认提示框。
HBuilderX 3.1.12+ version adds support for the second confirmation function of the template privacy prompt box. When the user selects the "Reject" button when clicking the privacy template prompt box, and the dcloud_second_privacy_prompt_message configuration of the second confirmation prompt box is not empty, a second confirmation prompt box will pop up.

请在原生工程的strings.xml中添加以下字段配置二次确认提示框内容。
Please add the following fields to the strings.xml of the native project to configure the content of the secondary confirmation prompt box.
```xml
    <string name="dcloud_second_privacy_prompt_title">二级弹窗标题</string>
    <string name="dcloud_second_privacy_prompt_accept_button_text">接收按钮文字配置字段（不存在该字段，即使用默认内容“确定”）</string>
    <string name="dcloud_second_privacy_prompt_message"><![CDATA[协议内容]]></string>
    <string name="dcloud_second_privacy_prompt_refuse_button_text">拒绝按钮文字配置字段（没有该字段或该字段内容为空，拒绝按钮不显示）</string>
```

### 国际化
### globalization

> HBuilderX3.2.12+版本androidPrivacy.json支持国际化
> HBuilderX3.2.12+ version androidPrivacy.json supports internationalization

- uni-app项目  
- uni-app project
  可参考page.json文件国际化方式处理，详见：[uni-app项目 pages.json 国际化](https://uniapp.dcloud.io/tutorial/i18n.html#nvue)  
  You can refer to the page.json file internationalization method, see: [uni-app project pages.json internationalization](https://uniapp.dcloud.io/tutorial/i18n.html#nvue)
- 5+ App项目  
- 5+ App items
  不支持uni-app形式的国际化配置，可以对androidPrivacy.json文件中需要国际化处理的字段添加Locales，示例如下：
  The internationalization configuration in the form of uni-app is not supported. You can add Locales to the fields that need internationalization in the androidPrivacy.json file. The example is as follows:
```
{
    "prompt": "template",
    "buttonAccept" : "默认接受按钮文本"
}
```
添加buttonAcceptLocales处理buttonAccept的国际化文本，如下
Add buttonAcceptLocales to handle the internationalized text of buttonAccept, as follows
```
{
    "prompt": "template",
    "buttonAccept" : "默认接受按钮文本",
    "buttonAcceptLocales": {
        "en": "英文接受按钮文本",
        "zh-Hans":"中文简体接受按钮文本",
        "zh-Hant": "中文繁体接受按钮文本"
    }
}
```

### 隐私协议内容需要注意的问题  
### Matters needing attention in the content of the privacy agreement

需要在《隐私政策》中必告知用户您的应用基于DCloud uni-app(5+ App/Wap2App)开发，添加如下参考条款：
It is necessary to inform users in the "Privacy Policy" that your app is developed based on DCloud uni-app (5+ App/Wap2App), and add the following reference terms:

`我们的产品基于DCloud uni-app(5+ App/Wap2App)开发，应用运行期间需要收集您的设备唯一识别码（IMEI/android ID/DEVICE_ID/IDFA、SIM 卡 IMSI 信息、OAID）以提供统计分析服务，并通过应用启动数据及异常错误日志分析改进性能和用户体验，为用户提供更好的服务。`
`Our product is developed based on DCloud uni-app (5+ App/Wap2App), during the running of the application, you need to collect your device unique identification code (IMEI/android ID/DEVICE_ID/IDFA, SIM card IMSI information, OAID) to provide statistical analysis Service, and improve performance and user experience through application startup data and exception error log analysis, to provide users with better services. `

另外隐私政策中需要补充使用到的三方SDK，参考：
In addition, the third-party SDK used needs to be supplemented in the privacy policy, refer to:

#### uni-app默认集成三方SDK
#### uni-app integrates third-party SDK by default

请参考文档[Android平台各功能模块隐私合规条款](https://ask.dcloud.net.cn/article/39484)
Please refer to the document [Privacy compliance clauses for each functional module of the Android platform](https://ask.dcloud.net.cn/article/39484)

#### uni原生插件
#### uni native plugin

如果应用使用了uni原生插件，需要注意一下几点：
If the application uses the uni native plugin, you need to pay attention to the following points:

+ 使用插件时请查看插件详情页面中的 `隐私、权限声明` 。（插件使用什么sdk？获取了什么用户信息？都应由插件作者提供并填写在 `隐私、权限声明`中）
+ Please check the `Privacy and Permission Statement` in the plugin details page when using the plugin. (What sdk does the plugin use? What user information is obtained? All should be provided by the plugin author and filled in `Privacy, Permission Statement`)
+ 将插件中用到的三方SDK信息添加到用户隐私协议中。例如集成了`百度定位`。就需要在隐私协议中说明集成了百度定位SDK。获取了xxx用户信息!用于xxx.
+ Add the third-party SDK information used in the plugin to the user privacy agreement. For example, `Baidu positioning` is integrated. It is necessary to describe the integration of Baidu positioning SDK in the privacy agreement. Obtained xxx user information! Used for xxx.
+ 如果发现插件有获取用户信息而插件详情页并没有提供`隐私、权限声明`，请与插件开发者或与我们反馈共同督促进行补充。
+ If you find that the plug-in obtains user information but the plug-in details page does not provide a `Privacy and Permission Statement`, please contact the plug-in developer or feedback with us to supervise and supplement.

#### 其它
#### Other

《隐私政策》必须非常清楚、全面地说明（不要用可能收集、了解用户信息这种模糊不清晰的词语）收集用户个人信息的目的、方式和范围。
The "Privacy Policy" must be very clear and comprehensive (do not use vague and unclear words that may collect and understand user information) the purpose, method and scope of collecting users' personal information.
如果应用使用“通讯录”、“短信”等相关功能，请根据应用业务场景进行描述。
If the application uses related functions such as "address book" and "SMS", please describe it according to the application business scenario.


