#### uni-app选型评估23问
#### uni-app selection evaluation 23 questions

如果你关心竞品对比，这里有几份详尽对比：
If you care about competing products, here are a few detailed comparisons:
1. 多端开发框架对比横评，参考：[https://juejin.im/post/5e8e8d5a6fb9a03c6d3d9f42](https://juejin.im/post/5e8e8d5a6fb9a03c6d3d9f42)
1. Comparison of multi-terminal development frameworks, reference: [https://juejin.im/post/5e8e8d5a6fb9a03c6d3d9f42](https://juejin.im/post/5e8e8d5a6fb9a03c6d3d9f42)
2. 只做App，flutter、react native等App跨平台框架对比，参考：[https://ask.dcloud.net.cn/article/36083](https://ask.dcloud.net.cn/article/36083)
2. Only do App, cross-platform framework comparison of apps such as flutter and react native, refer to: [https://ask.dcloud.net.cn/article/36083](https://ask.dcloud.net.cn/article /36083)
3. 只做小程序，原生wxml开发、wepy、mpvue、taro的对比，[https://ask.dcloud.net.cn/article/35867](https://ask.dcloud.net.cn/article/35867)
3. Only do small programs, native wxml development, wepy, mpvue, taro comparison, [https://ask.dcloud.net.cn/article/35867](https://ask.dcloud.net.cn/article /35867)
4. uni-app和微信原生开发的详细比较评测，参考：[https://ask.dcloud.net.cn/article/36484](https://ask.dcloud.net.cn/article/36484)
4. Detailed comparative evaluation of uni-app and WeChat native development, refer to: [https://ask.dcloud.net.cn/article/36484](https://ask.dcloud.net.cn/article/36484)


**uni-app 有哪些已上线的成功案例？**
**What are the success stories of uni-app that have gone live?**

uni-app是当今主流的开发框架，DCloud有900万开发者，uni统计手机端月活10亿，华为、阿里、腾讯、字节跳动、美团、京东、快手、vivo都在用，案例参考[uni-app 应用案例](http://uniapp.dcloud.io/case)
uni-app is the mainstream development framework today. DCloud has 9 million developers, and uni counts 1 billion monthly active users on mobile phones. Huawei, Alibaba, Tencent, ByteDance, Meituan, JD.com, Kuaishou, and vivo are all using them. Case reference [uni-app application case](http://uniapp.dcloud.io/case)

**uni-app收费吗？**
**Does uni-app charge?**

```uni-app``` 是免费并且属于Apache2.0开源协议的产品。DCloud官方承诺无论HBuilderX、uni-app，面向全球程序员永久免费。大家可以放心使用。
````uni-app```` is a free product under the Apache 2.0 open source license. DCloud officially promises that regardless of HBuilderX or uni-app, it will be permanently free for programmers around the world. Everyone can use it with confidence.

DCloud的盈利方式在帮助开发者进行流量变现（uni-AD）和提供有价值的云服务（uniCloud）上，而不在开发工具收费上。
DCloud is profitable by helping developers to monetize traffic (uni-AD) and provide valuable cloud services (uniCloud), instead of charging for development tools.

**跨端会造成功能受限制吗？**
**Will cross-side cause function limitation?**

```uni-app```在跨平台的过程中，不牺牲平台特色，不限制平台的能力使用。
```uni-app``` In the process of cross-platform, it does not sacrifice platform features and does not limit the use of platform capabilities.

应用开发中，90%的常规开发，比如界面组件、联网等api，```uni-app```封装为可跨多端的API。
In application development, 90% of routine development, such as interface components, networking and other APIs, are encapsulated as APIs that can span multiple terminals.

而各个端的特色功能，```uni-app```引入[条件编译](http://uniapp.dcloud.io/tutorial/platform)。可以优雅的在一个项目里调用不同平台的特色能力。比如push，微信小程序里不支持，但可以在App里使用，还有很多原生sdk，在App时难免涉及，这些都可以正常的在```uni-app```框架下使用。
And the characteristic functions of each end, ``uni-app```` introduces [conditional compilation](http://uniapp.dcloud.io/tutorial/platform). It is possible to elegantly invoke the special capabilities of different platforms in one project. For example, push is not supported in the WeChat applet, but it can be used in the app. There are also many native SDKs, which are inevitably involved in the app. These can be used normally under the ``uni-app``` framework.

下图是```uni-app```产品功能框架图，```uni-app```在保持uni规范跨平台的前提下，还可实现每个平台特有的平台能力(如微信小程序平台，可继续调用微信卡劵等微信特有业务API)。
The following figure is the product function framework diagram of ``uni-app``, ``uni-app`` can also realize the unique platform capabilities of each platform under the premise of maintaining the uni specification and cross-platform (such as WeChat small The program platform can continue to call WeChat-specific business APIs such as WeChat cards).

![](//img.cdn.aliyun.dcloud.net.cn/uni-app/doc/uni-app-frame-0310.png)

在做小程序时，小程序所有的api都可以使用；而输出到App时，原生渲染引擎、原生sdk集成和混写都支持，使得原生的所有api都可以使用。
When making an applet, all the APIs of the applet can be used; when outputting to the app, the native rendering engine, native sdk integration and mixing are all supported, so that all the native APIs can be used.

同时注意，条件编译不同于代码里if逻辑判断。条件编译块里的代码或指定的文件，只有在特定平台才会被编译进去，不会把不能用的其他平台代码混在一个包里。如果大量使用if判断，会增大体积和影响性能，而条件编译则没有这些问题，减少包体积，减少互相的干扰。
Also note that conditional compilation is different from if logic judgment in code. The code or specified file in the conditional compilation block will only be compiled in a specific platform, and the unusable code of other platforms will not be mixed in a package. If if judgment is used extensively, it will increase the volume and affect the performance. In contrast, conditional compilation does not have these problems, which can reduce packet size and reduce mutual interference.

**uni-app的手机端用户体验如何？**
**How is the user experience on the mobile side of uni-app?**

使用```uni-app```开发的微信小程序，因为智能的处理的数据的diff，比大多人手写的原生小程序的性能还好。详细数据评测参考：[https://juejin.im/post/5ca1736af265da30ae314248](https://juejin.im/post/5ca1736af265da30ae314248)
The WeChat applet developed with ``uni-app``, because of the intelligently processed data diff, has better performance than the native applet written by most people. Detailed data evaluation reference: [https://juejin.im/post/5ca1736af265da30ae314248](https://juejin.im/post/5ca1736af265da30ae314248)

```uni-app```打包成App后，支持webview渲染和weex原生渲染这2种引擎，可以任由开发者切换使用。
After ``uni-app``` is packaged into an App, it supports two engines: webview rendering and weex native rendering, which can be switched by developers.

- webview渲染方式，架构和微信小程序一样。微信小程序的Hybrid应用框架是业内体验上的标杆，实践证明这种体验足以承载一线互联网开发商获得上亿用户。uni-app的App端体验同微信小程序，超过其他平台的小程序，超过一般的hybrid框架。
- The rendering method of the webview is the same as the WeChat applet. The Hybrid application framework of WeChat Mini Programs is the benchmark for experience in the industry. Practice has proved that this experience is enough to carry first-line Internet developers to gain hundreds of millions of users. The app-side experience of uni-app is the same as that of WeChat mini-programs, surpassing mini-programs on other platforms and exceeding the general hybrid framework.
- 原生渲染方式，是DCloud改造了weex引擎，在原生渲染引擎上实现了uni-app的组件和API。达到更优秀的用户体验。
- The native rendering method is that DCloud transforms the weex engine and implements the components and APIs of uni-app on the native rendering engine. achieve a better user experience.

由于有丰富的插件市场，以及支持所有小程序SDK在App端的使用，使得```uni-app```拥有更庞大的应用生态。
Due to the rich plug-in market and the support for the use of all Mini Program SDKs on the App side, ``uni-app``` has a larger application ecosystem.

**只开发小程序，需要uni-app吗？**
**Only develop small programs, do you need uni-app? **

是的，单独开发小程序，也应该使用uni-app。它比其他小程序框架或原生小程序开发更有优势。原因如下：
Yes, to develop small programs independently, you should also use uni-app. It has advantages over other applet frameworks or native applet development. The reasons are as follows:
1. uni-app无需追随微信升级，可不受限在条件编译里使用wx的现在或未来的所有api
1. uni-app does not need to follow the WeChat upgrade, and can use all the current or future APIs of wx in conditional compilation without restriction
2. uni-app的性能比一般人手写的微信原生代码性能更高。就像vue操作比一般人写js操作dom性能更高一样。底层自动diff差量更新数据，比手动setData性能更高。评测数据见下文
2. The performance of uni-app is higher than that of WeChat native code written by ordinary people. Just like the vue operation is more performant than the average person writing js to operate the dom. The underlying automatic diff delta update data, which is more performant than manual setData. Evaluation data see below
3. uni-app是纯vue语法，不必另学一种dsl。开发不同项目时，思维不用切换
3. uni-app is pure vue syntax, no need to learn another dsl. When developing different projects, there is no need to switch thinking
4. uni-app的组件、模板非常丰富，插件市场数千款插件。如富文本解析、图表、自定义下拉刷新等组件，uni-app版插件性能均超过了wxparse、wx-echart等微信小程序组件
4. The components and templates of uni-app are very rich, and there are thousands of plug-ins in the plug-in market. Such as rich text parsing, charts, custom pull-down refresh and other components, the performance of the uni-app version of the plug-in exceeds that of the WeChat applet components such as wxparse and wx-echart
5. HBuilderX比微信工具更强大，开发效率更高。哪怕使用vscode等工具，由于这些工具对vue的支持强于对wxml的支持，所以开发效果也会更高
5. HBuilderX is more powerful than WeChat tools and has higher development efficiency. Even if you use tools such as vscode, since these tools support vue stronger than wxml, the development effect will be higher
6. 微信原生开发对webpack、预编译语言、工程流程管理很多功能都不支持，大公司很少用微信原生开发，都是在用框架来提升开发效率
6. Wechat native development does not support many functions such as webpack, precompiled language, and engineering process management. Large companies rarely use Wechat native development, but are using frameworks to improve development efficiency
7. uni-app支持双向数据绑定、vuex状态管理，比小程序原生开发方便的多
7. uni-app supports two-way data binding and vuex state management, which is much more convenient than the native development of small programs
8. 迟早会有多端需求，使用`uni-app`再无后续顾虑
8. Sooner or later there will be multi-end requirements, and there is no follow-up concern when using `uni-app`
9. uni-app并非仅用于做跨端的，只用uni-app做小程序、只做web、只做App的，案例是一样多的，详见：[https://uniapp.dcloud.io/case](https://uniapp.dcloud.io/case)
9. uni-app is not only used for cross-end, but only for small programs, only for web, and only for apps. There are as many cases. For details, see: [https://uniapp.dcloud.io /case](https://uniapp.dcloud.io/case)
关于uni-app和微信开发的详细比较评测，参考：[https://ask.dcloud.net.cn/article/36484](https://ask.dcloud.net.cn/article/36484)
For a detailed comparative evaluation of uni-app and WeChat development, please refer to: [https://ask.dcloud.net.cn/article/36484](https://ask.dcloud.net.cn/article/36484)

- 评测1、uni-app和原生wxml开发、wepy、mpvue、taro的对比，[https://ask.dcloud.net.cn/article/35867](https://ask.dcloud.net.cn/article/35867)
- Evaluation 1. Comparison of uni-app and native wxml development, wepy, mpvue, and taro, [https://ask.dcloud.net.cn/article/35867](https://ask.dcloud.net.cn/ article/35867)
- 评测2、uni-app和微信原生开发的详细比较评测，参考：[https://ask.dcloud.net.cn/article/36484](https://ask.dcloud.net.cn/article/36484)
- Evaluation 2, detailed comparative evaluation of uni-app and WeChat native development, refer to: [https://ask.dcloud.net.cn/article/36484](https://ask.dcloud.net.cn/article/ 36484)

**只开发App，需要uni-app吗？**
**Is uni-app needed for App-only development?**

```uni-app```是更好的跨平台开发框架，开发一次iOS、Android都有了。体验好、开发效率高。
```uni-app``` is a better cross-platform development framework, both iOS and Android can be developed once. Good experience and high development efficiency.

<!-- ```uni-app```在App侧可以使用小程序引擎或weex引擎渲染，性能体验高于其他Hybrid框架。 -->
<!-- ``uni-app``` can be rendered using the applet engine or the weex engine on the App side, and the performance experience is higher than other Hybrid frameworks. -->

```uni-app```在App端，基于能力层/渲染层分离的架构设计（见下图），渲染层是webview和weex二选一，能力调用都是共同的plus api，比如蓝牙、扫码等能力；也就是weex被内置到```uni-app```中，并且被强化了。
```uni-app``` On the App side, based on the architecture design of the capability layer/rendering layer separation (see the figure below), the rendering layer is a choice between webview and weex, and the capability calls are all common plus apis, such as Bluetooth , scan code and other capabilities; that is, weex is built into ``uni-app``` and is enhanced.

![](https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/frame_app.png)

过去weex有个很大的问题是api太少，开发时必须iOS、Android原生和前端3拨团队协作开发，实际上react native也如此，因为他们的核心只是高性能渲染器。
A big problem of weex in the past was that there were too few APIs and the development had to be done collaboratively by 3 teams: iOS, Android native and front-end. In fact, the same is true of react native, because their core is just a high-performance renderer.

uni-app提供了大量的扩展api解决了这个问题，并且发展了成熟多样的插件生态，大多数App的开发不再需要原生介入了，从而把跨平台开发省成本这个核心目的落地了。
uni-app solves this problem by providing a large number of extended APIs, and has developed a mature and diverse plug-in ecology. Most developments of App no longer requires native intervention, thus realizing the core purpose of cross-platform development to save costs.

```uni-app```在App侧可以使用丰富的小程序sdk，如网易云信、环信、七牛等众多sdk厂商均原厂维护其小程序sdk版本，而这些sdk均可直接用于uni-app并发布为iOS、Android的App。
```uni-app``` On the App side, you can use rich applet SDKs, such as NetEase Yunxin, Huanxin, Qiniu and many other SDK manufacturers maintain their original applet SDK versions, and these SDKs can be directly App for uni-app and published as iOS, Android.

```uni-app```的插件市场里有非常多的ui库、组件、模板，可以大幅提升开发效率。
There are many ui libraries, components and templates in the plugin market of ```uni-app```, which can greatly improve development efficiency.

相比纯原生开发，```uni-app```体验可商用，也不会限制功能调用，但开发效率和开发成本更优于原生开发。
Compared with pure native development, the ```uni-app``` experience can be used for commercial use and will not limit function calls, but the development efficiency and development cost are better than native development.

如果你已经有了原生App，那么可以局部使用```uni-app```，内嵌uni小程序SDK，把部分栏目小程序化，或者直接打造自己的小程序平台。
If you already have a native app, you can use ```uni-app``` locally, embed the uni applet SDK, make some columns into applet, or directly create your own applet platform.

**uni-app是多端写在一个项目统一升级维护，还是每个端不同的项目，只复用部分代码**
**Is uni-app written on multiple ends in one project for unified upgrade and maintenance, or is it a different project on each end and only part of the code is reused?**

```uni-app```是多端写在一个基础项目下，差异使用条件编译来管理。
``uni-app`` is multi-terminal written under a base project, and differences are managed using conditional compilation.
``uni-app`` is multi-terminal written under a base project, and differences are managed using conditional compilation.

这有个巨大的好处是一套工程代码，升级时可多端同时更新。
It has a huge advantage that a set of engineering codes can be updated at the same time when upgrading.

如果把不同端的项目分开，那么维护升级时非常麻烦，无法方便同步升级。
If the projects on different sides are separated, it is very troublesome for maintenance and upgradation, and it is not easy to upgrade synchronously.

**uni-app 学习成本高吗？基于什么技术栈？**
**Is uni-app costly to learn? What technology stack is it based on?**

```uni-app```简单来说是 vue的语法 + 小程序的api。
```uni-app``` is simply the syntax of vue + the api of the applet.

它遵循```Vue.js```语法规范，组件和API遵循```微信小程序命名```，这些都属于通用技术栈，学习它们是前端必备技能，```uni-app```没有太多额外学习成本。
It follows the ```Vue.js``` syntax specification, components and API follow the ```WeChat applet naming``, these belong to the general technology stack, learning them is a necessary front-end skills, ```uni-app ````There is not much extra learning cost.

有一定 Vue.js 和微信小程序开发经验的开发者可快速上手 ```uni-app``` 。
Developers with some experience in Vue.js and WeChat applet development can quickly get started with ```uni-app```.

没学过vue的同学，也不用掌握vue的全部，只需了解vue基础语法、虚拟dom、数据绑定、组件、vuex，其他如路由、loader 不用学，cli、node.js、webpack也不需要学。
Novices who have never learned vue do not need to master all of vue, they only need to learn about are the basic syntax of vue, virtual dom, data binding, components and vuex. Others such as routing, loader, cli, node.js, webpack are not within the scope of learning.

官方有入门培训视频，且还有众多培训渠道加入```uni-app```生态，可参考[培训教程资源汇总](http://uniapp.dcloud.io/resource)。
There are official introductory training videos, and there are many training channels to join the ``uni-app``` ecology, you can refer to [Training Tutorial Resource Summary](http://uniapp.dcloud.io/resource).

**uni-app 开发体验如何？支持现代前端开发流程吗？**
**How is the development experience of uni-app? Does it support modern front-end development process?**

```uni-app``` 积极拥抱社区现有的现代开发流程，包括但不限于：
```uni-app``` actively embraces the community's existing modern development processes, including but not limited to:

- 内置了webpack/vite
- built-in webpack/vite
- NPM 包管理系统，详见[参考](http://uniapp.dcloud.io/tutorial/page-script#npm支持)
- NPM package management system, see [Reference](http://uniapp.dcloud.io/tutorial/page-script#npm%E6%94%AF%E6%8C%81)
- es6+ 语法（发布时会自动编译为es5），详见[参考](http://uniapp.dcloud.io/tutorial/syntax-js#es6-支持)
- es6+ syntax (automatically compiled to es5 when released), see [Reference](http://uniapp.dcloud.io/tutorial/syntax-js#es6-%E6%94%AF%E6%8C%81)
- 各种预处理器（less、scss、stylus、typescript）
- Various preprocessors (less, scss, stylus, typescript)
- uni-app的官方ide：HBuilderX，在vue、json、markdown、代码提示、操作效率上，有非常明显的优势，可帮助开发者大幅提高工作效率
- Official ide of uni-app: HBuilderX, has obvious advantages in vue, json, markdown, code prompt and operation efficiency, which can greatly improve the productivity of developers
- uni-app同时也提供了cli方式，可使用其他开发工具如vscode开发，当然开发效率不如HBuilderX。对比详见[https://ask.dcloud.net.cn/article/35451](https://ask.dcloud.net.cn/article/35451)
- uni-app also provides the cli mode, which can be developed by using other development tools such as vscode. Certainly, the development efficiency is not as good as that of HBuilderX. For comparison, see [https://ask.dcloud.net.cn/article/35451](https://ask.dcloud.net.cn/article/35451)
- HBuilder也提供了cli，[参考](https://hx.dcloud.net.cn/cli/README)
- HBuilder also provides cli, [Reference](https://hx.dcloud.net.cn/cli/README)


**uni-app 生态开放性如何？能否直接利用现有前端社区资源？**
**How open is the uni-app ecosystem? Can the existing front-end community resources be directly utilized?**

```uni-app``` 提供了开放性的生态：
```uni-app``` provides an open ecosystem:

- 丰富的插件市场为开发者提供数千款现成的轮子，[https://ext.dcloud.net.cn](https://ext.dcloud.net.cn)
- Rich plug-in market provides developers with thousands of ready-made wheels, [https://ext.dcloud.net.cn](https://ext.dcloud.net.cn)
- 兼容微信小程序 JS SDK，丰富的小程序生态内容可直接引入uni-app，并且在App侧通用，[参考](http://ask.dcloud.net.cn/article/35070)
- Compatible with WeChat applet JS SDK, rich applet ecological content can be directly imported into uni-app, and can be used on the App side, [Reference](http://ask.dcloud.net.cn/article/35070)
- 兼容微信小程序自定义组件，并且App、web侧通用，[参考](http://uniapp.dcloud.io/tutorial/miniprogram-subject#小程序自定义组件支持)
- Compatible with WeChat Mini Program custom components, and common to App and web side, [Reference](http://uniapp.dcloud.io/tutorial/miniprogram-subject#%E5%B0%8F%E7%A8%8B%E5 %BA%8F%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E6%94%AF%E6%8C%81)
- App和web提供了renderjs，使得浏览器专用的库也可以在App和web里使用，[参考](https://uniapp.dcloud.io/tutorial/renderjs)
- App and web provide renderjs, so that browser-specific libraries can also be used in App and web, [Reference](https://uniapp.dcloud.io/tutorial/renderjs)
- 支持 NPM 包管理系统，[参考](http://uniapp.dcloud.io/tutorial/page-script#npm支持)
- Support NPM package management system, [Reference](http://uniapp.dcloud.io/tutorial/page-script#npm%E6%94%AF%E6%8C%81)
- 支持 mpvue 项目及组件，[参考](http://ask.dcloud.net.cn/article/34945)
- Support mpvue projects and components, [Reference](http://ask.dcloud.net.cn/article/34945)
- 支持原生插件，见插件市场：[https://ext.dcloud.net.cn](https://ext.dcloud.net.cn)
- Support native plug-ins, see plug-in market: [https://ext.dcloud.net.cn](https://ext.dcloud.net.cn)
- 支持App原生工程里嵌入uni小程序sdk。
- Support for embedding uni applet sdk in App native project.


**uni-app 支持的手机版本最低到多少？**
**What is the minimum mobile phone version supported by uni-app?**
1. Web端：uni-app没有限制，同vue2和vue3自身能支持的浏览器版本
1. Web side: uni-app has no restrictions, the same browser version that vue2 and vue3 can support themselves
2. 小程序端：uni-app没有限制，同该小程序自身能支持的最低平台
2. Mini program side: uni-app has no restrictions, the same as the minimum platform that the applet itself can support
3. App端：
3. App side:
	- Vue2: Android4.4+、iOS9+。Android4.4已经是2013年发布的手机了。
	- Vue2: Android4.4+, iOS9+. Android 4.4 is already a mobile phone released in 2013.
	- Vue3: 支持的范围是：Android >=5 （使用nvue和vue有区别。某些老国产Android5的rom无法动态升级Android system webview，此时如果使用vue页面需搭配x5内核） , iOS >= 10 
	- Vue3: The supported range is: Android >=5 (There is a difference between using nvue and vue. Some old domestic Android5 roms cannot dynamically upgrade the Android system webview. If you use the vue page at this time, you need to use the x5 kernel) , iOS >= 10

**uni-app成熟度高吗？**
**Is uni-app mature?**

```uni-app```在2018年夏天推出，目前版本成熟，生态资源丰富，是当今主流的开发框架，案例众多，手机端引擎月活已经突破10亿！
```uni-app``` was launched in the summer of 2018. The current version is mature and the ecological resources are rich. It is the mainstream development framework today. There are many cases, and the monthly activity of the mobile engine has exceeded 1 billion!


**uni-app的社区活跃吗？**
**Is the community of uni-app active?**

加入```uni-app```的群就知道，几十个QQ/微信群每天数万条聊天记录，非常活跃。论坛里每天数百个帖子。
Join the ``uni-app```` group to know that there are dozens of QQ/WeChat groups with tens of thousands of chat records every day, which are very active. Hundreds of posts every day in the forum.

插件市场内容也非常丰富，各种轮子方便可用。[https://ext.dcloud.net.cn/](https://ext.dcloud.net.cn/)，并且很多轮子的uni-app版，性能功能都强于微信小程序版。
The plug-in market is also very rich in content, and various wheels are easily available. [https://ext.dcloud.net.cn/](https://ext.dcloud.net.cn/), and the uni-app version of many wheels has stronger performance functions than the WeChat applet version.

基于```uni-app```的三方培训也很多。腾讯课堂官方亲自为uni-app制作了课程，各大培训网站均有uni-app的培训课程。
There are also many tripartite training based on ``uni-app``. Tencent Classroom officials have personally produced courses for uni-app, and all major training websites have uni-app training courses.


**DCloud是家什么公司，是否可信赖**
**What company is DCloud and is it trustworthy**

```DCloud```从2013年开始做HBuilder，目前900万前端开发者在使用```DCloud```的开发工具，HBuilder百度指数超过sublime、webstorm等全球知名工具。是中国唯一一家成功的开发工具厂商。
```DCloud``` started HBuilder in 2013. Currently, 9 million front-end developers are using ```DCloud``` development tools. HBuilder Baidu index exceeds that of sublime, webstorm and other world-renowned tools. It is the only successful development tool manufacturer in China.

```DCloud```是明星创业公司，融资已经过了C轮，且均为知名VC或战略投资人。
````DCloud``` is a star startup company, and the financing has passed the C round, and all of them are well-known VC or strategic investors.

```DCloud```是HTML5中国产业联盟的发起单位和秘书单位。该联盟隶属于工信部信通院标准所。
````DCloud``` is the initiator and secretary of the HTML5 China Industry Alliance. The alliance is affiliated to the Standards Institute of the Ministry of Industry and Information Technology.

```DCloud```产品中使用的HTML5Plus规范，为联盟的标准规范而非私有api。
The HTML5Plus specification used in the ``DCloud``` product is a standard specification of the alliance rather than a private API.

```DCloud```的产品技术一直引领业内，2015年就上线业内第一个"小程序"：DCloud流应用。随后DCloud广泛推动业内各大公司上线"小程序"，普及该技术广泛应用。
The product technology of ```DCloud``` has always been leading the industry. In 2015, the industry's first "mini program" was launched: DCloud streaming application. Subsequently, DCloud widely promoted major companies in the industry to launch "mini programs" and popularized the widespread application of this technology.

阿里小程序IDE官方内嵌`uni-app`、腾讯课堂官方录制`uni-app`培训视频、华为腾讯阿里字节跳动京东等众多一线公司使用uni-app，uni-app没有让他们失望，也不会让你失望。
Alibaba Mini Program IDE officially embeds `uni-app`, Tencent Classroom officially recorded `uni-app` training videos, Huawei, Tencent, Alibaba, ByteDance, JD.com and many other first-tier companies use uni-app. uni-app did not disappoint them, and Will not disappoint you.

**App打包必须上传DCloud云端吗？代码会泄露吗？**
**Does App packaging have to be uploaded to DCloud Cloud Service? Will the code be leaked out?**

代码可以云打包，也可以本地打包。
Code can be packaged in the cloud or locally.

使用云打包时有两种模式：
There are two modes when using cloud packaging:
1. 安心打包
1. Pack with ease
安心打包不会上传开发者的证书、代码，[详见](https://ask.dcloud.net.cn/article/37979)。
Pack with ease does not upload the developer's certificate and code, [See details](https://ask.dcloud.net.cn/article/37979).
2. 传统云打包
2. Traditional cloud packaging
传统云打包仅适合没有mac电脑但需要打iOS包的开发者。在这种情况下，代码和证书会上传到DCloud的mac打包服务器，但打包后立即删除，DCloud不会持久化保存。
Traditional cloud packaging is only suitable for developers who don't have mac computers but need iOS packaging. In this case, codes and certificates will be uploaded to the mac packaging server of DCloud, but will be deleted immediately after packaging. DCloud will not persistently save them.

DCloud是一家正规公司，已通过等保三级认证（证书编号：11010813802-20001），珍惜自己的名誉。之所以提供云打包，是方便不熟悉原生的前端工程师直接生成App安装包。包括让没有mac电脑的工程师也可以打出iOS的包。
DCloud is a regular company and has passed the third-level certification of the guarantee (certificate number: 11010813802-20001), cherishing its own reputation. The reason why cloud packaging is provided is to facilitate the direct generation of App installation packages by front-end engineers who are not familiar with native. Including allowing engineers without a Mac computer to type iOS packages.

**DCloud提供哪些技术支持？碰到框架bug影响业务怎么办？**
**What technical support does DCloud provide? What if encountering framework bugs that affects the business?**

```uni-app``` 是DCloud全力打造的重点产品，不是非专业公司的KPI项目。不会因为某些负责人的流动导致框架烂尾。
```uni-app``` is a key product that DCloud strives to build, not a KPI project for non-professional companies. The framework will not be unfinished due to the flow of some responsible persons.
```uni-app``` 的github上的dev分支是频繁更新的，可随时修复bug。并且作为开源产品，开发者也可以修改源码。
The dev branch on github of ``uni-app```` is updated frequently and bugs can be fixed at any time. And as an open source product, developers can also modify the source code.
```uni-app``` 的app引擎，支持原生扩展，只要你会原生扩展，就不怕app引擎有限制，大不了自己补一个原生插件进去。
```uni-app```'s app engine supports native extensions. As long as you can natively extend, you are not afraid of the limitations of the app engine. It's a big deal to add a native plug-in.
```uni-app``` 开发小程序，无需依赖微信等平台升级。它们升级后，uni-app是可以直接使用的，不需要等待uni-app升级才能使用微信的新功能。
```uni-app``` Develop small programs without relying on platform upgrades such as WeChat. After they are upgraded, the uni-app can be used directly, and there is no need to wait for the uni-app upgrade to use the new features of WeChat.

开发者碰到问题，可以通过如下途径进行反馈交流：
If developers encounter problems, they can provide feedback through the following channels:
- ask社区：[https://ask.dcloud.net.cn/explore/category-12](https://ask.dcloud.net.cn/explore/category-12)
- ask community: [https://ask.dcloud.net.cn/explore/category-12](https://ask.dcloud.net.cn/explore/category-12)
- QQ群：参考官网左侧导航显示的QQ群列表
- QQ group: refer to the list of QQ groups displayed in the left navigation of the official website

另外，如果您确实需要商业化的保障才安心，也可以申请付费技术支持。[参考](https://ask.dcloud.net.cn/article/13015)
In addition, if you really need commercial protection for peace of mind, you can also apply for paid technical support. [Reference](https://ask.dcloud.net.cn/article/13015)

**大型互联网公司发布的开源框架，是不是更有影响力？**
**Are the open source frameworks released by large Internet companies more influential?**

大型互联网公司在自用某个项目时，解决了某个问题，把它剥离出来开源，这个是众多大公司开源项目的来源和初衷。
When a large Internet company uses a certain project for itself, it solves a certain problem and strips it out to open source. This is the source and original intention of many large companies' open source projects.

而之所以把内部自用的框架开源出来，基本是为了在技术圈塑造形象和威望。对团队而言，有助于招聘；对负责人个人而言，有助于晋升和提升名气。
The reason why the internal self-use framework is open-sourced is basically to shape the image and prestige in the technical circle. For the team, it is helpful for recruitment; for the person in charge, it is helpful for promotion and promotion.

这类开源项目被戏称为KPI项目，往往逃不开4个魔咒：
Such open source projects are dubbed KPI projects, and often cannot escape four curses:
1. 很多项目开源后一旦取得成绩，负责人就升职调岗，或者因为其他原因最初立项负责人离职，于是之前的开源项目就慢慢变凉。
1. Once many projects are open-sourced, once they have achieved results, the person in charge will be promoted or transferred, or the person in charge of the initial project resignation for other reasons, so the previous open-source projects will gradually cool down.
2. 其设计初衷是为公司内部使用的，不是站在广泛的开发者需求角度设计的，其他开发者使用时会遇到各种问题。
2. The original intention of its design is for the company's internal use, not from the perspective of a wide range of developers' needs. Other developers will encounter various problems when using it.
3. 大型互联网公司的主业都是toC的，而不是to开发者。投很多资源持续维护这些开源项目并不是其公司目标，也不会有回报。
3. The main business of large Internet companies is toC, not to developers. It is not the company's goal to invest a lot of resources in maintaining these open source projects on an ongoing basis, and it will not pay off.
4. 优秀的程序员和优秀的开发框架设计者是2个层面的问题，不是说某些互联网大厂的前端技术人员水平不足，而是他们缺少面向开发者设计产品的经验，这种经验需要长期为开发者提供服务的团队才能具备。经验不足者设计的产品不会好用。
4. Excellent programmers and excellent development framework designers are two-level problems. It is not that the front-end technical personnel of some large Internet companies are insufficient, but that they lack experience in designing products for developers. This experience requires Only teams that provide services to developers for a long time can have it. Products designed by inexperienced people will not work well.

而```DCloud```这家公司就是为开发者而生的，优秀的人才和资源全部是为开发者服务的，产品立项之初广泛调研不同开发者的需求，产品发布后持续迭代，让开发者们使用的更便利。
And ``DCloud`` is a company born for developers. Excellent talents and resources are all for developers. At the beginning of the product project, the needs of different developers were extensively investigated. After the product was released, it continued to iterate. Make it easier for developers to use.
