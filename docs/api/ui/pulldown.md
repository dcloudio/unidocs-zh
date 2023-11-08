### onPullDownRefresh
在 js 中定义 onPullDownRefresh 处理函数（和onLoad等生命周期函数同级），监听该页面用户下拉刷新事件。
Define the onPullDownRefresh processing function (at the same level as the lifecycle functions such as onLoad) in js to listen to the user's pull-down refresh event of this page.

- 需要在 ``pages.json`` 里，找到的当前页面的pages节点，并在 ``style`` 选项中开启 ``enablePullDownRefresh``。
- You need to find the pages node of the current page in `pages.json` and enable `enablePullDownRefresh` in the `style` option.
- 当处理完数据刷新后，``uni.stopPullDownRefresh`` 可以停止当前页面的下拉刷新。
- When the data refresh is finished, `uni.stopPullDownRefresh` can stop the pull-down refresh of the current page.

### uni.startPullDownRefresh(OBJECT)
开始下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
Start pull-down refresh which triggers the pull-down refresh animation after calling, and the effect is consistent with user's manual pull-down refresh.

**OBJECT 参数说明**
**OBJECT parameter description**

|参数名|类型|必填|说明|
| Parameter name| Type| Required| Instruction|
|:-|:-|:-|:-|
|success|Function|否|接口调用成功的回调|
| success| Function| No| Callback for successful interface calling|
|fail|Function|否|接口调用失败的回调函数|
| fail| Function| No| Callback function for failed interface calling|
|complete|Function|否|接口调用结束的回调函数（调用成功、失败都会执行）|
| complete| Function| No| Callback function for closed interface calling (available both for successful and failed calling)|

**success 返回参数说明**
**success return parameter description**

|参数|类型|说明|
| Parameter| Type| Instruction|
|:-|:-|:-|
|errMsg|String|接口调用结果|
| errMsg| String| Interface call result|

### uni.stopPullDownRefresh()
停止当前页面下拉刷新。
Stop the current page pull-down refresh.

**示例**
**Example**

pages.json

```javascript
{
    "pages": [
        {
        	"path": "pages/index/index",
        	"style": {
        		"navigationBarTitleText": "uni-app",
        		"enablePullDownRefresh": true
        	}
        }
    ],
    "globalStyle": {
    	"navigationBarTextStyle": "white",
    	"navigationBarBackgroundColor": "#0faeff",
    	"backgroundColor": "#fbf9fe"
    }
}
```

index.vue
```javascript
// 仅做示例，实际开发中延时根据需求来使用。
// Only for example, the delay is used as required in actual development.
export default {
	data() {
		return {
			text: 'uni-app'
		}
	},
	onLoad: function (options) {
		setTimeout(function () {
			console.log('start pulldown');
		}, 1000);
		uni.startPullDownRefresh();
	},
	onPullDownRefresh() {
		console.log('refresh');
		setTimeout(function () {
			uni.stopPullDownRefresh();
		}, 1000);
	}
}
```

**注意**
**Notice**

- 支付宝小程序```startPullDownRefresh```在开发者工具里会提示``暂未开放，请勿使用``
- The Alipay applet ```startPullDownRefresh``` will prompt in the developer tool ``not yet open, please do not use``
- 支付宝小程序```startPullDownRefresh```请使用真机调试（非真机预览）
- Alipay applet ```startPullDownRefresh``` please use real machine to debug (not real machine preview)
- 后续支付宝小程序开发工具更新可能会有所修改
- Subsequent updates of Alipay applet development tools may be modified

### FAQ
Q：如何暂时禁用掉下拉刷新，待需要的时候再重新开启？
Q: How to temporarily disable the pull-down refresh and turn it on when needed?
A：`App` 平台下可以处理此类场景，详细参考：[uni-app 中实现动态禁用/开启下拉刷新](https://ask.dcloud.net.cn/article/35134)
A: `App` This type of scenario can be handled on the platform. For details, please refer to [Dynamic disable/enable pull-down refresh in uni-app](https://ask.dcloud.net.cn/article/35134)

Q：自定义title如何让下拉刷新在title之下
Q: How to place pull-down refresh under title with custom title
A：App和H5端使用circle方式的下拉刷新，设offset在title高度之下。hello uni-app的模板-导航栏中有示例。小程序端无法实现，除非放弃原生下拉刷新，自己模拟下拉刷新，插件市场有类似插件，但性能不如原生下拉刷新。
A: The App and H5 sides use the circle method to pull down to refresh, and set the offset below the title height. Template for hello uni-app - there are examples in the navigation bar. The applet cannot be implemented unless the native pull-down refresh is abandoned and the pull-down refresh is simulated by yourself. There are similar plug-ins in the plug-in market, but the performance is not as good as the native pull-down refresh.

Q：如何自定义下拉刷新样式
Q: How to customize the pull-down refresh style
A：小程序端的原生下拉刷新样式是固定的；App端原生的下拉刷新有2种样式可选择，下拉漏出雪花和下拉circle圈。如果使用nvue，可以使用[refresh组件](https://uniapp.dcloud.io/component/refresh)自定义下拉刷新，都是原生渲染。如果想使用scroll-view在前端实现自定义下拉刷新，需要注意列表不可太长和太复杂，否则会有性能问题。[插件市场](https://ext.dcloud.net.cn/)搜索下拉刷新有示例。
A: The native pull-down refresh style on the applet side is fixed; the native pull-down refresh style on the app side has two styles to choose from, pull-down snowflakes and pull-down circles. If you use nvue, you can use [refresh component](https://uniapp.dcloud.io/component/refresh) to customize the pull-down refresh, all of which are native rendering. If you want to use scroll-view to implement custom pull-down refresh on the front end, you need to pay attention that the list should not be too long and complicated, otherwise there will be performance problems. [Plugin Market](https://ext.dcloud.net.cn/) There is an example to search for pull-down refresh.
