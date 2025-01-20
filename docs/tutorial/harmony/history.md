# 历史变更

自 uni-app 4.31 版本开始，鸿蒙运行时架构进行了较大的变更。逻辑层从 ArkTS 环境加载改为使用 [JSVM](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/jsvm-introduction-V5) 加载。uts插件仍然是ArkTS环境，仅开发者编写的普通代码和vue框架运行在 JSVM 中。

其影响如下：

- 因为 ArkTS 和 JS 的差异，之前存在部分 JS 代码在 ArkTS 环境下执行结果和预期不符的情况，这些问题在迁移在 JSVM 环境下不再存在。
- JSVM 下不再支持直接调用鸿蒙的原生接口。调用原生API的代码请写在 [uts 插件](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-for-harmony.html)中。
- 不支持在 DevEco Studio 中设置断点调试。
- 目前由于华为 JSVM 的限制，仅支持运行在 arm64 架构的设备或模拟器上。也就是目前不支持x86模拟器了，当然不排除未来华为升级后支持的可能性，届时无需HBuilderX更新。
- HBuilder X 升级至 `4.51 ` 需要在工程级的 `build-profile.json5` 的 `products` 字段（如果有多项都要配置）中配置 `compatibleSdkVersionStage: "beta6"`
