> HBuilderX2.6.3+版本开始支持配置隐私政策提示框  
> HBuilderX3.1.10+版本优化template模式策略，解决应用市场检测到弹出隐私政策提示框之前读取mac地址和应用列表的问题  
> HBuilderX3.2.1+版本开始支持androidPrivacy.json文件配置隐私政策提示框，真机运行时也可生效  
> HBuilderX3.2.5+版本隐私政策提示框内容中的链接支持本地 html 页面地址  
> `注意：目前设置custom模式策略，并不能完全避免在弹出隐私提示框之前，读取设备信息（如mac地址、应用列表等）的情况，主要原因是自定义模式隐私提示框并不能阻塞应用的生命周期，使用到一些三方SDK（如X5 Webview内核、UniPush等）在应用启动时会执行初始化操作，三方SDK这是可能会读取设备信息。碰到此问题的开发者请先使用template模式解决，我们后续会提供新的自定义隐私提示框样式解决方案。`  

**请使用HBuilderX`3.2.15`+ 版本打包，并使用template配置隐私弹窗否则无法正常上架应用市场**  
**uni小程序SDK暂时不支持uniapp自己配置隐私弹窗，需要宿主自行实现隐私弹窗**  

DCloud联合业内主流隐私合规检测厂商推出了`uni隐私合规检测`服务，可在线申请获取详细检测报告，详见：[uni隐私合规检测](/uni-app-privacy-detect.md)

### 概述  

根据工业和信息化部关于开展APP侵害用户权益专项整治要求，App提交到应用市场必须满足以下条件：
- 应用启动运行时需弹出隐私政策协议，说明应用采集用户数据  
  这里将详细介绍如何配置弹出“隐私协议和政策”提示框  
- 应用不能强制要求用户授予权限，即不能“不给权限不让用”  
  如不希望应用启动时申请“读写手机存储”和“访问设备信息”权限，请参考：[https://ask.dcloud.net.cn/article/36549](https://ask.dcloud.net.cn/article/36549)  

为了兼顾隐私政策提示框的易用性和灵活性，解决弹出隐私政策提示框之前可能弹出系统授权框的问题。Android平台提供了以下隐私政策提示配置策略：
- template  
  使用原生提供的隐私政策模板提示框，应用启动时在splash界面弹出。  
  + 优点：在系统授权提示框之前显示，用户点击确认后才会进入应用  
  + 缺点：只能配置提示文本及链接地址，无法自定义提示框样式  
- none  
  不处理隐私政策  
  不提交到应用市场时使用  


<a id='collect'></a>

### DCloud数据采集说明  
为了持续优化应用及提供统计报表功能，在运行过程中会采集应用启动时间、异常错误日志等数据，其中包含设备唯一识别码。  
> DCloud通过了国家信息安全等级保护三级，证书编号：11010813802-20001，保障相关数据的安全性  
> DCloud并非大数据公司，采集的数据是为开发者提供统计服务和产品持续优化，不包含个人隐私信息  

**请在《隐私政策》中必告知用户您的应用基于DCloud uni-app(5+ App/Wap2App)开发，增加如下参考条款**

`我们的产品基于DCloud uni-app(5+ App/Wap2App)开发，应用运行期间需要收集您的设备唯一识别码（IMEI/android ID/DEVICE_ID/IDFA、SIM 卡 IMSI 信息、OAID）以提供统计分析服务，并通过应用启动数据及异常错误日志分析改进性能和用户体验，为用户提供更好的服务。详情内容请访问《DCloud用户服务条款》。（DCloud用户服务条款超链至：https://ask.dcloud.net.cn/protocol.html）`


### 配置方式  

#### HBuilderX3.2.1及以上版本配置方式  
从HBuilderX3.2.1+版本开始新增androidPrivacy.json文件配置隐私政策提示框，支持真机运行查看效果，在androidPrivacy.json中也支持配置部分样式（如背景颜色、标题颜色、按钮颜色等）。
打开项目的manifest.json文件，切换到“App启动界面配置”，在“Android启动界面样式”中勾选“使用原生隐私政策提示框”
![](https://native-res.dcloud.net.cn/images/uniapp/privacy/manifest-android.png)

**注意！androidPrivacy.json不要添加注释，会影响隐私政策提示框的显示！！！**

勾选后会在项目中自动添加androidPrivacy.json文件，可以双击打开自定义配置以下内容：
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
- prompt  
  是否使用原生隐私政策提示框，值为“template”表示使用，“none”表示不使用  
- title  
  隐私政策提示框标题文本内容  
- message  
  隐私政策提示框正文内容，支持富文本richtext类型字符串，支持a/font/br等节点，点击a链接会调用内置页面打开其href属性中链接地址。  
  **注意：务必配置此提示内容，参考上面示例内容并修改《服务协议》和《隐私政策》链接地址**  
- buttonAccept  
  模板提示框上接受按钮的文本，默认值为“同意”  
- buttonRefuse  
  模板提示框上拒绝按钮的文本，默认不显示此按钮  
- hrefLoader  HX 3.4.13之后版本新增，system 使用系统webview 打开隐私协议链接，默认使用uni-app内置web组件
  隐私政策提示框中的链接地址加载方式，可取值：system-表示使用系统浏览器打开；default-表示使用应用内置webview页面打开。默认值为default。  
  **注意：可能有些检测机构认为webview会读取隐私信息，这时可以配置为system来解决此问题**  
- backToExit  HX 3.6.20之后版本新增。用来设置弹出隐私弹窗时，用户点击系统回退按钮 是否能退出应用。默认为false 不退出。部分应用市场不接受此行为，则开发者可以设置为true，允许用户点击回退按钮时，退出应用。
- disagreeMode 
  用户不同意隐私协议的响应配置 **具体配置及说明查看**[https://uniapp.dcloud.io/app-disagreemode](https://uniapp.dcloud.io/app-disagreemode)  
  + support 用户拒绝隐私协议后，是否直接进入游客模式，默认false关闭 
  + loadNativePlugins 表示在disagreeMode模式是否加载uni原生插件，true表示加载；false表示不加载（此时调用uni.requireNativePlugin加载插件扩展Module返回undefined，扩展组件Component也无法使用）。默认值为true。  
  + visitorEntry HBuilderX 3.6.7 版本后支持，默认false,当设置为true，隐私协议弹窗 会出现 游客模式 按钮
  + showAlways HBuilderX 3.6.10 版本后支持，默认false 标记用户拒绝协议后，下次启动是否继续弹出，默认false,拒绝后不弹出
- second  
  配置二次确认提示框显示内容，message属性值不为空时弹出二次确认提示框  
  + title 二次确认提示框上的标题  
  + message 二次确认提示框上的内容，支持富文本richtext类型字符串  
  + buttonAccept 二次确认提示框上接受按钮的文本  
  + buttonRefuse 二次确认提示框上拒绝按钮的文本  
- styles  
  配置隐私政策提示框样式  
  + backgroundColor 提示框背景颜色，#RRGGBB格式字符串  
  + borderRadius 提示框背景圆角半径，单位为px（逻辑像素）  
  + title 提示框标题样式，其下仅支持color属性配置文本颜色，值为#RRGGBB格式字符串  
  + buttonAccept 接受按钮样式，其下仅支持color属性配置文本颜色，值为#RRGGBB格式字符串  
  + buttonRefuse 拒绝按钮样式，其下仅支持color属性配置文本颜色，值为#RRGGBB格式字符串  
  + buttonVisitor HX 3.6.7 版本后支持，游客模式按钮样式，其下仅支持color属性配置文本颜色，值为#RRGGBB格式字符串  

uni-app项目可以使用uni原生插件能支持更多自定义隐私政策提示框样式，可参考：[https://ext.dcloud.net.cn/plugin?id=5581](https://ext.dcloud.net.cn/plugin?id=5581)  

#### HBuilderX3.2.0及以下版本配置方法  
打开项目的manifest.json文件，切换到“源码视图”项  
- uni-app项目  
  在 "app-plus" -> "privacy" 节点下添加 prompt节点  
- 5+ App项目  
  在 "plus" -> "privacy" 节点下添加 prompt节点  

privacy节点数据格式如下：  
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
  + none
    不弹出隐私政策提示框  
- template  
 json格式，可选，模板提示框上显示的内容  

#### 模板提示框  
配置promt属性值为template时，表示使用原生模板隐私政策提示框，效果如下：  
![](https://native-res.dcloud.net.cn/images/uniapp/privacy/template-android.png)

**应用启动前，在Splash页面时显示此提示框，用户点击同意按钮后才会进入应用**

可使用以下配置模板提示框内容
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
- message
  模板提示框上的内容，richtext类型字符串，支持a/font/br等节点，点击a链接会调用内置页面打开其href属性中链接地址。
  + HBuilderX3.2.5以下版本a链接的href属性仅支持网络地址，以http:或https:开头，如“https://www.dcloud.io/privacy.html”
  + HBuilder3.2.5及以上版本a链接的href属性支持本地地址，相对于应用根目录，如“static/privacy.html”
  **注意：务必配置此提示内容，参考上面示例内容并修改《服务协议》和《隐私政策》链接地址**
- buttonAccept
  模板提示框上接受按钮的文本，默认值为“同意”，
  **注意：接受按钮设置为“我知道了”在部分应用市场上架时会审核不通过。**
- buttonRefuse
  模板提示框上拒绝按钮的文本，默认不显示此按钮
- second
  HBuilderX3.1.12+版本新增支持隐私提示框二次确认提示，用于配置二次确认提示框显示内容，message属性值不为空时弹出二次确认提示框
 + title 二次确认提示框上的标题
 + message 二次确认提示框上的内容，支持richtext类型字符串
 + buttonAccept 二次确认提示框上接受按钮的文本
 + buttonRefuse 二次确认提示框上拒绝按钮的文本

**配置后提交云端打包后生效**

提供5+ API设置/获取状态：
- 获取是否同意隐私政策
  参考规范：[plus.runtime.isAgreePrivacy](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.isAgreePrivacy)
  应用启动时调用此API查下状态，如果用户未同意则弹出自定义隐私政策提示框。
```
  if(!plus.runtime.isAgreePrivacy()){
    //弹出自定义隐私政策提示框
  }
```
- 设置为同意隐私政策
  参考规范：[plus.runtime.agreePrivacy](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.agreePrivacy)
  在自定义隐私政策提示界面用，用户点击“同意”按钮时需调用此API设置状态
- 设置为不同意隐私政策
  参考规范：[plus.runtime.disagreePrivacy](https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.disagreePrivacy)
  在自定义隐私政策提示界面用，用户点击“不同意”按钮时需调用此API设置状态

**注意：用户同意隐私政策前不要调用可能弹出系统授权框的API，如定位（plus.geolocation）、录音（plus.audio.getRecorder）等**

#### 无提示框
配置prompt属性值为none时，表示不显示隐私政策提示框。
如果不提交到应用市场，可以使用此模式。


### 离线打包配置方式

**HBuilderX3.2.1+版本新增androidPrivacy.json配置隐私政策提示框，优先级高于原生环境配置，HBuilderX3.2.1+版本建议使用androidPrivacy.json 替代本章节的离线打包配置**

----------------------


在原生工程中应用的AndroidManifest.xml中配置隐私提供框模式，在application节点下添加meta-data节点数据，如下：
```xml
<application>
<meta-data
            android:name="DCLOUD_PRIVACY_PROMPT"  android:value="template"/>
</application>
```
android:value可取值为"template"、"none"。

** 配置使用"template"模板提示框时，需要按以下方法配置提示框内容**
`在原生工程的res/values目录下的strings.xml配置默认语言内容（为了兼容用户设置不同语言的清空，此文件必须配置）。中文还需要创建res/values-zh目录下的strings.xml文件并配置中文内容。`

### 模板提示框
请在原生工程的strings.xml中添加以下字段配置模板提示框内容。
```xml
<resources>
    <string name="dcloud_privacy_prompt_title">弹窗标题</string>
    <string name="dcloud_privacy_prompt_accept_button_text">接收按钮文字配置字段（不存在该字段，即使用默认内容“同意”）</string>
    <string name="dcloud_privacy_prompt_refuse_button_text">拒绝按钮文字配置字段（没有该字段或该字段内容为空，拒绝按钮不显示）</string>
    <string name="dcloud_privacy_prompt_message"><Data><![CDATA[弹窗内容，如果内容中有富文本，请将内容放入cdata下，如当前配置]]></Data></string>
</resources>
```

### 二次确认提示框
HBuilderX3.1.12+版本新增支持模板隐私提示框二次确认功能，点击隐私模板提示框时用户选择“拒绝”按钮并且二次确认提示框内容dcloud_second_privacy_prompt_message配置不为空时会弹出二次确认提示框。

请在原生工程的strings.xml中添加以下字段配置二次确认提示框内容。
```xml
    <string name="dcloud_second_privacy_prompt_title">二级弹窗标题</string>
    <string name="dcloud_second_privacy_prompt_accept_button_text">接收按钮文字配置字段（不存在该字段，即使用默认内容“确定”）</string>
    <string name="dcloud_second_privacy_prompt_message"><![CDATA[协议内容]]></string>
    <string name="dcloud_second_privacy_prompt_refuse_button_text">拒绝按钮文字配置字段（没有该字段或该字段内容为空，拒绝按钮不显示）</string>
```

### 国际化

> HBuilderX3.2.12+版本androidPrivacy.json支持国际化

- uni-app项目  
  可参考page.json文件国际化方式处理，详见：[uni-app项目 pages.json 国际化](https://uniapp.dcloud.io/tutorial/i18n.html#nvue)  
- 5+ App项目  
  不支持uni-app形式的国际化配置，可以对androidPrivacy.json文件中需要国际化处理的字段添加Locales，示例如下：
```
{
    "prompt": "template",
    "buttonAccept" : "默认接受按钮文本"
}
```
添加buttonAcceptLocales处理buttonAccept的国际化文本，如下
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

需要在《隐私政策》中必告知用户您的应用基于DCloud uni-app(5+ App/Wap2App)开发，添加如下参考条款：

`我们的产品基于DCloud uni-app(5+ App/Wap2App)开发，应用运行期间需要收集您的设备唯一识别码（IMEI/android ID/DEVICE_ID/IDFA、SIM 卡 IMSI 信息、OAID）以提供统计分析服务，并通过应用启动数据及异常错误日志分析改进性能和用户体验，为用户提供更好的服务。`

另外隐私政策中需要补充使用到的三方SDK，参考：

#### uni-app默认集成三方SDK

请参考文档[Android平台各功能模块隐私合规条款](https://ask.dcloud.net.cn/article/39484)

#### uni原生插件

如果应用使用了uni原生插件，需要注意一下几点：

+ 使用插件时请查看插件详情页面中的 `隐私、权限声明` 。（插件使用什么sdk？获取了什么用户信息？都应由插件作者提供并填写在 `隐私、权限声明`中）
+ 将插件中用到的三方SDK信息添加到用户隐私协议中。例如集成了`百度定位`。就需要在隐私协议中说明集成了百度定位SDK。获取了xxx用户信息!用于xxx.
+ 如果发现插件有获取用户信息而插件详情页并没有提供`隐私、权限声明`，请与插件开发者或与我们反馈共同督促进行补充。

#### 其它

《隐私政策》必须非常清楚、全面地说明（不要用可能收集、了解用户信息这种模糊不清晰的词语）收集用户个人信息的目的、方式和范围。
如果应用使用“通讯录”、“短信”等相关功能，请根据应用业务场景进行描述。


