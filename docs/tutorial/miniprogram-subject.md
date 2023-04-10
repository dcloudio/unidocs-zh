## 小程序自定义组件支持

`uni-app`在支持vue组件之外，也实现了对小程序自定义组件的兼容。

小程序组件不是vue组件，并且每家小程序都有自己的组件规范，比如微信小程序的组件是wxml格式。

小程序组件不是全端可用，支持度最广的微信小程序自定义组件，也只能支持微信小程序、app-vue、web，其他平台无法兼容。

如果需求上只需兼容有限平台，也可以使用小程序组件。否则仍然推荐使用vue组件。

**平台差异说明**

|平台|支持情况|小程序组件存放目录|
|---|---|---|
|H5|支持微信小程序组件（2.4.7+）|wxcomponents|
|App（不含nvue）|支持微信小程序组件|wxcomponents|
|微信小程序|支持微信小程序组件|wxcomponents|
|支付宝小程序|支持支付宝小程序组件|mycomponents|
|百度小程序|支持百度小程序组件|swancomponents|
|字节跳动小程序、飞书小程序|支持字节跳动小程序、飞书小程序组件|ttcomponents|
|QQ小程序|支持QQ小程序组件|wxcomponents|
|快手小程序|支持快手小程序组件|kscomponents|
|京东小程序|支持京东小程序组件|jdcomponents|

此文档要求开发者对各端小程序的**自定义组件**有一定了解，没接触过小程序**自定义组件**的可以参考：

- [微信小程序自定义组件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)
- [百度小程序自定义组件](https://smartprogram.baidu.com/docs/develop/framework/custom-component/)
- [支付宝小程序自定义组件](https://docs.alipay.com/mini/framework/custom-component-overview)
- [字节跳动小程序自定义组件](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/guide/developing-and-testing-miniApp/front-end/mini-app-framework/custom-component/component-constructor)
- [飞书小程序自定义组件](https://open.feishu.cn/document/uYjL24iN/ugTOugTOugTO)
- [QQ小程序自定义组件](https://q.qq.com/wiki/develop/miniprogram/frame/diy_components/)
- [快手小程序自定义组件](https://mp.kuaishou.com/docs/develop/frame/custom_comp/component_temp_style.html)
- [京东小程序自定义组件](https://mp-docs.jd.com/framework/customcomponent/)

**目录结构**

<pre v-pre="" data-lang="">
	<code class="lang-" style="padding:0">
┌─wxcomponents                  微信小程序自定义组件存放目录
│   └──custom                   微信小程序自定义组件
│		├─index.js
│		├─index.wxml
│		├─index.json
│		└─index.wxss
├─mycomponents                  支付宝小程序自定义组件存放目录
│   └──custom                   支付宝小程序自定义组件
│		├─index.js
│		├─index.axml
│		├─index.json
│		└─index.acss
├─swancomponents                百度小程序自定义组件存放目录
│   └──custom                   百度小程序自定义组件
│		├─index.js
│		├─index.swan
│		├─index.json
│		└─index.css
├─pages
│  └─index
│		└─index.vue
│
├─static
├─main.js
├─App.vue
├─manifest.json
└─pages.json
	</code>
</pre>

**使用方式**

在 ``pages.json`` 对应页面的 style -> usingComponents 引入组件：

```javascript
{
	"pages": [{
		"path": "index/index",
		"style": {
			// #ifdef APP-PLUS || H5 || MP-WEIXIN || MP-QQ
			"usingComponents": {
				"custom": "/wxcomponents/custom/index"
			},
			// #endif
			// #ifdef MP-BAIDU
			"usingComponents": {
				"custom": "/swancomponents/custom/index"
			},
			// #endif
			// #ifdef MP-ALIPAY
			"usingComponents": {
				"custom": "/mycomponents/custom/index"
			},
			// #endif
			"navigationBarTitleText": "uni-app"
		}
	}]
}

```

在页面中使用

```html
<!-- 页面模板 (index.vue) -->
<view>
    <!-- 在页面中对自定义组件进行引用 -->
    <custom name="uni-app"></custom>
</view>
```

**代码示例**

下面以微信小程序官方自定义组件示例 [miniprogram-slide-view](https://github.com/wechat-miniprogram/slide-view) 为例演示小程序自定义组件的使用方式。
其他组件使用示例见GitHub：[wxcomponents-template](https://github.com/dcloudio/uni-app/tree/master/examples/wxcomponents-template)。
插件市场有一个完整的``vant weapp`` 引用好的示例工程，详见[https://ext.dcloud.net.cn/plugin?id=302](https://ext.dcloud.net.cn/plugin?id=302)。

目录结构
<pre v-pre="" data-lang="">
	<code class="lang-" style="padding:0">
┌─components
├─wxcomponents
│   └──miniprogram-slide-view
│		├─index.js
│		├─index.wxml
│		├─index.json
│		└─index.wxss
│
├─pages
│  └─slide-view
│		└─slide-view.vue
│
├─static
├─main.js
├─App.vue
├─manifest.json
└─pages.json
	</code>
</pre>
pages.json
```json
{
    "pages": [
        {
        	"path": "slide-view/slide-view",
        	"style": {
        		"navigationBarTitleText": "slide-view",
        		"usingComponents": {
        			"slide-view": "/wxcomponents/miniprogram-slide-view/index"
        		}
        	}
        }
    ]
}
```
slide-view.vue
```html
<template>
	<view class='slide'>
		<slide-view width="750" height="110" slide-width="500">
			<view slot="left" class="l">
				<image src="/static/file_transfer.jpg" class="img"></image>
				<view class='text'>
					<view class='title'>文件传输助手</view>
					<view class='time'>7:00 PM</view>
				</view>
			</view>
			<view slot="right" class="r">
				<view class='read'>标为已读</view>
				<view class='delete'>删除</view>
			</view>
		</slide-view>
	</view>
</template>
<script>
	export default {}
</script>
<style>
	.slide {
		border-bottom: 1px solid #DEDEDE;
	}
	.l {
		background-color: white;
		height: 110rpx;
		width: 750rpx;
		display: flex;
		flex-direction: row;
	}
	.r {
		height: 110rpx;
		display: flex;
		direction: row;
		text-align: center;
		vertical-align: middle;
		line-height: 110rpx;
	}
	.read {
		background-color: #ccc;
		color: #fff;
		width: 350rpx;
	}
	.delete {
		background-color: red;
		color: #fff;
		width: 150rpx;
	}
	.img {
		width: 90rpx;
		height: 90rpx;
		border-radius: 10rpx;
		margin: 10rpx 15rpx;
	}
	.text {
		display: flex;
		flex-direction: row;
	}

	.title {
		margin-top: 15rpx;
		font-size: 33rpx;
	}
	.time {
		margin-top: 15rpx;
		color: #ccc;
		font-size: 25rpx;
		margin-left: 330rpx;
	}
</style>
```

**注意事项**

* 小程序组件需要放在项目特殊文件夹 ``wxcomponents``（或 mycomponents、swancomponents）。HBuilderX 建立的工程 ``wxcomponents`` 文件夹在 项目根目录下。vue-cli 建立的工程 ``wxcomponents`` 文件夹在 ``src`` 目录下。可以在 vue.config.js 中自定义其他目录
* 小程序组件的性能，不如vue组件。使用小程序组件，需要自己手动setData，很难自动管理差量数据更新。而使用vue组件会自动diff更新差量数据。所以如无明显必要，建议使用vue组件而不是小程序组件。比如某些小程序ui组件，完全可以用更高性能的uni ui替代。
* 当需要在 `vue` 组件中使用小程序组件时，注意在 `pages.json` 的 `globalStyle` 中配置 `usingComponents`，而不是页面级配置。
* 注意数据和事件绑定的差异，组件使用时应按照 `vue` 的数据和事件绑定方式
	- 属性绑定从 `attr="{{ a }}"`，改为 `:attr="a"`；从 `title="复选框{{ item }}"` 改为 `:title="'复选框' + item"`
	- 事件绑定从 `bind:click="toggleActionSheet1"` 改为 `@click="toggleActionSheet1"`，目前支付宝小程序不支持 `vue` 的事件绑定方式，具体参考：[支付宝小程序组件事件监听示例](https://github.com/dcloudio/uni-app/issues/917#issuecomment-653329693)
	- 阻止事件冒泡 从 `catch:tap="xx"` 改为 `@tap.native.stop="xx"`
	- `wx:if` 改为 `v-if`
	- `wx:for="{{ list }}" wx:key="{{ index }}"` 改为`v-for="(item,index) in list"`

详细的小程序转uni-app语法差异可参考文档[https://ask.dcloud.net.cn/article/35786](https://ask.dcloud.net.cn/article/35786)。

## WXS

WXS是一套运行在视图层的脚本语言，[微信端的规范详见](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxs/)。

它的特点是运行在视图层。当需要避免逻辑层和渲染层交互通信折损时，可采用wxs。

uni-app可以将wxs代码编译到微信小程序、QQ小程序、app-vue、H5上（`uni-app 2.2.5`及以上版本）

与wxs类似，百度小程序提供了Filter、阿里小程序提供了SJS，uni-app也支持使用这些功能，并将它们编译到百度和阿里的小程序端。不过它们的功能还不如wxs强大。此外头条系小程序自身不支持类似功能。

**平台差异说明**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√(不支持nvue)|√|√|SJS|Filter|x|√|

App端nvue解决此类需求，不应该使用wxs，而是使用bindingx。

**wxs示例**

以下是一些使用 WXS 的简单示例，要完整了解 WXS 语法，请参考[WXS 语法参考](https://developers.weixin.qq.com/miniprogram/dev/reference/wxs/)。本示例使用wxs响应`touchmove`事件，减少视图层与逻辑层通信，使滑动更加丝滑。

```html
<template>
	<view>
		<view class="area">
			<view @touchstart="test.touchstart" @touchmove="test.touchmove" class="movable">{{test.msg}}</view>
		</view>
	</view>
</template>
<script module="test" lang="wxs">
	var startX = 0
	var startY = 0
	var lastLeft = 50; var lastTop = 50
	function touchstart(event, ins) {
		console.log("touchstart")
	  var touch = event.touches[0] || event.changedTouches[0]
	  startX = touch.pageX
	  startY = touch.pageY
	}
	function touchmove(event, ins) {
	  var touch = event.touches[0] || event.changedTouches[0]
	  var pageX = touch.pageX
	  var pageY = touch.pageY
	  var left = pageX - startX + lastLeft
	  var top = pageY - startY + lastTop
	  startX = pageX
	  startY = pageY
	  lastLeft = left
	  lastTop = top
	  ins.selectComponent('.movable').setStyle({
	    left: left + 'px',
	    top: top + 'px'
	  })
		return false
	}
	module.exports = {
		msg: 'Hello',
	  touchstart: touchstart,
	  touchmove: touchmove
	}
</script>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
		}
	}
</script>

<style>
.area{
	position: absolute;
	width: 100%;
	height: 100%;
}
.movable{
	position: absolute;
	width: 100px;
	height: 100px;
	left: 50px;
	top: 50px;
	color: white;
	text-align: center;
	line-height: 100px;
	background-color: red;
}
</style>
```

支付宝小程序，百度小程序官方暂未支持事件响应，不过也可以使用对应的SJS、Filter过滤器实现一些数据处理的操作，以下代码展示了一个时间格式化的小功能

`index.vue`

```html
<template>
	<view>
		<view>
			{{timestr}} 是
		</view>
		<view>
			{{utils.friendlyDate(timestamp)}}
		</view>
	</view>
</template>
<script module="utils" lang="filter" src="./utils.filter.js"></script>
<script module="utils" lang="sjs" src="./utils.sjs"></script>

<script>
	export default {
		data() {
			return {
				timestr: '2019/08/22 10:10:10',
				timestamp: 0
			}
		},
		created() {
			this.timestamp = new Date(this.timestr).getTime()
		},
		methods: {
		}
	}
</script>
```

`utils.sjs` 与 `utils.filter.js` 内容一致

```js
export default {
	friendlyDate: (timestamp) => {
		var formats = {
			'year': '%n% 年前',
			'month': '%n% 月前',
			'day': '%n% 天前',
			'hour': '%n% 小时前',
			'minute': '%n% 分钟前',
			'second': '%n% 秒前',
		};
		var now = Date.now();
		var seconds = Math.floor((now - parseInt(timestamp)) / 1000);
		var minutes = Math.floor(seconds / 60);
		var hours = Math.floor(minutes / 60);
		var days = Math.floor(hours / 24);
		var months = Math.floor(days / 30);
		var years = Math.floor(months / 12);

		var diffType = '';
		var diffValue = 0;
		if (years > 0) {
			diffType = 'year';
			diffValue = years;
		} else {
			if (months > 0) {
				diffType = 'month';
				diffValue = months;
			} else {
				if (days > 0) {
					diffType = 'day';
					diffValue = days;
				} else {
					if (hours > 0) {
						diffType = 'hour';
						diffValue = hours;
					} else {
						if (minutes > 0) {
							diffType = 'minute';
							diffValue = minutes;
						} else {
							diffType = 'second';
							diffValue = seconds === 0 ? (seconds = 1) : seconds;
						}
					}
				}
			}
		}
		return formats[diffType].replace('%n%', diffValue);
	}
}
```

**注意**

引入方式

```html
<!-- 内联 -->
<script module="test" lang="wxs">
  //...code
</script>
<script module="utils" lang="filter">
  //...code
</script>


<!-- 外部引入 -->
<script module="utils" lang="wxs" src="./utils.wxs"></script>
<script module="utils" lang="filter" src="./utils.filter.js"></script>
<script module="utils" lang="sjs" src="./utils.sjs"></script>
```

- **【重要】** 编写wxs、sjs、filter.js 内容时必须遵循相应语法规范
- **【重要】** `module`所指定的模块名不可与`data`、`methods`、`computed`内的属性重名
- vue3 项目不支持 `setup script` 用法
- 目前各个小程序正在完善相关规范，可能会有较大改动，请务必仔细阅读相应平台的文档
- 支付宝小程序请使用sjs规范，[详见](https://docs.alipay.com/mini/framework/sjs)
- 支付宝小程序sjs只能定义在.sjs 文件中，然后使用```<script>```标签引入
- 支付宝小程序`script`的标签属性`name`、`from`被统一为了`module`、`src`以便后续实现多平台统一写法
- 百度小程序中请使用Filter规范，[详见](https://smartprogram.baidu.com/docs/develop/framework/view_filter/)
- 百度小程序Filter只能导出`function`函数
- 暂不支持在 wxs、sjs、filter.js 中调用其他同类型文件
- wxs、filter.js既能内联使用又可以外部引入，sjs只能外部引入
- QQ小程序目前对内联的 wxs 支持不好，部分写法可能会导致编译出错，尽量使用外部引入的方式
- 在微信自定义组件中`wxcomponents`也可以使用wxs
- `nvue`页面暂不支持wxs、sjs、filter.js
- 各个`script`标签会分别被打包至对应支持平台，不需要额外写条件编译
- 自`HBuilderX 2.2.5`开始，不推荐使用各个小程序自有的引入方式，推荐使用`script`标签引入
- App和H5端，提供了wxs的升级版，更加强大，见下面的 [renderjs](/tutorial/renderjs.html) 章节
