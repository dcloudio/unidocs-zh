# Vue API

本文暂时只包括兼容性表格，功能详情另见 [Vue API](https://uniapp.dcloud.net.cn/tutorial/vue3-api.html)。

## 全局 API 兼容性

|  | 安卓系统版本 | 安卓 uni-app | 安卓 uni-app-x | iOS 系统版本 | iOS uni-app | iOS uni-app-x |
| :- | :- | :- | :- | :- | :- | :- |
| h | 5.0 | x | x | 10.0 | x | x |
| defineComponent | 5.0 | x | x | 10.0 | x | x |
| defineAsyncComponent | 5.0 | x | x | 10.0 | x | x |
| resolveComponent | 5.0 | x | √ | 10.0 | x | x |
| resolveDynamicComponent | 5.0 | x | x | 10.0 | x | x |
| resolveDirective | 5.0 | x | x | 10.0 | x | x |
| withDirectives | 5.0 | x | √ | 10.0 | x | x |
| createRenderer | 5.0 | x | x | 10.0 | x | x |
| nextTick | 5.0 | x | √ | 10.0 | x | x |
| provide | 5.0 | √ | x | 10.0 | √ | x |
| inject | 5.0 | √ | x | 10.0 | √ | x |
| watch | 5.0 | √ | x | 10.0 | √ | x |
| watchEffect | 5.0 | √ | x | 10.0 | √ | x |
| getCurrentInstance | 5.0 | √ | x | 10.0 | √ | x |
## App 类型兼容性

|  | 安卓系统版本 | 安卓 uni-app | 安卓 uni-app-x | iOS 系统版本 | iOS uni-app | iOS uni-app-x |
| :- | :- | :- | :- | :- | :- | :- |
| config | 5.0 | √ | √ | 10.0 | √ | x |
| use | 5.0 | √ | x | 10.0 | √ | x |
| mixin | 5.0 | √ | x | 10.0 | √ | x |
| component | 5.0 | √ | √ | 10.0 | √ | x |
| directive | 5.0 | √ | x | 10.0 | √ | x |
| provide | 5.0 | √ | x | 10.0 | √ | x |
## AppConfig 类型兼容性

|  | 安卓系统版本 | 安卓 uni-app | 安卓 uni-app-x | iOS 系统版本 | iOS uni-app | iOS uni-app-x |
| :- | :- | :- | :- | :- | :- | :- |
| performance | 5.0 | √ | x | 10.0 | √ | x |
| optionMergeStrategies | 5.0 | √ | x | 10.0 | √ | x |
| globalProperties | 5.0 | √ | x | 10.0 | √ | x |
| errorHandler | 5.0 | √ | x | 10.0 | √ | x |
| warnHandler | 5.0 | √ | x | 10.0 | √ | x |
| isCustomElement | 5.0 | √ | x | 10.0 | √ | x |
## LegacyOptions 类型兼容性

|  | 安卓系统版本 | 安卓 uni-app | 安卓 uni-app-x | iOS 系统版本 | iOS uni-app | iOS uni-app-x |
| :- | :- | :- | :- | :- | :- | :- |
| data | 5.0 | √ | √ | 10.0 | √ | x |
| computed | 5.0 | √ | √ | 10.0 | √ | x |
| methods | 5.0 | √ | √ | 10.0 | √ | x |
| watch | 5.0 | √ | √ | 10.0 | √ | x |
| provide | 5.0 | √ | x | 10.0 | √ | x |
| inject | 5.0 | √ | x | 10.0 | √ | x |
| mixins | 5.0 | √ | x | 10.0 | √ | x |
| extends | 5.0 | √ | x | 10.0 | √ | x |
| beforeCreate | 5.0 | √ | √ | 10.0 | √ | x |
| created | 5.0 | √ | √ | 10.0 | √ | x |
| beforeMount | 5.0 | √ | √ | 10.0 | √ | x |
| mounted | 5.0 | √ | √ | 10.0 | √ | x |
| beforeUpdate | 5.0 | √ | √ | 10.0 | √ | x |
| updated | 5.0 | √ | √ | 10.0 | √ | x |
| activated | 5.0 | √ | x | 10.0 | √ | x |
| deactivated | 5.0 | √ | x | 10.0 | √ | x |
| beforeDestroy | 5.0 | √ | x | 10.0 | √ | x |
| beforeUnmount | 5.0 | √ | √ | 10.0 | √ | x |
| destroyed | 5.0 | √ | x | 10.0 | √ | x |
| unmounted | 5.0 | √ | √ | 10.0 | √ | x |
| renderTracked | 5.0 | √ | x | 10.0 | √ | x |
| renderTriggered | 5.0 | √ | x | 10.0 | √ | x |
| errorCaptured | 5.0 | √ | x | 10.0 | √ | x |
| delimiters | 5.0 | x | x | 10.0 | x | x |
## ComponentOptionsBase 类型兼容性

|  | 安卓系统版本 | 安卓 uni-app | 安卓 uni-app-x | iOS 系统版本 | iOS uni-app | iOS uni-app-x |
| :- | :- | :- | :- | :- | :- | :- |
| setup | 5.0 | √ | x | 10.0 | √ | x |
| name | 5.0 | √ | √ | 10.0 | √ | x |
| template | 5.0 | x | x | 10.0 | x | x |
| render | 5.0 | x | x | 10.0 | x | x |
| components | 5.0 | √ | √ | 10.0 | √ | x |
| directives | 5.0 | √ | x | 10.0 | √ | x |
| inheritAttrs | 5.0 | √ | √ | 10.0 | √ | x |
| emits | 5.0 | √ | √ | 10.0 | √ | x |
## ComponentPublicInstance （组件实例）兼容性

|  | 安卓系统版本 | 安卓 uni-app | 安卓 uni-app-x | iOS 系统版本 | iOS uni-app | iOS uni-app-x |
| :- | :- | :- | :- | :- | :- | :- |
| $data | 5.0 | √ | √ | 10.0 | √ | x |
| $props | 5.0 | √ | √ | 10.0 | √ | x |
| $attrs | 5.0 | √ | √ | 10.0 | √ | x |
| $refs | 5.0 | √ | √ | 10.0 | √ | x |
| $slots | 5.0 | x | √ | 10.0 | √ | x |
| $root | 5.0 | √ | √ | 10.0 | √ | x |
| $parent | 5.0 | √ | √ | 10.0 | √ | x |
| $emit | 5.0 | √ | √ | 10.0 | √ | x |
| $el | 5.0 | x | √ | 10.0 | x | x |
| $options | 5.0 | √ | √ | 10.0 | √ | x |
| $forceUpdate | 5.0 | √ | x | 10.0 | √ | x |
| $nextTick | 5.0 | √ | √ | 10.0 | √ | x |
| $watch | 5.0 | √ | √ | 10.0 | √ | x |
