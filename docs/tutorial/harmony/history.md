# 历史变更

自 uni-app 4.31 版本开始，运行时架构进行了较大的变更。逻辑层从 ArkTS 环境加载改为使用 [JSVM](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/jsvm-introduction-V5) 加载。

其影响如下：

- 不再支持在业务代码中直接调用鸿蒙的原生接口，如果需要调用原生接口，需要使用 [uts 插件](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-for-harmony.html)的方式。
- 之前存在部分 JS 代码在 ArkTS 环境下执行结果和预期不符的情况，这些问题在 JSVM 环境下不再存在。
- 不支持在 DevEco Studio 中设置断点调试。
