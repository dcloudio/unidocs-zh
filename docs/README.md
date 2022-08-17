---
pageClass: custom-page-class
---

```uni-app``` 是一个使用 [Vue.js](https://vuejs.org/) 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。
```uni-app``` is a framework for developing all front-end applications using [Vue.js](https://vuejs.org/), developers write a set of codes, which can be published to iOS, Android, Web ( Responsive), as well as various small programs (WeChat/Alipay/Baidu/Toutiao/Feishu/QQ/Kuishou/DingTalk/Taobao), Quick Apps and other platforms.

`DCloud`公司拥有900万开发者、数百万应用、12亿手机端月活用户、数千款uni-app插件、70+微信/qq群。阿里小程序工具官方内置uni-app（[详见](https://opendocs.alipay.com/mini/ide/overview)），腾讯课堂官方为uni-app录制培训课程（[详见](https://ask.dcloud.net.cn/article/35640)），开发者可以放心选择。
The `DCloud` company has 9 million developers, millions of applications, 1.2 billion mobile monthly active users, thousands of uni-app plug-ins, and 70+ WeChat/QQ groups. The official Alipay tool has built-in uni-app ([see](https://opendocs.alipay.com/mini/ide/overview)), and Tencent Classroom officially recorded training courses for uni-app ([see](https://opendocs.alipay.com/mini/ide/overview) ://ask.dcloud.net.cn/article/35640)), developers can choose with confidence.

`uni-app`在手，做啥都不愁。即使不跨端，```uni-app```也是更好的小程序开发框架（[详见](https://ask.dcloud.net.cn/article/35947)）、更好的App跨平台框架、更方便的H5开发框架。不管领导安排什么样的项目，你都可以快速交付，不需要转换开发思维、不需要更改开发习惯。
With `uni-app` in hand, you don't have to worry about doing anything. Even if it is not cross-end, ``uni-app`` is a better applet development framework ([see details](https://ask.dcloud.net.cn/article/35947)), a better App Cross-platform framework, more convenient H5 development framework. No matter what kind of project the leader arranges, you can deliver it quickly, without changing the development thinking or changing the development habits.


## 快速体验
## Quick experience

<div class="quick">
    <!-- <h3 id="快速体验"><a href="/README?id=%e5%bf%ab%e9%80%9f%e4%bd%93%e9%aa%8c" data-id="快速体验" class="anchor"><span>快速体验</span></a></h3> -->
    <!-- <h3 id="Quick Experience"><a href="/README?id=%e5%bf%ab%e9%80%9f%e4%bd%93%e9%aa%8c" data- id="Quick Experience" class="anchor"><span>Quick Experience</span></a></h3> -->
    <p>一套代码编到14个平台，这不是梦想。眼见为实，扫描14个二维码，亲自体验最全面的跨平台效果！</p>
    <p>One set of code compiled to 14 platforms, this is not a dream. Seeing is believing, scan 14 QR codes and experience the most comprehensive cross-platform effect for yourself!</p>
    <div class="flex-img-group-view">
      <a href="//m3w.cn/uniapp" target="_blank" class="clear-style barcode-view">
        <div class="barcode-img-box">
          <img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/7c946930-bcf2-11ea-b997-9918a5dda011.png" width="160" />
        </div>
        <b>Android版</b>
        <b>Android version</b>
      </a>
      <a href="https://itunes.apple.com/cn/app/hello-uni-app/id1417078253?mt=8" target="_blank" class="clear-style barcode-view">
        <div class="barcode-img-box">
          <img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/7c910dd0-bcf2-11ea-b680-7980c8a877b8.png" width="160" />
        </div>
        <b>iOS版</b>
        <b>iOS version</b>
      </a>
      <a v-if="!$themeConfig.isEn" href="https://hellouniapp.dcloud.net.cn/" target="_blank" class="clear-style barcode-view">
        <div class="barcode-img-box">
          <img src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/uni-h5-hosting-qr.png" width="160" />
        </div>
        <b>Web版</b>
        <b>Web version</b>
      </a>
      <a v-else href="https://hellouniapp.dcloud.net.cn/en/" target="_blank" class="clear-style barcode-view">
        <div class="barcode-img-box">
          <img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/a65a9719-9547-476b-b077-291058f6955d.png" width="160" />
        </div>
        <b>Web版</b>
        <b>Web version</b>
      </a>
      <a href="//m3w.cn/uniapp" target="_blank" class="clear-style barcode-view">
        <div class="barcode-img-box"><img src="//img.cdn.aliyun.dcloud.net.cn/guide/uniapp/gh_33446d7f7a26_430.jpg" width="160" /></div>
        <b>微信小程序版</b>
        <b>WeChat applet version</b>
      </a>
    </div>
    <div class="flex-img-group-view" style="margin-top: 20px;">
      <a href="//m3w.cn/uniapp" target="_blank" class="clear-style barcode-view">
        <div class="barcode-img-box"><img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/30112940-bcf2-11ea-a30b-e311646dfaf2.png" width="160" /></div>
        <b>支付宝小程序版</b>
        <b>Alipay applet version</b>
      </a>
      <a href="//m3w.cn/uniapp" target="_blank" class="clear-style barcode-view">
        <div class="barcode-img-box"><img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/e7fc6700-bcf1-11ea-b680-7980c8a877b8.png" width="160" /></div>
        <b>百度小程序版</b>
        <b>Baidu Mini Program Edition</b>
      </a>
      <a href="//m3w.cn/uniapp" target="_blank" class="clear-style barcode-view">
        <div class="barcode-img-box">
          <img src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/mp-toutiao.png" width="160" />
        </div>
        <b>字节跳动小程序版</b>
        <b>ByteDance Mini Program Edition</b>
      </a>
      <a href="//m3w.cn/uniapp" target="_blank" class="clear-style barcode-view">
        <div class="barcode-img-box">
          <img src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hello-uni-qa-union.png" width="160" />
        </div>
        <b>快应用</b>
        <b>Quick application</b>
      </a>
    </div>
    <div class="flex-img-group-view" style="margin-top: 20px;">
      <a href="//m3w.cn/uniapp" target="_blank" class="clear-style barcode-view">
        <div class="barcode-img-box">
          <img src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hello-uni-qq.png" width="160" />
        </div>
        <b>QQ小程序版</b>
        <b>QQ applet version</b>
      </a>
      <a href="https://so.mp.360.cn/mp.html?appid=qh4j181qqtru354st6" target="_blank" class="clear-style barcode-view">
        <div class="barcode-img-box">
          <img src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hello-uni-mp-360-qr.png" width="160" />
        </div>
        <b>360小程序</b>
        <b>360 applet</b>
      </a>
      <a href="//m3w.cn/uniapp" target="_blank" class="clear-style barcode-view">
        <div class="barcode-img-box"><img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/04cb978b-070f-4122-b374-cb3cd9f9528f.png" width="160" /></div>
        <b>快手小程序版</b>
        <b>Kuaishou applet version</b>
      </a>
      <a href="//m3w.cn/uniapp" target="_blank" class="clear-style barcode-view">
        <div class="barcode-img-box"><img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/0daa3f31-47aa-4a9b-bd2f-6d3a7a968bd5.png" width="160" /></div>
        <b>飞书小程序版</b>
        <b>Feishu Mini Program Edition</b>
      </a>
    </div>
    <div class="flex-img-group-view" style="margin-top: 20px;">
      <a href="//m3w.cn/uniapp" target="_blank" class="clear-style barcode-view">
        <div class="barcode-img-box">
          <img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/25463394-c584-4f68-bd57-6e05c43d55a7.png" width="160" />
        </div>
        <b>钉钉小程序版</b>
        <b>DingTalk applet version</b>
      </a>
      <a href="//m3w.cn/uniapp" target="_blank" class="clear-style barcode-view">
        <div class="barcode-img-box">
          <img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/96e072fe-f338-46bd-b2d7-7b3aac7df501.png" width="160" />
        </div>
        <b>京东小程序版</b>
        <b>JD Mini Program Edition</b>
      </a>
      <a href="javascript:void(0)" οnclick="js_method()"  class="clear-style barcode-view">
        <div class="barcode-img-box">
          <img style="opacity: 0;" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/96e072fe-f338-46bd-b2d7-7b3aac7df501.png" width="160" />
        </div>
        <b></b>
      </a>
      <a href="javascript:void(0)" οnclick="js_method()" class="clear-style barcode-view">
        <div class="barcode-img-box">
          <img style="opacity: 0;" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/96e072fe-f338-46bd-b2d7-7b3aac7df501.png" width="160" />
        </div>
        <b></b>
      </a>
    </div>
    <p>注：<br/>
    <p>Note:<br/>
        <em>- 某些平台不能提交简单demo，故补充了一些其他功能；hello uni-app示例代码可从[github](https://github.com/dcloudio/hello-uniapp)获取</em></br>
        <em>- Some platforms cannot submit simple demos, so some other functions are added; the sample code of hello uni-app can be obtained from [github](https://github.com/dcloudio/hello-uniapp)</em></br>
        <em>- 快应用仅支持 vivo 、oppo、华为</em></br>
        <em>- Quick app only supports vivo, oppo, Huawei</em></br>
        <em>- 360小程序仅 windows平台支持，需要在360浏览器中打开</em></br>
        <em>- The 360 applet is only supported on the windows platform and needs to be opened in the 360 browser</em></br>
    </p>
</div>

## 看视频，10分钟了解uni-app
## Watch the video and learn about uni-app in 10 minutes

我们精心准备了一个简单的十分钟介绍视频，方便你快速了解`uni-app`的主要特征：
We have carefully prepared a simple ten-minute introduction video to help you quickly understand the main features of `uni-app`:

<!-- <video id="video" onplay="videoPlay()" preload="none" controls="controls" width="100%" poster="https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/poster.png" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/78e4ebc0-54be-11eb-a16f-5b3e54966275.mp4"></video> -->

<video id="video" onplay="videoPlay()" preload="none" controls="controls" width="100%" poster="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/9d299680-555d-11eb-8a36-ebb87efcf8c0.jpg" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/a876efc0-4f35-11eb-97b7-0dc4655d6e68.mp4"></video>

## 为什么要选择uni-app？
## Why choose uni-app?

```uni-app```在开发者数量、案例、跨端抹平度、扩展灵活性、性能体验、周边生态、学习成本、开发成本等8大关键指标上拥有更强的优势。
<!-- ![](https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/uni20190418.png) -->
<div class="uniapp-home-content">
    <div class="uniapp-home-content-item">
      <div class="uniapp-home-content-item-image">
        <img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/9c70d280-4f36-11eb-8a36-ebb87efcf8c0.png">
      </div>
      <div class="uniapp-home-content-item-header">
        <h5 class="uniapp-home-content-item-title">开发者/案例数量更多</h5>
        <h5 class="uniapp-home-content-item-title">More developers/cases</h5>
        <p class="uniapp-home-content-item-text">数百万应用、uni统计月活12亿、70+微信/qq群、更高的百度指数</p>
        <p class="uniapp-home-content-item-text">Millions of applications, 1.2 billion monthly active users in uni statistics, 70+ WeChat/QQ groups, higher Baidu index</p>
        <p class="uniapp-home-content-item-text">跨端完善度更高，真正落地的提高生产力</p>
        <p class="uniapp-home-content-item-text">Higher cross-terminal completeness, truly improved productivity</p>
      </div>
    </div>
    <div class="uniapp-home-content-item">
      <div class="uniapp-home-content-item-image">
        <img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/9d2b6ff0-4f36-11eb-b680-7980c8a877b8.png">
      </div>
      <div class="uniapp-home-content-item-header">
        <h5 class="uniapp-home-content-item-title">平台能力不受限</h5>
        <h5 class="uniapp-home-content-item-title">Platform capability is not limited</h5>
         <p class="uniapp-home-content-item-text">在跨端的同时，通过条件编译+平台特有API调用，可以优雅的为某平台写个性化代码，调用专有能力而不影响其他平台。</p>
         <p class="uniapp-home-content-item-text">While crossing sides, you can elegantly write personalized code for a certain platform through conditional compilation + platform-specific API calls, and call proprietary capabilities without affecting other platforms.</p>
        <p class="uniapp-home-content-item-text">支持原生代码混写和原生sdk集成。</p>
        <p class="uniapp-home-content-item-text">Support native code mixing and native sdk integration.</p>
      </div>
    </div>
    <div class="uniapp-home-content-item">
      <div class="uniapp-home-content-item-image">
        <img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/9e0d6b80-4f36-11eb-97b7-0dc4655d6e68.png">
      </div>
      <div class="uniapp-home-content-item-header">
        <h5 class="uniapp-home-content-item-title">性能体验优秀</h5>
        <h5 class="uniapp-home-content-item-title">Excellent performance experience</h5>
        <p class="uniapp-home-content-item-text">加载新页面速度更快、自动diff更新数据。</p>
        <p class="uniapp-home-content-item-text">Load new pages faster, and automatically diff the updated data.</p>
        <p class="uniapp-home-content-item-text">App端支持原生渲染，可支撑更流畅的用户体验。</p>
        <p class="uniapp-home-content-item-text">App side supports native rendering, which can support a smoother user experience.</p>
        <p class="uniapp-home-content-item-text">小程序端的性能优于市场其他框架。<a href="https://ask.dcloud.net.cn/article/35947" target="_blank">评测</a></p>
        <p class="uniapp-home-content-item-text">The performance of the applet is better than other frameworks in the market. <a href="https://ask.dcloud.net.cn/article/35947" target="_blank">Evaluation</a></p>
      </div>
    </div>
    <div class="uniapp-home-content-item">
      <div class="uniapp-home-content-item-image">
        <img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/9f01dda0-4f36-11eb-8a36-ebb87efcf8c0.png">
      </div>
      <div class="uniapp-home-content-item-header">
        <h5 class="uniapp-home-content-item-title">周边生态丰富</h5>
        <h5 class="uniapp-home-content-item-title">Rich surrounding ecology</h5>
        <p class="uniapp-home-content-item-text"><a href="https://ext.dcloud.net.cn/?orderBy=WeekDownload" target="_blank">插件市场</a>数千款插件。</p>
        <p class="uniapp-home-content-item-text">There are thousands of plugins available on the <a href="https://ext.dcloud.net.cn/?orderBy=WeekDownload" target="_blank">Plug-in market</a>.</p>
        <p class="uniapp-home-content-item-text">支持NPM、支持小程序组件和SDK。</p>
        <p class="uniapp-home-content-item-text">Support NPM, support applet components and SDK.</p>
        <p class="uniapp-home-content-item-text">微信生态的各种sdk可直接用于跨平台App。</p>
        <p class="uniapp-home-content-item-text">Various SDKs of the WeChat ecosystem can be directly used in cross-platform apps.</p>
      </div>
    </div>
    <div class="uniapp-home-content-item">
      <div class="uniapp-home-content-item-image">
        <img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/9fc22060-4f36-11eb-bdc1-8bd33eb6adaa.png">
      </div>
      <div class="uniapp-home-content-item-header">
        <h5 class="uniapp-home-content-item-title">学习成本低</h5>
        <h5 class="uniapp-home-content-item-title">Low learning cost</h5>
        <p class="uniapp-home-content-item-text">基于通用的前端技术栈，采用vue语法+微信小程序api，无额外学习成本。</p>
        <p class="uniapp-home-content-item-text">Based on the general front-end technology stack, using vue syntax + WeChat applet api, no additional learning cost.</p>
      </div>
    </div>
    <div class="uniapp-home-content-item">
      <div class="uniapp-home-content-item-image">
        <img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/a09723a0-4f36-11eb-97b7-0dc4655d6e68.png">
      </div>
      <div class="uniapp-home-content-item-header">
        <h5 class="uniapp-home-content-item-title">开发成本低</h5>
        <h5 class="uniapp-home-content-item-title">Low development cost</h5>
        <p class="uniapp-home-content-item-text">不止开发成本，招聘、管理、测试各方面成本都大幅下降。</p>
        <p class="uniapp-home-content-item-text">Not only the development cost, but also the costs of recruitment, management and testing have declined to a great extent.</p>
        <p class="uniapp-home-content-item-text">HBuilderX是高效开发神器，熟练掌握后研发效率至少翻倍（即便只开发一个平台）。</p>
        <p class="uniapp-home-content-item-text">HBuilderX is an efficient development tool, which can at least double the efficiency of R&amp;D after mastering it (even if only one platform is developed).</p>
      </div>
    </div>
</div>

<!-- ```uni-app``` 使用```Vue.js```的语法 + 微信小程序的API，均为通用技术。
<!-- ```uni-app``` uses the syntax of ```Vue.js``` + the API of WeChat Mini Program, both of which are common technologies.

有一定 ```Vue.js``` 和小程序开发经验的开发者可快速上手 ```uni-app``` ，开发出兼容多端的应用。
Developers who have some experience in ```Vue.js``` and applet development can quickly get started with ```uni-app``` and develop applications that are compatible with multiple terminals.

```uni-app```提供了条件编译机制，在跨端的同时，可以优雅的为某平台写个性化代码、调用专有能力而不影响其他平台。这是能落地的真正一套代码的解决方案，而不是仅仅统一技术栈，实际项目仍然多套代码、各自升级。
``uni-app```` provides a conditional compilation mechanism, which can elegantly write personalized code for a platform and invoke proprietary capabilities without affecting other platforms while cross-end. This is a real set of code solutions that can be implemented, rather than just unifying the technology stack. In actual projects, there are still multiple sets of codes, each of which is upgraded.

```uni-app```打包到App时使用了使用独立v8引擎，渲染层支持原生渲染和webview渲染双选，内置大量常用原生功能，支持原生插件扩展，并且插件市场有丰富的插件生态，无需懂原生开发亦可完成复杂应用。
```uni-app``` uses an independent v8 engine when it is packaged into the App, the rendering layer supports dual selection of native rendering and webview rendering, built-in a large number of common native functions, supports native plug-in extensions, and the plug-in market has a rich plug-in ecology , you can complete complex applications without knowing native development.

`uni-app`提供了`uni小程序sdk`，支持以sdk方式嵌入原生项目中混合开发，帮助原生App得到小程序能力，并可享受`uni-app`的开发者生态。
`uni-app` provides the `uni applet sdk`, which supports mixed development in native projects embedded in the sdk method, helps native apps gain applet capabilities, and enjoys the developer ecosystem of `uni-app`.

```uni-app```被DCloud定义为**终极跨平台开发框架**，拥有极强的竞争优势。
````uni-app```` is defined by DCloud as the **ultimate cross-platform development framework**, which has a strong competitive advantage.

- 对于技术人员而言：不用学那么多的平台开发技术、研究那么多前端框架，学会基于vue的```uni-app```就够了。
- For technical personnel: It is enough to learn ``uni-app`` based on vue without learning so many platform development technologies and researching so many front-end frameworks.
- 对于公司而言：更低成本，覆盖更多用户，```uni-app```是高效利器。 -->
- For companies: lower cost, covering more users, ``uni-app``` is an efficient tool. -->

## 功能框架图
## Functional framework diagram

从下面`uni-app`功能框架图可看出，`uni-app`在跨平台的过程中，不牺牲平台特色，可优雅的调用平台专有能力，真正做到海纳百川、各取所长。
As can be seen from the functional framework diagram of `uni-app` below, in the process of cross-platform, `uni-app` can elegantly invoke platform-specific capabilities without sacrificing platform characteristics, and truly achieves the diversity of the sea and the strengths of each.

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/29448a55-2785-4296-9248-913dbda9de7f.png)

## 一套代码，运行到多个平台
## A set of code that runs on multiple platforms

`uni-app`实现了一套代码，同时运行到多个平台；如下图所示，一套代码，同时运行到iOS模拟器、Android模拟器、web、微信开发者工具、支付宝小程序Studio、百度开发者工具、字节跳动开发者工具、QQ开发者工具（底部每个终端选项卡，代表1个终端模拟器）：
`uni-app` implements a set of codes that run on multiple platforms at the same time; as shown in the figure below, a set of codes runs simultaneously on iOS simulators, Android simulators, web, WeChat developer tools, Alipay Mini Program Studio, Baidu Developer Tools, ByteDance Developer Tools, QQ Developer Tools (each terminal tab at the bottom, representing 1 terminal emulator):

![](https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/efd8e280-60a9-11eb-a16f-5b3e54966275.jpg)

实际运行效果如下（点击图片可放大）：
The actual running effect is as follows (click on the image to enlarge):

![](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/ec6e95dd-77ad-4d14-aafa-ca503f5b9e53.jpg)
