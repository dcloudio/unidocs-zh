### 宽屏适配指南
### Widescreen Adaptation Guide

uni-app是以移动为先的理念诞生的。从uni-app 2.9起，提供了PC等宽屏的适配方案，完成了全端统一。
uni-app was born with the concept of mobile first. For uni-app 2.9+, the widescreen adaptation scheme for PC and other devices has been provided to achieve all-side unification.

PC适配和屏幕适配略有差异。PC适配包含`宽屏适配`和`uni-app内置组件适配PC`两方面的工作。
There is slight difference between PC adaptation and screen adaptation. PC adaptation includes two aspects of work: `Widescreen adaptation` and `uni-app build-in component adaptive PC`.

uni-app内置组件的PC适配，又包括`PC交互习惯的UI调整`和`非webkit浏览器适配`这两部分。这块工作不在本文的讨论范围内，尤其是开发者在PC端可以随意使用普通html元素和组件，不局限于uni-app内置组件。所以本文重点讨论屏幕适配。
PC adaptation of uni-app built-in components also includes two aspects: `UI adaption to the PC interaction habits` and `Non-webkit browser adaption`. However, this aspect is beyond the scope of this article. Especially, the developers can freely use the ordinary html elements and components at the PC side, not limited to the built-in components of uni-app. Therefore, this article focuses on the screen adaptation.

uni-app提供的屏幕适配方案，包括3部分：
The screen adaptation scheme provided by uni-app consists of 3 parts:

#### 1. 页面窗体级适配方案：leftWindow、rightWindow、topWindow
#### 1. Page and window level adaptation scheme: leftwindow, rightwindow and topwindow
以目前手机屏幕为主window，在左右上，可新扩展 leftWindow、rightWindow、topWindow，这些区域可设定在一定屏幕宽度范围自动出现或消失。这些区域各自独立，切换页面支持在各自的window内刷新，而不是整屏刷新。
With the current mobile phone screen as the main window, the new created leftWindow, rightWindow and topWindow on the left, right and top of the window can be set to appear or disappear automatically within a certain screen width range. These areas are independent. For page shifting, the respective windows, instead of the whole screen, can be refreshed.

各个window之间可以交互通信。
Interactive communication among these windows are supported.

这里有若干案例：
- DCloud开发者web控制台：[http://dev.dcloud.io/](http://dev.dcloud.io/)
- uniCloud Web控制台：[https://unicloud.dcloud.net.cn/](https://unicloud.dcloud.net.cn/)

还有一批开源示例：
- hello uni-app：[https://hellouniapp.dcloud.net.cn/](https://hellouniapp.dcloud.net.cn/)
- 分栏式的新闻模板：[https://static-mp-08d051ca-bb38-4570-b781-086c1b7c0360.next.bspapp.com/](https://static-mp-08d051ca-bb38-4570-b781-086c1b7c0360.next.bspapp.com/)，这个示例对应的源码在：[https://github.com/dcloudio/uni-template-news](https://github.com/dcloudio/uni-template-news)

新闻示例项目，预览地址https://static-7d133019-9a7e-474a-b7c2-c01751f00ca5.bspapp.com/#/显示The requested file was not found on this server.
News sample project, preview address https://static-7d133019-9a7e-474a-b7c2-c01751f00ca5.bspapp.com/#/ shows The requested file was not found on this server.


以上示例建议使用最新版的chrome、Safari、或firefox访问。可以在PC模式和手机模式分别体验。以上示例源码的运行需使用HBuilderX 2.9+
It is suggested to use the latest version of Chrome, Safari, or Firefox to run the above examples. You can experience it in PC mode and mobile phone mode respectively. HBuilderX 2.9+ is required to run the above example source code

这些例子特点如下：
These examples have the following characteristics:
- hello uni-app使用了topWindow和leftWindow，分为上左右3栏。新闻模板使用了rightWindow区域，分为左右2栏。宽屏下点击左边的列表在右边显示详情内容。而窄屏下仍然是点击列表后新开一个页面显示详情内容。
- Hello uni-app provides the topWindow and leftWindow, which are divided into top, left and right columns. The news template provides the rightWindow, which is divided into left and right columns. Under the widescreen, the details are displayed on the right when you click on the item on the left list. While under the narrow screen, the details are displayed by a new page opened after clicking on the item on the left list.
- leftWindow或rightWindow 里的页面是复用的，不需要重写新闻详情页面，支持把已有详情页面当组件放到 leftWindow或rightWindow 页面中。
- Pages in leftWindow or rightWindow are reusable, so that there is no need to rewrite the news details page. It is supported to put the existing details page into the leftWindow or rightWindow pages as a component.

这套方案是已知的、最便捷的分栏式宽屏应用适配方案。
This scheme is known to be the most convenient adaptation scheme for column-based widescreen applications.

__H5 宽屏下 tabBar(选项卡) 的显示与隐藏__
__Display and hiding of tabBar under H5 widescreen__

如果在 PC 上不想显示 tabbar 页面可以参考 hello-uniapp，在 app 的首页加载时跳转一个 非tabbar 页, [hello-uniapp](https://hellouniapp.dcloud.net.cn/) 的隐藏 tabbar 不是媒体查询实现的，当前页不是 tabbar 页面（是pages/component/view/view页），所以没有显示tabbar。
If you don not want to display a tabbar page on a PC, please refer to hello-uniapp, and jump to a non-tabbar page when the homepage of the app is loaded. The hidden tabbar of [hello-uniapp](https://hellouniapp.dcloud.net.cn/) is not realized by media query, and the current page is not tabbar page (it is pages/component/view/view page), so the tabbar is not displayed.

如果是想在有 leftwindow 等窗体的时候，隐藏 tabar 页面的 tabbar，可以用 css 实现（好处是可以和leftwindow等窗体联动）：
If you want to hide the tabbar on the tabBar page with the leftwindow displayed, the css can be used (the interaction with leftwindow and others is an advantage):

```css
  .uni-app--showleftwindow + .uni-tabbar-bottom {
  	display: none;
  }
```




leftWindow等配置，在pages.json里进行。文档见：[https://uniapp.dcloud.net.cn/collocation/pages?id=topwindow](https://uniapp.dcloud.net.cn/collocation/pages?id=topwindow)
The leftWindow and others are configured in pages.json. See the document on: [https://uniapp.dcloud.net.cn/collocation/pages? id=topwindow](https://uniapp.dcloud.net.cn/collocation/pages?id=topwindow)

pages.json 配置样例
Configuration example of pages.json

```json
{
  "globalStyle": {
    
  },
  "topWindow": {
    "path": "responsive/top-window.vue", // 指定 topWindow 页面文件
    "style": {
      "height": "44px"
    }
  },
  "leftWindow": {
    "path": "responsive/left-window.vue", // 指定 leftWindow 页面文件
    "style": {
      "width": 300
    }
  },
  "rightWindow": {
    "path": "responsive/right-window.vue", // 指定 rightWindow 页面文件
    "style": {
      "width": "calc(100vw - 400px)" // 页面宽度
    },
    "matchMedia": {
      "minWidth": 768 //生效条件，当窗口宽度大于768px时显示
    }
  }
}
```


- leftWindow等方案的使用教程
- Tutorials of schemes for leftWindow and others

如果已经有了一个为小屏设计的uni-app，在使用leftWindow等窗体适配大屏时，需理清一个思路：现有的小屏内容，放在哪个window里？
If there is a uni-app designed for small screen at hand and it is intended to use leftwindow and others to adapt to a large screen, you need to clarify which window the content of the existing small screen should be placed in?

如果应用的首页是列表，二级页是详情，此时适合的做法是，将原有的小屏列表作为主window，在右边扩展rightWindow来显示详情。
If the parent page of the application is a list and the child page is the details, it is appropriate to use the original small-screen list as the main window and extend the rightWindow to display the details on the right.

以新闻示例项目为例，预览地址[https://static-mp-08d051ca-bb38-4570-b781-086c1b7c0360.next.bspapp.com/](https://static-mp-08d051ca-bb38-4570-b781-086c1b7c0360.next.bspapp.com/)。这个项目的源码已经内置于HBuilderX 2.9中，新建uni-app项目时选择新闻/资讯模板。

首先在这个项目的`pages.json`文件中，配置[`rightWindow`选项](https://uniapp.dcloud.net.cn/collocation/pages?id=rightwindow)，放置一个新页面`right-window.vue`。
First, configure [`rightWindow`option](https://uniapp.dcloud.net.cn/collocation/pages?id=rightwindow) in the `pages.json` file of this project, and place a new page `right-window.vue`.
```json
# pages.json
"rightWindow": {
    "path": "responsive/right-window.vue",
    "style": {
      "width": "calc(100vw - 450px)"
    },
    "matchMedia": {
      "minWidth": 768
    }
  }
```

`rightWindow`对应的页面不需要重写一遍新闻详情的页面逻辑，只需要引入之前的详情页面组件（详情页面`/pages/detail/detail`可自动转化为`pages-detail-detail`组件使用）。
The page corresponding to `rightWindow` does not need to rewrite the page logic of news details, but only needs to introduce the previous detail page component (details page `/pages/detail/detail` can be automatically converted into `pages-detail-detail` component).

```html
<!--responsive/right-window.vue-->
<template>
  <view>
    <!-- 这里将 /pages/detail/detail.nvue 页面作为一个组件使用 -->
    <!-- Here, the /pages/detail/detail.nvue page is used as a component -->
    <!-- 路径 “/pages/detail/detail” 转为 “pages-detail-detail” 组件 -->
    <!-- The path "/pages/detail/detail" is transformed to the component "pages-detail-detail" -->
    <pages-detail-detail ref="detailPage"></pages-detail-detail>
  </view>
</template>

<script>
  export default {
    created(e) {
      //监听自定义事件，该事件由详情页列表的点击触发
      // listen to the custom event, which is triggered by the click on the list in details page
      uni.$on('updateDetail', (e) => {
        // 执行 detailPage组件，即：/pages/detail/detail.nvue 页面的load方法
        // Execute the detailPage component, i.e., the load method of :/pages/detail/detail.nvue page
        this.$refs.detailPage.load(e.detail);
      })
    },
    onLoad() {},
    methods: {}
  }
</script>
```

然后在新闻列表页面，处理点击列表后与rightWindow交互通信的逻辑。
Then, on the news list page, deal with the logic of interactive communication with rightWindow after clicking the list.

```js
// pages/news/news-page.nvue
goDetail(detail) {
	if (this._isWidescreen) { //若为宽屏，则触发右侧详情页的自定义事件，通知右侧窗体刷新新闻详情
		uni.$emit('updateDetail', {
			detail: encodeURIComponent(JSON.stringify(detail))
		})
	} else { // 若为窄屏，则打开新窗体，在新窗体打开详情页面
		uni.navigateTo({
			url: '/pages/detail/detail?query=' + encodeURIComponent(JSON.stringify(detail))
		});
	}
},

```

可以看到，无需太多工作量，就可以快速把一个为手机窄屏开发的应用，快速适配为PC宽屏应用。并且以后的代码维护，仍然是同一套，当业务迭代时不需要多处升级。
It can be seen that an application developed for narrow screen of mobile phone can be quickly adapted to PC widescreen application without too much workload. And the future code maintenance is conducted on the same one to streamline the future business iterates.

rightWindow适用于分栏式应用，那leftWindow一般用于什么场景？
RightWindow is suitable for column application. What scene is the leftWindow usually used for?

leftWindow比较适合放置导航页面。如果你的应用首页有很多tab和宫格导航，那么可以把它们重组，放在leftWindow作为导航。之前在手机竖屏上依靠多级tab和宫格导航的场景，可以在leftWindow里通过tree或折叠面板方式导航。
LeftWindow is more suitable for placing the navigation page. If there are many tabs and grid navigation on the home page of your application, they can be reorganized and put in the leftWindow as navigation. For the scene relying on multi-level tabs and grid navigation on the portrait screen of mobile phone previously, the tree or folding panel in the leftWindow can be used instead.

leftWindow除了适用于手机应用适配大屏，也适用于重新开发的PC应用，尤其是PC Admin管理控制台。
LeftWindow is not only suitable for mobile phone applications to be adapted to larger screen, but also suitable for redeveloping the PC applications, especially PC Admin management console.

DCloud官方基于uni-app的pc版，推出了unicloud Admin：[https://uniapp.dcloud.net.cn/uniCloud/admin](https://uniapp.dcloud.net.cn/uniCloud/admin)
DCloud officially launched unicloud Admin based on the pc version of uni-app: [https://uniapp.dcloud.net.cn/uniCloud/admin](https://uniapp.dcloud.net.cn/uniCloud/admin)

目前的leftWindow、rightWindow、topWindow 只支持web端。计划后续在Pad App上实现该配置。小程序无法支持该配置。
The current leftWindow, rightWindow, and topWindow only support the web side. It is planned to implement this configuration on the Pad App in the future. The applet cannot support this configuration.


#### 2. 组件级适配方案：match-media组件
#### 2. Component-level adaptation scheme: match-media component

leftWindow等方案是页面窗体级适配方案。适于独立的页面。那么在同一个页面中，是否可以适配不同屏宽？当然可以，此时可以使用组件级适配方案。
For leftwindow and others, the page and window level adaptation scheme are used. Suitable for standalone pages. Whether one page is able to adapt to different screen widths? Yes, of course. Component-level adaptation scheme can be used in such case.

uni-app提供了 [match-media组件](https://uniapp.dcloud.net.cn/component/match-media) 和配套的 [uni.createMediaQueryObserver](https://uniapp.dcloud.net.cn/api/ui/media-query-observer) 方法。
uni-app provides the [match-media component](https://uniapp.dcloud.net.cn/component/match-media) and the supporting method [uni.createMediaQueryObserver](https://uniapp.dcloud.net.cn/api/ui/media-query-observer).

这是一个媒体查询适配组件，可以更简单的用于动态屏幕适配。
This is a media query and adaptation component that can be used for dynamic screen adaptation more easily.

在`match-media`组件中放置内容，并为组件指定一组 media query 媒体查询规则，如屏幕宽度。运行时，如屏幕宽度满足查询条件，这个组件就会被展示，反之则隐藏。
Place content in the `match-media` component, and specify a set of media query rules for the component, such as screen width. At runtime, if the screen width meets the query criteria, this component will be displayed, or otherwise it will be hidden.

`match-media`组件的优势包括：
The `match-media` components has the following advantages:
1. 开发者能够更方便、显式地使用 Media Query 能力，而不是耦合在 CSS 文件中，难以复用。
1. Developers can use Media Query more conveniently and explicitly, instead of being coupled in CSS files, less reusable.
2. 能够在模板中结合数据绑定动态地使用，不仅能做到组件的显示或隐藏，在过程式 API 中可塑性更高，例如能够根据尺寸变化动态地添加 class 类名，改变样式。
2. It can be used dynamically in the template with data binding, be able to be displayed or hidden as appropriate, and show higher plasticity in procedural API. For example, it can dynamically add class names and change styles according to size variation.
3. 能够嵌套式地使用 Media Query 组件，即能够满足局部组件布局样式的改变。
3. The Media Query components can be implemented in a nested way, i.e., the partial layout style of the components can be adjusted.
4. 组件化之后，封装性更强，能够隔离样式、模版以及绑定在模版上的交互事件，还能够提供更高的可复用性。
4. After componentization, the encapsulation is enhanced, able to isolate the styles, templates and interactive events bound to the templates, and provide higher reusability.

它的详细文档参考：[https://uniapp.dcloud.net.cn/component/match-media](https://uniapp.dcloud.net.cn/component/match-media)
For its detailed documentation, please refer to: [https://uniapp.dcloud.net.cn/component/match-media](https://uniapp.dcloud.net.cn/component/match-media)

当然，开发者也可以继续使用css媒体查询来适配屏幕，或者使用一些类似mobilehide、pcshow之类的css样式。
Certainly, developers can continue to use css media queries to adapt the screen, or use some css styles such as mobilehide and pcshow instead.

uni-app的屏幕适配推荐方案是运行时动态适配，而不是为PC版单独条件编译（虽然您也可以通过自定义条件编译来实现单独的PC版）。这样设计的好处是在ipad等设备的浏览器上可以方便的横竖屏切换。
It is recommended to use the dynamic screen adaptation scheme at runtime for uni-app, rather than independent conditional compilation for PC version (although the latter is realizable with customized conditions). The advantage of such design is that you can easily switch between landscape and portrait screens of the browsers on the devices like iPad.

#### 3. 内容缩放拉伸的处理
#### 3. Processing of content scaling and stretching

除了根据屏宽动态显示和隐藏内容，其实还有一大类屏幕适配需求，即：内容不会根据屏宽动态显示隐藏，而是缩放或拉伸。
In addition to dynamically displaying and hiding content based on the screen width, there is also a major requirement for screen adaptation, i.e.: content scaling and stretching other than dynamically displaying and hiding according to the screen width.

具体来说，内容适应又有两种细分策略：
Specifically, there are two strategies for content adaptation:
1. 局部拉伸：页面内容划分为固定区域和长宽动态适配区域，固定区域使用固定的px单位约定宽高，长宽适配区域则使用flex自动适配。当屏幕大小变化时，固定区域不变，而长宽适配区域跟着变化
1. Partial stretching: the page content can be divided into fixed area and length-width dynamic adaptation area. The fixed area uses the fixed value in px to specify the width and height, while the length-width adaptation area uses flex for automatic adaption. While the screen size changes, the fixed area remains the same, but the length-width adaptation area changes accordingly
2. 等比缩放：根据页面屏幕宽度缩放。rpx其实属于这种类型。在宽屏上，rpx变大，窄屏上rpx变小。
2. Equal scale: scale according to the width of the page screen. rpx actually belongs to this type. On the widescreen, rpx becomes larger; and on the narrow screen, rpx becomes smaller.

举个实际的例子，比如一个列表页面，左边有一个图标，右边是2行文字。
Take a practical example: there is a list page with an icon on the left and 2 lines of text on the right.
- 如果使用策略1，即局部拉伸，那么左边的图标部分固定一个宽高，右边的2行文字的大小也固定，但2行文字的宽度自适应，占满屏幕右侧的空间。也就是屏宽宽度变化后，只有2行文字的宽度在变化，其他一切不变。
- If strategy 1, partial stretching, is applied, fixed width and height are specified to the icon on the left, as well as the size of the 2 lines of text on the right, but the width of the latter will be adaptive, occupying the space on the right side of the screen. It means that, after the screen width changes, only the width of the 2 lines of text will change, but all others remain the same.
- 如果使用策略2，即等比缩放，那么整个列表均使用rpx，在宽屏上，图标变大、右边的2行文字变大，列表项行高变大。而在窄屏上，一切又都变小。
- If strategy 2, equal scaling, is applied, the whole list will use rpx. In that way, on the widescreen, the icon, the 2 lines of text on the right as well as the line height of the list item will become larger. On the narrow screen, all of them become smaller.

策略2省事，设计师按750px屏宽出图，程序员直接按rpx写代码即可。但策略2的实际效果不如策略1好。程序员使用策略1，分析下界面，设定好局部拉伸区域，这样可以有更好的用户体验。
Strategy 2 saves trouble because it just requires the designer to produce drawing based on the screen width of 750px and the programmer to write the code directly by rpx. But the actual effect of strategy 2 is not as good as that of strategy 1. Programmers utilizes strategy 1 to analyze the lower interface and set the partial stretching area, which allows for a better user experience.

这里需要对rpx的使用特别强调一下。
The use of rpx should be paid particular attention as follows.

在移动设备上也有很多屏幕宽度，设计师一般只会按照750px屏幕宽度出图。此时使用rpx的好处在于，各种移动设备的屏幕宽度差异不是很大，相对于750px微调缩放后的效果，尽可能的还原了设计师的设计。
There are many screen widths on the mobile devices, and designers usually only produce drawing by the screen width of 750px. The advantage of rpx in such cases is that the screen widths of various mobile devices do not differ greatly. The results after fine-tuning and scaling from 750px could restore the designer's design as much as possible.

但是，一旦脱离移动设备，在pc屏幕，或者pad横屏状态下，因为屏幕宽度远大于750了。此时rpx根据屏幕宽度变化的结果就严重脱离了预期，大的惨不忍睹。
However, once turning from the mobile device to the pc screen or pad landscape state, the screen width will be much larger than 750. Owing to that, the results of the rpx changed according to the screen width in such cases will be tremendously out of expectation.

为此，在uni-app 2.9+起，新增了 rpx 按750px做基准屏宽的生效范围控制，并且将 rpx 的默认最大适配宽度设为了 960 px。
Therefore, from uni-app 2.9+ onwards, the effective range of rpx with the reference screen width as 750px has been added, and the default maximum adaptation width of rpx has been set to 960 px.

也就是设计师按750px出具的设计图，可适配的最大屏幕宽度为960px，在这个范围内，rpx可以根据屏幕宽度缩放。一旦超过960，rpx再根据屏幕宽度缩放就变的没有意义了。按如下配置，在超过960宽的屏幕上，会按375px作为基准宽度，这是最大程度上保持界面不失真的策略。
That is, as for the design drawing in 750px produced by the designer, its adaptable maximum screen width is 960px within which the rpx can be scaled according to the screen width. Once exceeding 960, it turns meaningless for rpx to scale according to the screen width. In terms of the following configurations, on a screen over 960 wide, 375px will be used as the reference width, which is the strategy to keep the interface undistorted to the greatest extent.

当然这些配置您都可以自己定义调整，在 pages.json 的 globeStyle 里配置 rpx 的如下参数。
Of course, you can define and adjust these configurations by yourself. The following parameters of rpx can be configured in the globeStyle of pages.json.

```json
{
  "globalStyle": {
    "rpxCalcMaxDeviceWidth": 960, // rpx 计算所支持的最大设备宽度，单位 px，默认值为 960
    "rpxCalcBaseDeviceWidth": 375, // rpx 计算使用的基准设备宽度，设备实际宽度超出 rpx 计算所支持的最大设备宽度时将按基准宽度计算，单位 px，默认值为 375
    "rpxCalcIncludeWidth": 750 // rpx 计算特殊处理的值，始终按实际的设备宽度计算，单位 rpx，默认值为 750
  },
}
```

通过上述配置中的前2个，即rpxCalcMaxDeviceWidth和rpxCalcBaseDeviceWidth，即可有效解决使用了rpx后，在宽屏下界面变的奇大无比的问题。如果你不需要特别定义这2个参数的数值，则无需在`pages.json`中配置它们，保持默认的960和375即可。
The first 2 of the above configurations, namely rpxCalcMaxDeviceWidth and rpxCalcBaseDeviceWidth, solved the problem that the interface becomes extremely large in widescreen after rpx is used. If you do not need to specifically define the values of these two parameters, do not configure them in `pages.json` and just keep the defaults of 960 and 375.

但是，rpx的最大适配宽度被限定后，会带来一个新问题：如果您的代码中把750rpx当做100%来使用（官方强烈不推荐这种写法，即便是nvue不支持百分比，也应该使用flex来解决撑满问题），此时不管屏幕宽度为多少，哪怕超过了960px，您的预期仍然是要占满整个屏幕宽度，但如果按rpxCalcBaseDeviceWidth的375px的策略执行将不再占满屏宽。
However, after the maximum adaptation width of rpx is limited, a new problem occurs: if 750rpx is used as 100% in your code (the official strongly deprecate such writing mode. Even if nvue does not support percentage, flex should be used to solve the problem of fullness), regardless of the screen width (even if it exceeds 960px), your expectation is still to occupy the entire screen width. However, the 375px strategy of rpxCalcBaseDeviceWidth can't meet this requirement.

此时您有两种解决方案，一种是修改代码，将里面把rpx当做百分比的代码改掉；另一种是配置rpxCalcIncludeWidth，设置某个特定数值不受rpxCalcMaxDeviceWidth约束。如上述例子中的"rpxCalcIncludeWidth": 750，代表着如果写了 750rpx，始终将按屏幕宽度百分百占满来计算。
In such case, there are two solutions: one is to modify the code to change the code deeming rpx as percentage; the other is to configure rpxCalcIncludeWidth and set a certain numerical value being not constrained by the rpxCalcMaxDeviceWidth. For example, "rpxCalcIncludeWidth": 750 in the above example means that if 750rpx is written, it will always be calculated as 100% of the full screen width.

- 关于 rpx 转 px
- About rpx to px

不少开发者之前对rpx的使用过于没有节制，后来为了适配宽屏，想要改用“局部拉伸：页面内容划分为固定区域和长宽动态适配区域”的策略，此时将回归px。
Many developers used rpx excessively before, but later, in order to adapt to the widescreen, they wanted to switch to the strategy of "partial stretching: divide the page content into fixed areas and length-width dynamic adaptation areas", back to px.

比如[DCloud社区的宽屏适配示例](https://static-1afcc27f-ce2f-4a6d-9416-c65a6f87d24e.bspapp.com/#/)和[新闻模板](https://static-7d133019-9a7e-474a-b7c2-c01751f00ca5.bspapp.com)都没有使用rpx。
For example, neither [Example of widescreen adaptation in DCloud community](https://static-1afcc27f-ce2f-4a6d-9416-c65a6f87d24e.bspapp.com/#/) nor [News template](https://static-7d133019-9a7e-474a-b7c2-c01751f00ca5.bspapp.com) uses rpx.

如果想把rpx转px，可以在源码里正则替换，也可以使用三方已经写好的单位转换库。下面介绍下三方库的用法。
If you want to convert rpx to px, you can replace it regularly in the source code, or use the unit conversion library written by the third party. The following describes the usage of the third party library.

项目根目录新增文件 `postcss.config.js`，内容如下。则在编译时，编译器会自动转换rpx单位为px。
Add files to project root directory `postcss.config.js`, with the content as following. During compiling, the compiler will automatically convert rpx to px unit.

** 注意：将rpx作为百分比的用法需要手动处理
** Note: the usage of rpx as percentage needs to be handled manually

```js
// postcss.config.js

const path = require('path')
module.exports = {
  parser: 'postcss-comment',
  plugins: {
    'postcss-import': {
      resolve(id, basedir, importOptions) {
        if (id.startsWith('~@/')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(3))
        } else if (id.startsWith('@/')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(2))
        } else if (id.startsWith('/') && !id.startsWith('//')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(1))
        }
        return id
      }
    },
    'autoprefixer': {
      overrideBrowserslist: ["Android >= 4", "ios >= 8"],
      remove: process.env.UNI_PLATFORM !== 'h5'
    },
    // 借助postcss-px-to-viewport插件，实现rpx转px，文档：https://github.com/evrone/postcss-px-to-viewport/blob/master/README_CN.md
    // With the help of postcss-px-to-viewport plug-in, the conversion from rpx to px can be realized. Document: https://github.com/evrone/postcss-px-to-viewport/blob/master/README_CN.md
    // 以下配置，可以将rpx转换为1/2的px，如20rpx=10px，如果要调整比例，可以调整 viewportWidth 来实现
    // With the following configuration, rpx can be converted into 1/2 px, such as 20rpx=10px. If you want to adjust the scale, you can adjust the viewportWidth to realize it.
    'postcss-px-to-viewport': {
      unitToConvert: 'rpx',
      viewportWidth: 200,
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'px',
      fontViewportUnit: 'px',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: undefined,
      include: undefined,
      landscape: false
    },
    '@dcloudio/vue-cli-plugin-uni/packages/postcss': {}
  }
}
```

#### 非webkit浏览器适配
#### Non-webkit browser adaptation

uni-app理论上不限定浏览器。在HBuilderX 2.9发版时，就新闻示例项目，在chrome、Safari、firefox、edge的最新版上均测试过，可以正常使用。
Theoretically, uni-app does not limit to any browser. Before the release of HBuilderX 2.9, the news example items were tested and passed on the latest editions of Chrome, Safari, Firefox and Edge browsers.

一般国内的浏览器，如360浏览器、搜狗浏览器，均支持chrome内核，只要版本够新，应该都可以访问。
Generally, the browsers used mostly in China, such as 360 browser and Sogou browser, all support the Chrome kernel. As long as proper new versions are used, the pages should be accessible.

如果你的应用在其他PC浏览器下异常，请检查自己代码的浏览器兼容问题。
If your application appears abnormal in other PC browsers, please check the browser compatibility of your own code.

如果你发现了uni-app框架层面、内置组件有浏览器兼容问题，欢迎在github上给我们提交pr。
If you find that there are browser compatibility problems about framework level or built-in components in uni-app, please submit pr to us on github.

一般情况下，只要基础框架没有浏览器兼容问题，那么组件层面的问题也可以通过更换组件来解决。当uni-app编译到PC浏览器端时，支持所有的vue组件，包含那些操作了dom、window的ui库，比如elementUI等。
Generally speaking, if there is no browser compatibility problem in the basic framework, the problems at the component level can be solved by replacing the components. After compiling the uni-app into the PC browser side, it supports all vue components, including the ui libraries that operate the doms and windows, such as elementUI.

#### 一个让手机版网页临时可用于pc浏览器的方案
#### A scheme to make the mobile version of web page temporarily available for pc browser

如果你的h5版已经开发完毕，还没来得及适配pc，但想在pc上先用起来。那么可以在pc网页里使用iframe，约定好宽度，在里面套用uni-app的窄屏版。
If the development of h5 version has been completed but pc adaptation not, you can do the followings to use it on PC temporarily. Use iframe in the pc webpage, specify the width, and apply the narrow screen version of uni-app in it.

当然还可以在iframe旁边放置二维码，提供手机版扫码地址，例如：
Of course, you can also place the QR code next to iframe to provide the scanning address of the mobile phone version. For example:

![](https://web-assets.dcloud.net.cn/unidoc/zh/hello-uni-pc.png)

#### 通过electron打包为windows、mac、linux客户端
#### Package it as windows, mac and linux clients through electron

有了宽屏适配，uni-app的应用就可以方便的通过electron打包为电脑客户端应用，windows、mac、linux均支持。
With widescreen adaptation, the applications of uni-app can be conveniently packaged as a PC client application through electron, which is supported by windows, mac and linux.

开发者可以随意调用electron的API，以调用更多操作系统的能力（为方便多端兼容，可以将这些特殊API写在自定义的条件编译里）
Developers can call electron's API at will to call more capabilities of the operating system (for multi-side compatibility, these special APIs can be written in custom conditional compilation).

插件市场有已经封装好的一些插件，详见：[https://ext.dcloud.net.cn/search?q=electron](https://ext.dcloud.net.cn/search?q=electron)
Plug-ins have been encapsulated in the market. See: [https://ext.dcloud.net.cn/search? q=electron](https://ext.dcloud.net.cn/search?q=electron)

#### 响应式布局组件：uni-row
#### Responsive layout component: uni-row

流式栅格系统，随着屏幕或视口分为 24 份，可以迅速简便地创建布局。
Streaming rid system, divided into 24 parts as per the screen or viewport, able to quickly and easily create the layout.

该插件将屏幕分为五个档位：`<768px`、`>=768px`、`>=992px`、`>=1200px`、`>=1920px`。
The plug-in divides the screen into five parts: `<768px`, `>=768px`, `>=992px`, `>=1200px`, `>=1920px`.

对应的可以使用`xs`、`sm`、`md`、`lg`、`xl`来控制在不同分辨率下的显示效果。详情可在插件市场查看。
Each corresponding part can control its display effect at different resolutions through `xs`, `sm`, `md`, `lg`, and `xl`. Details can be found on the plug-in market.

插件地址：https://ext.dcloud.net.cn/plugin?id=3958
Plug-in address: https://ext.dcloud.net.cn/plugin?id=3958
