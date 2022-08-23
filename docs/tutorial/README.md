## 开发规范
## Development specification

为了实现多端兼容，综合考虑编译速度、运行性能等因素，```uni-app``` 约定了如下开发规范：
In order to achieve multi-terminal compatibility, considering factors such as compilation speed and running performance, ``uni-app``` stipulates the following development specifications:

- 页面文件遵循 [Vue 单文件组件 (SFC) 规范](https://vue-loader.vuejs.org/zh/spec.html)
- The page file follows the [Vue Single File Component (SFC) specification](https://vue-loader.vuejs.org/zh/spec.html)
- 组件标签靠近小程序规范，详见[uni-app 组件规范](/component/)
- The component label is close to the applet specification, see [uni-app component specification](/component/)
- 接口能力（JS API）靠近微信小程序规范，但需将前缀 ```wx``` 替换为 ```uni```，详见[uni-app接口规范](/api/)
- The interface capability (JS API) is close to the WeChat applet specification, but the prefix ```wx``` needs to be replaced with ```uni```, see [uni-app interface specification](/api/)
- 数据绑定及事件处理同 ```Vue.js``` 规范，同时补充了App及页面的生命周期
- Data binding and event handling are the same as ```Vue.js``` specification, and supplement the life cycle of App and page
- 为兼容多端运行，建议使用flex布局进行开发
- To be compatible with multi-side operation, it is recommended to use flex layout for development