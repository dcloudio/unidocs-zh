#### web-view

`web-view` 是一个 web 浏览器组件，可以用来承载网页的容器，会自动铺满整个页面（nvue 使用需要手动指定宽高）。


**属性说明**

|属性名|类型|说明|平台差异说明|
|:-|:-|:-|:-|
|src|String|webview 指向网页的链接|&nbsp;|
|allow|String|用于为 [iframe](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe) 指定其[特征策略](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/策略特征)|H5|
|sandbox|String|该属性对呈现在 [iframe](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe) 框架中的内容启用一些额外的限制条件。|H5|
|webview-styles|Object|webview 的样式|App-vue|
|@message|EventHandler|网页向应用 `postMessage` 时，会在特定时机（后退、组件销毁、分享）触发并收到消息。|H5 暂不支持（可以直接使用 [window.postMessage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage)）|
|@onPostMessage|EventHandler|网页向应用实时 `postMessage`|App-nvue|

**src**

|来源|App|H5|
|:-|:-:|:-:|
|网络|√|√|
|本地|√|√|

**webview-styles**

|属性|类型|说明|
|:-|:-|:-|
|progress|Object/Boolean|进度条样式。仅加载网络 HTML 时生效，设置为 `false` 时禁用进度条。|

**progress**

|属性|类型|默认值|说明|
|:-|:-|:-|:-|
|color|String|#00FF00|进度条颜色|

```html
<template>
	<view>
		<web-view :webview-styles="webviewStyles" src="https://uniapp.dcloud.io/static/web-view.html"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				}
			}
		}
	}
</script>

<style>

</style>
```

注意：

- 补充说明：app-vue下web-view组件不支持自定义样式，而v-show的本质是改变组件的样式。即组件支持v-if而不是支持v-show。
- App 端使用 uni.web-view.js 的最低版为 [uni.webview.1.5.2.js](https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js)
- App 平台同时支持网络网页和本地网页，但本地网页及相关资源（js、css等文件）必须放在 `uni-app 项目根目录->hybrid->html` 文件夹下或者 `static` 目录下，如下为一个加载本地网页的`uni-app`项目文件目录示例：
- nvue `web-view` 必须指定样式宽高
- V3 编译模式，网页向应用 `postMessage` 为实时消息
- app-nvue `web-view` 默认没有大小，可以通过样式设置大小，如果想充满整个窗口，设置 `flex: 1` 即可，标题栏不会自动显示 `web-view` 页面中的 title。如果想充满整个窗口且想要显示标题推荐使用 vue 页面的 `web-view`(默认充满屏幕不可控制大小), 想自定义 `web-view` 大小使用 nvue `web-view`

<pre v-pre="" data-lang="">
	<code class="lang-" style="padding:0">
┌─components           
├─hybrid              
│  └─html
│     ├─css
│     │  └─test.css
│     ├─img
│     │  └─icon.png
│     ├─js
│     │  └─test.js
│     └─local.html
├─pages              
│  └─index
│     └─index.vue  
├─static              
├─main.js             
├─App.vue              
├─manifest.json      
└─pages.json         
	</code>
</pre>

**示例** [查看示例](https://hellouniapp.dcloud.net.cn/pages/component/web-view/web-view)
```html
<template>
	<view>
		<web-view src="/hybrid/html/local.html"></web-view>
	</view>
</template>
```

`<web-view>` 加载的网页中支持调用部分 uni 接口：

|方法名|说明|平台差异说明|
|:-|:-|:-|
|uni.navigateTo|[navigateTo](/api/router?id=navigateto)||
|uni.redirectTo|[redirectTo](/api/router?id=redirectto)||
|uni.reLaunch|[reLaunch](/api/router?id=relaunch)||
|uni.switchTab|[switchTab](/api/router?id=switchtab)||
|uni.navigateBack|[navigateBack](/api/router?id=navigateback)||
|uni.postMessage|向应用发送消息|H5 暂不支持（可以直接使用 [window.postMessage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage)）|
|uni.getEnv|获取当前环境||

##### uni.postMessage(OBJECT)
网页向应用发送消息，在 `<web-view>` 的 `message` 事件回调 `event.detail.data` 中接收消息。

**Tips**

- 传递的消息信息，必须写在 data 对象中。
- `event.detail.data` 中的数据，以数组的形式接收每次 post 的消息。

##### uni.getEnv(CALLBACK)

**callback 返回的对象**

|属性|类型|说明|
|:-|:-|:-|
|plus|Boolean|App|


**示例**

在 `<web-view>` 加载的 HTML 中，添加以下代码：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
    <title>网络网页</title>
    <style type="text/css">
      .btn {
        display: block;
        margin: 20px auto;
        padding: 5px;
        background-color: #007aff;
        border: 0;
        color: #ffffff;
        height: 40px;
        width: 200px;
      }
      .btn-red {
        background-color: #dd524d;
      }
      .btn-yellow {
        background-color: #f0ad4e;
      }
      .desc {
        padding: 10px;
        color: #999999;
      }
      .post-message-section {
        visibility: hidden;
      }
    </style>
  </head>
  <body>
    <p class="desc">web-view 组件加载网络 html 示例。点击下列按钮，跳转至其它页面。</p>
    <div class="btn-list">
      <button class="btn" type="button" data-action="navigateTo">navigateTo</button>
      <button class="btn" type="button" data-action="redirectTo">redirectTo</button>
      <button class="btn" type="button" data-action="navigateBack">navigateBack</button>
      <button class="btn" type="button" data-action="reLaunch">reLaunch</button>
      <button class="btn" type="button" data-action="switchTab">switchTab</button>
    </div>
    <div class="post-message-section">
      <p class="desc">网页向应用发送消息</p>
      <div class="btn-list">
        <button class="btn btn-red" type="button" id="postMessage">postMessage</button>
      </div>
    </div>
    <!-- uni 的 SDK -->
    <script type="text/javascript" src="https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js"></script>
    <script type="text/javascript">
      // 待触发 `UniAppJSBridgeReady` 事件后，即可调用 uni 的 API。
      document.addEventListener('UniAppJSBridgeReady', function() {
        uni.postMessage({
            data: {
                action: 'message'
            }
        });
        uni.getEnv(function(res) {
            console.log('当前环境：' + JSON.stringify(res));
        });

        document.querySelector('.btn-list').addEventListener('click', function(evt) {
          var target = evt.target;
          if (target.tagName === 'BUTTON') {
            var action = target.getAttribute('data-action');
            switch (action) {
              case 'switchTab':
                uni.switchTab({
                  url: '/pages/tabBar/API/API'
                });
                break;
              case 'reLaunch':
                uni.reLaunch({
                  url: '/pages/tabBar/component/component'
                });
                break;
              case 'navigateBack':
                uni.navigateBack({
                  delta: 1
                });
                break;
              default:
                uni[action]({
                  url: '/pages/component/button/button'
                });
                break;
            }
          }
        });
        document.getElementById('postMessage').addEventListener('click', function() {
          uni.postMessage({
            data: {
              action: 'message'
            }
          });
        });
      });
    </script>
  </body>
</html>

```

##### `web-view`组件的层级问题解决
web-view组件在App中层级较高，如需要在vue页面中写代码为web-view组件覆盖内容，只能由web-view的组件自己弹出div。App端有如下若干方案：
1. 比较简单的方式是actionsheet等原生弹出菜单
2. 使用[原生子窗体subNvue](/api/window/subNVues)

##### web-view组件的浏览器内核说明
- H5端的web-view其实是被转为iframe运行，使用的是当前的浏览器
- App端，Android，默认使用的是os自带的浏览器内核，在设置-所有应用里，显示系统服务，可查看Android System Webview的版本。系统webview支持安装升级。
- App端，Android，支持在manifest中配置选用腾讯X5浏览器内核。使用x5内核需要一些注意事项！具体请参考[详见](https://ask.dcloud.net.cn/article/36806)
- App端，iOS，是分为UIWebview和WKWebview的，2.2.5+起默认为WKWebview，之前版本[详见](https://ask.dcloud.net.cn/article/36348)


**注意事项**
- `<web-view>` 组件默认铺满全屏并且层级高于前端组件。
- `<web-view>` 组件所在窗口的标题，跟随页面的 `<title>` 值的变化而变化（不含H5端）。
- `uni.webview.js` 最新版地址：[https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js](https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js)


##### FAQ

Q：web-view 的页面怎么和应用内的页面交互？
A：调用 uni 相关的 API，就可以实现页面切换及发送消息。参考：[在 web-view 加载的 HTML 中调用 uni 的 API](https://ask.dcloud.net.cn/article/35083)

Q: web-view 加载 uni-app H5，内部跳转冲突如何解决
A：使用 uni.webView.navigateTo...


uni.webView.navigateTo 示例，注意uni sdk放到body下面
```
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    ...
  </head>
  <body>
    <noscript>
      <strong>Please enable JavaScript to continue.</strong>
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
  <!-- uni 的 SDK -->
  <script type="text/javascript" src="https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js"></script>
  <script>
    document.addEventListener('UniAppJSBridgeReady', function() {
      uni.webView.getEnv(function(res) {
        console.log('当前环境：' + JSON.stringify(res));
      });
      // uni.webView.navigateTo(...)
    });
  </script>
</html>
```

nvue webview通信示例
```
<template>
	<view>
		<web-view ref="webview" class="webview" @onPostMessage="handlePostMessage"></web-view>
		<button class="button" @click="evalJs">evalJs(改变webview背景颜色)</button>
	</view>
</template>

<script>
	module.exports = {
		data: {
		},
		methods: {
			// webview向外部发送消息
			handlePostMessage: function(data) {
				console.log("接收到消息：" + JSON.stringify(data.detail));
			},
			// 调用 webview 内部逻辑
			evalJs: function() {
				this.$refs.webview.evalJs("document.body.style.background ='#00FF00'");
			}
		}
	}
</script>
```
