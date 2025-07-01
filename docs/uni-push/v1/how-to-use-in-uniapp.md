## 在 uni-app 中使用
在 uni-app 中使用 `uni-push` 的话，可以通过条件编译直接使用 plus 的能力。

### App.vue
较为合理的方案，是在 App.vue 中一次监听，集中处理获取推送消息后的操作。
```javascript
export default {
	onLaunch: function() {
		// #ifdef APP-PLUS
		const _self = this;
		const _handlePush = function(message) {
			// TODO
		};
		plus.push.addEventListener('click', _handlePush);
		plus.push.addEventListener('receive', _handlePush);
		// #endif
	}
}
```
#### 回调中的处理
- 较为常见的场景是，收到 Push 消息后根据推送消息的信息，跳转到某个指定的页面。
```javascript
uni.navigateTo({
    url: message.payload.pagePath
});
```
- 如果某个数据信息，需要在推送成功后同步到其它页面，就需要用到 vuex 了。

### vuex
/store/index.js
```javascript
export default new Vuex.Store({
	state: {
		pushMessage: {}
	},
	mutations: {
		updatePushMessage(state, message) {
			/**
			 * 注意：这里为了方便预览查看效果，始终对 payload 做了序列化的处理。
			 * 实际开发期中，请自行调整代码并注意发送的 payload 消息格式。
			 */ 
			let payload = message.payload;
			if (typeof payload !== 'string') {
				message.payload = JSON.stringify(payload);
			}
			state.pushMessage = message || {};
		}
	}
})
```
### 消息同步
在 App.vue 中更新推送消息
```javascript
export default {
	onLaunch() {
		// #ifdef APP-PLUS
		const _self = this;
		const _handlePush = function(message) {
			/**
			 * 通过 vuex 来同步页面的数据，仅做演示。
			 * 实际开发中，这里可能是跳转到某个页面等操作，请根据自身业务需求编写。
			 */
			_self.updatePushMessage(message);
		};
		plus.push.addEventListener('click', function(message) {
			plus.nativeUI.toast('push click');
			_handlePush(message);
		});
		plus.push.addEventListener('receive', function(message) {
			plus.nativeUI.toast('push receive');
			_handlePush(message);
		});
		// #endif
	},
	methods: {
		...mapMutations(['updatePushMessage'])
	}
}

```
/pages/index/index.vue 页面渲染推送消息结果
```javascript
<view>
	<text class="title">推送消息 title：{{pushMessage.title}}</text>
	<text class="title">推送消息 content：{{pushMessage.content}}</text>
	<text class="title">推送消息 payload：{{pushMessage.payload}}</text>
	<text class="title">推送消息 aps：{{pushMessage.aps}}</text>
</view>
```
### 源码
详细的示例代码，请[点此下载](https://web-ext-storage.dcloud.net.cn/doc/uni-push/v1/uni-push.zip)。

## 测试发布
推送功能，涉及到第三方的 SDK 模块，因此与登录、分享等功能类似，需要打包后生效。
1. 阅读 [`uni-push`开通指南](../open.md) 开通服务
2. manifest.json->App SDK配置，勾选“DCloud UniPush”。
3. manifest.json->App模块权限配置，勾选 Push(消息推送)。
4. 提交打包，自定义基座或正式打包均可。

## 结语
现如今各大厂商对于应用权限的管理愈发严格，在开发 Push 功能的过程中，需要仔细并且耐心。
如果使用 `uni-push` 的过程中遇到问题，请仔细对照文档检查后，再发帖详细描述问题。
