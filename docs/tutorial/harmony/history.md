# 历史变更

### uni-app 4.81

自 uni-app 4.81 版本开始，运行逻辑层的 JSVM 转移到单独的子线程中运行，以避免阻塞主线程。

### uni-app 4.51

升级至 uni-app 4.51 版本后，由于 SDK 调整，影响如下：

- 需要在工程级的 `build-profile.json5` 的 `products` 字段（如果有多项都要配置）中配置 `compatibleSdkVersionStage: "beta6"` [鸿蒙文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-profile-V5?ha_source=Dcloud&ha_sourceId=89000448)

将鸿蒙模拟器更新到 `HarmonyOS 5.1.1(19) Beta1（2025-06-12）` 对应 `DevEco Studio 5.1.1 Beta`。由 4.31 架构改动引发的 uni-app 项目无法运行到 windows 的 x86_64 模拟器的问题得到了修复，开发者可以通过升级鸿蒙模拟器的版本之后，点击运行不兼容的对话框中的 `强制继续运行` 按钮。

### uni-app 4.31

自 uni-app 4.31 版本开始，鸿蒙运行时架构进行了较大的变更。逻辑层从 ArkTS 环境加载改为使用 [JSVM](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/jsvm-introduction-V5?ha_source=Dcloud&ha_sourceId=89000448) 加载。uts 插件仍然是 ArkTS 环境，仅开发者编写的普通代码和 Vue 框架运行在 JSVM 中。

**其影响如下：**

- 因为 ArkTS 和 JS 的差异，之前存在部分 JS 代码在 ArkTS 环境下执行结果和预期不符的情况，这些问题在迁移在 JSVM 环境下不再存在。
- JSVM 下不再支持直接调用鸿蒙的原生接口。调用原生 API 的代码请写在 [uts 插件](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-for-harmony.html)中。
- 不支持在 DevEco Studio 中设置断点调试。
- 目前由于华为 JSVM 的限制，仅支持运行在 arm64 架构的设备或模拟器上。也就是目前不支持 x86 模拟器了，当然不排除未来华为升级后支持的可能性，届时无需 HBuilderX 更新。
