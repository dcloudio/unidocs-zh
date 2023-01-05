
`uni-app`已支持`vue 3.0`开发，详见：[https://ask.dcloud.net.cn/article/37834](https://ask.dcloud.net.cn/article/37834)
`uni-app` has supported `vue 3.0` development, see [https://ask.dcloud.net.cn/article/37834](https://ask.dcloud.net.cn/article/37834)

`uni-app`官方基于`vue 3.0 & uniCloud`提供了简单、易用的SSR支持。
`uni-app` officially provides simple and easy-to-use SSR support based on `vue 3.0 & uniCloud`.

[news.dcloud.io](https://news.dcloud.io)是一套基于`uni-app & uniCloud` 开发的新闻系统，你可以通过浏览器查看源码，这是一个服务端渲染（SSR）的站点示例。
[news.dcloud.io](https://news.dcloud.io) is a news system based on `uni-app & uniCloud`. You can view the source code through a browser, which is an example of a server-side rendering (SSR) site.


#### 什么是服务器端渲染 (SSR)？
#### What is server-side rendering (SSR)?
uni-app 默认情况下，是在客户端中输出 Vue 组件，进行生成 DOM 和操作 DOM。然而，也可以将同一个组件渲染为服务器端的 HTML 字符串，将它们直接发送到浏览器，最后将这些静态标记"激活"为客户端上完全可交互的应用程序。
By default, uni-app outputs Vue components in the client to generate DOM and operate DOM. However, it is also possible to render the same component as HTML strings on the server side, send them directly to the browser, and finally "activate" these static markers as fully interactive applications on the client.

服务器渲染的 uni-app 应用程序也可以被认为是"同构"或"通用"，因为应用程序的大部分代码都可以在服务器和客户端上运行。
The uni-app application rendered by the server can also be considered as "homogeneous" or "universal", because most of the application code can run on the server and the clients.
#### 为什么使用服务器端渲染 (SSR)？
#### Why use server-side rendering (SSR)?
与传统 SPA (单页应用程序 (Single-Page Application)) 相比，服务器端渲染 (SSR) 的优势主要在于：
The advantages of server-side rendering (SSR) over traditional SPA (Single-Page Application) mainly lie in:

- 更好的 SEO，搜索引擎爬虫抓取工具可以直接查看完全渲染的页面。
- Better SEO, searching engine crawling tool can directly view the fully rendered page.

- 更快的内容到达时间 (time-to-content)，特别是对于缓慢的网络情况或运行缓慢的设备。无需等待所有的 JavaScript 都完成下载并执行，才显示服务器渲染的标记，所以你的用户将会更快速地看到完整渲染的页面。通常可以产生更好的用户体验，并且对于那些「内容到达时间(time-to-content) 与转化率直接相关」的应用程序而言，服务器端渲染 (SSR) 至关重要。
- Faster time-to-content, especially for slow network conditions or slow running devices. No need to wait for all JavaScript to be downloaded and executed before displaying the marker rendered by the server, so your users will see the fully rendered page more quickly. Generally, it can produce better user experience, and as far as those applications where "time-to-content is directly related to conversion rate" are concerned, server-side rendering (SSR) is of great significance.

使用服务器端渲染 (SSR) 时还需要有一些权衡之处：
There are some trade-offs when using server-side rendering (SSR):

- 开发条件所限。浏览器特定的代码，只能在某些生命周期钩子函数 (lifecycle hook) 中使用；一些外部扩展库 (external library) 可能需要特殊处理，才能在服务器渲染应用程序中运行。
- Limited by development conditions. Browser-specific code can only be used in some lifecycle hook functions. Some external library may require special handling to run in the server rendering application.

- 涉及构建设置和部署的更多要求。与可以部署在任何静态文件服务器上的完全静态单页面应用程序 (SPA) 不同，服务器渲染应用程序，需要处于 Node.js server 运行环境。
- More requirements related to build settings and deployment. Unlike the fully static single page application (SPA) that can be deployed on any static file server, the server rendering application needs to be in the Node.js server running environment.

- 更多的服务器端负载。在 Node.js 中渲染完整的应用程序，显然会比仅仅提供静态文件的 server 更加大量占用 CPU 资源 (CPU-intensive - CPU 密集)，因此如果你预料在高流量环境 (high traffic) 下使用，请准备相应的服务器负载，并明智地采用缓存策略。
- More server-side load. The fully rendered application in Node.js obviously takes up more CPU resources (CPU-intensive) than the server that only provides static files. Therefore, if you expect to use it in a high traffic environment, please prepare the corresponding server load and use the caching strategy wisely.

幸运的是，以上问题，[uniCloud](https://uniapp.dcloud.net.cn/uniCloud/README) 均为您提供了解决方案
Fortunately, [uniCloud](https://uniapp.dcloud.net.cn/uniCloud/README) provides you with solutions for the above problems.
- [unicloud-db](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db) 组件是 uniCloud 提供的一个数据库查询组件，内置支持SSR，开发者无需任何额外开发。
- The [unicloud-db](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db) component is a database query component provided by uniCloud, with built-in support for SSR, and developers do not need any additional development.
- uniCloud 云函数与静态托管，提供了弹性扩容、大并发承载、防DDoS攻击的世界最顶级的IT基础设施，通过 HBuilderX 可将 uni-app 项目一键部署为支持 SSR 的 h5 网站
- The uniCloud cloud function and static hosting provide the world's top IT infrastructure with flexible capacity expansion, large concurrent load and anti-DDoS attack. Through HBuilderX, uni-app project can be deployed as an h5 website supporting SSR with one click.


#### 编写通用代码
#### Write generic code
在进一步介绍之前，让我们花点时间来讨论编写"通用"代码时的约束条件 - 即运行在服务器和客户端的代码。由于用例和平台 API 的差异，当运行在不同环境中时，我们的代码将不会完全相同。所以这里我们将会阐述你需要理解的关键事项。
Before further introduction, let's take a moment to discuss the constraints when writing "generic" code - i.e., the code running on the server and the clients. Because of the differences between use cases and platform APIs, our code will not be exactly identical when running in different environments. So here we will lay out the key points you need to understand.
##### 服务器上的数据响应
##### Data response on the server
在纯客户端应用程序 (client-only app) 中，每个用户会在他们各自的浏览器中使用新的应用程序实例。对于服务器端渲染，我们也希望如此：每个请求应该都是全新的、独立的应用程序实例，以便不会有交叉请求造成的状态污染 (cross-request state pollution)。
In the client-only apps, each user will use a new application instance in their respective browser. For server-side rendering, we also hope that each request should be a brand-new and independent application instance, so that there will be no cross-request state pollution caused by cross-requests.

因为实际的渲染过程需要确定性，所以我们也将在服务器上“预取”数据 ("pre-fetching" data) - 这意味着在我们开始渲染时，我们的应用程序就已经解析完成其状态。也就是说，将数据进行响应式的过程在服务器上是多余的，所以默认情况下禁用。禁用响应式数据，还可以避免将「数据」转换为「响应式对象」的性能开销。
Because the actual rendering process requires certainty, we will also "pre-fetch" data on the server - this means our application has already finished parsing its state by the time we start rendering. In other words, it is unnecessary to make the data responsive on the server, so that it is disabled by default. Disabling responsive data can also avoid the performance overhead of converting "data" into "responsive objects".
##### 组件生命周期钩子函数
##### Component lifecycle hook functions
由于没有动态更新，所有的生命周期钩子函数中，只有 beforeCreate 和 created 会在服务器端渲染 (SSR) 过程中被调用。这就是说任何其他生命周期钩子函数中的代码（例如 beforeMount 或 mounted），只会在客户端执行。
Since there is no dynamic update, among all lifecycle hook functions, only beforeCreate and created will be called in the process of server-side rendering (SSR). That is to say, the code in any other lifecycle hook functions (such as beforeMount or mounted) will only be executed on the client.

此外还需要注意的是，你应该避免在 beforeCreate 和 created 生命周期时产生全局副作用的代码，例如在其中使用 setInterval 设置 timer。在纯客户端 (client-side only) 的代码中，我们可以设置一个 timer，然后在 beforeUnmount 或 unmounted 生命周期时将其销毁。但是，由于在 SSR 期间并不会调用销毁钩子函数，所以 timer 将永远保留下来。为了避免这种情况，请将副作用代码移动到 beforeMount 或 mounted 生命周期中。
In addition, it is noteworthy that you should avoid the code that generates global side effects during the lifecycles of beforeCreate and created, such as using setInterval to set the timer in them. In the pure client-side only code, we can set a timer and then destroy it during the lifecycle of beforeUnmount or unmounted. However, considering that the destroy hook function will not be called during SSR, the timer will remain forever. To avoid this situation, please move the side-effect code to the beforeMount or mounted lifecycle.
##### 访问特定平台(Platform-Specific) API
##### Access the Platform-Specific APIs
通用代码不可接受特定平台的 API，因此如果你的代码中，直接使用了像 window 或 document，这种仅浏览器可用的全局变量，则会在 Node.js 中执行时抛出错误，反之也是如此。
Common code cannot accept the APIs of specific platform, so if the browser-only global variables like window or document are directly applied in your code, errors may be thrown when executed in Node.js, and vice versa.

对于仅浏览器可用的 API，通常方式是，在「纯客户端 (client-only)」的生命周期钩子函数中惰性访问 (lazily access) 它们。
For browsers-only APIs, the usual way is to lazily access them in the "client-only" lifecycle hook functions.

请注意，考虑到如果第三方 library 不是以上面的通用用法编写，则将其集成到服务器渲染的应用程序中，可能会很棘手。你可能要通过模拟 (mock) 一些全局变量来使其正常运行，但这只是 hack 的做法，并且可能会干扰到其他 library 的环境检测代码。
Please note that it can be tricky to integrate a third-party library into the server-rendered application if it is not written in the common usage above. You may have to mock some global variables to make it work, but this is just what hack does and may interfere with the environment detection codes of other libraries.
#### 数据预取和状态
#### Data prefetching and status
在服务器端渲染(SSR)期间，我们本质上是在渲染我们应用程序的"快照"，所以如果应用程序依赖于一些异步数据，那么在开始渲染过程之前，需要先预取和解析好这些数据。
During server-side rendering (SSR), we are essentially rendering a "snapshot" of our application, so if the application depends on some asynchronous data, we need to prefetch and parse these data before starting the rendering process.

另一个需要关注的问题是在客户端，在挂载 (mount) 到客户端应用程序之前，需要获取到与服务器端应用程序完全相同的数据 - 否则，客户端应用程序会因为使用与服务器端应用程序不同的状态，然后导致混合失败。
Another concern is that on the client, it is necessary to get the same data as the server-side application before mounting to the client application - otherwise, the mixing may fail because the client application uses a different state from the server-side application.

为了解决这个问题，获取的数据需要位于视图组件之外，即放置在专门的数据预取存储容器(data store)或"状态容器(state container)"中。首先，在服务器端，我们可以在渲染之前预取数据，并将数据填充到 store 中。此外，我们将在 HTML 中序列化(serialize)和内联预置(inline)状态。这样，在挂载(mount)到客户端应用程序之前，可以直接从 store 获取到内联预置(inline)状态。
To solve this problem, the obtained data needs to be located outside the view component, i.e., being placed in a special prefetch data store or "state container". First, on the server side, we can prefetch data before rendering and fill the data into the store. In addition, we will serialize and inline the states in HTML. In this way, before mounting to the client application, the inline status can be obtained directly from the store.

- 对于简单应用，我们可以直接使用`@dcloudio/uni-app`提供的`ssrRef`（等同于 vue3 的 [ref](https://v3.cn.vuejs.org/api/refs-api.html#ref)）,`shallowSsrRef`（等同于 vue3 的 [shallowRef](https://v3.cn.vuejs.org/api/refs-api.html#shallowref)），来确保服务端数据与客户端数据的一致性
- For simple applications, we can directly use `ssrRef` (equivalent to [ref](https://v3.cn.vuejs.org/api/refs-api.html#ref) of vue3) and `shallowSsrRef` (equivalent to [shallowRef](https://v3.cn.vuejs.org/api/refs-api.html#shallowref) of vue3)) provided by `@dcloudio/uni-app` to ensure the consistency between server data and client data.
  * 在非组件生命周期中使用`ssrRef`和`shallowSsrRef`时，数据将被存储在全局
  * When using `ssrRef` and `shallowSsrRef` in the non-component lifecycle, the data will be stored globally
  * `ssrRef`和`shallowSsrRef`均支持第二个参数，作为数据的key
  * Both `ssrRef` and `shallowSsrRef` support the second parameter as the key of the data

示例：
Example:
```js
import { ssrRef } from '@dcloudio/uni-app'
const categories = ssrRef([], 'categories'); // 在非组件生命周期中使用时，为全局数据，可以跨组件跨页面使用
export default {
	setup (){
		const items = ssrRef([]); // 在生命周期中使用时，为组件级别作用域，不指定第二个参数key的情况下，编译器会自动补充(默认，以文件+函数位置做base64生成key)
		return { items, categories }
	}
}
```
- 对于复杂应用，我们可以使用官方状态管理库[Vuex](https://github.com/vuejs/vuex/)
- For complex applications, we can use the official state management library [Vuex](https://github.com/vuejs/vuex/)

示例：
Example:

1. 我们先创建一个 store/index.js 文件，里面会模拟一些根据 id 获取 item 的逻辑：
1. We shall create a store/index.js file first, which will simulate some logic of obtaining the item according to id:
  ```js
  import { createStore } from 'vuex'

  // 模拟接口获取数据
// Simulate the interface to acquire data
  function fetchItem(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id,
          title: 'title' + id,
        })
      }, 300)
    })
  }

  export default () => {
    return createStore({
      state() {
        return {
          items: {},
        }
      },
      actions: {
        fetchItem({ commit }, id) {
          return fetchItem(id).then((item) => {
            commit('setItem', { id, item })
          })
        },
      },
      mutations: {
        setItem(state, { id, item }) {
          state.items[id] = item
        },
      },
    })
  }

  ```
2. 然后修改 main.js
2. Then modify main.js

	```js
	import { createSSRApp } from 'vue'
	import App from './App.vue'
	import createStore from './store'
	export function createApp() {
	  const app = createSSRApp(App)
	  
	  const store = createStore() // 创建 store
	  app.use(store)
	  
	  return {
		app,
		store,// 必须返回 store
	  }
	}

	```
	
3. 在页面或组件中使用
3. Use in pages or components

	```html
	<template>
	  <text v-if="item">{{ item.title }}</text>
	  <text v-else>...</text>
	</template>

	<script>
	const id = 1;// 模拟ID
	export default {
	  computed: {
		item() {
		  return this.$store.state.items[id]
		}
	  },
	  serverPrefetch() {// 服务端预取数据的生命周期
		return this.fetchItem()
	  },
	  mounted() { // 仅客户端执行的生命周期
		if (!this.item) { // 判断服务端是否已正常获取，若未获取，重新调用加载数据
		  this.fetchItem()
		}
	  },
	  methods: {
		fetchItem() {
		  return this.$store.dispatch('fetchItem', id)
		}
	  }
	}
	</script>
	```

#### 运行与调试@run-debug

HBuilderX创建的项目在运行菜单勾选`启用SSR`再运行到浏览器即可

![](https://web-assets.dcloud.net.cn/unidoc/zh/run-ssr-checked.jpg)

cli创建的项目使用`npm run dev:h5:ssr`运行即可

#### 发行与部署@distribute
#### Release and deploy @distribute

发行ssr会得到两部分内容，云端部分和静态资源部分。在uniCloud内部署需要将云端部分部署到云函数内，静态资源部分部署在前端网页托管内。
Releasing ssr will get two parts: the cloud part and the static resource part. To deploy in uniCloud needs to deploy the cloud part into the cloud function, and the static resource part into the front-end web hosting.

##### 部署到`uniCloud`@distribute-unicloud
##### Deploy to `uniCloud`@distribute-unicloud

**前置步骤**
**Pre-step**

> **务必完成前置步骤之后再进行后续操作**
> **Be sure to complete the pre-step before proceeding with the subsequent operation**

1. 开通[uniCloud](https://unicloud.dcloud.net.cn)以及[前端网页托管](https://uniapp.dcloud.net.cn/uniCloud/hosting)
1. Open [uniCloud](https://unicloud.dcloud.net.cn) and [Front-end web hosting](https://uniapp.dcloud.net.cn/uniCloud/hosting)
2. 云函数绑定自定义url化域名，参考文档：[云函数Url化](https://uniapp.dcloud.net.cn/uniCloud/http)，阿里云未绑定自定义域名会直接下载云函数返回的html页面无法在浏览器中展示
2. Cloud function binding custom urlized domain name, refer to the document: [Cloud Function Urlization](https://uniapp.dcloud.net.cn/uniCloud/http), Alibaba Cloud will download directly if the custom domain name is not bound The html page returned by the cloud function cannot be displayed in the browser
3. 前端网页托管绑定自定义域名，参考文档：[前端网页托管配置域名](https://uniapp.dcloud.net.cn/uniCloud/hosting?id=domain)
3. For front-end web hosting binding custom domain name, please refer to the document [Front-end web hosting configuration domain name](https://uniapp.dcloud.net.cn/uniCloud/hosting?id=domain)
4. 将前两步部署的域名都配置在跨域配置内，即允许云函数跨域访问前端网页托管内的资源，也允许前端网页托管跨域访问云函数。参考文档：[H5中使用uniCloud的跨域处理](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=useinh5)
4. Configure the domain names deployed in the first two steps in the cross-domain configuration, that is to say, cross-domain access from cloud functions to resources in front-end web hosting as well as cross-domain access from front-end web hosting to cloud functions are both allowed. Refer to the document [Cross-domain processing using uniCloud in H5](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=useinh5)
5. 从插件市场导入[uni-ssr](https://ext.dcloud.net.cn/plugin?id=5338)到项目内
5. Import [uni-ssr](https://ext.dcloud.net.cn/plugin?id=5338) from the plug-in market into the project

**编译发行**
**Compile and release**

**使用HBuilderX发行并自动部署**
**Use HBuilderX to release and deploy automatically**

需要HBuilderX版本`3.5.1`及以上版本，支持部署到阿里云和腾讯云此前仅支持自动部署到阿里云
Requires HBuilderX version `3.5.1` and above, supports deployment to Alibaba Cloud and Tencent Cloud previously only supported automatic deployment to Alibaba Cloud

1. 配置`vite.config.js`中的`base`为`前端网页托管`地址

	```js
	import {
		defineConfig
	} from 'vite'
	import uni from '@dcloudio/vite-plugin-uni'
	// https://vitejs.dev/config/
	export default defineConfig({
		base: 'https://static-xxxx.bspapp.com/', // uniCloud 前端网页托管资源地址（主要是应用编译后的js，图片等静态资源，可以配置为二级目录）
		plugins: [
			uni(),
		],
		ssr: {
			format: 'cjs'
		}
	})
	```

2. 通过`HBuilderX`的`发行菜单->网站 PC-Web或手机H5`、勾选`ssr`、勾选`将编译后的资源部署在uniCloud前端网页托管`

	![自动部署](https://web-assets.dcloud.net.cn/unidoc/zh/ssr-img-02.png)
	
3. 配置`uni-ssr`的云函数URL化路径，请参考文档：[云函数URL化](https://uniapp.dcloud.net.cn/uniCloud/http)

**手动发行部署**
**Manual release and deployment**

1. 配置`vite.config.js`中的`base`为`前端网页托管`地址
1. Configure `base` in `vite.config.js` as `Front-end website hosting` address

	```js
	import {
		defineConfig
	} from 'vite'
	import uni from '@dcloudio/vite-plugin-uni'
	// https://vitejs.dev/config/
	export default defineConfig({
		base: 'https://static-xxxx.bspapp.com/', // uniCloud 前端网页托管资源地址（主要是应用编译后的js，图片等静态资源，可以配置为二级目录）
		plugins: [
			uni(),
		],
		ssr: {
			format: 'cjs'
		}
	})
	```

2. 编译：
2. Compilation:
  
  cli工程：`npm run build:h5:ssr`或通过`HBuilderX 3.1.16及以上版本`的`发行菜单->网站 PC-Web或手机H5`、勾选`ssr`
  cli project: `npm run build:h5:ssr` or by `HBuilderX 3.1.16 and above` of `Release Menu -> website PC-Web or mobile phone H5`, check `ssr`
  
  非cli工程：通过`HBuilderX 3.1.16及以上版本`的`发行菜单->网站 PC-Web或手机H5`、勾选`ssr`
  Non-cli project: by `Release Menu -> website PC-Web or mobile phone H5` of `HBuilderX 3.1.16 and above`, check `ssr`
  
  ![以ssr模式发行](https://web-assets.dcloud.net.cn/unidoc/zh/ssr-publish.jpg)
  
3. 部署静态资源到[前端网页托管](https://uniapp.dcloud.net.cn/uniCloud/hosting)
3. Deploy static resources to [Front-end web hosting](https://uniapp.dcloud.net.cn/uniCloud/hosting)

  将编译后的`dist/build/h5/client`中的资源上传至前端网页托管，推荐使用免费的阿里云服务空间
  Upload the compiled resources in `dist/build/h5/client` to the front-end web hosting. The free Alibaba Cloud service space is recommended.

4. 部署`uni-ssr`云函数
4. Deploy `uni-ssr` cloud function

  将编译后的`dist/build/h5/server`目录拷贝至`uni-ssr`云函数根目录，并上传。
  Copy the compiled `dist/build/h5/server` directory to the `uni-ssr` cloud function root directory and upload it.

5. 配置`uni-ssr`的云函数URL化路径，请参考文档：[云函数URL化](https://uniapp.dcloud.net.cn/uniCloud/http)
5. To configure the URL path of the cloud function of `uni-ssr`, please refer to the document [URL normalization of cloud function](https://uniapp.dcloud.net.cn/uniCloud/http)


#### 注意事项
#### Precautions

- 浏览器控制台提示如下警告，说明服务器和客户端渲染的结果不一致，检查模板绑定的属性是否使用了 `ssrRef`
- The browser console prompts the following warning, indicating that the results of server and client rendering are inconsistent. Check whether the template-bound properties use `ssrRef`

```
[Vue warn]: Hydration node mismatch:
- Client ***
- Server ***
```
